var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PolynomialZeros-1",
    "page": "Readme",
    "title": "PolynomialZeros",
    "category": "section",
    "text": "Methods to find zeros (roots) of polynomials over given domainsLinux: (Image: Build Status)Windows: (Image: Build status)This package provides the method poly_roots to find roots of univariate polynomial functions over the complex numbers, the real numbers, the rationals, the integers, or Z_p. (A \"root\" is the name for a \"zero\" of a polynomial function.) The package takes advantage of other root-finding packages for polynomials within Julia (e.g., PolynomialRoots for numeric solutions over the complex numbers and PolynomialFactors for exact solutions over the rationals and integers).The basic interface ispoly_roots(f, domain)The polynomial, f, is specified through a function, a vector of coefficients (p0, p1, ..., pn]), or as a Poly{T} object, from the the Polynomials.jl package. The domain is specified by Over.C (the default), Over.R, Over.Q, Over.Z, or over.Zp{p}, with variants for specifying an underlying type.Examples:julia> poly_roots(x -> x^4 - 1, Over.C)  # uses `roots` from `PolynomialRoots.jl`\n4-element Array{Complex{Float64},1}:\n  0.0+1.0im\n  1.0-0.0im\n  0.0-1.0im\n -1.0+0.0im\n\n\njulia> poly_roots(x -> x^4 - 1, Over.R)  \n2-element Array{Float64,1}:\n  1.0\n  -1.0\n  \njulia> poly_roots(x -> x^4 - 1, Over.Q) # uses `PolynomialFactors.jl`\n2-element Array{Rational{Int64},1}:\n -1//1\n  1//1\n\njulia> poly_roots(x -> x^4 - 1, Over.Z) # uses `PolynomialFactors.jl`\n2-element Array{Int64,1}:\n -1\n  1\n\njulia> poly_roots(x -> x^4 - 1, Over.Zp{5}) # uses `PolynomialFactors.jl`\n4-element Array{Int64,1}:\n 4\n 1\n 3\n 2Domains can also have their underlying types specified. For example, to solve over the BigFloat type, we have:poly_roots(x -> x^4 - 1, Over.CC{BigFloat})  # `CC{BigFloat}` not just `C`There are other methods for Over.C. This will use the AMVW method:julia> poly_roots(x -> x^4 - 1, Over.C, method=:amvw) \n4-element Array{Complex{Float64},1}:\n -1.8966567854390553e-17 - 0.9999999999999998im\n -1.8966567854390553e-17 + 0.9999999999999998im\n     -0.9999999999999999 + 0.0im               \n      1.0000000000000002 + 0.0im "
},

{
    "location": "#Details-1",
    "page": "Readme",
    "title": "Details",
    "category": "section",
    "text": "This package uses:The PolynomialRoots package to find roots over the complexnumbers. The Roots package can also be used. As well, an implementation of the AMVW algorithm can be used. The default seems to be faster and as accurate as the others.The PolynomialFactors package to return roots over therationals, integers, and integers modulo a prime.As well, it provides an algorithm to find the realroots of polynomials.The main motivation for this package was to move the polynomial specific code out of the Roots package. This makes the Roots package have fewer dependencies and a more focused task. In addition, the polynomial specific code could use some better implementations of the underlying algorithms.In the process of doing this, making a common interface to the other root-finding packages seemed to make sense."
},

{
    "location": "#Other-possibly-useful-methods-1",
    "page": "Readme",
    "title": "Other possibly useful methods",
    "category": "section",
    "text": "The package also providesPolynomialZeros.AGCD.agcd for computing an approximate GCD of polynomials p and q over Poly{Float64}. (This is used to reduce a polynomial over the reals to a square-free polynomial. Square-free polynomials are needed for the algorithm used. This algorithm can become unreliable for degree 15 or more polynomials.)\nPolynomialZeros.MultRoot.multroot for finding roots of p in Poly{Float64} over Complex{Float64} which has some advantage if p has high multiplicities. The roots function from the Polynomials package will find all the roots of a polynomial. Its performance degrades when the polynomial has high multiplicities. The multroot function is provided to handle this case a bit better. The function follows algorithms due to Zeng, \"Computing multiple roots of inexact polynomials\", Math. Comp. 74 (2005), 869-903. "
},

