var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ConditionalJuMP-1",
    "page": "Readme",
    "title": "ConditionalJuMP",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package is built on top of JuMP* and provides basic automatic generation of indicator variables, which allow (limited) statements of the form condition implies constraint in convex optimizations. It does so by automatically introducing binary indicator variables as necessary, and by using interval arithmetic to choose an appropriate big-M formulation.* Please note that this package is not developed or maintained by the JuMP developers. "
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Basic-Implications-1",
    "page": "Readme",
    "title": "Basic Implications",
    "category": "section",
    "text": "using JuMP, Cbc, ConditionalJuMP\n\nm = Model(solver=CbcSolver())\n@variable(m, -1 <= x <= 1)  # having bounds on all variables is currently a requirement\n@variable(m, -1 <= y <= 1)\n# Require that y == 0.5 whenever x <= 0\n@implies(m, (x <= 0) => (y == 0.5))\n@objective(m, Min, 4x + y)\nsolve(m)\n@assert getvalue(x) ≈ -1\n@assert getvalue(y) ≈ 0.5"
},

{
    "location": "#Warm-starting-the-solver-1",
    "page": "Readme",
    "title": "Warm-starting the solver",
    "category": "section",
    "text": "Mixed-integer models can perform much better when given a feasible initial solution. If you\'ve assigned initial values to your variables using JuMP\'s setvalue() function, then ConditionalJuMP can use those values to also add starting values for the binary indicator variables. The warmstart() function does this for you:using JuMP, Cbc, ConditionalJuMP\n\nm = Model(solver=CbcSolver())\n@variable(m, -1 <= x <= 1)  # having bounds on all variables is currently a requirement\n@variable(m, -1 <= y <= 1)\n# Require that y == 0.5 whenever x <= 0\n@implies(m, (x <= 0) => (y == 0.5))\n@objective(m, Min, 4x + y)\n# Guess a solution with x == -0.5, y == 1\nsetvalue(x, -0.5)\nsetvalue(y, 1)\nwarmstart!(m)\nsolve(m)\n@assert getvalue(x) ≈ -1\n@assert getvalue(y) ≈ 0.5"
},

{
    "location": "#Fixing-the-binary-values-1",
    "page": "Readme",
    "title": "Fixing the binary values",
    "category": "section",
    "text": "It can sometimes be useful to write a model with implication constraints, but then choose to solve that model with the implications fixed. For example, we might wish to try solving the above model both for the case that x <= 0 and for the case that x >= 0. To do that, we just call warmstart!(model, true), which will use the values previously set with setvalue() to determine exactly which sets of constraints should be applied. More concretely:m = Model(solver=CbcSolver())\n@variable(m, -1 <= x <= 1)  # having bounds on all variables is currently a requirement\n@variable(m, -1 <= y <= 1)\n# Require that y == 0.5 whenever x <= 0\n@implies(m, (x <= 0) => (y == 0.5))\n@objective(m, Min, 4x + y)\n\n# Set up the indicator variables for the case that x == 1. Note that this does *not*\n# fix x to 1 in the optimization. It simply requires that any implications which depend\n# on x will be fixed to the set containing x == 1. In this case, that means that x will\n# be fixed to be greater than or equal to 0. \nsetvalue(x, 1)\nwarmstart!(m, true)\nsolve(m)\n\n@assert getvalue(x) ≈ 0\n@assert getvalue(y) ≈ -1m = Model(solver=CbcSolver())\n@variable(m, -1 <= x <= 1)  # having bounds on all variables is currently a requirement\n@variable(m, -1 <= y <= 1)\n# Require that y == 0.5 whenever x <= 0\n@implies(m, (x <= 0) => (y == 0.5))\n@objective(m, Min, 4x + y)\n\n# Set up the indicator variables for the case that x == -1. Note that this does *not*\n# fix x to -1 in the optimization. It simply requires that any implications which depend\n# on x will be fixed to the set containing x == -1. In this case, that means that x will\n# be fixed to be less than or equal to 0 AND (by the implication above) y will be fixed \n# to be equal to 0.5\nsetvalue(x, -1)\nwarmstart!(m, true)\nsolve(m)\n\n@assert getvalue(x) ≈ -1\n@assert getvalue(y) ≈ 0.5"
},

