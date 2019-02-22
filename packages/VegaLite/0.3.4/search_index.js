var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VegaLite.jl-1",
    "page": "Readme",
    "title": "VegaLite.jl",
    "category": "section",
    "text": "Julia bindings to Vega-Lite(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: ) (Image: ) (Image: Build Status) (Image: Build status) (Image: VegaLite) (Image: Coverage Status) (Image: codecov)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "VegaLite.jl is a plotting package for the julia programming language. The package is based on Vega-Lite, which extends a traditional grammar of graphics API into a grammar of interactive graphics.VegaLite.jl allows you to create a wide range of statistical plots. It exposes the full functionality of the underlying Vega-Lite and is a the same time tightly integrated into the julia ecosystem. Here is an example of a scatter plot:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(\n    :point,\n    x=:Horsepower,\n    y=:Miles_per_Gallon,\n    color=:Origin,\n    width=400,\n    height=400\n)(Image: plot)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install VegaLite.jl, run the following julia code:Pkg.add(\"VegaLite\")"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The current documentation can be found here."
},

]}
