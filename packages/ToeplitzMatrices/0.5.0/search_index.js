var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ToeplitzMatrices.jl-1",
    "page": "Readme",
    "title": "ToeplitzMatrices.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Fast matrix multiplication and division for Toeplitz and Hankel matrices in Julia"
},

{
    "location": "#ToeplitzMatrix-1",
    "page": "Readme",
    "title": "ToeplitzMatrix",
    "category": "section",
    "text": "A Toeplitz matrix has constant diagonals.  It can be constructed usingToeplitz(vc,vr)where vc are the entries in the first column and vr are the entries in the first row, where vc[1] must equal vr[1].  For example.Toeplitz([1.,2.,3.],[1.,4.,5.])is a sparse representation of the matrix[ 1.0  4.0  5.0\n  2.0  1.0  4.0\n  3.0  2.0  1.0 ]"
},

{
    "location": "#TriangularToeplitz-1",
    "page": "Readme",
    "title": "TriangularToeplitz",
    "category": "section",
    "text": "A triangular Toeplitz matrix can be constructed usingTriangularToeplitz(ve,uplo)where uplo is either :L or :U and ve are the rows or columns, respectively.  For example, TriangularToeplitz([1.,2.,3.],:L)\n ```\n\n is a sparse representation of the matrix\n\n ```julia\n [ 1.0  0.0  0.0\n   2.0  1.0  0.0\n   3.0  2.0  1.0 ]\n ```\n\n # Hankel\n\n A Hankel matrix has constant anti-diagonals.  It can be constructed using\n\n ```julia\n Hankel(vc,vr)\n ```\n\n where `vc` are the entries in the first column and `vr` are the entries in the last row, where `vc[end]` must equal `vr[1]`.  For example.\n\n ```julia\n Hankel([1.,2.,3.],[3.,4.,5.])\n ```\n\n is a sparse representation of the matrix\n\n ```julia\n [  1.0  2.0  3.0\n    2.0  3.0  4.0\n    3.0  4.0  5.0 ]\n ```\n\n\n # Circulant\n \n A circulant matrix is a special case of a Toeplitz matrix with periodic end conditions.\n It can be constructed using\n \n ```julia\n Circulant(vc)\n ```\nwhere `vc` is a vector with the entries for the first column.\nFor example:julia  Circulant(1:3)  ```  is a sparse representation of the matrixjulia  [  1.0  3.0  2.0     2.0  1.0  3.0     3.0  2.0  1.0 ]"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ToeplitzMatrices.AbstractToeplitzToeplitzMatrices.Ac_mul_BToeplitzMatrices.CirculantToeplitzMatrices.HankelToeplitzMatrices.IterativeLinearSolversToeplitzMatrices.SymmetricToeplitzToeplitzMatrices.ToeplitzToeplitzMatrices.ToeplitzMatricesToeplitzMatrices.TriangularToeplitzToeplitzMatrices._HankelToeplitzMatrices.chanToeplitzMatrices.evalToeplitzMatrices.flipdimToeplitzMatrices.includeToeplitzMatrices.smallinvToeplitzMatrices.strang"
},

]}
