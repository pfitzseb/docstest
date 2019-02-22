var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Split,-apply,-combine-1",
    "page": "Readme",
    "title": "Split, apply, combine",
    "category": "section",
    "text": "Strategies for nested data in Julia(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)SplitApplyCombine.jl provides high-level, generic tools for manipulating data - particularly focussing on data in nested containers. An emphasis is placed on ensuring split-apply-combine strategies are easy to apply, and work reliably for arbitrary iterables and in an optimized way with the data structures included in Julia\'s standard library.The tools come in the form of high-level functions that operate on iterable or indexable containers in an intuitive and simple way, extending Julia\'s in-built map, reduce and filter commands to a wider range of operations. Just like these Base functions, the functions here like invert, group and innerjoin are able to be overloaded and optimized by users and the maintainers of other packages for their own, custom data containers.One side goal is to provide sufficient functionality to satisfy the need to manipulate \"relational\" data (meaning tables and dataframes) with basic in-built Julia data containers like Vectors of NamedTuples and higher-level functions in a \"standard\" Julia style. Pay particular to the invert family of functions, which effectively allows you to switch between a \"struct-of-arrays\" and an \"array-of-structs\" interpretation of your data. I am exploring the idea of using arrays of named tuples for a fast table package in another package under development called MinimumViableTables), which adds acceleration indexes but otherwise attempts to use a generic \"native Julia\" interface."
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "You can install the package by typing Pkg.clone(\"https://github.com/JuliaData/SplitApplyCombine.jl\") at the REPL.Below are some simple examples of how a select subset of the tools can be used to split, manipulate, and combine data. A complete API reference is included at the end of this README.julia> using SplitApplyCombine\n\njulia> single([3]) # return the one-and-only element of the input\n3\n\njulia> splitdims([1 2 3; 4 5 6]) # create nested arrays\n3-element Array{Array{Int64,1},1}:\n [1, 4]\n [2, 5]\n [3, 6]\n\njulia> combinedims([[1, 4], [2, 5], [3, 6]]) # flatten nested arrays\n2×3 Array{Int64,2}:\n 1  2  3\n 4  5  6\n\n julia> invert([[1,2,3],[4,5,6]]) # invert the order of nesting\n3-element Array{Array{Int64,1},1}:\n [1, 4]\n [2, 5]\n [3, 6]\n\njulia> group(iseven, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) # split elements into groups\nDict{Bool,Array{Int64,1}} with 2 entries:\n  false => [1, 3, 5, 7, 9]\n  true  => [2, 4, 6, 8, 10]\n\njulia> groupreduce(iseven, +, 1:10) # like above, but performing reduction\nDict{Bool,Int64} with 2 entries:\n  false => 25\n  true  => 30\n\njulia> innerjoin(iseven, iseven, tuple, [1,2,3,4], [0,1,2]) # combine two datasets - related to SQL `inner join`\n6-element Array{Tuple{Int64,Int64},1}:\n (1, 1)\n (2, 0)\n (2, 2)\n (3, 1)\n (4, 0)\n (4, 2)\n\njulia> leftgroupjoin(iseven, iseven, tuple, [1,2,3,4], [0,1,2]) # efficient groupings from two datasets\nDict{Bool,Array{Tuple{Int64,Int64},1}} with 2 entries:\n  false => Tuple{Int64,Int64}[(1, 1), (3, 1)]\n  true  => Tuple{Int64,Int64}[(2, 0), (2, 2), (4, 0), (4, 2)]"
},

