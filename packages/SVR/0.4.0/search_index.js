var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SVR-1",
    "page": "Readme",
    "title": "SVR",
    "category": "section",
    "text": "(Image: SVR) (Image: SVR) (Image: SVR) (Image: Build Status) (Image: Coverage Status)Support Vector Regression (SVR) analysis in Julia utilizing the libSVM library.SVR is a module of MADS (Model Analysis & Decision Support)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"SVR\")"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "import SVR\n\n# read a libSVM input file\nx, y = SVR.readlibsvmfile(\"mg.libsvm\")\n\n# train a libSVM model\npmodel = SVR.train(y, x\');\n\n# predict based on the libSVM model\ny_pr = SVR.predict(pmodel, x\');\n\n# save the libSVM model\nSVR.savemodel(pmodel, \"mg.model\")\n\n# free the memory allocation of the libSVM model\nSVR.freemodel(pmodel)"
},

{
    "location": "#MADS-1",
    "page": "Readme",
    "title": "MADS",
    "category": "section",
    "text": "MADS (Model Analysis & Decision Support) is an integrated open-source high-performance computational (HPC) framework in Julia. MADS can execute a wide range of data- and model-based analyses:Sensitivity Analysis\nParameter Estimation\nModel Inversion and Calibration\nUncertainty Quantification\nModel Selection and Model Averaging\nModel Reduction and Surrogate Modeling\nMachine Learning and Blind Source Separation\nDecision Analysis and SupportMADS has been tested to perform HPC simulations on a wide-range multi-processor clusters and parallel environments (Moab, Slurm, etc.). MADS utilizes adaptive rules and techniques which allows the analyses to be performed with a minimum user input. The code provides a series of alternative algorithms to execute each type of data- and model-based analyses."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "All the available MADS modules and functions are described at madsjulia.github.io"
},

{
    "location": "#Installation-2",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "After starting Julia, execute:Pkg.add(\"Mads\")"
},

{
    "location": "#Installation-of-MADS-behind-a-firewall-1",
    "page": "Readme",
    "title": "Installation of MADS behind a firewall",
    "category": "section",
    "text": "Julia uses git for package management. Add in the .gitconfig file in your home directory:[url \"https://\"]\n        insteadOf = git://or execute:git config --global url.\"https://\".insteadOf git://Set proxies:export ftp_proxy=http://proxyout.<your_site>:8080\nexport rsync_proxy=http://proxyout.<your_site>:8080\nexport http_proxy=http://proxyout.<your_site>:8080\nexport https_proxy=http://proxyout.<your_site>:8080\nexport no_proxy=.<your_site>For example, if you are doing this at LANL, you will need to execute the following lines in your bash command-line environment:export ftp_proxy=http://proxyout.lanl.gov:8080\nexport rsync_proxy=http://proxyout.lanl.gov:8080\nexport http_proxy=http://proxyout.lanl.gov:8080\nexport https_proxy=http://proxyout.lanl.gov:8080\nexport no_proxy=.lanl.gov"
},

{
    "location": "#MADS-examples-1",
    "page": "Readme",
    "title": "MADS examples",
    "category": "section",
    "text": "In Julia REPL, do the following commands:import MadsTo explore getting-started instructions, execute:Mads.help()There are various examples located in the examples directory of the Mads repository.For example, executeinclude(Mads.madsdir * \"/../examples/contamination/contamination.jl\")to perform various example analyses related to groundwater contaminant transport, or executeinclude(Mads.madsdir * \"/../examples/bigdt/bigdt.jl\")to perform Bayesian Information Gap Decision Theory (BIG-DT) analysis."
},

{
    "location": "#Developers-1",
    "page": "Readme",
    "title": "Developers",
    "category": "section",
    "text": "Velimir (monty) Vesselinov (publications)\nBoian Alexandrov (publications)\nVesselin Grantcharov\nDaniel O\'Malley (publications)\nsee also"
},

{
    "location": "#Publications,-Presentations,-Projects-1",
    "page": "Readme",
    "title": "Publications, Presentations, Projects",
    "category": "section",
    "text": "mads.lanl.gov/\nees.lanl.gov/monty"
},

