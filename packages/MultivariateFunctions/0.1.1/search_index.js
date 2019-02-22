var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MultivariateFunctions.jl-1",
    "page": "Readme",
    "title": "MultivariateFunctions.jl",
    "category": "section",
    "text": "(Image: Build Status)This implements single algebra and evaluation on Multivariate functions. There are a few ways in which it can be used.This can be used for approximation functions. It can currently implement OLS functions, chebyshev polynomials, the schumaker shape preserving spline and basic interpolation schemes. It could be extended to implement other approximation schemes.\nAs in the StochasticIntegrals.jl package this package can be used to define   functions that will be the integrands in stochastic integrals. This has the benefit   that the means, variances & covariances implied by these stochastic integrals can be found analytically.\nAll basic algebra and calculus on a multivariateFunction can be done analytically.\nThe Newton\'s method is implemented so that roots and optima can be found using analytical Jacobians and Hessians."
},

{
    "location": "#Structs-1",
    "page": "Readme",
    "title": "Structs",
    "category": "section",
    "text": "There are four main UnivariateFunction structs that are part of this package. These are:PEFunction - This is the basic function type. It has a form of a \\exp(b(x-base)) (x-base)^d$.\nSumOfFunctions - This is an array of PEFunctions. Note that by adding PEFunctions we can replicate any given polynomial. Hence from Weierstrass\' approximation theorem we can approximate any continuous function on a bounded domain to any desired level of accuracy (whether this is practical in numerical computing depends on the function being approximated).\nPiecewise_Function - This defines a different UnivariateFunction for each part of the x domain.\nSumOfPiecewiseFunctions - Mathematically this does the same job as a PiecewiseFunction but is substantially more efficient when the contribution of different dimensions to the Piecewise_Function is additively seperable.It is possible to perform any additions, subtractions, multiplications between any two UnivariateFunctions and between Ints/Floats and any UnivariateFunction. No division is allowed and it is not possible to raise a UnivariateFunction to a negative power. This is to ensure that all univariatefunctions are analytically integrable and differentiable. This may change in future releases."
},

{
    "location": "#Major-limitations-1",
    "page": "Readme",
    "title": "Major limitations",
    "category": "section",
    "text": "It is not possible to divide by univariate functions or raise them by a negative power.\nWhen multiplying pefunctions with different base dates there is often an issue of very high or very low numbers that go outside machine precision. If one were trying to change a PEFunction from base 2010 to 50, this would not generally be possible. This is because to change a exp(x-2020) to q exp(x - 50) we need to premultiply the first expression by exp(-1950) which is a tiny number. In these cases it is better to do the algebra on paper and rewriting the code accordingly as often base changes cancel out on paper. It is also good to change bases as rarely as possible. If different univariate functions use different bases then there is a need to base change when multiplying them which can result in errors. Note that if base changes are segment in the x domain by means of a piecewise function then they should never interact meaning it is ok to use different bases here."
},

{
    "location": "#Interpolation-and-Splines-1",
    "page": "Readme",
    "title": "Interpolation and Splines",
    "category": "section",
    "text": "So far this package support the following interpolation schemes:Constant interpolation from the left to the right. Such a PiecewiseFunction spline can be constructed by the createconstantinterpolationto_right method.\nConstant interpolation from the right to the left. Such a PiecewiseFunction spline can be constructed by the createconstantinterpolationto_left method.\nLinear interpolation. Such a PiecewiseFunction spline can be constructed by the createlinear_interpolation method.It also supports the following spline (which can also be used for interpolation)Schumaker shape preserving spline - Such a PiecewiseFunction spline can be constructed by the createquadratic_spline method.\nChebyshev polynomialsMARS/EARTH Multivariate Regression Splines are planned but not yet implemented."
},

{
    "location": "#Date-Handling-1",
    "page": "Readme",
    "title": "Date Handling",
    "category": "section",
    "text": "All base dates are immediately converted to floats and are not otherwise saved. Thus there is no difference between a PEFunction created with a base as a float and one created with the matching date. This is done to simplify the code. All date conversions is done by finding the year fractions between the date and the global base date of Date(2000,1,1). This particular global base date should not affect anything as long as it is consistent. It is relatively trivial to change it (in the dateconversions.jl file) and recompile however if desired."
},

