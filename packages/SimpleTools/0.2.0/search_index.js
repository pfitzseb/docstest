var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleTools-1",
    "page": "Readme",
    "title": "SimpleTools",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)Miscellaneous code that is possibly useful for my SimpleWorld modules."
},

{
    "location": "#Composition-of-Dictionaries-1",
    "page": "Readme",
    "title": "Composition of Dictionaries",
    "category": "section",
    "text": "Dictionaries are like functions and so it makes sense to define a composition operation for them.Suppose that f and g are dictionaries such that all the values in f appear as keys in g. Then, if k is any key of f the expression g[f[k]] is defined. In this case, we may compute g*f to yield a new dictionary h with the same keys as f and for which h[k] == g[f[k]] for all keys k.Warnings are issued under the following circumstances:If some value of f is not a key of g.\nIf the type of the values in f doesn\'t matchthe key type for g."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Here is an example without any warnings.julia> f = Dict([(\"alpha\", 1), (\"bravo\", 2)])\nDict{ASCIIString,Int64} with 2 entries:\n  \"alpha\" => 1\n  \"bravo\" => 2\n\njulia> g = Dict([(1,3.14), (2,2.718), (3,1.618)])\nDict{Int64,Float64} with 3 entries:\n  2 => 2.718\n  3 => 1.618\n  1 => 3.14\n\njulia> g*f\nDict{ASCIIString,Float64} with 2 entries:\n  \"alpha\" => 3.14\n  \"bravo\" => 2.718And this is an example in which problems arise that are not so serious that the composition fails:julia> f = Dict([(\"alpha\", 1), (\"bravo\", 2)])\nDict{ASCIIString,Int64} with 2 entries:\n  \"alpha\" => 1\n  \"bravo\" => 2\n\njulia> g = Dict([(1.0, 3.33)])\nDict{Float64,Float64} with 1 entry:\n  1.0 => 3.33\n\njulia> g*f\nWARNING: Dictionary type mismatch\nWARNING: 1 keys were not mapped\nDict{ASCIIString,Float64} with 1 entry:\n  \"alpha\" => 3.33"
},

{
    "location": "#Continuity-Restored-1",
    "page": "Readme",
    "title": "Continuity Restored",
    "category": "section",
    "text": "If one records the angle of a tangent vector as it traverses around a smooth closed curve, the values should be continuous. However, because there is a 2π ambiguity, one could see jumps. Here is an example.(Image: )If the angles are held in an array named y then the following will correct the problem.julia> make_continuous!(y,2pi)The resulting graph looks like this:(Image: )"
},

{
    "location": "autodocs/#SimpleTools.SimpleTools",
    "page": "Docstrings",
    "title": "SimpleTools.SimpleTools",
    "category": "module",
    "text": "SimpleTools is a collection of useful functions that don\'t have an obvious home, but are useful for my SimpleWorld modules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleTools.make_continuous!",
    "page": "Docstrings",
    "title": "SimpleTools.make_continuous!",
    "category": "function",
    "text": "make_continuous!(vals,mod) assumes that the list of numbers in vals should represent a continuous stream of numbers, but with ambiguity modulo mod. For example, they are the angles of a continuous list of complex values, but there is an ambiguity modulo 2π. This function adjusts the values so they appear continuous.\n\nFor finer control, use make_continuous!(vals,mod,thresh) where thresh is the maximum allowable difference between consecutive entries in val.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleTools.SimpleToolsSimpleTools.dict_typesSimpleTools.evalSimpleTools.includeSimpleTools.make_continuous!"
},

]}
