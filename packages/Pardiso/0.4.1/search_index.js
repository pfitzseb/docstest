var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Pardiso.jl-1",
    "page": "Readme",
    "title": "Pardiso.jl",
    "category": "section",
    "text": "The Pardiso.jl package provides an interface for using PARDISO 5.0 and Intel MKL PARDISO from the Julia language. You cannot use Pardiso.jl without either having a valid license for PARDISO or having the MKL library installed. This package is available free of charge and in no way replaces or alters any functionality of the linked libraries."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package itself is installed with Pkg.add(\"Pardiso\") but you also need to follow the installation instructions below to install a working PARDISO library."
},

{
    "location": "#MKL-PARDISO-1",
    "page": "Readme",
    "title": "MKL PARDISO",
    "category": "section",
    "text": "Set the MKLROOT environment variable. See the MKL getting started manual for a thorough guide how to set this variable correctly, typically done by executing something like source /opt/intel/bin/compilervars.sh intel64.\nRun Pkg.build(\"Pardiso\")\nRun Pardiso.show_build_log() to see the build log for additional information."
},

{
    "location": "#PARDISO-1",
    "page": "Readme",
    "title": "PARDISO",
    "category": "section",
    "text": "Put the PARDISO library libpardisoX00-WIN-X86-64.dll, libpardisoX00-GNUXXX-X86-64.so or libpardisoX00-MACOS-X86-64.dylib in a folder somewhere and set the environment variable JULIA_PARDISO to that folder. For example, create an entry ENV[\"JULIA_PARDISO\"] = \"/Users/Someone/Pardiso\" in the .julia/config/startup.jl file and download the Pardiso library to that folder.\nPerform the platform specific steps below\nRun Pkg.build(\"Pardiso\")\nRun Pardiso.show_build_log() to see the build log for additional information."
},

{
    "location": "#Linux-/-macOS-specific-1",
    "page": "Readme",
    "title": "Linux / macOS specific",
    "category": "section",
    "text": "Make sure that the version of gfortran corresponding to the pardiso library is installed.\nMake sure OpenMP is installed.\nInstall a (fast) installation of a BLAS and LAPACK (this should preferably be single threaded since PARDISO handles threading itself), using for example OpenBLAS"
},

{
    "location": "#Special-macOS-instructions-for-Pardiso-version-5.0-1",
    "page": "Readme",
    "title": "Special macOS instructions for Pardiso version 5.0",
    "category": "section",
    "text": "The following (exact) paths need to exist:/usr/local/lib/libgfortran.3.dylib\n/usr/local/lib/libgomp.1.dylib\n/usr/local/lib/libquadmath.0.dylibIf these do not exist, you can create symlinks from the current location of the libraries. If you are using homebrew, these libraries exist in the gcc installation at e.g. /usr/local/Cellar/gcc/7.2.0/lib/gcc/7. Creating a symlink would then look like:ln -s /usr/local/Cellar/gcc/7.2.0/lib/gcc/7/libgfortran.dylib /usr/local/lib/libgfortran.3.dylib"
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "This section will explain how to solve equations using Pardiso.jl with the default settings of the library. For more advanced users there is a section further down."
},

{
    "location": "#Creating-the-PardisoSolver-1",
    "page": "Readme",
    "title": "Creating the PardisoSolver",
    "category": "section",
    "text": "A PardisoSolver is created with PardisoSolver() for solving with PARDISO 5.0 or MKLPardisoSolver() for solving with MKL PARDISO. This object will hold the settings of the solver and will be passed into the solve functions. In the following sections an instance of a PardisoSolver or an MKLPardisoSolver() will be referred to as ps."
},

