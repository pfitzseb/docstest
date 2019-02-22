var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WeakRefStrings-1",
    "page": "Readme",
    "title": "WeakRefStrings",
    "category": "section",
    "text": "A string type for minimizing data-transfer costs in JuliaPackageEvaluator Build Status\n[![][pkg-0.6-img]][pkg-0.6-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> Pkg.add(\"WeakRefStrings\")"
},

{
    "location": "#Project-Status-1",
    "page": "Readme",
    "title": "Project Status",
    "category": "section",
    "text": "The package is tested against Julia 0.6 and nightly on Linux, OS X, and Windows."
},

{
    "location": "#Contributing-and-Questions-1",
    "page": "Readme",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems or would just like to ask a question.[travis-img]: https://travis-ci.org/JuliaData/WeakRefStrings.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaData/WeakRefStrings.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/h227adt6ovd1u3sx/branch/master?svg=true [appveyor-url]: https://ci.appveyor.com/project/quinnj/weakrefstrings-jl/branch/master[codecov-img]: https://codecov.io/gh/JuliaData/WeakRefStrings.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaData/WeakRefStrings.jl[issues-url]: https://github.com/JuliaData/WeakRefStrings.jl/issues[pkg-0.6-img]: http://pkg.julialang.org/badges/WeakRefStrings_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=WeakRefStrings"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Usage of WeakRefStrings is discouraged for general users. Currently, a WeakRefString purposely does not implement many Base Julia String interface methods due to many recent changes to Julia\'s builtin String interface, as well as the complexity to do so correctly. As such, WeakRefStrings are used primarily in the data ecosystem as an IO optimization and nothing more. Upon indexing a WeakRefStringArray, a proper Julia String type is materialized for safe, correct string processing. In the future, it may be possible to implement safe operations on WeakRefString itself, but for now, they must be converted to a String for any real work.Additional documentation is available at the REPL for ?WeakRefStringArray and ?WeakRefString."
},

{
    "location": "autodocs/#WeakRefStrings.StringArray",
    "page": "Docstrings",
    "title": "WeakRefStrings.StringArray",
    "category": "type",
    "text": "StringArray{T,N}\n\nEfficient storage for N dimensional array of strings.\n\nStringArray stores underlying string data for all elements of the array in a single contiguous buffer. It maintains offset and length for each element.\n\nT can be String, WeakRefString, Union{Missing, String} or Union{Missing, WeakRefString}. getindex will return this type although all variants have the same storage format.\n\nYou can use convert(StringArray{U}, ::StringArray{T}) to change the element type (e.g. to WeakRefString for efficiency) without copying the data.\n\nExample construction\n\njulia> sa = StringArray([\"x\", \"y\"]) # from Array{String}\n2-element WeakRefStrings.StringArray{String,1}:\n \"x\"\n \"y\"\n\njulia> sa = StringArray{WeakRefString}([\"x\", \"y\"])\n2-element WeakRefStrings.StringArray{WeakRefStrings.WeakRefString,1}:\n \"x\"\n \"y\"\n\njulia> sa = StringArray{Union{Missing, String}}([\"x\", \"y\"]) # with Missing\n2-element WeakRefStrings.StringArray{Union{Missings.Missing, String},1}:\n \"x\"\n \"y\"\n\njulia> sa = StringArray{Union{Missing, String}}(2,2) # undef\n2×2 WeakRefStrings.StringArray{Union{Missings.Missing, String},2}:\n #undef  #undef\n #undef  #undef\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeakRefStrings.WeakRefString",
    "page": "Docstrings",
    "title": "WeakRefStrings.WeakRefString",
    "category": "type",
    "text": "A custom \"weakref\" string type that only points to external string data. Allows for the creation of a \"string\" instance without copying data, which allows for more efficient string parsing/movement in certain data processing tasks.\n\nPlease note that no original reference is kept to the parent string/memory, so WeakRefString becomes unsafe once the parent object goes out of scope (i.e. loses a reference to it)\n\nInternally, a WeakRefString{T} holds:\n\nptr::Ptr{T}: a pointer to the string data (code unit size is parameterized on T)\nlen::Int: the number of code units in the string data\n\nSee also WeakRefStringArray\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeakRefStrings.WeakRefStringArray",
    "page": "Docstrings",
    "title": "WeakRefStrings.WeakRefStringArray",
    "category": "type",
    "text": "A WeakRefString container. Holds the \"strong\" references to the data pointed by its strings, ensuring that the referenced memory blocks stay valid during WeakRefStringArray lifetime.\n\nUpon indexing an elemnt in a WeakRefStringArray, the underlying WeakRefString is converted to a proper Julia String type by copying the memory; this ensures safe string processing in the general case. If additional optimizations are desired, the direct WeakRefString elements can be accessed by indexing A.elements, where A is a WeakRefStringArray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WeakRefStrings.MISSING_OFFSETWeakRefStrings.NULLSTRINGWeakRefStrings.NULLSTRING16WeakRefStrings.NULLSTRING32WeakRefStrings.STRWeakRefStrings.StringArrayWeakRefStrings.StringVectorWeakRefStrings.UNDEF_OFFSETWeakRefStrings.WeakRefStringWeakRefStrings.WeakRefStringArrayWeakRefStrings.WeakRefStringsWeakRefStrings._isassignedWeakRefStrings._setindex!WeakRefStrings.chompnullWeakRefStrings.evalWeakRefStrings.includeWeakRefStrings.initWeakRefStrings.iterate_continuedWeakRefStrings.wk"
},

]}
