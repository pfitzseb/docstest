var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StochasticDiffEq.jl-1",
    "page": "Readme",
    "title": "StochasticDiffEq.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov) (Image: StochasticDiffEq)StochasticDiffEq.jl is a component package in the DifferentialEquations ecosystem. It holds the stochastic differential equations solvers and utilities. While completely independent and usable on its own, users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "StochasticDiffEq.jl is part of the JuliaDiffEq common interface, but can be used independently of DifferentialEquations.jl. The only requirement is that the user passes an StochasticDiffEq.jl algorithm to solve. For example, we can solve the ODE tutorial from the docs using the SRIW1() algorithm:using StochasticDiffEq\nα=1\nβ=1\nu₀=1/2\nf(u,p,t) = α*u\ng(u,p,t) = β*u\ndt = 1//2^(4)\ntspan = (0.0,1.0)\nprob = SDEProblem(f,g,u₀,(0.0,1.0))\nsol =solve(prob,SRIW1())The options for solve are defined in the common solver options page and are thoroughly explained in the ODE tutorial.That example uses the out-of-place syntax f(u,p,t), while the inplace syntax (more efficient for systems of equations) is shown in the Lorenz example:function lorenz(du,u,p,t)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nend\n\nfunction σ_lorenz(du,u,p,t)\n du[1] = 3.0\n du[2] = 3.0\n du[3] = 3.0\nend\n\nprob_sde_lorenz = SDEProblem(lorenz,σ_lorenz,[1.0,0.0,0.0],(0.0,10.0))\nsol = solve(prob_sde_lorenz)\nplot(sol,vars=(1,2,3))The problems default to diagonal noise. Non-diagonal noise can be added by setting the noise_prototype:f = (du,u,p,t) -> du.=1.01u\ng = function (du,u,p,t)\n  du[1,1] = 0.3u[1]\n  du[1,2] = 0.6u[1]\n  du[1,3] = 0.9u[1]\n  du[1,4] = 0.12u[2]\n  du[2,1] = 1.2u[1]\n  du[2,2] = 0.2u[2]\n  du[2,3] = 0.3u[2]\n  du[2,4] = 1.8u[2]\nend\nprob = SDEProblem(f,g,ones(2),(0.0,1.0),noise_rate_prototype=zeros(2,4))Colored noise can be set using an AbstractNoiseProcess. For example, we can set the underlying noise process to a GeometricBrownian via:μ = 1.0\nσ = 2.0\nW = GeometricBrownianMotionProcess(μ,σ,0.0,1.0,1.0)\n# ...\n# Define f,g,u0,tspan for a SDEProblem\n# ...\nprob = SDEProblem(f,g,u0,tspan,noise=W)StochasticDiffEq.jl also handles solving random ordinary differential equations. This is shown in the RODE tutorial.using StochasticDiffEq\nfunction f(u,p,t,W)\n  2u*sin(W)\nend\nu0 = 1.00\ntspan = (0.0,5.0)\nprob = RODEProblem(f,u0,tspan)\nsol = solve(prob,RandomEM(),dt=1/100)"
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "For the list of available solvers, please refer to the DifferentialEquations.jl SDE Solvers page and the RODE Solvers page."
},

]}
