var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PolynomialRoots.jl-1",
    "page": "Readme",
    "title": "PolynomialRoots.jl",
    "category": "section",
    "text": "[Package Evaluator][pkgeval-link] Build Status Code Coverage\n[![][pkg-0.5-img]][pkg-0.5-url] [![Build Status][travis-img]][travis-url] [![][coveral-img]][coveral-url]\n[![][pkg-0.6-img]][pkg-0.6-url] [![Build Status][appvey-img]][appvey-url] [![][codecov-img]][codecov-url]"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "PolynomialRoots.jl is a library for finding roots of complex univariate polynomials, written in Julia.This is an implementation in Julia of the General Complex Polynomial Root Solver, written in Fortran, by Jan Skowron and Andrew Gould.  All the credits goes to them for the original algorithm.The root finding algorithm employed in this library is described inJ. Skowron & A. Gould, 2012, \"General Complex Polynomial Root Solver and Its Further Optimization for Binary Microlenses\", arXiv:1203.1034This algorithm aims to be fast and precise, more than the well known zroots procedure described in Numerical Recipes books, whose implementations in C and Fortran are not available as free software, according to the definition of the Free Software Foundation.PolynomialRoots.jl can also take advantage of native arbitrary precision capabilities of Julia and achieve more precise results.Note: the adopted algorithm can give highly inaccurate results for polynomials of order above ~30.  This can be mitigated by using multiple precision calculations (see example below)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "PolynomialRoots.jl is available for Julia 0.5 and later versions, and can be installed with Julia built-in package manager. In a Julia session run the commandjulia> Pkg.add(\"PolynomialRoots\")You may need to update your package list with Pkg.update() in order to get the latest version of PolynomialRoots.jl.Older versions are available also for Julia 0.4."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "After installing the package, runusing PolynomialRootsor put this command into your Julia script.PolynomialRoots.jl provides two functions to find the roots of complex polynomialsroots(polynomial[, roots, polish=true, epsilon=1e-20])\nroots5(polynomial[, roots, epsilon=1e-20])roots can be used to solve polynomials of any degree, roots5 is tailored to (and works only for) polynomials of degree 5.  This function exists because one of the methods to calculate gravitational microlensing amplification by a binary lens requires solving a fifth-order complex polynomial.  roots5 should be more robust than roots for this class of polynomials.The mandatory argument for both functions is:polynomial, the vector holding coefficients of the polynomial you want to solve, in ascending order, from the lowest to the highest.  Coefficients can be complex and realOptional arguments are:roots: if you roughly know in advance the position of the roots, you can pass the vector with the known roots to speed up convergence.  roots vector must be one element shorther than polynomial.  In roots5, the roots will be only polished.  Elements of the vector can be complex and real\npolish (boolean keyword, only for roots): if set to true, after all roots have been found by dividing original polynomial by each root found, all roots will be polished using full polynomial.  Default is false\nepsilon (floating point optional keyword): this is used to determine the stopping criterion described in Skowron & Gould paper.  If not set, it defaults to machine precision of polynomial (and roots) argument(s).  This is not the precision with which the roots will be calculated.The functions return in output the Complex vector with all roots of polynomial.  Note: if roots optional argument is provided, it is not changed in-place."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Find the roots of(x - i)*(x - 2)*(x - 3*i)*(x - 4)*(x - 5*i) =\n  x^5 - (9*i + 6)*x^4 + (54*i - 15)*x^3 + (138 - 57*i)*x^2 - (184 + 90*i)*x + 120*iThis is a fifth-order polynomial, so we can find its zeros with both roots and roots5:julia> roots([120im, -(184 + 90im), (138 - 57im), (54im - 15), -(6 + 9im), 1])\n5-element Array{Complex{Float64},1}:\n -1.55431e-15+5.0im\n 4.0+1.77636e-16im\n  1.55028e-15+3.0im\n -1.04196e-16+1.0im\n 2.0-2.00595e-16im\n\njulia> roots5([120im, -(184 + 90im), (138 - 57im), (54im - 15), -(6 + 9im), 1])\n5-element Array{Complex{Float64},1}:\n  5.92119e-16+5.0im\n  4.0-1.4803e-16im\n 2.0+1.88202e-16im\n -1.88738e-15+3.0im\n  2.10942e-15+1.0imPolynomialRoots.jl handles polynomials with high-multiplicity roots as well. For example, consider(x + 1)^5 = x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1You can find its roots withjulia> roots([1, 5, 10, 10, 5, 1])\n5-element Array{Complex{Float64},1}:\n -1.0+0.0im\n -1.0+0.0im\n -1.0+0.0im\n -1.0+0.0im\n -1.0+0.0im\n\njulia> roots5([1, 5, 10, 10, 5, 1])\n5-element Array{Complex{Float64},1}:\n -1.0+0.0im\n -1.0+0.0im\n -1.0+0.0im\n -1.0+0.0im\n -1.0+0.0im"
},

