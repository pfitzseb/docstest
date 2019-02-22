var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RandomNumbers.jl-1",
    "page": "Readme",
    "title": "RandomNumbers.jl",
    "category": "section",
    "text": "Random number generators for the Julia language.Linux, OSX: (Image: Build Status)Windows: (Image: Build status)Code Coverage: (Image: Coverage Status) (Image: codecov.io)Documentation: (Image: Stable Documentation) (Image: Latest Documentation)RandomNumbers.jl is a package of Julia, in which several random number generators (RNGs) are provided.If you use the Intel Math Kernel Library (MKL), VSL.jl is also a good choice for random number generation."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered.Pkg.add(\"RandomNumbers\")It is recommended to run the test suites before using the package:Pkg.test(\"RandomNumbers\")"
},

{
    "location": "#RNG-Families-1",
    "page": "Readme",
    "title": "RNG Families",
    "category": "section",
    "text": "There are four RNG families in this package:PCG:   A new family of RNG, based on linear congruential generators, using a permuted function to produce much   more random output.\nMersenne Twister:   The most widely used RNG, with long period.\nRandom123:   A family of good-performance counter-based RNG.\nXorshift:   A class of RNG based on exclusive or and bit shift."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Please see the documentation for usage of this package."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This package is under MIT License."
},

{
    "location": "autodocs/#RandomNumbers.AbstractRNG",
    "page": "Docstrings",
    "title": "RandomNumbers.AbstractRNG",
    "category": "type",
    "text": "AbstractRNG{T} <: Random.AbstractRNG\n\nThe abstract type of Random Number Generators. T indicates the original output type of a RNG.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.MersenneTwisters",
    "page": "Docstrings",
    "title": "RandomNumbers.MersenneTwisters",
    "category": "module",
    "text": "The module for Mersenne Twisters.\n\nCurrently only provide one RNG type:\n\nMT19937\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.PCG",
    "page": "Docstrings",
    "title": "RandomNumbers.PCG",
    "category": "module",
    "text": "The module for PCG Family.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.Random123",
    "page": "Docstrings",
    "title": "RandomNumbers.Random123",
    "category": "module",
    "text": "The module for Random123 Family.\n\nProvide 8 RNG types:\n\nThreefry2x\nThreefry4x\nPhilox2x\nPhilox4x\nAESNI1x\nAESNI4x\nARS1x\nARS4x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.RandomNumbers",
    "page": "Docstrings",
    "title": "RandomNumbers.RandomNumbers",
    "category": "module",
    "text": "Main module for RandomNumbers.jl – a random number generator package for Julia Language.\n\nThis module exports two types and four submodules:\n\nAbstractRNG.\nWrappedRNG.\nPCG.\nMersenneTwisters.\nRandom123.\nXorshifts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.WrappedRNG",
    "page": "Docstrings",
    "title": "RandomNumbers.WrappedRNG",
    "category": "type",
    "text": "WrappedRNG{R, T1, T2} <: AbstractRNG{T2}\nWrappedRNG(base_rng, T2)\nWrappedRNG(R, T2, args...)\n\nWrap a RNG which originally provides output in T1 into a RNG that provides output in T2.\n\nExamples\n\njulia> r = Xorshifts.Xorshift128Star(123);\n\njulia> RandomNumbers.output_type(r)\nUInt64\n\njulia> r1 = WrappedRNG(r, UInt32);\n\njulia> RandomNumbers.output_type(r1)\nUInt32\n\njulia> r2 = WrappedRNG(Xorshifts.Xorshift128Star, UInt32, 123);\n\njulia> RandomNumbers.output_type(r2)\nUInt32\n\njulia> @Test.test rand(r1, UInt32, 3) == rand(r2, UInt32, 3)\nTest Passed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.Xorshifts",
    "page": "Docstrings",
    "title": "RandomNumbers.Xorshifts",
    "category": "module",
    "text": "The module for Xorshift Family.\n\nProvide 11 RNG types:\n\nXorshift64\nXorshift64Star\nXorshift128\nXorshift128Star\nXorshift128Plus\nXorshift1024\nXorshift1024Star\nXorshift1024Plus\nXoroshiro128\nXoroshiro128Star\nXoroshiro128Plus\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.gen_seed",
    "page": "Docstrings",
    "title": "RandomNumbers.gen_seed",
    "category": "function",
    "text": "gen_seed(T[, n])\n\nGenerate a tuple of n truly random numbers in type T. If n is missing, return only one number. The \"truly\" random numbers are provided by the random device of system. See Random.RandomDevice.\n\nExamples\n\njulia> RandomNumbers.gen_seed(UInt64, 2)  # The output should probably be different on different computers.\n(0x26aa3fe5e306f725,0x7b9dc3c227d8acc9)\n\njulia> RandomNumbers.gen_seed(UInt32)\n0x9ba60fdc\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.output_type",
    "page": "Docstrings",
    "title": "RandomNumbers.output_type",
    "category": "function",
    "text": "Get the original output type of a RNG.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomNumbers.seed_type",
    "page": "Docstrings",
    "title": "RandomNumbers.seed_type",
    "category": "function",
    "text": "Get the default seed type of a RNG.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RandomNumbers.AbstractRNGRandomNumbers.BitTypesRandomNumbers.MersenneTwistersRandomNumbers.PCGRandomNumbers.Random123RandomNumbers.RandomNumbersRandomNumbers.WrappedRNGRandomNumbers.XorshiftsRandomNumbers.evalRandomNumbers.gen_seedRandomNumbers.includeRandomNumbers.output_typeRandomNumbers.seed!RandomNumbers.seed_typeRandomNumbers.split_uintRandomNumbers.union_uintRandomNumbers.unsafe_compareRandomNumbers.unsafe_copyto!"
},

]}
