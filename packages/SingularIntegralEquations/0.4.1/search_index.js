var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SingularIntegralEquations.jl-1",
    "page": "Readme",
    "title": "SingularIntegralEquations.jl",
    "category": "section",
    "text": "(Image: Build Status)An experimental Julia package for solving singular integral equations."
},

{
    "location": "#Acoustic-Scattering-1",
    "page": "Readme",
    "title": "Acoustic Scattering",
    "category": "section",
    "text": "HelmholtzDirichlet.jl and HelmholtzNeumann.jl calculate the solution to the Helmholtz equation with Dirichlet and Neumann boundary conditions. The essential lines of code are:k = 50 # Set wavenumber and fundamental solution for Helmholtz equation\ng1 = (x,y) -> -besselj0(k*abs(y-x))/2\ng2 = (x,y) -> x == y ? -(log(k/2)+γ)/2/π + im/4 : im/4*hankelh1(0,k*abs(y-x)) - g1(x,y).*logabs(y-x)/π\n\nui = (x,y) -> exp(im*k*(x-y)/sqrt(2))    # Incident plane wave at 45°\n\ndom = ChebyshevInterval()                     # Set the domain\nsp = Space(dom)                      # Canonical space on the domain\n⨍ = DefiniteLineIntegral(dom)        # Line integration functional\nuiΓ = Fun(t->ui(real(t),imag(t)),sp) # Incident wave on Γ\n\n# Instantiate the fundamental solution\nG = GreensFun(g1,CauchyWeight(sp⊗sp,0)) + GreensFun(g2,sp⊗sp)\n\n# Solve for the density\n∂u∂n = ⨍[G]\\uiΓ\n\n# What is the forward error?\nnorm(⨍[G]*∂u∂n-uiΓ)\n\n# Represent the scattered field\nus = (x,y) -> -logkernel(g1,∂u∂n,complex(x,y))-linesum(g2,∂u∂n,complex(x,y))Here is an example with 10 sources at the roots of unity scaled by 2 and scattered by multiple disjoint intervals and circles.(Image: Helmholtz Scattering)GravityHelmholtz.jl calculates the solution to the gravity Helmholtz equation with Dirichlet boundary conditions.(Image: Gravity Helmholtz Scattering)"
},

{
    "location": "#The-Faraday-Cage-1",
    "page": "Readme",
    "title": "The Faraday Cage",
    "category": "section",
    "text": "Laplace.jl calculates the solution to the Laplace equation with the origin shielded by infinitesimal plates centred at the Nth roots of unity. The essential lines of code are:ui = (x,y) -> logabs(complex(x,y)-2)     # Single source at (2,0) of strength 2π\n\nN,r = 10,1e-1\ncr = exp.(im*2π*(0:N-1)/N)\ncrl,crr = (1-2im*r)cr,(1+2im*r)cr\ndom = ∪(Segment.(crl,crr))            # Set the shielding domain\n\nsp = Space(dom)                      # Canonical space on the domain\n⨍ = DefiniteLineIntegral(dom)        # Line integration functional\nuiΓ = Fun(t->ui(real(t),imag(t)),sp) # Action of source on shields\n\n# Instantiate the fundamental solution\nG = GreensFun((x,y)->0.5,CauchyWeight(sp⊗sp,0))\n\n# The first column augments the system for global unknown constant charge φ0\n# The first row ensure constant charge φ0 on all plates\nφ0,∂u∂n=[0 ⨍;1 ⨍[G]]\\[0.;uiΓ]\n\n# Represent the scattered field\nus = (x,y) -> -logkernel(∂u∂n,complex(x,y))/2(Image: Faraday Cage)"
},

{
    "location": "#Riemann–Hilbert-Problems-1",
    "page": "Readme",
    "title": "Riemann–Hilbert Problems",
    "category": "section",
    "text": "SingularIntegralEquations.jl has support for Riemann–Hilbert problems and Wiener–Hopf factorizations.  Wiener-Hopf.jl uses the Winer–Hopf factorization to calculate the UL decomposition of a scalar and a block Toeplitz operator.  The essential lines of code in the matrix case are:G=Fun(z->[-1 -3; -3 -1]/z +\n         [ 2  2;  1 -3] +\n         [ 2 -1;  1  2]*z,Circle())\n\nC  = Cauchy(-1)\nV  = (I+(I-G)*C)\\(G-I)\n\nL  = ToeplitzOperator(inv(I+C*V))\nU  = ToeplitzOperator(I+V+C*V)"
},

