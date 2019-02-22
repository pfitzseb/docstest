var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StrLiterals-1",
    "page": "Readme",
    "title": "StrLiterals",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/StrLiterals.jl [travis-s-img]: https://travis-ci.org/JuliaString/StrLiterals.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/StrLiterals.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/strliterals-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/strliterals-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/8462oq09ek07knos?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/8462oq09ek07knos/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/StrLiterals [pkg-m-url]:    http://pkg.julialang.org/detail/StrLiterals [pkg-s-img]:    http://pkg.julialang.org/badges/StrLiterals0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/StrLiterals0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/StrLiterals.jl [codecov-img]:  https://codecov.io/gh/JuliaString/StrLiterals.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/StrLiterals.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/StrLiterals.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/StrLiterals.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/StrLiterals.jl/badge.svg?branch=masterThe StrLiterals package is an attempt to bring a cleaner string literal syntax to Julia, as well as having an easier way of producing formatted strings, borrowing from both Python and C formatted printing syntax.  It also adds support for using LaTex, Emoji, HTML, or Unicode entity names that are looked up at compile-time. This builds on the previous work in StringUtils and StringLiterals, but is based on the new Strs.jl packageCurrently, it adds a Swift style string macro, f\"...\", which uses the Swift syntax for interpolation, i.e. \\(expression).  This means that you never have to worry about strings with the $ character in them, which is rather frequent in some applications. Also, Unicode sequences are represented as in Swift, i.e. as \\u{hexdigits}, where there can be from 1 to 6 hex digits. This syntax eliminates having to worry about always outputting 4 or 8 hex digits, to prevent problems with 0-9,A-F,a-f characters immediately following.It also adds a string macro that instead of building a string, can print the strings and interpolated values directly, without having to create a string out of all the parts. Finally, there are uppercase versions of the macros, which also supports the legacy sequences, $ for string interpolation, \\x followed by 1 or 2 hex digits, \\u followed by 1 to 4 hex digits, and \\U followed by 1 to 8 hex digits.The StrFormat package adds type-based, C-style, and Python-style formatting, using the following escape characters (after \\): % and {. See the package for more details.The StrEntities package adds Emojis (starting with \\: and ending with :), LaTeX entities (starting with \\< and ending with >) similar to the Julia REPL, as well as HTML entities (starting with &, anding with ;), and Unicode entities (starting with \\N{ and ending with } (similar to Python strings) See the package for more details.\\ can be followed by: 0, $, \", \', \\, a, b, e, f, n, r, t, u, v, ((as well as any added by other packages, such as StrFormat or StrEntities) In the legacy modes, x and U are also allowed after the \\. Unsupported characters give an error (as in Swift, and in recent Julia versions).\\0 outputs a nul byte (0x00) (note: as in Swift, octal sequences are not supported, just the nul byte)\n\\a outputs the \"alarm\" or \"bell\" control code (0x07)\n\\b outputs the \"backspace\" control code (0x08)\n\\e outputs the \"escape\" control code (0x1b)\n\\f outputs the \"formfeed\" control code (0x0c)\n\\n outputs the \"newline\" or \"linefeed\" control code (0x0a)\n\\r outputs the \"return\" (carriage return) control code (0x0d)\n\\t outputs the \"tab\" control code (0x09)\n\\v outputs the \"vertical tab\" control code (0x0b)\n\\u{<hexdigits>} is used to represent a Unicode character, with 1-6 hex digits.\n\\(expression) simply interpolates the value of the expression, the same as $(expression) in standard Julia string literals."
},

{
    "location": "autodocs/#StrLiterals.@F_str",
    "page": "Docstrings",
    "title": "StrLiterals.@F_str",
    "category": "macro",
    "text": "String macro with more Swift-like syntax, plus support for emojis and LaTeX names, also legacy\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrLiterals.@f_str",
    "page": "Docstrings",
    "title": "StrLiterals.@f_str",
    "category": "macro",
    "text": "String macro with more Swift-like syntax, plus support for emojis and LaTeX names\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrLiterals.@pr_str",
    "page": "Docstrings",
    "title": "StrLiterals.@pr_str",
    "category": "macro",
    "text": "String macros that calls print directly\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrLiterals.@sym_str",
    "page": "Docstrings",
    "title": "StrLiterals.@sym_str",
    "category": "macro",
    "text": "Create a symbol from a string (that allows for interpolation and escape sequences)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrLiterals.StrLiterals",
    "page": "Docstrings",
    "title": "StrLiterals.StrLiterals",
    "category": "module",
    "text": "\" Enhanced string literals\n\nString literals with Swift-like format, extendable at run-time\n\nCopyright 2016-2018 Gandalf Software, Inc., Scott P. Jones Licensed under MIT License, see LICENSE.md\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrLiterals.s_parse_unicode",
    "page": "Docstrings",
    "title": "StrLiterals.s_parse_unicode",
    "category": "function",
    "text": "Handle Unicode character constant, of form \\u{<hexdigits>}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrLiterals.s_print_unescaped",
    "page": "Docstrings",
    "title": "StrLiterals.s_print_unescaped",
    "category": "function",
    "text": "String interpolation parsing Based on code resurrected from Julia base: https://github.com/JuliaLang/julia/blob/deab8eabd7089e2699a8f3a9598177b62cbb1733/base/string.jl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StrLiterals.s_print_unescaped_legacy",
    "page": "Docstrings",
    "title": "StrLiterals.s_print_unescaped_legacy",
    "category": "function",
    "text": "String interpolation parsing, allow legacy $, \\xHH, \\uHHHH, \\UHHHHHHHH\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StrLiterals.@F_strStrLiterals.@PR_strStrLiterals.@f_strStrLiterals.@pr_strStrLiterals.@sym_strStrLiterals.AbsCharStrLiterals.NEW_ITERATEStrLiterals.StrLiteralsStrLiterals.SymStrStrLiterals.TypeOrFuncStrLiterals.__api__StrLiterals.__tmp_api__StrLiterals._sprintStrLiterals.check_doneStrLiterals.check_exprStrLiterals.evalStrLiterals.hexerrStrLiterals.includeStrLiterals.incomplete_expr_errorStrLiterals.interpolateStrLiterals.interpolated_parseStrLiterals.interpolated_parse_vecStrLiterals.is_emptyStrLiterals.is_printableStrLiterals.is_validStrLiterals.outhexStrLiterals.parse_chrStrLiterals.parse_errorStrLiterals.s_escape_stringStrLiterals.s_parse_legacyStrLiterals.s_parse_unicodeStrLiterals.s_printStrLiterals.s_print_escapedStrLiterals.s_print_unescapedStrLiterals.s_print_unescaped_legacyStrLiterals.s_unescape_legacyStrLiterals.s_unescape_strStrLiterals.s_unescape_stringStrLiterals.str_doneStrLiterals.str_nextStrLiterals.string_typeStrLiterals.throw_arg_err"
},

]}
