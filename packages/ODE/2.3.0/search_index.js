var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Various basic Ordinary Differential Equation solvers implemented in Julia.(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Travis) (Image: AppVeyor) (Image: Coverage Status)Pull requests are always highly welcome to fix bugs, add solvers, or anything else!"
},

{
    "location": "#Current-status-of-the-project-1",
    "page": "Readme",
    "title": "Current status of the project",
    "category": "section",
    "text": "This project is deprecated in favor of DifferentialEquations.jl and its ODE solvers OrdinaryDiffEq.jl. This library is in \"maitanance mode\", meaning that it is being upgraded with each Julia version, but not seeing active feature development. ODE.jl contains the basic functionality that was moved here when the package was originally moved from Base. Although quite poorly tested, at least some of the functionality is quite reliable. Use at your own risk."
},

{
    "location": "#Usage-On-the-Common-Interface-1",
    "page": "Readme",
    "title": "Usage On the Common Interface",
    "category": "section",
    "text": "The ODE.jl methods can be used on the common interface. Simply use the solver\'s name as the algorithm. For example, the ODE tutorial can be solved using ODE.jl\'s ode45 by using the following commands:using ODE\nf(u,p,t) = 1.01*u\nu0=1/2\ntspan = (0.0,1.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,ode45(),reltol=1e-8,abstol=1e-8)\nusing Plots\nplot(sol,linewidth=5,title=\"Solution to the linear ODE with a thick line\",\n     xaxis=\"Time (t)\",yaxis=\"u(t) (in μm)\",label=\"My Thick Line!\") # legend=false\nplot!(sol.t, t->0.5*exp(1.01t),lw=3,ls=:dash,label=\"True Solution!\")Note that ODE.jl does not natively support inplace updates. Inplace functions f(t,u,du) are converted to out-of-place functions du=f(t,u) and thus it will not be any more efficient."
},

{
    "location": "#Basic-API-1",
    "page": "Readme",
    "title": "Basic API",
    "category": "section",
    "text": "All of the ODE.jl solvers the following basic API:tout, yout = odeXX(F, y0, tspan; keywords...)to solve the explicitly defined ODE by dy/dt = F(t,y). A few other solvers are also exported, see the source code for details.The adaptive solvers accept the following keywordsnorm: user-supplied norm for determining the error E (default Base.vecnorm),\nabstol and/or reltol: an integration step is accepted if E <= abstol || E <= reltol*abs(y) (defaults reltol = 1e-5, abstol = 1e-8),\nmaxstep, minstep and initstep: determine the maximal, minimal and initial integration step (defaults minstep=|tspan[end] - tspan[1]|/1e9, maxstep=|tspan[end] - tspan[1]|/2.5 and automatic initial step estimation).\npoints=:all (default): output is given for each value in tspan as well as for each intermediate point the solver used.\npoints=:specified: output is given only for each value in tspan.Additionally, ode23s solver supportsjacobian = G(t,y): user-supplied Jacobian G(t,y) = dF(t,y)/dy (default estimate by finite-difference method).There are also fixed step Runge-Kutta and Rosenbrock solvers available."
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "Currently, ODE exports the following adaptive solvers:ode23: 2nd order adaptive solver with 3rd order error control, using the Bogacki–Shampine coefficients\node45: 4th order adaptive solver with 5th order error control, using the Dormand Prince coefficients. Fehlberg and Cash-Karp coefficients are also available.\node78: 7th order adaptive solver with 8th order error control, using the Fehlberg coefficients.\node23s: 2nd/3rd order adaptive solver for stiff problems, using a modified Rosenbrock triple.For a full list, see the DiffEqDocs ODE Solvers page."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The examples directory contain a few notebooks that show how to get started. You can also see them here:Simple differential equation\nLorenz Attractor\nTerminal Velocity"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ODE.AbstractAnalyticalProblemODE.AffineDiffEqOperatorODE.AnalyticalProblemODE.BVProblemODE.CallbackSetODE.ContinuousCallbackODE.DAEFunctionODE.DAEProblemODE.DAESolutionODE.DDEFunctionODE.DDEProblemODE.DEDataArrayODE.DEDataMatrixODE.DEDataVectorODE.DEFAULT_LINSOLVEODE.DESolutionODE.DiffEqBaseODE.DiscreteCallbackODE.DiscreteFunctionODE.DiscreteProblemODE.DynamicalODEFunctionODE.DynamicalODEProblemODE.LinSolveFactorizeODE.MonteCarloProblemODE.MonteCarloSolutionODE.MonteCarloSummaryODE.MonteCarloTestSolutionODE.NoiseProblemODE.ODEODE.ODEFunctionODE.ODEProblemODE.ODESolutionODE.ODEjlAlgorithmODE.RODEFunctionODE.RODEProblemODE.RODESolutionODE.SDEFunctionODE.SDEProblemODE.SecondOrderODEProblemODE.SplitFunctionODE.SplitODEProblemODE.SplitSDEFunctionODE.SplitSDEProblemODE.SteadyStateProblemODE.SteadyStateSolutionODE.TableauODE.TableauRKExplicitODE.TimeChoiceIteratorODE.TwoPointBVProblemODE.__init__ODE.add_saveat!ODE.add_tstop!ODE.addat!ODE.addat_non_user_cache!ODE.addsteps!ODE.allocate!ODE.auto_dt_reset!ODE.bt_dopri5ODE.bt_feh78ODE.bt_feulerODE.bt_heunODE.bt_midpointODE.bt_rk21ODE.bt_rk23ODE.bt_rk4ODE.bt_rk45ODE.calc_next_k!ODE.change_t_via_interpolation!ODE.check_errorODE.check_keywordsODE.conv_fieldODE.deleteat!ODE.deleteat_non_user_cache!ODE.du_cacheODE.evalODE.fdjacobianODE.full_cacheODE.get_dtODE.get_duODE.get_du!ODE.get_proposed_dtODE.get_tmp_cacheODE.has_expODE.has_expmvODE.has_expmv!ODE.has_ldivODE.has_ldiv!ODE.has_mulODE.has_mul!ODE.hermite_interpODE.hermite_interp!ODE.hinitODE.includeODE.index_or_push!ODE.initODE.initialize!ODE.intervalsODE.isFSALODE.is_constantODE.isadaptiveODE.isdiscreteODE.isexplicitODE.isinplaceODE.isoutofdomainODE.kr4_coefficientsODE.make_consistent_typesODE.ms_coefficients4ODE.ode1ODE.ode21ODE.ode23ODE.ode23sODE.ode2_heunODE.ode2_midpointODE.ode4ODE.ode45ODE.ode45_dpODE.ode45_feODE.ode4msODE.ode4sODE.ode4s_krODE.ode4s_sODE.ode5msODE.ode78ODE.ode_msODE.oderk_adaptODE.oderk_fixedODE.oderosenbrockODE.orderODE.rand_cacheODE.ratenoise_cacheODE.reeval_internals_due_to_modification!ODE.reinit!ODE.remakeODE.resize!ODE.resize_non_user_cache!ODE.rk_embedded_step!ODE.s4_coefficientsODE.savevalues!ODE.set_abstol!ODE.set_proposed_dt!ODE.set_reltol!ODE.set_t!ODE.set_u!ODE.solveODE.solve!ODE.step!ODE.stepsize_hw92!ODE.terminate!ODE.tuplesODE.u_cacheODE.u_modified!ODE.update_coefficientsODE.update_coefficients!ODE.user_cacheODE.vcat_nosplatODE.warn_compatODE.warnkeywordsODE.warnlist"
},

]}
