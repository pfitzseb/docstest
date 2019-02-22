var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Gurobi.jl-1",
    "page": "Readme",
    "title": "Gurobi.jl",
    "category": "section",
    "text": "The Gurobi Optimizer is a commercial optimization solver for a variety of mathematical programming problems, including linear programming (LP), quadratic programming (QP), quadratically constrained programming (QCP), mixed integer linear programming (MILP), mixed-integer quadratic programming (MIQP), and mixed-integer quadratically constrained programming (MIQCP).The Gurobi solver is considered one of the best solvers (in terms of performance and success rate of tackling hard problems) in math programming, and its performance is comparable to (and sometimes superior to) CPLEX. Academic users can obtain a Gurobi license for free.This package is a wrapper of the Gurobi solver (through its C interface). Currently, this package supports the following types of problems:Linear programming (LP)\nMixed Integer Linear Programming (MILP)\nQuadratic programming (QP)\nMixed Integer Quadratic Programming (MIQP)\nQuadratically constrained quadratic programming (QCQP)\nSecond order cone programming (SOCP)\nMixed integer second order cone programming (MISOCP)The Gurobi wrapper for Julia is community driven and not officially supported by Gurobi. If you are a commercial customer interested in official support for Julia from Gurobi, let them know!"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Here is the procedure to setup this package:Obtain a license of Gurobi and install Gurobi solver, following the instructions on Gurobi\'s website.\nThe minimum version supported by Gurobi.jl is Gurobi v7.0.\nInstall this package using Pkgadd(Gurobi).\nMake sure the GUROBI_HOME environmental variable is set to the path of the Gurobi directory. This is part of a standard installation. The Gurobi library will be searched for in GUROBI_HOMElib on unix platforms and GUROBI_HOMEbin on Windows. If the library is not found, check that your version is listed in depsbuildjl.\nNow, you can start using it.By default, building Gurobi.jl will fail if the Gurobi library is not found. This may not be desirable in certain cases, for example when part of a package\'s test suite uses Gurobi as an optional test dependency, but Gurobi cannot be installed on a CI server running the test suite. To support this use case, the GUROBI_JL_SKIP_LIB_CHECK environment variable may be set (to any value) to make Gurobi.jl installable (but not usable)."
},

{
    "location": "#Use-Other-Packages-1",
    "page": "Readme",
    "title": "Use Other Packages",
    "category": "section",
    "text": "We highly recommend that you use the Gurobi.jl package with higher level packages such as JuMP.jl or MathProgBase.jl.This can be done using the GurobiSolver object. Here is how to create a JuMP model that uses Gurobi as the solver. Parameters are passed as keyword arguments:using JuMP, Gurobi\n\nm = Model(solver=GurobiSolver(Presolve=0))Most users should not need to use the low-level API detailed in the following sections."
},

{
    "location": "#API-Overview-1",
    "page": "Readme",
    "title": "API Overview",
    "category": "section",
    "text": "This package provides both APIs at different levels for constructing models and solving optimization problems."
},

{
    "location": "#Gurobi-Environment-1",
    "page": "Readme",
    "title": "Gurobi Environment",
    "category": "section",
    "text": "A Gurobi model is always associated with an Gurobi environment, which maintains a solver configuration. By setting parameters to this environment, one can control or tune the behavior of a Gurobi solver.To construct a Gurobi Environment, one can write:env = Gurobi.Env()This package provides functions to get and set parameters:getparam(env, name)       # get the value of a parameter\nsetparam!(env, name, v)   # set the value of a parameter\nsetparams!(env, name1=value1, name2=value2, ...)  # set parameters using keyword argumentsYou may refer to Gurobi\'s Parameter Reference for the whole list of parameters.Here are some simple examplessetparam!(env, \"Method\", 2)   # choose to use Barrier method\nsetparams!(env; IterationLimit=100, Method=1) # set the maximum iterations and choose to use Simplex methodThese parameters may be used directly with the GurobiSolver object used by MathProgBase. For example:solver = GurobiSolver(Method=2)\nsolver = GurobiSolver(Method=1, IterationLimit=100.)"
},

