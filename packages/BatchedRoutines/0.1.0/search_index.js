var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BatchedRoutines-1",
    "page": "Readme",
    "title": "BatchedRoutines",
    "category": "section",
    "text": "(Image: Build Status) (Image: Codecov) (Image: Coveralls)Batched routines (BLAS, LAPACK, etc.) for multi-dimensional arrays. This package provide both CPU and GPU support."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add BatchedRoutines"
},

{
    "location": "#Supported-Routines-1",
    "page": "Readme",
    "title": "Supported Routines",
    "category": "section",
    "text": ""
},

{
    "location": "#BLAS-Level-1-1",
    "page": "Readme",
    "title": "BLAS Level 1",
    "category": "section",
    "text": "[x] batched_scal\n[ ] batched_dot\n[ ] batched_nrm2\n[ ] batched_asum\n[ ] batched_axpy!\n[ ] batched_axpby\n[ ] batched_iamax"
},

{
    "location": "#BLAS-Level-2-1",
    "page": "Readme",
    "title": "BLAS Level 2",
    "category": "section",
    "text": "[ ] batched_gemv\n[ ] batched_gbmv\n[ ] batched_symv\n[ ] batched_hemv\n[ ] batched_sbmv\n[ ] batched_hbmv\n[ ] batched_trmv\n[ ] batched_trsv\n[ ] batched_ger\n[ ] batched_syr\n[ ] batched_her"
},

{
    "location": "#BLAS-Level-3-1",
    "page": "Readme",
    "title": "BLAS Level 3",
    "category": "section",
    "text": "[x] batched_gemm (TODO: use gemm_batch when mkl is available)\n[ ] batched_symm\n[ ] batched_hemm\n[ ] batched_syrk\n[ ] batched_herk\n[ ] batched_syr2k\n[ ] batched_trmm\n[ ] batched_trsm\n[ ] batched_trmm"
},

{
    "location": "#Linear-Algebra-1",
    "page": "Readme",
    "title": "Linear Algebra",
    "category": "section",
    "text": "[x] batched_tr"
},

{
    "location": "#Conventions-1",
    "page": "Readme",
    "title": "Conventions",
    "category": "section",
    "text": "For routines (e.g gemm), we use a prefix batched_ for their corresponding routines in BLAS or LAPACK and they should only define with AbstractArray{T, 3} (batched matrix) or AbstractArray{T, 2} (batched vector)."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "MIT"
},

{
    "location": "autodocs/#BatchedRoutines.batched_scal",
    "page": "Docstrings",
    "title": "BatchedRoutines.batched_scal",
    "category": "function",
    "text": "batched_scal(s, X)\n\nReturn X scaled by a for all the batch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BatchedRoutines.batched_scal!",
    "page": "Docstrings",
    "title": "BatchedRoutines.batched_scal!",
    "category": "function",
    "text": "batched_scal!(s, X)\n\nOverwrite X[:, :, i] with a[i] * X[:, :, i], where i is the batch dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BatchedRoutines.@__PKGNAME__BatchedRoutines.BatchedRoutinesBatchedRoutines.USE_CUDABatchedRoutines.batched_gemmBatchedRoutines.batched_gemm!BatchedRoutines.batched_scalBatchedRoutines.batched_scal!BatchedRoutines.batched_trBatchedRoutines.batched_tr!BatchedRoutines.evalBatchedRoutines.extBatchedRoutines.include"
},

]}
