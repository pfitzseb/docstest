var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "UncertainData.jl",
    "title": "UncertainData.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#UncertainData.jl-1",
    "page": "UncertainData.jl",
    "title": "UncertainData.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Motivation-1",
    "page": "UncertainData.jl",
    "title": "Motivation",
    "category": "section",
    "text": "UncertainData.jl was born to systematically deal with uncertain data, and to  sample from  uncertain datasets more rigorously.  It makes workflows involving  uncertain data of different types  and from different sources significantly easier. "
},

{
    "location": "#Package-philosophy-1",
    "page": "UncertainData.jl",
    "title": "Package philosophy",
    "category": "section",
    "text": "Way too often in data analysis the uncertainties in observational data are ignored or not  dealt with in a systematic manner. The core concept of the package is that uncertain data  should live in the probability domain, not as single value representations of the data  (e.g. the mean).In this package, uncertain data values are thus  stored as probability distributions.  Only when performing a computation or plotting, the uncertain values are realized by  resampling the probability distributions furnishing them. "
},

{
    "location": "#Organising-uncertain-data-1",
    "page": "UncertainData.jl",
    "title": "Organising uncertain data",
    "category": "section",
    "text": "Individual uncertain observations may be collected in  UncertainDatasets, which can be  sampled according to user-provided sampling constraints. Likewise, indices (e.g. time,  depth or any other index) of observations can also be represented as probability  distributions and may also sampled using constraints. The UncertainIndexValueDataset type  allows you to work with datasets where both the  indices and the  data values are uncertain. This may be useful when you, for example, want to draw realizations of your dataset while  simultaneously enforcing  sequential resampling,  for example  strictly increasing age models."
},

{
    "location": "#Mathematical-operations-1",
    "page": "UncertainData.jl",
    "title": "Mathematical operations",
    "category": "section",
    "text": "Several elementary mathematical operations and  trigonometric functions are supported  for uncertain values. Computations are done using a  resampling approach."
},

{
    "location": "#Statistics-on-uncertain-datasets-1",
    "page": "UncertainData.jl",
    "title": "Statistics on uncertain datasets",
    "category": "section",
    "text": "Statistics on  uncertain observations and uncertain datasets are obtained using a resampling approach. "
},

{
    "location": "#Basic-workflow-1",
    "page": "UncertainData.jl",
    "title": "Basic workflow",
    "category": "section",
    "text": "Define uncertain values by probability distributions.\nDefine uncertain datasets by gathering uncertain values.\nUse sampling constraints to constraint the support of the distributions furnishing the uncertain values (i.e. apply subjective criteria to decide what is acceptable data and what is not).\nResample the uncertain values or uncertain datasets.\nExtend existing algorithm to accept uncertain values/datasets.\nQuantify the uncertainty in your dataset or on whatever measure your algorithm computes."
},

{
    "location": "#Related-software-1",
    "page": "UncertainData.jl",
    "title": "Related software",
    "category": "section",
    "text": "A related package is Measurements.jl, which propagates errors exactly and handles correlated uncertainties. However,  Measurements.jl accepts only normally distributed values. This package serves a slightly  different purpose: it was born to provide an easy way of handling uncertainties of  many different types,  using a resampling approach to obtain  statistics when needed, and providing a rich set of  sampling constraints that makes it easy  for the user to reason about and plot their uncertain data under different assumptions.Depending on your needs,  Measurements.jl  may be a better (and faster) choice if your data satisfies the requirements for the package  (normally distributed) and if your uncertainties are correlated."
},

{
    "location": "uncertain_values/uncertainvalues_examples/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "First, load the necessary packages:using UncertainData, Distributions, KernelDensity, Plots"
},

{
    "location": "uncertain_values/uncertainvalues_examples/#Example-1:-Uncertain-values-defined-by-theoretical-distributions-1",
    "page": "-",
    "title": "Example 1: Uncertain values defined by theoretical distributions",
    "category": "section",
    "text": ""
},

{
    "location": "uncertain_values/uncertainvalues_examples/#A-uniformly-distributed-uncertain-value-1",
    "page": "-",
    "title": "A uniformly distributed uncertain value",
    "category": "section",
    "text": "Consider the following contrived example. We\'ve measure a data value with a poor instrument  that tells us that the value lies between -2 and 3. However, we but that we know nothing  more about how the value is distributed on that interval. Then it may be reasonable to  represent that value as a uniform distribution on [-2, 3].To construct an uncertain value following a uniform distribution, we use the constructor  for theoretical distributions with known parameters  (UncertainValue(distribution, params...)). The uniform distribution is defined by its lower and upper bounds, so we\'ll provide  these bounds as the parameters. u = UncertainValue(Uniform, 1, 2)\n\n# Plot the estimated density\nbar(u, label = \"\", xlabel = \"value\", ylabel = \"probability density\")(Image: )"
},

{
    "location": "uncertain_values/uncertainvalues_examples/#A-normally-distributed-uncertain-value-1",
    "page": "-",
    "title": "A normally distributed uncertain value",
    "category": "section",
    "text": "A situation commonly encountered is to want to use someone else\'s data from a publication.  Usually, these values are reported as the mean or median, with some associated uncertainty.  Say we want to use an uncertain value which is normally distributed with mean 2.1 and  standard deviation 0.3.Normal distributions also have two parameters, so we\'ll use the two-parameter constructor  as we did above. u = UncertainValue(Normal, 2.1, 0.3)\n\n# Plot the estimated density\nbar(u, label = \"\", xlabel = \"value\", ylabel = \"probability density\")(Image: )"
},

{
    "location": "uncertain_values/uncertainvalues_examples/#Other-distributions-1",
    "page": "-",
    "title": "Other distributions",
    "category": "section",
    "text": "You may define uncertain values following any of the  supported distributions. "
},

{
    "location": "uncertain_values/uncertainvalues_examples/#Example-2:-Uncertain-values-defined-by-kernel-density-estimated-distributions-1",
    "page": "-",
    "title": "Example 2: Uncertain values defined by kernel density estimated distributions",
    "category": "section",
    "text": "One may also be given a a distribution of numbers that\'s not quite normally distributed.  How to represent this uncertainty? Easy: we use a kernel density estimate to the distribution.Let\'s define a complicated distribution which is a mixture of two different normal  distributions, then draw a sample of numbers from it.M = MixtureModel([Normal(-5, 0.5), Normal(0.2)])\nsome_sample = rand(M, 250)Now, pretend that some_sample is a list of measurements we got from somewhere.  KDE estimates to the distribution can be defined implicitly or explicitly as follows:# If the only argument to `UncertainValue()` is a vector of number, KDE will be triggered.\nu = UncertainValue(rand(M, 250)) \n\n# You may also tell the constructor explicitly that you want KDE. \nu = UncertainValue(UnivariateKDE, rand(M, 250))Now, let\'s plot the resulting distribution. Note: this is not the original mixture of  Gaussians we started out with, it\'s the kernel density estimate to that mixture!# Plot the estimated distribution.\nplot(u, xlabel = \"Value\", ylabel = \"Probability density\")(Image: )"
},

{
    "location": "uncertain_values/uncertainvalues_examples/#Example-3:-Uncertain-values-defined-by-theoretical-distributions-fitted-to-empirical-data-1",
    "page": "-",
    "title": "Example 3: Uncertain values defined by theoretical distributions fitted to empirical data",
    "category": "section",
    "text": "One may also be given a dataset whose histogram looks a lot like a theoretical distribution. We may then select a theoretical distribution and fit its parameters to the empirical data. Say our data was a sample that looks like it obeys Gamma distribution. # Draw a 2000-point sample from a Gamma distribution with parameters α = 1.7 and θ = 5.5\nsome_sample = rand(Gamma(1.7, 5.5), 2000)To perform a parameter estimation, simply provide the distribution as the first  argument and the sample as the second argument to the UncertainValue constructor.# Take a sample from a Gamma distribution with parameters α = 1.7 and θ = 5.5 and \n# create a histogram of the sample.\nsome_sample = rand(Gamma(1.7, 5.5), 2000)\n\np1 = histogram(some_sample, normalize = true,\n    fc = :black, lc = :black,\n    label = \"\", xlabel = \"value\", ylabel = \"density\")\n\n# For the uncertain value representation, fit a gamma distribution to the sample. \n# Then, compare the histogram obtained from the original distribution to that obtained \n# when resampling the fitted distribution \nuv = UncertainValue(Gamma, some_sample)\n\n# Resample the fitted theoretical distribution\np2 = histogram(resample(uv, 10000), normalize = true,\n    fc = :blue, lc = :blue,\n    label = \"\", xlabel = \"value\", ylabel = \"density\")\n\nplot(p1, p2, layout = (2, 1), link = :x)As expected, the histograms closely match (but are not exact because we estimated the distribution using a limited sample).(Image: )"
},

{
    "location": "uncertain_values/uncertainvalues_overview/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "The core concept of UncertainData is to replace an uncertain data value with a  probability distribution describing the point\'s uncertainty.There are currently three ways of doing so:by theoretical distributions with known parameters\nby theoretical distributions with parameters fitted to empirical data\nby kernel density estimates to empirical data\nby weighted populations where the probability of drawing values are    already known, so you can skip kernel density estimation.\na type representing values without uncertainty, so you can mix    uncertain values with certain values"
},

{
    "location": "uncertain_values/uncertainvalues_overview/#Some-quick-examples-1",
    "page": "-",
    "title": "Some quick examples",
    "category": "section",
    "text": "See also the extended examples!"
},

{
    "location": "uncertain_values/uncertainvalues_overview/#Kernel-density-estimation-(KDE)-1",
    "page": "-",
    "title": "Kernel density estimation (KDE)",
    "category": "section",
    "text": "If the data doesn\'t follow an obvious theoretical distribution, the recommended course of action is to represent the uncertain value with a kernel density estimate of the distribution.using Distributions, UncertainData, KernelDensity\n\n# Generate some random data from a normal distribution, so that we get a\n# histogram resembling a normal distribution.\nsome_sample = rand(Normal(), 1000)\n\n# Uncertain value represented by a kernel density estimate (it is inferred\n# that KDE is wanted when no distribution is provided to the constructor).\nuv = UncertainValue(some_sample)using Distributions, UncertainData\n\n# Generate some random data from a normal distribution, so that we get a\n# histogram resembling a normal distribution.\nsome_sample = rand(Normal(), 1000)\n\n\n# Specify that we want a kernel density estimate representation\nuv = UncertainValue(UnivariateKDE, some_sample)"
},

{
    "location": "uncertain_values/uncertainvalues_overview/#Populations-1",
    "page": "-",
    "title": "Populations",
    "category": "section",
    "text": "If you have a population of values where each value has a probability assigned to it,  you can construct an uncertain value by providing the values and uncertainties as  two equal-length vectors to the constructor. Weights are normalized by default.vals = rand(100)\nweights = rand(100)\np = UncertainValue(vals, weights)"
},

{
    "location": "uncertain_values/uncertainvalues_overview/#Fitting-a-theoretical-distribution-1",
    "page": "-",
    "title": "Fitting a theoretical distribution",
    "category": "section",
    "text": "If your data has a histogram closely resembling some theoretical distribution, the uncertain value may be represented by fitting such a distribution to the data.using Distributions, UncertainData\n\n# Generate some random data from a normal distribution, so that we get a\n# histogram resembling a normal distribution.\nsome_sample = rand(Normal(), 1000)\n\n# Uncertain value represented by a theoretical normal distribution with\n# parameters fitted to the data.\nuv = UncertainValue(Normal, some_sample)using Distributions, UncertainData\n\n# Generate some random data from a gamma distribution, so that we get a\n# histogram resembling a gamma distribution.\nsome_sample = rand(Gamma(), 1000)\n\n# Uncertain value represented by a theoretical gamma distribution with\n# parameters fitted to the data.\nuv = UncertainValue(Gamma, some_sample)"
},

{
    "location": "uncertain_values/uncertainvalues_overview/#Theoretical-distribution-with-known-parameters-1",
    "page": "-",
    "title": "Theoretical distribution with known parameters",
    "category": "section",
    "text": "It is common when working with uncertain data found in the scientific literature that data value are stated to follow a distribution with given parameters. For example, a data value may be given as normal distribution with a given mean μ = 2.2 and standard deviation σ = 0.3.# Uncertain value represented by a theoretical normal distribution with\n# known parameters μ = 2.2 and σ = 0.3\nuv = UncertainValue(Normal, 2.2, 0.3)# Uncertain value represented by a theoretical gamma distribution with\n# known parameters α = 2.1 and θ = 3.1\nuv = UncertainValue(Gamma, 2.1, 3.1)# Uncertain value represented by a theoretical binomial distribution with\n# known parameters p = 32 and p = 0.13\nuv = UncertainValue(Binomial, 32, 0.13)"
},

{
    "location": "uncertain_values/uncertainvalues_overview/#Values-with-no-uncertainty-1",
    "page": "-",
    "title": "Values with no uncertainty",
    "category": "section",
    "text": "Scalars with no uncertainty can also be represented. c1, c2 = UncertainValue(2), UncertainValue(2.2)"
},

{
    "location": "uncertain_values/uncertainvalues_kde/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "When your data have an empirical distribution that doesn\'t follow any obvious theoretical distribution, the data may be represented by a kernel density estimate."
},

{
    "location": "uncertain_values/uncertainvalues_kde/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": "using Distributions, UncertainData\n\n# Create a normal distribution\nd = Normal()\n\n# Draw a 1000-point sample from the distribution.\nsome_sample = rand(d, 1000)\n\n# Use the implicit KDE constructor to create the uncertain value\nuv = UncertainValue(v::Vector)using Distributions, UncertainData, KernelDensity\n\n# Create a normal distribution\nd = Normal()\n\n# Draw a 1000-point sample from the distribution.\nsome_sample = rand(d, 1000)\n\n# Use the explicit KDE constructor to create the uncertain value.\n# This constructor follows the same convention as when fitting distributions\n# to empirical data, so this is the recommended way to construct KDE estimates.\nuv = UncertainValue(UnivariateKDE, v::Vector)using Distributions, UncertainData, KernelDensity\n\n# Create a normal distribution\nd = Normal()\n\n# Draw a 1000-point sample from the distribution.\nsome_sample = rand(d, 1000)\n\n# Use the explicit KDE constructor to create the uncertain value, specifying\n# that we want to use normal distributions as the kernel. The kernel can be\n# any valid kernel from Distributions.jl, and the default is to use normal\n# distributions.\nuv = UncertainValue(UnivariateKDE, v::Vector; kernel = Normal)using Distributions, UncertainData, KernelDensity\n\n# Create a normal distribution\nd = Normal()\n\n# Draw a 1000-point sample from the distribution.\nsome_sample = rand(d, 1000)\n\n# Use the explicit KDE constructor to create the uncertain value, specifying\n# the number of points we want to use for the kernel density estimate. Fast\n# Fourier transforms are used behind the scenes, so the number of points\n# should be a power of 2 (the default is 2048 points).\nuv = UncertainValue(UnivariateKDE, v::Vector; npoints = 1024)"
},

{
    "location": "uncertain_values/uncertainvalues_kde/#Extended-example-1",
    "page": "-",
    "title": "Extended example",
    "category": "section",
    "text": "Let\'s create a bimodal distribution, then sample 10000 values from it.using Distributions\n\nn1 = Normal(-3.0, 1.2)\nn2 = Normal(8.0, 1.2)\nn3 = Normal(0.0, 2.5)\n\n# Use a mixture model to create a bimodal distribution\nM = MixtureModel([n1, n2, n3])\n\n# Sample the mixture model.\nsamples_empirical = rand(M, Int(1e4));(Image: )It is not obvious which distribution to fit to such data.A kernel density estimate, however, will always be a decent representation of the data, because it doesn\'t follow a specific distribution and adapts to the data values.To create a kernel density estimate, simply call the UncertainValue(v::Vector{Number}) constructor with a vector containing the sample:uv = UncertainValue(samples_empirical)The plot below compares the empirical histogram (here represented as a density plot) with our kernel density estimate.using Plots, StatPlots, UncertainData\nuv = UncertainValue(samples_empirical)\ndensity(mvals, label = \"10000 mixture model (M) samples\")\ndensity!(rand(uv, Int(1e4)),\n    label = \"10000 samples from KDE estimate to M\")\nxlabel!(\"data value\")\nylabel!(\"probability density\")(Image: )"
},

{
    "location": "uncertain_values/uncertainvalues_kde/#UncertainData.UncertainValues.UncertainValue-Union{Tuple{Array{T,1}}, Tuple{T}, Tuple{D}} where T where D<:Distribution",
    "page": "-",
    "title": "UncertainData.UncertainValues.UncertainValue",
    "category": "method",
    "text": "UncertainValue(data::Vector{T};\n    kernel::Type{D} = Normal,\n    npoints::Int=2048) where {D <: Distributions.Distribution, T}\n\nConstruct an uncertain value by a kernel density estimate to data.\n\nFast Fourier transforms are used in the kernel density estimation, so the number of points should be a power of 2 (default = 2048).\n\n\n\n\n\n"
},

{
    "location": "uncertain_values/uncertainvalues_kde/#Constructor-1",
    "page": "-",
    "title": "Constructor",
    "category": "section",
    "text": "UncertainValue(data::Vector{T};\n        kernel::Type{D} = Normal,\n        npoints::Int = 2048) where {D <: Distributions.Distribution, T}"
},

{
    "location": "uncertain_values/uncertainvalues_kde/#Additional-keyword-arguments-and-examples-1",
    "page": "-",
    "title": "Additional keyword arguments and examples",
    "category": "section",
    "text": "If the only argument to the UncertainValue constructor is a vector of values, the default behaviour is to represent the distribution by a kernel density estimate (KDE), i.e. UncertainValue(data). Gaussian kernels are used by default. The syntax UncertainValue(UnivariateKDE, data) will also work if KernelDensity.jl is loaded."
},

{
    "location": "uncertain_values/uncertainvalues_fitted/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "For data values with histograms close to some known distribution, the user may choose to represent the data by fitting a theoretical distribution to the values. This will only work well if the histogram closely resembles a theoretical distribution."
},

{
    "location": "uncertain_values/uncertainvalues_fitted/#UncertainData.UncertainValues.UncertainValue-Union{Tuple{T}, Tuple{D}, Tuple{Type{D},Array{T,1}}} where T where D<:Distribution",
    "page": "-",
    "title": "UncertainData.UncertainValues.UncertainValue",
    "category": "method",
    "text": "UncertainValue(empiricaldata::AbstractVector{T},\n    d::Type{D}) where {D <: Distribution}\n\nConstructor for empirical distributions.\n\nFit a distribution of type d to the data and use that as the representation of the empirical distribution. Calls Distributions.fit behind the scenes.\n\nArguments\n\nempiricaldata: The data for which to fit the distribution.\ndistribution: A valid univariate distribution from Distributions.jl.\n\n\n\n\n\n"
},

{
    "location": "uncertain_values/uncertainvalues_fitted/#Constructor-1",
    "page": "-",
    "title": "Constructor",
    "category": "section",
    "text": "UncertainValue(d::Type{D}, empiricaldata::Vector{T}) where {D<:Distribution, T}"
},

{
    "location": "uncertain_values/uncertainvalues_fitted/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": "using Distributions, UncertainData\n\n# Create a normal distribution\nd = Uniform()\n\n# Draw a 1000-point sample from the distribution.\nsome_sample = rand(d, 1000)\n\n# Define an uncertain value by fitting a uniform distribution to the sample.\nuv = UncertainValue(Uniform, some_sample)using Distributions, UncertainData\n\n# Create a normal distribution\nd = Normal()\n\n# Draw a 1000-point sample from the distribution.\nsome_sample = rand(d, 1000)\n\n# Represent the uncertain value by a fitted normal distribution.\nuv = UncertainValue(Normal, some_sample)using Distributions, UncertainData\n\n# Generate 1000 values from a gamma distribution with parameters α = 2.1,\n# θ = 5.2.\nsome_sample = rand(Gamma(2.1, 5.2), 1000)\n\n# Represent the uncertain value by a fitted gamma distribution.\nuv = UncertainValue(Gamma, some_sample)In these examples we\'re trying to fit the same distribution to our sample as the distribution from which we draw the sample. Thus, we will get good fits. In real applications, make sure to always visually investigate the histogram of your data!"
},

{
    "location": "uncertain_values/uncertainvalues_fitted/#Beware:-fitting-distributions-may-lead-to-nonsensical-results!-1",
    "page": "-",
    "title": "Beware: fitting distributions may lead to nonsensical results!",
    "category": "section",
    "text": "In a less contrived example, we may try to fit a beta distribution to a sample generated from a gamma distribution.using Distributions, UncertainData\n\n# Generate 1000 values from a gamma distribution with parameters α = 2.1,\n# θ = 5.2.\nsome_sample = rand(Gamma(2.1, 5.2), 1000)\n\n# Represent the uncertain value by a fitted beta distribution.\nuv = UncertainValue(Beta, some_sample)This is obviously not a good idea. Always visualise your distribution before deciding on which distribution to fit! You won\'t get any error messages if you try to fit a distribution that does not match your data.If the data do not follow an obvious theoretical distribution, it is better to use kernel density estimation to define the uncertain value."
},

{
    "location": "uncertain_values/uncertainvalues_theoreticaldistributions/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "It is common in the scientific literature to encounter uncertain data values which are reported as following a specific distribution. For example, an author report the mean and standard deviation of a value stated to follow a normal distribution. UncertainData makes it easy to represent such values!"
},

{
    "location": "uncertain_values/uncertainvalues_theoreticaldistributions/#Supported-distributions-1",
    "page": "-",
    "title": "Supported distributions",
    "category": "section",
    "text": "Supported distributions are Uniform, Normal, Gamma, Beta, BetaPrime, Frechet, Binomial, BetaBinomial (more distributions will be added in the future!)."
},

{
    "location": "uncertain_values/uncertainvalues_theoreticaldistributions/#Constructors-1",
    "page": "-",
    "title": "Constructors",
    "category": "section",
    "text": "There are two constructors that creates uncertain values represented by theoretical distributions. Parameters are provided to the constructor in the same order as for constructing the equivalent distributions in Distributions.jl.Uncertain values represented by theoretical distributions may be constructed using the two-parameter or three-parameter constructors UncertainValue(d::Type{D}, a<:Number, b<:Number) or UncertainValue(d::Type{D}, a<:Number, b<:Number, c<:Number) (see below)."
},

