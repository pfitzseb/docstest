var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiscreteFunctions-1",
    "page": "Readme",
    "title": "DiscreteFunctions",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This module defines the DiscreteFunction type which represents a function defined on the set {1,2,...,n} (n must be positive)."
},

{
    "location": "#Basic-Constructor-1",
    "page": "Readme",
    "title": "Basic Constructor",
    "category": "section",
    "text": "A DiscreteFunction is created by providing a list of values either by passing an array of Int values or as a list of Int arguments:julia> using DiscreteFunctions\n\njulia> f = DiscreteFunction([2,3,1,4]);\n\njulia> g = DiscreteFunction(2,3,1,4);\n\njulia> f==g\ntrueFunction evaluation may use either f(x) or f[x]. It is possible to change the value of f at x using the latter.If p is a Permutation then DiscreteFunction(p) creates a DiscreteFunction based on p.julia> using Permutations\n\njulia> p = RandomPermutation(6)\n(1,6)(2,5,3,4)\n\njulia> DiscreteFunction(p)\nDiscreteFunction on [6]\n   1   2   3   4   5   6\n   6   5   4   2   3   1"
},

{
    "location": "#Special-Constructors-1",
    "page": "Readme",
    "title": "Special Constructors",
    "category": "section",
    "text": "IdentityFunction(n) creates the identity function on the set {1,2,...,n}.\nRandomFunction(n) creates a random function on the set {1,2,...,n}."
},

{
    "location": "#Operations-and-Methods-1",
    "page": "Readme",
    "title": "Operations and Methods",
    "category": "section",
    "text": "The composition of functions f and g is computed with f*g. Exponentiation signals repeated composition, i.e., f^4 is the same as f*f*f*f.We can test if f is invertible using has_inv(f) and inv(f) returns the inverse function (or throws an error if no inverse exists). This can also be computed as f^-1 and, in general, if f is invertible it can be raised to negative exponents. The function is_permutation is a synonym for has_inv."
},

{
    "location": "#Other-methods-1",
    "page": "Readme",
    "title": "Other methods",
    "category": "section",
    "text": "length(f) returns the number of elements in f\'s domain.  \nfixed_points(f) returns a list of the fixed points in the function.\nimage(f) returns a Set containing the output values of f."
},

{
    "location": "#Expensive-operations-1",
    "page": "Readme",
    "title": "Expensive operations",
    "category": "section",
    "text": "all_functions(n) returns an iterator for all functions defined on 1:n.Note that there are n^n such functions so this grows quickly.sqrt(f) returns a DiscreteFunction g such that g*g==f or throws anerror if no such function exists. (Currently this is done by iterating over all possible functions; that\'s very bad.)"
},

{
    "location": "#Extras-1",
    "page": "Readme",
    "title": "Extras",
    "category": "section",
    "text": "This is some additional code that is not automatically loaded by using DiscreteFunctions. Use include on the appropriate file in the src directory."
},

{
    "location": "#src/tree_function.jl-1",
    "page": "Readme",
    "title": "src/tree_function.jl",
    "category": "section",
    "text": "This file defines tree2function(G::SimpleGraph). It assumes that G is a tree with vertex set 1:n and returns a DiscreteFunction defined by pointing all edges to the root, 1."
},

{
    "location": "#src/draw_function.jl-1",
    "page": "Readme",
    "title": "src/draw_function.jl",
    "category": "section",
    "text": "This file defines draw(f) to give a picture of f."
},

{
    "location": "autodocs/#DiscreteFunctions.DiscreteFunction",
    "page": "Docstrings",
    "title": "DiscreteFunctions.DiscreteFunction",
    "category": "type",
    "text": "DiscreteFunction is a function from {1,2,...,n} to itself. It can be created by DiscreteFunction(list) where list is a one-dimensional array of positive integers. Alternatively, it can be created using positive integer arguments.\n\nThe following are equivalent:\n\nDiscreteFunction([1,4,2,3])\nDiscreteFunction(1,4,2,3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.IdentityFunction",
    "page": "Docstrings",
    "title": "DiscreteFunctions.IdentityFunction",
    "category": "function",
    "text": "IdentityFunction(n) creates the identity DiscreteFunction on the set {1,2,...,n}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.RandomFunction",
    "page": "Docstrings",
    "title": "DiscreteFunctions.RandomFunction",
    "category": "function",
    "text": "RandomFunction(n) creates a random DiscreteFunction on {1,2,...,n}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.all_functions",
    "page": "Docstrings",
    "title": "DiscreteFunctions.all_functions",
    "category": "function",
    "text": "all_functions(n) returns a generator that produces all DiscreteFunctions on {1,2,...,n}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.all_sqrts",
    "page": "Docstrings",
    "title": "DiscreteFunctions.all_sqrts",
    "category": "function",
    "text": "all_sqrts(f::DiscreteFunction) returns an array consisting of all g such that g*g==f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.all_squares",
    "page": "Docstrings",
    "title": "DiscreteFunctions.all_squares",
    "category": "function",
    "text": "all_squares(n) returns a list of all function on [n] that are perfect compositional squares.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Permutations.fixed_points",
    "page": "Docstrings",
    "title": "Permutations.fixed_points",
    "category": "function",
    "text": "fixed_points(f::DiscreteFunction) returns a list of fixed points of the function, i.e., those values x such that f(x)==x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.has_inv",
    "page": "Docstrings",
    "title": "DiscreteFunctions.has_inv",
    "category": "function",
    "text": "has_inv(f::DiscreteFunction) tests if f is invertible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.has_sqrt",
    "page": "Docstrings",
    "title": "DiscreteFunctions.has_sqrt",
    "category": "function",
    "text": "has_sqrt(f::DiscreteFunction) checks if there is a function g such that g*g==f. Returns true if so and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.image",
    "page": "Docstrings",
    "title": "DiscreteFunctions.image",
    "category": "function",
    "text": "image(\"f::DiscreteFunction\") returns a Set containing all the output values of f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.is_permutation",
    "page": "Docstrings",
    "title": "DiscreteFunctions.is_permutation",
    "category": "function",
    "text": "is_permutation(f::DiscreteFunction) returns true if f is a bijection on its domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiscreteFunctions.random_square",
    "page": "Docstrings",
    "title": "DiscreteFunctions.random_square",
    "category": "function",
    "text": "random_square(n) returns a DiscreteFunction on n elements that has a compositional square root.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.sqrt",
    "page": "Docstrings",
    "title": "Base.sqrt",
    "category": "function",
    "text": "sqrt(f::DiscreteFunction) returns a DiscreteFunction g such that g*g==f or throws an error if no such g exists.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DiscreteFunctions.DiscreteFunctionDiscreteFunctions.DiscreteFunctionsDiscreteFunctions.IdentityFunctionDiscreteFunctions.RandomFunctionDiscreteFunctions.all_functionsDiscreteFunctions.all_sqrtsDiscreteFunctions.all_squaresDiscreteFunctions.evalDiscreteFunctions.fixed_pointsDiscreteFunctions.has_invDiscreteFunctions.has_sqrtDiscreteFunctions.imageDiscreteFunctions.includeDiscreteFunctions.is_permutationDiscreteFunctions.random_squareDiscreteFunctions.sqrt"
},

]}
