var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CMPFit-1",
    "page": "Readme",
    "title": "CMPFit",
    "category": "section",
    "text": ""
},

{
    "location": "#A-Julia-wrapper-for-the-mpfit-library-(MINPACK-minimization).-1",
    "page": "Readme",
    "title": "A Julia wrapper for the mpfit library (MINPACK minimization).",
    "category": "section",
    "text": "(Image: Build Status)The CMPFit.jl package is a wrapper for the mpfit C-library by Craig Markwardt, providing access to the the MINPACK implementation of the Levenberg-Marquardt algorithm, and allowing simple and quick solutions to Least Squares minimization problems in Julia.This is a wrapper for a C library, hence it require to download the C code and compile it. Check the LsqFit package for a pure Julia solution."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install CMPFit your machine should be equipped with CMake and a C compiler.  In the Julia REPL type:] add CMPFitThis will automaticaly download the cmpfit library (v1.3) from Craig\'s webpage and compile it."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Usage is very simple: given a set of observed data and uncertainties, define a (whatever complex) Julia function to evaluate a model to be compared with the data, and ask cmpfit to find the model parameter values which best fit the data.Example:using CMPFit\n\n# Independent variable\nx = [-1.7237128E+00,1.8712276E+00,-9.6608055E-01,\n    -2.8394297E-01,1.3416969E+00,1.3757038E+00,\n    -1.3703436E+00,4.2581975E-02,-1.4970151E-01,\n    8.2065094E-01]\n\n# Observed data\ny = [-4.4494256E-02,8.7324673E-01,7.4443483E-01,\n     4.7631559E+00,1.7187297E-01,1.1639182E-01,\n     1.5646480E+00,5.2322268E+00,4.2543168E+00,\n     6.2792623E-01]\n\n# Data uncertainties\ne = fill(0., size(y)) .+ 0.5\n\n# Define a model (actually a Gaussian curve)\nfunction GaussModel(x::Vector{Float64}, p::Vector{Float64})\n  sig2 = p[4] * p[4]\n  xc = @. x - p[3]\n  model = @. p[2] * exp(-0.5 * xc * xc / sig2) + p[1]\n  return model\nend\n\n# Guess model parameters\nparam = [0.0, 1.0, 1.0, 1.0]\n\n# Call `cmpfit` and print the results:\nres = cmpfit(x, y, e, GaussModel, param);\nprintln(res)The value returned by cmpfit is a Julia structure.  You may look at its content with:dump(res)Specifically, the best fit parameter values and their 1-sigma uncertainties are:println(res.param)\nprintln(res.perror)CMPFit mirrors all the facilities provided by the underlying C-library, e.g. a parameter can be fixed during the fit, or its value limited to a specific range. Moreover, the whole fitting process may be customized for, e.g., limiting the maximum number of model evaluation, or change the relative chi-squared convergence criterium. E.g.:# Set guess parameters\nparam = [0.5, 4.5, 1.0, 1.0]\n\n# Create the `parinfo` structures for the 4 parameters used in the \n# example above:\npinfo = CMPFit.Parinfo(4)\n\n# Fix the value of the 1st parameter:\npinfo[1].fixed = 1\n\n# Set a lower (4) and upper limit (5) for the 2nd parameter\npinfo[2].limited = (1,1)\npinfo[2].limits = (4, 5)\n\n# Create a `config` structure\nconfig = CMPFit.Config()\n\n# Limit the maximum function evaluation to 200\nconfig.maxfev = 200\n\n# Change the chi-squared convergence criterium:\nconfig.ftol = 1.e-5\n\n# Re-run the minimization process\nres = cmpfit(x, y, e, GaussModel, param, parinfo=pinfo, config=config);\nprintln(res)See Craig\'s webpage for further documentation on the config and parinfo structures."
},

{
    "location": "autodocs/#CMPFit.Config",
    "page": "Docstrings",
    "title": "CMPFit.Config",
    "category": "type",
    "text": "CMPFit config structure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CMPFit.Parinfo",
    "page": "Docstrings",
    "title": "CMPFit.Parinfo",
    "category": "type",
    "text": "Parameter info strutcture\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CMPFit.Result",
    "page": "Docstrings",
    "title": "CMPFit.Result",
    "category": "type",
    "text": "CMPFit return structure (Julia side).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CMPFit.Result_C",
    "page": "Docstrings",
    "title": "CMPFit.Result_C",
    "category": "type",
    "text": "CMPFit return structure (C side).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CMPFit.cmpfit",
    "page": "Docstrings",
    "title": "CMPFit.cmpfit",
    "category": "function",
    "text": "Main CMPFit function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CMPFit.julia_eval_resid",
    "page": "Docstrings",
    "title": "CMPFit.julia_eval_resid",
    "category": "function",
    "text": "Function called from C to calculate the residuals\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CMPFit.@checked_libCMPFit.CMPFitCMPFit.ConfigCMPFit.ParinfoCMPFit.ResultCMPFit.Result_CCMPFit.Wrap_A_FunctionCMPFit.c_eval_residCMPFit.cmpfitCMPFit.evalCMPFit.imm_ParinfoCMPFit.includeCMPFit.julia_eval_residCMPFit.libmpfit"
},

]}
