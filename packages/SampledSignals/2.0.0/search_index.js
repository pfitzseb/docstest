var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SampledSignals-1",
    "page": "Readme",
    "title": "SampledSignals",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)Dev Note: Currently the master branch of SampledSignals requires the master branch of LibSndFile for its tests.SampledSignals is a collection of types intended to be used on multichannel sampled signals like audio or radio data, EEG signals, etc., to provide better interoperability between packages that read data from files or streams, DSP packages, and output and display packages.SampledSignals provides several types to stream and store sampled data: SampleBuf, SpectrumBuf, SampleSource, SampleSink which make use of IntervalSets that can be used to represent contiguous ranges using a convenient a..b syntax, this feature is copied mostly from the AxisArrays package, which also inspired much of the implementation of this package.We also use the Unitful package to enable indexing using real-world units like seconds or hertz. SampledSignals re-exports the relevant Unitful units (ns, ms, µs, s, Hz, kHz, MHz, GHz, THz, and dB) so you don\'t need to import Unitful explicitly.Because these buffer and stream types are sample-rate and channel-count aware, this package can automatically handle situations like writing a mono source into a stereo buffer, or resampling to match sample rates. This greatly simplifies the process of writing new streaming sample back-ends, because you only need to implement a small number of fundamental read/write operations, and SampledSignals will handle the plumbing."
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": ""
},

{
    "location": "#SampleBuf/SpectrumBuf-1",
    "page": "Readme",
    "title": "SampleBuf/SpectrumBuf",
    "category": "section",
    "text": "SampleBufs and SpectrumBufs represent multichannel, regularly-sampled data, providing handy indexing operations. The only difference between them is that SampleBufs are time-domain and SpectrumBufs are frequency-domain, which affects how they can be indexed and how they are displayed. They subtypes AbstractArray and should be drop-in compatible with raw arrays, with the exception that indexing a row (a single frame of multiple channels) will result in a 1xN result (a 1-frame multichannel buffer) instead of a 1D Vector, which is the Array behavior as of 0.5. The two main advantages of these types are they are sample-rate aware and that they support indexing with real-world units like seconds or hertz (depending on the domain). When defining methods on these types you can use the AbstractSampleBuf type to refer to both of them collectively."
},

{
    "location": "#Methods-1",
    "page": "Readme",
    "title": "Methods",
    "category": "section",
    "text": "samplerate\nsamplerate!\nnchannels\nnframes\ndomain\nchannelptr"
},

{
    "location": "#SampleSource-1",
    "page": "Readme",
    "title": "SampleSource",
    "category": "section",
    "text": "SampleSource is an abstract type representing a source of samples, which might for instance represent a microphone input. The read method just gives you a single frame (an 1xN N-channel SampleBuf), but you can also read an integer number of samples or an amount of time given in seconds. This package includes the SampleBufSource type that is a useful example and also can be used to test your implementations of the stream interface."
},

{
    "location": "#Methods-2",
    "page": "Readme",
    "title": "Methods",
    "category": "section",
    "text": "samplerate\nnchannels\nblocksize"
},

{
    "location": "#SampleSink-1",
    "page": "Readme",
    "title": "SampleSink",
    "category": "section",
    "text": "SampleSink is an abstract type representing a sink for samples to be written to, for instance representing your laptop speakers. The main method used here is write which writes a SampleBuf to a SampleSink. This package includes the SampleBufSink type that is a useful example and also can be used to test your implementations of the stream interface."
},

{
    "location": "#Methods-3",
    "page": "Readme",
    "title": "Methods",
    "category": "section",
    "text": "samplerate\nnchannels\nblocksize"
},

