var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#A-[Julia](http://julialang.org)-Linear-Operator-Package-1",
    "page": "Readme",
    "title": "A Julia Linear Operator Package",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coveralls) (Image: codecov.io) (Image: docs)Operators behave like matrices (with some exceptions - see below) but are defined by their effect when applied to a vector. They can be transposed, conjugated, or combined with other operators cheaply. The costly operation is deferred until multiplied with a vector."
},

{
    "location": "#Compatibility-1",
    "page": "Readme",
    "title": "Compatibility",
    "category": "section",
    "text": "Julia 0.6 and up."
},

{
    "location": "#How-to-Install-1",
    "page": "Readme",
    "title": "How to Install",
    "category": "section",
    "text": "Pkg.add(\"LinearOperators\")"
},

{
    "location": "#How-to-use-1",
    "page": "Readme",
    "title": "How to use",
    "category": "section",
    "text": "Check the tutorial."
},

{
    "location": "#Operators-Available-1",
    "page": "Readme",
    "title": "Operators Available",
    "category": "section",
    "text": "Operator Description\nLinearOperator Base class. Useful to define operators from functions\nopEye Identity operator\nopOnes All ones operator\nopZeros All zeros operator\nopDiagonal Square (equivalent to diagm()) or rectangular diagonal operator\nopInverse Equivalent to \\\nopCholesky More efficient than opInverse for symmetric positive definite matrices\nopHouseholder Apply a Householder transformation I-2hh\'\nopHermitian Represent a symmetric/hermitian operator based on the diagonal and strict lower triangle\nopRestriction Represent a selection of \"rows\" when composed on the left with an existing operator\nopExtension Represent a selection of \"columns\" when composed on the right with an existing operator\nLBFGSOperator Limited-memory BFGS approximation in operator form (damped or not)\nInverseLBFGSOperator Inverse of a limited-memory BFGS approximation in operator form (damped or not)\nLSR1Operator Limited-memory SR1 approximation in operator form"
},

{
    "location": "#Utility-Functions-1",
    "page": "Readme",
    "title": "Utility Functions",
    "category": "section",
    "text": "Function Description\ncheck_ctranspose Cheap check that A\' is correctly implemented\ncheck_hermitian Cheap check that A = A\'\ncheck_positive_definite Cheap check that an operator is positive (semi-)definite\ndiag Extract the diagonal of an operator\nfull Convert an abstract operator to a dense array\nhermitian Determine whether the operator is Hermitian\npush! For L-BFGS or L-SR1 operators, push a new pair {s,y}\nreset! For L-BFGS or L-SR1 operators, reset the data\nshape Return the size of a linear operator\nshow Display basic information about an operator\nsize Return the size of a linear operator\nsymmetric Determine whether the operator is symmetric"
},

{
    "location": "#Other-Operations-on-Operators-1",
    "page": "Readme",
    "title": "Other Operations on Operators",
    "category": "section",
    "text": "Operators can be transposed (transpose(A)), conjugated (conj(A)) and conjugate-transposed (A\'). Operators can be sliced (A[:,3], A[2:4,1:5], A[1,1]), but unlike matrices, slices always return operators (see differences below)."
},

{
    "location": "#Differences-1",
    "page": "Readme",
    "title": "Differences",
    "category": "section",
    "text": "Unlike matrices, an operator never reduces to a vector or a number.A = rand(5,5)\nopA = LinearOperator(A)\nA[:,1] * 3 # Vector\nopA[:,1] * 3 # LinearOperator\nA[:,1] * [3] # ERROR\nopA[:,1] * [3] # VectorThis is also true for A[i,J], which returns vectors on 0.5, and for the scalar A[i,j]. Similarly, opA[1,1] is an operator of size (1,1):\"opA[1,1] # LinearOperator\nA[1,1] # NumberIn the same spirit, the operator full always returns a matrix.full(opA[:,1]) # nx1 matrix"
},

{
    "location": "#Other-Operators-1",
    "page": "Readme",
    "title": "Other Operators",
    "category": "section",
    "text": "LLDL features a limited-memory LDL<sup>T</sup> factorization operator that may be used as preconditioner in iterative methods\nMUMPS.jl features a full distributed-memory factorization operator that may be used to represent the preconditioner in, e.g., constraint-preconditioned Krylov methods."
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "julia> Pkg.test(\"LinearOperators\")(Image: GPLv3)"
},

