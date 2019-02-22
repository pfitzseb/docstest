var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CDDLib-1",
    "page": "Readme",
    "title": "CDDLib",
    "category": "section",
    "text": "PackageEvaluator Build Status References to cite\n[![][pkg-0.6-img]][pkg-0.6-url] [![Build Status][build-img]][build-url] [![Build Status][winbuild-img]][winbuild-url] [![DOI][zenodo-img]][zenodo-url]\n[![][pkg-0.7-img]][pkg-0.7-url] [![Coveralls branch][coveralls-img]][coveralls-url] [![Codecov branch][codecov-img]][codecov-url] CDDLib is a wrapper for cdd. This module can either be used in a \"lower level\" using the API of cdd or using the higher level interface of Polyhedra. CDDLib also includes the linear programming solver CDDSolver which can be used by JuMP or Convex through MathProgBase.I needed to fork cddlib to write the wrapper because it is interface is text file based. My changes are not upstream yet, the version used by CDDLib.jl can be found here.As written in the README of cddlib:The C-library  cddlib is a C implementation of the Double Description Method of Motzkin et al. for generating all vertices (i.e. extreme points) and extreme rays of a general convex polyhedron in R^d given by a system of linear inequalities:P = { x=(x1, ..., xd)^T :  b - A  x  >= 0 }where  A  is a given m x d real matrix, b is a given m-vector and 0 is the m-vector of all zeros.The program can be used for the reverse operation (i.e. convex hull computation).  This means that  one can move back and forth between an inequality representation  and a generator (i.e. vertex and ray) representation of a polyhedron with cdd.  Also, cdd can solve a linear programming problem, i.e. a problem of maximizing and minimizing a linear function over P."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "On Unix, cddlib is build from source while on Windows, a binary is downloaded using WinRPM. Therefore, on Unix, it is required that you have a working environment for compiling C programs and that you have the headers file of GMP installed (GMP is bundled with Julia but we still need the development files for compiling cddlib). On Linux, install libgmp-dev if you are on a Debian based Linux OS (such as Ubuntu), libgmp-devel or gmp-devel if you are on RedHat based Linux OS (such as Fedora) and gmp if you are on an ArchLinux based Linux OS (such as Antergos). On MacOS, gmp is automatically installed through Homebrew.[pkg-0.6-img]: http://pkg.julialang.org/badges/CDDLib0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=CDDLib [pkg-0.7-img]: http://pkg.julialang.org/badges/CDDLib0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=CDDLib[build-img]: https://travis-ci.org/JuliaPolyhedra/CDDLib.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaPolyhedra/CDDLib.jl [winbuild-img]: https://ci.appveyor.com/api/projects/status/s03l5r1o96l9acha?svg=true [winbuild-url]: https://ci.appveyor.com/project/JuliaPolyhedra/cddlib-jl [coveralls-img]: https://coveralls.io/repos/github/JuliaPolyhedra/CDDLib.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/JuliaPolyhedra/CDDLib.jl?branch=master [codecov-img]: http://codecov.io/github/JuliaPolyhedra/CDDLib.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/JuliaPolyhedra/CDDLib.jl?branch=master[zenodo-url]: https://doi.org/10.5281/zenodo.1214581 [zenodo-img]: https://zenodo.org/badge/DOI/10.5281/zenodo.1214581.svg"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CDDLib.@cdd_ccallCDDLib.@checked_libCDDLib.@dd_ccallCDDLib.@ddf_ccallCDDLib.CDDGeneratorMatrixCDDLib.CDDInequalityMatrixCDDLib.CDDLPCDDLib.CDDLPSolutionCDDLib.CDDLibCDDLib.CDDMatrixCDDLib.CDDPolyhedraCDDLib.CDDPolyhedraModelCDDLib.CDDSetCDDLib.CDDSolverCDDLib.Cdd_AdjacencyOutputTypeCDDLib.Cdd_AincidenceCDDLib.Cdd_AmatrixCDDLib.Cdd_ArowCDDLib.Cdd_BmatrixCDDLib.Cdd_CompStatusTypeCDDLib.Cdd_ConversionTypeCDDLib.Cdd_DataFileTypeCDDLib.Cdd_ErrorTypeCDDLib.Cdd_FileInputModeTypeCDDLib.Cdd_IncidenceOutputTypeCDDLib.Cdd_LPDataCDDLib.Cdd_LPObjectiveTypeCDDLib.Cdd_LPSolutionDataCDDLib.Cdd_LPSolverTypeCDDLib.Cdd_LPStatusTypeCDDLib.Cdd_MatrixDataCDDLib.Cdd_NumberTypeCDDLib.Cdd_PolyhedraDataCDDLib.Cdd_RepresentationTypeCDDLib.Cdd_SetVectorCDDLib.Cdd_bigrangeCDDLib.Cdd_booleanCDDLib.Cdd_colindexCDDLib.Cdd_colrangeCDDLib.Cdd_colsetCDDLib.Cdd_rowflagCDDLib.Cdd_rowindexCDDLib.Cdd_rowrangeCDDLib.Cdd_rowsetCDDLib.Cset_typeCDDLib.Ctime_tCDDLib.GMPIntegerCDDLib.GMPRationalCDDLib.GMPRationalMutCDDLib.LibraryCDDLib.MPBCDDLib.MyTypeCDDLib.PolyTypeCDDLib.PolyhedronCDDLib.__init__CDDLib._getrepforCDDLib._islinCDDLib._lengthCDDLib.blockeliminationCDDLib.canonicalize!CDDLib.canonicalizelinearity!CDDLib.cddmatrixCDDLib.clearfield!CDDLib.copygeneratorsCDDLib.copyinequalitiesCDDLib.copylpsolutionCDDLib.dd_CrissCrossCDDLib.dd_DualInconsistentCDDLib.dd_DualSimplexCDDLib.dd_DualUnboundedCDDLib.dd_GeneratorCDDLib.dd_InconsistentCDDLib.dd_InequalityCDDLib.dd_IntegerCDDLib.dd_LPSundecidedCDDLib.dd_LPmaxCDDLib.dd_LPminCDDLib.dd_LPnoneCDDLib.dd_OptimalCDDLib.dd_RationalCDDLib.dd_RealCDDLib.dd_StrucDualInconsistentCDDLib.dd_StrucInconsistentCDDLib.dd_UnboundedCDDLib.dd_UnknownCDDLib.dd_UnspecifiedCDDLib.dd_blockeliminationCDDLib.dd_copyArowCDDLib.dd_copygeneratorsCDDLib.dd_copyinequalitiesCDDLib.dd_copylpsolutionCDDLib.dd_creatematrixCDDLib.dd_fouriereliminationCDDLib.dd_freelpdataCDDLib.dd_freelpsolutionCDDLib.dd_freematrixCDDLib.dd_inputappendCDDLib.dd_lpsolveCDDLib.dd_matrix2feasibilityCDDLib.dd_matrix2lpCDDLib.dd_matrix2polyCDDLib.dd_matrixappendCDDLib.dd_matrixcanonicalizeCDDLib.dd_matrixcanonicalizelinearityCDDLib.dd_matrixcopyCDDLib.dd_matrixredundancyremoveCDDLib.dd_redundantCDDLib.dd_redundantrowsCDDLib.dd_set_addelemCDDLib.dd_set_cardCDDLib.dd_set_initializeCDDLib.dd_set_memberCDDLib.dd_setmatrixnumbertypeCDDLib.dd_setmatrixobjectiveCDDLib.dd_setmatrixrepresentationtypeCDDLib.dd_settypeCDDLib.dd_sredundantCDDLib.error_messageCDDLib.evalCDDLib.extractACDDLib.extractrowCDDLib.fillmatrixCDDLib.fouriereliminationCDDLib.getextCDDLib.gethredundantindicesCDDLib.getineCDDLib.getpolyCDDLib.getvredundantindicesCDDLib.includeCDDLib.initmatrixCDDLib.isaninequalityrepresentationCDDLib.isrowpointCDDLib.libcddCDDLib.linsetCDDLib.lpsolveCDDLib.matrix2feasibilityCDDLib.matrix2lpCDDLib.matrixappendCDDLib.myconvertCDDLib.myerrorCDDLib.myfreeCDDLib.mytypeCDDLib.mytypeforCDDLib.neqsCDDLib.nhrepsCDDLib.nonnullCDDLib.nvrepsCDDLib.polytypeCDDLib.polytypeforCDDLib.polytypeforprecisionCDDLib.redundancyremove!CDDLib.redundantCDDLib.redundantrowsCDDLib.setobjectiveCDDLib.simplestatusCDDLib.sredundantCDDLib.switchinputtype!CDDLib.updateext!CDDLib.updateine!CDDLib.updatepoly!"
},

]}