{
    "location": "#Arbitrary-precision-1",
    "page": "Readme",
    "title": "Arbitrary precision",
    "category": "section",
    "text": "Due to limited precision of Float64 type, extraction of roots of polynomials can give inaccurate results, even for low-order polynomials.  This is caused, i.e., by catastrophic cancellation in computation of discriminant Δ = sqrt(b^2 - 4ac) of second-order polynomials. For example, the actual roots of94906265.625*x^2 - 189812534*x + 94906268.375arex_1 = 1.000000028975958\nx_2 = 1.000000000000000but when you try to calculate them in double-precision you getjulia> r = roots([94906268.375, -189812534, 94906265.625]);\n\njulia> r[1]\n1.0000000144879793 - 0.0im\n\njulia> r[2]\n1.0000000144879788 + 0.0imIf you are interested in double-precision accuracy, you can work around this problem by calculating the roots with higher precision and then transforming the result to double-precision.  Julia natively supports multiple precision calculations, so what you have to do is only to pass BigFloat numbers to roots function (note: in order to correctly initialize an arbitrary precision floating point constant it is better to use the big string literal, see http://docs.julialang.org/en/stable/stdlib/numbers/#Base.BigFloat):julia> r = roots([big\"94906268.375\", -189812534, big\"94906265.625\"]);\n\njulia> Float64(r[1])\n1.0000000289759583\n\njulia> Float64(r[2])\n1.0Note that in this case there is a trade-off between speed and higher accuracy and precision."
},

{
    "location": "#Related-projects-1",
    "page": "Readme",
    "title": "Related projects",
    "category": "section",
    "text": "Another Julia package for finding roots of complex polynomials is Polynomials.jl, by Jameson Nash and other contributors.  This package does much more than finding roots of polynomials (among other features, it can integrate and differentiate polynomials).  In order to solve the polynomial, Polynomials.jl calculates eigenvalues of its companion matrix, but PolynomialRoots.jl is usually faster by up to an order of magnitude and often slightly more precise.  In addition, Polynomials cannot extract roots in arbitrary precision.  If you are after speed and precision, PolynomialRoots.jl can still be a better option."
},

{
    "location": "#Development-1",
    "page": "Readme",
    "title": "Development",
    "category": "section",
    "text": "The package is developed at https://github.com/giordano/PolynomialRoots.jl. There you can submit bug reports, make suggestions, and propose pull requests."
},

