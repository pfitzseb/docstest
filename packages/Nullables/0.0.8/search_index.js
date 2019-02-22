var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Nullables-1",
    "page": "Readme",
    "title": "Nullables",
    "category": "section",
    "text": "(Image: Travis CI) (Image: AppVeyor) (Image: coveralls.io) (Image: codecov.io)This package provides the Nullable type from Julia 0.6, which was removed in subsequent versions. It also defines the unsafe_get and isnull functions, and all methods previously implemented in Julia Base: get, eltype, convert, promote, show, map, broadcast, filter, isequal, isless and hash.The definitions of the above types and functions are conditional on the version of Julia being used so that you can do using Nullables unconditionally and be guaranteed that Nullable will behave as it did in Julia 0.6 in later releases."
},

{
    "location": "autodocs/#Nullables.Nullable",
    "page": "Docstrings",
    "title": "Nullables.Nullable",
    "category": "type",
    "text": "Nullable(x, hasvalue::Bool=true)\n\nWrap value x in an object of type Nullable, which indicates whether a value is present. Nullable(x) yields a non-empty wrapper and Nullable{T}() yields an empty instance of a wrapper that might contain a value of type T.\n\nNullable(x, false) yields Nullable{typeof(x)}() with x stored in the result\'s value field.\n\nExamples\n\njulia> Nullable(1)\nNullable{Int64}(1)\n\njulia> Nullable{Int64}()\nNullable{Int64}()\n\njulia> Nullable(1, false)\nNullable{Int64}()\n\njulia> dump(Nullable(1, false))\nNullable{Int64}\n  hasvalue: Bool false\n  value: Int64 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Nullables.isnull",
    "page": "Docstrings",
    "title": "Nullables.isnull",
    "category": "function",
    "text": "isnull(x::Nullable)\n\nReturn whether or not x is null.\n\nExamples\n\njulia> x = Nullable(1, false)\nNullable{Int64}()\n\njulia> isnull(x)\ntrue\n\njulia> x = Nullable(1, true)\nNullable{Int64}(1)\n\njulia> isnull(x)\nfalse\n\njulia> x = 1\n1\n\njulia> isnull(x)\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Nullables.null_safe_op",
    "page": "Docstrings",
    "title": "Nullables.null_safe_op",
    "category": "function",
    "text": "null_safe_op(f::Any, ::Type, ::Type...)::Bool\n\nReturns whether an operation f can safely be applied to any value of the passed type(s). Returns false by default.\n\nCustom types should implement methods for some or all operations f when applicable: returning true means that the operation may be called on any bit pattern without throwing an error (though returning invalid or nonsensical results is not a problem). In particular, this means that the operation can be applied on the whole domain of the type and on uninitialized objects. As a general rule, these properties are only true for safe operations where isbitstype is true.\n\nTypes declared as safe can benefit from higher performance for operations on nullable: by always computing the result even for null values, a branch is avoided, which helps vectorization.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Nullables.nullable_returntype",
    "page": "Docstrings",
    "title": "Nullables.nullable_returntype",
    "category": "function",
    "text": "Return the given type if it is concrete, and Union{} otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Nullables.unsafe_get",
    "page": "Docstrings",
    "title": "Nullables.unsafe_get",
    "category": "function",
    "text": "unsafe_get(x)\n\nReturn the value of x for Nullable x; return x for all other x.\n\nThis method does not check whether or not x is null before attempting to access the value of x for x::Nullable (hence \"unsafe\").\n\nExamples\n\njulia> x = Nullable(1)\nNullable{Int64}(1)\n\njulia> unsafe_get(x)\n1\n\njulia> x = Nullable{String}()\nNullable{String}()\n\njulia> unsafe_get(x)\nERROR: UndefRefError: access to undefined reference\nStacktrace:\n [1] unsafe_get(::Nullable{String}) at ./nullable.jl:152\n\njulia> x = 1\n1\n\njulia> unsafe_get(x)\n1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Nullables.BINARY_OPSNullables.EqualOrLessNullables.NullExceptionNullables.NullSafeFloatsNullables.NullSafeIntsNullables.NullSafeSignedIntsNullables.NullSafeTypesNullables.NullSafeUnsignedIntsNullables.NullableNullables.NullablesNullables._nullable_eltypeNullables._unsafe_get_eltypeNullables.broadcast_axesNullables.evalNullables.hasvalueNullables.includeNullables.isnullNullables.maptoTupleNullables.null_safe_opNullables.nullable_returntypeNullables.nullablehash_seedNullables.unsafe_get"
},

]}
