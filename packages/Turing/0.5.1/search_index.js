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
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: Turing) (Image: Turing) (Image: Documentation)News: Turing.jl is now Julia 1.0 compatible now! Be aware that some things still might fail.Turing.jl is a Julia library for (universal) probabilistic programming. Current features include:Universal probabilistic programming with an intuitive modelling interface\nHamiltonian Monte Carlo (HMC) sampling for differentiable posterior distributions\nParticle MCMC sampling for complex posterior distributions involving discrete variables and stochastic control flows\nGibbs sampling that combines particle MCMC,  HMC and many other MCMC algorithmsHere\'s a simple example showing the package in action:using Turing\nusing Plots\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x, y) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0,sqrt(s))\n  x ~ Normal(m, sqrt(s))\n  y ~ Normal(m, sqrt(s))\n  return s, m\nend\n\n#  Run sampler, collect results\nc1 = sample(gdemo(1.5, 2), SMC(1000))\nc2 = sample(gdemo(1.5, 2), PG(10,1000))\nc3 = sample(gdemo(1.5, 2), HMC(1000, 0.1, 5))\nc4 = sample(gdemo(1.5, 2), Gibbs(1000, PG(10, 2, :m), HMC(2, 0.1, 5, :s)))\nc5 = sample(gdemo(1.5, 2), HMCDA(1000, 0.15, 0.65))\nc6 = sample(gdemo(1.5, 2), NUTS(1000,  0.65))\n\n# Summarise results (currently requires the master branch from MCMCChain)\ndescribe(c3)\n\n# Plot and save results \np = plot(c3)\nsavefig(\"gdemo-plot.png\")"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Turing was originally created and is now managed by Hong Ge. Current and past Turing team members include Hong Ge, Adam Scibior, Matej Balog, Zoubin Ghahramani, Kai Xu, Emma Smith, Emile Mathieu, Martin Trapp.  You can see the full list of on Github: https://github.com/TuringLang/Turing.jl/graphs/contributors. Turing is an open source project so if you feel you have some relevant skills and are interested in contributing then please do get in touch. See the Contribute wiki page for details on the process. You can contribute by opening issues on Github or implementing things yourself and making a pull request. We would also appreciate example models written using Turing."
},

{
    "location": "#Citing-Turing.jl-1",
    "page": "Readme",
    "title": "Citing Turing.jl",
    "category": "section",
    "text": "To cite Turing, please refer to the technical report. Sample BibTeX entry is given below:@inproceedings{turing18,\n  title={{T}uring: a language for flexible probabilistic inference},\n  author={Ge, Hong and Xu, Kai and Ghahramani, Zoubin},\n  booktitle={International Conference on Artificial Intelligence and Statistics},\n  pages={1682--1690},\n  year={2018}\n}"
},

