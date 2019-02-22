var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SymmetricTensors.jl-1",
    "page": "Readme",
    "title": "SymmetricTensors.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: DOI)SymmetricTensors.jl provides the SymmetricTensors{T, N} type used to store fully symmetric tensors in more efficient way, without most of redundant repetitions. It uses blocks of Array{T, N} stored in Union{Array{Float,N}, Nothing} structure. Repeated blocks are replaced by Void. The module introduces SymmetricTensors{T, N} type and some basic operations on this type. As of 01/01/2017 @kdomino is the lead maintainer of this package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, just use runpkg> add SymmetricTensorsto install the files. Julia 0.6 or later is required."
},

{
    "location": "#Constructor-1",
    "page": "Readme",
    "title": "Constructor",
    "category": "section",
    "text": "julia> data = ones(4,4);\n\n\njulia> SymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[1.0 1.0; 1.0 1.0] [1.0 1.0; 1.0 1.0]; nothing [1.0 1.0; 1.0 1.0]], 2, 2, 4, true)\n\n"
},

{
    "location": "#Converting-1",
    "page": "Readme",
    "title": "Converting",
    "category": "section",
    "text": "From Array{T, N} to SymmetricTensors{T, N}julia> SymmetricTensors(data::Array{T, N}, bls::Int = 2)where bls is the size of a blockjulia> data = ones(4,4);\n\n\njulia> convert(SymmetricTensor, data, 2)\nSymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[1.0 1.0; 1.0 1.0] [1.0 1.0; 1.0 1.0]; nothing [1.0 1.0; 1.0 1.0]], 2, 2, 4, true)\nFrom SymmetricTensors{T, N} to Array{T, N}julia> Array(st::SymmetricTensors{T, N})"
},

{
    "location": "#Fields-1",
    "page": "Readme",
    "title": "Fields",
    "category": "section",
    "text": "frame::ArrayNArrays{T,N}: stores data, where ArrayNArrays{T,N} = Array{Union{Array{T, N}, Nothing}, N}\nbls::Int: size of a block,\nbln::Int: number of blocks,\ndats::Int: size of data,\nsqr::Bool: shows if the last block is squared."
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "Elementwise addition: +, - is supported between many SymmetricTensors{T, N} while elementwise substraction: - between two SymmetricTensors{T, N}. Addition substraction multiplication and division +, -, *, / is supported between SymmetricTensors{T, N} and a number. julia> x = SymmetricTensor(ones(4,4));\n\njulia> y = SymmetricTensor(2*ones(4,4));\n\njulia> x+y\nSymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[3.0 3.0; 3.0 3.0] [3.0 3.0; 3.0 3.0]; #undef [3.0 3.0; 3.0 3.0]], 2, 2, 4, true)\n\njulia> x*10\nSymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[10.0 10.0; 10.0 10.0] [10.0 10.0; 10.0 10.0]; #undef [10.0 10.0; 10.0 10.0]], 2, 2, 4, true)The function diag returns a Vector{T}, of all super-diagonal elements of a SymmetricTensor.julia> data = ones(5,5,5,5);\n\njulia> st = SymmetricTensor(data);\n\njulia> diag(st)\n5-element Array{Float64,1}:\n 1.0\n 1.0\n 1.0\n 1.0\n 1.0"
},

{
    "location": "#Random-Symmetric-Tensor-generation-1",
    "page": "Readme",
    "title": "Random Symmetric Tensor generation",
    "category": "section",
    "text": "To generate random Symmetric Tensor with random elements of typer T form a uniform distribution on [0,1) use rand(SymmetricTensor{T, N}, n::Int, b::Int = 2). Here n denotes data size and b denotes block size.julia> using Random\n\njulia> Random.seed!(42)\n\njulia> rand(SymmetricTensor{Float64, 2}, 2)\nSymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[0.533183 0.454029; 0.454029 0.0176868]], 2, 1, 2, true)\n"
},

