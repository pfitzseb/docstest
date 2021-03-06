var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "TranscodingStreams.jl",
    "title": "TranscodingStreams.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#TranscodingStreams.jl-1",
    "page": "TranscodingStreams.jl",
    "title": "TranscodingStreams.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "TranscodingStreams.jl",
    "title": "Overview",
    "category": "section",
    "text": "TranscodingStreams.jl is a package for transcoding (e.g. compression) data streams. It exports a type TranscodingStream, which is a subtype of IO and supports various I/O operations like other usual I/O streams in the standard library. Operations are quick, simple, and consistent.In this page, we intorduce the basic concepts of TranscodingStreams.jl and available packages. The Examples page demonstrates common usage. The References page offers a comprehensive API document."
},

{
    "location": "#Introduction-1",
    "page": "TranscodingStreams.jl",
    "title": "Introduction",
    "category": "section",
    "text": "TranscodingStream has two type parameters, C<:Codec and S<:IO, and hence the actual type should be written as TranscodingStream{C<:Codec,S<:IO}. This type wraps an underlying I/O stream S by a codec C. The codec defines transformation (or transcoding) of the stream. For example, when C is a lossless decompressor type and S is a file, TranscodingStream{C,S} behaves like a data stream that incrementally decompresses data from the file.Codecs are defined in other packages listed below:<table>\n    <tr>\n        <th>Package</th>\n        <th>Library</th>\n        <th>Format</th>\n        <th>Codec</th>\n        <th>Stream</th>\n        <th>Description</th>\n    </tr>\n    <tr>\n        <td rowspan=\"6\"><a href=\"https://github.com/bicycle1885/CodecZlib.jl\">CodecZlib.jl</a></td>\n        <td rowspan=\"6\"><a href=\"http://zlib.net/\">zlib</a></td>\n        <td rowspan=\"2\"><a href=\"https://tools.ietf.org/html/rfc1952\">RFC1952</a></td>\n        <td><code>GzipCompressor</code></td>\n        <td><code>GzipCompressorStream</code></td>\n        <td>Compress data in gzip (.gz) format.</td>\n    </tr>\n    <tr>\n        <td><code>GzipDecompressor</code></td>\n        <td><code>GzipDecompressorStream</code></td>\n        <td>Decompress data in gzip (.gz) format.</td>\n    </tr>\n    <tr>\n        <td rowspan=\"2\"><a href=\"https://tools.ietf.org/html/rfc1950\">RFC1950</a></td>\n        <td><code>ZlibCompressor</code></td>\n        <td><code>ZlibCompressorStream</code></td>\n        <td>Compress data in zlib format.</td>\n    </tr>\n    <tr>\n        <td><code>ZlibDecompressor</code></td>\n        <td><code>ZlibDecompressorStream</code></td>\n        <td>Decompress data in zlib format.</td>\n    </tr>\n    <tr>\n        <td rowspan=\"2\"><a href=\"https://tools.ietf.org/html/rfc1951\">RFC1951</a></td>\n        <td><code>DeflateCompressor</code></td>\n        <td><code>DeflateCompressorStream</code></td>\n        <td>Compress data in deflate format.</td>\n    </tr>\n    <tr>\n        <td><code>DeflateDecompressor</code></td>\n        <td><code>DeflateDecompressorStream</code></td>\n        <td>Decompress data in deflate format.</td>\n    </tr>\n    <tr>\n        <td rowspan=\"2\"><a href=\"https://github.com/bicycle1885/CodecBzip2.jl\">CodecBzip2.jl</a></td>\n        <td rowspan=\"2\"><a href=\"http://www.bzip.org/\">bzip2</a></td>\n        <td rowspan=\"2\"></td>\n        <td><code>Bzip2Compressor</code></td>\n        <td><code>Bzip2CompressorStream</code></td>\n        <td>Compress data in bzip2 (.bz2) format.</td>\n    </tr>\n    <tr>\n        <td><code>Bzip2Decompressor</code></td>\n        <td><code>Bzip2DecompressorStream</code></td>\n        <td>Decompress data in bzip2 (.bz2) format.</td>\n    </tr>\n    <tr>\n        <td rowspan=\"2\"><a href=\"https://github.com/bicycle1885/CodecXz.jl\">CodecXz.jl</a></td>\n        <td rowspan=\"2\"><a href=\"https://tukaani.org/xz/\">xz</a></td>\n        <td rowspan=\"2\"><a href=\"https://tukaani.org/xz/xz-file-format.txt\">The .xz File Format</a></td>\n        <td><code>XzCompressor</code></td>\n        <td><code>XzCompressorStream</code></td>\n        <td>Compress data in xz (.xz) format.</td>\n    </tr>\n    <tr>\n        <td><code>XzDecompressor</code></td>\n        <td><code>XzDecompressorStream</code></td>\n        <td>Decompress data in xz (.xz) format.</td>\n    </tr>\n    <tr>\n        <td rowspan=\"2\"><a href=\"https://github.com/bicycle1885/CodecZstd.jl\">CodecZstd.jl</a></td>\n        <td rowspan=\"2\"><a href=\"http://facebook.github.io/zstd/\">zstd</a></td>\n        <td rowspan=\"2\"><a href=\"https://github.com/facebook/zstd/blob/dev/doc/zstd_compressor_format.md\">Zstandard Compressor Format</a></td>\n        <td><code>ZstdCompressor</code></td>\n        <td><code>ZstdCompressorStream</code></td>\n        <td>Compress data in zstd (.zst) format.</td>\n    </tr>\n    <tr>\n        <td><code>ZstdDecompressor</code></td>\n        <td><code>ZstdDecompressorStream</code></td>\n        <td>Decompress data in zstd (.zst) format.</td>\n    </tr>\n    <tr>\n        <td rowspan=\"6\"><a href=\"https://github.com/bicycle1885/CodecBase.jl\">CodecBase.jl</a></td>\n        <td rowspan=\"6\">native</td>\n        <td rowspan=\"6\"><a href=\"https://tools.ietf.org/html/rfc4648\">RFC4648</a></td>\n        <td><code>Base16Encoder</code></td>\n        <td><code>Base16EncoderStream</code></td>\n        <td>Encode binary in base16 format.</td>\n    </tr>\n    <tr>\n        <td><code>Base16Decoder</code></td>\n        <td><code>Base16DecoderStream</code></td>\n        <td>Decode binary in base16 format.</td>\n    </tr>\n    <tr>\n        <td><code>Base32Encoder</code></td>\n        <td><code>Base32EncoderStream</code></td>\n        <td>Encode binary in base32 format.</td>\n    </tr>\n    <tr>\n        <td><code>Base32Decoder</code></td>\n        <td><code>Base32DecoderStream</code></td>\n        <td>Decode binary in base32 format.</td>\n    </tr>\n    <tr>\n        <td><code>Base64Encoder</code></td>\n        <td><code>Base64EncoderStream</code></td>\n        <td>Encode binary in base64 format.</td>\n    </tr>\n    <tr>\n        <td><code>Base64Decoder</code></td>\n        <td><code>Base64DecoderStream</code></td>\n        <td>Decode binary in base64 format.</td>\n    </tr>\n</table>Install packages you need by calling Pkg.add(<package name>) in a Julia session. For example, if you want to read gzip-compressed files, call Pkg.add(\"CodecZlib\") to use GzipDecompressor or GzipDecompressorStream. By convention, codec types have a name that matches .*(Co|Deco)mpression and I/O types have a codec name with Stream suffix. All codecs are a subtype TranscodingStreams.Codec and streams are a subtype of Base.IO. An important thing is these packages depend on TranscodingStreams.jl and not vice versa. This means you can install any codec package you need without installing all codec packages.  Also, if you want to define your own codec, it is totally feasible like these packages.  TranscodingStreams.jl requests a codec to implement some interface functions which will be described later."
},

