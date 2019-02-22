var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#StateSpaceReconstruction.jl-documentation-1",
    "page": "Overview",
    "title": "StateSpaceReconstruction.jl documentation",
    "category": "section",
    "text": "This package provides necessarily functionality for the parts of the CausalityTools.jl ecosystem depending on state space reconstruction (SSR), or embeddings."
},

{
    "location": "#Features-1",
    "page": "Overview",
    "title": "Features",
    "category": "section",
    "text": "Generic embeddings of time series (fully customizable lags and positions).\nSSR discretization (rectangular binning, simplex triangulations)"
},

{
    "location": "embedding/#",
    "page": "Embedding",
    "title": "Embedding",
    "category": "page",
    "text": ""
},

{
    "location": "embedding/#Reconstructions/embeddings-1",
    "page": "Embedding",
    "title": "Reconstructions/embeddings",
    "category": "section",
    "text": ""
},

{
    "location": "embedding/#What-are-embeddings?-1",
    "page": "Embedding",
    "title": "What are embeddings?",
    "category": "section",
    "text": "If you haven\'t heard about state space reconstructions (SSR), or embeddings, visit the Wikipedia page on Takens\' theorem."
},

{
    "location": "embedding/#Fully-customizable-embedding-1",
    "page": "Embedding",
    "title": "Fully customizable embedding",
    "category": "section",
    "text": "Positive, zero and negative lags are possible. Negative lags are takes as \"past affects future\", and positive lags  as \"future affects past\"."
},

{
    "location": "embedding/#Simple-examples-1",
    "page": "Embedding",
    "title": "Simple examples",
    "category": "section",
    "text": "For those familiar with SSR, performing reconstructions is easy as pie. The constructors accept arrays, vectors of vectors, vectors of SVector, SArray, and Dataset instances from DynamicalSystems.jl.The constructors accept both column-major arrays (points are column vectors) and row-major arrays (points are rows) arrays. Upon embedding, they are all converted to column-major format.First, some trivial examples.using StateSpaceReconstruction, StaticArrays, DynamicalSystems\nusing Plots; pgfplots() # hideSimulate a three-dimensional orbit consisting of 100 points. We\'ll represent the orbit as a regular array, as an SMatrix and as a Dataset.A = rand(3, 100)\nS = SMatrix{3,100}(A)\nD = Dataset(A)Embed the raw orbits, performing no coordinate lagging.E_A = embed(A)\nscatter3d(E_A, legend = false)# hide\nsavefig(\"embed1.svg\"); nothing # hide(Image: )Dataset instances from DynamicalSystems.jl can also be embedded.E_D = embed(D)\nscatter3d(E_D, legend = false) # hide\nsavefig(\"embed2.svg\"); nothing # hide(Image: )Instances of SMatrix work just as well.E_S = embed(S)\nscatter3d(E_S, legend = false) # hide\nsavefig(\"embed3.svg\"); nothing # hide(Image: )Verify that all three embeddings are the same, regardless of which data type we\'re starting from.E_A == E_D == E_S"
},

{
    "location": "embedding/#Full-control-over-the-embedding-1",
    "page": "Embedding",
    "title": "Full control over the embedding",
    "category": "section",
    "text": "One can also specify exactly how the variables of the data should appear in the final embedding, and which embedding lag should be used for each variable. Each variable of the data can appear multiple times in the final embedding with different lags.using StateSpaceReconstruction, StaticArrays, DynamicalSystems\nusing Plots; pgfplots() # hideusing StateSpaceReconstruction, StaticArrays, DynamicalSystems\nA = rand(3, 100)\nS = SMatrix{3,100}(A)\nD = Dataset(A)Embed the orbits, this time using coordinate lagging. Now, let x, y and z be variables 1, 2 and 3 of the dataset A.  We\'ll create embeddings of the form E = (x(t+1) x(t) y(t) y(t-1) z(t)). This means we will have to specify which variable will appear as which variables in the final embedding.which_pos = [1, 1, 2, 2, 3]\nembed_lags = [1, 0, 0, -1, 1]Using these positions and lags, we\'ll get 5-dimensional embeddings. In the plots below, the first three coordinate axes are plotted.E_A = embed(A, which_pos, embed_lags)\nscatter3d(E_A, legend = false) # hide\nsavefig(\"embed1b.svg\"); nothing # hide(Image: )E_D = embed(D, which_pos, embed_lags)\nscatter3d(E_D, legend = false) # hide\nsavefig(\"embed2b.svg\"); nothing # hide(Image: )E_S = embed(S, which_pos, embed_lags)\nscatter3d(E_S, legend = false) # hide\nsavefig(\"embed3b.svg\"); nothing # hide(Image: )Verify that all three embeddings are the same, regardless of which data type we\'re starting from.E_A == E_D == E_S"
},

