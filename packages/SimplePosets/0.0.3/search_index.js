var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimplePosets-1",
    "page": "Readme",
    "title": "SimplePosets",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This module defines a SimplePoset type for Julia. A poset is a pair (X,<) where X is a set of elements and < is a relation on X that is irreflexive, antisymmetric, and transitive."
},

{
    "location": "#Basic-constructor-1",
    "page": "Readme",
    "title": "Basic constructor",
    "category": "section",
    "text": "Use SimplePoset(T) to create a new SimplePoset with elements having type T (which defaults to Any)."
},

{
    "location": "#Add/delete-elements/relations-1",
    "page": "Readme",
    "title": "Add/delete elements/relations",
    "category": "section",
    "text": "Elements and relations can be added to or deleted from a poset using these functions:add!(P,x) adds a new element x to the ground set of P.\nadd!(P,x,y) inserts the relation x<y into P. If one (or both) of x and y is not in P, it is added as well.\ndelete!(P,x) deletes element x from this poset.\ndelete!(P,x,y) delete the relation x<y from P and for any z with x < z < y, also delete x<z and z<y.More detail on element/relation addition/deletion can be found in the document addition-deletion.pdf found in the doc folder."
},

{
    "location": "#Basic-inspection-1",
    "page": "Readme",
    "title": "Basic inspection",
    "category": "section",
    "text": "elements(P) returns a list of the elements in P\ncard(P) returns the cardinality of P (number of elements).\nrelations(P) returns a list of all pairs (x,y) with x<y in this poset.\nincomparables(P) returns a list of all incomparable pairs. If (x,y) is listed, we do not also list (y,x).\nhas(P,x) determine if x is an element of P.\nhas(P,x,y) determine if x<y in the poset P. Note: Calling has(P,x,x) for an element x of this poset returns false. All our methods concern the strict relation <.\nabove(P,x) returns a list of all elements above x in P.\nbelow(P,x) returns a list of all elements below x in P.\ninterval(P,x,y) returns a list of all elements z that satisfy x<z<y.\nmaximals(P) returns a list of the minimal elements of P.\nminimals(P) returns a list of the minimal elements of P.The following functions are not likely to be called by the casual user.check(P) returns true provided the internal data structures of P are valid and false otherwise. Note: There should be no reason to use this function if the poset is created and manipulated by the functions provided in this module.\nhash(P) computes a hash value for the poset. This enables SimplePoset objects to serve as keys in dictionaries, and so forth.\nelement_type(P) returns the datatype of the elements in this poset. For example:\njulia> P = Boolean(3);\n\njulia> element_type(P)\nASCIIString (constructor with 2 methods)"
},

