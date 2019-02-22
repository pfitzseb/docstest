var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hermetic-1",
    "page": "Readme",
    "title": "Hermetic",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)(Image: Product polynomia)"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "Hermetic is a package for working with multivariate standard and Hermitian polynomials. "
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "The package is not at the moment registered on Metadata (although will soon be). It can however be installed by cloning the github repository:Pkg.clone(\"https://github.com/gragusa/Hermetic.jl.git\")"
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "There is a basic type: ProductPoly{T} where the parameter T is either Standard or Hermitian."
},

{
    "location": "#Standard-multivariate-polynomials-1",
    "page": "Readme",
    "title": "Standard multivariate polynomials",
    "category": "section",
    "text": "A fourth order polynomial of dimension 2 (that is, two variables) is instantiated by:p = ProductPoly(2, 4)ProductPoly{Standard} - Dimension: 2 - Order: 4\nP(z) =\n    + 1.0 z^(0,0)\n    + 0.0 z^(0,1)\n    + 0.0 z^(1,0)\n    + 0.0 z^(0,2)\n    + 0.0 z^(1,1)\n    + 0.0 z^(2,0)\n    + 0.0 z^(0,3)\n    + 0.0 z^(1,2)\n    + 0.0 z^(2,1)\n    + 0.0 z^(3,0)\n    + 0.0 z^(0,4)\n    + 0.0 z^(1,3)\n    + 0.0 z^(2,2)\n    + 0.0 z^(3,1)\n    + 0.0 z^(4,0)The default constructor set all the coefficients equal to zero except the coefficient on z^(0,0). Notice that the constructor leaves the polynomial uncompressed, that is, the constructor retains coefficients equal to zero.Sometimes it can be useful only to consider terms whose exponents sum to an integer less than a given value. This is done using the Iz keyword. For instance,q = ProductPoly(2, 4, Iz = 2)In this case, the all the terms z^(i,j) with i + j > Iz are droppped from the poluynomial.The coefficients of the polynomial are set using setcoef!setcoef!(p, [1, .1, .2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4])ProductPoly{Standard} - Dimension: 2 - Order: 4\nP(z) =\n    + 1.0 z^(0,0)\n    + 0.1 z^(0,1)\n    + 0.2 z^(1,0)\n    + 0.3 z^(0,2)\n    + 0.4 z^(1,1)\n    + 0.5 z^(2,0)\n    + 0.6 z^(0,3)\n    + 0.7 z^(1,2)\n    + 0.8 z^(2,1)\n    + 0.9 z^(3,0)\n    + 1.0 z^(0,4)\n    + 1.1 z^(1,3)\n    + 1.2 z^(2,2)\n    + 1.3 z^(3,1)\n    + 1.4 z^(4,0)"
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "The following operation are defined for Standard polynomials:addition p + q\nmultiplication p * q\nscale scale!(p, a)\nbroadcasting broadcast(*, ::Real, p) == scale!(copy(p), ::Real)These operations do compress the polynomial, that is they remove terms premultiplied by a zero coefficient.q = ProductPoly(2, 4)\nsetcoef!(q, [1, .0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.])\np * qProductPoly{Standard} - Dimension: 2 - Order: 4\nP(z) =\n    + 1.0 z^(0,0)\n    + 0.1 z^(0,1)\n    + 0.2 z^(1,0)\n    + 0.3 z^(0,2)\n    + 0.4 z^(1,1)\n    + 0.5 z^(2,0)\n    + 0.6 z^(0,3)\n    + 0.7 z^(1,2)\n    + 0.8 z^(2,1)\n    + 0.9 z^(3,0)\n    + 1.0 z^(0,4)\n    + 1.1 z^(1,3)\n    + 1.2 z^(2,2)\n    + 1.3 z^(3,1)\n    + 1.4 z^(4,0)"
},

{
    "location": "#Evaluating-a-polynomial-1",
    "page": "Readme",
    "title": "Evaluating a polynomial",
    "category": "section",
    "text": "The polynomial can be evaluate bypolyval(p, x::Array{Float64, 2})For instance, to evaluate p at point z = [1 2]polyval(p, [1 2])To evaluate the polynomial at different pointspolyval(p, [1 2; -.3 .3])"
},

