var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Highlights-1",
    "page": "Readme",
    "title": "Highlights",
    "category": "section",
    "text": "A source code highlighter for Julia.Documentation Build Status\n[![][docs-stable-img]][docs-stable-url] [![][docs-latest-img]][docs-latest-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered and can be installed using the package manager. In the Julia REPL type ] to enter the package manager REPL mode and runpkg> add Highlights"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "[STABLE][docs-stable-url] &mdash; most recently tagged version of the documentation.\n[LATEST][docs-latest-url] &mdash; in-development version of the documentation."
},

{
    "location": "#Project-Status-1",
    "page": "Readme",
    "title": "Project Status",
    "category": "section",
    "text": "The package is tested against Julia 0.7, 1.0 and the nightly builds on Linux, OS X, and Windows."
},

{
    "location": "#Contributing-and-Questions-1",
    "page": "Readme",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions. The [contributing][contrib-url] page details the guidelines that should be followed when opening pull requests.Please open an [issue][issues-url] if you encounter any problems. If you have a question then feel free to ask for help in the [Gitter chat room][gitter-url].[gitter-url]: https://gitter.im/juliadocs/users[contrib-url]: https://juliadocs.github.io/Documenter.jl/latest/man/contributing/[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://juliadocs.github.io/Highlights.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://juliadocs.github.io/Highlights.jl/stable[travis-img]: https://travis-ci.org/JuliaDocs/Highlights.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaDocs/Highlights.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/qnphq3a8eph3o979/branch/master?svg=true [appveyor-url]: https://ci.appveyor.com/project/MichaelHatherly/highlights-jl/branch/master[codecov-img]: https://codecov.io/gh/JuliaDocs/Highlights.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaDocs/Highlights.jl[issues-url]: https://github.com/JuliaDocs/Highlights.jl/issues"
},