{
    "location": "#Stream-Read/Write-Semantics-1",
    "page": "Readme",
    "title": "Stream Read/Write Semantics",
    "category": "section",
    "text": "SampledSignals tries to keep the semantics of reading and writing simple and consistent. If a read or write is attempted and there\'s not enough space or samples available (but the stream is still open), the operation will block the task until it can proceed. If the stream is closed, you can always check the return value of the operation for a partially-completed read or write.Rather than specifying read and write durations in terms of frames, you can also specify in seconds. In this case read! and write will return seconds as well. If the operation completes fully, the returned duration will exactly match the given duration, so you can still check for equality.read!(source, buf) reads from source and places the data in buf. It returns the number of frames that were read. If the number returned is less than the length of buf, you know that source was closed before the read was complete.read(source, n) reads n frames from the source and returns a new buffer filled with their contents. If the length of the returned buffer is shorter than n then you know that source was closed before the read was complete.write(sink, buf) writes the contents of buf into sink, and returns the number of frames that were written. If fewer frames were written than the length of buf, you know that sink was closed before the write was complete.write(sink, source) reads from source and writes to sink a block at a time, and returns the number of frames written to sink.write(sink, source, n) reads from source and writes to sink a block at a time, and returns the number of frames written to sink. If both the streams stay open it will return after writing n frames.read!(source, sink) reads from source and writes to sink a block at a time, and returns the number of frames read from source. This method is not currently implemented.Note that when connecting sources to sinks, the only difference between read! and write is the return value. If the sampling rates match then the value returned should be the same in both cases, but will be different in the case of a samplerate conversion."
},

{
    "location": "#Plotting-Support-1",
    "page": "Readme",
    "title": "Plotting Support",
    "category": "section",
    "text": "SampledSignals adds the domain function for SampleBufs, which gives you the domain in real-world units at the buffer\'s sampling rate. This is especially useful for plotting because you can simply run plot(domain(buf), buf) and see your x axis in seconds. This also works for frequency-domain buffers, so you can do:spec = fft(buf)\nplot(domain(spec), abs(spec))and see the magnitude spectrum plotted against actual frequencies."
},

{
    "location": "#REPL-Display-1",
    "page": "Readme",
    "title": "REPL Display",
    "category": "section",
    "text": "When displaying a buffer at the REPL, SampledSignals shows the length, channel count, sample rate, and duration. It also shows a coarse audio waveform, which shows the signal amplitude in dB.julia> [buf[1:44100] buf[44100:88199]]\n44100-frame, 2-channel SampleBuf{PCM16Sample, 2}\n1.0s sampled at 44100Hz\n▁▁▁▁▁▁▁▁▂▁▁▁▃▂▅▅▅▅▅▅▅▅▆▅▅▅▄▃▃▄▅▅▄▄▄▃▄▃▂▅▅▅▄▃▁▂▄▄▄▄▄▄▄▄▅▅▅▅▅▄▃▂▄▅▅▅▅▅▅▅▅▅▅▅▅▄▃▂▄▄\n▃▃▄▄▄▃▂▂▂▂▄▃▄▄▄▄▄▄▅▅▅▅▅▅▅▅▅▅▄▂▂▁▁▅▃▃▂▄▂▄▃▃▄▃▄▂▁▃▂▂▃▃▃▃▃▃▃▃▃▃▃▄▄▄▅▅▄▄▄▆▆▄▃▅▄▂▁▁▂▁"
},

{
    "location": "#Jupyter-Notebook-Display-1",
    "page": "Readme",
    "title": "Jupyter Notebook Display",
    "category": "section",
    "text": "When working in a Jupyter notebook (which can display rich HTML representations), SampleBufs will show a waveform display and allow you to listen to the buffer using your browser\'s WebAudio support.(Image: Example of SampleBuf display in a Jupyter Notebook)"
},

{
    "location": "#Defining-Custom-Sink/Source-types-1",
    "page": "Readme",
    "title": "Defining Custom Sink/Source types",
    "category": "section",
    "text": "Say you have a library that moves audio over a network, or interfaces with some software-defined radio hardware. You should be able to easily tap into the SampledSignals infrastructure by doing the following:Subtype SampleSink or SampleSource\nImplement SampledSignals.unsafe_read!(source::YourSource, buf::Array, frameoffset, framecount) (for sources) or SampledSignals.unsafe_write(sink::YourSink, buf::Array, frameoffset, framecount) (for sinks), which can assume that the channel count, sample rate, and type match between your stream type and the buffer type. The methods listed above in the \"Stream Read/Write Semantics\" section are implemented in terms of these base unsafe_read! and unsafe_write calls. SampledSignals will call these methods with a 1D or 2D (nframes x nchannels) Array, with each channel in its own column. Note that these unsafe_* methods might be called many times for a given high-level read or write, so you\'ll want to avoid allocating buffers within them, and instead store any temporary buffers you need inside of your stream type, so they\'re only created once.\nImplement SampledSignals.samplerate, SampledSignals.nchannels, and Base.eltype for your type. SampledSignals uses your stream\'s reported properties through these methods to decide what conversions it needs to do when plugging together streams, so for instance if your stream type only supports writing 16-bit integer data, you might just have SampledSignals.eltype(sink::MySink) = PCM16Sample, and then SampledSignals will make sure that by the time it calls your unsafe_write method it will have converted things to the right datatype.\nIf your type has a preferred blocksize, implement SampledSignals.blocksize. Otherwise the fallback implementation will return 0, meaning there\'s no preferred blocksize.For example, to define a MySource type, you would implement:Base.read!(src::MySource, buf::Array)\nBase.eltype(source::MySource)\nSampledSignals.samplerate(source::MySource)\nSampledSignals.nchannels(source::MySource)Other methods, such as the non-modifying read, sample-rate converting versions, and time-based indexing are all handled by SampledSignals. You can see the implementation of DummySampleSink and DummySampleSource in DummySampleStream.jl, or the JACKAudio.jl or PortAudio.jl packages for more complete examples."
},

