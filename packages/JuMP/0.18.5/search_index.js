var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JuMP-1",
    "page": "Readme",
    "title": "JuMP",
    "category": "section",
    "text": "JuMP is a domain-specific modeling language for [mathematical optimization] embedded in [Julia]. It currently supports a number of open-source and commercial solvers ([Artelys Knitro], [BARON], [Bonmin], [Cbc], [Clp], [Couenne], [CPLEX], [ECOS], [FICO Xpress], [GLPK], [Gurobi], [Ipopt], [MOSEK], [NLopt], [SCS]) for a variety of problem classes, including [linear programming], [(mixed) integer programming], [second-order conic programming], [semidefinite programming], and [nonlinear programming].[mathematical optimization]: http://en.wikipedia.org/wiki/Mathematicaloptimization [Julia]: http://julialang.org/ [Bonmin]: https://projects.coin-or.org/Bonmin [Couenne]: https://projects.coin-or.org/Couenne [Clp]: https://projects.coin-or.org/Clp [Cbc]: https://projects.coin-or.org/Cbc [ECOS]: https://github.com/ifa-ethz/ecos [FICO Xpress]: http://www.fico.com/en/products/fico-xpress-optimization-suite [GLPK]: http://www.gnu.org/software/glpk/ [Gurobi]: http://www.gurobi.com/ [MOSEK]: http://mosek.com/ [CPLEX]: http://www-01.ibm.com/software/commerce/optimization/cplex-optimizer/ [Ipopt]: https://projects.coin-or.org/Ipopt [Artelys Knitro]: http://artelys.com/en/optimization-tools/knitro [NLopt]: http://ab-initio.mit.edu/wiki/index.php/NLopt [SCS]: https://github.com/cvxgrp/scs [BARON]: http://archimedes.cheme.cmu.edu/?q=baron [linear programming]: http://en.wikipedia.org/wiki/Linearprogramming [(mixed) integer programming]: http://en.wikipedia.org/wiki/Integerprogramming [second-order conic programming]: http://en.wikipedia.org/wiki/Second-orderconeprogramming [semidefinite programming]: https://en.wikipedia.org/wiki/Semidefiniteprogramming [nonlinear programming]: http://en.wikipedia.org/wiki/Nonlinear_programmingJuMP makes it easy to specify and solve optimization problems without expert knowledge, yet at the same time allows experts to implement advanced algorithmic techniques such as exploiting efficient hot-starts in linear programming or using callbacks to interact with branch-and-bound solvers. JuMP is also fast - benchmarking has shown that it can create problems at similar speeds to special-purpose commercial tools such as AMPL while maintaining the expressiveness of a generic high-level programming language. JuMP can be easily embedded in complex work flows including simulations and web servers.Our documentation includes an installation guide, quick-start guide, and reference manual. The [juliaopt-notebooks] repository contains a small but growing collection of contributed examples. Submissions are welcome![juliaopt-notebooks]: https://github.com/JuliaOpt/juliaopt-notebooksRead about the upcoming transition to MathOptInterface and breaking changes in JuMP 0.19 here.Latest Release: 0.18.4 (release-0.18 branch)Documentation\nExamples\nTesting status:\nTravisCI: (Image: Build Status)\nPackageEvaluator: (Image: JuMP) (Image: JuMP)Development version:Documentation\nExamples\nTesting status:\nTravisCI: (Image: Build Status)\nTest coverage: (Image: Coverage Status) (Image: codecov)\nChanges: see NEWS\nDeveloper chatroom"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "JuMP can be installed through the Julia package manager:julia> Pkg.add(\"JuMP\")For full installation instructions, including how to install solvers, see the documentation linked above."
},

{
    "location": "#Supported-problem-classes-1",
    "page": "Readme",
    "title": "Supported problem classes",
    "category": "section",
    "text": "Mathematical optimization encompasses a large variety of problem classes. We list below what is currently supported. See the documentation for more information.Objective typesLinear\nConvex Quadratic\nNonlinear (convex and nonconvex)Constraint typesLinear\nConvex Quadratic\nSecond-order Conic\nSemidefinite\nNonlinear (convex and nonconvex)Variable typesContinuous\nInteger-valued\nSemicontinuous\nSemi-integer"
},

