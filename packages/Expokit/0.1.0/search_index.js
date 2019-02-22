var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)"
},

{
    "location": "#Expokit-1",
    "page": "Readme",
    "title": "Expokit",
    "category": "section",
    "text": "This package provides Julia implementations of some routines contained in EXPOKIT. Those routines allow an efficient calculation of the action of matrix exponentials on vectors for large sparse matrices. For more details about the methods see R.B. Sidje, ACM Trans. Math. Softw., 24(1):130-156, 1998 (or its preprint).Note: Apart from expmv (which is called expv in EXPOKIT) also phimv, padm and chbv are available."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Pkg.add(\"Expokit\")"
},

{
    "location": "#expmv-1",
    "page": "Readme",
    "title": "expmv",
    "category": "section",
    "text": "w = expmv!{T}( w::Vector{T}, t::Number, A, v::Vector{T}; kwargs...)The function expmv! calculates w = exp(t*A)*v, where A is a matrix or any type that supports norm, size and A_mul_B! and v a dense vector by using Krylov subspace projections. The result is stored in w.The following keywords are supportedtol: tolerance to control step size\nm: size of Krylov subspace\nnorm: user-supplied normFor convenience, the following versions of expmv are providedv = expmv!{T}( t::Number, A, v::Vector{T}; kwargs...)\nw = expmv{T}( t::Number, A, v::Vector{T}; kwargs...)"
},

]}
