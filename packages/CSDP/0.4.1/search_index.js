var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#COIN-OR-SemiDefinite-Programming-Interface-(CSDP.jl)-1",
    "page": "Readme",
    "title": "COIN-OR SemiDefinite Programming Interface (CSDP.jl)",
    "category": "section",
    "text": "(Image: )CSDP.jl is an interface to the COIN-OR SemiDefinite Programming solver. It provides a complete interface to the low-level C API, as well as an implementation of the solver-independent MathProgBase and MathOptInterface API\'s.Note: This wrapper is maintained by the JuliaOpt community and is not a COIN-OR project.PackageEvaluator Build Status\n[![][pkg-0.5-img]][pkg-0.5-url] [![Build Status][build-img]][build-url] [![Build Status][winbuild-img]][winbuild-url]\n[![][pkg-0.6-img]][pkg-0.6-url] [![Coveralls branch][coveralls-img]][coveralls-url] [![Codecov branch][codecov-img]][codecov-url]The original algorithm is described by B. Borchers. CSDP, A C Library for Semidefinite Programming. Optimization Methods and Software 11(1):613-623, 1999. DOI 10.1080/10556789908805765. Preprint."
},

{
    "location": "#Installing-CSDP-1",
    "page": "Readme",
    "title": "Installing CSDP",
    "category": "section",
    "text": "First, make sure that you have a compiler available and that LAPACK and BLAS are installed. On Ubuntu, simply do$ sudo apt-get install build-essential liblapack-dev libopenblas-devThen, install CSDP usingjulia> Pkg.add(\"CSDP\")To use CSDP with JuMP v0.18, dousing JuMP\nmodel = Model(solver=CSDPSolver())and with JuMP development version, dousing JuMP\nmodel = Model(with_optimizer(CSDP.Optimizer))"
},

{
    "location": "#CSDP-problem-representation-1",
    "page": "Readme",
    "title": "CSDP problem representation",
    "category": "section",
    "text": "The primal is represented internally by CSDP as follows:max ⟨C, X⟩\n      A(X) = a\n         X ⪰ 0where A(X) = [⟨A_1, X⟩, ..., ⟨A_m, X⟩]. The corresponding dual is:min ⟨a, y⟩\n     A\'(y) - C = Z\n             Z ⪰ 0where A\'(y) = y_1A_1 + ... + y_mA_m"
},

{
    "location": "#Termination-criteria-1",
    "page": "Readme",
    "title": "Termination criteria",
    "category": "section",
    "text": "CSDP will terminate successfully (or partially) in the following cases:If CSDP finds y and Z ⪰ 0 such that -⟨a, y⟩ / ||A\'(y) - Z||_F > pinftol, it returns 1 with y such that ⟨a, y⟩ = -1.\nIf CSDP finds X ⪰ 0 such that ⟨C, X⟩ / ||A(X)||_2 > dinftol, it returns 2 with X such that ⟨C, X⟩ = 1.\nIf CSDP finds X, Z ⪰ 0 such that the following 3 tolerances are satisfied:\nprimal feasibility tolerance: ||A(x) - a||_2 / (1 + ||a||_2) < axtol\ndual feasibility tolerance: ||A\'(y) - C - Z||_F / (1 + ||C||_F) < atytol\nrelative duality gap tolerance: gap / (1 + |⟨a, y⟩| + |⟨C, X⟩|) < objtol\nobjective duality gap: If usexygap is 0, gap = ⟨a, y⟩ - ⟨C, X⟩\nXY duality gap: If usexygap is 1, gap = ⟨Z, X⟩\nthen it returns 0.\nIf CSDP finds X, Z ⪰ 0 such that the following 3 tolerances are satisfied with 1000*axtol, 1000*atytol and 1000*objtol but at least one of them is not satisfied with axtol, atytol and objtol and cannot make progress then it returns 3.Remark: In theory, for feasible primal and dual solutions, ⟨a, y⟩ - ⟨C, X⟩ = ⟨Z, X⟩ so the objective and XY duality gap should be equivalent. However, in practice, there are sometimes solution which satisfy primal and dual feasibility tolerances but have objective duality gap which are not close to XY duality gap. In some cases, the objective duality gap may even become negative (hence the tweakgap option). This is the reason usexygap is 1 by default.Remark: CSDP considers that X ⪰ 0 (resp. Z ⪰ 0) is satisfied when the Cholesky factorizations can be computed. In practice, this is somewhat more conservative than simply requiring all eigenvalues to be nonnegative."
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "The table below shows how the different CSDP status are converted to MathProgBase status.CSDP code State Description MathProgBase status\n0 Success SDP solved Optimal\n1 Success The problem is primal infeasible, and we have a certificate Infeasible\n2 Success The problem is dual infeasible, and we have a certificate Unbounded\n3 Partial Success A solution has been found, but full accuracy was not achieved Suboptimal\n4 Failure Maximum iterations reached UserLimit\n5 Failure Stuck at edge of primal feasibility Error\n6 Failure Stuck at edge of dual infeasibility Error\n7 Failure Lack of progress Error\n8 Failure X, Z, or O was singular Error\n9 Failure Detected NaN or Inf values ErrorIf the printlevel option is at least 1, the following will be printed:If the return code is 1, CSDP will print ⟨a, y⟩ and ||A\'(y) - Z||_F\nif the return code is 2, CSDP will print ⟨C, X⟩ and ||A(X)||_F\notherwise, CSDP will print\nthe primal/dual objective value,\nthe relative primal/dual infeasibility,\nthe objective duality gap ⟨a, y⟩ - ⟨C, X⟩ and objective relative duality  gap (⟨a, y⟩ - ⟨C, X⟩) / (1 + |⟨a, y⟩| + |⟨C, X⟩|),\nthe XY duality gap ⟨Z, X⟩ and XY relative duality gap ⟨Z, X⟩ / (1 + |⟨a, y⟩| + |⟨C, X⟩|)\nand the DIMACS error measures."
},

