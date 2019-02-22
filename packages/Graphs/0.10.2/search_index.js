var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Graphs.jl-1",
    "page": "Readme",
    "title": "Graphs.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: Graphs) (Image: Graphs) (Image: Graphs)Graphs.jl is a Julia package that provides graph types and algorithms. The design of this package is inspired by the Boost Graph Library (e.g. using standardized generic interfaces), while taking advantage of Julia\'s language features (e.g. multiple dispatch). This library allows storing of own information in the graph structure – useful in many cases.Note: as of 2016, this package\'s original author is no longer actively maintaining it, but there are several active users in the community. We\'ll engage as best we can, and feel free to open issues here to improve this library. There is a sister library, LightGraphs, focused on a slightly different set of use cases."
},

{
    "location": "#Main-Features-1",
    "page": "Readme",
    "title": "Main Features",
    "category": "section",
    "text": "An important aspect of Graphs.jl is the generic abstraction of graph concepts expressed via standardized interfaces, which allows access to a graph\'s structure while hiding the implementation details. This encourages reuse of data structures and algorithms. In particular, one can write generic graph algorithms that can be applied to different graph types as long as they implement the required interface.In addition to the generic abstraction, there are other important features:A variety of graph types tailored to different purposes\ngeneric adjacency list\ngeneric incidence list\na simple graph type with compact and efficient representation\nan extended graph type that supports labels and attributes\nA collection of graph algorithms:\ngraph traversal with visitor support: BFS, DFS\ncycle detection\nconnected components\ntopological sorting\nshortest paths: Dijkstra, Floyd-Warshall, A*\nminimum spanning trees: Prim, Kruskal\nmaximal cliques\nrandom graph generation: Erdős–Rényi, Watts-Strogatz (see the RandomGraphs.jl package for more random graph models)\nmore algorithms are being implemented\nMatrix-based characterization: adjacency matrix, weight matrix, Laplacian matrix\nAll data structures and algorithms are implemented in pure Julia, and thus they are portable.\nWe paid special attention to the runtime performance. Many of the algorithms are very efficient. For example, a benchmark shows that it takes about 15 milliseconds to run the Dijkstra\'s algorithm over a graph with 10 thousand vertices and 1 million  edges on a macbook pro."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Please refer to Graphs.jl Documentation for latest documentation."
},

