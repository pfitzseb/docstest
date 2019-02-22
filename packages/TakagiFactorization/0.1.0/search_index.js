var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TakagiFactorization.jl-1",
    "page": "Readme",
    "title": "TakagiFactorization.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: lifecycle)This package is a Julia translation of Thomas Hahn\'s Takagi factorization routine (http://www.feynarts.de/diag/).Its main advantage (besides being written entirely in Julia) is that it can handle arbitrary precision arithmetics out of the box (e.g. using BigFloat).All credit goes to the original author (except for bugs). If you use this package in your research, please cite:Routines for the diagonalization of complex matrices, T. Hahn, arXiv:0607103If you find any bugs, please file an issue here. Bonus points if you check that the bug is absent from the original version :)"
},

{
    "location": "#Example-usage:-1",
    "page": "Readme",
    "title": "Example usage:",
    "category": "section",
    "text": "using TakagiFactorization\nusing LinearAlgebra\n\nA₁ = convert(Matrix{Complex{Float64}}, [1.0 2.0; 2.0 1.0])\nd₁, U₁ = takagi_factor(A₁, sort=-1)\n@assert A₁ ≈ transpose(U₁) * d₁ * U₁\n@assert d₁ ≈ Diagonal([3.0, 1.0])\n@assert U₁ ≈ [1 1; -1im 1im] / √2\n\n# Using arbitrary precision\nBase.MPFR.setprecision(512)\nA₂ = convert(Matrix{Complex{BigFloat}}, [0.0 1.0; 1.0 0.0])\nd₂, U₂ = takagi_factor(A₂)\n@assert A₂ ≈ transpose(U₂) * d₂ * U₂\n@assert d₂ ≈ Diagonal([1.0, 1.0])\n@assert U₂ ≈ [1 1; -1im 1im] / √big(2)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TakagiFactorization.ConvergenceErrorTakagiFactorization.TakagiFactorizationTakagiFactorization.evalTakagiFactorization.includeTakagiFactorization.sq_epsTakagiFactorization.sym_epsTakagiFactorization.takagi_factorTakagiFactorization.takagi_factor!"
},

]}
