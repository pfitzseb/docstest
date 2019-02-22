var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataFramesMeta.jl-1",
    "page": "Readme",
    "title": "DataFramesMeta.jl",
    "category": "section",
    "text": "(Image: DataFramesMeta) (Image: Coveralls) (Image: Travis) (Image: AppVeyor)Metaprogramming tools for DataFrames.jl and AbstractDict objects. These macros improve performance and provide more convenient syntax."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": ""
},

{
    "location": "#@with-1",
    "page": "Readme",
    "title": "@with",
    "category": "section",
    "text": "@with allows DataFrame columns to be referenced as symbols like :colX in expressions. If an expression is wrapped in ^(expr), expr gets passed through untouched. If an expression is wrapped in cols(expr), the column is referenced by the variable expr rather than a symbol. Here are some examples:using DataFrames\nusing DataFramesMeta\n\ndf = DataFrame(x = 1:3, y = [2, 1, 2])\nx = [2, 1, 0]\n\n@with(df, :y .+ 1)\n@with(df, :x + x)  # the two x\'s are different\n\nx = @with df begin\n    res = 0.0\n    for i in 1:length(:x)\n        res += :x[i] * :y[i]\n    end\n    res\nend\n\n@with(df, df[:x .> 1, ^(:y)]) # The ^ means leave the :y alone\n\ncolref = :x\n@with(df, :y + cols(colref)) # Equivalent to df[:y] + df[colref]This works for AbstractDict types, too:y = 3\nd = Dict(:s => 3, :y => 44, :d => 5)\n\n@with(d, :s + :y + y)@with is the fundamental macro used by the other metaprogramming utilities.@with creates a function, so scope within @with is a local scope. Variables in the parent can be read. Writing to variables in the parent scope differs depending on the type of scope of the parent. If the parent scope is a global scope, then a variable cannot be assigned without using the global keyword. If the parent scope is a local scope (inside a function or let block for example), the global keyword is not needed to assign to that parent scope."
},

{
    "location": "#@where-1",
    "page": "Readme",
    "title": "@where",
    "category": "section",
    "text": "Select row subsets.@where(df, :x .> 1)\n@where(df, :x .> x)\n@where(df, :x .> x, :y .== 3)  # the two expressions are \"and-ed\""
},

{
    "location": "#@select-1",
    "page": "Readme",
    "title": "@select",
    "category": "section",
    "text": "Column selections and transformations. Also works with AbstractDict types.@select(df, :x, :y, :z)\n@select(df, x2 = 2 * :x, :y, :z)"
},

{
    "location": "#@transform-1",
    "page": "Readme",
    "title": "@transform",
    "category": "section",
    "text": "Add additional columns based on keyword arguments.@transform(df, newCol = cos.(:x), anotherCol = :x.^2 + 3*:x .+ 4)@transform works for AbstractDict types, too."
},

{
    "location": "#@byrow!-1",
    "page": "Readme",
    "title": "@byrow!",
    "category": "section",
    "text": "Act on a DataFrame row-by-row. Includes support for control flow and begin end blocks. Since the \"environment\" induced by @byrow! df is implicitly a single row of df, one uses regular operators and comparisons instead of their elementwise counterparts as in @with.@byrow! df if :A > :B; :A = :B * :C endlet x = 0.0\n    @byrow! df begin\n        if :A < :B\n            x += :B * :C\n        end\n    end\n    x\nendNote that the let block is required here to create a scope to allow assignment of x within @byrow!.byrow! also supports special syntax for allocating new columns to make byrow! more useful for data transformations. The syntax @newcol x::Array{Int} allocates a new column :x with an Array container with eltype Int. Note that the returned AbstractDataFrame includes these new columns, but the original df is not affected. Here is an example where two new columns are added:df = DataFrame(A = 1:3, B = [2, 1, 2])\ndf2 = @byrow! df begin\n    @newcol colX::Array{Float64}\n    @newcol colY::Array{Union{Int,Missing}}\n    :colX = :B == 2 ? pi * :A : :B\n    if :A > 1\n        :colY = :A * :B\n    else\n        :colY = Missing\n    end\nend"
},

