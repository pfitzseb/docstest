var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WAV.jl-1",
    "page": "Readme",
    "title": "WAV.jl",
    "category": "section",
    "text": "(Image: WAV) (Image: Build Status) (Image: Windows Build Status) (Image: Coverage Status)This is a Julia package to read and write the WAV audio file format."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.add(\"WAV\")"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "WAV provides wavread, wavwrite, and wavappend commands to read, write, and append WAV files. Here is an example to get you started. It generates some data, writes it to a file and then reads the data back. wavplay is also provided for simple audio playback.julia> using WAV\njulia> x = [0:7999;]\njulia> y = sin.(2 * pi * x / 8000)\njulia> wavwrite(y, \"example.wav\", Fs=8000)\njulia> y, fs = wavread(\"example.wav\")\njulia> y = cos.(2 * pi * x / 8000)\njulia> wavappend(y, \"example.wav\")\njulia> y, fs = wavread(\"example.wav\")\njulia> wavplay(y, fs)"
},

{
    "location": "#wavread-1",
    "page": "Readme",
    "title": "wavread",
    "category": "section",
    "text": "This function reads the samples from a WAV file. The samples are converted to floating point values in the range from -1.0 to 1.0 by default.function wavread(io::IO; subrange=Any, format=\"double\")\nfunction wavread(filename::String; subrange=Any, format=\"double\")The available options, and the default values, are:format (default = double): changes the format of the returned samples. The string double returns double precision floating point values in the range -1.0 to 1.0. The string native returns the values as encoded in the file. The string size returns the number of samples in the file, rather than the actual samples.\nsubrange (default = Any): controls which samples are returned. The default, Any returns all of the samples. Passing a number (Real), N, will return the first N samples of each channel. Passing a range (Range1Real), R, will return the samples in that range of each channel.The returned values are:y: The acoustic samples; A matrix is returned for files that contain multiple channels.\nFs: The sampling frequency\nnbits: The number of bits used to encode each sample\nopt: A vector of WAVChunk of optional chunks found in the WAV file.The elements in the opt vector depend on the contents of the WAV file.A WAVChunk is defined asmutable struct WAVChunk\n    id::Symbol\n    data::Vector{UInt8}\nendwhere the ID is the four-character chunk ID. All valid WAV files will contain a fmt chunk, with ID Symbol(fmt ) (note the trailing space).In order to obtain the contents of the format chunk, call getformat(opt). This will return an instance of type WAVFormat. The WAVFormat type is defined as:struct WAVFormat\n    compression_code::UInt16\n    nchannels::UInt16\n    sample_rate::UInt32\n    bytes_per_second::UInt32 # average bytes per second\n    block_align::UInt16\n    nbits::UInt16\n    ext::WAVFormatExtension\nendThe ext field of type WAVFormatExtension is defined as:struct WAVFormatExtension\n    nbits::UInt16 # overrides nbits in WAVFormat type\n    channel_mask::UInt32\n    sub_format::Array{UInt8, 1} # 16 byte GUID\n    WAVFormatExtension() = new(0, 0, Array(UInt8, 0))\n    WAVFormatExtension(nb, cm, sb) = new(nb, cm, sb)\nendYou can use the isformat function to test how the samples are encoded, without worrying about the WAVFormatExtension type. Extended WAV files were added to deal with some ambiguity in the original specification.isformat(fmt::WAVFormat, code)The isformat function takes the WAVFormat object returned by getformat and one of WAV_FORMAT_ constants, respectively. The function returns true when the samples are encoded in the specified code.The following functions are also defined to make this function compatible with MATLAB:wavread(filename::String, fmt::String) = wavread(filename, format=fmt)\nwavread(filename::String, N::Int) = wavread(filename, subrange=N)\nwavread(filename::String, N::Range1{Int}) = wavread(filename, subrange=N)\nwavread(filename::String, N::Int, fmt::String) = wavread(filename, subrange=N, format=fmt)\nwavread(filename::String, N::Range1{Int}, fmt::String) = wavread(filename, subrange=N, format=fmt)"
},