{
    "location": "#Tabular-data-1",
    "page": "Readme",
    "title": "Tabular data",
    "category": "section",
    "text": "The primary interface for manipulating tabular data is the relational algebra. A relation is typically defined as an (unordered) collection of (unique) (named) tuples.  If relations are collections of rows, and tables are to be viewed as relations, then I suggest that tables should be viewed as collections of rows (and in particular they should iterate rows and return an entire row from getindex, if defined).While simple, this already allows quite a bit of relational algebra to occur. One can then filter rows of a table, map rows of a table (to project, rename or create columns), and use zip and product iterables for more complex operations. The goal below will be to discuss functions which work well for general iterables and will be useful for a table that iterates rows. As a prototype to keep in mind for this work, I consider an  AbstractVector{<:NamedTuple} to be a good model of (strongly-typed) a table/dataframe. Specialized packages may provide convenient macro-based DSLs, a greater range of functions, and implementations that focus on things such as out-of-core or distributed computing, more flexible acceleration indexing, etc. Here I\'m only considering the basic, bare-bones API that may be extended and built upon by other packages."
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "This package is nascent and many of the APIs here should be considered \"under development\" for the time being. Many of the functions so far are inspired by other systems, such as LINQ. The package current supports Julia v0.6 and v0.7/v1.0. Contributions and ideas very welcome."
},

{
    "location": "#API-reference-1",
    "page": "Readme",
    "title": "API reference",
    "category": "section",
    "text": "The package currently implements and exports single, splitdims, splitdimsview, combinedims, combinedimsview, mapmany, flatten, group, groupinds, groupview, groupreduce, innerjoin and leftgroupjoin, as well as the @_ macro. Expect this list to grow."
},

{
    "location": "#Generic-operations-on-collections-1",
    "page": "Readme",
    "title": "Generic operations on collections",
    "category": "section",
    "text": ""
},

{
    "location": "#single(iter)-1",
    "page": "Readme",
    "title": "single(iter)",
    "category": "section",
    "text": "Returns the single, one-and-only element of the collection iter. If it contains zero elements or more than one element, an error is thrown."
},

{
    "location": "#Example:-1",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> single([3])\n3\n\njulia> single([])\nERROR: ArgumentError: Collection must have exactly one element (input was empty)\nStacktrace:\n [1] single(::Array{Any,1}) at /home/ferris/.julia/v0.7/SAC/src/single.jl:4\n\njulia> single([3, 10])\nERROR: ArgumentError: Collection must have exactly one element (input contained more than one element)\nStacktrace:\n [1] single(::Array{Int64,1}) at /home/ferris/.julia/v0.7/SAC/src/single.jl:10"
},

{
    "location": "#splitdims(array,-[dims])-1",
    "page": "Readme",
    "title": "splitdims(array, [dims])",
    "category": "section",
    "text": "Split a multidimensional array into nested arrays of arrays, splitting the specified  dimensions dims to the \"outer\" array, leaving the remaining dimension in the \"inner\" array. By default, the last dimension is split into the outer array."
},

{
    "location": "#Examples:-1",
    "page": "Readme",
    "title": "Examples:",
    "category": "section",
    "text": "julia> splitdims([1 2; 3 4])\n2-element Array{Array{Int64,1},1}:\n [1, 3]\n [2, 4]\n\njulia> splitdims([1 2; 3 4], 1)\n2-element Array{Array{Int64,1},1}:\n [1, 2]\n [3, 4]"
},

{
    "location": "#splitdimsview(array,-[dims])-1",
    "page": "Readme",
    "title": "splitdimsview(array, [dims])",
    "category": "section",
    "text": "Like splitdimsview(array, dims) except creating a lazy view of the nested struture."
},

{
    "location": "#combinedims(array)-1",
    "page": "Readme",
    "title": "combinedims(array)",
    "category": "section",
    "text": "The inverse operation of splitdims - this will take a nested array of arrays, where  each sub-array has the same dimensions, and combine them into a single, flattened array."
},

{
    "location": "#Example:-2",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> combinedims([[1, 2], [3, 4]])\n2×2 Array{Int64,2}:\n 1  3\n 2  4"
},

{
    "location": "#combinedimsview(array)-1",
    "page": "Readme",
    "title": "combinedimsview(array)",
    "category": "section",
    "text": "Like combinedims(array) except creating a lazy view of the flattened struture."
},