{
    "location": "#Solving-1",
    "page": "Readme",
    "title": "Solving",
    "category": "section",
    "text": "Solving equations is done with the solve and solve! functions. They have the following signatures:solve(ps, A, B) solves AX=B and returns X\nsolve!(ps, X, A, B) solves AX=B and stores it in XThe symbols :T or :C can be added as an extra argument to solve the transposed or the conjugate transposed system of equations, respectively.Here is an example of solving a system of real equations with two right-hand sides:ps = PardisoSolver()\n\nA = sparse(rand(10, 10))\nB = rand(10, 2)\nX = zeros(10, 2)\nsolve!(ps, X, A, B)which happened to give the resultjulia> X\n10x2 Array{Float64,2}:\n -0.487361  -0.715372\n -0.644219  -3.38342\n  0.465575   4.4838\n  1.14448   -0.103854\n  2.00892   -7.04965\n  0.870507   1.7014\n  0.590723  -5.74338\n -0.843841  -0.903796\n -0.279381   7.24754\n -1.17295    8.47922"
},

{
    "location": "#Setting-the-number-of-threads-1",
    "page": "Readme",
    "title": "Setting the number of threads",
    "category": "section",
    "text": "The number of threads to use is set in different ways for MKL PARDISO and PARDISO 5.0."
},

{
    "location": "#MKL-PARDISO-2",
    "page": "Readme",
    "title": "MKL PARDISO",
    "category": "section",
    "text": "set_nprocs!(ps, i) # Sets the number of threads to use\nget_nprocs(ps) # Gets the number of threads being used"
},

{
    "location": "#PARDISO-5.0-1",
    "page": "Readme",
    "title": "PARDISO 5.0",
    "category": "section",
    "text": "The number of threads are set at the creation of the PardisoSolver by looking for the environment variable OMP_NUM_THREADS. This can be done in Julia with for example ENV[\"OMP_NUM_THREADS\"] = 2. Note: OMP_NUM_THREADS must be set before Pardiso is loaded and can not be changed during runtime.The number of threads used by a PardisoSolver can be retrieved with get_nprocs(ps)"
},

{
    "location": "#More-advanced-usage.-1",
    "page": "Readme",
    "title": "More advanced usage.",
    "category": "section",
    "text": "This section discusses some more advanced usage of Pardiso.jl.For terminology in this section please refer to the PARDISO 5.0 manual and the MKL PARDISO section.After using functionality in this section, calls should no longer be made to the solve functions but instead directly to the functionpardiso(ps, X, A, B)This will ensure that the properties you set will not be overwritten.If you want, you can use get_matrix(ps, A, T) to return a matrix that is suitable to use with pardiso depending on the matrix type that ps has set. The parameter T is a symbol representing if you will solve the normal, transposed or conjugated system. These are represented by :N, :T, :C) respectively.For ease of use, Pardiso.jl provides enums for most options. These are not exported so has to either be explicitly imported or qualified with the module name first. It is possible to both use the enum as an input key to the options or the corresponding integer as given in the manuals."
},

{
    "location": "#Setting-the-matrix-type-1",
    "page": "Readme",
    "title": "Setting the matrix type",
    "category": "section",
    "text": "The matrix type can be explicitly set with set_matrixtype!(ps, key) where the key has the following meaning:enum integer Matrix type\nREAL_SYM 1 real and structurally symmetric\nREALSYMPOSDEF 2 real and symmetric positive definite\nREALSYMINDEF -2 real and symmetric indefinite\nCOMPLEXSTRUCTSYM 3 complex and structurally symmetric\nCOMPLEXHERMPOSDEF 4 complex and Hermitian positive definite\nCOMPLEXHERMINDEF -4 complex and Hermitian indefinite\nCOMPLEX_SYM 6 complex and symmetric\nREAL_NONSYM 11 real and nonsymmetric\nCOMPLEX_NONSYM 13 complex and nonsymmetricThe matrix type for a solver can be retrieved with get_matrixtype(ps)."
},

{
    "location": "#Setting-the-solver-(5.0-only)-1",
    "page": "Readme",
    "title": "Setting the solver (5.0 only)",
    "category": "section",
    "text": "PARDISO 5.0 supports direct and iterative solvers. The solver is set with set_solver!(ps, key) where the key has the following meaning:enum integer Solver\nDIRECT_SOLVER 0 sparse direct solver\nITERATIVE_SOLVER 1 multi-recursive iterative solver"
},

