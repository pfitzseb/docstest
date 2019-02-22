var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LazyJSON.jl-1",
    "page": "Readme",
    "title": "LazyJSON.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: LazyJSON)LazyJSON is an interface for reading JSON data in Julia programs.If you find it useful, or not, please report your experiance in the discourse thread.LazyJSON provides direct access to values stored in a JSON text though standard Julia interfaces: Number, AbstractString, AbstractVector and AbstractDict.The function LazyJSON.value constructs an object representing the value(s) of a JSON text.LazyJSON.value(jsontext::AbstractString) -> Union{Bool,\n                                                  LazyJSON.Number,\n                                                  LazyJSON.String,\n                                                  LazyJSON.Array,\n                                                  LazyJSON.Object,\n                                                  Nothing}\nLazyJSON.Number <: Base.Number\nLazyJSON.String <: AbstractString\nLazyJSON.Array  <: AbstractVector{Any}\nLazyJSON.Object <: AbstractDict{AbstractString,Any}e.g.julia> j = LazyJSON.value(\"\"\"{\n           \"foo\": [1, 2, 3, \"four\"]\n           \"bar\": null\n       }\"\"\")\nLazyJSON.Object with 2 entries:\n  \"foo\" => Any[1, 2, 3, \"four\"]\n  \"bar\" => nothing\n\njulia> j[\"foo\"]\n4-element LazyJSON.Array:\n 1\n 2\n 3\n  \"four\"\n\njulia> j[\"foo\"][4]\n\"four\"\n\njulia> typeof(j[\"bar\"])\nNothingThe fields of JSON objects can also be accessed using \'.\' (getproperty) syntax.e.g.julia> j.foo\n4-element LazyJSON.Array:\n 1\n 2\n 3\n  \"four\"JSON Objects can be converted to struct types.e.g.julia> struct Point\n           x::Int\n           y::Int\n       end\n\njulia> struct Line\n           a::Point\n           b::Point\n       end\n\njulia> struct Arrow\n           label::String\n           segments::Vector{Line}\n           dashed::Bool\n       end\n\njulia> convert(Arrow, LazyJSON.value(\"\"\"{\n           \"label\": \"Hello\",\n           \"segments\": [\n                {\"a\": {\"x\": 1, \"y\": 1}, \"b\": {\"x\": 2, \"y\": 2}},\n                {\"a\": {\"x\": 2, \"y\": 2}, \"b\": {\"x\": 3, \"y\": 3}}\n            ],\n            \"dashed\": false\n       }\"\"\"))\nArrow(\"Hello\", Line[Line(Point(1, 1), Point(2, 2)), Line(Point(2, 2), Point(3, 3))], false)For compatibility with other JSON interfaces that have a parse function, LazyJSON.parse is provided as an alias for LazyJSON.value. e.g.e.g.julia> j = LazyJSON.parse(\"\"\"{\n           \"foo\": [1, 2, 3, \"four\"]\n           \"bar\": null\n       }\"\"\")\n\njulia> j[\"foo\"][4]\n\"four\""
},

