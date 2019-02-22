var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AxisArrays-1",
    "page": "Readme",
    "title": "AxisArrays",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This package for the Julia language provides an array type (the AxisArray) that knows about its dimension names and axis values. This allows for indexing with the axis name without incurring any runtime overhead. AxisArrays can also be indexed by the values of their axes, allowing column names or interval selections. This permits one to implement algorithms that are oblivious to the storage order of the underlying arrays. In contrast to similar approaches in Images.jl and NamedArrays.jl, this allows for type-stable selection of dimensions and compile-time axis lookup.  It is also better suited for regularly sampled axes, like samples over time.Collaboration is welcome! This is still a work-in-progress. See the roadmap for the project\'s current direction."
},

{
    "location": "#Notice-regarding-axes-1",
    "page": "Readme",
    "title": "Notice regarding axes",
    "category": "section",
    "text": "Since Julia version 0.7, the name axes is exported by default from Base with a meaning (and behavior) that is distinct from how AxisArrays has been using it. Since you cannot simultaneously be using the same name from the two different modules, Julia will issue a warning, and it\'ll error if you try to use axes without qualification:julia> axes([])\nWARNING: both AxisArrays and Base export \"axes\"; uses of it in module Main must be qualified\nERROR: UndefVarError: axes not definedPackages that are upgrading to support 0.7+ and use AxisArrays should follow this upgrade path:Replace all uses of the axes function with the fully-qualified AxisArrays.axes\nReplace all uses of the deprecated indices function with the un-qualified axes\nImmediately after using AxisArrays, add const axes = Base.axesIn the future, AxisArrays will be looking for a new name for its functionality. This will allow you to use the idiomatic Base name and offers an easy upgrade path to whatever the new name will be."
},

