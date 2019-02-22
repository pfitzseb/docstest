var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#H5SectionsArrays.jl-1",
    "page": "Readme",
    "title": "H5SectionsArrays.jl",
    "category": "section",
    "text": "(Image: Build Status)cutout arbitrary chunks from a serials of 2D image sections in hdf5 formatonly support cutout, no writting\nused as normal Julia array\nsupport negative coordinateNote that we only support UInt8 data type for now, should be easy to extend if neccesary."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"H5SectionsArrays\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using H5SectionsArrays\nba = H5SectionsArray(\"path/of/dataset/\")\na = ba[101:300, -99:100, 1:3]"
},

{
    "location": "#File-format-1",
    "page": "Readme",
    "title": "File format",
    "category": "section",
    "text": "The section format follows the convention of ImageRegistration.jl"
},

{
    "location": "#a-registry-file-1",
    "page": "Readme",
    "title": "a registry file",
    "category": "section",
    "text": "this file, called registry.txt should contain a few columns: filename 0 offset-x offset-y size-x size-y true.here is an example:2,33_aligned    0   -293    -344    56834   25126   true\n2,34_aligned    0   -1352   -1761   59385   28240   true\n2,35_aligned    0   -1291   -1438   58320   27505   true\n2,36_aligned    0   -1907   -1471   59306   27474   true\n2,37_aligned    0   -1912   -2105   59320   28603   true"
},

{
    "location": "#a-image-section-in-hdf5-format-1",
    "page": "Readme",
    "title": "a image section in hdf5 format",
    "category": "section",
    "text": "the hdf5 file should contain several datasets:img: the image array\noffset: a vector containing x,y offsets\nsize: the size of the img datasetFor details please take a look of the test script runtests.jl, which construct a fake dataset."
},

]}
