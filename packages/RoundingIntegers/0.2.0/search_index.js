var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RoundingIntegers-1",
    "page": "Readme",
    "title": "RoundingIntegers",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)RoundingIntegers defines new integer types for the Julia programming language. Rounding integers act very much like regular integers, except that you can safely assign floating-point values to them. As the name suggests, such assignments cause rounding to the nearest integer.Demonstration:julia> using RoundingIntegers\n\njulia> Int(7.2)     # fails with \"regular\" integers\nERROR: InexactError()\n in Int64(::Float64) at ./sysimg.jl:53\n\njulia> RInt(7.2)    # but not with a rounding integer\n7\n\njulia> (map(RInt, 1.5:1:4.5)...,)  # rounds half integers to nearest even \n(2, 2, 4, 4)\n\njulia> a = Vector{RUInt8}(undef, 2)\n2-element Array{RoundingIntegers.RUInt8,1}:\n 0x42\n 0x61\n\njulia> a[1] = 1.7\n1.7\n\njulia> a[2] = 128.1\n128.1\n\njulia> a\n2-element Array{RoundingIntegers.RUInt8,1}:\n 0x02\n 0x80The following types are available:RInteger (RInteger(i) converts i to the corresponding RInteger type)\nRSigned, RUnsigned\nRInt8, RUInt8\nRInt16, RUInt16\nRInt32, RUInt32\nRInt64, RUInt64\nRInt128, RUInt128\nRInt, RUInt (defaults to the platform\'s WORD_SIZE representation)Most operations involving rounding integers promote to regular integers. Only a small subset of operations (e.g., bit-shift operations, negation, and certain arithmetic involving numbers of all the same type) preserve the type of RIntegers."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RoundingIntegers.RIntRoundingIntegers.RInt128RoundingIntegers.RInt16RoundingIntegers.RInt32RoundingIntegers.RInt64RoundingIntegers.RInt8RoundingIntegers.RIntegerRoundingIntegers.RSignedRoundingIntegers.RUIntRoundingIntegers.RUInt128RoundingIntegers.RUInt16RoundingIntegers.RUInt32RoundingIntegers.RUInt64RoundingIntegers.RUInt8RoundingIntegers.RUnsignedRoundingIntegers.RoundingIntegersRoundingIntegers.evalRoundingIntegers.includeRoundingIntegers.itypeRoundingIntegers.rtype"
},

]}
