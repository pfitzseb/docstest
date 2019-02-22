var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StatFiles-1",
    "page": "Readme",
    "title": "StatFiles",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: StatFiles) (Image: codecov.io)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides load support for Stata, SPSS, and SAS files under the FileIO.jl package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Use Pkgadd(StatFiles) in Julia to install StatFiles and its dependencies."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Load-a-Stata,-SPSS,-or-SAS-file-1",
    "page": "Readme",
    "title": "Load a Stata, SPSS, or SAS file",
    "category": "section",
    "text": "To read a Stata, SPSS, or SAS file into a DataFrame, use the following julia code:using StatFiles, DataFrames\n\ndf = DataFrame(load(\"data.dta\"))The call to load returns a struct that is an IterableTable.jl, so it can be passed to any function that can handle iterable tables, i.e. all the sinks in IterableTable.jl. Here are some examples of materializing a Stata, SPSS, or SAS file into data structures that are not a DataFrame:using StatFiles, DataTables, IndexedTables, TimeSeries, Temporal, Gadfly\n\n# Load into a DataTable\ndt = DataTable(load(\"data.dta\"))\n\n# Load into an IndexedTable\nit = IndexedTable(load(\"data.dta\"))\n\n# Load into a TimeArray\nta = TimeArray(load(\"data.dta\"))\n\n# Load into a TS\nts = TS(load(\"data.dta\"))\n\n# Plot directly with Gadfly\nplot(load(\"data.dta\"), x=:a, y=:b, Geom.line)"
},

{
    "location": "#Using-the-pipe-syntax-1",
    "page": "Readme",
    "title": "Using the pipe syntax",
    "category": "section",
    "text": "load also support the pipe syntax. For example, to load a Stata, SPSS, or SAS file into a DataFrame, one can use the following code:using StatFiles, DataFrame\n\ndf = load(\"data.dta\") |> DataFrameThe pipe syntax is especially useful when combining it with Query.jl queries, for example one can easily load a Stata, SPSS, or SAS file, pipe it into a query, then pipe it to the save function to store the results in a new file."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StatFiles.@format_strStatFiles.FileStatFiles.StatFileStatFiles.StatFilesStatFiles.evalStatFiles.fileio_loadStatFiles.includeStatFiles.load"
},

]}