{
    "location": "#getindex-and-setindex!-1",
    "page": "Readme",
    "title": "getindex and setindex!",
    "category": "section",
    "text": "julia> using Random\n\njulia> Random.seed!(42)\n\njulia> st = rand(SymmetricTensor{Float64, 2}, 2)\nSymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[0.533183 0.454029; 0.454029 0.0176868]], 2, 1, 2, true)\n\njulia> st[1,2]\n0.4540291355871424\n\njulia> st[2,1]\n0.4540291355871424setindex!(st::SymmetricTensor, x::Float, mulind::Int...) changes all symmetric tensor\'s elements indexed by mulind to x.julia> st[1,2] = 10.\n\njulia> convert(Array, st)\n2×2 Array{Float64,2}:\n  0.533183  10.0      \n 10.0        0.0176868\n"
},

{
    "location": "#Auxiliary-function-1",
    "page": "Readme",
    "title": "Auxiliary function",
    "category": "section",
    "text": "julia> unfold(data::Array{T,N}, mode::Int)unfolds data in a given modejulia> a = reshape(collect(1.:8.), (2,2,2))\n2×2×2 Array{Float64,3}:\n[:, :, 1] =\n 1.0  3.0\n 2.0  4.0\n\n[:, :, 2] =\n 5.0  7.0\n 6.0  8.0\n\njulia> unfold(a, 1)\n2×4 Array{Float64,2}:\n 1.0  3.0  5.0  7.0\n 2.0  4.0  6.0  8.0\n\njulia> unfold(a, 2)\n2×4 Array{Float64,2}:\n 1.0  2.0  5.0  6.0\n 3.0  4.0  7.0  8.0\n\njulia> unfold(a, 3)\n2×4 Array{Float64,2}:\n 1.0  2.0  3.0  4.0\n 5.0  6.0  7.0  8.0This project was partially financed by the National Science Centre, Poland – project number 2014/15/B/ST6/05204."
},

