var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)"
},

{
    "location": "#RandomV06-1",
    "page": "Readme",
    "title": "RandomV06",
    "category": "section",
    "text": "This is a copy of random.jl from version 0.6 of Julia that has been adapted to run in Julia 0.7.  The file was retrieved from https://github.com/JuliaLang/julia/blob/v0.6.4/base/random.jl, and hacked until it stopped producing errors or warnings in Julia 0.7.The motivation is the observation that at least some parts of the pseudorandom generator from Julia 0.7, and we sometimes want to reproduce tests and examples generated in Julia 0.6.  Here are examples from Julia 0.6 and 0.7 that give different behavior:julia> VERSION\nv\"0.6.4\"\n\njulia> srand(1); rand(1:10,3)\n3-element Array{Int64,1}:\n  9\n  7\n 10julia> VERSION\nv\"0.7.0-beta2.0\"\n\njulia> srand(1); rand(1:10,3)\n3-element Array{Int64,1}:\n 3\n 8\n 2"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "(v0.7) pkg> add https://github.com/danspielman/RandomV06.jl\n"
},

{
    "location": "#Using-1",
    "page": "Readme",
    "title": "Using",
    "category": "section",
    "text": "After obtaining the package, just type using RandomV06.  You can then access the old functions under this module, like this:julia> using RandomV06\n\njulia> RandomV06.srand(1); RandomV06.rand(1:10,3)\n3-element Array{Int64,1}:\n  9\n  7\n 10The module RandomV06 has its own version of GLOBAL_RNG, so it does not interact with the standard one:julia> srand(1);\n\njulia> RandomV06.srand(1);\n\njulia> rand(1:10,3)\n3-element Array{Int64,1}:\n 3\n 8\n 2\n\njulia> RandomV06.rand(1:10,3)\n3-element Array{Int64,1}:\n  9\n  7\n 10To facilitate writing code that can use either version, we have created variants of all of the functions in Random that have _ver appended.  One can then select the version you want by calling one of these with one of the constants RandomV06.V06, RandomV06.07 or RandomV06.Vcur as the first argument.julia> const Vcur = RandomV06.Vcur;\n\njulia> const V6 = RandomV06.V06;\n\njulia> srand_ver(V6, 1); \n\njulia> srand_ver(Vcur, 1);\n\njulia> rand_ver(V6, 1:10, 3)\n3-element Array{Int64,1}:\n  9\n  7\n 10\n\njulia> rand_ver(Vcur, 1:10, 3)\n3-element Array{Int64,1}:\n 3\n 8\n 2"
},

{
    "location": "#Bugs-1",
    "page": "Readme",
    "title": "Bugs",
    "category": "section",
    "text": "RandomV06 does not handle randjump."
},

