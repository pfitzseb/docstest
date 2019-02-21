var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AlgebraResultTypes-1",
    "page": "Readme",
    "title": "AlgebraResultTypes",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)A Julia package for calculating result types of arithmetic operations."
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "A lot of Julia code contains some simple functions to calculate the result types of arithmetic operations. This package aims to be a well-tested centralized implementation of these.The package is really lightweight and has no dependencies."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using AlgebraResultTypes: result_field, result_ring # no exported symbols\njulia> result_field(Float64, Int)\nFloat64\njulia> result_field(Int, Int)\nFloat64\njulia> result_ring(Int, Int)\nInt\njulia> result_field(Real)\nNumber # non-concrete fallback"
},

{
    "location": "#How-can-you-help-1",
    "page": "Readme",
    "title": "How can you help",
    "category": "section",
    "text": "Add tests for other types, especially if defined in another package.If the tests pass, please make a PR.If they don\'t, please open an issue, or (ideally) make a PR that includes fixes."
},

{
    "location": "autodocs/#AlgebraResultTypes.number_type",
    "page": "Docstrings",
    "title": "AlgebraResultTypes.number_type",
    "category": "function",
    "text": "number_type(x)\n\nWhen the argument is a Number, return its type, when a container, return its element type in case it can be determined to be <: Number.\n\nRecommended usage\n\nSimplify\n\nfunction foo(x::T1, A::AbstractArray{T2}, b::AbstractVector{T3}) where {T1,T2,T3}\n    T = result_field(T1, T2, T3)\n    ...\nend\n\nto\n\nfunction foo(x, A, b)\n    T = result_field(number_type.(x, A, b)...)\n    ...\nend\n\nin situations where the types are not needed otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AlgebraResultTypes.result_field",
    "page": "Docstrings",
    "title": "AlgebraResultTypes.result_field",
    "category": "function",
    "text": "result_field(T1, T2, ...)\n\nReturn a supertype of the result type of applying operation +, -, *, / on the given types. Ideally, for concrete types, this is the narrowest concrete type.\n\nYou may want to apply widen to the result for complex calculations.\n\nFormally, for any values x1::T1, x2::T2, ..., where  T1, T2, ... <: Number, and operations op1, op2, ... ∈ (+, -, *, /),\n\nop1(x1, op2(x2, op3(x3, ...))) isa result_field(T1, T2, T3, ...)\n\nAny violation of this is a bug, and should be reported as an issue.\n\nThe implementation uses heuristics, and may not find the narrowest type, falling back to Number for non-concrete types. Please open an issue if you think this can be improved for some concrete types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AlgebraResultTypes.result_ring",
    "page": "Docstrings",
    "title": "AlgebraResultTypes.result_ring",
    "category": "function",
    "text": "result_ring(T1, T2, ...)\n\nReturn a supertype of the result type of applying operation +, -, *, on the given types. Ideally, for concrete types, this is the narrowest concrete type.\n\nYou may want to apply widen to the result for complex calculations.\n\nSee result_field for details, mutatis mutandis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AlgebraResultTypes.AlgebraResultTypesAlgebraResultTypes.evalAlgebraResultTypes.includeAlgebraResultTypes.number_typeAlgebraResultTypes.result_fieldAlgebraResultTypes.result_ring"
},

]}
