var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DelayDiffEq.jl-1",
    "page": "Readme",
    "title": "DelayDiffEq.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)DelayDiffEq.jl is a component package in the DifferentialEquations ecosystem. It holds the delay differential equation solvers and utilities. It is built on top of OrdinaryDiffEq to extend those solvers for delay differential equations. While completely independent and usable on its own, users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "DelayDiffEq.jl is part of the JuliaDiffEq common interface, but can be used independently of DifferentialEquations.jl. The only requirement is that the user passes a DelayDiffEq.jl algorithm to solve. For example, we can solve the DDE tutorial from the documentation using the MethodOfSteps(Tsit5()) algorithm:using DelayDiffEq\nconst p0 = 0.2; const q0 = 0.3; const v0 = 1; const d0 = 5\nconst p1 = 0.2; const q1 = 0.3; const v1 = 1; const d1 = 1\nconst d2 = 1; const beta0 = 1; const beta1 = 1; const tau = 1\nfunction bc_model(du,u,h,p,t)\n  du[1] = (v0/(1+beta0*(h(p, t-tau)[3]^2))) * (p0 - q0)*u[1] - d0*u[1]\n  du[2] = (v0/(1+beta0*(h(p, t-tau)[3]^2))) * (1 - p0 + q0)*u[1] +\n          (v1/(1+beta1*(h(p, t-tau)[3]^2))) * (p1 - q1)*u[2] - d1*u[2]\n  du[3] = (v1/(1+beta1*(h(p, t-tau)[3]^2))) * (1 - p1 + q1)*u[2] - d2*u[3]\nend\nlags = [tau]\nh(p, t) = ones(3)\ntspan = (0.0,10.0)\nu0 = [1.0,1.0,1.0]\nprob = DDEProblem(bc_model,u0,h,tspan,constant_lags = lags)\nalg = MethodOfSteps(Tsit5())\nsol = solve(prob,alg)\nusing Plots; plot(sol)Both constant and state-dependent lags are supported. Interfacing with OrdinaryDiffEq.jl for implicit methods for stiff equations is also supported."
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "For the list of available solvers, please refer to the DifferentialEquations.jl DDE Solvers page. For options for the solve command, see the common solver options page."
},

