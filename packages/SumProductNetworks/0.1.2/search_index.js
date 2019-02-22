var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Sum-Product-Networks-in-Julia-1",
    "page": "Readme",
    "title": "Sum-Product Networks in Julia",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This software package implements the tractable probabilistic model sum-product network (SPN) in Julia.  The package provides a clean and modular interface for SPNs and implements various helper and utility functions to efficienty work with SPN models."
},

{
    "location": "#News-1",
    "page": "Readme",
    "title": "News",
    "category": "section",
    "text": "18.10.2018 - The package is officialy registered.\n10.10.2018 - The package now provides more efficient logpdf routines and allows for multithreaded computations.\n24.09.2018 - SumProductNetworks now works under Julia 1.0. "
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Make sure you have Julia 1.0 running. The package can be installed using Julia\'s package mode. (You can enter the package mode by typing ] in the REPL.)pkg> add SumProductNetworks"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The following minimal example illustrates the use of the package.using SumProductNetworks\n\n# Create a root sum node.\nroot = FiniteSumNode();\n\n# Add two product nodes to the root.\nadd!(root, FiniteProductNode(), log(0.3)); # Use a weight of 0.3\nadd!(root, FiniteProductNode(), log(0.7)); # Use a weight of 0.7\n\n# Add Normal distributions to the product nodes, i.e. leaves.\nfor prod in children(root)\n    for d in 1:2 # Assume 2-D data\n        add!(prod, UnivariateNode(Normal(), d));\n    end\nend\n\n# Compile the constructed network to an SPN type\nspn = SumProductNetwork(root);\n\n# Print statistics on the network.\nprintln(spn)\n\n# Update the scope of all nodes, i.e. propagate the scope bottom-up.\nupdatescope!(spn)\n\n# Evaluate the network on some data.\nx = [0.8, 1.2];\nlogp = logpdf(spn, x)\n\n# Save the network to a DOT file.\nexport_network(spn, \"mySPN.dot\")"
},

{
    "location": "#Advanced-Usage-1",
    "page": "Readme",
    "title": "Advanced Usage",
    "category": "section",
    "text": "Besides the basic functionality for nodes and SPNs, this package additionally provides helper functions that are useful for more advanced use-cases. The following examples illustrates a more advanced tasks.using SumProductNetworks\nusing AxisArrays\n\nN = 100\nD = 2\n\nx = rand(N, D)\n\n# Create a root sum node.\nroot = FiniteSumNode{Float32}();\n\n# Add two product nodes to the root.\nadd!(root, FiniteProductNode(), Float32(log(0.3))); # Use a weight of 0.3\nadd!(root, FiniteProductNode(), Float32(log(0.7))); # Use a weight of 0.7\n\n# Add Normal distributions to the product nodes, i.e. leaves.\nfor prod in children(root)\n    for d in 1:2 # Assume 2-D data\n        add!(prod, UnivariateNode(Normal(), d));\n    end\nend\n\n# Compile the constructed network to an SPN type\nspn = SumProductNetwork(root);\n\n# Compute the logpdf value for every node in the SPN.\nidx = Axis{:id}(collect(keys(spn)))\nllhvals = AxisArray(Matrix{Float32}(undef, N, length(spn)), 1:N, idx)\n\n# Compute logpdf values for all nodes in the network.\nlogpdf(spn, x; idx, llhvals)\n\n# Print the logpdf value for each leaf.\nfor node in spn.leaves\n    println(\"logpdf at $(node.id) = $(llhvals[:,node.id])\")\nend\n\n# Assign observations to their most likely child under a sum node.\nfunction assignobs!(node::SumNode, observations::Vector{Int})\n    j = argmax(llhvals[observations, map(c -> c.id, children(node))], dims = 2)\n\n    # Set observations to the node.\n    setobs!(node, observations)\n\n    # Set observations for the children of the node.\n    for k in length(node)\n        setobs!(node[k], observations[findall(j .== k)])\n    end\n\n    # Get the parametric type of the sum node, i.e. Float32.\n    T = eltype(node)\n\n    # Update the weights of the root.\n    w = map(c -> nobs(c) / nobs(node), children(node))\n    for k in 1:length(node)\n        logweights(node)[k] = T(log(w[k]))\n    end\nend\n\n# Call assignment function for the root.\nassignobs!(spn.root, collect(1:N))"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#Datatypes-1",
    "page": "Readme",
    "title": "Datatypes",
    "category": "section",
    "text": "The following types are implemented and supported in this package. The abstract type hierarchy is designed such that it is easy to extend the existing types and that efficient implementations using type dispatching is possible.# Abstract type hierarchy.\nSPNNode\nNode <: SPNNode\nLeaf <: SPNNode\nSumNode{T} <: Node\nProductNode <: Node\n\n# Node types.\nFiniteSumNode() <: SumNode\nFiniteProductNode() <: ProductNode\nIndicatorNode(value::Int, scope::Int) <: Leaf\nUnivariateNode(dist::UnivariateDistribution, scope::Int) <: Leaf\nMultivariateNode(dist::MultivariateDistribution, scope::Vector{Int}) <: LeafTo get more details on the individual node type, please use the internal documentation system of Julia.In addition to this types, the package also provides a composite type to represent an SPN, i.e.:SumProductNetwork(root::Node)"
},

