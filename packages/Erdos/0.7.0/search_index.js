var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Erdos-1",
    "page": "Readme",
    "title": "Erdos",
    "category": "section",
    "text": "[![][docs-latest-img]][docs-latest-url] [![][codecov-img]][codecov-url] [![][travis-img]][travis-url] [![][pkg-0.7-img]][pkg-0.7-url][pkg-0.6-img]: http://pkg.julialang.org/badges/Erdos_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=Erdos[pkg-0.7-img]: http://pkg.julialang.org/badges/Erdos_0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=Erdos[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://carlolucibello.github.io/Erdos.jl/latest[travis-img]: https://travis-ci.org/CarloLucibello/Erdos.jl.svg?branch=master [travis-url]: https://travis-ci.org/CarloLucibello/Erdos.jl[codecov-img]: https://codecov.io/gh/CarloLucibello/Erdos.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/CarloLucibello/Erdos.jlA graph library entirely written in Julia. Install it withjulia> Pkg.add(\"Erdos\")Erdos defines some types associated to graph mathematical structures and implements a huge number of algorithms to work with them. Moreover edge and vertex properties can be internally stored in some of the graph types (we call them networks) and read/written in most common graph formats. Custom graphs and networks can be defined inheriting from Erdos\' abstract types.Take a look at the companion package ErdosExtras for additional algorithms."
},