{
    "location": "#Example-of-currently-implemented-behavior:-1",
    "page": "Readme",
    "title": "Example of currently-implemented behavior:",
    "category": "section",
    "text": "julia> Pkg.add(\"AxisArrays\")\njulia> using AxisArrays, Unitful\njulia> import Unitful: s, ms, µs\n\njulia> rng = MersenneTwister(123) # Seed a random number generator for repeatable examples\njulia> fs = 40000 # Generate a 40kHz noisy signal, with spike-like stuff added for testing\njulia> y = randn(rng, 60*fs+1)*3\njulia> for spk = (sin.(0.8:0.2:8.6) .* [0:0.01:.1; .15:.1:.95; 1:-.05:.05] .* 50,\n                  sin.(0.8:0.4:8.6) .* [0:0.02:.1; .15:.1:1; 1:-.2:.1] .* 50)\n           i = rand(rng, round(Int,.001fs):1fs)\n           while i+length(spk)-1 < length(y)\n               y[i:i+length(spk)-1] += spk\n               i += rand(rng, round(Int,.001fs):1fs)\n           end\n       end\n\njulia> A = AxisArray([y 2y], Axis{:time}(0s:1s/fs:60s), Axis{:chan}([:c1, :c2]))\n2-dimensional AxisArray{Float64,2,...} with axes:\n    :time, 0.0 s:2.5e-5 s:60.0 s\n    :chan, Symbol[:c1, :c2]\nAnd data, a 2400001×2 Array{Float64,2}:\n  3.5708     7.14161\n  6.14454   12.2891  \n  3.42795    6.85591\n  1.37825    2.75649\n -1.19004   -2.38007\n -1.99414   -3.98828\n  2.9429     5.88581\n -0.226449  -0.452898\n  0.821446   1.64289\n -0.582687  -1.16537\n  ⋮                  \n -3.50593   -7.01187\n  2.26783    4.53565\n -0.16902   -0.33804\n -3.84852   -7.69703\n  0.226457   0.452914\n  0.560809   1.12162\n  4.67663    9.35326\n -2.41005   -4.8201  \n -3.71612   -7.43224AxisArrays behave like regular arrays, but they additionally use the axis information to enable all sorts of fancy behaviors. For example, we can specify indices in any order, just so long as we annotate them with the axis name:julia> A[Axis{:time}(4)]\n1-dimensional AxisArray{Float64,1,...} with axes:\n    :chan, Symbol[:c1, :c2]\nAnd data, a 2-element Array{Float64,1}:\n 1.37825\n 2.75649\n\njulia> A[Axis{:chan}(:c2), Axis{:time}(1:5)]\n1-dimensional AxisArray{Float64,1,...} with axes:\n    :time, 0.0 s:2.5e-5 s:0.0001 s\nAnd data, a 5-element Array{Float64,1}:\n  7.14161\n 12.2891\n  6.85591\n  2.75649\n -2.38007We can also index by the values of each axis using an Interval type that selects all values between two endpoints a .. b or the axis values directly. Notice that the returned AxisArray still has axis information itself... and it still has the correct time information for those datapoints!julia> A[40µs .. 220µs, :c1]\n1-dimensional AxisArray{Float64,1,...} with axes:\n    :time, 5.0e-5 s:2.5e-5 s:0.0002 s\nAnd data, a 7-element Array{Float64,1}:\n  3.42795\n  1.37825\n -1.19004\n -1.99414\n  2.9429  \n -0.226449\n  0.821446\n\njulia> AxisArrays.axes(ans, 1)\nAxisArrays.Axis{:time,StepRangeLen{Quantity{Float64, Dimensions:{𝐓}, Units:{s}},Base.TwicePrecision{Quantity{Float64, Dimensions:{𝐓}, Units:{s}}},Base.TwicePrecision{Quantity{Float64, Dimensions:{𝐓}, Units:{s}}}}}(5.0e-5 s:2.5e-5 s:0.0002 s)You can also index by a single value on an axis using atvalue. This will drop a dimension. Indexing with an Interval type retains dimensions, even when the ends of the interval are equal:julia> A[atvalue(2.5e-5s), :c1]\n6.14453912336772\n\njulia> A[2.5e-5s..2.5e-5s, :c1]\n1-dimensional AxisArray{Float64,1,...} with axes:\n    :time, 2.5e-5 s:2.5e-5 s:2.5e-5 s\nAnd data, a 1-element Array{Float64,1}:\n 6.14454You can even index by multiple values by broadcasting atvalue over an array:julia> A[atvalue.([2.5e-5s, 75.0µs])]\n2-dimensional AxisArray{Float64,2,...} with axes:\n    :time, Quantity{Float64, Dimensions:{𝐓}, Units:{s}}[2.5e-5 s, 7.5e-5 s]\n    :chan, Symbol[:c1, :c2]\nAnd data, a 2×2 Array{Float64,2}:\n 6.14454  12.2891\n 1.37825   2.75649Sometimes, though, what we\'re really interested in is a window of time about a specific index. One of the operations above (looking for values in the window from 40µs to 220µs) might be more clearly expressed as a symmetrical window about a specific index where we know something interesting happened. To represent this, we use the atindex function:julia> A[atindex(-90µs .. 90µs, 5), :c2]\n1-dimensional AxisArray{Float64,1,...} with axes:\n    :time_sub, -7.5e-5 s:2.5e-5 s:7.500000000000002e-5 s\nAnd data, a 7-element Array{Float64,1}:\n  6.85591\n  2.75649\n -2.38007\n -3.98828\n  5.88581\n -0.452898\n  1.64289Note that the returned AxisArray has its time axis shifted to represent the interval about the given index!  This simple concept can be extended to some very powerful behaviors. For example, let\'s threshold our data and find windows about those threshold crossings.julia> idxs = findall(diff(A[:,:c1] .< -15) .> 0);\n\njulia> spks = A[atindex(-200µs .. 800µs, idxs), :c1]\n2-dimensional AxisArray{Float64,2,...} with axes:\n    :time_sub, -0.0002 s:2.5e-5 s:0.0008 s\n    :time_rep, Quantity{Float64, Dimensions:{𝐓}, Units:{s}}[0.162 s, 0.20045 s, 0.28495 s, 0.530325 s, 0.821725 s, 1.0453 s, 1.11967 s, 1.1523 s, 1.22085 s, 1.6253 s  …  57.0094 s, 57.5818 s, 57.8716 s, 57.8806 s, 58.4353 s, 58.7041 s, 59.1015 s, 59.1783 s, 59.425 s, 59.5657 s]\nAnd data, a 41×247 Array{Float64,2}:\n   0.672063    7.25649      0.633375  …    1.54583     5.81194    -4.706\n  -1.65182     2.57487      0.477408       3.09505     3.52478     4.13037\n   4.46035     2.11313      4.78372        1.23385     7.2525      3.57485\n   5.25651    -2.19785      3.05933        0.965021    6.78414     5.94854\n   7.8537      0.345008     0.960533       0.812989    0.336715    0.303909\n   0.466816    0.643649    -3.67087   …    3.92978    -3.1242      0.789722\n  -6.0445    -13.2441      -4.60716        0.265144   -4.50987    -8.84897\n  -9.21703   -13.2254     -14.4409        -8.6664    -13.3457    -11.6213\n -16.1809    -22.7037     -25.023        -15.9376    -28.0817    -16.996\n -23.2671    -31.2021     -25.3787       -24.4914    -32.2599    -26.1118\n   ⋮                                  ⋱                ⋮\n  -0.301629    0.0683982   -4.36574        1.92362    -5.12333    -3.4431\n   4.7182      1.18615      4.40717       -4.51757    -8.64314     0.0800021\n  -2.43775    -0.151882    -1.40817       -3.38555    -2.23418     0.728549\n   3.2482     -0.60967      0.471288  …    2.53395     0.468817   -3.65905\n  -4.26967     2.24747     -3.13758        1.74967     4.5052     -0.145357\n  -0.752487    1.69446     -1.20491        1.71429     1.81936     0.290158\n   4.64348    -3.94187     -1.59213        7.15428    -0.539748    4.82309\n   1.09652    -2.66999      0.521931      -3.80528     1.70421     3.40583\n  -0.94341     2.60785     -3.34291   …    1.10584     4.31118     3.6404By indexing with a repeated interval, we have added a dimension to the output! The returned AxisArray\'s columns specify each repetition of the interval, and each datapoint in the column represents a timepoint within that interval, adjusted by the time of the theshold crossing. The best part here is that the returned matrix knows precisely where its data came from, and has labeled its dimensions appropriately. Not only is there the proper time base for each waveform, but we also have recorded the event times as the axis across the columns."
},

