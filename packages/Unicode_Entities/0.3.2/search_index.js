var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Unicode_Entities:-Support-for-using-Unicode-entity-names-for-characters-1",
    "page": "Readme",
    "title": "Unicode_Entities: Support for using Unicode entity names for characters",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/UnicodeEntities.jl [travis-s-img]: https://travis-ci.org/JuliaString/UnicodeEntities.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/Unicode_Entities.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/unicode-entities-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/unicode-entities-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/c1luci97ry8fxdt7?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/c1luci97ry8fxdt7/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/UnicodeEntities [pkg-m-url]:    http://pkg.julialang.org/detail/UnicodeEntities [pkg-s-img]:    http://pkg.julialang.org/badges/UnicodeEntities0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/UnicodeEntities0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/UnicodeEntities.jl [codecov-img]:  https://codecov.io/gh/JuliaString/UnicodeEntities.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/UnicodeEntities.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/UnicodeEntities.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/UnicodeEntities.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/UnicodeEntities.jl/badge.svg?branch=master"
},

{
    "location": "#Unicode_Entities.jl-1",
    "page": "Readme",
    "title": "Unicode_Entities.jl",
    "category": "section",
    "text": "This builds tables for looking up Unicode entity names and returning the Unicode character(s), looking up a character or pair of characters and finding Unicode entity names that return it/them, and finding all of the Unicode name completions for a particular string, if any."
},

{
    "location": "autodocs/#Unicode_Entities.Unicode_Entities",
    "page": "Docstrings",
    "title": "Unicode_Entities.Unicode_Entities",
    "category": "module",
    "text": "Public API (nothing is exported)\n\nlookupname(str)\nmatchchar(char)\nmatches(str)\nlongestmatches(str)\ncompletions(str)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unicode_Entities._unpackword",
    "page": "Docstrings",
    "title": "Unicode_Entities._unpackword",
    "category": "function",
    "text": "Internal function to unpack the packed Unicode entity names\n\nUnicode has a very limited character set for the entity names, 0-9, A-Z, -, (, and ). ( and ) are only used for 4 names, so those are special cased to store in the word table.\n\n0 represents a space, when needed between characters 1 represents a hyphen 2-11 represents the digits 0-9 12-37 represents the letters A-Z 38-53 represents up to 16*256 words stored in the wrd2 table 54-255 represent 202 words stored in the wrd1 table\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Unicode_Entities.PackedNamesUnicode_Entities.Unicode_EntitiesUnicode_Entities.Unicode_TableUnicode_Entities.VERUnicode_Entities.__init__Unicode_Entities._unpackwordUnicode_Entities.defaultUnicode_Entities.evalUnicode_Entities.include"
},

]}
