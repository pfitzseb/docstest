var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RangeArrays-1",
    "page": "Readme",
    "title": "RangeArrays",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)The goal of RangeArrays is to provide efficient and convenient array data structures where the columns of the arrays are generated (on the fly) by Ranges.Two different types of range matrices are currently supported:RangeMatrix: makes a vector of ranges behave as a matrix; all ranges must be the same length.\nRepeatedRangeMatrix: one range is repeated multiple times at offsets specified in a vector.In all cases, indexing is specialized such that it will return an appropriate range or RangeArray if it can.julia> R = RangeMatrix(1:5,11:15,-2:2)\n5x3 RangeArrays.RangeMatrix{Int64,Array{UnitRange{Int64},1}}:\n 1  11  -2\n 2  12  -1\n 3  13   0\n 4  14   1\n 5  15   2\n\njulia> R[2:3,:]\n2x3 RangeArrays.RangeMatrix{Int64,Array{UnitRange{Int64},1}}:\n 2  12  -1\n 3  13   0\n\njulia> RR = RepeatedRangeMatrix(.1:.1:1.0, [0.0,5.0,-20.2,3.3])\n10x4 RangeArrays.RepeatedRangeMatrix{Float64,FloatRange{Float64},Array{Float64,1}}:\n 0.1  5.1  -20.1  3.4\n 0.2  5.2  -20.0  3.5\n 0.3  5.3  -19.9  3.6\n 0.4  5.4  -19.8  3.7\n 0.5  5.5  -19.7  3.8\n 0.6  5.6  -19.6  3.9\n 0.7  5.7  -19.5  4.0\n 0.8  5.8  -19.4  4.1\n 0.9  5.9  -19.3  4.2\n 1.0  6.0  -19.2  4.3\n\njulia> RR[8:-2:2, end]\n4.1:-0.2:3.5There is a similar structure available in mbauman/RaggedArrays.jl, which allows for ranges of varying lengths."
},

{
    "location": "autodocs/#RangeArrays.RangeMatrix",
    "page": "Docstrings",
    "title": "RangeArrays.RangeMatrix",
    "category": "type",
    "text": "RangeMatrix(rs::AbstractVector{T}) where T <: AbstractRange\n\nA RangeMatrix is a simple matrix representation of a vector of ranges, with each range representing one column. Construct a RangeMatrix with a vector of ranges; the ranges must all have the same length.\n\nNote that it is only efficient when all the ranges are of the same type and in a concretely typed Vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RangeArrays.RepeatedRangeMatrix",
    "page": "Docstrings",
    "title": "RangeArrays.RepeatedRangeMatrix",
    "category": "type",
    "text": "RepeatedRangeMatrix(r::AbstractRange{T}, at::AbstractVector{T}) where T\n\nA RepeatedRange is like a RangeMatrix, except that it only stores one range and a vector of offsets, at which the range repeats. For now, both the range and vector of offsets must have the same element type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RangeArrays.RangeArraysRangeArrays.RangeMatrixRangeArrays.RepeatedRangeMatrixRangeArrays.evalRangeArrays.includeRangeArrays.unsafe_getindex"
},

]}
