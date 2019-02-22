var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Spec.jl-1",
    "page": "Readme",
    "title": "Spec.jl",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)A package for expressing specifications."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Spec.jl is (very small) library for specfiying correctness properties of programs. Currently these serve both as functional tests (like asserts which can be disabled globally), or just a non-executable documentation. The long term goal is to replicate much of the functionality of Spec in clojure, as well as formal verification methods.\nfunction f()\n  @pre x + y == 2\nend"
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "Preconditions are defined using @prejulia> f(x::Real) = (@pre x > 0; sqrt(x) + 5)\nf (generic function with 1 method)\n\njulia> f(-3)\nERROR: DomainError:\nStacktrace:\n [1] f(::Int64) at ./REPL[2]:1\n\njulia> @with_pre begin\n               f(-3)\n             end\nERROR: ArgumentError: x > 0\nStacktrace:"
},

{
    "location": "autodocs/#Spec.@invariant",
    "page": "Docstrings",
    "title": "Spec.@invariant",
    "category": "macro",
    "text": "Define invariant - currently a dummy for documenation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.@post",
    "page": "Docstrings",
    "title": "Spec.@post",
    "category": "macro",
    "text": "Define a postcondition on function argument.\n\nCurrently @post works similarly to @assert except that:\n\nan exception is thrown\npostcheckons can be disabled\n\njulia> f(x::Real) = (@post x > 0; sqrt(x) + 5)\nf (generic function with 1 method)\n\njulia> f(-3)\nERROR: ArgumentError: x > 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.@pre",
    "page": "Docstrings",
    "title": "Spec.@pre",
    "category": "macro",
    "text": "Define a precondition on function argument. Currently @pre works similarly to @assert except that:\n\nan exception is thrown\nprecheckons can be disabled\n\njulia> f(x::Real) = (@pre x > 0; sqrt(x) + 5)\nf (generic function with 1 method)\n\njulia> f(-3)\nERROR: ArgumentError: x > 0\n\n\n\n\n\nPre with a comment\n\nFIXME: redundancy\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.@spec",
    "page": "Docstrings",
    "title": "Spec.@spec",
    "category": "macro",
    "text": "@Spec [tags...] [methodspecifier] clause1 [clause2 ... clausen] [comment]\n\nDefine an invariant that should be true\n\nA spec may access \n\nSpecial meta characters\n\n– _res: The return value – _a1, _a2, _an: The value of the 1st, 2nd, nth argument\n\nTags\n\n:nocheck - Never check this specification\n:incomplete - Indicates that spec is incomplete\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.@with_pre",
    "page": "Docstrings",
    "title": "Spec.@with_pre",
    "category": "macro",
    "text": "Activate precondition checking within scope of expr\n\njulia> f(x::Real) = (@pre x > 0; sqrt(x) + 5)\nf (generic function with 1 method)\n\njulia> f(-3)\nERROR: DomainError:\nStacktrace:\n [1] f(::Int64) at ./REPL[2]:1\n\njulia> @with_pre begin\n               f(-3)\n             end\nERROR: ArgumentError: x > 0\nStacktrace:\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.Spec",
    "page": "Docstrings",
    "title": "Spec.Spec",
    "category": "module",
    "text": "Testing and specification\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.allmethods",
    "page": "Docstrings",
    "title": "Spec.allmethods",
    "category": "function",
    "text": "All methods, globally\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.checkincomplete",
    "page": "Docstrings",
    "title": "Spec.checkincomplete",
    "category": "function",
    "text": "Incomplete specifications\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.checkmissing",
    "page": "Docstrings",
    "title": "Spec.checkmissing",
    "category": "function",
    "text": "Methods without specifications\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.filtermethod",
    "page": "Docstrings",
    "title": "Spec.filtermethod",
    "category": "function",
    "text": "Predicate indicates if prop of m is c - m::Method -> m.prop = c\n\n\n\n\n\nPredicate indicates pred(prop) of is true -  m::Method -> m.prop = c\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.newestmethod",
    "page": "Docstrings",
    "title": "Spec.newestmethod",
    "category": "function",
    "text": "Most recently created method of generic function func\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.pre_check_on!",
    "page": "Docstrings",
    "title": "Spec.pre_check_on!",
    "category": "function",
    "text": "Check preconditions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.walktests",
    "page": "Docstrings",
    "title": "Spec.walktests",
    "category": "function",
    "text": "Walk through test_dir directory and execute all tests, excluding exclude\n\njulia> using Spec\njulia> walktests(Spec)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Spec.with_pre",
    "page": "Docstrings",
    "title": "Spec.with_pre",
    "category": "function",
    "text": "Macroless version of @with_pre\n\njulia> f(x::Real) = (@pre x > 0; sqrt(x) + 5)\nf (generic function with 1 method)\n\njulia> f(-3)\nERROR: DomainError:\nStacktrace:\n [1] f(::Int64) at ./REPL[2]:1\n\njulia> with_pre() do\n         f(-3)\n       end\nERROR: ArgumentError: x > 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Spec.@invariantSpec.@postSpec.@preSpec.@specSpec.@with_preSpec.MethodSpecSpec.PRE_CHECKING_ONSpec.SpecSpec.SpecTableSpec.addspec!Spec.allmethodsSpec.checkincompleteSpec.checkmissingSpec.evalSpec.filtermethodSpec.includeSpec.newestmethodSpec.pre_checkSpec.pre_check_off!Spec.pre_check_on!Spec.spectableSpec.walktestsSpec.with_pre"
},

]}
