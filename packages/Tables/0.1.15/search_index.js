var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Tables.jl-1",
    "page": "Readme",
    "title": "Tables.jl",
    "category": "section",
    "text": "The Tables.jl package provides simple, yet powerful interface functions for working with all kinds tabular data through predictable access patterns.    Tables.rows(table) => Rows\n    Tables.columns(table) => ColumnsWhere Rows and Columns are the duals of each other:Rows is an iterator of property-accessible objects (any type that supports propertynames(row) and getproperty(row, nm::Symbol)\nColumns is a property-accessible object of iterators (i.e. each column is an iterator)In addition to these Rows and Columns objects, it\'s useful to be able to query properties of these objects:Tables.schema(x::Union{Rows, Columns}) => Union{Tables.Schema, Nothing}: returns a Tables.Schema object, or nothing if the table\'s schema is unknown\nFor the Tables.Schema object:\ncolumn names can be accessed as a tuple of Symbols like sch.names\ncolumn types can be accessed as a tuple of types like sch.types\nSee ?Tables.Schema for more details on this typeA big part of the power in these simple interface functions is that each (Tables.rows & Tables.columns) is defined for any table type, even if the table type only explicitly implements one interface function or the other. This is accomplished by providing performant, generic fallback definitions in Tables.jl itself (though obviously nothing prevents a table type from implementing each interface function directly).With these simple definitions, powerful workflows are enabled:A package providing data cleansing, manipulation, visualization, or analysis can automatically handle any number of decoupled input table types\nA tabular file format can have automatic integration with in-memory structures and translation to other file formats"
},

{
    "location": "#Tables-Interface-1",
    "page": "Readme",
    "title": "Tables Interface",
    "category": "section",
    "text": "So how does one go about satisfying the Tables.jl interface functions? It mainly depends on what you\'ve already defined and the natural access patterns of your table:"
},

{
    "location": "#First:-1",
    "page": "Readme",
    "title": "First:",
    "category": "section",
    "text": "Tables.istable(::Type{<:MyTable}) = true: this provides an explicit affirmation that your type implements the Tables interface"
},

{
    "location": "#To-support-Rows:-1",
    "page": "Readme",
    "title": "To support Rows:",
    "category": "section",
    "text": "Define Tables.rowaccess(::Type{<:MyTable}) = true: this signals to other types that MyTable supports valid Row-iteration\nDefine Tables.rows(x::MyTable): return a Row-iterator object (perhaps the table itself if already defined)\nDefine Tables.schema(Tables.rows(x::MyTable)) to either return a Tables.Schema object, or nothing if the schema is unknown or non-inferrable for some reason"
},

{
    "location": "#To-support-Columns:-1",
    "page": "Readme",
    "title": "To support Columns:",
    "category": "section",
    "text": "Define Tables.columnaccess(::Type{<:MyTable}) = true: this signals to other types that MyTable supports returning a valid Columns object\nDefine Tables.columns(x::MyTable): return a Columns, property-accessible object (perhaps the table itself if it naturally supports property-access to columns)\nDefine Tables.schema(Tables.columns(x::MyTable)) to either return a Tables.Schema object, or nothing if the schema is unknown or non-inferrable for some reason"
},

