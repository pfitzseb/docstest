var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AmplNLReader.jl:-A-[Julia](http://julialang.org)-interface-to-[AMPL](http://www.ampl.com)-1",
    "page": "Readme",
    "title": "AmplNLReader.jl: A Julia interface to AMPL",
    "category": "section",
    "text": "(Image: Master Build Status) (Image: Master Build status) (Image: Master Coverage Status)"
},

{
    "location": "#How-to-Install-1",
    "page": "Readme",
    "title": "How to Install",
    "category": "section",
    "text": "At the Julia prompt, clone this repository and build:julia> Pkg.clone(\"https://github.com/JuliaSmoothOptimizers/AmplNLReader.jl.git\")\njulia> Pkg.build(\"AmplNLReader\")Currently, OSX and Linux are supported. Windows support is on hold until the AMPL/MP library can build shared libraries."
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "julia> Pkg.test(\"AmplNLReader\")"
},

{
    "location": "#Creating-a-Model-1",
    "page": "Readme",
    "title": "Creating a Model",
    "category": "section",
    "text": "For an introduction to the AMPL modeling language, seeR. Fourer, D. M. Gay, and B. W. Kernighan, AMPL: A Mathematical Programming Language, Management Science 36, pp. 519-554, 1990.\nR. Fourer, D. M. Gay, and B. W. Kernighan, AMPL: A Modeling Language for Mathematical Programming, Duxbury Press / Brooks/Cole Publishing Company, 2003.\nD. Orban, The Lightning AMPL Tutorial. A Guide for Nonlinear Optimization Users, GERAD Technical Report G-2009-66, 2009.Suppose you have an AMPL model represented by the model and data files mymodel.mod and mymodel.dat. Decode this model as a so-called nl file usingampl -ogmymodel mymodel.mod mymodel.datFor example:julia> using AmplNLReader\n\njulia> hs33 = AmplModel(\"hs033.nl\")\nMinimization problem hs033.nl\nnvar = 3, ncon = 2 (0 linear)\n\njulia> print(hs33)\nMinimization problem hs033.nl\nnvar = 3, ncon = 2 (0 linear)\nlvar = 1x3 Array{Float64,2}:\n 0.0  0.0  0.0\nuvar = 1x3 Array{Float64,2}:\n Inf  Inf  5.0\nlcon = 1x2 Array{Float64,2}:\n -Inf  4.0\nucon = 1x2 Array{Float64,2}:\n 0.0  Inf\nx0 = 1x3 Array{Float64,2}:\n 0.0  0.0  3.0\ny0 = 1x2 Array{Float64,2}:\n -0.0  -0.0There is support for holding multiple models in memory simultaneously. This should be transparent to the user."
},

{
    "location": "#Optimization-Problems-1",
    "page": "Readme",
    "title": "Optimization Problems",
    "category": "section",
    "text": "AmplNLReader.jl currently focuses on continuous problems conforming to NLPModels.jl.AmplModel objects support all methods associated to NLPModel objects. Please see the NLPModels.jl documentation for more information. The following table lists extra methods associated to an AmplModel. See Hooking your Solver to AMPL for background.Method Notes\nwrite_sol(nlp, msg, x, y) Write primal and dual solutions to file"
},

{
    "location": "#Missing-Methods-1",
    "page": "Readme",
    "title": "Missing Methods",
    "category": "section",
    "text": "methods for LPs (sparse cost, sparse constraint matrix)\nmethods to check optimality conditions.This content is released under the MIT License. <a rel=\"license\" href=\"http://opensource.org/licenses/MIT\"> <img alt=\"MIT license\" height=\"40\" src=\"http://upload.wikimedia.org/wikipedia/commons/c/c3/License_icon-mit.svg\" /></a>"
},

]}
