var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Elemental.jl-1",
    "page": "Readme",
    "title": "Elemental.jl",
    "category": "section",
    "text": "(Image: Build Status)A package for dense and sparse distributed linear algebra and optimization. The underlying functionality is provided by the C++ library Elemental written by Jack Poulson."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is installed with Pkg.add(\"Elemental\"). The install script automatically downloads Elemental and will try build against the BLAS library used by Julia."
},

{
    "location": "#MPI-1",
    "page": "Readme",
    "title": "MPI",
    "category": "section",
    "text": "The install script will build against any MPI installation that can be detected from calling mpirun. The package is tested with MPICH and OpenMPI but be aware that for OpenMPI at least version 1.8 is required because earlier versions of had bugs for complex data types. If you are using Linux and have installed OpenMPI from the repositories the version is (as always on Linux distributions) likely to be too old. Currently, MPICH isn\'t supported on macOS, see this comment for details."
},

{
    "location": "#Examples-SVD-1",
    "page": "Readme",
    "title": "Examples - SVD",
    "category": "section",
    "text": ""
},

{
    "location": "#Simple-example-without-MPI-1",
    "page": "Readme",
    "title": "Simple example without MPI",
    "category": "section",
    "text": "julia> using LinearAlgebra, Elemental\n\njulia> A = Elemental.Matrix(Float64)\n0x0 Elemental.Matrix{Float64}\n\njulia> Elemental.gaussian!(A, 100, 80);\n\njulia> U, s, V = svd(A);\n\njulia> convert(Matrix{Float64}, s)[1:10]\n10-element Array{Float64,1}:\n 19.8989\n 18.2702\n 17.3665\n 17.0475\n 16.4513\n 16.3197\n 16.0989\n 15.8353\n 15.5947\n 15.5079"
},

{
    "location": "#Simple-example-with-MPI-1",
    "page": "Readme",
    "title": "Simple example with MPI",
    "category": "section",
    "text": "julia> using MPI\n\njulia> man = MPIManager(np = 4);\n\njulia> addprocs(man);\n\njulia> using LinearAlgebra, Elemental\n\njulia> @mpi_do man A = Elemental.DistMatrix(Float64);\n\njulia> @mpi_do man Elemental.gaussian!(A, 1000, 800);\n\njulia> @mpi_do man U, s, V = svd(A);\n\njulia> @mpi_do man println(s[1])\n    From worker 5:  59.639990420817696\n    From worker 4:  59.639990420817696\n    From worker 2:  59.639990420817696\n    From worker 3:  59.639990420817696"
},

{
    "location": "#Simple-example-with-DArrays-1",
    "page": "Readme",
    "title": "Simple example with DArrays",
    "category": "section",
    "text": "julia> using MPI\n\njulia> man = MPIManager(np = 4);\n\njulia> addprocs(man);\n\njulia> using DistributedArrays\n\njulia> using Elemental\n\njulia> A = drandn(1000, 800);\n\njulia> svdvals(A)[1:5]\n5-element SubArray{Float64,1,DistributedArrays.DArray{Float64,2,Array{Float64,2}},Tuple{UnitRange{Int64}},0}:\n 59.4649\n 59.1984\n 59.0309\n 58.7178\n 58.389"
},

{
    "location": "#Truncated-SVD-1",
    "page": "Readme",
    "title": "Truncated SVD",
    "category": "section",
    "text": "The iterative SVD algorithm is implemented in pure Julia, but the factorized matrix as well as the Lanczos vectors are stored as distributed matrices in Elemental. Notice, that TSVD.jl doesn\'t depend on Elemental and is only using Elemental.jl\'s through generic function calls.julia> using MPI\n\njulia> man = MPIManager(np = 4);\n\njulia> addprocs(man);\n\njulia> using Elemental\n\njulia> Pkg.clone(\"TSVD\")\n\njulia> @everywhere using TSVD\n\njulia> @mpi_do man A = Elemental.DistMatrix(Float64);\n\njulia> @mpi_do man Elemental.gaussian!(A, 5000, 2000);\n\njulia> @mpi_do man r = tsvd(A, 5);\n\njulia> @mpi_do man println(r[2][1:5])\n    From worker 3:  [1069.6059089732858,115.44260091060129,115.08319164529792,114.87007788947226,114.48092348847719]\n    From worker 5:  [1069.6059089732858,115.44260091060129,115.08319164529792,114.87007788947226,114.48092348847719]\n    From worker 2:  [1069.6059089732858,115.44260091060129,115.08319164529792,114.87007788947226,114.48092348847719]\n    From worker 4:  [1069.6059089732858,115.44260091060129,115.08319164529792,114.87007788947226,114.48092348847719]"
},

{
    "location": "#Coverage-1",
    "page": "Readme",
    "title": "Coverage",
    "category": "section",
    "text": "We continually add functionality from Elemental to Elemental.jl so, right now, the best way to see if a specific function is available, is to look through the source code."
},

]}
