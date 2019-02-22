var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "OpenTrick.jl Documentation",
    "title": "OpenTrick.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#OpenTrick.opentrick",
    "page": "OpenTrick.jl Documentation",
    "title": "OpenTrick.opentrick",
    "category": "function",
    "text": "opentrick(openfn[, args... [; <keyword arguments>]])\n\nCall openfn with (handlefn, args... ,kwargs ...) as arguments, return an IOWrapper instance. (NB:handlefn is provided by opentrick.)\n\nArguments\n\nopenfn::Function function actually called to obtain a IO instance. openfn must take a Function(::IO) instance as its first argument\nargs optional arguments that will be passed to openfn\nkwargs optional keyword arguments that will be passed to openfn\n\nExamples\n\njulia> using OpenTrick\n\njulia> filename = tempname();\n\njulia> io = opentrick(open, filename, \"w+\");\n\njulia> write(io, \"hello world!\")\n12\n\njulia> seek(io, 0);\n\njulia> readline(io)\n\"hello world!\"\n\n\n\n\n\n\n"
},

{
    "location": "#OpenTrick.rawio",
    "page": "OpenTrick.jl Documentation",
    "title": "OpenTrick.rawio",
    "category": "function",
    "text": "rawio(io)\n\nReturn the actual io instance\n\n\n\n\n\n"
},

{
    "location": "#OpenTrick.blockingtask",
    "page": "OpenTrick.jl Documentation",
    "title": "OpenTrick.blockingtask",
    "category": "function",
    "text": "blockingtask(io)\n\nReturn the task blocking which prevents the handlefn passed to openfn from returning\n\n\n\n\n\n"
},

{
    "location": "#OpenTrick.unsafe_clear",
    "page": "OpenTrick.jl Documentation",
    "title": "OpenTrick.unsafe_clear",
    "category": "function",
    "text": "unsafe_clear()\n\nUnblock all blocking tasks. All ios returned by opentrick will be closed as a consequence.\n\n\n\n\n\n"
},

{
    "location": "#OpenTrick.jl-Documentation-1",
    "page": "OpenTrick.jl Documentation",
    "title": "OpenTrick.jl Documentation",
    "category": "section",
    "text": "opentrickrawioblockingtaskunsafe_clear"
},

]}
