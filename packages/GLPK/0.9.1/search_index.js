var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Julia-GLPK-module-1",
    "page": "Readme",
    "title": "Julia GLPK module",
    "category": "section",
    "text": "Documentation PackageEvaluator Build Status\n[![][docs-stable-img]][docs-stable-url] [![][docs-latest-img]][docs-latest-url] [![][pkg-0.6-img]][pkg-0.6-url] [![][pkg-0.7-img]][pkg-0.7-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][coveralls-img]][coveralls-url]GLPK.jl is a wrapper for the GNU Linear Programming Kit library. It makes it possible to access nearly all of GLPK functionality from within Julia programs.See also the GLPKMathProgInterface.jl package for using it with MathProgBase.jl and JuMP.jl.This package is part of the JuliaOpt project."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> Pkg.add(\"GLPK\")GLPK.jl will use BinaryProvider.jl to automatically install the GLPK binaries with GMP support."
},

{
    "location": "#Custom-Installation-1",
    "page": "Readme",
    "title": "Custom Installation",
    "category": "section",
    "text": "After GLPK.jl is installed and built, you can replace the installed binary dependencies with custom builds by overwriting the binaries and libraries in GLPK.jl\'s deps/usr folder. For instance, Julia v0.6 this can be achieved by running./configure --prefix=$HOME/.julia/v0.6/GLPK/deps/usr\nmake\nmake installin GLPK\'s source folder. Note that the custom binaries will not be overwritten by subsequent builds of the currently installed version of GLPK.jl. However, if GLPK.jl is updated and the update includes new BinaryProvider versions of the GLPK binaries, then the custom binaries will be overwritten by the new BinaryProvider versions."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "[STABLE][docs-stable-url] &mdash; most recently tagged version of the documentation.\n[LATEST][docs-latest-url] &mdash; in-development version of the documentation.[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://gplkjl.readthedocs.org/en/latest/glpk.html[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://gplkjl.readthedocs.org/en/stable/glpk.html[travis-img]: https://api.travis-ci.org/JuliaOpt/GLPK.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaOpt/GLPK.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/4t5e2dir3gp7fb6h?svg=true [appveyor-url]: https://ci.appveyor.com/project/JuliaOpt/glpk-jl[coveralls-img]: https://img.shields.io/coveralls/JuliaOpt/GLPK.jl.svg [coveralls-url]: https://coveralls.io/r/JuliaOpt/GLPK.jl[pkg-0.6-img]: http://pkg.julialang.org/badges/GLPK0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=GLPK [pkg-0.7-img]: http://pkg.julialang.org/badges/GLPK0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=GLPK"
},

