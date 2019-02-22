var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Optim.jl-1",
    "page": "Readme",
    "title": "Optim.jl",
    "category": "section",
    "text": "Univariate and multivariate optimization in Julia.Optim.jl is part of the JuliaNLSolvers family.Documentation PackageEvaluator Build Status Social References to cite\n[![][docs-stable-img]][docs-stable-url] [![][pkg-0.4-img]][pkg-0.4-url] [![Build Status][build-img]][build-url] [![][gitter-img]][gitter-url] [![JOSS][joss-img]][joss-url]\n [![][pkg-0.5-img]][pkg-0.5-url] [![Build Status][winbuild-img]][winbuild-url]  [![DOI][zenodo-img]][zenodo-url]\n [![][pkg-0.6-img]][pkg-0.6-url] [![Codecov branch][cov-img]][cov-url]  "
},

{
    "location": "#Optimization-1",
    "page": "Readme",
    "title": "Optimization",
    "category": "section",
    "text": "Optim.jl is a package for univariate and multivariate optimization of functions. A typical example of the usage of Optim.jl isusing Optim\nrosenbrock(x) =  (1.0 - x[1])^2 + 100.0 * (x[2] - x[1]^2)^2\nresult = optimize(rosenbrock, zeros(2), BFGS())This minimizes the Rosenbrock function<img src=\"https://user-images.githubusercontent.com/8431156/31627324-2bbc9ebc-b2ad-11e7-916f-857ad8dcb714.gif\" title=\"f(x,y) = (a-x)^2+b(y-x^2)^2\" />with a = 1, b = 100 and the initial values x=0, y=0. The minimum is at (a,a^2).The above code gives the outputResults of Optimization Algorithm\n * Algorithm: BFGS\n * Starting Point: [0.0,0.0]\n * Minimizer: [0.9999999926033423,0.9999999852005353]\n * Minimum: 5.471433e-17\n * Iterations: 16\n\n * Convergence: true\n   * |x - x\'| ≤ 0.0e+00: false\n     |x - x\'| = 3.47e-07\n   * |f(x) - f(x\')| ≤ 0.0e+00 |f(x)|: false\n     |f(x) - f(x\')| = 1.20e+03 |f(x)|\n   * |g(x)| ≤ 1.0e-08: true\n     |g(x)| = 2.33e-09\n   * Stopped by an increasing objective: false\n   * Reached Maximum Number of Iterations: false\n * Objective Calls: 53\n * Gradient Calls: 53To get information on the keywords used to construct method instances, use the Julia REPL help prompt (?)help?> LBFGS\nsearch: LBFGS\n\n     LBFGS\n    ≡≡≡≡≡≡≡\n\n     Constructor\n    =============\n\n  LBFGS(; m::Integer = 10,\n  alphaguess = LineSearches.InitialStatic(),\n  linesearch = LineSearches.HagerZhang(),\n  P=nothing,\n  precondprep = (P, x) -> nothing,\n  manifold = Flat(),\n  scaleinvH0::Bool = true && (typeof(P) <: Void))\n\n  LBFGS has two special keywords; the memory length m, and\n  the scaleinvH0 flag. The memory length determines how many\n  previous Hessian approximations to store. When scaleinvH0\n  == true, then the initial guess in the two-loop recursion\n  to approximate the inverse Hessian is the scaled identity,\n  as can be found in Nocedal and Wright (2nd edition) (sec.\n  7.2).\n\n  In addition, LBFGS supports preconditioning via the P and\n  precondprep keywords.\n\n     Description\n    =============\n\n  The LBFGS method implements the limited-memory BFGS\n  algorithm as described in Nocedal and Wright (sec. 7.2,\n  2006) and original paper by Liu & Nocedal (1989). It is a\n  quasi-Newton method that updates an approximation to the\n  Hessian using past approximations as well as the gradient.\n\n     References\n    ============\n\n    •    Wright, S. J. and J. Nocedal (2006), Numerical\n        optimization, 2nd edition. Springer\n\n    •    Liu, D. C. and Nocedal, J. (1989). \"On the\n        Limited Memory Method for Large Scale\n        Optimization\". Mathematical Programming B. 45\n        (3): 503–528"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "For more details and options, see the documentation[STABLE][docs-stable-url] — most recently tagged version of the documentation.\n[LATEST][docs-latest-url] — in-development version of the documentation."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and can be installed with Pkg.add.julia> Pkg.add(\"Optim\")"
},

{
    "location": "#Citation-1",
    "page": "Readme",
    "title": "Citation",
    "category": "section",
    "text": "If you use Optim.jl in your work, please cite the following.@article{mogensen2018optim,\n  author  = {Mogensen, Patrick Kofod and Riseth, Asbj{\\o}rn Nilsen},\n  title   = {Optim: A mathematical optimization package for {Julia}},\n  journal = {Journal of Open Source Software},\n  year    = {2018},\n  volume  = {3},\n  number  = {24},\n  pages   = {615},\n  doi     = {10.21105/joss.00615}\n}[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://julianlsolvers.github.io/Optim.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://julianlsolvers.github.io/Optim.jl/stable[build-img]: https://travis-ci.org/JuliaNLSolvers/Optim.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaNLSolvers/Optim.jl[winbuild-img]: https://ci.appveyor.com/api/projects/status/prp8ygfp4rr9tafe?svg=true [winbuild-url]: https://ci.appveyor.com/project/blegat/optim-jl[pkg-0.4-img]: http://pkg.julialang.org/badges/Optim0.4.svg [pkg-0.4-url]: http://pkg.julialang.org/?pkg=Optim&ver=0.4 [pkg-0.5-img]: http://pkg.julialang.org/badges/Optim0.5.svg [pkg-0.5-url]: http://pkg.julialang.org/?pkg=Optim&ver=0.5 [pkg-0.6-img]: http://pkg.julialang.org/badges/Optim_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=Optim&ver=0.6[cov-img]: https://img.shields.io/codecov/c/github/JuliaNLSolvers/Optim.jl/master.svg?maxAge=2592000 [cov-url]: https://codecov.io/gh/JuliaNLSolvers/Optim.jl[gitter-url]: https://gitter.im/JuliaNLSolvers/Optim.jl [gitter-img]: https://badges.gitter.im/JuliaNLSolvers/Optim.jl.svg[zenodo-url]: https://zenodo.org/badge/latestdoi/3933868 [zenodo-img]: https://zenodo.org/badge/3933868.svg[joss-url]: https://doi.org/10.21105/joss.00615 [joss-img]: http://joss.theoj.org/papers/10.21105/joss.00615/status.svg"
},

]}