{
    "location": "#Structure-Learning-1",
    "page": "Readme",
    "title": "Structure Learning",
    "category": "section",
    "text": "Utility functions for structure learning are currently not implemented in this package. An additional package providing a variety of structure learning algorithms will be provided soon.The interface for learning SPN structure is:generate_spn(X::Matrix, algo::Symbol; params...)"
},

{
    "location": "#Utility-Functions-on-an-SumProductNetwork-1",
    "page": "Readme",
    "title": "Utility Functions on an SumProductNetwork",
    "category": "section",
    "text": "The following utility functions can be used on an instance of a SumProductNetwork.# Get all nodes of the network in topological order.\nvalues(spn::SumProductNetwork)\n\n# Get the ids of all nodes in the network.\nkeys(spn::SumProductNetwork)\n\n# Number of nodes in the network.\nlength(spn::SumProductNetwork)\n\n# Indexing using an id.\nspn[id::Symbol]\n\n# Locally normalize an SPN.\nnormalize!(spn::SumProductNetwork)\n\n# Number of free parameters in the SPN.\ncomplexity(spn::SumProductNetwork)\n\n# Export the SPN to a DOT file.\nexport_network(spn::SumProductNetwork, filename::String)"
},

{
    "location": "#Utility-Functions-on-Nodes-1",
    "page": "Readme",
    "title": "Utility Functions on Nodes",
    "category": "section",
    "text": "The following utility functions can be used on an instance of an SPN Node.# Indexing an internal node returns the respective child.\nnode[i::Int]\n\n# Add a child to an internal node (with or without weight).\nadd!(node::Node, child::SPNNode)\nadd!(node::Node, child::SPNNode, logw::Real)\n\n# Remove a child from an internal node.\nremove!(node::Node, childIndex::Int)\n\n# The depth of the SPN rooted at the node.\ndepth(node::SPNNode)\n\n# Get all children of a node.\nchildren(node::Node)\n\n# Get the number of children of node.\nlength(node::Node)\n\n# Get all parents of a node.\nparents(node::SPNNode)\n\n# Has the node a weights field.\nhasweights(node::Node)\n\n# Get all weights of the node.\nweights(node::Node) = exp.(logweights(node))\n\n# Get all log weights of the node\nlogweights(node::Node)\n\n# Is the SPN rooted at the node normalized?\nisnormalized(node::SPNNode)"
},

{
    "location": "#General-utility-functions-1",
    "page": "Readme",
    "title": "General utility functions",
    "category": "section",
    "text": "The following functions are general utility functions.# Independence test by Margaritis and Thurn for discrete sets.\nbmitest(X::Vector{Int}, Y::Vector{Int})"
},

{
    "location": "#Contribute-1",
    "page": "Readme",
    "title": "Contribute",
    "category": "section",
    "text": "Feel free to open a PR if you want to contribute!"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Please consider citing any of the following publications if you use this package.Martin Trapp, Tamas Madl, Robert Peharz, Franz Pernkopf, Robert Trappl: Safe Semi-Supervised Learning of Sum-Product Networks. UAI 2017. pdf bibtex\nMartin Trapp, Robert Peharz, Marcin Skowron, Tamas Madl, Franz Pernkopf, Robert Trappl: Structure Inference in Sum-Product Networks using Infinite Sum-Product Trees. NIPS 2016 - Workshop on Practical Bayesian Nonparametrics. paper bibtex"
},

