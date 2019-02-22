var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Variography.jl-1",
    "page": "Readme",
    "title": "Variography.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][codecov-img]][codecov-url]This package provides variogram models and tools for estimating empirical variograms from data. Variograms are extensively used in Kriging estimation, sequential Gaussian simulation, and many other geostatistical algorithms."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:] add Variography"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This package is part of the GeoStats.jl framework.For examples of usage, please check the main documentation."
},

{
    "location": "#Asking-for-help-1",
    "page": "Readme",
    "title": "Asking for help",
    "category": "section",
    "text": "If you have any questions, please contact our community on the gitter channel.[travis-img]: https://travis-ci.org/juliohm/Variography.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/Variography.jl[codecov-img]: https://codecov.io/gh/juliohm/Variography.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/Variography.jl"
},

{
    "location": "autodocs/#Variography.CompositeVariogram",
    "page": "Docstrings",
    "title": "Variography.CompositeVariogram",
    "category": "type",
    "text": "CompositeVariogram(γ₁, γ₂, ..., γₙ)\n\nA composite (additive) model of variograms γ(h) = γ₁(h) + γ₂(h) + ⋯ + γₙ(h).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.CubicVariogram",
    "page": "Docstrings",
    "title": "Variography.CubicVariogram",
    "category": "type",
    "text": "CubicVariogram(sill=s, range=r, nugget=n, distance=d)\n\nA cubic variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.DirectionalVariogram",
    "page": "Docstrings",
    "title": "Variography.DirectionalVariogram",
    "category": "function",
    "text": "DirectionalVariogram(spatialdata, direction, var₁, var₂=var₁; [optional parameters])\n\nComputes the empirical (cross-)variogram for the variables var₁ and var₂ stored in spatialdata along a given direction.\n\nOptional parameters include the parameters for EmpiricalVariogram and the parameters for DirectionPartitioner.\n\nNotes\n\nA DirectionalVariogram is just a function that first partitions the spatialdata using a DirectionPartitioner and then passes the result to the corresponding EmpiricalVariogram constructor.\n\nSee also: EmpiricalVariogram, DirectionPartitioner\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.EmpiricalVariogram",
    "page": "Docstrings",
    "title": "Variography.EmpiricalVariogram",
    "category": "type",
    "text": "EmpiricalVariogram(X, z₁, z₂=z₁; [optional parameters])\n\nComputes the empirical (a.k.a. experimental) omnidirectional (cross-)variogram from data locations X and values z₁ and z₂.\n\nEmpiricalVariogram(spatialdata, var₁, var₂=var₁; [optional parameters])\n\nAlternatively, compute the (cross-)variogram for the variables var₁ and var₂ stored in a spatialdata object.\n\nEmpiricalVariogram(partition, var₁, var₂=var₁; [optional parameters])\n\nAlternatively, compute the (cross-)variogram on a partition of the data.\n\nParameters\n\nnlags - number of lags (default to 20)\nmaxlag - maximum lag (default to half of maximum lag of data)\ndistance - custom distance function (default to Euclidean distance)\n\nSee also: DirectionalVariogram\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.ExponentialVariogram",
    "page": "Docstrings",
    "title": "Variography.ExponentialVariogram",
    "category": "type",
    "text": "ExponentialVariogram(sill=s, range=r, nugget=n, distance=d)\n\nAn exponential variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.FitAlgo",
    "page": "Docstrings",
    "title": "Variography.FitAlgo",
    "category": "type",
    "text": "FitAlgo\n\nAn algorithm for fitting theoretical variograms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.GaussianVariogram",
    "page": "Docstrings",
    "title": "Variography.GaussianVariogram",
    "category": "type",
    "text": "GaussianVariogram(sill=s, range=r, nugget=n, distance=d)\n\nA Gaussian variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.MaternVariogram",
    "page": "Docstrings",
    "title": "Variography.MaternVariogram",
    "category": "type",
    "text": "MaternVariogram(sill=s, range=r, nugget=n, order=ν, distance=d)\n\nA Matérn variogram with sill s, range r and nugget n. The parameter ν is the order of the Bessel function. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.PentasphericalVariogram",
    "page": "Docstrings",
    "title": "Variography.PentasphericalVariogram",
    "category": "type",
    "text": "PentasphericalVariogram\n\nA pentaspherical variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.PowerVariogram",
    "page": "Docstrings",
    "title": "Variography.PowerVariogram",
    "category": "type",
    "text": "PowerVariogram(scaling=s, exponent=a, nugget=n, distance=d)\n\nA power variogram with scaling s, exponent a and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.SineHoleVariogram",
    "page": "Docstrings",
    "title": "Variography.SineHoleVariogram",
    "category": "type",
    "text": "SineHoleVariogram(sill=s, range=r, nugget=n, distance=d)\n\nA sine hole variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.SphericalVariogram",
    "page": "Docstrings",
    "title": "Variography.SphericalVariogram",
    "category": "type",
    "text": "SphericalVariogram(sill=s, range=r, nugget=n, distance=d)\n\nA spherical variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.Variogram",
    "page": "Docstrings",
    "title": "Variography.Variogram",
    "category": "type",
    "text": "Variogram\n\nA variogram model (e.g. Gaussian variogram).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.WeightedLeastSquares",
    "page": "Docstrings",
    "title": "Variography.WeightedLeastSquares",
    "category": "type",
    "text": "WeightedLeastSquares(weightfun)\n\nFit theoretical variogram using weighted least squares with weighting function weightfun (e.g. h -> 1/h). If not weighting function is provided, bin counts of empirical variogram are normalized and used as weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.fit",
    "page": "Docstrings",
    "title": "Variography.fit",
    "category": "function",
    "text": "fit(V, γ, [algo])\n\nFit theoretical variogram type V to empirical variogram γ using algorithm algo. Default algorithm is WeightedLeastSquares.\n\n\n\n\n\nfit(Variogram, γ, [algo])\n\nFit all stationary variogram types to empirical variogram γ, which are subtypes of Variogram, and return the one with minimum error as defined by the algorithm algo.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.isstationary",
    "page": "Docstrings",
    "title": "Variography.isstationary",
    "category": "function",
    "text": "isstationary(γ)\n\nCheck if variogram γ possesses the 2nd-order stationary property.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.merge!",
    "page": "Docstrings",
    "title": "Variography.merge!",
    "category": "function",
    "text": "merge!(γₐ, γᵦ)\n\nMerge the empirical variogram γₐ with the empirical variogram γᵦ assuming that both have the same abscissa.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.pairwise",
    "page": "Docstrings",
    "title": "Variography.pairwise",
    "category": "function",
    "text": "pairwise(γ, X)\n\nEvaluate variogram γ between all n² pairs of columns in a m-by-n matrix X efficiently.\n\n\n\n\n\npairwise(γ, domain, locations)\n\nEvaluate variogram γ between all locations in domain.\n\n\n\n\n\npairwise(γ, domain, locations₁, locations₂)\n\nEvaluate variogram γ between locations₁ and locations₂ in domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.pairwise!",
    "page": "Docstrings",
    "title": "Variography.pairwise!",
    "category": "function",
    "text": "pairwise!(Γ, γ, X)\n\nNon-allocating pairwise evaluation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.param_type",
    "page": "Docstrings",
    "title": "Variography.param_type",
    "category": "function",
    "text": "param_type(γ)\n\nReturn the parameter (e.g. sill, range) type of the variogram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.result_type",
    "page": "Docstrings",
    "title": "Variography.result_type",
    "category": "function",
    "text": "result_type(γ, x₁, x₂)\n\nReturn result type of γ(x₁, x₂).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Variography.sill",
    "page": "Docstrings",
    "title": "Variography.sill",
    "category": "function",
    "text": "sill(γ)\n\nReturn the sill of the variogram γ when defined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Variography.@pack_CubicVariogramVariography.@pack_CubicVariogram!Variography.@pack_ExponentialVariogramVariography.@pack_ExponentialVariogram!Variography.@pack_GaussianVariogramVariography.@pack_GaussianVariogram!Variography.@pack_MaternVariogramVariography.@pack_MaternVariogram!Variography.@pack_PentasphericalVariogramVariography.@pack_PentasphericalVariogram!Variography.@pack_PowerVariogramVariography.@pack_PowerVariogram!Variography.@pack_SineHoleVariogramVariography.@pack_SineHoleVariogram!Variography.@pack_SphericalVariogramVariography.@pack_SphericalVariogram!Variography.@unpack_CubicVariogramVariography.@unpack_ExponentialVariogramVariography.@unpack_GaussianVariogramVariography.@unpack_MaternVariogramVariography.@unpack_PentasphericalVariogramVariography.@unpack_PowerVariogramVariography.@unpack_SineHoleVariogramVariography.@unpack_SphericalVariogramVariography.CompositeVariogramVariography.CubicVariogramVariography.DirectionalVariogramVariography.EmpiricalVariogramVariography.ExponentialVariogramVariography.FitAlgoVariography.GaussianVariogramVariography.HScatterVariography.MaternVariogramVariography.PentasphericalVariogramVariography.PowerVariogramVariography.SineHoleVariogramVariography.SphericalVariogramVariography.VarPlaneVariography.VariogramVariography.VariographyVariography.WeightedLeastSquaresVariography.evalVariography.fitVariography.fit_implVariography.hscatterVariography.hscatter!Variography.includeVariography.isstationaryVariography.merge!Variography.pairwiseVariography.pairwise!Variography.param_typeVariography.plane_basisVariography.result_typeVariography.sillVariography.varplaneVariography.varplane!"
},

]}
