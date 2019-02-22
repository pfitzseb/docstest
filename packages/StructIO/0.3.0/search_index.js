var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StructIO-1",
    "page": "Readme",
    "title": "StructIO",
    "category": "section",
    "text": "(Image: StructIO) (Image: StructIO) (Image: Build Status) (Image: Coverage)Generates IO methods (pack, unpack) from structure definitions.  Also defines packed_sizeof to give the on-disk size of a packed structure, which is smaller than sizeof would give, if the struct is marked as align_packed."
},

{
    "location": "#Example-usage-1",
    "page": "Readme",
    "title": "Example usage",
    "category": "section",
    "text": "julia> using StructIO\n\njulia> @io struct TwoUInt64s\n           x::UInt64\n           y::UInt64\n       end\n\njulia> buf = IOBuffer(collect(UInt8(1):UInt8(16))); \n\njulia> seekstart(buf); unpack(buf, TwoUInt64s) # Default endianness depends on machine\nTwoUInt64s(0x0807060504030201, 0x100f0e0d0c0b0a09)\n\njulia> seekstart(buf); unpack(buf, TwoUInt64s, :BigEndian)\nTwoUInt64s(0x0102030405060708, 0x090a0b0c0d0e0f10)\n"
},

{
    "location": "autodocs/#StructIO.@io",
    "page": "Docstrings",
    "title": "StructIO.@io",
    "category": "macro",
    "text": "@io <type definition>\n    ...\nend\n\nGenerates packing_strategy() and packed_sizeof() methods for the type being defined within the given type definition.  This enables usage of the unpack method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.bswap!",
    "page": "Docstrings",
    "title": "StructIO.bswap!",
    "category": "function",
    "text": "bswap!(ptr::Ptr{UInt8}, sz)\n\nByte-swap a chunk of data in-place\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.fieldsize",
    "page": "Docstrings",
    "title": "StructIO.fieldsize",
    "category": "function",
    "text": "fieldsize(T::DataType, field_idx)\n\nReturn the size (in bytes) of a field within T in memory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.fix_endian",
    "page": "Docstrings",
    "title": "StructIO.fix_endian",
    "category": "function",
    "text": "fix_endian(x, endianness::Symbol)\n\nReturns a byte-swapped version of x if the given endianness must be swapped for the current host system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.needs_bswap",
    "page": "Docstrings",
    "title": "StructIO.needs_bswap",
    "category": "function",
    "text": "needs_bswap(endianness::Symbol)\n\nReturns true if the given endianness does not match the current host system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.pack",
    "page": "Docstrings",
    "title": "StructIO.pack",
    "category": "function",
    "text": "pack(io::IO, source, endianness::Symbol = :NativeEndian)\n\nGiven an input source, pack it into io, byte-swapping according to the given endianness of io. If endianness is :NativeEndian (the default), no byteswapping will occur.  If endianness is :LittleEndian or :BigEndian, byteswapping will occur if the endianness of the host system does not match the endianness of io.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.packing_strategy",
    "page": "Docstrings",
    "title": "StructIO.packing_strategy",
    "category": "function",
    "text": "packing_strategy(x)\n\nReturn the packing strategy for the given type, defaults to Default, is overridden by auto-generated methods for specific types from @io invocations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.unpack",
    "page": "Docstrings",
    "title": "StructIO.unpack",
    "category": "function",
    "text": "unpack(io::IO, T::Type, endianness::Symbol = :NativeEndian)\n\nGiven an input io, unpack type T, byte-swapping according to the given endianness of io. If endianness is :NativeEndian (the default), no byteswapping will occur.  If endianness is :LittleEndian or :BigEndian, byteswapping will occur of the endianness if the host system does not match the endianness of io.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.unsafe_pack",
    "page": "Docstrings",
    "title": "StructIO.unsafe_pack",
    "category": "function",
    "text": "unsafe_pack(io, source, endianness, ::Type{Packed/Default})\n\nPack source into io, byte-swapping if endianness dictates we should.  The last argument is a packing strategy, used to determine the layout of the data in memory.  All Packed objects recurse until bitstypes objects are eventually reached, at which point Default packing is identical to Packed behavior.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructIO.unsafe_unpack",
    "page": "Docstrings",
    "title": "StructIO.unsafe_unpack",
    "category": "function",
    "text": "unsafe_unpack(io, T, target, endianness, ::Type{Default})\n\nUnpack an object of type T from io into target, byte-swapping if endianness dictates we should, assuming a Default packing strategy.  All packed structs recurse until bitstypes objects are eventually reached, at which point Default packing is the only behavior.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StructIO.@ioStructIO.DefaultStructIO.PackedStructIO.PackingStrategyStructIO.StructIOStructIO.bswap!StructIO.evalStructIO.fieldsizeStructIO.fix_endianStructIO.includeStructIO.needs_bswapStructIO.packStructIO.packed_sizeofStructIO.packing_strategyStructIO.unpackStructIO.unsafe_packStructIO.unsafe_unpack"
},

]}