{
    "location": "#wavwrite-1",
    "page": "Readme",
    "title": "wavwrite",
    "category": "section",
    "text": "Writes samples to a RIFF/WAVE file io object. The io argument accepts either an IO object or a filename (String). The function assumes that the sample rate is 8 kHz and uses 16 bits to encode each sample. Both of these values can be changed with the options parameter. Each column of the data represents a different channel. Stereo files should contain two columns. The options are passed via an Options object (see the :ref:options page <options-module>).function wavwrite(samples::Array, io::IO; Fs=8000, nbits=16, compression=WAVE_FORMAT_PCM, chunks::Vector{WAVChunk}=WAVChunk[])\nfunction wavwrite(samples::Array, filename::String; Fs=8000, nbits=16, compression=WAVE_FORMAT_PCM, chunks::Vector{WAVChunk}=WAVChunk[])The available options, and the default values, are:Fs (default = 8000): sampling frequency\nnbits (default = 16): number of bits used to encode each sample\ncompression (default = WAV_FORMAT_PCM): controls the type of encoding used in the file\nchunks (default = WAVChunk): a vector of WAVChunk objects to be written to the file (in addition to the format chunk). See below for some utilities for creating CUE and INFOchunks.The type of the input array, samples, also affects the generated file. \"Native\" WAVE files are written when integers are passed into wavwrite. This means that the literal values are written into the file. The input ranges are as follows for integer samples.N Bits y Data Type y Data Range Output Format\n8 uint8 0 <= y <= 255 uint8\n16 int16 –32768 <= y <= +32767 int16\n24 int32 –2^23 <= y <= 2^23 – 1 int32If samples contains floating point values, the input data ranges are the following.N Bits y Data Type y Data Range Output Format\n8 single or double –1.0 <= y < +1.0 uint8\n16 single or double –1.0 <= y < +1.0 int16\n24 single or double –1.0 <= y < +1.0 int32\n32 single or double –1.0 <= y <= +1.0 singleFloating point (single and double precision) values are written to the file unaltered. The library will not modify the data range or representation.The following functions are also defined to make this function compatible with MATLAB:wavwrite(y::Array, f::Real, filename::String) = wavwrite(y, filename, Fs=f)\nwavwrite(y::Array, f::Real, N::Real, filename::String) = wavwrite(y, filename, Fs=f, nbits=N)\nwavwrite(y::Array{T}, io::IO) where {T<:Integer} = wavwrite(y, io, nbits=sizeof(T)*8)\nwavwrite(y::Array{T}, filename::String) where {T<:Integer} = wavwrite(y, filename, nbits=sizeof(T)*8)\nwavwrite(y::Array{Int32}, io::IO) = wavwrite(y, io, nbits=24)\nwavwrite(y::Array{Int32}, filename::String) = wavwrite(y, filename, nbits=24)\nwavwrite(y::Array{T}, io::IO) where {T<:FloatingPoint} = wavwrite(y, io, nbits=sizeof(T)*8, compression=WAVE_FORMAT_IEEE_FLOAT)\nwavwrite(y::Array{T}, filename::String) where {T<:FloatingPoint} = wavwrite(y, filename, nbits=sizeof(T)*8, compression=WAVE_FORMAT_IEEE_FLOAT)"
},

{
    "location": "#wavappend-1",
    "page": "Readme",
    "title": "wavappend",
    "category": "section",
    "text": "Append samples to an existing WAV file.  All parameters (data type and range, output format, number of bits, number of channels, etc.) are assumed to match.function wavappend(samples::Array, io::IO)\nfunction wavappend(samples::Array, filename::String)"
},

{
    "location": "#wavplay-1",
    "page": "Readme",
    "title": "wavplay",
    "category": "section",
    "text": "Playing audio back is also supported. The supported backends are: AudioQueue (MacOSX) and Pulse Audio (Linux, libpulse-simple). There is not a native backend for Windows yet.function wavplay(samples::Array, fs::Number)"
},

{
    "location": "#WAVChunk-1",
    "page": "Readme",
    "title": "WAVChunk",
    "category": "section",
    "text": "Experimental support for reading and writing CUE and INFO chunks has been added in version 1. The functionwav_cue_read(chunks::Vector{WAVChunk})takes a VectorWAVChunk (as returned by wavread) and returns a VectorWAVMarker, where a WAVMarker is defined as:mutable struct WAVMarker\n    label::String\n    start_time::UInt32\n    duration::UInt32\nendWhere start_time and duration are in samples. You can also turn WAVMarkers into a VectorWAVChunk (as accepted by wavwrite) by callingwav_cue_write(markers::Dict{UInt32, WAVMarker})where the key for the dictionary is the ID of the marker to be written to file.Similar functions exist for INFO chunks, namelywav_info_write(tags::Dict{Symbol, String})::Vector{WAVChunk}\nwav_info_read(chunks::Vector{WAVChunk})::Dict{Symbol, String}where the keys for the DictSymbol String should be four-character RIFF INFO tag IDs as specified here. The values of the dictionary correspond to the tag data."
},

