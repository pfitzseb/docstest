var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TabularDisplay-1",
    "page": "Readme",
    "title": "TabularDisplay",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Display a vector of things in a tabular format.  "
},

{
    "location": "#Keyword-arguments-1",
    "page": "Readme",
    "title": "Keyword arguments",
    "category": "section",
    "text": "padding: minimum number of spaces between column data. Default value is 2.\nindex: prepend cell values with indices. Default value is false.\nindexsep: string that separate index and cell values.  Default value is :.\nalign: either :left or :right.  Default value is :left.\norientation: either :column or :row.  Default value is :column.\nformatter: custom formatter that takes a value and returns a string.  Default value is string function.\ndisplaywidth: custom display width.  Default value is 0, for which the system will use the terminal\'s size."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Assuming a 80-column terminal screen:1---------2---------3---------4---------5---------6---------7---------8---------\njulia> displaytable(STDOUT, [string(\"randomstr\", i) for i in 1:16])\nrandomstr1   randomstr4   randomstr7   randomstr10  randomstr13  randomstr16  \nrandomstr2   randomstr5   randomstr8   randomstr11  randomstr14               \nrandomstr3   randomstr6   randomstr9   randomstr12  randomstr15               \n\njulia> using Formatting\n\njulia> foo = generate_formatter(\"%7.5f\")\n(::#5) (generic function with 1 method)\n\njulia> displaytable(STDOUT, rand(35); padding=5, align=:right, formatter=foo, index=true, indexsep=\" -> \")\n      1 -> 0.08425     10 -> 0.51280     19 -> 0.71986     28 -> 0.50921\n      2 -> 0.22630     11 -> 0.83040     20 -> 0.95942     29 -> 0.78327\n      3 -> 0.99681     12 -> 0.17092     21 -> 0.80820     30 -> 0.34046\n      4 -> 0.17840     13 -> 0.53777     22 -> 0.24029     31 -> 0.87364\n      5 -> 0.20914     14 -> 0.25836     23 -> 0.14779     32 -> 0.06027\n      6 -> 0.37565     15 -> 0.30872     24 -> 0.27250     33 -> 0.15860\n      7 -> 0.79610     16 -> 0.52003     25 -> 0.86022     34 -> 0.27416\n      8 -> 0.66101     17 -> 0.64725     26 -> 0.46590     35 -> 0.46035\n      9 -> 0.61129     18 -> 0.64148     27 -> 0.65477                  "
},

{
    "location": "autodocs/#TabularDisplay.displaytable",
    "page": "Docstrings",
    "title": "TabularDisplay.displaytable",
    "category": "function",
    "text": "Display a vector of things in a tabular format.  \n\nKeyword arguments\n\npadding: minimum number of spaces between column data. Default value is 2.\nindex: prepend cell values with indices. Default value is false.\nindexsep: string that separate index and cell values.  Default value is :.\nalign: either :left or :right.  Default value is :left.\norientation: either :column or :row.  Default value is :column.\nformatter: custom formatter that takes a value and returns a string.  Default value is string function.\ndisplaywidth: custom display width.  Default value is 0, for which the system will use the terminal\'s size.\n\nExamples\n\ndisplaytable(STDOUT, [string(\"randomstr\", i) for i in 1:56])\n\nusing Formatting\nfoo = generate_formatter(\"%7.5f\")\ndisplaytable(STDOUT, rand(100); padding=5, align=:right, formatter=foo, index=true, indexsep=\" -> \")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TabularDisplay.TabularDisplayTabularDisplay.displaytableTabularDisplay.evalTabularDisplay.includeTabularDisplay.prependindex"
},

]}
