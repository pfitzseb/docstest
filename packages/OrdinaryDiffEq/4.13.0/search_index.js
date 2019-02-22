var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OrdinaryDiffEq.jl-1",
    "page": "Readme",
    "title": "OrdinaryDiffEq.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov)OrdinaryDiffEq.jl is a component package in the DifferentialEquations ecosystem. It holds the ordinary differential equation solvers and utilities. While completely independent and usable on its own, users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "OrdinaryDiffEq.jl is part of the JuliaDiffEq common interface, but can be used independently of DifferentialEquations.jl. The only requirement is that the user passes an OrdinaryDiffEq.jl algorithm to solve. For example, we can solve the ODE tutorial from the docs using the Tsit5() algorithm:using OrdinaryDiffEq\nf(u,p,t) = 1.01*u\nu0=1/2\ntspan = (0.0,1.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),reltol=1e-8,abstol=1e-8)\nusing Plots\nplot(sol,linewidth=5,title=\"Solution to the linear ODE with a thick line\",\n     xaxis=\"Time (t)\",yaxis=\"u(t) (in μm)\",label=\"My Thick Line!\") # legend=false\nplot!(sol.t, t->0.5*exp(1.01t),lw=3,ls=:dash,label=\"True Solution!\")That example uses the out-of-place syntax f(u,p,t), while the inplace syntax (more efficient for systems of equations) is shown in the Lorenz example:using OrdinaryDiffEq\nfunction lorenz(du,u,p,t)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nend\nu0 = [1.0;0.0;0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(lorenz,u0,tspan)\nsol = solve(prob,Tsit5())\nusing Plots; plot(sol,vars=(1,2,3))For \"refined ODEs\" like dynamical equations and SecondOrderODEProblems, refer to the DiffEqDocs. For example, in DiffEqTutorials.jl we show how to solve equations of motion using symplectic methods:function HH_acceleration(dv,v,u,p,t)\n    x,y  = u\n    dx,dy = dv\n    dv[1] = -x - 2x*y\n    dv[2] = y^2 - y -x^2\nend\ninitial_positions = [0.0,0.1]\ninitial_velocities = [0.5,0.0]\nprob = SecondOrderODEProblem(HH_acceleration,initial_velocities,initial_positions,tspan)\nsol2 = solve(prob, KahanLi8(), dt=1/10);Other refined forms are IMEX and semi-linear ODEs (for exponential integrators)."
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "For the list of available solvers, please refer to the DifferentialEquations.jl ODE Solvers, Dynamical ODE Solvers, and the Split ODE Solvers pages."
},

]}
