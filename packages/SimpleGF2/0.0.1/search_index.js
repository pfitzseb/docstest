var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleGF2-1",
    "page": "Readme",
    "title": "SimpleGF2",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)This a basic implementation of arithmetic in GF(2). Values in GF(2) can be created like this:julia> using SimpleGF2\n\njulia> GF2(5)\nGF2(1)\n\njulia> GF2(4)\nGF2(0)\n\njulia> one(GF2)\nGF2(1)\n\njulia> zero(GF2)\nGF2(0)Matrices can be created with ones, zeros, and eye. The rand function has been extended to return random elements of GF(2). For example:julia> A =rand(GF2,3,5)\n3x5 Array{SimpleGF2.GF2,2}:\n GF2(0)  GF2(1)  GF2(1)  GF2(0)  GF2(0)\n GF2(1)  GF2(1)  GF2(1)  GF2(1)  GF2(1)\n GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(1)To see this clearly, you can map the values integers:julia> map(Int,A)\n3x5 Array{Int64,2}:\n 0  1  1  0  0\n 1  1  1  1  1\n 0  0  0  0  1Arithmetic with scalars and arrays of GF(2) elements work as expected. For square matrices, det and inv are available too:julia> A = triu(ones(GF2,5,5))\n5x5 Array{SimpleGF2.GF2,2}:\n GF2(1)  GF2(1)  GF2(1)  GF2(1)  GF2(1)\n GF2(0)  GF2(1)  GF2(1)  GF2(1)  GF2(1)\n GF2(0)  GF2(0)  GF2(1)  GF2(1)  GF2(1)\n GF2(0)  GF2(0)  GF2(0)  GF2(1)  GF2(1)\n GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(1)\n\njulia> inv(A)\n5x5 Array{SimpleGF2.GF2,2}:\n GF2(1)  GF2(1)  GF2(0)  GF2(0)  GF2(0)\n GF2(0)  GF2(1)  GF2(1)  GF2(0)  GF2(0)\n GF2(0)  GF2(0)  GF2(1)  GF2(1)  GF2(0)\n GF2(0)  GF2(0)  GF2(0)  GF2(1)  GF2(1)\n GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(1)\n\njulia> A = triu(ones(GF2,4,4))\n4x4 Array{SimpleGF2.GF2,2}:\n GF2(1)  GF2(1)  GF2(1)  GF2(1)\n GF2(0)  GF2(1)  GF2(1)  GF2(1)\n GF2(0)  GF2(0)  GF2(1)  GF2(1)\n GF2(0)  GF2(0)  GF2(0)  GF2(1)\n\njulia> det(A)\nGF2(1)\n\njulia> B = inv(A)\n4x4 Array{SimpleGF2.GF2,2}:\n GF2(1)  GF2(1)  GF2(0)  GF2(0)\n GF2(0)  GF2(1)  GF2(1)  GF2(0)\n GF2(0)  GF2(0)  GF2(1)  GF2(1)\n GF2(0)  GF2(0)  GF2(0)  GF2(1)\n\njulia> A*B\n4x4 Array{SimpleGF2.GF2,2}:\n GF2(1)  GF2(0)  GF2(0)  GF2(0)\n GF2(0)  GF2(1)  GF2(0)  GF2(0)\n GF2(0)  GF2(0)  GF2(1)  GF2(0)\n GF2(0)  GF2(0)  GF2(0)  GF2(1)\n ```\n\n\n## Additional functionality\n\n### Rank and nullity\n\nGiven a matrix `A` the dimension of its column space and its\nnull space can be computed using `rank(A)` and `nullity(A)`,\nrespectively. Further, the null space of `A` is returned by\n`nullspace(A)` as a matrix whose columns are a basis for the\nnull space.julia julia> A = rand(GF2,4,9) 4x9 Array{SimpleGF2.GF2,2}:  GF2(1)  GF2(1)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(1)  GF2(0)  GF2(1)  GF2(1)  GF2(0)  GF2(0)  GF2(1)  GF2(1)  GF2(0)  GF2(1)  GF2(1)  GF2(0)  GF2(0)  GF2(1)  GF2(1)  GF2(1)  GF2(1)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(1)  GF2(1)julia> rank(A) 4julia> nullity(A) 5julia> B = nullspace(A) 9x5 Array{SimpleGF2.GF2,2}:  GF2(1)  GF2(1)  GF2(1)  GF2(1)  GF2(1)  GF2(1)  GF2(0)  GF2(0)  GF2(1)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(0)  GF2(1)  GF2(1)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(1)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(1)julia> A*B 4x5 Array{SimpleGF2.GF2,2}:  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)  GF2(0)julia> nullspace(A\') 4x0 Array{SimpleGF2.GF2,2}\n### Equation solving\n\nGiven a matrix `A` and a vector `b`, the function `solve(A,b)`\nreturns a vector `x` such that `A*x==b`. For example,\nhere we show how to solve the pair of equations `r+s==1, s+t==1`:julia julia> A = map(GF2,[1 1 0; 0 1 1]) 2x3 Array{SimpleGF2.GF2,2}:  GF2(1)  GF2(1)  GF2(0)  GF2(0)  GF2(1)  GF2(1)julia> b = map(GF2,[1,1]) 2-element Array{SimpleGF2.GF2,1}:  GF2(1)  GF2(1)julia> x = solve(A,b) 3-element Array{SimpleGF2.GF2,1}:  GF2(0)  GF2(1)  GF2(0)julia> A*x==b trueOf course, this is an underdetermined system. The function\n`solve_all` returns a solution to the system `A*x==b` and\na basis for the null space of `A`:julia julia> x,B = solve_all(A,b);julia> x 3-element Array{SimpleGF2.GF2,1}:  GF2(0)  GF2(1)  GF2(0)julia> B 3x1 Array{SimpleGF2.GF2,2}:  GF2(1)  GF2(1)  GF2(1)julia> y = x + B[:,1] 3-element Array{SimpleGF2.GF2,1}:  GF2(1)  GF2(0)  GF2(1)julia> A*y==b true\n### Row reduced echelon form\n\nThe function `rref(A)` returns the row reduced echelon form\nof the matrix `A`. Similarly, `rref!(A)` overwrites `A` with\nits row reduced echelon form.\n\n\n\n### Polynomials\n\nThe `SimpleGF2` module is compatible with the `Polynomials` package.\njulia julia> using Polynomialsjulia> x = Poly( [ GF2(0); GF2(1) ] ) Poly(x)julia> (x+1)^4 Poly(GF2(1) + x^4) ```"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install with  Pkg.clone(\"https://github.com/scheinerman/SimpleGF2.jl.git\")And then specify using SimpleGF2 to use the GF2 numbers."
},

