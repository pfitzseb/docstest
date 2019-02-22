var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnivariateFunctions.jl-1",
    "page": "Readme",
    "title": "UnivariateFunctions.jl",
    "category": "section",
    "text": "(Image: Build Status)This implements single algebra and evaluation on simple univariate functions. There are a few ways in which it can be used.As in the StochasticIntegrals.jl package this package can be used to define   functions that will be the integrands in stochastic integrals. This has the benefit   that the means, variances & covariances implied by these stochastic integrals can be found analytically.\nUnivariateFunctions can be used in the creation of splines. This has the added   advantage that a spline implemented as a UnivariateFunction can be manipulated   easily. It can be differentiated and then added to another function, etc.\nAny continuous interpolation scheme can be accomplished with the added benefit that derivatives/integrals/products etc can be found analytically."
},

{
    "location": "#Structs-1",
    "page": "Readme",
    "title": "Structs",
    "category": "section",
    "text": "There are four main UnivariateFunction structs that are part of this package. These are:Undefined_Function - An undefined function behaves similarly to \"missing\" in Julia. Whenever anything is added/multiplied/etc with an undefined function the result is undefined. The integral and derivative of an undefined function is undefined. If an undefined function is evaluated it will throw an error.\nPEFunction - This is the basic function type. It has a form of a \\exp(b(x-base)) (x-base)^d$.\nSumOfFunctions - This is an array of PEFunctions. Note that by adding PEFunctions we can replicate any given polynomial. Hence from Weierstrass\' approximation theorem we can approximate any continuous function on a bounded domain to any desired level of accuracy (whether this is practical in numerical computing depends on the function being approximated).\nPiecewise_Function - This defines a different UnivariateFunction for each part of the x domain.It is possible to perform any additions, subtractions, multiplications between any two UnivariateFunctions and between Ints/Floats and any UnivariateFunction. No division is allowed and it is not possible to raise a UnivariateFunction to a negative power. This is to ensure that all univariatefunctions are analytically integrable and differentiable. This may change in future releases."
},

{
    "location": "#Major-limitations-1",
    "page": "Readme",
    "title": "Major limitations",
    "category": "section",
    "text": "It is not possible to divide by univariate functions or raise them by a negative power.\nWhen multiplying pefunctions with different base dates there is often an issue of very high or very low numbers that go outside machine precision. If one were trying to change a PEFunction from base 2010 to 50, this would not generally be possible. This is because to change a exp(x-2020) to q exp(x - 50) we need to premultiply the first expression by exp(-1950) which is a tiny number. In these cases it is better to do the algebra on paper and rewriting the code accordingly as often base changes cancel out on paper. It is also good to change bases as rarely as possible. If different univariate functions use different bases then there is a need to base change when multiplying them which can result in errors. Note that if base changes are segment in the x domain by means of a piecewise function then they should never interact meaning it is ok to use different bases here.\nThere is no support for finding optima, roots, fixedpoints etc. If anyone has an idea of how to do it efficiently then please let me know.\nThere is no support for finding a function representing the upper/lower envelope of multiple functions. If anyone has an idea of how to do it efficiently then please let me know."
},

{
    "location": "#Interpolation-and-Splines-1",
    "page": "Readme",
    "title": "Interpolation and Splines",
    "category": "section",
    "text": "So far this package support the following interpolation schemes:Constant interpolation from the left to the right. Such a PiecewiseFunction spline can be constructed by the createconstantinterpolationto_right method.\nConstant interpolation from the right to the left. Such a PiecewiseFunction spline can be constructed by the createconstantinterpolationto_left method.\nLinear interpolation. Such a PiecewiseFunction spline can be constructed by the createlinear_interpolation method.It also supports the following spline (which can also be used for interpolation)Schumaker shape preserving spline - Such a PiecewiseFunction spline can be constructed by the createquadratic_spline method."
},

{
    "location": "#Date-Handling-1",
    "page": "Readme",
    "title": "Date Handling",
    "category": "section",
    "text": "All base dates are immediately converted to floats and are not otherwise saved. Thus there is no difference between a PEFunction created with a base as a float and one created with the matching date. This is done to simplify the code. All date conversions is done by finding the year fractions between the date and the global base date of Date(2000,1,1). This particular global base date should not affect anything as long as it is consistent. It is relatively trivial to change it (in the dateconversions.jl file) and recompile however if desired."
},