{
    "location": "autodocs/#SVR.apredict",
    "page": "Docstrings",
    "title": "SVR.apredict",
    "category": "function",
    "text": "Predict based on a libSVM model\n\nMethods:\n\nSVR.apredict(y::Array{T,1} where T, x::Array; kw...) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:272\n\nArguments:\n\nx::Array : array of independent variables\ny::Array{T,1} where T : vector of dependent variables\n\nReturn:\n\npredicted dependent variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.freemodel",
    "page": "Docstrings",
    "title": "SVR.freemodel",
    "category": "function",
    "text": "Free a libSVM model\n\nMethods:\n\nSVR.freemodel(pmodel::SVR.svmmodel) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:322\n\nArguments:\n\npmodel::SVR.svmmodel : svm model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.liboutput",
    "page": "Docstrings",
    "title": "SVR.liboutput",
    "category": "function",
    "text": "catch lib output\n\nMethods:\n\nSVR.liboutput(str::Ptr{UInt8}) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:86\n\nArguments:\n\nstr::Ptr{UInt8} : string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.loadmodel",
    "page": "Docstrings",
    "title": "SVR.loadmodel",
    "category": "function",
    "text": "Load a libSVM model\n\nMethods:\n\nSVR.loadmodel(filename::String) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:288\n\nArguments:\n\nfilename::String : input file name\n\nReturns:\n\nSVM model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.mapnodes",
    "page": "Docstrings",
    "title": "SVR.mapnodes",
    "category": "function",
    "text": "Methods:\n\nSVR.mapnodes(x::Array) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:187\n\nArguments:\n\nx::Array : \n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.mapparam",
    "page": "Docstrings",
    "title": "SVR.mapparam",
    "category": "function",
    "text": "Methods:\n\nSVR.mapparam(; svm_type, kernel_type, degree, gamma, coef0, C, nu, p, cache_size, eps, shrinking, probability, nr_weight, weight_label, weight) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:164\n\nKeywords:\n\nC : cost; penalty parameter of the error term [default=1.0]\ncache_size : size of the kernel cache [default=100.0]\ncoef0 : independent term in kernel function; important only in POLY and  SIGMOND kernel types [default=0.0]\ndegree : degree of the polynomial kernel [default=3]\neps : epsilon in the EPSILON_SVR model; defines an epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value [default=0.001]\ngamma : coefficient for RBF, POLY and SIGMOND kernel types [default=1.0]\nkernel_type : kernel type [default=RBF]\nnr_weight : [default=0]\nnu : upper bound on the fraction of training errors / lower bound of the fraction of support vectors; acceptable range (0, 1]; applied if NU_SVR model [default=0.5]\np : epsilon for EPSILON_SVR [default=0.1]\nprobability : train to estimate probabilities [default=false]\nshrinking : apply shrinking heuristic [default=true]\nsvm_type : SVM type [default=EPSILON_SVR]\nweight : [default=Ptr{Cdouble}(0x0000000000000000)]\nweight_label : [default=Ptr{Cint}(0x0000000000000000)]\n\nReturns:\n\nparameter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.predict",
    "page": "Docstrings",
    "title": "SVR.predict",
    "category": "function",
    "text": "Predict based on a libSVM model\n\nMethods:\n\nSVR.predict(pmodel::SVR.svmmodel, x::Array) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:246\n\nArguments:\n\npmodel::SVR.svmmodel : the model that prediction is based on\nx::Array : array of independent variables\n\nReturn:\n\npredicted dependent variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.r2",
    "page": "Docstrings",
    "title": "SVR.r2",
    "category": "function",
    "text": "Compute the coefficient of determination (r2)\n\nMethods:\n\nSVR.r2(x, y) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:367\n\nArguments:\n\nx : observed data\ny : predicted data\n\nReturns:\n\ncoefficient of determination (r2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.readlibsvmfile",
    "page": "Docstrings",
    "title": "SVR.readlibsvmfile",
    "category": "function",
    "text": "Read a libSVM file\n\nMethods:\n\nSVR.readlibsvmfile(file::String) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:341\n\nArguments:\n\nfile::String : file name\n\nReturns:\n\narray of independent variables\nvector of dependent variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.savemodel",
    "page": "Docstrings",
    "title": "SVR.savemodel",
    "category": "function",
    "text": "Save a libSVM model\n\nMethods:\n\nSVR.savemodel(pmodel::SVR.svmmodel, filename::String) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:309\n\nArguments:\n\nfilename::String : output file name\npmodel::SVR.svmmodel : svm model\n\nDumps:\n\nfile with saved model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.train",
    "page": "Docstrings",
    "title": "SVR.train",
    "category": "function",
    "text": "Train based on a libSVM model\n\nMethods:\n\nSVR.train(y::Array{T,1} where T, x::Array; svm_type, kernel_type, degree, gamma, coef0, C, nu, eps, cache_size, tol, shrinking, probability, verbose) in SVR : /home/pfitzseb/.julia/packages/SVR/UEfp0/src/SVR.jl:226\n\nArguments:\n\nx::Array : array of independent variables\ny::Array{T,1} where T : vector of dependent variables\n\nKeywords:\n\nC : cost; penalty parameter of the error term [default=1.0]\ncache_size : size of the kernel cache [default=100.0]\ncoef0 : independent term in kernel function; important only in POLY and  SIGMOND kernel types [default=0.0]\ndegree : degree of the polynomial kernel [default=3]\neps : epsilon in the EPSILON_SVR model; defines an epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value [default=0.1]\ngamma : coefficient for RBF, POLY and SIGMOND kernel types [default=1/size(x, 1)]\nkernel_type : kernel type [default=RBF]\nnu : upper bound on the fraction of training errors / lower bound of the fraction of support vectors; acceptable range (0, 1]; applied if NU_SVR model [default=0.5]\nprobability : train to estimate probabilities [default=false]\nshrinking : apply shrinking heuristic [default=true]\nsvm_type : SVM type [default=EPSILON_SVR]\ntol : tolerance of termination criterion [default=0.001]\nverbose : verbose output [default=false]\n\nReturns:\n\nSVM model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SVR.@cachedsymSVR.C_SVCSVR.EPSILON_SVRSVR.LINEARSVR.NU_SVCSVR.NU_SVRSVR.ONE_CLASSSVR.POLYSVR.PRECOMPUTEDSVR.RBFSVR.SIGMOIDSVR.SVRSVR.apredictSVR.evalSVR.freemodelSVR.get_libSVR.includeSVR.liboutputSVR.loadmodelSVR.mapnodesSVR.mapparamSVR.predictSVR.r2SVR.readlibsvmfileSVR.savemodelSVR.svm_free_model_contentSVR.svm_load_modelSVR.svm_modelSVR.svm_nodeSVR.svm_parameterSVR.svm_predictSVR.svm_problemSVR.svm_save_modelSVR.svm_trainSVR.svmmodelSVR.trainSVR.verbosity"
},

]}
