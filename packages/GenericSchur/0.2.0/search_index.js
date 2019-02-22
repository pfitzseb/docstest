var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GenericSchur-1",
    "page": "Readme",
    "title": "GenericSchur",
    "category": "section",
    "text": "<!– (Image: Lifecycle) –> (Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Schur-decomposition-for-matrices-of-generic-element-types-in-Julia-1",
    "page": "Readme",
    "title": "Schur decomposition for matrices of generic element types in Julia",
    "category": "section",
    "text": "This package provides a full Schur decomposition of complex square matrices:A::StridedMatrix{C} where {C <: Complex} == Z * T * adjoint(Z)where T is upper-triangular and Z is unitary, both with the same element type as A.The principal application is to generic number types such as Complex{BigFloat}. For these, the schur! and eigvals! functions in the LinearAlgebra standard library are overloaded, and may be accessed through the usual schur and eigvals wrappers:A = your_matrix_generator() + 0im # in case you start with a real matrix\nS = schur(A)The result S is a LinearAlgebra.Schur object, with the properties T, Z=vectors, and values.The unexported gschur and gschur! functions are available for types normally handled by the LAPACK wrappers in LinearAlgebra.The algorithm is essentially the unblocked, serial, single-shift Francis (QR) scheme used in the complex LAPACK routines. Scaling is enabled for balancing, but not permutation (which would reduce the work)."
},

{
    "location": "#Eigenvectors-1",
    "page": "Readme",
    "title": "Eigenvectors",
    "category": "section",
    "text": "Right and left eigenvectors are available from complex Schur factorizations, usingS = schur(A)\nVR = eigvecs(S)\nVL = eigvecs(S,left=true)The results are currently unreliable if the Frobenius norm of A is very small or very large, so scale if necessary."
},

{
    "location": "#Real-decompositions-1",
    "page": "Readme",
    "title": "Real decompositions",
    "category": "section",
    "text": "A quasi-triangular \"real Schur\" decomposition of real matrices is also provided:A::StridedMatrix{R} where {R <: Real} == Z * T * transpose(Z)where T is quasi-upper-triangular and Z is orthogonal, both with the same element type as A.  This is what you get by invoking the above-mentioned functions with matrix arguments whose element type T <: Real. By default, the result is in standard form, so pair-blocks (and therefore rank-2 invariant subspaces) should be fully resolved. (This differs from the original version in GenericLinearAlgebra.jl.)If the optional keyword standardized is set to false in gschur, a non-standard (but less expensive) form is produced.Eigenvectors are not currently available for the \"real Schur\" forms. But don\'t despair; one can convert a standard quasi-triangular real Schur into a complex Schur with the triangularize function provided here."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "This package incorporates or elaborates several methods from Andreas Noack\'s GenericLinearAlgebra.jl package, and includes translations from LAPACK code."
},

{
    "location": "autodocs/#GenericSchur._trexchange!",
    "page": "Docstrings",
    "title": "GenericSchur._trexchange!",
    "category": "function",
    "text": "reorder T by a unitary similarity transformation so that T[iold,iold] is moved to T[inew,inew]. Also right-multiply Z by the same transformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.adjtrsylvester!",
    "page": "Docstrings",
    "title": "GenericSchur.adjtrsylvester!",
    "category": "function",
    "text": "adjtrsylvesterh!(A,B,C) => X, σ\n\nsolve the Sylvester equation Aᴴ X - X Bᴴ = σ C, for upper triangular A and B, overwriting C and setting σ to avoid overflow.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.eigvalscond",
    "page": "Docstrings",
    "title": "GenericSchur.eigvalscond",
    "category": "function",
    "text": "eigvalscond(S::Schur,nsub::Integer)\n\nEstimate the reciprocal of the condition number of the nsub leading eigenvalues of S. (Use ordschur to move a subspace of interest to the front of S.)\n\nSee the LAPACK User\'s Guide for details of interpretation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.gschur",
    "page": "Docstrings",
    "title": "GenericSchur.gschur",
    "category": "function",
    "text": "gschur(A::StridedMatrix) -> F::Schur\n\nComputes the Schur factorization of matrix A using a generic implementation. See LinearAlgebra.schur for usage.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.gschur!",
    "page": "Docstrings",
    "title": "GenericSchur.gschur!",
    "category": "function",
    "text": "gschur!(A::StridedMatrix) -> F::Schur\n\nDestructive version of gschur (q.v.).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.norm1est!",
    "page": "Docstrings",
    "title": "GenericSchur.norm1est!",
    "category": "function",
    "text": "norm1est!(applyA!,applyAH!,y::Vector) => γ\n\nEstimate the 1-norm of a linear operator A expressed as functions which apply A and adjoint(A) to a vector such as y.\n\ncf. N.J. Higham, SIAM J. Sci. Stat. Comp. 11, 804 (1990)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.safemin",
    "page": "Docstrings",
    "title": "GenericSchur.safemin",
    "category": "function",
    "text": "a \"safe\" version of floatmin, such that 1/sfmin does not overflow.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.safescale!",
    "page": "Docstrings",
    "title": "GenericSchur.safescale!",
    "category": "function",
    "text": "multiply an array A by a real number cto/cfrom expressed as a ratio, computing without over/underflow where possible.\n\ncfrom must not be zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.subspacesep",
    "page": "Docstrings",
    "title": "GenericSchur.subspacesep",
    "category": "function",
    "text": "subspacesep(S::Schur,nsub::Integer)\n\nEstimate the reciprocal condition of the separation angle for the invariant subspace corresponding to the leading block of size nsub of a Schur decomposition. (Use ordschur to move a subspace of interest to the front of S.)\n\nSee the LAPACK User\'s Guide for details of interpretation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.triangularize",
    "page": "Docstrings",
    "title": "GenericSchur.triangularize",
    "category": "function",
    "text": "triangularize(S::Schur{T}) => Schur{complex{T})\n\nconvert a (standard-form) quasi-triangular real Schur factorization into a triangular complex Schur factorization.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSchur.trsylvester!",
    "page": "Docstrings",
    "title": "GenericSchur.trsylvester!",
    "category": "function",
    "text": "trsylvester!(A,B,C) => X, σ\n\nsolve the Sylvester equation A X - X B = σ C for upper triangular and square A and B, overwriting C and setting σ to avoid overflow.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GenericSchur.GenericSchurGenericSchur.HessenbergFactorizationGenericSchur.HessenbergMatrixGenericSchur.HouseholderGenericSchur.HouseholderBlockGenericSchur._STANDARDIZE_DEFAULTGenericSchur._cusolve!GenericSchur._findamaxGenericSchur._geigvals!GenericSchur._geigvecs!GenericSchur._gleigvecs!GenericSchur._gs2x2!GenericSchur._gschur!GenericSchur._hessenberg!GenericSchur._scale!GenericSchur._trexchange!GenericSchur._usolve!GenericSchur._usolve0!GenericSchur.abs1GenericSchur.adjtrsylvester!GenericSchur.convertGenericSchur.doubleShiftQR!GenericSchur.eigvalscondGenericSchur.evalGenericSchur.gschurGenericSchur.gschur!GenericSchur.includeGenericSchur.norm1est!GenericSchur.rankUpdate!GenericSchur.safeminGenericSchur.safescale!GenericSchur.singleShiftQR!GenericSchur.subspacesepGenericSchur.triangularizeGenericSchur.trsylvester!"
},

]}
