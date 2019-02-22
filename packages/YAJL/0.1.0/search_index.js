var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#YAJL.jl-[![Build-Status](https://travis-ci.com/christopher-dG/YAJL.jl.svg?branchmaster)](https://travis-ci.com/christopher-dG/YAJL.jl)-1",
    "page": "Readme",
    "title": "YAJL.jl (Image: Build Status)",
    "category": "section",
    "text": "A Julia wrapper around the YAJL JSON library."
},

{
    "location": "#Use-Case-1",
    "page": "Readme",
    "title": "Use Case",
    "category": "section",
    "text": "YAJL.jl is pretty niche since there are already very good JSON libraries in pure Julia such as these. However, YAJL makes it possible to write highly custom JSON processors that never need to hold the entirety of the data in memory."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "It\'s quite easy to write your own custom JSON context. You get to choose your data representation, and you only need to implement what you\'ll use.Suppose that we had a massive list of numbers that we wanted to count. Code for this task would look like this:using YAJL\n\nmutable struct Counter <: YAJL.Context\n    n::BigInt\n    Counter() = new(0)\nend\n\nYAJL.collect(ctx::Counter) = ctx.n\n@yajl number(ctx::Counter, ::Ptr{UInt8}, ::Int) = ctx.n += 1\n\nn = open(io -> YAJL.run(io, Counter()), \"big_list.json\")Counting this list uses a constant amount of memory, regardless of the list length.There are more basic examples in runtests.jl. For a more complete example, see minifier.jl."
},

{
    "location": "autodocs/#YAJL.@yajl",
    "page": "Docstrings",
    "title": "YAJL.@yajl",
    "category": "macro",
    "text": "Register a callback for a specific data type. Callback functions should return true or a non-zero integer upon success, otherwise parsing stops (although sometimes this is desired). A return true is inserted automatically at the end of the function, but your own explicit returns override this. Note that the return keyword must be used in this case.\n\nThe callbacks to be overridden are as follows:\n\nnull(ctx::T): Called on null values.\nboolean(ctx::T, v::Bool): `Called on boolean values.\ninteger(ctx::T, v::Int): Called on integer values (see note below).\ndouble(ctx::T, v::Float64): Called on float values (see note below).\nnumber(ctx::T, v::Ptr{UInt8}, len::Int): Called on numeric values (see note below).\nstring(ctx::T, v::Ptr{UInt8}, len::Int): Called on string values.\nmap_start(ctx::T): Called when an object begins ({).\nmap_key(ctx::T, v::Ptr{UInt8}, len::Int): Called on object keys.\nmap_end(ctx::T): Called when an object ends (}).\narray_start(ctx::T): Called when an array begins ([).\narray_end(ctx::T): Called when an array ends (]).\n\nFor string arguments which appear as Ptr{UInt8}, Cstring can also be used. However, Ptr{UInt8} is usually better if you want to use unsafe_string(v, len).\n\nnote: Note\nTo handle numbers, implement either number or both integer and double. Usually, number is a better choice because integer and `double have limited precision. See here for more details.\n\nwarning: Warning\nIf your Context is a parametric type, it must appear non-parameterized in the function definition. This means that your callback functions cannot dispatch on the context\'s type parameter.\n\nFor a full example, see minifier.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YAJL.Context",
    "page": "Docstrings",
    "title": "YAJL.Context",
    "category": "type",
    "text": "Base type for YAJL contexts. To implement a custom Context\'s behaviour, see @yajl and collect. For a full example, see minifier.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YAJL.Minifier",
    "page": "Docstrings",
    "title": "YAJL.Minifier",
    "category": "type",
    "text": "Minifier(io::IO=stdout) -> Minifier\n\nRemoves all unecessary whitespace from JSON.\n\nExample\n\njulia> String(take!(YAJL.run(IOBuffer(\"{    }\"), YAJL.Minifier(IOBuffer()))))\n\"{}\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YAJL.collect",
    "page": "Docstrings",
    "title": "YAJL.collect",
    "category": "function",
    "text": "collect(ctx::Context)\n\nOverride this function for your custom Context to specify what is returned from run. By default, ctx itself is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YAJL.run",
    "page": "Docstrings",
    "title": "YAJL.run",
    "category": "function",
    "text": "run(io::IO, ctx::Context; chunk::Integer=2^16, options::Integer=0x0)\n\nParse the JSON data from io and process it with ctx\'s callbacks. The return value is determined by the implementation of collect for ctx.\n\nKeywords\n\nchunk::Integer=2^16: Number of bytes to read from io at a time.\noptions::Integer=0x0: YAJL parser options, ORed together.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "YAJL.@yajlYAJL.ALLOW_COMMENTSYAJL.ALLOW_MULTIPLE_VALUESYAJL.ALLOW_PARTIAL_VALUESYAJL.ALLOW_TRAILING_GARBAGEYAJL.CALLBACKSYAJL.CLOSE_BRACEYAJL.CLOSE_BRACKETYAJL.COLONYAJL.COMMAYAJL.CallbacksYAJL.ContextYAJL.DONT_VALIDATE_STRINGSYAJL.MINIFY_ARRAYYAJL.MINIFY_ARRAY_FIRSTYAJL.MINIFY_INITYAJL.MINIFY_MAP_KEYYAJL.MINIFY_MAP_KEY_FIRSTYAJL.MINIFY_MAP_VALYAJL.MinifierYAJL.MinifyStateYAJL.NULLYAJL.OPEN_BRACEYAJL.OPEN_BRACKETYAJL.OPTIONSYAJL.ParseErrorYAJL.QUOTEYAJL.ST_CLIENT_CANCELLEDYAJL.ST_ERRORYAJL.ST_OKYAJL.YAJLYAJL.__init__YAJL.addvalYAJL.cb_array_endYAJL.cb_array_startYAJL.cb_booleanYAJL.cb_doubleYAJL.cb_integerYAJL.cb_map_endYAJL.cb_map_keyYAJL.cb_map_startYAJL.cb_nullYAJL.cb_numberYAJL.cb_stringYAJL.check_depsYAJL.checkstatusYAJL.checktypesYAJL.collectYAJL.depsfileYAJL.evalYAJL.hasmethodYAJL.includeYAJL.libyajlYAJL.on_array_endYAJL.on_array_startYAJL.on_booleanYAJL.on_map_endYAJL.on_map_keyYAJL.on_map_startYAJL.on_nullYAJL.on_numberYAJL.on_stringYAJL.runYAJL.writevalYAJL.yajl"
},

]}