{
    "location": "#Indexing-1",
    "page": "Readme",
    "title": "Indexing",
    "category": "section",
    "text": ""
},

{
    "location": "#Indexing-axes-1",
    "page": "Readme",
    "title": "Indexing axes",
    "category": "section",
    "text": "Two main types of Axes supported by default include:Categorical axis – These are vectors of labels, normally symbols or strings. Elements or slices can be selected by elements or vectors of elements.\nDimensional axis – These are sorted vectors or iterators that can be selected by Intervals. These are commonly used for sequences of times or date-times. For regular sample rates, ranges can be used.Here is an example with a Dimensional axis representing a time sequence along rows and a Categorical axis of symbols for column headers.B = AxisArray(reshape(1:15, 5, 3), .1:.1:0.5, [:a, :b, :c])\nB[Axis{:row}(Interval(.2,.4))] # restrict the AxisArray along the time axis\nB[Interval(0.,.3), [:a, :c]]   # select an interval and two of the columnsUser-defined axis types can be added along with custom indexing behaviors."
},

{
    "location": "#Example:-compute-the-intensity-weighted-mean-along-the-z-axis-1",
    "page": "Readme",
    "title": "Example: compute the intensity-weighted mean along the z axis",
    "category": "section",
    "text": "B = AxisArray(randn(100,100,100), :x, :y, :z)\nItotal = sumz = 0.0\nfor iter in CartesianRange(indices(B))  # traverses in storage order for cache efficiency\n    I = B[iter]  # intensity in a single voxel\n    Itotal += I\n    sumz += I * iter[axisdim(B, Axis{:z})]  # axisdim \"looks up\" the z dimension\nend\nmeanz = sumz/ItotalThe intention is that all of these operations are just as efficient as they would be if you used traditional position-based indexing with all the inherent assumptions about the storage order of B."
},

