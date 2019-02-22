var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: DynamicalSystems.jl logo: The Double Pendulum)Repository for predicting timeseries using methods from nonlinear dynamics and timeseries analysis. It is part of the library DynamicalSystems.jl.Documentation Travis AppVeyor Gitter\n(Image: ) (Image: Build Status) (Image: Build status) (Image: Gitter)All exported names have detailed documentation strings!"
},

{
    "location": "#Spatio-Temporal-Timeseries-Prediction-1",
    "page": "Readme",
    "title": "Spatio-Temporal Timeseries Prediction",
    "category": "section",
    "text": ""
},

{
    "location": "#Barkley-1",
    "page": "Readme",
    "title": "Barkley",
    "category": "section",
    "text": "(Image: Barkley prediction)The example performs a temporal prediction of the Barkley model. A simulation of 1000 time steps is given to temporalprediction, using the field v. The function attemps to predict for 200 time steps. The animated figure shows the true evolution of the model, the prediction and the error of the prediction."
},

{
    "location": "#Kuramoto-Sivashinsky-1",
    "page": "Readme",
    "title": "Kuramoto-Sivashinsky",
    "category": "section",
    "text": "(Image: Kuramoto-Sivashinsky Prediction)This example performs a temporal prediction of the Kuramoto-Sivashinsky model. It is a one-dimensional system with the spatial dimension shown on the x-axis and its temporal evolution along the y-axis. The algorithm makes iterative predictions into the future that stay similar to the true evolution for a while but eventually diverge."
},

