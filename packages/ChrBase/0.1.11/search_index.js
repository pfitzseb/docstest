var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ChrBase-1",
    "page": "Readme",
    "title": "ChrBase",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/ChrBase.jl [travis-s-img]: https://travis-ci.org/JuliaString/ChrBase.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/ChrBase.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/chrbase-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/chrbase-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/lrdfni7si4o797fr?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/lrdfni7si4o797fr/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/ChrBase [pkg-m-url]:    http://pkg.julialang.org/detail/ChrBase [pkg-s-img]:    http://pkg.julialang.org/badges/ChrBase0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/ChrBase0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/ChrBase.jl [codecov-img]:  https://codecov.io/gh/JuliaString/ChrBase.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/ChrBase.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/ChrBase.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/ChrBase.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/ChrBase.jl/badge.svg?branch=masterThis provides support for different types of characters, using a parameterized Chr type. (and for v0.6.2, adds the AbstractChar type, which was later added to v0.7/master) See the documentation in the Strs package"
},

{
    "location": "autodocs/#ChrBase.CaseTables",
    "page": "Docstrings",
    "title": "ChrBase.CaseTables",
    "category": "module",
    "text": "Case folding tables for Unicode characters\n\nCopyright 2018 Gandalf Software, Inc., Scott P. Jones Licensed under MIT License, see LICENSE.md\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChrBase.ChrBase",
    "page": "Docstrings",
    "title": "ChrBase.ChrBase",
    "category": "module",
    "text": "ChrBase package\n\nCopyright 2017-2018 Gandalf Software, Inc., Scott P. Jones, and contributors to julia Licensed under MIT License, see LICENSE.md In part based on code for Char in Julia\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ChrBase.ASCIIChrChrBase.AbsCharChrBase.BinaryChrChrBase.ByteCharsChrBase.CaseTablesChrBase.ChrChrBase.ChrBaseChrBase.LatinCharsChrBase.LatinChrChrBase.Text1ChrChrBase.Text2ChrChrBase.Text4ChrChrBase.UCS2ChrChrBase.UTF32ChrChrBase.WideCharsChrBase._LatinChrChrBase.__api__ChrBase.__tmp_api__ChrBase._can_lower_bmpChrBase._can_lower_chChrBase._can_lower_slpChrBase._can_upper_alChrBase._can_upper_bmpChrBase._can_upper_chChrBase._can_upper_lChrBase._can_upper_latChrBase._can_upper_slpChrBase._cat_maskChrBase._catfunsChrBase._check_maskChrBase._check_tabChrBase._get_tabChrBase._get_tab_bmpChrBase._get_tab_slpChrBase._is_lower_aChrBase._is_lower_alChrBase._is_lower_bmpChrBase._is_lower_chChrBase._is_lower_lChrBase._is_lower_slpChrBase._is_upper_aChrBase._is_upper_alChrBase._is_upper_bmpChrBase._is_upper_chChrBase._is_upper_lChrBase._is_upper_slpChrBase._isalnum_aChrBase._isalnum_alChrBase._isalnum_chChrBase._isalnum_lChrBase._isalnum_maskChrBase._isalnum_uChrBase._isalpha_aChrBase._isalpha_alChrBase._isalpha_chChrBase._isalpha_lChrBase._isalpha_maskChrBase._isalpha_uChrBase._iscntrlChrBase._isdigitChrBase._isgraph_aChrBase._isgraph_alChrBase._isgraph_chChrBase._isgraph_lChrBase._isgraph_maskChrBase._isgraph_uChrBase._isnumeric_aChrBase._isnumeric_alChrBase._isnumeric_chChrBase._isnumeric_lChrBase._isnumeric_maskChrBase._isnumeric_uChrBase._isprint_aChrBase._isprint_alChrBase._isprint_chChrBase._isprint_lChrBase._isprint_maskChrBase._isprint_uChrBase._ispunct_aChrBase._ispunct_alChrBase._ispunct_chChrBase._ispunct_lChrBase._ispunct_maskChrBase._ispunct_uChrBase._isspace_aChrBase._isspace_alChrBase._isspace_chChrBase._isspace_lChrBase._isspace_uChrBase._isupper_maskChrBase._isvalid_chrChrBase._isxdigitChrBase._lower_bmpChrBase._lower_slpChrBase._lowercase_lChrBase._title_bmpChrBase._uni_rngChrBase._upper_bmpChrBase._upper_latChrBase._upper_slpChrBase._uppercase_lChrBase._uppercase_latinChrBase._wide_lower_latinChrBase._wide_upperChrBase._write_ucs2ChrBase._write_utf8_2ChrBase._write_utf8_3ChrBase._write_utf8_4ChrBase.bytoffChrBase.chrdiffChrBase.chroffChrBase.codepoint_adjChrBase.codepoint_cseChrBase.codepoint_rngChrBase.evalChrBase.get_utf16ChrBase.get_utf16_32ChrBase.get_utf8_16ChrBase.get_utf8_2ChrBase.get_utf8_3ChrBase.get_utf8_32ChrBase.get_utf8_4ChrBase.includeChrBase.is_malformedChrBase.is_overlongChrBase.is_surrogate_codeunitChrBase.is_surrogate_leadChrBase.is_surrogate_trailChrBase.is_valid_continuationChrBase.titlecaseChrBase.utf8proc_catChrBase.utf8proc_cat_abbrChrBase.utf8proc_charwidthChrBase.utf8proc_errorChrBase.utf_trailChrBase.write_utf16ChrBase.write_utf8"
},

]}
