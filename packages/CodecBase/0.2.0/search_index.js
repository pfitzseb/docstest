var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CodecBase.jl-1",
    "page": "Readme",
    "title": "CodecBase.jl",
    "category": "section",
    "text": "[![TravisCI Status][travisci-img]][travisci-url] [![codecov.io][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"CodecBase\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using CodecBase\n\n# UTF8-encoded text.\ndata = \"\"\"\n祇園精舎の鐘の声、諸行無常の響きあり。\n沙羅双樹の花の色、盛者必衰のことわりをあらはす。\n奢れる人も久しからず、唯春の夜の夢のごとし。\n\"\"\"\n\n# Base64-encoded data of the above.\nbase64 = \"\"\"\n56WH5ZyS57K+6IiO44Gu6ZCY44Gu5aOw44CB6Ku46KGM54Sh5b\ni444Gu6Z+/44GN44GC44KK44CCCuaymee+heWPjOaoueOBruiK\nseOBruiJsuOAgeebm+iAheW/heihsOOBruOBk+OBqOOCj+OCiu\nOCkuOBguOCieOBr+OBmeOAggrlpaLjgozjgovkurrjgoLkuYXj\ngZfjgYvjgonjgZrjgIHllK/mmKXjga7lpJzjga7lpKLjga7jgZ\nTjgajjgZfjgIIK\n\"\"\"\n\n# Streaming API.\nencoded = readstring(Base64EncoderStream(IOBuffer(data)))\n@assert encoded == replace(base64, \"\\n\", \"\")\ndecoded = read(Base64DecoderStream(IOBuffer(base64)))\n@assert decoded == Vector{UInt8}(data)\n\n# Byte array API.\nencoded = transcode(Base64Encoder(), data)\n@assert String(encoded) == replace(base64, \"\\n\", \"\")\ndecoded = transcode(Base64Decoder(), base64)\n@assert decoded == Vector{UInt8}(data)This package exports following codecs and streams:Codec Stream\nBase16Encoder Base16EncoderStream\nBase16Decoder Base16DecoderStream\nBase32Encoder Base32EncoderStream\nBase32Decoder Base32DecoderStream\nBase64Encoder Base64EncoderStream\nBase64Decoder Base64DecoderStreamSee docstrings and TranscodingStreams.jl for details.[travisci-img]: https://travis-ci.org/bicycle1885/CodecBase.jl.svg?branch=master [travisci-url]: https://travis-ci.org/bicycle1885/CodecBase.jl [codecov-img]: http://codecov.io/github/bicycle1885/CodecBase.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/bicycle1885/CodecBase.jl?branch=master"
},

