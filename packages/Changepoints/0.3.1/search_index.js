var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Changepoints.jl-1",
    "page": "Readme",
    "title": "Changepoints.jl",
    "category": "section",
    "text": "(Image: Build Status)A Julia package for the detection of multiple changepoints in time series.Detection is based on optimising a cost function over segments of the data.\nImplementations of the most efficient search algorithms (PELT , Binary Segmentation).\nA wide choice of parametric cost functions already implemented such as a change in mean/variance/mean and variance for Normal errors.\nChangepoint algorithms have an interface which allows users to input their own cost functionsFor a general overview of the multiple changepoint problem and mathematical details see PELT."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Changepoints requires Julia version 0.7 or above. To install Changepoints simply run the following command inside Julia package mode (started by typing] in the Julia REPL):(v0.7) pkg>  add Changepoints"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Most of the functionality of Changepoints has been documented. This is accessible in the Julia REPL in help mode. (started by typing \'?\' in the Julia REPL):help?> @PELT\n  @PELT data changepoint_model [β₁ [β₂] ]\n\n  Runs the PELT algorithm on time series data using a specified changepoint_model and penalties. \n  If no penalty β₁ provided, a default of value log(length(data)) is used. If two penalties β₁ and β₂ are provided\n  then the CROPS algorithm is run which finds all optimal segmentations for all penalties between β₁ and β₂.\n\n  See also: PELT, CROPS\n\n  Example\n  ≡≡≡≡≡≡≡≡≡\n\n  n = 1000\n  λ = 100\n  μ, σ = Normal(0.0, 10.0), 1.0\n  # Samples changepoints from Normal distribution with changing mean\n  sample, cps = @changepoint_sampler n λ Normal(μ, σ)\n  # Run PELT on sample\n  pelt_cps, pelt_cost = @PELT sample Normal(:?, σ)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "As an example first we simulate a time series with multiple changes in mean and then segment it using PELT plotting the time series as we go."
},

{
    "location": "#Simulation-1",
    "page": "Readme",
    "title": "Simulation",
    "category": "section",
    "text": "This code simulates a time series of length n with segments that have lengths drawn from a Poisson distribution with mean lambda. The variance is fixed in this case as one but for each new segment a new mean is drawn from a standard gaussian distribution.n = 1000                   # Sample size\nλ = 70                     # freq of changepoints\nμ, σ = Normal(0,1), 1.0\ndata, cps = @changepoint_sampler n λ Normal(μ, σ)(Image: Gadfly plot of simulated changepoints)To segment the data assuming it is Normally distributed and has a constant variance of one, using a default penalty (the log of the length of the data) can be done using the @PELT macro. Currently, this package supports the Gadfly and Winston packages for the convenient plotting of the results. These packages must be explicity loaded to make use of this functionality. If the plotting package was loaded after Changepoints, then the user must run an additional command to load the plotting functionaly, e.g.  Changepoints.Gadfly_init().pelt_cps, cost = @PELT data Normal(:?, 1.0)\nplot(data, pelt_cps)(Image: Gadfly plot of Changepoints detected by PELT)"
},

{
    "location": "#Penalty-selection-1",
    "page": "Readme",
    "title": "Penalty selection",
    "category": "section",
    "text": "The methods implemented view the problem as one of optimising a penalised cost function where the penalty comes in whenever a new changepoint is added. Assuming we have specified the correct parametric (non-parametric cost coming soon) model/cost function then the only area of possible misspecification is in the value of the penalty. There is no \"correct\" choice of penalty however it can be very instructive to look at the segmentations and especially the number of changepoints for a range of penalties. The Changepoints for a Range Of Penalties (CROPS) method allows us to do this efficiently using PELT, by exploiting the relationship between the penalised and constrained versions of the same optimisation problem. For more information see CROPS.To run the PELT algorithm for a range of penalties say pen1 to pen2 where pen1 < pen2 then we can use the following code:crops_output = @PELT data Normal(:?, 1.0) pen1 pen2Having segmented the dataset for a range of penalties the problem now becomes one of model selection. Again, if a plotting package has been loaded, we can create a so called \"elbow\" plot from these results.plot(crops_output)(Image: Gadfly plot of cost against number of changepoints)"
},

