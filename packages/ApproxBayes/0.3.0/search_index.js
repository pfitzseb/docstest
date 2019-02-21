var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Approximate-Bayesian-Computation-1",
    "page": "Readme",
    "title": "Approximate Bayesian Computation",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Package to implement Approximate Bayesian computation algorithms in the Julia programming language. Package implements basic ABC rejection sampler and sequential monte carlo algorithm (ABC SMC) as in Toni. et al 2009 as well as model selection versions of both (Toni. et al 2010)."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "To download the package, once you\'re in a Julia session type the following command:Pkg.add(\"ApproxBayes\")"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Below is a simple example using the package to infer the mean of a normal distribution. The first step is to create an ABC type which stores the information required to run an analysis. The first input is the simulation function which returns a distance between the simulated and target data sets, the second input is the number of parameters and the the third is the desired tolerance. The final required input is the prior distributions for the parameters, this specified as by creating an a Prior type which is an array of distribution types from Distributions.jl of the same length as the number of parameters. There are some more optional parameters that are specific the the different algorithms.First we\'ll load ApproxBayes and Distributions packages.using ApproxBayes\nusing DistributionsNow we\'ll set up the simulation function, we\'ll use the Kolmogorov Distance as our distance measure. The simulation needs to return 2 values the first being the distance, the second value is useful if additional information from the simulation needs to be stored, here this is not the case so we\'ll simply return 1, for example sometimes we might want to keep the raw data generated from each simulation.function normaldist(params, constants, targetdata)\n  simdata = rand(Normal(params...), 1000)\n  ApproxBayes.ksdist(simdata, targetdata), 1\nendNow we can generate some target data, we\'ll take 100 samples from a normal distirbution with mean = 2.0 and variance = 0.4.srand(1)\np1 = 2.0\np2 = 0.4\ntargetdata = rand(Normal(p1, p2), 1000)Now we can setup an ABCrejection type and run the inference.setup = ABCRejection(normaldist, #simulation function\n  2, # number of parameters\n  0.1, #target ϵ\n  Prior([Uniform(0.0, 20.0), Uniform(0.0, 2.0)]); # Prior for each of the parameters\n  maxiterations = 10^6, #Maximum number of iterations before the algorithm terminates\n  )\n\n# run ABC inference\nrejection = runabc(setup, targetdata)We can do the same with ABC SMC algorithm.setup = ABCSMC(normaldist, #simulation function\n  2, # number of parameters\n  0.1, #target ϵ\n  Prior([Uniform(0.0, 20.0), Uniform(0.0, 2.0)]), #Prior for each of the parameters\n  )\n\nsmc = runabc(setup, targetdata, verbose = true, progress = true)"
},

{
    "location": "#Parallelism-1",
    "page": "Readme",
    "title": "Parallelism",
    "category": "section",
    "text": "Parallelism is provided via multithreading. To use multithreading you\'ll need to set the JULIANUMTHREADS environmental variable before running julia (one way of doing this exporting the variable in the terminal eg export JULIA_NUM_THREADS=1). Then when running an ABCRejection or ABCSMC inference in parallel set the parallel keyword to true. For example the normal distribution example above would be run in parallel as follows:setup = ABCSMC(normaldist, #simulation function\n  2, # number of parameters\n  0.1, #target ϵ\n  Prior([Uniform(0.0, 20.0), Uniform(0.0, 2.0)]), #Prior for each of the parameters\n  )\n\nsmc = runabc(setup, targetdata, verbose = true, progress = true, parallel = true)"
},

{
    "location": "#Optional-arguments-1",
    "page": "Readme",
    "title": "Optional arguments",
    "category": "section",
    "text": "There are more optional arguments for each of the algorithms, to see these simply use ?ABCSMC in a Julia session. If verbose and progress are set to true then a progress meter will be displayed and at the end of each population a summary will be printed.There are more examples provided in the examples directory and used as tests in the test directory. ApproxBayes.jl is also available as an option to perform Bayesian inference with differential equations in DiffEqBayes.jl."
},

{
    "location": "#Perturbation-kernels-1",
    "page": "Readme",
    "title": "Perturbation kernels",
    "category": "section",
    "text": "One requirement for the ABC SMC is to have a perturbation kernel. This kernel takes a sampled particle and perturbs the parameter vector in some way to explore the parameter space. Two default kernels are supplied by ApproxBayes.jl, a uniform kernel and a gaussian kernel. Both are adaptive in that the parameters specific to the kernel change as the distance decreases. For example, in the gaussian kernel the variance is calculated from the variance of the previous population. If you want to write your own kernel, take a look at src/kernels.jl for examples."
},

