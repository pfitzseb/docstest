var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UniqueVectors-1",
    "page": "Readme",
    "title": "UniqueVectors",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: UniqueVectors) (Image: UniqueVectors)julia> Pkg.add(\"UniqueVectors\")UniqueVector is a data structure acts like a Vector of unique elements, but also maintains a dictionary that is updated in sync with the vector, which allows for quick lookup of the index of any element:julia> using UniqueVectors\n\njulia> uv = UniqueVector([\"cat\", \"dog\", \"mouse\"])\n3-element UniqueVectors.UniqueVector{String}:\n \"cat\"\n \"dog\"\n \"mouse\"\n\njulia> uv[1]\n\"cat\"\n\njulia> findfirst(isequal(\"dog\"), uv)         # executes quickly via a dictionary lookup, not sequential search\n2As might be expected, UniqueVector supports many of the usual methods for Vector, but all operations enforce the condition that each element of the array must be unique.  The mutating methods push!, pop!, and empty! are implemented as well, as these operations keep constant the indices of existing elements in the array, allowing the dictionary to be updated efficiently.In addition, UniqueVector implements a mutating findfirst! method, which returns the index of an element if it exists in the array, or otherwise appends the element and returns its new index:julia> findfirst!(isequal(\"cat\"), uv)\n1\n\njulia> findfirst!(isequal(\"horse\"), uv)\n4\n\njulia> uv\n4-element UniqueVectors.UniqueVector{String}:\n \"cat\"\n \"dog\"\n \"mouse\"\n \"horse\"UniqueVector is derived from an abstract type known as AbstractUniqueVector.  This type is meant for anything that implements a fast bi-directional mapping between elements of a type T and integers from 1 to N.  For some applications, it will be possible to have alternative implementations of this interface–ones that resemble an UniqueVector but can be calculated quickly on the fly (and may not need to be fully stored in memory).  One notable example of this would be Lin Tables, which are often used in numerical exact diagonalization studies, and which are used to map each basis element of a quantum Hamiltonian to indices 1 through N.(More generally, one might want an abstract type that represents any bidirectional mapping between two different sets (without one of them necessarily being contiguous integers from 1 to N).  In this case, using findfirst may not be the appropriate interface, and I\'d welcome any comments on this.)Note: This package was formerly known as IndexedArrays (see issue #4)."
},

{
    "location": "autodocs/#UniqueVectors.swap!",
    "page": "Docstrings",
    "title": "UniqueVectors.swap!",
    "category": "function",
    "text": "swap!(uv::UniqueVector, to::Int, from::Int) interchange/swap the values on the indices to and from in the UniqueVector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UniqueVectors.@delegateUniqueVectors.AbstractUniqueVectorUniqueVectors.EqualToUniqueVectors.UniqueVectorUniqueVectors.UniqueVectorErrorUniqueVectors.UniqueVectorsUniqueVectors._dep_message_UniqueVectorErrorUniqueVectors.doneUniqueVectors.evalUniqueVectors.findfirstUniqueVectors.findfirst!UniqueVectors.findinUniqueVectors.findlastUniqueVectors.findnextUniqueVectors.findprevUniqueVectors.includeUniqueVectors.nextUniqueVectors.nothing_sentinelUniqueVectors.startUniqueVectors.swap!UniqueVectors.unquote"
},

]}
