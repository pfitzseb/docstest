var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#KeywordDispatch.jl-1",
    "page": "Readme",
    "title": "KeywordDispatch.jl",
    "category": "section",
    "text": "(Image: Build Status)Dispatch on keyword arguments. It exports 2 macros:@kwdispatch designates a function signature to use for keyword dispatch\n@kwmethod defines the method for the keyword argument"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using KeywordDispatch\n\n@kwdispatch f()\n\n@kwmethod f(;a) = \"a is $a\"\n@kwmethod f(;a::Integer) = \"a is $a, and is an Integer\"\n@kwmethod f(;b) = \"b is $b\"\n@kwmethod f(;a,b) = \"a is $a, b is $b\"\n@kwmethod f(;) = \"look mum, no args!\"at the REPL:julia> f()\n\"look mum, no args!\"\n\njulia> f(a=1.0)\n\"a is 1.0\"\n\njulia> f(a=1)\n\"a is 1, and is an Integer\"\n\njulia> f(b=3,a=1)\n\"a is 1, b is 3\""
},

{
    "location": "autodocs/#KeywordDispatch.@kwdispatch",
    "page": "Docstrings",
    "title": "KeywordDispatch.@kwdispatch",
    "category": "macro",
    "text": "@kwdispatch sig [methods]\n\nDesignate a function signature sig that should dispatch on keyword arguments. A function can also be provided, in which case all calls to that function are will dispatch to keyword methods.\n\nIt is possible to specify keyword aliases by specifying from => to pairs in the keyword position.\n\nThe optional methods argument allows a block of keyword methods specified as anonymous functions. To define additional keyword methods, use the @kwmethod macro.\n\nExamples\n\n@kwdispatch f(_)\n@kwdispatch f(_::Real)\n\n@kwdispacth f # equivalent to @kwdispatch f(_...)\n\n@kwdispatch f(x) begin\n    (a) -> x+a\n    (b) -> x-b\nend\n# equivalent to\n#  @kwdispatch f(x)\n#  @kwmethod f(x;a) = x+a\n#  @kwmethod f(x;b) = x-b\n\n@kwdispatch f(; alpha=>α) # specifies alpha as an alias to α\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KeywordDispatch.@kwmethod",
    "page": "Docstrings",
    "title": "KeywordDispatch.@kwmethod",
    "category": "macro",
    "text": "@kwmethod expr\n\nDefine a keyword method for dispatch. expr should be a standard function definition (either block or inline) with a keyword argument block (which may be empty).\n\nThe positional signature should first be designated by the @kwdispatch macro.\n\nExamples\n\n@kwdispatch f() # designate the no positional argument form\n\n@kwmethod f(;) = nothing # no keyword arguments\n@kwmethod f(;a) = a\n@kwmethod f(;b) = 2*b\n@kwmethod f(;a,b) = a+2*b\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "KeywordDispatch.@kwdispatchKeywordDispatch.@kwmethodKeywordDispatch.KeywordDispatchKeywordDispatch.KeywordMethodErrorKeywordDispatch.argmethKeywordDispatch.argsymKeywordDispatch.argtypeKeywordDispatch.evalKeywordDispatch.generate_kwmethodsKeywordDispatch.includeKeywordDispatch.kwcallKeywordDispatch.kwmethod_exprKeywordDispatch.ntsortKeywordDispatch.unwrap_whereKeywordDispatch.wrap_where"
},

]}