{
    "location": "#Lazyness-1",
    "page": "Readme",
    "title": "Lazyness",
    "category": "section",
    "text": "LazyJSON is lazy in the sense that it assumes that its input is well formed JSON text. It does not try to detect every type of JSON syntax error. If security is a concern, JSON data of unknown providence should probably be validated before use.LazyJSON is also lazy in the sense that it does not process any part of the JSON text until values are requested through the AbstractVector and AbstractDict interfaces.i.e. j = LazyJSON.value(jsontext) does no parsing and immediately returns a thin wrapper object.j[\"foo\"] calls get(::AbstractDict, \"foo\"), which parses just enough to find the \"foo\" field.j[\"foo\"][4] calls getindex(::AbstractArray, 4), which continues paring up to the fourth item in the array.This results in much less memory allocation compared to non-lazy parsers:JSON.jl:j = String(read(\"ec2-2016-11-15.normal.json\"))\njulia> function f(json)\n           v = JSON.parse(json)\n           v[\"shapes\"][\"scope\"][\"enum\"][1]\n       end\n\njulia> @time f(j)\n  0.066773 seconds (66.43 k allocations: 7.087 MiB)\n\"Availability Zone\"LazyJSON.jl:julia> function f(json)\n           v = LazyJSON.parse(json)\n           v[\"shapes\"][\"scope\"][\"enum\"][1]\n       end\n\njulia> @time f(j)\n  0.001392 seconds (12 allocations: 384 bytes)\n\"Availability Zone\"LazyJSON\'s AbstractString and Number implementations are lazy too.The text of a LazyJSON.Number is not parsed to Int64 or Float64 form until it is needed for a numeric operation. If the number is only used in a textual context, it need never be parsed at all. e.g.j = LazyJSON.value(jsontext)\nhtml = \"\"\"<img width=$(j[\"width\"]), height=$(j[\"height\"])>\"\"\"Likewise, the content of a LazyJSON.String is not interpreted until it is accessed. If a LazyJSON.String containing complex UTF16 escape sequences is compared to a UTF8 Base.String, and the two strings differ in the first few characters, then the comparison will terminate before the any unescaping work needs to be done."
},

{
    "location": "#LazyJSON-Performance-Considerations-1",
    "page": "Readme",
    "title": "LazyJSON Performance Considerations",
    "category": "section",
    "text": ""
},

{
    "location": "#LazyJSON.Array-Performance-1",
    "page": "Readme",
    "title": "LazyJSON.Array Performance",
    "category": "section",
    "text": "The LazyJSON.Array does not keep track of the indices of its items. Every array[i] access scans all the values in the array until it reaches the ith value. This is fast if you only need to access a single item, even near the end of the array, because the alternative of transforming the LazyJSON.Array into a Base.Array must scan the entire array and allocate new memory for each item. It is also fast to access multiple items near the start of the array. However, if you need random access to many items in a large array it is better to convert it to a Base.Array.e.g.v = LazyJSON.value(jsontext)[\"foo\"][\"bar\"][\"an_array\"]\nv = convert(Vector{Any}, v)If you need to access the items in the array sequentially, the iteration interface is very efficient, but incrementing an index is very inefficient. length(::LazyJSON.Array) is also inefficient, in that it must scan the whole array.e.g.v = LazyJSON.value(jsontext)[\"foo\"][\"bar\"][\"an_array\"]\nfor i in v ✅\n    println(i)\nend\n\nr = map(i -> f(i), v) ✅\n\ni = 1\nwhile i < length(v) ❌\n    println(v[i]) ❌\nend"
},

{
    "location": "#LazyJSON.Object-Performance-1",
    "page": "Readme",
    "title": "LazyJSON.Object Performance",
    "category": "section",
    "text": "The performance considerations for LazyJSON.Object are similar to those described above for LazyJSON.Array. The LazyJSON.Object does not keep a hash table of keys. Every object[\"key\"] access scans all the keys in the object until it finds a match. Accessing a keys in an object with a small number of keys is efficient. Accessing a few keys in an object with many keys is effiecient. However, if you need random acess to many keys in a large object it is better to convert it to a Base.Dict.e.g.v = LazyJSON.value(jsontext)[\"foo\"][\"bar\"][\"an_object_with_many_keys\"]\nv = convert(Dict, v)length(::LazyJSON.Object) is inefficient, in that it must scan the whole object. If you need to access the key value pairs sequentially, the iteration interface is very efficient.e.g.o = LazyJSON.value(jsontext)[\"foo\"][\"bar\"][\"an_object_with_many_keys\"]\nfor (k, v) in o ✅\n    println(k, v)\nend\n\nr = filter((k, v) -> contains(i, r\".jpg$\", o)) ✅\n\nfor k in long_list_of_keys\n    println(o[k]) ❌\nend\n\nd = convert(Dict, o)\nfor k in long_list_of_keys\n    println(d[k]) ✅\nend"
},

