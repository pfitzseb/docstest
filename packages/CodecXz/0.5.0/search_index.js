var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CodecXz.jl-1",
    "page": "Readme",
    "title": "CodecXz.jl",
    "category": "section",
    "text": "[![TravisCI Status][travisci-img]][travisci-url] [![AppVeyor Status][appveyor-img]][appveyor-url] [![codecov.io][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"CodecXz\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using CodecXz\n\n# Some text.\ntext = \"\"\"\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin\nmauris non nisi consectetur, a dapibus urna pretium. Vestibulum non posuere\nerat. Donec luctus a turpis eget aliquet. Cras tristique iaculis ex, eu\nmalesuada sem interdum sed. Vestibulum ante ipsum primis in faucibus orci luctus\net ultrices posuere cubilia Curae; Etiam volutpat, risus nec gravida ultricies,\nerat ex bibendum ipsum, sed varius ipsum ipsum vitae dui.\n\"\"\"\n\n# Streaming API.\nstream = XzCompressorStream(IOBuffer(text))\nfor line in eachline(XzDecompressorStream(stream))\n    println(line)\nend\nclose(stream)\n\n# Array API.\ncompressed = transcode(XzCompressor, text)\n@assert sizeof(compressed) < sizeof(text)\n@assert transcode(XzDecompressor, compressed) == Vector{UInt8}(text)This package exports following codecs and streams:Codec Stream\nXzCompressor XzCompressorStream\nXzDecompressor XzDecompressorStreamSee docstrings and TranscodingStreams.jl for details.[travisci-img]: https://travis-ci.org/bicycle1885/CodecXz.jl.svg?branch=master [travisci-url]: https://travis-ci.org/bicycle1885/CodecXz.jl [appveyor-img]: https://ci.appveyor.com/api/projects/status/2otqmsovdp76og60?svg=true [appveyor-url]: https://ci.appveyor.com/project/bicycle1885/codecxz-jl [codecov-img]: http://codecov.io/github/bicycle1885/CodecXz.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/bicycle1885/CodecXz.jl?branch=master"
},

{
    "location": "autodocs/#CodecXz.XzCompressor",
    "page": "Docstrings",
    "title": "CodecXz.XzCompressor",
    "category": "type",
    "text": "XzCompressor(;level=6, check=LZMA_CHECK_CRC64)\n\nCreate an xz compression codec.\n\nArguments\n\nlevel: compression level (0..9)\ncheck: integrity check type (LZMA_CHECK_{NONE,CRC32,CRC64,SHA256})\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecXz.XzCompressorStream",
    "page": "Docstrings",
    "title": "CodecXz.XzCompressorStream",
    "category": "type",
    "text": "XzCompressorStream(stream::IO; kwargs...)\n\nCreate an xz compression stream (see XzCompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecXz.XzDecompressor",
    "page": "Docstrings",
    "title": "CodecXz.XzDecompressor",
    "category": "type",
    "text": "XzDecompressor(;memlimit=18446744073709551615, flags=LZMA_CONCATENATED)\n\nCreate an xz decompression codec.\n\nArguments\n\nmemlimit: memory usage limit as bytes\nflags: decoder flags\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecXz.XzDecompressorStream",
    "page": "Docstrings",
    "title": "CodecXz.XzDecompressorStream",
    "category": "type",
    "text": "XzDecompressorStream(stream::IO; kwargs...)\n\nCreate an xz decompression stream (see XzDecompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CodecXz.CodecXzCodecXz.DEFAULT_CHECKCodecXz.DEFAULT_COMPRESSION_LEVELCodecXz.DEFAULT_MEM_LIMITCodecXz.LZMAStreamCodecXz.LZMA_BUF_ERRORCodecXz.LZMA_CHECK_CRC32CodecXz.LZMA_CHECK_CRC64CodecXz.LZMA_CHECK_NONECodecXz.LZMA_CHECK_SHA256CodecXz.LZMA_CONCATENATEDCodecXz.LZMA_DATA_ERRORCodecXz.LZMA_FINISHCodecXz.LZMA_FORMAT_ERRORCodecXz.LZMA_FULL_BARRIERCodecXz.LZMA_FULL_FLUSHCodecXz.LZMA_GET_CHECKCodecXz.LZMA_IGNORE_CHECKCodecXz.LZMA_MEMLIMIT_ERRORCodecXz.LZMA_MEM_ERRORCodecXz.LZMA_NO_CHECKCodecXz.LZMA_OKCodecXz.LZMA_OPTIONS_ERRORCodecXz.LZMA_PROG_ERRORCodecXz.LZMA_RUNCodecXz.LZMA_STREAM_ENDCodecXz.LZMA_SYNC_FLUSHCodecXz.LZMA_TELL_ANY_CHECKCodecXz.LZMA_TELL_NO_CHECKCodecXz.LZMA_TELL_UNSUPPORTED_CHECKCodecXz.LZMA_UNSUPPORTED_CHECKCodecXz.XzCompressorCodecXz.XzCompressorStreamCodecXz.XzDecompressorCodecXz.XzDecompressorStreamCodecXz.check_depsCodecXz.codeCodecXz.easy_encoderCodecXz.evalCodecXz.freeCodecXz.includeCodecXz.liblzmaCodecXz.liblzmapathCodecXz.lzma_error_stringCodecXz.lzmaerrorCodecXz.stream_decoder"
},

]}
