var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BitBasis-1",
    "page": "Readme",
    "title": "BitBasis",
    "category": "section",
    "text": "(Image: Build Status) (Image: Codecov) (Image: Coveralls)Types and operations for basis represented by bits in linear algebra."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Type ] and enter package mode:pkg> add BitBasis"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Apache License 2.0"
},

{
    "location": "autodocs/#BitBasis.@bit_str",
    "page": "Docstrings",
    "title": "BitBasis.@bit_str",
    "category": "macro",
    "text": "@bit_str -> BitStr\n\nConstruct a bit string. such as bit\"0000\". The bit strings also supports string bcat. Just use it like normal strings.\n\nExample\n\njulia> bit\"10001\"\n10001 (17)\n\njulia> bit\"100_111_101\"\n00001110101 (117)\n\njulia> bcat(bit\"1001\", bit\"11\", bit\"1110\")\n1001111110 (638)\n\njulia> v = rand(16);\n\njulia> v[bit\"1001\"]\n0.38965443157314406\n\njulia> onehot(bit\"1001\")\n16-element Array{Float64,1}:\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 1.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.BitStr",
    "page": "Docstrings",
    "title": "BitBasis.BitStr",
    "category": "type",
    "text": "BitStr{T}\n\nString literal for bits.\n\nBitStr(value[, len=ndigits(value)])\n\nReturns a BitStr, by default the length is set to the minimum length required to represent value as bits.\n\nBitStr(str::String)\n\nParse the input string to a BitStr. See @bit_str for more details.\n\nExample\n\nBitStr supports some basic arithmetic operations. It acts like an integer, but supports some frequently used methods for binary basis.\n\njulia> bit\"101\" * 2\n1010 (10)\n\njulia> bcat(bit\"101\" for i in 1:10)\n101101101101101101101101101101 (766958445)\n\njulia> repeat(bit\"101\", 2)\n101101 (45)\n\njulia> bit\"1101\"[2]\n0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.ReorderedBasis",
    "page": "Docstrings",
    "title": "BitBasis.ReorderedBasis",
    "category": "type",
    "text": "ReorderedBasis{N, T}\n\nLazy reorderd basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.allmasked",
    "page": "Docstrings",
    "title": "BitBasis.allmasked",
    "category": "function",
    "text": "allmasked(index::Integer, mask::Integer) -> Bool\n\nReturn true if all masked position of index is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.anymasked",
    "page": "Docstrings",
    "title": "BitBasis.anymasked",
    "category": "function",
    "text": "anymasked(index::Integer, mask::Integer) -> Bool\n\nReturn true if any masked position of index is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.baddrs",
    "page": "Docstrings",
    "title": "BitBasis.baddrs",
    "category": "function",
    "text": "baddrs(b::Integer) -> Vector\n\nget the locations of nonzeros bits, i.e. the inverse operation of bmask.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.basis",
    "page": "Docstrings",
    "title": "BitBasis.basis",
    "category": "function",
    "text": "basis([IntType], num_bits::Int) -> UnitRange{IntType}\nbasis([IntType], state::AbstractArray) -> UnitRange{IntType}\n\nReturns the UnitRange for basis in Hilbert Space of num_bits qubits. If an array is supplied, it will return a basis having the same size with the first diemension of array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bdistance",
    "page": "Docstrings",
    "title": "BitBasis.bdistance",
    "category": "function",
    "text": "bdistance(i::Integer, j::Integer) -> Int\n\nReturn number of different bits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bfloat",
    "page": "Docstrings",
    "title": "BitBasis.bfloat",
    "category": "function",
    "text": "bfloat(b::Integer; nbit::Int=bit_length(b)) -> Float64\n\nfloat view, with big end qubit 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bfloat_r",
    "page": "Docstrings",
    "title": "BitBasis.bfloat_r",
    "category": "function",
    "text": "bfloat_r(b::Integer; nbit::Int) -> Float64\n\nfloat view, with bits read in inverse order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bint",
    "page": "Docstrings",
    "title": "BitBasis.bint",
    "category": "function",
    "text": "bint(b; nbit=nothing) -> Int\n\ninteger view, with little end qubit 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bint_r",
    "page": "Docstrings",
    "title": "BitBasis.bint_r",
    "category": "function",
    "text": "bint_r(b; nbit::Int) -> Integer\n\ninteger read in inverse order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bit_length",
    "page": "Docstrings",
    "title": "BitBasis.bit_length",
    "category": "function",
    "text": "bit_length(x::Integer) -> Int\n\nReturn the number of bits required to represent input integer x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bitarray",
    "page": "Docstrings",
    "title": "BitBasis.bitarray",
    "category": "function",
    "text": "bitarray(v::Vector, [num_bits::Int]) -> BitArray\nbitarray(v::Int, num_bits::Int) -> BitArray\nbitarray(num_bits::Int) -> Function\n\nConstruct BitArray from an integer vector, if num_bits not supplied, it is 64. If an integer is supplied, it returns a function mapping a Vector/Int to bitarray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bmask",
    "page": "Docstrings",
    "title": "BitBasis.bmask",
    "category": "function",
    "text": "bmask(::Type{T}) where T <: Integer -> zero(T)\nbmask([T::Type], positions::Int...) -> T\nbmask([T::Type], range::UnitRange{Int}) -> T\n\nReturn an integer mask of type T where 1 is the position masked according to positions or range. Directly use T will return an empty mask 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.breflect",
    "page": "Docstrings",
    "title": "BitBasis.breflect",
    "category": "function",
    "text": "breflect(num_bits::Int, b::Integer[, masks::Vector{Integer}]) -> Integer\n\nReturn left-right reflected integer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.bsizeof",
    "page": "Docstrings",
    "title": "BitBasis.bsizeof",
    "category": "function",
    "text": "bsizeof(::Type)\n\nReturns the size of given type in number of binary digits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.controller",
    "page": "Docstrings",
    "title": "BitBasis.controller",
    "category": "function",
    "text": "controller(cbits, cvals) -> Function\n\nReturn a function that checks whether a basis at cbits takes specific value cvals.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.flip",
    "page": "Docstrings",
    "title": "BitBasis.flip",
    "category": "function",
    "text": "flip(index::Integer, mask::Integer) -> Integer\n\nReturn an Integer with bits at masked position flipped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.hypercubic",
    "page": "Docstrings",
    "title": "BitBasis.hypercubic",
    "category": "function",
    "text": "hypercubic(A::Array) -> Array\n\nget the hypercubic representation for an array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.invorder",
    "page": "Docstrings",
    "title": "BitBasis.invorder",
    "category": "function",
    "text": "invorder(X::AbstractVecOrMat)\n\nInverse the order of given vector/matrix X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.ismasked_equal",
    "page": "Docstrings",
    "title": "BitBasis.ismasked_equal",
    "category": "function",
    "text": "ismasked_equal(index::Integer, mask::Integer, onemask::Integer) -> Bool\n\nReturn true if bits at positions masked by mask equal to 1 are equal to onemask.\n\nExample\n\njulia> n = 0b11001; mask = 0b10100; onemask = 0b10000;\n\njulia> ismasked_equal(n, mask, onemask)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.log2dim1",
    "page": "Docstrings",
    "title": "BitBasis.log2dim1",
    "category": "function",
    "text": "log2dim1(X)\n\nReturns the log2 of the first dimension\'s size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.log2i",
    "page": "Docstrings",
    "title": "BitBasis.log2i",
    "category": "function",
    "text": "log2i(x::Integer) -> Integer\n\nReturn log2(x), this integer version of log2 is fast but only valid for number equal to 2^n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.neg",
    "page": "Docstrings",
    "title": "BitBasis.neg",
    "category": "function",
    "text": "neg(index::Integer, num_bits::Int) -> Integer\n\nReturn an integer with all bits flipped (with total number of bit num_bits).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.next_reordered_basis",
    "page": "Docstrings",
    "title": "BitBasis.next_reordered_basis",
    "category": "function",
    "text": "next_reordered_basis(basis, takers, differ)\n\nReturns the next reordered basis accroding to current basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.onehot",
    "page": "Docstrings",
    "title": "BitBasis.onehot",
    "category": "function",
    "text": "onehot([T=Float64], nbits, x::Integer)\n\nReturns an onehot vector of type Vector{T}, where index x + 1 is one.\n\n\n\n\n\nonehot([T=Float64], bit_str)\n\nReturns an onehot vector of type Vector{T}, where the bit_str-th element is one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.packbits",
    "page": "Docstrings",
    "title": "BitBasis.packbits",
    "category": "function",
    "text": "packbits(arr::AbstractArray) -> AbstractArray\n\npack bits to integers, usually take a BitArray as input.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.reorder",
    "page": "Docstrings",
    "title": "BitBasis.reorder",
    "category": "function",
    "text": "reorder(X::AbstractArray, orders)\n\nReorder X according to orders.\n\ntip: Tip\nAlthough orders can be any iterable, Tuple is preferred inorder to gain as much performance as possible. But the conversion won\'t take much anyway.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.setbit",
    "page": "Docstrings",
    "title": "BitBasis.setbit",
    "category": "function",
    "text": "setbit(index::Integer, mask::Integer) -> Integer\n\nset the bit at masked position to 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.swapbits",
    "page": "Docstrings",
    "title": "BitBasis.swapbits",
    "category": "function",
    "text": "swapbits(n::Integer, mask_ij::Integer) -> Integer\n\nReturn an integer with bits at i and j in given mask flipped.\n\nwarning: Warning\nmask_ij should only contain two 1, swapbits will not check it, use at your own risk.\n\n\n\n\n\nswapbits(n::Integer, i::Int, j::Int) -> Integer\n\nReturn an integer with bits at i and j flipped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.unsafe_reorder",
    "page": "Docstrings",
    "title": "BitBasis.unsafe_reorder",
    "category": "function",
    "text": "unsafe_reorder(X::AbstractArray, orders)\n\nReorder X according to orders.\n\nwarning: Warning\nunsafe_reorder won\'t check whether the length of orders and the size of first dimension of X match, use at your own risk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.unsafe_sub",
    "page": "Docstrings",
    "title": "BitBasis.unsafe_sub",
    "category": "function",
    "text": "unsafe_sub(a::UnitRange, b::NTuple{N}) -> NTuple{N}\n\nReturns result in type Tuple of a .- b. This will not check the length of a and b, use at your own risk.\n\n\n\n\n\nunsafe_sub(a::UnitRange{T}, b::Vector{T}) where T\n\nReturns a .- b, fallback version when b is a Vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BitBasis.@bit_strBitBasis.BitBasisBitBasis.BitStrBitBasis.IntIteratorBitBasis.ReorderedBasisBitBasis._packbitsBitBasis._reorderBitBasis.allmaskedBitBasis.anymaskedBitBasis.baddrsBitBasis.basisBitBasis.bcatBitBasis.bdistanceBitBasis.bfloatBitBasis.bfloat_rBitBasis.bintBitBasis.bint_rBitBasis.bit_lengthBitBasis.bitarrayBitBasis.bmaskBitBasis.breflectBitBasis.bsizeofBitBasis.controllerBitBasis.eat_underscoreBitBasis.evalBitBasis.flipBitBasis.getbitBitBasis.hypercubicBitBasis.includeBitBasis.intBitBasis.invorderBitBasis.ismasked_equalBitBasis.log2dim1BitBasis.log2iBitBasis.negBitBasis.next_reordered_basisBitBasis.onehotBitBasis.packbitsBitBasis.parse_bitBitBasis.reorderBitBasis.setbitBitBasis.sum_lengthBitBasis.swapbitsBitBasis.takebitBitBasis.testallBitBasis.testanyBitBasis.testvalBitBasis.unsafe_reorderBitBasis.unsafe_subBitBasis.unsafe_swapbits"
},

]}