{
    "location": "#High-level-API-1",
    "page": "Readme",
    "title": "High-level API",
    "category": "section",
    "text": "If the objective coefficients and the constraints have already been given, one may use a high-level function gurobi_model to construct a model:gurobi_model(env, ...)One can use keyword arguments to specify the models:name:  the model name.\nsense: the sense of optimization (a symbol, which can be either minimize (default) or maximize).\nf:   the linear coefficient vector.\nH:   the quadratic coefficient matrix (can be dense or sparse).\nA:   the coefficient matrix of the linear inequality constraints.\nb:   the right-hand-side of the linear inequality constraints.\nAeq:  the coefficient matrix of the equality constraints.\nbeq:  the right-hand-side of the equality constraints.\nlb:   the variable lower bounds.\nub:   the variable upper bounds.This function constructs a model that represents the following problem:objective:  (1/2) x\' H x + f\' x\n\n      s.t.   A x <= b\n           Aeq x = beq\n         lb <= x <= ubThe caller must specify f using a non-empty vector, while other keyword arguments are optional. When H is omitted, this reduces to an LP problem. When lb is omitted, the variables are not lower bounded, and when ub is omitted, the variables are not upper bounded."
},

{
    "location": "#Low-level-API-1",
    "page": "Readme",
    "title": "Low-level API",
    "category": "section",
    "text": "This package also provides functions to build the model from scratch and gradually add variables and constraints. To construct an empty model, one can write:env = Gurobi.Env()    # creates a Gurobi environment\n\nmodel = Gurobi.Model(env, name)   # creates an empty model\nmodel = Gurobi.Model(env, name, sense)Here, sense is a symbol, which can be either minimize or maximize (default to minimize when omitted).Then, the following functions can be used to add variables and constraints to the model:## add variables\n\nadd_var!(model, vtype, c)   # add an variable with coefficient c\n                            # vtype can be either of\n                            # - GRB_CONTINUOUS  (for continuous variable)\n                            # - GRB_INTEGER (for integer variable)\n                            # - GRB_BINARY (for binary variable, i.e. 0/1)\n\nadd_cvar!(model, c)            # add a continuous variable\nadd_cvar!(model, c, lb, ub)    # add a continuous variable with specified bounds\n\nadd_ivar!(model, c)            # add an integer variable\nadd_ivar!(model, c, lb, ub)    # add an integer variable with specified bounds\n\nadd_bvar!(model, c)            # add a binary variable\n\n## add constraints\n\n# add a constraint with non-zero coefficients on specific variables.\n# rel can be \'<\', \'>\', or \'=\'\nadd_constr!(model, inds, coeffs, rel, rhs)\n\n# add a constraint with coefficient vector for all variables.\nadd_constr!(model, coeffs, rel, rhs)\n\n# add constraints using CSR format\nadd_constrs!(model, cbegin, inds, coeffs, rel, rhs)\n\n# add constraints using a matrix: A x (rel) rhs\nadd_constrs!(model, A, rel, rhs)  # here A can be dense or sparse\n\n# add constraints using a transposed matrix: At\' x (rel) rhs\n# this is usually more efficient than add_constrs!\nadd_constrs_t!(model, At, rel, rhs)  # here At can be dense or sparse\n\n# add a range constraint\nadd_rangeconstr!(model, inds, coeffs, lb, ub)\n\n# add range constraints using CSR format\nadd_rangeconstrs!(model, cbegin, inds, coeffs, lb, ub)\n\n# add range constraints using a matrix:  lb <= A x <= ub\nadd_rangeconstrs!(model, A, lb, ub)  # here A can be dense or sparse\n\n# add range constraints using a transposed matrix: lb <= At\' x <= ub\n# this is usually more efficient than add_rangeconstrs!\nadd_rangeconstrs_t!(model, At, lb, ub)  # here At can be dense or sparse"
},

{
    "location": "#Modify-Problem-1",
    "page": "Readme",
    "title": "Modify Problem",
    "category": "section",
    "text": "It is not uncommon in practice that one would like to adjust the objective coefficients and solve the problem again. This package provides a function set_objcoeffs for this purpose:set_objcoeffs!(model, new_coeffs)\n # ... one can also call add_constr! and friends to add additional constraints ...\nupdate_model!(model)   # changes take effect after this\noptimize(model)"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The usage of this package is straight forward. Below, we use several examples to demonstrate the use of this package to solve optimization problems."
},

{
    "location": "#Linear-Programming-Examples-1",
    "page": "Readme",
    "title": "Linear Programming Examples",
    "category": "section",
    "text": "Problem formulation:maximize x + y\n\ns.t. 50 x + 24 y <= 2400\n     30 x + 33 y <= 2100\n     x >= 45, y >= 5Below, we show how this problem can be constructed and solved in different ways."
},

{
    "location": "#Example-1.1:-High-level-Linear-Programming-API-1",
    "page": "Readme",
    "title": "Example 1.1: High-level Linear Programming API",
    "category": "section",
    "text": "Using the gurobi_model function:using Gurobi\n\nenv = Gurobi.Env()\n\n# set presolve to 0\nsetparam!(env, \"Presolve\", 0)\n\n # construct the model\nmodel = gurobi_model(env;\n    name = \"lp_01\",\n    f = ones(2),\n    A = [50. 24.; 30. 33.],\n    b = [2400., 2100.],\n    lb = [5., 45.])\n\n # run optimization\noptimize(model)\n\n # show results\nsol = get_solution(model)\nprintln(\"soln = $(sol)\")\n\nobjv = get_objval(model)\nprintln(\"objv = $(objv)\")"
},

