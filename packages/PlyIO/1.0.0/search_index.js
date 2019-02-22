var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Ply-polygon-file-IO-1",
    "page": "Readme",
    "title": "Ply polygon file IO",
    "category": "section",
    "text": "PlyIO is a package for reading and writing data in the Ply polygon file format, also called the Stanford triangle format.(Image: linux/osx build status) (Image: windows build status)"
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": ""
},

{
    "location": "#Writing-ply-1",
    "page": "Readme",
    "title": "Writing ply",
    "category": "section",
    "text": "Here\'s an example of how to write a basic ply file containing random triangles and edges:using PlyIO\n\nply = Ply()\npush!(ply, PlyComment(\"An example ply file\"))\n\nnverts = 1000\n\n# Random vertices with position and color\nvertex = PlyElement(\"vertex\",\n                    ArrayProperty(\"x\", randn(nverts)),\n                    ArrayProperty(\"y\", randn(nverts)),\n                    ArrayProperty(\"z\", randn(nverts)),\n                    ArrayProperty(\"r\", rand(nverts)),\n                    ArrayProperty(\"g\", rand(nverts)),\n                    ArrayProperty(\"b\", rand(nverts)))\npush!(ply, vertex)\n\n# Some triangular faces.\n# The UInt8 is the type used for serializing the number of list elements (equal\n# to 3 for a triangular mesh); the Int32 is the type used to serialize indices\n# into the vertex array.\nvertex_index = ListProperty(\"vertex_index\", UInt8, Int32)\nfor i=1:nverts\n   push!(vertex_index, rand(0:nverts-1,3))\nend\npush!(ply, PlyElement(\"face\", vertex_index))\n\n# Some edges\nvertex_index = ListProperty(\"vertex_index\", Int32, Int32)\nfor i=1:nverts\n   push!(vertex_index, rand(0:nverts-1,2))\nend\npush!(ply, PlyElement(\"edge\", vertex_index))\n\n# For the sake of the example, ascii format is used, the default binary mode is faster.\nsave_ply(ply, \"example1.ply\", ascii=true)Opening this file using a program like displaz, for example using displaz example1.ply, you should see something like(Image: Example one)"
},

{
    "location": "#Reading-ply-1",
    "page": "Readme",
    "title": "Reading ply",
    "category": "section",
    "text": "Reading the ply file generated above is quite simple:julia> using PlyIO\n\njulia> ply = load_ply(\"example1.ply\")\nPlyIO.Ply with header:\n ply\n format ascii 1.0\n comment An example ply file\n element vertex 1000\n property float64 x\n property float64 y\n property float64 z\n property float64 r\n property float64 g\n property float64 b\n element face 1000\n property list int32 int32 vertex_index\n element edge 1000\n property list int32 int32 vertex_index\n end_header\n\njulia> ply[\"vertex\"]\nPlyElement \"vertex\" of length 1000 with properties [\"x\", \"y\", \"z\", \"r\", \"g\", \"b\"]\n\njulia> ply[\"vertex\"][\"x\"]\n1000-element PlyIO.ArrayProperty{Float64,String} \"x\":\n -0.472592\n  1.04326\n -0.982202\n ⋮\n -2.55605\n  0.773923\n -2.10675"
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": ""
},

{
    "location": "#The-file-format-1",
    "page": "Readme",
    "title": "The file format",
    "category": "section",
    "text": "Conceptually, the ply format is a container for a set of named tables of numeric data.  Each table, or element, has several named columns or properties. Properties can be either simple numeric arrays (floating point or signed/unsigned integers), or arrays of variable length lists of such numeric values.As described, ply is quite a generic format but it\'s primarily used for geometric data. For this use there are some loose naming conventions which attach geometric meaning to certian combinations of element and property names. Unfortunately there\'s no official standard."
},

