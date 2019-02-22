var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PerronFrobenius.jl-1",
    "page": "Readme",
    "title": "PerronFrobenius.jl",
    "category": "section",
    "text": "(Image: Build Status)A Julia package to compute approximation to the transfer operator (Perron-Frobenius operator) and invariant measures from partitioned state space reconstructions.PerronFrobenius.jl provides essential functionality for the  CausalityTools.jl and 	and TimeseriesSurrogates.jl 	packages."
},

{
    "location": "#Transfer-operator-estimators-1",
    "page": "Readme",
    "title": "Transfer operator estimators",
    "category": "section",
    "text": "Currently, the following estimators are implemented. For details onEstimator Accepts Status on Julia 1.0 Reference\ntransferoperator_grid AbstractArray, AbstractEmbedding Working Diego et al. (2018)\ntransferoperator_triang_approx AbstractTriangulation Working Diego et al. (2018)\ntransferoperator_triang_exact AbstractTriangulation Tests fail Diego et al. (2018)All estimators return an instance of a subtype of AbstractTransferOperator, which is a struct with a single field transfermatrix."
},

{
    "location": "#Grid-estimator-1",
    "page": "Readme",
    "title": "Grid estimator",
    "category": "section",
    "text": "The grid estimator accepts eithera two-dimension array where each column represents a point in the state space reconstruction, or\nan instance of a subtype of AbstractEmbedding."
},

{
    "location": "#Triangulation-estimator-1",
    "page": "Readme",
    "title": "Triangulation estimator",
    "category": "section",
    "text": "The triangulation estimators take StateSpaceReconstruction.AbstractTriangulation instances as inputs."
},

{
    "location": "#(Natural)-invariant-measures-1",
    "page": "Readme",
    "title": "(Natural) invariant measures",
    "category": "section",
    "text": "Obtaining the invariant measure from a transfer operator TO is done by calling left_eigenvector(TO). "
},

]}
