var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ProximalOperators.jl-1",
    "page": "Readme",
    "title": "ProximalOperators.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov) (Image: Gitter)(Image: ) (Image: )Proximal operators for nonsmooth optimization in Julia. This package can be used to easily implement proximal algorithms for convex and nonconvex optimization problems such as ADMM, the alternating direction method of multipliers.See the documentation on how to use the package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, hit ] from the Julia command line to enter the package manager, thenpkg> add ProximalOperators"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "With using ProximalOperators the package exports the prox and prox! methods to evaluate the proximal mapping of several functions.A list of available function constructors is in the documentation.For example, you can create the L1-norm as follows.julia> f = NormL1(3.5)\ndescription : weighted L1 norm\ntype        : Array{Complex} → Real\nexpression  : x ↦ λ||x||_1\nparameters  : λ = 3.5Functions created this way are, of course, callable.julia> x = randn(10) # some random point\njulia> f(x)\n32.40700818735099prox evaluates the proximal operator associated with a function, given a point and (optionally) a positive stepsize parameter, returning the proximal point y and the value of the function at y:julia> y, fy = prox(f, x, 0.5) # last argument is 1.0 if absentprox! evaluates the proximal operator in place, and only returns the function value at the proximal point:julia> fy = prox!(y, f, x, 0.5) # in-place equivalent to y, fy = prox(f, x, 0.5)"
},

{
    "location": "#Related-packages-1",
    "page": "Readme",
    "title": "Related packages",
    "category": "section",
    "text": "FirstOrderSolvers.jl\nProximalAlgorithms.jl\nStructuredOptimization.jl"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "N. Parikh and S. Boyd (2014), Proximal Algorithms,Foundations and Trends in Optimization, vol. 1, no. 3, pp. 127-239.S. Boyd, N. Parikh, E. Chu, B. Peleato and J. Eckstein (2011), Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, Foundations and Trends in Machine Learning, vol. 3, no. 1, pp. 1-122."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "ProximalOperators.jl is developed by Lorenzo Stella and Niccolò Antonello at KU Leuven, ESAT/Stadius, and Mattias Fält at Lunds Universitet, Department of Automatic Control."
},

]}
