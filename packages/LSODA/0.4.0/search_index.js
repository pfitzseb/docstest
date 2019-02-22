var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: Build status) (Image: ) (Image: )"
},

{
    "location": "#LSODA.jl-1",
    "page": "Readme",
    "title": "LSODA.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "LSODA.jl is a Julia package that interfaces to the liblsoda library, developed by Simon Frost (@sdwfrost), thereby providing a way to use the LSODA algorithm from Linda Petzold and Alan Hindmarsh from Julia. Clang.jl has been used to write the library and Sundials.jl was a inspiring source."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install this package, run the command add LSODA."
},

{
    "location": "#Simplified-Functions-1",
    "page": "Readme",
    "title": "Simplified Functions",
    "category": "section",
    "text": "To solve an ODE, one can call the simplified solver:function rhs!(t, x, ydot, data)\n	ydot[1]=1.0E4 * x[2] * x[3] - .04E0 * x[1]\n	ydot[3]=3.0E7 * x[2] * x[2]\n	ydot[2]=-ydot[1] - ydot[3]\n  nothing\nend\n\ny0 = [1.,0.,0.]\ntspan = [0., 0.4]\nres =  lsoda(rhs!, y0, tspan, reltol= 1e-4, abstol = Vector([1.e-6,1.e-10,1.e-6]))To reproduce the test example from liblsoda, on can use:lsoda_0(rhs!, y0, tspan, reltol= 1e-4, abstol = Vector([1.e-6,1.e-10,1.e-6]))This should give the following.at t =   4.0000e-01 y=   9.851712e-01   3.386380e-05   1.479493e-02\nat t =   4.0000e+00 y=   9.055333e-01   2.240655e-05   9.444430e-02\nat t =   4.0000e+01 y=   7.158403e-01   9.186334e-06   2.841505e-01\nat t =   4.0000e+02 y=   4.505250e-01   3.222964e-06   5.494717e-01\nat t =   4.0000e+03 y=   1.831976e-01   8.941774e-07   8.168016e-01\nat t =   4.0000e+04 y=   3.898729e-02   1.621940e-07   9.610125e-01\nat t =   4.0000e+05 y=   4.936362e-03   1.984221e-08   9.950636e-01\nat t =   4.0000e+06 y=   5.161832e-04   2.065786e-09   9.994838e-01\nat t =   4.0000e+07 y=   5.179811e-05   2.072030e-10   9.999482e-01\nat t =   4.0000e+08 y=   5.283524e-06   2.113420e-11   9.999947e-01\nat t =   4.0000e+09 y=   4.658945e-07   1.863579e-12   9.999995e-01\nat t =   4.0000e+10 y=   1.423392e-08   5.693574e-14   1.000000e+00"
},

{
    "location": "#JuliaDiffEq-Common-Interface-1",
    "page": "Readme",
    "title": "JuliaDiffEq Common Interface",
    "category": "section",
    "text": "The functionality of LSODA.jl can be accessed through the JuliaDiffEq common interface. To do this, you build a problem object for like:using DiffEqBase\nfunction rhs!(t, x, ydot, data)\n    ydot[1]=1.0E4 * x[2] * x[3] - .04E0 * x[1]\n    ydot[3]=3.0E7 * x[2] * x[2]\n    ydot[2]=-ydot[1] - ydot[3]\n  nothing\nend\n\ny0 = [1.,0.,0.]\ntspan = (0., 0.4)\nprob = ODEProblem(rhs!,y0,tspan)This problem is solved by LSODA by using the lsoda() algorithm in the common solve command as follows:sol = solve(prob,lsoda())Many keyword arguments can be used to control the solver, its tolerances, and its output formats. For more information, please see the DifferentialEquations.jl documentation."
},

{
    "location": "autodocs/#LSODA.lsoda",
    "page": "Docstrings",
    "title": "LSODA.lsoda",
    "category": "type",
    "text": "lsoda(f::Function, y0::Vector{Float64}, tspan::Vector{Float64}; userdata::Any=nothing, reltol::Union{Float64,Vector}=1e-4, abstol::Union{Float64,Vector}=1e-10)\n\nSolves a set of ordinary differential equations using the LSODA algorithm. The vector field encoded in an inplace f::Function needs to have the self-explanatory arguments f(t, y, ydot, data)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LSODA.lsoda_evolve!",
    "page": "Docstrings",
    "title": "LSODA.lsoda_evolve!",
    "category": "function",
    "text": "lsodaevolve!(ctx::lsodacontext_t,y::Vector{Float64},tspan::Vector{Float64})\n\nSolves a set of ordinary differential equations using the LSODA algorithm and the context variable ctx. This avoid re-allocating ctx. You have to be carefull to remember the current time or this function will return an error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LSODA.@checked_libLSODA.@pack_lsoda_common_tLSODA.@pack_lsoda_common_t!LSODA.@pack_lsoda_context_tLSODA.@pack_lsoda_context_t!LSODA.@pack_lsoda_opt_tLSODA.@pack_lsoda_opt_t!LSODA.@unpack_lsoda_common_tLSODA.@unpack_lsoda_context_tLSODA.@unpack_lsoda_opt_tLSODA.AbstractLSODAHandleLSODA.CommonFunctionLSODA.ContextHandleLSODA.LSODALSODA.LSODAAlgorithmLSODA.UserFunctionAndDataLSODA.__init__LSODA._lsoda_fLSODA.commonfunLSODA.depsfileLSODA.evalLSODA.includeLSODA.liblsodaLSODA.lsodaLSODA.lsoda_0LSODA.lsoda_common_tLSODA.lsoda_context_tLSODA.lsoda_context_t_ptrLSODA.lsoda_evolve!LSODA.lsoda_freeLSODA.lsoda_opt_tLSODA.lsoda_prepareLSODA.lsoda_resetLSODA.lsodafunLSODA.old_cfunctionLSODA.release_handleLSODA.solveLSODA.warnkeywordsLSODA.warnlist"
},

]}