{
    "location": "#Error-handling-1",
    "page": "TranscodingStreams.jl",
    "title": "Error handling",
    "category": "section",
    "text": "You may encounter an error while processing data with this package. For example, your compressed data may be corrupted or truncated and the decompressor codec cannot handle it properly. In this case, the codec informs the stream of the error and the stream goes to an unrecoverable mode. In this mode, the only possible operations are isopen and close. Other operations, such as read or write, will result in an argument error exception. Resources allocated in the codec will be released by the stream and hence you must not call the finalizer of a codec that is once passed to a transcoding stream object."
},

{
    "location": "examples/#",
    "page": "Examples",
    "title": "Examples",
    "category": "page",
    "text": ""
},

{
    "location": "examples/#Examples-1",
    "page": "Examples",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "examples/#Read-lines-from-a-gzip-compressed-file-1",
    "page": "Examples",
    "title": "Read lines from a gzip-compressed file",
    "category": "section",
    "text": "The following snippet is an example of using CodecZlib.jl, which exports GzipDecompressorStream{S} as an alias of TranscodingStream{GzipDecompressor,S} where S<:IO:using CodecZlib\nstream = GzipDecompressorStream(open(\"data.txt.gz\"))\nfor line in eachline(stream)\n    # do something...\nend\nclose(stream)Note that the last close call will close the file as well.  Alternatively, open(<stream type>, <filepath>) do ... end syntax will close the file at the end:using CodecZlib\nopen(GzipDecompressorStream, \"data.txt.gz\") do stream\n    for line in eachline(stream)\n        # do something...\n    end\nend"
},