{
    "location": "autodocs/#Graphs.in_neighbors",
    "page": "Docstrings",
    "title": "Graphs.in_neighbors",
    "category": "function",
    "text": "Find neighbors connected by directed edge towards vert.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Graphs.@graph_implementsGraphs.@graph_requiresGraphs.AStarGraphs.AbstractDijkstraVisitorGraphs.AbstractEdgePropertyInspectorGraphs.AbstractGraphGraphs.AbstractGraphVisitAlgorithmGraphs.AbstractGraphVisitorGraphs.AbstractMASVisitorGraphs.AbstractPrimVisitorGraphs.AdjacencyListGraphs.AttributeDictGraphs.AttributeEdgePropertyInspectorGraphs.BellmanFordStatesGraphs.BreadthFirstGraphs.ConstantEdgePropertyInspectorGraphs.DFSCyclicTestVisitorGraphs.DepthFirstGraphs.DijkstraHEntryGraphs.DijkstraStatesGraphs.EdgeGraphs.EdgeListGraphs.ExEdgeGraphs.ExVertexGraphs.GDistanceVisitorGraphs.GenericAdjacencyListGraphs.GenericEdgeListGraphs.GenericGraphGraphs.GenericIncidenceListGraphs.GraphGraphs.GraphsGraphs.IEdgeGraphs.IncidenceDictGraphs.IncidenceListGraphs.KeyVertexGraphs.LogDijkstraVisitorGraphs.LogGraphVisitorGraphs.LogPrimVisitorGraphs.MASVisitorGraphs.MaximumAdjacencyGraphs.MinCutVisitorGraphs.NegativeCycleErrorGraphs.PrimHEntryGraphs.PrimStatesGraphs.PrimVisitorGraphs.ProvidedVertexTypeGraphs.ReindexedVecGraphs.SimpleAdjacencyListGraphs.SimpleEdgeListGraphs.SimpleGraphGraphs.SimpleIncidenceListGraphs.SourceIteratorGraphs.TargetIteratorGraphs.TarjanVisitorGraphs.TopologicalSortVisitorGraphs.TrivialDijkstraVisitorGraphs.TrivialGraphVisitorGraphs.TrivialPrimVisitorGraphs.VectorEdgePropertyInspectorGraphs.VectorIncidenceListGraphs.VertexListVisitorGraphs.WeightedEdgeGraphs._GenEdgeWeightGraphs._GenUnitGraphs._graph_implements_codeGraphs._graph_requires_codeGraphs._make_simple_undirected_graphGraphs.add_edge!Graphs.add_vertex!Graphs.adjacency_matrixGraphs.adjacency_matrix_sparseGraphs.adjlistGraphs.attributesGraphs.bellman_ford_shortest_pathsGraphs.bellman_ford_shortest_paths!Graphs.breadth_first_visit_impl!Graphs.close_vertex!Graphs.collect_edgesGraphs.collect_weighted_edgesGraphs.connected_componentsGraphs.create_bellman_ford_statesGraphs.create_dijkstra_statesGraphs.create_prim_statesGraphs.default_prim_visitorGraphs.depth_first_visit_impl!Graphs.dijkstra_shortest_pathsGraphs.dijkstra_shortest_paths!Graphs.dijkstra_shortest_paths_withlogGraphs.discover_vertex!Graphs.distance_matrixGraphs.edge_indexGraphs.edge_opGraphs.edge_propertyGraphs.edge_property_requirementGraphs.edge_typeGraphs.edgelistGraphs.edgesGraphs.enumerate_indicesGraphs.enumerate_pathsGraphs.erdos_renyi_graphGraphs.evalGraphs.examine_edge!Graphs.examine_neighbor!Graphs.floyd_warshallGraphs.floyd_warshall!Graphs.gdistancesGraphs.gdistances!Graphs.graphGraphs.graph_concept_symbolsGraphs.graph_type_stringGraphs.has_negative_edge_cycleGraphs.implements_adjacency_listGraphs.implements_adjacency_matrixGraphs.implements_bidirectional_adjacency_listGraphs.implements_bidirectional_incidence_listGraphs.implements_edge_listGraphs.implements_edge_mapGraphs.implements_incidence_listGraphs.implements_vertex_listGraphs.implements_vertex_mapGraphs.in_degreeGraphs.in_edgesGraphs.in_neighborsGraphs.incdictGraphs.inclistGraphs.includeGraphs.include_vertex!Graphs.init_distancematGraphs.initialize_colormapGraphs.intrangeGraphs.is_directedGraphs.is_mutableGraphs.isnzGraphs.kruskal_minimum_spantreeGraphs.kruskal_selectGraphs.laplacian_matrixGraphs.laplacian_matrix_sparseGraphs.make_edgeGraphs.make_vertexGraphs.matrix_from_adjpairsGraphs.matrix_from_adjpairs!Graphs.matrix_from_edgesGraphs.matrix_from_edges!Graphs.maximal_cliquesGraphs.maximum_adjacency_visitGraphs.maximum_adjacency_visit_impl!Graphs.min_cutGraphs.moebius_kantor_graphGraphs.multivecsGraphs.num_edgesGraphs.num_verticesGraphs.open_vertex!Graphs.out_degreeGraphs.out_edgesGraphs.out_neighborsGraphs.plotGraphs.prim_minimum_spantreeGraphs.prim_minimum_spantree!Graphs.prim_minimum_spantree_withlogGraphs.process_neighbors!Graphs.revedgeGraphs.set_source!Graphs.shortest_pathGraphs.show_detailsGraphs.simple_adjlistGraphs.simple_bull_graphGraphs.simple_chvatal_graphGraphs.simple_complete_graphGraphs.simple_cubical_graphGraphs.simple_desargues_graphGraphs.simple_diamond_graphGraphs.simple_dodecahedral_graphGraphs.simple_edgelistGraphs.simple_frucht_graphGraphs.simple_graphGraphs.simple_heawood_graphGraphs.simple_house_graphGraphs.simple_house_x_graphGraphs.simple_icosahedral_graphGraphs.simple_inclistGraphs.simple_krackhardt_kite_graphGraphs.simple_octahedral_graphGraphs.simple_pappus_graphGraphs.simple_path_graphGraphs.simple_petersen_graphGraphs.simple_sedgewick_maze_graphGraphs.simple_star_graphGraphs.simple_tetrahedral_graphGraphs.simple_truncated_cube_graphGraphs.simple_truncated_tetrahedron_graphGraphs.simple_tutte_graphGraphs.simple_wheel_graphGraphs.sourceGraphs.sparse2adjacencylistGraphs.sparse_matrix_from_adjpairsGraphs.sparse_matrix_from_edgesGraphs.strongly_connected_componentsGraphs.strongly_connected_components_recursiveGraphs.targetGraphs.test_cyclic_by_dfsGraphs.to_dotGraphs.to_dot_graphGraphs.topological_sort_by_dfsGraphs.traverse_graphGraphs.traverse_graph_withlogGraphs.update_vertex!Graphs.vertex_indexGraphs.vertex_typeGraphs.verticesGraphs.vertices_specificGraphs.visited_verticesGraphs.watts_strogatz_graphGraphs.weight_matrixGraphs.weight_matrix_sparse"
},

]}