{
    "location": "#Sinks-(transferring-data-from-one-table-to-another)-1",
    "page": "Readme",
    "title": "Sinks (transferring data from one table to another)",
    "category": "section",
    "text": "Another question is how MyTable can be a \"sink\" for any other table type. The answer is quite simple: use the interface functions!Define a function or constructor that takes, at a minimum, a single, untyped argument and then calls Tables.rows or Tables.columns on that argument to construct an instance of MyTableFor example, if MyTable is a row-oriented format, I might define my \"sink\" function like:function MyTable(x)\n    Tables.istable(x) || throw(ArgumentError(\"MyTable requires a table input\"))\n    rows = Tables.rows(x)\n    sch = Tables.schema(rows)\n    names = sch.names\n    types = sch.types\n    # custom constructor that creates an \"empty\" MyTable according to given column names & types\n    # note that the \"unknown\" schema case should be considered, i.e. when `sch.types => nothing`\n    mytbl = MyTable(names, types)\n    for row in rows\n        # a convenience function provided in Tables.jl for \"unrolling\" access to each column/property of a `Row`\n        # it works by applying a provided function to each value; see `?Tables.eachcolumn` for more details\n        Tables.eachcolumn(sch, row) do val, col, name\n            push!(mytbl[col], val)\n        end\n    end\n    return mytbl\nendAlternatively, if MyTable is column-oriented, perhaps my definition would be more like:function MyTable(x)\n    Tables.istable(x) || throw(ArgumentError(\"MyTable requires a table input\"))\n    cols = Tables.columns(x)\n    # here we use Tables.eachcolumn to iterate over each column in a `Columns` object\n    return MyTable(collect(propertynames(cols)), [collect(col) for col in Tables.eachcolumn(cols)])\nendObviously every table type is different, but via a combination of Tables.rows and Tables.columns each table type should be able to construct an instance of itself."
},

{
    "location": "#Functions-that-input-and-output-tables:-1",
    "page": "Readme",
    "title": "Functions that input and output tables:",
    "category": "section",
    "text": "For functions that input a table, perform some calculation, and output a new table, we need a way of constructing the preferred output table given the input.  For this purpose, Tables.materializer(table) returns the preferred sink function for a table (Tables.columntable, which creates a named tuple of AbstractVectors, is the default).  Note that an in-memory table with a properly defined \"sink\" function can reconstruct itself with the following:materializer(table)(columns(table)) \n\nmaterializer(table)(rows(table))For example, we may want to select a subset of columns from a column-access table.  One way we could implement it is with the following:function select(table, cols::Symbol...)\n    Tables.istable(table) || throw(ArgumentError(\"select requires a table input\"))\n    nt = Tables.columntable(table)  # columntable(t) creates a NamedTuple of AbstractVectors\n    newcols = NamedTuple{cols}(nt)\n    Tables.materializer(table)(newcols)\nend\n\n# Example of selecting columns from a columntable\ntbl = (x=1:100, y=rand(100), z=randn(100))\nselect(tbl, :x)\nselect(tbl, :x, :z)\n\ntbl = [(x=1, y=\"a\", z=1.0), (x=2, y=\"b\", z=2.0)]\nselect(tbl, :z, :x)"
},