{
    "location": "examples/#Read-compressed-data-from-a-pipe-1",
    "page": "Examples",
    "title": "Read compressed data from a pipe",
    "category": "section",
    "text": "The input is not limited to usual files. You can read data from a pipe (actually, any IO object that implements basic I/O methods) as follows:using CodecZlib\npipe, proc = open(`cat some.data.gz`)\nstream = GzipDecompressorStream(pipe)\nfor line in eachline(stream)\n    # do something...\nend\nclose(stream)  # This will finish the process as well."
},

{
    "location": "examples/#Save-a-data-matrix-with-Zstd-compression-1",
    "page": "Examples",
    "title": "Save a data matrix with Zstd compression",
    "category": "section",
    "text": "Writing compressed data is easy. One thing you need to keep in mind is to call close after writing data; otherwise, the output file will be incomplete:using CodecZstd\nmat = randn(100, 100)\nstream = ZstdCompressorStream(open(\"data.mat.zst\", \"w\"))\nwritedlm(stream, mat)\nclose(stream)Of course, open(<stream type>, ...) do ... end works well:using CodecZstd\nmat = randn(100, 100)\nopen(ZstdCompressorStream, \"data.mat.zst\", \"w\") do stream\n    writedlm(stream, mat)\nend"
},

{
    "location": "examples/#Explicitly-finish-transcoding-by-writing-TOKEN_END-1",
    "page": "Examples",
    "title": "Explicitly finish transcoding by writing TOKEN_END",
    "category": "section",
    "text": "When writing data, the end of a data stream is indicated by calling close, which may write an epilogue if necessary and flush all buffered data to the underlying I/O stream. If you want to explicitly specify the end position of a stream for some reason, you can write TranscodingStreams.TOKEN_END to the transcoding stream as follows:using CodecZstd\nusing TranscodingStreams\nbuf = IOBuffer()\nstream = ZstdCompressorStream(buf)\nwrite(stream, \"foobarbaz\"^100, TranscodingStreams.TOKEN_END)\nflush(stream)\ncompressed = take!(buf)\nclose(stream)"
},

{
    "location": "examples/#Use-a-noop-codec-1",
    "page": "Examples",
    "title": "Use a noop codec",
    "category": "section",
    "text": "Sometimes, the Noop codec, which does nothing, may be useful. The following example creates a decompressor stream based on the extension of a filepath:using CodecZlib\nusing CodecBzip2\nusing TranscodingStreams\n\nfunction makestream(filepath)\n    if endswith(filepath, \".gz\")\n        codec = GzipDecompressor()\n    elseif endswith(filepath, \".bz2\")\n        codec = Bzip2Decompressor()\n    else\n        codec = Noop()\n    end\n    return TranscodingStream(codec, open(filepath))\nend\n\nmakestream(\"data.txt.gz\")\nmakestream(\"data.txt.bz2\")\nmakestream(\"data.txt\")"
},

{
    "location": "examples/#Change-the-codec-of-a-file-1",
    "page": "Examples",
    "title": "Change the codec of a file",
    "category": "section",
    "text": "TranscodingStreams are composable: a stream can be an input/output of another stream. You can use this to chage the codec of a file by composing different codecs as below:using CodecZlib\nusing CodecZstd\n\ninput  = open(\"data.txt.gz\",  \"r\")\noutput = open(\"data.txt.zst\", \"w\")\n\nstream = GzipDecompressorStream(ZstdCompressorStream(output))\nwrite(stream, input)\nclose(stream)Effectively, this is equivalent to the following pipeline:cat data.txt.gz | gzip -d | zstd >data.txt.zst"
},