{
    "location": "#LazyJSON.Number-Performance-1",
    "page": "Readme",
    "title": "LazyJSON.Number Performance",
    "category": "section",
    "text": "Whenever a LazyJSON.Number is used in a numeric operation it must be parsed from its string form into an Int or a Float. If you are only using each each numetic value once, there is no performance penalty, as the string is only parsed once. However if you need to use the numeric value many times, it is better to convert it to a normal Base number type.e.g.i = LazyJSON.value(jsontext)[\"foo\"]\nx = origin.x + i[\"width\"],  ✅ used once in an addition operation\ny = origin.y + i[\"height\"]  ✅\ndraw(i[\"data\"], x, y)\n\n\nlimit = LazyJSON.value(jsontext)[\"foo\"][\"limit\"]\ni = 0\nwhile i < limit ❌ re-parsed every time the less than operation is evaluated\n    i += 1\n    ...\nend\nlimit = convert(Int, LazyJSON.value(jsontext)[\"foo\"][\"limit\"]) ✅\n\n\nv = LazyJSON.value(jsontext)[\"foo\"][\"ammounts\"]\ntotal = sum(v) ✅ iteration is efficient, each number is parsed once.\n\n\nstruct Foo\n    x::Int\n    y::Int\nend\ni = LazyJSON.value(jsontext)[\"foo\"]\nFoo(i[\"x\"], i[\"y\"]) ✅ converted to `Int` on assignment to struct fields.\n\n\nv = LazyJSON.value(jsontext)[\"foo\"][\"values\"]\nints = convert(Vector{Int}, v) ✅ manual conversion when needed"
},

{
    "location": "#Implementation-1",
    "page": "Readme",
    "title": "Implementation",
    "category": "section",
    "text": "Values are represented by a reference to the JSON text String and the byte index of the value text. The LazyJSON.value(jsontext) function simply returns a LazyJSON.Value object with s = jsontext and i = 1.    String: {\"foo\": 1,    \"bar\": [1, 2, 3, \"four\"]}\n            ▲                    ▲      ▲  ▲\n            │                    │      │  │\n            ├─────────────────┐  │      │  │\n            │ LazyJSON.Array( s, i=9)   │  │   == Any[1, 2, 3, \"four\"]\n            │                           │  │\n            ├─────────────────┐  ┌──────┘  │\n            │ LazyJSON.Number(s, i=16)     │   == 3\n            │                              │\n            ├─────────────────┐  ┌─────────┘\n            │ LazyJSON.String(s, i=19)         == \"four\"\n            │\n            └─────────────────┬──┐\n              LazyJSON.Object(s, i=1)LazyJSON does not parse and translate values into concrete Julia Number, String, Array or Dict objects. Instead it provides interface methods that conform to the protocols of Base.Number, AbstractString, AbstractVector and AbstractDict.  These methods interpret the JSON text on the fly and parse only as much as is needed return the requested values."
},

{
    "location": "#Large-JSON-Texts-1",
    "page": "Readme",
    "title": "Large JSON Texts",
    "category": "section",
    "text": "LazyJSON can process JSON files that are too big to fit in available RAM by using the mmap interface.e.g.using Mmap\nf = open(\"huge_file_that_wont_fit_in_ram.json\", \"r\")\ns = String(Mmap.mmap(f))\nj = LazyJSON.value(s)\nv = j[\"foo\"][\"bar\"]The operating stytem will lazily load enough chunks of the file into RAM to reach field \"bar\" of opject \"foo\"."
},

