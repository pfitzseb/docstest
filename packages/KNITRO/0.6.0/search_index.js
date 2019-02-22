var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#KNITRO.jl-1",
    "page": "Readme",
    "title": "KNITRO.jl",
    "category": "section",
    "text": "(Image: )The KNITRO.jl package provides an interface for using the Artelys Knitro solver from Julia. You cannot use KNITRO.jl without having purchased and installed a copy of Knitro from Artelys. This package is available free of charge and in no way replaces or alters any functionality of Artelys Knitro solver.Documentation is available at https://juliaopt.github.io/KNITRO.jl/latest.Note that the current package provides a wrapper both for the new Knitro\'s API (whose functions start by KN_) and the deprecated Knitro\'s API (whose functions start by KTR_). We recommend using the latest version of Knitro available and the new API to get access to all of the new functionalities from the solver. Using the new KN_ API requires Knitro >= v11.0. Refer to Knitro documentation for a full specification of the Knitro\'s API.The Artelys Knitro wrapper for Julia is supported by the JuliaOpt community (which originates the development of this package) and Artelys. Feel free to contact Artelys support if you encounter any problem with this interface or the solver."
},

{
    "location": "#MathOptInterface-Interface-1",
    "page": "Readme",
    "title": "MathOptInterface Interface",
    "category": "section",
    "text": "Note: MathOptInterface works only with the new Knitro\'s KN API which requires Knitro >= v11.0.KNITRO.jl currently supports MathOptInterface and JuMP 0.19. Development is ongoing!"
},

{
    "location": "#MathProgBase-Interface-1",
    "page": "Readme",
    "title": "MathProgBase Interface",
    "category": "section",
    "text": "Note: MathProgBase works only with the old Knitro\'s KTR API.KNITRO.jl implements the solver-independent MathProgBase interface, and so can be used within modeling software like JuMP.The solver object is called KnitroSolver. All options listed in the Artelys Knitro documentation may be passed directly. For example, you can run all algorithms by saying KnitroSolver(KTR_PARAM_ALG=KTR_ALG_MULTI), and here is a formulation modelled using JuMP.jl that specifies some non-default option settings:using KNITRO, JuMP\n\n## Solve test problem 1 (Synthesis of processing system) in\n #  M. Duran & I.E. Grossmann, \"An outer approximation algorithm for\n #  a class of mixed integer nonlinear programs\", Mathematical\n #  Programming 36, pp. 307-339, 1986.  The problem also appears as\n #  problem synthes1 in the MacMINLP test set.\n\nm = Model(solver=KnitroSolver(mip_method = KTR_MIP_METHOD_BB,\n                              algorithm = KTR_ALG_ACT_CG,\n                              outmode = KTR_OUTMODE_SCREEN,\n                              KTR_PARAM_OUTLEV = KTR_OUTLEV_ALL,\n                              KTR_PARAM_MIP_OUTINTERVAL = 1,\n                              KTR_PARAM_MIP_MAXNODES = 10000,\n                              KTR_PARAM_HESSIAN_NO_F = KTR_HESSIAN_NO_F_ALLOW))\nx_U = [2,2,1]\n@variable(m, x_U[i] >= x[i=1:3] >= 0)\n@variable(m, y[4:6], Bin)\n\n@NLobjective(m, Min, 10 + 10*x[1] - 7*x[3] + 5*y[4] + 6*y[5] + 8*y[6] - 18*log(x[2]+1) - 19.2*log(x[1]-x[2]+1))\n@NLconstraints(m, begin\n    0.8*log(x[2] + 1) + 0.96*log(x[1] - x[2] + 1) - 0.8*x[3] >= 0\n    log(x[2] + 1) + 1.2*log(x[1] - x[2] + 1) - x[3] - 2*y[6] >= -2\n    x[2] - x[1] <= 0\n    x[2] - 2*y[4] <= 0\n    x[1] - x[2] - 2*y[5] <= 0\n    y[4] + y[5] <= 1\nend)\nsolve(m)NB: The MathProgBase interface is bound to be deprecated. Please use MathOptInterface instead."
},

{
    "location": "#Low-level-wrapper-1",
    "page": "Readme",
    "title": "Low-level wrapper",
    "category": "section",
    "text": "KNITRO.jl implements most of Knitro\'s functionalities. If you aim at using part of Knitro\'s API that are not implemented in the MathOptInterface/JuMP ecosystem, you can refer to the low level API which wraps directly Knitro\'s C API (whose templates are specified in the file knitro.h).Extensive examples using the C wrapper can be found in examples/."
},

]}