{
    "location": "uncertain_values/uncertainvalues_theoreticaldistributions/#UncertainData.UncertainValues.UncertainValue-Union{Tuple{D}, Tuple{T2}, Tuple{T1}, Tuple{Type{D},T1,T2}} where D<:Distribution where T2<:Number where T1<:Number",
    "page": "-",
    "title": "UncertainData.UncertainValues.UncertainValue",
    "category": "method",
    "text": "UncertainValue(distribution::Type{D}, a::T1, b::T2;\n    kwargs...) where {T1<:Number, T2 <: Number, D<:Distribution}\n\nConstructor for two-parameter distributions\n\nUncertainValues are currently implemented for the following two-parameter distributions: Uniform, Normal, Binomial, Beta, BetaPrime, Gamma, and Frechet.\n\nArguments\n\na, b: Generic parameters whose meaning varies depending   on what distribution is provided. See the list below.\ndistribution: A valid univariate distribution from Distributions.jl.\n\nPrecisely what  a and b are depends on which distribution is provided.\n\nUncertainValue(Normal, μ, σ) returns an UncertainScalarNormallyDistributed instance.\nUncertainValue(Uniform, lower, upper) returns an UncertainScalarUniformlyDistributed instance.\nUncertainValue(Beta, α, β) returns an UncertainScalarBetaDistributed instance.\nUncertainValue(BetaPrime, α, β) returns an UncertainScalarBetaPrimeDistributed instance.\nUncertainValue(Gamma, α, θ) returns an UncertainScalarGammaDistributed instance.\nUncertainValue(Frechet, α, θ) returns an UncertainScalarFrechetDistributed instance.\nUncertainValue(Binomial, n, p) returns an UncertainScalarBinomialDistributed instance.\n\nKeyword arguments\n\nnσ: If distribution <: Distributions.Normal, then how many standard   deviations away from μ does lower and upper (i.e. both, because   they are the same distance away from μ) represent?\ntolerance: A threshold determining how symmetric the uncertainties   must be in order to allow the construction of  Normal distribution   (upper - lower > threshold is required).\ntrunc_lower: Lower truncation bound for distributions with infinite   support. Defaults to -Inf.\ntrunc_upper: Upper truncation bound for distributions with infinite   support. Defaults to Inf.\n\nExamples\n\nNormal distribution\n\nNormal distributions are formed by using the constructor UncertainValue(μ, σ, Normal; kwargs...). This gives a normal distribution with mean μ and standard deviation σ/nσ (nσ must be given as a keyword argument).\n\n# A normal distribution with mean = 2.3 and standard deviation 0.3.\nUncertainValue(2.3, 0.3, Normal)\n\n# A normal distribution with mean 2.3 and standard deviation 0.3/2.\nUncertainValue(2.3, 0.3, Normal, nσ = 2)\n\n# A normal distribution with mean 2.3 and standard deviation = 0.3,\ntruncated to the interval `[1, 3]`.\nUncertainValue(2.3, 0.3, Normal, trunc_lower = 1.0, trunc_upper = 3.0)\n\nUniform distribution\n\nUniform distributions are formed using the UncertainValue(lower, upper, Uniform) constructor.\n\n#  A uniform distribution on `[2, 3]`\nUncertainValue(-2, 3, Uniform)\n\n\n\n\n\n"
},

{
    "location": "uncertain_values/uncertainvalues_theoreticaldistributions/#Two-parameter-distributions-1",
    "page": "-",
    "title": "Two-parameter distributions",
    "category": "section",
    "text": "UncertainValue(distribution::Type{D}, a::T1, b::T2; kwargs...) where {T1<:Number, T2 <: Number, D<:Distribution}"
},

{
    "location": "uncertain_values/uncertainvalues_theoreticaldistributions/#UncertainData.UncertainValues.UncertainValue-Union{Tuple{D}, Tuple{T3}, Tuple{T2}, Tuple{T1}, Tuple{Type{D},T1,T2,T3}} where D<:Distribution where T3<:Number where T2<:Number where T1<:Number",
    "page": "-",
    "title": "UncertainData.UncertainValues.UncertainValue",
    "category": "method",
    "text": "UncertainValue(distribution::Type{D}, a::T1, b::T2, c::T3;\n    kwargs...) where {T1<:Number, T2<:Number, T3<:Number, D<:Distribution}\n\nConstructor for three-parameter distributions\n\nCurrently implemented distributions are BetaBinomial.\n\nArguments\n\na, b, c: Generic parameters whose meaning varies depending   on what distribution is provided. See the list below.\ndistribution: A valid univariate distribution from Distributions.jl.\n\nPrecisely what a, b and c are depends on which distribution is provided.\n\nUncertainValue(BetaBinomial, n, α, β) returns an UncertainScalarBetaBinomialDistributed instance.\n\nKeyword arguments\n\nnσ: If distribution <: Distributions.Normal, then how many standard   deviations away from μ does lower and upper (i.e. both, because   they are the same distance away from μ) represent?\ntolerance: A threshold determining how symmetric the uncertainties   must be in order to allow the construction of  Normal distribution   (upper - lower > threshold is required).\ntrunc_lower: Lower truncation bound for distributions with infinite   support. Defaults to -Inf.\ntrunc_upper: Upper truncation bound for distributions with infinite   support. Defaults to Inf.\n\nExamples\n\nBetaBinomial distribution\n\nNormal distributions are formed by using the constructor UncertainValue(μ, σ, Normal; kwargs...). This gives a normal distribution with mean μ and standard deviation σ/nσ (nσ must be given as a keyword argument).\n\n# A beta binomial distribution with n = 100 trials and parameters α = 2.3 and\n# β = 5\nUncertainValue(100, 2.3, 5, BetaBinomial)\n\n\n\n\n\n"
},

{
    "location": "uncertain_values/uncertainvalues_theoreticaldistributions/#Three-parameter-distributions-1",
    "page": "-",
    "title": "Three-parameter distributions",
    "category": "section",
    "text": "UncertainValue(distribution::Type{D}, a::T1, b::T2, c::T3; kwargs...) where {T1<:Number, T2<:Number, T3<:Number, D<:Distribution}"
},

{
    "location": "uncertain_values/uncertainvalues_theoreticaldistributions/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": "# Uncertain value generated by a uniform distribution on [-5.0, 5.1].\nuv = UncertainValue(Uniform, -5.0, 5.1)# Uncertain value generated by a normal distribution with parameters μ = -2 and\n# σ = 0.5.\nuv = UncertainValue(Normal, -2, 0.5)# Uncertain value generated by a gamma distribution with parameters α = 2.2\n# and θ = 3.\nuv = UncertainValue(Gamma, 2.2, 3)# Uncertain value generated by a beta distribution with parameters α = 1.5\n# and β = 3.5\nuv = UncertainValue(Beta, 1.5, 3.5)# Uncertain value generated by a beta prime distribution with parameters α = 1.7\n# and β = 3.2\nuv = UncertainValue(Beta, 1.7, 3.2)# Uncertain value generated by a Fréchet distribution with parameters α = 2.1\n# and θ = 4\nuv = UncertainValue(Beta, 2.1, 4)# Uncertain value generated by binomial distribution with n = 28 trials and\n# probability p = 0.2 of success in individual trials.\nuv = UncertainValue(Binomial, 28, 0.2)# Creates an uncertain value generated by a beta-binomial distribution with\n# n = 28 trials, and parameters α = 1.5 and β = 3.5.\nuv = UncertainValue(BetaBinomial, 28, 3.3, 4.4)"
},

{
    "location": "uncertain_values/certainvalue/#",
    "page": "Documentation",
    "title": "Documentation",
    "category": "page",
    "text": "The CertainValue allows representation of values with no uncertainty. It behaves  just as a scalar, but can be mixed with uncertain values when performing  mathematical operations and  resampling. "
},

{
    "location": "uncertain_values/certainvalue/#UncertainData.UncertainValues.CertainValue",
    "page": "Documentation",
    "title": "UncertainData.UncertainValues.CertainValue",
    "category": "type",
    "text": "CertainValue\n\nA simple wrapper type for values with no uncertainty (i.e. represented by a scalar).\n\nExamples\n\nThe two following ways of constructing values without uncertainty are equivalent. \n\nu1, u2 = CertainValue(2.2), CertainValue(6)\n\nw1, w2 = UncertainValue(2.2), UncertainValue(6)\n\n\n\n\n\n"
},

{
    "location": "uncertain_values/certainvalue/#Documentation-1",
    "page": "Documentation",
    "title": "Documentation",
    "category": "section",
    "text": "CertainValue"
},

{
    "location": "uncertain_values/populations/#",
    "page": "Documentation",
    "title": "Documentation",
    "category": "page",
    "text": "The UncertainScalarPopulation type allows representation of an uncertain scalar  represented by a population of values who will be sampled according to a vector of  explicitly provided probabilities. Think of it as an explicit kernel density estimate. "
},

{
    "location": "uncertain_values/populations/#UncertainData.UncertainValues.UncertainScalarPopulation",
    "page": "Documentation",
    "title": "UncertainData.UncertainValues.UncertainScalarPopulation",
    "category": "type",
    "text": "UncertainScalarPopulation\n\nAn uncertain value represented by a population for which the probabilities of the values  are dictated by a set of weights. The weights are normalized by default.\n\nExamples\n\nThe two following ways of constructing populations are equivalent. \n\nvalues = rand(1:50, 100)\nweights = rand(100)\npopulation = UncertainValue(values, weights)\n\nvalues = rand(1:50, 100)\nweights = rand(100)\npopulation = UncertainScalarPopulation(values, weights)\n\n\n\n\n\n"
},

{
    "location": "uncertain_values/populations/#Documentation-1",
    "page": "Documentation",
    "title": "Documentation",
    "category": "section",
    "text": "UncertainScalarPopulation"
},

{
    "location": "uncertain_datasets/uncertain_datasets_overview/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "If dealing with several uncertain values, it may be useful to represent them as an uncertain dataset. This way, one may trivially, for example, compute statistics for a dataset consisting of samples with different types of uncertainties."
},

{
    "location": "uncertain_datasets/uncertain_datasets_overview/#Uncertain-index-datasets-and-data-value-datasets-1",
    "page": "-",
    "title": "Uncertain index datasets and data value datasets",
    "category": "section",
    "text": "There are three main types of uncertain datasets: UncertainIndexDatasets contain uncertain indices.\nUncertainValueDatasets contain uncertain data values. \nUncertainIndexValueDatasets represent datasets for    which both the indices and the data values are uncertain. It uses   UncertainIndexDatasets to represent the indices and UncertainValueDatasets   to represent the data values."
},

{
    "location": "uncertain_datasets/uncertain_datasets_overview/#Generic-dataset-type-1",
    "page": "-",
    "title": "Generic dataset type",
    "category": "section",
    "text": "There\'s also a generic uncertain dataset type for when you don\'t care about distinguishing  between indices and data values: UncertainDataset contains uncertain indices."
},

{
    "location": "uncertain_datasets/uncertain_index_dataset/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "UncertainIndexDatasets is an uncertain dataset type that represents the indices  corresponding to an UncertainValueDataset.It is meant to be used for the indices field in UncertainIndexValueDatasets instances."
},

{
    "location": "uncertain_datasets/uncertain_index_dataset/#UncertainData.UncertainDatasets.UncertainIndexDataset",
    "page": "-",
    "title": "UncertainData.UncertainDatasets.UncertainIndexDataset",
    "category": "type",
    "text": "UncertainIndices\n\nGeneric dataset containing uncertain indices.\n\nFields\n\nindices::AbstractVector{AbstractUncertainValue}: The uncertain values.\n\n\n\n\n\n"
},

{
    "location": "uncertain_datasets/uncertain_index_dataset/#Documentation-1",
    "page": "-",
    "title": "Documentation",
    "category": "section",
    "text": "UncertainIndexDataset"
},

{
    "location": "uncertain_datasets/uncertain_index_dataset/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "uncertain_datasets/uncertain_index_dataset/#Example-1:-increasing-index-uncertainty-through-time-1",
    "page": "-",
    "title": "Example 1: increasing index uncertainty through time",
    "category": "section",
    "text": ""
},

{
    "location": "uncertain_datasets/uncertain_index_dataset/#Defining-the-indices-1",
    "page": "-",
    "title": "Defining the indices",
    "category": "section",
    "text": "Say we had a dataset of 20 values for which the uncertainties are normally distributed  with increasing standard deviation through time.time_inds = 1:13\nuvals = [UncertainValue(Normal, ind, rand(Uniform()) + (ind / 6)) for ind in time_inds]\ninds = UncertainIndexDataset(uvals)Let\'s plot the 33rd to 67th percentile range for the indices: plot(inds, [0.33, 0.67])(Image: )"
},

{
    "location": "uncertain_datasets/uncertain_index_dataset/#Defining-the-data-1",
    "page": "-",
    "title": "Defining the data",
    "category": "section",
    "text": "Let\'s define some uncertain values that are associated with the indices. u1 = UncertainValue(Gamma, rand(Gamma(), 500))\nu2 = UncertainValue(rand(MixtureModel([Normal(1, 0.3), Normal(0.1, 0.1)]), 500))\nuvals3 = [UncertainValue(Normal, rand(), rand()) for i = 1:11]\n\nmeasurements = [u1; u2; uvals3]\ndatavals = UncertainValueDataset(measurements)(Image: )"
},

{
    "location": "uncertain_datasets/uncertain_index_dataset/#Combinining-the-indices-and-values-1",
    "page": "-",
    "title": "Combinining the indices and values",
    "category": "section",
    "text": "Now, we combine the indices and the corresponding data. d = UncertainIndexDataset(inds, datavals)Plot the dataset with error bars in both directions, using the 20th to 80th percentile  range for the indices and the 33rd to 67th percentile range for the data values. plot(d, [0.2, 0.8], [0.33, 0.67])(Image: )"
},

{
    "location": "uncertain_datasets/uncertain_value_dataset/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "UncertainValueDatasets is an uncertain dataset type that has no explicit index  associated with its uncertain values. This type may come with some extra functionality  that the generic UncertainDataset type does not support. Use this type when you want to be explicit about the values representing data values, as opposed to indices. "
},

{
    "location": "uncertain_datasets/uncertain_value_dataset/#UncertainData.UncertainDatasets.UncertainValueDataset",
    "page": "-",
    "title": "UncertainData.UncertainDatasets.UncertainValueDataset",
    "category": "type",
    "text": "UncertainValueDataset\n\nA dataset of uncertain values.\n\nFields\n\nvalues::AbstractVector{AbstractUncertainValue}: The uncertain values. Each value is   represented by an AbstractUncertainValue.\n\n\n\n\n\n"
},

{
    "location": "uncertain_datasets/uncertain_value_dataset/#Documentation-1",
    "page": "-",
    "title": "Documentation",
    "category": "section",
    "text": "UncertainValueDataset"
},

{
    "location": "uncertain_datasets/uncertain_value_dataset/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "uncertain_datasets/uncertain_value_dataset/#Example-1:-constructing-an-UncertainValueDataset-from-uncertain-values-1",
    "page": "-",
    "title": "Example 1: constructing an UncertainValueDataset from uncertain values",
    "category": "section",
    "text": "Let\'s create a random walk and pretend it represents fluctuations in the mean of an observed dataset. Assume that each data point is normally distributed, and that the i-th observation has standard deviation sigma_i in 03 05.Representing these data as an UncertainValueDataset is done as follows:o1 = UncertainValue(Normal, 0, 0.5)\no2 = UncertainValue(Normal, 2.0, 0.1)\no3 = UncertainValue(Uniform, 0, 4)\no4 = UncertainValue(Uniform, rand(100))\no5 = UncertainValue(Beta, 4, 5)\no6 = UncertainValue(Gamma, 4, 5)\no7 = UncertainValue(Frechet, 1, 2)\no8 = UncertainValue(BetaPrime, 1, 2)\no9 = UncertainValue(BetaBinomial, 10, 3, 2)\no10 = UncertainValue(Binomial, 10, 0.3)\n\nuvals = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10]\nd = UncertainValueDataset(uvals)The built-in plot recipes makes it a breeze to plot the dataset. Here, we\'ll plot the  20th to 80th percentile range error bars. plot(d, [0.2, 0.8])(Image: )"
},

{
    "location": "uncertain_datasets/uncertain_dataset/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "UncertainDatasets is a generic uncertain dataset type that has no explicit index  associated with its uncertain values. It inherits all the behaviour of AbstractUncertainValueDataset, but may lack some  functionality that an UncertainValueDataset has. If you don\'t care about distinguishing between  indices and data values, constructing instances of this data type requires five less key  presses than UncertainValueDataset."
},

{
    "location": "uncertain_datasets/uncertain_dataset/#UncertainData.UncertainDatasets.UncertainDataset",
    "page": "-",
    "title": "UncertainData.UncertainDatasets.UncertainDataset",
    "category": "type",
    "text": "UncertainDataset\n\nGeneric dataset containing uncertain values.\n\nFields\n\nvalues::AbstractVector{AbstractUncertainValue}: The uncertain values.\n\n\n\n\n\n"
},

{
    "location": "uncertain_datasets/uncertain_dataset/#Documentation-1",
    "page": "-",
    "title": "Documentation",
    "category": "section",
    "text": "UncertainDataset"
},

{
    "location": "uncertain_datasets/uncertain_dataset/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "uncertain_datasets/uncertain_dataset/#Example-1:-constructing-an-UncertainDataset-from-uncertain-values-1",
    "page": "-",
    "title": "Example 1: constructing an UncertainDataset from uncertain values",
    "category": "section",
    "text": "Let\'s create a random walk and pretend it represents fluctuations in the mean of an observed dataset. Assume that each data point is normally distributed, and that the i-th observation has standard deviation sigma_i in 03 05.Representing these data as an UncertainDataset is done as follows:using UncertainData, Plots\n\n# Create a random walk of 55 steps\nn = 55\nrw = cumsum(rand(Normal(), n))\n\n# Represent each value of the random walk as an uncertain value and\n# collect them in an UncertainDataset\ndist = Uniform(0.3, 0.5)\nuncertainvals = [UncertainValue(Normal, rw[i], rand(dist)) for i = 1:n]\nD = UncertainDataset(uncertainvals)By default, plotting the dataset will plot the median values (only for scatter plots) along with the 33rd to 67th percentile range error bars. plot(D)(Image: )You can customize the error bars by explicitly providing the quantiles:plot(D, [0.05, 0.95])(Image: )"
},

{
    "location": "uncertain_datasets/uncertain_dataset/#Example-2:-mixing-different-types-of-uncertain-values-1",
    "page": "-",
    "title": "Example 2: mixing different types of uncertain values",
    "category": "section",
    "text": "Mixing different types of uncertain values also works. Let\'s create a dataset of uncertain values constructed in different ways.using UncertainData, Distributions, Plots\n\n# Theoretical distributions\no1 = UncertainValue(Normal, 0, 0.5)\no2 = UncertainValue(Normal, 2, 0.3)\no3 = UncertainValue(Uniform, 0, 4)\n\n# Theoretical distributions fitted to data\no4 = UncertainValue(Uniform, rand(Uniform(), 100))\no5 = UncertainValue(Gamma, rand(Gamma(2, 3), 5000))\n\n# Kernel density estimated distributions for some more complex data.\nM1 = MixtureModel([Normal(-5, 0.5), Gamma(2, 5), Normal(12, 0.2)])\nM2 = MixtureModel([Normal(-2, 0.1), Normal(1, 0.2)])\no6 = UncertainValue(rand(M1, 1000))\no7 = UncertainValue(rand(M2, 1000))\n\nD = UncertainDataset([o1, o2, o3, o4, o5, o6, o7])Now, plot the uncertain dataset.\nusing Plots\n# Initialise the plot\np = plot(legend = false, xlabel = \"time step\", ylabel = \"value\")\n\n# Plot the mean of the dataset\nplot!([median(D[i]) for i = 1:length(D)], label = \"mean\", lc = :blue, lw = 3)\n\nfor i = 1:200\n    plot!(p, resample(D), lw = 0.4, lα = 0.1, lc = :black)\nend\n\np(Image: )"
},

{
    "location": "uncertain_datasets/uncertain_indexvalue_dataset/#UncertainData.UncertainDatasets.UncertainIndexValueDataset",
    "page": "-",
    "title": "UncertainData.UncertainDatasets.UncertainIndexValueDataset",
    "category": "type",
    "text": "UncertainIndexValueDataset\n\nA generic dataset type consisting of uncertain values whose indices (time, depth, order, etc...) are also uncertain value.\n\nFields\n\nvalues::T where {T <: AbstractUncertainValueDataset}: The uncertain indices.    Will in general be an UncertainIndexDataset, but does not necessarily have to be.     Each index is represented by an AbstractUncertainValue.\nvalues::UncertainDataset: The uncertain values. Each value is   represented by an AbstractUncertainValue.\n\n\n\n\n\n"
},

{
    "location": "uncertain_datasets/uncertain_indexvalue_dataset/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "UncertainIndexValueDatasets have uncertainties associated with both the  indices (e.g. time, depth, etc) and the values of the data points.UncertainIndexValueDataset"
},

