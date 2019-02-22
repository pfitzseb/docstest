var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#QuickTypes-1",
    "page": "Readme",
    "title": "QuickTypes",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Types are central to Julia programming, but the built-in struct and mutable struct definitions can be cumbersome to write. QuickTypes.jl provides two alternative macros, @qstruct and @qmutable, with a more convenient syntax:using QuickTypes      # install with Pkg.add(\"QuickTypes\")\n\n# Equivalent to\n# struct Wall\n#    width\n#    height\n# end\n@qstruct Wall(width, height)\n\n# Optional and keyword-arguments\n@qstruct Cat(name, age::Int, nlegs=4; species=\"Siamese\")\n\n# Parametric type\n@qstruct Pack{T}(animals::Vector{T})\n\n# Inheritance\nabstract type Tree end\n@qstruct Maple(qty_syrup::Float64) <: Tree\n\n# Mutable structs work the same way\n@qmutable Window(height::Float64, width::Float64)\n\n# Arguments can be validated using do-syntax\n@qstruct Human(name, height::Float64) do\n    @assert height > 0    # arbitrary code, executed in the constructor\nendThese macros expand correctly on Julia 0.6 and 0.7."
},

{
    "location": "#More-options-1",
    "page": "Readme",
    "title": "More options",
    "category": "section",
    "text": "# _concise_show takes out the type parameters when printing the object\n@qstruct Group{X}(members::X; _concise_show=true)\nGroup([1,1+1])\n> Group([1,2])            # instead of Group{Array{Int64,1}}([1,2])\n\n# `_fp` (for Fully Parametric) automatically adds type parameters. For example:\n@qstruct_fp Plane(nwheels, weight::Number; brand=:zoomba)\n# is equivalent to `@qstruct Plane{T, U <: Number, V}(nwheels::T, weight::U; brand::V=:zoomba)`\n# For even greater specialization, see `?@qstruct_np`.See also Parameters.jl."
},

{
    "location": "autodocs/#QuickTypes.@qmutable",
    "page": "Docstrings",
    "title": "QuickTypes.@qmutable",
    "category": "macro",
    "text": "Quick mutable struct definition. See ?@qstruct \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.@qmutable_fp",
    "page": "Docstrings",
    "title": "QuickTypes.@qmutable_fp",
    "category": "macro",
    "text": "Fully-parametric version of @qmutable. @qmutable_fp Foo(a, b=2) is like @qmutable Foo{T, U}(a::T, B::U=2) \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.@qstruct",
    "page": "Docstrings",
    "title": "QuickTypes.@qstruct",
    "category": "macro",
    "text": "Quick type definition. \n\n@qstruct Car(size, nwheels::Int=4; brand::String=\"unnamed\") <: Vehicle\n\nexpands into\n\nstruct Car <: Vehicle\n    size\n    nwheels::Int\n    brand::String\n    Car(size, nwheels=4; brand=\"unnamed\") = new(size, nwheels, brand)\nend\n\nAlso supports parametric types: @qstruct Door{T}(size::T). Invariants can be enforced using do-syntax:\n\n@qstruct Human(name, height::Float64) do\n    @assert height > 0    # arbitrary code, executed before creating the object\nend\n\nNote: @qstruct automatically defines a Base.show method for the new type, unless _define_show=false (eg. @qstruct(x, y; _define_show=false)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.@qstruct_fp",
    "page": "Docstrings",
    "title": "QuickTypes.@qstruct_fp",
    "category": "macro",
    "text": "Fully-parametric version of @qstruct. @qstruct_fp Foo(a, b=2) is like @qstruct Foo{T, U}(a::T, B::U=2) \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.@qstruct_np",
    "page": "Docstrings",
    "title": "QuickTypes.@qstruct_np",
    "category": "macro",
    "text": "Narrowly-parametric version of @qstruct. @qstruct_np Foo(a, b=2) is like @qstruct Foo{T, U}(a::T, B::U=2), but it will additionally specialize on types: Foo(Int, 2.0) ==> Foo{Type{Int64},Float64}(Int64, 2.0) \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.build_show_def",
    "page": "Docstrings",
    "title": "QuickTypes.build_show_def",
    "category": "function",
    "text": "Build the Base.show function definition for that type \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.construct",
    "page": "Docstrings",
    "title": "QuickTypes.construct",
    "category": "function",
    "text": "For a type X defined with @qmutable/@qstruct and with fields a, b, c, ..., QuickTypes.construct(X, 1, 2, 3...) is a purely-positional constructor of X. This is useful for writing generic structure traversal. For any object of a type defined by @qstruct, this holds:\n\nQuickTypes.construct(QuickTypes.roottypeof(o), QuickTypes.fieldsof(o)...) == o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.fieldsof",
    "page": "Docstrings",
    "title": "QuickTypes.fieldsof",
    "category": "function",
    "text": "fieldsof(obj) returns the fields of obj in a tuple. See also QuickTypes.construct \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.fieldtypes",
    "page": "Docstrings",
    "title": "QuickTypes.fieldtypes",
    "category": "function",
    "text": "fieldtypes(typ) returns the types of the fields of a composite type. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.parse_funcall",
    "page": "Docstrings",
    "title": "QuickTypes.parse_funcall",
    "category": "function",
    "text": "parse_funcall(fcall)\n\nParses fname(args; kwargs). Returns (fname, args, kwargs, constraints)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.roottype",
    "page": "Docstrings",
    "title": "QuickTypes.roottype",
    "category": "function",
    "text": "roottype(typ::Type) returns the parameterless type. Eg. roottype(X{A}) => X \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.roottypeof",
    "page": "Docstrings",
    "title": "QuickTypes.roottypeof",
    "category": "function",
    "text": "roottypeof(obj) returns the type of obj with generic parametric types. Eg. roottypeof(a::SomeType{Int}) -> SomeType{T}. See QuickTypes.construct \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuickTypes.tuple_parameters",
    "page": "Docstrings",
    "title": "QuickTypes.tuple_parameters",
    "category": "function",
    "text": "tuple_parameters{T<:Tuple}(::Type{T}) returns the type of each element of the tuple, as svec(type1, type2, ...) \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "QuickTypes.@qimmutableQuickTypes.@qmutableQuickTypes.@qmutable_fpQuickTypes.@qmutable_npQuickTypes.@qstructQuickTypes.@qstruct_fpQuickTypes.@qstruct_npQuickTypes.@qtypeQuickTypes.QuickTypesQuickTypes.all_type_vars_presentQuickTypes.build_show_defQuickTypes.constructQuickTypes.evalQuickTypes.fieldsofQuickTypes.fieldtypesQuickTypes.get_symQuickTypes.includeQuickTypes.is_mutableQuickTypes.make_parametricQuickTypes.narrow_typeofQuickTypes.parse_funcallQuickTypes.qexpansionQuickTypes.roottypeQuickTypes.roottypeofQuickTypes.special_kwargsQuickTypes.tuple_parametersQuickTypes.tuple_parameters_stableQuickTypes.type_lengthQuickTypes.type_parametersQuickTypes.type_simple_name"
},

]}