{
    "location": "#Example-1.2:-Low-level-Linear-Programming-API-1",
    "page": "Readme",
    "title": "Example 1.2: Low-level Linear Programming API",
    "category": "section",
    "text": "using Gurobi\n\nenv = Gurobi.Env()\n\n# set presolve to 0\nsetparam!(env, \"Presolve\", 0)\n\n # creates an empty model (\"lp_01\" is the model name)\nmodel = Gurobi.Model(env, \"lp_01\", :maximize)\n\n # add variables\n # add_cvar!(model, obj_coef, lower_bound, upper_bound)\nadd_cvar!(model, 1.0, 45., Inf)  # x: x >= 45\nadd_cvar!(model, 1.0,  5., Inf)  # y: y >= 5\n\n # For Gurobi, you have to call update_model to have the\n # lastest changes take effect\nupdate_model!(model)\n\n # add constraints\n # add_constr!(model, coefs, sense, rhs)\nadd_constr!(model, [50., 24.], \'<\', 2400.) # 50 x + 24 y <= 2400\nadd_constr!(model, [30., 33.], \'<\', 2100.) # 30 x + 33 y <= 2100\nupdate_model!(model)\n\nprintln(model)\n\n # perform optimization\noptimize(model)You may also add variables and constraints in batch, as: # add mutliple variables in batch\nadd_cvars!(model, [1., 1.], [45., 5.], Inf)\n\n # add multiple constraints in batch\nA = [50. 24.; 30. 33.]\nb = [2400., 2100.]\nadd_constrs!(model, A, \'<\', b)"
},

{
    "location": "#Example-1.3:-Linear-programming-(MATLAB-like-style)-1",
    "page": "Readme",
    "title": "Example 1.3: Linear programming (MATLAB-like style)",
    "category": "section",
    "text": "You may also specify and solve the entire problem in one function call, using the solver-independent MathProgBase package.Julia code:using MathProgBase, Gurobi\n\nf = [1., 1.]\nA = [50. 24.; 30. 33.]\nb = [2400., 2100.]\nlb = [5., 45.]\n\n# pass params as keyword arguments to GurobiSolver\nsolution = linprog(f, A, \'<\', b, lb, Inf, GurobiSolver(Presolve=0))"
},

{
    "location": "#Example-1.4:-Linear-programming-with-JuMP-(Algebraic-model)-1",
    "page": "Readme",
    "title": "Example 1.4: Linear programming with JuMP (Algebraic model)",
    "category": "section",
    "text": "Using JuMP, we can specify linear programming problems using a more natural algebraic approach.using JuMP, Gurobi\n\n# pass params as keyword arguments to GurobiSolver\nm = Model(solver=GurobiSolver(Presolve=0))\n\n@variable(m, x >= 5)\n@variable(m, y >= 45)\n\n@objective(m, Min, x + y)\n@constraint(m, 50x + 24y <= 2400)\n@constraint(m, 30x + 33y <= 2100)\n\nstatus = solve(m)\nprintln(\"Optimal objective: \",getobjectivevalue(m),\n	\". x = \", getvalue(x), \" y = \", getvalue(y))"
},

{
    "location": "#Quadratic-programming-Examples-1",
    "page": "Readme",
    "title": "Quadratic programming Examples",
    "category": "section",
    "text": "Problem formulation:minimize x^2 + xy + y^2 + yz + z^2\n\ns.t.  x + 2 y + 3 z >= 4\n      x +   y       >= 1"
},

{
    "location": "#Example-2.1:-High-level-Quadratic-Programming-API-1",
    "page": "Readme",
    "title": "Example 2.1: High-level Quadratic Programming API",
    "category": "section",
    "text": "using the function gurobi_model:using Gurobi\n\nenv = Gurobi.Env()\n\nmodel = gurobi_model(env;\n        name = \"qp_01\",\n        H = [2. 1. 0.; 1. 2. 1.; 0. 1. 2.],\n        f = [0., 0., 0.],\n        A = -[1. 2. 3.; 1. 1. 0.],\n        b = -[4., 1.])\noptimize(model)"
},

