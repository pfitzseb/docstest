var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Result)  (Image: codecov.io)"
},

{
    "location": "#MatrixNetworks-1",
    "page": "Readme",
    "title": "MatrixNetworks",
    "category": "section",
    "text": "This package consists of a collection of network algorithms. In short, the major difference between MatrixNetworks.jl and packages like LightGraphs.jl or Graphs.jl is the way graphs are treated.In LightGraphs.jl, graphs are created through Graph() and DiGraph() which are based on the representation of G as G = (V,E). Similar types exist in Graphs.jl (EdgeList, AdjacencyList, IncidenceList, Graph) - this is again based on viewing a graph G as a set of nodes and edges. Our viewpoint is different.MatrixNetworks is based on the philosophy that there should be no distinction between a matrix and a network - thus the name.For example, d,dt,p = bfs(A,1) computes the bfs distance from the node represented by row 1 to all other nodes of the graph with adjacency matrix A. (A can be of type SparseMatrixCSC or MatrixNetwork). This representation can be easier to work with and handle.The package provides documentation with sample runs for all functions - viewable through Juila’s REPL. These sample runs come with sample data, which makes it easier for users to get started on MatrixNetworks."
},

{
    "location": "#Package-Installation:-1",
    "page": "Readme",
    "title": "Package Installation:",
    "category": "section",
    "text": ""
},

{
    "location": "#To-install-package-1",
    "page": "Readme",
    "title": "To install package",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"MatrixNetworks\")\nusing MatrixNetworks"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "?bfs\n?bipartite_matching"
},

{
    "location": "#To-run-test-cases:-1",
    "page": "Readme",
    "title": "To run test cases:",
    "category": "section",
    "text": "Pkg.test(\"MatrixNetworks\")"
},

{
    "location": "#Data-available:-1",
    "page": "Readme",
    "title": "Data available:",
    "category": "section",
    "text": ""
},

{
    "location": "#For-a-full-list-of-all-datasets:-1",
    "page": "Readme",
    "title": "For a full list of all datasets:",
    "category": "section",
    "text": "matrix_network_datasets()"
},

{
    "location": "#Loading-data-example:-1",
    "page": "Readme",
    "title": "Loading data example:",
    "category": "section",
    "text": "load_matrix_network(\"clique-10\")"
},

{
    "location": "#Some-examples:-1",
    "page": "Readme",
    "title": "Some examples:",
    "category": "section",
    "text": ""
},

{
    "location": "#largest_component:-Return-the-largest-connected-component-of-a-graph-1",
    "page": "Readme",
    "title": "largest_component: Return the largest connected component of a graph",
    "category": "section",
    "text": "Acc is a sparse matrix containing the largest connected piece of a directed graph A p is a logical vector indicating which vertices in A were chosenA = load_matrix_network(\"dfs_example\")\nAcc,p = largest_component(A)"
},

{
    "location": "#clustercoeffs:-Compute-undirected-clustering-coefficients-for-a-graph-1",
    "page": "Readme",
    "title": "clustercoeffs: Compute undirected clustering coefficients for a graph",
    "category": "section",
    "text": "cc is the clustering coefficientsA = load_matrix_network(\"clique-10\")\ncc = clustercoeffs(MatrixNetwork(A))"
},

{
    "location": "#bfs:-Compute-breadth-first-search-distances-starting-from-a-node-in-a-graph-1",
    "page": "Readme",
    "title": "bfs: Compute breadth first search distances starting from a node in a graph",
    "category": "section",
    "text": "d is a vector containing the distances of all nodes from node u (1 in the example below) dt is a vector containing the discover times of all the nodes pred is a vector containing the predecessors of each of the nodesA = load_matrix_network(\"bfs_example\")\nd,dt,pred = bfs(A,1)"
},

{
    "location": "#scomponents:-Compute-the-strongly-connected-components-of-a-graph-1",
    "page": "Readme",
    "title": "scomponents: Compute the strongly connected components of a graph",
    "category": "section",
    "text": "A = load_matrix_network(\"cores_example\")\nsc = scomponents(A)\nsc.number #number of connected componenets\nsc.sizes #sizes of components\nsc.map #the mapping of the graph nodes to their respective connected component\nstrong_components_map(A) # if you just want the map\nsc_enrich = enrich(sc) # produce additional enriched output includes:\nsc_enrich.reduction_matrix\nsc_enrich.transitive_map\nsc_enrich.transitive_orderCan work on ei,ej:ei = [1;2;3]\nej = [2;4;1]\nscomponents(ei,ej)"
},

{
    "location": "#bipartite_matching:-Return-a-maximum-weight-bipartite-matching-of-a-graph-1",
    "page": "Readme",
    "title": "bipartite_matching: Return a maximum weight bipartite matching of a graph",
    "category": "section",
    "text": "ei = [1;2;3]\nej = [3;2;4]\nBM = bipartite_matching([10;12;13],ei,ej)\nBM.weight\nBM.cardinality\nBM.match\ncreate_sparse(BM) # get the sparse matrix\nedge_list(BM)) # get the edgelist\nedge_indicator(BM,ei,ej) # get edge indicators"
},

