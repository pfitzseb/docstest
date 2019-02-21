var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Algebraic-Multigrid-(AMG)-1",
    "page": "Readme",
    "title": "Algebraic Multigrid (AMG)",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io) (Image: Build status)This package lets you solve sparse linear systems using Algebraic Multigrid (AMG). This works especially well for symmetric positive definite matrices. "
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using AlgebraicMultigrid\n\nA = poisson(1000) # Creates a sample symmetric positive definite sparse matrix\nml = ruge_stuben(A) # Construct a Ruge-Stuben solver\n# Multilevel Solver\n# -----------------\n# Operator Complexity: 1.9859906604402935\n# Grid Complexity: 1.99\n# No. of Levels: 8\n# Coarse Solver: AMG.Pinv()\n# Level     Unknowns     NonZeros\n# -----     --------     --------\n#     1         1000         2998 [50.35%]\n#     2          500         1498 [25.16%]\n#     3          250          748 [12.56%]\n#     4          125          373 [ 6.26%]\n#     5           62          184 [ 3.09%]\n#     6           31           91 [ 1.53%]\n#     7           15           43 [ 0.72%]\n#     8            7           19 [ 0.32%]\n\n\nsolve(ml, A * ones(1000)) # should return ones(1000)"
},

{
    "location": "#As-a-Preconditioner-1",
    "page": "Readme",
    "title": "As a Preconditioner",
    "category": "section",
    "text": "You can use AMG as a preconditioner for Krylov methods such as Conjugate Gradients.import IterativeSolvers: cg\np = aspreconditioner(ml)\nc = cg(A, A*ones(1000), Pl = p) "
},

{
    "location": "#Features-and-Roadmap-1",
    "page": "Readme",
    "title": "Features and Roadmap",
    "category": "section",
    "text": "This package currently supports: AMG Styles:Ruge-Stuben Solver\nSmoothed Aggregation (SA)Strength of Connection: Classical Strength of Connection\nSymmetric Strength of ConnectionSmoothers:Gauss Seidel (Symmetric, Forward, Backward)\nDamped JacobiCycling:V cycle In the future, this package will support:Other splitting methods (like CLJP)\nSOR smoother\nW, F, AMLI cycles"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "This package has been heavily inspired by the PyAMG project. "
},

{
    "location": "autodocs/#AlgebraicMultigrid.solve",
    "page": "Docstrings",
    "title": "AlgebraicMultigrid.solve",
    "category": "function",
    "text": "solve(ml::MultiLevel, b::AbstractArray, cycle, kwargs...)\n\nExecute multigrid cycling.\n\nArguments\n\nml::MultiLevel - the multigrid hierarchy\nb::Vector - the right hand side\ncycle -  multigird cycle to execute at each iteration. Defaults to AMG.V()\n\nKeyword Arguments\n\ntol::Float64 - tolerance criteria for convergence\nmaxiter::Int64 - maximum number of iterations to execute\nverbose::Bool - display residual at each iteration\nlog::Bool - return vector of residuals along with solution\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AlgebraicMultigrid.AMGAlgebraicMultigrid.AlgebraicMultigridAlgebraicMultigrid.BackwardSweepAlgebraicMultigrid.C_NODEAlgebraicMultigrid.ClassicalAlgebraicMultigrid.CoarseSolverAlgebraicMultigrid.CycleAlgebraicMultigrid.DiagonalWeightingAlgebraicMultigrid.F_NODEAlgebraicMultigrid.ForwardSweepAlgebraicMultigrid.GaussSeidelAlgebraicMultigrid.HermitianSymmetryAlgebraicMultigrid.JacobiAlgebraicMultigrid.JacobiProlongationAlgebraicMultigrid.LevelAlgebraicMultigrid.LocalWeightingAlgebraicMultigrid.MTAlgebraicMultigrid.MultiLevelAlgebraicMultigrid.MultiLevelWorkspaceAlgebraicMultigrid.PinvAlgebraicMultigrid.PreconditionerAlgebraicMultigrid.RSAlgebraicMultigrid.RS_CF_splittingAlgebraicMultigrid.SmootherAlgebraicMultigrid.SolverAlgebraicMultigrid.StandardAggregationAlgebraicMultigrid.StrengthAlgebraicMultigrid.SweepAlgebraicMultigrid.SymmetricStrengthAlgebraicMultigrid.SymmetricSweepAlgebraicMultigrid.U_NODEAlgebraicMultigrid.VAlgebraicMultigrid.__solve!AlgebraicMultigrid.adjointAlgebraicMultigrid.approximate_eigenvaluesAlgebraicMultigrid.approximate_spectral_radiusAlgebraicMultigrid.aspreconditionerAlgebraicMultigrid.blocksizeAlgebraicMultigrid.coarse_b!AlgebraicMultigrid.coarse_x!AlgebraicMultigrid.construct_RAlgebraicMultigrid.copy_V!AlgebraicMultigrid.direct_interpolationAlgebraicMultigrid.evalAlgebraicMultigrid.extend_heirarchy!AlgebraicMultigrid.extend_hierarchy!AlgebraicMultigrid.find_breakdownAlgebraicMultigrid.find_maxAlgebraicMultigrid.find_max_off_diagAlgebraicMultigrid.findmaxabsAlgebraicMultigrid.fit_candidatesAlgebraicMultigrid.grid_complexityAlgebraicMultigrid.gs!AlgebraicMultigrid.includeAlgebraicMultigrid.norm_colAlgebraicMultigrid.operator_complexityAlgebraicMultigrid.poissonAlgebraicMultigrid.remove_diag!AlgebraicMultigrid.residual!AlgebraicMultigrid.rs_direct_interpolation_pass1AlgebraicMultigrid.rs_direct_interpolation_pass2AlgebraicMultigrid.ruge_stubenAlgebraicMultigrid.scale_cols_by_largest_entry!AlgebraicMultigrid.scale_rowsAlgebraicMultigrid.scale_rows!AlgebraicMultigrid.smoothed_aggregationAlgebraicMultigrid.solveAlgebraicMultigrid.solve!AlgebraicMultigrid.weight"
},

]}
