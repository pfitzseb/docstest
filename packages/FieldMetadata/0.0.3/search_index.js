var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FieldMetadata-1",
    "page": "Readme",
    "title": "FieldMetadata",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)This package lets you define metadata about fields in a struct, like tags in Go. It uses a similar syntax to Parameters.jl, with a | bar instead of =. You can use it as a minimalist replacement for Parameters.jl with the aid of Defaults.jl.FieldMetadata on nested structs can be flattened into a vector or tuple very efficiently with Flatten.jl, where they are also used to  exclude fields from flattening.This example that adds string description metadata to fields in a struct:@metadata describe \"\"\n\n@describe mutable struct Described\n   a::Int     | \"an Int with a description\"  \n   b::Float64 | \"a Float with a description\"\nend\n\nd = Described(1, 1.0)\n\njulia>describe(d, :a) \n\"an Int with a description\"  \n\njulia>describe(d, :b) \n\"a Float with a description\"  \n\njulia>describe(d, :c) \n\"\"  A more complex example :using Parameters\n@metadata describe \"\"\n@metadata limits (0, 1)\n\n@describe @limits @with_kw struct WithKeyword{T}\n    a::T = 3 | (0, 100) | \"a field with a range, description and default\"\n    b::T = 5 | (2, 9)   | \"another field with a range, description and default\"\nend\n\nk = WithKeyword()\n\njulia> describe(k, :b) \n\"another field with a range, description and default\"\n\njulia> paramrange(k, :a) \n[0, 100]\n\"\"  You can chain as many metadata macros together as you want. Just remember that  the data for the first @metadata macro goes at the end on the line in the struct. This makes sense when you consider that a macro like @with_kw from Parameters.jl has to be the last macro, but the first item in the row after the field type.You can also update or add fields on a type that is already declared using the same syntax, by prepending re to the start of the macro, like @redescribe. You don\'t need to include all fields or their types.julia> describe(d)                                                                                                     \n(\"an Int with a description\", \"a Float with a description\")  \n\n@redescribe struct Described\n   b | \"a much better description\"\nend\n\njulia> d = Described(1, 1.0)\n\njulia> describe(d)\n(\"an Int with a description\", \"a much better description\")"
},

{
    "location": "#Metadata-placeholders-1",
    "page": "Readme",
    "title": "Metadata placeholders",
    "category": "section",
    "text": "FieldMetadata provides an api of some simple metadata tags to be used accross packages: default, units, prior, description and limits. To use them, call:import FieldMetadata: @prior, @reprior, priorYou must import at least the function to use these placeholders, using is not enough as you are effectively adding methods for you own types. Calling @reprior or similar on someone elses struct is type piracy and shouldn\'t be done in a published package, but can be useful in scripts."
},

{
    "location": "autodocs/#FieldMetadata.@chain",
    "page": "Docstrings",
    "title": "FieldMetadata.@chain",
    "category": "macro",
    "text": "Chain together any macros. Useful for combining @metadata macros.\n\nExample\n\n@chain columns @label @units @default_kw\n\n@columns struct Foo\n  bar::Int | 7 | u\"g\" | \"grams of bar\"\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FieldMetadata.@metadata",
    "page": "Docstrings",
    "title": "FieldMetadata.@metadata",
    "category": "macro",
    "text": "Generate a macro that constructs methods of the same name. These methods return the metadata information provided for each field of the struct.\n\n@metadata def_range (0, 0)\n@def_range struct Model\n    a::Int | (1, 4)\n    b::Int | (4, 9)\nend\n\nmodel = Model(3, 5)\ndef_range(model, Val{:a})\n(1, 4)\n\ndef_range(model)\n((1, 4), (4, 9))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FieldMetadata.@chainFieldMetadata.@defaultFieldMetadata.@descriptionFieldMetadata.@flattenableFieldMetadata.@labelFieldMetadata.@limitsFieldMetadata.@metadataFieldMetadata.@plottableFieldMetadata.@priorFieldMetadata.@redefaultFieldMetadata.@redescriptionFieldMetadata.@reflattenableFieldMetadata.@relabelFieldMetadata.@relimitsFieldMetadata.@replottableFieldMetadata.@repriorFieldMetadata.@reunitsFieldMetadata.@unitsFieldMetadata.FieldMetadataFieldMetadata.add_field_funcsFieldMetadata.addmethod!FieldMetadata.addmethod_unlessdefault!FieldMetadata.chained_macrosFieldMetadata.chained_macros!FieldMetadata.defaultFieldMetadata.descriptionFieldMetadata.evalFieldMetadata.fieldname_valsFieldMetadata.firstheadFieldMetadata.flattenableFieldMetadata.getkeyFieldMetadata.includeFieldMetadata.labelFieldMetadata.limitsFieldMetadata.namifyFieldMetadata.plottableFieldMetadata.priorFieldMetadata.units"
},

]}
