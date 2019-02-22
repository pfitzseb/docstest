var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CuArrays-1",
    "page": "Readme",
    "title": "CuArrays",
    "category": "section",
    "text": "[![][docs-latest-img]][docs-latest-url] [![][codecov-img]][codecov-url][codecov-img]: https://codecov.io/gh/JuliaGPU/CuArrays.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaGPU/CuArrays.jl[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://juliagpu.gitlab.io/CuArrays.jl/CuArrays provides a fully-functional GPU array, which can give significant speedups over normal arrays without code changes. CuArrays are implemented fully in Julia, making the implementation elegant and extremely generic.Documentation for this package is sparse, and for many of the array operations you should refer to the official Julia documentation. The following resources can be useful to get a better understanding of the characteristics and performance trade offs that come with GPU arrays:Introductory tutorial on GPU programming with Julia\nSlide deck on effectively using GPUs with Julia"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "CuArrays should work out-of-the-box on Julia 1.0. You only need to have a proper set-up of CUDA, meaning the rest of the Julia CUDA stack should work (notably CUDAapi.jl, CUDAdrv.jl and CUDAnative.jl). If you encounter any issues with CuArrays.jl, please make sure those other packages are working as expected.Some parts of CuArrays.jl depend on optional libraries, such as cuDNN. The build process should notify about missing dependencies, i.e. inspect the output of Pkg.build(\"CuArrays\") to see whether your installation is complete."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "xs = cu(rand(5, 5))\nys = cu[1, 2, 3]\nxs_cpu = collect(xs)Because CuArray is an AbstractArray, it doesn\'t have much of a learning curve; just use your favourite array ops as usual. The following are supported (on arbitrary numbers of arguments, dimensions etc):Conversions and copy! with CPU arrays\nGeneral indexing (xs[1:2, 5, :])\npermutedims\nConcatenation (vcat(x, y), cat(3, xs, ys, zs))\nmap, fused broadcast (zs .= xs.^2 .+ ys .* 2)\nfill!(xs, 0)\nReduction over dimensions (reducedim(+, xs, 3), sum(x -> x^2, xs, 1) etc)\nReduction to scalar (reduce(*, 1, xs), sum(xs) etc)\nVarious BLAS operations (matrix*matrix, matrix*vector)\nFFTs, using the AbstractFFTs APIWe welcome issues or PRs for functionality not on this list.Note that some operations not on this list will work, but be slow, due to Base\'s generic implementations. This is intentional, to enable a \"make it work, then make it fast\" workflow. When you\'re ready you can disable slow fallback methods:julia> CuArrays.allowscalar(false)\njulia> xs[5]\nERROR: getindex is disabled"
},

{
    "location": "#Tutorials-1",
    "page": "Readme",
    "title": "Tutorials",
    "category": "section",
    "text": "CuArrays is a great starting point for learning the fundamentals GPU programming, because you can initially lean on the high-level abstractions and then learn, as needed, how to obtain more fine-grained control.  Here are some tutorials to get you started:https://juliagpu.gitlab.io/CuArrays.jl/tutorials/intro.html"
},

]}
