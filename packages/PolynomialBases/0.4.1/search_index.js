var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PolynomialBases-1",
    "page": "Readme",
    "title": "PolynomialBases",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)A library of functions for polynomial bases used in spectral element methods using the quadrature rules from  FastGaussQuadrature.jl for Float64 and root finding  via the Newton algorithm for other scalar types (such as BigFloat). The algorithms for interpolation and differentiation use barycentric weights as described in the book \"Implementing Spectral Methods for PDEs\" by David Kopriva. If SymPy.jl/SymEngine.jl is loaded, symbolic computations using SymPy.Sym/SymEngine.Basic are supported.A brief tutorial is given as  notebook."
},

{
    "location": "autodocs/#PolynomialBases.ClenshawCurtis",
    "page": "Docstrings",
    "title": "PolynomialBases.ClenshawCurtis",
    "category": "type",
    "text": "ClenshawCurtis{T}\n\nThe nodal basis corresponding to the Clenshaw Curtis quadrature in [-1,1] with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.ClosedNewtonCotes",
    "page": "Docstrings",
    "title": "PolynomialBases.ClosedNewtonCotes",
    "category": "type",
    "text": "ClosedNewtonCotes{T}\n\nThe nodal basis corresponding to the closed Newton Cotes quadrature in [-1,1] with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.GaussJacobi",
    "page": "Docstrings",
    "title": "PolynomialBases.GaussJacobi",
    "category": "type",
    "text": "GaussJacobi{T<:Real}\n\nThe nodal basis corresponding to Jacobi Gauss quadrature in [-1,1] with parameters α, β and scalar type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.GaussLegendre",
    "page": "Docstrings",
    "title": "PolynomialBases.GaussLegendre",
    "category": "type",
    "text": "GaussLegendre{T}\n\nThe nodal basis corresponding to Legendre Gauss quadrature in [-1,1] with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.LobattoLegendre",
    "page": "Docstrings",
    "title": "PolynomialBases.LobattoLegendre",
    "category": "type",
    "text": "LobattoLegendre{T}\n\nThe nodal basis corresponding to Legendre Gauss Lobatto quadrature in [-1,1] with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.barycentric_weights",
    "page": "Docstrings",
    "title": "PolynomialBases.barycentric_weights",
    "category": "function",
    "text": "barycentric_weights{T<:Real}(x::AbstractVector{T})\n\nCompute the barycentric weights corresponding to the nodes x. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 30].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.change_basis",
    "page": "Docstrings",
    "title": "PolynomialBases.change_basis",
    "category": "function",
    "text": "function change_basis(dest_basis::NodalBasis{Domain},\n                      values, src_basis::NodalBasis{Domain}) where {Domain<:AbstractDomain}\n\nPerform the change of basis for the coefficients values from src_basis to dest_basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.change_basis!",
    "page": "Docstrings",
    "title": "PolynomialBases.change_basis!",
    "category": "function",
    "text": "change_basis!(ret, dest_basis::NodalBasis{Domain},\n              values, src_basis::NodalBasis{Domain}) where {Domain<:AbstractDomain}\n\nPerform the change of basis for the coefficients values from src_basis to dest_basis and store the resulting coefficients in ret.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.compute_coefficients",
    "page": "Docstrings",
    "title": "PolynomialBases.compute_coefficients",
    "category": "function",
    "text": "compute_coefficients(u, basis::NodalBasis{Line})\n\nCompute the nodal values of the function u at the nodes corresponding to the nodal basis basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.compute_coefficients!",
    "page": "Docstrings",
    "title": "PolynomialBases.compute_coefficients!",
    "category": "function",
    "text": "compute_coefficients!(uval::AbstractVector, u, basis::NodalBasis{Line})\n\nCompute the nodal values of the function u at the nodes corresponding to the nodal basis basis and store the result in uval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.degree",
    "page": "Docstrings",
    "title": "PolynomialBases.degree",
    "category": "function",
    "text": "degree(basis::NodalBasis{Line})\n\nReturn the polynomial degree used by basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.derivative_at",
    "page": "Docstrings",
    "title": "PolynomialBases.derivative_at",
    "category": "function",
    "text": "derivative_at(x::Real, values, nodes, baryweights)\n\nCompute the derivative of the function represented by values on the nodes at x using the corresponding barycentric weights baryweights. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 36].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.derivative_matrix",
    "page": "Docstrings",
    "title": "PolynomialBases.derivative_matrix",
    "category": "function",
    "text": "derivative_matrix(nodes, baryweights)\n\nCompute the derivative matrix corresponding to nodes and baryweights. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 37].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.evaluate_coefficients",
    "page": "Docstrings",
    "title": "PolynomialBases.evaluate_coefficients",
    "category": "function",
    "text": "evaluate_coefficients(u, basis::NodalBasis{Line}, npoints=2*length(basis.nodes))\n\nEvaluate the coefficients u of the nodal basis basis at npoints equally spaced nodes. Returns xplot, uplot, where xplot contains the equally spaced nodes and uplot the corresponding values of u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.evaluate_coefficients!",
    "page": "Docstrings",
    "title": "PolynomialBases.evaluate_coefficients!",
    "category": "function",
    "text": "evaluate_coefficients!(xplot, uplot, u, basis::NodalBasis{Line})\n\nEvaluate the coefficients u of the nodal basis basis at npoints equally spaced nodes and store the result in xplot, uplot. Returns xplot, uplot, where xplot contains the equally spaced nodes and uplot the corresponding values of u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.gauss_jacobi_nodes_and_weights",
    "page": "Docstrings",
    "title": "PolynomialBases.gauss_jacobi_nodes_and_weights",
    "category": "function",
    "text": "gauss_jacobi_nodes_and_weights(p, α, β, T=Float64::Type, tol=4*eps(T), maxit=100)\n\nCompute the Gauss-Jacobi nodes and weights for polynomials of degree p with parameters α, β using the scalar type T, tolerance tol and maximal number of Newton iterations maxit [Karniadakis and Sherwin, Spectral/hp Element Methods for CFD, Appendix B].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.gauss_legendre_nodes_and_weights",
    "page": "Docstrings",
    "title": "PolynomialBases.gauss_legendre_nodes_and_weights",
    "category": "function",
    "text": "gauss_legendre_nodes_and_weights(p, T=Float64::Type, tol=4*eps(T), maxit=100)\n\nCompute the Gauss-Legendre nodes and weights for polynomials of degree p using the scalar type T, tolerance tol and maximal number of Newton iterations maxit [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 23].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.gegenbauer",
    "page": "Docstrings",
    "title": "PolynomialBases.gegenbauer",
    "category": "function",
    "text": "gegenbauer(x, p::Integer)\n\nEvaluate the Gegenbauer polynomial with parameter α of degree p at x using the three term recursion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.hahn",
    "page": "Docstrings",
    "title": "PolynomialBases.hahn",
    "category": "function",
    "text": "hahn(x, p::Integer, α, β, N::Integer)\n\nEvaluate the Hahn polynomial with parameters α, β, N of degree p at x using the three term recursion [Öffner, Zweidimensionale klassische und diskrete orthogonale Polynome, Chapter 5].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.hermite",
    "page": "Docstrings",
    "title": "PolynomialBases.hermite",
    "category": "function",
    "text": "hermite(x, p::Integer)\n\nEvaluate the Hermite polynomial of degree p at x using the three term recursion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.integrate",
    "page": "Docstrings",
    "title": "PolynomialBases.integrate",
    "category": "function",
    "text": "integrate(func, u, weights)\n\nMap the function func to the coefficients u and integrate with respect to the quadrature rule given by weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.interpolate",
    "page": "Docstrings",
    "title": "PolynomialBases.interpolate",
    "category": "function",
    "text": "interpolate(x::Real, nodes, values, baryweights)\n\nInterpolate the function represented by values on the nodes using the corresponding barycentric weights baryweights. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 31].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.interpolation_matrix",
    "page": "Docstrings",
    "title": "PolynomialBases.interpolation_matrix",
    "category": "function",
    "text": "interpolation_matrix(destination, source, baryweights)\n\nCompute the matrix performing interpolation from src to dest, where baryweights are the barycentric weights corresponding to src. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 32].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.jacobi",
    "page": "Docstrings",
    "title": "PolynomialBases.jacobi",
    "category": "function",
    "text": "jacobi(x, p::Integer, α, β)\n\nEvaluate the Legendre polynomial with parameters α, β of degree p at x using the three term recursion [Karniadakis and Sherwin, Spectral/hp Element Methods for CFD, Appendix A].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.jacobi_and_derivative",
    "page": "Docstrings",
    "title": "PolynomialBases.jacobi_and_derivative",
    "category": "function",
    "text": "jacobi_and_derivative(x, p::Integer, α, β)\n\nEvaluate the Jacobi polynomial with parameters α, β of degree p and its derivative at x using the three term recursion [Karniadakis and Sherwin, Spectral/hp Element Methods for CFD, Appendix A].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.jacobi_vandermonde",
    "page": "Docstrings",
    "title": "PolynomialBases.jacobi_vandermonde",
    "category": "function",
    "text": "jacobi_vandermonde(nodes, α, β)\n\nComputes the Vandermonde matrix with respect to the Jacobi polynomials with parameters α, β and the nodal basis on nodes. The Vandermonde matrix V is the transformation matrix from the modal Jacobi basis to the nodal Lagrange basis associated with nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.laguerre",
    "page": "Docstrings",
    "title": "PolynomialBases.laguerre",
    "category": "function",
    "text": "laguerre(x, p::Integer)\n\nEvaluate the Laguerre polynomial of degree p at x using the three term recursion.\n\n\n\n\n\nlaguerre(x, p::Integer, α)\n\nEvaluate the generalised Laguerre polynomial with parameter α of degree p at x using the three term recursion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.legendre",
    "page": "Docstrings",
    "title": "PolynomialBases.legendre",
    "category": "function",
    "text": "legendre(x, p::Integer)\n\nEvaluate the Legendre polynomial of degree p at x using the three term recursion [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 20].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.legendre_D",
    "page": "Docstrings",
    "title": "PolynomialBases.legendre_D",
    "category": "function",
    "text": "legendre_D(p, T=Float64)\n\nComputes the derivative matrix in the modal Legendre basis up to degree p using the scalar type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.legendre_M",
    "page": "Docstrings",
    "title": "PolynomialBases.legendre_M",
    "category": "function",
    "text": "legendre_M(p, T=Float64)\n\nComputes the diagonal mass matrix in the modal Legendre basis up to degree p using the scalar type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.legendre_and_derivative",
    "page": "Docstrings",
    "title": "PolynomialBases.legendre_and_derivative",
    "category": "function",
    "text": "legendre_and_derivative(x, p::Integer)\n\nEvaluate the Legendre polynomial of degree p and its derivative at x using the three term recursion [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 22].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.legendre_vandermonde",
    "page": "Docstrings",
    "title": "PolynomialBases.legendre_vandermonde",
    "category": "function",
    "text": "legendre_vandermonde(nodes)\n\nComputes the Vandermonde matrix with respect to the Legendre polynomials and the nodal basis on nodes. The Vandermonde matrix V is the transformation matrix from the modal Legendre basis to the nodal Lagrange basis associated with nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.lobatto_legendre_nodes_and_weights",
    "page": "Docstrings",
    "title": "PolynomialBases.lobatto_legendre_nodes_and_weights",
    "category": "function",
    "text": "lobatto_legendre_nodes_and_weights(p, T=Float64::Type, tol=4*eps(T), maxit=100)\n\nCompute the Lobatto-Legendre nodes and weights for polynomials of degree p using the scalar type T, tolerance tol and maximal number of Newton iterations maxit [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 25].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.map_from_canonical",
    "page": "Docstrings",
    "title": "PolynomialBases.map_from_canonical",
    "category": "function",
    "text": "map_from_canonical(ξ, xmin, xmax, basis::NodalBasis{Line})\n\nMap the given canonical coordinate ξ in the interval [-1, 1] to the corresponding coordinate x in the interval [xmin, xmax].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.map_from_canonical!",
    "page": "Docstrings",
    "title": "PolynomialBases.map_from_canonical!",
    "category": "function",
    "text": "map_from_canonical!(x, ξ, xmin, xmax, basis::NodalBasis{Line})\n\nMap the given canonical coordinate ξ in the interval [-1, 1] to the corresponding coordinate x in the interval [xmin, xmax], updating x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.map_to_canonical",
    "page": "Docstrings",
    "title": "PolynomialBases.map_to_canonical",
    "category": "function",
    "text": "map_to_canonical(x, xmin, xmax, basis::NodalBasis{Line})\n\nMap the given coordinate x in the interval [xmin, xmax] to the corresponding canonical coordinate ξ in the interval [-1, 1].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.map_to_canonical!",
    "page": "Docstrings",
    "title": "PolynomialBases.map_to_canonical!",
    "category": "function",
    "text": "map_to_canonical!(ξ, x, xmin, xmax, basis::NodalBasis{Line})\n\nMap the given coordinate x in the interval [xmin, xmax] to the corresponding canonical coordinate ξ in the interval [-1, 1], updating ξ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.utility_matrices",
    "page": "Docstrings",
    "title": "PolynomialBases.utility_matrices",
    "category": "function",
    "text": "utility_matrices(basis::NodalBasis{Line})\n\nReturn the matrices\n\nD, derivative matrix\nM, mass matrix\nR, restriction matrix (interpolation to the boundaries)\nB, boundary normal matrix\nMinvRtB = M \\ R\' * B\n\nused in the formulation of flux reconstruction / correction procedure via reconstruction using summation-by-parts operators, cf. Ranocha, Öffner, Sonar (2016) Summation-by-parts operators for correction procedure via reconstruction, Journal of Computational Physics 311, 299-328.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PolynomialBases.AbstractBasisPolynomialBases.AbstractDomainPolynomialBases.ClenshawCurtisPolynomialBases.ClosedNewtonCotesPolynomialBases.GaussJacobiPolynomialBases.GaussLegendrePolynomialBases.LinePolynomialBases.LobattoLegendrePolynomialBases.NodalBasisPolynomialBases.PolynomialBasesPolynomialBases.__init__PolynomialBases.barycentric_weightsPolynomialBases.barycentric_weights!PolynomialBases.change_basisPolynomialBases.change_basis!PolynomialBases.compute_coefficientsPolynomialBases.compute_coefficients!PolynomialBases.degreePolynomialBases.derivative_atPolynomialBases.derivative_at!PolynomialBases.derivative_matrixPolynomialBases.derivative_matrix!PolynomialBases.evalPolynomialBases.evaluate_coefficientsPolynomialBases.evaluate_coefficients!PolynomialBases.gauss_jacobi_nodes_and_weightsPolynomialBases.gauss_legendre_nodes_and_weightsPolynomialBases.gegenbauerPolynomialBases.hahnPolynomialBases.hermitePolynomialBases.includePolynomialBases.includes_boundariesPolynomialBases.integratePolynomialBases.interpolatePolynomialBases.interpolate!PolynomialBases.interpolation_matrixPolynomialBases.interpolation_matrix!PolynomialBases.jacobiPolynomialBases.jacobi_and_derivativePolynomialBases.jacobi_vandermondePolynomialBases.laguerrePolynomialBases.legendrePolynomialBases.legendre_DPolynomialBases.legendre_MPolynomialBases.legendre_and_derivativePolynomialBases.legendre_vandermondePolynomialBases.lobatto_legendre_nodes_and_weightsPolynomialBases.map_from_canonicalPolynomialBases.map_from_canonical!PolynomialBases.map_to_canonicalPolynomialBases.map_to_canonical!PolynomialBases.q_and_L_evaluationPolynomialBases.satisfies_sbpPolynomialBases.utility_matrices"
},

]}
