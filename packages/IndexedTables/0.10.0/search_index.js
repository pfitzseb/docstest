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
    "text": "IndexedTables offers two data structures: IndexedTable and NDSparse.Both types store data in columns.\nIndexedTable and NDSparse differ mainly in how data is accessed.\nBoth types have equal performance for Table operations (select, filter, etc.). "
},

{
    "location": "#Quickstart-1",
    "page": "Readme",
    "title": "Quickstart",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"IndexedTables\")\nusing IndexedTables\n\nt = table((x = 1:100, y = randn(100)))\n\nselect(t, :x)\n\nfilter(row -> row.y > 0, t)"
},

{
    "location": "#IndexedTable-vs.-NDSparse-1",
    "page": "Readme",
    "title": "IndexedTable vs. NDSparse",
    "category": "section",
    "text": "First let\'s create some data to work with.using Dates\n\ncity = vcat(fill(\"New York\", 3), fill(\"Boston\", 3))\n\ndates = repeat(Date(2016,7,6):Day(1):Date(2016,7,8), 2)\n\nvals = [91, 89, 91, 95, 83, 76]"
},

{
    "location": "#IndexedTable-1",
    "page": "Readme",
    "title": "IndexedTable",
    "category": "section",
    "text": "(Optionally) Sorted by primary key(s), pkey.\nData is accessed as a Vector of NamedTuples.using IndexedTables\n\njulia> t1 = table((city = city, dates = dates, values = vals); pkey = [:city, :dates])\nTable with 6 rows, 3 columns:\ncity        dates       values\n──────────────────────────────\n\"Boston\"    2016-07-06  95\n\"Boston\"    2016-07-07  83\n\"Boston\"    2016-07-08  76\n\"New York\"  2016-07-06  91\n\"New York\"  2016-07-07  89\n\"New York\"  2016-07-08  91\n\njulia> t1[1]\n(city = \"Boston\", dates = 2016-07-06, values = 95)"
},

{
    "location": "#NDSparse-1",
    "page": "Readme",
    "title": "NDSparse",
    "category": "section",
    "text": "Sorted by index variables (first argument).\nData is accessed as an N-dimensional sparse array with arbitrary indexes.julia> t2 = ndsparse((city=city, dates=dates), (value=vals,))\n2-d NDSparse with 6 values (1 field named tuples):\ncity        dates      │ value\n───────────────────────┼──────\n\"Boston\"    2016-07-06 │ 95\n\"Boston\"    2016-07-07 │ 83\n\"Boston\"    2016-07-08 │ 76\n\"New York\"  2016-07-06 │ 91\n\"New York\"  2016-07-07 │ 89\n\"New York\"  2016-07-08 │ 91\n\njulia> t2[\"Boston\", Date(2016, 7, 6)]\n(value = 95)"
},

{
    "location": "#Get-started-1",
    "page": "Readme",
    "title": "Get started",
    "category": "section",
    "text": "For more information, check out the JuliaDB Documentation."
},

