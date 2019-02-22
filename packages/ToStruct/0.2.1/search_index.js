var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ToStruct.jl-1",
    "page": "Readme",
    "title": "ToStruct.jl",
    "category": "section",
    "text": "Easy way to convert dict to struct"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"ToStruct)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ToStruct\n\nstruct Foo\n    i::Int\n    s::String\nend\n\nstruct Bar\n    foo::Foo\nend\n\nx = Dict(\"foo\" => Dict(\"i\" => 1, \"s\" => \"hello\"))\nToStruct.tostruct(Bar, x) == Bar(Foo(1, \"hello\")) # true"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ToStruct.ToStructToStruct.evalToStruct.getdefaultToStruct.includeToStruct.tostruct"
},

]}
