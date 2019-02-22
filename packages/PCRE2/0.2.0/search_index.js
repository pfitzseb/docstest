var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PCRE2-1",
    "page": "Readme",
    "title": "PCRE2",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/PCRE2.jl [travis-s-img]: https://travis-ci.org/JuliaString/PCRE2.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/PCRE2.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/pcre2-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/pcre2-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/d62uhoik906m7n8r?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/d62uhoik906m7n8r/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/PCRE2 [pkg-m-url]:    http://pkg.julialang.org/detail/PCRE2 [pkg-s-img]:    http://pkg.julialang.org/badges/PCRE20.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/PCRE20.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/PCRE2.jl [codecov-img]:  https://codecov.io/gh/JuliaString/PCRE2.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/PCRE2.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/PCRE2.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/PCRE2.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/PCRE2.jl/badge.svg?branch=masterThe PCRE2 package implements a low-level API for accessing the PCRE libraries (8, 16, and 32-bit) It is intended to replace Base.PCRE, which is not threadsafe, only supports UTF-8, and is using an old version of the PCRE library (10.30, current version is 10.31)"
},

{
    "location": "autodocs/#PCRE2.compile",
    "page": "Docstrings",
    "title": "PCRE2.compile",
    "category": "function",
    "text": "Wrapper for compile() function, throw error on error return with error info\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PCRE2.info",
    "page": "Docstrings",
    "title": "PCRE2.info",
    "category": "function",
    "text": "PCRE2 pattern_info call wrapper\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PCRE2.jit_compile",
    "page": "Docstrings",
    "title": "PCRE2.jit_compile",
    "category": "function",
    "text": "Wrapper for jit_compile() function, throw error on error return with error info\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PCRE2.ALLOW_EMPTY_CLASSPCRE2.ALT_BSUXPCRE2.ALT_CIRCUMFLEXPCRE2.ALT_VERBNAMESPCRE2.ANCHOREDPCRE2.AUTO_CALLOUTPCRE2.BSR_ANYCRLFPCRE2.BSR_UNICODEPCRE2.CASELESSPCRE2.COMMON_MASKPCRE2.COMPILE_MASKPCRE2.CONFIGPCRE2.CONFIG_BSRPCRE2.CONFIG_COMPILED_WIDTHSPCRE2.CONFIG_DEPTHLIMITPCRE2.CONFIG_HEAPLIMITPCRE2.CONFIG_JITPCRE2.CONFIG_JITTARGETPCRE2.CONFIG_LINKSIZEPCRE2.CONFIG_MATCHLIMITPCRE2.CONFIG_NEVER_BACKSLASH_CPCRE2.CONFIG_NEWLINEPCRE2.CONFIG_PARENSLIMITPCRE2.CONFIG_STACKRECURSEPCRE2.CONFIG_UNICODEPCRE2.CONFIG_UNICODE_VERSIONPCRE2.CONFIG_VERSIONPCRE2.CONVERT_GLOBPCRE2.CONVERT_GLOB_NO_STARSTARPCRE2.CONVERT_GLOB_NO_WILD_SEPARATORPCRE2.CONVERT_NO_UTF_CHECKPCRE2.CONVERT_POSIX_BASICPCRE2.CONVERT_POSIX_EXTENDEDPCRE2.CONVERT_UTFPCRE2.CodePPCRE2.CodeUnitTypesPCRE2.CompileContextPPCRE2.CompileOptionsPCRE2.ConvertContextPPCRE2.DFA_RESTARTPCRE2.DFA_SHORTESTPCRE2.DOLLAR_ENDONLYPCRE2.DOTALLPCRE2.DUPNAMESPCRE2.ENDANCHOREDPCRE2.EXTENDEDPCRE2.EXTENDED_MOREPCRE2.EXTRA_ALLOW_SURROGATE_ESCAPESPCRE2.EXTRA_BAD_ESCAPE_IS_LITERALPCRE2.EXTRA_MATCH_LINEPCRE2.EXTRA_MATCH_WORDPCRE2.FIRSTLINEPCRE2.GeneralContextPPCRE2.INFOPCRE2.INFO_ALLOPTIONSPCRE2.INFO_ARGOPTIONSPCRE2.INFO_BACKREFMAXPCRE2.INFO_BSRPCRE2.INFO_CAPTURECOUNTPCRE2.INFO_DEPTHLIMITPCRE2.INFO_EXTRAOPTIONSPCRE2.INFO_FIRSTBITMAPPCRE2.INFO_FIRSTCODETYPEPCRE2.INFO_FIRSTCODEUNITPCRE2.INFO_FRAMESIZEPCRE2.INFO_HASBACKSLASHCPCRE2.INFO_HASCRORLFPCRE2.INFO_HEAPLIMITPCRE2.INFO_JCHANGEDPCRE2.INFO_JITSIZEPCRE2.INFO_LASTCODETYPEPCRE2.INFO_LASTCODEUNITPCRE2.INFO_MATCHEMPTYPCRE2.INFO_MATCHLIMITPCRE2.INFO_MAXLOOKBEHINDPCRE2.INFO_MINLENGTHPCRE2.INFO_NAMECOUNTPCRE2.INFO_NAMEENTRYSIZEPCRE2.INFO_NAMETABLEPCRE2.INFO_NEWLINEPCRE2.INFO_SIZEPCRE2.JIT_COMPLETEPCRE2.JIT_PARTIAL_HARDPCRE2.JIT_PARTIAL_SOFTPCRE2.JitStackPPCRE2.LITERALPCRE2.MATCH_MASKPCRE2.MATCH_UNSET_BACKREFPCRE2.MULTILINEPCRE2.MatchContextPPCRE2.MatchDataPPCRE2.MatchOptionsPCRE2.NEVER_BACKSLASH_CPCRE2.NEVER_UCPPCRE2.NEVER_UTFPCRE2.NEWLINE_ANYPCRE2.NEWLINE_ANYCRLFPCRE2.NEWLINE_CRPCRE2.NEWLINE_CRLFPCRE2.NEWLINE_LFPCRE2.NEWLINE_NULPCRE2.NL_MASKPCRE2.NOTBOLPCRE2.NOTEMPTYPCRE2.NOTEMPTY_ATSTARTPCRE2.NOTEOLPCRE2.NO_AUTO_CAPTUREPCRE2.NO_AUTO_POSSESSPCRE2.NO_DOTSTAR_ANCHORPCRE2.NO_JITPCRE2.NO_START_OPTIMIZEPCRE2.NO_UTF_CHECKPCRE2.PARTIAL_HARDPCRE2.PARTIAL_SOFTPCRE2.PCRE2PCRE2.PCRE2_ErrorPCRE2.SUBSTITUTE_EXTENDEDPCRE2.SUBSTITUTE_GLOBALPCRE2.SUBSTITUTE_OVERFLOW_LENGTHPCRE2.SUBSTITUTE_UNKNOWN_UNSETPCRE2.SUBSTITUTE_UNSET_EMPTYPCRE2.SizePPCRE2.SizeRefPCRE2.StrPPCRE2.UCPPCRE2.UCharPPCRE2.UNGREEDYPCRE2.UNSETPCRE2.USE_OFFSET_LIMITPCRE2.UTFPCRE2.V6_COMPATPCRE2.VoidPPCRE2._UCHARPCRE2.__init__PCRE2._ncodeunitsPCRE2.capture_namesPCRE2.check_depsPCRE2.code_copyPCRE2.code_copy_with_tablesPCRE2.code_freePCRE2.compilePCRE2.compile_context_copyPCRE2.compile_context_createPCRE2.compile_context_freePCRE2.compile_errorPCRE2.configPCRE2.convert_context_copyPCRE2.convert_context_createPCRE2.convert_context_freePCRE2.converted_pattern_freePCRE2.create_vectorPCRE2.depsjl_pathPCRE2.dfa_matchPCRE2.err_messagePCRE2.evalPCRE2.evrPCRE2.funclistPCRE2.general_context_copyPCRE2.general_context_freePCRE2.get_error_messagePCRE2.get_markPCRE2.get_ovecPCRE2.get_ovector_countPCRE2.get_ovector_pointerPCRE2.get_startcharPCRE2.includePCRE2.infoPCRE2.info_errorPCRE2.jit_compilePCRE2.jit_errorPCRE2.jit_free_unused_memoryPCRE2.jit_matchPCRE2.jit_stack_assignPCRE2.jit_stack_createPCRE2.jit_stack_freePCRE2.libpcre2_16PCRE2.libpcre2_32PCRE2.libpcre2_8PCRE2.maketablesPCRE2.matchPCRE2.match_context_copyPCRE2.match_context_createPCRE2.match_context_freePCRE2.match_data_createPCRE2.match_data_create_from_patternPCRE2.match_data_freePCRE2.pattern_convertPCRE2.pattern_infoPCRE2.pcre_errorPCRE2.serialize_decodePCRE2.serialize_encodePCRE2.serialize_freePCRE2.serialize_get_number_of_codesPCRE2.set_bsrPCRE2.set_character_tablesPCRE2.set_compile_extra_optionsPCRE2.set_depth_limitPCRE2.set_glob_escapePCRE2.set_glob_separatorPCRE2.set_heap_limitPCRE2.set_match_limitPCRE2.set_max_pattern_lengthPCRE2.set_newlinePCRE2.set_offset_limitPCRE2.set_parens_nest_limitPCRE2.set_recursion_limitPCRE2.sub_copy_bynumberPCRE2.sub_length_bynumberPCRE2.substitutePCRE2.substring_copy_bynamePCRE2.substring_copy_bynumberPCRE2.substring_freePCRE2.substring_get_bynamePCRE2.substring_get_bynumberPCRE2.substring_length_bynamePCRE2.substring_length_bynumberPCRE2.substring_list_freePCRE2.substring_list_getPCRE2.substring_nametable_scanPCRE2.substring_number_from_name"
},

]}