{
    "location": "#Bug-reports-and-support-1",
    "page": "Readme",
    "title": "Bug reports and support",
    "category": "section",
    "text": "Please report any issues via the Github [issue tracker]. All types of issues are welcome and encouraged; this includes bug reports, documentation typos, feature requests, etc. The [Optimization (Mathematical)] category on Discourse is appropriate for general discussion, including \"how do I do this?\" questions.[issue tracker]: https://github.com/JuliaOpt/JuMP.jl/issues [Optimization (Mathematical)]: https://discourse.julialang.org/c/domain/opt"
},

{
    "location": "#Citing-JuMP-1",
    "page": "Readme",
    "title": "Citing JuMP",
    "category": "section",
    "text": "If you find JuMP useful in your work, we kindly request that you cite the following paper:@article{DunningHuchetteLubin2017,\nauthor = {Iain Dunning and Joey Huchette and Miles Lubin},\ntitle = {JuMP: A Modeling Language for Mathematical Optimization},\njournal = {SIAM Review},\nvolume = {59},\nnumber = {2},\npages = {295-320},\nyear = {2017},\ndoi = {10.1137/15M1020575},\n}A preprint of this paper is freely available on arXiv.For an earlier work where we presented a prototype implementation of JuMP, see here:@article{LubinDunningIJOC,\nauthor = {Miles Lubin and Iain Dunning},\ntitle = {Computing in Operations Research Using Julia},\njournal = {INFORMS Journal on Computing},\nvolume = {27},\nnumber = {2},\npages = {238-248},\nyear = {2015},\ndoi = {10.1287/ijoc.2014.0623},\n}A preprint of this paper is also freely available."
},