{
    "location": "#LINQ-Style-Queries-and-Transforms-1",
    "page": "Readme",
    "title": "LINQ-Style Queries and Transforms",
    "category": "section",
    "text": "A number of functions for operations on DataFrames have been defined. Here is a table of equivalents for Hadley\'s dplyr and common LINQ functions.Julia             dplyr            LINQ\n---------------------------------------------\n@where            filter           Where\n@transform        mutate           Select (?)\n@by                                GroupBy\ngroupby           group_by\n@based_on         summarise/do\n@orderby          arrange          OrderBy\n@select           select           Select"
},

{
    "location": "#LINQ-macro-1",
    "page": "Readme",
    "title": "LINQ macro",
    "category": "section",
    "text": "There is also a @linq macro that supports chaining and all of the functionality defined in other macros. Here is an example of @linq:x_thread = @linq df |>\n    transform(y = 10 * :x) |>\n    where(:a .> 2) |>\n    by(:b, meanX = mean(:x), meanY = mean(:y)) |>\n    orderby(:meanX) |>\n    select(:meanX, :meanY, var = :b)Relative to the use of individual macros, chaining looks cleaner and more obvious with less noise from @ symbols. This approach also avoids filling up the limited macro name space. The main downside is that more magic happens under the hood.This method is extensible. Here is a comparison of the macro and @linq versions of with.macro with(d, body)\n    esc(with_helper(d, body))\nend\n\nfunction linq(::SymbolParameter{:with}, d, body)\n    with_helper(d, body)\nendThe linq method above registers the expression-replacement method defined for all with() calls. It should return an expression like a macro.Again, this is experimental. Based on feedback, we may decide to only use @linq or only support the set of linq-like macros."
},

{
    "location": "#Operations-on-GroupedDataFrames-1",
    "page": "Readme",
    "title": "Operations on GroupedDataFrames",
    "category": "section",
    "text": "The following operations are now included:where(g, d -> mean(d[:a]) > 0) and @where(g, mean(:a) > 0) – Filter groups based on the given criteria. Returns a GroupedDataFrame.\norderby(g, d -> mean(d[:a])) and @orderby(g, mean(:a)) – Sort groups based on the given criteria. Returns a GroupedDataFrame.\nDataFrame(g) – Convert groups back to a DataFrame with the same group orderings.\n@based_on(g, z = mean(:a)) – Summarize results within groups. Returns a DataFrame.\ntransform(g, d -> y = d[:a] - mean(d[:a])) and @transform(g, y = :a - mean(:a)) – Transform a DataFrame based on operations within a group. Returns a DataFrame.You can also index on GroupedDataFrames. g[1] is the first group, returned as a SubDataFrame. g[[1,4,5]] or g[[true, false, true, false, false]] return subsets of groups as a GroupedDataFrame. You can also iterate over GroupedDataFrames.The most general split-apply-combine approach is based on map. map(fun, g) returns a GroupApplied object with keys and vals. This can be used with combine."
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "@with works by parsing the expression body for all columns indicated by symbols (e.g. :colA). Then, a function is created that wraps the body and passes the columns as function arguments. This function is then called. Operations are efficient because:A pseudo-anonymous function is defined, so types are stable.\nColumns are passed as references, eliminating DataFrame indexing.All of the other macros are based on @with."
},

{
    "location": "#Package-Maintenance-1",
    "page": "Readme",
    "title": "Package Maintenance",
    "category": "section",
    "text": "Any of the JuliaStats collaborators have write access and can accept pull requests.Pull requests are welcome. Pull requests should include updated tests. If functionality is changed, docstrings should be added or updated. Generally, follow the guidelines in DataFrames."
},

