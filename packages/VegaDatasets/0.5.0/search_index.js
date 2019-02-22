var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VegaDatasets-1",
    "page": "Readme",
    "title": "VegaDatasets",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: VegaDatasets) (Image: codecov)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides an easy way to load the datasets in vega-datasets from julia."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install this package from the julia REPL with the following command:Pkg.add(\"VegaDatasets\")"
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "The package only exports one function that takes the name of a dataset and returns a VegaDataset with that data:using VegaDatasets\n\nvg = dataset(\"iris\")VegaDataset implements the iterable tables interface, so it can be passed to any sink that accepts iterable tables.For example, to convert a dataset into a DataFrame, you can write:using VegaDatasets, DataFrames\n\ndf = DataFrame(dataset(\"iris\"))You can pipe a VegaDataset directly into a VegaLite.jl plot:using VegaLite, VegaDatasets\n\ndataset(\"iris\") |> @vlplot(:point, x=:sepalLength, y=:petalWidth)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "VegaDatasets.VegaDatasetVegaDatasets.VegaDatasetsVegaDatasets.datasetVegaDatasets.evalVegaDatasets.includeVegaDatasets.load_csvVegaDatasets.load_json"
},

]}
