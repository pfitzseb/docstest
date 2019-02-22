var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleTropical-1",
    "page": "Readme",
    "title": "SimpleTropical",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)This is an implementation of tropical (min-plus) arithmetic in Julia."
},

{
    "location": "#Numbers-1",
    "page": "Readme",
    "title": "Numbers",
    "category": "section",
    "text": "The tropical numbers consist of the real numbers and infinity. The SimpleTropical module defines the Tropical type (which is a subtype of Number). Tropical numbers can be parameterized by type, but this is taken care of automatically:julia> using SimpleTropical\n\njulia> x = Tropical(3.5)\nTropical{Float64}(3.5)\n\njulia> y = Tropical{Int}(4)\nTropical{Int64}(4)Tropical infinity is available via TropicalInf:julia> TropicalInf\nTropical(∞)"
},

{
    "location": "#Arithmetic-1",
    "page": "Readme",
    "title": "Arithmetic",
    "category": "section",
    "text": "The + operation is defined as the min of the two values and * as the sum:julia> x+y\nTropical{Float64}(3.5)\n\njulia> x*y\nTropical{Float64}(7.5)The identity element for + is TropicalInf and the identity element for * is Tropical(0):julia> x + TropicalInf\nTropical{Float64}(3.5)\n\njulia> x * Tropical(0)\nTropical{Float64}(3.5)No elements in tropical arithmetic have additive inverses, but they do have multiplicative inverses (except for infinity):julia> inv(x)\nTropical{Float64}(-3.5)\n\njulia> inv(TropicalInf)\nERROR: AssertionError: TropicalInf is not invertibleExponentiation by integers works:julia> x^10\nTropical{Float64}(35.0)\n\njulia> x^-2\nTropical{Float64}(-7.0)"
},

{
    "location": "#Predicates-1",
    "page": "Readme",
    "title": "Predicates",
    "category": "section",
    "text": "Use isinf(X) to test if a tropical number is infinity.julia> isinf(x)\nfalse\n\njulia> isinf(TropicalInf)\ntrueThe usual comparison operators == and !== work as expected:julia> Tropical(3.0) == Tropical(3)\ntrue\n\njulia> Tropical(3.1) != Tropical(3//1)\ntrue"
},

{
    "location": "#To-do-list-1",
    "page": "Readme",
    "title": "To do list",
    "category": "section",
    "text": "Make the Polynomials module work with tropical numbers."
},

{
    "location": "autodocs/#SimpleTropical.TropicalInf",
    "page": "Docstrings",
    "title": "SimpleTropical.TropicalInf",
    "category": "constant",
    "text": "TropicalInf is a constant that represents infinity in the tropical semiring.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleTropical.SimpleTropicalSimpleTropical.TropicalSimpleTropical.TropicalInfSimpleTropical.evalSimpleTropical.include"
},

]}
