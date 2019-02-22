var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NamedTupleTools.jl-1",
    "page": "Readme",
    "title": "NamedTupleTools.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Some-NamedTuple-utilities-1",
    "page": "Readme",
    "title": "Some NamedTuple utilities",
    "category": "section",
    "text": ""
},

{
    "location": "#Copyright-2015-2019-by-Jeffrey-Sarnoff.-This-work-is-released-under-The-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright © 2015-2019 by Jeffrey Sarnoff. This work is released under The MIT License.",
    "category": "section",
    "text": ""
},

{
    "location": "#[![Build-Status](https://travis-ci.org/JeffreySarnoff/NamedTupleTools.jl.svg?branchmaster)](https://travis-ci.org/JeffreySarnoff/NamedTupleTools.jl)[![codecov](https://codecov.io/gh/JeffreySarnoff/NamedTupleTools.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/JeffreySarnoff/NamedTupleTools.jl)-1",
    "page": "Readme",
    "title": "(Image: Build Status)(Image: codecov)",
    "category": "section",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "NamedTuples are built from fieldnames, given as Symbols and field values, as they may be given. These utilities make some uses of NamedTuples a little more straightforward.  "
},

{
    "location": "#Selecting-Elements-1",
    "page": "Readme",
    "title": "Selecting Elements",
    "category": "section",
    "text": "julia> using NamedTupleTools\n\njulia> nt = NamedTuple{(:a, :b)}(1.0, \"two\")\n(a = 1.0, b = \"two\")\n\njulia> typeof(nt) == NamedTuple{(:a, :b),Tuple{Float64,String}}\ntrue\n\njulia> fieldnames(nt) == (:a, :b)\ntrue\n\njulia> fieldtypes(nt) == (Float64, String)\ntrue\n\njulia> valtype(nt) == Tuple{Float64, String}\ntrue\n\njulia> fieldvalues(nt) == (1.0, \"two\")\ntrue"
},

{
    "location": "#Use-NamedTuple-prototypes-1",
    "page": "Readme",
    "title": "Use NamedTuple prototypes",
    "category": "section",
    "text": "using NamedTupleTools\n\njulia> namedtuple(:a, :b, :c)(1, 2.0, \"three\")\n(a = 1, b = 2.0, c = \"three\")\n\n#=\n    namedtuple(  name1, name2, ..  )\n    namedtuple( (name1, name2, ..) )\n       where the `names` are all `Symbols` or all `Strings`\n\nGenerate a NamedTuple prototype by specifying or obtaining the fieldnames.\nThe prototype is applied to fieldvalues, giving a completed NamedTuple.\n=#\n\njulia> ntproto = namedtuple( :a, :b, :c )\nNamedTuple{(:a, :b, :c),T} where T<:Tuple\n\njulia> ntproto(1, 2, 3)\n(a = 1, b = 2, c = 3)\n\njulia> ntproto(\"A\", \"b\", 3)\n(a = \"A\", b = \"b\", c = 3)\n\njulia> isprototype(ntproto)\ntrue\n\njulia> isprototype((a = 1, b = 2, c = 3))\nfalse"
},

{
    "location": "#Delete-1",
    "page": "Readme",
    "title": "Delete",
    "category": "section",
    "text": "using NamedTupleTools\n\njulia> ntproto = namedtuple( :a, :b, :c );\nNamedTuple{(:a, :b, :c),T} where T<:Tuple\n\njulia> delete(ntproto, :b) === namedtuple(:a, :c)\ntrue\n\njulia> fieldnames(delete(ntproto, :b))\nNamedTuple{(:a, :c),T} where T<:Tuple\n\njulia> fieldnames(delete(ntproto, (:a, :c)), fieldnames(delete(ntproto, :a, :c)\n(:b,), (:b,)\n\njulia> nt = ntproto(1, 2, 3)\n(a = 1, b = 2, c = 3)\n\njulia> delete(nt, :a)\n(b = 2, c = 3)\n\njulia> delete(nt, :a, :c)\n(b = 2,)"
},

{
    "location": "#Merge-1",
    "page": "Readme",
    "title": "Merge",
    "category": "section",
    "text": "# merge from 2..7 NamedTuples\n\njulia> ntproto1 = namedtuple(:a, :b);\njulia> ntproto2 = namedtuple(:b, :c);\n\njulia> merge(ntproto1,ntproto2)\nNamedTuple{(:a, :b, :c),T} where T<:Tuple"
},

