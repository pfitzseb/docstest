var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#PerronFrobenius.jl-Documentation-1",
    "page": "Overview",
    "title": "PerronFrobenius.jl Documentation",
    "category": "section",
    "text": "A package for computing invariant measures over partitioned phase spaces or state space reconstructions.This package implements the algorithms for estimating the transfer operator from an upcoming manuscript on transfer entropy computation using the transfer operator (Diego D, Haaga KA, Hannisdal B, Transfer Entropy computation using the Perron-Frobenius operator. In prep.)."
},

{
    "location": "estimators/estimators/#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "estimators/estimators/#Overview-1",
    "page": "Overview",
    "title": "Overview",
    "category": "section",
    "text": "For short time series, the most reliable estimates of the transfer operator are obtained by using a triangulation of the state space as our partition. This approach is computationally costly because it has to compute N-dimensional simplex intersections. However, it gives robust estimates of ergodic transition probabilities down to as little as a few hundred points.For longer time series, we use a rectangular grid to discretize the embedding. This approach is must faster, because no volume intersections have to be explicitly computed.using CausalityTools\nusing Plots; pyplot()"
},

{
    "location": "estimators/estimators/#Short-time-series-(triangulation-estimator)-1",
    "page": "Overview",
    "title": "Short time series (triangulation estimator)",
    "category": "section",
    "text": "Embed some random short time series (n = 30), make sure that the embedding is invariant, triangulate the embedding, and estimate the transfer operator on the states (partition elements) of the discretized state space. We then compute the invariant measure over the states from the transfer matrix.ts = [diff(rand(30)) for i = 1:3]\nE = invariantize(embed(ts))\ntriang = triangulate(E)\nTO = transferoperator(triang)# Plot the transfer operator and the invariant distribution\nmaxprob = min(1, maximum(TO.TO)*1.1) # for plotting\nheatmap(TO.TO, clims=(0, maxprob));\nxlabel!(\"Target simplex # (j)\");\nylabel!(\"Source simplex # (i)\");\nsavefig(\"transferoperator-short-ex.svg\"); nothing #hide(Image: )"
},

{
    "location": "estimators/estimators/#Long-time-series-(gridding-estimator)-1",
    "page": "Overview",
    "title": "Long time series (gridding estimator)",
    "category": "section",
    "text": "The gridding approach is fast and can be used on a large number of points in higher dimensions. Here, we compute the transfer operator for 5000 4-dimensional data points, subdividing each coordinate axis into intervals of length 0.3.data = rand(4, 5000)\nTO = TransferOperatorEstimatorRectangularBinning(data, 0.7)\nmaxprob = min(1, maximum(TO.TO)*1.1);\nheatmap(TO.TO, clims=(0, maxprob));\nxlabel!(\"Target box # (j)\");\nylabel!(\"Source box # (i)\");\nsavefig(\"transferoperator-long-ex.svg\"); nothing #hide(Image: )This also works on embeddings from StateSpaceReconstruction.jl:data = rand(3, 3000)\nE = embed(data)\nTO = TransferOperatorEstimatorRectangularBinning(E, 0.3)\nmaxprob = min(1, maximum(TO.TO)*1.1);\nheatmap(TO.TO, clims=(0, maxprob));\nxlabel!(\"Target box # (j)\");\nylabel!(\"Source box # (i)\");\nsavefig(\"transferoperator-long-ex2.svg\"); nothing #hide(Image: )"
},

{
    "location": "estimators/direct/#",
    "page": "Grid estimator",
    "title": "Grid estimator",
    "category": "page",
    "text": ""
},

{
    "location": "estimators/direct/#PerronFrobenius.TransferOperators.Estimators.transferoperator",
    "page": "Grid estimator",
    "title": "PerronFrobenius.TransferOperators.Estimators.transferoperator",
    "category": "function",
    "text": "transferoperator(points, binning_scheme::RectangularBinningScheme; kwargs...)\n\nDiscretize points using the provided binning_scheme and compute the transfer operator  over the partition elements. \n\n\n\n\n\ntransferoperator(pts, ϵ::TriangulationBinning, simplex_intersection_type::ApproximateIntersection; \n    n::Int = 200, sample_randomly::Bool = false) -> TransferOperatorTriangulationApprox\n\nEstimate the invariant measure over the state space defined by pts using a triangulation  of the phase space as the partition, using approximate simplex intersections to compute transition probabilities between the states (simplices). \n\nn is the number of points that each simplex is  sampled with, and sample_randomly indicates whether points used be sampled randomly  within each simpled (sample_randomly = true) or by a regular simplex splitting routine  (sample_randomly = false, which is default).\n\nExample: If pts = [rand(3) for i = 1:30], then run transferoperator(pts, TriangulationBinning(), ApproximateIntersection()). \n\n\n\n\n\ntransferoperator(pts, ϵ::TriangulationBinning, \n    simplex_intersection_type::ExactIntersection) -> TransferOperatorTriangulationExact\n\nEstimate the invariant measure over the state space defined by pts using a triangulation  of the phase space as the partition, using exact simplex intersections to compute transition probabilities between the states (simplices).\n\nExample: If pts = [rand(3) for i = 1:30], then run transferoperator(pts, TriangulationBinning(), ExactIntersection()). \n\n\n\n\n\ntransferoperator(points, binning_scheme::TriangulationBinningScheme,\n    simplex_intersection::SimplexIntersectionType; kwargs...)\n\nDiscretize points using the provided binning_scheme and compute the transfer operator  over the partition elements using the type of simplex intersections indicated by  simplex_intersection_type.\n\n\n\n\n\n"
},

{
    "location": "estimators/direct/#Grid-estimator-1",
    "page": "Grid estimator",
    "title": "Grid estimator",
    "category": "section",
    "text": "transferoperator"
},

]}