{
    "location": "uncertain_datasets/uncertain_indexvalue_dataset/#Example-1",
    "page": "-",
    "title": "Example",
    "category": "section",
    "text": "Here\'s an example of how to create an uncertain index-value dataset. Let\'s start by  defining the uncertain data values and collecting them in an UncertainValueDataset. using UncertainData, Plots \ngr()\nr1 = [UncertainValue(Normal, rand(), rand()) for i = 1:10]\nr2 = UncertainValue(rand(10000))\nr3 = UncertainValue(Uniform, rand(10000))\nr4 = UncertainValue(Normal, -0.1, 0.5)\nr5 = UncertainValue(Gamma, 0.4, 0.8)\n\nu_values = [r1; r2; r3; r4; r5]\nudata = UncertainDataset(u_values);The values were measures at some time indices by an inaccurate clock, so that the times  of measuring are normally distributed values with fluctuating standard deviations.u_timeindices = [UncertainValue(Normal, i, rand(Uniform(0, 1))) \n    for i = 1:length(udata)]\nuindices = UncertainDataset(u_timeindices);Now, combine the uncertain time indices and measurements into an  UncertainIndexValueDataset.x = UncertainIndexValueDataset(uindices, udata)The built-in plot recipes make it easy to visualize the dataset.  By default, plotting the dataset plots the median value of the index and the measurement  (only for scatter plots), along with the 33rd to 67th percentile range error bars in both  directions. plot(x)(Image: )You can also tune the error bars by calling  plot(udata::UncertainIndexValueDataset, idx_quantiles, val_quantiles), explicitly  specifying the quantiles in each direction, like so:plot(x, [0.05, 0.95], [0.05, 0.95])(Image: )"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "This package implements many of the statistical algorithms in StatsBase for uncertain  values and uncertain datasets.The syntax for calling the algorithms is the same as in StatsBase, but the functions here accept an additional positional argument n. This additional  argument controls how many times the uncertain values are resampled to compute the  statistics. For theoretical distributions, both with known and fitted parameters, some of  the stats functions may be called without the n argument."
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.mean-Tuple{AbstractUncertainValue,Int64}",
    "page": "-",
    "title": "Statistics.mean",
    "category": "method",
    "text": "mean(uv::AbstractUncertainValue, n::Int)\n\nCompute the mean of an uncertain value over an n-draw sample of it.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.median-Tuple{AbstractUncertainValue,Int64}",
    "page": "-",
    "title": "Statistics.median",
    "category": "method",
    "text": "median(uv::AbstractUncertainValue, n::Int)\n\nCompute the median of an uncertain value over an n-draw sample of it.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.std-Tuple{AbstractUncertainValue,Int64}",
    "page": "-",
    "title": "Statistics.std",
    "category": "method",
    "text": "std(uv::AbstractUncertainValue, n::Int)\n\nCompute the standard deviation of an uncertain value over an n-draw sample of it.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.var-Tuple{AbstractUncertainValue,Int64}",
    "page": "-",
    "title": "Statistics.var",
    "category": "method",
    "text": "variance(uv::AbstractUncertainValue, n::Int)\n\nCompute the variance of an uncertain value over an n-draw sample of it.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.quantile-Tuple{AbstractUncertainValue,Any,Int64}",
    "page": "-",
    "title": "Statistics.quantile",
    "category": "method",
    "text": "quantile(uv::AbstractUncertainValue, q, n::Int)\n\nCompute the quantile(s) q of an uncertain value over an n-draw sample of it.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics-of-single-uncertain-values-1",
    "page": "-",
    "title": "Statistics of single uncertain values",
    "category": "section",
    "text": "mean(uv::AbstractUncertainValue, n::Int)median(uv::AbstractUncertainValue, n::Int)middle(uv::AbstractUncertainValue, n::Int)std(uv::AbstractUncertainValue, n::Int)var(uv::AbstractUncertainValue, n::Int)quantile(uv::AbstractUncertainValue, q, n::Int)"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.mean-Tuple{AbstractUncertainValueDataset,Int64}",
    "page": "-",
    "title": "Statistics.mean",
    "category": "method",
    "text": "mean(d::AbstractUncertainValueDataset, n::Int)\n\nComputes the element-wise mean of a dataset of uncertain values. Takes the mean of an n-draw sample for each element.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.median-Tuple{AbstractUncertainValueDataset,Int64}",
    "page": "-",
    "title": "Statistics.median",
    "category": "method",
    "text": "median(d::AbstractUncertainValueDataset, n::Int)\n\nComputes the element-wise median of a dataset of uncertain values. Takes the median of an n-draw sample for each element.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.std-Tuple{AbstractUncertainValueDataset,Int64}",
    "page": "-",
    "title": "Statistics.std",
    "category": "method",
    "text": "std(d::AbstractUncertainValueDataset, n::Int; kwargs...)\n\nComputes the element-wise standard deviation of a dataset of uncertain values. Takes the standard deviation of an n-draw sample for each element.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.var-Tuple{AbstractUncertainValueDataset,Int64}",
    "page": "-",
    "title": "Statistics.var",
    "category": "method",
    "text": "var(d::AbstractUncertainValueDataset, n::Int; kwargs...)\n\nComputes the element-wise sample variance of a dataset of uncertain values. Takes the sample variance of an n-draw sample for each element.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.quantile-Tuple{AbstractUncertainValueDataset,Any,Int64}",
    "page": "-",
    "title": "Statistics.quantile",
    "category": "method",
    "text": "quantile(d::AbstractUncertainValueDataset, p, n::Int; kwargs...)\n\nCompute element-wise quantile(s) pof a dataset consisting of uncertain values. Takes the quantiles of an n-draw sample for each element.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.cov-Tuple{AbstractUncertainValueDataset,AbstractUncertainValueDataset,Int64}",
    "page": "-",
    "title": "Statistics.cov",
    "category": "method",
    "text": "cov(d1::AbstractUncertainValueDataset, d2::AbstractUncertainValueDataset, n::Int; kwargs...)\n\nCompute the covariance between two AbstractUncertainValueDatasets by realising both datasets n times.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics.cor-Tuple{AbstractUncertainValueDataset,AbstractUncertainValueDataset,Int64}",
    "page": "-",
    "title": "Statistics.cor",
    "category": "method",
    "text": "cor(d1::AbstractUncertainValueDataset, d2::AbstractUncertainValueDataset, n::Int; kwargs...)\n\nCompute the Pearson correlation between two AbstractUncertainValueDatasets by realising both datasets n times.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/core_stats/core_statistics/#Statistics-on-datasets-of-uncertain-values-1",
    "page": "-",
    "title": "Statistics on datasets of uncertain values",
    "category": "section",
    "text": "The following statistics are available for uncertain datasets (collections of uncertain values).mean(d::AbstractUncertainValueDataset, n::Int)median(d::AbstractUncertainValueDataset, n::Int)middle(d::AbstractUncertainValueDataset, n::Int)std(d::AbstractUncertainValueDataset, n::Int)var(d::AbstractUncertainValueDataset, n::Int)quantile(d::AbstractUncertainValueDataset, q, n::Int)cov(d1::AbstractUncertainValueDataset, d2::AbstractUncertainValueDataset, n::Int)cor(d1::AbstractUncertainValueDataset, d2::AbstractUncertainValueDataset, n::Int)"
},

{
    "location": "uncertain_statistics/hypothesistests/hypothesis_tests_overview/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "In addition to providing ensemble computation of basic statistic measures, this package also wraps various hypothesis tests from HypothesisTests.jl. This allows us to perform hypothesis testing on ensemble realisations of the data."
},

{
    "location": "uncertain_statistics/hypothesistests/hypothesis_tests_overview/#Implemented-hypothesis-tests-1",
    "page": "-",
    "title": "Implemented hypothesis tests",
    "category": "section",
    "text": "The following hypothesis tests are implemented for uncertain data types.One sample t-test.\nEqual variance t-test.\nUnequal variance t-test.\nExact Kolmogorov-Smirnov test.\nApproximate two-sample Kolmogorov-Smirnov test.\nOne-sample Anderson–Darling test.\nJarque-Bera test."
},

{
    "location": "uncertain_statistics/hypothesistests/hypothesis_tests_overview/#Terminology-1",
    "page": "-",
    "title": "Terminology",
    "category": "section",
    "text": "Pooled statistics are computed by sampling all uncertain values comprising the dataset n times, pooling the values together and treating them as one variable, then computing the statistic.Element-wise statistics are computed by sampling each uncertain value n times, keeping the data generated from each uncertain value separate. The statistics are the computed separately for each sample."
},

{
    "location": "uncertain_statistics/hypothesistests/one_sample_t_test/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "uncertain_statistics/hypothesistests/one_sample_t_test/#HypothesisTests.OneSampleTTest",
    "page": "-",
    "title": "HypothesisTests.OneSampleTTest",
    "category": "type",
    "text": "OneSampleTTest(d::AbstractUncertainValue, n::Int = 1000;\n    μ0::Real = 0) -> OneSampleTTest\n\nPerform a one sample t-test of the null hypothesis that the uncertain value has a distribution with mean μ0 against the alternative hypothesis that its distribution does not have mean μ0. n indicates the number of draws during resampling.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/one_sample_t_test/#Regular-test-1",
    "page": "-",
    "title": "Regular test",
    "category": "section",
    "text": "OneSampleTTest(d::AbstractUncertainValue, n::Int = 1000; μ0::Real = 0)Example:# Normally distributed uncertain observation with mean = 2.1\nuv = UncertainValue(Normal, 2.1, 0.2)\n\n# Perform a one-sample t-test to test the null hypothesis that\n# the sample comes from a distribution with mean μ0\nOneSampleTTest(uv, 1000, μ0 = 2.1)Which gives the following output:# Which results in\nOne sample t-test\n-----------------\nPopulation details:\n    parameter of interest:   Mean\n    value under h_0:         2.1\n    point estimate:          2.1031909275381566\n    95% confidence interval: (2.091, 2.1154)\n\nTest summary:\n    outcome with 95% confidence: fail to reject h_0\n    two-sided p-value:           0.6089\n\nDetails:\n    number of observations:   1000\n    t-statistic:              0.5117722099885472\n    degrees of freedom:       999\n    empirical standard error: 0.00623505433839Thus, we cannot reject the null-hypothesis that the sample comes from a distribution with mean = 2.1. Therefore, we accept the alternative hypothesis that our sample does in fact come from such a distribution. This is of course true, because we defined the uncertain value as a normal distribution with mean 2.1."
},

{
    "location": "uncertain_statistics/hypothesistests/one_sample_t_test/#UncertainData.UncertainStatistics.OneSampleTTestPooled",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.OneSampleTTestPooled",
    "category": "function",
    "text": "OneSampleTTestPooled(d1::UncertainDataset,\n    d2::UncertainDataset,\n    n::Int = 1000; μ0::Real = 0) -> OneSampleTTest\n\nFirst, sample n draws of each uncertain value in each dataset, pooling the draws from the elements of d1 and the draws from the elements of d2 separately. Then, perform a paired sample t-test of the null hypothesis that the differences between pairs of uncertain values in d1 and d2 come from a distribution with mean μ0 against the alternative hypothesis that the distribution does not have mean μ0.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/one_sample_t_test/#Pooled-test-1",
    "page": "-",
    "title": "Pooled test",
    "category": "section",
    "text": "OneSampleTTestPooled(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000; μ0::Real = 0)"
},

{
    "location": "uncertain_statistics/hypothesistests/one_sample_t_test/#UncertainData.UncertainStatistics.OneSampleTTestElementWise",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.OneSampleTTestElementWise",
    "category": "function",
    "text": "OneSampleTTestElementWise(d1::UncertainDataset,\n    d2::UncertainDataset,\n    n::Int = 1000; μ0::Real = 0) -> Vector{OneSampleTTest}\n\nPerform a one sample t-test of the null hypothesis that the uncertain value has a distribution with mean μ0 against the alternative hypothesis that its distribution does not have mean μ0 for uncertain value in d.\n\nn indicates the number of draws during resampling.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/one_sample_t_test/#Element-wise-test-1",
    "page": "-",
    "title": "Element-wise test",
    "category": "section",
    "text": "OneSampleTTestElementWise(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000; μ0::Real = 0)"
},

{
    "location": "uncertain_statistics/hypothesistests/equal_variance_t_test/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "uncertain_statistics/hypothesistests/equal_variance_t_test/#HypothesisTests.EqualVarianceTTest",
    "page": "-",
    "title": "HypothesisTests.EqualVarianceTTest",
    "category": "type",
    "text": "EqualVarianceTTest(d1::AbstractUncertainValue, d2::AbstractUncertainValue,\n    n::Int = 1000; μ0::Real = 0) -> EqualVarianceTTest\n\nConsider two samples s1 and s2, each consisting of n random draws from the distributions furnishing d1 and d2, respectively.\n\nThis function performs a two-sample t-test of the null hypothesis that s1 and s2 come from distributions with equal means and variances against the alternative hypothesis that the distributions have different means but equal variances.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/equal_variance_t_test/#Regular-test-1",
    "page": "-",
    "title": "Regular test",
    "category": "section",
    "text": "EqualVarianceTTest(d1::AbstractUncertainValue, d2::AbstractUncertainValue, n::Int = 1000; μ0::Real = 0)ExampleLet\'s create two uncertain values furnished by distributions of different types. We\'ll perform the equal variance t-test to check if there is support for the null-hypothesis that the distributions furnishing the uncertain values come from distributions with equal means and variances.We expect the test to reject this null-hypothesis, because we\'ve created two very different distributions.uv1 = UncertainValue(Normal, 1.2, 0.3)\nuv2 = UncertainValue(Gamma, 2, 3)\n\n# EqualVarianceTTest on 1000 draws for each variable\nEqualVarianceTTest(uv1, uv2, 1000)The output is:Two sample t-test (equal variance)\n----------------------------------\nPopulation details:\n    parameter of interest:   Mean difference\n    value under h_0:         0\n    point estimate:          -4.782470406651697\n    95% confidence interval: (-5.0428, -4.5222)\n\nTest summary:\n    outcome with 95% confidence: reject h_0\n    two-sided p-value:           <1e-99\n\nDetails:\n    number of observations:   [1000,1000]\n    t-statistic:              -36.03293014520585\n    degrees of freedom:       1998\n    empirical standard error: 0.1327249931487462The test rejects the null-hypothesis, so we accept the alternative hypothesis that the samples come from distributions with different means and variances."
},

{
    "location": "uncertain_statistics/hypothesistests/equal_variance_t_test/#UncertainData.UncertainStatistics.EqualVarianceTTestPooled",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.EqualVarianceTTestPooled",
    "category": "function",
    "text": "EqualVarianceTTestPooled(d1::UncertainDataset, d2::UncertainDataset,\n    n::Int = 1000; μ0::Real = 0) -> EqualVarianceTTest\n\nConsider two samples s1[i] and s2[i], each consisting of n random draws from the distributions furnishing the uncertain values d1[i] and d2[i], respectively. Gather all s1[i] in a pooled sample S1, and all s2[i] in a pooled sample S2.\n\nPerform a two-sample t-test of the null hypothesis that S1 and S2 come from distributions with equal means and variances against the alternative hypothesis that the distributions have different means but equal variances.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/equal_variance_t_test/#Pooled-test-1",
    "page": "-",
    "title": "Pooled test",
    "category": "section",
    "text": "EqualVarianceTTestPooled(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000; μ0::Real = 0)"
},

{
    "location": "uncertain_statistics/hypothesistests/equal_variance_t_test/#UncertainData.UncertainStatistics.EqualVarianceTTestElementWise",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.EqualVarianceTTestElementWise",
    "category": "function",
    "text": "EqualVarianceTTestElementWise(d1::UncertainDataset, d2::UncertainDataset,\n    n::Int = 1000; μ0::Real = 0) -> Vector{EqualVarianceTTest}\n\nConsider two samples s1[i] and s2[i], each consisting of n random draws from the distributions furnishing the uncertain values d1[i] and d2[i], respectively. This function performs an elementwise EqualVarianceTTest on the pairs (s1[i], s2[i]). Specifically:\n\nPerforms an pairwise two-sample t-test of the null hypothesis that s1[i] and s2[i] come from distributions with equal means and variances against the alternative hypothesis that the distributions have different means but equal variances.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/equal_variance_t_test/#Element-wise-test-1",
    "page": "-",
    "title": "Element-wise test",
    "category": "section",
    "text": "EqualVarianceTTestElementWise(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000; μ0::Real = 0)"
},

{
    "location": "uncertain_statistics/hypothesistests/unequal_variance_t_test/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "uncertain_statistics/hypothesistests/unequal_variance_t_test/#HypothesisTests.UnequalVarianceTTest",
    "page": "-",
    "title": "HypothesisTests.UnequalVarianceTTest",
    "category": "type",
    "text": "UnequalVarianceTTest(d1::AbstractUncertainValue, d2::AbstractUncertainValue,\n    n::Int = 1000; μ0::Real = 0) -> UnequalVarianceTTest\n\nConsider two samples s1 and s2, each consisting of n random draws from the distributions furnishing d1 and d2, respectively.\n\nPerform an unequal variance two-sample t-test of the null hypothesis that s1 and s2 come from distributions with equal means against the alternative hypothesis that the distributions have different means.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/unequal_variance_t_test/#Regular-test-1",
    "page": "-",
    "title": "Regular test",
    "category": "section",
    "text": "UnequalVarianceTTest(d1::AbstractUncertainValue, d2::AbstractUncertainValue, n::Int = 1000; μ0::Real = 0)"
},

{
    "location": "uncertain_statistics/hypothesistests/unequal_variance_t_test/#UncertainData.UncertainStatistics.UnequalVarianceTTestPooled",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.UnequalVarianceTTestPooled",
    "category": "function",
    "text": "UnequalVarianceTTestPooled(d1::UncertainDataset, d2::UncertainDataset,\n    n::Int = 1000; μ0::Real = 0) -> UnequalVarianceTTest\n\nConsider two samples s1[i] and s2[i], each consisting of n random draws from the distributions furnishing the uncertain values d1[i] and d2[i], respectively. Gather all s1[i] in a pooled sample S1, and all s2[i] in a pooled sample S2.\n\nThis function performs an unequal variance two-sample t-test of the null hypothesis that S1 and S2 come from distributions with equal means against the alternative hypothesis that the distributions have different means.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/unequal_variance_t_test/#Pooled-test-1",
    "page": "-",
    "title": "Pooled test",
    "category": "section",
    "text": "UnequalVarianceTTestPooled(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000; μ0::Real = 0)"
},

{
    "location": "uncertain_statistics/hypothesistests/unequal_variance_t_test/#UncertainData.UncertainStatistics.UnequalVarianceTTestElementWise",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.UnequalVarianceTTestElementWise",
    "category": "function",
    "text": "UnequalVarianceTTestElementWise(d1::UncertainDataset, d2::UncertainDataset,\n    n::Int = 1000; μ0::Real = 0) -> Vector{UnequalVarianceTTest}\n\nConsider two samples s1[i] and s2[i], each consisting of n random draws from the distributions furnishing the uncertain values d1[i] and d2[i], respectively. This function performs an elementwise EqualVarianceTTest on the pairs (s1[i], s2[i]). Specifically:\n\nPerforms an pairwise unequal variance two-sample t-test of the null hypothesis that s1[i] and s2[i] come from distributions with equal means against the alternative hypothesis that the distributions have different means.\n\nThis test is sometimes known as Welch\'s t-test. It differs from the equal variance t-test in that it computes the number of degrees of freedom of the test using the Welch-Satterthwaite equation:\n\n    ν_χ  fracleft(sum_i=1^n k_i s_i^2right)^2sum_i=1^n\n        frac(k_i s_i^2)^2ν_i\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/unequal_variance_t_test/#Element-wise-test-1",
    "page": "-",
    "title": "Element-wise test",
    "category": "section",
    "text": "UnequalVarianceTTestElementWise(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000; μ0::Real = 0)"
},

{
    "location": "uncertain_statistics/hypothesistests/exact_kolmogorov_smirnov_test/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "uncertain_statistics/hypothesistests/exact_kolmogorov_smirnov_test/#HypothesisTests.ExactOneSampleKSTest",
    "page": "-",
    "title": "HypothesisTests.ExactOneSampleKSTest",
    "category": "type",
    "text": "ExactOneSampleKSTest(uv::AbstractUncertainValue,\n    d::UnivariateDistribution, n::Int = 1000) -> ExactOneSampleKSTest\n\nPerform a one-sample exact Kolmogorov–Smirnov test of the null hypothesis that a draw of n realisations of the uncertain value uv comes from the distribution d against the alternative hypothesis that the sample is not drawn from d.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/exact_kolmogorov_smirnov_test/#Regular-test-1",
    "page": "-",
    "title": "Regular test",
    "category": "section",
    "text": "ExactOneSampleKSTest(uv::AbstractUncertainValue, d::UnivariateDistribution, n::Int = 1000)ExampleWe\'ll test whether the uncertain value uv = UncertainValue(Gamma, 2, 4) comes from the theoretical distribution Gamma(2, 4). Of course, we expect the test to confirm this, because we\'re using the exact same distribution.uv = UncertainValue(Gamma, 2, 4)\n\n# Perform the Kolgomorov-Smirnov test by drawing 1000 samples from the\n# uncertain value.\nExactOneSampleKSTest(uv, Gamma(2, 4), 1000)That gives the following output:Exact one sample Kolmogorov-Smirnov test\n----------------------------------------\nPopulation details:\n    parameter of interest:   Supremum of CDF differences\n    value under h_0:         0.0\n    point estimate:          0.0228345021301449\n\nTest summary:\n    outcome with 95% confidence: fail to reject h_0\n    two-sided p-value:           0.6655\n\nDetails:\n    number of observations:   1000As expected, the test can\'t reject the hypothesis that the uncertain value uv comes from the theoretical distribution Gamma(2, 4), precisely because it does."
},