{
    "location": "autodocs/#RandomV06.MersenneTwister",
    "page": "Docstrings",
    "title": "RandomV06.MersenneTwister",
    "category": "type",
    "text": "MersenneTwister(seed)\n\nCreate a MersenneTwister RNG object. Different RNG objects can have their own seeds, which may be useful for generating different streams of random numbers.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.RandomDevice",
    "page": "Docstrings",
    "title": "RandomV06.RandomDevice",
    "category": "type",
    "text": "RandomDevice()\n\nCreate a RandomDevice RNG object. Two such objects will always generate different streams of random numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.bitrand",
    "page": "Docstrings",
    "title": "RandomV06.bitrand",
    "category": "function",
    "text": "bitrand([rng=GLOBAL_RNG], [dims...])\n\nGenerate a BitArray of random boolean values.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> bitrand(rng, 10)\n10-element BitArray{1}:\n  true\n  true\n  true\n false\n  true\n false\n false\n  true\n false\n  true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.rand",
    "page": "Docstrings",
    "title": "RandomV06.rand",
    "category": "function",
    "text": "rand([rng=GLOBAL_RNG], [S], [dims...])\n\nPick a random element or array of random elements from the set of values specified by S; S can be\n\nan indexable collection (for example 1:n or [\'x\',\'y\',\'z\']), or\na type: the set of values to pick from is then equivalent to typemin(S):typemax(S) for integers (this is not applicable to BigInt), and to 0 1) for floating point numbers;\n\nS defaults to Float64.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.rand!",
    "page": "Docstrings",
    "title": "RandomV06.rand!",
    "category": "function",
    "text": "rand!([rng=GLOBAL_RNG], A, [coll])\n\nPopulate the array A with random values. If the indexable collection coll is specified, the values are picked randomly from coll. This is equivalent to copy!(A, rand(rng, coll, size(A))) or copy!(A, rand(rng, eltype(A), size(A))) but without allocating a new array.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> rand!(rng, zeros(5))\n5-element Array{Float64,1}:\n 0.590845\n 0.766797\n 0.566237\n 0.460085\n 0.794026\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.rand_lt",
    "page": "Docstrings",
    "title": "RandomV06.rand_lt",
    "category": "function",
    "text": "Return a random Int (masked with mask) in 0 n), when n <= 2^52.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.randcycle",
    "page": "Docstrings",
    "title": "RandomV06.randcycle",
    "category": "function",
    "text": "randcycle([rng=GLOBAL_RNG,] n::Integer)\n\nConstruct a random cyclic permutation of length n. The optional rng argument specifies a random number generator, see Random Numbers.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> randcycle(rng, 6)\n6-element Array{Int64,1}:\n 3\n 5\n 4\n 6\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.randexp",
    "page": "Docstrings",
    "title": "RandomV06.randexp",
    "category": "function",
    "text": "randexp([rng=GLOBAL_RNG], [T=Float64], [dims...])\n\nGenerate a random number of type T according to the exponential distribution with scale 1. Optionally generate an array of such random numbers. The Base module currently provides an implementation for the types Float16, Float32, and Float64 (the default).\n\nExamples\n\njulia> rng = MersenneTwister(1234);\n\njulia> randexp(rng, Float32)\n2.4835055f0\n\njulia> randexp(rng, 3, 3)\n3×3 Array{Float64,2}:\n 1.5167    1.30652   0.344435\n 0.604436  2.78029   0.418516\n 0.695867  0.693292  0.643644\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.randexp!",
    "page": "Docstrings",
    "title": "RandomV06.randexp!",
    "category": "function",
    "text": "randexp!([rng=GLOBAL_RNG], A::AbstractArray) -> A\n\nFill the array A with random numbers following the exponential distribution (with scale 1).\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> randexp!(rng, zeros(5))\n5-element Array{Float64,1}:\n 2.48351\n 1.5167\n 0.604436\n 0.695867\n 1.30652\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.randn",
    "page": "Docstrings",
    "title": "RandomV06.randn",
    "category": "function",
    "text": "randn([rng=GLOBAL_RNG], [T=Float64], [dims...])\n\nGenerate a normally-distributed random number of type T with mean 0 and standard deviation 1. Optionally generate an array of normally-distributed random numbers. The Base module currently provides an implementation for the types Float16, Float32, and Float64 (the default).\n\nExamples\n\njulia> rng = MersenneTwister(1234);\n\njulia> randn(rng, Float64)\n0.8673472019512456\n\njulia> randn(rng, Float32, (2, 4))\n2×4 Array{Float32,2}:\n -0.901744  -0.902914  2.21188   -0.271735\n -0.494479   0.864401  0.532813   0.502334\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.randn!",
    "page": "Docstrings",
    "title": "RandomV06.randn!",
    "category": "function",
    "text": "randn!([rng=GLOBAL_RNG], A::AbstractArray) -> A\n\nFill the array A with normally-distributed (mean 0, standard deviation 1) random numbers. Also see the rand function.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> randn!(rng, zeros(5))\n5-element Array{Float64,1}:\n  0.867347\n -0.901744\n -0.494479\n -0.902914\n  0.864401\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.randperm",
    "page": "Docstrings",
    "title": "RandomV06.randperm",
    "category": "function",
    "text": "randperm([rng=GLOBAL_RNG,] n::Integer)\n\nConstruct a random permutation of length n. The optional rng argument specifies a random number generator (see Random Numbers). To randomly permute a arbitrary vector, see shuffle or shuffle!.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> randperm(rng, 4)\n4-element Array{Int64,1}:\n 2\n 1\n 4\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.randsubseq",
    "page": "Docstrings",
    "title": "RandomV06.randsubseq",
    "category": "function",
    "text": "randsubseq(A, p) -> Vector\n\nReturn a vector consisting of a random subsequence of the given array A, where each element of A is included (in order) with independent probability p. (Complexity is linear in p*length(A), so this function is efficient even if p is small and A is large.) Technically, this process is known as \"Bernoulli sampling\" of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.shuffle",
    "page": "Docstrings",
    "title": "RandomV06.shuffle",
    "category": "function",
    "text": "shuffle([rng=GLOBAL_RNG,] v)\n\nReturn a randomly permuted copy of v. The optional rng argument specifies a random number generator (see Random Numbers). To permute v in-place, see shuffle!.  To obtain randomly permuted indices, see randperm.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> shuffle(rng, collect(1:10))\n10-element Array{Int64,1}:\n  6\n  1\n 10\n  2\n  3\n  9\n  5\n  7\n  4\n  8\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.shuffle!",
    "page": "Docstrings",
    "title": "RandomV06.shuffle!",
    "category": "function",
    "text": "shuffle!([rng=GLOBAL_RNG,] v)\n\nIn-place version of shuffle: randomly permute the array v in-place, optionally supplying the random-number generator rng.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> shuffle!(rng, collect(1:16))\n16-element Array{Int64,1}:\n  2\n 15\n  5\n 14\n  1\n  9\n 10\n  6\n 11\n  3\n 16\n  7\n  4\n 12\n  8\n 13\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.srand",
    "page": "Docstrings",
    "title": "RandomV06.srand",
    "category": "function",
    "text": "srand([rng=GLOBAL_RNG], [seed]) -> rng\nsrand([rng=GLOBAL_RNG], filename, n=4) -> rng\n\nReseed the random number generator. If a seed is provided, the RNG will give a reproducible sequence of numbers, otherwise Julia will get entropy from the system. For MersenneTwister, the seed may be a non-negative integer, a vector of UInt32 integers or a filename, in which case the seed is read from a file (4n bytes are read from the file, where n is an optional argument). RandomDevice does not support seeding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.uuid1",
    "page": "Docstrings",
    "title": "RandomV06.uuid1",
    "category": "function",
    "text": "uuid1([rng::AbstractRNG=GLOBAL_RNG]) -> UUID\n\nGenerates a version 1 (time-based) universally unique identifier (UUID), as specified by RFC 4122. Note that the Node ID is randomly generated (does not identify the host) according to section 4.5 of the RFC.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> Base.Random.uuid1(rng)\n2cc938da-5937-11e7-196e-0f4ef71aa64b\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.uuid4",
    "page": "Docstrings",
    "title": "RandomV06.uuid4",
    "category": "function",
    "text": "uuid4([rng::AbstractRNG=GLOBAL_RNG]) -> UUID\n\nGenerates a version 4 (random or pseudo-random) universally unique identifier (UUID), as specified by RFC 4122.\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> Base.Random.uuid4(rng)\n82015f10-44cc-4827-996e-0f4ef71aa64b\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomV06.uuid_version",
    "page": "Docstrings",
    "title": "RandomV06.uuid_version",
    "category": "function",
    "text": "uuid_version(u::UUID) -> Integer\n\nInspects the given UUID and returns its version (see RFC 4122).\n\nExample\n\njulia> rng = MersenneTwister(1234);\n\njulia> Base.Random.uuid_version(Base.Random.uuid4(rng))\n4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RandomV06.AbstractRNGRandomV06.Close1Open2RandomV06.CloseOpenRandomV06.FloatIntervalRandomV06.GLOBAL_RNGRandomV06.MTCacheLengthRandomV06.MersenneTwisterRandomV06.RandomDeviceRandomV06.RandomV06RandomV06.RangeGeneratorRandomV06.RangeGeneratorBigIntRandomV06.RangeGeneratorIntRandomV06.UUIDRandomV06.V06RandomV06.V07RandomV06.VcurRandomV06.__init__RandomV06.bitrandRandomV06.bitrand_verRandomV06.dsfmt_gv_srandRandomV06.evalRandomV06.feRandomV06.fiRandomV06.fill_array!RandomV06.gen_randRandomV06.globalRNGRandomV06.includeRandomV06.keRandomV06.kiRandomV06.make_seedRandomV06.mask128RandomV06.maxmultipleRandomV06.maxmultiplemixRandomV06.mt_availRandomV06.mt_emptyRandomV06.mt_pop!RandomV06.mt_setempty!RandomV06.mt_setfull!RandomV06.randRandomV06.rand!RandomV06.rand_AbstractArray_Float64!RandomV06.rand_inboundsRandomV06.rand_ltRandomV06.rand_ui10_rawRandomV06.rand_ui23_rawRandomV06.rand_ui2x52_rawRandomV06.rand_ui52RandomV06.rand_ui52_rawRandomV06.rand_ui52_raw_inboundsRandomV06.rand_verRandomV06.rand_ver!RandomV06.randcycleRandomV06.randcycle_verRandomV06.randexpRandomV06.randexp!RandomV06.randexp_unlikelyRandomV06.randexp_verRandomV06.randexp_ver!RandomV06.randnRandomV06.randn!RandomV06.randn_unlikelyRandomV06.randn_verRandomV06.randn_ver!RandomV06.randpermRandomV06.randperm_verRandomV06.randstringRandomV06.randstring_verRandomV06.randsubseqRandomV06.randsubseq!RandomV06.randsubseq_verRandomV06.randsubseq_ver!RandomV06.rem_knuthRandomV06.reserveRandomV06.reserve_1RandomV06.seed_ver!RandomV06.shuffleRandomV06.shuffle!RandomV06.shuffle_verRandomV06.shuffle_ver!RandomV06.srandRandomV06.uuid1RandomV06.uuid4RandomV06.uuid_versionRandomV06.weRandomV06.wiRandomV06.ziggurat_exp_rRandomV06.ziggurat_nor_inv_rRandomV06.ziggurat_nor_r"
},

]}
