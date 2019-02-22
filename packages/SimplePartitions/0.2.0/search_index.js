var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimplePartitions-1",
    "page": "Readme",
    "title": "SimplePartitions",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Module for set partitions. We define a Partition to be a wrapper around the DisjointUnion type defined in the DataStructures module, but with a bit more functionality.New: We also include IntegerPartition too! (See below.)"
},

{
    "location": "#Partition-Constructor-1",
    "page": "Readme",
    "title": "Partition Constructor",
    "category": "section",
    "text": "A new Partition is created by specifying the ground set. That is, if A is a Set{T} (for some type T) or an IntSet, then Partition(A) creates a new Partition whose ground set is A and the parts are singletons.julia> using ShowSet\nWARNING: Method definition show(Base.IO, Base.Set) ...\nWARNING: Method definition show(Base.IO, Base.IntSet) ...\n\njulia> using SimplePartitions\n\njulia> A = Set(1:10)\n{1,2,3,4,5,6,7,8,9,10}\n\njulia> P = Partition(A)\n{{9},{6},{5},{8},{1},{3},{2},{10},{7},{4}}The parameter to Partition may also be a list (one-dimensional array) or a positive integer n, in which case a partition of the set {1,2,...,n} is created."
},

{
    "location": "#Construct-from-a-set-of-sets-1",
    "page": "Readme",
    "title": "Construct from a set of sets",
    "category": "section",
    "text": "If S is a set of sets then PartitionBuilder(S) creates a new partition whose parts are the sets in S. The sets in S must be nonempty and pairwise disjoint."
},

{
    "location": "#Construct-from-a-Permutation-1",
    "page": "Readme",
    "title": "Construct from a Permutation",
    "category": "section",
    "text": "If p is a Permutation, then Partition(p) creates a new partition whose parts are the cycles of p."
},

{
    "location": "#Construct-from-a-Dict-1",
    "page": "Readme",
    "title": "Construct from a Dict",
    "category": "section",
    "text": "If d is a dictionary, the Partition(d) creates a new partition whose elements are the keys of d in which two elements a and b are in the same part if and only if d[a] == d[b]."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "num_elements(P): returns the number of elements in the groundset of P.num_parts(P): returns the number of parts in P.\nparts(P): returns the set of the parts in this partition.\ncollect(P) returns a one-dimensional array containing the parts.\nground_set(P): returns (a copy of) the ground set of P.\nin(a,P): test if a (element) is in the ground set of P.\nin(A,P): test if A (set) is a part of P.\nmerge_parts!(P,a,b): Modify P by merging the parts of P thatcontain the elements a and b. This may also be called with a list for the second argument: merge_parts!(P,[a,b,...]).in_same_part(P,a,b): returns true if a and b are in the samepart of P.find_part(P,a): returns the set of elements in Pthat are in the same part as a."
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "join(P,Q) returns the join of partitions P and Q. This can alsobe invoked as P+Q or as P∨Q.meet(P,Q) returns the meet of the partitions. This can also beinvoked as P*Q or as P∧Q.P+x where P is a partition and x is a new element creates anew partition in which x is added as a singleton.P+A where P is a partition and A is a set of elements(that are disjoint from the elements already in P) creates a new partition by adding A as a part."
},

{
    "location": "#Relations-1",
    "page": "Readme",
    "title": "Relations",
    "category": "section",
    "text": "P==Q determines if P and Q are equal partitions.\nP<=Q determines if P is a refinement of Q. That is, we return trueif each part of P is a subset of a part of Q. Note that P and Q must have the same ground set or else an error is thrown. The variants P<Q, P>=Q, and P>Q are available with the expected meanings. Calling refines(P,Q) is the same as P<=Q."
},

