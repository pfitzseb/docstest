var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FillArrays.jl-1",
    "page": "Readme",
    "title": "FillArrays.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)Julia package to lazily representing matrices filled with a single entry, as well as identity matrices.  This package exports the following types: Eye, Fill, Ones, and Zeros.The primary purpose of this package is to precent a unified way of constructing matrices. For example, to construct a 5-by-5 CLArray of all zeros, one would usejulia> CLArray(Zeros(5,5))Because Zeros is lazy, this can be accomplished on the GPU with no memory transfer. Similarly, to construct a 5-by-5 BandedMatrix of all zeros with bandwidths (1,2), one would use  julia> BandedMatrix(Zeros(5,5), (1, 2))"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Here are the matrix type4s:julia> Zeros(5, 5)\n5×5 FillArrays.Zeros{Float64,2}:\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n\njulia> Zeros{Int}(5, 5)\n5×5 FillArrays.Zeros{Int64,2}:\n 0  0  0  0  0\n 0  0  0  0  0\n 0  0  0  0  0\n 0  0  0  0  0\n 0  0  0  0  0\n\njulia> Ones{Int}(5)\n5-element FillArrays.Ones{Int64,1}:\n 1\n 1\n 1\n 1\n 1\n\njulia> Eye{Int}(5,6)\n5×6 FillArrays.Eye{Int64}:\n 1  0  0  0  0  0\n 0  1  0  0  0  0\n 0  0  1  0  0  0\n 0  0  0  1  0  0\n 0  0  0  0  1  0\n\njulia> Fill(5.0f0, 3)\n3-element FillArrays.Fill{Float32,1}:\n 5.0\n 5.0\n 5.0They support conversion to other matrix types like Array, SparseVector, SparseMatrix, and Diagonal:julia> Matrix(Zeros(5, 5))\n5×5 Array{Float64,2}:\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n\njulia> SparseMatrixCSC(Zeros(5, 5))\n5×5 SparseMatrixCSC{Float64,Int64} with 0 stored entries\n\njulia> Diagonal(Eye(5))\n5×5 Diagonal{Float64}:\n 1.0   ⋅    ⋅    ⋅    ⋅\n  ⋅   1.0   ⋅    ⋅    ⋅\n  ⋅    ⋅   1.0   ⋅    ⋅\n  ⋅    ⋅    ⋅   1.0   ⋅\n  ⋅    ⋅    ⋅    ⋅   1.0"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FillArrays.AbstractFillFillArrays.EyeFillArrays.FillFillArrays.FillArraysFillArrays.OnesFillArrays.ZerosFillArrays.ZerosVecOrMatFillArrays.evalFillArrays.getindex_valueFillArrays.includeFillArrays.mult_zeros"
},

]}
