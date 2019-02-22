var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TropicalSemiring-1",
    "page": "Readme",
    "title": "TropicalSemiring",
    "category": "section",
    "text": "(Image: Build Status) ![Codecov branch][codecov-img]This small package defines the tropical semi-ring with either the max or min convention. With the max convention this is the semi-ring (ℝ ∪ {-∞}, ⊕, ⊙) where ⊕ is the usual multiplication and ⊙ is the usual maximum. With the min convention this is the semi-ring (ℝ ∪ {∞}, ⊕, ⊙) where ⊕ is the usual multiplication and ⊙ is the usual minimum. This corresponding Julia type isTrop{MM<:Union{Min, Max}, T<:Real} <: NumberFor the tropical addition and multiplication the usual + and * are overloaded.julia> Trop{Max}(2) + Trop{Max}(3) == Trop{Max}(3)\ntrue\njulia> Trop{Min}(2) + Trop{Min}(3) == Trop{Min}(2)\ntrue\njulia> Trop{Min}(2) * Trop{Min}(3) == Trop{Min}(5)\ntrue\njulia> Trop{Max}(2) * Trop{Max}(3) == Trop{Max}(5)\ntrueNote that by default we use the max convention, i.e.,julia> Trop(2) + Trop(3)\n3You can construct ±∞ by using the inf methodjulia> inf(Max) isa Trop{Max}\ntrue\njulia> Trop{Max}(2) + inf(Max)\n-∞\njulia> inf(Min) isa Trop{Min}\ntrue\njulia> Trop{Min}(2) + inf(Min)\n∞\n# By default we have again the max convention\njulia> inf() isa Trop{Max}\ntrue[codecov-img]: http://codecov.io/github/saschatimme/TropicalSemiring.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/saschatimme/TropicalSemiring.jl?branch=master"
},

{
    "location": "autodocs/#TropicalSemiring.Max",
    "page": "Docstrings",
    "title": "TropicalSemiring.Max",
    "category": "type",
    "text": "Max\n\nIndicating that we are in the tropical semiring (ℝ  -  ) with the max convention.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TropicalSemiring.Min",
    "page": "Docstrings",
    "title": "TropicalSemiring.Min",
    "category": "type",
    "text": "Min\n\nIndicating that we are in the tropical semiring (ℝ    ) with the min convention.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TropicalSemiring.Trop",
    "page": "Docstrings",
    "title": "TropicalSemiring.Trop",
    "category": "type",
    "text": "Trop{MM<:MinMax, T<:Real}\n\nA Trop number is an element of a the tropical semi-ring. These come in two flavours Max and Min. In the Max case this is the semi-ring (ℝ  -  ) where  is the usual multiplication and  is the usual maximum. In the Min case this is the semi-ring (ℝ    ) where  is the usual multiplication and  is the usual minimum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TropicalSemiring.inf",
    "page": "Docstrings",
    "title": "TropicalSemiring.inf",
    "category": "function",
    "text": "inf(M::Type{<:Union{Min, Max}} = Max)\n\nConstructs - in the case of Max and  in the case of Min.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TropicalSemiring.MaxTropicalSemiring.MinTropicalSemiring.MinMaxTropicalSemiring.TropTropicalSemiring.TropicalSemiringTropicalSemiring.evalTropicalSemiring.includeTropicalSemiring.inf"
},

]}
