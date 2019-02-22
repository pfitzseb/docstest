var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Difference-Lists-for-Julia,-(C)-2018-Bill-Burdick-(William-R.-Burdick-Jr.)-1",
    "page": "Readme",
    "title": "Difference Lists for Julia, (C) 2018 Bill Burdick (William R. Burdick Jr.)",
    "category": "section",
    "text": "Difference lists arehighly efficient\nsimple\nimmutable\nconcatenate, prepend, and append in constant time\niterate in time N (like arrays)This small library provides them for Julia, so you can use them when you need to accumulate a list incrementally. Since difference lists are immutable, you can easily reuse common parts.To create a difference list, use the dl(items...) function like this:julia> dl()\ndl()\n\njulia> dl(1)\ndl(1)\n\njulia> dl(1, 2, 3)\ndl(1, 2, 3)\n\njulia> dl(1, dl(2, 3), 4)\ndl(1, dl(2, 3), 4)Difference lists can iterate so you can easily convert them to collections.julia> [x for x = dl(1, 2, 3)]\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\njulia> collect(dl(1,2,3))\n3-element Array{Any,1}:\n 1\n 2\n 3You can concatenate difference lists in constant time using concatenate(lists::DL...), like this:julia> concat(dl(1, 2), dl(3, 4))\ndl(1, 2, 3, 4)You can use a difference list itself as shorthand for concat, like this:julia> dl(1, 2)(dl(3, 4), dl(5, 6, 7))\ndl(1, 2, 3, 4, 5, 6, 7)"
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "dl(): create an empty difference list\ndl(items...): create a difference list from several elements\ntodl(iter): create a difference list from something you can iterate on\nconcat(lists...): concatenate several difference lists\ndlconcat(iter...): concatenate several iterables into a difference list\npush(list::DL, items...): make a difference list from list and items added to the end of it\npushfirst(list::DL, items...): make a difference list from list and items added to the start of it\n(aList)(iter...): concatenate a difference list with one or more other difference lists or iterablesDifference lists can iterate, so you can use them in for loops, with collect(), etc."
},

{
    "location": "autodocs/#DifferenceLists.DL",
    "page": "Docstrings",
    "title": "DifferenceLists.DL",
    "category": "type",
    "text": "DL(func)\n\nGiven function func, construct a difference list.\n\nDifference lists are highly efficient, immutable, concatenate and prepend in constant time, and iterate in time N.\n\nExamples\n\njulia> [x for x = dl(1, 2, 3)]\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferenceLists.concat",
    "page": "Docstrings",
    "title": "DifferenceLists.concat",
    "category": "function",
    "text": "concat(lists::DL...)::DL\n\nConcatenate difference lists in constant time\n\nSee also: dl\n\nExamples\n\njulia> concat(dl(1, 2), dl(3, 4))\ndl(1, 2, 3, 4)\n\njulia> concat(dl(1), dl(2))\ndl(1, 2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferenceLists.dl",
    "page": "Docstrings",
    "title": "DifferenceLists.dl",
    "category": "function",
    "text": "dl()::DL\ndl(items...)::DL\n\nConstruct a difference list of items.\n\nExamples\n\njulia> dl()\ndl()\n\njulia> dl(1)\ndl(1)\n\njulia> dl(1, 2, 3)\ndl(1, 2, 3)\n\njulia> dl(1, dl(2, 3), 4)\ndl(1, dl(2, 3), 4)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferenceLists.nextFor",
    "page": "Docstrings",
    "title": "DifferenceLists.nextFor",
    "category": "function",
    "text": "nextFor(items, state, last)\n\nCompute the next iteration value for an embedded collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferenceLists.push",
    "page": "Docstrings",
    "title": "DifferenceLists.push",
    "category": "function",
    "text": "push(item, dl::DL)\n\nPush an item onto the end of a difference list.\n\nExamples\n\njulia> push(2, push(1, dl(7, 8, 9)))\ndl(7, 8, 9, 1, 2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferenceLists.pushfirst",
    "page": "Docstrings",
    "title": "DifferenceLists.pushfirst",
    "category": "function",
    "text": "pushfirst(item, dl::DL)\n\nPush an item onto the front of a difference list.\n\nExamples\n\njulia> pushfirst(1, pushfirst(2, dl(7, 8, 9)))\ndl(1, 2, 7, 8, 9)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferenceLists.todl",
    "page": "Docstrings",
    "title": "DifferenceLists.todl",
    "category": "function",
    "text": "todl(items)\n\nCreate a difference list from something you can iterate over\n\nExamples\n\njulia> todl([1, 2, 3])\ndl(1, 2, 3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DifferenceLists.DLDifferenceLists.DifferenceListsDifferenceLists.concatDifferenceLists.dlDifferenceLists.dlconcatDifferenceLists.evalDifferenceLists.includeDifferenceLists.nextForDifferenceLists.pushDifferenceLists.pushfirstDifferenceLists.todl"
},

]}