{
    "location": "uncertain_statistics/hypothesistests/exact_kolmogorov_smirnov_test/#UncertainData.UncertainStatistics.ExactOneSampleKSTestPooled",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.ExactOneSampleKSTestPooled",
    "category": "function",
    "text": "ExactOneSampleKSTestPooled(ud::UncertainDataset,\n    d::UnivariateDistribution, n::Int = 1000) -> ExactOneSampleKSTest\n\nFirst, draw n realisations of each uncertain value in ud and pool them together. Then perform a one-sample exact Kolmogorov–Smirnov test of the null hypothesis that the pooled values comes from the distribution d against the alternative hypothesis that the sample is not drawn from d.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/exact_kolmogorov_smirnov_test/#Pooled-test-1",
    "page": "-",
    "title": "Pooled test",
    "category": "section",
    "text": "ExactOneSampleKSTestPooled(ud::UncertainDataset, d::UnivariateDistribution, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/exact_kolmogorov_smirnov_test/#UncertainData.UncertainStatistics.ExactOneSampleKSTestElementWise",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.ExactOneSampleKSTestElementWise",
    "category": "function",
    "text": "ExactOneSampleKSTestElementWise(ud::UncertainDataset,\n    d::UnivariateDistribution, n::Int = 1000) -> Vector{ExactOneSampleKSTest}\n\nFirst, draw n realisations of each uncertain value in ud, keeping one pool of values for each uncertain value.\n\nThen, perform an element-wise (pool-wise) one-sample exact Kolmogorov–Smirnov test of the null hypothesis that each value pool comes from the distribution d against the alternative hypothesis that the sample is not drawn from d.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/exact_kolmogorov_smirnov_test/#Element-wise-test-1",
    "page": "-",
    "title": "Element-wise test",
    "category": "section",
    "text": "ExactOneSampleKSTestElementWise(ud::UncertainDataset, d::UnivariateDistribution, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/approximate_twosample_kolmogorov_smirnov_test/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "uncertain_statistics/hypothesistests/approximate_twosample_kolmogorov_smirnov_test/#UncertainData.UncertainStatistics.ApproximateTwoSampleKSTestPooled",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.ApproximateTwoSampleKSTestPooled",
    "category": "function",
    "text": "ApproximateTwoSampleKSTestPooled(d1::UncertainDataset,\n    d2::UncertainDataset, n::Int = 1000) -> ApproximateTwoSampleKSTest\n\nFirst, draw n realisations of each uncertain value in d1, then separately draw n realisations of each uncertain value in d2. Then, pool all realisations for d1 together and all realisations of d2 together.\n\nOn the pooled realisations, perform an asymptotic two-sample Kolmogorov–Smirnov-test of the null hypothesis that the distribution furnishing the d1 value pool represents the same distribution as the distribution furnishing the d2 value pool, against the alternative hypothesis that the furnishing distributions are different.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/approximate_twosample_kolmogorov_smirnov_test/#Pooled-test-1",
    "page": "-",
    "title": "Pooled test",
    "category": "section",
    "text": "ApproximateTwoSampleKSTestPooled(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/approximate_twosample_kolmogorov_smirnov_test/#UncertainData.UncertainStatistics.ApproximateTwoSampleKSTestElementWise",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.ApproximateTwoSampleKSTestElementWise",
    "category": "function",
    "text": "ApproximateTwoSampleKSTestElementWise(d1::UncertainDataset,\n    d2::UncertainDataset, n::Int = 1000) -> Vector{ApproximateTwoSampleKSTest}\n\nAssuming d1 and d2 contain the same number of uncertain observations, draw n realisations of each uncertain value in d1, then separately and separately draw n realisations of each uncertain value in d2.\n\nThen, perform an asymptotic two-sample Kolmogorov–Smirnov-test of the null hypothesis that the uncertain values in d1 and d2 come from the same distribution against the alternative hypothesis that the (element-wise) values in  d1 and d2 come from different distributions.\n\nThe test is performed pairwise, i.e. ApproximateTwoSampleKSTest(d1[i], d2[i]) with n draws for the i-ith pair of uncertain values.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/approximate_twosample_kolmogorov_smirnov_test/#Element-wise-test-1",
    "page": "-",
    "title": "Element-wise test",
    "category": "section",
    "text": "ApproximateTwoSampleKSTestElementWise(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/jarque_bera_test/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "uncertain_statistics/hypothesistests/jarque_bera_test/#HypothesisTests.JarqueBeraTest",
    "page": "-",
    "title": "HypothesisTests.JarqueBeraTest",
    "category": "type",
    "text": "JarqueBeraTest(d::AbstractUncertainValue, n::Int = 1000) -> JarqueBeraTest\n\nCompute the Jarque-Bera statistic to test the null hypothesis that an uncertain value is normally distributed.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/jarque_bera_test/#Regular-test-1",
    "page": "-",
    "title": "Regular test",
    "category": "section",
    "text": "JarqueBeraTest(d::AbstractUncertainValue, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/jarque_bera_test/#UncertainData.UncertainStatistics.JarqueBeraTestPooled",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.JarqueBeraTestPooled",
    "category": "function",
    "text": "JarqueBeraTestPooled(ud::UncertainDataset, n::Int = 1000) -> JarqueBeraTest\n\nFirst, draw n realisations of each uncertain value in ud and pool them together. Then, compute the Jarque-Bera statistic to test the null hypothesis that the values of the pool are normally distributed.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/jarque_bera_test/#Pooled-test-1",
    "page": "-",
    "title": "Pooled test",
    "category": "section",
    "text": "JarqueBeraTestPooled(ud::UncertainDataset, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/jarque_bera_test/#UncertainData.UncertainStatistics.JarqueBeraTestElementWise",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.JarqueBeraTestElementWise",
    "category": "function",
    "text": "OneSampleADTestElementWise(ud::UncertainDataset,\n    n::Int = 1000) -> Vector{JarqueBeraTest}\n\nFirst, draw n realisations of each uncertain value in ud, keeping one pool of values for each uncertain value.\n\nThen, compute the Jarque-Bera statistic to test the null hypothesis that each value pool is normally distributed.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/jarque_bera_test/#Element-wise-test-1",
    "page": "-",
    "title": "Element-wise test",
    "category": "section",
    "text": "JarqueBeraTestElementWise(ud::UncertainDataset, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/mann_whitney_u_test/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "uncertain_statistics/hypothesistests/mann_whitney_u_test/#HypothesisTests.MannWhitneyUTest",
    "page": "-",
    "title": "HypothesisTests.MannWhitneyUTest",
    "category": "function",
    "text": "MannWhitneyUTest(d1::AbstractUncertainValue, d2::AbstractUncertainValue,\n    n::Int = 1000) -> MannWhitneyUTest\n\nLet s1 and s2 be samples of n realisations from the distributions furnishing the uncertain values d1 and d2.\n\nPerform a Mann-Whitney U test of the null hypothesis that the probability that an observation drawn from the same population as s1 is greater than an observation drawn from the same population as s2 is equal to the probability that an observation drawn from the same population as s2 is greater than an observation drawn from the same population as s1 against the alternative hypothesis that these probabilities are not equal.\n\nThe Mann-Whitney U test is sometimes known as the Wilcoxon rank-sum test. When there are no tied ranks and ≤50 samples, or tied ranks and ≤10 samples, MannWhitneyUTest performs an exact Mann-Whitney U test. In all other cases, MannWhitneyUTest performs an approximate Mann-Whitney U test.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/mann_whitney_u_test/#Regular-test-1",
    "page": "-",
    "title": "Regular test",
    "category": "section",
    "text": "MannWhitneyUTest(d1::AbstractUncertainValue, d2::AbstractUncertainValue, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/mann_whitney_u_test/#UncertainData.UncertainStatistics.MannWhitneyUTestPooled",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.MannWhitneyUTestPooled",
    "category": "function",
    "text": "MannWhitneyUTest(d1::UncertainDataset, d2::UncertainDataset,\n    n::Int = 1000) -> MannWhitneyUTest\n\nLet s_1_i be a sample of n realisations of the distribution furnishing the uncertain value d1[i], where i in 1 2 ldots N and N is the number of uncertain values in d1.  Next, gather the samples for all s_1_i in a pooled sample S_1.  Do the same for the second uncertain dataset d2, yielding the pooled sample  S_2.\n\nPerform a Mann-Whitney U test of the null hypothesis that the probability that an observation drawn from the same population as S_1 is greater than an observation drawn from the same population as S_2 is equal to the probability that an observation drawn from the same population as S_2 is greater than an observation drawn from the same population as S_1 against the alternative hypothesis that these probabilities are not equal.\n\nThe Mann-Whitney U test is sometimes known as the Wilcoxon rank-sum test. When there are no tied ranks and ≤50 samples, or tied ranks and ≤10 samples, MannWhitneyUTest performs an exact Mann-Whitney U test. In all other cases, MannWhitneyUTest performs an approximate Mann-Whitney U test.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/mann_whitney_u_test/#Pooled-test-1",
    "page": "-",
    "title": "Pooled test",
    "category": "section",
    "text": "MannWhitneyUTestPooled(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/mann_whitney_u_test/#UncertainData.UncertainStatistics.MannWhitneyUTestElementWise",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.MannWhitneyUTestElementWise",
    "category": "function",
    "text": "MannWhitneyUTest(d1::UncertainDataset, d2::UncertainDataset,\n    n::Int = 1000) -> Vector{MannWhitneyUTest}\n\nAssume d1 and d2 consist of the same number of uncertain values. Let s_1_i be a sample of n realisations of the distribution furnishing the uncertain value d1[i], where i in 1 2 ldots N and N is the number of uncertain values in d1. Let s_2_i be the corresponding sample for d2[i]. This function\n\nPerform an element-wise Mann-Whitney U test of the null hypothesis that the probability that an observation drawn from the same population as s_1_i is greater than an observation drawn from the same population as s_2_i is equal to the probability that an observation drawn from the same population as s_2_i is greater than an observation drawn from the same population as s_1_i against the alternative hypothesis that these probabilities are not equal.\n\nThe Mann-Whitney U test is sometimes known as the Wilcoxon rank-sum test. When there are no tied ranks and ≤50 samples, or tied ranks and ≤10 samples, MannWhitneyUTest performs an exact Mann-Whitney U test. In all other cases, MannWhitneyUTest performs an approximate Mann-Whitney U test.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/mann_whitney_u_test/#Element-wise-test-1",
    "page": "-",
    "title": "Element-wise test",
    "category": "section",
    "text": "MannWhitneyUTestElementWise(d1::UncertainDataset, d2::UncertainDataset, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/anderson_darling_test/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "uncertain_statistics/hypothesistests/anderson_darling_test/#HypothesisTests.OneSampleADTest",
    "page": "-",
    "title": "HypothesisTests.OneSampleADTest",
    "category": "type",
    "text": "OneSampleADTest(uv::UncertainValue, d::UnivariateDistribution,\n    n::Int = 1000) -> OneSampleADTest\n\nPerform a one-sample Anderson–Darling test of the null hypothesis that a draw of n realisations of the uncertain value uv comes from the distribution d against the alternative hypothesis that the sample is not drawn from d.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/anderson_darling_test/#Regular-test-1",
    "page": "-",
    "title": "Regular test",
    "category": "section",
    "text": "OneSampleADTest(uv::AbstractUncertainValue, d::UnivariateDistribution, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/anderson_darling_test/#UncertainData.UncertainStatistics.OneSampleADTestPooled",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.OneSampleADTestPooled",
    "category": "function",
    "text": "OneSampleADTestPooled(ud::UncertainDataset, d::UnivariateDistribution,\n    n::Int = 1000)) -> OneSampleADTest\n\nFirst, draw n realisations of each uncertain value in ud and pool them together. Then perform a one-sample Anderson–Darling test of the null hypothesis that the pooled values comes from the distribution d against the alternative hypothesis that the sample is not drawn from d.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/anderson_darling_test/#Pooled-test-1",
    "page": "-",
    "title": "Pooled test",
    "category": "section",
    "text": "OneSampleADTestPooled(ud::UncertainDataset, d::UnivariateDistribution, n::Int = 1000)"
},

{
    "location": "uncertain_statistics/hypothesistests/anderson_darling_test/#UncertainData.UncertainStatistics.OneSampleADTestElementWise",
    "page": "-",
    "title": "UncertainData.UncertainStatistics.OneSampleADTestElementWise",
    "category": "function",
    "text": "OneSampleADTestElementWise(ud::UncertainDataset, d::UnivariateDistribution,\n    n::Int = 1000)) -> Vector{OneSampleADTest}\n\nFirst, draw n realisations of each uncertain value in ud, keeping one pool of values for each uncertain value. Then, perform an element-wise (pool-wise) one-sample Anderson–Darling test of the null hypothesis that each value pool comes from the distribution d against the alternative hypothesis that the sample is not drawn from d.\n\n\n\n\n\n"
},

{
    "location": "uncertain_statistics/hypothesistests/anderson_darling_test/#Element-wise-test-1",
    "page": "-",
    "title": "Element-wise test",
    "category": "section",
    "text": "OneSampleADTestElementWise(ud::UncertainDataset, d::UnivariateDistribution, n::Int = 1000)"
},

{
    "location": "sampling_constraints/available_constraints/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "The following sampling constraints are available:"
},

{
    "location": "sampling_constraints/available_constraints/#Generic-resampling-1",
    "page": "-",
    "title": "Generic resampling",
    "category": "section",
    "text": "These constraints may be used in any resampling setting."
},

{
    "location": "sampling_constraints/available_constraints/#UncertainData.SamplingConstraints.TruncateStd",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.TruncateStd",
    "category": "type",
    "text": "TruncateStd(nσ::Int)\n\nA constraint indicating that the distribution furnishing an uncertain value should be truncated at nσ (n standard deviations).\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/available_constraints/#Standard-deviation-1",
    "page": "-",
    "title": "Standard deviation",
    "category": "section",
    "text": "TruncateStd"
},

{
    "location": "sampling_constraints/available_constraints/#UncertainData.SamplingConstraints.TruncateMinimum",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.TruncateMinimum",
    "category": "type",
    "text": "TruncateMinimum(min::Number)\n\nA constraint indicating that the distribution furnishing an uncertain value should be truncated below at some specified minimum value.\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/available_constraints/#UncertainData.SamplingConstraints.TruncateMaximum",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.TruncateMaximum",
    "category": "type",
    "text": "TruncateMaximum(max::Number)\n\nA constraint indicating that the distribution furnishing an uncertain value should be truncated above at some specified maximum value.\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/available_constraints/#UncertainData.SamplingConstraints.TruncateRange",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.TruncateRange",
    "category": "type",
    "text": "TruncateRange(min::Number, max::Number)\n\nA constraint indicating that the distribution furnishing an uncertain value should be truncated at some range [min, max].\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/available_constraints/#Value-range-1",
    "page": "-",
    "title": "Value range",
    "category": "section",
    "text": "TruncateMinimumTruncateMaximumTruncateRange"
},

{
    "location": "sampling_constraints/available_constraints/#UncertainData.SamplingConstraints.TruncateLowerQuantile",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.TruncateLowerQuantile",
    "category": "type",
    "text": "TruncateLowerQuantile(lower_quantile::Float64)\n\nA constraint indicating that the distribution furnishing an uncertain value should be truncated below at some quantile.\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/available_constraints/#UncertainData.SamplingConstraints.TruncateUpperQuantile",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.TruncateUpperQuantile",
    "category": "type",
    "text": "TruncateUpperQuantile(upper_quantile::Float64)\n\nA constraint indicating that the distribution furnishing an uncertain value should be truncated above at some quantile.\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/available_constraints/#UncertainData.SamplingConstraints.TruncateQuantiles",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.TruncateQuantiles",
    "category": "type",
    "text": "TruncateQuantiles(lower_quantile::Float64, upper_quantile::Float64)\n\nA constraint indicating that the distribution furnishing an uncertain value should be truncated at some quantile quantile (lower_quantile, upper_quantile).\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/available_constraints/#Quantile-range-1",
    "page": "-",
    "title": "Quantile range",
    "category": "section",
    "text": "TruncateLowerQuantileTruncateUpperQuantileTruncateQuantiles"
},

