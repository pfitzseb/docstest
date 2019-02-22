var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RingLists-1",
    "page": "Readme",
    "title": "RingLists",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)A RingList is a list of distinct values that is unchanged by rotation. These can be created by giving a list of values or a one-dimensional array of values:julia> a = RingList(1,2,3,4);\n\njulia> b = RingList([2,3,4,1]);\n\njulia> a==b\ntrue"
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "In this list, a stands for a RingList.length(a) gives the number of elements held in the RingList.\nkeys(a) returns an iterator of the elements in a.\nhaskey(a,x) checks if x is an element of the RingList.\nVector(a) returns a one-dimensional array ofthe elements in a.Set(a) returns the elements of a (as an unordered collection).\na[x] returns the next element after x in a.\nprevious(a,x) returns the element y with a[y]==x.\nfirst(a) returns an element of a; call first(a,true) to attempt try toreturn the smallest value held in a. Fails if a is empty.insert!(a,x) inserts the element a into the RingList. No guarantee where it will end up.\ndelete!(a,x) removes x from the collection linking together itspredecessor and successor.insertafter!(a,x,y) inserts x into a after y. For example:julia> a = RingList(1,2,3)\nRingList{Int64}(1,2,3)\n\njulia> insertafter!(a,99,2)\n\njulia> a\nRingList{Int64}(1,2,99,3)reverse(a) returns a new RingList with the elements reversed.julia> a = RingList(1,2,3,4,5)\nRingList{Int64}(1,2,3,4,5)\n\njulia> b = reverse(a)\nRingList{Int64}(1,5,4,3,2)"
},

{
    "location": "autodocs/#RingLists.RingList",
    "page": "Docstrings",
    "title": "RingLists.RingList",
    "category": "type",
    "text": "RingList{T}() creates a new, empty RingList holding elements of type T. Example: RingList{Int}().\n\nRingList(list) creates a new RingList from the elements in the one-dimensional array list. Example: RingList([1,2,3]).\n\nRingList(x...) creates a new RingList from the arguments. Example: RingList(1,2,3).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingLists.insertafter!",
    "page": "Docstrings",
    "title": "RingLists.insertafter!",
    "category": "function",
    "text": "insertafter!(a::RingList,x,y) inserts x into a after y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingLists.previous",
    "page": "Docstrings",
    "title": "RingLists.previous",
    "category": "function",
    "text": "previous(a,x) returns the element y so that a[y]==x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RingLists.RingListRingLists.RingListsRingLists._revRingLists.evalRingLists.includeRingLists.insertafter!RingLists.previous"
},

]}