{
    "location": "#Nonlocal-Diffusion-1",
    "page": "Readme",
    "title": "Nonlocal Diffusion",
    "category": "section",
    "text": "Construct the nonlocal Laplacian acting on Fourier series by computing the spectrum on-the-fly:α = 2.5 # ∈ [0, d+2), where d is the number of dimensions\n        # α is the strength of the singularity of the algebraic kernel\nδ = 0.1 # the horizon of the nonlocal integral operator\nL = NonlocalLaplacian(Fourier(), α, δ)Afterward, you are free to treat it as any other banded (diagonal) operator."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "R. M. Slevinsky & S. Olver, <a href=\"http://dx.doi.org/10.1016/j.jcp.2016.12.009\">A fast and well-conditioned spectral method for singular integral equations</a>, J. Comp. Phys., 332:290–315, 2017.Y. Li & R. M. Slevinsky. <a href=\"https://arxiv.org/abs/1810.07131\">Fast and accurate algorithms for the computation of spherically symmetric nonlocal diffusion operators on lattices</a>, arXiv:1810.07131, 2018."
},

{
    "location": "autodocs/#SingularIntegralEquations.Directed",
    "page": "Docstrings",
    "title": "SingularIntegralEquations.Directed",
    "category": "type",
    "text": "Directed represents a number that is a limit from either left (s=true) or right (s=false) For functions with branch cuts, it is assumed that the value is on the branch cut, Therefore not requiring tolerances.  This will naturally give the analytic continuation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularIntegralEquations.HypergeometricFunctions",
    "page": "Docstrings",
    "title": "SingularIntegralEquations.HypergeometricFunctions",
    "category": "module",
    "text": "This module calculates (generalized) hypergeometric functions:\n\nmFn(a;b;z) = Σ_{k=0}^∞ (a_1,k) ⋯ (a_m,k) / (b_1,k) ⋯ (b_n,k) zᵏ/k!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularIntegralEquations.JacobiQWeight",
    "page": "Docstrings",
    "title": "SingularIntegralEquations.JacobiQWeight",
    "category": "type",
    "text": "JacobiQWeight weights a basis on ℂ\\𝕀 weighted by (z+1)^α*(z-1)^β. Note the inconsistency of the parameters with JacobiQ. When the domain is [a,b] the weight is inferred by mapping to [-1,1]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularIntegralEquations.HypergeometricFunctions._₂F₁",
    "page": "Docstrings",
    "title": "SingularIntegralEquations.HypergeometricFunctions._₂F₁",
    "category": "function",
    "text": "Compute the Gauss hypergeometric function ₂F₁(a,b;c;z).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularIntegralEquations.HypergeometricFunctions._₃F₂",
    "page": "Docstrings",
    "title": "SingularIntegralEquations.HypergeometricFunctions._₃F₂",
    "category": "function",
    "text": "Compute the generalized hypergeometric function ₃F₂(a₁,a₂,a₃;b₁,b₂;z) with the Maclaurin series.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularIntegralEquations.HypergeometricFunctions.mFn",
    "page": "Docstrings",
    "title": "SingularIntegralEquations.HypergeometricFunctions.mFn",
    "category": "function",
    "text": "Compute the generalized hypergeometric function mFn(a;b;z) with the Maclaurin series.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SingularIntegralEquations.AbstractNonlocalCalculusOperatorSingularIntegralEquations.CauchySingularIntegralEquations.CauchyWeightSingularIntegralEquations.ComplexPlaneSingularIntegralEquations.ConcreteConvolutionSingularIntegralEquations.ConcreteHilbertSingularIntegralEquations.ConcreteNonlocalLaplacianSingularIntegralEquations.ConcretePseudoHilbertSingularIntegralEquations.ConcreteSingularIntegralSingularIntegralEquations.ConvolutionSingularIntegralEquations.DefaultHilbertSingularIntegralEquations.DefaultPseudoHilbertSingularIntegralEquations.DefaultSingularIntegralSingularIntegralEquations.DirectedSingularIntegralEquations.FundamentalSolutionsSingularIntegralEquations.GreensFunSingularIntegralEquations.HilbertSingularIntegralEquations.HilbertWrapperSingularIntegralEquations.HornerFunctionalSingularIntegralEquations.HypergeometricFunctionsSingularIntegralEquations.JacobiQSingularIntegralEquations.JacobiQWeightSingularIntegralEquations.LegendreQSingularIntegralEquations.LogKernelAsymptoticsSingularIntegralEquations.LowRankIntegralOperatorSingularIntegralEquations.NonlocalLaplacianSingularIntegralEquations.OffHilbertSingularIntegralEquations.OffSingularIntegralSingularIntegralEquations.PseudoHilbertSingularIntegralEquations.PseudoHilbertWrapperSingularIntegralEquations.SingularIntegralSingularIntegralEquations.SingularIntegralEquationsSingularIntegralEquations.SingularIntegralWrapperSingularIntegralEquations.StieltjesSingularIntegralEquations.WeightedJacobiQSingularIntegralEquations._₂F₁SingularIntegralEquations._₃F₂SingularIntegralEquations.cauchySingularIntegralEquations.cauchycircleSSingularIntegralEquations.cauchyintegralSingularIntegralEquations.cauchymomentSingularIntegralEquations.cauchyweightSingularIntegralEquations.centroidSingularIntegralEquations.convolutionProductFunSingularIntegralEquations.csingularintegralSingularIntegralEquations.default_OffHilbertSingularIntegralEquations.default_OffSingularIntegralSingularIntegralEquations.diamSingularIntegralEquations.diam2SingularIntegralEquations.disjoint_cauchySingularIntegralEquations.distSingularIntegralEquations.dist2SingularIntegralEquations.divkhornersumSingularIntegralEquations.drummondSingularIntegralEquations.evalSingularIntegralEquations.exterior_cauchySingularIntegralEquations.extrema2SingularIntegralEquations.forwardsubstitutionSingularIntegralEquations.forwardsubstitution!SingularIntegralEquations.fourier_lambdaSingularIntegralEquations.fourier_lambda_largeSingularIntegralEquations.fourier_lambda_smallSingularIntegralEquations.gradientSingularIntegralEquations.greensfun_checkdomainsSingularIntegralEquations.greensfun_checkgreensfunSingularIntegralEquations.haswrapperstructureSingularIntegralEquations.hilbertSingularIntegralEquations.hilbertforwardSingularIntegralEquations.hilbertmomentSingularIntegralEquations.hornersumSingularIntegralEquations.hornervectorSingularIntegralEquations.includeSingularIntegralEquations.integratejinSingularIntegralEquations.interior_cauchySingularIntegralEquations.iprocess!SingularIntegralEquations.iskewtransform!SingularIntegralEquations.istieltjesSingularIntegralEquations.jacobiQweightSingularIntegralEquations.joukowskyinverseSingularIntegralEquations.joukowskyinverseabsSingularIntegralEquations.joukowskyinverserealSingularIntegralEquations.kernelsSingularIntegralEquations.lhelm_riemannSingularIntegralEquations.lhelmfsSingularIntegralEquations.linesumstieltjesintegralSingularIntegralEquations.logabsSingularIntegralEquations.logabsjacobimomentSingularIntegralEquations.logabslegendremomentSingularIntegralEquations.logjacobimomentSingularIntegralEquations.logkernelSingularIntegralEquations.lommelS2SingularIntegralEquations.mFnSingularIntegralEquations.maxspace_ruleSingularIntegralEquations.multifSingularIntegralEquations.normalderivativeSingularIntegralEquations.normalizationSingularIntegralEquations.orientationSingularIntegralEquations.orientationsignSingularIntegralEquations.process!SingularIntegralEquations.pseudocauchySingularIntegralEquations.pseudohilbertSingularIntegralEquations.pseudostieltjesSingularIntegralEquations.realdivkhornersumSingularIntegralEquations.realintegratejinSingularIntegralEquations.singularintegralSingularIntegralEquations.skewProductFunSingularIntegralEquations.skewpointsSingularIntegralEquations.skewtransform!SingularIntegralEquations.slicesSingularIntegralEquations.sqrtabsSingularIntegralEquations.sqrtx2SingularIntegralEquations.sqrtx2absSingularIntegralEquations.sqrtx2realSingularIntegralEquations.stieltjesSingularIntegralEquations.stieltjesbackwardSingularIntegralEquations.stieltjesbackward!SingularIntegralEquations.stieltjesforwardSingularIntegralEquations.stieltjesforward!SingularIntegralEquations.stieltjesintegralSingularIntegralEquations.stieltjesintervalrecurrenceSingularIntegralEquations.stieltjesjacobimomentSingularIntegralEquations.stieltjeslegendremomentSingularIntegralEquations.stieltjesmomentSingularIntegralEquations.stieltjesmoment!SingularIntegralEquations.superscriptsSingularIntegralEquations.testsieevalSingularIntegralEquations.testsieoperatorsSingularIntegralEquations.testsiesSingularIntegralEquations.transformtimesSingularIntegralEquations.undirectedSingularIntegralEquations.union_ruleSingularIntegralEquations.x̄sqrtx2realSingularIntegralEquations.⁺SingularIntegralEquations.⁻SingularIntegralEquations.ℂSingularIntegralEquations.∇n"
},

]}
