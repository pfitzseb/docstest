var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Clustering.jl-1",
    "page": "Readme",
    "title": "Clustering.jl",
    "category": "section",
    "text": "This package provides a set of algorithms for data clustering.(Image: 0.6) (Image: 0.7) (Image: 1.0)(Image: Travis) (Image: Coveralls)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Clustering\")"
},

{
    "location": "#Functionalities-1",
    "page": "Readme",
    "title": "Functionalities",
    "category": "section",
    "text": ""
},

{
    "location": "#Clustering-Algorithms-1",
    "page": "Readme",
    "title": "Clustering Algorithms",
    "category": "section",
    "text": "K-means\nK-medoids\nAffinity Propagation\nDensity-based spatial clustering of applications with noise (DBSCAN)\nMarkov Clustering Algorithm (MCL)\nFuzzy C-Means Clustering\nHierarchical Clustering\nSingle Linkage\nAverage Linkage\nComplete Linkage\nWard\'s Linkage"
},

{
    "location": "#Clustering-Validation-1",
    "page": "Readme",
    "title": "Clustering Validation",
    "category": "section",
    "text": "Silhouettes\nVariation of Information\nRand index\nV-Measure"
},

{
    "location": "#Resources-1",
    "page": "Readme",
    "title": "Resources",
    "category": "section",
    "text": "Documentation: http://clusteringjl.readthedocs.org/en/latest/"
},