{
    "location": "partition/binningtypes/#",
    "page": "Types of partitions",
    "title": "Types of partitions",
    "category": "page",
    "text": ""
},

{
    "location": "partition/binningtypes/#Binning-schemes-1",
    "page": "Types of partitions",
    "title": "Binning schemes",
    "category": "section",
    "text": "Currently, there are four types of rectangular partition schemes available, controlled by the parameter ϵ:ϵ::Int divides each axis into ϵ intervals of the same size.\nϵ::Float divides each axis into intervals of size ϵ.\nϵ::Vector{Int} divides the i-th axis into ϵᵢ intervals of the same size.\nϵ::Vector{Float64} divides the i-th axis into intervals of size ϵᵢ.There are two ways of representing a binning: either by encoding each bin by integers (see Coordinate representation), or by referencing them by the bin origin coordinates (see Integer encoding representation)."
},

{
    "location": "partition/binningtypes/#Visualizing-partitions-1",
    "page": "Types of partitions",
    "title": "Visualizing partitions",
    "category": "section",
    "text": "To visualize how the different partition schemes work, you can feed the plot_partition  a binning scheme ϵ along with a three-dimensional set of points. Of course, the partitions also work for data of any dimension.using StateSpaceReconstruction, Plots\npgfplots()A = rand(3, 100)Rectangular partition constructed by dividing the i-th axis interval into an integer number, ϵᵢ, of equal-length intervals.ϵ = [1, 2, 3]\nplot_partition(A, ϵ);\nsavefig(\"partition1.svg\"); nothing # hide(Image: )Rectangular partition constructed by dividing the i-th axis into intervals of length ϵᵢ.ϵ = [0.1, 0.3, 0.5]\nplot_partition(A, ϵ);\nsavefig(\"partition2.svg\"); nothing # hide(Image: )Rectangular partition constructed by dividing all axes into intervals of length ϵ.ϵ = 0.3\nplot_partition(A, ϵ);\nsavefig(\"partition3.svg\"); nothing # hide(Image: )Rectangular bins, divide all axes into ϵ equal-length intervals.ϵ = 8\nplot_partition(A, ϵ);\nsavefig(\"partition4.svg\"); nothing # hide(Image: )"
},

{
    "location": "partition/binningtypes/#Visualizing-partitions-of-embeddings-1",
    "page": "Types of partitions",
    "title": "Visualizing partitions of embeddings",
    "category": "section",
    "text": "The same works with embeddings.using StateSpaceReconstruction, Plots\npgfplots()A = rand(3, 100)\nE = embed(A, [1, 2, 3], [1, 0, -5])Rectangular partition constructed by dividing the i-th axis of the embedding interval into an integer number, ϵᵢ, of equal-length intervals.ϵ = [1, 2, 3]\nplot_partition(A, ϵ);\nsavefig(\"partition1b.svg\"); nothing # hide(Image: )Rectangular partition constructed by dividing the i-th axis of the embedding into intervals of length ϵᵢ.ϵ = [0.1, 0.3, 0.5]\nplot_partition(A, ϵ);\nsavefig(\"partition2b.svg\"); nothing # hide(Image: )Rectangular partition constructed by dividing all axes of the embedding into intervals of length ϵ.ϵ = 0.3\nplot_partition(A, ϵ);\nsavefig(\"partition3b.svg\"); nothing # hide(Image: )Rectangular bins, divide all axes of the embedding into ϵ equal-length intervals.ϵ = 8\nplot_partition(A, ϵ);\nsavefig(\"partition4b.svg\"); nothing # hide(Image: )"
},

{
    "location": "partition/binningtypes/#Customizing-visualizations-1",
    "page": "Types of partitions",
    "title": "Customizing visualizations",
    "category": "section",
    "text": "plot_partition"
},

