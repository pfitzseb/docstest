var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleWeightedGraphs-1",
    "page": "Readme",
    "title": "SimpleWeightedGraphs",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)Weighted Graphs for LightGraphs.jl.Usage:using LightGraphs, SimpleWeightedGraphs\n\ng = SimpleWeightedGraph(3)  # or use `SimpleWeightedDiGraph` for directed graphs\nadd_edge!(g, 1, 2, 0.5)\nadd_edge!(g, 2, 3, 0.8)\nadd_edge!(g, 1, 3, 2.0)\n\n# find the shortest path from vertex 1 to vertex 3 taking weights into account.\nenumerate_paths(dijkstra_shortest_paths(g, 1), 3)\n3-element Array{Int64,1}:\n 1\n 2\n 3\n \n# reweight the edge from 1 to 2\nadd_edge!(g, 1, 2, 1.6)\n\n# rerun the shortest path calculation from 1 to 3\nenumerate_paths(dijkstra_shortest_paths(g, 1), 3)\n2-element Array{Int64,1}:\n 1\n 3\n\n# it\'s possible to build the graph from arrays of sources, destinations and weights\nsources = [1,2,1]\ndestinations = [2,3,3]\nweights = [0.5, 0.8, 2.0]\ng = SimpleWeightedGraph(sources, destinations, weights)\n\n# the combine keyword handles repeated pairs (sum by default)\ng = SimpleWeightedGraph([1,2,1], [2,1,2], [1,1,1]; combine = +)\ng.weights[2,1] == g.weights[1,2] == 3 # true\n\n# WARNING: unexpected results might occur with non-associative combine functions\n\n# notice that weights are indexed by [destination, source]\ns = SimpleWeightedDiGraph([1,2,1], [2,1,2], [1,1,1]; combine = +)\ns.weights[1,2] == 1 # true\ns.weights[2,1] == 2 # truePlease pay attention to the fact that zero-weight edges are discarded by add_edge!.  This is due to the way the graph is stored (a sparse matrix). A possible workaround  is to set a very small weight instead. "
},

{
    "location": "autodocs/#SimpleWeightedGraphs.AbstractSimpleWeightedGraph",
    "page": "Docstrings",
    "title": "SimpleWeightedGraphs.AbstractSimpleWeightedGraph",
    "category": "type",
    "text": "AbstractSimpleWeightedGraph\n\nAn abstract type representing a simple graph structure. AbstractSimpleWeightedGraphs must have the following elements:\n\nweightmx::AbstractSparseMatrix{Real}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleWeightedGraphs.SimpleWeightedDiGraph",
    "page": "Docstrings",
    "title": "SimpleWeightedGraphs.SimpleWeightedDiGraph",
    "category": "type",
    "text": "SimpleWeightedDiGraph{T, U}\n\nA type representing a directed graph with weights of type U.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleWeightedGraphs.SimpleWeightedGraph",
    "page": "Docstrings",
    "title": "SimpleWeightedGraphs.SimpleWeightedGraph",
    "category": "type",
    "text": "SimpleWeightedGraph{T, U}\n\nA type representing an undirected graph with weights of type U.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleWeightedGraphs.loadswg_mult",
    "page": "Docstrings",
    "title": "SimpleWeightedGraphs.loadswg_mult",
    "category": "function",
    "text": "loadswg_mult(io)\n\nReturn a dictionary of (name=>graph) loaded from IO stream io.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleWeightedGraphs.saveswg",
    "page": "Docstrings",
    "title": "SimpleWeightedGraphs.saveswg",
    "category": "function",
    "text": "saveswg(io, g, gname)\n\nWrite a graph g with name gname in a proprietary format to the IO stream designated by io. Return 1 (number of graphs written).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleWeightedGraphs.saveswg_mult",
    "page": "Docstrings",
    "title": "SimpleWeightedGraphs.saveswg_mult",
    "category": "function",
    "text": "saveswg_mult(io, graphs)\n\nWrite a dictionary of (name=>graph) to an IO stream io, with default GZip compression. Return number of graphs written.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleWeightedGraphs.AbstractSimpleWeightedEdgeSimpleWeightedGraphs.AbstractSimpleWeightedGraphSimpleWeightedGraphs.FIXEDSTRSimpleWeightedGraphs.SWGFormatSimpleWeightedGraphs.SWGHeaderSimpleWeightedGraphs.SimpleWeightedDiGraphSimpleWeightedGraphs.SimpleWeightedDiGraphEdgeSimpleWeightedGraphs.SimpleWeightedEdgeSimpleWeightedGraphs.SimpleWeightedGraphSimpleWeightedGraphs.SimpleWeightedGraphEdgeSimpleWeightedGraphs.SimpleWeightedGraphsSimpleWeightedGraphs.WDiGraphSimpleWeightedGraphs.WGraphSimpleWeightedGraphs._ccSimpleWeightedGraphs._parse_headerSimpleWeightedGraphs._swg_read_one_graphSimpleWeightedGraphs._swg_skip_one_graphSimpleWeightedGraphs.evalSimpleWeightedGraphs.get_weightSimpleWeightedGraphs.includeSimpleWeightedGraphs.loadswgSimpleWeightedGraphs.loadswg_multSimpleWeightedGraphs.saveswgSimpleWeightedGraphs.saveswg_multSimpleWeightedGraphs.weightSimpleWeightedGraphs.weighttype"
},

]}
