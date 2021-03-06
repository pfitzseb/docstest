var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Sundials.jl-1",
    "page": "Readme",
    "title": "Sundials.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Travis) (Image: AppVoyer) (Image: Coveralls) (Image: Sundials)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Sundials.jl is a Julia package that interfaces to the Sundials library. Sundials (the C library and this package) provides the following:CVODES - for integration and sensitivity analysis of ODEs.         CVODES treats stiff and nonstiff ODE systems of the form         y\' = f(t,y,p), y(t0) = y0(p),         where p is a set of parameters.\nARKODE - for integration of non-stiff, stiff, and mixed mode         ODEs via its explicit, implicit, and IMEX Runge-Kutta         methods on ODEs of the form My\' = f(t,y,p), y(t0) = y0(p)         for a set of parameters p.\nIDAS   - for integration and sensitivity analysis of DAEs.         IDAS treats DAE systems of the form         F(t,y,y\',p) = 0, y(t0) = y0(p), y\'(t0) = y0\'(p)\nKINSOL - for solution of nonlinear algebraic systems.         KINSOL treats nonlinear systems of the form         F(u) = 0Note that CVODES and IDAS contain all functions provided by CVODE and IDA (for integration without sensitivity analysis). If you need to use the latter, you can set enable_sensitivities=false in deps/build.jl and (re)build the package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, use the package manager:Pkg.add(\"Sundials\")This should download and install the Sundials libraries and register the package. On Windows precompiled binaries are used, while on Unix and OSX Sundials is built from its sources (provided the necessary tools are available). If you have Sundials already installed, make sure that Julia can find it, e.g., viapush!(Base.DL_LOAD_PATH, \"/opt/local/lib\")before you install the package. Downloading and/or re-building of the library can be triggered by Pkg.build(\"Sundials\") if anything goes wrong.To test the installation usePkg.test(\"Sundials\")which currently runs some of the examples in the examples directory."
},

{
    "location": "#Common-Interface-API-1",
    "page": "Readme",
    "title": "Common Interface API",
    "category": "section",
    "text": "This package is part of the JuliaDiffEq common interface. This is documented in the DifferentialEquaitons.jl documentation. Thus the ODE tutorial applies. For example, the Lorenz attractor can be solved with CVODE_Adams as follows:using Sundials\nfunction lorenz(du,u,p,t)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nend\nu0 = [1.0;0.0;0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(lorenz,u0,tspan)\nsol = solve(prob,CVODE_Adams())\nusing Plots; plot(sol,vars=(1,2,3))Sundials.jl exports the CVODE_BDF, CVODE_Adams, and ARKODE methods for ODEs which are documented in the ODE Solvers page, and IDA which is documented in the DAE solvers page. Additionally, the ARKODE method can be used on SplitODEProblems to solve ODEs in IMEX form."
},

{
    "location": "#KINSOL-High-Level-API-1",
    "page": "Readme",
    "title": "KINSOL High Level API",
    "category": "section",
    "text": "Along with the ODE solvers, Sundials contains the KINSOL nonlinear solver. It\'s called via:kinsol(f, y0::Vector{Float64};\n                userdata::Any = nothing,\n                linear_solver=:Dense, jac_upper=0, jac_lower=0,\n                stored_upper = jac_upper + jac_lower)where f(res,y) is an in-place function that computes the residual f(y)-res=0, and KINSOL attempts to find y such that res=0. This method is generally quite fast and the choice linear_solver=:Band is well-suited for problems with a banded Jacobian (you must specify the upper and lower band sizes). However, this is not as robust as many other techniques like trust-region methods, and thus we recommend NLsolve.jl for more general nonlinear solving."
},

{
    "location": "#Direct-API-1",
    "page": "Readme",
    "title": "Direct API",
    "category": "section",
    "text": "This package closely follows the Sundials C API. At a slightly higher level, many (but not all) Sundials.jl functions support passing Julia objects (like Arrays) instead of Sundials objects (like N_Vectors). The Julia package Clang.jl was used to wrap Sundials. This directly uses Sundials\' headers sort-of like SWIG. Thus the general C documentation is the documentation for the direct API. See the test directory for usage examples of the direct interface.For the wrapping code, see src/wrap_sundials.jl. Because of Clang.jl, Sundials.jl provides almost full coverage of the Sundials library (the serial version). A few things to note:Macros like DENSE_ELEM are not available.\nNothing is exported from the module. You need to put Sundials. in front of everything.\nThe parallel versions of Sundials which require different N_Vector types have not been wrapped."
},

{
    "location": "#Citing-1",
    "page": "Readme",
    "title": "Citing",
    "category": "section",
    "text": "If you use this library, please cite both Sundials and the JuliaDiffEq project.Rackauckas, C. & Nie, Q., (2017). DifferentialEquations.jl – A Performant and Feature-Rich Ecosystem for Solving Differential Equations in Julia. Journal of Open Research Software. 5(1), p.15. DOI: http://doi.org/10.5334/jors.151\nA. C. Hindmarsh, P. N. Brown, K. E. Grant, S. L. Lee, R. Serban, D. E. Shumaker, and C. S. Woodward, “SUNDIALS: Suite of Nonlinear and Differential/Algebraic Equation Solvers,” ACM Transactions on Mathematical Software, 31(3), pp. 363-396, 2005. Also available as LLNL technical report UCRL-JP-200037."
},

]}