{
    "location": "#Connecting-Streams-1",
    "page": "Readme",
    "title": "Connecting Streams",
    "category": "section",
    "text": "In addition to reading and writing buffers to streams, you can also set up direct stream-to-stream connections using the write function. For instance, if you have a sink in and a source out, you can connect them with write(out, in). This will block the current task until the in stream ends, but you can give an optional third argument in samples or seconds to write a limited amount. The implementation just reads a block at a time from in and writes the received data to out. You can set the blocksize with a keyword argument, e.g. write(out, in, blocksize=1024) will read blocks of 1024 frames at a time. The default blocksize is 4096 frames."
},

{
    "location": "#Conversions-1",
    "page": "Readme",
    "title": "Conversions",
    "category": "section",
    "text": "Sometimes you have a source of data (a SampleBuf or SampleSource) that is not in the same format as the stream you want to write to. For instance, you may have a audio file recorded at 44.1kHz and want to play to your soundcard configured for 48kHz (samplerate conversion). Or you want to play a mono microphone signal through your stereo soundcard (channel conversion). Or you generated a buffer of floating point values that you want to write to a 16-bit integer WAVE file (format conversion). SampledSignals handles these conversions transparently.SampledSignals uses several wrapper types to implement this conversion. Normally these wrappers are created automatically when you attempt an operation that needs conversion, but you can also create them explictly. For instance, if you have a sink sink that is operating at 48kHz (say a soundcard output), and a source source at 44.1kHz, the code write(sink, source) is equivalent to:wrapper = ResampleSink(sink, 44.1kHz)\nwrite(wrapper, source)"
},

{
    "location": "#Samplerate-Conversion-1",
    "page": "Readme",
    "title": "Samplerate Conversion",
    "category": "section",
    "text": "The ResampleSink wrapper type wraps around a sink. Writing to this wrapper sink will resample the given data and pass it to the original sink. It maintains state between writes so that the interpolation is correct across the boundaries of multiple writes.ResampleSink handles resampling with polyphase FIR resampling filter."
},

{
    "location": "#Channel-Conversion-1",
    "page": "Readme",
    "title": "Channel Conversion",
    "category": "section",
    "text": "The UpMixSink and DownMixSink types wrap around a multi-channel or single-channel sink, respectively, so that you can write a mono signal to a stereo or multichannel output and it will be written to all channels, or you can write a multi-channel signal into a mono sink and it will be down-mixed."
},

{
    "location": "#Format-Conversion-1",
    "page": "Readme",
    "title": "Format Conversion",
    "category": "section",
    "text": "Format conversion is handled automatically by Julia when we write data from one buffer type to another. There are several potential gotchas to consider. When dealing with integer samples, it\'s better to represent them with Fixed from FixedPointNumbers.jl. For example, 16-bit integer samples can be represented by Fixed{Int16, 15}. In fact SampledSignals provides some handy aliases for signed fixed-point samples: PCM8Sample, PCM16Sample, PCM24Sample, and PCM32Sample. This way julia knows how to convert properly between fixed and floating-point values. One problem with this is that 16-bit fixed-point data can only represent values in the interval [-1.0, 0.99997], so if you have full-scale [-1.0, 1.0] floating point data, you will run into problems converting to fixed point values. One solution would be to first multiply your signal by typemax(PCM16Sample) before converting."
},

