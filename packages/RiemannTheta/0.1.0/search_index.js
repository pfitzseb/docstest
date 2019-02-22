var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RiemannTheta.jl-1",
    "page": "Readme",
    "title": "RiemannTheta.jl",
    "category": "section",
    "text": "Julia versions master build Coverage\n(Image: RiemannTheta) (Image: RiemannTheta) (Image: Build Status) (Image: Build status) (Image: Coverage Status)Julia implementation of the Riemann Theta function. This package is mostly a port from Python of the same function in the Sage library Abelfunction (https://github.com/abelfunctions/abelfunctions). Beyond a given problem size (number of z in zs, dimension of z\'s, number of integration  points), the functions switch to a different algorithm using matrix operations resulting in very competitive timings (at the cost of memory usage).The Sage library is itself an implementation of :[CRTF] B. Deconinck, M.  Heil, A. Bobenko, M. van Hoeij and M. Schmies, Computing Riemann Theta Functions, Mathematics of Computation, 73, (2004), 1417-1442.Exported function are :     riemanntheta(zs::Vector{Vector{Complex128}},\n                  Ω::Matrix{Complex128};\n                  eps::Float64=1e-8,\n                  derivs::Vector{Vector{Complex128}}=Vector{Complex128}[],\n                  accuracy_radius::Float64=5.)::Vector{Complex128}Return the value of the Riemann theta function for Ω and all z in zs if derivs is empty, or the derivatives at all z in zs for the given directional derivatives in derivs.Parameters :zs : A vector of complex vectors at which to evaluate the Riemann theta function.\nOmega : A Riemann matrix.\neps : (Default: 1e-8) The desired numerical accuracy.\nderivs : A vector of complex vectors giving a directional derivative.\naccuracy_radius : (Default: 5.) The radius from the g-dimensional originwhere the requested accuracy of the Riemann theta is guaranteed when computing derivatives. Not used if no derivatives of theta are requested.     oscillatory_part(zs::Vector{Vector{Complex128}},\n                      Ω::Matrix{Complex128};\n                      eps::Float64=1e-8,\n                      derivs::Vector{Vector{Complex128}}=Vector{Complex128}[],\n                      accuracy_radius::Float64=5.)::Vector{Complex128}Return the value of the oscillatory part of the Riemann theta function for Ω and all z in zs if derivs is empty, or the derivatives at all z in zs for the given directional derivatives in derivs.Parameters :zs : A vector of complex vectors at which to evaluate the Riemann theta function.\nOmega : A Riemann matrix.\neps : (Default: 1e-8) The desired numerical accuracy.\nderivs : A vector of complex vectors giving a directional derivative.\naccuracy_radius : (Default: 5.) The radius from the g-dimensional originwhere the requested accuracy of the Riemann theta is guaranteed when computing derivatives. Not used if no derivatives of theta are requested.And :     exponential_part(zs::Vector{Vector{Complex128}},\n                      Ω::Matrix{Complex128})::Vector{Float64}Return the value of the exponential part of the Riemann theta function for Ω and all z in zs.Parameters :zs : A vector of complex vectors at which to evaluate the Riemann theta function.\nOmega : A Riemann matrix."
},

