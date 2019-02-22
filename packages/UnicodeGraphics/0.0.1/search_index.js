var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnicodeGraphics-1",
    "page": "Readme",
    "title": "UnicodeGraphics",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Convert a matrix of Real into a braile or block Unicode string, real fast.pac = [0 0 0 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0;\n       0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0;\n       0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0;\n       0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0;\n       0 0 1 1 1 1 1 1 1 0 0 1 1 1 1 1 1 1 1 0;\n       0 1 1 1 1 1 1 1 1 0 0 1 1 1 1 1 1 1 1 0;\n       0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0;\n       1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0;\n       1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0;\n       1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0;\n       1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1;\n       1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0;\n       1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0;\n       0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0;\n       0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0;\n       0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0;\n       0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0;\n       0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0;\n       0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0;\n       0 0 0 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0]\n\njulia> print(blockize(pac))\n     ▄▄██████▄▄\n  ▄██████████████▄\n ▄███████  ████████\n▄██████████████▀▀\n███████████▀▀\n███████████▄▄      ▀\n▀██████████████▄▄\n ▀█████████████████\n  ▀██████████████▀\n     ▀▀██████▀▀Or braile:ghost = [1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0;\n         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0;\n         1.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 1.0 1.0 1.0 1.0 0.0 0.0 0.0 0.0 0.0 0.0 1.0;\n         0.0 0.0 0.0 0.0 0.0 0.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 0.0 0.0 0.0 0.0 0.0;\n         1.0 0.0 0.0 0.0 0.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 0.0 0.0 0.0 1.0;\n         0.0 0.0 0.0 0.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0 0.0 0.0 1.0 1.0 1.0 0.0 0.0 0.0;\n         1.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 1.0 1.0 0.0 0.0 0.0 0.0 1.0 1.0 0.0 0.0 1.0;\n         0.0 0.0 0.0 0.0 1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0 0.0 0.0 1.0 1.0 0.0 0.0 0.0;\n         1.0 0.0 0.0 1.0 1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0 0.0 0.0 1.0 1.0 1.0 0.0 1.0;\n         0.0 0.0 0.0 1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0 0.0 0.0 1.0 1.0 1.0 1.0 0.0 0.0;\n         1.0 0.0 0.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 0.0 1.0;\n         0.0 0.0 0.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 0.0 0.0;\n         1.0 0.0 0.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 0.0 1.0;\n         0.0 0.0 0.0 1.0 1.0 0.0 1.0 1.0 1.0 0.0 0.0 1.0 1.0 1.0 0.0 1.0 1.0 0.0 0.0;\n         1.0 0.0 0.0 1.0 0.0 0.0 0.0 1.0 1.0 0.0 0.0 1.0 1.0 0.0 0.0 0.0 1.0 0.0 1.0;\n         0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0;\n         1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0]\n\n\njulia> print(brailize(view(ghost, 2:15, 4:17), 0.5))                                                                         \n⠀⣠⣴⣶⣦⣄⠀                                                                                                                \n⣨⡄⢹⣯⡄⢹⣇                                                                                                                \n⣿⣶⣿⣿⣶⣿⣿                                                                                                                \n⠋⠈⠛⠀⠛⠁⠙                                                                                                                "
},

{
    "location": "autodocs/#UnicodeGraphics.UnicodeGraphics",
    "page": "Docstrings",
    "title": "UnicodeGraphics.UnicodeGraphics",
    "category": "module",
    "text": "Block and braile rendering of julia arrays, for terminal graphics.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodeGraphics.blockize",
    "page": "Docstrings",
    "title": "UnicodeGraphics.blockize",
    "category": "function",
    "text": "brailize(a, cutoff=0)\n\nConvert an array to a block unicode string, filling values above the cutoff point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodeGraphics.blockize!",
    "page": "Docstrings",
    "title": "UnicodeGraphics.blockize!",
    "category": "function",
    "text": "blockize!(out, a, cutoff=0)\n\nConvert an array to a braile unicode string, filling the out array. Calculation of array dims is a little complicated:\n\nyrange, xrange = axes(a)\nout = Array{Char,2}(undef, length(xrange) + 1, (length(yrange) - 1) ÷ 2 + 1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodeGraphics.brailize",
    "page": "Docstrings",
    "title": "UnicodeGraphics.brailize",
    "category": "function",
    "text": "brailize(a, cutoff=0)\n\nConvert an array to a braile unicode string, filling values above the cutoff point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodeGraphics.brailize!",
    "page": "Docstrings",
    "title": "UnicodeGraphics.brailize!",
    "category": "function",
    "text": "brailize!(out, a, cutoff=0)\n\nConvert an array to a braile unicode string, filling the out array. Calculation of array dims is a little complicated:\n\nyrange, xrange = axes(a)\nout = Array{Char,2}(undef, (length(xrange) - 1) ÷ 2 + 2, (length(yrange) - 1) ÷ 4 + 1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnicodeGraphics.UnicodeGraphicsUnicodeGraphics.block_array!UnicodeGraphics.blockizeUnicodeGraphics.blockize!UnicodeGraphics.braile_array!UnicodeGraphics.braile_hexUnicodeGraphics.brailizeUnicodeGraphics.brailize!UnicodeGraphics.checkvalUnicodeGraphics.evalUnicodeGraphics.include"
},

]}
