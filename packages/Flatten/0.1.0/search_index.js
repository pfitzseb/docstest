var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Flatten-1",
    "page": "Readme",
    "title": "Flatten",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io) (Image: Coverage Status)Flatten.jl converts data between nested and flat structures, using flatten(), reconstruct() and retype() functions. This facilitates building modular, compostable code while still providing access to differentiation, solvers and optimisers that require flat vectors of parameters. Importantly it\'s also type-stable  and very fast.Flatten.jl uses FieldMetadata.jl to provide @flattenable macro to indicate which struct fields are to be flattened, defaulting to true for all fields. It also provides metaflatten() to flatten any other FieldMetadata.jl meta-fields into the same sized vector as flatten(). This can be useful for attaching Bayesian priors or optional units to each field. Regular field data can also be collected with metaflatten: fieldnameflatten, parentflatten, fieldtypeflatten and parenttypeflatten provide lists of fieldnames and types that may be useful for building parameter display tables. Any user-defined function of the form func(::T, ::Type{Val{fn}}) = can be used in metaflatten, where T is the struct type and fn is the fieldname symbol.One limitation of reconstruct is that it requires an outer constructor that accept all fields in the order they come in the type. If some fields are recalculated at construction time, they should be calculated in this constructor. UnitlessFlatten.jl extends Flatten.jl to automatically strip and add Unitful units.This basis of this package was originally written by Robin Deits (@rdeits). The current form owes much to discussions and ideas from Jan Weidner (@jw3126) and Robin Deits. "
},

{
    "location": "#Basic-struct-flattening-1",
    "page": "Readme",
    "title": "Basic struct flattening",
    "category": "section",
    "text": "Let\'s define a data type:struct Foo{T}\n   a::T\n   b::T\n   c::T\nend\n\njulia> foo = Foo(1,2,3)\nFoo{Int64}(1,2,3)Now we can flatten this data type into a tuple:julia> flatten(Tuple, foo)\n(1, 2, 3)or a vector:julia> flatten(Vector, foo)\n3-element Array{Int64,1}:\n 1\n 2\n 3We can also reconstruct the data to recover the original structure.reconstruct() rebuilds from an object and a partial tuple or vector, useful when some fields have been deactivated with the @flattenable macro.\njulia> reconstruct(foo, (1, 2, 3))\nFoo{Int64}(1, 2, 3)Nested types work too:struct Nested{T1, T2}\n    f::Foo{T1}\n    b::T2\n    c::T2\nend\n\njulia> nested = Nested(Foo(1,2,3), 4.0, 5.0)\nNested{Int64,Float64}(Foo{Int64}(1,2,3),4.0,5.0)\n\njulia> flatten(Tuple, nested)\n(1, 2, 3, 4.0, 5.0)\n\njulia> flatten(Vector, nested)\n5-element Array{Float64,1}:\n 1.0\n 2.0\n 3.0\n 4.0\n 5.0\n\njulia> reconstruct(nested, (1, 2, 3, 4, 5))\nNested{Int64,Float64}(Foo{Int64}(1, 2, 3), 4, 5)Reconstruct returns the same type as the original. If you want a new struct matching the passed in values, use retype.julia> retype(nested, (1, 2, 3, 4, 5))\nNested{Int64,Int64}(Foo{Int64}(1, 2, 3), 4, 5)"
},

{
    "location": "#Updating-mutable-structs-1",
    "page": "Readme",
    "title": "Updating mutable structs",
    "category": "section",
    "text": "If we want to update mutable structs in place, you can use update!:mutable struct MutableFoo1{T}\n   a::T\n   b::T\n   c::T\nend\n\njulia> mufoo = MutableFoo(1,2,3)\nMuFoo{Int64}(1,2,3)\n\njulia> update!(mufoo, (2,4,6))\nMutableFoo{Int64}(2, 4, 6)"
},

{
    "location": "#Stripping-units-1",
    "page": "Readme",
    "title": "Stripping units",
    "category": "section",
    "text": "An array of floats is a most common input for optimisers and other numerical tools, and unitful parameters can make this tricky.Loading Unitful.jl, ulflatten(), ulreconstruct() and ulretype() will be available for unit-less flattening. This greatly improves the speed of flattening unitful structs to Vector and reconstructing them, as it will be type stable. It then allows reconstructing the vector back to the same unit types given a Vector of floats. "
},

