var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleGraphs-1",
    "page": "Readme",
    "title": "SimpleGraphs",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This module defines two data types for working with graphs:The SimpleGraph type represents undirected graphs without loops or multiple edges.\nThe SimpleDigraph type represents directed graphs in which there may be at most one directed edge (u,v) from a vertex u to a vertex v. There may also be a directed edge in the opposite direction, (v,u).Additional functionality can be found in these modules:DrawSimpleGraphs for visualization.\nSimpleGraph Algorithms for functions relying on [integer] linear programming.\nSimpleGraphRepresentations for creating and analyzing some specialclasses of graphs."
},

{
    "location": "#User\'s-Guide-1",
    "page": "Readme",
    "title": "User\'s Guide",
    "category": "section",
    "text": "Please see the Wiki for extensive information pertaining to the SimpleGraph type.The SimpleDigraph type is not so well developed nor documented. See the source files in the src directory."
},

{
    "location": "#Thanks-1",
    "page": "Readme",
    "title": "Thanks",
    "category": "section",
    "text": "Thank you to JHU students Tara Abrishami and Laura Bao for contributions to this project."
},

{
    "location": "#Please-Help-1",
    "page": "Readme",
    "title": "Please Help",
    "category": "section",
    "text": "This is a work in process with a lot of more features that can/should be added. If you\'re interested in contributing, please contact me. I\'m especially interested in JHU undergraduates getting involved.Ed Scheinerman (ers@jhu.edu)"
},

