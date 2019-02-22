var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Reduced-Row-Echelon-form-computation-1",
    "page": "Readme",
    "title": "Reduced Row Echelon form computation",
    "category": "section",
    "text": "PackageEvaluator Build Status\n[![][pkg-0.5-img]][pkg-0.5-url] [![Build Status][build-img]][build-url] [![Build Status][winbuild-img]][winbuild-url]\n[![][pkg-0.6-img]][pkg-0.6-url] [![Coveralls branch][coveralls-img]][coveralls-url] [![Codecov branch][codecov-img]][codecov-url]This small package contains the functions rref and rref!. The code was initially part of Julia and was developed by Jeff Bezanson (see here).[pkg-0.6-img]: http://pkg.julialang.org/badges/RowEchelon0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=RowEchelon [pkg-0.7-img]: http://pkg.julialang.org/badges/RowEchelon0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=RowEchelon[build-img]: https://travis-ci.org/blegat/RowEchelon.jl.svg?branch=master [build-url]: https://travis-ci.org/blegat/RowEchelon.jl [winbuild-img]: https://ci.appveyor.com/api/projects/status/h4q97x5fnhx20wnk/branch/master?svg=true [winbuild-url]: https://ci.appveyor.com/project/blegat/rowechelon-jl/branch/master [coveralls-img]: https://coveralls.io/repos/blegat/RowEchelon.jl/badge.svg?branch=master&service=github [coveralls-url]: https://coveralls.io/github/blegat/RowEchelon.jl?branch=master [codecov-img]: http://codecov.io/github/blegat/RowEchelon.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/blegat/RowEchelon.jl?branch=master"
},

{
    "location": "autodocs/#RowEchelon.rref",
    "page": "Docstrings",
    "title": "RowEchelon.rref",
    "category": "function",
    "text": "rref(A)\n\nCompute the reduced row echelon form of the matrix A. Since this algorithm is sensitive to numerical imprecision,\n\nComplex numbers are converted to ComplexF64\nInteger, Float16 and Float32 numbers are converted to Float64\nRational are kept unchanged\n\njulia> rref([ 1  2 -1  -4;\n              2  3 -1 -11;\n             -2  0 -3  22])\n3×4 Array{Float64,2}:\n 1.0  0.0  0.0  -8.0\n 0.0  1.0  0.0   1.0\n 0.0  0.0  1.0  -2.0\n\njulia> rref([16  2  3  13;\n              5 11 10   8;\n              9  7  6  12;\n              4 14 15   1])\n4×4 Array{Float64,2}:\n 1.0  0.0  0.0   1.0\n 0.0  1.0  0.0   3.0\n 0.0  0.0  1.0  -3.0\n 0.0  0.0  0.0   0.0\n\njulia> rref([ 1  2  0   3;\n              2  4  0   7])\n2×4 Array{Float64,2}:\n 1.0  2.0  0.0  0.0\n 0.0  0.0  0.0  1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RowEchelon.rref_with_pivots",
    "page": "Docstrings",
    "title": "RowEchelon.rref_with_pivots",
    "category": "function",
    "text": "rref_with_pivots(A)\n\nCompute the reduced row echelon form of the matrix A together with the position of the pivots. Since this algorithm is sensitive to numerical imprecision,\n\nComplex numbers are converted to ComplexF64\nInteger, Float16 and Float32 numbers are converted to Float64\nRational are kept unchanged\n\njulia> rref_with_pivots([ 1  2 -1  -4;\n              2  3 -1 -11;\n             -2  0 -3  22])\n3×4 Array{Float64,2}:\n 1.0  0.0  0.0  -8.0\n 0.0  1.0  0.0   1.0\n 0.0  0.0  1.0  -2.0\n Int64[3]:\n 1\n 2\n 3\n\njulia> rref_with_pivots([16  2  3  13;\n              5 11 10   8;\n              9  7  6  12;\n              4 14 15   1])\n4×4 Array{Float64,2}:\n 1.0  0.0  0.0   1.0\n 0.0  1.0  0.0   3.0\n 0.0  0.0  1.0  -3.0\n 0.0  0.0  0.0   0.0\n Int64[3]:\n 1\n 2\n 3\n\njulia> rref_with_pivots([ 1  2  0   3;\n              2  4  0   7])\n2×4 Array{Float64,2}:\n 1.0  2.0  0.0  0.0\n 0.0  0.0  0.0  1.0\n Int64[3]:\n 1\n 4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RowEchelon.RowEchelonRowEchelon.evalRowEchelon.includeRowEchelon.rrefRowEchelon.rref!RowEchelon.rref_with_pivotsRowEchelon.rref_with_pivots!RowEchelon.rref_with_pivots_convRowEchelon.rrefconv"
},

]}