{
    "location": "autodocs/#Changepoints.@BS",
    "page": "Docstrings",
    "title": "Changepoints.@BS",
    "category": "macro",
    "text": "@BS data changepoint_model [β₁]\n\nRuns the Binary Segmentation algorithm using a specified changepoint_model for a given penalty β₁. If no penalty specified, use penalty log(length(data)) by default.\n\nSee also: BS, @segment_cost\n\nExample\n\nn = 1000   # Length of time series\nλ = 100    # Frequency of changepoints\nα, β = Uniform(0.0, 10.0), 1.0\n# Samples changepoints from Gamma distribution with changing shape\nsample, cps = @changepoint_sampler n λ Gamma(α, β)\n# Run binary segmentation on sample\nbs_cps = @BS sample Gamma(:?, β)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.@PELT",
    "page": "Docstrings",
    "title": "Changepoints.@PELT",
    "category": "macro",
    "text": "@PELT data changepoint_model [β₁ [β₂] ]\n\nRuns the PELT algorithm on time series data using a specified changepoint_model and penalties. If no penalty β₁ provided, a default of value log(length(data)) is used. If two penalties β₁ and β₂ are provided then the CROPS algorithm is run which finds all optimal segmentations for all penalties between β₁ and β₂.\n\nSee also: PELT, CROPS\n\nExample\n\nn = 1000\nλ = 100\nμ, σ = Normal(0.0, 10.0), 1.0\n# Samples changepoints from Normal distribution with changing mean\nsample, cps = @changepoint_sampler n λ Normal(μ, σ)\n# Run PELT on sample\npelt_cps, pelt_cost = @PELT sample Normal(:?, σ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.@changepoint_sampler",
    "page": "Docstrings",
    "title": "Changepoints.@changepoint_sampler",
    "category": "macro",
    "text": "@changepoint_sampler(n, λ, Distribution(param1, param2, ...))\n\nGenerates sample of size n from Distribution with changes in parameters generated at random intervals. param1, param2, ... are parameters of the sampleable Distribution type, and may be fixed values, or themselves sampleable distributions. Changepoints occur at random times whose separation follows a Poisson distribution with rate λ. At each changepoint, new values for all parameters in param1, param2, ..., which are distributions are sampled.\n\nReturns\n\n(data::Array, cps::Array{Int}) :\ndata : generated time series\ncps : array of indices of changepoints\n\nExample\n\n```julia-repl n, λ = 1000, 100 μ, σ = Normal(0.0, 10.0), 1.0 sample, cps = @changepoint_sampler n λ Normal(μ, σ)  # Sample changepoints\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.@segment_cost",
    "page": "Docstrings",
    "title": "Changepoints.@segment_cost",
    "category": "macro",
    "text": "@segement_cost data changepoint_model\n\nCreates a segment cost function given data and changepoint model expression.\n\nCost functions\n\nchangepoint_model is an expression which describes what segment cost function should be constructed for use with PELT. For parametric segment cost functions, this is represented by the name of a distribution (as in the Distributions package) with some parameters replaced by \':?\' to indicate that the parameters change. The full list of available cost functions based on parametric distributions is as follows:\n\nNormal(:?, σ): Normal model with changing mean and fixed standard deviation σ (see also NormalMeanSegment)\nNormal(μ, :?): Normal model with fixed mean μ and changing standard deviation (see also NormalVarSegment)\nNormal(:?, :?): Normal model with changing mean and standard deviation (see also NormalMeanVarSegment)\nExponential(:?): Exponential model with changing mean (see also ExponentialSegment)\nPoisson(:?): Poisson model with changing mean (see also PoissonSegment)\nGamma(:?, β): Gamma model with fixed rate parameter β and changing shape parameter (see also GammaShapeSegment)\nGamma(α, :?): Gamma model with fixed shape parameter α and changing rate parameter (see also GammaRateSegment)\n\nThe following others models are also available:\n\nNonparametric(k): Nonparametric cost function with parameter k (see also NonparametricSegment)\nOLS : Cost function for piecewise linear regressions (see also OLSSegment)\n\nExample\n\nn = 1000\nλ = 100\nμ, σ = Normal(0.0, 10.0), 1.0\n# Samples changepoints from Normal distribution with changing mean\nsample, cps = @changepoint_sampler n λ Normal(μ, σ)\n# Create cost function\nseg_cost = @segment_cost sample Normal(:?, σ)\n# Calculate changepoints using PELT and BS\npelt_cps, cost = PELT(seg_cost, n)\nbs_cps = BS(seg_cost, n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.BS",
    "page": "Docstrings",
    "title": "Changepoints.BS",
    "category": "function",
    "text": "BS(segment_cost, n[, β = log(n)])\n\nRuns the Binary segmentation algorithm for the cost function segment_cost for a time series of length n and a penalty β and returns the position of found changepoints, and the cost of this segmentation.\n\nSee also: @BS, @segment_cost\n\nReturns\n\nCP::Vector{Int}: Vector of indices of detected changepoints\ncost::Float64: Cost of optimal segmentation\n\nExample\n\n# Sample Normal time series with changing mean\nn = 1000\nλ = 100\nμ, σ = Normal(0.0, 10.0), 1.0\nsample, cps = @changepoint_sampler n λ Normal(μ, σ)\n# Run binary segmentation\nseg_cost = NormalMeanChange(sample, σ)\nBS_cps, BS_cost = BS(seg_cost, n)\n\nReferences\n\nScott, A.J. and Knott, M. (1974) A Cluster Analysis Method for Grouping Means in the Analysis of Variance, Biometrics 30(3), 507 - 512\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.CROPS",
    "page": "Docstrings",
    "title": "Changepoints.CROPS",
    "category": "function",
    "text": "CROPS(segment_cost, n, β₁, β₂)\n\nRuns the CROPS algorithm for cost function segment_cost for range of penalties between β₁ and β₂. This calculates optimal segmentations using PELT for all penalties between β₁ and β₂.\n\nSee also: PELT, @PELT, @segment_cost\n\nReturns\n\nout::Dict{String,Any}:\nout[\"penalty\"] : vector of penalties between minimum and maximum pen\nout[\"number\"] : vector of number of changepoints for each penalty\nout[\"constrained\"] : vector of optimal segmentation costs for each penalty\nout[\"changepoints\"] : vector of changepoints sets for each penalty\n\nExample\n\n# Sample time series with change points\nn = 1000       # Length of time series\nλ = 100        # Frequency of change points\nμ, σ = Normal(0.0, 10.0), 1.0\nsample, cps = @changepoint_sampler n λ Normal(μ, σ)\n\n# Create cost function and run CROPS\nseg_cost = NormalMeanSegment(sample)\npen = (4.0,100.0)\ncrops_output = CROPS(seg_cost, n, pen)\n\nReferences\n\nHaynes, K., Eckley. I.A., and Fearnhead, P., (2014) Efficient penalty search for multiple changepoint problems arXiv:1412.3617\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.ExponentialSegment",
    "page": "Docstrings",
    "title": "Changepoints.ExponentialSegment",
    "category": "function",
    "text": "ExponentialSegment(data)\n\nConstructs a segment cost function for data assuming it follows an Exponential distribution with changing mean.\n\nSee also: NormalMeanSegment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.GammaRateSegment",
    "page": "Docstrings",
    "title": "Changepoints.GammaRateSegment",
    "category": "function",
    "text": "GammaRateSegment(data, alpha)\n\nConstructs a segment cost function for data assuming it follows a Gamma distribution with changing rate parameter and fixed shape parameter alpha.\n\nSee also: NormalMeanSegment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.GammaShapeSegment",
    "page": "Docstrings",
    "title": "Changepoints.GammaShapeSegment",
    "category": "function",
    "text": "GammaShapeSegment(data, beta)\n\nConstructs a segment cost function for data assuming it follows a Gamma distribution with changing shape parameter and fixed rate parameter beta.\n\nSee also: NormalMeanSegment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.NonparametricSegment",
    "page": "Docstrings",
    "title": "Changepoints.NonparametricSegment",
    "category": "function",
    "text": "NonparametricSegment(data, k)\n\nConstructs a segment cost function for data using the Nonparametric model with parameter k.\n\nSee also: NormalMeanSegment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.NormalMeanSegment",
    "page": "Docstrings",
    "title": "Changepoints.NormalMeanSegment",
    "category": "function",
    "text": "NormalMeanSegment(data[, σ = 1.0])\n\nConstructs a function which calculates the cost of fitting a Normal distribution  with unknown mean, and known standard deviation σ for a specified segment of data. By default, sigma is set to 1.0.\n\nSee also: NormalVarSegment, NormalMeanVarSegment, ExponentialSegment, PoissonSegment, GammaRateSegment, GammaShapeSegment, Nonparametric, PELT, BS\n\nReturns\n\ncost::Function: Function which takes indices (s, t) where                   0 ≤ s < t < n and n is the length of the time series                   and returns the cost of fitting distribution to the segment [s+1, ..., t]\n\nExample\n\nn = 1000\nλ = 100\nμ, σ = Normal(0.0, 10.0), 1.0\ndata, cps = @changepoint_sampler n λ Normal(μ, σ)\ncost = NormalMeanSegment(data, σ = 1.0)\ncps, cost = BS(cost, n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.NormalMeanVarSegment",
    "page": "Docstrings",
    "title": "Changepoints.NormalMeanVarSegment",
    "category": "function",
    "text": "NormalMeanVarSegment(data)\n\nConstructs a segment cost function for data assuming it follows a Normal distribution with changing mean and variance.\n\nSee also: NormalMeanSegment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.NormalVarSegment",
    "page": "Docstrings",
    "title": "Changepoints.NormalVarSegment",
    "category": "function",
    "text": "NormalVarSegment(data, μ)\n\nConstructs a segment cost function for data assuming it follows a Normal distribution with changing variance and fixed mean μ.\n\nSee also: NormalMeanSegment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.OLSSegment",
    "page": "Docstrings",
    "title": "Changepoints.OLSSegment",
    "category": "function",
    "text": "OLSSegment(data)\n\nCreate a segment cost function for piecewise linear regressions, fitted using OLS (assuming Normally distributed errors).\n\nSee also: NormalMeanSegment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.PELT",
    "page": "Docstrings",
    "title": "Changepoints.PELT",
    "category": "function",
    "text": "PELT(segment_cost, n[, β = log(n)])\n\nRuns the PELT algorithm using cost function segment_cost for a time series of length n and a penalty β and returns the position of changepoints and optimal segmentation cost.\n\nSee also: @PELT, @segment_cost, CROPS\n\nReturns\n\n(CP::Vector{Int}, cost::Float64):\nCP::Vector{Int}: Vector of indices of detected changepoints\ncost::Float64: Cost of optimal segmentation\n\nExample\n\nn, λ = 1000, 100\nμ, σ = Normal(0.0, 10.0), 1.0\nsample, cps = @changepoint_sampler n λ Normal(μ, σ)  # Sample changepoints\nseg_cost = NormalMeanChange(sample, σ)               # Create segment cost function\npelt_cps, pelt_cost = PELT(seg_cost, n)              # Run PELT\n\nReferences\n\nKillick, R., Fearnhead, P. and Eckley, I.A. (2012) Optimal detection of changepoints with a linear computational cost, JASA 107(500), 1590-1598\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.PoissonSegment",
    "page": "Docstrings",
    "title": "Changepoints.PoissonSegment",
    "category": "function",
    "text": "PoissonSegment(data)\n\nConstructs a segment cost function for data assuming it follows Poisson distribution with changing mean.\n\nSee also: NormalMeanSegment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Changepoints.zero_cumsum",
    "page": "Docstrings",
    "title": "Changepoints.zero_cumsum",
    "category": "function",
    "text": "equivalent to [0; cumsum(x)]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Changepoints.@BSChangepoints.@PELTChangepoints.@changepoint_samplerChangepoints.@glueChangepoints.@segment_costChangepoints.BSChangepoints.BetaSegmentChangepoints.CROPSChangepoints.ChangepointSamplerChangepoints.ChangepointsChangepoints.ExponentialSegmentChangepoints.Gadfly_initChangepoints.GammaRateSegmentChangepoints.GammaShapeSegmentChangepoints.NonparametricSegmentChangepoints.NormalMeanSegmentChangepoints.NormalMeanVarSegmentChangepoints.NormalVarSegmentChangepoints.OLSSegmentChangepoints.PELTChangepoints.PoissonSegmentChangepoints.Winston_initChangepoints.cost_functionChangepoints.cp_randChangepoints.evalChangepoints.includeChangepoints.ran_distChangepoints.zero_cumsum"
},

]}
