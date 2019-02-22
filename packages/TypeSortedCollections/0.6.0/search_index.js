var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TypeSortedCollections-1",
    "page": "Readme",
    "title": "TypeSortedCollections",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)TypeSortedCollections provides the TypeSortedCollection type, which can be used to store type-heterogeneous data in a way that allows operations on the data to be performed in a type-stable manner. It does so by sorting a type-heterogeneous input collection by type upon construction, and storing these elements in a Tuple of concretely typed Vectors, one for each type. TypeSortedCollections provides type stable methods for map!, foreach, broadcast!, and mapreduce that take at least one TypeSortedCollection.An example:julia> using TypeSortedCollections\n\njulia> f(x::Int64, y::Float64) = x * y\nf (generic function with 2 methods)\n\njulia> f(x::Float64, y::Float64) = round(Int64, -x * y)\nf (generic function with 2 methods)\n\njulia> xs = Number[1.; 2; 3];\n\njulia> sortedxs = TypeSortedCollection(xs);\n\njulia> ys = [1.; 2.; 3.];\n\njulia> results = Vector{Int64}(length(xs));\n\njulia> map!(f, results, sortedxs, ys)\n3-element Array{Int64,1}:\n -1\n  4\n  9\n\njulia> @allocated map!(f, results, sortedxs, ys)\n0"
},

{
    "location": "#Use-cases-1",
    "page": "Readme",
    "title": "Use cases",
    "category": "section",
    "text": "TypeSortedCollections are appropriate when the number of different types in a heterogeneous collection is (much) smaller than the number of elements of the collection. If the number of types is approximately the same as the number of elements, a plain Tuple may be a better choice.Note that construction of a TypeSortedCollection is of course not type stable, so the intended usage is not to construct TypeSortedCollections in tight loops.See also FunctionWrappers.jl for a solution to the related problem of storing and calling multiple callables in a type-stable manner, and Unrolled.jl for a macro-based solution."
},

{
    "location": "#Iteration-order-1",
    "page": "Readme",
    "title": "Iteration order",
    "category": "section",
    "text": "By default, TypeSortedCollections do not preserve iteration order, in the sense that the order in which elements are processed in map!, foreach, broadcast!, and mapreduce will not be the same as if these functions were called on the original type-heterogeneous vector:julia> xs = Number[1.; 2; 3.];\n\njulia> sortedxs = TypeSortedCollection(xs);\n\njulia> foreach(println, sortedxs)\n1.0\n3.0\n2If this is not desired, a TypeSortedCollection that does preserve iteration order can be constructed by passing in an additional constructor argument:julia> xs = Number[1.; 2; 3.];\n\njulia> sortedxs = TypeSortedCollection(xs, true);\n\njulia> foreach(println, sortedxs)\n1.0\n2\n3.0The cost of preserving iteration order is that the number of Vectors stored in the TypeSortedCollection becomes equal to the number of contiguous subsequences of the input collection that have the same type, as opposed to simply the number of different types in the input collection. Note that calls to map! and foreach with both TypeSortedCollection and AbstractVector arguments are correctly indexed, regardless of whether iteration order is preserved:julia> xs = Number[1.; 2; 3.];\n\njulia> sortedxs = TypeSortedCollection(xs); # doesn\'t preserve iteration order\n\njulia> results = similar(xs);\n\njulia> map!(identity, results, sortedxs) # results of applying `identity` end up in the right location\n3-element Array{Number,1}:\n 1.0\n 2\n 3.0"
},

{
    "location": "#Working-with-multiple-TypeSortedCollections-1",
    "page": "Readme",
    "title": "Working with multiple TypeSortedCollections",
    "category": "section",
    "text": "Consider the following example:julia> xs = Number[Float32(1); 2; 3.; 4.];\n\njulia> ys = Number[1.; 2.; 3; 4];\n\njulia> results = Vector{Float64}(length(xs));\n\njulia> sortedxs = TypeSortedCollection(xs);\n\njulia> sortedys = TypeSortedCollection(ys);\n\njulia> map!(*, results, sortedxs, sortedys) # Error!The error happens because xs and ys don\'t have the same number of different element types. This problem can be solved by aligning the indices of sortedys with those of sortedxs:julia> sortedys = TypeSortedCollection(ys, TypeSortedCollections.indices(sortedxs));\n\njulia> map!(*, results, sortedxs, sortedys)\n4-element Array{Float64,1}:\n  1.0\n  4.0\n  9.0\n 16.0"
},

{
    "location": "#Broadcasting-1",
    "page": "Readme",
    "title": "Broadcasting",
    "category": "section",
    "text": "Broadcasting (in place) is implemented for AbstractVector return types:julia> x = 4;\n\njulia> ys = Number[1.; 2; 3];\n\njulia> sortedys = TypeSortedCollection(ys);\n\njulia> results = similar(ys, Float64);\n\njulia> results .= x .* sortedys\n3-element Array{Float64,1}:\n  4.0\n  8.0\n 12.0\n\njulia> @allocated results .= x .* sortedys\n0"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TypeSortedCollections.TSCOrAbstractVectorTypeSortedCollections.TupleOfVectorsTypeSortedCollections.TypeSortedCollectionTypeSortedCollections.TypeSortedCollectionsTypeSortedCollections.TypeSortedStyleTypeSortedCollections._broadcast!TypeSortedCollections._copy!TypeSortedCollections._getindexTypeSortedCollections._getindex_allTypeSortedCollections._setindex!TypeSortedCollections.eltypesTypeSortedCollections.evalTypeSortedCollections.first_tscTypeSortedCollections.first_tsc_typeTypeSortedCollections.includeTypeSortedCollections.indicesTypeSortedCollections.indices_matchTypeSortedCollections.indices_match_failTypeSortedCollections.lengths_matchTypeSortedCollections.lengths_match_failTypeSortedCollections.num_typesTypeSortedCollections.vectortypes"
},

]}
