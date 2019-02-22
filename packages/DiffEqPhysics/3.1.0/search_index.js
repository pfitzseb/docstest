var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqPhysics-1",
    "page": "Readme",
    "title": "DiffEqPhysics",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io) (Image: DiffEqPhysics)"
},

{
    "location": "#Simulation-of-gravitationally-interacting-bodies-1",
    "page": "Readme",
    "title": "Simulation of gravitationally interacting bodies",
    "category": "section",
    "text": "In order to create bodies/particles for the problem, one needs to use the MassBody structure and its constructor, which accepts mass, initial coordinates and velocity of the body.body1 = MassBody(2.0, SVector(0.0, 1.0, 0.0), SVector( 5.775e-6, 0.0, 0.0))\nbody2 = MassBody(2.0, SVector(0.0,-1.0, 0.0), SVector(-5.775e-6, 0.0, 0.0))Usually we solve an n-body problem for a certain period of time:tspan = (0.0, 1111150.0);Solving gravitational problem one needs to specify the gravitational constant G.G = 6.673e-11In fact, now we have enough parameters to create an NBodyGravProblem object:problem = NBodyGravProblem([body1,body2], G, tspan)Solution to the problem might be evaluated using the standard solve function:solution = solve(problem, Tsit5());And, finally, we plot our solution showing two equal bodies rotating on the same orbit:plot_xy_scattering(solution,\"./anim_two_boddies_scattering.gif\")<img src=\"https://user-images.githubusercontent.com/16945627/39958539-d2cf779c-561d-11e8-96a8-ffc3a595be8b.gif\" alt=\"Here should appear a gif of rotating bodies\" width=\"350\"/>"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DiffEqPhysics.AbstractAnalyticalProblemDiffEqPhysics.AbstractDiffEqArrayDiffEqPhysics.AbstractVectorOfArrayDiffEqPhysics.AffineDiffEqOperatorDiffEqPhysics.AnalyticalProblemDiffEqPhysics.AndersenThermostatDiffEqPhysics.ArrayPartitionDiffEqPhysics.BVProblemDiffEqPhysics.BerendsenThermostatDiffEqPhysics.CallbackSetDiffEqPhysics.ChargedParticleDiffEqPhysics.ChargedParticlesDiffEqPhysics.ContinuousCallbackDiffEqPhysics.CubicPeriodicBoundaryConditionsDiffEqPhysics.DAEFunctionDiffEqPhysics.DAEProblemDiffEqPhysics.DAESolutionDiffEqPhysics.DDEFunctionDiffEqPhysics.DDEProblemDiffEqPhysics.DEDataArrayDiffEqPhysics.DEDataMatrixDiffEqPhysics.DEDataVectorDiffEqPhysics.DEFAULT_LINSOLVEDiffEqPhysics.DESolutionDiffEqPhysics.DiffEqArrayDiffEqPhysics.DiffEqBaseDiffEqPhysics.DiffEqPhysicsDiffEqPhysics.DiscreteCallbackDiffEqPhysics.DiscreteFunctionDiffEqPhysics.DiscreteProblemDiffEqPhysics.DynamicalODEFunctionDiffEqPhysics.DynamicalODEProblemDiffEqPhysics.ElectrostaticParametersDiffEqPhysics.FWrapperDiffEqPhysics.GravitationalParametersDiffEqPhysics.GravitationalSystemDiffEqPhysics.HamiltonianProblemDiffEqPhysics.InfiniteBoxDiffEqPhysics.LangevinThermostatDiffEqPhysics.LennardJonesParametersDiffEqPhysics.LinSolveFactorizeDiffEqPhysics.MagneticParticleDiffEqPhysics.MagnetostaticParametersDiffEqPhysics.MassBodyDiffEqPhysics.MonteCarloProblemDiffEqPhysics.MonteCarloSolutionDiffEqPhysics.MonteCarloSummaryDiffEqPhysics.MonteCarloTestSolutionDiffEqPhysics.NBodyProblemDiffEqPhysics.NBodySimulationDiffEqPhysics.NoiseProblemDiffEqPhysics.NoseHooverThermostatDiffEqPhysics.ODEFunctionDiffEqPhysics.ODEProblemDiffEqPhysics.ODESolutionDiffEqPhysics.OrbitPlotDiffEqPhysics.PeriodicBoundaryConditionsDiffEqPhysics.PhysicsTagDiffEqPhysics.PotentialNBodySystemDiffEqPhysics.PotentialParametersDiffEqPhysics.RODEFunctionDiffEqPhysics.RODEProblemDiffEqPhysics.RODESolutionDiffEqPhysics.RecursiveArrayToolsDiffEqPhysics.SDEFunctionDiffEqPhysics.SDEProblemDiffEqPhysics.SPCFwParametersDiffEqPhysics.SecondOrderODEProblemDiffEqPhysics.SplitFunctionDiffEqPhysics.SplitODEProblemDiffEqPhysics.SplitSDEFunctionDiffEqPhysics.SplitSDEProblemDiffEqPhysics.SteadyStateProblemDiffEqPhysics.SteadyStateSolutionDiffEqPhysics.TimeChoiceIteratorDiffEqPhysics.TwoPointBVProblemDiffEqPhysics.VectorOfArrayDiffEqPhysics.WaterSPCFwDiffEqPhysics.add_saveat!DiffEqPhysics.add_tstop!DiffEqPhysics.addat!DiffEqPhysics.addat_non_user_cache!DiffEqPhysics.addsteps!DiffEqPhysics.auto_dt_reset!DiffEqPhysics.change_t_via_interpolation!DiffEqPhysics.check_errorDiffEqPhysics.check_keywordsDiffEqPhysics.copyat_or_push!DiffEqPhysics.deleteat!DiffEqPhysics.deleteat_non_user_cache!DiffEqPhysics.du_cacheDiffEqPhysics.evalDiffEqPhysics.full_cacheDiffEqPhysics.generate_bodies_in_cell_nodesDiffEqPhysics.get_dtDiffEqPhysics.get_duDiffEqPhysics.get_du!DiffEqPhysics.get_massesDiffEqPhysics.get_positionDiffEqPhysics.get_proposed_dtDiffEqPhysics.get_tmp_cacheDiffEqPhysics.get_velocityDiffEqPhysics.has_expDiffEqPhysics.has_expmvDiffEqPhysics.has_expmv!DiffEqPhysics.has_ldivDiffEqPhysics.has_ldiv!DiffEqPhysics.has_mulDiffEqPhysics.has_mul!DiffEqPhysics.includeDiffEqPhysics.initDiffEqPhysics.initial_energyDiffEqPhysics.initialize!DiffEqPhysics.intervalsDiffEqPhysics.is_constantDiffEqPhysics.isdiscreteDiffEqPhysics.isinplaceDiffEqPhysics.kinetic_energyDiffEqPhysics.msdDiffEqPhysics.orbitplotDiffEqPhysics.plot_orbitsDiffEqPhysics.potential_energyDiffEqPhysics.rand_cacheDiffEqPhysics.ratenoise_cacheDiffEqPhysics.rdfDiffEqPhysics.recursive_bottom_eltypeDiffEqPhysics.recursive_meanDiffEqPhysics.recursive_oneDiffEqPhysics.recursive_unitless_bottom_eltypeDiffEqPhysics.recursive_unitless_eltypeDiffEqPhysics.recursivecopyDiffEqPhysics.recursivecopy!DiffEqPhysics.reeval_internals_due_to_modification!DiffEqPhysics.reinit!DiffEqPhysics.remakeDiffEqPhysics.resize!DiffEqPhysics.resize_non_user_cache!DiffEqPhysics.run_simulationDiffEqPhysics.run_simulation_sdeDiffEqPhysics.savevalues!DiffEqPhysics.set_abstol!DiffEqPhysics.set_proposed_dt!DiffEqPhysics.set_reltol!DiffEqPhysics.set_t!DiffEqPhysics.set_u!DiffEqPhysics.solveDiffEqPhysics.solve!DiffEqPhysics.step!DiffEqPhysics.temperatureDiffEqPhysics.terminate!DiffEqPhysics.total_energyDiffEqPhysics.tuplesDiffEqPhysics.u_cacheDiffEqPhysics.u_modified!DiffEqPhysics.update_coefficientsDiffEqPhysics.update_coefficients!DiffEqPhysics.user_cacheDiffEqPhysics.vecarr_to_arrDiffEqPhysics.vecarr_to_vectorsDiffEqPhysics.vecvec_to_matDiffEqPhysics.vecvecapplyDiffEqPhysics.warn_compat"
},

]}
