var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OffsetArrays.jl-1",
    "page": "Readme",
    "title": "OffsetArrays.jl",
    "category": "section",
    "text": "OffsetArrays provides Julia users with arrays that have arbitrary indices, similar to those found in some other programming languages like Fortran.julia> using OffsetArrays\n\njulia> y = OffsetArray{Float64}(undef, -1:1, -7:7, -128:512, -5:5, -1:1, -3:3, -2:2, -1:1);\n\njulia> summary(y)\n\"OffsetArrays.OffsetArray{Float64,8,Array{Float64,8}} with indices -1:1×-7:7×-128:512×-5:5×-1:1×-3:3×-2:2×-1:1\"\n\njulia> y[-1,-7,-128,-5,-1,-3,-2,-1] = 14\n14\n\njulia> y[-1,-7,-128,-5,-1,-3,-2,-1] += 5\n19.0"
},

{
    "location": "#Example:-Relativistic-Notation-1",
    "page": "Readme",
    "title": "Example: Relativistic Notation",
    "category": "section",
    "text": "Suppose we have a position vector r = [:x, :y, :z] which is naturally one-based, ie. r[1] == :x, r[2] == :y,  r[3] == :z and we also want to cosntruct a relativistic position vector which includes time as the 0th component. This can be done with OffsetArrays like julia> using OffsetArrays\n\njulia> r = [:x, :y, :z];\n\njulia> x = OffsetVector([:t, r...], 0:3)\nOffsetArray(::Array{Symbol,1}, 0:3) with eltype Symbol with indices 0:3:\n :t\n :x\n :y\n :z\n\njulia> x[0]\n:t\n\njulia> x[1:3]\n3-element Array{Symbol,1}:\n :x\n :y\n :z"
},

{
    "location": "#Example:-Polynomials-1",
    "page": "Readme",
    "title": "Example: Polynomials",
    "category": "section",
    "text": "Suppose one wants to represent the Laurent polynomial6/x + 5 - 2*x + 3*x^2 + x^3in julia. The coefficients of this polynomial are a naturally -1 based list, since the nth element of the list  (counting from -1) 6, 5, -2, 3, 1 is the coefficient corresponding to the nth power of x. This Laurent polynomial can be evaluated at say x = 2 as follows.julia> using OffsetArrays\n\njulia> coeffs = OffsetVector([6, 5, -2, 3, 1], -1:3)\nOffsetArray(::Array{Int64,1}, -1:3) with eltype Int64 with indices -1:3:\n  6\n  5\n -2\n  3\n  1\n\njulia> polynomial(x, coeffs) = sum(coeffs[n]*x^n for n in eachindex(coeffs))\npolynomial (generic function with 1 method)\n\njulia> polynomial(2.0, coeffs)\n24.0Notice our use of the eachindex function which does not assume that the given array starts at 1."
},

{
    "location": "#Notes-on-supporting-OffsetArrays-1",
    "page": "Readme",
    "title": "Notes on supporting OffsetArrays",
    "category": "section",
    "text": "Julia supports generic programming with arrays that doesn\'t require you to assume that indices start with 1, see the documentation."
},

{
    "location": "autodocs/#OffsetArrays.no_offset_view",
    "page": "Docstrings",
    "title": "OffsetArrays.no_offset_view",
    "category": "function",
    "text": "no_offset_view(A)\n\nReturn an AbstractArray that shares structure and has the same type and size as the argument, but has 1-based indexing. May just return the argument when applicable. Not exported.\n\nThe default implementation uses OffsetArrays, but other types should use something more specific to remove a level of indirection when applicable.\n\njulia> O = OffsetArray(A, 0:1, -1:1)\nOffsetArray(::Array{Int64,2}, 0:1, -1:1) with eltype Int64 with indices 0:1×-1:1:\n 1  3  5\n 2  4  6\n\njulia> OffsetArrays.no_offset_view(O)[1,1] = -9\n-9\n\njulia> A\n2×3 Array{Int64,2}:\n -9  3  5\n  2  4  6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OffsetArrays.@unsafeOffsetArrays.ArrayInitializerOffsetArrays.OffsetArrayOffsetArrays.OffsetArraysOffsetArrays.OffsetAxisOffsetArrays.OffsetRangeOffsetArrays.OffsetVectorOffsetArrays._axesOffsetArrays._sliceOffsetArrays._unsliceOffsetArrays.evalOffsetArrays.includeOffsetArrays.indexlengthOffsetArrays.indexoffsetOffsetArrays.no_offset_viewOffsetArrays.offsetOffsetArrays.parenttypeOffsetArrays.printindices"
},

]}