{
    "location": "autodocs/#PolynomialZeros.Over",
    "page": "Docstrings",
    "title": "PolynomialZeros.Over",
    "category": "module",
    "text": "Use types in this module to specifiy a domain. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialZeros.as_poly",
    "page": "Docstrings",
    "title": "PolynomialZeros.as_poly",
    "category": "function",
    "text": "`as_poly(f)` convert something into a polynomial\n\nHere f can be a Polynomial object; a vector of coefficents in the form [a_0, a_1, ..., a_n]; or a callable object, such as a function, that implements a polynomial function. The latter is determined by whether it can be evaluated on the Polynomial monomial x.\n\n\n\n\n\nas_poly{T}(T, f)\n\nConvert f to a polynomial of type Poly{T}, or throw a DomainError.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialZeros.e_type",
    "page": "Docstrings",
    "title": "PolynomialZeros.e_type",
    "category": "function",
    "text": "Type of polynomial \n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialZeros.monic",
    "page": "Docstrings",
    "title": "PolynomialZeros.monic",
    "category": "function",
    "text": "monic\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialZeros.poly_coeffs",
    "page": "Docstrings",
    "title": "PolynomialZeros.poly_coeffs",
    "category": "function",
    "text": "Find coefficients of polynomial expressed as Poly, Callable object, or values [a0,a1, ..., an]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialZeros.poly_roots",
    "page": "Docstrings",
    "title": "PolynomialZeros.poly_roots",
    "category": "function",
    "text": "poly_roots(f, domain): Find zeros of the polynomial f within the specified domain.\n\nf can be an instance of Poly type (from Polynomials.jl) or a callable object which can be so converted. Will throw a DomainError if the object f can not be converted to Poly{T}.        \ndomain is one of\nover.C (the default) for solving over complex values (Complex{Float64}). Use Over.CC{T} to specfy a type T<: AbstractFloat other than Float64. The default method is from PolynomialRoots. Pass the argument method=:roots to use the roots function from Polynomials.jl. Pass the argument method=:amvw to use an algorithm by Aurentz, Mach, Vandebril, and Watkins. For a degree n polynomial over C, all n roots should be returned (including multiplicities).\nover.R for solving over the real line (Float64). Use Over.RR{T} to specify a T <: Integer other than Float64. The algorithm assumes the polynomial is square free (none of its factors are squares over R). This is important for floating point coefficients. Pass the argument square_free=false to have an approximate gcd used to create a square-free version. Only unique real roots are returned (no multiplicities).\nover.Q for solving over the rational numbers (Rational{Int}). Use Over.RR{T} to specify a T <: Integer other than Int. Only unique rational roots are returned (no multiplicities).\nover.Z for solving over the integers (Int). Use Over.ZZ{T} to specify a T other than Int. Only unique integer roots are returned (no multiplicities).\nover.Zp{p} for solving over the finite field ZZ_p, p a prime.  Only unique roots are returned (no multiplicities).\n\nReturns an array of zeros, possibly empty. May throw error if polynomial type is inappropriate for specified domain. For an unspecified domain, the domain may reflect the element type of f(0).\n\nExamples:\n\nusing Polynomials, PolynomialZeros\nx = variable(); p = x^5 - x - 1\npoly_roots(p, Over.C)  # 5\npoly_roots(p, Over.R)  # 1\npoly_roots(p, Over.Q)  # empty\n\np = x^3 - 1\npoly_roots(p, Over.C)  # 3\npoly_roots(p, Over.R)  # 1\npoly_roots(p, Over.Q)  # 1\npoly_roots(p, Over.Z)  # 1\npoly_roots(p, Over.Zp{7})  # 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialZeros.rcoeffs",
    "page": "Docstrings",
    "title": "PolynomialZeros.rcoeffs",
    "category": "function",
    "text": "reverse coefficients of a polynomial\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PolynomialZeros.AAPolynomialZeros.AGCDPolynomialZeros.AMVWPolynomialZeros.MultRootPolynomialZeros.OverPolynomialZeros.PolynomialZerosPolynomialZeros.RealRootsPolynomialZeros._rational_TPolynomialZeros.as_polyPolynomialZeros.bisectionPolynomialZeros.check_cubicPolynomialZeros.check_linearPolynomialZeros.check_quadraticPolynomialZeros.check_quinticPolynomialZeros.discrPolynomialZeros.e_typePolynomialZeros.evalPolynomialZeros.includePolynomialZeros.monicPolynomialZeros.poly_coeffsPolynomialZeros.poly_rootsPolynomialZeros.qdrtcPolynomialZeros.rcoeffsPolynomialZeros.solve_cubicPolynomialZeros.solve_linearPolynomialZeros.solve_quadraticPolynomialZeros.solve_quinticPolynomialZeros.special_case"
},

]}
