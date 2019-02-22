var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RestrictProlong-1",
    "page": "Readme",
    "title": "RestrictProlong",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This package provides efficient multidimensional implementations of two operators, restrict and prolong, which feature heavily in multigrid methods. In general terms, these operations reduce and increase, respectively, the size of arrays by a factor of 2 along one or more dimensions.  The two operators satisfy the \"Galerkin condition,\" meaning that as operators they are transposes of one another.In addition to being useful for mulitigrid methods, restrict can be used as a fast antialiasing thumbnail generator for images."
},

{
    "location": "#Usage-examples-1",
    "page": "Readme",
    "title": "Usage examples",
    "category": "section",
    "text": "Set up the following test array:julia> using RestrictProlong\n\njulia> A = zeros(5,5); A[3,3] = 1\n1\n\njulia> A\n5×5 Array{Float64,2}:\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  1.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0restrict reduces the size along the chosen dimension(s) (all dimensions are chosen if not specified), approximately preserving the mean value of the input array:julia> restrict(A)\n3×3 Array{Float64,2}:\n 0.0  0.0   0.0\n 0.0  0.25  0.0\n 0.0  0.0   0.0After restriction, an axis with l = size(A, d) has size (l+1) ÷ 2.For prolongation, it\'s best to specify the desired target size, which can be either 2l or 2l-1:julia> prolong(A, (10,10))\n10×10 Array{Float64,2}:\n 0.0  0.0  0.0  0.0       0.0       0.0       0.0       0.0  0.0  0.0\n 0.0  0.0  0.0  0.0       0.0       0.0       0.0       0.0  0.0  0.0\n 0.0  0.0  0.0  0.0       0.0       0.0       0.0       0.0  0.0  0.0\n 0.0  0.0  0.0  0.015625  0.046875  0.046875  0.015625  0.0  0.0  0.0\n 0.0  0.0  0.0  0.046875  0.140625  0.140625  0.046875  0.0  0.0  0.0\n 0.0  0.0  0.0  0.046875  0.140625  0.140625  0.046875  0.0  0.0  0.0\n 0.0  0.0  0.0  0.015625  0.046875  0.046875  0.015625  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0       0.0       0.0       0.0       0.0  0.0  0.0\n 0.0  0.0  0.0  0.0       0.0       0.0       0.0       0.0  0.0  0.0\n 0.0  0.0  0.0  0.0       0.0       0.0       0.0       0.0  0.0  0.0\n\njulia> prolong(A, (9,10))\n9×10 Array{Float64,2}:\n 0.0  0.0  0.0  0.0      0.0      0.0      0.0      0.0  0.0  0.0\n 0.0  0.0  0.0  0.0      0.0      0.0      0.0      0.0  0.0  0.0\n 0.0  0.0  0.0  0.0      0.0      0.0      0.0      0.0  0.0  0.0\n 0.0  0.0  0.0  0.03125  0.09375  0.09375  0.03125  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0625   0.1875   0.1875   0.0625   0.0  0.0  0.0\n 0.0  0.0  0.0  0.03125  0.09375  0.09375  0.03125  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0      0.0      0.0      0.0      0.0  0.0  0.0\n 0.0  0.0  0.0  0.0      0.0      0.0      0.0      0.0  0.0  0.0\n 0.0  0.0  0.0  0.0      0.0      0.0      0.0      0.0  0.0  0.0prolong approximately preserves the sum of the input array."
},

{
    "location": "autodocs/#RestrictProlong.prolong",
    "page": "Docstrings",
    "title": "RestrictProlong.prolong",
    "category": "function",
    "text": "Ap = prolong(A, [sz::Tuple])\n\nPerform two-fold expansion in size. If sz is omitted, all dimensions are expanded. If sz is specified, it can be one of the following:\n\nsz[d] = size(A, d): no expansion is performed\nsz[d] = 2*size(A, d) - 1: expansion to an odd-size, adding (by interpolation) points on the half-grid between all points along dimension d\nsz[d] = 2*size(A, d): expansion to an even-size, estimating the points on the 1/4 and 3/4 grid (including one point beyond either edge of the current span)\n\nAny other choice results in an error. The default choice is to perform odd-expansion. prolong is normalized so as to approximately preserve the sum of A.\n\nThought of as an operator, prolong is equal to the transpose of restrict.\n\n\n\n\n\nprolong(A, sz::Integer, dim::Integer)\n\nPerform expansion to size sz along dimension dim. sz must be one of the valid choices for prolongation size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RestrictProlong.restrict",
    "page": "Docstrings",
    "title": "RestrictProlong.restrict",
    "category": "function",
    "text": "Ar = restrict(A[, dims])\n\nPerform two-fold reduction in size along the dimensions listed in dims, or all coordinates if dims is omitted.  It anti-aliases A, so is more accurate than a naive summation over 2×2×... blocks. restrict is normalized so as to approximately preserve the mean value of A.\n\nThought of as an operator, restrict is equal to the transpose of prolong.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RestrictProlong.DimsLikeRestrictProlong.RestrictProlongRestrictProlong._prolongRestrictProlong._prolong!RestrictProlong._restrictRestrictProlong._restrict!RestrictProlong._sizeRestrictProlong.checkdimsRestrictProlong.evalRestrictProlong.includeRestrictProlong.prolongRestrictProlong.restrictRestrictProlong.restrict!RestrictProlong.restrict_size"
},

]}
