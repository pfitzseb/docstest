var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StochasticDiffEq.jl-1",
    "page": "Readme",
    "title": "StochasticDiffEq.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov) (Image: StochasticDiffEq)StochasticDiffEq.jl is a component package in the DifferentialEquations ecosystem. It holds the stochastic differential equations solvers and utilities. While completely independent and usable on its own, users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "StochasticDiffEq.jl is part of the JuliaDiffEq common interface, but can be used independently of DifferentialEquations.jl. The only requirement is that the user passes an StochasticDiffEq.jl algorithm to solve. For example, we can solve the ODE tutorial from the docs using the SRIW1() algorithm:using StochasticDiffEq\nα=1\nβ=1\nu₀=1/2\nf(u,p,t) = α*u\ng(u,p,t) = β*u\ndt = 1//2^(4)\ntspan = (0.0,1.0)\nprob = SDEProblem(f,g,u₀,(0.0,1.0))\nsol =solve(prob,SRIW1())The options for solve are defined in the common solver options page and are thoroughly explained in the ODE tutorial.That example uses the out-of-place syntax f(u,p,t), while the inplace syntax (more efficient for systems of equations) is shown in the Lorenz example:function lorenz(du,u,p,t)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nend\n\nfunction σ_lorenz(du,u,p,t)\n du[1] = 3.0\n du[2] = 3.0\n du[3] = 3.0\nend\n\nprob_sde_lorenz = SDEProblem(lorenz,σ_lorenz,[1.0,0.0,0.0],(0.0,10.0))\nsol = solve(prob_sde_lorenz)\nplot(sol,vars=(1,2,3))The problems default to diagonal noise. Non-diagonal noise can be added by setting the noise_prototype:f = (du,u,p,t) -> du.=1.01u\ng = function (du,u,p,t)\n  du[1,1] = 0.3u[1]\n  du[1,2] = 0.6u[1]\n  du[1,3] = 0.9u[1]\n  du[1,4] = 0.12u[2]\n  du[2,1] = 1.2u[1]\n  du[2,2] = 0.2u[2]\n  du[2,3] = 0.3u[2]\n  du[2,4] = 1.8u[2]\nend\nprob = SDEProblem(f,g,ones(2),(0.0,1.0),noise_rate_prototype=zeros(2,4))Colored noise can be set using an AbstractNoiseProcess. For example, we can set the underlying noise process to a GeometricBrownian via:μ = 1.0\nσ = 2.0\nW = GeometricBrownianMotionProcess(μ,σ,0.0,1.0,1.0)\n# ...\n# Define f,g,u0,tspan for a SDEProblem\n# ...\nprob = SDEProblem(f,g,u0,tspan,noise=W)StochasticDiffEq.jl also handles solving random ordinary differential equations. This is shown in the RODE tutorial.using StochasticDiffEq\nfunction f(u,p,t,W)\n  2u*sin(W)\nend\nu0 = 1.00\ntspan = (0.0,5.0)\nprob = RODEProblem(f,u0,tspan)\nsol = solve(prob,RandomEM(),dt=1/100)"
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "For the list of available solvers, please refer to the DifferentialEquations.jl SDE Solvers page and the RODE Solvers page."
},

