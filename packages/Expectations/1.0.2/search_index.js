var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Travis status) (Image: codecov) (Image: Coverage Status)(Image: )"
},

{
    "location": "#Expectations-1",
    "page": "Readme",
    "title": "Expectations",
    "category": "section",
    "text": "Installation (v0.7 and up):pkg> add ExpectationsThis is a package designed to simplify the process of taking expectations of functions of random variables. The package is backward-compatible with v0.6.  "
},

{
    "location": "#Random-Variables-1",
    "page": "Readme",
    "title": "Random Variables",
    "category": "section",
    "text": "The underlying distributions are objects from Distributions.jl (currently <:UnivariateDistribution)."
},

{
    "location": "#Quadrature-Algorithms-1",
    "page": "Readme",
    "title": "Quadrature Algorithms",
    "category": "section",
    "text": "We support different types of Gaussian quadrature (Gauss-Hermite, Gauss-Legendre, Gauss-Laguerre, etc.) based on the distribution, as well as some methods with user-defined nodes (e.g., trapezoidal integration)."
},

{
    "location": "#Expectation-Operator-1",
    "page": "Readme",
    "title": "Expectation Operator",
    "category": "section",
    "text": "The key object is the expectation operator, E, which can be used as follows:dist = Normal()\nE = expectation(dist)\nE(x -> x)For convenience,expectation(x->x^2, dist)As a linear operator on vectors using the nodes of the distribution dist = Normal()\nE = expectation(dist)\nx = nodes(E)\nf(x) = x^2\nE * f.(x) == dot(f.(x), weights(E))If nodes are given, it will calculate using Newton-Coates quadrature (e.g. Trapezoidal)x = -10:0.2:10\nf(x) = x^2\nE = expectation(dist, x)\n3 * E(f) == 3 * E * f.(x)"
},

