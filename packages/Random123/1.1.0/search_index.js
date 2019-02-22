var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Random123.jl-1",
    "page": "Readme",
    "title": "Random123.jl",
    "category": "section",
    "text": "Julia implementation of Random123Linux, OSX: (Image: Build Status)Windows: (Image: Build status)Code Coverage: (Image: Coverage Status)See RandomNumbers.jl for details. The documentation is also hosted there."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered. The stable version of this package requires Julia 0.7+. You can install it by:(v1.1) pkg> add Random123And then you can run the tests:(v1.1) pkg> test Random123This package is under MIT License. The original license of Random123 can be found here."
},

{
    "location": "autodocs/#Random123.AESNI1x",
    "page": "Docstrings",
    "title": "Random123.AESNI1x",
    "category": "type",
    "text": "AESNI1x <: R123Generator1x{UInt128}\nAESNI1x([seed])\n\nAESNI1x is one kind of AESNI Counter-Based RNGs. It generates one UInt128 number at a time.\n\nseed is an Integer which will be automatically converted to UInt128.\n\nOnly available when R123_USE_AESNI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.AESNI4x",
    "page": "Docstrings",
    "title": "Random123.AESNI4x",
    "category": "type",
    "text": "AESNI4x <: R123Generator4x{UInt32}\nAESNI4x([seed])\n\nAESNI4x is one kind of AESNI Counter-Based RNGs. It generates four UInt32 numbers at a time.\n\nseed is a Tuple of four Integers which will all be automatically converted to UInt32.\n\nOnly available when R123_USE_AESNI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.AESNIKey",
    "page": "Docstrings",
    "title": "Random123.AESNIKey",
    "category": "type",
    "text": "The key for AESNI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.ARS1x",
    "page": "Docstrings",
    "title": "Random123.ARS1x",
    "category": "type",
    "text": "ARS1x{R} <: R123Generator1x{UInt128}\nARS1x([seed, R=7])\n\nARS1x is one kind of ARS Counter-Based RNGs. It generates one UInt128 number at a time.\n\nseed is an Integer which will be automatically converted to UInt128.\n\nR denotes to the Rounds which should be at least 1 and no more than 10. With 7 rounds (by default), it has a considerable safety margin over the minimum number of rounds with no known statistical flaws, but still has excellent performance.\n\nOnly available when R123_USE_AESNI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.ARS4x",
    "page": "Docstrings",
    "title": "Random123.ARS4x",
    "category": "type",
    "text": "ARS4x{R} <: R123Generator4x{UInt32}\nARS4x([seed, R=7])\n\nARS4x is one kind of ARS Counter-Based RNGs. It generates four UInt32 numbers at a time.\n\nseed is a Tuple of four Integers which will all be automatically converted to UInt32.\n\nR denotes to the Rounds which must be at least 1 and no more than 10. With 7 rounds (by default), it has a considerable safety margin over the minimum number of rounds with no known statistical flaws, but still has excellent performance.\n\nOnly available when R123_USE_AESNI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.AbstractR123",
    "page": "Docstrings",
    "title": "Random123.AbstractR123",
    "category": "type",
    "text": "The base abstract type for RNGs in Random123 Family.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.Philox2x",
    "page": "Docstrings",
    "title": "Random123.Philox2x",
    "category": "type",
    "text": "Philox2x{T, R} <: R123Generator2x{T}\nPhilox2x([seed, R])\nPhilox2x(T[, seed, R])\n\nPhilox2x is one kind of Philox Counter-Based RNGs. It generates two numbers at a time.\n\nT is UInt32 or UInt64(default).\n\nseed is an Integer which will be automatically converted to T.\n\nR denotes to the Rounds which must be at least 1 and no more than 16. With 10 rounds (by default), it has a considerable safety margin over the minimum number of rounds with no known statistical flaws, but still has excellent performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.Philox4x",
    "page": "Docstrings",
    "title": "Random123.Philox4x",
    "category": "type",
    "text": "Philox4x{T, R} <: R123Generator4x{T}\nPhilox4x([seed, R])\nPhilox4x(T[, seed, R])\n\nPhilox4x is one kind of Philox Counter-Based RNGs. It generates four numbers at a time.\n\nT is UInt32 or UInt64(default).\n\nseed is a Tuple of two Integers which will both be automatically converted to T.\n\nR denotes to the Rounds which must be at least 1 and no more than 16. With 10 rounds (by default), it has a considerable safety margin over the minimum number of rounds with no known statistical flaws, but still has excellent performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.R123Generator1x",
    "page": "Docstrings",
    "title": "Random123.R123Generator1x",
    "category": "type",
    "text": "RNG that generates one number at a time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.R123Generator2x",
    "page": "Docstrings",
    "title": "Random123.R123Generator2x",
    "category": "type",
    "text": "RNG that generates two numbers at a time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.R123Generator4x",
    "page": "Docstrings",
    "title": "Random123.R123Generator4x",
    "category": "type",
    "text": "RNG that generates four numbers at a time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.R123_USE_AESNI",
    "page": "Docstrings",
    "title": "Random123.R123_USE_AESNI",
    "category": "constant",
    "text": "True when AES-NI library has been compiled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.Random123",
    "page": "Docstrings",
    "title": "Random123.Random123",
    "category": "module",
    "text": "The module for Random123 Family.\n\nProvide 8 RNG types:\n\nThreefry2x\nThreefry4x\nPhilox2x\nPhilox4x\nAESNI1x\nAESNI4x\nARS1x\nARS4x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.Threefry2x",
    "page": "Docstrings",
    "title": "Random123.Threefry2x",
    "category": "type",
    "text": "Threefry2x{T, R} <: R123Generator2x{T}\nThreefry2x([seed, R])\nThreefry2x(T[, seed, R])\n\nThreefry2x is one kind of Threefry Counter-Based RNGs. It generates two numbers at a time.\n\nT is UInt32 or UInt64(default).\n\nseed is a Tuple of two Integers which will both be automatically converted to T.\n\nR denotes to the Rounds which must be at least 1 and no more than 32. With 20 rounds (by default), it has a considerable safety margin over the minimum number of rounds with no known statistical flaws, but still has excellent performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.Threefry4x",
    "page": "Docstrings",
    "title": "Random123.Threefry4x",
    "category": "type",
    "text": "Threefry4x{T, R} <: R123Generator4x{T}\nThreefry4x([seed, R])\nThreefry4x(T[, seed, R])\n\nThreefry2x is one kind of Threefry Counter-Based RNGs. It generates four numbers at a time.\n\nT is UInt32 or UInt64(default).\n\nseed is a Tuple of four Integers which will all be automatically converted to T.\n\nR denotes to the Rounds which must be at least 1 and no more than 32. With 20 rounds (by default), it has a considerable safety margin over the minimum number of rounds with no known statistical flaws, but still has excellent performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.random123_r",
    "page": "Docstrings",
    "title": "Random123.random123_r",
    "category": "function",
    "text": "Do one iteration and return the a tuple of a Random123 RNG object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Random123.set_counter!",
    "page": "Docstrings",
    "title": "Random123.set_counter!",
    "category": "function",
    "text": "Set the counter of a Random123 RNG.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Random123.AESNI1xRandom123.AESNI4xRandom123.AESNIKeyRandom123.ARS1xRandom123.ARS4xRandom123.AbstractR123Random123.PHILOX_M2x_0Random123.PHILOX_M4x_0Random123.PHILOX_M4x_1Random123.PHILOX_W_0Random123.PHILOX_W_1Random123.Philox2xRandom123.Philox4xRandom123.R123Array1xRandom123.R123Array2xRandom123.R123Array4xRandom123.R123Generator1xRandom123.R123Generator2xRandom123.R123Generator4xRandom123.R123_USE_AESNIRandom123.Random123Random123.Rx2_0_0Random123.Rx2_1_0Random123.Rx2_2_0Random123.Rx2_3_0Random123.Rx2_4_0Random123.Rx2_5_0Random123.Rx2_6_0Random123.Rx2_7_0Random123.Rx4_0_0Random123.Rx4_0_1Random123.Rx4_1_0Random123.Rx4_1_1Random123.Rx4_2_0Random123.Rx4_2_1Random123.Rx4_3_0Random123.Rx4_3_1Random123.Rx4_4_0Random123.Rx4_4_1Random123.Rx4_5_0Random123.Rx4_5_1Random123.Rx4_6_0Random123.Rx4_6_1Random123.Rx4_7_0Random123.Rx4_7_1Random123.SKEIN_KS_PARITYRandom123.Threefry2xRandom123.Threefry4xRandom123.aesni1xm128iRandom123.ars1xm128iRandom123.evalRandom123.includeRandom123.initkeyRandom123.librandom123Random123.philox2x_bumpkeyRandom123.philox2x_roundRandom123.philox4x_bumpkeyRandom123.philox4x_roundRandom123.philox_mulhiloRandom123.random123_rRandom123.set_counter!Random123.threefry_rotl"
},

]}
