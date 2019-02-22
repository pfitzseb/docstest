var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Parsers.jl-1",
    "page": "Readme",
    "title": "Parsers.jl",
    "category": "section",
    "text": "(Image: Coverage Status) (Image: Travis Build Status) (Image: AppVeyor Build status)A collection of type parsers and utilities for Julia.Installation: at the Julia REPL, Pkg.add(\"Parsers\")Maintenance: Parsers is maintained collectively by the JuliaData collaborators. Responsiveness to pull requests and issues can vary, depending on the availability of key collaborators."
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "using Parsers\n\n# basic int/float parsing\nx = Parsers.parse(\"101\", Int)\ny = Parsers.parse(\"101.101\", Float64)\n\n# use comma as decimal\ny2 = Parsers.parse(\"101,101\", Float64; decimal=\',\')\n\n# Bool parsing\nz = Parsers.parse(\"true\", Bool)\n\n# Date/DateTime parsing\nusing Dates\na = Parsers.parse(\"2018-01-01\", Date)\n\n# custom dateformat\nb = Parsers.parse(\"01/20/2018\", Date; dateformat=\"mm/dd/yyyy\")\n\n# will throw on invalid values\nParsers.parse(\"abc\", Int)\n\n# tryparse will return `nothing` on invalid values\ny = Parsers.tryparse(\"abc\", Int)"
},

{
    "location": "#Advanced-Usage-1",
    "page": "Readme",
    "title": "Advanced Usage",
    "category": "section",
    "text": "Read through the docs of the following types/functions for more information on using advanced Parsers machinery:?Parsers.parse!\n?Parsers.Result\n?Parsers.ReturnCode\n?Parsers.Layer\n?Parsers.Delimited\n?Parsers.Quoted\n?Parsers.Strip\n?Parsers.Sentinel\n?Parsers.Trie\n?Parsers.match!"
},

