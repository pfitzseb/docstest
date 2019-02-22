var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FreqTables-1",
    "page": "Readme",
    "title": "FreqTables",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: FreqTables)This package allows computing one- or multi-way frequency tables (a.k.a. contingency or pivot tables) from any type of vector or array. It includes support for CategoricalArray and DataFrame, as well as for weighted counts.Tables are represented as NamedArray objects.julia> using FreqTables\n\njulia> x = repeat([\"a\", \"b\", \"c\", \"d\"], outer=[100]);\n\njulia> y = repeat([\"A\", \"B\", \"C\", \"D\"], inner=[10], outer=[10]);\n\njulia> tbl = freqtable(x)\n4-element Named Array{Int64,1}\nDim1  │\n──────┼────\na     │ 100\nb     │ 100\nc     │ 100\nd     │ 100\n\njulia> prop(tbl)\n4-element Named Array{Float64,1}\nDim1  │\n──────┼─────\na     │ 0.25\nb     │ 0.25\nc     │ 0.25\nd     │ 0.25\n\njulia> freqtable(x, y)\n4×4 Named Array{Int64,2}\nDim1 ╲ Dim2 │  A   B   C   D\n────────────┼───────────────\na           │ 30  20  30  20\nb           │ 30  20  30  20\nc           │ 20  30  20  30\nd           │ 20  30  20  30\n\njulia> tbl2 = freqtable(x, y, subset=1:20)\n4×2 Named Array{Int64,2}\nDim1 ╲ Dim2 │ A  B\n────────────┼─────\na           │ 3  2\nb           │ 3  2\nc           │ 2  3\nd           │ 2  3\n\njulia> prop(tbl2, 2)\n4×2 Named Array{Float64,2}\nDim1 ╲ Dim2 │   A    B\n────────────┼─────────\na           │ 0.3  0.2\nb           │ 0.3  0.2\nc           │ 0.2  0.3\nd           │ 0.2  0.3\n\njulia> freqtable(x, y, subset=1:20, weights=repeat([1, .5], outer=[10]))\n4×2 Named Array{Float64,2}\nDim1 ╲ Dim2 │   A    B\n────────────┼─────────\na           │ 3.0  2.0\nb           │ 1.5  1.0\nc           │ 2.0  3.0\nd           │ 1.0  1.5For convenience, when working with a data frame, one can also pass a DataFrame object and columns as symbols:julia> using DataFrames, CSV\n\njulia> iris = CSV.read(joinpath(Pkg.dir(\"DataFrames\"), \"test/data/iris.csv\"));\n\njulia> iris[:LongSepal] = iris[:SepalLength] .> 5.0;\n\njulia> freqtable(iris, :Species, :LongSepal)\n3×2 Named Array{Int64,2}\nSpecies ╲ LongSepal │ false   true\n────────────────────┼─────────────\nsetosa              │    28     22\nversicolor          │     3     47\nvirginica           │     1     49\n\njulia> freqtable(iris, :Species, :LongSepal, subset=iris[:PetalLength] .< 4.0)\n2×2 Named Array{Int64,2}\nSpecies ╲ LongSepal │ false   true\n────────────────────┼─────────────\nsetosa              │    28     22\nversicolor          │     3      8Note that when one of the input variables contains integers, Name(i) has to be used when indexing into the table to prevent i to be interpreted as a numeric index:julia> df = DataFrame(A = 101:103, B = [\"x\",\"y\",\"y\"]);\n\njulia> ft = freqtable(df, :A, :B)\n3×2 Named Array{Int64,2}\nDim1 ╲ Dim2 │ x  y\n────────────┼─────\n101         │ 1  0\n102         │ 0  1\n103         │ 0  1\n\njulia> ft[Name(101), \"x\"]\n1\n\njulia> ft[101,\"x\"]\nERROR: BoundsError: attempt to access 10×2 Array{Int64,2} at index [101, 1]"
},

{
    "location": "autodocs/#FreqTables.prop",
    "page": "Docstrings",
    "title": "FreqTables.prop",
    "category": "function",
    "text": "prop(tbl::AbstractArray{<:Number}, [margin::Integer...])\n\nCreate table of proportions from a table tbl with margins generated for dimensions specified by margin. If margin is omitted proportions over the whole tbl are computed.\n\nIn particular when margin is 1 row proportions, and when margin is 2 column proportions are calculated.\n\nprop does not check if tbl contains non-negative values. Calculating sum over the result of prop over dimensions that are complement of margin produces AbstractArray containing only 1.0, see last example below.\n\nExamples\n\njulia> prop([1 2; 3 4])\n2×2 Array{Float64,2}:\n 0.1  0.2\n 0.3  0.4\n\njulia> prop([1 2; 3 4], 1)\n2×2 Array{Float64,2}:\n 0.333333  0.666667\n 0.428571  0.571429\n\njulia> prop([1 2; 3 4], 2)\n2×2 Array{Float64,2}:\n 0.25  0.333333\n 0.75  0.666667\n\njulia> prop([1 2; 3 4], 1, 2)\n2×2 Array{Float64,2}:\n 1.0  1.0\n 1.0  1.0\n\njulia> pt = prop(reshape(1:12, (2, 2, 3)), 3)\n2×2×3 Array{Float64,3}:\n[:, :, 1] =\n 0.1  0.3\n 0.2  0.4\n\n[:, :, 2] =\n 0.192308  0.269231\n 0.230769  0.307692\n\n[:, :, 3] =\n 0.214286  0.261905\n 0.238095  0.285714\n\njulia> sum(pt, (1, 2))\n1×1×3 Array{Float64,3}:\n[:, :, 1] =\n 1.0\n\n[:, :, 2] =\n 1.0\n\n[:, :, 3] =\n 1.0\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FreqTables.FreqTablesFreqTables.UnitWeightsFreqTables._freqtableFreqTables.eltypesFreqTables.evalFreqTables.freqtableFreqTables.includeFreqTables.propFreqTables.vectypes"
},

]}
