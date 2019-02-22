var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JuliaDiff/HyperDualNumbers-1",
    "page": "Readme",
    "title": "JuliaDiff/HyperDualNumbers",
    "category": "section",
    "text": "Documentation Build Status\n[![][docs-stable-img]][docs-stable-url] [![][docs-dev-img]][docs-dev-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][codecov-img]][codecov-url]Hyper-dual numbers can be used to compute first and second derivatives numerically without the cancellation errors of finite-differencing schemes. The initial Julia implementation (up to v3.0.1) is directly based on the C++ implementation by Jeffrey Fike and Juan J Alonso, both of Stanford University, department of Aeronautics and Astronautics as described in the paper:The Development of Hyper-Dual Numbers for Exact Second Derivative CalculationsUp to v3.0.1 the Julia versions have been derived/written by Rob J Goedman (goedman@icloud.com).HyperDualNumbers.jl v4.0.0 has been completely redone by Benoit Pasquier and follows the structure of the JuliaDiff/DualNumbers package.For a quick into, see STEPBYSTEP.mdLatest tagged versions:v1.1.0 (Julia 0.5 & 0.6, Oct 2017)\nv2.0.0 (Julia v0.7-, Oct 2017)\nv3.0.1 (Julia v0.7 & Julia v1.0), Aug 2018, Pkg(3))\nv4.0.0 (Julia v1.0, Nov 2018)For details see VERSION.mdThe following functions are specific to hyperdual numbers:Hyper,\nHyper256,\nHyper128,\nishyper,y2\nhyper_show\nrealpart,\nε₁part(), replaces eps1,\nε₂part(), replaces eps2,\nε₁ε₂part(), replaces eps1eps2In the future it is my intention to deprecate:hyper,\nhyper256,\nhyper128,\neps1,\neps2,\neps1eps2"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "[STABLE][docs-stable-url] &mdash; documentation of the most recently tagged version.\n[DEVEL][docs-dev-url] &mdash; documentation of the in-development version."
},

{
    "location": "#Questions-and-issues-1",
    "page": "Readme",
    "title": "Questions and issues",
    "category": "section",
    "text": "Question and contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems or have a question. [docs-dev-img]: https://img.shields.io/badge/docs-dev-blue.svg [docs-dev-url]: https://juliadiff.github.io/HyperDualNumbers.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://juliadiff.github.io/HyperDualNumbers.jl/stable[travis-img]: https://travis-ci.org/JuliaDiff/HyperDualNumbers.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaDiff/HyperDualNumbers.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/gkwh4md2fq4c29hy?svg=true [appveyor-url]: https://ci.appveyor.com/project/JuliaDiff/HyperDualNumbers-jl[codecov-img]: https://codecov.io/gh/JuliaDiff/HyperDualNumbers.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaDiff/HyperDualNumbers.jl[issues-url]: https://github.com/JuliaDiff/HyperDualNumbers.jl/issues"
},

{
    "location": "autodocs/#HyperDualNumbers.Hyper",
    "page": "Docstrings",
    "title": "HyperDualNumbers.Hyper",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.Hyper128",
    "page": "Docstrings",
    "title": "HyperDualNumbers.Hyper128",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.Hyper256",
    "page": "Docstrings",
    "title": "HyperDualNumbers.Hyper256",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.Hyper64",
    "page": "Docstrings",
    "title": "HyperDualNumbers.Hyper64",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.HyperComplex128",
    "page": "Docstrings",
    "title": "HyperDualNumbers.HyperComplex128",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.HyperComplex256",
    "page": "Docstrings",
    "title": "HyperDualNumbers.HyperComplex256",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.HyperComplex512",
    "page": "Docstrings",
    "title": "HyperDualNumbers.HyperComplex512",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.hyper128",
    "page": "Docstrings",
    "title": "HyperDualNumbers.hyper128",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.hyper256",
    "page": "Docstrings",
    "title": "HyperDualNumbers.hyper256",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.hyper64",
    "page": "Docstrings",
    "title": "HyperDualNumbers.hyper64",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.hyperComplex128",
    "page": "Docstrings",
    "title": "HyperDualNumbers.hyperComplex128",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.hyperComplex256",
    "page": "Docstrings",
    "title": "HyperDualNumbers.hyperComplex256",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.hyperComplex512",
    "page": "Docstrings",
    "title": "HyperDualNumbers.hyperComplex512",
    "category": "type",
    "text": "Creation of a HyperDuakNumber\n\nhn = Hyper(2.0, 1.0, 1.0, 0.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.symbolic_derivative_list",
    "page": "Docstrings",
    "title": "HyperDualNumbers.symbolic_derivative_list",
    "category": "constant",
    "text": "Symbolic derivative list\n\nThe format is a list of (Symbol,Expr,Expr) tuples.\n\nEntries in each tuple:\n\n* `:f `     : Function symbol\n* `:df`    : Symbolic expression for first derivative\n* `:d²f`   : Symbolic expression for second derivative\n\nThe symbol :x is used within deriv_expr for the point at which the derivative should be evaluated.\n\nExample of a tuple in the list\n\n(:sqrt, :(1/2/sqrt(x)), :(-1/4/x^(3/2)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.ε₁",
    "page": "Docstrings",
    "title": "HyperDualNumbers.ε₁",
    "category": "constant",
    "text": "ɛ₁ contains the first derivative after the evaluation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.ε₁ε₂",
    "page": "Docstrings",
    "title": "HyperDualNumbers.ε₁ε₂",
    "category": "constant",
    "text": "ɛ₁ɛ₂ contains the second derivative after the evaluation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperDualNumbers.ε₂",
    "page": "Docstrings",
    "title": "HyperDualNumbers.ε₂",
    "category": "constant",
    "text": "ɛ₂ contains the first derivative after the evaluation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "HyperDualNumbers.HyperHyperDualNumbers.Hyper128HyperDualNumbers.Hyper256HyperDualNumbers.Hyper64HyperDualNumbers.HyperComplex128HyperDualNumbers.HyperComplex256HyperDualNumbers.HyperComplex512HyperDualNumbers.HyperDualNumbersHyperDualNumbers.ReCompHyperDualNumbers.abs2hyperHyperDualNumbers.abshyperHyperDualNumbers.conjhyperHyperDualNumbers.eps1HyperDualNumbers.eps1eps2HyperDualNumbers.eps2HyperDualNumbers.epsilon1HyperDualNumbers.epsilon12HyperDualNumbers.epsilon2HyperDualNumbers.evalHyperDualNumbers.hyperHyperDualNumbers.hyper128HyperDualNumbers.hyper256HyperDualNumbers.hyper64HyperDualNumbers.hyperComplex128HyperDualNumbers.hyperComplex256HyperDualNumbers.hyperComplex512HyperDualNumbers.hyper_showHyperDualNumbers.hyperpart_showHyperDualNumbers.imε₁HyperDualNumbers.imε₁ε₂HyperDualNumbers.imε₂HyperDualNumbers.includeHyperDualNumbers.ishyperHyperDualNumbers.printtimesHyperDualNumbers.realpartHyperDualNumbers.symbolic_derivative_listHyperDualNumbers.symbolic_derivativesHyperDualNumbers.to_nanmathHyperDualNumbers.valueHyperDualNumbers.ε₁HyperDualNumbers.ε₁partHyperDualNumbers.ε₁ε₂HyperDualNumbers.ε₁ε₂partHyperDualNumbers.ε₂HyperDualNumbers.ε₂part"
},

]}
