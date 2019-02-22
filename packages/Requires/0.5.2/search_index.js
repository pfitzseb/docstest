var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Note:-changes-in-v0.7-1",
    "page": "Readme",
    "title": "Note: changes in v0.7",
    "category": "section",
    "text": "Requires now needs a UUID, and must be called from within your packages __init__ function. For example:function __init__()\n    @require JSON=\"682c06a0-de6a-54ab-a142-c8b1cf79cde6\" do_stuff()\nend"
},

{
    "location": "#Requires.jl-1",
    "page": "Readme",
    "title": "Requires.jl",
    "category": "section",
    "text": "(Image: Build Status)Requires is a Julia package that will magically make loading packages faster, maybe. It supports specifying glue code in packages which will load automatically when a another package is loaded, so that explicit dependencies (and long load times) can be avoided.Usage is as simple asmedia(::MyType) = Textual()\n\n@require Gadfly begin\n  media(::Gadfly.Plot) = Graphical()\nendFor larger amounts of code you can also use @require Package include(\"glue.jl\"). The code wrapped by @require will execute as soon as the given package is loaded (which may be immediately).julia> using Requires\n\njulia> @require DataFrames println(\"foo\")\n\njulia> using DataFrames\nfoo\n\njulia> @require DataFrames println(\"bar\")\nbarNote that the package is not imported by default – you need an explicit using statement if you want to use the packages names without qualifying them.See here for some more detailed examples."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Requires.@initRequires.@requireRequires.RequiresRequires.__init__Requires._callbacksRequires.callbacksRequires.errRequires.evalRequires.includeRequires.initmRequires.isprecompilingRequires.listenpkgRequires.loadedRequires.loadpkgRequires.parsepkgRequires.withpath"
},

]}
