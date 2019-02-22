var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StructJuMP-1",
    "page": "Readme",
    "title": "StructJuMP",
    "category": "section",
    "text": "The StructJuMP package provides a parallel algebraic modeling framework for block structured optimization models in Julia. StructJuMP, originally known as StochJuMP, is tailored to two-stage stochastic optimization problems and uses MPI to enable a parallel, distributed memory instantiation of the problem. StructJuMP.jl is an extension of the JuMP.jl package, which is as fast as AMPL and faster than any other modeling tools such as GAMS and Pyomo (see this).(Image: Build Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"StructJuMP\")"
},

{
    "location": "#An-example-1",
    "page": "Readme",
    "title": "An example",
    "category": "section",
    "text": "using StructJuMP\n\nnumScen = 2\nm = StructuredModel(num_scenarios=numScen)\n@variable(m, x[1:2])\n@NLconstraint(m, x[1] + x[2] == 100)\n@NLobjective(m, Min, x[1]^2 + x[2]^2 + x[1]*x[2])\n\nfor i in 1:numScen\n    bl = StructuredModel(parent=m, id=i)\n    @variable(bl, y[1:2])\n    @NLconstraint(bl, x[1] + y[1] + y[2] ≥  0)\n    @NLconstraint(bl, x[2] + y[1] + y[2] ≤ 50)\n    @NLobjective(bl, Min, y[1]^2 + y[2]^2 + y[1]*y[2])\nendThe above example builds a two level structured model m with 2 scenarios. "
},

{
    "location": "#Available-Solvers-for-StructJuMP-1",
    "page": "Readme",
    "title": "Available Solvers for StructJuMP",
    "category": "section",
    "text": ""
},

{
    "location": "#Nonlinear-Solvers-1",
    "page": "Readme",
    "title": "Nonlinear Solvers",
    "category": "section",
    "text": "Problems modeled in StructJuMP models can be solved in parallel using the PIPS-NLP parallel optimization solver. In addition, StructJuMP models can be solved (in serial only) using Ipopt. The SturctJuMP models interface with the solvers via StructJuMPSolverInterface.jl."
},

{
    "location": "#Mixed-Integer-Solvers-1",
    "page": "Readme",
    "title": "Mixed-Integer Solvers",
    "category": "section",
    "text": "DSP can read models from StructJuMP via DSPsolver.jl. In particular, DSP can solver problems with integer variables in parallel."
},

