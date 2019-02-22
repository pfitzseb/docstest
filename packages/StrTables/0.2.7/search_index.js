var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StrTables:-1",
    "page": "Readme",
    "title": "StrTables:",
    "category": "section",
    "text": ""
},

{
    "location": "#Support-for-creating-packed-tables-of-strings-and-save/load-simple-tables-with-values-1",
    "page": "Readme",
    "title": "Support for creating packed tables of strings and save/load simple tables with values",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/StrTables.jl [travis-s-img]: https://travis-ci.org/JuliaString/StrTables.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/StrTables.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/strtables-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/strtables-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/ekt5t6nt8g0cqhjb?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/ekt5t6nt8g0cqhjb/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/StrTables [pkg-m-url]:    http://pkg.julialang.org/detail/StrTables [pkg-s-img]:    http://pkg.julialang.org/badges/StrTables0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/StrTables0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/StrTables.jl [codecov-img]:  https://codecov.io/gh/JuliaString/StrTables.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/StrTables.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/StrTables.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/StrTables.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/StrTables.jl/badge.svg?branch=masterThis is used to build compact tables that can be used to create things like entity mappings It also provides simple load/save functions to save and then load string tables along with other simple types (UInt8..UInt64, Int8..Int64, Float32, Float64, vectors of those types, and String) to/from a file.Doing so can eliminate a lot of JITing time needed just to parse and then create a table from Julia source, and when Julia can be used to build executables, allows the tables to be updated without recompiling the executable."
},

{
    "location": "autodocs/#StrTables.AbstractEntityTable",
    "page": "Docstrings",
    "title": "StrTables.AbstractEntityTable",
    "category": "type",
    "text": "Abstract type for Entity tables: Supports lookupname, matchchar, matches, longestmatches, completions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.PackedTable",
    "page": "Docstrings",
    "title": "StrTables.PackedTable",
    "category": "type",
    "text": "Compact table Designed to save memory compared to a Vector{Vector{S}} Allows for fast lookup of ranges when input was sorted Can be saved/loaded to/from a file quickly\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.StrTable",
    "page": "Docstrings",
    "title": "StrTables.StrTable",
    "category": "type",
    "text": "Compact string table Designed to save memory compared to a Vector{String} Allows for fast lookup of ranges when input was sorted Can be saved/loaded to/from a file quickly\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.StrTables",
    "page": "Docstrings",
    "title": "StrTables.StrTables",
    "category": "module",
    "text": "Simple String Table and load/save functions\n\nAuthor:     Scott Paul Jones Copyright:  2017-2018 Gandalf Software, Inc (and any future contributors) License:    MIT (see https://github.com/JuliaString/StrTables.jl/blob/master/LICENSE.md)\n\nPublic API:\n\nExported:\n\nStrTable takes a Vector of some AbstractString type and returns a compact string table, that acts as a AbstractVector{String}\n\nNot exported:\n\nmatchfirst takes a sorted string table and a string, returns a vector of elements that start with the string\nmatchfirstrng takes a sorted string table and a string, returns the range of indexes of elements start with the string\nsave takes a filename and a collection (of simple types) and saves them to the file in a simple format\nload takes a filename and returns a Vector of the values stored by save in the file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.completions",
    "page": "Docstrings",
    "title": "StrTables.completions",
    "category": "function",
    "text": "Given a string, return all of the entity names that start with that string, if any\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.load",
    "page": "Docstrings",
    "title": "StrTables.load",
    "category": "function",
    "text": "Return a Vector{Any} with data tables loaded from IO\n\n\n\n\n\nReturn a Vector{Any} with data tables loaded from file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.longestmatches",
    "page": "Docstrings",
    "title": "StrTables.longestmatches",
    "category": "function",
    "text": "Given a string, return all of the longest matches to the beginning of the string as a vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.lookupname",
    "page": "Docstrings",
    "title": "StrTables.lookupname",
    "category": "function",
    "text": "Given an entity name, return the string it represents, or an empty string if not found\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.matchchar",
    "page": "Docstrings",
    "title": "StrTables.matchchar",
    "category": "function",
    "text": "Given a character, return all exact matches to the character as a vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.matches",
    "page": "Docstrings",
    "title": "StrTables.matches",
    "category": "function",
    "text": "Given a string, return all exact matches to the string as a vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.matchfirst",
    "page": "Docstrings",
    "title": "StrTables.matchfirst",
    "category": "function",
    "text": "Return a vector of values that whose beginning matches the string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.matchfirstrng",
    "page": "Docstrings",
    "title": "StrTables.matchfirstrng",
    "category": "function",
    "text": "Return the range of indices of values that whose beginning matches the string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.read_value",
    "page": "Docstrings",
    "title": "StrTables.read_value",
    "category": "function",
    "text": "Read a single StrTable, String, UInt, or Vector of UInt value from the io device\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrTables.save",
    "page": "Docstrings",
    "title": "StrTables.save",
    "category": "function",
    "text": "Save a collection of values (StrTable, String, Float, UInt, Int*) into an IO object\n\n\n\n\n\nSave a collection of values (StrTable, String, Float, UInt, Int*) into a file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StrTables.AbstractEntityTableStrTables.AbstractPackedTableStrTables.BASE_CODEStrTables.MAX_CODEStrTables.PACKED_CODEStrTables.PackedTableStrTables.STRING1_CODEStrTables.STRING2_CODEStrTables.STRING4_CODEStrTables.STRTAB_CODEStrTables.StrTableStrTables.StrTablesStrTables.SupTypesStrTables.V6_COMPATStrTables.VECTOR_CODEStrTables.VERStrTables._codeunitsStrTables._containsStrTables._empty_strStrTables._empty_str_vecStrTables._get_codeStrTables._get_strStrTables._get_stringsStrTables._get_val2cStrTables._getsizeStrTables._lexcmpStrTables._ltvecStrTables._memcmpStrTables._replaceStrTables._veccmpStrTables.completionsStrTables.create_vectorStrTables.cvt_charStrTables.evalStrTables.includeStrTables.loadStrTables.longestmatchesStrTables.lookupnameStrTables.matchcharStrTables.matchesStrTables.matchfirstStrTables.matchfirstrngStrTables.nowStrTables.pack_tableStrTables.parse_hexStrTables.read_valueStrTables.read_vectorStrTables.saveStrTables.sortsplit!StrTables.type_tabStrTables.write_value"
},

]}