{
    "location": "#Disjunctions-1",
    "page": "Readme",
    "title": "Disjunctions",
    "category": "section",
    "text": "This package also provides the @ifelse macro to create simple if statements which work both on numbers and on optimization variables. For example, let\'s write a simple update function:function update(x)\n    if x <= 0\n        1\n    else\n        -1\n    end\nendThis works on numbers:julia> update(0.5)\n-1but not on variables:julia> m = Model();\n\njulia> @variable m x;\n\njulia> y = update(x)\nERROR: MethodError: no method matching isless(::Int64, ::JuMP.Variable)\nClosest candidates are:\n  isless(::Real, ::AbstractFloat) at operators.jl:97\n  isless(::Real, ::ForwardDiff.Dual) at /home/rdeits/.julia/v0.6/ForwardDiff/src/dual.jl:161\n  isless(::Real, ::Real) at operators.jl:266\nStacktrace:\n [1] update(::JuMP.Variable) at ./REPL[3]:2But if we replace the if statement with @ifelse, then the function will magically just work in both cases:function update(x)\n    @ifelse(x <= 0, \n      1,\n      -1\n      )\nendThe @? macro is necessary because JuMP does not define <= for its Variable type, and we don\'t want to commit type piracy by defining it ourselves. julia> update(0.5)\n-1\n\njulia> m = Model();\n\njulia> @variable m -5 <= x <= 5;\n\njulia> y = update(x)\nyUsing this, we can easily write optimizations over repeated applications of the update() function, which is something we might want to do in a model-predictive control application:m = Model(solver=CbcSolver())\n@variable m -0.5 <= x <= 0.5\n\nys = [x]\nfor i in 1:3\n    push!(ys, update(ys[end]))\nend\n\n@objective m Max sum(ys)\nsolve(m)\n@assert getvalue.(ys) ≈ [0, 1, -1, 1]The optimal solution is [0, 1, -1, 1] because our objective is to maximize the sum of the variables in ys. If x were >= 0, then our update rule would require the solution to look like [x, -1, 1, -1], which, due to the limits on 0.5 <= x <= 0.5 would have a sub-optimal objective value. So the indicator constraints have indeed given us the optimal solution. "
},

{
    "location": "#More-Complicated-Disjunctions-1",
    "page": "Readme",
    "title": "More Complicated Disjunctions",
    "category": "section",
    "text": "If your conditional statement can\'t be expressed as something in the form if x then y else z, then you can use the @switch macro to explicitly state each case:y = @switch(\n    (x <= 0) => 5,\n    ((x >= 0) & (x <= 1)) => 6,\n    (x >= 1) => 7\n)Note that by using @switch, you are promising that the set of cases you are providing completely cover the feasible set. That is, if you write:y = @switch(\n    (x <= -1) => 5,\n    (x >= 1) => 6\n)then x must either be <= -1 or >= 1. "
},

{
    "location": "#Complementarity-and-Disjunctions-1",
    "page": "Readme",
    "title": "Complementarity and Disjunctions",
    "category": "section",
    "text": "A final type of conditional you might want to express is a disjunction, which simply says \"exactly one of these conditions holds\". The @disjunction macro handles this case:m = Model()\n@variable m -1 <= x <= 1\n@disjunction(m, (x <= -1), (x >= 1)) This can also be used to create complementarity constraints, which require that the product of two expressions be equal to zero. If we want to require that y * x == 0, we can instead require that y == 0 or x == 0:m = Model()\n@variable m -1 <= x <= 1\n@variable m -1 <= y <= 1\n@disjunction(m, x == 0, y == 0)"
},

