var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Twiddle.jl-1",
    "page": "Home",
    "title": "Twiddle.jl",
    "category": "section",
    "text": "(Image: Latest Release) (Image: License) (Image: ) (Image: Twiddle) (Image: Twiddle) (Image: Build Status) (Image: Build status)"
},

{
    "location": "#Description-1",
    "page": "Home",
    "title": "Description",
    "category": "section",
    "text": "Twiddle is a package collecting useful bit-twiddling tricks, ready to use as functions, with detailed documentation of what they do, and example real-world use cases.This package originated from a PostDoc project where we wanted to do some common biological sequence operations much much faster than a naive implementation could, by taking advantage of succinct bit-encoding of the sequences.This package however is supposed to be more general, and we want it to contain many bit-twiddling tips and tricks."
},

{
    "location": "#Quick-Start-1",
    "page": "Home",
    "title": "Quick Start",
    "category": "section",
    "text": "Install the latest version of Twiddle from the Julia REPL:using Pkg\nPkg.add(\"Twiddle\")To use any functions in Twiddle, you must fully qualify the name e.g.using Twiddle\n\nTwiddle.count_nonzero_nibbles(0x0F11F111F11111F1)Alternatively, explicitly import the name e.g.using Twiddle: count_nonzero_nibbles\n\ncount_nonzero_nibbles(0x0F11F111F11111F1)"
},

{
    "location": "bitcounting/#",
    "page": "Counting bits",
    "title": "Counting bits",
    "category": "page",
    "text": ""
},

{
    "location": "bitcounting/#Counting-bits-1",
    "page": "Counting bits",
    "title": "Counting bits",
    "category": "section",
    "text": "CurrentModule = Twiddle\nDocTestSetup  = quote\n    using Twiddle\nendTwiddle provides functions that make it easy to count the number of times certain bit patterns occur in a set of bits."
},

{
    "location": "bitcounting/#Counting-pairs-of-bits-1",
    "page": "Counting bits",
    "title": "Counting pairs of bits",
    "category": "section",
    "text": "Twiddle.count_nonzero_bitpairs\nTwiddle.count_00_bitpairs\nTwiddle.count_11_bitpairs\nTwiddle.count_01_bitpairs\nTwiddle.count_10_bitpairs"
},

{
    "location": "bitcounting/#Counting-nibbles-(groups-of-4-bits)-1",
    "page": "Counting bits",
    "title": "Counting nibbles (groups of 4 bits)",
    "category": "section",
    "text": "Twiddle.count_nonzero_nibbles\nTwiddle.count_0000_nibbles\nTwiddle.count_1111_nibbles"
},

{
    "location": "reference/#",
    "page": "Reference Manual",
    "title": "Reference Manual",
    "category": "page",
    "text": ""
},

