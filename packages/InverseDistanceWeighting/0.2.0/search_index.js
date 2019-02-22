var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InverseDistanceWeighting.jl-1",
    "page": "Readme",
    "title": "InverseDistanceWeighting.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][julia-pkg-img]][julia-pkg-url] [![][codecov-img]][codecov-url]This package provides a high-performance implementation of the inverse distance weighting scheme introduced in the very early days of geostatistics (see Shepard 1968). It is perhaps the simplest first attempt in the literature to perform estimation based on the notion of proximity to data locations.This implementation makes use of k-d trees from the NearestNeighbors.jl package, which leads to a fast estimation method for large or high-resolution spatial domains. Although this method is recommended for fast assessment of a new field, it has poor statistical properties (lacks covariance model) and should mainly be used for qualitative purposes."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:Pkg.add(\"InverseDistanceWeighting\")"
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
    "text": "If you have any questions, please open an issue.[travis-img]: https://travis-ci.org/juliohm/InverseDistanceWeighting.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/InverseDistanceWeighting.jl[julia-pkg-img]: http://pkg.julialang.org/badges/InverseDistanceWeighting_0.7.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=InverseDistanceWeighting[codecov-img]: https://codecov.io/gh/juliohm/InverseDistanceWeighting.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/InverseDistanceWeighting.jl"
},

{
    "location": "autodocs/#InverseDistanceWeighting.InvDistWeight",
    "page": "Docstrings",
    "title": "InverseDistanceWeighting.InvDistWeight",
    "category": "type",
    "text": "InvDistWeight(var₁=>param₁, var₂=>param₂, ...)\n\nInverse distance weighting estimation solver.\n\nParameters\n\nneighbors - Number of neighbors (default to all data locations)\ndistance  - A distance defined in Distances.jl (default to Euclidean()\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InverseDistanceWeighting.InvDistWeightParam",
    "page": "Docstrings",
    "title": "InverseDistanceWeighting.InvDistWeightParam",
    "category": "type",
    "text": "InvDistWeight(var₁=>param₁, var₂=>param₂, ...)\n\nInverse distance weighting estimation solver.\n\nParameters\n\nneighbors - Number of neighbors (default to all data locations)\ndistance  - A distance defined in Distances.jl (default to Euclidean()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "InverseDistanceWeighting.@pack_InvDistWeightParamInverseDistanceWeighting.@pack_InvDistWeightParam!InverseDistanceWeighting.@unpack_InvDistWeightParamInverseDistanceWeighting.BhattacharyyaDistInverseDistanceWeighting.BrayCurtisInverseDistanceWeighting.BregmanInverseDistanceWeighting.ChebyshevInverseDistanceWeighting.ChiSqDistInverseDistanceWeighting.CityblockInverseDistanceWeighting.CorrDistInverseDistanceWeighting.CosineDistInverseDistanceWeighting.DistancesInverseDistanceWeighting.EuclideanInverseDistanceWeighting.GenKLDivergenceInverseDistanceWeighting.HammingInverseDistanceWeighting.HaversineInverseDistanceWeighting.HellingerDistInverseDistanceWeighting.InvDistWeightInverseDistanceWeighting.InvDistWeightParamInverseDistanceWeighting.InverseDistanceWeightingInverseDistanceWeighting.JSDivergenceInverseDistanceWeighting.JaccardInverseDistanceWeighting.KLDivergenceInverseDistanceWeighting.MahalanobisInverseDistanceWeighting.MeanAbsDeviationInverseDistanceWeighting.MeanSqDeviationInverseDistanceWeighting.MetricInverseDistanceWeighting.MinkowskiInverseDistanceWeighting.NormRMSDeviationInverseDistanceWeighting.PreMetricInverseDistanceWeighting.RMSDeviationInverseDistanceWeighting.RenyiDivergenceInverseDistanceWeighting.RogersTanimotoInverseDistanceWeighting.SemiMetricInverseDistanceWeighting.SpanNormDistInverseDistanceWeighting.SqEuclideanInverseDistanceWeighting.SqMahalanobisInverseDistanceWeighting.WeightedCityblockInverseDistanceWeighting.WeightedEuclideanInverseDistanceWeighting.WeightedHammingInverseDistanceWeighting.WeightedMinkowskiInverseDistanceWeighting.WeightedSqEuclideanInverseDistanceWeighting.bhattacharyyaInverseDistanceWeighting.braycurtisInverseDistanceWeighting.bregmanInverseDistanceWeighting.chebyshevInverseDistanceWeighting.chisq_distInverseDistanceWeighting.cityblockInverseDistanceWeighting.colwiseInverseDistanceWeighting.colwise!InverseDistanceWeighting.corr_distInverseDistanceWeighting.cosine_distInverseDistanceWeighting.euclideanInverseDistanceWeighting.evalInverseDistanceWeighting.evaluateInverseDistanceWeighting.gkl_divergenceInverseDistanceWeighting.hammingInverseDistanceWeighting.haversineInverseDistanceWeighting.hellingerInverseDistanceWeighting.includeInverseDistanceWeighting.jaccardInverseDistanceWeighting.js_divergenceInverseDistanceWeighting.kl_divergenceInverseDistanceWeighting.mahalanobisInverseDistanceWeighting.meanadInverseDistanceWeighting.minkowskiInverseDistanceWeighting.msdInverseDistanceWeighting.nrmsdInverseDistanceWeighting.pairwiseInverseDistanceWeighting.pairwise!InverseDistanceWeighting.renyi_divergenceInverseDistanceWeighting.result_typeInverseDistanceWeighting.rmsdInverseDistanceWeighting.rogerstanimotoInverseDistanceWeighting.spannorm_distInverseDistanceWeighting.sqeuclideanInverseDistanceWeighting.sqmahalanobisInverseDistanceWeighting.wcityblockInverseDistanceWeighting.weuclideanInverseDistanceWeighting.whammingInverseDistanceWeighting.wminkowskiInverseDistanceWeighting.wsqeuclidean"
},

]}