{
    "location": "#invert(a)-1",
    "page": "Readme",
    "title": "invert(a)",
    "category": "section",
    "text": "Take a nested container a and return a container where the nesting is reversed, such that invert(a)[i][j] === a[j][i].Currently implemented for combinations of AbstractArray, Tuple and NamedTuple. It is planned to add AbstractDict in the future."
},

{
    "location": "#Examples:-2",
    "page": "Readme",
    "title": "Examples:",
    "category": "section",
    "text": "julia> invert([[1,2,3],[4,5,6]]) # invert the order of nesting\n3-element Array{Array{Int64,1},1}:\n [1, 4]\n [2, 5]\n [3, 6]\n\njulia> invert((a = [1, 2, 3], b = [2.0, 4.0, 6.0])) # Works between different data types\n3-element Array{NamedTuple{(:a, :b),Tuple{Int64,Float64}},1}:\n (a = 1, b = 2.0)\n (a = 2, b = 4.0)\n (a = 3, b = 6.0)"
},

{
    "location": "#invert!(out,-a)-1",
    "page": "Readme",
    "title": "invert!(out, a)",
    "category": "section",
    "text": "A mutating version of invert, which stores the result in out."
},

{
    "location": "#mapview(f,-iter)-1",
    "page": "Readme",
    "title": "mapview(f, iter)",
    "category": "section",
    "text": "Like map, but presents a view of the data contained in iter. The result may be wrapped in an lazily-computed output container (generally attempting to preserve arrays as AbstractArray, and so-on).For immutable collections (like Tuple and NamedTuple), the operation may be performed eagerly."
},

{
    "location": "#Example:-3",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> a = [1,2,3];\n\njulia> b = mapview(iseven, a)\n3-element MappedArray{Bool,1,typeof(iseven),Array{Int64,1}}:\n false\n  true\n false\n\njulia> a[1] = 2;\n\njulia> b\n3-element MappedArray{Bool,1,typeof(iseven),Array{Int64,1}}:\n  true\n  true\n false"
},

{
    "location": "#mapmany(f,-iters...)-1",
    "page": "Readme",
    "title": "mapmany(f, iters...)",
    "category": "section",
    "text": "Like map, but f(x...) for each x ∈ zip(iters...) may return an arbitrary number of  values to insert into the output."
},

{
    "location": "#Example:-4",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> mapmany(x -> 1:x, [1,2,3])\n6-element Array{Int64,1}:\n 1\n 1\n 2\n 1\n 2\n 3(Note that, semantically, filter could be thought of as a special case of mapmany.)"
},

{
    "location": "#flatten(a)-1",
    "page": "Readme",
    "title": "flatten(a)",
    "category": "section",
    "text": "Takes a collection of collections a and returns a collection containing all the elements of the subcollecitons of a. Equivalent to mapmany(identity, a)."
},

{
    "location": "#Example:-5",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> flatten([1:1, 1:2, 1:3])\n6-element Array{Int64,1}:\n 1\n 1\n 2\n 1\n 2\n 3"
},

{
    "location": "#product(f,-a,-b)-1",
    "page": "Readme",
    "title": "product(f, a, b)",
    "category": "section",
    "text": "Takes the Cartesian outer product of two containers and evaluates f on all pairings of elements.For example, if a and b are vectors, this returns a matrix out such that out[i,j] = f(a[i], b[j]) for i in keys(a) and j in keys(b).Note this interface differs slightly from Iterators.product where f = tuple is assumed."
},

{
    "location": "#Example:-6",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> product(+, [1,2], [1,2,3])\n2×3 Array{Int64,2}:\n 2  3  4\n 3  4  5"
},

{
    "location": "#productview(f,-a,-b)-1",
    "page": "Readme",
    "title": "productview(f, a, b)",
    "category": "section",
    "text": "Like product, but return a view of the Cartesian product of a and b where the output elements are f evaluated with the corresponding of a and b."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> productview(+, [1,2], [1,2,3])\n2×3 ProductArray{Int64,2,typeof(+),Array{Int64,1},Array{Int64,1}}:\n 2  3  4\n 3  4  5"
},

