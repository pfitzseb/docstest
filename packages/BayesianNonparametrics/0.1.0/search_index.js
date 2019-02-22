var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BayesianNonparametrics.jl-1",
    "page": "Readme",
    "title": "BayesianNonparametrics.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)BayesianNonparametrics is a Julia package implementing state-of-the-art Bayesian nonparametric models for medium-sized unsupervised problems. The software package brings Bayesian nonparametrics to non-specialists allowing the widespread use of Bayesian nonparametric models. Emphasis is put on consistency, performance and ease of use allowing easy access to Bayesian nonparametric models inside Julia.BayesianNonparametrics allows you toexplain discrete or continous data using: Dirichlet Process Mixtures or Hierarchical Dirichlet Process Mixtures\nanalyse variable dependencies using: Variable Clustering Model\nfit multivariate or univariate distributions for discrete or continous data with conjugate priors\ncompute point estimtates of Dirichlet Process Mixtures posterior samples"
},

{
    "location": "#News-1",
    "page": "Readme",
    "title": "News",
    "category": "section",
    "text": "BayesianNonparametrics is Julia 0.7  / 1.0 compatible"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install the package into your running Julia installation using Julia\'s package manager, i.e.pkg> add BayesianNonparametrics"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Documentation is available in Markdown: documentation"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "The following example illustrates the use of BayesianNonparametrics for clustering of continuous observations using a Dirichlet Process Mixture of Gaussians. After loading the package:using BayesianNonparametricswe can generate a 2D synthetic dataset (or use a multivariate continuous dataset of interest)(X, Y) = bloobs(randomize = false)and construct the parameters of our base distribution:μ0 = vec(mean(X, dims = 1))\nκ0 = 5.0\nν0 = 9.0\nΣ0 = cov(X)\nH = WishartGaussian(μ0, κ0, ν0, Σ0)After defining the base distribution we can specify the model:model = DPM(H)which is in this case a Dirichlet Process Mixture. Each model has to be initialised, one possible initialisation approach for Dirichlet Process Mixtures is a k-Means initialisation:modelBuffer = init(X, model, KMeansInitialisation(k = 10))The resulting buffer object can now be used to apply posterior inference on the model given X. In the following we apply Gibbs sampling for 500 iterations without burn in or thining:models = train(modelBuffer, DPMHyperparam(), Gibbs(maxiter = 500))You shoud see the progress of the sampling process in the command line. After applying Gibbs sampling, it is possible explore the posterior based on their posterior densities,densities = map(m -> m.energy, models)number of active componentsactiveComponents = map(m -> sum(m.weights .> 0), models)or the groupings of the observations:assignments = map(m -> m.assignments, models)The following animation illustrates posterior samples obtained by a Dirichlet Process Mixture: (Image: alt text)Alternatively, one can compute a point estimate based on the posterior similarity matrix:A = reduce(hcat, assignments)\n(N, D) = size(X)\nPSM = ones(N, N)\nM = size(A, 2)\nfor i in 1:N\n  for j in 1:i-1\n    PSM[i, j] = sum(A[i,:] .== A[j,:]) / M\n    PSM[j, i] = PSM[i, j]\n  end\nendand find the optimal partition which minimizes the lower bound of the variation of information:mink = minimum(length(m.weights) for m in models)\nmaxk = maximum(length(m.weights) for m in models)\n(peassignments, _) = pointestimate(PSM, method = :average, mink = mink, maxk = maxk)The grouping wich minimizes the lower bound of the variation of information is illustrated in the following image: (Image: alt text)"
},