{
    "location": "autodocs/#SymmetricTensors.SymmetricTensor",
    "page": "Docstrings",
    "title": "SymmetricTensors.SymmetricTensor",
    "category": "type",
    "text": "Type constructor\n\nframe - stores ArrayNArrays{T,N} bls - Int, size of ordinary block bln - Int, number of blocks datasize - Int, size of data stored (in each direction the same) sqr - Bool, is the last block size a same as ordinary\'s block size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.diag",
    "page": "Docstrings",
    "title": "SymmetricTensors.diag",
    "category": "function",
    "text": "diag(st::SymmetricTensor{N})\n\nReturn vector of floats, the super-diag of st\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.fixpointperms",
    "page": "Docstrings",
    "title": "SymmetricTensors.fixpointperms",
    "category": "function",
    "text": "fixpointperms(j::NTuple{N, Int}) where N\n\nReturns Vactor{Vector}, a fix point permutation of given multiindex\n\nTODO: this is a naive implementation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.frtest",
    "page": "Docstrings",
    "title": "SymmetricTensors.frtest",
    "category": "function",
    "text": "frtest(data::ArrayNArrays{T,N})\n\nReturns assertion error if: all sizes of nullable array not equal, at least   some undergiagonal block not null, some blocks (not last) not squared,   some diagonal blocks not symmetric.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.getblock",
    "page": "Docstrings",
    "title": "SymmetricTensors.getblock",
    "category": "function",
    "text": "getblock(st::SymmetricTensor, i::Tuple)\n\nReturns a block from Symmetric Tensor, works for all multi-indices also not sorted\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.getblockunsafe",
    "page": "Docstrings",
    "title": "SymmetricTensors.getblockunsafe",
    "category": "function",
    "text": "getblockunsafe(st::SymmetricTensor, i::Tuple)\n\nReturns a block from Symmetric Tensor, unsafe works only if multi-index is sorted\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.ind2range",
    "page": "Docstrings",
    "title": "SymmetricTensors.ind2range",
    "category": "function",
    "text": "ind2range(i::Int, bls::Int, dats::Int)\n\nReturns a range given index i, size of a block and size of data\n\njulia> ind2range(2,3,5)\n4:5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.issymetric",
    "page": "Docstrings",
    "title": "SymmetricTensors.issymetric",
    "category": "function",
    "text": "issymetric(ar::Array{N}, atol::Float64)\n\nReturns: Assertion Error if not symmetric given a tolerance.\n\njulia> A = reshape(collect(1.:8.), 2, 2, 2);\n\njulia> julia> issymetric(A)\nERROR: AssertionError: not symmetric\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.pyramidindices",
    "page": "Docstrings",
    "title": "SymmetricTensors.pyramidindices",
    "category": "function",
    "text": "pyramidindices(dims::Int, tensize::Int)\n\njulia> pyramidindices(2,3)\n6-element Array{Tuple{Int64,Int64},1}:\n (1,1)\n (1,2)\n (1,3)\n (2,2)\n (2,3)\n (3,3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.rand",
    "page": "Docstrings",
    "title": "Base.rand",
    "category": "function",
    "text": "rand(SymmetricTensor{T, N}, n::Int, b::Int = 2)\n\nReturns N-dimensional random SymmetricTensor with elements of type T drawn from uniform distribution on [0,1), n denotes data size and b denotes block size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.randblock",
    "page": "Docstrings",
    "title": "SymmetricTensors.randblock",
    "category": "function",
    "text": "randblock(::Type{T}, dims::NTuple{N, Int}, j::NTuple{N, Int})\n\nReturns a block of size dims and position j by a uniformly distributed random number of type T\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.randsymarray",
    "page": "Docstrings",
    "title": "SymmetricTensors.randsymarray",
    "category": "function",
    "text": "randsymarray(T, dim ::Int, N::Int = 4)\n\nReturns N-dimmensional random super-symmetric array with elements of type T drawn from uniform distribution on [0,1), dim denotes data size.\n\n\n\n\n\nrandsymarray(T, dim::Int, N::Int = 4)\n\nReturns N-dimmensional random super-symmetric array with Float64 elements drawn from uniform distribution on [0,1), dim denotes data size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.setindex!",
    "page": "Docstrings",
    "title": "Base.setindex!",
    "category": "function",
    "text": "setindex!(st::SymmetricTensor{T,N}, x::T,  mulind::Int...)\n\nChange a SymmetricTensors value at the given multi-index\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.setindexunsafe!",
    "page": "Docstrings",
    "title": "SymmetricTensors.setindexunsafe!",
    "category": "function",
    "text": "setindexunsafe!(st::SymmetricTensor{T,N}, x::T,  mulind::Int...)\n\nUnsafe change a SymmetricTensors value at the given multi-index\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.sizetest",
    "page": "Docstrings",
    "title": "SymmetricTensors.sizetest",
    "category": "function",
    "text": "sizetest(dats::Int, bls::Int)\n\nReturns: DimensionMismatch if blocks size is grater than data size.\n\njulia> SymmetricTensors.sizetest(2,3)\nERROR: DimensionMismatch(\"bad block size 3 > 2\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymmetricTensors.unfold",
    "page": "Docstrings",
    "title": "SymmetricTensors.unfold",
    "category": "function",
    "text": "unfold(ar::Array{N}, mode::Int)\n\nReturns an matrix being an unfold of N dims array in given mode.\n\njulia> A = reshape(collect(1.:8.), 2, 2, 2);\n\njulia> unfold(A, 1)\n2×4 Array{Float64,2}:\n 1.0  3.0  5.0  7.0\n 2.0  4.0  6.0  8.0\n\n julia> unfold(A, 2)\n 2×4 Array{Float64,2}:\n  1.0  2.0  5.0  6.0\n  3.0  4.0  7.0  8.0\n\n  julia> unfold(A, 3)\n  2×4 Array{Float64,2}:\n   1.0  2.0  3.0  4.0\n   5.0  6.0  7.0  8.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SymmetricTensors.*SymmetricTensors.+SymmetricTensors.-SymmetricTensors./SymmetricTensors.ArrayNArraysSymmetricTensors.SymmetricTensorSymmetricTensors.SymmetricTensorsSymmetricTensors.arraynarraysSymmetricTensors.convertSymmetricTensors.diagSymmetricTensors.evalSymmetricTensors.fixpointpermsSymmetricTensors.frtestSymmetricTensors.getblockSymmetricTensors.getblockunsafeSymmetricTensors.includeSymmetricTensors.ind2rangeSymmetricTensors.issymetricSymmetricTensors.pyramidindicesSymmetricTensors.randSymmetricTensors.randblockSymmetricTensors.randsymarraySymmetricTensors.setindex!SymmetricTensors.setindexunsafe!SymmetricTensors.sizetestSymmetricTensors.unfold"
},

]}
