var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MKLSparse.jl-1",
    "page": "Readme",
    "title": "MKLSparse.jl",
    "category": "section",
    "text": "MKLSparse.jl is a Julia package to seamlessly use the sparse functionality in MKL to speed up operations on sparse arrays in Julia. In order to use MKLSparse.jl you need to have MKL installed and the environment variables MKLROOT correctly set, see the MKL getting started guide for a guide. You do not need to have built Julia with MKL as the used BLAS library to use the package."
},

{
    "location": "#Matrix-multiplication-1",
    "page": "Readme",
    "title": "Matrix multiplication",
    "category": "section",
    "text": "Loading MKLSparse.jl will make sparse-dense matrix operations be computed using MKL."
},

{
    "location": "#Solving-linear-systems-1",
    "page": "Readme",
    "title": "Solving linear systems",
    "category": "section",
    "text": "Solving linear systems with triangular sparse matrices is supported. These matrices should be wrapped in their corresponding type, for example LowerTriangular for lower triangular matrices.For solving general sparse linear systems using MKL we refer to Pardiso.jl."
},

{
    "location": "#Misc-1",
    "page": "Readme",
    "title": "Misc",
    "category": "section",
    "text": "The integer type that should be used in order for MKL to be called is the same as used by the Julia BLAS library, see Base.USE_BLAS64."
},

{
    "location": "#Possible-TODO\'s-1",
    "page": "Readme",
    "title": "Possible TODO\'s",
    "category": "section",
    "text": "Wrap BLAS1 (SparseVector)\nWrap DSS\nWrap Incomplete LU preconditioners"
},

]}