{
    "location": "#Generating-all-partitions-of-a-set-1",
    "page": "Readme",
    "title": "Generating all partitions of a set",
    "category": "section",
    "text": "all_partitions(A::Set) creates a Set containing all possiblepartitions of A.all_partitions(n::Int) creates a Set containing all possiblepartitions of the set {1,2,...,n}.Both of these take an optional second argument k to specify that only partitions with exactly k parts should be returned."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Note: Sets are nicely displayed here because we invoked using ShowSet.julia> A = Set([\"alpha\", \"bravo\", \"charlie\", \"delta\", \"echo\"])\n{alpha,bravo,charlie,delta,echo}\n\njulia> P = Partition(A)\n{{delta},{echo},{charlie},{bravo},{alpha}}\n\njulia> merge_parts!(P,\"alpha\", \"bravo\")\n\njulia> merge_parts!(P,\"echo\", \"bravo\")\n\njulia> merge_parts!(P,\"charlie\", \"delta\")\n\njulia> P\n{{charlie,delta},{alpha,bravo,echo}}\n\njulia> Q = Partition(A);\n\njulia> merge_parts!(Q,\"alpha\", \"echo\")\n\njulia> merge_parts!(Q,\"delta\",\"alpha\")\n\njulia> Q\n{{charlie},{bravo},{alpha,delta,echo}}\n\njulia> P+Q\n{{alpha,bravo,charlie,delta,echo}}\n\njulia> P*Q\n{{delta},{charlie},{bravo},{alpha,echo}}<hr>"
},

{
    "location": "#Integer-Partitions-1",
    "page": "Readme",
    "title": "Integer Partitions",
    "category": "section",
    "text": "The type IntegerPartition represents a partition of an integer. These can be constructed either from a one-dimensional array of integers or as individual arguments:IntegerPartition([a,b,c,...]) or\nIntegerPartition(a,b,c,...)"
},

{
    "location": "#Operations/Functions-1",
    "page": "Readme",
    "title": "Operations/Functions",
    "category": "section",
    "text": "parts(P) returns a list containing the parts.\nsum(P) returns the sum of the parts.\nnum_parts(P) returns the number of parts.\nFerrers(P) prints a Ferrer\'s diagram of P.\nconj(P) or P\' returns the Ferrer\'s conjugate of P\nP+Q returns the concatenation of P and Q:julia> P = IntegerPartition(2,2,4)\n(4+2+2)\n\njulia> Q = IntegerPartition(5,2,1)\n(5+2+1)\n\njulia> P+Q\n(5+4+2+2+2+1)<hr>"
},

{
    "location": "#To-do-list-1",
    "page": "Readme",
    "title": "To do list",
    "category": "section",
    "text": "Create RandomPartition(n) [and RandomPartition(Set)]."
},

{
    "location": "autodocs/#SimplePartitions.Ferrers",
    "page": "Docstrings",
    "title": "SimplePartitions.Ferrers",
    "category": "function",
    "text": "Ferrers(P::IntegerParition) prints a graphical representation of the partition P in the form of a Ferrer\'s diagram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.IntegerPartition",
    "page": "Docstrings",
    "title": "SimplePartitions.IntegerPartition",
    "category": "type",
    "text": "An IntegerPartition is a decreasing list of positive integers. Construct in the following ways:\n\nIntegerParition([a,b,c,...])\nIntegerPartition(a,b,c,...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.Partition",
    "page": "Docstrings",
    "title": "SimplePartitions.Partition",
    "category": "type",
    "text": "A Partition is a set of nonempty, pairwise disjoint sets. A new Partition is created by specifying the ground set A and calling Partition(A). The set A may be either a Set{T} for some type T or an BitSet.\n\nThe parameter A may also be a list (one-dimensional array).\n\nIn addition, Partition(n) for a nonnegative integer n creates a partition of the set {1,2,...,n}.\n\nThe datatype Partition is, essentially, a wrapper around the DataStructures.DisjointSets type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.PartitionBuilder",
    "page": "Docstrings",
    "title": "SimplePartitions.PartitionBuilder",
    "category": "function",
    "text": "PartitionBuilder(A,check=true) takes a set of nonempty, pairwise disjoint sets and creates the corresponding partition. It is the inverse operation to parts(P). The optional parameter check causes sanity checks to be return on the input set of sets (throwing errors if it is invalid).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.all_partitions",
    "page": "Docstrings",
    "title": "SimplePartitions.all_partitions",
    "category": "function",
    "text": "all_partitions(A::Set) creates a Set containing all possible partitions of the set A.\n\nall_partitions(n::Int) creates the Set of all partitions of the set {1,2,...,n}.\n\nBoth of these take an optional second argument k to specify that only partitions with exactly k parts should be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.find_part",
    "page": "Docstrings",
    "title": "SimplePartitions.find_part",
    "category": "function",
    "text": "find_part(P,a) returns the part of P that contains a (or throws an error if a is not in the ground set).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.ground_set",
    "page": "Docstrings",
    "title": "SimplePartitions.ground_set",
    "category": "function",
    "text": "elements(P) returns (a copy of) the ground set of the partition P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.in_same_part",
    "page": "Docstrings",
    "title": "SimplePartitions.in_same_part",
    "category": "function",
    "text": "in_same_part(P,a,b) returns true if a and b are in the same part of the partition P. An error is thrown if either is not in the ground set of P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.kill_sos!",
    "page": "Docstrings",
    "title": "SimplePartitions.kill_sos!",
    "category": "function",
    "text": "kill_sos!(P) wipes out the set-of-sets cache. Only used internally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.meet",
    "page": "Docstrings",
    "title": "SimplePartitions.meet",
    "category": "function",
    "text": "meet(P,Q) computes the meet of the partitions. This may also be invoked as P*Q.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.merge_parts!",
    "page": "Docstrings",
    "title": "SimplePartitions.merge_parts!",
    "category": "function",
    "text": "merge_parts!(P,a,b) updates P by merging the parts that contain elements a and b.\n\n\n\n\n\nmerge_parts!(P,elts) merges all the elements in elts into a part. Thus merge_parts!(P,[a,b]) is equivalent to merge_parts!(P,a,b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.num_elements",
    "page": "Docstrings",
    "title": "SimplePartitions.num_elements",
    "category": "function",
    "text": "num_elements(P) gives the number of elements in the ground set of the partition P. This equals the sum of the sizes of the parts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.num_parts",
    "page": "Docstrings",
    "title": "SimplePartitions.num_parts",
    "category": "function",
    "text": "num_parts(P) gives the number of parts in the partition P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.parts",
    "page": "Docstrings",
    "title": "SimplePartitions.parts",
    "category": "function",
    "text": "parts(P) returns a set containing the parts of the partition P. That is, we return a set of sets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.refines",
    "page": "Docstrings",
    "title": "SimplePartitions.refines",
    "category": "function",
    "text": "refines(P,Q) determines if P is a refinement of Q. That is, is every part of P a subset of a part of Q? The two partitions must have the same ground set of else an error is thrown.\n\nrefines(P,Q) can be invoked as P<=Q. The variants P<Q, P>=Q, and P>Q operate as expected. Note that partitions are only partially ordered by refinement and one can easily construct partitions P and Q for which both P<=Q and Q<=P are false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePartitions.set_element_type",
    "page": "Docstrings",
    "title": "SimplePartitions.set_element_type",
    "category": "function",
    "text": "set_element_type(A) gives the element type of a set A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimplePartitions.FerrersSimplePartitions.IntegerPartitionSimplePartitions.PartitionSimplePartitions.PartitionBuilderSimplePartitions.SimplePartitionsSimplePartitions.all_partitionsSimplePartitions.build_sos!SimplePartitions.evalSimplePartitions.find_partSimplePartitions.ground_setSimplePartitions.in_same_partSimplePartitions.includeSimplePartitions.kill_sos!SimplePartitions.meetSimplePartitions.merge_parts!SimplePartitions.num_elementsSimplePartitions.num_partsSimplePartitions.partsSimplePartitions.refinesSimplePartitions.set_element_typeSimplePartitions.∧SimplePartitions.∨"
},

]}
