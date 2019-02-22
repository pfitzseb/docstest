var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BayesOpt-1",
    "page": "Readme",
    "title": "BayesOpt",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)Julia wrapper of BayesOpt."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using BayesOpt\nconfig = ConfigParameters()         # calls initialize_parameters_to_default of the C API\nset_kernel!(config, \"kMaternARD5\")  # calls set_kernel of the C API\nconfig.sc_type = SC_MAP\nf(x) = sum(x .^ 2)\nlowerbound = [-2., -2.]; upperbound = [2., 2.]\noptimizer, optimum = bayes_optimization(f, lowerbound, upperbound, config)Consult the BayesOpt documentation for the configuration options."
},

{
    "location": "autodocs/#BayesOpt.BayesOpt",
    "page": "Docstrings",
    "title": "BayesOpt.BayesOpt",
    "category": "module",
    "text": "Example\n\nusing BayesOpt\nconfig = ConfigParameters()         # calls initialize_parameters_to_default of the C API\nset_kernel!(config, \"kMaternARD5\")  # calls set_kernel of the C API\nconfig.sc_type = SC_MAP\nf(x) = sum(x .^ 2)\nlowerbound = [-2., -2.]; upperbound = [2., 2.]\noptimizer, optimum = bayes_optimization(f, lowerbound, upperbound, config)\n\nExports: KernelParameters, MeanParameters, ConfigParameters, bayes_optimization, bayes_optimization_disc, bayes_optimization_categorical, set_kernel!, set_mean!, set_criteria!, set_surrogate!, set_log_file!, set_load_file!, set_save_file!, set_learning!, set_score!, L_FIXED, L_EMPIRICAL, L_DISCRETE, L_MCMC, L_ERROR, SC_MTL, SC_ML, SC_MAP, SC_LOOCV, SC_ERROR\n\nSee also https://rmcantin.bitbucket.io/html/usemanual.html\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.ConfigParameters",
    "page": "Docstrings",
    "title": "BayesOpt.ConfigParameters",
    "category": "type",
    "text": "ConfigParameters()\n\nReturns default parameters of BayesOpt (see initializeparametersto_default in the C API).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.bayes_optimization",
    "page": "Docstrings",
    "title": "BayesOpt.bayes_optimization",
    "category": "function",
    "text": "bayes_optimization(func, lb, ub, config)\n\nRuns continuous Bayesian optimization on func that takes vectors of length d as argument and returns a real number, within the box defined by the lowerbounds lb (a vector of length d with lowerbounds for each dimension) and upperbounds ub, using config (see ConfigParameters).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.bayes_optimization_categorical",
    "page": "Docstrings",
    "title": "BayesOpt.bayes_optimization_categorical",
    "category": "function",
    "text": "bayes_optimization_categorical(func, categories, config)\n\nRuns Bayesian optimization on func that takes vectors of length d as argument and returns a real number, with categories array of size d with the number of categories per dimension, using config (see ConfigParameters).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.bayes_optimization_disc",
    "page": "Docstrings",
    "title": "BayesOpt.bayes_optimization_disc",
    "category": "function",
    "text": "bayes_optimization_disc(func, valid_x, config)\n\nRuns  Bayesian optimization on func that takes vectors of length d as argument and returns a real number, on valid_x an array of valid points  (vectors of length d) using config (see ConfigParameters).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_criteria!",
    "page": "Docstrings",
    "title": "BayesOpt.set_criteria!",
    "category": "function",
    "text": "set_criteria!(config, name) set criteria in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_kernel!",
    "page": "Docstrings",
    "title": "BayesOpt.set_kernel!",
    "category": "function",
    "text": "set_kernel!(config, name) set kernel in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_learning!",
    "page": "Docstrings",
    "title": "BayesOpt.set_learning!",
    "category": "function",
    "text": "set_learning!(config, name) set learning in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_load_file!",
    "page": "Docstrings",
    "title": "BayesOpt.set_load_file!",
    "category": "function",
    "text": "set_load_file!(config, name) set load file in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_log_file!",
    "page": "Docstrings",
    "title": "BayesOpt.set_log_file!",
    "category": "function",
    "text": "set_log_file!(config, name) set log file in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_mean!",
    "page": "Docstrings",
    "title": "BayesOpt.set_mean!",
    "category": "function",
    "text": "set_mean!(config, name) set mean in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_save_file!",
    "page": "Docstrings",
    "title": "BayesOpt.set_save_file!",
    "category": "function",
    "text": "set_save_file!(config, name) set save file in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_score!",
    "page": "Docstrings",
    "title": "BayesOpt.set_score!",
    "category": "function",
    "text": "set_score!(config, name) set score in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_surrogate!",
    "page": "Docstrings",
    "title": "BayesOpt.set_surrogate!",
    "category": "function",
    "text": "set_surrogate!(config, name) set surrogate in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BayesOpt.BayesOptBayesOpt.ConfigParametersBayesOpt.KernelParametersBayesOpt.L_DISCRETEBayesOpt.L_EMPIRICALBayesOpt.L_ERRORBayesOpt.L_FIXEDBayesOpt.L_MCMCBayesOpt.LearningTypeBayesOpt.MeanParametersBayesOpt.SC_ERRORBayesOpt.SC_LOOCVBayesOpt.SC_MAPBayesOpt.SC_MLBayesOpt.SC_MTLBayesOpt.ScoreTypeBayesOpt.__init__BayesOpt.bayes_optimizationBayesOpt.bayes_optimization_categoricalBayesOpt.bayes_optimization_discBayesOpt.check_depsBayesOpt.depsjl_pathBayesOpt.evalBayesOpt.includeBayesOpt.libbayesoptBayesOpt.libnloptBayesOpt.prepare_cargsBayesOpt.set_criteria!BayesOpt.set_kernel!BayesOpt.set_learning!BayesOpt.set_load_file!BayesOpt.set_log_file!BayesOpt.set_mean!BayesOpt.set_save_file!BayesOpt.set_score!BayesOpt.set_surrogate!"
},

]}