{
    "location": "examples/#Stop-decoding-on-the-end-of-a-block-1",
    "page": "Examples",
    "title": "Stop decoding on the end of a block",
    "category": "section",
    "text": "Most codecs support decoding concatenated data blocks. For example, if you concatenate two gzip files into a file and read it using GzipDecompressorStream, you will see the byte stream of concatenation of two files. If you need the first part of the file, you can set stop_on_end to true to stop transcoding at the end of the first block:using CodecZlib\n# cat foo.txt.gz bar.txt.gz > foobar.txt.gz\nstream = GzipDecompressorStream(open(\"foobar.txt.gz\"), stop_on_end=true)\nread(stream)  #> the content of foo.txt\neof(stream)   #> trueIn the case where you need to reuse the wrapped stream, the code above must be slightly modified because the transcoding stream may read more bytes than necessary from the wrapped stream. By wrapping a stream with NoopStream, the problem of overreading is resolved:using CodecZlib\nusing TranscodingStreams\nstream = NoopStream(open(\"foobar.txt.gz\"))\nread(GzipDecompressorStream(stream, stop_on_end=true))  #> the content of foo.txt\nread(GzipDecompressorStream(stream, stop_on_end=true))  #> the content of bar.txt"
},

{
    "location": "examples/#Check-I/O-statistics-1",
    "page": "Examples",
    "title": "Check I/O statistics",
    "category": "section",
    "text": "TranscodingStreams.stats returns a snapshot of the I/O statistics. For example, the following function shows progress of decompression to the standard error:using CodecZlib\n\nfunction decompress(input, output)\n    buffer = Vector{UInt8}(16 * 1024)\n    while !eof(input)\n        n = min(nb_available(input), length(buffer))\n        unsafe_read(input, pointer(buffer), n)\n        unsafe_write(output, pointer(buffer), n)\n        stats = TranscodingStreams.stats(input)\n        print(STDERR, \"\\rin: $(stats.in), out: $(stats.out)\")\n    end\n    println(STDERR)\nend\n\ninput = GzipDecompressorStream(open(\"foobar.txt.gz\"))\noutput = IOBuffer()\ndecompress(input, output)stats.in is the number of bytes supplied to the stream and stats.out is the number of bytes consumed out of the stream."
},

{
    "location": "examples/#Transcode-data-in-one-shot-1",
    "page": "Examples",
    "title": "Transcode data in one shot",
    "category": "section",
    "text": "TranscodingStreams.jl extends the transcode function to transcode a data in one shot. transcode takes a codec object as its first argument and a data vector as its second argument:using CodecZlib\ndecompressed = transcode(ZlibDecompressor, b\"x\\x9cKL*JLNLI\\x04R\\x00\\x19\\xf2\\x04U\")\nString(decompressed)"
},

{
    "location": "examples/#Transcode-lots-of-strings-1",
    "page": "Examples",
    "title": "Transcode lots of strings",
    "category": "section",
    "text": "transcode(<codec type>, data) method is convenient but suboptimal when transcoding a number of objects. This is because the method reallocates a new codec object for every call. Instead, you can use transcode(<codec object>, data) method that reuses the allocated object as follows:using CodecZstd\nstrings = [\"foo\", \"bar\", \"baz\"]\ncodec = ZstdCompressor()\ntry\n    for s in strings\n        data = transcode(codec, s)\n        # do something...\n    end\ncatch\n    rethrow()\nfinally\n    CodecZstd.TranscodingStreams.finalize(codec)\nend"
},

{
    "location": "examples/#Unread-data-1",
    "page": "Examples",
    "title": "Unread data",
    "category": "section",
    "text": "TranscodingStream supports unread operation, which inserts data into the current reading position. This is useful when you want to peek from the stream. TranscodingStreams.unread and TranscodingStreams.unsafe_unread functions are provided:using TranscodingStreams\nstream = NoopStream(open(\"data.txt\"))\ndata1 = read(stream, 8)\nTranscodingStreams.unread(stream, data1)\ndata2 = read(stream, 8)\n@assert data1 == data2The unread operaion is different from the write operation in that the unreaded data are not written to the wrapped stream. The unreaded data are stored in the internal buffer of a transcoding stream.Unfortunately, unwrite operation is not provided because there is no way to cancel write operations that are already commited to the wrapped stream."
},

