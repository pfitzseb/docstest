var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MADS-(Model-Analysis-and-Decision-Support)-1",
    "page": "Readme",
    "title": "MADS (Model Analysis & Decision Support)",
    "category": "section",
    "text": "(Image: logo)(Image: julialang) (Image: julialang) (Image: julialang)(Image: travis-ci) (Image: appveyor) (Image: coveralls.io) (Image: codecov.io)MADS is an integrated open-source high-performance computational (HPC) framework in Julia. MADS can execute a wide range of data- and model-based analyses:Sensitivity Analysis\nParameter Estimation\nModel Inversion and Calibration\nUncertainty Quantification\nModel Selection and Model Averaging\nModel Reduction and Surrogate Modeling\nMachine Learning (e.g. Blind Source Separation, Source Identification, Feature Extraction, Matrix / Tensor Factorization, etc.)\nDecision Analysis and SupportMADS has been tested to perform HPC simulations on a wide-range multi-processor clusters and parallel environments (Moab, Slurm, etc.). MADS utilizes adaptive rules and techniques which allows the analyses to be performed with minimum user input. The code provides a series of alternative algorithms to execute each type of data- and model-based analyses."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Detailed documentation including description of all MADS modules and functions is available at GitHub, ReadtheDocs and LANL sites.See also mads.gitlab.io and madsjulia.github.io"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "After starting Julia, execute:import Pkg; Pkg.add(\"Mads\")"
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "Pkg.test(\"Mads\")"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "In Julia REPL, do the following commands:import MadsTo explore getting-started instructions, execute:Mads.help()There are various examples located in the examples directory of the Mads repository.For example, executeinclude(Mads.madsdir * \"/../examples/contamination/contamination.jl\")to perform various example analyses related to groundwater contaminant transport, or executeinclude(Mads.madsdir * \"/../examples/bigdt/bigdt.jl\")to perform Bayesian Information Gap Decision Theory (BIG-DT) analysis."
},

{
    "location": "#Installation-of-MADS-behind-a-firewall-1",
    "page": "Readme",
    "title": "Installation of MADS behind a firewall",
    "category": "section",
    "text": "Julia uses git for package management. Add in the .gitconfig file in your home directory to support git behind a firewall:[url \"https://\"]\n        insteadOf = git://or execute:git config --global url.\"https://\".insteadOf git://Set proxies executing the following lines in the bash command-line environment:export ftp_proxy=http://proxyout.<your_site>:8080\nexport rsync_proxy=http://proxyout.<your_site>:8080\nexport http_proxy=http://proxyout.<your_site>:8080\nexport https_proxy=http://proxyout.<your_site>:8080\nexport no_proxy=.<your_site>For example, at LANL, you will need to execute the following lines in the bash command-line environment:export ftp_proxy=http://proxyout.lanl.gov:8080\nexport rsync_proxy=http://proxyout.lanl.gov:8080\nexport http_proxy=http://proxyout.lanl.gov:8080\nexport https_proxy=http://proxyout.lanl.gov:8080\nexport no_proxy=.lanl.gov"
},

{
    "location": "#Publications,-Presentations,-Projects-1",
    "page": "Readme",
    "title": "Publications, Presentations, Projects",
    "category": "section",
    "text": "mads.gitlab.io\nmonty.gitlab.io\nees.lanl.gov/monty"
},

