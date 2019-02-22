var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SIMD-1",
    "page": "Readme",
    "title": "SIMD",
    "category": "section",
    "text": "Explicit SIMD vectorization in Julia(Image: Build Status) (Image: Build status) (Image: codecov.io) (Image: Dependency Status)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package allows programmers to explicitly SIMD-vectorize their Julia code. Ideally, the compiler (Julia and LLVM) would be able to do this automatically, especially for straightforwardly written code. In practice, this does not always work (for a variety of reasons), and the programmer is often left with uncertainty as to whether the code was actually vectorized. It is usually necessary to look at the generated machine code to determine whether the compiler actually vectorized the code.By exposing SIMD vector types and corresponding operations, the programmer can explicitly vectorize their code. While this does not guaratee that the generated machine code is efficient, it relieves the compiler from determining whether it is legal to vectorize the code, deciding whether it is beneficial to do so, and rearranging the code to synthesize vector instructions.Here is a simple example for a manually vectorized code that adds two arrays:using SIMD\nfunction vadd!{N,T}(xs::Vector{T}, ys::Vector{T}, ::Type{Vec{N,T}})\n    @assert length(ys) == length(xs)\n    @assert length(xs) % N == 0\n    @inbounds for i in 1:N:length(xs)\n        xv = vload(Vec{N,T}, xs, i)\n        yv = vload(Vec{N,T}, ys, i)\n        xv += yv\n        vstore(xv, xs, i)\n    end\nendTo simplify this example code, the vector type that should be used (Vec{N,T}) is passed in explicitly as additional type argument. This routine is e.g. called as vadd!(xs, ys, Vec{8,Float64})."
},

{
    "location": "#SIMD-vector-operations-1",
    "page": "Readme",
    "title": "SIMD vector operations",
    "category": "section",
    "text": "SIMD vectors are similar to small fixed-size arrays of \"simple\" types. These element types are supported:Bool Int{8,16,32,64,128} UInt{8,16,32,64,128} Float{16,32,64}The SIMD package provides the usual arithmetic and logical operations for SIMD vectors:+ - * / % ^ ! ~ & | $ << >> >>> == != < <= > >=abs cbrt ceil copysign cos div exp exp10 exp2 flipsign floor fma inv isfinite isinf isnan issubnormal log log10 log2 muladd rem round sign signbit sin sqrt trunc vifelse(Currently missing: count_ones count_zeros exponent ldexp leading_ones leading_zeros significand trailing_ones trailing_zeros, many trigonometric functions)(Also currently missing: Type conversions, reinterpretation that changes the vector size, scatter/gather operations, masked load/store operations)These operators and functions are always applied element-wise, i.e. they are applied to each element in parallel, yielding again a SIMD vector as result. This means that e.g. multiplying two vectors yields a vector, and comparing two vectors yields a vector of booleans. This behaviour might seem strange and slightly unusual, but corresponds to the machine instructions provided by the hardware. It is also what is usually needed to vectorize loops.The SIMD package also provides conversion operators from scalars and tuples to SIMD vectors and from SIMD vectors to tuples. Additionally, there are getindex and setindex functions to access individual vector elements.  SIMD vectors are immutable (like tuples), and setindex (note there is no exclamation mark at the end of the name) thus returns the modified vector.# Create a vector where all elements are Float64(1):\nxs = Vec{4,Float64}(1)\n\n# Create a vector from a tuple, and convert it back to a tuple:\nys = Vec{4,Float32}((1,2,3,4))\nys1 = NTuple{4,Float32}(ys)\ny2 = ys[2]   # getindex\n\n# Update one element of a vector:\nys = setindex(ys, 5, 3)   # cannot use ys[3] = 5"
},

{
    "location": "#Reduction-operations-1",
    "page": "Readme",
    "title": "Reduction operations",
    "category": "section",
    "text": "Reduction operations reduce a SIMD vector to a scalar. The following reduction operations are provided:all any maximum minimum sum prodExample:v = Vec{4,Float64}((1,2,3,4))\nsum(v)\n10.0"
},

