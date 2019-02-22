var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ParquetFiles-1",
    "page": "Readme",
    "title": "ParquetFiles",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: ParquetFiles) (Image: codecov.io)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides load support for Parquet files under the FileIO.jl package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Use  add ParquetFiles in Julia to install ParquetFiles and its dependencies."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Load-a-Parquet-file-1",
    "page": "Readme",
    "title": "Load a Parquet file",
    "category": "section",
    "text": "To read a Parquet file into a DataFrame, use the following julia code:using ParquetFiles, DataFrames\n\ndf = DataFrame(load(\"data.parquet\"))The call to load returns a struct that is an IterableTable.jl, so it can be passed to any function that can handle iterable tables, i.e. all the sinks in IterableTable.jl. Here are some examples of materializing a Parquet file into data structures that are not a DataFrame:using ParquetFiles, IndexedTables, TimeSeries, Temporal, VegaLite\n\n# Load into an IndexedTable\nit = IndexedTable(load(\"data.parquet\"))\n\n# Load into a TimeArray\nta = TimeArray(load(\"data.parquet\"))\n\n# Load into a TS\nts = TS(load(\"data.parquet\"))\n\n# Plot directly with Gadfly\n@vlplot(:point, data=load(\"data.parquet\"), x=:a, y=:b)"
},

{
    "location": "#Using-the-pipe-syntax-1",
    "page": "Readme",
    "title": "Using the pipe syntax",
    "category": "section",
    "text": "load also support the pipe syntax. For example, to load a Parquet file into a DataFrame, one can use the following code:using ParquetFiles, DataFrame\n\ndf = load(\"data.parquet\") |> DataFrameThe pipe syntax is especially useful when combining it with Query.jl queries, for example one can easily load a Parquet file, pipe it into a query, then pipe it to the save function to store the results in a new file."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ParquetFiles.@format_strParquetFiles.FileParquetFiles.ParquetFileParquetFiles.ParquetFilesParquetFiles.ParquetNamedTupleIteratorParquetFiles.evalParquetFiles.fileio_loadParquetFiles.includeParquetFiles.load"
},

]}