{
    "location": "#Licence-and-Credits-1",
    "page": "Readme",
    "title": "Licence and Credits",
    "category": "section",
    "text": "Erdos is released under MIT License. Graphs stored in the datasets directory are released under GPLv3 License.Huge credit goes to the contributors of LightGraphs.jl, from which this library is derived. Also thanks to Tiago de Paula Peixoto and his Python library graph-tool for inspiration and for the graphs in datasets."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Refer to the documentation to explore all the features of Erdos. Here is a comprehensive list of the implemente algorithms. (EE) denotes algorithms in the companion package ErdosExtras.core functions: vertices and edges addition and removal, degree (in/out/all), neighbors (in/out/all)\nmaps dictionary like types to store properties associated to vertices and edges\nnetworks store vertex/edge/graph properties (maps) inside the graph itself\nconnectivity: strongly- and weakly-connected components, bipartite checks, condensation, attracting components, neighborhood, k-core\noperators: complement, reverse, reverse!, union, join, intersect, difference, symmetric difference, blockdiag, induced subgraphs, products (cartesian/scalar)\nshortest paths: Dijkstra, Dijkstra with predecessors, Bellman-Ford, Floyd-Warshall, A*\ngraph datasets: A collection of real world graphs (e.g. Zachary\'s karate club)\ngraph generators: notorious graphs, euclidean graphs and random graphs (Erdős–Rényi, Watts-Strogatz, random regular, arbitrary degree sequence, stochastic block model)\nI/O formats: graphml, gml, gexf, dot, net, gt. For some of these formats vertex/edge/graph properties can be read and written.\ncentrality: betweenness, closeness, degree, pagerank, Katz\ntraversal operations: cycle detection, BFS and DFS DAGs, BFS and DFS traversals with visitors, DFS topological sort, maximum adjacency / minimum cut, multiple random walks\nflow operations: maximum flow, minimum s-t cut\nmatching: minimum weight matching on arbitrary graphs (EE), minimum b-matching (EE) \ntravelling salesman problem: a TSP solver based on linear programming (EE) \ndismantling: collective influencer heuristic\nclique enumeration: maximal cliques\nlinear algebra / spectral graph theory: adjacency matrix, Laplacian matrix, non-backtracking matrix\ncommunity: modularity, community detection, core-periphery, clustering coefficients\ndistance within graphs: eccentricity, diameter, periphery, radius, center\ndistance between graphs: spectraldistance, editdistance"
},

{
    "location": "autodocs/#Erdos.ADiGraph",
    "page": "Docstrings",
    "title": "Erdos.ADiGraph",
    "category": "type",
    "text": "abstract ADiGraph\n\nAbstract directed graph type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.ADiNetwork",
    "page": "Docstrings",
    "title": "Erdos.ADiNetwork",
    "category": "type",
    "text": "abstract type ADiNetwork <: ADiGraph end\n\nAn abstract directed graph with the additional possibility to attach properties to vertices and edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.AEdge",
    "page": "Docstrings",
    "title": "Erdos.AEdge",
    "category": "type",
    "text": "abstract type AEdge end\n\nAn abstract edge type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.AEdgeMap",
    "page": "Docstrings",
    "title": "Erdos.AEdgeMap",
    "category": "type",
    "text": "abstract type AEdgeMap{T} end\n\nType representing an abstract edge map with value type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.AGraph",
    "page": "Docstrings",
    "title": "Erdos.AGraph",
    "category": "type",
    "text": "abstract type AGraph end\n\nAbstract undirected graph type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.AGraphOrDiGraph",
    "page": "Docstrings",
    "title": "Erdos.AGraphOrDiGraph",
    "category": "constant",
    "text": "const AGraphOrDiGraph = Union{AGraph, ADiGraph}\n\nUnion of AGraph and ADiGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.AIndexedEdge",
    "page": "Docstrings",
    "title": "Erdos.AIndexedEdge",
    "category": "type",
    "text": "abstract type AIndexedEdge <: AEdge end\n\nEdge types with unique indexes, accessed by idx\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.ANetwork",
    "page": "Docstrings",
    "title": "Erdos.ANetwork",
    "category": "type",
    "text": "abstract type ANetwork <: AGraph end\n\nAn abstract graph with the additional possibility to attach properties to vertices and edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.AVertexMap",
    "page": "Docstrings",
    "title": "Erdos.AVertexMap",
    "category": "type",
    "text": "abstract type AVertexMap{T} end\n\nType representing an abstract vertex map with value type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.AbstractFlowAlgorithm",
    "page": "Docstrings",
    "title": "Erdos.AbstractFlowAlgorithm",
    "category": "type",
    "text": "abstract type that allows users to pass in their preferred Algorithm\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.AbstractMultirouteFlowAlgorithm",
    "page": "Docstrings",
    "title": "Erdos.AbstractMultirouteFlowAlgorithm",
    "category": "type",
    "text": "abstract type that allows users to pass in their preferred Algorithm\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.BinaryTree",
    "page": "Docstrings",
    "title": "Erdos.BinaryTree",
    "category": "function",
    "text": "BinaryTree(levels, G=Graph)\n\nCreates a binary tree with k-levels vertices are numbered 1:2^levels-1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.BoundedMinkowskiCost",
    "page": "Docstrings",
    "title": "Erdos.BoundedMinkowskiCost",
    "category": "function",
    "text": "Similar to MinkowskiCost, but ensures costs smaller than 2τ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.BoykovKolmogorovAlgorithm",
    "page": "Docstrings",
    "title": "Erdos.BoykovKolmogorovAlgorithm",
    "category": "type",
    "text": "Forces the maximum_flow function to use the Boykov-Kolmogorov algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.CliqueGraph",
    "page": "Docstrings",
    "title": "Erdos.CliqueGraph",
    "category": "function",
    "text": "CliqueGraph(k, n, G=Graph)\n\nThis function generates a graph with n k-cliques connected circularly by n edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.CompleteBipartiteGraph",
    "page": "Docstrings",
    "title": "Erdos.CompleteBipartiteGraph",
    "category": "function",
    "text": "CompleteBipartiteGraph(n1, n2, G = Graph)\n\nCreates a complete bipartite graph with n1+n2 vertices. It has edges connecting each pair of vertices in the two sets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.CompleteDiGraph",
    "page": "Docstrings",
    "title": "Erdos.CompleteDiGraph",
    "category": "function",
    "text": "CompleteDiGraph(n, G = DiGraph)\n\nCreates a complete digraph with n vertices. A complete digraph has edges connecting each pair of vertices (both an ingoing and outgoing edge).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.CompleteGraph",
    "page": "Docstrings",
    "title": "Erdos.CompleteGraph",
    "category": "function",
    "text": "CompleteGraph(n, G = Graph)\n\nCreates a complete graph of type G with n vertices. A complete graph has edges connecting each pair of vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.ConstEdgeMap",
    "page": "Docstrings",
    "title": "Erdos.ConstEdgeMap",
    "category": "type",
    "text": "struct ConstEdgeMap{T} <: SimpleEdgeMap{T}\n    val::T\nend\n\nA type representing a constant vector map. Any attempt to change the internal value, e.g. emap[u,v] = 4, will fail silently.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.ConstVertexMap",
    "page": "Docstrings",
    "title": "Erdos.ConstVertexMap",
    "category": "type",
    "text": "struct ConstVertexMap{T} <: AVertexMap{T}\n    val::T\nend\n\nA type representing a constant vector map. Any attempt to change the internal value, e.g. vm[1] = 4, will fail silently.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.CycleDiGraph",
    "page": "Docstrings",
    "title": "Erdos.CycleDiGraph",
    "category": "function",
    "text": "Creates a cycle digraph with n vertices. A cycle digraph is a closed path digraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.CycleGraph",
    "page": "Docstrings",
    "title": "Erdos.CycleGraph",
    "category": "function",
    "text": "CycleGraph(n, G=Graph)\n\nCreates a cycle graph with n vertices. A cycle graph is a closed path graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.DefaultCapacity",
    "page": "Docstrings",
    "title": "Erdos.DefaultCapacity",
    "category": "type",
    "text": "Type that returns 1 if a forward edge exists, and 0 otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.DiGraph",
    "page": "Docstrings",
    "title": "Erdos.DiGraph",
    "category": "type",
    "text": "mutable struct DiGraph{T<:Integer} <: ADiGraph\n    ne::Int\n    fadjlist::Vector{Vector{T}}\n    badjlist::Vector{Vector{T}}\nend\n\nA simple digraph type based on two adjacency lists (forward and backward).\n\nDiGraph{T}(n=0)\nDiGraph(n=0) = DiGraph{Int}(n)\n\nConstruct a DiGraph with n vertices and no edges.\n\nDiGraph{T}(adjmx::AbstractMatrix; selfedges=true)\n\nConstruct a DiGraph{T} from the adjacency matrix adjmx, placing an edge in correspondence to each nonzero element of adjmx. If selfedges=false the diagonal elements of adjmx are ignored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.DiNetwork",
    "page": "Docstrings",
    "title": "Erdos.DiNetwork",
    "category": "type",
    "text": "mutable struct DiNetwork <: ADiNetwork\n    ne::Int\n    edge_index_range::Int\n    out_edges::Vector{Vector{Pair{Int,Int}}}  #unordered out_adjlist\n    in_edges::Vector{Vector{Pair{Int,Int}}}  #unordered in_adjlist\n\n    epos::Vector{Pair{Int,Int}}    # position of the edge in out_edges\n                                    # the first in the pair is the vertex\n                                    # with lower index\n\n    free_indexes::Vector{Int}       # indexes of deleted edges to be used up\n                                    # for new edges to avoid very large\n                                    # indexes, and unnecessary property map\n                                    # memory use\n    props::PropertyStore\nend\n\nA type representing an directed graph with indexed edges.\n\nDiNetwork(n=0)\n\nConstruct a DiNetwork with n vertices and no edges.\n\nDiNetwork(adjmx::AbstractMatrix; selfedges=true)\n\nConstruct a DiNetwork from the adjacency matrix adjmx. If selfedges=false the diagonal elements of adjmx are ignored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.DinicAlgorithm",
    "page": "Docstrings",
    "title": "Erdos.DinicAlgorithm",
    "category": "type",
    "text": "Forces the maximum_flow function to use Dinic\'s algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.DoubleBinaryTree",
    "page": "Docstrings",
    "title": "Erdos.DoubleBinaryTree",
    "category": "function",
    "text": "DoubleBinaryTree(levels, G=Graph)\n\nCreate a double complete binary tree with k-levels used as an example for spectral clustering by Guattery and Miller 1998.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.Edge",
    "page": "Docstrings",
    "title": "Erdos.Edge",
    "category": "type",
    "text": "struct Edge\n    src::Int\n    dst::Int\nend\n\nA type representing an edge between two vertices of a graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.EdgeMap",
    "page": "Docstrings",
    "title": "Erdos.EdgeMap",
    "category": "type",
    "text": "mutable struct EdgeMap{G <: AGraphOrDiGraph, T, D} <: AEdgeMap{T}\n    g::G\n    vtype::Type{T}\n    data::D\nend\n\nType implementing an edge map. The underlying container data can be a dictionary, a matrix or a vector (for graphs with indexed edges).\n\nEdgeMap{T}(g, ::Type{T})\n\nReturns a map that associates values of type T to the vertices of  graph g. The underlying storage structures is chosen accordingly.\n\nEdgeMap(g, data)\n\nConstruct a EdgeMap with data as underlying storage. The storage type can be a matrix or an associative edg => val type or a vector for graph with indexed edges.\n\nEdgeMap(g, f)\n\nConstruct an edge map with value f(e) for each e in edges(g).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.EdmondsKarpAlgorithm",
    "page": "Docstrings",
    "title": "Erdos.EdmondsKarpAlgorithm",
    "category": "type",
    "text": "Forces the maximum_flow function to use the Edmonds–Karp algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.Erdos",
    "page": "Docstrings",
    "title": "Erdos.Erdos",
    "category": "module",
    "text": "A graph and network analysis package for julia.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.ExtendedMultirouteFlowAlgorithm",
    "page": "Docstrings",
    "title": "Erdos.ExtendedMultirouteFlowAlgorithm",
    "category": "type",
    "text": "Forces the multiroute_flow function to use the Extended Multiroute Flow algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.Graph",
    "page": "Docstrings",
    "title": "Erdos.Graph",
    "category": "type",
    "text": "mutable struct Graph{T<:Integer} <: AGraph\n    ne::Int\n    fadjlist::Vector{Vector{T}}\nend\n\nA simple graph type based on an adjacency list.\n\nGraph{T}(n=0)\nGraph(n=0) = Graph{Int}(n)\n\nConstruct a Graph with n vertices and no edges.\n\nGraph{T}(adjmx::AbstractMatrix; upper=false, selfedges=true)\n\nConstruct a Graph{T} from the adjacency matrix adjmx, placing an edge in correspondence to each nonzero element of adjmx. If selfedges=false the diagonal elements of adjmx are ignored. If upper=true only the upper triangular part of adjmx is considered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.Grid",
    "page": "Docstrings",
    "title": "Erdos.Grid",
    "category": "function",
    "text": "Grid(dims::AbstractVector, G=Graph; periodic=false)\n\nCreates a d-dimensional cubic lattice, with d=length(dims) and length  dims[i] in dimension i. If periodic=true the resulting lattice will have periodic boundary condition in each dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.IndexedEdge",
    "page": "Docstrings",
    "title": "Erdos.IndexedEdge",
    "category": "type",
    "text": "struct IndexedEdge <: AIndexedEdge\n    src::Int\n    dst::Int\n    idx::Int\nend\n\nAn indexed edge type\n\nIndexedEdge(u, v) = IndexedEdge(u,v,-1)\n\nCreates an edge with invalid index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.KishimotoAlgorithm",
    "page": "Docstrings",
    "title": "Erdos.KishimotoAlgorithm",
    "category": "type",
    "text": "Forces the multiroute_flow function to use the Kishimoto algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.MinkowskiCost",
    "page": "Docstrings",
    "title": "Erdos.MinkowskiCost",
    "category": "function",
    "text": "For labels μ₁ on the vertices of graph G₁ and labels μ₂ on the vertices of graph G₂, compute the p-norm cost of substituting vertex u ∈ G₁ by vertex v ∈ G₂.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.NeighComm",
    "page": "Docstrings",
    "title": "Erdos.NeighComm",
    "category": "type",
    "text": "Type to record neighbor labels and their counts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.Network",
    "page": "Docstrings",
    "title": "Erdos.Network",
    "category": "type",
    "text": "mutable struct Network <: ANetwork\n    ne::Int\n    edge_index_range::Int\n    out_edges::Vector{Vector{Pair{Int,Int}}}  #unordered adjlist\n    epos::Vector{Pair{Int,Int}}    # position of the edge in out_edges\n    free_indexes::Vector{Int}       # indexes of deleted edges to be used up\n                                    # for new edges to avoid very large\n                                    # indexes, and unnecessary property map\n                                    # memory used\n    props::PropertyStore\nend\n\nA type representing a directed graph with indexed edges.\n\nNetwork(n=0)\n\nConstruct a Network with n vertices and no edges.\n\nNetwork(adjmx::AbstractMatrix; selfedges=true, upper=false)\n\nConstruct a Network from the adjacency matrix adjmx, placing an edge in correspondence to each nonzero element of adjmx. If selfedges=false the diagonal elements of adjmx are ignored. If upper=true only the upper triangular part of adjmx is considered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.PathDiGraph",
    "page": "Docstrings",
    "title": "Erdos.PathDiGraph",
    "category": "function",
    "text": "PathDiGraph(n, G = DiGraph)\n\nCreates a path digraph with n vertices. A path graph connects each successive vertex by a single directed edge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.PathGraph",
    "page": "Docstrings",
    "title": "Erdos.PathGraph",
    "category": "function",
    "text": "PathGraph(n, G = Graph)\n\nCreates a path graph with n vertices. A path graph connects each successive vertex by a single edge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.PropertyStore",
    "page": "Docstrings",
    "title": "Erdos.PropertyStore",
    "category": "type",
    "text": "mutable struct PropertyStore\n    gmaps::Dict{String, Any}\n    emaps::Dict{String,AEdgeMap}\n    vmaps::Dict{String,AVertexMap}\nend\n\nA type storing properties associated to networks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.PushRelabelAlgorithm",
    "page": "Docstrings",
    "title": "Erdos.PushRelabelAlgorithm",
    "category": "type",
    "text": "Forces the maximum_flow function to use the Push-Relabel algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.RoachGraph",
    "page": "Docstrings",
    "title": "Erdos.RoachGraph",
    "category": "function",
    "text": "The Roach Graph from Guattery and Miller 1998\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.StarDiGraph",
    "page": "Docstrings",
    "title": "Erdos.StarDiGraph",
    "category": "function",
    "text": "Creates a star digraph with n vertices. A star digraph has a central vertex with directed edges to every other vertex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.StarGraph",
    "page": "Docstrings",
    "title": "Erdos.StarGraph",
    "category": "function",
    "text": "StarGraph(n, G = Graph)\n\nCreates a star graph with n vertices. A star graph has a central vertex with edges to each other vertex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.VertexMap",
    "page": "Docstrings",
    "title": "Erdos.VertexMap",
    "category": "type",
    "text": "mutable struct VertexMap{G <: AGraphOrDiGraph, T, D} <: AVertexMap{T}\n    g::G\n    vtype::Type{T}\n    data::D\nend\n\nType implementing an edge map. The underlying container data can be a dictionary or a vector.\n\nVertexMap{T}(g, ::Type{T})\n\nReturns a map that associates values of type T to the vertices of  graph g. The underlying storage structures is chosen accordingly.\n\nVertexMap(g, data)\n\nConstruct a VertexMap with data as underlying storage.\n\nVertexMap(g, f)\n\nConstruct a vertex map with value f(u) for each u=1:nv(g).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.WheelDiGraph",
    "page": "Docstrings",
    "title": "Erdos.WheelDiGraph",
    "category": "function",
    "text": "Creates a wheel digraph with n vertices. A wheel graph is a star digraph with the outer vertices connected via a closed path graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.WheelGraph",
    "page": "Docstrings",
    "title": "Erdos.WheelGraph",
    "category": "function",
    "text": "WheelGraph(n, G=Graph)\n\nCreates a wheel graph with n vertices. A wheel graph is a star graph with the outer vertices connected via a closed path graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.a_star",
    "page": "Docstrings",
    "title": "Erdos.a_star",
    "category": "function",
    "text": "a_star(g, s, t, distmx=weights(g), heuristic = n->0)\n\nComputes the shortest path between vertices s and t using the A* search algorithm. An optional heuristic function and edge distance matrix may be supplied. Returns an empty path if there are no such paths.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.add_edge!",
    "page": "Docstrings",
    "title": "Erdos.add_edge!",
    "category": "function",
    "text": "add_edge!(g, e) -> (ok, new_edge)\n\nAdd to g the edge e.\n\nadd_edge!(g, u, v) -> (ok, new_edge)\n\nAdd to g an edge from u to v.\n\nok=false if add fails (e.g. if vertices are not in the graph or the edge is already present) and true otherwise. new_edge is the descriptor of the new edge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.add_edge_property!",
    "page": "Docstrings",
    "title": "Erdos.add_edge_property!",
    "category": "function",
    "text": "add_edge_property!(g, name, T)\nadd_edge_property!(g, name, emap)\n\nAdd the edge property  name to g.\n\nIf a type T is given as an input, an edge map with valtype T is created and stored into g.\n\nAs an alternative, an existing edge map emap can be stored into g.\n\neprop! is the short form of this function.\n\nExample\n\ng = random_regular_graph(10, 3, Network)\n\nadd_edge_property!(g, \"weight\", Float64)\n# or equivalently\neprop!(g, \"weight\", Float64)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.add_vertex!",
    "page": "Docstrings",
    "title": "Erdos.add_vertex!",
    "category": "function",
    "text": "add_vertex!(g)\n\nAdd a new vertex to the graph g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.add_vertex_property!",
    "page": "Docstrings",
    "title": "Erdos.add_vertex_property!",
    "category": "function",
    "text": "add_vertex_property!(g, name, T)\nadd_vertex_property!(g, name, vmap)\n\nAdd the vertex property  name to g.\n\nIf a type T is given as an input, a vertex map with valtype T is created and stored into g.\n\nAs an alternative, an existing vertex map vmap can be stored into g.\n\nvprop! is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.add_vertices!",
    "page": "Docstrings",
    "title": "Erdos.add_vertices!",
    "category": "function",
    "text": "add_vertices!(g, n)\n\nAdd n new vertices to the graph g. Returns the final number of vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.adjacency_list",
    "page": "Docstrings",
    "title": "Erdos.adjacency_list",
    "category": "function",
    "text": "adjacency_list(g::AGraph)\nadjacency_list(g::ADiGraph, dir=:out)\n\nReturns the adjacency list a of a graph (a vector of vector of ints). The i-th element of the adjacency list is a vector containing the neighbors of i in g.\n\nFor directed graphs a second optional argument can be specified (:out or :in). The neighbors in the returned adjacency list are considered accordingly as those related through outgoing or incoming edges.\n\nThe elements of  a[i] have the same order as in the iterator (out_/in_)neighbors(g,i).\n\nAttention: For some graph types it returns a reference, not a copy, therefore the returned object should not be modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.adjacency_matrix",
    "page": "Docstrings",
    "title": "Erdos.adjacency_matrix",
    "category": "function",
    "text": "adjacency_matrix(g, dir=:out, T::DataType=Int)\n\nReturns a sparse boolean adjacency matrix for a graph, indexed by [u, v] vertices. true values indicate an edge between u and v. Users may specify a direction (:in, :out, or :all are currently supported; :out is default for both directed and undirected graphs) and a data type for the matrix (defaults to Int).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.all_edges",
    "page": "Docstrings",
    "title": "Erdos.all_edges",
    "category": "function",
    "text": "all_edges(g, v)\n\nIterates over all in and out edges of vertex v in g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.all_neighbors",
    "page": "Docstrings",
    "title": "Erdos.all_neighbors",
    "category": "function",
    "text": "all_neighbors(g, v)\n\nIterates over all distinct in/out neighbors of vertex v in g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.attracting_components",
    "page": "Docstrings",
    "title": "Erdos.attracting_components",
    "category": "function",
    "text": "attracting_components(g)\n\nReturn a vector of vectors of integers representing lists of attracting components in the directed graph g.\n\nThe attracting components are a subset of the strongly connected components in which the components do not have any leaving edges.\n\nExamples\n\njulia> g = SimpleDiGraph([0 1 0 0 0; 0 0 1 0 0; 1 0 0 1 0; 0 0 0 0 1; 0 0 0 1 0])\n{5, 6} directed simple Int64 graph\n\njulia> strongly_connected_components(g)\n2-element Array{Array{Int64,1},1}:\n [4, 5]\n [1, 2, 3]\n\njulia> attracting_components(g)\n1-element Array{Array{Int64,1},1}:\n [4, 5]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.augment_path!",
    "page": "Docstrings",
    "title": "Erdos.augment_path!",
    "category": "function",
    "text": "Calculates the amount by which flow can be augmented in the given path. Augments the flow and returns the augment value. Requires arguments:\n\npath::Vector{Int}                      # input path\nflow_matrix::AbstractMatrix{T}        # the current flow matrix\ncapacity_matrix::AbstractMatrix{T}    # edge flow capacities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.auxiliaryPoints",
    "page": "Docstrings",
    "title": "Erdos.auxiliaryPoints",
    "category": "function",
    "text": "Output a set of (point,slope) that compose the restricted max-flow function. One point by possible slope is enough (hence O(λ×max_flow) complexity). Requires arguments:\n\nflow_graph::ADiGraph                    # the input graph\nsource::Int                            # the source vertex\ntarget::Int                            # the target vertex\ncapacity_matrix::AbstractMatrix{T}   # edge flow capacities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.barabasi_albert",
    "page": "Docstrings",
    "title": "Erdos.barabasi_albert",
    "category": "function",
    "text": "barabasi_albert(n, k, G=Graph; seed=-1)\nbarabasi_albert(n, n0, k, G=Graph; seed=-1)\n\nCreates a random graph of type G with n vertices according to Barabási–Albert model. It is grown by adding new vertices to an initial graph with n0 vertices (n0=k if not specified). Each new vertex is attached with k edges to k different vertices already present in the system by preferential attachment. The initial graph is empty by default.\n\nUndirected graphs are created by default. Directed graphs can be created passing a directed graph type as last argument (e.g. DiGraph).\n\nSee also barabasi_albert! for growing a given graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.barabasi_albert!",
    "page": "Docstrings",
    "title": "Erdos.barabasi_albert!",
    "category": "function",
    "text": "barabasi_albert!(g, n::Int, k::Int; seed::Int = -1)\n\nGrows the graph g according to Barabási–Albert process into a graph with n vertices. At each step a new vertex is attached by preferential attachment to k different vertices already present in the graph.\n\nSee also barabasi_albert.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.bellman_ford_shortest_paths",
    "page": "Docstrings",
    "title": "Erdos.bellman_ford_shortest_paths",
    "category": "function",
    "text": "bellman_ford_shortest_paths(g, s, distmx=weights(g))\nbellman_ford_shortest_paths(g, sources, distmx=weights(g))\n\nUses the Bellman-Ford algorithm to compute shortest paths of all vertices of a g from a source vertex s (or a set of source vertices sources). Returns a BellmanFordState with relevant traversal information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.betweenness_centrality",
    "page": "Docstrings",
    "title": "Erdos.betweenness_centrality",
    "category": "function",
    "text": "betweenness_centrality(g; normalize=true, endpoints=false, approx=-1)\n\nCalculates the betweenness centrality of the vertices of graph g.\n\nBetweenness centrality for vertex v is defined as:\n\nbc(v) = frac1mathcalN sum_s neq t neq v\n        fracsigma_st(v)sigma_st\n\nwhere sigma _st sigma_st is the total number of shortest paths from node s to node t and sigma_st(v) is the number of those paths that pass through v.\n\nIf endpoints=true, endpoints are included in the shortest path count.\n\nIf normalize=true, the betweenness values are normalized by the total number of possible distinct paths between all pairs in the graph. For an undirected graph, this number if ((n-1)*(n-2))/2 and for a directed graph, (n-1)*(n-2) where n is the number of vertices in the graph.\n\nIf  an integer argument approx > 0 is given, returns an approximation of the betweenness centrality of each vertex of the graph involving approx randomly chosen vertices.\n\nReferences\n\n[1] Brandes 2001 & Brandes 2008\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.bfs_parents",
    "page": "Docstrings",
    "title": "Erdos.bfs_parents",
    "category": "function",
    "text": "bfs_parents(g, s[; dir=:out])\n\nPerform a breadth-first search of graph g starting from vertex s. Return a vector of parent vertices indexed by vertex. If dir is specified, use the corresponding edge direction (:in and :out are acceptable values).\n\nPerformance\n\nThis implementation is designed to perform well on large graphs. There are implementations which are marginally faster in practice for smaller graphs, but the performance improvements using this implementation on large graphs can be significant.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.bfs_tree",
    "page": "Docstrings",
    "title": "Erdos.bfs_tree",
    "category": "function",
    "text": "bfs_tree(g, s[; dir=:out])\n\nProvide a breadth-first traversal of the graph g starting with source vertex s, and return a directed acyclic graph of vertices in the order they were discovered. If dir is specified, use the corresponding edge direction (:in and :out are acceptable values).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.bipartite_map",
    "page": "Docstrings",
    "title": "Erdos.bipartite_map",
    "category": "function",
    "text": "bipartite_map(g) -> Vector{UInt8}\n\nFor a bipartite graph g, return a vector c of size V containing the assignment of each vertex to one of the two sets (c_i == 1 or c_i == 2). If g is not bipartite, return an empty vector.\n\nImplementation Notes\n\nNote that an empty vector does not necessarily indicate non-bipartiteness. An empty graph will return an empty vector but is bipartite.\n\nExamples\n\njulia> using LightGraphs\n\njulia> g = SimpleGraph(3);\n\njulia> bipartite_map(g)\n3-element Array{UInt8,1}:\n 0x01\n 0x01\n 0x01\n\njulia> add_vertices!(g, 3);\n\njulia> add_edge!(g, 1, 2);\n\njulia> add_edge!(g, 2, 3);\n\njulia> bipartite_map(g)\n3-element Array{UInt8,1}:\n 0x01\n 0x02\n 0x01\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.blocking_flow!",
    "page": "Docstrings",
    "title": "Erdos.blocking_flow!",
    "category": "function",
    "text": "Uses BFS to identify a blocking flow in the input graph and then backtracks from the targetto the source, aumenting flow along all possible paths.\n\nRequires arguments: residualgraph::ADiGraph                # the input graph source::Int                            # the source vertex target::Int                            # the target vertex capacitymatrix::AbstractMatrix{T}    # edge flow capacities flow_matrix::AbstractMatrix{T}        # the current flow matrix\n\n\n\n\n\nblockingflow! Preallocated version of blockingflow.Uses BFS to identify a blocking flow in the input graph and then backtracks from the target to the source, aumenting flow along all possible paths.\n\nRequires arguments: residualgraph::ADiGraph                # the input graph source::Int                            # the source vertex target::Int                            # the target vertex capacitymatrix::AbstractMatrix{T}    # edge flow capacities flow_matrix::AbstractMatrix{T}        # the current flow matrix P::AbstractVector{Int}               # Parent vector to store Level Graph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.boykov_kolmogorov_impl",
    "page": "Docstrings",
    "title": "Erdos.boykov_kolmogorov_impl",
    "category": "function",
    "text": "Computes the max-flow/min-cut between source and target using Boykov-Kolmogorov algorithm.\n\nReturns the maximum flow in the network, the flow matrix and the partition {S,T} in the form of a vector of 1\'s and 2\'s. The partition vector may also contain 0\'s. These can be assigned any label (1 or 2), it is a user choice.\n\nFor further details, please refer to the paper:\n\nBOYKOV, Y.; KOLMOGOROV, V., 2004. An Experimental Comparison of Min-Cut/Max-Flow Algorithms for Energy Minimization in Vision.\n\nUses a default capacity of 1 when the capacity matrix isn\'t specified.\n\nRequires arguments: residualgraph::ADiGraph                # the input graph source::Int                            # the source vertex target::Int                            # the target vertex capacitymatrix::AbstractMatrix{T}    # edge flow capacities\n\nAuthor: Júlio Hoffimann Mendes (juliohm@stanford.edu)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.breakingPoints",
    "page": "Docstrings",
    "title": "Erdos.breakingPoints",
    "category": "function",
    "text": "Calculates the breaking of the restricted max-flow from a set of auxiliary points. Requires arguments:\n\nflow_graph::ADiGraph                    # the input graph\nsource::Int                            # the source vertex\ntarget::Int                            # the target vertex\ncapacity_matrix::AbstractMatrix{T}   # edge flow capacities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.cartesian_product",
    "page": "Docstrings",
    "title": "Erdos.cartesian_product",
    "category": "function",
    "text": "cartesian_product(g, h)\n\nReturns the (cartesian product)[https://en.wikipedia.org/wiki/Cartesianproductof_graphs] of g and h\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.center",
    "page": "Docstrings",
    "title": "Erdos.center",
    "category": "function",
    "text": "center(g, distmx=weights(g))\ncenter(all_ecc)\n\nReturns the set of all vertices whose eccentricity is equal to the graph\'s radius (that is, the set of vertices with the smallest eccentricity).\n\nEventually a vector all_ecc contain the eccentricity of each node can be passed as argument.\n\nSee eccentricities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.clean_vertex!",
    "page": "Docstrings",
    "title": "Erdos.clean_vertex!",
    "category": "function",
    "text": "clean_vertex!(g, v)\n\nRemove all incident edges on vertex v in g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.closeness_centrality",
    "page": "Docstrings",
    "title": "Erdos.closeness_centrality",
    "category": "function",
    "text": "Calculates the closeness centrality of the graph g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.community_detection_bethe",
    "page": "Docstrings",
    "title": "Erdos.community_detection_bethe",
    "category": "function",
    "text": "community_detection_bethe(g::AGraph, k=-1; kmax=15)\n\nCommunity detection using the spectral properties of the Bethe Hessian matrix associated to g (see Saade et al.). k is the number of communities to detect. If omitted or if k < 1 the optimal number of communities will be automatically selected. In this case the maximum number of detectable communities is given by kmax. Returns a vector containing the vertex assignments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.community_detection_nback",
    "page": "Docstrings",
    "title": "Erdos.community_detection_nback",
    "category": "function",
    "text": "community_detection_nback(g, k)\n\nCommunity detection using the spectral properties of the non-backtracking matrix of graph g (see Krzakala et al.). k is the number of communities to detect.\n\nSee also community_detection_bethe for a related community ddetection algorithm.\n\nReturns a vector with the vertex assignments in the communities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.complement",
    "page": "Docstrings",
    "title": "Erdos.complement",
    "category": "function",
    "text": "complement(g)\n\nProduces the graph complement of a graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.complete",
    "page": "Docstrings",
    "title": "Erdos.complete",
    "category": "function",
    "text": "complete(g::ADiGraph)\n\nReturns a digraph containing both the edges (u, v) of g and their reverse (v, u). See also complete!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.complete!",
    "page": "Docstrings",
    "title": "Erdos.complete!",
    "category": "function",
    "text": "complete!(g::ADiGraph)\n\nFor each edge (u, v) in g, adds to g its reverse, i.e. (v, u).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.components",
    "page": "Docstrings",
    "title": "Erdos.components",
    "category": "function",
    "text": "components(labels)\n\nGiven a vector of component labels, return a vector of vectors representing the vertices associated with a given component id.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.components_dict",
    "page": "Docstrings",
    "title": "Erdos.components_dict",
    "category": "function",
    "text": "components_dict(labels)\n\nConvert an array of labels to a map of component id to vertices, and return a map with each key corresponding to a given component id and each value containing the vertices associated with that component.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.condensation",
    "page": "Docstrings",
    "title": "Erdos.condensation",
    "category": "function",
    "text": "condensation(g[, scc])\n\nReturn the condensation graph of the strongly connected components scc in the directed graph g. If scc is missing, generate the strongly connected components first.\n\nExamples\n\njulia> g = DiGraph([0 1 0 0 0; 0 0 1 0 0; 1 0 0 1 0; 0 0 0 0 1; 0 0 0 1 0])\n{5, 6} directed simple Int64 graph\n\njulia> strongly_connected_components(g)\n2-element Array{Array{Int64,1},1}:\n [4, 5]\n [1, 2, 3]\n\njulia> foreach(println, edges(condensation(g)))\nEdge 2 => 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.connected_components",
    "page": "Docstrings",
    "title": "Erdos.connected_components",
    "category": "function",
    "text": "connected_components(g)\n\nReturn the connected components of an undirected graph g as a vector of components, with each element a vector of vertices belonging to the component.\n\nFor directed graphs, see strongly_connected_components and weakly_connected_components.\n\nExamples\n\njulia> g = Graph([0 1 0; 1 0 1; 0 1 0]);\n\njulia> connected_components(g)\n1-element Array{Array{Int64,1},1}:\n [1, 2, 3]\n\njulia> g = Graph([0 1 0 0 0; 1 0 1 0 0; 0 1 0 0 0; 0 0 0 0 1; 0 0 0 1 0]);\n\njulia> connected_components(g)\n2-element Array{Array{Int64,1},1}:\n [1, 2, 3]\n [4, 5]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.connected_components!",
    "page": "Docstrings",
    "title": "Erdos.connected_components!",
    "category": "function",
    "text": "connected_components!(label, g)\n\nFill label with the id of the connected component in the undirected graph g to which it belongs. Return a vector representing the component assigned to each vertex. The component value is the smallest vertex ID in the component.\n\nPerformance\n\nThis algorithm is linear in the number of edges of the graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.contract!",
    "page": "Docstrings",
    "title": "Erdos.contract!",
    "category": "function",
    "text": "contract!(g, vs)\ncontract!(g, v1, v2, ....)\n\nMerge the vertices in vs into a unique vertex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.core_periphery_deg",
    "page": "Docstrings",
    "title": "Erdos.core_periphery_deg",
    "category": "function",
    "text": "core_periphery_deg(g)\n\nA simple degree-based core-periphery detection algorithm (see Lip). Returns the vertex assignments (1 for core and 2 for periphery).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.cores",
    "page": "Docstrings",
    "title": "Erdos.cores",
    "category": "function",
    "text": "cores(g)\n\nReturns a vector deg such that if deg[v]=k then the vertex v belongs to the k-core of g and not to the k+1-core.\n\nSee also kcore.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.count_spanning_trees",
    "page": "Docstrings",
    "title": "Erdos.count_spanning_trees",
    "category": "function",
    "text": "count_spanning_trees(g::AGraph)\n\nReturns the number of spanning trees of g, computed through Kirchhoff\'s theorem. The return type is a float, since the number can be very large.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.crosspath",
    "page": "Docstrings",
    "title": "Erdos.crosspath",
    "category": "function",
    "text": "crosspath(g::AGraph, n::Integer)\n\nReplicate n times g and connect each vertex with its copies in a path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.degree",
    "page": "Docstrings",
    "title": "Erdos.degree",
    "category": "function",
    "text": "degree(g, v)\n\nReturn the number of edges  from the vertex v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.degree_centrality",
    "page": "Docstrings",
    "title": "Erdos.degree_centrality",
    "category": "function",
    "text": "Calculates the degree centrality of the graph g, with optional (default) normalization.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.density",
    "page": "Docstrings",
    "title": "Erdos.density",
    "category": "function",
    "text": "density(g)\n\nDensity is defined as the ratio of the number of actual edges to the number of possible edges. This is v v-1 for directed graphs and (v v-1)  2 for undirected graphs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.dfs_parents",
    "page": "Docstrings",
    "title": "Erdos.dfs_parents",
    "category": "function",
    "text": "dfs_parents(g, s[; dir=:out])\n\nPerform a depth-first search of graph g starting from vertex s. Return a vector of parent vertices indexed by vertex. If dir is specified, use the corresponding edge direction (:in and :out are acceptable values).\n\nImplementation Notes\n\nThis version of DFS is iterative.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.dfs_tree",
    "page": "Docstrings",
    "title": "Erdos.dfs_tree",
    "category": "function",
    "text": "dfs_tree(g, s)\n\nReturn an ordered vector of vertices representing a directed acylic graph based on depth-first traversal of the graph g starting with source vertex s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.diameter",
    "page": "Docstrings",
    "title": "Erdos.diameter",
    "category": "function",
    "text": "diameter(g, distmx=weights(g))\n\nReturns the maximum distance between any two vertices in g. Distances  between two adjacent nodes are given by distmx.\n\nSee also eccentricities, radius.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.difference",
    "page": "Docstrings",
    "title": "Erdos.difference",
    "category": "function",
    "text": "difference(g, h)\n\nProduces a graph with all the edges in graph g that are not in graph h.\n\nNote that this function may produce a graph with 0-degree vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.digraph",
    "page": "Docstrings",
    "title": "Erdos.digraph",
    "category": "function",
    "text": "digraph{G<:AGraph}(n, edgelist::Vector{Tuple{Int,Int}},\n    G = Graph)\n\nBuild a digraph with n vertices, type G, and given edgelist.\n\n\n\n\n\ndigraph(s::Symbol, G = DiGraph)\n\nCreates a notorious digraph s of type G. Admissible values for s are:\n\ns graph type\n:truncatedtetrahedron A skeleton of the truncated tetrahedron digraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.digraphtype",
    "page": "Docstrings",
    "title": "Erdos.digraphtype",
    "category": "function",
    "text": "digraphtype{G<:AGraphOrDiGraph}(::Type{G})\n\nThe digraph type corresponding to G. If G<:ADiGraph returns G, if G<:AGraph returns a type H<:ADiGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.dijkstra_shortest_paths",
    "page": "Docstrings",
    "title": "Erdos.dijkstra_shortest_paths",
    "category": "function",
    "text": "dijkstra_shortest_paths(g, s, distmx=weights(g); allpaths=false)\ndijkstra_shortest_paths(g, sources, distmx=weights(g); allpaths=false)\n\nPerforms Dijkstra\'s algorithm on a graph, computing shortest distances between a source vertex s (or a vector sources)  and all other veritces. Returns a DijkstraState that contains various traversal information.\n\nWith allpaths=true, returns a DijkstraState that keeps track of all predecessors of a given vertex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.dinic_impl",
    "page": "Docstrings",
    "title": "Erdos.dinic_impl",
    "category": "function",
    "text": "Computes the maximum flow between the source and target vertexes in a flow graph using Dinic\'s Algorithm Returns the value of the maximum flow as well as the final flow matrix.\n\nUse a default capacity of 1 when the capacity matrix isn\'t specified.\n\nRequires arguments: residualgraph::ADiGraph                # the input graph source::Int                            # the source vertex target::Int                            # the target vertex capacitymatrix::AbstractMatrix{T}    # edge flow capacities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.discharge!",
    "page": "Docstrings",
    "title": "Erdos.discharge!",
    "category": "function",
    "text": "Drains the excess flow out of a vertex. Runs the gap heuristic or relabels the vertex if the excess remains non-zero.\n\nRequires arguments:\n\ng::ADiGraph                 # the input graph\nv                                  # vertex to be discharged\ncapacity_matrix::AbstractMatrix{T}\nflow_matrix::AbstractMatrix{T}\nexcess::AbstractVector{T}\nheight::AbstractVector{Int}\nactive::AbstractVector{Bool}\ncount::AbstractVector{Int}\nQ::PushRelabelHeap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.dismantle_ci",
    "page": "Docstrings",
    "title": "Erdos.dismantle_ci",
    "category": "function",
    "text": "dismantle_ci(g::AGraph, l::Integer, nrem; verbose=false)\n\nApplies the Collective Influence (CI) heuristic of Ref. [1]  with distance parameter l (tipically l=3,4). Removes a maximum of nrem vertices from g, trying to minimize the size of the maximum connected component of the resulting graph. It stops earlier if the maximum CI goes to zero.\n\nSet verbose to true for info printing in each iteration.\n\nReturns (gnew, vmap, remlist), where gnew is the reduced graph, vmap is a vertex map of the vertices of gnew to the old ones (see also rem_vertices!) and remlist contains the removed vertices by removal order.\n\nFor more fine grained control see dismantle_ci_init and dismantle_ci_oneiter!.\n\nUsage\n\ng = Graph(100, 1000)\nl=3\nnrem=10\ngnew, vmap, remlist = dismantle_ci(g, l, nrem)\n\n# or equivalently\ngnew, heap, lneigs = dismantle_ci_init(g, l)\n\nfor it=1:nrem\n    irem = dismantle_ci_oneiter!(gnew, heap, lneigs, l)\n    irem <= 0 && break\n    push!(remlist, irem)\n    println(\"Size Max Component: \", maximum(length, connected_components(g)))\nend\nvmap = rem_vertices!(gnew, remlist)\n\n[1] Morone F., Makse H. Influence maximization in complex networks through optimal percolation. Nature (2015)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.dismantle_ci_init",
    "page": "Docstrings",
    "title": "Erdos.dismantle_ci_init",
    "category": "function",
    "text": "dismantle_ci_init(g, l)\n\nInitialization part of dismantle_ci algorithm. Returns (gnew, heap, lneigs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.dismantle_ci_oneiter!",
    "page": "Docstrings",
    "title": "Erdos.dismantle_ci_oneiter!",
    "category": "function",
    "text": "dismantle_ci_oneiter!(g, heap, lneigs, l)\n\nOne step of dismantle_ci algorithm. To be called after dismantle_ci_init Returns the cleaned vertex if any (see clean_vertex!), -1 otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.dst",
    "page": "Docstrings",
    "title": "Erdos.dst",
    "category": "function",
    "text": "dst(e)\n\nReturns the destination of an edge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.eccentricities",
    "page": "Docstrings",
    "title": "Erdos.eccentricities",
    "category": "function",
    "text": "eccentricities(g, distmx=weights(g))\neccentricities(g, vs, distmx=weights(g))\n\nReturns [eccentricity(g,v,distmx) for v in vs]. When vs it is not supplied, considers all node in the graph.\n\nSee also eccentricity.\n\nNote: the eccentricity vector returned by eccentricity may be eventually used as input in some eccentricity related measures (periphery, center).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.eccentricity",
    "page": "Docstrings",
    "title": "Erdos.eccentricity",
    "category": "function",
    "text": "eccentricity(g, v, distmx=weights(g))\n\nCalculates the eccentricity[ies] of a vertex v, An optional matrix of edge distances may be supplied.\n\nThe eccentricity of a vertex is the maximum shortest-path distance between it and all other vertices in the graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.edge",
    "page": "Docstrings",
    "title": "Erdos.edge",
    "category": "function",
    "text": "edge(g, u, v)\n\nReturns an edge from \'u\' to \'v\'. The edge doesn\'t necessarily exists in g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.edge_property",
    "page": "Docstrings",
    "title": "Erdos.edge_property",
    "category": "function",
    "text": "edge_property(g, name)\n\nReturn an edge map corresponding to property name of edges in g.\n\nedge_property(g)\n\nReturns a dictionary with elements property_name => edge_map.\n\nedge_property(g, e)\n\nReturns a dictionary of the form name => val containing all the properties associated to edge e.\n\neprop is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.edgemap2adjlist",
    "page": "Docstrings",
    "title": "Erdos.edgemap2adjlist",
    "category": "function",
    "text": "edgemap2adjlist(emap)\n\nReturns a vector of vectors containing the values of the edge map emap on graph g following the same ordering of adjacency_list(g).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.edges",
    "page": "Docstrings",
    "title": "Erdos.edges",
    "category": "function",
    "text": "edges(g, v)\n\nReturns an iterator to the edges in g coming from vertex v. v == src(e) for each returned edge e.\n\nIt is equivalent to out_edges.\n\nFor digraphs, use all_edges to iterate over both in and out edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.edgetype",
    "page": "Docstrings",
    "title": "Erdos.edgetype",
    "category": "function",
    "text": "edgetype(g)\nedgetype(G)\n\nReturns the type of edges of graph g (or graph type G), i. e. the element type returned of the iterator edges(g).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.edit_distance",
    "page": "Docstrings",
    "title": "Erdos.edit_distance",
    "category": "function",
    "text": "edit_distance(G₁, G₂;\n       insert_cost::Function=v->1.0,\n       delete_cost::Function=u->1.0,\n       subst_cost::Function=(u,v)->0.5,\n       heuristic::Function=DefaultEditHeuristic)\n\nComputes the edit distance between graphs G₁ and G₂.\n\nReturns the minimum edit cost and edit path to transform graph G₁ into graph G₂. An edit path consists of a sequence of pairs of vertices (u,v) ∈ [0,|G₁|] × [0,|G₂|] representing vertex operations:\n\n(0,v): insertion of vertex v ∈ G₂\n(u,0): deletion of vertex u ∈ G₁\n(u>0,v>0): substitution of vertex u ∈ G₁ by vertex v ∈ G₂\n\nBy default, the algorithm uses constant operation costs. The user can provide classical Minkowski costs computed from vertex labels μ₁ (for G₁) and μ₂ (for G₂) in order to further guide the search, for example:\n\nedit_distance(G₁, G₂, subst_cost=MinkowskiCost(μ₁, μ₂))\n\nA custom heuristic can be provided to the A* search in case the default heuristic is not satisfactory. Performance tips: ––––––––-\n\nGiven two graphs G₁  G₂, edit_distance(G₁, G₂) is faster to\n\ncompute than edit_distance(G₂, G₁). Consider swapping the arguments if involved costs are symmetric.\n\nThe use of simple Minkowski costs can improve performance considerably.\nExploit vertex attributes when designing operation costs.\n\nFor further details, please refer to:\n\nRIESEN, K., 2015. Structural Pattern Recognition with Graph Edit Distance: Approximation Algorithms and Applications. (Chapter 2)\n\nAuthor: Júlio Hoffimann Mendes (juliohm@stanford.edu)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.edmonds_karp_impl",
    "page": "Docstrings",
    "title": "Erdos.edmonds_karp_impl",
    "category": "function",
    "text": "Computes the maximum flow between the source and target vertexes in a flow graph using the Edmonds-Karp algorithm. Returns the value of the maximum flow as well as the final flow matrix. Use a default capacity of 1 when the capacity matrix isn\'t specified. Requires arguments:\n\nresidual_graph::ADiGraph                # the input graph\nsource                            # the source vertex\ntarget                            # the target vertex\ncapacity_matrix::AbstractMatrix{T}    # edge flow capacities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.egonet",
    "page": "Docstrings",
    "title": "Erdos.egonet",
    "category": "function",
    "text": "egonet(g, v::Int, d::Int; dir=:out)\n\nReturns the subgraph of g induced by the neighbors of v up to distance d. If g is a DiGraph the dir optional argument specifies the edge direction the edge direction with respect to v (i.e. :in or :out) to be considered. This is equivalent to subgraph(g, neighborhood(g, v, d, dir=dir))[1].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.emrf",
    "page": "Docstrings",
    "title": "Erdos.emrf",
    "category": "function",
    "text": "Computes the maximum multiroute flow (for any real number of routes) between the source and target vertexes in a flow graph using the Extended Multiroute Flow algorithm. If a number of routes is given, returns the value of the multiroute flow as well as the final flow matrix, along with a multiroute cut if Boykov-Kolmogorov max-flow algorithm is used as a subroutine. Otherwise, it returns the vector of breaking points of the parametric multiroute flow function. Use a default capacity of 1 when the capacity matrix isn\'t specified. Requires arguments:\n\nflow_graph::ADiGraph                    # the input graph\nsource::Int                            # the source vertex\ntarget::Int                            # the target vertex\ncapacity_matrix::AbstractMatrix{T}   # edge flow capacities\nflow_algorithm::AbstractFlowAlgorithm  # keyword argument for algorithm\nroutes::Int                            # keyword argument for routes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.enqueue_vertex!",
    "page": "Docstrings",
    "title": "Erdos.enqueue_vertex!",
    "category": "function",
    "text": "Pushes inactive nodes into the queue and activates them.\n\nRequires arguments:\n\nQ::PushRelabelHeap\nv\nactive::AbstractVector{Bool}\nexcess::AbstractVector{T}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.enumerate_paths",
    "page": "Docstrings",
    "title": "Erdos.enumerate_paths",
    "category": "function",
    "text": "enumerate_paths(state::AbstractPathState)\nenumerate_paths(state::AbstractPathState, dest)\n\nGiven a path state state of type AbstractPathState (see below), returns a vector (indexed by vertex) of the paths between the source vertex used to compute the path state and a destination vertex v, a set of destination vertices vs, or the entire graph. For multiple destination vertices, each path is represented by a vector of vertices on the path between the source and the destination. Nonexistent paths will be indicated by an empty vector. For single destinations, the path is represented by a single vector of vertices, and will be length 0 if the path does not exist.\n\nFor Floyd-Warshall path states, please note that the output is a bit different, since this algorithm calculates all shortest paths for all pairs of vertices: enumerate_paths(state) will return a vector (indexed by source vertex) of vectors (indexed by destination vertex) of paths. enumerate_paths(state, v) will return a vector (indexed by destination vertex) of paths from source v to all other vertices. In addition, enumerate_paths(state, v, d) will return a vector representing the path from vertex v to vertex d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.eprop",
    "page": "Docstrings",
    "title": "Erdos.eprop",
    "category": "function",
    "text": "See edge_property\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.eprop!",
    "page": "Docstrings",
    "title": "Erdos.eprop!",
    "category": "function",
    "text": "See add_edge_property!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.erdos_renyi",
    "page": "Docstrings",
    "title": "Erdos.erdos_renyi",
    "category": "function",
    "text": "erdos_renyi(n::Int, p::Real, G=Graph; seed=-1)\nerdos_renyi(n::Int, m::Int, G=Graph; seed=-1)\n\nCreates an Erdős–Rényi random graph of type G with n vertices. Edges are added between pairs of vertices with probability p in the first method. In the second method m edges are randomly chosen insted.\n\nUndirected graphs are created by default. Directed graphs can be created passing a directed graph type as last argument (e.g. DiGraph)\n\nNote also that Erdős–Rényi graphs may be generated quickly using erdos_renyi(n, ne) or the  Graph(nv, ne) constructor, which randomly select ne edges among all the potential edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.euclidean_graph",
    "page": "Docstrings",
    "title": "Erdos.euclidean_graph",
    "category": "function",
    "text": "euclidean_graph(points::Matrix, G; L=1., p=2., cutoff=Inf, bc=:periodic)\n\nGiven the d×N matrix points builds an Euclidean graph of N vertices according to the following procedure.\n\nDefining the d-dimensional vectors x[i] = points[:,i], an edge between vertices i and j is inserted if norm(x[i]-x[j], p) < cutoff. In case of negative cutoff instead every edge is inserted. For p=2 we have the standard Euclidean distance. Set bc=:periodic to impose periodic boundary conditions in the box 0L^d. Set bc=:open for open boundary condition. In this case the keyword argument L will be ignored.\n\nReturns a graph and Dict containing the distance on each edge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.fetch_path",
    "page": "Docstrings",
    "title": "Erdos.fetch_path",
    "category": "function",
    "text": "Uses Bidirectional BFS to look for augmentable-paths. Returns the vertex where the two BFS searches intersect, the Parent table of the path, the Successor table of the path found, and a flag indicating success Flag Values: 0 => success 1 => No Path to target 2 => No Path to source\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.fetch_path!",
    "page": "Docstrings",
    "title": "Erdos.fetch_path!",
    "category": "function",
    "text": "A preallocated version of fetchpaths. The parent and successor tables are pre-allocated. Uses Bidirectional BFS to look for augmentable-paths. Returns the vertex where the two BFS searches intersect, the Parent table of the path, the Successor table of the path found, and a flag indicating success Flag Values: 0 => success 1 => No Path to target 2 => No Path to source Requires arguments:     residualgraph::ADiGraph                # the input graph     source                            # the source vertex     target                            # the target vertex     flowmatrix::AbstractMatrix{T}        # the current flow matrix     capacitymatrix::AbstractMatrix{T}    # edge flow capacities     P::Vector{Int}                         # parent table of path init to -1s     S::Vector{Int}                         # successor table of path init to -1s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.floyd_warshall_shortest_paths",
    "page": "Docstrings",
    "title": "Erdos.floyd_warshall_shortest_paths",
    "category": "function",
    "text": "floyd_warshall_shortest_paths(g, distmx=weights(g))\n\nUses the Floyd-Warshall algorithm to compute shortest paths between all pairs of vertices in graph g. Returns a FloydWarshallState with relevant traversal information, each is a vertex-indexed vector of vectors containing the metric for each vertex in the graph.\n\nNote that this algorithm may return a large amount of data (it will allocate on the order of O(nv^2)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.gap!",
    "page": "Docstrings",
    "title": "Erdos.gap!",
    "category": "function",
    "text": "Implements the gap heuristic. Relabels all vertices above a cutoff height. Reduces the number of relabels required.\n\nRequires arguments:\n\ng::ADiGraph                # the input graph\nh                                 # cutoff height\nexcess::AbstractVector{T}\nheight::AbstractVector{Int}\nactive::AbstractVector{Bool}\ncount::AbstractVector{Int}\nQ::PushRelabelHeap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.gdistances",
    "page": "Docstrings",
    "title": "Erdos.gdistances",
    "category": "function",
    "text": "gdistances(g, source; sort_alg=QuickSort)\n\nReturn a vector filled with the geodesic distances of vertices in  g from source. If source is a collection of vertices each element should be unique. For vertices in disconnected components the default distance is typemax(T).\n\nAn optional sorting algorithm may be specified (see Performance section).\n\nPerformance\n\ngdistances uses QuickSort internally for its default sorting algorithm, since it performs the best of the algorithms built into Julia Base. However, passing a RadixSort (available via SortingAlgorithms.jl) will provide significant performance improvements on larger graphs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.gdistances!",
    "page": "Docstrings",
    "title": "Erdos.gdistances!",
    "category": "function",
    "text": "gdistances!(g, source, dists; sort_alg=QuickSort)\n\nFill dists with the geodesic distances of vertices in g from source vertex (or collection of vertices) source. dists should be a vector of length nv(g)  filled with typemax(T). Return dists.\n\nFor vertices in disconnected components the default distance is typemax(T).\n\nAn optional sorting algorithm may be specified (see Performance section).\n\nPerformance\n\ngdistances uses QuickSort internally for its default sorting algorithm, since it performs the best of the algorithms built into Julia Base. However, passing a RadixSort (available via SortingAlgorithms.jl) will provide significant performance improvements on larger graphs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.getchild!",
    "page": "Docstrings",
    "title": "Erdos.getchild!",
    "category": "function",
    "text": "adds a child s to el if it doesn\'t exist\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.global_clustering_coefficient",
    "page": "Docstrings",
    "title": "Erdos.global_clustering_coefficient",
    "category": "function",
    "text": "global_clustering_coefficient(g)\n\nComputes the global clustering coefficient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.gprop",
    "page": "Docstrings",
    "title": "Erdos.gprop",
    "category": "function",
    "text": "See graph_property\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.gprop!",
    "page": "Docstrings",
    "title": "Erdos.gprop!",
    "category": "function",
    "text": "See set_graph_property!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.graph",
    "page": "Docstrings",
    "title": "Erdos.graph",
    "category": "function",
    "text": "graph{G<:AGraph}(n, edgelist::Vector{Tuple{Int,Int}},\n    G = Graph)\n\nBuild a graph with n vertices, of type G, and given edgelist.\n\n\n\n\n\ngraph(s::Symbol, G = Graph)\n\nCreates a notorious graph s of type G. Admissible values for s are:\n\ns graph type\n:bull A bull graph.\n:chvatal A Chvátal graph.\n:cubical A Platonic cubical graph.\n:desargues A Desarguesgraph.\n:diamond A diamond graph.\n:dodecahedral A Platonic dodecahedral  graph.\n:frucht A Frucht graph.\n:heawood A Heawood graph.\n:house A graph mimicing the classic outline of a house.\n:housex A house graph, with two edges crossing the bottom square.\n:icosahedral A Platonic icosahedral   graph.\n:krackhardtkite A Krackhardt-Kite social network  graph.\n:moebiuskantor A Möbius-Kantor graph.\n:octahedral A Platonic octahedral graph.\n:pappus A Pappus graph.\n:petersen A Petersen graph.\n:sedgewickmaze A simple maze graph used in Sedgewick\'s Algorithms in C++: Graph  Algorithms (3rd ed.)\n:tetrahedral A Platonic tetrahedral  graph.\n:truncatedcube A skeleton of the truncated cube graph.\n:truncatedtetrahedron A skeleton of the truncated tetrahedron  graph.\n:tutte A Tutte graph.\n\nA collection of real world graphs is available through the readgraph function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.graph_property",
    "page": "Docstrings",
    "title": "Erdos.graph_property",
    "category": "function",
    "text": "graph_property(g, name)\n\nReturn the property name of g.\n\ngraph_property(g)\n\nReturns a dictionary with elements property_name => property_value\n\ngprop is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.graphtype",
    "page": "Docstrings",
    "title": "Erdos.graphtype",
    "category": "function",
    "text": "graphtype{G<:AGraphOrDiGraph}(::Type{G})\n\nThe graph type corresponding to G. If G<:AGraph returns G, if G<:ADiGraph returns a type H<:AGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_cycycles",
    "page": "Docstrings",
    "title": "Erdos.has_cycycles",
    "category": "function",
    "text": "has_cycles(g)\n\nReturn true if graph g contains a cycle.\n\nImplementation Notes\n\nUses DFS.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_edge",
    "page": "Docstrings",
    "title": "Erdos.has_edge",
    "category": "function",
    "text": "has_edge(g, e)\nhas_edge(g, u, v)\n\nReturns true if the graph g has an edge e (from u to v).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_edge_property",
    "page": "Docstrings",
    "title": "Erdos.has_edge_property",
    "category": "function",
    "text": "has_edge_property(g, name)\nhas_edge_property(g, name, e)\n\nCheck if network  g has an edge property named name. The second method checks also if edge e has an assigned value for that property.\n\nhas_eprop is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_eprop",
    "page": "Docstrings",
    "title": "Erdos.has_eprop",
    "category": "function",
    "text": "See has_edge_property\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_gprop",
    "page": "Docstrings",
    "title": "Erdos.has_gprop",
    "category": "function",
    "text": "See has_graph_property\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_graph_property",
    "page": "Docstrings",
    "title": "Erdos.has_graph_property",
    "category": "function",
    "text": "has_graph_property(g, name)\n\nCheck if network  g has a graph property named name.\n\nhas_gprop is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_path",
    "page": "Docstrings",
    "title": "Erdos.has_path",
    "category": "function",
    "text": "has_path(g::AbstractGraph, u, v; exclude_vertices=Vector())\n\nReturn true if there is a path from u to v in g (while avoiding vertices in exclude_vertices) or u == v. Return false if there is no such path or if u or v is in excluded_vertices. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_self_loops",
    "page": "Docstrings",
    "title": "Erdos.has_self_loops",
    "category": "function",
    "text": "has_self_loops(g)\n\nReturns true if g has any self loops.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_vertex",
    "page": "Docstrings",
    "title": "Erdos.has_vertex",
    "category": "function",
    "text": "has_vertex(g, v)\n\nReturn true if v is a vertex of g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_vertex_property",
    "page": "Docstrings",
    "title": "Erdos.has_vertex_property",
    "category": "function",
    "text": "has_vertex_property(g, name, v)\n\nCheck if network  g has a vertex property named name. The second method checks also if vertex v has an assigned value for that property.\n\nhas_vprop is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.has_vprop",
    "page": "Docstrings",
    "title": "Erdos.has_vprop",
    "category": "function",
    "text": "See has_vertex_property\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.idx",
    "page": "Docstrings",
    "title": "Erdos.idx",
    "category": "function",
    "text": "idx(e::AIndexedEdge)\n\nReturns the index of edge e.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.in_adjlist",
    "page": "Docstrings",
    "title": "Erdos.in_adjlist",
    "category": "function",
    "text": "in_adjlist(g)\n\nReturns the backward adjacency list of a graph. For each vertex the vector of neighbors though incoming edges.\n\nin_adjlist(g) == [collect(in_neighbors(i)) for i=1:nv(g)]\n\nIt is the same as adjlist and out_adjlist for undirected graphs.\n\nNOTE: returns a reference, not a copy. Do not modify result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.in_degree",
    "page": "Docstrings",
    "title": "Erdos.in_degree",
    "category": "function",
    "text": "in_degree(g, v)\n\nReturns the number of edges which start at vertex v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.in_degree_centrality",
    "page": "Docstrings",
    "title": "Erdos.in_degree_centrality",
    "category": "function",
    "text": "Calculates the degree centrality of the graph g, with optional (default) normalization.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.in_edges",
    "page": "Docstrings",
    "title": "Erdos.in_edges",
    "category": "function",
    "text": "in_edges(g, v)\n\nReturns an iterator to the edges in g going to vertex v. v == dst(e) for each returned edge e.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.in_neighbors",
    "page": "Docstrings",
    "title": "Erdos.in_neighbors",
    "category": "function",
    "text": "in_neighbors(g, v)\n\nReturns an iterable to all neighbors connected to vertex v by an incoming edge.\n\nNOTE: it may return a reference, not a copy. Do not modify result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.incidence_matrix",
    "page": "Docstrings",
    "title": "Erdos.incidence_matrix",
    "category": "function",
    "text": "incidence_matrix(g::AGraphOrDiGraph, T::DataType=Int; oriented=false)\n\nReturns a sparse node-arc incidence matrix for a graph, indexed by [v, i], where i is in 1:ne(g), indexing an edge e. For directed graphs, a value of -1 indicates that src(e) == v, while a value of 1 indicates that dst(e) == v. Otherwise, the value is 0.\n\nFor undirected graphs, both entries are 1 if oriented=false, otherwise [v, i] -> -1 and [u, i] -> 1 if v < u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.intersect",
    "page": "Docstrings",
    "title": "Base.intersect",
    "category": "function",
    "text": "intersect(g, h)\n\nProduces a graph with edges that are only in both graph g and graph h.\n\nNote that this function may produce a graph with 0-degree vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.intersection",
    "page": "Docstrings",
    "title": "Erdos.intersection",
    "category": "function",
    "text": "Computes the intersection between:\n\nTwo lines\nA set of segments and a linear function of slope k passing by the origin.\n\nRequires argument:\n\nx1, y1, a1, x2, y2, a2::T<:AbstractFloat # Coordinates/slopes\npoints::Vector{Tuple{T, T, Int}}         # vector of points with T<:AbstractFloat\nk::R<:Real                             # number of routes (slope of the line)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.is_bipartite",
    "page": "Docstrings",
    "title": "Erdos.is_bipartite",
    "category": "function",
    "text": "is_bipartite(g)\n\nReturn true if graph g is bipartite.\n\nExamples\n\njulia> using LightGraphs\n\njulia> g = SimpleGraph(3);\n\njulia> add_edge!(g, 1, 2);\n\njulia> add_edge!(g, 2, 3);\n\njulia> is_bipartite(g)\ntrue\n\njulia> add_edge!(g, 1, 3);\n\njulia> is_bipartite(g)\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.is_connected",
    "page": "Docstrings",
    "title": "Erdos.is_connected",
    "category": "function",
    "text": "is_connected(g)\n\nReturn true if graph g is connected. For directed graphs, return true if graph g is weakly connected.\n\nExamples\n\njulia> g = Graph([0 1 0; 1 0 1; 0 1 0]);\n\njulia> is_connected(g)\ntrue\n\njulia> g = Graph([0 1 0 0 0; 1 0 1 0 0; 0 1 0 0 0; 0 0 0 0 1; 0 0 0 1 0]);\n\njulia> is_connected(g)\nfalse\n\njulia> g = DiGraph([0 1 0; 0 0 1; 1 0 0]);\n\njulia> is_connected(g)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.is_directed",
    "page": "Docstrings",
    "title": "Erdos.is_directed",
    "category": "function",
    "text": "is_directed(g)\n\nCheck if g a graph with directed edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.is_graphical",
    "page": "Docstrings",
    "title": "Erdos.is_graphical",
    "category": "function",
    "text": "is_graphical(degs::Vector{Int})\n\nCheck whether the degree sequence degs is graphical, according to Erdös-Gallai condition.\n\nTime complexity: O(length(degs)^2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.is_strongly_connected",
    "page": "Docstrings",
    "title": "Erdos.is_strongly_connected",
    "category": "function",
    "text": "is_strongly_connected(g)\n\nReturn true if directed graph g is strongly connected.\n\nExamples\n\njulia> g = DiGraph([0 1 0; 0 0 1; 1 0 0]);\n\njulia> is_strongly_connected(g)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.is_weakly_connected",
    "page": "Docstrings",
    "title": "Erdos.is_weakly_connected",
    "category": "function",
    "text": "is_weakly_connected(g)\n\nReturn true if the graph g is weakly connected. If g is undirected, this function is equivalent to is_connected(g).\n\nExamples\n\njulia> g = DiGraph([0 1 0; 0 0 1; 1 0 0]);\n\njulia> is_weakly_connected(g)\ntrue\n\njulia> g = DiGraph([0 1 0; 1 0 1; 0 0 0]);\n\njulia> is_connected(g)\ntrue\n\njulia> is_strongly_connected(g)\nfalse\n\njulia> is_weakly_connected(g)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.isgraphical",
    "page": "Docstrings",
    "title": "Erdos.isgraphical",
    "category": "function",
    "text": "isgraphical(degs)\n\nReturn true if the degree sequence degs is graphical, according to Erdös-Gallai condition.\n\nPerformance\n\nTime complexity: ``\\mathcal{O}(|degs|^2)``\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.join",
    "page": "Docstrings",
    "title": "Base.join",
    "category": "function",
    "text": "join(g, h)\n\nMerges graphs g and h using blockdiag and then adds all the edges between  the vertices in g and those in h.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.katz_centrality",
    "page": "Docstrings",
    "title": "Erdos.katz_centrality",
    "category": "function",
    "text": "Calculates the Katz centrality of the graph g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.kcore",
    "page": "Docstrings",
    "title": "Erdos.kcore",
    "category": "function",
    "text": "kcore(g, k) -> (gnew, vmap)\n\nReturns the k-core  of g along with a vertex map associating the mutated vertex indexes to the old ones (as in rem_vertices!).\n\nSee also cores\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.kishimoto",
    "page": "Docstrings",
    "title": "Erdos.kishimoto",
    "category": "function",
    "text": "Computes the maximum multiroute flow (for an integer number of routes) between the source and target vertexes in a flow graph using the Kishimoto algorithm. Returns the value of the multiroute flow as well as the final flow matrix, along with a multiroute cut if Boykov-Kolmogorov is used as a subroutine. Use a default capacity of 1 when the capacity matrix isn\'t specified. Requires arguments:\n\nflow_graph::ADiGraph                    # the input graph\nsource::Int                            # the source vertex\ntarget::Int                            # the target vertex\ncapacity_matrix::AbstractMatrix{T}   # edge flow capacities\nflow_algorithm::AbstractFlowAlgorithm, # keyword argument for algorithm\nroutes::Int                            # keyword argument for routes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.label_propagation",
    "page": "Docstrings",
    "title": "Erdos.label_propagation",
    "category": "function",
    "text": "label_propagation(g; maxiter=1000)\n\nCommunity detection using the label propagation algorithm (see Raghavan et al.). g is the input Graph, maxiter is the  maximum number of iterations. Returns a vertex assignments and the convergence history\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.laplacian_matrix",
    "page": "Docstrings",
    "title": "Erdos.laplacian_matrix",
    "category": "function",
    "text": "laplacian_matrix(g, dir::Symbol=:out, T::DataType=Int)\n\nReturns a sparse Laplacian matrix for a graph g, indexed by [u, v] vertices. dir has to be :in, :out or :all.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.local_clustering",
    "page": "Docstrings",
    "title": "Erdos.local_clustering",
    "category": "function",
    "text": "local_clustering(g, v)\n\nReturns a tuple (a,b), where a is the number of triangles in the neighborhood of v and b is the maximum number of possible triangles. It is related to the local clustering coefficient  by r=a/b.\n\n\n\n\n\nlocal_clustering(g, vlist = vertices(g))\n\nReturns two vectors, respectively containing  the first and second result of local_clustering_coefficients(g, v) for each v in vlist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.local_clustering_coefficient",
    "page": "Docstrings",
    "title": "Erdos.local_clustering_coefficient",
    "category": "function",
    "text": "local_clustering_coefficient(g, v)\n\nComputes the local clustering coefficient for node v.\n\n\n\n\n\nlocal_clustering_coefficient(g, vlist = vertices(g))\n\nReturns a vector containing  the local clustering coefficients for vertices vlist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.maximal_cliques",
    "page": "Docstrings",
    "title": "Erdos.maximal_cliques",
    "category": "function",
    "text": "Finds all maximal cliques of an undirected graph.\n\njulia> using Erdos\njulia> g = Graph(3)\njulia> add_edge!(g, 1, 2)\njulia> add_edge!(g, 2, 3)\njulia> maximal_cliques(g)\n2-element Array{Array{Int64,N},1}:\n [2,3]\n [2,1]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.maximum_adjacency_visit",
    "page": "Docstrings",
    "title": "Erdos.maximum_adjacency_visit",
    "category": "function",
    "text": "maximum_adjacency_visit(g[, distmx][, log][, io])\n\nReturn the vertices in g traversed by maximum adjacency search. An optional distmx matrix may be specified; if omitted, edge distances are assumed to be 1. If log (default false) is true, visitor events will be printed to io, which defaults to STDOUT; otherwise, no event information will be displayed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.maximum_flow",
    "page": "Docstrings",
    "title": "Erdos.maximum_flow",
    "category": "function",
    "text": "maximum_flow{T<:Number}(\n                    g::ADiGraph,\n                    source::Int,\n                    target::Int,\n                    capacity_matrix::AbstractMatrix{T} =\n                        DefaultCapacity(g);\n                    algorithm::AbstractFlowAlgorithm  =\n                        PushRelabelAlgorithm(),\n                    restriction::T = zero(T)\n                )\n\nGeneric maximumflow function. The function defaults to the Push-Relabel (also called Preflow) algorithm. Alternatively, the algorithm to be used can also be specified through a keyword argument. A default capacity of 1 is assumed for each link if no capacity matrix is provided. If the restriction is bigger than 0, it is applied to capacitymatrix.\n\nAll algorithms return a tuple with\n\nthe maximum flow\nthe flow matrix\nthe labelling associated to the minimum cut\n\nAvailable algorithms are DinicAlgorithm, EdmondsKarpAlgorithm, BoykovKolmogorovAlgorithm and PushRelabelAlgorithm.\n\nTime complexity is O(V²√E) for the push relabel algorithm.\n\nUsage Example:\n\n\n# Create a flow-graph and a capacity matrix\ng = DiGraph(8)\nflow_edges = [\n    (1,2,10),(1,3,5),(1,4,15),(2,3,4),(2,5,9),\n    (2,6,15),(3,4,4),(3,6,8),(4,7,16),(5,6,15),\n    (5,8,10),(6,7,15),(6,8,10),(7,3,6),(7,8,10)\n]\ncapacity_matrix = zeros(Int, 8, 8)\nfor e in flow_edges\n    u, v, f = e\n    add_edge!(g, u, v)\n    capacity_matrix[u,v] = f\nend\n\n# Run default maximum_flow without the capacity_matrix (assumes capacity 1. on each edge).\nf, F, labels = maximum_flow(g, 1, 8)\n\n# Run Endmonds-Karp algorithm\nf, F, labels = maximum_flow(g,1,8,capacity_matrix,algorithm=EdmondsKarpAlgorithm())\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.minimum_cut",
    "page": "Docstrings",
    "title": "Erdos.minimum_cut",
    "category": "function",
    "text": "minimum_cut(g, distmx=weights(g))\n\nReturn a tuple (parity, bestcut), where parity is a vector of integer values that determines the partition in g (1 or 2) and bestcut is the weight of the cut that makes this partition. An optional distmx matrix may be specified; if omitted, edge distances are assumed to be 1.\n\n\n\n\n\nminimum_cut(g, s, t, capacity_matrix=DefaultCapacity(); kws...)\n\nFinds the s-t cut of minimal weight according to the capacities matrix on the directed graph g. The solution is found through a maximal flow algorithm. See maximum_flow for the optional arguments.\n\nReturns a triple (f, cut, labels), where f is the weight of the cut, cut is a vector of the edges in the cut, and labels gives a partitioning of the vertices in two sets, according to the cut.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.minimum_spanning_tree",
    "page": "Docstrings",
    "title": "Erdos.minimum_spanning_tree",
    "category": "function",
    "text": "minimum_spanning_tree{T<:Real}(\n    g, distmx::AbstractMatrix{T} = weights(g)\n)\n\nPerforms Kruskal\'s algorithm on a connected, undirected graph g, having adjacency matrix distmx, and computes minimum spanning tree. Returns a Vector{KruskalHeapEntry}, that contains the containing edges and its weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.minmaxCapacity",
    "page": "Docstrings",
    "title": "Erdos.minmaxCapacity",
    "category": "function",
    "text": "Function to get the nonzero min and max function of a Matrix.\n\nNote: this is more efficient than maximum() / minimum() / extrema() since we have to ignore zero values.since we have to ignore zero values.\n\nRequires argument:\n\ncapacity_matrix::AbstractMatrix{T}   # edge flow capacities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.modularity",
    "page": "Docstrings",
    "title": "Erdos.modularity",
    "category": "function",
    "text": "modularity(g, c)\n\nComputes Newman\'s modularity Q for graph g given the partitioning c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.multiroute_flow",
    "page": "Docstrings",
    "title": "Erdos.multiroute_flow",
    "category": "function",
    "text": "The generic multiroute_flow function will output three kinds of results:\n\nWhen the number of routes is 0 or non-specified, the set of breaking points of\n\nthe multiroute flow is returned.\n\nWhen the input is limited to a set of breaking points and a route value k,\n\nonly the value of the k-route flow is returned\n\nOtherwise, a tuple with 1) the maximum flow and 2) the flow matrix. When the\n\nmax-flow subroutine is the Boykov-Kolmogorov algorithm, the associated mincut is returned as a third output.\n\nWhen the input is a network, it requires the following arguments:\n\nflow_graph::ADiGraph                   # the input graph\nsource::Int                           # the source vertex\ntarget::Int                           # the target vertex\ncapacity_matrix::AbstractMatrix{T}  # edge flow capacities with T<:Real\nflow_algorithm::AbstractFlowAlgorithm # keyword argument for flow algorithm\nmrf_algorithm::AbstractFlowAlgorithm  # keyword argument for multiroute flow algorithm\nroutes::R<:Real                       # keyword argument for the number of routes\n\nWhen the input is only the set of (breaking) points and the number of route, it requires the following arguments:\n\nbreakingpoints::Vector{Tuple{T, T, Int}},    # vector of breaking points\nroutes::R<:Real,                             # number of routes\n\nWhen the input is the set of (breaking) points, the number of routes, and the network descriptors, it requires the following arguments:\n\nbreakingpoints::Vector{Tuple{T1, T1, Int}} # vector of breaking points (T1<:Real)\nroutes::R<:Real                            # number of routes\nflow_graph::ADiGraph                        # the input graph\nsource::Int                                # the source vertex\ntarget::Int                                # the target vertex\ncapacity_matrix::AbstractMatrix{T2}      # optional edge flow capacities (T2<:Real)\nflow_algorithm::AbstractFlowAlgorithm      # keyword argument for algorithm\n\nThe function defaults to the Push-relabel (classical flow) and Kishimoto (multiroute) algorithms. Alternatively, the algorithms to be used can also be specified through  keyword arguments. A default capacity of 1 is assumed for each link if no capacity matrix is provided.\n\nThe mrf_algorithm keyword is inforced to Extended Multiroute Flow in the following cases:\n\nThe number of routes is non-integer\nThe number of routes is 0 or non-specified\n\nUsage Example :\n\n(please consult the  maxflow section for options about flowalgorithm and capacity_matrix)\n\n\n# Create a flow-graph and a capacity matrix\nflow_graph = DiGraph(8)\nflow_edges = [\n    (1, 2, 10), (1, 3, 5),  (1, 4, 15), (2, 3, 4),  (2, 5, 9),\n    (2, 6, 15), (3, 4, 4),  (3, 6, 8),  (4, 7, 16), (5, 6, 15),\n    (5, 8, 10), (6, 7, 15), (6, 8, 10), (7, 3, 6),  (7, 8, 10)\n]\ncapacity_matrix = zeros(Int, 8, 8)\nfor e in flow_edges\n    u, v, f = e\n    add_edge!(flow_graph, u, v)\n    capacity_matrix[u, v] = f\nend\n\n# Run default multiroute_flow with an integer number of routes = 2\nf, F = multiroute_flow(flow_graph, 1, 8, capacity_matrix, routes = 2)\n\n# Run default multiroute_flow with a noninteger number of routes = 1.5\nf, F = multiroute_flow(flow_graph, 1, 8, capacity_matrix, routes = 1.5)\n\n# Run default multiroute_flow for all the breaking points values\npoints = multiroute_flow(flow_graph, 1, 8, capacity_matrix)\n# Then run multiroute flow algorithm for any positive number of routes\nf, F = multiroute_flow(points, 1.5)\nf = multiroute_flow(points, 1.5, valueonly = true)\n\n# Run multiroute flow algorithm using Boykov-Kolmogorov algorithm as max_flow routine\nf, F, labels = multiroute_flow(flow_graph, 1, 8, capacity_matrix,\n               algorithm = BoykovKolmogorovAlgorithm(), routes = 2)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.ne",
    "page": "Docstrings",
    "title": "Erdos.ne",
    "category": "function",
    "text": "ne(g)\n\nThe number of edges in g.\n\nTime Complexity: O(1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.neighborhood",
    "page": "Docstrings",
    "title": "Erdos.neighborhood",
    "category": "function",
    "text": "neighborhood(g, v, d, distmx=weights(g); dir=:out)\n\nReturn a vector of each vertex in g at a geodesic distance less than or equal to d, where distances may be specified by distmx. \n\nOptional Arguments\n\ndir=:out: If g is directed, this argument specifies the edge direction\n\nwith respect to v of the edges to be considered. Possible values: :in or :out.\n\nExamples\n\njulia> g = DiGraph([0 1 0 0 0; 0 0 1 0 0; 1 0 0 1 0; 0 0 0 0 1; 0 0 0 1 0]);\n\njulia> neighborhood(g, 1, 2)\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\njulia> neighborhood(g, 1, 3)\n4-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n\njulia> neighborhood(g, 1, 3, [0 1 0 0 0; 0 0 1 0 0; 1 0 0 0.25 0; 0 0 0 0 0.25; 0 0 0 0.25 0])\n5-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n 5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.neighborhood_dists",
    "page": "Docstrings",
    "title": "Erdos.neighborhood_dists",
    "category": "function",
    "text": "neighborhood_dists(g, v, d, distmx=weights(g))\n\nReturn a tuple of each vertex at a geodesic distance less than or equal to d, where distances may be specified by distmx, along with its distance from v.\n\nOptional Arguments\n\ndir=:out: If g is directed, this argument specifies the edge direction\n\nwith respect to v of the edges to be considered. Possible values: :in or :out.\n\nExamples\n\njulia> g = DiGraph([0 1 0 0 0; 0 0 1 0 0; 1 0 0 1 0; 0 0 0 0 1; 0 0 0 1 0]);\n\njulia> neighborhood_dists(g, 1, 3)\n4-element Array{Tuple{Int64,Int64},1}:\n (1, 0)\n (2, 1)\n (3, 2)\n (4, 3)\n\njulia> neighborhood_dists(g, 1, 3, [0 1 0 0 0; 0 0 1 0 0; 1 0 0 0.25 0; 0 0 0 0 0.25; 0 0 0 0.25 0])\n5-element Array{Tuple{Int64,Float64},1}:\n (1, 0.0)\n (2, 1.0)\n (3, 2.0)\n (4, 2.25)\n (5, 2.5)\n\njulia> neighborhood_dists(g, 4, 3)\n2-element Array{Tuple{Int64,Int64},1}:\n (4, 0)\n (5, 1)\n\njulia> neighborhood_dists(g, 4, 3, dir=:in)\n5-element Array{Tuple{Int64,Int64},1}:\n (4, 0)\n (3, 1)\n (5, 1)\n (2, 2)\n (1, 3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.neighbors",
    "page": "Docstrings",
    "title": "Erdos.neighbors",
    "category": "function",
    "text": "neighbors(g, v)\n\nReturns a list of all neighbors from vertex v in g.\n\nFor directed graph, this is equivalent to out_neighbors(g, v).\n\nNOTE: it may return a reference, not a copy. Do not modify result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.nonbacktrack_embedding",
    "page": "Docstrings",
    "title": "Erdos.nonbacktrack_embedding",
    "category": "function",
    "text": "nonbacktrack_embedding(g::AGraph, k::Int)\n\nSpectral embedding of the non-backtracking matrix of g (see Krzakala et al.).\n\n`g`: imput Graph\n`k`: number of dimensions in which to embed\n\nReturns  a matrix ϕ where ϕ[:,i] are the coordinates for vertex i.\n\nNote:  does not explicitly construct the nonbacktracking_matrix. See nonbacktracking_matrix for details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.nonbacktracking_matrix",
    "page": "Docstrings",
    "title": "Erdos.nonbacktracking_matrix",
    "category": "function",
    "text": "nonbacktracking_matrix(g)\n\nReturn a non-backtracking matrix B and an edgemap storing the oriented edges\' positions in B. Given two arcs A_i j and A_k l in g the non-backtraking matrixBis defined asB{A{i j}, A{k l}} = δ{j k} * (1 - δ_{i l})``\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.nonbacktracking_randomwalk",
    "page": "Docstrings",
    "title": "Erdos.nonbacktracking_randomwalk",
    "category": "function",
    "text": "nonbacktracking_randomwalk(g, s, niter)\n\nPerform a non-backtracking random walk on directed graph g starting at vertex s and continuing for a maximum of niter steps. Return a vector of vertices visited in order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.num_self_loops",
    "page": "Docstrings",
    "title": "Erdos.num_self_loops",
    "category": "function",
    "text": "num_self_loops(g)\n\nReturns the number of self loops in g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.nv",
    "page": "Docstrings",
    "title": "Erdos.nv",
    "category": "function",
    "text": "nv(g)\n\nThe number of vertices in g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.out_adjlist",
    "page": "Docstrings",
    "title": "Erdos.out_adjlist",
    "category": "function",
    "text": "out_adjlist(g)\n\nReturns the forward adjacency list of a graph, i.e. a vector of vectors containing for each vertex the neighbors trhough outgoing edges.\n\nout_adjlist(g) == [collect(out_neighbors(i)) for i=1:nv(g)]\n\nThe adjacency list is be pre-calculated for most graph types. It is the same as adjlist and in_adjlist for undirected graphs and the same as adjlist for directed ones.\n\nNOTE: It may return a reference, not a copy. Do not modify result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.out_degree",
    "page": "Docstrings",
    "title": "Erdos.out_degree",
    "category": "function",
    "text": "out_degree(g, v)\n\nReturns the number of edges which end at vertex v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.out_degree_centrality",
    "page": "Docstrings",
    "title": "Erdos.out_degree_centrality",
    "category": "function",
    "text": "Calculates the degree centrality of the graph g, with optional (default) normalization.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.out_edges",
    "page": "Docstrings",
    "title": "Erdos.out_edges",
    "category": "function",
    "text": "out_edges(g, v)\n\nReturns an iterator to the edges in g coming from vertex v. v == src(e) for each returned edge e.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.out_neighbors",
    "page": "Docstrings",
    "title": "Erdos.out_neighbors",
    "category": "function",
    "text": "out_neighbors(g::AGraphOrDiGraph, v)\n\nReturns an iterable to all neighbors connected to vertex v by an outgoing edge.\n\nNOTE: it may return a reference, not a copy. Do not modify result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.pagerank",
    "page": "Docstrings",
    "title": "Erdos.pagerank",
    "category": "function",
    "text": "pagerank(g::ADiGraph, α=0.85, n=100, ϵ = 1.0e-6)\n\nCalculates the PageRank of the graph g. Can optionally specify a different damping factor (α), number of iterations (n), and convergence threshold (ϵ). If convergence is not reached within n iterations, an error will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.period",
    "page": "Docstrings",
    "title": "Erdos.period",
    "category": "function",
    "text": "period(g)\n\nReturn the (common) period for all vertices in a strongly connected directed graph. Will throw an error if the graph is not strongly connected.\n\nExamples\n\njulia> g = DiGraph([0 1 0; 0 0 1; 1 0 0]);\n\njulia> period(g)\n3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.periphery",
    "page": "Docstrings",
    "title": "Erdos.periphery",
    "category": "function",
    "text": "periphery(g, distmx=weights(g))\nperiphery(all_ecc)\n\nReturns the set of all vertices whose eccentricity is equal to the graph\'s diameter (that is, the set of vertices with the largest eccentricity).\n\nEventually a vector all_ecc contain the eccentricity of each node can be passed as argument.\n\nSee eccentricities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.pop_vertex!",
    "page": "Docstrings",
    "title": "Erdos.pop_vertex!",
    "category": "function",
    "text": "pop_vertex!(g)\n\nRemove the last vertex of g. Equivalent to rem_vertex!(g, nv(g)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.poslist",
    "page": "Docstrings",
    "title": "Erdos.poslist",
    "category": "function",
    "text": "pl[i][k] is the position of vertex i in the adjlist of its neighbour j=fadj[i][k], i.e. i == adj[j][pl[i][k]].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.push_flow!",
    "page": "Docstrings",
    "title": "Erdos.push_flow!",
    "category": "function",
    "text": "Pushes as much flow as possible through the given edge.\n\nRequires arguements:\n\ng::ADiGraph              # the input graph\nu                               # input from-vertex\nv                               # input to-vetex\ncapacity_matrix::AbstractMatrix{T}\nflow_matrix::AbstractMatrix{T}\nexcess::AbstractVector{T}\nheight::AbstractVector{Int}\nactive::AbstractVector{Bool}\nQ::PushRelabelHeap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.push_relabel_impl",
    "page": "Docstrings",
    "title": "Erdos.push_relabel_impl",
    "category": "function",
    "text": "Implementation of the push relabel algorithm with gap and highest excess heuristics. Takes O(V²√E) time.\n\nMaintains the following auxillary arrays:\n\nheight -> Stores the labels of all vertices\ncount  -> Stores the number of vertices at each height\nexcess -> Stores the difference between incoming and outgoing flow for all vertices\nactive -> Stores the status of all vertices. (e(v)>0 => active[v] = true)\nQ      -> The heap that stores active vertices waiting to be discharged.\n\nRequires arguments:\n\ng::ADiGraph                # the input graph\nsource                            # the source vertex\ntarget                            # the target vertex\ncapacity_matrix::AbstractMatrix{T}    # edge flow capacities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.quick_find!",
    "page": "Docstrings",
    "title": "Erdos.quick_find!",
    "category": "function",
    "text": "Performs Quick-Find algorithm on a given pair of nodes pand q, and makes a connection between them in the vector nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.radius",
    "page": "Docstrings",
    "title": "Erdos.radius",
    "category": "function",
    "text": "radius(g, distmx=weights(g))\n\nReturns the minimum distance between any two vertices in g. Distances  between two adjacent nodes are given by distmx.\n\nSee eccentricities, diameter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.random_configuration_model",
    "page": "Docstrings",
    "title": "Erdos.random_configuration_model",
    "category": "function",
    "text": "random_configuration_model(n::Int, k::Vector{Int}; seed=-1, check_graphical=false)\n\nCreates a random undirected graph according to the configuraton model. It contains n vertices, the vertex i having degree k[i].\n\nDefining c = mean(k), it allocates an array of nc Ints, and takes approximately nc^2 time.\n\nIf check_graphical=true makes sure that k is a graphical sequence (see is_graphical).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.random_regular_digraph",
    "page": "Docstrings",
    "title": "Erdos.random_regular_digraph",
    "category": "function",
    "text": "random_regular_digraph(n::Int, k::Int; dir::Symbol=:out, seed=-1)\n\nCreates a random directed regular graph with n vertices, each with degree k. The degree (in or out) can be specified using dir=:in or dir=:out. The default is dir=:out.\n\nFor directed graphs, allocates an n 	imes n sparse matrix of boolean as an adjacency matrix and uses that to generate the directed graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.random_regular_graph",
    "page": "Docstrings",
    "title": "Erdos.random_regular_graph",
    "category": "function",
    "text": "random_regular_graph(n::Int, k::Int; seed=-1)\n\nCreates a random undirected regular graph with n vertices, each with degree k.\n\nFor undirected graphs, allocates an array of nk Ints, and takes approximately nk^2 time. For k  n2, generates a graph of degree n-k-1 and returns its complement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.randomwalk",
    "page": "Docstrings",
    "title": "Erdos.randomwalk",
    "category": "function",
    "text": "randomwalk(g, s, niter)\n\nPerform a random walk on graph g starting at vertex s and continuing for a maximum of niter steps. Return a vector of vertices visited in order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.range_shuffle!",
    "page": "Docstrings",
    "title": "Erdos.range_shuffle!",
    "category": "function",
    "text": "Fast shuffle Array a in UnitRange r inplace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.readgraph",
    "page": "Docstrings",
    "title": "Erdos.readgraph",
    "category": "function",
    "text": "readgraph(filename, G=Graph)\nreadgraph(filename, t, G=Graph; compressed=false)\n\nReads a graph from  filename in the format t. Returns a graph of type G or the corresponding digraph/graph type. Compressed files can eventually be read.\n\nSupported formats are :gml, :dot, :graphml, :gexf, :net, :gt.\n\nIf no format is provided, it will be inferred from filename.\n\nreadgraph(s::Symbol, G=Graph)\n\nRead a graph identified by s from Erdos datasets collection (e.g. s=:karate). They are stored in the gt binary format in the datasets directory of the package. For a list of available graph refer to the documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.readnetwork",
    "page": "Docstrings",
    "title": "Erdos.readnetwork",
    "category": "function",
    "text": "readnetwork(filename, G=Graph)\nreadnetwork(filename, t, G=Graph; compressed=false)\n\nReads a graph from  filename in the format t. Returns a graph of type G or the corresponding digraph/graph type. Compressed files can eventually be read.\n\nSupported formats are :gml, :dot, :graphml, :gexf, :net, :gt.\n\nIf no format is provided, it will be inferred from filename.\n\nreadnetwork(s::Symbol, G=Graph)\n\nRead a graph identified by s from Erdos datasets collection (e.g. s=:karate). They are stored in the gt binary format in the datasets directory of the package. For a list of available graph refer to the documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.readpajek",
    "page": "Docstrings",
    "title": "Erdos.readpajek",
    "category": "function",
    "text": "readpajek{G}(f::IO, ::Type{G})\n\nReads a graph from file f in the Pajek .net format. Returns 1 (number of graphs written).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rebuild!",
    "page": "Docstrings",
    "title": "Erdos.rebuild!",
    "category": "function",
    "text": "rebuild!(g)\n\nCheck and restore the structure of g, which could be corrupted by the use of unsafe functions (e. g. unsafe_add_edge!)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.relabel!",
    "page": "Docstrings",
    "title": "Erdos.relabel!",
    "category": "function",
    "text": "Relabels a vertex with respect to its neighbors, to produce an admissable edge.\n\nRequires arguments:\n\ng::ADiGraph                 # the input graph\nv                                  # input vertex to be relabeled\ncapacity_matrix::AbstractMatrix{T}\nflow_matrix::AbstractMatrix{T}\nexcess::AbstractVector{T}\nheight::AbstractVector{Int}\nactive::AbstractVector{Bool}\ncount::AbstractVector{Int}\nQ::AbstractVector{Int}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_edge!",
    "page": "Docstrings",
    "title": "Erdos.rem_edge!",
    "category": "function",
    "text": "rem_edge!(g, e)\n\nRemove the edge e.\n\nrem_edge!(g, u, v)\n\nRemove the edge from u to v.\n\nReturns false if edge removal fails (e.g., if the edge does not exist) and true otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_edge_property!",
    "page": "Docstrings",
    "title": "Erdos.rem_edge_property!",
    "category": "function",
    "text": "rem_edge_property!(g, name)\n\nRemove the edge property  name from g.\n\nrem_eprop! is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_eprop!",
    "page": "Docstrings",
    "title": "Erdos.rem_eprop!",
    "category": "function",
    "text": "See rem_edge_property!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_gprop!",
    "page": "Docstrings",
    "title": "Erdos.rem_gprop!",
    "category": "function",
    "text": "See rem_graph_property!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_graph_property!",
    "page": "Docstrings",
    "title": "Erdos.rem_graph_property!",
    "category": "function",
    "text": "rem_graph_property!(g, name)\n\nRemove the property name from g.\n\nrem_gprop! is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_vertex!",
    "page": "Docstrings",
    "title": "Erdos.rem_vertex!",
    "category": "function",
    "text": "rem_vertex!(g, v)\n\nRemove the vertex v from graph g. It will change the label of the last vertex of the old graph to v.\n\nSee also rem_vertices!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_vertex_property!",
    "page": "Docstrings",
    "title": "Erdos.rem_vertex_property!",
    "category": "function",
    "text": "rem_vertex_property!(g, name)\n\nRemove the vertex property  name from g.\n\nrem_vprop! is the short form of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_vertices!",
    "page": "Docstrings",
    "title": "Erdos.rem_vertices!",
    "category": "function",
    "text": "rem_vertices!(g, vs)\nrem_vertices!(g, v1, v2, ....)\n\nRemove the vertices in vs from graph g.\n\nSome vertices of g may be reindexed during the removal. To keep track of the reindexing, a vertex map is returned, associating vertices with changed indexes to their old indexes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.rem_vprop!",
    "page": "Docstrings",
    "title": "Erdos.rem_vprop!",
    "category": "function",
    "text": "See rem_vertex_property!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.residual_graph",
    "page": "Docstrings",
    "title": "Erdos.residual_graph",
    "category": "function",
    "text": "residual_graph{G<:ADiGraph}(g::G, capacity, flow)\n\nComputers the residual graph of g associated to given flow and capacity. See wikipedia.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.reverse",
    "page": "Docstrings",
    "title": "Base.reverse",
    "category": "function",
    "text": "reverse(e)\n\nReturns an edge with swapped src(e) and dst(e).\n\n\n\n\n\nreverse(g::ADiGraph)\n\nProduces a graph where all edges are reversed from the original.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.reverse!",
    "page": "Docstrings",
    "title": "Base.reverse!",
    "category": "function",
    "text": "reverse!(g::DiGraph)\n\nIn-place reverse (modifies the original graph).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.sample!",
    "page": "Docstrings",
    "title": "Erdos.sample!",
    "category": "function",
    "text": "sample!([rng,] a, k; exclude = ())\n\nSample k element from array a without repetition and eventually excluding elements in exclude. Pay attention, it changes the order of the elements in a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.self_avoiding_randomwalk",
    "page": "Docstrings",
    "title": "Erdos.self_avoiding_randomwalk",
    "category": "function",
    "text": "self_avoiding_randomwalk(g, s, niter)\n\nPerform a self-avoiding walk on graph g starting at vertex s and continuing for a maximum of niter steps. Return a vector of vertices visited in order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.set_graph_property!",
    "page": "Docstrings",
    "title": "Erdos.set_graph_property!",
    "category": "function",
    "text": "set_graph_property!(g, name, x)\n\nSet the property name to value x to g. Creates the property if it doesn\'t exist. gprop! can be conveniently used as a short form of this function.\n\nExample\n\ng = Network(10, 20)\nset_graph_property!(g, \"label\", \"My Network\")\n# or equivalently\ngprop!(g, \"label\", \"My Network\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.shortest_paths",
    "page": "Docstrings",
    "title": "Erdos.shortest_paths",
    "category": "function",
    "text": "shortest_paths(g, x...; kws...)\n\nComputes shortest paths using Dijkstra\'s algorithm. See dijkstra_shortest_paths.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.slope",
    "page": "Docstrings",
    "title": "Erdos.slope",
    "category": "function",
    "text": "Function to get the slope of the restricted flow. The slope is initialized at 0 and is incremented for each non saturated edge in the restricted min-cut. Requires argument:   flowgraph::ADiGraph,                   # the input graph   capacitymatrix::AbstractMatrix{T},  # edge flow capacities   cut::Vector{Int},                      # cut information for vertices   restriction::T                         # value of the restriction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.spectral_distance",
    "page": "Docstrings",
    "title": "Erdos.spectral_distance",
    "category": "function",
    "text": "spectral_distance(G₁, G₂ [, k])\n\nCompute the spectral distance between undirected n-vertex graphs G₁ and G₂ using the top k ≤ n greatest eigenvalues. If k is ommitted, uses full spectrum.\n\nFor further details, please refer to:\n\nJOVANOVIC, I.; STANIC, Z., 2014. Spectral Distances of Graphs Based on their Different Matrix Representations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.src",
    "page": "Docstrings",
    "title": "Erdos.src",
    "category": "function",
    "text": "src(e)\n\nReturns the source of an edge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.static_fitness_model",
    "page": "Docstrings",
    "title": "Erdos.static_fitness_model",
    "category": "function",
    "text": "static_fitness_model(m, fitness, G=Graph; seed=-1)\nstatic_fitness_model(m, fitness_out, fitness_in, G=DiGraph; seed=-1)\n\nGenerates a random graph with length(fitness) nodes and m edges, in which the probability of the existence of edge (i, j) is proportional to fitness[i]*fitness[j]. Time complexity is O(|V| + |E| log |E|).\n\nIn and out fitness have to be supplied for generating directed graphs.\n\nReference:\n\nGoh K-I, Kahng B, Kim D: Universal behaviour of load distribution\n\nin scale-free networks. Phys Rev Lett 87(27):278701, 2001.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.static_scale_free",
    "page": "Docstrings",
    "title": "Erdos.static_scale_free",
    "category": "function",
    "text": "function static_scale_free(n, m, α, G=Graph;\n        seed=-1, finite_size_correction=true)\n\nGenerates a random graph with n vertices, m edges and expected power-law degree distribution with exponent α. finite_size_correction determines whether to use the finite size correction proposed by Cho et al. This generator calls internally the static_fitness_model function. Time complexity is O(|V| + |E| log |E|).\n\nfunction static_scale_free(n, m, α_out, α_in, G=DiGraph;\n        seed=-1, finite_size_correction=true)\n\nGenerates a random digraph\n\nReferences:\n\nGoh K-I, Kahng B, Kim D: Universal behaviour of load distribution in scale-free networks. Phys Rev Lett 87(27):278701, 2001.\nChung F and Lu L: Connected components in a random graph with given degree sequences. Annals of Combinatorics 6, 125-145, 2002.\nCho YS, Kim JS, Park J, Kahng B, Kim D: Percolation transitions in scale-free networks under the Achlioptas process. Phys Rev Lett 103:135702, 2009.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.stochastic_block_model",
    "page": "Docstrings",
    "title": "Erdos.stochastic_block_model",
    "category": "function",
    "text": "stochastic_block_model(c::Matrix{Float64}, n::Vector{Int}; seed::Int = -1)\nstochastic_block_model(cin::Float64, coff::Float64, n::Vector{Int}; seed::Int = -1)\n\nReturns a Graph generated according to the Stochastic Block Model (SBM).\n\nc[a,b] : Mean number of neighbors of a vertex in block a belonging to block b.            Only the upper triangular part is considered, since the lower traingular is            determined by cba = cab * nanb. n[a] : Number of vertices in block a\n\nThe second form samples from a SBM with c[a,a]=cin, and c[a,b]=coff.\n\nFor a dynamic version of the SBM see the StochasticBlockModel type and related functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.strongly_connected_components",
    "page": "Docstrings",
    "title": "Erdos.strongly_connected_components",
    "category": "function",
    "text": "strongly_connected_components(g)\n\nCompute the strongly connected components of a directed graph g.\n\nReturn an array of arrays, each of which is the entire connected component.\n\nImplementation Notes\n\nThe order of the components is not part of the API contract.\n\nExamples\n\njulia> g = DiGraph([0 1 0; 1 0 1; 0 0 0]);\n\njulia> strongly_connected_components(g)\n2-element Array{Array{Int64,1},1}:\n [3]\n [1, 2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.subgraph",
    "page": "Docstrings",
    "title": "Erdos.subgraph",
    "category": "function",
    "text": "subgraph(g, vlist) -> sg, vlist\nsubgraph(g, elist) -> sg, vlist\n\nReturns the subgraph of g induced by the vertices in  vlist or by the edges in elist, along with vlist itself (a newly created vector for the second method).\n\nThe returned graph has length(vlist) vertices, with the new vertex i corresponding to the vertex of the original graph in the i-th position of vlist.\n\nFor easy subgraph creation also g[vlist] or g[elist] can be used.\n\nIf g is a network, vector and edge properties won\'t be converved sg. You can preserve properties using the subnetwork method.\n\nUsage Examples:\n\ng = CompleteGraph(10)\nsg, vlist = subgraph(g, 5:8)\n@assert g[5:8] == sg\n@assert nv(sg) == 4\n@assert ne(sg) == 6\n@assert vm[4] == 8\n\nsg, vlist = subgraph(g, [2,8,3,4])\n@asssert sg == g[[2,8,3,4]]\n\nelist = [Edge(1,2), Edge(3,4), Edge(4,8)]\nsg, vlist = subgraph(g, elist)\n@asssert sg == g[elist]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.subnetwork",
    "page": "Docstrings",
    "title": "Erdos.subnetwork",
    "category": "function",
    "text": "subnetwork(g, vlist) -> sg, vlist\nsubnetwork(g, elist) -> sg, vlist\n\nEquivalent to subgraph but preserves vertex and edge properties when g is a network.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.swap_vertices!",
    "page": "Docstrings",
    "title": "Erdos.swap_vertices!",
    "category": "function",
    "text": "swap_vertices!(g, u, v)\n\nSwap the labels of vertices u and v. In the new graph all old neighbors of vertex u will be neighbors of v and viceversa.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.symmetric_difference",
    "page": "Docstrings",
    "title": "Erdos.symmetric_difference",
    "category": "function",
    "text": "symmetric_difference(g, h)\n\nProduces a graph with edges from graph g that do not exist in graph h, and vice versa.\n\nNote that this function may produce a graph with 0-degree vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.tensor_product",
    "page": "Docstrings",
    "title": "Erdos.tensor_product",
    "category": "function",
    "text": "tensor_product(g, h)\n\nReturns the (tensor product)[https://en.wikipedia.org/wiki/Tensorproductof_graphs] of g and h\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.topological_sort_by_dfs",
    "page": "Docstrings",
    "title": "Erdos.topological_sort_by_dfs",
    "category": "function",
    "text": "topological_sort_by_dfs(g)\n\nReturn a toplogical sort of a directed graph g as a vector of vertices in topological order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.tree",
    "page": "Docstrings",
    "title": "Erdos.tree",
    "category": "function",
    "text": "tree(parents)\n\nConvert a parents array into a directed graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.triangles",
    "page": "Docstrings",
    "title": "Erdos.triangles",
    "category": "function",
    "text": "triangles(g, v)\n\nReturns the number of triangles in the neighborhood for node v.\n\n\n\n\n\ntriangles(g, vlist = vertices(g))\n\nReturns a vector containing the number of triangles for vertices vlist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.union",
    "page": "Docstrings",
    "title": "Base.union",
    "category": "function",
    "text": "union(g, h)\n\nMerges graphs g and h by taking the set union of all vertices and edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.unsafe_add_edge!",
    "page": "Docstrings",
    "title": "Erdos.unsafe_add_edge!",
    "category": "function",
    "text": "unsafe_add_edge!(g, u, v)\n\nPossibly faster and unsafer version of add_edge!, which doesn\'t guarantee some graph invariant properties.\n\nFor example, some graph types (e.g. Graph) assume sorted adjacency lists as members. In this case order is not preserved while inserting new edges, resulting in a faster construction of the graph. As a consequence though, some functions such has_edge(g, u, v) could give incorrect results.\n\nTo restore the correct behaviour, call rebuild!(g) after the last call to unsafe_add_edge!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.vertex_property",
    "page": "Docstrings",
    "title": "Erdos.vertex_property",
    "category": "function",
    "text": "vertex_property(g, name)\n\nReturn an vertex map corresponding to property name of vertices in g.\n\nvertex_property(g)\n\nReturns a dictionary with elements property_name => vertex_map.\n\nvertex_property(g, v)\n\nReturns a dictionary of the form name => val containing all the properties associated to vertex v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.vertextype",
    "page": "Docstrings",
    "title": "Erdos.vertextype",
    "category": "function",
    "text": "vertextype(g)\nvertextype(G)\n\nReturns the integer type of vertices of graph g (or graph type G).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.vertices",
    "page": "Docstrings",
    "title": "Erdos.vertices",
    "category": "function",
    "text": "vertices(g)\n\nReturns an iterator to the vertices of a graph (i.e. 1:nv(g))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.vote!",
    "page": "Docstrings",
    "title": "Erdos.vote!",
    "category": "function",
    "text": "Return the most frequency label.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.vprop",
    "page": "Docstrings",
    "title": "Erdos.vprop",
    "category": "function",
    "text": "See vertex_property\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.vprop!",
    "page": "Docstrings",
    "title": "Erdos.vprop!",
    "category": "function",
    "text": "See add_vertex_property!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.watts_strogatz",
    "page": "Docstrings",
    "title": "Erdos.watts_strogatz",
    "category": "function",
    "text": "watts_strogatz(n, k, β, G=Graph; seed=-1)\n\nCreates a Watts-Strogatz small model random graph with n vertices, each with degree k. Edges are randomized per the model based on probability β.\n\nUndirected graphs are created by default. Directed graphs can be created passing a directed graph type as last argument (e.g. DiGraph).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.weakly_connected_components",
    "page": "Docstrings",
    "title": "Erdos.weakly_connected_components",
    "category": "function",
    "text": "weakly_connected_components(g)\n\nReturn the weakly connected components of the graph g. This is equivalent to the connected components of the undirected equivalent of g. For undirected graphs this is equivalent to the connected_components of g.\n\nExamples\n\njulia> g = DiGraph([0 1 0; 1 0 1; 0 0 0]);\n\njulia> weakly_connected_components(g)\n1-element Array{Array{Int64,1},1}:\n [1, 2, 3]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.weights",
    "page": "Docstrings",
    "title": "Erdos.weights",
    "category": "function",
    "text": "weights(g)\n\nReturns an edge map containing the \"weights\" associated to edges. For simple graphs, the return value is ConstEdgeMap(g, 1). For networks, returns the \"weights\" edge property if defined, otherwise the constant map.\n\nNotice that the edge map returned by weights is the default value for the edge weights used in many flow and  distance on graph algorithms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.writegml",
    "page": "Docstrings",
    "title": "Erdos.writegml",
    "category": "function",
    "text": "writegml(f, g)\n\nWrites a graph g to a file f in the GML format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.writegraph",
    "page": "Docstrings",
    "title": "Erdos.writegraph",
    "category": "function",
    "text": "writegraph(file, g)\nwritegraph(file, g, t; compress=false)\n\nSave a graph g to file in the format t.\n\nEventually the resulting file can be compressed in the gzip format.\n\nCurrently supported formats are :gml, :graphml, :gexf, :dot, :net, :gt.\n\nIf no format is provided, it will be inferred from file along with compression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.writenetwork",
    "page": "Docstrings",
    "title": "Erdos.writenetwork",
    "category": "function",
    "text": "writenetwork(file, g)\nwritenetwork(file, g, t; compress=false)\n\nSave a graph g to file in the format t.\n\nEventually the resulting file can be compressed in the gzip format.\n\nCurrently supported formats are :gml, :graphml, :gexf, :dot, :net, :gt.\n\nIf no format is provided, it will be inferred from file along with compression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Erdos.writepajek",
    "page": "Docstrings",
    "title": "Erdos.writepajek",
    "category": "function",
    "text": "Writes a graph g to a file f in the Pajek .net format. Returns 1 (number of graphs written).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Erdos.ADiGraphErdos.ADiNetworkErdos.AEdgeErdos.AEdgeMapErdos.AGraphErdos.AGraphOrDiGraphErdos.AIndexedEdgeErdos.ANetOrDiNetErdos.ANetworkErdos.AVertexMapErdos.AbstractDijkstraStateErdos.AbstractFlowAlgorithmErdos.AbstractMultirouteFlowAlgorithmErdos.AbstractPathStateErdos.BellmanFordStateErdos.BinaryTreeErdos.BoundedMinkowskiCostErdos.BoykovKolmogorovAlgorithmErdos.BullGraphErdos.ChvatalGraphErdos.CliqueGraphErdos.CombinatorialAdjacencyErdos.CompleteBipartiteGraphErdos.CompleteDiGraphErdos.CompleteGraphErdos.ConstEdgeMapErdos.ConstVertexMapErdos.CubicalGraphErdos.CycleDiGraphErdos.CycleGraphErdos.DATASETS_DIRErdos.DefaultCapacityErdos.DefaultEditHeuristicErdos.DesarguesGraphErdos.DiGraphErdos.DiNetworkErdos.DiamondGraphErdos.DijkstraHeapEntryErdos.DijkstraStateErdos.DinicAlgorithmErdos.DodecahedralGraphErdos.DoubleBinaryTreeErdos.EdgeErdos.EdgeMapErdos.EdmondsKarpAlgorithmErdos.ErdosErdos.ExtendedMultirouteFlowAlgorithmErdos.FloydWarshallStateErdos.FruchtGraphErdos.GraphErdos.GraphOrDiGraphErdos.GreaterThan2Erdos.GridErdos.HeawoodGraphErdos.HouseGraphErdos.HouseXGraphErdos.IcosahedralGraphErdos.IndexedEdgeErdos.KishimotoAlgorithmErdos.KrackhardtKiteGraphErdos.KruskalHeapEntryErdos.LessThan2Erdos.MaximumAdjacencyErdos.MinkowskiCostErdos.MoebiusKantorGraphErdos.NIErdos.NegativeCycleErrorErdos.NeighCommErdos.NetOrDiNetErdos.NetworkErdos.NumErdos.OctahedralGraphErdos.PappusGraphErdos.PathDiGraphErdos.PathGraphErdos.PetersenGraphErdos.PropertyStoreErdos.PushRelabelAlgorithmErdos.PushRelabelHeapErdos.RoachGraphErdos.SedgewickMazeGraphErdos.StarDiGraphErdos.StarGraphErdos.StochasticBlockModelErdos.TetrahedralGraphErdos.TruncatedCubeGraphErdos.TruncatedTetrahedronDiGraphErdos.TruncatedTetrahedronGraphErdos.TutteGraphErdos.VertexMapErdos.WheelDiGraphErdos.WheelGraphErdos._accumulate_basic!Erdos._accumulate_endpoints!Erdos._bfs_parentsErdos._build_subnetwork!Erdos._build_subraph!Erdos._completeErdos._construct_fitnessErdos._create_static_fitness_graph!Erdos._degree_centralityErdos._dfs_parentsErdos._graph_from_matr!Erdos._insert_and_dedup!Erdos._magicErdos._myrandErdos._neighborhoodErdos._printstrvecErdos._readgmlErdos._readnetgmlErdos._rem_vertices!Erdos._rescale!Erdos._sortErdos._suitableErdos._try_creation_rrgErdos._versionErdos.a_starErdos.a_star_impl!Erdos.add_edge!Erdos.add_edge_property!Erdos.add_vertex!Erdos.add_vertex_property!Erdos.add_vertices!Erdos.adjacency_listErdos.adjacency_matrixErdos.adjacency_spectrumErdos.adopt!Erdos.all_edgesErdos.all_neighborsErdos.attracting_componentsErdos.augment!Erdos.augment_path!Erdos.auxiliaryPointsErdos.badjErdos.barabasi_albertErdos.barabasi_albert!Erdos.bellman_ford_shortest_pathsErdos.betweenness_centralityErdos.bfs_parentsErdos.bfs_treeErdos.bipartite_mapErdos.blockcountsErdos.blockfractionsErdos.blocking_flow!Erdos.boykov_kolmogorov_implErdos.breakingPointsErdos.cartesian_productErdos.centerErdos.ciErdos.clean_vertex!Erdos.close_vertex!Erdos.closeness_centralityErdos.community_detection_betheErdos.community_detection_nbackErdos.community_detection_thresholdErdos.complementErdos.completeErdos.complete!Erdos.componentsErdos.components_dictErdos.condensationErdos.connected_componentsErdos.connected_components!Erdos.contract!Erdos.coo_sparseErdos.core_periphery_degErdos.coresErdos.count_spanning_treesErdos.countfirstErdos.crosspathErdos.cut_labelsErdos.degreeErdos.degree_centralityErdos.densityErdos.dfs_parentsErdos.dfs_treeErdos.diameterErdos.differenceErdos.digraphErdos.digraphtypeErdos.dijkstra_shortest_pathsErdos.dinic_implErdos.discharge!Erdos.discover_vertex!Erdos.dismantle_ciErdos.dismantle_ci_initErdos.dismantle_ci_oneiter!Erdos.dstErdos.eccentricitiesErdos.eccentricityErdos.edgeErdos.edge_propertyErdos.edgemap2adjlistErdos.edgesErdos.edgetypeErdos.edit_distanceErdos.edmonds_karp_implErdos.egonetErdos.empty_flowErdos.emrfErdos.enqueue_vertex!Erdos.enumerate_pathsErdos.epropErdos.eprop!Erdos.eprop_namesErdos.erdos_renyiErdos.euclidean_graphErdos.evalErdos.examine_neighbor!Erdos.fadjErdos.fetch_pathErdos.fetch_path!Erdos.filemapErdos.fill_mat_from_map!Erdos.find_path!Erdos.floyd_warshall_shortest_pathsErdos.gap!Erdos.gdistancesErdos.gdistances!Erdos.getRNGErdos.getchildErdos.getchild!Erdos.gexf_read_one_graph!Erdos.gexf_read_one_net!Erdos.gexf_typesErdos.gexf_types_revErdos.gexfparseErdos.gexfstringErdos.global_clustering_coefficientErdos.gmlprintvalErdos.gmltypeofErdos.gmlvalErdos.gpropErdos.gprop!Erdos.gprop_namesErdos.graphErdos.graph_propertyErdos.graphml_read_one_graph!Erdos.graphml_read_one_net!Erdos.graphml_typesErdos.graphml_types_revErdos.graphmlparseErdos.graphmlstringErdos.graphtypeErdos.gtpropmapErdos.has_cyclesErdos.has_cycyclesErdos.has_edgeErdos.has_edge_propertyErdos.has_epropErdos.has_gpropErdos.has_graph_propertyErdos.has_negative_edge_cycleErdos.has_pathErdos.has_self_loopsErdos.has_vertexErdos.has_vertex_propertyErdos.has_vpropErdos.idxErdos.in_adjlistErdos.in_degreeErdos.in_degree_centralityErdos.in_edgesErdos.in_neighborsErdos.incidence_matrixErdos.includeErdos.indegreeErdos.induced_subgraphErdos.intersectErdos.intersectionErdos.is_bipartiteErdos.is_complete_pathErdos.is_connectedErdos.is_cyclicErdos.is_directedErdos.is_graphicalErdos.is_strongly_connectedErdos.is_weakly_connectedErdos.isgraphicalErdos.joinErdos.katz_centralityErdos.kcoreErdos.kishimotoErdos.label_propagationErdos.laplacian_matrixErdos.laplacian_spectrumErdos.local_clusteringErdos.local_clustering_coefficientErdos.longshowErdos.make_edgestreamErdos.maximal_cliquesErdos.maximum_adjacency_visitErdos.maximum_flowErdos.minimum_cutErdos.minimum_spanning_treeErdos.minmaxCapacityErdos.minutypeErdos.modularityErdos.multiroute_flowErdos.myrandErdos.neErdos.nearbipartiteSBMErdos.neighborhoodErdos.neighborhood_distsErdos.neighborsErdos.nonbacktrack_embeddingErdos.nonbacktracking_matrixErdos.nonbacktracking_randomwalkErdos.num_self_loopsErdos.nvErdos.open_vertex!Erdos.out_adjlistErdos.out_degreeErdos.out_degree_centralityErdos.out_edgesErdos.out_neighborsErdos.outdegreeErdos.pagerankErdos.periodErdos.peripheryErdos.pop_vertex!Erdos.poslistErdos.push_flow!Erdos.push_relabel_implErdos.quick_find!Erdos.radiusErdos.randbinomialErdos.random_configuration_modelErdos.random_regular_digraphErdos.random_regular_graphErdos.randomwalkErdos.range_shuffle!Erdos.readgexfErdos.readgmlErdos.readgraphErdos.readgraphmlErdos.readgtErdos.readgt_adj!Erdos.readgt_propErdos.readgt_props!Erdos.readnetgexfErdos.readnetgmlErdos.readnetgraphmlErdos.readnetgtErdos.readnetworkErdos.readpajekErdos.readpajek_edges!Erdos.rebuild!Erdos.relabel!Erdos.rem_edge!Erdos.rem_edge_property!Erdos.rem_eprop!Erdos.rem_gprop!Erdos.rem_graph_property!Erdos.rem_vertex!Erdos.rem_vertex_property!Erdos.rem_vertices!Erdos.rem_vprop!Erdos.renumber_labels!Erdos.residual_graphErdos.reverseErdos.reverse!Erdos.sample!Erdos.seed_dsfmtErdos.self_avoiding_randomwalkErdos.set_graph_property!Erdos.shortest_pathsErdos.shortshowErdos.signedtypeErdos.slopeErdos.spectral_distanceErdos.splitgmlErdos.srcErdos.static_fitness_modelErdos.static_scale_freeErdos.stochastic_block_modelErdos.strongly_connected_componentsErdos.subgraphErdos.subnetworkErdos.swap_vertices!Erdos.symmetric_differenceErdos.tensor_productErdos.topological_sort_by_dfsErdos.traverse_graph!Erdos.traverse_graph_withlogErdos.treeErdos.trianglesErdos.unionErdos.unsafe_add_edge!Erdos.updateheap!Erdos.vertex_propertyErdos.vertextypeErdos.verticesErdos.visited_verticesErdos.vote!Erdos.vpropErdos.vprop!Erdos.vprop_namesErdos.watts_strogatzErdos.weakly_connected_componentsErdos.weightsErdos.writedotErdos.writegexfErdos.writegmlErdos.writegraphErdos.writegraphmlErdos.writegtErdos.writegt_adjErdos.writegt_propErdos.writegt_propsErdos.writenetgexfErdos.writenetgmlErdos.writenetgraphmlErdos.writenetgtErdos.writenetworkErdos.writepajek"
},

]}
