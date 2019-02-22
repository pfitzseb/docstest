var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "﻿# UnivariateFunctions.jlBuild Coverage\n(Image: Build Status) (Image: Coverage Status)This implements single algebra and evaluation on simple univariate functions. There are a few ways in which it can be used.UnivariateFunctions can be used in the creation of splines. This has the added   advantage that a spline implemented as a UnivariateFunction can be manipulated   easily. It can be differentiated and then added to another function, etc.\nAny continuous interpolation scheme can be done with the added benefit that derivatives/integrals/products etc can be found analytically.\nBasic approximation schemes like OLS regression and chebyshev polynomials can be done with the added benefit that derivatives/integrals/products etc can be found analytically.Development on this package is discontinued other than bug fixes as everything is generalised in MultivariateFunctions.jl. This provides a superset of the functionality of UnivariateFunctions.jl."
},

{
    "location": "#Structs-1",
    "page": "Readme",
    "title": "Structs",
    "category": "section",
    "text": "There are four main UnivariateFunction structs that are part of this package. These are:Undefined_Function - An undefined function behaves similarly to \"missing\" in Julia. Whenever anything is added/multiplied/etc with an undefined function the result is undefined. The integral and derivative of an undefined function is undefined. If an undefined function is evaluated it will return a missing.\nPEFunction - This is the basic function type. It has a form of a \\exp(b(x-base)) (x-base)^d$.\nSumOfFunctions - This is an array of PEFunctions. Note that by adding PEFunctions we can replicate any given polynomial. Hence from Weierstrass\' approximation theorem we can approximate any continuous function on a bounded domain to any desired level of accuracy (whether this is practical in numerical computing depends on the function being approximated).\nPiecewise_Function - This defines a different UnivariateFunction for each part of the x domain.It is possible to perform any additions, subtractions, multiplications between any two UnivariateFunctions and between Ints/Floats and any UnivariateFunction. No division is allowed and it is not possible to raise a UnivariateFunction to a negative power. This is to ensure that all univariatefunctions are analytically integrable and differentiable. This may change in future releases."
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
    "location": "#Approximation-and-regression-1",
    "page": "Readme",
    "title": "Approximation and regression",
    "category": "section",
    "text": "So for this package supports the creation of the following approximation schemes:OLS regression. The createolsapproximation function can create a UnivariateFunction approximating a linear relationship. The degree input to this function can be used to specify the number of higher powers of x to be used in approximating y. For instance if the degree is two then y will be approximated as a linear combination of x and x^2 as well as an intercept (if the intercept boolean is true).\nChebyshev polynomials - This will approximate a function using the Chebyshev basis functions. This approximation function can then be integreted which accomplished Chebyshev–Gauss quadrature."
},

{
    "location": "#Date-Handling-1",
    "page": "Readme",
    "title": "Date Handling",
    "category": "section",
    "text": "All base dates are immediately converted to floats and are not otherwise saved. Thus there is no difference between a PEFunction created with a base as a float and one created with the matching date. This is done to simplify the code. All date conversions is done by finding the year fractions between the date and the global base date of Date(2000,1,1). This particular global base date should not affect anything as long as it is consistent. It is relatively trivial to change it (in the dateconversions.jl file) and recompile however if desired."
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
    "text": "Suppose we have want to approximate some function with some sampled points. First to generate some pointsusing UnivariateFunctions\nconst global_base_date = Date(2000,1,1)\nStartDate = Date(2018, 7, 21)\nx = Array{Date}(undef, 1000)\nfor i in 1:1000\n    x[i] = StartDate +Dates.Day(2* (i-1))\nend\nfunction ff(x::Date)\n    days_between = years_from_global_base(x)\n    return log(days_between) + sqrt(days_between)\nend\ny = ff.(x)Now we can generate a UnivariateFunction that can be used to easily interpolate from the sampled points:func = create_quadratic_spline(x,y)And we can evaluate from this function and integrate it and differentiate it in the normal way:evaluate(func, Date(2020,1,1))\nevaluate.(Ref(func), [Date(2020,1,1), Date(2021,1,2)])\nevaluate(derivative(func), Date(2021,1,2))\nevaluate_integral(func, Date(2020,1,1), Date(2021,1,2))If we had wanted to interpolate instead with a constant method(from left or from right) or by linearly interpolating then we could have just generated func with a different method: createconstantinterpolationtoleft, createconstantinterpolationtoright or createlinearinterpolation.If we have lots of data that we want to summarise with OLS# Generating example data\nusing Random\nRandom.seed!(1)\nobs = 1000\nX = rand(obs)\ny = X .+ rand(Normal(),obs) .+ 7\n# And now making an approximation function\napproxFunction = create_ols_approximation(y, X, 0.0, 2, true)And if we want to approximate the sin function in the [2.3, 5.6] bound with 7 polynomial terms and 20 approximation nodes:chebyshevs = create_chebyshev_approximation(sin, 20, 7, 2.3, 5.6)We can integrate the above term in the normal way to achieve Gauss-Chebyshev quadrature:evaluate_integral(chebyshevs, 2.3, 5.6)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnivariateFunctions.*UnivariateFunctions.+UnivariateFunctions.-UnivariateFunctions./UnivariateFunctions.PE_FunctionUnivariateFunctions.Piecewise_FunctionUnivariateFunctions.Sum_Of_FunctionsUnivariateFunctions.Undefined_FunctionUnivariateFunctions.UnivariateFunctionUnivariateFunctions.UnivariateFunctionsUnivariateFunctions.^UnivariateFunctions.change_base_of_PE_FunctionUnivariateFunctions.clean_array_of_functionsUnivariateFunctions.convert_to_linearly_rescale_inputsUnivariateFunctions.create_chebyshev_approximationUnivariateFunctions.create_common_piecesUnivariateFunctions.create_constant_interpolation_to_leftUnivariateFunctions.create_constant_interpolation_to_rightUnivariateFunctions.create_linear_interpolationUnivariateFunctions.create_ols_approximationUnivariateFunctions.create_quadratic_splineUnivariateFunctions.days_per_yearUnivariateFunctions.deal_with_piecewise_inputsUnivariateFunctions.derivativeUnivariateFunctions.evalUnivariateFunctions.evaluateUnivariateFunctions.evaluate_integralUnivariateFunctions.findUnivariateFunctions.first_entriesUnivariateFunctions.first_kind_chebyshevsUnivariateFunctions.get_chebyshevUnivariateFunctions.get_chevyshevs_up_toUnivariateFunctions.get_cholesky_coefficientsUnivariateFunctions.global_base_dateUnivariateFunctions.global_base_date_as_dayUnivariateFunctions.includeUnivariateFunctions.indefinite_integralUnivariateFunctions.last_entriesUnivariateFunctions.left_integralUnivariateFunctions.next_chebyshevUnivariateFunctions.number_of_chebyshevs_to_compile_into_binariesUnivariateFunctions.rationalise_array_of_functionsUnivariateFunctions.right_integralUnivariateFunctions.second_kind_chebyshevsUnivariateFunctions.sortUnivariateFunctions.take_piecewise_sliceUnivariateFunctions.tolUnivariateFunctions.trim_piecewise_functionUnivariateFunctions.years_betweenUnivariateFunctions.years_from_global_base"
},

]}
