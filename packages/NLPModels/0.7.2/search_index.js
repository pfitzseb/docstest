var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NLPModels-1",
    "page": "Readme",
    "title": "NLPModels",
    "category": "section",
    "text": "This package provides general guidelines to represent optimization problems in Julia and a standardized API to evaluate the functions and their derivatives. The main objective is to be able to rely on that API when designing optimization solvers in Julia.Cite asAbel Soares Siqueira, & Dominique Orban. (2019, February 6). NLPModels.jl. Zenodo.\nhttp://doi.org/10.5281/zenodo.2558627(Image: DOI)"
},

{
    "location": "#Stable-release-[![GitHub-release](https://img.shields.io/github/release/JuliaSmoothOptimizers/NLPModels.jl.svg)](https://github.com/JuliaSmoothOptimizers/NLPModels.jl/releases/latest)-1",
    "page": "Readme",
    "title": "Stable release (Image: GitHub release)",
    "category": "section",
    "text": "Documentation:(Image: )Package Evaluator:(Image: NLPModels) (Image: NLPModels)Chat: (Image: Gitter)"
},

{
    "location": "#Development-version-1",
    "page": "Readme",
    "title": "Development version",
    "category": "section",
    "text": "Documentation:(Image: )Tests:(Image: Master Build Status) (Image: Master Build status) (Image: Master Coverage Status)"
},

{
    "location": "#Optimization-Problems-1",
    "page": "Readme",
    "title": "Optimization Problems",
    "category": "section",
    "text": "Optimization problems are represented by an instance of (a subtype of) AbstractNLPModel. Such instances are composed ofan instance of NLPModelMeta, which provides information about the problem, including the number of variables, constraints, bounds on the variables, etc.\nother data specific to the provenance of the problem.See the documentation for details on the models, a tutorial and the API."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"NLPModels\")"
},

{
    "location": "#External-models-1",
    "page": "Readme",
    "title": "External models",
    "category": "section",
    "text": "In addition to the models available in this package, there are some external models for specific needs:AmplNLReader.jl: Interface for AMPL;\nCUTEst.jl: Interface for CUTEst problems;\nNLPJuMPModels.jl: Converts MathProgBase/JuMP models to and from NLPModels."
},

{
    "location": "#Main-Methods-1",
    "page": "Readme",
    "title": "Main Methods",
    "category": "section",
    "text": "If model is an instance of an appropriate subtype of AbstractNLPModel, the following methods are normally defined:obj(model, x): evaluate f(x), the objective at x\ncons(model x): evaluate c(x), the vector of general constraints at xThe following methods are defined if first-order derivatives are available:grad(model, x): evaluate ∇f(x), the objective gradient at x\njac(model, x): evaluate J(x), the Jacobian of c at x as a sparse matrixIf Jacobian-vector products can be computed more efficiently than by evaluating the Jacobian explicitly, the following methods may be implemented:jprod(model, x, v): evaluate the result of the matrix-vector product J(x)⋅v\njtprod(model, x, u): evaluate the result of the matrix-vector product J(x)ᵀ⋅uThe following method is defined if second-order derivatives are available:hess(model, x, y): evaluate ∇²L(x,y), the Hessian of the Lagrangian at x and yIf Hessian-vector products can be computed more efficiently than by evaluating the Hessian explicitly, the following method may be implemented:hprod(model, x, v, y): evaluate the result of the matrix-vector product ∇²L(x,y)⋅vSeveral in-place variants of the methods above may also be implemented.The complete list of methods that an interface may implement is as follows:reset!(),\nwrite_sol(),\nvarscale(),\nlagscale(),\nconscale(),\nobj(),\ngrad(),\ngrad!(),\ncons(),\ncons!(),\njth_con(),\njth_congrad(),\njth_congrad!(),\njth_sparse_congrad(),\njac_coord(),\njac(),\njac_op(),\njth_hprod(),\njth_hprod!(),\nghjvprod(),\nghjvprod!(),\nhess_coord(),\nhess(),\nhess_op()\nhprod(),\nhprod!"
},

{
    "location": "#Attributes-1",
    "page": "Readme",
    "title": "Attributes",
    "category": "section",
    "text": "NLPModelMeta objects have the following attributes:Attribute Type Notes\nnvar Int number of variables\nx0 Array{Float64,1} initial guess\nlvar Array{Float64,1} vector of lower bounds\nuvar Array{Float64,1} vector of upper bounds\nifix Array{Int64,1} indices of fixed variables\nilow Array{Int64,1} indices of variables with lower bound only\niupp Array{Int64,1} indices of variables with upper bound only\nirng Array{Int64,1} indices of variables with lower and upper bound (range)\nifree Array{Int64,1} indices of free variables\niinf Array{Int64,1} indices of visibly infeasible bounds\nncon Int total number of general constraints\nnlin Int number of linear constraints\nnnln Int number of nonlinear general constraints\nnnet Int number of nonlinear network constraints\ny0 Array{Float64,1} initial Lagrange multipliers\nlcon Array{Float64,1} vector of constraint lower bounds\nucon Array{Float64,1} vector of constraint upper bounds\nlin Range1{Int64} indices of linear constraints\nnln Range1{Int64} indices of nonlinear constraints (not network)\nnnet Range1{Int64} indices of nonlinear network constraints\njfix Array{Int64,1} indices of equality constraints\njlow Array{Int64,1} indices of constraints of the form c(x) ≥ cl\njupp Array{Int64,1} indices of constraints of the form c(x) ≤ cu\njrng Array{Int64,1} indices of constraints of the form cl ≤ c(x) ≤ cu\njfree Array{Int64,1} indices of \"free\" constraints (there shouldn\'t be any)\njinf Array{Int64,1} indices of the visibly infeasible constraints\nnnzj Int number of nonzeros in the sparse Jacobian\nnnzh Int number of nonzeros in the sparse Hessian\nminimize Bool true if optimize == minimize\nislp Bool true if the problem is a linear program\nname ASCIIString problem name"
},