{
    "location": "autodocs/#StochasticDiffEq.NLFunctional",
    "page": "Docstrings",
    "title": "StochasticDiffEq.NLFunctional",
    "category": "type",
    "text": "(S::NLFunctional)(integrator) -> (z, η, iter, fail_convergence)\n\nPerform functional iteration that is used by implicit methods, where z is the solution, η is used to measure the iteration error (see [HW96]), iter is the number of iteration, and fail_convergence reports whether the algorithm succeed.  It solves\n\nG(z) = dtf(tmp + γz p t+ch)\nz = G(z)\n\nby iterating\n\nzᵏ¹ = G(zᵏ)\n\n[HW96]: Ernst Hairer and Gerhard Wanner, \"Solving Ordinary Differential\n\nEquations II, Springer Series in Computational Mathematics. ISBN 978-3-642-05221-7. Section IV.8. doi:10.1007/978-3-642-05221-7\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.NLNewton",
    "page": "Docstrings",
    "title": "StochasticDiffEq.NLNewton",
    "category": "type",
    "text": "(S::NLNewton)(integrator) -> (z, η, iter, fail_convergence)\n\nPerform numerically stable modified NLNewton iteration that is specialized for implicit methods (see [HS96] and [HW96]), where z is the solution, η is used to measure the iteration error (see [HW96]), iter is the number of iteration, and fail_convergence reports whether the algorithm succeed. It solves\n\nG(z) = dtf(tmp + γz p t+ch) - z = 0\n\nby iterating\n\nW Δᵏ = dtf(tmp + γzᵏ p t+ch) - zᵏ\nzᵏ¹ = zᵏ + Δᵏ\n\nwhere W=M-dt⋅γJ, M is the mass matrix, dt is the step size, γ is a constant, and J is the Jacobian matrix.\n\n[HS96]: M.E.Hoseaa and L.F.Shampine, \"Analysis and implementation of TR-BDF2\",\n\nApplied Numerical Mathematics, Volume 20, Issues 1–2, February 1996, Pages 21-37. doi:10.1016/0168-9274(95)00115-8\n\n[HW96]: Ernst Hairer and Gerhard Wanner, \"Solving Ordinary Differential\n\nEquations II, Springer Series in Computational Mathematics. ISBN 978-3-642-05221-7. Section IV.8. doi:10.1007/978-3-642-05221-7\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.PCEuler",
    "page": "Docstrings",
    "title": "StochasticDiffEq.PCEuler",
    "category": "type",
    "text": "PCEuler(ggprime; theta=1/2, eta=1/2)\n\nPredictor Corrector Euler\n\nArguments\n\nggprime::Function: For scalar problems, ggprime = bpartial_x(b) For multi-dimensional problems bbprime_k = sum_j=1M i=1D b^(j)_i partial_i b^(j)_k where b^(j) correspond to the noise vector due to the j\'th noise channel. If problem is in place - a in place ggprime should be supplied - and vice versa for not in place speicification of problem.\ntheta::Real: Degree of implicitness in the drift term. Set to 0.5 by default.\neta::Real: Degree of implicitness in the diffusion term. Set to 0.5 by default.\n\nReference: Stochastics and Dynamics, Vol. 8, No. 3 (2008) 561–581 Note that the original paper has a typo in the definition of ggprime...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.RosslerSRA",
    "page": "Docstrings",
    "title": "StochasticDiffEq.RosslerSRA",
    "category": "type",
    "text": "RosslerSRA\n\nHolds the Butcher tableaus for a Rosser SRA method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.RosslerSRI",
    "page": "Docstrings",
    "title": "StochasticDiffEq.RosslerSRI",
    "category": "type",
    "text": "RosslerSRI\n\nHolds the Butcher tableaus for a Rosser SRI method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.WOperator",
    "page": "Docstrings",
    "title": "StochasticDiffEq.WOperator",
    "category": "type",
    "text": "WOperator(mass_matrix,gamma,J)\n\nA linear operator that represents the W matrix of an ODEProblem, defined as\n\nW = MM - gamma J\n\nwhere MM is the mass matrix (a regular AbstractMatrix or a UniformScaling), γ is a real number proportional to the time step, and J is the Jacobian operator (must be a AbstractDiffEqLinearOperator). A WOperator can also be constructed using a *DEFunction directly as\n\nWOperator(f,gamma)\n\nf needs to have a jacobian and jac_prototype, but the prototype does not need to be a diffeq operator –- it will automatically be converted to one.\n\nWOperator supports lazy * and mul! operations, the latter utilizing an internal cache (can be specified in the constructor; default to regular Vector). It supports all of AbstractDiffEqLinearOperator\'s interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.calc_J",
    "page": "Docstrings",
    "title": "StochasticDiffEq.calc_J",
    "category": "function",
    "text": "calc_J!(integrator,cache,is_compos)\n\nInterface for calculating the jacobian.\n\nFor constant caches, a new jacobian object is returned whereas for mutable caches cache.J is updated. In both cases, if integrator.f has a custom jacobian update function, then it will be called for the update. Otherwise, either ForwardDiff or finite difference will be used depending on the jac_config of the cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.calculate_residuals",
    "page": "Docstrings",
    "title": "StochasticDiffEq.calculate_residuals",
    "category": "function",
    "text": "calculate_residuals(ũ, u₀, u₁, α, ρ, scalarnorm)\n\nReturn element-wise residuals\n\nfracũα+maxscalarnorm(u₀)scalarnorm(u₁)*ρ\n\n\n\n\n\ncalculate_residuals(E₁, E₂, u₀, u₁, α, ρ, δ, scalarnorm)\n\nReturn element-wise residuals\n\nfracδ E₁ + E₂α+maxscalarnorm(u₀)scalarnorm(u₁)*ρ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.calculate_residuals!",
    "page": "Docstrings",
    "title": "StochasticDiffEq.calculate_residuals!",
    "category": "function",
    "text": "calculate_residuals!(out, ũ, u₀, u₁, α, ρ, scalarnorm)\n\nSame as calculate_residuals but save result in out.\n\n\n\n\n\ncalculate_residuals!(out, E₁, E₂, u₀, u₁, α, ρ, δ, scalarnorm)\n\nSame as calculate_residuals but save result in out.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.checkSRAOrder",
    "page": "Docstrings",
    "title": "StochasticDiffEq.checkSRAOrder",
    "category": "function",
    "text": "checkSRAOrder(RosslerSRI)\n\nDetermines whether the order conditions are met via the tableaus of the SRA method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.checkSRIOrder",
    "page": "Docstrings",
    "title": "StochasticDiffEq.checkSRIOrder",
    "category": "function",
    "text": "checkSRIOrder(RosslerSRI)\n\nDetermines whether the order conditions are met via the tableaus of the SRI method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructExplicitSKenCarp",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructExplicitSKenCarp",
    "category": "function",
    "text": "constructSOSRA2()\n\nConstructs the taleau type for the SOSRA method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSKenCarp",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSKenCarp",
    "category": "function",
    "text": "constructSOSRA2()\n\nConstructs the taleau type for the SOSRA method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSOSRA",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSOSRA",
    "category": "function",
    "text": "constructSOSRA()\n\nConstructs the taleau type for the SOSRA method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSOSRA2",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSOSRA2",
    "category": "function",
    "text": "constructSOSRA2()\n\nConstructs the taleau type for the SOSRA method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSRA1",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSRA1",
    "category": "function",
    "text": "constructSRA1()\n\nConstructs the taleau type for the SRA1 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSRA2",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSRA2",
    "category": "function",
    "text": "constructSRA2()\n\nConstructs the taleau type for the SRA2 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSRA3",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSRA3",
    "category": "function",
    "text": "constructSRA3()\n\nConstructs the taleau type for the SRA3 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSRIOpt1",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSRIOpt1",
    "category": "function",
    "text": "constructSRIOpt1()\n\nOpti6-12-11-10-01-47\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSRIOpt2",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSRIOpt2",
    "category": "function",
    "text": "constructSRIOpt2()\n\nOpti6-12-11-10-01-47\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSRIW1",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSRIW1",
    "category": "function",
    "text": "constructSRIW1()\n\nConstructs the tableau type for the SRIW1 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.constructSRIW2",
    "page": "Docstrings",
    "title": "StochasticDiffEq.constructSRIW2",
    "category": "function",
    "text": "constructSRIW2()\n\nConstructs the tableau type for the SRIW1 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.reset_alg_dependent_opts!",
    "page": "Docstrings",
    "title": "StochasticDiffEq.reset_alg_dependent_opts!",
    "category": "function",
    "text": "If no user default, then this will change the default to the defaults for the second algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StochasticDiffEq.sde_interpolation",
    "page": "Docstrings",
    "title": "StochasticDiffEq.sde_interpolation",
    "category": "function",
    "text": "sde_interpolation(tvals,ts,timeseries,ks)\n\nGet the value at tvals where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\nsde_interpolation(tval::Number,ts,timeseries,ks)\n\nGet the value at tval where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StochasticDiffEq.@cacheStochasticDiffEq.@iipnlcachefieldsStochasticDiffEq.@iipnlsolveStochasticDiffEq.@oopnlcachefieldsStochasticDiffEq.@oopnlsolveStochasticDiffEq.@tight_loop_macrosStochasticDiffEq.AbstractAnalyticalProblemStochasticDiffEq.AbstractNLsolveCacheStochasticDiffEq.AbstractNLsolveSolverStochasticDiffEq.AffineDiffEqOperatorStochasticDiffEq.AnalyticalProblemStochasticDiffEq.AutoAlgSwitchStochasticDiffEq.AutoSOSRA2StochasticDiffEq.AutoSOSRI2StochasticDiffEq.AutoSwitchStochasticDiffEq.BVProblemStochasticDiffEq.CallbackSetStochasticDiffEq.CompiledFloatsStochasticDiffEq.ContinuousCallbackStochasticDiffEq.DAEFunctionStochasticDiffEq.DAEProblemStochasticDiffEq.DAESolutionStochasticDiffEq.DDEFunctionStochasticDiffEq.DDEProblemStochasticDiffEq.DEDataArrayStochasticDiffEq.DEDataMatrixStochasticDiffEq.DEDataVectorStochasticDiffEq.DEFAULT_LINSOLVEStochasticDiffEq.DESolutionStochasticDiffEq.DiffCacheStochasticDiffEq.DiffEqBaseStochasticDiffEq.DiffEqNLSolveTagStochasticDiffEq.DiscreteCallbackStochasticDiffEq.DiscreteFunctionStochasticDiffEq.DiscreteProblemStochasticDiffEq.DynamicalODEFunctionStochasticDiffEq.DynamicalODEProblemStochasticDiffEq.EMStochasticDiffEq.EMCacheStochasticDiffEq.EMConstantCacheStochasticDiffEq.EulerHeunStochasticDiffEq.EulerHeunCacheStochasticDiffEq.EulerHeunConstantCacheStochasticDiffEq.FourStageSRICacheStochasticDiffEq.FourStageSRIConstantCacheStochasticDiffEq.IIF1MStochasticDiffEq.IIF1MCacheStochasticDiffEq.IIF1MConstantCacheStochasticDiffEq.IIF1MilStochasticDiffEq.IIF1MilCacheStochasticDiffEq.IIF1MilConstantCacheStochasticDiffEq.IIF2MStochasticDiffEq.IIF2MCacheStochasticDiffEq.IIF2MConstantCacheStochasticDiffEq.ISSEMStochasticDiffEq.ISSEMCacheStochasticDiffEq.ISSEMConstantCacheStochasticDiffEq.ISSEulerHeunStochasticDiffEq.ISSEulerHeunCacheStochasticDiffEq.ISSEulerHeunConstantCacheStochasticDiffEq.ImplicitEMStochasticDiffEq.ImplicitEMCacheStochasticDiffEq.ImplicitEMConstantCacheStochasticDiffEq.ImplicitEulerHeunStochasticDiffEq.ImplicitEulerHeunCacheStochasticDiffEq.ImplicitEulerHeunConstantCacheStochasticDiffEq.ImplicitRKMilStochasticDiffEq.ImplicitRKMilCacheStochasticDiffEq.ImplicitRKMilConstantCacheStochasticDiffEq.LambaEMStochasticDiffEq.LambaEMCacheStochasticDiffEq.LambaEMConstantCacheStochasticDiffEq.LambaEulerHeunStochasticDiffEq.LambaEulerHeunCacheStochasticDiffEq.LambaEulerHeunConstantCacheStochasticDiffEq.LinSolveFactorizeStochasticDiffEq.LinearInterpolationDataStochasticDiffEq.MonteCarloProblemStochasticDiffEq.MonteCarloSolutionStochasticDiffEq.MonteCarloSummaryStochasticDiffEq.MonteCarloTestSolutionStochasticDiffEq.NLAndersonStochasticDiffEq.NLFunctionalStochasticDiffEq.NLNewtonStochasticDiffEq.NLSOLVEJL_SETUPStochasticDiffEq.NLSolverCacheStochasticDiffEq.NoiseProblemStochasticDiffEq.ODEFunctionStochasticDiffEq.ODEProblemStochasticDiffEq.ODESolutionStochasticDiffEq.PCEulerStochasticDiffEq.PCEulerCacheStochasticDiffEq.PCEulerConstantCacheStochasticDiffEq.RHS_IIF1StochasticDiffEq.RHS_IIF1M_ScalarStochasticDiffEq.RHS_IIF2StochasticDiffEq.RHS_IIF2M_ScalarStochasticDiffEq.RKMilStochasticDiffEq.RKMilCacheStochasticDiffEq.RKMilCommuteStochasticDiffEq.RKMilCommuteCacheStochasticDiffEq.RKMilCommuteConstantCacheStochasticDiffEq.RKMilConstantCacheStochasticDiffEq.RODECompositeSolutionStochasticDiffEq.RODEFunctionStochasticDiffEq.RODEProblemStochasticDiffEq.RODESolutionStochasticDiffEq.RandomEMStochasticDiffEq.RandomEMCacheStochasticDiffEq.RandomEMConstantCacheStochasticDiffEq.RosslerSRAStochasticDiffEq.RosslerSRIStochasticDiffEq.SDEFunctionStochasticDiffEq.SDEIntegratorStochasticDiffEq.SDEOptionsStochasticDiffEq.SDEProblemStochasticDiffEq.SKenCarpStochasticDiffEq.SKenCarpCacheStochasticDiffEq.SKenCarpConstantCacheStochasticDiffEq.SKenCarpTableauStochasticDiffEq.SOSRAStochasticDiffEq.SOSRA2StochasticDiffEq.SOSRA2ConstantCacheStochasticDiffEq.SOSRAConstantCacheStochasticDiffEq.SOSRIStochasticDiffEq.SOSRI2StochasticDiffEq.SOSRI2ConstantCacheStochasticDiffEq.SOSRIConstantCacheStochasticDiffEq.SRAStochasticDiffEq.SRA1StochasticDiffEq.SRA1CacheStochasticDiffEq.SRA1ConstantCacheStochasticDiffEq.SRA2StochasticDiffEq.SRA2CacheStochasticDiffEq.SRA2ConstantCacheStochasticDiffEq.SRA3StochasticDiffEq.SRA3ConstantCacheStochasticDiffEq.SRACacheStochasticDiffEq.SRAConstantCacheStochasticDiffEq.SRIStochasticDiffEq.SRICacheStochasticDiffEq.SRIConstantCacheStochasticDiffEq.SRIW1StochasticDiffEq.SRIW1CacheStochasticDiffEq.SRIW1ConstantCacheStochasticDiffEq.SRIW2StochasticDiffEq.SRIW2ConstantCacheStochasticDiffEq.SecondOrderODEProblemStochasticDiffEq.SplitEMStochasticDiffEq.SplitEMCacheStochasticDiffEq.SplitEMConstantCacheStochasticDiffEq.SplitFunctionStochasticDiffEq.SplitODEProblemStochasticDiffEq.SplitSDEFunctionStochasticDiffEq.SplitSDEProblemStochasticDiffEq.SteadyStateProblemStochasticDiffEq.SteadyStateSolutionStochasticDiffEq.StochasticCompositeAlgorithmStochasticDiffEq.StochasticCompositeCacheStochasticDiffEq.StochasticDiffEqStochasticDiffEq.StochasticDiffEqAdaptiveAlgorithmStochasticDiffEq.StochasticDiffEqAlgorithmStochasticDiffEq.StochasticDiffEqCacheStochasticDiffEq.StochasticDiffEqCompositeAlgorithmStochasticDiffEq.StochasticDiffEqConstantCacheStochasticDiffEq.StochasticDiffEqMutableCacheStochasticDiffEq.StochasticDiffEqNewtonAdaptiveAlgorithmStochasticDiffEq.StochasticDiffEqNewtonAlgorithmStochasticDiffEq.StochasticDiffEqRODEAdaptiveAlgorithmStochasticDiffEq.StochasticDiffEqRODEAlgorithmStochasticDiffEq.StochasticDiffEqRODECompositeAlgorithmStochasticDiffEq.ThreeStageSRACacheStochasticDiffEq.ThreeStageSRAConstantCacheStochasticDiffEq.TimeChoiceIteratorStochasticDiffEq.TwoPointBVProblemStochasticDiffEq.WOperatorStochasticDiffEq._reshapeStochasticDiffEq._vecStochasticDiffEq.add_saveat!StochasticDiffEq.add_tstop!StochasticDiffEq.addat!StochasticDiffEq.addat_noise!StochasticDiffEq.addat_non_user_cache!StochasticDiffEq.addsteps!StochasticDiffEq.alg_autodiffStochasticDiffEq.alg_cacheStochasticDiffEq.alg_compatibleStochasticDiffEq.alg_interpretationStochasticDiffEq.alg_mass_matrix_compatibleStochasticDiffEq.alg_needs_extra_processStochasticDiffEq.alg_orderStochasticDiffEq.alg_stability_sizeStochasticDiffEq.apply_step!StochasticDiffEq.auto_dt_reset!StochasticDiffEq.beta1_defaultStochasticDiffEq.beta2_defaultStochasticDiffEq.build_jac_configStochasticDiffEq.calc_JStochasticDiffEq.calc_J!StochasticDiffEq.calc_W!StochasticDiffEq.calc_dt_propose!StochasticDiffEq.calc_tderivativeStochasticDiffEq.calc_tderivative!StochasticDiffEq.calculate_residualsStochasticDiffEq.calculate_residuals!StochasticDiffEq.change_t_via_interpolation!StochasticDiffEq.checkSRAOrderStochasticDiffEq.checkSRIOrderStochasticDiffEq.check_errorStochasticDiffEq.check_keywordsStochasticDiffEq.choose_algorithm!StochasticDiffEq.constructExplicitSKenCarpStochasticDiffEq.constructSKenCarpStochasticDiffEq.constructSOSRAStochasticDiffEq.constructSOSRA2StochasticDiffEq.constructSRA1StochasticDiffEq.constructSRA2StochasticDiffEq.constructSRA3StochasticDiffEq.constructSRIOpt1StochasticDiffEq.constructSRIOpt2StochasticDiffEq.constructSRIW1StochasticDiffEq.constructSRIW2StochasticDiffEq.current_extrapolantStochasticDiffEq.current_extrapolant!StochasticDiffEq.current_interpolantStochasticDiffEq.current_interpolant!StochasticDiffEq.deleteat!StochasticDiffEq.deleteat_noise!StochasticDiffEq.deleteat_non_user_cache!StochasticDiffEq.derivativeStochasticDiffEq.derivative!StochasticDiffEq.determine_chunksizeStochasticDiffEq.du_cacheStochasticDiffEq.evalStochasticDiffEq.fill_new_noise_caches!StochasticDiffEq.fix_dtnew_at_bounds!StochasticDiffEq.full_cacheStochasticDiffEq.generate_tildesStochasticDiffEq.get_chunksizeStochasticDiffEq.get_current_alg_autodiffStochasticDiffEq.get_current_alg_orderStochasticDiffEq.get_dtStochasticDiffEq.get_duStochasticDiffEq.get_du!StochasticDiffEq.get_proposed_dtStochasticDiffEq.get_tmp_cacheStochasticDiffEq.handle_callback_modifiers!StochasticDiffEq.handle_callbacks!StochasticDiffEq.handle_dt!StochasticDiffEq.handle_tstop!StochasticDiffEq.has_expStochasticDiffEq.has_expmvStochasticDiffEq.has_expmv!StochasticDiffEq.has_ldivStochasticDiffEq.has_ldiv!StochasticDiffEq.has_mulStochasticDiffEq.has_mul!StochasticDiffEq.includeStochasticDiffEq.initStochasticDiffEq.initialize!StochasticDiffEq.initialize_callbacks!StochasticDiffEq.intervalsStochasticDiffEq.is_compositeStochasticDiffEq.is_constantStochasticDiffEq.is_split_stepStochasticDiffEq.is_stiffStochasticDiffEq.isadaptiveStochasticDiffEq.isdiscreteStochasticDiffEq.isdtchangeableStochasticDiffEq.isinplaceStochasticDiffEq.jac_iterStochasticDiffEq.jacobianStochasticDiffEq.jacobian!StochasticDiffEq.loopfooter!StochasticDiffEq.loopheader!StochasticDiffEq.modify_dt_for_tstops!StochasticDiffEq.modify_dtnew_for_tstops!StochasticDiffEq.perform_step!StochasticDiffEq.qmax_defaultStochasticDiffEq.qmin_defaultStochasticDiffEq.rand_cacheStochasticDiffEq.ratenoise_cacheStochasticDiffEq.reeval_internals_due_to_modification!StochasticDiffEq.reinit!StochasticDiffEq.remakeStochasticDiffEq.reset_alg_dependent_opts!StochasticDiffEq.resize!StochasticDiffEq.resize_noise!StochasticDiffEq.resize_non_user_cache!StochasticDiffEq.savevalues!StochasticDiffEq.sde_determine_initdtStochasticDiffEq.sde_extrapolantStochasticDiffEq.sde_extrapolant!StochasticDiffEq.sde_interpolantStochasticDiffEq.sde_interpolant!StochasticDiffEq.sde_interpolationStochasticDiffEq.sde_interpolation!StochasticDiffEq.set_abstol!StochasticDiffEq.set_gamma!StochasticDiffEq.set_proposed_dt!StochasticDiffEq.set_reltol!StochasticDiffEq.set_t!StochasticDiffEq.set_u!StochasticDiffEq.solution_endpoint_match_cur_integrator!StochasticDiffEq.solveStochasticDiffEq.solve!StochasticDiffEq.step!StochasticDiffEq.terminate!StochasticDiffEq.transfer_cache!StochasticDiffEq.tstop_saveat_disc_handlingStochasticDiffEq.tuplesStochasticDiffEq.u_cacheStochasticDiffEq.u_modified!StochasticDiffEq.unwrap_algStochasticDiffEq.update_coefficientsStochasticDiffEq.update_coefficients!StochasticDiffEq.update_noise!StochasticDiffEq.user_cacheStochasticDiffEq.warn_compat"
},

]}
