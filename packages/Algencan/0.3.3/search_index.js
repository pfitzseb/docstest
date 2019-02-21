var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Algencan.jl-1",
    "page": "Readme",
    "title": "Algencan.jl",
    "category": "section",
    "text": "Algencan.jl is a JuMP / MathProgBase interface to the Algencan nonlinear solver.Algencan is a high performance and large scale Augmented Lagrangian solver written by Ernesto Birgin and Mario Martínez. It has many special features like being able to use HSL library functions to speed up linear algebra with sparse matrices and some smart acceleration strategies."
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "At this point this is alpha software. From verision v0.2.0 on the code will work with Julia 1.0 or later only. If you need to run Algencan.jl with the old Julia 0.6, please install the version v0.1.x."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "There are three main modes of installation, depending on how you want to compile Algencan."
},

{
    "location": "#The-preferred-mode:-using-HSL-1",
    "page": "Readme",
    "title": "The preferred mode: using HSL",
    "category": "section",
    "text": "Obs: We only give support for MA57 at this point.The preferred way to use Algencan is to link it against a HSL function to solve sparse linear systems. To do this you need to grab your copy of MA57 from HSL. It has a free academic license. You should receive a file named hsl_ma57-5.2.0.tar.gz.All you need to do is to create an environment variable named MA57_SOURCE pointing to this file before installing Algencan.jl. For example, if the file is located at the /tmp folder, in bash you would doexport MA57_SOURCE=/tmp/hsl_ma57-5.2.0.tar.gzAfter that just install Algencan.jl from Julia\'s REPL and import it to force precompilation.(v1.0) pkg> add Algencan\njulia> using Algencan"
},

{
    "location": "#The-easy-mode-1",
    "page": "Readme",
    "title": "The easy mode",
    "category": "section",
    "text": "Just type(v1.0) pkg> add Algencanin package mode in Julia\'s REPL.This will download Algencan\'s code, compile it and make it available to the Algencan.jl package. However there is a major caveat here. At this point I am compiling Algencan without any HSL support. This has major influence on Algencan behavior and performance. You should use HSL whenever you have access to it."
},

{
    "location": "#Pre-compiled-libalgencan.so-1",
    "page": "Readme",
    "title": "Pre-compiled libalgencan.so",
    "category": "section",
    "text": "If you have your own copy of libalgencan.so (note that you need a shared library), you can use it. Just create an environment variable like belo before using Algencan.jl for the first time.export ALGENCAN_LIB_DIR=/tmp/libalgencan.soYou can then proceed to install Algencan.jl from the REPL(v1.0) pkg> add Algencan\njulia> using Algencan"
},

{
    "location": "#Hints-to-self-compilation-of-Algencan-with-HSL-libraries-1",
    "page": "Readme",
    "title": "Hints to self compilation of Algencan with HSL libraries",
    "category": "section",
    "text": "This wiki page documents the steps I use to compile myself a version of documents the steps I use to compile myself a version of libalgencan.so."
},

{
    "location": "autodocs/#Algencan.Algencan",
    "page": "Docstrings",
    "title": "Algencan.Algencan",
    "category": "module",
    "text": "Algencan interface to MathProgBase and JuMP.\n\nSee its GitHub page\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.AlgencanMathProgModel",
    "page": "Docstrings",
    "title": "Algencan.AlgencanMathProgModel",
    "category": "type",
    "text": "Algencan model, that storing solution data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.AlgencanSolver",
    "page": "Docstrings",
    "title": "Algencan.AlgencanSolver",
    "category": "type",
    "text": "Algencan solver that stores options\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.find_status",
    "page": "Docstrings",
    "title": "Algencan.find_status",
    "category": "function",
    "text": "Find final status of Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.julia_fc",
    "page": "Docstrings",
    "title": "Algencan.julia_fc",
    "category": "function",
    "text": "Compute objective and constraints as required by Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.julia_gjac",
    "page": "Docstrings",
    "title": "Algencan.julia_gjac",
    "category": "function",
    "text": "Compute objective gradient and constraints Jacobian as required by Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.julia_hl",
    "page": "Docstrings",
    "title": "Algencan.julia_hl",
    "category": "function",
    "text": "Compute the Hessian of the Lagrangian as required by Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.julia_hlp",
    "page": "Docstrings",
    "title": "Algencan.julia_hlp",
    "category": "function",
    "text": "Compute the Hessian of the Lagrangian times p as required by Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.option2vparam",
    "page": "Docstrings",
    "title": "Algencan.option2vparam",
    "category": "function",
    "text": "Transform the option dictionary into a vparam string array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.setmultwarmstart!",
    "page": "Docstrings",
    "title": "Algencan.setmultwarmstart!",
    "category": "function",
    "text": "Set an inital value for the constaint mutipliers (warmstart)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.treat_lower_bounds",
    "page": "Docstrings",
    "title": "Algencan.treat_lower_bounds",
    "category": "function",
    "text": "Analyse the lower and upper bounds on the constraints and prepare the  data structure to treat lower bounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Algencan.@checked_libAlgencan.AlgencanAlgencan.AlgencanMathProgModelAlgencan.AlgencanSolverAlgencan.MPBAlgencan.algencan_lib_pathAlgencan.evalAlgencan.find_statusAlgencan.getnfevalsAlgencan.includeAlgencan.julia_fcAlgencan.julia_gjacAlgencan.julia_hlAlgencan.julia_hlpAlgencan.libalgencanAlgencan.option2vparamAlgencan.resetnfevalsAlgencan.setmultwarmstart!Algencan.treat_lower_bounds"
},

]}
