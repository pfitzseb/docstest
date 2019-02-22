var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ShiftedArrays-1",
    "page": "Readme",
    "title": "ShiftedArrays",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: ShiftedArrays) (Image: ShiftedArrays)Implementation of shifted arrays."
},

{
    "location": "#Shifted-Arrays-1",
    "page": "Readme",
    "title": "Shifted Arrays",
    "category": "section",
    "text": "A ShiftedArray is a lazy view of an Array, shifted on some or all of his indexing dimensions by some constant values.julia> v = reshape(1:16, 4, 4)\n4×4 Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}:\n 1  5   9  13\n 2  6  10  14\n 3  7  11  15\n 4  8  12  16\n\n julia> s = ShiftedArray(v, (2, 0))\n 4×4 ShiftedArrays.ShiftedArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n   missing   missing    missing    missing\n   missing   missing    missing    missing\n  1         5          9         13       \n  2         6         10         14  The parent Array as well as the amount of shifting can be recovered with parent and shifts respectively.julia> parent(s)\n4×4 Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}:\n 1  5   9  13\n 2  6  10  14\n 3  7  11  15\n 4  8  12  16\n\njulia> shifts(s)\n(2, 0)shifts returns a Tuple, where the n-th element corresponds to the shift on the n-th dimension of the parent Array.Use copy to collect the shifted data into an Array:julia> copy(s)\n4×4 Array{Union{Int64, Missings.Missing},2}:\n  missing   missing    missing    missing\n  missing   missing    missing    missing\n 1         5          9         13       \n 2         6         10         14   If you pass an integer, it will shift in the first dimension:julia> ShiftedArray(v, 1)\n4×4 ShiftedArrays.ShiftedArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n  missing   missing    missing    missing\n 1         5          9         13\n 2         6         10         14\n 3         7         11         15A custom default value (other than missing) can be provided with the default keyword:julia> ShiftedArray([1.2, 3.1, 4.5], 1, default = NaN)\n3-element ShiftedArrays.ShiftedArray{Float64,Float64,1,Array{Float64,1}}:\n NaN\n   1.2\n   3.1"
},

{
    "location": "#Out-of-bound-indexes-1",
    "page": "Readme",
    "title": "Out of bound indexes",
    "category": "section",
    "text": "The bound check is performed only on the parent Array, not on the ShiftedArray, so for example:julia> ShiftedArray([1.2, 3.1, 4.5], 1, default = NaN)[-2:3]\n6-element Array{Float64,1}:\n NaN\n NaN\n NaN\n NaN\n   1.2\n   3.1"
},

{
    "location": "#Shifting-the-data-1",
    "page": "Readme",
    "title": "Shifting the data",
    "category": "section",
    "text": "Using the ShiftedArray type, this package provides two operations for lazily shifting vectors: lag and lead.julia> v = [1, 3, 5, 4];\n\njulia> lag(v)\n4-element ShiftedArrays.ShiftedArray{Int64,1,Array{Int64,1}}:\n  missing\n 1       \n 3       \n 5       \n\njulia> v .- lag(v) # compute difference from previous element without unnecessary allocations\n4-element Array{Any,1}:\n   missing\n  2       \n  2       \n -1       \n\njulia> s = lag(v, 2) # shift by more than one element\n4-element ShiftedArrays.ShiftedArray{Int64,1,Array{Int64,1}}:\n  missing\n  missing\n 1       \n 3lead is the analogous of lag but shifts in the opposite direction:julia> v = [1, 3, 5, 4];\n\njulia> lead(v)\n4-element ShiftedArrays.ShiftedArray{Int64,1,Array{Int64,1}}:\n 3       \n 5       \n 4       \n  missing"
},

