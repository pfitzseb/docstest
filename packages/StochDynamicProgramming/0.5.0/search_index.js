var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StochDynamicProgramming-1",
    "page": "Readme",
    "title": "StochDynamicProgramming",
    "category": "section",
    "text": "WARNING: This package is currently in development. Any help or feedback is appreciated.Latest release: 0.4.0Documentation Build Status Social\n [![Build Status][build-img]][build-url] [![Gitter][gitter-img]][gitter-url]\n[![][docs-stable-img]][docs-stable-url] [![Codecov branch][codecov-img]][codecov-url] [<img src=\"https://upload.wikimedia.org/wikipedia/en/a/af/Discourse_logo.png\" width=\"64\">][discourse-url]This is a Julia package for optimizing controlled stochastic dynamic system (in discrete time). It offers three methods of resolution :Stochastic Dual Dynamic Programming (SDDP) algorithm.\nExtensive formulation.\nStochastic Dynamic Programming.It is built upon [JuMP]"
},

{
    "location": "#What-problem-can-we-solve-with-this-package-?-1",
    "page": "Readme",
    "title": "What problem can we solve with this package ?",
    "category": "section",
    "text": "Stage-wise independent discrete noise\nLinear dynamics\nLinear or convex piecewise linear costExtension to non-linear formulation are under development. Extension to more complex alea dependance are under developpment."
},

{
    "location": "#Why-Extensive-formulation-?-1",
    "page": "Readme",
    "title": "Why Extensive formulation ?",
    "category": "section",
    "text": "An extensive formulation approach consists in representing the stochastic problem as a deterministic one with more variable and call a standard deterministic solver. Mainly usable in a linear setting. Computational complexity is exponential in the number of stages."
},

{
    "location": "#Why-Stochastic-Dynamic-Programming-?-1",
    "page": "Readme",
    "title": "Why Stochastic Dynamic Programming ?",
    "category": "section",
    "text": "Dynamic Programming is a standard tool to solve stochastic optimal control problem with independent noise. The method require discretisation of the state space, and is exponential in the dimension of the state space."
},

{
    "location": "#Why-SDDP?-1",
    "page": "Readme",
    "title": "Why SDDP?",
    "category": "section",
    "text": "SDDP is a dynamic programming algorithm relying on cutting planes. The algorithm require convexity of the value function but does not discretize the state space. The complexity is linear in the number of stage, and can accomodate higher dimension state than standard dynamic programming. The algorithm return exact lower bound and estimated upper bound as well as approximate optimal control strategies."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Installing StochDynamicProgramming is an easy process. Currently, the package depends upon StochasticDualDynamicProgramming.jl, which is not yet registered in Julia\'s METADATA. To install the package, open Julia and enterjulia> Pkg.update()\njulia> Pkg.add(\"StochDynamicProgramming\")\n"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "IJulia Notebooks will be provided to explain how this package work. A first example on a two dams valley here."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The documentation is built with Sphinx, so ensure that this package is installed:sudo apt-get install python-sphinx\nTo build the documentation:cd doc\nmake html\n"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Released under Mozilla Public License (see LICENSE.md for further details).[build-img]: https://travis-ci.org/JuliaOpt/StochDynamicProgramming.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaOpt/StochDynamicProgramming.jl [codecov-img]: https://codecov.io/github/JuliaOpt/StochDynamicProgramming.jl/coverage.svg?branch=master [codecov-url]: https://codecov.io/github/JuliaOpt/StochDynamicProgramming.jl?branch=master [gitter-url]: https://gitter.im/JuliaOpt/StochasticDualDynamicProgramming.jl [gitter-img]: https://badges.gitter.im/JuliaOpt/StochasticDualDynamicProgramming.jl.svg [discourse-url]: https://discourse.julialang.org/c/domain/opt [JuMP]: https://github.com/JuliaOpt/JuMP.jl [docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: http://stochdynamicprogramming.readthedocs.io/en/latest/"
},

]}