{
    "location": "autodocs/#AxisArrays.Axis",
    "page": "Docstrings",
    "title": "AxisArrays.Axis",
    "category": "type",
    "text": "Type-stable axis-specific indexing and identification with a parametric type.\n\nType parameters\n\nstruct Axis{name,T}\n\nname : the name of the axis, a Symbol\nT : the type of the axis\n\nConstructors\n\nAxis{name}(I)\n\nArguments\n\nname : the axis name Symbol or integer dimension\nI : the indexer, any indexing type that the axis supports\n\nExamples\n\nHere is an example with a Dimensional axis representing a time sequence along rows and a Categorical axis of Symbols for column headers.\n\nA = AxisArray(reshape(1:60, 12, 5), .1:.1:1.2, [:a, :b, :c, :d, :e])\nA[Axis{:col}(2)] # grabs the second column\nA[Axis{:col}(:b)] # Same as above, grabs column :b (the second column)\nA[Axis{:row}(2)] # grabs the second row\nA[Axis{2}(2:5)] # grabs the second through 5th columns\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.AxisArray",
    "page": "Docstrings",
    "title": "AxisArrays.AxisArray",
    "category": "type",
    "text": "An AxisArray is an AbstractArray that wraps another AbstractArray and adds axis names and values to each array dimension. AxisArrays can be indexed by using the named axes as an alternative to positional indexing by dimension. Other advanced indexing along axis values are also provided.\n\nType parameters\n\nThe AxisArray contains several type parameters:\n\nstruct AxisArray{T,N,D,Ax} <: AbstractArray{T,N}\n\nT : the elemental type of the AbstractArray\nN : the number of dimensions\nD : the type of the wrapped AbstractArray\nAx : the names and types of the axes, as a (specialized) NTuple{N, Axis}\n\nConstructors\n\nAxisArray(A::AbstractArray, axes::Axis...)\nAxisArray(A::AbstractArray, names::Symbol...)\nAxisArray(A::AbstractArray, vectors::AbstractVector...)\nAxisArray(A::AbstractArray, (names...,), (steps...,), [(offsets...,)])\n\nArguments\n\nA::AbstractArray : the wrapped array data\naxes or names or vectors : dimensional information for the wrapped array\n\nThe dimensional information may be passed in one of three ways and is entirely optional. When the axis name or value is missing for a dimension, a default is substituted. The default axis names for dimensions (1, 2, 3, 4, 5, ...) are (:row, :col, :page, :dim_4, :dim_5, ...). The default axis values are Base.axes(A, d) for each missing dimension d.\n\nIndexing\n\nIndexing returns a view into the original data. The returned view is a new AxisArray that wraps a SubArray. Indexing should be type stable. Use Axis{axisname}(idx) to index based on a specific axis. axisname is a Symbol specifying the axis to index/slice, and idx is a normal indexing object (Int, Array{Int,1}, etc.) or a custom indexing type for that particular type of axis.\n\nTwo main types of axes supported by default include:\n\nCategorical axis – These are vectors of labels, normally Symbols or strings. Elements or slices can be indexed by elements or vectors of elements.\nDimensional axis – These are sorted vectors or iterators that can be indexed by ClosedInterval(). These are commonly used for sequences of times or date-times. For regular sample rates, ranges can be used.\n\nUser-defined axis types can be added along with custom indexing behaviors. To add add a custom type as a Categorical or Dimensional axis, add a trait using AxisArrays.axistrait.\n\nFor more advanced indexing, you can define custom methods for AxisArrays.axisindexes.\n\nExamples\n\nHere is an example with a Dimensional axis representing a time sequence along rows (it\'s a FloatRange) and a Categorical axis of Symbols for column headers.\n\nA = AxisArray(reshape(1:15, 5, 3), Axis{:time}(.1:.1:0.5), Axis{:col}([:a, :b, :c]))\nA[Axis{:time}(1:3)]   # equivalent to A[1:3,:]\nA[Axis{:time}(ClosedInterval(.2,.4))] # restrict the AxisArray along the time axis\nA[ClosedInterval(0.,.3), [:a, :c]]   # select an interval and two columns\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.CategoricalVector",
    "page": "Docstrings",
    "title": "AxisArrays.CategoricalVector",
    "category": "type",
    "text": "A CategoricalVector is an AbstractVector which is treated as a categorical axis regardless of the element type. Duplicate values are not allowed but are not filtered out.\n\nA CategoricalVector axis can be indexed with an ClosedInterval, with a value, or with a vector of values. Use of a CategoricalVector{Tuple} axis allows indexing similar to the hierarchical index of the Python Pandas package or the R data.table package.\n\nIn general, indexing into a CategoricalVector will be much slower than the corresponding SortedVector or another sorted axis type, as linear search is required.\n\nConstructors\n\nCategoricalVector(x::AbstractVector)\n\nArguments\n\nx::AbstractVector : the wrapped vector\n\nExamples\n\nv = CategoricalVector(collect([1; 8; 10:15]))\nA = AxisArray(reshape(1:16, 8, 2), v, [:a, :b])\nA[Axis{:row}(1), :]\nA[Axis{:row}(10), :]\nA[Axis{:row}([1, 10]), :]\n\n## Hierarchical index example with three key levels\n\ndata = reshape(1.:40., 20, 2)\nv = collect(zip([:a, :b, :c][rand(1:3,20)], [:x,:y][rand(1:2,20)], [:x,:y][rand(1:2,20)]))\nA = AxisArray(data, CategoricalVector(v), [:a, :b])\nA[:b, :]\nA[[:a,:c], :]\nA[(:a,:x), :]\nA[(:a,:x,:x), :]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.Extrapolated",
    "page": "Docstrings",
    "title": "AxisArrays.Extrapolated",
    "category": "module",
    "text": "The internal Extrapolated module contains implementations for indexing and searching into ranges beyond their bounds. The @inbounds macro is not sufficient since it can be turned off by --check-bounds=yes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.SortedVector",
    "page": "Docstrings",
    "title": "AxisArrays.SortedVector",
    "category": "type",
    "text": "A SortedVector is an AbstractVector where the underlying data is ordered (monotonically increasing).\n\nIndexing that would unsort the data is prohibited. A SortedVector is a Dimensional axis, and no checking is done to ensure that the data is sorted. Duplicate values are allowed.\n\nA SortedVector axis can be indexed with an ClosedInterval, with a value, or with a vector of values. Use of a SortedVector{Tuple} axis allows indexing similar to the hierarchical index of the Python Pandas package or the R data.table package.\n\nConstructors\n\nSortedVector(x::AbstractVector)\n\nKeyword Arguments\n\nx::AbstractVector : the wrapped vector\n\nExamples\n\nv = SortedVector(collect([1.; 10.; 10:15.]))\nA = AxisArray(reshape(1:16, 8, 2), v, [:a, :b])\nA[ClosedInterval(8.,12.), :]\nA[1., :]\nA[10., :]\n\n## Hierarchical index example with three key levels\n\ndata = reshape(1.:40., 20, 2)\nv = collect(zip([:a, :b, :c][rand(1:3,20)], [:x,:y][rand(1:2,20)], [:x,:y][rand(1:2,20)]))\nidx = sortperm(v)\nA = AxisArray(data[idx,:], SortedVector(v[idx]), [:a, :b])\nA[:b, :]\nA[[:a,:c], :]\nA[(:a,:x), :]\nA[(:a,:x,:x), :]\nA[ClosedInterval(:a,:b), :]\nA[ClosedInterval((:a,:x),(:b,:x)), :]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.axes",
    "page": "Docstrings",
    "title": "AxisArrays.axes",
    "category": "function",
    "text": "axes(A::AxisArray) -> (Axis...)\naxes(A::AxisArray, ax::Axis) -> Axis\naxes(A::AxisArray, dim::Int) -> Axis\n\nReturns the tuple of axis vectors for an AxisArray. If an specific Axis is specified, then only that axis vector is returned.  Note that when extracting a single axis vector, axes(A, Axis{1})) is type-stable and will perform better than axes(A)[1].\n\nFor an AbstractArray without Axis information, axes returns the default axes, i.e., those that would be produced by AxisArray(A).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.axisdim",
    "page": "Docstrings",
    "title": "AxisArrays.axisdim",
    "category": "function",
    "text": "axisdim(::AxisArray, ::Axis) -> Int\naxisdim(::AxisArray, ::Type{Axis}) -> Int\n\nGiven an AxisArray and an Axis, return the integer dimension of the Axis within the array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.axisindexes",
    "page": "Docstrings",
    "title": "AxisArrays.axisindexes",
    "category": "function",
    "text": "axisindexes(ax::Axis, axis_idx) -> array_idx\naxisindexes(::Type{<:AxisTrait}, axis_values, axis_idx) -> array_idx\n\nTranslate an index into an axis into an index into the underlying array. Users can add additional indexing behaviours for custom axes or custom indices by adding methods to this function.\n\nExamples\n\nAdd a method for indexing into an Axis{name, SortedSet}:\n\nAxisArrays.axisindexes(::Type{Categorical}, ax::SortedSet, idx::AbstractVector) = findin(collect(ax), idx)\n\nAdd a method for indexing into a Categorical axis with a SortedSet:\n\nAxisArrays.axisindexes(::Type{Categorical}, ax::AbstractVector, idx::SortedSet) = findin(ax, idx)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.axisnames",
    "page": "Docstrings",
    "title": "AxisArrays.axisnames",
    "category": "function",
    "text": "axisnames(A::AxisArray)           -> (Symbol...)\naxisnames(::Type{AxisArray{...}}) -> (Symbol...)\naxisnames(ax::Axis...)            -> (Symbol...)\naxisnames(::Type{Axis{...}}...)   -> (Symbol...)\n\nReturns the axis names of an AxisArray or list of Axises as a tuple of Symbols.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.axisparams",
    "page": "Docstrings",
    "title": "AxisArrays.axisparams",
    "category": "function",
    "text": "axisparams(::AxisArray) -> Vararg{::Type{Axis}}\naxisparams(::Type{AxisArray}) -> Vararg{::Type{Axis}}\n\nReturns the axis parameters for an AxisArray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.axistrait",
    "page": "Docstrings",
    "title": "AxisArrays.axistrait",
    "category": "function",
    "text": "axistrait(ax::Axis) -> Type{<:AxisTrait}\naxistrait{T}(::Type{T}) -> Type{<:AxisTrait}\n\nReturns the indexing type of an Axis, any subtype of AxisTrait. The default is Unsupported, meaning there is no special indexing behaviour for this axis and indexes into this axis are passed directly to the underlying array.\n\nTwo main types of axes supported by default are Categorical and Dimensional; see Indexing for more information on these types.\n\nUser-defined axis types can be added along with custom indexing behaviors by defining new methods of this function. Here is the example of adding a custom Dimensional axis:\n\nAxisArrays.axistrait(::Type{MyCustomAxis}) = AxisArrays.Dimensional\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.axisvalues",
    "page": "Docstrings",
    "title": "AxisArrays.axisvalues",
    "category": "function",
    "text": "axisvalues(A::AxisArray)           -> (AbstractVector...)\naxisvalues(ax::Axis...)            -> (AbstractVector...)\n\nReturns the axis values of an AxisArray or list of Axises as a tuple of vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.collapse",
    "page": "Docstrings",
    "title": "AxisArrays.collapse",
    "category": "function",
    "text": "collapse(::Val{N}, As::AxisArray...) -> AxisArray\ncollapse(::Val{N}, labels::Tuple, As::AxisArray...) -> AxisArray\ncollapse(::Val{N}, ::Type{NewArrayType}, As::AxisArray...) -> AxisArray\ncollapse(::Val{N}, ::Type{NewArrayType}, labels::Tuple, As::AxisArray...) -> AxisArray\n\nCollapses AxisArrays with N equal leading axes into a single AxisArray. All additional axes in any of the arrays are collapsed into a single additional axis of type Axis{:collapsed, CategoricalVector{Tuple}}.\n\nArguments\n\n::Val{N}: the greatest common dimension to share between all input                   arrays. The remaining axes are collapsed. All N axes must be common                   to each input array, at the same dimension. Values from 0 up to the                   minimum number of dimensions across all input arrays are allowed.\nlabels::Tuple: (optional) an index for each array in As used as the leading element in                  the index tuples in the :collapsed axis. Defaults to 1:length(As).\n::Type{NewArrayType<:AbstractArray{_, N+1}}: (optional) the desired underlying array                                                type for the returned AxisArray.\nAs::AxisArray...: AxisArrays to be collapsed together.\n\nExamples\n\njulia> price_data = AxisArray(rand(10), Axis{:time}(Date(2016,01,01):Day(1):Date(2016,01,10)))\n1-dimensional AxisArray{Float64,1,...} with axes:\n    :time, 2016-01-01:1 day:2016-01-10\nAnd data, a 10-element Array{Float64,1}:\n 0.885014\n 0.418562\n 0.609344\n 0.72221\n 0.43656\n 0.840304\n 0.455337\n 0.65954\n 0.393801\n 0.260207\n\njulia> size_data = AxisArray(rand(10,2), Axis{:time}(Date(2016,01,01):Day(1):Date(2016,01,10)), Axis{:measure}([:area, :volume]))\n2-dimensional AxisArray{Float64,2,...} with axes:\n    :time, 2016-01-01:1 day:2016-01-10\n    :measure, Symbol[:area, :volume]\nAnd data, a 10×2 Array{Float64,2}:\n 0.159434     0.456992\n 0.344521     0.374623\n 0.522077     0.313256\n 0.994697     0.320953\n 0.95104      0.900526\n 0.921854     0.729311\n 0.000922581  0.148822\n 0.449128     0.761714\n 0.650277     0.135061\n 0.688773     0.513845\n\njulia> collapsed = collapse(Val(1), (:price, :size), price_data, size_data)\n2-dimensional AxisArray{Float64,2,...} with axes:\n    :time, 2016-01-01:1 day:2016-01-10\n    :collapsed, Tuple{Symbol,Vararg{Symbol,N} where N}[(:price,), (:size, :area), (:size, :volume)]\nAnd data, a 10×3 Array{Float64,2}:\n 0.885014  0.159434     0.456992\n 0.418562  0.344521     0.374623\n 0.609344  0.522077     0.313256\n 0.72221   0.994697     0.320953\n 0.43656   0.95104      0.900526\n 0.840304  0.921854     0.729311\n 0.455337  0.000922581  0.148822\n 0.65954   0.449128     0.761714\n 0.393801  0.650277     0.135061\n 0.260207  0.688773     0.513845\n\njulia> collapsed[Axis{:collapsed}(:size)] == size_data\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.default_axes",
    "page": "Docstrings",
    "title": "AxisArrays.default_axes",
    "category": "function",
    "text": "default_axes(A::AbstractArray)\ndefault_axes(A::AbstractArray, axs)\n\nReturn a tuple of Axis objects that appropriately index into the array A.\n\nThe optional second argument can take a tuple of vectors or axes, which will be wrapped with the appropriate axis name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.permutation",
    "page": "Docstrings",
    "title": "AxisArrays.permutation",
    "category": "function",
    "text": "permutation(to, from) -> p\n\nCalculate the permutation of labels in from to produce the order in to. Any entries in to that are missing in from will receive an index of 0. Any entries in from that are missing in to will have their indices appended to the end of the permutation. Consequently, the length of p is equal to the longer of to and from.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.reaxis",
    "page": "Docstrings",
    "title": "AxisArrays.reaxis",
    "category": "function",
    "text": "reaxis(A::AxisArray, I...)\n\nThis internal function determines the new set of axes that are constructed upon indexing with I.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisArrays.searchsortednearest",
    "page": "Docstrings",
    "title": "AxisArrays.searchsortednearest",
    "category": "function",
    "text": "searchsortednearest(vec::AbstractVector, x)\n\nLike searchsortedfirst or searchsortedlast, this returns the the index of the element in the sorted vector vec whose value is closest to x, rounding up. If there are multiple elements that are equally close to x, this will return the first index if x is less than or equal to those in the vector or the last index if x is greater.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AxisArrays...AxisArrays.AxisAxisArrays.AxisArrayAxisArrays.AxisArraysAxisArrays.AxisTraitAxisArrays.AxisUnitRangeAxisArrays.CategoricalAxisArrays.CategoricalVectorAxisArrays.ClosedIntervalAxisArrays.DimensionalAxisArrays.ExactValueAxisArrays.ExtrapolatedAxisArrays.HasAxesAxisArrays.IdxAxisArrays.IntervalAtIndexAxisArrays.RepeatedIntervalAxisArrays.RepeatedIntervalAtIndexesAxisArrays.ScalarAxisArrays.ScalarIndexAxisArrays.SortedVectorAxisArrays.SymbolsAxisArrays.TolValueAxisArrays.UnsupportedAxisArrays.ValueAxisArrays.ValuesAxisArrays.__reduced_indicesAxisArrays._axisnamesAxisArrays._axistrait_elAxisArrays._catAxisArrays._check_common_axesAxisArrays._collapse_array_axesAxisArrays._collapse_axesAxisArrays._collapsed_axis_eltypeAxisArrays._default_axisAxisArrays._defaultdimnameAxisArrays._dropdimsAxisArrays._islessAxisArrays._lengthAxisArrays._mergeAxisArrays._new_axesAxisArrays._reaxisAxisArrays._reduced_indicesAxisArrays._reshapeallAxisArrays._sizeAxisArrays._splitallAxisArrays._summaryAxisArrays._tuple_matchesAxisArrays.atindexAxisArrays.atvalueAxisArrays.axesAxisArrays.axisdimAxisArrays.axisindexesAxisArrays.axismergeAxisArrays.axisnameAxisArrays.axisnamesAxisArrays.axisparamsAxisArrays.axistraitAxisArrays.axistypeAxisArrays.axisvaluesAxisArrays.checkaxisAxisArrays.checknamesAxisArrays.checksizesAxisArrays.collapseAxisArrays.default_axesAxisArrays.dropaxAxisArrays.equalvaluedAxisArrays.evalAxisArrays.getaxisAxisArrays.includeAxisArrays.indexmappingAxisArrays.indexmappingsAxisArrays.make_axes_matchAxisArrays.matchingdimsAxisArrays.matchingdimsexceptAxisArrays.ntupleAxisArrays.permutationAxisArrays.phony_rangeAxisArrays.reaxisAxisArrays.reduced_axisAxisArrays.reduced_axis0AxisArrays.reduced_indicesAxisArrays.reduced_indices0AxisArrays.relativewindowAxisArrays.samesymAxisArrays.searchsortednearestAxisArrays.sizesAxisArrays.summaryioAxisArrays.to_index"
},

]}
