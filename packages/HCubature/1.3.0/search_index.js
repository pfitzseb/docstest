var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#HCubature-1",
    "page": "Readme",
    "title": "HCubature",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)The HCubature module is a pure-Julia implementation of multidimensional \"h-adaptive\" integration.  That is, given an n-dimensional integral(Image: n-dimensional integral)then hcubature(f, a, b) computes the integral, adaptively subdividing the integration volume into smaller and smaller pieces until convergence is achieved to the desired tolerance (specified by optional rtol and atol keyword arguments, described in more detail below.Because hcubature is written purely in Julia, the integrand f(x) can return any vector-like object (technically, any type supporting +, -, * real, and norm: a Banach space).  You can integrate real, complex, and matrix-valued integrands, for example."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Assuming you\'ve installed the HCubature package (via Pkg.add) and loaded it with using HCubature, you can then use it by calling the hcubature function:"
},

{
    "location": "#hcubature-1",
    "page": "Readme",
    "title": "hcubature",
    "category": "section",
    "text": "hcubature(f, a, b; norm=norm, rtol=sqrt(eps), atol=0, maxevals=typemax(Int), initdiv=1)This computes the n-dimensional integral of f(x), where n == length(a) == length(b), over the hypercube whose corners are given by the vectors (or tuples) a and b. That is, dimension x[i] is integrated from a[i] to b[i].  The return value of hcubature is a tuple (I, E) of the estimated integral I and an estimated error E.f should be a function f(x) that takes an n-dimensional vector x and returns the integrand at x.   The integrand can be any type that supports +, -, * real, and norm functions.  For example, the integrand can be real or complex numbers, vectors, matrices, etcetera. (For performance, the StaticArrays package is recommended for use with vector/matrix-valued integrands.)The integrand f(x) will be always be passed an SVector{n,T}, where SVector is an efficient vector type defined in the StaticArrays package and T is a floating-point type determined by promoting the endpoint a and b coordinates to a floating-point type. (Your integrand f should be type-stable: it should always return a value of the same type, given this type of x.)The integrand will never be evaluated exactly at the boundaries of the integration volume.  (So, for example, it is possible to have an integrand that blows up at the boundaries, as long as the integral is finite, though such singularities will slow convergence.)The integration volume is adaptively subdivided, using a cubature rule due to Genz and Malik (1980), until the estimated error E satisfies E ≤ max(rtol*norm(I), atol), i.e. rtol and atol are the relative and absolute tolerances requested, respectively. It also stops if the number of f evaluations exceeds maxevals. If neither atol nor rtol are specified, the default rtol is the square root of the precision eps(T) of the coordinate type T described above. Initially, the volume is divided into initdiv segments along each dimension.The error is estimated by norm(I - I′), where I′ is an alternative estimated integral (via an \"embedded\" lower-order cubature rule.) By default, the norm function used (for both this and the convergence test above) is norm, but you can pass an alternative norm by the norm keyword argument.  (This is especially useful when f returns a vector of integrands with different scalings.)"
},

{
    "location": "#hquadrature-1",
    "page": "Readme",
    "title": "hquadrature",
    "category": "section",
    "text": "hquadrature(f, a, b; norm=norm, rtol=sqrt(eps), atol=0, maxevals=typemax(Int), initdiv=1)Compute the (1d) integral of f(x) from a to b.  The return value of hcubature is a tuple (I, E) of the estimated integral I and an estimated error E.The other parameters are the same as hcubature (above).  hquadrature is just a convenience wrapper around hcubature so that you can work with scalar x, a, and b, rather than 1-component vectors.Alternatively, for 1d integrals you can import the QuadGK module and call the quadgk function, which provides additional flexibility e.g. in choosing the order of the quadrature rule.  (QuadGK is used internally anyway by HCubature to compute the quadrature rule.)"
},

{
    "location": "#Algorithm-1",
    "page": "Readme",
    "title": "Algorithm",
    "category": "section",
    "text": "The algorithm of hquadrature is based on the one described in:A. C. Genz and A. A. Malik, \"An adaptive algorithm for numeric integration over an N-dimensional rectangular region,\" J. Comput. Appl. Math., vol. 6 (no. 4), 295-302 (1980)."
},

{
    "location": "#Author-and-Copyright-1",
    "page": "Readme",
    "title": "Author and Copyright",
    "category": "section",
    "text": "HCubature was written by Steven G. Johnson (SGJ), and is free/open-source software under the MIT/expat license.SGJ also wrote an earlier C implementation of a similar algorithm that is also callable from Julia via the Cubature.jl package.  The HCubature package is a from-scratch re-implementation, not a translation, of this code, both to take advantage of unique features of Julia and to eliminate licensing restrictions arising from the use of C code taken from the HIntLib library.   (In both cases, the original DCUHRE Fortran code of Genz was not examined, only the mathematical description in the papers.)"
},

