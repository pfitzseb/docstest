var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AbstractInstances.jl-1",
    "page": "Readme",
    "title": "AbstractInstances.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)A package for making concrete instances of abstract types."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using AbstractInstances\n\njulia> AbstractInstances.oftype(Number) isa Number\ntrue\n\njulia> AbstractInstances.oftype(Number) === AbstractInstances.oftype(Number)\nfalse\n\njulia> AbstractInstances.singleton(Number) isa Number\ntrue\n\njulia> AbstractInstances.singleton(Number) === AbstractInstances.singleton(Number)\ntrue"
},

{
    "location": "autodocs/#AbstractInstances.concretetype",
    "page": "Docstrings",
    "title": "AbstractInstances.concretetype",
    "category": "function",
    "text": "concretetype(T::Type)\n\nReturn a concrete mutable type with no fields which is a subtype of T.  The mutability of the returned type ensures that instances of the type are unique.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractInstances.oftype",
    "page": "Docstrings",
    "title": "AbstractInstances.oftype",
    "category": "function",
    "text": "oftype(T::Type)\n\nCreate a unique instance of type, concretetype(T).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractInstances.singleton",
    "page": "Docstrings",
    "title": "AbstractInstances.singleton",
    "category": "function",
    "text": "singleton(T::Type)\n\nCreate an instance of type, singletontype(T).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractInstances.singletontype",
    "page": "Docstrings",
    "title": "AbstractInstances.singletontype",
    "category": "function",
    "text": "singletontype(T::Type)\n\nReturn a concrete immutable type with no fields which is a subtype of T.  The immutability of the returned type ensures that instances of the type are singletons.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AbstractInstances.AbstractInstancesAbstractInstances._concretesymbolAbstractInstances._new_concreteAbstractInstances._new_singletonAbstractInstances._singletonsymbolAbstractInstances.concretetypeAbstractInstances.evalAbstractInstances.includeAbstractInstances.oftypeAbstractInstances.singletonAbstractInstances.singletontype"
},

]}