{
    "location": "sampling_constraints/constrain_uncertain_values/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "Uncertain values may be constrained in various ways, as visualised by the following example.(Image: )Which was generated as follows. Note that the plot recipe normalises the distributions after constraining the uncertain values.uval = UncertainValue(Normal, 2, 5)\n\np1 = plot(uval, label = \"full support\", title = \"Quantile truncation\")\nplot!(constrain(uval, TruncateQuantiles(0.2, 0.8)), label = \"quantile range truncation\")\nplot!(constrain(uval, TruncateUpperQuantile(0.9)), label = \"upper quantile truncation\")\nplot!(constrain(uval, TruncateLowerQuantile(0.1)), label = \"lower quantile truncation\")\n\np2 = plot(uval, label = \"full support\", title = \"Value truncation\")\nplot!(constrain(uval, TruncateRange(2, 4)), ls = :dash, label = \"range truncation\")\nplot!(constrain(uval, TruncateMaximum(4.5)), ls = :dash, label = \"maximum value truncation\")\nplot!(constrain(uval, TruncateMinimum(-2)), ls = :dash, label = \"minimum value truncation\")\n\nplot(p1, p2, layout = (2, 1), link = :x, xlabel = \"value\", ylabel = \"probability\")"
},

{
    "location": "sampling_constraints/constrain_uncertain_values/#UncertainData.SamplingConstraints.constrain-Tuple{AbstractUncertainValue,SamplingConstraint}",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.constrain",
    "category": "method",
    "text": "constrain(uv::AbstractUncertainValue, constraint::SamplingConstraint)\n\nApply the constraint and truncate the support of the distribution furnishing the uncertain value uv. Returns a constrained uncertain value.\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/constrain_uncertain_values/#Documentation-1",
    "page": "-",
    "title": "Documentation",
    "category": "section",
    "text": "constrain(uv::AbstractUncertainValue, constraint::SamplingConstraint)"
},

{
    "location": "sampling_constraints/constrain_uncertain_values/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": "using UncertainData, Distributions\n\n# Define an uncertain value furnished by a theoretical distribution\nuv = UncertainValue(Normal, 1, 0.5)\n\n# Constrain the support of the furnishing distribution using various\n# constraints\nuvc_lq = constrain(uv, TruncateLowerQuantile(0.2))\nuvc_uq = constrain(uv, TruncateUpperQuantile(0.8))\nuvc_q = constrain(uv, TruncateQuantiles(0.2, 0.8))\nuvc_min = constrain(uv, TruncateMinimum(0.5))\nuvc_max = constrain(uv, TruncateMaximum(1.5))\nuvc_range = constrain(uv, TruncateRange(0.5, 1.5))using UncertainData, Distributions\n\n# Define an uncertain value furnished by a theoretical distribution with\n# parameters fitted to empirical data\nuv = UncertainValue(Normal, rand(Normal(-1, 0.2), 1000))\n\n# Constrain the support of the furnishing distribution using various\n# constraints\nuvc_lq = constrain(uv, TruncateLowerQuantile(0.2))\nuvc_uq = constrain(uv, TruncateUpperQuantile(0.8))\nuvc_q = constrain(uv, TruncateQuantiles(0.2, 0.8))\nuvc_min = constrain(uv, TruncateMinimum(0.5))\nuvc_max = constrain(uv, TruncateMaximum(1.5))\nuvc_range = constrain(uv, TruncateRange(0.5, 1.5))# Define an uncertain value furnished by a kernel density estimate to the\n# distribution of the empirical data\nuv = UncertainValue(UnivariateKDE, rand(Uniform(10, 15), 1000))\n\n# Constrain the support of the furnishing distribution using various\n# constraints\nuvc_lq = constrain(uv, TruncateLowerQuantile(0.2))\nuvc_uq = constrain(uv, TruncateUpperQuantile(0.8))\nuvc_q = constrain(uv, TruncateQuantiles(0.2, 0.8))\nuvc_min = constrain(uv, TruncateMinimum(13))\nuvc_max = constrain(uv, TruncateMaximum(13))\nuvc_range = constrain(uv, TruncateRange(11, 12))"
},

{
    "location": "sampling_constraints/ordered_sequence_exists/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "There are a few built-in functions to check if your dataset allows the application of  certain sequential sampling constraints. These functions will check  whether a valid sequence through your dataset exists, so that you can know beforehand  whether a particular resampling scheme is possible to apply to your data."
},

{
    "location": "sampling_constraints/ordered_sequence_exists/#UncertainData.SamplingConstraints.strictly_increasing_sequence_exists",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.strictly_increasing_sequence_exists",
    "category": "function",
    "text": "strictly_increasing_sequence_exists(udata::AbstractUncertainValueDataset; \n    quantiles = [0.0001, 0.9999])\n\nDoes a path through the dataset exist? I.e, check that a strictly  increasing sequence can be found after first  constraining each distribution to the provided quantile range (this  is necessary because some distributions may have infinite support).\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/ordered_sequence_exists/#Strictly-increasing-sequence-1",
    "page": "-",
    "title": "Strictly increasing sequence",
    "category": "section",
    "text": "strictly_increasing_sequence_exists"
},

{
    "location": "sampling_constraints/ordered_sequence_exists/#UncertainData.SamplingConstraints.strictly_decreasing_sequence_exists",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.strictly_decreasing_sequence_exists",
    "category": "function",
    "text": "strictly_decreasing_sequence_exists(udata::AbstractUncertainValueDataset;\n    quantiles = [0.0001, 0.9999])\n\nDoes a path through the dataset exist? I.e,  check that a strictly  decreasing sequence can be found after first  constraining each distribution to the provided quantile range (this  is necessary because some distributions may have infinite support).\n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/ordered_sequence_exists/#Strictly-decreasing-sequence-1",
    "page": "-",
    "title": "Strictly decreasing sequence",
    "category": "section",
    "text": "strictly_decreasing_sequence_exists"
},

{
    "location": "sampling_constraints/sequential_constraints/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "The following constraints may be used to impose sequential constraints when sampling a  dataset element-wise. "
},

{
    "location": "sampling_constraints/sequential_constraints/#UncertainData.SamplingConstraints.StrictlyIncreasing",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.StrictlyIncreasing",
    "category": "type",
    "text": "StrictlyIncreasing\n\nA sampling constraint indicating element-wise sampling of the uncertain values in a dataset, such that the values of the draw are strictly increasing in magnitude.\n\nTypically used when there are known, physical constraints on the measurements. For example, geochemical measurements of sediments at different depths of a sediment core  are taken at physically separate depths in the core. Thus, the order of the indices cannot be flipped, and must be strictly decreasing/increasing. \n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/sequential_constraints/#Increasing-1",
    "page": "-",
    "title": "Increasing",
    "category": "section",
    "text": "StrictlyIncreasing"
},

{
    "location": "sampling_constraints/sequential_constraints/#UncertainData.SamplingConstraints.StrictlyDecreasing",
    "page": "-",
    "title": "UncertainData.SamplingConstraints.StrictlyDecreasing",
    "category": "type",
    "text": "StrictlyDecreasing\n\nA sampling constraint indicating element-wise sampling of the uncertain values in a dataset, such that the values of the draw are strictly decreasing in magnitude.\n\nTypically used when there are known, physical constraints on the measurements. For example, geochemical measurements of sediments at different depths of a sediment core  are taken at physically separate depths in the core. Thus, the order of the indices cannot be flipped, and must be strictly decreasing/increasing. \n\n\n\n\n\n"
},

{
    "location": "sampling_constraints/sequential_constraints/#Decreasing-1",
    "page": "-",
    "title": "Decreasing",
    "category": "section",
    "text": "StrictlyDecreasing"
},

{
    "location": "resampling/resampling_overview/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "Because uncertain values are represented by  some kind of probability distribution, we may trivially resample them by drawing values from their furnishing distributions.If needed, you may choose to  constrain an uncertain value  before resampling, using one of the available  sampling constraints.The resample function is used to resample uncertain values. For detailed instructions on how to sample uncertain values and datasets of uncertain values, see the following pages:Resampling uncertain values\nResampling uncertain value datasets\nResampling uncertain index-value datasets"
},

{
    "location": "resampling/resampling_uncertain_values/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "Uncertain values may be resampled by drawing random number from the distributions furnishing them."
},

{
    "location": "resampling/resampling_uncertain_values/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValue}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(uv::AbstractUncertainValue)\n\nSample the uncertain value once, drawing values from the entire support of the probability  distribution furnishing it.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_values/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValue,Int64}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(uv::AbstractUncertainValue, n::Int)\n\nSample the uncertain value n times, drawing values from the entire support of the  probability distribution furnishing it.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_values/#Documentation-1",
    "page": "-",
    "title": "Documentation",
    "category": "section",
    "text": "resample(uv::AbstractUncertainValue)resample(uv::AbstractUncertainValue, n::Int)"
},

{
    "location": "resampling/resampling_uncertain_values/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": "using Distributions, UncertainData\n\n# Generate some uncertain values\nuv_theoretical = UncertainValue(Normal, 4, 0.2)\nuv_theoretical_fitted = UncertainValue(Normal, rand(Normal(1, 0.2), 1000))\nuv_kde = UncertainValue(rand(Gamma(4, 5), 1000))\n\nresample(uv_theoretical)\nresample(uv_theoretical_fitted)\nresample(uv_kde)using Distributions, UncertainData\n\n# Generate some uncertain values\nuv_theoretical = UncertainValue(Normal, 4, 0.2)\nuv_theoretical_fitted = UncertainValue(Normal, rand(Normal(1, 0.2), 1000))\nuv_kde = UncertainValue(rand(Gamma(4, 5), 1000))\n\nn = 500\nresample(uv_theoretical, n)\nresample(uv_theoretical_fitted, n)\nresample(uv_kde, n)Resampling can also be performed with constraints.resample(uv::AbstractUncertainValue, constraint::SamplingConstraint)   samples the uncertain value once, drawing from a restricted   range of the support of the the probability distribution furnishing it.\nresample(uv::AbstractUncertainValue, constraint::SamplingConstraint, n::Int)   samples the uncertain value n times, drawing values from a restricted   range of the support of the the probability distribution furnishing it.Available sampling constraints are:TruncateStd(nσ::Int)\nTruncateMinimum(min::Number)\nTruncateMaximum(max::Number)\nTruncateRange(min::Number, max::Number)\nTruncateLowerQuantile(lower_quantile::Float64)\nTruncateUpperQuantile(upper_quantile::Float64)\nTruncateQuantiles(lower_quantile::Float64, upper_quantile::Float64)For full documentation of the constraints, see the  available constraints in the menu.using Distributions, UncertainData\n\n# Generate some uncertain values\nuv_theoretical = UncertainValue(Normal, 4, 0.2)\nuv_theoretical_fitted = UncertainValue(Normal, rand(Normal(1, 0.2), 1000))\nuv_kde = UncertainValue(rand(Gamma(4, 5), 1000))\n\n# Resample the uncertain value with the restriction that the sampled\n# values must be higher than the 0.2-th quantile of the distribution\n# furnishing the value.\nresample(uv_theoretical, TruncateLowerQuantile(0.2))\nresample(uv_theoretical_fitted, TruncateLowerQuantile(0.2))\nresample(uv_kde, TruncateLowerQuantile(0.2))\n\nn = 100\nresample(uv_theoretical, TruncateLowerQuantile(0.2), n)\nresample(uv_theoretical_fitted, TruncateLowerQuantile(0.2), n)\nresample(uv_kde, TruncateLowerQuantile(0.2))\n\nusing Distributions, UncertainData\n\n# Generate some uncertain values\nuv_theoretical = UncertainValue(Normal, 4, 0.2)\nuv_theoretical_fitted = UncertainValue(Normal, rand(Normal(1, 0.2), 1000))\nuv_kde = UncertainValue(rand(Gamma(4, 5), 1000))\n\n# Resample the uncertain value  with the restriction that the sampled\n# values must be lower than the 0.95-th quantile of the distribution\n# furnishing the value.\nresample(uv_theoretical, TruncateUpperQuantile(0.95))\nresample(uv_theoretical_fitted, TruncateUpperQuantile(0.95))\nresample(uv_kde, TruncateUpperQuantile(0.95))\n\nn = 100\nresample(uv_theoretical, TruncateUpperQuantile(0.95), n)\nresample(uv_theoretical_fitted, TruncateUpperQuantile(0.95), n)\nresample(uv_kde, TruncateUpperQuantile(0.95))using Distributions, UncertainData\n\n# Generate some uncertain values\nuv_theoretical = UncertainValue(Normal, 4, 0.2)\nuv_theoretical_fitted = UncertainValue(Normal, rand(Normal(1, 0.2), 1000))\nuv_kde = UncertainValue(rand(Gamma(4, 5), 1000))\n\n# Resample the uncertain value with the restriction that the sampled\n# values must be within the (0.025, 0.975) quantile range.\nresample(uv_theoretical, TruncateQuantiles(0.025, 0.975))\nresample(uv_theoretical_fitted, TruncateQuantiles(0.025, 0.975))\nresample(uv_kde, TruncateQuantiles(0.025, 0.975))\n\nn = 100\nresample(uv_theoretical, TruncateQuantiles(0.025, 0.975), n)\nresample(uv_theoretical_fitted, TruncateQuantiles(0.025, 0.975), n)\nresample(uv_kde, TruncateQuantiles(0.025, 0.975))using Distributions, UncertainData\n\n# Generate some uncertain values\nuv_theoretical = UncertainValue(Normal, 4, 0.2)\nuv_theoretical_fitted = UncertainValue(Normal, rand(Normal(1, 0.2), 1000))\nuv_kde = UncertainValue(rand(Gamma(4, 5), 1000))\n\n# Resample the uncertain value with the restriction that the sampled\n# values have -2 as a lower bound.\nresample(uv_theoretical, TruncateMinimum(-2))\nresample(uv_theoretical_fitted, TruncateMinimum(-2))\nresample(uv_kde, TruncateMinimum(-2))\n\nn = 100\nresample(uv_theoretical, TruncateMinimum(-2), n)\nresample(uv_theoretical_fitted, TruncateMinimum(-2), n)\nresample(uv_kde, TruncateMinimum(-2))using Distributions, UncertainData\n\n# Generate some uncertain values\nuv_theoretical = UncertainValue(Normal, 4, 0.2)\nuv_theoretical_fitted = UncertainValue(Normal, rand(Normal(1, 0.2), 1000))\nuv_kde = UncertainValue(rand(Gamma(4, 5), 1000))\n\n# Resample the uncertain value with the restriction that the sampled\n# values have 3 as an upper bound.\nresample(uv_theoretical, TruncateMaximum(3))\nresample(uv_theoretical_fitted, TruncateMaximum(3))\nresample(uv_kde, TruncateMaximum(3))\n\nn = 100\nresample(uv_theoretical, TruncateMaximum(3), n)\nresample(uv_theoretical_fitted, TruncateMaximum(3), n)\nresample(uv_kde, TruncateMaximum(3))using Distributions, UncertainData\n\n# Generate some uncertain values\nuv_theoretical = UncertainValue(Normal, 4, 0.2)\nuv_theoretical_fitted = UncertainValue(Normal, rand(Normal(1, 0.2), 1000))\nuv_kde = UncertainValue(rand(Gamma(4, 5), 1000))\n\n# Resample the uncertain value with the restriction that the sampled\n# values must have values on the interval [-1, 1]. We first sample once,\n# then 50 times.\nresample(uv_theoretical, TruncateRange(-1, 1))\nresample(uv_theoretical_fitted, TruncateRange(-1, 1))\nresample(uv_kde, TruncateRange(-1, 1))\n\nn = 100\nresample(uv_theoretical, TruncateRange(-1, 1), n)\nresample(uv_theoretical_fitted, TruncateRange(-1, 1), n)\nresample(uv_kde, TruncateRange(-1, 1))"
},

{
    "location": "resampling/resampling_uncertain_datasets/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "Uncertain datasets are resampled by element-wise sampling the furnishing distributions  of the uncertain values in the dataset. You may sample the dataset as it is, or apply  sampling constraints that limit the  support of the individual data value distributions.Note: for datasets where both indices and values are uncertain, see  uncertain index-value datasets."
},

{
    "location": "resampling/resampling_uncertain_datasets/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValueDataset}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(uv::UncertainDataset) -> Vector{Float64}\n\nResample an uncertain value dataset in an element-wise manner. \n\nDraws values from the entire support of the furnishing distributions.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_datasets/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValueDataset,Int64}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(uv::UncertainDataset, n::Int) -> Vector{Vector{Float64}}\n\nResample n realizations of an uncertain value dataset in an element-wise manner. \n\nDraws values from the entire support of the furnishing distributions.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_datasets/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint}}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::AbstractUncertainValueDataset, \n	constraint::Union{SamplingConstraint, Vector{SamplingConstraint}}) -> Vector{Float64}\n\nResample an uncertain value dataset in an element-wise manner. \n\nEnforces the provided sampling constraint(s) to each of the data values, possibly  truncating the support of the furnishing distributions from which values are drawn.\n\nIf a single constraint is provided, then that constraint will be applied to all values. If a  vector of constraints (as many as there are values) is provided, then the constraints are  applied element-wise to the data values.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_datasets/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint},Int64}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::AbstractUncertainValueDataset, \n	constraint::Union{SamplingConstraint, Vector{SamplingConstraint}},\n	n::Int) -> Vector{Vector{Float64}}\n\nResample n realizations of an uncertain value dataset in an element-wise manner. \n\nEnforces the provided sampling constraint(s) to each of the data values, possibly  truncating the support of the furnishing distributions from which values are drawn.\n\nIf a single constraint is provided, then that constraint will be applied to all values. If a  vector of constraints (as many as there are values) is provided, then the constraints are  applied element-wise to the data values.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_datasets/#Documentation-1",
    "page": "-",
    "title": "Documentation",
    "category": "section",
    "text": "resample(uv::AbstractUncertainValueDataset)resample(uv::AbstractUncertainValueDataset, n::Int)resample(udata::AbstractUncertainValueDataset, \n	constraint::Union{SamplingConstraint, Vector{SamplingConstraint}})resample(udata::AbstractUncertainValueDataset, \n	constraint::Union{SamplingConstraint, Vector{SamplingConstraint}}, n::Int)"
},

{
    "location": "resampling/resampling_uncertain_datasets/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "resampling/resampling_uncertain_datasets/#Resampling-with-sampling-constraints-1",
    "page": "-",
    "title": "Resampling with sampling constraints",
    "category": "section",
    "text": "Consider the following example where we had a bunch of different measurements. The first ten measurements (r1) are normally distributed values with mean μ = 0 ± 0.4  and standard deviation σ = 0.5 ± 0.1. The next measurement r2 is actually a sample  consisting of 9850 replicates. Upon plotting it, we see that it has some complex  distribution which  we have to estimate using a kernel density approach (calling  UncertainValue without any additional argument triggers kernel density estimation).  Next, we have distribution r3 that upon plotting looks uniform, so we approximate it by a  uniform distribution. Finally, the last two uncertain values r4 and r5 are represented  by a normal and a gamma distribution with known parameters.To plot these data, we gather them in an UncertainDataset.dist1 = Uniform(-0.4, 0.4)\ndist2 = Uniform(-0.1, 0.1)\nr1 = [UncertainValue(Normal, 0 + rand(dist), 0.5 + rand(dist2)) for i = 1:10]\n # now drawn from a uniform distribution, but simulates \nr2 = UncertainValue(rand(9850))\nr3 = UncertainValue(Uniform, rand(10000))\nr4 = UncertainValue(Normal, -0.1, 0.5)\nr5 = UncertainValue(Gamma, 0.4, 0.8)\n\nuvals = [r1; r2; r3; r4; r5]\nudata = UncertainDataset(uvals);By default, the plot recipe for uncertain datasets will plot the median value with the  33rd to 67th percentile range (roughly equivalent to a one standard deviation for  normally distributed values). You may change the percentile range by providing a two-element vector to the plot function.Let\'s demonstrate this by creating a function that plots the uncertain values with  errors bars covering the 0.1st to 99.9th, the 5th to 95th, and the 33rd to 67th percentile  ranges. The function will also take a sampling constraint, then resample the dataset  a number of times and plot the individual realizations as lines. using UncertainData, Plots\n\nfunction resample_plot(data, sampling_constraint; n_resample_draws = 40) \n    p = plot(lw = 0.5)\n    scatter!(data, [0.001, 0.999], seriescolor = :black)\n    scatter!(data, [0.05, 0.95], seriescolor = :red)\n    scatter!(data, [0.33, 0.67], seriescolor = :green)\n\n    plot!(resample(data, sampling_constraint, n_resample_draws), \n        lc = :black, lw = 0.3, lα = 0.5)\n    return p\nend\n\n# Now, resample using some different constraints and compare the plots\np1 = resample_plot(udata, NoConstraint())\ntitle!(\"No constraints\")\np2 = resample_plot(udata, TruncateQuantiles(0.05, 0.95))\ntitle!(\"5th to 95th quantile range\")\np3 = resample_plot(udata, TruncateQuantiles(0.33, 0.67))\ntitle!(\"33th to 67th quantile range\")\np4 = resample_plot(udata, TruncateMaximum(0.7))\ntitle!(\"Truncate at maximum value = 0.7\")\n\nplot(p1, p2, p3, p4, layout = (4, 1), titlefont = font(8))This produces the following plot:(Image: )"
},

{
    "location": "resampling/resampling_uncertain_datasets/#What-happens-when-applying-invalid-constraints-to-a-dataset?-1",
    "page": "-",
    "title": "What happens when applying invalid constraints to a dataset?",
    "category": "section",
    "text": "In the example above, the resampling worked fine because all the constraints were  applicable to the data. However, it could happen that the constraint is not applicable  to all uncertain values in the dataset. For example, applying a TruncateMaximum(2)  constraint to an uncertain value u defined by u = UncertainValue(Uniform, 4, 5) would  not work, because the support of u would be empty after applying the constraint.To check if a constraint yields a nonempty truncated uncertain value, use the  support_intersection function. If the result of `support_intersection(uval1, uval2)  for two uncertain values uval1 and uval2 is the empty set ∅, then you\'ll run into  trouble.To check for such cases for an entire dataset, you can use the  verify_constraints(udata::AbstractUncertainValueDataset, constraint::SamplingConstraint)  function. It will apply the constraint to each value and return the indices of the values  for which applying the constraint would result in a furnishing distribution whose support  is the empty set."
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "Resampling UncertainIndexValueDatasets is done in the same manner as for uncertain  values and UncertainDatasets. See also the list of  available sampling constraints."
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#Documentation-1",
    "page": "-",
    "title": "Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#UncertainData.Resampling.resample-Tuple{UncertainIndexValueDataset}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::UncertainIndexValueDataset) -> Tuple{Vector{Float64}, Vector{Float64}}\n\nResample an uncertain index-value dataset in an element-wise manner.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#UncertainData.Resampling.resample-Tuple{UncertainIndexValueDataset,Int64}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::UncertainIndexValueDataset, \n	n::Int) -> Vector{Tuple{Vector{Float64}, Vector{Float64}}}\n\nResample n realizations an uncertain index-value dataset in an element-wise manner. \n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#No-constraints-1",
    "page": "-",
    "title": "No constraints",
    "category": "section",
    "text": "resample(udata::UncertainIndexValueDataset) resample(udata::UncertainIndexValueDataset, n::Int) "
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#UncertainData.Resampling.resample-Tuple{UncertainIndexValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint}}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::UncertainIndexValueDataset, \n	constraint::Union{SamplingConstraint, Vector{SamplingConstraint}}) -> Tuple{Vector{Float64}, Vector{Float64}}\n\nResample an uncertain index-value dataset in an element-wise manner. \n\nEnforces the provided sampling constraint to all uncertain values in the dataset, both  indices and data values.\n\nIf a single constraint is provided, then that constraint will be applied to all values. If a  vector of constraints (as many as there are values) is provided, then the constraints are  applied element-wise to both the indices and the data values.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#UncertainData.Resampling.resample-Tuple{UncertainIndexValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint},Int64}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::UncertainIndexValueDataset, \n	constraint::Union{SamplingConstraint, Vector{SamplingConstraint}},\n	n::Int) -> Tuple{Vector{Float64}, Vector{Float64}}\n\nResample n realizations of an uncertain index-value dataset in an element-wise manner. \n\nEnforces the provided sampling constraint to all uncertain values in the dataset, both  indices and data values.\n\nIf a single constraint is provided, that constraint will be applied to all values. If a  vector of constraints (as many as there are values) is provided, then the constraints are  applied element-wise to both the indices and the data values.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#Same-constraint-to-both-indices-and-data-values-1",
    "page": "-",
    "title": "Same constraint to both indices and data values",
    "category": "section",
    "text": "resample(udata::UncertainIndexValueDataset, \n        constraint::Union{SamplingConstraint, Vector{SamplingConstraint}})resample(udata::UncertainIndexValueDataset, \n	constraint::Union{SamplingConstraint, Vector{SamplingConstraint}},\n        n::Int)"
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#UncertainData.Resampling.resample-Tuple{UncertainIndexValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint},Union{Array{SamplingConstraint,1}, SamplingConstraint}}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::UncertainIndexValueDataset, \n	constraint_idxs::Union{SamplingConstraint, Vector{SamplingConstraint}}, \n	constraint_vals::Union{SamplingConstraint, Vector{SamplingConstraint}}) -> Tuple{Vector{Float64}, Vector{Float64}}\n\nResample an uncertain index-value dataset in an element-wise manner. \n\nEnforces separate sampling constraints to the indices and to the data values. \n\nIf a single constraint is provided, that constraint will be applied to all values. If a  vector of constraints (as many as there are values) is provided, then the constraints are  applied element-wise.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#UncertainData.Resampling.resample-Tuple{UncertainIndexValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint},Union{Array{SamplingConstraint,1}, SamplingConstraint},Int64}",
    "page": "-",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::UncertainIndexValueDataset, \n	constraint_idxs::Union{SamplingConstraint, Vector{SamplingConstraint}}, \n	constraint_vals::Union{SamplingConstraint, Vector{SamplingConstraint}},\n	n::Int) -> Vector{Tuple{Vector{Float64}, Vector{Float64}}}\n\nResample n realizations of an uncertain index-value dataset in an element-wise manner. \n\nEnforces separate sampling constraints to the indices and to the data values. \n\nIf a single constraint is provided, that constraint will be applied to all values. If a  vector of constraints (as many as there are values) is provided, then the constraints are  applied element-wise.\n\n\n\n\n\n"
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#Different-constraints-to-indices-and-data-values-1",
    "page": "-",
    "title": "Different constraints to indices and data values",
    "category": "section",
    "text": "resample(udata::UncertainIndexValueDataset, \n	constraint_idxs::Union{SamplingConstraint, Vector{SamplingConstraint}}, \n	constraint_vals::Union{SamplingConstraint, Vector{SamplingConstraint}})resample(udata::UncertainIndexValueDataset, \n	constraint_idxs::Union{SamplingConstraint, Vector{SamplingConstraint}}, \n	constraint_vals::Union{SamplingConstraint, Vector{SamplingConstraint}},\n        n::Int)"
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#Examples-1",
    "page": "-",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#Same-constraint-for-all-uncertain-values-1",
    "page": "-",
    "title": "Same constraint for all uncertain values",
    "category": "section",
    "text": "First, let\'s define some data to work on.using UncertainData, Plots \ngr()\nr1 = [UncertainValue(Normal, rand(), rand()) for i = 1:10]\nr2 = UncertainValue(rand(10000))\nr3 = UncertainValue(Uniform, rand(10000))\nr4 = UncertainValue(Normal, -0.1, 0.5)\nr5 = UncertainValue(Gamma, 0.4, 0.8)\n\nu_values = [r1; r2; r3; r4; r5]\nu_timeindices = [UncertainValue(Normal, i, rand(Uniform(0, 1))) for i = 1:length(u_values)]\nuindices = UncertainDataset(u_timeindices);\nudata = UncertainDataset(u_values);\n\n# Now, gather uncertain indices and uncertain data values\nx = UncertainIndexValueDataset(uindices, udata)By default, the plot recipe shows the median and 33rd to 67th percentile range error bars.  Let\'s use the default plot recipe, and add some line plots with resampled realizations  of the dataset. p = plot(x) \n\nfor i = 1:100\n    s = resample(x, TruncateQuantiles(0.33, 0.67), TruncateQuantiles(0.33, 0.67))\n    scatter!(p, s[1], s[2], label = \"\", lw = 0.3, lα = 0.1, lc = :black,\n            mc = :black, ms = 0.5, mα = 0.4)\n    plot!(p, s[1], s[2], label = \"\", lw = 0.3, lα = 0.1, lc = :black,\n            mc = :black, ms = 0.5, mα = 0.4)\nend\np(Image: )This would of course also work with any other sampling constraint that is valid for your  dataset. Let\'s demonstrate with a few more examples."
},

{
    "location": "resampling/resampling_uncertain_indexvalue_datasets/#Different-constraints-for-indices-and-data-values-1",
    "page": "-",
    "title": "Different constraints for indices and data values",
    "category": "section",
    "text": "Let\'s say that we want to treat the uncertainties of the indices (time, in this case)  separately from the uncertainties of the data values. First, let\'s define a dataset to work on.using UncertainData, Plots \ngr()\nr1 = [UncertainValue(Normal, rand(), rand()) for i = 1:10]\nr2 = UncertainValue(rand(10000))\nr3 = UncertainValue(Uniform, rand(10000))\nr4 = UncertainValue(Normal, -0.1, 0.5)\nr5 = UncertainValue(Gamma, 0.4, 0.8)\n\nu_values = [r1; r2; r3; r4; r5]\nu_timeindices = [UncertainValue(Normal, i, rand(Uniform(0, 1))) for i = 1:length(u_values)]\nuindices = UncertainDataset(u_timeindices);\nudata = UncertainDataset(u_values);\n\n# Now, gather uncertain indices and uncertain data values\nx = UncertainIndexValueDataset(uindices, udata)Let\'s pretend every 2nd time index has many outliers which we don\'t trust, so we restrict  resampling of those values to the 30th to 70th percentile range. For the remaining time  indices, there are some outliers outliers, but these are concentrated at the lower end of  the distributions, so we\'ll resample by truncating the furnishing distributions below at  the 10th percentile. For the data values, we pretend that the same applies: every 2nd value has a bunch of  outliers, so we restrict the support of the distributions of those uncertain values to  1.5 standard deviations around the mean. For the remaining data values, we\'ll resample  from the the 20th to 80th percentile range.Now, define the constraints as described:# Define the constraints\nn_vals = length(x)\n\nindex_constraints = Vector{SamplingConstraint}(undef, n_vals)\nvalue_constraints = Vector{SamplingConstraint}(undef, n_vals)\n\nfor i = 1:n_vals\n    if i % 2 == 0\n        index_constraints[i] = TruncateQuantiles(0.3, 0.7)\n        value_constraints[i] = TruncateStd(1.5)\n    else\n        index_constraints[i] = TruncateLowerQuantile(0.1)\n        value_constraints[i] = TruncateQuantiles(0.2, 0.8)  \n    end\nendFinally, plot the realizations.\n# Resample a bunch of times and plot the realizations both as lines as scatter points\np = plot(xlabel = \"Index\", ylabel = \"Value\")\nfor i = 1:500\n    s = resample(x, index_constraints, value_constraints)\n    scatter!(p, s[1], s[2], label = \"\", lw = 0.3, lα = 0.1, lc = :black,\n            mc = :black, ms = 0.5, mα = 0.4)\n    plot!(p, s[1], s[2], label = \"\", lw = 0.3, lα = 0.1, lc = :black,\n            mc = :black, ms = 0.5, mα = 0.4)\nend\np(Image: )"
},

{
    "location": "resampling/sequential/resampling_uncertaindatasets_sequential/#",
    "page": "Is a particular constraint applicable?",
    "title": "Is a particular constraint applicable?",
    "category": "page",
    "text": "In addition to the  generic sampling constraints,  you may impose sequential sampling constraints when resampling an uncertain dataset. "
},

{
    "location": "resampling/sequential/resampling_uncertaindatasets_sequential/#Is-a-particular-constraint-applicable?-1",
    "page": "Is a particular constraint applicable?",
    "title": "Is a particular constraint applicable?",
    "category": "section",
    "text": "Not all sequential sampling constraints  may be applicable to your dataset. Use  these functions to check whether a  particular constraint is possible to apply to your dataset. "
},

{
    "location": "resampling/sequential/resampling_uncertaindatasets_sequential/#Syntax-1",
    "page": "Is a particular constraint applicable?",
    "title": "Syntax",
    "category": "section",
    "text": ""
},

{
    "location": "resampling/sequential/resampling_uncertaindatasets_sequential/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValueDataset,SequentialSamplingConstraint}",
    "page": "Is a particular constraint applicable?",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::AbstractUncertainValueDataset, \n    sequential_constraint::SequentialSamplingConstraint;\n    quantiles = [0.0001, 0.9999])\n\nResample a dataset by imposing a sequential sampling constraint. \n\nBefore drawing the realization, all furnishing distributions are truncated to the provided  quantiles range. This is to avoid problems in case some distributions have infinite  support.\n\n\n\n\n\n"
},

{
    "location": "resampling/sequential/resampling_uncertaindatasets_sequential/#Sequential-constraint-only-1",
    "page": "Is a particular constraint applicable?",
    "title": "Sequential constraint only",
    "category": "section",
    "text": "A dataset may be sampling imposing a sequential sampling constraint, but leaving the  furnishing distributions untouched otherwise.resample(udata::AbstractUncertainValueDataset, \n    sequential_constraint::SequentialSamplingConstraint;\n    quantiles = [0.0001, 0.9999])"
},

{
    "location": "resampling/sequential/resampling_uncertaindatasets_sequential/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint},SequentialSamplingConstraint}",
    "page": "Is a particular constraint applicable?",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::AbstractUncertainValueDataset, \n    constraint::Union{SamplingConstraint, Vector{SamplingConstraint}}, \n    sequential_constraint::SequentialSamplingConstraint;\n    quantiles = [0.0001, 0.9999])\n\nResample a dataset by first imposing regular sampling constraints on the furnishing  distributions, then applying a sequential sampling constraint. \n\nBefore drawing the realization, all furnishing distributions are truncated to the provided  quantiles range. This is to avoid problems in case some distributions have infinite  support.\n\n\n\n\n\n"
},

{
    "location": "resampling/sequential/resampling_uncertaindatasets_sequential/#Regular-constraint(s)-sequential-constraint-1",
    "page": "Is a particular constraint applicable?",
    "title": "Regular constraint(s) + sequential constraint",
    "category": "section",
    "text": "Another option is to first impose constraints on the furnishing distributions, then  applying the sequential sampling constraint.resample(udata::AbstractUncertainValueDataset, \n    constraint::Union{SamplingConstraint, Vector{SamplingConstraint}}, \n    sequential_constraint::SequentialSamplingConstraint;\n    quantiles = [0.0001, 0.9999])"
},

{
    "location": "resampling/sequential/resampling_uncertaindatasets_sequential/#List-of-sequential-resampling-schemes-1",
    "page": "Is a particular constraint applicable?",
    "title": "List of sequential resampling schemes",
    "category": "section",
    "text": "StrictlyIncreasing sequences.\nStrictlyDecreasing sequences. "
},

{
    "location": "resampling/sequential/resampling_indexvalue_sequential/#",
    "page": "Resampling syntax",
    "title": "Resampling syntax",
    "category": "page",
    "text": ""
},