{
    "location": "autodocs/#Mads.@stderrcapture",
    "page": "Docstrings",
    "title": "Mads.@stderrcapture",
    "category": "macro",
    "text": "Capture stderr of a block\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.@stdoutcapture",
    "page": "Docstrings",
    "title": "Mads.@stdoutcapture",
    "category": "macro",
    "text": "Capture stdout of a block\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.@stdouterrcapture",
    "page": "Docstrings",
    "title": "Mads.@stdouterrcapture",
    "category": "macro",
    "text": "Capture stderr & stderr of a block\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.@tryimport",
    "page": "Docstrings",
    "title": "Mads.@tryimport",
    "category": "macro",
    "text": "Try to import a module\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.MFlm",
    "page": "Docstrings",
    "title": "Mads.MFlm",
    "category": "function",
    "text": "Matrix Factorization using Levenberg Marquardt\n\nMethods:\n\nMads.MFlm(X::Array{T,2}, range::AbstractRange{Int64}; kw...) where T in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsBSS.jl:103\nMads.MFlm(X::Array{T,2}, nk::Integer; method, log_W, log_H, retries, initW, initH, tolX, tolG, tolOF, maxEval, maxIter, maxJacobians, lambda, lambda_mu, np_lambda, show_trace, quiet) where T in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsBSS.jl:133\n\nArguments:\n\nX::Array{T,2} : matrix to factorize\nnk::Integer : number of features to extract\nrange::AbstractRange{Int64}\n\nKeywords:\n\ninitH : initial H (feature) matrix\ninitW : initial W (weight) matrix\nlambda\nlambda_mu\nlog_H : log-transform H (feature) matrix[default=false]\nlog_W : log-transform W (weight) matrix [default=false]\nmaxEval\nmaxIter\nmaxJacobians\nmethod\nnp_lambda\nquiet\nretries : number of solution retries [default=1]\nshow_trace\ntolG\ntolOF\ntolX\n\nReturns:\n\nNMF results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.Mads",
    "page": "Docstrings",
    "title": "Mads.Mads",
    "category": "module",
    "text": "MADS: Model Analysis & Decision Support in Julia (Mads.jl v1.0) 2016\n\nhttp://mads.lanl.gov https://github.com/madsjulia\n\nLicensing: GPLv3: http://www.gnu.org/licenses/gpl-3.0.html\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.MadsModel",
    "page": "Docstrings",
    "title": "Mads.MadsModel",
    "category": "type",
    "text": "MadsModel type applied for MathProgBase analyses\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.NMFipopt",
    "page": "Docstrings",
    "title": "Mads.NMFipopt",
    "category": "function",
    "text": "Non-negative Matrix Factorization using JuMP/Ipopt\n\nMethods:\n\nMads.NMFipopt(X::Array{T,2} where T, nk::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsBSS.jl:61\nMads.NMFipopt(X::Array{T,2} where T, nk::Integer, retries::Integer; random, maxiter, maxguess, initW, initH, verbosity, quiet) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsBSS.jl:61\n\nArguments:\n\nX::Array{T,2} where T : matrix to factorize\nnk::Integer : number of features to extract\nretries::Integer : number of solution retries [default=1]\n\nKeywords:\n\ninitH : initial H (feature) matrix\ninitW : initial W (weight) matrix\nmaxguess : guess about the maximum for the H (feature) matrix [default=1]\nmaxiter : maximum number of iterations [default=100000]\nquiet : quiet [default=false]\nrandom : random initial guesses [default=false]\nverbosity : verbosity output level [default=0]\n\nReturns:\n\nNMF results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.NMFm",
    "page": "Docstrings",
    "title": "Mads.NMFm",
    "category": "function",
    "text": "Non-negative Matrix Factorization using NMF\n\nMethods:\n\nMads.NMFm(X::Array, nk::Integer; retries, tol, maxiter) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsBSS.jl:22\n\nArguments:\n\nX::Array : matrix to factorize\nnk::Integer : number of features to extract\n\nKeywords:\n\nmaxiter : maximum number of iterations [default=10000]\nretries : number of solution retries [default=1]\ntol : solution tolerance [default=1.0e-9]\n\nReturns:\n\nNMF results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.addkeyword!",
    "page": "Docstrings",
    "title": "Mads.addkeyword!",
    "category": "function",
    "text": "Add a keyword in a class within the Mads dictionary madsdata\n\nMethods:\n\nMads.addkeyword!(madsdata::AbstractDict, keyword::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:277\nMads.addkeyword!(madsdata::AbstractDict, class::String, keyword::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:281\n\nArguments:\n\nclass::String : dictionary class; if not provided searches for keyword in Problem class\nkeyword::String : dictionary key\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.addsource!",
    "page": "Docstrings",
    "title": "Mads.addsource!",
    "category": "function",
    "text": "Add an additional contamination source\n\nMethods:\n\nMads.addsource!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:19\nMads.addsource!(madsdata::AbstractDict, sourceid::Int64; dict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:19\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nsourceid::Int64 : source id [default=0]\n\nKeywords:\n\ndict\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.addsourceparameters!",
    "page": "Docstrings",
    "title": "Mads.addsourceparameters!",
    "category": "function",
    "text": "Add contaminant source parameters\n\nMethods:\n\nMads.addsourceparameters!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:76\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.allwellsoff!",
    "page": "Docstrings",
    "title": "Mads.allwellsoff!",
    "category": "function",
    "text": "Turn off all the wells in the MADS problem dictionary\n\nMethods:\n\nMads.allwellsoff!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:607\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.allwellson!",
    "page": "Docstrings",
    "title": "Mads.allwellson!",
    "category": "function",
    "text": "Turn on all the wells in the MADS problem dictionary\n\nMethods:\n\nMads.allwellson!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:549\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.amanzi",
    "page": "Docstrings",
    "title": "Mads.amanzi",
    "category": "function",
    "text": "Execute Amanzi external groundwater flow and transport simulator\n\nMethods:\n\nMads.amanzi(filename::String, nproc::Int64, quiet::Bool, observation_filename::String, setup::String; amanzi_exe) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-external/MadsSimulators.jl:15\nMads.amanzi(filename::String, nproc::Int64, quiet::Bool, observation_filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-external/MadsSimulators.jl:15\nMads.amanzi(filename::String, nproc::Int64, quiet::Bool) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-external/MadsSimulators.jl:15\nMads.amanzi(filename::String, nproc::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-external/MadsSimulators.jl:15\nMads.amanzi(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-external/MadsSimulators.jl:15\n\nArguments:\n\nfilename::String : amanzi input file name\nnproc::Int64 : number of processor to be used by Amanzi [default=Mads.nprocs_per_task_default]\nobservation_filename::String : Amanzi observation file name [default=\"observations.out\"]\nquiet::Bool : suppress output [default=Mads.quiet]\nsetup::String : bash script to setup Amanzi environmental variables [default=\"source-amanzi-setup\"]\n\nKeywords:\n\namanzi_exe : full path to the Amanzi executable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.amanzi_output_parser",
    "page": "Docstrings",
    "title": "Mads.amanzi_output_parser",
    "category": "function",
    "text": "Parse Amanzi output provided in an external file (filename)\n\nMethods:\n\nMads.amanzi_output_parser(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-external/MadsParsers.jl:22\nMads.amanzi_output_parser() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-external/MadsParsers.jl:22\n\nArguments:\n\nfilename::String : external file name [default=\"observations.out\"]\n\nReturns:\n\ndictionary with model observations following MADS requirements\n\nExample:\n\nMads.amanzi_output_parser()\nMads.amanzi_output_parser(\"observations.out\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.asinetransform",
    "page": "Docstrings",
    "title": "Mads.asinetransform",
    "category": "function",
    "text": "Arcsine transformation of model parameters\n\nMethods:\n\nMads.asinetransform(madsdata::AbstractDict, params::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSineTransformations.jl:4\nMads.asinetransform(params::Array{T,1} where T, lowerbounds::Array{T,1} where T, upperbounds::Array{T,1} where T, indexlogtransformed::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSineTransformations.jl:14\n\nArguments:\n\nindexlogtransformed::Array{T,1} where T : index vector of log-transformed parameters\nlowerbounds::Array{T,1} where T : lower bounds\nmadsdata::AbstractDict : MADS problem dictionary\nparams::Array{T,1} where T : model parameters\nupperbounds::Array{T,1} where T : upper bounds\n\nReturns:\n\nArcsine transformation of model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.boundparameters!",
    "page": "Docstrings",
    "title": "Mads.boundparameters!",
    "category": "function",
    "text": "Bound model parameters based on their ranges\n\nMethods:\n\nMads.boundparameters!(madsdata::AbstractDict, parvec::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:771\nMads.boundparameters!(madsdata::AbstractDict, pardict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:783\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\npardict::AbstractDict : Parameter dictionary\nparvec::Array{T,1} where T : Parameter vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.calibrate",
    "page": "Docstrings",
    "title": "Mads.calibrate",
    "category": "function",
    "text": "Calibrate Mads model using a constrained Levenberg-Marquardt technique\n\nMads.calibrate(madsdata; tolX=1e-3, tolG=1e-6, maxEval=1000, maxIter=100, maxJacobians=100, lambda=100.0, lambda_mu=10.0, np_lambda=10, show_trace=false, usenaive=false)\n\nMethods:\n\nMads.calibrate(madsdata::AbstractDict; tolX, tolG, tolOF, maxEval, maxIter, maxJacobians, lambda, lambda_mu, np_lambda, show_trace, usenaive, save_results, localsa) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCalibrate.jl:164\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nlambda : initial Levenberg-Marquardt lambda [default=100.0]\nlambda_mu : lambda multiplication factor [default=10.0]\nlocalsa : perform local sensitivity analysis [default=false]\nmaxEval : maximum number of model evaluations [default=1000]\nmaxIter : maximum number of optimization iterations [default=100]\nmaxJacobians : maximum number of Jacobian solves [default=100]\nnp_lambda : number of parallel lambda solves [default=10]\nsave_results : save intermediate results [default=true]\nshow_trace : shows solution trace [default=false]\ntolG : parameter space update tolerance [default=1e-6]\ntolOF : objective function tolerance [default=1e-3]\ntolX : parameter space tolerance [default=1e-4]\nusenaive : use naive Levenberg-Marquardt solver [default=false]\n\nReturns:\n\nmodel parameter dictionary with the optimal values at the minimum\noptimization algorithm results (e.g. results.minimizer)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.calibraterandom",
    "page": "Docstrings",
    "title": "Mads.calibraterandom",
    "category": "function",
    "text": "Calibrate with random initial guesses\n\nMethods:\n\nMads.calibraterandom(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCalibrate.jl:41\nMads.calibraterandom(madsdata::AbstractDict, numberofsamples::Integer; tolX, tolG, tolOF, maxEval, maxIter, maxJacobians, lambda, lambda_mu, np_lambda, show_trace, usenaive, seed, quiet, all, save_results) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCalibrate.jl:41\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nnumberofsamples::Integer : number of random initial samples [default=1]\n\nKeywords:\n\nall : all model results are returned [default=false]\nlambda : initial Levenberg-Marquardt lambda [default=100.0]\nlambda_mu : lambda multiplication factor [default=10.0]\nmaxEval : maximum number of model evaluations [default=1000]\nmaxIter : maximum number of optimization iterations [default=100]\nmaxJacobians : maximum number of Jacobian solves [default=100]\nnp_lambda : number of parallel lambda solves [default=10]\nquiet : [default=true]\nsave_results : save intermediate results [default=true]\nseed : random seed [default=0]\nshow_trace : shows solution trace [default=false]\ntolG : parameter space update tolerance [default=1e-6]\ntolOF : objective function tolerance [default=1e-3]\ntolX : parameter space tolerance [default=1e-4]\nusenaive : use naive Levenberg-Marquardt solver [default=false]\n\nReturns:\n\nmodel parameter dictionary with the optimal values at the minimum\noptimization algorithm results (e.g. bestresult[2].minimizer)\n\nExample:\n\nMads.calibraterandom(madsdata; tolX=1e-3, tolG=1e-6, maxEval=1000, maxIter=100, maxJacobians=100, lambda=100.0, lambda_mu=10.0, np_lambda=10, show_trace=false, usenaive=false)\nMads.calibraterandom(madsdata, numberofsamples; tolX=1e-3, tolG=1e-6, maxEval=1000, maxIter=100, maxJacobians=100, lambda=100.0, lambda_mu=10.0, np_lambda=10, show_trace=false, usenaive=false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.calibraterandom_parallel",
    "page": "Docstrings",
    "title": "Mads.calibraterandom_parallel",
    "category": "function",
    "text": "Calibrate with random initial guesses in parallel\n\nMethods:\n\nMads.calibraterandom_parallel(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCalibrate.jl:108\nMads.calibraterandom_parallel(madsdata::AbstractDict, numberofsamples::Integer; tolX, tolG, tolOF, maxEval, maxIter, maxJacobians, lambda, lambda_mu, np_lambda, show_trace, usenaive, seed, quiet, save_results, localsa) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCalibrate.jl:108\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nnumberofsamples::Integer : number of random initial samples [default=1]\n\nKeywords:\n\nlambda : initial Levenberg-Marquardt lambda [default=100.0]\nlambda_mu : lambda multiplication factor [default=10.0]\nlocalsa : perform local sensitivity analysis [default=false]\nmaxEval : maximum number of model evaluations [default=1000]\nmaxIter : maximum number of optimization iterations [default=100]\nmaxJacobians : maximum number of Jacobian solves [default=100]\nnp_lambda : number of parallel lambda solves [default=10]\nquiet : suppress output [default=true]\nsave_results : save intermediate results [default=true]\nseed : random seed [default=0]\nshow_trace : shows solution trace [default=false]\ntolG : parameter space update tolerance [default=1e-6]\ntolOF : objective function tolerance [default=1e-3]\ntolX : parameter space tolerance [default=1e-4]\nusenaive : use naive Levenberg-Marquardt solver [default=false]\n\nReturns:\n\nvector with all objective function values\nboolean vector (converged/not converged)\narray with estimate model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.captureoff",
    "page": "Docstrings",
    "title": "Mads.captureoff",
    "category": "function",
    "text": "Make MADS not capture\n\nMethods:\n\nMads.captureoff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:133\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.captureon",
    "page": "Docstrings",
    "title": "Mads.captureon",
    "category": "function",
    "text": "Make MADS capture\n\nMethods:\n\nMads.captureon() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:124\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.checkmodeloutputdirs",
    "page": "Docstrings",
    "title": "Mads.checkmodeloutputdirs",
    "category": "function",
    "text": "Check the directories where model outputs should be saved for MADS\n\nMethods:\n\nMads.checkmodeloutputdirs(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:615\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\ntrue or false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.checknodedir",
    "page": "Docstrings",
    "title": "Mads.checknodedir",
    "category": "function",
    "text": "Check if a directory is readable\n\nMethods:\n\nMads.checknodedir(dir::String, waittime::Float64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsExecute.jl:13\nMads.checknodedir(dir::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsExecute.jl:13\nMads.checknodedir(node::String, dir::String, waittime::Float64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsExecute.jl:4\nMads.checknodedir(node::String, dir::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsExecute.jl:4\n\nArguments:\n\ndir::String : directory\nnode::String : computational node name (e.g. madsmax.lanl.gov, wf03, or 127.0.0.1)\nwaittime::Float64 : wait time in seconds [default=10]\n\nReturns:\n\ntrue if the directory is readable, false otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.checkout",
    "page": "Docstrings",
    "title": "Mads.checkout",
    "category": "function",
    "text": "Checkout (pull) the latest version of Mads modules\n\nMethods:\n\nMads.checkout(modulename::String; git, master, force, pull, required, all) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:79\nMads.checkout() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:79\n\nArguments:\n\nmodulename::String : module name\n\nKeywords:\n\nall : whether to checkout all the modules [default=false]\nforce : whether to overwrite local changes when checkout [default=false]\ngit : whether to use \"git checkout\" [default=true]\nmaster : whether on master branch [default=false]\npull : whether to run \"git pull\" [default=true]\nrequired : whether only checkout Mads.required modules [default=false]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.checkparameterranges",
    "page": "Docstrings",
    "title": "Mads.checkparameterranges",
    "category": "function",
    "text": "Check parameter ranges for model parameters\n\nMethods:\n\nMads.checkparameterranges(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:709\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.cleancoverage",
    "page": "Docstrings",
    "title": "Mads.cleancoverage",
    "category": "function",
    "text": "Remove Mads coverage files\n\nMethods:\n\nMads.cleancoverage() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsTest.jl:24\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.cmadsins_obs",
    "page": "Docstrings",
    "title": "Mads.cmadsins_obs",
    "category": "function",
    "text": "Call C MADS ins_obs() function from MADS dynamic library\n\nMethods:\n\nMads.cmadsins_obs(obsid::Array{T,1} where T, instructionfilename::String, inputfilename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-old/MadsCMads.jl:40\n\nArguments:\n\ninputfilename::String : input file name\ninstructionfilename::String : instruction file name\nobsid::Array{T,1} where T : observation id\n\nReturn:\n\nobservations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.commit",
    "page": "Docstrings",
    "title": "Mads.commit",
    "category": "function",
    "text": "Commit the latest version of Mads modules in the repository\n\nMethods:\n\nMads.commit(commitmsg::String, modulename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:227\nMads.commit(commitmsg::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:227\n\nArguments:\n\ncommitmsg::String : commit message\nmodulename::String : module name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.computemass",
    "page": "Docstrings",
    "title": "Mads.computemass",
    "category": "function",
    "text": "Compute injected/reduced contaminant mass (for a given set of mads input files when \"path\" is provided)\n\nMethods:\n\nMads.computemass(madsdata::AbstractDict; time) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:459\nMads.computemass(madsfiles::Union{Regex, String}; time, path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:486\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nmadsfiles::Union{Regex, String} : matching pattern for Mads input files (string or regular expression accepted)\n\nKeywords:\n\npath : search directory for the mads input files [default=\".\"]\ntime : computational time [default=0]\n\nReturns:\n\narray with all the lambda values\narray with associated total injected mass\narray with associated total reduced mass\n\nExample:\n\nMads.computemass(madsfiles; time=0, path=\".\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.computeparametersensitities",
    "page": "Docstrings",
    "title": "Mads.computeparametersensitities",
    "category": "function",
    "text": "Compute sensitivities for each model parameter; averaging the sensitivity indices over the entire observation range\n\nMethods:\n\nMads.computeparametersensitities(madsdata::AbstractDict, saresults::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:846\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nsaresults::AbstractDict : dictionary with sensitivity analysis results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.contamination",
    "page": "Docstrings",
    "title": "Mads.contamination",
    "category": "function",
    "text": "Compute concentration for a point in space and time (x,y,z,t)\n\nMethods:\n\nMads.contamination(wellx::Number, welly::Number, wellz::Number, n::Number, lambda::Number, theta::Number, vx::Number, vy::Number, vz::Number, ax::Number, ay::Number, az::Number, H::Number, x::Number, y::Number, z::Number, dx::Number, dy::Number, dz::Number, f::Number, t0::Number, t1::Number, t::Array{T,1} where T, anasolfunction::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:429\n\nArguments:\n\nH::Number : Hurst coefficient for Fractional Brownian dispersion\nanasolfunction::Function\nax::Number : dispersivity in X direction (longitudinal)\nay::Number : dispersivity in Y direction (transverse horizontal)\naz::Number : dispersivity in Y direction (transverse vertical)\ndx::Number : source size (extent) in X direction\ndy::Number : source size (extent) in Y direction\ndz::Number : source size (extent) in Z direction\nf::Number : source mass flux\nlambda::Number : first-order reaction rate\nn::Number : porosity\nt0::Number : source starting time\nt1::Number : source termination time\nt::Array{T,1} where T : vector of times to compute concentration at the observation point\ntheta::Number : groundwater flow direction\nvx::Number : advective transport velocity in X direction\nvy::Number : advective transport velocity in Y direction\nvz::Number : advective transport velocity in Z direction\nwellx::Number : observation point (well) X coordinate\nwelly::Number : observation point (well) Y coordinate\nwellz::Number : observation point (well) Z coordinate\nx::Number : X coordinate of contaminant source location\ny::Number : Y coordinate of contaminant source location\nz::Number : Z coordinate of contaminant source location\n\nReturns:\n\na vector of predicted concentration at (wellx, welly, wellz, t)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.copyaquifer2sourceparameters!",
    "page": "Docstrings",
    "title": "Mads.copyaquifer2sourceparameters!",
    "category": "function",
    "text": "Copy aquifer parameters to become contaminant source parameters\n\nMethods:\n\nMads.copyaquifer2sourceparameters!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:115\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.copyright",
    "page": "Docstrings",
    "title": "Mads.copyright",
    "category": "function",
    "text": "Produce MADS copyright information\n\nMethods:\n\nMads.copyright() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelp.jl:19\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.create_documentation",
    "page": "Docstrings",
    "title": "Mads.create_documentation",
    "category": "function",
    "text": "Create web documentation files for Mads functions\n\nMethods:\n\nMads.create_documentation() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:386\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.create_tests_off",
    "page": "Docstrings",
    "title": "Mads.create_tests_off",
    "category": "function",
    "text": "Turn off the generation of MADS tests (default)\n\nMethods:\n\nMads.create_tests_off() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:178\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.create_tests_on",
    "page": "Docstrings",
    "title": "Mads.create_tests_on",
    "category": "function",
    "text": "Turn on the generation of MADS tests (dangerous)\n\nMethods:\n\nMads.create_tests_on() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:169\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.createmadsobservations",
    "page": "Docstrings",
    "title": "Mads.createmadsobservations",
    "category": "function",
    "text": "Create Mads dictionary of observations and instruction file\n\nMethods:\n\nMads.createmadsobservations(nrow::Int64, ncol::Int64; obstring, pretext, prestring, poststring, filename) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCreate.jl:108\nMads.createmadsobservations(nrow::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCreate.jl:108\n\nArguments:\n\nncol::Int64 : number of columns [default 1]\nnrow::Int64 : number of rows\n\nKeywords:\n\nfilename : file name\nobstring : observation string\npoststring : post instruction file string\nprestring : pre instruction file string\npretext : preamble instructions\n\n)\n\nReturns:\n\nobservation dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.createmadsproblem",
    "page": "Docstrings",
    "title": "Mads.createmadsproblem",
    "category": "function",
    "text": "Create a new Mads problem where the observation targets are computed based on the model predictions\n\nMethods:\n\nMads.createmadsproblem(infilename::String, outfilename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCreate.jl:26\nMads.createmadsproblem(madsdata::AbstractDict, outfilename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCreate.jl:51\nMads.createmadsproblem(madsdata::AbstractDict, predictions::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCreate.jl:60\nMads.createmadsproblem(madsdata::AbstractDict, predictions::AbstractDict, outfilename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCreate.jl:56\n\nArguments:\n\ninfilename::String : input Mads file\nmadsdata::AbstractDict : MADS problem dictionary\noutfilename::String : output Mads file\npredictions::AbstractDict : dictionary of model predictions\n\nReturns:\n\nnew MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.createobservations!",
    "page": "Docstrings",
    "title": "Mads.createobservations!",
    "category": "function",
    "text": "Create observations in the MADS problem dictionary based on time and observation vectors\n\nMethods:\n\nMads.createobservations!(madsdata::AbstractDict, time::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:444\nMads.createobservations!(madsdata::AbstractDict, time::Array{T,1} where T, observation::Array{T,1} where T; logtransform, weight_type, weight) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:444\nMads.createobservations!(madsdata::AbstractDict, observation::AbstractDict; logtransform, weight_type, weight) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:488\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nobservation::AbstractDict : dictionary of observations\nobservation::Array{T,1} where T : dictionary of observations\ntime::Array{T,1} where T : vector of observation times\n\nKeywords:\n\nlogtransform : log transform observations [default=false]\nweight : weight value [default=1]\nweight_type : weight type [default=constant]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.createtempdir",
    "page": "Docstrings",
    "title": "Mads.createtempdir",
    "category": "function",
    "text": "Create temporary directory\n\nMethods:\n\nMads.createtempdir(tempdirname::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1255\n\nArguments:\n\ntempdirname::String : temporary directory name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.deleteNaN!",
    "page": "Docstrings",
    "title": "Mads.deleteNaN!",
    "category": "function",
    "text": "Delete rows with NaN in a dataframe df\n\nMethods:\n\nMads.deleteNaN!(df::DataFrames.DataFrame) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:1072\n\nArguments:\n\ndf::DataFrames.DataFrame : dataframe\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.deletekeyword!",
    "page": "Docstrings",
    "title": "Mads.deletekeyword!",
    "category": "function",
    "text": "Delete a keyword in a class within the Mads dictionary madsdata\n\nMethods:\n\nMads.deletekeyword!(madsdata::AbstractDict, keyword::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:304\nMads.deletekeyword!(madsdata::AbstractDict, class::String, keyword::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:310\n\nArguments:\n\nclass::String : dictionary class; if not provided searches for keyword in Problem class\nkeyword::String : dictionary key\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.deleteoffwells!",
    "page": "Docstrings",
    "title": "Mads.deleteoffwells!",
    "category": "function",
    "text": "Delete all wells marked as being off in the MADS problem dictionary\n\nMethods:\n\nMads.welloff!(madsdata::AbstractDict, wellname::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:621\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nwellname::String : name of the well to be turned off\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.deletetimes!",
    "page": "Docstrings",
    "title": "Mads.deletetimes!",
    "category": "function",
    "text": "Delete all times in the MADS problem dictionary in a given list.\n\nMethods:\n\nMads.welloff!(madsdata::AbstractDict, wellname::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:621\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nwellname::String : name of the well to be turned off\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.dependents",
    "page": "Docstrings",
    "title": "Mads.dependents",
    "category": "function",
    "text": "Lists module dependents on a module (Mads by default)\n\nMethods:\n\nMads.dependents(modulename::String, filter::Bool) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:43\nMads.dependents(modulename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:43\nMads.dependents() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:43\n\nArguments:\n\nfilter::Bool : whether to filter modules [default=false]\nmodulename::String : module name [default=\"Mads\"]\n\nReturns:\n\nmodules that are dependents of the input module\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.diff",
    "page": "Docstrings",
    "title": "Mads.diff",
    "category": "function",
    "text": "Diff the latest version of Mads modules in the repository\n\nMethods:\n\nMads.diff(modulename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:170\nMads.diff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:170\n\nArguments:\n\nmodulename::String : module name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.display",
    "page": "Docstrings",
    "title": "Mads.display",
    "category": "function",
    "text": "Display image file\n\nMethods:\n\nMads.display(p::Compose.Context) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsDisplay.jl:71\nMads.display(p::Gadfly.Plot) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsDisplay.jl:65\nMads.display(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsDisplay.jl:8\n\nArguments:\n\nfilename::String : image file name\np::Compose.Context : plotting object\np::Gadfly.Plot : plotting object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.dumpasciifile",
    "page": "Docstrings",
    "title": "Mads.dumpasciifile",
    "category": "function",
    "text": "Dump ASCII file\n\nMethods:\n\nMads.dumpasciifile(filename::String, data) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsASCII.jl:31\n\nArguments:\n\ndata : data to dump\nfilename::String : ASCII file name\n\nDumps:\n\nASCII file with the name in \"filename\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.dumpjsonfile",
    "page": "Docstrings",
    "title": "Mads.dumpjsonfile",
    "category": "function",
    "text": "Dump a JSON file\n\nMethods:\n\nMads.dumpjsonfile(filename::String, data) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsJSON.jl:39\n\nArguments:\n\ndata : data to dump\nfilename::String : JSON file name\n\nDumps:\n\nJSON file with the name in \"filename\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.dumpwelldata",
    "page": "Docstrings",
    "title": "Mads.dumpwelldata",
    "category": "function",
    "text": "Dump well data from MADS problem dictionary into a ASCII file\n\nMethods:\n\nMads.dumpwelldata(madsdata::AbstractDict, filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1121\n\nArguments:\n\nfilename::String : output file name\nmadsdata::AbstractDict : MADS problem dictionary\n\nDumps:\n\nfilename : a ASCII file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.dumpyamlfile",
    "page": "Docstrings",
    "title": "Mads.dumpyamlfile",
    "category": "function",
    "text": "Dump YAML file\n\nMethods:\n\nMads.dumpyamlfile(filename::String, data; julia) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsYAML.jl:55\n\nArguments:\n\ndata : YAML data\nfilename::String : output file name\n\nKeywords:\n\njulia : if true, use julia YAML library (if available); if false (default), use python YAML library (if available)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.dumpyamlmadsfile",
    "page": "Docstrings",
    "title": "Mads.dumpyamlmadsfile",
    "category": "function",
    "text": "Dump YAML Mads file\n\nMethods:\n\nMads.dumpyamlmadsfile(madsdata::AbstractDict, filename::String; julia) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsYAML.jl:74\n\nArguments:\n\nfilename::String : output file name\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\njulia : use julia YAML [default=false]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.efast",
    "page": "Docstrings",
    "title": "Mads.efast",
    "category": "function",
    "text": "Sensitivity analysis using Saltelli\'s extended Fourier Amplitude Sensitivity Testing (eFAST) method\n\nMethods:\n\nMads.efast(md::AbstractDict; N, M, gamma, seed, checkpointfrequency, restartdir, restart) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:1115\n\nArguments:\n\nmd::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nM : maximum number of harmonics [default=6]\nN : number of samples [default=100]\ncheckpointfrequency : check point frequency [default=N]\ngamma : multiplication factor (Saltelli 1999 recommends gamma = 2 or 4) [default=4]\nrestart : save restart information [default=false]\nrestartdir : directory where files will be stored containing model results for the efast simulation restarts [default=\"efastcheckpoints\"]\nseed : random seed [default=0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.emceesampling",
    "page": "Docstrings",
    "title": "Mads.emceesampling",
    "category": "function",
    "text": "Bayesian sampling with Goodman & Weare\'s Affine Invariant Markov chain Monte Carlo (MCMC) Ensemble sampler (aka Emcee)\n\nMethods:\n\nMads.emceesampling(madsdata::AbstractDict; numwalkers, nsteps, burnin, thinning, sigma, seed, weightfactor) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMonteCarlo.jl:9\nMads.emceesampling(madsdata::AbstractDict, p0::Array; numwalkers, nsteps, burnin, thinning, seed, weightfactor) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMonteCarlo.jl:32\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\np0::Array : initial parameters (matrix of size (number of parameters, number of walkers) or (length(Mads.getoptparamkeys(madsdata)), numwalkers))\n\nKeywords:\n\nburnin : number of initial realizations before the MCMC are recorded [default=10]\nnsteps : number of final realizations in the chain [default=100]\nnumwalkers : number of walkers (if in parallel this can be the number of available processors; in general, the higher the number of walkers, the better the results and computational time [default=10]\nseed : random seed [default=0]\nsigma : a standard deviation parameter used to initialize the walkers [default=0.01]\nthinning : removal of any thinning realization [default=1]\nweightfactor : weight factor [default=1.0]\n\nReturns:\n\nMCMC chain\nlog likelihoods of the final samples in the chain\n\nExamples:\n\nMads.emceesampling(madsdata; numwalkers=10, nsteps=100, burnin=100, thinning=1, seed=2016, sigma=0.01)\nMads.emceesampling(madsdata, p0; numwalkers=10, nsteps=100, burnin=10, thinning=1, seed=2016)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.estimationerror",
    "page": "Docstrings",
    "title": "Mads.estimationerror",
    "category": "function",
    "text": "Estimate kriging error\n\nMethods:\n\nMads.estimationerror(w::Array{T,1} where T, x0::Array{T,1} where T, X::AbstractArray{T,2} where T, cov::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:199\nMads.estimationerror(w::Array{T,1} where T, covmat::AbstractArray{T,2} where T, covvec::Array{T,1} where T, cov0::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:206\n\nArguments:\n\nX::AbstractArray{T,2} where T : observation matrix\ncov0::Number : zero-separation covariance\ncov::Function : spatial covariance function\ncovmat::AbstractArray{T,2} where T : covariance matrix\ncovvec::Array{T,1} where T : covariance vector\nw::Array{T,1} where T : kriging weights\nx0::Array{T,1} where T : estimated locations\n\nReturns:\n\nestimation kriging error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.evaluatemadsexpression",
    "page": "Docstrings",
    "title": "Mads.evaluatemadsexpression",
    "category": "function",
    "text": "Evaluate an expression string based on a parameter dictionary\n\nMethods:\n\nMads.evaluatemadsexpression(expressionstring::String, parameters::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:155\n\nArguments:\n\nexpressionstring::String : expression string\nparameters::AbstractDict : parameter dictionary applied to evaluate the expression string\n\nReturns:\n\ndictionary containing the expression names as keys, and the values of the expression as values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.evaluatemadsexpressions",
    "page": "Docstrings",
    "title": "Mads.evaluatemadsexpressions",
    "category": "function",
    "text": "Evaluate all the expressions in the Mads problem dictiorany based on a parameter dictionary\n\nMethods:\n\nMads.evaluatemadsexpressions(madsdata::AbstractDict, parameters::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:174\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparameters::AbstractDict : parameter dictionary applied to evaluate the expression strings\n\nReturns:\n\ndictionary containing the parameter and expression names as keys, and the values of the expression as values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.expcov",
    "page": "Docstrings",
    "title": "Mads.expcov",
    "category": "function",
    "text": "Exponential spatial covariance function\n\nMethods:\n\nMads.expcov(h::Number, maxcov::Number, scale::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:31\n\nArguments:\n\nh::Number : separation distance\nmaxcov::Number : maximum covariance\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.exponentialvariogram",
    "page": "Docstrings",
    "title": "Mads.exponentialvariogram",
    "category": "function",
    "text": "Exponential variogram\n\nMethods:\n\nMads.exponentialvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:84\n\nArguments:\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nExponential variogram\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.filterkeys",
    "page": "Docstrings",
    "title": "Mads.filterkeys",
    "category": "function",
    "text": "Filter dictionary keys based on a string or regular expression\n\nMethods:\n\nMads.filterkeys(dict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:804\nMads.filterkeys(dict::AbstractDict, key::Regex) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:803\nMads.filterkeys(dict::AbstractDict, key::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:804\n\nArguments:\n\ndict::AbstractDict : dictionary\nkey::Regex : the regular expression or string used to filter dictionary keys\nkey::String : the regular expression or string used to filter dictionary keys\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.forward",
    "page": "Docstrings",
    "title": "Mads.forward",
    "category": "function",
    "text": "Perform a forward run using the initial or provided values for the model parameters\n\nMethods:\n\nMads.forward(madsdata::AbstractDict; all) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsForward.jl:8\nMads.forward(madsdata::AbstractDict, paramdict::AbstractDict; all, checkpointfrequency, checkpointfilename) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsForward.jl:12\nMads.forward(madsdata::AbstractDict, paramarray::Array; all, checkpointfrequency, checkpointfilename) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsForward.jl:46\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparamarray::Array : array of model parameter values\nparamdict::AbstractDict : dictionary of model parameter values\n\nKeywords:\n\nall : all model results are returned [default=false]\ncheckpointfilename : check point file name [default=\"checkpoint_forward\"]\ncheckpointfrequency : check point frequency for storing restart information [default=0]\n\nReturns:\n\ndictionary of model predictions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.forwardgrid",
    "page": "Docstrings",
    "title": "Mads.forwardgrid",
    "category": "function",
    "text": "Perform a forward run over a 3D grid defined in madsdata using the initial or provided values for the model parameters\n\nMethods:\n\nMads.forwardgrid(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsForward.jl:134\nMads.forwardgrid(madsdatain::AbstractDict, paramvalues::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsForward.jl:139\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nmadsdatain::AbstractDict : MADS problem dictionary\nparamvalues::AbstractDict : dictionary of model parameter values\n\nReturns:\n\n3D array with model predictions along a 3D grid\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.free",
    "page": "Docstrings",
    "title": "Mads.free",
    "category": "function",
    "text": "Free Mads modules\n\nMethods:\n\nMads.free(modulename::String; required, all) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:203\nMads.free() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:203\n\nArguments:\n\nmodulename::String : module name\n\nKeywords:\n\nall : free all the modules [default=false]\nrequired : only free Mads.required modules [default=false]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.functions",
    "page": "Docstrings",
    "title": "Mads.functions",
    "category": "function",
    "text": "List available functions in the MADS modules:\n\nMethods:\n\nMads.functions(string::String; shortoutput, quiet) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelp.jl:32\nMads.functions() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelp.jl:32\nMads.functions(re::Regex; shortoutput, quiet) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelp.jl:23\nMads.functions(m::Union{Module, Symbol}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelp.jl:71\nMads.functions(m::Union{Module, Symbol}, re::Regex; shortoutput, quiet) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelp.jl:41\nMads.functions(m::Union{Module, Symbol}, string::String; shortoutput, quiet) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelp.jl:71\n\nArguments:\n\nm::Union{Module, Symbol} : MADS module\nre::Regex\nstring::String : string to display functions with matching names\n\nKeywords:\n\nquiet\nshortoutput\n\nExamples:\n\nMads.functions()\nMads.functions(BIGUQ)\nMads.functions(\"get\")\nMads.functions(Mads, \"get\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.gaussiancov",
    "page": "Docstrings",
    "title": "Mads.gaussiancov",
    "category": "function",
    "text": "Gaussian spatial covariance function\n\nMethods:\n\nMads.gaussiancov(h::Number, maxcov::Number, scale::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:17\n\nArguments:\n\nh::Number : separation distance\nmaxcov::Number : maximum covariance\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.gaussianvariogram",
    "page": "Docstrings",
    "title": "Mads.gaussianvariogram",
    "category": "function",
    "text": "Gaussian variogram\n\nMethods:\n\nMads.gaussianvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:105\n\nArguments:\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nGaussian variogram\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getcovmat",
    "page": "Docstrings",
    "title": "Mads.getcovmat",
    "category": "function",
    "text": "Get spatial covariance matrix\n\nMethods:\n\nMads.getcovmat(X::AbstractArray{T,2} where T, covfunction::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:161\n\nArguments:\n\nX::AbstractArray{T,2} where T : matrix with coordinates of the data points (x or y)\ncovfunction::Function\n\nReturns:\n\nspatial covariance matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getcovvec!",
    "page": "Docstrings",
    "title": "Mads.getcovvec!",
    "category": "function",
    "text": "Get spatial covariance vector\n\nMethods:\n\nMads.getcovvec!(covvec::Array{T,1} where T, x0::Array{T,1} where T, X::AbstractArray{T,2} where T, cov::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:187\n\nArguments:\n\nX::AbstractArray{T,2} where T : matrix with coordinates of the data points\ncov::Function : spatial covariance function\ncovvec::Array{T,1} where T : spatial covariance vector\nx0::Array{T,1} where T : vector with coordinates of the estimation points (x or y)\n\nReturns:\n\nspatial covariance vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getdefaultplotformat",
    "page": "Docstrings",
    "title": "Mads.getdefaultplotformat",
    "category": "function",
    "text": "Set the default plot format (SVG is the default format)\n\nMethods:\n\nMads.getdefaultplotformat() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:34\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getdictvalues",
    "page": "Docstrings",
    "title": "Mads.getdictvalues",
    "category": "function",
    "text": "Get dictionary values for keys based on a string or regular expression\n\nMethods:\n\nMads.getdictvalues(dict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:826\nMads.getdictvalues(dict::AbstractDict, key::Regex) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:825\nMads.getdictvalues(dict::AbstractDict, key::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:826\n\nArguments:\n\ndict::AbstractDict : dictionary\nkey::Regex : the key to find value for\nkey::String : the key to find value for\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getdir",
    "page": "Docstrings",
    "title": "Mads.getdir",
    "category": "function",
    "text": "Get directory\n\nMethods:\n\nMads.getdir(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:423\n\nArguments:\n\nfilename::String : file name\n\nReturns:\n\ndirectory in file name\n\nExample:\n\nd = Mads.getdir(\"a.mads\") # d = \".\"\nd = Mads.getdir(\"test/a.mads\") # d = \"test\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getdistribution",
    "page": "Docstrings",
    "title": "Mads.getdistribution",
    "category": "function",
    "text": "Parse parameter distribution from a string\n\nMethods:\n\nMads.getdistribution(dist::String, i::String, inputtype::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:203\n\nArguments:\n\ndist::String : parameter distribution\ni::String\ninputtype::String : input type (parameter or observation)\n\nReturns:\n\ndistribution\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getextension",
    "page": "Docstrings",
    "title": "Mads.getextension",
    "category": "function",
    "text": "Get file name extension\n\nMethods:\n\nMads.getextension(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:595\n\nArguments:\n\nfilename::String : file name\n\nReturns:\n\nfile name extension\n\nExample:\n\next = Mads.getextension(\"a.mads\") # ext = \"mads\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getimportantsamples",
    "page": "Docstrings",
    "title": "Mads.getimportantsamples",
    "category": "function",
    "text": "Get important samples\n\nMethods:\n\nMads.getimportantsamples(samples::Array, llhoods::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:355\n\nArguments:\n\nllhoods::Array{T,1} where T : vector of log-likelihoods\nsamples::Array : array of samples\n\nReturns:\n\narray of important samples\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getlogparamkeys",
    "page": "Docstrings",
    "title": "Mads.getlogparamkeys",
    "category": "function",
    "text": "Get the keys in the MADS problem dictionary for parameters that are log-transformed (log)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getmadsdir",
    "page": "Docstrings",
    "title": "Mads.getmadsdir",
    "category": "function",
    "text": "Get the directory where currently Mads is running\n\nMethods:\n\nMads.getmadsdir() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:465\n\nExample:\n\nproblemdir = Mads.getmadsdir()\n\nReturns:\n\nMads problem directory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getmadsinputfile",
    "page": "Docstrings",
    "title": "Mads.getmadsinputfile",
    "category": "function",
    "text": "Get the default MADS input file set as a MADS global variable using setmadsinputfile(filename)\n\nMethods:\n\nMads.getmadsinputfile() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:380\n\nReturns:\n\ninput file name (e.g. input_file_name.mads)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getmadsproblemdir",
    "page": "Docstrings",
    "title": "Mads.getmadsproblemdir",
    "category": "function",
    "text": "Get the directory where the Mads data file is located\n\nMethods:\n\nMads.getmadsproblemdir(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:446\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nExample:\n\nmadsdata = Mads.loadmadsfile(\"../../a.mads\")\nmadsproblemdir = Mads.getmadsproblemdir(madsdata)\n\nwhere madsproblemdir = \"../../\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getmadsrootname",
    "page": "Docstrings",
    "title": "Mads.getmadsrootname",
    "category": "function",
    "text": "Get the MADS problem root name\n\nMethods:\n\nMads.getmadsrootname(madsdata::AbstractDict; first, version) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:402\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nfirst : use the first . in filename as the seperator between root name and extention [default=true]\nversion : delete version information from filename for the returned rootname [default=false]\n\nExample:\n\nmadsrootname = Mads.getmadsrootname(madsdata)\n\nReturns:\n\nroot of file name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getnextmadsfilename",
    "page": "Docstrings",
    "title": "Mads.getnextmadsfilename",
    "category": "function",
    "text": "Get next mads file name\n\nMethods:\n\nMads.getnextmadsfilename(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:558\n\nArguments:\n\nfilename::String : file name\n\nReturns:\n\nnext mads file name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getnonlogparamkeys",
    "page": "Docstrings",
    "title": "Mads.getnonlogparamkeys",
    "category": "function",
    "text": "Get the keys in the MADS problem dictionary for parameters that are NOT log-transformed (log)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getnonoptparamkeys",
    "page": "Docstrings",
    "title": "Mads.getnonoptparamkeys",
    "category": "function",
    "text": "Get the keys in the MADS problem dictionary for parameters that are NOT optimized (opt)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getobsdist",
    "page": "Docstrings",
    "title": "Mads.getobsdist",
    "category": "function",
    "text": "Get an array with dist values for observations in the MADS problem dictionary defined by obskeys\n\n\n\n\n\nGet an array with dist values for all observations in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getobskeys",
    "page": "Docstrings",
    "title": "Mads.getobskeys",
    "category": "function",
    "text": "Get keys for all observations in the MADS problem dictionary\n\nMethods:\n\nMads.getobskeys(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:45\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nkeys for all observations in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getobslog",
    "page": "Docstrings",
    "title": "Mads.getobslog",
    "category": "function",
    "text": "Get an array with log values for observations in the MADS problem dictionary defined by obskeys\n\n\n\n\n\nGet an array with log values for all observations in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getobsmax",
    "page": "Docstrings",
    "title": "Mads.getobsmax",
    "category": "function",
    "text": "Get an array with max values for observations in the MADS problem dictionary defined by obskeys\n\n\n\n\n\nGet an array with max values for all observations in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getobsmin",
    "page": "Docstrings",
    "title": "Mads.getobsmin",
    "category": "function",
    "text": "Get an array with min values for observations in the MADS problem dictionary defined by obskeys\n\n\n\n\n\nGet an array with min values for all observations in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getobstarget",
    "page": "Docstrings",
    "title": "Mads.getobstarget",
    "category": "function",
    "text": "Get an array with target values for observations in the MADS problem dictionary defined by obskeys\n\n\n\n\n\nGet an array with target values for all observations in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getobstime",
    "page": "Docstrings",
    "title": "Mads.getobstime",
    "category": "function",
    "text": "Get an array with time values for observations in the MADS problem dictionary defined by obskeys\n\n\n\n\n\nGet an array with time values for all observations in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getobsweight",
    "page": "Docstrings",
    "title": "Mads.getobsweight",
    "category": "function",
    "text": "Get an array with weight values for observations in the MADS problem dictionary defined by obskeys\n\n\n\n\n\nGet an array with weight values for all observations in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getoptparamkeys",
    "page": "Docstrings",
    "title": "Mads.getoptparamkeys",
    "category": "function",
    "text": "Get the keys in the MADS problem dictionary for parameters that are optimized (opt)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getoptparams",
    "page": "Docstrings",
    "title": "Mads.getoptparams",
    "category": "function",
    "text": "Get optimizable parameters\n\nMethods:\n\nMads.getoptparams(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:369\nMads.getoptparams(madsdata::AbstractDict, parameterarray::Array) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:372\nMads.getoptparams(madsdata::AbstractDict, parameterarray::Array, optparameterkey::Array) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:372\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\noptparameterkey::Array : optimizable parameter keys\nparameterarray::Array : parameter array\n\nReturns:\n\nparameter array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamdict",
    "page": "Docstrings",
    "title": "Mads.getparamdict",
    "category": "function",
    "text": "Get dictionary with all parameters and their respective initial values\n\nMethods:\n\nMads.getparamdict(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:60\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\ndictionary with all parameters and their respective initial values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamdistributions",
    "page": "Docstrings",
    "title": "Mads.getparamdistributions",
    "category": "function",
    "text": "Get probabilistic distributions of all parameters in the MADS problem dictionary\n\nNote:\n\nProbabilistic distribution of parameters can be defined only if dist or min/max model parameter fields are specified in the MADS problem dictionary madsdata.\n\nMethods:\n\nMads.getparamdistributions(madsdata::AbstractDict; init_dist) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:664\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\ninit_dist : if true use the distribution defined for initialization in the MADS problem dictionary (defined using init_dist parameter field); else use the regular distribution defined in the MADS problem dictionary (defined using dist parameter field [default=false]\n\nReturns:\n\nprobabilistic distributions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamkeys",
    "page": "Docstrings",
    "title": "Mads.getparamkeys",
    "category": "function",
    "text": "Get keys of all parameters in the MADS problem dictionary\n\nMethods:\n\nMads.getparamkeys(madsdata::AbstractDict; filter) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:44\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nfilter : parameter filter\n\nReturns:\n\narray with the keys of all parameters in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamrandom",
    "page": "Docstrings",
    "title": "Mads.getparamrandom",
    "category": "function",
    "text": "Get independent sampling of model parameters defined in the MADS problem dictionary\n\nMethods:\n\nMads.getparamrandom(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:391\nMads.getparamrandom(madsdata::AbstractDict, numsamples::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:391\nMads.getparamrandom(madsdata::AbstractDict, numsamples::Integer, parameterkey::String; init_dist) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:391\nMads.getparamrandom(madsdata::AbstractDict, parameterkey::String; numsamples, paramdist, init_dist) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:408\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nnumsamples::Integer : number of samples,  [default=1]\nparameterkey::String : model parameter key\n\nKeywords:\n\ninit_dist : if true use the distribution set for initialization in the MADS problem dictionary (defined using init_dist parameter field); if false (default) use the regular distribution set in the MADS problem dictionary (defined using dist parameter field)\nnumsamples : number of samples\nparamdist : dictionary of parameter distributions\n\nReturns:\n\ngenerated sample\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamsinit",
    "page": "Docstrings",
    "title": "Mads.getparamsinit",
    "category": "function",
    "text": "Get an array with init values for parameters defined by paramkeys\n\n\n\n\n\nGet an array with init values for all the MADS model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamsinit_max",
    "page": "Docstrings",
    "title": "Mads.getparamsinit_max",
    "category": "function",
    "text": "Get an array with init_max values for parameters defined by paramkeys\n\nMethods:\n\nMads.getparamsinit_max(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:298\nMads.getparamsinit_max(madsdata::AbstractDict, paramkeys::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:264\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparamkeys::Array{T,1} where T : parameter keys\n\nReturns:\n\nthe parameter values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamsinit_min",
    "page": "Docstrings",
    "title": "Mads.getparamsinit_min",
    "category": "function",
    "text": "Get an array with init_min values for parameters\n\nMethods:\n\nMads.getparamsinit_min(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:247\nMads.getparamsinit_min(madsdata::AbstractDict, paramkeys::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:213\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparamkeys::Array{T,1} where T : parameter keys\n\nReturns:\n\nthe parameter values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamslog",
    "page": "Docstrings",
    "title": "Mads.getparamslog",
    "category": "function",
    "text": "Get an array with log values for parameters defined by paramkeys\n\n\n\n\n\nGet an array with log values for all the MADS model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamslongname",
    "page": "Docstrings",
    "title": "Mads.getparamslongname",
    "category": "function",
    "text": "Get an array with longname values for parameters defined by paramkeys\n\n\n\n\n\nGet an array with longname values for all the MADS model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamsmax",
    "page": "Docstrings",
    "title": "Mads.getparamsmax",
    "category": "function",
    "text": "Get an array with max values for parameters defined by paramkeys\n\nMethods:\n\nMads.getparamsmax(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:196\nMads.getparamsmax(madsdata::AbstractDict, paramkeys::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:174\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparamkeys::Array{T,1} where T : parameter keys\n\nReturns:\n\nreturns the parameter values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamsmin",
    "page": "Docstrings",
    "title": "Mads.getparamsmin",
    "category": "function",
    "text": "Get an array with min values for parameters defined by paramkeys\n\nMethods:\n\nMads.getparamsmin(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:157\nMads.getparamsmin(madsdata::AbstractDict, paramkeys::AbstractArray{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:135\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparamkeys::AbstractArray{T,1} where T : parameter keys\n\nReturns:\n\nthe parameter values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamsplotname",
    "page": "Docstrings",
    "title": "Mads.getparamsplotname",
    "category": "function",
    "text": "Get an array with plotname values for parameters defined by paramkeys\n\n\n\n\n\nGet an array with plotname values for all the MADS model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamsstep",
    "page": "Docstrings",
    "title": "Mads.getparamsstep",
    "category": "function",
    "text": "Get an array with step values for parameters defined by paramkeys\n\n\n\n\n\nGet an array with step values for all the MADS model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getparamstype",
    "page": "Docstrings",
    "title": "Mads.getparamstype",
    "category": "function",
    "text": "Get an array with type values for parameters defined by paramkeys\n\n\n\n\n\nGet an array with type values for all the MADS model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getprocs",
    "page": "Docstrings",
    "title": "Mads.getprocs",
    "category": "function",
    "text": "Get the number of processors\n\nMethods:\n\nMads.getprocs() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:30\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getrestart",
    "page": "Docstrings",
    "title": "Mads.getrestart",
    "category": "function",
    "text": "Get MADS restart status\n\nMethods:\n\nMads.getrestart(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:79\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getrestartdir",
    "page": "Docstrings",
    "title": "Mads.getrestartdir",
    "category": "function",
    "text": "Get the directory where Mads restarts will be stored\n\nMethods:\n\nMads.getrestartdir(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:327\nMads.getrestartdir(madsdata::AbstractDict, suffix::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:327\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nsuffix::String : Suffix to be added to the name of restart directory\n\nReturns:\n\nrestart directory where reusable model results will be stored\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getrootname",
    "page": "Docstrings",
    "title": "Mads.getrootname",
    "category": "function",
    "text": "Get file name root\n\nMethods:\n\nMads.getrootname(filename::String; first, version) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:495\n\nArguments:\n\nfilename::String : file name\n\nKeywords:\n\nfirst : use the first . in filename as the seperator between root name and extention [default=true]\nversion : delete version information from filename for the returned rootname [default=false]\n\nReturns:\n\nroot of file name\n\nExample:\n\nr = Mads.getrootname(\"a.rnd.dat\") # r = \"a\"\nr = Mads.getrootname(\"a.rnd.dat\", first=false) # r = \"a.rnd\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getseed",
    "page": "Docstrings",
    "title": "Mads.getseed",
    "category": "function",
    "text": "Get and return current random seed.\n\nMethods:\n\nMads.getseed() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:460\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getsindx",
    "page": "Docstrings",
    "title": "Mads.getsindx",
    "category": "function",
    "text": "Get sin-space dx\n\nMethods:\n\nMads.getsindx(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:342\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nsin-space dx value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getsourcekeys",
    "page": "Docstrings",
    "title": "Mads.getsourcekeys",
    "category": "function",
    "text": "Get keys of all source parameters in the MADS problem dictionary\n\nMethods:\n\nMads.getsourcekeys(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:78\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\narray with keys of all source parameters in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.gettarget",
    "page": "Docstrings",
    "title": "Mads.gettarget",
    "category": "function",
    "text": "Get observation target\n\nMethods:\n\nMads.gettarget(o::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:224\n\nArguments:\n\no::AbstractDict : observation data\n\nReturns:\n\nobservation target\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.gettargetkeys",
    "page": "Docstrings",
    "title": "Mads.gettargetkeys",
    "category": "function",
    "text": "Get keys for all targets (observations with weights greater than zero) in the MADS problem dictionary\n\nMethods:\n\nMads.gettargetkeys(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:59\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nkeys for all targets in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.gettime",
    "page": "Docstrings",
    "title": "Mads.gettime",
    "category": "function",
    "text": "Get observation time\n\nMethods:\n\nMads.gettime(o::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:146\n\nArguments:\n\no::AbstractDict : observation data\n\nReturns:\n\nobservation time (\"NaN\" it time is missing)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getweight",
    "page": "Docstrings",
    "title": "Mads.getweight",
    "category": "function",
    "text": "Get observation weight\n\nMethods:\n\nMads.getweight(o::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:185\n\nArguments:\n\no::AbstractDict : observation data\n\nReturns:\n\nobservation weight (\"NaN\" when weight is missing)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getwelldata",
    "page": "Docstrings",
    "title": "Mads.getwelldata",
    "category": "function",
    "text": "Get spatial and temporal data in the Wells class\n\nMethods:\n\nMads.getwelldata(madsdata::AbstractDict; time) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:716\n\nArguments:\n\nmadsdata::AbstractDict : Mads problem dictionary\n\nKeywords:\n\ntime : get observation times [default=false]\n\nReturns:\n\narray with spatial and temporal data in the Wells class\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getwellkeys",
    "page": "Docstrings",
    "title": "Mads.getwellkeys",
    "category": "function",
    "text": "Get keys for all wells in the MADS problem dictionary\n\nMethods:\n\nMads.getwellkeys(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:76\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nkeys for all wells in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.getwelltargets",
    "page": "Docstrings",
    "title": "Mads.getwelltargets",
    "category": "function",
    "text": "Methods:\n\nMads.getwelltargets(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:750\n\nArguments:\n\nmadsdata::AbstractDict : Mads problem dictionary\n\nReturns:\n\narray with targets in the Wells class\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.graphoff",
    "page": "Docstrings",
    "title": "Mads.graphoff",
    "category": "function",
    "text": "MADS graph output off\n\nMethods:\n\nMads.graphoff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:151\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.graphon",
    "page": "Docstrings",
    "title": "Mads.graphon",
    "category": "function",
    "text": "MADS graph output on\n\nMethods:\n\nMads.graphon() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:142\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.haskeyword",
    "page": "Docstrings",
    "title": "Mads.haskeyword",
    "category": "function",
    "text": "Check for a keyword in a class within the Mads dictionary madsdata\n\nMethods:\n\nMads.haskeyword(madsdata::AbstractDict, keyword::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:239\nMads.haskeyword(madsdata::AbstractDict, class::String, keyword::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:242\n\nArguments:\n\nclass::String : dictionary class; if not provided searches for keyword in Problem class\nkeyword::String : dictionary key\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns: true or false\n\nExamples:\n\n- `Mads.haskeyword(madsdata, \"disp\")` ... searches in `Problem` class by default\n- `Mads.haskeyword(madsdata, \"Wells\", \"R-28\")` ... searches in `Wells` class for a keyword \"R-28\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.help",
    "page": "Docstrings",
    "title": "Mads.help",
    "category": "function",
    "text": "Produce MADS help information\n\nMethods:\n\nMads.help() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelp.jl:10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.importeverywhere",
    "page": "Docstrings",
    "title": "Mads.importeverywhere",
    "category": "function",
    "text": "Import Julia function everywhere from a file. The first function in the Julia input file is the one that will be called by Mads to perform the model simulations.\n\nMethods:\n\nMads.importeverywhere(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:379\n\nArguments:\n\nfilename::String : file name\n\nReturns:\n\nJulia function to execute the model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.indexkeys",
    "page": "Docstrings",
    "title": "Mads.indexkeys",
    "category": "function",
    "text": "Find indexes for dictionary keys based on a string or regular expression\n\nMethods:\n\nMads.indexkeys(dict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:815\nMads.indexkeys(dict::AbstractDict, key::Regex) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:814\nMads.indexkeys(dict::AbstractDict, key::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:815\n\nArguments:\n\ndict::AbstractDict : dictionary\nkey::Regex : the key to find index for\nkey::String : the key to find index for\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.infogap_jump",
    "page": "Docstrings",
    "title": "Mads.infogap_jump",
    "category": "function",
    "text": "Information Gap Decision Analysis using JuMP\n\nMethods:\n\nMads.infogap_jump() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsInfoGap.jl:22\nMads.infogap_jump(madsdata::AbstractDict; horizons, retries, random, maxiter, verbosity, seed) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsInfoGap.jl:22\n\nArguments:\n\nmadsdata::AbstractDict : Mads problem dictionary\n\nKeywords:\n\nhorizons : info-gap horizons of uncertainty [default=[0.05, 0.1, 0.2, 0.5]]\nmaxiter : maximum number of iterations [default=3000]\nrandom : random initial guesses [default=false]\nretries : number of solution retries [default=1]\nseed : random seed [default=0]\nverbosity : verbosity output level [default=0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.infogap_jump_polinomial",
    "page": "Docstrings",
    "title": "Mads.infogap_jump_polinomial",
    "category": "function",
    "text": "Information Gap Decision Analysis using JuMP\n\nMethods:\n\nMads.infogap_jump_polinomial() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsInfoGap.jl:126\nMads.infogap_jump_polinomial(madsdata::AbstractDict; horizons, retries, random, maxiter, verbosity, quiet, plot, model, seed) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsInfoGap.jl:126\n\nArguments:\n\nmadsdata::AbstractDict : Mads problem dictionary\n\nKeywords:\n\nhorizons : info-gap horizons of uncertainty [default=[0.05, 0.1, 0.2, 0.5]]\nmaxiter : maximum number of iterations [default=3000]\nmodel : model id [default=1]\nplot : activate plotting [default=false]\nquiet : quiet [default=false]\nrandom : random initial guesses [default=false]\nretries : number of solution retries [default=1]\nseed : random seed [default=0]\nverbosity : verbosity output level [default=0]\n\nReturns:\n\nhmin, hmax\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.infogap_mpb_lin",
    "page": "Docstrings",
    "title": "Mads.infogap_mpb_lin",
    "category": "function",
    "text": "Information Gap Decision Analysis using MathProgBase\n\nMethods:\n\nMads.infogap_mpb_lin() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsInfoGap.jl:423\nMads.infogap_mpb_lin(madsdata::AbstractDict; horizons, retries, random, maxiter, verbosity, seed, pinit) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsInfoGap.jl:423\n\nArguments:\n\nmadsdata::AbstractDict : Mads problem dictionary\n\nKeywords:\n\nhorizons : info-gap horizons of uncertainty [default=[0.05, 0.1, 0.2, 0.5]]\nmaxiter : maximum number of iterations [default=3000]\npinit : vector with initial parameters\nrandom : random initial guesses [default=false]\nretries : number of solution retries [default=1]\nseed : random seed [default=0]\nverbosity : verbosity output level [default=0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.infogap_mpb_polinomial",
    "page": "Docstrings",
    "title": "Mads.infogap_mpb_polinomial",
    "category": "function",
    "text": "Information Gap Decision Analysis using MathProgBase\n\nMethods:\n\nMads.infogap_mpb_polinomial() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsInfoGap.jl:282\nMads.infogap_mpb_polinomial(madsdata::AbstractDict; horizons, retries, random, maxiter, verbosity, seed, pinit) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsInfoGap.jl:282\n\nArguments:\n\nmadsdata::AbstractDict : Mads problem dictionary\n\nKeywords:\n\nhorizons : info-gap horizons of uncertainty [default=[0.05, 0.1, 0.2, 0.5]]\nmaxiter : maximum number of iterations [default=3000]\npinit : vector with initial parameters\nrandom : random initial guesses [default=false]\nretries : number of solution retries [default=1]\nseed : random seed [default=0]\nverbosity : verbosity output level [default=0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.ins_obs",
    "page": "Docstrings",
    "title": "Mads.ins_obs",
    "category": "function",
    "text": "Apply Mads instruction file instructionfilename to read model output file modeloutputfilename\n\nMethods:\n\nMads.ins_obs(instructionfilename::String, modeloutputfilename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1022\n\nArguments:\n\ninstructionfilename::String : instruction file name\nmodeloutputfilename::String : model output file name\n\nReturns:\n\nobsdict : observation dictionary with the model outputs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.instline2regexs",
    "page": "Docstrings",
    "title": "Mads.instline2regexs",
    "category": "function",
    "text": "Convert an instruction line in the Mads instruction file into regular expressions\n\nMethods:\n\nMads.instline2regexs(instline::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:922\n\nArguments:\n\ninstline::String : instruction line\n\nReturns:\n\nregexs : regular expressions\nobsnames : observation names\ngetparamhere : parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.invobsweights!",
    "page": "Docstrings",
    "title": "Mads.invobsweights!",
    "category": "function",
    "text": "Set inversely proportional observation weights in the MADS problem dictionary\n\nMethods:\n\nMads.invobsweights!(madsdata::AbstractDict, multiplier::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:327\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nmultiplier::Number : weight multiplier\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.invwellweights!",
    "page": "Docstrings",
    "title": "Mads.invwellweights!",
    "category": "function",
    "text": "Set inversely proportional well weights in the MADS problem dictionary\n\nMethods:\n\nMads.invwellweights!(madsdata::AbstractDict, multiplier::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:382\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nmultiplier::Number : weight multiplier\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.islog",
    "page": "Docstrings",
    "title": "Mads.islog",
    "category": "function",
    "text": "Is parameter with key parameterkey log-transformed?\n\nMethods:\n\nMads.islog(madsdata::AbstractDict, parameterkey::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:445\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparameterkey::String : parameter key\n\nReturns:\n\ntrue if log-transformed, false otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.isobs",
    "page": "Docstrings",
    "title": "Mads.isobs",
    "category": "function",
    "text": "Is a dictionary containing all the observations\n\nMethods:\n\nMads.isobs(madsdata::AbstractDict, dict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:19\n\nArguments:\n\ndict::AbstractDict : dictionary\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\ntrue if the dictionary contain all the observations, false otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.isopt",
    "page": "Docstrings",
    "title": "Mads.isopt",
    "category": "function",
    "text": "Is parameter with key parameterkey optimizable?\n\nMethods:\n\nMads.isopt(madsdata::AbstractDict, parameterkey::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:425\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparameterkey::String : parameter key\n\nReturns:\n\ntrue if optimizable, false if not\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.isparam",
    "page": "Docstrings",
    "title": "Mads.isparam",
    "category": "function",
    "text": "Check if a dictionary containing all the Mads model parameters\n\nMethods:\n\nMads.isparam(madsdata::AbstractDict, dict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:17\n\nArguments:\n\ndict::AbstractDict : dictionary\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\ntrue if the dictionary containing all the parameters, false otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.ispkgavailable",
    "page": "Docstrings",
    "title": "Mads.ispkgavailable",
    "category": "function",
    "text": "Checks if package is available\n\nMethods:\n\nMads.ispkgavailable(modulename::String; quiet) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:497\n\nArguments:\n\nmodulename::String : module name\n\nKeywords:\n\nquiet\n\nReturns:\n\ntrue or false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.krige",
    "page": "Docstrings",
    "title": "Mads.krige",
    "category": "function",
    "text": "Kriging\n\nMethods:\n\nMads.krige(x0mat::AbstractArray{T,2} where T, X::AbstractArray{T,2} where T, Z::Array{T,1} where T, cov::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:126\n\nArguments:\n\nX::AbstractArray{T,2} where T : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nx0mat::AbstractArray{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nkriging estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.levenberg_marquardt",
    "page": "Docstrings",
    "title": "Mads.levenberg_marquardt",
    "category": "function",
    "text": "Levenberg-Marquardt optimization\n\nMethods:\n\nMads.levenberg_marquardt(f::Function, g::Function, x0) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:359\nMads.levenberg_marquardt(f::Function, g::Function, x0, o::Function; root, tolX, tolG, tolOF, maxEval, maxIter, maxJacobians, lambda, lambda_scale, lambda_mu, lambda_nu, np_lambda, show_trace, alwaysDoJacobian, callbackiteration, callbackjacobian) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:359\n\nArguments:\n\nf::Function : forward model function\ng::Function : gradient function for the forward model\no::Function : objective function [default=x->(x\'*x)[1]]\nx0 : initial parameter guess\n\nKeywords:\n\nalwaysDoJacobian : computer Jacobian each iteration [default=false]\ncallbackiteration : call back function for each iteration [default=(best_x::Vector, of::Number, lambda::Number)->nothing]\ncallbackjacobian : call back function for each Jacobian [default=(x::Vector, J::Matrix)->nothing]\nlambda : initial Levenberg-Marquardt lambda [default=eps(Float32)]\nlambda_mu : lambda multiplication factor μ [default=10]\nlambda_nu : lambda multiplication factor ν [default=2]\nlambda_scale : lambda scaling factor [default=1e-3,]\nmaxEval : maximum number of model evaluations [default=1001]\nmaxIter : maximum number of optimization iterations [default=100]\nmaxJacobians : maximum number of Jacobian solves [default=100]\nnp_lambda : number of parallel lambda solves [default=10]\nroot : Mads problem root name\nshow_trace : shows solution trace [default=false]\ntolG : parameter space update tolerance [default=1e-6]\ntolOF : objective function update tolerance [default=1e-3]\ntolX : parameter space tolerance [default=1e-4]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.linktempdir",
    "page": "Docstrings",
    "title": "Mads.linktempdir",
    "category": "function",
    "text": "Link files in a temporary directory\n\nMethods:\n\nMads.linktempdir(madsproblemdir::String, tempdirname::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1281\n\nArguments:\n\nmadsproblemdir::String : Mads problem directory\ntempdirname::String : temporary directory name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.loadasciifile",
    "page": "Docstrings",
    "title": "Mads.loadasciifile",
    "category": "function",
    "text": "Load ASCII file\n\nMethods:\n\nMads.loadasciifile(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsASCII.jl:15\n\nArguments:\n\nfilename::String : ASCII file name\n\nReturns:\n\ndata from the file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.loadbigyamlfile",
    "page": "Docstrings",
    "title": "Mads.loadbigyamlfile",
    "category": "function",
    "text": "Load BIG YAML input file\n\nMethods:\n\nMads.loadmadsfile(filename::String; bigfile, julia, format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:34\n\nArguments:\n\nfilename::String : input file name (e.g. input_file_name.mads)\n\nKeywords:\n\nbigfile\nformat\njulia\n\nReturns:\n\nMADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.loadjsonfile",
    "page": "Docstrings",
    "title": "Mads.loadjsonfile",
    "category": "function",
    "text": "Load a JSON file\n\nMethods:\n\nMads.loadjsonfile(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsJSON.jl:17\n\nArguments:\n\nfilename::String : JSON file name\n\nReturns:\n\ndata from the JSON file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.loadmadsfile",
    "page": "Docstrings",
    "title": "Mads.loadmadsfile",
    "category": "function",
    "text": "Load MADS input file defining a MADS problem dictionary\n\nMethods:\n\nMads.loadmadsfile(filename::String; bigfile, julia, format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:34\n\nArguments:\n\nfilename::String : input file name (e.g. input_file_name.mads)\n\nKeywords:\n\nbigfile\nformat : acceptable formats are yaml and json [default=yaml]\njulia : if true, force using julia parsing functions; if false (default), use python parsing functions\n\nReturns:\n\nMADS problem dictionary\n\nExample:\n\nmd = Mads.loadmadsfile(\"input_file_name.mads\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.loadmadsproblem",
    "page": "Docstrings",
    "title": "Mads.loadmadsproblem",
    "category": "function",
    "text": "Load a predefined Mads problem\n\nMethods:\n\nMads.loadmadsproblem(name::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCreate.jl:15\n\nArguments:\n\nname::String : predefined MADS problem name\n\nReturns:\n\nMADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.loadsaltellirestart!",
    "page": "Docstrings",
    "title": "Mads.loadsaltellirestart!",
    "category": "function",
    "text": "Load Saltelli sensitivity analysis results for fast simulation restarts\n\nMethods:\n\nMads.loadsaltellirestart!(evalmat::Array, matname::String, restartdir::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:602\n\nArguments:\n\nevalmat::Array : loaded array\nmatname::String : matrix (array) name (defines the name of the loaded file)\nrestartdir::String : directory where files will be stored containing model results for fast simulation restarts\n\nReturns:\n\ntrue when successfully loaded, false when it is not\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.loadyamlfile",
    "page": "Docstrings",
    "title": "Mads.loadyamlfile",
    "category": "function",
    "text": "Load YAML file\n\nMethods:\n\nMads.loadyamlfile(filename::String; julia) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsYAML.jl:18\n\nArguments:\n\nfilename::String : file name\n\nKeywords:\n\njulia : if true, use julia YAML library (if available); if false (default), use python YAML library (if available)\n\nReturns:\n\ndata in the yaml input file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.localsa",
    "page": "Docstrings",
    "title": "Mads.localsa",
    "category": "function",
    "text": "Local sensitivity analysis based on eigen analysis of the parameter covariance matrix\n\nMethods:\n\nMads.localsa(madsdata::AbstractDict; sinspace, keyword, filename, format, datafiles, imagefiles, par, obs, J) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:128\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nJ : Jacobian matrix\ndatafiles : flag to write data files [default=true]\nfilename : output file name\nformat : output plot format (png, pdf, etc.)\nimagefiles : flag to create image files [default=Mads.graphoutput]\nkeyword : keyword to be added in the filename root\nobs : observations for the parameter set\npar : parameter set\nsinspace : apply sin transformation [default=true]\n\nDumps:\n\nfilename : output plot file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.long_tests_off",
    "page": "Docstrings",
    "title": "Mads.long_tests_off",
    "category": "function",
    "text": "Turn off execution of long MADS tests (default)\n\nMethods:\n\nMads.long_tests_off() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:196\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.long_tests_on",
    "page": "Docstrings",
    "title": "Mads.long_tests_on",
    "category": "function",
    "text": "Turn on execution of long MADS tests\n\nMethods:\n\nMads.long_tests_on() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:187\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madscores",
    "page": "Docstrings",
    "title": "Mads.madscores",
    "category": "function",
    "text": "Check the number of processors on a series of servers\n\nMethods:\n\nMads.madscores(nodenames::Array{String,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:306\nMads.madscores() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:306\n\nArguments:\n\nnodenames::Array{String,1} : array with names of machines/nodes [default=madsservers]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madscritical",
    "page": "Docstrings",
    "title": "Mads.madscritical",
    "category": "function",
    "text": "MADS critical error messages\n\nMethods:\n\nMads.madscritical(message::AbstractString) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:73\n\nArguments:\n\nmessage::AbstractString : critical error message\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madsdebug",
    "page": "Docstrings",
    "title": "Mads.madsdebug",
    "category": "function",
    "text": "MADS debug messages (controlled by quiet and debuglevel)\n\nMethods:\n\nMads.madsdebug(message::AbstractString) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:26\nMads.madsdebug(message::AbstractString, level::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:26\n\nArguments:\n\nlevel::Int64 : output verbosity level [default=0]\nmessage::AbstractString : debug message\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madserror",
    "page": "Docstrings",
    "title": "Mads.madserror",
    "category": "function",
    "text": "MADS error messages\n\nMethods:\n\nMads.madserror(message::AbstractString) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:63\n\nArguments:\n\nmessage::AbstractString : error message\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madsinfo",
    "page": "Docstrings",
    "title": "Mads.madsinfo",
    "category": "function",
    "text": "MADS information/status messages (controlled by quietandverbositylevel`)\n\nMethods:\n\nMads.madsinfo(message::AbstractString) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:41\nMads.madsinfo(message::AbstractString, level::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:41\n\nArguments:\n\nlevel::Int64 : output verbosity level [default=0]\nmessage::AbstractString : information/status message\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madsload",
    "page": "Docstrings",
    "title": "Mads.madsload",
    "category": "function",
    "text": "Check the load of a series of servers\n\nMethods:\n\nMads.madsload(nodenames::Array{String,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:326\nMads.madsload() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:326\n\nArguments:\n\nnodenames::Array{String,1} : array with names of machines/nodes [default=madsservers]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madsmathprogbase",
    "page": "Docstrings",
    "title": "Mads.madsmathprogbase",
    "category": "function",
    "text": "Define MadsModel type applied for Mads execution using MathProgBase\n\nMethods:\n\nMads.madsmathprogbase() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsMathProgBase.jl:17\nMads.madsmathprogbase(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsMathProgBase.jl:17\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary [default=Dict()]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madsmodules",
    "page": "Docstrings",
    "title": "Mads.madsmodules",
    "category": "constant",
    "text": "Mads Modules: [\"Mads\", \"Anasol\", \"AffineInvariantMCMC\", \"Kriging\", \"ReusableFunctions\", \"RobustPmap\", \"MetaProgTools\", \"SVR\", \"DocumentFunction\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madsmodulesdoc",
    "page": "Docstrings",
    "title": "Mads.madsmodulesdoc",
    "category": "constant",
    "text": "Mads Modules: Module[Mads, Anasol, AffineInvariantMCMC, Kriging, ReusableFunctions, RobustPmap, MetaProgTools, SVR, DocumentFunction]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madsoutput",
    "page": "Docstrings",
    "title": "Mads.madsoutput",
    "category": "function",
    "text": "MADS output (controlled by quiet and verbositylevel)\n\nMethods:\n\nMads.madsoutput(message::AbstractString) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:11\nMads.madsoutput(message::AbstractString, level::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:11\n\nArguments:\n\nlevel::Int64 : output verbosity level [default=0]\nmessage::AbstractString : output message\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madsup",
    "page": "Docstrings",
    "title": "Mads.madsup",
    "category": "function",
    "text": "Check the uptime of a series of servers\n\nMethods:\n\nMads.madsup(nodenames::Array{String,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:316\nMads.madsup() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:316\n\nArguments:\n\nnodenames::Array{String,1} : array with names of machines/nodes [default=madsservers]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.madswarn",
    "page": "Docstrings",
    "title": "Mads.madswarn",
    "category": "function",
    "text": "MADS warning messages\n\nMethods:\n\nMads.madswarn(message::AbstractString) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLog.jl:53\n\nArguments:\n\nmessage::AbstractString : warning message\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makearrayconditionalloglikelihood",
    "page": "Docstrings",
    "title": "Mads.makearrayconditionalloglikelihood",
    "category": "function",
    "text": "Make a conditional log likelihood function that accepts an array containing the optimal parameter values\n\nMethods:\n\nMads.makearrayconditionalloglikelihood(madsdata::AbstractDict, conditionalloglikelihood) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:105\n\nArguments:\n\nconditionalloglikelihood : conditional log likelihood\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\na conditional log likelihood function that accepts an array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makearrayfunction",
    "page": "Docstrings",
    "title": "Mads.makearrayfunction",
    "category": "function",
    "text": "Make a version of the function f that accepts an array containing the optimal parameter values\n\nMethods:\n\nMads.makearrayfunction(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:33\nMads.makearrayfunction(madsdata::AbstractDict, f::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:33\n\nArguments:\n\nf::Function : function [default=makemadscommandfunction(madsdata)]\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nfunction accepting an array containing the optimal parameter values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makearrayloglikelihood",
    "page": "Docstrings",
    "title": "Mads.makearrayloglikelihood",
    "category": "function",
    "text": "Make a log likelihood function that accepts an array containing the optimal parameter values\n\nMethods:\n\nMads.makearrayloglikelihood(madsdata::AbstractDict, loglikelihood) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:128\n\nArguments:\n\nloglikelihood : log likelihood\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\na log likelihood function that accepts an array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makecomputeconcentrations",
    "page": "Docstrings",
    "title": "Mads.makecomputeconcentrations",
    "category": "function",
    "text": "Create a function to compute concentrations for all the observation points using Anasol\n\nMethods:\n\nMads.makecomputeconcentrations(madsdata::AbstractDict; calczeroweightobs, calcpredictions) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:179\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\ncalcpredictions : calculate zero weight predictions [default=true]\ncalczeroweightobs : calculate zero weight observations[default=false]\n\nReturns:\n\nfunction to compute concentrations; the new function returns a dictionary of observations and model predicted concentrations\n\nExamples:\n\ncomputeconcentrations = Mads.makecomputeconcentrations(madsdata)\nparamkeys = Mads.getparamkeys(madsdata)\nparamdict = OrderedDict(zip(paramkeys, map(key->madsdata[\"Parameters\"][key][\"init\"], paramkeys)))\nforward_preds = computeconcentrations(paramdict)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makedixonprice",
    "page": "Docstrings",
    "title": "Mads.makedixonprice",
    "category": "function",
    "text": "Make dixon price\n\nMethods:\n\nMads.makedixonprice(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:260\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\ndixon price\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makedixonprice_gradient",
    "page": "Docstrings",
    "title": "Mads.makedixonprice_gradient",
    "category": "function",
    "text": "Methods:\n\nMads.makedixonprice(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:260\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\ndixon price gradient\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makedoublearrayfunction",
    "page": "Docstrings",
    "title": "Mads.makedoublearrayfunction",
    "category": "function",
    "text": "Make a version of the function f that accepts an array containing the optimal parameter values, and returns an array of observations\n\nMethods:\n\nMads.makedoublearrayfunction(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:78\nMads.makedoublearrayfunction(madsdata::AbstractDict, f::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMisc.jl:78\n\nArguments:\n\nf::Function : function [default=makemadscommandfunction(madsdata)]\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nfunction accepting an array containing the optimal parameter values, and returning an array of observations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makelmfunctions",
    "page": "Docstrings",
    "title": "Mads.makelmfunctions",
    "category": "function",
    "text": "Make forward model, gradient, objective functions needed for Levenberg-Marquardt optimization\n\nMethods:\n\nMads.makelmfunctions(f::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:101\nMads.makelmfunctions(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:122\n\nArguments:\n\nf::Function : Function\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nforward model, gradient, objective functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makelocalsafunction",
    "page": "Docstrings",
    "title": "Mads.makelocalsafunction",
    "category": "function",
    "text": "Make gradient function needed for local sensitivity analysis\n\nMethods:\n\nMads.makelocalsafunction(madsdata::AbstractDict; multiplycenterbyweights) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:29\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nmultiplycenterbyweights : multiply center by observation weights [default=true]\n\nReturns:\n\ngradient function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makelogprior",
    "page": "Docstrings",
    "title": "Mads.makelogprior",
    "category": "function",
    "text": "Make a function to compute the prior log-likelihood of the model parameters listed in the MADS problem dictionary madsdata\n\nMethods:\n\nMads.makelogprior(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:402\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturn:\n\nthe prior log-likelihood of the model parameters listed in the MADS problem dictionary madsdata\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makemadscommandfunction",
    "page": "Docstrings",
    "title": "Mads.makemadscommandfunction",
    "category": "function",
    "text": "Make MADS function to execute the model defined in the input MADS problem dictionary\n\nMethods:\n\nMads.makemadscommandfunction(madsdata_in::AbstractDict; obskeys, calczeroweightobs, calcpredictions) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:62\n\nArguments:\n\nmadsdata_in::AbstractDict : MADS problem dictionary\n\nKeywords:\n\ncalcpredictions : Calculate predictions [default=true]\ncalczeroweightobs : Calculate zero weight observations [default=false]\nobskeys\n\nExample:\n\nMads.makemadscommandfunction(madsdata)\n\nMADS can be coupled with any internal or external model. The model coupling is defined in the MADS problem dictionary. The expectations is that for a given set of model inputs, the model will produce a model output that will be provided to MADS. The fields in the MADS problem dictionary that can be used to define the model coupling are:\n\nModel : execute a Julia function defined in an input Julia file. The function that should accept a parameter dictionary with all the model parameters as an input argument and should return an observation dictionary with all the model predicted observations. MADS will execute the first function defined in the file.\nMADS model : create a Julia function based on an input Julia file. The input file should contain a function that accepts as an argument the MADS problem dictionary. MADS will execute the first function defined in the file. This function should a create a Julia function that will accept a parameter dictionary with all the model parameters as an input argument and will return an observation dictionary with all the model predicted observations.\nJulia model : execute an internal Julia function that accepts a parameter dictionary with all the model parameters as an input argument and will return an observation dictionary with all the model predicted observations.\nCommand : execute an external UNIX command or script that will execute an external model.\nJulia command : execute a Julia script that will execute an external model. The Julia script is defined in an input Julia file. The input file should contain a function that accepts a parameter dictionary with all the model parameters as an input argument; MADS will execute the first function defined in the file. The Julia script should be capable to (1) execute the model (making a system call of an external model), (2) parse the model outputs, (3) return an observation dictionary with model predictions.\n\nBoth Command and Julia command can use different approaches to pass model parameters to the external model.\n\nOnly Command uses different approaches to get back the model outputs. The script defined under Julia command parses the model outputs using Julia.\n\nThe available options for writing model inputs and reading model outputs are as follows.\n\nOptions for writing model inputs:\n\nTemplates : template files for writing model input files as defined at http://mads.lanl.gov\nASCIIParameters : model parameters written in a ASCII file\nJLDParameters : model parameters written in a JLD file\nYAMLParameters : model parameters written in a YAML file\nJSONParameters : model parameters written in a JSON file\n\nOptions for reading model outputs:\n\nInstructions : instruction files for reading model output files as defined at http://mads.lanl.gov\nASCIIPredictions : model predictions read from a ASCII file\nJLDPredictions : model predictions read from a JLD file\nYAMLPredictions : model predictions read from a YAML file\nJSONPredictions : model predictions read from a JSON file\n\nReturns:\n\nMads function to execute a forward model simulation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makemadsconditionalloglikelihood",
    "page": "Docstrings",
    "title": "Mads.makemadsconditionalloglikelihood",
    "category": "function",
    "text": "Make a function to compute the conditional log-likelihood of the model parameters conditioned on the model predictions/observations. Model parameters and observations are defined in the MADS problem dictionary madsdata.\n\nMethods:\n\nMads.makemadsconditionalloglikelihood(madsdata::AbstractDict; weightfactor) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:425\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nweightfactor : Weight factor [default=1]\n\nReturn:\n\nthe conditional log-likelihood\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makemadsloglikelihood",
    "page": "Docstrings",
    "title": "Mads.makemadsloglikelihood",
    "category": "function",
    "text": "Make a function to compute the log-likelihood for a given set of model parameters, associated model predictions and existing observations. The function can be provided as an external function in the MADS problem dictionary under LogLikelihood or computed internally.\n\nMethods:\n\nMads.makemadsloglikelihood(madsdata::AbstractDict; weightfactor) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:460\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nweightfactor : Weight factor [default=1]\n\nReturns:\n\nthe log-likelihood for a given set of model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makemadsreusablefunction",
    "page": "Docstrings",
    "title": "Mads.makemadsreusablefunction",
    "category": "function",
    "text": "Make Reusable Mads function to execute a forward model simulation (automatically restarts if restart data exists)\n\nMethods:\n\nMads.makemadsreusablefunction(madsdata::AbstractDict, madscommandfunction::Function) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:279\nMads.makemadsreusablefunction(madsdata::AbstractDict, madscommandfunction::Function, suffix::String; usedict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:279\nMads.makemadsreusablefunction(paramkeys::Array{T,1} where T, obskeys::Array{T,1} where T, madsdatarestart::Union{Bool, String}, madscommandfunction::Function, restartdir::String; usedict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsFunc.jl:282\n\nArguments:\n\nmadscommandfunction::Function : Mads function to execute a forward model simulation\nmadsdata::AbstractDict : MADS problem dictionary\nmadsdatarestart::Union{Bool, String} : Restart type (memory/disk) or on/off status\nobskeys::Array{T,1} where T : Dictionary of observation keys\nparamkeys::Array{T,1} where T : Dictionary of parameter keys\nrestartdir::String : Restart directory where the reusable model results are stored\nsuffix::String : Suffix to be added to the name of restart directory\n\nKeywords:\n\nusedict : Use dictionary [default=true]\n\nReturns:\n\nReusable Mads function to execute a forward model simulation (automatically restarts if restart data exists)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makempbfunctions",
    "page": "Docstrings",
    "title": "Mads.makempbfunctions",
    "category": "function",
    "text": "Make forward model, gradient, objective functions needed for MathProgBase optimization\n\nMethods:\n\nMads.makempbfunctions(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-new/MadsMathProgBase.jl:91\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nforward model, gradient, objective functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makepowell",
    "page": "Docstrings",
    "title": "Mads.makepowell",
    "category": "function",
    "text": "Make Powell test function for LM optimization\n\nMethods:\n\nMads.makepowell(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:163\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nPowell test function for LM optimization\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makepowell_gradient",
    "page": "Docstrings",
    "title": "Mads.makepowell_gradient",
    "category": "function",
    "text": "ake parameter gradients of the Powell test function for LM optimization\n\nMethods:\n\nMads.makepowell_gradient(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:187\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\narameter gradients of the Powell test function for LM optimization\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makerosenbrock",
    "page": "Docstrings",
    "title": "Mads.makerosenbrock",
    "category": "function",
    "text": "Make Rosenbrock test function for LM optimization\n\nMethods:\n\nMads.makerosenbrock(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:118\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nRosenbrock test function for LM optimization\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makerosenbrock_gradient",
    "page": "Docstrings",
    "title": "Mads.makerosenbrock_gradient",
    "category": "function",
    "text": "Make parameter gradients of the Rosenbrock test function for LM optimization\n\nMethods:\n\nMads.makerosenbrock_gradient(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:140\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nparameter gradients of the Rosenbrock test function for LM optimization\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makerotatedhyperellipsoid",
    "page": "Docstrings",
    "title": "Mads.makerotatedhyperellipsoid",
    "category": "function",
    "text": "Methods:\n\nMads.makerotatedhyperellipsoid(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:339\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nrotated hyperellipsoid\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makerotatedhyperellipsoid_gradient",
    "page": "Docstrings",
    "title": "Mads.makerotatedhyperellipsoid_gradient",
    "category": "function",
    "text": "Methods:\n\nMads.makerotatedhyperellipsoid_gradient(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:363\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nrotated hyperellipsoid gradient\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makesphere",
    "page": "Docstrings",
    "title": "Mads.makesphere",
    "category": "function",
    "text": "Make sphere\n\nMethods:\n\nMads.makesphere(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:218\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nsphere\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makesphere_gradient",
    "page": "Docstrings",
    "title": "Mads.makesphere_gradient",
    "category": "function",
    "text": "Make sphere gradient\n\nMethods:\n\nMads.makesphere_gradient(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:239\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nsphere gradient\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makesumsquares",
    "page": "Docstrings",
    "title": "Mads.makesumsquares",
    "category": "function",
    "text": "Methods:\n\nMads.makesumsquares(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:301\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nsumsquares\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makesumsquares_gradient",
    "page": "Docstrings",
    "title": "Mads.makesumsquares_gradient",
    "category": "function",
    "text": "Methods:\n\nMads.makesumsquares_gradient(n::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:320\n\nArguments:\n\nn::Integer : number of observations\n\nReturns:\n\nsumsquares gradient\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.makesvrmodel",
    "page": "Docstrings",
    "title": "Mads.makesvrmodel",
    "category": "function",
    "text": "Make SVR model functions (executor and cleaner)\n\nMethods:\n\nMads.makesvrmodel(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:210\nMads.makesvrmodel(madsdata::AbstractDict, numberofsamples::Integer; check, addminmax, loadsvr, savesvr, svm_type, kernel_type, degree, gamma, coef0, C, nu, eps, cache_size, tol, shrinking, probability, verbose, seed) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:210\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nnumberofsamples::Integer : number of samples [default=100]\n\nKeywords:\n\nC : cost; penalty parameter of the error term [default=1000.0]\naddminmax : add parameter minimum / maximum range values in the training set [default=true]\ncache_size : size of the kernel cache [default=100.0]\ncheck : check SVR performance [default=false]\ncoef0 : independent term in kernel function; important only in POLY and  SIGMOND kernel types\n\n[default=0]\n\ndegree : degree of the polynomial kernel [default=3]\neps : epsilon in the EPSILON_SVR model; defines an epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value [default=0.001]\ngamma : coefficient for RBF, POLY and SIGMOND kernel types [default=1/numberofsamples]\nkernel_type : kernel type[default=SVR.RBF]\nloadsvr : load SVR models [default=false]\nnu : upper bound on the fraction of training errors / lower bound of the fraction of support vectors; acceptable range (0, 1]; applied if NU_SVR model [default=0.5]\nprobability : train to estimate probabilities [default=false]\nsavesvr : save SVR models [default=false]\nseed : random seed [default=0]\nshrinking : apply shrinking heuristic [default=true]\nsvm_type : SVM type [default=SVR.EPSILON_SVR]\ntol : tolerance of termination criterion [default=0.001]\nverbose : verbose output [default=false]\n\nReturns:\n\nfunction performing SVR predictions\nfunction loading existing SVR models\nfunction saving SVR models\nfunction removing SVR models from the memory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.maxtofloatmax!",
    "page": "Docstrings",
    "title": "Mads.maxtofloatmax!",
    "category": "function",
    "text": "Scale down values larger than max(Float32) in a dataframe df so that Gadfly can plot the data\n\nMethods:\n\nMads.maxtofloatmax!(df::DataFrames.DataFrame) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:1089\n\nArguments:\n\ndf::DataFrames.DataFrame : dataframe\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.mdir",
    "page": "Docstrings",
    "title": "Mads.mdir",
    "category": "function",
    "text": "Change the current directory to the Mads source dictionary\n\nMethods:\n\nMads.mdir() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:11\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.meshgrid",
    "page": "Docstrings",
    "title": "Mads.meshgrid",
    "category": "function",
    "text": "Create mesh grid\n\nMethods:\n\nMads.meshgrid(x::Array{T,1} where T, y::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:430\n\nArguments:\n\nx::Array{T,1} where T : vector of grid x coordinates\ny::Array{T,1} where T : vector of grid y coordinates\n\nReturns:\n\n2D grid coordinates based on the coordinates contained in vectors x and y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.minimize",
    "page": "Docstrings",
    "title": "Mads.minimize",
    "category": "function",
    "text": "Minimize Julia function using a constrained Levenberg-Marquardt technique\n\nMads.calibrate(madsdata; tolX=1e-3, tolG=1e-6, maxEval=1000, maxIter=100, maxJacobians=100, lambda=100.0, lambda_mu=10.0, np_lambda=10, show_trace=false, usenaive=false)\n\nMethods:\n\nMads.calibrate(madsdata::AbstractDict; tolX, tolG, tolOF, maxEval, maxIter, maxJacobians, lambda, lambda_mu, np_lambda, show_trace, usenaive, save_results, localsa) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCalibrate.jl:164\n\nArguments:\n\nmadsdata::AbstractDict\n\nKeywords:\n\nlambda : initial Levenberg-Marquardt lambda [default=100.0]\nlambda_mu : lambda multiplication factor [default=10.0]\nlocalsa\nmaxEval : maximum number of model evaluations [default=1000]\nmaxIter : maximum number of optimization iterations [default=100]\nmaxJacobians : maximum number of Jacobian solves [default=100]\nnp_lambda : number of parallel lambda solves [default=10]\nsave_results\nshow_trace : shows solution trace [default=false]\ntolG : parameter space update tolerance [default=1e-6]\ntolOF : objective function tolerance [default=1e-3]\ntolX : parameter space tolerance [default=1e-4]\nusenaive\n\nReturns:\n\nvector with the optimal parameter values at the minimum\noptimization algorithm results (e.g. results.minimizer)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.mkdir",
    "page": "Docstrings",
    "title": "Mads.mkdir",
    "category": "function",
    "text": "Create a directory (if does not already exist)\n\nMethods:\n\nMads.mkdir(dirname::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1308\n\nArguments:\n\ndirname::String : directory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.modelinformationcriteria",
    "page": "Docstrings",
    "title": "Mads.modelinformationcriteria",
    "category": "function",
    "text": "Model section information criteria\n\nMethods:\n\nMads.modelinformationcriteria(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsModelSelection.jl:11\nMads.modelinformationcriteria(madsdata::AbstractDict, par::Array{Float64,N} where N) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsModelSelection.jl:11\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\npar::Array{Float64,N} where N : parameter array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.modobsweights!",
    "page": "Docstrings",
    "title": "Mads.modobsweights!",
    "category": "function",
    "text": "Modify (multiply) observation weights in the MADS problem dictionary\n\nMethods:\n\nMads.modobsweights!(madsdata::AbstractDict, value::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:313\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nvalue::Number : value for modifing observation weights\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.modwellweights!",
    "page": "Docstrings",
    "title": "Mads.modwellweights!",
    "category": "function",
    "text": "Modify (multiply) well weights in the MADS problem dictionary\n\nMethods:\n\nMads.modwellweights!(madsdata::AbstractDict, value::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:363\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nvalue::Number : value for well weights\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.montecarlo",
    "page": "Docstrings",
    "title": "Mads.montecarlo",
    "category": "function",
    "text": "Monte Carlo analysis\n\nMethods:\n\nMads.montecarlo(madsdata::AbstractDict; N, filename) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMonteCarlo.jl:188\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nN : number of samples [default=100]\nfilename : file name to save Monte-Carlo results\n\nReturns:\n\nparameter dictionary containing the data arrays\n\nDumps:\n\nYAML output file with the parameter dictionary containing the data arrays\n\nExample:\n\nMads.montecarlo(madsdata; N=100)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.naive_get_deltax",
    "page": "Docstrings",
    "title": "Mads.naive_get_deltax",
    "category": "function",
    "text": "Naive Levenberg-Marquardt optimization: get the LM parameter space step\n\nMethods:\n\nMads.naive_get_deltax(JpJ::AbstractArray{Float64,2}, Jp::AbstractArray{Float64,2}, f0::Array{Float64,1}, lambda::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:247\n\nArguments:\n\nJp::AbstractArray{Float64,2} : Jacobian matrix times model parameters\nJpJ::AbstractArray{Float64,2} : Jacobian matrix times model parameters times transposed Jacobian matrix\nf0::Array{Float64,1} : initial model observations\nlambda::Number : Levenberg-Marquardt lambda\n\nReturns:\n\nthe LM parameter space step\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.naive_levenberg_marquardt",
    "page": "Docstrings",
    "title": "Mads.naive_levenberg_marquardt",
    "category": "function",
    "text": "Naive Levenberg-Marquardt optimization\n\nMethods:\n\nMads.naive_levenberg_marquardt(f::Function, g::Function, x0::Array{Float64,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:297\nMads.naive_levenberg_marquardt(f::Function, g::Function, x0::Array{Float64,1}, o::Function; maxIter, maxEval, lambda, lambda_mu, np_lambda) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:297\n\nArguments:\n\nf::Function : forward model function\ng::Function : gradient function for the forward model\no::Function : objective function [default=x->(x\'*x)[1]]\nx0::Array{Float64,1} : initial parameter guess\n\nKeywords:\n\nlambda : initial Levenberg-Marquardt lambda [default=100]\nlambda_mu : lambda multiplication factor μ [default=10]\nmaxEval : maximum number of model evaluations [default=101]\nmaxIter : maximum number of optimization iterations [default=10]\nnp_lambda : number of parallel lambda solves [default=10]\n\nReturns:\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.naive_lm_iteration",
    "page": "Docstrings",
    "title": "Mads.naive_lm_iteration",
    "category": "function",
    "text": "Naive Levenberg-Marquardt optimization: perform LM iteration\n\nMethods:\n\nMads.naive_lm_iteration(f::Function, g::Function, o::Function, x0::Array{Float64,1}, f0::Array{Float64,1}, lambdas::Array{Float64,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:268\n\nArguments:\n\nf0::Array{Float64,1} : initial model observations\nf::Function : forward model function\ng::Function : gradient function for the forward model\nlambdas::Array{Float64,1} : Levenberg-Marquardt lambdas\no::Function : objective function\nx0::Array{Float64,1} : initial parameter guess\n\nReturns:\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.noplot",
    "page": "Docstrings",
    "title": "Mads.noplot",
    "category": "function",
    "text": "Disable MADS plotting\n\nMethods:\n\nMads.noplot() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:239\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.obslineoccursin",
    "page": "Docstrings",
    "title": "Mads.obslineoccursin",
    "category": "function",
    "text": "Match an instruction line in the Mads instruction file with model input file\n\nMethods:\n\nMads.obslineoccursin(obsline::String, regexs::Array{Regex,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:971\n\nArguments:\n\nobsline::String : instruction line\nregexs::Array{Regex,1} : regular expressions\n\nReturns:\n\ntrue or false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.of",
    "page": "Docstrings",
    "title": "Mads.of",
    "category": "function",
    "text": "Compute objective function\n\nMethods:\n\nMads.of(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:59\nMads.of(madsdata::AbstractDict, resultvec::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:52\nMads.of(madsdata::AbstractDict, resultdict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:56\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nresultdict::AbstractDict : result dictionary\nresultvec::Array{T,1} where T : result vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.paramarray2dict",
    "page": "Docstrings",
    "title": "Mads.paramarray2dict",
    "category": "function",
    "text": "Convert a parameter array to a parameter dictionary of arrays\n\nMethods:\n\nMads.paramarray2dict(madsdata::AbstractDict, array::Array) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMonteCarlo.jl:242\n\nArguments:\n\narray::Array : parameter array\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\na parameter dictionary of arrays\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.paramdict2array",
    "page": "Docstrings",
    "title": "Mads.paramdict2array",
    "category": "function",
    "text": "Convert a parameter dictionary of arrays to a parameter array\n\nMethods:\n\nMads.paramdict2array(dict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMonteCarlo.jl:261\n\nArguments:\n\ndict::AbstractDict : parameter dictionary of arrays\n\nReturns:\n\na parameter array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.parsemadsdata!",
    "page": "Docstrings",
    "title": "Mads.parsemadsdata!",
    "category": "function",
    "text": "Parse loaded MADS problem dictionary\n\nMethods:\n\nMads.parsemadsdata!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:161\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.parsenodenames",
    "page": "Docstrings",
    "title": "Mads.parsenodenames",
    "category": "function",
    "text": "Parse string with node names defined in SLURM\n\nMethods:\n\nMads.parsenodenames(nodenames::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:208\nMads.parsenodenames(nodenames::String, ntasks_per_node::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:208\n\nArguments:\n\nnodenames::String : string with node names defined in SLURM\nntasks_per_node::Integer : number of parallel tasks per node [default=1]\n\nReturns:\n\nvector with names of compute nodes (hosts)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.partialof",
    "page": "Docstrings",
    "title": "Mads.partialof",
    "category": "function",
    "text": "Compute the sum of squared residuals for observations that match a regular expression\n\nMethods:\n\nMads.partialof(madsdata::AbstractDict, resultdict::AbstractDict, regex::Regex) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:85\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nregex::Regex : regular expression\nresultdict::AbstractDict : result dictionary\n\nReturns:\n\nthe sum of squared residuals for observations that match the regular expression\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.pkgversion",
    "page": "Docstrings",
    "title": "Mads.pkgversion",
    "category": "function",
    "text": "Get package version\n\nMethods:\n\nMads.pkgversion(modulestr::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:473\n\nArguments:\n\nmodulestr::String\n\nReturns:\n\npackage version\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotgrid",
    "page": "Docstrings",
    "title": "Mads.plotgrid",
    "category": "function",
    "text": "Plot a 3D grid solution based on model predictions in array s, initial parameters, or user provided parameter values\n\nMethods:\n\nMads.plotgrid(madsdata::AbstractDict; addtitle, title, filename, format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlotPy.jl:56\nMads.plotgrid(madsdata::AbstractDict, s::Array{Float64,N} where N; addtitle, title, filename, format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlotPy.jl:5\nMads.plotgrid(madsdata::AbstractDict, parameters::AbstractDict; addtitle, title, filename, format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlotPy.jl:61\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparameters::AbstractDict : dictionary with model parameters\ns::Array{Float64,N} where N : model predictions array\n\nKeywords:\n\naddtitle : add plot title [default=true]\nfilename : output file name\nformat : output plot format (png, pdf, etc.)\ntitle : plot title\n\nExamples:\n\nMads.plotgrid(madsdata, s; addtitle=true, title=\"\", filename=\"\", format=\"\")\nMads.plotgrid(madsdata; addtitle=true, title=\"\", filename=\"\", format=\"\")\nMads.plotgrid(madsdata, parameters; addtitle=true, title=\"\", filename=\"\", format=\"\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotlocalsa",
    "page": "Docstrings",
    "title": "Mads.plotlocalsa",
    "category": "function",
    "text": "Plot local sensitivity analysis results\n\nMethods:\n\nMads.plotlocalsa(filenameroot::String; keyword, filename, format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:1246\n\nArguments:\n\nfilenameroot::String : problem file name root\n\nKeywords:\n\nfilename : output file name\nformat : output plot format (png, pdf, etc.)\nkeyword : keyword to be added in the filename root\n\nDumps:\n\nfilename : output plot file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotmadsproblem",
    "page": "Docstrings",
    "title": "Mads.plotmadsproblem",
    "category": "function",
    "text": "Plot contaminant sources and wells defined in MADS problem dictionary\n\nMethods:\n\nMads.plotmadsproblem(madsdata::AbstractDict; format, filename, keyword, hsize, vsize, gm) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:88\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nfilename : output file name\nformat : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\ngm\nhsize\nkeyword : to be added in the filename\nvsize\n\nDumps:\n\nplot of contaminant sources and wells\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotmass",
    "page": "Docstrings",
    "title": "Mads.plotmass",
    "category": "function",
    "text": "Plot injected/reduced contaminant mass\n\nMethods:\n\nMads.plotmass(lambda::Array{Float64,1}, mass_injected::Array{Float64,1}, mass_reduced::Array{Float64,1}, filename::String; format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasolPlot.jl:19\n\nArguments:\n\nfilename::String : output filename for the generated plot\nlambda::Array{Float64,1} : array with all the lambda values\nmass_injected::Array{Float64,1} : array with associated total injected mass\nmass_reduced::Array{Float64,1} : array with associated total reduced mass\n\nKeywords:\n\nformat : output plot format (png, pdf, etc.)\n\nDumps:\n\nimage file with name filename and in specified format\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotmatches",
    "page": "Docstrings",
    "title": "Mads.plotmatches",
    "category": "function",
    "text": "Plot the matches between model predictions and observations\n\nMethods:\n\nMads.plotmatches(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:168\nMads.plotmatches(madsdata::AbstractDict, rx::Regex; kw...) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:168\nMads.plotmatches(madsdata::AbstractDict, dict_in::AbstractDict; plotdata, filename, format, title, xtitle, ytitle, ymin, ymax, separate_files, hsize, vsize, linewidth, pointsize, obs_plot_dots, noise, dpi, colors, display, notitle) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:200\nMads.plotmatches(madsdata::AbstractDict, result::AbstractDict, rx::Regex; plotdata, filename, format, key2time, title, xtitle, ytitle, ymin, ymax, separate_files, hsize, vsize, linewidth, pointsize, obs_plot_dots, noise, dpi, colors, display, notitle) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:176\n\nArguments:\n\ndict_in::AbstractDict : dictionary with model parameters\nmadsdata::AbstractDict : MADS problem dictionary\nresult::AbstractDict : dictionary with model predictions\nrx::Regex : regular expression to filter the outputs\n\nKeywords:\n\ncolors : array with plot colors\ndisplay : display plots [default=false]\ndpi : graph resolution [default=Mads.imagedpi]\nfilename : output file name\nformat : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\nhsize : graph horizontal size [default=8Gadfly.inch]\nkey2time : user provided function to convert observation keys to observation times\nlinewidth : line width [default=2Gadfly.pt]\nnoise : random noise magnitude [default=0; no noise]\nnotitle\nobs_plot_dots : plot data as dots or line [default=true]\nplotdata : plot data (if false model predictions are ploted only) [default=true]\npointsize : data dot size [default=2Gadfly.pt]\nseparate_files : plot data for multiple wells separately [default=false]\ntitle : graph title\nvsize : graph vertical size [default=4Gadfly.inch]\nxtitle : x-axis title [default=\"Time\"]\nymax\nymin\nytitle : y-axis title [default=\"y\"]\n\nDumps:\n\nplot of the matches between model predictions and observations\n\nExamples:\n\nMads.plotmatches(madsdata; filename=\"\", format=\"\")\nMads.plotmatches(madsdata, dict_in; filename=\"\", format=\"\")\nMads.plotmatches(madsdata, result; filename=\"\", format=\"\")\nMads.plotmatches(madsdata, result, r\"NO3\"; filename=\"\", format=\"\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotobsSAresults",
    "page": "Docstrings",
    "title": "Mads.plotobsSAresults",
    "category": "function",
    "text": "Plot the sensitivity analysis results for the observations\n\nMethods:\n\nMads.plotobsSAresults(madsdata::AbstractDict, result::AbstractDict; filter, keyword, filename, format, debug, separate_files, xtitle, ytitle, linewidth, pointsize) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:582\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nresult::AbstractDict : sensitivity analysis results\n\nKeywords:\n\ndebug : [default=false]\nfilename : output file name\nfilter : string or regex to plot only observations containing filter\nformat : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\nkeyword : to be added in the auto-generated filename\nlinewidth : line width [default=2Gadfly.pt]\npointsize : point size [default=2Gadfly.pt]\nseparate_files : plot data for multiple wells separately [default=false]\nxtitle : x-axis title\nytitle : y-axis title\n\nDumps:\n\nplot of the sensitivity analysis results for the observations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotrobustnesscurves",
    "page": "Docstrings",
    "title": "Mads.plotrobustnesscurves",
    "category": "function",
    "text": "Plot BIG-DT robustness curves\n\nMethods:\n\nMads.plotrobustnesscurves(madsdata::AbstractDict, bigdtresults::Dict; filename, format, maxprob, maxhoriz) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsBayesInfoGapPlot.jl:20\n\nArguments:\n\nbigdtresults::Dict : BIG-DT results\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nfilename : output file name used to dump plots\nformat : output plot format (png, pdf, etc.)\nmaxhoriz : maximum horizon [default=Inf]\nmaxprob : maximum probability [default=1.0]\n\nDumps:\n\nimage file with name filename and in specified format\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotseries",
    "page": "Docstrings",
    "title": "Mads.plotseries",
    "category": "function",
    "text": "Create plots of data series\n\nMethods:\n\nMads.plotseries(X::AbstractArray) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:1127\nMads.plotseries(X::AbstractArray, filename::String; format, xtitle, ytitle, title, logx, logy, keytitle, name, names, combined, hsize, vsize, linewidth, pointsize, dpi, colors, opacity, xmin, xmax, ymin, ymax, xaxis, plotline, code, colorkey) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:1127\n\nArguments:\n\nX::AbstractArray : matrix with the series data\nfilename::String : output file name\n\nKeywords:\n\ncode\ncolorkey\ncolors : colors to use in plots\ncombined : combine plots [default=true]\ndpi : graph resolution [default=Mads.imagedpi]\nformat : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\nhsize : horizontal size [default=8Gadfly.inch]\nkeytitle\nlinewidth : width of the lines in plot  [default=2Gadfly.pt]\nlogx\nlogy\nname : series name [default=Sources]\nnames\nopacity\nplotline\npointsize\ntitle : plot title [default=Sources]\nvsize : vertical size [default=4Gadfly.inch]\nxaxis\nxmax\nxmin\nxtitle : x-axis title [default=X]\nymax\nymin\nytitle : y-axis title [default=Y]\n\nDumps:\n\nPlots of data series\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.plotwellSAresults",
    "page": "Docstrings",
    "title": "Mads.plotwellSAresults",
    "category": "function",
    "text": "Plot the sensitivity analysis results for all the wells in the MADS problem dictionary (wells class expected)\n\nMethods:\n\nMads.plotwellSAresults(madsdata::AbstractDict, result::AbstractDict; xtitle, ytitle, filename, format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:447\nMads.plotwellSAresults(madsdata::AbstractDict, result::AbstractDict, wellname::String; xtitle, ytitle, filename, format) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:458\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nresult::AbstractDict : sensitivity analysis results\nwellname::String : well name\n\nKeywords:\n\nfilename : output file name\nformat : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\nxtitle : x-axis title\nytitle : y-axis title\n\nDumps:\n\nPlot of the sensitivity analysis results for all the wells in the MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.printSAresults",
    "page": "Docstrings",
    "title": "Mads.printSAresults",
    "category": "function",
    "text": "Print sensitivity analysis results\n\nMethods:\n\nMads.printSAresults(madsdata::AbstractDict, results::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:925\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nresults::AbstractDict : dictionary with sensitivity analysis results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.printSAresults2",
    "page": "Docstrings",
    "title": "Mads.printSAresults2",
    "category": "function",
    "text": "Print sensitivity analysis results (method 2)\n\nMethods:\n\nMads.printSAresults2(madsdata::AbstractDict, results::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:1007\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nresults::AbstractDict : dictionary with sensitivity analysis results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.printerrormsg",
    "page": "Docstrings",
    "title": "Mads.printerrormsg",
    "category": "function",
    "text": "Print error message\n\nMethods:\n\nMads.printerrormsg(errmsg) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:410\n\nArguments:\n\nerrmsg : error message\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.printobservations",
    "page": "Docstrings",
    "title": "Mads.printobservations",
    "category": "function",
    "text": "Print (emit) observations in the MADS problem dictionary\n\nMethods:\n\nMads.printobservations(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:423\nMads.printobservations(madsdata::AbstractDict, io::IO) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:423\nMads.printobservations(madsdata::AbstractDict, filename::String; json) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:432\n\nArguments:\n\nfilename::String : output file name\nio::IO : output stream\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\njson\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.pull",
    "page": "Docstrings",
    "title": "Mads.pull",
    "category": "function",
    "text": "Pull (checkout) the latest version of Mads modules\n\nMethods:\n\nMads.pull(modulename::String; kw...) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:63\nMads.pull() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:63\n\nArguments:\n\nmodulename::String : module name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.push",
    "page": "Docstrings",
    "title": "Mads.push",
    "category": "function",
    "text": "Push the latest version of Mads modules in the default remote repository\n\nMethods:\n\nMads.push(modulename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:138\nMads.push() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:138\n\nArguments:\n\nmodulename::String : module name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.quietoff",
    "page": "Docstrings",
    "title": "Mads.quietoff",
    "category": "function",
    "text": "Make MADS not quiet\n\nMethods:\n\nMads.quietoff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:97\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.quieton",
    "page": "Docstrings",
    "title": "Mads.quieton",
    "category": "function",
    "text": "Make MADS quiet\n\nMethods:\n\nMads.quieton() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:88\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.readasciipredictions",
    "page": "Docstrings",
    "title": "Mads.readasciipredictions",
    "category": "function",
    "text": "Read MADS predictions from an ASCII file\n\nMethods:\n\nMads.readasciipredictions(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsASCII.jl:45\n\nArguments:\n\nfilename::String : ASCII file name\n\nReturns:\n\nMADS predictions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.readmodeloutput",
    "page": "Docstrings",
    "title": "Mads.readmodeloutput",
    "category": "function",
    "text": "Read model outputs saved for MADS\n\nMethods:\n\nMads.readmodeloutput(madsdata::AbstractDict; obskeys) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:741\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nobskeys : observation keys [default=getobskeys(madsdata)]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.readobservations",
    "page": "Docstrings",
    "title": "Mads.readobservations",
    "category": "function",
    "text": "Read observations\n\nMethods:\n\nMads.readobservations(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1083\nMads.readobservations(madsdata::AbstractDict, obskeys::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1083\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nobskeys::Array{T,1} where T : observation keys [default=getobskeys(madsdata)]\n\nReturns:\n\ndictionary with Mads observations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.readobservations_cmads",
    "page": "Docstrings",
    "title": "Mads.readobservations_cmads",
    "category": "function",
    "text": "Read observations using C MADS dynamic library\n\nMethods:\n\nMads.readobservations_cmads(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-old/MadsCMads.jl:15\n\nArguments:\n\nmadsdata::AbstractDict : Mads problem dictionary\n\nReturns:\n\nobservations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.readyamlpredictions",
    "page": "Docstrings",
    "title": "Mads.readyamlpredictions",
    "category": "function",
    "text": "Read MADS model predictions from a YAML file filename\n\nMethods:\n\nMads.readyamlpredictions(filename::String; julia) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsYAML.jl:137\n\nArguments:\n\nfilename::String : file name\n\nKeywords:\n\njulia : if true, use julia YAML library (if available); if false (default), use python YAML library (if available)\n\nReturns:\n\ndata in yaml input file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.recursivemkdir",
    "page": "Docstrings",
    "title": "Mads.recursivemkdir",
    "category": "function",
    "text": "Create directories recursively (if does not already exist)\n\nMethods:\n\nMads.recursivemkdir(s::String; filename) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1320\n\nArguments:\n\ns::String\n\nKeywords:\n\nfilename\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.recursivermdir",
    "page": "Docstrings",
    "title": "Mads.recursivermdir",
    "category": "function",
    "text": "Remove directories recursively\n\nMethods:\n\nMads.recursivermdir(s::String; filename) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1354\n\nArguments:\n\ns::String\n\nKeywords:\n\nfilename\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.regexs2obs",
    "page": "Docstrings",
    "title": "Mads.regexs2obs",
    "category": "function",
    "text": "Get observations for a set of regular expressions\n\nMethods:\n\nMads.regexs2obs(obsline::String, regexs::Array{Regex,1}, obsnames::Array{String,1}, getparamhere::Array{Bool,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:992\n\nArguments:\n\ngetparamhere::Array{Bool,1} : parameters\nobsline::String : observation line\nobsnames::Array{String,1} : observation names\nregexs::Array{Regex,1} : regular expressions\n\nReturns:\n\nobsdict : observations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.removesource!",
    "page": "Docstrings",
    "title": "Mads.removesource!",
    "category": "function",
    "text": "Remove a contamination source\n\nMethods:\n\nMads.removesource!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:51\nMads.removesource!(madsdata::AbstractDict, sourceid::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:51\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nsourceid::Int64 : source id [default=0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.removesourceparameters!",
    "page": "Docstrings",
    "title": "Mads.removesourceparameters!",
    "category": "function",
    "text": "Remove contaminant source parameters\n\nMethods:\n\nMads.removesourceparameters!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsAnasol.jl:136\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.required",
    "page": "Docstrings",
    "title": "Mads.required",
    "category": "function",
    "text": "Lists modules required by a module (Mads by default)\n\nMethods:\n\nMads.required(modulename::String, filtermodule::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:17\nMads.required(modulename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:17\nMads.required() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:17\n\nArguments:\n\nfiltermodule::String : filter module name\nmodulename::String : module name [default=\"Mads\"]\n\nReturns:\n\nfiltered modules\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.resetmodelruns",
    "page": "Docstrings",
    "title": "Mads.resetmodelruns",
    "category": "function",
    "text": "Reset the model runs count to be equal to zero\n\nMethods:\n\nMads.resetmodelruns() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:235\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.residuals",
    "page": "Docstrings",
    "title": "Mads.residuals",
    "category": "function",
    "text": "Compute residuals\n\nMethods:\n\nMads.residuals(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:33\nMads.residuals(madsdata::AbstractDict, resultvec::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:7\nMads.residuals(madsdata::AbstractDict, resultdict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsLevenbergMarquardt.jl:30\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nresultdict::AbstractDict : result dictionary\nresultvec::Array{T,1} where T : result vector\n\nReturns:\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.restartoff",
    "page": "Docstrings",
    "title": "Mads.restartoff",
    "category": "function",
    "text": "MADS restart off\n\nMethods:\n\nMads.restartoff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:69\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.restarton",
    "page": "Docstrings",
    "title": "Mads.restarton",
    "category": "function",
    "text": "MADS restart on\n\nMethods:\n\nMads.restarton() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:60\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.reweighsamples",
    "page": "Docstrings",
    "title": "Mads.reweighsamples",
    "category": "function",
    "text": "Reweigh samples using importance sampling – returns a vector of log-likelihoods after reweighing\n\nMethods:\n\nMads.reweighsamples(madsdata::AbstractDict, predictions::Array, oldllhoods::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:329\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\noldllhoods::Array{T,1} where T : the log likelihoods of the parameters in the old distribution\npredictions::Array : the model predictions for each of the samples\n\nReturns:\n\nvector of log-likelihoods after reweighing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rmdir",
    "page": "Docstrings",
    "title": "Mads.rmdir",
    "category": "function",
    "text": "Remove directory\n\nMethods:\n\nMads.rmdir(dir::String; path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1180\n\nArguments:\n\ndir::String : directory to be removed\n\nKeywords:\n\npath : path of the directory [default=current path]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rmfile",
    "page": "Docstrings",
    "title": "Mads.rmfile",
    "category": "function",
    "text": "Remove file\n\nMethods:\n\nMads.rmfile(filename::String; path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1196\n\nArguments:\n\nfilename::String : file to be removed\n\nKeywords:\n\npath : path of the file [default=current path]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rmfiles",
    "page": "Docstrings",
    "title": "Mads.rmfiles",
    "category": "function",
    "text": "Remove files\n\nMethods:\n\nMads.rmfile(filename::String; path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1196\n\nArguments:\n\nfilename::String\n\nKeywords:\n\npath : path of the file [default=current path]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rmfiles_ext",
    "page": "Docstrings",
    "title": "Mads.rmfiles_ext",
    "category": "function",
    "text": "Remove files with extension ext\n\nMethods:\n\nMads.rmfiles_ext(ext::String; path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1225\n\nArguments:\n\next::String : extension\n\nKeywords:\n\npath : path of the files to be removed [default=.]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rmfiles_root",
    "page": "Docstrings",
    "title": "Mads.rmfiles_root",
    "category": "function",
    "text": "Remove files with root root\n\nMethods:\n\nMads.rmfiles_root(root::String; path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1238\n\nArguments:\n\nroot::String : root\n\nKeywords:\n\npath : path of the files to be removed [default=.]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rosenbrock",
    "page": "Docstrings",
    "title": "Mads.rosenbrock",
    "category": "function",
    "text": "Rosenbrock test function\n\nMethods:\n\nMads.rosenbrock(x::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:43\n\nArguments:\n\nx::Array{T,1} where T : parameter vector\n\nReturns:\n\ntest result\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rosenbrock2_gradient_lm",
    "page": "Docstrings",
    "title": "Mads.rosenbrock2_gradient_lm",
    "category": "function",
    "text": "Parameter gradients of the Rosenbrock test function\n\nMethods:\n\nMads.rosenbrock2_gradient_lm(x::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:24\n\nArguments:\n\nx::Array{T,1} where T : parameter vector\n\nReturns:\n\nparameter gradients\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rosenbrock2_lm",
    "page": "Docstrings",
    "title": "Mads.rosenbrock2_lm",
    "category": "function",
    "text": "Rosenbrock test function (more difficult to solve)\n\nMethods:\n\nMads.rosenbrock2_lm(x::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:10\n\nArguments:\n\nx::Array{T,1} where T : parameter vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rosenbrock_gradient!",
    "page": "Docstrings",
    "title": "Mads.rosenbrock_gradient!",
    "category": "function",
    "text": "Parameter gradients of the Rosenbrock test function\n\nMethods:\n\nMads.rosenbrock_gradient!(x::Array{T,1} where T, grad::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:68\n\nArguments:\n\ngrad::Array{T,1} where T : gradient vector\nx::Array{T,1} where T : parameter vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rosenbrock_gradient_lm",
    "page": "Docstrings",
    "title": "Mads.rosenbrock_gradient_lm",
    "category": "function",
    "text": "Parameter gradients of the Rosenbrock test function for LM optimization (returns the gradients for the 2 components separately)\n\nMethods:\n\nMads.rosenbrock_gradient_lm(x::Array{T,1} where T; dx, center) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:85\n\nArguments:\n\nx::Array{T,1} where T : parameter vector\n\nKeywords:\n\ncenter : array with parameter observations at the center applied to compute numerical derivatives [default=Array{Float64}(undef, 0)]\ndx : apply parameter step to compute numerical derivatives [default=false]\n\nReturns:\n\nparameter gradients\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rosenbrock_hessian!",
    "page": "Docstrings",
    "title": "Mads.rosenbrock_hessian!",
    "category": "function",
    "text": "Parameter Hessian of the Rosenbrock test function\n\nMethods:\n\nMads.rosenbrock_hessian!(x::Array{T,1} where T, hess::Array{T,2} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:101\n\nArguments:\n\nhess::Array{T,2} where T : Hessian matrix\nx::Array{T,1} where T : parameter vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.rosenbrock_lm",
    "page": "Docstrings",
    "title": "Mads.rosenbrock_lm",
    "category": "function",
    "text": "Rosenbrock test function for LM optimization (returns the 2 components separately)\n\nMethods:\n\nMads.rosenbrock_lm(x::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsTestFunctions.jl:57\n\nArguments:\n\nx::Array{T,1} where T : parameter vector\n\nReturns:\n\ntest result\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.runcmd",
    "page": "Docstrings",
    "title": "Mads.runcmd",
    "category": "function",
    "text": "Run external command and pipe stdout and stderr\n\nMethods:\n\nMads.runcmd(cmdstring::String; quiet, pipe, waittime) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsExecute.jl:101\nMads.runcmd(cmd::Cmd; quiet, pipe, waittime) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsExecute.jl:42\n\nArguments:\n\ncmd::Cmd : command (as a julia command; e.g. `ls`)\ncmdstring::String : command (as a string; e.g. \"ls\")\n\nKeywords:\n\npipe : [default=false]\nquiet : [default=Mads.quiet]\nwaittime : wait time is second [default=Mads.executionwaittime]\n\nReturns:\n\ncommand output\ncommand error message\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.runremote",
    "page": "Docstrings",
    "title": "Mads.runremote",
    "category": "function",
    "text": "Run remote command on a series of servers\n\nMethods:\n\nMads.runremote(cmd::String, nodenames::Array{String,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:284\nMads.runremote(cmd::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:284\n\nArguments:\n\ncmd::String : remote command\nnodenames::Array{String,1} : names of machines/nodes [default=madsservers]\n\nReturns:\n\noutput of running remote command\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.saltelli",
    "page": "Docstrings",
    "title": "Mads.saltelli",
    "category": "function",
    "text": "Saltelli sensitivity analysis\n\nMethods:\n\nMads.saltelli(madsdata::AbstractDict; N, seed, restartdir, parallel, checkpointfrequency) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:642\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nN : number of samples [default=100]\ncheckpointfrequency : check point frequency [default=N]\nparallel : set to true if the model runs should be performed in parallel [default=false]\nrestartdir : directory where files will be stored containing model results for fast simulation restarts\nseed : random seed [default=0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.saltellibrute",
    "page": "Docstrings",
    "title": "Mads.saltellibrute",
    "category": "function",
    "text": "Saltelli sensitivity analysis (brute force)\n\nMethods:\n\nMads.saltellibrute(madsdata::AbstractDict; N, seed, restartdir) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:454\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nN : number of samples [default=1000]\nrestartdir : directory where files will be stored containing model results for fast simulation restarts\nseed : random seed [default=0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.saltellibruteparallel",
    "page": "Docstrings",
    "title": "Mads.saltellibruteparallel",
    "category": "function",
    "text": "Parallel version of saltellibrute\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.saltelliparallel",
    "page": "Docstrings",
    "title": "Mads.saltelliparallel",
    "category": "function",
    "text": "Parallel version of saltelli\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.sampling",
    "page": "Docstrings",
    "title": "Mads.sampling",
    "category": "function",
    "text": "Methods:\n\nMads.sampling(param::Array{T,1} where T, J::Array, numsamples::Number; seed, scale) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:278\n\nArguments:\n\nJ::Array : Jacobian matrix\nnumsamples::Number : Number of samples\nparam::Array{T,1} where T : Parameter vector\n\nKeywords:\n\nscale : data scaling [default=1]\nseed : random esee [default=0]\n\nReturns:\n\ngenerated samples (vector or array)\nvector of log-likelihoods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.savemadsfile",
    "page": "Docstrings",
    "title": "Mads.savemadsfile",
    "category": "function",
    "text": "Save MADS problem dictionary madsdata in MADS input file filename\n\nMethods:\n\nMads.savemadsfile(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:290\nMads.savemadsfile(madsdata::AbstractDict, filename::String; julia, observations_separate, filenameobs) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:290\nMads.savemadsfile(madsdata::AbstractDict, parameters::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:307\nMads.savemadsfile(madsdata::AbstractDict, parameters::AbstractDict, filename::String; julia, explicit, observations_separate) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:307\n\nArguments:\n\nfilename::String : input file name (e.g. input_file_name.mads)\nmadsdata::AbstractDict : MADS problem dictionary\nparameters::AbstractDict : Dictionary with parameters (optional)\n\nKeywords:\n\nexplicit : if true ignores MADS YAML file modifications and rereads the original input file [default=false]\nfilenameobs\njulia : if true use Julia JSON module to save [default=false]\nobservations_separate\n\nExample:\n\nMads.savemadsfile(madsdata)\nMads.savemadsfile(madsdata, \"test.mads\")\nMads.savemadsfile(madsdata, parameters, \"test.mads\")\nMads.savemadsfile(madsdata, parameters, \"test.mads\", explicit=true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.savemcmcresults",
    "page": "Docstrings",
    "title": "Mads.savemcmcresults",
    "category": "function",
    "text": "Save MCMC chain in a file\n\nMethods:\n\nMads.savemcmcresults(chain::Array, filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsMonteCarlo.jl:143\n\nArguments:\n\nchain::Array : MCMC chain\nfilename::String : file name\n\nDumps:\n\nthe file containing MCMC chain\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.savesaltellirestart",
    "page": "Docstrings",
    "title": "Mads.savesaltellirestart",
    "category": "function",
    "text": "Save Saltelli sensitivity analysis results for fast simulation restarts\n\nMethods:\n\nMads.savesaltellirestart(evalmat::Array, matname::String, restartdir::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:623\n\nArguments:\n\nevalmat::Array : saved array\nmatname::String : matrix (array) name (defines the name of the loaded file)\nrestartdir::String : directory where files will be stored containing model results for fast simulation restarts\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.scatterplotsamples",
    "page": "Docstrings",
    "title": "Mads.scatterplotsamples",
    "category": "function",
    "text": "Create histogram/scatter plots of model parameter samples\n\nMethods:\n\nMads.scatterplotsamples(madsdata::AbstractDict, samples::Array{T,2} where T, filename::String; format, pointsize) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:412\n\nArguments:\n\nfilename::String : output file name\nmadsdata::AbstractDict : MADS problem dictionary\nsamples::Array{T,2} where T : matrix with model parameters\n\nKeywords:\n\nformat : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\npointsize : point size [default=0.9Gadfly.mm]\n\nDumps:\n\nhistogram/scatter plots of model parameter samples\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.searchdir",
    "page": "Docstrings",
    "title": "Mads.searchdir",
    "category": "function",
    "text": "Get files in the current directory or in a directory defined by path matching pattern key which can be a string or regular expression\n\nMethods:\n\nMads.searchdir(key::String; path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:781\nMads.searchdir(key::Regex; path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:780\n\nArguments:\n\nkey::Regex : matching pattern for Mads input files (string or regular expression accepted)\nkey::String : matching pattern for Mads input files (string or regular expression accepted)\n\nKeywords:\n\npath : search directory for the mads input files [default=.]\n\nReturns:\n\nfilename : an array with file names matching the pattern in the specified directory\n\nExamples:\n\n- `Mads.searchdir(\"a\")`\n- `Mads.searchdir(r\"[A-B]\"; path = \".\")`\n- `Mads.searchdir(r\".*.cov\"; path = \".\")`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.set_nprocs_per_task",
    "page": "Docstrings",
    "title": "Mads.set_nprocs_per_task",
    "category": "function",
    "text": "Set number of processors needed for each parallel task at each node\n\nMethods:\n\nMads.set_nprocs_per_task() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:51\nMads.set_nprocs_per_task(local_nprocs_per_task::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:51\n\nArguments:\n\nlocal_nprocs_per_task::Integer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setallparamsoff!",
    "page": "Docstrings",
    "title": "Mads.setallparamsoff!",
    "category": "function",
    "text": "Set all parameters OFF\n\nMethods:\n\nMads.setallparamsoff!(madsdata::AbstractDict; filter) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:474\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nfilter : parameter filter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setallparamson!",
    "page": "Docstrings",
    "title": "Mads.setallparamson!",
    "category": "function",
    "text": "Set all parameters ON\n\nMethods:\n\nMads.setallparamson!(madsdata::AbstractDict; filter) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:460\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\nKeywords:\n\nfilter : parameter filter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setdebuglevel",
    "page": "Docstrings",
    "title": "Mads.setdebuglevel",
    "category": "function",
    "text": "Set MADS debug level\n\nMethods:\n\nMads.setdebuglevel(level::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:206\n\nArguments:\n\nlevel::Int64 : debug level\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setdefaultplotformat",
    "page": "Docstrings",
    "title": "Mads.setdefaultplotformat",
    "category": "function",
    "text": "Set the default plot format (SVG is the default format)\n\nMethods:\n\nMads.setdefaultplotformat(format::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:21\n\nArguments:\n\nformat::String : plot format\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setdir",
    "page": "Docstrings",
    "title": "Mads.setdir",
    "category": "function",
    "text": "Set the working directory (for parallel environments)\n\nMethods:\n\nMads.setdir() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:254\nMads.setdir(dir) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:249\n\nArguments:\n\ndir : directory\n\nExample:\n\n@everywhere Mads.setdir()\n@everywhere Mads.setdir(\"/home/monty\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setdpi",
    "page": "Docstrings",
    "title": "Mads.setdpi",
    "category": "function",
    "text": "Set image dpi\n\nMethods:\n\nMads.setdpi(dpi::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:160\n\nArguments:\n\ndpi::Integer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setexecutionwaittime",
    "page": "Docstrings",
    "title": "Mads.setexecutionwaittime",
    "category": "function",
    "text": "Set maximum execution wait time for forward model runs in seconds\n\nMethods:\n\nMads.setexecutionwaittime(waitime::Float64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:226\n\nArguments:\n\nwaitime::Float64 : maximum execution wait time for forward model runs in seconds\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setmadsinputfile",
    "page": "Docstrings",
    "title": "Mads.setmadsinputfile",
    "category": "function",
    "text": "Set a default MADS input file\n\nMethods:\n\nMads.setmadsinputfile(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:367\n\nArguments:\n\nfilename::String : input file name (e.g. input_file_name.mads)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setmadsservers",
    "page": "Docstrings",
    "title": "Mads.setmadsservers",
    "category": "function",
    "text": "Generate a list of Mads servers\n\nMethods:\n\nMads.setmadsservers(first::Int64, last::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:339\nMads.setmadsservers(first::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:339\nMads.setmadsservers() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:339\n\nArguments:\n\nfirst::Int64 : first [default=0]\nlast::Int64 : last [default=18]\n\nReturns\n\narray string of mads servers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setmodelinputs",
    "page": "Docstrings",
    "title": "Mads.setmodelinputs",
    "category": "function",
    "text": "Set model input files; delete files where model output should be saved for MADS\n\nMethods:\n\nMads.setmodelinputs(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:662\nMads.setmodelinputs(madsdata::AbstractDict, parameters::AbstractDict; path) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:662\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparameters::AbstractDict : parameters\n\nKeywords:\n\npath : path for the files [default=.]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setnewmadsfilename",
    "page": "Docstrings",
    "title": "Mads.setnewmadsfilename",
    "category": "function",
    "text": "Set new mads file name\n\nMethods:\n\nMads.setnewmadsfilename(filename::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:521\nMads.setnewmadsfilename(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:518\n\nArguments:\n\nfilename::String : file name\nmadsdata::AbstractDict : MADS problem dictionary\n\nReturns:\n\nnew file name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setobservationtargets!",
    "page": "Docstrings",
    "title": "Mads.setobservationtargets!",
    "category": "function",
    "text": "Set observations (calibration targets) in the MADS problem dictionary based on a predictions dictionary\n\nMethods:\n\nMads.setobservationtargets!(madsdata::AbstractDict, predictions::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:528\n\nArguments:\n\nmadsdata::AbstractDict : Mads problem dictionary\npredictions::AbstractDict : dictionary with model predictions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setobstime!",
    "page": "Docstrings",
    "title": "Mads.setobstime!",
    "category": "function",
    "text": "Set observation time based on the observation name in the MADS problem dictionary\n\nMethods:\n\nMads.setobstime!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:253\nMads.setobstime!(madsdata::AbstractDict, separator::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:253\nMads.setobstime!(madsdata::AbstractDict, rx::Regex) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:264\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nrx::Regex : regular expression to match\nseparator::String : separator [default=_]\n\nExamples:\n\nMads.setobstime!(madsdata, \"_t\")\nMads.setobstime!(madsdata, r\"[A-x]*_t([0-9,.]+)\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setobsweights!",
    "page": "Docstrings",
    "title": "Mads.setobsweights!",
    "category": "function",
    "text": "Set observation weights in the MADS problem dictionary\n\nMethods:\n\nMads.setobsweights!(madsdata::AbstractDict, value::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:299\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nvalue::Number : value for observation weights\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setparamoff!",
    "page": "Docstrings",
    "title": "Mads.setparamoff!",
    "category": "function",
    "text": "Set a specific parameter with a key parameterkey OFF\n\nMethods:\n\nMads.setparamoff!(madsdata::AbstractDict, parameterkey::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:499\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparameterkey::String : parameter key\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setparamon!",
    "page": "Docstrings",
    "title": "Mads.setparamon!",
    "category": "function",
    "text": "Set a specific parameter with a key parameterkey ON\n\nMethods:\n\nMads.setparamon!(madsdata::AbstractDict, parameterkey::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:488\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparameterkey::String : parameter key\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setparamsdistnormal!",
    "page": "Docstrings",
    "title": "Mads.setparamsdistnormal!",
    "category": "function",
    "text": "Set normal parameter distributions for all the model parameters in the MADS problem dictionary\n\nMethods:\n\nMads.setparamsdistnormal!(madsdata::AbstractDict, mean::Array{T,1} where T, stddev::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:511\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nmean::Array{T,1} where T : array with the mean values\nstddev::Array{T,1} where T : array with the standard deviation values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setparamsdistuniform!",
    "page": "Docstrings",
    "title": "Mads.setparamsdistuniform!",
    "category": "function",
    "text": "Set uniform parameter distributions for all the model parameters in the MADS problem dictionary\n\nMethods:\n\nMads.setparamsdistuniform!(madsdata::AbstractDict, min::Array{T,1} where T, max::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:526\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nmax::Array{T,1} where T : array with the maximum values\nmin::Array{T,1} where T : array with the minimum values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setparamsinit!",
    "page": "Docstrings",
    "title": "Mads.setparamsinit!",
    "category": "function",
    "text": "Set initial optimized parameter guesses in the MADS problem dictionary\n\nMethods:\n\nMads.setparamsinit!(madsdata::AbstractDict, paramdict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:324\nMads.setparamsinit!(madsdata::AbstractDict, paramdict::AbstractDict, idx::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:324\n\nArguments:\n\nidx::Int64 : index of the dictionary of arrays with initial model parameter values\nmadsdata::AbstractDict : MADS problem dictionary\nparamdict::AbstractDict : dictionary with initial model parameter values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setplotfileformat",
    "page": "Docstrings",
    "title": "Mads.setplotfileformat",
    "category": "function",
    "text": "Set image file format based on the filename extension, or sets the filename extension based on the requested format. The default format is SVG. PNG, PDF, ESP, and PS are also supported.\n\nMethods:\n\nMads.setplotfileformat(filename::String, format::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:50\n\nArguments:\n\nfilename::String : output file name\nformat::String : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\n\nReturns:\n\noutput file name\noutput plot format (png, pdf, etc.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setprocs",
    "page": "Docstrings",
    "title": "Mads.setprocs",
    "category": "function",
    "text": "Set the available processors based on environmental variables (supports SLURM only at the moment)\n\nMethods:\n\nMads.setprocs(; ntasks_per_node, nprocs_per_task, nodenames, mads_servers, test, quiet, veryquiet, dir, exename) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:50\nMads.setprocs(np::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:47\nMads.setprocs(np::Integer, nt::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsParallel.jl:34\n\nArguments:\n\nnp::Integer : number of processors [default=1]\nnt::Integer : number of threads[default=1]\n\nKeywords:\n\ndir : common directory shared by all the jobs\nexename : location of the julia executable (the same version of julia is needed on all the workers)\nmads_servers : if true use MADS servers (LANL only) [default=false]\nnodenames : array with names of machines/nodes to be invoked\nnprocs_per_task : number of processors needed for each parallel task at each node [default=Mads.nprocs_per_task]\nntasks_per_node : number of parallel tasks per node [default=0]\nquiet : suppress output [default=Mads.quiet]\ntest : test the servers and connect to each one ones at a time [default=false]\nveryquiet\n\nReturns:\n\nvector with names of compute nodes (hosts)\n\nExample:\n\nMads.setprocs()\nMads.setprocs(4)\nMads.setprocs(4, 8)\nMads.setprocs(ntasks_per_node=4)\nMads.setprocs(ntasks_per_node=32, mads_servers=true)\nMads.setprocs(ntasks_per_node=64, nodenames=madsservers)\nMads.setprocs(ntasks_per_node=64, nodenames=[\"madsmax\", \"madszem\"])\nMads.setprocs(ntasks_per_node=64, nodenames=\"wc[096-157,160,175]\")\nMads.setprocs(ntasks_per_node=64, mads_servers=true, exename=\"/home/monty/bin/julia\", dir=\"/home/monty\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setseed",
    "page": "Docstrings",
    "title": "Mads.setseed",
    "category": "function",
    "text": "Set / get current random seed. seed < 0 gets seed, anything else sets it.\n\nMethods:\n\nMads.setseed() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:445\nMads.setseed(seed::Integer) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:445\nMads.setseed(seed::Integer, quiet::Bool) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:445\n\nArguments:\n\nquiet::Bool : [default=true]\nseed::Integer : random seed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setsindx",
    "page": "Docstrings",
    "title": "Mads.setsindx",
    "category": "function",
    "text": "Set sin-space dx\n\nMethods:\n\nMads.setsindx(sindx::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:380\n\nArguments:\n\nsindx::Number\n\nReturns:\n\nnothing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setsindx!",
    "page": "Docstrings",
    "title": "Mads.setsindx!",
    "category": "function",
    "text": "Set sin-space dx\n\nMethods:\n\nMads.setsindx!(madsdata::AbstractDict, sindx::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:363\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nsindx::Number : sin-space dx value\n\nReturns:\n\nnothing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setsourceinit!",
    "page": "Docstrings",
    "title": "Mads.setsourceinit!",
    "category": "function",
    "text": "Set initial optimized parameter guesses in the MADS problem dictionary for the Source class\n\nMethods:\n\nMads.setparamsinit!(madsdata::AbstractDict, paramdict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:324\nMads.setparamsinit!(madsdata::AbstractDict, paramdict::AbstractDict, idx::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:324\n\nArguments:\n\nidx::Int64 : index of the dictionary of arrays with initial model parameter values\nmadsdata::AbstractDict : MADS problem dictionary\nparamdict::AbstractDict : dictionary with initial model parameter values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.settarget!",
    "page": "Docstrings",
    "title": "Mads.settarget!",
    "category": "function",
    "text": "Set observation target\n\nMethods:\n\nMads.settarget!(o::AbstractDict, target::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:243\n\nArguments:\n\no::AbstractDict : observation data\ntarget::Number : observation target\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.settime!",
    "page": "Docstrings",
    "title": "Mads.settime!",
    "category": "function",
    "text": "Set observation time\n\nMethods:\n\nMads.settime!(o::AbstractDict, time::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:165\n\nArguments:\n\no::AbstractDict : observation data\ntime::Number : observation time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setverbositylevel",
    "page": "Docstrings",
    "title": "Mads.setverbositylevel",
    "category": "function",
    "text": "Set MADS verbosity level\n\nMethods:\n\nMads.setverbositylevel(level::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:216\n\nArguments:\n\nlevel::Int64 : debug level\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setweight!",
    "page": "Docstrings",
    "title": "Mads.setweight!",
    "category": "function",
    "text": "Set observation weight\n\nMethods:\n\nMads.setweight!(o::AbstractDict, weight::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:204\n\nArguments:\n\no::AbstractDict : observation data\nweight::Number : observation weight\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.setwellweights!",
    "page": "Docstrings",
    "title": "Mads.setwellweights!",
    "category": "function",
    "text": "Set well weights in the MADS problem dictionary\n\nMethods:\n\nMads.setwellweights!(madsdata::AbstractDict, value::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:344\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nvalue::Number : value for well weights\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.showallparameters",
    "page": "Docstrings",
    "title": "Mads.showallparameters",
    "category": "function",
    "text": "Show all parameters in the MADS problem dictionary\n\nMethods:\n\nMads.showallparameters(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:610\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.showobservations",
    "page": "Docstrings",
    "title": "Mads.showobservations",
    "category": "function",
    "text": "Show observations in the MADS problem dictionary\n\nMethods:\n\nMads.showobservations(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:403\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.showparameters",
    "page": "Docstrings",
    "title": "Mads.showparameters",
    "category": "function",
    "text": "Show parameters in the MADS problem dictionary\n\nMethods:\n\nMads.showparameters(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsParameters.jl:574\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.sinetransform",
    "page": "Docstrings",
    "title": "Mads.sinetransform",
    "category": "function",
    "text": "Sine transformation of model parameters\n\nMethods:\n\nMads.sinetransform(madsdata::AbstractDict, params::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSineTransformations.jl:36\nMads.sinetransform(sineparams::Array{T,1} where T, lowerbounds::Array{T,1} where T, upperbounds::Array{T,1} where T, indexlogtransformed::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSineTransformations.jl:46\n\nArguments:\n\nindexlogtransformed::Array{T,1} where T : index vector of log-transformed parameters\nlowerbounds::Array{T,1} where T : lower bounds\nmadsdata::AbstractDict : MADS problem dictionary\nparams::Array{T,1} where T\nsineparams::Array{T,1} where T : model parameters\nupperbounds::Array{T,1} where T : upper bounds\n\nReturns:\n\nSine transformation of model parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.sinetransformfunction",
    "page": "Docstrings",
    "title": "Mads.sinetransformfunction",
    "category": "function",
    "text": "Sine transformation of a function\n\nMethods:\n\nMads.sinetransformfunction(f::Function, lowerbounds::Array{T,1} where T, upperbounds::Array{T,1} where T, indexlogtransformed::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSineTransformations.jl:80\n\nArguments:\n\nf::Function : function\nindexlogtransformed::Array{T,1} where T : index vector of log-transformed parameters\nlowerbounds::Array{T,1} where T : lower bounds\nupperbounds::Array{T,1} where T : upper bounds\n\nReturns:\n\nSine transformation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.sinetransformgradient",
    "page": "Docstrings",
    "title": "Mads.sinetransformgradient",
    "category": "function",
    "text": "Sine transformation of a gradient function\n\nMethods:\n\nMads.sinetransformgradient(g::Function, lowerbounds::Array{T,1} where T, upperbounds::Array{T,1} where T, indexlogtransformed::Array{T,1} where T; sindx) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSineTransformations.jl:101\n\nArguments:\n\ng::Function : gradient function\nindexlogtransformed::Array{T,1} where T : index vector of log-transformed parameters\nlowerbounds::Array{T,1} where T : vector with parameter lower bounds\nupperbounds::Array{T,1} where T : vector with parameter upper bounds\n\nKeywords:\n\nsindx : sin-space parameter step applied to compute numerical derivatives [default=0.1]\n\nReturns:\n\nSine transformation of a gradient function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.spaghettiplot",
    "page": "Docstrings",
    "title": "Mads.spaghettiplot",
    "category": "function",
    "text": "Generate a combined spaghetti plot for the selected (type != null) model parameter\n\nMethods:\n\nMads.spaghettiplot(madsdata::AbstractDict, number_of_samples::Integer; kw...) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:896\nMads.spaghettiplot(madsdata::AbstractDict, dictarray::AbstractDict; seed, kw...) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:900\nMads.spaghettiplot(madsdata::AbstractDict, array::Array; plotdata, filename, keyword, format, xtitle, ytitle, yfit, obs_plot_dots, linewidth, pointsize, grayscale, xmin, xmax, ymin, ymax) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:937\n\nArguments:\n\narray::Array : data arrays to be plotted\ndictarray::AbstractDict : dictionary array containing the data arrays to be plotted\nmadsdata::AbstractDict : MADS problem dictionary\nnumber_of_samples::Integer : number of samples\n\nKeywords:\n\nfilename : output file name used to output the produced plots\nformat : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\ngrayscale\nkeyword : keyword to be added in the file name used to output the produced plots (if filename is not defined)\nlinewidth : width of the lines in plot [default=2Gadfly.pt]\nobs_plot_dots : plot observation as dots (true [default] or false)\nplotdata : plot data (if false model predictions are plotted only) [default=true]\npointsize : size of the markers in plot [default=2Gadfly.pt]\nseed : random seed [default=0]\nxmax\nxmin\nxtitle : x axis title [default=X]\nyfit : fit vertical axis range [default=false]\nymax\nymin\nytitle : y axis title [default=Y]\n\nDumps:\n\nImage file with a spaghetti plot (<mads_rootname>-<keyword>-<number_of_samples>-spaghetti.<default_image_extension>)\n\nExample:\n\nMads.spaghettiplot(madsdata, dictarray; filename=\"\", keyword = \"\", format=\"\", xtitle=\"X\", ytitle=\"Y\", obs_plot_dots=true)\nMads.spaghettiplot(madsdata, array; filename=\"\", keyword = \"\", format=\"\", xtitle=\"X\", ytitle=\"Y\", obs_plot_dots=true)\nMads.spaghettiplot(madsdata, number_of_samples; filename=\"\", keyword = \"\", format=\"\", xtitle=\"X\", ytitle=\"Y\", obs_plot_dots=true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.spaghettiplots",
    "page": "Docstrings",
    "title": "Mads.spaghettiplots",
    "category": "function",
    "text": "Generate separate spaghetti plots for each selected (type != null) model parameter\n\nMethods:\n\nMads.spaghettiplots(madsdata::AbstractDict, number_of_samples::Integer; seed, kw...) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:737\nMads.spaghettiplots(madsdata::AbstractDict, paramdictarray::OrderedCollections.OrderedDict; format, keyword, xtitle, ytitle, obs_plot_dots, seed, linewidth, pointsize, grayscale) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsPlot.jl:742\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nnumber_of_samples::Integer : number of samples\nparamdictarray::OrderedCollections.OrderedDict : parameter dictionary containing the data arrays to be plotted\n\nKeywords:\n\nformat : output plot format (png, pdf, etc.) [default=Mads.graphbackend]\ngrayscale\nkeyword : keyword to be added in the file name used to output the produced plots\nlinewidth : width of the lines on the plot [default=2Gadfly.pt]\nobs_plot_dots : plot observation as dots (true (default) or false)\npointsize : size of the markers on the plot [default=2Gadfly.pt]\nseed : random seed [default=0]\nxtitle : x axis title [default=X]\nytitle : y axis title [default=Y]\n\nDumps:\n\nA series of image files with spaghetti plots for each selected (type != null) model parameter (<mads_rootname>-<keyword>-<param_key>-<number_of_samples>-spaghetti.<default_image_extension>)\n\nExample:\n\nMads.spaghettiplots(madsdata, paramdictarray; format=\"\", keyword=\"\", xtitle=\"X\", ytitle=\"Y\", obs_plot_dots=true)\nMads.spaghettiplots(madsdata, number_of_samples; format=\"\", keyword=\"\", xtitle=\"X\", ytitle=\"Y\", obs_plot_dots=true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.sphericalcov",
    "page": "Docstrings",
    "title": "Mads.sphericalcov",
    "category": "function",
    "text": "Spherical spatial covariance function\n\nMethods:\n\nMads.sphericalcov(h::Number, maxcov::Number, scale::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:45\n\nArguments:\n\nh::Number : separation distance\nmaxcov::Number : max covariance\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.sphericalvariogram",
    "page": "Docstrings",
    "title": "Mads.sphericalvariogram",
    "category": "function",
    "text": "Spherical variogram\n\nMethods:\n\nMads.sphericalvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsKriging.jl:61\n\nArguments:\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nSpherical variogram\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.sprintf",
    "page": "Docstrings",
    "title": "Mads.sprintf",
    "category": "function",
    "text": "Convert @Printf.sprintf macro into sprintf function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.status",
    "page": "Docstrings",
    "title": "Mads.status",
    "category": "function",
    "text": "Status of Mads modules\n\nMethods:\n\nMads.status(madsmodule::String; git, gitmore) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:257\nMads.status(; git, gitmore) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:252\n\nArguments:\n\nmadsmodule::String : mads module\n\nKeywords:\n\ngit : use git [default=true or Mads.madsgit]\ngitmore : use even more git [default=false]\n\nReturns:\n\ntrue or false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.stderrcaptureoff",
    "page": "Docstrings",
    "title": "Mads.stderrcaptureoff",
    "category": "function",
    "text": "Restore stderr\n\nMethods:\n\nMads.stderrcaptureoff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCapture.jl:140\n\nReturns:\n\nstandered error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.stderrcaptureon",
    "page": "Docstrings",
    "title": "Mads.stderrcaptureon",
    "category": "function",
    "text": "Redirect stderr to a reader\n\nMethods:\n\nMads.stderrcaptureon() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCapture.jl:121\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.stdoutcaptureoff",
    "page": "Docstrings",
    "title": "Mads.stdoutcaptureoff",
    "category": "function",
    "text": "Restore stdout\n\nMethods:\n\nMads.stdoutcaptureoff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCapture.jl:106\n\nReturns:\n\nstandered output\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.stdoutcaptureon",
    "page": "Docstrings",
    "title": "Mads.stdoutcaptureon",
    "category": "function",
    "text": "Redirect stdout to a reader\n\nMethods:\n\nMads.stdoutcaptureon() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCapture.jl:87\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.stdouterrcaptureoff",
    "page": "Docstrings",
    "title": "Mads.stdouterrcaptureoff",
    "category": "function",
    "text": "Restore stdout & stderr\n\nMethods:\n\nMads.stdouterrcaptureoff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCapture.jl:171\n\nReturns:\n\nstandered output amd standered error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.stdouterrcaptureon",
    "page": "Docstrings",
    "title": "Mads.stdouterrcaptureon",
    "category": "function",
    "text": "Redirect stdout & stderr to readers\n\nMethods:\n\nMads.stdouterrcaptureon() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsCapture.jl:155\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.svrdump",
    "page": "Docstrings",
    "title": "Mads.svrdump",
    "category": "function",
    "text": "Dump SVR models in files\n\nMethods:\n\nMads.svrdump(svrmodel::Array{SVR.svmmodel,1}, rootname::String, numberofsamples::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:141\n\nArguments:\n\nnumberofsamples::Int64 : number of samples\nrootname::String : root name\nsvrmodel::Array{SVR.svmmodel,1} : array of SVR models\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.svrfree",
    "page": "Docstrings",
    "title": "Mads.svrfree",
    "category": "function",
    "text": "Free SVR\n\nMethods:\n\nMads.svrfree(svrmodel::Array{SVR.svmmodel,1}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:123\n\nArguments:\n\nsvrmodel::Array{SVR.svmmodel,1} : array of SVR models\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.svrload",
    "page": "Docstrings",
    "title": "Mads.svrload",
    "category": "function",
    "text": "Load SVR models from files\n\nMethods:\n\nMads.svrload(npred::Int64, rootname::String, numberofsamples::Int64) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:164\n\nArguments:\n\nnpred::Int64 : number of model predictions\nnumberofsamples::Int64 : number of samples\nrootname::String : root name\n\nReturns:\n\nArray of SVR models for each model prediction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.svrpredict",
    "page": "Docstrings",
    "title": "Mads.svrpredict",
    "category": "function",
    "text": "Predict SVR\n\nMethods:\n\nMads.svrpredict(svrmodel::Array{SVR.svmmodel,1}, paramarray::Array{Float64,2}) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:96\n\nArguments:\n\nparamarray::Array{Float64,2} : parameter array\nsvrmodel::Array{SVR.svmmodel,1} : array of SVR models\n\nReturns:\n\nSVR predicted observations (dependent variables) for a given set of parameters (independent variables)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.svrtrain",
    "page": "Docstrings",
    "title": "Mads.svrtrain",
    "category": "function",
    "text": "Train SVR\n\nMethods:\n\nMads.svrtrain(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:39\nMads.svrtrain(madsdata::AbstractDict, paramarray::Array{Float64,2}; check, savesvr, addminmax, svm_type, kernel_type, degree, gamma, coef0, C, nu, cache_size, eps, shrinking, probability, verbose, tol) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:6\nMads.svrtrain(madsdata::AbstractDict, numberofsamples::Integer; addminmax, kw...) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSVR.jl:39\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nnumberofsamples::Integer : number of random samples in the training set [default=100]\nparamarray::Array{Float64,2}\n\nKeywords:\n\nC : cost; penalty parameter of the error term [default=1000.0]\naddminmax : add parameter minimum / maximum range values in the training set [default=true]\ncache_size : size of the kernel cache [default=100.0]\ncheck : check SVR performance [default=false]\ncoef0 : independent term in kernel function; important only in POLY and  SIGMOND kernel types\n\n[default=0]\n\ndegree : degree of the polynomial kernel [default=3]\neps : epsilon in the EPSILON_SVR model; defines an epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value [default=0.001]\ngamma : coefficient for RBF, POLY and SIGMOND kernel types [default=1/numberofsamples]\nkernel_type : kernel type[default=SVR.RBF]\nnu : upper bound on the fraction of training errors / lower bound of the fraction of support vectors; acceptable range (0, 1]; applied if NU_SVR model [default=0.5]\nprobability : train to estimate probabilities [default=false]\nsavesvr : save SVR models [default=false]\nshrinking : apply shrinking heuristic [default=true]\nsvm_type : SVM type [default=SVR.EPSILON_SVR]\ntol : tolerance of termination criterion [default=0.001]\nverbose : verbose output [default=false]\n\nReturns:\n\nArray of SVR models\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.symlinkdir",
    "page": "Docstrings",
    "title": "Mads.symlinkdir",
    "category": "function",
    "text": "Create a symbolic link of a file filename in a directory dirtarget\n\nMethods:\n\nMads.symlinkdir(filename::String, dirtarget::String, dirsource::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1166\n\nArguments:\n\ndirsource::String\ndirtarget::String : target directory\nfilename::String : file name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.symlinkdirfiles",
    "page": "Docstrings",
    "title": "Mads.symlinkdirfiles",
    "category": "function",
    "text": "Create a symbolic link of all the files in a directory dirsource in a directory dirtarget\n\nMethods:\n\nMads.symlinkdirfiles(dirsource::String, dirtarget::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:1148\n\nArguments:\n\ndirsource::String : source directory\ndirtarget::String : target directory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.tag",
    "page": "Docstrings",
    "title": "Mads.tag",
    "category": "function",
    "text": "Tag Mads modules with a default argument :patch\n\nMethods:\n\nMads.tag(madsmodule::String, versionsym::Symbol) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:326\nMads.tag(madsmodule::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:326\nMads.tag(versionsym::Symbol) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:321\nMads.tag() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:321\n\nArguments:\n\nmadsmodule::String : mads module name\nversionsym::Symbol : version symbol [default=:patch]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.test",
    "page": "Docstrings",
    "title": "Mads.test",
    "category": "function",
    "text": "Perform Mads tests (the tests will be in parallel if processors are defined; tests use the current Mads version in the workspace; reload(\"Mads.jl\") if needed)\n\nMethods:\n\nMads.test(testname::String; madstest) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsTest.jl:40\nMads.test() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsTest.jl:40\n\nArguments:\n\ntestname::String : name of the test to execute; module or example\n\nKeywords:\n\nmadstest : test Mads [default=true]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.testj",
    "page": "Docstrings",
    "title": "Mads.testj",
    "category": "function",
    "text": "Execute Mads tests using Julia Pkg.test (the default Pkg.test in Julia is executed in serial)\n\nMethods:\n\nMads.testj(coverage::Bool) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsTest.jl:11\nMads.testj() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsTest.jl:11\n\nArguments:\n\ncoverage::Bool : [default=false]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.transposematrix",
    "page": "Docstrings",
    "title": "Mads.transposematrix",
    "category": "function",
    "text": "Transpose non-numeric matrix\n\nMethods:\n\nMads.transposematrix(a::Array{T,2} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:400\n\nArguments:\n\na::Array{T,2} where T : matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.transposevector",
    "page": "Docstrings",
    "title": "Mads.transposevector",
    "category": "function",
    "text": "Transpose non-numeric vector\n\nMethods:\n\nMads.transposevector(a::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:390\n\nArguments:\n\na::Array{T,1} where T : vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.untag",
    "page": "Docstrings",
    "title": "Mads.untag",
    "category": "function",
    "text": "Untag specific version\n\nMethods:\n\nMads.untag(madsmodule::String, version::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src-interactive/MadsPublish.jl:361\n\nArguments:\n\nmadsmodule::String : mads module name\nversion::String : version\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.vectoroff",
    "page": "Docstrings",
    "title": "Mads.vectoroff",
    "category": "function",
    "text": "MADS vector calls off\n\nMethods:\n\nMads.vectoroff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:42\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.vectoron",
    "page": "Docstrings",
    "title": "Mads.vectoron",
    "category": "function",
    "text": "MADS vector calls on\n\nMethods:\n\nMads.vectoron() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:33\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.veryquietoff",
    "page": "Docstrings",
    "title": "Mads.veryquietoff",
    "category": "function",
    "text": "Make MADS not very quiet\n\nMethods:\n\nMads.veryquietoff() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:115\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.veryquieton",
    "page": "Docstrings",
    "title": "Mads.veryquieton",
    "category": "function",
    "text": "Make MADS very quiet\n\nMethods:\n\nMads.veryquieton() in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsHelpers.jl:106\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.void2nan!",
    "page": "Docstrings",
    "title": "Mads.void2nan!",
    "category": "function",
    "text": "Convert Nothing\'s into NaN\'s in a dictionary\n\nMethods:\n\nMads.void2nan!(dict::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:1047\n\nArguments:\n\ndict::AbstractDict : dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.weightedstats",
    "page": "Docstrings",
    "title": "Mads.weightedstats",
    "category": "function",
    "text": "Get weighted mean and variance samples\n\nMethods:\n\nMads.weightedstats(samples::Array, llhoods::Array{T,1} where T) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsSenstivityAnalysis.jl:386\n\nArguments:\n\nllhoods::Array{T,1} where T : vector of log-likelihoods\nsamples::Array : array of samples\n\nReturns:\n\nvector of sample means\nvector of sample variances\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.welloff!",
    "page": "Docstrings",
    "title": "Mads.welloff!",
    "category": "function",
    "text": "Turn off a specific well in the MADS problem dictionary\n\nMethods:\n\nMads.welloff!(madsdata::AbstractDict, wellname::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:621\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nwellname::String : name of the well to be turned off\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.wellon!",
    "page": "Docstrings",
    "title": "Mads.wellon!",
    "category": "function",
    "text": "Turn on a specific well in the MADS problem dictionary\n\nMethods:\n\nMads.wellon!(madsdata::AbstractDict, wellname::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:563\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nwellname::String : name of the well to be turned on\n\n\n\n\n\nTurn on a specific well in the MADS problem dictionary\n\nMethods:\n\nMads.wellon!(madsdata::AbstractDict, wellname::String) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:563\nMads.wellon!(madsdata::AbstractDict, rx::Regex) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:585\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nrx::Regex\nwellname::String : name of the well to be turned on\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.wells2observations!",
    "page": "Docstrings",
    "title": "Mads.wells2observations!",
    "category": "function",
    "text": "Convert Wells class to Observations class in the MADS problem dictionary\n\nMethods:\n\nMads.wells2observations!(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsObservations.jl:676\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.writeparameters",
    "page": "Docstrings",
    "title": "Mads.writeparameters",
    "category": "function",
    "text": "Write model parameters\n\nMethods:\n\nMads.writeparameters(madsdata::AbstractDict) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:890\nMads.writeparameters(madsdata::AbstractDict, parameters::AbstractDict; respect_space) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:890\n\nArguments:\n\nmadsdata::AbstractDict : MADS problem dictionary\nparameters::AbstractDict : parameters\n\nKeywords:\n\nrespect_space : respect provided space in the template file to fit model parameters [default=false]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mads.writeparametersviatemplate",
    "page": "Docstrings",
    "title": "Mads.writeparametersviatemplate",
    "category": "function",
    "text": "Write parameters via MADS template (templatefilename) to an output file (outputfilename)\n\nMethods:\n\nMads.writeparametersviatemplate(parameters, templatefilename, outputfilename; respect_space) in Mads : /home/pfitzseb/.julia/packages/Mads/sBu5R/src/MadsIO.jl:846\n\nArguments:\n\noutputfilename : output file name\nparameters : parameters\ntemplatefilename : tmplate file name\n\nKeywords:\n\nrespect_space : respect provided space in the template file to fit model parameters [default=false]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Mads.@stderrcaptureMads.@stdoutcaptureMads.@stdouterrcaptureMads.@tryimportMads.@tryimportmainMads.JMads.MFlmMads.MadsMads.MadsModelMads.MadsModelLinMads.MadsModelPolyMads.NMFipoptMads.NMFmMads.NrMads.__init__Mads.addkeyword!Mads.addsource!Mads.addsourceparameters!Mads.allwellsoff!Mads.allwellson!Mads.amanziMads.amanzi_output_parserMads.anasolargumentsMads.anasolparametersallMads.anasolparametersrequiredMads.anasolsourcerequiredMads.asinetransformMads.boundparameters!Mads.calibrateMads.calibraterandomMads.calibraterandom_parallelMads.captureMads.captureoffMads.captureonMads.checkmodeloutputdirsMads.checknodedirMads.checkoutMads.checkparameterrangesMads.cleancoverageMads.cmadsins_obsMads.colorsMads.commitMads.computemassMads.computeparametersensititiesMads.contaminationMads.copyaquifer2sourceparameters!Mads.copyrightMads.create_documentationMads.create_testsMads.create_tests_offMads.create_tests_onMads.createmadsobservationsMads.createmadsproblemMads.createobservations!Mads.createtempdirMads.debuglevelMads.deleteNaN!Mads.deletekeyword!Mads.deleteoffwells!Mads.deletetimes!Mads.dependentsMads.diffMads.displayMads.dumpasciifileMads.dumpjsonfileMads.dumpwelldataMads.dumpyamlfileMads.dumpyamlmadsfileMads.efastMads.emceesamplingMads.errororiginalMads.errorreadMads.errorreaderMads.errorwriteMads.estimationerrorMads.evalMads.evaluatemadsexpressionMads.evaluatemadsexpressionsMads.executionwaittimeMads.expcovMads.exponentialvariogramMads.filterkeysMads.forwardMads.forwardgridMads.freeMads.funcnameMads.functionsMads.gaussiancovMads.gaussianvariogramMads.getcomputesMads.getcovmatMads.getcovvec!Mads.getdefaultplotformatMads.getdictvaluesMads.getdirMads.getdistributionMads.getextensionMads.getfunctionMads.getimportantsamplesMads.getlogparamkeysMads.getmadsdirMads.getmadsinputfileMads.getmadsproblemdirMads.getmadsrootnameMads.getnextmadsfilenameMads.getnonlogparamkeysMads.getnonoptparamkeysMads.getobsaltnamesMads.getobsdefaultMads.getobsdistMads.getobskeysMads.getobslogMads.getobslogdefaultMads.getobsmaxMads.getobsminMads.getobsnamesMads.getobstargetMads.getobstimeMads.getobstypesMads.getobsweightMads.getoptparamkeysMads.getoptparamsMads.getparamdictMads.getparamdistributionsMads.getparamkeysMads.getparamrandomMads.getparamsdefaultMads.getparamsinitMads.getparamsinit_maxMads.getparamsinit_minMads.getparamslogMads.getparamslogdefaultMads.getparamslongnameMads.getparamsmaxMads.getparamsminMads.getparamsnamesMads.getparamsplotnameMads.getparamsstepMads.getparamstypeMads.getparamstypesMads.getprocsMads.getrestartMads.getrestartdirMads.getrestartsMads.getrootnameMads.getseedMads.getsindxMads.getsourcekeysMads.gettargetMads.gettargetkeysMads.gettimeMads.getweightMads.getwelldataMads.getwellkeysMads.getwelltargetsMads.graphbackendMads.graphoffMads.graphonMads.graphoutputMads.haskeywordMads.helpMads.imagedpiMads.importeverywhereMads.includeMads.indexMads.indexkeysMads.infogap_jumpMads.infogap_jump_polinomialMads.infogap_mpb_linMads.infogap_mpb_polinomialMads.ins_obsMads.instline2regexsMads.invobsweights!Mads.invwellweights!Mads.islogMads.isobsMads.isoptMads.isparamMads.ispkgavailableMads.keywordnameMads.keywordvalsNOTMads.krigeMads.levenberg_marquardtMads.linktempdirMads.loadasciifileMads.loadbigyamlfileMads.loadjsonfileMads.loadmadsfileMads.loadmadsproblemMads.loadsaltellirestart!Mads.loadyamlfileMads.localsaMads.long_testsMads.long_tests_offMads.long_tests_onMads.madsbashMads.madscoresMads.madscriticalMads.madsdebugMads.madsdirMads.madserrorMads.madsgitMads.madsinfoMads.madsinputfileMads.madsloadMads.madsmathprogbaseMads.madsmodulesMads.madsmodulesdocMads.madsoutputMads.madsserversMads.madsservers2Mads.madsserversallMads.madsupMads.madswarnMads.makearrayconditionalloglikelihoodMads.makearrayfunctionMads.makearrayfunction_dictionaryMads.makearrayloglikelihoodMads.makecomputeconcentrationsMads.makedixonpriceMads.makedixonprice_gradientMads.makedoublearrayfunctionMads.makedoublearrayfunction_dictionaryMads.makedoublearrayfunction_vectorMads.makelmfunctionsMads.makelocalsafunctionMads.makelogpriorMads.makemadscommandfunctionMads.makemadsconditionalloglikelihoodMads.makemadsloglikelihoodMads.makemadsreusablefunctionMads.makempbfunctionsMads.makepowellMads.makepowell_gradientMads.makerosenbrockMads.makerosenbrock_gradientMads.makerotatedhyperellipsoidMads.makerotatedhyperellipsoid_gradientMads.makesphereMads.makesphere_gradientMads.makesumsquaresMads.makesumsquares_gradientMads.makesvrmodelMads.maximumnanMads.maxtofloatmax!Mads.mdirMads.meshgridMads.minimizeMads.minimumnanMads.mkdirMads.modelinformationcriteriaMads.modelrunsMads.modobsweights!Mads.modwellweights!Mads.montecarloMads.naive_get_deltaxMads.naive_levenberg_marquardtMads.naive_lm_iterationMads.ncolorsMads.noplotMads.nprocs_per_task_defaultMads.obslineoccursinMads.ofMads.outputoriginalMads.outputreadMads.outputreaderMads.outputwriteMads.paramarray2dictMads.paramdict2arrayMads.parsemadsdata!Mads.parsenodenamesMads.partialofMads.pinMads.pkgversionMads.plotgridMads.plotlocalsaMads.plotmadsproblemMads.plotmassMads.plotmatchesMads.plotobsSAresultsMads.plotrobustnesscurvesMads.plotseriesMads.plotwellSAresultsMads.printSAresultsMads.printSAresults2Mads.printerrormsgMads.printobservationsMads.pullMads.pushMads.pyyamlMads.pyyamlokMads.quietMads.quietdefaultMads.quietoffMads.quietonMads.readasciipredictionsMads.readmodeloutputMads.readobservationsMads.readobservations_cmadsMads.readyamlpredictionsMads.recursivemkdirMads.recursivermdirMads.regexs2obsMads.removesource!Mads.removesourceparameters!Mads.requiredMads.resetmodelrunsMads.residualsMads.restartMads.restartoffMads.restartonMads.reweighsamplesMads.rmdirMads.rmfileMads.rmfilesMads.rmfiles_extMads.rmfiles_rootMads.rosenbrockMads.rosenbrock2_gradient_lmMads.rosenbrock2_lmMads.rosenbrock_gradient!Mads.rosenbrock_gradient_lmMads.rosenbrock_hessian!Mads.rosenbrock_lmMads.runcmdMads.runremoteMads.saltelliMads.saltelli_functionsMads.saltellibruteMads.saltellibruteparallelMads.saltelliparallelMads.samplingMads.savemadsfileMads.savemcmcresultsMads.savesaltellirestartMads.scatterplotsamplesMads.searchdirMads.set_nprocs_per_taskMads.setallparamsoff!Mads.setallparamson!Mads.setdebuglevelMads.setdefaultplotformatMads.setdirMads.setdpiMads.setexecutionwaittimeMads.setmadsinputfileMads.setmadsserversMads.setmodelinputsMads.setnewmadsfilenameMads.setobservationtargets!Mads.setobstime!Mads.setobsweights!Mads.setparamoff!Mads.setparamon!Mads.setparamsdistnormal!Mads.setparamsdistuniform!Mads.setparamsinit!Mads.setplotfileformatMads.setprocsMads.setseedMads.setsindxMads.setsindx!Mads.setsourceinit!Mads.settarget!Mads.settime!Mads.setverbositylevelMads.setweight!Mads.setwellweights!Mads.showallparametersMads.showobservationsMads.showparametersMads.sindxdefaultMads.sinetransformMads.sinetransformfunctionMads.sinetransformgradientMads.spaghettiplotMads.spaghettiplotsMads.sphericalcovMads.sphericalvariogramMads.sprintfMads.statusMads.stderrcaptureoffMads.stderrcaptureonMads.stdoutcaptureoffMads.stdoutcaptureonMads.stdouterrcaptureoffMads.stdouterrcaptureonMads.sumnanMads.svrdumpMads.svrfreeMads.svrloadMads.svrpredictMads.svrtrainMads.symlinkdirMads.symlinkdirfilesMads.tagMads.testMads.testjMads.transposematrixMads.transposevectorMads.untagMads.vectorflagMads.vectoroffMads.vectoronMads.verbositylevelMads.veryquietMads.veryquietoffMads.veryquietonMads.void2nan!Mads.wMads.weightedstatsMads.welloff!Mads.wellon!Mads.wells2observations!Mads.writeparametersMads.writeparametersviatemplate"
},

]}
