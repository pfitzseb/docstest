var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqBiological.jl-1",
    "page": "Readme",
    "title": "DiffEqBiological.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) <!– (Image: Coverage Status) (Image: codecov.io) –>Here we give a brief introduction to using the DiffEqBiological package. Full documentation is in the DifferentialEquations.jl Chemical Reaction Models documentation."
},

{
    "location": "#The-Reaction-DSL-1",
    "page": "Readme",
    "title": "The Reaction DSL",
    "category": "section",
    "text": "The @reaction_network DSL allows for the definition of reaction networks using a simple format. Its input is a set of chemical reactions, from which it generates a reaction network object which can be used as input to ODEProblem, SteadyStateProblem, SDEProblem and JumpProblem constructors.The basic syntax isrn = @reaction_network rType begin\n  2.0, X + Y --> XY               \n  1.0, XY --> Z            \nendwhere each line corresponds to a chemical reaction. The (optional) input rType designates the type of this instance (all instances will inherit from the abstract type AbstractReactionNetwork).The DSL has many features:It supports many different arrow types, corresponding to different directions of reactions and different rate laws:\nrn = @reaction_network begin\n  1.0, X + Y --> XY               \n  1.0, X + Y → XY      \n  1.0, XY ← X + Y      \n  2.0, X + Y ↔ XY               \nend\nIt allows multiple reactions to be defined simultaneously on one line. The following two networksare equivalent:  rn1 = @reaction_network begin\n    (1.0,2.0), (S1,S2) → P             \n  end\n  rn2 = @reaction_network begin\n    1.0, S1 → P     \n    2.0, S2 → P\n  end\n  ```\n* It allows the use of symbols to represent reaction rate parameters, with their numeric values specified during problem construction. i.e., the previous example could be given by\n  ```julia\n  rn2 = @reaction_network begin\n    k1, S1 → P     \n    k2, S2 → P\n  end k1 k2 \n  ```\n  with `k1` and `k2` corresponding to the reaction rates.\n* Rate law functions can be pre-defined and used within the DSL:\n  ```julia\n  @reaction_func myHill(x) = 2.0*x^3/(x^3+1.5^3)\n  rn = @reaction_network begin\n    myHill(X), ∅ → X\n  end\n  ```\n* Pre-made rate laws for Hill and Michaelis-Menten reactions are provided:\n  ```julia\n  rn1 = @reaction_network begin\n    hill(X,v,K,n), ∅ → X\n    mm(X,v,K), ∅ → X\n  end v K n\n  ```\n* Simple rate law functions of the species populations can be used within the DSL:\n  ```julia\n  rn = @reaction_network begin\n    2.0*X^2, 0 → X + Y\n    gamma(Y)/5, X → ∅\n    pi*X/Y, Y → ∅\n  end\n  ```\n* It is possible to access expressions corresponding to the functions determining the deterministic and stochastic terms within resulting ODE, SDE or jump models using\n  ```julia\n    f_expr = rn.f_func\n    g_expr = rn.g_func\n    affects = rn.jump_affect_expr\n    rates = rn.jump_rate_expr\n  ```\n  These can be used to generate LaTeX code corresponding to the system using packages such as [`Latexify`](https://github.com/korsbo/Latexify.jl).\n\n\n## Simulating ODE, Steady-State, SDE and Jump Problems\n\nOnce a reaction network has been created it can be passed as input to either one of the `ODEProblem`, `SteadyStateProblem`, `SDEProblem` or `JumpProblem` constructors.julia   probODE = ODEProblem(rn, args...; kwargs...)         probSS = SteadyStateProblem(rn, args...; kwargs...)   probSDE = SDEProblem(rn, args...; kwargs...)   probJump = JumpProblem(prob, Direct(), rn)The output problems may then be used as input to the solvers of [DifferentialEquations.jl](http://juliadiffeq.org/). *Note*, the noise used by the `SDEProblem` will correspond to the Chemical Langevin Equations. \n\nAs an example, consider models for a simple birth-death process:julia rs = @reaction_network begin   c1, X –> 2X   c2, X –> 0   c3, 0 –> X end c1 c2 c3 params = (1.0,2.0,50.) tspan = (0.,4.) u0 = [5.]"
},