{
    "location": "#Benchmarks-1",
    "page": "Readme",
    "title": "Benchmarks",
    "category": "section",
    "text": "For some workloads lazyness makes LazyJSON faster and less memory intensive than JSON parsers that parse the entire JSON text and allocate a tree of collection and value objects.The test/benchmark.jl test uses a 1MB AWS API definition JSON file to compare performance vs JSON.jl.  When accessing a value close to the start of the file the lazy parser is orders of magnitude faster than JSON.jl, for values near then end of the file, the lazy parser is about 6 times faster. (Each test case is run once for JIT warmup, then 190 times for measurement.)Julia Version 0.7.0-DEV.3761\nJSON.jl master Tue Feb 6, 98727675b635c8428effa30a2287a9fe6370e664\n\nAccess value close to start:\nLazyJSON.jl:  0.000568 seconds (3.42 k allocations: 139.531 KiB)\nJSON.jl:      6.410700 seconds (13.28 M allocations: 1.337 GiB, 3.17% gc time)\n\n\nAccess 2 values close to end:\nLazyJSON.jl:  0.177059 seconds (7.79 k allocations: 347.344 KiB)\nJSON.jl:      6.417241 seconds (13.28 M allocations: 1.337 GiB, 3.18% gc time)Note, until recently JSON.jl was taking ~1 second for the tests above. It seems that it may be hampered deprecation of IOBuffer(maxsize::Integer).The test/benchmark_geo.jl test uses a 1.2MB GeoJSON file to compare performance vs JSON.jl. The first test extracts a country name near the middle of the file. The second test checks that the country outline polygon is at the expected coordinates.Country name\nLazyJSON.jl:  0.004762 seconds (190 allocations: 5.938 KiB)\nJSON.jl:      1.063652 seconds (8.62 M allocations: 373.471 MiB, 11.19% gc time)\n\nMap data\nLazyJSON.jl:  0.011075 seconds (27.30 k allocations: 679.547 KiB)\nJSON.jl:      1.064750 seconds (8.62 M allocations: 373.541 MiB, 10.75% gc time)"
},

{
    "location": "#TODO:-1",
    "page": "Readme",
    "title": "TODO:",
    "category": "section",
    "text": "New Lazyer parser looses some format validation, consider recovering old code validation code from src/OldLazyJSON.jl"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Another lazy JSON parser: https://github.com/doubledutch/LazyJSON\nRFC 7159: https://tools.ietf.org/html/rfc7159"
},

