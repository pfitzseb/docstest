var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MPI-interface-for-the-Julia-language-1",
    "page": "Readme",
    "title": "MPI interface for the Julia language",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io) (Image: Coverage Status)This is a basic [Julia] wrapper for the portable message passing system Message Passing Interface ([MPI]). Inspiration is taken from mpi4py, although we generally follow the C and not the C++ MPI API. (The C++ MPI API is deprecated.)"
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": ""
},

{
    "location": "#Unix-systems-(OSX-and-Linux)-1",
    "page": "Readme",
    "title": "Unix systems (OSX and Linux)",
    "category": "section",
    "text": "[CMake] is used to piece together the MPI wrapper. Currently a shared library MPI installation for C and Fortran is required (tested with [Open MPI] and [MPICH]). To install MPI.jl using the Julia packaging system, runPkg.update()\nPkg.add(\"MPI\")Alternatively,Pkg.clone(\"https://github.com/JuliaParallel/MPI.jl.git\")\nPkg.build()which will build and install the wrapper into $HOME/.julia/vX.Y/MPI."
},

{
    "location": "#Platform-specific-notes:-1",
    "page": "Readme",
    "title": "Platform specific notes:",
    "category": "section",
    "text": "If you are trying to build on OSX with Homebrew, the necessary Fortran headers are not included in the OpenMPI bottle.  To workaround this you can build OpenMPI from source: brew install --build-from-source openmpi"
},

{
    "location": "#Overriding-the-auto-detected-MPI-version-1",
    "page": "Readme",
    "title": "Overriding the auto-detected MPI version",
    "category": "section",
    "text": "It may be that CMake selects the wrong MPI version, or that CMake fails to correctly detect and configure your MPI implementation. You can override CMake\'s mechanism by setting certain environment variables:JULIA_MPI_C_LIBRARIES\nJULIA_MPI_Fortran_INCLUDE_PATH\nJULIA_MPI_Fortran_LIBRARIESThis will set MPI_C_LIBRARIES, MPI_Fortran_INCLUDE_PATH, and MPI_Fortran_LIBRARIES when calling CMake as described in its [FindMPI] module. You can set these variables either in your shell startup file, or e.g. via your ~/.juliarc file. Here is an example:ENV[\"JULIA_MPI_C_LIBRARIES\"] = \"-L/opt/local/lib/openmpi-gcc5 -lmpi\"\nENV[\"JULIA_MPI_Fortran_INCLUDE_PATH\"] = \"-I/opt/local/include\"\nENV[\"JULIA_MPI_Fortran_LIBRARIES\"] = \"-L/opt/local/lib/openmpi-gcc5 -lmpi_usempif08 -lmpi_mpifh -lmpi\"You can set other configuration variables as well (by adding a JULIA_ prefix); the full list of variables currently supported isMPI_C_COMPILER\nMPI_C_COMPILE_FLAGS\nMPI_C_INCLUDE_PATH\nMPI_C_LINK_FLAGS\nMPI_C_LIBRARIES\nMPI_Fortran_COMPILER\nMPI_Fortran_COMPILE_FLAGS\nMPI_Fortran_INCLUDE_PATH\nMPI_Fortran_LINK_FLAGS\nMPI_Fortran_LIBRARIES\nMPI_INCLUDE_PATH\nMPI_LIBRARIES"
},

{
    "location": "#Windows-1",
    "page": "Readme",
    "title": "Windows",
    "category": "section",
    "text": "You need to install the Microsoft MPI runtime on your system (the SDK is not required). Then simply add the MPI.jl package withPkg.update()\nPkg.add(\"MPI\")If you would like to wrap an MPI function on Windows, keep in mind you may need to add its signature to src/win_mpiconstants.jl."
},

{
    "location": "#Usage-:-MPI-Only-mode-1",
    "page": "Readme",
    "title": "Usage : MPI-Only mode",
    "category": "section",
    "text": "To run a Julia script with MPI, first make sure that using MPI or import MPI is included at the top of your script. You should then be able to run the MPI job as expected, e.g., withmpirun -np 3 julia 01-hello.jl"
},

{
    "location": "#Cleanup-1",
    "page": "Readme",
    "title": "Cleanup",
    "category": "section",
    "text": "In Julia code building on this package, it may happen that you want to run MPI cleanup functions in a finalizer. This makes it impossible to manually call MPI.Finalize(), since the Julia finalizers may run after this call. To solve this, a C atexit hook to run MPI.Finalize() can be set using MPI.finalize_atexit(). It is possible to check if this function was called by checking the global Ref MPI.FINALIZE_ATEXIT."
},