{
    "location": "partition/minima_stepsizes/#StateSpaceReconstruction.RectangularPartitions.minima_and_stepsizes-Tuple{Any,Any}",
    "page": "Finding axis minima and step sizes",
    "title": "StateSpaceReconstruction.RectangularPartitions.minima_and_stepsizes",
    "category": "method",
    "text": "minima_and_stepsizes(points, ϵ) -> (Vector{Float}, Vector{Float})\n\nFind the minima along each axis of the embedding, and computes appropriate stepsizes given ϵ, which provide instructions on how to grid the space. Assumes each point is a column vector.\n\nSpecifically, the binning procedure is controlled by the type of ϵ:\n\nϵ::Int divides each axis into ϵ intervals of the same size.\nϵ::Float divides each axis into intervals of size ϵ.\nϵ::Vector{Int} divides the i-th axis into ϵᵢ intervals of the same size.\nϵ::Vector{Float64} divides the i-th axis into intervals of size ϵᵢ.\n\n\n\n\n\n"
},

{
    "location": "partition/minima_stepsizes/#",
    "page": "Finding axis minima and step sizes",
    "title": "Finding axis minima and step sizes",
    "category": "page",
    "text": "To assign boxes to points, we need a reference point. Throughout this package, the minima along each coordinate axis of the space is used as the reference point.The following function takes a set of points and a binning scheme ϵ, and returns what the minima along each coordinate axis is, along with the step sizes along each axis resulting from the binning scheme provided by ϵ.minima_and_stepsizes(points, ϵ)"
},

{
    "location": "partition/coordinate_representation/#",
    "page": "Coordinate representation",
    "title": "Coordinate representation",
    "category": "page",
    "text": ""
},

{
    "location": "partition/coordinate_representation/#StateSpaceReconstruction.RectangularPartitions.assign_coordinate_labels-Tuple{Any,Any}",
    "page": "Coordinate representation",
    "title": "StateSpaceReconstruction.RectangularPartitions.assign_coordinate_labels",
    "category": "method",
    "text": "assign_coordinate_labels(points, ϵ) -> Array{Float64, 2}\n\nConsider a rectangular grid specified by ϵ. Assume the bin labels to the provided points by checking which bins each point fall into. Each points is given a label which is the coordinates of the origin of the bin it falls into.\n\nTogether with ϵ, the coordinates of the origins of the bins provide complete information about a coarse graining that covers all visited states of the system (when points represent the orbit).\n\nThe following ϵ will work:\n\nϵ::Int divide each axis into ϵ intervals of the same size.\nϵ::Float divide each axis into intervals of size ϵ.\nϵ::Vector{Int} divide the i-th axis into ϵᵢ intervals of the same size.\nϵ::Vector{Float64} divide the i-th axis into intervals of size ϵᵢ.\n\nThe points are assumed to be provided as an array where each point is a column.\n\n\n\n\n\n"
},

{
    "location": "partition/coordinate_representation/#Coordinate-representation-1",
    "page": "Coordinate representation",
    "title": "Coordinate representation",
    "category": "section",
    "text": "Say we want to impose a rectangular binning on a set of points x_i using a binning scheme specified by ϵ. One way of imposing a partition on  x_i is to find the minima along each coordinate axis, then finding an N such that Nepsilon_i  x_i leqq (N+1)epsilon_i if starting from the axis minimum. The marginal coordinate representing the point x_i is then the lower boundary of the box, or Nepsilon_i. Together with the values of ϵ_i, these coordinates completely specify each box.An alternative representation of the box covering is the Integer encoding representation.assign_coordinate_labels(points, ϵ)"
},

{
    "location": "partition/coordinate_representation/#Example-1",
    "page": "Coordinate representation",
    "title": "Example",
    "category": "section",
    "text": "using StateSpaceReconstruction\nusing Plots; pgfplots() # hideWe\'ll create a set of random points and bin the space into rectangular boxes with edge lengths epsilon_1 = 019 epsilon_2 = 015 epsilon_3 = 012.pts = rand(3, 100)\nϵ = [0.19, 0.15, 0.12]\nassign_coordinate_labels(pts, ϵ)Each point is now assigned a bin. If a bin has multiple points visiting it, there will be repeated columns.Because this binning was in 3D, we can also visualize it:plot_partition(pts, ϵ)\nsavefig(\"partcoord.svg\"); nothing # hide(Image: )"
},

