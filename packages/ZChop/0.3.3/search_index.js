var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ZChop-1",
    "page": "Readme",
    "title": "ZChop",
    "category": "section",
    "text": "Replace small numbers with zeroLinux, OSX: (Image: Build Status) &nbsp; Windows: (Image: Build Status) &nbsp; &nbsp; &nbsp; (Image: Coverage Status) (Image: codecov.io)(Image: ZChop) (Image: ZChop) (Image: ZChop)zchop(x) replaces numbers in x that are close to zero with zero.zchop(x) returns 0 if abs(x) is smaller than 1e-14, and x otherwise.zchop(x,eps) uses eps rather than 1e-14zchop!(a,eps) works inplace on Array a.The following examples use out-of-date syntax. See this Jupyter notebook for up-to-date examples.Examples:julia> res = ifft(fft([2,1,1,0,0,0,0]))\n7-element Array{Complex{Float64},1}:\n          2.0+0.0im\n          1.0+0.0im\n          1.0+0.0im\n   7.8904e-17+0.0im\n  4.79786e-17+0.0im\n -1.26883e-16+0.0im\n -6.34413e-17+0.0im\n\njulia> zchop(res)\n7-element Array{Complex{Float64},1}:\n 2.0+0.0im\n 1.0+0.0im\n 1.0+0.0im\n 0.0+0.0im\n 0.0+0.0im\n 0.0+0.0im\n 0.0+0.0imjulia> res = exp(linspace(1,4,4) * pi * im)\n4-element Array{Complex{Float64},1}:\n -1.0+1.22465e-16im\n  1.0-2.44929e-16im\n -1.0+3.67394e-16im\n  1.0-4.89859e-16im\n\njulia> zchop(res)\n4-element Array{Complex{Float64},1}:\n -1.0+0.0im\n  1.0+0.0im\n -1.0+0.0im\n  1.0+0.0imjulia> a = sparse([ [1.0,1e-16]  [1e-16, 1.0]])\n2x2 sparse matrix with 4 Float64 entries:\n        [1, 1]  =  1.0\n        [2, 1]  =  1.0e-16\n        [1, 2]  =  1.0e-16\n        [2, 2]  =  1.0\n\njulia> zchop(a)\n2x2 sparse matrix with 2 Float64 entries:\n        [1, 1]  =  1.0\n        [2, 2]  =  1.0"
},

{
    "location": "#Details-1",
    "page": "Readme",
    "title": "Details",
    "category": "section",
    "text": "The type of the numbers is preserved.  For instance, complex numbers with imaginary part near zero are not replaced with real numbers.zchop works on complex and rational numbers, arrays, and some other structures. The idea is for zchop to descend into structures, chopping numbers, and acting as the the identity on anything that can\'t be sensibly compared to eps."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> a = Any[ [1e-15, \"dog\", (BigFloat(10.0))^-15, complex(1e-15,1), 1 // 10^15],\n         [[2,3] [4,1e-15]] ];\n\njulia> zchop(a)\n2-element Array{Any,1}:\n {0.0,\"dog\",0e+00 with 256 bits of precision,0.0 + 1.0im,0//1}\n 2x2 Array{Float64,2}:\n 2.0  4.0\n 3.0  0.0"
},

{
    "location": "autodocs/#ZChop.ZChop",
    "page": "Docstrings",
    "title": "ZChop.ZChop",
    "category": "module",
    "text": "The ZChop module provides the functions zchop and zchop!, which replace numbers that are close to zero with zero. These functions act recursivley on collections.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZChop.zchop",
    "page": "Docstrings",
    "title": "ZChop.zchop",
    "category": "function",
    "text": "zchop(x::T, eps::Real = zeps)\n\nReplace x by zero if abs(x) < eps. zchop acts recursively on mappable objects. Objects that cannot be sensibly compared to a real number are passed unaltered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZChop.zchop!",
    "page": "Docstrings",
    "title": "ZChop.zchop!",
    "category": "function",
    "text": "zchop!(x::T, eps::Real = zeps)\n\nPerform zchop in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ZChop.zeps",
    "page": "Docstrings",
    "title": "ZChop.zeps",
    "category": "constant",
    "text": "zeps::Float64\n\nThe default lower threshold for a number to be replaced by zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ZChop.ZChopZChop.evalZChop.includeZChop.zchopZChop.zchop!ZChop.zeps"
},

]}