{
    "location": "#Options-1",
    "page": "Readme",
    "title": "Options",
    "category": "section",
    "text": "The CSDP options are listed in the table below. Their value can be specified in the constructor of the CSDP solver, e.g. CSDPSolver(axtol=1e-7, printlevel=0).Name  Default Value\naxtol Tolerance for primal feasibility 1.0e-8\natytol Tolerance for dual feasibility 1.0e-8\nobjtol Tolerance for relative duality gap 1.0e-8\npinftol Tolerance for determining primal infeasibility 1.0e8\ndinftol Tolerance for determining dual infeasibility 1.0e8\nmaxiter Limit for the total number of iterations 100\nminstepfrac The minstepfrac and maxstepfrac parameters determine how close to the edge of the feasible region CSDP will step 0.90\nmaxstepfrac The minstepfrac and maxstepfrac parameters determine how close to the edge of the feasible region CSDP will step 0.97\nminstepp If the primal step is shorter than minstepp then CSDP declares a line search failure 1.0e-8\nminstepd If the primal step is shorter than minstepp then CSDP declares a line search failure 1.0e-8\nusexzgap If usexzgap is 0 then CSDP will use the objective duality gap d - p instead of the XY duality gap ⟨Z, X⟩ 1\ntweakgap If tweakgap is set to 1, and usexzgap is set to 0, then CSDP will attempt to \"fix\" negative duality gaps 0\naffine If affine is set to 1, then CSDP will take only primal-dual affine steps and not make use of the barrier term. This can be useful for some problems that do not have feasible solutions that are strictly in the interior of the cone of semidefinite matrices 0\nperturbobj The perturbobj parameter determines whether the objective function will be perturbed to help deal with problems that have unbounded optimal solution sets. If perturbobj is 0, then the objective will not be perturbed. If perturbobj is 1, then the objective function will be perturbed by a default amount. Larger values of perturbobj (e.g. 100) increase the size of the perturbation. This can be helpful in solving some difficult problems. 1\nfastmode The fastmode parameter determines whether or not CSDP will skip certain time consuming operations that slightly improve the accuracy of the solutions. If fastmode is set to 1, then CSDP may be somewhat faster, but also somewhat less accurate 0\nprintlevel The printlevel parameter determines how much debugging information is output. Use a printlevel of 0 for no output and a printlevel of 1 for normal output. Higher values of printlevel will generate more debugging output 1"
},

{
    "location": "#Getting-the-CSDP-Library-1",
    "page": "Readme",
    "title": "Getting the CSDP Library",
    "category": "section",
    "text": "The original make-file build system only provides a static library. The quite old (September 2010) pycsdp interface by Benjamin Kern circumvents the problem by writing some C++ code to which the static library is linked. The Sage module by @mghasemi is a Cython interface; I don\'t know how the libcsdp is installed or whether they assume that it is already available on the system.That is why this package tries to parse the makefile and compiles it itself on Unix systems (so gcc is needed). <!– ~~Furthermore libblas and liblapack are needed to be installed.~~ –> For Windows, a pre-compiled DLL is downloaded (unless you configure the build.jl differently).<!– On Windows you need the MinGW gcc compiler available in the PATH.     Currently, only the Win32 builds work. –>"
},

