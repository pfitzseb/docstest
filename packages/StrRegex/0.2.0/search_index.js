var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StrRegex-1",
    "page": "Readme",
    "title": "StrRegex",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/StrRegex.jl [travis-s-img]: https://travis-ci.org/JuliaString/StrRegex.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/StrRegex.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/strregex-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/strregex-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/iyhlb4unq5ml4g0w?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/iyhlb4unq5ml4g0w/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/StrRegex [pkg-m-url]:    http://pkg.julialang.org/detail/StrRegex [pkg-s-img]:    http://pkg.julialang.org/badges/StrRegex0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/StrRegex0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/StrRegex.jl [codecov-img]:  https://codecov.io/gh/JuliaString/StrRegex.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/StrRegex.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/StrRegex.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/StrRegex.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/StrRegex.jl/badge.svg?branch=masterThe StrRegex package adds Regex support to the Strs package, as well as fix some issues present in the base Regex support.Thread-safe support\nAllows the whole range of compile and match options\nSupports both UTF and non-UTF strings\nSupports strings with 8, 16, and 32-bit codeunit sizes\nCorrectly sets the NOCHECKUTF flag based on the string typeIt is working on both the release version (v0.6.2) and the latest master (v0.7.0-DEV).This uses a R\"...\" macro, or RegexStr constructor, instead of r\"...\" and Regex as in Base.Some changes might be needed in Base to make it work with the r\"...\" regex string macro and Regex type, because there are some fields missing that would be needed to handle arbitrary abstract string types)."
},

{
    "location": "autodocs/#StrRegex.StrRegex",
    "page": "Docstrings",
    "title": "StrRegex.StrRegex",
    "category": "module",
    "text": "Regex functions for Str strings\n\nCopyright 2018 Gandalf Software, Inc., Scott P. Jones, and other contributors to the Julia language Licensed under MIT License, see LICENSE.md Based in part on julia/base/regex.jl and julia/base/pcre.jl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrRegex.cmp_all",
    "page": "Docstrings",
    "title": "StrRegex.cmp_all",
    "category": "function",
    "text": "Precompile all of the common cases needed for String, UTF8Str, UTF16Str, and UniStr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrRegex.get_match_context",
    "page": "Docstrings",
    "title": "StrRegex.get_match_context",
    "category": "function",
    "text": "Get a thread-specific match context\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StrRegex.@R_strStrRegex.Binary_Regex_CSEsStrRegex.DEFAULT_COMPILER_OPTSStrRegex.DEFAULT_MATCH_OPTSStrRegex.JIT_STACK_MAX_SIZEStrRegex.JIT_STACK_START_SIZEStrRegex.MATCH_CONTEXTStrRegex.MS_StrStrRegex.MS_StringStrRegex.MatchTabStrRegex.PCREStrRegex.RegexStrStrRegex.RegexStrMatchStrRegex.RegexStrMatchIteratorStrRegex.RegexTypesStrRegex.Regex_CSEsStrRegex.StrRegexStrRegex._UCPStrRegex._UTFStrRegex._VALIDStrRegex.__api__StrRegex.__findStrRegex.__init__StrRegex.__tmp_api__StrRegex._add_compile_optionsStrRegex._check_compileStrRegex._check_matchStrRegex._clear_optsStrRegex._finalize!StrRegex._findStrRegex._matchStrRegex._not_foundStrRegex._occurs_inStrRegex._update_matchStrRegex._update_tableStrRegex._write_captureStrRegex.check_compileStrRegex.cmp_allStrRegex.codeunit_indexStrRegex.comp_addStrRegex.comp_execStrRegex.contextlockStrRegex.debStrRegex.empty_tableStrRegex.evalStrRegex.execStrRegex.finStrRegex.finalize!StrRegex.get_comp_indStrRegex.get_match_contextStrRegex.get_ovecStrRegex.get_rangeStrRegex.get_regexStrRegex.includeStrRegex.match_addStrRegex.match_contextStrRegex.md_freeStrRegex.opt_indexStrRegex.outtabStrRegex.regex_type_errorStrRegex.tabtype"
},

]}