{
    "location": "#Univariate-Examples-1",
    "page": "Readme",
    "title": "Univariate Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#For-basic-algebra:-1",
    "page": "Readme",
    "title": "For basic algebra:",
    "category": "section",
    "text": "Consider we have a two functions f and g and want to add them, multiply them by some other function h, then square it and finally integrate the result between 2.0 and 2.8. This can be done analytically with UnivariateFunctions:f = PE_Function(1.0, 2.0, 4.0, 5)\ng = PE_Function(1.3, 2.0, 4.3, 2)\nh = PE_Function(5.0, 2.2, 1.0,0)\nresult_of_operations = (h*(f+g))^2\nintegral(result_of_operations, 2.0, 2.8)"
},

{
    "location": "#For-data-interpolation-1",
    "page": "Readme",
    "title": "For data interpolation",
    "category": "section",
    "text": "Suppose we have want to approximate some function with some sampled points. First to generate some pointsconst global_base_date = Date(2000,1,1)\nStartDate = Date(2018, 7, 21)\nx = Array{Date}(undef, 20)\nfor i in 1:20\n    x[i] = StartDate +Dates.Day(2* (i-1))\nend\nfunction ff(x::Date)\n    days_between = years_from_global_base(x)\n    return log(days_between) + sqrt(days_between)\nend\ny = ff.(x)Now we can generate a function that can be used to easily interpolate from the sampled points:func = create_quadratic_spline(x,y)And we can evaluate from this function and integrate it and differentiate it in the normal way:evaluate(func, Date(2020,1,1))\nevaluate.(Ref(func), [Date(2020,1,1), Date(2021,1,2)])\nevaluate(derivative(func), Date(2021,1,2))\nintegral(func, Date(2020,1,1), Date(2021,1,2))If we had wanted to interpolate instead with a constant method(from left or from right) or by linearly interpolating then we could have just generated func with a different method: createconstantinterpolationtoleft, createconstantinterpolationtoright or createlinearinterpolation.If we have lots of data that we want to summarise with OLS# Generating example data\nusing Random\nusing Distributions\nusing DataStructures\nRandom.seed!(1)\nobs = 1000\nX = rand(obs)\ny = X .+ rand(Normal(),obs) .+ 7\n# And now making an approximation function\napproxFunction = create_ols_approximation(y, X, 2)And if we want to approximate the sin function in the [2.3, 5.6] bound with 7 polynomial terms and 20 approximation nodes:chebyshevs = create_chebyshev_approximation(sin, 20, 7, OrderedDict{Symbol,Tuple{Float64,Float64}}(:default => (2.3, 5.6)))We can integrate the above term in the normal way to achieve Gauss-Chebyshev quadrature:integral(chebyshevs, 2.3, 5.6)"
},

