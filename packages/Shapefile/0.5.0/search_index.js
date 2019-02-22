var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Shapefile-1",
    "page": "Readme",
    "title": "Shapefile",
    "category": "section",
    "text": "(Image: Build Status) (Image: Shapefile) (Image: Shapefile)This library supports reading ESRI Shapefiles in pure Julia. Note that currently only the .shp is read, not .shx or .dbf. This means the feature geometry can be read, but no attribute information is associated to it."
},

{
    "location": "#Quick-Start-1",
    "page": "Readme",
    "title": "Quick Start",
    "category": "section",
    "text": "Basic example of reading a shapefile from test cases:using Shapefile\n\npath = joinpath(dirname(pathof(Shapefile)),\"..\",\"test\",\"shapelib_testcases\",\"test.shp\")\n\nhandle = open(path, \"r\") do io\n    read(io, Shapefile.Handle)\nendThe Shapefile.Handle structure contains shapes and metadata. List of the Shapefile.Handle field names:julia> fieldnames(typeof(handle))\n8-element Array{Symbol,1}:\n :code\n :length\n :version\n :shapeType\n :MBR\n :zrange\n :mrange\n :shapesShapefiles can contain multiple parts for each shape entity. Use GeoInterface.coordinates to fully decompose the shape data into parts.# Example of converting the 1st shape of the file into parts (array of coordinates)\njulia> GeoInterface.coordinates(handle.shapes[1])\n2-element Array{Array{Array{Array{Float64,1},1},1},1}:\n Array{Array{Float64,1},1}[Array{Float64,1}[[20.0, 20.0], ...]]\n Array{Array{Float64,1},1}[Array{Float64,1}[[0.0, 0.0], ...]]"
},

{
    "location": "#Alternative-packages-1",
    "page": "Readme",
    "title": "Alternative packages",
    "category": "section",
    "text": "If you want another lightweight pure Julia package for reading feature files, consider also GeoJSON.jl. It will also give access to the attribute information.For much more fully featured support for reading and writing geospatial data, at the cost of a larger binary dependency, look at GDAL.jl or ArchGDAL.jl packages. The latter builds a higher level API on top of GDAL.jl."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Shapefile.HandleShapefile.IntervalShapefile.MultiPatchShapefile.MultiPointShapefile.MultiPointMShapefile.MultiPointZShapefile.NullShapeShapefile.PointShapefile.PointMShapefile.PointZShapefile.PolygonShapefile.PolygonMShapefile.PolygonZShapefile.PolylineShapefile.PolylineMShapefile.PolylineZShapefile.RectShapefile.SHAPETYPEShapefile.ShapefileShapefile.evalShapefile.includeShapefile.inring"
},

]}
