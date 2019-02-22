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
    "text": "macro >(body)\n\nIf body is in the form body_ |> tail_, call @_ on tail, and recur on body.\n\njulia> using LightQuery\n\njulia> @> 0 |> _ + 1 |> _ - 1\n0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.@_",
    "page": "Docstrings",
    "title": "LightQuery.@_",
    "category": "macro",
    "text": "macro _(body::Expr)\n\nCreate an Nameless object. The arguments are inside the body; the first arguments is _, the second argument is __, etc. Also stores a quoted version of the function.\n\njulia> using LightQuery\n\njulia> 1 |> @_(_ + 1)\n2\n\njulia> map(@_(__ - _), (1, 2), (2, 1))\n(1, -1)\n\njulia> @_(_ + 1).expression\n:(_ + 1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.By",
    "page": "Docstrings",
    "title": "LightQuery.By",
    "category": "type",
    "text": "By(it, f)\n\nMarks that it has been pre-sorted by the key f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.LeftJoin",
    "page": "Docstrings",
    "title": "LightQuery.LeftJoin",
    "category": "type",
    "text": "LeftJoin(left::By, right::By)\n\nFor each value in left, look for a value with the same key in right.\n\njulia> using LightQuery\n\njulia> LeftJoin(\n            By([1, 2, 5, 6], identity),\n            By([1, 3, 4, 6], identity)\n       ) |> collect\n4-element Array{Pair{Int64,Union{Missing, Int64}},1}:\n 1 => 1\n 2 => missing\n 5 => missing\n 6 => 6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Name",
    "page": "Docstrings",
    "title": "LightQuery.Name",
    "category": "type",
    "text": "Name(name)\n\njulia> using LightQuery\n\njulia> Name(:a)((a = 1, b = 2.0,))\n1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Nameless",
    "page": "Docstrings",
    "title": "LightQuery.Nameless",
    "category": "type",
    "text": "A container for a function and the expression that generated it\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.Names",
    "page": "Docstrings",
    "title": "LightQuery.Names",
    "category": "type",
    "text": "struct Names{T} end\n\njulia> using LightQuery\n\njulia> Names(:a, :b)((a = 1, b = 2.0, c = 3//1))\n(a = 1, b = 2.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.based_on",
    "page": "Docstrings",
    "title": "LightQuery.based_on",
    "category": "function",
    "text": "based_on(data; assignments...)\n\nApply the functions in assignments to data, and assign to the corresponding keys.\n\njulia> using LightQuery\n\njulia> based_on((a = 1, b = 2.0), c = @_ _.a + _.b)\n(c = 3.0,)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.column",
    "page": "Docstrings",
    "title": "LightQuery.column",
    "category": "function",
    "text": "column(it, names::Names)\n\nLazy find name for each item in it.\n\njulia> using LightQuery\n\njulia> it = [(a = 1, b = 1.0), (a = 2, b = 2.0)];\n\njulia> collect(column(it, :a))\n2-element Array{Int64,1}:\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.gather",
    "page": "Docstrings",
    "title": "LightQuery.gather",
    "category": "function",
    "text": "gather(data, new_column, columns...)\n\nGather all the data in columns into a single new_column.\n\njulia> using LightQuery\n\njulia> gather((a = 1, b = 2.0, c = \"c\"), :d, :a, :c)\n(b = 2.0, d = (a = 1, c = \"c\"))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.group",
    "page": "Docstrings",
    "title": "LightQuery.group",
    "category": "function",
    "text": "group(b::By)\n\nGroup consecutive keys in b.\n\njulia> using LightQuery\n\njulia> group(By([1, 3, 2, 4], iseven)) |> collect\n2-element Array{Pair{Bool,SubArray{Int64,1,Array{Int64,1},Tuple{UnitRange{Int64}},true}},1}:\n false => [1, 3]\n  true => [2, 4]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.in_common",
    "page": "Docstrings",
    "title": "LightQuery.in_common",
    "category": "function",
    "text": "in_common(data1, data2)\n\nFind Names in common.\n\njulia> using LightQuery\n\njulia> in_common((a = 1, b = 2.0), (a = 1, c = \"3\"))\nNames{(:a,)}()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.key",
    "page": "Docstrings",
    "title": "LightQuery.key",
    "category": "function",
    "text": "key(pair)\n\nThe first item\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.name",
    "page": "Docstrings",
    "title": "LightQuery.name",
    "category": "function",
    "text": "name(data, names...)\n\nRename data\n\njulia> using LightQuery\n\njulia> name((a = 1, b = 2.0), :c, :d)\n(c = 1, d = 2.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.named",
    "page": "Docstrings",
    "title": "LightQuery.named",
    "category": "function",
    "text": "named(data)\n\nConvert to a named tuple\n\njulia> using LightQuery\n\njulia> named((a = 1, b = 2.0))\n(a = 1, b = 2.0)\n\njulia> struct Triple{T1, T2, T3}\n            first::T1\n            second::T2\n            third::T3\n        end;\n\njulia> Base.propertynames(t::Triple) = (:first, :second, :third);\n\njulia> named(Triple(1, 1.0, \"a\"))\n(first = 1, second = 1.0, third = \"a\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.remove",
    "page": "Docstrings",
    "title": "LightQuery.remove",
    "category": "function",
    "text": "remove(data, columns...)\n\nRemove columns.\n\njulia> using LightQuery\n\njulia> remove((a = 1, b = 2.0), :b)\n(a = 1,)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.rename",
    "page": "Docstrings",
    "title": "LightQuery.rename",
    "category": "function",
    "text": "rename(data; renames...)\n\nFor type stability, use Name.\n\njulia> using LightQuery\n\njulia> rename((a = 1, b = 2.0), c = Name(:a))\n(b = 2.0, c = 1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.rows",
    "page": "Docstrings",
    "title": "LightQuery.rows",
    "category": "function",
    "text": "rows(n::NamedTuple)\n\nIterator over rows of a NamedTuple of columns.\n\njulia> using LightQuery\n\njulia> rows((a = [1, 2], b = [2, 1])) |> first\n(a = 1, b = 2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.select",
    "page": "Docstrings",
    "title": "LightQuery.select",
    "category": "function",
    "text": "select(data, columns...)\n\nSelect columns\n\njulia> using LightQuery\n\njulia> select((a = 1, b = 2.0), :a)\n(a = 1,)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.separate",
    "page": "Docstrings",
    "title": "LightQuery.separate",
    "category": "function",
    "text": "separate(it, into_names...)\n\nColumn-wise storage.\n\njulia> using LightQuery\n\njulia> it = [(a = 1, b = 1.0), (a = 2, b = 2.0)];\n\njulia> result = separate(it, :a, :b);\n\njulia> first(result)\n(a = 1, b = 1.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.spread",
    "page": "Docstrings",
    "title": "LightQuery.spread",
    "category": "function",
    "text": "spread(data, column::Name)\n\nUnnest nested data in column\n\njulia> using LightQuery\n\njulia> spread((b = 2.0, d = (a = 1, c = \"c\")), :d)\n(b = 2.0, a = 1, c = \"c\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.transform",
    "page": "Docstrings",
    "title": "LightQuery.transform",
    "category": "function",
    "text": "transform(data; assignments...)\n\nSame as based_on, but merge back in the original.\n\njulia> using LightQuery\n\njulia> transform((a = 1, b = 2.0), c = @_ _.a + _.b)\n(a = 1, b = 2.0, c = 3.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.unname",
    "page": "Docstrings",
    "title": "LightQuery.unname",
    "category": "function",
    "text": "unname\n\nRemove names. Explicitly define public propertynames for arbitrary structs.\n\njulia> using LightQuery\n\njulia> unname((a = 1, b = 2.0))\n(1, 2.0)\n\njulia> unname((1, 2.0))\n(1, 2.0)\n\njulia> struct Triple{T1, T2, T3}\n            first::T1\n            second::T2\n            third::T3\n        end;\n\njulia> Base.propertynames(t::Triple) = (:first, :second, :third);\n\njulia> unname(Triple(1, 1.0, \"a\"))\n(1, 1.0, \"a\")\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.unzip",
    "page": "Docstrings",
    "title": "LightQuery.unzip",
    "category": "function",
    "text": "unzip(it, n)\n\nUnzip an iterator it which returns tuples of length n.\n\njulia> using LightQuery\n\njulia> f(x) = (x, x + 1.0);\n\njulia> unzip(over([1], f), 2)\n([1], [2.0])\n\njulia> unzip(over([1, missing], f), 2);\n\njulia> unzip(zip([1], [1.0]), 2)\n([1], [1.0])\n\njulia> unzip([(1, 1.0)], 2)\n([1], [1.0])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightQuery.value",
    "page": "Docstrings",
    "title": "LightQuery.value",
    "category": "function",
    "text": "value(pair)\n\nThe second item\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LightQuery.@>LightQuery.@_LightQuery.ByLightQuery.CapLightQuery.CouplesLightQuery.EnumerateLightQuery.HistoryLightQuery.LeftJoinLightQuery.LightQueryLightQuery.ModelArrayLightQuery.NameLightQuery.NamelessLightQuery.NamesLightQuery.SkipRepeatsLightQuery.arraysLightQuery.based_onLightQuery.chainLightQuery.columnLightQuery.combine_iterator_eltypeLightQuery.downsizeLightQuery.evalLightQuery.gatherLightQuery.groupLightQuery.group_innerLightQuery.in_commonLightQuery.includeLightQuery.innerLightQuery.keyLightQuery.maybe_setindex_widen_up_toLightQuery.nameLightQuery.namedLightQuery.overLightQuery.previous_indexLightQuery.removeLightQuery.renameLightQuery.rowsLightQuery.seek_right_matchLightQuery.selectLightQuery.separateLightQuery.spreadLightQuery.string_lengthLightQuery.substitute_capLightQuery.substitute_underscores!LightQuery.transformLightQuery.unnameLightQuery.unname_simpleLightQuery.unzipLightQuery.valueLightQuery.value_field_typesLightQuery.when"
},

]}
