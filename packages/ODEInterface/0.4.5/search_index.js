var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ODEInterface-1",
    "page": "Readme",
    "title": "ODEInterface",
    "category": "section",
    "text": "(Image: Travis) (Image: ODEInterface) (Image: ODEInterface) (Image: ODEInterface)This julia module provides an interface to solvers for  ordinary differential equations (ODEs) written in Fortran for solving initial value problems (IVP) of the formx\' = rhs(t,x),      x(t₀) = x₀or (for solvers supporting a \"mass matrix\" M)M⋅x\' = rhs(t,x),    x(t₀) = x₀.Additionally a boundary value solver (called bvpsol) is supported for boundary value problems (BVP) of the formx\' = rhs(t,x),      r = bc( xa, xb ) = 0"
},

{
    "location": "#What-does-\"Interface\"-mean?-1",
    "page": "Readme",
    "title": "What does \"Interface\" mean?",
    "category": "section",
    "text": "This julia module does not contain code for solving initial value problems, but this module does contain code for interacting with compiled Fortran-solvers. That\'s the reason, why this module is not called ODESuite."
},

{
    "location": "#What-solvers-are-currently-supported?-1",
    "page": "Readme",
    "title": "What solvers are currently supported?",
    "category": "section",
    "text": "Currently the following Fortran-solvers, written by Prof. E. Hairer and Prof. G. Wanner, are supported:dopri5: explicit Runge-Kutta method of order 5(4) due to Dormand & Prince\ndop853: explicit Runge-Kutta method of order 8(5,3) due to Dormand & Prince\nodex: GBS extrapolation-algorithm based on the explicit midpoint rule\nradau5: implicit Runge-Kutta method (Radau IIA) of order 5\nradau: implicit Runge-Kutta method (Radau IIA) of variable order between 5 and 13\nseulex: extrapolation-algorithm based on the linear implicit Euler method\nrodas: Rosenbrock method of order 4(3) (with possibly singular mass matrix)see Software page of Prof. Hairer.Additionally the following Fortran-solvers from the SLATEC Common Mathematical Library are supported:ddeabm: Adams-Bashforth-Moulton Predictor-Corrector method (order between 1 and 12)\nddebdf: Backward Differentiation Formula (orders between 1 and 5)Also supported:bvpsol: a boundary value problem solver for highly nonlinear two point boundary value problems using either a local linear solver or a global sparse linear solver. Please note: The license for bvpsol only  covers non commercial use, see License. Written by P. Deuflhard, G. Bader, L. Weimann, see CodeLib at ZIB.\ncolnew: a multi-point boundary value problem solver for mixed order systems using collocation. Written by U. Ascher, G. Bader, see Colnew Homepage\nBVPM-2: a boundary value problem solver for the numerical solution of boundary value ordinary differential equations with defect and global error control. Written by J. J. Boisvert, P.H. Muir and R. J. Spiteri, see [BVPM-2 Page](http://cs.stmarys.ca/~muir/BVPSOLVERWebpage.shtml)Description: Calling the Solvers The following features of the IVP-solvers are supported by this ODEInterface:providing an output function (e.g. for dense output or for event location) to the solversproviding mass- and jacobi-matrices for the solvers (with support forbanded matrices)all the solvers\' parameters for fine-tuning them, see Options for Solvers  and Option Overviewsupport for problems with \"special structure\", see special structure"
},

{
    "location": "#What-are-the-requirements-for-this-module-1",
    "page": "Readme",
    "title": "What are the requirements for this module",
    "category": "section",
    "text": "This module needs the compiled Fortran solvers as shared libraries  (i.e. .so, .dylib or .dll files, respectively).  The build script of this module tries to do this compilation.  It was tested with:Linux (64bit) and gfortran\nMacOS and gfortran\nWindows 7 (64bit) and gfortran of mingw-w64 (x86_64)If you want to compile the solvers yourself (perhaps with different options and/or a different compiler), then just call ODEInterface.help_solversupport for further informations (help topics) on how to compile the solvers and how to create shared libraries."
},

{
    "location": "#Further-help-1",
    "page": "Readme",
    "title": "Further help",
    "category": "section",
    "text": "see ODEInterface.help_overview for an overview of some help topics. "
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "basic examples can be found in examples/BasicExamples\nmore advanced examples can be found in examples/AdvancedExamples\nthe Reentry Problem of the Apollo11 mission can be found in examples/ReentryOfApollo11"
},

{
    "location": "#Contacting-the-author-of-this-module-1",
    "page": "Readme",
    "title": "Contacting the author of this module",
    "category": "section",
    "text": "The author of this julia module is  Dr. Christian Ludwig\n email: ludwig@ma.tum.de\n   (Faculty of Mathematics, Technische Universität München)"
},

