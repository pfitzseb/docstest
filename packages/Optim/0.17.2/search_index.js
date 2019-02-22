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
    "text": "Optim.jl is a package for univariate and multivariate optimization of functions. A typical example of the usage of Optim.jl isusing Optim\nrosenbrock(x) =  (1.0 - x[1])^2 + 100.0 * (x[2] - x[1]^2)^2\nresult = optimize(rosenbrock, zeros(2), BFGS())This minimizes the Rosenbrock function<img src=\"https://user-images.githubusercontent.com/8431156/31627324-2bbc9ebc-b2ad-11e7-916f-857ad8dcb714.gif\" title=\"f(x,y) = (a-x)^2+b(y-x^2)^2\" />with a = 1, b = 100 and the initial values x=0, y=0. The minimum is at (a,a^2).The above code gives the outputResults of Optimization Algorithm\n * Algorithm: BFGS\n * Starting Point: [0.0,0.0]\n * Minimizer: [0.9999999926033423,0.9999999852005353]\n * Minimum: 5.471433e-17\n * Iterations: 16\n\n * Convergence: true\n   * |x - x\'| ≤ 0.0e+00: false\n     |x - x\'| = 3.47e-07\n   * |f(x) - f(x\')| ≤ 0.0e+00 |f(x)|: false\n     |f(x) - f(x\')| = 1.20e+03 |f(x)|\n   * |g(x)| ≤ 1.0e-08: true\n     |g(x)| = 2.33e-09\n   * Stopped by an increasing objective: false\n   * Reached Maximum Number of Iterations: false\n * Objective Calls: 53\n * Gradient Calls: 53To get information on the keywords used to construct method instances, use the Julia REPL help prompt (?)help?> LBFGS\nsearch: LBFGS\n\n     LBFGS\n    ≡≡≡≡≡≡≡\n\n     Constructor\n    =============\n\n  LBFGS(; m::Integer = 10,\n  alphaguess = LineSearches.InitialStatic(),\n  linesearch = LineSearches.HagerZhang(),\n  P=nothing,\n  precondprep = (P, x) -> nothing,\n  manifold = Flat(),\n  scaleinvH0::Bool = true && (typeof(P) <: Nothing))\n\n  LBFGS has two special keywords; the memory length m, and\n  the scaleinvH0 flag. The memory length determines how many\n  previous Hessian approximations to store. When scaleinvH0\n  == true, then the initial guess in the two-loop recursion\n  to approximate the inverse Hessian is the scaled identity,\n  as can be found in Nocedal and Wright (2nd edition) (sec.\n  7.2).\n\n  In addition, LBFGS supports preconditioning via the P and\n  precondprep keywords.\n\n     Description\n    =============\n\n  The LBFGS method implements the limited-memory BFGS\n  algorithm as described in Nocedal and Wright (sec. 7.2,\n  2006) and original paper by Liu & Nocedal (1989). It is a\n  quasi-Newton method that updates an approximation to the\n  Hessian using past approximations as well as the gradient.\n\n     References\n    ============\n\n    •    Wright, S. J. and J. Nocedal (2006), Numerical\n        optimization, 2nd edition. Springer\n\n    •    Liu, D. C. and Nocedal, J. (1989). \"On the\n        Limited Memory Method for Large Scale\n        Optimization\". Mathematical Programming B. 45\n        (3): 503–528"
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

