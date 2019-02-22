var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Xpress.jl-1",
    "page": "Readme",
    "title": "Xpress.jl",
    "category": "section",
    "text": "The Xpress Optimizer is a commercial optimization solver for a variety of mathematical programming problems, including linear programming (LP), quadratic programming (QP), quadratically constrained programming (QCP), mixed integer linear programming (MILP), mixed-integer quadratic programming (MIQP), and mixed-integer quadratically constrained programming (MIQCP).The Xpress solver is considered one of the best solvers (in terms of performance and success rate of tackling hard problems) in math programming, and its performance is comparable to (and sometimes superior to) CPLEX. Academic users can obtain a Xpress license for free.This package is a wrapper of the Xpress solver (through its C interface). Currently, this package supports the following types of problems:Linear programming (LP) Mixed Integer Linear Programming (MILP) Quadratic programming (QP) Mixed Integer Quadratic Programming (MIQP) Quadratically constrained quadratic programming (QCQP) Second order cone programming (SOCP) Mixed integer second order cone programming (MISOCP) The Xpress wrapper for Julia is community driven and not officially supported by Xpress. If you are a commercial customer interested in official support for Julia from Xpress, let them know!"
},

{
    "location": "#Install:-1",
    "page": "Readme",
    "title": "Install:",
    "category": "section",
    "text": "Here is the procedure to setup this package:Obtain a license of Xpress and install Xpress solver, following the instructions on FICO\'s website.\nInstall this package using Pkg.add(\"Xpress\").\nMake sure the XPRESSDIR environmental variable is set to the path of the Xpress directory. This is part of a standard installation. The Xpress library will be searched for in XPRESSDIR/lib on unix platforms and XPRESSDIR/bin on Windows. \nNow, you can start using it.You should use the xpress version matching to your julia installation and vice-versa"
},

{
    "location": "#Use-Other-Packages-1",
    "page": "Readme",
    "title": "Use Other Packages",
    "category": "section",
    "text": "We highly recommend that you use the Xpress.jl package with higher level packages such as JuMP.jl or MathProgBase.jl. This can be done using the XpressXpressSolver object. Here is how to create a JuMP model that uses Xpress as the solver. Parameters are passed as keyword arguments:using JuMP, Xpress\n\nm = Model(solver=Xpress.XpressSolver(DEFAULTALG = 2, PRESOLVE = 0))For other parameters use Xpress Optimizer manual."
},

{
    "location": "#API-Overview-1",
    "page": "Readme",
    "title": "API Overview",
    "category": "section",
    "text": "This package provides both APIs at different levels for constructing models and solving optimization problems just like Gurobi.jl, you can use the tests and examples in this package and Gurobi.jl\'s README.md basic for reference."
},

{
    "location": "#TODO:-1",
    "page": "Readme",
    "title": "TODO:",
    "category": "section",
    "text": "Create wrapper for: Callbacks."
},

{
    "location": "#Reference:-1",
    "page": "Readme",
    "title": "Reference:",
    "category": "section",
    "text": "FICO optimizer manual"
},

]}
