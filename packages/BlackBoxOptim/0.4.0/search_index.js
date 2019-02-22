var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BlackBoxOptim.jl-1",
    "page": "Readme",
    "title": "BlackBoxOptim.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: BlackBoxOptim) (Image: BlackBoxOptim) (Image: BlackBoxOptim)BlackBoxOptim is a global optimization package for Julia (http://julialang.org/). It supports both multi- and single-objective optimization problems and is focused on (meta-)heuristic/stochastic algorithms (DE, NES etc) that do NOT require the function being optimized to be differentiable. This is in contrast to more traditional, deterministic algorithms that are often based on gradients/differentiability. It also supports parallel evaluation to speed up optimization for functions that are slow to evaluate."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"BlackBoxOptim\")or directly from github:Pkg.clone(\"https://github.com/robertfeldt/BlackBoxOptim.jl\")from a Julia repl."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To show how the BlackBoxOptim package can be used, let\'s implement the Rosenbrock function, a classic problem in numerical optimization. We\'ll assume that you have already installed BlackBoxOptim as described above.First, we\'ll load BlackBoxOptim and define the Rosenbrock function (in 2 dimensions):using BlackBoxOptim\n\nfunction rosenbrock2d(x)\n  return (1.0 - x[1])^2 + 100.0 * (x[2] - x[1]^2)^2\nendWe can now call the bboptimize() function, specifying the function to be optimized (here: rosenbrock2d()) and the range of values allowed for each of the dimensions of the input:res = bboptimize(rosenbrock2d; SearchRange = (-5.0, 5.0), NumDimensions = 2)We get back an optimization result object that we can query to, for example, get the best fitness and solution candidate:best_fitness(res) < 0.001        # Fitness is typically very close to zero here...\nlength(best_candidate(res)) == 2 # We get back a Float64 vector of dimension 2BlackBoxOptim will default to using an adaptive differential evolution optimizer in this case and use it to try to locate a solution where both elements can be Floats in the range -5.0:5.0. If you wanted a different range of allowed values for the second dimension of the solution you can specify that with a range of allowed values. In this case you do not need to specify the number of dimensions since that is implicit from the number of ranges supplied:bboptimize(rosenbrock2d; SearchRange = [(-5.0, 5.0), (-2.0, 2.0)])If you want to use a different optimizer that can be specified with the Method keyword. For example, using the standard differential evolution optimizer DE/rand/1/bin:bboptimize(rosenbrock2d; SearchRange = (-5.0, 5.0), NumDimensions = 2, Method = :de_rand_1_bin)Note that the rosenbrock2d() function is quite easy to optimize. Even a random search will come close if we give it more time:bboptimize(rosenbrock2d; SearchRange = (-5.0, 5.0), NumDimensions = 2, Method = :random_search, MaxTime = 10.0)But if we optimize the same rosenbrock function in, say, 30 dimensions that will be very hard for a random searcher while sNES or DE can find good solutions if we give them some time. We can compare optimizers using the compare_optimizers() function:function rosenbrock(x)\n  return( sum( 100*( x[2:end] - x[1:end-1].^2 ).^2 + ( x[1:end-1] - 1 ).^2 ) )\nend\n\nres = compare_optimizers(rosenbrock; SearchRange = (-5.0, 5.0), NumDimensions = 30, MaxTime = 3.0);You can find more examples of using BlackBoxOptim in the examples directory."
},

{
    "location": "#Multi-objective-optimization-1",
    "page": "Readme",
    "title": "Multi-objective optimization",
    "category": "section",
    "text": "Multi-objective evaluation is supported by the BorgMOEA algorithm. Your fitness function should return a tuple of the objective values and you should indicate the fitness scheme to be (typically) Pareto fitness and specify the number of objectives. Otherwise the use is similar, here we optimize the Schaffer1 function:fitness_schaffer1(x) = (sumabs2(x), sumabs2(x .- 2.0))\nres = bboptimize(fitness_schaffer1; Method=:borg_moea,\n            FitnessScheme=ParetoFitnessScheme{2}(is_minimizing=true),\n            SearchRange=(-10.0, 10.0), NumDimensions=3, ϵ=0.05,\n            MaxSteps=50000, TraceInterval=1.0, TraceMode=:verbose);pareto_frontier(res) would give a vector of all Pareto-optimal solutions and corresponding fitness values. If we simply want to get one individual with the best aggregated fitness:bs = best_candidate(res)\nbf = best_fitness(res)By default, the aggregated fitness is the sum of the individual objective values, but this could be changed when declaring the fitness scheme, e.g. the weighted sum with weights (0.3, 0.7):weightedfitness(f) = f[1]*0.3 + f[2]*0.7\n\n...\n    FitnessScheme=ParetoFitnessScheme{2}(is_minimizing=true, aggregator=weightedfitness)\n...Of course, once the Pareto set (pareto_frontier(res)) is found, one can apply different criteria to filter the solutions. For example, to find the solution with the minimal first objective:pf = pareto_frontier(res)\nbest_obj1, idx_obj1 = findmin(map(elm -> fitness(elm)[1], pf))\nbo1_solution = params(pf[idx_obj1]) # get the solution candidate itself...or to use different weighted sums:weighedfitness(f, w) = f[1]*w + f[2]*(1.0-w)\nweight = 0.4 # Weight on first objective, so second objective will have weight 1-0.4=0.6\nbest_wfitness, idx = findmin(map(elm -> weighedfitness(fitness(elm), weight), pf))\nbsw = params(pf[idx])"
},

{
    "location": "#Configurable-Options-1",
    "page": "Readme",
    "title": "Configurable Options",
    "category": "section",
    "text": "The section above described the basic API for the BlackBoxOptim package. There is a large number of different optimization algorithms that you can select with the Method keyword (adaptive_de_rand_1_bin, adaptive_de_rand_1_bin_radiuslimited, separable_nes, xnes, de_rand_1_bin, de_rand_2_bin, de_rand_1_bin_radiuslimited, de_rand_2_bin_radiuslimited, random_search, generating_set_search, probabilistic_descent, borg_moea).In addition to the Method parameter, there are many other parameters you can change. Some key ones are:MaxTime: For how long can the optimization run? Defaults to false which means that number of iterations is the given budget, rather than time.\nMaxFuncEvals: How many evaluations that are allowed of the function being optimized.\nTraceMode: How optimization progress should be displayed (:silent, :compact, :verbose). Defaults to :compact that outputs current number of fitness evaluations and best value each TraceInterval seconds.\nPopulationSize: How large is the initial population for population-based optimizers? Defaults to 50.\nTargetFitness. Allows to specify the value of the best fitness for a given problem. The algorithm stops as soon as the distance between the current best_fitness() and TargetFitness is less than FitnessTolerance.This list is not complete though, please refer to the examples and tests directories for additional examples."
},

{
    "location": "#State-of-the-Library-1",
    "page": "Readme",
    "title": "State of the Library",
    "category": "section",
    "text": ""
},

{
    "location": "#Existing-Optimizers-1",
    "page": "Readme",
    "title": "Existing Optimizers",
    "category": "section",
    "text": "Natural Evolution Strategies:\nSeparable NES: separable_nes\nExponential NES: xnes\nDistance-weighted Exponential NES: dxnes\nDifferential Evolution optimizers, 5 different:\nAdaptive DE/rand/1/bin: de_rand_1_bin\nAdaptive DE/rand/1/bin with radius limited sampling: adaptive_de_rand_1_bin_radiuslimited\nDE/rand/1/bin: de_rand_1_bin\nDE/rand/1/bin with radius limited sampling (a type of trivial geography): de_rand_1_bin_radiuslimited\nDE/rand/2/bin: de_rand_2_bin\nDE/rand/2/bin with radius limited sampling (a type of trivial geography): de_rand_2_bin_radiuslimited\nDirect search:\nGenerating set search:\nCompass/coordinate search: generating_set_search\nDirect search through probabilistic descent: probabilistic_descent\nResampling Memetic Searchers:\nResampling Memetic Search (RS): resampling_memetic_search\nResampling Inheritance Memetic Search (RIS): resampling_inheritance_memetic_search\nStochastic Approximation:\nSimultaneous Perturbation Stochastic Approximation (SPSA): simultaneous_perturbation_stochastic_approximation\nRandomSearch (to compare to): random_searchFor multi-objective optimization only the BorgMOEA (borg_moea) is supported but it is a good one. :)"
},

{
    "location": "#Parallel-Function-Evaluation-1",
    "page": "Readme",
    "title": "Parallel Function Evaluation",
    "category": "section",
    "text": "For some (slow) functions being optimized and if you have a multi-core CPU you can gain performance by using parallel evaluation. This typically requires an optimization algorithm that evaluates many candidate points in one batch. The NES family (xnes, dxnes etc) is one such example. See the fileexamples/rosenbrock_parallel.jlfor one example of this."
},

{
    "location": "#Guide-to-selecting-an-optimizer-1",
    "page": "Readme",
    "title": "Guide to selecting an optimizer",
    "category": "section",
    "text": "In our experiments the radius limited DE\'s perform better than the classic de_rand_1_bin DE in almost all cases. And combining it with adaptive setting of the weights makes it even better. So for now adaptive_de_rand_1_bin_radiuslimited() is our recommended \"goto\" optimizer. However, the difference between the top performing DE\'s is slight.The separable NES often beats all of the DE optimizers in the tests we have done. But it is about 2-3 times slower per iteration so not really a fair comparison. It seems it can still hold up even if we normalize for time rather than number of executions but since it is not as good for non-separable problems it is not our default for now. XNES can sometimes beat sNES but scales very badly so is not a good default choice.We maintain a list of optimizers ranked by performance when tested on a large set of problems. From the list we can see that adaptive_de_rand_1_bin_radiuslimited is on top when it comes to mean rank among the tested optimizers. The generating_set_search often gives best results (its MedianLogTimesWorseFitness is 0.6, which means its median fitness value is 10^0.6=3.98 times worse than the best found) and is faster (ranked first on run time often) but it is not as robust as the DE optimizers and thus is ranked lower on mean rank (per problem)."
},

