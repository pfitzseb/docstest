var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SortedVectors-1",
    "page": "Readme",
    "title": "SortedVectors",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)A very lightweight Julia package to declare that a vector is sorted."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is not (yet) registered. Install withpkg> add https://github.com/tpapp/SortedVectors.jl"
},

{
    "location": "#How-to-use-1",
    "page": "Readme",
    "title": "How to use",
    "category": "section",
    "text": ""
},

{
    "location": "#Standard-constructor-1",
    "page": "Readme",
    "title": "Standard constructor",
    "category": "section",
    "text": "The only exported symbol is SortedVector. UseSortedVector([lt=isless], xs)to sort xs and save the result in a vector. xs can be any <: AbstractVector. For immutable types (eg StaticArrays.SVector or UnitRange), setindex! will not work."
},

{
    "location": "#Special-constructors-for-checking-or-skipping-sorting-1",
    "page": "Readme",
    "title": "Special constructors for checking or skipping sorting",
    "category": "section",
    "text": "If your code emits sorted vectors, use theSortedVector(SortedVectors.AssumeSorted(), lt, sorted_contents)constructor. This will skip checks.If your API accepts sorted vectors, and you want to check them, use theSortedVector(SortedVectors.CheckSorted(), lt, sorted_contents)constructor.In either case, you are responsible for ensuring that the argument vector is not modified later on. copy if you are unsure."
},

{
    "location": "#Supported-interfaces-1",
    "page": "Readme",
    "title": "Supported interfaces",
    "category": "section",
    "text": ""
},

{
    "location": "#[AbstractVector](https://docs.julialang.org/en/v1/manual/interfaces/#man-interface-array-1)-1",
    "page": "Readme",
    "title": "AbstractVector",
    "category": "section",
    "text": "setindex! verifies that sorting is maintained."
},

{
    "location": "autodocs/#SortedVectors.AssumeSorted",
    "page": "Docstrings",
    "title": "SortedVectors.AssumeSorted",
    "category": "type",
    "text": "Flag for indicating that\n\nthe argument should be assumed to be sorted, and this should not be checked,\nthe argument vector will not be modified later.\n\nNot exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SortedVectors.CheckSorted",
    "page": "Docstrings",
    "title": "SortedVectors.CheckSorted",
    "category": "type",
    "text": "Flag for indicating that\n\nsorting should be verified,\nthe argument vector will not be modified later.\n\nNot exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SortedVectors.SortedVector",
    "page": "Docstrings",
    "title": "SortedVectors.SortedVector",
    "category": "type",
    "text": "SortedVector([lt=isless], xs)\n\nSort xs by lt (which defaults to isless) and wrap in a SortedVector. For reverse sorting, use !lt.\n\nSortedVector(SortedVectors.CheckSorted(), lt, sorted_contents)\n\nChecks that the vector is sorted, throws an ArgumentError if it isn\'t. This is a relatively cheap operation if the vector is supposed to be sorted but this should be checked. Caller should copy the sorted_contents if they are mutable and may be modified.\n\nSortedVector(SortedVectors.AssumeSorted(), lt, sorted_contents)\n\nUnchecked, unsafe constructor. Use only if you are certain that sorted_contents is sorted according to lt, otherwise results are undefined. copy the sorted_contents if they are mutable and may be modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SortedVectors.cut",
    "page": "Docstrings",
    "title": "SortedVectors.cut",
    "category": "function",
    "text": "cut(x, breaks; left, right)\n\n\nReturn i such that breaks[i] < x ≤ breaks[i + 1], where < is the sorting from the second argument.\n\nWhen x ≤ breaks[1], left (0 by default) is used, and right (default: length) for x > breaks[end].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SortedVectors.AssumeSortedSortedVectors.CheckSortedSortedVectors.SortedVectorSortedVectors.SortedVectorsSortedVectors.cutSortedVectors.evalSortedVectors.include"
},

]}
