var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OrdinaryDiffEq.jl-1",
    "page": "Readme",
    "title": "OrdinaryDiffEq.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov)OrdinaryDiffEq.jl is a component package in the DifferentialEquations ecosystem. It holds the ordinary differential equation solvers and utilities. While completely independent and usable on its own, users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "OrdinaryDiffEq.jl is part of the JuliaDiffEq common interface, but can be used independently of DifferentialEquations.jl. The only requirement is that the user passes an OrdinaryDiffEq.jl algorithm to solve. For example, we can solve the ODE tutorial from the docs using the Tsit5() algorithm:using OrdinaryDiffEq\nf(u,p,t) = 1.01*u\nu0=1/2\ntspan = (0.0,1.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),reltol=1e-8,abstol=1e-8)\nusing Plots\nplot(sol,linewidth=5,title=\"Solution to the linear ODE with a thick line\",\n     xaxis=\"Time (t)\",yaxis=\"u(t) (in μm)\",label=\"My Thick Line!\") # legend=false\nplot!(sol.t, t->0.5*exp(1.01t),lw=3,ls=:dash,label=\"True Solution!\")That example uses the out-of-place syntax f(u,p,t), while the inplace syntax (more efficient for systems of equations) is shown in the Lorenz example:using OrdinaryDiffEq\nfunction lorenz(du,u,p,t)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nend\nu0 = [1.0;0.0;0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(lorenz,u0,tspan)\nsol = solve(prob,Tsit5())\nusing Plots; plot(sol,vars=(1,2,3))For \"refined ODEs\" like dynamical equations and SecondOrderODEProblems, refer to the DiffEqDocs. For example, in DiffEqTutorials.jl we show how to solve equations of motion using symplectic methods:function HH_acceleration(dv,v,u,p,t)\n    x,y  = u\n    dx,dy = dv\n    dv[1] = -x - 2x*y\n    dv[2] = y^2 - y -x^2\nend\ninitial_positions = [0.0,0.1]\ninitial_velocities = [0.5,0.0]\nprob = SecondOrderODEProblem(HH_acceleration,initial_velocities,initial_positions,tspan)\nsol2 = solve(prob, KahanLi8(), dt=1/10);Other refined forms are IMEX and semi-linear ODEs (for exponential integrators)."
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "For the list of available solvers, please refer to the DifferentialEquations.jl ODE Solvers, Dynamical ODE Solvers, and the Split ODE Solvers pages."
},

