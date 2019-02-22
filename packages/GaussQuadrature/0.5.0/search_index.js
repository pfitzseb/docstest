var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)"
},

{
    "location": "#GaussQuadrature.jl-1",
    "page": "Readme",
    "title": "GaussQuadrature.jl",
    "category": "section",
    "text": "Julia package to compute points and weights for Gauss quadrature rules using the Golub-Welsch algorithm.Handles the classical Legendre, Chebyshev, Jacobi, Laguerre and Hermite  weights, as well as a logarithmic weight function.  In fact, the  Gauss rule is available for any custom weight function such that the  coefficients are known for the three-term recurrence relation satisfied  by the associated orthogonal polynomials.  The modified Chebyshev  algorithm is provided to determine these coefficients from the modified  moments of the weight function.The Lobatto and Radau variants of all these rules are also provided by appropriate choice of the endpt argument: neither (the default),  both, left or right.For example, to obtain a plain 5-point Gauss-Legendre rule with weight function w(x)=1 on the interval -1 < x < -1 dojulia> using GaussQuadrature\njulia> x, w = legendre(5)whereas for the Lobatto version dojulia> x, w = legendre(5, both)The package supports BigFloats; for example,julia> x, w = legendre(BigFloat, 5)gives a plain 5-point Gauss-Legendre rule accurate to about 75 significant figures.Read the initial comments in the src/GaussQuadrature.jl module for full details, or read the help documentation for the individual functions called legendre, chebyshev, jacobi, laguerre, hermite,  logweight and custom_gauss_rule."
},

{
    "location": "autodocs/#GaussQuadrature.chebyshev",
    "page": "Docstrings",
    "title": "GaussQuadrature.chebyshev",
    "category": "function",
    "text": "x, w = chebyshev(T, n, kind=1, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss-Chebyshev rule for the interval -1 < x < 1 with weight function\n\nw(x) = 1 / sqrt(1-x²)   if kind=1\nw(x) = sqrt(1-x²)       if kind=2.\n\nUse endpt=left, right or both for the left Radau, right Radau or Lobatto rules, respectively.\n\n\n\n\n\nConvenience function with type T = Float64:\n\nx, w = chebyshev(n, kind=1, endpt=neither)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussQuadrature.custom_gauss_rule",
    "page": "Docstrings",
    "title": "GaussQuadrature.custom_gauss_rule",
    "category": "function",
    "text": "x, w = custom_gauss_rule(lo, hi, a, b, endpt, maxits=maxiterations[T])\n\nGenerates the points x and weights w for a Gauss rule with weight function w(x) on the interval lo < x < hi.\n\nThe arrays a and b hold the coefficients (as given, for instance, by legendre_coeff) in the three-term recurrence relation for the monic orthogonal polynomials p(0,x), p(1,x), p(2,x), ... , that is,\n\np(k, x) = (x-a[k]) p(k-1, x) - b[k]² p(k-2, x),    k ≥ 1,\n\nwhere p(0, x) = 1 and, by convention, p(-1, x) = 0 with\n\n          hi\nb[1]^2 = ∫  w(x) dx.\n         lo\n\nThus, p(k, x) = xᵏ + lower degree terms and\n\n hi\n∫  p(j, x) p(k, x) w(x) dx = 0 if j ≠ k.\nlo\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussQuadrature.hermite",
    "page": "Docstrings",
    "title": "GaussQuadrature.hermite",
    "category": "function",
    "text": "x, w = hermite(T, n)\n\nReturns points x and weights w for the n-point Gauss-Laguerre rule for the interval -∞ < x < ∞ with weight function\n\nw(x) = exp(-x²).\n\n\n\n\n\nConvenience function with type T = Float64:\n\nx, w = hermite(n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussQuadrature.jacobi",
    "page": "Docstrings",
    "title": "GaussQuadrature.jacobi",
    "category": "function",
    "text": "x, w = jacobi(n, α, β, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss-Jacobi rule for the interval -1 < x < 1 with weight function\n\nw(x) = (1-x)ᵅ (1+x)ᵝ.\n\nUse endpt=left, right or both for the left Radau, right Radau or Lobatto rules, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussQuadrature.laguerre",
    "page": "Docstrings",
    "title": "GaussQuadrature.laguerre",
    "category": "function",
    "text": "x, w = laguerre(n, α, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss-Laguerre rule for the interval 0 < x < ∞ with weight function\n\nw(x) = xᵅ exp(-x),   α > -1.\n\nUse endpt=left for the left Radau rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussQuadrature.legendre",
    "page": "Docstrings",
    "title": "GaussQuadrature.legendre",
    "category": "function",
    "text": "x, w = legendre(T, n, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss-Legendre rule for the interval -1 < x < 1 with weight function w(x) = 1.\n\nUse endpt=left, right or both for the left Radau, right Radau or Lobatto rules, respectively.\n\n\n\n\n\nConvenience function with type T = Float64:\n\nx, w = legendre(n, endpt=neither)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussQuadrature.logweight",
    "page": "Docstrings",
    "title": "GaussQuadrature.logweight",
    "category": "function",
    "text": "x, w = logweight(T, n, r=0, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss rule on the interval 0 < x < 1 with weight function\n\nw(x) = xʳ log(1/x),    r ≥ 0.\n\n\n\n\n\nConvenience function with type T = Float64:\n\nx, w = logweight(n, r=0, endpt=neither)\n\n\n\n\n\nMore general method works when w(x) = x^ρ log(1/x) for real ρ > -1:\n\nx, w = logweight(n, ρ, endpt=neither)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussQuadrature.modified_chebyshev",
    "page": "Docstrings",
    "title": "GaussQuadrature.modified_chebyshev",
    "category": "function",
    "text": "α, β, σ = modified_chebyshev(a, b, ν)\n\nImplements the modified Chebyshev algorithm described in doc/notes.tex and used in logweight_coefs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GaussQuadrature.EndPtGaussQuadrature.GaussQuadratureGaussQuadrature.bothGaussQuadrature.chebyshevGaussQuadrature.chebyshev_coefsGaussQuadrature.custom_gauss_ruleGaussQuadrature.evalGaussQuadrature.hermiteGaussQuadrature.hermite_coefsGaussQuadrature.includeGaussQuadrature.jacobiGaussQuadrature.jacobi_coefsGaussQuadrature.laguerreGaussQuadrature.laguerre_coefsGaussQuadrature.leftGaussQuadrature.legendreGaussQuadrature.legendre_coefsGaussQuadrature.logweightGaussQuadrature.logweight_coefsGaussQuadrature.maxiterationsGaussQuadrature.modified_chebyshevGaussQuadrature.modified_momentsGaussQuadrature.neitherGaussQuadrature.orthonormal_polyGaussQuadrature.rightGaussQuadrature.shifted_legendre_coefsGaussQuadrature.solveGaussQuadrature.special_eigenproblem!"
},

]}
