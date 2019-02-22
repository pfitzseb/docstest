var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CLBlast-1",
    "page": "Readme",
    "title": "CLBlast",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)Wrapper of CLBlast, a \"tuned OpenCL BLAS library\". This package has been inspired by CLBLAS.jl and the BLAS module of Julia and is designed similarly."
},

{
    "location": "#Current-Status-1",
    "page": "Readme",
    "title": "Current Status",
    "category": "section",
    "text": "Most low-level bindings and high-level wrappers of BLAS level 1, 2, and 3 routines are implemented."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using CLBlast, OpenCL\n@static if VERSION < v\"0.7-\"\n    LA = LinAlg\nelse\n    using Random, LinearAlgebra\n    LA = LinearAlgebra\nend\n\ndevice, context, queue = cl.create_compute_context()\n\n# setup data\nα = 1.f0\nβ = 1.f0\nA = rand(Float32, 10, 8)\nB = rand(Float32, 8, 6)\nC = zeros(Float32, 10, 6)\n\n# transfer data\nA_cl = cl.CLArray(queue, A)\nB_cl = cl.CLArray(queue, B)\nC_cl = cl.CLArray(queue, C)\n\n# compute\nLA.BLAS.gemm!(\'N\', \'N\', α, A, B, β, C)\nCLBlast.gemm!(\'N\', \'N\', α, A_cl, B_cl, β, C_cl)\n\n# compare results\n@assert cl.to_host(C_cl) ≈ C"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Since this package is registered, you can add it using ] (activate package mode) and(v0.7) pkg> add CLBlaston Julia v0.7 or newer and usingjulia> Pkg.add(\"CLBlast\")on Julia v0.6. During the build process, a suitable version of CLBlast will be downloaded and build. On Linux, you have to install clang, since the available binaries of CLBlast will fail to work with complex numbers from Julia."
},

]}
