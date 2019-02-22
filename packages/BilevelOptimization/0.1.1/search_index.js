var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BilevelOptimization-1",
    "page": "Readme",
    "title": "BilevelOptimization",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: Coverage Status)This package is a Julia toolbox based on JuMP.jl for solving bilevel optimization problems. These are encountered in various applications, including power grids, security games, market equilibria or chemical reaction optimization."
},

{
    "location": "#Generic-bilevel-linear-problems-(BLP)-1",
    "page": "Readme",
    "title": "Generic bilevel linear problems (BLP)",
    "category": "section",
    "text": "The generic problem can be written:min_{x} F(x,y)\nsuch that\n  G * x + H * y ⩽ q\n  y ∈ arg min_y {d^T y + x^T F * y\n                 such that\n                   A * x + B * y ⩽ b\n  }\n  x_j integer ∀ j ∈ Jxx represents the upper-level decision variable and y the lower-level one. y is thus the solution to a parametric optimization sub-problem, depending on the value of x. The required data describing this problem are the feasibility domains of the upper and lower level and the coefficients of the objective functions. All these are regrouped within the BilevelLP type of this package.   The formulation is made as general as possible for the problem to remain approachable with plain Mixed-Integer Solvers (CBC, GLPK, SCIP, Gurobi, CPLEX). For a simple linear-linear problem, the user can set Jx = ∅ and F as a zero matrix of appropriate dimension. The problem can be made as complex as wanted at the upper level, as long as JuMP and the solver used support the constraints and objective."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package can be installed using Julia Pkg tool:julia> ]\n(v1.0) pkg> add https://github.com/matbesancon/BilevelOptimization.jlYou will also need an optimization solver up and running with JuMP."
},

{
    "location": "#Resolution-method-1",
    "page": "Readme",
    "title": "Resolution method",
    "category": "section",
    "text": "BilevelOptimization.jl uses Special-ordered Sets of type 1 or SOS1 for complementarity constraints. This avoids the bound estimation phase which is often tricky for dual variables. This avoids solving sub-problems to estimate primal and dual bound and still allows the solver to branch on either (λ,s) efficiently."
},

{
    "location": "#The-toll-setting-problem-1",
    "page": "Readme",
    "title": "The toll-setting problem",
    "category": "section",
    "text": "As a special application of the above model, the module BilevelFlowProblems offers the following problem:The upper-level, acting as a leader of the Stackelberg game, chooses taxes to set on some arcs of a directed graph.\nThe lower-level, acting as the follower, makes aminimum-cost flow with a given minimum amount from the source to the sink.Each arc has an invariant base cost and a tax level decided upon by the leader.This has been investigated in the literature as the \"toll-setting problem\"."
},

{
    "location": "#Questions,-issues,-contributions-1",
    "page": "Readme",
    "title": "Questions, issues, contributions",
    "category": "section",
    "text": "Problems with the package and its usage can be explained through Github issues, ideally with a minimal working example showing the problem. Pull requests (PR) are welcome.  Please read detailed information in CONTRIBUTING.md."
},

{
    "location": "#Related-packages-1",
    "page": "Readme",
    "title": "Related packages",
    "category": "section",
    "text": "[Complementarity.jl](https://github.com/chkwon/Complementarity.jl solving a generic classincluding bilevel problems using non-linear techniquesMibS for problems where the lower-level also includes integer variables. KKT conditions can therefore not be used and other branching and cutting plane techniques are leveraged.\nYALMIP includes a bilevel solver and offers roughly the same features (and a bit more) as BilevelOptimization.jl"
},

{
    "location": "#Citing-1",
    "page": "Readme",
    "title": "Citing",
    "category": "section",
    "text": "@misc{bilevel19,\n    author = {{Mathieu Besançon}},\n    title  = \"BilevelOptimization.jl, a JuMP-based toolbox for bilevel optimization\",\n    url = {https://github.com/matbesancon/BilevelOptimization.jl},\n    version = {0.1},\n    year = {2019}\n}A software paper may be written."
},

{
    "location": "autodocs/#BilevelOptimization.BilevelFlowProblems",
    "page": "Docstrings",
    "title": "BilevelOptimization.BilevelFlowProblems",
    "category": "module",
    "text": "Data structure and resolution methods of some forms of bilevel flow problems\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BilevelOptimization.BilevelLP",
    "page": "Docstrings",
    "title": "BilevelOptimization.BilevelLP",
    "category": "type",
    "text": "A bilevel linear optimization problem of the form:\n\nmin cx^T * x + cy^T * y\ns.t. G x + H y <= q\n     x_j ∈ [xl_j,xu_j]\n     x_j ∈ ℤ ∀ j ∈ Jx\n     y ∈ arg min {\n        d^T * y + x^T * F * y\n        s.t. A x + B y <= b\n             y_j ∈ [yl_j,yu_j]\n        }\n\nNote that integer variables are allowed at the upper level.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BilevelOptimization.MT",
    "page": "Docstrings",
    "title": "BilevelOptimization.MT",
    "category": "type",
    "text": "Convenience alias for a matrix of a sub-type of Real\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BilevelOptimization.VT",
    "page": "Docstrings",
    "title": "BilevelOptimization.VT",
    "category": "type",
    "text": "Convenience alias for a vector of a sub-type of Real\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BilevelOptimization.VariableType",
    "page": "Docstrings",
    "title": "BilevelOptimization.VariableType",
    "category": "type",
    "text": "VariableType enum distinguishing upper- and lower-level variables for setting upper and lower bounds\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BilevelOptimization.build_blp_model",
    "page": "Docstrings",
    "title": "BilevelOptimization.build_blp_model",
    "category": "function",
    "text": "Build the JuMP model from the data of bfp and assign it the passed solver\n\n\n\n\n\nBuild a JuMP model (constraints and objective) based on the data from bp and with a solver\n\n\n\n\n\nAdd the lower-level constraints and optimality conditions to an existing JuMP model. This assumes the upper-level feasibility constraints and objective have already been set\n\n\n\n\n\nBuild the bilevel JuMP model from the data without grouping everything into a BilevelLP\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BilevelOptimization.BilevelFlowProblemsBilevelOptimization.BilevelLPBilevelOptimization.BilevelOptimizationBilevelOptimization.MTBilevelOptimization.VTBilevelOptimization.VariableTypeBilevelOptimization.build_blp_modelBilevelOptimization.evalBilevelOptimization.includeBilevelOptimization.lowerBilevelOptimization.upper"
},

]}
