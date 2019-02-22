var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ScHoLP-1",
    "page": "Readme",
    "title": "ScHoLP",
    "category": "section",
    "text": ""
},

{
    "location": "#Simplicial-closure-and-Higher-order-Link-Prediction-1",
    "page": "Readme",
    "title": "Simplicial closure and Higher-order Link Prediction",
    "category": "section",
    "text": "For information on using this library, refer to the tutorial repository here."
},

{
    "location": "#Note-on-multi-threading-1",
    "page": "Readme",
    "title": "Note on multi-threading",
    "category": "section",
    "text": "This library supports multithreading through Julia\'s Base.Threads. However, in some cases, it can conflict with the multithreading in BLAS routines. Essentially, these are cases where an iterative solver is used to solve a large number of linear systems and there is simple parallelism over the linear systems being solved. To avoid the conflicts with BLAS threading, here is an example of how one should start Julia.export OPENBLAS_NUM_THREADS=1\nexport GOTO_NUM_THREADS=1\nexport OMP_NUM_THREADS=1\nJULIA_NUM_THREADS=64 julia"
},

{
    "location": "autodocs/#ScHoLP.HONData",
    "page": "Docstrings",
    "title": "ScHoLP.HONData",
    "category": "type",
    "text": "HONData\n\nData structure for a temporal higher-order network.\n\nEach dataset consists of three integer vectors: simplices, nverts, and times. \n\nThe simplices is a contiguous vector of nodes comprising the simplices. \nThe nverts vector contains the number of vertices within each simplex. \nThe times vector contains the timestamps of the simplices (same length as nverts).\n\nFor example, consider a dataset consisting of three simplices:\n\n1. {1, 2, 3} at time 10\n2. {2, 4} at time 15.\n3. {1, 3, 4, 5} at time 21.\n\nThen the data structure would be  \n\nsimplices = [1, 2, 3, 2, 4, 1, 3, 4, 5]\nnverts = [3, 2, 4]\ntimes = [10, 15, 21]\n\nThere is an additional name variable attached to the dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.NbrSetMap",
    "page": "Docstrings",
    "title": "ScHoLP.NbrSetMap",
    "category": "type",
    "text": "NbrSetMap\n\nconst NbrSetMap = Dict{NTuple{2, Int64}, Set{Int64}}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.PKatz3",
    "page": "Docstrings",
    "title": "ScHoLP.PKatz3",
    "category": "function",
    "text": "PKatz3\n\nCompute 3-way personalized Katz scores for triangles.\n\nPKatz3(triangles::Vector{NTuple{3,Int64}}, B::SpIntMat,        unweighted::Bool, dense_solve::Bool=false)\n\nExample usage:\n\n(scores, S) = PPR3(T, B, false, false)\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\nunweighted::Bool: Whether or not to use the unweighted version of the matrix.\ndense_solve::Bool=false: whether or not to use a dense solver. If B is small, then it is worth setting this option to true.\n\nreturns a tuple (scores, S):\n\nscores::Vector{Float64}: a vector of 3-way PPR scores for the triangles\nS::SpFltMat: a sparse matrix with the same sparsity pattern as B, where S[i, j] is the personalized Katz score of node i with respect to the seed node j.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.PPR3",
    "page": "Docstrings",
    "title": "ScHoLP.PPR3",
    "category": "function",
    "text": "PPR3\n\nCompute 3-way personalized PageRank scores for triangles.\n\nPPR3(triangles::Vector{NTuple{3,Int64}}, B::SpIntMat,       unweighted::Bool, dense_solve::Bool=false, α::Float64=0.85)\n\nExample usage:\n\n(scores, S) = PPR3(T, B, false, false, 0.85)\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\nunweighted::Bool: Whether or not to use the unweighted version of the matrix.\ndense_solve::Bool=false: whether or not to use a dense solver. If B is small, then it is worth setting this option to true.\nα::Float64=0.85: teleportation parameter for PageRank\n\nreturns a tuple (scores, S):\n\nscores::Vector{Float64}: a vector of 3-way PPR scores for the triangles\nS::SpFltMat: a sparse matrix with the same sparsity pattern as B, where S[i, j] is the personalized PageRank score of node i with respect to the seed node j.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.SimplicialPROperator",
    "page": "Docstrings",
    "title": "ScHoLP.SimplicialPROperator",
    "category": "function",
    "text": "SimplicialPROperator\n\nConstruct the Simplicial PageRank Operator\n\nSimplicialPROperator(grad::SpIntMat, curl::SpIntMat,                      edge_map::Dict{NTuple{2,Int64},Int64}, α::Float64)\n\nInput parameters:\n\ngrad::SpIntMat: gradient operator (as a matrix)\ncurl::SpIntMat: curl operator (as a matrix)\nedge_map::Dict{NTuple{2,Int64}, Int64}: maps an a sorted edge tuple to an index for the matrices\nα::Float64: teleportation parameter\n\nreturns simplicial PageRank operator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.Simplicial_PPR3_combined",
    "page": "Docstrings",
    "title": "ScHoLP.Simplicial_PPR3_combined",
    "category": "function",
    "text": "SimplicialPPR3combined\n\nCompute the \"combined\" 3-way simplicial personalized PageRank scores for triangles. This is less computationally expensive that the related function SimplicialPPR3decomposed(), which decomposes the scores into the curl, gradient, and harmonic components.\n\nfunction SimplicialPPR3combined(triangles::Vector{NTuple{3,Int64}}, A::SpIntMat,                                   At::SpIntMat, B::SpIntMat, α::Float64=0.85)\n\nExample usage:\n\n(scores_comb, S_comb, vec_edge_map) = Simplicial_PPR3_combined(T, A)\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\nA::SpIntMat: (# nodes) x (# simplices) adjacency matrix\nα::Float64=0.85: teleportation parameter for PageRank\n\nreturns a tuple (scorescomb, Scomb, vecedgemap)\n\nscores_comb::Vector{Float64}: scores for \"combined\" simplicial personalized PageRank\nS_comb::SpFltMat: a sparse matrix, where S[x, y] is the combined simplicial PPR score for edge x with respect to edge y\nvecedgemap::Array{Int64,2}: 2 x (# edges) map of indices for Scomb such that the vecedge_map[:, i] is the edge for ith index in the matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.Simplicial_PPR3_decomposed",
    "page": "Docstrings",
    "title": "ScHoLP.Simplicial_PPR3_decomposed",
    "category": "function",
    "text": "SimplicialPPR3decomposed\n\nCompute 3-way simplicial personalized PageRank scores for triangles, decomposed into the harmonic, gradient, and curl components.\n\nSimplicialPPR3decomposed(triangles::Vector{NTuple{3,Int64}}, A::SpIntMat, dense_solve::Bool=false, α::Float64=0.85)\n\nExample usage:\n\n(scores_comb, scores_curl, scores_grad, scores_harm, S_comb, S_curl, S_grad, S_harm, vec_edge_map) =\n    Simplicial_PPR3_decomposed(T, A)\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\nA::SpIntMat: (# nodes) x (# simplices) adjacency matrix\ndense_solve::Bool=false: whether or not to use a dense solver. If the network is tiny, then it might be worth setting this option to true.\nα::Float64=0.85: teleportation parameter for PageRank\n\nreturns a tuple (scorescomb, scorescurl, scoresgrad, scoresharm, Scomb, Scurl, Sgrad, Sharm, vecedgemap)\n\nscores_comb::Vector{Float64}: scores for \"combined\" simplicial personalized PageRank\nscores_curl::Vector{Float64}: scores for curl component\nscores_grad::Vector{Float64}: scores for gradient component\nscores_harm::Vector{Float64}: scores for harmonic component\nS_comb::SpFltMat: a sparse matrix, where S[x, y] is the combined simplicial PPR score for edge x with respect to edge y\nScurl::SpFltMat: same as Scomb but for the curl component\nSgrad::SpFltMat: same as Scomb but for the gradient component\nSharm::SpFltMat: same as Scomb but for the harmonic component\nvecedgemap::Array{Int64,2}: 2 x (# edges) map of indices for Scomb, Scurl, Sgrad, Sharm, such that the vecedgemap[:, i] is the edge for ith index in the matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.SpFltMat",
    "page": "Docstrings",
    "title": "ScHoLP.SpFltMat",
    "category": "type",
    "text": "SpFltMat\n\nconst SpFltMat = SparseMatrixCSC{Float64,Int64}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.SpIntMat",
    "page": "Docstrings",
    "title": "ScHoLP.SpIntMat",
    "category": "type",
    "text": "SpIntMat\n\nconst SpIntMat = SparseMatrixCSC{Float64,Int64}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.SpMat",
    "page": "Docstrings",
    "title": "ScHoLP.SpMat",
    "category": "constant",
    "text": "SpMat\n\nconst SpMat = Union{SpIntMat,SpFltMat}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.adamic_adar3",
    "page": "Docstrings",
    "title": "ScHoLP.adamic_adar3",
    "category": "function",
    "text": "adamic_adar3\n\nReturns the 3-way Adamic-Adar score for a list of triangles.\n\nadamicadar3(triangles::Vector{NTuple{3,Int64}}, commonnbrs::NbrSetMap, degrees::Vector{Int64})\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\ncommonnbrs::NbrSetMap: the common neighbors map attained from commonneighbors_map()\ndegrees::Vector{Int64}: degree of each node in the projected graph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.arithmetic_mean",
    "page": "Docstrings",
    "title": "ScHoLP.arithmetic_mean",
    "category": "function",
    "text": "arithmetic_mean\n\nReturns the arithmetic mean of the weights of the edges of a list of triangles.\n\narithmetic_mean(triangles::Vector{NTuple{3,Int64}}, B::SpIntMat)\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.basic_matrices",
    "page": "Docstrings",
    "title": "ScHoLP.basic_matrices",
    "category": "function",
    "text": "basic_matrices\n\nComputes some simple matrices associated with a dataset.\n\nbasic_matrices(simplices::Vector{Int64}, nverts::Vector{Int64})\n\nInput parameters:\n\nsimplices::Vector{Int64}: the contiguous vector of simplices\nnverts::Vector{Int64}: the vector of sizes of simplices\n\nOutputs tuple (A, At, B):\n\nA::SpIntMat: (# nodes) x (# simplices) adjacency matrix\nAt::SpIntMat: the transpose of A\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\n\n\n\n\n\nbasic_matrices\n\nComputes some simple matrices associated with a dataset.\n\nbasic_matrices(dataset::HONData)\n\nInput parameter:\n\ndataset::HONData: the dataset\n\nOutputs tuple (A, At, B):\n\nA::SpIntMat: (# nodes) x (# simplices) adjacency matrix\nAt::SpIntMat: the transpose of A\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.basic_summary_statistics",
    "page": "Docstrings",
    "title": "ScHoLP.basic_summary_statistics",
    "category": "function",
    "text": "basicsummarystatistics\n\nPrints some basic summary statistics of the dataset.\n\nbasicsummarystatistics(dataset::String)\n\nInput parameter:\n\ndataset::HONData: The dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.closure_type_counts3",
    "page": "Docstrings",
    "title": "ScHoLP.closure_type_counts3",
    "category": "function",
    "text": "closuretypecounts3\n\nComputes the closure probabilities of all 3-node configurations. The closure probability is the fraction of instances of open configurations appearing in the first 80% of the timestamped simplices that appear in a simplex in the final 20%.\n\nclosuretypecounts3(dataset::HONData, initial_cutoff::Int64=100)\n\nInput parameters:\n\ndataset::String: The dataset name.\ninitialcutoff::Int64=100: Initial cutoff of the simplices. If this is set to less than 100, then the data is first preprocessed to only consider the first initialcutoff percentage of the data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.closure_type_counts4",
    "page": "Docstrings",
    "title": "ScHoLP.closure_type_counts4",
    "category": "function",
    "text": "closuretypecounts4\n\nComputes the closure probabilities of all 4-node configurations that contain at least one triangle. The closure probability is the fraction of instances of open configurations appearing in the first 80% of the timestamped simplices that appear in a simplex in the final 20%.\n\nclosuretypecounts4(dataset::HONData, initial_cutoff::Int64=100)\n\nInput parameters:\n\ndataset::HONData: The dataset.\ninitialcutoff::Int64=100: Initial cutoff of the simplices. If this is set to less than 100, then the data is first preprocessed to only consider the first initialcutoff percentage of the data. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.common3",
    "page": "Docstrings",
    "title": "ScHoLP.common3",
    "category": "function",
    "text": "common3\n\nReturns the number of common 4th neighbors of a list of triangles.\n\ncommon3(triangles::Vector{NTuple{3,Int64}}, common_nbrs::NbrSetMap)\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\ncommonnbrs::NbrSetMap: the common neighbors map attained from commonneighbors_map()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.common_nbr_set",
    "page": "Docstrings",
    "title": "ScHoLP.common_nbr_set",
    "category": "function",
    "text": "Return common neighbors of two nodes u and v. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.common_neighbors_map",
    "page": "Docstrings",
    "title": "ScHoLP.common_neighbors_map",
    "category": "function",
    "text": "commonneighborsmap\n\nConstruct a map where a key is an edge in the graph B participating in at least one triangle of interest and a value is the vector of common neighbors of the end points of the edge. The graph B is assumed to be undirected, and the keys are ordered by the pair with smallest ID first.\n\ncommonneighborsmap(B::SpIntMat, triangles::Vector{NTuple{3,Int64}})\n\nInput parameters:\n\nB::SpIntMat: the graph\ntriangles::Vector{NTuple{3,Int64}}: the triangles of interest\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.example_dataset",
    "page": "Docstrings",
    "title": "ScHoLP.example_dataset",
    "category": "function",
    "text": "example_dataset\n\nReturns one of the example datasets.\n\nexample_dataset(dataset::String)\n\nInput parameter:\n\ndataset::String: one of \"email-Enron\", \"contact-primary-school\", \"contact-high-school\", \"example1\", or \"example2\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.generalized_means",
    "page": "Docstrings",
    "title": "ScHoLP.generalized_means",
    "category": "function",
    "text": "generalized_means\n\nComputes the generalized p-means of the weights of the edges of a list of triangles. The generalized mean of 3 values is\n\nM_p(x y z) = ((x^p + y^p + z^p)  3)^1p\n\ngeneralized_means(triangles::Vector{NTuple{3,Int64}}, B::SpIntMat, ps::Float64=[-Inf; collect(-4:0.25:4); Inf])\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\nps::Vector{Float64}=[-Inf; collect(-4:0.25:4); Inf]: the values of p for which to compute the means\n\nReturns a matrix of size length(triangles) x length(ps) of the scores for the various generalized means.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.geometric_mean",
    "page": "Docstrings",
    "title": "ScHoLP.geometric_mean",
    "category": "function",
    "text": "geometric_mean\n\nReturns the geometric mean of the weights of the edges of a list of triangles.\n\ngeometric_mean(triangles::Vector{NTuple{3,Int64}}, B::SpIntMat)\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.grad_and_curl",
    "page": "Docstrings",
    "title": "ScHoLP.grad_and_curl",
    "category": "function",
    "text": "gradandcurl\n\nConstruct the gradient and curl operators.\n\ngradandcurl(A::SpIntMat, At::SpIntMat, B::SpIntMat)\n\nInput parameters:\n\nA::SpIntMat: (# nodes) x (# simplices) adjacency matrix\nAt::SpIntMat: the transpose of A\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\n\nreturns tuple (grad, curl, edge_map):\n\ngrad::SpIntMat: gradient operator (as a matrix)\ncurl::SpIntMat: curl operator (as a matrix)\nedge_map::Dict{NTuple{2,Int64}, Int64}: maps an a sorted edge tuple to an index for the matrices\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.harmonic_mean",
    "page": "Docstrings",
    "title": "ScHoLP.harmonic_mean",
    "category": "function",
    "text": "harmonic_mean\n\nReturns the harmonic mean of the weights of the edges of a list of triangles.\n\nharmonic_mean(triangles::Vector{NTuple{3,Int64}}, B::SpIntMat)\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\nB::SpIntMat: Projected graph as a Sparse integer matrix, where B[i, j] is the number of times that i and j co-appear in a simplex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.interval_overlaps",
    "page": "Docstrings",
    "title": "ScHoLP.interval_overlaps",
    "category": "function",
    "text": "interval_overlaps\n\ninterval_overlaps(dataset::HONData)\n\nCompute the number of active interval overlaps in open triangles.\n\ndataset::HONData     The dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.jaccard3",
    "page": "Docstrings",
    "title": "ScHoLP.jaccard3",
    "category": "function",
    "text": "jaccard3\n\nReturns the 3-way Jaccard index of the neighbor lists of nodes in triangle.\n\njaccard3(triangles::Vector{NTuple{3,Int64}}, common_nbrs::NbrSetMap, degrees::Vector{Int64})\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\ncommonnbrs::NbrSetMap: the common neighbors map attained from commonneighbors_map()\ndegrees::Vector{Int64}: degree of each node in the projected graph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.make_sparse_ones",
    "page": "Docstrings",
    "title": "ScHoLP.make_sparse_ones",
    "category": "function",
    "text": "makesparseones\n\nReturns a new sparse matrix with the same non-zero pattern as the input but where all non-zeros are set to 1.\n\nmakesparseones(A::SpIntMat)\n\nInput parameter:\n\nA::SpIntMat: a sparse matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.num_open_closed_triangles",
    "page": "Docstrings",
    "title": "ScHoLP.num_open_closed_triangles",
    "category": "function",
    "text": "numopenclosed_triangles\n\nComputes the number of open and closed triangles in a dataset.\n\nnumopenclosed_triangles(data::HONData)\n\nInput parameter:\n\ndata::HONData: the dataset\n\nOutputs tuple (no, nc):\n\nno: number of open triangles\nnc: number of closed triangles\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.pref_attach3",
    "page": "Docstrings",
    "title": "ScHoLP.pref_attach3",
    "category": "function",
    "text": "pref_attach3\n\nReturns the preferential attachment score for a degree vector\n\npref_attach3(triangles::Vector{NTuple{3,Int64}}, degrees::Vector{Int64})\n\nThe score of triangle (i, j, k) is degrees[i] * degrees[j] * degrees[k]\n\nInput parameters:\n\ntriangles::Vector{NTuple{3,Int64}}: The vector of triangles upon which to compute scores.\ndegrees::Vector{Int64}: the degree vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.process_lifecycles",
    "page": "Docstrings",
    "title": "ScHoLP.process_lifecycles",
    "category": "function",
    "text": "process_lifecycles\n\nProcess all lifecycles in a given dataset.\n\nprocess_lifecycles(data::HONData)\n\nInput parameters:\n\ndata::HONData: The dataset\n\nReturns a tuple (closedtransitions, opentransitions)\n\nclosed_transitions::Array{Int64,2}: matrix whose (i, j) entry is the number of transitions from configuration j to configuration i, out of all triples of nodes that eventually simplicially close\nopen_transitions::Array{Int64,2}: matrix whose (i, j) entry is the number of transitions from configuration j to configuration i, out of all triples of nodes that do not simplicially close\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.proj_graph_degree_order",
    "page": "Docstrings",
    "title": "ScHoLP.proj_graph_degree_order",
    "category": "function",
    "text": "Ordering of nodes by their degree \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.simplex_degree_order",
    "page": "Docstrings",
    "title": "ScHoLP.simplex_degree_order",
    "category": "function",
    "text": "Ordering of nodes by the number of simplices in which they appear \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.sorted_tuple",
    "page": "Docstrings",
    "title": "ScHoLP.sorted_tuple",
    "category": "function",
    "text": "Turns 3 integers into a sorted tuple. \n\n\n\n\n\nTurns 4 integers into a sorted tuple. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.split_data",
    "page": "Docstrings",
    "title": "ScHoLP.split_data",
    "category": "function",
    "text": "split_data\n\nSplit data by timestamps into quantiles specified by quantile1 and quantile2. Returns a 4-tuple (oldsimps, oldnverts, newsimps, newnverts), where (oldsimps, oldnverts) are the data in the quantile [0, quantile1] and (newsimps, newnverts) are the data in the quantile (quantile1, quantile2].\n\nsplit_data(simplices::Vector{Int64}, nverts::Vector{Int64},            times::Vector{Int64}, quantile1::Int64,            quantile2::Int64)\n\nInput parameters:\n\nsimplices::Vector{Int64}: contiguous vector of simplices from dataset\nnverts::Vector{Int64}: vector of simplex sizes from dataset\ntimes::Vector{Int64}: vector of timestamps of simplices\nquantile1::Int64: first quantile\nquantile2::Int64: second quantile\n\nReturns a tuple (oldsimps, oldnverts, newsimps, newnverts):\n\nold_simplices::Vector{Int64}: simplices in quantile1\noldnverts::Vector{Int64}: sizes of simplices in oldsimplices\nnew_simplices::Vector{Int64}: simplices between quantile1 and quantile 2\nnewnverts::Vector{Int64}: sizes of simplices in newsimplices\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.summary_statistics",
    "page": "Docstrings",
    "title": "ScHoLP.summary_statistics",
    "category": "function",
    "text": "summary_statistics\n\nComputes several statistics about the dataset.\n\nsummary_statistics(dataset::HONData)\n\nInput parameter:\n\ndataset::HONData: The dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScHoLP.triangle_counts",
    "page": "Docstrings",
    "title": "ScHoLP.triangle_counts",
    "category": "function",
    "text": "triangle_counts\n\nCounts the number of times each simplicial triangle appears in the data. This function is expensive and requires storage on the order of the number of triangles. Returns a counter that takes a sorted triple of indices as a key and returns the count of that triangle.\n\ntriangle_counts(data::HONData)\n\nInput parameters:\n\ndata::HONData: The data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ScHoLP.HONDataScHoLP.NbrSetMapScHoLP.OPENScHoLP.PKatz3ScHoLP.PPR3ScHoLP.STRONGScHoLP.ScHoLPScHoLP.SimplicialPROperatorScHoLP.Simplicial_PPR3_combinedScHoLP.Simplicial_PPR3_decomposedScHoLP.SpFltMatScHoLP.SpIntMatScHoLP.SpMatScHoLP.WEAKScHoLP.adamic_adar3ScHoLP.arithmetic_meanScHoLP.backboneScHoLP.basic_matricesScHoLP.basic_summary_statisticsScHoLP.bipartite_graphScHoLP.closure_type_counts3ScHoLP.closure_type_counts4ScHoLP.collect_lifecyclesScHoLP.common3ScHoLP.common_nbr_setScHoLP.common_neighbors_mapScHoLP.configuration_sizes_preservedScHoLP.data_size_cutoffScHoLP.earliest_activityScHoLP.enum_open_trianglesScHoLP.evalScHoLP.example_datasetScHoLP.full_solveScHoLP.generalized_meansScHoLP.geometric_meanScHoLP.grad_and_curlScHoLP.harmonic_meanScHoLP.hodge_normalizationScHoLP.includeScHoLP.initialize_type_counter3ScHoLP.initialize_type_counter4ScHoLP.interval_overlapsScHoLP.intervalsScHoLP.iterative_solveScHoLP.jaccard3ScHoLP.make_sparse_onesScHoLP.neighbor_pairsScHoLP.neighborsScHoLP.new_closuresScHoLP.newly_closed_types3ScHoLP.newly_closed_types4ScHoLP.num_open_closed_trianglesScHoLP.nz_row_indsScHoLP.nz_row_valsScHoLP.open_types3ScHoLP.open_types4ScHoLP.pref_attach3ScHoLP.process_lifecyclesScHoLP.process_trailScHoLP.proj_graph_degree_orderScHoLP.remove_diagonalScHoLP.simplex_degree_orderScHoLP.simplex_key3ScHoLP.simplex_key4ScHoLP.sorted_tupleScHoLP.split_dataScHoLP.summary_statisticsScHoLP.tetrahedron_closedScHoLP.triangle_closedScHoLP.triangle_countsScHoLP.window_data"
},

]}