{
    "location": "reference/#Twiddle.count_0000_nibbles-Tuple{Unsigned}",
    "page": "Reference Manual",
    "title": "Twiddle.count_0000_nibbles",
    "category": "method",
    "text": "count_0000_nibbles(x::Unsigned)\n\nCounts the number of nibbles (aligned 4 bit segments) in an unsigned integer x that have all their bits unset i.e. nibbles of 0000.\n\nE.g. An input of:\n\n0x0F11F111F11111F1\n\nWould give the answer: 1.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.count_00_bitpairs-Tuple{Unsigned}",
    "page": "Reference Manual",
    "title": "Twiddle.count_00_bitpairs",
    "category": "method",
    "text": "count_00_bitpairs(x::Unsigned)\n\nCount the number of bit pairs in an unsigned integer x which have no bits set.\n\nE.g. An input of:\n\n0x0F11F111F11111F1\n\nWould give the answer: 13.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.count_01_bitpairs-Tuple{Unsigned}",
    "page": "Reference Manual",
    "title": "Twiddle.count_01_bitpairs",
    "category": "method",
    "text": "count_01_bitpairs(x::Unsigned)\n\nCount the number of bit pairs in an unsigned integer x which have just their LSB set.\n\nE.g. An input of:\n\n0x0F11F111F11111F1\n\nWould give the answer: 11.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.count_10_bitpairs-Tuple{Unsigned}",
    "page": "Reference Manual",
    "title": "Twiddle.count_10_bitpairs",
    "category": "method",
    "text": "count_10_bitpairs(x::Unsigned)\n\nCount the number of bit pairs in an unsigned integer x which have just their MSB set.\n\nE.g. An input of:\n\n0x8F11F111F11A11F1\n\nWould give the answer: 3.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.count_1111_nibbles-Tuple{Unsigned}",
    "page": "Reference Manual",
    "title": "Twiddle.count_1111_nibbles",
    "category": "method",
    "text": "count_1111_nibbles(x::Unsigned)\n\nCounts the number of nibbles (aligned 4 bit segments) in an unsigned integer x that have all their bits set i.e. counts all nibbles of 1111 in an integer.\n\nE.g. An input of:\n\n0x0F11F111F11111F1\n\nWould give the answer: 4.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.count_11_bitpairs-Tuple{Unsigned}",
    "page": "Reference Manual",
    "title": "Twiddle.count_11_bitpairs",
    "category": "method",
    "text": "count_11_bitpairs(x::Unsigned)\n\nCount the number of bit pairs in an unsigned integer x which have both bits set.\n\nE.g. An input of:\n\n0x0F11F111F11111F1\n\nWould give the answer: 8.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.count_nonzero_bitpairs-Tuple{Unsigned}",
    "page": "Reference Manual",
    "title": "Twiddle.count_nonzero_bitpairs",
    "category": "method",
    "text": "count_nonzero_bitpairs(x::Unsigned)\n\nCount the number of bit pairs in an unsigned integer x which have at least one bit set.\n\nE.g. An input of:\n\n0x0F11F111F11111F1\n\nWould give the answer: 19.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.count_nonzero_nibbles-Tuple{Unsigned}",
    "page": "Reference Manual",
    "title": "Twiddle.count_nonzero_nibbles",
    "category": "method",
    "text": "count_nonzero_nibbles(x::Unsigned)\n\nCount the number of nibbles (aligned 4 bit segments) in an unsigned integer x which have at least one bit set.\n\nE.g. An input of:\n\n0x0F11F111F11111F1\n\nWould give the answer: 15.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.enumerate_nibbles-Union{Tuple{T}, Tuple{T}} where T<:Unsigned",
    "page": "Reference Manual",
    "title": "Twiddle.enumerate_nibbles",
    "category": "method",
    "text": "enumerate_nibbles{T<:Unsigned}(x::T)\n\nCount the number of set bits in each nibble (aligned 4 bit segments) of an unsigned integer x.\n\nE.g. An input of:\n\n0100 0010 0001 0110 1100 1110 1101 1111\n\nWould result in:\n\n0001 0001 0001 0010 0010 0011 0011 0100\n\nThis is used to identify different occurances of certain bit patterns.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.mask-Union{Tuple{T}, Tuple{Type{T},Integer}} where T<:Unsigned",
    "page": "Reference Manual",
    "title": "Twiddle.mask",
    "category": "method",
    "text": "mask{T<:Unsigned}(::Type{T}, n::Integer)\n\nCreates a bit mask for given number of bits n.\n\nThe mask starts from the least significant bit, and end at bit n.\n\ne.g:\n\njulia> Twiddle.mask(UInt64, 8)\n0x00000000000000ff\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.nibble_capacity-Union{Tuple{Type{T}}, Tuple{T}} where T<:Unsigned",
    "page": "Reference Manual",
    "title": "Twiddle.nibble_capacity",
    "category": "method",
    "text": "nibble_capacity{T<:Unsigned}(::Type{T})\n\nReturns the number of nibbles that an unsigned integer of type T holds. This is essentially twice the size of the type (in bytes).\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.nibble_mask-Union{Tuple{T}, Tuple{T,T}} where T<:Unsigned",
    "page": "Reference Manual",
    "title": "Twiddle.nibble_mask",
    "category": "method",
    "text": "nibble_mask{T<:Unsigned}(value::T, x::T)\n\nCreate a mask for the nibbles (aligned 4 bit segments) in an unsigned integer x that filter nibbles matching the corresponding nibble in value.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.repeatpattern-Union{Tuple{T}, Tuple{Type{T},Unsigned}} where T<:Unsigned",
    "page": "Reference Manual",
    "title": "Twiddle.repeatpattern",
    "category": "method",
    "text": "repeatpattern{T<:Unsigned}(::Type{T}, pattern::Unsigned)\n\nRepeats the bitpattern of the pattern integer throughout the an Unsigned integer of type T. Note that this assumed the size of T (in bits) is larger than that of the pattern integer.\n\nThis is useful for bit-twiddling code that is to work on any word size.\n\nLet\'s use a very simple example to show why this is useful. Let\'s say you have a function in which a byte is masked with a bitmask 0x33.\n\nf(x::UInt8) = x & 0x33\n\nSuppose you wanted this to work for any word size, so 8 bit, 16 bit, 32 bit, 64 bit, and 128 bit words? One way is to write f as a set of seperate methods:\n\nf(x::UInt8) = x & 0x33\nf(x::UInt16) = x & 0x3333\nf(x::UInt32) = x & 0x33333333\nf(x::UInt64) = x & 0x3333333333333333\nf(x::UInt128) = x & 0x33333333333333333333333333333333\n\nThis is clearly not ideal, you would be writing out the same method multiplet times, but with a differently sized literal for the mask each time.\n\nAlternatively, you could write one parametric function with repeatbyte:\n\nf2(x::T) where {T<:Unsigned} = x & Twiddle.repeatpattern(T, 0x33)\n# Or a non-parametric version using `typeof`.\nf3(x::Unsigned) = x & Twiddle.repeatpattern(typeof(x), 0x33)\n\nYou might expect this to be less efficient - repeatpattern uses several operations to generate the values 0x33, 0x3333 and so on, whereas in the seperate methods, those literal values are hard coded. However, thanks to constant folding during compilation, those operations are done once at compilation time and so the native instructions generated are identical. You can check this with @code_llvm or @code_native.\n\n\n\n\n\n"
},

