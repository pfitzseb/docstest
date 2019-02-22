var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DirectGaussianSimulation.jl-1",
    "page": "Readme",
    "title": "DirectGaussianSimulation.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][julia-pkg-img]][julia-pkg-url] [![][codecov-img]][codecov-url]This package provides an implementation of direct Gaussian simulation (a.k.a. LU simulation) as described in Alabert 1987. In this method, the full covariance matrix is built to include all locations of the simulation domain, and samples from the multivariate Gaussian are drawn via LU factorization.The method, which is widely implemented in many packages for Gaussian processes (e.g. GaussianProcesses.jl, GaussianRandomFields.jl), is appropriate for relatively small simulation domains (e.g. 100x100 grids) where it is feasible to factorize the full covariance. For larger domains (e.g. 3D grids), other methods are available such as sequential Gaussian simulation and FFT moving averages."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:] add DirectGaussianSimulation"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This package is part of the GeoStats.jl framework.For a simple example of usage, please check this notebook."
},

{
    "location": "#Asking-for-help-1",
    "page": "Readme",
    "title": "Asking for help",
    "category": "section",
    "text": "If you have any questions, please open an issue.[travis-img]: https://travis-ci.org/juliohm/DirectGaussianSimulation.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/DirectGaussianSimulation.jl[julia-pkg-img]: http://pkg.julialang.org/badges/DirectGaussianSimulation_0.7.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=DirectGaussianSimulation[codecov-img]: https://codecov.io/gh/juliohm/DirectGaussianSimulation.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/DirectGaussianSimulation.jl"
},

{
    "location": "autodocs/#DirectGaussianSimulation.DirectGaussSim",
    "page": "Docstrings",
    "title": "DirectGaussianSimulation.DirectGaussSim",
    "category": "type",
    "text": "DirectGaussSim(var₁=>param₁, var₂=>param₂, ...)\n\nDirect Gaussian simulation (a.k.a. LU simulation).\n\nParameters\n\nvariogram - theoretical variogram (default to GaussianVariogram())\n\nReferences\n\nAlabert 1987. The practice of fast conditional simulations through the LU decomposition of the covariance matrix.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DirectGaussianSimulation.DirectGaussSimParam",
    "page": "Docstrings",
    "title": "DirectGaussianSimulation.DirectGaussSimParam",
    "category": "type",
    "text": "DirectGaussSim(var₁=>param₁, var₂=>param₂, ...)\n\nDirect Gaussian simulation (a.k.a. LU simulation).\n\nParameters\n\nvariogram - theoretical variogram (default to GaussianVariogram())\n\nReferences\n\nAlabert 1987. The practice of fast conditional simulations through the LU decomposition of the covariance matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DirectGaussianSimulation.@pack_DirectGaussSimParamDirectGaussianSimulation.@pack_DirectGaussSimParam!DirectGaussianSimulation.@unpack_DirectGaussSimParamDirectGaussianSimulation.DirectGaussSimDirectGaussianSimulation.DirectGaussSimParamDirectGaussianSimulation.DirectGaussianSimulationDirectGaussianSimulation.evalDirectGaussianSimulation.include"
},

]}
