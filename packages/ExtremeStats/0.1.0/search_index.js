var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<p align=\"center\">   <img src=\"docs/ExtremeStats.png\" height=\"200\"><br>   <a href=\"https://travis-ci.org/juliohm/ExtremeStats.jl\">     <img src=\"https://travis-ci.org/juliohm/ExtremeStats.jl.svg?branch=master\">   </a>   <a href=\"http://pkg.julialang.org/?pkg=ExtremeStats\">     <img src=\"http://pkg.julialang.org/badges/ExtremeStats_0.6.svg\">   </a>   <a href=\"https://codecov.io/gh/juliohm/ExtremeStats.jl\">     <img src=\"https://codecov.io/gh/juliohm/ExtremeStats.jl/branch/master/graph/badge.svg\">   </a>   <a href=\"LICENSE\">     <img src=\"https://img.shields.io/badge/license-ISC-blue.svg\">   </a> </p>This package provides a set of tools for analysing and estimating extreme value distributions. It defines two types, BlockMaxima and PeakOverThreshold, which can be used to filter a collection of values into a collection of maxima.Given a collection of maxima produced by either model above, one can start estimating heavy-tail distributions and plotting classical extreme value statistics."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:Pkg.add(\"ExtremeStats\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Given a collection of values xs (e.g. time series), one can retrieve its maxima:using ExtremeStats\n\n# find maxima with blocks of size 50\nbm = BlockMaxima(xs, 50)\n\n# get values above a threshold of 100.\npm = PeakOverThreshold(xs, 100.)For the block maxima model, the values xs need to represent a measurement over time, whereas the peak over threshold model does not assume any ordering in the data."
},

{
    "location": "#Plotting-1",
    "page": "Readme",
    "title": "Plotting",
    "category": "section",
    "text": "A few plot recipes are defined for maxima as well as for the original values xs:using Plots\n\n# mean excess plot\nexcessplot(xs)\n\n# Pareto quantile plot\nparetoplot(xs)\n\n# return level plot\nreturnplot(xs)"
},

{
    "location": "#Fitting-1",
    "page": "Readme",
    "title": "Fitting",
    "category": "section",
    "text": "Generalized extreme value (GEV) and generalized Pareto (GP) distributions from the Distributions.jl package can be fit to maxima via constrained optimization (maximum likelihood + extreme value index constraints):using Distributions\n\n# fit GEV to block maxima\nfit(GeneralizedExtremeValue, bm)\n\n# fit GP to peak over threshold\nfit(GeneralizedPareto, pm)"
},

{
    "location": "#Statistics-1",
    "page": "Readme",
    "title": "Statistics",
    "category": "section",
    "text": "A few statistics are defined:# return statistics\nreturnlevels(xs)\n\n# mean excess with previous k values\nmeanexcess(xs, k)"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "The book An Introduction to Statistical Modeling of Extreme Values by Stuart Coles gives a practical introduction to the theory. Most other books I\'ve encountered are too theoretical or expose topics that are somewhat disconnected.[travis-img]: https://travis-ci.org/juliohm/ExtremeStats.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/ExtremeStats.jl[julia-pkg-img]: http://pkg.julialang.org/badges/ExtremeStats_0.6.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=ExtremeStats[codecov-img]: https://codecov.io/gh/juliohm/ExtremeStats.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/ExtremeStats.jl"
},

{
    "location": "autodocs/#ExtremeStats.AbstractMaxima",
    "page": "Docstrings",
    "title": "ExtremeStats.AbstractMaxima",
    "category": "type",
    "text": "AbstractMaxima\n\nA collection of maxima (e.g. block maxima)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExtremeStats.BlockMaxima",
    "page": "Docstrings",
    "title": "ExtremeStats.BlockMaxima",
    "category": "type",
    "text": "BlockMaxima(x, n)\n\nMaxima obtained by splitting the data x into blocks of size n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExtremeStats.PeakOverThreshold",
    "page": "Docstrings",
    "title": "ExtremeStats.PeakOverThreshold",
    "category": "type",
    "text": "PeakOverThreshold(x, u)\n\nMaxima obtained by thresholding the data x with threshold u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExtremeStats.meanexcess",
    "page": "Docstrings",
    "title": "ExtremeStats.meanexcess",
    "category": "function",
    "text": "meanexcess(xs, k)\n\nReturn mean excess of the data xs using previous k values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExtremeStats.returnlevels",
    "page": "Docstrings",
    "title": "ExtremeStats.returnlevels",
    "category": "function",
    "text": "returnlevels(xs)\n\nReturn periods and levels of data xs.\n\n\n\n\n\nreturnlevels(gev, mmin, mmax; nlevels=50)\n\nReturn nlevels periods and levels of generalized extreme value distribution gev with maxima in the interval [mmin,mmax].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ExtremeStats.AbstractMaximaExtremeStats.BlockMaximaExtremeStats.ExcessPlotExtremeStats.ExtremeStatsExtremeStats.ParetoPlotExtremeStats.PeakOverThresholdExtremeStats.ReturnPlotExtremeStats.evalExtremeStats.excessplotExtremeStats.excessplot!ExtremeStats.includeExtremeStats.meanexcessExtremeStats.paretoplotExtremeStats.paretoplot!ExtremeStats.returnlevelsExtremeStats.returnplotExtremeStats.returnplot!"
},

]}