{
    "location": "reference/#Twiddle.swapbits-Union{Tuple{T}, Tuple{T,Integer,Integer}} where T<:Unsigned",
    "page": "Reference Manual",
    "title": "Twiddle.swapbits",
    "category": "method",
    "text": "swapbits{T<:Unsigned}(x::T, i::Integer, j::Integer)\n\nSwap the i\'th and j\'th bits in an unsigned integer. Note this uses zero based indexes for i and j.\n\nE.g. to swap the LSB and MSB of a byte: 1001 1000 (0x98) -> 0001 1001 (0x19)\n\nswapbits(0x98, 0, 7)\n\n\n\n\n\n"
},

{
    "location": "reference/#Reference-Manual-1",
    "page": "Reference Manual",
    "title": "Reference Manual",
    "category": "section",
    "text": "CurrentModule = Twiddle\nDocTestSetup  = quote\n    using Twiddle\nendModules = [Twiddle]\nOrder = [:function]"
},

{
    "location": "nibbles/#",
    "page": "Working with Nibbles",
    "title": "Working with Nibbles",
    "category": "page",
    "text": ""
},

{
    "location": "nibbles/#Working-with-Nibbles-1",
    "page": "Working with Nibbles",
    "title": "Working with Nibbles",
    "category": "section",
    "text": ""
},

{
    "location": "nibbles/#What-is-a-nibble?-1",
    "page": "Working with Nibbles",
    "title": "What is a nibble?",
    "category": "section",
    "text": "A nibble (often nybble or nyble to match the vowels of byte) is a four-bit aggregation. It is also sometimes called a half-byte or tetrade.A nibble has sixteen possible values. A nibble can be represented by a single hexadecimal digit, called a hex digit.For example, if you wanted to represent the byte 00001111, you would use two hex digits, one hex digit would represent the 0000 bits, and a second hex digit would represent the 1111 bits. So the byte - the two nibbles - are represented in hexadecimal notation as: 0x0F. The hex digit 0 = the 0000 nibble, and the hex digit F = the 1111 nibble."
},

{
    "location": "nibbles/#Why-would-you-want-to-manipulate-nibbles?-1",
    "page": "Working with Nibbles",
    "title": "Why would you want to manipulate nibbles?",
    "category": "section",
    "text": ""
},

{
    "location": "nibbles/#In-Bioinformatics...-1",
    "page": "Working with Nibbles",
    "title": "In Bioinformatics...",
    "category": "section",
    "text": "You may have some data encoded in a succinct format that stores memory and will speed up computation, but that requires manipulating bits of binary data.In the BioJulia package ecosystem, DNA sequences can be represented in a compressed format where a single nucleotide is represented with a nibble.Since many nibbles can fit in a single integer, bit parallel manipulation of such binary data allows you to do operations on many nibbles (nucleotides) at once, speeding up your computation significantly!"
},

{
    "location": "nibbles/#Nibble-methods-1",
    "page": "Working with Nibbles",
    "title": "Nibble methods",
    "category": "section",
    "text": "Twiddle.nibble_capacity\nTwiddle.enumerate_nibbles\nTwiddle.count_nonzero_nibbles\nTwiddle.count_zero_nibbles\nTwiddle.count_one_nibbles\nTwiddle.nibble_mask"
},

{
    "location": "glossary/#",
    "page": "Glossary",
    "title": "Glossary",
    "category": "page",
    "text": ""
},

{
    "location": "glossary/#Glossary-1",
    "page": "Glossary",
    "title": "Glossary",
    "category": "section",
    "text": "Here we clarify some terms commonly used when manipulating bits. "
},

]}