{
    "location": "autodocs/#Turing.@VarName",
    "page": "Docstrings",
    "title": "Turing.@VarName",
    "category": "macro",
    "text": "Usage: @VarName x[1,2][1+5][45][3]   return: (:x,[1,2],6,45,3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.@model",
    "page": "Docstrings",
    "title": "Turing.@model",
    "category": "macro",
    "text": "@model(name, fbody)\n\nMacro to specify a probabilistic model.\n\nExample:\n\n@model Gaussian(x) = begin\n    s ~ InverseGamma(2,3)\n    m ~ Normal(0,sqrt.(s))\n    for i in 1:length(x)\n        x[i] ~ Normal(m, sqrt.(s))\n    end\n    return (s, m)\nend\n\nCompiler design: sample(fname(x,y), sampler).\n\nfname(x=nothing,y=nothing; compiler=compiler) = begin\n    ex = quote\n        # Pour in kwargs for those args where value != nothing.\n        fname_model(vi::VarInfo, sampler::Sampler; x = x, y = y) = begin\n            vi.logp = zero(Real)\n          \n            # Pour in model definition.\n            x ~ Normal(0,1)\n            y ~ Normal(x, 1)\n            return x, y\n        end\n    end\n    return Main.eval(ex)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.@~",
    "page": "Docstrings",
    "title": "Turing.@~",
    "category": "macro",
    "text": "macro: @~ var Distribution()\n\nTilde notation macro. This macro constructs Turing.observe or Turing.assume calls depending on the left-hand argument. Note that the macro is interconnected with the @model macro and assumes that a compiler struct is available.\n\nExample:\n\n@~ x Normal()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Chain",
    "page": "Docstrings",
    "title": "Turing.Chain",
    "category": "type",
    "text": "Chain(weight::Float64, value::Array{Sample})\n\nA wrapper of output trajactory of samplers.\n\nExample:\n\n# Define a model\n@model xxx begin\n  ...\n  return(mu,sigma)\nend\n\n# Run the inference engine\nchain = sample(xxx, SMC(1000))\n\nchain[:logevidence]   # show the log model evidence\nchain[:mu]            # show the weighted trajactory for :mu\nchain[:sigma]         # show the weighted trajactory for :sigma\nmean(chain[:mu])      # find the mean of :mu\nmean(chain[:sigma])   # find the mean of :sigma\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Gibbs",
    "page": "Docstrings",
    "title": "Turing.Gibbs",
    "category": "type",
    "text": "Gibbs(n_iters, alg_1, alg_2)\n\nCompositional MCMC interface.\n\nExample:\n\nalg = Gibbs(1000, HMC(1, 0.2, 3, :v1), PG(20, 1, :v2))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.HMC",
    "page": "Docstrings",
    "title": "Turing.HMC",
    "category": "type",
    "text": "HMC(n_iters::Int, epsilon::Float64, tau::Int)\n\nHamiltonian Monte Carlo sampler.\n\nUsage:\n\nHMC(1000, 0.05, 10)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n    s ~ InverseGamma(2,3)\n    m ~ Normal(0, sqrt(s))\n    x[1] ~ Normal(m, sqrt(s))\n    x[2] ~ Normal(m, sqrt(s))\n    return s, m\nend\n\nsample(gdemo([1.5, 2]), HMC(1000, 0.05, 10))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.HMCDA",
    "page": "Docstrings",
    "title": "Turing.HMCDA",
    "category": "type",
    "text": "HMCDA(n_iters::Int, n_adapt::Int, delta::Float64, lambda::Float64)\n\nHamiltonian Monte Carlo sampler wiht Dual Averaging algorithm.\n\nUsage:\n\nHMCDA(1000, 200, 0.65, 0.3)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0, sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), HMCDA(1000, 200, 0.65, 0.3))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.HamiltonianRobustInit",
    "page": "Docstrings",
    "title": "Turing.HamiltonianRobustInit",
    "category": "type",
    "text": "Robust initialization method for model parameters in Hamiltonian samplers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.IPMCMC",
    "page": "Docstrings",
    "title": "Turing.IPMCMC",
    "category": "type",
    "text": "IPMCMC(n_particles::Int, n_iters::Int, n_nodes::Int, n_csmc_nodes::Int)\n\nParticle Gibbs sampler.\n\nUsage:\n\nIPMCMC(100, 100, 4, 2)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0,sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), IPMCMC(100, 100, 4, 2))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.IS",
    "page": "Docstrings",
    "title": "Turing.IS",
    "category": "type",
    "text": "IS(n_particles::Int)\n\nImportance sampling algorithm object.\n\nn_particles is the number of particles to use\n\nUsage:\n\nIS(1000)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n    s ~ InverseGamma(2,3)\n    m ~ Normal(0,sqrt.(s))\n    x[1] ~ Normal(m, sqrt.(s))\n    x[2] ~ Normal(m, sqrt.(s))\n    return s, m\nend\n\nsample(gdemo([1.5, 2]), IS(1000))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.MH",
    "page": "Docstrings",
    "title": "Turing.MH",
    "category": "type",
    "text": "MH(n_iters::Int)\n\nMetropolis-Hasting sampler.\n\nUsage:\n\nMH(100, (:m, (x) -> Normal(x, 0.1)))\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0,sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), MH(1000, (:m, (x) -> Normal(x, 0.1)), :s)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.NUTS",
    "page": "Docstrings",
    "title": "Turing.NUTS",
    "category": "type",
    "text": "NUTS(n_iters::Int, n_adapt::Int, delta::Float64)\n\nNo-U-Turn Sampler (NUTS) sampler.\n\nUsage:\n\nNUTS(1000, 200, 0.6j_max)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0, sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.j_max, 2]), NUTS(1000, 200, 0.6j_max))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.PG",
    "page": "Docstrings",
    "title": "Turing.PG",
    "category": "type",
    "text": "PG(n_particles::Int, n_iters::Int)\n\nParticle Gibbs sampler.\n\nUsage:\n\nPG(100, 100)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0, sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), PG(100, 100))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.PMMH",
    "page": "Docstrings",
    "title": "Turing.PMMH",
    "category": "type",
    "text": "PMMH(n_iters::Int, smc_alg:::SMC, parameters_algs::Tuple{MH})\n\nParticle independant Metropolis–Hastings and Particle marginal Metropolis–Hastings samplers.\n\nUsage:\n\nalg = PMMH(100, SMC(20, :v1), MH(1,:v2))\nalg = PMMH(100, SMC(20, :v1), MH(1,(:v2, (x) -> Normal(x, 1))))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.ParticleContainer",
    "page": "Docstrings",
    "title": "Turing.ParticleContainer",
    "category": "type",
    "text": "Data structure for particle filters\n\neffectiveSampleSize(pc :: ParticleContainer)\nnormalise!(pc::ParticleContainer)\nconsume(pc::ParticleContainer): return incremental likelihood\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.SGHMC",
    "page": "Docstrings",
    "title": "Turing.SGHMC",
    "category": "type",
    "text": "SGHMC(n_iters::Int, learning_rate::Float64, momentum_decay::Float64)\n\nStochastic Gradient Hamiltonian Monte Carlo sampler.\n\nUsage:\n\nSGHMC(1000, 0.01, 0.1)\n\nExample:\n\n@model example begin\n  ...\nend\n\nsample(example, SGHMC(1000, 0.01, 0.1))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.SGLD",
    "page": "Docstrings",
    "title": "Turing.SGLD",
    "category": "type",
    "text": "SGLD(n_iters::Int, step_size::Float64)\n\nStochastic Gradient Langevin Dynamics sampler.\n\nUsage:\n\nSGLD(1000, 0.5)\n\nExample:\n\n@model example begin\n  ...\nend\n\nsample(example, SGLD(1000, 0.5))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.SMC",
    "page": "Docstrings",
    "title": "Turing.SMC",
    "category": "type",
    "text": "SMC(n_particles::Int)\n\nSequential Monte Carlo sampler.\n\nUsage:\n\nSMC(1000)\n\nExample:\n\n# Define a simple Normal model with unknown mean and variance.\n@model gdemo(x) = begin\n  s ~ InverseGamma(2,3)\n  m ~ Normal(0, sqrt(s))\n  x[1] ~ Normal(m, sqrt(s))\n  x[2] ~ Normal(m, sqrt(s))\n  return s, m\nend\n\nsample(gdemo([1.5, 2]), SMC(1000))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.Sampler",
    "page": "Docstrings",
    "title": "Turing.Sampler",
    "category": "type",
    "text": "Sampler{T}\n\nGeneric interface for implementing inference algorithms. An implementation of an algorithm should include the following:\n\nA type specifying the algorithm and its parameters, derived from InferenceAlgorithm\nA method of sample function that produces results of inference, which is where actual inference happens.\n\nTuring translates models to chunks that call the modelling functions at specified points. The dispatch is based on the value of a sampler variable. To include a new inference algorithm implements the requirements mentioned above in a separate file, then include that file at the end of this one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing._build_tree",
    "page": "Docstrings",
    "title": "Turing._build_tree",
    "category": "function",
    "text": "function buildtree(θ::T, r::AbstractVector, logu::AbstractFloat, v::Int, j::Int, ϵ::AbstractFloat,                        H0::AbstractFloat,ljfunc::Function, gradfunc::Function, stds::AbstractVector;                        Δ_max::AbstractFloat=1000) where {T<:Union{Vector,SubArray}}\n\nRecursively build balanced tree.\n\nRef: Algorithm 6 on http://www.stat.columbia.edu/~gelman/research/published/nuts.pdf\n\nArguments:\n\nθ         : model parameter\nr         : momentum variable\nlogu      : slice variable (in log scale)\nv         : direction ∈ {-1, 1}\nj         : depth of tree\nϵ         : leapfrog step size\nH0        : initial H\nlj_func   : function for log-joint\ngrad_func : function for the gradient of log-joint\nstds      : pre-conditioning matrix\nΔ_max     : threshold for exploeration error tolerance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing._nuts_step",
    "page": "Docstrings",
    "title": "Turing._nuts_step",
    "category": "function",
    "text": "function nutsstep(θ::T, ϵ::AbstractFloat, ljfunc::Function, gradfunc::Function, stds::AbstractVector;                       jmax::Int=jmax) where {T<:Union{AbstractVector,SubArray}}\n\nPerform one NUTS step.\n\nRef: Algorithm 6 on http://www.stat.columbia.edu/~gelman/research/published/nuts.pdf\n\nArguments:\n\nθ         : model parameter\nϵ         : leapfrog step size\nlj_func   : function for log-joint\ngrad_func : function for the gradient of log-joint\nstds      : pre-conditioning matrix\nj_max     : maximum expanding of doubling tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.data",
    "page": "Docstrings",
    "title": "Turing.data",
    "category": "function",
    "text": "data(dict::Dict, keys::Vector{Symbol})\n\nConstruct a tuple with values filled according to dict and keys according to keys.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.gen_grad_func",
    "page": "Docstrings",
    "title": "Turing.gen_grad_func",
    "category": "function",
    "text": "gen_grad_func(vi::VarInfo, sampler::Sampler, model)\n\nGenerate a function that takes a vector of reals θ and compute the logpdf and gradient at θ for the model specified by (vi, sampler, model).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.gen_lj_func",
    "page": "Docstrings",
    "title": "Turing.gen_lj_func",
    "category": "function",
    "text": "gen_lj_func(vi::VarInfo, sampler::Sampler, model)\n\nGenerate a function that takes θ and returns logpdf at θ for the model specified by (vi, sampler, model).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.gen_log_func",
    "page": "Docstrings",
    "title": "Turing.gen_log_func",
    "category": "function",
    "text": "gen_log_func(sampler::Sampler)\n\nGenerate a function that takes no argument and performs logging for the number of leapfrog steps used in sampler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.gen_rev_func",
    "page": "Docstrings",
    "title": "Turing.gen_rev_func",
    "category": "function",
    "text": "genrevfunc(vi::VarInfo, sampler::Sampler)\n\nGenerate a function on (θ, logp) that sets the variables referenced by sampler to θ and the current vi.logp to logp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.generate_assume",
    "page": "Docstrings",
    "title": "Turing.generate_assume",
    "category": "function",
    "text": "generate_assume(variable, distribution, syms)\n\nGenerate an assume expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.generate_observe",
    "page": "Docstrings",
    "title": "Turing.generate_observe",
    "category": "function",
    "text": "generate_observe(observation, distribution)\n\nGenerate an observe expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.gradient_forward",
    "page": "Docstrings",
    "title": "Turing.gradient_forward",
    "category": "function",
    "text": "gradientforward(     θ::AbstractVector{<:Real},     vi::VarInfo,     model::Function,     spl::Union{Nothing, Sampler}=nothing,     chunksize::Int=CHUNKSIZE[], )\n\nComputes the gradient of the log joint of θ for the model specified by (vi, spl, model) using forwards-mode AD from ForwardDiff.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.gradient_reverse",
    "page": "Docstrings",
    "title": "Turing.gradient_reverse",
    "category": "function",
    "text": "gradient_reverse(     θ::AbstractVector{<:Real},     vi::VarInfo,     model::Function,     sampler::Union{Nothing, Sampler}=nothing, )\n\nComputes the gradient of the log joint of θ for the model specified by (vi, sampler, model) using reverse-mode AD from Flux.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Turing.mh_accept",
    "page": "Docstrings",
    "title": "Turing.mh_accept",
    "category": "function",
    "text": "mh_accept(H::Real, H_new::Real)\nmh_accept(H::Real, H_new::Real, log_proposal_ratio::Real)\n\nPeform MH accept criteria. Returns a boolean for whether or not accept and the  acceptance ratio in log space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Turing.+Turing.-Turing.@VarNameTuring.@modelTuring.@sym_strTuring.@~Turing.ADBACKENDTuring.ADSAFETuring.AbstractMixtureModelTuring.AbstractMvNormalTuring.AbstractSamplerTuring.AnySamplerTuring.ArcsineTuring.BernoulliTuring.BetaTuring.BetaBinomialTuring.BetaPrimeTuring.BinomialTuring.BiweightTuring.CACHEIDCSTuring.CACHERANGESTuring.CACHERESETTuring.CHUNKSIZETuring.CSMCTuring.CategoricalTuring.CauchyTuring.ChainTuring.ChainsTuring.ChiTuring.ChisqTuring.ContinuousTuring.ContinuousDistributionTuring.ContinuousMatrixDistributionTuring.ContinuousMultivariateDistributionTuring.ContinuousUnivariateDistributionTuring.CosineTuring.DEFAULT_ADAPT_CONF_TYPETuring.DiagNormalTuring.DiagNormalCanonTuring.DirichletTuring.DirichletMultinomialTuring.DiscreteTuring.DiscreteDistributionTuring.DiscreteMatrixDistributionTuring.DiscreteMultivariateDistributionTuring.DiscreteUniformTuring.DiscreteUnivariateDistributionTuring.DistributionTuring.DistributionsTuring.DoubleExponentialTuring.DynamicNUTSTuring.EdgeworthMeanTuring.EdgeworthSumTuring.EdgeworthZTuring.EmpiricalUnivariateDistributionTuring.EpanechnikovTuring.ErlangTuring.EstimatorTuring.ExponentialTuring.FDistTuring.FisherNoncentralHypergeometricTuring.FlatTuring.FlatPosTuring.FrechetTuring.FullNormalTuring.FullNormalCanonTuring.GammaTuring.GeneralizedExtremeValueTuring.GeneralizedParetoTuring.GeometricTuring.GibbsTuring.GibbsComponentTuring.GumbelTuring.HMCTuring.HMCDATuring.HamiltonianTuring.HamiltonianRobustInitTuring.HypergeometricTuring.IArrayTuring.IPMCMCTuring.ISTuring.InferenceAlgorithmTuring.InverseGammaTuring.InverseGaussianTuring.InverseWishartTuring.IsoNormalTuring.IsoNormalCanonTuring.KSDistTuring.KSOneSidedTuring.KolmogorovTuring.LaplaceTuring.LevyTuring.LocationScaleTuring.LogNormalTuring.LogisticTuring.MCMCChainTuring.MHTuring.MLEstimatorTuring.MatrixDistributionTuring.MatrixvariateTuring.MixtureModelTuring.MultinomialTuring.MultivariateTuring.MultivariateDistributionTuring.MultivariateMixtureTuring.MultivariateNormalTuring.MvLogNormalTuring.MvNormalTuring.MvNormalCanonTuring.MvNormalKnownCovTuring.MvTDistTuring.NUTSTuring.NegativeBinomialTuring.NonMatrixDistributionTuring.NoncentralBetaTuring.NoncentralChisqTuring.NoncentralFTuring.NoncentralHypergeometricTuring.NoncentralTTuring.NormalTuring.NormalCanonTuring.NormalInverseGaussianTuring.PGTuring.PIMHTuring.PMMHTuring.PROGRESSTuring.ParetoTuring.ParticleTuring.ParticleContainerTuring.PoissonTuring.PoissonBinomialTuring.QQPairTuring.RayleighTuring.RealIntervalTuring.SGHMCTuring.SGLDTuring.SMCTuring.STAN_DEFAULT_ADAPT_CONFTuring.SampleTuring.SampleFromPriorTuring.SampleableTuring.SamplerTuring.SemicircleTuring.SkellamTuring.SufficientStatsTuring.SymTriangularDistTuring.TArrayTuring.TDistTuring.TraceTuring.TransformableTuring.TriangularDistTuring.TriweightTuring.TruncatedTuring.TruncatedNormalTuring.TuringTuring.UniformTuring.UnivariateTuring.UnivariateDistributionTuring.UnivariateGMMTuring.UnivariateMixtureTuring.ValueSupportTuring.VarEstimatorTuring.VarReplayTuring.VariateFormTuring.VonMisesTuring.VonMisesFisherTuring.WalleniusNoncentralHypergeometricTuring.WarmUpManagerTuring.WeibullTuring.WishartTuring.ZeroMeanDiagNormalTuring.ZeroMeanDiagNormalCanonTuring.ZeroMeanFullNormalTuring.ZeroMeanFullNormalCanonTuring.ZeroMeanIsoNormalTuring.ZeroMeanIsoNormalCanonTuring.__init__Turing.__inits__Turing._build_treeTuring._find_HTuring._hmc_stepTuring._leapfrogTuring._nuts_stepTuring._sample_momentumTuring.adapt!Turing.adapt_step_size!Turing.add_sample!Turing.assumeTuring.autcorplotTuring.auto_tune_chunk_size!Turing.autocorplotTuring.autocorplot!Turing.binaryentropyTuring.canonformTuring.ccdfTuring.cdfTuring.cfTuring.cgfTuring.circvarTuring.componentTuring.componentsTuring.componentwise_logpdfTuring.componentwise_pdfTuring.compute_next_windowTuring.concentrationTuring.consumeTuring.corTuring.cornerTuring.corner!Turing.covTuring.cquantileTuring.cumulantTuring.current_traceTuring.dataTuring.data_insertionTuring.densityplotTuring.describeTuring.dimTuring.discretediagTuring.dofTuring.effectiveSampleSizeTuring.entropyTuring.estimateTuring.evalTuring.expected_logdetTuring.failprobTuring.find_HTuring.find_good_epsTuring.fitTuring.fit_mapTuring.fit_map!Turing.fit_mleTuring.fit_mle!Turing.flattenTuring.flatten!Turing.forkTuring.forkrTuring.freecumulantTuring.gelmandiagTuring.gen_grad_funcTuring.gen_lj_funcTuring.gen_log_funcTuring.gen_rev_funcTuring.generate_assumeTuring.generate_observeTuring.get_varTuring.getindexTuring.getjuliatypeTuring.getsampleTuring.getvsymTuring.gewekediagTuring.gradient_forwardTuring.gradient_reverseTuring.gradlogpdfTuring.hasfinitesupportTuring.heideldiagTuring.histogramplotTuring.in_adaptationTuring.includeTuring.increase_logevidenceTuring.increase_logweightTuring.ind2subTuring.initTuring.init_warm_up_paramsTuring.inittransTuring.insupportTuring.invcovTuring.invlogccdfTuring.invlogcdfTuring.invscaleTuring.is_window_endTuring.isboundedTuring.isleptokurticTuring.islowerboundedTuring.ismesokurticTuring.isplatykurticTuring.isprobvecTuring.isupperboundedTuring.kdeTuring.kurtosisTuring.leapfrogTuring.localcopyTuring.locationTuring.location!Turing.logccdfTuring.logcdfTuring.logdetcovTuring.loglikelihoodTuring.logpdfTuring.logpdf!Turing.meanTuring.meandirTuring.meanformTuring.meanlogxTuring.meanplotTuring.meanplot!Turing.medianTuring.mgfTuring.mh_acceptTuring.mixeddensityTuring.mixeddensity!Turing.mixeddensityplotTuring.modeTuring.modesTuring.momentTuring.ncategoriesTuring.ncomponentsTuring.nsamplesTuring.ntrialsTuring.observeTuring.paramsTuring.params!Turing.partypeTuring.pdfTuring.plotTuring.probsTuring.probvalTuring.produceTuring.proposeTuring.qqbuildTuring.quantileTuring.rafterydiagTuring.randcatTuring.randrealuniTuring.rateTuring.reconstructTuring.reconstruct!Turing.require_gradientTuring.require_particlesTuring.resampleTuring.resample!Turing.resampleMultinomialTuring.resampleResidualTuring.resampleStratifiedTuring.resampleSystematicTuring.reset!Turing.restart_daTuring.resumeTuring.runmodel!Turing.sampleTuring.sample!Turing.sample_momentumTuring.samplerTuring.save!Turing.scaleTuring.scale!Turing.setadbackendTuring.setadsafeTuring.setchunksizeTuring.setindex!Turing.setkwargsTuring.shapeTuring.skewnessTuring.spanTuring.sqmahalTuring.sqmahal!Turing.stdTuring.stdlogxTuring.stepTuring.succprobTuring.suffstatsTuring.supportTuring.test_distrTuring.test_samplesTuring.tildeTuring.traceplotTuring.traceplot!Turing.translateTuring.translate!Turing.turnprogressTuring.tzerosTuring.update_da_μTuring.update_pre_cond!Turing.varTuring.var_tupleTuring.varlogxTuring.vectorizeTuring.verifygradTuring.weightsTuring.wsampleTuring.wsample!"
},

]}
