var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StructuralInheritance.jl-1",
    "page": "Readme",
    "title": "StructuralInheritance.jl",
    "category": "section",
    "text": "pseudo structural inheritance for the Julia language(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using StructuralInheritance\n\njulia> @protostruct struct A{T}\n           fieldFromA::T\n       end\nProtoA\n\njulia> @protostruct struct B{D} <: A{Complex{D}}\n          fieldFromB::D\n       end \"SomeOtherPrefix\"\nSomeOtherPrefixB\n\njulia> @protostruct struct C <: B{Int}\n         fieldFromC\n       end\nProtoCIf we take a look at C we can see it inherits structure.julia> @doc C\n  No documentation found.\n\n  Summary\n  ≡≡≡≡≡≡≡≡≡\n\n  struct C <: ProtoC\n\n  Fields\n  ≡≡≡≡≡≡≡≡\n\n  fieldFromA :: Complex{Int64}\n  fieldFromB :: Int64\n  fieldFromC :: Any\n\n  Supertype Hierarchy\n  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡\n\n  C <: ProtoC <: SomeOtherPrefixB{Int64} <: ProtoA{Complex{Int64}} <: Anyfunctions can be written to take advantage of the inherited structurejulia> getFieldA(x::ProtoA) = x.fieldFromA\ngetFieldA (generic function with 1 method)\n\njulia> getFieldA(C(3 + im,2,\"c\'s new field\"))\n3 + 1im(Image: Example structural inheritance diagram)"
},

{
    "location": "#Note:-on-emulating-super-constructors-1",
    "page": "Readme",
    "title": "Note: on emulating super constructors",
    "category": "section",
    "text": "julia> using StructuralInheritance\n\njulia> @protostruct struct R\n           ff::Int\n           sf\n           R(x) = new(x,x^2)\n           R(x,y) = new(x,y)\n       end\nProtoR\n\njulia> @protostruct struct S <: R\n           tf::Int\n       end\nProtoSWe can call the constructor in R and use its values to fill fields in S.julia> S(x) = S(StructuralInheritance.totuple(R(x))...,x^3)\nS\n\njulia> S(2)\nS(2, 4, 8)It is worth noting that this cannot be used with new() as new does not permit splatting."
},

{
    "location": "autodocs/#StructuralInheritance.@protostruct",
    "page": "Docstrings",
    "title": "StructuralInheritance.@protostruct",
    "category": "macro",
    "text": "@protostruct(struct_ [, prefix_])\n\ncreates a struct that can have structure inherited from it and can inherit structure.\n\nadditionally it creates an abstract type with a name given by the struct definitions name and a prefix. The concrete type inherits from the abstract type and anything which inherits the concrete types structure also inherits behavior from the abstract type.\n\njulia> using StructuralInheritance\n\njulia> @protostruct struct A{T}\n           fieldFromA::T\n       end\nProtoA\n\njulia> @protostruct struct B{D} <: A{Complex{D}}\n          fieldFromB::D\n       end \"SomeOtherPrefix\"\nSomeOtherPrefixB\n\njulia> @protostruct struct C <: B{Int}\n         fieldFromC\n       end\nProtoC\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.abstracttype",
    "page": "Docstrings",
    "title": "StructuralInheritance.abstracttype",
    "category": "function",
    "text": "Creates an abstract type with the given name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.addparams",
    "page": "Docstrings",
    "title": "StructuralInheritance.addparams",
    "category": "function",
    "text": "attaches parameters to a name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.assertcollisionfree",
    "page": "Docstrings",
    "title": "StructuralInheritance.assertcollisionfree",
    "category": "function",
    "text": "throws an error is the fields contain overlapping symbols\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.deparametrize",
    "page": "Docstrings",
    "title": "StructuralInheritance.deparametrize",
    "category": "function",
    "text": "strips parameterization off of a name that does not include inheritence information\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.detypevar",
    "page": "Docstrings",
    "title": "StructuralInheritance.detypevar",
    "category": "function",
    "text": "from Foo{A<:B} returns Foo{A}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.extractconstructors",
    "page": "Docstrings",
    "title": "StructuralInheritance.extractconstructors",
    "category": "function",
    "text": "returns array with only the field constructors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.extractfields",
    "page": "Docstrings",
    "title": "StructuralInheritance.extractfields",
    "category": "function",
    "text": "extracts the fields from a struct definition\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.filtertofields",
    "page": "Docstrings",
    "title": "StructuralInheritance.filtertofields",
    "category": "function",
    "text": "returns an array with only the field definitions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.flattenfields",
    "page": "Docstrings",
    "title": "StructuralInheritance.flattenfields",
    "category": "function",
    "text": "flattens the scope of the fields\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.fulltypename",
    "page": "Docstrings",
    "title": "StructuralInheritance.fulltypename",
    "category": "function",
    "text": "adds source module information to the type name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.register",
    "page": "Docstrings",
    "title": "StructuralInheritance.register",
    "category": "function",
    "text": "registers a new struct and abstract type pair\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.rename",
    "page": "Docstrings",
    "title": "StructuralInheritance.rename",
    "category": "function",
    "text": "returns a renamed struct\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.replacefields",
    "page": "Docstrings",
    "title": "StructuralInheritance.replacefields",
    "category": "function",
    "text": "returns a copy with replacement fields\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.sanitize!",
    "page": "Docstrings",
    "title": "StructuralInheritance.sanitize!",
    "category": "function",
    "text": "annotates module information to unanotated typed fields\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.totuple",
    "page": "Docstrings",
    "title": "StructuralInheritance.totuple",
    "category": "function",
    "text": "turns an object into a tuple of its fields\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.tupleexpander",
    "page": "Docstrings",
    "title": "StructuralInheritance.tupleexpander",
    "category": "function",
    "text": "creates AST for expanding a struct into a tuple with the fields given\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.updateParameters",
    "page": "Docstrings",
    "title": "StructuralInheritance.updateParameters",
    "category": "function",
    "text": "update parameters from old fields\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StructuralInheritance.@protostructStructuralInheritance.FieldTypeStructuralInheritance.StructuralInheritanceStructuralInheritance.SymbolTupleStructuralInheritance.abstracttypeStructuralInheritance.addparamsStructuralInheritance.assertcollisionfreeStructuralInheritance.deparametrizeStructuralInheritance.detypevarStructuralInheritance.evalStructuralInheritance.extractconstructorsStructuralInheritance.extractfieldsStructuralInheritance.fieldBackingStructuralInheritance.filtertofieldsStructuralInheritance.flattenfieldsStructuralInheritance.fulltypenameStructuralInheritance.get2parametersStructuralInheritance.getfieldnamesStructuralInheritance.getparametersStructuralInheritance.getpathStructuralInheritance.includeStructuralInheritance.inheritsStructuralInheritance.iscontainerlikeStructuralInheritance.isfunctiondefinitionStructuralInheritance.isparametricStructuralInheritance.ispathStructuralInheritance.mutabilityMapStructuralInheritance.newnamesStructuralInheritance.parameterMapStructuralInheritance.protostructStructuralInheritance.qualifynameStructuralInheritance.registerStructuralInheritance.renameStructuralInheritance.replacefieldsStructuralInheritance.sanitize!StructuralInheritance.shadowMapStructuralInheritance.stablegetparametersStructuralInheritance.totupleStructuralInheritance.tupleexpanderStructuralInheritance.updateParameters"
},

]}
