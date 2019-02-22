var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ComputedFieldTypes-1",
    "page": "Readme",
    "title": "ComputedFieldTypes",
    "category": "section",
    "text": "Build types in Julia where some fields have computed types."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Note that the following is not idiomatic Julia, and is probably not the most efficient solutions. They are simply intended as demonstrations of ComputedFieldTypes.For simple cases, a default constructor will be added, if none is specified:@computed struct A{V <: AbstractVector}\n    a::eltype(V)\nend\na = A{Vector{Int}}(3.0)\na.a === Int(3)It is also possible to declare your own constructor, with extra type variables, parameterized, etc.:@computed struct B{N, M, T}\n    a::NTuple{N + M, T}\n    B(x::T) = new{N, M, T}(ntuple(i -> x, N + M))\n    B{S}(x::S) = B{N, M, T}(convert(T, x))\nend\n\n@computed struct C{T <: Number}\n    a::typeof(one(T) / one(T))\n    C() = new(0)\n    function C(x)\n        return new(x)\n    end\nendIf you need a fully expanded type definition (for example, for use as a field of another @computed type), you can call fulltype(T) on any Type T. Note, however, that since this is not the canonical form, it does not have any constructors defined for it."
},

{
    "location": "autodocs/#ComputedFieldTypes.@computed",
    "page": "Docstrings",
    "title": "ComputedFieldTypes.@computed",
    "category": "macro",
    "text": "@computed type\n\nAllows declaration of a type expression where some of the fields types are arbitrary computed functions of other type parameters. It\'s suggested that those expressions be const (return the same value for the same inputs), but that is not essential.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputedFieldTypes._computed",
    "page": "Docstrings",
    "title": "ComputedFieldTypes._computed",
    "category": "function",
    "text": "_computed(typeexpr::Expr)\n\nthe bulk of the work to compute the AST transform\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputedFieldTypes.fulltype",
    "page": "Docstrings",
    "title": "ComputedFieldTypes.fulltype",
    "category": "function",
    "text": "fulltype(::Type)\n\nFill in the computed type parameters for T (if applicable and possible)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputedFieldTypes.getenv!",
    "page": "Docstrings",
    "title": "ComputedFieldTypes.getenv!",
    "category": "function",
    "text": "getenv!(expr, tvars, defs)\n\nreplace anything that isn\'t computable by apply_type with a dummy type-variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputedFieldTypes.make_Type_expr",
    "page": "Docstrings",
    "title": "ComputedFieldTypes.make_Type_expr",
    "category": "function",
    "text": "make_Type_expr(tname, decl_tvars)\n\nmake the ::Type{T} expression that is equivalent to the original type declaration\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputedFieldTypes.make_curly",
    "page": "Docstrings",
    "title": "ComputedFieldTypes.make_curly",
    "category": "function",
    "text": "make_curly(expr)\n\ngiven an apply-type expression (T or T{...}), return Expr(:curly, T, ...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputedFieldTypes.make_fulltype_expr",
    "page": "Docstrings",
    "title": "ComputedFieldTypes.make_fulltype_expr",
    "category": "function",
    "text": "make_fulltype_expr(tname, decl_tvars, def)\n\ncompute the leaf T{def} expression that is equivalent for the new type declaration\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputedFieldTypes.make_new_expr",
    "page": "Docstrings",
    "title": "ComputedFieldTypes.make_new_expr",
    "category": "function",
    "text": "make_new_expr(tname, decl_tvars, def)\n\ncompute the leaf T{...} expression that describes the new type declaration\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputedFieldTypes.rewrite_new!",
    "page": "Docstrings",
    "title": "ComputedFieldTypes.rewrite_new!",
    "category": "function",
    "text": "rewrite_new!(expr, tname::Symbol, decl_tvars, def)\n\nrewrite the constructors to capture only the intended values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ComputedFieldTypes.@computedComputedFieldTypes.ComputedFieldTypesComputedFieldTypes._computedComputedFieldTypes.evalComputedFieldTypes.fulltypeComputedFieldTypes.getenv!ComputedFieldTypes.includeComputedFieldTypes.make_Type_exprComputedFieldTypes.make_curlyComputedFieldTypes.make_fulltype_exprComputedFieldTypes.make_new_exprComputedFieldTypes.rewrite_new!"
},

]}
