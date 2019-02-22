var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqFinancial.jl-1",
    "page": "Readme",
    "title": "DiffEqFinancial.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov) (Image: DiffEqFinancial) (Image: DiffEqFinancial)This repository holds problem definitions for common financial models for use in the DifferentialEquations ecosystem. The goal is to be a feature-complete set of solvers for the types of problems found in libraries like QuantLib. For example, one can easily specify, solve, and plot the solution for a trajectory of a Heston process via the commands:prob = HestonProblem(μ,κ,Θ,σ,ρ,u₀)\nsol = solve(prob)\nplot(sol)Full documentation is in the DifferentialEquations.jl models documentationThese solvers use DifferentialEquations.jl, meaning that high-performance and high order algorithms are available.The project is looking for contributors who would like to implement more models. If you\'re interested and need help getting started, talk to Chris Rackauckas in the Gitter chat."
},

{
    "location": "autodocs/#DiffEqFinancial.BlackScholesProblem",
    "page": "Docstrings",
    "title": "DiffEqFinancial.BlackScholesProblem",
    "category": "type",
    "text": "d ln S(t) = (r(t) - fracΘ(tS)^22)dt + σ dW_t\n\nSolves for log S(t).\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqFinancial.ExtendedOrnsteinUhlenbeckProblem",
    "page": "Docstrings",
    "title": "DiffEqFinancial.ExtendedOrnsteinUhlenbeckProblem",
    "category": "function",
    "text": "dx = a(b(t)-x)dt + σ dW_t\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqFinancial.GeneralizedBlackScholesProblem",
    "page": "Docstrings",
    "title": "DiffEqFinancial.GeneralizedBlackScholesProblem",
    "category": "function",
    "text": "d ln S(t) = (r(t) - q(t) - fracΘ(tS)^22)dt + σ dW_t\n\nSolves for log S(t).\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqFinancial.GeometricBrownianMotionProblem",
    "page": "Docstrings",
    "title": "DiffEqFinancial.GeometricBrownianMotionProblem",
    "category": "function",
    "text": "dx = μ dt + σ dW_t\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqFinancial.HestonProblem",
    "page": "Docstrings",
    "title": "DiffEqFinancial.HestonProblem",
    "category": "function",
    "text": "dS = μSdt + sqrtvSdW_1\ndv = κ(Θ-v)dt + σsqrtvdW_2\ndW_1 dW_2 = ρ dt\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqFinancial.MfStateProblem",
    "page": "Docstrings",
    "title": "DiffEqFinancial.MfStateProblem",
    "category": "function",
    "text": "dx = σ(t)e^at dW_t\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqFinancial.OrnsteinUhlenbeckProblem",
    "page": "Docstrings",
    "title": "DiffEqFinancial.OrnsteinUhlenbeckProblem",
    "category": "function",
    "text": "dx = a(r-x)dt + σ dW_t\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DiffEqFinancial.BlackScholesProblemDiffEqFinancial.DiffEqFinancialDiffEqFinancial.ExtendedOrnsteinUhlenbeckProblemDiffEqFinancial.GeneralizedBlackScholesProblemDiffEqFinancial.GeometricBrownianMotionProblemDiffEqFinancial.HestonProblemDiffEqFinancial.MfStateProblemDiffEqFinancial.OrnsteinUhlenbeckProblemDiffEqFinancial.evalDiffEqFinancial.include"
},

]}