{
    "location": "autodocs/#SimpleGraphs.AbstractSimpleGraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.AbstractSimpleGraph",
    "category": "type",
    "text": "AbstractSimpleGraph is a parent class for SimpleGraph and SimpleDigraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.BuckyBall",
    "page": "Docstrings",
    "title": "SimpleGraphs.BuckyBall",
    "category": "function",
    "text": "BuckyBall() returns the Bucky ball graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Complete",
    "page": "Docstrings",
    "title": "SimpleGraphs.Complete",
    "category": "function",
    "text": "Complete(n) returns a complete graph with n vertices 1:n.\n\nComplete(n,m) returns a complete bipartite graph with n vertices in one part and m vertices in the other.\n\nComplete([n1,n2,...,nt]) returns a complete multipartite graph with parts of size n1, n2, ..., nt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Cube",
    "page": "Docstrings",
    "title": "SimpleGraphs.Cube",
    "category": "function",
    "text": "Cube(n) creates the n-dimensional cube graph. This graph has 2^n vertices named by all possible length-n strings of 0s and 1s. Two vertices are adjacent iff they differ in exactly one position.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Cycle",
    "page": "Docstrings",
    "title": "SimpleGraphs.Cycle",
    "category": "function",
    "text": "Cycle(n) creates a cycle with vertex set 1:n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.DFS",
    "page": "Docstrings",
    "title": "SimpleGraphs.DFS",
    "category": "function",
    "text": "perform a depth first search on graph G starting at vertex v\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.DirectedComplete",
    "page": "Docstrings",
    "title": "SimpleGraphs.DirectedComplete",
    "category": "function",
    "text": "DirectedComplete(n) creates a directed complete graph with all possible edges (including a loop at each vertex). Use DirectedComplete(n,false) to supress the creation of loops.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.DirectedCycle",
    "page": "Docstrings",
    "title": "SimpleGraphs.DirectedCycle",
    "category": "function",
    "text": "DirectedCycle(n) creates a directed cycles with vertices 1:n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.DirectedPath",
    "page": "Docstrings",
    "title": "SimpleGraphs.DirectedPath",
    "category": "function",
    "text": "DirectedPath(n) creates a directed cycles with vertices 1:n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Dodecahedron",
    "page": "Docstrings",
    "title": "SimpleGraphs.Dodecahedron",
    "category": "function",
    "text": "Dodecahedron() creates the dodecahedron SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Frucht",
    "page": "Docstrings",
    "title": "SimpleGraphs.Frucht",
    "category": "function",
    "text": "Frucht() returns the Frucht graph: A 12-vertex, 3-regular graph with no non-nontrivial automorphisms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.GraphEmbedding",
    "page": "Docstrings",
    "title": "SimpleGraphs.GraphEmbedding",
    "category": "type",
    "text": "GraphEmbedding(G) creates a drawing of the SimpleGraph G. It is given a circular embedding.\n\nNote: Direct usage of GraphEmbedding is deprecated!\n\nGraphEmbedding(G,d) creates a drawing using the Dict d to specify the vertex locations. d should map vertices of G to Vectors that specify x,y-coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Grid",
    "page": "Docstrings",
    "title": "SimpleGraphs.Grid",
    "category": "function",
    "text": "Grid(n,m) creates an n-by-m grid graph. For other grids, we suggest Path(n1)*Path(n2)*Path(n3) optionally wrapped in relabel. See also: Cube.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Hoffman",
    "page": "Docstrings",
    "title": "SimpleGraphs.Hoffman",
    "category": "function",
    "text": "Hoffman() creates the Hoffman graph which is cospectral with, but not isomorphic to, Cube(4).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.HoffmanSingleton",
    "page": "Docstrings",
    "title": "SimpleGraphs.HoffmanSingleton",
    "category": "function",
    "text": "HoffmanSingleton() creates the Hoffman-Singleton graph. This is a 7-regular graph whose diameter is 2 and whose girth is 5.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Icosahedron",
    "page": "Docstrings",
    "title": "SimpleGraphs.Icosahedron",
    "category": "function",
    "text": "Icosahedron() creates the icosahedron SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.IntDigraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.IntDigraph",
    "category": "function",
    "text": "IntDigraph() creates a new directed graph with vertices of type Int64.\n\nIntDigraph(n) prepopulates the vertex set with vertices 1:n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.IntGraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.IntGraph",
    "category": "function",
    "text": "IntGraph() creates a new SimpleGraph whose vertices are of type Int. Called as IntGraph(n::Int) prepopulates the vertex set with vertices 1:n.\n\nIntGraph(A) where A is an adjacency matrix creates a graph for which A is the adjacency matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Johnson",
    "page": "Docstrings",
    "title": "SimpleGraphs.Johnson",
    "category": "function",
    "text": "Johnson(n,k) creates the Johnson graph whose vertices and the k-element subsets of {1,2,...,n}. Vertices v and w are adjacent if their intersection has size k-1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Kneser",
    "page": "Docstrings",
    "title": "SimpleGraphs.Kneser",
    "category": "function",
    "text": "Kneser(n,m) creates the Kneser graph whose vertices are all the m-element subsets of 1:n in which two vertices are adjacent iff they are disjoint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Knight",
    "page": "Docstrings",
    "title": "SimpleGraphs.Knight",
    "category": "function",
    "text": "Knight(r::Int=8,c::Int=8) creates a Knight\'s Moves graph on a r-by-c grid. That is, the vertices of this graph are the squares of an r-by-c chess board. Two vertices are adjacent if a Knight can go from one of these squares to the other in a single move.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.LZ",
    "page": "Docstrings",
    "title": "SimpleGraphs.LZ",
    "category": "function",
    "text": "Computes L^Z defined in (5) of the Reference\n\nInput: Z: current layout (coordinates)        d: Ideal distances (default: all 1)        w: weights (default: d.^-2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.NE",
    "page": "Docstrings",
    "title": "SimpleGraphs.NE",
    "category": "function",
    "text": "NE(G) returns the number of edges in G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.NV",
    "page": "Docstrings",
    "title": "SimpleGraphs.NV",
    "category": "function",
    "text": "NV(G) returns the number of vertices in G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Octahedron",
    "page": "Docstrings",
    "title": "SimpleGraphs.Octahedron",
    "category": "function",
    "text": "Octahedron() creates the octaahedron SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Paley",
    "page": "Docstrings",
    "title": "SimpleGraphs.Paley",
    "category": "function",
    "text": "Paley(p) creates the Paley graph with p vertices named 0:(p-1). Here p must be a prime with p%4==1. Vertices u and v are adjacent iff u-v is a quadratic residue (perfect square) modulo p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Path",
    "page": "Docstrings",
    "title": "SimpleGraphs.Path",
    "category": "function",
    "text": "Path(n) creates a path graph with n vertices named 1:n.\n\nPath(array) creates a path graph with vertices array[1], array[2], etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Petersen",
    "page": "Docstrings",
    "title": "SimpleGraphs.Petersen",
    "category": "function",
    "text": "Petersen() returns the Petersen graph. The vertices are labeled as the 2-element subsets of 1:5. Wrap in relabel to have vertices named 1:10. See also: Kneser.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.RandomDigraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.RandomDigraph",
    "category": "function",
    "text": "RandomDigraph(n,p) creates an Erdos-Renyi style random directed graph with vertices 1:n and edge probability p (equal to 0.5 by default). The possible edges (u,v) and (v,u) are independent. No loops are created. To also create loops (each with probability p) use RandomDigraph(n,p,true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.RandomGraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.RandomGraph",
    "category": "function",
    "text": "RandomGraph(n,p=0.5) creates an Erdos-Renyi random graph with n vertices and edge probability p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.RandomRegular",
    "page": "Docstrings",
    "title": "SimpleGraphs.RandomRegular",
    "category": "function",
    "text": "RandomRegular(n,d) creates a random d-regular graph on n vertices. This can take a while especially if the arguments are large. Call with an optional third argument to activate verbose progress reports: RandomRegular(n,p,true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.RandomSBM",
    "page": "Docstrings",
    "title": "SimpleGraphs.RandomSBM",
    "category": "function",
    "text": "RandomSBM(bmap,pmat) creates a random stochastic block model random graph. The vector bmap is a list of n positive integers giving the block number of vertices 1:n. The i,j-entry of the matrix pmat gives the probability of an edge from a vertex in block i to a vertex in block j.\n\nRandomSBM(n,pvec,pmat) creates such a graph with n vertices. The vector pvec gives the probabilities that vertices fall into a given block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.RandomTournament",
    "page": "Docstrings",
    "title": "SimpleGraphs.RandomTournament",
    "category": "function",
    "text": "RandomTournament(n) creates a random tournament with vertex set 1:n.  This is equivalent to randomly assigning a direction to every edge of a simple complete graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.RandomTree",
    "page": "Docstrings",
    "title": "SimpleGraphs.RandomTree",
    "category": "function",
    "text": "RandomTree(n) creates a random tree on n vertices each with probability 1/n^(n-2).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.ShiftDigraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.ShiftDigraph",
    "category": "function",
    "text": "ShiftDigraph(alphabet,n) creates a SimpleDigraph whose vertices are all length-n tuples of the elements in alphabet (which can be an array such as [0,1] or a string such as \"abc\"). An edge from u to v corresponds to an element dropped from the first position in u and another element added to the end yielding v. For example, in ShiftDigraph([0,1],5) there are two edges leaving vertex (0,1,0,1,1); one goes to (1,0,1,1,0) and the other to (1,0,1,1,1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.SimpleDigraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.SimpleDigraph",
    "category": "type",
    "text": "SimpleDigraph() creates a new directed graph with vertices of Any type. This can be restricted to vertics of type T with SimpleDigraph{T}().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.SimpleGraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.SimpleGraph",
    "category": "type",
    "text": "The SimpleGraph type represents a simple graph; that is, an undirected graph with no loops and no multiple edges.\n\nUse SimpleGraph() to create a new graph in which the vertices may be Any type. Use SimpleGraph{T}() to create a new graph in which the vertices are of type T. See IntGraph and StringGraph as special cases.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Spindle",
    "page": "Docstrings",
    "title": "SimpleGraphs.Spindle",
    "category": "function",
    "text": "Spindle() returns the Moser spindle graph. This is a seven-vertex unit distance graph with chromatic number equal to 4.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.StringDigraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.StringDigraph",
    "category": "function",
    "text": "StringDigraph() creates a new directe graph with vertices of type String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.StringGraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.StringGraph",
    "category": "function",
    "text": "A StringGraph is a SimpleGraph whose vertices are of type String.\n\nWhen constructed with StringGraph() creates an empty SimpleGraph{String}.\n\nWhen invoked as StringGraph(file::AbstractString) opens the named file for parsing as a graph. Each line of the file should contain one or two tokens separated by white space. If the line contains a single token, we add that token as a vertex. If the line contains two (or more) tokens, then the first two tokens are taken as vertex names and (assuming they are different) the corresponding edge is created. Any extra tokens on the line are ignored. Lines that begin with a # are ignored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Tetrahedron",
    "page": "Docstrings",
    "title": "SimpleGraphs.Tetrahedron",
    "category": "function",
    "text": "Tetrahedron() creates the tetrahedron SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.TorusDigraph",
    "page": "Docstrings",
    "title": "SimpleGraphs.TorusDigraph",
    "category": "function",
    "text": "function for creating a Torus Graph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.Wheel",
    "page": "Docstrings",
    "title": "SimpleGraphs.Wheel",
    "category": "function",
    "text": "Wheel(n) creates a wheel graph with n vertices. That is, a cycle with n-1 vertices 1:(n-1) all adjacent to a common single vertex, n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.add!",
    "page": "Docstrings",
    "title": "SimpleGraphs.add!",
    "category": "function",
    "text": "add!(G,v) adds a new vertex v to the graph.\n\nadd!(G,v,w) adds a new edge (v,w) to the graph. If one (or both) of those vertices is not already in the graph, it is added to the vertex set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.add_edges!",
    "page": "Docstrings",
    "title": "SimpleGraphs.add_edges!",
    "category": "function",
    "text": "add_edges!(G,edge_table) adds edges to the graph G. The argument edge_table is an m-by-2 array of vertices. Each row of the table represents an edge to add to G. Returns the number of edges successfully added to G.\n\nThis works both when G is a SimpleGraph and when G is a SimpleDigraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.adjacency",
    "page": "Docstrings",
    "title": "SimpleGraphs.adjacency",
    "category": "function",
    "text": "adjacency(G) returns the adjacency matrix of G.\n\nNote: If the vertices can be sorted by sort, then the first row of the adjacency matrix corresponds to the first vertex (in order) in G and so forth. However, if the vertices are not sortable in this way, the mapping between vertices and rows/columns of the matrix is unpredictable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.adjoint",
    "page": "Docstrings",
    "title": "Base.adjoint",
    "category": "function",
    "text": "G\' is equivalent to complement(G).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.all_tuples",
    "page": "Docstrings",
    "title": "SimpleGraphs.all_tuples",
    "category": "function",
    "text": "all_tuples(alphabet, n) creates an iterator that produces all length-n tuples of distinct elements in alphabet.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.allow_loops!",
    "page": "Docstrings",
    "title": "SimpleGraphs.allow_loops!",
    "category": "function",
    "text": "allow_loops!(G) enables G to have loops`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.bipartition",
    "page": "Docstrings",
    "title": "SimpleGraphs.bipartition",
    "category": "function",
    "text": "bipartition(G) creates a bipartition of the graph (or returns an error if the graph is not bipartite. Output is a Partition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.bisect",
    "page": "Docstrings",
    "title": "SimpleGraphs.bisect",
    "category": "function",
    "text": "bisect(G::SimpleGraph) partitions the vertex set of G using the eigenvector associated with the second smallest eigenvalue of the graph\'s Laplacian matrix (called x below).\n\nThis can be invoked as follows:\n\nbisect(G,\"user\",pivot) splits the vertices v depending on x[v] >= pivot vs. x[v] < pivot.\nbisect(G,\"zero\") is the same as bisect(G,\"user\", 0.0).\nbisect(G,\"median\") is equivalent to bisect(G,\"user\",m) where m is the median value of x.\nbisect(G,\"equal\") creates a partition in which the two parts have sizes the differ by at most 1.\n\nA plain call to bisect(G) is equivalent to bisect(G,\"zero\") (which is the same as bisect(G,\"user\", 0.0)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.cache_check",
    "page": "Docstrings",
    "title": "SimpleGraphs.cache_check",
    "category": "function",
    "text": "cache_check(G,item) checks if the symbol item is a valid key.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.cache_clear",
    "page": "Docstrings",
    "title": "SimpleGraphs.cache_clear",
    "category": "function",
    "text": "cache_clear(G) clears all items in G\'s cache.\n\ncache_clear(G,item) clears just that item.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.cache_off",
    "page": "Docstrings",
    "title": "SimpleGraphs.cache_off",
    "category": "function",
    "text": "cache_off(G) deactivates cache checking. You may also wish to call cache_clear to recover storage.\n\nSee also: cache_on.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.cache_on",
    "page": "Docstrings",
    "title": "SimpleGraphs.cache_on",
    "category": "function",
    "text": "cache_on(G) activates results caching for this graph. See also: cache_off.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.cache_recall",
    "page": "Docstrings",
    "title": "SimpleGraphs.cache_recall",
    "category": "function",
    "text": "cache_recall(G,item) retreives the value associated with item.\n\nWARNING: No check is done to see if this value is defined. Be sure to use cache_check first!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.cache_save",
    "page": "Docstrings",
    "title": "SimpleGraphs.cache_save",
    "category": "function",
    "text": "cache_save(G,item,value) saves value associated with the symbol (key) item in the cache for this graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.cartesian",
    "page": "Docstrings",
    "title": "SimpleGraphs.cartesian",
    "category": "function",
    "text": "cartesian(G,H) creates the Cartesian product of the two graphs. This can be abbreviated as G*H.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.char_poly",
    "page": "Docstrings",
    "title": "SimpleGraphs.char_poly",
    "category": "function",
    "text": "char_poly(G) returns the characteristic polynomial of adjacency(G). Use char_poly(G,function) for other possible integer matrix functions such as laplace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.circular!",
    "page": "Docstrings",
    "title": "SimpleGraphs.circular!",
    "category": "function",
    "text": "circular!(X) arranges the vertices of the graph held in the GraphEmbedding around a circle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.complement",
    "page": "Docstrings",
    "title": "SimpleGraphs.complement",
    "category": "function",
    "text": "complement(G) creates (as a new graph) the complement of G. Note that G\' is a short cut for complement(G).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.complement!",
    "page": "Docstrings",
    "title": "SimpleGraphs.complement!",
    "category": "function",
    "text": "complement!(G) replaces G with its complement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.components",
    "page": "Docstrings",
    "title": "SimpleGraphs.components",
    "category": "function",
    "text": "components(G) returns the vertex sets of the connected components of G (as a Partition).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.contract!",
    "page": "Docstrings",
    "title": "SimpleGraphs.contract!",
    "category": "function",
    "text": "contract!(G,u,v) contracts the edge (u,v) in the graph. The merged vertex is named u (hence contract!(G,v,u) results in a different, albeit isomorphic, graph).\n\nNote: The edge (u,v) need not be present in the graph. If missing, this is equivalent to first adding the edge to the graph and then contracting it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.cross_edges",
    "page": "Docstrings",
    "title": "SimpleGraphs.cross_edges",
    "category": "function",
    "text": "cross_edges(G::SimpleGraph,A,B) returns the set of edges of G with one end in A and one end in B. Here A and B are collections of vertices of G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.deg",
    "page": "Docstrings",
    "title": "SimpleGraphs.deg",
    "category": "function",
    "text": "deg(G,v) gives the degree of v in G.\n\ndeg(G) gives the degree sequence (sorted).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.deg_hist",
    "page": "Docstrings",
    "title": "SimpleGraphs.deg_hist",
    "category": "function",
    "text": "deg_hist(G) gives a tally of how many vertices of each degree are present in the graph. Because Julia arrays are 1-based, the indexing is a bit off. Specifically, entry k in the returned array is the number of vertices of degree k-1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.delete!",
    "page": "Docstrings",
    "title": "Base.delete!",
    "category": "function",
    "text": "delete!(G,v) deletes vertex v (and any edges incident with v) from the graph.\n\ndelete!(G,v,w) deletes the edge (v,w) from G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.diam",
    "page": "Docstrings",
    "title": "SimpleGraphs.diam",
    "category": "function",
    "text": "diam(G) returns the diameter of G or -1 if G is not connected.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.disjoint_union",
    "page": "Docstrings",
    "title": "SimpleGraphs.disjoint_union",
    "category": "function",
    "text": "disjoint_union(G,H) is a new graph formed by taking disjoint copies of G and H (and no additional edges).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractLattices.dist",
    "page": "Docstrings",
    "title": "AbstractLattices.dist",
    "category": "function",
    "text": "dist(G,u,v) finds the length of a shortest path from u to v in G. Returns -1 if no such path exists.\n\ndist(G,u) finds the distance from u to all other vertices in G. Result is returned as a Dict.\n\ndist(G) finds all pairs of distances in G. Result is a Dict whose [u,v] entry is the distance from u to v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.dist_matrix",
    "page": "Docstrings",
    "title": "SimpleGraphs.dist_matrix",
    "category": "function",
    "text": "dist_matrix(G) returns a matrix whose i,j-entry is the distance from the ith vertex to the jth vertex. If there is no i,j-path, that entry is -1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.draw_labels",
    "page": "Docstrings",
    "title": "SimpleGraphs.draw_labels",
    "category": "function",
    "text": "draw_labels(G) will add the vertices names to the drawing window.\n\nThe results are usually ugly. One can try increasing the size of the vertices (see set_vertex_size). The font size of the labels can be specified using draw_labels(G,FontSize). The default is 10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.dual_deg",
    "page": "Docstrings",
    "title": "SimpleGraphs.dual_deg",
    "category": "function",
    "text": "dual_deg(G,v) returns a two-tuple consisting of the out degree and in degree of the vertex v.\n\ndual_deg(G) gives a list of all the dual degrees.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.eccentricity",
    "page": "Docstrings",
    "title": "SimpleGraphs.eccentricity",
    "category": "function",
    "text": "eccentricity(G,v) returns the eccentricty of vertex v in the graph G. This is the maximum distance from v to another vertex (or -1 if the graph is not connected).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.edge_length",
    "page": "Docstrings",
    "title": "SimpleGraphs.edge_length",
    "category": "function",
    "text": "edge_length(G) returns an array containing the lengths of the edges in the current embedding of G.\n\n\n\n\n\nedge_length(G,e) gives the distance between the embedded endpoints of the edge e in the drawing G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.eigvals",
    "page": "Docstrings",
    "title": "LinearAlgebra.eigvals",
    "category": "function",
    "text": "eigvals(G) for a SimpleGraph returns the eigenvalues of G\'s adjacency matrix. More generally, eigvals(G,mat) returns the eigenvalues of mat(G) where mat is a matrix-valued function of G. In particular, one can use mat(G,laplace) to find the eigenvalues of G\'s Laplacian.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.elist",
    "page": "Docstrings",
    "title": "SimpleGraphs.elist",
    "category": "function",
    "text": "elist(G) returns the edges of G as a list (array).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.embed",
    "page": "Docstrings",
    "title": "SimpleGraphs.embed",
    "category": "function",
    "text": "embed(G) creates a new embedding for G. The full call is\n\nembed(G,algorithm;args...)\n\nThe symbol algorithm indicates the embedding algorithm. The args are a collection of possible arguments to be sent to the algorithm.\n\nThe algorithm defaults to :circular and may be one of the following:\n\n:circular: arrange the vertices evenly in a circle.\n:random: arrange the vertices randomly.\n:spring: use the spring layout from GraphLayout. Optional argument:\niterations.\n:stress: use the stress layout from GraphLayout.\n:spectral: use the spectral embedding. Optional arguments:\nxcol – which eigenvalue to use for the x coordinate.\nycol – which eigenvalue to use for the y coordinate\n\nNote that if the graph already has (say) an embedding, that embedding may be used as the starting point for one of the algorithms.\n\n\n\n\n\nembed(G,d) specifies an embedding of the graph G with a dictionary d that maps vertices to coordinates (as two dimensional vectors [x,y]).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.euler",
    "page": "Docstrings",
    "title": "SimpleGraphs.euler",
    "category": "function",
    "text": "euler(G,u,v) finds an Euler trail in G starting at u and ending at v returned as a list of vertices (in the order they are visited on the trail).\n\neuler(G,u) finds an Euler tour beginning and ending at u. Alternatively, call euler(G) and the initial/final vertex will be selected for you.\n\nNote: The algorithm will succeed even if there are isolated vertices in the graph (just don\'t choose an isolated vertex as the first/last).\n\nIf no Euler trail/tour exists, an empty list is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.fastN!",
    "page": "Docstrings",
    "title": "SimpleGraphs.fastN!",
    "category": "function",
    "text": "fastN!(G,flg=true) is used to turn on (or off) fast neighborhood lookup in graphs. Switching this off decreases the size of the data structure holding the graph, but slows down look up of edges.\n\nNote: Fast neighborhood look up is on by default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.find_path",
    "page": "Docstrings",
    "title": "SimpleGraphs.find_path",
    "category": "function",
    "text": "find_path(G,s,t) finds a shortest path from s to t. If no such path exists, an empty list is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.forbid_loops!",
    "page": "Docstrings",
    "title": "SimpleGraphs.forbid_loops!",
    "category": "function",
    "text": "forbid_loops!(G) disables the digraph\'s ability to have loops. It also removes any loops it may already have.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.geogebra",
    "page": "Docstrings",
    "title": "SimpleGraphs.geogebra",
    "category": "function",
    "text": "geogebra(G,file_name) takes a SimpleGraph and writes out a script to produce a drawing of this graph in GeoGebra.\n\nHere is the secret sauce to make this work.\n\nRun geogebra(G,file_name) to save the script to file_name. By default, the file name is geogebra.txt.\nCopy the contents of file_name to the clipboard.\nCreate a new GeoGebra document.\nIn the Input zone at the bottom, enter Button[] to create a new button.\nRight click the button and select the Object Properties... menu option.\nGo to the Scripting tab and paste in the copied commands.\nSave and close the properties window.\nPress the newly created button.\n\nSome properties of the vertices can be specified in this function with named parameters as follows:\n\nvertex_labels: If set to true, the vertices in the drawing have labels. Default is false (no labels drawn). Note that the color of the labels matches the color of the vertices, so if you set the color to white the labels will be invisible.\nvertex_color: Use this to specify the fill color of the vertices. The default is \"black\".\nvertex_colors: This is a dictionary mapping vertices to color names. Vertices are given the color specified. If, however, a vertex is missing from this dictionary, then vertex_color is used instead.\nvertex_size: Use this to specify the radius of the vertices. The default is 3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.get_embedding_direct",
    "page": "Docstrings",
    "title": "SimpleGraphs.get_embedding_direct",
    "category": "function",
    "text": "get_embedding_direct(G) returns a direct reference to a graph\'s embedding. This function is not exposed. Users should use cache_recall(G,:GraphEmbedding) instead to retrieve a copy of the drawing. If there is not drawing, a default (circular) drawing is created.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.get_line_color",
    "page": "Docstrings",
    "title": "SimpleGraphs.get_line_color",
    "category": "function",
    "text": "get_line_color(G) returns the color used to draw edges and the circles around vertices. See set_line_color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.get_vertex_color",
    "page": "Docstrings",
    "title": "SimpleGraphs.get_vertex_color",
    "category": "function",
    "text": "get_vertex_color(G) returns the color used to fill in vertices. See set_vertex_color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.get_vertex_size",
    "page": "Docstrings",
    "title": "SimpleGraphs.get_vertex_size",
    "category": "function",
    "text": "get_vertex_size(G) returns the size of the circle used when drawing vertices. See also set_vertex_size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.getindex",
    "page": "Docstrings",
    "title": "Base.getindex",
    "category": "function",
    "text": "Abbreviation for lex(G,H) for SimpleGraphs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.getxy",
    "page": "Docstrings",
    "title": "SimpleGraphs.getxy",
    "category": "function",
    "text": "getxy(G) returns a copy of the dictionary mapping vertices to their x,y-coordinates. This is a way of saving an embedding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.girth",
    "page": "Docstrings",
    "title": "SimpleGraphs.girth",
    "category": "function",
    "text": "girth(G) computes the length of a shortest cycle in G or returns 0 if G is acyclic.\n\nWarning: This implementation is quite inefficient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.girth_cycle",
    "page": "Docstrings",
    "title": "SimpleGraphs.girth_cycle",
    "category": "function",
    "text": "girth_cycle(G) returns a shorest cycle of G as an array listing the vertices on that cycle, or an empty array if G is acyclic.\n\nWarning: This implementation is quite inefficient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.graffle",
    "page": "Docstrings",
    "title": "SimpleGraphs.graffle",
    "category": "function",
    "text": "graffle(G::SimpleGraph, filename=\"julia.graffle\",rad=9) creates an OmniGraffle document of this drawing.\n\nG is the graph\nfilename is the name of the OmniGraffle document (be sure to end with .graffle)\nrad is the radius of the circles representing the vertices\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.graph_center",
    "page": "Docstrings",
    "title": "SimpleGraphs.graph_center",
    "category": "function",
    "text": "graph_center(G) returns the set of vertices of a SimpleGraph with minimum eccentricities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.greedy_color",
    "page": "Docstrings",
    "title": "SimpleGraphs.greedy_color",
    "category": "function",
    "text": "greedy_color(G,seq) creates a greedy proper coloring of the graph. The argument seq should be a 1-dimensional array containing every vertex exactly once (the function does not check this for you). The function follows that order in creating the coloring which is returned to you as a Dict mapping vertices to positive integers (representing the colors).\n\nIf seq is omitted, a random permutation of the vertices is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.hamiltonian_cycle",
    "page": "Docstrings",
    "title": "SimpleGraphs.hamiltonian_cycle",
    "category": "function",
    "text": "hamiltonian_cycle(G::SimpleGraph) returns a Hamiltonian cycle in the graph (if one exists) or an empty array (otherwise). This works reasonably well for small graphs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.has",
    "page": "Docstrings",
    "title": "SimpleGraphs.has",
    "category": "function",
    "text": "has(G,v) returns true iff v is a vertex of G.\n\nhas(G,v,w) returns true iff (v,w) is an edge of G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.has_embedding",
    "page": "Docstrings",
    "title": "SimpleGraphs.has_embedding",
    "category": "function",
    "text": "has_embedding(G) returns true if an embedding has been created for G in its cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.in_deg",
    "page": "Docstrings",
    "title": "SimpleGraphs.in_deg",
    "category": "function",
    "text": "in_deg(G,v) is the in degree of vertex v.\n\nin_deg(G) is a sorted list of the in degrees of all vertices in the directed graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.in_neighbors",
    "page": "Docstrings",
    "title": "SimpleGraphs.in_neighbors",
    "category": "function",
    "text": "in_neighbors(G,v) gives a list of all of v\'s in neighbors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.incidence",
    "page": "Docstrings",
    "title": "SimpleGraphs.incidence",
    "category": "function",
    "text": "incidence(G) returns the vertex-edge incidence matrix of G.\n\nNotes:\n\nThe result is a sparse matrix. Wrap in full to convert to nonsparse.\nEach column of the matrix has exactly one +1 and one -1. If G\n\nis undirected and an unsigned incidence matrix is desired, use incidence(G,false).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.indep_poly",
    "page": "Docstrings",
    "title": "SimpleGraphs.indep_poly",
    "category": "function",
    "text": "indep_poly(G) returns the independence polynomial of the SimpleGraph G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.induce",
    "page": "Docstrings",
    "title": "SimpleGraphs.induce",
    "category": "function",
    "text": "induce(G,A) creates the induced subgraph of G with vertices in the set A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.interlace",
    "page": "Docstrings",
    "title": "SimpleGraphs.interlace",
    "category": "function",
    "text": "interlace(G) returns the interlace polynomial of the graph G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.is_acyclic",
    "page": "Docstrings",
    "title": "SimpleGraphs.is_acyclic",
    "category": "function",
    "text": "is_acyclic(G) returns true if G has no cycles and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.is_connected",
    "page": "Docstrings",
    "title": "SimpleGraphs.is_connected",
    "category": "function",
    "text": "is_connected(G) determines if G is connected.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.is_cut_edge",
    "page": "Docstrings",
    "title": "SimpleGraphs.is_cut_edge",
    "category": "function",
    "text": "is_cut_edge(G,u,v) [or is_cut_edge(G,e)] determins if (u,v) [or e] is a cut edge of G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.is_looped",
    "page": "Docstrings",
    "title": "SimpleGraphs.is_looped",
    "category": "function",
    "text": "is_looped(G) indicates if the directed graph G is capable of having loops. Returning true does not mean that digraph actually has loops.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.is_strongly_connected",
    "page": "Docstrings",
    "title": "SimpleGraphs.is_strongly_connected",
    "category": "function",
    "text": "test if a directed graph is strongly connected by using DFS\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.join",
    "page": "Docstrings",
    "title": "Base.join",
    "category": "function",
    "text": "join(G,H) is a new graph formed by taking disjoint copies of G and H together with all possible edges between those copies.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.laplace",
    "page": "Docstrings",
    "title": "SimpleGraphs.laplace",
    "category": "function",
    "text": "laplace(G) returns the Laplacian matrix of G. This is the adjacency matrix minus the (diagonal) degree matrix. See adjacency to understand how vertices correspond to rows/columns of the resulting matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.layout_spring_adj",
    "page": "Docstrings",
    "title": "SimpleGraphs.layout_spring_adj",
    "category": "function",
    "text": "Use the spring/repulsion model of Fruchterman and Reingold (1991):\n    Attractive force:  f_a(d) =  d^2 / k\n    Repulsive force:  f_r(d) = -k^2 / d\nwhere d is distance between two vertices and the optimal distance\nbetween vertices k is defined as C * sqrt( area / num_vertices )\nwhere C is a parameter we can adjust\n\nArguments:\nadj_matrix Adjacency matrix of some type. Non-zero of the eltype\n           of the matrix is used to determine if a link exists,\n           but currently no sense of magnitude\nC          Constant to fiddle with density of resulting layout\nMAXITER    Number of iterations we apply the forces\nINITTEMP   Initial \"temperature\", controls movement per iteration\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.lex",
    "page": "Docstrings",
    "title": "SimpleGraphs.lex",
    "category": "function",
    "text": "lex(G,H) computes the lexicographic product of the graphs G and H. The vertex set of this graph is the set of all ordered pairs (g,h) (with g a vertex of G and h a vertex of H in which we have the edge (g,h)~(g\',h\') if either g~g\' in G or else g=g and h~h\'.\n\nWe can use the notation G[H] also to create lex(G,H).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.line_graph",
    "page": "Docstrings",
    "title": "SimpleGraphs.line_graph",
    "category": "function",
    "text": "line_graph(G) creates the line graph of G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.list2dict",
    "page": "Docstrings",
    "title": "SimpleGraphs.list2dict",
    "category": "function",
    "text": "list2dict(list) takes a list of (Symbol,Any) pairs and converts them to a dictionary mapping the symbols to their associated values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.local_complement!",
    "page": "Docstrings",
    "title": "SimpleGraphs.local_complement!",
    "category": "function",
    "text": "local_complement!(G,v) complements the edges in the neighborhood of v. That is, if u and w are neighbors of v then we toggle the edge/nonedge uw, modifying the graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.loops",
    "page": "Docstrings",
    "title": "SimpleGraphs.loops",
    "category": "function",
    "text": "loops(G) returns a list of vertices at which a loop is present.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.matching_poly",
    "page": "Docstrings",
    "title": "SimpleGraphs.matching_poly",
    "category": "function",
    "text": "matching_poly(G) returns the matching polynomial of the SimpleGraph G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.my_layout_stressmajorize_adj",
    "page": "Docstrings",
    "title": "SimpleGraphs.my_layout_stressmajorize_adj",
    "category": "function",
    "text": "Compute graph layout using stress majorization\n\nInputs:\n\nδ: Matrix of pairwise distances\np: Dimension of embedding (default: 2)\nw: Matrix of weights. If not specified, defaults to\n       w[i,j] = δ[i,j]^-2 if δ[i,j] is nonzero, or 0 otherwise\nX0: Initial guess for the layout. Coordinates are given in rows.\n    If not specified, default to random matrix of Gaussians\n\nAdditional optional keyword arguments control the convergence of the algorithm and the additional output as requested:\n\nmaxiter:   Maximum number of iterations. Default: 400size(X0, 1)^2\nabstols:   Absolute tolerance for convergence of stress.\n           The iterations terminate if the difference between two\n           successive stresses is less than abstol.\n           Default: √(eps(eltype(X0))\nreltols:   Relative tolerance for convergence of stress.\n           The iterations terminate if the difference between two\n           successive stresses relative to the current stress is less than\n           reltol. Default: √(eps(eltype(X0))\nabstolx:   Absolute tolerance for convergence of layout.\n           The iterations terminate if the Frobenius norm of two successive\n           layouts is less than abstolx. Default: √(eps(eltype(X0))\nverbose:   If true, prints convergence information at each iteration.\n           Default: false\nreturnall: If true, returns all iterates and their associated stresses.\n           If false (default), returns the last iterate\n\nOutput:\n\nThe final layout X, with coordinates given in rows, unless returnall=true.\n\nReference:\n\nThe main equation to solve is (8) of:\n\n@incollection{\n    author = {Emden R Gansner and Yehuda Koren and Stephen North},\n    title = {Graph Drawing by Stress Majorization}\n    year={2005},\n    isbn={978-3-540-24528-5},\n    booktitle={Graph Drawing},\n    seriesvolume={3383},\n    series={Lecture Notes in Computer Science},\n    editor={Pach, J\'anos},\n    doi={10.1007/978-3-540-31843-9_25},\n    publisher={Springer Berlin Heidelberg},\n    pages={239--250},\n}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LightXML.name",
    "page": "Docstrings",
    "title": "LightXML.name",
    "category": "function",
    "text": "name(G) returns the graph\'s name.\n\nname(G,str) assigns str to be the graph\'s name. If str is empty, then the name is set to the default SimpleGraph{T} where T is the vertex type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.neighbors",
    "page": "Docstrings",
    "title": "SimpleGraphs.neighbors",
    "category": "function",
    "text": "neighbors(G,v) returns a list of the neighbors of v.\n\nMay also be invoked as G[v].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.num_components",
    "page": "Docstrings",
    "title": "SimpleGraphs.num_components",
    "category": "function",
    "text": "num_components(G) returns the number of connected components in G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.num_trans_orientations",
    "page": "Docstrings",
    "title": "SimpleGraphs.num_trans_orientations",
    "category": "function",
    "text": "num_trans_orientations(G) returns the number of transitive orientations of the graph G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.out_deg",
    "page": "Docstrings",
    "title": "SimpleGraphs.out_deg",
    "category": "function",
    "text": "out_deg(G,v) is the out degree of vertex v.\n\nout_deg(G) is a sorted list of the out degrees of all vertices in the directed graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.out_neighbors",
    "page": "Docstrings",
    "title": "SimpleGraphs.out_neighbors",
    "category": "function",
    "text": "out_neighbors(G,v) gives a list of all v\'s out neighbors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.radius",
    "page": "Docstrings",
    "title": "SimpleGraphs.radius",
    "category": "function",
    "text": "radius(G) returns the radius of the graph G. This is the minimum eccentricity of a vertex of G (or -1 if the graph is not connected).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.random!",
    "page": "Docstrings",
    "title": "SimpleGraphs.random!",
    "category": "function",
    "text": "random!(X) gives the graph held in X a random embedding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.random_greedy_color",
    "page": "Docstrings",
    "title": "SimpleGraphs.random_greedy_color",
    "category": "function",
    "text": "random_greedy_color(G, reps) repeatedly invokes greedy_color using random permutations of the vertex set. After reps iterations, the best coloring found is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.recenter",
    "page": "Docstrings",
    "title": "SimpleGraphs.recenter",
    "category": "function",
    "text": "recenter(G) translates the graph\'s drawing so that the center of mass of the vertices is at the origin.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.relabel",
    "page": "Docstrings",
    "title": "SimpleGraphs.relabel",
    "category": "function",
    "text": "relabel(G) returns a copy of G in which the vertices are renamed 1:n.\n\nrelabel(G,d) (where d is a Dict) returns a copy of G in which vertex v is renamed d[v].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.remove_embedding",
    "page": "Docstrings",
    "title": "SimpleGraphs.remove_embedding",
    "category": "function",
    "text": "remove_embedding(G) erases the graph\'s embedding saved in its cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.remove_loops!",
    "page": "Docstrings",
    "title": "SimpleGraphs.remove_loops!",
    "category": "function",
    "text": "remove_loops!(G) removes all loops (if any) in the digraph, but does not alter the G\'s ability to have loops.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.rotate",
    "page": "Docstrings",
    "title": "SimpleGraphs.rotate",
    "category": "function",
    "text": "rotate(G,theta) rotate\'s the graph\'s drawing by the angle theta.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.scale",
    "page": "Docstrings",
    "title": "SimpleGraphs.scale",
    "category": "function",
    "text": "scale(G,m) multiplies all coordinates in the graph\'s drawing by m. If m is omitted, the drawing is rescaled so that the average length of an edge equals 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.set_embedding_direct",
    "page": "Docstrings",
    "title": "SimpleGraphs.set_embedding_direct",
    "category": "function",
    "text": "set_embedding_direct(G,X) overwrites (or creates) the drawing X in the graph\'s cache. This non-exposed function should not be called by the user.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.set_line_color",
    "page": "Docstrings",
    "title": "SimpleGraphs.set_line_color",
    "category": "function",
    "text": "set_line_color(G,color) sets the color used to draw edges and the circles around vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.set_vertex_color",
    "page": "Docstrings",
    "title": "SimpleGraphs.set_vertex_color",
    "category": "function",
    "text": "set_vertex_color(G,color) sets the color that gets drawn in the interior of the vertices. (All vertices get the same color.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.set_vertex_size",
    "page": "Docstrings",
    "title": "SimpleGraphs.set_vertex_size",
    "category": "function",
    "text": "set_vertex_size(G,sz) sets the size of the circle used when drawing vertices. The default is 6. See also get_vertex_size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.spanning_forest",
    "page": "Docstrings",
    "title": "SimpleGraphs.spanning_forest",
    "category": "function",
    "text": "spanning_forest(G) creates a maximal acyclic subgraph of G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.spectral!",
    "page": "Docstrings",
    "title": "SimpleGraphs.spectral!",
    "category": "function",
    "text": "spectral!(X::GraphEmbedding) gives the graph held in X an embedding based on the eigenvectors of the Laplacian matrix of the graph. Specifically, the x-coordinates come from the eigenvector associated with the second smallest eigenvalue, and the y-coordinates come from the eigenveector associated with the third smallest.\n\nThis may also be invoked as spectral!(X,xcol,ycol) to choose other eigenvectors to use for the x and y coordinates of the embedding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.spring!",
    "page": "Docstrings",
    "title": "SimpleGraphs.spring!",
    "category": "function",
    "text": "spring!(X) gives the graph held in X with a spring embedding (based on code in the GraphLayout module). If runs a default number of iterations (100) of that algorithm. To change the number of iterations, use spring!(X,nits).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.stress",
    "page": "Docstrings",
    "title": "SimpleGraphs.stress",
    "category": "function",
    "text": "Stress function to majorize\n\nInput:     X: A particular layout (coordinates in rows)     d: Matrix of pairwise distances     w: Weights for each pairwise distance\n\nSee (1) of Reference\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.stress!",
    "page": "Docstrings",
    "title": "SimpleGraphs.stress!",
    "category": "function",
    "text": "stress!(X) computes a stress major layout using code taken from the GraphLayout package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.super_toggle!",
    "page": "Docstrings",
    "title": "SimpleGraphs.super_toggle!",
    "category": "function",
    "text": "super_toggle!(G,A,B) toggles all edges/nonedges ab where a is in A and b is in B. No error checking is done.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.tikz_file",
    "page": "Docstrings",
    "title": "SimpleGraphs.tikz_file",
    "category": "function",
    "text": "tikz_file(G,label,filename) writes the tikz code for drawing the graph G into filename. If label is omitted (or false) vertex labels are not drawn. If filename is omitted, it defaults to graph.tex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.tikz_print",
    "page": "Docstrings",
    "title": "SimpleGraphs.tikz_print",
    "category": "function",
    "text": "tikz_print(G) prints tikz code to draw G. tikz_print(G,true) does likewise, with vertex labels drawn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.toggle!",
    "page": "Docstrings",
    "title": "SimpleGraphs.toggle!",
    "category": "function",
    "text": "toggle!(G,x,y) deletes edge xy if present or adds edge xy if absent. No error checking is done.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.transform",
    "page": "Docstrings",
    "title": "SimpleGraphs.transform",
    "category": "function",
    "text": "transform(G,A,b) applies an affine transformation to all coordinates in the graph\'s drawing. Here A is 2-by-2 matrix and b is a 2-vector. Each point p is mapped to A*p+b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.transitive_orientation",
    "page": "Docstrings",
    "title": "SimpleGraphs.transitive_orientation",
    "category": "function",
    "text": "transitive_orientation(G) finds a transitive orientation of the simple graph G. The result is a SimpleDigraph. An error is raised if G does not have a transitive orientation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.translate",
    "page": "Docstrings",
    "title": "SimpleGraphs.translate",
    "category": "function",
    "text": "translate(G,b) translates the graph\'s drawing by the vector b; that is, every point p in the drawing is replaced by p+b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.trim",
    "page": "Docstrings",
    "title": "SimpleGraphs.trim",
    "category": "function",
    "text": "trim(G) returns a copy of G with all isolated vertices removed.\n\ntrim(G,d) returns a copy of G in which we iteratively remove all vertices of degree d or smaller. For example, if G is a tree, trim(G,1) will eventually remove all vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.twins",
    "page": "Docstrings",
    "title": "SimpleGraphs.twins",
    "category": "function",
    "text": "twins(G,u,v) determines if u and v are twin vertices of G. That is, if G[u]-v == G[v]-u. This is an equivalence relation.\n\ntwins(G) returns a partition of the graph\'s vertex set into twin equivalence classes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.two_color",
    "page": "Docstrings",
    "title": "SimpleGraphs.two_color",
    "category": "function",
    "text": "two_color(G) creates a two-coloring of the graph or throws an error if the graph is not bipartite. The output is a Dict mapping the vertex set to the values 1 and 2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.union",
    "page": "Docstrings",
    "title": "Base.union",
    "category": "function",
    "text": "union(G,H) creates the union of the graphs G and H. The graphs may (and typically do) have common vertices or edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.vertex_split",
    "page": "Docstrings",
    "title": "SimpleGraphs.vertex_split",
    "category": "function",
    "text": "vertex_split(G) converts the directed graph G into an undirected bipartite graph. For each vertex v in G, the output graph has two vertices (v,1) and (v,2). Each edge (v,w) of G is rendered as an edge between (v,1) and (w,2) in the output graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.vertex_type",
    "page": "Docstrings",
    "title": "SimpleGraphs.vertex_type",
    "category": "function",
    "text": "vertex_type(G) returns the data type of the vertices this graph may hold. For example, if G=IntGraph() then this returns Int64.`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.vlist",
    "page": "Docstrings",
    "title": "SimpleGraphs.vlist",
    "category": "function",
    "text": "vlist(G) returns the vertices of G as a list (array).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.weightedlaplacian",
    "page": "Docstrings",
    "title": "SimpleGraphs.weightedlaplacian",
    "category": "function",
    "text": "Compute weighted Laplacian given ideal weights w\n\nLʷ defined in (4) of the Reference\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.wiener_index",
    "page": "Docstrings",
    "title": "SimpleGraphs.wiener_index",
    "category": "function",
    "text": "wiener_index(G) is the sum of the distances between vertices in G. Returns -1 if G is not connected.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleGraphs.AbstractSimpleGraphSimpleGraphs.BuckyBallSimpleGraphs.CompleteSimpleGraphs.CubeSimpleGraphs.CycleSimpleGraphs.DEFAULT_MARKER_SIZESimpleGraphs.DFSSimpleGraphs.DirectedCompleteSimpleGraphs.DirectedCycleSimpleGraphs.DirectedPathSimpleGraphs.DodecahedronSimpleGraphs.FruchtSimpleGraphs.GraphEmbeddingSimpleGraphs.GridSimpleGraphs.HoffmanSimpleGraphs.HoffmanSingletonSimpleGraphs.IcosahedronSimpleGraphs.IntDigraphSimpleGraphs.IntGraphSimpleGraphs.JohnsonSimpleGraphs.KneserSimpleGraphs.KnightSimpleGraphs.LZSimpleGraphs.NESimpleGraphs.NVSimpleGraphs.OctahedronSimpleGraphs.PaleySimpleGraphs.PathSimpleGraphs.PetersenSimpleGraphs.RandomDigraphSimpleGraphs.RandomGraphSimpleGraphs.RandomRegularSimpleGraphs.RandomRegularBuilderSimpleGraphs.RandomSBMSimpleGraphs.RandomTournamentSimpleGraphs.RandomTreeSimpleGraphs.ShiftDigraphSimpleGraphs.SimpleDigraphSimpleGraphs.SimpleGraphSimpleGraphs.SimpleGraphsSimpleGraphs.SpindleSimpleGraphs.StringDigraphSimpleGraphs.StringGraphSimpleGraphs.TetrahedronSimpleGraphs.TorusDigraphSimpleGraphs.WheelSimpleGraphs._checksquareSimpleGraphs.add!SimpleGraphs.add_dict!SimpleGraphs.add_edge_matrix!SimpleGraphs.add_edges!SimpleGraphs.add_key!SimpleGraphs.add_key_value!SimpleGraphs.add_value!SimpleGraphs.adjacencySimpleGraphs.adjointSimpleGraphs.all_tuplesSimpleGraphs.allow_loops!SimpleGraphs.bipartitionSimpleGraphs.bisectSimpleGraphs.boundsSimpleGraphs.cache_checkSimpleGraphs.cache_clearSimpleGraphs.cache_offSimpleGraphs.cache_onSimpleGraphs.cache_recallSimpleGraphs.cache_saveSimpleGraphs.cartesianSimpleGraphs.char_polySimpleGraphs.circular!SimpleGraphs.circular_embeddingSimpleGraphs.code_to_treeSimpleGraphs.complementSimpleGraphs.complement!SimpleGraphs.componentsSimpleGraphs.contract!SimpleGraphs.cross_edgesSimpleGraphs.degSimpleGraphs.deg_histSimpleGraphs.deg_sorted_vlistSimpleGraphs.delete!SimpleGraphs.diamSimpleGraphs.directed_ham_cycleSimpleGraphs.disjoint_unionSimpleGraphs.distSimpleGraphs.dist_matrixSimpleGraphs.draw_labelsSimpleGraphs.dual_degSimpleGraphs.eccentricitySimpleGraphs.edge_lengthSimpleGraphs.eigvalsSimpleGraphs.elistSimpleGraphs.embedSimpleGraphs.eulerSimpleGraphs.euler_work!SimpleGraphs.evalSimpleGraphs.fastN!SimpleGraphs.find_pathSimpleGraphs.forbid_loops!SimpleGraphs.geogebraSimpleGraphs.get_embedding_directSimpleGraphs.get_line_colorSimpleGraphs.get_vertex_colorSimpleGraphs.get_vertex_sizeSimpleGraphs.getindexSimpleGraphs.getxySimpleGraphs.girthSimpleGraphs.girth_cycleSimpleGraphs.graffleSimpleGraphs.graph_centerSimpleGraphs.greedy_colorSimpleGraphs.hamCycleSimpleGraphs.ham_checkSimpleGraphs.ham_extendSimpleGraphs.hamiltonian_cycleSimpleGraphs.hasSimpleGraphs.has_embeddingSimpleGraphs.in_degSimpleGraphs.in_neighborsSimpleGraphs.incidenceSimpleGraphs.includeSimpleGraphs.indep_polySimpleGraphs.induceSimpleGraphs.interlaceSimpleGraphs.isSafeSimpleGraphs.is_acyclicSimpleGraphs.is_connectedSimpleGraphs.is_cut_edgeSimpleGraphs.is_loopedSimpleGraphs.is_strongly_connectedSimpleGraphs.joinSimpleGraphs.label_appendSimpleGraphs.laplaceSimpleGraphs.layout_spring_adjSimpleGraphs.lexSimpleGraphs.line_graphSimpleGraphs.list2dictSimpleGraphs.load!SimpleGraphs.local_complement!SimpleGraphs.loopsSimpleGraphs.makeColorClassSimpleGraphs.makeSimplex!SimpleGraphs.make_scalerSimpleGraphs.matching_polySimpleGraphs.my_layout_stressmajorize_adjSimpleGraphs.nameSimpleGraphs.neighborsSimpleGraphs.num_componentsSimpleGraphs.num_trans_orientationsSimpleGraphs.out_degSimpleGraphs.out_neighborsSimpleGraphs.pivot!SimpleGraphs.private_adjSimpleGraphs.private_distSimpleGraphs.radiusSimpleGraphs.random!SimpleGraphs.random_greedy_colorSimpleGraphs.recenterSimpleGraphs.recenter!SimpleGraphs.relabelSimpleGraphs.remove_embeddingSimpleGraphs.remove_loops!SimpleGraphs.rescale!SimpleGraphs.rotateSimpleGraphs.rotate!SimpleGraphs.scaleSimpleGraphs.set_embedding_directSimpleGraphs.set_fill_colorSimpleGraphs.set_line_colorSimpleGraphs.set_vertex_colorSimpleGraphs.set_vertex_sizeSimpleGraphs.showSimpleGraphs.simplifySimpleGraphs.spanning_forestSimpleGraphs.spectral!SimpleGraphs.spring!SimpleGraphs.stressSimpleGraphs.stress!SimpleGraphs.super_toggle!SimpleGraphs.tikz_fileSimpleGraphs.tikz_printSimpleGraphs.tikz_stringSimpleGraphs.toggle!SimpleGraphs.transformSimpleGraphs.transform!SimpleGraphs.transitive_orientationSimpleGraphs.translateSimpleGraphs.translate!SimpleGraphs.trimSimpleGraphs.twinsSimpleGraphs.two_colorSimpleGraphs.unionSimpleGraphs.vertex2idxSimpleGraphs.vertex_splitSimpleGraphs.vertex_typeSimpleGraphs.vlistSimpleGraphs.weightedlaplacianSimpleGraphs.wiener_index"
},

]}