{
    "location": "resampling/sequential/resampling_indexvalue_sequential/#Resampling-syntax-1",
    "page": "Resampling syntax",
    "title": "Resampling syntax",
    "category": "section",
    "text": ""
},

{
    "location": "resampling/sequential/resampling_indexvalue_sequential/#Manually-resampling-1",
    "page": "Resampling syntax",
    "title": "Manually resampling",
    "category": "section",
    "text": "Because both the indices and the values of UncertainIndexValueDatasets are  datasets themselves, you could manually resample them by accessing the indices and  values fields. This gives you full control of the resampling. There are some built-in sampling routines you could use instead if you use cases are simple."
},

{
    "location": "resampling/sequential/resampling_indexvalue_sequential/#Built-in-resampling-methods-1",
    "page": "Resampling syntax",
    "title": "Built-in resampling methods",
    "category": "section",
    "text": "Sequential constraints are always interpreted as belonging to the indices of an  uncertain index-value dataset.  Therefore, when using the built-in function to resample an index-value dataset, you can use  the same syntax as for any other  uncertain value dataset, but provide an additional sequential constraint after the regular constraints. The  order of arguments is always 1) regular constraints, then 2) the sequential constraint.The following examples illustrates the syntax. Assume udata is an  UncertainIndexValueDataset instance. Thenresample(udata, StrictlyIncreasing()) enforces the sequential constraint only to the    indices, applying no constraint(s) on the furnishing distributions of either the    indices nor the values of the dataset.\nresample(udata, TruncateQuantile(0.1, 0.9), StrictlyIncreasing()) applies the truncating    constraint both the indices and the values, then enforces the sequential constraint    on the indices. \nresample(udata, TruncateStd(2), TruncateQuantile(0.1, 0.9), StrictlyIncreasing())    applies separate truncating constraints to the indices and to the values, then    enforces the sequential constraint on the indices. \nresample(udata, NoConstraint(), TruncateQuantile(0.1, 0.9), StrictlyIncreasing()) does    the same as above, but NoConstraint() indicates that no constraints are applied to    the indices prior to drawing the sequential realization of the indices. Of course, like for uncertain value datasets, you can also apply individual constraints to  each index and each value in the dataset, by providing a vector of constraints instead  of a single constraint.Currently implemented sequential constraints: StrictlyIncreasing \nStrictlyDecreasing"
},

{
    "location": "resampling/sequential/strictly_increasing/#",
    "page": "Documentation",
    "title": "Documentation",
    "category": "page",
    "text": "The default constructor for a strictly increasing sequential sampling constraint is  StrictlyIncreasing. To specify how the sequence is sampled, provide an  OrderedSamplingAlgorithm as an argument to the constructor."
},

{
    "location": "resampling/sequential/strictly_increasing/#Compatible-ordering-algorithms-1",
    "page": "Documentation",
    "title": "Compatible ordering algorithms",
    "category": "section",
    "text": "StrictlyIncreasing(StartToEnd()) (the default)"
},

{
    "location": "resampling/sequential/strictly_increasing/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint},StrictlyIncreasing{OrderedSamplingAlgorithm}}",
    "page": "Documentation",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::AbstractUncertainValueDataset, \n    constraint::Union{SamplingConstraint, Vector{SamplingConstraint}},\n    sequential_constraint::StrictlyIncreasing{OrderedSamplingAlgorithm};\n    quantiles = [0.0001, 0.9999])\n\nDraw a sequence of values strictly increasing in magnitude from the dataset, sampling  each of the furnishing distributions once each, after first truncating the supports  of the values in the dataset using the provided constraints.\n\nArguments:\n\nudata: An uncertain dataset.\nconstraint: Sampling constraint(s) to apply to each of the values in the dataset    before drawing the sequence of increasing values.\nsequential_constraint: An instance of a StrictlyIncreasing sequential    sampling constraint. For example, StrictlyIncreasing(StartToEnd()) indicates    that a strictly increasing sequence should be created in one go from start to    finish (as opposed to chunking the data set first, then gluing partial sequences    together afterwards).\nquantiles: A two-element vector representing a quantile range which is used    to truncate the supports values in the dataset before drawing the sequence of    increasing values. This deals with distributions with infinite support.\n\n\n\n\n\n"
},

{
    "location": "resampling/sequential/strictly_increasing/#UncertainData.Resampling.resample-Union{Tuple{T}, Tuple{DT}, Tuple{DT,StrictlyIncreasing{T}}} where T<:StartToEnd where DT<:AbstractUncertainValueDataset",
    "page": "Documentation",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::DT, sequential_constraint::StrictlyIncreasing{T};\n    quantiles = [0.0001, 0.9999]) where {DT <: AbstractUncertainValueDataset, T <: StartToEnd}\n\nElement-wise resample the uncertain values in the dataset such that each preceding value  is strictly less in magnitude than the next one. \n\nArguments:\n\nudata: An uncertain dataset.\nsequential_constraint: An instance of a StrictlyIncreasing sequential    sampling constraint. \nordered_sampling_alg: An instance of a StartToEnd ordered    sampling constraint, indicating that the sequence of increasing values should    be created in one go from start to finish (as opposed to chunking the data set    first, then gluing partial sequences together afterwards).\nquantiles: A two-element vector representing a quantile range which is used    to truncate the supports values in the dataset before drawing the sequence of    increasing values. This deals with distributions with infinite support.\n\n\n\n\n\n"
},

{
    "location": "resampling/sequential/strictly_increasing/#Documentation-1",
    "page": "Documentation",
    "title": "Documentation",
    "category": "section",
    "text": "resample(udata::AbstractUncertainValueDataset, \n        constraint::Union{SamplingConstraint, Vector{SamplingConstraint}},\n        sequential_constraint::StrictlyIncreasing{OrderedSamplingAlgorithm};\n        quantiles = [0.0001, 0.9999])resample(udata::DT, sequential_constraint::StrictlyIncreasing{T};\n        quantiles = [0.0001, 0.9999]) where {DT <: AbstractUncertainValueDataset, T <: StartToEnd}"
},

{
    "location": "resampling/sequential/strictly_increasing/#Examples-1",
    "page": "Documentation",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "resampling/sequential/strictly_increasing/#Example-1:-strictly-increasing-sequences-1",
    "page": "Documentation",
    "title": "Example 1: strictly increasing sequences",
    "category": "section",
    "text": "Let\'s compare how the realizations look for the situation where no sequential sampling constraint is imposed versus enforcing strictly increasing sequences.We start by creating some uncertain data with increasing magnitude and zero overlap between  values, so we\'re guaranteed that a strictly increasing sequence through the dataset exists.using UncertainData, Plots \n\n\nN = 10\nu_timeindices = [UncertainValue(Normal, i, rand(Uniform(0.1, 2))) for i = 1:N]\nu = UncertainDataset(u_timeindices)\n\np_increasing = plot(u, [0.0001, 0.9999], legend = false,\n    xlabel = \"index\", ylabel = \"value\")\np_regular = plot(u, [0.0001, 0.9999], legend = false,\n    ylabel = \"value\", xaxis = false)\n\nfor i = 1:1000\n    plot!(p_increasing, resample(u, StrictlyIncreasing()), lw = 0.2, lc = :black, lα = 0.1)\n    plot!(p_regular, resample(u), lw = 0.2, lc = :black, lα = 0.2)\nend \n\nplot(p_regular, p_increasing, layout = (2, 1), link = :x, size = (400, 500))(Image: )Values of the realizations where strictly increasing sequences are imposed clearly are  limited by the next values in the dataset. For the regular sampling, however, realizations  jump wildly, with both positive and negative first differences."
},

{
    "location": "resampling/sequential/strictly_increasing/#Example-2:-regular-constraints-strictly-increasing-sequences-1",
    "page": "Documentation",
    "title": "Example 2: regular constraints + strictly increasing sequences",
    "category": "section",
    "text": "You may also combine regular sampling constraints with sequential resampling schemes.  Here\'s one example. We use the same data as in example 1 above, but when drawing increasing  sequences, we only resample from within one standard deviation around the mean.p_increasing = plot(u, [0.0001, 0.9999], legend = false,\n    xlabel = \"index\", ylabel = \"value\")\np_regular = plot(u, [0.0001, 0.9999], legend = false,\n    ylabel = \"value\", xaxis = false)\n\nfor i = 1:1000\n    plot!(p_increasing, resample(u, TruncateStd(1), StrictlyIncreasing()), lw = 0.2, \n        lc = :black, lα = 0.1)\n    plot!(p_regular, resample(u), lw = 0.2, lc = :black, lα = 0.2)\nend \n\nplot(p_regular, p_increasing, layout = (2, 1), link = :x, size = (400, 500))(Image: )"
},

{
    "location": "resampling/sequential/strictly_decreasing/#",
    "page": "Documentation",
    "title": "Documentation",
    "category": "page",
    "text": "The default constructor for a strictly decreasing sequential sampling constraint is  StrictlyDecreasing. To specify how the sequence is sampled, provide an  OrderedSamplingAlgorithm as an argument to the constructor."
},

{
    "location": "resampling/sequential/strictly_decreasing/#UncertainData.Resampling.resample-Tuple{AbstractUncertainValueDataset,Union{Array{SamplingConstraint,1}, SamplingConstraint},StrictlyDecreasing{OrderedSamplingAlgorithm}}",
    "page": "Documentation",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::AbstractUncertainValueDataset, \n    constraint::Union{SamplingConstraint, Vector{SamplingConstraint}},\n    sequential_constraint::StrictlyDecreasing{OrderedSamplingAlgorithm};\n    quantiles = [0.0001, 0.9999])\n\nDraw a sequence of values strictly decreasing in magnitude from the dataset, sampling  each of the furnishing distributions once each, after first truncating the supports  of the values in the dataset using the provided constraints.\n\nArguments:\n\nudata: An uncertain dataset.\nconstraint: Sampling constraint(s) to apply to each of the values in the dataset \n\nbefore drawing the sequence of decreasing values.\n\nsequential_constraint: An instance of a StrictlyDecreasing sequential \n\nsampling constraint. For example, StrictlyDecreasing(StartToEnd()) indicates  that a strictly decreasing sequence should be created in one go from start to  finish (as opposed to chunking the data set first, then gluing partial sequences  together afterwards).\n\nquantiles: A two-element vector representing a quantile range which is used \n\nto truncate the supports values in the dataset before drawing the sequence of  decreasing values. This deals with distributions with infinite support.\n\n\n\n\n\n"
},

{
    "location": "resampling/sequential/strictly_decreasing/#UncertainData.Resampling.resample-Union{Tuple{T}, Tuple{DT}, Tuple{DT,StrictlyDecreasing{T}}} where T<:StartToEnd where DT<:AbstractUncertainValueDataset",
    "page": "Documentation",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::DT, sequential_constraint::StrictlyDecreasing{T};\n    quantiles = [0.0001, 0.9999]) where {DT <: AbstractUncertainValueDataset, T <: StartToEnd}\n\nElement-wise resample the uncertain values in the dataset such that each preceding value  is strictly larger in magnitude than the next one. \n\nArguments:\n\nudata: An uncertain dataset.\nsequential_constraint: An instance of a StrictlyDecreasing sequential    sampling constraint. \nordered_sampling_alg: An instance of a StartToEnd ordered    sampling constraint, indicating that the sequence of decreasing values should    be created in one go from start to finish (as opposed to chunking the data set    first, then gluing partial sequences together afterwards).\nquantiles: A two-element vector representing a quantile range which is used    to truncate the supports values in the dataset before drawing the sequence of    decreasing values. This deals with distributions with infinite support.\n\n\n\n\n\n"
},

{
    "location": "resampling/sequential/strictly_decreasing/#Documentation-1",
    "page": "Documentation",
    "title": "Documentation",
    "category": "section",
    "text": "resample(udata::AbstractUncertainValueDataset, \n        constraint::Union{SamplingConstraint, Vector{SamplingConstraint}},\n        sequential_constraint::StrictlyDecreasing{OrderedSamplingAlgorithm};\n        quantiles = [0.0001, 0.9999])resample(udata::DT, sequential_constraint::StrictlyDecreasing{T};\n        quantiles = [0.0001, 0.9999]) where {DT <: AbstractUncertainValueDataset, T <: StartToEnd}"
},

{
    "location": "resampling/sequential/strictly_decreasing/#Compatible-ordering-algorithms-1",
    "page": "Documentation",
    "title": "Compatible ordering algorithms",
    "category": "section",
    "text": "StrictlyDecreasing(StartToEnd()) (the default)"
},

{
    "location": "resampling/sequential/strictly_decreasing/#Examples-1",
    "page": "Documentation",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "resampling/sequential/strictly_decreasing/#Example:-Strictly-decreasing-sequences-regular-constraints-1",
    "page": "Documentation",
    "title": "Example: Strictly decreasing sequences + regular constraints",
    "category": "section",
    "text": "We\'ll start by creating some uncertain data with decreasing magnitude and just minor  overlap between values, so we\'re reasonably sure we can create strictly decreasing sequences.using UncertainData, Plots \nN = 20\nu_timeindices = [UncertainValue(Normal, i, rand(Uniform(0.1, ))) for i = N:-1:1]\nu = UncertainDataset(u_timeindices)Now, we\'ll create three different plots. In all plots, we plot the 0.00001th to 0.99999th  (black) and 33rd to 67th (red) percentile range error bars. For the first plot, we\'ll  resample the data without any constraints. For the second plot, we\'ll resample without  imposing any constraints on the furnishing distirbution, but enforcing strictly decreasing sequences when drawing realizations. For the third plot, we\'ll first truncate all  furnishing distributions to their 33rd to 67th percentile range, then draw realizations  whose consecutively value are strictly decreasing in magnitude.# Plot the data with 0.00001th to 0.99999th error bars in both directions\nqs = [0.0001, 0.9999]\np_noconstraint = plot(u, qs, legend = false, xaxis = false,\n    title = \"NoConstraint()\") \np_decreasing = plot(u, qs, legend = false, xaxis = false, \n    title = \"StrictlyDecreasing()\")\np_decreasing_constraint = plot(u, qs, legend = false, xaxis = false,\n    title = \"TruncateQuantiles(0.33, 0.67) + StriclyDecreasing()\")\n\n# Add 33rd to 67th percentile range error bars to all plots. \nplot!(p_noconstraint, u, [0.33, 0.67], msc = :red)\nplot!(p_decreasing, u, [0.33, 0.67], msc = :red)\nplot!(p_decreasing_constraint, u, [0.33, 0.67], msc = :red)\n\nfor i = 1:300\n    plot!(p_noconstraint, resample(u, NoConstraint()), lw = 0.2, lc = :black, lα = 0.2)\n    plot!(p_decreasing, resample(u, StrictlyDecreasing()), lw = 0.2, lc = :black, lα = 0.1)\n    plot!(p_decreasing_constraint, resample(u, TruncateQuantiles(0.33, 0.67), StrictlyDecreasing()), lw = 0.2, lc = :black, lα = 0.1)\nend \n\nplot(p_noconstraint, p_decreasing, p_decreasing_constraint, link = :x,\n    layout = (3, 1), size = (300, 600), titlefont = font(8))(Image: )"
},

{
    "location": "resampling/interpolation/interpolation/#",
    "page": "Supported interpolations",
    "title": "Supported interpolations",
    "category": "page",
    "text": "Interpolations.jl is used for basic  interpolation. It supports many different types of interpolation when data are evenly  spaced, and gridded interpolation for unevenly spaced data. "
},

{
    "location": "resampling/interpolation/interpolation/#Supported-interpolations-1",
    "page": "Supported interpolations",
    "title": "Supported interpolations",
    "category": "section",
    "text": "For now, UncertainData implements linear interpolation for uncertain  dataset realizations. "
},

{
    "location": "resampling/interpolation/interpolation/#Uncertain-index-value-datasets-1",
    "page": "Supported interpolations",
    "title": "Uncertain index-value datasets",
    "category": "section",
    "text": "Datasets with uncertain indices (hence, the indices are almost always unevenly spaced), can only be interpolated using linear interpolation."
},

{
    "location": "resampling/interpolation/gridded/#",
    "page": "Grids",
    "title": "Grids",
    "category": "page",
    "text": ""
},

{
    "location": "resampling/interpolation/gridded/#UncertainData.InterpolationAndGrids.RegularGrid",
    "page": "Grids",
    "title": "UncertainData.InterpolationAndGrids.RegularGrid",
    "category": "type",
    "text": "RegularGrid\n\nFields\n\nmin: The minimum value of the grid.\nmax: The maximum value of the grid. \nstep: The interval size. \nextrapolation_bc: The extrapolation condition. Can also be NaN.\n\n\n\n\n\n"
},

{
    "location": "resampling/interpolation/gridded/#Grids-1",
    "page": "Grids",
    "title": "Grids",
    "category": "section",
    "text": "RegularGrid"
},

{
    "location": "resampling/interpolation/gridded/#Syntax-1",
    "page": "Grids",
    "title": "Syntax",
    "category": "section",
    "text": ""
},

{
    "location": "resampling/interpolation/gridded/#Uncertain-index-value-datasets-1",
    "page": "Grids",
    "title": "Uncertain index-value datasets",
    "category": "section",
    "text": "The following methods are available for the interpolating of a realization of an uncertain index-value dataset: "
},

{
    "location": "resampling/interpolation/gridded/#UncertainData.Resampling.resample-Tuple{UncertainIndexValueDataset,RegularGrid}",
    "page": "Grids",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::UncertainIndexValueDataset, \n    grid_indices::InterpolationGrid;\n    trunc::TruncateQuantiles = TruncateQuantiles(0.001, 0.999))\n\nDraw a realization of udata, then interpolate the data values to grid_indices. \n\nTo avoid very large spans of interpolation, the uncertain indices are truncated to some  large quantile range. Values are not truncated. \n\n\n\n\n\n"
},

{
    "location": "resampling/interpolation/gridded/#No-constraints-1",
    "page": "Grids",
    "title": "No constraints",
    "category": "section",
    "text": "resample(udata::UncertainIndexValueDataset, \n        grid_indices::RegularGrid;\n        trunc::TruncateQuantiles = TruncateQuantiles(0.001, 0.999))"
},

{
    "location": "resampling/interpolation/gridded/#UncertainData.Resampling.resample-Tuple{UncertainIndexValueDataset,SequentialSamplingConstraint,RegularGrid}",
    "page": "Grids",
    "title": "UncertainData.Resampling.resample",
    "category": "method",
    "text": "resample(udata::UncertainIndexValueDataset, \n    sequential_constraint::SequentialSamplingConstraint,\n    grid_indices::InterpolationGrid;\n    trunc::TruncateQuantiles = TruncateQuantiles(0.001, 0.999))\n\nDraw a realization of udata, enforcing a sequential_constraint on the indices. Then, interpolate the values of the realization to the provided grid of indices (grid_indices). \n\nTo avoid very large spans of interpolation, the uncertain indices are truncated to some  large quantile range. Values are not truncated.  \n\n\n\n\n\n"
},

{
    "location": "resampling/interpolation/gridded/#Sequential-constraints-1",
    "page": "Grids",
    "title": "Sequential constraints",
    "category": "section",
    "text": "resample(udata::UncertainIndexValueDataset, \n        sequential_constraint::SequentialSamplingConstraint,\n        grid_indices::RegularGrid;\n        trunc::TruncateQuantiles = TruncateQuantiles(0.001, 0.999))"
},

{
    "location": "mathematics/elementary_operations/#",
    "page": "Elementary mathematical operations",
    "title": "Elementary mathematical operations",
    "category": "page",
    "text": ""
},

{
    "location": "mathematics/elementary_operations/#Elementary-mathematical-operations-1",
    "page": "Elementary mathematical operations",
    "title": "Elementary mathematical operations",
    "category": "section",
    "text": "Elementary mathematical operations (+, -, *, and /) between arbitrary  uncertain values of different types and scalars are supported. "
},

{
    "location": "mathematics/elementary_operations/#Syntax-1",
    "page": "Elementary mathematical operations",
    "title": "Syntax",
    "category": "section",
    "text": "Because elementary operations should work on arbitrary uncertain values, a resampling  approach is used to perform the mathematical operations. All mathematical  operations thus return a vector containing the results of repeated element-wise operations  (where each element is a resampled draw from the furnishing distribution(s) of the  uncertain value(s)). The default number of realizations is set to 10000. This allows calling uval1 + uval2  for two uncertain values uval1 and uval2. If you need to tune the number of resample  draws to n, use the +(uval1, uval2, n) syntax. "
},

{
    "location": "mathematics/elementary_operations/#Future-improvements-1",
    "page": "Elementary mathematical operations",
    "title": "Future improvements",
    "category": "section",
    "text": "In the future, elementary operations might be improved for certain combinations of uncertain  values where exact expressions for error propagation are now, for example using the  machinery in Measurements.jl for normally distributed values."
},

{
    "location": "mathematics/elementary_operations/#Supported-operations-1",
    "page": "Elementary mathematical operations",
    "title": "Supported operations",
    "category": "section",
    "text": ""
},

{
    "location": "mathematics/elementary_operations/#Base.:+-Tuple{AbstractUncertainValue,AbstractUncertainValue}",
    "page": "Elementary mathematical operations",
    "title": "Base.:+",
    "category": "method",
    "text": "Base.:+(a::AbstractUncertainValue, b::AbstractUncertainValue) -> UncertainValue\n\nAddition operator for pairs of uncertain values. \n\nComputes the element-wise sum between for a default of n = 10000 realizations of a and  b, then returns an uncertain value based on a kernel density estimate to the distribution  of the element-wise sums.\n\nUse the +(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:+-Tuple{AbstractUncertainValue,AbstractUncertainValue,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:+",
    "category": "method",
    "text": "Base.:+(a::AbstractUncertainValue, b::AbstractUncertainValue, n::Int) -> UncertainValue\n\nAddition operator for pairs of uncertain values. \n\nComputes the element-wise sum between a and b for n realizations of a and b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise sums.\n\nCall this function using the +(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:+-Tuple{Real,AbstractUncertainValue}",
    "page": "Elementary mathematical operations",
    "title": "Base.:+",
    "category": "method",
    "text": "Base.:+(a::Real, b::AbstractUncertainValue) -> UncertainValue\n\nAddition operator for between scalars and uncertain values. \n\nComputes the element-wise sum between a and b for a default of n = 10000 realizations of b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise sums.\n\nUse the +(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:+-Tuple{Real,AbstractUncertainValue,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:+",
    "category": "method",
    "text": "Base.:+(a::Real, b::AbstractUncertainValue, n::Int) -> UncertainValue\n\nAddition operator for scalar-uncertain value pairs. \n\nComputes the element-wise sum between a and b for n realizations of b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise sums.\n\nCall this function using the +(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:+-Tuple{AbstractUncertainValue,Real}",
    "page": "Elementary mathematical operations",
    "title": "Base.:+",
    "category": "method",
    "text": "Base.:+(a::AbstractUncertainValue, b::Real) -> UncertainValue\n\nAddition operator for between uncertain values and scalars. \n\nComputes the element-wise sum between a and b for a default of n = 10000 realizations of a, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise sums.\n\nUse the +(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:+-Tuple{AbstractUncertainValue,Real,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:+",
    "category": "method",
    "text": "Base.:+(a::AbstractUncertainValue, b::Real, n::Int) -> UncertainValue\n\nAddition operator for scalar-uncertain value pairs. \n\nComputes the element-wise sum between a and b for n realizations of a, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise sums.\n\nCall this function using the +(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Addition-1",
    "page": "Elementary mathematical operations",
    "title": "Addition",
    "category": "section",
    "text": "Base.:+(a::AbstractUncertainValue, b::AbstractUncertainValue)\nBase.:+(a::AbstractUncertainValue, b::AbstractUncertainValue, n::Int)Base.:+(a::Real, b::AbstractUncertainValue)\nBase.:+(a::Real, b::AbstractUncertainValue, n::Int)Base.:+(a::AbstractUncertainValue, b::Real)\nBase.:+(a::AbstractUncertainValue, b::Real, n::Int)"
},