{
    "location": "autodocs/#HCubature.GenzMalik",
    "page": "Docstrings",
    "title": "HCubature.GenzMalik",
    "category": "type",
    "text": "GenzMalik{n,T} holds the points and weights corresponding to an n-dimensional Genz-Malik cubature rule over coordinates of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HCubature.HCubature",
    "page": "Docstrings",
    "title": "HCubature.HCubature",
    "category": "module",
    "text": "The HCubature module is a pure-Julia implementation of multidimensional \"h-adaptive\" integration.  That is, given an n-dimensional integral\n\nint_a_1^b_1int_a_2^b_2cdotsint_a_n^b_n (vecx) d^nvecx\n\nthen hcubature(f, a, b) computes the integral, adaptively subdividing the integration volume into smaller and smaller pieces until convergence is achieved to the desired tolerance (specified by optional rtol and atol keyword arguments, described in more detail below.\n\nBecause hcubature is written purely in Julia, the integrand f(x) can return any vector-like object (technically, any type supporting +, -, * real, and norm: a Banach space).  You can integrate real, complex, and matrix-valued integrands, for example.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HCubature.combos",
    "page": "Docstrings",
    "title": "HCubature.combos",
    "category": "function",
    "text": "combos(k, λ, Val{n}())\n\nReturn an array of SVector{n} of all n-component vectors with k components equal to λ and other components equal to zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HCubature.hcubature",
    "page": "Docstrings",
    "title": "HCubature.hcubature",
    "category": "function",
    "text": "hcubature(f, a, b; norm=norm, rtol=sqrt(eps), atol=0, maxevals=typemax(Int), initdiv=1)\n\nCompute the n-dimensional integral of f(x), where n == length(a) == length(b), over the hypercube whose corners are given by the vectors (or tuples) a and b. That is, dimension x[i] is integrated from a[i] to b[i].  The return value of hcubature is a tuple (I, E) of the estimated integral I and an estimated error E.\n\nf should be a function f(x) that takes an n-dimensional vector x and returns the integrand at x.   The integrand can be any type that supports +, -, * real, and norm functions.  For example, the integrand can be real or complex numbers, vectors, matrices, etcetera.\n\nThe integrand f(x) will be always be passed an SVector{n,T}, where SVector is an efficient vector type defined in the StaticArrays package and T is a floating-point type determined by promoting the endpoint a and b coordinates to a floating-point type. (Your integrand f should be type-stable: it should always return a value of the same type, given this type of x.)\n\nThe integrand will never be evaluated exactly at the boundaries of the integration volume.  (So, for example, it is possible to have an integrand that blows up at the boundaries, as long as the integral is finite, though such singularities will slow convergence.)\n\nThe integration volume is adaptively subdivided, using a cubature rule due to Genz and Malik (1980), until the estimated error E satisfies E ≤ max(rtol*norm(I), atol), i.e. rtol and atol are the relative and absolute tolerances requested, respectively. It also stops if the number of f evaluations exceeds maxevals. If neither atol nor rtol are specified, the default rtol is the square root of the precision eps(T) of the coordinate type T described above. Initially, the volume is divided into initdiv segments along each dimension.\n\nThe error is estimated by norm(I - I′), where I′ is an alternative estimated integral (via an \"embedded\" lower-order cubature rule.) By default, the norm function used (for both this and the convergence test above) is norm, but you can pass an alternative norm by the norm keyword argument.  (This is especially useful when f returns a vector of integrands with different scalings.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HCubature.hquadrature",
    "page": "Docstrings",
    "title": "HCubature.hquadrature",
    "category": "function",
    "text": "hquadrature(f, a, b; norm=norm, rtol=sqrt(eps), atol=0, maxevals=typemax(Int), initdiv=1)\n\nCompute the integral of f(x) from a to b.  The return value of hcubature is a tuple (I, E) of the estimated integral I and an estimated error E.\n\nThe other parameters are the same as hcubature.  hquadratureis just a convenience wrapper aroundhcubatureso that you can work with scalarx,a, andb`, rather than 1-component vectors.\n\nAlternatively, for 1d integrals you can import the QuadGK module and call the quadgk function, which provides additional flexibility e.g. in choosing the order of the quadrature rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HCubature.signcombos",
    "page": "Docstrings",
    "title": "HCubature.signcombos",
    "category": "function",
    "text": "signcombos(k, λ, Val{n}())\n\nReturn an array of SVector{n} of all n-component vectors with k components equal to ±λ and other components equal to zero (with all possible signs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "HCubature.BoxHCubature.GaussKronrodHCubature.GenzMalikHCubature.HCubatureHCubature.TrivialHCubature.combosHCubature.countevalsHCubature.cubruleHCubature.evalHCubature.gk_float64HCubature.gkcacheHCubature.gmcacheHCubature.hcubatureHCubature.hcubature_HCubature.hquadratureHCubature.includeHCubature.signcombos"
},

]}