{
    "location": "#Hermite-polynomials-1",
    "page": "Readme",
    "title": "Hermite polynomials",
    "category": "section",
    "text": "A multivariate Hermite polynomial is defined as a standard polynomial, but the terms are themselves Hermite polynomials.q = ProductPoly(Hermite, 2, 4)ProductPoly{Hermite} - Dimension: 2 - Order: 4\nP(z) =\n    + 1.0 Hen(0,0)\n    + 0.0 Hen(0,1)\n    + 0.0 Hen(1,0)\n    + 0.0 Hen(0,2)\n    + 0.0 Hen(1,1)\n    + 0.0 Hen(2,0)\n    + 0.0 Hen(0,3)\n    + 0.0 Hen(1,2)\n    + 0.0 Hen(2,1)\n    + 0.0 Hen(3,0)\n    + 0.0 Hen(0,4)\n    + 0.0 Hen(1,3)\n    + 0.0 Hen(2,2)\n    + 0.0 Hen(3,1)\n    + 0.0 Hen(4,0)Hen(j,i) = Hen(j)*Hen(i) and Hen(j) is the (probabilistic) Hermite polynomial of order j.A ProductPoly{Hermite} can be converted to a standard one by convert(ProductPoly{Standard}, q::ProductPoly{Hermite}).The same operations defined for Standard polynomials apply to Hermite polynomials, but the return type of these operations is ProductPoly{Standard}."
},

{
    "location": "#License-and-credits-1",
    "page": "Readme",
    "title": "License and credits",
    "category": "section",
    "text": "The Hermite polynomial is under the LGPL license.Most of the credit for this package should go to John Burkardt and his code multivariate polynomials.Of course, I will shoulder most of the blame for errors and omissions."
},