{
    "location": "references/#",
    "page": "References",
    "title": "References",
    "category": "page",
    "text": ""
},

{
    "location": "references/#References-1",
    "page": "References",
    "title": "References",
    "category": "section",
    "text": "CurrentModule = TranscodingStreams"
},

{
    "location": "references/#TranscodingStreams.TranscodingStream-Tuple{TranscodingStreams.Codec,IO}",
    "page": "References",
    "title": "TranscodingStreams.TranscodingStream",
    "category": "method",
    "text": "TranscodingStream(codec::Codec, stream::IO;\n                  bufsize::Integer=16384,\n                  stop_on_end::Bool=false,\n                  sharedbuf::Bool=(stream isa TranscodingStream))\n\nCreate a transcoding stream with codec and stream.\n\nA TranscodingStream object wraps an input/output stream object stream, and transcodes the byte stream using codec. It is a subtype of IO and supports most of the I/O functions in the standard library.\n\nSee the docs (https://bicycle1885.github.io/TranscodingStreams.jl/stable/) for available codecs, examples, and more details of the type.\n\nArguments\n\ncodec:   The data transcoder. The transcoding stream does the initialization and   finalization of codec. Therefore, a codec object is not reusable once it   is passed to a transcoding stream.\nstream:   The wrapped stream. It must be opened before passed to the constructor.\nbufsize:   The initial buffer size (the default size is 16KiB). The buffer may be   extended whenever codec requests so.\nstop_on_end:   The flag to stop transcoding on :end return code of codec.  The   transcoded data are readable even after the end of transcoding.  Note that   some extra data may be read from stream into a buffer and thus sharedbuf   must be true to reuse stream.\nsharedbuf:   The flag to share buffers between adjacent transcoding streams.  The value   must be false if stream is not a TranscodingStream object.\n\nExamples\n\njulia> using TranscodingStreams\n\njulia> using CodecZlib\n\njulia> file = open(Pkg.dir(\"TranscodingStreams\", \"test\", \"abra.gzip\"));\n\njulia> stream = TranscodingStream(GzipDecompressor(), file)\nTranscodingStreams.TranscodingStream{CodecZlib.GzipDecompressor,IOStream}(<mode=idle>)\n\njulia> readstring(stream)\n\"abracadabra\"\n\n\n\n\n\n\n"
},

{
    "location": "references/#Base.transcode-Tuple{TranscodingStreams.Codec,Array{UInt8,1}}",
    "page": "References",
    "title": "Base.transcode",
    "category": "method",
    "text": "transcode(codec::Codec, data::Vector{UInt8})::Vector{UInt8}\n\nTranscode data by applying codec.\n\nNote that this method does not deallocation of codec, which is efficient but the caller may need to deallocate codec.\n\nExamples\n\njulia> using CodecZlib\n\njulia> data = b\"abracadabra\";\n\njulia> codec = ZlibCompressor();\n\njulia> compressed = transcode(codec, data);\n\njulia> TranscodingStreams.finalize(codec)\n\njulia> codec = ZlibDecompressor();\n\njulia> decompressed = transcode(codec, compressed);\n\njulia> TranscodingStreams.finalize(codec)\n\njulia> String(decompressed)\n\"abracadabra\"\n\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.TOKEN_END",
    "page": "References",
    "title": "TranscodingStreams.TOKEN_END",
    "category": "constant",
    "text": "A special token indicating the end of data.\n\nTOKEN_END may be written to a transcoding stream like write(stream, TOKEN_END), which will terminate the current transcoding block.\n\nnote: Note\nCall flush(stream) after write(stream, TOKEN_END) to make sure that all data are written to the underlying stream.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.unsafe_read",
    "page": "References",
    "title": "TranscodingStreams.unsafe_read",
    "category": "function",
    "text": "unsafe_read(input::IO, output::Ptr{UInt8}, nbytes::Int)::Int\n\nCopy at most nbytes from input into output.\n\nThis function is similar to Base.unsafe_read but is different in some points:\n\nIt does not throw EOFError when it fails to read nbytes from input.\nIt returns the number of bytes written to output.\nIt does not block if there are buffered data in input.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.unread",
    "page": "References",
    "title": "TranscodingStreams.unread",
    "category": "function",
    "text": "unread(stream::TranscodingStream, data::Vector{UInt8})\n\nInsert data to the current reading position of stream.\n\nThe next read(stream, sizeof(data)) call will read data that are just inserted.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.unsafe_unread",
    "page": "References",
    "title": "TranscodingStreams.unsafe_unread",
    "category": "function",
    "text": "unsafe_unread(stream::TranscodingStream, data::Ptr, nbytes::Integer)\n\nInsert nbytes pointed by data to the current reading position of stream.\n\nThe data are copied into the internal buffer and hence data can be safely used after the operation without interfering the stream.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStream-1",
    "page": "References",
    "title": "TranscodingStream",
    "category": "section",
    "text": "TranscodingStream(codec::Codec, stream::IO)\ntranscode(codec::Codec, data::Vector{UInt8})\nTranscodingStreams.TOKEN_END\nTranscodingStreams.unsafe_read\nTranscodingStreams.unread\nTranscodingStreams.unsafe_unread"
},