{
    "location": "#solve-ODEs-1",
    "page": "Readme",
    "title": "solve ODEs",
    "category": "section",
    "text": "oprob = ODEProblem(rs, u0, tspan, params) osol  = solve(oprob, Tsit5())"
},

{
    "location": "#solve-for-Steady-States-1",
    "page": "Readme",
    "title": "solve for Steady-States",
    "category": "section",
    "text": "ssprob = SteadyStateProblem(rs, u0, params) sssol  = solve(ssprob, SSRootfind())"
},

{
    "location": "#solve-Chemical-Langevin-SDEs-1",
    "page": "Readme",
    "title": "solve Chemical Langevin SDEs",
    "category": "section",
    "text": "sprob = SDEProblem(rs, u0, tspan, params) ssol  = solve(sprob, EM(), dt=.01)"
},

{
    "location": "#solve-JumpProblem-1",
    "page": "Readme",
    "title": "solve JumpProblem",
    "category": "section",
    "text": "u0 = [5] dprob = DiscreteProblem(u0, tspan, params) jprob = JumpProblem(dprob, Direct(), rs) jsol = solve(jprob, SSAStepper()) ```"
},

{
    "location": "autodocs/#DiffEqBiological.@reaction_network",
    "page": "Docstrings",
    "title": "DiffEqBiological.@reaction_network",
    "category": "macro",
    "text": "Macro that inputs an expression corresponding to a reaction network and output a Reaction Network Structure that can be used as input to generation of SDE and ODE and Jump problems. Most arrows accepted (both right, left and bi drectional arrows). Note that while –> is a correct arrow, neither <– nor <–> works. Using non-filled arrows (⇐, ⟽, ⇒, ⟾, ⇔, ⟺) will disable mass kinetics and lets you cutomize reaction rates yourself. Use 0 or ∅ for degradation/creation to/from nothing. Example systems:     ### Basic Usage ###     rn = @reaction_network rType begin #Creates a reaction network of type rType.         2.0, X + Y –> XY                  #This will have reaction rate corresponding to 2.0*[X][Y]         2.0, XY ← X + Y                    #Identical to 2.0, X + Y –> XY     end\n\n### Manipulating Reaction Rates ###\nrn = @reaction_network rType begin\n    2.0, X + Y ⟾ XY                   #Ignores mass kinetics. This will have reaction rate corresponding to 2.0.\n    2.0X, X + Y --> XY                 #Reaction rate needs not be constant. This will have reaction rate corresponding to 2.0*[X]*[X]*[Y].\n    XY+log(X)^2, X + Y --> XY          #Reaction rate accepts quite complicated expressions (user defined functions must first be registered using the @reaction_func macro).\n    hill(XY,2,2,2), X + Y --> XY       #Reaction inis activated by XY according to a hill function. hill(x,v,K,N).\n    mm(XY,2,2), X + Y --> XY           #Reaction inis activated by XY according to a michaelis menten function. mm(x,v,K).\nend\n\n### Multipple Reactions on a Single Line ###\nrn = @reaction_network rType begin\n    (2.0,1.0), X + Y ↔ XY              #Identical to reactions (2.0, X + Y --> XY) and (1.0, XY --> X + Y).\n    2.0, (X,Y) --> 0                   #This corresponds to both X and Y degrading at rate 2.0.\n    (2.0, 1.0), (X,Y) --> 0            #This corresponds to X and Y degrading at rates 2.0 and 1.0, respectively.\n    2.0, (X1,Y1) --> (X2,Y2)           #X1 and Y1 becomes X2 and Y2, respectively, at rate 2.0.\nend\n\n### Adding Parameters ###\nkB = 2.0; kD = 1.0\np = [kB, kD]\np = []\nrn = @reaction_network type begin\n    (kB, kD), X + Y ↔ XY            #Lets you define parameters outside on network. Parameters can be changed without recalling the network.\nend kB, kD\n\n### Defining New Functions ###\n@reaction_func my_hill_repression(x, v, k, n) = v*k^n/(k^n+x^n)     #Creates and adds a new function that the @reaction_network macro can see.\nr = @reaction_network MyReactionType begin\n    my_hill_repression(x, v_x, k_x, n_x), 0 --> x                       #After it has been added in @reaction_func the function can be used when defining new reaction networks.\nend v_x k_x n_x\n\n### Simulating Reaction Networks ###\nprobODE = ODEProblem(rn, args...; kwargs...)        #Using multiple dispatch the reaction network can be used as input to create ODE, SDE and Jump problems.\nprobSDE = SDEProblem(rn, args...; kwargs...)\nprobJump = JumpProblem(prob,aggregator::Direct,rn)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DiffEqBiological.@min_reaction_networkDiffEqBiological.@reaction_funcDiffEqBiological.@reaction_networkDiffEqBiological.AbstractAnalyticalProblemDiffEqBiological.AffineDiffEqOperatorDiffEqBiological.AnalyticalProblemDiffEqBiological.BVProblemDiffEqBiological.BracketDataDiffEqBiological.CallbackSetDiffEqBiological.ConstantRateJumpDiffEqBiological.ContinuousCallbackDiffEqBiological.DAEFunctionDiffEqBiological.DAEProblemDiffEqBiological.DAESolutionDiffEqBiological.DDEFunctionDiffEqBiological.DDEProblemDiffEqBiological.DEDataArrayDiffEqBiological.DEDataMatrixDiffEqBiological.DEDataVectorDiffEqBiological.DEFAULT_LINSOLVEDiffEqBiological.DESolutionDiffEqBiological.DiffEqBaseDiffEqBiological.DiffEqBiologicalDiffEqBiological.DiffEqJumpDiffEqBiological.DirectDiffEqBiological.DirectCRDiffEqBiological.DirectFWDiffEqBiological.DiscreteCallbackDiffEqBiological.DiscreteFunctionDiffEqBiological.DiscreteProblemDiffEqBiological.DynamicalODEFunctionDiffEqBiological.DynamicalODEProblemDiffEqBiological.ExtendedJumpArrayDiffEqBiological.FRMDiffEqBiological.FRMFWDiffEqBiological.JumpProblemDiffEqBiological.JumpSetDiffEqBiological.LinSolveFactorizeDiffEqBiological.MassActionJumpDiffEqBiological.MonteCarloProblemDiffEqBiological.MonteCarloSolutionDiffEqBiological.MonteCarloSummaryDiffEqBiological.MonteCarloTestSolutionDiffEqBiological.NRMDiffEqBiological.NoiseProblemDiffEqBiological.ODEFunctionDiffEqBiological.ODEProblemDiffEqBiological.ODESolutionDiffEqBiological.RODEFunctionDiffEqBiological.RODEProblemDiffEqBiological.RODESolutionDiffEqBiological.RSSADiffEqBiological.ReactantStructDiffEqBiological.ReactionStructDiffEqBiological.RegularJumpDiffEqBiological.RegularSSADiffEqBiological.SDEFunctionDiffEqBiological.SDEProblemDiffEqBiological.SSAStepperDiffEqBiological.SecondOrderODEProblemDiffEqBiological.SimpleTauLeapingDiffEqBiological.SortingDirectDiffEqBiological.SplitCoupledJumpProblemDiffEqBiological.SplitFunctionDiffEqBiological.SplitODEProblemDiffEqBiological.SplitSDEFunctionDiffEqBiological.SplitSDEProblemDiffEqBiological.SteadyStateProblemDiffEqBiological.SteadyStateSolutionDiffEqBiological.TimeChoiceIteratorDiffEqBiological.TwoPointBVProblemDiffEqBiological.VariableRateJumpDiffEqBiological.add_reactants!DiffEqBiological.add_saveat!DiffEqBiological.add_tstop!DiffEqBiological.addat!DiffEqBiological.addat_non_user_cache!DiffEqBiological.addjumps!DiffEqBiological.addodes!DiffEqBiological.addsdes!DiffEqBiological.addsteps!DiffEqBiological.auto_dt_reset!DiffEqBiological.build_jump_problemDiffEqBiological.bwd_arrowsDiffEqBiological.calculate_jacDiffEqBiological.calculate_paramjacDiffEqBiological.calculate_symjacDiffEqBiological.change_t_via_interpolation!DiffEqBiological.check_errorDiffEqBiological.check_keywordsDiffEqBiological.coordinateDiffEqBiological.deleteat!DiffEqBiological.deleteat_non_user_cache!DiffEqBiological.depgraph_from_networkDiffEqBiological.double_arrowsDiffEqBiological.du_cacheDiffEqBiological.empty_setDiffEqBiological.evalDiffEqBiological.expr_arr_to_blockDiffEqBiological.full_cacheDiffEqBiological.funcdictDiffEqBiological.fwd_arrowsDiffEqBiological.genode_exprsDiffEqBiological.gensde_exprsDiffEqBiological.gentypefun_exprsDiffEqBiological.get_dtDiffEqBiological.get_duDiffEqBiological.get_du!DiffEqBiological.get_fDiffEqBiological.get_gDiffEqBiological.get_jacsDiffEqBiological.get_jumpsDiffEqBiological.get_minnetworkDiffEqBiological.get_net_stoichDiffEqBiological.get_num_majumpsDiffEqBiological.get_parametersDiffEqBiological.get_proposed_dtDiffEqBiological.get_reactantsDiffEqBiological.get_reactionsDiffEqBiological.get_stoch_diffDiffEqBiological.get_substrate_stoichDiffEqBiological.get_tmp_cacheDiffEqBiological.get_tup_argDiffEqBiological.has_expDiffEqBiological.has_expmvDiffEqBiological.has_expmv!DiffEqBiological.has_ldivDiffEqBiological.has_ldiv!DiffEqBiological.has_mulDiffEqBiological.has_mul!DiffEqBiological.hillDiffEqBiological.hillRDiffEqBiological.hillR_nameDiffEqBiological.hill_nameDiffEqBiological.includeDiffEqBiological.initDiffEqBiological.initialize!DiffEqBiological.intervalsDiffEqBiological.is_constantDiffEqBiological.isdiscreteDiffEqBiological.isinplaceDiffEqBiological.jump_to_dep_specs_mapDiffEqBiological.make_funcDiffEqBiological.make_majumpDiffEqBiological.maketypeDiffEqBiological.mass_rate_DEDiffEqBiological.mass_rate_SSADiffEqBiological.min_coordinateDiffEqBiological.mmDiffEqBiological.mmRDiffEqBiological.mmR_nameDiffEqBiological.mm_nameDiffEqBiological.needs_depgraphDiffEqBiological.needs_vartojumps_mapDiffEqBiological.network_to_jumpsetDiffEqBiological.no_mass_arrowsDiffEqBiological.push_reactionsDiffEqBiological.rand_cacheDiffEqBiological.rate_to_indicesDiffEqBiological.ratenoise_cacheDiffEqBiological.recursive_clean!DiffEqBiological.recursive_containsDiffEqBiological.recursive_contentDiffEqBiological.recursive_replace!DiffEqBiological.reeval_internals_due_to_modification!DiffEqBiological.reinit!DiffEqBiological.remakeDiffEqBiological.replace_namesDiffEqBiological.resize!DiffEqBiological.resize_non_user_cache!DiffEqBiological.rxidxs_to_jidxs_mapDiffEqBiological.savevalues!DiffEqBiological.set_abstol!DiffEqBiological.set_proposed_dt!DiffEqBiological.set_reltol!DiffEqBiological.set_t!DiffEqBiological.set_u!DiffEqBiological.solveDiffEqBiological.solve!DiffEqBiological.spec_to_dep_jumps_mapDiffEqBiological.species_to_indicesDiffEqBiological.step!DiffEqBiological.terminate!DiffEqBiological.tup_lengDiffEqBiological.tuplesDiffEqBiological.u_cacheDiffEqBiological.u_modified!DiffEqBiological.update_coefficientsDiffEqBiological.update_coefficients!DiffEqBiological.update_reaction_infoDiffEqBiological.user_cacheDiffEqBiological.warn_compat"
},

]}