{
    "location": "autodocs/#LinearOperators.InverseLBFGSOperator",
    "page": "Docstrings",
    "title": "LinearOperators.InverseLBFGSOperator",
    "category": "function",
    "text": "InverseLBFGSOperator(T, n, [mem=5; scaling=true])\nInverseLBFGSOperator(n, [mem=5; scaling=true])\n\nConstruct a limited-memory BFGS approximation in inverse form. If the type T is omitted, then Float64 is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.LBFGSData",
    "page": "Docstrings",
    "title": "LinearOperators.LBFGSData",
    "category": "type",
    "text": "A data type to hold information relative to LBFGS operators.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.LBFGSOperator",
    "page": "Docstrings",
    "title": "LinearOperators.LBFGSOperator",
    "category": "type",
    "text": "A type for limited-memory BFGS approximations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.LSR1Data",
    "page": "Docstrings",
    "title": "LinearOperators.LSR1Data",
    "category": "type",
    "text": "A data type to hold information relative to LSR1 operators.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.LSR1Operator",
    "page": "Docstrings",
    "title": "LinearOperators.LSR1Operator",
    "category": "type",
    "text": "A type for limited-memory SR1 approximations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.LinearOperator",
    "page": "Docstrings",
    "title": "LinearOperators.LinearOperator",
    "category": "type",
    "text": "Base type to represent a linear operator. The usual arithmetic operations may be applied to operators to combine or otherwise alter them. They can be combined with other operators, with matrices and with scalars. Operators may be transposed and conjugate-transposed using the usual Julia syntax.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.PreallocatedLinearOperator",
    "page": "Docstrings",
    "title": "LinearOperators.PreallocatedLinearOperator",
    "category": "type",
    "text": "Type to represent a linear operator with preallocation. Implicit modifications may happen if used without care:\n\nop = PreallocatedLinearOperator(rand(5, 5))\nv  = rand(5)\nx = op * v        # Uses internal storage and passes pointer to x\ny = op * ones(5)  # Overwrites the same memory as x.\ny === x           # true. op * v is lost\n\nx = op * v        # Uses internal storage and passes pointer to x\ny = op * x        # Silently overwrite x to zeros! Equivalent to mul!(x, A, x).\ny == zeros(5)     # true. op * v and op * x are lost\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.check_ctranspose",
    "page": "Docstrings",
    "title": "LinearOperators.check_ctranspose",
    "category": "function",
    "text": "check_ctranspose(op)\n\nCheap check that the operator and its conjugate transposed are related.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.check_hermitian",
    "page": "Docstrings",
    "title": "LinearOperators.check_hermitian",
    "category": "function",
    "text": "check_hermitian(op)\n\nCheap check that the operator is Hermitian.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.check_positive_definite",
    "page": "Docstrings",
    "title": "LinearOperators.check_positive_definite",
    "category": "function",
    "text": "check_positive_definite(op; semi=false)\n\nCheap check that the operator is positive (semi-)definite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.diag",
    "page": "Docstrings",
    "title": "LinearAlgebra.diag",
    "category": "function",
    "text": "diag(op)\n\nExtract the diagonal of a L-BFGS operator in forward mode.\n\n\n\n\n\ndiag(op)\n\nExtract the diagonal of a L-SR1 operator in forward mode.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.hermitian",
    "page": "Docstrings",
    "title": "LinearOperators.hermitian",
    "category": "function",
    "text": "hermitian(op)\nishermitian(op)\n\nDetermine whether the operator is Hermitian.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opCholesky",
    "page": "Docstrings",
    "title": "LinearOperators.opCholesky",
    "category": "function",
    "text": "opCholesky(M, [check=false])\n\nInverse of a Hermitian and positive definite matrix as a linear operator using its Cholesky factorization. The factorization is computed only once. The optional check argument will perform cheap hermicity and definiteness checks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opDiagonal",
    "page": "Docstrings",
    "title": "LinearOperators.opDiagonal",
    "category": "function",
    "text": "opDiagonal(d)\n\nDiagonal operator with the vector d on its main diagonal.\n\n\n\n\n\nopDiagonal(nrow, ncol, d)\n\nRectangular diagonal operator of size nrow-by-ncol with the vector d on its main diagonal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opExtension",
    "page": "Docstrings",
    "title": "LinearOperators.opExtension",
    "category": "function",
    "text": "Z = opExtension(I, ncol)\nZ = opExtension(:, ncol)\n\nCreates a LinearOperator extending a vector of size length(I) to size ncol, where the position of the elements on the new vector are given by the indices I. The operation w = Z * v is equivalent to w = zeros(ncol); w[I] = v.\n\nZ = opExtension(k, ncol)\n\nAlias for opExtension([k], ncol).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opEye",
    "page": "Docstrings",
    "title": "LinearOperators.opEye",
    "category": "type",
    "text": "opEye()\n\nIdentity operator.\n\nopI = opEye()\nv = rand(5)\n@assert opI * v === v\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opHermitian",
    "page": "Docstrings",
    "title": "LinearOperators.opHermitian",
    "category": "function",
    "text": "opHermitian(d, A)\n\nA symmetric/hermitian operator based on the diagonal d and lower triangle of A.\n\n\n\n\n\nopHermitian(A)\n\nA symmetric/hermitian operator based on a matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opHouseholder",
    "page": "Docstrings",
    "title": "LinearOperators.opHouseholder",
    "category": "function",
    "text": "opHouseholder(h)\n\nApply a Householder transformation defined by the vector h. The result is x -> (I - 2 h h\') x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opInverse",
    "page": "Docstrings",
    "title": "LinearOperators.opInverse",
    "category": "function",
    "text": "opInverse(M; symmetric=false, hermitian=false)\n\nInverse of a matrix as a linear operator using \\. Useful for triangular matrices. Note that each application of this operator applies \\.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opLDL",
    "page": "Docstrings",
    "title": "LinearOperators.opLDL",
    "category": "function",
    "text": "opLDL(M, [check=false])\n\nInverse of a symmetric matrix as a linear operator using its LDL\' factorization if it exists. The factorization is computed only once. The optional check argument will perform a cheap hermicity check.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opOnes",
    "page": "Docstrings",
    "title": "LinearOperators.opOnes",
    "category": "function",
    "text": "opOnes(T, nrow, ncol)\nopOnes(nrow, ncol)\n\nOperator of all ones of size nrow-by-ncol and of data type T (defaults to Float64).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opRestriction",
    "page": "Docstrings",
    "title": "LinearOperators.opRestriction",
    "category": "function",
    "text": "Z = opRestriction(I, ncol)\nZ = opRestriction(:, ncol)\n\nCreates a LinearOperator restricting a ncol-sized vector to indices I. The operation Z * v is equivalent to v[I]. I can be :.\n\nZ = opRestriction(k, ncol)\n\nAlias for opRestriction([k], ncol).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.opZeros",
    "page": "Docstrings",
    "title": "LinearOperators.opZeros",
    "category": "function",
    "text": "opZeros(T, nrow, ncol)\nopZeros(nrow, ncol)\n\nZero operator of size nrow-by-ncol and of data type T (defaults to Float64).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.reset!",
    "page": "Docstrings",
    "title": "LinearOperators.reset!",
    "category": "function",
    "text": "reset!(data)\n\nResets the given LBFGS data.\n\n\n\n\n\nreset!(op)\n\nResets the LBFGS data of the given operator.\n\n\n\n\n\nreset!(data)\n\nReset the given LSR1 data.\n\n\n\n\n\nreset!(op)\n\nResets the LSR1 data of the given operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.shape",
    "page": "Docstrings",
    "title": "LinearOperators.shape",
    "category": "function",
    "text": "m, n = shape(op)\n\nAn alias for size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.symmetric",
    "page": "Docstrings",
    "title": "LinearOperators.symmetric",
    "category": "function",
    "text": "symmetric(op)\nissymmetric(op)\n\nDetermine whether the operator is symmetric.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LinearOperators.AbstractLinearOperatorLinearOperators.AbstractPreallocatedLinearOperatorLinearOperators.FuncOrNothingLinearOperators.InverseLBFGSOperatorLinearOperators.LBFGSDataLinearOperators.LBFGSOperatorLinearOperators.LSR1DataLinearOperators.LSR1OperatorLinearOperators.LinearOperatorLinearOperators.LinearOperatorExceptionLinearOperators.LinearOperatorIndexTypeLinearOperators.LinearOperatorsLinearOperators.OperatorOrMatrixLinearOperators.PreallocatedLinearOperatorLinearOperators.check_ctransposeLinearOperators.check_hermitianLinearOperators.check_positive_definiteLinearOperators.diagLinearOperators.evalLinearOperators.hermitianLinearOperators.includeLinearOperators.ishermitianLinearOperators.issymmetricLinearOperators.mul!LinearOperators.opCholeskyLinearOperators.opDiagonalLinearOperators.opExtensionLinearOperators.opEyeLinearOperators.opHermitianLinearOperators.opHouseholderLinearOperators.opInverseLinearOperators.opLDLLinearOperators.opOnesLinearOperators.opRestrictionLinearOperators.opZerosLinearOperators.reset!LinearOperators.shapeLinearOperators.symmetric"
},

]}
