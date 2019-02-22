var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ReadOnlyArrays.jl-1",
    "page": "Readme",
    "title": "ReadOnlyArrays.jl",
    "category": "section",
    "text": "(Image: Travis Build Status) (Image: AppVeyor Build status) (Image: Coverage Status) (Image: codecov.io)A wrapper ReadOnlyArray type around AbstractArray that is read-only"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "At the Julia REPL run: using Pkg; Pkg.add(\"ReadOnlyArrays\")."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "At the Julia REPL execute: using ReadOnlyArrays, then type ?ReadOnlyArray and press enter to get help."
},

{
    "location": "autodocs/#ReadOnlyArrays.ReadOnlyArray",
    "page": "Docstrings",
    "title": "ReadOnlyArrays.ReadOnlyArray",
    "category": "type",
    "text": "ReadOnlyArray(a)\n\nReturn a read-only view into the parent array a. Most iteration, indexing, abstract arrays and strided arrays interface functions defined for array a are transparently defined for ReadOnlyArray(a). The exceptions are setindex! which is not allowed for ReadOnlyArray and similar which uses the default definitions for AbstractArray from Base. Also when used in broadcasting ReadOnlyArray uses default broadcast machinery.\n\nUse parent function to access the parent array of ReadOnlyArray.\n\nExamples\n\njulia> a = [1 2; 3 4]\n2×2 Array{Int64,2}:\n 1  2\n 3  4\n\njulia> r = ReadOnlyArray(a)\n2×2 ReadOnlyArray{Int64,2,Array{Int64,2}}:\n 1  2\n 3  4\n\njulia> r[1]\n1\n\njulia> r[1] = 10\nERROR: setindex! not defined for ReadOnlyArray{Int64,2,Array{Int64,2}}\n[...]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ReadOnlyArrays.ReadOnlyArrayReadOnlyArrays.ReadOnlyArraysReadOnlyArrays.evalReadOnlyArrays.include"
},

]}
