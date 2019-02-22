var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimplePosetAlgorithms-1",
    "page": "Readme",
    "title": "SimplePosetAlgorithms",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)Additional algorithms for the SimplePoset type. Relies on SimpleGraphAlgorithms. See that module for more information.Note: Calculations are done via an integer linear program and   there can be quite slow."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "max_chain(P) returns a maximum size chain of the SimplePoset.\nmax_antichain(P) returns a maximum size antichain of theSimplePosetwidth(P) returns the size of a largest antichain in the SimplePoset. [Note: The function height (which gives the size of a largest chain) is already defined in the SimplePosets module and does not rely on integer linear programming.]\nrealizer(P,d) returns a realizer of P with d linear extensions,or throws an error if none exists. This is returned as a matrix with d columns.realize_poset(R) creates a poset from a realizer. Here R is amatrix whose columns are the linear orders of the realizer.dimension(P) returns the minimum size of a realizer. Usedimension(P,true) for verbose reporting."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> P = BooleanLattice(5)\nSimplePoset{String} (32 elements)\n\njulia> max_chain(P)\n{00000,00001,01001,11001,11011,11111}\n\njulia> max_antichain(P)\n{00111,01011,01101,01110,10011,10101,10110,11001,11010,11100}\n\njulia> P = Divisors(30)\nSimplePoset{Int64} (8 elements)\n\njulia> realizer(P,3)\n8×3 Array{Int64,2}:\n  1   1   1\n  3   2   3\n  5   5   2\n 15  10   6\n  2   3   5\n 10  15  15\n  6   6  10\n 30  30  30\n\njulia> realize_poset(ans) == P\ntrue\n\njulia> P = BooleanLattice(4)\nSimplePoset{String} (16 elements)\n\njulia> dimension(P,true)\n2 <= dim(P) <= 8	looking for a 5 realizer	confirmed\n2 <= dim(P) <= 5	looking for a 3 realizer	none exists\n4 <= dim(P) <= 5	looking for a 4 realizer	confirmed\n4 <= dim(P) <= 4	and we\'re done\n4"
},

{
    "location": "autodocs/#SimplePosetAlgorithms.dimension",
    "page": "Docstrings",
    "title": "SimplePosetAlgorithms.dimension",
    "category": "function",
    "text": "dimension(P::SimplePoset, verbose=false) returns the order-theoretic dimension of the poset P. Set verbose to true to see more information as the work is done.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosetAlgorithms.max_antichain",
    "page": "Docstrings",
    "title": "SimplePosetAlgorithms.max_antichain",
    "category": "function",
    "text": "max_antichain(P) returns a largest set of pairwise incomparable elements in the SimplePoset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosetAlgorithms.max_chain",
    "page": "Docstrings",
    "title": "SimplePosetAlgorithms.max_chain",
    "category": "function",
    "text": "max_chain(P) returns a largest set of pairwise comparable elements in the SimplePoset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosetAlgorithms.realize_poset",
    "page": "Docstrings",
    "title": "SimplePosetAlgorithms.realize_poset",
    "category": "function",
    "text": "realize_poset(R::Array{T,2}) creates a poset from a realizer. The columns of R are the linear extensions of some poset; this function returns that poset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosetAlgorithms.realizer",
    "page": "Docstrings",
    "title": "SimplePosetAlgorithms.realizer",
    "category": "function",
    "text": "realizer(P::SimplePoset,d::Int) creates a realizer of P using d linear extensions or throws an error if none exists. The output is an n-by-d matrix whose columns give the linear extensions. The first element in each column is the bottom element of that linear extension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimplePosetAlgorithms.width",
    "page": "Docstrings",
    "title": "SimplePosetAlgorithms.width",
    "category": "function",
    "text": "width(P) gives the size of a largest antichain in the poset P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimplePosetAlgorithms.SimplePosetAlgorithmsSimplePosetAlgorithms._distinctSimplePosetAlgorithms.dimensionSimplePosetAlgorithms.dimension_workSimplePosetAlgorithms.evalSimplePosetAlgorithms.includeSimplePosetAlgorithms.make_linear_orderSimplePosetAlgorithms.max_antichainSimplePosetAlgorithms.max_chainSimplePosetAlgorithms.realize_posetSimplePosetAlgorithms.realizerSimplePosetAlgorithms.width"
},

]}