{
    "location": "#Shifting-the-data-circularly-1",
    "page": "Readme",
    "title": "Shifting the data circularly",
    "category": "section",
    "text": "Julia Base provides a function circshift to shift the data circularly. However this function creates a copy of the vector, which may be unnecessary if the rotated vector is to be used only once. This package provides the CircShiftedArray type, which is a lazy view of an array shifted on some or all of his indexing dimensions by some constant values.Our implementation of circshift relies on them to avoid copying:julia> w = reshape(1:16, 4, 4);\n\njulia> s = ShiftedArrays.circshift(w, (1, -1))\n4×4 ShiftedArrays.CircShiftedArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n 8  12  16  4\n 5   9  13  1\n 6  10  14  2\n 7  11  15  3As usual, you can copy the result to have a normal Array:julia> copy(s)\n4×4 Array{Int64,2}:\n 8  12  16  4\n 5   9  13  1\n 6  10  14  2\n 7  11  15  3"
},

{
    "location": "#Reducing-your-data-1",
    "page": "Readme",
    "title": "Reducing your data",
    "category": "section",
    "text": "A common pattern, when working with a time dependent variable is to align all vectors on important events and then compute some relevant summary functions (sum, mean, std, etc) or reduce the data using a binary function (+, *, etc...).Let\'s say our data is the vector:data = [1, 3, 5, 6, 7, 9, 16, 2, 3, 4, 7]and our relevant events happen at times:times = [2, 7, 9]Then we should first compute the list of ShiftedArrays:julia> ss = ShiftedArray.((data,), .-times) # You need to subtract the index to center around times\n3-element Array{ShiftedArrays.ShiftedArray{Int64,1,Array{Int64,1}},1}:\n Union{Int64, Missings.Missing}[5, 6, 7, 9, 16, 2, 3, 4, 7, missing, missing]                                         \n Union{Int64, Missings.Missing}[2, 3, 4, 7, missing, missing, missing, missing, missing, missing, missing]            \n Union{Int64, Missings.Missing}[4, 7, missing, missing, missing, missing, missing, missing, missing, missing, missing]Then to compute sum of the values of data in a range of -1:2 aligned around times, we can simply do:julia> reduce(+, ss, -1:2)\n4-element Array{Int64,1}:\n 12\n 22\n 11\n 16mapreduce allows applying a function before the reducing operator. For example, to compute the sum of squares we\'d d:julia> mapreduce(i->i^2, +, ss, -1:2)\n4-element Array{Int64,1}:\n  86\n 274\n  45\n  94Vectorial summary functions (mean, std) can also be used, provided they accept an iterator as argument, example:julia> reduce_vec(std, ss, -1:2)\n4-element Array{Float64,1}:\n 4.3589\n 7.50555\n 1.52753\n 2.08167As before, mapreduce_vec allows passing a preprocessing function before reducing, for example to compute the mean of the squares, simply run:julia> mapreduce_vec(i->i^2, mean, ss, -1:2)\n4-element Array{Float64,1}:\n 28.6667\n 91.3333\n 15.0   \n 31.3333"
},

{
    "location": "#Filtering-1",
    "page": "Readme",
    "title": "Filtering",
    "category": "section",
    "text": "To exclude some of the data before reducing it (missing is excluded by default, but maybe you want to filter for isfinite or !isnan) use the filter keyword:mapreduce_vec(f, g, s, range, filter = isfinite)"
},

{
    "location": "#Collecting-a-vector-of-ShiftedArrays-into-an-(Offset)Array-1",
    "page": "Readme",
    "title": "Collecting a vector of ShiftedArrays into an (Offset)Array",
    "category": "section",
    "text": "To collect a Vector of ShiftedArrays into a normal Array, simply:ShiftedArray.to_array(s, inds...)where you need as many inds as the dimensions of your ShiftedArrays. The output Array first few dimensions will be indexed by inds (though starting from 1) and the last one will correspond to the index of the ShiftedArray within the Array of ShiftedArrays.Similarly, to collect a Vector of ShiftedArrays into an OffseyArray (if you want to preserve the inds as offset indices), simply:ShiftedArray.to_offsetarray(s, inds...)The output OffsetArray first few dimensions will be indexed by inds and the last one will correspond to the index of the ShiftedArray within the Array of ShiftedArrays."
},