{
    "location": "autodocs/#SumProductNetworks.add!",
    "page": "Docstrings",
    "title": "SumProductNetworks.add!",
    "category": "function",
    "text": "Add a node to a finite sum node with given weight in place. add!(node::FiniteSumNode, child::SPNNode, weight<:Real)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.bmitest",
    "page": "Docstrings",
    "title": "SumProductNetworks.bmitest",
    "category": "function",
    "text": "Test if discrete sets are independent.\n\ntest(X, Y) -> p\n\nComputes the Independence Test by Margaritis and Thrun for X and Y.\nThe test returns the probability of X and Y being independent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.children",
    "page": "Docstrings",
    "title": "SumProductNetworks.children",
    "category": "function",
    "text": "children(node) -> children::SPNNode[]\n\nReturns the children of an internal node.\n\nParameters:\n\nnode::Node: Internal SPN node to be evaluated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.complexity",
    "page": "Docstrings",
    "title": "SumProductNetworks.complexity",
    "category": "function",
    "text": "complexity(S)\n\nCompute the complexity (number of free parameters) of the SPN rooted at S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.depth",
    "page": "Docstrings",
    "title": "SumProductNetworks.depth",
    "category": "function",
    "text": "depth(S)\n\nCompute the depth of the SPN rooted at S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.generate_spn",
    "page": "Docstrings",
    "title": "SumProductNetworks.generate_spn",
    "category": "function",
    "text": "generate_spn(X::Matrix, algo::Symbol; ...)\n\nGenerate an SPN structure using a structure learning algorithm.\n\nArguments:\n\nX: Data matrix.\nalgo: Algorithm, one out of [:learnspn, :random].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.getOrderedNodes",
    "page": "Docstrings",
    "title": "SumProductNetworks.getOrderedNodes",
    "category": "function",
    "text": "Get all nodes in topological order using Tarjan\'s algoritm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.normalize!",
    "page": "Docstrings",
    "title": "SumProductNetworks.normalize!",
    "category": "function",
    "text": "normalize!(S)\n\nLocaly normalize the weights of a SPN using Algorithm 1 from Peharz et al.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.parents",
    "page": "Docstrings",
    "title": "SumProductNetworks.parents",
    "category": "function",
    "text": "parents(node) -> parents::SPNNode[]\n\nReturns the parents of an SPN node.\n\nParameters:\n\nnode::SPNNode: SPN node to be evaluated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.remove!",
    "page": "Docstrings",
    "title": "SumProductNetworks.remove!",
    "category": "function",
    "text": "Remove a node from the children list of a sum node in place. remove!(node::FiniteSumNode, index::Int)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.sub2ind2",
    "page": "Docstrings",
    "title": "SumProductNetworks.sub2ind2",
    "category": "function",
    "text": "sub2ind2(size1, ind1, ind2) -> linear index\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.sub2ind3",
    "page": "Docstrings",
    "title": "SumProductNetworks.sub2ind3",
    "category": "function",
    "text": "sub2ind3(size1, size2, ind1, ind2, ind3) -> linear index\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SumProductNetworks.updatescope!",
    "page": "Docstrings",
    "title": "SumProductNetworks.updatescope!",
    "category": "function",
    "text": "updatescope!(spn)\n\nUpdate the scope of all nodes in the SPN.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SumProductNetworks.+SumProductNetworks.-SumProductNetworks.AbstractMixtureModelSumProductNetworks.AbstractMvNormalSumProductNetworks.ArcsineSumProductNetworks.BernoulliSumProductNetworks.BetaSumProductNetworks.BetaBinomialSumProductNetworks.BetaPrimeSumProductNetworks.BinomialSumProductNetworks.BiweightSumProductNetworks.CategoricalSumProductNetworks.CauchySumProductNetworks.ChiSumProductNetworks.ChisqSumProductNetworks.ContinuousSumProductNetworks.ContinuousDistributionSumProductNetworks.ContinuousMatrixDistributionSumProductNetworks.ContinuousMultivariateDistributionSumProductNetworks.ContinuousUnivariateDistributionSumProductNetworks.CosineSumProductNetworks.DiagNormalSumProductNetworks.DiagNormalCanonSumProductNetworks.DirichletSumProductNetworks.DirichletMultinomialSumProductNetworks.DiscreteSumProductNetworks.DiscreteDistributionSumProductNetworks.DiscreteMatrixDistributionSumProductNetworks.DiscreteMultivariateDistributionSumProductNetworks.DiscreteUniformSumProductNetworks.DiscreteUnivariateDistributionSumProductNetworks.DistributionSumProductNetworks.DistributionsSumProductNetworks.DoubleExponentialSumProductNetworks.EdgeworthMeanSumProductNetworks.EdgeworthSumSumProductNetworks.EdgeworthZSumProductNetworks.EmpiricalUnivariateDistributionSumProductNetworks.EpanechnikovSumProductNetworks.ErlangSumProductNetworks.EstimatorSumProductNetworks.ExponentialSumProductNetworks.FDistSumProductNetworks.FiniteAugmentedProductNodeSumProductNetworks.FiniteProductNodeSumProductNetworks.FiniteSplitNodeSumProductNetworks.FiniteSumNodeSumProductNetworks.FisherNoncentralHypergeometricSumProductNetworks.FrechetSumProductNetworks.FullNormalSumProductNetworks.FullNormalCanonSumProductNetworks.GammaSumProductNetworks.GeneralizedExtremeValueSumProductNetworks.GeneralizedParetoSumProductNetworks.GeometricSumProductNetworks.GumbelSumProductNetworks.HypergeometricSumProductNetworks.IndicatorNodeSumProductNetworks.InverseGammaSumProductNetworks.InverseGaussianSumProductNetworks.InverseWishartSumProductNetworks.IsoNormalSumProductNetworks.IsoNormalCanonSumProductNetworks.KSDistSumProductNetworks.KSOneSidedSumProductNetworks.KolmogorovSumProductNetworks.LaplaceSumProductNetworks.LeafSumProductNetworks.LevySumProductNetworks.LocationScaleSumProductNetworks.LogNormalSumProductNetworks.LogisticSumProductNetworks.MLEstimatorSumProductNetworks.MatrixDistributionSumProductNetworks.MatrixvariateSumProductNetworks.MixtureModelSumProductNetworks.MultinomialSumProductNetworks.MultivariateSumProductNetworks.MultivariateDistributionSumProductNetworks.MultivariateMixtureSumProductNetworks.MultivariateNodeSumProductNetworks.MultivariateNormalSumProductNetworks.MvLogNormalSumProductNetworks.MvNormalSumProductNetworks.MvNormalCanonSumProductNetworks.MvNormalKnownCovSumProductNetworks.MvTDistSumProductNetworks.NegativeBinomialSumProductNetworks.NodeSumProductNetworks.NonMatrixDistributionSumProductNetworks.NoncentralBetaSumProductNetworks.NoncentralChisqSumProductNetworks.NoncentralFSumProductNetworks.NoncentralHypergeometricSumProductNetworks.NoncentralTSumProductNetworks.NormalSumProductNetworks.NormalCanonSumProductNetworks.NormalInverseGaussianSumProductNetworks.ParetoSumProductNetworks.PoissonSumProductNetworks.PoissonBinomialSumProductNetworks.ProductNodeSumProductNetworks.QQPairSumProductNetworks.RayleighSumProductNetworks.RealIntervalSumProductNetworks.SPNNodeSumProductNetworks.SampleableSumProductNetworks.SemicircleSumProductNetworks.SkellamSumProductNetworks.StatisticsSumProductNetworks.SufficientStatsSumProductNetworks.SumNodeSumProductNetworks.SumProductNetworkSumProductNetworks.SumProductNetworksSumProductNetworks.SymTriangularDistSumProductNetworks.TDistSumProductNetworks.TriangularDistSumProductNetworks.TriweightSumProductNetworks.TruncatedSumProductNetworks.TruncatedNormalSumProductNetworks.UniformSumProductNetworks.UnivariateSumProductNetworks.UnivariateDistributionSumProductNetworks.UnivariateGMMSumProductNetworks.UnivariateMixtureSumProductNetworks.UnivariateNodeSumProductNetworks.ValueSupportSumProductNetworks.VariateFormSumProductNetworks.VonMisesSumProductNetworks.VonMisesFisherSumProductNetworks.WalleniusNoncentralHypergeometricSumProductNetworks.WeibullSumProductNetworks.WishartSumProductNetworks.ZeroMeanDiagNormalSumProductNetworks.ZeroMeanDiagNormalCanonSumProductNetworks.ZeroMeanFullNormalSumProductNetworks.ZeroMeanFullNormalCanonSumProductNetworks.ZeroMeanIsoNormalSumProductNetworks.ZeroMeanIsoNormalCanonSumProductNetworks.add!SumProductNetworks.addobs!SumProductNetworks.addscope!SumProductNetworks.binaryentropySumProductNetworks.bmitestSumProductNetworks.canonformSumProductNetworks.ccdfSumProductNetworks.cdfSumProductNetworks.cfSumProductNetworks.cgfSumProductNetworks.childrenSumProductNetworks.circvarSumProductNetworks.classesSumProductNetworks.complexitySumProductNetworks.componentSumProductNetworks.componentsSumProductNetworks.componentwise_logpdfSumProductNetworks.componentwise_pdfSumProductNetworks.concentrationSumProductNetworks.corSumProductNetworks.covSumProductNetworks.cquantileSumProductNetworks.cumulantSumProductNetworks.depthSumProductNetworks.dimSumProductNetworks.dofSumProductNetworks.entropySumProductNetworks.estimateSumProductNetworks.evalSumProductNetworks.expected_logdetSumProductNetworks.export_networkSumProductNetworks.failprobSumProductNetworks.fitSumProductNetworks.fit_mapSumProductNetworks.fit_map!SumProductNetworks.fit_mleSumProductNetworks.fit_mle!SumProductNetworks.freecumulantSumProductNetworks.generate_spnSumProductNetworks.getFontSizeSumProductNetworks.getLabelSumProductNetworks.getOrderedNodesSumProductNetworks.getParametersSumProductNetworks.getShapeSumProductNetworks.gradlogpdfSumProductNetworks.hasfinitesupportSumProductNetworks.hasobsSumProductNetworks.hasscopeSumProductNetworks.hassubscopeSumProductNetworks.hasweightsSumProductNetworks.headerSumProductNetworks.includeSumProductNetworks.insupportSumProductNetworks.invcovSumProductNetworks.invlogccdfSumProductNetworks.invlogcdfSumProductNetworks.invscaleSumProductNetworks.isDegeneratedSumProductNetworks.isboundedSumProductNetworks.isleptokurticSumProductNetworks.islowerboundedSumProductNetworks.ismesokurticSumProductNetworks.isnormalizedSumProductNetworks.isplatykurticSumProductNetworks.isprobvecSumProductNetworks.isupperboundedSumProductNetworks.kdeSumProductNetworks.kurtosisSumProductNetworks.learnspnSumProductNetworks.lengthSumProductNetworks.locationSumProductNetworks.location!SumProductNetworks.logccdfSumProductNetworks.logcdfSumProductNetworks.logdetcovSumProductNetworks.loglikelihoodSumProductNetworks.logpdfSumProductNetworks.logpdf!SumProductNetworks.logweightsSumProductNetworks.meanSumProductNetworks.mean!SumProductNetworks.meandirSumProductNetworks.meanformSumProductNetworks.meanlogxSumProductNetworks.medianSumProductNetworks.median!SumProductNetworks.mgfSumProductNetworks.middleSumProductNetworks.modeSumProductNetworks.modesSumProductNetworks.momentSumProductNetworks.ncategoriesSumProductNetworks.ncomponentsSumProductNetworks.ndepthSumProductNetworks.nobsSumProductNetworks.normalize!SumProductNetworks.nsamplesSumProductNetworks.nscopeSumProductNetworks.ntrialsSumProductNetworks.obsSumProductNetworks.paramsSumProductNetworks.params!SumProductNetworks.parentsSumProductNetworks.partypeSumProductNetworks.pdfSumProductNetworks.probsSumProductNetworks.probvalSumProductNetworks.qqbuildSumProductNetworks.quantileSumProductNetworks.quantile!SumProductNetworks.randomspnSumProductNetworks.rateSumProductNetworks.remove!SumProductNetworks.removescope!SumProductNetworks.sampleSumProductNetworks.sample!SumProductNetworks.samplerSumProductNetworks.scaleSumProductNetworks.scale!SumProductNetworks.scopeSumProductNetworks.setobs!SumProductNetworks.setscope!SumProductNetworks.shapeSumProductNetworks.skewnessSumProductNetworks.spanSumProductNetworks.sqmahalSumProductNetworks.sqmahal!SumProductNetworks.stdSumProductNetworks.stdlogxSumProductNetworks.stdmSumProductNetworks.sub2ind2SumProductNetworks.sub2ind3SumProductNetworks.succprobSumProductNetworks.suffstatsSumProductNetworks.supportSumProductNetworks.test_distrSumProductNetworks.test_samplesSumProductNetworks.updatescope!SumProductNetworks.varSumProductNetworks.varlogxSumProductNetworks.varmSumProductNetworks.visitNode!SumProductNetworks.weightsSumProductNetworks.wsampleSumProductNetworks.wsample!"
},

]}