{
    "location": "autodocs/#Tables.Row",
    "page": "Docstrings",
    "title": "Tables.Row",
    "category": "type",
    "text": "Abstract row type with a simple required interface: row values are accessible via getproperty(row, field); for example, a NamedTuple like nt = (a=1, b=2, c=3) can access its value for a like nt.a which turns into a call to the function getproperty(nt, :a)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.Schema",
    "page": "Docstrings",
    "title": "Tables.Schema",
    "category": "type",
    "text": "Tables.Schema(names, types)\n\nCreate a Tables.Schema object that holds the column names and types for a tabular data object. Tables.Schema is dual-purposed: provide an easy interface for users to query these properties, as well as provide a convenient \"structural\" type for code generation.\n\nTo get a table\'s schema, one can call Tables.schema(tbl), but also note that a table may return nothing, indicating that it\'s column names and/or column types are unknown (usually not inferrable). This is similar to the Base.EltypeUnknown() trait for iterators when Base.IteratorEltype is called. Users should account for the Tables.schema(tbl) => nothing case by using the properties of the results of Tables.rows(x) and Tables.columns(x) directly.\n\nTo access the names, one can simply call sch.names to return the tuple of Symbols. To access column types, one can similarly call sch.types, which will return a tuple of types (like (Int64, Float64, String)).\n\nThe actual type definition is\n\nstruct Schema{names, types} end\n\nWhere names is a tuple of Symbols, and types is a tuple type of types (like Tuple{Int64, Float64, String}). Encoding the names & types as type parameters allows convenient use of the type in generated functions and other optimization use-cases.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.Table",
    "page": "Docstrings",
    "title": "Tables.Table",
    "category": "type",
    "text": "The Tables.jl package provides simple, yet powerful interface functions for working with all kinds tabular data through predictable access patterns.\n\n    Tables.rows(table) => Rows\n    Tables.columns(table) => Columns\n\nWhere Rows and Columns are the duals of each other:\n\nRows is an iterator of property-accessible objects (any type that supports propertynames(row) and getproperty(row, nm::Symbol)\nColumns is a property-accessible object of iterators (i.e. each column is an iterator)\n\nIn addition to these Rows and Columns objects, it\'s useful to be able to query properties of these objects:\n\nTables.schema(x::Union{Rows, Columns}) => Union{Tables.Schema, Nothing}: returns a Tables.Schema object, or nothing if the table\'s schema is unknown\nFor the Tables.Schema object:\ncolumn names can be accessed as a tuple of Symbols like sch.names\ncolumn types can be accessed as a tuple of types like sch.types\nSee ?Tables.Schema for more details on this type\n\nA big part of the power in these simple interface functions is that each (Tables.rows & Tables.columns) is defined for any table type, even if the table type only explicitly implements one interface function or the other. This is accomplished by providing performant, generic fallback definitions in Tables.jl itself (though obviously nothing prevents a table type from implementing each interface function directly).\n\nWith these simple definitions, powerful workflows are enabled:\n\nA package providing data cleansing, manipulation, visualization, or analysis can automatically handle any number of decoupled input table types\nA tabular file format can have automatic integration with in-memory structures and translation to other file formats\n\nSo how does one go about satisfying the Tables.jl interface functions? It mainly depends on what you\'ve already defined and the natural access patterns of your table:\n\nFirst:\n\nTables.istable(::Type{<:MyTable}) = true: this provides an explicit affirmation that your type implements the Tables interface\n\nTo support Rows:\n\nDefine Tables.rowaccess(::Type{<:MyTable}) = true: this signals to other types that MyTable supports valid Row-iteration\nDefine Tables.rows(x::MyTable): return a Row-iterator object (perhaps the table itself if already defined)\nDefine Tables.schema(Tables.rows(x::MyTable)) to either return a Tables.Schema object, or nothing if the schema is unknown or non-inferrable for some reason\n\nTo support Columns:\n\nDefine Tables.columnaccess(::Type{<:MyTable}) = true: this signals to other types that MyTable supports returning a valid Columns object\nDefine Tables.columns(x::MyTable): return a Columns, property-accessible object (perhaps the table itself if it naturally supports property-access to columns)\nDefine Tables.schema(Tables.columns(x::MyTable)) to either return a Tables.Schema object, or nothing if the schema is unknown or non-inferrable for some reason\n\nThe final question is how MyTable can be a \"sink\" for any other table type. The answer is quite simple: use the interface functions!\n\nDefine a function or constructor that takes, at a minimum, a single, untyped argument and then calls Tables.rows or Tables.columns on that argument to construct an instance of MyTable\n\nFor example, if MyTable is a row-oriented format, I might define my \"sink\" function like:\n\nfunction MyTable(x)\n    Tables.istable(x) || throw(ArgumentError(\"MyTable requires a table input\"))\n    rows = Tables.rows(x)\n    sch = Tables.schema(rows)\n    names = sch.names\n    types = sch.types\n    # custom constructor that creates an \"empty\" MyTable according to given column names & types\n    # note that the \"unknown\" schema case should be considered, i.e. when `sch.types => nothing`\n    mytbl = MyTable(names, types)\n    for row in rows\n        # a convenience function provided in Tables.jl for \"unrolling\" access to each column/property of a `Row`\n        # it works by applying a provided function to each value; see `?Tables.eachcolumn` for more details\n        Tables.eachcolumn(sch, row) do val, col, name\n            push!(mytbl[col], val)\n        end\n    end\n    return mytbl\nend\n\nAlternatively, if MyTable is column-oriented, perhaps my definition would be more like:\n\nfunction MyTable(x)\n    Tables.istable(x) || throw(ArgumentError(\"MyTable requires a table input\"))\n    cols = Tables.columns(x)\n    # here we use Tables.eachcolumn to iterate over each column in a `Columns` object\n    return MyTable(collect(propertynames(cols)), [collect(col) for col in Tables.eachcolumn(cols)])\nend\n\nObviously every table type is different, but via a combination of Tables.rows and Tables.columns each table type should be able to construct an instance of itself.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.allocatecolumn",
    "page": "Docstrings",
    "title": "Tables.allocatecolumn",
    "category": "function",
    "text": "Tables.allocatecolumn(::Type{T}, len) => returns a column type (usually AbstractVector) w/ size to hold `len` elements\n\nCustom column types can override with an appropriate \"scalar\" element type that should dispatch to their column allocator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.columnindex",
    "page": "Docstrings",
    "title": "Tables.columnindex",
    "category": "function",
    "text": "given names and a Symbol name, compute the index (1-based) of the name in names\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.columntype",
    "page": "Docstrings",
    "title": "Tables.columntype",
    "category": "function",
    "text": "given tuple type and a Symbol name, compute the type of the name in the tuples types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.eachcolumn",
    "page": "Docstrings",
    "title": "Tables.eachcolumn",
    "category": "function",
    "text": "Tables.eachcolumn(f, sch, row, args...)\nTables.eachcolumn(f, names, row, args...)\nTables.eachcolumn(Tables.columns(x))\n\nThe first two definitions take a function `f`, table schema `sch` or table\'s column names `names` as a tuple of Symbols, a `row` type (that satisfies the Row interface), and any other `args...`;\nthey generate calls to get the value for each column in the row (`getproperty(row, nm)`) and then calls `f(val, col, name, args...)`, where `f` is the\nuser-provided function, `val` is a row\'s column value, `col` is the column index as an `Int`, and `name` is the row\'s column name as a Symbol.\n\nWhile the first two definitions apply to a `Row` object, the last definition simply returns a property-iterator over a `Columns` object.\nFor example, one could \"collect\" every column of a `Columns` object by doing:\n```julia\nvectors = [collect(col) for col in Tables.eachcolumn(Tables.columns(x))]\n```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.matrix",
    "page": "Docstrings",
    "title": "Tables.matrix",
    "category": "function",
    "text": "Tables.matrix(table)\n\nMaterialize any table source input as a Matrix. If the table column types are not homogenous, they will be promoted to a common type in the materialized Matrix. Note that column names are ignored in the conversion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.runlength",
    "page": "Docstrings",
    "title": "Tables.runlength",
    "category": "function",
    "text": "helper function to calculate a run-length encoding of a tuple type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Tables.table",
    "page": "Docstrings",
    "title": "Tables.table",
    "category": "function",
    "text": "Tables.table(m::AbstractMatrix; [header::Vector{Symbol}])\n\nWrap an AbstractMatrix (Matrix, Adjoint, etc.) in a MatrixTable, which satisfies the Tables.jl interface. This allows accesing the matrix via Tables.rows and Tables.columns. An optional keyword argument header can be passed as a Vector{Symbol} to be used as the column names. Note that no copy of the AbstractMatrix is made.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Tables.ColumnTableTables.ColumnsRowTables.EachColumnTables.IteratorInterfaceExtensionsTables.IteratorRowTables.IteratorWrapperTables.MatrixRowTables.MatrixTableTables.NamedTupleIteratorTables.RowTables.RowIteratorTables.RowTableTables.SchemaTables.SelectTables.SelectRowTables.TableTables.TablesTables.TransformsTables.TransformsRowTables.__init__Tables._buildcolumnsTables._eltypeTables._typesTables.add!Tables.add_or_widen!Tables.allocatecolumnTables.allocatecolumnsTables.buildcolumnsTables.columnaccessTables.columnindexTables.columnsTables.columntableTables.columntypeTables.ctappendTables.datavaluetypeTables.eachcolumnTables.evalTables.getarrayTables.getfuncTables.haslengthTables.includeTables.invalidtableTables.istableTables.materializerTables.matrixTables.namedtupleiteratorTables.namesTables.nondatavaluetypeTables.rowaccessTables.rowcountTables.rowsTables.rowtableTables.runlengthTables.schemaTables.selectTables.tableTables.transformTables.typesTables.typesubsetTables.unweakrefTables.unweakreftypeTables.unweakreftypesTables.unwrap"
},

]}
