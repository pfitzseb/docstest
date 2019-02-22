var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ParameterizedFunctions.jl-1",
    "page": "Readme",
    "title": "ParameterizedFunctions.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Travis) (Image: AppVeyor) (Image: codecov) (Image: ParameterizedFunctions) (Image: ParameterizedFunctions)ParameterizedFunctions.jl is a component of the JuliaDiffEq ecosystem which allows for parameters to be explicitly present within functions. The interface which ParameterizedFunctions describes allows for functionality which requires parameters, such as parameter sensitivity analysis and parameter estimation, to be added to the differential equation solvers of DifferentialEquations.jl. While the interface itself is of importance to ecosystem developers, ParameterizedFunctions.jl provides user-facing macros which make a ParameterizedFunction easy to define, and automatically include optimizations like explicit Jacobian functions and explicit inverse Jacobian functions for the differential equation solvers to take advantage of. The result is an easy to use API which allows for more functionality and more performance optimizations than could traditionally be offered.test"
},

{
    "location": "#The-Basic-Idea-1",
    "page": "Readme",
    "title": "The Basic Idea",
    "category": "section",
    "text": "ParameterizedFunction is a type which can be used in various JuliaDiffEq solvers where the parameters must be accessible by the solver function. These use call overloading generate a type which acts like a function f(t,u,du) but has access to many more features. For example, a ParameterizedFunction can contain a function for the Jacobian or Inverse Jacobian. If such functions exist, the solvers can use them to increase the speed of computations. If they don\'t exist, the solvers will ignore them. Since ParameterizedFunction is a subtype of Function, these can be used anywhere that a function can be used, just with the extra functionality ignored."
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#ODE-Macros-1",
    "page": "Readme",
    "title": "ODE Macros",
    "category": "section",
    "text": "A helper macro is provided to make it easier to define a ParameterizedFunction, and it will symbolically compute a bunch of extra functions to make the differential equation solvers run faster. For example, to define the previous LotkaVolterra, you can use the following command:f = @ode_def LotkaVolterra begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a b c dThe macro also defines the Jacobian f\'. This is defined as an in-place Jacobian f(Val{:jac},t,u,J). This is calculated using SymEngine.jl automatically, so it\'s no effort on your part. The symbolic inverse of the Jacobian is also computed, and an in-place function for this is available as well as f(Val{:invjac},t,u,iJ). If the Jacobians cannot be computed, a warning is thrown and only the function itself is usable. The functions jac_exists(f) and invjac_exists(f) can be used to see whether the Jacobian and the function for its inverse exist."
},

{
    "location": "#Extra-Options-1",
    "page": "Readme",
    "title": "Extra Options",
    "category": "section",
    "text": "In most cases the @ode_def macro should be sufficient. This is because by default the macro will simply calculate each function symbolically, and if it can\'t it will simply throw a warning and move on. However, in extreme cases the symbolic calculations may take a long time, in which case it is necessary to turn them off. To do this, use the ode_def_opts function. The @ode_def macro simply defines the specifiable options:opts = Dict{Symbol,Bool}(\n      :build_tgrad => true,\n      :build_jac => true,\n      :build_expjac => false,\n      :build_invjac => true,\n      :build_invW => true,\n      :build_invW_t => true,\n      :build_hes => false,\n      :build_invhes => false,\n      :build_dpfuncs => true)and calls the function ode_def_opts(name::Symbol,opts,ex::Expr,params). Note that params is an iterator holding expressions for the parameters.In addition, one can also use their own function inside of the macro. For example:f(x,y,d) = erf(x*y/d)\nNJ = @ode_def FuncTest begin\n  dx = a*x - b*x*y\n  dy = -c*y + f(x,y,d)\nend a=>1.5 b=>1 c=3 d=4will do fine. The symbolic derivatives will not work unless you define a derivative for f."
},

{
    "location": "#Extra-Macros-1",
    "page": "Readme",
    "title": "Extra Macros",
    "category": "section",
    "text": "Instead of using ode_def_opts directly, one can use one of the following macros to be more specific about what to not calculate. In increasing order of calculations:@ode_def_bare\n@ode_def_noinvjac\n@ode_def_noinvhes\n@ode_def_nohes"
},

