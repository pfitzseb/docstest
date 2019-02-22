var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DelayDiffEq.jl-1",
    "page": "Readme",
    "title": "DelayDiffEq.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)DelayDiffEq.jl is a component package in the DifferentialEquations ecosystem. It holds the delay differential equation solvers and utilities. It is built on top of OrdinaryDiffEq to extend those solvers for delay differential equations. While completely independent and usable on its own, users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "DelayDiffEq.jl is part of the JuliaDiffEq common interface, but can be used independently of DifferentialEquations.jl. The only requirement is that the user passes a DelayDiffEq.jl algorithm to solve. For example, we can solve the DDE tutorial from the documentation using the MethodOfSteps(Tsit5()) algorithm:using DelayDiffEq\nconst p0 = 0.2; const q0 = 0.3; const v0 = 1; const d0 = 5\nconst p1 = 0.2; const q1 = 0.3; const v1 = 1; const d1 = 1\nconst d2 = 1; const beta0 = 1; const beta1 = 1; const tau = 1\nfunction bc_model(du,u,h,p,t)\n  du[1] = (v0/(1+beta0*(h(p, t-tau)[3]^2))) * (p0 - q0)*u[1] - d0*u[1]\n  du[2] = (v0/(1+beta0*(h(p, t-tau)[3]^2))) * (1 - p0 + q0)*u[1] +\n          (v1/(1+beta1*(h(p, t-tau)[3]^2))) * (p1 - q1)*u[2] - d1*u[2]\n  du[3] = (v1/(1+beta1*(h(p, t-tau)[3]^2))) * (1 - p1 + q1)*u[2] - d2*u[3]\nend\nlags = [tau]\nh(p, t) = ones(3)\ntspan = (0.0,10.0)\nu0 = [1.0,1.0,1.0]\nprob = DDEProblem(bc_model,u0,h,tspan,constant_lags = lags)\nalg = MethodOfSteps(Tsit5())\nsol = solve(prob,alg)\nusing Plots; plot(sol)Both constant and state-dependent lags are supported. Interfacing with OrdinaryDiffEq.jl for implicit methods for stiff equations is also supported."
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "For the list of available solvers, please refer to the DifferentialEquations.jl DDE Solvers page. For options for the solve command, see the common solver options page."
},

]}