{
    "location": "mathematics/elementary_operations/#Base.:--Tuple{AbstractUncertainValue,AbstractUncertainValue}",
    "page": "Elementary mathematical operations",
    "title": "Base.:-",
    "category": "method",
    "text": "Base.:-(a::AbstractUncertainValue, b::AbstractUncertainValue) -> UncertainValue\n\nSubtraction operator for pairs of uncertain values. \n\nComputes the element-wise differences between for a default of n = 30000 realizations of a and  b, then returns an uncertain value based on a kernel density estimate to the distribution  of the element-wise differences.\n\nUse the -(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:--Tuple{AbstractUncertainValue,AbstractUncertainValue,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:-",
    "category": "method",
    "text": "Base.:-(a::AbstractUncertainValue, b::AbstractUncertainValue, n::Int) -> UncertainValue\n\nSubtraction operator for pairs of uncertain values. \n\nComputes the element-wise differences between a and b for n realizations of a and b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise differences.\n\nCall this function using the -(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:--Tuple{Real,AbstractUncertainValue}",
    "page": "Elementary mathematical operations",
    "title": "Base.:-",
    "category": "method",
    "text": "Base.:-(a::Real, b::AbstractUncertainValue) -> UncertainValue\n\nSubtraction operator for between scalars and uncertain values. \n\nComputes the element-wise differences between a and b for a default of n = 30000 realizations of b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise differences.\n\nUse the -(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:--Tuple{Real,AbstractUncertainValue,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:-",
    "category": "method",
    "text": "Base.:-(a::Real, b::AbstractUncertainValue, n::Int) -> UncertainValue\n\nSubtraction operator for scalar-uncertain value pairs. \n\nComputes the element-wise differences between a and b for n realizations of b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise differences.\n\nCall this function using the -(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:--Tuple{AbstractUncertainValue,Real}",
    "page": "Elementary mathematical operations",
    "title": "Base.:-",
    "category": "method",
    "text": "Base.:-(a::AbstractUncertainValue, b::Real) -> UncertainValue\n\nSubtraction operator for between uncertain values and scalars. \n\nComputes the element-wise differences between a and b for a default of n = 30000 realizations of a, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise differences.\n\nUse the -(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:--Tuple{AbstractUncertainValue,Real,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:-",
    "category": "method",
    "text": "Base.:-(a::AbstractUncertainValue, b::Real, n::Int) -> UncertainValue\n\nSubtraction operator for scalar-uncertain value pairs. \n\nComputes the element-wise differences between a and b for n realizations of a, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise differences.\n\nCall this function using the -(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Subtraction-1",
    "page": "Elementary mathematical operations",
    "title": "Subtraction",
    "category": "section",
    "text": "Base.:-(a::AbstractUncertainValue, b::AbstractUncertainValue)\nBase.:-(a::AbstractUncertainValue, b::AbstractUncertainValue, n::Int)Base.:-(a::Real, b::AbstractUncertainValue)\nBase.:-(a::Real, b::AbstractUncertainValue, n::Int)Base.:-(a::AbstractUncertainValue, b::Real)\nBase.:-(a::AbstractUncertainValue, b::Real, n::Int)"
},

{
    "location": "mathematics/elementary_operations/#Base.:*-Tuple{AbstractUncertainValue,AbstractUncertainValue}",
    "page": "Elementary mathematical operations",
    "title": "Base.:*",
    "category": "method",
    "text": "Base.:*(a::AbstractUncertainValue, b::AbstractUncertainValue) -> UncertainValue\n\nMultiplication operator for pairs of uncertain values. \n\nComputes the element-wise products between for a default of n = 10000 realizations of a and  b, then returns an uncertain value based on a kernel density estimate to the distribution  of the element-wise products.\n\nUse the *(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:*-Tuple{AbstractUncertainValue,AbstractUncertainValue,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:*",
    "category": "method",
    "text": "Base.:*(a::AbstractUncertainValue, b::AbstractUncertainValue, n::Int) -> UncertainValue\n\nMultiplication operator for pairs of uncertain values. \n\nComputes the element-wise products between a and b for n realizations of a and b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise products.\n\nCall this function using the *(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:*-Tuple{Real,AbstractUncertainValue}",
    "page": "Elementary mathematical operations",
    "title": "Base.:*",
    "category": "method",
    "text": "Base.:*(a::Real, b::AbstractUncertainValue) -> UncertainValue\n\nMultiplication operator for between scalars and uncertain values. \n\nComputes the element-wise products between a and b for a default of n = 10000 realizations of b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise products.\n\nUse the *(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:*-Tuple{Real,AbstractUncertainValue,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:*",
    "category": "method",
    "text": "Base.:*(a::Real, b::AbstractUncertainValue, n::Int) -> UncertainValue\n\nMultiplication operator for scalar-uncertain value pairs. \n\nComputes the element-wise products between a and b for n realizations of b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise products.\n\nCall this function using the *(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:*-Tuple{AbstractUncertainValue,Real}",
    "page": "Elementary mathematical operations",
    "title": "Base.:*",
    "category": "method",
    "text": "Base.:*(a::AbstractUncertainValue, b::Real) -> UncertainValue\n\nMultiplication operator for between uncertain values and scalars. \n\nComputes the element-wise products between a and b for a default of n = 10000 realizations of a, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise products.\n\nUse the *(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:*-Tuple{AbstractUncertainValue,Real,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:*",
    "category": "method",
    "text": "Base.:*(a::AbstractUncertainValue, b::Real, n::Int) -> UncertainValue\n\nMultiplication operator for scalar-uncertain value pairs. \n\nComputes the element-wise products between a and b for n realizations of a, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise products.\n\nCall this function using the *(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Multiplication-1",
    "page": "Elementary mathematical operations",
    "title": "Multiplication",
    "category": "section",
    "text": "Base.:*(a::AbstractUncertainValue, b::AbstractUncertainValue)\nBase.:*(a::AbstractUncertainValue, b::AbstractUncertainValue, n::Int)Base.:*(a::Real, b::AbstractUncertainValue)\nBase.:*(a::Real, b::AbstractUncertainValue, n::Int)Base.:*(a::AbstractUncertainValue, b::Real)\nBase.:*(a::AbstractUncertainValue, b::Real, n::Int)"
},

{
    "location": "mathematics/elementary_operations/#Base.:/-Tuple{AbstractUncertainValue,AbstractUncertainValue}",
    "page": "Elementary mathematical operations",
    "title": "Base.:/",
    "category": "method",
    "text": "Base.:/(a::AbstractUncertainValue, b::AbstractUncertainValue) -> UncertainValue\n\nDivision operator for pairs of uncertain values. \n\nComputes the element-wise quotients between for a default of n = 10000 realizations of a and  b, then returns an uncertain value based on a kernel density estimate to the distribution  of the element-wise quotients.\n\nUse the /(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:/-Tuple{AbstractUncertainValue,AbstractUncertainValue,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:/",
    "category": "method",
    "text": "Base.:/(a::AbstractUncertainValue, b::AbstractUncertainValue, n::Int) -> UncertainValue\n\nDivision operator for pairs of uncertain values. \n\nComputes the element-wise quotients between a and b for n realizations of a and b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise quotients.\n\nCall this function using the /(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:/-Tuple{Real,AbstractUncertainValue}",
    "page": "Elementary mathematical operations",
    "title": "Base.:/",
    "category": "method",
    "text": "Base.:/(a::Real, b::AbstractUncertainValue) -> UncertainValue\n\nDivision operator for between scalars and uncertain values. \n\nComputes the element-wise quotients between a and b for a default of n = 10000 realizations of b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise quotients.\n\nUse the /(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:/-Tuple{Real,AbstractUncertainValue,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:/",
    "category": "method",
    "text": "Base.:/(a::Real, b::AbstractUncertainValue, n::Int) -> UncertainValue\n\nDivision operator for scalar-uncertain value pairs. \n\nComputes the element-wise quotients between a and b for n realizations of b, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise quotients.\n\nCall this function using the /(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:/-Tuple{AbstractUncertainValue,Real}",
    "page": "Elementary mathematical operations",
    "title": "Base.:/",
    "category": "method",
    "text": "Base.:/(a::AbstractUncertainValue, b::Real) -> UncertainValue\n\nDivision operator for between uncertain values and scalars. \n\nComputes the element-wise quotients between a and b for a default of n = 10000 realizations of a, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise quotients.\n\nUse the /(a, b, n) syntax to tune the number (n) of draws.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Base.:/-Tuple{AbstractUncertainValue,Real,Int64}",
    "page": "Elementary mathematical operations",
    "title": "Base.:/",
    "category": "method",
    "text": "Base.:/(a::AbstractUncertainValue, b::Real, n::Int) -> UncertainValue\n\nDivision operator for scalar-uncertain value pairs. \n\nComputes the element-wise quotients between a and b for n realizations of a, then returns an uncertain value based on a kernel density estimate to the  distribution of the element-wise quotients.\n\nCall this function using the /(a, b, n) syntax.\n\n\n\n\n\n"
},

{
    "location": "mathematics/elementary_operations/#Division-1",
    "page": "Elementary mathematical operations",
    "title": "Division",
    "category": "section",
    "text": "Base.:/(a::AbstractUncertainValue, b::AbstractUncertainValue)\nBase.:/(a::AbstractUncertainValue, b::AbstractUncertainValue, n::Int)Base.:/(a::Real, b::AbstractUncertainValue)\nBase.:/(a::Real, b::AbstractUncertainValue, n::Int)Base.:/(a::AbstractUncertainValue, b::Real)\nBase.:/(a::AbstractUncertainValue, b::Real, n::Int)"
},

{
    "location": "mathematics/elementary_operations/#Special-cases-1",
    "page": "Elementary mathematical operations",
    "title": "Special cases",
    "category": "section",
    "text": ""
},

{
    "location": "mathematics/elementary_operations/#CertainValues-1",
    "page": "Elementary mathematical operations",
    "title": "CertainValues",
    "category": "section",
    "text": "Performing elementary operations with CertainValues behaves as for scalars. "
},

{
    "location": "mathematics/trig_functions/#",
    "page": "Trigonometric functions",
    "title": "Trigonometric functions",
    "category": "page",
    "text": ""
},

{
    "location": "mathematics/trig_functions/#Trigonometric-functions-1",
    "page": "Trigonometric functions",
    "title": "Trigonometric functions",
    "category": "section",
    "text": "Trigonometric functions are supported for arbitrary uncertain values of different types. Like for elementary operations, a resampling approach is  used for the computations."
},

{
    "location": "mathematics/trig_functions/#Syntax-1",
    "page": "Trigonometric functions",
    "title": "Syntax",
    "category": "section",
    "text": "Because elementary operations should work on arbitrary uncertain values, a resampling  approach is used to perform the mathematical operations. All mathematical  operations thus return a vector containing the results of repeated element-wise operations  (where each element is a resampled draw from the furnishing distribution(s) of the  uncertain value(s)). Each trigonometric function comes in two versions. The first syntax allows skipping providing the number of draws, which is set to 10000 by default    (e.g. cos(x::AbstractUncertainValue; n::Int = 10000). \nUsing the second syntax, you have to explicitly provide the number of draws (e.g. cos(x::AbstractUncertainValue, n::Int))."
},

{
    "location": "mathematics/trig_functions/#Possible-errors-1",
    "page": "Trigonometric functions",
    "title": "Possible errors",
    "category": "section",
    "text": "Beware: if the support of the funishing distribution for an uncertain value lies partly  outside the domain of the function, you risk encountering errors."
},

{
    "location": "mathematics/trig_functions/#Supported-trigonometric-functions-1",
    "page": "Trigonometric functions",
    "title": "Supported trigonometric functions",
    "category": "section",
    "text": ""
},

{
    "location": "mathematics/trig_functions/#Base.sin-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.sin",
    "category": "method",
    "text": "Base.sin(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the sine of the uncertain value x, where x is in radians. Computes the  element-wise sine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.sin-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.sin",
    "category": "method",
    "text": "Base.sin(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the sine of the uncertain value x, where x is in radians. Computes the  element-wise sine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sind-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sind",
    "category": "method",
    "text": "Base.sind(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the sine of the uncertain value x, where x is in degrees. Computes the  element-wise sine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sind-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sind",
    "category": "method",
    "text": "Base.sind(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the sine of the uncertain value x, where x is in degrees. Computes the  element-wise sine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Sine-1",
    "page": "Trigonometric functions",
    "title": "Sine",
    "category": "section",
    "text": "Base.sin(x::AbstractUncertainValue; n::Int)\nBase.sin(x::AbstractUncertainValue, n::Int)Base.sind(x::AbstractUncertainValue; n::Int)\nBase.sind(x::AbstractUncertainValue, n::Int)Base.sinh(x::AbstractUncertainValue; n::Int)\nBase.sinh(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.cos-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.cos",
    "category": "method",
    "text": "Base.cos(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the cosine of the uncertain value x, where x is in radians. Computes the  element-wise cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.cos-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.cos",
    "category": "method",
    "text": "Base.cos(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the cosine of the uncertain value x, where x is in radians. Computes the  element-wise cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cosd-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cosd",
    "category": "method",
    "text": "Base.cos(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the cosine of the uncertain value x, where x is in degrees. Computes the  element-wise cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cosd-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cosd",
    "category": "method",
    "text": "Base.cos(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the cosine of the uncertain value x, where x is in degrees. Computes the  element-wise cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.cosh-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.cosh",
    "category": "method",
    "text": "Base.cos(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic cosine of the uncertain value x. Computes the element-wise hyperbolic cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.cosh-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.cosh",
    "category": "method",
    "text": "Base.cos(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic cosine of the uncertain value x. Computes the element-wise hyperbolic cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Cosine-1",
    "page": "Trigonometric functions",
    "title": "Cosine",
    "category": "section",
    "text": "Base.cos(x::AbstractUncertainValue; n::Int)\nBase.cos(x::AbstractUncertainValue, n::Int)Base.cosd(x::AbstractUncertainValue; n::Int)\nBase.cosd(x::AbstractUncertainValue, n::Int)Base.cosh(x::AbstractUncertainValue; n::Int)\nBase.cosh(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.atan-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.atan",
    "category": "method",
    "text": "Base.atan(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse tangent of the uncertain value x, where x is in radians.  Computes the element-wise inverse tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.atan-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.atan",
    "category": "method",
    "text": "Base.atan(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse tangent of the uncertain value x, where x is in radians.  Computes the element-wise inverse tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.atand-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.atand",
    "category": "method",
    "text": "Base.atand(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse tangent of the uncertain value x, where x is in degrees.  Computes the element-wise inverse tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.atand-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.atand",
    "category": "method",
    "text": "Base.atand(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse tangent of the uncertain value x, where x is in degrees.  Computes the element-wise inverse tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.atanh-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.atanh",
    "category": "method",
    "text": "Base.atanh(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hypoerbolic tangent of the uncertain value x. Computes the element-wise inverse hypoerbolic tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.atanh-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.atanh",
    "category": "method",
    "text": "Base.atanh(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hypoerbolic tangent of the uncertain value x. Computes the element-wise inverse hypoerbolic tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Tangent-1",
    "page": "Trigonometric functions",
    "title": "Tangent",
    "category": "section",
    "text": "Base.atan(x::AbstractUncertainValue; n::Int)\nBase.atan(x::AbstractUncertainValue, n::Int)Base.atand(x::AbstractUncertainValue; n::Int)\nBase.atand(x::AbstractUncertainValue, n::Int)Base.atanh(x::AbstractUncertainValue; n::Int)\nBase.atanh(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Reciprocal-trig-functions-1",
    "page": "Trigonometric functions",
    "title": "Reciprocal trig functions",
    "category": "section",
    "text": ""
},

{
    "location": "mathematics/trig_functions/#Base.Math.csc-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.csc",
    "category": "method",
    "text": "Base.csc(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the cosecant of the uncertain value x, where x is in radians. Computes the  element-wise cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.csc-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.csc",
    "category": "method",
    "text": "Base.csc(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the cosecant of the uncertain value x, where x is in radians. Computes the  element-wise cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cscd-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cscd",
    "category": "method",
    "text": "Base.cscd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the cosecant of the uncertain value x, where x is in degrees. Computes the  element-wise cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cscd-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cscd",
    "category": "method",
    "text": "Base.cscd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the cosecant of the uncertain value x, where x is in degrees. Computes the  element-wise cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.csch-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.csch",
    "category": "method",
    "text": "Base.cscd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic cosecant of the uncertain value x, where x is in degrees.  Computes the element-wise hyperbolic cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.csch-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.csch",
    "category": "method",
    "text": "Base.cscd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic cosecant of the uncertain value x, where x is in degrees.  Computes the element-wise hyperbolic cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Cosecant-1",
    "page": "Trigonometric functions",
    "title": "Cosecant",
    "category": "section",
    "text": "Base.csc(x::AbstractUncertainValue; n::Int)\nBase.csc(x::AbstractUncertainValue, n::Int)Base.cscd(x::AbstractUncertainValue; n::Int)\nBase.cscd(x::AbstractUncertainValue, n::Int)Base.csch(x::AbstractUncertainValue; n::Int)\nBase.csch(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sec-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sec",
    "category": "method",
    "text": "Base.sec(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the secant of the uncertain value x, where x is in radians. Computes the  element-wise secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sec-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sec",
    "category": "method",
    "text": "Base.sec(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the secant of the uncertain value x, where x is in radians. Computes the  element-wise secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.secd-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.secd",
    "category": "method",
    "text": "Base.secd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the secant of the uncertain value x, where x is in degrees. Computes the  element-wise cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.secd-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.secd",
    "category": "method",
    "text": "Base.secd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the secant of the uncertain value x, where x is in degrees. Computes the  element-wise cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sech-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sech",
    "category": "method",
    "text": "Base.sech(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic secant of the uncertain value x, where x is in degrees.  Computes the element-wise hyperbolic secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sech-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sech",
    "category": "method",
    "text": "Base.sech(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic secant of the uncertain value x, where x is in degrees.  Computes the element-wise hyperbolic secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Secant-1",
    "page": "Trigonometric functions",
    "title": "Secant",
    "category": "section",
    "text": "Base.sec(x::AbstractUncertainValue; n::Int)\nBase.sec(x::AbstractUncertainValue, n::Int)Base.secd(x::AbstractUncertainValue; n::Int)\nBase.secd(x::AbstractUncertainValue, n::Int)Base.sech(x::AbstractUncertainValue; n::Int)\nBase.sech(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cot-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cot",
    "category": "method",
    "text": "Base.cot(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the cotangent of the uncertain value x, where x is in radians. Computes the  element-wise cotangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cot-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cot",
    "category": "method",
    "text": "Base.cot(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the cotangent of the uncertain value x, where x is in radians. Computes the  element-wise cotangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cotd-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cotd",
    "category": "method",
    "text": "Base.cotd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the cotangent of the uncertain value x, where x is in degrees. Computes the  element-wise cotangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cotd-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cotd",
    "category": "method",
    "text": "Base.cotd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the cotangent of the uncertain value x, where x is in degrees. Computes the  element-wise cotangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.coth-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.coth",
    "category": "method",
    "text": "Base.coth(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic cotangent of the uncertain value x, where x is in radians.  Computes the element-wise hyperbolic cotangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.coth-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.coth",
    "category": "method",
    "text": "Base.coth(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic cotangent of the uncertain value x, where x is in radians.  Computes the element-wise hyperbolic cotangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Cotangent-1",
    "page": "Trigonometric functions",
    "title": "Cotangent",
    "category": "section",
    "text": "Base.cot(x::AbstractUncertainValue; n::Int)\nBase.cot(x::AbstractUncertainValue, n::Int)Base.cotd(x::AbstractUncertainValue; n::Int)\nBase.cotd(x::AbstractUncertainValue, n::Int)Base.coth(x::AbstractUncertainValue; n::Int)\nBase.coth(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Inverse-trig-functions-1",
    "page": "Trigonometric functions",
    "title": "Inverse trig functions",
    "category": "section",
    "text": ""
},

