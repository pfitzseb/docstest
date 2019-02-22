var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StringEncodings-1",
    "page": "Readme",
    "title": "StringEncodings",
    "category": "section",
    "text": "(Image: Travis CI Build Status) (Image: AppVeyor Build Status) (Image: Coveralls Coverage Status) (Image: Codecov Coverage Status)(Image: Julia 0.6 Status) (Image: Julia 0.7 Status)This Julia package provides support for decoding and encoding texts between multiple character encodings. It is currently based on the iconv interface, and supports all major platforms using either the native iconv support or GNU libiconv. In the future, native Julia support for major encodings will be added."
},

{
    "location": "#Encoding-and-Decoding-Strings-1",
    "page": "Readme",
    "title": "Encoding and Decoding Strings",
    "category": "section",
    "text": "Encoding a refers to the process of converting a string (of any AbstractString type) to a sequence of bytes represented as a Vector{UInt8}. Decoding refers to the inverse process.julia> using StringEncodings\n\njulia> encode(\"café\", \"UTF-16\")\n10-element Array{UInt8,1}:\n 0xff\n 0xfe\n 0x63\n 0x00\n 0x61\n 0x00\n 0x66\n 0x00\n 0xe9\n 0x00\n\njulia> decode(ans, \"UTF-16\")\n\"café\"Use the encodings function to get the list of all supported encodings on the current platform:julia> encodings()\n411-element Array{String,1}:\n \"850\"\n \"862\"\n \"866\"\n \"ANSI_X3.4-1968\"\n \"ANSI_X3.4-1986\"\n \"ARABIC\"\n \"ARMSCII-8\"\n \"ASCII\"\n \"ASMO-708\"\n ⋮\n \"WINDOWS-1257\"\n \"windows-1258\"\n \"WINDOWS-1258\"\n \"windows-874\"\n \"WINDOWS-874\"\n \"WINDOWS-936\"\n \"X0201\"\n \"X0208\"\n \"X0212\"(Note that many of these are aliases for standard names.)"
},

{
    "location": "#The-Encoding-type-1",
    "page": "Readme",
    "title": "The Encoding type",
    "category": "section",
    "text": "In the examples above, the encoding was specified as a standard string. Though, in order to avoid ambiguities in multiple dispatch and to increase performance via type specialization, the package offers a special Encoding parametric type. Each parameterization of this type represents a character encoding. The non-standard string literal enc can be used to create an instance of this type, like so: enc\"UTF-16\".Since there is no ambiguity, the encode and decode functions accept either a string or an Encoding object. On the other hand, other functions presented below only support the latter to avoid creating conflicts with other packages extending Julia Base methods.In future versions, the Encoding type will allow getting information about character encodings, and will be used to improve the performance of conversions."
},

{
    "location": "#Reading-from-and-Writing-to-Encoded-Text-Files-1",
    "page": "Readme",
    "title": "Reading from and Writing to Encoded Text Files",
    "category": "section",
    "text": "The package also provides several simple methods to deal with files containing encoded text. They extend the equivalent functions from Julia Base, which only support text stored in the UTF-8 encoding.A method for open is provided to write a string under an encoded form to a file:julia> path = tempname();\n\njulia> f = open(path, enc\"UTF-16\", \"w\");\n\njulia> write(f, \"café\\nnoël\");\n\njulia> close(f); # Essential to complete encodingThe contents of the file can then be read back using read(path, String):julia> read(path, String) # Standard function expects UTF-8\n\"\\xfe\\xff\\0c\\0a\\0f\\0\\xe9\\0\\n\\0n\\0o\\0\\xeb\\0l\"\n\njulia> read(path, String, enc\"UTF-16\") # Works when passing the correct encoding\n\"café\\nnoël\"Other variants of standard convenience functions are provided:julia> readline(path, enc\"UTF-16\")\n\"café\"\n\njulia> readlines(path, enc\"UTF-16\")\n2-element Array{String,1}:\n \"café\"\n \"noël\"  \n\njulia> for l in eachline(path, enc\"UTF-16\")\n           println(l)\n       end\ncafé\nnoël\n\njulia> readuntil(path, enc\"UTF-16\", \"ë\")\n\"café\\nno\"When performing more complex operations on an encoded text file, it will often be easier to specify the encoding only once when opening it. The resulting I/O stream can then be passed to functions that are unaware of encodings (i.e. that assume UTF-8 text):julia> io = open(path, enc\"UTF-16\");\n\njulia> read(io, String)\n\"café\\nnoël\"In particular, this method allows reading encoded comma-separated values (CSV) and other character-delimited text files:julia> using DelimitedFiles\n\njulia> open(readcsv, path, enc\"UTF-16\")\n2x1 Array{Any,2}:\n \"café\"\n \"noël\""
},