{
    "location": "#Next-Steps-(TODOs)-1",
    "page": "Readme",
    "title": "Next Steps (TODOs)",
    "category": "section",
    "text": "[ ] Maybe port libcsdp to use 64bit Lapack, aka replace “some ints” by long int (the variables used in a Lapack call).  Started in brach julias_openblas64\n[ ] Maybe think about an own array type to circumvent the 1-index problems in libcsdp.\n[ ] Map Julia\'s sparse arrays to sparsematrixblock.\n[ ] Upload libcsdp.dll for Windows via Appveyor deployment as described at     JuliaCon.     Currently we use a separate repository.[pkg-0.5-img]: http://pkg.julialang.org/badges/CSDP0.5.svg [pkg-0.5-url]: http://pkg.julialang.org/?pkg=CSDP [pkg-0.6-img]: http://pkg.julialang.org/badges/CSDP0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=CSDP[build-img]: https://travis-ci.org/JuliaOpt/CSDP.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaOpt/CSDP.jl [winbuild-img]: https://ci.appveyor.com/api/projects/status/v8nb0yb7ahn9n7ol?svg=true [winbuild-url]: https://ci.appveyor.com/project/JuliaOpt/csdp-jl [coveralls-img]: https://coveralls.io/repos/github/JuliaOpt/CSDP.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/JuliaOpt/CSDP.jl?branch=master [codecov-img]: http://codecov.io/github/JuliaOpt/CSDP.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/JuliaOpt/CSDP.jl?branch=master"
},

{
    "location": "autodocs/#CSDP.Csdp",
    "page": "Docstrings",
    "title": "CSDP.Csdp",
    "category": "type",
    "text": "Solver status\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CSDP.@checked_libCSDP.BlockMatrixCSDP.BlockRecCSDP.BlockmatrixCSDP.CSDPCSDP.CSDPMathProgModelCSDP.CSDPSolverCSDP.ConstraintMatrixCSDP.CsdpCSDP.DIAGCSDP.FnormCSDP.KnormCSDP.MATRIXCSDP.MOICSDP.MPBCSDP.OptimizerCSDP.PACKEDMATRIXCSDP.SDMCSDP.SDOICSDP.SDOptimizerCSDP.SparseBlockCSDP._unsafe_wrapCSDP.actnnzCSDP.add_matCSDP.addscaledmatCSDP.alloc_matCSDP.alloc_mat_packedCSDP.allowed_optionsCSDP.bandwidthCSDP.bisect_CSDP.blockcatCSDP.blockdatarecCSDP.blockmatrixCSDP.blockmatzerosCSDP.blockrecCSDP.blockreczerosCSDP.calc_dobjCSDP.calc_pobjCSDP.checkoptionsCSDP.cholCSDP.chol_invCSDP.constraintmatrixCSDP.constrmatzerosCSDP.copy_matCSDP.csdpCSDP.csdpshortCSDP.dimacserr3CSDP.dinfeasCSDP.easy_sdpCSDP.evalCSDP.findindicesCSDP.fptrCSDP.free_blockmatrixCSDP.free_matCSDP.free_mat_packedCSDP.free_probCSDP.includeCSDP.initparamsCSDP.initsolnCSDP.linesearchCSDP.make_iCSDP.makefillCSDP.mat1normCSDP.mat_multCSDP.mat_mult_rawCSDP.mat_mult_rawatlasCSDP.mat_multspaCSDP.mat_multspbCSDP.mat_multspcCSDP.matinfnormCSDP.matvecCSDP.mywrapCSDP.norm1CSDP.norm2CSDP.norminfCSDP.op_aCSDP.op_atCSDP.op_oCSDP.optionsCSDP.paramstrucCSDP.pinfeasCSDP.print_blockCSDP.print_constraintsCSDP.print_sizeofCSDP.print_sparseblockCSDP.printmCSDP.ptrCSDP.qreigCSDP.read_probCSDP.read_solCSDP.sdpCSDP.setupAs!CSDP.solvesysCSDP.sort_entriesCSDP.sparseblockCSDP.sparseblockzerosCSDP.store_packedCSDP.store_unpackedCSDP.structnnzCSDP.sym_matCSDP.trace_prodCSDP.transCSDP.triuCSDP.tweakgapCSDP.user_exitCSDP.write_probCSDP.write_solCSDP.zero_mat"
},

]}