{
    "location": "autodocs/#MultivariateFunctions.Hessian",
    "page": "Docstrings",
    "title": "MultivariateFunctions.Hessian",
    "category": "type",
    "text": "Hessian(f::MultivariateFunction, dimensions::Array{Symbol,1})\nHessian(derivs::Union{Dict{Dict{Symbol,Int},PE_Function},Dict{Dict{Symbol,Int},Sum_Of_Functions},Dict{Dict{Symbol,Int},Piecewise_Function}}, labels_::Array{Symbol,1})\n\nThis represents expressions for constructing a hessian matrix for a function. It can be evaluated to get a symmetric matrix of the hessian at a particular location.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.PE_Function",
    "page": "Docstrings",
    "title": "MultivariateFunctions.PE_Function",
    "category": "type",
    "text": "PE_Function(multiplier_::Float64, functions_::Dict{Symbol,PE_Unit})\n\nThis is the main constructor for a PE Function. The functional form of the function is the multiplier multiplied by all PE_Units.\n\nFor instance the PEFunction created by PEFunction(6.0, Dict([:x, :y] .=> [PEUnit(1.0,1.0,1), PEUnit(0.0,2.0,4)])) has a functional form of 6 (x-1) exp(x-1) (y-2)^4\n\nThe following convenience functions create a PEFunction where there is only one variable (with a symbol :default).     PEFunction(multiplier::Float64,b::Float64, base::Float64, d::Int)     PEFunction(multiplier::Float64,b::Float64, base::Date, d::Int) The following convenience function creates a PEFunction where there are no variables and hence it is constant:     PE_Function(num::Float64 = 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.PE_Unit",
    "page": "Docstrings",
    "title": "MultivariateFunctions.PE_Unit",
    "category": "type",
    "text": "PE_Unit(b_::Float64, base_::Float64, d_::Int)\nPE_Unit(b_::Float64, base_::Date, d_::Int)\n\nThis creates a PEUnit which has a functional form of exp(b(x-base)) (x-base)^d. They cannot be used in any productive way by themselves but are needed to construct a PEFunction. An empty PEUnit (which might be used to create a constant PEFunction) can be created by PEUnit().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.Piecewise_Function",
    "page": "Docstrings",
    "title": "MultivariateFunctions.Piecewise_Function",
    "category": "type",
    "text": "Piecewise_Function(functions_::Array{Union{Missing,Sum_Of_Functions}}, thresholds_::OrderedDict{Symbol,Array{Float64,1}})\n\nCreates a PiecewiseFunction from a multidimensional array of SumOfFunctions and an ordered dict of thresholds. The xth dimension in the thresholds dict corresponds to the xth dimension of the array of functions. A function can be lookuped up considering the thresholds and then selecting from the array. For instance if the first dimension is denoted :y and it\'s thresholds are [-4.0,0.0,3.4] and we query at a point with a :y coordinate of 2.7 then the function we look up will be from the file functions[2, ...] where ... represents the coordinates the the other dimensions. This is because 2.7 is greater than the second element of [-4.0,0.0,3.4] but less than the third. If this piecewise function were to be queried at a :y coordinate of -5.0 then a missing value will be returned. To specify piecewise functions on an unlimited domain the first element of the threshold can be set as -Inf. To set a limited domain on the upper end then add a Missing value to the functions_ array. Any other (ie interior) point can also be made undefined by putting a Missing() type into the functions_ array.\n\nNote that PiecewiseFunction works by assigning a SumOfFunctions to every region within the space defined by the thresholds dict. It is only possible to specify a region as a hypercube however. More complex regions are not possible.\n\nNote too that piecewise functions will scale poorly in high dimensions. If there are 10 dimensions and each has 4 elements in its threshold dict then the array for the piecewise function will have more than one million entries. In cases where there are no interactions between dimensions it is more efficient to use a SumOfPiecewiseFunctions object (which is basically an array of Piecewise Functions). For instance consider the following function: f(x,y,z) = max(x,5) + max(y,3) + max(z,3) We could code this as a piecewise function or as the sum of three piecewise functions. The three piecewise function implementation will contain fewer PEFunctions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.Sum_Of_Functions",
    "page": "Docstrings",
    "title": "MultivariateFunctions.Sum_Of_Functions",
    "category": "type",
    "text": "Sum_Of_Functions(functions)\n\nCreates a SumOfFunctions from an array of PEFunctions and/or SumOfFunctions. The constructors for this type go through each input SumOfFunctions and takes out the contained PEFunctions (so unecessary nesting doesnt occur where a SumOfFunctions could contain another SumOfFunctions). The constructors also aggregate PEFunctions where possible. For intance if two PEFunctions have the same PEUnits and differ in their multiplier these multipliers can be added. The constructors also remove zero multiplier PEFunctions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.Sum_Of_Piecewise_Functions",
    "page": "Docstrings",
    "title": "MultivariateFunctions.Sum_Of_Piecewise_Functions",
    "category": "type",
    "text": "Sum_Of_Piecewise_Functions(functions_::Array{Piecewise_Function,1}, global_funcs_::Sum_Of_Functions)\n\nAt the cost of being less flexible a SumOfPiecewise_Functions is more efficient than a PiecewiseFunction. Use this if trying to represent a piecewise function that can be decomposed into a sum of lower dimensional piecewise functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.all_derivatives",
    "page": "Docstrings",
    "title": "MultivariateFunctions.all_derivatives",
    "category": "function",
    "text": " all_derivatives(f::MultivariateFunction, degree::Int = 2, dimensions::Set{Symbol} = underlying_dimensions(f))\n\nThis generates a dict containing functions representing all of the deriviates of a function up to the order of degree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.change_base",
    "page": "Docstrings",
    "title": "MultivariateFunctions.change_base",
    "category": "function",
    "text": "change_base(f::PE_Function, new_bases::Dict{Symbol,Float64})\n\nThis function changes the bases in the PEUnits of a PEFunction. This is useful for getting two PEFunctions comformable for simpler multiplication. Often a base change means that an array of PEFunctions are needed to represent a function. So an Array{PE_Function,1} is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.create_chebyshev_approximation",
    "page": "Docstrings",
    "title": "MultivariateFunctions.create_chebyshev_approximation",
    "category": "function",
    "text": "create_chebyshev_approximation(f::Function, nodes::Int, degree::Int, limits::OrderedDict{Symbol,Tuple{Float64,Float64}}, function_takes_Dict::Bool = false)\n\nCreates a SumOfFunctions that approximates a function, f, with a set of chebyshevs of a particular degree. The nodes input specifies at how many locations the function is to be evaluated for approximation purposes in each dimension. The limits OrderedDict specifies the domain of where the function is to be approximated.\n\nIf functiontakesDict is true then the function will be evaluated by inputting a  Dict{Symbol,Float64}. Otherwise the function will be evaluated with f(values(limits)...) Note that the order of the OrderedDict specifies the order of inputs to the function in this case.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.create_constant_interpolation_to_left",
    "page": "Docstrings",
    "title": "MultivariateFunctions.create_constant_interpolation_to_left",
    "category": "function",
    "text": "create_constant_interpolation_to_left(x::Array{Date,1},y::Array{Float64,1}; dim_name::Symbol = default_symbol)\ncreate_constant_interpolation_to_left(x::Array{Float64,1},y::Array{Float64,1}; dim_name::Symbol = default_symbol)\n\nCreate a piecewise constant one-dimensional function which carries values from the right to the left.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.create_constant_interpolation_to_right",
    "page": "Docstrings",
    "title": "MultivariateFunctions.create_constant_interpolation_to_right",
    "category": "function",
    "text": "create_constant_interpolation_to_right(x::Array{Date,1},y::Array{Float64,1}; dim_name::Symbol = default_symbol)\ncreate_constant_interpolation_to_right(x::Array{Float64,1},y::Array{Float64,1}; dim_name::Symbol = default_symbol)\n\nCreate a piecewise constant one-dimensional function which carries values from the left to the right.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.create_linear_interpolation",
    "page": "Docstrings",
    "title": "MultivariateFunctions.create_linear_interpolation",
    "category": "function",
    "text": "create_linear_interpolation(x::Array{Date,1},y::Array{Float64,1}; dim_name::Symbol = default_symbol)\ncreate_linear_interpolation(x::Array{Float64,1},y::Array{Float64,1}; dim_name::Symbol = default_symbol)\n\nCreate a piecewise linear one-dimensional function which interpolates linearly between datapoints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.create_mars_spline",
    "page": "Docstrings",
    "title": "MultivariateFunctions.create_mars_spline",
    "category": "function",
    "text": "create_mars_spline(dd::DataFrame, y::Symbol, x_variables::Set{Symbol}, MaxM::Int; rel_tol::Float64 = 1e-2)\n\nThis creates a mars spline given a dataframe, response variable and a set of xvariables from the dataframe. The relative tolerance is used in a one-dimensional optimisation step to determine what points at which split values to place a max(0,x-split) function in a particular dimension. The default is intentionally set high because precision is generally not the not that important. For small scale data however you might want to decrease it and increase it for large scale data. You might also want to decrease it if spline creation time doesnt matter much. Note that a small reltol only affects creation time for the spline and not the evaluation time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.create_ols_approximation",
    "page": "Docstrings",
    "title": "MultivariateFunctions.create_ols_approximation",
    "category": "function",
    "text": "create_ols_approximation(dd::DataFrame, y::Symbol, model::MultivariateFunction; allowrankdeficient = true)\ncreate_ols_approximation(dd::DataFrame, y::Symbol, model::Sum_Of_Functions; allowrankdeficient = true)\ncreate_ols_approximation(dd::DataFrame, y::Symbol, model::Sum_Of_Piecewise_Functions; allowrankdeficient = true)\n\nThis creates MultivariationFunction from an OLS regression predicting some variable. You input a dataframe and specify what column in that dataframe is to be predicted by inputting a symbol y. You also input the regression model. This is input as a Array{MultivariateFunction,1}. Each function that is input will be multiplied by the ols coefficient and will return a new function with these coefficients incorporated.\n\n\n\n\n\ncreate_ols_approximation(y::Array{Float64,1}, x::Array{Float64,1}, degree::Int; intercept::Bool = true, dim_name::Symbol = default_symbol, base_x::Float64 = 0.0)\ncreate_ols_approximation(y::Array{Float64,1}, x::Array{Date,1}, degree::Int; intercept::Bool = true, dim_name::Symbol = default_symbol, base_date::Date = global_base_date)\n\nThis predicts a linear relationship between the y and x arrays and creates a MultivariateFunction containing the approximation function. The degree specifies how many higher order terms of x should be used (for instance degree 2 implies x and x^2 are both used to predict y).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.create_quadratic_spline",
    "page": "Docstrings",
    "title": "MultivariateFunctions.create_quadratic_spline",
    "category": "function",
    "text": "create_quadratic_spline(x::Array{Date,1},y::Array{Float64,1} ; gradients::Array{Any,1} = [], extrapolation::String = \"Curve\", dim_name::Symbol = default_symbol)\ncreate_quadratic_spline(x::Array{Int,1},y::Array{Float64,1} ; gradients::Array{Any,1} = [], extrapolation::String = \"Curve\", dim_name::Symbol = default_symbol)\ncreate_quadratic_spline(x::Array{Float64,1},y::Array{Float64,1} ; gradients::Array{Any,1} = [], extrapolation::String = \"Curve\", dim_name::Symbol = default_symbol)\ncreate_quadratic_spline(schum::Schumaker; dim_name::Symbol = default_symbol)\n\nCreate a quadratic spline. The spline is a Schumaker shape-preserving spline which is taken from the SchumakerSpline.jl package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.create_saturated_ols_approximation",
    "page": "Docstrings",
    "title": "MultivariateFunctions.create_saturated_ols_approximation",
    "category": "function",
    "text": "create_saturated_ols_approximation(dd::DataFrame, y::Symbol, x_variables::Array{Symbol,1}, degree::Int; intercept::Bool = true,  bases::Dict{Symbol,Float64} = Dict{Symbol,Float64}(x_variables .=> repeat([0.0],length(x_variables))))\n\nThis creates MultivariateFunction from an OLS regression predicting some variable. You input a dataframe and specify what column in that dataframe is to be predicted by inputting a symbol y. you also put in an array of what x_variables should be used in prediction. A saturated ols model is then calculated up to the specified degree which is returned as a MultivariateFunction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.derivative",
    "page": "Docstrings",
    "title": "MultivariateFunctions.derivative",
    "category": "function",
    "text": " derivative(f::MultivariateFunction, derivs::Dict{Symbol,Int})\n\nThis generates a function representing the derivative of function f. The derivative is that specified by the derivs dict. So if derivs is Dict{[:x,:y] .=> [1,2]} then there will be one derivative with respect to x and 2 with respect to y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.evaluate",
    "page": "Docstrings",
    "title": "MultivariateFunctions.evaluate",
    "category": "function",
    "text": "evaluate(f::MultivariateFunction, coordinates::Dict{Symbol,Float64})\nevaluates a function at coordinates.\n\nFor univariate functions with a variable name of :default (such as those created by PE_Function\'s convenience functions)\nevaluation can take place with no dictionary:\nevaluate(f::MultivariateFunction, coordinate::Float64)\n\n\n\n\n\nevaluate(hess::Hessian, coordinates::Dict{Symbol,Float64})\n\nThis evaluates a Hessian object to create a Symmetric matrix representing the hessian at a point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.find_local_optima",
    "page": "Docstrings",
    "title": "MultivariateFunctions.find_local_optima",
    "category": "function",
    "text": "find_local_optima(func::MultivariateFunction, initial_guess::Dict{Symbol,Float64}; step_size::Float64 = 1.0, max_iters::Int = 40, convergence_tol::Float64 = 1e-10, print_reports::Bool = false)\n\nThis takes the analytical jacobian and hessian of a function and uses them to find a nearby optima. The optima it will find are based on Newton\'s method. There is no way to specify whether a minimum or a maximum is sought in Newton\'s method (at least the pure version of it) and thus this function cannot selectively search for a maximum or minimum. It simply searches for a stationary point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.get_chevyshevs_up_to",
    "page": "Docstrings",
    "title": "MultivariateFunctions.get_chevyshevs_up_to",
    "category": "function",
    "text": "get_chevyshevs_up_to(num::Int, first_kind::Bool = true; dim_name::Symbol = default_symbol)\nOutput all chebyshev polynomials up to degree num.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.hypercubes_to_integrate",
    "page": "Docstrings",
    "title": "MultivariateFunctions.hypercubes_to_integrate",
    "category": "function",
    "text": " integral(f::Piecewise_Function, limits::Dict{Symbol,Tuple{Float64,Float64}})\n integral(f::Sum_Of_Piecewise_Functions, limits::Dict{Symbol,Tuple{Float64,Float64}})\n\nThis gives a function representing the integral of a function, f, with limits in each dimension given by a dict. The dict should contain a tuple for each variable in the function. The left member of the tuple contains the lower limit and the right member the upper limite. Each must be a Float64 (Support for inputting a symbol is planned but not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.integral",
    "page": "Docstrings",
    "title": "MultivariateFunctions.integral",
    "category": "function",
    "text": " integral(f::PE_Function, limits::Dict{Symbol,Tuple{Union{Symbol,Float64},Union{Symbol,Float64}}})\n integral(f::Sum_Of_Functions, limits::Dict{Symbol,Tuple{Union{Symbol,Float64},Union{Symbol,Float64}}})\n\nThis gives a function representing the integral of a function, f, with limits in each dimension given by a dict. The dict should contain a tuple for each variable in the function. The left member of the tuple contains the lower limit and the right member the upper limite. Each can be a Float64 or a symbol. If a symbol is input then this will get incorporated as a dimension in the MultivariateFunction created by the integral function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.jacobian",
    "page": "Docstrings",
    "title": "MultivariateFunctions.jacobian",
    "category": "function",
    "text": "jacobian(derivs::Union{Dict{Dict{Symbol,Int},PE_Function},Dict{Dict{Symbol,Int},Sum_Of_Functions},Dict{Dict{Symbol,Int},Piecewise_Function}}, labels::Array{Symbol,1})\njacobian(f::MultivariateFunction, dimensions::Array{Symbol,1})\n\nThis generates an array of MultivariateFunctions representing the derivatives of a function. This array can be evaluated with evaluate.(jacobian, Ref(coordinates))  to give a vector of the derivative values at a point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.rebadge",
    "page": "Docstrings",
    "title": "MultivariateFunctions.rebadge",
    "category": "function",
    "text": "rebadge(f::PE_Function, mapping::Dict{Symbol,Symbol})\ncan be used to change the names of the variables in a MultivariateFunction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.trim_mars_spline",
    "page": "Docstrings",
    "title": "MultivariateFunctions.trim_mars_spline",
    "category": "function",
    "text": "trimmarsspline(dd::DataFrame, y::Symbol, model::SumOfPiecewiseFunctions;                    maximumRSS::Float64 = -1.0, maximumincreaseinRSS::Float64 = -1.0, finalnumberoffunctions::Int = -1)\n\nThis trims a mars spline created in the createmarsspline function. This algorithm goes through each piecewise function in the mars spline and deletes the one that contributes least to the fit. A termination criterion must be set. There are three possible termination criterions. The first is the maximumRSS that can be tolerated. If this is set then functions will be deleted until the deletion of an additional function would push RSS over this amount. The second is maximumincreaseinRSS which will delete functions until a deletion increases RSS by more than this amount. The final is finalnumberof_functions which reduces the number of fucntions to this number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.underlying_dimensions",
    "page": "Docstrings",
    "title": "MultivariateFunctions.underlying_dimensions",
    "category": "function",
    "text": "underlying_dimensions(f::MultivariateFunction)\nReturns a set containing all of the variables upon which f depends.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.uniroot",
    "page": "Docstrings",
    "title": "MultivariateFunctions.uniroot",
    "category": "function",
    "text": "uniroot(f::MultivariateFunction, initial_guess::Dict{Symbol,Float64}; step_size::Float64 = 1.0, max_iters::Int = 40, convergence_tol::Float64 = 1e-10, print_reports::Bool = false)\n\nThis takes the analytical jacobian and hessian of a function and uses them to find a nearby root. It finds a root using Newton\'s method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.years_between",
    "page": "Docstrings",
    "title": "MultivariateFunctions.years_between",
    "category": "function",
    "text": "years_between(a::Date, b::Date)\nyears_between(a::Dates.Day, b::Dates.Day)\n\nReturns the number of years between two dates. For the purposes of this calculation there are 365.2422 days in a year.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MultivariateFunctions.years_from_global_base",
    "page": "Docstrings",
    "title": "MultivariateFunctions.years_from_global_base",
    "category": "function",
    "text": "years_between(a::Date, b::Date)\nyears_between(a::Dates.Day, b::Dates.Day)\n\nReturns the number of years that have elapsed since 1-Jan-2000. For the purposes of this calculation there are 365.2422 days in a year.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MultivariateFunctions.*MultivariateFunctions.+MultivariateFunctions.-MultivariateFunctions./MultivariateFunctions.HessianMultivariateFunctions.IntegrationLimitDictMultivariateFunctions.MultivariateFunctionMultivariateFunctions.MultivariateFunctionsMultivariateFunctions.PE_FunctionMultivariateFunctions.PE_UnitMultivariateFunctions.Piecewise_FunctionMultivariateFunctions.Sum_Of_FunctionsMultivariateFunctions.Sum_Of_Piecewise_FunctionsMultivariateFunctions.^MultivariateFunctions.add_split_with_max_functionMultivariateFunctions.add_split_with_step_functionMultivariateFunctions.add_to_dictMultivariateFunctions.all_derivativesMultivariateFunctions.apply_limitsMultivariateFunctions.change_baseMultivariateFunctions.change_base_MultivariateFunctions.convertMultivariateFunctions.convert_chebyshevsMultivariateFunctions.convert_formatMultivariateFunctions.convert_to_conformable_dictMultivariateFunctions.convert_to_linearly_rescale_inputsMultivariateFunctions.create_chebyshev_approximationMultivariateFunctions.create_common_piecesMultivariateFunctions.create_constant_interpolation_to_leftMultivariateFunctions.create_constant_interpolation_to_rightMultivariateFunctions.create_linear_interpolationMultivariateFunctions.create_mars_splineMultivariateFunctions.create_ols_approximationMultivariateFunctions.create_quadratic_splineMultivariateFunctions.create_recursive_partitioningMultivariateFunctions.create_saturated_ols_approximationMultivariateFunctions.days_per_yearMultivariateFunctions.default_symbolMultivariateFunctions.derivativeMultivariateFunctions.derivative_MultivariateFunctions.evalMultivariateFunctions.evaluateMultivariateFunctions.evaluate_function_at_nodesMultivariateFunctions.expand_arrayMultivariateFunctions.find_local_optimaMultivariateFunctions.get_basesMultivariateFunctions.get_chevyshevs_up_toMultivariateFunctions.get_cholesky_coefficientsMultivariateFunctions.get_correct_function_from_piecewiseMultivariateFunctions.get_first_kind_ChebyshevsMultivariateFunctions.get_function_cubeMultivariateFunctions.get_point_coordinatesMultivariateFunctions.get_second_kind_ChebyshevsMultivariateFunctions.get_threshold_dictMultivariateFunctions.global_base_dateMultivariateFunctions.global_base_date_as_dayMultivariateFunctions.hypercubes_to_integrateMultivariateFunctions.includeMultivariateFunctions.indefinite_integralMultivariateFunctions.integralMultivariateFunctions.jacobianMultivariateFunctions.next_chebyshevMultivariateFunctions.optimise_given_specific_splitMultivariateFunctions.optimise_splitMultivariateFunctions.rebadgeMultivariateFunctions.sortMultivariateFunctions.tensor_outer_productMultivariateFunctions.tolMultivariateFunctions.trim_mars_splineMultivariateFunctions.trim_mars_spline_final_number_of_functionsMultivariateFunctions.trim_mars_spline_maximum_RSSMultivariateFunctions.trim_mars_spline_maximum_increase_in_RSSMultivariateFunctions.trim_piecewise_functionMultivariateFunctions.underlying_dimensionsMultivariateFunctions.unirootMultivariateFunctions.years_betweenMultivariateFunctions.years_from_global_baseMultivariateFunctions.≂"
},

]}
