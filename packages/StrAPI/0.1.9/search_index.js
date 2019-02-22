var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StrAPI-1",
    "page": "Readme",
    "title": "StrAPI",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/StrAPI.jl [travis-s-img]: https://travis-ci.org/JuliaString/StrAPI.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/StrAPI.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/strapi-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/strapi-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/pyw9o1y3wywo95tt?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/pyw9o1y3wywo95tt/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/StrAPI [pkg-m-url]:    http://pkg.julialang.org/detail/StrAPI [pkg-s-img]:    http://pkg.julialang.org/badges/StrAPI0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/StrAPI0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/StrAPI.jl [codecov-img]:  https://codecov.io/gh/JuliaString/StrAPI.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/StrAPI.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/StrAPI.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/StrAPI.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/StrAPI.jl/badge.svg?branch=masterThis package provides the base API, which the other packages in JuliaString can all extend It provides a cleaner API (IMO) for many of the character and string related functions.See the documentation in the Strs package"
},

{
    "location": "autodocs/#StrAPI.CharSetASCIICompat",
    "page": "Docstrings",
    "title": "StrAPI.CharSetASCIICompat",
    "category": "type",
    "text": "Characters 0-0x7f same as ASCII\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CharSetBMP",
    "page": "Docstrings",
    "title": "StrAPI.CharSetBMP",
    "category": "type",
    "text": "Characters 0-0xd7ff, 0xe000-0xffff follow Unicode BMP\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CharSetBinary",
    "page": "Docstrings",
    "title": "StrAPI.CharSetBinary",
    "category": "type",
    "text": "8-bit Binary string, not text\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CharSetISOCompat",
    "page": "Docstrings",
    "title": "StrAPI.CharSetISOCompat",
    "category": "type",
    "text": "Characters 0-0x9f follows ISO 8859\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CharSetOther",
    "page": "Docstrings",
    "title": "StrAPI.CharSetOther",
    "category": "type",
    "text": "Codepoints are not in Unicode compatible order\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CharSetStyle",
    "page": "Docstrings",
    "title": "StrAPI.CharSetStyle",
    "category": "type",
    "text": "CharSetStyle(A)\nCharSetStyle(typeof(A))\n\nCharSetStyle specifies the information about the character set used by the string or characters. When you define a new AbstractString or AbstractChar type, you can choose to implement it with\n\nStrAPI.CharSetStyle(::Type{<:MyString}) = StrAPI.CharSetISOCompat()\n\nThe default is CharSetUnicode()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CharSetUnicode",
    "page": "Docstrings",
    "title": "StrAPI.CharSetUnicode",
    "category": "type",
    "text": "Full Unicode character set, no additions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CharSetUnicodePlus",
    "page": "Docstrings",
    "title": "StrAPI.CharSetUnicodePlus",
    "category": "type",
    "text": "Unicode character set, plus encodings of invalid characters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CharSetUnknown",
    "page": "Docstrings",
    "title": "StrAPI.CharSetUnknown",
    "category": "type",
    "text": "Raw bytes, words, or character string, unknown encoding/character set\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.CompareStyle",
    "page": "Docstrings",
    "title": "StrAPI.CompareStyle",
    "category": "type",
    "text": "CompareStyle(Union{A, typeof(A)}, Union{B, typeof(B)})\n\nCompareStyle specifies how to compare two strings with character set encodings A and B\n\nStrAPI.CompareStyle(::Type{<:MyString}, ::Type{String}) = StrAPI.ByteCompare()\n\nThe default is CodePointCompare\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.EncodingStyle",
    "page": "Docstrings",
    "title": "StrAPI.EncodingStyle",
    "category": "type",
    "text": "EncodingStyle(A)\nEncodingStyle(typeof(A))\n\nEncodingStyle specifies the whether a character set encoding uses one or multiple codeunits to encode a single codepoint. When you define a new AbstractString type, you can choose to implement it with either single or multi-codeunit indexing.\n\nStrAPI.EncodingStyle(::Type{MyCharSetEncoding}) = StrAPI.MultiCodeUnitEncoding()\n\nThe default is SingleCodeUnitEncoding()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.StrAPI",
    "page": "Docstrings",
    "title": "StrAPI.StrAPI",
    "category": "module",
    "text": "StrAPI package\n\nCopyright 2017-2018 Gandalf Software, Inc., Scott P. Jones Licensed under MIT License, see LICENSE.md\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.StrErrors",
    "page": "Docstrings",
    "title": "StrAPI.StrErrors",
    "category": "module",
    "text": "Based partly on code in LegacyStrings that used to be part of Julia Licensed under MIT License, see LICENSE.md\n\n(Written by Scott P. Jones in series of PRs contributed to the Julia project in 2015)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.Uni",
    "page": "Docstrings",
    "title": "StrAPI.Uni",
    "category": "module",
    "text": "Unicode Normalization, Category constants and documentation\n\nCopyright 2017-2018 Gandalf Software, Inc. Scott P. Jones, and other contributors to the UTF8proc library (for the documentation of the API)\n\nLicensed under MIT License, see LICENSE.md\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.ValidatedStyle",
    "page": "Docstrings",
    "title": "StrAPI.ValidatedStyle",
    "category": "type",
    "text": "ValidatedStyle(A)\nValidatedStyle(typeof(A))\n\nValidatedStyle specifies the whether a string or character type is always valid or not When you define a new AbstractString or AbstractChar type, you can choose to implement it as always validated, or validation state unknown.\n\nStrAPI.ValidatedStyle(::Type{<:MyCharType}) = StrAPI.AlwaysValid()\n\nThe default is UnknownValidity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.basetype",
    "page": "Docstrings",
    "title": "StrAPI.basetype",
    "category": "function",
    "text": "Get the base type (of CodeUnitTypes) of a character or aligned/swapped type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.charset",
    "page": "Docstrings",
    "title": "StrAPI.charset",
    "category": "function",
    "text": "Get the character set used by a string or character type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.codepoints",
    "page": "Docstrings",
    "title": "StrAPI.codepoints",
    "category": "function",
    "text": "codepoints(str)\n\nAn iterator that generates the code points of a string\n\nExamples\n\njulia> a = str(\"abc🖖\")\n\njulia> collect(a)\n\njulia> collect(codepoints(a))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.cse",
    "page": "Docstrings",
    "title": "StrAPI.cse",
    "category": "function",
    "text": "Get the character set / encoding used by a string type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.curmod",
    "page": "Docstrings",
    "title": "StrAPI.curmod",
    "category": "module",
    "text": "StrAPI package\n\nCopyright 2017-2018 Gandalf Software, Inc., Scott P. Jones Licensed under MIT License, see LICENSE.md\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.encoding",
    "page": "Docstrings",
    "title": "StrAPI.encoding",
    "category": "function",
    "text": "Get the character set used by a string type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrAPI.is_multi",
    "page": "Docstrings",
    "title": "StrAPI.is_multi",
    "category": "function",
    "text": "Determine if a string has multiple codeunit encoding\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StrAPI.ASCIICompareStrAPI.AllStrAPI.AlwaysValidStrAPI.ByteCompareStrAPI.CharSetASCIICompatStrAPI.CharSetBMPStrAPI.CharSetBinaryStrAPI.CharSetISOCompatStrAPI.CharSetOtherStrAPI.CharSetStyleStrAPI.CharSetUnicodeStrAPI.CharSetUnicodePlusStrAPI.CharSetUnknownStrAPI.CodePointCompareStrAPI.CodePointsStrAPI.CodeUnitTypesStrAPI.CompareStyleStrAPI.DirectionStrAPI.EachStrAPI.EncodingStyleStrAPI.FindOpStrAPI.FirstStrAPI.FwdStrAPI.LastStrAPI.MaybeSubStrAPI.MultiCodeUnitEncodingStrAPI.NEW_ITERATEStrAPI.NextStrAPI.NoCompareStrAPI.PrevStrAPI.RevStrAPI.SingleCodeUnitEncodingStrAPI.StrAPIStrAPI.StrErrorsStrAPI.StringErrorStrAPI.UCStrAPI.UTF16CompareStrAPI.UniStrAPI.UnicodeStrAPI.UnknownValidityStrAPI.ValidatedStyleStrAPI.WidenCompareStrAPI.WordCompareStrAPI.__api__StrAPI.__tmp_api__StrAPI._isvalidStrAPI._lowercaseStrAPI._printStrAPI._repmsgStrAPI._titlecaseStrAPI._uppercaseStrAPI._writeStrAPI.argerrorStrAPI.ascii_errStrAPI.basetypeStrAPI.boundserrStrAPI.category_abbrevStrAPI.category_codeStrAPI.category_stringStrAPI.charsetStrAPI.chr2indStrAPI.codepoint_errorStrAPI.codepointsStrAPI.create_vectorStrAPI.cseStrAPI.curmodStrAPI.encodingStrAPI.ends_withStrAPI.evalStrAPI.findStrAPI.find_resultStrAPI.fndStrAPI.foundStrAPI.get_iobufferStrAPI.graphemesStrAPI.includeStrAPI.ind2chrStrAPI.index_errorStrAPI.is_alphabeticStrAPI.is_alphanumericStrAPI.is_asciiStrAPI.is_assignedStrAPI.is_bmpStrAPI.is_controlStrAPI.is_definedStrAPI.is_digitStrAPI.is_emptyStrAPI.is_grapheme_breakStrAPI.is_grapheme_break!StrAPI.is_graphicStrAPI.is_hex_digitStrAPI.is_latinStrAPI.is_letterStrAPI.is_lowercaseStrAPI.is_multiStrAPI.is_numericStrAPI.is_printableStrAPI.is_punctuationStrAPI.is_spaceStrAPI.is_unicodeStrAPI.is_uppercaseStrAPI.is_validStrAPI.lowercase_firstStrAPI.namlstStrAPI.ncharerrStrAPI.neginderrStrAPI.nulerrStrAPI.occurs_inStrAPI.outhexStrAPI.pr_ulStrAPI.pwcStrAPI.quotesymStrAPI.repeaterrStrAPI.starts_withStrAPI.str_doneStrAPI.str_nextStrAPI.strerrorStrAPI.symstrStrAPI.text_widthStrAPI.uppercase_firstStrAPI.utf8crc"
},

]}
