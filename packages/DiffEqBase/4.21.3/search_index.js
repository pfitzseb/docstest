var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqBase.jl-1",
    "page": "Readme",
    "title": "DiffEqBase.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)DiffEqBase.jl is a component package in the DiffEq ecosystem. It holds the common types and utility functions which are shared by other component packages in order to reduce the size of dependencies. This is so that the packages for the common interface do not require one another, allowing users to use the functionality of individual packages if they so please. Users interested in using this functionality in full should check out DifferentialEquations.jlThe documentation for the interfaces here can be found in DiffEqDocs.jl and DiffEqDevDocs.jl. Specific parts to note are:Overview\nDeveloping a Problem\nThe Common Solver Options\nPerformance Overloads Interface"
},

{
    "location": "autodocs/#DiffEqBase.@add_kwonly",
    "page": "Docstrings",
    "title": "DiffEqBase.@add_kwonly",
    "category": "macro",
    "text": "@add_kwonly function_definition\n\nDefine keyword-only version of the function_definition.\n\n@add_kwonly function f(a, b; c=1, d=2)\n    ...\nend\n\nexpands to:\n\nfunction f(x; y=1)\n    ...\nend\nfunction f(; x = error(\"No argument x\"), y=1)\n    ...\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.AffineDiffEqOperator",
    "page": "Docstrings",
    "title": "DiffEqBase.AffineDiffEqOperator",
    "category": "type",
    "text": "AffineDiffEqOperator{T} <: AbstractDiffEqOperator{T}\n\nEx: (A₁(t) + ... + Aₙ(t))*u + B₁(t) + ... + Bₙ(t)\n\nAffineDiffEqOperator{T}(As,Bs,u_cache=nothing)\n\nTakes in two tuples for split Affine DiffEqs\n\nupdate_coefficients! works by updating the coefficients of the component operators.\nFunction calls L(u,p,t) and L(u,p,t,du) are fallbacks interpretted in this form. This will allow them to work directly in the nonlinear ODE solvers without modification.\nf(u,p,t,du) is only allowed if a u_cache is given\nB(t) can be Union{Number,AbstractArray}, in which case they are constants. Otherwise they are interpreted they are functions v=B(t) and B(v,t)\n\nSolvers will see this operator from integrator.f and can interpret it by checking the internals of As and Bs. For example, it can check is_constant(As[1]) etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.ExplicitRKTableau",
    "page": "Docstrings",
    "title": "DiffEqBase.ExplicitRKTableau",
    "category": "type",
    "text": "ExplicitRKTableau\n\nHolds a tableau which defines an explicit Runge-Kutta method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.ImplicitRKTableau",
    "page": "Docstrings",
    "title": "DiffEqBase.ImplicitRKTableau",
    "category": "type",
    "text": "ImplicitRKTableau\n\nHolds a tableau which defines an implicit Runge-Kutta method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.check_error",
    "page": "Docstrings",
    "title": "DiffEqBase.check_error",
    "category": "function",
    "text": "check_error(integrator)\n\nCheck state of integrator and return one of the Return Codes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.check_error!",
    "page": "Docstrings",
    "title": "DiffEqBase.check_error!",
    "category": "function",
    "text": "check_error!(integrator)\n\nSame as check_error but also set solution\'s return code (integrator.sol.retcode) and run postamble!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.copy_fields",
    "page": "Docstrings",
    "title": "DiffEqBase.copy_fields",
    "category": "function",
    "text": "copy_fields(arr:AbstractArray, template::DEDataArray)\n\nCreate DEDataArray that wraps arr with all other fields set to a deep copy of the value in template.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.copy_fields!",
    "page": "Docstrings",
    "title": "DiffEqBase.copy_fields!",
    "category": "function",
    "text": "copy_fields!(dest::T, src::T) where {T<:DEDataArray}\n\nReplace all fields of dest except of its wrapped array with a copy of the value in src. Arrays are recursively copied.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant",
    "category": "function",
    "text": "Hairer Norsett Wanner Solving Ordinary Differential Equations I - Nonstiff Problems Page 190\n\nHermite Interpolation\n\n\n\n\n\nHermite Interpolation\n\n\n\n\n\nHermite Interpolation\n\n\n\n\n\nHermite Interpolation\n\n\n\n\n\nLinear Interpolation\n\n\n\n\n\nConstant Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "function",
    "text": "Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 190\n\nHermite Interpolation\n\n\n\n\n\nHermite Interpolation\n\n\n\n\n\nHermite Interpolation\n\n\n\n\n\nHermite Interpolation\n\n\n\n\n\nLinear Interpolation\n\n\n\n\n\nLinear Interpolation\n\n\n\n\n\nConstant Interpolation\n\n\n\n\n\nConstant Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolation",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolation",
    "category": "function",
    "text": "interpolation(tval::Number,t,u,ks)\n\nGet the value at tval where the solution is known at the times t (sorted), with values u and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolation!",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolation!",
    "category": "function",
    "text": "interpolation(tvals,t,u,ks)\n\nGet the value at tvals where the solution is known at the times t (sorted), with values u and derivatives ks\n\n\n\n\n\ninterpolation!(out,tval::Number,t,u,ks)\n\nGet the value at tval where the solution is known at the times t (sorted), with values u and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.numargs",
    "page": "Docstrings",
    "title": "DiffEqBase.numargs",
    "category": "function",
    "text": "numparameters(f)\n\nReturns the number of parameters of f for the method which has the most parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.remake",
    "page": "Docstrings",
    "title": "DiffEqBase.remake",
    "category": "function",
    "text": "remake(thing; <keyword arguments>)\n\nRe-construct thing with new field values specified by the keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.set_t!",
    "page": "Docstrings",
    "title": "DiffEqBase.set_t!",
    "category": "function",
    "text": "set_t!(integrator::DEIntegrator, t::Real)\n\nSet current time point of the integrator to t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.set_u!",
    "page": "Docstrings",
    "title": "DiffEqBase.set_u!",
    "category": "function",
    "text": "set_u!(integrator::DEIntegrator, u)\n\nSet current state of the integrator to u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.set_ut!",
    "page": "Docstrings",
    "title": "DiffEqBase.set_ut!",
    "category": "function",
    "text": "set_ut!(integrator::DEIntegrator, u, t)\n\nSet current state of the integrator to u and t\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.step!",
    "page": "Docstrings",
    "title": "DiffEqBase.step!",
    "category": "function",
    "text": "step!(integ::DEIntegrator [, dt [, stop_at_tdt]])\n\nPerform one (successful) step on the integrator.\n\nAlternative, if a dt is given, then step! the integrator until there is a temporal difference ≥ dt in integ.t.  When true is passed to the optional third argument, the integrator advances exactly dt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.undefined_exports",
    "page": "Docstrings",
    "title": "DiffEqBase.undefined_exports",
    "category": "function",
    "text": "undefined_exports(mod)\n\nList symbols export\'ed but not actually defined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DiffEqBase.@CSI_strDiffEqBase.@add_kwonlyDiffEqBase.@defDiffEqBase.AbstractAnalyticalProblemDiffEqBase.AbstractAnalyticalSolutionDiffEqBase.AbstractBVProblemDiffEqBase.AbstractConstantLagDDEProblemDiffEqBase.AbstractContinuousCallbackDiffEqBase.AbstractDAEAlgorithmDiffEqBase.AbstractDAEFunctionDiffEqBase.AbstractDAEIntegratorDiffEqBase.AbstractDAEProblemDiffEqBase.AbstractDAESolutionDiffEqBase.AbstractDDEAlgorithmDiffEqBase.AbstractDDEFunctionDiffEqBase.AbstractDDEIntegratorDiffEqBase.AbstractDDEProblemDiffEqBase.AbstractDDESolutionDiffEqBase.AbstractDEOptionsDiffEqBase.AbstractDiffEqFunctionDiffEqBase.AbstractDiffEqInterpolationDiffEqBase.AbstractDiffEqLinearOperatorDiffEqBase.AbstractDiffEqOperatorDiffEqBase.AbstractDiscreteCallbackDiffEqBase.AbstractDiscreteFunctionDiffEqBase.AbstractDiscreteProblemDiffEqBase.AbstractDynamicalODEProblemDiffEqBase.AbstractMonteCarloEstimatorDiffEqBase.AbstractMonteCarloProblemDiffEqBase.AbstractMonteCarloSolutionDiffEqBase.AbstractNoTimeSolutionDiffEqBase.AbstractNoiseProblemDiffEqBase.AbstractNoiseProcessDiffEqBase.AbstractODEAlgorithmDiffEqBase.AbstractODEFunctionDiffEqBase.AbstractODEIntegratorDiffEqBase.AbstractODEProblemDiffEqBase.AbstractODESolutionDiffEqBase.AbstractParameterizedFunctionDiffEqBase.AbstractRODEAlgorithmDiffEqBase.AbstractRODEFunctionDiffEqBase.AbstractRODEIntegratorDiffEqBase.AbstractRODEProblemDiffEqBase.AbstractRODESolutionDiffEqBase.AbstractReactionNetworkDiffEqBase.AbstractSDEAlgorithmDiffEqBase.AbstractSDEFunctionDiffEqBase.AbstractSDEIntegratorDiffEqBase.AbstractSDEProblemDiffEqBase.AbstractSecondOrderODEAlgorithmDiffEqBase.AbstractSecondOrderODEIntegratorDiffEqBase.AbstractSecondOrderODEProblemDiffEqBase.AbstractSensitivitySolutionDiffEqBase.AbstractSplitODEProblemDiffEqBase.AbstractSplitSDEProblemDiffEqBase.AbstractSteadyStateAlgorithmDiffEqBase.AbstractSteadyStateIntegratorDiffEqBase.AbstractSteadyStateProblemDiffEqBase.AbstractSteadyStateSolutionDiffEqBase.AbstractTimeseriesSolutionDiffEqBase.AffineDiffEqOperatorDiffEqBase.AnalyticalProblemDiffEqBase.BVProblemDiffEqBase.CallbackSetDiffEqBase.ConstantInterpolationDiffEqBase.ContinuousCallbackDiffEqBase.ConvergenceSetupDiffEqBase.DAEFunctionDiffEqBase.DAEProblemDiffEqBase.DAESolutionDiffEqBase.DDEFunctionDiffEqBase.DDEProblemDiffEqBase.DEAlgorithmDiffEqBase.DECacheDiffEqBase.DECallbackDiffEqBase.DECostFunctionDiffEqBase.DEDataArrayDiffEqBase.DEDataMatrixDiffEqBase.DEDataVectorDiffEqBase.DEElementDiffEqBase.DEFAULT_LINSOLVEDiffEqBase.DEFAULT_PLOT_FUNCDiffEqBase.DEIntegratorDiffEqBase.DEProblemDiffEqBase.DESensitivityDiffEqBase.DESolutionDiffEqBase.DESolutionIteratorDiffEqBase.DISCRETE_INPLACE_DEFAULTDiffEqBase.DISCRETE_OUTOFPLACE_DEFAULTDiffEqBase.DiffEqBaseDiffEqBase.DiscreteCallbackDiffEqBase.DiscreteFunctionDiffEqBase.DiscreteProblemDiffEqBase.DynamicalODEFunctionDiffEqBase.DynamicalODEProblemDiffEqBase.ExplicitRKTableauDiffEqBase.HermiteInterpolationDiffEqBase.INITIALIZE_DEFAULTDiffEqBase.ImplicitRKTableauDiffEqBase.IntegratorIntervalsDiffEqBase.IntegratorTuplesDiffEqBase.InternalEulerDiffEqBase.LinSolveFactorizeDiffEqBase.LinearInterpolationDiffEqBase.MonteCarloProblemDiffEqBase.MonteCarloSolutionDiffEqBase.MonteCarloSummaryDiffEqBase.MonteCarloTestSolutionDiffEqBase.NO_COLORDiffEqBase.NoiseProblemDiffEqBase.ODEFunctionDiffEqBase.ODEProblemDiffEqBase.ODERKTableauDiffEqBase.ODESolutionDiffEqBase.ODE_DEFAULT_ISOUTOFDOMAINDiffEqBase.ODE_DEFAULT_NORMDiffEqBase.ODE_DEFAULT_PROG_MESSAGEDiffEqBase.ODE_DEFAULT_UNSTABLE_CHECKDiffEqBase.RECOMPILE_BY_DEFAULTDiffEqBase.RODEFunctionDiffEqBase.RODEProblemDiffEqBase.RODESolutionDiffEqBase.SDEFunctionDiffEqBase.SDEProblemDiffEqBase.SecondOrderODEProblemDiffEqBase.SplitFunctionDiffEqBase.SplitODEProblemDiffEqBase.SplitSDEFunctionDiffEqBase.SplitSDEProblemDiffEqBase.StandardBVProblemDiffEqBase.StandardODEProblemDiffEqBase.StandardSDEProblemDiffEqBase.SteadyStateProblemDiffEqBase.SteadyStateSolutionDiffEqBase.TYPE_COLORDiffEqBase.TableauDiffEqBase.TimeChoiceIteratorDiffEqBase.TwoPointBVPFunctionDiffEqBase.TwoPointBVProblemDiffEqBase.UNITLESS_ABS2DiffEqBase.__has_analyticDiffEqBase.__has_invWDiffEqBase.__has_invW_tDiffEqBase.__has_jacDiffEqBase.__has_paramderivDiffEqBase.__has_paramjacDiffEqBase.__has_symsDiffEqBase.__has_tgradDiffEqBase.__initDiffEqBase.__solveDiffEqBase.add_analytic_labels!DiffEqBase.add_kwonlyDiffEqBase.add_labels!DiffEqBase.add_saveat!DiffEqBase.add_tstop!DiffEqBase.addat!DiffEqBase.addat_non_user_cache!DiffEqBase.auto_dt_reset!DiffEqBase.build_solutionDiffEqBase.calculate_monte_errorsDiffEqBase.calculate_solution_errors!DiffEqBase.check_errorDiffEqBase.check_error!DiffEqBase.check_first_argDiffEqBase.check_keywordsDiffEqBase.copy_fieldsDiffEqBase.copy_fields!DiffEqBase.deleteat!DiffEqBase.deleteat_non_user_cache!DiffEqBase.doneDiffEqBase.du_cacheDiffEqBase.evalDiffEqBase.expmvDiffEqBase.expmv!DiffEqBase.full_cacheDiffEqBase.get_concrete_problemDiffEqBase.get_dtDiffEqBase.get_duDiffEqBase.get_du!DiffEqBase.get_proposed_dtDiffEqBase.get_tmp_cacheDiffEqBase.handle_distribution_u0DiffEqBase.has_analyticDiffEqBase.has_expDiffEqBase.has_expmvDiffEqBase.has_expmv!DiffEqBase.has_invWDiffEqBase.has_invW_tDiffEqBase.has_jacDiffEqBase.has_ldivDiffEqBase.has_ldiv!DiffEqBase.has_mulDiffEqBase.has_mul!DiffEqBase.has_paramjacDiffEqBase.has_reinitDiffEqBase.has_symsDiffEqBase.has_tgradDiffEqBase.includeDiffEqBase.initDiffEqBase.initialize!DiffEqBase.interp_summaryDiffEqBase.interpolantDiffEqBase.interpolant!DiffEqBase.interpolationDiffEqBase.interpolation!DiffEqBase.interpret_varsDiffEqBase.intervalsDiffEqBase.is_constantDiffEqBase.is_diagonal_noiseDiffEqBase.isadaptiveDiffEqBase.isautodifferentiableDiffEqBase.isinplaceDiffEqBase.last_step_failedDiffEqBase.nextDiffEqBase.num_types_in_tupleDiffEqBase.numargsDiffEqBase.parameterless_typeDiffEqBase.plot_indicesDiffEqBase.postamble!DiffEqBase.problem_new_parametersDiffEqBase.promote_tspanDiffEqBase.reinit!DiffEqBase.remakeDiffEqBase.resize!DiffEqBase.resize_non_user_cache!DiffEqBase.savevalues!DiffEqBase.set_abstol!DiffEqBase.set_proposed_dt!DiffEqBase.set_reltol!DiffEqBase.set_t!DiffEqBase.set_u!DiffEqBase.set_ut!DiffEqBase.solplot_vecs_and_labelsDiffEqBase.solution_new_retcodeDiffEqBase.solution_new_tslocationDiffEqBase.solveDiffEqBase.solve!DiffEqBase.split_callbacksDiffEqBase.startDiffEqBase.step!DiffEqBase.struct_as_dictDiffEqBase.terminate!DiffEqBase.tuplesDiffEqBase.u_cacheDiffEqBase.u_modified!DiffEqBase.u_nDiffEqBase.undefined_exportsDiffEqBase.update_coefficientsDiffEqBase.update_coefficients!DiffEqBase.user_cacheDiffEqBase.warn_compat"
},

]}