{
    "location": "#Usage-:-MPI-and-Julia-parallel-constructs-together-1",
    "page": "Readme",
    "title": "Usage : MPI and Julia parallel constructs together",
    "category": "section",
    "text": "In order for MPI calls to be made from a Julia cluster, it requires the use of MPIManager, a cluster manager that will start the julia workers using mpirunCurrently MPIManager only works with Julia 0.4 . It has three modes of operationOnly worker processes execute MPI code. The Julia master process executes outside of and is not part of the MPI cluster. Free bi-directional TCP/IP connectivity is required between all processes\nAll processes (including Julia master) are part of both the MPI as well as Julia cluster. Free bi-directional TCP/IP connectivity is required between all processes.\nAll processes are part of both the MPI as well as Julia cluster. MPI is used as the transport for julia messages. This is useful on environments which do not allow TCP/IP connectivity between worker processes"
},

{
    "location": "#MPIManager-(only-workers-execute-MPI-code)-1",
    "page": "Readme",
    "title": "MPIManager (only workers execute MPI code)",
    "category": "section",
    "text": "An example is provided in examples/05-juliacman.jl. The julia master process is NOT part of the MPI cluster. The main script should be launched directly, MPIManager internally calls mpirun to launch julia/mpi workers. All the workers started via MPIManager will be part of the MPI cluster.MPIManager(;np=Sys.CPU_THREADS, mpi_cmd=false, launch_timeout=60.0)If not specified, mpi_cmd defaults to mpirun -np $np stdout from the launched workers is redirected back to the julia session calling addprocs via a TCP connection. Thus the workers must be able to freely connect via TCP to the host session. The following lines will be typically required on the julia master process to support both julia and mpi# to import MPIManager\nusing MPI\n\n# specify, number of mpi workers, launch cmd, etc.\nmanager=MPIManager(np=4)\n\n# start mpi workers and add them as julia workers too.\naddprocs(manager)\nTo execute code with MPI calls on all workers, use @mpi_do.@mpi_do manager expr executes expr on all processes that are part of managerFor example: @mpi_do manager (comm=MPI.COMM_WORLD; println(\"Hello world, I am $(MPI.Comm_rank(comm)) of $(MPI.Comm_size(comm))\") executes on all mpi workers belonging to manager onlyexamples/05-juliacman.jl is a simple example of calling MPI functions on all workers interspersed with Julia parallel methods. cd to the examples directory and run julia 05-juliacman.jlA single instation of MPIManager can be used only once to launch MPI workers (via addprocs). To create multiple sets of MPI clusters, use separate, distinct MPIManager objects.procs(manager::MPIManager) returns a list of julia pids belonging to manager mpiprocs(manager::MPIManager) returns a list of MPI ranks belonging to managerFields j2mpi and mpi2j of MPIManager are associative collections mapping julia pids to MPI ranks and vice-versa."
},

{
    "location": "#MPIManager-1",
    "page": "Readme",
    "title": "MPIManager",
    "category": "section",
    "text": ""
},

{
    "location": "#(TCP/IP-transport-all-processes-execute-MPI-code)-1",
    "page": "Readme",
    "title": "(TCP/IP transport - all processes execute MPI code)",
    "category": "section",
    "text": "Useful on environments which do not allow TCP connections outside of the cluster\nAn example is in examples/06-cman-transport.jlmpirun -np 5 julia 06-cman-transport.jl TCPThis launches a total of 5 processes, mpi rank 0 is the julia pid 1. mpi rank 1 is julia pid 2 and so on.The program must call MPI.start(TCP_TRANSPORT_ALL) with argument TCP_TRANSPORT_ALL. On mpi rank 0, it returns a manager which can be used with @mpi_do On other processes (i.e., the workers) the function does not return"
},

{
    "location": "#MPIManager-2",
    "page": "Readme",
    "title": "MPIManager",
    "category": "section",
    "text": ""
},

{
    "location": "#(MPI-transport-all-processes-execute-MPI-code)-1",
    "page": "Readme",
    "title": "(MPI transport - all processes execute MPI code)",
    "category": "section",
    "text": "MPI.start must be called with option MPI_TRANSPORT_ALL to use MPI as transport. mpirun -np 5 julia 06-cman-transport.jl MPI will run the example using MPI as transport."
},

{
    "location": "#Julia-MPI-only-interface-1",
    "page": "Readme",
    "title": "Julia MPI-only interface",
    "category": "section",
    "text": ""
},

{
    "location": "#Communicators:-1",
    "page": "Readme",
    "title": "Communicators:",
    "category": "section",
    "text": "Julia interfaces to the Fortran versions of the MPI functions. Since the C and Fortran communicators are different, if a C communicator is required (e.g., to interface with a C library), this can be achieved with the Fortran to C communicator conversion:juliacomm = MPI.COMM_WORLD\nccomm = MPI.CComm(juliacomm)"
},