{
    "location": "#Grouping-1",
    "page": "Readme",
    "title": "Grouping",
    "category": "section",
    "text": "These operations help you split the elements of a collection according to an arbitrary function which maps each element to a group key."
},

{
    "location": "#group(by,-[f-identity],-iter)-1",
    "page": "Readme",
    "title": "group(by, [f = identity], iter)",
    "category": "section",
    "text": "Group the elements x of the iterable iter into groups labeled by by(x), transforming each element . The default implementation creates a Dict of Vectors, but of course a table/dataframe package might extend this to return a suitable (nested) structure of tables/dataframes.Also a group(by, f, iters...) method exists for the case where multiple iterables of the same length are provided."
},

{
    "location": "#Examples:-3",
    "page": "Readme",
    "title": "Examples:",
    "category": "section",
    "text": "julia> group(iseven, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\nDict{Bool,Array{Int64,1}} with 2 entries:\n  false => [1, 3, 5, 7, 9]\n  true  => [2, 4, 6, 8, 10]\n\njulia> names = [\"Andrew Smith\", \"John Smith\", \"Alice Baker\", \"Robert Baker\",\n                \"Jane Smith\", \"Jason Bourne\"]\n6-element Array{String,1}:\n \"Andrew Smith\"\n \"John Smith\"\n \"Alice Baker\"\n \"Robert Baker\"\n \"Jane Smith\"\n \"Jason Bourne\"\n\njulia> group(last, first, split.(names))\nDict{SubString{String},Array{SubString{String},1}} with 3 entries:\n  \"Bourne\" => SubString{String}[\"Jason\"]\n  \"Baker\"  => SubString{String}[\"Alice\", \"Robert\"]\n  \"Smith\"  => SubString{String}[\"Andrew\", \"John\", \"Jane\"]"
},

{
    "location": "#groupinds(by,-iter)-1",
    "page": "Readme",
    "title": "groupinds(by, iter)",
    "category": "section",
    "text": "For indexable collections iter, returns the indices/keys associated with each group. Similar to group, it supports multiple collections (with identical indices/keys) via the method groupinds(by, iters...)."
},

{
    "location": "#Example:-7",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> groupinds(iseven, [3,4,2,6,5,8])\nDict{Bool,Array{Int64,1}} with 2 entries:\n  false => [1, 5]\n  true  => [2, 3, 4, 6]"
},

{
    "location": "#groupview(by,-iter)-1",
    "page": "Readme",
    "title": "groupview(by, iter)",
    "category": "section",
    "text": "Similar to group(by, iter) but the grouped elements are a view of the original collection. Uses groupinds to construct the appropriate container."
},

{
    "location": "#Example:-8",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> v = [3,4,2,6,5,8]\n6-element Array{Int64,1}:\n 3\n 4\n 2\n 6\n 5\n 8\n\njulia> groups = groupview(iseven, v)\nSAC.Groups{Bool,Any,Array{Int64,1},Dict{Bool,Array{Int64,1}}} with 2 entries:\n  false => [3, 5]\n  true  => [4, 2, 6, 8]\n\njulia> groups[false][:] = 99\n99\n\njulia> v\n6-element Array{Int64,1}:\n 99\n  4\n  2\n  6\n 99\n  8"
},

{
    "location": "#groupreduce(by,-[f-identity],-op,-iter...;-[init])-1",
    "page": "Readme",
    "title": "groupreduce(by, [f = identity], op, iter...; [init])",
    "category": "section",
    "text": "Applies a mapreduce-like operation on the groupings labeled by passing the elements of iter through by. Mostly equivalent to map(g -> reduce(op, g; init=init), group(by, f, iter)), but designed to be more efficient. If multiple collections (of the same length) are provided, the transformations by and f occur elementwise.We also export groupcount, groupsum and groupprod as special cases of the above, to determine the number of elements per group, their sum, and their product, respectively."
},

