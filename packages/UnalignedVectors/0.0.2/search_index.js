var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnalignedVectors-1",
    "page": "Readme",
    "title": "UnalignedVectors",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)Julia allows you to create arrays from a pointer to a memory buffer, but an Array{T} requires a pointer that is a multiple of sizeof(T). This package allows you to create an AbstractArray with element type T even when the pointer lacks proper alignment."
},

{
    "location": "#Usage-example:-memory-mapping-1",
    "page": "Readme",
    "title": "Usage example: memory mapping",
    "category": "section",
    "text": "A common usage might be memory mapping, using Julia\'s Mmap.mmap functionality. Let\'s create a fake file format with the following structure:magic bytes \"BIGARRAY\" followed a newline\nthe number of dimensions in the array\nthe size of the array\nthe data of the array (always Float64)The rub is that the data will always start with an odd offset, because the magic bytes (plus the newline) total 9 bytes, and the dimension information always adds an even number of types. As a consequence, the memory buffer is not properly aligned for Float64 (which requires the pointer address to be a multiple of 8) and consequently ordinary mmap operations will fail.To try this out, first let\'s write such a file:open(\"/tmp/testfile.bga\", \"w\") do io\n    write(io, \"BIGARRAY\\n\")\n    A = [1.0 2.0;\n         3.0 4.0]\n    write(io, ndims(A))\n    for s in size(A)\n        write(io, s)\n    end\n    write(io, A)\nendNow let\'s create a format reader (note that the best way to define a new format is using FileIO, but for simplicity we\'ll keep things very low level):function reader(io)\n    String(read(io, 9)) == \"BIGARRAY\\n\" || error(\"file is not a BIGARRAY file\")\n    n = read(io, Int)             # read the number of dimensions\n    sz = (read(io, Int, n)...)    # read the size\n    # Mmap the buffer:\n    a = Mmap.mmap(io, Vector{UInt8}, sizeof(Float64)*prod(sz), position(io))\n    # Create an array of the desired eltype and size:\n    v = UnalignedVector{Float64}(a)\n    reshape(v, sz)\nendThe key thing to note about this implementation is that we mmaped the buffer as a Vector{UInt8}; had we tried a Vector{Float64}, more recent versions of Julia would have given us an error that would look something like this:ERROR: ArgumentError: unsafe_wrap: pointer 0x7f89817ae021 is not properly aligned to 8 bytes\nStacktrace:\n [1] #mmap#1(::Bool, ::Bool, ::Function, ::IOStream, ::Type{Array{Float64,2}}, ::Tuple{Int64,Int64}, ::Int64) at ./mmap.jl:139\n [2] mmap(::IOStream, ::Type{Array{Float64,2}}, ::Tuple{Int64,Int64}, ::Int64) at ./mmap.jl:102\n [3] reader(::IOStream) at ./REPL[4]:5\n [4] open(::##5#6, ::String) at ./iostream.jl:152In contrast, since UInt8 has an alignment of 1, it\'s always safe for mmapping.To create the array with desired element type, the UnalignedVector{Float64}(a) call creates an AbstractVector{Float64} out of the memory buffer, which we then reshape to the desired size. If you want to try this, just read the file withB = open(\"/tmp/testfile.bga\") do io\n    reader(io)\nendand you should see that B == A."
},

{
    "location": "autodocs/#UnalignedVectors.UnalignedVector",
    "page": "Docstrings",
    "title": "UnalignedVectors.UnalignedVector",
    "category": "type",
    "text": "v = UnalignedVector{T}(a::Vector{UInt8})\n\nCreate a vector with element type T from a memory buffer of bytes (UInt8). In contrast with reinterpret, this allows array creation even if a does not have proper pointer alignment for T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnalignedVectors.unaligned_reinterpret",
    "page": "Docstrings",
    "title": "UnalignedVectors.unaligned_reinterpret",
    "category": "function",
    "text": "v = unaligned_reinterpret(T, a::Vector{UInt8})\n\nReinterprets a as an UnalignedVector{T}, unless T == UInt8 in which case a is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnalignedVectors.MaybeUnalignedVectorUnalignedVectors.UnalignedVectorUnalignedVectors.UnalignedVectorsUnalignedVectors.evalUnalignedVectors.includeUnalignedVectors.unaligned_reinterpret"
},

]}