{
    "location": "autodocs/#Parsers.Delimited",
    "page": "Docstrings",
    "title": "Parsers.Delimited",
    "category": "type",
    "text": "Parsers.Delimited(next, delims::Union{Char, String}...=\',\')\n\nA custom `Parsers.Layer` used to support parsing delimited values in `IO` streams. `delims` can be any number of `Char` or `String` arguments that should collectively be used as \"delimiters\".\n\nParsing on a `Parsers.Delimited` will first call `Parsers.parse!(d.next, io, result; kwargs...)`, then expect the next bytes to be one of the expected `delims` arguments.\nIf one of `delims` is not found, the result is `Parsers.INVALID`, but parsing will continue until a valid `delims` is found. An `eof(io)` is _always_ considered a valid termination state in place of a delimiter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.Layer",
    "page": "Docstrings",
    "title": "Parsers.Layer",
    "category": "type",
    "text": "An interface to define custom \"parsing support\" layers to be used in `Parsers.parse!`. Examples implementations include:\n  * Parsers.Delimited\n  * Parsers.Quoted\n  * Parsers.Strip\n  * Parsers.Sentinel\n\nThe interface to implement for a `Layer` is:\n  * `Parsers.parse!(x::MyLayer, io::IO, r::Result{T}; kwargs...) where {T}`: implementation of your custom `MyLayer` type, including calling down to the next layer\n  * Include a parameterized `next::I` field, to allow parsing the next layer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.Quoted",
    "page": "Docstrings",
    "title": "Parsers.Quoted",
    "category": "type",
    "text": "Parsers.Quoted(next, quotechar=\'\"\', escapechar=\'\\\', ignore_quoted_whitespace=false)\nParsers.Quoted(next, openquote, closequote, escapechar, ignore_quoted_whitespace)\n\nA custom `Parsers.Layer` used to support parsing potentially \"quoted\" values. Parsing with a `Parsers.Quoted` does not _require_ the value to be quoted, but will always check for an initial quote and, if found, will then expect (and continue parsing until) a corresponding close quote is found.\nA single `quotechar` can be given, indicating the quoted field will start and end with the same character.\nBoth `quotechar` and `escapechar` arguments are limited to ASCII characters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.Result",
    "page": "Docstrings",
    "title": "Parsers.Result",
    "category": "type",
    "text": "Parsers.Result{T}(x::Union{T, Missing}, ::Parsers.ReturnCode, b::UInt8)\nParsers.Result(::Type{T}, code, byte)\n\nA result type used by `Parsers.parse!` to signal the result of trying to parse a certain type. Fields include:\n    * `result::Union{T, Missing}`: holds the parsed result of type `T` or `missing` if unable to parse or a valid `Parsers.Sentinel` value was found\n    * `code::Parsers.ReturnCode`: a value signaling whether parsing succeeded (`Parsers.OK`) or not (`Parsers.INVALID`); see `?Parsers.ReturnCode` for all possible codes\n    * `pos::Int64`: the byte position when a parsing operation started\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.ReturnCode",
    "page": "Docstrings",
    "title": "Parsers.ReturnCode",
    "category": "type",
    "text": "Each `Parsers.Result` has a `r.code` field which has type `Parsers.ReturnCode` and is a set of bit flags for various parsing states.\nThe top bit is used to indicate \"SUCCESS\" (0) and \"INVALID\" (1), so all failed parsing attempts will have a code < 0, while successful parsings will be > 0.\nUse `Parsers.ok(code)` to check if a `Parsers.Result` is successful or not.\n`Parsers.codes(code)` and `Parsers.text(code)` can also be used to get text representations of which bit flags are set in a return code.\nVarious bit flags include:\n  * `OK`: the innermost type parser succeeded in parsing a valid value for the type\n  * `SENTINEL`: a sentinel value was matched; mutually exclusive with `OK` (sentinels are only checked for when the underlying type parser fails)\n  * `QUOTED`: an opening quote character was detected while parsing (note this does not indicate a _correctly_ quoted value)\n  * `DELIMITED`: a valid delimiter was found while parsing; note that EOF is always a valid delimiter\n  * `NEWLINE`: a newline character was matched as a delimiter (useful for applications where newlines have special delimiting purposes)\n  * `EOF`: parsing encountered the end-of-file while parsing\n  * `INVALID_QUOTED_FIELD`: a corresponding closing quote character was not found for a `QUOTED` field\n  * `INVALID_DELIMITER`: a delimiter was found, but not at the expected position while parsing\n  * `OVERFLOW`: a numeric type overflowed while parsing its value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.Sentinel",
    "page": "Docstrings",
    "title": "Parsers.Sentinel",
    "category": "type",
    "text": "Parses.Sentinel(next, sentinels::Union{String, Vector{String}})\n\nA custom `Parsers.Layer` to support sentinel value parsing for any type. A single string or vector of strings can be provided which, if encountered during parsing, will result in `missing` being returned with a `Parsers.ReturnCode` of `Parsers.OK`.\n\nOne special case of sentinel parsing is that of the \"empty\" sentinel, i.e. `Parsers.Sentinel(io, \"\")`. In this case, sentinel parsing will \"succeed\" only when the underlying type parsing failed to consume any bytes (i.e it immediately encountered invalid characters).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.Strip",
    "page": "Docstrings",
    "title": "Parsers.Strip",
    "category": "type",
    "text": "Parsers.Strip(next, wh1=\' \', wh2=\'	\')\n\nA custom `Parsers.Layer` used to remove leading and trailing whitespace.\nBy default, only `\' \'` (space) and `\'	\'` (tab) characters are skipped over.\nAny two valid ASCII characters may be used to skip.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.Trie",
    "page": "Docstrings",
    "title": "Parsers.Trie",
    "category": "type",
    "text": "Trie(value::String, value_to_return::T) where {T}\nTrie(values::Vector{String}, value_to_return::T) where {T}\nTrie(values::Vector{Pair{String, T}}) where {T}\n\nA basic [trie](https://en.wikipedia.org/wiki/Trie) structure for use in parsing sentinel and other special values.\nThe various constructors take either a single or set of strings to act as \"sentinels\" (i.e. special values to be parsed), plus an optional `value_to_return` argument, which will be the value returned if the sentinel is found while parsing.\nNote the last constructor `Trie(values::Vector{Pair{String, T}})` allows specifying different return values for different sentinel values. Bool parsing uses this like:\n```\nconst BOOLS = Trie([\"true\"=>true, \"false\"=>false])\n```\nThe only restriction is that each individual value must be of the same type (i.e. a single `Trie` can only ever return one type of value).\n\nSee `?Parsers.match!` for more information on how a `Trie` can be used for special-value parsing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.defaultparser",
    "page": "Docstrings",
    "title": "Parsers.defaultparser",
    "category": "function",
    "text": "function used by Parsers to dispatch to default type parser implementations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.fastseek!",
    "page": "Docstrings",
    "title": "Parsers.fastseek!",
    "category": "function",
    "text": "Parsers.fastseek!(io::IO, n::Integer)\n\nWithout valididty checks, seek an `IO` to desired byte position `n`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.match!",
    "page": "Docstrings",
    "title": "Parsers.match!",
    "category": "function",
    "text": "Parsers.match!(t::Parsers.Trie, io::IO, r::Parsers.Result, setvalue::Bool=true, ignorecase::Bool=false)\n\nFunction that takes an `io::IO` argument, a prebuilt `r::Parsers.Result` argument, and a `t::Parsers.Trie` argument, and attempts to match/detect special values in `t` with the next bytes consumed from `io`.\nIf special values are found, `r.result` will be set to the value that was associated with `t` when it was constructed.\nThe return value of `Parsers.match!` is if a special value was indeed detected in `io` (`true` or `false`).\nOptionally, if the `setvalue` is `false`, `r.result` will be unaffected (i.e. not set) even if a special value is found.\nThe optional argument `ignorecase` can be used if case-insensitive matching is desired.\n\nNote that `io` is reset to its original position if no special value is found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.parse",
    "page": "Docstrings",
    "title": "Parsers.parse",
    "category": "function",
    "text": "Attempt to parse a value of type T from string str. Throws Parsers.Error on parser failures and invalid values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.parse!",
    "page": "Docstrings",
    "title": "Parsers.parse!",
    "category": "function",
    "text": "Parsers.parse!(l::Parsers.Layer, io::IO, r::Result{T}; kwargs...)::Parsers.Result{T}\n\nInternal parsing function that returns a full `Parsers.Result` type to indicate the success of parsing a `T` from `io`.\n\nA custom parsing function `f` can be passed, as the innermost \"layer\", which should have the form `f(io::IO, ::Type{T}, r::Result{T}, args...)::Result{T}`, i.e. it takes an `IO` stream, attemps to parse type `T`, takes a pre-allocated `Result{T}` and should return it after parsing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.peekbyte",
    "page": "Docstrings",
    "title": "Parsers.peekbyte",
    "category": "function",
    "text": "Parsers.peekbyte(io::IO)::UInt8\n\nReturn, but do not consume, the next byte from an `IO` without checking `eof(io)`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.readbyte",
    "page": "Docstrings",
    "title": "Parsers.readbyte",
    "category": "function",
    "text": "Parsers.readbyte(io::IO)::UInt8\n\nConsume a single byte from an `IO` without checking `eof(io)`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Parsers.tryparse",
    "page": "Docstrings",
    "title": "Parsers.tryparse",
    "category": "function",
    "text": "Attempt to parse a value of type T from IO io. Returns nothing on parser failures and invalid values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Parsers.BIG_EParsers.BOOLSParsers.BUFParsers.BufferedIOParsers.DEFAULT_TYPESParsers.DELIMITEDParsers.DelimitedParsers.EOFParsers.ErrorParsers.F16_SHORT_POWERSParsers.F32_SHORT_POWERSParsers.F64_SHORT_POWERSParsers.INTERNED_STRINGS_POOLParsers.INVALIDParsers.INVALID_DELIMITERParsers.INVALID_QUOTED_FIELDParsers.LITTLE_EParsers.LayerParsers.MINUSParsers.NEG_ONEParsers.NEWLINEParsers.OKParsers.OVERFLOWParsers.PLUSParsers.ParsersParsers.QUOTEDParsers.QuotedParsers.RESULTSParsers.ResultParsers.ReturnCodeParsers.SENTINELParsers.SPECIALSParsers.STRING_RESULTParsers.SUCCESSParsers.SentinelParsers.StripParsers.TENParsers.TrieParsers.ZEROParsers.__init__Parsers._defaultparserParsers.bipows5Parsers.bitlengthParsers.bitsParsers.buffer!Parsers.ceillog5Parsers.checkdelim!Parsers.checknewlineParsers.codesParsers.defaultparserParsers.evalParsers.fastseek!Parsers.generatebranchParsers.generatebranchesParsers.generatestrbranchParsers.generatestrbranchesParsers.getptrParsers.handlequoted!Parsers.includeParsers.incrParsers.indexParsers.internParsers.intern!Parsers.labelParsers.lowerParsers.makeParsers.match!Parsers.maxsigParsers.okParsers.parseParsers.parse!Parsers.parsetypeParsers.peekbyteParsers.pow10Parsers.readbyteParsers.remove_line_number_nodesParsers.roundQuotientParsers.scaleParsers.significantbitsParsers.textParsers.tryparseParsers.unescapeParsers.wh!Parsers.wider"
},

]}
