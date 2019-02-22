var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MMTF.jl-1",
    "page": "Readme",
    "title": "MMTF.jl",
    "category": "section",
    "text": "Latest Release:(Image: Latest Release) (Image: License) (Image: BioJulia Maintainer : joels94)Development Status:(Image: Build Status) (Image: Build status) (Image: codecov)"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "The Macromolecular Transmission Format (MMTF) is a new compact binary format to transmit and store biomolecular structures for fast 3D visualization and analysis"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install MMTF.jl from the Julia REPL:julia> using Pkg\njulia> add(\"MMTF\")To start using the package:julia> using MMTF"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To download and parse a MMTF file as Julia Dict from RCSB database.julia> MMTFdict = fetchmmtf(\"4HHB\")\nDict{String,Any} with 39 entries:\n  \"chainNameList\" => String[\"A\", \"B\", \"C\", \"D\", \"A\", \"B\", \"B\", \"C\", \"D\", \"D\", \"A\", \"B\", \"C\", \"D\"]\n  \"bondAtomList\"  => Int32[7, 2, 15, 9, 21, 17, 28, 23, 33, 30  …  4337, 4331, 4342, 4339, 4352, 4344, 4361, 4354, 4373, 4363]\n  \"numGroups\"     => 801\n  \"bFactorList\"   => Float32[49.05, 43.14, 24.8, 37.68, 72.12, 61.79, 80.12, 26.44, 26.32, 32.96  …  43.37, 43.46, 41.77, 43.68, 45.36, 41.53, 36.25, …\n  \"groupIdList\"   => Int32[1, 2, 3, 4, 5, 6, 7, 8, 9, 10  …  188, 189, 190, 191, 192, 193, 194, 195, 196, 197]\n  \"structureId\"   => \"4HHB\"\n  \"unitCell\"      => Any[63.15, 83.59, 53.8, 90.0, 99.34, 90.0]\n  \"numAtoms\"      => 4779\n  \"groupList\"     => Any[Dict{Any,Any}(Pair{Any,Any}(\"groupName\", \"VAL\"),Pair{Any,Any}(\"bondAtomList\", Any[1, 0, 2, 1, 3, 2, 4, 1, 5, 4, 6, 4]),Pair{A…\n  \"numChains\"     => 14\n  \"groupTypeList\" => Int32[0, 11, 22, 13, 9, 7, 1, 21, 10, 0  …  3, 3, 3, 3, 3, 3, 3, 3, 3, 3]\n  ⋮               => ⋮pdbid::AbstractString - PDB ID of the structure.To parse an existing MMTF file as Julia Dict.julia> MMTFDict = parsemmtf(\"path/to/MMTF/file\", gzip=false)gzip::Bool - if set to true, parses a compressed MMTF file.To write a valid MMTF Julia Dict as MMTF filejulia> writemmtf(MMTFdict, \"path/to/write/MMTF/file\", gzip=false)gzip::Bool - if set to true, writes a compressed MMTF file."
},

{
    "location": "#Contributing-and-Questions-1",
    "page": "Readme",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.If you have a question about contributing or using this package, our Gitter chat room would be the best starting place to communicate with other users and developers. You are encouraged to use the Bio category of the Julia discourse site for technical questions."
},

{
    "location": "autodocs/#MMTF.addheader",
    "page": "Docstrings",
    "title": "MMTF.addheader",
    "category": "function",
    "text": "Add the header to the appropriate array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.bytes",
    "page": "Docstrings",
    "title": "MMTF.bytes",
    "category": "function",
    "text": "Convert an integer array into a byte arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.chars",
    "page": "Docstrings",
    "title": "MMTF.chars",
    "category": "function",
    "text": "Convert integers to chars.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.decodearray",
    "page": "Docstrings",
    "title": "MMTF.decodearray",
    "category": "function",
    "text": "Parse the header of an input byte array and then decode using the input array, the codec and the appropirate parameter. input_array: the array to be decoded\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.decodechainlist",
    "page": "Docstrings",
    "title": "MMTF.decodechainlist",
    "category": "function",
    "text": "Convert a list of bytes to a list of strings. Each string is of length mmtf.CHAIN_LEN\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.decodedata",
    "page": "Docstrings",
    "title": "MMTF.decodedata",
    "category": "function",
    "text": "Decodes the MsgPack unpacked dict of the MMTF file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.deltadecode",
    "page": "Docstrings",
    "title": "MMTF.deltadecode",
    "category": "function",
    "text": "A function to delta decode an int array. in_array: the input array of integers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.deltaencode",
    "page": "Docstrings",
    "title": "MMTF.deltaencode",
    "category": "function",
    "text": "A function to delta decode an int array. in_array: the input array to be delta encoded\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.encodearray",
    "page": "Docstrings",
    "title": "MMTF.encodearray",
    "category": "function",
    "text": "Encode the array using the method and then add the header to this array. input_array: the array to be encoded codec: the integer index of the codec to use param: the integer parameter to use in the function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.encodechainlist",
    "page": "Docstrings",
    "title": "MMTF.encodechainlist",
    "category": "function",
    "text": "Convert a list of strings to a list of byte arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.encodedata",
    "page": "Docstrings",
    "title": "MMTF.encodedata",
    "category": "function",
    "text": "Encodes the MMTF Dict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.fetchmmtf",
    "page": "Docstrings",
    "title": "MMTF.fetchmmtf",
    "category": "function",
    "text": "Fetches a file from RCSB server and decodes it into a MMTFDict. pdbid: ID of the PDB file to be fetched and decoded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.floats",
    "page": "Docstrings",
    "title": "MMTF.floats",
    "category": "function",
    "text": "Convert integers to floats by division. in_ints: the integer array divider: the divider\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.ints",
    "page": "Docstrings",
    "title": "MMTF.ints",
    "category": "function",
    "text": "Convert a byte array into an integer array. The number of bytes forming an integer is defined by num in_bytes: the input bytes num: the number of bytes per int\n\n\n\n\n\nConvert floating points to integers using a multiplier. in_floats: the input floats multiplier: the multiplier to be used for conversion. Corresponds to the precisison.\n\n\n\n\n\nConvert an array of chars to an array of ints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.parseheader",
    "page": "Docstrings",
    "title": "MMTF.parseheader",
    "category": "function",
    "text": "Parse the header and return it along with the input array minus the header.  Returns the codec, the length of the decoded array, the parameter and the remainder of the array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.parsemmtf",
    "page": "Docstrings",
    "title": "MMTF.parsemmtf",
    "category": "function",
    "text": "Parses the MMTF file into a MMTFDict. filepath: Path of the input file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.recursiveindexdecode",
    "page": "Docstrings",
    "title": "MMTF.recursiveindexdecode",
    "category": "function",
    "text": "Unpack an array of integers using recursive indexing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.recursiveindexencode",
    "page": "Docstrings",
    "title": "MMTF.recursiveindexencode",
    "category": "function",
    "text": "Pack an integer array using recursive indexing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.runlengthdecode",
    "page": "Docstrings",
    "title": "MMTF.runlengthdecode",
    "category": "function",
    "text": "A function to run length decode an int array. in_array: the input array of integers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.runlengthencode",
    "page": "Docstrings",
    "title": "MMTF.runlengthencode",
    "category": "function",
    "text": "A function to run length decode an int array. in_array: the inptut array of integers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MMTF.writemmtf",
    "page": "Docstrings",
    "title": "MMTF.writemmtf",
    "category": "function",
    "text": "Writes the MMTFDict back to a file. MMTFDict: Dict containing the decoded MMTF data to be written to file. filepath: Path to write the file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MMTF.BASE_URLMMTF.CHAIN_LENMMTF.COORD_DIVIDERMMTF.MAX_SHORTMMTF.MIN_SHORTMMTF.MMTFMMTF.NULL_BYTEMMTF.OCC_B_FACTOR_DIVIDERMMTF.addheaderMMTF.bytesMMTF.charsMMTF.decodearrayMMTF.decodechainlistMMTF.decodedataMMTF.deltadecodeMMTF.deltaencodeMMTF.deltarecursivefloatdecodeMMTF.deltarecursivefloatencodeMMTF.encodearrayMMTF.encodechainlistMMTF.encodedataMMTF.evalMMTF.fetchmmtfMMTF.floatsMMTF.fourbyteintdecodeMMTF.fourbyteintencodeMMTF.htonofarrayMMTF.includeMMTF.intdecodeMMTF.intencodeMMTF.intsMMTF.ntohofarrayMMTF.parseheaderMMTF.parsemmtfMMTF.recursiveindexdecodeMMTF.recursiveindexencodeMMTF.runlengthchardecodeMMTF.runlengthcharencodeMMTF.runlengthdecodeMMTF.runlengthdeltaintdecodeMMTF.runlengthdeltaintencodeMMTF.runlengthencodeMMTF.runlengthfloatdecodeMMTF.runlengthfloatencodeMMTF.stringdecodeMMTF.stringencodeMMTF.writemmtf"
},

]}
