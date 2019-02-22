var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CSyntax-1",
    "page": "Readme",
    "title": "CSyntax",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Codecov)This package provides serval macros for making life easier when translating C code to Julia."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add CSyntax"
},

{
    "location": "#Submodules-1",
    "page": "Readme",
    "title": "Submodules",
    "category": "section",
    "text": ""
},

{
    "location": "#CRef-1",
    "page": "Readme",
    "title": "CRef",
    "category": "section",
    "text": "This module provides a macro @cref/@c for emulating C\'s &(address) operator:julia> using CSyntax.CRef\n\njulia> function foo(x)\n           x[] += 1\n           return x\n       end\nfoo (generic function with 1 method)\n\njulia> x = 0\n0\n\njulia> @cref foo(&x)\nBase.RefValue{Int64}(1)\n\njulia> x\n1It\'s very useful when calling C-bindings from Julia. Comparing the following Julia codevbo = GLuint(0)\n@c glGenBuffers(1, &vbo)\nglBindBuffer(GL_ARRAY_BUFFER, vbo)\nglBufferData(GL_ARRAY_BUFFER, 9 * sizeof(GLfloat), points, GL_STATIC_DRAW)toGLuint vbo;\nglGenBuffers(1, &vbo);\nglBindBuffer(GL_ARRAY_BUFFER, vbo);\nglBufferData(GL_ARRAY_BUFFER, 9 * sizeof(GLfloat), points, GL_STATIC_DRAW);they\'re nearly identical aside from the @c macro. Without this, one need to manually edit the code at least 3 more times and life will be quickly burned in the hell:vboID = Ref{GLuint}(0)\nglGenBuffers(1, vboID)\nglBindBuffer(GL_ARRAY_BUFFER, vboID[])\n# segment faults are waiting for you unless you dereference vboID correctly in every place hereafter"
},

{
    "location": "#CFor-1",
    "page": "Readme",
    "title": "CFor",
    "category": "section",
    "text": "This submodule provides a @cfor macro for emulating C\'s for-loops syntax:julia> using CSyntax.CFor\n\njulia> x = 0\n0\n\njulia> @cfor i=0 i<10 i+=1 begin\n           global x += 1\n       end\n\njulia> x\n10\n\n# @cfor with @++\njulia> using CSyntax: @++\n\njulia> @cfor i=0 i<10 @++(i) begin\n           i > 5 && continue  # well, this is actually illegal in C\n           global x += 1\n       end\n\njulia> x\n16\n\njulia> let\n           global j\n           @cfor nothing (j > 3) j-=1 begin\n               global x += 1\n           end\n       end\n\njulia> x\n23"
},

{
    "location": "#CSwitch-1",
    "page": "Readme",
    "title": "CSwitch",
    "category": "section",
    "text": "This submodule provides C-like switch statement with the \"falling through\" behavior. It is inspired by dcjones\'s package Switch.jl which has died out since Julia v0.5. Anyway, it has been resurrected here.julia> using CSyntax.CSwitch\n\njulia> @enum test t=1 f=2\n\njulia> tester = t\nt::test = 1\n\njulia> @cswitch tester begin\n           @case t\n               x = 1\n               break\n           @case f\n               x = 2\n               break\n       end\n\njulia> x\n1"
},

{
    "location": "#CEnum-1",
    "page": "Readme",
    "title": "CEnum",
    "category": "section",
    "text": "CEnum.jl is also integrated in this package.julia> @enum Foo a = 1 b = 2 c = 1\nERROR: LoadError: ArgumentError: values for Enum Foo are not unique\nStacktrace:\n [1] @enum(::LineNumberNode, ::Module, ::Any, ::Vararg{Any,N} where N) at ./Enums.jl:128\nin expression starting at REPL[12]:1\n\njulia> using CSyntax.CEnum\n\njulia> @cenum(Bar, d = 1, e = 2, f = 1)\n\njulia> d == f\ntrue"
},

{
    "location": "#TODO?-1",
    "page": "Readme",
    "title": "TODO?",
    "category": "section",
    "text": "[ ] @cmacro? how to correctly handle recursive macro expansion rules?\n[ ] @cdo-while? it\'s very trivial to implement but not very useful I guess\n[ ] @cstar? * aka the so called indirection operator"
},

{
    "location": "autodocs/#CSyntax.@+",
    "page": "Docstrings",
    "title": "CSyntax.@+",
    "category": "macro",
    "text": "PrefixIncrement Operator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSyntax.@++",
    "page": "Docstrings",
    "title": "CSyntax.@++",
    "category": "macro",
    "text": "PrefixIncrement Operator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSyntax.@-",
    "page": "Docstrings",
    "title": "CSyntax.@-",
    "category": "macro",
    "text": "PrefixDecrement Operator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CSyntax.@+CSyntax.@++CSyntax.@-CSyntax.@cCSyntax.CForCSyntax.CRefCSyntax.CSwitchCSyntax.CSyntaxCSyntax.evalCSyntax.include"
},

]}
