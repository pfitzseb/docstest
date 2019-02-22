var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CPLEX.jl-1",
    "page": "Readme",
    "title": "CPLEX.jl",
    "category": "section",
    "text": "CPLEX.jl is an unofficial interface to the IBM® ILOG® CPLEX® Optimization Studio. It provides an interface to the low-level C API, as well as an implementation of the solver-independent MathProgBase and MathOptInterface API\'s.You cannot use CPLEX.jl without having purchased and installed a copy of CPLEX Optimization Studio from IBM. This package is available free of charge and in no way replaces or alters any functionality of IBM\'s CPLEX Optimization Studio product.Note: This wrapper is maintained by the JuliaOpt community and is not officially supported by IBM. If you are a commercial customer interested in official support for CPLEX in Julia, let them know!."
},

{
    "location": "#Setting-up-CPLEX-on-OS-X-and-Linux-1",
    "page": "Readme",
    "title": "Setting up CPLEX on OS X and Linux",
    "category": "section",
    "text": "NOTE: CPLEX does not officially support linking to their dynamic C library, which is necessary for use from Julia. However, the steps outlined below have worked for OS-X, Windows, and Linux machines.First, you must obtain a copy of the CPLEX software and a license; trial versions and academic licenses are available here.\nOnce CPLEX is installed on your machine, point the LD_LIBRARY_PATH variable to the directory containing the CPLEX library by adding, for example, export LD_LIBRARY_PATH=pathtocplexbinx86-64_linuxLD_LIBRARY_PATH to your start-up file (e.g. bash_profile, adding library path on Ubuntu). On linux, make sure this directory contains libcplexXXXso where XXX is stands for the version number; on OS-X the file should be named libcplexXXXdylib. Alternatively, you can also use the CPLEX_STUDIO_BINARIES environment variable as follows:  $ CPLEX_STUDIO_BINARIES=/path/to/cplex/bin/x86-64_linux julia -e \'Pkg.add(\"CPLEX\"); Pkg.build(\"CPLEX\")\'\n  ```\n\n3. At the Julia prompt, run\n  ```\n  julia> Pkg.add(\"CPLEX\")\n  ```\n(or manually clone this module to your ``.julia`` directory).\n\n4. Check that your version is included in ``deps/build.jl`` in the aliases for the library dependency; if not, open an issue.\n\nNote for windows\n----------------\n\nCurrently, CPLEX.jl is compatible only with 64-bit CPLEX and 64-bit Julia on Windows. CPLEX.jl attempts to automatically find the CPLEX library based on the `CPLEX_STUDIO_BINARIES` environmental variable set by the CPLEX installer.\n\nHelp! I got `LoadError: Unable to locate CPLEX installation`\n----------------------------------\n\nWhich version of CPLEX are you trying to install? Currently CPLEX.jl only supports 1260, 1261, 1262, 1263, 1270, 1271, and 1280. If it\'s not one of those, [file an issue](https://github.com/JuliaOpt/CPLEX.jl/issues/new) with the version number you\'d like to support. Some steps need to be taken (like checking for new or renamed parameters) before CPLEX.jl can support new versions.\n\n#### If you\'re on OS X or Linux\n\nThe most common problem is not setting `LD_LIBRARY_PATH` correctly. Open a terminal and check the output ofecho LD_LIBRARY_PATHis the path to the CPLEX installation. If it\'s not, did you follow step 2 above?\n\nHint: on OS X the path should probably be something like\n`/Users/[username]/Applications/IBM/ILOG/CPLEX_Studio[version number]/cplex/bin/x86-64_osx/`\n\n#### If you\'re on Linux\n\nThe most common problem is not setting `CPLEX_STUDIO_BINARIES` correctly. Open a Julia prompt and check that the output ofjulia julia> ENV[\"CPLEXSTUDIOBINARIES\"]is the path to the CPLEX installation. If you get a `key \"CPLEX_STUDIO_BINARIES\" not found` error, make sure the environment variable is set correctly, or just set it from within the Julia promptjulia julia> ENV[\"CPLEXSTUDIOBINARIES\"] = \"path/to/cplex/installation\" julia> Pkg.build(\"CPLEX\")Another alternative is to runCPLEXSTUDIOBINARIES=\"path/to/cplex/installation\" julia -e \'Pkg.build(\"CPLEX\")\' ```"
},

{
    "location": "#Parameters-1",
    "page": "Readme",
    "title": "Parameters",
    "category": "section",
    "text": "Solver parameters can be passed through the CplexSolver() object, e.g., CplexSolver(CPX_PARAM_EPINT=1e-8). Parameters match those of the CPLEX documentation. Additionally, the mipstart_effortlevel parameter can be used to tell CPLEX how much effort to put into turning warmstarts into feasible solutions, with possible values CPLEXCPX_MIPSTART_AUTO, CPLEXCPX_MIPSTART_CHECKFEAS, CPLEXCPX_MIPSTART_SOLVEFIXED, CPLEXCPX_MIPSTART_SOLVEMIP, CPLEXCPX_MIPSTART_REPAIR, and CPLEXCPX_MIPSTART_NOCHECK."
},

]}