{
    "location": "references/#TranscodingStreams.Stats",
    "page": "References",
    "title": "TranscodingStreams.Stats",
    "category": "type",
    "text": "I/O statistics.\n\nIts object has four fields:\n\nin: the number of bytes supplied into the stream\nout: the number of bytes consumed out of the stream\ntranscoded_in: the number of bytes transcoded from the input buffer\ntranscoded_out: the number of bytes transcoded to the output buffer\n\nNote that, since the transcoding stream does buffering, in is transcoded_in + {size of buffered data} and out is transcoded_out - {size of buffered data}.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.stats",
    "page": "References",
    "title": "TranscodingStreams.stats",
    "category": "function",
    "text": "stats(stream::TranscodingStream)\n\nCreate an I/O statistics object of stream.\n\n\n\n\n\n"
},

{
    "location": "references/#Statistics-1",
    "page": "References",
    "title": "Statistics",
    "category": "section",
    "text": "TranscodingStreams.Stats\nTranscodingStreams.stats"
},

{
    "location": "references/#TranscodingStreams.Noop",
    "page": "References",
    "title": "TranscodingStreams.Noop",
    "category": "type",
    "text": "Noop()\n\nCreate a noop codec.\n\nNoop (no operation) is a codec that does nothing. The data read from or written to the stream are kept as-is without any modification. This is often useful as a buffered stream or an identity element of a composition of streams.\n\nThe implementations are specialized for this codec. For example, a Noop stream uses only one buffer rather than a pair of buffers, which avoids copying data between two buffers and the throughput will be larger than a naive implementation.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.NoopStream",
    "page": "References",
    "title": "TranscodingStreams.NoopStream",
    "category": "type",
    "text": "NoopStream(stream::IO)\n\nCreate a noop stream.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.Codec",
    "page": "References",
    "title": "TranscodingStreams.Codec",
    "category": "type",
    "text": "An abstract codec type.\n\nAny codec supporting the transcoding protocol must be a subtype of this type.\n\nTranscoding protocol\n\nTranscoding proceeds by calling some functions in a specific way. We call this \"transcoding protocol\" and any codec must implement it as described below.\n\nThere are six functions for a codec to implement:\n\nexpectedsize: return the expected size of transcoded data\nminoutsize: return the minimum output size of process\ninitialize: initialize the codec\nfinalize: finalize the codec\nstartproc: start processing with the codec\nprocess: process data with the codec.\n\nThese are defined in the TranscodingStreams and a new codec type must extend these methods if necessary.  Implementing a process method is mandatory but others are optional.  expectedsize, minoutsize, initialize, finalize, and startproc have a default implementation.\n\nYour codec type is denoted by C and its object by codec.\n\nErrors that occur in these methods are supposed to be unrecoverable and the stream will go to the panic mode. Only Base.isopen and Base.close are available in that mode.\n\nexpectedsize\n\nThe expectedsize(codec::C, input::Memory)::Int method takes codec and input, and returns the expected size of transcoded data. This method will be used as a hint to determine the size of a data buffer when transcode is called. A good hint will reduce the number of buffer resizing and hence result in better performance.\n\nminoutsize\n\nThe minoutsize(codec::C, input::Memory)::Int method takes codec and input, and returns the minimum required size of the output memory when process is called.  For example, an encoder of base64 will write at least four bytes to the output and hence it is reasonable to return 4 with this method.\n\ninitialize\n\nThe initialize(codec::C)::Void method takes codec and returns nothing. This is called once and only once before starting any data processing. Therefore, you may initialize codec (e.g. allocating memory needed to process data) with this method. If initialization fails for some reason, it may throw an exception and no other methods (including finalize) will be called. Therefore, you need to release the memory before throwing an exception.\n\nfinalize\n\nThe finalize(codec::C)::Void method takes codec and returns nothing.  This is called once and only only once just before the transcoding stream goes to the close mode (i.e. when Base.close is called) or just after startproc or process throws an exception. Other errors that happen inside the stream (e.g. EOFError) will not call this method. Therefore, you may finalize codec (e.g. freeing memory) with this method. If finalization fails for some reason, it may throw an exception. You should release the allocated memory in codec before returning or throwing an exception in finalize because otherwise nobody cannot release the memory. Even when an exception is thrown while finalizing a stream, the stream will become the close mode for safety.\n\nstartproc\n\nThe startproc(codec::C, mode::Symbol, error::Error)::Symbol method takes codec, mode and error, and returns a status code. This is called just before the stream starts reading or writing data. mode is either :read or :write and then the stream starts reading or writing, respectively.  The return code must be :ok if codec is ready to read or write data.  Otherwise, it must be :error and the error argument must be set to an exception object.\n\nprocess\n\nThe process(codec::C, input::Memory, output::Memory, error::Error)::Tuple{Int,Int,Symbol} method takes codec, input, output and error, and returns a consumed data size, a produced data size and a status code. This is called repeatedly while processing data. The input (input) and output (output) data are a Memory object, which is a pointer to a contiguous memory region with size. You must read input data from input, transcode the bytes, and then write the output data to output.  Finally you need to return the size of read data, the size of written data, and :ok status code so that the caller can know how many bytes are consumed and produced in the method. When transcoding reaches the end of a data stream, it is notified to this method by empty input. In that case, the method need to write the buffered data (if any) to output. If there is no data to write, the status code must be set to :end. The process method will be called repeatedly until it returns :end status code. If an error happens while processing data, the error argument must be set to an exception object and the return code must be :error.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.expectedsize",
    "page": "References",
    "title": "TranscodingStreams.expectedsize",
    "category": "function",
    "text": "expectedsize(codec::Codec, input::Memory)::Int\n\nReturn the expected size of the transcoded input with codec.\n\nThe default method returns input.size.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.minoutsize",
    "page": "References",
    "title": "TranscodingStreams.minoutsize",
    "category": "function",
    "text": "minoutsize(codec::Codec, input::Memory)::Int\n\nReturn the minimum output size to be ensured when calling process.\n\nThe default method returns max(1, div(input.size, 4)).\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.initialize",
    "page": "References",
    "title": "TranscodingStreams.initialize",
    "category": "function",
    "text": "initialize(codec::Codec)::Void\n\nInitialize codec.\n\nThe default method does nothing.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.finalize",
    "page": "References",
    "title": "TranscodingStreams.finalize",
    "category": "function",
    "text": "finalize(codec::Codec)::Void\n\nFinalize codec.\n\nThe default method does nothing.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.startproc",
    "page": "References",
    "title": "TranscodingStreams.startproc",
    "category": "function",
    "text": "startproc(codec::Codec, mode::Symbol, error::Error)::Symbol\n\nStart data processing with codec of mode.\n\nThe default method does nothing and returns :ok.\n\n\n\n\n\n"
},