{
    "location": "#Constructors-1",
    "page": "Readme",
    "title": "Constructors",
    "category": "section",
    "text": "Antichain(n) creates an antichain with elements 1:n. The function IntPoset(n) is a synonym.\nAntichain(list) creates an antichain with elements drawn from list, a one-dimensional array.\nBooleanLattice(n) creates the subsets of an n-set poset in which elements are named as n-long binary strings.\nChain(n) creates a chain with elements 1:n in which 1<2<3<...<n.\nChain(list) creates a chain with elements drawn from list (in that order) in.\nDivisors(n) creates the poset whose elements are the divisors of n ordered by divisibility.\nPartitionLattice(n) creates the poset whose elements are the partitions of{1,2,...,n} ordered by refinement.RandomPoset(n,d) creates a random d-dimensional poset on n elements.\nStandardExample(n) creates the canonical n-dimensional poset with 2n elements in two layers. The lower layer elements are named from -1 to -n and the upper layer from 1 to n. We have -i<j exactly when i!=j."
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "inv(P) creates the inverse poset of P, i.e., we have x<y in P iff we have y<x in inv(P). We can use P\' as a synonym for inv(P).\nintersect(P,Q) creates the intersection of the two posets (which must be of the same element type). Typically the two posets have the same elements, but this is not necessary. The resulting poset\'s elements is the intersection of the two element sets, and relations in the result are those relations common to both P and Q.\nP*Q is the Cartesian product of the two posets (that may be of different types).\nP+Q is the disjoint union of two (or more) posets. The posets must all be of the same type. Each summand\'s elements is extended with an integer (starting at 1) corresponding to its position in the sum. That is, if x is an element of summand number i, then in the sum it becomes the element (x,i). For example:\njulia> P = Chain(2)+Chain(3)+Chain(4)\nSimplePoset{(Int64,Int64)} (9 elements)\n\njulia> elements(P)\n9-element Array{(Int64,Int64),1}:\n (1,1)\n (1,2)\n (1,3)\n (2,1)\n (2,2)\n (2,3)\n (3,2)\n (3,3)\n (4,3)\nstack(Plist...) creates a new poset from the ones in the argument list by stacking one atop the next. The first poset in the list is at the bottom.  Element labeling is as in +.\nrelabel(P,labels) is used to create a new poset in which the elements  have new names (as given by the dictionary labels). Calling  relabel(P) gives a new poset in which the new element names are  the integers 1 through n. Here\'s an example:\n```julia  julia> P = Chain(3) + Chain(3)  SimplePoset{(Int64,Int64)} (6 elements)\njulia> elements(P)  6-element Array{(Int64,Int64),1}:   (1,1)   (1,2)   (2,1)   (2,2)   (3,1)   (3,2)\njulia> Q = relabel(P)  SimplePoset{Int64} (6 elements)\njulia> elements(Q)  6-element Array{Int64,1}:   1   2   3   4   5   6  ```"
},

{
    "location": "#Poset-properties-1",
    "page": "Readme",
    "title": "Poset properties",
    "category": "section",
    "text": "ComparabilityGraph(P) returns a SimpleGraph whose vertices are the elements of P and in which two distinct vertices are adjacent iff they are comparable in P.\nCoverDigraph(P) returns a directed graph whose vertices are the elements of P in which (x,y) is an edges provided both x<y in P and there is no z for which x<z<y. These are the edges that would appear in a Hasse diagram of P.\nmobius(P) creates the Mobius function for this poset (as a dictionary from pairs of elements to Int values).\nmobius_matrix(P) is the inverse of zeta_matrix(P).\nzeta(P) creates the zeta function for this poset (as a dictionary from pairs of elements to Int values). We have (x,y) ==> 1 provided x==y or x<y, and (x,y) ==> 0 otherwise.\nzeta_matrix(P) produces the zeta matrix. Order of elements is the same as produced by elements(P).\nheight(P) returns the maximum size of a chain."
},

{
    "location": "#Linear-extensions-1",
    "page": "Readme",
    "title": "Linear extensions",
    "category": "section",
    "text": "linear_extension(P) finds one linear extension of the poset (as an Array).\nrandom_linear_extension(P) returns a random linear extension. See the  help message for more detail.\nall_linear_extensions(P) returns a Set containing all the linear extensions of the poset. This is a very expensive operation in both time and memory. It is memoized to make it more efficient, but the memory it uses is not freed after use.```julia julia> P = Divisors(12) SimplePoset{Int64} (6 elements)julia> linear_extension(P)\' 1×6 LinearAlgebra.Adjoint{Int64,Array{Int64,1}}:  1  2  3  4  6  12julia> randomlinearextension(P)\' 1×6 LinearAlgebra.Adjoint{Int64,Array{Int64,1}}:  1  3  2  6  4  12julia> collect(alllinearextensions(P)) 5-element Array{Array{Int64,1},1}:  [1, 3, 2, 4, 6, 12]  [1, 3, 2, 6, 4, 12]  [1, 2, 3, 6, 4, 12]  [1, 2, 3, 4, 6, 12]  [1, 2, 4, 3, 6, 12]   ```"
},

{
    "location": "#Miscellaneous-1",
    "page": "Readme",
    "title": "Miscellaneous",
    "category": "section",
    "text": ""
},

{
    "location": "#Under-the-hood-1",
    "page": "Readme",
    "title": "Under the hood",
    "category": "section",
    "text": "A SimplePoset is a wrapper around a SimpleDigraph object. The functions for creating and manipulating a SimplePoset ensure that the underlying digraph has directed edges (x,y) exactly for those pairs of elements with x<y."
},