{
    "location": "autodocs/#CodecBase.BASE16_LOWER",
    "page": "Docstrings",
    "title": "CodecBase.BASE16_LOWER",
    "category": "constant",
    "text": "The hexadecimal base16 code table (encoding: lowercase; decoding: case-insensitive).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.BASE16_UPPER",
    "page": "Docstrings",
    "title": "CodecBase.BASE16_UPPER",
    "category": "constant",
    "text": "The hexadecimal base16 code table (encoding: uppercase; decoding: case-insensitive).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.BASE32_HEX",
    "page": "Docstrings",
    "title": "CodecBase.BASE32_HEX",
    "category": "constant",
    "text": "The extended hex code table (cf. Table 4 of RFC4648).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.BASE32_STD",
    "page": "Docstrings",
    "title": "CodecBase.BASE32_STD",
    "category": "constant",
    "text": "The standard base32 code table (cf. Table 3 of RFC4648).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.BASE64_STD",
    "page": "Docstrings",
    "title": "CodecBase.BASE64_STD",
    "category": "constant",
    "text": "The standard base64 code table (cf. Table 1 of RFC4648).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.BASE64_URLSAFE",
    "page": "Docstrings",
    "title": "CodecBase.BASE64_URLSAFE",
    "category": "constant",
    "text": "The url-safe base64 code table (cf. Table 2 of RFC4648).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base16Decoder",
    "page": "Docstrings",
    "title": "CodecBase.Base16Decoder",
    "category": "type",
    "text": "Base16Decoder(;ignore::String=\\t\\n\\v\\f\\r )\n\nCreate a base16 decoding codec.\n\nArguments\n\nignore: ASCII characters that will be ignored while decoding\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base16DecoderStream",
    "page": "Docstrings",
    "title": "CodecBase.Base16DecoderStream",
    "category": "type",
    "text": "Base16DecoderStream(stream::IO; kwargs...)\n\nCreate a base16 decoding stream (see Base16Decoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base16Encoder",
    "page": "Docstrings",
    "title": "CodecBase.Base16Encoder",
    "category": "type",
    "text": "Base16Encoder(;lowercase=false)\n\nCreate a base16 encoding codec.\n\nArguments\n\nlowercase: use [0-9a-f] instead of [0-9A-F].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base16EncoderStream",
    "page": "Docstrings",
    "title": "CodecBase.Base16EncoderStream",
    "category": "type",
    "text": "Base16EncoderStream(stream::IO; kwargs...)\n\nCreate a base16 encoding stream (see Base16Encoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base32Decoder",
    "page": "Docstrings",
    "title": "CodecBase.Base32Decoder",
    "category": "type",
    "text": "Base32Decoder(;hex::Bool=false, ignore::String=\\t\\n\\v\\f\\r )\n\nCreate a base32 decoding codec.\n\nArguments\n\nhex: use extended hex alphabet (Table 4 of RFC4648)\nignore: ASCII characters that will be ignored while decoding\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base32DecoderStream",
    "page": "Docstrings",
    "title": "CodecBase.Base32DecoderStream",
    "category": "type",
    "text": "Base32DecoderStream(stream::IO; kwargs...)\n\nCreate a base32 decoding stream (see Base32Decoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base32Encoder",
    "page": "Docstrings",
    "title": "CodecBase.Base32Encoder",
    "category": "type",
    "text": "Base32Encoder(;hex::Bool=false)\n\nCreate a base32 encoding codec.\n\nArguments\n\nhex: use extended hex alphabet (Table 4 of RFC4648)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base32EncoderStream",
    "page": "Docstrings",
    "title": "CodecBase.Base32EncoderStream",
    "category": "type",
    "text": "Base32EncoderStream(stream::IO; kwargs...)\n\nCreate a base32 encoding stream (see Base32Encoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base64Decoder",
    "page": "Docstrings",
    "title": "CodecBase.Base64Decoder",
    "category": "type",
    "text": "Base64Decoder(;urlsafe::Bool=false, ignore::String=\"\\t\\n\\v\\f\\r \")\n\nCreate a base64 decoding codec.\n\nArguments\n\nurlsafe: use - and _ as the last two values\nignore: ASCII characters that will be ignored while decoding\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base64DecoderStream",
    "page": "Docstrings",
    "title": "CodecBase.Base64DecoderStream",
    "category": "type",
    "text": "Base64DecoderStream(stream::IO; kwargs...)\n\nCreate a base64 decoding stream (see Base64Decoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base64Encoder",
    "page": "Docstrings",
    "title": "CodecBase.Base64Encoder",
    "category": "type",
    "text": "Base64Encoder(;urlsafe::Bool=false)\n\nCreate a base64 encoding codec.\n\nArguments\n\nurlsafe: use - and _ as the last two values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.Base64EncoderStream",
    "page": "Docstrings",
    "title": "CodecBase.Base64EncoderStream",
    "category": "type",
    "text": "Base64EncoderStream(stream::IO; kwargs...)\n\nCreate a base64 encoding stream (see Base64Encoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.CodeTable16",
    "page": "Docstrings",
    "title": "CodecBase.CodeTable16",
    "category": "type",
    "text": "CodeTable16(asciicode:::String; casesensitive::Bool=false)\n\nCreate a code table for base16.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.CodeTable32",
    "page": "Docstrings",
    "title": "CodecBase.CodeTable32",
    "category": "type",
    "text": "CodeTable32(asciicode::String, pad::Char; casesensitive::Bool=false)\n\nCreate a code table for base32.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.CodeTable64",
    "page": "Docstrings",
    "title": "CodecBase.CodeTable64",
    "category": "type",
    "text": "CodeTable64(asciicode::String, pad::Char)\n\nCreate a code table for base64.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.DecodeError",
    "page": "Docstrings",
    "title": "CodecBase.DecodeError",
    "category": "type",
    "text": "Decoding exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBase.ignorechars!",
    "page": "Docstrings",
    "title": "CodecBase.ignorechars!",
    "category": "function",
    "text": "ignorechars!(table::CodeTable, asciichars::String)\n\nAdd characters that will be ignored while decoding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CodecBase.@encode16CodecBase.@unreachableCodecBase.BASE16_CODEENDCodecBase.BASE16_CODEERRCodecBase.BASE16_CODEIGNCodecBase.BASE16_LOWERCodecBase.BASE16_UPPERCodecBase.BASE32_CODEENDCodecBase.BASE32_CODEERRCodecBase.BASE32_CODEIGNCodecBase.BASE32_CODEPADCodecBase.BASE32_HEXCodecBase.BASE32_STDCodecBase.BASE64_CODEENDCodecBase.BASE64_CODEERRCodecBase.BASE64_CODEIGNCodecBase.BASE64_CODEPADCodecBase.BASE64_STDCodecBase.BASE64_URLSAFECodecBase.Base16DecoderCodecBase.Base16DecoderStreamCodecBase.Base16EncoderCodecBase.Base16EncoderStreamCodecBase.Base32DecoderCodecBase.Base32DecoderStreamCodecBase.Base32EncoderCodecBase.Base32EncoderStreamCodecBase.Base64DecoderCodecBase.Base64DecoderStreamCodecBase.Base64EncoderCodecBase.Base64EncoderStreamCodecBase.BufferCodecBase.CodeTableCodecBase.CodeTable16CodecBase.CodeTable32CodecBase.CodeTable64CodecBase.CodecBaseCodecBase.DecodeErrorCodecBase.StateCodecBase.decodeCodecBase.decode16_irregularCodecBase.decode32_irregularCodecBase.decode64_irregularCodecBase.encodeCodecBase.evalCodecBase.finish!CodecBase.ignorechars!CodecBase.ignorecodeCodecBase.includeCodecBase.is_runningCodecBase.start!CodecBase.whitespace"
},

]}