{
    "location": "#Warning-1",
    "page": "Readme",
    "title": "Warning",
    "category": "section",
    "text": "This package uses Missings for missing data. Missings are known to be inefficient in Julia 0.6, but should work better in Julia 1.0."
},

{
    "location": "autodocs/#ShiftedArrays.CircShiftedArray",
    "page": "Docstrings",
    "title": "ShiftedArrays.CircShiftedArray",
    "category": "type",
    "text": "CircShiftedArray(parent::AbstractArray, shifts)\n\nCustom AbstractArray object to store an AbstractArray parent circularly shifted by shifts steps (where shifts is a Tuple with one shift value per dimension of parent). Use copy to collect the values of a CircShiftedArray into a normal Array.\n\nExamples\n\njulia> v = [1, 3, 5, 4];\n\njulia> s = CircShiftedArray(v, (1,))\n4-element ShiftedArrays.CircShiftedArray{Int64,1,Array{Int64,1}}:\n 4\n 1\n 3\n 5\n\njulia> copy(s)\n4-element Array{Int64,1}:\n 4\n 1\n 3\n 5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.CircShiftedVector",
    "page": "Docstrings",
    "title": "ShiftedArrays.CircShiftedVector",
    "category": "type",
    "text": "CircShiftedVector{T, S<:AbstractArray}\n\nShorthand for CircShiftedArray{T, 1, S}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.ShiftedArray",
    "page": "Docstrings",
    "title": "ShiftedArrays.ShiftedArray",
    "category": "type",
    "text": "ShiftedArray(parent::AbstractArray, shifts, default)\n\nCustom AbstractArray object to store an AbstractArray parent shifted by shifts steps (where shifts is a Tuple with one shift value per dimension of parent). For s::ShiftedArray, s[i...] == s.parent[map(-, i, s.shifts)...] if map(-, i, s.shifts) is a valid index for s.parent, and s.v[i, ...] == default otherwise. Use copy to collect the values of a ShiftedArray into a normal Array. The recommended constructor is ShiftedArray(parent, shifts; default = missing)\n\nExamples\n\njulia> v = [1, 3, 5, 4];\n\njulia> s = ShiftedArray(v, (1,))\n4-element ShiftedArrays.ShiftedArray{Int64,Missings.Missing,1,Array{Int64,1}}:\n  missing\n 1\n 3\n 5\n\njulia> v = [1, 3, 5, 4];\n\njulia> s = ShiftedArray(v, (1,))\n4-element ShiftedArrays.ShiftedArray{Int64,Missings.Missing,1,Array{Int64,1}}:\n  missing\n 1\n 3\n 5\n\njulia> copy(s)\n4-element Array{Union{Int64, Missings.Missing},1}:\n  missing\n 1\n 3\n 5\n\njulia> v = reshape(1:16, 4, 4);\n\njulia> s = ShiftedArray(v, (0, 2))\n4×4 ShiftedArrays.ShiftedArray{Int64,Missings.Missing,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n missing  missing  1  5\n missing  missing  2  6\n missing  missing  3  7\n missing  missing  4  8\n\njulia> shifts(s)\n(0, 2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.ShiftedVector",
    "page": "Docstrings",
    "title": "ShiftedArrays.ShiftedVector",
    "category": "type",
    "text": "ShiftedVector{T, S<:AbstractArray}\n\nShorthand for ShiftedArray{T, 1, S}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.circshift",
    "page": "Docstrings",
    "title": "ShiftedArrays.circshift",
    "category": "function",
    "text": "circshift(v::AbstractArray, n)\n\nReturn a CircShiftedArray object, with underlying data v. The second argument gives the amount to circularly shift in each dimension. If it is an integer, it is assumed to refer to the first dimension.\n\nExamples\n\njulia> v = [1, 3, 5, 4];\n\njulia> ShiftedArrays.circshift(v, 1)\n4-element ShiftedArrays.CircShiftedArray{Int64,1,Array{Int64,1}}:\n 4\n 1\n 3\n 5\n\njulia> w = reshape(1:16, 4, 4);\n\njulia> ShiftedArrays.circshift(w, (1, -1))\n4×4 ShiftedArrays.CircShiftedArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n 8  12  16  4\n 5   9  13  1\n 6  10  14  2\n 7  11  15  3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.default",
    "page": "Docstrings",
    "title": "ShiftedArrays.default",
    "category": "function",
    "text": "default(s::ShiftedArray)\n\nReturns default value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.lag",
    "page": "Docstrings",
    "title": "ShiftedArrays.lag",
    "category": "function",
    "text": "lag(v::AbstractArray, n = 1; default = missing)\n\nReturn a ShiftedArray object, with underlying data v. The second argument gives the amount to shift in each dimension. If it is an integer, it is assumed to refer to the first dimension. default specifies a default value when you are out of bounds.\n\nExamples\n\njulia> v = [1, 3, 5, 4];\n\njulia> lag(v)\n4-element ShiftedArrays.ShiftedArray{Int64,Missings.Missing,1,Array{Int64,1}}:\n  missing\n 1\n 3\n 5\n\njulia> w = 1:2:9\n1:2:9\n\njulia> s = lag(w, 2)\n5-element ShiftedArrays.ShiftedArray{Int64,Missings.Missing,1,StepRange{Int64,Int64}}:\n  missing\n  missing\n 1\n 3\n 5\n\njulia> copy(s)\n5-element Array{Union{Int64, Missings.Missing},1}:\n  missing\n  missing\n 1\n 3\n 5\n\njulia> v = reshape(1:16, 4, 4);\n\njulia> s = lag(v, (0, 2))\n4×4 ShiftedArrays.ShiftedArray{Int64,Missings.Missing,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n missing  missing  1  5\n missing  missing  2  6\n missing  missing  3  7\n missing  missing  4  8\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.lead",
    "page": "Docstrings",
    "title": "ShiftedArrays.lead",
    "category": "function",
    "text": "lead(v::AbstractArray, n = 1; default = missing)\n\nReturn a ShiftedArray object, with underlying data v. The second argument gives the amount to shift negatively in each dimension. If it is an integer, it is assumed to refer to the first dimension. default specifies a default value when you are out of bounds.\n\nExamples\n\njulia> v = [1, 3, 5, 4];\n\njulia> lead(v)\n4-element ShiftedArrays.ShiftedArray{Int64,Missings.Missing,1,Array{Int64,1}}:\n 3\n 5\n 4\n  missing\n\njulia> w = 1:2:9\n1:2:9\n\njulia> s = lead(w, 2)\n5-element ShiftedArrays.ShiftedArray{Int64,Missings.Missing,1,StepRange{Int64,Int64}}:\n 5\n 7\n 9\n  missing\n  missing\n\njulia> copy(s)\n5-element Array{Union{Int64, Missings.Missing},1}:\n 5\n 7\n 9\n  missing\n  missing\n\njulia> v = reshape(1:16, 4, 4);\n\njulia> s = lead(v, (0, 2))\n4×4 ShiftedArrays.ShiftedArray{Int64,Missings.Missing,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n  9  13  missing  missing\n 10  14  missing  missing\n 11  15  missing  missing\n 12  16  missing  missing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.mapreduce_vec",
    "page": "Docstrings",
    "title": "ShiftedArrays.mapreduce_vec",
    "category": "function",
    "text": "mapreduce_vec(g, f, ss::AbstractArray{<:ShiftedVector}, args...; default = missing, filter = t->true, dropmissing = true)\n\nAlign all vectors in ss. For each of the indices in args, extract the collection of elements corresponding to that index, apply g and reduce using f. f is any function that takes an iterable as input and outputs a scalar, such as mean. Indices for which the iterable is empty will return default.\n\nExamples\n\njulia> v = [1, 3, 5, 9, 6, 7];\n\njulia> ss = ShiftedArray.((v,), [-2, -4])\n2-element Array{ShiftedArrays.ShiftedArray{Int64,Missings.Missing,1,Array{Int64,1}},1}:\n Union{Int64, Missings.Missing}[5, 9, 6, 7, missing, missing]\n Union{Int64, Missings.Missing}[6, 7, missing, missing, missing, missing]\n\njulia> mapreduce_vec(log, mean, ss, 1:2)\n2-element Array{Float64,1}:\n 1.7006\n 2.07157\n\njulia> mapreduce_vec(log, mean, ss, -5:2)\n8-element Array{Any,1}:\n  missing\n  missing\n 0.0\n 1.09861\n 0.804719\n 1.64792\n 1.7006\n 2.07157\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.reduce_vec",
    "page": "Docstrings",
    "title": "ShiftedArrays.reduce_vec",
    "category": "function",
    "text": "reduce_vec(f, ss::AbstractArray{<:ShiftedVector}, args...; default = missing, filter = t->true, dropmissing = true)\n\nAlign all vectors in ss. For each of the indices in args, extract the collection of elements corresponding to that index and reduce using f. f is any function that takes an iterable as input and outputs a scalar, such as mean. Indices for which the iterable is empty will return default.\n\nExamples\n\njulia> v = [1, 3, 5, 9, 6, 7];\n\njulia> ss = ShiftedArray.((v,), [-2, -4])\n2-element Array{ShiftedArrays.ShiftedArray{Int64,Missings.Missing,1,Array{Int64,1}},1}:\n Union{Int64, Missings.Missing}[5, 9, 6, 7, missing, missing]\n Union{Int64, Missings.Missing}[6, 7, missing, missing, missing, missing]\n\njulia> reduce_vec(mean, ss, 1:2)\n2-element Array{Float64,1}:\n 5.5\n 8.0\n\njulia> reduce_vec(mean, ss, -5:2)\n8-element Array{Any,1}:\n  missing\n  missing\n 1.0\n 3.0\n 3.0\n 6.0\n 5.5\n 8.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.shifts",
    "page": "Docstrings",
    "title": "ShiftedArrays.shifts",
    "category": "function",
    "text": "shifts(s::ShiftedArray)\n\nReturns amount by which s is shifted compared to parent(s).\n\n\n\n\n\nshifts(s::CircShiftedArray)\n\nReturns amount by which s is shifted compared to parent(s).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.to_array",
    "page": "Docstrings",
    "title": "ShiftedArrays.to_array",
    "category": "function",
    "text": "to_array(ss::AbstractArray{<:AbstractArray{<:Any, N}}, I::Vararg{<:AbstractArray, N}) where N\n\nCollect a AbstractArray of AbstractArrays into a normal Array selecting indices I (can take negative values if inner AbstractArrays allow it). The output Array first few dimensions will be indexed by I (though starting from 1) and the last one will correspond to the index of the inner AbstractArray within the AbstractArray of AbstractArrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ShiftedArrays.to_offsetarray",
    "page": "Docstrings",
    "title": "ShiftedArrays.to_offsetarray",
    "category": "function",
    "text": "to_offsetarray(ss::AbstractArray{<:AbstractArray{<:Any, N}}, I::Vararg{<:AbstractArray, N}) where N\n\nCollect a AbstractArray of ShiftedArrays into an OffsetArray selecting indices I (can take negative values if inner AbstractArrays allow it). The output OffsetArray first few dimensions will be indexed by I and the last one will correspond to the index of the inner AbstractArray within the AbstractArray of AbstractArrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ShiftedArrays.CircShiftedArrayShiftedArrays.CircShiftedVectorShiftedArrays.ShiftedArrayShiftedArrays.ShiftedArraysShiftedArrays.ShiftedVectorShiftedArrays._mapreduceShiftedArrays._mapreduce_vecShiftedArrays._padded_tupleShiftedArrays._shifted_betweenShiftedArrays.circshiftShiftedArrays.defaultShiftedArrays.evalShiftedArrays.get_circshifted_indexShiftedArrays.includeShiftedArrays.lagShiftedArrays.leadShiftedArrays.mapreduce_vecShiftedArrays.reduce_vecShiftedArrays.shiftsShiftedArrays.to_arrayShiftedArrays.to_offsetarray"
},

]}
