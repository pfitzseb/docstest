var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#vOptGeneric:-part-of-vOptSolver-for-non-structured-problems-1",
    "page": "Readme",
    "title": "vOptGeneric: part of vOptSolver for non-structured problems",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)vOptSolver is a solver of multiobjective linear optimization problems (MOCO, MOIP, MOMILP, MOLP). This repository concerns vOptGeneric, the part of vOptSolver devoted to multiobjective non-structured problems (currently available: 2IP). With vOptGeneric, the problem is expressed using JuMP algebraic language extended to multiple objectives. vOptGeneric runs on macOS, linux-ubuntu, and windows (local use), also on JuliaBox (distant use).We suppose you are familiar with vOptSolver; if not, read first this presentation."
},

{
    "location": "#Instructions-1",
    "page": "Readme",
    "title": "Instructions",
    "category": "section",
    "text": "For a local use, a working version of:Julia must be ready; instructions for the installation are available here\nyour favorite MILP solver must be ready (GLPK is suggested);  instructions for the installation are available here"
},

{
    "location": "#Run-Julia-1",
    "page": "Readme",
    "title": "Run Julia",
    "category": "section",
    "text": "On linux or in the cloud (JuliaBox):open a console on your computer or in the cloud\nwhen the prompt is ready, type in the console juliaOn macOS:locate the application julia and \nclick on the icon, the julia console comes to the screen"
},

{
    "location": "#Installation-Instructions-1",
    "page": "Readme",
    "title": "Installation Instructions",
    "category": "section",
    "text": "Before your first local or distant use, run Julia and when the terminal is ready with the prompt julia on screen, \nadd as follow the mandatory packages to your Julia distribution: julia> Pkg.add(\"vOptGeneric.jl\")\njulia> Pkg.add(\"GLPK\") ; Pkg.add(\"GLPKMathProgInterface\")That\'s all folk; at this point, vOptGeneric is properly installed."
},

{
    "location": "#Usage-Instructions-1",
    "page": "Readme",
    "title": "Usage Instructions",
    "category": "section",
    "text": "When vOptGeneric is properly installed,run Julia and when the terminal is ready with the prompt julia on screen, \ninvoke vOptGeneric and the MILP solver to activate in typing in the console:julia> using vOptGeneric\njulia> using GLPK ; using GLPKMathProgInterfacevOptGeneric is ready. See examples for further informations and have fun with the solver! "
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The folder examples provides (1) source code of problems ready to be solved and (2) selected datafiles into different formats."
},

{
    "location": "#Limitations-1",
    "page": "Readme",
    "title": "Limitations",
    "category": "section",
    "text": "No special limitation; the solving strength of vOptGeneric is currently provided by the MILP solver (GLPK, Clp/Cbc, CPLEX, GUROBI, etc.) invoked."
},

]}
