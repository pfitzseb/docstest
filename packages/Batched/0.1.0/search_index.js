var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Batched.jl-1",
    "page": "Readme",
    "title": "Batched.jl",
    "category": "section",
    "text": "(Image: Build Status)Batched operations in Julia."
},

{
    "location": "#Batched-Arrays-1",
    "page": "Readme",
    "title": "Batched Arrays",
    "category": "section",
    "text": "BatchedArray{T, NI, N} a general container that assumes the last N - NI dimensions are batch dimension\nBatchedMatrix, BatchedVector\nBatchedTranspose, BatchedAdjoint, BatchedUniformScaling batched version of them in stdlib: LinearAlgebra\nfor cuda, defined type alias CuBatchedArray, CuBatchedMatrix, CuBatchedVector"
},

{
    "location": "#Supported-routines-1",
    "page": "Readme",
    "title": "Supported routines",
    "category": "section",
    "text": "(CPU): CPU implementations are just wrappers of for-loops.[x] batched gemm: batched_gemm\n[x] batched tr: batched_tr\n[x] batched transpose: transpose(::AbstractArray{T, 3})\n[x] batched adjoint(GPU): GPU implementations will use CUBLAS routines.[x] batched gemm: batched_gemm_strided (our BatchedArray can be assumed as strided)\n[ ] batched tr\n[x] batched transpose (same as CPU)\n[x] batched adjoint (same as CPU)"
},

{
    "location": "#Conventions-1",
    "page": "Readme",
    "title": "Conventions",
    "category": "section",
    "text": "For routines (e.g gemm), we use a prefix batched_ for their corresponding routines in BLAS or LAPACK and they should only define with AbstractArray{T, 3} (batched matrix) or AbstractArray{T, 2} (batched vector).For methods (e.g LinearAlgebra.tr), we simply overload them with a batched array type (e.g BatchedArray)."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Apache License Version 2.0"
},

{
    "location": "autodocs/#Batched.AbstractBatchedArray",
    "page": "Docstrings",
    "title": "Batched.AbstractBatchedArray",
    "category": "type",
    "text": "AbstractBatchedArray{T, NI, N}\n\nAbstract type batched array. A batched array use its last N - NI dimension as batch dimension, it is a batch of array with dimension NI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.AbstractBatchedMatrix",
    "page": "Docstrings",
    "title": "Batched.AbstractBatchedMatrix",
    "category": "type",
    "text": "AbstractBatchedMatrix{T, N}\n\nBatched matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.AbstractBatchedScalar",
    "page": "Docstrings",
    "title": "Batched.AbstractBatchedScalar",
    "category": "type",
    "text": "AbstractBatchedScalar{T, N}\n\nBatched scalars.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.AbstractBatchedVector",
    "page": "Docstrings",
    "title": "Batched.AbstractBatchedVector",
    "category": "type",
    "text": "AbstractBatchedVector{T, N}\n\nBatched vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.BatchedAdjoint",
    "page": "Docstrings",
    "title": "Batched.BatchedAdjoint",
    "category": "type",
    "text": "BatchedAdjoint{T, N, S <: AbstractBatchedMatrix} <: AbstractBatchedMatrix{T, N}\n\nBatched ajoint. Transpose a batch of matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.BatchedArray",
    "page": "Docstrings",
    "title": "Batched.BatchedArray",
    "category": "type",
    "text": "BatchedArray{T, NI, N, AT} <: AbstractBatchedArray{T, NI, N}\n\nA concrete type for batched arrays. T is the element type, NI is the inner sample\'s dimension, N is the total dimension and AT is the array type that actually holds the value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.BatchedTranspose",
    "page": "Docstrings",
    "title": "Batched.BatchedTranspose",
    "category": "type",
    "text": "BatchedTranspose{T, N, S} <: AbstractBatchedMatrix{T, N}\n\nBatched transpose. Transpose a batch of matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.BatchedUniformScaling",
    "page": "Docstrings",
    "title": "Batched.BatchedUniformScaling",
    "category": "type",
    "text": "BatchedUniformScaling{T, N, ST <: AbstractArray{T, N}} <: AbstractBatchedArray{T, 0, N}\n\nScale a batch of arrays with a batch of scalars.\n\nBatchedUniformScaling(scalars)\n\nThe shape of batch can be multidimentional, which means member BatchedScale.scalars can be a matrix or high dimentional array, the shape of this member is the shape of batch. dims defines the dimmension of each sample in the batch. It can be multidimentional as well.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.batch_size",
    "page": "Docstrings",
    "title": "Batched.batch_size",
    "category": "function",
    "text": "batch_size(batched_array) -> Tuple\n\nReturns a tuple of size of each batch dimension of the batched array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.batched_gemm",
    "page": "Docstrings",
    "title": "Batched.batched_gemm",
    "category": "function",
    "text": "batched_gemm(A, B)\nbatched_gemm(tA, tB, A, B)\nbatched_gemm(tA, tB, alpha, A, B)\n\nBatched version of BLAS.gemm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.batched_gemm!",
    "page": "Docstrings",
    "title": "Batched.batched_gemm!",
    "category": "function",
    "text": "batched_gemm!(transA, transB, alpha, A, B, beta, C)\n\nBatched version of BLAS.gemm!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.batched_tr!",
    "page": "Docstrings",
    "title": "Batched.batched_tr!",
    "category": "function",
    "text": "batched_tr!(B::AbstractVector{T}, A::AbstractArray{T, 3})\n\nPerform batched matrix trace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.inner_size",
    "page": "Docstrings",
    "title": "Batched.inner_size",
    "category": "function",
    "text": "inner_size(batched_array) -> Tuple\n\nReturns a tuple of size of each inner dimension of the batched array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Batched.merged_size",
    "page": "Docstrings",
    "title": "Batched.merged_size",
    "category": "function",
    "text": "merged_size(batched_array) -> Tuple\n\nReturns the size of this batched array after merging all its batched dimension together.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Batched.AbstractBatchedArrayBatched.AbstractBatchedMatrixBatched.AbstractBatchedScalarBatched.AbstractBatchedVectorBatched.BatchedBatched.BatchedAdjointBatched.BatchedArrayBatched.BatchedMatrixBatched.BatchedTransposeBatched.BatchedTransposeOrAdjointBatched.BatchedUniformScalingBatched.BatchedVectorBatched.TransposeBatched.USE_CUDABatched._BATCHED_MATRIX_LISTBatched.batch_sizeBatched.batched_gemmBatched.batched_gemm!Batched.batched_syr!Batched.batched_tr!Batched.check_batch_dim_sizeBatched.evalBatched.extBatched.includeBatched.inner_sizeBatched.merge_batch_dimBatched.merged_size"
},

]}