{
    "location": "#Implementation-Notes-1",
    "page": "Readme",
    "title": "Implementation Notes",
    "category": "section",
    "text": "Indicator constraints are currently enforced using a Big-M formulation. This formulation works by transforming the constraint: z == 1 implies x <= 0 into the constraint:x <= 0 + M * (1 - z)where z is restricted to be either 0 or 1. If M is sufficiently large, then when z == 0, x is essentially unbounded. But when z == 1, the constraint reduces to x <= 0 as desired. The key to successfully applying this formulation is choosing the right value of M. Too small an M will restrict x even when z == 0. Too large a value will create numerical difficulties in the solver. ConditionalJuMP.jl uses IntervalArithmetic.jl to solve for an appropriate value of M automatically. The idea is that if we know the bounds on x (from the upper and lower bounds in the JuMP model), we can compute exactly how large M needs to be. Even more complicated expressions like z == 1 implies (2x + 3y + z - 2 <= 5x) can be handled automatically because IntervalArithmetic.jl already knows how to propagate intervals through various functions. As an example, let\'s look back at the first model:m = Model(solver=CbcSolver())\n@variable(m, -1 <= x <= 1)  # having bounds on all variables is currently a requirement\n@variable(m, -1 <= y <= 1)\n# Require that y == 0.5 whenever x <= 0\n@implies(m, (x <= 0) => (y == 0.5))\n@objective(m, Min, 4x + y)The constraints which are generated for the indicator variable z are:x + z <= 1\ny + 0.5z <= 1\ny - 1.5z >= -1\n-x - z <= 0so the sufficiently-big values of M are all in the range [0.5, 1.5], which is certainly small enough not to create numerical problems. "
},

{
    "location": "autodocs/#ConditionalJuMP._getvalue",
    "page": "Docstrings",
    "title": "ConditionalJuMP._getvalue",
    "category": "function",
    "text": "Like JuMP.getvalue, but returns a Nullable{T}() for unset variables instead of throwing a warning\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConditionalJuMP.handle_constant_objective!",
    "page": "Docstrings",
    "title": "ConditionalJuMP.handle_constant_objective!",
    "category": "function",
    "text": "Gurobi doesn\'t understand constant terms in the objective, which can affect the way the relative MIP gap is interpreted. To work around this, we\'ll replace the constant term k with an affine term 1*x for a new variable x fixed to equal k.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConditionalJuMP.simplify!",
    "page": "Docstrings",
    "title": "ConditionalJuMP.simplify!",
    "category": "function",
    "text": "Simplification function that chooses the appropriate algorithm based on the number of variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConditionalJuMP.simplify_dict!",
    "page": "Docstrings",
    "title": "ConditionalJuMP.simplify_dict!",
    "category": "function",
    "text": "O(N) simplification, but with a substantially larger constant cost due to the need to construct a Dict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConditionalJuMP.simplify_inplace!",
    "page": "Docstrings",
    "title": "ConditionalJuMP.simplify_inplace!",
    "category": "function",
    "text": "Naive O(N^2) simplification. Slower for very large expressions, but allocates no memory and is solidly faster for expressions with < 100 variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ConditionalJuMP.@?ConditionalJuMP.@disjunctionConditionalJuMP.@ifelseConditionalJuMP.@impliesConditionalJuMP.@switchConditionalJuMP.ConditionalConditionalJuMP.ConditionalJuMPConditionalJuMP.ConstraintConditionalJuMP.ImplicationConditionalJuMP.IndicatorConditionalJuMP.IndicatorMapConditionalJuMP.NArgConditionalJuMP.UnboundedVariableExceptionConditionalJuMP.UnhandledComplementExceptionConditionalJuMP._all_conditionalConditionalJuMP._conditionalConditionalJuMP._conditionalizeConditionalJuMP._conditionalize_function_broadcastConditionalJuMP._conditionalize_operator_broadcastConditionalJuMP._fixConditionalJuMP._getvalueConditionalJuMP._hashConditionalJuMP._setvalueConditionalJuMP._unfixConditionalJuMP.appendConditionalJuMP.complementConditionalJuMP.disjunction!ConditionalJuMP.evalConditionalJuMP.getindicator!ConditionalJuMP.getindmap!ConditionalJuMP.getmodelConditionalJuMP.handle_constant_objective!ConditionalJuMP.hascomplementConditionalJuMP.ifelse_conditionalConditionalJuMP.implies!ConditionalJuMP.includeConditionalJuMP.intervalConditionalJuMP.is_function_broadcastConditionalJuMP.is_operator_broadcastConditionalJuMP.isfixedConditionalJuMP.isjumpConditionalJuMP.lowerboundConditionalJuMP.nan_to_nullConditionalJuMP.newbinaryvarConditionalJuMP.newcontinuousvarConditionalJuMP.normalize!ConditionalJuMP.simplify!ConditionalJuMP.simplify_dict!ConditionalJuMP.simplify_inplace!ConditionalJuMP.switchConditionalJuMP.switch!ConditionalJuMP.upperboundConditionalJuMP.variableConditionalJuMP.warmstart!"
},

]}
