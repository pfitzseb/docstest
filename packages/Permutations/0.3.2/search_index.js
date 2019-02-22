var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Permutations-1",
    "page": "Readme",
    "title": "Permutations",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)This is documentation for a Permutation data type for Julia. We only consider permutations of sets of the form {1,2,3,...,n} where n is a positive integer.A Permutation object is created from a one-dimensional arry of integers containing each of the values 1 through n exactly once.julia> a = [4,1,3,2,6,5];\njulia> p = Permutation(a)\n(1,4,2)(3)(5,6)Observe the Permutation is printed in disjoint cycle format.The number of elements in a Permutation is determined using the length function:julia> length(p)\n6A Permutation can be converted to an array (equal to the array used to construct the Permutation in the first place) or can be presented as a two-row matrix as follows:julia> p.data\n6-element Array{Int64,1}:\n 4\n 1\n 3\n 2\n 6\n 5\njulia> two_row(p)\n2x6 Array{Int64,2}:\n 1  2  3  4  5  6\n 4  1  3  2  6  5The evaluation of a Permutation on a particular element is performed using square bracket or parenthesis notation:julia> p[2]\n1\njulia> p(2)\n1Of course, bad things happen if an inappropriate element is given:julia> p[7]\nERROR: BoundsError()\n in getindex at ...."
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "Composition is denoted by *:julia> q = Permutation([1,6,2,3,4,5])\n(1)(2,6,5,4,3)\njulia> p*q\n(1,4,3)(2,5)(6)\njulia> q*p\n(1,3,2)(4,6)(5)Repeated composition is calculated using ^, like this: p^n. The exponent can be negative.The inverse of a Permutation is computed using inv or as p\':julia> q = inv(p)\n(1,2,4)(3)(5,6)\njulia> p*q\n(1)(2)(3)(4)(5)(6)To get the cycle structure of a Permutation (not as a character string, but as an array of arrays), use cycles:julia> cycles(p)\n3-element Array{Array{Int64,1},1}:\n [1,4,2]\n [3]\n [5,6]The sqrt function returns a compositional square root of the permutation. That is, if q=sqrt(p) then q*q==p. Note that not all permutations have square roots and square roots are not unique.julia> p\n(1,12,7,4)(2,8,3)(5,15,11,14)(6,10,13)(9)\n\njulia> q = sqrt(p)\n(1,5,12,15,7,11,4,14)(2,3,8)(6,13,10)(9)\n\njulia> q*q == p\ntrueThe function Matrix converts a permutation p to a square matrix whose i,j-entry is 1 when i == p[j] and 0 otherwise.julia> p = RandomPermutation(6)\n(1,5,2,6)(3)(4)\n\njulia> Matrix(p)\n6×6 Array{Int64,2}:\n 0  0  0  0  0  1\n 0  0  0  0  1  0\n 0  0  1  0  0  0\n 0  0  0  1  0  0\n 1  0  0  0  0  0\n 0  1  0  0  0  0Note: sparse method has been removed during transition from Julia 0.6 to 0.7.The sign of a Permutation is +1 for an even permutation and -1 for an odd permutation.julia> p = Permutation([2,3,4,1])\n(1,2,3,4)\n\njulia> sign(p)\n-1\n\njulia> sign(p*p)\n1If one thinks of a permutation as a sequence, then applying reverse to that permutation returns a new permutation based on the reversal of that sequence. Here\'s an example:julia> p = RandomPermutation(8)\n(1,5,8,4,6)(2,3)(7)\n\njulia> two_row(p)\n2x8 Array{Int64,2}:\n 1  2  3  4  5  6  7  8\n 5  3  2  6  8  1  7  4\n\njulia> two_row(reverse(p))\n2x8 Array{Int64,2}:\n 1  2  3  4  5  6  7  8\n 4  7  1  8  6  2  3  5"
},

{
    "location": "#Additional-constructors-1",
    "page": "Readme",
    "title": "Additional constructors",
    "category": "section",
    "text": "For convenience, identity and random permutations can be constructed like this:julia> Permutation(10)\n(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)\n\njulia> RandomPermutation(10)\n(1,7,6,10,3,2,8,4)(5,9)In addition, we can use Permutation(n,k) to create the k\'th permutation of the set {1,2,...,n}. Of course, this requires k to be between 1 and n!.julia> Permutation(6,701)\n(1,6,3)(2,5)(4)"
},

{
    "location": "#Properties-1",
    "page": "Readme",
    "title": "Properties",
    "category": "section",
    "text": "A fixed point of a permutation p is a value k such that p[k]==k. The function fixed_points returns a list of the fixed points of a given permutation.julia> p = RandomPermutation(20)\n(1,15,10,9,11,13,12,8,5,7,18,6,2)(3)(4,16,17,19)(14)(20)\n\njulia> fixed_points(p)\n3-element Array{Int64,1}:\n  3\n 14\n 20The function longest_increasing finds a subsequence of a permutation whose elements are in increasing order. Likewise, longest_decreasing finds a longest decreasing subsequence. For example:julia> p = RandomPermutation(10)\n(1,3,10)(2)(4)(5,6)(7)(8)(9)\n\njulia> two_row(p)\n2x10 Array{Int64,2}:\n 1  2   3  4  5  6  7  8  9  10\n 3  2  10  4  6  5  7  8  9   1\n\njulia> longest_increasing(p)\n6-element Array{Int64,1}:\n 3\n 4\n 6\n 7\n 8\n 9\n\njulia> longest_decreasing(p)\n4-element Array{Int64,1}:\n 10\n  6\n  5\n  1"
},