{
    "location": "#Excluding-fields-from-flattening-1",
    "page": "Readme",
    "title": "Excluding fields from flattening",
    "category": "section",
    "text": "Fields can be excluded from flattening with the flattenable(struct, field) method, easily defined using @flattenable from FieldMetadata.jl. I\'ll also define a @foobar metadata to use later:using FieldMetadata\nusing Flatten \nimport Flatten: flattenable\n\n@metadata foobar :nobar\n\n@flattenable @foobar struct Partial{A,B,C}\n    a::A | :foo | true\n    b::B | :foo | true\n    c::C | :foo | false\nend\n\n@flattenable @foobar struct NestedPartial{P,A,B}\n    np::P | :bar | true\n    nb::A | :bar | true\n    nc::B | :bar | false\nend\n\njulia> nestedpartial = NestedPartial(Partial(1.0, 2.0, 3.0), 4, 5)\nNestedPartial{Partial{Float64,Float64,Float64},Int64,Int64}(Partial{Float64,Float64,Float64}(1.0, 2.0, 3.0), 4, 5)\n\njulia> nestedpartial = NestedPartial(Partial(1.0, 2.0, 3.0), 4, 5)\nNestedPartial{Partial{Float64,Float64,Float64},Int64,Int64}(Partial{Float64,Float64,Float64}(1.0, 2.0, 3.0), 4, 5)\n\njulia> flatten(Tuple, nestedpartial)\n(1.0, 2.0, 4)\n\njulia> flatten(Vector, nestedpartial)\n5-element Array{Float64,1}:\n 1.0\n 2.0\n 4.0Of course, reconstruct and retype and update! also respect flattenable fields: julia> reconstruct(nestedpartial, (1, 2, 4.0))\nNestedPartial{Partial{Float64,Float64,Float64},Int64,Int64}(Partial{Float64,Float64,Float64}(1.0, 2.0, 3.0), 4, 5)\n\njulia> retype(nestedpartial, (1, 2, 4.0))\nNestedPartial{Partial{Int64,Float64,Float64},Float64,Int64}(Partial{Int64,Float64,Float64}(1, 2.0, 3.0), 4.0, 5)Note: use Tuples of parameters when using mixed types. Vectors of mixed type will not be type-stable, and Flatten.jl methods will be slow."
},

{
    "location": "#Meta-flattening-1",
    "page": "Readme",
    "title": "Meta flattening",
    "category": "section",
    "text": "We can also flatten the @foobar metadata defined earlier:julia> metaflatten(partial, foobar) \n(:foo, :foo)\n\njulia> metaflatten(nestedpartial, foobar)\n(:foo, :foo, :bar)Or flatten the fieldnames:julia> fieldnameflatten(nestedpartial)                                            \n(:a, :b, :nb) "
},

{
    "location": "autodocs/#Flatten.flatten",
    "page": "Docstrings",
    "title": "Flatten.flatten",
    "category": "function",
    "text": "Flattening. Flattens a nested type to a Tuple or Vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Flatten.metaflatten",
    "page": "Docstrings",
    "title": "Flatten.metaflatten",
    "category": "function",
    "text": "Tag flattening. Flattens data attached to a field by methods of a passed in function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Flatten.reconstruct",
    "page": "Docstrings",
    "title": "Flatten.reconstruct",
    "category": "function",
    "text": "Reconstruct an object from partial Tuple or Vector data and another object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Flatten.retype",
    "page": "Docstrings",
    "title": "Flatten.retype",
    "category": "function",
    "text": "Retype an object from partial Tuple or Vector data and another object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Flatten.update!",
    "page": "Docstrings",
    "title": "Flatten.update!",
    "category": "function",
    "text": "Update a mutable object with partial Tuple or Vector data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Flatten.@flattenableFlatten.@reflattenableFlatten.FlattenFlatten.__init__Flatten.default_combinerFlatten.evalFlatten.fieldname_metaFlatten.fieldnameflattenFlatten.fieldparent_metaFlatten.fieldparenttype_metaFlatten.fieldtype_metaFlatten.fieldtypeflattenFlatten.flattenFlatten.flatten_exprFlatten.flatten_innerFlatten.flattenableFlatten.includeFlatten.metaflattenFlatten.metaflatten_exprFlatten.metaflatten_innerFlatten.nestedFlatten.parentflattenFlatten.parenttypeflattenFlatten.reconstructFlatten.reconstruct_combinerFlatten.reconstruct_exprFlatten.reconstruct_innerFlatten.retypeFlatten.retype_combinerFlatten.retype_exprFlatten.retype_innerFlatten.update!Flatten.update_combinerFlatten.update_exprFlatten.update_inner"
},

]}