{
    "location": "autodocs/#Expectations.Expectation",
    "page": "Docstrings",
    "title": "Expectations.Expectation",
    "category": "type",
    "text": "Abstract type for all expectations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.ExplicitQuadratureAlgorithm",
    "page": "Docstrings",
    "title": "Expectations.ExplicitQuadratureAlgorithm",
    "category": "type",
    "text": "Abstract type for quadrature algorithms with user-defined nodes (e.g., trapezoidal integration).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.FiniteDiscrete",
    "page": "Docstrings",
    "title": "Expectations.FiniteDiscrete",
    "category": "type",
    "text": "A dot product of a (finite) PDF vector and a finite set of transformed nodes. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.Gaussian",
    "page": "Docstrings",
    "title": "Expectations.Gaussian",
    "category": "type",
    "text": "Gaussian quadrature. See specific methods for what precise algorithm is used (e.g., Gauss-Legendre, Gauss-Hermite, etc.) \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.IterableExpectation",
    "page": "Docstrings",
    "title": "Expectations.IterableExpectation",
    "category": "type",
    "text": "Expectations which are paramterized by a vector of nodes (e.g., a discretized support) and corresponding quadrature weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.QuadratureAlgorithm",
    "page": "Docstrings",
    "title": "Expectations.QuadratureAlgorithm",
    "category": "type",
    "text": "Abstract type for quadrature algorithms without user-defined nodes (e.g., Gaussian quadrature.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.QuantileRange",
    "page": "Docstrings",
    "title": "Expectations.QuantileRange",
    "category": "type",
    "text": "A custom quadrature scheme written by Spencer Lyon as part of the QuantEcon.jl library. Used with permission. \n\nFor detailed information, see: https://github.com/QuantEcon/QuantEcon.jl/blob/be0a32ec17d1f5b04ed8f2e52604c70c69f416b2/src/quad.jl#L918. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.Trapezoidal",
    "page": "Docstrings",
    "title": "Expectations.Trapezoidal",
    "category": "type",
    "text": "Trapezoidal integration.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations._expectation",
    "page": "Docstrings",
    "title": "Expectations._expectation",
    "category": "function",
    "text": "function _expectation(dist::DiscreteUnivariateDistribution, alg::Type{FiniteDiscrete}; kwargs...)\n\nAuxiliary constructor for an IterableExpectation object. \n\n\n\n\n\nfunction _expectation(dist::ContinuousUnivariateDistribution, alg::Type{Gaussian}; n = 500, kwargs...)\n\nImplements Gauss-Legendre quadrature for continuous univariate distributions for which no specialized method exists. \n\n\n\n\n\nfunction _expectation(dist::ContinuousUnivariateDistribution, alg::Type{QuantileRange}; n::Int = 50, q0::Real = 0.001, qN::Real = 0.999 kwargs...)\n\nImplementation of the qnwdist() quadrature scheme written by Spencer Lyon (PhD. NYU), as part of the QuantEcon.jl library. Used with permission. For further details, see: https://github.com/QuantEcon/QuantEcon.jl/blob/be0a32ec17d1f5b04ed8f2e52604c70c69f416b2/src/quad.jl#L892.\n\n\n\n\n\nfunction _expectation(dist::Normal, alg::Type{Gaussian}; n = 30, kwargs...)\n\nImplements Gauss-Hermite quadrature for normal distributions. \n\n\n\n\n\nfunction _expectation(dist::LogNormal, alg::Type{Gaussian}; n = 30, kwargs...)\n\nImplements Gauss-Hermite quadrature for lognormal distributions. \n\n\n\n\n\nfunction _expectation(dist::Beta, alg::Type{Gaussian}; n = 32, kwargs...)\n\nImplements Gauss-Jacobi quadrature for beta distributions. \n\n\n\n\n\nfunction _expectation(dist::Exponential, alg::Type{Gaussian}; n = 32, kwargs...)\n\nImplements Gauss-Laguerre quadrature for Exponential distributions. \n\n\n\n\n\nfunction _expectation(dist::Gamma, alg::Type{Gaussian}; n = 32, kwargs...)\n\nImplements Gauss-Laguerre quadrature for Gamma distributions. \n\n\n\n\n\nfunction _expectation(dist, nodes::AbstractArray, alg::Type{Trapezoidal}; kwargs...)\n\nImplements trapezoidal integration for general distributions with user-defined nodes. \n\n\n\n\n\n@compat function _expectation(dist, nodes::AbstractRange, alg::Type{Trapezoidal}; kwargs...)\n\nOverloads trapezoidal integration for cases where the user-defined grids are regular. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.expectation",
    "page": "Docstrings",
    "title": "Expectations.expectation",
    "category": "function",
    "text": "expectation(dist::DiscreteUnivariateDistribution, alg::Type{FiniteDiscrete} = FiniteDiscrete; kwargs...) = _expectation(dist, alg; kwargs...)\n\nDispatcher for (finite) discrete univariate expectations. \n\n\n\n\n\nexpectation(dist::ContinuousUnivariateDistribution, alg::Type{<:QuadratureAlgorithm} = Gaussian; kwargs...) = _expectation(dist, alg; kwargs...)\n\nDispatcher for continuous univariate expectations. \n\n\n\n\n\nexpectation(dist::ContinuousUnivariateDistribution, nodes, alg::Type{<:ExplicitQuadratureAlgorithm} = Trapezoidal; kwargs...)  = _expectation(dist, nodes, alg; kwargs...)\n\nDispatcher for distributions with user-defined nodes. \n\n\n\n\n\nexpectation(f::Function, dist::DiscreteUnivariateDistribution, alg::Type{FiniteDiscrete} = FiniteDiscrete; kwargs...) = expectation(dist, alg; kwargs...)(f)\n\nConvenience function for (finite) discrete univariate distributions. \n\n\n\n\n\nexpectation(f::Function, dist::ContinuousUnivariateDistribution, alg::Type{<:QuadratureAlgorithm} = Gaussian; kwargs...) = expectation(dist, alg; kwargs...)(f)\n\nConvenience function for continuous univariate distributions. \n\n\n\n\n\nexpectation(f::Function, dist::ContinuousUnivariateDistribution, nodes::AbstractArray, alg::Type{<:ExplicitQuadratureAlgorithm} = Trapezoidal; kwargs...) = expectation(dist, nodes, alg; kwargs...)(f)\n\nConvenience function for continuous univariate distributions with user-supplied nodes. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.nodes",
    "page": "Docstrings",
    "title": "Expectations.nodes",
    "category": "function",
    "text": "nodes(e::IterableExpectation)\n\nReturns the nodes of an IterableExpectation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expectations.weights",
    "page": "Docstrings",
    "title": "Expectations.weights",
    "category": "function",
    "text": "weights(e::IterableExpectation)\n\nReturns the weights of an IterableExpectation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Expectations.ExpectationExpectations.ExpectationsExpectations.ExplicitQuadratureAlgorithmExpectations.FiniteDiscreteExpectations.GaussianExpectations.IterableExpectationExpectations.QuadratureAlgorithmExpectations.QuantileRangeExpectations.TrapezoidalExpectations._expectationExpectations.evalExpectations.expectationExpectations.includeExpectations.nodesExpectations.weights"
},

]}