{
    "location": "#Document-object-model-1",
    "page": "Readme",
    "title": "Document object model",
    "category": "section",
    "text": "Ply elements are represented with the PlyElement type which is a list of properties which may be looked up by name.Properties may be represented by an AbstractArray type which has the the plyname function defined, which should return a name for the property.  The builtin types ArrayProperty and ListProperty are used as containers for data when reading a ply file.The Ply type is a container for several interleaved PlyElement and PlyComment fields, in the order which would be observed in a standard ply header."
},

{
    "location": "#Reading-and-writing-1",
    "page": "Readme",
    "title": "Reading and writing",
    "category": "section",
    "text": "To read and write Ply objects from files or IO streams, use the functions load_ply() and save_ply()."
},

{
    "location": "autodocs/#PlyIO.ArrayProperty",
    "page": "Docstrings",
    "title": "PlyIO.ArrayProperty",
    "category": "type",
    "text": "ArrayProperty(name, T)\n\nA ply property $T $name, modelled as an abstract vector, with a name which can be retrieved using plyname().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlyIO.ListProperty",
    "page": "Docstrings",
    "title": "PlyIO.ListProperty",
    "category": "type",
    "text": "ListProperty(name, S, T)\nListProperty(name, list_of_vectors)\n\nA ply property list $S $T $name, modelled as a abstract vector of vectors, with a name which can be retrieved using plyname().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlyIO.Ply",
    "page": "Docstrings",
    "title": "PlyIO.Ply",
    "category": "type",
    "text": "Ply()\n\nContainer for the contents of a ply file.  This type directly models the contents of the header.  Ply elements and comments can be added using push!(), elements can be iterated over with the standard iterator interface, and looked up by indexing with a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlyIO.PlyComment",
    "page": "Docstrings",
    "title": "PlyIO.PlyComment",
    "category": "type",
    "text": "PlyComment(string)\n\nA ply comment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlyIO.PlyElement",
    "page": "Docstrings",
    "title": "PlyIO.PlyElement",
    "category": "type",
    "text": "PlyElement(name, [len | props...])\n\nConstruct a ply element $name $len, containing a list of properties with a name which can be retrieved using plyname.  Properties can be accessed with the array interface, or looked up by indexing with a string.\n\nThe expected length len is used if it is set, otherwise the length shared by the property vectors is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlyIO.load_ply",
    "page": "Docstrings",
    "title": "PlyIO.load_ply",
    "category": "function",
    "text": "load_ply(file)\n\nLoad data from a ply file and return a Ply datastructure.  file may either be a file name or an open stream.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlyIO.plyname",
    "page": "Docstrings",
    "title": "PlyIO.plyname",
    "category": "function",
    "text": "plyname(data)\n\nReturn the name that data is associated with when serialized in a ply file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlyIO.save_ply",
    "page": "Docstrings",
    "title": "PlyIO.save_ply",
    "category": "function",
    "text": "save_ply(ply::Ply, file; [ascii=false])\n\nSave data from Ply data structure into file which may be a filename or an open stream.  The file will be native endian binary, unless the keyword argument ascii is set to true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PlyIO.ArrayPropertyPlyIO.FormatPlyIO.Format_asciiPlyIO.Format_binary_bigPlyIO.Format_binary_littlePlyIO.ListPropertyPlyIO.PlyPlyIO.PlyCommentPlyIO.PlyElementPlyIO.PlyIOPlyIO.PlyNativeTypePlyIO.PropNameListPlyIO._host_is_little_endianPlyIO.evalPlyIO.includePlyIO.load_plyPlyIO.parse_asciiPlyIO.ply_typePlyIO.ply_type_namePlyIO.plynamePlyIO.read_ascii_value!PlyIO.read_binary_value!PlyIO.read_binary_values!PlyIO.read_headerPlyIO.save_plyPlyIO.write_ascii_valuePlyIO.write_binary_valuePlyIO.write_binary_valuesPlyIO.write_headerPlyIO.write_header_field"
},

]}