{
    "location": "autodocs/#OrdinaryDiffEq.@bs5unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@bs5unpack",
    "category": "macro",
    "text": "Coefficients taken from RKSuite\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@dp5pre0",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@dp5pre0",
    "category": "macro",
    "text": "Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 192\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@dprkn6unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@dprkn6unpack",
    "category": "macro",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@owrenzen3unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@owrenzen3unpack",
    "category": "macro",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@owrenzen4unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@owrenzen4unpack",
    "category": "macro",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@owrenzen5unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@owrenzen5unpack",
    "category": "macro",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@rosenbrock2332unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@rosenbrock2332unpack",
    "category": "macro",
    "text": "From MATLAB ODE Suite by Shampine\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@ssprkpre0",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@ssprkpre0",
    "category": "macro",
    "text": "Second order strong stability preserving (SSP) interpolant.\n\nKetcheson, Lóczi, Jangabylova, Kusmanov: Dense output for SSP RK methods (2017).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@tsit5unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@tsit5unpack",
    "category": "macro",
    "text": "Runge–Kutta pairs of order 5(4) satisfying only the first column simplifying assumption\n\nCh. Tsitouras\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@vern6unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@vern6unpack",
    "category": "macro",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@vern7unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@vern7unpack",
    "category": "macro",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@vern8unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@vern8unpack",
    "category": "macro",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.@vern9unpack",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.@vern9unpack",
    "category": "macro",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Anas5ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Anas5ConstantCache",
    "category": "type",
    "text": "An Optimized Runge-Kutta method for the solution of Orbital Problems by Z.A. Anastassi and T.E. Simos Journal of Computational and Applied Mathematics, Volume 175, Issue 1, 1 March 2005, Pages 1 to 9.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS3ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS3ConstantCache",
    "category": "type",
    "text": "constructBogakiShampine3()\n\nConstructs the tableau object for the Bogakai-Shampine Order 2/3 method.\n\n\n\n\n\nconstructBogakiShampine3()\n\nConstructs the tableau object for the Bogakai-Shampine Order 2/3 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5ConstantCache",
    "category": "type",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\n\n\n\n\nAn Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5Interp",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5Interp",
    "category": "function",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\nUsed in the lazy construction of the dense output\n\nk9, k10, k11 are not computed until called in the dense routine\n\n\n\n\n\nAn Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\nUsed in the lazy construction of the dense output\n\nk9, k10, k11 are not computed until called in the dense routine\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5Interp_polyweights",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5Interp_polyweights",
    "category": "function",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\nThese coefficients are taken from RKSuite\n\nNote that RKSuite has an error: r081 should be 0 and r011 should be 1. This is pretty easy to spot since the first order interpolation is linear from y₀.\n\n\n\n\n\nCoefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\nThese coefficients are taken from RKSuite\n\nNote that RKSuite has an error: r081 should be 0 and r011 should be 1. This is pretty easy to spot since the first order interpolation is linear from y₀.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin10ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin10ConstantCache",
    "category": "type",
    "text": "constructFeagin10\n\n\n\n\n\nconstructFeagin10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin12ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin12ConstantCache",
    "category": "type",
    "text": "constructFeagin12\n\n\n\n\n\nconstructFeagin12\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin14ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin14ConstantCache",
    "category": "type",
    "text": "constructFeagin14\n\n\n\n\n\nconstructFeagin14\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.NLFunctional",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.NLFunctional",
    "category": "type",
    "text": "(S::NLFunctional)(integrator) -> (z, η, iter, fail_convergence)\n\nPerform functional iteration that is used by implicit methods, where z is the solution, η is used to measure the iteration error (see [HW96]), iter is the number of iteration, and fail_convergence reports whether the algorithm succeed.  It solves\n\nG(z) = dtf(tmp + γz p t+ch)\nz = G(z)\n\nby iterating\n\nzᵏ¹ = G(zᵏ)\n\n[HW96]: Ernst Hairer and Gerhard Wanner, \"Solving Ordinary Differential\n\nEquations II, Springer Series in Computational Mathematics. ISBN 978-3-642-05221-7. Section IV.8. doi:10.1007/978-3-642-05221-7\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.NLNewton",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.NLNewton",
    "category": "type",
    "text": "(S::NLNewton)(integrator) -> (z, η, iter, fail_convergence)\n\nPerform numerically stable modified NLNewton iteration that is specialized for implicit methods (see [HS96] and [HW96]), where z is the solution, η is used to measure the iteration error (see [HW96]), iter is the number of iteration, and fail_convergence reports whether the algorithm succeed. It solves\n\nG(z) = dtf(tmp + γz p t+ch) - z = 0\n\nby iterating\n\nW Δᵏ = dtf(tmp + γzᵏ p t+ch) - zᵏ\nzᵏ¹ = zᵏ + Δᵏ\n\nwhere W=M-dt⋅γJ, M is the mass matrix, dt is the step size, γ is a constant, and J is the Jacobian matrix.\n\n[HS96]: M.E.Hoseaa and L.F.Shampine, \"Analysis and implementation of TR-BDF2\",\n\nApplied Numerical Mathematics, Volume 20, Issues 1–2, February 1996, Pages 21-37. doi:10.1016/0168-9274(95)00115-8\n\n[HW96]: Ernst Hairer and Gerhard Wanner, \"Solving Ordinary Differential\n\nEquations II, Springer Series in Computational Mathematics. ISBN 978-3-642-05221-7. Section IV.8. doi:10.1007/978-3-642-05221-7\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ODEIntegrator",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ODEIntegrator",
    "category": "type",
    "text": "ODEIntegrator\n\nFundamental struct allowing interactively stepping through the numerical solving of a differential equation. The full documentation is hosted here: http://docs.juliadiffeq.org/latest/basics/integrator.html. This docstring describes basic functionality only!\n\nInitialize using integrator = init(prob::ODEProblem, alg; kwargs...). The keyword args which are accepted are the same Common Solver Options used by solve.\n\nFor reference, relevant fields of the ODEIntegrator are:\n\nt - time of the proposed step\nu - value at the proposed step\nopts - common solver options\nalg - the algorithm associated with the solution\nf - the function being solved\nsol - the current state of the solution\ntprev - the last timepoint\nuprev - the value at the last timepoint\n\nopts holds all of the common solver options, and can be mutated to change the solver characteristics. For example, to modify the absolute tolerance for the future timesteps, one can do:\n\nintegrator.opts.abstol = 1e-9\n\nFor more info see the linked documentation page.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ODE_DEFAULT_TABLEAU",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ODE_DEFAULT_TABLEAU",
    "category": "constant",
    "text": "ODEDEFAULTTABLEAU\n\nSets the default tableau for the ODE solver. Currently Dormand-Prince 4/5.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.TanYam7ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.TanYam7ConstantCache",
    "category": "type",
    "text": "On the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n\n\nOn the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Tsit5Interp",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Tsit5Interp",
    "category": "function",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\nThese are the coefficients of the expanded form of the polynomials from\n\nRunge–Kutta pairs of order 5(4) satisfying only the first column simplifying assumption\n\nCh. Tsitouras\n\n\n\n\n\nCoefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\nThese are the coefficients of the expanded form of the polynomials from\n\nRunge–Kutta pairs of order 5(4) satisfying only the first column simplifying assumption\n\nCh. Tsitouras\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.TsitPap8ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.TsitPap8ConstantCache",
    "category": "type",
    "text": "Cheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas,  Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n\n\nCheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas,  Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern6ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern6ConstantCache",
    "category": "type",
    "text": "From Verner\'s Website\n\n\n\n\n\nFrom Verner\'s Website\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern6Interp_polyweights",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern6Interp_polyweights",
    "category": "function",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\n\n\n\n\nCoefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern9ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern9ConstantCache",
    "category": "type",
    "text": "From Verner\'s Webiste\n\n\n\n\n\nFrom Verner\'s Webiste\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.WOperator",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.WOperator",
    "category": "type",
    "text": "WOperator(mass_matrix,gamma,J[;transform=false])\n\nA linear operator that represents the W matrix of an ODEProblem, defined as\n\nW = MM - gamma J\n\nor, if transform=true:\n\nW = frac1gammaMM - J\n\nwhere MM is the mass matrix (a regular AbstractMatrix or a UniformScaling), γ is a real number proportional to the time step, and J is the Jacobian operator (must be a AbstractDiffEqLinearOperator). A WOperator can also be constructed using a *DEFunction directly as\n\nWOperator(f,gamma[;transform=false])\n\nf needs to have a jacobian and jac_prototype, but the prototype does not need to be a diffeq operator –- it will automatically be converted to one.\n\nWOperator supports lazy * and mul! operations, the latter utilizing an internal cache (can be specified in the constructor; default to regular Vector). It supports all of AbstractDiffEqLinearOperator\'s interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq._ode_interpolant",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq._ode_interpolant",
    "category": "function",
    "text": "\n\n\n\nFrom MATLAB ODE Suite by Shampine\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "By default, Hermite interpolant so update the derivative at the two ends\n\n\n\n\n\nAn Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\nCalled to add the extra k9, k10, k11 steps for the Order 5 interpolation when needed\n\n\n\n\n\nAn Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\nCalled to add the extra k9, k10, k11 steps for the Order 5 interpolation when needed\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.alg_cache_expRK",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.alg_cache_expRK",
    "category": "function",
    "text": "alg_cache_expRK(alg,u,uEltypeNoUnits,uprev,f,t,dt,p,du1,tmp,dz,plist)\n\nConstruct the non-standard caches (not uType or rateType) for ExpRK integrators.\n\nplist is a list of integers each corresponding to the order of a phiv(!) call in perform_step!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.alg_cache_exprb",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.alg_cache_exprb",
    "category": "function",
    "text": "alg_cache_exprb(alg,uEltypeNoUnits,uprev,f,t,p,du1,tmp,dz,plist)\n\nConstruct the non-standard caches (not uType or rateType) for Exprb integrators.\n\nplist is a list of integers each corresponding to the order of a phiv(!) call in perform_step!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calc_J",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calc_J",
    "category": "function",
    "text": "calc_J(integrator,cache,is_compos)\n\nInterface for calculating the jacobian.\n\nFor constant caches, a new jacobian object is returned whereas for mutable caches cache.J is updated. In both cases, if integrator.f has a custom jacobian update function, then it will be called for the update. Otherwise, either ForwardDiff or finite difference will be used depending on the jac_config of the cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calc_J!",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calc_J!",
    "category": "function",
    "text": "calc_J!(integrator,cache,is_compos)\n\nInterface for calculating the jacobian.\n\nFor constant caches, a new jacobian object is returned whereas for mutable caches cache.J is updated. In both cases, if integrator.f has a custom jacobian update function, then it will be called for the update. Otherwise, either ForwardDiff or finite difference will be used depending on the jac_config of the cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calculate_residuals",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calculate_residuals",
    "category": "function",
    "text": "calculate_residuals(ũ, u₀, u₁, α, ρ)\n\nCalculate element-wise residuals\n\nfracũα+maxu₀u₁*ρ\n\n\n\n\n\ncalculate_residuals(u₀, u₁, α, ρ)\n\nCalculate element-wise residuals\n\nfracũα+maxu₀u₁*ρ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calculate_residuals!",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calculate_residuals!",
    "category": "function",
    "text": "calculate_residuals!(out, ũ, u₀, u₁, α, ρ)\n\nSave element-wise residuals\n\nfracũα+maxu₀u₁*ρ\n\nin out.\n\n\n\n\n\ncalculate_residuals!(out, u₀, u₁, α, ρ)\n\nSave element-wise residuals\n\nfracũα+maxu₀u₁*ρ\n\nin out.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.choosedeg!",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.choosedeg!",
    "category": "function",
    "text": "choosedeg!(cache) -> nothing\n\nCalculate ms[mdeg] (the degree of the Chebyshev polynomial) and cache.recind (the index of recurrence parameters for that degree), where recf[recind:(recind+ms[mdeg]-2)] are the μ,κ pairs for the mdeg degree method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.constructDormandPrince",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.constructDormandPrince",
    "category": "function",
    "text": "constructDormandPrince()\n\nConstructs the tableau object for the Dormand-Prince Order 4/5 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.expRK_operators",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.expRK_operators",
    "category": "function",
    "text": "expRK_operators(alg,dt,A) -> ops\n\nCompute operator(s) for an ExpRK algorithm. dt is the time step and A is the matrix form of the linear operator (from either a linear problem or a SplitODEProblem). All ExpRK methods that use caching operators should implement this method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.hermite_interpolant",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.hermite_interpolant",
    "category": "function",
    "text": "Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 190\n\nHerimte Interpolation, chosen if no other dispatch for ode_interpolant\n\n\n\n\n\nHerimte Interpolation, chosen if no other dispatch for ode_interpolant\n\n\n\n\n\nHerimte Interpolation, chosen if no other dispatch for ode_interpolant\n\n\n\n\n\nHerimte Interpolation, chosen if no other dispatch for ode_interpolant\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.linear_interpolant",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.linear_interpolant",
    "category": "function",
    "text": "Linear Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ode_interpolant",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ode_interpolant",
    "category": "function",
    "text": "odeinterpolant and odeinterpolant! dispatch\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ode_interpolation",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ode_interpolation",
    "category": "function",
    "text": "ode_interpolation(tvals,ts,timeseries,ks)\n\nGet the value at tvals where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\node_interpolation(tval::Number,ts,timeseries,ks)\n\nGet the value at tval where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ode_interpolation!",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ode_interpolation!",
    "category": "function",
    "text": "ode_interpolation(tvals,ts,timeseries,ks)\n\nGet the value at tvals where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\node_interpolation!(out,tval::Number,ts,timeseries,ks)\n\nGet the value at tval where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.reset_alg_dependent_opts!",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.reset_alg_dependent_opts!",
    "category": "function",
    "text": "If no user default, then this will change the default to the defaults for the second algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ssp_coefficient",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ssp_coefficient",
    "category": "function",
    "text": "ssp_coefficient(alg)\n\nReturn the SSP coefficient of the ODE algorithm alg. If one time step of size dt with alg can be written as a convex combination of explicit Euler steps with step sizes cᵢ * dt, the SSP coefficient is the minimal value of 1/cᵢ.\n\nExamples\n\njulia> ssp_coefficient(SSPRK104())\n6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OrdinaryDiffEq.@bs5pre0OrdinaryDiffEq.@bs5pre1OrdinaryDiffEq.@bs5unpackOrdinaryDiffEq.@cacheOrdinaryDiffEq.@dp5pre0OrdinaryDiffEq.@dp5pre1OrdinaryDiffEq.@dp5pre2OrdinaryDiffEq.@dp5pre3OrdinaryDiffEq.@dp5pre4OrdinaryDiffEq.@dprkn6pre0OrdinaryDiffEq.@dprkn6unpackOrdinaryDiffEq.@iipnlsolveOrdinaryDiffEq.@oopnlsolveOrdinaryDiffEq.@owrenzen3pre0OrdinaryDiffEq.@owrenzen3pre1OrdinaryDiffEq.@owrenzen3pre2OrdinaryDiffEq.@owrenzen3pre3OrdinaryDiffEq.@owrenzen3unpackOrdinaryDiffEq.@owrenzen4pre0OrdinaryDiffEq.@owrenzen4pre1OrdinaryDiffEq.@owrenzen4pre2OrdinaryDiffEq.@owrenzen4pre3OrdinaryDiffEq.@owrenzen4pre4OrdinaryDiffEq.@owrenzen4unpackOrdinaryDiffEq.@owrenzen5pre0OrdinaryDiffEq.@owrenzen5pre1OrdinaryDiffEq.@owrenzen5pre2OrdinaryDiffEq.@owrenzen5pre3OrdinaryDiffEq.@owrenzen5pre4OrdinaryDiffEq.@owrenzen5pre5OrdinaryDiffEq.@owrenzen5unpackOrdinaryDiffEq.@rosenbrock2332pre0OrdinaryDiffEq.@rosenbrock2332pre1OrdinaryDiffEq.@rosenbrock2332unpackOrdinaryDiffEq.@ssprkpre0OrdinaryDiffEq.@ssprkpre1OrdinaryDiffEq.@ssprkpre2OrdinaryDiffEq.@swap!OrdinaryDiffEq.@tight_loop_macrosOrdinaryDiffEq.@tsit5pre0OrdinaryDiffEq.@tsit5pre1OrdinaryDiffEq.@tsit5pre2OrdinaryDiffEq.@tsit5pre3OrdinaryDiffEq.@tsit5pre4OrdinaryDiffEq.@tsit5unpackOrdinaryDiffEq.@vern6pre0OrdinaryDiffEq.@vern6pre1OrdinaryDiffEq.@vern6unpackOrdinaryDiffEq.@vern7pre0OrdinaryDiffEq.@vern7pre1OrdinaryDiffEq.@vern7unpackOrdinaryDiffEq.@vern8pre0OrdinaryDiffEq.@vern8pre1OrdinaryDiffEq.@vern8unpackOrdinaryDiffEq.@vern9pre0OrdinaryDiffEq.@vern9pre1OrdinaryDiffEq.@vern9pre2OrdinaryDiffEq.@vern9pre3OrdinaryDiffEq.@vern9pre4OrdinaryDiffEq.@vern9unpackOrdinaryDiffEq.AB3OrdinaryDiffEq.AB3CacheOrdinaryDiffEq.AB3ConstantCacheOrdinaryDiffEq.AB4OrdinaryDiffEq.AB4CacheOrdinaryDiffEq.AB4ConstantCacheOrdinaryDiffEq.AB5OrdinaryDiffEq.AB5CacheOrdinaryDiffEq.AB5ConstantCacheOrdinaryDiffEq.ABDF2OrdinaryDiffEq.ABDF2CacheOrdinaryDiffEq.ABDF2ConstantCacheOrdinaryDiffEq.ABM32OrdinaryDiffEq.ABM32CacheOrdinaryDiffEq.ABM32ConstantCacheOrdinaryDiffEq.ABM43OrdinaryDiffEq.ABM43CacheOrdinaryDiffEq.ABM43ConstantCacheOrdinaryDiffEq.ABM54OrdinaryDiffEq.ABM54CacheOrdinaryDiffEq.ABM54ConstantCacheOrdinaryDiffEq.AN5OrdinaryDiffEq.AN5CacheOrdinaryDiffEq.AN5ConstantCacheOrdinaryDiffEq.AbstractAnalyticalProblemOrdinaryDiffEq.AbstractNLSolverOrdinaryDiffEq.AbstractNLSolverCacheOrdinaryDiffEq.AffineDiffEqOperatorOrdinaryDiffEq.AnalyticalProblemOrdinaryDiffEq.Anas5OrdinaryDiffEq.Anas5CacheOrdinaryDiffEq.Anas5ConstantCacheOrdinaryDiffEq.AutoAlgSwitchOrdinaryDiffEq.AutoDP5OrdinaryDiffEq.AutoSwitchOrdinaryDiffEq.AutoTsit5OrdinaryDiffEq.AutoVern6OrdinaryDiffEq.AutoVern7OrdinaryDiffEq.AutoVern8OrdinaryDiffEq.AutoVern9OrdinaryDiffEq.BS3OrdinaryDiffEq.BS3CacheOrdinaryDiffEq.BS3ConstantCacheOrdinaryDiffEq.BS5OrdinaryDiffEq.BS5CacheOrdinaryDiffEq.BS5ConstantCacheOrdinaryDiffEq.BS5InterpOrdinaryDiffEq.BS5Interp_polyweightsOrdinaryDiffEq.BVProblemOrdinaryDiffEq.CFRLDDRK64OrdinaryDiffEq.CFRLDDRK64ConstantCacheOrdinaryDiffEq.CNAB2OrdinaryDiffEq.CNAB2CacheOrdinaryDiffEq.CNAB2ConstantCacheOrdinaryDiffEq.CNLF2OrdinaryDiffEq.CNLF2CacheOrdinaryDiffEq.CNLF2ConstantCacheOrdinaryDiffEq.CallbackSetOrdinaryDiffEq.CalvoSanz4OrdinaryDiffEq.CalvoSanz4ConstantCacheOrdinaryDiffEq.CandyRoz4OrdinaryDiffEq.CandyRoz4ConstantCacheOrdinaryDiffEq.CarpenterKennedy2N54OrdinaryDiffEq.CarpenterKennedy2N54ConstantCacheOrdinaryDiffEq.Cash4OrdinaryDiffEq.Cash4CacheOrdinaryDiffEq.Cash4ConstantCacheOrdinaryDiffEq.Cash4TableauOrdinaryDiffEq.CompiledFloatsOrdinaryDiffEq.CompositeAlgorithmOrdinaryDiffEq.CompositeCacheOrdinaryDiffEq.CompositeInterpolationDataOrdinaryDiffEq.ContinuousCallbackOrdinaryDiffEq.DAEFunctionOrdinaryDiffEq.DAEProblemOrdinaryDiffEq.DAESolutionOrdinaryDiffEq.DDEFunctionOrdinaryDiffEq.DDEProblemOrdinaryDiffEq.DEDataArrayOrdinaryDiffEq.DEDataMatrixOrdinaryDiffEq.DEDataVectorOrdinaryDiffEq.DEFAULT_LINSOLVEOrdinaryDiffEq.DEOptionsOrdinaryDiffEq.DESolutionOrdinaryDiffEq.DGLDDRK73_COrdinaryDiffEq.DGLDDRK73_CConstantCacheOrdinaryDiffEq.DGLDDRK84_COrdinaryDiffEq.DGLDDRK84_CConstantCacheOrdinaryDiffEq.DGLDDRK84_FOrdinaryDiffEq.DGLDDRK84_FConstantCacheOrdinaryDiffEq.DP5OrdinaryDiffEq.DP5CacheOrdinaryDiffEq.DP5ConstantCacheOrdinaryDiffEq.DP5ThreadedOrdinaryDiffEq.DP5ThreadedCacheOrdinaryDiffEq.DP5_dense_dsOrdinaryDiffEq.DP8OrdinaryDiffEq.DP8CacheOrdinaryDiffEq.DP8ConstantCacheOrdinaryDiffEq.DP8InterpOrdinaryDiffEq.DP8Interp_polyweightsOrdinaryDiffEq.DPRKN12OrdinaryDiffEq.DPRKN12CacheOrdinaryDiffEq.DPRKN12ConstantCacheOrdinaryDiffEq.DPRKN6OrdinaryDiffEq.DPRKN6CacheOrdinaryDiffEq.DPRKN6ConstantCacheOrdinaryDiffEq.DPRKN8OrdinaryDiffEq.DPRKN8CacheOrdinaryDiffEq.DPRKN8ConstantCacheOrdinaryDiffEq.DiffCacheOrdinaryDiffEq.DiffEqBaseOrdinaryDiffEq.DiffEqNLSolveTagOrdinaryDiffEq.DiscreteCallbackOrdinaryDiffEq.DiscreteFunctionOrdinaryDiffEq.DiscreteProblemOrdinaryDiffEq.DynamicalODEFunctionOrdinaryDiffEq.DynamicalODEProblemOrdinaryDiffEq.EPIRK4s3AOrdinaryDiffEq.EPIRK4s3ACacheOrdinaryDiffEq.EPIRK4s3AConstantCacheOrdinaryDiffEq.EPIRK4s3BOrdinaryDiffEq.EPIRK4s3BCacheOrdinaryDiffEq.EPIRK4s3BConstantCacheOrdinaryDiffEq.EPIRK5P1OrdinaryDiffEq.EPIRK5P1CacheOrdinaryDiffEq.EPIRK5P1ConstantCacheOrdinaryDiffEq.EPIRK5P2OrdinaryDiffEq.EPIRK5P2CacheOrdinaryDiffEq.EPIRK5P2ConstantCacheOrdinaryDiffEq.EPIRK5s3OrdinaryDiffEq.EPIRK5s3CacheOrdinaryDiffEq.EPIRK5s3ConstantCacheOrdinaryDiffEq.ERKN4OrdinaryDiffEq.ERKN4CacheOrdinaryDiffEq.ERKN4ConstantCacheOrdinaryDiffEq.ERKN5OrdinaryDiffEq.ERKN5CacheOrdinaryDiffEq.ERKN5ConstantCacheOrdinaryDiffEq.ESDIRK4TableauOrdinaryDiffEq.ETD1OrdinaryDiffEq.ETD2OrdinaryDiffEq.ETD2CacheOrdinaryDiffEq.ETD2ConstantCacheOrdinaryDiffEq.ETD2FsalOrdinaryDiffEq.ETDRK2OrdinaryDiffEq.ETDRK2CacheOrdinaryDiffEq.ETDRK2ConstantCacheOrdinaryDiffEq.ETDRK3OrdinaryDiffEq.ETDRK3CacheOrdinaryDiffEq.ETDRK3ConstantCacheOrdinaryDiffEq.ETDRK4OrdinaryDiffEq.ETDRK4CacheOrdinaryDiffEq.ETDRK4ConstantCacheOrdinaryDiffEq.EXPRB53s3OrdinaryDiffEq.EXPRB53s3CacheOrdinaryDiffEq.EXPRB53s3ConstantCacheOrdinaryDiffEq.EulerOrdinaryDiffEq.EulerCacheOrdinaryDiffEq.EulerConstantCacheOrdinaryDiffEq.Exp4OrdinaryDiffEq.Exp4CacheOrdinaryDiffEq.Exp4ConstantCacheOrdinaryDiffEq.ExpRKCacheOrdinaryDiffEq.ExpRKConstantCacheOrdinaryDiffEq.ExplicitRKOrdinaryDiffEq.ExplicitRKCacheOrdinaryDiffEq.ExplicitRKConstantCacheOrdinaryDiffEq.ExponentialAlgorithmOrdinaryDiffEq.Exprb32OrdinaryDiffEq.Exprb32CacheOrdinaryDiffEq.Exprb32ConstantCacheOrdinaryDiffEq.Exprb43OrdinaryDiffEq.Exprb43CacheOrdinaryDiffEq.Exprb43ConstantCacheOrdinaryDiffEq.Feagin10OrdinaryDiffEq.Feagin10CacheOrdinaryDiffEq.Feagin10ConstantCacheOrdinaryDiffEq.Feagin12OrdinaryDiffEq.Feagin12CacheOrdinaryDiffEq.Feagin12ConstantCacheOrdinaryDiffEq.Feagin14OrdinaryDiffEq.Feagin14CacheOrdinaryDiffEq.Feagin14ConstantCacheOrdinaryDiffEq.FunctionMapOrdinaryDiffEq.FunctionMapCacheOrdinaryDiffEq.FunctionMapConstantCacheOrdinaryDiffEq.FunctionMap_scale_by_timeOrdinaryDiffEq.GRK4AOrdinaryDiffEq.GRK4AConstantCacheOrdinaryDiffEq.GRK4TOrdinaryDiffEq.GRK4TConstantCacheOrdinaryDiffEq.GeneralRosenbrockOrdinaryDiffEq.GenericIIF1OrdinaryDiffEq.GenericIIF1CacheOrdinaryDiffEq.GenericIIF1ConstantCacheOrdinaryDiffEq.GenericIIF2OrdinaryDiffEq.GenericIIF2CacheOrdinaryDiffEq.GenericIIF2ConstantCacheOrdinaryDiffEq.GenericImplicitEulerOrdinaryDiffEq.GenericImplicitEulerCacheOrdinaryDiffEq.GenericImplicitEulerConstantCacheOrdinaryDiffEq.GenericTrapezoidOrdinaryDiffEq.GenericTrapezoidCacheOrdinaryDiffEq.GenericTrapezoidConstantCacheOrdinaryDiffEq.HSLDDRK64OrdinaryDiffEq.HSLDDRK64ConstantCacheOrdinaryDiffEq.Hairer4OrdinaryDiffEq.Hairer42OrdinaryDiffEq.Hairer42TableauOrdinaryDiffEq.Hairer4CacheOrdinaryDiffEq.Hairer4ConstantCacheOrdinaryDiffEq.Hairer4TableauOrdinaryDiffEq.HeunOrdinaryDiffEq.HeunCacheOrdinaryDiffEq.HeunConstantCacheOrdinaryDiffEq.HochOst4OrdinaryDiffEq.HochOst4CacheOrdinaryDiffEq.HochOst4ConstantCacheOrdinaryDiffEq.IMEXEulerOrdinaryDiffEq.IRKN3OrdinaryDiffEq.IRKN3CacheOrdinaryDiffEq.IRKN3ConstantCacheOrdinaryDiffEq.IRKN4OrdinaryDiffEq.IRKN4CacheOrdinaryDiffEq.IRKN4ConstantCacheOrdinaryDiffEq.ImplicitEulerOrdinaryDiffEq.ImplicitEulerCacheOrdinaryDiffEq.ImplicitEulerConstantCacheOrdinaryDiffEq.ImplicitMidpointOrdinaryDiffEq.ImplicitMidpointCacheOrdinaryDiffEq.ImplicitMidpointConstantCacheOrdinaryDiffEq.ImplicitRHSOrdinaryDiffEq.ImplicitRHS_ScalarOrdinaryDiffEq.InterpolationDataOrdinaryDiffEq.JVODEOrdinaryDiffEq.JVODECacheOrdinaryDiffEq.JVODEConstantCacheOrdinaryDiffEq.JVODE_AdamsOrdinaryDiffEq.JVODE_BDFOrdinaryDiffEq.KahanLi6OrdinaryDiffEq.KahanLi6ConstantCacheOrdinaryDiffEq.KahanLi8OrdinaryDiffEq.KahanLi8CacheOrdinaryDiffEq.KahanLi8ConstantCacheOrdinaryDiffEq.KenCarp3OrdinaryDiffEq.KenCarp3CacheOrdinaryDiffEq.KenCarp3ConstantCacheOrdinaryDiffEq.KenCarp3TableauOrdinaryDiffEq.KenCarp4OrdinaryDiffEq.KenCarp4CacheOrdinaryDiffEq.KenCarp4ConstantCacheOrdinaryDiffEq.KenCarp4TableauOrdinaryDiffEq.KenCarp5OrdinaryDiffEq.KenCarp5CacheOrdinaryDiffEq.KenCarp5ConstantCacheOrdinaryDiffEq.KenCarp5TableauOrdinaryDiffEq.Kvaerno3OrdinaryDiffEq.Kvaerno3CacheOrdinaryDiffEq.Kvaerno3ConstantCacheOrdinaryDiffEq.Kvaerno3TableauOrdinaryDiffEq.Kvaerno4OrdinaryDiffEq.Kvaerno4CacheOrdinaryDiffEq.Kvaerno4ConstantCacheOrdinaryDiffEq.Kvaerno4TableauOrdinaryDiffEq.Kvaerno5OrdinaryDiffEq.Kvaerno5CacheOrdinaryDiffEq.Kvaerno5ConstantCacheOrdinaryDiffEq.Kvaerno5TableauOrdinaryDiffEq.LawsonEulerOrdinaryDiffEq.LawsonEulerCacheOrdinaryDiffEq.LawsonEulerConstantCacheOrdinaryDiffEq.LinSolveFactorizeOrdinaryDiffEq.LinearExponentialOrdinaryDiffEq.LinearExponentialCacheOrdinaryDiffEq.LinearExponentialConstantCacheOrdinaryDiffEq.LowStorageRK2CCacheOrdinaryDiffEq.LowStorageRK2CConstantCacheOrdinaryDiffEq.LowStorageRK2NCacheOrdinaryDiffEq.LowStorageRK2NConstantCacheOrdinaryDiffEq.LowStorageRK3SCacheOrdinaryDiffEq.LowStorageRK3SConstantCacheOrdinaryDiffEq.MEBDF2OrdinaryDiffEq.MEBDF2CacheOrdinaryDiffEq.MEBDF2ConstantCacheOrdinaryDiffEq.MassMatrixAlgorithmsOrdinaryDiffEq.McAte2OrdinaryDiffEq.McAte2ConstantCacheOrdinaryDiffEq.McAte3OrdinaryDiffEq.McAte3ConstantCacheOrdinaryDiffEq.McAte4OrdinaryDiffEq.McAte42OrdinaryDiffEq.McAte42ConstantCacheOrdinaryDiffEq.McAte4ConstantCacheOrdinaryDiffEq.McAte5OrdinaryDiffEq.McAte5ConstantCacheOrdinaryDiffEq.McAte8OrdinaryDiffEq.McAte8CacheOrdinaryDiffEq.McAte8ConstantCacheOrdinaryDiffEq.MidpointOrdinaryDiffEq.MidpointCacheOrdinaryDiffEq.MidpointConstantCacheOrdinaryDiffEq.MidpointSplittingOrdinaryDiffEq.MidpointSplittingCacheOrdinaryDiffEq.MidpointSplittingConstantCacheOrdinaryDiffEq.MonteCarloProblemOrdinaryDiffEq.MonteCarloSolutionOrdinaryDiffEq.MonteCarloSummaryOrdinaryDiffEq.MonteCarloTestSolutionOrdinaryDiffEq.MultistepAlgorithmsOrdinaryDiffEq.NDBLSRK124OrdinaryDiffEq.NDBLSRK124ConstantCacheOrdinaryDiffEq.NDBLSRK134OrdinaryDiffEq.NDBLSRK134ConstantCacheOrdinaryDiffEq.NDBLSRK144OrdinaryDiffEq.NDBLSRK144ConstantCacheOrdinaryDiffEq.NLAndersonOrdinaryDiffEq.NLAndersonCacheOrdinaryDiffEq.NLFunctionalOrdinaryDiffEq.NLFunctionalCacheOrdinaryDiffEq.NLNewtonOrdinaryDiffEq.NLNewtonCacheOrdinaryDiffEq.NLSOLVEJL_SETUPOrdinaryDiffEq.NoiseProblemOrdinaryDiffEq.NorsettEulerOrdinaryDiffEq.NorsettEulerCacheOrdinaryDiffEq.NorsettEulerConstantCacheOrdinaryDiffEq.Nystrom4OrdinaryDiffEq.Nystrom4CacheOrdinaryDiffEq.Nystrom4ConstantCacheOrdinaryDiffEq.Nystrom4VelocityIndependentOrdinaryDiffEq.Nystrom4VelocityIndependentCacheOrdinaryDiffEq.Nystrom4VelocityIndependentConstantCacheOrdinaryDiffEq.Nystrom5VelocityIndependentOrdinaryDiffEq.Nystrom5VelocityIndependentCacheOrdinaryDiffEq.Nystrom5VelocityIndependentConstantCacheOrdinaryDiffEq.NystromCCDefaultInitializationOrdinaryDiffEq.NystromDefaultInitializationOrdinaryDiffEq.ODEChunkCacheOrdinaryDiffEq.ODECompositeSolutionOrdinaryDiffEq.ODEEmptyCacheOrdinaryDiffEq.ODEFunctionOrdinaryDiffEq.ODEIntegratorOrdinaryDiffEq.ODEProblemOrdinaryDiffEq.ODESolutionOrdinaryDiffEq.ODE_DEFAULT_TABLEAUOrdinaryDiffEq.ORK256OrdinaryDiffEq.ORK256ConstantCacheOrdinaryDiffEq.OrdinaryDiffEqOrdinaryDiffEq.OrdinaryDiffEqAdamsVarOrderVarStepAlgorithmOrdinaryDiffEq.OrdinaryDiffEqAdaptiveAlgorithmOrdinaryDiffEq.OrdinaryDiffEqAdaptiveExponentialAlgorithmOrdinaryDiffEq.OrdinaryDiffEqAdaptiveImplicitAlgorithmOrdinaryDiffEq.OrdinaryDiffEqAlgorithmOrdinaryDiffEq.OrdinaryDiffEqCacheOrdinaryDiffEq.OrdinaryDiffEqCompositeAlgorithmOrdinaryDiffEq.OrdinaryDiffEqConstantCacheOrdinaryDiffEq.OrdinaryDiffEqExponentialAlgorithmOrdinaryDiffEq.OrdinaryDiffEqImplicitAlgorithmOrdinaryDiffEq.OrdinaryDiffEqInterpolationOrdinaryDiffEq.OrdinaryDiffEqMutableCacheOrdinaryDiffEq.OrdinaryDiffEqNewtonAdaptiveAlgorithmOrdinaryDiffEq.OrdinaryDiffEqNewtonAlgorithmOrdinaryDiffEq.OrdinaryDiffEqRosenbrockAdaptiveAlgorithmOrdinaryDiffEq.OrdinaryDiffEqRosenbrockAlgorithmOrdinaryDiffEq.OwrenZen3OrdinaryDiffEq.OwrenZen3CacheOrdinaryDiffEq.OwrenZen3ConstantCacheOrdinaryDiffEq.OwrenZen4OrdinaryDiffEq.OwrenZen4CacheOrdinaryDiffEq.OwrenZen4ConstantCacheOrdinaryDiffEq.OwrenZen5OrdinaryDiffEq.OwrenZen5CacheOrdinaryDiffEq.OwrenZen5ConstantCacheOrdinaryDiffEq.ParsaniKetchesonDeconinck3S105OrdinaryDiffEq.ParsaniKetchesonDeconinck3S105ConstantCacheOrdinaryDiffEq.ParsaniKetchesonDeconinck3S173OrdinaryDiffEq.ParsaniKetchesonDeconinck3S173ConstantCacheOrdinaryDiffEq.ParsaniKetchesonDeconinck3S184OrdinaryDiffEq.ParsaniKetchesonDeconinck3S184ConstantCacheOrdinaryDiffEq.ParsaniKetchesonDeconinck3S205OrdinaryDiffEq.ParsaniKetchesonDeconinck3S205ConstantCacheOrdinaryDiffEq.ParsaniKetchesonDeconinck3S32OrdinaryDiffEq.ParsaniKetchesonDeconinck3S32ConstantCacheOrdinaryDiffEq.ParsaniKetchesonDeconinck3S53OrdinaryDiffEq.ParsaniKetchesonDeconinck3S53ConstantCacheOrdinaryDiffEq.ParsaniKetchesonDeconinck3S82OrdinaryDiffEq.ParsaniKetchesonDeconinck3S82ConstantCacheOrdinaryDiffEq.ParsaniKetchesonDeconinck3S94OrdinaryDiffEq.ParsaniKetchesonDeconinck3S94ConstantCacheOrdinaryDiffEq.PredictiveControllerAlgsOrdinaryDiffEq.PseudoVerletLeapfrogOrdinaryDiffEq.PseudoVerletLeapfrogConstantCacheOrdinaryDiffEq.QBDFOrdinaryDiffEq.QBDF1OrdinaryDiffEq.QBDF2OrdinaryDiffEq.QNDFOrdinaryDiffEq.QNDF1OrdinaryDiffEq.QNDF1CacheOrdinaryDiffEq.QNDF1ConstantCacheOrdinaryDiffEq.QNDF2OrdinaryDiffEq.QNDF2CacheOrdinaryDiffEq.QNDF2ConstantCacheOrdinaryDiffEq.QNDFCacheOrdinaryDiffEq.QNDFConstantCacheOrdinaryDiffEq.R!OrdinaryDiffEq.RHS_IIFOrdinaryDiffEq.RHS_IIF_ScalarOrdinaryDiffEq.RK4OrdinaryDiffEq.RK46NLOrdinaryDiffEq.RK46NLCacheOrdinaryDiffEq.RK46NLConstantCacheOrdinaryDiffEq.RK4CacheOrdinaryDiffEq.RK4ConstantCacheOrdinaryDiffEq.RKCOrdinaryDiffEq.RKCCacheOrdinaryDiffEq.RKCConstantCacheOrdinaryDiffEq.ROCK2OrdinaryDiffEq.ROCK2CacheOrdinaryDiffEq.ROCK2ConstantCacheOrdinaryDiffEq.ROCK4OrdinaryDiffEq.ROCK4CacheOrdinaryDiffEq.ROCK4ConstantCacheOrdinaryDiffEq.RODEFunctionOrdinaryDiffEq.RODEProblemOrdinaryDiffEq.RODESolutionOrdinaryDiffEq.ROS3POrdinaryDiffEq.ROS3PConstantCacheOrdinaryDiffEq.RadauIIA5OrdinaryDiffEq.RadauIIA5CacheOrdinaryDiffEq.RadauIIA5ConstantCacheOrdinaryDiffEq.RadauIIA5TableauOrdinaryDiffEq.RalstonOrdinaryDiffEq.RalstonCacheOrdinaryDiffEq.RalstonConstantCacheOrdinaryDiffEq.RichardsonEulerOrdinaryDiffEq.RichardsonEulerCacheOrdinaryDiffEq.RichardsonEulerConstantCacheOrdinaryDiffEq.Rodas3OrdinaryDiffEq.Rodas3ConstantCacheOrdinaryDiffEq.Rodas4OrdinaryDiffEq.Rodas42OrdinaryDiffEq.Rodas42ConstantCacheOrdinaryDiffEq.Rodas4CacheOrdinaryDiffEq.Rodas4ConstantCacheOrdinaryDiffEq.Rodas4POrdinaryDiffEq.Rodas4PConstantCacheOrdinaryDiffEq.Rodas5OrdinaryDiffEq.Rodas5ConstantCacheOrdinaryDiffEq.RodasConstantCacheOrdinaryDiffEq.Ros4ConstantCacheOrdinaryDiffEq.Ros4LStabOrdinaryDiffEq.Ros4LStabConstantCacheOrdinaryDiffEq.RosShamp4OrdinaryDiffEq.RosShamp4ConstantCacheOrdinaryDiffEq.Rosenbrock23OrdinaryDiffEq.Rosenbrock23CacheOrdinaryDiffEq.Rosenbrock23ConstantCacheOrdinaryDiffEq.Rosenbrock32OrdinaryDiffEq.Rosenbrock32CacheOrdinaryDiffEq.Rosenbrock32ConstantCacheOrdinaryDiffEq.Rosenbrock33CacheOrdinaryDiffEq.Rosenbrock33ConstantCacheOrdinaryDiffEq.Rosenbrock34CacheOrdinaryDiffEq.Rosenbrock34ConstantCacheOrdinaryDiffEq.Rosenbrock4CacheOrdinaryDiffEq.Rosenbrock4ConstantCacheOrdinaryDiffEq.Rosenbrock5CacheOrdinaryDiffEq.Rosenbrock5ConstantCacheOrdinaryDiffEq.RosenbrockMutableCacheOrdinaryDiffEq.Ruth3OrdinaryDiffEq.Ruth3ConstantCacheOrdinaryDiffEq.SBDFOrdinaryDiffEq.SBDF2OrdinaryDiffEq.SBDF3OrdinaryDiffEq.SBDF4OrdinaryDiffEq.SBDFCacheOrdinaryDiffEq.SBDFConstantCacheOrdinaryDiffEq.SDEFunctionOrdinaryDiffEq.SDEProblemOrdinaryDiffEq.SDIRK2OrdinaryDiffEq.SDIRK2CacheOrdinaryDiffEq.SDIRK2ConstantCacheOrdinaryDiffEq.SDIRKMutableCacheOrdinaryDiffEq.SSPRK104OrdinaryDiffEq.SSPRK104CacheOrdinaryDiffEq.SSPRK104ConstantCacheOrdinaryDiffEq.SSPRK22OrdinaryDiffEq.SSPRK22CacheOrdinaryDiffEq.SSPRK22ConstantCacheOrdinaryDiffEq.SSPRK33OrdinaryDiffEq.SSPRK33CacheOrdinaryDiffEq.SSPRK33ConstantCacheOrdinaryDiffEq.SSPRK432OrdinaryDiffEq.SSPRK432CacheOrdinaryDiffEq.SSPRK432ConstantCacheOrdinaryDiffEq.SSPRK53OrdinaryDiffEq.SSPRK53CacheOrdinaryDiffEq.SSPRK53ConstantCacheOrdinaryDiffEq.SSPRK53_2N1OrdinaryDiffEq.SSPRK53_2N1CacheOrdinaryDiffEq.SSPRK53_2N1ConstantCacheOrdinaryDiffEq.SSPRK53_2N2OrdinaryDiffEq.SSPRK53_2N2CacheOrdinaryDiffEq.SSPRK53_2N2ConstantCacheOrdinaryDiffEq.SSPRK54OrdinaryDiffEq.SSPRK54CacheOrdinaryDiffEq.SSPRK54ConstantCacheOrdinaryDiffEq.SSPRK63OrdinaryDiffEq.SSPRK63CacheOrdinaryDiffEq.SSPRK63ConstantCacheOrdinaryDiffEq.SSPRK73OrdinaryDiffEq.SSPRK73CacheOrdinaryDiffEq.SSPRK73ConstantCacheOrdinaryDiffEq.SSPRK83OrdinaryDiffEq.SSPRK83CacheOrdinaryDiffEq.SSPRK83ConstantCacheOrdinaryDiffEq.SSPRK932OrdinaryDiffEq.SSPRK932CacheOrdinaryDiffEq.SSPRK932ConstantCacheOrdinaryDiffEq.SSPRKMSVS32OrdinaryDiffEq.SSPRKMSVS32CacheOrdinaryDiffEq.SSPRKMSVS32ConstantCacheOrdinaryDiffEq.SSPRKMSVS43OrdinaryDiffEq.SSPRKMSVS43CacheOrdinaryDiffEq.SSPRKMSVS43ConstantCacheOrdinaryDiffEq.SSPSDIRK2OrdinaryDiffEq.SSPSDIRK2CacheOrdinaryDiffEq.SSPSDIRK2ConstantCacheOrdinaryDiffEq.SecondOrderODEProblemOrdinaryDiffEq.SofSpa10OrdinaryDiffEq.SofSpa10CacheOrdinaryDiffEq.SofSpa10ConstantCacheOrdinaryDiffEq.SplitAlgorithmsOrdinaryDiffEq.SplitEulerOrdinaryDiffEq.SplitEulerCacheOrdinaryDiffEq.SplitEulerConstantCacheOrdinaryDiffEq.SplitFunctionOrdinaryDiffEq.SplitODEProblemOrdinaryDiffEq.SplitSDEFunctionOrdinaryDiffEq.SplitSDEProblemOrdinaryDiffEq.StandardControllerAlgsOrdinaryDiffEq.SteadyStateProblemOrdinaryDiffEq.SteadyStateSolutionOrdinaryDiffEq.Symplectic2CacheOrdinaryDiffEq.Symplectic2ConstantCacheOrdinaryDiffEq.Symplectic3CacheOrdinaryDiffEq.Symplectic3ConstantCacheOrdinaryDiffEq.Symplectic45CacheOrdinaryDiffEq.Symplectic45ConstantCacheOrdinaryDiffEq.Symplectic4CacheOrdinaryDiffEq.Symplectic4ConstantCacheOrdinaryDiffEq.Symplectic5CacheOrdinaryDiffEq.Symplectic5ConstantCacheOrdinaryDiffEq.Symplectic62CacheOrdinaryDiffEq.Symplectic62ConstantCacheOrdinaryDiffEq.Symplectic6CacheOrdinaryDiffEq.Symplectic6ConstantCacheOrdinaryDiffEq.SymplecticEulerOrdinaryDiffEq.SymplecticEulerCacheOrdinaryDiffEq.SymplecticEulerConstantCacheOrdinaryDiffEq.TRBDF2OrdinaryDiffEq.TRBDF2CacheOrdinaryDiffEq.TRBDF2ConstantCacheOrdinaryDiffEq.TRBDF2TableauOrdinaryDiffEq.TSLDDRK74OrdinaryDiffEq.TSLDDRK74ConstantCacheOrdinaryDiffEq.TanYam7OrdinaryDiffEq.TanYam7CacheOrdinaryDiffEq.TanYam7ConstantCacheOrdinaryDiffEq.TimeChoiceIteratorOrdinaryDiffEq.TrapezoidOrdinaryDiffEq.TrapezoidCacheOrdinaryDiffEq.TrapezoidConstantCacheOrdinaryDiffEq.Tsit5OrdinaryDiffEq.Tsit5CacheOrdinaryDiffEq.Tsit5ConstantCacheOrdinaryDiffEq.Tsit5InterpOrdinaryDiffEq.TsitPap8OrdinaryDiffEq.TsitPap8CacheOrdinaryDiffEq.TsitPap8ConstantCacheOrdinaryDiffEq.TwoPointBVProblemOrdinaryDiffEq.U!OrdinaryDiffEq.VCAB3OrdinaryDiffEq.VCAB3CacheOrdinaryDiffEq.VCAB3ConstantCacheOrdinaryDiffEq.VCAB4OrdinaryDiffEq.VCAB4CacheOrdinaryDiffEq.VCAB4ConstantCacheOrdinaryDiffEq.VCAB5OrdinaryDiffEq.VCAB5CacheOrdinaryDiffEq.VCAB5ConstantCacheOrdinaryDiffEq.VCABMOrdinaryDiffEq.VCABM3OrdinaryDiffEq.VCABM3CacheOrdinaryDiffEq.VCABM3ConstantCacheOrdinaryDiffEq.VCABM4OrdinaryDiffEq.VCABM4CacheOrdinaryDiffEq.VCABM4ConstantCacheOrdinaryDiffEq.VCABM5OrdinaryDiffEq.VCABM5CacheOrdinaryDiffEq.VCABM5ConstantCacheOrdinaryDiffEq.VCABMCacheOrdinaryDiffEq.VCABMConstantCacheOrdinaryDiffEq.Veldd4OrdinaryDiffEq.Veldd4ConstantCacheOrdinaryDiffEq.Velds4OrdinaryDiffEq.Velds4ConstantCacheOrdinaryDiffEq.VelocityVerletOrdinaryDiffEq.VelocityVerletCacheOrdinaryDiffEq.VelocityVerletConstantCacheOrdinaryDiffEq.VerletLeapfrogOrdinaryDiffEq.VerletLeapfrogConstantCacheOrdinaryDiffEq.Vern6OrdinaryDiffEq.Vern6CacheOrdinaryDiffEq.Vern6ConstantCacheOrdinaryDiffEq.Vern6InterpOrdinaryDiffEq.Vern6Interp_polyweightsOrdinaryDiffEq.Vern7OrdinaryDiffEq.Vern7CacheOrdinaryDiffEq.Vern7ConstantCacheOrdinaryDiffEq.Vern7InterpOrdinaryDiffEq.Vern7Interp_polyweightsOrdinaryDiffEq.Vern8OrdinaryDiffEq.Vern8CacheOrdinaryDiffEq.Vern8ConstantCacheOrdinaryDiffEq.Vern8InterpOrdinaryDiffEq.Vern8Interp_polyweightsOrdinaryDiffEq.Vern9OrdinaryDiffEq.Vern9CacheOrdinaryDiffEq.Vern9ConstantCacheOrdinaryDiffEq.Vern9InterpOrdinaryDiffEq.Vern9Interp_polyweightsOrdinaryDiffEq.WOperatorOrdinaryDiffEq.Yoshida6OrdinaryDiffEq.Yoshida6ConstantCacheOrdinaryDiffEq._change_t_via_interpolation!OrdinaryDiffEq._compute_nlOrdinaryDiffEq._compute_nl!OrdinaryDiffEq._ode_addsteps!OrdinaryDiffEq._ode_interpolantOrdinaryDiffEq._ode_interpolant!OrdinaryDiffEq._phiv_timestep_cachesOrdinaryDiffEq._reshapeOrdinaryDiffEq._vecOrdinaryDiffEq.add_saveat!OrdinaryDiffEq.add_tstop!OrdinaryDiffEq.addat!OrdinaryDiffEq.addat_non_user_cache!OrdinaryDiffEq.addsteps!OrdinaryDiffEq.alg_adaptive_orderOrdinaryDiffEq.alg_autodiffOrdinaryDiffEq.alg_cacheOrdinaryDiffEq.alg_cache_expRKOrdinaryDiffEq.alg_cache_exprbOrdinaryDiffEq.alg_can_repeat_jacOrdinaryDiffEq.alg_extrapolatesOrdinaryDiffEq.alg_maximum_orderOrdinaryDiffEq.alg_orderOrdinaryDiffEq.alg_stability_sizeOrdinaryDiffEq.apply_step!OrdinaryDiffEq.auto_dt_reset!OrdinaryDiffEq.backward_diff!OrdinaryDiffEq.beta1_defaultOrdinaryDiffEq.beta2_defaultOrdinaryDiffEq.build_grad_configOrdinaryDiffEq.build_jac_configOrdinaryDiffEq.calc_JOrdinaryDiffEq.calc_J!OrdinaryDiffEq.calc_W!OrdinaryDiffEq.calc_coeff!OrdinaryDiffEq.calc_dt_propose!OrdinaryDiffEq.calc_rosenbrock_differentiation!OrdinaryDiffEq.calc_tderivativeOrdinaryDiffEq.calc_tderivative!OrdinaryDiffEq.calculate_residualsOrdinaryDiffEq.calculate_residuals!OrdinaryDiffEq.change_t_via_interpolation!OrdinaryDiffEq.check_errorOrdinaryDiffEq.check_keywordsOrdinaryDiffEq.choose_algorithm!OrdinaryDiffEq.choosedeg!OrdinaryDiffEq.chooseη!OrdinaryDiffEq.constructDormandPrinceOrdinaryDiffEq.copyat_or_push!OrdinaryDiffEq.current_extrapolantOrdinaryDiffEq.current_extrapolant!OrdinaryDiffEq.current_interpolantOrdinaryDiffEq.current_interpolant!OrdinaryDiffEq.deleteat!OrdinaryDiffEq.deleteat_non_user_cache!OrdinaryDiffEq.derivativeOrdinaryDiffEq.derivative!OrdinaryDiffEq.determine_chunksizeOrdinaryDiffEq.dp5threaded_adaptiveloopOrdinaryDiffEq.dp5threaded_denseloopOrdinaryDiffEq.dp5threaded_loop1OrdinaryDiffEq.dp5threaded_loop2OrdinaryDiffEq.dp5threaded_loop3OrdinaryDiffEq.dp5threaded_loop4OrdinaryDiffEq.dp5threaded_loop5OrdinaryDiffEq.dp5threaded_loop6OrdinaryDiffEq.du_cacheOrdinaryDiffEq.dual_cacheOrdinaryDiffEq.evalOrdinaryDiffEq.expRK_operatorsOrdinaryDiffEq.expand_ϕ_and_ϕstar!OrdinaryDiffEq.fix_dt_at_bounds!OrdinaryDiffEq.fsal_typeofOrdinaryDiffEq.full_cacheOrdinaryDiffEq.g_coefs!OrdinaryDiffEq.gamma_defaultOrdinaryDiffEq.get_chunksizeOrdinaryDiffEq.get_current_adaptive_orderOrdinaryDiffEq.get_current_alg_autodiffOrdinaryDiffEq.get_current_alg_orderOrdinaryDiffEq.get_current_isfsalOrdinaryDiffEq.get_dtOrdinaryDiffEq.get_duOrdinaryDiffEq.get_du!OrdinaryDiffEq.get_proposed_dtOrdinaryDiffEq.get_tmp_cacheOrdinaryDiffEq.handle_callback_modifiers!OrdinaryDiffEq.handle_callbacks!OrdinaryDiffEq.handle_discontinuities!OrdinaryDiffEq.handle_dt!OrdinaryDiffEq.handle_tstop!OrdinaryDiffEq.has_expOrdinaryDiffEq.has_expmvOrdinaryDiffEq.has_expmv!OrdinaryDiffEq.has_ldivOrdinaryDiffEq.has_ldiv!OrdinaryDiffEq.has_mulOrdinaryDiffEq.has_mul!OrdinaryDiffEq.hermite_interpolantOrdinaryDiffEq.hermite_interpolant!OrdinaryDiffEq.includeOrdinaryDiffEq.initOrdinaryDiffEq.initialize!OrdinaryDiffEq.initialize_callbacks!OrdinaryDiffEq.intervalsOrdinaryDiffEq.is_constantOrdinaryDiffEq.is_constant_cacheOrdinaryDiffEq.is_nordsieck_change_orderOrdinaryDiffEq.is_stiffOrdinaryDiffEq.isdiscreteOrdinaryDiffEq.isdtchangeableOrdinaryDiffEq.isfsalOrdinaryDiffEq.isimplicitOrdinaryDiffEq.isinplaceOrdinaryDiffEq.islinearOrdinaryDiffEq.ismultistepOrdinaryDiffEq.issplitOrdinaryDiffEq.jac_cacheOrdinaryDiffEq.jac_iterOrdinaryDiffEq.jacobianOrdinaryDiffEq.jacobian!OrdinaryDiffEq.linear_interpolantOrdinaryDiffEq.linear_interpolant!OrdinaryDiffEq.loopfooter!OrdinaryDiffEq.loopheader!OrdinaryDiffEq.maxeig!OrdinaryDiffEq.modify_dt_for_tstops!OrdinaryDiffEq.nlsolve_fOrdinaryDiffEq.nlsolve_functional!OrdinaryDiffEq.nordsieck_adjust!OrdinaryDiffEq.nordsieck_adjust_order!OrdinaryDiffEq.nordsieck_decrement_wait!OrdinaryDiffEq.nordsieck_finalize!OrdinaryDiffEq.nordsieck_prepare_next!OrdinaryDiffEq.nordsieck_rescale!OrdinaryDiffEq.nordsieck_rewind!OrdinaryDiffEq.ode_addsteps!OrdinaryDiffEq.ode_determine_initdtOrdinaryDiffEq.ode_extrapolantOrdinaryDiffEq.ode_extrapolant!OrdinaryDiffEq.ode_interpolantOrdinaryDiffEq.ode_interpolant!OrdinaryDiffEq.ode_interpolationOrdinaryDiffEq.ode_interpolation!OrdinaryDiffEq.perform_predict!OrdinaryDiffEq.perform_step!OrdinaryDiffEq.qmax_defaultOrdinaryDiffEq.qmin_defaultOrdinaryDiffEq.qsteady_max_defaultOrdinaryDiffEq.qsteady_min_defaultOrdinaryDiffEq.rand_cacheOrdinaryDiffEq.ratenoise_cacheOrdinaryDiffEq.reeval_internals_due_to_modification!OrdinaryDiffEq.reinit!OrdinaryDiffEq.reinterpolate_history!OrdinaryDiffEq.remakeOrdinaryDiffEq.reset_alg_dependent_opts!OrdinaryDiffEq.reset_fsal!OrdinaryDiffEq.resize!OrdinaryDiffEq.resize_non_user_cache!OrdinaryDiffEq.save_idxsinitializeOrdinaryDiffEq.savevalues!OrdinaryDiffEq.set_abstol!OrdinaryDiffEq.set_gamma!OrdinaryDiffEq.set_proposed_dt!OrdinaryDiffEq.set_reltol!OrdinaryDiffEq.set_t!OrdinaryDiffEq.set_u!OrdinaryDiffEq.setη!OrdinaryDiffEq.solution_endpoint_match_cur_integrator!OrdinaryDiffEq.solveOrdinaryDiffEq.solve!OrdinaryDiffEq.ssp_coefficientOrdinaryDiffEq.step!OrdinaryDiffEq.step_accept_controller!OrdinaryDiffEq.step_reject_controller!OrdinaryDiffEq.stepsize_and_order!OrdinaryDiffEq.stepsize_controller!OrdinaryDiffEq.stepsize_η!OrdinaryDiffEq.stepsize_η₊₁!OrdinaryDiffEq.stepsize_η₋₁!OrdinaryDiffEq.terminate!OrdinaryDiffEq.transfer_cache!OrdinaryDiffEq.trivial_limiter!OrdinaryDiffEq.tstop_saveat_disc_handlingOrdinaryDiffEq.tuplesOrdinaryDiffEq.u_cacheOrdinaryDiffEq.u_modified!OrdinaryDiffEq.unwrap_algOrdinaryDiffEq.update_coefficientsOrdinaryDiffEq.update_coefficients!OrdinaryDiffEq.update_nordsieck_vector!OrdinaryDiffEq.user_cacheOrdinaryDiffEq.uses_uprevOrdinaryDiffEq.warn_compatOrdinaryDiffEq.γstarOrdinaryDiffEq.γₖOrdinaryDiffEq.ϕ_and_ϕstar!OrdinaryDiffEq.ϕ_np1!OrdinaryDiffEq.∫₋₁⁰dx"
},

]}
