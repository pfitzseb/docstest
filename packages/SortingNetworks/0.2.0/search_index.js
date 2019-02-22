var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SortingNetworks.jl-1",
    "page": "Readme",
    "title": "SortingNetworks.jl",
    "category": "section",
    "text": "Sort 1..25 values with conditional swaps.&nbsp;&nbsp; (Image: Build Status)"
},

{
    "location": "#Copyright-2017-by-Jeffrey-Sarnoff.-1",
    "page": "Readme",
    "title": "Copyright ©2017 by Jeffrey Sarnoff.",
    "category": "section",
    "text": "Sorting networks that process 1,2,..25 values are given.   These sorting networks should minimize conditional swaps.   The first sixteen are known to minimize conditional swaps.  Values may be given with the args  swapsort(x1::T, .., xn::T)::NTuple{n,T}   Values may be given using a tuple  swapsort(tup::NTuple{n,T})::NTuple{n,T}   These sorts return a tuple of values sorted in ascending order.  "
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "Pkg.add(\"SortingNetworks\")"
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": "using SortingNetworks\n\njumble = (5,3,1,4,2)\nsorted = (1,2,3,4,5)\n\nascending = swapsort(5,3,1,A4,2)\nascending == sorted\n\nascending == swapsort(jumble)\nascending == sortedWith v0.6-dev, timing sort([a,b,..]) relative to swapsort(a,b,...),    I got 15x for 4 Ints, 11x for 8 Ints, 5.75x for 16 Ints"
},

{
    "location": "#acknowlegement-1",
    "page": "Readme",
    "title": "acknowlegement",
    "category": "section",
    "text": "Jan Weidner provided provably correct code to test each implementation."
},

{
    "location": "autodocs/#SortingNetworks.SortingNetworks",
    "page": "Docstrings",
    "title": "SortingNetworks.SortingNetworks",
    "category": "module",
    "text": "Sorting networks for 1,2,..16 and 17,18..25 values are given.  \nThese sorting networks should minimize conditional swaps.  \nThe first sixteen are known to minimize conditional swaps.  \n\nFunctions are a sequence of internally parallelizable blocks.\nFunctions are written using empty lines as block delmiters.\n\n`swapsort(x1::T, .., xn::T)::NTuple{n,T}`  \n`swapsort(tup::NTuple{n,T})::NTuple{n,T}`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SortingNetworks.ExchangeSortSortingNetworks.ExchangeSortAlgSortingNetworks.MORE_ARGS_MAXSortingNetworks.MORE_ARGS_MINSortingNetworks.SortingNetworksSortingNetworks.evalSortingNetworks.includeSortingNetworks.swapsort"
},

]}