{
    "location": "#Examples:-4",
    "page": "Readme",
    "title": "Examples:",
    "category": "section",
    "text": "julia> groupreduce(iseven, +, 1:10)\nDict{Bool,Int64} with 2 entries:\n  false => 25\n  true  => 30\n\njulia> groupcount(iseven, 1:10)\nDict{Bool,Int64} with 2 entries:\n  false => 5\n  true  => 5"
},

{
    "location": "#Joining-1",
    "page": "Readme",
    "title": "Joining",
    "category": "section",
    "text": ""
},

{
    "location": "#innerjoin([lkey-identity],-[rkey-identity],-[f-tuple],-[comparison-isequal],-left,-right)-1",
    "page": "Readme",
    "title": "innerjoin([lkey = identity], [rkey = identity], [f = tuple], [comparison = isequal], left, right)",
    "category": "section",
    "text": "WARNING: This API is a work-in-progress and may change in the future.Performs a relational-style join operation between iterables left and right, returning a collection of elements f(l, r) for which comparison(lkey(l), rkey(r)) is true where l ∈ left, r ∈ right."
},

{
    "location": "#Example:-9",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> innerjoin(iseven, iseven, tuple, ==, [1,2,3,4], [0,1,2])\n6-element Array{Tuple{Int64,Int64},1}:\n (1, 1)\n (2, 0)\n (2, 2)\n (3, 1)\n (4, 0)\n (4, 2)"
},

{
    "location": "#leftgroupjoin([lkey-identity],-[rkey-identity],-[f-tuple],-[comparison-isequal],-left,-right)-1",
    "page": "Readme",
    "title": "leftgroupjoin([lkey = identity], [rkey = identity], [f = tuple], [comparison = isequal], left, right)",
    "category": "section",
    "text": "WARNING: This API is a work-in-progress and may change in the future.Creates a collection if groups labelled by lkey(l) where each group contains elements f(l, r) which satisfy comparison(lkey(l), rkey(r)). If there rae no matches, the group is still created (with an empty collection).This operation shares similarities with an SQL left outer join, but is more similar to LINQ\'s GroupJoin."
},

{
    "location": "#Example:-10",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "julia> leftgroupjoin(iseven, iseven, tuple, ==, [1,2,3,4], [0,1,2])\nDict{Bool,Array{Tuple{Int64,Int64},1}} with 2 entries:\n  false => Tuple{Int64,Int64}[(1, 1), (3, 1)]\n  true  => Tuple{Int64,Int64}[(2, 0), (2, 2), (4, 0), (4, 2)]"
},

