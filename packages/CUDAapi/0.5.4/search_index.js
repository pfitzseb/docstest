var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CUDAapi.jl-1",
    "page": "Readme",
    "title": "CUDAapi.jl",
    "category": "section",
    "text": "Reusable components for CUDA API development.Code coverage: [![][codecov-img]][codecov-url][codecov-img]: https://codecov.io/gh/JuliaGPU/CUDAapi.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaGPU/CUDAapi.jlThis package provides some reusable functionality for programming against CUDA or NVIDIA APIs. It is meant to be used by package developers, and is not expected to export functionality useful for application programmers."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Compatibility-1",
    "page": "Readme",
    "title": "Compatibility",
    "category": "section",
    "text": "The file src/compatibility.jl contains hard-coded databases with software and hardware compatibility information that cannot be queried from APIs."
},

{
    "location": "#Discovery-1",
    "page": "Readme",
    "title": "Discovery",
    "category": "section",
    "text": "The file src/discovery.jl defines helper methods for discovering the NVIDIA driver and CUDA toolkit, as well as some more generic methods to find libraries and binaries relative to eg. the location of the driver or toolkit."
},

{
    "location": "#Maintenance-1",
    "page": "Readme",
    "title": "Maintenance",
    "category": "section",
    "text": ""
},

{
    "location": "#CUDA-version-update-1",
    "page": "Readme",
    "title": "CUDA version update",
    "category": "section",
    "text": "When a new version of CUDA is released, CUDAapi.jl needs to be updated accordingly:discovery.jl: update the cuda_versions dictionary\ncompatibility.jl: update each _db variable (refer to the comments for more info)\nappveyor.yml: add the version to the CI roster\nappveyor.ps1: provide a link to the installer, and list the components that need to be installed"
},

{
    "location": "autodocs/#CUDAapi.find_binary",
    "page": "Docstrings",
    "title": "CUDAapi.find_binary",
    "category": "function",
    "text": "find_binary(names; locations=String[])\n\nSimilar to find_library, performs an exhaustive search for a binary in various subdirectories of locations, and finally PATH.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CUDAapi.find_libdevice",
    "page": "Docstrings",
    "title": "CUDAapi.find_libdevice",
    "category": "function",
    "text": "find_libdevice(targets::Vector{VersionNumber}, toolkit_dirs::Vector{String})\n\nLook for the CUDA device library supporting targets in any of the CUDA toolkit directories toolkit_dirs. On CUDA >= 9.0, a single library unified library is discovered and returned as a string. On older toolkits, individual libraries for each of the targets are returned as a vector of strings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CUDAapi.find_library",
    "page": "Docstrings",
    "title": "CUDAapi.find_library",
    "category": "function",
    "text": "find_library(names; locations=String[], versions=VersionNumber[], word_size=Sys.WORD_SIZE)\n\nWrapper for Libdl.find_library, performing a more exhaustive search:\n\nvariants of the library name (including version numbers, platform-specific tags, etc);\nvarious subdirectories of the locations list, and finally system library directories.\n\nReturns the full path to the library.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CUDAapi.find_toolkit",
    "page": "Docstrings",
    "title": "CUDAapi.find_toolkit",
    "category": "function",
    "text": "find_toolkit()::Vector{String}\n\nLook for directories where (parts of) the CUDA toolkit might be installed. This returns a (possibly empty) list of paths that can be used as an argument to other discovery functions.\n\nThe behavior of this function can be overridden by defining the CUDA_PATH, CUDA_HOME or CUDA_ROOT environment variables, which should point to the root of the CUDA toolkit.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CUDAapi.@traceCUDAapi.CUDAapiCUDAapi.MAJOR_VERSIONCUDAapi.MINOR_VERSIONCUDAapi.PATCH_LEVELCUDAapi.ToolchainCUDAapi.VersionRangeCUDAapi.cuda_gcc_dbCUDAapi.cuda_msvc_dbCUDAapi.cuda_namesCUDAapi.cuda_versionsCUDAapi.dev_cuda_dbCUDAapi.dev_llvm_dbCUDAapi.devices_for_cudaCUDAapi.devices_for_llvmCUDAapi.evalCUDAapi.find_binaryCUDAapi.find_cuda_binaryCUDAapi.find_cuda_libraryCUDAapi.find_host_compilerCUDAapi.find_libdeviceCUDAapi.find_libraryCUDAapi.find_toolchainCUDAapi.find_toolkitCUDAapi.find_toolkit_versionCUDAapi.gcc_supportedCUDAapi.highestCUDAapi.includeCUDAapi.isa_cuda_dbCUDAapi.isa_llvm_dbCUDAapi.isas_for_cudaCUDAapi.isas_for_llvmCUDAapi.libraryPropertyTypeCUDAapi.lowestCUDAapi.msvc_supportedCUDAapi.resolveCUDAapi.shaderCUDAapi.strip_minorCUDAapi.strip_patchCUDAapi.valid_dirs"
},

]}