{
    "location": "autodocs/#Clustering.AverageDistance",
    "page": "Docstrings",
    "title": "Clustering.AverageDistance",
    "category": "type",
    "text": "Average distance between a pair of points from each clusters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.Hclust",
    "page": "Docstrings",
    "title": "Clustering.Hclust",
    "category": "type",
    "text": "Hierarchical clustering of the data returned by hclust(). The data hierarchy is defined by the merges matrix:\n\neach row specifies which subtrees (referenced by their IDs) are merged into a higher-level subtree\nnegative subtree id denotes leaf node and corresponds to the datapoint at position -id\npositive id denotes nontrivial subtree: the row merges[id, :] specifies its left and right subtrees, and heights[id] – its height.\n\nThis type mostly follows R\'s hclust class.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.MCLResult",
    "page": "Docstrings",
    "title": "Clustering.MCLResult",
    "category": "type",
    "text": "struct MCLResult <: ClusteringResult\n\nResult returned by mcl().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.MaximumDistance",
    "page": "Docstrings",
    "title": "Clustering.MaximumDistance",
    "category": "type",
    "text": "Maximum distance between a pair of point from each clusters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.MinimalDistance",
    "page": "Docstrings",
    "title": "Clustering.MinimalDistance",
    "category": "type",
    "text": "Distance between the clusters is the minimal distance between any pair of their points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.ReducibleMetric",
    "page": "Docstrings",
    "title": "Clustering.ReducibleMetric",
    "category": "type",
    "text": "Base type for reducible Lance–Williams cluster metrics.\n\nThe metric d is called reducible if for any clusters A, B and C and some ρ > 0 s.t.\n\nd(A, B) < ρ, d(A, C) > ρ, d(B, C) > ρ\n\nit follows that\n\nd(A∪B, C) > ρ\n\nIf the cluster metrics belongs to Lance-Williams family, there is an efficient formula that defines d(A∪B, C) using d(A, C), d(B, C) and d(A, B).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.WardDistance",
    "page": "Docstrings",
    "title": "Clustering.WardDistance",
    "category": "type",
    "text": "Ward distance between the two clusters A and B is the amount by which merging the two clusters into a single larger cluster A∪B would increase the average squared distance of a point to its cluster centroid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering._dbscan",
    "page": "Docstrings",
    "title": "Clustering._dbscan",
    "category": "function",
    "text": "An implementation of DBSCAN algorithm that keeps track of both the core and boundary points \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.accept_cluster!",
    "page": "Docstrings",
    "title": "Clustering.accept_cluster!",
    "category": "function",
    "text": "accept_cluster!(clusters, core_selection, cluster_selection)\n\nAccept cluster and update the clusters list\n\nInput\n\nclusters :: Vector{DbscanCluster}: a list of the accepted clusters\ncore_selection :: Vector{Bool}: selection of the core points of the cluster\ncluster_selection :: Vector{Bool}: selection of all the cluster points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.dbscan",
    "page": "Docstrings",
    "title": "Clustering.dbscan",
    "category": "function",
    "text": "dbscan(points, radius ; leafsize = 20, min_neighbors = 1, min_cluster_size = 1) -> clusters\n\nCluster points using the DBSCAN (density-based spatial clustering of applications with noise) algorithm.\n\nArguments\n\npoints: matrix of points\nradius::Real: query radius\n\nKeyword Arguments\n\nleafsize::Int: number of points binned in each leaf node in the KDTree\nmin_neighbors::Int: minimum number of neighbors to be a core point\nmin_cluster_size::Int: minimum number of points to be a valid cluster\n\nOutput\n\nVector{DbscanCluster}: an array of clusters with the id, size core indices and boundary indices\n\nExample:\n\npoints = randn(3, 10000)\nclusters = dbscan(points, 0.05, min_neighbors = 3, min_cluster_size = 20) # clusters with less than 20 points will be discarded\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.mcl",
    "page": "Docstrings",
    "title": "Clustering.mcl",
    "category": "function",
    "text": "mcl(adj::Matrix; [keyword arguments])::MCLResult\n\nIdentify clusters in the weighted graph using Markov Clustering Algorithm (MCL).\n\nArguments\n\nadj::Matrix{Float64}: adjacency matrix that defines the weighted graph to cluster\nadd_loops::Bool: whether edges of weight 1.0 from the node to itself should be appended to the graph (enabled by default)\nexpansion::Number: MCL expansion constant (2)\ninflation::Number: MCL inflation constant (2.0)\nsave_final_matrix::Bool: save final equilibrium state in the result, otherwise leave it empty; disabled by default, could be useful if MCL doesn\'t converge\nmax_iter::Integer: max number of MCL iterations\ntol::Number: MCL adjacency matrix convergence threshold\nprune_tol::Number: pruning threshold\ndisplay::Symbol: :none for no output or :verbose for diagnostic messages\n\nSee original MCL implementation.\n\nRef: Stijn van Dongen, \"Graph clustering by flow simulation\", 2001\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.silhouettes",
    "page": "Docstrings",
    "title": "Clustering.silhouettes",
    "category": "function",
    "text": "silhouettes(assignments::AbstractVector, [counts,] dists)\nsilhouettes(clustering::ClusteringResult, dists)\n\nCompute silhouette values for individual points w.r.t. given clustering.\n\nassignments the vector of point assignments (cluster indices)\ncounts the optional vector of cluster sizes (how many points assigned to each cluster; should match assignments)\nclustering the output of some clustering method\ndists point×point pairwise distance matrix\n\nReturns a vector of silhouette values for each individual point.\n\nmean(silhouettes(...)) could be used as a measure of clustering quality; higher values indicate better separation of clusters w.r.t. distances provided in dists.\n\nReferences\n\nSilhouette Wikipedia page.\nPeter J. Rousseeuw (1987). \"Silhouettes: a Graphical Aid to the Interpretation and Validation of Cluster Analysis\". Computational and Applied Mathematics. 20: 53–65.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.update_exploration_list!",
    "page": "Docstrings",
    "title": "Clustering.update_exploration_list!",
    "category": "function",
    "text": "update_exploration_list!(adj_list, exploration_list, visited)\n\nUpdate the queue for expanding the cluster\n\nInput\n\nadj_list :: Vector{Int}: indices of the neighboring points\nexploration_list :: Vector{Int}: the indices that  will be explored in the future\nvisited :: Vector{Bool}: a flag to indicate whether a point has been explored already\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clustering.vmeasure",
    "page": "Docstrings",
    "title": "Clustering.vmeasure",
    "category": "function",
    "text": "vmeasure(assign1, assign2; β = 1.0)\n\nV-measure between two clustering assignments.\n\nassign1 and assign2 can be either ClusteringResult objects or assignments vectors (AbstractVector{<:Integer}).\n\nThe β parameter defines trade-off between homogeneity and completeness:\n\nif β is greater than 1, completeness is weighted more strongly,\nif β is less than 1, homogeneity is weighted more strongly.\n\nRef: Andrew Rosenberg and Julia Hirschberg, 2007. \"V-Measure: A conditional entropy-based external cluster evaluation measure\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Clustering.AffinityPropResultClustering.AverageDistanceClustering.ClusteringClustering.ClusteringResultClustering.DbscanClusterClustering.DbscanResultClustering.FuzzyCMeansResultClustering.HclustClustering.HclustMergesClustering.HclustTreesClustering.KmCentralityAlgClustering.KmeansResultClustering.KmedoidsResultClustering.KmppAlgClustering.MCLResultClustering.MaximumDistanceClustering.MinimalDistanceClustering.RandSeedAlgClustering.ReducibleMetricClustering.SeedingAlgorithmClustering.WardDistanceClustering._affinitypropClustering._afp_compute_a!Clustering._afp_compute_r!Clustering._afp_count_exemplarsClustering._afp_dampen_update!Clustering._afp_default_dampClustering._afp_default_displayClustering._afp_default_maxiterClustering._afp_default_tolClustering._afp_extract_exemplarsClustering._afp_get_assignmentsClustering._dbs_expand_cluster!Clustering._dbs_region_queryClustering._dbscanClustering._fcmeans_default_displayClustering._fcmeans_default_maxiterClustering._fcmeans_default_tolClustering._find_medoidClustering._fuzzy_cmeansClustering._isrorderedClustering._kmeans!Clustering._kmeans_default_displayClustering._kmeans_default_initClustering._kmeans_default_maxiterClustering._kmeans_default_tolClustering._kmed_default_displayClustering._kmed_default_initClustering._kmed_default_maxiterClustering._kmed_default_tolClustering._kmed_update_assignments!Clustering._kmedoids!Clustering._mcl_clustersClustering._mcl_el_inflateClustering._mcl_expandClustering._mcl_inflate!Clustering._mcl_prune!Clustering._vmeasureClustering.accept_cluster!Clustering.affinity_propagationClustering.affinitypropClustering.assertdistancematrixClustering.assignmentsClustering.check_seeding_argsClustering.cluster_elemsClustering.cluster_sizeClustering.conv_weightsClustering.copyseedsClustering.copyseeds!Clustering.countsClustering.cutreeClustering.dbscanClustering.display_levelClustering.evalClustering.fuzzy_cmeansClustering.hclustClustering.hclust_minimumClustering.hclust_n3Clustering.hclust_nnClustering.hclust_nn_lwClustering.hclust_permClustering.heightClustering.includeClustering.initial_medoidsClustering.initseedsClustering.initseeds!Clustering.initseeds_by_costsClustering.initseeds_by_costs!Clustering.kmeansClustering.kmeans!Clustering.kmeans_optsClustering.kmeanspp_initialize!Clustering.kmedoidsClustering.kmedoids!Clustering.kmppClustering.kmpp_by_costsClustering.mclClustering.merge_clusters!Clustering.merge_trees!Clustering.nclustersClustering.nearest_neighborClustering.nmergesClustering.nnodesClustering.ntreesClustering.printupperClustering.push_merge!Clustering.randindexClustering.randseed_initialize!Clustering.repick_unused_centersClustering.rorder!Clustering.sampleClustering.sample!Clustering.seeding_algorithmClustering.sil_aggregate_distsClustering.silhouettesClustering.slicemaximumClustering.slicemeanClustering.sliceminimumClustering.tree_elemsClustering.tree_sizeClustering.update!Clustering.update_assignments!Clustering.update_centers!Clustering.update_distance_after_merge!Clustering.update_exploration_list!Clustering.update_weights!Clustering.updatemin!Clustering.varinfoClustering.vmeasure"
},

]}