{
    "location": "autodocs/#SplitApplyCombine.combinedims",
    "page": "Docstrings",
    "title": "SplitApplyCombine.combinedims",
    "category": "function",
    "text": "combinedims(array_of_arrays)\n\nCombine the dimensions of a nested array structure into a new, flat array.\n\nThis is the inverse operation of splitdims / splitdimsview.\n\nSee also combinedimsview, the lazy version of this function.\n\nExample\n\njulia> combinedims([[1, 2], [3, 4]])\n2×2 Array{Int64,2}:\n 1  3\n 2  4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.combinedimsview",
    "page": "Docstrings",
    "title": "SplitApplyCombine.combinedimsview",
    "category": "function",
    "text": "combinedimsview(array_of_arrays)\n\nLazily create a flat array view of a nested array structure.\n\nThis is the inverse operation of splitdims / splitdimsview.\n\nSee also combinedims, the eager version of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.flatten",
    "page": "Docstrings",
    "title": "SplitApplyCombine.flatten",
    "category": "function",
    "text": "flatten(a)\n\nTakes a collection of collections a and returns a collection containing all the elements of the subcollecitons of a. Equivalent to mapmany(idenity, a).\n\nExample\n\njulia> flatten([1:1, 1:2, 1:3])\n6-element Array{Int64,1}:\n 1\n 1\n 2\n 1\n 2\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.group",
    "page": "Docstrings",
    "title": "SplitApplyCombine.group",
    "category": "function",
    "text": "group(by, iter)\n\nGroup the elements x of the iterable iter into groups labeled by by(x).\n\nExample\n\njulia> group(iseven, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\nDict{Bool,Array{Int64,1}} with 2 entries:\n  false => [1, 3, 5, 7, 9]\n  true  => [2, 4, 6, 8, 10]\n\n\n\n\n\ngroup(by, f, iter...)\n\nSorts the elements x of the iterable iter into groups labeled by by(x), transforming each element to f(x). If multiple collections (of the same length) are provided, the transformations occur elementwise.\n\nExample\n\njulia> group(iseven, x -> x ÷ 2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\nDict{Bool,Array{Int64,1}} with 2 entries:\n  false => [0, 1, 2, 3, 4]\n  true  => [1, 2, 3, 4, 5]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.groupcount",
    "page": "Docstrings",
    "title": "SplitApplyCombine.groupcount",
    "category": "function",
    "text": "groupcount([by], iter)\n\nDetermine the number of elements of iter belonging to each group.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.groupinds",
    "page": "Docstrings",
    "title": "SplitApplyCombine.groupinds",
    "category": "function",
    "text": "groupinds(by, iter...)\n\nSorts the indices i of iter into groups labeled by by(iter[i]). If multiple collections (with matching indices) are provided, the groups are formed elementwise.\n\nExample\n\njulia> groupinds(iseven, [3,4,2,6,5,8])\nDict{Bool,Array{Int64,1}} with 2 entries:\n  false => [1, 5]\n  true  => [2, 3, 4, 6]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.groupprod",
    "page": "Docstrings",
    "title": "SplitApplyCombine.groupprod",
    "category": "function",
    "text": "groupprod(by, [f], iter)\n\nMultiply the elements of iter belonging to different groups, optionally mapping by f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.groupreduce",
    "page": "Docstrings",
    "title": "SplitApplyCombine.groupreduce",
    "category": "function",
    "text": "groupreduce(by, f, op, iter...; [init])\n\nApplies a mapreduce-like operation on the groupings labeled by passing the elements of iter through by. Mostly equivalent to map(g -> reduce(op, g), group(by, f, iter)), but designed to be more efficient. If multiple collections (of the same length) are provided, the transformations by and f occur elementwise.\n\n\n\n\n\ngroupreduce(by, op, iter; [init])\n\nLike groupreduce(by, identity, op, iter; init=init).\n\nExample\n\njulia> groupreduce(iseven, +, 1:10)\nDict{Bool,Int64} with 2 entries:\nfalse => 25\ntrue  => 30\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.groupsum",
    "page": "Docstrings",
    "title": "SplitApplyCombine.groupsum",
    "category": "function",
    "text": "groupsum(by, [f], iter)\n\nSum the elements of iter belonging to different groups, optionally mapping by f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.groupview",
    "page": "Docstrings",
    "title": "SplitApplyCombine.groupview",
    "category": "function",
    "text": "groupview(by, iter)\n\nLike group, but each grouping is a view of the input collection iter.\n\nExample\n\njulia> v = [3,4,2,6,5,8]\n6-element Array{Int64,1}:\n 3\n 4\n 2\n 6\n 5\n 8\n\njulia> groups = groupview(iseven, v)\nSAC.Groups{Bool,Any,Array{Int64,1},Dict{Bool,Array{Int64,1}}} with 2 entries:\n  false => [3, 5]\n  true  => [4, 2, 6, 8]\n\njulia> groups[false][:] = 99\n99\n\njulia> v\n6-element Array{Int64,1}:\n 99\n  4\n  2\n  6\n 99\n  8\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.innerjoin",
    "page": "Docstrings",
    "title": "SplitApplyCombine.innerjoin",
    "category": "function",
    "text": "innerjoin(lkey, rkey, f, comparison, left, right)\n\nPerforms a relational-style join operation between iterables left and right, returning a collection of elements f(l, r) for which comparison(lkey(l), rkey(r)) is true where l ∈ left, r ∈ right.\n\nExample\n\njulia> innerjoin(iseven, iseven, tuple, ==, [1,2,3,4], [0,1,2])\n6-element Array{Tuple{Int64,Int64},1}:\n (1, 1)\n (2, 0)\n (2, 2)\n (3, 1)\n (4, 0)\n (4, 2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.invert",
    "page": "Docstrings",
    "title": "SplitApplyCombine.invert",
    "category": "function",
    "text": "invert(a)\n\nReturn a new nested container by reversing the order of the nested container a, for example turning a dictionary of arrays into an array of dictionaries, such that  a[i][j] === invert(a)[j][i].\n\nNote that in order for the keys of the inner and outer structure to be known, the input container a must not be empty. \n\nExamples\n\njulia> invert([[1,2,3],[4,5,6]])\n3-element Array{Array{Int64,1},1}:\n [1, 4]\n [2, 5]\n [3, 6]\n\njulia> invert((a = [1, 2, 3], b = [2.0, 4.0, 6.0]))\n3-element Array{NamedTuple{(:a, :b),Tuple{Int64,Float64}},1}:\n (a = 1, b = 2.0)\n (a = 2, b = 4.0)\n (a = 3, b = 6.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.leftgroupjoin",
    "page": "Docstrings",
    "title": "SplitApplyCombine.leftgroupjoin",
    "category": "function",
    "text": "leftgroupjoin(lkey, rkey, f, comparison, left, right)\n\nCreates a collection if groups labelled by lkey(l) where each group contains elements f(l, r) which satisfy comparison(lkey(l), rkey(r)). If there are no matches, the group is still created (with an empty collection).\n\nThis operation shares some similarities with an SQL left outer join.\n\nExample\n\njulia> leftgroupjoin(iseven, iseven, tuple, ==, [1,2,3,4], [0,1,2])\nDict{Bool,Array{Tuple{Int64,Int64},1}} with 2 entries:\n  false => Tuple{Int64,Int64}[(1, 1), (3, 1)]\n  true  => Tuple{Int64,Int64}[(2, 0), (2, 2), (4, 0), (4, 2)]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.mapmany",
    "page": "Docstrings",
    "title": "SplitApplyCombine.mapmany",
    "category": "function",
    "text": "mapmany(f, a...)\n\nLike map, but f(x) for each x ∈ a may return an arbitrary number of values to insert into the output.\n\nExample\n\njulia> mapmany(x -> 1:x, [1,2,3])\n6-element Array{Int64,1}:\n 1\n 1\n 2\n 1\n 2\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.mapview",
    "page": "Docstrings",
    "title": "SplitApplyCombine.mapview",
    "category": "function",
    "text": "mapview(f, a)\n\nReturn a view of a where each element is mapped through function f. The iteration and indexing properties of a are preserved. Similar to map(f, a), except evaluated lazily.\n\nExample\n\njulia> a = [1,2,3];\n\njulia> b = mapview(-, a)\n3-element MappedArray{Int64,1,typeof(-),Array{Int64,1}}:\n -1\n -2\n -3\n\njulia> a[1] = 10;\n\njulia> b\n3-element MappedArray{Int64,1,typeof(-),Array{Int64,1}}:\n -10\n  -2\n  -3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.product",
    "page": "Docstrings",
    "title": "SplitApplyCombine.product",
    "category": "function",
    "text": "product(f, a, b)\n\nTakes the Cartesian outer product of two containers and evaluates f on all pairings of elements. \n\nFor example, if a and b are vectors, this returns a matrix out such that out[i,j] = f(a[i], b[j]) for i in keys(a) and j in keys(b). See also productview.\n\nExample\n\njulia> product(+, [1,2], [1,2,3])\n2×3 Array{Int64,2}:\n 2  3  4\n 3  4  5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.productview",
    "page": "Docstrings",
    "title": "SplitApplyCombine.productview",
    "category": "function",
    "text": "productview(f, a, b)\n\nReturn a view of a Cartesian product of a and b where the output elements are f evaluated those of a and b. See also product and ProductArray\n\nExample\n\njulia> productview(+, [1,2], [1,2,3])\n2×3 ProductArray{Int64,2,typeof(+),Array{Int64,1},Array{Int64,1}}:\n 2  3  4\n 3  4  5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.splitdims",
    "page": "Docstrings",
    "title": "SplitApplyCombine.splitdims",
    "category": "function",
    "text": "splitdims(array, [dims])\n\nEagerly split the contents of array into a nested array of arrays. The outermost array contains the specified dimension(s) dims, which may be an integer, a tuple of integers, or defaults to the final array dimension. The nested arrays will contain all the remaining dimensions (in ascending order).\n\nSee also splitdimsview, which performs a similar operation lazily.\n\nExamples:\n\njulia> splitdims([1 2; 3 4])\n2-element Array{Array{Int64,1},1}:\n [1, 3]\n [2, 4]\n\njulia> splitdims([1 2; 3 4], 1)\n2-element Array{Array{Int64,1},1}:\n [1, 2]\n [3, 4]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SplitApplyCombine.splitdimsview",
    "page": "Docstrings",
    "title": "SplitApplyCombine.splitdimsview",
    "category": "function",
    "text": "splitdimsview(array, [dims])\n\nLazily split the contents of array into a nested array of arrays. The outermost array contains the specified dimension(s) dims, which may be an integer, a tuple of integers, or defaults to the final array dimension. The nested arrays will contain all the remaining dimensions (in ascending order).\n\nSee also splitdims, which performs a similar operation eagerly.\n\nExamples:\n\njulia> splitdims([1 2; 3 4])\n2-element SplitDimsArray{SubArray{Int64,1,Array{Int64,2},Tuple{Base.Slice{Base.OneTo{Int64}},Int64},true},1,(2,),Array{Int64,2}}:\n [1, 3]\n [2, 4]\n\njulia> splitdims([1 2; 3 4], 1)\n2-element SplitDimsArray{SubArray{Int64,1,Array{Int64,2},Tuple{Int64,Base.Slice{Base.OneTo{Int64}}},true},1,(1,),Array{Int64,2}}:\n [1, 2]\n [3, 4]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SplitApplyCombine.CombineDimsArraySplitApplyCombine.GetFielderSplitApplyCombine.GroupsSplitApplyCombine.IndexerSplitApplyCombine.MappedArraySplitApplyCombine.MappedIteratorSplitApplyCombine.ProductArraySplitApplyCombine.SplitApplyCombineSplitApplyCombine.SplitDimsArraySplitApplyCombine._combinedimsSplitApplyCombine._eltypesSplitApplyCombine._groupindsSplitApplyCombine._inneraxesSplitApplyCombine._innerjoin!SplitApplyCombine._invert!SplitApplyCombine._splitdimsSplitApplyCombine.check_dimsSplitApplyCombine.combinedimsSplitApplyCombine.combinedimsviewSplitApplyCombine.default_innerdimsSplitApplyCombine.evalSplitApplyCombine.flattenSplitApplyCombine.groupSplitApplyCombine.group2SplitApplyCombine.groupcountSplitApplyCombine.groupindsSplitApplyCombine.grouplengthSplitApplyCombine.groupprodSplitApplyCombine.groupreduceSplitApplyCombine.groupsumSplitApplyCombine.groupviewSplitApplyCombine.includeSplitApplyCombine.inner_eltypeSplitApplyCombine.innerjoinSplitApplyCombine.innerjoin!SplitApplyCombine.invertSplitApplyCombine.invert!SplitApplyCombine.leftgroupjoinSplitApplyCombine.mapmanySplitApplyCombine.mapviewSplitApplyCombine.new_eltypeSplitApplyCombine.productSplitApplyCombine.product!SplitApplyCombine.productviewSplitApplyCombine.singleSplitApplyCombine.slice_indsSplitApplyCombine.splat_indsSplitApplyCombine.splitdimsSplitApplyCombine.splitdimsviewSplitApplyCombine.⨝"
},

]}