{
    "location": "autodocs/#Optim.BFGS",
    "page": "Docstrings",
    "title": "Optim.BFGS",
    "category": "type",
    "text": "BFGS\n\nConstructor\n\nBFGS(; alphaguess = LineSearches.InitialStatic(),\n       linesearch = LineSearches.HagerZhang(),\n       initial_invH = x -> Matrix{eltype(x)}(I, length(x), length(x)),\n       manifold = Flat())\n\nDescription\n\nThe BFGS method implements the Broyden-Fletcher-Goldfarb-Shanno algorithm as described in Nocedal and Wright (sec. 8.1, 1999) and the four individual papers Broyden (1970), Fletcher (1970), Goldfarb (1970), and Shanno (1970). It is a quasi-Newton method that updates an approximation to the Hessian using past approximations as well as the gradient. See also the limited memory variant LBFGS for an algorithm that is more suitable for high dimensional problems.\n\nReferences\n\nWright, S. J. and J. Nocedal (1999), Numerical optimization. Springer Science 35.67-68: 7.\nBroyden, C. G. (1970), The convergence of a class of double-rank minimization algorithms, Journal of the Institute of Mathematics and Its Applications, 6: 76–90.\nFletcher, R. (1970), A New Approach to Variable Metric Algorithms, Computer Journal, 13 (3): 317–322,\nGoldfarb, D. (1970), A Family of Variable Metric Updates Derived by Variational Means, Mathematics of Computation, 24 (109): 23–26,\nShanno, D. F. (1970), Conditioning of quasi-Newton methods for function minimization, Mathematics of Computation, 24 (111): 647–656.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.BarrierLineSearch",
    "page": "Docstrings",
    "title": "Optim.BarrierLineSearch",
    "category": "type",
    "text": "BarrierLineSearch{T}\n\nParameters for interior-point line search methods that use only the value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.BarrierLineSearchGrad",
    "page": "Docstrings",
    "title": "Optim.BarrierLineSearchGrad",
    "category": "type",
    "text": "BarrierLineSearchGrad{T}\n\nParameters for interior-point line search methods that exploit the slope.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.Brent",
    "page": "Docstrings",
    "title": "Optim.Brent",
    "category": "type",
    "text": "Brent\n\nConstructor\n\n    Brent(;)\n\nDescription\n\nAlso known as the Brent-Dekker algorith, Brent is a univariate optimization algorithm for minimizing functions on some interval [a,b]. The method uses bisection to find a zero of the gradient. If the original interval contains a minimum, bisection will reliably find the solution, but can be slow. To this end Brent combines bisection with the secant method and inverse quadratic interpolation to accelerate convergence.\n\nReferences\n\nR. P. Brent (2002) Algorithms for Minimization Without Derivatives. Dover edition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.ConjugateGradient",
    "page": "Docstrings",
    "title": "Optim.ConjugateGradient",
    "category": "type",
    "text": "Conjugate Gradient Descent\n\nConstructor\n\nConjugateGradient(; alphaguess = LineSearches.InitialHagerZhang(),\nlinesearch = LineSearches.HagerZhang(),\neta = 0.4,\nP = nothing,\nprecondprep = (P, x) -> nothing,\nmanifold = Flat())\n\nThe strictly positive constant eta is used in determining the next step direction, and the default here deviates from the one used in the original paper (where it was 001). See more details in the original papers referenced below.\n\nDescription\n\nThe ConjugateGradient method implements Hager and Zhang (2006) and elements from Hager and Zhang (2013). Notice, the default linesearch is HagerZhang from LineSearches.jl. This line search is exactly the one proposed in Hager and Zhang (2006).\n\nReferences\n\nW. W. Hager and H. Zhang (2006) Algorithm 851: CG_DESCENT, a conjugate gradient method with guaranteed descent. ACM Transactions on Mathematical Software 32: 113-137.\nW. W. Hager and H. Zhang (2013), The Limited Memory Conjugate Gradient Method. SIAM Journal on Optimization, 23, pp. 2150-2168.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.Flat",
    "page": "Docstrings",
    "title": "Optim.Flat",
    "category": "type",
    "text": "Flat Euclidean space {R,C}^N, with projections equal to the identity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.Fminbox",
    "page": "Docstrings",
    "title": "Optim.Fminbox",
    "category": "type",
    "text": "Fminbox\n\nConstructor\n\nFminbox(method::T,\n        mu0::Tf\n        mufactor::Tf\n        precondprep::P)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.GoldenSection",
    "page": "Docstrings",
    "title": "Optim.GoldenSection",
    "category": "type",
    "text": "GoldenSection\n\nConstructor\n\n    GoldenSection(;)\n\nDescription\n\nThe GoldenSection method seeks to minimize a univariate function on an interval [a, b]. At all times the algorithm maintains a tuple of three minimizer candidates (c, d, e) where cde such that the ratio of the largest to the smallest interval is the Golden Ratio.\n\nReferences\n\nhttps://en.wikipedia.org/wiki/Golden-section_search\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.GradientDescent",
    "page": "Docstrings",
    "title": "Optim.GradientDescent",
    "category": "type",
    "text": "Gradient Descent\n\nConstructor\n\nGradientDescent(; alphaguess = LineSearches.InitialHagerZhang(),\nlinesearch = LineSearches.HagerZhang(),\nP = nothing,\nprecondprep = (P, x) -> nothing)\n\nKeywords are used to control choice of line search, and preconditioning.\n\nDescription\n\nThe GradientDescent method a simple gradient descent algorithm, that is the search direction is simply the negative gradient at the current iterate, and then a line search step is used to compute the final step. See Nocedal and Wright (ch. 2.2, 1999) for an explanation of the approach.\n\nReferences\n\nNocedal, J. and Wright, S. J. (1999), Numerical optimization. Springer Science 35.67-68: 7.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.IPNewton",
    "page": "Docstrings",
    "title": "Optim.IPNewton",
    "category": "type",
    "text": "Interior-point Newton\n\nConstructor\n\nIPNewton(; linesearch::Function = Optim.backtrack_constrained_grad,\n         μ0::Union{Symbol,Number} = :auto,\n         show_linesearch::Bool = false)\n\nThe initial barrier penalty coefficient μ0 can be chosen as a number, or set to :auto to let the algorithm decide its value, see initialize_μ_λ!.\n\nNote: For constrained optimization problems, we recommend always enabling allow_f_increases and successive_f_tol in the options passed to optimize. The default is set to Optim.Options(allow_f_increases = true, successive_f_tol = 2).\n\nAs of February 2018, the line search algorithm is specialised for constrained interior-point methods. In future we hope to support more algorithms from LineSearches.jl.\n\nDescription\n\nThe IPNewton method implements an interior-point primal-dual Newton algorithm for solving nonlinear, constrained optimization problems. See Nocedal and Wright (Ch. 19, 2006) for a discussion of interior-point methods for constrained optimization.\n\nReferences\n\nThe algorithm was originally written by Tim Holy (@timholy, tim.holy@gmail.com).\n\nJ Nocedal, SJ Wright (2006), Numerical optimization, second edition. Springer.\nA Wächter, LT Biegler (2006), On the implementation of an interior-point filter line-search algorithm for large-scale nonlinear programming. Mathematical Programming 106 (1), 25-57.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.LBFGS",
    "page": "Docstrings",
    "title": "Optim.LBFGS",
    "category": "type",
    "text": "LBFGS\n\nConstructor\n\nLBFGS(; m::Integer = 10,\nalphaguess = LineSearches.InitialStatic(),\nlinesearch = LineSearches.HagerZhang(),\nP=nothing,\nprecondprep = (P, x) -> nothing,\nmanifold = Flat(),\nscaleinvH0::Bool = true && (typeof(P) <: Nothing))\n\nLBFGS has two special keywords; the memory length m, and the scaleinvH0 flag. The memory length determines how many previous Hessian approximations to store. When scaleinvH0 == true, then the initial guess in the two-loop recursion to approximate the inverse Hessian is the scaled identity, as can be found in Nocedal and Wright (2nd edition) (sec. 7.2).\n\nIn addition, LBFGS supports preconditioning via the P and precondprep keywords.\n\nDescription\n\nThe LBFGS method implements the limited-memory BFGS algorithm as described in Nocedal and Wright (sec. 7.2, 2006) and original paper by Liu & Nocedal (1989). It is a quasi-Newton method that updates an approximation to the Hessian using past approximations as well as the gradient.\n\nReferences\n\nWright, S. J. and J. Nocedal (2006), Numerical optimization, 2nd edition. Springer\nLiu, D. C. and Nocedal, J. (1989). \"On the Limited Memory Method for Large Scale Optimization\". Mathematical Programming B. 45 (3): 503–528\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.NGMRES",
    "page": "Docstrings",
    "title": "Optim.NGMRES",
    "category": "type",
    "text": "N-GMRES\n\nConstructor\n\nNGMRES(;\n        alphaguess = LineSearches.InitialStatic(),\n        linesearch = LineSearches.HagerZhang(),\n        manifold = Flat(),\n        wmax::Int = 10,\n        ϵ0 = 1e-12,\n        nlprecon = GradientDescent(\n            alphaguess = LineSearches.InitialStatic(alpha=1e-4,scaled=true),\n            linesearch = LineSearches.Static(),\n            manifold = manifold),\n        nlpreconopts = Options(iterations = 1, allow_f_increases = true),\n      )\n\nDescription\n\nThis algorithm takes a step given by the nonlinear preconditioner nlprecon and proposes an accelerated step by minimizing an approximation of the (ll_2) residual of the gradient on a subspace spanned by the previous wmax iterates.\n\nN-GMRES was originally developed for solving nonlinear systems [1], and reduces to GMRES for linear problems. Application of the algorithm to optimization is covered, for example, in [2].\n\nReferences\n\n[1] De Sterck. Steepest descent preconditioning for nonlinear GMRES optimization. NLAA, 2013. [2] Washio and Oosterlee. Krylov subspace acceleration for nonlinear multigrid schemes. ETNA, 1997.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.NelderMead",
    "page": "Docstrings",
    "title": "Optim.NelderMead",
    "category": "type",
    "text": "NelderMead\n\nConstructor\n\nNelderMead(; parameters = AdaptiveParameters(),\n             initial_simplex = AffineSimplexer())\n\nThe constructor takes 2 keywords:\n\nparameters, an instance of either AdaptiveParameters or FixedParameters,\n\nand is used to generate parameters for the Nelder-Mead Algorithm\n\ninitial_simplex, an instance of AffineSimplexer\n\nDescription\n\nOur current implementation of the Nelder-Mead algorithm is based on [1] and [3]. Gradient-free methods can be a bit sensitive to starting values and tuning parameters, so it is a good idea to be careful with the defaults provided in Optim.jl.\n\nInstead of using gradient information, Nelder-Mead is a direct search method. It keeps track of the function value at a number of points in the search space. Together, the points form a simplex. Given a simplex, we can perform one of four actions: reflect, expand, contract, or shrink. Basically, the goal is to iteratively replace the worst point with a better point. More information can be found in [1], [2] or [3].\n\nReferences\n\n[1] Nelder, John A. and R. Mead (1965). \"A simplex method for function minimization\". Computer Journal 7: 308–313. doi:10.1093/comjnl/7.4.308\n[2] Lagarias, Jeffrey C., et al. \"Convergence properties of the Nelder–Mead simplex method in low dimensions.\" SIAM Journal on Optimization 9.1 (1998): 112-147\n[3] Gao, Fuchang and Lixing Han (2010). \"Implementing the Nelder-Mead simplex algorithm with adaptive parameters\". Computational Optimization and Applications. doi:10.1007/s10589-010-9329-3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.Newton",
    "page": "Docstrings",
    "title": "Optim.Newton",
    "category": "type",
    "text": "Newton\n\nConstructor\n\nNewton(; alphaguess = LineSearches.InitialStatic(),\nlinesearch = LineSearches.HagerZhang())\n\nDescription\n\nThe Newton method implements Newton\'s method for optimizing a function. We use a special factorization from the package PositiveFactorizations.jl to ensure that each search direction is a direction of descent. See Wright and Nocedal and Wright (ch. 6, 1999) for a discussion of Newton\'s method in practice.\n\nReferences\n\nNocedal, J. and S. J. Wright (1999), Numerical optimization. Springer Science 35.67-68: 7.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.NewtonTrustRegion",
    "page": "Docstrings",
    "title": "Optim.NewtonTrustRegion",
    "category": "type",
    "text": "NewtonTrustRegion\n\nConstructor\n\nNewtonTrustRegion(; initial_delta = 1.0,\n                    delta_hat = 100.0,\n                    eta = 0.1,\n                    rho_lower = 0.25,\n                    rho_upper = 0.75)\n\nThe constructor has 5 keywords:\n\ninitial_delta, the starting trust region radius\ndelta_hat, the largest allowable trust region radius\neta, when rho is at least eta, accept the step\nrho_lower, when rho is less than rho_lower, shrink the trust region\nrho_upper, when rho is greater than rho_upper, grow the trust region\n\nDescription\n\nThe NewtonTrustRegion method implements Newton\'s method with a trust region for optimizing a function. The method is designed to take advantage of the second-order information in a function\'s Hessian, but with more stability that Newton\'s method when functions are not globally well-approximated by a quadratic. This is achieved by repeatedly minimizing quadratic approximations within a dynamically-sized trust region in which the function is assumed to be locally quadratic. See Wright and Nocedal and Wright (ch. 4, 1999) for a discussion of trust-region methods in practice.\n\nReferences\n\nNocedal, J. and S. J. Wright (1999), Numerical optimization. Springer Science 35.67-68: 7.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.OACCEL",
    "page": "Docstrings",
    "title": "Optim.OACCEL",
    "category": "type",
    "text": "O-ACCEL\n\nConstructor\n\nOACCEL(;manifold::Manifold = Flat(),\n       alphaguess = LineSearches.InitialStatic(),\n       linesearch = LineSearches.HagerZhang(),\n       nlprecon = GradientDescent(\n           alphaguess = LineSearches.InitialStatic(alpha=1e-4,scaled=true),\n           linesearch = LineSearches.Static(),\n           manifold = manifold),\n       nlpreconopts = Options(iterations = 1, allow_f_increases = true),\n       ϵ0 = 1e-12,\n       wmax::Int = 10)\n\nDescription\n\nThis algorithm takes a step given by the nonlinear preconditioner nlprecon and proposes an accelerated step by minimizing an approximation of the objective on a subspace spanned by the previous wmax iterates.\n\nO-ACCEL is a slight tweak of N-GMRES, first presented in [1].\n\nReferences\n\n[1] Riseth. Objective acceleration for unconstrained optimization. 2018.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.Optim",
    "page": "Docstrings",
    "title": "Optim.Optim",
    "category": "module",
    "text": "Optim.jl\n\nWelcome to Optim.jl!\n\nOptim.jl is a package used to solve continuous optimization problems. It is written in Julia for Julians to help take advantage of arbitrary number types, fast computation, and excellent automatic differentiation tools.\n\nREPL help\n\n? followed by an algorithm name (?BFGS), constructors (?Optim.Options) prints help to the terminal.\n\nDocumentation\n\nBesides the help provided at the REPL, it is possible to find help and general documentation online at http://julianlsolvers.github.io/Optim.jl/stable/ .\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.ParticleSwarm",
    "page": "Docstrings",
    "title": "Optim.ParticleSwarm",
    "category": "type",
    "text": "Particle Swarm\n\nConstructor\n\nParticleSwarm(; lower = [],\n                upper = [],\n                n_particles = 0)\n\nThe constructor takes 3 keywords:\n\nlower = [], a vector of lower bounds, unbounded below if empty or Inf\'s\nupper = [], a vector of upper bounds, unbounded above if empty or Inf\'s\nn_particles = 0, the number of particles in the swarm, defaults to least three\n\nDescription\n\nThe Particle Swarm implementation in Optim.jl is the so-called Adaptive Particle Swarm algorithm in [1]. It attempts to improve global coverage and convergence by switching between four evolutionary states: exploration, exploitation, convergence, and jumping out. In the jumping out state it intentially tries to take the best particle and move it away from its (potentially and probably) local optimum, to improve the ability to find a global optimum. Of course, this comes a the cost of slower convergence, but hopefully converges to the global optimum as a result.\n\nReferences\n\n[1] Zhan, Zhang, and Chung. Adaptive particle swarm optimization, IEEE Transactions on Systems, Man, and Cybernetics, Part B: CyberneticsVolume 39, Issue 6 (2009): 1362-1381\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.PowerManifold",
    "page": "Docstrings",
    "title": "Optim.PowerManifold",
    "category": "type",
    "text": "Multiple copies of the same manifold. Points are stored as innerdims x outerdims, e.g. the product of 2x2 Stiefel manifolds of dimension N x n would be a N x n x 2 x 2 matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.ProductManifold",
    "page": "Docstrings",
    "title": "Optim.ProductManifold",
    "category": "type",
    "text": "Product of two manifolds {P = (x1,x2), x1 ∈ m1, x2 ∈ m2}. P is stored as a flat 1D array, and x1 is before x2 in memory. Use get_inner(m, x, {1,2}) to access x1 or x2 in their original format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.SAMIN",
    "page": "Docstrings",
    "title": "Optim.SAMIN",
    "category": "type",
    "text": "SAMIN\n\nConstructor\n\nSAMIN(; nt::Int = 5     # reduce temperature every nt*ns*dim(x_init) evaluations\n        ns::Int = 5     # adjust bounds every ns*dim(x_init) evaluations\n        rt::T = 0.9     # geometric temperature reduction factor: when temp changes, new temp is t=rt*t\n        neps::Int = 5   # number of previous best values the final result is compared to\n        f_tol::T = 1e-12 # the required tolerance level for function value comparisons\n        x_tol::T = 1e-6 # the required tolerance level for x\n        coverage_ok::Bool = false, # if false, increase temperature until initial parameter space is covered\n        verbosity::Int = 1) # scalar: 0, 1, 2 or 3 (default = 1).\n\nDescription\n\nThe SAMIN method implements the Simulated Annealing algorithm for problems with bounds constrains a described in Goffe et. al. (1994) and Goffe (1996). The algorithm\n\nReferences\n\nGoffe, et. al. (1994) \"Global Optimization of Statistical Functions with Simulated Annealing\", Journal of Econometrics, V. 60, N. 1/2.\nGoffe, William L. (1996) \"SIMANN: A Global Optimization Algorithm using Simulated Annealing \" Studies in Nonlinear Dynamics & Econometrics, Oct96, Vol. 1 Issue 3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.SimulatedAnnealing",
    "page": "Docstrings",
    "title": "Optim.SimulatedAnnealing",
    "category": "type",
    "text": "SimulatedAnnealing\n\nConstructor\n\nSimulatedAnnealing(; neighbor = default_neighbor!,\n                     temperature = log_temperature,\n                     keep_best::Bool = true)\n\nThe constructor takes 3 keywords:\n\nneighbor = a!(x_proposed, x_current), a mutating function of the current x,\n\nand the proposed x\n\nT = b(iteration), a function of the current iteration that returns a temperature\np = c(f_proposal, f_current, T), a function of the current temperature, current\n\nfunction value and proposed function value that returns an acceptance probability\n\nDescription\n\nSimulated Annealing is a derivative free method for optimization. It is based on the Metropolis-Hastings algorithm that was originally used to generate samples from a thermodynamics system, and is often used to generate draws from a posterior when doing Bayesian inference. As such, it is a probabilistic method for finding the minimum of a function, often over a quite large domains. For the historical reasons given above, the algorithm uses terms such as cooling, temperature, and acceptance probabilities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.Sphere",
    "page": "Docstrings",
    "title": "Optim.Sphere",
    "category": "type",
    "text": "Spherical manifold {|x| = 1}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.Stiefel",
    "page": "Docstrings",
    "title": "Optim.Stiefel",
    "category": "type",
    "text": "N x n matrices with orthonormal columns, i.e. such that X\'X = I. Special cases: N x 1 = sphere, N x N = orthogonal/unitary group. Stiefel() uses a SVD algorithm to compute the retraction. To use a Cholesky-based orthogonalization (faster but less stable), use Stiefel(:CholQR). When the function to be optimized depends only on the subspace X*X\' spanned by a point X in the Stiefel manifold, first-order optimization algorithms are equivalent for the Stiefel and Grassmann manifold, so there is no separate Grassmann manifold.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim._updateA!",
    "page": "Docstrings",
    "title": "Optim._updateA!",
    "category": "function",
    "text": "Update storage A[i,j] for NGMRES\n\n\n\n\n\nUpdate storage A[i,j] for OACCEL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim._updateQ!",
    "page": "Docstrings",
    "title": "Optim._updateQ!",
    "category": "function",
    "text": "Update storage Q[i,j] and Q[j,i] for NGMRES\n\n\n\n\n\nUpdate storage Q[i,j] and Q[j,i] for OACCEL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim._updateb!",
    "page": "Docstrings",
    "title": "Optim._updateb!",
    "category": "function",
    "text": "Update storage b[i] for NGMRES\n\n\n\n\n\nUpdate storage b[i] for OACCEL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim._updateη",
    "page": "Docstrings",
    "title": "Optim._updateη",
    "category": "function",
    "text": "Update value η for NGMRES\n\n\n\n\n\nUpdate value η for OACCEL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim._updateξ!",
    "page": "Docstrings",
    "title": "Optim._updateξ!",
    "category": "function",
    "text": "Update storage ξ[i,:] for NGMRES\n\n\n\n\n\nUpdate storage ξ[i,:] for OACCEL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.barrier_grad!",
    "page": "Docstrings",
    "title": "Optim.barrier_grad!",
    "category": "function",
    "text": "barrier_grad!(bgrad, bounds, x, bstate, μ)\nbarrier_grad!(gsx, gsc, bounds, x, sx, sc, μ)\n\nCompute the gradient of the barrier penalty at (x,sx,sc), where x is the current position, sx are the coordinate slack variables, and sc are the linear/nonlinear slack variables. bounds::ConstraintBounds holds the parsed bounds.\n\nThe result is added to gsx, and gsc, so these vectors need to be initialized appropriately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.barrier_value",
    "page": "Docstrings",
    "title": "Optim.barrier_value",
    "category": "function",
    "text": "barrier_value(constraints, state) -> val\nbarrier_value(bounds, x, sx, sc, μ) -> val\n\nCompute the value of the barrier penalty at the current state, or at a position (x,sx,sc), where x is the current position, sx are the coordinate slack variables, and sc are the linear/nonlinear slack variables. bounds holds the parsed bounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.equality_grad!",
    "page": "Docstrings",
    "title": "Optim.equality_grad!",
    "category": "function",
    "text": "equality_grad!(gx, gbstate, bounds, x, c, J, bstate)\n\nCompute the gradient of equality_violation, storing the result in gx (an array) and gbstate::BarrierStateVars.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.equality_violation",
    "page": "Docstrings",
    "title": "Optim.equality_violation",
    "category": "function",
    "text": "equality_violation([f=identity], bounds, x, c, bstate) -> val\nequality_violation([f=identity], bounds, x, c, sx, sc, λx, λc, λxE, λcE) -> val\n\nCompute the sum of f(v_i), where v_i = λ_i*(target - observed) measures the difference between the current state and the equality-constrained state. bounds::ConstraintBounds holds the parsed bounds. x is the current position, sx are the coordinate slack variables, and sc are the linear/nonlinear slack variables. c holds the values of the linear-nonlinear constraints, and the λ arguments hold the Lagrange multipliers for x, sx, sc, and c respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.hessianI",
    "page": "Docstrings",
    "title": "Optim.hessianI",
    "category": "function",
    "text": "hessianI(x, constraints, λcI, μ) -> h\n\nCompute the hessian at x of the λcI-weighted sum of user-supplied constraint functions for just the inequalities.  This also includes contributions from any variables with bounds at 0, since those do not cause introduction of a slack variable. Other (nonzero) box constraints do not contribute to h, because the hessian of x_i is zero. (They contribute indirectly via their slack variables.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.initialize_μ_λ!",
    "page": "Docstrings",
    "title": "Optim.initialize_μ_λ!",
    "category": "function",
    "text": "initialize_μ_λ!(state, bounds, μ0=:auto, β=0.01)\ninitialize_μ_λ!(state, bounds, (Hobj,HcI), μ0=:auto, β=0.01)\n\nPick μ and λ to ensure that the equality constraints are satisfied locally (at the current state.x), and that the initial gradient including the barrier would be a descent direction for the problem without the barrier (μ = 0). This ensures that the search isn\'t pushed out of the basin of the user-supplied initial guess.\n\nUpon entry, the objective function gradient, constraint values, and constraint jacobian must be set in state.g, state.c, and state.J respectively. If you also wish to ensure that the projection of Hessian is minimally-perturbed along the initial gradient, supply the hessian of the objective (Hobj) and\n\nHcI = ∑_i (σ_i/s_i)∇∇ c_{Ii}\n\nfor the constraints. This can be obtained as\n\nHcI = hessianI(state.x, constraints, 1./state.slack_c)\n\nYou can manually specify μ by supplying a numerical value for μ0. Whether calculated algorithmically or specified manually, the values of λ are set using the chosen μ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.isfeasible",
    "page": "Docstrings",
    "title": "Optim.isfeasible",
    "category": "function",
    "text": "isfeasible(constraints, state) -> Bool\nisfeasible(constraints, x, c) -> Bool\nisfeasible(constraints, x) -> Bool\nisfeasible(bounds, x, c) -> Bool\n\nReturn true if point x is feasible, given the constraints which specify bounds lx, ux, lc, and uc. x is feasible if\n\nlx[i] <= x[i] <= ux[i]\nlc[i] <= c[i] <= uc[i]\n\nfor all possible i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.isinterior",
    "page": "Docstrings",
    "title": "Optim.isinterior",
    "category": "function",
    "text": "isinterior(constraints, state) -> Bool\nisinterior(constraints, x, c) -> Bool\nisinterior(constraints, x) -> Bool\nisinterior(bounds, x, c) -> Bool\n\nReturn true if point x is on the interior of the allowed region, given the constraints which specify bounds lx, ux, lc, and uc. x is in the interior if\n\nlx[i] < x[i] < ux[i]\nlc[i] < c[i] < uc[i]\n\nfor all possible i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Optim.userλ",
    "page": "Docstrings",
    "title": "Optim.userλ",
    "category": "function",
    "text": "userλ(λcI, bounds) -> λ\n\nAccumulates λcI into a vector λ ordered as the user-supplied constraint functions c. Upper and lower bounds are summed, weighted by σ. The resulting λ includes an overall negative sign so that this becomes the coefficient for the user-supplied hessian.\n\nThis is relevant only for the inequalities. If you want the λ for just the equalities, you can use λ[bounds.ceq] = λcE for a zero-filled λ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Optim.@add_linesearch_fieldsOptim.@brenttraceOptim.@defOptim.@goldensectiontraceOptim.@initial_linesearchOptim.@pack_SAMINOptim.@pack_SAMIN!Optim.@unpack_SAMINOptim.AbstractBarrierStateOptim.AbstractConstrainedOptimizerOptim.AbstractNGMRESOptim.AbstractOptimizerOptim.AbstractOptimizerStateOptim.AcceleratedGradientDescentOptim.AcceleratedGradientDescentStateOptim.AdaptiveParametersOptim.AffineSimplexerOptim.BFGSOptim.BFGSStateOptim.BarrierLineSearchOptim.BarrierLineSearchGradOptim.BarrierStateVarsOptim.BrentOptim.ConjugateGradientOptim.ConjugateGradientStateOptim.ConstrainedOptimizerOptim.FirstOrderOptimizerOptim.FixedParametersOptim.FlatOptim.FminboxOptim.GoldenSectionOptim.GradientDescentOptim.GradientDescentStateOptim.HfOptim.IPNewtonOptim.IPNewtonStateOptim.IPOptimizerOptim.InverseDiagonalOptim.KrylovTrustRegionOptim.KrylovTrustRegionStateOptim.LBFGSOptim.LBFGSStateOptim.ManifoldOptim.ManifoldObjectiveOptim.MaximizationWrapperOptim.MomentumGradientDescentOptim.MomentumGradientDescentStateOptim.MultivariateOptimizationResultsOptim.NGMRESOptim.NGMRESStateOptim.NMParametersOptim.NelderMeadOptim.NelderMeadStateOptim.NewtonOptim.NewtonStateOptim.NewtonTrustRegionOptim.NewtonTrustRegionStateOptim.NonDifferentiableOptim.OACCELOptim.OnceDifferentiableOptim.OptimOptim.OptimizationResultsOptim.OptimizationStateOptim.OptimizationTraceOptim.OptionsOptim.ParticleSwarmOptim.ParticleSwarmStateOptim.PowerManifoldOptim.ProductManifoldOptim.SAMINOptim.SecondOrderOptimizerOptim.SimplexerOptim.SimulatedAnnealingOptim.SimulatedAnnealingStateOptim.SphereOptim.StiefelOptim.Stiefel_CholQROptim.Stiefel_SVDOptim.TwiceDifferentiableOptim.TwiceDifferentiableConstraintsOptim.UnivariateOptimizationResultsOptim.UnivariateOptimizerOptim.ZerothOrderOptimizerOptim.ZerothOrderStateOptim._bvOptim._lagrangian_linefuncOptim._lagrangian_lineslopeOptim._updateA!Optim._updateQ!Optim._updateb!Optim._updateηOptim._updateξ!Optim.abs_tolOptim.add_default_opts!Optim.after_while!Optim.alphaxOptim.assess_convergenceOptim.backtrack_constrainedOptim.backtrack_constrained_gradOptim.barrier_boxOptim.barrier_combinedOptim.barrier_grad!Optim.barrier_methodOptim.barrier_valueOptim.bsv_seedOptim.cEOptim.cbarOptim.centroidOptim.centroid!Optim.cg_steihaug!Optim.check_hard_case_candidateOptim.check_kwargsOptim.common_trace!Optim.compute_cost!Optim.constant_temperatureOptim.convergedOptim.default_convergence_assessmentOptim.default_neighbor!Optim.default_optionsOptim.equality_grad!Optim.equality_grad_var!Optim.equality_grad_λ!Optim.equality_violationOptim.estimate_maxstepOptim.evalOptim.evalgradOptim.evalhessOptim.f_abschangeOptim.f_callsOptim.f_convergedOptim.f_increasedOptim.f_relchangeOptim.f_tolOptim.f_traceOptim.fallback_methodOptim.function_barrierOptim.g_callsOptim.g_convergedOptim.g_norm_traceOptim.g_residualOptim.g_tolOptim.get_innerOptim.get_mu_1Optim.get_mu_2Optim.get_mu_3Optim.get_mu_4Optim.get_swarm_stateOptim.gfOptim.gradient_convergence_assessmentOptim.grid_searchOptim.h_callsOptim.has_deprecated_fminboxOptim.hessianIOptim.hessianI!Optim.hessian_projectionsOptim.housekeeping!Optim.includeOptim.initial_convergenceOptim.initial_muOptim.initial_stateOptim.initialize_μ_λ!Optim.is_smaller_epsOptim.isfeasibleOptim.isinteriorOptim.iteration_limit_reachedOptim.iterationsOptim.jacobianEOptim.jacobianIOptim.jacobianxOptim.lagrangianOptim.lagrangian_fg!Optim.lagrangian_fgvec!Optim.lagrangian_linefuncOptim.lagrangian_linefunc!Optim.lagrangian_lineslopeOptim.lagrangian_lineslope!Optim.lagrangian_vecOptim.lambdaEOptim.lambdaIOptim.limit_X!Optim.limits_boxOptim.linesearch_anonOptim.log_temperatureOptim.loginfOptim.lower_boundOptim.ls_update!Optim.maxdiffOptim.maximizeOptim.maximizerOptim.methodOptim.minimizerOptim.minimumOptim.mulhessOptim.ngmres_oaccel_warnedOptim.nlprecon_post_accelerate!Optim.nlprecon_post_optimize!Optim.nmobjectiveOptim.optimizeOptim.p_sq_normOptim.pack_vecOptim.pack_vec!Optim.parametersOptim.perform_linesearch!Optim.pick_best_fOptim.pick_best_xOptim.precondprep!Optim.precondprepbox!Optim.print_headerOptim.project_tangentOptim.project_tangent!Optim.promote_objtypeOptim.qrregularize!Optim.rel_tolOptim.resOptim.reset_search_direction!Optim.retractOptim.retract!Optim.setslack!Optim.sigmaOptim.simplexerOptim.slackOptim.slopealphaOptim.solve_slack!Optim.solve_step!Optim.solve_tr_subproblem!Optim.traceOptim.trace!Optim.twoloop!Optim.unpack_vec!Optim.update!Optim.update_fg!Optim.update_g!Optim.update_gtilde!Optim.update_h!Optim.update_state!Optim.update_swarm!Optim.update_swarm_params!Optim.upper_boundOptim.userλOptim.x_abschangeOptim.x_convergedOptim.x_lower_traceOptim.x_tolOptim.x_traceOptim.x_upper_trace"
},

]}