{
    "location": "partition/minima_stepsizes/#StateSpaceReconstruction.RectangularPartitions.minima_and_stepsizes-Tuple{Any,Any}",
    "page": "Finding axis minima and step sizes",
    "title": "StateSpaceReconstruction.RectangularPartitions.minima_and_stepsizes",
    "category": "method",
    "text": "minima_and_stepsizes(points, ϵ) -> (Vector{Float}, Vector{Float})\n\nFind the minima along each axis of the embedding, and computes appropriate stepsizes given ϵ, which provide instructions on how to grid the space. Assumes each point is a column vector.\n\nSpecifically, the binning procedure is controlled by the type of ϵ:\n\nϵ::Int divides each axis into ϵ intervals of the same size.\nϵ::Float divides each axis into intervals of size ϵ.\nϵ::Vector{Int} divides the i-th axis into ϵᵢ intervals of the same size.\nϵ::Vector{Float64} divides the i-th axis into intervals of size ϵᵢ.\n\n\n\n\n\n"
},

{
    "location": "partition/minima_stepsizes/#",
    "page": "Finding axis minima and step sizes",
    "title": "Finding axis minima and step sizes",
    "category": "page",
    "text": "To assign boxes to points, we need a reference point. Throughout this package, the minima along each coordinate axis of the space is used as the reference point.The following function takes a set of points and a binning scheme ϵ, and returns what the minima along each coordinate axis is, along with the step sizes along each axis resulting from the binning scheme provided by ϵ.minima_and_stepsizes(points, ϵ)"
},

{
    "location": "partition/marginal_visitation_frequency/#",
    "page": "Marginal visitation frequences",
    "title": "Marginal visitation frequences",
    "category": "page",
    "text": ""
},

{
    "location": "partition/marginal_visitation_frequency/#StateSpaceReconstruction.RectangularPartitions.marginal_visitation_freq",
    "page": "Marginal visitation frequences",
    "title": "StateSpaceReconstruction.RectangularPartitions.marginal_visitation_freq",
    "category": "function",
    "text": "marginal_visitation_freq(along_which_axes::Union{Int, Vector{Int}, AbstractUnitRange{Int}},\n    visited_bins::Array{T, 2}) where T\n\nCalculate marginal or joint visitation frequencies for a pre-binned set of points. Each column in visited_bins corresponds to a unique point, and contains the coordinate or integer representation of the bin containing that point.\n\nArguments\n\nvisited_bins: Contains a representation of the boxes containing each point.\nalong_which_axes: Controls which axes to take the marginal visitation   frequencies along. Setting along_which_axes to a range 1:D, where   D is the dimension of the corresponding state space, corresponds to taking the   joint visitation frequency (basically, a D-dimensional histogram).\nnpts: The number of points in the embedding, which is used as a   normalization factor.\n\n\n\n\n\nmarginal_visitation_freq(\n    along_which_axes::Union{Int, Vector{Int}, AbstractUnitRange{Int}},\n    points::Array{T, 2},\n    ϵ) where T\n\nCompute marginal visitation frequencies for a set of points, given a partition scheme ϵ. The following ϵ will work:\n\nϵ::Int divide each axis into ϵ intervals of the same size.\nϵ::Float divide each axis into intervals of size ϵ.\nϵ::Vector{Int} divide the i-th axis into ϵᵢ intervals of the same size.\nϵ::Vector{Float64} divide the i-th axis into intervals of size ϵᵢ.\n\nThe argument along_which_axes controls which axes to take the marginal visitation frequencies along. Setting along_which_axes to a range 1:D, where D is the dimension of the corresponding state space, corresponds to taking the joint visitation frequency.\n\n\n\n\n\nmarginal_visitation_freq(\n    along_which_axes::Union{Int, Vector{Int}, AbstractUnitRange{Int}},\n    E::AbstractEmbedding,\n    ϵ)\n\nCompute marginal visitation frequencies for an embedding, given a partition scheme ϵ. The following ϵ will work:\n\nϵ::Int divide each axis into ϵ intervals of the same size.\nϵ::Float divide each axis into intervals of size ϵ.\nϵ::Vector{Int} divide the i-th axis into ϵᵢ intervals of the same size.\nϵ::Vector{Float64} divide the i-th axis into intervals of size ϵᵢ.\n\nThe argument along_which_axes controls which axes to take the marginal visitation frequencies along. Setting along_which_axes to a range 1:D, where D is the dimension of the corresponding state space, corresponds to taking the joint visitation frequency.\n\n\n\n\n\n"
},

