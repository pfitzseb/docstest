var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StrFs-1",
    "page": "Readme",
    "title": "StrFs",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)Julia packages for strings with fixed maximum number of bytes."
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "StrF{S} <: AbstractString can be used for strings up to S bytes in UTF-8 encoding. When the string has less than that many bytes, it is terminated with a 0x00.This mirrors the way Stata DTA files encode fixed length strings (str#), but other applications may also find this useful. StrF{S} strings are implemented by wrapping an SVector{S,UInt8}, with the potential efficiency gains that entails."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> using StrFs\n\njulia> gender = [strf\"male\", strf\"female\"]\n2-element Array{StrF{6},1}:\n \"male\"\n \"female\"\n\njulia> gender[1] == \"male\"\ntrue\n\njulia> issorted(gender, rev = true)\ntrue\n\njulia> motto = StrF{6}(\"ηβπ\")          # uses all bytes\n\"ηβπ\"\n\njulia> sizeof(motto)\n6\n\njulia> length(motto)\n3\n\njulia> motto == StrF{10}(\"ηβπ\")        # 0x00 at byte 7\ntrue"
},

{
    "location": "#Related-1",
    "page": "Readme",
    "title": "Related",
    "category": "section",
    "text": "See StataDTAFiles.jl."
},

{
    "location": "autodocs/#StrFs.StrF",
    "page": "Docstrings",
    "title": "StrFs.StrF",
    "category": "type",
    "text": "StrF{S}(::String)\n\nA string of less than S bytes, represented using 0-terminated UTF-8.\n\nInternal representation\n\nbytes are stored as an SVector{S, UInt8}, where S is the maximum number of bytes. They are not validated to be conforming UTF-8. A terminating 0x00 follows if and only if the string is shorter than S bytes.\n\nThis follows the str# (\"sturfs\") representation of Stata.\n\nOperations\n\nA comparisons, conversion, and a few operations are supported, but this is primarily meant as a storage type. For complex manipulations, it is recommended that you convert to String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StrFs.@strf_strStrFs.StrFStrFs.StrFsStrFs.evalStrFs.include"
},

]}
