var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#KrigingEstimators.jl-1",
    "page": "Readme",
    "title": "KrigingEstimators.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][codecov-img]][codecov-url]This package provides high-performance implementations of Kriging estimators introduced by Matheron 1971, and further developed by various geostatisticians. As the most general form of estimation with covariance/variogram models, Kriging does not require distributional assumptions, is well-defined in general Hilbert spaces, and is unbiased. These properties make Kriging a quite useful method for estimation with real world data. Currently, the following Kriging variants are implemented:Simple Kriging\nOrdinary Kriging\nUniversal Kriging\nExternal Drift Kriging"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:] add KrigingEstimators"
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
    "text": "If you have any questions, please contact our community on the gitter channel.[travis-img]: https://travis-ci.org/juliohm/KrigingEstimators.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/KrigingEstimators.jl[codecov-img]: https://codecov.io/gh/juliohm/KrigingEstimators.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/KrigingEstimators.jl"
},

{
    "location": "autodocs/#KrigingEstimators.ExternalDriftKriging",
    "page": "Docstrings",
    "title": "KrigingEstimators.ExternalDriftKriging",
    "category": "type",
    "text": "ExternalDriftKriging(γ, drifts)\nExternalDriftKriging(X, z, γ, drifts)\n\nExternal Drift Kriging with variogram model γ and external drifts functions.\n\nOptionally, pass the coordinates X and values z to the fit function.\n\nNotes\n\nExternal drift functions should be smooth\nKriging system with external drift is often unstable\nInclude a constant drift (e.g. x->1) for unbiased estimation\nOrdinaryKriging is recovered for drifts = [x->1]\nFor polynomial mean, see UniversalKriging\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.FittedKriging",
    "page": "Docstrings",
    "title": "KrigingEstimators.FittedKriging",
    "category": "type",
    "text": "FittedKriging(estimator, state)\n\nAn object that can be used for making predictions using the parameters in estimator and the current Kriging state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.KrigingEstimator",
    "page": "Docstrings",
    "title": "KrigingEstimators.KrigingEstimator",
    "category": "type",
    "text": "KrigingEstimator\n\nA Kriging estimator (e.g. Simple Kriging).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.KrigingState",
    "page": "Docstrings",
    "title": "KrigingEstimators.KrigingState",
    "category": "type",
    "text": "KrigingState(X, z, LHS, RHS)\n\nA Kriging state stores information needed to perform estimation at any given location.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.KrigingWeights",
    "page": "Docstrings",
    "title": "KrigingEstimators.KrigingWeights",
    "category": "type",
    "text": "KrigingWeights(λ, ν)\n\nAn object storing Kriging weights λ and Lagrange multipliers ν.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.OrdinaryKriging",
    "page": "Docstrings",
    "title": "KrigingEstimators.OrdinaryKriging",
    "category": "type",
    "text": "OrdinaryKriging(γ)\nOrdinaryKriging(X, z, γ)\n\nOrdinary Kriging with variogram model γ.\n\nOptionally, pass the coordinates X and values z to the fit function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.SimpleKriging",
    "page": "Docstrings",
    "title": "KrigingEstimators.SimpleKriging",
    "category": "type",
    "text": "SimpleKriging(γ, μ)\nSimpleKriging(X, z, γ, μ)\n\nSimple Kriging with variogram model γ and constant mean μ.\n\nOptionally, pass the coordinates X and values z to the fit function.\n\nNotes\n\nSimple Kriging requires stationary variograms\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.UniversalKriging",
    "page": "Docstrings",
    "title": "KrigingEstimators.UniversalKriging",
    "category": "type",
    "text": "UniversalKriging(γ, degree, dim)\nUniversalKriging(X, z, γ, degree)\n\nUniversal Kriging with variogram model γ and polynomial degree on a spatial domain of dimension dim.\n\nOptionally, pass the coordinates X and values z to the fit function.\n\nNotes\n\nOrdinaryKriging is recovered for 0th degree polynomial\nFor non-polynomial mean, see ExternalDriftKriging\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.combine",
    "page": "Docstrings",
    "title": "KrigingEstimators.combine",
    "category": "function",
    "text": "combine(estimator, weights, z)\n\nCombine weights with values z to produce mean and variance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.factorize",
    "page": "Docstrings",
    "title": "KrigingEstimators.factorize",
    "category": "function",
    "text": "factorize(estimator, LHS)\n\nFactorize LHS of Kriging system with appropriate factorization method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.fit",
    "page": "Docstrings",
    "title": "KrigingEstimators.fit",
    "category": "function",
    "text": "fit(estimator, X, z)\n\nBuild Kriging system from coordinates X and values z and return a fitted estimator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.lhs",
    "page": "Docstrings",
    "title": "KrigingEstimators.lhs",
    "category": "function",
    "text": "lhs(estimator, X)\n\nReturn LHS of Kriging system using spatial configuration X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.nconstraints",
    "page": "Docstrings",
    "title": "KrigingEstimators.nconstraints",
    "category": "function",
    "text": "nconstraints(estimator)\n\nReturn number of constraints for estimator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.predict",
    "page": "Docstrings",
    "title": "KrigingEstimators.predict",
    "category": "function",
    "text": "predict(estimator, xₒ)\n\nCompute mean and variance for the estimator at coordinates xₒ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.set_constraints_lhs!",
    "page": "Docstrings",
    "title": "KrigingEstimators.set_constraints_lhs!",
    "category": "function",
    "text": "set_constraints_lhs!(estimator, LHS, X)\n\nSet constraints in LHS of Kriging system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.set_constraints_rhs!",
    "page": "Docstrings",
    "title": "KrigingEstimators.set_constraints_rhs!",
    "category": "function",
    "text": "set_constraints_rhs!(estimator, xₒ)\n\nSet constraints in RHS of Kriging system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.set_rhs!",
    "page": "Docstrings",
    "title": "KrigingEstimators.set_rhs!",
    "category": "function",
    "text": "set_rhs!(estimator, xₒ)\n\nSet RHS of Kriging system at coodinates xₒ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.status",
    "page": "Docstrings",
    "title": "KrigingEstimators.status",
    "category": "function",
    "text": "status(fittedkrig)\n\nReturn the status of the fittedkrig object, meaning the factorization of the Kriging system was successful.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KrigingEstimators.weights",
    "page": "Docstrings",
    "title": "KrigingEstimators.weights",
    "category": "function",
    "text": "weights(estimator, xₒ)\n\nCompute the weights λ (and Lagrange multipliers ν) for the estimator at coordinates xₒ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "KrigingEstimators.CompositeVariogramKrigingEstimators.CubicVariogramKrigingEstimators.DirectionalVariogramKrigingEstimators.EmpiricalVariogramKrigingEstimators.ExponentialVariogramKrigingEstimators.ExternalDriftKrigingKrigingEstimators.FittedKrigingKrigingEstimators.GaussianVariogramKrigingEstimators.KrigingEstimatorKrigingEstimators.KrigingEstimatorsKrigingEstimators.KrigingStateKrigingEstimators.KrigingWeightsKrigingEstimators.MaternVariogramKrigingEstimators.OrdinaryKrigingKrigingEstimators.PentasphericalVariogramKrigingEstimators.PowerVariogramKrigingEstimators.SimpleKrigingKrigingEstimators.SineHoleVariogramKrigingEstimators.SphericalVariogramKrigingEstimators.UKexpsKrigingEstimators.UniversalKrigingKrigingEstimators.VariogramKrigingEstimators.VariographyKrigingEstimators.WeightedLeastSquaresKrigingEstimators.combineKrigingEstimators.evalKrigingEstimators.factorizeKrigingEstimators.fitKrigingEstimators.hscatterKrigingEstimators.hscatter!KrigingEstimators.includeKrigingEstimators.isstationaryKrigingEstimators.lhsKrigingEstimators.nconstraintsKrigingEstimators.pairwiseKrigingEstimators.pairwise!KrigingEstimators.predictKrigingEstimators.set_constraints_lhs!KrigingEstimators.set_constraints_rhs!KrigingEstimators.set_rhs!KrigingEstimators.sillKrigingEstimators.statusKrigingEstimators.varplaneKrigingEstimators.varplane!KrigingEstimators.weights"
},

]}