{
    "location": "autodocs/#Hermetic.He_value",
    "page": "Docstrings",
    "title": "Hermetic.He_value",
    "category": "function",
    "text": "He_value(n, x)\n\nevaluates He(n,x) polynomial\n\nArgs:\n\no::Int the degree of the polynomial\nx::Array{Float64, 1} the evaluation points\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.Hen_coefficients",
    "page": "Docstrings",
    "title": "Hermetic.Hen_coefficients",
    "category": "function",
    "text": "Hen_coefficients(n)\n\nCalculate the coefficient of Hen(n, x), where Hen(n, x) is the normalized polynomial probabilist Hermite polynomial of degree n\n\nDetails:\n\nThe normalized probabilist Hermite polynomails is defined as\n\n$\\int H{enj}(x)H{enk}(x) w(x) dx = \\delta_{jk}$\n\nwhere w(x) is the normal density function.\n\nArgs:\n\nn the order of the polynomial\n\nOutput:\n\nn the order of the polynomial\nc the coefficients\ne the exponents of the polynomial\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.Hen_value",
    "page": "Docstrings",
    "title": "Hermetic.Hen_value",
    "category": "function",
    "text": "Hen_value(n, x)\n\nevaluates Hen(n,x) polynomial\n\nArgs:\n\no::Int the degree of the polynomial\nx::Array{Float64, 1} the evaluation points\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.Henp_to_polynomial",
    "page": "Docstrings",
    "title": "Hermetic.Henp_to_polynomial",
    "category": "function",
    "text": "Henp_to_polynomial (m::Int, l::Array{Int, 1})\n\nwrites a Hermite Product Polynomial as a standard polynomial.\n\nDetails:\n\nHen(i,x) represents the probabilist\'s normalized Hermite polynomial.\n\nFor example, if    M = 3,    L = [1, 0, 2 ]\n\nthen\n\nHen(1,0,2)(X,Y,Z) = Hen(1)(X) * Hen(0)(Y) * Hen(2)(Z)                      = X * 0.707107*(Y^2-1) *\n\nArgs:\n\nm::Int the spatial dimension of the hermite\'s normalized product (Hnp) polynomial\nl::Array{Int, 1} the index of the Hnp\n\nOutput:\n\no::Int the \"order\" of the polynomial product\nc::Array{int,1} the coefficients of the polynomial product\ne::Array{Int,1} the indices of the exponents of the polynomial product.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.expectation_monomial",
    "page": "Docstrings",
    "title": "Hermetic.expectation_monomial",
    "category": "function",
    "text": "calculate the expectation of the monomial with exponent e with respect to n(0,1)\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.fall_fact",
    "page": "Docstrings",
    "title": "Hermetic.fall_fact",
    "category": "function",
    "text": "fall_fact(x, n)\n\nInput, int X, the argument of the falling factorial function.\n\nInput, int N, the order of the falling factorial function.\nIf N = 0, FALL = 1, if N = 1, FALL = X.  Note that if N is\nnegative, a \"rising\" factorial will be computed.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.gamma_half_integer",
    "page": "Docstrings",
    "title": "Hermetic.gamma_half_integer",
    "category": "function",
    "text": "gammahalfinteger(j)\n\nCalculate Gamma(j/2)/√π\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.get_inter_idx",
    "page": "Docstrings",
    "title": "Hermetic.get_inter_idx",
    "category": "function",
    "text": "getinteridx(X::Array{Int, 2})\n\nReturn the index of interaction terms of order equal to Ki of a multivariate polynomial of order k and dimension m.\n\nX::Array{Int, 2} is obtained from a call to mono_grlex!(X, m).\n\nWhen Ki==1 or Ki=0 return the index of all interactions.\n\n    XC(1) XC(2) XC(3)  Degree\n  +------------------------\n1 |  0     0     0        0\n2 |  0     0     1        1\n3 |  0     1     0        1\n4 |  1     0     0        1\n5 |  0     0     2        2\n6 |  0     1     1        2\n7 |  0     2     0        2\n8 |  1     0     1        2\n9 |  1     1     0        2\n\n10 |  2     0     0        2    11 |  0     0     3        3    12 |  0     1     2        3    13 |  0     2     1        3    14 |  0     3     0        3    15 |  1     0     2        3    16 |  1     1     1        3    17 |  1     2     0        3    18 |  2     0     1        3    19 |  2     1     0        3    20 |  3     0     0        3\n\nSo, for Ki = 2\n\nBool[true\n true\n true\n true\n true\n true\n true\n true\n true\n true\n true\n false\n false\n true\n false\n false\n false\n false\n false\n true]\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.integrate_polynomial",
    "page": "Docstrings",
    "title": "Hermetic.integrate_polynomial",
    "category": "function",
    "text": "Calculate ∫ P(z) phi(z; 0, I) dz\n\nNote: Gamma((1+j)/2) for j even is a gamma evaluated on half integer.\n\nInt general Gamma(n/2) = (n-2)!!/(2^(n-1)/2)√π\n\nThus\n\ngamma((1+f1[r])/2))/√π = (f1[r]-1)!!/2^(f1[r]/2)\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.integrate_polynomial_times_xn",
    "page": "Docstrings",
    "title": "Hermetic.integrate_polynomial_times_xn",
    "category": "function",
    "text": "Calculate ∫P(z) phi(z; 0, I) dz\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.mono_grlex!",
    "page": "Docstrings",
    "title": "Hermetic.mono_grlex!",
    "category": "function",
    "text": "mono_grlex!(X::Array{Int, 2}, m::Int)\n\nFills x::Array{Int, 2} with the grlx ordering for spacial dimension m.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.mono_next_grlex!",
    "page": "Docstrings",
    "title": "Hermetic.mono_next_grlex!",
    "category": "function",
    "text": "mono_next_grlex!{T <: Int}(m::T, x::Array{T, 1})\n\nReturns the next monomial in grlex order.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.mono_rank_grlex",
    "page": "Docstrings",
    "title": "Hermetic.mono_rank_grlex",
    "category": "function",
    "text": "mono_rank_grlex(m, x)\n\nreturns the graded lexicographic ordering rank of a monomial in m dimensions.\n\nAgrs:\n\nm::Int:  spatial dimension\nx::Array{Int,1}:  the m dimensional vector representing the monomial.\n\nReturns:\n\nThe rank of the monomial.\n\nDetails:\n\nThe graded lexicographic ordering is used, over all M dimensional vectors with sum 0, then 1, then 2, ...\n\nFor example, if m = 3, the monomials are ordered in a sequence that begins\n\n#  x[1]  x[2]  x[3]     SUM\n  +------------------------\n1 |  0     0     0        0\n  |\n2 |  0     0     1        1\n3 |  0     1     0        1\n4 |  1     0     0        1\n  |\n5 |  0     0     2        2\n6 |  0     1     1        2\n7 |  0     2     0        2\n8 |  1     0     1        2\n9 |  1     1     0        2\n\n10 |  2     0     0        2       |    11 |  0     0     3        3    12 |  0     1     2        3    13 |  0     2     1        3    14 |  0     3     0        3    15 |  1     0     2        3    16 |  1     1     1        3    17 |  1     2     0        3    18 |  2     0     1        3    19 |  2     1     0        3    20 |  3     0     0        3       |    21 |  0     0     4        4    22 |  0     1     3        4    23 |  0     2     2        4    24 |  0     3     1        4    25 |  0     4     0        4    26 |  1     0     3        4    27 |  1     1     2        4    28 |  1     2     1        4    29 |  1     3     0        4    30 |  2     0     2        4    31 |  2     1     1        4    32 |  2     2     0        4    33 |  3     0     1        4    34 |  3     1     0        4    35 |  4     0     0        4\n\nIn the case of m = 1\n\n   x[1]\n  +----\n1 |  0\n2 |  1\n3 |  2\n\nThe monomial (1,0,3) has rank 26, and we could determine this by the   call rank = mono_rank_grlex (3, [1, 0, 3]);\nThe monomial (0,1,0) has rank 3, and we could determine this by the   call rank = mono_rank_grlex ( 3, [0, 1, 0]);\n\nExample:\n\nmono_rank_grlex(3, [1,0,3]) return 26.\n\nFirst compares the total degree (sum of all exponents), and in case of a tie applies lexicographic order. This ordering is not only a well ordering, it also has the property that any monomial is preceded only by a finite number of other monomials; this is not the case for lexicographic order, where all (infinitely many) powers of x are less than y (that lexicographic order is nevertheless a well ordering is related to the impossibility to construct an infinite decreasing chain of monomials). In other words,\n\nx^\\alpha >{grlex} x^{\\beta} if deg x^\\alpha > deg x^\\beta or if deg x^\\alpha > deg x^\\beta if x^\\alpha >{lex} x^\\beta\n\nwhere in the lexycographic order the power of the first variable is used to determine the order, with powers of the second variable only looked at when the first variable appears to the same power in two monomials.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.mono_unrank_grlex",
    "page": "Docstrings",
    "title": "Hermetic.mono_unrank_grlex",
    "category": "function",
    "text": "mono_unrank_grlex{T <: Int}(m::T, rank::T)\n\nComputes the composition of given grlex rank.\n\nArgs:\n\n- `m` the spatial dimension of the product poly\n- `r` the rank of the composition\n\nOutput:     - f the composition of the given rank\n\nExample:\n\nmono_unrank_grlex(3, 26) returns [1,0,3] f = Array{Int}(3, 1) `monounrankgrlex!(f, 3, 26) println(f)\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.mono_value",
    "page": "Docstrings",
    "title": "Hermetic.mono_value",
    "category": "function",
    "text": "mono_value!(v, x, λ)\n\nEvaluates a monomial.\n\nArgs:\n\nx::Array{Float,2} the coordinates of the evaluation points.\nλ::Array{Float,1} the exponents of the monomial (m×1)\n\nReturn the evaluated monomial v::Array{Float,1}.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.polynomial_add",
    "page": "Docstrings",
    "title": "Hermetic.polynomial_add",
    "category": "function",
    "text": "polynomial_add(o1, c1, e1, o2, c2, e2)\n\nAdds two polynomial\n\nArgs:\n\n  - o1::Int the \"order\" of polynomial 1.\n\n  - c1::Array{Float64,1}, the `O1×1` coefficients of polynomial 1.\n\n  - e1::Array{Float64,1}, the `O1×1`, the indices of the exponents\nof polynomial 1.\n\n  - o2::Int the \"order\" of polynomial 2.\n\n  - c2::Array{Float64,1}, the `O2×1` coefficients of polynomial 2\n\n  - e1::Array{Float64,1}, the `O2×1`, the indices of the exponents\nof polynomial 2.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.polynomial_compress",
    "page": "Docstrings",
    "title": "Hermetic.polynomial_compress",
    "category": "function",
    "text": "polynomial_compress( o, c, e )\n\nArgs:\n\no the order of the polynomial\nc the coefficients of the polynomial\ne the indices of the exponents of the polynomial.\n\nOutput:\n\no the order of the compressed polynomial\nc the coefficients of the compressed polynomial\ne the indices of the exponents of the compressed polynomial.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.polynomial_dif",
    "page": "Docstrings",
    "title": "Hermetic.polynomial_dif",
    "category": "function",
    "text": "polynomial_dif\n\nDifferentiates a polynomial\n\ndif::Array{T}(m) indicates the number of differentiations in each component\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.polynomial_mul",
    "page": "Docstrings",
    "title": "Hermetic.polynomial_mul",
    "category": "function",
    "text": "polynomial_mul(m, o1, c1, e1, o2, c2, e2)\n\nMultiply two polynomials\n\nArgs:\n\n  - m::Int the spatial dimension of the product polynomial\n\n  - o1::Int the \"order\" of polynomial 1.\n\n  - c1::Array{Float64,1}, the `O1×1` coefficients of polynomial 1.\n\n  - e1::Array{Float64,1}, the `O1×1`, the indices of the exponents\nof polynomial 1.\n\n  - o2::Int the \"order\" of polynomial 2.\n\n  - c2::Array{Float64,1}, the `O2×1` coefficients of polynomial 2\n\n  - e1::Array{Float64,1}, the `O2×1`, the indices of the exponents\nof polynomial 2.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.polynomial_scale",
    "page": "Docstrings",
    "title": "Hermetic.polynomial_scale",
    "category": "function",
    "text": "polynomial_scale{T <: AbstractFloat, F <: Int}(s, m::F, o::F,     c::Array{T, 1}, e::Array{F, 1})\n\nScales a polynomial.\n\nArgs:     - s the scale factor     - m the spatial dimension     - o the order of the polynomial     - c the coefficients     - e the exponent\n\nOutput:     - o     - c     - e\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.polynomial_sort!",
    "page": "Docstrings",
    "title": "Hermetic.polynomial_sort!",
    "category": "function",
    "text": "polynomial_sort! ( c, e )\n\nsorts the information in a polynomial.\n\nDetails:\n\nThe coefficients c and exponents e are rearranged so that the elements of e are in ascending order.\n\nc::Array{Float64,1} the coefficients of the polynomial.\ne::Array{Int,1} the indices of the exponents of the polynomial.\n\nOutput:\n\nc::Array{Float,1} the coefficients of the sorted polynomial.\ne::Array{Int,1} the indices of the exponents of the sorted polynomial.\n\n\n\n"
},

