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
    "text": "[![][gitlab-img]][gitlab-url] [![][codecov-img]][codecov-url][gitlab-img]: https://gitlab.com/JuliaGPU/CuArrays.jl/badges/master/pipeline.svg [gitlab-url]: https://gitlab.com/JuliaGPU/CuArrays.jl/pipelines[codecov-img]: https://codecov.io/gh/JuliaGPU/CuArrays.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaGPU/CuArrays.jlCuArrays provides a fully-functional GPU array, which can give significant speedups over normal arrays without code changes. CuArrays are implemented fully in Julia, making the implementation elegant and extremely generic.Note that you need to build Julia 0.6 from source and have CUDA available to use this package – please see the CUDAnative.jl instructions for more details.Pkg.add(\"CuArrays\")"
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "xs = cu(rand(5, 5))\nys = cu[1, 2, 3]\nxs_cpu = collect(xs)Because CuArray is an AbstractArray, it doesn\'t have much of a learning curve; just use your favourite array ops as usual. The following are supported (on arbitrary numbers of arguments, dimensions etc):Conversions and copy! with CPU arrays\nGeneral indexing (xs[1:2, 5, :])\npermutedims\nConcatenation (vcat(x, y), cat(3, xs, ys, zs))\nmap, fused broadcast (zs .= xs.^2 .+ ys .* 2)\nfill!(xs, 0)\nReduction over dimensions (reducedim(+, xs, 3), sum(x -> x^2, xs, 1) etc)\nReduction to scalar (reduce(*, 1, xs), sum(xs) etc)\nVarious BLAS operations (matrix*matrix, matrix*vector)\nFFTs, using the AbstractFFTs APIWe welcome issues or PRs for functionality not on this list.Note that some operations not on this list will work, but be slow, due to Base\'s generic implementations. This is intentional, to enable a \"make it work, then make it fast\" workflow. When you\'re ready you can disable slow fallback methods:julia> CuArrays.allowscalar(false)\njulia> xs[5]\nERROR: getindex is disabled"
},

{
    "location": "#Current-Limitations-1",
    "page": "Readme",
    "title": "Current Limitations",
    "category": "section",
    "text": "When broadcasting, watch out for errors like:julia> sin.(cos.(xs))\nERROR: CUDA error: invalid program counter (code #718, ERROR_INVALID_PC)A current limitation of CUDAnative means that you\'ll need to restart Julia and use CUDAnative.sin, CUDAnative.cos etc in this case.There is currently no support for strided arrays or views, though these are planned."
},

]}