{
    "location": "#TODO-(help-wanted-if-anyone-feels-keen)-1",
    "page": "Readme",
    "title": "TODO (help wanted if anyone feels keen)",
    "category": "section",
    "text": "Implement more useful splines and interpolation schemes.\nGet the constructor of SumOfFunctions to amalgamate PEFunctions with the same b, base_ and d_ values. This should be more efficient in terms of memory as well as computation. This may involve some base changes in order to get them to match."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#For-basic-algebra:-1",
    "page": "Readme",
    "title": "For basic algebra:",
    "category": "section",
    "text": "Consider we have a two functions f and g and want to add them, multiply them by some other function h, then square it and finally integrate the result between 2.0 and 2.8. This can be done analytically with UnivariateFunctions:f = PE_Function(1.0, 2.0, 4.0, 5)\ng = PE_Function(1.3, 2.0, 4.3, 2)\nh = PE_Function(5.0, 2.2, 1.0,0)\nresult_of_operations = (h*(f+g))^2\nevaluate_integral(result_of_operations, 2.0, 2.8)"
},

{
    "location": "#For-data-interpolation-1",
    "page": "Readme",
    "title": "For data interpolation",
    "category": "section",
    "text": "Suppose we have want to approximate some function with some sampled points. First to generate some pointsusing UnivariateFunctions\nconst global_base_date = Date(2000,1,1)\nStartDate = Date(2018, 7, 21)\nx = Array{Date}(undef, 1000)\nfor i in 1:1000\n    x[i] = StartDate +Dates.Day(2* (i-1))\nend\nfunction ff(x::Date)\n    days_between = years_from_global_base(x)\n    return log(days_between) + sqrt(days_between)\nend\ny = ff.(x)Now we can generate a UnivariateFunction that can be used to easily interpolate from the sampled points:func = create_quadratic_spline(x,y)And we can evaluate from this function and integrate it and differentiate it in the normal way:evaluate(func, Date(2020,1,1))\nevaluate.(Ref(func), [Date(2020,1,1), Date(2021,1,2)])\nevaluate(derivative(func), Date(2021,1,2))\nevaluate_integral(func, Date(2020,1,1), Date(2021,1,2))If we had wanted to interpolate instead with a constant method(from left or from right) or by linearly interpolating then we could have just generated func with a different method: createconstantinterpolationtoleft, createconstantinterpolationtoright or createlinearinterpolation."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnivariateFunctions.*UnivariateFunctions.+UnivariateFunctions.-UnivariateFunctions./UnivariateFunctions.PE_FunctionUnivariateFunctions.Piecewise_FunctionUnivariateFunctions.Sum_Of_FunctionsUnivariateFunctions.Undefined_FunctionUnivariateFunctions.UnivariateFunctionUnivariateFunctions.UnivariateFunctionsUnivariateFunctions.^UnivariateFunctions.change_base_of_PE_FunctionUnivariateFunctions.clean_array_of_functionsUnivariateFunctions.create_common_piecesUnivariateFunctions.create_constant_interpolation_to_leftUnivariateFunctions.create_constant_interpolation_to_rightUnivariateFunctions.create_linear_interpolationUnivariateFunctions.create_quadratic_splineUnivariateFunctions.days_per_yearUnivariateFunctions.deal_with_piecewise_inputsUnivariateFunctions.derivativeUnivariateFunctions.evalUnivariateFunctions.evaluateUnivariateFunctions.evaluate_integralUnivariateFunctions.first_entriesUnivariateFunctions.global_base_dateUnivariateFunctions.global_base_date_as_dayUnivariateFunctions.includeUnivariateFunctions.indefinite_integralUnivariateFunctions.is_constant_functionUnivariateFunctions.last_entriesUnivariateFunctions.left_integralUnivariateFunctions.maxUnivariateFunctions.minUnivariateFunctions.right_integralUnivariateFunctions.take_piecewise_sliceUnivariateFunctions.tolUnivariateFunctions.trim_piecewise_functionUnivariateFunctions.years_betweenUnivariateFunctions.years_from_global_base"
},

]}