{
    "location": "#Conversion-to-a-Dict-1",
    "page": "Readme",
    "title": "Conversion to a Dict",
    "category": "section",
    "text": "For a permutation p, calling dict(p) returns a dictionary that behaves just like p.julia> p = RandomPermutation(12)\n(1,11,6)(2,8,7)(3)(4,5,9,12,10)\n\njulia> d = dict(p)\nDict{Int64,Int64} with 12 entries:\n  2  => 8\n  11 => 6\n  7  => 2\n  9  => 12\n  10 => 4\n  8  => 7\n  6  => 1\n  4  => 5\n  3  => 3\n  5  => 9\n  12 => 10\n  1  => 11"
},

{
    "location": "#Coxeter-Decomposition-1",
    "page": "Readme",
    "title": "Coxeter Decomposition",
    "category": "section",
    "text": "Every permutation can be expressed as a product of transpositions. In a Coxeter decomposition the permutation is the product of transpositions of the form (j,j+1). Given a permutation p, we get this form with CoxeterDecomposition(p):julia> p = Permutation([2,4,3,5,1,6,8,7])\n(1,2,4,5)(3)(6)(7,8)\n\njulia> pp = CoxeterDecomposition(p)\nPermutation of 1:8: (1,2)(2,3)(3,4)(2,3)(4,5)(7,8)The original permutation can be recovered like this:julia> Permutation(pp)\n(1,2,4,5)(3)(6)(7,8)"
},

{
    "location": "autodocs/#Permutations.CoxeterDecomposition",
    "page": "Docstrings",
    "title": "Permutations.CoxeterDecomposition",
    "category": "type",
    "text": "CoxeterDecomposition(p) expresses the Permutation p as a composition of transpositions of the form (k,k+1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.Permutation",
    "page": "Docstrings",
    "title": "Permutations.Permutation",
    "category": "type",
    "text": "Permutation(list) creates a new Permutation. Here list must be a rearrangement of 1:n.\nPermutation(n) creates the identity Permutation of 1:n.\nPermutation(n,k) creates the k\'th Permutation of 1:n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.RandomPermutation",
    "page": "Docstrings",
    "title": "Permutations.RandomPermutation",
    "category": "function",
    "text": "RandomPermutation(n) creates a random permutation of 1:n, each with probability 1/factorial(n).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.cycle_string",
    "page": "Docstrings",
    "title": "Permutations.cycle_string",
    "category": "function",
    "text": "cycle_string(p) creates a nice, prinatble string representation from the cycle structure of the permutation p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.cycles",
    "page": "Docstrings",
    "title": "Permutations.cycles",
    "category": "function",
    "text": "cycles(p) returns a list of the cycles in Permutation p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.dict",
    "page": "Docstrings",
    "title": "Permutations.dict",
    "category": "function",
    "text": "dict(p) converts a permutation into a dictionary. If d is the result then d[k] equals p(k) for all k in the domain of the permutation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.fixed_points",
    "page": "Docstrings",
    "title": "Permutations.fixed_points",
    "category": "function",
    "text": "fixed_points(p) returns the list of values k for which p(k)==k.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.inv",
    "page": "Docstrings",
    "title": "Base.inv",
    "category": "function",
    "text": "inv(p) gives the inverse of Permutation p. This may also be computed with p\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "function",
    "text": "length(p) is the number of elements in the Permutation p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.longest_decreasing",
    "page": "Docstrings",
    "title": "Permutations.longest_decreasing",
    "category": "function",
    "text": "Let p be a Permutation. Thinking of this as a list of values, longest_decreasing(p) returns a longest subsequence of values that are in descending order\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.longest_increasing",
    "page": "Docstrings",
    "title": "Permutations.longest_increasing",
    "category": "function",
    "text": "Let p be a Permutation. Thinking of this as a list of values, longest_increasing(p) returns a longest subsequence of values that are in ascending order\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.order",
    "page": "Docstrings",
    "title": "Permutations.order",
    "category": "function",
    "text": "order(p) is the smallest positive integer n such that p^n is the identity Permutation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.reverse",
    "page": "Docstrings",
    "title": "Base.reverse",
    "category": "function",
    "text": "Let p be a Permutation. Thinking of p as a list of values, reverse(p) creates a Permutation with those values in reverse sequence.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.sign",
    "page": "Docstrings",
    "title": "Base.sign",
    "category": "function",
    "text": "sign(p) is +1 is p is an even Permtuation and -1 if p is odd.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.sort_by_size",
    "page": "Docstrings",
    "title": "Permutations.sort_by_size",
    "category": "function",
    "text": "sort_by_size(list) returns a sorted copy of list in which the elements are sorted by the length function (from smallest to largest).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.two_row",
    "page": "Docstrings",
    "title": "Permutations.two_row",
    "category": "function",
    "text": "two_row(p) creates a two-row representation of the Permutation p in which the first row is 1:n and the second row are the values p(1), p(2), ..., p(n).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Permutations.AbstractPermutationPermutations.CoxeterDecompositionPermutations.CoxeterDecomposition!Permutations.CoxeterGeneratorPermutations.PermutationPermutations.PermutationsPermutations.RandomPermutationPermutations._coxeter_reduce!Permutations._coxeterdecomposition!Permutations.arrayPermutations.array2stringPermutations.cycle_stringPermutations.cyclesPermutations.dictPermutations.evalPermutations.fixed_pointsPermutations.getindexPermutations.hashPermutations.includePermutations.invPermutations.lengthPermutations.longest_decreasingPermutations.longest_increasingPermutations.longest_monotonePermutations.matrixPermutations.orderPermutations.reversePermutations.signPermutations.sort_by_sizePermutations.two_rowPermutations.weavePermutations.√"
},

]}