{
    "location": "references/#TranscodingStreams.process",
    "page": "References",
    "title": "TranscodingStreams.process",
    "category": "function",
    "text": "process(codec::Codec, input::Memory, output::Memory, error::Error)::Tuple{Int,Int,Symbol}\n\nDo data processing with codec.\n\nThere is no default method.\n\n\n\n\n\n"
},

{
    "location": "references/#Codec-1",
    "page": "References",
    "title": "Codec",
    "category": "section",
    "text": "TranscodingStreams.Noop\nTranscodingStreams.NoopStreamTranscodingStreams.Codec\nTranscodingStreams.expectedsize\nTranscodingStreams.minoutsize\nTranscodingStreams.initialize\nTranscodingStreams.finalize\nTranscodingStreams.startproc\nTranscodingStreams.process"
},

{
    "location": "references/#Internal-types-1",
    "page": "References",
    "title": "Internal types",
    "category": "section",
    "text": "TranscodingStreams.Memory\nTranscodingStreams.Error\nTranscodingStreams.State"
},

{
    "location": "devnotes/#",
    "page": "Developer\'s Notes",
    "title": "Developer\'s Notes",
    "category": "page",
    "text": ""
},

{
    "location": "devnotes/#Developer\'s-Notes-1",
    "page": "Developer\'s Notes",
    "title": "Developer\'s Notes",
    "category": "section",
    "text": "These notes are not for end users but rather for developers who are interested in the design of the package."
},

