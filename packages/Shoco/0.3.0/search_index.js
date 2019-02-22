var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Shoco.jl-1",
    "page": "Readme",
    "title": "Shoco.jl",
    "category": "section",
    "text": "(Image: Shoco) (Image: Build Status) (Image: Coverage Status)Shoco.jl is a Julia package that provides access to the compression and decompression functions in the Shoco C library. The algorithms are optimized for short strings and perform well in comparison to smaz, gzip, and xz. Compression is performed using entropy encoding.Two functions are exported by this package: compress and decompress. Both accept a single AbstractString argument and return a String. It\'s important to note that the output from compress may not be valid UTF-8, which the String type doesn\'t care about, but your use case might.Here\'s an example using the functions at the REPL.julia> using Shoco\n\njulia> compress(\"what\'s happening\")\n\"؉\'s ⎨<g\"\n\njulia> decompress(\"؉\'s ⎨<g\")\n\"what\'s happening\"The Shoco C library does not work on Windows due to lack of C99 support, which means that this package has the same restriction."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Shoco.ShocoShoco.__init__Shoco.check_depsShoco.compressShoco.decompressShoco.evalShoco.includeShoco.libshoco"
},

]}