{
    "location": "autodocs/#ODEInterface.@import_DLbvpm2",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLbvpm2",
    "category": "macro",
    "text": "macro for import bvpm2 dynamic lib name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLbvpsol",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLbvpsol",
    "category": "macro",
    "text": "macro for import bvpsol dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLcolnew",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLcolnew",
    "category": "macro",
    "text": "macro for import colnew dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLddeabm",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLddeabm",
    "category": "macro",
    "text": "macro for import Ddeabm dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLddebdf",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLddebdf",
    "category": "macro",
    "text": "macro for import Ddebdf dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLdop853",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLdop853",
    "category": "macro",
    "text": "macro for import Dop853 dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLdopri5",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLdopri5",
    "category": "macro",
    "text": "macro for import Dopri5 dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLodex",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLodex",
    "category": "macro",
    "text": "macro for import Odex dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLradau",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLradau",
    "category": "macro",
    "text": "macro for import Radau dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLradau5",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLradau5",
    "category": "macro",
    "text": "macro for import Radau5 dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLrodas",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLrodas",
    "category": "macro",
    "text": "macro for import rodas dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_DLseulex",
    "page": "Docstrings",
    "title": "ODEInterface.@import_DLseulex",
    "category": "macro",
    "text": "macro for import seulex dynamic lib names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_LOG",
    "page": "Docstrings",
    "title": "ODEInterface.@import_LOG",
    "category": "macro",
    "text": "macro for importing all the LOG bitmasks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_OPTcommon",
    "page": "Docstrings",
    "title": "ODEInterface.@import_OPTcommon",
    "category": "macro",
    "text": "macro for importing common OPT options.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_RHScallmode",
    "page": "Docstrings",
    "title": "ODEInterface.@import_RHScallmode",
    "category": "macro",
    "text": "macro for importing RHSCALLMODE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_bandedmatrix",
    "page": "Docstrings",
    "title": "ODEInterface.@import_bandedmatrix",
    "category": "macro",
    "text": "macro, for importing Banded Matrix types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_bandedmatrixfuncs",
    "page": "Docstrings",
    "title": "ODEInterface.@import_bandedmatrixfuncs",
    "category": "macro",
    "text": "macro, for importing Banded Matrix types and functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_bvpm2",
    "page": "Docstrings",
    "title": "ODEInterface.@import_bvpm2",
    "category": "macro",
    "text": "macro for import bvpm2 solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_bvpm2_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_bvpm2_help",
    "category": "macro",
    "text": "macro for importing Bvpm2 help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_bvpsol",
    "page": "Docstrings",
    "title": "ODEInterface.@import_bvpsol",
    "category": "macro",
    "text": "macro for import bvp solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_bvpsol_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_bvpsol_help",
    "category": "macro",
    "text": "macro for importing Bvpsol help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_colnew",
    "page": "Docstrings",
    "title": "ODEInterface.@import_colnew",
    "category": "macro",
    "text": "macro for import colnew solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_colnew_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_colnew_help",
    "category": "macro",
    "text": "macro for importing Colnew help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_ddeabm",
    "page": "Docstrings",
    "title": "ODEInterface.@import_ddeabm",
    "category": "macro",
    "text": "macro for import Ddeabm solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_ddeabm_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_ddeabm_help",
    "category": "macro",
    "text": "macro for importing Ddeabm help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_ddebdf",
    "page": "Docstrings",
    "title": "ODEInterface.@import_ddebdf",
    "category": "macro",
    "text": "macro for import Ddebdf solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_ddebdf_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_ddebdf_help",
    "category": "macro",
    "text": "macro for importing Ddebdf help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_dop853",
    "page": "Docstrings",
    "title": "ODEInterface.@import_dop853",
    "category": "macro",
    "text": "macro for import Dop853 solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_dop853_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_dop853_help",
    "category": "macro",
    "text": "macro for importing Dopri5 help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_dopri5",
    "page": "Docstrings",
    "title": "ODEInterface.@import_dopri5",
    "category": "macro",
    "text": "macro for import Dopri5 solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_dopri5_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_dopri5_help",
    "category": "macro",
    "text": "macro for importing Dopri5 help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_dynamicload",
    "page": "Docstrings",
    "title": "ODEInterface.@import_dynamicload",
    "category": "macro",
    "text": "macro for importing (un-)load functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_exceptions",
    "page": "Docstrings",
    "title": "ODEInterface.@import_exceptions",
    "category": "macro",
    "text": "macro for importing the ODE Exceptions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_help",
    "category": "macro",
    "text": "macro for importing all the help-functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_huge",
    "page": "Docstrings",
    "title": "ODEInterface.@import_huge",
    "category": "macro",
    "text": "macro for importing the huge set of symbols.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_normal",
    "page": "Docstrings",
    "title": "ODEInterface.@import_normal",
    "category": "macro",
    "text": "macro for importing the normal set of symbols.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_odecall",
    "page": "Docstrings",
    "title": "ODEInterface.@import_odecall",
    "category": "macro",
    "text": "macro for importing odecall.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_odex",
    "page": "Docstrings",
    "title": "ODEInterface.@import_odex",
    "category": "macro",
    "text": "macro for import Odex solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_odex_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_odex_help",
    "category": "macro",
    "text": "macro for importing Odex help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_options",
    "page": "Docstrings",
    "title": "ODEInterface.@import_options",
    "category": "macro",
    "text": "macro for importing OptionsODE and option handling.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_outputfcn",
    "page": "Docstrings",
    "title": "ODEInterface.@import_outputfcn",
    "category": "macro",
    "text": "macro for importing enums, functions, etc. for output function call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_radau",
    "page": "Docstrings",
    "title": "ODEInterface.@import_radau",
    "category": "macro",
    "text": "macro for import Radau solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_radau5",
    "page": "Docstrings",
    "title": "ODEInterface.@import_radau5",
    "category": "macro",
    "text": "macro for import Radau5 solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_radau5_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_radau5_help",
    "category": "macro",
    "text": "macro for importing Radau5 help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_radau_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_radau_help",
    "category": "macro",
    "text": "macro for importing Radau help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_rodas",
    "page": "Docstrings",
    "title": "ODEInterface.@import_rodas",
    "category": "macro",
    "text": "macro for import rodas solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_rodas_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_rodas_help",
    "category": "macro",
    "text": "macro for importing Rodas help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_seulex",
    "page": "Docstrings",
    "title": "ODEInterface.@import_seulex",
    "category": "macro",
    "text": "macro for import seulex solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.@import_seulex_help",
    "page": "Docstrings",
    "title": "ODEInterface.@import_seulex_help",
    "category": "macro",
    "text": "macro for importing Seulex help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.AbstractArgumentsODESolver",
    "page": "Docstrings",
    "title": "ODEInterface.AbstractArgumentsODESolver",
    "category": "type",
    "text": "Ancestor for all types storing arguments for ODE-(C-/Fortran-)solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.AbstractODESolution",
    "page": "Docstrings",
    "title": "ODEInterface.AbstractODESolution",
    "category": "type",
    "text": "Ancestor for all types that represent solutions (of IVPs or BVPs).\n\nTypically such solutions can be evaluated later.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.AbstractOptionsODE",
    "page": "Docstrings",
    "title": "ODEInterface.AbstractOptionsODE",
    "category": "type",
    "text": "Ancestor for all types storing options for ODE-solvers.\n\nODE-solvers often have serveral parameters for fine-tuning them. In this ODEInterface this parameters are called \'options\' and  they are stored in key/value paris. For the key a  AbstractString is used. The value can be Any-thing. The key is often called the option-name.\n\nAll types for this purpose have this abstract type as super-type.\n\nRequired fields are: name, lastchanged, options\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ArgumentErrorODE",
    "page": "Docstrings",
    "title": "ODEInterface.ArgumentErrorODE",
    "category": "type",
    "text": "This error indicates that one input argument is invalid.\n\nThis is a WrappedException: If the invalidity of the argument was detected by some error/exception then, this initial error/exception can be found in the error field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.BandedMatrix",
    "page": "Docstrings",
    "title": "ODEInterface.BandedMatrix",
    "category": "type",
    "text": "Type for storing and changing a banded matrix.\n\nIntroduction (connections to proposal #8240)\n\nThis is a simple type for storing banded matrices in the band storage format used by LAPACK:\n\n http://www.netlib.org/lapack/lug/node124.html\n\nThe emphasis here is on storing and changing the matrix elements, because this is needed in the ODE-context.\n\nThis is not an attempt to fully implement efficient arithmetic for banded matrices. This problem is discussed in proposal #8240:\n\n https://github.com/JuliaLang/julia/issues/8240\n\nWhat are banded matrices?\n\nTake a look at the diaognals of a matrix, e.g.\n\n ⎛1 4 2    ⎞\n ⎜5 2 3 1  ⎟\n ⎜  4 3 0 0⎟\n ⎜    3 4 8⎟\n ⎝      2 5⎠\n\nThen we give the following names to the diagonals:\n\n           0  1 2 3  upper diagonals\n             ↘ ↘ ↘ ↘\n           1  1╲4╲2╲0╲0\n   lower     ↘╲ ╲ ╲ ╲ ╲          here: l = 1\n diagonals 2  5╲2╲3╲1╲0                u = 2\n             ↘╲ ╲ ╲ ╲ ╲\n           3  0╲4╲3╲0╲0\n             ↘╲ ╲ ╲ ╲ ╲\n              0╲0╲3╲4╲8\n              ╲ ╲ ╲ ╲ ╲\n              0╲0╲0╲2╲5\n\nThe 0 diagonal is the main diagonal. The 1st diagonal above this main diagonal is called the 1st upper diagonal, etc.  The 1st digonal below the main diagonal is called the 1st lower diagonal.\n\nA matrix has lower bandwidth l, if all diagonals below the l lower diagonal have only zeros. In the above example the matrix has lower bandwidth l=1 because the 2nd, 3rd and 4th lower diagonals are all zero.\n\nA matrix has upper bandwidth u, if all diagonals above the u upper diagonal have only zeros. In the above example the matrix has upper bandwidth u=2.\n\nA m×n matrix (with m,n ≥ 2) is called banded, if it has a  lower bandwidth l<m-2 and/or a upper bandwidth u<n-2.\n\nWhat is this type for?\n\nThis types stores banded matrices. There are functions for banded matrices to make it easy to query and change the elements of a banded matrix.\n\nWhy is this type immutable? Can the entries be changed?\n\nA banded matrix is immutable, i.e. the structure (the upper and lower bandwidths cannot be changed). The entries of a banded matrix are not immutable. \n\nFor an explanation of the storage format, see the help of BandedMatrix_storage.\n\nThere is a constructur, where you can give the entries array for the non-zero elements (diagonals) as input argument.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.BandedMatrix_storage",
    "page": "Docstrings",
    "title": "ODEInterface.BandedMatrix_storage",
    "category": "constant",
    "text": "How are the non-zero entries stored (in this type)?\n\nIf M is a m×n matrix with upper bandwidth u and lower bandwith l, then the non-zero entries are saved in a (1+l+u)×n matrix N with\n\n N(i-j+u+1,j) = M(i,j) with\n\n  max(1,j-u) ≤ i ≤ min(m,l+j)  ⎫   ⎧ -u ≤ i-j ≤ l\n                               ⎬ ⇔ ⎨  1 ≤ i   ≤ m\n  max(1,i-l) ≤ j ≤ max(n,u+i)  ⎭   ⎩  1 ≤ j   ≤ n\n\nThis is the storage format described in the follwing URL.\n\n http://www.netlib.org/lapack/lug/node124.html\n\nThis is not the place to discuss, if a (1+l+u)×min(m,n) matrix is a better format for storing the diagonals.\n\n M(i,j) = N(i-j+u+1,j)  \n N(r,s) = M(r+s-1-u,s)\n\nThere can be entries in the matrix N that do not correspond to entries in M. In this type they are also zero. Great care is taken not to change this zeros in order not to violate the == and hash \"contract\": Because this uncorresponding entries cannot be seen in M, they should have no effect on the hash and on the == relation.\n\nKeep in mind: There are two different ways of numbering the diagonals. The (internal) form ranging from 1 to 1+u+l and the user-friendly form ranging von -l ≤ d ≤ u, see BandedMatrix.\n\nFor the example\n\n ⎛1 4 2    ⎞\n ⎜5 2 3 1  ⎟\n ⎜  4 3 0 0⎟\n ⎜    3 4 8⎟\n ⎝      2 5⎠\n\none can visualize this storage format like this:\n\n  *╲\n  ╲│╲\n  *╲*╲\n  ╲│╲│╲\n ⎛1╲4╲2╲⋅ ⋅⎞\n ⎜╲│╲│╲│╲  ⎟       ⎛* * 2 1 0⎞      here: l = 1,  u = 2\n ⎜5╲2╲3╲1╲⋅⎟    ≅  ⎜* 4 3 0 8⎟\n ⎜╲│╲│╲│╲│╲⎟       ⎜1 2 3 4 5⎟      ⋅ : not saved \"0\"\n ⎜⋅╲4╲3╲0╲0⎟       ⎝5 4 3 2 *⎠      * : unused slot in storage format\n ⎜  ╲│╲│╲│╲⎟\n ⎜⋅ ⋅╲3╲4╲8⎟\n ⎜    ╲│╲│╲⎟\n ⎝⋅ ⋅ ⋅╲2╲5⎠\n        ╲│╲\n         ╲*\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.Bvpm2",
    "page": "Docstrings",
    "title": "ODEInterface.Bvpm2",
    "category": "type",
    "text": "Bvpm2 object for solving boundary value problems\n\nThis is the Julia part of the BVPM-2 (Fortran-)solution object.  For (nearly) all the operations the corresponding Fortran-Proxy  methods are called (call `helpbvpm2_proxy()` to get internal details).\n\nBoundary value problem (BVP)\n\nBVPs of the following form are considered:\n\n              1\n  y\'(x) =  ─────── Sy + f(x, y, p)         for a ≤ x ≤ b   [ODEs]\n            x - a\n\n\n  ga(y(a), p) = 0,     gb(y(b), p) = 0                     [BCs]\n\ny(x) ∈ ℝᵈ and d is also called no_odes (the number of ordinary differential equations). \nS ∈ ℝᵈˣᵈ is an optional constant matrix (also  called the singularity term) because the whole term S⋅y/(x-a) has a  singularity at x=a. If S is not given, then the ODEs are reduced to y\'(x) = f(x, y, p).\np ∈ ℝᵐ (with 0≤m) are unknown parameters of the problem. m is also called no_par (the number of parameters).\nf(x, y, p) ∈ ℝᵈ is also called the right-hand side (of the ODEs).\nga(ya, p) ∈ ℝˡ describes the left boundary conditions. l is also called no_left_bc (the number of the BCs at x=a).\nga(yb, p) ∈ ℝⁿ describes the right boundary conditions. It is\n  n = d + m - l \n  n = no_odes + no_par - no_left_bc\n\nInitial guess and solutions\n\nA Bvpm2 object can be used to represent either an initial guess (for a  BVP like above) or a solution. It is possible to use a solution of a  (different) BVP as initial guess to another BVP.\n\nSuch a Bvpm2 object can be in one of the following states:\n\nstate==0: object created (and connected to Fortran-object), but  not initialized, i.e. it does neither represent a guess nor an solution.\nstate==1: object created, and initialized with an (initial) guess, i.e. the object represents a guess.\nstate==2: object created and a solution was calculated successfully and saved in the object, i.e. the object represents a solution.\nstate==-1: object is not connected to a Fortran-Proxy. Either bvpm2_destroy was called or at creation time, the connection to the   Fortran-Proxy couldn\'t be established, i.e. the object is unusable and  all associated memory was deallocated.\n\nThe following table shows possible actions and the state-transitions initiated by the actions.\n\n╔═══════════════════╤═══════════════════════════╤════════════╤════════════╗\n║ Action/Function   │ Description               │state before│state after ║\n╠═══════════════════╪═══════════════════════════╪════════════╪════════════╣\n║ Bvpm2()           │ create object             │    ---     │     0      ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_init        │ initialize object with    │     0      │     1      ║\n║                   │ initial guess, etc.       │            │            ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_show_details│ show some details of      │ 0, 1, or 2 │ not changed║\n║                   │ (Fortran-)BVP_M-2 sol     │            │            ║\n║                   │ object                    │            │            ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_get_details │ get dict with some details│ -1, 0, 1,  │ not changed║\n║                   │ of the Bvpm2 object:      │   or 2     │            ║\n║                   │ e.g. state, number of pts │            │            ║\n║                   │ in current grid ...       │            │            ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_get_x       │ return current grid of    │ 1, or 2    │ not changed║\n║                   │ the object.               │            │            ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_get_params  │ return current values of  │ 1, or 2    │ not changed║\n║                   │ estimated/calculated      │            │            ║\n║                   │ parameters                │            │            ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_terminate   │ throw away all data and   │ 0, 1, or 2 │      0     ║\n║                   │ information. Bring to     │            │            ║\n║                   │ state 0.                  │            │            ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_destroy     │ deallocate all (Fortran-) │ -1, 0, 1,  │     -1     ║\n║                   │ resources for this object.│   or 2     │            ║\n║                   │                           │            │            ║\n╚═══════════════════╧═══════════════════════════╧════════════╧════════════╝ \n\nThere are functions that take an Bvpm2-object obj_in as input,  perhaps change obj_in and create an additonal obj_out.\n\nThe following table shows possible actions, the change of the state of obj_in and which obj_out object is created:\n\n╔═══════════════════╤═══════════════════════════╤════════════╤════════════╗\n║ Action/Function   │ Description               │obj_in state│  state of  ║\n║                   │                           │ from -> to │   obj_out  ║\n╠═══════════════════╪═══════════════════════════╪════════════╪════════════╣\n║ bvpm2_solve       │ take obj_in as guess. Do  │ not changed│ 0: no      ║\n║                   │ not change obj_in.        │            │    success ║\n║                   │ Produces obj_out object   │            │            ║\n║                   │ representing the solution.│            │ 2: success ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_copy        │ create deep copy of       │ not changed│ same as    ║\n║                   │ obj_in                    │            │ obj_in     ║\n╟───────────────────┼───────────────────────────┼────────────┼────────────╢\n║ bvpm2_extend      │ extend solution to new    │  2 -> 0    │    1       ║\n║                   │ interval as new  guess.   │            │            ║\n║                   │ obj_in will be terminated │            │            ║\n║                   │ and will be in state 0.   │            │            ║\n║                   │ Call bvpm2_copy before, if│            │            ║\n║                   │ you need the solution     │            │            ║\n║                   │ later on.                 │            │            ║\n╚═══════════════════╧═══════════════════════════╧════════════╧════════════╝ \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.Bvpm2_guess_cbi",
    "page": "Docstrings",
    "title": "ODEInterface.Bvpm2_guess_cbi",
    "category": "type",
    "text": "structure to save guess-function for use in Fortran callbacks.\n\nHow to make a julia function (which typically cannot be put in cfunction, because it may be a closure, etc.) callable from Fortran2003 code that uses no ISOCBINDING and has no pass-through arguments?\n\nUse a Fortran2003 proxy with ISOCBINDING. Here is the calling stack:\n\nbvpm2_guess( ...  guess_fcn ... )\n─────────────────────────────────\n│ [ cbi created with guess_fcn ]\n│ call init_guess3_c( ... guess_fcn_ptr=unsafe_bvpm2_guess_cb_c,\n│ │    ━━━━━━━━━━━━━      guess_pthrough=cbi ... )\n│ │ call bvp_init( ... guess = guess_fcn_proxy ... )\n│ │ │    ════════\n│ │ │ call guess_fcn_proxy(x_point, guess_vector)\n│ │ │ │    ━━━━━━━━━━━━━━━\n│ │ │ │ [nested guess_fcn_proxy in scope of init_guess3_c, so\n│ │ │ │  the guess_pthrough info is available.]\n│ │ │ │ [convert Fortran Arrays to C-Pointer-Array]\n│ │ │ │ call guess_fcn_ptr/unsafe_bvpm2_guess_cb_c(x_point, ...,\n│ │ │ │ │                  ───────────────────────   guess_vector \n│ │ │ │ │                                            guess_pthrough)\n│ │ │ │ │   [ use guess_pthrough to recover cbi ]\n│ │ │ │ │   call cbi.guess_fcn(x, guess_vector)\n│ │ │ │ │   │    ─────────────\n└ └ └ └ └   └\n\nLegend:\n   ─────────  julia code \n   ━━━━━━━━━  Fortran2003 code in BVP_M_Proxy with ISO_C_BINDING\n   ═════════  Fortran2003 code in BVP_M-2 (without ISO_C_BINDING)\n\nFor more details of this concept/idea call help_bvpm2_proxy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.BvpsolInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.BvpsolInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for Bvpsol-Callbacks.\n\nUnfortunately bvpsol.f does not support passthrough arguments.\n\nWe have the typical calling stack:\n\n bvpsol       \n     ccall( BVPSOL_  ... )\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_bvpsolrhs                           │  ⎬ cb. rhs\n        │    rhs                                    │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_bvpssolbc                           │  ⎬ cb. boundary\n        │    bc                                     │  ⎪     conditions\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_bvpsolivp                           │  ⎬ cb. solving\n        │    odesolver(rhs,t,tEnd,x,opt)            │  ⎪ IVP\n        └───────────────────────────────────────────┘  ⎭\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ColnewInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.ColnewInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for colnew-Callbacks.\n\nUnfortunately colnew.f does not support passthrough arguments.\n\nWe have the typical calling stack:\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_BVPM2",
    "page": "Docstrings",
    "title": "ODEInterface.DL_BVPM2",
    "category": "constant",
    "text": "Name for Loading bvpm2 solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_BVPSOL",
    "page": "Docstrings",
    "title": "ODEInterface.DL_BVPSOL",
    "category": "constant",
    "text": "Name for Loading bvpsol solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_BVPSOL_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_BVPSOL_I32",
    "category": "constant",
    "text": "Name for Loading bvpsol solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_COLNEW",
    "page": "Docstrings",
    "title": "ODEInterface.DL_COLNEW",
    "category": "constant",
    "text": "Name for Loading colnew solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_COLNEW_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_COLNEW_I32",
    "category": "constant",
    "text": "Name for Loading colnew solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_DDEABM",
    "page": "Docstrings",
    "title": "ODEInterface.DL_DDEABM",
    "category": "constant",
    "text": "Name for Loading ddeabm solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_DDEABM_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_DDEABM_I32",
    "category": "constant",
    "text": "Name for Loading ddeabm solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_DDEBDF",
    "page": "Docstrings",
    "title": "ODEInterface.DL_DDEBDF",
    "category": "constant",
    "text": "Name for Loading ddebdf solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_DDEBDF_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_DDEBDF_I32",
    "category": "constant",
    "text": "Name for Loading ddebdf solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_DOP853",
    "page": "Docstrings",
    "title": "ODEInterface.DL_DOP853",
    "category": "constant",
    "text": "Name for Loading dop853 solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_DOP853_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_DOP853_I32",
    "category": "constant",
    "text": "Name for Loading dop853 solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_DOPRI5",
    "page": "Docstrings",
    "title": "ODEInterface.DL_DOPRI5",
    "category": "constant",
    "text": "Name for Loading dopri5 solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_DOPRI5_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_DOPRI5_I32",
    "category": "constant",
    "text": "Name for Loading dopri5 solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_ODEX",
    "page": "Docstrings",
    "title": "ODEInterface.DL_ODEX",
    "category": "constant",
    "text": "Name for Loading odex solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_ODEX_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_ODEX_I32",
    "category": "constant",
    "text": "Name for Loading odex solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_RADAU",
    "page": "Docstrings",
    "title": "ODEInterface.DL_RADAU",
    "category": "constant",
    "text": "Name for Loading radau solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_RADAU5",
    "page": "Docstrings",
    "title": "ODEInterface.DL_RADAU5",
    "category": "constant",
    "text": "Name for Loading radau5 solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_RADAU5_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_RADAU5_I32",
    "category": "constant",
    "text": "Name for Loading radau5 solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_RADAU_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_RADAU_I32",
    "category": "constant",
    "text": "Name for Loading radau solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_RODAS",
    "page": "Docstrings",
    "title": "ODEInterface.DL_RODAS",
    "category": "constant",
    "text": "Name for Loading rodas solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_RODAS_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_RODAS_I32",
    "category": "constant",
    "text": "Name for Loading rodas solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_SEULEX",
    "page": "Docstrings",
    "title": "ODEInterface.DL_SEULEX",
    "category": "constant",
    "text": "Name for Loading seulex solver (64bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DL_SEULEX_I32",
    "page": "Docstrings",
    "title": "ODEInterface.DL_SEULEX_I32",
    "category": "constant",
    "text": "Name for Loading seulex solver (32bit integers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DdeabmArguments",
    "page": "Docstrings",
    "title": "ODEInterface.DdeabmArguments",
    "category": "type",
    "text": " mutable struct DdeabmArguments{FInt} <: AbstractArgumentsODESolver{FInt}\n\nStores Arguments for Ddeabm solver.\n\nFInt is the Integer type used for the fortran compilation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DdeabmInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.DdeabmInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for Ddeabm-Solver-Callbacks.\n\nWe have the typical calling stack:\n\n ddeabm\n     call_julia_output_fcn(  ... INIT ... )\n         output_fcn ( ... INIT ...)\n     loop with iterations (intermediate-mode and/or OPT_OUTPUTATTIMES)\n     │ ccall( DDEABM_ ... ) # after 1st call: continuation call\n     │    ┌───────────────────────────────────────────┐  ⎫\n     │    │unsafe_SLATEC1RHSCallback                  │  ⎬ cb. rhs\n     │    │    rhs                                    │  ⎪\n     │    └───────────────────────────────────────────┘  ⎭\n     └ call_julia_output_fcn( ... STEP ...)\n     call_julia_output_fcn(  ... DONE ... )\n         output_fcn ( ... DONE ...)\n\nsee also help of ODEInterface.SLATEC_continuation_call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DdebdfArguments",
    "page": "Docstrings",
    "title": "ODEInterface.DdebdfArguments",
    "category": "type",
    "text": " mutable struct DdebdfArguments{FInt} <: AbstractArgumentsODESolver{FInt}\n\nStores Arguments for Ddebdf solver.\n\nFInt is the Integer type used for the fortran compilation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DdebdfInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.DdebdfInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for Ddebdf-Solver-Callbacks.\n\nWe have the typical calling stack:\n\n ddebdf\n     call_julia_output_fcn(  ... INIT ... )\n         output_fcn ( ... INIT ...)\n     loop with iterations (intermediate-mode and/or OPT_OUTPUTATTIMES)\n     │ ccall( DDEBDF_ ... ) # after 1st call: continuation call\n     │    ┌───────────────────────────────────────────┐  ⎫\n     │    │unsafe_SLATEC1RHSCallback                  │  ⎬ cb. rhs\n     │    │    rhs                                    │  ⎪\n     │    └───────────────────────────────────────────┘  ⎭\n     │    ┌───────────────────────────────────────────┐  ⎫\n     │    │unsafe_SLATEC1JacCallback                  │  ⎬ cb. jacobian\n     │    │    call_julia_jac_fcn(             )      │  ⎪\n     │    └───────────────────────────────────────────┘  ⎭\n     └ call_julia_output_fcn( ... STEP ...)\n     call_julia_output_fcn(  ... DONE ... )\n         output_fcn ( ... DONE ...)\n\nsee also help of ODEInterface.SLATEC_continuation_call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DopriArguments",
    "page": "Docstrings",
    "title": "ODEInterface.DopriArguments",
    "category": "type",
    "text": " mutable struct DopriArguments{FInt<:FortranInt} <: \n          AbstractArgumentsODESolver{FInt}\n\nStores Arguments for Dopri solver.\n\nFInt is the Integer type used for the fortran compilation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.DopriInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.DopriInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for Dopri-Solver-Callbacks.\n\nWe have the typical calling stack:\n\n dopri5/dop853\n     call_julia_output_fcn(  ... INIT ... )\n         output_fcn ( ... INIT ...)\n     ccall( DOPRI5_/DOP853_ ... )\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HW1RHSCallback                      │  ⎬ cb. rhs\n        │    rhs                                    │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_dopriSoloutCallback                 │  ⎪\n        │    call_julia_output_fcn( ... STEP ...)   │  ⎪ cb. solout\n        │        output_fcn ( ... STEP ...)         │  ⎬ with eval\n        │            eval_sol_fcn                   │  ⎪\n        │                ccall(CONTD5_/CONTD8_ ... )│  ⎪\n        └───────────────────────────────────────────┘  ⎭\n     call_julia_output_fcn(  ... DONE ... )\n         output_fcn ( ... DONE ...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.FeatureNotSupported",
    "page": "Docstrings",
    "title": "ODEInterface.FeatureNotSupported",
    "category": "type",
    "text": "This error indicates that a requested feature is not supported or  is not possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.FortranInt",
    "page": "Docstrings",
    "title": "ODEInterface.FortranInt",
    "category": "constant",
    "text": "supported (signed) Integer types for Fortran codes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.FunctionCallNotSupported",
    "page": "Docstrings",
    "title": "ODEInterface.FunctionCallNotSupported",
    "category": "type",
    "text": "This error indicates that a function was called at a time, where this is not possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.InternalErrorODE",
    "page": "Docstrings",
    "title": "ODEInterface.InternalErrorODE",
    "category": "type",
    "text": "This error indicates an internal error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_ALL",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_ALL",
    "category": "constant",
    "text": "Bitmask: log everything.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_BC",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_BC",
    "category": "constant",
    "text": "Bitmask: log calls to boundary condition function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_BVPIVPSOL",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_BVPIVPSOL",
    "category": "constant",
    "text": "Bitmask: during boundary value problems:  log calls to initial value solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_EVALSOL",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_EVALSOL",
    "category": "constant",
    "text": "Bitmask: log calls to evalsolfcn function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_GENERAL",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_GENERAL",
    "category": "constant",
    "text": "Bitmask: log some general info (esp. for main call).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_GUESS",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_GUESS",
    "category": "constant",
    "text": "Bitmask: log calls to guess function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_JAC",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_JAC",
    "category": "constant",
    "text": "Bitmask: log calls to jacobian function (of right-hand side).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_JACBC",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_JACBC",
    "category": "constant",
    "text": "Bitmask: log calls to jacobian function of boundary-/side-conditions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_MASS",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_MASS",
    "category": "constant",
    "text": "Bitmask: log calls to mass function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_NOTHING",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_NOTHING",
    "category": "constant",
    "text": "Bitmask: log nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_OUTPUTFCN",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_OUTPUTFCN",
    "category": "constant",
    "text": "Bitmask: log calls to julia output function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_RHS",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_RHS",
    "category": "constant",
    "text": "Bitmask: log calls to right-hand side.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_RHSDT",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_RHSDT",
    "category": "constant",
    "text": "Bitmask: log calls to right-hand side derivative function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_SOLOUT",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_SOLOUT",
    "category": "constant",
    "text": "Bitmask: log calls to solout function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.LOG_SOLVERARGS",
    "page": "Docstrings",
    "title": "ODEInterface.LOG_SOLVERARGS",
    "category": "constant",
    "text": "Bitmask: log arguments passed to C/Fortran solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.MethodDLinfo",
    "page": "Docstrings",
    "title": "ODEInterface.MethodDLinfo",
    "category": "type",
    "text": "Type describing a dynamically loaded method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ODEInterface",
    "page": "Docstrings",
    "title": "ODEInterface.ODEInterface",
    "category": "module",
    "text": "ODEInterface\n\nThis julia module provides an interface to solvers for  ordinary differential equations (ODEs) written in Fortran for solving initial value problems of the form\n\nx\' = rhs(t,x),      x(t₀) = x₀\n\nor (for solvers supporting a \"mass matrix\" M)\n\nM⋅x\' = rhs(t,x),    x(t₀) = x₀.\n\nWhat does \"Interface\" mean?\n\nThis julia module does not contain code for solving initial value problems, but this module does contain code for interacting with compiled Fortran-solvers. That\'s the reason, why this module is not called ODESuite.\n\nWhat solvers are currently supported?\n\nCurrently the following Fortran-solvers, written by Prof. E. Hairer and Prof. G. Wanner, are supported:\n\ndopri5: explicit Runge-Kutta method of order 5(4) due to Dormand & Prince\ndop853: explicit Runge-Kutta method of order 8(5,3) due to Dormand & Prince\nodex: GBS extrapolation-algorithm based on the explicit midpoint rule\nradau5: implicit Runge-Kutta method (Radau IIA) of order 5\nradau: implicit Runge-Kutta method (Radau IIA) of variable order  between 5 and 13\nseulex: extrapolation-algorithm based on the linear implicit Euler method\nrodas: Rosenbrock method of order 4(3) (with possibly singular mass matrix)\n\nsee Software page of Prof. Hairer.\n\nAdditionally the following Fortran-solvers from the SLATEC Common Mathematical Library are supported:\n\nddeabm: Adams-Bashforth-Moulton Predictor-Corrector method (order between 1 and 12)\nddebdf: Backward Differentiation Formula (orders between 1 and 5)\n\nThe following features of this solvers are supported by this ODEInterface:\n\nproviding an output function (e.g. for dense output or for event location) to the solvers\nproviding mass- and jacobi-matrices for the solvers (with support for banded matrices)\nall the solvers\' parameters for fine-tuning them\nsupport for problems with \"special structure\", see help_specialstructure\n\nAlso supported:\n\nbvpsol: a boundary value problem solver for highly nonlinear two point boundary value problems using either a local linear solver or a global sparse linear solver. Please note: The license for bvpsol only  covers non commercial use, see License. written by P. Deuflhard, G. Bader, L. Weimann, see CodeLib at ZIB.\ncolnew: a multi-point boundary value problem solver for mixed order systems using collocation. Written by U. Ascher, G. Bader, see Colnew Homepage.\nBVPM-2: a boundary value problem solver for the numerical solution of boundary value ordinary differential equations with defect and global error control. Written by J. J. Boisvert, P.H. Muir and R. J. Spiteri, see [BVPM-2 Page](http://cs.stmarys.ca/~muir/BVPSOLVERWebpage.shtml).\n\nWhat are the requirements for this module\n\nIn order to use this module, you have to compile the supported Fortran solvers and provide a shared library for each solver. The build-script of this module tries to compile all solvers automatically. But you can use your own compiled versions (with different compile-time options or compilers). Just call ODEInterface.help_solversupport for further informations (help topics) on how to compile the solvers and how to create shared libraries.\n\nFurther help\n\nsee ODEInterface.help_overview for an overview of some help topics. \n\nContacting the author of this module\n\nThe author of this julia module is \n\n Dr. Christian Ludwig\n email: ludwig@ma.tum.de\n   (Faculty of Mathematics, Technische Universität München)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ODE_SOLVER_INTERNAL",
    "page": "Docstrings",
    "title": "ODEInterface.ODE_SOLVER_INTERNAL",
    "category": "constant",
    "text": "Use the DIFEX1-solver builtin in bvpsol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ODE_SOLVER_JULIA",
    "page": "Docstrings",
    "title": "ODEInterface.ODE_SOLVER_JULIA",
    "category": "constant",
    "text": "Use the julia-function for solving the initial value problems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ODE_SOLVER_USAGE",
    "page": "Docstrings",
    "title": "ODEInterface.ODE_SOLVER_USAGE",
    "category": "type",
    "text": "The ode-solver to use for the initial value problems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ODEinternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.ODEinternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for ODE-Solver-Callbacks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_CALL_DONE",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_CALL_DONE",
    "category": "constant",
    "text": "OPT_OUTPUTFCN is called for the last time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_CALL_INIT",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_CALL_INIT",
    "category": "constant",
    "text": "OPT_OUTPUTFCN is called for 1st time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_CALL_REASON",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_CALL_REASON",
    "category": "type",
    "text": "Possible reasons for calling the OPT_OUTPUTFCN\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_CALL_STEP",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_CALL_STEP",
    "category": "constant",
    "text": "OPT_OUTPUTFCN is called after a successfull  integration step\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_DENSE",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_DENSE",
    "category": "constant",
    "text": "OPT_OUTPUTFCN is called after every successfull step  and dense output is supported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_MODE",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_MODE",
    "category": "type",
    "text": "Possible mode for calling the OPT_OUTPUTFCN.\n\nsee OPT_OUTPUTFCN and OPT_OUTPUTMODE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_NEVER",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_NEVER",
    "category": "constant",
    "text": "OPT_OUTPUTFCN is never called.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_RETURN_VALUE",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_RETURN_VALUE",
    "category": "type",
    "text": "Possible return values of an OPT_OUTPUTFCN.\n\nsee OPT_OUTPUTFCN and OPT_OUTPUTMODE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_RET_CONTINUE",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_RET_CONTINUE",
    "category": "constant",
    "text": "tell ODE solver to continue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_RET_CONTINUE_XCHANGED",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_RET_CONTINUE_XCHANGED",
    "category": "constant",
    "text": "tell ODE solver to continue and inform the solver, that the OUTPUTFCN has altered the numerical solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_RET_STOP",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_RET_STOP",
    "category": "constant",
    "text": "tell ODE solver to stop.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OUTPUTFCN_WODENSE",
    "page": "Docstrings",
    "title": "ODEInterface.OUTPUTFCN_WODENSE",
    "category": "constant",
    "text": "OPT_OUTPUTFCN is called after every successfull step,  but no support for dense output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OdexArguments",
    "page": "Docstrings",
    "title": "ODEInterface.OdexArguments",
    "category": "type",
    "text": " mutable struct OdexArguments{FInt} <: AbstractArgumentsODESolver{FInt}\n\nStores Arguments for Odex solver.\n\nFInt is the Integer type used for the fortran compilation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OdexInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.OdexInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for Odex-Solver-Callbacks.\n\nWe have the typical calling stack:\n\n odex\n     call_julia_output_fcn(  ... INIT ... )\n         output_fcn ( ... INIT ...)\n     ccall( ODEX_ ... )\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HW1RHSCallback                      │  ⎬ cb. rhs\n        │    rhs                                    │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_odexSoloutCallback                  │  ⎪\n        │    call_julia_output_fcn( ... STEP ...)   │  ⎪ cb. solout\n        │        output_fcn ( ... STEP ...)         │  ⎬ with eval\n        │            eval_sol_fcn                   │  ⎪\n        │                ccall(CONTEX_ ... )        │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n     call_julia_output_fcn(  ... DONE ... )\n         output_fcn ( ... DONE ...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OptionsODE",
    "page": "Docstrings",
    "title": "ODEInterface.OptionsODE",
    "category": "type",
    "text": "Stores options for ODE-Solver(s) together with a name. Additionally the time of the last change is saved.\n\nOptions can be set at construction time, e.g.\n\n opt=OptionsODE(\"test\",\n                \"loglevel\" => ODEInterface.LOG_ALL,\n                \"logio\"    => stderr)\n\nor later. For changing single options \n\n oldValue = setOption!(opt,\"myopt\",\"new value\")\n oldValue = setOption!(opt,\"myopt\" => \"new value\")\n\nand for changing many options at once:\n\n oldValues = setOption!(opt,\n             \"myopt\" => \"new value\",\n             \"oldopt\" => 56)\n\nsee also: setOption!, setOptions!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.OutputErrorODE",
    "page": "Docstrings",
    "title": "ODEInterface.OutputErrorODE",
    "category": "type",
    "text": "This error indicates that a function returned invalid output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.RHS_CALL_INSITU",
    "page": "Docstrings",
    "title": "ODEInterface.RHS_CALL_INSITU",
    "category": "constant",
    "text": "The right-hand side has to return nothing. It gets an additional Array where it has to save the the values of x\'.\n\nThe right-hand side must be a function of the form\n\n funtion (t,x,dx) -> nothing\n\ndx is a Vector{Float64} with the same length as x. In dx the function has to fill in the values of x\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.RHS_CALL_RETURNS_ARRAY",
    "page": "Docstrings",
    "title": "ODEInterface.RHS_CALL_RETURNS_ARRAY",
    "category": "constant",
    "text": "The right-hand side has to return x\' as Array.\n\nThe right-hand side must be a function of the form\n\n funtion (t,x) -> dx\n\ndx is a Vector{Float64} with the same length as x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.RadauArguments",
    "page": "Docstrings",
    "title": "ODEInterface.RadauArguments",
    "category": "type",
    "text": " type RadauArguments{FInt<:FortranInt} <: \n          AbstractArgumentsODESolver{FInt}\n\nStores Arguments for Radau5 and Radau solver.\n\nFInt is the Integer type used for the fortran compilation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.RadauInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.RadauInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for Radau5/Radau-Solver-Callbacks.\n\nWe have the typical calling stack:\n\n radau5/radau\n     call_julia_output_fcn(  ... INIT ... )\n         output_fcn ( ... INIT ...)\n     ccall( RADAU5_/RADAU_ ... )\n         unsafe_HW1MassCallback  \n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HW2RHSCallback                      │  ⎬ cb. rhs\n        │    rhs                                    │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_radauSoloutCallback                 │  ⎪\n        │    call_julia_output_fcn( ... STEP ...)   │  ⎪ cb. solout\n        │        output_fcn ( ... STEP ...)         │  ⎬ with eval\n        │            eval_sol_fcn                   │  ⎪\n        │                ccall(CONTR5_/CONTRA_ ... )│  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HW1JacCallback:                     │  ⎬ cb. jacobian\n        │    call_julia_jac_fcn(             )      │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n     call_julia_output_fcn(  ... DONE ... )\n         output_fcn ( ... DONE ...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.RodasArguments",
    "page": "Docstrings",
    "title": "ODEInterface.RodasArguments",
    "category": "type",
    "text": " mutable struct RodasArguments{FInt<:FortranInt} <: \n          AbstractArgumentsODESolver{FInt}\n\nStores Arguments for Rodas solver.\n\nFInt is the Integer type used for the fortran compilation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.RodasInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.RodasInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for Rodas-Solver-Callbacks.\n\nWe have the typical calling stack:\n\n rodas\n     call_julia_output_fcn(  ... INIT ... )\n         output_fcn ( ... INIT ...)\n     ccall( RODAS_  ... )\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HW2RHSCallback                      │  ⎬ cb. rhs\n        │    rhs                                    │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_rodasSoloutCallback:                │  ⎪\n        │    call_julia_output_fcn( ... STEP ...)   │  ⎪ cb. solout\n        │        output_fcn ( ... STEP ...)         │  ⎬ with eval\n        │            eval_sol_fcn                   │  ⎪\n        │                ccall(CONTRO_ ... )        │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HW1JacCallback:                     │  ⎬ cb. jacobian\n        │    call_julia_jac_fcn                     │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HWRhsTimeDerivCallback:             │  ⎬ cb. ∂f/∂t\n        │    rhsdt                                  │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n     call_julia_output_fcn(  ... DONE ... )\n         output_fcn ( ... DONE ...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.SLATEC_continuation_call",
    "page": "Docstrings",
    "title": "ODEInterface.SLATEC_continuation_call",
    "category": "constant",
    "text": "Some solvers have the conecpt of continuation calls (CC). This can be used to get some \"kind\" of dense output support. How does this work?\n\nTypically the solver \"overshoots\" beyond T for calculating the solution at T (then with the help of interpolation):\n\n                                            ↓ intermediate steps\n ──╫───┼────┼────┼─╫───┼─────             ──┼──\n   t₀              T\n\n[Use OPT_TSTOP if the right-hand side is not defined for some t>T or if there are singularities.]\n\nIf you do a CC and you want the solution at new Tₙ, then in the situtation\n\n ──╫───┼────┼────┼─╫──╫┼─────\n   t₀              T  Tₙ\n\nwhere Tₙ is in the already computed interval, the solution at Tₙ can be computed simply by interpolation. If Tₙ is beyond the last computed interval then the solver continues with the process of numerical integration.\n\nSo CC can be cheap and the solver is optimized for CC. CC are much more efficient than a \"restart\" at T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.SLATEC_license",
    "page": "Docstrings",
    "title": "ODEInterface.SLATEC_license",
    "category": "constant",
    "text": "License\n\nThe solver ddeabm is part of the SLATEC Common Mathematical Library which is in the public domain. More informations can be found at\n\n http://www.netlib.org/slatec/guide\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.SeulexArguments",
    "page": "Docstrings",
    "title": "ODEInterface.SeulexArguments",
    "category": "type",
    "text": " mutable struct SeulexArguments{FInt<:FortranInt} <: \n          AbstractArgumentsODESolver{FInt}\n\nStores Arguments for Seulex solver.\n\nFInt is the Integer type used for the fortran compilation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.SeulexInternalCallInfos",
    "page": "Docstrings",
    "title": "ODEInterface.SeulexInternalCallInfos",
    "category": "type",
    "text": "Type encapsulating all required data for Seulex-Solver-Callbacks.\n\nWe have the typical calling stack:\n\n seulex       \n     call_julia_output_fcn(  ... INIT ... )\n         output_fcn ( ... INIT ...)\n     ccall( SEULEX_  ... )\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HW2RHSCallback                      │  ⎬ cb. rhs\n        │    rhs                                    │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_seulexSoloutCallback                │  ⎪\n        │    call_julia_output_fcn( ... STEP ...)   │  ⎪ cb. solout\n        │        output_fcn ( ... STEP ...)         │  ⎬ with eval\n        │            eval_sol_fcn                   │  ⎪\n        │                ccall(CONTEX_ ... )        │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n        ┌───────────────────────────────────────────┐  ⎫\n        │unsafe_HW1JacCallback:                     │  ⎬ cb. jacobian\n        │    call_julia_jac_fcn(             )      │  ⎪\n        └───────────────────────────────────────────┘  ⎭\n     call_julia_output_fcn(  ... DONE ... )\n         output_fcn ( ... DONE ...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.SolverDLinfo",
    "page": "Docstrings",
    "title": "ODEInterface.SolverDLinfo",
    "category": "type",
    "text": "Type describing the \"dynamic parts\" of a solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.SolverInfo",
    "page": "Docstrings",
    "title": "ODEInterface.SolverInfo",
    "category": "type",
    "text": "Type describing a solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.SolverODEnotLoaded",
    "page": "Docstrings",
    "title": "ODEInterface.SolverODEnotLoaded",
    "category": "type",
    "text": "This error indicates that a Fortran/C-solver is not loaded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.SolverVariant",
    "page": "Docstrings",
    "title": "ODEInterface.SolverVariant",
    "category": "type",
    "text": "Type describing a \"variant\" of a solver.\n\nWhat is a variant of a solver? Some solvers support more than one forms of dynamic libraries, e.g. with 32bit integers and with 64bit integers. The purpose of this type is to have enough fields for  describing such an variant.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.StateErrorODE",
    "page": "Docstrings",
    "title": "ODEInterface.StateErrorODE",
    "category": "type",
    "text": "This error indicates that an object is in the wrong state, e.g. is not initialized.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.WrappedODEException",
    "page": "Docstrings",
    "title": "ODEInterface.WrappedODEException",
    "category": "type",
    "text": "The ancestor for all wrapped exceptions in ODEInterface.\n\nRequired fields: msg, error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.__init__",
    "page": "Docstrings",
    "title": "ODEInterface.__init__",
    "category": "function",
    "text": "will be called once after the module is loaded at runtime.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_Dbc",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_Dbc",
    "category": "function",
    "text": "This function calls Dbc saved in Bvpm2solvecbi.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_Drhs",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_Drhs",
    "category": "function",
    "text": "This function calls Drhs saved in Bvpm2solvecbi.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_bc",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_bc",
    "category": "function",
    "text": "This function calls bc saved in Bvpm2solvecbi.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_check_handle",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_check_handle",
    "category": "function",
    "text": "tests if Bvpm2-object is \"connected\" to a Fortran-proxy handle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_check_state",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_check_state",
    "category": "function",
    "text": "tests if the Bvpm2-object is in one of the expected states.\n\nThrows an Error of the state is not expected.\n\nReturns details dict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_copy",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_copy",
    "category": "function",
    "text": " function bvpm2_copy(obj_in::Bvpm2) -> obj_out\n\ncreates a deep copy obj_out of the Bvpm2-object obj_in.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_create_handle",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_create_handle",
    "category": "function",
    "text": " function bvpm2_create_handle(obj::Bvpm2)\n\ncreate Fortran Proxy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_destroy",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_destroy",
    "category": "function",
    "text": " function bvpm2_destroy(obj::Bvpm2)\n\ndestroys Bvpm2-object. Especially free all (Fortran-)allocated memory and disconnect from Fortran-Proxy(-handle).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_extend",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_extend",
    "category": "function",
    "text": " function bvpm2_extend(sol_obj::Bvpm2, anew, bnew, \n          yanew::Vector, ybnew::Vector; \n          p_new=[], max_num_subintervals=0)\n\nextends a solution (state == 2) to a new interval. Take the two given states yanew and ybnew as new states for the new interval. (If anew ≥ a then yanew is ignored. If bnew ≤ b then ybnew is ignored.)\n\nYou can change the parameter guess also, by using p_new and you can change the maximal number of subintervals, too.\n\nsolobj will be \"terminated\". After the call `solobjwill be in state 0. Usebvpm2_copy` before, if you need the solution afterwards.\n\nA new Bvpm2-object guess_obj will be created an returned.\n\n\n\n\n\n function bvpm2_extend(sol_obj::Bvpm2, anew, bnew, order; \n          p_new::Vector=[], max_num_subintervals=0)\n\nextends a solution (state == 2) to a new interval using  constant (order==0) or linear (order==1) extrapolation.\n\nYou can change the parameter guess also, by using p_new and you can change the maximal number of subintervals, too.\n\nsolobj will be \"terminated\". After the call `solobjwill be in state 0. Usebvpm2_copy` before, if you need the solution afterwards.\n\nA new Bvpm2-object guess_obj will be created an returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_get_details",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_get_details",
    "category": "function",
    "text": " function bvpm2_get_details(obj::Bvpm2)\n\nreturns dict with informations about an Bvpm2 object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_get_params",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_get_params",
    "category": "function",
    "text": " function bvpm2_get_params(obj::Bvpm2)\n\nreturns current vector with parameters of Bvpm2 object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_get_x",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_get_x",
    "category": "function",
    "text": "returns current vector with x-grid of Bvpm2 object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_global_cbi",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_global_cbi",
    "category": "constant",
    "text": "BVP_M-2 uses global variables during the solution process. Hence we can only support one bvpm2 solve-call at a time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_guess",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_guess",
    "category": "function",
    "text": "This function calls guess_fcn saved in Bvpm2guesscbi.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_init",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_init",
    "category": "function",
    "text": " function bvpm2_init(obj::Bvpm2,\n   no_odes, no_left_bc, x_grid::Vector, constant_guess::Vector, \n   parameters::Vector=[], max_num_subintervals=3000)\n\ninitialize Bvpm2 object with a constant intial guess.\n\n\n\n\n\n function bvpm2_init(obj::Bvpm2,\n   no_odes, no_left_bc, x_grid::Vector, guess::Matrix, \n   parameters::Vector=[], max_num_subintervals=3000)\n\ninitialize Bvpm2 object with a guess for every state at every node in x_grid.\n\n\n\n\n\n function bvpm2_init(obj, no_odes, no_left_bc, x_grid, \n                     guess<:Function, parameters, \n                     max_num_subintervals=3000)\n\nThe guess function must have the form\n\n function guess(x,y)\n\nwhere inside the function the guess for position x has to be stored in y.\n\ninitialize Bvpm2 object where the function guess is used to get the guesses for the state at different x values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_init_tests",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_init_tests",
    "category": "function",
    "text": " function bvpm2_init_tests(obj::Bvpm2, no_odes, no_left_bc, \n     x_grid::Vector, parameters::Vector, max_num_subintervals)\n\ninit tests for common parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_rhs",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_rhs",
    "category": "function",
    "text": "This function calls rhs saved in Bvpm2solvecbi.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_show_details",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_show_details",
    "category": "function",
    "text": " function bvpm2_show_details(obj::Bvpm2)\n\nDebug: call show_details Fortran subroutine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_solve",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_solve",
    "category": "function",
    "text": " function bvpm2_solve(guess_obj::Bvpm2, rhs, bc, \n   opt::AbstractOptionsODE) -> (obj_out, retcode, stats)\n\nRight-hand side for the ODEs: rhs\n\nThe function rhs must have the form:\n\n function rhs(x, y, f)              [no_par == 0]\n function rhs(x, y, p, f)           [no_par != 0]\n\nwhere\n\n  x::Float, y::Vector{Float64}(no_odes), p::Vector{Float64}(no_par)\n  f::Vector{Float64}(no_odes)\n\nInside the function, the values of the right-hand side must be saved in f.\n\nDerivatives of right-hand side: Drhs\n\nThe function Drhs is optional. If not given finite differences are used to approximate the derivatives. If Drhs is given it must have the form:\n\n function Drhs(x, y, dfdy)          [no_par == 0]\n function Drhs(x, y, p, dfdy, dfdp) [no_par != 0]\n\nwhere\n\n  x::Float, y::Vector{Float64}(no_odes), p::Vector{Float64}(no_par)\n  dfdy::Matrix{Float64}(no_odes, no_odes)\n  dfdp::Matrix{Float64}(no_odes, no_par)\n\nInside the function, the values of the derivatives must be saved in dfdy and dfdp.\n\nBoundary conditions: bc\n\nThe function bc must have the form:\n\n function bc(ya, yb, bca, bcb)      [no_par == 0]\n function bc(ya, yb, p, bca, bcb)   [no_par != 0]\n\nwhere\n\n  ya::Vector{Float64}(no_odes), yb::Vector{Float64}(no_odes), \n  p::Vector{Float64}(no_par),\n  bca::Vector{Float64}(no_left_bc),\n  bcb::Vector{Float64}(no_odes - no_left_bc)\n\nInside the function, the values of the boundary conditions must be saved in bca and bcb.\n\nDerivatives of the boundary conditons: Dbc\n\nThe function Dbc is optional. If not given finite differences are used to approximate the derivatives. If Dbc is given it must have the form:\n\n function Dbc(ya, yb, dya, dyb)                 [no_par == 0]\n function Dbc(ya, yb, dya, dyb, p, dpa, dpb)    [no_par != 0]\n\nwhere\n\n  ya::Vector{Float64}(no_odes), yb::Vector{Float64}(no_odes), \n  p::Vector{Float64}(no_par),\n  dya::Matrix{Float64}(no_left_bc, no_odes)\n  dyb::Matrix{Float64}(no_odes+no_par-no_left_bc, no_odes)\n  dpa::Matrix{Float64}(no_left_bc, no_par)\n  dpb::Matrix{Float64}(no_odes+no_par-no_left_bc, no_par)\n\nInside the function, the values of the derivatives of the boundary  conditions must be saved in dya, dyb, dpa and dpb.\n\nOptions opt\n\nIn opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RTOL            │ relative accuracy for solution.          │    1e-6 ║\n║                 │ solution. Must be a scalar.              │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ METHODCHOICE    │ Choice for IVP-solvers:                  │       4 ║\n║                 │ 2: Runge-Kutta method of order 2         │         ║\n║                 │ 4: Runge-Kutta method of order 4         │         ║\n║                 │ 6: Runge-Kutta method of order 6         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ DIAGNOSTICOUTPUT│ diagnostic output for bvpm2:             │      -1 ║\n║                 │   -1 : no output                         │         ║\n║                 │    0 : only output if computation fails  │         ║\n║                 │    1 : intermediate output               │         ║\n║                 │    2 : full output                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ ERRORCONTROL    │ determines the error-estimation for      │       1 ║\n║                 │ which RTOL is used:                      │         ║\n║                 │    1 : defect                            │         ║\n║                 │    2 : global error                      │         ║\n║                 │    3 : defect and then global error      │         ║\n║                 │    4 : linear combination of defect      │         ║\n║                 │        and global error                  │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SINGULARTERM    │ either nothing if the ODEs have no       │ nothing ║\n║                 │ singular terms at the left boundary or   │         ║\n║                 │ a constant (d,d) matrix for the          │         ║\n║                 │ singular term.                           │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\nReturn-Code retcode\n\nretcode can have to following values:\n\n  <0: failure\n  ≥0: computation successful\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpm2_terminate",
    "page": "Docstrings",
    "title": "ODEInterface.bvpm2_terminate",
    "category": "function",
    "text": " function bvpm2_terminate(obj::Bvpm2)\n\nTerminates Bvpm2-object. Put in state as if after creation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpsol",
    "page": "Docstrings",
    "title": "ODEInterface.bvpsol",
    "category": "function",
    "text": " function bvpsol(rhs, bc,\n   t::Vector, x::Matrix, odesolver, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nThe bc has to be a function of the following form:\n\n function bc(xa,xb,r) -> nothing\n\nIt has to calculate the residual for the boundary conditions and save them in r.\n\nt is a Vector with all the multiple-shooting nodes.\n\nx gives the initial guess for all multiple-shooting nodes. Hence size(x,2)==length(t).\n\nodesolver: Either nothing: then the internal solver of bvpsol is used. Or odesolver is a ode-solver (like dopri5, dop853, seulex,  etc.).\n\nretcode can have the following values:\n\n  >0: computation successful: number of iterations\n  -1:        Iteration stops at stationary point for OPT_SOLMETHOD==0\n             Gaussian elimination failed due to singular \n             Jacobian for OPT_SOLMETHOD==1\n  -2: Iteration stops after OPT_MAXSTEPS \n  -3: Integrator failed to complete the trajectory\n  -4: Gauss Newton method failed to converge\n  -5: Given initial values inconsistent with separable linear bc\n  -6:        Iterative refinement faild to converge for OPT_SOLMETHOD==0\n             Termination since multiple shooting condition or\n             condition of Jacobian is too bad for OPT_SOLMETHOD==1\n  -7: wrong EPS (should not happen; checked by ODEInterface module)\n  -8: Condensing algorithm for linear block system fails, try\n      OPT_SOLMETHOD==1\n  -9: Sparse linear solver failed\n -10: Real or integer work-space exhausted\n -11: Rank reduction failed - resulting rank is zero\n\nIn opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RTOL            │ relative accuracy for soltuion           │    1e-6 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximum permitted number of iteration    │      40 ║\n║                 │ steps                                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ BVPCLASS        │ boundary value problem classification:   │       2 ║\n║                 │ 0: linear                                │         ║\n║                 │ 1: nonlinear with good initial data      │         ║\n║                 │ 2: highly nonlinear & bad initial data   │         ║\n║                 │ 3: highly nonlinear & bad initial data & │         ║\n║                 │    initial rank reduction to separable   │         ║\n║                 │    linear boundary conditions            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SOLMETHOD       │ switch for solution method               │       0 ║\n║                 │ 0: use local linear solver with          │         ║\n║                 │    condensing algorithm                  │         ║\n║                 │ 1: use global sparse linear solver       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ IVPOPT          │ An OptionsODE-object with the options    │ empty   ║\n║                 │ for the solver of the initial value      │ options ║\n║                 │ problem.                                 │         ║\n║                 │ In this OptionsODE-object bvpsol changes │         ║\n║                 │ OPT_MAXSS, OPT_INITIALSS, OPT_RTOL       │         ║\n║                 │ to give the IVP-solver solution hints.   │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RHS_CALLMODE    │ see help_callsolvers()                   │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpsol_global_cbi",
    "page": "Docstrings",
    "title": "ODEInterface.bvpsol_global_cbi",
    "category": "constant",
    "text": "bvpsol does not support \"pass-through\" arguments for FCN and BC. Hence we can only support one bvpsol-call at a time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpsol_i32",
    "page": "Docstrings",
    "title": "ODEInterface.bvpsol_i32",
    "category": "function",
    "text": "bvpsol with 32bit integers, see bvpsol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.bvpsolbc",
    "page": "Docstrings",
    "title": "ODEInterface.bvpsolbc",
    "category": "function",
    "text": "  function bvpsolbc{CI}(xa,xb,r,cbi::CI)\n\nThis function calls bc saved in BvpsolInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.call_julia_output_fcn",
    "page": "Docstrings",
    "title": "ODEInterface.call_julia_output_fcn",
    "category": "function",
    "text": "  function call_julia_output_fcn{CI<:ODEinternalCallInfos}(cbi::CI,\n    reason:: OUTPUTFCN_CALL_REASON, told::Float64,t::Float64, \n    x::Vector{Float64},eval_sol_fcn::Function)\n\ncalls the julia output function with the given arguments.\n\nThis is more than a simple call, because this function takes care of logging, error-checking, etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.check_slatec_output_mode",
    "page": "Docstrings",
    "title": "ODEInterface.check_slatec_output_mode",
    "category": "function",
    "text": "checks if output mode is supported and gives hint to OPT_OUTPUTATTIMES if the mode OUTPUTFCN_DENSE was requested.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.colnew",
    "page": "Docstrings",
    "title": "ODEInterface.colnew",
    "category": "function",
    "text": "  function colnew(interval::Vector, orders::Vector, ζ::Vector,\n    rhs, Drhs,\n    bc, Dbc, guess, opt::AbstractOptionsODE)\n      -> (sol, retcode, stats)\n\nSolve multi-point boundary value problem with colnew.\n\nζ∊ℝᵈ with a ≤ ζ(1)=ζ₁ ≤ ζ(2)=ζ₂ ≤ ⋯ ≤ ζ(d) ≤ b are the (time-)points were side/boundary conditions are given:\n\n       bc₁   bc₂       bc₃                 bcⱼ(ζⱼ, z(x(ζⱼ))) = 0\n        ∙     ∙         ∙  ⋯\n\n  ├─────┼─────┼─────────┼─....───┼─────┤\n t=a  t=ζ(1) t=ζ(2)    t=ζ(3)  t=ζ(d)  t=b\n\nfor the n ODEs        ∂xᵢ       ──────  = xᵢ⁽ᵐ⁽ⁱ⁾⁾ = fᵢ(t, z(x(t))          (i=1,2,…,n)   [*]       ∂tᵐ⁽ⁱ⁾\n\nwhere the i-th ODE has order m(i). [x(t)∊ℝⁿ].\n\nz is the transformation to first order: z(x(t))∊ℝᵈ is the \"first-order\" state one gets if the n ODEs [*] are transformed to a first-order system:\n\n z(x(t)) = ( x₁(t), x₁\'(t), x₁\'\'(t), …, x₁⁽ᵐ⁽¹⁾⁻¹⁾,\n             x₂(t), x₂\'(t), x₂\'\'(t), …, x₂⁽ᵐ⁽²⁾⁻¹⁾,\n             ⋯                                    ,\n             xₙ(t), xₙ\'(t), xₙ\'\'(t), …, xₙ⁽ᵐ⁽ⁿ⁾⁻¹⁾  )\n\nHence one has the requirement: ∑m(i) = d.\n\nThe boundary-/side-conditions at the points ζⱼ=ζ(j) are given in the form\n\n bcⱼ(ζⱼ, z(x(ζⱼ))) = 0                         (j=1,2,…,d)\n\nRestrictions (in the colnew code):\n\nat maximum 20 ODEs: n ≤ 20\nat maximum 40 dimensions: d ≤ 40\nThe orders m(i) have to satisfy: 1 ≤ m(i) ≤ 4   for all i=1,2,…,n.\n\nAll (Julia-)callback-functions (like rhs, etc.) use the in-situ call-mode, i.e. they have to write the result in a preallocated vector.\n\nrhs\n\nrhs must be a function of the form\n\nfunction rhs(t, z, f)\n\nwith the input data: t (scalar) time and z∈ℝᵈ (z=z(x(t))). The values of the right-hand side have to be saved in f: f∈ℝⁿ!  Only the non-trivial parts of the right-hand side must be calculated.\n\nDrhs\n\nDrhs must be a function of the form\n\nfunction Drhs(t, z, df)\n\nwith the input data: t (scalar) time and z∈ℝᵈ (z=z(x(t))). The values of the jacobian of the right-hand side have to be saved in df: df∈ℝⁿˣᵈ!\n\n           ∂fᵢ\ndf(i,j) = ─────      (i=1,…,n;  j=1,…,d)\n           ∂zⱼ\n\nbc\n\nbc must be a function of the form\n\nfunction bc(i, z, bc)\n\nwith the input data: integer index i and z∈ℝᵈ (z=z(x(t))). The scalar(!) value of the i-th side-condition (at time ζ(i)) has to be saved in bc, which is a vector of length 1.\n\nDbc\n\nDbc must be a function of the form\n\nfunction Dbc(i, z, dbc)\n\nwith the input data: integer index i and z∈ℝᵈ (z=z(x(t))). The  values of the derivative of the i-th side-condition  (at time ζ(i)) has to be saved in dbc:\n\n          ∂bcᵢ\ndbc(j) = ─────      (j=1,…,d)\n          ∂zⱼ\n\nguess\n\nguess can be nothing, i.e. no initial guess given. Or guess can be the sol return value of an earilier call of colnew. In such a case the former mesh and the former solution is taken as an initial guess (or is coarsen, see OPT_COARSEGUESSGRID).\n\nOr guess is a function of the form\n\nfunction guess(t, z, dmx)\n\nwith the input data t∈[a,b]. Guesses are needed for the following values: z=z(x(t))∈ℝᵈ and\n\n          ∂xᵢ\ndmx(i) = ────────      (i=1,…,n)\n          ∂tᵐ⁽ⁱ⁾\n\nreturn values\n\nsol is a solution object which can be evaluated with the  evalSolution functions. Or you can ask for the (final) grid of the solution with getSolutionGrid.\n\nretcode can have to following values:\n\n  >0: computation successful\n   0: collocation matrix is singular\n  -1: the expected no. of subintervals exceeds storage\n      (try to increase `OPT_MAXSUBINTERVALS`)\n  -2: the nonlinear iteration has not converged\n  -3: there is an input data error\n\nIn opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ BVPCLASS        │ boundary value problem classification:   │       1 ║\n║                 │ 0: linear                                │         ║\n║                 │ 1: nonlinear and regular                 │         ║\n║                 │ 2: nonlinear and \"extra sensitive\"       │         ║\n║                 │    (first relax factor is rstart and the │         ║\n║                 │    nonlinear iteration does not rely     │         ║\n║                 │    on past convergence)                  │         ║\n║                 │ 3: fail-early: return immediately upon   │         ║\n║                 │    (a) two successive non-convergences   │         ║\n║                 │        or                                │         ║\n║                 │    (b) after obtaining an error estimate │         ║\n║                 │        for the first time                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RTOL            │ relative *and* absolute accuracy for     │    1e-6 ║\n║                 │ solution. Must be a vector of length d.  │         ║\n║                 │ If a scalar is given (like the default   │         ║\n║                 │ value of 1e-6) then the vector           │         ║\n║                 │    RTOL*ones(Float64, d)                 │         ║\n║                 │ is generated.                            │         ║\n║                 │ Some entries can be NaN! If an entry     │         ║\n║                 │ is NaN, then no error checking is done   │         ║\n║                 │ for this component.                      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ COLLOCATIONPTS  │ number (=k) of collocation points per    │ see left║\n║                 │ sub-interval.                            │         ║\n║                 │ Requirement:                             │         ║\n║                 │   orders[i] ≤ k ≤ 7                      │         ║\n║                 │ Default:                                 │         ║\n║                 │   k = max( max(orders)+1, 5-max(orders) )│         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SUBINTERVALS    │ Either a positive integer scalar or a    │       5 ║\n║                 │ vector of (Float)-times:                 │         ║\n║                 │                                          │         ║\n║                 │ (a) scalar: use a \"uniform-like\" initial │         ║\n║                 │ grid with the given integer as number    │         ║\n║                 │ of subintervals.                         │         ║\n║                 │ Why \"uniform-like\" and not \"uniform\"?    │         ║\n║                 │ Because all values of ζ and all values of│         ║\n║                 │ OPT_ADDGRIDPOINTS have to be in the grid.│         ║\n║                 │ If the scalar is too small for all this  │         ║\n║                 │ values it is increased (internally).     │         ║\n║                 │                                          │         ║\n║                 │ (b) vector: all points must be inside    │         ║\n║                 │ the interval (a,b). Then this points     │         ║\n║                 │ are used as initial grid. Values of ζ,   │         ║\n║                 │ OPT_ADDGRIDPOINTS and a and b are added  │         ║\n║                 │ automatically by this interface.         │         ║\n║                 │                                          │         ║\n║                 │ If the guess is an solution object,      │         ║\n║                 │ then this grid saved there is used       │         ║\n║                 │ (and not the values given in             │         ║\n║                 │ `OPT_SUBINTERVALS`).                     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ FREEZEINTERVALS │ Only used if OPT_SUBINTERVALS is a       │   false ║\n║                 │ vector. In this case this flags indicates│         ║\n║                 │ if colnew is allowed to adaptively       │         ║\n║                 │ change the grid.                         │         ║\n║                 │ If true, all grid adaption is turned off │         ║\n║                 │ and no mesh selection is done.           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSUBINTERVALS │ number of maximal subintervals.          │      50 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ COARSEGUESSGRID │ If `guess` is an solution obtained by a  │    true ║\n║                 │ former call of `colnew`, then this       │         ║\n║                 │ solution is taken as guess, and the mesh │         ║\n║                 │ provided by this solution is taken twice │         ║\n║                 │ as coarse.                               │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ DIAGNOSTICOUTPUT│ diagnostic output for colnew:            │       1 ║\n║                 │   -1 : full diagnostic printout          │         ║\n║                 │    0 : selected printout                 │         ║\n║                 │    1 : no printout                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ ADDGRIDPOINTS   │ additional points that are always added  │      [] ║\n║                 │ to every (time-)grid.                    │         ║\n║                 │ Every grid contains all values in ζ and  │         ║\n║                 │ the values in the interval argument.     │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.colnew_Dbc",
    "page": "Docstrings",
    "title": "ODEInterface.colnew_Dbc",
    "category": "function",
    "text": "This function calls Dbc saved in ColnewInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.colnew_Drhs",
    "page": "Docstrings",
    "title": "ODEInterface.colnew_Drhs",
    "category": "function",
    "text": "This function calls Drhs saved in ColnewInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.colnew_bc",
    "page": "Docstrings",
    "title": "ODEInterface.colnew_bc",
    "category": "function",
    "text": "This function calls bc saved in ColnewInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.colnew_global_cbi",
    "page": "Docstrings",
    "title": "ODEInterface.colnew_global_cbi",
    "category": "constant",
    "text": "colnew does not support \"pass-through\" arguments for FSUB, DFSUB, GSUB, DGSUB, GUES. Hence we can only support one colnew-call at a time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.colnew_guess",
    "page": "Docstrings",
    "title": "ODEInterface.colnew_guess",
    "category": "function",
    "text": "This function calls guess saved in ColnewInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.colnew_i32",
    "page": "Docstrings",
    "title": "ODEInterface.colnew_i32",
    "category": "function",
    "text": "colnew with 32bit integers, see colnew.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.colnew_rhs",
    "page": "Docstrings",
    "title": "ODEInterface.colnew_rhs",
    "category": "function",
    "text": "This function calls rhs saved in ColnewInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.copyOptions!",
    "page": "Docstrings",
    "title": "ODEInterface.copyOptions!",
    "category": "function",
    "text": "function copyOptions!(dest::AbstractOptionsODE,source::AbstractOptionsODE)\n\ncopy all options from other ODE-Option object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.createBandedMatrix",
    "page": "Docstrings",
    "title": "ODEInterface.createBandedMatrix",
    "category": "function",
    "text": "convert full matrix to BandedMatrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.create_dopri_eval_sol_fcn_closure",
    "page": "Docstrings",
    "title": "ODEInterface.create_dopri_eval_sol_fcn_closure",
    "category": "function",
    "text": " function create_dopri_eval_sol_fcn_closure( cbi::CI, d::FInt, \n         method_contd::Ptr{Cvoid}) where {FInt<:FortranInt, \n                                         CI<:DopriInternalCallInfos}\n\ngenerates a evalsolfcn for dopri5 and dop853.\n\nWhy is a closure needed? We need a function eval_sol_fcn that calls CONTD5_ or CONTD8_ (with ccall). But CONTD?_ needs the informations for the current state. This informations were saved by unsafe_dopriSoloutCallback in the DopriInternalCallInfos. eval_sol_fcn needs to get this informations. Here comes create_dopri_eval_sol_fcn_closure into play: this function takes the call-informations and generates a eval_sol_fcn with this data.\n\nWhy doesn\'t unsafe_dopriSoloutCallback generate a closure (then the current state needs not to be saved in DopriInternalCallInfos)? Because then every call to unsafe_dopriSoloutCallback would have generated a closure function. That\'s a lot of overhead: 1 closure function for every solout call. With the strategy above, we have 1 closure function per ODE-solver-call, i.e. 1 closure function per ODE.\n\nFor the typical calling sequence, see DopriInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.create_odex_eval_sol_fcn_closure",
    "page": "Docstrings",
    "title": "ODEInterface.create_odex_eval_sol_fcn_closure",
    "category": "function",
    "text": " function create_odex_eval_sol_fcn_closure(cbi::CI, d::FInt, \n         method_contex::Ptr{Cvoid}) where {FInt<:FortranInt,\n                                          CI<:OdexInternalCallInfos}\n\ngenerates a evalsolfcn for odex.\n\nWhy is a closure needed? We need a function eval_sol_fcn that calls CONTEX_ (with ccall). But CONTEX_ needs the informations for the current state. This informations were saved by unsafe_odexSoloutCallback in the OdexInternalCallInfos. eval_sol_fcn needs to get this informations. Here comes create_odex_eval_sol_fcn_closure into play: this function takes the call informations and generates a eval_sol_fcn with this data.\n\nWhy doesn\'t unsafe_odexSoloutCallback generate a closure (then the current state needs not to be saved in OdexInternalCallInfos)? Because then every call to unsafe_odexSoloutCallback would have generated a closure function. That\'s a lot of overhead: 1 closure function for every solout call. With the strategy above, we have 1 closure function per ODE-solver-call, i.e. 1 closure function per ODE.\n\nFor the typical calling sequence, see OdexInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.create_radau_eval_sol_fcn_closure",
    "page": "Docstrings",
    "title": "ODEInterface.create_radau_eval_sol_fcn_closure",
    "category": "function",
    "text": " function create_radau_eval_sol_fcn_closure(cbi::CI, d::FInt, \n         method_cont::Ptr{Cvoid}) where {FInt<:FortranInt,\n                                        CI<:RadauInternalCallInfos}\n\ngenerates a evalsolfcn for radau and radau5.\n\nWhy is a closure needed? We need a function eval_sol_fcn that calls CONTR5_ OR CONTRA_ (with ccall). But CONTR5_/CONTRA_ need the informations for the current state. This informations were saved by unsafe_radauSoloutCallback in the RadauInternalCallInfos. eval_sol_fcn needs to get this informations. Here comes create_radau_eval_sol_fcn_closure into play: this function takes call informations and generates a eval_sol_fcn with this data.\n\nWhy doesn\'t unsafe_radauSoloutCallback generate a closure (then the current state needs not to be saved in RadauInternalCallInfos)? Because then every call to unsafe_radauSoloutCallback would have generated a closure function. That\'s a lot of overhead: 1 closure function for every solout call. With the strategy above, we have 1 closure function per ODE-solver-call, i.e. 1 closure function per ODE.\n\nFor the typical calling sequence, see RadauInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.create_rodas_eval_sol_fcn_closure",
    "page": "Docstrings",
    "title": "ODEInterface.create_rodas_eval_sol_fcn_closure",
    "category": "function",
    "text": " function create_rodas_eval_sol_fcn_closure(cbi::CI, d::FInt, \n         method_contro::Ptr{Cvoid}) where {FInt<:FortranInt, \n                                          CI<:RodasInternalCallInfos}\n\ngenerates a evalsolfcn for rodas.\n\nWhy is a closure needed? We need a function eval_sol_fcn that calls CONTRO_ (with ccall). But CONTRO_ needs the informations for the current state. This informations were saved by unsafe_rodasSoloutCallback in the RodasInternalCallInfos. eval_sol_fcn needs to get this informations. Here comes create_rodas_eval_sol_fcn_closure into play: this function takes the call informations and generates a eval_sol_fcn with this data.\n\nWhy doesn\'t unsafe_rodasSoloutCallback generate a closure (then the current state needs not to be saved in RodasInternalCallInfos)? Because then every call to unsafe_rodasSoloutCallback would have generated a closure function. That\'s a lot of overhead: 1 closure function for every solout call. With the strategy above, we have 1 closure function per ODE-solver-call, i.e. 1 closure function per ODE.\n\nFor the typical calling sequence, see RodasInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.create_seulex_eval_sol_fcn_closure",
    "page": "Docstrings",
    "title": "ODEInterface.create_seulex_eval_sol_fcn_closure",
    "category": "function",
    "text": " function create_seulex_eval_sol_fcn_closure(cbi::CI, d::FInt, \n         method_contex::Ptr{Cvoid}) where {FInt<:FortranInt, \n                                          CI<:SeulexInternalCallInfos}\n\ngenerates a evalsolfcn for seulex.\n\nWhy is a closure needed? We need a function eval_sol_fcn that calls CONTEX_ (with ccall). But CONTEX_ needs the informations for the current state. This informations were saved by unsafe_seulexSoloutCallback in the SeulexInternalCallInfos. eval_sol_fcn needs to get this informations. Here comes create_seulex_eval_sol_fcn_closure into play: this function takes the call informations and generates a eval_sol_fcn with this data.\n\nWhy doesn\'t unsafe_seulexSoloutCallback generate a closure (then the current state needs not to be saved in SeulexInternalCallInfos)? Because then every call to unsafe_seulexSoloutCallback would have generated a closure function. That\'s a lot of overhead: 1 closure function for every solout call. With the strategy above, we have 1 closure function per ODE-solver-call, i.e. 1 closure function per ODE.\n\nFor the typical calling sequence, see SeulexInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ddeabm",
    "page": "Docstrings",
    "title": "ODEInterface.ddeabm",
    "category": "function",
    "text": " function ddeabm(rhs, t0::Real, T::Real,\n                 x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n <0: error\n\nmain call for using Fortran-ddeabm solver. In opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RTOL         &  │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN either              │         ║\n║                 │   (a) either for all intermediate steps  │         ║\n║                 │       choosen by the solver or           │         ║\n║                 │   (b) at the times given in the option   │         ║\n║                 │       OPT_OUTPUTATTIMES                  │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   is *not* supported!                    │         ║\n║                 │   but see OUTPUTATTIMES for an           │         ║\n║                 │   alternative approach                   │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTATTIMES   │ If OPT_OUTPUTMODE is OUTPUTFCN_WODENSE   │ nothing ║\n║                 │ then one can specify with this vector    │         ║\n║                 │ the time points where the OPT_OUTPUTFCN  │         ║\n║                 │ should be called.                        │         ║\n║                 │ All values of OPT_OUTPUTATTIMES *must*   │         ║\n║                 │ be sorted (ascending, if T>t0, and       │         ║\n║                 │ descending, if T<t0) and they must be    │         ║\n║                 │ between t0 and T.                        │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ TSTOP           │ tell the solver, that it is not          │     NaN ║\n║                 │ permissable to integrate past the point  │         ║\n║                 │ TSTOP. If TSTOP is NaN then the solver   │         ║\n║                 │ may integrate past T and interpolate the │         ║\n║                 │ result at T. Sometimes there are         │         ║\n║                 │ right-hand sides, where this is not      │         ║\n║                 │ possible.                                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │  100000 ║\n║                 │ (allowed intermediate steps)             │         ║\n║                 │ between t0, T and the values given       │         ║\n║                 │ in OPT_OUTPUTATTIMES.                    │         ║\n║                 │ The value will be rounded up to a        │         ║\n║                 │ multiple of 500.                         │         ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ddeabm_i32",
    "page": "Docstrings",
    "title": "ODEInterface.ddeabm_i32",
    "category": "function",
    "text": "ddeabm with 32bit integers, see ddeabm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ddeabm_impl",
    "page": "Docstrings",
    "title": "ODEInterface.ddeabm_impl",
    "category": "function",
    "text": " function ddeabm_impl(rhs, \n         t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE, \n         args::DdeabmArguments{FInt}) where FInt<:FortranInt\n\nimplementation of ddeabm-call for FInt.\n\nThis solver has the conecpt of continuation calls (CC), see help for ODEInterface.SLATEC_continuation_call.\n\nThis CC are used in this method to get the solution at user-given t-values (see OPT_OUTPUTATTIMES) in order to support some alternative method for dense output.\n\nThe solver also has an intermediate-output mode. If activated then the numerical integration is stoped at every (solver-chosen) intermediate step and can be continued with a CC.\n\nDifferent cases for this method:\n\n╔═══════════════════╤═══════════════════╤════════════════════╤═════════╗\n║ OPT_OUTPUTMODE    │ OPT_OUTPUTATTIMES │ intermediate-mode? │  case   ║\n╠═══════════════════╪═══════════════════╪════════════════════╪═════════╣\n║ OUTPUTFCN_NEVER   │ <ignored>         │ no   INFO(3)=0     │  C1     ║\n║ OUTPUTFCN_WODENSE │ nothing or empty  │ yes  INFO(3)=1     │  C2     ║\n║ OUTPUTFCN_WODENSE │ given vector      │ no   INFO(3)=0     │  C3     ║\n╠═══════════════════╪═══════════════════╧════════════════════╧═════════╣\n║ OUTPUTFCN_DENSE   │        N O T    S U P P O R T E D !              ║\n╚═══════════════════╧══════════════════════════════════════════════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ddeabm_maxnum",
    "page": "Docstrings",
    "title": "ODEInterface.ddeabm_maxnum",
    "category": "constant",
    "text": "MAXNUM value in ddeabm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ddebdf",
    "page": "Docstrings",
    "title": "ODEInterface.ddebdf",
    "category": "function",
    "text": " function ddebdf(rhs, t0::Real, T::Real,\n                 x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n <0: error\n\nmain call for using Fortran-ddebdf solver. In opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RTOL         &  │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN either              │         ║\n║                 │   (a) either for all intermediate steps  │         ║\n║                 │       choosen by the solver or           │         ║\n║                 │   (b) at the times given in the option   │         ║\n║                 │       OPT_OUTPUTATTIMES                  │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   is *not* supported!                    │         ║\n║                 │   but see OUTPUTATTIMES for an           │         ║\n║                 │   alternative approach                   │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTATTIMES   │ If OPT_OUTPUTMODE is OUTPUTFCN_WODENSE   │ nothing ║\n║                 │ then one can specify with this vector    │         ║\n║                 │ the time points where the OPT_OUTPUTFCN  │         ║\n║                 │ should be called.                        │         ║\n║                 │ All values of OPT_OUTPUTATTIMES *must*   │         ║\n║                 │ be sorted (ascending, if T>t0, and       │         ║\n║                 │ descending, if T<t0) and they must be    │         ║\n║                 │ between t0 and T.                        │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ TSTOP           │ tell the solver, that it is not          │     NaN ║\n║                 │ permissable to integrate past the point  │         ║\n║                 │ TSTOP. If TSTOP is NaN then the solver   │         ║\n║                 │ may integrate past T and interpolate the │         ║\n║                 │ result at T. Sometimes there are         │         ║\n║                 │ right-hand sides, where this is not      │         ║\n║                 │ possible.                                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │  100000 ║\n║                 │ (allowed intermediate steps)             │         ║\n║                 │ between t0, T and the values given       │         ║\n║                 │ in OPT_OUTPUTATTIMES.                    │         ║\n║                 │ The value will be rounded up to a        │         ║\n║                 │ multiple of 500.                         │         ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIMATRIX    │ A function providing the Jacobian for    │ nothing ║\n║                 │ ∂f/∂x or nothing. For nothing the solver │         ║\n║                 │ uses finite differences to calculate the │         ║\n║                 │ Jacobian.                                │         ║\n║                 │ The function has to be of the form:      │         ║\n║                 │   function (t,x,J) -> nothing            │         ║\n║                 │ Depending on OPT_JACOBIBANDSTRUCT the    │         ║\n║                 │ argument J will then by a full or a      │         ║\n║                 │ banded matrix, where the user-given      │         ║\n║                 │ function has to fill in the entries.     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIBANDSTRUCT│ A tuple (l,u) describing the banded      │ nothing ║\n║                 │ structure of the Jacobian or nothing if  │         ║\n║                 │ the Jacobian is full.                    │         ║\n║                 │ Even if the option JACOBIMATRIX is empty,│         ║\n║                 │ the solver will perform much better if   │         ║\n║                 │ the Jacobian matrix is banded and the    │         ║\n║                 │ code is told this.                       │         ║\n║                 │ see also help of BandedMatrix            │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ddebdf_i32",
    "page": "Docstrings",
    "title": "ODEInterface.ddebdf_i32",
    "category": "function",
    "text": "ddebdf with 32bit integers, see ddebdf.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ddebdf_impl",
    "page": "Docstrings",
    "title": "ODEInterface.ddebdf_impl",
    "category": "function",
    "text": " function ddebdf_impl(rhs, \n         t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE, \n         args::DdebdfArguments{FInt}) where FInt<:FortranInt\n\nimplementation of ddebdf-call for FInt.\n\nThis solver has the conecpt of continuation calls (CC), see help for ODEInterface.SLATEC_continuation_call.\n\nThis CC are used in this method to get the solution at user-given t-values (see OPT_OUTPUTATTIMES) in order to support some alternative method for dense output.\n\nThe solver also has an intermediate-output mode. If activated then the numerical integration is stoped at every (solver-chosen) intermediate step and can be continued with a CC.\n\nDifferent cases for this method:\n\n╔═══════════════════╤═══════════════════╤════════════════════╤═════════╗\n║ OPT_OUTPUTMODE    │ OPT_OUTPUTATTIMES │ intermediate-mode? │  case   ║\n╠═══════════════════╪═══════════════════╪════════════════════╪═════════╣\n║ OUTPUTFCN_NEVER   │ <ignored>         │ no   INFO(3)=0     │  C1     ║\n║ OUTPUTFCN_WODENSE │ nothing or empty  │ yes  INFO(3)=1     │  C2     ║\n║ OUTPUTFCN_WODENSE │ given vector      │ no   INFO(3)=0     │  C3     ║\n╠═══════════════════╪═══════════════════╧════════════════════╧═════════╣\n║ OUTPUTFCN_DENSE   │        N O T    S U P P O R T E D !              ║\n╚═══════════════════╧══════════════════════════════════════════════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.ddebdf_maxnum",
    "page": "Docstrings",
    "title": "ODEInterface.ddebdf_maxnum",
    "category": "constant",
    "text": "MAXNUM value in ddebdf.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dlSolversInfo",
    "page": "Docstrings",
    "title": "ODEInterface.dlSolversInfo",
    "category": "constant",
    "text": "global Dict saving informations of all loaded solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.doRadauSolverCall",
    "page": "Docstrings",
    "title": "ODEInterface.doRadauSolverCall",
    "category": "function",
    "text": "calls the radau5 or radau solver after all solver arguments are prepared.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dop853",
    "page": "Docstrings",
    "title": "ODEInterface.dop853",
    "category": "function",
    "text": "function dop853(rhs, t0::Real, T::Real,\n                x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n -1: input is not consistent\n -2: larger OPT_MAXSTEPS is needed\n -3: step size becomes too small\n -4: problem is probably stiff (interrupted)\n\nmain call for using Fortran-dopri5 solver. In opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RTOL     &      │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN, but without        │         ║\n║                 │   possibility for dense output           │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   call OPT_OUTPUTFCN with support for    │         ║\n║                 │   dense output                           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │  100000 ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ STEST           │ stiffness test                           │    1000 ║\n║                 │ done after every step number k*OPT_STEST │         ║\n║                 │ OPT_STEST < 0 for turning test off       │         ║\n║                 │ OPT_STEST ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ EPS             │ the rounding unit                        │ 2.3e-16 ║\n║                 │ 1e-35 < OPT_EPS < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RHO             │ safety factor in step size predcition    │     0.9 ║\n║                 │ 1e-4  < OPT_RHO < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSMINSEL   &    │ parameters for step size selection       │   0.333 ║\n║ SSMAXSEL        │ The new step size is chosen subject to   │     6.0 ║\n║                 │ the restriction                          │         ║\n║                 │ OPT_SSMINSEL ≤ hnew/hold ≤ OPT_SSMAXSEL  │         ║\n║                 │ OPT_SSMINSEL, OPT_SSMAXSEL > 0           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSBETA          │ β for stabilized step size control       │     0.0 ║\n║                 │ OPT_SSBETA ≤ 0.2                         │         ║\n║                 │ if OPT_SSBETA < 0 then OPT_SSBETA = 0    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSS           │ maximal step size                        │  T - t0 ║\n║                 │ OPT_MAXSS ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITIALSS       │ initial step size                        │     0.0 ║\n║                 │ if OPT_INITIALSS == 0 then a initial     │         ║\n║                 │ guess is computed                        │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dop853_i32",
    "page": "Docstrings",
    "title": "ODEInterface.dop853_i32",
    "category": "function",
    "text": "dop853 with 32bit integers, see dop853\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dop853_impl",
    "page": "Docstrings",
    "title": "ODEInterface.dop853_impl",
    "category": "function",
    "text": " function dop853_impl(rhs, \n         t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE,\n         args::DopriArguments{FInt}) where {FInt<:FortranInt}\n\nimplementation of dop853 for FInt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dopri5",
    "page": "Docstrings",
    "title": "ODEInterface.dopri5",
    "category": "function",
    "text": "function dopri5(rhs, t0::Real, T::Real,\n                x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n -1: input is not consistent\n -2: larger OPT_MAXSTEPS is needed\n -3: step size becomes too small\n -4: problem is probably stiff (interrupted)\n\nmain call for using Fortran-dopri5 solver. In opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option         │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RTOL     &      │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN, but without        │         ║\n║                 │   possibility for dense output           │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   call OPT_OUTPUTFCN with support for    │         ║\n║                 │   dense output                           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │  100000 ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ STEST           │ stiffness test                           │    1000 ║\n║                 │ done after every step number k*OPT_STEST │         ║\n║                 │ OPT_STEST < 0 for turning test off       │         ║\n║                 │ OPT_STEST ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ EPS             │ the rounding unit                        │ 2.3e-16 ║\n║                 │ 1e-35 < OPT_EPS < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RHO             │ safety factor in step size predcition    │     0.9 ║\n║                 │ 1e-4  < OPT_RHO < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSMINSEL   &    │ parameters for step size selection       │     0.2 ║\n║ SSMAXSEL        │ The new step size is chosen subject to   │    10.0 ║\n║                 │ the restriction                          │         ║\n║                 │ OPT_SSMINSEL ≤ hnew/hold ≤ OPT_SSMAXSEL  │         ║\n║                 │ OPT_SSMINSEL, OPT_SSMAXSEL > 0           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSBETA          │ β for stabilized step size control       │    0.04 ║\n║                 │ OPT_SSBETA ≤ 0.2                         │         ║\n║                 │ if OPT_SSBETA < 0 then OPT_SSBETA = 0    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSS           │ maximal step size                        │  T - t0 ║\n║                 │ OPT_MAXSS ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITIALSS       │ initial step size                        │     0.0 ║\n║                 │ if OPT_INITIALSS == 0 then a initial     │         ║\n║                 │ guess is computed                        │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dopri5_i32",
    "page": "Docstrings",
    "title": "ODEInterface.dopri5_i32",
    "category": "function",
    "text": "dopri5 with 32bit integers, see dopri5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dopri5_impl",
    "page": "Docstrings",
    "title": "ODEInterface.dopri5_impl",
    "category": "function",
    "text": " function dopri5_impl(rhs, \n         t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE, \n         args::DopriArguments{FInt}) where FInt<:FortranInt\n\nimplementation of dopri5 for FInt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dopri_extract_commonOpt",
    "page": "Docstrings",
    "title": "ODEInterface.dopri_extract_commonOpt",
    "category": "function",
    "text": " function dopri_extract_commonOpt(\n         t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE, \n         args::DopriArguments{FInt}) where FInt<:FortranInt\n       -> (d,nrdense,rhs_mode,output_mode,output_fcn)\n\ncalls solverextractcommonOpt and additionally sets args.ITOL, args.IOUT \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.dummy_func",
    "page": "Docstrings",
    "title": "ODEInterface.dummy_func",
    "category": "function",
    "text": "dummy function returning nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.evalSolution",
    "page": "Docstrings",
    "title": "ODEInterface.evalSolution",
    "category": "function",
    "text": " function evalSolution(sol::ColnewSolution{FInt},\n   t::Real, z::Vector{Float64}) where FInt<:FortranInt\n\nEvaluates an already obtained solution sol at time t. The values of the solution are saved in z which must be a  vector (of length d).  t must be in the interval [a,b] where the problem was solved.\n\n\n\n\n\n function evalSolution(sol::ColnewSolution{FInt}, \n   t::Real) where FInt<:FortranInt\n\nEvaluates an already obtained solution sol at time t. A newly allocated vector with the solution values is retured. t must be in the interval [a,b] where the problem was solved.\n\n\n\n\n\n  function evalSolution(sol::ColnewSolution{FInt}, \n    t::Vector) where FInt<:FortranInt\n\nEvaluates an already obtained solution sol at time all times in the vector t. A newly allocated matrix of size (length(t), d) with the solution  values is retured. All values of t must be in the interval [a,b] where the problem was solved.\n\n\n\n\n\n function evalSolution(sol::Bvpm2, x::Real, z::Vector{Float64}, \n   dz::Vector{Float64})\n\nEvaluates an already obtained solution sol at scalar point x. The values of the solution are saved in z which must be a  vector (of length d). For the vector dz there are two cases: If dz is a empty vector (of length 0) then the derivates of z are not calculated, otherwise dz has to be a vector (of length d) where the derivates are stored.\n\n\n\n\n\n function evalSolution(sol::Bvpm2, x::Real)  -> z\n\nAllocates vector z and calls evalSolution(sol, x, z).\n\n\n\n\n\n function evalSolution(sol::Bvpm2, x::Vector{Float64}, \n   z::Matrix{Float64}, dz::Matrix{Float64})\n\nEvaluates an already obtained solution sol at scalar point x. The values of the solution are saved in z which must be a  vector (of length d). For the vector dz there are two cases: If dz is a empty vector (of length 0) then the derivates of z are not calculated, otherwise dz has to be a vector (of length d) where the derivates are stored.\n\n\n\n\n\n function evalSolution(sol::Bvpm2, x::Vector{Float64}) -> z\n\nAllocates matrix z and calls evalSolution(sol, x, z).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.eval_sol_fcn_done",
    "page": "Docstrings",
    "title": "ODEInterface.eval_sol_fcn_done",
    "category": "function",
    "text": "(Dummy-)evalsolfunction, throwing an error, telling the caller,  that this is the DONE-call of the output function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.eval_sol_fcn_init",
    "page": "Docstrings",
    "title": "ODEInterface.eval_sol_fcn_init",
    "category": "function",
    "text": "(Dummy-)evalsolfunction, throwing an error, telling the caller,  that this is the INIT-call of the output function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.eval_sol_fcn_noeval",
    "page": "Docstrings",
    "title": "ODEInterface.eval_sol_fcn_noeval",
    "category": "function",
    "text": "(Dummy-)evalsolfunction, throwing an error, telling the caller,  that no evaluation is possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractCommonRadauOpt",
    "page": "Docstrings",
    "title": "ODEInterface.extractCommonRadauOpt",
    "category": "function",
    "text": "extracts options specific to radau5 and to radau. Fills in args: IWORK[1,2,4,5,6,7,8], WORK[1,2,3,5,6], RPAR, IDID, FCN, SOLOUT\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractJacobiOpt",
    "page": "Docstrings",
    "title": "ODEInterface.extractJacobiOpt",
    "category": "function",
    "text": " function extractJacobiOpt(d::FInt,\n         M1::FInt,M2::FInt, NM1::FInt,\n         args::AbstractArgumentsODESolver{FInt}, \n         opt::AbstractOptionsODE) where FInt<:FortranInt\n\nextracts jacobi options and fills IJAC, MLJAC and MUJAC in args.\n\nreads options: OPT_JACOBIMATRIX, OPT_JACOBIBANDSTRUCT\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractLogOptions",
    "page": "Docstrings",
    "title": "ODEInterface.extractLogOptions",
    "category": "function",
    "text": " function extractLogOptions(opt::AbstractOptionsODE) -> (lio, lev)\n\nExtract options for logging.\n\nthrows ArgumentErrorODE if logio is not an IO or if loglevel is not convertable to UInt64.\n\nreads options: OPT_LOGIO, OPT_LOGLEVEL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractMassMatrix",
    "page": "Docstrings",
    "title": "ODEInterface.extractMassMatrix",
    "category": "function",
    "text": " function extractMassMatrix(M1::FInt, M2::FInt, \n         NM1::FInt, args::AbstractArgumentsODESolver{FInt},\n         opt::AbstractOptionsODE) where FInt<:FortranInt\n\nextracts mass matrix and fills IMAS, MLMAS und MUMAS in args.\n\nreads options: OPT_MASSMATRIX\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractOutputFcn",
    "page": "Docstrings",
    "title": "ODEInterface.extractOutputFcn",
    "category": "function",
    "text": " function extractOutputFcn(opt::AbstractOptionsODE) \n        -> (output_mode, output_fcn)\n\nreads options: OPT_OUTPUTMODE, OPT_OUTPUTFCN\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractRhsTimeDerivOpt",
    "page": "Docstrings",
    "title": "ODEInterface.extractRhsTimeDerivOpt",
    "category": "function",
    "text": " function extractRhsTimeDerivOpt(\n         args::AbstractArgumentsODESolver{FInt}, \n         opt::AbstractOptionsODE) where FInt<:FortranInt\n\nextracts options for callback function for time-derivatives  of the right-hand-side and fills IDFX in args.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractSlatecJacobiOpt",
    "page": "Docstrings",
    "title": "ODEInterface.extractSlatecJacobiOpt",
    "category": "function",
    "text": " function extractSlatecJacobiOpt(d::FInt,\n         opt::AbstractOptionsODE) where FInt<:FortranInt\n\nextracts jacobi options for some SLATEC solvers, like ddebdf.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractSlatecOutputAtTimes",
    "page": "Docstrings",
    "title": "ODEInterface.extractSlatecOutputAtTimes",
    "category": "function",
    "text": "handles OPT_OUTPUTATTIMES for some SLATEC solvers, like ddeabm, ddebdf.\n\nreturns always an Float64-Vector. Even if nothing was given by the user. If there was a vector given then it is copied and checked for monotonicity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractSpecialStructureOpt",
    "page": "Docstrings",
    "title": "ODEInterface.extractSpecialStructureOpt",
    "category": "function",
    "text": " function extractSpecialStructureOpt(\n         d::FInt,opt::AbstractOptionsODE) where FInt<:FortranInt\n\nextracts parameters for special structure (M1, M2).\n\nreads options: OPT_M1, OPT_M2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.extractTOLs",
    "page": "Docstrings",
    "title": "ODEInterface.extractTOLs",
    "category": "function",
    "text": " function extractTOLs(d::Integer, opt::AbstractOptionsODE) \n        -> (scalarFlag,rtol,atol)\n\nextract OPT_RTOL and OPT_ATOL and convert to Vector{Float64}.\n\nSupports scalar OPT_RTOL and OPT_ATOL and converts them to a Vector{Float64} of length 1.\n\nreads options: OPT_RTOL, OPT_ATOL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.full",
    "page": "Docstrings",
    "title": "ODEInterface.full",
    "category": "function",
    "text": "For banded matrices: generate and return full/dense matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.fullToArray",
    "page": "Docstrings",
    "title": "ODEInterface.fullToArray",
    "category": "function",
    "text": "Convert banded matrix bm to full matrix. Save full matrix values in f.\n\nf must have the right size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.getAllMethodPtrs",
    "page": "Docstrings",
    "title": "ODEInterface.getAllMethodPtrs",
    "category": "function",
    "text": "return all method-pointers for a solver.\n\ntries to return all method_ptrs for all methods of a solver. This method checks if the method_ptrs are existent and different from C_NULL. If not then this method tries to load the  dlname ODE-Solver with the loadODESolvers method and checks again.  If even after this the method_ptrs are not found a exception is thrown.\n\nsee loadODESolvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.getMatrixCheckSize",
    "page": "Docstrings",
    "title": "ODEInterface.getMatrixCheckSize",
    "category": "function",
    "text": " function getMatrixCheckSize(mat,T::DataType,\n              m::Integer,n::Integer,docopy=true) -> Matrix{T}\n\ntry to convert to Matrix{T}\' and checks the size. if thedocopyargument istruethen the return value will always be a different object thanmat: Ifconvert` didn\'t need to create a copy then this is done by this function.\n\nthrows ArgumentErrorODE this is not possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.getOption",
    "page": "Docstrings",
    "title": "ODEInterface.getOption",
    "category": "function",
    "text": "function getOption(opt::AbstractOptionsODE,name::AbstractString,                       default::Any=nothing)\n\nget saved value of option with given name or default  if option is unknown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.getSolutionGrid",
    "page": "Docstrings",
    "title": "ODEInterface.getSolutionGrid",
    "category": "function",
    "text": " function getSolutionGrid(sol::ColnewSolution{FInt})\n          where FInt<:FortranInt\n\nreturnes a Float64-vector with the (last) grid points used.\n\n\n\n\n\nsame as bvpm2getx.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.getVectorCheckLength",
    "page": "Docstrings",
    "title": "ODEInterface.getVectorCheckLength",
    "category": "function",
    "text": " function getVectorCheckLength(vec,T::DataType,d::Integer,copy=true)\n                   -> Vector{T}\n\ntry to convert to Vector{T} and checks given length. If the docopy argument is true then the return value will always be a different object than vec: If convert didn\'t need to create a copy then this is done by this function.\n\nthrows ArgumentErrorODE this is not possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.get_proxy_methods",
    "page": "Docstrings",
    "title": "ODEInterface.get_proxy_methods",
    "category": "function",
    "text": "get all (proxy-)methods for bvpm2 object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.get_view_function",
    "page": "Docstrings",
    "title": "ODEInterface.get_view_function",
    "category": "function",
    "text": "returns function view or function sub for generating views to arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.guess_path_of_module",
    "page": "Docstrings",
    "title": "ODEInterface.guess_path_of_module",
    "category": "function",
    "text": "attemt to get the path of this module.\n\nReturns path or nothing. May throw exceptions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_bvpm2_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_bvpm2_compile",
    "category": "function",
    "text": "Compile BVP_M-2\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://cs.stmarys.ca/~muir/BVP_SOLVER_Webpage.shtml\n\nSee help_bvpm3_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile BVP_M-2 with Float64 reals (and Int64 integers with gfortran):\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o bvp_la-2.o bvp_la-2.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o bvp_m-2.o bvp_m-2.f90\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o bvp_m_proxy.o bvp_m_proxy.f90\n\nThe last file bvp_m_proxy.f90 is a Julia/C-Proxy and is part of this ODEInterface package.\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o bvp_m_proxy.so \n          bvp_m_proxy.o bvp_m-2.o bvp_la-2.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_bvpm2_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_bvpm2_license",
    "category": "function",
    "text": "Licence\n\nBVP_SOLVER, Release 2, with global error estimation and control options. Copyright (c) 2012, Jason Boisvert, Paul Muir, Ray Spiteri. Jason Boisvert, Ray Spiteri, Department of Computer Science, University of Saskatchewan. Paul Muir, Mathematics and Computing Science, Saint Mary\'s University. All rights reserved.\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:     * Redistributions of source code must retain the above copyright       notice, this list of conditions and the following disclaimer.     * Redistributions in binary form must reproduce the above copyright       notice, this list of conditions and the following disclaimer in the       documentation and/or other materials provided with the distribution.     * Neither Saint Mary\'s University nor Southern Methodist University nor        the names of its contributors may be used to endorse or promote products       derived from this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY Jason Boisvert, Paul Muir, and Ray Spiteri \'\'AS IS\'\' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Paul Muir and Larry Shampine BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\nSee documentation below for FUNCTION BVPSOLVER for a description of the changes to the argument list for BVPSOLVER. \n\nCopyright (c) 2006, Paul Muir and Larry Shampine. Paul Muir, Mathematics and Computing Science, Saint Mary\'s University. Larry Shampine, Mathematics, Southern Methodist University. All rights reserved.\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:     * Redistributions of source code must retain the above copyright       notice, this list of conditions and the following disclaimer.     * Redistributions in binary form must reproduce the above copyright       notice, this list of conditions and the following disclaimer in the       documentation and/or other materials provided with the distribution.     * Neither Saint Mary\'s University nor Southern Methodist University nor        the names of its contributors may be used to endorse or promote products       derived from this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY Paul Muir and Larry Shampine \'\'AS IS\'\' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Paul Muir and Larry Shampine BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\nL.F. Shampine, P.H. Muir, H. Xu, A user-friendly Fortran BVP solver,  J. Numer. Anal. Indust. Appl. Math., 1, 2006, 201–217.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_bvpm2_proxy",
    "page": "Docstrings",
    "title": "ODEInterface.help_bvpm2_proxy",
    "category": "function",
    "text": "Please call this help_bvpm2_proxy function to get an detailed description of the Fortran-Proxy written for BVP_M-2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_bvpsol_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_bvpsol_compile",
    "category": "function",
    "text": "Compile BVPSOL\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://elib.zib.de/pub/elib/codelib/bvpsol/\n\nSee help_bvpsol_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile BVPSOL with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o bvpsol.o bvpsol.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o linalg_bvpsol.o linalg_bvpsol.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o zibconst.o zibconst.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o ma28_bvpsol.o ma28_bvpsol.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o bvpsol.so \n          bvpsol.o linalg_bvpsol.o zibconst.o ma28_bvpsol.o\n gfortran -shared -fPIC -o bvpsol.dylib\n          bvpsol.o linalg_bvpsol.o zibconst.o ma28_bvpsol.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile BVPSOL with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o bvpsol.o bvpsol.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o linalg_bvpsol.o linalg_bvpsol.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o zibconst.o zibconst.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o ma28_bvpsol.o ma28_bvpsol.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o bvpsol.so \n          bvpsol.o linalg_bvpsol.o zibconst.o ma28_bvpsol.o\n\nUsing gfortran and 32bit integers (Linux and Mac)\n\nHere is an example how to compile BVPSOL with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o bvpsol_i32.o bvpsol.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o linalg_bvpsol_i32.o linalg_bvpsol.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o zibonst_i32.o zibconst.f \n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o ma28_bvpsol_i32.o ma28_bvpsol.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o bvpsol_i32.so \n           bvpsol_i32.o linalg_bvpsol_i32.o zibconst_i32.o ma28_bvpsol_i32.o\n gfortran -shared -fPIC -o bvpsol_i32.dylib\n           bvpsol_i32.o linalg_bvpsol_i32.o zibconst_i32.o ma28_bvpsol_i32.o\n\nUsing gfortran and 32bit integers (Windows)\n\nHere is an example how to compile BVPSOL with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o bvpsol_i32.o bvpsol.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o linalg_bvpsol_i32.o linalg_bvpsol.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o zibconst_i32.o zibconst.f \n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o ma28_bvpsol_i32.o ma28_bvpsol.f\n\nIn order to get create a shared library (from the object file above) use:\n\n gfortran -shared -o bvpsol_i32.dll\n           bvpsol_i32.o linalg_bvplsol_i32.o zibconst_i32.o\n           ma28_bvpsol_i32.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_bvpsol_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_bvpsol_license",
    "category": "function",
    "text": "Licence\n\nYou may use or modify this code for your own non commercial purposes for an unlimited time. This code can be distributed in unmodified form as part of the complete ODEInterface packet. Apart from that, you should not deliver it without a special permission of the Zuse Institute Berlin (ZIB). In case you intend to use the code commercially, we oblige you to sign an according licence agreement with ZIB.\n\nWarranty\n\nThis code has been tested up to a certain level. Defects and weaknesses, which may be included in the code, do not establish any warranties by ZIB. ZIB does not take over any liabilities which may follow from aquisition or application of this code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_callsolvers",
    "page": "Docstrings",
    "title": "ODEInterface.help_callsolvers",
    "category": "function",
    "text": "Calling the Solvers\n\nThere are two ways of calling the solvers.\n\nA calling convention close to the original Fortran-call, trying to provide/expose all the features the Fortran-codes have.\nA simplified version, closer to odecalls like in MATLAB.\n\nThe full-featured calling-method\n\nAll ODE-solvers have the same calling convention:\n\n(t,x,retcode,stats) = \n    odesolver(rhs, t0::Real, T::Real,\n              x0::Vector, opt::AbstractOptionsODErhs)\n\nfunction rhs(t::Float64,x::Vector{Float64}) -> Vector{Float64}\n    if OPT_RHS_CALLMODE == RHS_CALL_RETURNS_ARRAY\n\nfunction rhs(t::Float64,x::Vector{Float64},dx::Vector{Float64}) \n    if OPT_RHS_CALLMODE == RHS_CALL_INSITU\n\nThe input arguments are:\n\na julia function rhs for evaluating the right-hand side of the ODE, see below. It\'s OK to return something, that convert can transform to a Vector{Float64}.\nthe initial time t0. (t0,x0) is the initial value of the  initial value problem.\nthe final time T.\nthe initial state x0. (t0,x0) is the initial value of the  initial value problem.\nfurther parameters/options in opt for the solver and for the interface.  There is a separate section for the explanation of the options, see help_options.\n\nThe output arguments are:\n\nt the last time for which the solution has been computed  (if the whole computation was successfull, then t==T)\nx the numerical solation at time t\nretcode the return code of the solver (interpretation is solver dependent)\n\nThere are two possible ways to provide the Julia right-hand side:\n\nfunction rhs(t::Float64,x::Vector{Float64}) -> Vector{Float64}\n\nThis is used, if OPT_RHS_CALLMODE == RHS_CALL_RETURNS_ARRAY. So you can use anonymous functions like (t,x) -> x as right-hand sides. But this form has a price: every time the right-hand side is called, a temporary Array is created (the result). The form\n\nfunction rhs(t::Float64,x::Vector{Float64},dx::Vector{Float64}) \n             -> nothing\n\nused if OPT_RHS_CALLMODE == RHS_CALL_INSITU does not have this problem. But the right-hand side must be a function filling in the values of x\' in dx.\n\nThe simplified version\n\nThere is a simplified calling convention (using the methods above) to provide a method like odecalls in MATLAB,  see odecall.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_colnew_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_colnew_compile",
    "category": "function",
    "text": "Compile COLNEW\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n https://people.sc.fsu.edu/~jburkardt/f77_src/colnew/colnew.html\n\nSee help_colnew_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile BVPSOL with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o colnew.o colnew.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o colnew.so colnew.o\n gfortran -shared -fPIC -o colnew.dylib colnew.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile BVPSOL with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o colnew.o colnew.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o colnew.dll colnew.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_colnew_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_colnew_license",
    "category": "function",
    "text": "Licence\n\nColnew is licensed under the GNU LGPL license.\n\nSee Colnew Hompage.\n\n                 GNU LESSER GENERAL PUBLIC LICENSE\n                       Version 3, 29 June 2007\n\n Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>\n Everyone is permitted to copy and distribute verbatim copies\n of this license document, but changing it is not allowed.\n\n\n  This version of the GNU Lesser General Public License incorporates\nthe terms and conditions of version 3 of the GNU General Public\nLicense, supplemented by the additional permissions listed below.\n\n  0. Additional Definitions.\n\n  As used herein, \"this License\" refers to version 3 of the GNU Lesser\nGeneral Public License, and the \"GNU GPL\" refers to version 3 of the GNU\nGeneral Public License.\n\n  \"The Library\" refers to a covered work governed by this License,\nother than an Application or a Combined Work as defined below.\n\n  An \"Application\" is any work that makes use of an interface provided\nby the Library, but which is not otherwise based on the Library.\nDefining a subclass of a class defined by the Library is deemed a mode\nof using an interface provided by the Library.\n\n  A \"Combined Work\" is a work produced by combining or linking an\nApplication with the Library.  The particular version of the Library\nwith which the Combined Work was made is also called the \"Linked\nVersion\".\n\n  The \"Minimal Corresponding Source\" for a Combined Work means the\nCorresponding Source for the Combined Work, excluding any source code\nfor portions of the Combined Work that, considered in isolation, are\nbased on the Application, and not on the Linked Version.\n\n  The \"Corresponding Application Code\" for a Combined Work means the\nobject code and/or source code for the Application, including any data\nand utility programs needed for reproducing the Combined Work from the\nApplication, but excluding the System Libraries of the Combined Work.\n\n  1. Exception to Section 3 of the GNU GPL.\n\n  You may convey a covered work under sections 3 and 4 of this License\nwithout being bound by section 3 of the GNU GPL.\n\n  2. Conveying Modified Versions.\n\n  If you modify a copy of the Library, and, in your modifications, a\nfacility refers to a function or data to be supplied by an Application\nthat uses the facility (other than as an argument passed when the\nfacility is invoked), then you may convey a copy of the modified\nversion:\n\n   a) under this License, provided that you make a good faith effort to\n   ensure that, in the event an Application does not supply the\n   function or data, the facility still operates, and performs\n   whatever part of its purpose remains meaningful, or\n\n   b) under the GNU GPL, with none of the additional permissions of\n   this License applicable to that copy.\n\n  3. Object Code Incorporating Material from Library Header Files.\n\n  The object code form of an Application may incorporate material from\na header file that is part of the Library.  You may convey such object\ncode under terms of your choice, provided that, if the incorporated\nmaterial is not limited to numerical parameters, data structure\nlayouts and accessors, or small macros, inline functions and templates\n(ten or fewer lines in length), you do both of the following:\n\n   a) Give prominent notice with each copy of the object code that the\n   Library is used in it and that the Library and its use are\n   covered by this License.\n\n   b) Accompany the object code with a copy of the GNU GPL and this license\n   document.\n\n  4. Combined Works.\n\n  You may convey a Combined Work under terms of your choice that,\ntaken together, effectively do not restrict modification of the\nportions of the Library contained in the Combined Work and reverse\nengineering for debugging such modifications, if you also do each of\nthe following:\n\n   a) Give prominent notice with each copy of the Combined Work that\n   the Library is used in it and that the Library and its use are\n   covered by this License.\n\n   b) Accompany the Combined Work with a copy of the GNU GPL and this license\n   document.\n\n   c) For a Combined Work that displays copyright notices during\n   execution, include the copyright notice for the Library among\n   these notices, as well as a reference directing the user to the\n   copies of the GNU GPL and this license document.\n\n   d) Do one of the following:\n\n       0) Convey the Minimal Corresponding Source under the terms of this\n       License, and the Corresponding Application Code in a form\n       suitable for, and under terms that permit, the user to\n       recombine or relink the Application with a modified version of\n       the Linked Version to produce a modified Combined Work, in the\n       manner specified by section 6 of the GNU GPL for conveying\n       Corresponding Source.\n\n       1) Use a suitable shared library mechanism for linking with the\n       Library.  A suitable mechanism is one that (a) uses at run time\n       a copy of the Library already present on the user\'s computer\n       system, and (b) will operate properly with a modified version\n       of the Library that is interface-compatible with the Linked\n       Version.\n\n   e) Provide Installation Information, but only if you would otherwise\n   be required to provide such information under section 6 of the\n   GNU GPL, and only to the extent that such information is\n   necessary to install and execute a modified version of the\n   Combined Work produced by recombining or relinking the\n   Application with a modified version of the Linked Version. (If\n   you use option 4d0, the Installation Information must accompany\n   the Minimal Corresponding Source and Corresponding Application\n   Code. If you use option 4d1, you must provide the Installation\n   Information in the manner specified by section 6 of the GNU GPL\n   for conveying Corresponding Source.)\n\n  5. Combined Libraries.\n\n  You may place library facilities that are a work based on the\nLibrary side by side in a single library together with other library\nfacilities that are not Applications and are not covered by this\nLicense, and convey such a combined library under terms of your\nchoice, if you do both of the following:\n\n   a) Accompany the combined library with a copy of the same work based\n   on the Library, uncombined with any other library facilities,\n   conveyed under the terms of this License.\n\n   b) Give prominent notice with the combined library that part of it\n   is a work based on the Library, and explaining where to find the\n   accompanying uncombined form of the same work.\n\n  6. Revised Versions of the GNU Lesser General Public License.\n\n  The Free Software Foundation may publish revised and/or new versions\nof the GNU Lesser General Public License from time to time. Such new\nversions will be similar in spirit to the present version, but may\ndiffer in detail to address new problems or concerns.\n\n  Each version is given a distinguishing version number. If the\nLibrary as you received it specifies that a certain numbered version\nof the GNU Lesser General Public License \"or any later version\"\napplies to it, you have the option of following the terms and\nconditions either of that published version or of any later version\npublished by the Free Software Foundation. If the Library as you\nreceived it does not specify a version number of the GNU Lesser\nGeneral Public License, you may choose any version of the GNU Lesser\nGeneral Public License ever published by the Free Software Foundation.\n\n  If the Library as you received it specifies that a proxy can decide\nwhether future versions of the GNU Lesser General Public License shall\napply, that proxy\'s public statement of acceptance of any version is\npermanent authorization for you to choose that version for the\nLibrary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_ddeabm_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_ddeabm_compile",
    "category": "function",
    "text": "Compile DDEABM\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.netlib.org/slatec/src/\n\nSee help_ddeabm_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux, Mac and Windows)\n\nHere is an example how to compile DDEABM with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 -o slatec.o slatec.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 -o ddeabm.o ddeabm.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac, 3rd for Window):\n\n gfortran -shared -fPIC -o ddeabm.so ddeabm.o slatec.o\n gfortran -shared -fPIC -o ddeabm.dylib ddeabm.o slatec.o\n gfortran -shared       -o ddeabm.dll ddeabm.o slatec.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_ddeabm_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_ddeabm_license",
    "category": "function",
    "text": "License\n\nThe solver ddeabm is part of the SLATEC Common Mathematical Library which is in the public domain. More informations can be found at\n\n http://www.netlib.org/slatec/guide\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_ddebdf_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_ddebdf_compile",
    "category": "function",
    "text": "Compile DDEBDF\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.netlib.org/slatec/src/\n\nSee help_ddebdf_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux, Mac and Windows)\n\nHere is an example how to compile DDEBDF with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 -o slatec.o slatec.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 -o ddebdf.o ddbdfm.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac, 3rd for Window):\n\n gfortran -shared -fPIC -o ddebdf.so ddebdf.o slatec.o\n gfortran -shared -fPIC -o ddebdf.dylib ddebdf.o slatec.o\n gfortran -shared       -o ddebdf.dll ddebdf.o slatec.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_ddebdf_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_ddebdf_license",
    "category": "function",
    "text": "License\n\nThe solver ddeabm is part of the SLATEC Common Mathematical Library which is in the public domain. More informations can be found at\n\n http://www.netlib.org/slatec/guide\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_dop853_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_dop853_compile",
    "category": "function",
    "text": "Compile DOP853\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.unige.ch/~hairer/software.html\n\nSee help_dop853_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile DOP853 with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dop853.o dop853.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o dop853.so dop853.o\n gfortran -shared -fPIC -o dop853.dylib dop853.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile DOP853 with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dop853.o dop853.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o dop853.dll dop853.o\n\nUsing gfortran and 32bit integers (Linux and Mac)\n\nHere is an example how to compile DOP853 with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fPIC  \n          -fdefault-real-8 -fdefault-double-8 \n          -o dop853_i32.o   dop853.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o dop853_i32.so dop853_i32.o\n gfortran -shared -fPIC -o dop853_i32.dylib dop853_i32.o\n\nUsing gfortran and 32bit integers (Windows)\n\nHere is an example how to compile DOP853 with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c\n          -fdefault-real-8 -fdefault-double-8 \n          -o dop853_i32.o   dop853.f\n\nIn order to get create a shared library (from the object file above) use:\n\n gfortran -shared -o dop853_i32.dll dop853_i32.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_dop853_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_dop853_license",
    "category": "function",
    "text": "License\n\nThis is the license text, which can also be found at\n\n http://www.unige.ch/~hairer/prog/licence.txt\n\nCopyright (c) 2004, Ernst Hairer\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\nRedistributions of source code must retain the above copyright \n\nnotice, this list of conditions and the following disclaimer.\n\nRedistributions in binary form must reproduce the above copyright \n\nnotice, this list of conditions and the following disclaimer in the  documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS  IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_dopri5_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_dopri5_compile",
    "category": "function",
    "text": "Compile DOPRI5\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.unige.ch/~hairer/software.html\n\nSee help_dopri5_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile DOPRI5 with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dopri5.o dopri5.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o dopri5.so dopri5.o\n gfortran -shared -fPIC -o dopri5.dylib dopri5.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile DOPRI5 with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dopri5.o dopri5.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o dopri5.dll dopri5.o\n\nUsing gfortran and 32bit integers (Linux and Mac)\n\nHere is an example how to compile DOPRI5 with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fPIC  \n          -fdefault-real-8 -fdefault-double-8 \n          -o dopri5_i32.o   dopri5.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o dopri5_i32.so dopri5_i32.o\n gfortran -shared -fPIC -o dopri5_i32.dylib dopri5_i32.o\n\nUsing gfortran and 32bit integers (Windows)\n\nHere is an example how to compile DOPRI5 with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c\n          -fdefault-real-8 -fdefault-double-8 \n          -o dopri5_i32.o   dopri5.f\n\nIn order to get create a shared library (from the object file above) use:\n\n gfortran -shared -o dopri5_i32.dll dopri5_i32.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_dopri5_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_dopri5_license",
    "category": "function",
    "text": "License\n\nThis is the license text, which can also be found at\n\n http://www.unige.ch/~hairer/prog/licence.txt\n\nCopyright (c) 2004, Ernst Hairer\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\nRedistributions of source code must retain the above copyright \n\nnotice, this list of conditions and the following disclaimer.\n\nRedistributions in binary form must reproduce the above copyright \n\nnotice, this list of conditions and the following disclaimer in the  documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS  IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_install",
    "page": "Docstrings",
    "title": "ODEInterface.help_install",
    "category": "function",
    "text": "Installation\n\nBecause this module is an interface for C-/Fortran-ODE-solvers, you need to compile/link the solvers before you can use them.\n\nAll solvers are dynamically loaded (at julia runtime), see loadODESolvers. Therefor a shared library is needed for every solver, i.e. you have to compile each solver and create a shared library.\n\nSee help_solversupport for a list with supported solvers and for further informations how to compile/link the solvers.\n\nThis module has its own build script deps/build.jl which tries to compile and link the shared libraries automatically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_internals",
    "page": "Docstrings",
    "title": "ODEInterface.help_internals",
    "category": "function",
    "text": "Internals\n\nWhat is the typical \"call stack\" for all this callbacks? see documentation of DopriInternalCallInfos,  OdexInternalCallInfos and Radau5InternalCallInfos.\nWhat closures (and how many) are generated to support the evalsolfcn? see create_radau_eval_sol_fcn_closure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_loadsolvers",
    "page": "Docstrings",
    "title": "ODEInterface.help_loadsolvers",
    "category": "function",
    "text": "Loading the solvers\n\nAll ODE solvers are dynamically loaded. See help_install for  informations how to create such shared libraries for the solvers.\n\nBefore using a solver for the 1st time, it has to be loaded by a call of loadODESolvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_odex_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_odex_compile",
    "category": "function",
    "text": "Compile ODEX\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.unige.ch/~hairer/software.html\n\nSee help_odex_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile ODEX with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o odex.o odex.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o odex.so odex.o\n gfortran -shared -fPIC -o odex.dylib odex.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile ODEX with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o odex.o odex.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o odex.dll odex.o\n\nUsing gfortran and 32bit integers (Linux and Mac)\n\nHere is an example how to compile ODEX with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fPIC  \n          -fdefault-real-8 -fdefault-double-8 \n          -o odex_i32.o   odex.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o odex_i32.so odex_i32.o\n gfortran -shared -fPIC -o odex_i32.dylib odex_i32.o\n\nUsing gfortran and 32bit integers (Windows)\n\nHere is an example how to compile ODEX with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c\n          -fdefault-real-8 -fdefault-double-8 \n          -o odex_i32.o   odex.f\n\nIn order to get create a shared library (from the object file above) use:\n\n gfortran -shared -o odex_i32.dll odex_i32.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_odex_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_odex_license",
    "category": "function",
    "text": "License\n\nThis is the license text, which can also be found at\n\n http://www.unige.ch/~hairer/prog/licence.txt\n\nCopyright (c) 2004, Ernst Hairer\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\nRedistributions of source code must retain the above copyright \n\nnotice, this list of conditions and the following disclaimer.\n\nRedistributions in binary form must reproduce the above copyright \n\nnotice, this list of conditions and the following disclaimer in the  documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS  IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_options",
    "page": "Docstrings",
    "title": "ODEInterface.help_options",
    "category": "function",
    "text": "The opt Argument: the Options\n\nAll options are handled by OptionsODE. See OptionsODE how to query, set and change options.\n\nThere are the following classes of options.\n\nOptions for this ODEInterface (common for all solvers)\nOptions for the ODE solvers\n\nOptions of this ODEInterface\n\nOPT_RHS_CALLMODE: There are two possible ways to call the Julia right-hand side:  RHS_CALL_RETURNS_ARRAY and RHS_CALL_INSITU, see help_callsolvers for an explanation. difference.\nOPT_LOGIO: This option sets the IO that is used for logging messages\nOPT_LOGLEVEL: This is a bitmask for activating different logging messages.  The following bitmasks are available.\n   LOG_NOTHING     log nothing\n   LOG_GENERAL     log some general information, \n                   especially the main julia call of the solver\n   LOG_RHS         log all calls of the right-hand side\n   LOG_SOLVERARGS  log the arguments for the C-/Fortran-calls\n                   before and after the call\n   LOG_OUTPUTFCN   log calls of the julia output function\n   LOG_SOLOUT      log calls of the solution output routine\n   LOG_EVALSOL     log calls of the eval_sol_fcn\n   LOG_MASS        log call(s) of the mass function\n   LOG_JAC         log calls of the jacobian function of RHS\n   LOG_BC          log calls of the boundary condition function\n   LOG_BVPIVPSOL   log (during boundary value problems) calls to\n                   initial value solvers\n   LOG_RHSDT       log calls of the right-hand side time-derivative\n   LOG_JACBC       log calls of the jacobian of the boundary condition\n   LOG_GUESS       log calls to the guess function\n   LOG_ALL         all of the above\n\nOptions for the solvers\n\nDifferent solvers support different options. All the options a solver supports are listed in the help-command of the specific solver, e.g. help_dopri5.\n\nTo get an overview, what options are supported by what solvers, call ODEInterface.help_options().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_outputfcn",
    "page": "Docstrings",
    "title": "ODEInterface.help_outputfcn",
    "category": "function",
    "text": "OPT_OUTPUTMODE\n\nThis option determines if the OPT_OUTPUTFCN is called, and if dense output (the eval_sol_fcn) is prepared/supported.\n\nOUTPUTFCN_NEVER: don\'t call the output function\nOUTPUTFCN_WODENSE: call the output function, but eval_sol_fcn is not used\nOUTPUTFCN_DENSE: call the output function and prepare eval_sol_fcn\n\nOPT_OUTPUTFCN\n\n function outputfcn(reason::OUTPUTFCN_CALL_REASON,\n  told::Float64,t::Float64, x::Vector{Float64},eval_sol_fcn::Function,\n  extra_data::Dict)  -> OUTPUTFCN_RETURN_VALUE\n\nA (julia) function that is called \n\nat beginning of the solution process with reason == OUTPUTFCN_CALL_INIT, told=t0, t=T, x=x0, eval_sol_fcn a dummy function throwing an error if called, extra_data a Dict persistent until the last call of the output  function. The return value is ignored.\nafter every successfull integration step with reason == OUTPUTFCN_CALL_STEP, [told,t] the time interval of the last step, x the numerical solution at time t, eval_sol_fcn a function to evaluate the solution in t1 ∊ [told,t], if requested by OPT_OUTPUTMODE, otherwise a call to this function will result in an error.\nat the end (after the last step) with reason == OUTPUTFCN_CALL_DONE. The return value is ignored.\n\nWith eval_sol_fcn\n\n    function eval_sol_fcn(t1::Float64) -> Vector{Float64}\n\nthe numerical solution can be evaluted in the time interval [told,t] (if OPT_OUTPUTMODE == OUTPUTFCN_DENSE).\n\nIf supported by the solver, the numerical solution may be changed in the outputfcn (if reason == OUTPUTFCN_CALL_STEP) and the solver continues the process with the changed solution. The return value OUTPUTFCN_RET_CONTINUE_XCHANGED indicates  this. OUTPUTFCN_RET_CONTINUE tells the solver to continue (without changes in x) and OUTPUTFCN_RET_STOP tells the solver to stop the solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_overview",
    "page": "Docstrings",
    "title": "ODEInterface.help_overview",
    "category": "function",
    "text": "Overview\n\nImporting all help topics\n\nYou can use\n\n using ODEInterface\n @ODEInterface.import_help\n\nto have all help_... commands imported; so you can use\n\n ?help_overview\n help_overview()\n\nHelp topics\n\n help_install          requirements, installation, compiling the solvers\n help_solversupport    supported ODE solvers\n help_loadsolvers      loading the ODE solvers\n help_callsolvers      how to call the ODE solvers\n help_options          how to use parameters/options for solvers\n help_outputfcn        how to use \"output functions\", dense output\n help_specialstructure support for problems with \"special structure\"\n \n help_internals        some internal/developer information\n\nHelp for each solver\n\nEach solver has its own help page. Just look at the documentation of dopri5, dop853, odex, radau5, radau, rodas, seulex, bvpsol, ddeabm and Bvpm2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_radau5_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_radau5_compile",
    "category": "function",
    "text": "Compile RADAU5\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.unige.ch/~hairer/software.html\n\nSee help_radau5_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile RADAU5 with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack.o dc_lapack.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapack.o lapack.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapackc.o lapackc.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o radau5.o radau5.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o radau5.so \n          radau5.o dc_lapack.o lapack.o lapackc.o\n gfortran -shared -fPIC -o radau5.dylib\n          radau5.o dc_lapack.o lapack.o lapackc.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile RADAU5 with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack.o dc_lapack.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapack.o lapack.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapackc.o lapackc.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o radau5.o radau5.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o radau5.so \n          radau5.o dc_lapack.o lapack.o lapackc.o\n\nUsing gfortran and 32bit integers (Linux and Mac)\n\nHere is an example how to compile RADAU5 with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack_i32.o dc_lapack.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o lapack_i32.o lapack.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o lapackc_i32.o lapackc.f \n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o radau5_i32.o radau5.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o radau5_i32.so \n           radau5_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n gfortran -shared -fPIC -o radau5_i32.dylib\n           radau5_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n\nUsing gfortran and 32bit integers (Windows)\n\nHere is an example how to compile RADAU5 with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack_i32.o dc_lapack.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o lapack_i32.o lapack.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o lapackc_i32.o lapackc.f \n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o radau5_i32.o radau5.f\n\nIn order to get create a shared library (from the object file above) use:\n\n gfortran -shared -o radau5_i32.dll\n           radau5_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_radau5_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_radau5_license",
    "category": "function",
    "text": "License\n\nThis is the license text, which can also be found at\n\n http://www.unige.ch/~hairer/prog/licence.txt\n\nCopyright (c) 2004, Ernst Hairer\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\nRedistributions of source code must retain the above copyright \n\nnotice, this list of conditions and the following disclaimer.\n\nRedistributions in binary form must reproduce the above copyright \n\nnotice, this list of conditions and the following disclaimer in the  documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS  IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_radau_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_radau_compile",
    "category": "function",
    "text": "Compile RADAU\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.unige.ch/~hairer/software.html\n\nSee help_radau_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile RADAU with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack.o dc_lapack.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapack.o lapack.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapackc.o lapackc.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o radau.o radau.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o radau.so \n          radau.o dc_lapack.o lapack.o lapackc.o\n gfortran -shared -fPIC -o radau.dylib\n          radau.o dc_lapack.o lapack.o lapackc.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile RADAU with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack.o dc_lapack.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapack.o lapack.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapackc.o lapackc.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o radau.o radau.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o radau.so \n          radau.o dc_lapack.o lapack.o lapackc.o\n\nUsing gfortran and 32bit integers (Linux and Mac)\n\nHere is an example how to compile RADAU with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack_i32.o dc_lapack.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o lapack_i32.o lapack.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o lapackc_i32.o lapackc.f \n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o radau_i32.o radau.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o radau_i32.so \n           radau_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n gfortran -shared -fPIC -o radau_i32.dylib\n           radau_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n\nUsing gfortran and 32bit integers (Windows)\n\nHere is an example how to compile RADAU with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack_i32.o dc_lapack.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o lapack_i32.o lapack.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o lapackc_i32.o lapackc.f \n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o radau_i32.o radau.f\n\nIn order to get create a shared library (from the object file above) use:\n\n gfortran -shared -o radau_i32.dll\n           radau_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_radau_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_radau_license",
    "category": "function",
    "text": "License\n\nThis is the license text, which can also be found at\n\n http://www.unige.ch/~hairer/prog/licence.txt\n\nCopyright (c) 2004, Ernst Hairer\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\nRedistributions of source code must retain the above copyright \n\nnotice, this list of conditions and the following disclaimer.\n\nRedistributions in binary form must reproduce the above copyright \n\nnotice, this list of conditions and the following disclaimer in the  documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS  IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_rodas_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_rodas_compile",
    "category": "function",
    "text": "Compile RODAS\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.unige.ch/~hairer/software.html\n\nSee help_rodas_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile RODAS with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack.o dc_lapack.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapack.o lapack.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o rodas.o rodas.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o rodas.so \n          rodas.o dc_lapack.o lapack.o\n gfortran -shared -fPIC -o rodas.dylib\n          rodas.o dc_lapack.o lapack.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile RODAS with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack.o dc_lapack.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapack.o lapack.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o rodas.o rodas.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o rodas.so \n          rodas.o dc_lapack.o lapack.o\n\nUsing gfortran and 32bit integers (Linux and Mac)\n\nHere is an example how to compile RODAS with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack_i32.o dc_lapack.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o lapack_i32.o lapack.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o rodas_i32.o rodas.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o rodas_i32.so \n           rodas_i32.o dc_lapack_i32.o lapack_i32.o\n gfortran -shared -fPIC -o rodas_i32.dylib\n           rodas_i32.o dc_lapack_i32.o lapack_i32.o\n\nUsing gfortran and 32bit integers (Windows)\n\nHere is an example how to compile RODAS with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack_i32.o dc_lapack.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o lapack_i32.o lapack.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o rodas_i32.o rodas.f\n\nIn order to get create a shared library (from the object file above) use:\n\n gfortran -shared -o rodas_i32.dll\n           rodas_i32.o dc_lapack_i32.o lapack_i32.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_rodas_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_rodas_license",
    "category": "function",
    "text": "License\n\nThis is the license text, which can also be found at\n\n http://www.unige.ch/~hairer/prog/licence.txt\n\nCopyright (c) 2004, Ernst Hairer\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\nRedistributions of source code must retain the above copyright \n\nnotice, this list of conditions and the following disclaimer.\n\nRedistributions in binary form must reproduce the above copyright \n\nnotice, this list of conditions and the following disclaimer in the  documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS  IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_seulex_compile",
    "page": "Docstrings",
    "title": "ODEInterface.help_seulex_compile",
    "category": "function",
    "text": "Compile SEULEX\n\nThe julia ODEInterface tries to compile and link the solvers automatically at the build-time of this module. The following calls need only be done, if one uses a different compiler and/or if one wants to change/add some compiler options.\n\nThe Fortran source code can be found at:\n\n http://www.unige.ch/~hairer/software.html\n\nSee help_seulex_license for the licsense information.\n\nUsing gfortran and 64bit integers (Linux and Mac)\n\nHere is an example how to compile SEULEX with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack.o dc_lapack.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapack.o lapack.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapackc.o lapackc.f\n gfortran -c -fPIC -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o seulex.o seulex.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o seulex.so \n          seulex.o dc_lapack.o lapack.o lapackc.o\n gfortran -shared -fPIC -o seulex.dylib\n          seulex.o dc_lapack.o lapack.o lapackc.o\n\nUsing gfortran and 64bit integers (Windows)\n\nHere is an example how to compile SEULEX with Float64 reals and Int64 integers with gfortran:\n\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack.o dc_lapack.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapack.o lapack.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o lapackc.o lapackc.f\n gfortran -c -fdefault-integer-8 \n          -fdefault-real-8 -fdefault-double-8 \n          -o seulex.o seulex.f\n\nIn order to get create a shared library (from the object file above) use\n\n gfortran -shared -o seulex.so \n          seulex.o dc_lapack.o lapack.o lapackc.o\n\nUsing gfortran and 32bit integers (Linux and Mac)\n\nHere is an example how to compile SEULEX with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack_i32.o dc_lapack.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o lapack_i32.o lapack.f\n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o lapackc_i32.o lapackc.f \n gfortran -c -fPIC -fdefault-real-8 -fdefault-double-8 \n          -o seulex_i32.o seulex.f\n\nIn order to get create a shared library (from the object file above) use one of the forms below (1st for Linux, 2nd for Mac):\n\n gfortran -shared -fPIC -o seulex_i32.so \n           seulex_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n gfortran -shared -fPIC -o seulex_i32.dylib\n           seulex_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n\nUsing gfortran and 32bit integers (Windows)\n\nHere is an example how to compile SEULEX with Float64 reals and Int32 integers with gfortran:\n\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o dc_lapack_i32.o dc_lapack.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o lapack_i32.o lapack.f\n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o lapackc_i32.o lapackc.f \n gfortran -c -fdefault-real-8 -fdefault-double-8 \n          -o seulex_i32.o seulex.f\n\nIn order to get create a shared library (from the object file above) use:\n\n gfortran -shared -o seulex_i32.dll\n           seulex_i32.o dc_lapack_i32.o lapack_i32.o lapackc_i32.o\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_seulex_license",
    "page": "Docstrings",
    "title": "ODEInterface.help_seulex_license",
    "category": "function",
    "text": "License\n\nThis is the license text, which can also be found at\n\n http://www.unige.ch/~hairer/prog/licence.txt\n\nCopyright (c) 2004, Ernst Hairer\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\nRedistributions of source code must retain the above copyright \n\nnotice, this list of conditions and the following disclaimer.\n\nRedistributions in binary form must reproduce the above copyright \n\nnotice, this list of conditions and the following disclaimer in the  documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS  IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_solversupport",
    "page": "Docstrings",
    "title": "ODEInterface.help_solversupport",
    "category": "function",
    "text": " function help_solversupport()\n\nThis function (when called) produces a (markdown) object with informations about the supported solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.help_specialstructure",
    "page": "Docstrings",
    "title": "ODEInterface.help_specialstructure",
    "category": "function",
    "text": "Special Structure\n\nSome solvers (e.g. radau5 and radau) supports ODEs with a \"special structure\". In this context an ODE has special structure  if there exists M1>0 and M2>0 and M1 = M⋅M2 for some integer M and\n\n             x\'(k) = x(k+M2)   for all k = 1,…,M1            (*)\n\nThere are the options OPT_M1 and OPT_M2 to tell the solvers, if the ODE has this special structure. In this case only the non-trivial parts of the right-hand side, of the mass matrix and of the Jacobian matrix  had to be supplied.\n\nIf an ODE has the special structure, then the right-hand side  for OPT_RHS_CALLMODE == RHS_CALL_RETURNS_ARRAY has to return a vector of length d-M1 because the right-hand side for the first M1 entries are known from (*). For OPT_RHS_CALLMODE == RHS_CALL_INSITU the right-hand side gets (a reference) to the array of length d, but only the last d-M1 components need to be filled in.\n\nThe mass matrix has the form\n\n     ⎛ 1    │    ⎞ ⎫\n     ⎜  ⋱   │    ⎟ ⎪\n     ⎜   ⋱  │    ⎟ ⎬ M1\n     ⎜    ⋱ │    ⎟ ⎪\nM =  ⎜     1│    ⎟ ⎭\n     ⎜──────┼────⎟\n     ⎜      │    ⎟ ⎫\n     ⎜      │ M̃  ⎟ ⎬ d-M1\n     ⎝      │    ⎠ ⎭\n\nThen there has to be only the (d-M1)×(d-M1) matrix M̃ in OPT_MASSMATRIX. Of course, M̃ can be banded. Then OPT_MASSMATRIX is a BandedMatrix with lower bandwidth < d-M1.\n\nIf an ODE has the special structure, then the Jacobian matrix has the form\n\n     ⎛0   1      ⎞ ⎫\n     ⎜ ⋱   ⋱     ⎟ ⎪\n     ⎜  ⋱   ⋱    ⎟ ⎬ M1\n     ⎜   ⋱   ⋱   ⎟ ⎪\nJ =  ⎜    0   1  ⎟ ⎭\n     ⎜───────────⎟\n     ⎜           ⎟ ⎫\n     ⎜      J̃    ⎟ ⎬ d-M1\n     ⎝           ⎠ ⎭\n\nThen there has to be only the (d-M1)×d matrix J̃ in OPT_JACOBIMATRIX. In this case banded Jacobian matrices are only supported for the case M1 + M2 == d. Then in this case J̃ is divided into d/M2 = 1+(M1/M2) blocks of the size M2×M2. All this blocks can be banded with a (common) lower bandwidth < M2. \n\nThe option OPT_JACOBIBANDSTRUCT is used to describe the banded structure of the Jacobian. It is eigher nothing if the Jacobian is full or a tuple (l,u) with the lower and upper bandwidth.\n\nThe function for providing the Jacobian for ∂f/∂x can have the following forms:\n\n function (t,x,J)       -> nothing       (A)\n function (t,x,J1,…,JK) -> nothing       (B)\n\nThe following table shows when OPT_JACOBIMATRIX has the form (A)  and when it has the form (B):\n\n ╔══════╤═════════════════════════════╤════════════════════════════════╗\n ║      │ JACOBIBANDSTRUCT == nothing │ JACOBIBANDSTRUCT == (l,u)      ║\n ╟──────┼─────────────────────────────┼────────────────────────────────╢\n ║ M1==0│ (A), J full, size: d×d      │ (A) J (l,u)-banded, size d×d   ║\n ╟──────┼─────────────────────────────┼────────────────────────────────╢\n ║ M1>0 │ (A), J full, size: (d-M1)×d │ (B) J1,…,JK (l,u)-banded       ║\n ║      │                             │     each with size M2×M2 and   ║\n ║      │                             │     K = 1 + M1/M2              ║\n ║      │                             │     M1 + M2 == d               ║\n ╚══════╧═════════════════════════════╧════════════════════════════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.hw_license",
    "page": "Docstrings",
    "title": "ODEInterface.hw_license",
    "category": "constant",
    "text": "License\n\nThis is the license text, which can also be found at\n\n http://www.unige.ch/~hairer/prog/licence.txt\n\nCopyright (c) 2004, Ernst Hairer\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\nRedistributions of source code must retain the above copyright \n\nnotice, this list of conditions and the following disclaimer.\n\nRedistributions in binary form must reproduce the above copyright \n\nnotice, this list of conditions and the following disclaimer in the  documentation and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS  IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.isdiagonalempty",
    "page": "Docstrings",
    "title": "ODEInterface.isdiagonalempty",
    "category": "function",
    "text": " function isdiagonalempty(A::AbstractArray{T,2},d::Integer)\n\nmethod to check if all entries in a diagonal are zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.isinband",
    "page": "Docstrings",
    "title": "ODEInterface.isinband",
    "category": "function",
    "text": "tests if (i,j) is in the diagonal bands.\n\nCaution: This methods does not test, if i and j are inside the matrix bounds. Only the diagonal bounds are checked.\n\nThis method should only be used, if the matrix bounds/dimensions have been checked before.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.isscalar",
    "page": "Docstrings",
    "title": "ODEInterface.isscalar",
    "category": "function",
    "text": "tests if cand is a number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.isvalidinband",
    "page": "Docstrings",
    "title": "ODEInterface.isvalidinband",
    "category": "function",
    "text": "tests if (i,j) is in the matrix and in the diagonal bands.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.loadODESolvers",
    "page": "Docstrings",
    "title": "ODEInterface.loadODESolvers",
    "category": "function",
    "text": " function loadODESolvers(extrapaths::Vector=AbstractString[],\n           loadlibnames::Tuple=() )\n\ntries to (dynamically) load the solvers.\n\nadditional locations/paths to look at can be given as argument.\n\nIf the 1st argument is an empty Vector, then the method tries to find the path of the ODEInterface module and (if successfull) uses this path as extrapaths.\n\nThe 2nd argument is a Tuple with libnames of solvers to load.  If it is an empty tuple, then all known solvers will be tried.\n\nIf an solver is already successfully loaded, then it will not be loaded again.\n\nreturns Dict with informations about the loaded solvers (and errors).\n\nIf a solver cannot be found (or needed methods inside a dynmic library cannot be found) then the errors are not propagated to the caller. The errors and expections are saved in the returned Dict. Why? Using this way, it is possible to see with one call (and try to load all solvers) which solvers are found.\n\nYou can simply dump the values of the output dict to get a human-readable form of the result or call help_solversupport().\n\n for k in keys(res); dump(res[k]); end\n ODEInterface.help_solversupport()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.odecall",
    "page": "Docstrings",
    "title": "ODEInterface.odecall",
    "category": "function",
    "text": "function odecall(solver, rhs, t::Vector, x0::Vector,\n                opt::AbstractOptionsODE)\n    -> (tVec,xVec,retcode,stats)\n\nCalls solver with the given right-hand side rhs. There are two cases:\n\n2==length(t)\n2<length(t)\n\nIf 2==length(t), then in the output tVec consists of the time points the (adaptive) solver has automatically chosen. And the xVec has the states at this times. So: tVec is a Vector{Float64}(m) and xVec is a Array{Float64}(m,length(x0)).\n\nIf 2<length(t), then the values in t must be strictly ascending or strictly descending. Then a special output function is used to get the numerical solution at the given t-values. In this case tVec is a Vector{Float64}(length(t)) and xVec is a Array{Float64}(length(t),length(x0)).\n\nIf in opt a output function is given, then this output function is also called/used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.odex",
    "page": "Docstrings",
    "title": "ODEInterface.odex",
    "category": "function",
    "text": " function odex(rhs, t0::Real, T::Real, \n               x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n -1: error\n\nmain call for using Fortran-odex solver. In opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RTOL         &  │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN, but without        │         ║\n║                 │   possibility for dense output           │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   call OPT_OUTPUTFCN with support for    │         ║\n║                 │   dense output                           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │   10000 ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ EPS             │ the rounding unit                        │ 2.3e-16 ║\n║                 │ 1e-35 < OPT_EPS < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSS           │ maximal step size                        │  T - t0 ║\n║                 │ OPT_MAXSS ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITIALSS       │ initial step size guess                  │    1e-4 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXEXCOLUMN     │ the maximum number of columns in         │       9 ║\n║                 │ the extrapolation table                  │         ║\n║                 │ OPT_MAXEXCOLUMN ≥ 3                      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ STEPSIZESEQUENCE│ switch for the step size sequence        │       4 ║\n║                 │ 1: 2, 4,  6,  8, 10, 12, 14, 16, …       │ if      ║\n║                 │ 2: 2, 4,  8, 12, 16, 20, 24, 28, …       │ OUTPUT- ║\n║                 │ 3: 2, 4,  6,  8, 12, 16, 24, 32, …       │ MODE == ║\n║                 │ 4: 2, 6, 10, 14, 18, 22, 26, 30, …       │ DENSE;  ║\n║                 │ 5: 4, 8, 12, 16, 20, 24, 28, 32, …       │ other-  ║\n║                 │ 1 ≤ OPT_STEPSIZESEQUENCE ≤ 5             │ wise  1 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTABCHECKS   │ how many times is the stability check    │       1 ║\n║                 │ activated at most in one line of the     │         ║\n║                 │ extrapolation table                      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTABCHECKLINE│ stability check is only activated in     │       1 ║\n║                 │ the lines 1 to MAXMAXSTABCHECKLINE of    │         ║\n║                 │ the extrapolation table                  │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ DENSEOUTPUTWOEE │ boolean flag: suppress error estimator   │   false ║\n║                 │ in dense output                          │         ║\n║                 │ true is only possible, if                │         ║\n║                 │      OUTPUTMODE == DENSE                 │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INTERPOLDEGREE  │ determines the degree of interpolation   │       4 ║\n║                 │ formula:                                 │         ║\n║                 │ μ = 2*κ - INTERPOLDEGREE + 1             │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSREDUCTION     │ step size is reduced by factor if the    │     0.5 ║\n║                 │ stability check is negative              │         ║\n║                 │ OPT_EPS < OPT_SSREDUCTION < 1            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSSELECTPAR1 &  │ parameters for step size selection       │    0.02 ║\n║ SSSELECTPAR2    │ the new step size for the k-th diagonal  │    4.00 ║\n║                 │ entry is chosen subject to               │         ║\n║                 │ FMIN/SSSELECTPAR2 ≤ hnewₖ/hold ≤ 1/FMIN  │         ║\n║                 │ with FMIN = SSSELECTPAR1^(1/(2*k-1))     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ ORDERDECFRAC &  │ parameters for the order selection       │     0.8 ║\n║ ORDERINCFRAC    │ decrease order if                        │     0.9 ║\n║                 │         W(k-1) ≤   W(k)*ORDERDECFRAC     │         ║\n║                 │ increase order if                        │         ║\n║                 │         W(k)   ≤ W(k-1)*ORDERINCFRAC     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OPT_RHO      &  │ safety factors for step control algorithm│    0.94 ║\n║ OPT_RHO2        │ hnew=h*RHO*(RHO2*TOL/ERR)^(1/(k-1) )     │    0.65 ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.odex_i32",
    "page": "Docstrings",
    "title": "ODEInterface.odex_i32",
    "category": "function",
    "text": "odex with 32bit integers, see odex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.odex_impl",
    "page": "Docstrings",
    "title": "ODEInterface.odex_impl",
    "category": "function",
    "text": " function odex_impl(rhs, \n         t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE, \n         args::OdexArguments{FInt}) where {FInt<:FortranInt}\n\nimplementation of odex for FInt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.output_fcn_donothing",
    "page": "Docstrings",
    "title": "ODEInterface.output_fcn_donothing",
    "category": "function",
    "text": "Output function that does nothing and returns OUTPUTFCN_RET_CONTINUE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.radau",
    "page": "Docstrings",
    "title": "ODEInterface.radau",
    "category": "function",
    "text": " function radau(rhs, t0::Real, T::Real,\n                 x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n \n function radau5(rhs, t0::Real, T::Real,\n                 x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n -1: input is not consistent\n -2: larger OPT_MAXSTEPS is needed\n -3: step size becomes too small\n -4: matrix is repeatedly singular\n\nmain call for using Fortran radau or radau5 solver.\n\nThis solver support problems with special structure, see help_specialstructure.\n\nRemark: Because radau and radau5 are collocation methods, there is no difference  in the computational costs for OUTPUTFCNWODENSE and OUTPUTFCNDENSE.\n\nIn opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ M1 & M2         │ parameter for special structure, see     │       0 ║\n║                 │ above                                    │      M1 ║\n║                 │ M1, M2 ≥ 0                               │         ║\n║                 │ M1 +M2 ≤ length(x0)                      │         ║\n║                 │ (M1==M2==0) || (M1≠0≠M2)                 │         ║\n║                 │ M1 % M2 == 0 or M1==0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RTOL         &  │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN, but without        │         ║\n║                 │   possibility for dense output           │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   call OPT_OUTPUTFCN with support for    │         ║\n║                 │   dense output                           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ EPS             │ the rounding unit                        │   1e-16 ║\n║                 │ 1e-19 < OPT_EPS < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ TRANSJTOH       │ The solver transforms the jacobian       │   false ║\n║                 │ matrix to Hessenberg form.               │         ║\n║                 │ This option is not supported if the      │         ║\n║                 │ system is \"implicit\" (i.e. a mass matrix │         ║\n║                 │ is given) or if jacobian is banded.      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXNEWTONITER   │ maximum number of Newton iterations for  │       7 ║\n║                 │ the solution of the implicit system in   │         ║\n║                 │ each step.                               │         ║\n║                 │ for radau: MAXNEWTONITER + (NS-3)*2.5    │         ║\n║                 │   where NS is number of current stages   │         ║\n║                 │ for radau5:     OPT_MAXNEWTONITER > 0    │         ║\n║                 │ for radau: 50 > OPT_MAXNEWTONITER > 0    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ NEWTONSTARTZERO │ if `false`, the extrapolated collocation │   false ║\n║                 │ solution is taken as starting vector for │         ║\n║                 │ Newton\'s method. If `true` zero starting │         ║\n║                 │ values are used. The latter is           │         ║\n║                 │ recommended if Newton\'s method has       │         ║\n║                 │ difficulties with convergence.           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ NEWTONSTOPCRIT  │ only for radau5:                         │ see     ║\n║                 │ Stopping criterion for Newton\'s method.  │   left  ║\n║                 │ Smaller values make the code slower, but │         ║\n║                 │ safer.                                   │         ║\n║                 │ Default:                                 │         ║\n║                 │  max(10*OPT_EPS/OPT_RTOL[1],             │         ║\n║                 │       min(0.03,sqrt(OPT_RTOL[1])))       │         ║\n║                 │ OPT_NEWTONSTOPCRIT > OPT_EPS/OPT_RTOL[1] │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ DIMOFIND1VAR  & │ For differential-algebraic systems of    │ len(x0) ║\n║ DIMOFIND2VAR  & │ index > 1. The right-hand side should be │       0 ║\n║ DIMOFIND3VAR    │ written such that the index 1,2,3        │       0 ║\n║                 │ variables appear in this order.          │         ║\n║                 │ DIMOFINDzVAR: number of index z vars.    │         ║\n║                 │ ∑ DIMOFINDzVAR == length(x0)             │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │  100000 ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSS           │ maximal step size                        │  T - t0 ║\n║                 │ OPT_MAXSS ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITIALSS       │ initial step size guess                  │    1e-6 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MINSTAGES     & │ only for radau:                          │       3 ║\n║ MAXSTAGES       │ minimal and maximal number of stages.    │       7 ║\n║                 │ The order is given by: 2⋅stages-1        │         ║\n║                 │ MINSTAGES,MAXSTAGES ∈ (1,3,5,7)          │         ║\n║                 │ MINSTAGES ≤ MAXSTAGES                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITSTAGES      │ only for radau:                          │MINSTAGES║\n║                 │ number of stages to start with.          │         ║\n║                 │ MINSTAGES ≤ INITSTAGES ≤ MAXSTAGES       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ STEPSIZESTRATEGY│ Switch for step size strategy            │       1 ║\n║                 │   1: mod. predictive controller          │         ║\n║                 │      (Gustafsson)                        │         ║\n║                 │   2: classical step size control         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OPT_RHO         │ safety factor for step control algorithm │     0.9 ║\n║                 │ 0.001 < OPT_RHO < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACRECOMPFACTOR │ decides whether the jacobian should be   │   0.001 ║\n║                 │ recomputed.                              │         ║\n║                 │ <0: recompute after every accepted step  │         ║\n║                 │ small (≈ 0.001): recompute often         │         ║\n║                 │ large (≈ 0.1): recompute rarely          │         ║\n║                 │ i.e. this number represents how costly   │         ║\n║                 │ Jacobia evaluations are.                 │         ║\n║                 │ OPT_JACRECOMPFACTOR ≠ 0                  │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ FREEZESSLEFT  & │ Step size freezing: If                   │     1.0 ║\n║ FREEZESSRIGHT   │ FREEZESSLEFT < hnew/hold < FREEZESSRIGHT │     1.2 ║\n║                 │ then the step size is not changed. This  │         ║\n║                 │ saves, together with a large             │         ║\n║                 │ JACRECOMPFACTOR, LU-decompositions and   │         ║\n║                 │ computing time for large systems.        │         ║\n║                 │ small systems:                           │         ║\n║                 │    FREEZESSLEFT  ≈ 1.0                   │         ║\n║                 │    FREEZESSRIGHT ≈ 1.2                   │         ║\n║                 │ large full systems:                      │         ║\n║                 │    FREEZESSLEFT  ≈ 0.99                  │         ║\n║                 │    FREEZESSRIGHT ≈ 2.0                   │         ║\n║                 │                                          │         ║\n║                 │ OPT_FREEZESSLEFT  ≤ 1.0                  │         ║\n║                 │ OPT_FREEZESSRIGHT ≥ 1.0                  │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSMINSEL   &    │ parameters for step size selection       │     0.2 ║\n║ SSMAXSEL        │ The new step size is chosen subject to   │     8.0 ║\n║                 │ the restriction                          │         ║\n║                 │ OPT_SSMINSEL ≤ hnew/hold ≤ OPT_SSMAXSEL  │         ║\n║                 │ OPT_SSMINSEL ≤ 1, OPT_SSMAXSEL ≥ 1       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MASSMATRIX      │ the mass matrix of the problem. If not   │ nothing ║\n║                 │ given (nothing) then the identiy matrix  │         ║\n║                 │ is used.                                 │         ║\n║                 │ The size has to be (d-M1)×(d-M1).        │         ║\n║                 │ It can be an full matrix or a banded     │         ║\n║                 │ matrix (BandedMatrix).                   │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIMATRIX    │ A function providing the Jacobian for    │ nothing ║\n║                 │ ∂f/∂x or nothing. For nothing the solver │         ║\n║                 │ uses finite differences to calculate the │         ║\n║                 │ Jacobian.                                │         ║\n║                 │ The function has to be of the form:      │         ║\n║                 │   function (t,x,J) -> nothing       (A)  │         ║\n║                 │ or for M1>0 & JACOBIBANDSTRUCT ≠ nothing │         ║\n║                 │   function (t,x,J1,…,JK) -> nothing (B)  │         ║\n║                 │ with K = 1+M1/M2 and (M1+M2==d)          │         ║\n║                 │ see help_specialstructure                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIBANDSTRUCT│ A tuple (l,u) describing the banded      │ nothing ║\n║                 │ structure of the Jacobian or nothing if  │         ║\n║                 │ the Jacobian is full.                    │         ║\n║                 │ see help_specialstructure                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ ORDERDECFACTOR &│ only for radau:                          │     0.8 ║\n║ ORDERINCFACTOR  │ Order is decreased, if the contractivity │   0.002 ║\n║                 │ factor is smaller than ORDERDECFACTOR.   │         ║\n║                 │ Order is increased, if the contractivity │         ║\n║                 │ factor is larger than ORDERINCFACTOR.    │         ║\n║                 │ ORDERDECFACTOR > ORDERINCFACTOR > 0      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ ORDERDECSTEPFAC1│ only for radau:                          │     1.2 ║\n║ ORDERDECSTEPFAC2│ the order is only decreased if the       │     0.8 ║\n║                 │ stepsize ratio satisfies                 │         ║\n║                 │  ORDERDECSTEPFAC2 ≤ hnew/hold ≤          │         ║\n║                 │               ORDERDECSTEPFAC1           │         ║\n║                 │ 0 < ORDERDECSTEPFAC2 < ORDERDECSTEPFAC1  │         ║\n║                 │                                          │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.radau5",
    "page": "Docstrings",
    "title": "ODEInterface.radau5",
    "category": "function",
    "text": " function radau(rhs, t0::Real, T::Real,\n                 x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n \n function radau5(rhs, t0::Real, T::Real,\n                 x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n -1: input is not consistent\n -2: larger OPT_MAXSTEPS is needed\n -3: step size becomes too small\n -4: matrix is repeatedly singular\n\nmain call for using Fortran radau or radau5 solver.\n\nThis solver support problems with special structure, see help_specialstructure.\n\nRemark: Because radau and radau5 are collocation methods, there is no difference  in the computational costs for OUTPUTFCNWODENSE and OUTPUTFCNDENSE.\n\nIn opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ M1 & M2         │ parameter for special structure, see     │       0 ║\n║                 │ above                                    │      M1 ║\n║                 │ M1, M2 ≥ 0                               │         ║\n║                 │ M1 +M2 ≤ length(x0)                      │         ║\n║                 │ (M1==M2==0) || (M1≠0≠M2)                 │         ║\n║                 │ M1 % M2 == 0 or M1==0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RTOL         &  │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN, but without        │         ║\n║                 │   possibility for dense output           │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   call OPT_OUTPUTFCN with support for    │         ║\n║                 │   dense output                           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ EPS             │ the rounding unit                        │   1e-16 ║\n║                 │ 1e-19 < OPT_EPS < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ TRANSJTOH       │ The solver transforms the jacobian       │   false ║\n║                 │ matrix to Hessenberg form.               │         ║\n║                 │ This option is not supported if the      │         ║\n║                 │ system is \"implicit\" (i.e. a mass matrix │         ║\n║                 │ is given) or if jacobian is banded.      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXNEWTONITER   │ maximum number of Newton iterations for  │       7 ║\n║                 │ the solution of the implicit system in   │         ║\n║                 │ each step.                               │         ║\n║                 │ for radau: MAXNEWTONITER + (NS-3)*2.5    │         ║\n║                 │   where NS is number of current stages   │         ║\n║                 │ for radau5:     OPT_MAXNEWTONITER > 0    │         ║\n║                 │ for radau: 50 > OPT_MAXNEWTONITER > 0    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ NEWTONSTARTZERO │ if `false`, the extrapolated collocation │   false ║\n║                 │ solution is taken as starting vector for │         ║\n║                 │ Newton\'s method. If `true` zero starting │         ║\n║                 │ values are used. The latter is           │         ║\n║                 │ recommended if Newton\'s method has       │         ║\n║                 │ difficulties with convergence.           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ NEWTONSTOPCRIT  │ only for radau5:                         │ see     ║\n║                 │ Stopping criterion for Newton\'s method.  │   left  ║\n║                 │ Smaller values make the code slower, but │         ║\n║                 │ safer.                                   │         ║\n║                 │ Default:                                 │         ║\n║                 │  max(10*OPT_EPS/OPT_RTOL[1],             │         ║\n║                 │       min(0.03,sqrt(OPT_RTOL[1])))       │         ║\n║                 │ OPT_NEWTONSTOPCRIT > OPT_EPS/OPT_RTOL[1] │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ DIMOFIND1VAR  & │ For differential-algebraic systems of    │ len(x0) ║\n║ DIMOFIND2VAR  & │ index > 1. The right-hand side should be │       0 ║\n║ DIMOFIND3VAR    │ written such that the index 1,2,3        │       0 ║\n║                 │ variables appear in this order.          │         ║\n║                 │ DIMOFINDzVAR: number of index z vars.    │         ║\n║                 │ ∑ DIMOFINDzVAR == length(x0)             │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │  100000 ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSS           │ maximal step size                        │  T - t0 ║\n║                 │ OPT_MAXSS ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITIALSS       │ initial step size guess                  │    1e-6 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MINSTAGES     & │ only for radau:                          │       3 ║\n║ MAXSTAGES       │ minimal and maximal number of stages.    │       7 ║\n║                 │ The order is given by: 2⋅stages-1        │         ║\n║                 │ MINSTAGES,MAXSTAGES ∈ (1,3,5,7)          │         ║\n║                 │ MINSTAGES ≤ MAXSTAGES                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITSTAGES      │ only for radau:                          │MINSTAGES║\n║                 │ number of stages to start with.          │         ║\n║                 │ MINSTAGES ≤ INITSTAGES ≤ MAXSTAGES       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ STEPSIZESTRATEGY│ Switch for step size strategy            │       1 ║\n║                 │   1: mod. predictive controller          │         ║\n║                 │      (Gustafsson)                        │         ║\n║                 │   2: classical step size control         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OPT_RHO         │ safety factor for step control algorithm │     0.9 ║\n║                 │ 0.001 < OPT_RHO < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACRECOMPFACTOR │ decides whether the jacobian should be   │   0.001 ║\n║                 │ recomputed.                              │         ║\n║                 │ <0: recompute after every accepted step  │         ║\n║                 │ small (≈ 0.001): recompute often         │         ║\n║                 │ large (≈ 0.1): recompute rarely          │         ║\n║                 │ i.e. this number represents how costly   │         ║\n║                 │ Jacobia evaluations are.                 │         ║\n║                 │ OPT_JACRECOMPFACTOR ≠ 0                  │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ FREEZESSLEFT  & │ Step size freezing: If                   │     1.0 ║\n║ FREEZESSRIGHT   │ FREEZESSLEFT < hnew/hold < FREEZESSRIGHT │     1.2 ║\n║                 │ then the step size is not changed. This  │         ║\n║                 │ saves, together with a large             │         ║\n║                 │ JACRECOMPFACTOR, LU-decompositions and   │         ║\n║                 │ computing time for large systems.        │         ║\n║                 │ small systems:                           │         ║\n║                 │    FREEZESSLEFT  ≈ 1.0                   │         ║\n║                 │    FREEZESSRIGHT ≈ 1.2                   │         ║\n║                 │ large full systems:                      │         ║\n║                 │    FREEZESSLEFT  ≈ 0.99                  │         ║\n║                 │    FREEZESSRIGHT ≈ 2.0                   │         ║\n║                 │                                          │         ║\n║                 │ OPT_FREEZESSLEFT  ≤ 1.0                  │         ║\n║                 │ OPT_FREEZESSRIGHT ≥ 1.0                  │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSMINSEL   &    │ parameters for step size selection       │     0.2 ║\n║ SSMAXSEL        │ The new step size is chosen subject to   │     8.0 ║\n║                 │ the restriction                          │         ║\n║                 │ OPT_SSMINSEL ≤ hnew/hold ≤ OPT_SSMAXSEL  │         ║\n║                 │ OPT_SSMINSEL ≤ 1, OPT_SSMAXSEL ≥ 1       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MASSMATRIX      │ the mass matrix of the problem. If not   │ nothing ║\n║                 │ given (nothing) then the identiy matrix  │         ║\n║                 │ is used.                                 │         ║\n║                 │ The size has to be (d-M1)×(d-M1).        │         ║\n║                 │ It can be an full matrix or a banded     │         ║\n║                 │ matrix (BandedMatrix).                   │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIMATRIX    │ A function providing the Jacobian for    │ nothing ║\n║                 │ ∂f/∂x or nothing. For nothing the solver │         ║\n║                 │ uses finite differences to calculate the │         ║\n║                 │ Jacobian.                                │         ║\n║                 │ The function has to be of the form:      │         ║\n║                 │   function (t,x,J) -> nothing       (A)  │         ║\n║                 │ or for M1>0 & JACOBIBANDSTRUCT ≠ nothing │         ║\n║                 │   function (t,x,J1,…,JK) -> nothing (B)  │         ║\n║                 │ with K = 1+M1/M2 and (M1+M2==d)          │         ║\n║                 │ see help_specialstructure                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIBANDSTRUCT│ A tuple (l,u) describing the banded      │ nothing ║\n║                 │ structure of the Jacobian or nothing if  │         ║\n║                 │ the Jacobian is full.                    │         ║\n║                 │ see help_specialstructure                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ ORDERDECFACTOR &│ only for radau:                          │     0.8 ║\n║ ORDERINCFACTOR  │ Order is decreased, if the contractivity │   0.002 ║\n║                 │ factor is smaller than ORDERDECFACTOR.   │         ║\n║                 │ Order is increased, if the contractivity │         ║\n║                 │ factor is larger than ORDERINCFACTOR.    │         ║\n║                 │ ORDERDECFACTOR > ORDERINCFACTOR > 0      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ ORDERDECSTEPFAC1│ only for radau:                          │     1.2 ║\n║ ORDERDECSTEPFAC2│ the order is only decreased if the       │     0.8 ║\n║                 │ stepsize ratio satisfies                 │         ║\n║                 │  ORDERDECSTEPFAC2 ≤ hnew/hold ≤          │         ║\n║                 │               ORDERDECSTEPFAC1           │         ║\n║                 │ 0 < ORDERDECSTEPFAC2 < ORDERDECSTEPFAC1  │         ║\n║                 │                                          │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.radau5_i32",
    "page": "Docstrings",
    "title": "ODEInterface.radau5_i32",
    "category": "function",
    "text": "radau5 with 32bit integers, see radau5.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.radau5_impl",
    "page": "Docstrings",
    "title": "ODEInterface.radau5_impl",
    "category": "function",
    "text": " function radau5_impl(rhs, \n         t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE, \n         args::RadauArguments{FInt}) where FInt<:FortranInt\n\nimplementation of radau5 for FInt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.radau_i32",
    "page": "Docstrings",
    "title": "ODEInterface.radau_i32",
    "category": "function",
    "text": "radau with 32bit integers, see radau.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.radau_impl",
    "page": "Docstrings",
    "title": "ODEInterface.radau_impl",
    "category": "function",
    "text": " function radau_impl(rhs, \n         t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE, \n         args::RadauArguments{FInt}) where FInt<:FortranInt\n\nimplementation of radau for FInt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.rangeofdiag",
    "page": "Docstrings",
    "title": "ODEInterface.rangeofdiag",
    "category": "function",
    "text": "The columns in bm.entries for diagonal 1 ≤ d ≤ 1+l+u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.rodas",
    "page": "Docstrings",
    "title": "ODEInterface.rodas",
    "category": "function",
    "text": "  function rodas(rhs, t0::Real, T::Real,\n                 x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n -1: computation unsuccessful\n\nmain call for using Fortran rodas solver.\n\nThis solver support problems with special structure, see help_specialstructure.\n\nIn opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RHSAUTONOMOUS   │ Flag, if right-hand side is autonomous.  │   false ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ M1 & M2         │ parameter for special structure, see     │       0 ║\n║                 │ above                                    │      M1 ║\n║                 │ M1, M2 ≥ 0                               │         ║\n║                 │ M1 +M2 ≤ length(x0)                      │         ║\n║                 │ (M1==M2==0) || (M1≠0≠M2)                 │         ║\n║                 │ M1 % M2 == 0 or M1==0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RTOL         &  │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN, but without        │         ║\n║                 │   possibility for dense output           │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   call OPT_OUTPUTFCN with support for    │         ║\n║                 │   dense output                           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ EPS             │ the rounding unit                        │   1e-16 ║\n║                 │ 0 < OPT_EPS < 1.0                        │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ METHODCHOICE    │ Choice of coefficients:                  │       1 ║\n║                 │ 1: Hairer, Wanner: Solving ODE II,       │         ║\n║                 │    page 452                              │         ║\n║                 │ 2: same as 1, with different params      │         ║\n║                 │ 3: G. Steinbach (1993)                   │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │  100000 ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSS           │ maximal step size                        │  T - t0 ║\n║                 │ OPT_MAXSS ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITIALSS       │ initial step size guess                  │    1e-6 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ STEPSIZESTRATEGY│ Switch for step size strategy            │       1 ║\n║                 │   1: mod. predictive controller          │         ║\n║                 │      (Gustafsson)                        │         ║\n║                 │   2: classical step size control         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OPT_RHO         │ safety factor for step control algorithm │     0.9 ║\n║                 │ 0.001 < OPT_RHO < 1.0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSMINSEL   &    │ parameters for step size selection       │     0.2 ║\n║ SSMAXSEL        │ The new step size is chosen subject to   │     6.0 ║\n║                 │ the restriction                          │         ║\n║                 │ OPT_SSMINSEL ≤ hnew/hold ≤ OPT_SSMAXSEL  │         ║\n║                 │ OPT_SSMINSEL ≤ 1, OPT_SSMAXSEL ≥ 1       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RHSTIMEDERIV    │ A function providing the time derivative │ nothing ║\n║                 │ ∂f/∂t of the right-hand side or nothing. │         ║\n║                 │ If the value given is nothing the solver │         ║\n║                 │ uses finite differences to approximate   │         ║\n║                 │ ∂f/∂t.                                   │         ║\n║                 │ Obviously this options is only relevant  │         ║\n║                 │ for non-autonomous problems.             │         ║\n║                 │ The function has to be of the form:      │         ║\n║                 │   function (t,x,dfdt) -> nothing         │         ║\n║                 │ Even if the problem has special structure│         ║\n║                 │ (M1>0, see help_specialstructure) x and  │         ║\n║                 │ dfdt are always vectors with full length,│         ║\n║                 │ i.e. length(x)==length(dfdt)==length(x0).│         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIMATRIX    │ A function providing the Jacobian for    │ nothing ║\n║                 │ ∂f/∂x or nothing. For nothing the solver │         ║\n║                 │ uses finite differences to calculate the │         ║\n║                 │ Jacobian.                                │         ║\n║                 │ The function has to be of the form:      │         ║\n║                 │   function (t,x,J) -> nothing       (A)  │         ║\n║                 │ or for M1>0 & JACOBIBANDSTRUCT ≠ nothing │         ║\n║                 │   function (t,x,J1,…,JK) -> nothing (B)  │         ║\n║                 │ with K = 1+M1/M2 and (M1+M2==d)          │         ║\n║                 │ see help_specialstructure                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIBANDSTRUCT│ A tuple (l,u) describing the banded      │ nothing ║\n║                 │ structure of the Jacobian or nothing if  │         ║\n║                 │ the Jacobian is full.                    │         ║\n║                 │ see help_specialstructure                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MASSMATRIX      │ the mass matrix of the problem. If not   │ nothing ║\n║                 │ given (nothing) then the identiy matrix  │         ║\n║                 │ is used.                                 │         ║\n║                 │ The size has to be (d-M1)×(d-M1).        │         ║\n║                 │ It can be an full matrix or a banded     │         ║\n║                 │ matrix (BandedMatrix).                   │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.rodas_i32",
    "page": "Docstrings",
    "title": "ODEInterface.rodas_i32",
    "category": "function",
    "text": "rodas with 32bit integers, see rodas.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.setOption!",
    "page": "Docstrings",
    "title": "ODEInterface.setOption!",
    "category": "function",
    "text": "function setOption!(opt::AbstractOptionsODE,name::AbstractString,value::Any)\n\nset ODE-Option with given name and return old value  (or nothing if there was no old value).\n\n\n\n\n\nfunction setOption!(opt::AbstractOptionsODE,pair::Pair)\n\nset ODE-Option with given (name,value) pair and return old value  (or nothing if there was no old value).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.setOptions!",
    "page": "Docstrings",
    "title": "ODEInterface.setOptions!",
    "category": "function",
    "text": "function setOptions!(opt::AbstractOptionsODE,pairs::Pair...)\n\nset many ODE-Options and return an array with the old option values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.setdiagonal!",
    "page": "Docstrings",
    "title": "ODEInterface.setdiagonal!",
    "category": "function",
    "text": "sets the diagonal with number d (0 is the main diagonal,see  BandedMatrix) to the given values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.setdiagonals!",
    "page": "Docstrings",
    "title": "ODEInterface.setdiagonals!",
    "category": "function",
    "text": "sets all diagonals at once. values must be a 1+u+l cell-array with the diagonals starting with the upper right one.\n\n\n\n\n\nsets all diagonals at once copy the diagonals from an other BandedMatrix. The other Bandedmatrix must have the same size and same upper and  lower bandwidth.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.seulex",
    "page": "Docstrings",
    "title": "ODEInterface.seulex",
    "category": "function",
    "text": " function seulex(rhs, t0::Real, T::Real,\n                 x0::Vector, opt::AbstractOptionsODE)\n     -> (t,x,retcode,stats)\n\nretcode can have the following values:\n\n  1: computation successful\n  2: computation. successful, but interrupted by output function\n -1: computation unsuccessful\n\nmain call for using Fortran seulex solver.\n\nThis solver support problems with special structure, see help_specialstructure.\n\nIn opt the following options are used:\n\n╔═════════════════╤══════════════════════════════════════════╤═════════╗\n║  Option OPT_…   │ Description                              │ Default ║\n╠═════════════════╪══════════════════════════════════════════╪═════════╣\n║ RHSAUTONOMOUS   │ Flag, if right-hand side is autonomous.  │   false ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ M1 & M2         │ parameter for special structure, see     │       0 ║\n║                 │ above                                    │      M1 ║\n║                 │ M1, M2 ≥ 0                               │         ║\n║                 │ M1 +M2 ≤ length(x0)                      │         ║\n║                 │ (M1==M2==0) || (M1≠0≠M2)                 │         ║\n║                 │ M1 % M2 == 0 or M1==0                    │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ RTOL         &  │ relative and absolute error tolerances   │    1e-3 ║\n║ ATOL            │ both scalars or both vectors with the    │    1e-6 ║\n║                 │ length of length(x0)                     │         ║\n║                 │ error(xₖ) ≤ OPT_RTOLₖ⋅|xₖ|+OPT_ATOLₖ     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTFCN       │ output function                          │ nothing ║\n║                 │ see help_outputfcn                       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OUTPUTMODE      │ OUTPUTFCN_NEVER:                         │   NEVER ║\n║                 │   dont\'t call OPT_OUTPUTFCN              │         ║\n║                 │ OUTPUTFCN_WODENSE                        │         ║\n║                 │   call OPT_OUTPUTFCN, but without        │         ║\n║                 │   possibility for dense output           │         ║\n║                 │ OUTPUTFCN_DENSE                          │         ║\n║                 │   call OPT_OUTPUTFCN with support for    │         ║\n║                 │   dense output                           │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ LAMBDADENSE     │ parameter λ of dense output              │       0 ║\n║                 │ OPT_LAMBDADENSE ∈ {0,1}                  │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ EPS             │ the rounding unit                        │   1e-16 ║\n║                 │ 0 < OPT_EPS < 1.0                        │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ TRANSJTOH       │ The solver transforms the jacobian       │   false ║\n║                 │ matrix to Hessenberg form.               │         ║\n║                 │ This option is not supported if the      │         ║\n║                 │ system is \"implicit\" (i.e. a mass matrix │         ║\n║                 │ is given) or if jacobian is banded.      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSTEPS        │ maximal number of allowed steps          │  100000 ║\n║                 │ OPT_MAXSTEPS > 0                         │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXSS           │ maximal step size                        │  T - t0 ║\n║                 │ OPT_MAXSS ≠ 0                            │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ INITIALSS       │ initial step size guess                  │    1e-6 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MAXEXCOLUMN     │ the maximum number of columns in         │      12 ║\n║                 │ the extrapolation table                  │         ║\n║                 │ OPT_MAXEXCOLUMN ≥ 3                      │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ STEPSIZESEQUENCE│ switch for the step size sequence        │       2 ║\n║                 │ 1: 1, 2, 3, 6, 8, 12, 16, 24, 32, 48, …  │         ║\n║                 │ 2: 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, …  │         ║\n║                 │ 3: 1, 2, 3, 4, 5,  6,  7,  8,  9, 10, …  │         ║\n║                 │ 4: 2, 3, 4, 5, 6,  7,  8,  9, 10, 11, …  │         ║\n║                 │ 1 ≤ OPT_STEPSIZESEQUENCE ≤ 4             │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ SSSELECTPAR1 &  │ parameters for step size selection       │     0.1 ║\n║ SSSELECTPAR2    │ the new step size for the k-th diagonal  │     4.0 ║\n║                 │ entry is chosen subject to               │         ║\n║                 │ FMIN/SSSELECTPAR2 ≤ hnewₖ/hold ≤ 1/FMIN  │         ║\n║                 │ with FMIN = SSSELECTPAR1^(1/(k-1))       │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ ORDERDECFRAC &  │ parameters for the order selection       │     0.7 ║\n║ ORDERINCFRAC    │ decrease order if                        │     0.9 ║\n║                 │         W(k-1) ≤   W(k)*ORDERDECFRAC     │         ║\n║                 │ increase order if                        │         ║\n║                 │         W(k)   ≤ W(k-1)*ORDERINCFRAC     │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACRECOMPFACTOR │ decides whether the jacobian should be   │ min(    ║\n║                 │ recomputed.                              │   1e-4, ║\n║                 │ small (≈ 0.001): recompute often         │ RTOL[1])║\n║                 │ large (≈ 0.1): recompute rarely          │         ║\n║                 │ i.e. this number represents how costly   │         ║\n║                 │ Jacobia evaluations are.                 │         ║\n║                 │ OPT_JACRECOMPFACTOR ≠ 0                  │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ OPT_RHO      &  │ safety factors for step control algorithm│    0.93 ║\n║ OPT_RHO2        │ hnew=h*RHO*(RHO2*TOL/ERR)^(1/(k-1) )     │    0.80 ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ MASSMATRIX      │ the mass matrix of the problem. If not   │ nothing ║\n║                 │ given (nothing) then the identiy matrix  │         ║\n║                 │ is used.                                 │         ║\n║                 │ The size has to be (d-M1)×(d-M1).        │         ║\n║                 │ It can be an full matrix or a banded     │         ║\n║                 │ matrix (BandedMatrix).                   │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIMATRIX    │ A function providing the Jacobian for    │ nothing ║\n║                 │ ∂f/∂x or nothing. For nothing the solver │         ║\n║                 │ uses finite differences to calculate the │         ║\n║                 │ Jacobian.                                │         ║\n║                 │ The function has to be of the form:      │         ║\n║                 │   function (t,x,J) -> nothing       (A)  │         ║\n║                 │ or for M1>0 & JACOBIBANDSTRUCT ≠ nothing │         ║\n║                 │   function (t,x,J1,…,JK) -> nothing (B)  │         ║\n║                 │ with K = 1+M1/M2 and (M1+M2==d)          │         ║\n║                 │ see help_specialstructure                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ JACOBIBANDSTRUCT│ A tuple (l,u) describing the banded      │ nothing ║\n║                 │ structure of the Jacobian or nothing if  │         ║\n║                 │ the Jacobian is full.                    │         ║\n║                 │ see help_specialstructure                │         ║\n╟─────────────────┼──────────────────────────────────────────┼─────────╢\n║ WORKFORRHS      │ estimated works (complexity) for a call  │     1.0 ║\n║ WORKFORJAC      │ to                                       │     5.0 ║\n║ WORKFORDEC      │ WORKFORRHS: right-hand side f            │     1.0 ║\n║ WORKFORSOL      │ WORKFORJAC: JACOBIMATRIX                 │     1.0 ║\n║                 │ WORKFORDEC: LU-decomposition             │         ║\n║                 │ WORKFORSOL: Forward- and Backward subst. │         ║\n╚═════════════════╧══════════════════════════════════════════╧═════════╝\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.seulex_i32",
    "page": "Docstrings",
    "title": "ODEInterface.seulex_i32",
    "category": "function",
    "text": "seulex with 32bit integers, see seulex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.solverInfo",
    "page": "Docstrings",
    "title": "ODEInterface.solverInfo",
    "category": "constant",
    "text": "In this array every (supported) solver appends its SolverInfo-record.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.solver_extract_commonOpt",
    "page": "Docstrings",
    "title": "ODEInterface.solver_extract_commonOpt",
    "category": "function",
    "text": " function solver_extract_commonOpt(t0::Real, T::Real, x0::Vector, \n              opt::AbstractOptionsODE, \n              args::AbstractArgumentsODESolver{FInt}) where FInt\n   -> (d,nrdense,scalarFlag,rhs_mode,output_mode,output_fcn)\n\nget d, fill args.N, args.x, args.t, args.tEnd, args.RTOL, args.ATOL\n\nreads options: OPT_RTOL, OPT_ATOL, OPT_RHS_CALLMODE,  OPT_OUTPUTMODE, OPT_OUTPUTFCN\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.solver_extract_rhsMode",
    "page": "Docstrings",
    "title": "ODEInterface.solver_extract_rhsMode",
    "category": "function",
    "text": " function solver_extract_rhsMode(opt::AbstractOptionsODE)\n             -> rhs_mode\n\nreads options: OPT_RHS_CALLMODE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.solver_init",
    "page": "Docstrings",
    "title": "ODEInterface.solver_init",
    "category": "function",
    "text": " function solver_init(solver_name::AbstractString, \n                      opt::AbstractOptionsODE)\n    ->  (lio,l,l_g,l_solver,lprefix)\n\nreads options: OPT_LOGIO, OPT_LOGLEVEL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.solver_start",
    "page": "Docstrings",
    "title": "ODEInterface.solver_start",
    "category": "function",
    "text": " function solver_start(solver_name::AbstractString, rhs, \n             t0::Real, T::Real, x0::Vector, opt::AbstractOptionsODE)\n    ->  (lio,l,l_g,l_solver,lprefix)\n\ninitialization for a (typical) solver call/start.\n\nreads options: OPT_LOGIO, OPT_LOGLEVEL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.solvers_outputattimes",
    "page": "Docstrings",
    "title": "ODEInterface.solvers_outputattimes",
    "category": "constant",
    "text": "Solvers where OPT_OUTPUTATTIMES is needed for the get the solution at predefined times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.trytoloadlib",
    "page": "Docstrings",
    "title": "ODEInterface.trytoloadlib",
    "category": "function",
    "text": " function trytoloadlib(name::AbstractString,extrapaths::Vector)\n\ntries to (dynamically) load the given shared library given by name.\n\nif ame=\"name\" then all the following variants will be tried: \"name\", \"NAME\", \"Name\"\n\nreturns (ptr,filepath)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.trytoloadmethod",
    "page": "Docstrings",
    "title": "ODEInterface.trytoloadmethod",
    "category": "function",
    "text": " function trytoloadmethod(libhandle::Ptr{Cvoid},\n       method_name::AbstractString) -> (ptr,namefound)\n\ntries to find the given method by name in a dynamically loaded library.\n\nif method_name=\"name\" then the following variants will be tried: \"name\", \"NAME\", \"Name\", \"name_\", \"NAME_\", \"Name_\", \"_name\", \"_NAME\", \"_Name\", \"_name_\", \"_NAME_\", \"_Name_\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unloadODESolvers",
    "page": "Docstrings",
    "title": "ODEInterface.unloadODESolvers",
    "category": "function",
    "text": " function unloadODESolvers()\n\nunload all (loaded) solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HW1JacCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HW1JacCallback",
    "category": "function",
    "text": " function unsafe_HW1JacCallback(n_::Ptr{FInt},\n         t_::Ptr{Float64},x_::Ptr{Float64},dfx_::Ptr{Float64},\n         ldfx_::Ptr{FInt}, rpar_::Ptr{Float64}, \n         cbi::CI) where {FInt<:FortranInt, CI<:ODEinternalCallInfos}\n          -> nothing\n\nThis is the JAC callback given to radau5, radau and seulex.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-pointers.\n\nThis function calls the user-given Julia function cbi.jacobimatrix with the appropriate arguments (depending on M1 and jacobibandstruct).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HW1JacCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HW1JacCallback_c",
    "category": "function",
    "text": " function unsafe_HW1JacCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n    -> C-callable function pointer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HW1MassCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HW1MassCallback",
    "category": "function",
    "text": " function unsafe_HW1MassCallback(n_::Ptr{FInt}, am_::Ptr{Float64}, \n         lmas_::Ptr{FInt}, rpar_::Ptr{Float64}, \n         cbi::CI) where {FInt<:FortranInt,CI<:ODEinternalCallInfos}\n          -> nothing\n\nThis is the MAS callback given to radau5, radau and seulex.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-pointers.\n\nThis function takes the values of  the mass matrix saved in  the InternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HW1MassCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HW1MassCallback_c",
    "category": "function",
    "text": " function unsafe_HW1MassCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n    -> C-callable function pointer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HW1RHSCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HW1RHSCallback",
    "category": "function",
    "text": " function unsafe_HW1RHSCallback(\n         n_::Ptr{FInt}, t_::Ptr{Float64}, x_::Ptr{Float64}, \n         f_::Ptr{Float64}, rpar_::Ptr{Float64}, \n         cbi::CI) where {FInt<:FortranInt, CI<:ODEinternalCallInfos}\n          -> nothing\n\nThis is the right-hand side given as callback to several Fortran-solvers, e.g. dopri5, dop853, odex.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HW1RHSCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HW1RHSCallback_c",
    "category": "function",
    "text": " function unsafe_HW1RHSCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n    -> C-callable function pointer\n\nThis method generates a Pointer to C-callable instructions. The two method type parameters FInt and CI are important: FInt is the used Fortran integer type and CI is the used  ODEinternalCallInfos SubType. Because unsafe_HW1RHSCallback is a parameterized method, special variants are compiled, if FInt or CI changes. If CI itself is a parameterized type (depending on all the user-given Julia-functions like right-hand side, etc.) then calls to such Julia-functions can be resolved at compile-time (instead of dynamic calls during run-time).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HW2RHSCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HW2RHSCallback",
    "category": "function",
    "text": " function unsafe_HW2RHSCallback(\n         n_::Ptr{FInt}, t_::Ptr{Float64}, x_::Ptr{Float64}, \n         f_::Ptr{Float64}, rpar_::Ptr{Float64}, \n         cbi::CI) where {FInt<:FortranInt, CI<:ODEinternalCallInfos}\n          -> nothing\n\nThis is the right-hand side given as callback to Fortran-solvers (e.g. radau5 and radau) that can handle problems with \"special structure\",  see help_specialstructure.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HW2RHSCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HW2RHSCallback_c",
    "category": "function",
    "text": " function unsafe_HW2RHSCallback_c(cbi::CI,\n         fint_flag::FInt) where {FInt,CI}\n    -> C-callable function pointer\n\nsee unsafe_HW1RHSCallback_c for an explanation of FInt, CI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HWRhsTimeDerivCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HWRhsTimeDerivCallback",
    "category": "function",
    "text": " function unsafe_HWRhsTimeDerivCallback(\n         n_::Ptr{FInt}, t_::Ptr{Float64},x_::Ptr{Float64},\n         dfdt_::Ptr{Float64}, rpar_::Ptr{Float64},\n         cbi::CI) where {FInt<:FortranInt, CI<:ODEinternalCallInfos}\n          -> nothing\n\nThis is the DFX callback given to rodas.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-pointers.\n\nThis function calls the user-given Julia function cbi.rhstimederiv with the appropriate arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_HWRhsTimeDerivCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_HWRhsTimeDerivCallback_c",
    "category": "function",
    "text": " function unsafe_HWRhsTimeDerivCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n    -> C-callable function pointer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_SLATEC1JacCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_SLATEC1JacCallback_c",
    "category": "function",
    "text": " function unsafe_SLATEC1JacCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt, CI}\n    -> C-callable function pointer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_SLATEC1RHSCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_SLATEC1RHSCallback",
    "category": "function",
    "text": " function unsafe_SLATEC1RHSCallback(\n         t_::Ptr{Float64}, x_::Ptr{Float64}, f_::Ptr{Float64}, \n         rpar_::Ptr{Float64}, cbi::CI) where CI<:ODEinternalCallInfos\n\nThis is the right-hand side given as callback to SLATEC solvers, e.g. ddeabm.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_SLATEC1RHSCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_SLATEC1RHSCallback_c",
    "category": "function",
    "text": " function unsafe_SLATEC1RHSCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n    -> C-callable function pointer\n\nThis method generates a Pointer to C-callable instructions. The two method type parameters FInt and CI are important: FInt is the used Fortran integer type and CI is the used  ODEinternalCallInfos SubType. Because unsafe_SLATEC1RHSCallback is a parameterized method, special variants are compiled, if FInt or CI changes. If CI itself is a parameterized type (depending on all the user-given Julia-functions like right-hand side, etc.) then calls to such Julia-functions can be resolved at compile-time (instead of dynamic calls during run-time).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_Dbc_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_Dbc_cb",
    "category": "function",
    "text": "This is the derivative of the boundary-conditions given as callback to bvpm2 in the case with no unknown parameters.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_Dbcpar_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_Dbcpar_cb",
    "category": "function",
    "text": "This is the derivative of the boundary-conditions given as callback to bvpm2 in the case with unknown parameters.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_Drhs_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_Drhs_cb",
    "category": "function",
    "text": "This is the derivative of the right-hand side given as callback to bvpm2 in the case where the problem has no unknown parameters.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_Drhspar_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_Drhspar_cb",
    "category": "function",
    "text": "This is the derivative of the right-hand side given as callback to bvpm2 in the case where the problem has unknown parameters.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_bc_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_bc_cb",
    "category": "function",
    "text": "This is the boundary-conditions function given as callback to bvpm2 in the case with no unknown parameters.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_bcpar_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_bcpar_cb",
    "category": "function",
    "text": "This is the boundary-conditions function given as callback to bvpm2 in the case with unknown parameters.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_guess_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_guess_cb",
    "category": "function",
    "text": "This is the guess function given as callback to bvpm2.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_rhs_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_rhs_cb",
    "category": "function",
    "text": "This is the right-hand side given as callback to bvpm2 in the case where the problem has no unkown parameters.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpm2_rhspar_cb",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpm2_rhspar_cb",
    "category": "function",
    "text": "This is the right-hand side given as callback to bvpm2 in the case where the problem has unknown parameters.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpsolbc",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpsolbc",
    "category": "function",
    "text": " function unsafe_bvpsolbc(xa_::Ptr{Float64}, xb_::Ptr{Float64}, \n   r_::Ptr{Float64}) -> nothing\n\nThis is the callback for the boundary conditions given to bvpsol.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\nuses bvpsolbc\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpsolbc_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpsolbc_c",
    "category": "function",
    "text": "  function unsafe_bvpsolbc_c()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpsolivp",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpsolivp",
    "category": "function",
    "text": " function unsafe_bvpsolivp(n_::Ptr{FInt}, \n         fcn_::Ptr{Cvoid}, t_::Ptr{Float64}, x_::Ptr{Float64}, \n         tend_::Ptr{Float64}, tol_::Ptr{Float64}, hmax_::Ptr{Float64}, \n         h_::Ptr{Float64}, kflag_::Ptr{FInt}) where FInt<:FortranInt\n\nThis is the callback for bvpsol to solve initial value problems.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\nuses bvpsolivp\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpsolrhs",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpsolrhs",
    "category": "function",
    "text": " function unsafe_bvpsolrhs(n_::Ptr{FInt}, t_::Ptr{Float64}, \n         x_::Ptr{Float64}, f_::Ptr{Float64}) where FInt<:FortranInt\n\nThis is the right-hand side given as callback to bvpsol.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\nuses hw1rhs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_bvpsolrhs_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_bvpsolrhs_c",
    "category": "function",
    "text": " function unsafe_bvpsolrhs_c(fint_flag::FInt) where FInt\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_colnew_Dbc",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_colnew_Dbc",
    "category": "function",
    "text": " function unsafe_colnew_Dbc(i_::Ptr{FInt},\n   z_::Ptr{Float64}, Dbc_::Ptr{Float64}) where FInt<:FortranInt\n\nThis is the jacobian for the side-/boundary-conditions given as callback to colnew.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_colnew_Drhs",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_colnew_Drhs",
    "category": "function",
    "text": "  function unsafe_colnew_Drhs(t_::Ptr{Float64}, z_::Ptr{Float64},\n    df_::Ptr{Float64})\n\nThis is the Jacobian for the right-hand side given as callback to colnew.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_colnew_bc",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_colnew_bc",
    "category": "function",
    "text": " function unsafe_colnew_bc(i_::Ptr{FInt},\n   z_::Ptr{Float64}, bc_::Ptr{Float64}) where FInt<:FortranInt\n\nThis is the side-/boundary-conditions given as callback to colnew.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_colnew_guess",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_colnew_guess",
    "category": "function",
    "text": "This is the guess function given as callback to colnew.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_colnew_rhs",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_colnew_rhs",
    "category": "function",
    "text": "  function unsafe_colnew_rhs(t_::Ptr{Float64}, z_::Ptr{Float64}, \n    f_::Ptr{Float64})\n\nThis is the right-hand side given as callback to colnew.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_dopriSoloutCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_dopriSoloutCallback",
    "category": "function",
    "text": " function unsafe_dopriSoloutCallback(\n         nr_::Ptr{FInt}, told_::Ptr{Float64}, t_::Ptr{Float64}, \n         x_::Ptr{Float64}, n_::Ptr{FInt}, con_::Ptr{Float64},\n         icomp_::Ptr{FInt}, nd_::Ptr{FInt}, rpar_::Ptr{Float64}, \n         cbi::CI, irtrn_::Ptr{FInt}) where {FInt<:FortranInt, \n                                            CI<:DopriInternalCallInfos}\n\nThis is the solout given as callback to Fortran-dopri.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-pointers.\n\nThis function saves the state informations of the solver in DopriInternalCallInfos, where they can be found by the eval_sol_fcn, see create_dopri_eval_sol_fcn_closure.\n\nThen the user-supplied output_fcn is called (which in turn can use eval_sol_fcn, to evalutate the solution at intermediate points).\n\nThe return value of the output_fcn is propagated to  DOPRI5_ or DOP853_.\n\nFor the typical calling sequence, see DopriInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_dopriSoloutCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_dopriSoloutCallback_c",
    "category": "function",
    "text": " function unsafe_dopriSoloutCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n    -> C-callable function pointer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_odexSoloutCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_odexSoloutCallback",
    "category": "function",
    "text": " function unsafe_odexSoloutCallback(\n         nr_::Ptr{FInt}, told_::Ptr{Float64}, t_::Ptr{Float64}, \n         x_::Ptr{Float64}, n_::Ptr{FInt}, con_::Ptr{Float64}, \n         ncon_::Ptr{FInt}, icomp_::Ptr{FInt}, nd_::Ptr{FInt}, \n         rpar_::Ptr{Float64}, cbi::CI, \n         irtrn_::Ptr{FInt}) where {FInt<:FortranInt,\n                                   CI<:OdexInternalCallInfos}\n\nThis is the solout given as callback to Fortran-odex.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-pointers.\n\nThis function saves the state informations of the solver in OdexInternalCallInfos, where they can be found by the eval_sol_fcn, see create_odex_eval_sol_fcn_closure.\n\nThen the user-supplied output_fcn is called (which in turn can use eval_sol_fcn, to evalutate the solution at intermediate points).\n\nThe return value of the output_fcn is propagated to ODEX_.\n\nFor the typical calling sequence, see OdexInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_odexSoloutCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_odexSoloutCallback_c",
    "category": "function",
    "text": " function unsafe_odexSoloutCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_radauSoloutCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_radauSoloutCallback",
    "category": "function",
    "text": " function unsafe_radauSoloutCallback(\n         nr_::Ptr{FInt}, told_::Ptr{Float64}, t_::Ptr{Float64}, \n         x_::Ptr{Float64}, cont_::Ptr{Float64}, lrc_::Ptr{FInt}, \n         n_::Ptr{FInt}, rpar_::Ptr{Float64}, \n         cbi::CI, irtrn_::Ptr{FInt}) where {FInt<:FortranInt,\n                                            CI<:RadauInternalCallInfos}\n\nThis is the solout given as callback to Fortran radau5/radau.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-pointers.\n\nThis function saves the state informations of the solver in RadauInternalCallInfos, where they can be found by the eval_sol_fcn, see create_radau_eval_sol_fcn_closure.\n\nThen the user-supplied output_fcn is called (which in turn can use eval_sol_fcn, to evalutate the solution at intermediate points).\n\nThe return value of the output_fcn is propagated to RADAU5_/RADAU_.\n\nFor the typical calling sequence, see RadauInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_radauSoloutCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_radauSoloutCallback_c",
    "category": "function",
    "text": " function unsafe_radauSoloutCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_rodasSoloutCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_rodasSoloutCallback",
    "category": "function",
    "text": " function unsafe_rodasSoloutCallback(\n         nr_::Ptr{FInt}, told_::Ptr{Float64}, t_::Ptr{Float64}, \n         x_::Ptr{Float64}, cont_::Ptr{Float64}, lrc_::Ptr{FInt}, \n         n_::Ptr{FInt}, rpar_::Ptr{Float64}, cbi::CI, \n         irtrn_::Ptr{FInt}) where {FInt<:FortranInt, \n                                   CI<:RodasInternalCallInfos}\n\nThis is the solout given as callback to Fortran-rodas.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-pointers.\n\nThis function saves the state informations of the solver in RodasInternalCallInfos, where they can be found by the eval_sol_fcn, see create_rodas_eval_sol_fcn_closure.\n\nThen the user-supplied output_fcn is called (which in turn can use eval_sol_fcn, to evalutate the solution at intermediate points).\n\nThe return value of the output_fcn is propagated to RODAS_.\n\nFor the typical calling sequence, see RodasInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_rodasSoloutCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_rodasSoloutCallback_c",
    "category": "function",
    "text": " function unsafe_rodasSoloutCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_seulexSoloutCallback",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_seulexSoloutCallback",
    "category": "function",
    "text": " function unsafe_seulexSoloutCallback(\n         nr_::Ptr{FInt}, told_::Ptr{Float64}, t_::Ptr{Float64}, \n         x_::Ptr{Float64}, rc_::Ptr{Float64}, lrc_::Ptr{FInt}, \n         ic_::Ptr{FInt}, lic_::Ptr{FInt}, n_::Ptr{FInt}, \n         rpar_::Ptr{Float64}, cbi::CI, \n         irtrn_::Ptr{FInt}) where {FInt<:FortranInt, \n                                   CI<:SeulexInternalCallInfos}\n\nThis is the solout given as callback to Fortran-seulex.\n\nThe unsafe prefix in the name indicates that no validations are  performed on the Ptr-pointers.\n\nThis function saves the state informations of the solver in SeulexInternalCallInfos, where they can be found by the eval_sol_fcn, see create_seulex_eval_sol_fcn_closure.\n\nThen the user-supplied output_fcn is called (which in turn can use eval_sol_fcn, to evalutate the solution at intermediate points).\n\nThe return value of the output_fcn is propagated to SEULEX_.\n\nFor the typical calling sequence, see SeulexInternalCallInfos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ODEInterface.unsafe_seulexSoloutCallback_c",
    "page": "Docstrings",
    "title": "ODEInterface.unsafe_seulexSoloutCallback_c",
    "category": "function",
    "text": " function unsafe_seulexSoloutCallback_c(cbi::CI, \n         fint_flag::FInt) where {FInt,CI}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ODEInterface.@import_DLbvpm2ODEInterface.@import_DLbvpsolODEInterface.@import_DLcolnewODEInterface.@import_DLddeabmODEInterface.@import_DLddebdfODEInterface.@import_DLdop853ODEInterface.@import_DLdopri5ODEInterface.@import_DLodexODEInterface.@import_DLradauODEInterface.@import_DLradau5ODEInterface.@import_DLrodasODEInterface.@import_DLseulexODEInterface.@import_LOGODEInterface.@import_OPTcommonODEInterface.@import_RHScallmodeODEInterface.@import_bandedmatrixODEInterface.@import_bandedmatrixfuncsODEInterface.@import_bvpm2ODEInterface.@import_bvpm2_helpODEInterface.@import_bvpsolODEInterface.@import_bvpsol_helpODEInterface.@import_colnewODEInterface.@import_colnew_helpODEInterface.@import_ddeabmODEInterface.@import_ddeabm_helpODEInterface.@import_ddebdfODEInterface.@import_ddebdf_helpODEInterface.@import_dop853ODEInterface.@import_dop853_helpODEInterface.@import_dopri5ODEInterface.@import_dopri5_helpODEInterface.@import_dynamicloadODEInterface.@import_exceptionsODEInterface.@import_helpODEInterface.@import_hugeODEInterface.@import_normalODEInterface.@import_odecallODEInterface.@import_odexODEInterface.@import_odex_helpODEInterface.@import_optionsODEInterface.@import_outputfcnODEInterface.@import_radauODEInterface.@import_radau5ODEInterface.@import_radau5_helpODEInterface.@import_radau_helpODEInterface.@import_rodasODEInterface.@import_rodas_helpODEInterface.@import_seulexODEInterface.@import_seulex_helpODEInterface.AbstractArgumentsODESolverODEInterface.AbstractODESolutionODEInterface.AbstractOptionsODEODEInterface.ArgumentErrorODEODEInterface.BandedMatrixODEInterface.BandedMatrix_storageODEInterface.Bvpm2ODEInterface.Bvpm2_guess_cbiODEInterface.Bvpm2_solve_cbiODEInterface.BvpsolArgumentsODEInterface.BvpsolInternalCallInfosODEInterface.ColnewArgumentsODEInterface.ColnewInternalCallInfosODEInterface.ColnewSolutionODEInterface.DL_BVPM2ODEInterface.DL_BVPSOLODEInterface.DL_BVPSOL_I32ODEInterface.DL_COLNEWODEInterface.DL_COLNEW_I32ODEInterface.DL_DDEABMODEInterface.DL_DDEABM_I32ODEInterface.DL_DDEBDFODEInterface.DL_DDEBDF_I32ODEInterface.DL_DOP853ODEInterface.DL_DOP853_I32ODEInterface.DL_DOPRI5ODEInterface.DL_DOPRI5_I32ODEInterface.DL_ODEXODEInterface.DL_ODEX_I32ODEInterface.DL_RADAUODEInterface.DL_RADAU5ODEInterface.DL_RADAU5_I32ODEInterface.DL_RADAU_I32ODEInterface.DL_RODASODEInterface.DL_RODAS_I32ODEInterface.DL_SEULEXODEInterface.DL_SEULEX_I32ODEInterface.DdeabmArgumentsODEInterface.DdeabmInternalCallInfosODEInterface.DdebdfArgumentsODEInterface.DdebdfInternalCallInfosODEInterface.DopriArgumentsODEInterface.DopriInternalCallInfosODEInterface.FeatureNotSupportedODEInterface.FortranIntODEInterface.FunctionCallNotSupportedODEInterface.InternalErrorODEODEInterface.LOG_ALLODEInterface.LOG_BCODEInterface.LOG_BVPIVPSOLODEInterface.LOG_EVALSOLODEInterface.LOG_GENERALODEInterface.LOG_GUESSODEInterface.LOG_JACODEInterface.LOG_JACBCODEInterface.LOG_MASSODEInterface.LOG_NOTHINGODEInterface.LOG_OUTPUTFCNODEInterface.LOG_RHSODEInterface.LOG_RHSDTODEInterface.LOG_SOLOUTODEInterface.LOG_SOLVERARGSODEInterface.MethodDLinfoODEInterface.ODEInterfaceODEInterface.ODE_SOLVER_INTERNALODEInterface.ODE_SOLVER_JULIAODEInterface.ODE_SOLVER_USAGEODEInterface.ODEinternalCallInfosODEInterface.OPT_ADDGRIDPOINTSODEInterface.OPT_ATOLODEInterface.OPT_BVPCLASSODEInterface.OPT_COARSEGUESSGRIDODEInterface.OPT_COLLOCATIONPTSODEInterface.OPT_DENSEOUTPUTWOEEODEInterface.OPT_DIAGNOSTICOUTPUTODEInterface.OPT_DIMOFIND1VARODEInterface.OPT_DIMOFIND2VARODEInterface.OPT_DIMOFIND3VARODEInterface.OPT_EPSODEInterface.OPT_ERRORCONTROLODEInterface.OPT_FREEZEINTERVALSODEInterface.OPT_FREEZESSLEFTODEInterface.OPT_FREEZESSRIGHTODEInterface.OPT_INITIALSSODEInterface.OPT_INITSTAGESODEInterface.OPT_INTERPOLDEGREEODEInterface.OPT_IVPOPTODEInterface.OPT_JACOBIBANDSTRUCTODEInterface.OPT_JACOBIMATRIXODEInterface.OPT_JACRECOMPFACTORODEInterface.OPT_LAMBDADENSEODEInterface.OPT_LOGIOODEInterface.OPT_LOGLEVELODEInterface.OPT_M1ODEInterface.OPT_M2ODEInterface.OPT_MASSMATRIXODEInterface.OPT_MAXEXCOLUMNODEInterface.OPT_MAXNEWTONITERODEInterface.OPT_MAXSSODEInterface.OPT_MAXSTABCHECKLINEODEInterface.OPT_MAXSTABCHECKSODEInterface.OPT_MAXSTAGESODEInterface.OPT_MAXSTEPSODEInterface.OPT_MAXSUBINTERVALSODEInterface.OPT_METHODCHOICEODEInterface.OPT_MINSTAGESODEInterface.OPT_NEWTONSTARTZEROODEInterface.OPT_NEWTONSTOPCRITODEInterface.OPT_ORDERDECFACTORODEInterface.OPT_ORDERDECFRACODEInterface.OPT_ORDERDECSTEPFAC1ODEInterface.OPT_ORDERDECSTEPFAC2ODEInterface.OPT_ORDERINCFACTORODEInterface.OPT_ORDERINCFRACODEInterface.OPT_OUTPUTATTIMESODEInterface.OPT_OUTPUTFCNODEInterface.OPT_OUTPUTMODEODEInterface.OPT_RHOODEInterface.OPT_RHO2ODEInterface.OPT_RHSAUTONOMOUSODEInterface.OPT_RHSTIMEDERIVODEInterface.OPT_RHS_CALLMODEODEInterface.OPT_RTOLODEInterface.OPT_SINGULARTERMODEInterface.OPT_SOLMETHODODEInterface.OPT_SSBETAODEInterface.OPT_SSMAXSELODEInterface.OPT_SSMINSELODEInterface.OPT_SSREDUCTIONODEInterface.OPT_SSSELECTPAR1ODEInterface.OPT_SSSELECTPAR2ODEInterface.OPT_STEPSIZESEQUENCEODEInterface.OPT_STEPSIZESTRATEGYODEInterface.OPT_STESTODEInterface.OPT_SUBINTERVALSODEInterface.OPT_TRANSJTOHODEInterface.OPT_TSTOPODEInterface.OPT_WORKFORDECODEInterface.OPT_WORKFORJACODEInterface.OPT_WORKFORRHSODEInterface.OPT_WORKFORSOLODEInterface.OUTPUTFCN_CALL_DONEODEInterface.OUTPUTFCN_CALL_INITODEInterface.OUTPUTFCN_CALL_REASONODEInterface.OUTPUTFCN_CALL_STEPODEInterface.OUTPUTFCN_DENSEODEInterface.OUTPUTFCN_MODEODEInterface.OUTPUTFCN_NEVERODEInterface.OUTPUTFCN_RETURN_VALUEODEInterface.OUTPUTFCN_RET_CONTINUEODEInterface.OUTPUTFCN_RET_CONTINUE_XCHANGEDODEInterface.OUTPUTFCN_RET_STOPODEInterface.OUTPUTFCN_WODENSEODEInterface.OdexArgumentsODEInterface.OdexInternalCallInfosODEInterface.OptionsODEODEInterface.OutputErrorODEODEInterface.RHS_CALL_INSITUODEInterface.RHS_CALL_MODEODEInterface.RHS_CALL_RETURNS_ARRAYODEInterface.RadauArgumentsODEInterface.RadauInternalCallInfosODEInterface.RodasArgumentsODEInterface.RodasInternalCallInfosODEInterface.SLATEC_continuation_callODEInterface.SLATEC_licenseODEInterface.SeulexArgumentsODEInterface.SeulexInternalCallInfosODEInterface.SolverDLinfoODEInterface.SolverInfoODEInterface.SolverODEnotLoadedODEInterface.SolverVariantODEInterface.StateErrorODEODEInterface.WrappedODEExceptionODEInterface.__init__ODEInterface.buf2strODEInterface.bvpm2_DbcODEInterface.bvpm2_DrhsODEInterface.bvpm2_bcODEInterface.bvpm2_check_handleODEInterface.bvpm2_check_stateODEInterface.bvpm2_copyODEInterface.bvpm2_create_handleODEInterface.bvpm2_destroyODEInterface.bvpm2_extendODEInterface.bvpm2_get_detailsODEInterface.bvpm2_get_paramsODEInterface.bvpm2_get_xODEInterface.bvpm2_global_cbiODEInterface.bvpm2_guessODEInterface.bvpm2_initODEInterface.bvpm2_init_testsODEInterface.bvpm2_is_handle_validODEInterface.bvpm2_rhsODEInterface.bvpm2_show_detailsODEInterface.bvpm2_solveODEInterface.bvpm2_terminateODEInterface.bvpsolODEInterface.bvpsol_global_cbiODEInterface.bvpsol_i32ODEInterface.bvpsol_implODEInterface.bvpsol_ivp_dummyODEInterface.bvpsolbcODEInterface.bvpsolivpODEInterface.call_julia_output_fcnODEInterface.check_slatec_output_modeODEInterface.colnewODEInterface.colnew_DbcODEInterface.colnew_DrhsODEInterface.colnew_bcODEInterface.colnew_global_cbiODEInterface.colnew_guessODEInterface.colnew_i32ODEInterface.colnew_implODEInterface.colnew_rhsODEInterface.copyOptions!ODEInterface.createBandedMatrixODEInterface.create_dopri_eval_sol_fcn_closureODEInterface.create_odex_eval_sol_fcn_closureODEInterface.create_radau_eval_sol_fcn_closureODEInterface.create_rodas_eval_sol_fcn_closureODEInterface.create_seulex_eval_sol_fcn_closureODEInterface.ddeabmODEInterface.ddeabm_i32ODEInterface.ddeabm_implODEInterface.ddeabm_maxnumODEInterface.ddebdfODEInterface.ddebdf_i32ODEInterface.ddebdf_implODEInterface.ddebdf_maxnumODEInterface.dlSolversInfoODEInterface.doRadauSolverCallODEInterface.dop853ODEInterface.dop853_i32ODEInterface.dop853_implODEInterface.dopri5ODEInterface.dopri5_i32ODEInterface.dopri5_implODEInterface.dopri_extract_commonOptODEInterface.dummy_funcODEInterface.evalODEInterface.evalSolutionODEInterface.eval_sol_fcn_doneODEInterface.eval_sol_fcn_initODEInterface.eval_sol_fcn_noevalODEInterface.extractCommonRadauOptODEInterface.extractJacobiOptODEInterface.extractLogOptionsODEInterface.extractMassMatrixODEInterface.extractOutputFcnODEInterface.extractRhsTimeDerivOptODEInterface.extractSlatecJacobiOptODEInterface.extractSlatecOutputAtTimesODEInterface.extractSpecialStructureOptODEInterface.extractTOLsODEInterface.fullODEInterface.fullToArrayODEInterface.getAllMethodPtrsODEInterface.getMatrixCheckSizeODEInterface.getOptionODEInterface.getSolutionGridODEInterface.getVectorCheckLengthODEInterface.get_proxy_methodsODEInterface.get_view_functionODEInterface.guess_path_of_moduleODEInterface.help_bvpm2_compileODEInterface.help_bvpm2_licenseODEInterface.help_bvpm2_proxyODEInterface.help_bvpsol_compileODEInterface.help_bvpsol_licenseODEInterface.help_callsolversODEInterface.help_colnew_compileODEInterface.help_colnew_licenseODEInterface.help_ddeabm_compileODEInterface.help_ddeabm_licenseODEInterface.help_ddebdf_compileODEInterface.help_ddebdf_licenseODEInterface.help_dop853_compileODEInterface.help_dop853_licenseODEInterface.help_dopri5_compileODEInterface.help_dopri5_licenseODEInterface.help_installODEInterface.help_internalsODEInterface.help_loadsolversODEInterface.help_odex_compileODEInterface.help_odex_licenseODEInterface.help_optionsODEInterface.help_outputfcnODEInterface.help_overviewODEInterface.help_radau5_compileODEInterface.help_radau5_licenseODEInterface.help_radau_compileODEInterface.help_radau_licenseODEInterface.help_rodas_compileODEInterface.help_rodas_licenseODEInterface.help_seulex_compileODEInterface.help_seulex_licenseODEInterface.help_solversupportODEInterface.help_specialstructureODEInterface.hw1rhsODEInterface.hw_licenseODEInterface.includeODEInterface.isdiagonalemptyODEInterface.isinbandODEInterface.isscalarODEInterface.isvalidinbandODEInterface.loadODESolversODEInterface.odecallODEInterface.odexODEInterface.odex_i32ODEInterface.odex_implODEInterface.output_fcn_donothingODEInterface.radauODEInterface.radau5ODEInterface.radau5_i32ODEInterface.radau5_implODEInterface.radau_i32ODEInterface.radau_implODEInterface.rangeofdiagODEInterface.rodasODEInterface.rodas_i32ODEInterface.rodas_implODEInterface.setOption!ODEInterface.setOptions!ODEInterface.setdiagonal!ODEInterface.setdiagonals!ODEInterface.seulexODEInterface.seulex_i32ODEInterface.seulex_implODEInterface.solverInfoODEInterface.solver_extract_commonOptODEInterface.solver_extract_rhsModeODEInterface.solver_initODEInterface.solver_startODEInterface.solvers_outputattimesODEInterface.trytoloadlibODEInterface.trytoloadmethodODEInterface.unloadODESolversODEInterface.unsafe_HW1JacCallbackODEInterface.unsafe_HW1JacCallback_cODEInterface.unsafe_HW1MassCallbackODEInterface.unsafe_HW1MassCallback_cODEInterface.unsafe_HW1RHSCallbackODEInterface.unsafe_HW1RHSCallback_cODEInterface.unsafe_HW2RHSCallbackODEInterface.unsafe_HW2RHSCallback_cODEInterface.unsafe_HWRhsTimeDerivCallbackODEInterface.unsafe_HWRhsTimeDerivCallback_cODEInterface.unsafe_SLATEC1JacCallbackODEInterface.unsafe_SLATEC1JacCallback_cODEInterface.unsafe_SLATEC1RHSCallbackODEInterface.unsafe_SLATEC1RHSCallback_cODEInterface.unsafe_bvpm2_Dbc_cbODEInterface.unsafe_bvpm2_Dbc_cb_cODEInterface.unsafe_bvpm2_Dbcpar_cbODEInterface.unsafe_bvpm2_Dbcpar_cb_cODEInterface.unsafe_bvpm2_Drhs_cbODEInterface.unsafe_bvpm2_Drhs_cb_cODEInterface.unsafe_bvpm2_Drhspar_cbODEInterface.unsafe_bvpm2_Drhspar_cb_cODEInterface.unsafe_bvpm2_bc_cbODEInterface.unsafe_bvpm2_bc_cb_cODEInterface.unsafe_bvpm2_bcpar_cbODEInterface.unsafe_bvpm2_bcpar_cb_cODEInterface.unsafe_bvpm2_guess_cbODEInterface.unsafe_bvpm2_guess_cb_cODEInterface.unsafe_bvpm2_rhs_cbODEInterface.unsafe_bvpm2_rhs_cb_cODEInterface.unsafe_bvpm2_rhspar_cbODEInterface.unsafe_bvpm2_rhspar_cb_cODEInterface.unsafe_bvpsolbcODEInterface.unsafe_bvpsolbc_cODEInterface.unsafe_bvpsolivpODEInterface.unsafe_bvpsolivp_cODEInterface.unsafe_bvpsolrhsODEInterface.unsafe_bvpsolrhs_cODEInterface.unsafe_colnew_DbcODEInterface.unsafe_colnew_Dbc_cODEInterface.unsafe_colnew_DrhsODEInterface.unsafe_colnew_Drhs_cODEInterface.unsafe_colnew_bcODEInterface.unsafe_colnew_bc_cODEInterface.unsafe_colnew_guessODEInterface.unsafe_colnew_guess_cODEInterface.unsafe_colnew_rhsODEInterface.unsafe_colnew_rhs_cODEInterface.unsafe_dopriSoloutCallbackODEInterface.unsafe_dopriSoloutCallback_cODEInterface.unsafe_odexSoloutCallbackODEInterface.unsafe_odexSoloutCallback_cODEInterface.unsafe_radauSoloutCallbackODEInterface.unsafe_radauSoloutCallback_cODEInterface.unsafe_rodasSoloutCallbackODEInterface.unsafe_rodasSoloutCallback_cODEInterface.unsafe_seulexSoloutCallbackODEInterface.unsafe_seulexSoloutCallback_c"
},

]}
