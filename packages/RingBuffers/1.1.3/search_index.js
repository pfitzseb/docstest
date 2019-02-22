var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RingBuffers-1",
    "page": "Readme",
    "title": "RingBuffers",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This package provides the RingBuffer type, which is a circular, fixed-size multi-channel buffer.This package implements read, read!, and write methods on the RingBuffer type, and supports reading and writing NxM AbstractArray subtypes, where N is the channel count and M is the length in frames. It also supports reading and writing from AbstractVectors, in which case the memory is treated as a raw buffer with interleaved data.Under the hood this package uses the pa_ringbuffer C implementation from PortAudio, which is a lock-free single-reader single-writer ringbuffer. The benefit of building on this is that you can write C modules for other libraries that can communicate with Julia over this lock-free ringbuffer using the portaudio.h header file. See the PortAudio library for an example of using this to pass data between Julia\'s main thread and an audio callback in a different thread."
},

{
    "location": "autodocs/#RingBuffers.PaUtilRingBuffer",
    "page": "Docstrings",
    "title": "RingBuffers.PaUtilRingBuffer",
    "category": "type",
    "text": "PaUtilRingBuffer(elementSizeBytes, elementCount)\n\nMirrors the C-side PaUtilRingBuffer struct that describes the ringbuffer state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.PaUtil_FlushRingBuffer",
    "page": "Docstrings",
    "title": "RingBuffers.PaUtil_FlushRingBuffer",
    "category": "function",
    "text": "PaUtil_FlushRingBuffer(rbuf::PaUtilRingBuffer)\n\nReset buffer to empty. Should only be called when buffer is NOT being read or written.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.PaUtil_GetRingBufferReadAvailable",
    "page": "Docstrings",
    "title": "RingBuffers.PaUtil_GetRingBufferReadAvailable",
    "category": "function",
    "text": "PaUtil_GetRingBufferReadAvailable(rbuf::PaUtilRingBuffer)\n\nRetrieve the number of elements available in the ring buffer for reading.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.PaUtil_GetRingBufferWriteAvailable",
    "page": "Docstrings",
    "title": "RingBuffers.PaUtil_GetRingBufferWriteAvailable",
    "category": "function",
    "text": "PaUtil_GetRingBufferWriteAvailable(rbuf::PaUtilRingBuffer)\n\nRetrieve the number of elements available in the ring buffer for writing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.PaUtil_InitializeRingBuffer",
    "page": "Docstrings",
    "title": "RingBuffers.PaUtil_InitializeRingBuffer",
    "category": "function",
    "text": "PaUtil_InitializeRingBuffer(rbuf, elementSizeBytes, elementCount, dataPtr)\n\nInitialize Ring Buffer to empty state ready to have elements written to it.\n\nArguments\n\nrbuf::PaUtilRingBuffer: The ring buffer.\nelementSizeBytes::RingBufferSize: The size of a single data element in bytes.\nelementCount::RingBufferSize: The number of elements in the buffer (must be a power of 2).\ndataPtr::Ptr{Cvoid}: A pointer to a previously allocated area where the data will be maintained.  It must be elementCount*elementSizeBytes long.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.PaUtil_ReadRingBuffer",
    "page": "Docstrings",
    "title": "RingBuffers.PaUtil_ReadRingBuffer",
    "category": "function",
    "text": "PaUtil_ReadRingBuffer(rbuf::PaUtilRingBuffer,\n                      data::Ptr{Cvoid},\n                      elementCount::RingBufferSize)\n\nRead data from the ring buffer and return the number of elements read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.PaUtil_WriteRingBuffer",
    "page": "Docstrings",
    "title": "RingBuffers.PaUtil_WriteRingBuffer",
    "category": "function",
    "text": "PaUtil_WriteRingBuffer(rbuf::PaUtilRingBuffer,\n                       data::Ptr{Cvoid},\n                       elementCount::RingBufferSize)\n\nWrite data to the ring buffer and return the number of elements written.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.RingBuffer",
    "page": "Docstrings",
    "title": "RingBuffers.RingBuffer",
    "category": "type",
    "text": "RingBuffer{T}(nchannels, nframes)\n\nA lock-free ringbuffer wrapping PortAudio\'s implementation. The underlying representation stores multi-channel data as interleaved. The buffer will hold nframes frames.\n\nThis ring buffer can be used to pass data between tasks similar to the built-in Channel type, but it has the additional ability to pass data to and from C code running on a different thread. The C code can use the API defined in pa_ringbuffer.h. Note that this is only safe with a single-threaded reader and single-threaded writer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.framesreadable",
    "page": "Docstrings",
    "title": "RingBuffers.framesreadable",
    "category": "function",
    "text": "frameswritable(rbuf::RingBuffer)\n\nReturns the number of frames that can be written to the ring buffer without blocking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.frameswritable",
    "page": "Docstrings",
    "title": "RingBuffers.frameswritable",
    "category": "function",
    "text": "frameswritable(rbuf::RingBuffer)\n\nReturns the number of frames that can be written to the ring buffer without blocking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.notifyhandle",
    "page": "Docstrings",
    "title": "RingBuffers.notifyhandle",
    "category": "function",
    "text": "notifyhandle(rbuf::RingBuffer)\n\nReturn the AsyncCondition handle that can be used to wake up the buffer from another thread.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.readavailable!",
    "page": "Docstrings",
    "title": "RingBuffers.readavailable!",
    "category": "function",
    "text": "readavailable!(rbuf::RingBuffer{T}, data::AbstractArray{T}[, nframes])\n\nRead up to nframes frames from rbuf into data without blocking. If data is a Vector, it\'s treated as a block of memory to write the interleaved data to. If it\'s a Matrix, it is treated as nchannels × nframes.\n\nReturns the number of frames read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RingBuffers.writeavailable",
    "page": "Docstrings",
    "title": "RingBuffers.writeavailable",
    "category": "function",
    "text": "writeavailable(rbuf::RingBuffer{T}, data::AbstractArray{T}[, nframes])\n\nWrite up to nframes frames to rbuf from data without blocking. If data is a Vector, it\'s treated as a block of memory from which to read the interleaved data. If it\'s a Matrix, it is treated as nchannels × nframes.\n\nReturns the number of frames written.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RingBuffers.PaUtilRingBufferRingBuffers.PaUtil_FlushRingBufferRingBuffers.PaUtil_GetRingBufferReadAvailableRingBuffers.PaUtil_GetRingBufferWriteAvailableRingBuffers.PaUtil_InitializeRingBufferRingBuffers.PaUtil_ReadRingBufferRingBuffers.PaUtil_WriteRingBufferRingBuffers.RingBufferRingBuffers.RingBufferSizeRingBuffers.RingBuffersRingBuffers.__init__RingBuffers.check_depsRingBuffers.depsjlRingBuffers.evalRingBuffers.framesreadableRingBuffers.frameswritableRingBuffers.includeRingBuffers.libpa_ringbufferRingBuffers.notifyhandleRingBuffers.readavailable!RingBuffers.writeavailableRingBuffers.writeavailable!"
},

]}