{
    "location": "#History-1",
    "page": "Readme",
    "title": "History",
    "category": "section",
    "text": "The ChangeLog of the package is available in NEWS.md file in top directory."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The PolynomialRoots.jl package is licensed under version 2.0 of the Apache License or the GNU Lesser General Public License version 3 or any later version, at your option.  These are the same licenses used by the General Complex Polynomial Root Solver.A custom in the scientific comunity is (regardless of the licence you chose to use or distribute this software under) that if this code was important in the scientific process or for the results of your scientific work, we kindly ask you for the appropriate citation of the paper Skowron & Gould 2012 (http://arxiv.org/abs/1203.1034), and we would be greatful if you pass the information about the proper citation to anyone whom you redistribute this software to.The authors of the General Complex Polynomial Root Solver, the original Fortran library (http://www.astrouw.edu.pl/~jskowron/cmplxrootssg/) from which PolynomialRoots.jl has been translated, are Jan Skowron, Andrew Gould.The original author of PolynomialRoots.jl is Mosè Giordano.[pkgeval-link]: http://pkg.julialang.org/?pkg=PolynomialRoots[pkg-0.5-img]: http://pkg.julialang.org/badges/PolynomialRoots0.5.svg [pkg-0.5-url]: http://pkg.julialang.org/detail/PolynomialRoots.html [pkg-0.6-img]: http://pkg.julialang.org/badges/PolynomialRoots0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/detail/PolynomialRoots.html[travis-img]: https://travis-ci.org/giordano/PolynomialRoots.jl.svg?branch=master [travis-url]: https://travis-ci.org/giordano/PolynomialRoots.jl[appvey-img]: https://ci.appveyor.com/api/projects/status/jfa9e54lv92rqd3m?svg=true [appvey-url]: https://ci.appveyor.com/project/giordano/polynomialroots-jl[coveral-img]: https://coveralls.io/repos/github/giordano/PolynomialRoots.jl/badge.svg?branch=master [coveral-url]: https://coveralls.io/github/giordano/PolynomialRoots.jl?branch=master[codecov-img]: https://codecov.io/gh/giordano/PolynomialRoots.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/giordano/PolynomialRoots.jl"
},

{
    "location": "autodocs/#PolynomialRoots.roots",
    "page": "Docstrings",
    "title": "PolynomialRoots.roots",
    "category": "function",
    "text": "roots(polynomial[, roots]; polish=true, epsilon=1e-20) -> roots\n\nFind all the roots of polynomial, of any degree.\n\nMandatory argument:\n\npolynomial: vector of coefficients (type Number) of the polynomial of which to find the roots, from the lowest coefficient to the highest one\n\nOptional argument:\n\nroots: vector of initial guess roots.  If you have a very rough idea where some of the roots can be, this vector is used as starting value for Laguerre\'s method\n\nOptional keywords:\n\npolish (Bool): if set to true, after all roots have been found by dividing original polynomial by each root found, all roots will be polished using full polynomial.  Default is false\nepsilon (AbstractFloat): this is used to determine the stopping criterion described in Skowron & Gould paper.  If not set, it defaults to machine precision of polynomial (and roots) argument(s).  This is not the precision with which the roots will be calculated\n\nFunction root5 is specialized for polynomials of degree 5.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialRoots.roots5",
    "page": "Docstrings",
    "title": "PolynomialRoots.roots5",
    "category": "function",
    "text": "roots5(polynomial[, roots]; epsilon=1e-20) -> roots\n\nFind all the roots of polynomial, of degree 5 only.\n\nMandatory argument:\n\npolynomial: vector of 6 coefficients (type Number) of the polynomial of which to find the roots, from the lowest coefficient to the highest one\n\nOptional argument:\n\nroots: vector of initial guess roots (of length 5).  If you have a very rough idea where some of the roots can be, this vector is used as starting value for Laguerre\'s method and the provided roots will be only polished\n\nOptional keyword:\n\nepsilon (AbstractFloat): this is used to determine the stopping criterion described in Skowron & Gould paper.  If not set, it defaults to machine precision of polynomial (and roots) argument(s).  This is not the precision with which the roots will be calculated\n\nFunction roots can be used to find roots of polynomials of any degree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PolynomialRoots.FRAC_JUMPSPolynomialRoots.FRAC_JUMP_EVERYPolynomialRoots.FRAC_JUMP_LENPolynomialRoots.MAX_ITERSPolynomialRoots.PolynomialRootsPolynomialRoots.divide_poly_1PolynomialRoots.evalPolynomialRoots.eval_poly_derPolynomialRoots.eval_poly_der2PolynomialRoots.eval_poly_der2_ekPolynomialRoots.eval_poly_der_ekPolynomialRoots.evalpolyPolynomialRoots.find_2_closest_from_5PolynomialRoots.includePolynomialRoots.laguerrePolynomialRoots.laguerre2newtonPolynomialRoots.newton_specPolynomialRoots.rootsPolynomialRoots.roots!PolynomialRoots.roots5PolynomialRoots.roots5!PolynomialRoots.solve_cubic_eqPolynomialRoots.solve_quadratic_eqPolynomialRoots.sort_5_points_by_separation!PolynomialRoots.sort_5_points_by_separation_iPolynomialRoots.third"
},

]}