{
    "location": "#Acknowledgement-1",
    "page": "Readme",
    "title": "Acknowledgement",
    "category": "section",
    "text": "Thanks to Tara Abrishami for her contributions to this module including rref, rref!, solve, solve_all, and nullspace."
},

{
    "location": "autodocs/#SimpleGF2.add_row_to_row!",
    "page": "Docstrings",
    "title": "SimpleGF2.add_row_to_row!",
    "category": "function",
    "text": "add_row_to_row!(A,i,j) adds row i to row j in the matrix A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGF2.nullity",
    "page": "Docstrings",
    "title": "SimpleGF2.nullity",
    "category": "function",
    "text": "nullity(A) returns the dimension of the nullspace of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGF2.rref",
    "page": "Docstrings",
    "title": "SimpleGF2.rref",
    "category": "function",
    "text": "rref(A) returns the row reduced echelon form of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGF2.rref!",
    "page": "Docstrings",
    "title": "SimpleGF2.rref!",
    "category": "function",
    "text": "rref!(A) overwrites A with its row reduced echelon form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGF2.solve",
    "page": "Docstrings",
    "title": "SimpleGF2.solve",
    "category": "function",
    "text": "solve(A,b) returns a solution x to the linear system A*x == b or throws an error if no solution can be found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGF2.solve_all",
    "page": "Docstrings",
    "title": "SimpleGF2.solve_all",
    "category": "function",
    "text": "solve_all(A,b) returns a solution to A*x==b together with a basis for the nullspace of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGF2.swap_rows!",
    "page": "Docstrings",
    "title": "SimpleGF2.swap_rows!",
    "category": "function",
    "text": "swap_rows!(A,i,j) swaps rows i and j in the matrix A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleGF2.GF2SimpleGF2.SimpleGF2SimpleGF2.add_row_to_row!SimpleGF2.evalSimpleGF2.includeSimpleGF2.nullitySimpleGF2.rrefSimpleGF2.rref!SimpleGF2.solveSimpleGF2.solve_allSimpleGF2.solve_augmentedSimpleGF2.swap_rows!"
},

]}