{
    "location": "#Accessing-arrays-1",
    "page": "Readme",
    "title": "Accessing arrays",
    "category": "section",
    "text": "When using explicit SIMD vectorization, it is convenient to allocate arrays still as arrays of scalars, not as arrays of vectors. The vload and vstore functions allow reading vectors from and writing vectors into arrays, accessing several contiguous array elements.arr = Vector{Float64}(100)\n...\nxs = vload(Vec{4,Float64}, arr, i)\n...\nvstore(xs, arr, i)The vload call reads a vector of size 4 from the array, i.e. it reads arr[i:i+3]. Similarly, the vstore call writes the vector xs to the four array elements arr[i:i+3]."
},

{
    "location": "#Vector-shuffles-1",
    "page": "Readme",
    "title": "Vector shuffles",
    "category": "section",
    "text": "Vector shuffle is available through the shufflevector function.Example:a = Vec{4, Int32}((1,2,3,4))\nb = Vec{4, Int32}((5,6,7,8))\nmask = (2,3,4,5)\nshufflevector(a, b, Val{mask})\nInt32⟨3,4,5,6⟩The mask specifies vector elements counted across a and b, starting at 0 to follow the LLVM convention. If you don\'t care about some of the values in the result vector, you can use the symbol :undef. a and b must be of the same SIMD vector type. The result will be a SIMD vector with the same element type as a and b and the same length as the mask. The function must be specialized on the value of the mask, therefore the Val{} construction in the call.There is also a one operand version of the function:a = Vec{4, Int32}((1,2,3,4))\nmask = (0,3,1,2)\nshufflevector(a, Val{mask})\nInt32⟨1,4,2,3⟩"
},

{
    "location": "#Representing-SIMD-vector-types-in-Julia-1",
    "page": "Readme",
    "title": "Representing SIMD vector types in Julia",
    "category": "section",
    "text": "In LLVM, SIMD vectors are represented via a special vector type. LLVM supports vectors of all \"primitive\" types, i.e. integers (including booleans), floating-point numbers, and pointers. LLVM directly provides arithmetic and logic operations (add, subtract, bit shift, select, etc.) for vector types. For example, adding two numbers is represented in LLVM as%res = fadd <double> %arg1, %arg2and adding two vectors looks like%res = fadd <4 x double> %arg1, %arg2Thus, implementing SIMD operations in Julia is in principle a straightforward application of llvmcall. In principle, this should work:function +(x::Float64x4, y::Float64x4)\n    llvmcall(\"\"\"\n        %res = fadd <4 x double> %0, %1\n        return <4 x double> %res\n        \"\"\", Float64x4, Tuple{Float64x4, Float64x4}, x, y)\nendThe Julia representation of the datatype Float64x4 is slightly complex: It is an NTuple{N,T}, where the element type T is specially marked by being wrapped in the type Base.VecElement: NTuple{4, Base.VecElement{Float64}}. Julia implements a special rule that translates tuples with element type Base.VecElement into LLVM vectors. Other tuples are translated into LLVM arrays if all tuple elements have the same type, otherwise into LLVM structures.This representation has two drawbacks. First, it is rather tedious. Second, while we want to define arithmetic operations for SIMD vectors, we do not want to define arithmetic for Julia\'s tuple types – if we defined additional methods for generic tuples, who knows what code would break as a result.We thus define our own SIMD vector type Vec{N,T}:immutable Vec{N,T} <: DenseArray{N,1}\n    elts::NTuple{N,T}\nend"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SIMD.BoolTypesSIMD.FloatingTypesSIMD.IntTypesSIMD.IntegerTypesSIMD.SIMDSIMD.ScalarTypesSIMD.UIntTypesSIMD.VESIMD.VecSIMD.array2vectorSIMD.evalSIMD.exponent_bitsSIMD.exponent_maskSIMD.extendvectorSIMD.getneutralSIMD.includeSIMD.int_typeSIMD.llvmconstSIMD.llvminsSIMD.llvmtypeSIMD.llvmtypedconstSIMD.llvmwrapSIMD.llvmwrapreduceSIMD.llvmwrapshiftSIMD.nextpow2SIMD.scalar2vectorSIMD.setindexSIMD.shufflevectorSIMD.shufflevector_instrsSIMD.sign_bitsSIMD.sign_maskSIMD.significand_bitsSIMD.significand_maskSIMD.subvectorSIMD.suffixSIMD.uint_typeSIMD.vallocSIMD.vector2arraySIMD.vifelseSIMD.vloadSIMD.vloadaSIMD.vstoreSIMD.vstorea"
},

]}