{
    "location": "autodocs/#DataFramesMeta.@based_on",
    "page": "Docstrings",
    "title": "DataFramesMeta.@based_on",
    "category": "macro",
    "text": "@based_on(g, i...)\n\nSummarize a grouping operation\n\nArguments\n\ng : a GroupedDataFrame\ni... : keyword arguments defining new columns\n\nExamples\n\njulia> using DataFramesMeta, DataFrames\n\njulia> d = DataFrame(\n            n = 1:20,\n            x = [3, 3, 3, 3, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 3, 1, 1, 2]);\n\njulia> g = groupby(d, :x);\n\njulia> @based_on(g, nsum = sum(:n))\n3×2 DataFrames.DataFrame\n│ Row │ x │ nsum │\n├─────┼───┼──────┤\n│ 1   │ 1 │ 99   │\n│ 2   │ 2 │ 84   │\n│ 3   │ 3 │ 27   │\n\njulia> @based_on(g, x2 = 2 * :x, nsum = sum(:n))\n20×3 DataFrames.DataFrame\n│ Row │ x │ x2 │ nsum │\n├─────┼───┼────┼──────┤\n│ 1   │ 1 │ 2  │ 99   │\n│ 2   │ 1 │ 2  │ 99   │\n│ 3   │ 1 │ 2  │ 99   │\n│ 4   │ 1 │ 2  │ 99   │\n│ 5   │ 1 │ 2  │ 99   │\n│ 6   │ 1 │ 2  │ 99   │\n│ 7   │ 1 │ 2  │ 99   │\n│ 8   │ 1 │ 2  │ 99   │\n⋮\n│ 12  │ 2 │ 4  │ 84   │\n│ 13  │ 2 │ 4  │ 84   │\n│ 14  │ 2 │ 4  │ 84   │\n│ 15  │ 2 │ 4  │ 84   │\n│ 16  │ 3 │ 6  │ 27   │\n│ 17  │ 3 │ 6  │ 27   │\n│ 18  │ 3 │ 6  │ 27   │\n│ 19  │ 3 │ 6  │ 27   │\n│ 20  │ 3 │ 6  │ 27   │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFramesMeta.@by",
    "page": "Docstrings",
    "title": "DataFramesMeta.@by",
    "category": "macro",
    "text": "@by(d::AbstractDataFrame, cols, e...)\n\nSplit-apply-combine in one step.\n\nArguments\n\nd : an AbstractDataFrame\ncols : a column indicator (Symbol, Int, Vector{Symbol}, etc.)\ne :  keyword arguments specifying new columns in terms of column groupings\n\nReturns\n\n::DataFrame\n\nExamples\n\njulia> using DataFrames, DataFramesMeta, Statistics\n\njulia> df = DataFrame(\n            a = repeat(1:4, outer = 2),\n            b = repeat(2:-1:1, outer = 4),\n            c = randn(8));\n\njulia> @by(df, :a, d = sum(:c))\n4×2 DataFrames.DataFrame\n│ Row │ a │ d        │\n├─────┼───┼──────────┤\n│ 1   │ 1 │ 1.27638  │\n│ 2   │ 2 │ 1.00951  │\n│ 3   │ 3 │ 1.48328  │\n│ 4   │ 4 │ -2.42621 │\n\njulia> @by(df, :a, d = 2 * :c)\n8×2 DataFrames.DataFrame\n│ Row │ a │ d         │\n├─────┼───┼───────────┤\n│ 1   │ 1 │ 1.22982   │\n│ 2   │ 1 │ 1.32294   │\n│ 3   │ 2 │ 1.93664   │\n│ 4   │ 2 │ 0.0823819 │\n│ 5   │ 3 │ -0.670512 │\n│ 6   │ 3 │ 3.63708   │\n│ 7   │ 4 │ -3.06436  │\n│ 8   │ 4 │ -1.78806  │\n\njulia> @by(df, :a, c_sum = sum(:c), c_mean = mean(:c))\n4×3 DataFrames.DataFrame\n│ Row │ a │ c_sum    │ c_mean   │\n├─────┼───┼──────────┼──────────┤\n│ 1   │ 1 │ 1.27638  │ 0.63819  │\n│ 2   │ 2 │ 1.00951  │ 0.504755 │\n│ 3   │ 3 │ 1.48328  │ 0.741642 │\n│ 4   │ 4 │ -2.42621 │ -1.2131  │\n\njulia> @by(df, :a, c = :c, c_mean = mean(:c))\n8×3 DataFrames.DataFrame\n│ Row │ a │ c         │ c_mean   │\n├─────┼───┼───────────┼──────────┤\n│ 1   │ 1 │ 0.61491   │ 0.63819  │\n│ 2   │ 1 │ 0.66147   │ 0.63819  │\n│ 3   │ 2 │ 0.968319  │ 0.504755 │\n│ 4   │ 2 │ 0.041191  │ 0.504755 │\n│ 5   │ 3 │ -0.335256 │ 0.741642 │\n│ 6   │ 3 │ 1.81854   │ 0.741642 │\n│ 7   │ 4 │ -1.53218  │ -1.2131  │\n│ 8   │ 4 │ -0.894029 │ -1.2131  │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFramesMeta.@byrow!",
    "page": "Docstrings",
    "title": "DataFramesMeta.@byrow!",
    "category": "macro",
    "text": "@byrow!(d, expr)\n\nAct on a DataFrame row-by-row.\n\nIncludes support for control flow and begin end blocks. Since the \"environment\" induced by @byrow! df is implicitly a single row of df, use regular operators and comparisons instead of their elementwise counterparts as in @with. Note that the scope within @byrow! is a hard scope.\n\nbyrow! also supports special syntax for allocating new columns. The syntax @newcol x::Array{Int} allocates a new column :x with an Array container with eltype Int. Note that the returned AbstractDataFrame includes these new columns, but the original d is not affected. This feature makes it easier to use byrow! for data transformations. _N is introduced to represent the length of the dataframe, _D represents the dataframe including added columns, and row represents the index of the current row.\n\nArguments\n\nd : an AbstractDataFrame\nexpr : expression operated on row by row\n\nReturns\n\nThe modified AbstractDataFrame.\n\nExamples\n\njulia> using DataFrames, DataFramesMeta\n\njulia> df = DataFrame(A = 1:3, B = [2, 1, 2]);\n\njulia> let x = 0\n            @byrow! df begin\n                if :A + :B == 3\n                    x += 1\n                end\n            end  #  This doesn\'t work without the let\n            x\n        end\n2\n\njulia> @byrow! df begin\n            if :A > :B\n                :A = 0\n            end\n        end\n3×2 DataFrames.DataFrame\n│ Row │ A │ B │\n├─────┼───┼───┤\n│ 1   │ 1 │ 2 │\n│ 2   │ 0 │ 1 │\n│ 3   │ 0 │ 2 │\n\njulia> df2 = @byrow! df begin\n           @newcol colX::Array{Float64}\n           :colX = :B == 2 ? pi * :A : :B\n       end\n3×3 DataFrames.DataFrame\n│ Row │ A │ B │ colX    │\n├─────┼───┼───┼─────────┤\n│ 1   │ 1 │ 2 │ 3.14159 │\n│ 2   │ 0 │ 1 │ 1.0     │\n│ 3   │ 0 │ 2 │ 0.0     │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFramesMeta.@linq",
    "page": "Docstrings",
    "title": "DataFramesMeta.@linq",
    "category": "macro",
    "text": "@linq df ...\n\nGeneral macro that creates a mini DSL for chaining and macro calls.\n\nDetails\n\nThe following embedded function calls are equivalent to their macro version:\n\nwith\nwhere\nselect\ntransform\nby\ngroupby\norderby\nbased_on\n\nExamples\n\njulia> using DataFrames, DataFramesMeta, Statistics\n\njulia> n = 100;\n\njulia> df = DataFrame(a = rand(1:3, n),\n                      b = [\"a\",\"b\",\"c\",\"d\"][rand(1:4, n)],\n                      x = rand(n));\n\njulia> x1 = @linq transform(where(df, :a .> 2, :b .!= \"c\"), y = 10 * :x);\n\njulia> x1 = @linq by(x1, :b, meanX = mean(:x), meanY = mean(:y));\n\njulia> @linq select(orderby(x1, :b, -:meanX), var = :b, :meanX, :meanY)\n3×3 DataFrames.DataFrame\n│ Row │ var │ meanX    │ meanY   │\n├─────┼─────┼──────────┼─────────┤\n│ 1   │ \"a\" │ 0.665682 │ 6.65682 │\n│ 2   │ \"b\" │ 0.617848 │ 6.17848 │\n│ 3   │ \"d\" │ 0.568289 │ 5.68289 │\n\njulia> @linq df |>\n           transform(y = 10 * :x) |>\n           where(:a .> 2) |>\n           by(:b, meanX = mean(:x), meanY = mean(:y)) |>\n           orderby(:meanX) |>\n           select(:meanX, :meanY, var = :b)\n4×3 DataFrames.DataFrame\n│ Row │ meanX    │ meanY   │ var │\n├─────┼──────────┼─────────┼─────┤\n│ 1   │ 0.353205 │ 3.53205 │ \"a\" │\n│ 2   │ 0.419833 │ 4.19833 │ \"d\" │\n│ 3   │ 0.452061 │ 4.52061 │ \"c\" │\n│ 4   │ 0.519316 │ 5.19316 │ \"b\" │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFramesMeta.@orderby",
    "page": "Docstrings",
    "title": "DataFramesMeta.@orderby",
    "category": "macro",
    "text": "@orderby(d, i...)\n\nSort by criteria. Normally used to sort groups in GroupedDataFrames.\n\nArguments\n\nd : an AbstractDataFrame or GroupedDataFrame\ni... : expression for sorting\n\nExamples\n\njulia> using DataFrames, DataFramesMeta, Statistics\n\njulia> d = DataFrame(n = 1:20, x = [3, 3, 3, 3, 1, 1, 1, 2, 1, 1,\n                                    2, 1, 1, 2, 2, 2, 3, 1, 1, 2]);\n\njulia> g = groupby(d, :x);\n\njulia> @orderby(g, mean(:n))\nDataFrames.GroupedDataFrame  3 groups with keys: Symbol[:x]\nFirst Group:\n5×2 DataFrames.SubDataFrame{Array{Int64,1}}\n│ Row │ n  │ x │\n├─────┼────┼───┤\n│ 1   │ 1  │ 3 │\n│ 2   │ 2  │ 3 │\n│ 3   │ 3  │ 3 │\n│ 4   │ 4  │ 3 │\n│ 5   │ 17 │ 3 │\n⋮\nLast Group:\n6×2 DataFrames.SubDataFrame{Array{Int64,1}}\n│ Row │ n  │ x │\n├─────┼────┼───┤\n│ 1   │ 8  │ 2 │\n│ 2   │ 11 │ 2 │\n│ 3   │ 14 │ 2 │\n│ 4   │ 15 │ 2 │\n│ 5   │ 16 │ 2 │\n│ 6   │ 20 │ 2 │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFramesMeta.@select",
    "page": "Docstrings",
    "title": "DataFramesMeta.@select",
    "category": "macro",
    "text": "@select(d, e...)\n\nSelect and transform columns.\n\nArguments\n\nd : an AbstractDataFrame or AbstractDict\ne :  keyword arguments specifying new columns in terms of existing columns or symbols to specify existing columns\n\nReturns\n\n::AbstractDataFrame or ::AbstractDict\n\nExamples\n\njulia> using DataFrames, DataFramesMeta\n\njulia> d = Dict(:s => 3, :y => 44, :d => 5);\n\njulia> @select(d, x = :y + :d, :s)\nDict{Symbol,Int64} with 2 entries:\n  :s => 3\n  :x => 49\n\njulia> df = DataFrame(a = repeat(1:4, outer = 2), b = repeat(2:-1:1, outer = 4), c = randn(8))\n8×3 DataFrames.DataFrame\n│ Row │ a │ b │ c         │\n├─────┼───┼───┼───────────┤\n│ 1   │ 1 │ 2 │ -0.354685 │\n│ 2   │ 2 │ 1 │ 0.287631  │\n│ 3   │ 3 │ 2 │ -0.918007 │\n│ 4   │ 4 │ 1 │ -0.352519 │\n│ 5   │ 1 │ 2 │ 0.743501  │\n│ 6   │ 2 │ 1 │ -1.27415  │\n│ 7   │ 3 │ 2 │ 0.258456  │\n│ 8   │ 4 │ 1 │ -0.460486 │\n\njulia> @select(df, :c, :a)\n8×2 DataFrames.DataFrame\n│ Row │ c         │ a │\n├─────┼───────────┼───┤\n│ 1   │ -0.354685 │ 1 │\n│ 2   │ 0.287631  │ 2 │\n│ 3   │ -0.918007 │ 3 │\n│ 4   │ -0.352519 │ 4 │\n│ 5   │ 0.743501  │ 1 │\n│ 6   │ -1.27415  │ 2 │\n│ 7   │ 0.258456  │ 3 │\n│ 8   │ -0.460486 │ 4 │\n\njulia> @select(df, :c, x = :b + :c)\n8×2 DataFrames.DataFrame\n│ Row │ c         │ x         │\n├─────┼───────────┼───────────┤\n│ 1   │ -0.354685 │ 1.64531   │\n│ 2   │ 0.287631  │ 1.28763   │\n│ 3   │ -0.918007 │ 1.08199   │\n│ 4   │ -0.352519 │ 0.647481  │\n│ 5   │ 0.743501  │ 2.7435    │\n│ 6   │ -1.27415  │ -0.274145 │\n│ 7   │ 0.258456  │ 2.25846   │\n│ 8   │ -0.460486 │ 0.539514  │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFramesMeta.@transform",
    "page": "Docstrings",
    "title": "DataFramesMeta.@transform",
    "category": "macro",
    "text": "@transform(d, i...)\n\nAdd additional columns or keys based on keyword arguments.\n\nArguments\n\nd : an AbstractDict type, AbstractDataFrame, or GroupedDataFrame\ni... : keyword arguments defining new columns or keys\n\nFor AbstractDict types, @transform only works with keys that are symbols.\n\nReturns\n\n::AbstractDataFrame, ::AbstractDict, or ::GroupedDataFrame\n\nExamples\n\njulia> using DataFramesMeta, DataFrames\n\njulia> d = Dict(:s => 3, :y => 44, :d => 5);\n\njulia> @transform(d, x = :y + :d)\nDict{Symbol,Int64} with 4 entries:\n  :d => 5\n  :s => 3\n  :y => 44\n  :x => 49\n\njulia> df = DataFrame(A = 1:3, B = [2, 1, 2]);\n\njulia> @transform(df, a = 2 * :A, x = :A .+ :B)\n3×4 DataFrames.DataFrame\n│ Row │ A │ B │ a │ x │\n├─────┼───┼───┼───┼───┤\n│ 1   │ 1 │ 2 │ 2 │ 3 │\n│ 2   │ 2 │ 1 │ 4 │ 3 │\n│ 3   │ 3 │ 2 │ 6 │ 5 │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFramesMeta.@where",
    "page": "Docstrings",
    "title": "DataFramesMeta.@where",
    "category": "macro",
    "text": "@where(d, i...)\n\nSelect row subsets in AbstractDataFrames or groups in GroupedDataFrames.\n\nArguments\n\nd : an AbstractDataFrame or GroupedDataFrame\ni... : expression for selecting rows\n\nMultiple i expressions are \"and-ed\" together.\n\nExamples\n\njulia> using DataFramesMeta, DataFrames\n\njulia> df = DataFrame(x = 1:3, y = [2, 1, 2]);\n\njulia> x = [2, 1, 0];\n\njulia> @where(df, :x .> 1)\n2×2 DataFrames.DataFrame\n│ Row │ x │ y │\n├─────┼───┼───┤\n│ 1   │ 2 │ 1 │\n│ 2   │ 3 │ 2 │\n\njulia> @where(df, :x .> x)\n2×2 DataFrames.DataFrame\n│ Row │ x │ y │\n├─────┼───┼───┤\n│ 1   │ 2 │ 1 │\n│ 2   │ 3 │ 2 │\n\njulia> @where(df, :x .> x, :y .== 3)\n0×2 DataFrames.DataFrame\n\njulia> d = DataFrame(n = 1:20, x = [3, 3, 3, 3, 1, 1, 1, 2, 1, 1,\n                                    2, 1, 1, 2, 2, 2, 3, 1, 1, 2]);\n\njulia> g = groupby(d, :x);\n\njulia> @where(d, :x .== 3)\n5×2 DataFrames.DataFrame\n│ Row │ n  │ x │\n├─────┼────┼───┤\n│ 1   │ 1  │ 3 │\n│ 2   │ 2  │ 3 │\n│ 3   │ 3  │ 3 │\n│ 4   │ 4  │ 3 │\n│ 5   │ 17 │ 3 │\n\njulia> @where(g, length(:x) > 5)   # pick out some groups\nDataFrames.GroupedDataFrame  2 groups with keys: Symbol[:x]\nFirst Group:\n9×2 DataFrames.SubDataFrame{Array{Int64,1}}\n│ Row │ n  │ x │\n├─────┼────┼───┤\n│ 1   │ 5  │ 1 │\n│ 2   │ 6  │ 1 │\n│ 3   │ 7  │ 1 │\n│ 4   │ 9  │ 1 │\n│ 5   │ 10 │ 1 │\n│ 6   │ 12 │ 1 │\n│ 7   │ 13 │ 1 │\n│ 8   │ 18 │ 1 │\n│ 9   │ 19 │ 1 │\n⋮\nLast Group:\n6×2 DataFrames.SubDataFrame{Array{Int64,1}}\n│ Row │ n  │ x │\n├─────┼────┼───┤\n│ 1   │ 8  │ 2 │\n│ 2   │ 11 │ 2 │\n│ 3   │ 14 │ 2 │\n│ 4   │ 15 │ 2 │\n│ 5   │ 16 │ 2 │\n│ 6   │ 20 │ 2 │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFramesMeta.@with",
    "page": "Docstrings",
    "title": "DataFramesMeta.@with",
    "category": "macro",
    "text": "@with(d, expr)\n\n@with allows DataFrame columns or AbstractDict keys to be referenced as symbols.\n\nArguments\n\nd : an AbstractDataFrame or AbstractDict type\nexpr : the expression to evaluate in d\n\nDetails\n\n@with works by parsing the expression body for all columns indicated by symbols (e.g. :colA). Then, a function is created that wraps the body and passes the columns as function arguments. This function is then called. Operations are efficient because:\n\nA pseudo-anonymous function is defined, so types are stable.\nColumns are passed as references, eliminating DataFrame indexing.\n\nThe following\n\n@with(d, :a .+ :b .+ 1)\n\nbecomes\n\ntempfun(a, b) = a .+ b .+ 1\ntempfun(d[:a], d[:b])\n\nAll of the other DataFramesMeta macros are based on @with.\n\nIf an expression is wrapped in ^(expr), expr gets passed through untouched. If an expression is wrapped in  cols(expr), the column is referenced by the variable expr rather than a symbol.\n\nExamples\n\njulia> using DataFramesMeta\n\njulia> y = 3;\n\njulia> d = Dict(:s => 3, :y => 44, :d => 5);\n\njulia> @with(d, :s + :y + y)\n50\n\njulia> df = DataFrame(x = 1:3, y = [2, 1, 2]);\n\njulia> x = [2, 1, 0];\n\njulia> @with(df, :y .+ 1)\n3-element Array{Int64,1}:\n 3\n 2\n 3\n\njulia> @with(df, :x + x)\n3-element Array{Int64,1}:\n 3\n 3\n 3\n\njulia> @with df begin\n            res = 0.0\n            for i in 1:length(:x)\n                res += :x[i] * :y[i]\n            end\n            res\n        end\n10.0\n\njulia> @with(df, df[:x .> 1, ^(:y)]) # The ^ means leave the :y alone\n2-element Array{Int64,1}:\n 1\n 2\n\njulia> colref = :x;\n\njulia> @with(df, :y + cols(colref)) # Equivalent to df[:y] + df[colref]\n 3\n 3\n 5\n\n@with creates a function, so scope within @with is a local scope. Variables in the parent can be read. Writing to variables in the parent scope differs depending on the type of scope of the parent. If the parent scope is a global scope, then a variable cannot be assigned without using the global keyword. If the parent scope is a local scope (inside a function or let block for example), the global keyword is not needed to assign to that parent scope.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DataFramesMeta.@based_onDataFramesMeta.@byDataFramesMeta.@byrow!DataFramesMeta.@linqDataFramesMeta.@orderbyDataFramesMeta.@selectDataFramesMeta.@transformDataFramesMeta.@whereDataFramesMeta.@withDataFramesMeta.DataFramesMetaDataFramesMeta.SymbolParameterDataFramesMeta._transform!DataFramesMeta.addkey!DataFramesMeta.andDataFramesMeta.based_on_helperDataFramesMeta.by_helperDataFramesMeta.byrow_find_newcolsDataFramesMeta.byrow_helperDataFramesMeta.byrow_replaceDataFramesMeta.evalDataFramesMeta.expandargsDataFramesMeta.includeDataFramesMeta.linqDataFramesMeta.mapexprDataFramesMeta.oneargDataFramesMeta.orderbyDataFramesMeta.orderby_helperDataFramesMeta.orderbyconstructorDataFramesMeta.protect_replace_syms!DataFramesMeta.replace_dotted!DataFramesMeta.replace_equals_with_kwDataFramesMeta.replace_syms!DataFramesMeta.replacechainsDataFramesMeta.replacefunsDataFramesMeta.selectDataFramesMeta.select_helperDataFramesMeta.transformDataFramesMeta.transform_helperDataFramesMeta.whereDataFramesMeta.where_helperDataFramesMeta.with_anonymousDataFramesMeta.with_helper"
},

]}