{
    "location": "autodocs/#JuMP.macro_assign_and_return",
    "page": "Docstrings",
    "title": "JuMP.macro_assign_and_return",
    "category": "function",
    "text": "macro_assign_and_return(code, variable, name;\n                        register_fun::Union{Nothing, Function}=nothing,\n                        model=nothing)\n\nReturn runs code in a local scope which returns the value of variable and then assign variable to name. If register_fun is given, register_fun(model, name, variable) is called.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuMP.macro_return",
    "page": "Docstrings",
    "title": "JuMP.macro_return",
    "category": "function",
    "text": "macro_return(model, code, variable)\n\nReturn a block of code that 1. runs the code block code in a local scope and 2. returns the value of a local variable named variable. variable must reference a variable defined by code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JuMP.@ExpressionJuMP.@LinearConstraintJuMP.@LinearConstraintsJuMP.@NLconstraintJuMP.@NLconstraintsJuMP.@NLexpressionJuMP.@NLexpressionsJuMP.@NLobjectiveJuMP.@NLparameterJuMP.@QuadConstraintJuMP.@QuadConstraintsJuMP.@SDconstraintJuMP.@SDconstraintsJuMP.@SOCConstraintJuMP.@SOCConstraintsJuMP.@addConstraintJuMP.@addConstraintsJuMP.@addLazyConstraintJuMP.@addNLConstraintJuMP.@addNLConstraintsJuMP.@addSDPConstraintJuMP.@addusercutJuMP.@constraintJuMP.@constraintrefJuMP.@constraintsJuMP.@defConstrRefJuMP.@defExprJuMP.@defNLExprJuMP.@defNLParamJuMP.@defVarJuMP.@defVarsJuMP.@deprecate_macroJuMP.@expressionJuMP.@expressionsJuMP.@lazyconstraintJuMP.@objectiveJuMP.@processNLExprJuMP.@setNLObjectiveJuMP.@setObjectiveJuMP.@usercutJuMP.@variableJuMP.@variablesJuMP.AbstractConstraintJuMP.AbstractJuMPScalarJuMP.AbstractModelJuMP.AffExprJuMP.CallbackAbortJuMP.ConstraintRefJuMP.CutCallbackJuMP.DIMSJuMP.DisableNLPResolveJuMP.EMPTYSTRINGJuMP.EnableNLPResolveJuMP.FunctionStorageJuMP.GenericAffExprJuMP.GenericNormJuMP.GenericNormExprJuMP.GenericQuadConstraintJuMP.GenericQuadExprJuMP.GenericRangeConstraintJuMP.GenericSOCConstraintJuMP.GenericSOCExprJuMP.HeuristicCallbackJuMP.IJuliaModeJuMP.IndexPairJuMP.IndexedVectorJuMP.InfoCallbackJuMP.JuMPJuMP.JuMPArrayJuMP.JuMPCallbackJuMP.JuMPContainerJuMP.JuMPContainerDataJuMP.JuMPContainer_fromJuMP.JuMPDictJuMP.JuMPNLPEvaluatorJuMP.JuMPScalarsJuMP.JuMPTypesJuMP.KeyIteratorJuMP.LazyCallbackJuMP.LinConstrRefJuMP.LinearConstraintJuMP.LinearTermIteratorJuMP.ModelJuMP.NLPDataJuMP.NLPEvaluatorJuMP.NonlinearConstraintJuMP.NonlinearExprDataJuMP.NonlinearExpressionJuMP.NonlinearParameterJuMP.NormJuMP.PRINT_ZERO_TOLJuMP.PSDConeJuMP.ParameterPrintWrapperJuMP.PrintModeJuMP.PrintSymbolsJuMP.ProblemTraitsJuMP.QuadConstraintJuMP.QuadExprJuMP.REPLModeJuMP.SDConstraintJuMP.SOCConstraintJuMP.SOCExprJuMP.SOSConstraintJuMP.StopTheSolverJuMP.SubexpressionPrintWrapperJuMP.SubexpressionStorageJuMP.UnsetSolverJuMP.UserAutoDiffEvaluatorJuMP.UserFunctionEvaluatorJuMP.ValueIteratorJuMP.VariableJuMP.VariableNotOwnedErrorJuMP.VariablePrintWrapperJuMP.VectorViewJuMP._NLExprJuMP.__nextJuMP._add_zeroJuMP._buildInternalModel_nlpJuMP._build_normJuMP._canonicalize_senseJuMP._construct_constraint!JuMP._dotJuMP._fillwithzerosJuMP._gendict_checkgenJuMP._getDualJuMP._getValueJuMP._getmodelJuMP._hesslag_structureJuMP._ind2subJuMP._innercontainerJuMP._islessJuMP._localvarJuMP._mapJuMP._mapInnerJuMP._matmulJuMP._matmultJuMP._matprod_typeJuMP._multiply!JuMP._multiplyt!JuMP._nextJuMP._nlexprerrJuMP._print_arrayJuMP._return_arrayJuMP._return_arraytJuMP._similarJuMP._sizeJuMP._sizehint_expr!JuMP._throw_transpose_errorJuMP._to_cartesianJuMP._to_cartesian_range_subJuMP._unspecifiedstateJuMP._valuesJuMP._vecaffJuMP._vectorize_likeJuMP._warnnanJuMP.addConstraintJuMP.addCutCallbackJuMP.addHeuristicCallbackJuMP.addInfoCallbackJuMP.addLazyCallbackJuMP.addLazyConstraintJuMP.addNLconstraintJuMP.addQuadraticsJuMP.addSOSJuMP.addSOS1JuMP.addSOS2JuMP.addSolutionJuMP.addToExpressionJuMP.addUserCutJuMP.addVectorizedConstraintJuMP.add_JuMP_prefixJuMP.addconstraintJuMP.addcutcallbackJuMP.addelt!JuMP.addheuristiccallbackJuMP.addinfocallbackJuMP.addkwargs!JuMP.addlazycallbackJuMP.addlazyconstraintJuMP.addsolutionJuMP.addtoexprJuMP.addtoexpr_reorderJuMP.addusercutJuMP.affToExprJuMP.affToStrJuMP.aff_strJuMP.assert_isfiniteJuMP.assert_validmodelJuMP.attach_callbacksJuMP.buildJuMP.buildInternalModelJuMP.buildrefsetsJuMP.chgConstrRHSJuMP.coeftypeJuMP.collect_expr!JuMP.coloncheckJuMP.conToStrJuMP.con_strJuMP.conicdataJuMP.constraint_errorJuMP.constraintboundsJuMP.constructSOSJuMP.constructconstraint!JuMP.constructvariable!JuMP.cont_strJuMP.cont_str_setJuMP.curly_to_generatorJuMP.cutcallbackJuMP.dependsonJuMP.esc_nonconstantJuMP.evalJuMP.exprToStrJuMP.expr_strJuMP.exprstrJuMP.fillConicDualsJuMP.fillConicRedCostsJuMP.fill_bounds_constr!JuMP.fill_var_namesJuMP.fillconstr!JuMP.fillconstrLHS!JuMP.fillconstrRHS!JuMP.fillconstrtorow!JuMP.fixJuMP.forward_eval_allJuMP.gendictJuMP.getCategoryJuMP.getConstraintBoundsJuMP.getDualJuMP.getInternalModelJuMP.getLinearIndexJuMP.getLowerJuMP.getNameJuMP.getNumBndRowsJuMP.getNumRowsJuMP.getNumSDPRowsJuMP.getNumSOCRowsJuMP.getNumSymRowsJuMP.getObjectiveJuMP.getObjectiveSenseJuMP.getObjectiveValueJuMP.getSDrowsinfoJuMP.getUpperJuMP.getValueJuMP.getVarJuMP.getbarrieriterJuMP.getcategoryJuMP.getconicdualauxJuMP.getconstraintJuMP.getdualJuMP.getdualwarnJuMP.getloopedcodeJuMP.getlowerboundJuMP.getmetaJuMP.getnameJuMP.getnodecountJuMP.getobjboundJuMP.getobjectiveJuMP.getobjectiveboundJuMP.getobjectivesenseJuMP.getobjectivevalueJuMP.getobjgapJuMP.getrawsolverJuMP.getsimplexiterJuMP.getsolvetimeJuMP.getupperboundJuMP.getvalueJuMP.getvalue_warnJuMP.getvaluewarnJuMP.getvariableJuMP.hasdependentsetsJuMP.hasmetaJuMP.hessian_sliceJuMP.hessian_slice_innerJuMP.heurcallbackJuMP.ijuliaJuMP.includeJuMP.indexabilityJuMP.infocallbackJuMP.initNLPJuMP.internalmodelJuMP.is_complex_exprJuMP.isdependentJuMP.isprodJuMP.issumJuMP.lazycallbackJuMP.let_code_blockJuMP.linearindexJuMP.lineartermsJuMP.localvarJuMP.macro_assign_and_returnJuMP.macro_returnJuMP.mapcontainer_warnJuMP.mathJuMP.merge_duplicatesJuMP.metadataJuMP.model_strJuMP.mul!JuMP.newparameterJuMP.no_solver_errorJuMP.norm_strJuMP.notindexable_startJuMP.numnlconstrJuMP.numsdconstrJuMP.numsocconstrJuMP.numsosconstrJuMP.offdiagsdpvarsJuMP.one_indexedJuMP.op_hintJuMP.operator_warnJuMP.parseCurlyJuMP.parseExprJuMP.parseExprToplevelJuMP.parseGeneratorJuMP.parseGeneratorNormJuMP.parseGeneratorSumJuMP.parseIdxSetJuMP.parseNLExprJuMP.parseNLExpr_runtimeJuMP.parseNormJuMP.parseSumJuMP.parse_conditionsJuMP.parsegenJuMP.prepAffObjectiveJuMP.prepConstrBoundsJuMP.prepConstrMatrixJuMP.print_shortestJuMP.printdataJuMP.processNLExprJuMP.pushmeta!JuMP.quadToExprJuMP.quadToStrJuMP.quad_strJuMP.registerJuMP.registerNLFunctionJuMP.registercallbacksJuMP.registerconJuMP.registerobjectJuMP.registervarJuMP.reinterpret_unsafeJuMP.replJuMP.rescaleSDcols!JuMP.reverse_eval_allJuMP.rhsJuMP.rmz!JuMP.senseJuMP.sensemapJuMP.setCategoryJuMP.setLowerJuMP.setNLobjectiveJuMP.setNameJuMP.setObjectiveJuMP.setObjectiveSenseJuMP.setPrintHookJuMP.setRHSJuMP.setSolutionValue!JuMP.setSolveHookJuMP.setSolverJuMP.setUpperJuMP.setValueJuMP.setcategoryJuMP.setlowerboundJuMP.setnameJuMP.setobjectiveJuMP.setobjectivesenseJuMP.setprinthookJuMP.setsolutionvalueJuMP.setsolvehookJuMP.setsolverJuMP.setupperboundJuMP.setvalueJuMP.simplify_expressionJuMP.sizeJuMP.solveJuMP.solvenlpJuMP.splicerefJuMP.storecontainerdataJuMP.str_roundJuMP.suggestedsolversJuMP.tapeToExprJuMP.tidy_warmstartJuMP.tryParseIdxSetJuMP.val_strJuMP.validmodelJuMP.var_catsJuMP.var_strJuMP.variable_errorJuMP.variable_range_to_cone!JuMP.variabletypeJuMP.varname_genericJuMP.varname_givenJuMP.vartypes_without_fixedJuMP.verify_ownershipJuMP.warn_curlyJuMP.warn_onceJuMP.writeLPJuMP.writeMPS"
},

]}
