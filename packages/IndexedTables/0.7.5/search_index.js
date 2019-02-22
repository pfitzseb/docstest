var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "JuliaDB docs Build Coverage\n(Image: ) (Image: ) (Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#IndexedTables.jl-1",
    "page": "Readme",
    "title": "IndexedTables.jl",
    "category": "section",
    "text": "IndexedTables provides tabular data structures where some of the columns form a sorted index. It provides the backend to JuliaDB, but can be used on its own for efficient in-memory data processing and analytics."
},

{
    "location": "#Data-Structures-1",
    "page": "Readme",
    "title": "Data Structures",
    "category": "section",
    "text": "The two table types in IndexedTables differ in how data is accessed.\nThere is no performance difference between table types for operations such as selecting, filtering, and map/reduce.First let\'s create some data to work with.city = vcat(fill(\"New York\", 3), fill(\"Boston\", 3))\n\ndates = repmat(Date(2016,7,6):Date(2016,7,8), 2)\n\nvalues = [91, 89, 91, 95, 83, 76]"
},

{
    "location": "#Table-1",
    "page": "Readme",
    "title": "Table",
    "category": "section",
    "text": "Data is accessed as a Vector of NamedTuples.  \nSorted by primary key(s), pkey.julia> t1 = table(@NT(city = city, dates = dates, values = values); pkey = [:city, :dates])\nTable with 6 rows, 3 columns:\ncity        dates       values\n──────────────────────────────\n\"Boston\"    2016-07-06  95\n\"Boston\"    2016-07-07  83\n\"Boston\"    2016-07-08  76\n\"New York\"  2016-07-06  91\n\"New York\"  2016-07-07  89\n\"New York\"  2016-07-08  91\n\njulia> t1[1]\n(city = \"Boston\", dates = 2016-07-06, values = 95)\n\njulia> first(t1)\n(city = \"Boston\", dates = 2016-07-06, values = 95)"
},

{
    "location": "#NDSparse-1",
    "page": "Readme",
    "title": "NDSparse",
    "category": "section",
    "text": "Data is accessed as an N-dimensional sparse array with arbitrary indexes.\nSorted by index variables (first argument).julia> t2 = ndsparse(@NT(city=city, dates=dates), @NT(value=values))\n2-d NDSparse with 6 values (1 field named tuples):\ncity        dates      │ value\n───────────────────────┼──────\n\"Boston\"    2016-07-06 │ 95\n\"Boston\"    2016-07-07 │ 83\n\"Boston\"    2016-07-08 │ 76\n\"New York\"  2016-07-06 │ 91\n\"New York\"  2016-07-07 │ 89\n\"New York\"  2016-07-08 │ 91\n\njulia> t2[\"Boston\", Date(2016, 7, 6)]\n(value = 95)\n\njulia> first(t2)\n(value = 95)As with other multi-dimensional arrays, dimensions can be permuted to change the sort order:julia> permutedims(t2, [2,1])\n2-d NDSparse with 6 values (1 field named tuples):\ndates       city       │ value\n───────────────────────┼──────\n2016-07-06  \"Boston\"   │ 95\n2016-07-06  \"New York\" │ 91\n2016-07-07  \"Boston\"   │ 83\n2016-07-07  \"New York\" │ 89\n2016-07-08  \"Boston\"   │ 76\n2016-07-08  \"New York\" │ 91"
},

{
    "location": "#Get-started-1",
    "page": "Readme",
    "title": "Get started",
    "category": "section",
    "text": "For more information, check out the JuliaDB API Reference."
},

]}
