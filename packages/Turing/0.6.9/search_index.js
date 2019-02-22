var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Turing.jl-1",
    "page": "Readme",
    "title": "Turing.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: Documentation)Turing.jl is a Julia library for (universal) probabilistic programming. Current features include:Universal probabilistic programming with an intuitive modelling interface\nHamiltonian Monte Carlo (HMC) sampling for differentiable posterior distributions\nParticle MCMC sampling for complex posterior distributions involving discrete variables and stochastic control flows\nGibbs sampling that combines particle MCMC,  HMC and many other MCMC algorithms"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "Turing\'s home page, with links to everything you\'ll need to use Turing is:http://turing.ml/docs/get-started/"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Turing was originally created and is now managed by Hong Ge. Current and past Turing team members include Hong Ge, Adam Scibior, Matej Balog, Zoubin Ghahramani, Kai Xu, Emma Smith, Emile Mathieu, Martin Trapp. You can see the full list of on Github: https://github.com/TuringLang/Turing.jl/graphs/contributors.Turing is an open source project so if you feel you have some relevant skills and are interested in contributing then please do get in touch. See the Contributing page for details on the process. You can contribute by opening issues on Github or implementing things yourself and making a pull request. We would also appreciate example models written using Turing."
},

{
    "location": "#Slack-1",
    "page": "Readme",
    "title": "Slack",
    "category": "section",
    "text": "Join our channel (#turing) in the Julia Slack chat for help, discussion, or general communication with the Turing team. If you do not already have an invitation to Julia\'s Slack, you can get one by going here."
},

{
    "location": "#Citing-Turing.jl-1",
    "page": "Readme",
    "title": "Citing Turing.jl",
    "category": "section",
    "text": "If you use Turing for your own research, please consider citing the following publication: Hong Ge, Kai Xu, and Zoubin Ghahramani: Turing: a language for flexible probabilistic inference. AISTATS 2018 pdf bibtex"
},