{
    "location": "autodocs/#BayesianNonparametrics.AbstractHyperparam",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.AbstractHyperparam",
    "category": "type",
    "text": "abstract Hyperparameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.AbstractModelBuffer",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.AbstractModelBuffer",
    "category": "type",
    "text": "Abstract Model Buffer Object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.AbstractModelData",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.AbstractModelData",
    "category": "type",
    "text": "Abstract Model Data Object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.DPMData",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.DPMData",
    "category": "type",
    "text": "Dirichlet Process Mixture Model Data Object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.DPMHyperparam",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.DPMHyperparam",
    "category": "type",
    "text": "Dirichlet Process Mixture Model Hyperparameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.GammaNormal",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.GammaNormal",
    "category": "type",
    "text": "GammaNormal(; μ0 = 0.0, λ0 = 1.0, α0 = 1.0, β0 = 1.0)\n\nNormal-Gamma distribution\n\nA Normal-Gamma distribution is the conjugate prior of a Normal distribution with unknown mean and precision.\n\nParamters\n\nμ0: location\nλ0 > 0: number of pseudo-observations\nα0 > 0\nβ0 > 0\n\nExample:\n\nd = GammaNormal()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.HDPData",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.HDPData",
    "category": "type",
    "text": "Hierarchical Dirichlet Process Mixture Model Data Object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.HDPHyperparam",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.HDPHyperparam",
    "category": "type",
    "text": "Hierarchical Dirichlet Process Mixture Model Hyperparameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.WishartGaussian",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.WishartGaussian",
    "category": "type",
    "text": "WishartGaussian(μ0, κ0, ν0, Σ0)\n\nGaussian-inverse-Wishart distribution\n\nA Gaussian-inverse-Wishart distribution is the conjugate prior of a multivariate normal distribution with unknown mean and covariance matrix.\n\nParameters\n\nμ0, Dx1: location\nκ0 > 0: number of pseudo-observations\nν0 > D-1: degrees of freedom\nΣ0 > 0, DxD: scale matrix\n\nExample\n\njulia> (N, D) = size(X)\njulia> μ0 = mean(X, dims = 1)\njulia> d = WishartGaussian(μ0, 1.0, 2*D, cov(x)) \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.add",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.add",
    "category": "function",
    "text": "add(d::ConjugatePostDistribution, X)\n\nAdd data to Posterior Distribution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.add!",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.add!",
    "category": "function",
    "text": "add!(d::ConjugatePostDistribution, X)\n\nAdd data to Posterior Distribution (inplace).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.gibbs!",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.gibbs!",
    "category": "function",
    "text": "Single iteration of collabsed Gibbs sampling using CRP.\n\n\n\n\n\nSingle Gibbs sweep of HDP training using beta variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.init",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.init",
    "category": "function",
    "text": "HDP initialization using random assignments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.isdistempty",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.isdistempty",
    "category": "function",
    "text": "isdistempty(d::ConjugatePostDistribution)\n\nCheck if distribution is empty (contains no samples).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.logpostpred",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.logpostpred",
    "category": "function",
    "text": "logpostpred(d::ConjugatePostDistribution, X)\n\nCompute log posterior predictive.\n\n\n\n\n\nLog PMF for MultinomialDirichlet.\n\n\n\n\n\nLog PMF for MultinomialDirichlet.\n\n\n\n\n\nLog PMF for BernoulliBeta.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.point_estimate_hclust",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.point_estimate_hclust",
    "category": "function",
    "text": "point_estimate_avg(psm::Array{Float64, 2})\n\nFind optimal partition which minimizes the lower bound to the Variation of Information obtain from Jensen\'s inequality where the expectation and log are reversed.\n\nCode based on R implementation by Sara Wade <sara.wade@eng.cam.ac.uk>\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.pointestimate",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.pointestimate",
    "category": "function",
    "text": "point_estimate(psm::Array{Float64, 2})\n\nFind optimal partition which minimizes the lower bound to the Variation of Information obtain from Jensen\'s inequality where the expectation and log are reversed.\n\nCode based on R implementation by Sara Wade <sara.wade@eng.cam.ac.uk>\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.posteriorParameters",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.posteriorParameters",
    "category": "function",
    "text": "posteriorParameters(d::ConjugatePostDistribution)\n\nCompute posterior distribution parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.randomindex",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.randomindex",
    "category": "function",
    "text": "randomindex(p::Vector{Float64})\n\nRandomly select an index propotional to its probability.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.remove",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.remove",
    "category": "function",
    "text": "remove(d::ConjugatePostDistribution, X::AbstractArray)\n\nRemove data from Posterior Distribution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.remove!",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.remove!",
    "category": "function",
    "text": "remove!(d::ConjugatePostDistribution, X)\n\nRemove data from Posterior Distribution (inplace).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.resampleα",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.resampleα",
    "category": "function",
    "text": "resampleα(α::Float64, N::Int, K::Int)\n\nResample α given the approach by Escobar and West. (page 585)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.tlogpdf",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.tlogpdf",
    "category": "function",
    "text": "Log PDF of Generalized student-t Distribution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.updateenergy!",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.updateenergy!",
    "category": "function",
    "text": "Compute Energy of model for given data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianNonparametrics.variation_of_information_lb",
    "page": "Docstrings",
    "title": "BayesianNonparametrics.variation_of_information_lb",
    "category": "function",
    "text": "variation_of_information_lb()\n\nComputes the lower bound to the posterior expected Variation of Information.\n\n\n\n\n\nvariation_of_information_lb()\n\nComputes the lower bound to the posterior expected Variation of Information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BayesianNonparametrics.AbstractHyperparamBayesianNonparametrics.AbstractModelBufferBayesianNonparametrics.AbstractModelDataBayesianNonparametrics.BayesianNonparametricsBayesianNonparametrics.BetaBernoulliBayesianNonparametrics.ConjugatePostDistributionBayesianNonparametrics.ContinuousMultivariateConjugatePostDistributionBayesianNonparametrics.ContinuousUnivariateConjugatePostDistributionBayesianNonparametrics.DPMBayesianNonparametrics.DPMBufferBayesianNonparametrics.DPMDataBayesianNonparametrics.DPMHyperparamBayesianNonparametrics.DirichletCategoricalBayesianNonparametrics.DirichletMultinomialBayesianNonparametrics.DiscreteMultivariateConjugatePostDistributionBayesianNonparametrics.DiscreteUnivariateConjugatePostDistributionBayesianNonparametrics.GammaNormalBayesianNonparametrics.GaussianDiagonalBayesianNonparametrics.GibbsBayesianNonparametrics.HDPBayesianNonparametrics.HDPBufferBayesianNonparametrics.HDPDataBayesianNonparametrics.HDPHyperparamBayesianNonparametrics.IncrementalInitialisationBayesianNonparametrics.InitialisationTypeBayesianNonparametrics.KMeansInitialisationBayesianNonparametrics.ModelTypeBayesianNonparametrics.MultivariateConjugatePostDistributionBayesianNonparametrics.NormalNormalBayesianNonparametrics.PosteriorInferenceBayesianNonparametrics.PrecomputedInitialisationBayesianNonparametrics.RandomInitialisationBayesianNonparametrics.SliceSamplerBayesianNonparametrics.UnivariateConjugatePostDistributionBayesianNonparametrics.VCMBayesianNonparametrics.WishartGaussianBayesianNonparametrics.addBayesianNonparametrics.add!BayesianNonparametrics.barsBayesianNonparametrics.bloobsBayesianNonparametrics.evalBayesianNonparametrics.extractpointestimateBayesianNonparametrics.gibbs!BayesianNonparametrics.includeBayesianNonparametrics.initBayesianNonparametrics.isdistemptyBayesianNonparametrics.logpostpredBayesianNonparametrics.point_estimate_hclustBayesianNonparametrics.pointestimateBayesianNonparametrics.posteriorParametersBayesianNonparametrics.randnumtableBayesianNonparametrics.randomindexBayesianNonparametrics.removeBayesianNonparametrics.remove!BayesianNonparametrics.resampleαBayesianNonparametrics.sampleparameters!BayesianNonparametrics.slicemapBayesianNonparametrics.slicesampling!BayesianNonparametrics.tlogpdfBayesianNonparametrics.trainBayesianNonparametrics.updateenergy!BayesianNonparametrics.variation_of_information_lbBayesianNonparametrics.variationalbayes!"
},

]}
