var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StaticUnivariatePolynomials.jl-1",
    "page": "Readme",
    "title": "StaticUnivariatePolynomials.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Codecov)StaticUnivariatePolynomials provides a Polynomial type representing a dense univariate polynomial. In contrast to e.g. JuliaMath/Polynomials.jl, coefficients are stored in an NTuple. This makes Polynomial a stack-allocatable bitstype when the coefficient type is a bitstype, enabling high performance."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Polynomials may be created by passing in coeffients ordered from lowest to highest degree:julia> using StaticUnivariatePolynomials, BenchmarkTools, Test\n\njulia> p = Polynomial(1, 2, 3) # 1 + 2x + 3x^2\nPolynomial{3,Int64}((1, 2, 3))The Polynomial type overloads the call operator for evaluation, and is implemented using Base.@evalpoly (for real coefficients, using Horner\'s method):julia> p(4)\n57Evaluation is fast:julia> @btime $p(x) setup = x = rand()\n\n  2.052 ns (0 allocations: 0 bytes)Basic arithmetic is implemented:julia> p + 1\nPolynomial{3,Int64}((2, 2, 3))\n\njulia> p + Polynomial(3, 2, 1)\nPolynomial{3,Int64}((4, 4, 4))\n\njulia> p / 4\nPolynomial{3,Float64}((0.25, 0.5, 0.75))\n\njulia> p * p\nPolynomial{5,Int64}((1, 4, 10, 12, 9))Calculus:julia> import StaticUnivariatePolynomials: derivative, integral\n\njulia> P = integral(p, 5) # integral of p such that P(0) = 5\nPolynomial{4,Float64}((5.0, 1.0, 1.0, 1.0))\n\njulia> P′ = derivative(P)\nPolynomial{3,Float64}((1.0, 2.0, 3.0))\n\njulia> @test typeof(P′)(p) === P′\nTest Passed"
},

{
    "location": "autodocs/#StaticUnivariatePolynomials.coefficient_gradient",
    "page": "Docstrings",
    "title": "StaticUnivariatePolynomials.coefficient_gradient",
    "category": "function",
    "text": "coefficient_gradient(x, ::Val{n}, ::Val{m}) where {n, m}\n\nReturn the gradient of the mth derivative of an n-coefficient polynomial, evaluated at x, with respect to the polynomial\'s coefficients, as a Tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticUnivariatePolynomials.derivative",
    "page": "Docstrings",
    "title": "StaticUnivariatePolynomials.derivative",
    "category": "function",
    "text": "derivative(p::Polynomial)\n\nReturn the derivative of p(x) with respect to x as a Polynomial.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticUnivariatePolynomials.integral",
    "page": "Docstrings",
    "title": "StaticUnivariatePolynomials.integral",
    "category": "function",
    "text": "integral(p::Polynomial, c)\n\nReturn P(x), the integral of p(x) with respect to x such that P(0) = c, as a Polynomial.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StaticUnivariatePolynomials.PolynomialStaticUnivariatePolynomials.StaticUnivariatePolynomialsStaticUnivariatePolynomials._coefficient_gradientStaticUnivariatePolynomials._mapStaticUnivariatePolynomials.coefficient_gradientStaticUnivariatePolynomials.constantStaticUnivariatePolynomials.derivativeStaticUnivariatePolynomials.evalStaticUnivariatePolynomials.includeStaticUnivariatePolynomials.integral"
},

]}
