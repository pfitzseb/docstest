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
    "text": "import SVR; Pkg.add(\"SVR\")"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "import SVR\n\nx, y = SVR.readlibsvmfile(joinpath(dirname(pathof(SVR)), \"..\", \"test\", \"mg.libsvm\")) # read a libSVM input file\n\npmodel = SVR.train(y, permutedims(x)) # train a libSVM model\n\ny_pr = SVR.predict(pmodel, permutedims(x)); # predict based on the libSVM model\n\nSVR.savemodel(pmodel, \"mg.model\") # save the libSVM model\n\nSVR.freemodel(pmodel) # free the memory allocation of the libSVM model"
},

{
    "location": "#Projects-using-SVR-1",
    "page": "Readme",
    "title": "Projects using SVR",
    "category": "section",
    "text": "MADS\nTensorDecompositions"
},

{
    "location": "#Publications,-Presentations,-Projects-1",
    "page": "Readme",
    "title": "Publications, Presentations, Projects",
    "category": "section",
    "text": "mads.gitlab.io\nTensorDecompositions\nmonty.gitlab.io\nees.lanl.gov/monty"
},

{
    "location": "autodocs/#SVR.apredict",
    "page": "Docstrings",
    "title": "SVR.apredict",
    "category": "function",
    "text": "Predict based on a libSVM model\n\nMethods:\n\nSVR.apredict(y::AbstractArray{T,1} where T, x::AbstractArray; kw...) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:273\n\nArguments:\n\nx::AbstractArray : array of independent variables\ny::AbstractArray{T,1} where T : vector of dependent variables\n\nReturn:\n\npredicted dependent variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.freemodel",
    "page": "Docstrings",
    "title": "SVR.freemodel",
    "category": "function",
    "text": "Free a libSVM model\n\nMethods:\n\nSVR.freemodel(pmodel::SVR.svmmodel) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:324\n\nArguments:\n\npmodel::SVR.svmmodel : svm model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.liboutput",
    "page": "Docstrings",
    "title": "SVR.liboutput",
    "category": "function",
    "text": "catch lib output\n\nMethods:\n\nSVR.liboutput(str::Ptr{UInt8}) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:85\n\nArguments:\n\nstr::Ptr{UInt8} : string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.loadmodel",
    "page": "Docstrings",
    "title": "SVR.loadmodel",
    "category": "function",
    "text": "Load a libSVM model\n\nMethods:\n\nSVR.loadmodel(filename::String) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:289\n\nArguments:\n\nfilename::String : input file name\n\nReturns:\n\nSVM model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.mapnodes",
    "page": "Docstrings",
    "title": "SVR.mapnodes",
    "category": "function",
    "text": "Methods:\n\nSVR.mapnodes(x::AbstractArray) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:186\n\nArguments:\n\nx::AbstractArray : \n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.mapparam",
    "page": "Docstrings",
    "title": "SVR.mapparam",
    "category": "function",
    "text": "Methods:\n\nSVR.mapparam(; svm_type, kernel_type, degree, gamma, coef0, C, nu, p, cache_size, eps, shrinking, probability, nr_weight, weight_label, weight) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:163\n\nKeywords:\n\nC : cost; penalty parameter of the error term [default=1.0]\ncache_size : size of the kernel cache [default=100.0]\ncoef0 : independent term in kernel function; important only in POLY and  SIGMOND kernel types [default=0.0]\ndegree : degree of the polynomial kernel [default=3]\neps : epsilon in the EPSILON_SVR model; defines an epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value [default=0.001]\ngamma : coefficient for RBF, POLY and SIGMOND kernel types [default=1.0]\nkernel_type : kernel type [default=RBF]\nnr_weight : [default=0]\nnu : upper bound on the fraction of training errors / lower bound of the fraction of support vectors; acceptable range (0, 1]; applied if NU_SVR model [default=0.5]\np : epsilon for EPSILON_SVR [default=0.1]\nprobability : train to estimate probabilities [default=false]\nshrinking : apply shrinking heuristic [default=true]\nsvm_type : SVM type [default=EPSILON_SVR]\nweight : [default=Ptr{Cdouble}(0x0000000000000000)]\nweight_label : [default=Ptr{Cint}(0x0000000000000000)]\n\nReturns:\n\nparameter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.predict",
    "page": "Docstrings",
    "title": "SVR.predict",
    "category": "function",
    "text": "Predict based on a libSVM model\n\nMethods:\n\nSVR.predict(pmodel::SVR.svmmodel, x::AbstractArray) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:246\n\nArguments:\n\npmodel::SVR.svmmodel : the model that prediction is based on\nx::AbstractArray : array of independent variables\n\nReturn:\n\npredicted dependent variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.r2",
    "page": "Docstrings",
    "title": "SVR.r2",
    "category": "function",
    "text": "Compute the coefficient of determination (r2)\n\nMethods:\n\nSVR.r2(x, y) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:370\n\nArguments:\n\nx : observed data\ny : predicted data\n\nReturns:\n\ncoefficient of determination (r2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.readlibsvmfile",
    "page": "Docstrings",
    "title": "SVR.readlibsvmfile",
    "category": "function",
    "text": "Read a libSVM file\n\nMethods:\n\nSVR.readlibsvmfile(file::String) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:344\n\nArguments:\n\nfile::String : file name\n\nReturns:\n\narray of independent variables\nvector of dependent variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.savemodel",
    "page": "Docstrings",
    "title": "SVR.savemodel",
    "category": "function",
    "text": "Save a libSVM model\n\nMethods:\n\nSVR.savemodel(pmodel::SVR.svmmodel, filename::String) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:311\n\nArguments:\n\nfilename::String : output file name\npmodel::SVR.svmmodel : svm model\n\nDumps:\n\nfile with saved model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SVR.train",
    "page": "Docstrings",
    "title": "SVR.train",
    "category": "function",
    "text": "Train based on a libSVM model\n\nMethods:\n\nSVR.train(y::AbstractArray{T,1} where T, x::AbstractArray; svm_type, kernel_type, degree, gamma, coef0, C, nu, eps, cache_size, tol, shrinking, probability, verbose) in SVR : /home/pfitzseb/.julia/packages/SVR/UlRCO/src/SVR.jl:225\n\nArguments:\n\nx::AbstractArray : array of independent variables\ny::AbstractArray{T,1} where T : vector of dependent variables\n\nKeywords:\n\nC : cost; penalty parameter of the error term [default=1.0]\ncache_size : size of the kernel cache [default=100.0]\ncoef0 : independent term in kernel function; important only in POLY and  SIGMOND kernel types [default=0.0]\ndegree : degree of the polynomial kernel [default=3]\neps : epsilon in the EPSILON_SVR model; defines an epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value [default=0.1]\ngamma : coefficient for RBF, POLY and SIGMOND kernel types [default=1/size(x, 1)]\nkernel_type : kernel type [default=RBF]\nnu : upper bound on the fraction of training errors / lower bound of the fraction of support vectors; acceptable range (0, 1]; applied if NU_SVR model [default=0.5]\nprobability : train to estimate probabilities [default=false]\nshrinking : apply shrinking heuristic [default=true]\nsvm_type : SVM type [default=EPSILON_SVR]\ntol : tolerance of termination criterion [default=0.001]\nverbose : verbose output [default=false]\n\nReturns:\n\nSVM model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SVR.@cachedsymSVR.C_SVCSVR.EPSILON_SVRSVR.LINEARSVR.NU_SVCSVR.NU_SVRSVR.ONE_CLASSSVR.POLYSVR.PRECOMPUTEDSVR.RBFSVR.SIGMOIDSVR.SVRSVR.apredictSVR.evalSVR.freemodelSVR.get_libSVR.includeSVR.liboutputSVR.loadmodelSVR.mapnodesSVR.mapparamSVR.predictSVR.r2SVR.readlibsvmfileSVR.savemodelSVR.svm_free_model_contentSVR.svm_load_modelSVR.svm_modelSVR.svm_nodeSVR.svm_parameterSVR.svm_predictSVR.svm_problemSVR.svm_save_modelSVR.svm_trainSVR.svmmodelSVR.trainSVR.verbosity"
},

]}
