var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Snappy-A-fast-compressor/decompressor-1",
    "page": "Readme",
    "title": "Snappy - A fast compressor/decompressor",
    "category": "section",
    "text": "(Image: Build Status)Snappy.jl is a Julia wrapper for the snappy library - a compression/decompression library focusing on speed."
},

{
    "location": "#High-level-Interfaces-1",
    "page": "Readme",
    "title": "High-level Interfaces",
    "category": "section",
    "text": "The Snappy module exports only two functions:compress(input::Vector{UInt8}) -> compressed::Vector{UInt8}\nuncompress(input::Vector{UInt8}) -> uncompressed::Vector{UInt8}.These functions are self-explanatory and works as such (hence, always satisfies uncompress(compress(input)) == input for any input)."
},

{
    "location": "#Low-level-Interfaces-1",
    "page": "Readme",
    "title": "Low-level Interfaces",
    "category": "section",
    "text": "If you digg into the module, you will find the following lower-level functions:snappy_compress(input::Vector{UInt8}, compressed::Vector{UInt8}) -> (length, status)\nsnappy_uncompress(compressed::Vector{UInt8}, uncompressed::Vector{UInt8}) -> (length, status)\nsnappy_max_compressed_length(source_length::UInt) -> length\nsnappy_uncompressed_length(compressed::Vector{UInt8}) -> (length, status)\nsnappy_validate_compressed_buffer(compressed::Vector{UInt8}) -> status.These functions have one-to-one correspondance to the C-APIs and are very thin wrappers of them, so you can consult the \"snappy-c.h\" header file for the documentation. Moreover, even though these functions are not exported by default, you can assume that they are stable as long as the original C-APIs are stable."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Snappy.SnappySnappy.SnappyBufferTooSmallSnappy.SnappyInvalidInputSnappy.SnappyOKSnappy.__init__Snappy.check_depsSnappy.compressSnappy.depsjl_pathSnappy.evalSnappy.includeSnappy.libsnappySnappy.snappy_compressSnappy.snappy_max_compressed_lengthSnappy.snappy_uncompressSnappy.snappy_uncompressed_lengthSnappy.snappy_validate_compressed_bufferSnappy.uncompress"
},

]}