{
    "location": "#Extra-Functions-1",
    "page": "Readme",
    "title": "Extra Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Jacobian-Function-1",
    "page": "Readme",
    "title": "Jacobian Function",
    "category": "section",
    "text": "The Jacobian overload is provided by overloading in the following manner:function (p::LotkaVolterra)(::Type{Val{:jac}},t,u,J)\n  J[1,1] = p.a - p.b * u[2]\n  J[1,2] = -(p.b) * u[1]\n  J[2,1] = 1 * u[2]\n  J[2,2] = -3 + u[1]\n  nothing\nend"
},

{
    "location": "#Inverse-Jacobian-1",
    "page": "Readme",
    "title": "Inverse Jacobian",
    "category": "section",
    "text": "The Inverse Jacobian overload is provided by overloading in the following manner:function (p::LotkaVolterra)(::Type{Val{:invjac}},t,u,J)\n  J[1,1] = (1 - (p.b * u[1] * u[2]) / ((p.a - p.b * u[2]) * (-3 + u[1] + (p.b * u[1] * u[2]) / (p.a - p.b * u[2])))) / (p.a - p.b * u[2])\n  J[1,2] = (p.b * u[1]) / ((p.a - p.b * u[2]) * (-3 + u[1] + (p.b * u[1] * u[2]) / (p.a - p.b * u[2])))\n  J[2,1] = -(u[2]) / ((p.a - p.b * u[2]) * (-3 + u[1] + (p.b * u[1] * u[2]) / (p.a - p.b * u[2])))\n  J[2,2] = (-3 + u[1] + (p.b * u[1] * u[2]) / (p.a - p.b * u[2])) ^ -1\n  nothing\nend"
},

{
    "location": "#Parameter-Jacobian-1",
    "page": "Readme",
    "title": "Parameter Jacobian",
    "category": "section",
    "text": "For solvers which need parameters derivatives, specifying the functions can increase performance. For our example, we allow the solvers to use the explicit derivatives in the parameters by:function (p::LotkaVolterra)(::Type{Val{:paramjac}},J,u,p,t)\n    J[1, 1] = u[1] * 1\n    J[1, 2] = -(u[1]) * u[2]\n    J[1, 3] = 0 * 1\n    J[1, 4] = 0 * 1\n    J[2, 1] = 0 * 1\n    J[2, 2] = 0 * 1\n    J[2, 3] = -(u[2])\n    J[2, 4] = u[1] * u[2]\n    nothing\nend"
},

{
    "location": "autodocs/#ParameterizedFunctions.symarr_to_symengine",
    "page": "Docstrings",
    "title": "ParameterizedFunctions.symarr_to_symengine",
    "category": "function",
    "text": "symarrtosymengine(symarr::Vector{Symbol})\n\nConverts a Vector{Symbol} into a string for SymEngine parsing\n\nSymbol[:x,:y] –> \"x,y\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ParameterizedFunctions.@fem_defParameterizedFunctions.@ode_defParameterizedFunctions.@ode_def_bareParameterizedFunctions.@ode_def_nohesParameterizedFunctions.@ode_def_noinvhesParameterizedFunctions.@ode_def_noinvjacParameterizedFunctions.FEM_SYMBOL_DICTParameterizedFunctions.ParameterizedFunctionsParameterizedFunctions.bad_derivativeParameterizedFunctions.build_component_funcsParameterizedFunctions.build_indvar_dictParameterizedFunctions.build_jac_funcParameterizedFunctions.build_p_funcsParameterizedFunctions.build_param_listParameterizedFunctions.build_tgrad_funcParameterizedFunctions.evalParameterizedFunctions.expr_arr_to_blockParameterizedFunctions.flip_mult!ParameterizedFunctions.includeParameterizedFunctions.maketypeParameterizedFunctions.ode_def_optsParameterizedFunctions.ode_findreplaceParameterizedFunctions.ode_symbol_findreplaceParameterizedFunctions.symarr_to_symengine"
},

]}
