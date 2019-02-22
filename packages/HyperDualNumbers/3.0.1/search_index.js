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
    "text": "(Image: HyperDualNumbers) (Image: Coverage Status) (Image: codecov)Unix/OSX:  (Image: Travis Build Status)Windows(64bit):  (Image: Build status)Hyper-dual numbers can be used to compute first and second derivatives numerically without the cancellation errors of finite-differencing schemes. This Julia implementation is directly based on the C++ implementation by Jeffrey Fike and Juan J Alonso, both of Stanford University, department of Aeronautics and Astronautics and is described in the paper:The Development of Hyper-Dual Numbers for Exact Second Derivative CalculationsThe Julia version was derived/written by Rob J Goedman (goedman@icloud.com). Latest tagged versions:v1.1.0 (Julia 0.5 & 0.6, Oct 2017)\nv2.0.0 (Julia v0.7-, Oct 2017)\nv3.0.1 (Julia v0.7 & Julia v1.0), Aug 2018, Pkg(3))The Julia package is structured similar to the JuliaDiff/DualNumbers package, which aims for complete support for Dual types for numerical functions in Julia. Currently, basic mathematical operations and trigonometric functions are supported.The following functions are specific to hyperdual numbers:Hyper,\nHyper256,\nHyper128,\nhyper,\nhyper256,\nhyper128,\neps1,\neps2,\neps1eps2,\nishyper,\nhyper_showSeveral other functions have been extended to accept hyperdual numbers, e.g.: +, ..., <, ..., abs, log, sin, ..., erf, sqrt, etc., see the final part of hyperdual.jl.JuliaDiff is a great starting point to learn about Julia packages related to Automatic Differentiation."
},

{
    "location": "#A-walk-through-example-1",
    "page": "Readme",
    "title": "A walk-through example",
    "category": "section",
    "text": "The example below demonstrates basic usage of hyperdual numbers by employing them to  perform automatic differentiation. The code for this example can be found in  test/runtests.jl.First install the package by using the Julia package manager:Pkg.add(\"HyperDualNumbers\")Then make the package available viausing HyperDualNumbersUse the hyper() function to define a hyperdual number, e.g.:hd0 = hyper()\nhd1 = hyper(1.0)\nhd2 = hyper(3.0, 1.0, 1.0, 0.0)\nhd3 = hyper(3//2, 1//1, 1//1,0//1)Let\'s say we want to calculate the first and second derivative off(x) = e^x / (sqrt(sin(x)^3 + cos(x)^3))To calculate these derivatives at a location x, evaluate your function at hyper(x, 1.0, 1.0, 0.0). For example:t0 = hyper(1.5, 1.0, 1.0, 0.0)\ny = f(t0)For this example, you\'ll get the result4.497780053946162 + 4.053427893898621ϵ1 + 4.053427893898621ϵ2 + 9.463073681596601ϵ1ϵ2The first term is the function value, the coefficients of both ϵ1 and ϵ2 (which correspond to the second and third arguments of hyper) are equal to the first derivative, and the coefficient of ϵ1ϵ2 is the second derivative.You can extract these coefficients from the hyperdual number using the functions real(), eps1() or eps2() and eps1eps2():println(\"f(1.5) = \", f(1.5))\nprintln(\"f(t0) = \", real(f(t0)))\nprintln(\"f\'(t0) = \", eps1(f(t0)))\nprintln(\"f\'(t0) = \", eps2(f(t0)))\nprintln(\"f\'\'(t0) = \", eps1eps2(f(t0)))"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "HyperDualNumbers.HyperHyperDualNumbers.Hyper128HyperDualNumbers.Hyper256HyperDualNumbers.HyperDualNumbersHyperDualNumbers.conjhyperHyperDualNumbers.epsHyperDualNumbers.eps1HyperDualNumbers.eps1eps2HyperDualNumbers.eps2HyperDualNumbers.erfHyperDualNumbers.evalHyperDualNumbers.hyperHyperDualNumbers.hyper128HyperDualNumbers.hyper256HyperDualNumbers.hyper_showHyperDualNumbers.includeHyperDualNumbers.integer_valuedHyperDualNumbers.isequalHyperDualNumbers.isfiniteHyperDualNumbers.ishyperHyperDualNumbers.maximumHyperDualNumbers.minimumHyperDualNumbers.nanHyperDualNumbers.readHyperDualNumbers.real_valuedHyperDualNumbers.reimHyperDualNumbers.showHyperDualNumbers.showcompactHyperDualNumbers.write"
},

]}
