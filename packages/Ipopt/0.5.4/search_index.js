var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Ipopt.jl-1",
    "page": "Readme",
    "title": "Ipopt.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Ipopt.jl is a Julia interface to the Ipopt nonlinear solver."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> import Pkg; Pkg.add(\"Ipopt\")Ipopt.jl will use BinaryProvider.jl to automatically install the Ipopt binaries. This should work for both the official Julia binaries from https://julialang.org/downloads/ and source-builds."
},

{
    "location": "#Custom-Installation-1",
    "page": "Readme",
    "title": "Custom Installation",
    "category": "section",
    "text": "To install custom built Ipopt binaries set the environmental variables JULIA_IPOPT_LIBRARY_PATH and JULIA_IPOPT_EXECUTABLE_PATH, and call import Pkg; Pkg.build(\"Ipopt\"). For instance, if the libraries are installed in /opt/lib and the executable is in /opt/bin just callENV[\"JULIA_IPOPT_LIBRARY_PATH\"] = \"/opt/lib\"\nENV[\"JULIA_IPOPT_EXECUTABLE_PATH\"] = \"/opt/bin\"\nimport Pkg; Pkg.build(\"Ipopt\")If you do not want BinaryProvider to download the default binaries on install set  JULIA_IPOPT_LIBRARY_PATH and JULIA_IPOPT_EXECUTABLE_PATH  before calling import Pkg; Pkg.add(\"Ipopt\").To switch back to the default binaries clear JULIA_IPOPT_LIBRARY_PATH and JULIA_IPOPT_EXECUTABLE_PATH, and call import Pkg; Pkg.build(\"Ipopt\")."
},

{
    "location": "#MathProgBase-Interface-1",
    "page": "Readme",
    "title": "MathProgBase Interface",
    "category": "section",
    "text": "Ipopt implements the solver-independent MathProgBase interface, and so can be used within modeling software like JuMP. The solver object is called IpoptSolver. All options listed in the Ipopt documentation may be passed directly. For example, you can suppress output by saying IpoptSolver(print_level=0). If you wish to pass an option specifically for the restoration phase, instead of using the prefix resto, use the prefix resto_. For example IpoptSolver(resto_max_iter=0)."
},

{
    "location": "#C-Interface-Wrapper-1",
    "page": "Readme",
    "title": "C Interface Wrapper",
    "category": "section",
    "text": "Full documentation for the Ipopt C wrapper is available here. Use of the nonlinear MathProgBase interface is recommended over the low-level C interface because it permits one to easily switch between solvers."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Ipopt.@append_to_jacobian_sparsityIpopt.@define_add_constraintIpopt.@define_constraint_primalIpopt.@eval_functionIpopt.@fill_constraint_jacobianIpopt.ApplicationReturnStatusIpopt.EmptyNLPEvaluatorIpopt.IpoptIpopt.IpoptMathProgModelIpopt.IpoptProblemIpopt.IpoptSolverIpopt.MOIIpopt.MPBIpopt.OptimizerIpopt.VariableInfoIpopt.__init__Ipopt.addOptionIpopt.amplexeIpopt.amplexe_env_valIpopt.amplexe_env_varIpopt.amplexefunIpopt.append_to_hessian_sparsity!Ipopt.append_to_jacobian_sparsity!Ipopt.check_depsIpopt.check_inboundsIpopt.constraint_boundsIpopt.createProblemIpopt.empty_nlp_dataIpopt.evalIpopt.eval_constraintIpopt.eval_constraint_jacobianIpopt.eval_f_wrapperIpopt.eval_functionIpopt.eval_g_wrapperIpopt.eval_grad_f_wrapperIpopt.eval_h_wrapperIpopt.eval_hessian_lagrangianIpopt.eval_jac_g_wrapperIpopt.eval_objectiveIpopt.eval_objective_gradientIpopt.fill_constraint_jacobian!Ipopt.fill_gradient!Ipopt.fill_hessian_lagrangian!Ipopt.freeProblemIpopt.has_lower_boundIpopt.has_upper_boundIpopt.hessian_lagrangian_structureIpopt.includeIpopt.intermediate_wrapperIpopt.is_fixedIpopt.jacobian_structureIpopt.libipoptIpopt.linear_eq_offsetIpopt.linear_ge_offsetIpopt.linear_le_offsetIpopt.nlp_constraint_offsetIpopt.openOutputFileIpopt.quadratic_eq_offsetIpopt.quadratic_ge_offsetIpopt.quadratic_le_offsetIpopt.setIntermediateCallbackIpopt.setProblemScalingIpopt.solveProblem"
},

]}
