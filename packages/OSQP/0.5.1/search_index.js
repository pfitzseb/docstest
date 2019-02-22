var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OSQP.jl-1",
    "page": "Readme",
    "title": "OSQP.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)Julia wrapper for OSQP: the Operator Splitting QP Solver.The OSQP (Operator Splitting Quadratic Program) solver is a numerical optimization package for solving problems in the formminimize        0.5 x\' P x + q\' x\n\nsubject to      l <= A x <= uwhere x in R^n is the optimization variable. The objective function is defined by a positive semidefinite matrix P in S^n_+ and vector q in R^n. The linear constraints are defined by matrix A in R^{m x n} and vectors l in R^m U {-inf}^m, u in R^m U {+inf}^m."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The interface is documented here."
},

{
    "location": "autodocs/#OSQP.dimensions",
    "page": "Docstrings",
    "title": "OSQP.dimensions",
    "category": "function",
    "text": "dimensions(model::OSQP.Model)\n\nObtain problem dimensions from OSQP model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OSQP.setup!",
    "page": "Docstrings",
    "title": "OSQP.setup!",
    "category": "function",
    "text": "setup!(model, P, q, A, l, u, settings)\n\nPerform OSQP solver setup of model model, using the inputs P, q, A, l, u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OSQP.@checked_libOSQP.CInfoOSQP.Cc_intOSQP.CcscOSQP.DataOSQP.InfoOSQP.MKL_PARDISO_SOLVEROSQP.ManagedCcscOSQP.MathOptInterfaceOSQPOSQP.ModelOSQP.OSQPOSQP.OSQPMathProgBaseInterfaceOSQP.OSQP_INFTYOSQP.OptimizerOSQP.QDLDL_SOLVEROSQP.ResultsOSQP.SOLUTION_PRESENTOSQP.SettingsOSQP.SolutionOSQP.UPDATABLE_DATAOSQP.UPDATABLE_SETTINGSOSQP.WorkspaceOSQP.__init__OSQP.clean!OSQP.dimensionsOSQP.evalOSQP.includeOSQP.linsys_solver_str_to_int!OSQP.osqpOSQP.prep_idx_vector_for_ccallOSQP.restore_idx_vector_after_ccall!OSQP.setup!OSQP.solve!OSQP.status_mapOSQP.update!OSQP.update_A!OSQP.update_P!OSQP.update_P_A!OSQP.update_bounds!OSQP.update_l!OSQP.update_q!OSQP.update_settings!OSQP.update_u!OSQP.versionOSQP.warm_start!OSQP.warm_start_x!OSQP.warm_start_x_y!OSQP.warm_start_y!"
},

]}
