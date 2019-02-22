var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LightQuery-1",
    "page": "Readme",
    "title": "LightQuery",
    "category": "section",
    "text": "(Image: Latest) (Image: Build Status) (Image: CodeCov)"
},

{
    "location": "autodocs/#LightQuery.@>",
    "page": "Docstrings",
    "title": "LightQuery.@>",
    "category": "macro",
    "text": "macro >(body)\n\nIf body is in the form body_ |> tail_, call @_ on tail, and recur on body.\n\njulia> using LightQuery\n\njulia> @> 0 |> _ - 1 |> abs\n1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.@_",
    "page": "Docstrings",
    "title": "LightQuery.@_",
    "category": "macro",
    "text": "macro _(body)\n\nTerser function syntax. The arguments are inside the body; the first argument is _, the second argument is __, etc. Will always @inline.\n\njulia> using LightQuery\n\njulia> (@_ _ + 1)(1)\n2\n\njulia> map((@_ __ - _), (1, 2), (2, 1))\n(1, -1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.By",
    "page": "Docstrings",
    "title": "LightQuery.By",
    "category": "type",
    "text": "By(it, call)\n\nMark that it has been pre-sorted by call. For use with Group or Join.\n\njulia> using LightQuery\n\njulia> By([1, 2], identity)\nBy{Array{Int64,1},typeof(identity)}([1, 2], identity)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Group",
    "page": "Docstrings",
    "title": "LightQuery.Group",
    "category": "type",
    "text": "Group(it::By)\n\nGroup consecutive keys in it. Requires a presorted object (see By). Relies on the fact that iteration states can be converted to indices; thus, you might have to define LightQuery.state_to_index for unrecognized types.\n\njulia> using LightQuery\n\njulia> Group(By([1, 3, 2, 4], iseven)) |> collect\n2-element Array{Pair{Bool,SubArray{Int64,1,Array{Int64,1},Tuple{UnitRange{Int64}},true}},1}:\n 0 => [1, 3]\n 1 => [2, 4]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Join",
    "page": "Docstrings",
    "title": "LightQuery.Join",
    "category": "type",
    "text": "Join(left::By, right::By)\n\nFind all pairs where isequal(left.call(left.it), right.call(right.it)).\n\njulia> using LightQuery\n\njulia> Join(\n            By([1, 2, 5, 6], identity),\n            By([1, 3, 4, 6], identity)\n        ) |>\n        collect\n6-element Array{Pair{Union{Missing, Int64},Union{Missing, Int64}},1}:\n       1 => 1\n       2 => missing\n missing => 3\n missing => 4\n       5 => missing\n       6 => 6\n\nAssumes left and right are both strictly sorted (no repeats). If there are repeats, Group first.\n\njulia> @> [1, 1, 2, 2] |>\n        Group(By(_, identity)) |>\n        By(_, first) |>\n        Join(_, By([1, 2], identity)) |>\n        collect\n2-element Array{Pair{Pair{Int64,SubArray{Int64,1,Array{Int64,1},Tuple{UnitRange{Int64}},true}},Int64},1}:\n (1 => [1, 1]) => 1\n (2 => [2, 2]) => 2\n\nFor other join flavors, combine with when. Make sure to annotate with  Length if you know it.\n\njulia> @> Join(\n            By([1, 2, 5, 6], identity),\n            By([1, 3, 4, 6], identity)\n        ) |>\n        when(_, @_ !ismissing(_.first)) |>\n        Length(_, 4) |>\n        collect\n4-element Array{Pair{Union{Missing, Int64},Union{Missing, Int64}},1}:\n 1 => 1\n 2 => missing\n 5 => missing\n 6 => 6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Length",
    "page": "Docstrings",
    "title": "LightQuery.Length",
    "category": "type",
    "text": "Length(it, length)\n\nAllow optimizations based on length. Especially useful after Join and before make_columns.\n\njulia> using LightQuery\n\njulia> @> Filter(iseven, 1:4) |>\n        Length(_, 2) |>\n        collect\n2-element Array{Int64,1}:\n 2\n 4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Name",
    "page": "Docstrings",
    "title": "LightQuery.Name",
    "category": "type",
    "text": "Name(name)\n\nCreate a typed name. Can be used as a function to getproperty, with a default to missing. For multiple names, see Names.\n\njulia> using LightQuery\n\njulia> (a = 1,) |>\n        Name(:a)\n1\n\njulia> (a = 1,) |>\n        Name(:b)\nmissing\n\njulia> missing |>\n        Name(:a)\nmissing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Names",
    "page": "Docstrings",
    "title": "LightQuery.Names",
    "category": "type",
    "text": "Names(the_names...)\n\nCreate typed names. Can be used to as a function to assign or select names, with a default to missing. For just one name, see Name.\n\njulia> using LightQuery\n\njulia> (1, 1.0) |>\n        Names(:a, :b)\n(a = 1, b = 1.0)\n\njulia> (a = 1, b = 1.0) |>\n        Names(:a)\n(a = 1,)\n\njulia> (a = 1,) |>\n        Names(:a, :b)\n(a = 1, b = missing)\n\njulia> missing |>\n        Names(:a)\n(a = missing,)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Peek",
    "page": "Docstrings",
    "title": "LightQuery.Peek",
    "category": "type",
    "text": "Peek(it; max_rows = 4)\n\nGet a peek of an iterator which returns named tuples. Will show no more than max_rows. Relies on item_names.\n\njulia> using LightQuery\n\njulia> (a = 1:5, b = 5:-1:1) |>\n        rows |>\n        Peek\nShowing 4 of 5 rows\n|  :a |  :b |\n| ---:| ---:|\n|   1 |   5 |\n|   2 |   4 |\n|   3 |   3 |\n|   4 |   2 |\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.columns",
    "page": "Docstrings",
    "title": "LightQuery.columns",
    "category": "function",
    "text": "columns(it)\n\nInverse of rows. Always lazy, see make_columns for eager version.\n\njulia> using LightQuery\n\njulia> (a = [1], b = [1.0]) |>\n        rows |>\n        columns\n(a = [1], b = [1.0])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.gather",
    "page": "Docstrings",
    "title": "LightQuery.gather",
    "category": "function",
    "text": "gather(it; assignments...)\n\nFor each key => value pair in assignments, gather the Names in value into a single key. Inverse of spread.\n\njulia> using LightQuery\n\njulia> @> (a = 1, b = 1.0, c = 1//1) |>\n        gather(_, d = Names(:a, :c))\n(b = 1.0, d = (a = 1, c = 1//1))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.item_names",
    "page": "Docstrings",
    "title": "LightQuery.item_names",
    "category": "function",
    "text": "item_names(it)\n\nFind names of items in it. Used in Peek and make_columns.\n\njulia> using LightQuery\n\njulia> [(a = 1, b = 1.0), (a = 2, b = 2.0)] |>\n        item_names\n(:a, :b)\n\nIf inference cannot detect names, it will use propertynames of the first item. Map Names over it to override this behavior.\n\njulia> [(a = 1,), (a = 2, b = 2.0)] |>\n        Peek\n|  :a |\n| ---:|\n|   1 |\n|   2 |\n\njulia> @> [(a = 1,), (a = 2, b = 2.0)] |>\n        over(_, Names(:a, :b)) |>\n        Peek\n|  :a |      :b |\n| ---:| -------:|\n|   1 | missing |\n|   2 |     2.0 |\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.key",
    "page": "Docstrings",
    "title": "LightQuery.key",
    "category": "function",
    "text": "key(it)\n\nThe key in a key => value pair.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.make_columns",
    "page": "Docstrings",
    "title": "LightQuery.make_columns",
    "category": "function",
    "text": "make_columns(it)\n\nCollect into columns. Always eager, see columns for lazy version. Relies on item_names.\n\njulia> using LightQuery\n\njulia> [(a = 1, b = 1.0), (a = 2, b = 2.0)] |>\n        make_columns\n(a = [1, 2], b = [1.0, 2.0])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.named_tuple",
    "page": "Docstrings",
    "title": "LightQuery.named_tuple",
    "category": "function",
    "text": "named_tuple(it)\n\nCoerce to a named_tuple. For performance with working with arbitrary structs, define and @inline propertynames.\n\njulia> using LightQuery\n\njulia> @inline Base.propertynames(p::Pair) = (:first, :second)\n\njulia> named_tuple(:a => 1)\n(first = :a, second = 1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.order",
    "page": "Docstrings",
    "title": "LightQuery.order",
    "category": "function",
    "text": "order(it, call; keywords...)\n\nGeneralized sort. keywords will be passed to sort!; see the documentation there for options. See By for a way to explicitly mark that an object has been sorted.\n\njulia> using LightQuery\n\njulia> order([2, 1], identity)\n2-element view(::Array{Int64,1}, [2, 1]) with eltype Int64:\n 1\n 2\n\n\n\n\n\n    order(it, call, condition; keywords...)\n\nIf `call` is not type stable, consider adding a `condition` to filter.\n\n\njldoctest order julia> using LightQuery\n\njulia> order([2, 1, missing], identity, !ismissing) 2-element view(::Array{Union{Missing, Int64},1}, [2, 1]) with eltype Union{Missing, Int64}:  1  2 ```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.over",
    "page": "Docstrings",
    "title": "LightQuery.over",
    "category": "function",
    "text": "over(it, call)\n\nLazy map with argument order reversed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.remove",
    "page": "Docstrings",
    "title": "LightQuery.remove",
    "category": "function",
    "text": "remove(it, the_names...)\n\nRemove the_names. Inverse of transform.\n\njulia> using LightQuery\n\njulia> @> (a = 1, b = 1.0) |>\n        remove(_, :b)\n(a = 1,)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.rename",
    "page": "Docstrings",
    "title": "LightQuery.rename",
    "category": "function",
    "text": "rename(it; renames...)\n\nRename it. Because constants do not constant propagate through key-word arguments, wrap with Name.\n\njulia> using LightQuery\n\njulia> @> (a = 1, b = 1.0) |>\n        rename(_, c = Name(:a))\n(b = 1.0, c = 1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.rows",
    "page": "Docstrings",
    "title": "LightQuery.rows",
    "category": "function",
    "text": "rows(it)\n\nIterator over rows of a NamedTuple of arrays. Always lazy. Inverse of columns. See Peek for a way to view.\n\njulia> using LightQuery\n\njulia> (a = [1, 2], b = [1.0, 2.0]) |>\n        rows |>\n        collect\n2-element Array{NamedTuple{(:a, :b),Tuple{Int64,Float64}},1}:\n (a = 1, b = 1.0)\n (a = 2, b = 2.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.spread",
    "page": "Docstrings",
    "title": "LightQuery.spread",
    "category": "function",
    "text": "spread(it::NamedTuple, the_names...)\n\nUnnest nested it in name. Inverse of gather.\n\njulia> using LightQuery\n\njulia> @> (b = 1.0, d = (a = 1, c = 1//1)) |>\n        spread(_, :d)\n(b = 1.0, a = 1, c = 1//1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.transform",
    "page": "Docstrings",
    "title": "LightQuery.transform",
    "category": "function",
    "text": "transform(it; assignments...)\n\nMerge assignments into it. Inverse of remove.\n\njulia> using LightQuery\n\njulia> @> (a = 1,) |>\n        transform(_, b = 1.0)\n(a = 1, b = 1.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.unzip",
    "page": "Docstrings",
    "title": "LightQuery.unzip",
    "category": "function",
    "text": "unzip(it, n)\n\nUnzip an iterator it which returns tuples of length n. Use Val(n) to guarantee type stability.\n\njulia> using LightQuery\n\njulia> unzip([(1, 1.0), (2, 2.0)], 2)\n([1, 2], [1.0, 2.0])\n\njulia> unzip([(1, 1.0), (2, 2.0)], Val(2))\n([1, 2], [1.0, 2.0])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.value",
    "page": "Docstrings",
    "title": "LightQuery.value",
    "category": "function",
    "text": "value(it)\n\nThe value in a key => value pair.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.when",
    "page": "Docstrings",
    "title": "LightQuery.when",
    "category": "function",
    "text": "when(it, call)\n\nLazy filter with argument order reversed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LightQuery.@>LightQuery.@_LightQuery.ByLightQuery.CSVLightQuery.FileLightQuery.FilterLightQuery.GeneratorLightQuery.GroupLightQuery.HistoryLightQuery.IteratorLengthLightQuery.JoinLightQuery.LengthLightQuery.LightQueryLightQuery.NameLightQuery.NamesLightQuery.PeekLightQuery.ZippedArraysLightQuery.anonymousLightQuery.chainLightQuery.columnsLightQuery.combine_iterator_eltypeLightQuery.evalLightQuery.first_fallbackLightQuery.flattenLightQuery.full_dispatchLightQuery.gatherLightQuery.getproperty_defaultLightQuery.includeLightQuery.inner_nameLightQuery.item_namesLightQuery.item_names_dispatchLightQuery.keyLightQuery.make_columnsLightQuery.maybe_push_widenLightQuery.maybe_setindex_widen_up_toLightQuery.named_tupleLightQuery.next_historyLightQuery.orderLightQuery.overLightQuery.removeLightQuery.renameLightQuery.rowsLightQuery.spreadLightQuery.state_to_indexLightQuery.substitute_underscores!LightQuery.transformLightQuery.unzipLightQuery.valueLightQuery.when"
},

]}
