var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LocallyWeightedRegression.jl-1",
    "page": "Readme",
    "title": "LocallyWeightedRegression.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][julia-pkg-img]][julia-pkg-url] [![][codecov-img]][codecov-url]This package provides an implementation of locally weighted regression (a.k.a. LOESS) introduced by Cleveland 1979. It is the most natural generalization of InverseDistanceWeighting.jl in which one is allowed to use a custom weight function instead of distance-based weights.Like in the inverse distance weighting scheme, this package makes use of k-d trees from the NearestNeighbors.jl package for fast data lookup. Locally weighted regression (LWR or LOESS) is a popular non-parametric method in machine learning, however it still has poor statistical properties compared to other estimation methods such as Kriging that explicitly model spatial correlation.In the current implementation, the estimation variance is computed assuming Gaussian residuals."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:] add LocallyWeightedRegression"
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
    "text": "If you have any questions, please open an issue.[travis-img]: https://travis-ci.org/juliohm/LocallyWeightedRegression.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/LocallyWeightedRegression.jl[julia-pkg-img]: http://pkg.julialang.org/badges/LocallyWeightedRegression_0.7.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=LocallyWeightedRegression[codecov-img]: https://codecov.io/gh/juliohm/LocallyWeightedRegression.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/LocallyWeightedRegression.jl"
},

{
    "location": "autodocs/#LocallyWeightedRegression.LocalWeightRegress",
    "page": "Docstrings",
    "title": "LocallyWeightedRegression.LocalWeightRegress",
    "category": "type",
    "text": "LocalWeightRegress(var₁=>param₁, var₂=>param₂, ...)\n\nLocally weighted regression (LOESS) estimation solver.\n\nParameters\n\nneighbors - Number of neighbors (default to all data locations)\nvariogram - A variogram defined in Variography.jl (default to ExponentialVariogram())\ndistance  - A distance defined in Distances.jl (default to Euclidean())\n\nReferences\n\nCleveland 1979. Robust Locally Weighted Regression and Smoothing Scatterplots\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocallyWeightedRegression.LocalWeightRegressParam",
    "page": "Docstrings",
    "title": "LocallyWeightedRegression.LocalWeightRegressParam",
    "category": "type",
    "text": "LocalWeightRegress(var₁=>param₁, var₂=>param₂, ...)\n\nLocally weighted regression (LOESS) estimation solver.\n\nParameters\n\nneighbors - Number of neighbors (default to all data locations)\nvariogram - A variogram defined in Variography.jl (default to ExponentialVariogram())\ndistance  - A distance defined in Distances.jl (default to Euclidean())\n\nReferences\n\nCleveland 1979. Robust Locally Weighted Regression and Smoothing Scatterplots\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LocallyWeightedRegression.@pack_LocalWeightRegressParamLocallyWeightedRegression.@pack_LocalWeightRegressParam!LocallyWeightedRegression.@unpack_LocalWeightRegressParamLocallyWeightedRegression.BhattacharyyaDistLocallyWeightedRegression.BrayCurtisLocallyWeightedRegression.BregmanLocallyWeightedRegression.ChebyshevLocallyWeightedRegression.ChiSqDistLocallyWeightedRegression.CityblockLocallyWeightedRegression.CompositeVariogramLocallyWeightedRegression.CorrDistLocallyWeightedRegression.CosineDistLocallyWeightedRegression.CubicVariogramLocallyWeightedRegression.DirectionalVariogramLocallyWeightedRegression.DistancesLocallyWeightedRegression.EmpiricalVariogramLocallyWeightedRegression.EuclideanLocallyWeightedRegression.ExponentialVariogramLocallyWeightedRegression.GaussianVariogramLocallyWeightedRegression.GenKLDivergenceLocallyWeightedRegression.HammingLocallyWeightedRegression.HaversineLocallyWeightedRegression.HellingerDistLocallyWeightedRegression.JSDivergenceLocallyWeightedRegression.JaccardLocallyWeightedRegression.KLDivergenceLocallyWeightedRegression.LocalWeightRegressLocallyWeightedRegression.LocalWeightRegressParamLocallyWeightedRegression.LocallyWeightedRegressionLocallyWeightedRegression.MahalanobisLocallyWeightedRegression.MaternVariogramLocallyWeightedRegression.MeanAbsDeviationLocallyWeightedRegression.MeanSqDeviationLocallyWeightedRegression.MetricLocallyWeightedRegression.MinkowskiLocallyWeightedRegression.NormRMSDeviationLocallyWeightedRegression.PentasphericalVariogramLocallyWeightedRegression.PowerVariogramLocallyWeightedRegression.PreMetricLocallyWeightedRegression.RMSDeviationLocallyWeightedRegression.RenyiDivergenceLocallyWeightedRegression.RogersTanimotoLocallyWeightedRegression.SemiMetricLocallyWeightedRegression.SineHoleVariogramLocallyWeightedRegression.SpanNormDistLocallyWeightedRegression.SphericalVariogramLocallyWeightedRegression.SqEuclideanLocallyWeightedRegression.SqMahalanobisLocallyWeightedRegression.VariogramLocallyWeightedRegression.VariographyLocallyWeightedRegression.WeightedCityblockLocallyWeightedRegression.WeightedEuclideanLocallyWeightedRegression.WeightedHammingLocallyWeightedRegression.WeightedLeastSquaresLocallyWeightedRegression.WeightedMinkowskiLocallyWeightedRegression.WeightedSqEuclideanLocallyWeightedRegression.bhattacharyyaLocallyWeightedRegression.braycurtisLocallyWeightedRegression.bregmanLocallyWeightedRegression.chebyshevLocallyWeightedRegression.chisq_distLocallyWeightedRegression.cityblockLocallyWeightedRegression.colwiseLocallyWeightedRegression.colwise!LocallyWeightedRegression.corr_distLocallyWeightedRegression.cosine_distLocallyWeightedRegression.euclideanLocallyWeightedRegression.evalLocallyWeightedRegression.evaluateLocallyWeightedRegression.fitLocallyWeightedRegression.gkl_divergenceLocallyWeightedRegression.hammingLocallyWeightedRegression.haversineLocallyWeightedRegression.hellingerLocallyWeightedRegression.hscatterLocallyWeightedRegression.hscatter!LocallyWeightedRegression.includeLocallyWeightedRegression.isstationaryLocallyWeightedRegression.jaccardLocallyWeightedRegression.js_divergenceLocallyWeightedRegression.kl_divergenceLocallyWeightedRegression.mahalanobisLocallyWeightedRegression.meanadLocallyWeightedRegression.minkowskiLocallyWeightedRegression.msdLocallyWeightedRegression.nrmsdLocallyWeightedRegression.pairwiseLocallyWeightedRegression.pairwise!LocallyWeightedRegression.renyi_divergenceLocallyWeightedRegression.result_typeLocallyWeightedRegression.rmsdLocallyWeightedRegression.rogerstanimotoLocallyWeightedRegression.sillLocallyWeightedRegression.spannorm_distLocallyWeightedRegression.sqeuclideanLocallyWeightedRegression.sqmahalanobisLocallyWeightedRegression.varplaneLocallyWeightedRegression.varplane!LocallyWeightedRegression.wcityblockLocallyWeightedRegression.weuclideanLocallyWeightedRegression.whammingLocallyWeightedRegression.wminkowskiLocallyWeightedRegression.wsqeuclidean"
},

]}
