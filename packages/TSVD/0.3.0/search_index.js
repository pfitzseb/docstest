var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TSVD-Truncated-Singular-Value-Decomposition-1",
    "page": "Readme",
    "title": "TSVD - Truncated Singular Value Decomposition",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: ) (Image: )A Julia implementation of the procedure described inR. M. Larsen, Lanczos bidiagonalization with partial reorthogonalization, Department of Computer Science, Aarhus University, Technical report, DAIMI PB-357, September 1998."
},

{
    "location": "autodocs/#TSVD.tsvd",
    "page": "Docstrings",
    "title": "TSVD.tsvd",
    "category": "function",
    "text": "tsvd(A, nvals = 1; [maxiter, initvec, tolconv, tolreorth, debug])\n\nComputes the truncated singular value decomposition (TSVD) by Lanczos bidiagonalization of the operator A. The Lanczos vectors are partially orthogonalized as described in\n\nR. M. Larsen, Lanczos bidiagonalization with partial reorthogonalization, Department of Computer Science, Aarhus University, Technical report, DAIMI PB-357, September 1998.\n\nPositional arguments:\n\nA: Anything that supports the in place update operations\n\nmul!(y::AbstractVector, A, x::AbstractVector, α::Number, β::Number)\n\nand\n\nmul!(y::AbstractVector, A::Adjoint, x::AbstractVector, α::Number, β::Number)\n\ncorresponding to the operations y := α*op(A)*x + β*y where op can be either the identity or the conjugate transpose of A. If the initvec argument is not supplied then it is furthermore required that A supports eltype and size.\n\nnvals: The number of singular values and vectors to compute. Default is one (the largest).\n\nKeyword arguments:\n\nmaxiter: The maximum number of iterations of the Lanczos bidiagonalization. Default is 1000, but usually much fewer iterations are needed.\ninitvec: Initial U vector for the Lanczos procesdure. Default is a vector of Gaussian random variates. The length and eltype of the initvec will control the size and element types of the basis vectors in U and V.\ntolconv: Relative convergence criterion for the singular values. Default is sqrt(eps(real(eltype(A)))).\ntolreorth: Absolute tolerance for the inner product of the Lanczos vectors as measured by the ω recurrence. Default is sqrt(eps(real(eltype(initvec)))). 0.0 and Inf correspond to complete and no reorthogonalization respectively.\ndebug: Boolean flag for printing debug information\n\nOutput:\n\nThe output of the procesure it the truple tuple (U, s, V)\n\nU: size(A, 1) times nvals matrix of left singular vectors.\ns: Vector of length nvals of the singular values of A.\nV: size(A, 2) times nvals matrix of right singular vectors.\n\nExamples\n\njulia> A = matrixdepot(\"Rucci/Rucci1\", :r)\n1977885×109900 SparseMatrixCSC{Float64,Int64} with 7791168 stored entries:\n  [1      ,       1]  =  0.167285\n  [2      ,       1]  =  0.111776\n  [3      ,       1]  =  0.0746865\n  [208    ,       1]  =  0.0703943\n  [209    ,       1]  =  0.0300765\n  [210    ,       1]  =  0.0128504\n  [415    ,       1]  =  0.00777096\n  ⋮\n  [1977263,  109900]  =  0.0618182\n  [1977264,  109900]  =  0.151233\n  [1977675,  109900]  =  0.0869268\n  [1977677,  109900]  =  0.139329\n  [1977678,  109900]  =  0.223321\n  [1977882,  109900]  =  0.224977\n  [1977884,  109900]  =  0.268216\n  [1977885,  109900]  =  0.319764\n\njulia> U, s, V = tsvd(A, 5);\n\njulia> s\n5-element Array{Float64,1}:\n 7.06874\n 6.98525\n 6.96246\n 6.88948\n 6.86255\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TSVD.AtATSVD.TSVDTSVD._teigTSVD._tsvdTSVD.biLanczosIterationsTSVD.evalTSVD.includeTSVD.lanczosIterationsTSVD.qr!TSVD.teigTSVD.tsvdTSVD.tsvd2"
},

]}
