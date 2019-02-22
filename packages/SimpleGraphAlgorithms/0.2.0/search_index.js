var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleGraphAlgorithms-1",
    "page": "Readme",
    "title": "SimpleGraphAlgorithms",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This module provides additional functions for the SimpleGraphs module that rely on integer programming. In addition to requiring the SimpleGraphs module, it also requires JuMP and MathProgBase which, in turn, requires that some solvers be loaded. I\'ve used Cbc.New: Now requires the Polynomials module.Note: Because these functions rely on solving integer linear   programs, they can be rather slow for large graphs."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "max_indep_set(G) returns a maximum size independent set of a SimpleGraph.\nmax_clique(G) returns a maximum size clique of a SimpleGraph.\nmax_matching(G) returns a maximum size matching of a SimpleGraph.\nmin_dom_set(G) returns a smallest dominating set of a SimpleGraph. That is, a smallest set S with the property that every vertex of G either is in S or is adjacent to a vertex of S.\nmin_vertex_cover(G) returns a smallest vertex cover of G. This is a set of vertices S such that every edge of G has at least one end point in S.\nmin_edge_cover(G) returns a smallest edge cover of G. This is a set of edges F such that every vertex of G is the end point of at least one edge in F. Note: If G has an isolated vertex, then no edge cover is possible and error is generated.\niso(G,H) finds an isomorphism between graphs G and H. Specifically, it finds a Dict mapping the vertices of G to the vertices of H that gives the isomorphism. If the graphs are not isomorphic, an error is raised.\niso2(G,H) has the same functionality as iso, but applies various preprocessing to speed up the optimization. If the graphs are vertex transitive, this probably won\'t help. But if they have small automorphism groups, this will likely speed things up considerably. It will also likely detect when the given graphs are not isomorphic faster than iso will.\nis_iso(G,H) checks if the two graphs are isomorphic.\nis_iso(G,H,d) checks if the dictionary d is an isomorphism from G to H.\niso_matrix(G,H) finds an isomorphism between graphs G and H. Specifically, it finds a permutation matrix P such that A*P==P*B where A and B are the adjacency matrices of the graphs G and H, respectively. If the graphs are not isomorphic, an error is raised.\ninfo_map(G) creates a mapping from the vertices of G to 128-bit integers. If there is an automorphism between a pair of vertices, then they will map to the same value, and the converse is likely to be true. This is used by iso2 as part of the preprocessing phase.\nuhash(G) creates a hash value for the graph G with the property  that isomorphic graphs have the same hash value.\ncolor(G,k) returns a k-coloring of G (or throws an error if no such coloring exists).\nchromatic_number(G) returns the least k such that G is k-colorable.\nchrome_poly(G) computes the chromatic polynomial of G. (See the help message for more information.)\nedge_color(G,k) returns a k-edge-coloring of G.\nedge_chromatic_number(G) returns the edge chromatic number of G.ad(G) returns the average degree of G.\nmad(G) returns the maximum average degree of G.\nmad_core(G) returns a subgraph H of G for which ad(H)==mad(G)."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> using SimpleGraphs; using SimpleGraphAlgorithms\n\njulia> G = Paley(17)\nSimpleGraphs.SimpleGraph{Int64} (17 vertices)\n\njulia> max_indep_set(G)\nSet([7,4,1])\n\njulia> max_clique(G)\nSet([3,5,1])\n\njulia> min_dom_set(G)\nSet([0,10,3])\n\njulia> max_matching(G)\nSet([(2,3),(11,13),(15,16),(0,1),(10,14),(6,7),(4,5),(8,9)])\n\njulia> color(G,6)\nDict{Int64,Int64} with 17 entries:\n  2  => 1\n  16 => 5\n  11 => 6\n  0  => 6\n  7  => 2\n  9  => 1\n  10 => 5\n  8  => 3\n  6  => 6\n  4  => 2\n  3  => 4\n  5  => 3\n  13 => 5\n  14 => 4\n  15 => 3\n  12 => 1\n  1  => 2Petersen\'s graph can be described as either the 5,2-Kneser graph or as the complement of the line graph of K(5).julia> G = Kneser(5,2)\nSimpleGraphs.SimpleGraph{Set{Int64}} (10 vertices)\n\njulia> H = complement(line_graph(Complete(5)))\nSimpleGraphs.SimpleGraph{Tuple{Int64,Int64}} (10 vertices)\n\njulia> iso(G,H)\nDict{Set{Int64},Tuple{Int64,Int64}} with 10 entries:\n  Set([4,1]) => (4,5)\n  Set([4,5]) => (1,5)\n  Set([2,1]) => (3,4)\n  Set([3,5]) => (1,2)\n  Set([2,5]) => (1,3)\n  Set([3,1]) => (2,4)\n  Set([4,3]) => (2,5)\n  Set([4,2]) => (3,5)\n  Set([2,3]) => (2,3)\n  Set([5,1]) => (1,4)\n\njulia> iso_matrix(G,H)\n10x10 Array{Int64,2}:\n 0  0  0  1  0  0  0  0  0  0\n 0  0  0  0  0  0  0  0  0  1\n 1  0  0  0  0  0  0  0  0  0\n 0  0  0  0  0  0  0  1  0  0\n 0  0  0  0  0  1  0  0  0  0\n 0  1  0  0  0  0  0  0  0  0\n 0  0  0  0  0  0  0  0  1  0\n 0  0  0  0  0  0  1  0  0  0\n 0  0  0  0  1  0  0  0  0  0\n 0  0  1  0  0  0  0  0  0  0"
},

