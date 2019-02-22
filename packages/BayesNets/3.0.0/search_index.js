var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BayesNets-1",
    "page": "Readme",
    "title": "BayesNets",
    "category": "section",
    "text": "This library supports representation, inference, and learning in Bayesian networks.Please read the documentation.(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "autodocs/#BayesNets.BDeuPrior",
    "page": "Docstrings",
    "title": "BayesNets.BDeuPrior",
    "category": "type",
    "text": "Assigns equal scores to Markov equivalent structures\n\nα_ijk = x/{q_i * r_i} for each j, k and some given x\n\nsee DMU section 2.4.3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.BayesNetSampler",
    "page": "Docstrings",
    "title": "BayesNets.BayesNetSampler",
    "category": "type",
    "text": "Abstract type for sampling with:\n\nRandom.rand(BayesNet, BayesNetSampler)\nRandom.rand(BayesNet, BayesNetSampler, nsamples)\nRandom.rand!(Assignment, BayesNet, BayesNetSampler)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.CategoricalCPD",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.CategoricalCPD",
    "category": "type",
    "text": "A categorical distribution, P(x|parents(x)) where all parents are discrete integers 1:N.\n\nThe ordering of distributions array follows the convention in Decision Making Under Uncertainty. Suppose a variable has three discrete parents. The first parental instantiation assigns all parents to their first bin. The second will assign the first parent (as defined in parents) to its second bin and the other parents to their first bin. The sequence continues until all parents are instantiated to their last bins.\n\nThis is equivalent to:\n\nX,Y,Z 1,1,1 2,1,1 1,2,1 2,2,1 1,1,2 ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ConditionalLinearGaussianCPD",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ConditionalLinearGaussianCPD",
    "category": "type",
    "text": "A conditional linear Gaussian CPD, always returns a Normal{Float64}\n\nThis is a combination of the CategoricalCPD and the LinearGaussianCPD.\nFor a variable with N discrete parents and M continuous parents, it will construct\na linear gaussian distribution for all M parents for each discrete instantiation.\n\n                  { Normal(μ=a₁×continuous_parents(x) + b₁, σ₁) for discrete instantiation 1\nP(x|parents(x)) = { Normal(μ=a₂×continuous_parents(x) + b₂, σ₂) for discrete instantiation 2\n                  { ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.DirectSampler",
    "page": "Docstrings",
    "title": "BayesNets.DirectSampler",
    "category": "type",
    "text": "Straightforward sampling from a BayesNet. The default sampler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.DirichletPrior",
    "page": "Docstrings",
    "title": "BayesNets.DirichletPrior",
    "category": "type",
    "text": "Baysian Structure learning seeks to maximize P(G|D) In the Bayesian fashion, we can provide a prior over the parameters in our learning network. This is described using a Dirichlet Prior.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.DiscreteBayesNet",
    "page": "Docstrings",
    "title": "BayesNets.DiscreteBayesNet",
    "category": "type",
    "text": "DiscreteBayesNets are Bayesian Networks where every variable is an integer within 1:Nᵢ and every distribution is Categorical.\n\nThis representation is very common, and allows for the use of factors, for example in Probabilistic Graphical Models by Koller and Friedman\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.DiscreteCPD",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.DiscreteCPD",
    "category": "type",
    "text": "A categorical distribution, P(x|parents(x)) where all parents are discrete integers 1:N.\n\nThe ordering of distributions array follows the convention in Decision Making Under Uncertainty. Suppose a variable has three discrete parents. The first parental instantiation assigns all parents to their first bin. The second will assign the first parent (as defined in parents) to its second bin and the other parents to their first bin. The sequence continues until all parents are instantiated to their last bins.\n\nThis is equivalent to:\n\nX,Y,Z 1,1,1 2,1,1 1,2,1 2,2,1 1,1,2 ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.ExactInference",
    "page": "Docstrings",
    "title": "BayesNets.ExactInference",
    "category": "type",
    "text": "Exact inference using factors and variable eliminations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.Factor",
    "page": "Docstrings",
    "title": "BayesNets.Factor",
    "category": "type",
    "text": "Factor(dims, potential)\n\nCreate a Factor corresponding to the potential.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.GibbsSampler",
    "page": "Docstrings",
    "title": "BayesNets.GibbsSampler",
    "category": "type",
    "text": "The GibbsSampler type houses the parameters of the Gibbs sampling algorithm.  The parameters are defined below:\n\nburnin:  The first burnin samples will be discarded.  They will not be returned. The thinning parameter does not affect the burn in period. This is used to ensure that the Gibbs sampler converges to the target stationary distribution before actual samples are drawn.\n\nthinning: For every thinning + 1 number of samples drawn, only the last is kept. Thinning is used to reduce autocorrelation between samples. Thinning is not used during the burn in period. e.g. If thinning is 1, samples will be drawn in groups of two and only the second sample will be in the output.\n\ntimelimit: The number of milliseconds to run the algorithm. The algorithm will return the samples it has collected when either nsamples samples have been collected or timelimit milliseconds have passed.  If time_limit is null then the algorithm will run until nsamples have been collected. This means it is possible that zero samples are returned.\n\nerroriftimeout: If erroriftimeout is true and the timelimit expires, an error will be raised. If erroriftimeout is false and the time limit expires, the samples that have been collected so far will be returned.         This means it is possible that zero samples are returned.  Burn in samples will not be returned. If time_limit is null, this parameter does nothing.\n\nconsistent_with: the assignment that all samples must be consistent with (ie, Assignment(:A=>1) means all samples must have :A=1). Use to sample conditional distributions.\n\nmaxcachesize:  If null, cache as much as possible, otherwise cache at most \"maxcachesize\"  distributions\n\nvariableorder: variableorder determines the order of variables changed when generating a new sample. If null use a random order for every sample (this is different from updating the variables at random). Otherwise should be a list containing all the variables in the order they should be updated.\n\ninitial_sample:  The inital assignment to variables to use.  If null, the initial sample is chosen by briefly using a LikelihoodWeightedSampler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.GibbsSamplerState",
    "page": "Docstrings",
    "title": "BayesNets.GibbsSamplerState",
    "category": "type",
    "text": "Used to cache various things the Gibbs sampler needs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.GibbsSamplingFull",
    "page": "Docstrings",
    "title": "BayesNets.GibbsSamplingFull",
    "category": "type",
    "text": "infer(im, inf)\n\nRun Gibbs sampling for N iterations. Each iteration changes all nodes. Discareds first burn_in samples and keeps only the thin-th sample. Ex, if thin=3, will discard the first two samples and keep the third.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.GibbsSamplingNodewise",
    "page": "Docstrings",
    "title": "BayesNets.GibbsSamplingNodewise",
    "category": "type",
    "text": "infer(GibbsSampling, state::Assignment, InferenceState)\n\nRun Gibbs sampling for N iterations. Each iteration changes one node.\n\nDiscareds first burn_in samples and keeps only the thin-th sample. Ex, if thin=3, will discard the first two samples and keep the third.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels.GraphSearchStrategy",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.GraphSearchStrategy",
    "category": "type",
    "text": "GraphSearchStrategy\n\nAn abstract type which defines a graph search strategy for learning probabilistic graphical model structures These allow: fit(::Type{ProbabilisticGraphicalModel}, data, GraphSearchStrategy)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels.InferenceMethod",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.InferenceMethod",
    "category": "type",
    "text": "Abstract type for probability inference\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels.InferenceState",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.InferenceState",
    "category": "type",
    "text": "Type for capturing the inference state\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.K2GraphSearch",
    "page": "Docstrings",
    "title": "BayesNets.K2GraphSearch",
    "category": "type",
    "text": "K2GraphSearch\n\nA GraphSearchStrategy following the K2 algorithm. Takes polynomial time to find the optimal structure assuming a topological variable ordering.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.LikelihoodWeightedSampler",
    "page": "Docstrings",
    "title": "BayesNets.LikelihoodWeightedSampler",
    "category": "type",
    "text": "Likelihood Weighted Sampling\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.LikelihoodWeightingInference",
    "page": "Docstrings",
    "title": "BayesNets.LikelihoodWeightingInference",
    "category": "type",
    "text": "Approximates p(query|evidence) with N weighted samples using likelihood weighted sampling\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.LinearGaussianCPD",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.LinearGaussianCPD",
    "category": "type",
    "text": "A linear Gaussian CPD, always returns a Normal\n\nAssumes that target and all parents can be converted to Float64 (ie, are numeric)\n\nP(x|parents(x)) = Normal(μ=a×parents(x) + b, σ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.LoopyBelief",
    "page": "Docstrings",
    "title": "BayesNets.LoopyBelief",
    "category": "type",
    "text": "Loopy belief propogation for a network.\n\nEarly stopping if change is messages < tol for `itersforconvergence\' iterations. For no stopping, use tol < 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.NegativeBayesianInformationCriterion",
    "page": "Docstrings",
    "title": "BayesNets.NegativeBayesianInformationCriterion",
    "category": "type",
    "text": "NegativeBayesianInformationCriterion\n\nA ScoringFunction for the negative Bayesian information criterion.\n\nBIC = -2⋅L + k⋅ln(n)\n\n   L - the log likelihood of the data under the cpd\n   k - the number of free parameters to be estimated\n   n - the sample size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels",
    "category": "module",
    "text": "Provides a basic interface for defining and working with probabilistic graphical models\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.RejectionSampler",
    "page": "Docstrings",
    "title": "BayesNets.RejectionSampler",
    "category": "type",
    "text": "Rejection Sampling in which the assignments are forced to be consistent with the provided values. Each sampler is attempted at most max_nsamples times before returning an empty assignment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels.Sampler",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.Sampler",
    "category": "type",
    "text": "Abstract type for sampling with Base.rand(ProbabilisticGraphicalModel, Sampler, nsamples)                                 Base.rand!(Assignment, ProbabilisticGraphicalModel, Sampler)                                 Base.rand(ProbabilisticGraphicalModel, Sampler)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.ScoreComponentCache",
    "page": "Docstrings",
    "title": "BayesNets.ScoreComponentCache",
    "category": "type",
    "text": "ScoreComponentCache\n\nUsed to store scores in a priority queue such that graph search algorithms know when a particular construction has already been made.     cacheⱼ for the ith variable with parents parents\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.ScoringFunction",
    "page": "Docstrings",
    "title": "BayesNets.ScoringFunction",
    "category": "type",
    "text": "ScoringFunction\n\nAn abstract type for which subtypes allow extracting CPD score components, which are to be maximized: score_component(::ScoringFunction, cpd::CPD, data::DataFrame)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.StaticCPD",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.StaticCPD",
    "category": "type",
    "text": "A CPD for which the distribution never changes.     target: name of the CPD\'s variable     parents: list of parent variables.     d: a Distributions.jl distribution\n\nWhile a StaticCPD can have parents, their assignments will not affect the distribution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.UniformPrior",
    "page": "Docstrings",
    "title": "BayesNets.UniformPrior",
    "category": "type",
    "text": "A uniform Dirichlet prior such that all α are the same\n\nDefaults to the popular K2 prior, α = 1, which is similar to Laplace Smoothing\n\nhttps://en.wikipedia.org/wiki/Additive_smoothing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets._evidence_lambda",
    "page": "Docstrings",
    "title": "BayesNets._evidence_lambda",
    "category": "function",
    "text": "Get the lambda-message to itself for an evidence node. If it isn\'t an evidence node, this will break\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets._get_parent_indeces",
    "page": "Docstrings",
    "title": "BayesNets._get_parent_indeces",
    "category": "function",
    "text": "score_component(a::ScoringFunction, cpd::CPD, data::DataFrame, cache::ScoreComponentCache)\n\nAs score_component(ScoringFunction, cpd, data), but returns pre-computed values from the cache if they exist, and populates the cache if they don\'t\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets._init_gibbs_sample",
    "page": "Docstrings",
    "title": "BayesNets._init_gibbs_sample",
    "category": "function",
    "text": "_init_gibbs_sample(bn, evidence)\n\nA random sample of non-evidence nodes uniformly over their domain\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.bayesian_score",
    "page": "Docstrings",
    "title": "BayesNets.bayesian_score",
    "category": "function",
    "text": "bayesian_score(G::DAG, names::Vector{Symbol}, data::DataFrame[, ncategories::Vector{Int}[, prior::DirichletPrior]])\n\nCompute the bayesian score for graph structure g, with the data in data. names containes a symbol corresponding to each vertex in g that is the name of a column in data. ncategories is a vector of the number of values that each variable in the Bayesian network can take.\n\nNote that every entry in data must be an integer greater than 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.bayesian_score_component",
    "page": "Docstrings",
    "title": "BayesNets.bayesian_score_component",
    "category": "function",
    "text": "Computes the Bayesian score component for the given target variable index and     Dirichlet prior counts given in alpha\n\nINPUT:     i       - index of the target variable     parents - list of indeces of parent variables (should not contain self)     r       - list of instantiation counts accessed by variable index               r[1] gives number of discrete states variable 1 can take on     data - matrix of sufficient statistics / counts               d[j,k] gives the number of times the target variable took on its kth instantiation               given the jth parental instantiation\n\nOUTPUT:     the Bayesian score, Float64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.children",
    "page": "Docstrings",
    "title": "BayesNets.children",
    "category": "function",
    "text": "Returns the children as a list of NodeNames\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels.consistent",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.consistent",
    "category": "function",
    "text": "consistent(a::Assignment, b::Assignment)\n\nTrue if all shared NodeNames have the same value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.convert",
    "page": "Docstrings",
    "title": "Base.convert",
    "category": "function",
    "text": "convert(DiscreteCPD, cpd)\n\nConstruct a Factor from a DiscreteCPD.\n\n\n\n\n\nConvert a Factor to a DataFrame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.delete!",
    "page": "Docstrings",
    "title": "Base.delete!",
    "category": "function",
    "text": "delete!(bn::BayesNets, target::NodeName)\n\nRemoving cpds will alter the vertex indeces. In particular, removing the ith cpd will swap i and n and then remove n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.disttype",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.disttype",
    "category": "function",
    "text": "disttype(cpd::CPD)\n\nReturn the type of the CPD\'s distribution\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.duplicate",
    "page": "Docstrings",
    "title": "BayesNets.duplicate",
    "category": "function",
    "text": "duplicate(A, dims)\n\nRepeates an array only through higer dimensions dims.\n\nCustom version of repeate, but only outer repetition, and only duplicates the array for the number of times specified in dims for dimensions greater than ndims(A). If dims is empty, returns a copy of A.\n\njulia> duplicate(collect(1:3), 2)\n3×2 Array{Int64,2}:\n 1  1\n 2  2\n 3  3\n\njulia> duplicate([1 3; 2 4], 3)\n2×2×3 Array{Int64,3}:\n[:, :, 1] =\n 1  3\n 2  4\n\n[:, :, 2] =\n 1  3\n 2  4\n\n[:, :, 3] =\n 1  3\n 2  4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.eval_mb_cpd",
    "page": "Docstrings",
    "title": "BayesNets.eval_mb_cpd",
    "category": "function",
    "text": "eval_mb_cpd(node, ncategories, assignment, mb_cpds)\n\nReturn the potential of all instances of a node given its markove blanket as a WeightVec:     P(node | panode) * Prod (c in children) P(c | pac)\n\nTrys out all possible values of node (assumes categorical) Assignment should have values for all in the Markov blanket, including the variable itself.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.fit",
    "page": "Docstrings",
    "title": "StatsBase.fit",
    "category": "function",
    "text": "fit(::Type{ProbabilisticGraphicalModel}, data::DataFrame, params::GraphSearchStrategy)\n\nRuns the graph search algorithm to learn a probabilistic graphical model of the provided type from data.\n\n\n\n\n\nfit(::Type{CPD}, data::DataFrame, target::NodeName, parents::NodeNames)\n\nConstruct a CPD for target by fitting it to the provided data\n\n\n\n\n\nfit(::Type{BayesNet}, data, edges)\n\nFit a Bayesian Net whose variables are the columns in data and whose edges are given in edges\n\nex: fit(DiscreteBayesNet, data, (:A=>:B, :C=>B))\n\n\n\n\n\nfit{C<:CPD}(::Type{BayesNet{C}}, ::DataFrame, ::GraphSearchStrategy)\n\nRun the graph search algorithm defined by GraphSearchStrategy\n\n\n\n\n\ntakes a list of observations of assignments represented as a DataFrame or a set of data samples (without :p), takes the unique assignments, and estimates the associated probability of each assignment based on its frequency of occurrence.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.get_asia_bn",
    "page": "Docstrings",
    "title": "BayesNets.get_asia_bn",
    "category": "function",
    "text": "An ergodic version of the asia network, with the E variable removed\n\nOrignal network: Lauritzen, Steffen L. and David J. Spiegelhalter, 1988\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.get_finite_distribution!",
    "page": "Docstrings",
    "title": "BayesNets.get_finite_distribution!",
    "category": "function",
    "text": "Helper to sampleposteriorfinite\n\nModifies a and gss\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.get_mb_cpds",
    "page": "Docstrings",
    "title": "BayesNets.get_mb_cpds",
    "category": "function",
    "text": "Get the cpd\'s of a node and its children\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.get_sat_fail_bn",
    "page": "Docstrings",
    "title": "BayesNets.get_sat_fail_bn",
    "category": "function",
    "text": "Satellite failure network from DMU, pg 17\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.get_sprinkler_bn",
    "page": "Docstrings",
    "title": "BayesNets.get_sprinkler_bn",
    "category": "function",
    "text": "The usual sprinkler problem\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.get_weighted_dataframe",
    "page": "Docstrings",
    "title": "BayesNets.get_weighted_dataframe",
    "category": "function",
    "text": "A dataset of variable assignments is obtained with an additional column of weights in accordance with the likelihood of each assignment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.get_weighted_sample!",
    "page": "Docstrings",
    "title": "BayesNets.get_weighted_sample!",
    "category": "function",
    "text": "Draw an assignment from the Bayesian network but set any variables in the evidence accordingly. Returns the assignment and the probability weighting associated with the evidence.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.gibbs_sample",
    "page": "Docstrings",
    "title": "BayesNets.gibbs_sample",
    "category": "function",
    "text": "Implements Gibbs sampling. (https://en.wikipedia.org/wiki/Gibbs_sampling) For finite variables, the posterior distribution is sampled by building the exact distribution. For continuous variables, the posterior distribution is sampled using Metropolis Hastings MCMC. Discrete variables with infinite support are currently not supported. The Gibbs Sampler only supports CPDs that return Univariate Distributions. (CPD{D<:UnivariateDistribution})\n\nbn:: A Bayesian Network to sample from.  bn should only contain CPDs that return UnivariateDistributions.\n\nnsamples: The number of samples to return.\n\nburnin:  The first burnin samples will be discarded.  They will not be returned. The thinning parameter does not affect the burn in period. This is used to ensure that the Gibbs sampler converges to the target stationary distribution before actual samples are drawn.\n\nthinning: For every thinning + 1 number of samples drawn, only the last is kept. Thinning is used to reduce autocorrelation between samples. Thinning is not used during the burn in period. e.g. If thinning is 1, samples will be drawn in groups of two and only the second sample will be in the output.\n\ntimelimit: The number of milliseconds to run the algorithm. The algorithm will return the samples it has collected when either nsamples samples have been collected or timelimit milliseconds have passed.  If time_limit is null then the algorithm will run until nsamples have been collected. This means it is possible that zero samples are returned.\n\nerroriftimeout: If erroriftimeout is true and the timelimit expires, an error will be raised. If erroriftimeout is false and the time limit expires, the samples that have been collected so far will be returned. 	This means it is possible that zero samples are returned.  Burn in samples will not be returned. If time_limit is null, this parameter does nothing.\n\nconsistent_with: the assignment that all samples must be consistent with (ie, Assignment(:A=>1) means all samples must have :A=1). Use to sample conditional distributions.\n\nmaxcachesize:  If null, cache as much as possible, otherwise cache at most \"maxcachesize\"  distributions\n\nvariableorder: variableorder determines the order of variables changed when generating a new sample. If null use a random order for every sample (this is different from updating the variables at random). Otherwise should be a list containing all the variables in the order they should be updated.\n\ninitialsample:  The inital assignment to variables to use.  If null, the initial sample is chosen by briefly running rand(bn, getweighted_dataframe).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.gibbs_sample_main_loop",
    "page": "Docstrings",
    "title": "BayesNets.gibbs_sample_main_loop",
    "category": "function",
    "text": "The main loop associated with Gibbs sampling Returns a data frame with nsamples samples\n\nSupports the various parameters supported by gibbssample Refer to gibbssample for parameter meanings\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightGraphs.has_edge",
    "page": "Docstrings",
    "title": "LightGraphs.has_edge",
    "category": "function",
    "text": "Whether the BayesNet contains the given edge\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels.infer",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.infer",
    "category": "function",
    "text": "infer(InferenceMethod, InferenceState)\n\nInfer p(query|evidence)\n\n\n\n\n\nApproximates p(query|evidence) with nsamples likelihood weighted samples.\n\nSince this uses a Factor, it is only efficient if the number of samples is (signifcantly) greater than the number of possible instantiations for the query variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.infer_number_of_instantiations",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.infer_number_of_instantiations",
    "category": "function",
    "text": "infer_number_of_instantiations{I<:Int}(arr::AbstractVector{I})\n\nInfer the number of instantiations, N, for a data type, assuming that it takes on the values 1:N\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels.is_independent",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.is_independent",
    "category": "function",
    "text": "is_independent(PGM, x::NodeNames, y::NodeNames, given::NodeNames) Returns whether the set of node names x is d-separated from the set y given the set given\n\n\n\n\n\nReturns whether the set of node names x is d-separated from the set y given the set given\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "function",
    "text": "length(PGM)\n\nReturns the number of variables in the probabilistic graphical model\n\n\n\n\n\nTotal number of elements in Factor (potential)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distributions.logpdf",
    "page": "Docstrings",
    "title": "Distributions.logpdf",
    "category": "function",
    "text": "The logpdf of a given assignment after conditioning on the values\n\n\n\n\n\nThe logpdf of a set of assignment after conditioning on the values\n\n\n\n\n\nlogpdf(cpd::CPD)\n\nCondition and then return the logpdf\n\n\n\n\n\nlogpdf(cpd::CPD, data::DataFrame)\n\nReturn the logpdf across the dataset\n\n\n\n\n\nThe logpdf of a given assignment after conditioning on the values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.ProbabilisticGraphicalModels.markov_blanket",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.markov_blanket",
    "category": "function",
    "text": "markov_blanket(PGM) Returns the list of NodeNames forming the Markov blanket for the PGM\n\n\n\n\n\nReturn the children, parents, and parents of children (excluding target) as a Set of NodeNames\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.name",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.name",
    "category": "function",
    "text": "name(cpd::CPD)\n\nReturn the NodeName for the variable this CPD is defined for.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distributions.ncategories",
    "page": "Docstrings",
    "title": "Distributions.ncategories",
    "category": "function",
    "text": "Distributions.ncategories(cpd::CategoricalCPD)\n\nReturn the number of categories for a cpd.\n\n\n\n\n\nDistributions.ncategories(bn::DiscreteBayesNet, node::Symbol)\n\nReturn the number of categories for a node in the network.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.ndgrid_fill!",
    "page": "Docstrings",
    "title": "BayesNets.ndgrid_fill!",
    "category": "function",
    "text": "???\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightGraphs.neighbors",
    "page": "Docstrings",
    "title": "LightGraphs.neighbors",
    "category": "function",
    "text": "Returns all neighbors as a list of NodeNames.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.normalize",
    "page": "Docstrings",
    "title": "LinearAlgebra.normalize",
    "category": "function",
    "text": "normalize!(ϕ, dims; p=1)\nnormalize!(ϕ; p=1)\n\nReturn a normalized copy of the factor so all instances of dims have (or the entire factors has) p-norm of 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.nparams",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.nparams",
    "category": "function",
    "text": "nparams(cpd::CPD)\n\nReturn the number of free parameters that needed to be estimated for the CPD\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.parentless",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.parentless",
    "category": "function",
    "text": "parentless(cpd::CPD)\n\nReturn whether this CPD has parents.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.parents",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.parents",
    "category": "function",
    "text": "parents(cpd::CPD)\n\nReturn the parents for this CPD as a vector of NodeName.\n\n\n\n\n\nReturns the parents as a list of NodeNames\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.pattern",
    "page": "Docstrings",
    "title": "BayesNets.pattern",
    "category": "function",
    "text": "pattern(ϕ, [dims])\n\nReturn an array with the pattern of each dimension\'s state for all possible instances\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distributions.pdf",
    "page": "Docstrings",
    "title": "Distributions.pdf",
    "category": "function",
    "text": "The pdf of a given assignment after conditioning on the values\n\n\n\n\n\nThe pdf of a set of assignments after conditioning on the values\n\n\n\n\n\npdf(cpd::CPD)\n\nCondition and then return the pdf\n\n\n\n\n\npdf(cpd::CPD, data::DataFrame)\n\nReturn the pdf across the dataset\n\n\n\n\n\nThe pdf of a given assignment after conditioning on the values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.rand_bn_inference",
    "page": "Docstrings",
    "title": "BayesNets.rand_bn_inference",
    "category": "function",
    "text": "rand_bn_inference(bn, num_query=2, num_evidence=3)\n\nGenerate a random inference state for a Bayesian Network with an evidence assignment sample uniformly over the chosen nodes\' domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.rand_cpd",
    "page": "Docstrings",
    "title": "BayesNets.rand_cpd",
    "category": "function",
    "text": "rand_cpd(bn::DiscreteBayesNet, ncategories::Int, target::NodeName, parents::NodeNames=NodeName[])\n\nReturn a CategoricalCPD with the given number of categories with random categorical distributions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.rand_discrete_bn",
    "page": "Docstrings",
    "title": "BayesNets.rand_discrete_bn",
    "category": "function",
    "text": "rand_discrete_bn(num_nodes16, max_num_parents=3,\n        max_num_states=5, connected=true)\n\nGenerate a random DiscreteBayesNet.\n\nCreates DiscreteBayesNet with num_nodes nodes, with each node having a random number of states and parents, up to max_num_parents and max_num_parents, respectively. If connected, each node (except the first) will be guaranteed at least one parent, making the graph connected.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.readxdsl",
    "page": "Docstrings",
    "title": "BayesNets.readxdsl",
    "category": "function",
    "text": "readxdsl( filename::AbstractString )\n\nReturn a DiscreteBayesNet read from the xdsl file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.reducedim",
    "page": "Docstrings",
    "title": "BayesNets.reducedim",
    "category": "function",
    "text": "reducedim(op, ϕ, dims, [v0])\n\nReduce dimensions dims in ϕ using function op.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.sample_posterior!",
    "page": "Docstrings",
    "title": "BayesNets.sample_posterior!",
    "category": "function",
    "text": "set a[varname] ~ P(varname | not varname)\n\nModifies a and caches in gss\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.sample_posterior_continuous!",
    "page": "Docstrings",
    "title": "BayesNets.sample_posterior_continuous!",
    "category": "function",
    "text": "Implements Metropolis-Hastings with a normal distribution proposal with mean equal to the previous value of the variable \"varname\" and stddev equal to 10 times the standard deviation of the distribution of the target variable given its parents ( var_distribution should be get(bn, varname)(a) )\n\nMH will go through nsamples iterations.  If no proposal is accepted, the original value will remain\n\nThis function expects that a[varname] is within the support of the distribution, it will not check to make sure this is true\n\nHelper to sample_posterior Should only be used to sampling continuous distributions\n\nset a[varname] ~ P(varname | not varname)\n\nModifies a and caches in gss\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.sample_posterior_finite!",
    "page": "Docstrings",
    "title": "BayesNets.sample_posterior_finite!",
    "category": "function",
    "text": "Helper to sample_posterior Should only be called if the variable associated with varname is discrete\n\nset a[varname] ~ P(varname | not varname)\n\nModifies both a and gss\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.sample_weighted_dataframe!",
    "page": "Docstrings",
    "title": "BayesNets.sample_weighted_dataframe!",
    "category": "function",
    "text": "Chooses a sample at random from a weighted dataframe\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.score_component",
    "page": "Docstrings",
    "title": "BayesNets.score_component",
    "category": "function",
    "text": "score_component(a::ScoringFunction, cpd::CPD, data::DataFrame)\n\nExtract a Float64 score for a cpd given the data. One seeks to maximize the score.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.score_components",
    "page": "Docstrings",
    "title": "BayesNets.score_components",
    "category": "function",
    "text": "score_components(a::ScoringFunction, cpd::CPD, data::DataFrame)\nscore_components(a::ScoringFunction, cpds::Vector{CPD}, data::DataFrame, cache::ScoreComponentCache)\n\nGet a list of score components for all cpds\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.statistics",
    "page": "Docstrings",
    "title": "BayesNets.statistics",
    "category": "function",
    "text": "statistics(\n    targetind::Int,\n    parents::AbstractVector{Int},\n    ncategories::AbstractVector{Int},\n    data::AbstractMatrix{Int}\n    )\n\noutputs a sufficient statistics table for the target variable that is r × q where r = ncategories[i] is the number of variable instantiations and q is the number of parental instantiations of variable i\n\nThe r-values are ordered from 1 → ncategories[i] The q-values are ordered in the same ordering as ind2sub() in Julia Base     Thus the instantiation of the first parent (by order given in parents[i])     is varied the fastest.\n\nex:     Variable 1 has parents 2 and 3, with r₁ = 2, r₂ = 2, r₃ = 3     q for variable 1 is q = r₂×r₃ = 6     N will be a 6×2 matrix where:         N[1,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 1         N[2,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 1         N[3,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 2         N[4,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 2         N[5,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 3         N[6,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 3         N[6,2] is the number of time v₁ = 2, v₂ = 1, v₃ = 1         ...\n\n\n\n\n\nstatistics(\n    parent_list::Vector{Vector{Int}},\n    ncategories::AbstractVector{Int},\n    data::AbstractMatrix{Int},\n    )\n\nComputes sufficient statistics from a discrete dataset for a Discrete Bayesian Net structure\n\nINPUT:     parents:         list of lists of parent indices         A variable with index i has ncategories[i]         and row in data[i,:]         No acyclicity checking is done     ncategories:         list of variable bin counts, or number of         discrete values the variable can take on, v ∈ {1 : ncategories[i]}     data:         table of discrete values [n×m]         where n is the number of nodes         and m is the number of samples\n\nOUTPUT:     N :: Vector{Matrix{Int}}         a sufficient statistics table for each variable         Variable with index i has statistics table N[i],         which is r × q where         r = ncategories[i] is the number of variable instantiations and         q is the number of parental instantiations of variable i\n\n    The r-values are ordered from 1 → ncategories[i]\n    The q-values are ordered in the same ordering as ind2sub() in Julia Base\n        Thus the instantiation of the first parent (by order given in parents[i])\n        is varied the fastest.\n\n    ex:\n        Variable 1 has parents 2 and 3, with r₁ = 2, r₂ = 2, r₃ = 3\n        q for variable 1 is q = r₂×r₃ = 6\n        N[1] will be a 6×2 matrix where:\n            N[1][1,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 1\n            N[1][2,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 1\n            N[1][3,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 2\n            N[1][4,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 2\n            N[1][5,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 3\n            N[1][6,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 3\n            N[1][6,2] is the number of time v₁ = 2, v₂ = 1, v₃ = 1\n            ...\n\nThis function uses sparse matrix black magic and was mercilessly stolen from Ed Schmerling.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.CPDs.strip_arg",
    "page": "Docstrings",
    "title": "BayesNets.CPDs.strip_arg",
    "category": "function",
    "text": "strip_arg(arg::Symbol)\n\nStrip anything extra (type annotations, default values, etc) from an argument. For now this cannot handle keyword arguments (it will throw an error).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.sumout",
    "page": "Docstrings",
    "title": "BayesNets.sumout",
    "category": "function",
    "text": "sumout(t, v)\n\nTable marginalization\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesNets.table",
    "page": "Docstrings",
    "title": "BayesNets.table",
    "category": "function",
    "text": "table(bn::DiscreteBayesNet, name::NodeName)\n\nConstructs the CPD factor associated with the given node in the BayesNet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BayesNets.+BayesNets.-BayesNets.@csv2_strBayesNets.@csv_strBayesNets.@pack_GibbsSamplingFullBayesNets.@pack_GibbsSamplingFull!BayesNets.@pack_GibbsSamplingNodewiseBayesNets.@pack_GibbsSamplingNodewise!BayesNets.@pack_LikelihoodWeightingInferenceBayesNets.@pack_LikelihoodWeightingInference!BayesNets.@pack_LoopyBeliefBayesNets.@pack_LoopyBelief!BayesNets.@tsv_strBayesNets.@unpack_GibbsSamplingFullBayesNets.@unpack_GibbsSamplingNodewiseBayesNets.@unpack_LikelihoodWeightingInferenceBayesNets.@unpack_LoopyBeliefBayesNets.@wsv_strBayesNets.AbstractCategoricalArrayBayesNets.AbstractCategoricalMatrixBayesNets.AbstractCategoricalVectorBayesNets.AbstractDataFrameBayesNets.AbstractMissingCategoricalArrayBayesNets.AbstractMissingCategoricalMatrixBayesNets.AbstractMissingCategoricalVectorBayesNets.AbstractMixtureModelBayesNets.AbstractMvNormalBayesNets.ArcsineBayesNets.AssignmentBayesNets.BDeuPriorBayesNets.BayesNetBayesNets.BayesNetSamplerBayesNets.BayesNetsBayesNets.BernoulliBayesNets.BetaBayesNets.BetaBinomialBayesNets.BetaPrimeBayesNets.BinomialBayesNets.BiweightBayesNets.CPDBayesNets.CPDsBayesNets.CategoricalBayesNets.CategoricalArrayBayesNets.CategoricalArraysBayesNets.CategoricalCPDBayesNets.CategoricalMatrixBayesNets.CategoricalPoolBayesNets.CategoricalStringBayesNets.CategoricalValueBayesNets.CategoricalVectorBayesNets.CauchyBayesNets.ChiBayesNets.ChisqBayesNets.ConditionalLinearGaussianCPDBayesNets.ContinuousBayesNets.ContinuousDistributionBayesNets.ContinuousMatrixDistributionBayesNets.ContinuousMultivariateDistributionBayesNets.ContinuousUnivariateDistributionBayesNets.CosineBayesNets.DAGBayesNets.DataFrameBayesNets.DataFrameRowBayesNets.DataFramesBayesNets.DiagNormalBayesNets.DiagNormalCanonBayesNets.DirectSamplerBayesNets.DirichletBayesNets.DirichletMultinomialBayesNets.DirichletPriorBayesNets.DiscreteBayesNets.DiscreteBayesNetBayesNets.DiscreteCPDBayesNets.DiscreteDistributionBayesNets.DiscreteMatrixDistributionBayesNets.DiscreteMultivariateDistributionBayesNets.DiscreteUniformBayesNets.DiscreteUnivariateDistributionBayesNets.DistributionBayesNets.DistributionsBayesNets.DoubleExponentialBayesNets.EdgeworthMeanBayesNets.EdgeworthSumBayesNets.EdgeworthZBayesNets.EmpiricalUnivariateDistributionBayesNets.EpanechnikovBayesNets.ErlangBayesNets.EstimatorBayesNets.ExactInferenceBayesNets.ExponentialBayesNets.FDistBayesNets.FactorBayesNets.FisherNoncentralHypergeometricBayesNets.FrechetBayesNets.FullNormalBayesNets.FullNormalCanonBayesNets.FunctionalCPDBayesNets.GammaBayesNets.GeneralizedExtremeValueBayesNets.GeneralizedParetoBayesNets.GeometricBayesNets.GibbsSamplerBayesNets.GibbsSamplerStateBayesNets.GibbsSamplingFullBayesNets.GibbsSamplingNodewiseBayesNets.GraphSearchStrategyBayesNets.GreedyHillClimbingBayesNets.GreedyThickThinningBayesNets.GroupAppliedBayesNets.GroupedDataFrameBayesNets.GumbelBayesNets.HypergeometricBayesNets.InferenceMethodBayesNets.InferenceStateBayesNets.InverseGammaBayesNets.InverseGaussianBayesNets.InverseWishartBayesNets.IsoNormalBayesNets.IsoNormalCanonBayesNets.K2GraphSearchBayesNets.KSDistBayesNets.KSOneSidedBayesNets.KolmogorovBayesNets.LaplaceBayesNets.LevelsExceptionBayesNets.LevyBayesNets.LikelihoodWeightedSamplerBayesNets.LikelihoodWeightingInferenceBayesNets.LinearGaussianCPDBayesNets.LocationScaleBayesNets.LogNormalBayesNets.LogisticBayesNets.LoopyBeliefBayesNets.MLEstimatorBayesNets.MatrixDistributionBayesNets.MatrixvariateBayesNets.MissingBayesNets.MissingCategoricalArrayBayesNets.MissingCategoricalMatrixBayesNets.MissingCategoricalVectorBayesNets.MissingExceptionBayesNets.MissingsBayesNets.MixtureModelBayesNets.MultinomialBayesNets.MultivariateBayesNets.MultivariateDistributionBayesNets.MultivariateMixtureBayesNets.MultivariateNormalBayesNets.MvLogNormalBayesNets.MvNormalBayesNets.MvNormalCanonBayesNets.MvNormalKnownCovBayesNets.MvTDistBayesNets.NamedCategoricalBayesNets.NegativeBayesianInformationCriterionBayesNets.NegativeBinomialBayesNets.NodeNameBayesNets.NodeNameUnionBayesNets.NodeNamesBayesNets.NonMatrixDistributionBayesNets.NoncentralBetaBayesNets.NoncentralChisqBayesNets.NoncentralFBayesNets.NoncentralHypergeometricBayesNets.NoncentralTBayesNets.NormalBayesNets.NormalCanonBayesNets.NormalInverseGaussianBayesNets.OrderedLevelsExceptionBayesNets.ParentFunctionalCPDBayesNets.ParetoBayesNets.PoissonBayesNets.PoissonBinomialBayesNets.ProbabilisticGraphicalModelBayesNets.ProbabilisticGraphicalModelsBayesNets.QQPairBayesNets.RayleighBayesNets.RealIntervalBayesNets.RejectionSamplerBayesNets.SampleableBayesNets.SamplerBayesNets.ScanGreedyHillClimbingBayesNets.ScoreComponentCacheBayesNets.ScoringFunctionBayesNets.SemicircleBayesNets.SkellamBayesNets.StaticCPDBayesNets.SubDataFrameBayesNets.SufficientStatsBayesNets.SymTriangularDistBayesNets.TDistBayesNets.TableBayesNets.TriangularDistBayesNets.TriweightBayesNets.TruncatedBayesNets.TruncatedNormalBayesNets.UniformBayesNets.UniformPriorBayesNets.UnivariateBayesNets.UnivariateDistributionBayesNets.UnivariateGMMBayesNets.UnivariateMixtureBayesNets.ValueSupportBayesNets.VariateFormBayesNets.VonMisesBayesNets.VonMisesFisherBayesNets.WalleniusNoncentralHypergeometricBayesNets.WeibullBayesNets.WishartBayesNets.ZeroMeanDiagNormalBayesNets.ZeroMeanDiagNormalCanonBayesNets.ZeroMeanFullNormalBayesNets.ZeroMeanFullNormalCanonBayesNets.ZeroMeanIsoNormalBayesNets.ZeroMeanIsoNormalCanonBayesNets._build_dag_from_cpdsBayesNets._check_dims_validBayesNets._ckeck_dims_uniqueBayesNets._enforce_topological_orderBayesNets._evidence_lambdaBayesNets._get_dagBayesNets._get_parent_indecesBayesNets._get_parental_ncategoriesBayesNets._init_gibbs_sampleBayesNets._reddimBayesNets._translate_indexBayesNets.add_edge!BayesNets.adding_edge_preserves_acyclicityBayesNets.aggregateBayesNets.allowmissingBayesNets.allowmissing!BayesNets.bayesian_scoreBayesNets.bayesian_score_componentBayesNets.bayesian_score_component_uniformBayesNets.bayesian_score_componentsBayesNets.binaryentropyBayesNets.byBayesNets.canonformBayesNets.categoricalBayesNets.categorical!BayesNets.ccdfBayesNets.cdfBayesNets.cfBayesNets.cgfBayesNets.childrenBayesNets.circvarBayesNets.coalesceBayesNets.colwiseBayesNets.combineBayesNets.compactBayesNets.complete_casesBayesNets.complete_cases!BayesNets.completecasesBayesNets.componentBayesNets.componentsBayesNets.componentwise_logpdfBayesNets.componentwise_pdfBayesNets.compressBayesNets.concentrationBayesNets.consistentBayesNets.convertBayesNets.corBayesNets.covBayesNets.cquantileBayesNets.cumulantBayesNets.cutBayesNets.decompressBayesNets.delete!BayesNets.deletecols!BayesNets.deleterows!BayesNets.descendantsBayesNets.describeBayesNets.dimBayesNets.disallowmissingBayesNets.disallowmissing!BayesNets.disttypeBayesNets.dofBayesNets.droplevels!BayesNets.dropmissingBayesNets.dropmissing!BayesNets.duplicateBayesNets.eltypesBayesNets.enforce_topological_order!BayesNets.entropyBayesNets.estimateBayesNets.evalBayesNets.eval_mb_cpdBayesNets.expected_logdetBayesNets.failprobBayesNets.fitBayesNets.fit_mapBayesNets.fit_map!BayesNets.fit_mleBayesNets.fit_mle!BayesNets.freecumulantBayesNets.get_asia_bnBayesNets.get_finite_distribution!BayesNets.get_mb_cpdsBayesNets.get_sat_fail_bnBayesNets.get_sprinkler_bnBayesNets.get_weighted_dataframeBayesNets.get_weighted_sampleBayesNets.get_weighted_sample!BayesNets.gibbs_sampleBayesNets.gibbs_sample_main_loopBayesNets.gradlogpdfBayesNets.greedy_scoreBayesNets.groupbyBayesNets.groupindicesBayesNets.groupvarsBayesNets.has_edgeBayesNets.hasfinitesupportBayesNets.headBayesNets.includeBayesNets.index_dataBayesNets.inferBayesNets.infer_number_of_instantiationsBayesNets.insert!BayesNets.insertcols!BayesNets.insupportBayesNets.invalid_dims_errorBayesNets.invcovBayesNets.invlogccdfBayesNets.invlogcdfBayesNets.invscaleBayesNets.is_independentBayesNets.isboundedBayesNets.isleptokurticBayesNets.islowerboundedBayesNets.ismesokurticBayesNets.ismissingBayesNets.isorderedBayesNets.isplatykurticBayesNets.isprobvecBayesNets.isupperboundedBayesNets.kdeBayesNets.keysBayesNets.kurtosisBayesNets.lengthBayesNets.levelsBayesNets.levels!BayesNets.locationBayesNets.location!BayesNets.logccdfBayesNets.logcdfBayesNets.logdetcovBayesNets.loglikelihoodBayesNets.logpdfBayesNets.logpdf!BayesNets.mapBayesNets.mapcolsBayesNets.markov_blanketBayesNets.meanBayesNets.meandirBayesNets.meanformBayesNets.meanlogxBayesNets.medianBayesNets.meltBayesNets.meltdfBayesNets.merge!BayesNets.meshgridBayesNets.mgfBayesNets.missingBayesNets.missingsBayesNets.modeBayesNets.modesBayesNets.momentBayesNets.nameBayesNets.names!BayesNets.ncategoriesBayesNets.ncolBayesNets.ncomponentsBayesNets.ndgridBayesNets.ndgrid_fill!BayesNets.neighborsBayesNets.non_unique_dims_errorBayesNets.non_unique_states_errorBayesNets.nonuniqueBayesNets.normalizeBayesNets.not_in_factor_errorBayesNets.nparamsBayesNets.nrowBayesNets.nsamplesBayesNets.ntrialsBayesNets.nullable!BayesNets.orderBayesNets.orderedBayesNets.ordered!BayesNets.paramsBayesNets.params!BayesNets.parentlessBayesNets.parentsBayesNets.partypeBayesNets.passmissingBayesNets.patternBayesNets.pdfBayesNets.permutecols!BayesNets.poolBayesNets.pool!BayesNets.probsBayesNets.probvalBayesNets.qqbuildBayesNets.quantileBayesNets.rand_bn_inferenceBayesNets.rand_cpdBayesNets.rand_discrete_bnBayesNets.rateBayesNets.readtableBayesNets.readxdslBayesNets.recodeBayesNets.recode!BayesNets.reducedimBayesNets.reducedim!BayesNets.renameBayesNets.rename!BayesNets.required_funcBayesNets.sampleBayesNets.sample!BayesNets.sample_posterior!BayesNets.sample_posterior_continuous!BayesNets.sample_posterior_finite!BayesNets.sample_weighted_dataframeBayesNets.sample_weighted_dataframe!BayesNets.samplerBayesNets.scaleBayesNets.scale!BayesNets.score_componentBayesNets.score_componentsBayesNets.setindex!BayesNets.shapeBayesNets.showBayesNets.showallBayesNets.showcolsBayesNets.singleton_dimension_errorBayesNets.skewnessBayesNets.spanBayesNets.sqmahalBayesNets.sqmahal!BayesNets.stackBayesNets.stackdfBayesNets.statisticsBayesNets.stdBayesNets.stdlogxBayesNets.strip_argBayesNets.subBayesNets.sub2ind_vecBayesNets.succprobBayesNets.suffstatsBayesNets.sumoutBayesNets.supportBayesNets.tableBayesNets.tailBayesNets.test_distrBayesNets.test_samplesBayesNets.uncompactBayesNets.unique!BayesNets.unstackBayesNets.valuesBayesNets.varBayesNets.varlogxBayesNets.vcatBayesNets.writetableBayesNets.wsampleBayesNets.wsample!"
},

]}