{
    "location": "autodocs/#BlackBoxOptim.AbstractIndividual",
    "page": "Docstrings",
    "title": "BlackBoxOptim.AbstractIndividual",
    "category": "type",
    "text": "The point of the SearchSpace.\n\nThe abstract type. It allows different actual implementations to be used, e.g Vector or SubArray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.AdaptiveDiffEvoParameters",
    "page": "Docstrings",
    "title": "BlackBoxOptim.AdaptiveDiffEvoParameters",
    "category": "type",
    "text": "Specific data and functions for adaptation An Adaptive DE typically changes parameters of the search dynamically. This is typically done in the tell!() function when we know if the trial vector was better than the target vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.AdaptiveDiffEvoRandBin",
    "page": "Docstrings",
    "title": "BlackBoxOptim.AdaptiveDiffEvoRandBin",
    "category": "type",
    "text": "An Adaptive DE crossover operator changes cr and f parameters of the search dynamically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.AdaptiveDiffEvoRandBin1",
    "page": "Docstrings",
    "title": "BlackBoxOptim.AdaptiveDiffEvoRandBin1",
    "category": "type",
    "text": "An Adaptive DE crossover operator changes cr and f parameters of the search dynamically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.AdaptiveDiffEvoRandBin2",
    "page": "Docstrings",
    "title": "BlackBoxOptim.AdaptiveDiffEvoRandBin2",
    "category": "type",
    "text": "An Adaptive DE crossover operator changes cr and f parameters of the search dynamically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.Archive",
    "page": "Docstrings",
    "title": "BlackBoxOptim.Archive",
    "category": "type",
    "text": "Archive saves information about promising solutions during an optimization run.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ArchiveOutput",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ArchiveOutput",
    "category": "type",
    "text": "Base class for archive-specific component of the OptimizationResults.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ArchivedIndividual",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ArchivedIndividual",
    "category": "type",
    "text": "Base class for individuals stored in Archive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.AskTellOptimizer",
    "page": "Docstrings",
    "title": "BlackBoxOptim.AskTellOptimizer",
    "category": "type",
    "text": "Base abstract class for optimizers that perform ask() → ..eval fitness.. → tell!() sequence at each step.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.BimodalCauchy",
    "page": "Docstrings",
    "title": "BlackBoxOptim.BimodalCauchy",
    "category": "type",
    "text": "A mixture of 2 Cauchy distributions. Random values are further constrained to [0.0, 1.0] range either by truncating the initial unconstrained value or by generating new random value until it fits the range.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.BorgMOEA",
    "page": "Docstrings",
    "title": "BlackBoxOptim.BorgMOEA",
    "category": "type",
    "text": "Borg MOEA algorithm.\n\nBased on Hadka & Reed, \"Borg: An Auto-Adaptive Many-Objective Evolutionary Computing Framework\", Evol. Comp. 2013\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.CEC09_UP8",
    "page": "Docstrings",
    "title": "BlackBoxOptim.CEC09_UP8",
    "category": "function",
    "text": "CEC09 Unconstrained Problem 8 objective function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.CEC09_UP8_PF",
    "page": "Docstrings",
    "title": "BlackBoxOptim.CEC09_UP8_PF",
    "category": "function",
    "text": "CEC09 Unconstrained Problem 8 Pareto Frontier. Parameterized by t[1]=f[1] and t[2]=f[2].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.CEC09_Unconstrained_Set",
    "page": "Docstrings",
    "title": "BlackBoxOptim.CEC09_Unconstrained_Set",
    "category": "constant",
    "text": "The collection of CEC09 unconstrained multi-objective problems.\n\nSee http://dces.essex.ac.uk/staff/zhang/MOEAcompetition/cec09testproblem0904.pdf.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.Candidate",
    "page": "Docstrings",
    "title": "BlackBoxOptim.Candidate",
    "category": "type",
    "text": "Candidate solution to the problem.\n\nCandidate can be either a member of the population (index > 0) or a standalone solution (index == -1). Can carry additional information, like the tag or the genetic operator applied (extra).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ComplexFitnessScheme",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ComplexFitnessScheme",
    "category": "type",
    "text": "Complex-valued fitness.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ContinuousSearchSpace",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ContinuousSearchSpace",
    "category": "type",
    "text": "Fixed-dimensional space, each dimension has a continuous range of valid values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.CrossoverOperator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.CrossoverOperator",
    "category": "type",
    "text": "Modifies NC \"children\" by transferring some information from NP \"parents\".\n\nThe concrete implementations must provide apply!() method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.DXNESOpt",
    "page": "Docstrings",
    "title": "BlackBoxOptim.DXNESOpt",
    "category": "type",
    "text": "DX-NES: distance-weighted extensions of xNES by Fukushima et al.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.DefaultParameters",
    "page": "Docstrings",
    "title": "BlackBoxOptim.DefaultParameters",
    "category": "constant",
    "text": "Default parameters for all convenience methods that are exported to the end user.\n\nSee OptRunController for the description.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.DictChain",
    "page": "Docstrings",
    "title": "BlackBoxOptim.DictChain",
    "category": "type",
    "text": "An ordered set of dicts that are examined one after another to find the parameter value. Returns nothing if no param setting is found in any of the dicts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.DirectSearcher",
    "page": "Docstrings",
    "title": "BlackBoxOptim.DirectSearcher",
    "category": "type",
    "text": "A supertype for all generating set searcher-like algorithms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.DirectionGenerator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.DirectionGenerator",
    "category": "type",
    "text": "DirectionGenerator generates the search directions to use at each step of a GSS search.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.EMPTY_PARAMS",
    "page": "Docstrings",
    "title": "BlackBoxOptim.EMPTY_PARAMS",
    "category": "constant",
    "text": "The default placeholder value for parameters argument.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.EmbeddingOperator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.EmbeddingOperator",
    "category": "type",
    "text": "Embeds(projects) the individual into the search space.\n\nThe concrete implementations must provide apply!() method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.EpsBoxArchive",
    "page": "Docstrings",
    "title": "BlackBoxOptim.EpsBoxArchive",
    "category": "type",
    "text": "ϵ-box archive saves only the solutions that are not ϵ-box dominated by any other solutions in the archive.\n\nIt also counts the number of candidate solutions that have been added and how many ϵ-box progresses have been made.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.EpsBoxArchiveFrontierIterator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.EpsBoxArchiveFrontierIterator",
    "category": "type",
    "text": "Iterates occupied elements of the archive.frontier.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.EpsBoxArchiveOutput",
    "page": "Docstrings",
    "title": "BlackBoxOptim.EpsBoxArchiveOutput",
    "category": "type",
    "text": "EpsBoxArchive-specific components of the optimization results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.EpsBoxDominanceFitnessScheme",
    "page": "Docstrings",
    "title": "BlackBoxOptim.EpsBoxDominanceFitnessScheme",
    "category": "type",
    "text": "EpsBoxDominanceFitnessScheme defines ϵ-box dominance for N-tuple (N≧1) fitnesses. It operates with fitnesses of type IndexedTupleFitness.\n\naggregator::AGG is a function mapping tuple fitness to a single numerical value. Might be used for comparisons (or not, depending on the setup). Always used when printing fitness vectors though.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.EpsBoxFrontierIndividual",
    "page": "Docstrings",
    "title": "BlackBoxOptim.EpsBoxFrontierIndividual",
    "category": "type",
    "text": "Individual stored in EpsBoxArchive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.EpsDominanceFitnessScheme",
    "page": "Docstrings",
    "title": "BlackBoxOptim.EpsDominanceFitnessScheme",
    "category": "type",
    "text": "ϵ-dominance for N-tuple (N≧1) fitnesses.\n\naggregator::AGG is a function mapping tuple fitness to a single numerical value. Might be used for comparisons (or not, depending on the setup). Always used when printing fitness vectors though.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.Evaluator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.Evaluator",
    "category": "type",
    "text": "The abstract base for types that manage the objective function evaluation. P is the optimization problem it is used for.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ExponentialNaturalEvolutionStrategyOpt",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ExponentialNaturalEvolutionStrategyOpt",
    "category": "type",
    "text": "Abstract type for a family of NES methods that represent population as\n\nx = μ + σ B⋅Z,\n\nwhere B is an exponential of some symmetric matrix lnB, tr(lnB)==0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FAGeneticOperatorsMixture",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FAGeneticOperatorsMixture",
    "category": "type",
    "text": "Frequency-adapting genetic operators mixture.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FitIndividual",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FitIndividual",
    "category": "type",
    "text": "A point in the problem\'s search space with the corresponding fitness value.\n\nF is the original problem\'s fitness type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FitPopulation",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FitPopulation",
    "category": "type",
    "text": "The default implementation of PopulationWithFitness{F}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FitnessScheme",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FitnessScheme",
    "category": "type",
    "text": "FitnessScheme defines how fitness vectors/values are compared, presented and aggregated. Fitness represents the score of one and the same individual on one or a set of evaluations. A scheme is a specific way to consider the scores in a coherent way. Type parameter F specifies the type of fitness values.\n\nFitnessScheme could also be used as a function that defines the fitness ordering, i.e. fs(x, y) == true iff fitness x is better than y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FixedDimensionSearchSpace",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FixedDimensionSearchSpace",
    "category": "type",
    "text": "SearchSpace with a fixed finite number of dimensions. Applicable to the vast majority of problems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FixedGeneticOperatorsMixture",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FixedGeneticOperatorsMixture",
    "category": "type",
    "text": "Randomly selects the genetic operator from the vector according to its weight and applies it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FrequencyAdapter",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FrequencyAdapter",
    "category": "type",
    "text": "A FrequencyAdapter adapts the frequencies with which a set of values/strategies/methods should be applied/tried in an optimization problem. It is based on the Adaptive Coordinate Frequencies scheme described in:\n\nT. Glasmachers and U. Dogan, \"Accelerated Coordinate Descent with Adaptive Coordinate Frequencies\", 2013.\n\nbut generalized so that it can support more than the adaptation of only the coordinates in a Coordinate Descent scheme. The things that are being adapted are identified by integers in 1:n, with n being the main parameter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FrontierIndividual",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FrontierIndividual",
    "category": "type",
    "text": "Individual representing the solution from the Pareto set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FrontierIndividualWrapper",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FrontierIndividualWrapper",
    "category": "type",
    "text": "Wrapper for FrontierIndividual that allows easy access to the problem fitness.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FunctionBasedProblem",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FunctionBasedProblem",
    "category": "type",
    "text": "OptimizationProblem with the objective function defined by some Julia Function and search space.\n\nOptionally, a known optimal value could be provided to terminate the optimization once it is reached.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.FunctionBasedProblemFamily",
    "page": "Docstrings",
    "title": "BlackBoxOptim.FunctionBasedProblemFamily",
    "category": "type",
    "text": "Family of FunctionBasedProblem optimization problems parameterized by the number of search space dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.GeneratingSetSearcher",
    "page": "Docstrings",
    "title": "BlackBoxOptim.GeneratingSetSearcher",
    "category": "type",
    "text": "Generating Set Search as described in Kolda2003:   Kolda, Tamara G., Robert Michael Lewis, and Virginia Torczon. \"Optimization   by direct search: New perspectives on some classical and modern methods.\"   SIAM review 45.3 (2003): 385-482.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.GeneticOperator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.GeneticOperator",
    "category": "type",
    "text": "Abstract genetic operator that transforms individuals in the population.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.GeneticOperatorsMixture",
    "page": "Docstrings",
    "title": "BlackBoxOptim.GeneticOperatorsMixture",
    "category": "type",
    "text": "A mixture of genetic operators, use next() to choose the next operator from the mixture.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.GibbsMutationOperator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.GibbsMutationOperator",
    "category": "type",
    "text": "Provides apply() operator that mutates one specified dimension of a parameter vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.Hypersurface",
    "page": "Docstrings",
    "title": "BlackBoxOptim.Hypersurface",
    "category": "type",
    "text": "(N-1)-dimensional manifold in N-dimensional space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.IGD",
    "page": "Docstrings",
    "title": "BlackBoxOptim.IGD",
    "category": "function",
    "text": "IGD(A::Vector{NTuple{N,F}}, B::Vector{NTuple{N,F}}, [two_sided=true])\n\nThe average Euclidean distance from the points of A to the points of B.\n\n\n\n\n\nIGD(ref::Hypersurface, sol::Vector{FitIndividual}, [two_sided=true])\n\nAverage Euclidean distance from the exact Pareto frontier of the problem (ref) to the solution (sol) produced by the optimization method. If two_sided is on, returns the maximum of IGD(sol, ref) and IGD(nondominated(ref), sol).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.IndexedTupleFitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.IndexedTupleFitness",
    "category": "type",
    "text": "ϵ-box indexed representation of the N-tuple fitness.\n\nUsed together with EpsBoxDominanceFitnessScheme.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.Individual",
    "page": "Docstrings",
    "title": "BlackBoxOptim.Individual",
    "category": "type",
    "text": "The point of the SearchSpace.\n\nThe concrete type that could be used for storage.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.IndividualsSelector",
    "page": "Docstrings",
    "title": "BlackBoxOptim.IndividualsSelector",
    "category": "type",
    "text": "Selects the individuals from the population.\n\nThe concrete implementations must provide select() method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.JadeFunctionSet",
    "page": "Docstrings",
    "title": "BlackBoxOptim.JadeFunctionSet",
    "category": "constant",
    "text": "JADE collection of optimization problems.\n\nWe skip (for now) f12 and f13 in the JADE paper since they are penalized functions which are quite nonstandard. We also skip f8 since we are unsure about its proper implementation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.MethodNames",
    "page": "Docstrings",
    "title": "BlackBoxOptim.MethodNames",
    "category": "constant",
    "text": "Names of optimization methods accepted by bboptimize(), :Method keyword argument.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.MethodOutput",
    "page": "Docstrings",
    "title": "BlackBoxOptim.MethodOutput",
    "category": "type",
    "text": "Base class for method-specific component of the OptimizationResults.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.MirroredRandomDirectionGen",
    "page": "Docstrings",
    "title": "BlackBoxOptim.MirroredRandomDirectionGen",
    "category": "type",
    "text": "Generate half of the directions randomly and then mirrors by negating them.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.MultiObjectiveMethods",
    "page": "Docstrings",
    "title": "BlackBoxOptim.MultiObjectiveMethods",
    "category": "constant",
    "text": "Multi-objective optimization methods accepted by bboptimize().\n\nThe values are the method initialization routines or types derived from Optimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.MutationClock",
    "page": "Docstrings",
    "title": "BlackBoxOptim.MutationClock",
    "category": "type",
    "text": "Mutation clock operator is a more efficient way to mutate vectors than to generate a random value per variable in the vectors. It instead generates the number of variables to skip until the next mutation. Then it uses a sub-mutation operator to do the actual mutation. This is based on the paper:     Deb and Deb (2012), \"Analyzing Mutation Schemes for Real-Parameter Genetic Algorithms\" but we use a Poisson distribution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.MutationOperator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.MutationOperator",
    "category": "type",
    "text": "Modifies (mutates) one individual.\n\nThe concrete implementations must provide apply!() method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.MutationWrapper",
    "page": "Docstrings",
    "title": "BlackBoxOptim.MutationWrapper",
    "category": "type",
    "text": "Wraps the mutation operator, so that it could be used as crossover operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.NO_GEN_OP",
    "page": "Docstrings",
    "title": "BlackBoxOptim.NO_GEN_OP",
    "category": "constant",
    "text": "Placeholder for no-effect genetic operations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.NoMutation",
    "page": "Docstrings",
    "title": "BlackBoxOptim.NoMutation",
    "category": "type",
    "text": "MutationOperator that does nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.OptController",
    "page": "Docstrings",
    "title": "BlackBoxOptim.OptController",
    "category": "type",
    "text": "Optimization Controller.\n\nApplies specific optimization method to a given problem. Supports restarts and modifying parameter of the method between runs. runcontrollers field maintains the list of OptRunController instances applied so far.\n\nSee OptRunController.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.OptRunController",
    "page": "Docstrings",
    "title": "BlackBoxOptim.OptRunController",
    "category": "type",
    "text": "Optimization Run Controller. Manages problem optimization using the specified method.\n\nSee OptController.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.OptimizationProblem",
    "page": "Docstrings",
    "title": "BlackBoxOptim.OptimizationProblem",
    "category": "type",
    "text": "The base abstract type for all optimization problems. FS is a type of a problem\'s FitnessScheme.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.OptimizationResults",
    "page": "Docstrings",
    "title": "BlackBoxOptim.OptimizationResults",
    "category": "type",
    "text": "The results of running optimization method.\n\nReturned by run!(oc::OptRunController). Should be compatible (on the API level) with the Optim package. See make_opt_results().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.Optimizer",
    "page": "Docstrings",
    "title": "BlackBoxOptim.Optimizer",
    "category": "type",
    "text": "Base abstract class for black-box optimization algorithms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.PM_DefaultOptions",
    "page": "Docstrings",
    "title": "BlackBoxOptim.PM_DefaultOptions",
    "category": "constant",
    "text": "Default parameters for PolynomialMutation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ParallelEvaluationState",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ParallelEvaluationState",
    "category": "type",
    "text": "Current state of fitness function evaluation for the vector of candidates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ParallelEvaluator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ParallelEvaluator",
    "category": "type",
    "text": "Fitness evaluator that distributes candidates fitness calculation among several worker processes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ParallelEvaluatorWorker",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ParallelEvaluatorWorker",
    "category": "type",
    "text": "Internal data for the worker process of the parallel evaluator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ParamBounds",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ParamBounds",
    "category": "type",
    "text": "The valid range of values for a specific dimension in a SearchSpace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.Parameters",
    "page": "Docstrings",
    "title": "BlackBoxOptim.Parameters",
    "category": "type",
    "text": "The parameters storage type for BlackBoxOptim.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ParamsDict",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ParamsDict",
    "category": "type",
    "text": "The default parameters storage in BlackBoxOptim.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ParamsDictChain",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ParamsDictChain",
    "category": "type",
    "text": "An ordered set of dicts that are examined one after another to find the parameter value. Returns nothing if no param setting is found in any of the dicts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ParentCentricCrossover",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ParentCentricCrossover",
    "category": "type",
    "text": "Parent Centric Crossover (PCX).\n\nSee     Deb, K., Anand, A., and Joshi, D., \"A Computationally Efficient Evolutionary Algorithm for Real-Parameter Optimization,\" Evolutionary Computation, vol. 10, no. 4, pp. 371-395, 2002.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ParetoFitnessScheme",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ParetoFitnessScheme",
    "category": "type",
    "text": "Pareto dominance for N-tuple (N≧1) fitnesses.\n\naggregator::AGG is a function mapping tuple fitness to a single numerical value. Might be used for comparisons (or not, depending on the setup). Always used when printing fitness vectors though.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.PolynomialMutation",
    "page": "Docstrings",
    "title": "BlackBoxOptim.PolynomialMutation",
    "category": "type",
    "text": "Polynomial mutation as presented in the paper:     Deb and Deb (2012), \"Analyzing Mutation Schemes for Real-Parameter Genetic Algorithms\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.Population",
    "page": "Docstrings",
    "title": "BlackBoxOptim.Population",
    "category": "type",
    "text": "The base abstract type for the collection of candidate solutions in the population-based optimization methods.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.PopulationMatrix",
    "page": "Docstrings",
    "title": "BlackBoxOptim.PopulationMatrix",
    "category": "type",
    "text": "The simplest Population implementation – a matrix of floats, each column is an individual.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.PopulationOptimizer",
    "page": "Docstrings",
    "title": "BlackBoxOptim.PopulationOptimizer",
    "category": "type",
    "text": "Base class for population-based optimization methods.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.PopulationOptimizerOutput",
    "page": "Docstrings",
    "title": "BlackBoxOptim.PopulationOptimizerOutput",
    "category": "type",
    "text": "PopulationOptimizer-specific components of the OptimizationResults. Stores the final population.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.PopulationWithFitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.PopulationWithFitness",
    "category": "type",
    "text": "The base abstract types for population that also stores the candidates fitness.\n\nF is the fitness type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ProblemEvaluator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ProblemEvaluator",
    "category": "type",
    "text": "Default implementation of the Evaluator.\n\nFP is the original problem\'s fitness type FA is the fitness type actually stored by the archive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ProblemFamily",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ProblemFamily",
    "category": "type",
    "text": "Base class for problem families.\n\nIt is an abstraction for problem parameterization (e.g by the number of the search space dimensions) that allows to instantiate OptimizationProblem for the concrete parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.RadiusLimitedSelector",
    "page": "Docstrings",
    "title": "BlackBoxOptim.RadiusLimitedSelector",
    "category": "type",
    "text": "IndividualsSelector that implements a \"trivial geography\" similar to Spector and Kline (2006) by first sampling an individual randomly and then selecting additional individuals for the same tournament within a certain deme of limited size (radius) for the sub-sequent individuals in the population.\n\nThe version we implement here is from:     I. Harvey, \"The Microbial Genetic Algorithm\", in Advances in Artificial Life     Darwin Meets von Neumann, Springer, 2011. The original paper is:     Spector, L., and J. Klein. 2005. Trivial Geography in Genetic Programming.     In Genetic Programming Theory and Practice III, edited by T. Yu, R.L. Riolo,     and B. Worzel, pp. 109-124. Boston, MA: Kluwer Academic Publishers.     http://faculty.hampshire.edu/lspector/pubs/trivial-geography-toappear.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.RandomBound",
    "page": "Docstrings",
    "title": "BlackBoxOptim.RandomBound",
    "category": "type",
    "text": "Embedding operator that randomly samples between parent\'s value and the nearest parameter boundary to get the new valid value if target\'s parameter is out-of-bounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.RandomSearcher",
    "page": "Docstrings",
    "title": "BlackBoxOptim.RandomSearcher",
    "category": "type",
    "text": "Optimize by randomly generating the candidates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.RangePerDimSearchSpace",
    "page": "Docstrings",
    "title": "BlackBoxOptim.RangePerDimSearchSpace",
    "category": "type",
    "text": "SearchSpace defined by a range of valid values for each dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.RatioFitnessScheme",
    "page": "Docstrings",
    "title": "BlackBoxOptim.RatioFitnessScheme",
    "category": "type",
    "text": "In RatioFitnessScheme the fitness values can be ranked on a ratio scale so pairwise comparisons are not required. The default scale used is the aggregate of the fitness components.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ResamplingMemeticSearcher",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ResamplingMemeticSearcher",
    "category": "type",
    "text": "The variants of the memetic search algorithms RS and RIS. However, we have modified them since they did not give very good performance when implemented as described in the papers below. Possibly, the papers are not unambigous and I have misinterpreted something from them...\n\nThe \"Resampling Search\" (RS) memetic algorithm is described in:\n\nF. Caraffini, F. Neri, M. Gongora and B. N. Passow, \"Re-sampling Search: A\nSeriously Simple Memetic Approach with a High Performance\", 2013.\n\nand its close sibling \"Resampling Inheritance Search\" (RIS) is described in:\n\nF. Caraffini, F. Neri, B. N. Passow and G. Iacca, \"Re-sampled Inheritance\nSearch: High Performance Despite the Simplicity\", 2013.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ScalarFitnessScheme",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ScalarFitnessScheme",
    "category": "type",
    "text": "Float64-valued scalar fitness scheme. The boolean type parameter MIN specifies if smaller fitness values are better (true) or worse (false).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.SearchSpace",
    "page": "Docstrings",
    "title": "BlackBoxOptim.SearchSpace",
    "category": "type",
    "text": "A SearchSpace defines the valid candidate points that could be considered in a search/optimization. The base abstract class has very few restrictions and can allow varying number of dimensions etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.SeparableNESOpt",
    "page": "Docstrings",
    "title": "BlackBoxOptim.SeparableNESOpt",
    "category": "type",
    "text": "Separable Natural Evolution Strategy (sNES) optimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ShiftedAndBiasedProblem",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ShiftedAndBiasedProblem",
    "category": "type",
    "text": "A TransformedProblem subclass that shifts the objective argument and offsets the value: f(x - xshift) + fitshift → min/max, x ∈ X (X stays intact).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.SimpleSelector",
    "page": "Docstrings",
    "title": "BlackBoxOptim.SimpleSelector",
    "category": "type",
    "text": "Simple random IndividualsSelector.\n\nThe probabilties of all candidates are equal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.SimplexCrossover",
    "page": "Docstrings",
    "title": "BlackBoxOptim.SimplexCrossover",
    "category": "type",
    "text": "Simplex Crossover (SPX).\n\nϵ>0 controls how the original simplex is inflated, ϵ=1 means no inflation.\n\nSee Tsutsui, Yamamura & Higuchi \"Multi-parent recombination with simplex crossover in real coded genetic algorithms\", 1999, Proc. of the Genetic and Evolutionary Computation Conference\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.SimulatedBinaryCrossover",
    "page": "Docstrings",
    "title": "BlackBoxOptim.SimulatedBinaryCrossover",
    "category": "type",
    "text": "Simulated Binary Crossover (SBX).\n\nSee Deb&Agrawal \"Simulated binary crossover for continuous search space\", 1994, Complex Systems\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.SingleObjectiveMethods",
    "page": "Docstrings",
    "title": "BlackBoxOptim.SingleObjectiveMethods",
    "category": "constant",
    "text": "Single objective optimization methods accepted by bboptimize().\n\nThe values are the method initialization routines or types derived from Optimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.SteppingOptimizer",
    "page": "Docstrings",
    "title": "BlackBoxOptim.SteppingOptimizer",
    "category": "type",
    "text": "Optimizers derived from SteppingOptimizer implement classical iterative optimization scheme step!() → step!() → …\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.StochasticApproximationOptimizer",
    "page": "Docstrings",
    "title": "BlackBoxOptim.StochasticApproximationOptimizer",
    "category": "type",
    "text": "AskTellOptimizer that utilizes randomization to generate the candidates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.TopListArchive",
    "page": "Docstrings",
    "title": "BlackBoxOptim.TopListArchive",
    "category": "type",
    "text": "Archive that maintains a top list of the best performing (best fitness) candidates seen so far.\n\nThe two last best fitness values could be used to estimate a confidence interval for how much improvement potential there is.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.TopListArchiveOutput",
    "page": "Docstrings",
    "title": "BlackBoxOptim.TopListArchiveOutput",
    "category": "type",
    "text": "TopListArchive-specific components of the optimization results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.TopListFitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.TopListFitness",
    "category": "type",
    "text": "Fitness as stored in TopListArchive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.TopListIndividual",
    "page": "Docstrings",
    "title": "BlackBoxOptim.TopListIndividual",
    "category": "type",
    "text": "Individual stored in TopListArchive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.TournamentSelector",
    "page": "Docstrings",
    "title": "BlackBoxOptim.TournamentSelector",
    "category": "type",
    "text": "Tournament selector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.TransformedProblem",
    "page": "Docstrings",
    "title": "BlackBoxOptim.TransformedProblem",
    "category": "type",
    "text": "TransformedProblem{FS, P} is an abstract class for optimization problems derived from some original problem of type P by introducing a few changes.\n\nThe concrete derived types must implement:\n\nobjfunc() method\nfitness_scheme() and search_space()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.TupleFitnessScheme",
    "page": "Docstrings",
    "title": "BlackBoxOptim.TupleFitnessScheme",
    "category": "type",
    "text": "Base class for tuple-based fitness schemes.\n\nType parameters:\n\nN is the number of the objectives\nF is the type of each objective\nFA is the actual type of the multi-objective fitness\nMIN if objectives should be minimized or maximized\nAGG the type of aggregator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.UniformMutation",
    "page": "Docstrings",
    "title": "BlackBoxOptim.UniformMutation",
    "category": "type",
    "text": "Uniform mutation of a parameter vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.UnimodalNormalDistributionCrossover",
    "page": "Docstrings",
    "title": "BlackBoxOptim.UnimodalNormalDistributionCrossover",
    "category": "type",
    "text": "Unimodal Normal Distribution Crossover (UNDX).\n\nSee     Kita, H., Ono, I., and Kobayashi, S., \"Multi-parental Extension of the Unimodal Normal Distribution Crossover for Real-coded Genetic Algorithms,\" Proceedings of the 1999 Congress on Evolutionary Computation, pp. 1581-1588, 1999.     Deb, K., Anand, A., and Joshi, D., \"A Computationally Efficient Evolutionary Algorithm for Real-Parameter Optimization,\" Evolutionary Computation, vol. 10, no. 4, pp. 371-395, 2002.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.XNESOpt",
    "page": "Docstrings",
    "title": "BlackBoxOptim.XNESOpt",
    "category": "type",
    "text": "xNES method.\n\nNice but scales badly with increasing dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ZERO_SEARCH_SPACE",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ZERO_SEARCH_SPACE",
    "category": "constant",
    "text": "0-dimensional search space. Could be used as a placeholder for optional SearchSpace parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.accept_candi!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.accept_candi!",
    "category": "function",
    "text": "Put the candidate back into the pool and copy the values into the corresponding individual of the population (candi.index should be set).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.acquire_candi",
    "page": "Docstrings",
    "title": "BlackBoxOptim.acquire_candi",
    "category": "function",
    "text": "acquire_candi(pop::FitPopulation[, {ix::Int, candi::Candidate}])\n\nGet individual from a pool, or create one if the pool is empty. By default the individual is not initialized, but if ix or candi is specified, the corresponding fields of the new candidate are set to the given values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.add_candidate!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.add_candidate!",
    "category": "function",
    "text": "add_candidate!(a::TopListArchive, fitness::F, candidate[, tag=0][, num_fevals=-1])\n\nAdd a candidate with a fitness to the archive (if it is good enough).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.adjust!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.adjust!",
    "category": "function",
    "text": "Adjust the internal parameters of the genetic operator op taking into account the fitness change.\n\nThe default implementation does nothing.\n\n\n\n\n\nAdjust the parameters of the method after the candidate evaluation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.aggregate",
    "page": "Docstrings",
    "title": "BlackBoxOptim.aggregate",
    "category": "function",
    "text": "Aggregation is just the identity function for scalar fitness.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.apply!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.apply!",
    "category": "function",
    "text": "Default implementation of apply!() for operators mixture.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.archived_fitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.archived_fitness",
    "category": "function",
    "text": "archived_fitness(fit, a::Archive)\n\nConverts given fitness fit to the format used by the archive a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ask",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ask",
    "category": "function",
    "text": "ask(ato::AskTellOptimizer)\n\nAsk for a new candidate solution to be generated, and a list of individuals it should be ranked with.\n\nThe individuals are supplied as an array of tuples with the individual and its index.\n\nSee also tell!()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.assign_weights!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.assign_weights!",
    "category": "function",
    "text": "assign_weights!(weights, rankedCandidates, sortedWeights)\n\nAssigns the candidate weights according to the candidate index. rankedCandidates are ranked by their fitness, sortedWeights are the corresponding weights.\n\nReturns candidate weights sorted by the individual\'s index in the population.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.bboptimize",
    "page": "Docstrings",
    "title": "BlackBoxOptim.bboptimize",
    "category": "function",
    "text": "bboptimize(problem[; parameters::Associative, kwargs...])\n\nSolve given optimization problem.\n\nSee setup_problem() for the types of problem supported. In addition, the problem could be OptController containing the results of the previous optimization runs.\n\nThe optimization method parameters could be specified via kwargs or parameters arguments.\n\nReturns OptimizationResults instance.\n\nSee also bbsetup().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.bbsetup",
    "page": "Docstrings",
    "title": "BlackBoxOptim.bbsetup",
    "category": "function",
    "text": "bbsetup(problem[; parameters::Associative, kwargs...])\n\nSet up optimization method for a given problem.\n\nSee setup_problem() for the types of problem supported. The optimization method parameters could be specified via kwargs or parameters arguments.\n\nReturns the initialized OptController instance. To actually run the method call bboptimize() or run!().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.calculate_evol_path_params",
    "page": "Docstrings",
    "title": "BlackBoxOptim.calculate_evol_path_params",
    "category": "function",
    "text": "Calculate the parameters for evolutionary path.\n\nReturns the tuple:\n\nmoving threshold\npath discount\ncurrent Z scale\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.count_dict_report",
    "page": "Docstrings",
    "title": "BlackBoxOptim.count_dict_report",
    "category": "function",
    "text": "Report the number of times each key was encountered in a count dict.\n\nReturns a percentage dict calculated while iterating over the counted items.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.de_rand_1_bin",
    "page": "Docstrings",
    "title": "BlackBoxOptim.de_rand_1_bin",
    "category": "function",
    "text": "The most used DE/rand/1/bin variant of differential evolution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.de_rand_1_bin_radiuslimited",
    "page": "Docstrings",
    "title": "BlackBoxOptim.de_rand_1_bin_radiuslimited",
    "category": "function",
    "text": "The most used DE/rand/1/bin variant with \"local geography\" via radius-limited sampling.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.deceptive_cuccu2011",
    "page": "Docstrings",
    "title": "BlackBoxOptim.deceptive_cuccu2011",
    "category": "function",
    "text": "Generator for the family of deceptive functions from the Cuccu2011 paper on novelty-based restarts. We have vectorized it to allow more than 1D versions. The Cuccu2011 paper uses the following values for\n\n(l, w) = [(5, 0),  (15, 0),  (30, 0),\n          (5, 2),  (15, 2),  (30, 2),\n          (5, 10), (15, 10), (30, 10)]\n\nand notes that (15, 2) and (30, 2) are the most difficult instances.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.delta_fitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.delta_fitness",
    "category": "function",
    "text": "delta_fitness(a::TopListArchive)\n\nThe difference between the current best fitness and the former best fitness.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.distance",
    "page": "Docstrings",
    "title": "BlackBoxOptim.distance",
    "category": "function",
    "text": "distance(a::NTuple{N,F}, b::NTuple{N,F})\n\nEuclidean distance from a to b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.distance_to_optimum",
    "page": "Docstrings",
    "title": "BlackBoxOptim.distance_to_optimum",
    "category": "function",
    "text": "Get the distance from a fitness value to the optimum/best known fitness value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ellipsoid",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ellipsoid",
    "category": "function",
    "text": "Schwefel\'s ellipsoid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.energy_tsallis1996",
    "page": "Docstrings",
    "title": "BlackBoxOptim.energy_tsallis1996",
    "category": "function",
    "text": "From section 3, page 7, of Tsallis1996 paper:     Tsallis and Stariolo, \"Generalized simulated annealing\", Physica A, 1996. available from http://www.if.ufrgs.br/~stariolo/publications/TsSt96PhysA233395_1996.pdf the original paper used this as a 4-dimensional problem but here it is generalized.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.evolved_pair",
    "page": "Docstrings",
    "title": "BlackBoxOptim.evolved_pair",
    "category": "function",
    "text": "Post-process the evolved pair.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.feasible",
    "page": "Docstrings",
    "title": "BlackBoxOptim.feasible",
    "category": "function",
    "text": "Projects a given point onto the search space coordinate-wise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.fill_block!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.fill_block!",
    "category": "function",
    "text": "Fill the block of methods to apply.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.fitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.fitness",
    "category": "function",
    "text": "fitness(x, p::OptimizationProblem)\n\nEvaluates the fitness of a candidate.\n\n\n\n\n\nfitness(indi::FitIndividual)\n\nGets the fitness of the individual.\n\n\n\n\n\nfitness(params::Individual, e::ProblemEvaluator, tag::Int=0)\n\nEvaluate the fitness and implicitly update the archive with the provided parameters and calculated fitness.\n\nReturns the fitness in the archived format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.fitness_improvement_potential",
    "page": "Docstrings",
    "title": "BlackBoxOptim.fitness_improvement_potential",
    "category": "function",
    "text": "fitness_improvement_potential(a::Archive[, p = 0.01])\n\nCalculate the solution improvement potential.\n\nThe percentage improvement that can be expected from the current fitness value at a given p-value. In theory, an optimization run should be terminated when this value is very small, i.e. there is little improvement potential left in the run.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.fitness_is_within_ftol",
    "page": "Docstrings",
    "title": "BlackBoxOptim.fitness_is_within_ftol",
    "category": "function",
    "text": "Checks if the current best fitness is within the given range of a known best fitness. By default the best fitness is unknown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.fitness_shaping_utilities_linear",
    "page": "Docstrings",
    "title": "BlackBoxOptim.fitness_shaping_utilities_linear",
    "category": "function",
    "text": "fitness_shaping_utilities_linear(n)\n\nCalculate the n-dimensional fitness shaping utilities vector using the \"steps\" method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.fitness_shaping_utilities_log",
    "page": "Docstrings",
    "title": "BlackBoxOptim.fitness_shaping_utilities_log",
    "category": "function",
    "text": "fitness_shaping_utilities_log(n)\n\nCalculate the n-dimensional fitness shaping utilities vector using the \"log\" method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.fitness_type",
    "page": "Docstrings",
    "title": "BlackBoxOptim.fitness_type",
    "category": "function",
    "text": "fitness_type(fs::FitnessScheme)\nfitness_type(fs_type::Type{FitnessScheme})\n\nGet the type of fitness values for fitness scheme fs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.format_fitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.format_fitness",
    "category": "function",
    "text": "format_fitness(fit, [problem::OptimizationProblem])\n\nFormat fitness into a string. Calls show_fitness() under the hood.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.generate",
    "page": "Docstrings",
    "title": "BlackBoxOptim.generate",
    "category": "function",
    "text": "generate(surf::Hypersurface, fs::EpsBoxDominanceFitnessScheme, param_step = 0.1*fs.ϵ)\n\nGenerate the points of the hypersurface using the discretization defined by ϵ-box fitness schema.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.hartman",
    "page": "Docstrings",
    "title": "BlackBoxOptim.hartman",
    "category": "function",
    "text": "Generic function for Hartman N problem family.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.hartman3",
    "page": "Docstrings",
    "title": "BlackBoxOptim.hartman3",
    "category": "function",
    "text": "Hartman 3D is a multi-minima, non-separable test problem. Our implementation is based on: http://www.sfu.ca/~ssurjano/hart3.html However, we get a different global minima than the one stated on that page. The minima should be -3.86278 but we get a different one so use that in the problem spec:\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.hartman6",
    "page": "Docstrings",
    "title": "BlackBoxOptim.hartman6",
    "category": "function",
    "text": "Hartman 6D is a multi-minima, non-separable test problem. Our implementation is based on: http://www.sfu.ca/~ssurjano/hart6.html\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.hat_compare",
    "page": "Docstrings",
    "title": "BlackBoxOptim.hat_compare",
    "category": "function",
    "text": "Check whether f1 or f2 fitness is better.\n\nReturns\n\n-1 if f1 is better than f2\n1 if f2 is better than f1\n0 if f1 and f2 are equal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.hat_compare_ϵ_box",
    "page": "Docstrings",
    "title": "BlackBoxOptim.hat_compare_ϵ_box",
    "category": "function",
    "text": "Returns a tuple of u and v comparison:\n\n-1: u≺v\n0: u and v non-dominating\n1: u≻v\n\nand whether u index fully matches v index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.ini_xnes_B",
    "page": "Docstrings",
    "title": "BlackBoxOptim.ini_xnes_B",
    "category": "function",
    "text": "Identity for generic search space \n\n\n\n\n\nCalculates the initial log B matrix for xNES based on the deltas of each dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.instantiate",
    "page": "Docstrings",
    "title": "BlackBoxOptim.instantiate",
    "category": "function",
    "text": "instantiate(family::FunctionBasedProblemFamily, ndim::Int)\n\nConstruct FunctionBasedProblem with the given number of dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.instantiate_search_space",
    "page": "Docstrings",
    "title": "BlackBoxOptim.instantiate_search_space",
    "category": "function",
    "text": "instantiate(family::FunctionBasedProblemFamily, ndim::Int)\n\nConstruct search space for FunctionBasedProblem with the given number of dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.last_fitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.last_fitness",
    "category": "function",
    "text": "last_fitness(e::Evaluator)\n\nGet the fitness of the last evaluated candidate.\n\nLeads to nicer code if we can first test if it is better or worse than existing candidates and only want the fitness itself if the criteria fulfilled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.magnitude_class",
    "page": "Docstrings",
    "title": "BlackBoxOptim.magnitude_class",
    "category": "function",
    "text": "Get a tuple of the sign and the magnitude of the value rounded to the first digit. Used for archiving candidates separately for each magnitude class.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.make_evaluator",
    "page": "Docstrings",
    "title": "BlackBoxOptim.make_evaluator",
    "category": "function",
    "text": "Create Evaluator instance for a given problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.merge_fitness_histories",
    "page": "Docstrings",
    "title": "BlackBoxOptim.merge_fitness_histories",
    "category": "function",
    "text": "merge_fitness_histories(histories)\n\nMerge the collection of multiple fitness histories and calculate the min, max, avg and median values for fitness and FIR (fitness improvement ratio) at each point where the fitness is changing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.next",
    "page": "Docstrings",
    "title": "BlackBoxOptim.next",
    "category": "function",
    "text": "next(fa::FrequencyAdapter)\n\nGive the index of the method that should be used at the next iteration.\n\nFrequencyAdapter maintains a block of randomly shuffled methods. The function takes the next available method in the block. If the block is empty, it is repopulated.\n\nThe methods are randomly shuffled each time the block is regenerated, since we need to know their effectiveness at every period of the optimization process.\n\n\n\n\n\nnext(fa::FixedGeneticOperatorsMixture)\n\nGets the random genetic operator from the mixture.\n\nThe probability to select an operator is proportional to its weight.\n\nReturns a tuple of the genetic operator and its index in the mix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.next_candidate!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.next_candidate!",
    "category": "function",
    "text": "Get the index of the next candidate for evaluation based on the Base.pmap() code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.nondominated",
    "page": "Docstrings",
    "title": "BlackBoxOptim.nondominated",
    "category": "function",
    "text": "nondominated(fitnesses, fit_scheme)\n\nFilter fitnesses removing all dominated values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.noprogress_streak",
    "page": "Docstrings",
    "title": "BlackBoxOptim.noprogress_streak",
    "category": "function",
    "text": "noprogress_streak(a::EpsBoxArchive, [since_restart])\n\nGet the number of add_candidate!() calls since the last ϵ-progress. If since_restart is specified, the number is relative to the last restart.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.params",
    "page": "Docstrings",
    "title": "BlackBoxOptim.params",
    "category": "function",
    "text": "Get the problem parameters (a point in the search space) of the individual.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.pareto_frontier",
    "page": "Docstrings",
    "title": "BlackBoxOptim.pareto_frontier",
    "category": "function",
    "text": "Get the iterator to the individuals on the Pareto frontier.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.population",
    "page": "Docstrings",
    "title": "BlackBoxOptim.population",
    "category": "function",
    "text": "Generate a population for a given problem.\n\nThe default method to generate a population, uses Latin Hypercube Sampling.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.problem_set",
    "page": "Docstrings",
    "title": "BlackBoxOptim.problem_set",
    "category": "function",
    "text": "problem_set(ps::Dict{Any, FunctionBasedProblemFamily}, dims::Union{Int,Vector{Int}})\n\nConstruct a fixed-dimensional version of each problem from ps for each dimension given in dims.\n\nReturns a dictionary of problems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.rand_frontier_index",
    "page": "Docstrings",
    "title": "BlackBoxOptim.rand_frontier_index",
    "category": "function",
    "text": "Get random occupied Pareto frontier index. Returns 0 if frontier is empty.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.rand_individual",
    "page": "Docstrings",
    "title": "BlackBoxOptim.rand_individual",
    "category": "function",
    "text": "Generate one random candidate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.rand_individuals",
    "page": "Docstrings",
    "title": "BlackBoxOptim.rand_individuals",
    "category": "function",
    "text": "Generate numIndividuals individuals by random sampling in the search space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.rand_individuals_lhs",
    "page": "Docstrings",
    "title": "BlackBoxOptim.rand_individuals_lhs",
    "category": "function",
    "text": "Generate numIndividuals individuals by latin hypercube sampling (LHS). This should be the default way to create the initial population.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.range_for_dim",
    "page": "Docstrings",
    "title": "BlackBoxOptim.range_for_dim",
    "category": "function",
    "text": "Get the range of valid values for a specific dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.release_candi",
    "page": "Docstrings",
    "title": "BlackBoxOptim.release_candi",
    "category": "function",
    "text": "Put the candidate back to the pool.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.report_from_result_dict",
    "page": "Docstrings",
    "title": "BlackBoxOptim.report_from_result_dict",
    "category": "function",
    "text": "Print a report based on a result dict from one set of repeated runs of an optimization method. Returns the success rate, i.e. number of times the termination reason was \"Within fitness tolerance...\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.report_on_values",
    "page": "Docstrings",
    "title": "BlackBoxOptim.report_on_values",
    "category": "function",
    "text": "Summarize a vector of float values by stating its mean, std dev and median.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.reset!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.reset!",
    "category": "function",
    "text": "Reset the current ParallelEvaluationState and the vector of candidates that need fitness evaluation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.reset_fitness!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.reset_fitness!",
    "category": "function",
    "text": "Reset the candidate fitness.\n\nNeed it when the candidate parameters have changed, but the stored fitness is still for the old parameter set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.restart!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.restart!",
    "category": "function",
    "text": "Restart Borg MOEA.\n\nResize and refills the population from the archive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.run!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.run!",
    "category": "function",
    "text": "run!(ctrl::OptRunController)\n\nRun optimization until one of the stopping conditions are satisfied.\n\n\n\n\n\nrun!(oc::OptController)\n\nStart a new optimization run, possibly with new parameters and report on results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.sample_unit_hypersphere",
    "page": "Docstrings",
    "title": "BlackBoxOptim.sample_unit_hypersphere",
    "category": "function",
    "text": "Generate num random vectors on the n-dimensional, unit (hyper)sphere. This is the Muller-Marsaglia method as described here.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.select",
    "page": "Docstrings",
    "title": "BlackBoxOptim.select",
    "category": "function",
    "text": "select(selector<:IndividualsSelector, population, numSamples::Int)\n\nSelect numSamples random candidates from the population.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.setup_problem",
    "page": "Docstrings",
    "title": "BlackBoxOptim.setup_problem",
    "category": "function",
    "text": "setup_problem(problem, parameters::Parameters)\n\nSet up a fixed-dimensional optimization problem.\n\nThere are several setup_problem() method that accept different type of problem argument:     * OptimizationProblem     * function (:NumDimensions has to be specified in parameters)     * FunctionBasedProblemFamily (:NumDimensions has to be specified in parameters)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.shekel",
    "page": "Docstrings",
    "title": "BlackBoxOptim.shekel",
    "category": "function",
    "text": "Generic function to define ShekelN problems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.shekel10",
    "page": "Docstrings",
    "title": "BlackBoxOptim.shekel10",
    "category": "function",
    "text": "Shekel10 is a 4D, multi-minima, non-separable test problem. Our implementation is based on the C code in: http://www.math.ntu.edu.tw/~wwang/colalab/testproblems/multipleopt/multioptprob/Shekel10/Shekel10.c\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.shekel5",
    "page": "Docstrings",
    "title": "BlackBoxOptim.shekel5",
    "category": "function",
    "text": "Shekel5 is a 4D, multi-minima, non-separable test problem. Our implementation is based on the C code in: http://www.math.ntu.edu.tw/~wwang/colalab/testproblems/multipleopt/multioptprob/Shekel5/Shekel5.c\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.shekel7",
    "page": "Docstrings",
    "title": "BlackBoxOptim.shekel7",
    "category": "function",
    "text": "Shekel7 is a 4D, multi-minima, non-separable test problem. Our implementation is based on the C code in: http://www.math.ntu.edu.tw/~wwang/colalab/testproblems/multipleopt/multioptprob/Shekel7/Shekel7.c\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.show_fitness",
    "page": "Docstrings",
    "title": "BlackBoxOptim.show_fitness",
    "category": "function",
    "text": "show_fitness(io, fit, [problem::OptimizationProblem])\n\nOutput fitness to the given IO stream. show_fitness() method could be overridden for a specific problem, e.g. to print the names of each objective.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.step!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.step!",
    "category": "function",
    "text": "step!(opt::SteppingOptimizer)\n\nDo one iteration of the method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.symmetric_search_space",
    "page": "Docstrings",
    "title": "BlackBoxOptim.symmetric_search_space",
    "category": "function",
    "text": "Create RangePerDimSearchSpace with given number of dimensions and given range of valid values for each dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.t_asy",
    "page": "Docstrings",
    "title": "BlackBoxOptim.t_asy",
    "category": "function",
    "text": "Transform symmetric f into asymmetric objective function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.t_diag",
    "page": "Docstrings",
    "title": "BlackBoxOptim.t_diag",
    "category": "function",
    "text": "Transform f into objective function with ill-conditioning effect.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.t_irreg",
    "page": "Docstrings",
    "title": "BlackBoxOptim.t_irreg",
    "category": "function",
    "text": "Transform f into objective function with smooth local irregularities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.tagcounts",
    "page": "Docstrings",
    "title": "BlackBoxOptim.tagcounts",
    "category": "function",
    "text": "tagcounts(a::EpsBoxArchive)\n\nCount the tags of individuals on the ϵ-box frontier. Each restart the individual remains in the frontier discounts it by θ.\n\nReturns the tag→count dictionary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.tell!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.tell!",
    "category": "function",
    "text": "tell!(ato::AskTellOptimizer, rankedCandidates)\n\nTell the optimizer about the ranking of candidates. Returns the number of rankedCandidates that were inserted into the population, because of the improved fitness.\n\nSee also ask().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.tournament",
    "page": "Docstrings",
    "title": "BlackBoxOptim.tournament",
    "category": "function",
    "text": "Simulate tournament among specified candidates.\n\nReturns the index of the winner.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.trace_state",
    "page": "Docstrings",
    "title": "BlackBoxOptim.trace_state",
    "category": "function",
    "text": "trace_state(io, op::GeneticOperator, mode::Symbol)\n\nTrace the state of the operator. Called by trace_progress() during OptRunController run by some of the genetic optimizers.\n\nOverride the method to trace the state of your genetic operator.\n\n\n\n\n\ntrace_state(io::IO, optimizer::Optimizer, mode::Symbol)\n\nTrace the current optimization state to a given IO stream. Called by OptRunController trace_progress().\n\nOverride it for your optimizer to generate method-specific diagnostic traces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.update!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.update!",
    "category": "function",
    "text": "Update the internal model of progress and success rate of each method based on the latest progress value of one method. Progress values should be larger the larger the progress/improvement was.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.update_parameters!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.update_parameters!",
    "category": "function",
    "text": "update_parameters!(oc::OptController, parameters::Associative)\n\nUpdate the OptController parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.update_recombination_weights!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.update_recombination_weights!",
    "category": "function",
    "text": "Update recombination operator probabilities based on the archive tag counts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.viewer",
    "page": "Docstrings",
    "title": "BlackBoxOptim.viewer",
    "category": "function",
    "text": "viewer(population, individual_index)\n\nGet vector-slice of the population matrix for the specified individual. Does not allocate any additional space, while still providing the same lookup performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.width_of_confidence_interval",
    "page": "Docstrings",
    "title": "BlackBoxOptim.width_of_confidence_interval",
    "category": "function",
    "text": "Calculate the width of the confidence interval at a certain p-value. This is based on the paper:     Carvalho (2011), \"Confidence intervals for the minimum of a     function using extreme value statistics\"\n\nThis means that the current estimate of the confidence interval for the minimum of the optimized function lies within the interval\n\n] l1 - w, l1 [\n\nwith probability (1-p) as the number of sampled function points goes to infinity, where\n\nw = width_of_confidence_interval(a, p)\nl1 = best_fitness(a)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptim.worker_finished!",
    "page": "Docstrings",
    "title": "BlackBoxOptim.worker_finished!",
    "category": "function",
    "text": "Notify that the worker process is finished and reset its busy flag.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BlackBoxOptim.ADE_DefaultOptionsBlackBoxOptim.AbstractIndividualBlackBoxOptim.AbstractPopulationMatrixBlackBoxOptim.AdaptiveDiffEvoParametersBlackBoxOptim.AdaptiveDiffEvoRandBinBlackBoxOptim.AdaptiveDiffEvoRandBin1BlackBoxOptim.AdaptiveDiffEvoRandBin2BlackBoxOptim.ArchiveBlackBoxOptim.ArchiveOutputBlackBoxOptim.ArchivedIndividualBlackBoxOptim.AskTellOptimizerBlackBoxOptim.BimodalCauchyBlackBoxOptim.BlackBoxOptimBlackBoxOptim.BorgMOEABlackBoxOptim.BorgMOEA_DefaultParametersBlackBoxOptim.CEC09_UP8BlackBoxOptim.CEC09_UP8_PFBlackBoxOptim.CEC09_Unconstrained_SetBlackBoxOptim.CandidateBlackBoxOptim.ChannelRefBlackBoxOptim.ComplexFitnessSchemeBlackBoxOptim.ConstantDirectionGenBlackBoxOptim.ContinuousSearchSpaceBlackBoxOptim.CrossoverOperatorBlackBoxOptim.DEX_DefaultOptionsBlackBoxOptim.DE_DefaultOptionsBlackBoxOptim.DXNESOptBlackBoxOptim.DXNES_DefaultOptionsBlackBoxOptim.DefaultParametersBlackBoxOptim.DictChainBlackBoxOptim.DiffEvoCrossoverOperatorBlackBoxOptim.DiffEvoOptBlackBoxOptim.DiffEvoRandBinBlackBoxOptim.DiffEvoRandBin1BlackBoxOptim.DiffEvoRandBin2BlackBoxOptim.DirectSearchProbabilisticDescentDefaultParametersBlackBoxOptim.DirectSearcherBlackBoxOptim.DirectionGeneratorBlackBoxOptim.DummyMethodOutputBlackBoxOptim.EMPTY_PARAMSBlackBoxOptim.EmbeddingOperatorBlackBoxOptim.EpsBoxArchiveBlackBoxOptim.EpsBoxArchiveFrontierIteratorBlackBoxOptim.EpsBoxArchiveOutputBlackBoxOptim.EpsBoxArchive_DefaultParametersBlackBoxOptim.EpsBoxDominanceFitnessSchemeBlackBoxOptim.EpsBoxFrontierIndividualBlackBoxOptim.EpsDominanceFitnessSchemeBlackBoxOptim.EvaluatorBlackBoxOptim.ExponentialNaturalEvolutionStrategyOptBlackBoxOptim.FAGeneticOperatorsMixtureBlackBoxOptim.FitIndividualBlackBoxOptim.FitPopulationBlackBoxOptim.FitnessSchemeBlackBoxOptim.FixedDimensionSearchSpaceBlackBoxOptim.FixedGeneticOperatorsMixtureBlackBoxOptim.FrequencyAdapterBlackBoxOptim.FrontierIndividualBlackBoxOptim.FrontierIndividualWrapperBlackBoxOptim.FunctionBasedProblemBlackBoxOptim.FunctionBasedProblemFamilyBlackBoxOptim.GSSDefaultParametersBlackBoxOptim.GeneratingSetSearcherBlackBoxOptim.GeneticOperatorBlackBoxOptim.GeneticOperatorsMixtureBlackBoxOptim.GibbsMutationOperatorBlackBoxOptim.Hartman3BlackBoxOptim.Hartman3_ABlackBoxOptim.Hartman3_PBlackBoxOptim.Hartman3_alphaBlackBoxOptim.Hartman6BlackBoxOptim.Hartman6_ABlackBoxOptim.Hartman6_PBlackBoxOptim.Hartman6_alphaBlackBoxOptim.HatCompareBlackBoxOptim.HypersurfaceBlackBoxOptim.IGDBlackBoxOptim.IndexedTupleFitnessBlackBoxOptim.IndividualBlackBoxOptim.IndividualsSelectorBlackBoxOptim.JadeFunctionSetBlackBoxOptim.MaximizingFitnessSchemeBlackBoxOptim.MethodNamesBlackBoxOptim.MethodOutputBlackBoxOptim.MinimizationProblemFamilyBlackBoxOptim.MinimizingFitnessSchemeBlackBoxOptim.MirroredRandomDirectionGenBlackBoxOptim.MultiObjectiveMethodNamesBlackBoxOptim.MultiObjectiveMethodsBlackBoxOptim.MutationClockBlackBoxOptim.MutationOperatorBlackBoxOptim.MutationWrapperBlackBoxOptim.NES_DefaultOptionsBlackBoxOptim.NO_GEN_OPBlackBoxOptim.NaturalEvolutionStrategyOptBlackBoxOptim.NoMutationBlackBoxOptim.OptControllerBlackBoxOptim.OptRunControllerBlackBoxOptim.OptimizationProblemBlackBoxOptim.OptimizationResultsBlackBoxOptim.OptimizerBlackBoxOptim.PCX_DefaultOptionsBlackBoxOptim.PM_DefaultOptionsBlackBoxOptim.ParallelEvaluationStateBlackBoxOptim.ParallelEvaluatorBlackBoxOptim.ParallelEvaluatorWorkerBlackBoxOptim.ParallelEvaluatorWorkerRefBlackBoxOptim.ParamBoundsBlackBoxOptim.ParametersBlackBoxOptim.ParamsDictBlackBoxOptim.ParamsDictChainBlackBoxOptim.ParentCentricCrossoverBlackBoxOptim.ParetoFitnessSchemeBlackBoxOptim.PolynomialMutationBlackBoxOptim.PopulationBlackBoxOptim.PopulationMatrixBlackBoxOptim.PopulationOptimizerBlackBoxOptim.PopulationOptimizerOutputBlackBoxOptim.PopulationWithFitnessBlackBoxOptim.ProblemEvaluatorBlackBoxOptim.ProblemFamilyBlackBoxOptim.ProblemsBlackBoxOptim.RISDefaultParametersBlackBoxOptim.RSDefaultParametersBlackBoxOptim.RadiusLimitedSelectorBlackBoxOptim.RandomBoundBlackBoxOptim.RandomDirectionGenBlackBoxOptim.RandomSearcherBlackBoxOptim.RangePerDimSearchSpaceBlackBoxOptim.RatioFitnessSchemeBlackBoxOptim.ResamplingInheritanceMemeticSearcherBlackBoxOptim.ResamplingMemeticSearcherBlackBoxOptim.SBX_DefaultOptionsBlackBoxOptim.SPSADefaultParametersBlackBoxOptim.SPX_DefaultOptionsBlackBoxOptim.ScalarFitnessSchemeBlackBoxOptim.Schaffer1FamilyBlackBoxOptim.SearchSpaceBlackBoxOptim.SeparableNESOptBlackBoxOptim.Shekel10BlackBoxOptim.Shekel10_ABlackBoxOptim.Shekel10_CBlackBoxOptim.Shekel5BlackBoxOptim.Shekel5_ABlackBoxOptim.Shekel5_CBlackBoxOptim.Shekel7BlackBoxOptim.Shekel7_ABlackBoxOptim.Shekel7_CBlackBoxOptim.ShiftedAndBiasedProblemBlackBoxOptim.SimpleSelectorBlackBoxOptim.SimplexCrossoverBlackBoxOptim.SimulatedBinaryCrossoverBlackBoxOptim.SimultaneousPerturbationSA2BlackBoxOptim.SingleObjectiveMethodNamesBlackBoxOptim.SingleObjectiveMethodsBlackBoxOptim.SteppingOptimizerBlackBoxOptim.StochasticApproximationOptimizerBlackBoxOptim.TopListArchiveBlackBoxOptim.TopListArchiveOutputBlackBoxOptim.TopListFitnessBlackBoxOptim.TopListIndividualBlackBoxOptim.TournamentSelectorBlackBoxOptim.TransformedProblemBlackBoxOptim.TupleFitnessSchemeBlackBoxOptim.UNDX_DefaultOptionsBlackBoxOptim.UniformMutationBlackBoxOptim.UnimodalNormalDistributionCrossoverBlackBoxOptim.UtilsBlackBoxOptim.XNESOptBlackBoxOptim.XNES_DefaultOptionsBlackBoxOptim.ZERO_SEARCH_SPACEBlackBoxOptim.abort!BlackBoxOptim.accept_candi!BlackBoxOptim.ackleyBlackBoxOptim.acquire_candiBlackBoxOptim.acquire_candisBlackBoxOptim.acquire_mutantBlackBoxOptim.adaptive_de_rand_1_binBlackBoxOptim.adaptive_de_rand_1_bin_radiuslimitedBlackBoxOptim.adaptive_diffevoBlackBoxOptim.add_candidate!BlackBoxOptim.adjust!BlackBoxOptim.aggregateBlackBoxOptim.applyBlackBoxOptim.apply!BlackBoxOptim.archiveBlackBoxOptim.archived_fitnessBlackBoxOptim.askBlackBoxOptim.assign_distance_weights!BlackBoxOptim.assign_weights!BlackBoxOptim.bboptimizeBlackBoxOptim.bbsetupBlackBoxOptim.best_candidateBlackBoxOptim.best_fitnessBlackBoxOptim.best_ofBlackBoxOptim.borg_moeaBlackBoxOptim.calc_initial_step_sizeBlackBoxOptim.calc_sigma_learnrate_for_nesBlackBoxOptim.calc_sigma_learnrate_for_snesBlackBoxOptim.calculate_evol_path_paramsBlackBoxOptim.candi_pool_sizeBlackBoxOptim.candidate_typeBlackBoxOptim.capacityBlackBoxOptim.chainBlackBoxOptim.check_and_create_search_spaceBlackBoxOptim.check_epsbox_ϵBlackBoxOptim.check_stop_conditionBlackBoxOptim.check_valid!BlackBoxOptim.cigarBlackBoxOptim.cigtabBlackBoxOptim.compare_optimizersBlackBoxOptim.compass_search_directionsBlackBoxOptim.count_dict_reportBlackBoxOptim.crossover_parametersBlackBoxOptim.de_rand_1_binBlackBoxOptim.de_rand_1_bin_radiuslimitedBlackBoxOptim.de_rand_2_binBlackBoxOptim.de_rand_2_bin_radiuslimitedBlackBoxOptim.deceptive_cuccu2011BlackBoxOptim.deceptive_cuccu2011_15_2BlackBoxOptim.deceptive_cuccu2011_30_2BlackBoxOptim.delta_fitnessBlackBoxOptim.deltasBlackBoxOptim.describeBlackBoxOptim.diametersBlackBoxOptim.diffevoBlackBoxOptim.direct_search_probabilistic_descentBlackBoxOptim.directions_for_kBlackBoxOptim.distanceBlackBoxOptim.distance_to_optimumBlackBoxOptim.dxnesBlackBoxOptim.elapsed_timeBlackBoxOptim.ellipsoidBlackBoxOptim.ellipticBlackBoxOptim.energy_tsallis1996BlackBoxOptim.evalBlackBoxOptim.evaluatorBlackBoxOptim.evolveBlackBoxOptim.evolved_pairBlackBoxOptim.example_problemsBlackBoxOptim.f_callsBlackBoxOptim.f_minimumBlackBoxOptim.feasibleBlackBoxOptim.fill_block!BlackBoxOptim.fitnessBlackBoxOptim.fitness_eltypeBlackBoxOptim.fitness_history_csv_headerBlackBoxOptim.fitness_improvement_potentialBlackBoxOptim.fitness_improvement_ratioBlackBoxOptim.fitness_is_within_ftolBlackBoxOptim.fitness_schemeBlackBoxOptim.fitness_scheme_typeBlackBoxOptim.fitness_shaping_utilities_linearBlackBoxOptim.fitness_shaping_utilities_logBlackBoxOptim.fitness_typeBlackBoxOptim.fixed_dim_problemBlackBoxOptim.flattenBlackBoxOptim.format_fitnessBlackBoxOptim.frequenciesBlackBoxOptim.general_stop_reasonBlackBoxOptim.generateBlackBoxOptim.griewankBlackBoxOptim.hartmanBlackBoxOptim.hartman3BlackBoxOptim.hartman6BlackBoxOptim.has_convergedBlackBoxOptim.hat_compareBlackBoxOptim.hat_compare_paretoBlackBoxOptim.hat_compare_ϵBlackBoxOptim.hat_compare_ϵ_boxBlackBoxOptim.includeBlackBoxOptim.indexBlackBoxOptim.ini_xnes_BBlackBoxOptim.init_rng!BlackBoxOptim.instantiateBlackBoxOptim.instantiate_search_spaceBlackBoxOptim.is_betterBlackBoxOptim.is_minimizingBlackBoxOptim.is_stoppedBlackBoxOptim.is_worseBlackBoxOptim.isinterruptedBlackBoxOptim.isnafitnessBlackBoxOptim.isrunningBlackBoxOptim.isstartedBlackBoxOptim.isstoppedBlackBoxOptim.iteration_convergedBlackBoxOptim.iterationsBlackBoxOptim.kwargs2dictBlackBoxOptim.last_fitnessBlackBoxOptim.last_top_fitnessBlackBoxOptim.lastrunBlackBoxOptim.local_searchBlackBoxOptim.magnitude_classBlackBoxOptim.make_evaluatorBlackBoxOptim.maxsBlackBoxOptim.merge_fitness_historiesBlackBoxOptim.minimization_problemBlackBoxOptim.minimumBlackBoxOptim.minsBlackBoxOptim.nafitnessBlackBoxOptim.nameBlackBoxOptim.nextBlackBoxOptim.next_candidate!BlackBoxOptim.noisy_quarticBlackBoxOptim.nondominatedBlackBoxOptim.noprogress_streakBlackBoxOptim.notify!BlackBoxOptim.num_evalsBlackBoxOptim.num_func_evalsBlackBoxOptim.num_stepsBlackBoxOptim.num_vars_to_next_mutation_pointBlackBoxOptim.numchildrenBlackBoxOptim.numdimsBlackBoxOptim.numobjectivesBlackBoxOptim.numparentsBlackBoxOptim.numrunsBlackBoxOptim.objfuncBlackBoxOptim.occupied_frontier_indicesBlackBoxOptim.opt_valueBlackBoxOptim.optimizerBlackBoxOptim.orig_problemBlackBoxOptim.orig_problem_typeBlackBoxOptim.parametersBlackBoxOptim.paramsBlackBoxOptim.params_meanBlackBoxOptim.params_stdBlackBoxOptim.pareto_frontierBlackBoxOptim.persistent_individualsBlackBoxOptim.persistent_rangeBlackBoxOptim.popsizeBlackBoxOptim.populate_by_mutantsBlackBoxOptim.populationBlackBoxOptim.problemBlackBoxOptim.problem_setBlackBoxOptim.problem_summaryBlackBoxOptim.process_candidate!BlackBoxOptim.quarticBlackBoxOptim.rand_frontier_indexBlackBoxOptim.rand_indexesBlackBoxOptim.rand_individualBlackBoxOptim.rand_individualsBlackBoxOptim.rand_individuals_lhsBlackBoxOptim.randbetaBlackBoxOptim.random_resampleBlackBoxOptim.random_resample_with_inheritanceBlackBoxOptim.random_searchBlackBoxOptim.range_for_dimBlackBoxOptim.rangesBlackBoxOptim.rank_by_fitness!BlackBoxOptim.rank_result_dicts_byBlackBoxOptim.rastriginBlackBoxOptim.recombinate!BlackBoxOptim.release_candiBlackBoxOptim.repeated_bboptimizeBlackBoxOptim.report_from_result_dictBlackBoxOptim.report_on_methods_results_on_one_problemBlackBoxOptim.report_on_valuesBlackBoxOptim.resampling_inheritance_memetic_searcherBlackBoxOptim.resampling_memetic_searcherBlackBoxOptim.reset!BlackBoxOptim.reset_fitness!BlackBoxOptim.restart!BlackBoxOptim.rosenbrockBlackBoxOptim.run!BlackBoxOptim.s1_ackleyBlackBoxOptim.s1_ellipticBlackBoxOptim.s1_rastriginBlackBoxOptim.s1_rosenbrockBlackBoxOptim.s1_schwefelBlackBoxOptim.s1_sphereBlackBoxOptim.s2_stepBlackBoxOptim.same_fitnessBlackBoxOptim.sample_bernoulli_vectorBlackBoxOptim.sample_unit_hypersphereBlackBoxOptim.save_fitness_history_to_csv_fileBlackBoxOptim.schaffer1BlackBoxOptim.schaffer1_PFBlackBoxOptim.schwefel1_2BlackBoxOptim.schwefel2_21BlackBoxOptim.schwefel2_22BlackBoxOptim.schwefel2_26BlackBoxOptim.search_spaceBlackBoxOptim.selectBlackBoxOptim.separable_nesBlackBoxOptim.set_as_elite_if_betterBlackBoxOptim.setup!BlackBoxOptim.setup_optimizer!BlackBoxOptim.setup_problemBlackBoxOptim.shekelBlackBoxOptim.shekel10BlackBoxOptim.shekel5BlackBoxOptim.shekel7BlackBoxOptim.show_fitnessBlackBoxOptim.show_reportBlackBoxOptim.shutdown!BlackBoxOptim.shutdown_optimizer!BlackBoxOptim.sphereBlackBoxOptim.start_timeBlackBoxOptim.stepBlackBoxOptim.step!BlackBoxOptim.stop_due_to_low_precisionBlackBoxOptim.stop_reasonBlackBoxOptim.symmetric_search_spaceBlackBoxOptim.t_asyBlackBoxOptim.t_diagBlackBoxOptim.t_irregBlackBoxOptim.tagBlackBoxOptim.tagcountsBlackBoxOptim.tell!BlackBoxOptim.tournamentBlackBoxOptim.traceBlackBoxOptim.trace_progressBlackBoxOptim.trace_stateBlackBoxOptim.transient_rangeBlackBoxOptim.update!BlackBoxOptim.update_candidates!BlackBoxOptim.update_fitness!BlackBoxOptim.update_learning_rates!BlackBoxOptim.update_parameters!BlackBoxOptim.update_population_fitness!BlackBoxOptim.update_recombination_weights!BlackBoxOptim.viewerBlackBoxOptim.width_of_confidence_intervalBlackBoxOptim.worker_finished!BlackBoxOptim.worst_fitnessBlackBoxOptim.write_resultBlackBoxOptim.xnesBlackBoxOptim.xrotatedandshiftedBlackBoxOptim.xshiftedBlackBoxOptim.ϵ_index"
},

]}