{
    "location": "autodocs/#GLPK.AbstractCallbackData",
    "page": "Docstrings",
    "title": "GLPK.AbstractCallbackData",
    "category": "type",
    "text": "AbstractCallbackData\n\nAn abstract type to prevent recursive type definition of Optimizer and CallbackData, each of which need the other type in a field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.CallbackData",
    "page": "Docstrings",
    "title": "GLPK.CallbackData",
    "category": "type",
    "text": "CallbackData\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.CallbackFunction",
    "page": "Docstrings",
    "title": "GLPK.CallbackFunction",
    "category": "type",
    "text": "CallbackFunction\n\nThe attribute to set the callback function in GLPK. The function takes a single argument of type CallbackData.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.__internal_callback__",
    "page": "Docstrings",
    "title": "GLPK.__internal_callback__",
    "category": "function",
    "text": "__internal_callback__(tree::Ptr{Cvoid}, info::Ptr{Cvoid})\n\nDummy callback function for internal use only. Responsible for updating the objective bound.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK._certificates_potentially_available",
    "page": "Docstrings",
    "title": "GLPK._certificates_potentially_available",
    "category": "function",
    "text": "_certificates_potentially_available(model::Optimizer)\n\nReturn true if an infeasiblity certificate or an unbounded ray is potentially available (i.e., the model has been solved using either the Simplex or Exact methods).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK._throw_invalid_method",
    "page": "Docstrings",
    "title": "GLPK._throw_invalid_method",
    "category": "function",
    "text": "_throw_invalid_method(instance::Optimizer)\n\nA helper function to throw an error when the method is set incorrectly. Mainly used to enforce type-stability in functions that have a run-time switch on the method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.add_lazy_constraint!",
    "page": "Docstrings",
    "title": "GLPK.add_lazy_constraint!",
    "category": "function",
    "text": "add_lazy_constraint!(cb_data::GLPK.CallbackData, func::LQOI.Linear, set::S) where S <: Union{LQOI.LE, LQOI.GE, LQOI.EQ}\n\nAdd a lazy constraint to the model cb_data.model. This can only be called in a callback from GLPK.IROWGEN.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.add_row!",
    "page": "Docstrings",
    "title": "GLPK.add_row!",
    "category": "function",
    "text": "add_row!(problem::GLPK.Prob, columns::Vector{Int},\n         coefficients::Vector{Float64}, sense::Cchar, rhs::Real)\n\nHelper function to add a row to the problem. Sense must be one of \'E\' (ax == b), \'G\' (ax >= b), \'L\' (ax <= b) , or \'R\' (b <= ax).\n\nIf the sense is \'R\' the rhs should be the lower bound, and the bounds should be set in a new API call to enforce the upper bound.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.change_row_sense!",
    "page": "Docstrings",
    "title": "GLPK.change_row_sense!",
    "category": "function",
    "text": "change_row_sense!(model::Optimizer, row, sense)\n\nConvert a linear constraint into another type of linear constraint by changing the comparison sense.\n\nConstraint types supported are \'E\' (equality), \'L\' (less-than), and \'G\' (greater-than).\n\nFor example, ax <= b can become ax >= b or ax == b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.copy_function_result!",
    "page": "Docstrings",
    "title": "GLPK.copy_function_result!",
    "category": "function",
    "text": "copy_function_result!(dest::Vector, foo, model::GLPK.Prob)\n\nA helper function that loops through the indices in dest and stores the result of foo(model, i) for the ith index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.get_col_bound_type",
    "page": "Docstrings",
    "title": "GLPK.get_col_bound_type",
    "category": "function",
    "text": "get_col_bound_type(lower::Float64, upper::Float64)\n\nReturn the GLPK type of the variable bound given a lower bound of lower and an upper bound of upper.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.get_infeasibility_ray",
    "page": "Docstrings",
    "title": "GLPK.get_infeasibility_ray",
    "category": "function",
    "text": "get_infeasibility_ray(model::Optimizer, ray::Vector{Float64})\n\nGet the Farkas certificate of primal infeasiblity.\n\nCan only be called when GLPK.simplex is used as the solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.get_status",
    "page": "Docstrings",
    "title": "GLPK.get_status",
    "category": "function",
    "text": "get_status(model::Optimizer)\n\nGet the status from GLPK depending on which method was used to solve the model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.get_unbounded_ray",
    "page": "Docstrings",
    "title": "GLPK.get_unbounded_ray",
    "category": "function",
    "text": "get_unbounded_ray(model::Optimizer, ray::Vector{Float64})\n\nGet the certificate of primal unboundedness.\n\nCan only be called when GLPK.simplex is used as the solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.get_variable_types",
    "page": "Docstrings",
    "title": "GLPK.get_variable_types",
    "category": "function",
    "text": "get_variable_types(model::Optimizer)\n\nReturn a vector of symbols (one element for each variable) of the variable type. The symbols are given by the key-value mapping in GLPK.VARIABLE_TYPE_MAP.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.load_variable_primal!",
    "page": "Docstrings",
    "title": "GLPK.load_variable_primal!",
    "category": "function",
    "text": "load_variable_primal!(cb_data::CallbackData)\n\nLoad the variable primal solution in a callback.\n\nThis can only be called in a callback from GLPK.IROWGEN. After it is called, you can access the VariablePrimal attribute as usual.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.round_bounds_to_integer",
    "page": "Docstrings",
    "title": "GLPK.round_bounds_to_integer",
    "category": "function",
    "text": "round_bounds_to_integer(model)::Tuple{Bool, Vector{Float64}, Vector{Float64}}\n\nGLPK does not allow integer variables with fractional bounds. Therefore, we round the bounds of binary and integer variables to integer values prior to solving.\n\nReturns a tuple of the original bounds, along with a Boolean flag indicating if they need to be reset after solve.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.set_parameter",
    "page": "Docstrings",
    "title": "GLPK.set_parameter",
    "category": "function",
    "text": "set_parameter(param_store, key::Symbol, value)\n\nSet the field name key in a param_store type (that is one of InteriorParam, IntoptParam, or SimplexParam) to value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLPK.set_variable_bound",
    "page": "Docstrings",
    "title": "GLPK.set_variable_bound",
    "category": "function",
    "text": "set_variable_bound(model::Optimizer, column::Int, lower::Float64, upper::Float64)\n\nSet the bounds of the variable in column column to [lower, upper].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GLPK.@checkGLPK.@check!GLPK.@glpk_ccallGLPK.ASN_MAXGLPK.ASN_MINGLPK.ASN_MMPGLPK.AbstractCallbackDataGLPK.AttrGLPK.BF_BGGLPK.BF_BTFGLPK.BF_FTGLPK.BF_GRGLPK.BF_LUFGLPK.BR_DTHGLPK.BR_FFVGLPK.BR_LFVGLPK.BR_MFVGLPK.BR_PCHGLPK.BSGLPK.BT_BFSGLPK.BT_BLBGLPK.BT_BPHGLPK.BT_DFSGLPK.BVGLPK.BasisFactParamGLPK.CVGLPK.CallbackDataGLPK.CallbackFunctionGLPK.DBGLPK.DBL_MAXGLPK.DN_BRNCHGLPK.DUALGLPK.DUALPGLPK.EBADBGLPK.EBOUNDGLPK.ECONDGLPK.EDATAGLPK.EFAILGLPK.EINSTABGLPK.EITLIMGLPK.EMIPGAPGLPK.ENOCVGGLPK.ENODFSGLPK.ENOFEASGLPK.ENOPFSGLPK.EOBJLLGLPK.EOBJULGLPK.ERANGEGLPK.EROOTGLPK.ESINGGLPK.ESTOPGLPK.ETMLIMGLPK.FEASGLPK.FRGLPK.FXGLPK.GLPKGLPK.GLPKErrorGLPK.GLPKFatalErrorGLPK.IBINGOGLPK.IBRANCHGLPK.ICUTGENGLPK.IHEURGLPK.INFEASGLPK.IPREPROGLPK.IPTGLPK.IROWGENGLPK.ISELECTGLPK.IVGLPK.InteriorParamGLPK.IntoptParamGLPK.KKT_CSGLPK.KKT_DBGLPK.KKT_DEGLPK.KKT_PBGLPK.KKT_PEGLPK.LOGLPK.LQOIGLPK.MAXGLPK.MINGLPK.MIPGLPK.MOIGLPK.MPS_DECKGLPK.MPS_FILEGLPK.MSG_ALLGLPK.MSG_DBGGLPK.MSG_ERRGLPK.MSG_OFFGLPK.MSG_ONGLPK.MathProgWorkspaceGLPK.NFGLPK.NLGLPK.NOFEASGLPK.NO_BRNCHGLPK.NSGLPK.NUGLPK.OFFGLPK.ONGLPK.OPTGLPK.ORD_AMDGLPK.ORD_NONEGLPK.ORD_QMDGLPK.ORD_SYMAMDGLPK.OptimizerGLPK.PP_ALLGLPK.PP_NONEGLPK.PP_ROOTGLPK.PRIMALGLPK.PT_PSEGLPK.PT_STDGLPK.ParamGLPK.ProbGLPK.RF_CLQGLPK.RF_COVGLPK.RF_CUTGLPK.RF_GMIGLPK.RF_LAZYGLPK.RF_MIRGLPK.RF_REGGLPK.ROW_SENSE_MAPGLPK.RT_HARGLPK.RT_STDGLPK.SF_2NGLPK.SF_AUTOGLPK.SF_EQGLPK.SF_GMGLPK.SF_SKIPGLPK.SOLGLPK.SUPPORTED_CONSTRAINTSGLPK.SUPPORTED_OBJECTIVESGLPK.SimplexParamGLPK.UNBNDGLPK.UNDEFGLPK.UPGLPK.UP_BRNCHGLPK.VARIABLE_TYPE_MAPGLPK.VecOrNothingGLPK.__init__GLPK.__internal_callback__GLPK._add_objGLPK._adv_basis_flagsGLPK._alloc_sizeGLPK._bf_existsGLPK._bounds_are_validGLPK._bounds_type_is_validGLPK._can_branchGLPK._certificates_potentially_availableGLPK._col_is_validGLPK._col_is_valid_w0GLPK._cols_ids_contentGLPK._cols_ids_sizeGLPK._constr_type_is_validGLPK._copy_names_flagGLPK._del_all_objsGLPK._del_objGLPK._dir_is_validGLPK._eps_is_validGLPK._err_hookGLPK._file_is_readableGLPK._file_is_writableGLPK._indices_vectors_dupGLPK._init_env_succeededGLPK._ios_add_row_flagsGLPK._ios_node_is_activeGLPK._ios_node_is_validGLPK._ios_row_is_validGLPK._is_dual_feasibleGLPK._is_prim_feasibleGLPK._kind_is_validGLPK._kkt_cond_paramGLPK._klass_is_validGLPK._list_idsGLPK._lp_paramGLPK._mpl_workspaceGLPK._mps_formatGLPK._mps_paramGLPK._obj_dir_is_validGLPK._open_tee_succeededGLPK._pointer_is_validGLPK._print_ranges_flagsGLPK._probGLPK._read_prob_flagsGLPK._reasonGLPK._row_is_validGLPK._rowcol_is_validGLPK._rows_and_colsGLPK._rows_ids_contentGLPK._rows_ids_sizeGLPK._scale_flagsGLPK._sel_is_validGLPK._sol_paramGLPK._stat_is_validGLPK._status_is_optimalGLPK._string_lengthGLPK._succeededGLPK._term_out_flagGLPK._throw_invalid_methodGLPK._treeGLPK._var_is_basicGLPK._var_is_non_basicGLPK._vectors_all_same_sizeGLPK._vectors_sizeGLPK._write_prob_flagsGLPK.add_colsGLPK.add_lazy_constraint!GLPK.add_row!GLPK.add_rowsGLPK.adv_basisGLPK.analyze_boundGLPK.analyze_coefGLPK.bf_existsGLPK.bf_updatedGLPK.btranGLPK.callocGLPK.cdouble_vecGLPK.change_row_sense!GLPK.check_cnfsatGLPK.check_depsGLPK.check_dupGLPK.check_glpk_versionGLPK.check_kktGLPK.cint_vecGLPK.close_teeGLPK.copy_function_result!GLPK.copy_probGLPK.cpx_basisGLPK.create_indexGLPK.del_colsGLPK.del_rowsGLPK.delete_indexGLPK.delete_probGLPK.dual_rtestGLPK.erase_probGLPK.evalGLPK.eval_tab_colGLPK.eval_tab_rowGLPK.exactGLPK.factorizeGLPK.find_colGLPK.find_rowGLPK.freeGLPK.free_envGLPK.ftranGLPK.get_bfcpGLPK.get_bheadGLPK.get_col_bindGLPK.get_col_bound_typeGLPK.get_col_dualGLPK.get_col_kindGLPK.get_col_lbGLPK.get_col_nameGLPK.get_col_primGLPK.get_col_statGLPK.get_col_typeGLPK.get_col_ubGLPK.get_dual_statGLPK.get_infeasibility_rayGLPK.get_mat_colGLPK.get_mat_rowGLPK.get_num_binGLPK.get_num_colsGLPK.get_num_intGLPK.get_num_nzGLPK.get_num_rowsGLPK.get_obj_coefGLPK.get_obj_dirGLPK.get_obj_nameGLPK.get_obj_valGLPK.get_prim_statGLPK.get_prob_nameGLPK.get_riiGLPK.get_row_bindGLPK.get_row_dualGLPK.get_row_lbGLPK.get_row_nameGLPK.get_row_primGLPK.get_row_statGLPK.get_row_typeGLPK.get_row_ubGLPK.get_sjjGLPK.get_statusGLPK.get_unbnd_rayGLPK.get_unbounded_rayGLPK.get_variable_typesGLPK.glpkdefverGLPK.glpkmaxverGLPK.glpkminverGLPK.glpkwinverGLPK.includeGLPK.init_envGLPK.init_iocpGLPK.init_iptcpGLPK.init_smcpGLPK.interiorGLPK.intfeas1GLPK.intoptGLPK.ios_add_rowGLPK.ios_best_nodeGLPK.ios_branch_uponGLPK.ios_can_branchGLPK.ios_clear_poolGLPK.ios_curr_nodeGLPK.ios_del_rowGLPK.ios_get_probGLPK.ios_heur_solGLPK.ios_mip_gapGLPK.ios_next_nodeGLPK.ios_node_boundGLPK.ios_node_dataGLPK.ios_node_levelGLPK.ios_pool_sizeGLPK.ios_prev_nodeGLPK.ios_reasonGLPK.ios_row_attrGLPK.ios_select_nodeGLPK.ios_terminateGLPK.ios_tree_sizeGLPK.ios_up_nodeGLPK.ipt_col_dualGLPK.ipt_col_primGLPK.ipt_obj_valGLPK.ipt_row_dualGLPK.ipt_row_primGLPK.ipt_statusGLPK.jl_get_preemptive_checkGLPK.jl_obj_is_validGLPK.jl_set_preemptive_checkGLPK.libglpkGLPK.load_matrixGLPK.load_variable_primal!GLPK.mallocGLPK.mem_limitGLPK.mem_usageGLPK.minisat1GLPK.mip_col_valGLPK.mip_obj_valGLPK.mip_row_valGLPK.mip_statusGLPK.mpl_build_probGLPK.mpl_free_wkspGLPK.mpl_generateGLPK.mpl_postsolveGLPK.mpl_read_dataGLPK.mpl_read_modelGLPK.open_teeGLPK.prim_rtestGLPK.print_iptGLPK.print_mipGLPK.print_rangesGLPK.print_solGLPK.read_cnfsatGLPK.read_iptGLPK.read_lpGLPK.read_mipGLPK.read_mpsGLPK.read_probGLPK.read_solGLPK.round_bounds_to_integerGLPK.scale_probGLPK.set_bfcpGLPK.set_col_bndsGLPK.set_col_kindGLPK.set_col_nameGLPK.set_col_statGLPK.set_mat_colGLPK.set_mat_rowGLPK.set_obj_coefGLPK.set_obj_dirGLPK.set_obj_nameGLPK.set_parameterGLPK.set_prob_nameGLPK.set_riiGLPK.set_row_bndsGLPK.set_row_nameGLPK.set_row_statGLPK.set_sjjGLPK.set_variable_boundGLPK.simplexGLPK.sort_matrixGLPK.std_basisGLPK.term_outGLPK.transform_colGLPK.transform_rowGLPK.unscale_probGLPK.vecornothing_lengthGLPK.versionGLPK.warm_upGLPK.write_cnfsatGLPK.write_iptGLPK.write_lpGLPK.write_mipGLPK.write_mpsGLPK.write_probGLPK.write_sol"
},

]}
