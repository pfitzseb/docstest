var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RecursiveArrayTools.jl-1",
    "page": "Readme",
    "title": "RecursiveArrayTools.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)RecursiveArrayTools.jl is a set of tools for dealing with recursive arrays like arrays of arrays. The current functionality includes:"
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": ""
},

{
    "location": "#VectorOfArray-1",
    "page": "Readme",
    "title": "VectorOfArray",
    "category": "section",
    "text": "VectorOfArray(u::AbstractVector)A VectorOfArray is an array which has the underlying data structure Vector{AbstractArray{T}} (but hopefully concretely typed!). This wrapper over such data structures allows one to lazily act like it\'s a higher dimensional vector, and easily convert to different forms. The indexing structure is:A[i] # Returns the ith array in the vector of arrays\nA[j,i] # Returns the jth component in the ith array\nA[j1,...,jN,i] # Returns the (j1,...,jN) component of the ith arraywhich presents itself as a column-major matrix with the columns being the arrays from the vector. The AbstractArray interface is implemented, giving access to copy, push, append!, etc. function which act appropriate. Points to note are:The length is the number of vectors, or length(A.u) where u is the vector of arrays.\nIteration follows the linear index and goes over the vectorsAdditionally, the convert(Array,VA::AbstractVectorOfArray) function is provided which transforms the VectorOfArray into a matrix/tensor. Also, vecarr_to_vectors(VA::AbstractVectorOfArray) returns a vector of the series for each component, that is A[i,:] for each i. A plot recipe is provided which plots the A[i,:] series."
},

{
    "location": "#DiffEqArray-1",
    "page": "Readme",
    "title": "DiffEqArray",
    "category": "section",
    "text": "Related to the VectorOfArray is the DiffEqArrayDiffEqArray(u::AbstractVector,t::AbstractVector)This is a VectorOfArray which stores A.t which matches A.u. This will plot (A.t[i],A[i,:]). The function tuples(diffeq_arr) returns tuples of (t,u)."
},

{
    "location": "#ArrayPartition-1",
    "page": "Readme",
    "title": "ArrayPartition",
    "category": "section",
    "text": "ArrayPartition(x::AbstractArray...)An ArrayPartition A is an array which is made up of different arrays A.x. These index like a single array, but each subarray may have a different type. However, broadcast is overloaded to loop in an efficient manner, meaning that A .+= 2.+B is type-stable in its computations, even if A.x[i] and A.x[j] do not match types. A full array interface is included for completeness, which allows this array type to be used in place of a standard array in places where such a type stable broadcast may be needed. One example is in heterogeneous differential equations for DifferentialEquations.jl.An ArrayPartition acts like a single array. A[i] indexes through the first array, then the second, etc. all linearly. But A.x is where the arrays are stored. Thus forusing RecursiveArrayTools\nA = ArrayPartition(y,z)We would have A.x[1]==y and A.x[2]==z. Broadcasting like f.(A) is efficient."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "recursivecopy!(b::Array{T,N},a::Array{T,N})A recursive copy! function. Acts like a deepcopy! on arrays of arrays, but like copy! on arrays of scalars.convert(Array,vecvec)Technically just a Base fallback that works well. Takes in a vector of arrays, returns an array of dimension one greater than the original elements. Works on AbstractVectorOfArray. If the vecvec is ragged, i.e. not all of the elements are the same, then it uses the size of the first element to determine the conversion.vecvecapply(f::Base.Callable,v)Calls f on each element of a vecvec v.copyat_or_push!{T}(a::AbstractVector{T},i::Int,x)If i<length(x), it\'s simply a recursivecopy! to the ith element. Otherwise it will push! a deepcopy.recursive_one(a)Calls one on the bottom container to get the \"true element one type\"mean{T<:AbstractArray}(vecvec::Vector{T})\nmean{T<:AbstractArray}(matarr::Matrix{T},region=0)Generalized mean functions for vectors of arrays and matrix of arrays."
},

{
    "location": "autodocs/#RecursiveArrayTools.chain",
    "page": "Docstrings",
    "title": "RecursiveArrayTools.chain",
    "category": "function",
    "text": "chain(xs...)\n\nIterate through any number of iterators in sequence.\n\njulia> for i in chain(1:3, [\'a\', \'b\', \'c\'])\n           @show i\n       end\ni = 1\ni = 2\ni = 3\ni = \'a\'\ni = \'b\'\ni = \'c\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecursiveArrayTools.npartitions",
    "page": "Docstrings",
    "title": "RecursiveArrayTools.npartitions",
    "category": "function",
    "text": "npartitions(A...)\n\nRetrieve number of partitions of ArrayPartitions in A..., or throw an error if there are ArrayPartitions with a different number of partitions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RecursiveArrayTools.AbstractDiffEqArrayRecursiveArrayTools.AbstractVectorOfArrayRecursiveArrayTools.ArrayPartitionRecursiveArrayTools.ArrayPartitionStyleRecursiveArrayTools.ChainRecursiveArrayTools.DiffEqArrayRecursiveArrayTools.RecursiveArrayToolsRecursiveArrayTools.VectorOfArrayRecursiveArrayTools._npartitionsRecursiveArrayTools.chainRecursiveArrayTools.combine_stylesRecursiveArrayTools.common_numberRecursiveArrayTools.copyat_or_push!RecursiveArrayTools.evalRecursiveArrayTools.includeRecursiveArrayTools.npartitionsRecursiveArrayTools.recursive_bottom_eltypeRecursiveArrayTools.recursive_eltypeRecursiveArrayTools.recursive_meanRecursiveArrayTools.recursive_oneRecursiveArrayTools.recursive_unitless_bottom_eltypeRecursiveArrayTools.recursive_unitless_eltypeRecursiveArrayTools.recursivecopyRecursiveArrayTools.recursivecopy!RecursiveArrayTools.tuplesRecursiveArrayTools.unpackRecursiveArrayTools.unpack_argsRecursiveArrayTools.vecarr_to_arrRecursiveArrayTools.vecarr_to_vectorsRecursiveArrayTools.vecvec_to_matRecursiveArrayTools.vecvecapply"
},

]}
