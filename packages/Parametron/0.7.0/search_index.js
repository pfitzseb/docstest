var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Parametron-1",
    "page": "Readme",
    "title": "Parametron",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: ) (Image: )Parametron makes it easy to set up and efficiently (ideally, with zero allocation) solve instances of a parameterized family of optimization problems."
},

{
    "location": "#Example-1-1",
    "page": "Readme",
    "title": "Example 1",
    "category": "section",
    "text": "As an example, we\'ll use the OSQP solver to solve the following quadratic program:Minimize ||A x - b||^2\nsubject to C x = dwith decision variable vector x, and where A, b, C, and d are parameters with random values, to be re-sampled each time the problem is re-solved.Here\'s the basic problem setup:# create a MathOptInterface optimizer instance\nusing OSQP\noptimizer = OSQP.Optimizer()\n\n# create a Parametron.Model, which holds problem information\nusing Parametron\nusing Random, LinearAlgebra\nmodel = Model(optimizer)\n\n# create decision variables and parameters\nn = 8; m = 2\nx = [Variable(model) for _ = 1 : n]\nA = Parameter(rand!, zeros(n, n), model)\nb = Parameter(rand!, zeros(n), model)\nC = Parameter(rand!, zeros(m, n), model)\nd = Parameter(zeros(m), model) do d\n    # do syntax makes it easy to create custom Parameters\n    rand!(d)\n    d .*= 2\nend\n\n# the @expression macro can be used to create \'lazy\' expressions,\n# which can be used in constraints or the objective function, and\n# can be evaluated at a later time, automatically updating the\n# Parameters in the process (if needed).\nresidual = @expression A * x - b\n\n# set the objective function\n@objective(model, Minimize, residual ⋅ residual)\n\n# add the constraints. You could have multiple @constraint calls\n# as well. ==, <=, and >= are supported.\n@constraint(model, C * x == d)Now that the problem is set up, we can solve and obtain the solution as follows:julia> solve!(model)\n-----------------------------------------------------------------\n           OSQP v0.3.0  -  Operator Splitting QP Solver\n              (c) Bartolomeo Stellato,  Goran Banjac\n        University of Oxford  -  Stanford University 2017\n-----------------------------------------------------------------\nproblem:  variables n = 8, constraints m = 2\n          nnz(P) + nnz(A) = 88\nsettings: linear system solver = suitesparse ldl,\n          eps_abs = 1.0e-03, eps_rel = 1.0e-03,\n          eps_prim_inf = 1.0e-04, eps_dual_inf = 1.0e-04,\n          rho = 1.00e-01 (adaptive),\n          sigma = 1.00e-06, alpha = 1.60, max_iter = 4000\n          check_termination: on (interval 25),\n          scaling: on, scaled_termination: off\n          warm start: on, polish: off\n\niter   objective    pri res    dua res    rho        time\n   1  -7.8949e-01   9.57e-01   1.02e+03   1.00e-01   1.34e-04s\n  25  -2.0032e+00   2.87e-04   4.82e-03   1.00e-01   1.76e-04s\n\nstatus:               solved\nnumber of iterations: 25\noptimal objective:    -2.0032\nrun time:             1.81e-04s\noptimal rho estimate: 5.16e-02\n\njulia> value.(model, x)\n8-element Array{Float64,1}:\n -0.365181\n -0.119036\n -0.267222\n  1.41655\n  0.69472\n  0.993475\n -0.631194\n -1.02733Note that the next time solve! is called, the update functions of our parameters (A, b, C, and d) will be called again (once for each parameter), resulting in a different optimum:julia> solve!(model)\niter   objective    pri res    dua res    rho        time\n   1  -1.4419e+00   2.57e-01   5.79e+02   1.00e-01   1.53e-05s\n  25  -3.2498e+00   1.34e-04   2.74e-03   1.00e-01   3.10e-05s\n\nstatus:               solved\nnumber of iterations: 25\noptimal objective:    -3.2498\nrun time:             3.63e-05s\noptimal rho estimate: 7.79e-02\n\njulia> value.(model, x)\n8-element Array{Float64,1}:\n  0.220836\n -0.462071\n  0.509146\n  0.667908\n -0.850638\n  0.7877\n  1.01581\n -0.992135Note that the solver is warm-started. Also note that updating the parameters and solving a new QP instance is quite fast:julia> using MathOptInterface; using OSQP.MathOptInterfaceOSQP: OSQPSettings; MathOptInterface.set(optimizer, OSQPSettings.Verbose(), false) # silence the optimizer\n\njulia> using BenchmarkTools\n\njulia> @btime solve!($model)\n  51.863 μs (0 allocations: 0 bytes)The performance and lack of allocations stems from the fact that the \'lazy expressions\' used for the constraints and objective function are automatically optimized to calls to in-place functions."
},