{
    "location": "#Setting-the-phase-1",
    "page": "Readme",
    "title": "Setting the phase",
    "category": "section",
    "text": "Depending on the phase calls to solve (and pardiso which is mentioned later) does different things. The phase is set with set_phase!(ps, key) where key has the meaning:enum integer Solver Execution Steps\nANALYSIS 11 Analysis\nANALYSISNUMFACT 12 Analysis, numerical factorization\nANALYSISNUMFACTSOLVEREFINE 13 Analysis, numerical factorization, solve, iterative refinement\nNUM_FACT 22 Numerical factorization\nSELECTED_INVERSION -22 Selected Inversion\nNUMFACTSOLVE_REFINE 23 Numerical factorization, solve, iterative refinement\nSOLVEITERATIVEREFINE 33 Solve, iterative refinement\nSOLVEITERATIVEREFINEONLYFORWARD 331 MKL only, like phase=33, but only forward substitution\nSOLVEITERATIVEREFINEONLYDIAG 332 MKL only, like phase=33, but only diagonal substitution (if available)\nSOLVEITERATIVEREFINEONLYBACKWARD 333 MKL only, like phase=33, but only backward substitution\nRELEASELUMNUM 0 Release internal memory for L and U matrix number MNUM\nRELEASE_ALL -1 Release all internal memory for all matrices"
},

{
    "location": "#Setting-IPARM-and-DPARM-explicitly-1",
    "page": "Readme",
    "title": "Setting IPARM and DPARM explicitly",
    "category": "section",
    "text": "Advanced users likely want to explicitly set and retrieve the IPARM and DPARM (5.0 only) parameters. This can be done with the getters and setters:get_iparm(ps, i) # Gets IPARM[i]\nget_iparms(ps) # Gets IPARM\nset_iparm!(ps, i, v) # Sets IPARM[i] = v\n\n# 5.0 only\nget_dparm(ps, i) # Gets DPARM[i]\nget_dparms(ps) # Gets DPARM\nset_dparm!(ps, i, v) # Sets DPARM[i] = vTo set the default values of the IPARM and DPARM call pardisoinit(ps). The default values depend on what solver and matrix type is set."
},

{
    "location": "#Setting-message-level-1",
    "page": "Readme",
    "title": "Setting message level",
    "category": "section",
    "text": "It is possible for Pardiso to print out timings and statistics when solving. This is done by set_msglvl!(ps, key) where key has the meaning:enum integer Solver\nMESSAGELEVELOFF 0 no statistics printed\nMESSAGELEVELON 1 statistics printed"
},

{
    "location": "#Matrix-and-vector-checkers-1",
    "page": "Readme",
    "title": "Matrix and vector checkers",
    "category": "section",
    "text": "PARDISO 5.0 comes with a few matrix and vector checkers to check the consistency and integrity of the input data. These can be called with the functions:printstats(ps, A, B)\ncheckmatrix(ps, A)\ncheckvec(ps, B)In MKL PARDISO this is instead done by setting IPARM[27] to 1 before calling pardiso."
},

{
    "location": "#MNUM,-MAXFCT,-PERM-1",
    "page": "Readme",
    "title": "MNUM, MAXFCT, PERM",
    "category": "section",
    "text": "These are set and retrieved with the functionsset_mnum!(ps, i)\nget_mnum(ps)\n\nset_maxfct!(ps, i)\nget_maxfct(ps)\n\nget_perm(ps)\nset_perm!(ps, perm) # Perm is a Vector{Int}"
},

{
    "location": "#Potential-\"gotchas\"-1",
    "page": "Readme",
    "title": "Potential \"gotchas\"",
    "category": "section",
    "text": "Julia uses CSC sparse matrices while PARDISO expects a CSR matrix. These can be seen as transposes of each other so to solve AX = B the transpose flag (IPARAM[12]) should be set to 1.\nFor symmetric matrices, PARDISO needs to have the diagonal stored in the sparse structure even if the diagonal element happens to be 0. The manual recommends adding an eps to the diagonal when you suspect you might have 0 values diagonal elements that are not stored in the sparse structure.\nUnless IPARM[1] = 1, all values in IPARM will be ignored and default values are used.\nWhen solving a symmetric matrix, Pardiso expects only the upper triangular part. Since Julia has CSC matrices this means you should pass in tril(A) to the pardiso function. Use checkmatrix to see that you managed to get the matrix in a valid format."
},