{
    "location": "autodocs/#RiemannTheta.deriv_prod",
    "page": "Docstrings",
    "title": "RiemannTheta.deriv_prod",
    "category": "function",
    "text": "  deriv_prod(n::Vector{Float64},\n             intshift::Vector{Float64},\n             derivs::Vector{Vector{ComplexF64}})::ComplexF64\n\nCompute the real and imaginary parts of the product          ___          | |    2π * I <d, n-intshift>    | |            d in derivs for a given n in ZZ^g.\n\nParameters\n\nn : An integer vector in the finite sum ellipsoid.\nintshift : The integer part of Yinv*y.\nderivreal, derivimag : The real and imaginary parts of the derivative directional vectors.\n\nReturns\n\nThe complex \"derivative product\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RiemannTheta.exponential_part",
    "page": "Docstrings",
    "title": "RiemannTheta.exponential_part",
    "category": "function",
    "text": "     exponential_part(zs::Vector{Vector{ComplexF64}},\n                      Ω::Matrix{ComplexF64})::Vector{Float64}\n\nReturn the value of the exponential part of the Riemann theta function for Ω and all z in zs.\n\nParameters\n\nzs : A vector of complex vectors at which to evaluate the Riemann theta function.\nOmega : A Riemann matrix.\n\nReturns\n\nThe value of the exponential part of the Riemann theta function at each point appearing in zs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RiemannTheta.finite_sum",
    "page": "Docstrings",
    "title": "RiemannTheta.finite_sum",
    "category": "function",
    "text": "function finite_sum(X::Matrix{Float64},\n                    Yinv::Matrix{Float64},\n                    T::Matrix{Float64},\n                    z::Vector{Vector{ComplexF64}},\n                    S::Vector{Vector{Float64}},\n                    derivs::Vector{Vector{ComplexF64}})\n\nComputes the real and imaginary parts of the finite sum with derivatives.\n\nParameters\n\nX, Yinv, T : Row-major matrices such that the Riemann matrix, Omega is equal to (X +   iY). T is the Cholesky decomposition of Y. z : Input vectors. S : The set of points in ZZ^g over which to compute the finite sum derivs : the derivative directional vectors.\n\nReturns\n\nThe finite sums for each z.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RiemannTheta.lll",
    "page": "Docstrings",
    "title": "RiemannTheta.lll",
    "category": "function",
    "text": "lll(b₀::AbstractMatrix{Float64})::AbstractMatrix{Float64}\n\nPerforms Lenstra-Lenstra-Lovasv reduction on the n vectors in b₀.\n\nParameters\n\nb₀ : vector of n vectors of n Float64\n\nReturns\n\nThe LLL reduction of the vectors in b₀\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RiemannTheta.oscillatory_part",
    "page": "Docstrings",
    "title": "RiemannTheta.oscillatory_part",
    "category": "function",
    "text": "     oscillatory_part(zs::Vector{Vector{ComplexF64}},\n                      Ω::Matrix{ComplexF64};\n                      eps::Float64=1e-8,\n                      derivs::Vector{Vector{ComplexF64}}=Vector{ComplexF64}[],\n                      accuracy_radius::Float64=5.)::Vector{ComplexF64}\n\nReturn the value of the oscillatory part of the Riemann theta function for Ω and all z in zs if derivs is empty, or the derivatives at all z in zs for the given directional derivatives in derivs.\n\nParameters\n\nzs : A vector of complex vectors at which to evaluate the Riemann theta function.\nOmega : A Riemann matrix.\neps : (Default: 1e-8) The desired numerical accuracy.\nderivs : A vector of complex vectors giving a directional derivative.\naccuracy_radius : (Default: 5.) The radius from the g-dimensional origin\n\nwhere the requested accuracy of the Riemann theta is guaranteed when computing derivatives. Not used if no derivatives of theta are requested.\n\nReturns\n\nThe value of the oscillatory part of the Riemann theta function at each point appearing in z.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RiemannTheta.radius",
    "page": "Docstrings",
    "title": "RiemannTheta.radius",
    "category": "function",
    "text": "radius(ϵ::Float64,\n       T::Matrix{Float64},\n       derivs::Vector{Vector{Float64}} = Vector{Float64}[],\n       accuracy_radius::Float64 = 5.)\n\nReturns the primary radius of the bounding ellipsoid for computing the Riemann theta function up to accuracy ϵ.\n\nThe derivative oscillatory part of the Riemann theta function has linear growth in :math:z along the directions of the columns of the Riemann matrix. accuracy_radius is used to determine a radius resulting in an accurate Riemann theta for all\n\n.. math ::\n\n||z|| < 	ext{accuracy_radius}.\n\nParameters\n\nϵ : Requested accuracy.\nT : A gxg matrix representing the Cholesky decomposition of the imaginary   part of a Riemann matrix.\nderivs : (Default: []) A list of directional derivatives. The number of   directional derivatives is the order, N, of the derivative we wish to   compute.\naccuracy_radius : (Default: 5) Radius for guaranteed region of accuracy. See above.\n\nReturns\n\nradius : The initial radius of the bounding ellipsoid used to truncate the   Riemann theta function to desired accuracy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RiemannTheta.radius0",
    "page": "Docstrings",
    "title": "RiemannTheta.radius0",
    "category": "function",
    "text": "radius0(eps::Float64, r::Float64, g::Int)::Float64\n\nCompute the radius with no derivatives.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RiemannTheta.radiusN",
    "page": "Docstrings",
    "title": "RiemannTheta.radiusN",
    "category": "function",
    "text": "radiusN(eps, r, T, derivs, accuracy_radius=5)::Float64\n\nCompute the radius with N derivatives.\n\nParameters\n\neps : Requested accuracy.\nr : The length of the shortest lattice vector in the LLL reduction of the   Cholesky decomposition of the imaginary part of the Riemann matrix.\nT : A gxg matrix representing the Cholesky decomposition of the imaginary   part of a Riemann matrix.\nderivs : A list of directional derivatives. The number of directional   derivatives is the order, N, of the derivative we wish to compute.\naccuracy_radius : Radius for guaranteed region of accuracy. See :func:radius.\n\nReturns\n\nradius : The initial radius of the bounding ellipsoid used to truncate the   Riemann theta function to desired accuracy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RiemannTheta.riemanntheta",
    "page": "Docstrings",
    "title": "RiemannTheta.riemanntheta",
    "category": "function",
    "text": " riemanntheta(zs::Vector{Vector{ComplexF64}},\n\n                  Ω::Matrix{ComplexF64};                   eps::Float64=1e-8,                   derivs::Vector{Vector{ComplexF64}}=Vector{ComplexF64}[],                   accuracy_radius::Float64=5.)::Vector{ComplexF64}\n\nReturn the value of the Riemann theta function for Ω and all z in zs if derivs is empty, or the derivatives at all z in zs for the given directional derivatives in derivs.\n\nParameters\n\nzs : A vector of complex vectors at which to evaluate the Riemann theta function.\nOmega : A Riemann matrix.\neps : (Default: 1e-8) The desired numerical accuracy.\nderivs : A vector of complex vectors giving a directional derivative.\naccuracy_radius : (Default: 5.) The radius from the g-dimensional origin\n\nwhere the requested accuracy of the Riemann theta is guaranteed when computing derivatives. Not used if no derivatives of theta are requested.\n\nReturns\n\nThe value (or derivative) of the Riemann theta function at each point in zs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RiemannTheta.RiemannThetaRiemannTheta.deriv_prodRiemannTheta.evalRiemannTheta.exponential_partRiemannTheta.exppartRiemannTheta.finite_sumRiemannTheta.finite_sum_largeRiemannTheta.finite_sum_smallRiemannTheta.includeRiemannTheta.innerpointsRiemannTheta.lllRiemannTheta.normpartRiemannTheta.oscillatory_partRiemannTheta.paddingRiemannTheta.radiusRiemannTheta.radius0RiemannTheta.radiusNRiemannTheta.riemanntheta"
},

]}