{
    "location": "#struct-construction,-conversion-1",
    "page": "Readme",
    "title": "struct construction, conversion",
    "category": "section",
    "text": "using NamedTupleTools\n\njulia> struct MyStruct\n           tally::Int\n           team::String\n       end\n\njulia> mystruct = MyStruct(5, \"hometeam\")\nMyStruct(5, \"hometeam\")\n\njulia> mynamedtuple = ntfromstruct(mystruct)\n(tally = 5, team = \"hometeam\")\n\njulia> ntstruct = structfromnt(MyStruct, mynamedtuple)\nMyStruct(5, \"hometeam\")\n\njulia> mystruct == ntstruct\ntrue"
},

{
    "location": "#Dict-construction,-reconstruction-1",
    "page": "Readme",
    "title": "Dict construction, reconstruction",
    "category": "section",
    "text": "julia> dict = Dict(\"a\" => 1, \"b\" => 2)\nDict{String,Int} with 3 entries:\n  \"a\" => 1\n  \"b\" => 2\n\njulia> nt = namedtuple(dict)\n(a = 1, b = \"two\")\n\njulia> dict = Dict(:a => 1, :b => 2//11, :c => \"three\")\nDict{Symbol,Any} with 3 entries:\n  :a => 1\n  :b => 2//11\n  :c => \"three\"\n\njulia> nt = namedtuple(dict)\n(a = 1, b = 2//11, c = \"three\")\n\njulia> Dict(nt) == dict\ntrue"
},

{
    "location": "#Vector-of-Pairs-(pdeffebach)-1",
    "page": "Readme",
    "title": "Vector of Pairs (pdeffebach)",
    "category": "section",
    "text": "julia> vec = [:a => 1, :b => 2]\n2-element Array{Pair{Symbol,Int64},1}:\n :a => 1\n :b => 2\n\njulia> nt = namedtuple(vec)\n(a = 1, b = 2)"
},

{
    "location": "#Defined-Variables-(Sebastian-Pfitzner)-1",
    "page": "Readme",
    "title": "Defined Variables (Sebastian Pfitzner)",
    "category": "section",
    "text": "julia> a, b, c, d = 1, 1.0, 1//1, \"one\"\n(1, 1.0, 1//1, \"one\")\njulia> nt = @namedtuple(a, b, c, d)\n(a = 1, b = 1.0, c = 1//1, d = \"one\")\n"
},

{
    "location": "autodocs/#NamedTupleTools.NamedTupleTools",
    "page": "Docstrings",
    "title": "NamedTupleTools.NamedTupleTools",
    "category": "module",
    "text": " NamedTupleTools\n\nThis module provides some useful NamedTuple tooling.\n\nsee namedtuple, isprototype,     fieldnames, fieldtypes, fieldvalues     delete, merge\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedTupleTools.delete",
    "page": "Docstrings",
    "title": "NamedTupleTools.delete",
    "category": "function",
    "text": "delete(namedtuple, symbol(s)|Tuple)    delete(ntprototype, symbol(s)|Tuple)\n\nGenerate a namedtuple [ntprototype] from the first arg omitting fields present in the second arg.\n\nsee: merge\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedTupleTools.fieldvalues",
    "page": "Docstrings",
    "title": "NamedTupleTools.fieldvalues",
    "category": "function",
    "text": "fieldvalues\n\nobtain values assigned to fields of a struct type (in field order)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedTupleTools.isprototype",
    "page": "Docstrings",
    "title": "NamedTupleTools.isprototype",
    "category": "function",
    "text": "isprototype( ntprototype )\nisprototype( namedtuple  )\n\nPredicate that identifies NamedTuple prototypes.\n\nsee: namedtuple\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedTupleTools.namedtuple",
    "page": "Docstrings",
    "title": "NamedTupleTools.namedtuple",
    "category": "function",
    "text": "namedtuple(  name1, name2, ..  )\nnamedtuple( (name1, name2, ..) )\nnamedtuple(  namedtuple )\n\nGenerate a NamedTuple prototype by specifying or obtaining the fieldnames. The prototype is applied to fieldvalues, giving a completed NamedTuple.\n\nExample\n\njulia> ntprototype = namedtuple( :a, :b, :c )\n\nNamedTuple{(:a, :b, :c),T} where T<:Tuple\n\njulia> nt123 = ntprototype(1, 2, 3)\n\n(a = 1, b = 2, c = 3)\n\njulia> ntAb3 = ntprototype(\"A\", \"b\", 3)\n\n(a = \"A\", b = \"b\", c = 3)\n\nsee: isprototype\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NamedTupleTools.@namedtupleNamedTupleTools.NamedTupleToolsNamedTupleTools.deleteNamedTupleTools.evalNamedTupleTools.fieldvaluesNamedTupleTools.includeNamedTupleTools.isprototypeNamedTupleTools.lengthofNamedTupleTools.namedtupleNamedTupleTools.ntfromstructNamedTupleTools.structfromnt"
},

]}
