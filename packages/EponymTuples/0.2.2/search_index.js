var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EponymTuples-1",
    "page": "Readme",
    "title": "EponymTuples",
    "category": "section",
    "text": "(Image: Lifecycle) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Julia package for deconstructing dispatch on NamedTuples.Uses the variable names both for the NamedTuple and deconstruction.Allows replacingf((a, b)::NamedTuple{(:a, :b), <: Tuple{Any, Int}}) = ...\n\n(a = a, b = b, c = 3)withf(@eponymargs(a, b::Int)) = ...\n\n@eponymtuple(a, b, c = 3)It is pretty lightweight: @eponymargs and @eponymtuple are the only symbols exported; and the package has no dependencies.The package is registered, install withpkg> add EponymTuples"
},

{
    "location": "autodocs/#EponymTuples.@eponymargs",
    "page": "Docstrings",
    "title": "EponymTuples.@eponymargs",
    "category": "macro",
    "text": "@eponymargs(a, b::T, ...)\n\nExpands to form like ((a, b)::NamedTuple{(:a, :b), <: Tuple{Any, T}}), using the variable names both for the NamedTuple and deconstruction in the function arguments.\n\nValid arguments are variable names, or names followed by a type specifier (when missing, Any is used).\n\nExample\n\njulia> using EponymTuples\n\njulia> foo(@eponymargs(a, b)) = a + b\nfoo (generic function with 1 method)\n\njulia> foo((a = 1, b = 2))\n3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EponymTuples.@eponymtuple",
    "page": "Docstrings",
    "title": "EponymTuples.@eponymtuple",
    "category": "macro",
    "text": "@eponymtuple(a, b = bval, ...)\n\nExpands to (a = a, b = bval, ...), creating a named tuple.\n\nEach argument is either a symbol, resulting in assigning its own value, or an assignment, passed as is.\n\nThe recommended use is the first one, allowing the creation of named tuples without repeating the name. Overriding the value is just for convenience, if you are using it too much you are probably better off with the standard NamedTuple constructor (a = aval, b = bval, ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EponymTuples.@eponymargsEponymTuples.@eponymtupleEponymTuples.EponymTuplesEponymTuples.check_duplicate_varsEponymTuples.evalEponymTuples.includeEponymTuples.var_and_typeEponymTuples.var_and_value_form"
},

]}
