var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PrePostCall-1",
    "page": "Readme",
    "title": "PrePostCall",
    "category": "section",
    "text": "PrePostCall is a package which offers an intuitive syntax for making preceding and subsequent function calls to other functions using macros.(Image: Build Status) (Image: codecov) (Image: Coverage Status)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Simple-Example-1",
    "page": "Readme",
    "title": "Simple Example",
    "category": "section",
    "text": "Here is a very simple example showing how to define a macro with PrePostCall which checks that all passed arguments to a function are positive and\nthe return value of a function is not InfPre and post calls can be defined with @pre and @post respectively. So first the new macros are defined:@pre positive(x::Number) = x<0 && error(\"Passed values must be positive!\")\n@post notInf(x::Number) = isinf(x) && error(\"The return value is Inf\")Now both macros @positive and @notInf can be applied to another function:@notInf @positive x y z function foo(x,y,z)\n    (x+y)/z\nendCalls to foo with various arguments now result in the following:julia> foo(1,2,3)\n1.0\n\njulia> foo(1,-2,3)\nERROR: Passed values must be positive!\n\njulia> foo(1,2,0)\nERROR: The return value is Inf"
},

{
    "location": "#Example-with-a-mutable-struct-1",
    "page": "Readme",
    "title": "Example with a mutable struct",
    "category": "section",
    "text": "In the following toy example you have a mutable struct where one field can either be an Int or nothing. A function that is called with this mutable struct should only be usable if the field is not nothing. Another function that is called with this mutable struct should only be usable if the field is not nothing and at least has a value of 3. (This example is minimized to illustrated the usage of PrePostCall.)First define the struct:mutable struct Bar\n    val::Union{Int,Nothing}\nendThen define the check functions:@pre alive(b::Bar) = b.val == nothing && error(\"Bar must not be nothing\")\n@pre large(b::Bar) = b.val < 3 && error(\"The value of bar must be >= 3\")The actual functions used on the mutable type can now be created with a clear, dense and easily readable definition:@alive addOne(b::Bar) = b.val += 1\n@alive @large addTen(b::Bar) = b.val += 10If no variable names are given for the newly created macros, the variables checked are assumed to have the same name as the ones used on the @pre (or @post) definitions.Calls to the defined function with various Bar-types now result in the following:julia> a = Bar(1)\nBar(1)\n\njulia> addOne(a)\n2\n\njulia> a.val = nothing\n\njulia> addOne(a)\nERROR: Bar must not be nothing\n\njulia> b = Bar(1)\nBar(1)\n\njulia> addTen(b)\nERROR: The value of bar must be >= 3\n\njulia> addOne(b)\n2\n\njulia> addOne(b)\n3\n\njulia> addTen(b)\n13\n\njulia> b.val = nothing\n\njulia> addTen(b)\nERROR: Bar must not be nothing"
},

{
    "location": "autodocs/#PrePostCall.@post",
    "page": "Docstrings",
    "title": "PrePostCall.@post",
    "category": "macro",
    "text": "@post function name ...\n\nCreate a macro @name [[variable] variable ...] function other ... for inserting a call to name after each call to other.\n\nvariable defines the variable names passed to name. If variable is omitted, name is called on the return argument of other. If variable is used, the call to other is inserted before each return, or if non present, as last expression in other. If multiple variables are given name is called on each of them, for example:\n\n@name x y z is just a short notation for @name x @name y @name z and calls name(x), name(y), name(z)\n@name x,y,z calls name(x,y,z)\n\nExamples\n\njulia> @post function nonzero(x::Int)\n           @assert x!=0\n       end\n@nonzero (macro with 2 methods)\n\njulia> @nonzero function foo(x::Int,y::Int)\n           x*y\n       end\nfoo (generic function with 1 method)\n\njulia> foo(1,2)\n2\n\njulia> foo(1,0)\nERROR: AssertionError: x != 0\n\njulia> @nonzero @nonzero a function foo(x::Int,y::Int)\n           a = x-1\n           return a*y\n       end\nfoo (generic function with 1 method)\n\njulia> foo(1,2)\nERROR: AssertionError: x != 0\n\nFailes because a must be nonzero\n\njulia> foo(2,2)\n2\n\njulia> foo(2,0)\nERROR: AssertionError: x != 0\n\nFailes because the return value must be nonzero\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PrePostCall.@pre",
    "page": "Docstrings",
    "title": "PrePostCall.@pre",
    "category": "macro",
    "text": "@pre function name ...\n\nCreate a macro @name [[variable] variable ...] function other ... for inserting a call to name before each call to other.\n\nvariable defines the variable names passed to name. If variable is omitted the names of the attributes of name are used. If multiple variables are given name is called on each of them, for example:\n\n@name x y z is just a short notation for @name x @name y @name z and calls name(x), name(y), name(z)\n@name x,y,z calls name(x,y,z)\n\nExamples\n\njulia> @pre function nonzero(x::Int)\n           @assert x!=0\n       end\n@nonzero (macro with 2 methods)\n\njulia> @nonzero @nonzero y function foo(x::Int,y::Int)\n           x+y\n       end\nfoo (generic function with 1 method)\n\nThe outer @nonzero uses x as the attribute due to the function definition of nonzero.\n\njulia> foo(1,2)\n3\n\njulia> foo(1,0)\nERROR: AssertionError: x != 0\n\njulia> foo(0,1)\nERROR: AssertionError: x != 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PrePostCall.@postPrePostCall.@prePrePostCall.PrePostCallPrePostCall.evalPrePostCall.get_args_for_callPrePostCall.get_qargs_for_callPrePostCall.include"
},

]}