{
    "location": "#Stochastic-Dual-Dynamic-Programming-(SDDP)-1",
    "page": "Readme",
    "title": "Stochastic Dual Dynamic Programming (SDDP)",
    "category": "section",
    "text": "StructDualDynProg can run the SDDP algorithm on multi-stage models from StructJuMP."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "StructJuMP has been developed under the financial support of Department of Energy (DOE), Office of Advanced Scientific Computing Research, Office of Electricity Delivery and Energy Reliability, and Grid Modernization Laboratory Consortium (GMLC) (PIs: Cosmin G. Petra, Lawrence Livermore National Laboratory and Mihai Anitescu, Argonne National Laboratory)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StructJuMP.@LinearConstraintStructJuMP.@LinearConstraintsStructJuMP.@NLconstraintStructJuMP.@NLconstraintsStructJuMP.@NLexpressionStructJuMP.@NLexpressionsStructJuMP.@NLobjectiveStructJuMP.@NLparameterStructJuMP.@QuadConstraintStructJuMP.@QuadConstraintsStructJuMP.@SDconstraintStructJuMP.@SDconstraintsStructJuMP.@SOCConstraintStructJuMP.@SOCConstraintsStructJuMP.@addConstraintStructJuMP.@addConstraintsStructJuMP.@addLazyConstraintStructJuMP.@addNLConstraintStructJuMP.@addNLConstraintsStructJuMP.@addSDPConstraintStructJuMP.@addusercutStructJuMP.@constraintStructJuMP.@constraintrefStructJuMP.@constraintsStructJuMP.@defConstrRefStructJuMP.@defExprStructJuMP.@defNLExprStructJuMP.@defNLParamStructJuMP.@defVarStructJuMP.@defVarsStructJuMP.@exportallStructJuMP.@expressionStructJuMP.@expressionsStructJuMP.@lazyconstraintStructJuMP.@objectiveStructJuMP.@second_stageStructJuMP.@setNLObjectiveStructJuMP.@setObjectiveStructJuMP.@usercutStructJuMP.@variableStructJuMP.@variablesStructJuMP.AffExprStructJuMP.BendersBridgeStructJuMP.Benders_pmapStructJuMP.CallbackAbortStructJuMP.ConstraintRefStructJuMP.DLPStructJuMP.DisableNLPResolveStructJuMP.DummyMPIWrapperStructJuMP.EnableNLPResolveStructJuMP.JuMPStructJuMP.JuMPNLPEvaluatorStructJuMP.LinearConstraintStructJuMP.ModelStructJuMP.NonlinearConstraintStructJuMP.NormStructJuMP.PSDConeStructJuMP.QuadConstraintStructJuMP.QuadExprStructJuMP.SDConstraintStructJuMP.SOCConstraintStructJuMP.SOCExprStructJuMP.StructJuMPStructJuMP.StructureDataStructJuMP.StructuredModelStructJuMP.VariableStructJuMP.addConstraintStructJuMP.addCutCallbackStructJuMP.addCuttingPlanesStructJuMP.addHeuristicCallbackStructJuMP.addInfoCallbackStructJuMP.addLazyCallbackStructJuMP.addLazyConstraintStructJuMP.addSOS1StructJuMP.addSOS2StructJuMP.addSolutionStructJuMP.addToExpressionStructJuMP.addUserCutStructJuMP.addcutcallbackStructJuMP.addheuristiccallbackStructJuMP.addinfocallbackStructJuMP.addlazycallbackStructJuMP.addsolutionStructJuMP.addusercutStructJuMP.affToStrStructJuMP.buildInternalModelStructJuMP.chgConstrRHSStructJuMP.conToStrStructJuMP.conicconstraintdataStructJuMP.default_probabilityStructJuMP.dummy_mpi_wrapperStructJuMP.evalStructJuMP.exprToStrStructJuMP.getCategoryStructJuMP.getConstraintBoundsStructJuMP.getDualStructJuMP.getInternalModelStructJuMP.getLinearIndexStructJuMP.getLowerStructJuMP.getMyRankStructJuMP.getNameStructJuMP.getObjectiveStructJuMP.getObjectiveSenseStructJuMP.getObjectiveValueStructJuMP.getProcIdxSetStructJuMP.getStructureStructJuMP.getUpperStructJuMP.getValueStructJuMP.getVarStructJuMP.getbarrieriterStructJuMP.getcategoryStructJuMP.getchildrenStructJuMP.getconstraintStructJuMP.getdualStructJuMP.getlowerboundStructJuMP.getnameStructJuMP.getnodecountStructJuMP.getobjboundStructJuMP.getobjectiveStructJuMP.getobjectiveboundStructJuMP.getobjectivesenseStructJuMP.getobjectivevalueStructJuMP.getobjgapStructJuMP.getparentStructJuMP.getprobabilityStructJuMP.getrawsolverStructJuMP.getsimplexiterStructJuMP.getsolvetimeStructJuMP.getupperboundStructJuMP.getvalueStructJuMP.getvariableStructJuMP.includeStructJuMP.internalmodelStructJuMP.linearindexStructJuMP.lineartermsStructJuMP.loadAndSolveConicProblemStructJuMP.loadMasterProblemStructJuMP.num_scenariosStructJuMP.quadToStrStructJuMP.registerNLFunctionStructJuMP.setCategoryStructJuMP.setLowerStructJuMP.setNameStructJuMP.setObjectiveStructJuMP.setObjectiveSenseStructJuMP.setPrintHookStructJuMP.setSolutionValue!StructJuMP.setSolveHookStructJuMP.setSolverStructJuMP.setUpperStructJuMP.setValueStructJuMP.setcategoryStructJuMP.setlowerboundStructJuMP.setnameStructJuMP.setobjectivesenseStructJuMP.setsolutionvalueStructJuMP.setsolverStructJuMP.setupperboundStructJuMP.setvalueStructJuMP.solveStructJuMP.structprinthookStructJuMP.writeLPStructJuMP.writeMPS"
},

]}
