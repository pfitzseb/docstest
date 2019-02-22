var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RequiredKeywords-1",
    "page": "Readme",
    "title": "RequiredKeywords",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This package allows you to specify required keyword arguments, as suggusted in https://github.com/JuliaLang/julia/issues/5111.As of Julia version 0.7.0, this functionality is built in. From this version forward, the @required_keywords macro won\'t do anything."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using RequiredKeywords\n\njulia> @required_keywords f(x; y::Int64) = x*y\nf (generic function with 1 method)\n\njulia> f(2,y=2)\n4\n\njulia> f(2)\nERROR: Unassigned Keyword:  Required keyword y::Int64 not included.\nStacktrace:\n [1] f(::Int64) at ./REPL[5]:1"
},

{
    "location": "autodocs/#RequiredKeywords.@required_keywords",
    "page": "Docstrings",
    "title": "RequiredKeywords.@required_keywords",
    "category": "macro",
    "text": "@required_keywords f(...; x::Int=0, y::Int) = ...\n\nAllows function definitions to have keyword arguments without a default value. These keywords must always be specified. If they are not, a UnassignedKeyword exception is thrown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RequiredKeywords.RequiredKeywords",
    "page": "Docstrings",
    "title": "RequiredKeywords.RequiredKeywords",
    "category": "module",
    "text": "Implements the @required_keywords macro which allows function definitions to have keyword arguments without a default value. These keywords must always be specified. If they are not, a UnassignedKeyword exception is thrown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RequiredKeywords.UnassignedKeyword",
    "page": "Docstrings",
    "title": "RequiredKeywords.UnassignedKeyword",
    "category": "type",
    "text": "Indicated that a funtion has been called without specifying a keyword which has no default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RequiredKeywords.@required_keywordsRequiredKeywords.@showexpRequiredKeywords.RequiredKeywordsRequiredKeywords.UnassignedKeywordRequiredKeywords.evalRequiredKeywords.include"
},

]}