{
    "location": "partition/marginal_visitation_frequency/#Marginal-visitation-frequencies-1",
    "page": "Marginal visitation frequences",
    "title": "Marginal visitation frequencies",
    "category": "section",
    "text": "In a system of many variables, it can be useful to find the marginal visitation frequencies after assigning a partition to the set of points. The following function computes marginal visitation frequencies along the coordinate axes specified by along_which_axes for a set of points partitioned into boxes in the manner specified by ϵ.Marginal visitation frequencies may also be computed directly from the partition representation of the points in question. Here, visited_bins is the output of either assign_bin_labels or assign_coordinate_labels.In both cases, visitation frequencies are calculated by counting the number of points falling in each bin (i.e. the multiplicity of the bin), then normalizing by the total number of points.marginal_visitation_frequsing StateSpaceReconstruction\nusing Plots; pyplot()\npts = rand(5, 60)\nϵ = 6\njointvisitfreq = marginal_visitation_freq(1:5, pts, ϵ)\n\nbar(jointvisitfreq, size = (400, 500)); # hide"
},

{
    "location": "partition/marginal_visitation_frequency/#Examples-1",
    "page": "Marginal visitation frequences",
    "title": "Examples",
    "category": "section",
    "text": "using StateSpaceReconstruction\nusing Plots; pyplot()\npts = rand(5, 300) # hide\nϵ = 7 # hide\nmarginal_visitation_freq(1, pts, ϵ); # hide"
},

{
    "location": "partition/marginal_visitation_frequency/#Marginals-for-one-variable-at-a-time-1",
    "page": "Marginal visitation frequences",
    "title": "Marginals for one variable at a time",
    "category": "section",
    "text": "Let\'s create a 5D dataset of 600 points and compute the marginals for each individual coordinate axis, given a partition where each axis is divided into 7 equal-length intervals.pts = rand(5, 600)\nϵ = 7\nMs = [marginal_visitation_freq(i, pts, ϵ) for i = 1:5]\nMs = hcat(Ms...) # convert to array\n\nheatmap(Ms, xlabel = \"Coordinate axis #\", ylabel = \"Bin #\", size = (300, 500));\nsavefig(\"marginalindividual.svg\"); nothing # hide(Image: )"
},

{
    "location": "partition/marginal_visitation_frequency/#Marginals-for-multiple-variables-1",
    "page": "Marginal visitation frequences",
    "title": "Marginals for multiple variables",
    "category": "section",
    "text": "We can also compute the marginals of multiple variables. For this example, choose variables 1:2, 2:3 and [3, 5].pts = rand(5, 600)\nϵ = 7\nMs = [marginal_visitation_freq(i, pts, ϵ) for i = [1:2, 2:3, [3, 5]]]\nMs = hcat(Ms...) # convert to array\n\nheatmap(Ms, xlabel = \"Coordinate axis #\", ylabel = \"Bin #\", size = (300, 500));\nsavefig(\"marginalmultiple.svg\"); nothing # hide(Image: )"
},

{
    "location": "partition/marginal_visitation_frequency/#Joint-visitation-frequency-1",
    "page": "Marginal visitation frequences",
    "title": "Joint visitation frequency",
    "category": "section",
    "text": "Computing the marginals for all available variables corresponds to computing the joint visitation frequency.pts = rand(5, 1000)\nϵ = 2\njointvisitfreq = marginal_visitation_freq(1:5, pts, ϵ)\n\nbar(jointvisitfreq, size = (400, 500), legend = false)\nxlabel!(\"State #\"); ylabel!(\"Visitation frequency\");\nsavefig(\"jointvisit.svg\"); nothing # hide(Image: )The plot above shows the visitation frequency over the visited bins."
},

{
    "location": "simplexpartition/simplex/#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "simplexpartition/simplex/#Simplex-partitions-1",
    "page": "Overview",
    "title": "Simplex partitions",
    "category": "section",
    "text": "Simplex partitions are formed by performing a Delaunay triangulation of the points, forming a set of disjoint simplices entirely covering the point cloud."
},

{
    "location": "simplexpartition/simplex/#Example-1",
    "page": "Overview",
    "title": "Example",
    "category": "section",
    "text": "using StateSpaceReconstruction\nusing PlotsCreate a set of random points (just a few, so it doesn\'t take forever to plot the triangulation), and triangulate them.E = embed(rand(3, 20))\ntri = delaunaytriang(E)plot_triang(E, tri, vertices = true);\nsavefig(\"triang.svg\"); nothing # hide(Image: )"
},

]}
