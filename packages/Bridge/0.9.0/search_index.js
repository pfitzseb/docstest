var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Latest) (Image: Latest)(Image: Logo)"
},

{
    "location": "#Bridge.jl-1",
    "page": "Readme",
    "title": "Bridge.jl",
    "category": "section",
    "text": "Stochastic calculus and univariate and multivariate stochastic processes/Markov processes in continuous time. See ./example/tutorial.jl for an introduction. I am personally interested in simulating diffusion bridges and doing Bayesian inference on discretely observed diffusion processes, but this package is written to be of general use and contributions are welcome. [x] Define and simulate diffusion processes in one or more dimension\n[x] Continuous and discrete likelihood using Girsanovs theorem and transition densities\n[x] Monte Carlo sample diffusion bridges, diffusion processes conditioned to hit a point v at a prescribed time T\n[x] Brownian motion in one and more dimensions\n[x] Ornstein-Uhlenbeck processes and Ornstein-Uhlenbeck bridges\n[x] Bessel processes\n[x] Gamma processes\n[x] Inhomogenous poisson process\n[x] Basic stochastic calculus functionality (Ito integral, quadratic variation)\n[x] Euler-Scheme and implicit methods (Runge-Kutta)\n[x] Levy-driven SDEs\n[x] Continuous-discrete filtering for partially observed diffusion processesThe layout/api was originally written to be compatible with Simon Danisch\'s package FixedSizeArrays.jl. It was refactored to be compatible with StaticArrays.jl by Dan Getz. Some SDE and ODE solvers in Bridge are accessible with the JuliaDiffEq common interface via BridgeDiffEq.jl.The example programs in the example/ directory have additional dependencies: ConjugatePriors and a plotting library."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "The key objects introduced are the abstract type ContinuousTimeProcess{T} parametrised by the state space of the path, for example T == Float64 and various structs suptyping it, for example Wiener{Float64} for a real Brownian motion. These play roughly a similar role as types subtyping Distribution in the Distributions.jl package.Secondly, the struct struct SamplePath{T}\n    tt::Vector{Float64}\n    yy::Vector{T}\n    SamplePath{T}(tt, yy) where {T} = new(tt, yy)\nendserves as container for sample path returned by direct and approximate samplers (sample, euler, ...). tt is the vector of the grid points of the simulation and yy the corresponding vector of states.Help is available at the REPL:help?> GammaProcess\nsearch: GammaProcess LocalGammaProcess VarianceGammaProcess<code>GammaProcess</code>\n<p>A <em>GammaProcess</em> with jump rate <code>γ</code> and inverse jump size <code>λ</code> has increments <code>Gamma(t*γ, 1/λ)</code> and Levy measure</p><p>ν(x) = γ x⁻¹ exp(-λ x),</p><p>Here <code>Gamma(α,θ)</code> is the Gamma distribution in julia&#39;s parametrization with shape parameter <code>α</code> and scale <code>θ</code>.</p> <p>&emsp;<b> Examples </b></p><p><code> julia> sample(linspace(0.0, 1.0),  GammaProcess(1.0, 0.5)) </code>Pre-defined processes defined are Wiener, WienerBridge, Gamma, LinPro (linear diffusion/generalized Ornstein-Uhlenbeck) and others.It is also quite transparent how to add a new process:using Bridge\n\n# Define a diffusion process\nstruct OrnsteinUhlenbeck  <: ContinuousTimeProcess{Float64}\n    β::Float64 # drift parameter (also known as inverse relaxation time)\n    σ::Float64 # diffusion parameter\n    function OrnsteinUhlenbeck(β::Float64, σ::Float64)\n        isnan(β) || β > 0. || error(\"Parameter λ must be positive.\")\n        isnan(σ) || σ > 0. || error(\"Parameter σ must be positive.\")\n        new(β, σ)\n    end\nend\n\n# define drift and diffusion coefficient of OrnsteinUhlenbeck\nimport Bridge: b, σ, a, transitionprob\nBridge.b(t,x, P::OrnsteinUhlenbeck) = -P.β*x\nBridge.σ(t, x, P::OrnsteinUhlenbeck) = P.σ\nBridge.a(t, x, P::OrnsteinUhlenbeck) = P.σ^2\n\n# simulate OrnsteinUhlenbeck using Euler scheme\nW = sample(0:0.01:10, Wiener()) \nX = solve(EulerMaruyama(), 0.1, W, OrnsteinUhlenbeck(20.0, 1.0))"
},

{
    "location": "#Feedback-and-Contributing-1",
    "page": "Readme",
    "title": "Feedback and Contributing",
    "category": "section",
    "text": "See the documentation for more functionality and issue #12 (Feedback and Contribution) for coordination of the development. Bridge is free software under the MIT licence. If you use Bridge.jl in a closed environment I’d be happy to hear about your use case in a mail to moritzschauer@web.de and able to give some support."
},

{
    "location": "#Literature-1",
    "page": "Readme",
    "title": "Literature",
    "category": "section",
    "text": "F. v. d. Meulen, M. Schauer: Bayesian estimation of discretely observed multi-dimensional diffusion processes using guided proposals. Electronic Journal of Statistics 11 (1), 2017, doi:10.1214/17-EJS1290.M. Schauer, F. v. d. Meulen, H. v. Zanten: Guided proposals for simulating multi-dimensional diffusion bridges. Bernoulli 23 (4A), 2017, doi:10.3150/16-BEJ833."
},

]}