{
    "location": "autodocs/#Turing.Core.@VarName",
    "page": "Docstrings",
    "title": "Turing.Core.@VarName",
    "category": "macro",
    "text": "Usage: @VarName x[1,2][1+5][45][3]   return: (:x,[1,2],6,45,3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Core.@model",
    "page": "Docstrings",
    "title": "Turing.Core.@model",
    "category": "macro",
    "text": "@model(body)\n\nMacro to specify a probabilistic model.\n\nExample:\n\nModel definition:\n\n@model model_generator(x = default_x, y) = begin\n    ...\nend\n\nExpanded model definition\n\n# Allows passing arguments as kwargs\nmodel_generator(; x = nothing, y = nothing)) = model_generator(x, y)\nfunction model_generator(x = nothing, y = nothing)\n    pvars, dvars = Turing.get_vars(Tuple{:x, :y}, (x = x, y = y))\n    data = Turing.get_data(dvars, (x = x, y = y))\n    defaults = Turing.get_default_values(dvars, (x = default_x, y = nothing))\n    \n    inner_function(sampler::Turing.AnySampler, model) = inner_function(model)\n    function inner_function(model)\n        return inner_function(Turing.VarInfo(), Turing.SampleFromPrior(), model)\n    end\n    function inner_function(vi::Turing.VarInfo, model)\n        return inner_function(vi, Turing.SampleFromPrior(), model)\n    end\n    # Define the main inner function\n    function inner_function(vi::Turing.VarInfo, sampler::Turing.AnySampler, model)\n        local x\n        if isdefined(model.data, :x)\n            x = model.data.x\n        else\n            x = model_defaults.x\n        end\n        local y\n        if isdefined(model.data, :y)\n            y = model.data.y\n        else\n            y = model.defaults.y\n        end\n\n        vi.logp = zero(Real)\n        ...\n    end\n    model = Turing.Model{pvars, dvars}(inner_function, data, defaults)\n    return model\nend\n\nGenerating a model: model_generator(x_value)::Model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.DynamicNUTS",
    "page": "Docstrings",
    "title": "Turing.Inference.DynamicNUTS",
    "category": "type",
    "text": "DynamicNUTS(n_iters::Integer)\n\nDynamic No U-Turn Sampling algorithm provided by the DynamicHMC package. To use it, make sure you have the DynamicHMC package installed.\n\n# Import Turing and DynamicHMC.\nusing DynamicHMC, Turing\n\n# Model definition.\n@model gdemo(x, y) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0,sqrt(s))\n  x ~ Normal(m, sqrt(s))\n  y ~ Normal(m, sqrt(s))\n  return s, m\nend\n\n# Pull 2,000 samples using DynamicNUTS.\nchn = sample(gdemo(1.5, 2.0), DynamicNUTS(2000))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.Gibbs",
    "page": "Docstrings",
    "title": "Turing.Inference.Gibbs",
    "category": "type",
    "text": "Gibbs(n_iters, algs...)\n\nCompositional MCMC interface. Gibbs sampling combines one or more sampling algorithms, each of which samples from a different set of variables in a model.\n\nExample:\n\n@model gibbs_example(x) = begin\n    v1 ~ Normal(0,1)\n    v2 ~ Categorical(5)\n        ...\nend\n\n# Use PG for a \'v2\' variable, and use HMC for the \'v1\' variable.\n# Note that v2 is discrete, so the PG sampler is more appropriate\n# than is HMC.\nalg = Gibbs(1000, HMC(1, 0.2, 3, :v1), PG(20, 1, :v2))\n\nTips:\n\nHMC and NUTS are fast samplers, and can throw off particle-based\n\nmethods like Particle Gibbs. You can increase the effectiveness of particle sampling by including more particles in the particle sampler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.HMC",
    "page": "Docstrings",
    "title": "Turing.Inference.HMC",
    "category": "type",
    "text": "HMC(n_iters::Int, epsilon::Float64, tau::Int)\n\nHamiltonian Monte Carlo sampler.\n\nArguments:\n\nn_iters::Int : The number of samples to pull.\nepsilon::Float64 : The leapfrog step size to use.\ntau::Int : The number of leapfrop steps to use.\n\nUsage:\n\nHMC(1000, 0.05, 10)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n    s ~ InverseGamma(2,3)\n    m ~ Normal(0, sqrt(s))\n    x[1] ~ Normal(m, sqrt(s))\n    x[2] ~ Normal(m, sqrt(s))\n    return s, m\nend\n\nsample(gdemo([1.5, 2]), HMC(1000, 0.05, 10))\n\nTips:\n\nIf you are receiving gradient errors when using HMC, try reducing the\n\nstep_size parameter.\n\n# Original step_size\nsample(gdemo([1.5, 2]), HMC(1000, 0.1, 10))\n\n# Reduced step_size.\nsample(gdemo([1.5, 2]), HMC(1000, 0.01, 10))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.HMCDA",
    "page": "Docstrings",
    "title": "Turing.Inference.HMCDA",
    "category": "type",
    "text": "HMCDA(n_iters::Int, n_adapts::Int, delta::Float64, lambda::Float64)\n\nHamiltonian Monte Carlo sampler with Dual Averaging algorithm.\n\nUsage:\n\nHMCDA(1000, 200, 0.65, 0.3)\n\nArguments:\n\nn_iters::Int : Number of samples to pull.\nn_adapts::Int : Numbers of samples to use for adaptation.\ndelta::Float64 : Target acceptance rate. 65% is often recommended.\nlambda::Float64 : Target leapfrop length.\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0, sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), HMCDA(1000, 200, 0.65, 0.3))\n\nFor more information, please view the following paper (arXiv link):\n\nHoffman, Matthew D., and Andrew Gelman. \"The No-U-turn sampler: adaptively setting path lengths in Hamiltonian Monte Carlo.\" Journal of Machine Learning Research 15, no. 1 (2014): 1593-1623.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.IPMCMC",
    "page": "Docstrings",
    "title": "Turing.Inference.IPMCMC",
    "category": "type",
    "text": "IPMCMC(n_particles::Int, n_iters::Int, n_nodes::Int, n_csmc_nodes::Int)\n\nParticle Gibbs sampler.\n\nNote that this method is particle-based, and arrays of variables must be stored in a TArray object.\n\nUsage:\n\nIPMCMC(100, 100, 4, 2)\n\nArguments:\n\nn_particles::Int : Number of particles to use.\nn_iters::Int : Number of iterations to employ.\nn_nodes::Int : The number of nodes running SMC and CSMC.\nn_csmc_nodes::Int : The number of CSMC nodes.\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0,sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), IPMCMC(100, 100, 4, 2))\n\nA paper on this can be found here.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.IS",
    "page": "Docstrings",
    "title": "Turing.Inference.IS",
    "category": "type",
    "text": "IS(n_particles::Int)\n\nImportance sampling algorithm.\n\nNote that this method is particle-based, and arrays of variables must be stored in a TArray object.\n\nArguments:\n\nn_particles is the number of particles to use.\n\nUsage:\n\nIS(1000)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n    s ~ InverseGamma(2,3)\n    m ~ Normal(0,sqrt.(s))\n    x[1] ~ Normal(m, sqrt.(s))\n    x[2] ~ Normal(m, sqrt.(s))\n    return s, m\nend\n\nsample(gdemo([1.5, 2]), IS(1000))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.MH",
    "page": "Docstrings",
    "title": "Turing.Inference.MH",
    "category": "type",
    "text": "MH(n_iters::Int)\n\nMetropolis-Hastings sampler.\n\nUsage:\n\nMH(100, (:m, (x) -> Normal(x, 0.1)))\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0,sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nchn = sample(gdemo([1.5, 2]), MH(1000))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Model",
    "page": "Docstrings",
    "title": "Turing.Model",
    "category": "type",
    "text": "struct Model{pvars, dvars, F, TData, TDefaults}\n    f::F\n    data::TData\n    defaults::TDefaults\nend\n\nA Model struct with parameter variables pvars, data variables dvars, inner  function f, data::NamedTuple and defaults::NamedTuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.NUTS",
    "page": "Docstrings",
    "title": "Turing.Inference.NUTS",
    "category": "type",
    "text": "NUTS(n_iters::Int, n_adapts::Int, delta::Float64)\n\nNo-U-Turn Sampler (NUTS) sampler.\n\nUsage:\n\nNUTS(1000, 200, 0.6j_max)\n\nArguments:\n\nn_iters::Int : The number of samples to pull.\nn_adapts::Int : The number of samples to use with adapatation.\ndelta::Float64 : Target acceptance rate.\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0, sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.j_max, 2]), NUTS(1000, 200, 0.6j_max))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.PG",
    "page": "Docstrings",
    "title": "Turing.Inference.PG",
    "category": "type",
    "text": "PG(n_particles::Int, n_iters::Int)\n\nParticle Gibbs sampler.\n\nNote that this method is particle-based, and arrays of variables must be stored in a TArray object.\n\nUsage:\n\nPG(100, 100)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0, sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), PG(100, 100))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.PMMH",
    "page": "Docstrings",
    "title": "Turing.Inference.PMMH",
    "category": "type",
    "text": "PMMH(n_iters::Int, smc_alg:::SMC, parameters_algs::Tuple{MH})\n\nParticle independant Metropolis–Hastings and Particle marginal Metropolis–Hastings samplers.\n\nNote that this method is particle-based, and arrays of variables must be stored in a TArray object.\n\nUsage:\n\nalg = PMMH(100, SMC(20, :v1), MH(1,:v2))\nalg = PMMH(100, SMC(20, :v1), MH(1,(:v2, (x) -> Normal(x, 1))))\n\nArguments:\n\nn_iters::Int : Number of iterations to run.\nsmc_alg:::SMC : An SMC algorithm to use.\nparameters_algs::Tuple{MH} : An MH algorithm, which includes a\n\nsample space specification.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.SGHMC",
    "page": "Docstrings",
    "title": "Turing.Inference.SGHMC",
    "category": "type",
    "text": "SGHMC(n_iters::Int, learning_rate::Float64, momentum_decay::Float64)\n\nStochastic Gradient Hamiltonian Monte Carlo sampler.\n\nUsage:\n\nSGHMC(1000, 0.01, 0.1)\n\nArguments:\n\nn_iters::Int : Number of samples to pull.\nlearning_rate::Float64 : The learning rate.\nmomentum_decay::Float64 : Momentum decay variable.\n\nExample:\n\n@model example begin\n  ...\nend\n\nsample(example, SGHMC(1000, 0.01, 0.1))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.SGLD",
    "page": "Docstrings",
    "title": "Turing.Inference.SGLD",
    "category": "type",
    "text": "SGLD(n_iters::Int, epsilon::Float64)\n\nStochastic Gradient Langevin Dynamics sampler.\n\nUsage:\n\nSGLD(1000, 0.5)\n\nArguments:\n\nn_iters::Int : Number of samples to pull.\nepsilon::Float64 : The scaling factor for the learing rate.\n\nExample:\n\n@model example begin\n  ...\nend\n\nsample(example, SGLD(1000, 0.5))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Inference.SMC",
    "page": "Docstrings",
    "title": "Turing.Inference.SMC",
    "category": "type",
    "text": "SMC(n_particles::Int)\n\nSequential Monte Carlo sampler.\n\nNote that this method is particle-based, and arrays of variables must be stored in a TArray object.\n\nUsage:\n\nSMC(1000)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0, sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), SMC(1000))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Sampler",
    "page": "Docstrings",
    "title": "Turing.Sampler",
    "category": "type",
    "text": "Sampler{T}\n\nGeneric interface for implementing inference algorithms. An implementation of an algorithm should include the following:\n\nA type specifying the algorithm and its parameters, derived from InferenceAlgorithm\nA method of sample function that produces results of inference, which is where actual inference happens.\n\nTuring translates models to chunks that call the modelling functions at specified points. The dispatch is based on the value of a sampler variable. To include a new inference algorithm implements the requirements mentioned above in a separate file, then include that file at the end of this one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Turing.+Turing.-Turing.@VarNameTuring.@modelTuring.AbstractMixtureModelTuring.AbstractMvNormalTuring.AbstractSamplerTuring.ArcsineTuring.BernoulliTuring.BetaTuring.BetaBinomialTuring.BetaPrimeTuring.BinomialTuring.BinomialLogitTuring.BiweightTuring.CACHEIDCSTuring.CACHERANGESTuring.CACHERESETTuring.CSMCTuring.CTaskTuring.CategoricalTuring.CauchyTuring.ChainsTuring.ChiTuring.ChisqTuring.ContinuousTuring.ContinuousDistributionTuring.ContinuousMatrixDistributionTuring.ContinuousMultivariateDistributionTuring.ContinuousUnivariateDistributionTuring.CoreTuring.CosineTuring.DiagNormalTuring.DiagNormalCanonTuring.DirichletTuring.DirichletMultinomialTuring.DiscreteTuring.DiscreteDistributionTuring.DiscreteMatrixDistributionTuring.DiscreteMultivariateDistributionTuring.DiscreteUniformTuring.DiscreteUnivariateDistributionTuring.DistributionTuring.DistributionsTuring.DoubleExponentialTuring.DynamicHMCTuring.DynamicNUTSTuring.EdgeworthMeanTuring.EdgeworthSumTuring.EdgeworthZTuring.EmpiricalUnivariateDistributionTuring.EpanechnikovTuring.ErlangTuring.EstimatorTuring.ExponentialTuring.FDistTuring.FisherNoncentralHypergeometricTuring.FlatTuring.FlatPosTuring.FrechetTuring.FullNormalTuring.FullNormalCanonTuring.GammaTuring.GeneralizedExtremeValueTuring.GeneralizedParetoTuring.GeometricTuring.GibbsTuring.GumbelTuring.HMCTuring.HMCDATuring.HypergeometricTuring.IPMCMCTuring.ISTuring.InferenceTuring.InverseGammaTuring.InverseGaussianTuring.InverseWishartTuring.IsoNormalTuring.IsoNormalCanonTuring.KSDistTuring.KSOneSidedTuring.KolmogorovTuring.LaplaceTuring.LevyTuring.LibtaskTuring.LocationScaleTuring.LogDensityProblemsTuring.LogNormalTuring.LogisticTuring.MCMCChainTuring.MHTuring.MLEstimatorTuring.MatrixDistributionTuring.MatrixvariateTuring.MixtureModelTuring.ModelTuring.MultinomialTuring.MultivariateTuring.MultivariateDistributionTuring.MultivariateMixtureTuring.MultivariateNormalTuring.MvLogNormalTuring.MvNormalTuring.MvNormalCanonTuring.MvNormalKnownCovTuring.MvTDistTuring.NUTSTuring.NegativeBinomialTuring.NonMatrixDistributionTuring.NoncentralBetaTuring.NoncentralChisqTuring.NoncentralFTuring.NoncentralHypergeometricTuring.NoncentralTTuring.NormalTuring.NormalCanonTuring.NormalInverseGaussianTuring.PGTuring.PIMHTuring.PMMHTuring.PROGRESSTuring.ParetoTuring.PoissonTuring.PoissonBinomialTuring.QQPairTuring.RayleighTuring.RealIntervalTuring.SGHMCTuring.SGLDTuring.SMCTuring.SampleableTuring.SamplerTuring.SemicircleTuring.SkellamTuring.SufficientStatsTuring.SymTriangularDistTuring.TArrayTuring.TDistTuring.TRefTuring.TriangularDistTuring.TriweightTuring.TruncatedTuring.TruncatedNormalTuring.TuringTuring.UniformTuring.UnivariateTuring.UnivariateDistributionTuring.UnivariateGMMTuring.UnivariateMixtureTuring.UtilitiesTuring.ValueSupportTuring.VariateFormTuring.VecBinomialLogitTuring.VonMisesTuring.VonMisesFisherTuring.WalleniusNoncentralHypergeometricTuring.WeibullTuring.WishartTuring.ZeroMeanDiagNormalTuring.ZeroMeanDiagNormalCanonTuring.ZeroMeanFullNormalTuring.ZeroMeanFullNormalCanonTuring.ZeroMeanIsoNormalTuring.ZeroMeanIsoNormalCanonTuring.__init__Turing.__inits__Turing.autcorplotTuring.auto_tune_chunk_size!Turing.autocorplotTuring.autocorplot!Turing.binaryentropyTuring.canonformTuring.ccdfTuring.cdfTuring.cfTuring.cgfTuring.circvarTuring.componentTuring.componentsTuring.componentwise_logpdfTuring.componentwise_pdfTuring.concentrationTuring.consumeTuring.corTuring.cornerTuring.corner!Turing.covTuring.cquantileTuring.cumulantTuring.densityplotTuring.describeTuring.dimTuring.discretediagTuring.dofTuring.enable_stack_copyingTuring.entropyTuring.estimateTuring.evalTuring.expected_logdetTuring.failprobTuring.fitTuring.fit_mapTuring.fit_map!Turing.fit_mleTuring.fit_mle!Turing.freecumulantTuring.gelmandiagTuring.getTuring.get_defaultsTuring.get_dvarsTuring.get_pvarsTuring.getindexTuring.gewekediagTuring.gradlogpdfTuring.hasfinitesupportTuring.heideldiagTuring.histogramplotTuring.in_dvarsTuring.in_pvarsTuring.includeTuring.insupportTuring.invcovTuring.invlogccdfTuring.invlogcdfTuring.invscaleTuring.isboundedTuring.isleptokurticTuring.islowerboundedTuring.ismesokurticTuring.isplatykurticTuring.isprobvecTuring.isupperboundedTuring.kdeTuring.kurtosisTuring.locationTuring.location!Turing.logccdfTuring.logcdfTuring.logdetcovTuring.loglikelihoodTuring.logpdfTuring.logpdf!Turing.meanTuring.meandirTuring.meanformTuring.meanlogxTuring.meanplotTuring.meanplot!Turing.medianTuring.mgfTuring.mixeddensityTuring.mixeddensity!Turing.mixeddensityplotTuring.modeTuring.modesTuring.momentTuring.ncategoriesTuring.ncomponentsTuring.nsamplesTuring.ntrialsTuring.paramsTuring.params!Turing.partypeTuring.pdfTuring.plotTuring.probsTuring.probvalTuring.produceTuring.qqbuildTuring.quantileTuring.rafterydiagTuring.rateTuring.resumeTuring.runmodel!Turing.sampleTuring.sample!Turing.samplerTuring.scaleTuring.scale!Turing.setadbackendTuring.setadsafeTuring.setchunksizeTuring.setindex!Turing.shapeTuring.skewnessTuring.spanTuring.sqmahalTuring.sqmahal!Turing.stdTuring.stdlogxTuring.succprobTuring.suffstatsTuring.supportTuring.test_distrTuring.test_samplesTuring.tfillTuring.traceplotTuring.traceplot!Turing.turnprogressTuring.tzerosTuring.varTuring.varlogxTuring.wsampleTuring.wsample!"
},

]}