{
    "location": "devnotes/#TranscodingStream-type-1",
    "page": "Developer\'s Notes",
    "title": "TranscodingStream type",
    "category": "section",
    "text": "TranscodingStream{C,S} (defined in src/stream.jl) has three fields:codec: data codec (<:C where C<:Codec)\nstream: data stream (<:S where S<:IO)\nstate: current state (<:State).A codec will be implemented by package developers and only a special codec Noop is defined in this package.  A stream can be any object that implements at least Base.isopen, Base.eof, Base.close, Base.nb_available, Base.unsafe_read, and Base.unsafe_write.  All mutable fields are delegated to state and hence the stream type itself is immutable.A stream has two buffers in the state field. These are used to store pre-transcoded and transcoded data in the stream. The stream passes references of these two buffers to the codec when processing data. The following diagram illustrates the flow of data:When reading data (`state.mode == :read`):\n  user <--- |state.buffer1| <--- <stream.codec> <--- |state.buffer2| <--- stream\n\nWhen writing data (`state.mode == :write`):\n  user ---> |state.buffer1| ---> <stream.codec> ---> |state.buffer2| ---> streamIn the read mode, a user pull out data from state.buffer1 and pre-transcoded data are filled in state.buffer2. In the write mode, a user will push data into state.buffer1 and transcoded data are filled in state.buffer2. The default buffer size is 16KiB for each.State (defined in src/state.jl) has five fields:mode: current stream mode (<:Symbol)\ncode: return code of the last codec\'s method call (<:Symbol)\nerror: exception returned by the codec (<:Error)\nbuffer1: data buffer that is closer to the user (<:Buffer)\nbuffer2: data buffer that is farther to the user (<:Buffer)The mode field may be one of the following value::idle : initial and intermediate mode, no buffered data\n:read : being ready to read data, data may be buffered\n:write: being ready to write data, data may be buffered\n:stop : transcoding is stopped, data may be buffered\n:close: closed, no buffered data\n:panic: an exception has been thrown in codec, data may be buffered but we           cannot do anythingNote that mode=:stop does not mean there is no data available in the stream. This is because transcoded data may be left in the buffer.The initial mode is :idle and mode transition happens as shown in the following diagram: (Image: Mode transition)Modes surrounded by a bold circle are a state in which the transcoding stream has released resources by calling finalize(codec).  The mode transition should happen in the changemode!(stream, newmode) function in src/stream.jl. Trying an undefined transition will thrown an exception.A transition happens according to internal or external events of the transcoding stream. The status code and the error object returned by codec methods are internal events, and user\'s method calls are external events.  For example, calling read(stream) will change the mode from :init to :read and then calling close(stream) will change the mode from :read to :close. When data processing fails in the codec, a codec will return :error and the stream will result in :panic."
},

{
    "location": "devnotes/#Shared-buffers-1",
    "page": "Developer\'s Notes",
    "title": "Shared buffers",
    "category": "section",
    "text": "Adjacent transcoding streams may share their buffers. This will reduce memory allocation and eliminate data copy between buffers.readdata!(input::IO, output::Buffer) and writedata!(output::IO, input::Buffer) do the actual work of read/write data from/to the underlying stream. These methods have a special pass for shared buffers."
},

{
    "location": "devnotes/#Noop-codec-1",
    "page": "Developer\'s Notes",
    "title": "Noop codec",
    "category": "section",
    "text": "Noop (NoopStream) is a codec that does nothing. It works as a buffering layer on top of the underlying stream. Since NoopStream does not need to have two distinct buffers, buffer1 and buffer2 in the State object are shared and some specialized methods are defined for the type. All of these are defined in src/noop.jl."
},

]}