{
    "location": "autodocs/#MatrixNetworks.Biconnected_components_output",
    "page": "Docstrings",
    "title": "MatrixNetworks.Biconnected_components_output",
    "category": "type",
    "text": "biconnected component decomposition\n\nAny connected graph decomposes into a tree of biconnected components  called the block-cut tree of the graph. The blocks are attached to each  other at shared vertices called cut vertices or articulation points.\n\nThis implementation is based on the algorithm provided by Tarjan  in \"Depth-First Search and Linear Graph Algorithms\".  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.MatrixNetworkStochasticMult",
    "page": "Docstrings",
    "title": "MatrixNetworks.MatrixNetworkStochasticMult",
    "category": "type",
    "text": "MatrixNetworkStochasticMult\n\nExpert interface \n\nThis type is the result of creating an implicit stochastic operator for a matrix network type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.MatrixNetworks",
    "page": "Docstrings",
    "title": "MatrixNetworks.MatrixNetworks",
    "category": "module",
    "text": "Module MatrixNetworks: Documentation on the module\n\nOption 1: start with a sparse matrix A:\nexample: M = MatrixNetwork(A)\nOption 2: start with row and column indexes for the nonzeros in the matrix\nexample: M = MatrixNetwork(eiej)\n\nAvailable functions: (use ?function_name to get more documentation)\n\nbfs\nbipartite_matching\nclustercoeffs\ncorenums\ncosineknn\ncsrtosparse\ndfs\nbiconnected_components\ndijkstra\ndirclustercoeffs\nfloydwarshall\nlargest_component\nmst_prim\nscomponents\nsparsetocsr\n\nYou can check the readme file here: \n\n\"https://github.com/nassarhuda/MatrixNetworks.jl/blob/master/README.md\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.RankedArray",
    "page": "Docstrings",
    "title": "MatrixNetworks.RankedArray",
    "category": "type",
    "text": "RankedArray\n\nThis is a data-type that functions as a union between a sparse and dense array. It allows us to check if an element is not in the array (i.e. it\'s too long) by adding a getindex function to the array type.\n\nIt\'s called a RankedArray because the idea is that the elements of the array are the ranks of the nodes in a sorted vector.\n\nThis should not be used externally.\n\nExample\n\nv = rand(10) r = RankedArray(sortperm(v)) haskey(r,11) # returns false haskey(r,1) # returns true haskey(r,0) # returns false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.SparseMatrixStochasticMult",
    "page": "Docstrings",
    "title": "MatrixNetworks.SparseMatrixStochasticMult",
    "category": "type",
    "text": "SparseMatrixStochasticMult\n\nExpert interface \n\nThis type is the result of creating an implicit stochastic operator for a sparse matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.SpectralCut",
    "page": "Docstrings",
    "title": "MatrixNetworks.SpectralCut",
    "category": "type",
    "text": "SpectralCut\n\nThe return type from the spectral_cut\n\nFields\n\nset: the small side of the spectral cut\nA: the network of the largest strong component of the network\nlam2: the eigenvalue of the normalized Laplacian\nx: the Fiedler vector for spectral partitioning\nsweepcut_profile: the sweepcut profile output\ncomps: the output from the strong_components function   check comps.number to get the number of components\nlargest_component: the index of the largest strong component\n\nThe most useful outputs are set and lam2; the others are provided for experts who wish to use some of the diagonstics provided.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.SweepcutProfile",
    "page": "Docstrings",
    "title": "MatrixNetworks.SweepcutProfile",
    "category": "type",
    "text": "SweepcutProfile\n\nThis type is the result of a sweepcut operation. It stores a number of vectors associated with a sweep cut including the cut and volume associated with each.\n\nMethods\n\nbestset(P::SweepcutProfile) return the best set identified in the sweepcut. This is usually what you want.\n\nExample\n\nSee sweepcut\n\nSee also\n\nspectral_cut\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._applyv!",
    "page": "Docstrings",
    "title": "MatrixNetworks._applyv!",
    "category": "function",
    "text": "_applyv!\n\nThe fully generic function to compute x <- alpha*x + gamma*v\n\nFunctions\n\n_applyv!(x, v, alpha, gamma) \n\nExample\n\nInternal function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._check_negative",
    "page": "Docstrings",
    "title": "MatrixNetworks._check_negative",
    "category": "function",
    "text": "Return true if any element is negative.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._chung_lu_dense_undirected",
    "page": "Docstrings",
    "title": "MatrixNetworks._chung_lu_dense_undirected",
    "category": "function",
    "text": "Not public right now\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._densevec",
    "page": "Docstrings",
    "title": "MatrixNetworks._densevec",
    "category": "function",
    "text": "Convert a sparse representation into a dense vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._havel_hakimi",
    "page": "Docstrings",
    "title": "MatrixNetworks._havel_hakimi",
    "category": "function",
    "text": "The internal Havel-Hakimi function has an optional store behavior that saves the edges as they come out of the algorithm. This enables us to generate a Havel Hakimi graph, which can be useful.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._hk_taylor_degree",
    "page": "Docstrings",
    "title": "MatrixNetworks._hk_taylor_degree",
    "category": "function",
    "text": "Returns the number of terms of a Taylor series approximation to exp(-t(I-P)) sufficient to guarantee eps accuracy in the one norm when P is a stochastic matrix. \n\nSince this is actually exp(-t) exp(tP) and P is a stochastic matrix, if we want  $ \\| e^{-t} \\exp(tP) - e^{-t} TaylorPoly(e^t) \\|1 \\le \\eps $ then it is equivalent to get $ \\| \\exp(tP) -  TaylorPoly(e^t) \\|1 \\le \\eps e^t  $ and that is what this code computes. \n\nReturns -1 if maxdeg is insufficient\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._noiterfunc",
    "page": "Docstrings",
    "title": "MatrixNetworks._noiterfunc",
    "category": "function",
    "text": "A simple function that doesn\'t report any output\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._seeded_heat_kernel_validated",
    "page": "Docstrings",
    "title": "MatrixNetworks._seeded_heat_kernel_validated",
    "category": "function",
    "text": "This internal function actually allocates the memory and calls the  heat kernel algorithm. This could change in the future based on the  type of graph provided. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks._symeigs_smallest_arpack",
    "page": "Docstrings",
    "title": "MatrixNetworks._symeigs_smallest_arpack",
    "category": "function",
    "text": "_symeigs_smallest_arpack\n\nCompute eigenvalues and vectors using direct calls to the ARPACK wrappers to get type-stability. This function works for symmetric matrices.\n\nThis function works on Float32 and Float64-valued sparse matrices. It returns the smallest set of eigenvalues and vectors.\n\nIt only works on matrices with more than 21 rows and columns. (Use a dense eigensolver for smaller problems.)\n\nFunctions\n\n(evals,evecs) = _symeigs_smallest_arpack(A::SparseMatrixCSC{V,Int},                       nev::Int,tol::V,maxiter::Int, v0::Vector{V})\n\nInputs\n\nA: the sparse matrix, must be symmetric\nnev: the number of eigenvectors requested\ntol: the relative tolerance of the eigenvalue computation\nmaxiter: the maximum number of restarts\nv0: the initial vector for the Lanczos process\n\nExample\n\nThis is an internal function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.bfs",
    "page": "Docstrings",
    "title": "MatrixNetworks.bfs",
    "category": "function",
    "text": "BFS\n\ncompute breadth first search distances and returns a distance(d), \nthe discover time(dt), predecessor array(pred) in the tuple (d,dt,pred)\npred[i] = 0 if vertex i is in a component not reachable from u and i != u.\nSearch stops when it hits the vertex target.\n\nFunctions\n\n(d,dt,pred) = bfs(A::MatrixNetwork,u::Int64,target::Int64)\n(d,dt,pred) = bfs{T}(A::SparseMatrixCSC{T,Int64}),u::Int64,target::Int64)\n(d,dt,pred) = bfs(ei::Vector{Int64},ej::Vector{Int64},u::Int64,target::Int64)\n\nIf target is not specified, it is assigned to 0\n\nExample\n\nA = load_matrix_network(\"bfs_example\")\n(d,dt,pred) = bfs(A,1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.biconnected_components",
    "page": "Docstrings",
    "title": "MatrixNetworks.biconnected_components",
    "category": "function",
    "text": "biconnected_components\n\nThis function requires a symmetric matrix as input. Depending on the user input this function returns either the biconnected component number associated with each edge  or articlation points or both.\n\nInputs\n\nA: the adjacency matrix\nOptional Keyword inputs\nart=true: returns the articulation points of the graph.\ncomponents=true:returns the biconnected component labels associated with each \nedge.\n\nReturns\n\nReturns a Biconnected_components_output type which includes\n\nmap : biconnected component labels associated with each edge,  articulation_points: boolean array that signifies whether a vertex is an articulation point and number: Number of biconnected components in the graph.\n\nExample\n\nA = loadmatrixnetwork(\"biconnectedexample\") B = MatrixNetwork(A) bcc = biconnectedcomponents(B) map = bcc.map articulationvector = bcc.articulationpoints numberofcomponents = bcc.number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.biconnected_components!",
    "page": "Docstrings",
    "title": "MatrixNetworks.biconnected_components!",
    "category": "function",
    "text": "biconnected_components!\n\nThis function returns the number of biconnected components in the  underlying graph. It expects an undirected graph as its input.\n\nFunctions\n\nnumber = biconnected_components!(A::MatrixNetwork, articulation::Vector{Bool}, map::Vector{Int64})\n\nInputs\n\nA: the adjacency matrix.\narticulation: A boolean array, where each element is initialized to false.\nmap: Vector of size equal to the number of edges.\n\nReturns\n\ncn: The number of biconnected components in the graph\n\nExample\n\nA = loadmatrixnetwork(\"biconnectedexample\") B = MatrixNetwork(A) numberofcomponents = biconnectedcomponents!(B, zeros(Bool,0), zeros(Int64,0))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.bipartite_matching",
    "page": "Docstrings",
    "title": "MatrixNetworks.bipartite_matching",
    "category": "function",
    "text": "BIPARTITE MATCHING\n\nreturn a maximum weight bipartite matching of a graph\n\nFunctions\n\nMatchingSetup = bipartitematching_setup{T}(A::SparseMatrixCSC{T,Int64})\nMatchingSetup = bipartitematching_setup{T}(x::Vector{T},ei::Vector{Int64},ej::Vector{Int64},m::Int64,n::Int64)\nMatchingOutput = bipartitematchingprimaldual{T}(rp::Vector{Int64}, ci::Vector{Int64},ai::Vector{T}, m::Int64, n::Int64)\nMatchingOutput = bipartitematching{T}(A::SparseMatrixCSC{T,Int64})\nMatchingOutput = bipartitematching{T}(w::Vector{T},ei::Vector{Int64},ej::Vector{Int64},m::Int64,n::Int64)\nMatchingOutput = bipartitematching{T}(w::Vector{T},ei::Vector{Int64},ej::Vector{Int64})\nind = bipartitematchingindicator{T}(w::Vector{T},ei::Vector{Int64},ej::Vector{Int64})\n(m1,m2) = edgelist(Moutput::Matching_output)\nS = createsparse(Moutput::Matching_output)\n\nYou can check the documentation of each of the output modifiers functions separately.\n\nExample\n\nW = sprand(10,8,0.5)\nbipartite_matching(W)\nei = [1;2;3]\nej = [3;2;4]\nMatching_Output = bipartite_matching([10;12;13],ei,ej)\nMatching_Output.weight\nMatching_Output.cardinality\nMatching_Output.match\nS = create_sparse(bipartite_matching(W)) # get the sparse matrix\n(m1,m2) = edge_list(bipartite_matching(W)) # get the edgelist\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.bipartite_matching_indicator",
    "page": "Docstrings",
    "title": "MatrixNetworks.bipartite_matching_indicator",
    "category": "function",
    "text": "Returns the matching indicator of a matrix stored in triplet format Example: bipartitematchingindicator([10;12;13],[1;2;3],[3;2;4])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.chung_lu_undirected",
    "page": "Docstrings",
    "title": "MatrixNetworks.chung_lu_undirected",
    "category": "function",
    "text": "chung_lu_undirected\n\nGenerate an approximate undirected Chung-Lu graph. The approximation is because we draw exactly |E| edges where each edge is sampled from the Chung-Lu model. But then we discard duplicate edges and self-loops. So the new graph will always have fewer edges than the input degree sequence.\n\nThis will likely change in future versions and provide an exact Chung-Lu model.\n\nIf the graph is \n\nUsage\n\nchung_lu_undirected(d)\nchung_lu_undirected(d,nedges) \n\nInput\n\nd: the degree sequence vector. This vector is non-negative and has the expected\n\ndegree for each vertex.\n\nOutput\n\nA MatrixNetwork for the undirected graph that results from the Chung-Lu sample.\n\nExample\n\nA = load_matrix_network(\"tapir\")\nd = vec(sum(A,1))\nB = sparse(chung_lu_undirected(d))\nnnz(A)\nnnz(B)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.clustercoeffs",
    "page": "Docstrings",
    "title": "MatrixNetworks.clustercoeffs",
    "category": "function",
    "text": "CLUSTERCOEFFS\n\ncompute undirected clustering coefficients for a graph. clustercoeffs(A) computes a \nnormalized, weighted clustering coefficients from a graph represented by a symmetric \nadjacency matrix A. clustercoeffs(A,weighted,normalized), with weighted and normalized \nboolean values indicating whether the computation has to be weighted and/or normalized.\n\nFunctions\n\ncc = clustercoeffs(A::MatrixNetwork,weighted::Bool,normalized::Bool)\ncc = clustercoeffs{T}(A::SparseMatrixCSC{T,Int64},weighted::Bool,normalized::Bool)\n\nIf weighted and normalized are not specified, they are understood as true\n\nExample\n\nA = load_matrix_network(\"clique-10\")    \ncc = clustercoeffs(MatrixNetwork(A))    \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.corenums",
    "page": "Docstrings",
    "title": "MatrixNetworks.corenums",
    "category": "function",
    "text": "CORENUMS\n\ncompute the core number for each vertex in the graph and returns the core\nnumbers for each vertex of the graph A along with the removal order of the vertex in the \ntuple (d,rt). This function works on directed graphs but gives the in-degree core number.\nTo get the out-degree core numbers call corenums(A\')\n\nFunctions\n\n(d,rt) = corenums(A::MatrixNetwork)\n(d,rt) = corenums{T}(A::SparseMatrixCSC{T,Int64})\n(d,rt) = corenums(ei::Vector{Int64},ej::Vector{Int64})\n\nExample\n\nA = load_matrix_network(\"cores_example\")\n(d,rt) = corenums(A)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.cosineknn",
    "page": "Docstrings",
    "title": "MatrixNetworks.cosineknn",
    "category": "function",
    "text": "COSINEKNN\n\ncompute the k-nearest neighbors similarity metric between the\nvertices of A or the upper half of a bipartite graph A.\n\nFunctions\n\nS = cosineknn{T}(A::SparseMatrixCSC{T,Int64},K::Int64)\nS = cosineknn(A::MatrixNetwork,K::Int64)\n\nExample\n\nA = load_matrix_network(\"bfs_example\")\nS = cosineknn(A,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.create_sparse",
    "page": "Docstrings",
    "title": "MatrixNetworks.create_sparse",
    "category": "function",
    "text": "Creates and returns a sparse matrix that represents the outputed matching Example: Mout = bipartitematching([10;12;13],[1;2;3],[3;2;4]) createsparse(Mout)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.csr_to_sparse",
    "page": "Docstrings",
    "title": "MatrixNetworks.csr_to_sparse",
    "category": "function",
    "text": "CSRTOSPARSE\n\nconvert a matrix from compressed sparse row to a sparse matrix A.\nIt returns the arrays that feed the sparse function in julia.\n\nFunctions\n\n(nzi,nzj,nzv) = csrtosparse{T}(rp::Vector{Int64},ci::Vector{Int64},ai::Vector{T})\n(nzi,nzj,nzv) = csrtosparse{T}(rp::Vector{Int64},ci::Vector{Int64},ai::Vector{T},nrows::Int64)\n\nExample\n\ni = [1;2;3]\nj = [3;4;4]\nv = [8;9;10]\n(rp,ci,ai,m) = sparse_to_csr(i,j,v)\n(nzi,nzj,nzv) = csr_to_sparse(rp,ci,ai)\nA = sparse(nzi,nzj,nzv,length(rp)-1,maximum(ci))\nB = csr_to_sparse_matrix(rp,ci,ai)\nisequal(A,B)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.dfs",
    "page": "Docstrings",
    "title": "MatrixNetworks.dfs",
    "category": "function",
    "text": "DFS\n\ncompute depth first search distances and returns the distance (d), the discover (dt),\nthe finish time(ft), and the predecessor array (pred) in the tuple (d,dt,ft, pred).\n\npred[i] = 0 if vertex i is in a component not reachable from u and i != u.\n\nFunctions\n\n(d,dt,ft,pred) = dfs(A::MatrixNetwork,u::Int64,full::Int64,target::Int64)\n(d,dt,ft,pred) = dfs(A::MatrixNetwork,u::Int64)\n(d,dt,ft,pred) = dfs{T}(A::SparseMatrixCSC{T,Int64},u::Int64,full::Int64,target::Int64)\n(d,dt,ft,pred) = dfs{T}(A::SparseMatrixCSC{T,Int64},u::Int64)\n(d,dt,ft,pred) = dfs(ei::Vector{Int64},ej::Vector{Int64},u::Int64,full::Int64,target::Int64)\n(d,dt,ft,pred) = dfs(ei::Vector{Int64},ej::Vector{Int64},u::Int64)\n\nExample\n\nA = load_matrix_network(\"dfs_example\")\n(d,dt,ft,pred)  = dfs(A,1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.dijkstra",
    "page": "Docstrings",
    "title": "MatrixNetworks.dijkstra",
    "category": "function",
    "text": "DIJKSTRA\n\ncompute shortest paths using Dijkstra\'s algorithm.\nd = dijkstra(A,u) computes the shortest path from vertex u to all nodes \nreachable from vertex u using Dijkstra\'s algorithm for the problem.  \nThe graph is given by the weighted sparse matrix A, where A(i,j) is \nthe distance between vertex i and j.  In the output vector d, \nthe entry d[v] is the minimum distance between vertex u and vertex v.\nA vertex w unreachable from u has d(w)=Inf.\npred is the predecessor tree to generate the actual shorest paths. \nIn the predecessor tree pred[v] is the vertex preceeding v in the \nshortest path and pred[u]=0. Any unreachable vertex has pred[w]=0 as well.  \nIf your network is unweighted, then use bfs instead.\n\nFunctions\n\n(d,pred) = dijkstra(A::MatrixNetwork,u::Int64)\n(d,pred) = dijkstra{F}(A::SparseMatrixCSC{F,Int64},u::Int64)\n\nExample\n\n# Find the minimum travel time between Los Angeles (LAX) and\n# Rochester Minnesota (RST).\n\n(A,xy,labels) = load_matrix_network_metadata(\"airports\")\nA = -A; # fix funny encoding of airport data\nlax = 247; rst = 355\n(d,pred) = dijkstra(A,lax)\n@printf(\"Minimum time: %d\",d[rst]); #Print the path\n@printf(\"Path:\")\nu = rst\nwhile(u != lax)\n    @printf(\"%s <-- \", labels[u])\n    u = pred[u];\n    if (u == lax)\n        @printf(\"%s\", labels[lax])\n    end\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.dirclustercoeffs",
    "page": "Docstrings",
    "title": "MatrixNetworks.dirclustercoeffs",
    "category": "function",
    "text": "DIRCLUSTERCOEFFS\n\ncompute clustering coefficients for a directed graph.\ncc = dirclustercoeffs(A) returns the directed clustering coefficients\n(which generalize the clustering coefficients of an undirected graph, \nand so calling this function on an undirected graph will produce the same\nanswer as clustercoeffs, but less efficiently.)\n\nThis function implements the algorithm from Fagiolo, Phys Rev. E. \n76026107 (doi:10:1103/PhysRevE.76.026107).  \n\n(cc,cccyc,ccmid,ccin,ccout,nf) = dirclusteringcoeffs(A) returns different \ncomponents of the clustering coefficients corresponding to cycles,\nmiddles, in triangles, and out triangles.  See the manuscript for a \ndescription of the various types of triangles counted in the above metrics.\n\nFunctions\n\n(cc,cccyc,ccmid,ccin,ccout,nf) = dirclustercoeffs{T}(A::SparseMatrixCSC{T,Int64},weighted::Bool)\n(cc,cccyc,ccmid,ccin,ccout,nf) = dirclustercoeffs{T}(A::SparseMatrixCSC{T,Int64})\n(cc,cccyc,ccmid,ccin,ccout,nf) = dirclustercoeffs{T}(A::SparseMatrixCSC{T,Int64},weighted::Bool,normalized::Bool)\n\nExample\n\n(A,xy,labels) = load_matrix_network_metadata(\"celegans\")\n(cc, cccyc, ccmid, ccin, ccout, nf) = dirclustercoeffs(A, true, true)\n(maxval, maxind) = findmax(cc)\nlabels[maxind]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.directed_edges",
    "page": "Docstrings",
    "title": "MatrixNetworks.directed_edges",
    "category": "function",
    "text": "directed_edges(A) -> srcs,dsts\n\nProduce lists just for all edges of the graph, including both sides for undirected edges. This is essentially the same as findnz for a sparse matrix, optimized not to return the values. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.edge_list",
    "page": "Docstrings",
    "title": "MatrixNetworks.edge_list",
    "category": "function",
    "text": "Returns the edge list of a matching output Example: Mout = bipartitematching([10;12;13],[1;2;3],[3;2;4]) edgelist(Mout)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.empty_graph",
    "page": "Docstrings",
    "title": "MatrixNetworks.empty_graph",
    "category": "function",
    "text": "empty_graph\n\nReturns an empty graph with n vertices and zero edges\n\nFunctions\n\nA = empty_graph(n) generates an empty graph on n edges.\n\nExample\n\nis_connected(empty_graph(0))\nis_connected(empty_graph(1))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.enrich",
    "page": "Docstrings",
    "title": "MatrixNetworks.enrich",
    "category": "function",
    "text": "This function adds the following helpers variables\n\nreduction_matrix - a reduction matrix to project down to the component graph\ntransitive_order - a transitive ordering of the components\ntransitive_map - a map to components that respects the transitive ordering\nlargest\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.erdos_renyi_directed",
    "page": "Docstrings",
    "title": "MatrixNetworks.erdos_renyi_directed",
    "category": "function",
    "text": "erdos_renyi_directed\n\nGenerate an directed Erdős-Rényi graph. A directed  Erdős-Rényi graph is generated by letting each directed edge between n nodes be present with probability p.\n\nThere is another form of the call where the input is the average degree of the generated graph. \n\nThe current implementation uses sprand, this may change in the future. Do not depend on this routine for reliable output between versions.\n\nInput\n\nn: the number of nodes\np: the probability of an edge.\nd: the average degree \n\nFunctions\n\nerdos_renyi_directed(n::Int,p::Float64) specify the probability (p < 1.) or the average degree (p >= 1.) \nerdos_renyi_directed(n::Int,d::Int) specify the average degree directly \n\nOutput\n\nA matrix network type for the Erdős-Rényi graph. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.erdos_renyi_undirected",
    "page": "Docstrings",
    "title": "MatrixNetworks.erdos_renyi_undirected",
    "category": "function",
    "text": "erdos_renyi_undirected\n\nGenerate an undirected Erdős-Rényi graph. An undirected   Erdős-Rényi graph is generated by letting each undirected edge between n nodes be present with probability p.\n\nThere is another form of the call where the input is the average degree of the generated graph. \n\nThe current implementation uses sprand, this may change in the future. Do not depend on this routine for reliable output between versions.\n\nInput\n\nn: the number of nodes\np: the probability of an edge, or the average degree.   if p = 1, then p is interpreted as an average degree  instead of a probability. (There is no point in generating  an Erdős-Rényi graph with probability p=1)\nd: The desired average degree, converted into a probabiltity   via d/n\n\nFunctions\n\nerdos_renyi_undirected(n::Int,p::Float64) specify the  probability or average degree\nerdos_renyi_undirected(n::Int,d::Int) specify the average degree directly         \n\nOutput\n\nA matrix network type for the Erdős-Rényi graph.\n\nExample\n\n# show the connected phase transition\nn = 100\navgdegs = linspace(1.,2*log(n),100) \ncompsizes = map( (dbar) -> \n        maximum(scomponents(erdos_renyi_undirected(n,dbar)).sizes),\n    avgdegs )\nusing Plots\nunicodeplots()\nplot(avgdegs,compsizes,xaxis=(\"average degree\"),yaxis=(\"largest component size\"))    \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.erdős_rényi_directed",
    "page": "Docstrings",
    "title": "MatrixNetworks.erdős_rényi_directed",
    "category": "function",
    "text": "erdos_renyi_directed\n\nGenerate an directed Erdős-Rényi graph. A directed  Erdős-Rényi graph is generated by letting each directed edge between n nodes be present with probability p.\n\nThere is another form of the call where the input is the average degree of the generated graph. \n\nThe current implementation uses sprand, this may change in the future. Do not depend on this routine for reliable output between versions.\n\nInput\n\nn: the number of nodes\np: the probability of an edge.\nd: the average degree \n\nFunctions\n\nerdos_renyi_directed(n::Int,p::Float64) specify the probability (p < 1.) or the average degree (p >= 1.) \nerdos_renyi_directed(n::Int,d::Int) specify the average degree directly \n\nOutput\n\nA matrix network type for the Erdős-Rényi graph. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.erdős_rényi_undirected",
    "page": "Docstrings",
    "title": "MatrixNetworks.erdős_rényi_undirected",
    "category": "function",
    "text": "erdos_renyi_undirected\n\nGenerate an undirected Erdős-Rényi graph. An undirected   Erdős-Rényi graph is generated by letting each undirected edge between n nodes be present with probability p.\n\nThere is another form of the call where the input is the average degree of the generated graph. \n\nThe current implementation uses sprand, this may change in the future. Do not depend on this routine for reliable output between versions.\n\nInput\n\nn: the number of nodes\np: the probability of an edge, or the average degree.   if p = 1, then p is interpreted as an average degree  instead of a probability. (There is no point in generating  an Erdős-Rényi graph with probability p=1)\nd: The desired average degree, converted into a probabiltity   via d/n\n\nFunctions\n\nerdos_renyi_undirected(n::Int,p::Float64) specify the  probability or average degree\nerdos_renyi_undirected(n::Int,d::Int) specify the average degree directly         \n\nOutput\n\nA matrix network type for the Erdős-Rényi graph.\n\nExample\n\n# show the connected phase transition\nn = 100\navgdegs = linspace(1.,2*log(n),100) \ncompsizes = map( (dbar) -> \n        maximum(scomponents(erdos_renyi_undirected(n,dbar)).sizes),\n    avgdegs )\nusing Plots\nunicodeplots()\nplot(avgdegs,compsizes,xaxis=(\"average degree\"),yaxis=(\"largest component size\"))    \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.fiedler_vector",
    "page": "Docstrings",
    "title": "MatrixNetworks.fiedler_vector",
    "category": "function",
    "text": "fiedler_vector\n\nCompute the Fiedler vector associated with the normalized Laplacian of the graph with adjacency matrix A.\n\nThis function works with Float32 and Float64-valued sparse matrices and vectors.\n\nIt requires a symmetric input matrix representing the adjacency matrix of an undirected graph. If the input is a disconnected network then the result may not\n\nThe return vector is signed so that the number of positive entries is at least the number of negative entries. This will always give a unique, deterministic output in the case of a non-repeated second eigenvalue.\n\nFunctions\n\n(v,lam2) = fiedler_vector(A::SparseMatrixCSC{V,Int})\n(v,lam2) = fiedler_vector(A::MatrixNetwork{V,Int})\n\nInputs\n\nA: the adjacency matrix\nOptional Keywoard Inputs\nchecksym: ensure the matrix is symmetric\ntol: the residual tolerance in the eigenvalue, eigenvector estimate. (This is an absolute error)\nmaxiter: the maximum iteration for ARPACK\nnev: the number of eigenvectors estimated by ARPACK\ndense: the threshold for a dense (LAPACK) computation instead of a sparse (ARPACK) computation. If the size of the matrix is less than dense then maxiter and nev are ignored and LAPACK computes all the eigenvalues.\n\nReturns\n\nv: The Fiedler vector as an array\nlam2: the eigenvalue itself\n\nExample\n\n# construct an n-node path graph\nn = 25\nA = sparse(1:n-1,2:n,1.,n,n)\nA = A + A\'\n(v,lam2) = fiedler_vector(A) # returns a cosine-like fiedler vector\n# using UnicodePlots; lineplot(v)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.floydwarshall",
    "page": "Docstrings",
    "title": "MatrixNetworks.floydwarshall",
    "category": "function",
    "text": "FLOYDWARSHALL\n\ncompute all shortest paths using the Floyd-Warshall algorithm.\n\n(D,P) = floydwarshall(A) returns the shortest distance matrix between all pairs\nof nodes in the graph A in matrix D.  If A has a negative weight cycle, then this\nalgorithm will throw an error. P is the matrix of predecessors.\n\nFunctions\n\n(D,P) = floydwarshall(A::MatrixNetwork)\n(D,P) = floydwarshall{T}(A::SparseMatrixCSC{T,Int64})\n\nExample\n\nA = load_matrix_network(\"all_shortest_paths_example\")\n(D,P) = floydwarshall(A)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.generalized_preferential_attachment_edges!",
    "page": "Docstrings",
    "title": "MatrixNetworks.generalized_preferential_attachment_edges!",
    "category": "function",
    "text": "\'generalizedpreferentialattachment_graph\'\n\nGenerate an instance of a generalized preferential attachment graph which follows the Avin,Lotker,Nahum,Peleg description. This is an undirected graph that is generated as follows:\n\nStart with a k0-node clique\nAdd n - k0 vertices where at each time step one of three events occurs: A new\n\nnode is added with probability p, a new edge between two existing nodes is added with probability r, two new nodes with an edge between them is added with probability 1 - p - r\n\nFunctions\n\nThe following functions are synonyms\n\n\'generalizedpreferentialattachment_graph\'\n\'gpa_graph\'\n\nand\n\n\'generalizedpreferentialattachment_edges!\'\n\'gpa_edges!\'\n\nThe computational functions are\n\n\'gpa_graph(n,p,r,k0)\' Generate a GPA graph with a k0 clique and n total nodes.   This returns a MatrixNetwork type\n\'gpa_graph(n,p,r,k0,Val{true})\' Generate a GPA graph with a k0 clique and   n total nodes, allowing self-loops. This returns a MatrixNetwork type\n\nThe edge functions are\n\n\'gpa_edges!(n,p,r,edges,n0)\' Add new edges to an existing set, by taking   n0 time steps. Edges are added in one of three ways: From a new node to   an existing node with probability p, between two existing nodes with   probability r, between two new nodes with probability 1-p-r\n\'gpa_edges!(n,p,r,edges,n0,Val{true})\' Add new edges to an existing set, by   taking n0 time steps. Edges are added in one of three ways: From a new node   to an existing node with probability p, between two existing nodes with   probability r (allowing self-loops), between two new nodes with probability   1-p-r\n\nInput\n\n\'n\': the number of nodes in the final graph.\n\'p\': The probability of a node event, p must be a constant.\n\'r\': The probability of an edge event, r must be a constant. p+r <=1\n\'k0\': the number of nodes in the starting clique.\n\'Val{true}\': Include this parameter if self-loops are allowed. Default is false\n\'edges\': A list of edges to be manipulated in the process of generating         new edges.\n\nOutput\n\nA matrix network type for the generalized preferential attachment graph.\n\'edges\': An updated list of edges.\n\nExample: generalizedpreferentialattachment_graph(100,1/3,1/2,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.generalized_preferential_attachment_graph",
    "page": "Docstrings",
    "title": "MatrixNetworks.generalized_preferential_attachment_graph",
    "category": "function",
    "text": "\'generalizedpreferentialattachment_graph\'\n\nGenerate an instance of a generalized preferential attachment graph which follows the Avin,Lotker,Nahum,Peleg description. This is an undirected graph that is generated as follows:\n\nStart with a k0-node clique\nAdd n - k0 vertices where at each time step one of three events occurs: A new\n\nnode is added with probability p, a new edge between two existing nodes is added with probability r, two new nodes with an edge between them is added with probability 1 - p - r\n\nFunctions\n\nThe following functions are synonyms\n\n\'generalizedpreferentialattachment_graph\'\n\'gpa_graph\'\n\nand\n\n\'generalizedpreferentialattachment_edges!\'\n\'gpa_edges!\'\n\nThe computational functions are\n\n\'gpa_graph(n,p,r,k0)\' Generate a GPA graph with a k0 clique and n total nodes.   This returns a MatrixNetwork type\n\'gpa_graph(n,p,r,k0,Val{true})\' Generate a GPA graph with a k0 clique and   n total nodes, allowing self-loops. This returns a MatrixNetwork type\n\nThe edge functions are\n\n\'gpa_edges!(n,p,r,edges,n0)\' Add new edges to an existing set, by taking   n0 time steps. Edges are added in one of three ways: From a new node to   an existing node with probability p, between two existing nodes with   probability r, between two new nodes with probability 1-p-r\n\'gpa_edges!(n,p,r,edges,n0,Val{true})\' Add new edges to an existing set, by   taking n0 time steps. Edges are added in one of three ways: From a new node   to an existing node with probability p, between two existing nodes with   probability r (allowing self-loops), between two new nodes with probability   1-p-r\n\nInput\n\n\'n\': the number of nodes in the final graph.\n\'p\': The probability of a node event, p must be a constant.\n\'r\': The probability of an edge event, r must be a constant. p+r <=1\n\'k0\': the number of nodes in the starting clique.\n\'Val{true}\': Include this parameter if self-loops are allowed. Default is false\n\'edges\': A list of edges to be manipulated in the process of generating         new edges.\n\nOutput\n\nA matrix network type for the generalized preferential attachment graph.\n\'edges\': An updated list of edges.\n\nExample: generalizedpreferentialattachment_graph(100,1/3,1/2,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.gpa_edges!",
    "page": "Docstrings",
    "title": "MatrixNetworks.gpa_edges!",
    "category": "function",
    "text": "\'generalizedpreferentialattachment_graph\'\n\nGenerate an instance of a generalized preferential attachment graph which follows the Avin,Lotker,Nahum,Peleg description. This is an undirected graph that is generated as follows:\n\nStart with a k0-node clique\nAdd n - k0 vertices where at each time step one of three events occurs: A new\n\nnode is added with probability p, a new edge between two existing nodes is added with probability r, two new nodes with an edge between them is added with probability 1 - p - r\n\nFunctions\n\nThe following functions are synonyms\n\n\'generalizedpreferentialattachment_graph\'\n\'gpa_graph\'\n\nand\n\n\'generalizedpreferentialattachment_edges!\'\n\'gpa_edges!\'\n\nThe computational functions are\n\n\'gpa_graph(n,p,r,k0)\' Generate a GPA graph with a k0 clique and n total nodes.   This returns a MatrixNetwork type\n\'gpa_graph(n,p,r,k0,Val{true})\' Generate a GPA graph with a k0 clique and   n total nodes, allowing self-loops. This returns a MatrixNetwork type\n\nThe edge functions are\n\n\'gpa_edges!(n,p,r,edges,n0)\' Add new edges to an existing set, by taking   n0 time steps. Edges are added in one of three ways: From a new node to   an existing node with probability p, between two existing nodes with   probability r, between two new nodes with probability 1-p-r\n\'gpa_edges!(n,p,r,edges,n0,Val{true})\' Add new edges to an existing set, by   taking n0 time steps. Edges are added in one of three ways: From a new node   to an existing node with probability p, between two existing nodes with   probability r (allowing self-loops), between two new nodes with probability   1-p-r\n\nInput\n\n\'n\': the number of nodes in the final graph.\n\'p\': The probability of a node event, p must be a constant.\n\'r\': The probability of an edge event, r must be a constant. p+r <=1\n\'k0\': the number of nodes in the starting clique.\n\'Val{true}\': Include this parameter if self-loops are allowed. Default is false\n\'edges\': A list of edges to be manipulated in the process of generating         new edges.\n\nOutput\n\nA matrix network type for the generalized preferential attachment graph.\n\'edges\': An updated list of edges.\n\nExample: generalizedpreferentialattachment_graph(100,1/3,1/2,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.gpa_graph",
    "page": "Docstrings",
    "title": "MatrixNetworks.gpa_graph",
    "category": "function",
    "text": "\'generalizedpreferentialattachment_graph\'\n\nGenerate an instance of a generalized preferential attachment graph which follows the Avin,Lotker,Nahum,Peleg description. This is an undirected graph that is generated as follows:\n\nStart with a k0-node clique\nAdd n - k0 vertices where at each time step one of three events occurs: A new\n\nnode is added with probability p, a new edge between two existing nodes is added with probability r, two new nodes with an edge between them is added with probability 1 - p - r\n\nFunctions\n\nThe following functions are synonyms\n\n\'generalizedpreferentialattachment_graph\'\n\'gpa_graph\'\n\nand\n\n\'generalizedpreferentialattachment_edges!\'\n\'gpa_edges!\'\n\nThe computational functions are\n\n\'gpa_graph(n,p,r,k0)\' Generate a GPA graph with a k0 clique and n total nodes.   This returns a MatrixNetwork type\n\'gpa_graph(n,p,r,k0,Val{true})\' Generate a GPA graph with a k0 clique and   n total nodes, allowing self-loops. This returns a MatrixNetwork type\n\nThe edge functions are\n\n\'gpa_edges!(n,p,r,edges,n0)\' Add new edges to an existing set, by taking   n0 time steps. Edges are added in one of three ways: From a new node to   an existing node with probability p, between two existing nodes with   probability r, between two new nodes with probability 1-p-r\n\'gpa_edges!(n,p,r,edges,n0,Val{true})\' Add new edges to an existing set, by   taking n0 time steps. Edges are added in one of three ways: From a new node   to an existing node with probability p, between two existing nodes with   probability r (allowing self-loops), between two new nodes with probability   1-p-r\n\nInput\n\n\'n\': the number of nodes in the final graph.\n\'p\': The probability of a node event, p must be a constant.\n\'r\': The probability of an edge event, r must be a constant. p+r <=1\n\'k0\': the number of nodes in the starting clique.\n\'Val{true}\': Include this parameter if self-loops are allowed. Default is false\n\'edges\': A list of edges to be manipulated in the process of generating         new edges.\n\nOutput\n\nA matrix network type for the generalized preferential attachment graph.\n\'edges\': An updated list of edges.\n\nExample: generalizedpreferentialattachment_graph(100,1/3,1/2,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.havel_hakimi_graph",
    "page": "Docstrings",
    "title": "MatrixNetworks.havel_hakimi_graph",
    "category": "function",
    "text": "havel_hakimi_graph\n\nCreate a graph with a given degree sequence \n\nUsage\n\nA = havel_hakimi_graph(d) returns an instance of the  a graph with degree sequence d or throws ArgumentError if the degree sequence is not graphical.   \n\nInput\n\nd::Vector{Int}:  a vector of integer valued degrees\n\nOutput\n\n-A: a matrix network for the undirected graph that results from the Havel-Hakimi procedure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.is_connected",
    "page": "Docstrings",
    "title": "MatrixNetworks.is_connected",
    "category": "function",
    "text": "is_connected\n\nCheck the matrix associated with a matrix network for (strong) connectivity  \n\nUsage\n\nis_connected(A)\n\nInput\n\nA: a MatrixNetwork or SparseMatrixCSC class\n\nReturns\n\nbool with true indicating the matrix is strongly connected\n\nand false indicating \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.is_empty",
    "page": "Docstrings",
    "title": "MatrixNetworks.is_empty",
    "category": "function",
    "text": "is_empty\n\nReturn true if the graph is the empty graph and  false otherwise. \n\nFunctions\n\n-is_empty(A::MatrixNetwork)\n\nExample\n\nis_empty(MatrixNetwork(Int[],Int[],0))\nis_empty(erdos_renyi_undirected(0,0))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.is_graphical_sequence",
    "page": "Docstrings",
    "title": "MatrixNetworks.is_graphical_sequence",
    "category": "function",
    "text": "is_graphical_sequence\n\nCheck whether or not a degree sequence is graphical, which means that it is a valid degree sequence for  an undirected graph.\n\nNote that this does not mean it is a valid degree sequence for a connected undirected graph. So, for instance,  [1,1,1,1]  is a valid degree sequence for two disconnected edges\n\nUsage\n\nis_graphical_sequence(d) returns true or false \n\nInput\n\nd::Vector{Int}:  a vector of integer valued degrees\n\nOutput\n\na boolean that is true if the sequence is graphical\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.is_undirected",
    "page": "Docstrings",
    "title": "MatrixNetworks.is_undirected",
    "category": "function",
    "text": "is_undirected\n\nCheck the matrix associated with a matrix network for symmetry. \n\nInput\n\nA: a matrix network\n\nReturns\n\nbool with true indicating the network is undirected   and the matrix is symmetric\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.largest_component",
    "page": "Docstrings",
    "title": "MatrixNetworks.largest_component",
    "category": "function",
    "text": "LARGEST_COMPONENT\n\nreturn the largest connected component of A.\nAcc = largest_component(A) returns the largest connected component\nof the graph A.  If A is directed, this returns the largest\nstrongly connected component.\n\nAcc = largest_component(A,true) returns the largest connected piece of\na directed graph where connectivity is undirected.  Algorithmically,\nthis takes A, drops the directions, then components the largest component\nand returns just this piece of the original _directed_ network.  So the\noutput Acc is directed in this case.\n\n(Acc,p) = largest_component(A) also returns a logical vector\nindicating which vertices in A were chosen.\n\nFunctions\n\n(Acc,p) = largest_component{T}(A::SparseMatrixCSC{T,Int64})\n(Acc,p) = largest_component{T}(A::SparseMatrixCSC{T,Int64},sym::Bool)\n\nExample\n\nA = load_matrix_network(\"dfs_example\")\n(Acc,p) = largest_component(A)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.lollipop_graph",
    "page": "Docstrings",
    "title": "MatrixNetworks.lollipop_graph",
    "category": "function",
    "text": "lollipop_graph\n\nGenerate a lollipop graph, which consists of a clique with a line tail, so it looks like a lollipop.\n\nFunctions\n\nlollipop_graph(n) generate the graph with an n-node tail and n-node clique\nlollipop_graph(n,m) generate the graph with an n-node tail and m-node clique\nlollipop_graph(n,m,Val{true}) produce and return xy coordinates as well. \n\nExamples\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.mst_prim",
    "page": "Docstrings",
    "title": "MatrixNetworks.mst_prim",
    "category": "function",
    "text": "MST_PRIM\n\ncompute a minimum spanning tree with Prim\'s algorithm.\nT = mst_prim_matrix(A) computes a minimum spanning tree T using Prim\'s algorithm\nfor the spanning tree of a graph with non-negative edge weights.\n\nT = mst_prim_matrix(A,false) produces an MST for just the component at A containing\nvertex 1.  T = mst_prim_matrix(A,0,u) produces the MST for the component\ncontaining vertex u.\n\n(ti,tj,tv,nverts) = mst_prim(A) returns the edges from the matrix and does not\nconvert to a sparse matrix structure.  This saves a bit of work and is\nrequired when there are 0 edge weights.\n\nFunctions\n\n(ti,tj,tv,nverts) = mst_prim(A::MatrixNetwork,full::Bool,u::Int64)\n(ti,tj,tv,nverts) = mst_prim(A::MatrixNetwork)\n(ti,tj,tv,nverts) = mst_prim{T}(A::SparseMatrixCSC{T,Int64},full::Bool,u::Int64)\n(ti,tj,tv,nverts) = mst_prim{T}(A::SparseMatrixCSC{T,Int64})\nT = mstprimmatrix(A::MatrixNetwork,full::Bool,u::Int64) #output modifier\nT = mstprimmatrix(A::MatrixNetwork) #output modifier\nT = mstprimmatrix{T}(A::SparseMatrixCSC{T,Int64},full::Bool,u::Int64) #output modifier\nT = mstprimmatrix{T}(A::SparseMatrixCSC{T,Int64}) #output modifier\n\nExample\n\nA = load_matrix_network(\"airports\")\nA = -A #convert to travel time\nA = max.(A,A\')\nA = sparse(A)\n(ti,tj,tv,nverts) = mst_prim(A)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.pa_edges!",
    "page": "Docstrings",
    "title": "MatrixNetworks.pa_edges!",
    "category": "function",
    "text": "preferential_attachment_graph\n\nGenerate an instance of a preferential attachment graph. This is an undirected graph that is generated as follows:\n\nStart with a k0-node clique. \nAdd n-k0 vertices where     each vertex links to k nodes chosen    based their degree (and repeats    are allowed).\n\nFunctions\n\nThe following functions are synonyms\n\npreferential_attachment_graph\npa_graph\n\nand\n\npreferential_attachment_edges!\npa_edges!\n\nThe computational functions are\n\npa_graph(n,k,k0) Generate a PA graph with a k0 node clique and n total nodes and k edges added per node. This returns a MatrixNetwork type\n\nThe edge functions are\n\npa_edges!(nnew,k,edges) Add new edges to an  existing set by adding nnew nodes to the set of edges where each node picks k edges based on the degrees. The new node ids are based on the largest entry in the edges array. \npa_edges!(nnew,k,edges,n0) Generate a set of edges total` nodes to the set of edges where n0+1 is the starting index for the new set of nodes   \n\nInput\n\nn: the number of nodes in the final graph\nk: the number of links picked by each node when it is added. The actual degree can be larger or smaller than this number because of links from other nodes or duplicates selected. \nk0: The number of nodes in the starting clique. \nedges: A list of edges to be manipulated in the process of \n\ngenerating new edges. \n\nOutput\n\nA matrix network type for the preferential attachment graph.\nedges An updated list of edges. \n\nExample\n\npa_graph(100,5,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.pa_graph",
    "page": "Docstrings",
    "title": "MatrixNetworks.pa_graph",
    "category": "function",
    "text": "preferential_attachment_graph\n\nGenerate an instance of a preferential attachment graph. This is an undirected graph that is generated as follows:\n\nStart with a k0-node clique. \nAdd n-k0 vertices where     each vertex links to k nodes chosen    based their degree (and repeats    are allowed).\n\nFunctions\n\nThe following functions are synonyms\n\npreferential_attachment_graph\npa_graph\n\nand\n\npreferential_attachment_edges!\npa_edges!\n\nThe computational functions are\n\npa_graph(n,k,k0) Generate a PA graph with a k0 node clique and n total nodes and k edges added per node. This returns a MatrixNetwork type\n\nThe edge functions are\n\npa_edges!(nnew,k,edges) Add new edges to an  existing set by adding nnew nodes to the set of edges where each node picks k edges based on the degrees. The new node ids are based on the largest entry in the edges array. \npa_edges!(nnew,k,edges,n0) Generate a set of edges total` nodes to the set of edges where n0+1 is the starting index for the new set of nodes   \n\nInput\n\nn: the number of nodes in the final graph\nk: the number of links picked by each node when it is added. The actual degree can be larger or smaller than this number because of links from other nodes or duplicates selected. \nk0: The number of nodes in the starting clique. \nedges: A list of edges to be manipulated in the process of \n\ngenerating new edges. \n\nOutput\n\nA matrix network type for the preferential attachment graph.\nedges An updated list of edges. \n\nExample\n\npa_graph(100,5,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.pagerank",
    "page": "Docstrings",
    "title": "MatrixNetworks.pagerank",
    "category": "function",
    "text": "pagerank\n\nPageRank is the stationary distribution of a Markov chain defined as follows. The behavior of the chain at state i is: \n\nwith probability lpha, randomly transition to an out-neighbor of the current node (based on a weighted probabilities if the graph has non-negative weights).\nwith probability 1-lpha, jump to a random node chosen anywhere in the network. \nif there are no out-neighbors, then jump anywhere in the network  with equal probability. \n\nThe solution satisfies a linear system of equations. This function will solve that linear system to a 1-norm error of tol where tol is chosen by default to be the machine precision. \n\nThe solution is always a probability distribution.        \n\nFunctions\n\nx = pagerank(A::SparseMatrixCSC{V,Int},alpha::Float64)\nx = pagerank(A::MatrixNetwork{V},alpha::Float64)\nx = pagerank(A,alpha,eps::Float64) specifies solution tolerance too.        \n\nInputs\n\nA: The sparse matrix or matrix network that you wish to use to compute PageRank. In the case of a sparse matrix, it must have non-negative values and the values will impact the  computation as we will compute a stochastic normalization  as part of the algorithm.  \nalpha: the teleportation parameter given above.\ntol: the tolerance, the default choice is machine precision  for floating point, which is more than enough for almost all  applications. \n\nExamples\n\npagerank(A,alpha) \n            # return the standard PageRank vector \n            # with uniform teleportation and alpha=0.85 \n            # computed to machine precision            \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.pagerank_power!",
    "page": "Docstrings",
    "title": "MatrixNetworks.pagerank_power!",
    "category": "function",
    "text": "pagerank_power!\n\nExpert interface\n\nThis function computes the strongly personalized PageRank vector of a column sub-stochastic matrix P.\n\nThis is a powerful internal function and you most likely don\'t want  to use it unless you know what you are doing.  \n\nThis call is duck-typed so that it can work with arbitrary input matrix types as well as arbitrary vectors v. This enables it to be efficient in the case of sparse or dense vectors v.\n\nThe solution returned will satisfy the strongly-personalized PageRank equation to the given tolerance accuracy in the 1-norm. Formally, it\'ll \n\nThis call allocates no extra memory and only uses the memory included with the vectors x and y. \n\nFunctions\n\npagerank_power!{T<Float}!(x::Vector{T}, y::Vector{T},        P, alpha::T, v, tol::T, maxiter::Int, iterfunc::Function) \n\nInputs\n\nx: a vector (of length n, where there are n nodes of the graph) that will store \ny: a vector that is used as part of the matrix-vector multiplication and the iteration procedure. It is just extra memory.\nP: a duck typed matrix to apply the stochastic operator     the type P must support Px and Py    \nalpha: the teleportation parameter, alpha must be between 0 and 1. This is the probability that the model follows the graph (so the problem is hard when alpha is close to 1).\nv: a duck typed vector to apply the personalization       the type v must support x += v where x is a Vector{T}       examples of v include a scalar, a sparsevec, or a Vector{T}\ntol: the solution tolerance in the error 1-norm.\nmaxiter: the maximum number of iterations\niterfunc: a function that will be called on each iteration\n\nReturns\n\nx: The PageRank vector (just another reference to the input x)\n\nExample\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.preferential_attachment_edges!",
    "page": "Docstrings",
    "title": "MatrixNetworks.preferential_attachment_edges!",
    "category": "function",
    "text": "preferential_attachment_graph\n\nGenerate an instance of a preferential attachment graph. This is an undirected graph that is generated as follows:\n\nStart with a k0-node clique. \nAdd n-k0 vertices where     each vertex links to k nodes chosen    based their degree (and repeats    are allowed).\n\nFunctions\n\nThe following functions are synonyms\n\npreferential_attachment_graph\npa_graph\n\nand\n\npreferential_attachment_edges!\npa_edges!\n\nThe computational functions are\n\npa_graph(n,k,k0) Generate a PA graph with a k0 node clique and n total nodes and k edges added per node. This returns a MatrixNetwork type\n\nThe edge functions are\n\npa_edges!(nnew,k,edges) Add new edges to an  existing set by adding nnew nodes to the set of edges where each node picks k edges based on the degrees. The new node ids are based on the largest entry in the edges array. \npa_edges!(nnew,k,edges,n0) Generate a set of edges total` nodes to the set of edges where n0+1 is the starting index for the new set of nodes   \n\nInput\n\nn: the number of nodes in the final graph\nk: the number of links picked by each node when it is added. The actual degree can be larger or smaller than this number because of links from other nodes or duplicates selected. \nk0: The number of nodes in the starting clique. \nedges: A list of edges to be manipulated in the process of \n\ngenerating new edges. \n\nOutput\n\nA matrix network type for the preferential attachment graph.\nedges An updated list of edges. \n\nExample\n\npa_graph(100,5,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.preferential_attachment_graph",
    "page": "Docstrings",
    "title": "MatrixNetworks.preferential_attachment_graph",
    "category": "function",
    "text": "preferential_attachment_graph\n\nGenerate an instance of a preferential attachment graph. This is an undirected graph that is generated as follows:\n\nStart with a k0-node clique. \nAdd n-k0 vertices where     each vertex links to k nodes chosen    based their degree (and repeats    are allowed).\n\nFunctions\n\nThe following functions are synonyms\n\npreferential_attachment_graph\npa_graph\n\nand\n\npreferential_attachment_edges!\npa_edges!\n\nThe computational functions are\n\npa_graph(n,k,k0) Generate a PA graph with a k0 node clique and n total nodes and k edges added per node. This returns a MatrixNetwork type\n\nThe edge functions are\n\npa_edges!(nnew,k,edges) Add new edges to an  existing set by adding nnew nodes to the set of edges where each node picks k edges based on the degrees. The new node ids are based on the largest entry in the edges array. \npa_edges!(nnew,k,edges,n0) Generate a set of edges total` nodes to the set of edges where n0+1 is the starting index for the new set of nodes   \n\nInput\n\nn: the number of nodes in the final graph\nk: the number of links picked by each node when it is added. The actual degree can be larger or smaller than this number because of links from other nodes or duplicates selected. \nk0: The number of nodes in the starting clique. \nedges: A list of edges to be manipulated in the process of \n\ngenerating new edges. \n\nOutput\n\nA matrix network type for the preferential attachment graph.\nedges An updated list of edges. \n\nExample\n\npa_graph(100,5,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.random_edge",
    "page": "Docstrings",
    "title": "MatrixNetworks.random_edge",
    "category": "function",
    "text": "random_edge\n\nIdentify a random edge of a matrix network or sparse matrix.\n\nFunctions\n\nrandom_edge(A::MatrixNetwork) -> (ei,ej,ind)   gets a random edge/non-zero from the matrix\nrandom_edge(A::SparseMatrixCSC) -> (ei,ej,ind)   gets a random non-zero from the matrix\n\nExample\n\nG = lollipop_graph(5,3)\n# count the number of edges we randomly see between the regions\nC = Dict{Symbol,Int}()\nM = zeros(8,8)\nfor i=1:1000000\n  ei,ej = MatrixNetwork.random_edge(G)\n  M[ei,ej] += 1\n  if 1 <= ei <= 5 && 1 <= ej <= 5\n    C[:Stem] = get(C, :Stem, 0) + 1\n  elseif 6 <= ei <= 10 && 6 <= ej <= 10\n    C[:Pop] = get(C, :Pop, 0) + 1  \n  else\n    C[:Bridge] = get(C, :Bridge, 0) + 1  \n  end\nend\n# 4 edges in stem, 3 edges in pop, 1 edge in bridge \n@show C\n@show M\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.roach_graph",
    "page": "Docstrings",
    "title": "MatrixNetworks.roach_graph",
    "category": "function",
    "text": "roach_graph\n\nGenerate a roach graph on 4n vertices which follows the Guattery-Miller  description. The roach graph has a body that consists of 2n vertices which ard two n-vertex line-graphs that have been connected together. The body has two antennae that result from adding an n-vertex line graph  to one vertex on each side. \n\n# the graph looks like\n#\n# (           top body               )   (       top antennae       )    \n#\n# o - o - o - ... n vertices total - o - o - ... n vertices total - 0\n# |   |   |   ...    |   |   |   |   |\n# o - o - o - ... n vertices total - o - o - ... n vertices total - 0\n#\n# (         bottom body              )   (     bottom antennae      )\n#\n# there are 4n vertices and 2(2n-1) + n edges\n\nFunctions\n\nroach_graph(n) -> A::MatrixNetwork\nroach_graph(n, Val{true}) -> (A::MatrixNetwork, Matrix{Float64}) this also returns coordinates for the graph. \n\nExample\n\nA = sparse_transpose(roach_graph(3, Val{true})) # get back the matrix \nL = spdiagm(vec(sum(A,2))) - A\n\n#lams,vecs = eig(full(L))\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.scomponents",
    "page": "Docstrings",
    "title": "MatrixNetworks.scomponents",
    "category": "function",
    "text": "SCOMPONENTS\n\ncompute the strongly connected components of a graph\n\nci=scomponents(A) returns an index for the component number of every \nvertex in the graph A.  The total number of components is maximum(ci).\nIf the input is undirected, then this algorithm outputs just the \nconnected components.  Otherwise, it output the strongly connected components.\n\nThe implementation is from Tarjan\'s 1972 paper: Depth-first search and \nlinear graph algorithms. In SIAM\'s Journal of Computing, 1972, 1, \npp.146-160.\n\nFunctions\n\ncc = scomponents(A::MatrixNetwork)\ncc = scomponents{T}(A::SparseMatrixCSC{T,Int64})\nsci = strong_components_map(A::MatrixNetwork)\nsci = strong_components_map{T}(A::SparseMatrixCSC{T,Int64})\nsc_rich = enrich(cc::Strong_components_output) # check ?enrich for more\n\nExample\n\nA = load_matrix_network(\"cores_example\")\ncc = scomponents(A)\nscomponents(A).number\nscomponents(A).sizes      \nscomponents(A).map  \nstrong_components_map(A)     # if you just want the map\nenrich(scomponents(A)) # produce additional enriched output\n\n# Can work on [ei,ej]\nei = [1;2;3]\nej = [2;4;1]\ncc = scomponents(ei,ej)\n\n# Can work on sparse matrix A\nA = sprand(5,5,0.5)\ncc = scomponents(A)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.seeded_pagerank",
    "page": "Docstrings",
    "title": "MatrixNetworks.seeded_pagerank",
    "category": "function",
    "text": "seeded_pagerank\n\nPageRank is the stationary distribution of a Markov chain defined as follows. The behavior of the chain at state i is: \n\nwith probability lpha, randomly transition to an out-neighbor of the current node (based on a weighted probabilities if the graph has non-negative weights).\nwith probability 1-lpha, jump according to a distribution called the teleportation distribution and given by a vector v. (In the standard case, v is the uniform distribution over nodes, but this is a parameter).\nif there are no out-neighbors, then transition according to the teleportation distribution (this is the strongly-personalized problem).\n\nWhen v is the uniform vector, then we compute the same thing as the PageRank call itself.    \n\nThe solution satisfies a linear system of equations. This function will solve that linear system to a 1-norm error of tol where tol is chosen by default to be the machine precision. \n\nThe solution is always a probability distribution.\n\nFunctions\n\nFor any input, A can be either A::SparseMatrixCSC{V,Int} for some value type V or A::MatrixNetwork{V}\nx = seeded_pagerank(A,alpha::Float64,v::Float64)\nx = seeded_pagerank(A,alpha::Float64,v::Int)\nx = seeded_pagerank(A,alpha::Float64,v::Set{Int})\nx = seeded_pagerank(A,alpha::Float64,v::Dict{Int,Float64})\nx = seeded_pagerank(A,alpha::Float64,v::SparseMatrixCSC{Float64})\nx = seeded_pagerank(A,alpha::Float64,v::SparseVector{Float64})\nx = seeded_pagerank(A,alpha::Float64,v::Vector{Float64})\nx = seeded_pagerank(A,alpha::Float64,v::Vector{Float64})\nx = seeded_pagerank(A,alpha,v,eps::Float64) specifies solution tolerance too.        \n\nInputs\n\nA: The sparse matrix or matrix network that you wish to use to compute PageRank. In the case of a sparse matrix, it must have non-negative values and the values will impact the  computation as we will compute a stochastic normalization  as part of the algorithm.  \nalpha: the teleportation parameter given above.\nv: the teleportation distribution vector. This can be an integer to teleport to a single node, a set to teleport (uniformly) to a set of nodes, a dictionary or sparse vector to weight the teleportation. Or a general dense vector. \ntol: the tolerance that we solve the linear system to (this is an error guarantee)  \n\nExamples\n\nseeded_pagerank(A,alpha,5) \n            # return the seeded PageRank vector \n            # with teleportation to node 5 \n            # computed to machine precision            \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.seeded_stochastic_heat_kernel",
    "page": "Docstrings",
    "title": "MatrixNetworks.seeded_stochastic_heat_kernel",
    "category": "function",
    "text": "seeded_stochastic_heat_kernel\n\nCompute the stochastic heat kernel, the result of x = exp(-t(I - P)) s  where s is a stochastic seed vector and t is a time parameter and P is a column-stochastic or sub-stochastic matrix. \n\nThis function will return a vector x such that $ \\| x - x{\\mbox{exact}} \\|1 \\le $ eps, and this function further guarantees  x_mboxexact - x ge 0.\n\nFunctions\n\nThe input A can be either a A::SparseMatrixCSC{V,Int} or A::MatrixNetwork{V} for some value type V \nseeded_stochastic_heat_kernel(A,t::Float64,s) provides the stochastic seed s in any of the following forms:\nseeded_stochastic_heat_kernel(A,t,s::Float64): s must be the number 1/size(A,1) and this corresponds to using the all-ones vector. \nseeded_stochastic_heat_kernel(A,t,s::Int) use the vector with just a single non-zero\nseeded_stochastic_heat_kernel(A,t,s::Set{Int}) \nseeded_stochastic_heat_kernel(A,t,s::Dict{Int,Float64})\nseeded_stochastic_heat_kernel(A,t,s::SparseMatrixCSC{Float64,Int})\nseeded_stochastic_heat_kernel(A,t,s::SparseVector{Float64,Int})\nseeded_stochastic_heat_kernel(A,t,s::Vector{Float64})      \nseeded_stochastic_heat_kernel(A,t::Float64,s,eps::Float64): specifies  the solution tolerance (default eps=eps(Float64))\n\nInputs\n\n-A: A sparse matrix with non-negative entries or a matrix network object  -t: the value of time in the heat kernel 0 = t -eps: the solution tolerance $ 0 < eps < 1 $ -s: the stochastic seed vector, this will be normalized to be stochastic\n\nReturns\n\n-x: the result of the stochastic heat kernel evaluation\n\nExamples\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.sparse_to_csr",
    "page": "Docstrings",
    "title": "MatrixNetworks.sparse_to_csr",
    "category": "function",
    "text": "SPARSETOCSR\n\nconvert sparse matrix into compressed row storage arrays\nand returns the row pointer (rp), column index (ci) and value index (ai) arrays \nof a compressed sparse representation of the matrix A (or its triplet format storage)\n\nFunctions\n\n(rp,ci,ai,m) = sparsetocsr{T}(A::SparseMatrixCSC{T,Int64})\n(rp,ci,ai,m) = sparsetocsr{T}(nzi::Array{Int64,1},nzj::Array{Int64,1},nzv::Array{T,1}) \n\nExample\n\ni = [1;2;3]\nj = [3;4;4]\nv = [8;9;10]\n(rp,ci,ai,m) = sparse_to_csr(i,j,v)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.sparse_transpose",
    "page": "Docstrings",
    "title": "MatrixNetworks.sparse_transpose",
    "category": "function",
    "text": "Return back an adjacency matrix representation of the transpose. This requires no work. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.spectral_cut",
    "page": "Docstrings",
    "title": "MatrixNetworks.spectral_cut",
    "category": "function",
    "text": "spectral_cut\n\nspectral_cut will produce a spectral cut partition of the graph into two pieces.\n\nSpecial cases\n\nif your graph is disconnected, then we will partition it into the\n\nlargest connected component (chosen arbitrary if there are multiple) and produce a cut of just the largest connected component.\n\nif your graph is a single node, we will partition it into the empty\n\ncut.\n\nOutput\n\nThe output has type SpectralCut We always return the smaller side of the cut in terms of total volume.\n\nInputs\n\nA: The sparse matrix or martrix network that you want to find the spectral cut for.\nchecksym: Should we check symmetry? Don\'t set this to false unless you have checked symmetry in another call. This may go away in future interfaces\nccwarn: Turn off the warning for disconnected graphs. This useful in larger subroutines where this is handled through another mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.stochastic_heat_kernel_series!",
    "page": "Docstrings",
    "title": "MatrixNetworks.stochastic_heat_kernel_series!",
    "category": "function",
    "text": "stochastic_heat_kernel_series!\n\nCompute the stochastic heat kernel, the result of x = exp(-t(I - P)) s  where s is a stochastic seed vector and t is a time parameter and P is a column-stochastic or sub-stochastic matrix. \n\nThis function will return a vector x such that $ \\| x - x{\\mbox{exact}} \\|1 \\le $ eps, and this function further guarantees  x_mboxexact - x ge 0.\n\nThe algorithm is just a direct evaluation of the power series represented by the heat kernel operation.  \n\n** Expert interface, see seeded_stochastic_heat_kernel  for more user-friendly interfaces.**\n\nInputs\n\n-x: The solution vector  -y: An intermediate vector  -z: Another intermediate vector -P: a variable that can be used with AmulB!        in order to apply the stochastic or sub-stochastic matrix       (column) -t: the value of time in the heat kernel 0 = t -eps: the solution tolerance $ 0 < eps < 1 $ -maxiter: the maximum number of series terms to use\n\nReturns\n\n-x: the result of the stochastic heat kernel evaluation\n\nExample\n\n# TODO Show an example of how to use the expert interface\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.stochastic_mult",
    "page": "Docstrings",
    "title": "MatrixNetworks.stochastic_mult",
    "category": "function",
    "text": "stochastic_mult\n\nExpert interface\n\nThis function computes output = A^T (b * d), i.e. the matrix A tranposed times the vector b element-wise multiplied by elements in d. The idea is that d is the inverse of the row-sums of A so that this  operation computes the (column)-stochastic (or sub-stochastic) product output = P b where P_{i,j} = A_{j,i} / $ degree(j).\n\nThis function is used by the StochasticMult operators.  \n\nFunctions\n\nstochastic_mult!!(output::StridedVecOrMat, A::SparseMatrixCSC,        b::StridedVecOrMat, d::StridedVecOrMat) \nstochastic_mult!!(output::StridedVecOrMat, A::MatrixNetwork,        b::StridedVecOrMat, d::StridedVecOrMat)       \n\nInputs\n\noutput: See above \nA: See above\nb: See above\nd: the vector that will be multipled against b in-place \n\nReturns\n\noutput: the output input is returned as well (as well as updated in place)        \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.strong_components_map",
    "page": "Docstrings",
    "title": "MatrixNetworks.strong_components_map",
    "category": "function",
    "text": "Return information on the strongly connected components of a graph that  is the minimum required computation. Example: strong_components_map(MatrixNetwork(sprand(5401)))	\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.sweepcut",
    "page": "Docstrings",
    "title": "MatrixNetworks.sweepcut",
    "category": "function",
    "text": "sweepcut\n\nA sweepcut is an operation that takes an order to the vertices of a graph and evaluates the cut and volume of every partition induced by a prefix of that ordering. That is, if the order of vertices is\n\nv1, v2, v3, ...\n\nthe the sweep cut evaluates\n\ncut({v1}), vol({v1})\ncut({v1,v2}), vol({v1,v2})\ncut({v1,v2,v3}), vol({v1,v2,v3})\n...\n\nwhere cut is the total edge weight that connects vertices in S to the graph. And vol is the total edge weight connecting\n\nFunctions\n\nprofile = sweepcut(A,x::Vector{T}) A standard sweepcut call that will get a sweepcut for a vector where x is sorted to get the order of the vertices (decreasing order). This is useful if you have a vector that should indicate good cuts in the graph, such as the Fiedler vector.\nprofile = sweepcut(A,p,r,totalvol,maxvol) the in-depth call that all others are converted into. We strongly recommend against calling this yourself unless you understand the sweepcut code.\n\nInputs\n\nA: the sparse matrix representing the symmetric graph\nx: A vector scoring each vertex. This will be sorted and      turned into one of the other inputs.\np: a partial permutation vector over the vertices of the graph       This vector needs to list every vertex at most once.       It could be shorter and need not list every vertex.\nr: A general data structure that gives       the rank of an item in the permutation vector       p should be sorted in decreasing order so that       i < j means that r[p[i]] < r[p[j]]\ntotalvol: the total volume of the graph\nmaxvol: the maximum volume of any set considered\n\nReturns\n\nA SweepcutProfile type with all the information computed in the sweepcut. Most likely, you want the result bestset as indicated below.\n\nExample\n\nA = load_matrix_network(\"minnesota\")\nv = fiedler_vector(A)[1] # get the\np = sweepcut(A,v)\nS = bestset(p) # get the bestset from the profile\nT = spectral_cut(A).set # should give you the same set\n# using UnicodePlots; lineplot(p.conductance) # show the conductance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixNetworks.undirected_edges",
    "page": "Docstrings",
    "title": "MatrixNetworks.undirected_edges",
    "category": "function",
    "text": "undirected_edges(A) -> srcs,dsts\n\nProduce lists just for the undirected edges. This assumes you want only those edges where (target >= source). \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MatrixNetworks.Biconnected_components_outputMatrixNetworks.Matching_outputMatrixNetworks.Matching_setupMatrixNetworks.MatrixNetworkMatrixNetworks.MatrixNetworkMetadataMatrixNetworks.MatrixNetworkStochasticMultMatrixNetworks.MatrixNetworksMatrixNetworks.RankedArrayMatrixNetworks.SparseMatrixStochasticMultMatrixNetworks.SpectralCutMatrixNetworks.Strong_components_outputMatrixNetworks.Strong_components_rich_outputMatrixNetworks.SweepcutProfileMatrixNetworks._applyv!MatrixNetworks._check_for_two_distinct_nodesMatrixNetworks._check_negativeMatrixNetworks._chung_lu_dense_undirectedMatrixNetworks._create_stochastic_multMatrixNetworks._densevecMatrixNetworks._havel_hakimiMatrixNetworks._hk_taylor_degreeMatrixNetworks._matrix_network_directMatrixNetworks._noiterfuncMatrixNetworks._personalized_pagerank_validatedMatrixNetworks._secondMatrixNetworks._seeded_heat_kernel_validatedMatrixNetworks._symeigs_smallest_arpackMatrixNetworks.bestsetMatrixNetworks.bfsMatrixNetworks.biconnected_componentsMatrixNetworks.biconnected_components!MatrixNetworks.bipartite_matchingMatrixNetworks.bipartite_matching_indicatorMatrixNetworks.bipartite_matching_primal_dualMatrixNetworks.bipartite_matching_setupMatrixNetworks.bipartite_matching_setup_phase1MatrixNetworks.chung_lu_undirectedMatrixNetworks.clustercoeffsMatrixNetworks.clustercoeffs_phase2MatrixNetworks.corenumsMatrixNetworks.cosineknnMatrixNetworks.cosineknn_internalMatrixNetworks.create_sparseMatrixNetworks.csr_to_sparseMatrixNetworks.csr_to_sparse_matrixMatrixNetworks.dfsMatrixNetworks.dijkstraMatrixNetworks.dijkstra_internalMatrixNetworks.dirclustercoeffsMatrixNetworks.directed_edgesMatrixNetworks.edge_indicatorMatrixNetworks.edge_listMatrixNetworks.empty_graphMatrixNetworks.enrichMatrixNetworks.erdos_renyi_directedMatrixNetworks.erdos_renyi_undirectedMatrixNetworks.erdős_rényi_directedMatrixNetworks.erdős_rényi_undirectedMatrixNetworks.evalMatrixNetworks.fiedler_vectorMatrixNetworks.floydwarshallMatrixNetworks.floydwarshall_phase1MatrixNetworks.floydwarshall_phase2MatrixNetworks.generalized_preferential_attachment_edges!MatrixNetworks.generalized_preferential_attachment_graphMatrixNetworks.gpa_edges!MatrixNetworks.gpa_graphMatrixNetworks.havel_hakimi_graphMatrixNetworks.includeMatrixNetworks.is_connectedMatrixNetworks.is_emptyMatrixNetworks.is_graphical_sequenceMatrixNetworks.is_undirectedMatrixNetworks.largest_componentMatrixNetworks.load_matrix_networkMatrixNetworks.load_matrix_network_allMatrixNetworks.load_matrix_network_metadataMatrixNetworks.lollipop_graphMatrixNetworks.matrix_network_datasetsMatrixNetworks.mst_primMatrixNetworks.mst_prim_matrixMatrixNetworks.pa_edges!MatrixNetworks.pa_graphMatrixNetworks.pagerankMatrixNetworks.pagerank_power!MatrixNetworks.personalized_pagerankMatrixNetworks.personalized_pagerank!MatrixNetworks.preferential_attachment_edges!MatrixNetworks.preferential_attachment_graphMatrixNetworks.random_edgeMatrixNetworks.readSMATMatrixNetworks.rewire_graphMatrixNetworks.roach_graphMatrixNetworks.scomponentsMatrixNetworks.seeded_pagerankMatrixNetworks.seeded_stochastic_heat_kernelMatrixNetworks.seeded_stochastic_heat_kernel!MatrixNetworks.showMatrixNetworks.sparse_to_csrMatrixNetworks.sparse_transposeMatrixNetworks.spectral_cutMatrixNetworks.stochastic_heat_kernel_series!MatrixNetworks.stochastic_multMatrixNetworks.stochastic_mult!MatrixNetworks.strong_components_mapMatrixNetworks.sweepcutMatrixNetworks.undirected_edgesMatrixNetworks.unique_edge_sample_undirected"
},

]}