{
    "location": "autodocs/#Hermetic.polynomial_value",
    "page": "Docstrings",
    "title": "Hermetic.polynomial_value",
    "category": "function",
    "text": "polynomial_value\n\nInput, int M, the spatial dimension.\n\nInput, int O, the \"order\" of the polynomial.\n\nInput, double C[O], the coefficients of the polynomial.\n\nInput, int E[O], the indices of the exponents\nof the polynomial.\n\n\nInput, double X[NX, M], the coordinates of the evaluation points.\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Hermetic.He_coefficientsHermetic.He_valueHermetic.Hen_coefficientsHermetic.Hen_valueHermetic.Henp_to_polynomialHermetic.Henp_to_polynomial_fullwHermetic.HermeticHermetic.HermiteHermetic.PolyTypeHermetic.ProductPolyHermetic.StandardHermetic._set_ppolyHermetic.evalHermetic.expectation_monomialHermetic.expectation_monomial!Hermetic.fall_factHermetic.gamma_half_integerHermetic.get_inter_idxHermetic.includeHermetic.integrateHermetic.integrate_polynomialHermetic.integrate_polynomial_times_xnHermetic.mono_grlex!Hermetic.mono_next_grlex!Hermetic.mono_rank_grlexHermetic.mono_unrank_grlexHermetic.mono_unrank_grlex!Hermetic.mono_valueHermetic.poly_orderHermetic.polynomial_addHermetic.polynomial_compressHermetic.polynomial_difHermetic.polynomial_mulHermetic.polynomial_mul_uncHermetic.polynomial_pow2Hermetic.polynomial_printHermetic.polynomial_print_hermiteHermetic.polynomial_scaleHermetic.polynomial_sort!Hermetic.polynomial_valueHermetic.polyvalHermetic.scaleHermetic.setcoef!"
},

]}