{
    "location": "#Example-2-1",
    "page": "Readme",
    "title": "Example 2",
    "category": "section",
    "text": "Of course, in many real-world problems you are unlikely to update your parameters with random values. Here\'s an illustration showing how you might control these values more directly, fitting a vector g in a modelg\' * X[:,i] ≈ p[i]for a set of vectors in columns of X.This example also demonstrates a different style of updating parameters. Whereas in the previous example we supplied an \'update function\' (e.g., rand!) that is automatically called when solve! is called, in this example we use the syntaxParameter(model, val=some_manually_updated_mutable_object)to create a Parameter whose value may be updated manually between calls to the solve! function.using Parametron, OSQP.MathOptInterfaceOSQP\nusing Random\n\nn, m = 5, 15\nXdata = randn(n, m)\npdata = Vector{Float64}(undef, m);\nmodel = Model(OSQP.Optimizer())\nX = Parameter(model, val=Xdata)\np = Parameter(model, val=pdata)\ng = [Variable(model) for _ = 1:n]\nresid = @expression X\'*g - p\n@objective(model, Minimize, resid\'*resid)\n\n# Try with a specific ground-truth `g`\nggt = randn(n)\npdata .= Xdata\'*ggt  # set the values in-place using `.=`\nsolve!(model)\n\njulia> value.(model, g)\n5-element Array{Float64,1}:\n  0.6710700783457044\n  1.3999896266657308\n  0.5666247642146109\n -1.018123491138979\n -0.7464853233374451\n\njulia> ggt\n5-element Array{Float64,1}:\n  0.671068170731507\n  1.399985646860983\n  0.5666231534233734\n -1.0181205969900424\n -0.7464832010803155You can re-fit the model after updating pdata and/or Xdata in-place."
},

