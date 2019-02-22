var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#vOptSpecific:-part-of-vOptSolver-for-structured-problems-1",
    "page": "Readme",
    "title": "vOptSpecific: part of vOptSolver for structured problems",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)vOptSolver is a solver of multiobjective linear optimization problems (MOCO, MOIP, MOMILP, MOLP). This repository concerns vOptSpecific, the part of vOptSolver devoted to multiobjective structured problems (currently available: 2LAP). With vOptSpecific, the problem is expressed using an Application Programming Interface. vOptSpecific runs on macOS, and linux-ubuntu (local use), also on JuliaBox (distant use).We suppose you are familiar with vOptSolver; if not, read first this presentation."
},

{
    "location": "#Instructions-1",
    "page": "Readme",
    "title": "Instructions",
    "category": "section",
    "text": "For a local use, a working version of:Julia must be ready; instructions for the installation are available here\nyour favorite C/C++ compiler must be ready (GCC is suggested)"
},

{
    "location": "#Run-Julia-1",
    "page": "Readme",
    "title": "Run Julia",
    "category": "section",
    "text": "On linux or in the cloud (juliaBox):open a console on your computer or in the cloud\nwhen the prompt is ready, type in the console juliaOn macOS:locate the application julia and \nclick on the icon, the julia console comes to the screen"
},

{
    "location": "#Installation-Instructions-1",
    "page": "Readme",
    "title": "Installation Instructions",
    "category": "section",
    "text": "Before your first local or distant use, run Julia and when the terminal is ready with the prompt julia on screen, \nadd and build as follow the mandatory package to your Julia distribution: julia> Pkg.add(\"vOptSpecific.jl\")\njulia> Pkg.build(\"vOptSpecific\")That\'s all folk; at this point, vOptSpecific is properly installed."
},

{
    "location": "#Usage-Instructions-1",
    "page": "Readme",
    "title": "Usage Instructions",
    "category": "section",
    "text": "When vOptSpecific is properly installed,run Julia and when the terminal is ready with the prompt julia on screen, \ninvoke vOptSpecific in typing in the console:julia> using vOptSpecificvOptSpecific is ready. See examples for further informations and have fun with the solver!"
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
    "text": "The problem size for 2LAP is limited to 100x100."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "vOptSpecific.Bi01KPvOptSpecific.LAP_Przybylski2008vOptSpecific.LAPsolvervOptSpecific.OSPSolvervOptSpecific.OSP_VanWassenhove1980vOptSpecific.UKP_Jorge2010vOptSpecific.UKPsolvervOptSpecific.UMFLP_Delmee2017vOptSpecific.UMFLPsolvervOptSpecific._2LAPvOptSpecific._2OSPvOptSpecific._2UKPvOptSpecific._2UMFLPvOptSpecific.__init__vOptSpecific._unsafe_wrapvOptSpecific.computeExactFlowtimeMaxTardinessvOptSpecific.computeMinFlowtimevOptSpecific.computeMinMaxTardinessvOptSpecific.displayInstancevOptSpecific.displayOptimalvOptSpecific.displaySummaryvOptSpecific.evalvOptSpecific.evaluateSolution!vOptSpecific.generateDidacticInstancevOptSpecific.generateHardInstancevOptSpecific.generateRandomInstancevOptSpecific.includevOptSpecific.libLAPpathvOptSpecific.libUMFLPpathvOptSpecific.libcomboPathvOptSpecific.load2LAPvOptSpecific.load2OSPvOptSpecific.load2UKPvOptSpecific.load2UMFLPvOptSpecific.set2LAPvOptSpecific.set2OSPvOptSpecific.set2UKPvOptSpecific.set2UMFLPvOptSpecific.smith_modifievOptSpecific.solveOSPvOptSpecific.t_environmentvOptSpecific.t_solutionvOptSpecific.vOptSpecificvOptSpecific.vSolve"
},

]}
