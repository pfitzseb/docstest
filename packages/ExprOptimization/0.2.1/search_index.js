var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ExprOptimization.jl-1",
    "page": "Readme",
    "title": "ExprOptimization.jl",
    "category": "section",
    "text": "Algorithms for the optimization of Julia expressions derived from a grammar.  The following algorithms are implemented:Monte Carlo\nGenetic Programming\nGrammatical Evolution\nCross-Entropy Method\nProbabilistic Incremental Program Execution (PIPE)"
},

{
    "location": "#Main-Dependencies-1",
    "page": "Readme",
    "title": "Main Dependencies",
    "category": "section",
    "text": "sisl/ExprRules.jl"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Please see the example notebook."
},

{
    "location": "#Maintainers:-1",
    "page": "Readme",
    "title": "Maintainers:",
    "category": "section",
    "text": "Ritchie Lee, ritchie.lee@sv.cmu.edu\nTim Wheeler, tawheeler@stanford.edu\nMykel Kochenderfer, mykel@stanford.edu(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "autodocs/#ExprOptimization.Benchmarks",
    "page": "Docstrings",
    "title": "ExprOptimization.Benchmarks",
    "category": "module",
    "text": "Benchmarks for ExprOptimization.jl This will run the julia benchmarks: using ExprOptimization ExprOptimization.Benchmarks.main() See subfolders for the benchmarks of baseline packages Results are placed in RESULTSDIR Call load_csvs() to load up a merged dataframe. See Julia notebook for plots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.CrossEntropys.CrossEntropy",
    "page": "Docstrings",
    "title": "ExprOptimization.CrossEntropys.CrossEntropy",
    "category": "type",
    "text": "CrossEntropy\n\nCross Entropy method.\n\nArguments\n\npop_size::Int: population size\niterations::Int: number of iterations\nmax_depth::Int: maximum depth of derivation tree\ntop_k::Int: top k elite samples used in selection\np_init::Float64: initial value when fitting MLE \ninit_method::InitializationMethod: Initialization method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.ExprOptResult",
    "page": "Docstrings",
    "title": "ExprOptimization.ExprOptResult",
    "category": "type",
    "text": "ExprOptResult\n\nReturned by optimize().  Contains the results of the optimization.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.GeneticPrograms.GeneticProgram",
    "page": "Docstrings",
    "title": "ExprOptimization.GeneticPrograms.GeneticProgram",
    "category": "type",
    "text": "GeneticProgram\n\nGenetic Programming.\n\nArguments\n\npop_size::Int: population size\niterations::Int: number of iterations\nmax_depth::Int: maximum depth of derivation tree\np_reproduction::Float64: probability of reproduction operator\np_crossover::Float64: probability of crossover operator\np_mutation::Float64: probability of mutation operator\ninit_method::InitializationMethod: initialization method\nselect_method::SelectionMethod: selection method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.GrammaticalEvolutions.GrammaticalEvolution",
    "page": "Docstrings",
    "title": "ExprOptimization.GrammaticalEvolutions.GrammaticalEvolution",
    "category": "type",
    "text": "GrammaticalEvolution\n\nGrammatical Evolution.\n\nArguments\n\ngrammar::Grammar: grammar\ntyp::Symbol: start symbol\npop_size::Int: population size\niterations::Int: number of iterations\ninit_gene_length::Int: initial length of genotype integer array\nmax_gene_length::Int: maximum length of genotype integer array\nmax_depth::Int: maximum depth of derivation tree\np_reproduction::Float64: probability of reproduction operator\np_crossover::Float64: probability of crossover operator\np_mutation::Float64: probability of mutation operator\nselect_method::SelectionMethod: selection method (default: tournament selection)\nmutate_method::InitializationMethod: mutation method (default: multi-mutate)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.MonteCarlos.MonteCarlo",
    "page": "Docstrings",
    "title": "ExprOptimization.MonteCarlos.MonteCarlo",
    "category": "type",
    "text": "MonteCarlo\n\nMonte Carlo.\n\nArguments:\n\nnum_samples::Int: number of samples\nmax_depth::Int: maximum depth of derivation tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.PIPEs.PIPE",
    "page": "Docstrings",
    "title": "ExprOptimization.PIPEs.PIPE",
    "category": "type",
    "text": "PIPE\n\nProbabilistic Incremental Program Evolution. Example parameters from paper are indicated in parentheses)\n\nArguments:\n\nppt_params::PPT: parameters for PPT  (e.g., [0.8, 0.2])\npop_size::Int: population size \niterations::Int: number of iterations\np_elitist::Float64: elitist update probability (e.g., 0.2)\nc::Float64: learning rate multiplier (e.g., 0.1)\nα::Float64: learning rate (e.g., 0.05) \nϵ::Float64: fitness constant (e.g., 1)\np_mutation::Float64: mutation probability (e.g., 0.2)\nβ::Float64: mutation rate (e.g., 0.6)\np_threshold::Float64: prune threshold (e.g., 0.999)\nmax_depth::Int: maximum depth of derivation tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.PPTs.PPT",
    "page": "Docstrings",
    "title": "ExprOptimization.PPTs.PPT",
    "category": "type",
    "text": "PPT\n\nProbabilistic Prototype Tree. \n\nArguments:\n\nw_terminal::Float64: probability of selecting a terminal on initialization \nw_nonterm::Float64: probability of selecting a non-terminal on initialization \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.get_expr",
    "page": "Docstrings",
    "title": "ExprOptimization.get_expr",
    "category": "function",
    "text": "get_expr(result::ExprOptResult)\n\nReturns the expression in the result\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprRules.nchildren",
    "page": "Docstrings",
    "title": "ExprRules.nchildren",
    "category": "function",
    "text": "nchildren(node::PPTNode)\n\nReturns the number of children of a node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExprOptimization.optimize",
    "page": "Docstrings",
    "title": "ExprOptimization.optimize",
    "category": "function",
    "text": "optimize(p::ExprOptAlgorithm, grammar::Grammar, typ::Symbol, loss::Function; kwargs...)\n\nMain entry for expression optimization.  Use concrete ExprOptAlgorithm to specify optimization algorithm. Optimize using grammar and start symbol, typ, and loss function.  Loss function has the form: los::Float64=loss(node::RuleNode).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ExprOptimization.@grammarExprOptimization.BenchmarksExprOptimization.CrossEntropyExprOptimization.CrossEntropysExprOptimization.ExprOptAlgorithmExprOptimization.ExprOptResultExprOptimization.ExprOptimizationExprOptimization.ExprRulesExprOptimization.ExpressionIteratorExprOptimization.GeneticProgramExprOptimization.GeneticProgramsExprOptimization.GrammarExprOptimization.GrammaticalEvolutionExprOptimization.GrammaticalEvolutionsExprOptimization.MonteCarloExprOptimization.MonteCarlosExprOptimization.NodeLocExprOptimization.NodeRecyclerExprOptimization.PIPEExprOptimization.PIPEsExprOptimization.PPTExprOptimization.PPTsExprOptimization.ProbabilisticExprRulesExprOptimization.RuleNodeExprOptimization.SymbolTableExprOptimization.child_typesExprOptimization.contains_returntypeExprOptimization.count_expressionsExprOptimization.depthExprOptimization.evalExprOptimization.get_executableExprOptimization.get_exprExprOptimization.includeExprOptimization.interpretExprOptimization.isevalExprOptimization.isterminalExprOptimization.max_arityExprOptimization.mindepthExprOptimization.mindepth_mapExprOptimization.nchildrenExprOptimization.node_depthExprOptimization.nonterminalsExprOptimization.optimizeExprOptimization.recycle!ExprOptimization.return_typeExprOptimization.root_node_locExprOptimization.sample"
},

]}
