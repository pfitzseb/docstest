var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NumericalMethodsforEngineers-1",
    "page": "Readme",
    "title": "NumericalMethodsforEngineers",
    "category": "section",
    "text": "(Image: Project Status: WIP - Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.)(Image: Travis Build Status)"
},

{
    "location": "#Julia-versions-of-NumericalMethodsforEngineers-programs-1",
    "page": "Readme",
    "title": "Julia versions of NumericalMethodsforEngineers programs",
    "category": "section",
    "text": "More or less equivalent Julia versions of the Fortran programs described in \"Numerical Methods for Engineers\" by I M Smith and D V Griffiths.Currently being tested on Julia v0.7-beta.No timeline is set to complete this work."
},

{
    "location": "autodocs/#NumericalMethodsforEngineers.SkylineMatrix",
    "page": "Docstrings",
    "title": "NumericalMethodsforEngineers.SkylineMatrix",
    "category": "type",
    "text": "SkylineMatrix type for symmetric matrices\n\nType to hold skyline matrices with element types Tv\n\nsv:         Skyline vector\nkdiag:      Diagonal elements in sv.\nsm:         SkylineMatrix.\n\nConstructor\n\nsm = SkylineMatrix{Tv}(kdiag::Vector{Int}, sv::Vector{Tv})\n\n\nArguments\n\n* `kdiag`           : Vector specifying location of diagonal element in sv. \n* `sv`              : Non-zero values in upper triangular matrix.\n\nAdditional methods\n\n* `size(sm)`        : Return size of full matrix => (n, n).\n* `==(sm1, sm2)`    : Compare 2 SkylineMatrices for equality.\n* `copy(sm)`        : Create a copy.\n* `sparse(sm)`      : Convert to a SparseMatrixCSC.\n* `full(sm)`        : Convert to a full matrix.\n\n* `convert(::Type{NumericalMethodsforEngineers.SkylineMatrix}, kdiag::Vector{Int}, sv::Vector{Tv})`\n                    : Default constructor\n\n* `fromskyline(kdiag::Vector{Int}, sv::Vector{Tv})`\n                    : Convert kdiag,sv to full matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalMethodsforEngineers.fromskyline",
    "page": "Docstrings",
    "title": "NumericalMethodsforEngineers.fromskyline",
    "category": "function",
    "text": "Convert the pair kdiag, sv to a full matrix\n\nFunction\n\nm = fromskyline{Tv}(kdiag::Vector{Int}, sv::Vector{Tv})\n\nArguments\n\n* `kdiag`           : Vector specifying location of diagonal element in sv. \n* `sv`              : Non-zero values in upper triangular matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalMethodsforEngineers.shootingmethod",
    "page": "Docstrings",
    "title": "NumericalMethodsforEngineers.shootingmethod",
    "category": "function",
    "text": "Function shootingmethod() for 2nd order BVP ODEs.\n\nArguments to shootingmethod(f, bvs, initg, steps, tol, limit):\n\nf::Function           : Function to be estimated (see below).\n\nbvs::Vector{Float64}  : Vector of boundary values [xa, ya, xb, yb].\n\ninitg::Matrix{Float64}: Vector of nitial gradients [a0, a1].\n\nsteps::Int64          : Number of calculations steps.\n\ntol::Float64          : Tolerance for convergence.\n\nlimit::Int64          : Max number of iterations.\n\nExample of how to define the function f(x, y) for y\'\' = 3x^3+4y:\n\nDecompose in two first order equations:\n\ndy[1] = y[2]\n\ndy[2] = 3x^3 + 4y[1]\n\nfunction f(x::Float64, y::Vector{Float64})\n  [y[2], 3x^3 +4y[1]]\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalMethodsforEngineers.tosymmetricbandedmatrix",
    "page": "Docstrings",
    "title": "NumericalMethodsforEngineers.tosymmetricbandedmatrix",
    "category": "function",
    "text": "Convert symmetric AbstractMatrix to a SymmetricBandedMatrix\n\nFunction\n\nbm = tosymmetricbandedmatrix{Tv}(hbw::Int, am::AbstractMatrix{Tv})\nor\nbm = tosymmetricbandedmatrix{Tv}(am::AbstractMatrix{Tv})\n\nArguments\n\n* `hbw`             : Half bandwidth. \n* `am`              : Symmetric AbstractMatrix\n                      (if no hbw is specified, hbw will be derived from the matrix)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NumericalMethodsforEngineers./NumericalMethodsforEngineers.@compatNumericalMethodsforEngineers.@dotcompatNumericalMethodsforEngineers.@functorizeNumericalMethodsforEngineers.@symNumericalMethodsforEngineers.ARPACKExceptionNumericalMethodsforEngineers.AbstractSparseArrayNumericalMethodsforEngineers.AbstractSparseMatrixNumericalMethodsforEngineers.AbstractSparseVectorNumericalMethodsforEngineers.AdjointNumericalMethodsforEngineers.BLASNumericalMethodsforEngineers.BidiagonalNumericalMethodsforEngineers.BunchKaufmanNumericalMethodsforEngineers.CholeskyNumericalMethodsforEngineers.CholeskyPivotedNumericalMethodsforEngineers.CompatNumericalMethodsforEngineers.DiagonalNumericalMethodsforEngineers.EigenNumericalMethodsforEngineers.FactorizationNumericalMethodsforEngineers.GeneralizedEigenNumericalMethodsforEngineers.GeneralizedSVDNumericalMethodsforEngineers.GeneralizedSchurNumericalMethodsforEngineers.HermitianNumericalMethodsforEngineers.HessenbergNumericalMethodsforEngineers.INumericalMethodsforEngineers.LAPACKNumericalMethodsforEngineers.LAPACKExceptionNumericalMethodsforEngineers.LDLtNumericalMethodsforEngineers.LQNumericalMethodsforEngineers.LUNumericalMethodsforEngineers.LinearAlgebraNumericalMethodsforEngineers.LowerTriangularNumericalMethodsforEngineers.NumericalMethodsforEngineersNumericalMethodsforEngineers.PosDefExceptionNumericalMethodsforEngineers.QRNumericalMethodsforEngineers.QRPivotedNumericalMethodsforEngineers.RankDeficientExceptionNumericalMethodsforEngineers.SVDNumericalMethodsforEngineers.SchurNumericalMethodsforEngineers.SingularExceptionNumericalMethodsforEngineers.SkylineMatrixNumericalMethodsforEngineers.SparseArraysNumericalMethodsforEngineers.SparseMatrixCSCNumericalMethodsforEngineers.SparseVectorNumericalMethodsforEngineers.SymTridiagonalNumericalMethodsforEngineers.SymmetricNumericalMethodsforEngineers.SymmetricBandedMatrixNumericalMethodsforEngineers.TransposeNumericalMethodsforEngineers.TridiagonalNumericalMethodsforEngineers.UniformScalingNumericalMethodsforEngineers.UnitLowerTriangularNumericalMethodsforEngineers.UnitUpperTriangularNumericalMethodsforEngineers.UpperTriangularNumericalMethodsforEngineers.\\NumericalMethodsforEngineers.adjointNumericalMethodsforEngineers.adjoint!NumericalMethodsforEngineers.axpby!NumericalMethodsforEngineers.axpy!NumericalMethodsforEngineers.bicgstabNumericalMethodsforEngineers.bicgstab!NumericalMethodsforEngineers.bigcstabNumericalMethodsforEngineers.blockdiagNumericalMethodsforEngineers.bunchkaufmanNumericalMethodsforEngineers.bunchkaufman!NumericalMethodsforEngineers.checkitNumericalMethodsforEngineers.chobac!NumericalMethodsforEngineers.choleskyNumericalMethodsforEngineers.cholesky!NumericalMethodsforEngineers.cholin!NumericalMethodsforEngineers.condNumericalMethodsforEngineers.condskeelNumericalMethodsforEngineers.copy_transpose!NumericalMethodsforEngineers.copyto!NumericalMethodsforEngineers.crossNumericalMethodsforEngineers.detNumericalMethodsforEngineers.diagNumericalMethodsforEngineers.diagindNumericalMethodsforEngineers.diagmNumericalMethodsforEngineers.dotNumericalMethodsforEngineers.droptol!NumericalMethodsforEngineers.dropzerosNumericalMethodsforEngineers.dropzeros!NumericalMethodsforEngineers.eigenNumericalMethodsforEngineers.eigen!NumericalMethodsforEngineers.eigmaxNumericalMethodsforEngineers.eigminNumericalMethodsforEngineers.eigvalsNumericalMethodsforEngineers.eigvals!NumericalMethodsforEngineers.eigvecsNumericalMethodsforEngineers.eulerNumericalMethodsforEngineers.evalNumericalMethodsforEngineers.factorizeNumericalMethodsforEngineers.findnzNumericalMethodsforEngineers.fromskylineNumericalMethodsforEngineers.fullNumericalMethodsforEngineers.getsymataNumericalMethodsforEngineers.givensNumericalMethodsforEngineers.hessenbergNumericalMethodsforEngineers.hessenberg!NumericalMethodsforEngineers.includeNumericalMethodsforEngineers.isdiagNumericalMethodsforEngineers.ishermitianNumericalMethodsforEngineers.isposdefNumericalMethodsforEngineers.isposdef!NumericalMethodsforEngineers.issparseNumericalMethodsforEngineers.issuccessNumericalMethodsforEngineers.issymmetricNumericalMethodsforEngineers.istrilNumericalMethodsforEngineers.istriuNumericalMethodsforEngineers.kronNumericalMethodsforEngineers.lagrangianpolynomialNumericalMethodsforEngineers.ldiv!NumericalMethodsforEngineers.ldlfor!NumericalMethodsforEngineers.ldltNumericalMethodsforEngineers.ldlt!NumericalMethodsforEngineers.ldltfac!NumericalMethodsforEngineers.lmul!NumericalMethodsforEngineers.logabsdetNumericalMethodsforEngineers.logdetNumericalMethodsforEngineers.lowrankdowndateNumericalMethodsforEngineers.lowrankdowndate!NumericalMethodsforEngineers.lowrankupdateNumericalMethodsforEngineers.lowrankupdate!NumericalMethodsforEngineers.lqNumericalMethodsforEngineers.lq!NumericalMethodsforEngineers.luNumericalMethodsforEngineers.lu!NumericalMethodsforEngineers.lufacNumericalMethodsforEngineers.lyapNumericalMethodsforEngineers.mid_point_eulerNumericalMethodsforEngineers.modified_eulerNumericalMethodsforEngineers.mul!NumericalMethodsforEngineers.nmexNumericalMethodsforEngineers.nnzNumericalMethodsforEngineers.nonzerosNumericalMethodsforEngineers.normNumericalMethodsforEngineers.normalizeNumericalMethodsforEngineers.normalize!NumericalMethodsforEngineers.nullspaceNumericalMethodsforEngineers.nzrangeNumericalMethodsforEngineers.opnormNumericalMethodsforEngineers.ordschurNumericalMethodsforEngineers.ordschur!NumericalMethodsforEngineers.permuteNumericalMethodsforEngineers.pinvNumericalMethodsforEngineers.qrNumericalMethodsforEngineers.qr!NumericalMethodsforEngineers.rankNumericalMethodsforEngineers.rdiv!NumericalMethodsforEngineers.rmul!NumericalMethodsforEngineers.rowvalsNumericalMethodsforEngineers.runga_kutta_4NumericalMethodsforEngineers.schurNumericalMethodsforEngineers.schur!NumericalMethodsforEngineers.setsymataNumericalMethodsforEngineers.shootingmethodNumericalMethodsforEngineers.spabac!NumericalMethodsforEngineers.sparin!NumericalMethodsforEngineers.sparseNumericalMethodsforEngineers.sparsevecNumericalMethodsforEngineers.spdiagmNumericalMethodsforEngineers.sprandNumericalMethodsforEngineers.sprandnNumericalMethodsforEngineers.spzerosNumericalMethodsforEngineers.subbac!NumericalMethodsforEngineers.subfor!NumericalMethodsforEngineers.svdNumericalMethodsforEngineers.svd!NumericalMethodsforEngineers.svdvalsNumericalMethodsforEngineers.svdvals!NumericalMethodsforEngineers.sylvesterNumericalMethodsforEngineers.symevalNumericalMethodsforEngineers.tosymmetricbandedmatrixNumericalMethodsforEngineers.trNumericalMethodsforEngineers.transposeNumericalMethodsforEngineers.transpose!NumericalMethodsforEngineers.trilNumericalMethodsforEngineers.tril!NumericalMethodsforEngineers.triuNumericalMethodsforEngineers.triu!NumericalMethodsforEngineers.×NumericalMethodsforEngineers.⋅"
},

]}
