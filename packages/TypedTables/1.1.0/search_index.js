var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TypedTables.jl-1",
    "page": "Readme",
    "title": "TypedTables.jl",
    "category": "section",
    "text": "Simple, fast, column-based storage for data analysis in Julia(Image: Documentation) (Image: Documentation) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)TypedTables.jl provides two column-based storage containers: Table and FlexTable, both of which represent an array of NamedTuples. This package is designed to be lightweight, easy-to-use and fast, and presents a very minimal new interface to learn.Data manipulation is possible throught the tools built into Julia (such as map, filter, and reduce) and those provide by SplitApplyCombine.jl (like group and innerjoin). You can speed up data analysis tasks with acceleration indices, by using the AcceleratedArrays.jl package. This package is integrated the Tables.jl interface, and therefore the rest of the data ecosystem such as Query.jl."
},

{
    "location": "#Quick-Start-1",
    "page": "Readme",
    "title": "Quick Start",
    "category": "section",
    "text": "It\'s simple to get started and create a table!julia> using TypedTables\n\njulia> t = Table(a = [1, 2, 3], b = [2.0, 4.0, 6.0])\nTable with 2 columns and 3 rows:\n     a  b\n   ┌───────\n 1 │ 1  2.0\n 2 │ 2  4.0\n 3 │ 3  6.0\n\njulia> t[1]  # Get first row\n(a = 1, b = 2.0)\n\njulia> t.a  # Get column `a`\n3-element Array{Int64,1}:\n 1\n 2\n 3The Table type is a simple AbstractArray where each element (\"row\") is a NamedTuple. Upon construction, it retains references to it\'s columns rather than creating copies. Strong typing means that you can iterate through the rows of the Table at blazing speed, allowing you to write your own algorithms in native Julia. To achieve this, the outermost Table structure is immutable and the names and types of the columns are fixed (while the data itself can be mutated).A more flexible table FlexTable is also provided. In a FlexTable, columns can be added, removed, renamed or replaced. This comes at the cost of type-inferability - it will be slower to iterate the rows of a FlexTable in a for loop. However, all the higher-level functions and queries will still execute at full speed!"
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "This rewrite of TypedTables.jl is still young, and more functionality will be added over time. Be assured that the current provided interface is fully stabilized as it is simply the interface provided by an AbstractVector{<:NamedTuple}."
},

{
    "location": "autodocs/#TypedTables.FlexTable",
    "page": "Docstrings",
    "title": "TypedTables.FlexTable",
    "category": "type",
    "text": "FlexTable(name1 = array1, ...)\n\nCreate a column-storage-based FlexTable with column names name1, etc, from arrays array1, etc. The input arrays array1, etc, must share the same dimensionality and indices.\n\nFlexTable itself is an AbstractArray whose elements are NamedTuples of the form (name1 = first(array1), ...), etc. Rows of the table are obtained via standard array indexing table[i], and columns via table.name.\n\nFlexTable differs from Table in that the columns are mutable - you may add, remove, rename and replace entire columns of a FlexTable, but not a Table. However, Table can access and iterate rows in local scope with fast, fully type-inferred code while FlexTable will be more efficient with a higher-order interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypedTables.Table",
    "page": "Docstrings",
    "title": "TypedTables.Table",
    "category": "type",
    "text": "Table(name1 = array1, ...)\n\nCreate a column-storage-based Table with column names name1, etc, from arrays array1, etc. The input arrays array1, etc, must share the same dimensionality and indices.\n\nTable itself is an AbstractArray whose elements are NamedTuples of the form (name1 = first(array1), ...), etc. Rows of the table are obtained via standard array indexing table[i], and columns via table.name.\n\nTable differs from FlexTable in that the columns are immutable - you may add, remove, rename and replace entire columns of a FlexTable, but not a Table. However, Table can access and iterate rows in local scope with fast, fully type-inferred code while FlexTable will be more efficient with a higher-order interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TypedTables.columnnames",
    "page": "Docstrings",
    "title": "TypedTables.columnnames",
    "category": "function",
    "text": "columnnames(table)\n\nReturn a tuple of the column names of a Table.\n\n\n\n\n\ncolumnnames(table)\n\nReturn a tuple of the column names of a Table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.columns",
    "page": "Docstrings",
    "title": "Tables.columns",
    "category": "function",
    "text": "columns(table::Table)\n\nConvert a Table into a NamedTuple of its columns.\n\n\n\n\n\ncolumns(dataframe::FlexTable)\n\nConvert a FlexTable into a NamedTuple of its columns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TypedTables.FlexTableTypedTables.GetPropertyTypedTables.TableTypedTables.TypedTablesTypedTables.__getindex_dimsTypedTables.__ndimsTypedTables._columnsTypedTables._eltypesTypedTables._flextableTypedTables._getindex_dimsTypedTables._hcat_ndimsTypedTables._ndimsTypedTables._similarTypedTables._tableTypedTables._vcat_ndimsTypedTables.balance_widthsTypedTables.balance_widths!TypedTables.columnnamesTypedTables.columnsTypedTables.compact_stringTypedTables.compact_string_rowTypedTables.evalTypedTables.includeTypedTables.removenothingsTypedTables.rowsTypedTables.showtableTypedTables.truncate_string"
},

]}