{
    "location": "#Sticky-Design-Issues-1",
    "page": "Readme",
    "title": "Sticky Design Issues",
    "category": "section",
    "text": "There are a number of issues that I\'m still in the process of figuring out:"
},

{
    "location": "#Interpolation-1",
    "page": "Readme",
    "title": "Interpolation",
    "category": "section",
    "text": "Currently for real-valued indices like time we are just rounding to the nearest sample index, but often you\'ll want an interpolated value. How does the user specify what type of interpolation they want? One idea would be to allow an interpolation type symbol in the indexing, like x[1.25s, :cubic], but that seems a little weird. Another option would be to have LinearInterpolator{T}, CubicInterpolator{T}, etc. wrappers that determine interpolation behavior."
},

{
    "location": "#Relative-vs.-Absolute-indexing-1",
    "page": "Readme",
    "title": "Relative vs. Absolute indexing",
    "category": "section",
    "text": "When we take a slice of a SampleBuf (e.g. take the span from 1s to 3s of a 10s audio buffer), what is the indexing domain of the result? Specifically, is it 1s-3s, or is it 0s-2s? For time-domain signals I can see wanting indexing relative to the beginning of the buffer, but in frequency-domain buffers it seems you usually want to keep the frequency information. Keeping track of the time information could also be useful if you split out a signal for processing and then want to re-combine things at the end."
},

{
    "location": "#AbstractTrees-troubleshooting-1",
    "page": "Readme",
    "title": "AbstractTrees troubleshooting",
    "category": "section",
    "text": "To run the SampledSignals tests you need Gumbo, but installing both Gumbo and Juno causes issues that prevent you from running the tests on 0.6. Here are the details:AbstractTrees < v0.1.0 is not compatible with Julia v0.6\nGumbo 0.3.0 (latest) requires AbstractTrees >= v0.0.4\nASTInterpreter requires AbstractTrees between v0.0.4 and v0.1.0\nthis limitation isn\'t in the REQUIRE in the repo, but was added to METADATA\nASTInterpreter is required by Atom and Gallium"
},

{
    "location": "#Solution:-1",
    "page": "Readme",
    "title": "Solution:",
    "category": "section",
    "text": "Run Pkg.checkout(\"ASTInterpreter\") and Pkg.resolve() until a new version is tagged. The ASTInterpreter tests don\'t pass, but it gets things working enough to get AbstractTrees back to 0.1.0 and the SampledSignals tests runnable."
},