{
    "location": "autodocs/#NLPModels.ADNLPModel",
    "page": "Docstrings",
    "title": "NLPModels.ADNLPModel",
    "category": "type",
    "text": "ADNLPModel is an AbstractNLPModel using ForwardDiff to compute the derivatives. In this interface, the objective function f and an initial estimate are required. If there are constraints, the function cmathbbR^nrightarrowmathbbR^m  and the vectors c_L and c_U also need to be passed. Bounds on the variables and an inital estimate to the Lagrangian multipliers can also be provided.\n\nADNLPModel(f, x0; lvar = [-∞,…,-∞], uvar = [∞,…,∞], y0 = zeros,\n  c = NotImplemented, lcon = [-∞,…,-∞], ucon = [∞,…,∞], name = \"Generic\")\n\nf :: Function - The objective function f;\nx0 :: AbstractVector - The initial point of the problem;\nlvar :: AbstractVector - ell, the lower bound of the variables;\nuvar :: AbstractVector - u, the upper bound of the variables;\nc :: Function - The constraints function c;\ny0 :: AbstractVector - The initial value of the Lagrangian estimates;\nlcon :: AbstractVector - c_L, the lower bounds of the constraints function;\nucon :: AbstractVector - c_U, the upper bounds of the constraints function;\nname :: String - A name for the model.\n\nThe functions follow the same restrictions of ForwardDiff functions, summarised here:\n\nThe function can only be composed of generic Julia functions;\nThe function must accept only one argument;\nThe function\'s argument must accept a subtype of AbstractVector;\nThe function should be type-stable.\n\nFor contrained problems, the function c is required, and it must return an array even when m = 1, and c_L and c_U should be passed, otherwise the problem is ill-formed. For equality constraints, the corresponding index of c_L and c_U should be the same.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.ADNLSModel",
    "page": "Docstrings",
    "title": "NLPModels.ADNLSModel",
    "category": "type",
    "text": "ADNLSModel is an Nonlinear Least Squares model using ForwardDiff to compute the derivatives.\n\nADNLSModel(F, x0, m; lvar = [-∞,…,-∞], uvar = [∞,…,∞], y0 = zeros,\n  c = NotImplemented, lcon = [-∞,…,-∞], ucon = [∞,…,∞], name = \"Generic\")\n\nF :: Function - The residual function F;\nx0 :: AbstractVector - The initial point of the problem;\nm :: Int - The dimension of F(x), i.e., the number of\n\nequations in the nonlinear system.\n\nThe other parameters are as in ADNLPModel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.FeasibilityFormNLS",
    "page": "Docstrings",
    "title": "NLPModels.FeasibilityFormNLS",
    "category": "type",
    "text": "Converts a nonlinear least-squares problem with residual F(x) to a nonlinear optimization problem with constraints F(x) = r and objective ¹/₂‖r‖². In other words, converts\n\nmin ¹/₂‖F(x)‖²\ns.t  cₗ ≤ c(x) ≤ cᵤ\n      ℓ ≤   x  ≤ u\n\nto\n\nmin ¹/₂‖r‖²\ns.t   F(x) - r = 0\n     cₗ ≤ c(x) ≤ cᵤ\n      ℓ ≤   x  ≤ u\n\nIf you rather have the first problem, the nls model already works as an NLPModel of that format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.FeasibilityResidual",
    "page": "Docstrings",
    "title": "NLPModels.FeasibilityResidual",
    "category": "type",
    "text": "A feasibility residual model is created from a NLPModel of the form\n\nmin f(x)\ns.t cℓ ≤ c(x) ≤ cu\n    bℓ ≤   x  ≤ bu\n\nby creating slack variables s and defining F(x,s) = c(x) - s. The resulting NLS problem is\n\nmin ¹/₂‖c(x) - s‖²\n    bℓ ≤ x ≤ bu\n    cℓ ≤ s ≤ bu\n\nThis is done using SlackModel first, and then defining the NLS. Notice that if bℓᵢ = buᵢ, no slack variable is created.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.LBFGSModel",
    "page": "Docstrings",
    "title": "NLPModels.LBFGSModel",
    "category": "type",
    "text": "Construct a LBFGSModel from another type of model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.LLSModel",
    "page": "Docstrings",
    "title": "NLPModels.LLSModel",
    "category": "type",
    "text": "nls = LLSModel(A, b; lvar, uvar, C, lcon, ucon)\n\nCreates a Linear Least Squares model ½‖Ax - b‖² with optional bounds lvar ≦ x ≦ y and optional linear constraints lcon ≦ Cx ≦ ucon.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.LSR1Model",
    "page": "Docstrings",
    "title": "NLPModels.LSR1Model",
    "category": "type",
    "text": "Construct a LSR1Model from another type of nlp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.SimpleNLPModel",
    "page": "Docstrings",
    "title": "NLPModels.SimpleNLPModel",
    "category": "type",
    "text": "SimpleNLPModel is an AbstractNLPModel that uses only user-defined functions. In this interface, the objective function f and an initial estimate are required. If the user wants to use derivatives, they need to be passed. The same goes for the Hessian and Hessian-AbstractVector product. For constraints, cmathbbR^nrightarrowmathbbR^m  and the vectors c_L and c_U also need to be passed. Bounds on the variables and an inital estimate to the Lagrangian multipliers can also be provided. The user can also pass the Jacobian and the Lagrangian Hessian and Hessian-AbstractVector product.\n\nSimpleNLPModel(f, x0; lvar = [-∞,…,-∞], uvar = [∞,…,∞], y0=zeros,\n  lcon = [-∞,…,-∞], ucon = [∞,…,∞], name = \"Generic\",\n  [list of functions])\n\nf :: Function - The objective function f;\nx0 :: AbstractVector - The initial point of the problem;\nlvar :: AbstractVector - ell, the lower bound of the variables;\nuvar :: AbstractVector - u, the upper bound of the variables;\ny0 :: AbstractVector - The initial value of the Lagrangian estimates;\nlcon :: AbstractVector - c_L, the lower bounds of the constraints function;\nucon :: AbstractVector - c_U, the upper bounds of the constraints function;\nname :: String - A name for the model.\n\nAll functions passed have a direct correlation with a NLP function. You don\'t have to define any more than you need, but calling an undefined function will throw a NotImplementedError. The list is\n\ng and g!: nabla f(x), the gradient of the objective function;\ngx = g(x)\ngx = g!(x, gx)\nH: The lower triangle of the Hessian of the objective function or of the Lagrangian;\nHx = H(x; obj_weight=1.0) # if the problem is unconstrained\nHx = H(x; obj_weight=1.0, y=zeros) # if the problem is constrained\nHcoord - The lower triangle of the Hessian of the objective function or of the Lagrangian, in triplet format;\n(rows,cols,vals) = Hcoord(x; obj_weight=1.0) # if the problem is unconstrained\n(rows,cols,vals) = Hcoord(x; obj_weight=1.0, y=zeros) # if the problem is constrained\nHp and Hp! - The product of the Hessian of the objective function or of the Lagrangian by a vector;\nHv = Hp(x, v, obj_weight=1.0) # if the problem is unconstrained\nHv = Hp!(x, v, Hv, obj_weight=1.0) # if the problem is unconstrained\nHv = Hp(x, v, obj_weight=1.0, y=zeros) # if the problem is constrained\nHv = Hp!(x, v, Hv, obj_weight=1.0, y=zeros) # if the problem is constrained\nc and c! - c(x), the constraints function;\ncx = c(x)\ncx = c!(x, cx)\nJ - J(x), the Jacobian of the constraints;\nJx = J(x)\nJcoord - J(x), the Jacobian of the constraints, in triplet format;\n(rows,cols,vals) = Jcoord(x)\nJp and Jp! - The Jacobian-vector product;\nJv = Jp(x, v)\nJv = Jp!(x, v, Jv)\nJtp and Jtp! - The Jacobian-transposed-vector product;\nJtv = Jtp(x, v)\nJtv = Jtp!(x, v, Jtv)\n\nFor contrained problems, the function c is required, and it must return an array even when m = 1, and c_L and c_U should be passed, otherwise the problem is ill-formed. For equality constraints, the corresponding index of c_L and c_U should be the same.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.SimpleNLSModel",
    "page": "Docstrings",
    "title": "NLPModels.SimpleNLSModel",
    "category": "type",
    "text": "nls = SimpleNLSModel(n;  F=F, F! =F!, JF=JF, JFp=JFp, JFp! =JFp!,\nJFtp=JFtp, JFtp! =JFtp!)\nnls = SimpleNLSModel(x0; F=F, F! =F!, JF=JF, JFp=JFp, JFp! =JFp!,\nJFtp=JFtp, JFtp! =JFtp!)\n\nCreates a Nonlinear Linear Least Squares model to minimize ‖F(x)‖². If JF = JF(x) is passed, the Jacobian is available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.SlackModel",
    "page": "Docstrings",
    "title": "NLPModels.SlackModel",
    "category": "type",
    "text": "A model whose only inequality constraints are bounds.\n\nGiven a model, this type represents a second model in which slack variables are introduced so as to convert linear and nonlinear inequality constraints to equality constraints and bounds. More precisely, if the original model has the form\n\n\\[ \\min f(x)  \\mbox{ s. t. }  cL \\leq c(x) \\leq cU \\mbox{ and } \\ell \\leq x \\leq u, \\]\n\nthe new model appears to the user as\n\n\\[ \\min f(X)  \\mbox{ s. t. }  g(X) = 0 \\mbox{ and } L \\leq X \\leq U. \\]\n\nThe unknowns X = (x s) contain the original variables and slack variables s. The latter are such that the new model has the general form\n\n\\[ \\min f(x)  \\mbox{ s. t. }  c(x) - s = 0, cL \\leq s \\leq cU \\mbox{ and } \\ell \\leq x \\leq u, \\]\n\nalthough no slack variables are introduced for equality constraints.\n\nThe slack variables are implicitly ordered as [s(low), s(upp), s(rng)], where low, upp and rng represent the indices of the constraints of the form c_L leq c(x)  infty, -infty  c(x) leq c_U and c_L leq c(x) leq c_U, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.SlackNLSModel",
    "page": "Docstrings",
    "title": "NLPModels.SlackNLSModel",
    "category": "type",
    "text": "Like SlackModel, this model converts inequalities into equalities and bounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.bound_constrained",
    "page": "Docstrings",
    "title": "NLPModels.bound_constrained",
    "category": "function",
    "text": "bound_constrained(nlp)\nbound_constrained(meta)\n\nReturns whether the problem has bounds on the variables and no other constraints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.cons",
    "page": "Docstrings",
    "title": "NLPModels.cons",
    "category": "function",
    "text": "c = cons(nlp, x)\n\nEvaluate c(x), the constraints at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.cons!",
    "page": "Docstrings",
    "title": "NLPModels.cons!",
    "category": "function",
    "text": "c = cons!(nlp, x, c)\n\nEvaluate c(x), the constraints at x in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.equality_constrained",
    "page": "Docstrings",
    "title": "NLPModels.equality_constrained",
    "category": "function",
    "text": "equality_constrained(nlp)\nequality_constrained(meta)\n\nReturns whether the problem\'s constraints are all equalities. Unconstrained problems return false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.grad",
    "page": "Docstrings",
    "title": "NLPModels.grad",
    "category": "function",
    "text": "g = grad(nlp, x)\n\nEvaluate nabla f(x), the gradient of the objective function at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.grad!",
    "page": "Docstrings",
    "title": "NLPModels.grad!",
    "category": "function",
    "text": "g = grad!(nlp, x, g)\n\nEvaluate nabla f(x), the gradient of the objective function at x in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.gradient_check",
    "page": "Docstrings",
    "title": "NLPModels.gradient_check",
    "category": "function",
    "text": "Check the first derivatives of the objective at x against centered finite differences.\n\nThis function returns a dictionary indexed by components of the gradient for which the relative error exceeds rtol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.has_bounds",
    "page": "Docstrings",
    "title": "NLPModels.has_bounds",
    "category": "function",
    "text": "has_bounds(nlp)\nhas_bounds(meta)\n\nReturns whether the problem has bounds on the variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess",
    "page": "Docstrings",
    "title": "NLPModels.hess",
    "category": "function",
    "text": "Hx = hess(nlp, x; obj_weight=1.0, y=zeros)\n\nEvaluate the Lagrangian Hessian at (x,y) as a sparse matrix, with objective function scaled by obj_weight, i.e.,\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum{i=1}^m yi\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight. Only the lower triangle is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess_coord",
    "page": "Docstrings",
    "title": "NLPModels.hess_coord",
    "category": "function",
    "text": "(rows,cols,vals) = hess_coord(nlp, x; obj_weight=1.0, y=zeros)\n\nEvaluate the Lagrangian Hessian at (x,y) in sparse coordinate format, with objective function scaled by obj_weight, i.e.,\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum{i=1}^m yi\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight. Only the lower triangle is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess_coord_residual",
    "page": "Docstrings",
    "title": "NLPModels.hess_coord_residual",
    "category": "function",
    "text": "(rows,cols,vals) = hess_coord_residual(nls, x, v)\n\nComputes the linear combination of the Hessians of the residuals at x with coefficients v in sparse coordinate format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess_op",
    "page": "Docstrings",
    "title": "NLPModels.hess_op",
    "category": "function",
    "text": "H = hess_op(nlp, x; obj_weight=1.0, y=zeros)\n\nReturn the Lagrangian Hessian at (x,y) with objective function scaled by obj_weight as a linear operator. The resulting object may be used as if it were a matrix, e.g., H * v. The linear operator H represents\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum{i=1}^m yi\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess_op!",
    "page": "Docstrings",
    "title": "NLPModels.hess_op!",
    "category": "function",
    "text": "H = hess_op!(nlp, x, Hv; obj_weight=1.0, y=zeros)\n\nReturn the Lagrangian Hessian at (x,y) with objective function scaled by obj_weight as a linear operator, and storing the result on Hv. The resulting object may be used as if it were a matrix, e.g., w = H * v. The vector Hv is used as preallocated storage for the operation.  The linear operator H represents\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum{i=1}^m yi\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess_op_residual",
    "page": "Docstrings",
    "title": "NLPModels.hess_op_residual",
    "category": "function",
    "text": "Hop = hess_op_residual(nls, x, i)\n\nComputes the Hessian of the i-th residual at x, in linear operator form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess_op_residual!",
    "page": "Docstrings",
    "title": "NLPModels.hess_op_residual!",
    "category": "function",
    "text": "Hop = hess_op_residual!(nls, x, i, Hiv)\n\nComputes the Hessian of the i-th residual at x, in linear operator form. The vector Hiv is used as preallocated storage for the operation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess_residual",
    "page": "Docstrings",
    "title": "NLPModels.hess_residual",
    "category": "function",
    "text": "H = hess_residual(nls, x, v)\n\nComputes the linear combination of the Hessians of the residuals at x with coefficients v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hessian_check",
    "page": "Docstrings",
    "title": "NLPModels.hessian_check",
    "category": "function",
    "text": "Check the second derivatives of the objective and each constraints at x against centered finite differences. This check does not rely on exactness of the first derivatives, only on objective and constraint values.\n\nThe sgn arguments refers to the formulation of the Lagrangian in the problem. It should have a positive value if the Lagrangian is formulated as\n\nL(x,y) = f(x) + ∑ yⱼ cⱼ(x)\n\ne.g., as in JuMPNLPModels, and a negative value if the Lagrangian is formulated as\n\nL(x,y) = f(x) - ∑ yⱼ cⱼ(x)\n\ne.g., as in AmplModels. Only the sign of sgn is important.\n\nThis function returns a dictionary indexed by functions. The 0-th function is the objective while the k-th function (for k > 0) is the k-th constraint. The values of the dictionary are dictionaries indexed by tuples (i, j) such that the relative error in the second derivative ∂²fₖ/∂xᵢ∂xⱼ exceeds rtol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hessian_check_from_grad",
    "page": "Docstrings",
    "title": "NLPModels.hessian_check_from_grad",
    "category": "function",
    "text": "Check the second derivatives of the objective and each constraints at x against centered finite differences. This check assumes exactness of the first derivatives.\n\nThe sgn arguments refers to the formulation of the Lagrangian in the problem. It should have a positive value if the Lagrangian is formulated as\n\nL(x,y) = f(x) + ∑ yⱼ cⱼ(x)\n\ne.g., as in JuMPNLPModels, and a negative value if the Lagrangian is formulated as\n\nL(x,y) = f(x) - ∑ yⱼ cⱼ(x)\n\ne.g., as in AmplModels. Only the sign of sgn is important.\n\nThis function returns a dictionary indexed by functions. The 0-th function is the objective while the k-th function (for k > 0) is the k-th constraint. The values of the dictionary are dictionaries indexed by tuples (i, j) such that the relative error in the second derivative ∂²fₖ/∂xᵢ∂xⱼ exceeds rtol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hprod",
    "page": "Docstrings",
    "title": "NLPModels.hprod",
    "category": "function",
    "text": "Hv = hprod(nlp, x, v; obj_weight=1.0, y=zeros)\n\nEvaluate the product of the Lagrangian Hessian at (x,y) with the vector v, with objective function scaled by obj_weight, i.e.,\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum{i=1}^m yi\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hprod!",
    "page": "Docstrings",
    "title": "NLPModels.hprod!",
    "category": "function",
    "text": "Hv = hprod!(nlp, x, v, Hv; obj_weight=1.0, y=zeros)\n\nEvaluate the product of the Lagrangian Hessian at (x,y) with the vector v in place, with objective function scaled by obj_weight, i.e.,\n\n\\[ \\nabla^2L(x,y) = \\sigma * \\nabla^2 f(x) + \\sum{i=1}^m yi\\nabla^2 c_i(x), \\]\n\nwith σ = obj_weight.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hprod_residual",
    "page": "Docstrings",
    "title": "NLPModels.hprod_residual",
    "category": "function",
    "text": "Hiv = hprod_residual(nls, x, i, v)\n\nComputes the product of the Hessian of the i-th residual at x, times the vector v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hprod_residual!",
    "page": "Docstrings",
    "title": "NLPModels.hprod_residual!",
    "category": "function",
    "text": "Hiv = hprod_residual!(nls, x, i, v, Hiv)\n\nComputes the product of the Hessian of the i-th residual at x, times the vector v, and stores it in vector Hiv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.increment!",
    "page": "Docstrings",
    "title": "NLPModels.increment!",
    "category": "function",
    "text": "increment!(nlp, s)\n\nIncrement counter s of problem nlp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.inequality_constrained",
    "page": "Docstrings",
    "title": "NLPModels.inequality_constrained",
    "category": "function",
    "text": "inequality_constrained(nlp)\ninequality_constrained(meta)\n\nReturns whether the problem\'s constraints are all inequalities. Unconstrained problems return true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac",
    "page": "Docstrings",
    "title": "NLPModels.jac",
    "category": "function",
    "text": "Jx = jac(nlp, x)\n\nEvaluate nabla c(x), the constraint\'s Jacobian at x as a sparse matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac_coord",
    "page": "Docstrings",
    "title": "NLPModels.jac_coord",
    "category": "function",
    "text": "(rows,cols,vals) = jac_coord(nlp, x)\n\nEvaluate nabla c(x), the constraint\'s Jacobian at x in sparse coordinate format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac_coord_residual",
    "page": "Docstrings",
    "title": "NLPModels.jac_coord_residual",
    "category": "function",
    "text": "(rows,cols,vals) = jac_coord_residual(nls, x)\n\nComputes the Jacobian of the residual at x in sparse coordinate format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac_op",
    "page": "Docstrings",
    "title": "NLPModels.jac_op",
    "category": "function",
    "text": "J = jac_op(nlp, x)\n\nReturn the Jacobian at x as a linear operator. The resulting object may be used as if it were a matrix, e.g., J * v or J\' * v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac_op!",
    "page": "Docstrings",
    "title": "NLPModels.jac_op!",
    "category": "function",
    "text": "J = jac_op!(nlp, x, Jv, Jtv)\n\nReturn the Jacobian at x as a linear operator. The resulting object may be used as if it were a matrix, e.g., J * v or J\' * v. The values Jv and Jtv are used as preallocated storage for the operations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac_op_residual",
    "page": "Docstrings",
    "title": "NLPModels.jac_op_residual",
    "category": "function",
    "text": "Jx = jac_op_residual(nls, x)\n\nComputes J(x), the Jacobian of the residual at x, in linear operator form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac_op_residual!",
    "page": "Docstrings",
    "title": "NLPModels.jac_op_residual!",
    "category": "function",
    "text": "Jx = jac_op_residual!(nls, x, Jv, Jtv)\n\nComputes J(x), the Jacobian of the residual at x, in linear operator form. The vectors Jv and Jtv are used as preallocated storage for the operations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac_residual",
    "page": "Docstrings",
    "title": "NLPModels.jac_residual",
    "category": "function",
    "text": "Jx = jac_residual(nls, x)\n\nComputes J(x), the Jacobian of the residual at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jacobian_check",
    "page": "Docstrings",
    "title": "NLPModels.jacobian_check",
    "category": "function",
    "text": "Check the first derivatives of the constraints at x against centered finite differences.\n\nThis function returns a dictionary indexed by (j, i) tuples such that the relative error in the i-th partial derivative of the j-th constraint exceeds rtol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jprod",
    "page": "Docstrings",
    "title": "NLPModels.jprod",
    "category": "function",
    "text": "Jv = jprod(nlp, x, v)\n\nEvaluate nabla c(x)v, the Jacobian-vector product at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jprod!",
    "page": "Docstrings",
    "title": "NLPModels.jprod!",
    "category": "function",
    "text": "Jv = jprod!(nlp, x, v, Jv)\n\nEvaluate nabla c(x)v, the Jacobian-vector product at x in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jprod_residual",
    "page": "Docstrings",
    "title": "NLPModels.jprod_residual",
    "category": "function",
    "text": "Jv = jprod_residual(nls, x, v)\n\nComputes the product of the Jacobian of the residual at x and a vector, i.e.,  J(x)*v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jprod_residual!",
    "page": "Docstrings",
    "title": "NLPModels.jprod_residual!",
    "category": "function",
    "text": "Jv = jprod_residual!(nls, x, v, Jv)\n\nComputes the product of the Jacobian of the residual at x and a vector, i.e.,  J(x)*v, storing it in Jv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jth_hess_residual",
    "page": "Docstrings",
    "title": "NLPModels.jth_hess_residual",
    "category": "function",
    "text": "Hj = jth_hess_residual(nls, x, j)\n\nComputes the Hessian of the j-th residual at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jtprod",
    "page": "Docstrings",
    "title": "NLPModels.jtprod",
    "category": "function",
    "text": "Jtv = jtprod(nlp, x, v, Jtv)\n\nEvaluate nabla c(x)^Tv, the transposed-Jacobian-vector product at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jtprod!",
    "page": "Docstrings",
    "title": "NLPModels.jtprod!",
    "category": "function",
    "text": "Jtv = jtprod!(nlp, x, v, Jtv)\n\nEvaluate nabla c(x)^Tv, the transposed-Jacobian-vector product at x in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jtprod_residual",
    "page": "Docstrings",
    "title": "NLPModels.jtprod_residual",
    "category": "function",
    "text": "Jtv = jtprod_residual(nls, x, v)\n\nComputes the product of the transpose of the Jacobian of the residual at x and a vector, i.e.,  J(x)\'*v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jtprod_residual!",
    "page": "Docstrings",
    "title": "NLPModels.jtprod_residual!",
    "category": "function",
    "text": "Jtv = jtprod_residual!(nls, x, v, Jtv)\n\nComputes the product of the transpose of the Jacobian of the residual at x and a vector, i.e.,  J(x)\'*v, storing it in Jtv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.linearly_constrained",
    "page": "Docstrings",
    "title": "NLPModels.linearly_constrained",
    "category": "function",
    "text": "linearly_constrained(nlp)\nlinearly_constrained(meta)\n\nReturns whether the problem\'s constraints are known to be all linear.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_cons",
    "page": "Docstrings",
    "title": "NLPModels.neval_cons",
    "category": "function",
    "text": "NLPModels.neval_cons(nlp)\n\nGet the number of cons evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_grad",
    "page": "Docstrings",
    "title": "NLPModels.neval_grad",
    "category": "function",
    "text": "NLPModels.neval_grad(nlp)\n\nGet the number of grad evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_hess",
    "page": "Docstrings",
    "title": "NLPModels.neval_hess",
    "category": "function",
    "text": "NLPModels.neval_hess(nlp)\n\nGet the number of hess evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_hess_residual",
    "page": "Docstrings",
    "title": "NLPModels.neval_hess_residual",
    "category": "function",
    "text": "NLPModels.neval_hess_residual(nlp)\n\nGet the number of hess evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_hprod",
    "page": "Docstrings",
    "title": "NLPModels.neval_hprod",
    "category": "function",
    "text": "NLPModels.neval_hprod(nlp)\n\nGet the number of hprod evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_hprod_residual",
    "page": "Docstrings",
    "title": "NLPModels.neval_hprod_residual",
    "category": "function",
    "text": "NLPModels.neval_hprod_residual(nlp)\n\nGet the number of hprod evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jac",
    "page": "Docstrings",
    "title": "NLPModels.neval_jac",
    "category": "function",
    "text": "NLPModels.neval_jac(nlp)\n\nGet the number of jac evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jac_residual",
    "page": "Docstrings",
    "title": "NLPModels.neval_jac_residual",
    "category": "function",
    "text": "NLPModels.neval_jac_residual(nlp)\n\nGet the number of jac evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jcon",
    "page": "Docstrings",
    "title": "NLPModels.neval_jcon",
    "category": "function",
    "text": "NLPModels.neval_jcon(nlp)\n\nGet the number of jcon evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jgrad",
    "page": "Docstrings",
    "title": "NLPModels.neval_jgrad",
    "category": "function",
    "text": "NLPModels.neval_jgrad(nlp)\n\nGet the number of jgrad evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jhess_residual",
    "page": "Docstrings",
    "title": "NLPModels.neval_jhess_residual",
    "category": "function",
    "text": "NLPModels.neval_jhess_residual(nlp)\n\nGet the number of jhess evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jhprod",
    "page": "Docstrings",
    "title": "NLPModels.neval_jhprod",
    "category": "function",
    "text": "NLPModels.neval_jhprod(nlp)\n\nGet the number of jhprod evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jprod",
    "page": "Docstrings",
    "title": "NLPModels.neval_jprod",
    "category": "function",
    "text": "NLPModels.neval_jprod(nlp)\n\nGet the number of jprod evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jprod_residual",
    "page": "Docstrings",
    "title": "NLPModels.neval_jprod_residual",
    "category": "function",
    "text": "NLPModels.neval_jprod_residual(nlp)\n\nGet the number of jprod evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jtprod",
    "page": "Docstrings",
    "title": "NLPModels.neval_jtprod",
    "category": "function",
    "text": "NLPModels.neval_jtprod(nlp)\n\nGet the number of jtprod evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_jtprod_residual",
    "page": "Docstrings",
    "title": "NLPModels.neval_jtprod_residual",
    "category": "function",
    "text": "NLPModels.neval_jtprod_residual(nlp)\n\nGet the number of jtprod evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_obj",
    "page": "Docstrings",
    "title": "NLPModels.neval_obj",
    "category": "function",
    "text": "NLPModels.neval_obj(nlp)\n\nGet the number of obj evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.neval_residual",
    "page": "Docstrings",
    "title": "NLPModels.neval_residual",
    "category": "function",
    "text": "NLPModels.neval_residual(nlp)\n\nGet the number of residual evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.obj",
    "page": "Docstrings",
    "title": "NLPModels.obj",
    "category": "function",
    "text": "f = obj(nlp, x)\n\nEvaluate f(x), the objective function of nlp at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.objcons",
    "page": "Docstrings",
    "title": "NLPModels.objcons",
    "category": "function",
    "text": "f, c = objcons(nlp, x)\n\nEvaluate f(x) and c(x) at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.objcons!",
    "page": "Docstrings",
    "title": "NLPModels.objcons!",
    "category": "function",
    "text": "f = objcons!(nlp, x, c)\n\nEvaluate f(x) and c(x) at x. c is overwritten with the value of c(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.objgrad",
    "page": "Docstrings",
    "title": "NLPModels.objgrad",
    "category": "function",
    "text": "f, g = objgrad(nlp, x)\n\nEvaluate f(x) and nabla f(x) at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.objgrad!",
    "page": "Docstrings",
    "title": "NLPModels.objgrad!",
    "category": "function",
    "text": "f, g = objgrad!(nlp, x, g)\n\nEvaluate f(x) and nabla f(x) at x. g is overwritten with the value of nabla f(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.reset!",
    "page": "Docstrings",
    "title": "LinearOperators.reset!",
    "category": "function",
    "text": "reset!(counters)\n\nReset evaluation counters\n\n\n\n\n\n`reset!(nlp)\n\nReset evaluation count in nlp\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.residual",
    "page": "Docstrings",
    "title": "NLPModels.residual",
    "category": "function",
    "text": "Fx = residual(nls, x)\n\nComputes F(x), the residual at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.residual!",
    "page": "Docstrings",
    "title": "NLPModels.residual!",
    "category": "function",
    "text": "Fx = residual!(nls, x, Fx)\n\nComputes F(x), the residual at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.sum_counters",
    "page": "Docstrings",
    "title": "NLPModels.sum_counters",
    "category": "function",
    "text": "sum_counters(counters)\n\nSum all counters of counters.\n\n\n\n\n\nsum_counters(nlp)\n\nSum all counters of problem nlp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.unconstrained",
    "page": "Docstrings",
    "title": "NLPModels.unconstrained",
    "category": "function",
    "text": "unconstrained(nlp)\nunconstrained(meta)\n\nReturns whether the problem in unconstrained.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NLPModels.@lencheckNLPModels.@rangecheckNLPModels.ADNLPModelNLPModels.ADNLSModelNLPModels.AbstractNLPModelNLPModels.AbstractNLPModelMetaNLPModels.AbstractNLSModelNLPModels.CountersNLPModels.FeasibilityFormNLSNLPModels.FeasibilityResidualNLPModels.LBFGSModelNLPModels.LLSModelNLPModels.LSR1ModelNLPModels.NLPModelMetaNLPModels.NLPModelsNLPModels.NLSCountersNLPModels.NLSMetaNLPModels.NotImplementedNLPModels.NotImplementedErrorNLPModels.QuasiNewtonModelNLPModels.SimpleNLPModelNLPModels.SimpleNLSModelNLPModels.SlackModelNLPModels.SlackModelsNLPModels.SlackNLSModelNLPModels.bound_constrainedNLPModels.consNLPModels.cons!NLPModels.conscaleNLPModels.countersNLPModels.equality_constrainedNLPModels.evalNLPModels.ghjvprodNLPModels.ghjvprod!NLPModels.gradNLPModels.grad!NLPModels.gradient_checkNLPModels.has_boundsNLPModels.hessNLPModels.hess_coordNLPModels.hess_coord_residualNLPModels.hess_opNLPModels.hess_op!NLPModels.hess_op_residualNLPModels.hess_op_residual!NLPModels.hess_residualNLPModels.hessian_checkNLPModels.hessian_check_from_gradNLPModels.hprodNLPModels.hprod!NLPModels.hprod_residualNLPModels.hprod_residual!NLPModels.includeNLPModels.increment!NLPModels.inequality_constrainedNLPModels.jacNLPModels.jac_coordNLPModels.jac_coord_residualNLPModels.jac_opNLPModels.jac_op!NLPModels.jac_op_residualNLPModels.jac_op_residual!NLPModels.jac_residualNLPModels.jacobian_checkNLPModels.jprodNLPModels.jprod!NLPModels.jprod_residualNLPModels.jprod_residual!NLPModels.jth_conNLPModels.jth_congradNLPModels.jth_congrad!NLPModels.jth_hess_residualNLPModels.jth_hprodNLPModels.jth_hprod!NLPModels.jth_sparse_congradNLPModels.jtprodNLPModels.jtprod!NLPModels.jtprod_residualNLPModels.jtprod_residual!NLPModels.lagscaleNLPModels.linearly_constrainedNLPModels.neval_consNLPModels.neval_gradNLPModels.neval_hessNLPModels.neval_hess_residualNLPModels.neval_hprodNLPModels.neval_hprod_residualNLPModels.neval_jacNLPModels.neval_jac_residualNLPModels.neval_jconNLPModels.neval_jgradNLPModels.neval_jhess_residualNLPModels.neval_jhprodNLPModels.neval_jprodNLPModels.neval_jprod_residualNLPModels.neval_jtprodNLPModels.neval_jtprod_residualNLPModels.neval_objNLPModels.neval_residualNLPModels.nls_metaNLPModels.objNLPModels.objconsNLPModels.objcons!NLPModels.objgradNLPModels.objgrad!NLPModels.push!NLPModels.reset!NLPModels.residualNLPModels.residual!NLPModels.slack_metaNLPModels.sum_countersNLPModels.unconstrainedNLPModels.varscale"
},

]}
