var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ShowSet-1",
    "page": "Readme",
    "title": "ShowSet",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)This module makes the printing of Set objects in Julia nicer."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Without the use of this module, Set objects display like this:julia> BitSet([1,3,0])\nBitSet([1,3,0])\n\njulia> Set([\"One\", \"Two\", \"Three\"])\nSet(\"One\",\"Two\",\"Three\")However, after using ShowSet it looks like this:julia> BitSet([1,3,0])\n{0,1,3}\n\njulia> Set([\"One\", \"Two\", \"Three\"])\n{One,Three,Two}The elements of the Set object are sorted into ascending order unless Julia is unable to do so. In that case, the order of the objects is arbitrary.julia> Set([1, \"hello\", 4.5, 2+3im])\n{hello,2 + 3im,4.5,1}"
},

{
    "location": "#Conversion-to-string-1",
    "page": "Readme",
    "title": "Conversion to string",
    "category": "section",
    "text": "We extend the string function for Set and BitSet objects to provide for their conversion into String objects. Some examples:julia> A = Set([\"alpha\", \"beta\", \"gamma\"]);\n\njulia> string(A)\n\"{alpha,beta,gamma}\"\n\njulia> B = BitSet([5,3,1]);\n\njulia> string(B)\n\"{1,3,5}\"\n\njulia> typeof(ans)\nString"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ShowSet.ShowSetShowSet.evalShowSet.include"
},

]}