{
    "location": "autodocs/#SimplePosets.Antichain",
    "page": "Docstrings",
    "title": "SimplePosets.Antichain",
    "category": "function",
    "text": "AntiChain(n) creates a new poset with Int elements 1:n with no relations between those elements.\n\nAntiChain(list) creates a new poset with elements from list with no relations between those elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.BooleanLattice",
    "page": "Docstrings",
    "title": "SimplePosets.BooleanLattice",
    "category": "function",
    "text": "BooleanLattice(n) creates the Boolean lattice whose elements are n-long character strings of 0s and 1s. Ordering is coordinatewise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.Chain",
    "page": "Docstrings",
    "title": "SimplePosets.Chain",
    "category": "function",
    "text": "Chain(n) creates a new poset whose elements are the Int values 1:n with the relations 1<2<3<...<n.\n\nChain(list) creates a new poset whose elements are the values in list with list[1]<list[2]<....\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.ComparabilityGraph",
    "page": "Docstrings",
    "title": "SimplePosets.ComparabilityGraph",
    "category": "function",
    "text": "ComparabilityGraph(P) returns the comparability graph of the poset P. The result is a SimpleGraph whose vertices are the elements of P in which there is an edge (u,v) provided (u,v) or (v,u) is a relation of P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.CoverDigraph",
    "page": "Docstrings",
    "title": "SimplePosets.CoverDigraph",
    "category": "function",
    "text": "CoverDigraph(P) creates a SimpleDirectedGraph G whose vertices are the elements of P and in which we have the edge (u,v) provided: (a) u<v is a relation of P and (b) there is no w in P with u<w<v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.Divisors",
    "page": "Docstrings",
    "title": "SimplePosets.Divisors",
    "category": "function",
    "text": "Divisors(n) creates a new poset whose elements are the positive divisor of n (including 1 and n itself) in which we have the relations (u,v) precisely when u is a factor of v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.IntPoset",
    "page": "Docstrings",
    "title": "SimplePosets.IntPoset",
    "category": "function",
    "text": "IntPoset(n) creates a new SimplePoset{Int}() prepopulated with elements 1:n but no relations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.PartitionLattice",
    "page": "Docstrings",
    "title": "SimplePosets.PartitionLattice",
    "category": "function",
    "text": "PartitionLattice(n) creates the poset whose elements are the partitions of the set {1,2,...,n} ordered by refinement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.RandomPoset",
    "page": "Docstrings",
    "title": "SimplePosets.RandomPoset",
    "category": "function",
    "text": "RandomPoset(n,d) creates a random d-dimensional poset with elements 1:n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.SimplePoset",
    "page": "Docstrings",
    "title": "SimplePosets.SimplePoset",
    "category": "type",
    "text": "SimplePoset() creates a new partially ordered set (poset) in which the elements can be of Any type.\n\nUse SimplePoset(T) or SimplePlot{T}() to create a new poset in which the elements are of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.StandardExample",
    "page": "Docstrings",
    "title": "SimplePosets.StandardExample",
    "category": "function",
    "text": "StandardExample(n) creates a new poset with 2n elements in two levels. Each element on the lower level is below exactly n-1 elements from the upper level.\n\nWe name the lower elements -1,-2,...,-n and the upper elements 1,2,...,n. We have -i below all the positive elements except +i.\n\njulia> P = StandardExample(4)\nSimplePoset{Int64} (8 elements)\n\njulia> elements(P)\n8-element Array{Int64,1}:\n -4\n -3\n -2\n -1\n  1\n  2\n  3\n  4\n\njulia> relations(P)\n12-element Array{Tuple{Int64,Int64},1}:\n (-4,1)\n (-4,2)\n (-4,3)\n (-3,1)\n (-3,2)\n (-3,4)\n (-2,1)\n (-2,3)\n (-2,4)\n (-1,2)\n (-1,3)\n (-1,4)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.above",
    "page": "Docstrings",
    "title": "SimplePosets.above",
    "category": "function",
    "text": "above(P,x) returns a list of all elements y in the poset P for which x<y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.add!",
    "page": "Docstrings",
    "title": "SimpleGraphs.add!",
    "category": "function",
    "text": "add!(P,x) adds the element x to the poset with no relations to any other elements.\n\nadd!(P,x,y) adds elements x and y to the poset (if they are not already present) and, more importantly, adds the relation x<y as well. This fails if adding this relation would violate transitivity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.all_linear_extensions",
    "page": "Docstrings",
    "title": "SimplePosets.all_linear_extensions",
    "category": "function",
    "text": "all_linear_extensions(P) returns the Set of all linear extensions of P. This can take a very long time and eat up a lot of memory (which can be freed using clear_LX_table).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.below",
    "page": "Docstrings",
    "title": "SimplePosets.below",
    "category": "function",
    "text": "below(P,x) returns a list of all elements y in the poset P for which y<x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.card",
    "page": "Docstrings",
    "title": "SimplePosets.card",
    "category": "function",
    "text": "card(P) returns the cardinality (number of elements) of P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.clear_LX_table",
    "page": "Docstrings",
    "title": "SimplePosets.clear_LX_table",
    "category": "function",
    "text": "clear_LX_table() releases cached results computed by all_linear_extensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.delete!",
    "page": "Docstrings",
    "title": "Base.delete!",
    "category": "function",
    "text": "delete!(P,x) deletes the element x from the poset P.\n\ndelete!(P,x,y) deletes the relation x<y from P (assuming that such a relation exists in P). It then deletes other relations as needed to ensure what remains is still a poset (i.e., still transitive).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.element_type",
    "page": "Docstrings",
    "title": "SimplePosets.element_type",
    "category": "function",
    "text": "element_type(P) returns the type of elements in this SimplePoset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.elements",
    "page": "Docstrings",
    "title": "SimplePosets.elements",
    "category": "function",
    "text": "elements(P) returns a list of the elements of P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.has",
    "page": "Docstrings",
    "title": "SimpleGraphs.has",
    "category": "function",
    "text": "has(P,x) checks if x is an element of the poset P.\n\nhas(P,x,y) checks if x<y is a relation in the poset P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.height",
    "page": "Docstrings",
    "title": "SimplePosets.height",
    "category": "function",
    "text": "height(P) gives the size of a largest chain in the poset P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.incomparables",
    "page": "Docstrings",
    "title": "SimplePosets.incomparables",
    "category": "function",
    "text": "incomparables(P) returns a list of ordered pairs (u,v) such that u and v are incomparable in P. Note that if (u,v) appears in the list, we do not also include (v,u).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.intersect",
    "page": "Docstrings",
    "title": "Base.intersect",
    "category": "function",
    "text": "intersect(P,Q) constructs a new poset that is the intersection of the two given posets (which must contain elements of the same datatype).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.interval",
    "page": "Docstrings",
    "title": "SimplePosets.interval",
    "category": "function",
    "text": "interval(P,x,y) returns a list of all elements z in the poset P for which x<z<y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.inv",
    "page": "Docstrings",
    "title": "Base.inv",
    "category": "function",
    "text": "inv(P) creates a new poset with the same elements as P in which all of P\'s relations have been reversed. That is (u,v) is a relation of P iff (v,u) is a relation of inv(P).\n\nUse P\' as a shortcut for inv(P).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.linear_extension",
    "page": "Docstrings",
    "title": "SimplePosets.linear_extension",
    "category": "function",
    "text": "linear_extension(P) returns a linear extension of the poset P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.maximals",
    "page": "Docstrings",
    "title": "SimplePosets.maximals",
    "category": "function",
    "text": "maximals(P) returns a list of maximal elements of P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.minimals",
    "page": "Docstrings",
    "title": "SimplePosets.minimals",
    "category": "function",
    "text": "minimals(P) returns a list of minimal elements of P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.mobius",
    "page": "Docstrings",
    "title": "SimplePosets.mobius",
    "category": "function",
    "text": "mobius(P) returns the Mobius function of the poset P as a Dict. See zeta.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.mobius_matrix",
    "page": "Docstrings",
    "title": "SimplePosets.mobius_matrix",
    "category": "function",
    "text": "mobius_matrix(P) returns the inverse of zeta_matrix(P).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.random_average_height",
    "page": "Docstrings",
    "title": "SimplePosets.random_average_height",
    "category": "function",
    "text": "random_average_height(P,reps=100) gives the average height of the elements of P in a random linear extension. See random_linear_extension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.random_linear_extension",
    "page": "Docstrings",
    "title": "SimplePosets.random_linear_extension",
    "category": "function",
    "text": "random_linear_extension(P) generates a linear extension of P at random. This is slower than linear_extension(P) if one just wants some linear extension.\n\nNote that linear extensions are not generated uniformly at random by this function. Rather we proceed recursively: A minimal element x of P is chosen uniformly at random from among all minimal elements, and that becomes the first (lowest) element in the linear extension. Then x is deleted and the same process is repeated until all elements have been processed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleGraphs.relabel",
    "page": "Docstrings",
    "title": "SimpleGraphs.relabel",
    "category": "function",
    "text": "relabel(P) creates a new poset P in which the elements are relabeled using the values 1:n (where n=card(P)).\n\nrelabel(P,d) relabels elements according to the dictionary d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.relations",
    "page": "Docstrings",
    "title": "SimplePosets.relations",
    "category": "function",
    "text": "relations(P) returns a list of ordered pairs (u,v) where u and v are elements of the poset that satisfy u<v in P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.stack",
    "page": "Docstrings",
    "title": "SimplePosets.stack",
    "category": "function",
    "text": "stack(P...) stacks its poset arguments each on top of each other. The first poset in the list is on the bottom.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.true_average_height",
    "page": "Docstrings",
    "title": "SimplePosets.true_average_height",
    "category": "function",
    "text": "true_average_height(P) gives the average height of the elements of P averaged over all linear extensions of P. See all_linear_extensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.zeta",
    "page": "Docstrings",
    "title": "SimplePosets.zeta",
    "category": "function",
    "text": "zeta(P) returns the zeta function of P as a Dict. If d=zeta(P) then d[u,v]==1 when u and v are elements of the poset for which u==v or (u,v) is a relation of P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosets.zeta_matrix",
    "page": "Docstrings",
    "title": "SimplePosets.zeta_matrix",
    "category": "function",
    "text": "zeta_matrix(P) creates the zeta matrix of a poset P. The rows/columns of this matrix are indexed by the elements of P. We have a 1 in the i,j-position exactly when the ith element of P is <= the jth element of P.\n\nThe ordering of the rows/columns does not necessarily lead to an upper triangular matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimplePosets.AntichainSimplePosets.BooleanLatticeSimplePosets.ChainSimplePosets.ComparabilityGraphSimplePosets.CoverDigraphSimplePosets.DivisorsSimplePosets.IntPosetSimplePosets.PartitionLatticeSimplePosets.RandomPosetSimplePosets.SimplePosetSimplePosets.SimplePosetsSimplePosets.StandardExampleSimplePosets._LX_tableSimplePosets.aboveSimplePosets.add!SimplePosets.all_linear_extensionsSimplePosets.belowSimplePosets.cardSimplePosets.checkSimplePosets.clear_LX_tableSimplePosets.delete!SimplePosets.displaySimplePosets.divisorsSimplePosets.element_typeSimplePosets.elementsSimplePosets.evalSimplePosets.first_prime_factorSimplePosets.hasSimplePosets.hashSimplePosets.heightSimplePosets.includeSimplePosets.incomparablesSimplePosets.intersectSimplePosets.intervalSimplePosets.invSimplePosets.linear_extensionSimplePosets.maximalsSimplePosets.minimalsSimplePosets.mobiusSimplePosets.mobius_matrixSimplePosets.random_average_heightSimplePosets.random_linear_extensionSimplePosets.relabelSimplePosets.relationsSimplePosets.showSimplePosets.stackSimplePosets.true_average_heightSimplePosets.vec_lessSimplePosets.zetaSimplePosets.zeta_matrix"
},

]}
