var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StructC14N.jl-1",
    "page": "Readme",
    "title": "StructC14N.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Structure-and-named-tuple-canonicalization.-1",
    "page": "Readme",
    "title": "Structure and named tuple canonicalization.",
    "category": "section",
    "text": "(works only with Julia v0.7/v1.0)(Image: Build Status)Install with:]add StructC14N________This package exports the canonicalize function which allows canonicalization of structures and named tuples according to a template structure or named tuple.The signature is as follows:canonicalize(template, input)template can be either a structure or a named tuple.  Return value has the same type as template.  input can be a structure, a named tuple or a tuple.  In the latter case the tuple must contains the same number of items as the template.Type ? canonicalize in the REPL to see the documentation for individual methods."
},

{
    "location": "#Canonicalization-rules:-1",
    "page": "Readme",
    "title": "Canonicalization rules:",
    "category": "section",
    "text": "output keys are the same as in template;\nif input contains less items than template, the default values in template will be used to fill unspecified values;\noutput default values are determined as follows:\nif template is a named tuple and if one of its value is a Type T, the corresponding default value is Missing;\nif template is not a named tuple, or if one of its value is of Type T, the corresponging default value is the value itself;\noutput default values are overridden by values in input if a key in input is the same, or it is an unambiguous abbreviation, of one of the keys in template;\noutput override occurs regardless of the order of items in template and input;\nif a key in input is not an abbreviation of the keys in template,  or if the abbreviation is ambiguous, an error is raised;\nvalues in output are deep copied from input, and converted to the appropriate type.  If conversion is not possible an error is raised."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "using StructC14N\n\n# Create a template\ntemplate = (xrange=NTuple{2,Number},\n            yrange=NTuple{2,Number},\n            title=\"A string\")\n\n# Create input named tuple...\nnt = (xr=(1,2), tit=\"Foo\")\n\n# Dump canonicalized version\ndump(canonicalize(template, nt))will result inNamedTuple{(:xrange, :yrange, :title),Tuple{Tuple{Int64,Int64},Missing,String}}\n  xrange: Tuple{Int64,Int64}\n    1: Int64 1\n    2: Int64 2\n  yrange: Missing missing\n  title: String \"Foo\"One of the main use of canonicalize is to call functions using abbreviated keyword names (i.e. it can be used as a replacement for AbbrvKW.jl).  Consider the following function:function Foo(; OptionalKW::Union{Missing,Bool}=missing, Keyword1::Int=1,\n               AnotherKeyword::Float64=2.0, StillAnotherOne=3, KeyString::String=\"bar\")\n    @show OptionalKW\n    @show Keyword1\n    @show AnotherKeyword\n    @show StillAnotherOne\n    @show KeyString\nendThe only way to use the keywords is to type their entire names, resulting in very long code lines, i.e.:Foo(Keyword1=10, AnotherKeyword=20.0, StillAnotherOne=30, KeyString=\"baz\")By using canonicalize we may re-implement the function as followsfunction Foo(; kwargs...)\n    template = (; OptionalKW=Bool, Keyword1=1,\n               AnotherKeyword=2.0, StillAnotherOne=3, KeyString=\"bar\")\n    kw = StructC14N.canonicalize(template; kwargs...)\n    @show kw.OptionalKW\n    @show kw.Keyword1\n    @show kw.AnotherKeyword\n    @show kw.StillAnotherOne\n    @show kw.KeyString\nendAnd call it using abbreviated keyword names:Foo(Keyw=10, A=20.0, S=30, KeyS=\"baz\") # Much shorter, isn\'t it?A wrong abbreviation or a wrong type will result in errors:Foo(aa=1)\nFoo(Keyw=\"abc\")Another common use of StructC14N is in parsing configuration files, e.g.:configtemplate = (optStr=String,\n                  optInt=Int,\n                  optFloat=Float64)\n\n# Parse a tuple\nconfigentry = \"aa, 1, 2\"\nc = canonicalize(configtemplate, (split(configentry, \",\")...,))\n\n# Parse a named tuple\nconfigentry = \"optFloat=20, optStr=\\\"aaa\\\", optInt=10\"\nc = canonicalize(configtemplate, eval(Meta.parse(\"($configentry)\")))"
},

{
    "location": "autodocs/#StructC14N.canonicalize",
    "page": "Docstrings",
    "title": "StructC14N.canonicalize",
    "category": "function",
    "text": "canonicalize(template::NamedTuple, input::NamedTuple)\n\nCanonicalize the input named tuple according to template and   return the \"canonicalized\" named tuple.\n\n\n\n\n\ncanonicalize(template::DataType, input::NamedTuple)\n\nCanonicalize the input named tuple according to template and   return the \"canonicalized\" structure.\n\n\n\n\n\ncanonicalize(template, input::NamedTuple)\n\nCanonicalize the input named tuple according to template and   return the \"canonicalized\" structure.\n\n\n\n\n\ncanonicalize(template::NamedTuple, input::Tuple)\n\nCanonicalize the input tuple according to template, and   return the \"canonicalized\" named tuple.\n\n\n\n\n\ncanonicalize(template::DataType, input::Tuple)\n\nCanonicalize the input tuple according to template, and   return the \"canonicalized\" structure.\n\n\n\n\n\ncanonicalize(template, input::Tuple)\n\nCanonicalize the input tuple according to the template structure, and   return the \"canonicalized\" structure.\n\n\n\n\n\ncanonicalize(template, kwargs...)\n\nCanonicalize the key/value pairs given as keywords according to the   template structure or named tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructC14N.findabbrv",
    "page": "Docstrings",
    "title": "StructC14N.findabbrv",
    "category": "function",
    "text": "findabbrv(v::Vector{Symbol})\n\nFind all unique abbreviations of symbols in v.  Return a tuple of   two Vector{Symbol}: the first contains all possible abbreviations;   the second contains the corresponding un-abbreviated symbols.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StructC14N.StructC14NStructC14N.canonicalizeStructC14N.evalStructC14N.findabbrvStructC14N.includeStructC14N.myconvert"
},

]}