{
    "location": "#Other-Julia-Audio-Packages-1",
    "page": "Readme",
    "title": "Other Julia Audio Packages",
    "category": "section",
    "text": "AudioIO is another audio library in the Julia ecosystem. It supports more file formats (including WAV) and implements a more powerful playback interface. However, the license is more restrictive (GPL) because of a dependence on libsndfile.Additionally, FLAC.jl includes an mmap based WAV reader."
},

{
    "location": "autodocs/#WAV.WAVChunk",
    "page": "Docstrings",
    "title": "WAV.WAVChunk",
    "category": "type",
    "text": "A RIFF chunk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WAV.WAVMarker",
    "page": "Docstrings",
    "title": "WAV.WAVMarker",
    "category": "type",
    "text": "A marker in a .wav file. start_time and duration are in samples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WAV.read_cue",
    "page": "Docstrings",
    "title": "WAV.read_cue",
    "category": "function",
    "text": "Read the contents of the cue chunk to extract marker start times\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WAV.read_list",
    "page": "Docstrings",
    "title": "WAV.read_list",
    "category": "function",
    "text": "Read the contents of the LIST chunk to extract marker names and durations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WAV.wav_cue_read",
    "page": "Docstrings",
    "title": "WAV.wav_cue_read",
    "category": "function",
    "text": "Return the markers from a list of chunks. Example:\n\nusing WAV\nx, fs, bits, in_chunks = wavread(\"in.wav\")\nmarkers = wav_cue_read(in_chunks)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WAV.wav_cue_write",
    "page": "Docstrings",
    "title": "WAV.wav_cue_write",
    "category": "function",
    "text": "Write markers into a list of chunks. Example:\n\nout_chunks = wav_cue_write(markers)\nwavwrite(x, \"out.wav\", Fs=fs, nbits=16, compression=WAVE_FORMAT_PCM, chunks=out_chunks)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WAV.wav_info_read",
    "page": "Docstrings",
    "title": "WAV.wav_info_read",
    "category": "function",
    "text": "Given a list of chunks as returned by wavread, return a  Dict{Symbol, String} where the keys are symbols representing RIFF INFO tag IDs: https://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/RIFF.html#Info\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WAV.wav_info_write",
    "page": "Docstrings",
    "title": "WAV.wav_info_write",
    "category": "function",
    "text": "tags is a dictionary where the keys are symbols representing RIFF INFO tag IDs: https://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/RIFF.html#Info\n\nReturns a list of chunks appropriate for passing to wavwrite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WAV.KSDATAFORMAT_SUBTYPE_ALAWWAV.KSDATAFORMAT_SUBTYPE_IEEE_FLOATWAV.KSDATAFORMAT_SUBTYPE_MULAWWAV.KSDATAFORMAT_SUBTYPE_PCMWAV.WAVWAV.WAVArrayWAV.WAVChunkWAV.WAVE_FORMAT_ALAWWAV.WAVE_FORMAT_EXTENSIBLEWAV.WAVE_FORMAT_IEEE_FLOATWAV.WAVE_FORMAT_MULAWWAV.WAVE_FORMAT_PCMWAV.WAVFormatWAV.WAVFormatExtensionWAV.WAVMarkerWAV.WAVPlayWAV.__init__WAV.bits_per_sampleWAV.compress_sample_alawWAV.compress_sample_mulawWAV.convert_pcm_to_doubleWAV.evalWAV.format_lengthWAV.get_default_compressionWAV.get_default_pcm_precisionWAV.get_default_precisionWAV.getformatWAV.ieee_float_container_typeWAV.includeWAV.isextensibleWAV.isformatWAV.loadWAV.make_rangeWAV.pcm_container_typeWAV.read32WAV.read_adtlWAV.read_alaw_samplesWAV.read_companded_samplesWAV.read_cueWAV.read_dataWAV.read_formatWAV.read_headerWAV.read_ieee_float_samplesWAV.read_leWAV.read_listWAV.read_mulaw_samplesWAV.read_pcm_samplesWAV.read_tagWAV.saveWAV.wav_cue_readWAV.wav_cue_writeWAV.wav_info_readWAV.wav_info_writeWAV.wavappendWAV.wavplayWAV.wavreadWAV.wavwriteWAV.write16WAV.write32WAV.write_companded_samplesWAV.write_cueWAV.write_dataWAV.write_extended_headerWAV.write_formatWAV.write_headerWAV.write_ieee_float_samplesWAV.write_leWAV.write_marker_listWAV.write_pcm_samplesWAV.write_standard_header"
},

]}
