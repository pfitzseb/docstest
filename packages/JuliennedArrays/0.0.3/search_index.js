var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JuliennedArrays-1",
    "page": "Readme",
    "title": "JuliennedArrays",
    "category": "section",
    "text": "(Image: Stable) (Image: Build Status) (Image: CodeCov)"
},

{
    "location": "autodocs/#JuliennedArrays.Align",
    "page": "Docstrings",
    "title": "JuliennedArrays.Align",
    "category": "type",
    "text": "Align(it, along...)\n\njulia> using JuliennedArrays\n\njulia> array = [[1, 2], [3, 4]];\n\njulia> aligned = Align(array, False(), True())\n2×2 Align{Int64,2,Array{Array{Int64,1},1},Tuple{False,True}}:\n 1  2\n 3  4\n\njulia> aligned[1, 1] = 5;\n\njulia> collect(aligned)\n2×2 Array{Int64,2}:\n 5  2\n 3  4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliennedArrays.False",
    "page": "Docstrings",
    "title": "JuliennedArrays.False",
    "category": "type",
    "text": "struct False\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliennedArrays.Slices",
    "page": "Docstrings",
    "title": "JuliennedArrays.Slices",
    "category": "type",
    "text": "Slices(array, code...)\n\njulia> using JuliennedArrays\n\njulia> it = [1 2; 3 4];\n\njulia> Slices(it, False(), True())\n2-element Slices{SubArray{Int64,1,Array{Int64,2},Tuple{Int64,Base.OneTo{Int64}},true},1,Array{Int64,2},Tuple{False,True}}:\n [1, 2]\n [3, 4]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliennedArrays.True",
    "page": "Docstrings",
    "title": "JuliennedArrays.True",
    "category": "type",
    "text": "struct True\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JuliennedArrays.AlignJuliennedArrays.FalseJuliennedArrays.JuliennedArraysJuliennedArrays.MoreJuliennedArrays.SlicesJuliennedArrays.TrueJuliennedArrays.TypedBoolJuliennedArrays.evalJuliennedArrays.includeJuliennedArrays.not"
},

]}
