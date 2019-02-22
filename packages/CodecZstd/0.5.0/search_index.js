var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CodecZstd.jl-1",
    "page": "Readme",
    "title": "CodecZstd.jl",
    "category": "section",
    "text": "[![TravisCI Status][travisci-img]][travisci-url] [![AppVeyor Status][appveyor-img]][appveyor-url] [![codecov.io][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"CodecZstd\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using CodecZstd\n\n# Some text.\ntext = \"\"\"\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin\nmauris non nisi consectetur, a dapibus urna pretium. Vestibulum non posuere\nerat. Donec luctus a turpis eget aliquet. Cras tristique iaculis ex, eu\nmalesuada sem interdum sed. Vestibulum ante ipsum primis in faucibus orci luctus\net ultrices posuere cubilia Curae; Etiam volutpat, risus nec gravida ultricies,\nerat ex bibendum ipsum, sed varius ipsum ipsum vitae dui.\n\"\"\"\n\n# Streaming API.\nstream = ZstdCompressorStream(IOBuffer(text))\nfor line in eachline(ZstdDecompressorStream(stream))\n    println(line)\nend\nclose(stream)\n\n# Array API.\ncompressed = transcode(ZstdCompressor, text)\n@assert sizeof(compressed) < sizeof(text)\n@assert transcode(ZstdDecompressor, compressed) == Vector{UInt8}(text)This package exports following codecs and streams:Codec Stream\nZstdCompressor ZstdCompressorStream\nZstdDecompressor ZstdDecompressorStreamSee docstrings and TranscodingStreams.jl for details.[travisci-img]: https://travis-ci.org/bicycle1885/CodecZstd.jl.svg?branch=master [travisci-url]: https://travis-ci.org/bicycle1885/CodecZstd.jl [appveyor-img]: https://ci.appveyor.com/api/projects/status/u58v32yenqf19x2a?svg=true [appveyor-url]: https://ci.appveyor.com/project/bicycle1885/codeczstd-jl [codecov-img]: http://codecov.io/github/bicycle1885/CodecZstd.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/bicycle1885/CodecZstd.jl?branch=master"
},

{
    "location": "autodocs/#CodecZstd.ZstdCompressor",
    "page": "Docstrings",
    "title": "CodecZstd.ZstdCompressor",
    "category": "type",
    "text": "ZstdCompressor(;level=3)\n\nCreate a new zstd compression codec.\n\nArguments\n\nlevel: compression level (1..22)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZstd.ZstdCompressorStream",
    "page": "Docstrings",
    "title": "CodecZstd.ZstdCompressorStream",
    "category": "type",
    "text": "ZstdCompressorStream(stream::IO; kwargs...)\n\nCreate a new zstd compression stream (see ZstdCompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZstd.ZstdDecompressor",
    "page": "Docstrings",
    "title": "CodecZstd.ZstdDecompressor",
    "category": "type",
    "text": "ZstdDecompressor()\n\nCreate a new zstd decompression codec.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZstd.ZstdDecompressorStream",
    "page": "Docstrings",
    "title": "CodecZstd.ZstdDecompressorStream",
    "category": "type",
    "text": "ZstdDecompressorStream(stream::IO; kwargs...)\n\nCreate a new zstd decompression stream (kwargs are passed to TranscodingStream).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CodecZstd.CStreamCodecZstd.CodecZstdCodecZstd.DEFAULT_COMPRESSION_LEVELCodecZstd.DStreamCodecZstd.InBufferCodecZstd.MAX_CLEVELCodecZstd.OutBufferCodecZstd.ZstdCompressorCodecZstd.ZstdCompressorStreamCodecZstd.ZstdDecompressorCodecZstd.ZstdDecompressorStreamCodecZstd.check_depsCodecZstd.compress!CodecZstd.decompress!CodecZstd.evalCodecZstd.finish!CodecZstd.free!CodecZstd.includeCodecZstd.initialize!CodecZstd.iserrorCodecZstd.libzpathCodecZstd.libzstdCodecZstd.max_clevelCodecZstd.reset!CodecZstd.zstderror"
},

]}
