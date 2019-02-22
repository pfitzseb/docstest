var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PolyJuMP-1",
    "page": "Readme",
    "title": "PolyJuMP",
    "category": "section",
    "text": "PackageEvaluator Build Status\n[![][pkg-0.6-img]][pkg-0.6-url] [![Build Status][build-img]][build-url] [![Build Status][winbuild-img]][winbuild-url]\n[![][pkg-0.7-img]][pkg-0.7-url] [![Coveralls branch][coveralls-img]][coveralls-url] [![Codecov branch][codecov-img]][codecov-url]PolyJuMP is an extension to JuMP for formulating and solving polynomial optimization problems. These problems can then be solved using Sum of Squares Programming."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "[STABLE][docs-stable-url] &mdash; most recently tagged version of SumOfSquares\' documentation.\n[LATEST][docs-latest-url] &mdash; in-development version of SumOfSquares\' documentation.Some presentations on, or using, PolyJuMP:Benoît Legat at the JuMP Meetup 2017 [Slides] [Video]\nJoey Huchette at SIAM Opt 2017[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-stable-url]: https://juliaopt.github.io/SumOfSquares.jl/stable [docs-latest-url]: https://juliaopt.github.io/SumOfSquares.jl/latest[pkg-0.6-img]: http://pkg.julialang.org/badges/PolyJuMP0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=PolyJuMP [pkg-0.7-img]: http://pkg.julialang.org/badges/PolyJuMP0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=PolyJuMP[build-img]: https://travis-ci.org/JuliaOpt/PolyJuMP.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaOpt/PolyJuMP.jl [winbuild-img]: https://ci.appveyor.com/api/projects/status/2y6dc0j2xk4aa4v7?svg=true [winbuild-url]: https://ci.appveyor.com/project/JuliaOpt/polyjump-jl [coveralls-img]: https://coveralls.io/repos/github/JuliaOpt/PolyJuMP.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/JuliaOpt/PolyJuMP.jl?branch=master [codecov-img]: http://codecov.io/github/JuliaOpt/PolyJuMP.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/JuliaOpt/PolyJuMP.jl?branch=master"
},

{
    "location": "autodocs/#PolyJuMP.AbstractPolynomialBasis",
    "page": "Docstrings",
    "title": "PolyJuMP.AbstractPolynomialBasis",
    "category": "type",
    "text": "abstract type AbstractPolynomialBasis end\n\nPolynomial basis of a subspace of the polynomials [Section~3.1.5, BPT12].\n\n[BPT12] Blekherman, G.; Parrilo, P. A. & Thomas, R. R. Semidefinite Optimization and Convex Algebraic Geometry. Society for Industrial and Applied Mathematics, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolyJuMP.FixedPolynomialBasis",
    "page": "Docstrings",
    "title": "PolyJuMP.FixedPolynomialBasis",
    "category": "type",
    "text": "struct FixedPolynomialBasis{PT<:MultivariatePolynomials.AbstractPolynomialLike, PV<:AbstractVector{PT}} <: AbstractPolynomialBasis\n    polynomials::PV\nend\n\nPolynomial basis with the polynomials of the vector polynomials. For instance, FixedPolynomialBasis([1, x, 2x^2-1, 4x^3-3x]) is the Chebyshev polynomial basis for cubic polynomials in the variable x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolyJuMP.MonomialBasis",
    "page": "Docstrings",
    "title": "PolyJuMP.MonomialBasis",
    "category": "type",
    "text": "struct MonomialBasis{MT<:MultivariatePolynomials.AbstractMonomial, MV<:AbstractVector{MT}} <: AbstractPolynomialBasis\n    monomials::MV\nend\n\nMonomial basis with the monomials of the vector monomials. For instance, MonomialBasis([1, x, y, x^2, x*y, y^2]) is the monomial basis for the subspace of quadratic polynomials in the variables x, y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolyJuMP.Poly",
    "page": "Docstrings",
    "title": "PolyJuMP.Poly",
    "category": "type",
    "text": "struct Poly{PB<:AbstractPolynomialBasis} <: AbstractPoly\n    polynomial_basis::PB\nend\n\nPolynomial variable v^top p where v is a vector of new decision variables and p is a vector of polynomials for the basis polynomial_basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolyJuMP.ScaledMonomialBasis",
    "page": "Docstrings",
    "title": "PolyJuMP.ScaledMonomialBasis",
    "category": "type",
    "text": "struct ScaledMonomialBasis{MT<:MultivariatePolynomials.AbstractMonomial, MV<:AbstractVector{MT}} <: AbstractPolynomialBasis\n    monomials::MV\nend\n\nScaled monomial basis (see [Section 3.1.5, BPT12]) with the monomials of the vector monomials. Given a monomial x^alpha = x_1^alpha_1 cdots x_n^alpha_n of degree d = sum_i=1^n alpha_i, the corresponding polynomial of the basis is\n\nd choose alpha^frac12 x^alpha quad text where  quad\nd choose alpha = fracdalpha_1 alpha_2 cdots alpha_n\n\nFor instance, create a polynomial with the basis xy^2 xy creates the polynomial sqrt3 a xy^2 + sqrt2 b xy where a and b are new JuMP decision variables. Constraining the polynomial axy^2 + bxy to be zero with the scaled monomial basis constrains a/√3 and b/√2 to be zero.\n\n[BPT12] Blekherman, G.; Parrilo, P. A. & Thomas, R. R. Semidefinite Optimization and Convex Algebraic Geometry. Society for Industrial and Applied Mathematics, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PolyJuMP.AbstractPolyPolyJuMP.AbstractPolynomialBasisPolyJuMP.ConstraintDelegatePolyJuMP.DataPolyJuMP.FixedPolynomialBasisPolyJuMP.MonomialBasisPolyJuMP.NonNegPolyPolyJuMP.NonNegPolyMatrixPolyJuMP.PolyPolyJuMP.PolyConstraintPolyJuMP.PolyConstraintRefPolyJuMP.PolyJuMPPolyJuMP.PolynomialSetPolyJuMP.ScaledMonomialBasisPolyJuMP.ZeroConstraintPolyJuMP.ZeroConstraintWithDomainPolyJuMP.ZeroPolyPolyJuMP._warnboundsPolyJuMP.addpolyconstraint!PolyJuMP.createpolyPolyJuMP.cvarchecksPolyJuMP.evalPolyJuMP.get_defaultPolyJuMP.getdefaultPolyJuMP.getdelegatePolyJuMP.getdelegatesPolyJuMP.getpolydataPolyJuMP.getslackPolyJuMP.includePolyJuMP.polytypePolyJuMP.scalingPolyJuMP.setdefault!PolyJuMP.setpolymodule!PolyJuMP.unscale_coef"
},

]}