{
    "location": "#Using-Another-Solver-1",
    "page": "Readme",
    "title": "Using Another Solver",
    "category": "section",
    "text": "Example:julia> using Gurobi\n\njulia> set_optimizer(Gurobi)\nGurobiNow the functions in this module will use the Gurobi solver. To switch back to the default Cbc solver use either set_optimizer() or set_optimizer(Cbc)."
},

{
    "location": "#To-Do-1",
    "page": "Readme",
    "title": "To Do",
    "category": "section",
    "text": "The optimizers output a lot of diagnostics. I should figure out how to optionally suppress that."
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.ad",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.ad",
    "category": "function",
    "text": "ad(G) is the average degree of a vertex in G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.chrome_poly",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.chrome_poly",
    "category": "function",
    "text": "chrome_poly(G) computes the chromatic polynomial of the graph G. If G is a directe graph, this returns the chromatic polynomial of G\'s underlying simple graph.\n\nThis function builds a datastructure to prevent computing the chromatic polynomial of the same graph twice. To do this, it uses frequent isomorphism checks.\n\nSee size_cpm and reset_cpm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.color",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.color",
    "category": "function",
    "text": "color(G,k): Return a k-coloring of G (or error if none exists).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.degdeg",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.degdeg",
    "category": "function",
    "text": "degdeg(G) creates an n-by-n matrix where the nonzero entries in a row are the degrees of the neighbors of that vertex. The rows are lexicographically sorted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.edge_chromatic_number",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.edge_chromatic_number",
    "category": "function",
    "text": "edge_chromatic_number(G) returns the edge chromatic number of the graph G.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.edge_color",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.edge_color",
    "category": "function",
    "text": "edge_color(G,k) returns a proper k-edge coloring of G or throws an error if one does not exist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.fast_iso_test",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.fast_iso_test",
    "category": "function",
    "text": "fast_iso_test(G,H) applies various heuristics to see if the graphs might be isomorphic. A false return certifies the graphs are not isomorphic; a true result indicates the graphs might be (indeed, likely are) isomorphic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.fast_iso_test_basic",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.fast_iso_test_basic",
    "category": "function",
    "text": "fast_iso_test_basic(G,H) is a very quick test to rule out graphs being isomorphic by considering the number of vertices, number of edges, and degree sequences. Returns false if the graphs fail this very basic test of isomorphism. A true result does not imply the graphs are isomorphic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.info_map",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.info_map",
    "category": "function",
    "text": "info_map(G): We create a dictionary mapping the vertices of G to 128-bit integer values in such a way that twin vertices will have the same value but, we hope, nontwin vertices will have different values. (By twin we mean a pair of vertices such that there is an automorphism of the graph mapping one to the other.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.is_iso",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.is_iso",
    "category": "function",
    "text": "is_iso(G,H,d) checks if d is an isomorphism from G to H.\n\n\n\n\n\nis_iso(G,H) returns true if the two graphs are isomorphic and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.iso",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.iso",
    "category": "function",
    "text": "iso(G,H) finds an isomorphism from G to H (or throws an error if the graphs are not isomorphic). Returns a dictionary mapping the vertices of G to H.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.iso2",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.iso2",
    "category": "function",
    "text": "iso2(G,H) is a variant of iso(G,H) that first applies various heuristics that should speed up processing if the graphs are \"far\" from vertex transitive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.iso_matrix",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.iso_matrix",
    "category": "function",
    "text": "iso_matrix(G,H) returns a permutation matrix P such that A*P==P*B where A is the adjacency matrix of G and B is the adjacency matrix of H.  If the graphs are not isomorphic, an error is raised.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.mad",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.mad",
    "category": "function",
    "text": "mad(G) computes the maximum average degree of G. See also mad_core.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.mad_core",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.mad_core",
    "category": "function",
    "text": "mad_core(G) returns a subgraph H of G for which ad(H)==mad(G).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.mad_model",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.mad_model",
    "category": "function",
    "text": "mad_model(G) returns the solved linear program whose optimum value is mad(G).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.max_clique",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.max_clique",
    "category": "function",
    "text": "max_clique(G) returns a maximum size clique of a SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.max_indep_set",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.max_indep_set",
    "category": "function",
    "text": "max_indep_set(G) returns a maximum size independent set of a SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.max_matching",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.max_matching",
    "category": "function",
    "text": "max_matching(G) returns a maximum matching of a SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.min_dom_set",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.min_dom_set",
    "category": "function",
    "text": "min_dom_set(G) returns a smallest dominating set of a SimpleGraph. That is, a smallest set S with the property that every vertex of G either is in S or is adjacent to a vertex of S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.min_edge_cover",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.min_edge_cover",
    "category": "function",
    "text": "min_edge_cover(G) finds a smallest subset F of the edges such that every vertex of G is the end point of at least one edge in F. An error is raised if G has a vertex of degree 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.min_vertex_cover",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.min_vertex_cover",
    "category": "function",
    "text": "min_vertex_cover(G) returns a smallest vertex cover S of G. This is a smallest possible set of vertices such that every edge of G has one or both end points in S.\n\nmin_vertex_cover(G,k) returns the smallest set of vertices S such that at least k edges are indicent with a vertex in S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.recall",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.recall",
    "category": "function",
    "text": "recall(CPM,G) look up in CPM to see if we have already computed the chromatic polynomial of this graph (or something isomorphic to it).\n\nShort form: P = CPM[G].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.remember!",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.remember!",
    "category": "function",
    "text": "remember!(CPM,G,P) save the polynomial P associated with G in this data structure (if it wasn\'t in there already).\n\nShort form: CPM[G] = P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.reset_cpm",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.reset_cpm",
    "category": "function",
    "text": "reset_cpm() clears the datastructure of previously computed chromatic polynomials.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.set_optimizer",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.set_optimizer",
    "category": "function",
    "text": "set_optimizer(OPT::Module=Cbc) is used to specify what optimization module we want to use. For example: set_optimizer(Gurobi).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.set_solver",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.set_solver",
    "category": "function",
    "text": "set_solver(function) selects which optimization solver to use. For example, set_solver(CbcSolver). To use Gurobi, so this:\n\nusing Gurobi\nset_solver(GurobiSolver)\n\nChoice remains in effect until there\'s a subsequent call to set_solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.size_cpm",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.size_cpm",
    "category": "function",
    "text": "size_cpm() reports the number of graphs held in the datastructure of previously computed chromatic polynomials.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphAlgorithms.uhash",
    "page": "Docstrings",
    "title": "SimpleGraphAlgorithms.uhash",
    "category": "function",
    "text": "uhash(G) creates an UInt64 hash of the graph such that isomorphic graphs will produce the same value. We hope that nonisomorphic graphs will create different values, but, alas, that need not be the case.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleGraphAlgorithms.CPM_dictSimpleGraphAlgorithms.CPM_pairSimpleGraphAlgorithms.ChromePolyMemoSimpleGraphAlgorithms.SimpleGraphAlgorithmsSimpleGraphAlgorithms._CPMSimpleGraphAlgorithms._SOLVERSimpleGraphAlgorithms.adSimpleGraphAlgorithms.chromatic_numberSimpleGraphAlgorithms.chromatic_number_workSimpleGraphAlgorithms.chrome_polySimpleGraphAlgorithms.colorSimpleGraphAlgorithms.degdegSimpleGraphAlgorithms.edge_chromatic_numberSimpleGraphAlgorithms.edge_colorSimpleGraphAlgorithms.evalSimpleGraphAlgorithms.fast_iso_testSimpleGraphAlgorithms.fast_iso_test_basicSimpleGraphAlgorithms.includeSimpleGraphAlgorithms.info_mapSimpleGraphAlgorithms.is_isoSimpleGraphAlgorithms.isoSimpleGraphAlgorithms.iso2SimpleGraphAlgorithms.iso_err_msgSimpleGraphAlgorithms.iso_matrixSimpleGraphAlgorithms.madSimpleGraphAlgorithms.mad_coreSimpleGraphAlgorithms.mad_modelSimpleGraphAlgorithms.max_cliqueSimpleGraphAlgorithms.max_indep_setSimpleGraphAlgorithms.max_matchingSimpleGraphAlgorithms.min_dom_setSimpleGraphAlgorithms.min_edge_coverSimpleGraphAlgorithms.min_vertex_coverSimpleGraphAlgorithms.my_solverSimpleGraphAlgorithms.recallSimpleGraphAlgorithms.remember!SimpleGraphAlgorithms.reset_cpmSimpleGraphAlgorithms.set_optimizerSimpleGraphAlgorithms.set_solverSimpleGraphAlgorithms.showSimpleGraphAlgorithms.size_cpmSimpleGraphAlgorithms.uhash"
},

]}