{
    "location": "autodocs/#Highlights.AbstractLexer",
    "page": "Docstrings",
    "title": "Highlights.AbstractLexer",
    "category": "type",
    "text": "abstract type AbstractLexer\n\nRepresents a source code lexer used to tokenise text.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.AbstractTheme",
    "page": "Docstrings",
    "title": "Highlights.AbstractTheme",
    "category": "type",
    "text": "abstract type AbstractTheme\n\nRepresents a colour scheme used to highlight tokenised source code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.Format",
    "page": "Docstrings",
    "title": "Highlights.Format",
    "category": "module",
    "text": "The Format module provides a public interface that can be used to define custom formatters aside from the predefined HTML and LaTeX outputs supported by Highlights.\n\nThe Formatting section of the manual provides a example of how to go about extending Highlights to support additional output formats.\n\nThe following functions and types are exported from the module for public use:\n\nTokenIterator\nrender\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.Highlights",
    "page": "Docstrings",
    "title": "Highlights.Highlights",
    "category": "module",
    "text": "Highlights.jl is a Julia package for source code highlighting. It provides a regular expression based mechanism for creating lexers in a similar way to Pygments.\n\nThe following names are exported from the root module, Highlights, and are available for external use. Note that unexported names are considered unstable and subject to change.\n\nFormat\nLexers\nThemes\nTokens\nhighlight\nlexer\nstylesheet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.Lexers",
    "page": "Docstrings",
    "title": "Highlights.Lexers",
    "category": "module",
    "text": "An exported submodule that provides a selection of lexer definitions for tokenising source code. The following names are exported from the module:\n\nAbstractLexer\nFortranLexer\nJuliaConsoleLexer\nJuliaLexer\nMatlabLexer\nRLexer\nTOMLLexer\n@lexer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.Themes",
    "page": "Docstrings",
    "title": "Highlights.Themes",
    "category": "module",
    "text": "A submodule that provides a selection of themes that can be used to colourise source code.\n\nAbstractTheme\nDefaultTheme\nEmacsTheme\nGitHubTheme\nMonokaiTheme\nPygmentsTheme\n@S_str\nTangoTheme\nTracTheme\nVimTheme\nVisualStudioTheme\nXcodeTheme\n@theme\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.Tokens",
    "page": "Docstrings",
    "title": "Highlights.Tokens",
    "category": "module",
    "text": "This submodule provides a collection of token names for use in lexer and theme definitions. The table shown below lists all the exported tokens as well as the abbreviations used when printing stylesheets and highlighted source code.\n\nToken Abbreviation\nTEXT t\nWHITESPACE w\nESCAPE e\nERROR eB\nOTHER o\nKEYWORD k\nKEYWORD_CONSTANT kc\nKEYWORD_DECLARATION kd\nKEYWORD_NAMESPACE kn\nKEYWORD_PSEUDO kp\nKEYWORD_RESERVED kr\nKEYWORD_TYPE kt\nNAME n\nNAME_ATTRIBUTE na\nNAME_BUILTIN nb\nNAME_BUILTIN_PSEUDO nbp\nNAME_CLASS nc\nNAME_CONSTANT ncB\nNAME_DECORATOR nd\nNAME_ENTITY ne\nNAME_EXCEPTION neB\nNAME_FUNCTION nf\nNAME_FUNCTION_MAGIC nfm\nNAME_PROPERTY np\nNAME_LABEL nl\nNAME_NAMESPACE nn\nNAME_OTHER no\nNAME_TAG nt\nNAME_VARIABLE nv\nNAME_VARIABLE_CLASS nvc\nNAME_VARIABLE_GLOBAL nvg\nNAME_VARIABLE_INSTANCE nvi\nNAME_VARIABLE_MAGIC nvm\nLITERAL l\nLITERAL_DATE ld\nSTRING s\nSTRING_AFFIX sa\nSTRING_BACKTICK sb\nSTRING_CHAR sc\nSTRING_DELIMITER sd\nSTRING_DOC sdB\nSTRING_DOUBLE sdC\nSTRING_ESCAPE se\nSTRING_HEREDOC sh\nSTRING_INTERPOL si\nSTRING_OTHER so\nSTRING_REGEX sr\nSTRING_SINGLE ss\nSTRING_SYMBOL ssB\nNUMBER nB\nNUMBER_BIN nbB\nNUMBER_FLOAT nfB\nNUMBER_HEX nh\nNUMBER_INTEGER ni\nNUMBER_INTEGER_LONG nil\nNUMBER_OCT noB\nOPERATOR oB\nOPERATOR_WORD ow\nPUNCTUATION p\nCOMMENT c\nCOMMENT_HASHBANG ch\nCOMMENT_MULTILINE cm\nCOMMENT_PREPROC cp\nCOMMENT_PREPROCFILE cpB\nCOMMENT_SINGLE cs\nCOMMENT_SPECIAL csB\nGENERIC g\nGENERIC_DELETED gd\nGENERIC_EMPH ge\nGENERIC_ERROR geB\nGENERIC_HEADING gh\nGENERIC_INSERTED gi\nGENERIC_OUTPUT go\nGENERIC_PROMPT gp\nGENERIC_STRONG gs\nGENERIC_SUBHEADING gsB\nGENERIC_TRACEBACK gt\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.highlight",
    "page": "Docstrings",
    "title": "Highlights.highlight",
    "category": "function",
    "text": "Highlight source code using a specific lexer, mimetype and theme.\n\nhighlight(io, mime, src, lexer)\nhighlight(io, mime, src, lexer, theme)\n\n\nsrc is tokenised using the provided lexer, then colourised using theme, and finally output to io in the given format mime. theme defaults to Themes.DefaultTheme theme.\n\nmime can be either MIME(\"text/html\") or MIME(\"text/latex\").\n\nExamples\n\njulia> using Highlights\n\njulia> highlight(stdout, MIME(\"text/html\"), \"2x\", Lexers.JuliaLexer)\n<pre class=\'hljl\'>\n<span class=\'hljl-ni\'>2</span><span class=\'hljl-n\'>x</span>\n</pre>\n\njulia> highlight(stdout, MIME(\"text/latex\"), \"\'x\'\", Lexers.JuliaLexer, Themes.VimTheme)\n\\begin{lstlisting}\n(*@\\HLJLsc{{\\textquotesingle}x{\\textquotesingle}}@*)\n\\end{lstlisting}\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.lexer",
    "page": "Docstrings",
    "title": "Highlights.lexer",
    "category": "function",
    "text": "lexer(name)\n\n\nReturn the AbstractLexer associated with the lexer named name. name must be a string. Internally this checks the :aliases field in each lexer definition to see whether it is a match.\n\nwarning: Warning\nThis method is not type stable.\n\nWhen no lexer matches the given name an ArgumentError is thrown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Highlights.stylesheet",
    "page": "Docstrings",
    "title": "Highlights.stylesheet",
    "category": "function",
    "text": "Generate a \"stylesheet\" for the given theme.\n\nstylesheet(io, mime)\nstylesheet(io, mime, theme)\n\n\nPrints out the style information needed to colourise source code in the given theme. Note that theme defaults to Themes.DefaultTheme. Output is printed to io in the format mime. mine can be one of\n\nMIME(\"text/html\")\nMIME(\"text/css\")\nMIME(\"text/latex\")\n\nExamples\n\njulia> using Highlights\n\njulia> buf = IOBuffer();\n\njulia> stylesheet(buf, MIME(\"text/css\"), Themes.EmacsTheme)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Highlights.AbstractLexerHighlights.AbstractThemeHighlights.CompilerHighlights.FormatHighlights.HighlightsHighlights.LexersHighlights.ThemesHighlights.TokensHighlights.evalHighlights.highlightHighlights.includeHighlights.lexerHighlights.stylesheetHighlights.takebuf_str"
},

]}