{
    "location": "#Example-2.2:-Low-level-Quadratic-Programming-API-1",
    "page": "Readme",
    "title": "Example 2.2: Low-level Quadratic Programming API",
    "category": "section",
    "text": "using Gurobi\n\nenv = Gurobi.Env()\n\nmodel = Gurobi.Model(env, \"qp_01\")\n\nadd_cvars!(model, [1., 1.], 0., Inf)\nupdate_model!(model)\n\n # add quadratic terms: x^2, x * y, y^2\n # add_qpterms!(model, rowinds, colinds, coeffs)\nadd_qpterms!(model, [1, 1, 2], [1, 2, 2], [1., 1., 1.])\n\n # add linear constraints\nadd_constr!(model, [1., 2., 3.], \'>\', 4.)\nadd_constr!(model, [1., 1., 0.], \'>\', 1.)\nupdate_model!(model)\n\noptimize(model)"
},

{
    "location": "#Mixed-Integer-Programming-1",
    "page": "Readme",
    "title": "Mixed Integer Programming",
    "category": "section",
    "text": "This package also supports mixed integer programming.Problem formulation:maximize x + 2 y + 5 z\n\ns.t.  x + y + z <= 10\n      x + 2 y + z <= 15\n      x is continuous: 0 <= x <= 5\n      y is integer: 0 <= y <= 10\n      z is binary"
},

{
    "location": "#Example-3.1:-Low-level-MIP-API-1",
    "page": "Readme",
    "title": "Example 3.1: Low-level MIP API",
    "category": "section",
    "text": "Julia code:using Gurobi\n\nenv = Gurobi.Env()\n\nmodel = Gurobi.Model(env, \"mip_01\", :maximize)\n\n # add continuous variable\nadd_cvar!(model, 1., 0., 5.)  # x\n\n # add integer variable\nadd_ivar!(model, 2., 0, 10)   # y\n\n # add binary variable\nadd_bvar!(model, 5.)          # z\n\n # have the variables incorporated into the model\nupdate_model!(model)\n\nadd_constr!(model, ones(3), \'<\', 10.)\nadd_constr!(model, [1., 2., 1.], \'<\', 15.)\n\noptimize(model)Note that you can use add_ivars and add_bvars to add multiple integer or binary variables in batch."
},

{
    "location": "#Example-3.2:-MIP-using-JuMP-with-Gurobi-1",
    "page": "Readme",
    "title": "Example 3.2: MIP using JuMP with Gurobi",
    "category": "section",
    "text": "using JuMP, Gurobi\n\nm = Model(solver=GurobiSolver())\n\n@variables(m,begin\n    0 <= x <= 5\n    0 <= y <= 10, Int\n    z, Bin\nend)\n\n@objective(m, Max, x + 2y + 5z)\n@constraint(m, x + y + z <= 10)\n@constraint(m, x + 2y + z <= 15)\n\nsolve(m)"
},

{
    "location": "#Quadratic-constraints-1",
    "page": "Readme",
    "title": "Quadratic constraints",
    "category": "section",
    "text": "The add_qconstr function may be used to add quadratic constraints to a model.Problem formulation:maximize x + y\n\ns.t.  x, y >= 0\n      x^2 + y^2 <= 1Julia code:using Gurobi\n\nenv = Gurobi.Env()\n\nmodel = Gurobi.Model(env, \"qcqp_01\", :maximize)\n\nadd_cvars!(model, [1., 1.], 0., Inf)\nupdate_model!(model)\n\n # add_qpconstr!(model, linearindices, linearcoeffs, qrowinds, qcolinds, qcoeffs, sense, rhs)\nadd_qconstr!(model, [], [], [1, 2], [1, 2], [1, 1.], \'<\', 1.0)\nupdate_model!(model)\n\noptimize(model)SOCP constraints of the form xx = y^2 and xx = yz can be added using this method as well."
},

{
    "location": "#Reusing-the-same-Gurobi-environment-for-multiple-solves-1",
    "page": "Readme",
    "title": "Reusing the same Gurobi environment for multiple solves",
    "category": "section",
    "text": "When using this package via other packages such as MathProgBase.jl and JuMP.jl, the default behavior is to obtain a new Gurobi license token every time a model is created and solved. If you are using Gurobi in a setting where the number of concurrent Gurobi uses is limited (e.g. \"Single-Use\" or \"Floating-Use\" licenses), you might instead prefer to obtain a single license token that is shared by all models that your program solves. You can do this by passing a Gurobi Environment object as the first parameter to GurobiSolver. For example, the follow code snippet solves multiple problems with JuMP using the same license token:using JuMP, Gurobi\nenv = Gurobi.Env()\n\nm1 = Model(solver=GurobiSolver(env))\n...\n\n# The solvers can have different options too\nm2 = Model(solver=GurobiSolver(env, OutputFlag=0))\n..."
},

]}