{
    "location": "autodocs/#DelayDiffEq.Discontinuity",
    "page": "Docstrings",
    "title": "DelayDiffEq.Discontinuity",
    "category": "type",
    "text": "Discontinuity(t, order::Int)\n\nObject of discontinuity of order order at time t, i.e. discontinuity of orderth derivative at time t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.DiscontinuityCallback",
    "page": "Docstrings",
    "title": "DelayDiffEq.DiscontinuityCallback",
    "category": "type",
    "text": "DiscontinuityCallback(lags, discontinuities::Vector{<:Discontinuity};\n                      [interp_points::Int=10, abstol=1e-12, reltol=0])\n\nCallback that tracks discontinuities that are propagated by dependent lags of the form (u,p,t) -> lag(u,p,t).\n\nHereby a number interp_points of interpolation points are used to first check for different signs of functions f(t) = T + lag(u(t)pt) - t, where T is time point of a previous discontinuity and t is contained in the current time interval. This shows that the current time interval contains propagated discontinuities of which the exact time point is then determined by a root finding algorithm. The sign at the lower bound of the time interval, i.e. at tprev, is set to 0 with absolute tolerance abstol and relative tolerance reltol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.HistoryFunction",
    "page": "Docstrings",
    "title": "DelayDiffEq.HistoryFunction",
    "category": "type",
    "text": "HistoryFunction(h, sol, integrator)\n\nWrap history function h, solution sol, and integrator integrator to create a common interface for retrieving values at any time point with varying accuracy.\n\nBefore the initial time point of solution sol values are calculated by history function h, for time points in the time span of sol interpolated values of sol are returned, and after the final time point of sol an inter- or extrapolation of the current state of integrator integrator is retrieved.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.MethodOfSteps",
    "page": "Docstrings",
    "title": "DelayDiffEq.MethodOfSteps",
    "category": "type",
    "text": "MethodOfSteps(alg; constrained::Bool=false, fixedpoint_abstol=nothing,\n              fixedpoint_reltol=nothing, fixedpoint_norm=nothing,\n              max_fixedpoint_iters::Int=10)\n\nConstruct an algorithm that solves delay differential equations by the method of steps, where alg is an ODE algorithm from OrdinaryDiffEq.jl without lazy interpolation upon which the calculation of steps is based.\n\nIf the algorithm is constrained only steps of size at most the minimal delay will be taken. If it is unconstrained, fixed-point iteration is applied for step sizes that exceed the minimal delay.\n\nThe absolute and relative tolerance of the fixed-point iterations can be set by fixedpoint_abstol and fixedpoint_reltol, respectively, either as scalars or vectors. Based on these tolerances error estimates are calculated during the fixed-point iterations with a norm that may be specified as fixedpoint_norm. Fixed-point iterations are stopped if the error estimate is less than 1 or after the maximal number max_fixedpoint_iters of iteration steps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.add_next_discontinuities!",
    "page": "Docstrings",
    "title": "DelayDiffEq.add_next_discontinuities!",
    "category": "function",
    "text": "add_next_discontinuities!(integrator::DDEIntegrator, order[, t=integrator.t])\n\nAdd discontinuities of next order that are propagated from discontinuity of order order at time t in integrator, but only if order is less or equal than the order of the applied method or the problem is neutral.\n\nDiscontinuities caused by constant delays are immediately calculated, and discontinuities caused by dependent delays are tracked by a callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.advance_ode_integrator!",
    "page": "Docstrings",
    "title": "DelayDiffEq.advance_ode_integrator!",
    "category": "function",
    "text": "advance_ode_integrator!(integrator::DDEIntegrator)\n\nAdvance ODE integrator of integrator to next time interval, values and complete interpolation data of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.agrees",
    "page": "Docstrings",
    "title": "DelayDiffEq.agrees",
    "category": "function",
    "text": "agrees(h, u, p, t)\n\nDetermine whether history function evaluates to u at time point t for parameters p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.assign_expr",
    "page": "Docstrings",
    "title": "DelayDiffEq.assign_expr",
    "category": "function",
    "text": "assign_expr(::Val{name}, ::Type{T}, ::Type{cache})\n\nCreate expression that extracts field name of type T from cache of type cache to variable name.\n\nHereby u, uprev, uprev2, and function f are updated, if required.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.auto_dt_reset!",
    "page": "Docstrings",
    "title": "DiffEqBase.auto_dt_reset!",
    "category": "function",
    "text": "auto_dt_reset!(dde_int::DDEIntegrator)\n\nAutomatically determine initial time step of dde_int.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.build_linked_cache",
    "page": "Docstrings",
    "title": "DelayDiffEq.build_linked_cache",
    "category": "function",
    "text": "build_linked_cache(cache, alg, u, uprev, uprev2, f, t, dt)\n\nCreate cache for algorithm alg from existing cache cache with updated u, uprev, uprev2, f, t, and dt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.build_solution_array",
    "page": "Docstrings",
    "title": "DelayDiffEq.build_solution_array",
    "category": "function",
    "text": "build_solution_array(integrator::DDEIntegrator)\n\nCreate a DiffEqArray of the time points and values that form the solution of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.build_solution_interpolation",
    "page": "Docstrings",
    "title": "DelayDiffEq.build_solution_interpolation",
    "category": "function",
    "text": "build_solution_interpolation(integrator::DDEIntegrator, sol::DiffEqArray)\n\nCreate interpolation data to solution of integrator, which is formed by time points and values in sol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.constant_extrapolant",
    "page": "Docstrings",
    "title": "DelayDiffEq.constant_extrapolant",
    "category": "function",
    "text": "constant_extrapolant(t, integrator::DEIntegrator, idxs, deriv)\n\nCalculate constant extrapolation of derivative deriv at time t and indices idxs for integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.constant_extrapolant!",
    "page": "Docstrings",
    "title": "DelayDiffEq.constant_extrapolant!",
    "category": "function",
    "text": "constant_extrapolant!(val, t, integrator::DEIntegrator, idxs, deriv)\n\nCalculate constant extrapolation of derivative deriv at time t and indices idxs for integrator, and save result in val if val is not nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.determine_discontinuity_existence",
    "page": "Docstrings",
    "title": "DelayDiffEq.determine_discontinuity_existence",
    "category": "function",
    "text": "determine_discontinuity_existence(prev_sign::Int, next_sign::Int, Θs, f)\n\nDetermine whether function f has a root in the interval [0, 1] by checking signs of f at 0 and 1 (prev_sign and next_sign, respectively) and at interpolation points in Θs.\n\nThis corresponds to the existence of a propagated discontinuity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.find_discontinuity_time",
    "page": "Docstrings",
    "title": "DelayDiffEq.find_discontinuity_time",
    "category": "function",
    "text": "find_discontinuity_time(integrator::DDEIntegrator, callback::DiscontinuityCallback,\n                        prev_sign::Int, next_sign::Int, Θs, f)\n\nFind time of propagated discontinuity for a certain dependent delay and previous discontinuity, which is root of the function f, in the current time interval of integrator with interpolation points Θs. Hereby f shows signs prev_sign and next_sign at both ends of the time interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.fsal_typeof",
    "page": "Docstrings",
    "title": "DelayDiffEq.fsal_typeof",
    "category": "function",
    "text": "fsal_typeof(integrator::ODEIntegrator)\n\nReturn type of FSAL of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.get_proposed_dt",
    "page": "Docstrings",
    "title": "DiffEqBase.get_proposed_dt",
    "category": "function",
    "text": "get_proposed_dt(integrator::DDEIntegrator)\n\nGet the time step that integrator will take after the current step.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.initialize!",
    "page": "Docstrings",
    "title": "DiffEqBase.initialize!",
    "category": "function",
    "text": "initialize!(integrator::DDEIntegrator)\n\nSet initial values of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.reduce_solution!",
    "page": "Docstrings",
    "title": "DelayDiffEq.reduce_solution!",
    "category": "function",
    "text": "reduce_solution!(integrator::DDEIntegrator, tmax)\n\nRemove time points of ODE solution of integrator up to time tmax that are not required for calculation of DDE solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.reeval_internals_due_to_modification!",
    "page": "Docstrings",
    "title": "DiffEqBase.reeval_internals_due_to_modification!",
    "category": "function",
    "text": "reeval_internals_due_to_modification!(integrator::DDEIntegrator)\n\nRecalculate interpolation data and update ODE integrator after changes by callbacks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.reinit!",
    "page": "Docstrings",
    "title": "DiffEqBase.reinit!",
    "category": "function",
    "text": "reinit!(integrator::DDEIntegrator[, u0 = integrator.sol.prob.u0;\n        t0 = integrator.sol.prob.tspan[1],\n        tf = integrator.sol.prob.tspan[2],\n        erase_sol = true,\n        kwargs...])\n\nReinitialize integrator with (optionally) different initial state u0, different integration interval from t0 to tf, and erased solution if erase_sol = true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.set_proposed_dt!",
    "page": "Docstrings",
    "title": "DiffEqBase.set_proposed_dt!",
    "category": "function",
    "text": "set_proposed_dt!(integrator::DDEIntegrator, dt)\n\nSet the time step that integrator will take after the current step to dt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.terminate!",
    "page": "Docstrings",
    "title": "DiffEqBase.terminate!",
    "category": "function",
    "text": "terminate!(integrator::DDEIntegrator)\n\nStop further calculations of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.u_modified!",
    "page": "Docstrings",
    "title": "DiffEqBase.u_modified!",
    "category": "function",
    "text": "u_modified!(integrator::DDEIntegrator, bool::Bool)\n\nSignal integrator whether state vector u was modified by a callback.\n\nA modified u will lead to recalculations in order to prevent discontinuities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DelayDiffEq.AB3DelayDiffEq.AB4DelayDiffEq.AB5DelayDiffEq.ABDF2DelayDiffEq.ABM32DelayDiffEq.ABM43DelayDiffEq.ABM54DelayDiffEq.AN5DelayDiffEq.AbstractAnalyticalProblemDelayDiffEq.AbstractMethodOfStepsAlgorithmDelayDiffEq.AffineDiffEqOperatorDelayDiffEq.AnalyticalProblemDelayDiffEq.Anas5DelayDiffEq.AutoDP5DelayDiffEq.AutoSwitchDelayDiffEq.AutoTsit5DelayDiffEq.AutoVern6DelayDiffEq.AutoVern7DelayDiffEq.AutoVern8DelayDiffEq.AutoVern9DelayDiffEq.BS3DelayDiffEq.BS5DelayDiffEq.BVProblemDelayDiffEq.CFRLDDRK64DelayDiffEq.CNAB2DelayDiffEq.CNLF2DelayDiffEq.CallbackSetDelayDiffEq.CalvoSanz4DelayDiffEq.CandyRoz4DelayDiffEq.CarpenterKennedy2N54DelayDiffEq.Cash4DelayDiffEq.CompositeAlgorithmDelayDiffEq.ContinuousCallbackDelayDiffEq.DAEFunctionDelayDiffEq.DAEProblemDelayDiffEq.DAESolutionDelayDiffEq.DDEFunctionDelayDiffEq.DDEIntegratorDelayDiffEq.DDEProblemDelayDiffEq.DEDataArrayDelayDiffEq.DEDataMatrixDelayDiffEq.DEDataVectorDelayDiffEq.DEFAULT_LINSOLVEDelayDiffEq.DESolutionDelayDiffEq.DGLDDRK73_CDelayDiffEq.DGLDDRK84_CDelayDiffEq.DGLDDRK84_FDelayDiffEq.DP5DelayDiffEq.DP5ThreadedDelayDiffEq.DP8DelayDiffEq.DPRKN12DelayDiffEq.DPRKN6DelayDiffEq.DPRKN8DelayDiffEq.DelayDiffEqDelayDiffEq.DelayDiffEqAlgorithmDelayDiffEq.DiffEqBaseDelayDiffEq.DiscontinuityDelayDiffEq.DiscontinuityCallbackDelayDiffEq.DiscreteCallbackDelayDiffEq.DiscreteFunctionDelayDiffEq.DiscreteProblemDelayDiffEq.DynamicalODEFunctionDelayDiffEq.DynamicalODEProblemDelayDiffEq.EPIRK4s3ADelayDiffEq.EPIRK4s3BDelayDiffEq.EPIRK5P1DelayDiffEq.EPIRK5P2DelayDiffEq.EPIRK5s3DelayDiffEq.ERKN4DelayDiffEq.ERKN5DelayDiffEq.ETD1DelayDiffEq.ETD2DelayDiffEq.ETDRK2DelayDiffEq.ETDRK3DelayDiffEq.ETDRK4DelayDiffEq.EXPRB53s3DelayDiffEq.EulerDelayDiffEq.Exp4DelayDiffEq.ExplicitRKDelayDiffEq.Exprb32DelayDiffEq.Exprb43DelayDiffEq.Feagin10DelayDiffEq.Feagin12DelayDiffEq.Feagin14DelayDiffEq.FunctionMapDelayDiffEq.GRK4ADelayDiffEq.GRK4TDelayDiffEq.GenericIIF1DelayDiffEq.GenericIIF2DelayDiffEq.GenericImplicitEulerDelayDiffEq.GenericTrapezoidDelayDiffEq.HSLDDRK64DelayDiffEq.Hairer4DelayDiffEq.Hairer42DelayDiffEq.HeunDelayDiffEq.HistoryFunctionDelayDiffEq.HochOst4DelayDiffEq.IMEXEulerDelayDiffEq.IRKN3DelayDiffEq.IRKN4DelayDiffEq.ImplicitEulerDelayDiffEq.ImplicitMidpointDelayDiffEq.JVODEDelayDiffEq.JVODE_AdamsDelayDiffEq.JVODE_BDFDelayDiffEq.KahanLi6DelayDiffEq.KahanLi8DelayDiffEq.KenCarp3DelayDiffEq.KenCarp4DelayDiffEq.KenCarp5DelayDiffEq.Kvaerno3DelayDiffEq.Kvaerno4DelayDiffEq.Kvaerno5DelayDiffEq.LawsonEulerDelayDiffEq.LinSolveFactorizeDelayDiffEq.LinearExponentialDelayDiffEq.MEBDF2DelayDiffEq.McAte2DelayDiffEq.McAte3DelayDiffEq.McAte4DelayDiffEq.McAte42DelayDiffEq.McAte5DelayDiffEq.McAte8DelayDiffEq.MethodOfStepsDelayDiffEq.MidpointDelayDiffEq.MidpointSplittingDelayDiffEq.MonteCarloProblemDelayDiffEq.MonteCarloSolutionDelayDiffEq.MonteCarloSummaryDelayDiffEq.MonteCarloTestSolutionDelayDiffEq.NDBLSRK124DelayDiffEq.NDBLSRK134DelayDiffEq.NDBLSRK144DelayDiffEq.NLAndersonDelayDiffEq.NLFunctionalDelayDiffEq.NLNewtonDelayDiffEq.NoiseProblemDelayDiffEq.NorsettEulerDelayDiffEq.Nystrom4DelayDiffEq.Nystrom4VelocityIndependentDelayDiffEq.Nystrom5VelocityIndependentDelayDiffEq.ODEFunctionDelayDiffEq.ODEProblemDelayDiffEq.ODESolutionDelayDiffEq.ORK256DelayDiffEq.OrdinaryDiffEqDelayDiffEq.OrdinaryDiffEqAlgorithmDelayDiffEq.OwrenZen3DelayDiffEq.OwrenZen4DelayDiffEq.OwrenZen5DelayDiffEq.ParsaniKetchesonDeconinck3S105DelayDiffEq.ParsaniKetchesonDeconinck3S173DelayDiffEq.ParsaniKetchesonDeconinck3S184DelayDiffEq.ParsaniKetchesonDeconinck3S205DelayDiffEq.ParsaniKetchesonDeconinck3S32DelayDiffEq.ParsaniKetchesonDeconinck3S53DelayDiffEq.ParsaniKetchesonDeconinck3S82DelayDiffEq.ParsaniKetchesonDeconinck3S94DelayDiffEq.PseudoVerletLeapfrogDelayDiffEq.QBDFDelayDiffEq.QBDF1DelayDiffEq.QBDF2DelayDiffEq.QNDFDelayDiffEq.QNDF1DelayDiffEq.QNDF2DelayDiffEq.RK4DelayDiffEq.RK46NLDelayDiffEq.RKCDelayDiffEq.ROCK2DelayDiffEq.ROCK4DelayDiffEq.RODEFunctionDelayDiffEq.RODEProblemDelayDiffEq.RODESolutionDelayDiffEq.ROS3PDelayDiffEq.RadauIIA5DelayDiffEq.RalstonDelayDiffEq.RichardsonEulerDelayDiffEq.Rodas3DelayDiffEq.Rodas4DelayDiffEq.Rodas42DelayDiffEq.Rodas4PDelayDiffEq.Rodas5DelayDiffEq.Ros4LStabDelayDiffEq.RosShamp4DelayDiffEq.Rosenbrock23DelayDiffEq.Rosenbrock32DelayDiffEq.Ruth3DelayDiffEq.SBDF2DelayDiffEq.SBDF3DelayDiffEq.SBDF4DelayDiffEq.SDEFunctionDelayDiffEq.SDEProblemDelayDiffEq.SDIRK2DelayDiffEq.SSPRK104DelayDiffEq.SSPRK22DelayDiffEq.SSPRK33DelayDiffEq.SSPRK432DelayDiffEq.SSPRK53DelayDiffEq.SSPRK53_2N1DelayDiffEq.SSPRK53_2N2DelayDiffEq.SSPRK54DelayDiffEq.SSPRK63DelayDiffEq.SSPRK73DelayDiffEq.SSPRK83DelayDiffEq.SSPRK932DelayDiffEq.SSPRKMSVS32DelayDiffEq.SSPRKMSVS43DelayDiffEq.SSPSDIRK2DelayDiffEq.SecondOrderODEProblemDelayDiffEq.SofSpa10DelayDiffEq.SplitEulerDelayDiffEq.SplitFunctionDelayDiffEq.SplitODEProblemDelayDiffEq.SplitSDEFunctionDelayDiffEq.SplitSDEProblemDelayDiffEq.SteadyStateProblemDelayDiffEq.SteadyStateSolutionDelayDiffEq.SymplecticEulerDelayDiffEq.TRBDF2DelayDiffEq.TSLDDRK74DelayDiffEq.TanYam7DelayDiffEq.TimeChoiceIteratorDelayDiffEq.TrapezoidDelayDiffEq.Tsit5DelayDiffEq.TsitPap8DelayDiffEq.TwoPointBVProblemDelayDiffEq.VCAB3DelayDiffEq.VCAB4DelayDiffEq.VCAB5DelayDiffEq.VCABMDelayDiffEq.VCABM3DelayDiffEq.VCABM4DelayDiffEq.VCABM5DelayDiffEq.Veldd4DelayDiffEq.Velds4DelayDiffEq.VelocityVerletDelayDiffEq.VerletLeapfrogDelayDiffEq.Vern6DelayDiffEq.Vern7DelayDiffEq.Vern8DelayDiffEq.Vern9DelayDiffEq.Yoshida6DelayDiffEq.add_next_discontinuities!DelayDiffEq.add_saveat!DelayDiffEq.add_tstop!DelayDiffEq.addat!DelayDiffEq.addat_non_user_cache!DelayDiffEq.addsteps!DelayDiffEq.advance_ode_integrator!DelayDiffEq.agreesDelayDiffEq.assign_exprDelayDiffEq.auto_dt_reset!DelayDiffEq.build_linked_cacheDelayDiffEq.build_solution_arrayDelayDiffEq.build_solution_interpolationDelayDiffEq.change_t_via_interpolation!DelayDiffEq.check_errorDelayDiffEq.check_keywordsDelayDiffEq.constant_extrapolantDelayDiffEq.constant_extrapolant!DelayDiffEq.constructDormandPrinceDelayDiffEq.copyat_or_push!DelayDiffEq.deleteat!DelayDiffEq.deleteat_non_user_cache!DelayDiffEq.determine_discontinuity_existenceDelayDiffEq.du_cacheDelayDiffEq.evalDelayDiffEq.find_discontinuity_timeDelayDiffEq.fsal_typeofDelayDiffEq.full_cacheDelayDiffEq.get_dtDelayDiffEq.get_duDelayDiffEq.get_du!DelayDiffEq.get_proposed_dtDelayDiffEq.get_tmp_cacheDelayDiffEq.has_expDelayDiffEq.has_expmvDelayDiffEq.has_expmv!DelayDiffEq.has_ldivDelayDiffEq.has_ldiv!DelayDiffEq.has_mulDelayDiffEq.has_mul!DelayDiffEq.includeDelayDiffEq.initDelayDiffEq.initialize!DelayDiffEq.intervalsDelayDiffEq.is_constantDelayDiffEq.isconstrainedDelayDiffEq.isdiscreteDelayDiffEq.isfsalDelayDiffEq.isinplaceDelayDiffEq.ode_addsteps!DelayDiffEq.ode_interpolantDelayDiffEq.rand_cacheDelayDiffEq.ratenoise_cacheDelayDiffEq.reduce_solution!DelayDiffEq.reeval_internals_due_to_modification!DelayDiffEq.reinit!DelayDiffEq.remakeDelayDiffEq.resize!DelayDiffEq.resize_non_user_cache!DelayDiffEq.savevalues!DelayDiffEq.set_abstol!DelayDiffEq.set_proposed_dt!DelayDiffEq.set_reltol!DelayDiffEq.set_t!DelayDiffEq.set_u!DelayDiffEq.solveDelayDiffEq.solve!DelayDiffEq.step!DelayDiffEq.terminate!DelayDiffEq.tuplesDelayDiffEq.u_cacheDelayDiffEq.u_modified!DelayDiffEq.update_coefficientsDelayDiffEq.update_coefficients!DelayDiffEq.user_cacheDelayDiffEq.warn_compat"
},

]}
