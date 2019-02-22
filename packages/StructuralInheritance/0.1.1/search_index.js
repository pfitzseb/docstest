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
    "text": "julia> using StructuralInheritance\n\njulia> @protostruct struct A\n         fieldFromA::Int\n       end\nProtoA\n\njulia> @protostruct struct B <: A\n         fieldFromB\n       end\nProtoB\n\njulia> @protostruct struct C <: B\n         fieldFromC\n       end\nProtoCIf we take a look at C we can see it inherits structure.help?> C\nsearch: C cp cd Cmd Char csc cot cos cmp cld cis cat Cint Core Cvoid csch cscd coth cotd cosh cosd cosc copy conj chop ceil cbrt Cuint Colon Clong Cchar const ccall catch ctime count cospi\n\n  No documentation found.\n\n  Summary\n  ≡≡≡≡≡≡≡≡≡\n\n  struct C <: ProtoC\n\n  Fields\n  ≡≡≡≡≡≡≡≡\n\n  fieldFromA :: Int64\n  fieldFromB :: Any\n  fieldFromC :: Any\n\n  Supertype Hierarchy\n  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡\n\n  C <: ProtoC <: ProtoB <: ProtoA <: Anyfunctions can be written to take advantage of the inherited structurejulia> getFieldA(x::ProtoA) = x.fieldFromA\ngetFieldA (generic function with 1 method)\n\njulia> getFieldA(C(3,\"ok\",\"c\'s new field\"))\n3(Image: Eaxmple structural inheritence diagram)"
},

{
    "location": "#Note:-inheriting-from-a-specialized-parametric-struct-is-not-currently-supported-1",
    "page": "Readme",
    "title": "Note: inheriting from a specialized parametric struct is not currently supported",
    "category": "section",
    "text": ""
},

{
    "location": "autodocs/#StructuralInheritance.@protostruct",
    "page": "Docstrings",
    "title": "StructuralInheritance.@protostruct",
    "category": "macro",
    "text": "@protostruct(struct_ [, prefix_])\n\ncreates a struct that can have structure inherited from it if also defined by @protostruct, creates an abstract type with a name given by the struct definitions name and a prefix. The concrete type inherits from the abstract type and anything which inherits the concrrete types structure also inherits from the abstract type.\n\n\n\n\n\n"
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
    "location": "autodocs/#StructuralInheritance.deparametrize_lightName",
    "page": "Docstrings",
    "title": "StructuralInheritance.deparametrize_lightName",
    "category": "function",
    "text": "strips parameterization off of a name that does not include inheritence information\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.extractfields",
    "page": "Docstrings",
    "title": "StructuralInheritance.extractfields",
    "category": "function",
    "text": "extracts the fields from a struct definition\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.extractname",
    "page": "Docstrings",
    "title": "StructuralInheritance.extractname",
    "category": "function",
    "text": "gets the name of a struct definition\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructuralInheritance.filtertofields",
    "page": "Docstrings",
    "title": "StructuralInheritance.filtertofields",
    "category": "function",
    "text": "returns an array with only the field definitions\n\n\n\n\n\n"
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
    "location": "autodocs/#StructuralInheritance.sanitize",
    "page": "Docstrings",
    "title": "StructuralInheritance.sanitize",
    "category": "function",
    "text": "annotates module information to unanotated typed fields\n\n\n\n\n\n"
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
    "text": "StructuralInheritance.@protostructStructuralInheritance.StructuralInheritanceStructuralInheritance.abstracttypeStructuralInheritance.addparamsStructuralInheritance.assertcollisionfreeStructuralInheritance.deparametrize_lightNameStructuralInheritance.evalStructuralInheritance.extractfieldsStructuralInheritance.extractnameStructuralInheritance.fieldBackingStructuralInheritance.fieldsymbolsStructuralInheritance.filtertofieldsStructuralInheritance.fulltypenameStructuralInheritance.get2parametersStructuralInheritance.getparametersStructuralInheritance.getpathStructuralInheritance.includeStructuralInheritance.isfunctionStructuralInheritance.isparametricStructuralInheritance.ispathStructuralInheritance.newnamesStructuralInheritance.parameterMapStructuralInheritance.registerStructuralInheritance.renameStructuralInheritance.replacefieldsStructuralInheritance.sanitizeStructuralInheritance.shadowMapStructuralInheritance.updateParameters"
},

]}