{
    "location": "autodocs/#TimeseriesPrediction.AbstractBoundaryCondition",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.AbstractBoundaryCondition",
    "category": "type",
    "text": "AbstractBoundaryCondition\n\nSuper-type of boundary conditions for SpatioTemporalEmbedding. Use subtypes(AbstractBoundaryCondition) for available methods.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.AbstractLocalModel",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.AbstractLocalModel",
    "category": "type",
    "text": "AbstractLocalModel\n\nSupertype of methods for making a prediction of a query point q using local models, following the methods of [1]. Concrete subtypes are AverageLocalModel and LinearLocalModel.\n\nAll models weight neighbors with a chosen function, so that distant neighbors have smaller impact on the prediction and so that the interpolation is smooth. The default weighting function we use is\n\nbeginaligned\nω_i(d_id_max) = left 1- left(fracd_id_maxright)^2right^4\nendaligned\n\nwith d_i = x_nni -q_2 being the distance of each neighbor from the query point.\n\nYou can also provide your own function or give ω_safe(d, dmax) = dmax > 0 ? (1.1 - (d/dmax)^2)^4 : 1.0 for a safe version of ω that takes into acount edge cases. Finally you can also give nothing in place of ω. In that case no weighting is done and direct average of neighbors is returned.\n\nAverage Local Model\n\nAverageLocalModel(ω)\n\nThe prediction is simply the weighted average of the images y_nn i of the neighbors x_nn i of the query point q, weighting using given function ω\n\nbeginaligned\ny_pred = fracsumomega_i y_nnisumomega_i\nendaligned\n\nLinear Local Model\n\nLinearLocalModel([ω ], μ::Real=2.])\nLinearLocalModel([ω ], s_min::Real, s_max::Real)\n\nThe prediction is a weighted linear regression over the neighbors x_nn i of the query and their images y_nni as shown in [1].\n\nGiving either μ or s_min and s_max determines which type of regularization is applied.\n\nμ : Ridge Regression\nbeginaligned\nf(sigma) = fracsigma^2mu^2 + sigma^2\nendaligned\ns_min, s_max : Soft Threshold\nbeginaligned\nf(sigma) = begincases 0  sigma  s_min\nleft(1 - left( fracs_max-sigmas_max-s_minright)^2 right)^2\ns_min leq sigma leq s_max \n1  sigma  s_maxendcases\nendaligned\n\nReferences\n\n[1] : D. Engster & U. Parlitz, Handbook of Time Series Analysis Ch. 1, VCH-Wiley (2006)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.AbstractSpatialEmbedding",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.AbstractSpatialEmbedding",
    "category": "type",
    "text": "AbstractSpatialEmbedding <: AbstractEmbedding\n\nSuper-type of spatiotemporal embedding methods. Valid subtypes:\n\nSpatioTemporalEmbedding\nPCAEmbedding\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.AverageLocalModel",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.AverageLocalModel",
    "category": "type",
    "text": "AverageLocalModel(ω::Function = ω_unsafe)\n\nSee AbstractLocalModel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.ConstantBoundary",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.ConstantBoundary",
    "category": "type",
    "text": "ConstantBoundary(c) <: AbstractBoundaryCondition\n\nConstant boundary condition type. Enforces constant boundary conditions when passed to SpatioTemporalEmbedding by filling missing out-of-bounds values in the reconstruction with parameter c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.LinearLocalModel",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.LinearLocalModel",
    "category": "type",
    "text": "LinearLocalModel([ω ], μ::Real=2.])\nLinearLocalModel([ω ], s_min::Real, s_max::Real)\n\nSee AbstractLocalModel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.MSEp",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.MSEp",
    "category": "function",
    "text": "MSEp(R::AbstractDataset{D,T}, R_test, p; method, ntype, stepsize) -> error\n\nCompute mean squared error of iterated predictions of length p using test set R_test.\n\nDescription\n\nThis error measure takes in a prediction model consisting of R, method, ntype and stepsize and evaluates its performance. The test set R_test is a delay reconstruction with the same delay τ and dimension D as R. For each subset of R_test with length p it calls localmodel_tsp. The model error is then defined as\n\nbeginaligned\nMSE_p = frac1pT_refsum_tin T_refsum_i=1^p left(y_t+i\n- y_predt+i right)^2\nendaligned\n\nwhere T_ref is the number of subsets of R_test used.\n\nReferences\n\nSee localmodel_tsp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.PCAEmbedding",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.PCAEmbedding",
    "category": "type",
    "text": "PCAEmbedding(s, em::SpatioTemporalEmbedding; kwargs...) → embedding\n\nA spatio temporal delay coordinates structure with Principal Component Analysis as a means of dimension reduction, embedding can be used as a functor:\n\nembedding(rvec, s, t, α)\n\nwhich operates inplace on rvec and reconstructs vector from spatial time series s at timestep t and cartesian index α.\n\nTo instantiate this embedding, give the data to be reconstructed s as well as an instance of SpatioTemporalEmbedding to PCAEmbedding.\n\nKeyword Arguments\n\npratio = 0.99 : Ratio of variances that needs to be preserved in low-dimensional PCA-reconstruction.\nmaxoutdim = 25: Upper limit for output dimension. May break pratio criterion.\nevery_t = 1 : Speed up computation by only using every n-th point in time.\nevery_α = 1 : Speed up computation further by only using every n-th point in space (linear indexing).\n\nTo set the output dimension to a certain value X, pass pratio=1, maxoutdim=X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.PeriodicBoundary",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.PeriodicBoundary",
    "category": "type",
    "text": "PeriodicBoundary <: AbstractBoundaryCondition\n\nPeriodic boundary condition struct. Enforces periodic boundary conditions when passed to SpatioTemporalEmbedding in the reconstruction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.Region",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.Region",
    "category": "type",
    "text": "Region{Φ}\n\nInternal struct for efficiently keeping track of region far from boundaries of field. Used to speed up reconstruction process.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.SpatioTemporalEmbedding",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.SpatioTemporalEmbedding",
    "category": "type",
    "text": "SpatioTemporalEmbedding{T,Φ,BC,X} → embedding\n\nA spatio temporal delay coordinates structure to be used as a functor. Applies to data of Φ spatial dimensions and gives an embedding of dimensionality X.\n\nembedding(rvec, s, t, α)\n\nOperates inplace on rvec (of length X) and reconstructs vector from spatial timeseries s at timestep t and cartesian index α. Note that there are no bounds checks for t.\n\nIt is assumed that s is a Vector{<:AbstractArray{T,Φ}}.\n\nConstructors\n\nThere are some convenience constructors that return intuitive embeddings here:\n\ncubic_shell_embedding\nlight_cone_embedding\n\nThe \"main\" constructor is\n\nSpatioTemporalEmbedding{X}(τ, β, bc, fsize)\n\nwhich allows full control over the spatio-temporal embedding.\n\nΧ == length(τ) == length(β) : dimensionality of resulting reconstructed space.\nτ::Vector{Int} = Vector of temporal delays for each entry of the reconstructed space (sorted in ascending order).\nβ::Vector{CartesianIndex{Φ}} = vector of relative indices of spatial delays for each entry of the reconstructed space.\nbc::BC : boundary condition.\nfsize::NTuple{Φ, Int} : Size of each state in the timeseries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.TimeseriesPrediction",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.TimeseriesPrediction",
    "category": "module",
    "text": "Prediction of timeseries using methods of nonlinear dynamics and timeseries analysis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.crossprediction",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.crossprediction",
    "category": "function",
    "text": "crossprediction(source_train, target_train, source_pred,\n                em::AbstractSpatialEmbedding; kwargs...)\n\nPerform a spatio-temporal timeseries cross-prediction for target from source, using local weighted modeling [1]. This can be used for example when there are coupled spatial fields and one is used to predict the other. It is assumed that source_train, target_train, source_pred are all of the same type, AbstractVector{<:AbstractArray{T, Φ}}.\n\nThe spatio temporal delay embedding process is defined by em. See AbstractSpatialEmbedding for available methods and interfaces.\n\nKeyword Arguments\n\nttype = KDTree : Type/Constructor of tree structure. So far only tested with KDTree.\nmethod = AverageLocalModel(ω_safe) : Subtype of AbstractLocalModel.\nntype = FixedMassNeighborhood(3) : Subtype of AbstractNeighborhood.\nprogress = true : To print progress done.\n\nDescription\n\nThe reconstructed state of source_train[t][i,j,...] is associated with the output value target_train[t][i,j,...]. This establishes a \"connection\" between target and source. Taking a reconstructed state of source_pred as query point, the function finds its neighbors in the reconstructed space of source_train using neighborhood ntype. Then, the neighbor indices are used to make a prediction for the corresponding value of the target, using the established \"connection\" between fields.\n\nAdditional Interfaces\n\nTo save computation time in the case of repeated predictions with the same training set and embedding parameters we provide an additional interface that allows the user to provide an existing reconstruction and tree structure.\n\nR = reconstruct(train_in, em)\ntree = ttype(R)\nparams = PredictionParams(em, method, ntype, ttype)\nsol = crossprediction(params, train_out, pred_in, R, tree; progress=true)\n\nwhere params is an internal container with all relevant parameters.\n\nPerformance Notes\n\nBe careful when choosing embedding parameters as memory usage and computation time depend strongly on the resulting embedding dimension.\n\nReferences\n\n[1] : U. Parlitz & C. Merkwirth, Phys. Rev. Lett. 84, pp 1890 (2000)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.cubic_shell_embedding",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.cubic_shell_embedding",
    "category": "function",
    "text": "cubic_shell_embedding(s, D, τ, B, k, bc) → embedding\n\nCreate a SpatioTemporalEmbedding instance that includes spatial neighbors in hypercubic shells. The embedding is to be used with data from s.\n\nDescription\n\nPoints are participating in the embedding by forming hypercubic shells around the current point. The total shells formed are B. The points on the shells have spatial distance k ≥ 1 (distance in indices, like a cityblock metric). k = 1 means that all points of the shell participate. The points of the hypercubic grid can be separated by k ≥ 1 points apart (i.e. dropping k-1 in-between points). In short, in each spatial dimension of the system the cartesian offset indices are -B*k : k : k*B.\n\nD is the number of temporal steps in the past to be included in the embedding, where each step in the past has additional delay time τ::Int. D=0 corresponds to using only the present. Notice that all embedded time frames have the same spatial structure, in contrast to light_cone_embedding.\n\nAs an example, consider one of the D embedded frames (all are the same) of a system with 2 spatial dimensions (□ = current point, (included by definition in the embedding), n = included points in the embedding coming from n-th shell, . = points not included in the embedding)\n\n      B = 2,  k = 1        |        B = 1,  k = 2        |        B = 2,  k = 2\n                           |                             |\n.  .  .  .  .  .  .  .  .  |  .  .  .  .  .  .  .  .  .  |  2  .  2  .  2  .  2  .  2\n.  .  .  .  .  .  .  .  .  |  .  .  .  .  .  .  .  .  .  |  .  .  .  .  .  .  .  .  .\n.  .  2  2  2  2  2  .  .  |  .  .  1  .  1  .  1  .  .  |  2  .  1  .  1  .  1  .  2\n.  .  2  1  1  1  2  .  .  |  .  .  .  .  .  .  .  .  .  |  .  .  .  .  .  .  .  .  .\n.  .  2  1  □  1  2  .  .  |  .  .  1  .  □  .  1  .  .  |  2  .  1  .  □  .  1  .  2\n.  .  2  1  1  1  2  .  .  |  .  .  .  .  .  .  .  .  .  |  .  .  .  .  .  .  .  .  .\n.  .  2  2  2  2  2  .  .  |  .  .  1  .  1  .  1  .  .  |  2  .  1  .  1  .  1  .  2\n.  .  .  .  .  .  .  .  .  |  .  .  .  .  .  .  .  .  .  |  .  .  .  .  .  .  .  .  .\n.  .  .  .  .  .  .  .  .  |  .  .  .  .  .  .  .  .  .  |  2  .  2  .  2  .  2  .  2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.indices_within_sphere",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.indices_within_sphere",
    "category": "function",
    "text": "indices_within_sphere(r, Φ) → β\n\nReturn all cartesian indices within a hypersphere or radius r and dimension Φ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.light_cone_embedding",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.light_cone_embedding",
    "category": "function",
    "text": "light_cone_embedding(s, D, τ, r₀, c, bc) → embedding\n\nCreate a SpatioTemporalEmbedding instance that includes spatial and temporal neighbors of a point based on the notion of a light cone.\n\nThe embedding is to be used with data from s.\n\nDescription\n\nInformation does not travel instantly but with some finite speed c ≥ 0.0. This constructor creates a cone-like embedding including all points in space and time, whose value can influence a prediction based on the information speed c. D is the number of temporal steps in the past to be included in the embedding, where each step in the past has additional delay time τ::Int. D=0 corresponds to using only the present. r₀ is the initial radius at the top of the cone, i.e. the radius of influence at the present. bc is the boundary condition.\n\nThe radius of the light cone evolves as: r = i*τ*c + r₀ for each step i ∈ 0:D.\n\nAs an example, in a one-dimensional system with D = 1, τ = 2, r₀ = 1, the embedding looks like (□ = current point (included by definition in the embedding), o point to be predicted using temporalprediction, x = points included in the embedding, . = points not included in the embedding)\n\ntime  | c = 1.0               | c = 2.0               | c = 0.0\n\nn + 1 | ..........o.......... | ..........o.......... | ..........o..........\nn     | .........x□x......... | .........x□x......... | .........x□x.........\nn - 1 | ..................... | ..................... | .....................\nn - τ | .......xxxxxxx....... | .....xxxxxxxxxx...... | .........xxx.........\n\nBesides this example, in the official documentation we show a function explain_light_cone which produces a plot of the light cone for 2 spatial dimensions (great for understanding!).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.localmodel_cp",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.localmodel_cp",
    "category": "function",
    "text": "localmodel_cp(source_pool, target_pool, source_pred,  D, τ; kwargs...)\n\nPerform a cross prediction from  source to target, using local weighted modeling [1]. source_pred is the input for the prediction and source_pool and target_pool are used as pooling/training data for the predictions. The function always returns an object of the same type as target_pool, which can be either a timeseries (vector) or an AbstractDataset (trajectory).\n\nKeyword Arguments\n\nmethod = AverageLocalModel(ω_unsafe) : Subtype of AbstractLocalModel.\nntype = FixedMassNeighborhood(2) : Subtype of AbstractNeighborhood.\nstepsize = 1 : Prediction step size.\n\nInstead of passing D & τ for reconstruction one may also give existing Datasets as source_pool and source_pred. In this case an additional keyword argument y_idx_shift::Int=0 may be necessary to account for the index shift introduced in the reconstruction process.\n\nDescription\n\nGiven a query point, the function finds its neighbors using neighborhood ntype. Then, the neighbors xnn and their images ynn are used to make a prediction for the image of the query point, using the provided method.\n\nReferences\n\n[1] : D. Engster & U. Parlitz, Handbook of Time Series Analysis Ch. 1, VCH-Wiley (2006)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.localmodel_tsp",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.localmodel_tsp",
    "category": "function",
    "text": "localmodel_tsp(s, D::Int, τ, p::Int; method, ntype, stepsize)\nlocalmodel_tsp(s, p::Int; method, ntype, stepsize)\n\nPerform a timeseries prediction for p points, using local weighted modeling [1]. The function always returns an object of the same type as s, which can be either a timeseries (vector) or an AbstractDataset (trajectory), and the returned data always contains the final point of s as starting point. This means that the returned data has length of p + 1.\n\nIf given (s, D, τ), it first calls reconstruct on s with dimension D and delay τ. If given only s then no reconstruction is done.\n\nKeyword Arguments\n\nmethod = AverageLocalModel(ω_unsafe) : Subtype of AbstractLocalModel.\nntype = FixedMassNeighborhood(2) : Subtype of AbstractNeighborhood.\nstepsize = 1 : Prediction step size.\n\nDescription\n\nGiven a query point, the function finds its neighbors using neighborhood ntype. Then, the neighbors xnn and their images ynn are used to make a prediction for the future of the query point, using the provided method. The images ynn are the points xnn shifted by stepsize into the future.\n\nThe algorithm is applied iteratively until a prediction of length p has been created, starting with the query point to be the last point of the timeseries.\n\nReferences\n\n[1] : D. Engster & U. Parlitz, Handbook of Time Series Analysis Ch. 1, VCH-Wiley (2006)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayEmbeddings.reconstruct",
    "page": "Docstrings",
    "title": "DelayEmbeddings.reconstruct",
    "category": "function",
    "text": "reconstruct(s::AbstractArray{<:AbstractArray{T,Φ}}, em)\n\nReconstruct the spatial timeseries s represented by a Vector of AbstractArray states using the embedding struct em of type AbstractSpatialEmbedding.\n\nReturns the reconstruction in the form of a Dataset where each row is a reconstructed state and they are ordered first through linear indexing into each state and then incrementing in time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeseriesPrediction.temporalprediction",
    "page": "Docstrings",
    "title": "TimeseriesPrediction.temporalprediction",
    "category": "function",
    "text": "temporalprediction(U, em::AbstractSpatialEmbedding, tsteps; kwargs...)\n\nPerform a spatio-temporal time series prediction for tsteps iterations, using local weighted modeling [1] give a time series of the form U::AbstractVector{<:AbstractArray{T, Φ}}.\n\nThe returned data always contains the final state of U as starting point (total returned length is tsteps+1). The reconstruction process is defined by em. For available methods and interfaces see AbstractSpatialEmbedding.\n\nKeyword Arguments\n\nttype = KDTree : Type/Constructor of tree structure. So far only tested with KDTree.\nmethod = AverageLocalModel(ω_safe) : Subtype of AbstractLocalModel.\nntype = FixedMassNeighborhood(3) : Subtype of AbstractNeighborhood.\ninitial_ts = U : Initial states for prediction (same type as U).  Must have at least as many states as the maximum delay time used. Defaults to the training set U.\nprogress = true : To print progress done.\n\nDescription\n\nThis method works similarly to localmodel_tsp, by expanding the concept of delay embedding to spatially extended systems. Instead of reconstructing complete states of the system, local states are used. See AbstractSpatialEmbedding for details on the embedding. Predictions are then performed frame by frame and point py point. Once all values for a new frame are found, the frame is added to the end of the timeseries and used to generate new prediction queries for the next time step.\n\nPerformance Notes\n\nBe careful when choosing embedding parameters as memory usage and computation time depend strongly on the resulting embedding dimension.\n\nReferences\n\n[1] : U. Parlitz & C. Merkwirth, Phys. Rev. Lett. 84, pp 1890 (2000)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TimeseriesPrediction.@SMatrixTimeseriesPrediction.@SVectorTimeseriesPrediction.@pack_PredictionParametersTimeseriesPrediction.@pack_PredictionParameters!TimeseriesPrediction.@unpack_PredictionParametersTimeseriesPrediction.ASETimeseriesPrediction.AbstractBoundaryConditionTimeseriesPrediction.AbstractDatasetTimeseriesPrediction.AbstractEmbeddingTimeseriesPrediction.AbstractLocalModelTimeseriesPrediction.AbstractNeighborhoodTimeseriesPrediction.AbstractSpatialEmbeddingTimeseriesPrediction.AverageLocalModelTimeseriesPrediction.CDS_KWARGSTimeseriesPrediction.ChebyshevTimeseriesPrediction.CityblockTimeseriesPrediction.ConstantBoundaryTimeseriesPrediction.ContinuousDynamicalSystemTimeseriesPrediction.DatasetTimeseriesPrediction.DelayEmbeddingTimeseriesPrediction.DelayEmbeddingsTimeseriesPrediction.DiscreteDynamicalSystemTimeseriesPrediction.DynamicalSystemTimeseriesPrediction.DynamicalSystemsBaseTimeseriesPrediction.EuclideanTimeseriesPrediction.FixedMassNeighborhoodTimeseriesPrediction.FixedSizeNeighborhoodTimeseriesPrediction.KDTreeTimeseriesPrediction.LinearLocalModelTimeseriesPrediction.MSE1TimeseriesPrediction.MSEpTimeseriesPrediction.MTDelayEmbeddingTimeseriesPrediction.PCAEmbeddingTimeseriesPrediction.PeriodicBoundaryTimeseriesPrediction.PredictionParametersTimeseriesPrediction.RegionTimeseriesPrediction.SMatrixTimeseriesPrediction.STETimeseriesPrediction.SVectorTimeseriesPrediction.SpatioTemporalEmbeddingTimeseriesPrediction.SystemsTimeseriesPrediction.TimeseriesPredictionTimeseriesPrediction._localmodel_tspTimeseriesPrediction.autocorTimeseriesPrediction.columnsTimeseriesPrediction.compute_pcaTimeseriesPrediction.convert_idxTimeseriesPrediction.crosspredictionTimeseriesPrediction.cubic_shell_embeddingTimeseriesPrediction.cut_off_beginning!TimeseriesPrediction.dimensionTimeseriesPrediction.embedTimeseriesPrediction.estimate_delayTimeseriesPrediction.estimate_dimensionTimeseriesPrediction.evalTimeseriesPrediction.exponential_decay_fitTimeseriesPrediction.gen_queriesTimeseriesPrediction.get_deviationsTimeseriesPrediction.get_num_ptTimeseriesPrediction.get_stateTimeseriesPrediction.get_usable_idxsTimeseriesPrediction.get_τmaxTimeseriesPrediction.includeTimeseriesPrediction.indices_within_sphereTimeseriesPrediction.inner_regionTimeseriesPrediction.integratorTimeseriesPrediction.jacobianTimeseriesPrediction.light_cone_embeddingTimeseriesPrediction.localmodel_cpTimeseriesPrediction.localmodel_tspTimeseriesPrediction.maximaTimeseriesPrediction.mcnames_regTimeseriesPrediction.min_pairwise_distanceTimeseriesPrediction.minimaTimeseriesPrediction.minmaximaTimeseriesPrediction.mutualinformationTimeseriesPrediction.neighborhoodTimeseriesPrediction.neighborhood_and_distancesTimeseriesPrediction.orthonormalTimeseriesPrediction.outdimTimeseriesPrediction.parallel_integratorTimeseriesPrediction.project_insideTimeseriesPrediction.reconstructTimeseriesPrediction.reinit!TimeseriesPrediction.ridge_regTimeseriesPrediction.set_deviations!TimeseriesPrediction.set_parameter!TimeseriesPrediction.set_state!TimeseriesPrediction.step!TimeseriesPrediction.stochastic_indicatorTimeseriesPrediction.tangent_integratorTimeseriesPrediction.temporalpredictionTimeseriesPrediction.trajectoryTimeseriesPrediction.working_tsTimeseriesPrediction.ω_safeTimeseriesPrediction.ω_unsafe"
},

]}
