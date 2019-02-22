var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StrBase-1",
    "page": "Readme",
    "title": "StrBase",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/StrBase.jl [travis-s-img]: https://travis-ci.org/JuliaString/StrBase.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/StrBase.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/strbase-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/strbase-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/2v12uwlr0ueale6n?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/2v12uwlr0ueale6n/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/StrBase [pkg-m-url]:    http://pkg.julialang.org/detail/StrBase [pkg-s-img]:    http://pkg.julialang.org/badges/StrBase0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/StrBase0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/StrBase.jl [codecov-img]:  https://codecov.io/gh/JuliaString/StrBase.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/StrBase.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/StrBase.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/StrBase.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/StrBase.jl/badge.svg?branch=masterSee the documentation in the Strs package, this package contains the basic functionality, which can be used by other string related packages."
},

{
    "location": "autodocs/#StrBase.CanContain",
    "page": "Docstrings",
    "title": "StrBase.CanContain",
    "category": "function",
    "text": "CanContain(Union{A, typeof(A)}, Union{B, typeof(B)})\n\nCanContainStyle specifies whether the first string can contain a substring of the second type,     and if so, what is the most efficient method of comparison\n\nCanContain(::Type{<:MyString}, ::Type{String}) = ByteCompare()\n\nReturns an instance of type CompareStyle, default CodePointCompare\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.EqualsStyle",
    "page": "Docstrings",
    "title": "StrBase.EqualsStyle",
    "category": "function",
    "text": "EqualsStyle(Union{A, typeof(A)}, Union{B, typeof(B)})\n\nEqualsStyle specifies whether the first string can equal a substring of the second type,     and if so, what is the most efficient method of comparison\n\nThis is determined by the CanContain trait Returns an instance of type CompareStyle, default CodePointCompare\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.MutableStyle",
    "page": "Docstrings",
    "title": "StrBase.MutableStyle",
    "category": "type",
    "text": "MutableStyle(A)\nMutableStyle(typeof(A))\n\nMutableStyle specifies the whether a string type is mutable or not\n\nMutableStyle(::Type{<:MyString}) = MutableStr()\n\nThe default is ImmutableStr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.StrBase",
    "page": "Docstrings",
    "title": "StrBase.StrBase",
    "category": "module",
    "text": "StrBase package\n\nCopyright 2017-2018 Gandalf Software, Inc., Scott P. Jones, and other contributors to the Julia language Licensed under MIT License, see LICENSE.md Based partly on code in LegacyStrings that used to be part of Julia\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.UniStr",
    "page": "Docstrings",
    "title": "StrBase.UniStr",
    "category": "constant",
    "text": "Union type for fast dispatching\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase._cmp_str",
    "page": "Docstrings",
    "title": "StrBase._cmp_str",
    "category": "function",
    "text": "Compare two strings, starting at nxtstr and nxtsub\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase._data",
    "page": "Docstrings",
    "title": "StrBase._data",
    "category": "function",
    "text": "Codeunits of string as a Vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase._encode_utf16",
    "page": "Docstrings",
    "title": "StrBase._encode_utf16",
    "category": "function",
    "text": "Converts an already validated UTF-8 encoded vector of UInt8 to a UTF16Str\n\nInput Arguments:\n\npnt Ptr{UInt8} of UTF-8 encoded data\nlen length of output in 16-bit words\n\nReturns:\n\nUTF16Str\n\n\n\n\n\nConverts an already validated UTF-32 encoded vector of UInt32 to a UTF16Str\n\nInput Arguments:\n\ndat Vector{UInt32} of UTF-32 encoded data\nlen length of output in 16-bit words\n\nReturns:\n\nVector{UInt8}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase._encode_utf8",
    "page": "Docstrings",
    "title": "StrBase._encode_utf8",
    "category": "function",
    "text": "Converts an already validated vector of UInt16 or UInt32 to a UTF8Str\n\nInput Arguments:\n\ndat Vector of code units (UInt16 or UInt32)\nlen length of output in bytes\n\nReturns:\n\nUTF8Str\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase._maprest",
    "page": "Docstrings",
    "title": "StrBase._maprest",
    "category": "function",
    "text": "Handle case where result vector is longer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.check_string",
    "page": "Docstrings",
    "title": "StrBase.check_string",
    "category": "function",
    "text": "Validates and calculates number of characters in a UTF-8,UTF-16 or UTF-32 encoded vector/string\n\nThis function checks the bounds of the start and end positions Use unsafe_check_string to avoid that overhead if the bounds have already been checked\n\nInput Arguments:\n\ndat    UTF-8 (Vector{UInt8}), UTF-16 (Vector{UInt16}) or UTF-32 (Vector{UInt32}, AbstractString) encoded string\n\nOptional Input Arguments:\n\nstartpos start position (defaults to 1)\nendpos   end position   (defaults to lastindex(dat))\n\nKeyword Arguments:\n\naccept_long_null  = false  # Modified UTF-8 (\\0 represented as b\"\\xc0\\x80\")\naccept_surrogates = false  # CESU-8\naccept_long_char  = false  # Accept arbitrary long encodings\naccept_invalids   = false  # Accept invalid sequences (to be replaced on conversion)\n\nReturns:\n\n(total characters, flags, 4-byte, 3-byte, 2-byte)\n\nThrows:\n\nStringError\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.check_utf8",
    "page": "Docstrings",
    "title": "StrBase.check_utf8",
    "category": "function",
    "text": "Return index of first invalid codeunit (negative), 0 if all ASCII, or index of first non-ASCII codeunit\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.count_chars",
    "page": "Docstrings",
    "title": "StrBase.count_chars",
    "category": "function",
    "text": "Calculate the total number of characters, as well as number of latin1, 2-byte, 3-byte, and 4-byte sequences in a validated UTF-8 string\n\n\n\n\n\nCalculate the total number of characters, as well as number of latin1, 2-byte, 3-byte, and 4-byte sequences in a validated UTF-16, UCS2, or UTF-32 string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.count_latin",
    "page": "Docstrings",
    "title": "StrBase.count_latin",
    "category": "function",
    "text": "Calculate the total number of bytes > 0x7f\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.unsafe_check_string",
    "page": "Docstrings",
    "title": "StrBase.unsafe_check_string",
    "category": "function",
    "text": "Validates and calculates number of characters in a UTF-8,UTF-16 or UTF-32 encoded vector/string\n\nWarning: this function does not check the bounds of the start or end positions Use check_string to make sure the bounds are checked\n\nInput Arguments:\n\ndat    UTF-8 (Vector{UInt8}), UTF-16 (Vector{UInt16}) or UTF-32 (Vector{UInt32}, AbstractString) encoded string\npos    start position\nendpos end position\n\nKeyword Arguments:\n\naccept_long_null  = false  # Modified UTF-8 (\\0 represented as b\"\\xc0\\x80\")\naccept_surrogates = false  # CESU-8\naccept_long_char  = false  # Accept arbitrary long encodings\naccept_invalids   = false  # Accept invalid sequences (to be replaced on conversion)\n\nReturns:\n\n(total characters, flags, 4-byte, 3-byte, 2-byte)\n\nThrows:\n\nStringError\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.unsafe_str",
    "page": "Docstrings",
    "title": "StrBase.unsafe_str",
    "category": "function",
    "text": "Convert to a UniStr if valid Unicode, otherwise return a Text1Str\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.utf16",
    "page": "Docstrings",
    "title": "StrBase.utf16",
    "category": "function",
    "text": "utf16(s)\n\nCreate a UTF-16 string from a byte array, array of UInt16, or any other string type. (Data must be valid UTF-16. Conversions of byte arrays check for a byte-order marker in the first two bytes, and do not include it in the resulting string.)\n\n\n\n\n\nutf16(::Union{Ptr{UInt16}, Ptr{Int16}} [, length])\n\nCreate a string from the address of a NUL-terminated UTF-16 string. A copy is made; the pointer can be safely freed. If length is specified, the string does not have to be NUL-terminated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.utf32",
    "page": "Docstrings",
    "title": "StrBase.utf32",
    "category": "function",
    "text": "utf32(s)\n\nCreate a UTF-32 string from a byte array, array of Char or UInt32, or any other string type. (Conversions of byte arrays check for a byte-order marker in the first four bytes, and do not include it in the resulting string.)\n\n\n\n\n\nutf32(::Ptr{UInt32}, [, length])\n\nCreate a string from the address of a NUL-terminated UTF-32 string. A copy is made; the pointer can be safely freed. If length is specified, the string does not have to be NUL-terminated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrBase.utf8",
    "page": "Docstrings",
    "title": "StrBase.utf8",
    "category": "function",
    "text": "utf8(s)\n\nCreate a UTF-8 string from a byte array, array of UInt8, or any other string type. (Data must be valid UTF-8. Conversions of byte arrays check for a byte-order marker in the first two bytes, and do not include it in the resulting string.)\n\n\n\n\n\nutf8(::Union{Ptr{UInt8}, Ptr{Int8}} [, length])\n\nCreate a string from the address of a NUL-terminated UTF-8 string. A copy is made; the pointer can be safely freed. If length is specified, the string does not have to be NUL-terminated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StrBase.ASCIIStrStrBase.ASCIISubStrStrBase.AccessTypeStrBase.BinaryStrStrBase.CHUNKMSKStrBase.CHUNKSZStrBase.CTStrBase.CanContainStrBase.CharStatStrBase.CharTypesStrBase.EqualsStyleStrBase.HAS_WMEMStrBase.ImmutableStrStrBase.LatinStrStrBase.LatinSubStrStrBase.LineCountsStrBase.MCUStrBase.MS_ASCIILatinStrBase.MS_ByteStrStrBase.MS_LatinStrBase.MS_RawUTF8StrBase.MS_SubUTF32StrBase.MS_UTF16StrBase.MS_UTF32StrBase.MS_UTF8StrBase.MultiCUStrBase.MutableStrStrBase.MutableStyleStrBase.OthChrStrBase.RawUTF16StrStrBase.RawUTF8StrStrBase.SCUStrBase.STR_KEEP_NULStrBase.SetOfCharsStrBase.SingleCUStrBase.StrStrBase.StrBaseStrBase.Text1StrStrBase.Text2StrStrBase.Text4StrStrBase.UCS2StrStrBase.UInt16_SStrBase.UInt16_UStrBase.UInt16_USStrBase.UInt32_SStrBase.UInt32_UStrBase.UInt32_USStrBase.UTF16StrStrBase.UTF32StrStrBase.UTF8StrStrBase.UTF_INVALIDStrBase.UTF_LATIN1StrBase.UTF_LONGStrBase.UTF_SURROGATEStrBase.UTF_UNICODE2StrBase.UTF_UNICODE3StrBase.UTF_UNICODE4StrBase.UniRawCharStrBase.UniStrStrBase.WidChrStrBase.WideCodeUnitStrBase._LatinStrStrBase._LatinSubStrStrBase._UCS2StrStrBase._UTF32StrStrBase.__api__StrBase.__replaceStrBase.__rsplitStrBase.__splitStrBase.__tmp_api__StrBase._align_len_utf16StrBase._align_len_utf8StrBase._aligned_setStrBase._all_bmpStrBase._all_latinStrBase._allocateStrBase._ascii_maskStrBase._bmp_maskStrBase._bmp_mask_32StrBase._calc_lenStrBase._calcpntStrBase._check_bloom_maskStrBase._check_bmp_utf16_alStrBase._check_bmp_utf16_ulStrBase._check_bmp_utf8_alStrBase._check_bmp_utf8_ulStrBase._check_charStrBase._check_latin_utf8_alStrBase._check_latin_utf8_ulStrBase._check_mask_alStrBase._check_mask_ulStrBase._check_uppercaseStrBase._check_utf8StrBase._check_utf8_alStrBase._check_utf8_restStrBase._cmpStrBase._cmp_strStrBase._cmp_utf16StrBase._cnt_non_bmpStrBase._collectstrStrBase._convertStrBase._convert_asciiStrBase._convert_utf_nStrBase._copysubStrBase._count_contStrBase._count_mask_alStrBase._count_mask_ulStrBase._cpcmpStrBase._cpeqStrBase._cpyconvertStrBase._cpysubsetStrBase._cvt_16_to_utf8StrBase._cvt_utf8StrBase._cvtsizeStrBase._dataStrBase._empty_subStrBase._encode_ascii_latinStrBase._encode_char_utf8StrBase._encode_utf16StrBase._encode_utf32StrBase._encode_utf8StrBase._fasteqStrBase._fastwriteStrBase._fwd_memchrStrBase._get_bmp_maskStrBase._get_dirStrBase._get_leadStrBase._get_maskedStrBase._getindexStrBase._hashStrBase._hash_absStrBase._hi_bit_16StrBase._indexStrBase._is_latin_ucs2StrBase._iseqStrBase._ismutableStrBase._isvalid_char_posStrBase._iterateStrBase._iterate_utf8StrBase._joinStrBase._joincvtStrBase._joinioStrBase._lastindexStrBase._latin_maskStrBase._latin_to_utf8StrBase._lengthStrBase._length_alStrBase._length_checkStrBase._lenpntfinStrBase._loadStrBase._lowerStrBase._lower_utf8StrBase._lpadStrBase._mapStrBase._maprestStrBase._mask_allsurrStrBase._mask_bytesStrBase._mask_surrStrBase._memcmpStrBase._memcmp16StrBase._memcpyStrBase._memhashStrBase._memsetStrBase._msk16StrBase._msk32StrBase._mskdn16StrBase._mskdn32StrBase._mskup16StrBase._mskup32StrBase._narrow!StrBase._nextStrBase._nextcpStrBase._nextcpfunStrBase._nextindStrBase._normalizeStrBase._not_foundStrBase._occurs_inStrBase._pnt64StrBase._previndStrBase._repeatStrBase._repeat_3StrBase._repeat_chrStrBase._repeat_strStrBase._ret_checkStrBase._rev_memchrStrBase._reverseStrBase._rpadStrBase._rsStrBase._search_bloom_maskStrBase._srch_codeunitStrBase._srch_cpStrBase._srch_predStrBase._srch_str_bloomStrBase._srch_stringsStrBase._strStrBase._str_cpyStrBase._stringStrBase._thisindStrBase._trail_maskStrBase._transcode_utf16_to_utf32StrBase._transcode_utf8StrBase._transcode_utf8_to_utf32StrBase._ulStrBase._unsafe_str8StrBase._upperStrBase._upper_utf8StrBase._utf8_to_latinStrBase._wide_lower_latinStrBase._wide_upperStrBase._widen!StrBase._wideneqStrBase._widenupperStrBase._wrap_substrStrBase.adjust_utf16StrBase.alignedtypeStrBase.alignpntStrBase.calc_typeStrBase.calcstatsStrBase.check_3byteStrBase.check_continuationStrBase.check_stringStrBase.check_utf8StrBase.check_validStrBase.checkcontStrBase.checkkeepStrBase.count_charsStrBase.count_latinStrBase.countmaskStrBase.cvthashStrBase.empty_asciiStrBase.empty_binaryStrBase.empty_latinStrBase.empty_rawutf16StrBase.empty_rawutf8StrBase.empty_strStrBase.empty_stringStrBase.empty_text1StrBase.empty_text2StrBase.empty_text4StrBase.empty_ucs2StrBase.empty_utf16StrBase.empty_utf32StrBase.empty_utf8StrBase.endparseStrBase.eq_bytesStrBase.evalStrBase.fast_check_stringStrBase.get_chStrBase.get_codeunitStrBase.get_cpStrBase.get_supplementaryStrBase.get_utf8_2byteStrBase.get_utf8_3byteStrBase.get_utf8_4byteStrBase.hi_maskStrBase.includeStrBase.indexStrBase.is_alignedStrBase.is_mutableStrBase.maxbitStrBase.mmhash128StrBase.msk_ascii_16StrBase.msk_latin_16StrBase.msk_leadStrBase.msk_num2b_16StrBase.nextStrBase.normalizeStrBase.nothing_sentinelStrBase.output_utf8_2byte!StrBase.output_utf8_3byte!StrBase.output_utf8_4byte!StrBase.pushchar!StrBase.reverseindStrBase.safe_copyStrBase.set_codeunit!StrBase.skipasciiStrBase.skipbmpStrBase.splitarrStrBase.swappedtypeStrBase.to_asciiStrBase.unsafe_check_stringStrBase.unsafe_strStrBase.utf16StrBase.utf32StrBase.utf8StrBase.utf8proc_mapStrBase.utf_length"
},

]}