{
    "location": "autodocs/#Parametron.@constraint",
    "page": "Docstrings",
    "title": "Parametron.@constraint",
    "category": "macro",
    "text": "Add a constraint to the model using operators ==, <=, >=, or in/∈.\n\nin/∈ may only be used for single variables with a right hand side that is one of:\n\nℤ or Integers\n{0, 1} or ZeroOne\n\nExamples\n\nThe constraint x >= zeros(2) can be added to a model as follows:\n\njulia> x = [Variable(model) for i = 1 : 2];\n\njulia> @constraint(model, x >= zeros(2))\n\nThe constraint that variable x[1] should be an integer can be expressed using:\n\njulia> @constraint(model, x[1] ∈ ℤ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.@expression",
    "page": "Docstrings",
    "title": "Parametron.@expression",
    "category": "macro",
    "text": "Create a new LazyExpression and apply optimizations to it to reduce allocations and improve performance.\n\nExpressions that do not depend on Parameters or other [LazyExpression]s are simply evaluated straight away.\n\nExamples\n\nCreating an expression that represents p * x1, where p is a parameter that always evaluates to 2:\n\njulia> x1 = Variable(model);\n\njulia> p = Parameter{Int}(() -> 2, model)\nParameter{Int64, …}(…)\n\njulia> expr = @expression p * x1\nLazyExpression{FunctionWrapper{…}(LazyExpression{typeof(*), …}(…))}(…)\n\njulia> expr()\n2 * x1\n\nCreating an expression that represents p ⋅ x, where p is a parameter that evaluates to [1, 2] and x is a vector of two variables:\n\njulia> model = Parametron.mock_model();\n\njulia> x = Variable.(1 : 2);\n\njulia> p = Parameter(model, val=[1, 2])\nParameter{Array{Int64,1}, …}(…)\n\njulia> expr = @expression p ⋅ x\nLazyExpression{FunctionWrapper{…}(LazyExpression{typeof(Parametron.Functions.vecdot!), …}(…))}(…)\n\njulia> expr()\n1 * x1 + 2 * x2 + 0\n\njulia> @allocated expr()\n0\n\nNote that evaluating the expression does not allocate, because the ⋅ operation is optimized and transformed into a call to the in-place Functions.vecdot! function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.@objective",
    "page": "Docstrings",
    "title": "Parametron.@objective",
    "category": "macro",
    "text": "Set the objective function of the model.\n\nExamples\n\nLet model be a Model instance. The objective \'minimize x ⋅ x\' can be added as follows:\n\njulia> x = [Variable(model) for i = 1 : 2];\n\njulia> @objective model Minimize x ⋅ x;\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.Functions.AffineFunction",
    "page": "Docstrings",
    "title": "Parametron.Functions.AffineFunction",
    "category": "type",
    "text": "struct AffineFunction{T}\n\nA scalar affine function represented by a sum of LinearTerms and a constant.\n\nAffineFunction overloads the call operator, which can be used to evalute the function given values for the decision variables. The call operator takes an AbstractDict{Variable, T} collection, which associates values with variables.\n\nExample\n\njulia> x, y = Variable.(1 : 2);\n\njulia> affinefun = 2 * x + 3 * y + 4\n2 * x1 + 3 * x2 + 4\n\njulia> vals = Dict(x => 4, y => -3);\n\njulia> affinefun(vals)\n3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.Functions",
    "page": "Docstrings",
    "title": "Parametron.Functions",
    "category": "module",
    "text": "The Functions module provides types that represent decision variables and functions of these decision variables that possess a certain structure, such as being affine or quadratic in the decision variables.\n\nVarious operators are overloaded to make it easy to construct such functions.\n\nExample\n\njulia> x, y = Variable.(1 : 2)\n2-element Array{Parametron.Functions.Variable,1}:\n Parametron.Functions.Variable(1)\n Parametron.Functions.Variable(2)\n\njulia> fun = 3 * (x + y) + 4\n3 * x1 + 3 * x2 + 4\n\njulia> typeof(fun)\nParametron.Functions.AffineFunction{Int64}\n\njulia> fun.linear\n2-element Array{Parametron.Functions.LinearTerm{Int64},1}:\n\n 3 * x1\n 3 * x2\n\njulia> fun.constant\nBase.RefValue{Int64}(4)\n\nThe Functions module also provides in-place versions of certain common operations, e.g., add!, subtract!, and vecdot!, which may be used to evaluate operations performed on the functions into a preallocated destination without any heap allocations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.LazyExpression",
    "page": "Docstrings",
    "title": "Parametron.LazyExpression",
    "category": "type",
    "text": "struct LazyExpression{F, A}\n\nRepresents an expression that may be evaluated at a later time, by storing both a function, f, and a tuple of function arguments, args.\n\nLazyExpressions are typically not manually constructed by a user, and hence are not exported. Instead, LazyExpressions should be created using the [@expression] macro.\n\nA LazyExpression may be evaluated by simply calling it with no arguments.\n\nExample\n\njulia> a = ones(2); b = ones(2);\n\njulia> expr = Parametron.LazyExpression(+, a, b)\nLazyExpression{typeof(+), …}(…)\n\njulia> expr()\n2-element Array{Float64,1}:\n 2.0\n 2.0\n\njulia> b .= 2\n2-element Array{Float64,1}:\n 2.0\n 2.0\n\njulia> expr()\n2-element Array{Float64,1}:\n 3.0\n 3.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.Functions.LinearTerm",
    "page": "Docstrings",
    "title": "Parametron.Functions.LinearTerm",
    "category": "type",
    "text": "struct LinearTerm{T}\n\nRepresents a scalar linear term, i.e. a decision variable scaled by a coefficient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.Model",
    "page": "Docstrings",
    "title": "Parametron.Model",
    "category": "type",
    "text": "Model(optimizer)\n\n\nCreate a new Model, representing an optimization problem to be solved by the optimizer optimizer (a MathOptInterface.AbstractOptimizer).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.Parameter",
    "page": "Docstrings",
    "title": "Parametron.Parameter",
    "category": "type",
    "text": "struct Parameter{T, F, InPlace}\n\nRepresents a \'placeholder\' for data; a value that may be filled in later.\n\nParameters can be evaluated by simply calling them with no arguments.\n\nParameters keep track of whether they\'ve already been evaluated using dirty flag. To reevalute a parameter, the dirty flag must first be set using setdirty!(parameter). The update function will then be called when the parameter itself is called.\n\nExamples\n\njulia> value = Ref(1)\nBase.RefValue{Int64}(1)\n\njulia> p = Parameter{Int}(() -> value[], model)\nParameter{Int64, …}(…)\n\njulia> p()\n1\n\njulia> value[] = 2\n2\n\njulia> p()\n1\n\njulia> Parametron.setdirty!(p); p()\n2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.Functions.QuadraticFunction",
    "page": "Docstrings",
    "title": "Parametron.Functions.QuadraticFunction",
    "category": "type",
    "text": "struct QuadraticFunction{T}\n\nA scalar quadratic function represented by a sum of QuadraticTerms and an AffineFunction.\n\nQuadraticFunction overloads the call operator, which can be used to evalute the function given values for the decision variables. The call operator takes an AbstractDict{Variable, T} collection, which associates values with variables.\n\nExamples\n\njulia> x, y = Variable.(1 : 2);\n\njulia> quadraticfun = 2 * x^2 + 3 * x * y - 2 * y + 4\n2 * x1 * x1 + 3 * x1 * x2 + -2 * x2 + 4\n\njulia> vals = Dict(x => 4, y => -3);\n\njulia> quadraticfun(vals)\n6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.Functions.QuadraticTerm",
    "page": "Docstrings",
    "title": "Parametron.Functions.QuadraticTerm",
    "category": "type",
    "text": "struct QuadraticTerm{T}\n\nRepresents a scalar quadratic term, i.e. the product of two decision variables scaled by a coefficient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.Functions.Variable",
    "page": "Docstrings",
    "title": "Parametron.Functions.Variable",
    "category": "type",
    "text": "struct Variable\n\nRepresents a single decision variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.dualstatus",
    "page": "Docstrings",
    "title": "Parametron.dualstatus",
    "category": "function",
    "text": "dualstatus(m)\n\n\nReturn information regarding the dual of the problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.findallocs",
    "page": "Docstrings",
    "title": "Parametron.findallocs",
    "category": "function",
    "text": "findallocs(x)\n\n\nUtility function that can be used to track down allocations in LazyExpressions.\n\nExamples\n\nThe following session shows the output of findallocs if the expression doesn\'t allocate:\n\njulia> x = [Variable(model) for i in 1 : 2];\n\njulia> param = Parameter{Int}(() -> 2, model)\nParameter{Int64, …}(…)\n\njulia> expr = @expression param * x\nLazyExpression{FunctionWrapper{…}(LazyExpression{typeof(Parametron.Functions.scale!), …}(…))}(…)\n\njulia> Parametron.findallocs(expr)\nLazyExpression{FunctionWrapper{…}(LazyExpression{typeof(Parametron.Functions.scale!), …}(…))}(…): 0 bytes\n  [1]: Array{LinearTerm{Int64},1}\n  [2]: Parameter{Int64, …}(…): 0 bytes\n  [3]: Array{Variable,1}\n\nIn this session, param allocates, and findallocs reports the allocation:\n\njulia> x = [Variable(model) for i in 1 : 2];\n\njulia> param = Parameter(() -> zeros(2), model)\nParameter{Array{Float64,1}, …}(…)\n\njulia> expr = @expression param ⋅ x\nLazyExpression{FunctionWrapper{…}(LazyExpression{typeof(Parametron.Functions.vecdot!), …}(…))}(…)\n\njulia> Parametron.findallocs(expr)\nLazyExpression{FunctionWrapper{…}(LazyExpression{typeof(Parametron.Functions.vecdot!), …}(…))}(…): 0 bytes\n  [1]: AffineFunction{Float64}\n  [2]: Parameter{Array{Float64,1}, …}(…): 96 bytes\n  [3]: Array{Variable,1}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.initialize!",
    "page": "Docstrings",
    "title": "Parametron.initialize!",
    "category": "function",
    "text": "initialize!(m)\n\n\nCopy the problem to be solved to the optimizer.\n\nUsers should generally not need to call this function directly, as it is automatically called the first time solve! is called on a Model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.objectivevalue",
    "page": "Docstrings",
    "title": "Parametron.objectivevalue",
    "category": "function",
    "text": "objectivevalue(m)\n\n\nReturn the value of the objective function at the solution found by the optimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.primalstatus",
    "page": "Docstrings",
    "title": "Parametron.primalstatus",
    "category": "function",
    "text": "primalstatus(m)\n\n\nReturn information regarding the primal of the problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.setdirty!",
    "page": "Docstrings",
    "title": "Parametron.setdirty!",
    "category": "function",
    "text": "setdirty!(model)\n\n\nMark all parameters associated with the model as \'dirty\' (out of date), meaning they must be updated upon their next evaluation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.setobjective!",
    "page": "Docstrings",
    "title": "Parametron.setobjective!",
    "category": "function",
    "text": "setobjective!(m, sense, expr)\n\n\nSet the objective function and optimization sense (Minimize or Maximize).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.solve!",
    "page": "Docstrings",
    "title": "Parametron.solve!",
    "category": "function",
    "text": "solve!(m)\n\n\nSolve the model m. (Re-)evaluate constraint and objective expressions, update the optimizer\'s internal representation of the problem, and start the optimization procedure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.sort_and_combine!",
    "page": "Docstrings",
    "title": "Parametron.sort_and_combine!",
    "category": "function",
    "text": "sort_and_combine!(v; alg, combine, by, lt)\n\n\nSort the vector v in-place using Base.sort!, then combine all entries which compare equal (as determined using the lt and by functions), using the function combined = combine(x, y).\n\nSee documentation for Base.sort! regarding the alg, by and lt keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.terminationstatus",
    "page": "Docstrings",
    "title": "Parametron.terminationstatus",
    "category": "function",
    "text": "terminationstatus(m)\n\n\nReturn the termination status of the solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.update!",
    "page": "Docstrings",
    "title": "Parametron.update!",
    "category": "function",
    "text": "Re-evaluate the expressions used to build the constraints and objective function of Model m.\n\nUsers should generally not need to call this function directly, as it is automatically called in solve!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.value",
    "page": "Docstrings",
    "title": "Parametron.value",
    "category": "function",
    "text": "value(m, x)\n\n\nReturn the value of variable x as determined by the optimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parametron.wrap",
    "page": "Docstrings",
    "title": "Parametron.wrap",
    "category": "function",
    "text": "wrap(expr)\n\n\nWrap a LazyExpression in a FunctionWrappers.FunctionWrapper and return a new LazyExpression with the FunctionWrapper as the function f and an empty tuple as the arguments arg.\n\nThe type parameters of the returned LazyFunction depend only on the type of the value returned by expr. This is useful when a common interface is needed for different LazyExpressions that share the same return value type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Parametron.@constraintParametron.@expressionParametron.@objectiveParametron.AffineFunctionParametron.ConstraintParametron.ConstraintsParametron.FunctionWrappersQuickFixParametron.FunctionsParametron.IdentityVarMapParametron.LazyExpressionParametron.LinearTermParametron.MOIParametron.MOIUParametron.MaximizeParametron.MinimizeParametron.MockModelParametron.ModelParametron.ObjectiveParametron.ParameterParametron.ParametronParametron.ParametronMOIModelParametron.ParametronMOIModelScalarConstraintsParametron.ParametronMOIModelVectorConstraintsParametron.QuadraticFunctionParametron.QuadraticTermParametron.SenseParametron.VariableParametron.WrappedExpressionParametron._add_nonnegative_constraint!Parametron._add_nonpositive_constraint!Parametron._add_zero_constraint!Parametron._debug_argsParametron.add_binary_constraint!Parametron.add_constraintParametron.add_integer_constraint!Parametron.add_nonnegative_constraint!Parametron.add_nonpositive_constraint!Parametron.add_zero_constraint!Parametron.addparameter!Parametron.canonical_function_typeParametron.dualstatusParametron.evalParametron.evalargParametron.evalexprParametron.findallocsParametron.includeParametron.initialize!Parametron.isinplaceParametron.make_moi_equivalentParametron.mapindices!Parametron.mock_modelParametron.moi_to_native_typeParametron.objectivevalueParametron.optimizeParametron.optimize_toplevelParametron.optimizeargParametron.primalstatusParametron.setdirty!Parametron.setobjective!Parametron.solve!Parametron.sort_and_combine!Parametron.terminationstatusParametron.update!Parametron.valueParametron.wrap"
},

]}
