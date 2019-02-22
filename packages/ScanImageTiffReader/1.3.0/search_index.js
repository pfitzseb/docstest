var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "ScanImageTiffReader.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#ScanImageTiffReader.jl-Documentation-1",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "ScanImageTiffReader.jl Documentation",
    "category": "section",
    "text": "DocTestSetup  = quote\n    using Pkg\n    Pkg.add([\"JSON\", \"DotEnv\"])\n\n    using DotEnv\n    DotEnv.config(joinpath(dirname(pwd()), \"test\", \".env\"))\n    mytif = joinpath(ENV[\"TESTBASE\"], \"linj_00001.tif\") # so we don\'t have to specify full paths in doctests\n\n    using ScanImageTiffReader, JSON\nend"
},

{
    "location": "#About-1",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "About",
    "category": "section",
    "text": "The ScanImageTiffReader is a Julia library for extracting data from Tiff and BigTiff files recorded using ScanImage.  It is a very fast tiff reader and provides access to ScanImage-specific metadata.  It should read most tiff files, but as of now we don\'t support compressed or tiled data.  It is also available as a Matlab, Python,  or C library.  There\'s also a command-line interface.More information and related tools can be found on here.Both ScanImage and this reader are products of Vidrio Technologies.  If you have questions or need support feel free to submit an issue or contact us."
},

{
    "location": "#Usage-1",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "Usage",
    "category": "section",
    "text": "The ScanImageTiffReader.open function attempts to open a file and execute a query on it before closing and handling any exceptions.  The query is passed as an argument and is one of data, metadata, pxtype, etc...  See below for examples.julia> using Pkg\njulia> Pkg.add(\"ScanImageTiffReader\")\njulia> using ScanImageTiffReader\njulia> vol = ScanImageTiffReader.open(\"my.tif\") do io\n    data(io)\nend"
},

{
    "location": "#Base.length-Tuple{Context}",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "Base.length",
    "category": "method",
    "text": "length(ctx::Context)\n\nReturn the number of planes in the image stack.\n\nExamples\n\nScanImageTiffReader.open(mytif) do io\n    length(io)\nend\n# output\n10\n\n\n\n\n\n"
},

{
    "location": "#Base.size-Tuple{Context}",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "Base.size",
    "category": "method",
    "text": "size(ctx::Context)\n\nReturn the shape of the data in the TIFF file.\n\nExamples\n\nScanImageTiffReader.open(mytif) do io\n    size(io)\nend\n# output\n(512, 512, 10)\n\n\n\n\n\n"
},

{
    "location": "#ScanImageTiffReader.data-Tuple{Context}",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "ScanImageTiffReader.data",
    "category": "method",
    "text": "data(ctx::Context)\n\nReturn an n-dimensional array containing the image stack.\n\nExamples\n\nusing ScanImageTiffReader\nd = ScanImageTiffReader.open(mytif) do io\n    data(io)\nend\nd[1:10, 1:10, 1]\n\n\n\n\n\n"
},

{
    "location": "#ScanImageTiffReader.description-Tuple{Context,Int64}",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "ScanImageTiffReader.description",
    "category": "method",
    "text": "description(ctx::Context, iframe::Int)\n\nReturn the contents of the image description tag for frame iframe.\n\nExamples\n\ndesc = ScanImageTiffReader.open(mytif) do io\n    description(io, 1)\nend\nprint(desc)\n# output\nframeNumbers = 1\nacquisitionNumbers = 1\nframeNumberAcquisition = 1\nframeTimestamps_sec = 0.000000\nacqTriggerTimestamps_sec =\nnextFileMarkerTimestamps_sec =\nendOfAcquisition =  0\nendOfAcquisitionMode = 0\ndcOverVoltage = 0\nepoch = [2016 6 4 13 51 7.8046]\n\n\n\n\n\n"
},

{
    "location": "#ScanImageTiffReader.metadata-Tuple{Context}",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "ScanImageTiffReader.metadata",
    "category": "method",
    "text": "metadata(ctx::Context)\n\nRead the ScanImage metadata section from the file.\n\nThis data section is not part of the Tiff specification, so common Tiff readers will not be able to access this data.\n\nIn ScanImage 2016 and later, this is a JSON string.  For previous versions of ScanImage, this is a bytestring that must be deserialized in MATLAB.\n\nExamples\n\nScanImageTiffReader.open(mytif) do io\n    JSON.parse(metadata(io))\nend\n# output\nDict{String,Any} with 2 entries:\n  \"SI\"        => Dict{String,Any}(\"hConfigurationSaver\"=>Dict{String,Any}(\"usrF…\n  \"RoiGroups\" => Dict{String,Any}(\"photostimRoiGroups\"=>nothing,\"imagingRoiGrou…\n\n\n\n\n\n"
},

{
    "location": "#ScanImageTiffReader.pxtype-Tuple{Context}",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "ScanImageTiffReader.pxtype",
    "category": "method",
    "text": "pxtype(ctx::Context)\n\nReturn the type of the data in the TIFF file.\n\nExamples\n\nScanImageTiffReader.open(mytif) do io\n    pxtype(io)\nend\n# output\nInt16\n\n\n\n\n\n"
},

{
    "location": "#ScanImageTiffReader.Context",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "ScanImageTiffReader.Context",
    "category": "type",
    "text": "Context(handle::Ptr{Cvoid}, log::Ptr{UInt8})\n\n\n\n\n\n"
},

{
    "location": "#ScanImageTiffReader.open-Tuple{Function,AbstractString,Vararg{Any,N} where N}",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "ScanImageTiffReader.open",
    "category": "method",
    "text": "open(func::Function, filename::AbstractString, args...)\n\nOpen a ScanImage TIFF file filename for reading and apply func to it (with optional arguments).\n\nExamples\n\nScanImageTiffReader.open(mytif) do io\n    length(io)\nend\n# output\n10\n\n\n\n\n\n"
},

{
    "location": "#API-Documentation-1",
    "page": "ScanImageTiffReader.jl Documentation",
    "title": "API Documentation",
    "category": "section",
    "text": "Modules = [ScanImageTiffReader]\nOrder = [:function, :type]"
},

]}
