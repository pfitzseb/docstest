var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WoodburyMatrices-1",
    "page": "Readme",
    "title": "WoodburyMatrices",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This package provides support for the Woodbury matrix identity for the Julia programming language.  This is a generalization of the Sherman-Morrison formula. Note that the Woodbury matrix identity is notorious for floating-point roundoff errors, so be prepared for a certain amount of inaccuracy in the result."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Woodbury-Matrices-1",
    "page": "Readme",
    "title": "Woodbury Matrices",
    "category": "section",
    "text": "using WoodburyMatrices\nW = Woodbury(A, U, C, V)creates a Woodbury matrix from the A, U, C, and V matrices representing A + U*C*V. These matrices can be dense or sparse (or generally any type of AbstractMatrix), with the caveat that inv(inv(C) + V*(A\\U)) will be calculated explicitly and hence needs to be representable with the available resources. (In many applications, this is a fairly small matrix.)There are only a few things you can do with a Woodbury matrix:full(W) converts to its dense representation.\nW\\b solves the equation W*x = b for x.\ndet(W) computes the determinant of W.It\'s worth emphasizing that A can be supplied as a factorization, which makes W\\b and det(W) more efficient."
},

{
    "location": "#SymWoodbury-Matrices-1",
    "page": "Readme",
    "title": "SymWoodbury Matrices",
    "category": "section",
    "text": "using WoodburyMatrices\nW = SymWoodbury(A, B, D)creates a SymWoodbury matrix, a symmetric version of a Woodbury matrix representing A + B*D*B\'. In addition to the features above, SymWoodbury also supports various operations which are closed under this type. They areAddition W1 + W2.\nSquaring W*W.\nInversion inv(W).\nMultiplication by a scalar 2*W.A slightly more stable, though computationally more costly version of inversion is given by liftFactor. liftFactor(W)(x) can be seen as a stabler version of inv(W)*x."
},

{
    "location": "autodocs/#WoodburyMatrices.SymWoodbury",
    "page": "Docstrings",
    "title": "WoodburyMatrices.SymWoodbury",
    "category": "type",
    "text": "Represents a matrix of the form A + BDBᵀ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WoodburyMatrices.Woodbury",
    "page": "Docstrings",
    "title": "WoodburyMatrices.Woodbury",
    "category": "type",
    "text": "W = Woodbury(A, U, C, V) creates a matrix W identical to A + U*C*V whose inverse will be calculated using the Woodbury matrix identity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WoodburyMatrices.liftFactor",
    "page": "Docstrings",
    "title": "WoodburyMatrices.liftFactor",
    "category": "function",
    "text": "liftFactor(A)\n\nMore stable version of inv(A).  Returns a function which computs the inverse on evaluation, i.e. liftFactor(A)(x) is the same as inv(A)*x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WoodburyMatrices.partialInv",
    "page": "Docstrings",
    "title": "WoodburyMatrices.partialInv",
    "category": "function",
    "text": "partialInv(O)\n\nGet the factors (X,Z) in W + XZXᵀ where W + XZXᵀ = inv( A + BDBᵀ )\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WoodburyMatrices.sparse_factors",
    "page": "Docstrings",
    "title": "WoodburyMatrices.sparse_factors",
    "category": "function",
    "text": "Given a type T, an integer n and m tuples of the form (i, j, v), build sparse matrices rows, vals, cols such that the product out = rows * vals * cols is equivalent to:\n\nout = zeros(T, n, n)\n\nfor (i, j, v) in args\n    out[i, j] = v\nend\n\nThe first two components (i and j) of each tuple should be integers whereas the third component should be of type T\n\nExample:\n\njulia> r, v, c = WoodburyMatrices.sparse_factors(Float64, 3,\n                                                 (1, 1, 2.0),\n                                                 (2, 2, 3.0),\n                                                 (3, 3, 4.0));\n\njulia> r*c*v - Diagonal([2.0, 3.0, 4.0])\n3x3 sparse matrix with 0 Float64 entries:\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WoodburyMatrices.SymWoodburyWoodburyMatrices.WoodburyWoodburyMatrices.WoodburyMatricesWoodburyMatrices.calc_invWoodburyMatrices.conjmWoodburyMatrices.evalWoodburyMatrices.includeWoodburyMatrices.inv_invD_BtXWoodburyMatrices.liftFactorWoodburyMatrices.liftFactorVarsWoodburyMatrices.partialInvWoodburyMatrices.plusBDBtx!WoodburyMatrices.sparse_factorsWoodburyMatrices.square"
},

]}
