var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Yeppp-bindings-for-Julia-1",
    "page": "Readme",
    "title": "Yeppp bindings for Julia",
    "category": "section",
    "text": "Linux: (Image: Build Status)Windows: (Image: Build status)(Image: Coverage Status) (Image: codecov.io)Yeppp! is a high-performance SIMD-optimized mathematical library. This Julia package makes it possible to call Yeppp from Julia.Install this package byPkg.add(\"Yeppp\")For common 64-bit platforms, this will download dependencies automatically. For some other platforms such as the PowerPC 64 architecture, you may still be able to use this package by downloading Yeppp! and extracting from the binaries folder the file(s) specific to your OS. Check the platforms supported by Yeppp! here. Make sure the extracted files are available on the system library search path or in the current directory.  For example, in Julia\'s bin folder.See example usage below. Yeppp\'s vectorized log is 3x faster than the one in Base, which is written in Julia.using Yeppp\n\nx = rand(10^7)\nty = @elapsed Yeppp.log!(similar(x), x)\nt  = @elapsed log(x)\nt/tyThe following functions are available for Array{Float64}. Inputs are in x, and outputs are in y.dot(x1, x2)\nsum(x)\nsumabs(x)\nsumabs2(x)\nnegate!(x)\nmax!(y, x1, x2)\nmin!(y, x1, x2)\nadd!(y, x1, x2)\nsubtract!(y, x1, x2)\nmultiply!(y, x1, x2)\n\nlog!(y, x)\nexp!(y, x)\nevalpoly!(y, x_coeff, x)\n\nsin!(y, x)\ncos!(y, x)\ntan!(y, x)See the Yeppp! documentation for the full set of functions available in Yeppp!."
},

{
    "location": "autodocs/#Yeppp.add",
    "page": "Docstrings",
    "title": "Yeppp.add",
    "category": "function",
    "text": "add(x::Array, y::Array)\n\nPerform element wise addition of the two array x and y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.cos",
    "page": "Docstrings",
    "title": "Yeppp.cos",
    "category": "function",
    "text": "cos(x)\n\nReturns element wise cos of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.cos!",
    "page": "Docstrings",
    "title": "Yeppp.cos!",
    "category": "function",
    "text": "cos(x)\n\nReturns element wise cos of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.dot",
    "page": "Docstrings",
    "title": "Yeppp.dot",
    "category": "function",
    "text": "dot(x::Vector{Float64}, y::Vector{Float64})\n\nCompute the dot product of x and y.\n\n\n\n\n\ndot(x::Vector{Float32}, y::Vector{Float32})\n\nCompute the dot product of x and y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.evalpoly",
    "page": "Docstrings",
    "title": "Yeppp.evalpoly",
    "category": "function",
    "text": "evalpoly(coeff, x)\n\nEvaluates polynomial with double precision (64-bit) floating-point coefficients coeff on an array of double precision (64-bit) floating-point elements x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.exp",
    "page": "Docstrings",
    "title": "Yeppp.exp",
    "category": "function",
    "text": "exp(x)\n\nReturns the element wise exponential of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.exp!",
    "page": "Docstrings",
    "title": "Yeppp.exp!",
    "category": "function",
    "text": "exp(x)\n\nComputes the element wise exponential of x inplace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.log",
    "page": "Docstrings",
    "title": "Yeppp.log",
    "category": "function",
    "text": "log(x)\n\nReturns the element wise natural logarithm of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.log!",
    "page": "Docstrings",
    "title": "Yeppp.log!",
    "category": "function",
    "text": "log!(x)\n\nComputes the element wise natural logarithm of x inplace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.max",
    "page": "Docstrings",
    "title": "Yeppp.max",
    "category": "function",
    "text": "max(x, y)\n\nCompares the vectors x and y and return the element wise maxima.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.min",
    "page": "Docstrings",
    "title": "Yeppp.min",
    "category": "function",
    "text": "max(x, y)\n\nCompares the vectors x and y and return the element wise minima.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.multiply",
    "page": "Docstrings",
    "title": "Yeppp.multiply",
    "category": "function",
    "text": "multiply(x, y)\n\nPerform element wise multiplication of the two array x and y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.sin",
    "page": "Docstrings",
    "title": "Yeppp.sin",
    "category": "function",
    "text": "sin(x)\n\nReturns element wise sin of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.sin!",
    "page": "Docstrings",
    "title": "Yeppp.sin!",
    "category": "function",
    "text": "sin(x)\n\nComputes element wise sin of x inplace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.subtract",
    "page": "Docstrings",
    "title": "Yeppp.subtract",
    "category": "function",
    "text": "subtract(x::Array, y::Array)\n\nPerform element wise subtraction of the two array x and y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.tan",
    "page": "Docstrings",
    "title": "Yeppp.tan",
    "category": "function",
    "text": "tan(x)\n\nReturns element wise tan of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yeppp.tan!",
    "page": "Docstrings",
    "title": "Yeppp.tan!",
    "category": "function",
    "text": "tan(x)\n\nReturns element wise tan of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Yeppp.@checked_libYeppp.@yepppfunsAA_AYeppp.@yepppfunsA_AYeppp.@yepppfunsA_SYeppp.YepppYeppp.__init__Yeppp.addYeppp.add!Yeppp.cosYeppp.cos!Yeppp.dotYeppp.evalYeppp.evalpolyYeppp.evalpoly!Yeppp.expYeppp.exp!Yeppp.includeYeppp.libyepppYeppp.logYeppp.log!Yeppp.maxYeppp.max!Yeppp.minYeppp.min!Yeppp.multiplyYeppp.multiply!Yeppp.releaseYeppp.sinYeppp.sin!Yeppp.subtractYeppp.subtract!Yeppp.sumYeppp.sumabsYeppp.sumabs2Yeppp.tanYeppp.tan!"
},

]}