{
    "location": "#Advanced-Usage:-StringEncoder-and-StringDecoder-1",
    "page": "Readme",
    "title": "Advanced Usage: StringEncoder and StringDecoder",
    "category": "section",
    "text": "The convenience functions presented above are based on the StringEncoder and StringDecoder types, which wrap I/O streams and offer on-the-fly character encoding conversion facilities. They can be used directly if you need to work with encoded text on an already existing I/O stream. This can be illustrated using an IOBuffer:julia> b = IOBuffer();\n\njulia> s = StringEncoder(b, \"UTF-16\");\n\njulia> write(s, \"café\"); # Encoding happens automatically here\n\njulia> close(s); # Essential to complete encoding\n\njulia> seek(b, 0); # Move to start of buffer\n\njulia> s = StringDecoder(b, \"UTF-16\");\n\njulia> read(s, String) # Decoding happens automatically here\n\"café\"Do not forget to call close on StringEncoder and StringDecoder objects to finish the encoding process. For StringEncoder, this function calls flush, which writes any characters still in the buffer, and possibly some control sequences (for stateful encodings). For both StringEncoder and StringDecoder, close checks that there are no incomplete sequences left in the input stream, and raise an IncompleteSequenceError if that\'s the case. It will also free iconv resources immediately, instead of waiting for garbage collection.Conversion currently raises an error if an invalid byte sequence is encountered in the input, or if some characters cannot be represented in the target enconding. It is not yet possible to ignore such characters or to replace them with a placeholder."
},

{
    "location": "#Notes-on-Installation-on-Linux-OS-1",
    "page": "Readme",
    "title": "Notes on Installation on Linux OS",
    "category": "section",
    "text": "Most Linux distributions provide iconv functionalities as part of the base operating system library glibc. In normal circumstances, no additional installation of libiconv should be required. If you observe such a behavior on your operating system, file an issue with OS details."
},

{
    "location": "autodocs/#StringEncodings.StringDecoder",
    "page": "Docstrings",
    "title": "StringEncodings.StringDecoder",
    "category": "type",
    "text": "StringDecoder(stream, from, to=enc\"UTF-8\")\n\nReturns a new read-only I/O stream, which converts text in the encoding from read from stream into text in the encoding to.  Calling close on the stream does not close stream.\n\nto and from can be specified either as a string or as an Encoding object.\n\nNote that some implementations (notably the Windows one) may accept invalid sequences in the input data without raising an error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StringEncodings.StringEncoder",
    "page": "Docstrings",
    "title": "StringEncodings.StringEncoder",
    "category": "type",
    "text": "StringEncoder(stream, to, from=enc\"UTF-8\")\n\nReturns a new write-only I/O stream, which converts any text in the encoding from written to it into text in the encoding to written to stream. Calling close on the stream is necessary to complete the encoding (but does not close stream).\n\nto and from can be specified either as a string or as an Encoding object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StringEncodings.decode",
    "page": "Docstrings",
    "title": "StringEncodings.decode",
    "category": "function",
    "text": "decode([T,] a::Vector{UInt8}, enc)\n\nConvert an array of bytes a representing text in encoding enc to a string of type T. By default, a String is returned.\n\nenc can be specified either as a string or as an Encoding object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StringEncodings.encode",
    "page": "Docstrings",
    "title": "StringEncodings.encode",
    "category": "function",
    "text": "encode(s::AbstractString, enc)\n\nConvert string s to an array of bytes representing text in encoding enc. enc can be specified either as a string or as an Encoding object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StringEncodings.encodings",
    "page": "Docstrings",
    "title": "StringEncodings.encodings",
    "category": "function",
    "text": "encodings()\n\nList all encodings supported by encode, decode, StringEncoder and StringDecoder (i.e. by the current iconv implementation).\n\nNote that encodings typically appear several times under different names. In addition to the encodings returned by this function, the empty string (i.e. \"\") is equivalent to the encoding of the current locale.\n\nSome implementations may support even more encodings: this can be checked by attempting a conversion. In theory, it is not guaranteed that all conversions between all pairs of encodings are possible; but this is the case with all reasonable implementations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StringEncodings.@enc_strStringEncodings.BUFSIZEStringEncodings.EncodingStringEncodings.EncodingsStringEncodings.IConvErrorStringEncodings.IncompleteSequenceErrorStringEncodings.InvalidEncodingErrorStringEncodings.InvalidSequenceErrorStringEncodings.OutputBufferErrorStringEncodings.StringDecoderStringEncodings.StringEncoderStringEncodings.StringEncodingErrorStringEncodings.StringEncodingsStringEncodings.__init__StringEncodings.check_depsStringEncodings.decodeStringEncodings.depsjl_pathStringEncodings.encodeStringEncodings.encodingStringEncodings.encodingsStringEncodings.encodings_listStringEncodings.evalStringEncodings.fill_buffer!StringEncodings.finalizeStringEncodings.iconv!StringEncodings.iconv_closeStringEncodings.iconv_close_sStringEncodings.iconv_openStringEncodings.iconv_open_sStringEncodings.iconv_reset!StringEncodings.iconv_sStringEncodings.includeStringEncodings.libiconvStringEncodings.messageStringEncodings.test_encodingStringEncodings.wrap_stream"
},

]}