{
    "location": "autodocs/#SampledSignals.DownMixSink",
    "page": "Docstrings",
    "title": "SampledSignals.DownMixSink",
    "category": "type",
    "text": "DownMixSink provides a multi-channel sink that wraps a single-channel sink. Writing to this sink mixes all the channels down to the single channel\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.SampleBuf",
    "page": "Docstrings",
    "title": "SampledSignals.SampleBuf",
    "category": "type",
    "text": "Represents a multi-channel regularly-sampled buffer that stores its own sample rate (in samples/second). The wrapped data is an N-dimensional array. A 1-channel sample can be represented with a 1D array or an Mx1 matrix, and a C-channel buffer will be an MxC matrix. So a 1-second stereo audio buffer sampled at 44100Hz with 32-bit floating-point samples in the time domain would have the type SampleBuf{Float32, 2}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.SampleBufSink",
    "page": "Docstrings",
    "title": "SampledSignals.SampleBufSink",
    "category": "type",
    "text": "SampleBufSink is a SampleSink backed by a buffer. It\'s mostly useful to hook into the stream conversion infrastructure, because you can wrap a buffer in a SampleBufSink and then read a source into it with a different channel count, sample rate, or channel count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.SampleBufSource",
    "page": "Docstrings",
    "title": "SampledSignals.SampleBufSource",
    "category": "type",
    "text": "SampleBufSource is a SampleSource backed by a buffer. It\'s mostly useful to hook into the stream conversion infrastructure, because you can wrap a buffer in a SampleBufSource and then write it into a sink with a different channel count, sample rate, or channel count.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.SampleSink",
    "page": "Docstrings",
    "title": "SampledSignals.SampleSink",
    "category": "type",
    "text": "Represents a sink that samples can be written to, such as an audio file or headphone output.\n\nSubtypes should implement the samplerate, nchannels, eltype, and unsafe_write methods. unsafe_write can assume that the samplerate, channel count, and element type are all matching.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.SampleSource",
    "page": "Docstrings",
    "title": "SampledSignals.SampleSource",
    "category": "type",
    "text": "Represents a source of samples, such as an audio file, microphone input, or SDR Receiver.\n\nSubtypes should implement the samplerate, nchannels, eltype, and unsafe_read! methods. unsafe_read! can assume that the samplerate, channel count, and element type are all matching.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.SinSource",
    "page": "Docstrings",
    "title": "SampledSignals.SinSource",
    "category": "type",
    "text": "SinSource(eltype, samplerate, freqs)\n\nSinSource is a multi-channel sine-tone signal generator. freqs can be an array of frequencies for a multi-channel source, or a single frequency for a mono source.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.SpectrumBuf",
    "page": "Docstrings",
    "title": "SampledSignals.SpectrumBuf",
    "category": "type",
    "text": "Represents a multi-channel regularly-sampled buffer representing the frequency- domain spectrum of a SampleBuf. The wrapped data is an N-dimensional array. A 1-channel sample can be represented with a 1D array or an Mx1 matrix, and a C-channel buffer will be an MxC matrix. So a 1-second stereo audio buffer sampled at 44100Hz with 32-bit floating-point samples in the time domain would have the type SampleBuf{Float32, 2}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.UpMixSink",
    "page": "Docstrings",
    "title": "SampledSignals.UpMixSink",
    "category": "type",
    "text": "UpMixSink provides a single-channel sink that wraps a multi-channel sink. Writing to this sink copies the single channel to all the channels in the wrapped sink\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.channelptr",
    "page": "Docstrings",
    "title": "SampledSignals.channelptr",
    "category": "function",
    "text": "Get a pointer to the underlying data for the buffer. Will return a Ptr{T}, where T is the element type of the buffer. This is particularly useful for passing to C libraries to fill the buffer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.inHz",
    "page": "Docstrings",
    "title": "SampledSignals.inHz",
    "category": "function",
    "text": "inHz(quantity[, rate])\n\nTranslate a particular quantity (usually a frequency) to a (unitless) value in Hz.\n\nIf the given quantity is Unitful, we use the given units. If it is not we assume it is already a value in Hz.\n\nFor some units (e.g. frames) you will need to specify a sample rate:\n\nExample\n\njulia> inHz(1.0kHz) 1000.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.inframes",
    "page": "Docstrings",
    "title": "SampledSignals.inframes",
    "category": "function",
    "text": "inframes([Type,]quantity[, rate])\n\nTranslate the given quantity to a (unitless) number of time or frequency frames, given a particular samplerate. Note that this isn\'t quantized to integer numbers of frames. If given a Type, the result will first be coerced to the given type.\n\nIf the given quantity is Unitful, we use the given units. If it is not we assume it is already a value in frames.\n\nExample\n\njulia> inframes(0.5s, 44100Hz) 22050.0\n\njulia> inframes(1000Hz, 2048/44100Hz) 46.439909297052154\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.inseconds",
    "page": "Docstrings",
    "title": "SampledSignals.inseconds",
    "category": "function",
    "text": "inseconds(quantity[, rate])\n\nTranslate a particular quantity (usually a time) to a (unitless) value in seconds.\n\nIf the given quantity is Unitful, we use the given units. If it is not we assume it is already a value in seconds.\n\nFor some units (e.g. frames) you will need to specify a sample rate:\n\nExamples\n\njulia> inseconds(50.0ms) 0.05\n\njulia> inseconds(441frames, 44100Hz) 0.01\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.metadata",
    "page": "Docstrings",
    "title": "SampledSignals.metadata",
    "category": "function",
    "text": "metadata(x, key::Symbol)\nmetadata(x, key::Symbol, idx)\n\nProvide implementation-specific metadata for the given buffer or stream. For instance, data from a WAV file might have metadata that comes from extra chunks read from the file. If no idx is given then the first piece of metadata matching the key is returned. If there are multiple matches, the user can provide an index, or : to return a list of all matching metadata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.mix",
    "page": "Docstrings",
    "title": "SampledSignals.mix",
    "category": "function",
    "text": "Mix the channels of the source array into the channels of the dest array, using coefficients from the mix matrix. To mix an M-channel buffer to a N-channel buffer, mix should be MxN. src and dest should not share memory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.mix!",
    "page": "Docstrings",
    "title": "SampledSignals.mix!",
    "category": "function",
    "text": "Mix the channels of the source array into the channels of the dest array, using coefficients from the mix matrix. To mix an M-channel buffer to a N-channel buffer, mix should be MxN. src and dest should not share memory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.mono",
    "page": "Docstrings",
    "title": "SampledSignals.mono",
    "category": "function",
    "text": "Mix the channels of the src array into a mono array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.mono!",
    "page": "Docstrings",
    "title": "SampledSignals.mono!",
    "category": "function",
    "text": "Mix the channels of the src array into the mono dest array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.toindex",
    "page": "Docstrings",
    "title": "SampledSignals.toindex",
    "category": "function",
    "text": "toindex(buf::SampleBuf, I)\n\nConvert the given index value to one that Base knows how to use natively for indexing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.unsafe_read!",
    "page": "Docstrings",
    "title": "SampledSignals.unsafe_read!",
    "category": "function",
    "text": "unsafe_read!(source::SampleSource, buf::Array, frameoffset, framecount)\n\nReads samples from the given source to the given array, assuming that the channel count, sampling rate, and element types are matching. This isn\'t called from user code, but is called by the read! (and likewise read) implementions in SampledSignals after it verifies that the buffer and sink are compatible, or possibly adds a conversion wrapper. SampledSignals will call this method with a 1D or 2D (nframes x nchannels) Array, with each channel in its own column. framecount frames of data should be copied into the array starting at frameoffset+1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SampledSignals.unsafe_write",
    "page": "Docstrings",
    "title": "SampledSignals.unsafe_write",
    "category": "function",
    "text": "unsafe_write(sink::SampleSink, buf::Array, frameoffset, framecount)\n\nWrites the given buffer to the given sink, assuming that the channel count, sampling rate, and element types are matching. This isn\'t called from user code, but is called by the write implemention in SampledSignals after it verifies that the buffer and sink are compatible, or possibly adds a conversion wrapper. sampledsignals will call this method with a 1D or 2D (nframes x nchannels) Array, with each channel in its own column. framecount frames of data should be copied from the array starting at frameoffset+1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SampledSignals...SampledSignals.AbstractSampleBufSampledSignals.ArrayIshSampledSignals.BuiltinIdxSampledSignals.BuiltinMultiIdxSampledSignals.ClosedIntervalSampledSignals.ConvertIdxSampledSignals.DEFAULT_BLOCKSIZESampledSignals.DownMixSinkSampledSignals.FrameQuantSampledSignals.GHzSampledSignals.HzSampledSignals.MHzSampledSignals.PCM16SampleSampledSignals.PCM20SampleSampledSignals.PCM24SampleSampledSignals.PCM32SampleSampledSignals.PCM64SampleSampledSignals.PCM8SampleSampledSignals.ReformatSinkSampledSignals.ResampleSinkSampledSignals.SAMPLE_TYPESampledSignals.SampleBufSampledSignals.SampleBufSinkSampledSignals.SampleBufSourceSampledSignals.SampleRateSampledSignals.SampleSinkSampledSignals.SampleSourceSampledSignals.SampledSignalsSampledSignals.SinSourceSampledSignals.SpectrumBufSampledSignals.THzSampledSignals.UpMixSinkSampledSignals.WAVE_FORMAT_PCMSampledSignals.WAVFormatSampledSignals.__init__SampledSignals.blocksizeSampledSignals.channelptrSampledSignals.dBSampledSignals.domainSampledSignals.embed_javascriptSampledSignals.evalSampledSignals.find_bufSampledSignals.framesSampledSignals.inHzSampledSignals.includeSampledSignals.inframesSampledSignals.insecondsSampledSignals.kHzSampledSignals.metadataSampledSignals.mixSampledSignals.mix!SampledSignals.monoSampledSignals.mono!SampledSignals.msSampledSignals.nchannelsSampledSignals.nframesSampledSignals.nsSampledSignals.sSampledSignals.samplerateSampledSignals.samplerate!SampledSignals.showchannelsSampledSignals.srnameSampledSignals.ticksSampledSignals.toindexSampledSignals.typenameSampledSignals.unitnameSampledSignals.unsafe_read!SampledSignals.unsafe_writeSampledSignals.wavwriteSampledSignals.wrap_sinkSampledSignals.write_formatSampledSignals.write_headerSampledSignals.write_leSampledSignals.μs"
},

]}
