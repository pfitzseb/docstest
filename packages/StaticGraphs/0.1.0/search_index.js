var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StaticGraphs-1",
    "page": "Readme",
    "title": "StaticGraphs",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)Memory-efficient, performant graph structures optimized for large networks.  Uses LightGraphs.Note: adding/removing edges and vertices is not supported with this graph type."
},

{
    "location": "autodocs/#StaticGraphs.AbstractStaticGraph",
    "page": "Docstrings",
    "title": "StaticGraphs.AbstractStaticGraph",
    "category": "type",
    "text": "AbstractStaticGraph{T, U}\n\nAn abstract type representing a simple graph structure parameterized by integer types\n\nT: the type representing the graph\'s vertices\nU: the type representing the number of edges in the graph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticGraphs.StaticDiGraph",
    "page": "Docstrings",
    "title": "StaticGraphs.StaticDiGraph",
    "category": "type",
    "text": "StaticDiGraph{T, U} <: AbstractStaticGraph{T, U}\n\nA type representing a static directed graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticGraphs.StaticGraph",
    "page": "Docstrings",
    "title": "StaticGraphs.StaticGraph",
    "category": "type",
    "text": "StaticGraph{T, U} <: AbstractStaticGraph{T, U}\n\nA type representing an undirected static graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticGraphs.fastview",
    "page": "Docstrings",
    "title": "StaticGraphs.fastview",
    "category": "function",
    "text": "UnsafeVectorView only works for isbits types. For other types, we\'re already allocating lots of memory elsewhere, so creating a new SubArray is fine. This function looks type-unstable, but the isbits(T) test can be evaluated by the compiler, so the result is actually type-stable. From https://github.com/rdeits/NNLS.jl/blob/0a9bf56774595b5735bc738723bd3cb94138c5bd/src/NNLS.jl#L218.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StaticGraphs.mintype",
    "page": "Docstrings",
    "title": "StaticGraphs.mintype",
    "category": "function",
    "text": "mintype(v)\n\nReturns the minimum integer type required to represent integer v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StaticGraphs.AbstractStaticEdgeStaticGraphs.AbstractStaticGraphStaticGraphs.SDGFormatStaticGraphs.SDiGraphStaticGraphs.SGFormatStaticGraphs.SGraphStaticGraphs.StaticDiGraphStaticGraphs.StaticDiGraphEdgeStaticGraphs.StaticEdgeStaticGraphs.StaticEdgeIterStaticGraphs.StaticGraphStaticGraphs.StaticGraphEdgeStaticGraphs.StaticGraphFormatStaticGraphs.StaticGraphsStaticGraphs.UnsafeVectorViewStaticGraphs._bvrangeStaticGraphs._fvrangeStaticGraphs.evalStaticGraphs.fastviewStaticGraphs.in_edgesStaticGraphs.includeStaticGraphs.indtypeStaticGraphs.loadsgStaticGraphs.mintypeStaticGraphs.out_edgesStaticGraphs.savesgStaticGraphs.vectype"
},

]}