{
    "location": "#Contributions-1",
    "page": "Readme",
    "title": "Contributions",
    "category": "section",
    "text": "If you have suggestions or idea of improving this package, please file an issue or even better, create a PR!"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Pardiso.ANALYSISPardiso.ANALYSIS_NUM_FACTPardiso.ANALYSIS_NUM_FACT_SOLVE_REFINEPardiso.AbstractPardisoSolverPardiso.COMPLEX_HERM_INDEFPardiso.COMPLEX_HERM_POSDEFPardiso.COMPLEX_MATRIX_TYPESPardiso.COMPLEX_NONSYMPardiso.COMPLEX_STRUCT_SYMPardiso.COMPLEX_SYMPardiso.DIRECT_SOLVERPardiso.ITERATIVE_SOLVERPardiso.MATRIX_STRINGPardiso.MESSAGE_LEVEL_OFFPardiso.MESSAGE_LEVEL_ONPardiso.MKLPardisoSolverPardiso.MKLROOTPardiso.MKL_DOMAIN_PARDISOPardiso.MKL_PARDISO_LIB_FOUNDPardiso.MKL_PARDISO_LOADEDPardiso.MatrixTypePardiso.MessageLevelPardiso.NUM_FACTPardiso.NUM_FACT_SOLVE_REFINEPardiso.PARDISO_LIB_FOUNDPardiso.PARDISO_LOADEDPardiso.PARDISO_PATHPardiso.PARDISO_VERSIONPardiso.PHASE_STRINGPardiso.PardisoPardiso.PardisoExceptionPardiso.PardisoNumTypesPardiso.PardisoPosDefExceptionPardiso.PardisoSolverPardiso.PhasePardiso.REAL_MATRIX_TYPESPardiso.REAL_NONSYMPardiso.REAL_SYMPardiso.REAL_SYM_INDEFPardiso.REAL_SYM_POSDEFPardiso.RELEASE_ALLPardiso.RELEASE_LU_MNUMPardiso.SELECTED_INVERSIONPardiso.SOLVER_STRINGPardiso.SOLVE_ITERATIVE_REFINEPardiso.SOLVE_ITERATIVE_REFINE_ONLY_BACKWARDPardiso.SOLVE_ITERATIVE_REFINE_ONLY_DIAGPardiso.SOLVE_ITERATIVE_REFINE_ONLY_FORWARDPardiso.SolverPardiso.__init__Pardiso.ccall_pardisoPardiso.ccall_pardisoinitPardiso.check_errorPardiso.checkmatrixPardiso.checkvecPardiso.collect_gfortran_lib_candidatesPardiso.dim_checkPardiso.evalPardiso.get_dparmPardiso.get_dparmsPardiso.get_iparmPardiso.get_iparmsPardiso.get_matrixPardiso.get_matrixtypePardiso.get_maxfctPardiso.get_mnumPardiso.get_msglvlPardiso.get_nprocsPardiso.get_nthreadsPardiso.get_permPardiso.get_phasePardiso.get_solverPardiso.includePardiso.initPardiso.isposornegdefPardiso.load_lib_fortranPardiso.mkl_initPardiso.mkl_pardiso_fPardiso.pardisoPardiso.pardiso_chkmatrixPardiso.pardiso_chkmatrix_zPardiso.pardiso_chkvecPardiso.pardiso_chkvec_zPardiso.pardiso_fPardiso.pardiso_printstatsPardiso.pardiso_printstats_zPardiso.pardisoinitPardiso.phasesPardiso.printstatsPardiso.set_dparm!Pardiso.set_iparm!Pardiso.set_matrixtype!Pardiso.set_maxfct!Pardiso.set_mnum!Pardiso.set_msglvl!Pardiso.set_nprocs!Pardiso.set_nthreadsPardiso.set_perm!Pardiso.set_phase!Pardiso.set_solver!Pardiso.set_transposedPardiso.show_build_logPardiso.solvePardiso.solve!Pardiso.valid_phases"
},

]}