{
    "location": "#Currently-wrapped-MPI-functions-1",
    "page": "Readme",
    "title": "Currently wrapped MPI functions",
    "category": "section",
    "text": "Convention: MPI_Fun => MPI.FunConstants like MPI_SUM are wrapped as MPI.SUM.   Note also that arbitrary Julia functions f(x,y) can be passed as reduction operations to the MPI Allreduce and Reduce functions."
},

{
    "location": "#Administrative-functions-1",
    "page": "Readme",
    "title": "Administrative functions",
    "category": "section",
    "text": "Julia Function (assuming import MPI) Fortran Function\nMPI.Abort MPI_Abort\nMPI.Comm_dup MPI_Comm_dup\nMPI.Comm_free MPI_Comm_free\nMPI.Comm_get_parent MPI_Comm_get_parent\nMPI.Comm_rank MPI_Comm_rank\nMPI.Comm_size MPI_Comm_size\nMPI.Comm_spawn MPI_Comm_spawn\nMPI.Finalize MPI_Finalize\nMPI.Finalized MPI_Finalized\nMPI.Get_address MPI_Get_address\nMPI.Init MPI_Init\nMPI.Initialized MPI_Initialized\nMPI.Intercomm_merge MPI_Intercomm_merge\nMPI.mpitype MPI_Type_create_struct and MPI_Type_commit (see: mpitype note)<a name=\"mpitypenote\">mpitype note</a>: This is not strictly a wrapper for MPI_Type_create_struct and MPI_Type_commit, it also is an accessor for previously created types."
},

{
    "location": "#Point-to-point-communication-1",
    "page": "Readme",
    "title": "Point-to-point communication",
    "category": "section",
    "text": "Julia Function (assuming import MPI) Fortran Function\nMPI.Cancel! MPI_Cancel\nMPI.Get_count MPI_Get_count\nMPI.Iprobe MPI_Iprobe\nMPI.Irecv! MPI_Irecv\nMPI.Isend MPI_Isend\nMPI.Probe MPI_Probe\nMPI.Recv! MPI_Recv\nMPI.Send MPI_Send\nMPI.Test! MPI_Test\nMPI.Testall! MPI_Testall\nMPI.Testany! MPI_Testany\nMPI.Testsome! MPI_Testsome\nMPI.Wait! MPI_Wait\nMPI.Waitall! MPI_Waitall\nMPI.Waitany! MPI_Waitany\nMPI.Waitsome! MPI_Waitsome"
},

{
    "location": "#Collective-communication-1",
    "page": "Readme",
    "title": "Collective communication",
    "category": "section",
    "text": "Julia Function (assuming import MPI) Fortran Function\nMPI.Allgather MPI_Allgather\nMPI.Allgatherv MPI_Allgatherv\nMPI.Alltoall MPI_Alltoall\nMPI.Alltoallv MPI_Alltoallv\nMPI.Barrier MPI_Barrier\nMPI.Bcast! MPI_Bcast\nMPI.Exscan MPI_Exscan\nMPI.Gather MPI_Gather\nMPI.Gatherv MPI_Gatherv\nMPI.Reduce MPI_Reduce\nMPI.Scan MPI_Scan\nMPI.Scatter MPI_Scatter\nMPI.Scatterv MPI_Scatterv"
},

{
    "location": "#One-sided-communication-1",
    "page": "Readme",
    "title": "One-sided communication",
    "category": "section",
    "text": "Julia Function (assuming import MPI) Fortran Function\nMPI.Win_create MPI_Win_create\nMPI.Win_create_dynamic MPI_Win_create_dynamic\nMPI.Win_attach MPI_Win_attach\nMPI.Win_detach MPI_Win_detach\nMPI.Win_fence MPI_Win_fence\nMPI.Win_flush MPI_Win_flush\nMPI.Win_free MPI_Win_free\nMPI.Win_sync MPI_Win_sync\nMPI.Win_lock MPI_Win_lock\nMPI.Win_unlock MPI_Win_unlock\nMPI.Get MPI_Get\nMPI.Put MPI_Put\nMPI.Fetch_and_op MPI_Fetch_and_op\nMPI.Accumulate MPI_Accumulate\nMPI.Get_accumulate MPI_Get_accumulate[Julia]: http://julialang.org/ [MPI]: http://www.mpi-forum.org/ [mpi4py]: http://mpi4py.scipy.org [CMake]: http://www.cmake.org/ [FindMPI]: http://www.cmake.org/cmake/help/v3.3/module/FindMPI.html [Open MPI]: http://www.open-mpi.org/ [MPICH]: http://www.mpich.org/"
},

]}
