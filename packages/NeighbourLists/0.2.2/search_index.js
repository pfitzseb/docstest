var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NeighbourLists.jl-1",
    "page": "Readme",
    "title": "NeighbourLists.jl",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)A Julia port and restructuring of the neighbourlist implemented in matscipy (with the authors\' permission). Single-threaded, the Julia version is faster than matscipy for small systems, probably due  to the overhead of dealing with Python, but on large systems it is tends to be slower (up to around a factor 2 for 100,000 atoms). However, the Julia version is also multi-threaded, which makes up for that (but otherwise scales poorly).The package is intended to be used with JuLIP.jl, but can be used as stand-alone."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "Pkg.add(\"NeighbourLists\")\nusing NeighbourLists\n?PairListUntil I get around to writing some documentation, look at the tests and JuLIP.jl on how to use this package. Or just open an issue and ask."
},

]}
