var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Tau.jl-1",
    "page": "Readme",
    "title": "Tau.jl",
    "category": "section",
    "text": "<div align=\"center\"><img src=\"https://rawgit.com/JuliaMath/Tau.jl/master/tau-2pi.svg\" width=\"300\"/></div><br/><br/>![tests-0.5][tests-0.5-img] ![tests-0.6][tests-0.6-img]   ![travis][travis-img] ![appveyor][appveyor-img] ![codecov][codecov-img][tests-0.5-img]: http://pkg.julialang.org/badges/Tau0.5.svg [tests-0.6-img]: http://pkg.julialang.org/badges/Tau0.6.svg [travis-img]: https://img.shields.io/travis/JuliaMath/Tau.jl/master.svg?label=Linux,%20macOS [appveyor-img]: https://img.shields.io/appveyor/ci/waldyrious/tau-jl/master.svg?label=Windows [codecov-img]: https://img.shields.io/codecov/c/github/JuliaMath/Tau.jl/master.svg?label=coverageThis Julia package defines the Tau constant and related functions.tau ≈ 2*pi"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "After installing this package with Pkg.add(\"Tau\"), it can be used as follows:using Tau\n\ntau == τ ≈ 2*pi  # => true\ntypeof(tau)      # => Irrational{:τ}Note: to input the τ character, type \\tau then press <kbd>Tab</kbd>.The tau variants of sinpi, cospi, and mod2pi are also defined:sintau(1//4) # => 1.0\ncostau(1//2) # => -1.0"
},

{
    "location": "#The-tau-!-2pi-inequality-1",
    "page": "Readme",
    "title": "The tau != 2pi inequality",
    "category": "section",
    "text": "When this package was first created, the equality tau == 2pi did hold true, in accordance to the mathematical definition of the constant. However, that is not valid anymore – the two values are only approximately equal: tau ≈ 2*pi.For a detailed explanation of the reasons for this, see this document."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Tau.TauTau.costauTau.cosτTau.evalTau.includeTau.modtauTau.modτTau.sintauTau.sinτTau.tauTau.τ"
},

]}