{
    "location": "autodocs/#LazyJSON.Indexes",
    "page": "Docstrings",
    "title": "LazyJSON.Indexes",
    "category": "type",
    "text": "Iterate over the byte-indexes of the values in a JSON Array, or the byte-indexes of the alternating field names and values in a JSON Object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.String",
    "page": "Docstrings",
    "title": "LazyJSON.String",
    "category": "type",
    "text": "Values are represented by a reference to the JSON text String and the byte index of the value text.\n\nString: {\"foo\": 1, \"bar\": [1, 2, 3, \"four\"]}\n        ▲                 ▲      ▲  ▲\n        │                 │      │  │\n        ├──────────────┐  │      │  │\n        │   JSON.Array(s, i=9)   │  │   == Any[1, 2, 3, \"four\"]\n        │                        │  │\n        ├───────────────┐  ┌─────┘  │\n        │   JSON.Number(s, i=16)    │   == 3\n        │                           │\n        ├───────────────┐  ┌────────┘\n        │   JSON.String(s, i=19)        == \"four\"\n        │\n        └───────────────┬──┐\n            JSON.Object(s, i=1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.collection_length",
    "page": "Docstrings",
    "title": "LazyJSON.collection_length",
    "category": "function",
    "text": "Count the number of values in an Array or Object. For an Object, the count includes the field names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.get_field",
    "page": "Docstrings",
    "title": "LazyJSON.get_field",
    "category": "function",
    "text": "Get a field from a JSON.Object starting at start_i. Returns start_i for next field and field value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.get_ic",
    "page": "Docstrings",
    "title": "LazyJSON.get_ic",
    "category": "function",
    "text": "Get the index i and first byte c of the field value for key in an Object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.getc",
    "page": "Docstrings",
    "title": "LazyJSON.getc",
    "category": "function",
    "text": "Get byte i in string s without bounds checking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.getflat",
    "page": "Docstrings",
    "title": "LazyJSON.getflat",
    "category": "function",
    "text": "Get a flattened (non-lazy) Julia object for a value in a JSON text; and the index of the last character of the value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.getindex_ic",
    "page": "Docstrings",
    "title": "LazyJSON.getindex_ic",
    "category": "function",
    "text": "Get the index i and first byte c of the nth value in an Array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.getpath",
    "page": "Docstrings",
    "title": "LazyJSON.getpath",
    "category": "function",
    "text": "Find the value at a specified key path in a JSON text.\n\ns, a JSON text\npath, A vector of Ints and Strings representing JSON Array indexes and         JSON Object field names.\ni, start index\nc, byte at index i\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.getvalue",
    "page": "Docstrings",
    "title": "LazyJSON.getvalue",
    "category": "function",
    "text": "Get a JSON value object for a value in a JSON text.\n\ns, the JSON text.\ni, byte index of the value in JSON text.\nc, first byte of the value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.hexvalue",
    "page": "Docstrings",
    "title": "LazyJSON.hexvalue",
    "category": "function",
    "text": "Lookup tables for hex digits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.isbegin",
    "page": "Docstrings",
    "title": "LazyJSON.isbegin",
    "category": "function",
    "text": "https://tools.ietf.org/html/rfc7159#section-2\n\nThese are the six structural characters:\n    begin-array     = ws %x5B ws  ; [ left square bracket\n    begin-object    = ws %x7B ws  ; { left curly bracket\n    end-array       = ws %x5D ws  ; ] right square bracket\n    end-object      = ws %x7D ws  ; } right curly bracket\n    name-separator  = ws %x3A ws  ; : colon\n    value-separator = ws %x2C ws  ; , comma\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.isescape",
    "page": "Docstrings",
    "title": "LazyJSON.isescape",
    "category": "function",
    "text": "Is i the index of the start of an escape sequence in a JSON string s? Yes if s[i] == \'\\\', unless the escape is escaped itself.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.isnoise",
    "page": "Docstrings",
    "title": "LazyJSON.isnoise",
    "category": "function",
    "text": "The tokeniser ignores whitespace and separators between values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.isnull",
    "page": "Docstrings",
    "title": "LazyJSON.isnull",
    "category": "function",
    "text": "jl_alloc_string allocates n + 1 bytes and sets the last byte to 0x00 https://github.com/JuliaLang/julia/blob/master/src/array.c#L464\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.isnum",
    "page": "Docstrings",
    "title": "LazyJSON.isnum",
    "category": "function",
    "text": "First character of a Start of a JSON Number https://tools.ietf.org/html/rfc7159#section-6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.iswhitespace",
    "page": "Docstrings",
    "title": "LazyJSON.iswhitespace",
    "category": "function",
    "text": "https://tools.ietf.org/html/rfc7159#section-2\n\nInsignificant whitespace is allowed before or after any of the six\nstructural characters.\n\nws = *(\n        %x20 /              ; Space\n        %x09 /              ; Horizontal tab\n        %x0A /              ; Line feed or New line\n        %x0D )              ; Carriage return\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.json_char",
    "page": "Docstrings",
    "title": "LazyJSON.json_char",
    "category": "function",
    "text": "Return a Char from a JSON string s at index i. Unescpe character if needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.json_unescape_char",
    "page": "Docstrings",
    "title": "LazyJSON.json_unescape_char",
    "category": "function",
    "text": "Return the character code for an escaped character in a JSON string s starting at index i (the \\ character).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.jsonstring",
    "page": "Docstrings",
    "title": "LazyJSON.jsonstring",
    "category": "function",
    "text": "JSON text representation of x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.lastindex_of_collection",
    "page": "Docstrings",
    "title": "LazyJSON.lastindex_of_collection",
    "category": "function",
    "text": "Find index of last byte of a JSON Collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.lastindex_of_number",
    "page": "Docstrings",
    "title": "LazyJSON.lastindex_of_number",
    "category": "function",
    "text": "Find index of last byte of a JSON Number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.lastindex_of_string",
    "page": "Docstrings",
    "title": "LazyJSON.lastindex_of_string",
    "category": "function",
    "text": "Find index of last byte of a JSON String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.lastindex_of_token",
    "page": "Docstrings",
    "title": "LazyJSON.lastindex_of_token",
    "category": "function",
    "text": "Find last index of a value or collection begin/end token end in a JSON text.\n\ns, a JSON text\ni, token start index\nc, byte at index i\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.lastindex_of_value",
    "page": "Docstrings",
    "title": "LazyJSON.lastindex_of_value",
    "category": "function",
    "text": "Find index of last byte of a JSON value.\n\ns, a JSON text\ni, value start index\nc, byte at index i\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.next_ic",
    "page": "Docstrings",
    "title": "LazyJSON.next_ic",
    "category": "function",
    "text": "Increment i and get byte i in string s without bounds checking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.parse",
    "page": "Docstrings",
    "title": "LazyJSON.parse",
    "category": "function",
    "text": "See LazyJSON.value(jsontext) -> JSON.Value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.parse_number",
    "page": "Docstrings",
    "title": "LazyJSON.parse_number",
    "category": "function",
    "text": "https://tools.ietf.org/html/rfc7159#section-6\n\n  number = [ minus ] int [ frac ] [ exp ]\n\n  decimal-point = %x2E       ; .\n\n  digit1-9 = %x31-39         ; 1-9\n\n  e = %x65 / %x45            ; e E\n\n  exp = e [ minus / plus ] 1*DIGIT\n\n  frac = decimal-point 1*DIGIT\n\n  int = zero / ( digit1-9 *DIGIT )\n\n  minus = %x2D               ; -\n\n  plus = %x2B                ; +\n\n  zero = %x30                ; 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.promotejson",
    "page": "Docstrings",
    "title": "LazyJSON.promotejson",
    "category": "function",
    "text": "Promote a JSON.Vaue to an equivalent Base type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.scan_string",
    "page": "Docstrings",
    "title": "LazyJSON.scan_string",
    "category": "function",
    "text": "Find index of last byte of a JSON String and check for existence of the escape character.\n\nhttps://tools.ietf.org/html/rfc7159#section-7\n\nstring = quotation-mark *char quotation-mark\nchar = unescaped / escape ( ... )\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.setc_utf8",
    "page": "Docstrings",
    "title": "LazyJSON.setc_utf8",
    "category": "function",
    "text": "Write a Unicode chatacter c into a String s as UTF8 at byte index i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.skip_noise",
    "page": "Docstrings",
    "title": "LazyJSON.skip_noise",
    "category": "function",
    "text": "Skip over non-value characters in String s starting at index i + 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.skip_whitespace",
    "page": "Docstrings",
    "title": "LazyJSON.skip_whitespace",
    "category": "function",
    "text": "Skip over whitespace in String s starting at index i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.splice",
    "page": "Docstrings",
    "title": "LazyJSON.splice",
    "category": "function",
    "text": "Replace value v with x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.string_index_isvalid",
    "page": "Docstrings",
    "title": "LazyJSON.string_index_isvalid",
    "category": "function",
    "text": "Is i the index of the start of a character sequence in a JSON string s? A valid i can point to:\n\na single-byte (7-bit) character;\na \'\\X\' escaped 7-bit character;\nthe start of a multi-byte UTF8 character;\nthe start of a \\uXXXX escaped UTF16 character;\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.unescape_c",
    "page": "Docstrings",
    "title": "LazyJSON.unescape_c",
    "category": "function",
    "text": "https://tools.ietf.org/html/rfc7159#section-7\n\nchar = unescaped /\n    escape (\n        %x22 /          ; \"    quotation mark  U+0022\n        %x5C /          ; \\    reverse solidus U+005C\n        %x2F /          ; /    solidus         U+002F\n        %x62 /          ; b    backspace       U+0008\n        %x66 /          ; f    form feed       U+000C\n        %x6E /          ; n    line feed       U+000A\n        %x72 /          ; r    carriage return U+000D\n        %x74 /          ; t    tab             U+0009\n        %x75 4HEXDIG )  ; uXXXX                U+XXXX\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.unescape_hex4",
    "page": "Docstrings",
    "title": "LazyJSON.unescape_hex4",
    "category": "function",
    "text": "Read 4HEXDIG from a String s at byte index i + 1. FIXME more instructions but less memory access might be faster. Need to test.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.unescape_json_string",
    "page": "Docstrings",
    "title": "LazyJSON.unescape_json_string",
    "category": "function",
    "text": "Unescape bytes of a String s up to byte index l, starting at byte index i. Return a new String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyJSON.value",
    "page": "Docstrings",
    "title": "LazyJSON.value",
    "category": "function",
    "text": "value(jsontext) -> JSON.Value\nJSON.Value <: Union{Number, AbstractString, AbstractVector, AbstractDict}\n\nCreate a JSON.Value object from a JSON text.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LazyJSON.!=LazyJSON.==LazyJSON.ArrayLazyJSON.CollectionLazyJSON.IOStringsLazyJSON.IndexesLazyJSON.JSONLazyJSON.JSONjlLazyJSON.LazyJSONLazyJSON.NumberLazyJSON.ObjectLazyJSON.ParseErrorLazyJSON.PropertyDictsLazyJSON.SplicedStringsLazyJSON.StringLazyJSON.SupportedStringLazyJSON.UnsafeLazyJSON.ValueLazyJSON._getLazyJSON._iterateLazyJSON.collection_lengthLazyJSON.decimalLazyJSON.enable_getpropertyLazyJSON.evalLazyJSON.flat_arrayLazyJSON.flat_objectLazyJSON.flattenLazyJSON.get_fieldLazyJSON.get_icLazyJSON.getcLazyJSON.getflatLazyJSON.getindex_icLazyJSON.getpathLazyJSON.getvalueLazyJSON.hexvalueLazyJSON.includeLazyJSON.indexesLazyJSON.isbeginLazyJSON.isendLazyJSON.isescapeLazyJSON.ishexdigitLazyJSON.isnoiseLazyJSON.isnullLazyJSON.isnumLazyJSON.isreservedLazyJSON.iswhitespaceLazyJSON.json_charLazyJSON.json_unescape_charLazyJSON.jsonstringLazyJSON.lastindex_of_collectionLazyJSON.lastindex_of_numberLazyJSON.lastindex_of_stringLazyJSON.lastindex_of_tokenLazyJSON.lastindex_of_valueLazyJSON.memcmpLazyJSON.next_cLazyJSON.next_iLazyJSON.next_icLazyJSON.nextindexLazyJSON.old_parse_numberLazyJSON.parseLazyJSON.parse_numberLazyJSON.parse_stringLazyJSON.promotejsonLazyJSON.scan_stringLazyJSON.setc_utf8LazyJSON.skip_noiseLazyJSON.skip_whitespaceLazyJSON.spliceLazyJSON.string_index_isvalidLazyJSON.tmpLazyJSON.unescape_cLazyJSON.unescape_hex4LazyJSON.unescape_json_stringLazyJSON.unhex_1LazyJSON.unhex_10LazyJSON.unhex_100LazyJSON.unhex_1000LazyJSON.unmangled_fieldnamesLazyJSON.valueLazyJSON.wrap_object"
},

]}