{
    "location": "#Convenience-functions-1",
    "page": "Readme",
    "title": "Convenience functions",
    "category": "section",
    "text": "Also provided are some convenience functions for plotting and saving the output.writeoutput(abcresults): This will write the output to a text file should you wish to some additional analysis or plotting using some other tools or languages.\nplot: Plotting recipes for use with Plots.jl are provided. Just use plot on any ABC return type. This will plot histograms of the posterior distributions. For the model selection algorithm plot(result::ABCSMCmodelresults) will plot the model posterior probabilities, a second argument indexing a particular model will plot the parameter posterior distributions for that model, ie plot(result::ABCSMCmodelresults, 1) will plot the posterior distribution of parameters for model 1. You\'ll need to add the Plots.jl packages yourself as it is not bundled in with ApproxBayes.jl."
},

{
    "location": "#Acknowledgments-1",
    "page": "Readme",
    "title": "Acknowledgments",
    "category": "section",
    "text": "Some of the code was inspired by ABC-SysBio."
},

{
    "location": "autodocs/#ApproxBayes.ABCRejection",
    "page": "Docstrings",
    "title": "ApproxBayes.ABCRejection",
    "category": "type",
    "text": "ABCRejection(sim_func::Function, nparams::Int64, ϵ::Float64, prior::Prior; <keyword arguments>)\n\nCreate an ABCRejection type which will simulate data with simfunc. nparams is the number of parameters inputted into simfunc, ϵ is the target tolerance and prior sets the priors for the parameters. sim_func needs to take in 3 values, the parameters (in an array), constants (array) and target data in that order and needs to return 2 values, the first being the distance between the target data and simulated data and the second can be anything but is useful if for example you want to record some additional information about the simulations. ...\n\nArguments\n\nmaxiterations = 10^5: Maximum number of samples before the ABC algorithm terminates.\nconstants = []: Any constants needed to simulate from sim_func\nnparticles = 100: Number of particles (ie samples) of ABC algorithm\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxBayes.ABCRejectionModel",
    "page": "Docstrings",
    "title": "ApproxBayes.ABCRejectionModel",
    "category": "type",
    "text": "ABCRejectionModel(sim_func::Array{Function, 1}, nparams::Array{Int64, 1}, ϵ::Float64, prior::Array{Prior, 1}; <keyword arguments>)\n\nCreate an ABCRejectionModel type which will create a type to run ABC with model selection. Each model is specified with a function, first input is an array of functions. nparams and priors are arrays for the number of parameters and priors for each model. each sim_func needs to take in 3 values, the parameters (in an array), constants (array) and target data in that order and needs to return 2 values, the first being the distance between the target data and simulated data and the second can be anything but is useful if for example you want to record some additional information about the simulations. ...\n\nArguments\n\nmaxiterations = 10^5: Maximum number of samples before the ABC algorithm terminates.\nconstants = [[]]: Any constants needed to simulate from sim_func, needs to be an array of arrays, each one corresponding to a model function.\nnparticles = 100: Number of particles (ie samples) of ABC algorithm\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxBayes.ABCSMC",
    "page": "Docstrings",
    "title": "ApproxBayes.ABCSMC",
    "category": "type",
    "text": "ABCRejection(sim_func::Function, nparams::Int64, ϵT::Float64, prior::Prior; <keyword arguments>)\n\nCreate an ABCSMC type which will simulate data with simfunc. nparams is the number of parameters inputted into simfunc, ϵT is the target tolerance and prior sets the priors for the parameters. sim_func needs to take in 3 values, the parameters (in an array), constants (array) and target data in that order and needs to return 2 values, the first being the distance between the target data and simulated data and the second can be anything but is useful if for example you want to record some additional information about the simulations. ...\n\nArguments\n\nmaxiterations = 10^5: Maximum number of samples before the ABC algorithm terminates.\nconstants = []: Any constants needed to simulate from sim_func\nnparticles = 100: Number of particles (ie samples) of ABC algorithm\nα = 0.3: The αth quantile of population i is chosen as the ϵ for population i + 1\nϵ1 = 10^5: Starting ϵ for first ABC SMC populations\nconvergence = 0.05: ABC SMC stops when ϵ in population i + 1 is within 0.05 of populations i\nkernel = uniformkernel: Parameter perturbation kernel, default is a uniform distribution. gaussiankernel is also an option that is already available in ApproxBayes.jl. Alternatively you can code up your own kernel function. See kernels.jl for examples.\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxBayes.ABCSMCModel",
    "page": "Docstrings",
    "title": "ApproxBayes.ABCSMCModel",
    "category": "type",
    "text": "ABCSMCModel(sim_func::Array{Function, 1}, nparams::Array{Int64, 1}, ϵT::Float64, prior::Array{Prior, 1}; <keyword arguments>)\n\nCreate an ABCSMCModel type which will create a type to run the ABC SMC with model selection algorithm. Each model is specified with a function, first input is an array of functions. nparams and priors are arrays for the number of parameters and priors for each model, ϵT is the target tolerance. Each sim_func needs to take in 3 values, the parameters (in an array), constants (array) and target data in that order and needs to return 2 values, the first being the distance between the target data and simulated data and the second can be anything but is useful if for example you want to record some additional information about the simulations. ...\n\nArguments\n\nmaxiterations = 10^5: Maximum number of samples before the ABC algorithm terminates.\nconstants = []: Any constants needed to simulate from sim_func\nnparticles = 100: Number of particles (ie samples) of ABC algorithm\nα = 0.3: The αth quantile of population i is chosen as the ϵ for population i + 1\nϵ1 = 10^5: Starting ϵ for first ABC SMC populations\nconvergence = 0.05: ABC SMC stops when ϵ in population i + 1 is within 0.05 of populations i\nmodelkern = 0.7: Probability model stays the same in model perturbation kernel, ie 70% of the time the model perturbation kernel will leave the model the same.\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxBayes.Kernel",
    "page": "Docstrings",
    "title": "ApproxBayes.Kernel",
    "category": "type",
    "text": "Kernel(perturbation_function::Function,\npdf_function::Function,\ncalculate_kernel_parameters::Function)\n\nCreate a parameter perturbation kernel. Required inputs are 3 functions. First is the perturbation_function which should take 2 parameters, the parameter to be perturbed and any kernel specific parameter (for example the standard deviation of a normal distribution if this is the kernel of choice). Second function is the pdf_function, that requires 4 inputs:     1) the newparticle     2) the old particle     3) kernel specific parameters and     4) an index i. The third function is calculate_kernel_parameters which given an array of particles should calculate the kernel specific parameters for the next population. Should you wish to keep the same parameters throughout you can just write a function that returns a number(s).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxBayes.Prior",
    "page": "Docstrings",
    "title": "ApproxBayes.Prior",
    "category": "type",
    "text": "Prior(distributions)\n\nCreate Prior type for ABC algorithm specifying priors for each parameters. This is an array of Distribution types from Distribution.jl, each element corresponding to a parameter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxBayes.runabc",
    "page": "Docstrings",
    "title": "ApproxBayes.runabc",
    "category": "function",
    "text": "runabc(ABCsetup::ABCtype, targetdata; progress = false, verbose = false, parallel = true)\n\nRun ABC with ABCsetup defining the algorithm and inputs to algorithm, targetdata is the data we wish to fit the model to and will be used as an input for the simulation function defined in ABCsetup. If progress is set to true a progress meter will be shown. Inference will be run in parallel via multithreading if parallel = true. The environmental variable JULIANUMTHREADS needs to be set prior to launching a julia session.\n\n\n\n\n\nrunabc(ABCsetup::ABCtype, targetdata; progress = false, verbose = false)\n\nWhen the SMC algorithms are used, a print out at the end of each population will be made if verbose = true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxBayes.writeoutput",
    "page": "Docstrings",
    "title": "ApproxBayes.writeoutput",
    "category": "function",
    "text": "writeoutput(results; <keyword arguments>)\n\nWrite the results of an ABC inference to a text file. For model selection algorithms a text file with the parameters of each model will be written and a text file with model probabilities. ...\n\nArguments\n\ndir = \"\": Directory where the text file will be written to.\nfile= \"\": Filename to write to, default depends on the type of inference.\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ApproxBayes.ABCRejectionApproxBayes.ABCRejectionModelApproxBayes.ABCSMCApproxBayes.ABCSMCModelApproxBayes.ABCSMCmodelresultsApproxBayes.ABCSMCresultsApproxBayes.ABCrejectionmodelresultsApproxBayes.ABCrejectionresultsApproxBayes.ABCtypeApproxBayes.ApproxBayesApproxBayes.KernelApproxBayes.ParticleApproxBayes.ParticleRejectionApproxBayes.ParticleRejectionModelApproxBayes.ParticleSMCApproxBayes.ParticleSMCModelApproxBayes.PriorApproxBayes.abctypeApproxBayes.calculate_kernel_parametersApproxBayes.calculate_kernel_parameters_gaussApproxBayes.copyparticleApproxBayes.evalApproxBayes.gaussiankernelApproxBayes.getmodelfreqApproxBayes.getmodelprobApproxBayes.getparticleweightsApproxBayes.getproposalApproxBayes.includeApproxBayes.kernelprobApproxBayes.ksdistApproxBayes.modelperturbationApproxBayes.modelselection_kernelApproxBayes.parameterperturbationApproxBayes.pdf_functionApproxBayes.pdf_function_gaussApproxBayes.perturbation_functionApproxBayes.perturbation_function_gaussApproxBayes.perturbmodelApproxBayes.perturbparticleApproxBayes.priorprobApproxBayes.runabcApproxBayes.setupSMCparticlesApproxBayes.smcweightsApproxBayes.smcweightsmodelApproxBayes.uniformkernelApproxBayes.update_newparams!ApproxBayes.writeoutput"
},

]}
