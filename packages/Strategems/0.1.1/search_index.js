var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Strategems-1",
    "page": "Readme",
    "title": "Strategems",
    "category": "section",
    "text": "Strategems is a Julia package aimed at simplifying and streamlining the process of developing, testing, and optimizing algorithmic/systematic trading strategies. This package is inspired in large part by the quantstrat<sup>1</sup><sup>,</sup><sup>2</sup> package in R, adopting a similar general structure to the building blocks that make up a strategy.Given the highly iterative nature of event-driven trading strategy development, Julia\'s high-performance design (particularly in the context of loops) and straightforward syntax would seem to make it a natural fit as a language for systematic strategy research and development. While this package remains early in development, with time the hope is to be able to rapidly implement a trading idea, construct a historical backtest, analyze its results, optimize over a given parameter set, and visualize all of this with great detail."
},

{
    "location": "#Dependencies-1",
    "page": "Readme",
    "title": "Dependencies",
    "category": "section",
    "text": "This package makes heavy use of the Temporal package\'s TS time series type to facilitate the underlying computations involved in cleaning & preprocessing the data used when testing a Strategy. Additionally, the Indicators package offers many technical analysis functions that have been written/designed with the goal of a highly generalized systematic trading strategy research engine in mind, and should thus should simplify the process of working with this data quite a bit."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "The Strategems package can be installed using the standard Julia package manager functions.# Option A:\nPkg.add(\"Strategems\")\n\n# Option B:\nPkg.clone(\"https://github.com/dysonance/Strategems.jl\")"
},

{
    "location": "#Anatomy-of-a-Strategy-1",
    "page": "Readme",
    "title": "Anatomy of a Strategy",
    "category": "section",
    "text": "Below are the basic building blocks making up the general anatomy of a Strategy with respect to the Strategems.jl package design and the type definitions used to facilitate the research workflow.Universe: encapsulation of the assets/securities the strategy is to be allowed to trade\nIndicator: calculation done on each asset in the universe whose results we think have predictive potential for future price movement\nParameterSet: inputs/arguments to the indicator calculations\nSignal: boolean flag sending messages to the trading logic/rules to be interpreted and acted upon\nRule: applications of trading logic derived from interpretations of prior calculations & signals at each time step\nStrategy: overarching object encapsulating and directing all of the above logic and data to power the backtesting engine"
},

{
    "location": "#Example-Usage-1",
    "page": "Readme",
    "title": "Example Usage",
    "category": "section",
    "text": "Below is a quick example demonstrating a simple use-case that one might use to get acquainted with how the package works. Note that the custom infix operators denoted by the uparrow and downarrow below are defined in this package as another way of expressing that one variable crosses over another. The intention of this infix operator definition is to hopefully make the definition of a strategy more syntactically expressive and intuitive.The key indicator used in this strategy is John Ehlers\'s MESA Adaptive Moving Average (or MAMA for short). This functionality is implemented in the Indicators.jl package described above, and outputs a Matrix (or TS object if one is passed as an input) of two columns, the first being the MAMA itself and the second being the FAMA, or following adaptive moving average.This strategy simply goes long when the MAMA crosses over the FAMA, and goes short when the FAMA crosses over the MAMA. Below is an implementation that shows how to set default arguments to the Indicators.mama function and run a simple backtest using those parameters, and also define specified ranges over which we might like to see how the strategy behaves under different parameter sets.using Strategems, Temporal, Indicators\nusing Dates\n\n# define universe and gather data\nassets = [\"CME_CL1\", \"CME_RB1\"]\nuniverse = Universe(assets)\nfunction datasource(asset::String; save_downloads::Bool=true)::TS\n    savedata_path = joinpath(dirname(pathof(Strategems)), \"..\", \"data\", \"$asset.csv\")\n    if isfile(savedata_path)\n        return Temporal.tsread(savedata_path)\n    else\n        X = quandl(asset)\n        if save_downloads\n            Temporal.tswrite(X, savedata_path)\n        end\n        return X\n    end\nend\ngather!(universe, source=datasource)\n\n# define indicators and parameter space\narg_names     = [:fastlimit, :slowlimit]\narg_defaults  = [0.5, 0.05]\narg_ranges    = [0.01:0.01:0.99, 0.01:0.01:0.99]\nparamset      = ParameterSet(arg_names, arg_defaults, arg_ranges)\nf(x; args...) = Indicators.mama(x; args...)\nindicator     = Indicator(f, paramset)\n\n# define signals that will trigger trading decisions\n# note the uparrow infix operator is defined to simplify one variable crossing over another\n# (similarly for the downarrow infix operator for crossing under)\nsiglong  = @signal MAMA ↑ FAMA\nsigshort = @signal MAMA ↓ FAMA\nsigexit  = @signal MAMA == FAMA\n\n# define the trading rules\nlongrule  = @rule siglong → long 100\nshortrule = @rule sigshort → short 100\nexitrule  = @rule sigexit → liquidate 1.0\nrules     = (longrule, shortrule, exitrule)\n\n# run strategy\nstrat = Strategy(universe, indicator, rules)\nbacktest!(strat)\noptimize!(strat, samples=0)  # randomly sample the parameter space (0 -> use all combinations)\n\n# cumulative pnl for each combination of the parameter space\nstrat.results.optimization\n9801×3 Array{Float64,2}:\n0.01  0.01   -3194.62\n0.01  0.02   -4098.25\n0.01  0.03    5178.82\n0.01  0.04    6267.24\n0.01  0.05   10996.5\n⋮\n0.99  0.95  -14949.8\n0.99  0.96  -16431.6\n0.99  0.97  -16333.3\n0.99  0.98  -17081.7\n0.99  0.99  -17057.4\n\n# visualizing results with the Plots.jl package\nusing Plots\ngr()\n(x, y, z) = (strat.results.optimization[:,i] for i in 1:3)\nsurface(x, y, z)(Image: alt text)"
},

{
    "location": "#Roadmap-/-Wish-List-1",
    "page": "Readme",
    "title": "Roadmap / Wish List",
    "category": "section",
    "text": "Get a sufficiently full-featured type system established to facilitate easy construction of simple strategies\nAllow more intelligent logic for trading rules\nAdjust order sizing based on portfolio/account at time t\nPortfolio optimization logic\nRisk limits\nStop loss rules\nDefine a more diverse set of order types\nLimit orders\nStop orders"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Strategems.@ruleStrategems.@signalStrategems.AbstractOrderStrategems.IndicatorStrategems.LimitOrderStrategems.MarketOrderStrategems.ParameterSetStrategems.PortfolioStrategems.ResultsStrategems.RuleStrategems.SEPARATORSStrategems.SignalStrategems.StopOrderStrategems.StrategemsStrategems.StrategyStrategems.UniverseStrategems.backtestStrategems.backtest!Strategems.buyStrategems.calculateStrategems.cum_pnlStrategems.evalStrategems.gather!Strategems.generate_dictStrategems.generate_tradesStrategems.generate_trades!Strategems.get_n_runsStrategems.get_overall_indexStrategems.get_param_combosStrategems.get_run_paramsStrategems.includeStrategems.liquidateStrategems.longStrategems.optimizeStrategems.optimize!Strategems.prep_signalStrategems.sellStrategems.shortStrategems.↑Strategems.→Strategems.↓"
},

]}
