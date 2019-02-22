var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ODEInterfaceDiffEq-1",
    "page": "Readme",
    "title": "ODEInterfaceDiffEq",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)This package contains bindings for ODEInterface.jl to allow it to be used with the JuliaDiffEq common interface. For more information on using the solvers from this package, see the DifferentialEquations.jl documentation."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "A standard installation on MacOSX and Linux should work. On Windows, you need to install mingw32 compilers and add them to the path. MingW32 can be found here. Then add the path to your environment variables. An example path is:C:\\Program Files\\mingw-w64\\x86_64-6.1.0-posix-seh-rt_v5-rev0\\mingw64\\binNote that it is required that you add ODEInterface.jl as well;]add ODEInterfaceOtherwise you may have issues instantiating the solvers."
},

{
    "location": "#Common-API-Usage-1",
    "page": "Readme",
    "title": "Common API Usage",
    "category": "section",
    "text": "This library adds the common interface to ODEInterface.jl\'s solvers. See the DifferentialEquations.jl documentation for details on the interface. Following the Lorenz example from the ODE tutorial, we can solve this using dopri5 via the following:using ODEInterfaceDiffEq\nfunction lorenz(du,u,p,t)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nend\nu0 = [1.0;0.0;0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(lorenz,u0,tspan)\nsol = solve(prob,dopri5(),abstol=1e-4)\nusing Plots; plot(sol,vars=(1,2,3))The options available in solve are documented at the common solver options page. The available methods are documented at the ODE solvers page."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ODEInterfaceDiffEq.AbstractAnalyticalProblemODEInterfaceDiffEq.AffineDiffEqOperatorODEInterfaceDiffEq.AnalyticalProblemODEInterfaceDiffEq.BVProblemODEInterfaceDiffEq.CallbackSetODEInterfaceDiffEq.ContinuousCallbackODEInterfaceDiffEq.DAEFunctionODEInterfaceDiffEq.DAEProblemODEInterfaceDiffEq.DAESolutionODEInterfaceDiffEq.DDEFunctionODEInterfaceDiffEq.DDEProblemODEInterfaceDiffEq.DEDataArrayODEInterfaceDiffEq.DEDataMatrixODEInterfaceDiffEq.DEDataVectorODEInterfaceDiffEq.DEFAULT_LINSOLVEODEInterfaceDiffEq.DEOptionsODEInterfaceDiffEq.DESolutionODEInterfaceDiffEq.DiffEqBaseODEInterfaceDiffEq.DiscreteCallbackODEInterfaceDiffEq.DiscreteFunctionODEInterfaceDiffEq.DiscreteProblemODEInterfaceDiffEq.DynamicalODEFunctionODEInterfaceDiffEq.DynamicalODEProblemODEInterfaceDiffEq.KWODEInterfaceDiffEq.LinSolveFactorizeODEInterfaceDiffEq.MonteCarloProblemODEInterfaceDiffEq.MonteCarloSolutionODEInterfaceDiffEq.MonteCarloSummaryODEInterfaceDiffEq.MonteCarloTestSolutionODEInterfaceDiffEq.NoiseProblemODEInterfaceDiffEq.ODEFunctionODEInterfaceDiffEq.ODEINTERFACE_ALIASESODEInterfaceDiffEq.ODEINTERFACE_ALIASES_REVERSEDODEInterfaceDiffEq.ODEINTERFACE_OPTION_LISTODEInterfaceDiffEq.ODEINTERFACE_STRINGSODEInterfaceDiffEq.ODEInterfaceAlgorithmODEInterfaceDiffEq.ODEInterfaceDiffEqODEInterfaceDiffEq.ODEInterfaceIntegratorODEInterfaceDiffEq.ODEProblemODEInterfaceDiffEq.ODESolutionODEInterfaceDiffEq.OutputFunctionODEInterfaceDiffEq.RODEFunctionODEInterfaceDiffEq.RODEProblemODEInterfaceDiffEq.RODESolutionODEInterfaceDiffEq.SDEFunctionODEInterfaceDiffEq.SDEProblemODEInterfaceDiffEq.SecondOrderODEProblemODEInterfaceDiffEq.SplitFunctionODEInterfaceDiffEq.SplitODEProblemODEInterfaceDiffEq.SplitSDEFunctionODEInterfaceDiffEq.SplitSDEProblemODEInterfaceDiffEq.SteadyStateProblemODEInterfaceDiffEq.SteadyStateSolutionODEInterfaceDiffEq.TimeChoiceIteratorODEInterfaceDiffEq.TwoPointBVProblemODEInterfaceDiffEq.__init__ODEInterfaceDiffEq.add_saveat!ODEInterfaceDiffEq.add_tstop!ODEInterfaceDiffEq.addat!ODEInterfaceDiffEq.addat_non_user_cache!ODEInterfaceDiffEq.addsteps!ODEInterfaceDiffEq.auto_dt_reset!ODEInterfaceDiffEq.buildOptionsODEInterfaceDiffEq.change_t_via_interpolation!ODEInterfaceDiffEq.check_errorODEInterfaceDiffEq.check_keywordsODEInterfaceDiffEq.ddeabmODEInterfaceDiffEq.ddebdfODEInterfaceDiffEq.deleteat!ODEInterfaceDiffEq.deleteat_non_user_cache!ODEInterfaceDiffEq.dop853ODEInterfaceDiffEq.dopri5ODEInterfaceDiffEq.du_cacheODEInterfaceDiffEq.evalODEInterfaceDiffEq.full_cacheODEInterfaceDiffEq.get_dtODEInterfaceDiffEq.get_duODEInterfaceDiffEq.get_du!ODEInterfaceDiffEq.get_proposed_dtODEInterfaceDiffEq.get_tmp_cacheODEInterfaceDiffEq.handle_callbacks!ODEInterfaceDiffEq.has_expODEInterfaceDiffEq.has_expmvODEInterfaceDiffEq.has_expmv!ODEInterfaceDiffEq.has_ldivODEInterfaceDiffEq.has_ldiv!ODEInterfaceDiffEq.has_mulODEInterfaceDiffEq.has_mul!ODEInterfaceDiffEq.includeODEInterfaceDiffEq.initODEInterfaceDiffEq.initialize!ODEInterfaceDiffEq.intervalsODEInterfaceDiffEq.is_constantODEInterfaceDiffEq.isdiscreteODEInterfaceDiffEq.isinplaceODEInterfaceDiffEq.odexODEInterfaceDiffEq.radauODEInterfaceDiffEq.radau5ODEInterfaceDiffEq.rand_cacheODEInterfaceDiffEq.ratenoise_cacheODEInterfaceDiffEq.reeval_internals_due_to_modification!ODEInterfaceDiffEq.reinit!ODEInterfaceDiffEq.remakeODEInterfaceDiffEq.resize!ODEInterfaceDiffEq.resize_non_user_cache!ODEInterfaceDiffEq.rodasODEInterfaceDiffEq.save_value!ODEInterfaceDiffEq.saveat_disc_handlingODEInterfaceDiffEq.savevalues!ODEInterfaceDiffEq.set_abstol!ODEInterfaceDiffEq.set_proposed_dt!ODEInterfaceDiffEq.set_reltol!ODEInterfaceDiffEq.set_t!ODEInterfaceDiffEq.set_u!ODEInterfaceDiffEq.seulexODEInterfaceDiffEq.solveODEInterfaceDiffEq.solve!ODEInterfaceDiffEq.step!ODEInterfaceDiffEq.terminate!ODEInterfaceDiffEq.tuplesODEInterfaceDiffEq.u_cacheODEInterfaceDiffEq.u_modified!ODEInterfaceDiffEq.update_coefficientsODEInterfaceDiffEq.update_coefficients!ODEInterfaceDiffEq.user_cacheODEInterfaceDiffEq.warn_compatODEInterfaceDiffEq.warnkeywordsODEInterfaceDiffEq.warnlist"
},

]}
