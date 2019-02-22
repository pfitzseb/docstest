var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CausalityToolsBase.jl-1",
    "page": "Readme",
    "title": "CausalityToolsBase.jl",
    "category": "section",
    "text": "A lightweight package containing functionality used throughout the CausalityTools  ecosystem. Documentation\n(Image: )"
},

{
    "location": "autodocs/#CausalityToolsBase.ApproximateIntersection",
    "page": "Docstrings",
    "title": "CausalityToolsBase.ApproximateIntersection",
    "category": "type",
    "text": "ApproximateIntersection\n\nA type indicating that simplex intersections should be computed exactly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.BinningScheme",
    "page": "Docstrings",
    "title": "CausalityToolsBase.BinningScheme",
    "category": "type",
    "text": "BinningScheme\n\nThe supertype of all binning schemes in the CausalityTools ecosystem. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.ExactIntersection",
    "page": "Docstrings",
    "title": "CausalityToolsBase.ExactIntersection",
    "category": "type",
    "text": "ExactIntersection\n\nA type indicating that simplex intersections should be computed exactly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.Lags",
    "page": "Docstrings",
    "title": "CausalityToolsBase.Lags",
    "category": "type",
    "text": "Lags\n\nWrapper type for lags used when performing custom state space reconstructions. Used in combination with Positions to specify how a CustomReconstruction should be constructed.\n\nExamples\n\nLags(2, 0, -3, 1) indicates a 4-dimensional state space reconstruction where    the first variable has a positive lag of 2,    the second variable is not lagged,    the third variable has a lag of -3,    and the fourth variable has a positive lag of 1. \nLags(0, 0) indicates a 2-dimensional state space reconstruction where both    variables are not lagged.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.Positions",
    "page": "Docstrings",
    "title": "CausalityToolsBase.Positions",
    "category": "type",
    "text": "Positions\n\nWrapper type for the positions the different dynamical variables appear in when  constructing a custom state space reconstruction. Used in combination with Lags to specify how a CustomReconstruction should be constructed. Each  of the positions must refer to a dynamical variable (column) actually present in the  dataset.\n\nExamples\n\nPositions(1, 2, 1, 5) indicates a 4-dimensional state space reconstruction where \nthe 1st coordinate axis of the reconstruction should be formed from the \nfirst variable/column of the input data.\nthe 2nd coordinate axis of the reconstruction should be formed from the \n2nd variable/column of the input data.\nthe 3rd coordinate axis of the reconstruction should be formed from the \n1st variable/column of the input data.\nthe 4th coordinate axis of the reconstruction should be formed from the \n5th variable/column of the input data.\nPositions(-1, 2) indicates a 2-dimensional reconstruction, but will not work, because    each position must refer to the index of a dynamical variable (column) of a dataset    (indexed from 1 and up).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.RectangularBinning",
    "page": "Docstrings",
    "title": "CausalityToolsBase.RectangularBinning",
    "category": "type",
    "text": "RectangularBinningScheme\n\nInstructions for creating a rectangular box partition.\n\nFields\n\nϵ::Union{Int, Float64, Vector{Int}, Vector{Float64}}: The instructions for deciding    the edge lengths of the rectangular boxes. The following ϵ are valid:\n  1. `ϵ::Int` divides each axis into `ϵ` intervals of the same size.\n\n  2. `ϵ::Float` divides each axis into intervals of size `ϵ`.\n\n  3. `ϵ::Vector{Int}` divides the i-th axis into `ϵᵢ` intervals of the same size.\n  \n  4. `ϵ::Vector{Float64}` divides the i-th axis into intervals of size `ϵᵢ`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.RectangularBinningScheme",
    "page": "Docstrings",
    "title": "CausalityToolsBase.RectangularBinningScheme",
    "category": "type",
    "text": "RectangularBinningScheme\n\nThe supertype of all rectangular binning schemes in the CausalityTools ecosystem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.RefinedTriangulationBinningMaxRadius",
    "page": "Docstrings",
    "title": "CausalityToolsBase.RefinedTriangulationBinningMaxRadius",
    "category": "type",
    "text": "RefinedTriangulationBinningMaxRadius\n\nA binning scheme for a triangulated simplex partition where some simplices have been  refined (subdivided by a shape-preserving simplex subdivision algorithm).\n\nThe maximum radius bound is applied by first doing an initial triangulation, the  splitting simplices whose radius is large until all simplices have radii less than  the resulting radius bound.\n\nFields\n\nmax_radius_frac::Float64: The maximum radius expressed as a fraction of the \n\nradius of the largest simplex of the initial triangulation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.RefinedTriangulationBinningSplitFactor",
    "page": "Docstrings",
    "title": "CausalityToolsBase.RefinedTriangulationBinningSplitFactor",
    "category": "type",
    "text": "RefinedTriangulationBinningSplitFactor\n\nA binning scheme for a triangulated simplex partition where some simplices have been  refined (subdivided by a shape-preserving simplex subdivision algorithm).\n\nThe split factor bound controls how many times each simplex of the initial triangulation  is to be split.\n\nFields\n\nsimplex_split_factor::Int: The number of times each simplex is split.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.RefinedTriangulationBinningSplitQuantile",
    "page": "Docstrings",
    "title": "CausalityToolsBase.RefinedTriangulationBinningSplitQuantile",
    "category": "type",
    "text": "RefinedTriangulationBinningSplitQuantile\n\nA binning scheme for a triangulated simplex partition where some simplices have been  refined (subdivided by a shape-preserving simplex subdivision algorithm).\n\nThe split fraction bound controls how many times each simplex of the initial triangulation  is to be split.\n\nFields\n\nsplit_quantile::Float64: All simplices with radius larger than the    split_quantile-th quantile of the radii of the simplices in initial triangulation    are split with a splitting factor of simplex_split_factor.\nsimplex_split_factor::Int: The number of times each simplex is split.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.SimplexIntersectionType",
    "page": "Docstrings",
    "title": "CausalityToolsBase.SimplexIntersectionType",
    "category": "type",
    "text": "SimplexIntersectionType\n\nAn abstract type for different types of simplex intersections.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.TriangulationBinning",
    "page": "Docstrings",
    "title": "CausalityToolsBase.TriangulationBinning",
    "category": "type",
    "text": "TriangulationBinningScheme\n\nA binning scheme for a triangulated simplex partition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.TriangulationBinningScheme",
    "page": "Docstrings",
    "title": "CausalityToolsBase.TriangulationBinningScheme",
    "category": "type",
    "text": "TriangulationBinningScheme\n\nThe supertype of all triangulation binning schemes in the CausalityTools ecosystem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.customembed",
    "page": "Docstrings",
    "title": "CausalityToolsBase.customembed",
    "category": "function",
    "text": "customembed(pts, positions::Positions, lags::Lags)\n\nDo custom state space reconstructions with customembed(pts, positions::Positions, lags::Lags).  This function acts almost as DynamicalSystems.reconstruct, but allows for more flexibility in  the ordering of dynamical variables and allows for negative lags. The positions variable  indicates which dynamical variables are mapped to which variables in the final  reconstruction, while lags indicates the lags for each of the embedding variables. \n\nExample: customembed([rand(3) for i = 1:50], Positions(1, 2, 1, 3), Lags(0, 0, 1, -2)  gives a 4-dimensional embedding with state vectors (x1(t), x2(t), x1(t + 1), x3(t - 2)). \n\nNote: customembed expects an array of state vectors, i.e. pts[k] must refer to the  kth point of the dataset, not the kth dynamical variable/column.*. To embed a vector of  time series, load DynamicalSystems and wrap the time series in a Dataset first, e.g. if  x = rand(100); y = rand(100) are two time series, then  customembed(Dataset(x, y), Positions(1, 2, 2), Lags(0, 0, 1) will create the embedding with  state vectors (x(t), y(t), y(t + 1)).\n\nPre-embedded points may be wrapped in a CustomReconstruction instance by simply calling  customembed(preembedded_pts) without any position/lag instructions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.encode",
    "page": "Docstrings",
    "title": "CausalityToolsBase.encode",
    "category": "function",
    "text": "encode(point, reference_point, edgelengths)\n\nEncode a point into its integer bin labels relative to some reference_point (always counting from lowest to highest magnitudes), given a set of box  edgelengths (one for each axis). The first bin on the positive side of  the reference point is indexed with 0, and the first bin on the negative  side of the reference point is indexed with -1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.get_edgelengths",
    "page": "Docstrings",
    "title": "CausalityToolsBase.get_edgelengths",
    "category": "function",
    "text": "get_edgelengths(pts, ϵ) -> Vector{Float}\n\nReturn the box edge length along each axis resulting from  discretizing pts on a rectangular grid specified by the  binning scheme ϵ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.get_minima",
    "page": "Docstrings",
    "title": "CausalityToolsBase.get_minima",
    "category": "function",
    "text": "get_maxima(pts) -> Vector{Float}\n\nReturn the maxima along each axis of the dataset pts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.get_minima_and_edgelengths",
    "page": "Docstrings",
    "title": "CausalityToolsBase.get_minima_and_edgelengths",
    "category": "function",
    "text": "get_minima_and_edgelengths(points, ϵ) -> (Vector{Float}, Vector{Float})\n\nFind the minima along each axis of the embedding, and computes appropriate stepsizes given ϵ, which provide instructions on how to grid the space. Assumes each point is a column vector.\n\nSpecifically, the binning procedure is controlled by the type of ϵ:\n\nϵ::Int divides each axis into ϵ intervals of the same size.\nϵ::Float divides each axis into intervals of size ϵ.\nϵ::Vector{Int} divides the i-th axis into ϵᵢ intervals of the same size.\nϵ::Vector{Float64} divides the i-th axis into intervals of size ϵᵢ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.get_minmaxes",
    "page": "Docstrings",
    "title": "CausalityToolsBase.get_minmaxes",
    "category": "function",
    "text": "get_minmaxes(pts) -> Tuple{Vector{Float}, Vector{Float}}\n\nReturn a vector of tuples containing axis-wise (minimum, maximum) values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.joint_visits",
    "page": "Docstrings",
    "title": "CausalityToolsBase.joint_visits",
    "category": "function",
    "text": "joint_visits(points, ϵ)\n\nDetermine which bins are visited by points given the rectangular binning scheme ϵ. Bins are referenced relative to the axis minimum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.marginal_visits",
    "page": "Docstrings",
    "title": "CausalityToolsBase.marginal_visits",
    "category": "function",
    "text": "marginal_visits(points, ϵ, dims)\n\nDetermine which bins are visited by points given the rectangular binning scheme ϵ, only along the desired dimensions dims. Bins are referenced  relative to the axis minimum.\n\n\n\n\n\nmarginal_visits(joint_visits, dims)\n\nGiven a set of precomputed joint visited bins, return the marginal along  dimensions dims.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.non0hist",
    "page": "Docstrings",
    "title": "ChaosTools.non0hist",
    "category": "function",
    "text": "non0hist(bin_visits)\n\nReturn the unordered histogram (vistitation frequency) over the array of bin_visits, which is a vector containing bin encodings.\n\nThis method extends ChaosTools.non0hist.\n\n\n\n\n\nnon0hist(points, ϵ, dims)\n\nDetermine which bins are visited by points given the rectangular binning scheme ϵ, considering only the marginal along dimensions dims. Bins are referenced  relative to the axis minimum.\n\nReturns the unordered histogram (vistitation frequency) over the array of bin visits.\n\nThis method extends ChaosTools.non0hist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.optimal_delay",
    "page": "Docstrings",
    "title": "CausalityToolsBase.optimal_delay",
    "category": "function",
    "text": "optimal_delay(v; method = \"mi_min\")\n\nEstimate the optimal embedding delay for v using the provided method.  See the documentation for DelayEmbeddings.estimate_delay for a list of  available methods.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CausalityToolsBase.optimal_dimension",
    "page": "Docstrings",
    "title": "CausalityToolsBase.optimal_dimension",
    "category": "function",
    "text": "optimal_dimension(v, τ; dims = 1:8; method = \"fnn\"; kwargs...)\n\nEstimate the optimal embedding dimension for v.\n\nArguments\n\nv: The data series for which to estimate the embedding dimension.\nτ: The embedding lag.\ndims: Dimensions to probe for the optimal dimension.\n\nKeyword arguments\n\nmethod: Either \"fnn\" (Kennel\'s false nearest neighbors method),   \"afnn\" (Cao\'s average false nearest neighbors method) or \"f1nn\" (Krakovská\'s   false first nearest neighbors method). See the source code for   DelayEmbeddings.estimate_dimension for more details.\nrtol: Tolerance rtol in Kennel\'s algorithms. See DelayEmbeddings.fnn    source code for more details.\natol: Tolerance rtol in Kennel\'s algorithms. See DelayEmbeddings.fnn   source code for more details.\n\n\n\n\n\noptimal_dimension(v; dims = 1:8,\n    method_dimension = \"fnn\", method_delay = \"first_min\")\n\nEstimate the optimal embedding dimension for v by first estimating the optimal lag, then using that lag to estimate the dimension.\n\nArguments\n\nv: The data series for which to estimate the embedding dimension.\ndims: The dimensions to try\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CausalityToolsBase.ApproximateIntersectionCausalityToolsBase.BinningSchemeCausalityToolsBase.CausalityToolsBaseCausalityToolsBase.CustomReconstructionCausalityToolsBase.ExactIntersectionCausalityToolsBase.LagsCausalityToolsBase.PositionsCausalityToolsBase.ReconstructionParametersCausalityToolsBase.RectangularBinningCausalityToolsBase.RectangularBinningSchemeCausalityToolsBase.RefinedTriangulationBinningMaxRadiusCausalityToolsBase.RefinedTriangulationBinningSplitFactorCausalityToolsBase.RefinedTriangulationBinningSplitQuantileCausalityToolsBase.SimplexIntersectionTypeCausalityToolsBase.TriangulationBinningCausalityToolsBase.TriangulationBinningSchemeCausalityToolsBase.customembedCausalityToolsBase.encodeCausalityToolsBase.evalCausalityToolsBase.fill_embedding_pts!CausalityToolsBase.get_edgelengthsCausalityToolsBase.get_maximaCausalityToolsBase.get_minimaCausalityToolsBase.get_minima_and_edgelengthsCausalityToolsBase.get_minmaxesCausalityToolsBase.includeCausalityToolsBase.joint_visitsCausalityToolsBase.marginal_visitsCausalityToolsBase.non0histCausalityToolsBase.optimal_delayCausalityToolsBase.optimal_dimensionCausalityToolsBase.verify_valid_positions!"
},

]}