{
    "location": "mathematics/trig_functions/#Base.asin-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.asin",
    "category": "method",
    "text": "Base.asin(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse sine of the uncertain value x, where x is in radians. Computes the  element-wise inverse sine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.asin-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.asin",
    "category": "method",
    "text": "Base.asin(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse sine of the uncertain value x, where x is in radians. Computes the  element-wise inverse sine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.asind-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.asind",
    "category": "method",
    "text": "Base.asind(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse sine of the uncertain value x, where x is in degrees. Computes the  element-wise inverse sine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.asind-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.asind",
    "category": "method",
    "text": "Base.asind(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse sine of the uncertain value x, where x is in degrees. Computes the  element-wise inverse sine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Sine-2",
    "page": "Trigonometric functions",
    "title": "Sine",
    "category": "section",
    "text": "Base.asin(x::AbstractUncertainValue; n::Int)\nBase.asin(x::AbstractUncertainValue, n::Int)Base.asind(x::AbstractUncertainValue; n::Int)\nBase.asind(x::AbstractUncertainValue, n::Int)Base.asinh(x::AbstractUncertainValue; n::Int)\nBase.asinh(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.acos-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.acos",
    "category": "method",
    "text": "Base.acos(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cosine of the uncertain value x, where x is in radians. Computes the  element-wise inverse cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.acos-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.acos",
    "category": "method",
    "text": "Base.acos(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cosine of the uncertain value x, where x is in radians. Computes the  element-wise inverse cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acosd-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acosd",
    "category": "method",
    "text": "Base.acosd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cosine of the uncertain value x, where x is in degrees. Computes the  element-wise inverse cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acosd-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acosd",
    "category": "method",
    "text": "Base.acosd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cosine of the uncertain value x, where x is in degrees. Computes the  element-wise inverse cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.acosh-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.acosh",
    "category": "method",
    "text": "Base.acosh(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hyperbolic cosine of the uncertain value x. Computes the element-wise inverse hyperbolic cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.acosh-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.acosh",
    "category": "method",
    "text": "Base.acosh(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hyperbolic cosine of the uncertain value x. Computes the element-wise inverse hyperbolic cosine for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Cosine-2",
    "page": "Trigonometric functions",
    "title": "Cosine",
    "category": "section",
    "text": "Base.acos(x::AbstractUncertainValue; n::Int)\nBase.acos(x::AbstractUncertainValue, n::Int)Base.acosd(x::AbstractUncertainValue; n::Int)\nBase.acosd(x::AbstractUncertainValue, n::Int)Base.acosh(x::AbstractUncertainValue; n::Int)\nBase.acosh(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.tan-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.tan",
    "category": "method",
    "text": "Base.tan(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the tangent of the uncertain value x, where x is in radians. Computes the  element-wise tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.tan-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.tan",
    "category": "method",
    "text": "Base.tan(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the tangent of the uncertain value x, where x is in radians. Computes the  element-wise tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.tand-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.tand",
    "category": "method",
    "text": "Base.tand(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the tangent of the uncertain value x, where x is in degrees. Computes the  element-wise tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.tand-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.tand",
    "category": "method",
    "text": "Base.tand(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the tangent of the uncertain value x, where x is in degrees. Computes the  element-wise tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.tanh-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.tanh",
    "category": "method",
    "text": "Base.tanh(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic tangent of the uncertain value x. Computes the element-wise hyperbolic tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.tanh-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.tanh",
    "category": "method",
    "text": "Base.tanh(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the hyperbolic tangent of the uncertain value x.  Computes the element-wise hyperbolic tangent for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Tangent-2",
    "page": "Trigonometric functions",
    "title": "Tangent",
    "category": "section",
    "text": "Base.tan(x::AbstractUncertainValue; n::Int)\nBase.tan(x::AbstractUncertainValue, n::Int)Base.tand(x::AbstractUncertainValue; n::Int)\nBase.tand(x::AbstractUncertainValue, n::Int)Base.tanh(x::AbstractUncertainValue; n::Int)\nBase.tanh(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acsc-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acsc",
    "category": "method",
    "text": "Base.acsc(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cosecant of the uncertain value x, where x is in radians.  Computes the element-wise inverse cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acsc-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acsc",
    "category": "method",
    "text": "Base.acsc(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cosecant of the uncertain value x, where x is in radians.  Computes the element-wise inverse cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acscd-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acscd",
    "category": "method",
    "text": "Base.acscd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cosecant of the uncertain value x, where x is in degrees.  Computes the element-wise inverse cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acscd-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acscd",
    "category": "method",
    "text": "Base.acscd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cosecant of the uncertain value x, where x is in degrees.  Computes the element-wise inverse cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acsch-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acsch",
    "category": "method",
    "text": "Base.acscd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hyperbolic cosecant of the uncertain value x. Computes the element-wise inverse hypoerbolic cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acsch-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acsch",
    "category": "method",
    "text": "Base.acscd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hyperbolic cosecant of the uncertain value x. Computes the element-wise inverse hypoerbolic cosecant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Inverse-cosecant-1",
    "page": "Trigonometric functions",
    "title": "Inverse cosecant",
    "category": "section",
    "text": "Base.acsc(x::AbstractUncertainValue; n::Int)\nBase.acsc(x::AbstractUncertainValue, n::Int)Base.acscd(x::AbstractUncertainValue; n::Int)\nBase.acscd(x::AbstractUncertainValue, n::Int)Base.acsch(x::AbstractUncertainValue; n::Int)\nBase.acsch(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.Math.asec-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.asec",
    "category": "method",
    "text": "Base.asec(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse secant of the uncertain value x, where x is in radians.  Computes the element-wise inverse secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.asec-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.asec",
    "category": "method",
    "text": "Base.asec(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse secant of the uncertain value x, where x is in radians.  Computes the element-wise inverse secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.asecd-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.asecd",
    "category": "method",
    "text": "Base.asecd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse secant of the uncertain value x, where x is in degrees.  Computes the element-wise inverse secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.asecd-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.asecd",
    "category": "method",
    "text": "Base.asecd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse secant of the uncertain value x, where x is in degrees.  Computes the element-wise inverse secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.asech-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.asech",
    "category": "method",
    "text": "Base.asech(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hyperbolic secant of the uncertain value x. Computes the element-wise inverse hyperbolic secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.asech-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.asech",
    "category": "method",
    "text": "Base.asech(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hyperbolic secant of the uncertain value x. Computes the element-wise inverse hyperbolic secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Inverse-secant-1",
    "page": "Trigonometric functions",
    "title": "Inverse secant",
    "category": "section",
    "text": "Base.asec(x::AbstractUncertainValue; n::Int)\nBase.asec(x::AbstractUncertainValue, n::Int)Base.asecd(x::AbstractUncertainValue; n::Int)\nBase.asecd(x::AbstractUncertainValue, n::Int)Base.asech(x::AbstractUncertainValue; n::Int)\nBase.asech(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acot-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acot",
    "category": "method",
    "text": "Base.acot(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cotangent of the uncertain value x, where x is in radians.  Computes the element-wise inverse secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acot-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acot",
    "category": "method",
    "text": "Base.acot(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cotangent of the uncertain value x, where x is in radians.  Computes the element-wise inverse secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acotd-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acotd",
    "category": "method",
    "text": "Base.acotd(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cotangent of the uncertain value x, where x is in degrees. Computes the element-wise inverse secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acotd-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acotd",
    "category": "method",
    "text": "Base.acotd(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse cotangent of the uncertain value x, where x is in degrees. Computes the element-wise inverse secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acoth-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acoth",
    "category": "method",
    "text": "Base.acoth(x::AbstractUncertainValue; n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hyperbolic cotangent of the uncertain value x. Computes the element-wise inverse hyperbolic secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.acoth-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.acoth",
    "category": "method",
    "text": "Base.acoth(x::AbstractUncertainValue, n::Int = 10000) -> Vector{Float64}\n\nCompute the inverse hyperbolic cotangent of the uncertain value x. Computes the element-wise inverse hyperbolic secant for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Inverse-cotangent-1",
    "page": "Trigonometric functions",
    "title": "Inverse cotangent",
    "category": "section",
    "text": "Base.acot(x::AbstractUncertainValue; n::Int)\nBase.acot(x::AbstractUncertainValue, n::Int)Base.acotd(x::AbstractUncertainValue; n::Int)\nBase.acotd(x::AbstractUncertainValue, n::Int)Base.acoth(x::AbstractUncertainValue; n::Int)\nBase.acoth(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sincos-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sincos",
    "category": "method",
    "text": "Base.sincos(x::AbstractUncertainValue; n::Int = 10000)\n\nSimultaneously compute the sine and cosine of the uncertain value x, where x is in  radians. Computes the element-wise sincos for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sincos-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sincos",
    "category": "method",
    "text": "Base.sincos(x::AbstractUncertainValue, n::Int = 10000)\n\nSimultaneously compute the sine and cosine of the uncertain value x, where x is in  radians. Computes the element-wise sincos for n realizations.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sinc-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sinc",
    "category": "method",
    "text": "Base.sinc(x::AbstractUncertainValue; n::Int = 10000)\n\nIn an element-wise manner for n realizations of the uncertain value x, compute  sin(pi x)  (pi x) if x neq 0, and 1 if x = 0.\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sinc-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sinc",
    "category": "method",
    "text": "Base.sinc(x::AbstractUncertainValue, n::Int = 10000)\n\nCompute sin(pi x)  (pi x) if x neq 0, and 1 if x = 0 element-wise  over n realizations of the uncertain value x. \n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sinpi-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sinpi",
    "category": "method",
    "text": "Base.sinpi(x::AbstractUncertainValue; n::Int = 10000)\n\nCompute sin(pi x) more accurately than sin(pi*x), especially for large x,  in an element-wise over n realizations of the uncertain value x. \n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.sinpi-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.sinpi",
    "category": "method",
    "text": "Base.sinpi(x::AbstractUncertainValue; n::Int = 10000)\n\nCompute sin(pi x) more accurately than sin(pi*x), especially for large x,  in an element-wise over n realizations of the uncertain value x. \n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cosc-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cosc",
    "category": "method",
    "text": "Base.cosc(x::AbstractUncertainValue; n::Int = 10000)\n\nCompute cos(pi x)  x - sin(pi x)  (pi x^2) if x neq 0, and 0 if x = 0, in an element-wise manner over n realizations of the uncertain value x. \n\nThis is the derivative of sinc(x).\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cosc-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cosc",
    "category": "method",
    "text": "Base.cosc(x::AbstractUncertainValue, n::Int = 10000)\n\nCompute cos(pi x)  x - sin(pi x)  (pi x^2) if x neq 0, and 0 if x = 0, in an element-wise manner over n realizations of the uncertain value x. \n\nThis is the derivative of sinc(x).\n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cospi-Tuple{AbstractUncertainValue}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cospi",
    "category": "method",
    "text": "Base.cospi(x::AbstractUncertainValue; n::Int = 10000)\n\nCompute cos(pi x) more accurately than cos(pi*x), especially for large x,  in an element-wise over n realizations of the uncertain value x. \n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Base.Math.cospi-Tuple{AbstractUncertainValue,Int64}",
    "page": "Trigonometric functions",
    "title": "Base.Math.cospi",
    "category": "method",
    "text": "Base.cospi(x::AbstractUncertainValue, n::Int = 10000)\n\nCompute cos(pi x) more accurately than cos(pi*x), especially for large x,  in an element-wise over n realizations of the uncertain value x. \n\n\n\n\n\n"
},

{
    "location": "mathematics/trig_functions/#Other-trig-functions-1",
    "page": "Trigonometric functions",
    "title": "Other trig functions",
    "category": "section",
    "text": "Base.sincos(x::AbstractUncertainValue; n::Int)\nBase.sincos(x::AbstractUncertainValue, n::Int)Base.sinc(x::AbstractUncertainValue; n::Int)\nBase.sinc(x::AbstractUncertainValue, n::Int)Base.sinpi(x::AbstractUncertainValue; n::Int)\nBase.sinpi(x::AbstractUncertainValue, n::Int)Base.cosc(x::AbstractUncertainValue; n::Int)\nBase.cosc(x::AbstractUncertainValue, n::Int)Base.cospi(x::AbstractUncertainValue; n::Int)\nBase.cospi(x::AbstractUncertainValue, n::Int)"
},

{
    "location": "implementing_algorithms_for_uncertaindata/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "implementing_algorithms_for_uncertaindata/#Extending-existing-algorithms-for-uncertain-data-types-1",
    "page": "-",
    "title": "Extending existing algorithms for uncertain data types",
    "category": "section",
    "text": "Do you already have an algorithm computing some statistic that you want to obtain uncertainty estimates for? Simply use Julia\'s multiple dispatch and create a version of the algorithm function that accepts the AbstractUncertainValue and AbstractUncertainDataset types, along with a SamplingConstraints specifying how the uncertain values are should be resampled.A basic function skeleton could be# Some algorithm computing a statistic for a scalar-valued vector\nfunction myalgorithm(dataset::Vector{T}; kwargs...) where T\n    # some algorithm returning a single-valued statistic\nend\n\n# Applying the algorithm to an ensemble of realisations from\n# an uncertain dataset, given a sampling constraint.\nfunction myalgorithm(d::UncertainDataset, constraint::C;\n        n_ensemble_realisations = 100, kwargs...)\n        where {C <: SamplingConstraint}\n\n    ensemble_stats = zeros(n_ensemble_realisations)\n\n    for i in 1:n_ensemble_realisations\n        ensemble_stats[i] = myalgorithm(resample(d, constraint); kwargs...)\n    end\n\n    return ensemble_stats\nend"
},

{
    "location": "changelog/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": ""
},

{
    "location": "changelog/#UncertainData.jl-v0.1.8-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.8",
    "category": "section",
    "text": ""
},

{
    "location": "changelog/#Bug-fixes-1",
    "page": "-",
    "title": "Bug fixes",
    "category": "section",
    "text": "Added missing package dependencies which were not caught by CI."
},

{
    "location": "changelog/#UncertainData.jl-v0.1.7-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.7",
    "category": "section",
    "text": ""
},

{
    "location": "changelog/#New-functionality-1",
    "page": "-",
    "title": "New functionality",
    "category": "section",
    "text": "UncertainIndexValueDatasets can now be constructed from vectors of uncertain values.    To do so, provide a vector of uncertain values for the indices, and the same for the    values, e.g. UncertainIndexValueDataset([idx1, idx2], [val1, val2]).\nIndex-value dataset realizations can now be    interpolated on a regular grid. "
},

{
    "location": "changelog/#Bug-fixes-2",
    "page": "-",
    "title": "Bug fixes",
    "category": "section",
    "text": "minima and maxima now returns the global minimum for a dataset instead of a vector    of elementwise minima and maxima.\nImplemented the option to linearly interpolate index-value dataset realizations.    To do so, provide resample with a RegularGrid instance. \nMerged redundant methods for assigning some distributions.\nFixed non-critical indexing bug for uncertain index-value datasets.\nRemoved redudant method definitions and multiple imports of the same files causing    definitions to be overwritten and printing warnings statements when loading the package."
},

{
    "location": "changelog/#UncertainData.jl-v0.1.6-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.6",
    "category": "section",
    "text": ""
},

{
    "location": "changelog/#New-functionality-2",
    "page": "-",
    "title": "New functionality",
    "category": "section",
    "text": "Implemented sequential sampling constraints StrictlyIncreasing and StrictlyDecreasing   for UncertainIndexValueDatasets. \nAdded UncertainScalarPopulation type, representing    vectors of values that should be sampled according to a vector of probabilities. "
},

{
    "location": "changelog/#Improvements-1",
    "page": "-",
    "title": "Improvements",
    "category": "section",
    "text": "Improved documentation for CertainValues.\nAdded documentation for UncertainScalarPopulation.\nAdded UncertainScalarPopulation to uncertain value overview list in the documentation.\nFixed duplicate docs for cot, cotd, coth and added missing acot, acotd, acoth   docs.\nShortened and updated main documentation page with more links."
},

{
    "location": "changelog/#Bug-fixes-3",
    "page": "-",
    "title": "Bug fixes",
    "category": "section",
    "text": "Import Base functions properly when defining CertainValue, so that no unexpected    behaviour is introduced.\nFixed links in documentation that pointed to the wrong locations.\nRemove model resampling docs which was not supposed to be published until the    functionality is properly implemented."
},

{
    "location": "changelog/#UncertainData.jl-v0.1.5-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.5",
    "category": "section",
    "text": ""
},

{
    "location": "changelog/#New-functionality-3",
    "page": "-",
    "title": "New functionality",
    "category": "section",
    "text": "Added CertainValue type to represent scalars without   any uncertainty. Even though a scalar is not uncertain, we\'ll define it as subtype of    AbstractUncertainValue to treat certain values alongside uncertain values in datasets. \nAdded plot recipe for CertainValues. They are just plotted as regular points.\nAdded method resample(Vector{AbstractUncertainValue}) for resampling vectors of    uncertain values. Operates element-wise, just as for an uncertain dataset. \nAdded an abstract type SequentialSamplingConstraint to separate sequential constraints    from general constraints that might be applied before resampling according to    the sequential constraints.\nAdded abstract type (OrderedSamplingAlgorithm) and composite types    (StartToEnd, EndToStart, MidpointOutwards, ChunksForwards, ChunksBackwards)    which indicates how to sample sequential realizations when resampling an uncertain    dataset. Only StartToEnd is used at the moment.\nAdded abstract type SequentialSamplingConstraint which is the supertype for all    sequential constraints.\nAdded function to check if strictly increasing sequences through an uncertain dataset    exist: strictly_increasing_sequence_exists(udata::AbstractUncertainValueDataset.\nAdded function to check if strictly decreasing sequences through an uncertain dataset    exist: strictly_increasing_sequence_exists(udata::AbstractUncertainValueDataset.\nAdded the StrictlyIncreasing{T} where {T<:OrderedSamplingAlgorithm} sequential    constraint for resampling uncertain datasets. \nAdded the StrictlyDecreasing{T} where {T<:OrderedSamplingAlgorithm} sequential    constraint for resampling uncertain datasets. \nAdded resampling methods\nresample(udata, sequential_constraint::StrictlyIncreasing{T} where {T <: StartToEnd}\nresample(udata, sequential_constraint::StrictlyDecreasing{T} where {T <: StartToEnd}\nresample(udata, constraint::SamplingConstraint, sequential_constraint::StrictlyIncreasing{T} where {T <: StartToEnd}\nresample(udata, constraint::SamplingConstraint, sequential_constraint::StrictlyDecreasing{T} where {T <: StartToEnd}\nresample(udata, constraint::Vector{SamplingConstraint}, sequential_constraint::StrictlyIncreasing{T} where {T <: StartToEnd}\nresample(udata, constraint::Vector{SamplingConstraint}, sequential_constraint::StrictlyDecreasing{T} where {T <: StartToEnd}"
},

{
    "location": "changelog/#Improvements-2",
    "page": "-",
    "title": "Improvements",
    "category": "section",
    "text": "Added documentation on sequential constraints, clearly separating it from the general constraints. "
},

{
    "location": "changelog/#UncertainData.jl-v0.1.4-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.4",
    "category": "section",
    "text": ""
},

{
    "location": "changelog/#Breaking-changes-1",
    "page": "-",
    "title": "Breaking changes",
    "category": "section",
    "text": "Elementary operations for (scalar, uncertain_value), (uncertain_value, scalar) and    (uncertain_value, uncertain_value) pairs now returns an uncertain value instead of    a vector of resampled realizations. The default behaviour is to perform a kernel    density estimate over the vector of results of the element-wise operations (which    was previously returned without representing it as an uncertain value)."
},

{
    "location": "changelog/#New-functionality-4",
    "page": "-",
    "title": "New functionality",
    "category": "section",
    "text": "Implemented constraints for datasets that have already been constrained.    constrain(udata::ConstrainedDataset, s::SamplingConstraint) will now return another    ConstrainedDataset. The same applies for ConstrainedIndexDataset and    ConstrainedValueDataset.\nAdded maximum(Vector{AbstractUncertainValue}) and    minimum(Vector{AbstractUncertainValue}) methods.\nAdded plot recipe for Vector{AbstractUncertainValue}s. Behaves just as plotting an   uncertain dataset, assuming an implicit indices 1:length(v). Error bars may be    tuned by providing a second argument of quantiles to plot, e.g. plot(v, [0.2, 0.8]   gives error bars covering the 20th to 80th percentile range of the data."
},

{
    "location": "changelog/#Improvements-3",
    "page": "-",
    "title": "Improvements",
    "category": "section",
    "text": "Added documentation for StrictlyIncreasing and StrictlyDecreasing sampling    constraints.\nAdded show function for AbstractUncertainIndexDataset. show errored previously,    because it assumed the default behaviour of AbstractUncertainValueDataset, which    does not have the indices field."
},

{
    "location": "changelog/#Bug-fixes-4",
    "page": "-",
    "title": "Bug fixes",
    "category": "section",
    "text": "Fixed bug when resampling an uncertain dataset using the NoConstraint constraint,    which did not work to due to a reference to a non-existing variable.\nFixed test bug where when resampling an uncertain value with the TruncateStd sampling   constraint, the test compared the result to a fixed scalar, not the standar deviation    of the value. This sometimes made the travis build fail."
},

{
    "location": "changelog/#UncertainData.jl-v0.1.3-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.3",
    "category": "section",
    "text": ""
},

{
    "location": "changelog/#New-functionality-5",
    "page": "-",
    "title": "New functionality",
    "category": "section",
    "text": "Allow both the indices and values fields of UncertainIndexValueDataset to be any    subtype of AbstractUncertainValueDataset. This way, you don\'t have to use an    index dataset type for the indices if not necessary."
},

{
    "location": "changelog/#Improvements-4",
    "page": "-",
    "title": "Improvements",
    "category": "section",
    "text": "Improved documentation for UncertainIndexDataset, UncertainValueDataset,    UncertainDataset and UncertainIndexValueDataset types and added an    overview page in the documentation    to explain the difference between these types.\nAdded an overview section for the resampling    documentation.\nCleaned and improved documentation for uncertain values. \nAdded separate documentation for the uncertain index dataset type.\nAdded separate documentation for the uncertain value dataset type.\nImproved documentation for the generic uncertain dataset type \nMerged documentation for sampling constraints and resampling.\nAdded missing documentation for the sinc, sincos, sinpi, cosc and cospi trig    functions."
},

{
    "location": "changelog/#UncertainData.jl-v0.1.2-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.2",
    "category": "section",
    "text": ""
},

{
    "location": "changelog/#New-functionality-6",
    "page": "-",
    "title": "New functionality",
    "category": "section",
    "text": "Support elementary mathematical operations    (+, -, * and /) between arbitrary    uncertain values of different types. Also works with the combination of scalars and    uncertain values. Because elementary operations should work on arbitrary uncertain    values, a resampling approach is used to perform the mathematical operations. This    means that all mathematical operations return a vector containing the results of    repeated element-wise operations (where each element is a resampled draw from the    furnishing distribution(s) of the uncertain value(s)). The default number of    realizations is set to 10000. This allows calling uval1 + uval2 for two uncertain    values uval1 and uval2. If you need to tune the number of resample draws to n,    you need to use the +(uval1, uval2, n) syntax (similar for the operators). In the    future, elementary operations might be improved for certain combinations of uncertain   values where exact expressions for error propagation are now, for example using the    machinery in Measurements.jl for normally distributed values.\nSupport for trigonometric functions added (sin, sind, sinh, cos,   cosd, cosh, tan, tand, tanh, csc, cscd, csch, csc, cscd, csch,    sec, secd, sech, cot, cotd, coth, sincos, sinc, sinpi, cosc,    cospi). Inverses are also defined (asin, asind, asinh, acos,   acosd, acosh, atan, atand, atanh, acsc, acscd, acsch, acsc, acscd,    acsch, asec, asecd, asech, acot, acotd, acoth).   Beware: if the support of the funishing distribution for an uncertain value lies partly    outside the domain of the function, you risk encountering errors.   These also use a resampling approach, using 10000 realizations by default.    Use either the sin(uval) syntax for the default, and sin(uval, n::Int) to tune the    number of samples.\nSupport non-integer multiples of the standard deviation in the TruncateStd sampling    constraint."
},

{
    "location": "changelog/#Fixes-1",
    "page": "-",
    "title": "Fixes",
    "category": "section",
    "text": "Fixed bug in resampling of index-value datasets, where the n arguments wasn\'t used. \nBugfix: due to StatsBase.std not being defined for FittedDistribution instances,    uncertain values represented by UncertainScalarTheoreticalFit instances were not    compatible with the TruncateStd sampling constraint. Now fixed!\nAdded missing resample(uv::AbstractUncertainValue, constraint::TruncateRange, n::Int)    method."
},

{
    "location": "changelog/#Improvements-5",
    "page": "-",
    "title": "Improvements",
    "category": "section",
    "text": "Improved resampling documentation for UncertainIndexValueDatasets. Now shows    the documentation for the main methods, as well as examples of how to use different    sampling constraints for each individual index and data value.\nImproved resampling documentation for UncertainDatasets. Now shows    the documentation for the main methods."
},

{
    "location": "changelog/#UncertainData.jl-v0.1.1-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.1",
    "category": "section",
    "text": ""
},

{
    "location": "changelog/#New-functionality-7",
    "page": "-",
    "title": "New functionality",
    "category": "section",
    "text": "Indexing implemented for UncertainIndexValueDataset. \nResampling implemented for UncertainIndexValueDataset.\nUncertain values and uncertain datasets now support minimum and maximum.\nsupport(uv::AbstractUncertainValue) now always returns an interval from    IntervalArithmetic.jl\nsupport_overlap now computes overlaps also for fitted theoretical distributions.\nAdded more plotting recipes. \nAll implemented uncertain data types now support resampling. "
},

{
    "location": "changelog/#Improvements-6",
    "page": "-",
    "title": "Improvements",
    "category": "section",
    "text": "Improved general documentation. Added a reference to    Measurements.jl and an explanation    for the differences between the packages.\nImproved resampling documentation with detailed explanation and plots."
},

{
    "location": "changelog/#UncertainData.jl-v0.1.0-1",
    "page": "-",
    "title": "UncertainData.jl v0.1.0",
    "category": "section",
    "text": "Basic functionality in place."
},

]}