{
    "location": "autodocs/#IndexedTables.All",
    "page": "Docstrings",
    "title": "IndexedTables.All",
    "category": "type",
    "text": "All(cols::Union{Symbol, Int}...)\n\nSelect the union of the selections in cols. If cols == (), select all columns.\n\nExamples\n\nt = table([1,1,2,2], [1,2,1,2], [1,2,3,4], [0, 0, 0, 0], names=[:a,:b,:c,:d])\nselect(t, All(:a, (:b, :c)))\nselect(t, All())\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.Between",
    "page": "Docstrings",
    "title": "IndexedTables.Between",
    "category": "type",
    "text": "Between(first, last)\n\nSelect the columns between first and last.\n\nExamples\n\nt = table([1,1,2,2], [1,2,1,2], 1:4, \'a\':\'d\', names=[:a,:b,:c,:d])\nselect(t, Between(:b, :d))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.ColDict",
    "page": "Docstrings",
    "title": "IndexedTables.ColDict",
    "category": "type",
    "text": "d = ColDict(t)\n\nCreate a mutable dictionary of columns in t.\n\nTo get the immutable iterator of the same type as t call d[]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.IndexedTable",
    "page": "Docstrings",
    "title": "IndexedTables.IndexedTable",
    "category": "type",
    "text": "A tabular data structure that extends Columns.  Create an IndexedTable with the  table function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.Keys",
    "page": "Docstrings",
    "title": "IndexedTables.Keys",
    "category": "type",
    "text": "Keys()\n\nSelect the primary keys.\n\nExamples\n\nt = table([1,1,2,2], [1,2,1,2], [1,2,3,4], names=[:a,:b,:c], pkey = (:a, :b))\nselect(t, Keys())\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.NDSparse",
    "page": "Docstrings",
    "title": "IndexedTables.NDSparse",
    "category": "type",
    "text": "NDSparse(columns...; names=Symbol[...], kwargs...)\n\nConstruct an NDSparse array from columns. The last argument is the data column, and the rest are index columns. The names keyword argument optionally specifies names for the index columns (dimensions).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.Not",
    "page": "Docstrings",
    "title": "IndexedTables.Not",
    "category": "type",
    "text": "Not(cols::Union{Symbol, Int}...)\n\nSelect the complementary of the selection in cols. Not can accept several arguments, in which case it returns the complementary of the union of the selections.\n\nExamples\n\nt = table([1,1,2,2], [1,2,1,2], [1,2,3,4], names=[:a,:b,:c], pkey = (:a, :b))\nselect(t, Not(:a))\nselect(t, Not(:a, (:a, :b)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.Perm",
    "page": "Docstrings",
    "title": "IndexedTables.Perm",
    "category": "type",
    "text": "A permutation\n\nFields:\n\ncolumns: The columns being indexed as a vector of integers (column numbers)\nperm: the permutation - an array or iterator which has the sorted permutation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.aggregate!",
    "page": "Docstrings",
    "title": "IndexedTables.aggregate!",
    "category": "function",
    "text": "aggregate!(f::Function, arr::NDSparse)\n\nCombine adjacent rows with equal indices using the given 2-argument reduction function, in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.arrayof",
    "page": "Docstrings",
    "title": "IndexedTables.arrayof",
    "category": "function",
    "text": "arrayof(T)\n\nReturns the type of Columns or Vector suitable to store values of type T. Nested tuples beget nested Columns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.asofjoin",
    "page": "Docstrings",
    "title": "IndexedTables.asofjoin",
    "category": "function",
    "text": "asofjoin(left::NDSparse, right::NDSparse)\n\nJoin rows from left with the \"most recent\" value from right.\n\nExample\n\nusing Dates\nakey1 = [\"A\", \"A\", \"B\", \"B\"]\nakey2 = [Date(2017,11,11), Date(2017,11,12), Date(2017,11,11), Date(2017,11,12)]\navals = collect(1:4)\n\nbkey1 = [\"A\", \"A\", \"B\", \"B\"]\nbkey2 = [Date(2017,11,12), Date(2017,11,13), Date(2017,11,10), Date(2017,11,13)]\nbvals = collect(5:8)\n\na = ndsparse((akey1, akey2), avals)\nb = ndsparse((bkey1, bkey2), bvals)\n\nasofjoin(a, b)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.best_perm_estimate",
    "page": "Docstrings",
    "title": "IndexedTables.best_perm_estimate",
    "category": "function",
    "text": "Returns: (n, perm) where n is the number of columns in the beginning of cols, perm is one possible permutation of those first n columns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.collect_columns",
    "page": "Docstrings",
    "title": "IndexedTables.collect_columns",
    "category": "function",
    "text": "collect_columns(itr)\n\nCollect an iterable as a Columns object if it iterates Tuples or NamedTuples, as a normal Array otherwise.\n\nExamples\n\ns = [(1,2), (3,4)]\ncollect_columns(s)\n\ns2 = Iterators.filter(isodd, 1:8)\ncollect_columns(s2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.colnames",
    "page": "Docstrings",
    "title": "IndexedTables.colnames",
    "category": "function",
    "text": "colnames(itr)\n\nReturns the names of the \"columns\" in itr.\n\nExamples:\n\ncolnames(1:3)\ncolnames(Columns([1,2,3], [3,4,5]))\ncolnames(table([1,2,3], [3,4,5]))\ncolnames(Columns(x=[1,2,3], y=[3,4,5]))\ncolnames(table([1,2,3], [3,4,5], names=[:x,:y]))\ncolnames(ndsparse(Columns(x=[1,2,3]), Columns(y=[3,4,5])))\ncolnames(ndsparse(Columns(x=[1,2,3]), [3,4,5]))\ncolnames(ndsparse(Columns(x=[1,2,3]), [3,4,5]))\ncolnames(ndsparse(Columns([1,2,3], [4,5,6]), Columns(x=[6,7,8])))\ncolnames(ndsparse(Columns(x=[1,2,3]), Columns([3,4,5],[6,7,8])))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.columns",
    "page": "Docstrings",
    "title": "IndexedTables.columns",
    "category": "function",
    "text": "columns(itr, select::Selection = All())\n\nSelect one or more columns from an iterable of rows as a tuple of vectors.\n\nselect specifies which columns to select. Refer to the select function for the  available selection options and syntax.\n\nitr can be NDSparse, Columns, AbstractVector, or their distributed counterparts.\n\nExamples\n\nt = table(1:2, 3:4; names = [:x, :y])\n\ncolumns(t)\ncolumns(t, :x)\ncolumns(t, (:x,))\ncolumns(t, (:y, :x => -))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.convertdim",
    "page": "Docstrings",
    "title": "IndexedTables.convertdim",
    "category": "function",
    "text": "convertdim(x::NDSparse, d::DimName, xlate; agg::Function, vecagg::Function, name)\n\nApply function or dictionary xlate to each index in the specified dimension. If the mapping is many-to-one, agg or vecagg is used to aggregate the results. If agg is passed, it is used as a 2-argument reduction function over the data. If vecagg is passed, it is used as a vector-to-scalar function to aggregate the data. name optionally specifies a new name for the translated dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.convertmissing",
    "page": "Docstrings",
    "title": "IndexedTables.convertmissing",
    "category": "function",
    "text": "convertmissing(tbl, missingtype)\n\nConvert the missing value representation in tbl to be of type missingtype.\n\nExample\n\nusing IndexedTables, DataValues\nt = table([1,2,missing], [1,missing,3])\nIndexedTables.convertmissing(t, DataValue)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.dimlabels",
    "page": "Docstrings",
    "title": "IndexedTables.dimlabels",
    "category": "function",
    "text": "dimlabels(t::NDSparse)\n\nReturns an array of integers or symbols giving the labels for the dimensions of t. ndims(t) == length(dimlabels(t)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.dropmissing",
    "page": "Docstrings",
    "title": "IndexedTables.dropmissing",
    "category": "function",
    "text": "dropmissing(t        )\ndropmissing(t, select)\n\nDrop rows of table t which contain missing values (either Missing or DataValue),  optionally only using the columns in select.  Column types will be converted to  non-missing types.  For example:\n\nVector{Union{Int, Missing}} -> Vector{Int}\nDataValueArray{Int} -> Vector{Int}\n\nExample\n\nt = table([0.1,0.5,missing,0.7], [2,missing,4,5], [missing,6,missing,7], names=[:t,:x,:y])\ndropmissing(t)\ndropmissing(t, (:t, :x))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.dropna",
    "page": "Docstrings",
    "title": "IndexedTables.dropna",
    "category": "function",
    "text": "dropmissing(t        )\ndropmissing(t, select)\n\nDrop rows of table t which contain missing values (either Missing or DataValue),  optionally only using the columns in select.  Column types will be converted to  non-missing types.  For example:\n\nVector{Union{Int, Missing}} -> Vector{Int}\nDataValueArray{Int} -> Vector{Int}\n\nExample\n\nt = table([0.1,0.5,missing,0.7], [2,missing,4,5], [missing,6,missing,7], names=[:t,:x,:y])\ndropmissing(t)\ndropmissing(t, (:t, :x))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.excludecols",
    "page": "Docstrings",
    "title": "IndexedTables.excludecols",
    "category": "function",
    "text": "excludecols(itr, cols) -> Tuple of Int\n\nNames of all columns in itr except cols. itr can be any of Table, NDSparse, Columns, or AbstractVector\n\nExamples\n\nusing IndexedTables: excludecols\n\nt = table([2,1],[1,3],[4,5], names=[:x,:y,:z], pkey=(1,2))\n\nexcludecols(t, (:x,))\nexcludecols(t, (2,))\nexcludecols(t, pkeynames(t))\nexcludecols([1,2,3], (1,))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.flatten",
    "page": "Docstrings",
    "title": "IndexedTables.flatten",
    "category": "function",
    "text": "flatten(t::Table, col=length(columns(t)))\n\nFlatten col column which may contain a vector of vectors while repeating the other fields. If column argument is not provided, default to last column.\n\nExamples:\n\nx = table([1,2], [[3,4], [5,6]], names=[:x, :y])\nflatten(x, 2)\n\nt1 = table([3,4],[5,6], names=[:a,:b])\nt2 = table([7,8], [9,10], names=[:a,:b])\nx = table([1,2], [t1, t2], names=[:x, :y]);\nflatten(x, :y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.flush!",
    "page": "Docstrings",
    "title": "IndexedTables.flush!",
    "category": "function",
    "text": "flush!(arr::NDSparse)\n\nCommit queued assignment operations, by sorting and merging the internal temporary buffer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.groupby",
    "page": "Docstrings",
    "title": "IndexedTables.groupby",
    "category": "function",
    "text": "groupby(f, t, by = pkeynames(t); select, flatten=false)\n\nApply f to the select-ed columns (see select) in groups defined by the  unique values of by. \n\nIf f returns a vector, split it into multiple columns with flatten = true.\n\nExamples\n\nusing Statistics\n\nt=table([1,1,1,2,2,2], [1,1,2,2,1,1], [1,2,3,4,5,6], names=[:x,:y,:z])\n\ngroupby(mean, t, :x, select=:z)\ngroupby(identity, t, (:x, :y), select=:z)\ngroupby(mean, t, (:x, :y), select=:z)\n\ngroupby((mean, std, var), t, :y, select=:z)\ngroupby((q25=z->quantile(z, 0.25), q50=median, q75=z->quantile(z, 0.75)), t, :y, select=:z)\n\n# apply different aggregation functions to different columns\ngroupby((ymean = :y => mean, zmean = :z => mean), t, :x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.groupjoin",
    "page": "Docstrings",
    "title": "IndexedTables.groupjoin",
    "category": "function",
    "text": "groupjoin(left, right; kw...)\ngroupjoin(f, left, right; kw...)\n\nJoin left and right creating groups of values with matching keys.\n\nFor keyword argument options, see join.\n\nExamples\n\nl = table([1,1,1,2], [1,2,2,1], [1,2,3,4], names=[:a,:b,:c], pkey=(:a, :b))\nr = table([0,1,1,2], [1,2,2,1], [1,2,3,4], names=[:a,:b,:d], pkey=(:a, :b))\n\ngroupjoin(l, r)\ngroupjoin(l, r; how = :left)\ngroupjoin(l, r; how = :outer)\ngroupjoin(l, r; how = :anti)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.groupreduce",
    "page": "Docstrings",
    "title": "IndexedTables.groupreduce",
    "category": "function",
    "text": "groupreduce(f, t, by = pkeynames(t); select)\n\nCalculate a reduce operation f over table t on groups defined by the values  in selection by.  The result is put in a table keyed by the unique by values.\n\nExamples\n\nt = table([1,1,1,2,2,2], 1:6, names=[:x, :y])\ngroupreduce(+,        t, :x; select = :y)\ngroupreduce((sum=+,), t, :x; select = :y)  # change output column name to :sum\n\nt2 = table([1,1,1,2,2,2], [1,1,2,2,3,3], 1:6, names = [:x, :y, :z])\ngroupreduce(+, t2, (:x, :y), select = :z)\n\n# different reducers for different columns\ngroupreduce((sumy = :y => +, sumz = :z => +), t2, :x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.insertcol",
    "page": "Docstrings",
    "title": "IndexedTables.insertcol",
    "category": "function",
    "text": "insertcol(t, position::Integer, name, x)\n\nInsert a column x named name at position. Returns a new table.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\ninsertcol(t, 2, :w, [0,1])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.insertcolafter",
    "page": "Docstrings",
    "title": "IndexedTables.insertcolafter",
    "category": "function",
    "text": "insertcolafter(t, after, name, col)\n\nInsert a column col named name after after. Returns a new table.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\ninsertcolafter(t, :t, :w, [0,1])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.insertcolbefore",
    "page": "Docstrings",
    "title": "IndexedTables.insertcolbefore",
    "category": "function",
    "text": "insertcolbefore(t, before, name, col)\n\nInsert a column col named name before before. Returns a new table.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\ninsertcolbefore(t, :x, :w, [0,1])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.map_rows",
    "page": "Docstrings",
    "title": "IndexedTables.map_rows",
    "category": "function",
    "text": "map_rows(f, c...)\n\nTransform collection c by applying f to each element. For multiple collection arguments, apply f elementwise. Collect output as Columns if f returns Tuples or NamedTuples with constant fields, as Array otherwise.\n\nExamples\n\nmap_rows(i -> (exp = exp(i), log = log(i)), 1:5)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.ncols",
    "page": "Docstrings",
    "title": "IndexedTables.ncols",
    "category": "function",
    "text": "ncols(itr)\n\nReturns the number of columns in itr.\n\nExamples\n\nncols([1,2,3]) == 1\nncols(rows(([1,2,3],[4,5,6]))) == 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.ndsparse",
    "page": "Docstrings",
    "title": "IndexedTables.ndsparse",
    "category": "function",
    "text": "ndsparse(keys, values; kw...)\n\nConstruct an NDSparse array with the given keys and values columns. On construction,  the keys and data are sorted in lexicographic order of the keys.\n\nKeyword Argument Options:\n\nagg = nothing – Function to aggregate values with duplicate keys.\npresorted = false – Are the key columns already sorted?\ncopy = true – Should the columns in keys and values be copied?\nchunks = nothing – Provide an integer to distribute data into chunks chunks.\nA good choice is nworkers() (after using Distributed)\nSee also: distribute\n\nExamples:\n\nx = ndsparse([\"a\",\"b\"], [3,4])\nkeys(x)\nvalues(x)\nx[\"a\"]\n\n# Dimensions are named if constructed with a named tuple of columns \nx = ndsparse((index = 1:10,), rand(10))\nx[1]\n\n# Multiple dimensions by passing a (named) tuple of columns\nx = ndsparse((x = 1:10, y = 1:2:20), rand(10))\nx[1, 1]\n\n# Value columns can also have names via named tuples\nx = ndsparse(1:10, (x=rand(10), y=rand(10)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.pkeynames",
    "page": "Docstrings",
    "title": "IndexedTables.pkeynames",
    "category": "function",
    "text": "pkeynames(t::Table)\n\nNames of the primary key columns in t.\n\nExamples\n\nt = table([1,2], [3,4]);\npkeynames(t)\n\nt = table([1,2], [3,4], pkey=1);\npkeynames(t)\n\nt = table([2,1],[1,3],[4,5], names=[:x,:y,:z], pkey=(1,2));\npkeynames(t)\n\n\n\n\n\npkeynames(t::NDSparse)\n\nNames of the primary key columns in t.\n\nExample\n\nx = ndsparse([1,2],[3,4])\npkeynames(x)\n\nx = ndsparse((x=1:10, y=1:2:20), rand(10))\npkeynames(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.pkeys",
    "page": "Docstrings",
    "title": "IndexedTables.pkeys",
    "category": "function",
    "text": "pkeys(itr::IndexedTable)\n\nPrimary keys of the table. If Table doesn\'t have any designated primary key columns (constructed without pkey argument) then a default key of tuples (1,):(n,) is generated.\n\nExample\n\na = table([\"a\",\"b\"], [3,4]) # no pkey\npkeys(a)\n\na = table([\"a\",\"b\"], [3,4], pkey=1)\npkeys(a)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.popcol",
    "page": "Docstrings",
    "title": "IndexedTables.popcol",
    "category": "function",
    "text": "popcol(t, cols...)\n\nRemove the column(s) cols from the table. Returns a new table.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\npopcol(t, :x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.pushcol",
    "page": "Docstrings",
    "title": "IndexedTables.pushcol",
    "category": "function",
    "text": "pushcol(t, name, x)\n\nPush a column x to the end of the table. name is the name for the new column. Returns a new table.\n\npushcol(t, map::Pair...)\n\nPush many columns at a time.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\npushcol(t, :z, [1//2, 3//4])\npushcol(t, :z => [1//2, 3//4])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.reducedim_vec",
    "page": "Docstrings",
    "title": "IndexedTables.reducedim_vec",
    "category": "function",
    "text": "reducedim_vec(f::Function, arr::NDSparse, dims)\n\nLike reduce, except uses a function mapping a vector of values to a scalar instead of a 2-argument scalar function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.reindex",
    "page": "Docstrings",
    "title": "IndexedTables.reindex",
    "category": "function",
    "text": "reindex(t::IndexedTable, by)\nreindex(t::IndexedTable, by, select)\n\nReindex table t with new primary key by, optionally keeping a subset of columns via select.  For NDSparse, use selectkeys.\n\nExample\n\nt = table([2,1],[1,3],[4,5], names=[:x,:y,:z], pkey=(1,2))\n\nt2 = reindex(t, (:y, :z))\n\npkeynames(t2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.renamecol",
    "page": "Docstrings",
    "title": "IndexedTables.renamecol",
    "category": "function",
    "text": "renamecol(t, col, newname)\n\nSet newname as the new name for column col in t. Returns a new table.\n\nrenamecol(t, map::Pair...)\n\nRename multiple columns at a time.\n\nExample\n\nt = table([0.01, 0.05], [2,1], names=[:t, :x])\nrenamecol(t, :t, :time)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.rows",
    "page": "Docstrings",
    "title": "IndexedTables.rows",
    "category": "function",
    "text": "rows(itr, select = All())\n\nSelect one or more fields from an iterable of rows as a vector of their values.  Refer to  the select function for selection options and syntax.\n\nitr can be NDSparse, Columns, AbstractVector, or their distributed counterparts.\n\nExamples\n\nt = table([1,2],[3,4], names=[:x,:y])\nrows(t)\nrows(t, :x)\nrows(t, (:x,))\nrows(t, (:y, :x => -))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.select",
    "page": "Docstrings",
    "title": "IndexedTables.select",
    "category": "function",
    "text": "select(t::Table, which::Selection)\n\nSelect all or a subset of columns, or a single column from the table.\n\nSelection is a type union of many types that can select from a table. It can be:\n\nInteger – returns the column at this position.\nSymbol – returns the column with this name.\nPair{Selection => Function} – selects and maps a function over the selection, returns the result.\nAbstractArray – returns the array itself. This must be the same length as the table.\nTuple of Selection – returns a table containing a column for every selector in the tuple. The tuple may also contain the type Pair{Symbol, Selection}, which the selection a name. The most useful form of this when introducing a new column.\nRegex – returns the columns with names that match the regular expression.\nType – returns columns with elements of the given type.\n\nExamples:\n\nt = table(1:10, randn(10), rand(Bool, 10); names = [:x, :y, :z])\n\n# select the :x vector\nselect(t, 1)\nselect(t, :x)\n\n# map a function to the :y vector\nselect(t, 2 => abs)\nselect(t, :y => x -> x > 0 ? x : -x)\n\n# select the table of :x and :z\nselect(t, (:x, :z))\nselect(t, r\"(x|z)\")\n\n# map a function to the table of :x and :y\nselect(t, (:x, :y) => row -> row[1] + row[2])\nselect(t, (1, :y) => row -> row.x + row.y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.selectkeys",
    "page": "Docstrings",
    "title": "IndexedTables.selectkeys",
    "category": "function",
    "text": "selectkeys(x::NDSparse, sel)\n\nReturn an NDSparse with a subset of keys.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.selectvalues",
    "page": "Docstrings",
    "title": "IndexedTables.selectvalues",
    "category": "function",
    "text": "selectvalues(x::NDSparse, sel)\n\nReturn an NDSparse with a subset of values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.setcol",
    "page": "Docstrings",
    "title": "IndexedTables.setcol",
    "category": "function",
    "text": "setcol(t::Table, col::Union{Symbol, Int}, x::Selection)\n\nSets a x as the column identified by col. Returns a new table.\n\nsetcol(t::Table, map::Pair{}...)\n\nSet many columns at a time.\n\nExamples:\n\nt = table([1,2], [3,4], names=[:x, :y])\n\n# change second column to [5,6]\nsetcol(t, 2 => [5,6])\nsetcol(t, :y , :y => x -> x + 2)\n\n# add [5,6] as column :z \nsetcol(t, :z => 5:6)\nsetcol(t, :z, :y => x -> x + 2)\n\n# replacing the primary key results in a re-sorted copy\nt = table([0.01, 0.05], [1,2], [3,4], names=[:t, :x, :y], pkey=:t)\nt2 = setcol(t, :t, [0.1,0.05])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.stack",
    "page": "Docstrings",
    "title": "IndexedTables.stack",
    "category": "function",
    "text": "stack(t, by = pkeynames(t); select = Not(by), variable = :variable, value = :value)`\n\nReshape a table from the wide to the long format. Columns in by are kept as indexing columns. Columns in select are stacked. In addition to the id columns, two additional columns labeled  variable and value are added, containing the column identifier and the stacked columns. See also unstack.\n\nExamples\n\nt = table(1:4, names = [:x], pkey=:x)\nt = pushcol(t, :xsquare, :x => x -> x^2)\nt = pushcol(t, :xcube  , :x => x -> x^3)\n\nstack(t)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.summarize",
    "page": "Docstrings",
    "title": "IndexedTables.summarize",
    "category": "function",
    "text": "summarize(f, t, by = pkeynames(t); select = Not(by), stack = false, variable = :variable)\n\nApply summary functions column-wise to a table. Return a NamedTuple in the non-grouped case and a table in the grouped case. Use stack=true to stack results of the same summary function  for different columns.\n\nExamples\n\nusing Statistics\n\nt = table([1, 2, 3], [1, 1, 1], names = [:x, :y])\n\nsummarize((mean, std), t)\nsummarize((m = mean, s = std), t)\nsummarize(mean, t; stack=true)\nsummarize((mean, std), t; select = :y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.table",
    "page": "Docstrings",
    "title": "IndexedTables.table",
    "category": "function",
    "text": "table(cols; kw...)\n\nCreate a table from a (named) tuple of AbstractVectors.\n\ntable(cols::AbstractVector...; names::Vector{Symbol}, kw...)\n\nCreate a table from the provided cols, optionally with names.\n\ntable(cols::Columns; kw...)\n\nConstruct a table from a vector of tuples. See rows and Columns.\n\ntable(t::Union{IndexedTable, NDSparse}; kw...)\n\nCopy a Table or NDSparse to create a new table. The same primary keys as the input are used.\n\ntable(x; kw...)\n\nCreate an IndexedTable from any object x that follows the Tables.jl interface.\n\nKeyword Argument Options:\n\npkey: select columns to sort by and be the primary key.\npresorted = false: is the data pre-sorted by primary key columns? \ncopy = true: creates a copy of the input vectors if true. Irrelevant if chunks is specified.\nchunks::Integer: distribute the table.  Options are:\nInt – (number of chunks) a safe bet is nworkers() after using Distributed.\nVector{Int} – Number of elements in each of the length(chunks) chunks.\n\nExamples:\n\ntable(rand(10), rand(10), names = [:x, :y], pkey = :x)\n\ntable(rand(Bool, 20), rand(20), rand(20), pkey = [1,2])\n\ntable((x = 1:10, y = randn(10)))\n\ntable([(1,2), (3,4)])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.unstack",
    "page": "Docstrings",
    "title": "IndexedTables.unstack",
    "category": "function",
    "text": "unstack(t, by = pkeynames(t); variable = :variable, value = :value)\n\nReshape a table from the long to the wide format. Columns in by are kept as indexing columns. Keyword arguments variable and value denote which column contains the column identifier and which the corresponding values.  See also stack.\n\nExamples\n\nt = table(1:4, [1, 4, 9, 16], [1, 8, 27, 64], names = [:x, :xsquare, :xcube], pkey = :x);\n\nlong = stack(t)\n\nunstack(long)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.update!",
    "page": "Docstrings",
    "title": "IndexedTables.update!",
    "category": "function",
    "text": "update!(f::Function, arr::NDSparse, indices...)\n\nReplace data values x with f(x) at each location that matches the given indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.where",
    "page": "Docstrings",
    "title": "IndexedTables.where",
    "category": "function",
    "text": "where(arr::NDSparse, indices...)\n\nReturns an iterator over data items where the given indices match. Accepts the same index arguments as getindex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IndexedTables.@colsIndexedTables.AbstractIndexedTableIndexedTables.AbstractNDSparseIndexedTables.AllIndexedTables.ApplyColwiseIndexedTables.BetweenIndexedTables.ColDictIndexedTables.ColumnsIndexedTables.DatasetIndexedTables.DimNameIndexedTables.GroupByIndexedTables.GroupReduceIndexedTables.IndexedTableIndexedTables.IndexedTablesIndexedTables.KeysIndexedTables.NDSparseIndexedTables.NextTableIndexedTables.NotIndexedTables.PermIndexedTables.SpecialSelectorIndexedTables.TupIndexedTables._append!IndexedTables._applyIndexedTables._apply_with_keyIndexedTables._bcast_loop!IndexedTables._broadcast!IndexedTables._broadcast_trailing!IndexedTables._colindexIndexedTables._colsIndexedTables._cols_tupleIndexedTables._convertIndexedTables._dep_message_NextTableIndexedTables._dep_message_dropnaIndexedTables._flatten!IndexedTables._fwdIndexedTables._getindexIndexedTables._getindex_scalarIndexedTables._implIndexedTables._inIndexedTables._ismissingIndexedTables._join!IndexedTables._mapIndexedTables._map_paramsIndexedTables._mapslices_itable!IndexedTables._mapslices_itable_singleton!IndexedTables._mapslices_scalar!IndexedTables._mergeIndexedTables._merge!IndexedTables._promote_opIndexedTables._push!IndexedTables._reduceIndexedTables._reduce_selectIndexedTables._reduce_select_initIndexedTables._row_inIndexedTables._setindex!IndexedTables._setindex_scalar!IndexedTables._sizehint!IndexedTables._strip_pairIndexedTables._tuple_type_headIndexedTables._tuple_type_tailIndexedTables.addnameIndexedTables.aggregate!IndexedTables.antijoinIndexedTables.append_n!IndexedTables.arrayofIndexedTables.asofjoinIndexedTables.astupleIndexedTables.best_perm_estimateIndexedTables.cacheperm!IndexedTables.canonnameIndexedTables.cmpeltsIndexedTables.colindexIndexedTables.collect_columnsIndexedTables.collect_columns_flattenedIndexedTables.collect_columns_flattened!IndexedTables.collect_empty_columnsIndexedTables.collect_to_columns!IndexedTables.collectiontypeIndexedTables.colnameIndexedTables.colnamesIndexedTables.columnIndexedTables.columnsIndexedTables.colwise_group_fastIndexedTables.compact_memIndexedTables.concat_colsIndexedTables.concat_tupIndexedTables.concat_tup_typeIndexedTables.convertdimIndexedTables.convertkeyIndexedTables.convertmissingIndexedTables.copyelt!IndexedTables.copyrow!IndexedTables.count_overlapIndexedTables.dedup_namesIndexedTables.default_initializerIndexedTables.dimlabelsIndexedTables.dropmissingIndexedTables.dropnaIndexedTables.eltypesIndexedTables.evalIndexedTables.excludecolsIndexedTables.fastmapIndexedTables.fieldindexIndexedTables.fieldstupletypeIndexedTables.fieldtypesIndexedTables.filt_by_col!IndexedTables.find_correspondingIndexedTables.flattenIndexedTables.flush!IndexedTables.foreachIndexedTables.getsubfieldsIndexedTables.groupbyIndexedTables.groupjoinIndexedTables.groupreduceIndexedTables.grow_to_columns!IndexedTables.hascolumnsIndexedTables.includeIndexedTables.init_firstIndexedTables.init_funcIndexedTables.init_funcsIndexedTables.init_inputsIndexedTables.init_join_outputIndexedTables.innerjoinIndexedTables.insertafter!IndexedTables.insertbefore!IndexedTables.insertcolIndexedTables.insertcolafterIndexedTables.insertcolbeforeIndexedTables.is_approx_uniqs_less_thanIndexedTables.isconstrangeIndexedTables.ismissingtypeIndexedTables.issharedIndexedTables.ith_allIndexedTables.joinequalblockIndexedTables.leftIndexedTables.leftgroupjoinIndexedTables.leftjoinIndexedTables.lowerselectionIndexedTables.map_paramsIndexedTables.map_rowsIndexedTables.mapped_typeIndexedTables.match_indicesIndexedTables.missing_indxsIndexedTables.missing_instanceIndexedTables.missingtype2typeIndexedTables.namedtupleIndexedTables.naturalgroupjoinIndexedTables.naturaljoinIndexedTables.ncolsIndexedTables.ndsparseIndexedTables.nicenameIndexedTables.nullrowIndexedTables.opt_vcatIndexedTables.outergroupjoinIndexedTables.outerjoinIndexedTables.outvecIndexedTables.permcacheIndexedTables.pkeynamesIndexedTables.pkeysIndexedTables.popcolIndexedTables.primarypermIndexedTables.productIndexedTables.promote_unionIndexedTables.promoted_similarIndexedTables.pushcolIndexedTables.pushrow!IndexedTables.range_estimateIndexedTables.reduced_typeIndexedTables.reducedim_vecIndexedTables.reindexIndexedTables.rename!IndexedTables.renamecolIndexedTables.rightIndexedTables.row_asofIndexedTables.row_inIndexedTables.rowcmpIndexedTables.roweqIndexedTables.rowlessIndexedTables.rowsIndexedTables.selectIndexedTables.selectkeysIndexedTables.selectvaluesIndexedTables.set!IndexedTables.set_show_compact!IndexedTables.setcolIndexedTables.show_compact_when_wideIndexedTables.showmetaIndexedTables.showtableIndexedTables.sort_int_range_sub_by!IndexedTables.sort_sub_by!IndexedTables.sortperm_fastIndexedTables.sortperm_int_rangeIndexedTables.sortpermbyIndexedTables.stackIndexedTables.strip_unionallIndexedTables.strip_unionall_paramsIndexedTables.subscriptprintIndexedTables.subtableIndexedTables.summarizeIndexedTables.tableIndexedTables.type2missingtypeIndexedTables.unstackIndexedTables.unwrapIndexedTables.update!IndexedTables.valuenamesIndexedTables.where"
},

]}
