var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ProximalAlgorithms.jl-1",
    "page": "Readme",
    "title": "ProximalAlgorithms.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Proximal algorithms (also known as \"splitting\" algorithms or methods) for nonsmooth optimization in Julia.This package can be used in combination with ProximalOperators.jl (providing first-order primitives, i.e. gradient and proximal mapping, for numerous cost functions) and AbstractOperators.jl (providing several linear and nonlinear operators) to formulate and solve a wide spectrum of nonsmooth optimization problems."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.add(\"ProximalAlgorithms\")"
},

{
    "location": "#Implemented-Algorithms-1",
    "page": "Readme",
    "title": "Implemented Algorithms",
    "category": "section",
    "text": "Algorithm Function Reference\nAsymmetric forward-backward-adjoint algorithm AFBA [[10]][latafat_2017]\nChambolle-Pock primal dual algorithm ChambollePock [[4]][chambolle_2011]\nDouglas-Rachford splitting algorithm DRS [[1]][eckstein_1989]\nForward-backward splitting (i.e. proximal gradient) algorithm FBS [[2]][tseng2008], [[3]][beck2009]\nVũ-Condat primal-dual algorithm VuCondat [[6]][vu2013], [[7]][condat2013]\nZeroFPR (L-BFGS) ZeroFPR [[9]][themelis_2016]\nPANOC (L-BFGS) PANOC [[11]][stella_2017]"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Contributions are welcome in the form of issues notification or pull requests. We recommend looking at already implemented algorithms, or following the template, to get inspiration on how to structure new ones."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[[1]][eckstein_1989] Eckstein, Bertsekas, On the Douglas-Rachford Splitting Method and the Proximal Point Algorithm for Maximal Monotone Operators, Mathematical Programming, vol. 55, no. 1, pp. 293-318 (1989).[[2]][tseng_2008] Tseng, On Accelerated Proximal Gradient Methods for Convex-Concave Optimization (2008).[[3]][beck_2009] Beck, Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, SIAM Journal on Imaging Sciences, vol. 2, no. 1, pp. 183-202 (2009).[[4]][chambolle_2011] Chambolle, Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, Journal of Mathematical Imaging and Vision, vol. 40, no. 1, pp. 120-145 (2011).[[5]][boyd_2011] Boyd, Parikh, Chu, Peleato, Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, Foundations and Trends in Machine Learning, vol. 3, no. 1, pp. 1-122 (2011).[[6]][vu_2013] Vũ, A splitting algorithm for dual monotone inclusions involving cocoercive operators, Advances in Computational Mathematics, vol. 38, no. 3, pp. 667-681 (2013).[[7]][condat_2013] Condat, A primal–dual splitting method for convex optimization involving Lipschitzian, proximable and linear composite terms, Journal of Optimization Theory and Applications, vol. 158, no. 2, pp 460-479 (2013).[[8]][parikh_2014] Parikh, Boyd, Proximal Algorithms, Foundations and Trends in Optimization, vol. 1, no. 3, pp. 127-239 (2014).[[9]][themelis_2016] Themelis, Stella, Patrinos, Forward-backward envelope for the sum of two nonconvex functions: Further properties and nonmonotone line-search algorithms, arXiv:1606.06256 (2016).[[10]][latafat_2017] Latafat, Patrinos, Asymmetric forward–backward–adjoint splitting for solving monotone inclusions involving three operators, Computational Optimization and Applications, vol. 68, no. 1, pp. 57-93 (2017).[[11]][stella_2017] Stella, Themelis, Sopasakis, Patrinos, A simple and efficient algorithm for nonlinear model predictive control, 56th IEEE Conference on Decision and Control (2017).[eckstein1989]: https://link.springer.com/article/10.1007/BF01581204 [tseng2008]: http://www.mit.edu/~dimitrib/PTseng/papers/apgm.pdf [beck2009]: http://epubs.siam.org/doi/abs/10.1137/080716542 [chambolle2011]: https://link.springer.com/article/10.1007/s10851-010-0251-1 [boyd2011]: http://www.nowpublishers.com/article/Details/MAL-016 [parikh2014]: http://www.nowpublishers.com/article/Details/OPT-003 [themelis2016]: https://arxiv.org/abs/1606.06256 [latafat2017]: https://link.springer.com/article/10.1007/s10589-017-9909-6 [stella2017]: https://doi.org/10.1109/CDC.2017.8263933 [condat2013]: https://link.springer.com/article/10.1007/s10957-012-0245-9 [vu_2013]: https://link.springer.com/article/10.1007/s10444-011-9254-8"
},

{
    "location": "autodocs/#ProximalAlgorithms.AFBA",
    "page": "Docstrings",
    "title": "ProximalAlgorithms.AFBA",
    "category": "function",
    "text": "Asymmetric forward-backward-adjoint algorithm\n\nAFBA(x0, y0; kwargs)\n\nSolves convex optimization problems of the form\n\nminimize f(x) + g(x) + (h □ l)(L x),\n\nwhere f is smooth, g and h are possibly nonsmooth and l is strongly convex. Symbol □ denotes the infimal convolution, and L is a linear mapping. Points x0 and y0 are the initial primal and dual iterates, respectively.\n\nKeyword arguments are as follows:\n\nf: smooth, convex function (default: zero)\ng: convex function (possibly nonsmooth, default: zero)\nh: convex function (possibly nonsmooth, default: zero)\nl: strongly convex function (possibly nonsmooth, default: indicator of {0})\nL: linear operator (default: identity)\nbetaQ: Lipschitz constant of gradient of f (default: zero)\nbetaR: Lipschitz constant of gradient of l conjugate (default: zero)\ngamma1: stepsize corresponding to the primal updates (default: see [1] for each case)\ngamma2: stepsize corresponding to the dual updates (default: see [1] for each case)\ntheta: nonnegative algorithm parameter (default: \'1\')\nmu: algorithm parameter in the range 0,1\ntol: primal-dual termination tolerance (default: 1e-5)\nmaxit: maximum number of iterations (default: 10000)\nverbose, verbosity level (default: 1)\nverbose_freq, verbosity frequency for verbose = 1 (default: 100)\n\nThe iterator implements Algorithm 3 of [1] with constant stepsize (α_n=λ) for several prominant special cases:\n\nθ = 2          ==>   Corresponds to the Vu-Condat Algorithm [2,3].\nθ = 1, μ=1\nθ = 0, μ=1\nθ ∈ [0,∞), μ=0\n\nSee [1, Figure 1] for other special cases and relation to other algorithms.\n\n[1] Latafat, Patrinos. \"Asymmetric forward–backward–adjoint splitting for solving monotone inclusions involving three operators\"  Computational Optimization and Applications, pages 1–37, 2017. [2] Condat. \"A primal–dual splitting method for convex optimization involving Lipschitzian, proximable and linear composite terms\" Journal of Optimization Theory and Applications 158.2 (2013): 460-479. [3] Vũ. \"A splitting algorithm for dual monotone inclusions involving cocoercive operators\"\" Advances in Computational Mathematics, 38(3), pp.667-681.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProximalAlgorithms.ChambollePock",
    "page": "Docstrings",
    "title": "ProximalAlgorithms.ChambollePock",
    "category": "function",
    "text": "Chambolle-Pock primal-dual algorithm\n\nChambollePock(x0, y0; kwargs)\n\nSolves convex optimization problems of the form\n\nminimize g(x) + (h □ l)(L x).\n\nwhere g and h are possibly nonsmooth and l is strongly convex. Symbol □ denotes the infimal convolution, and L is a linear mapping. Points x0 and y0 are the initial primal and dual iterates, respectively.\n\nSee documentation of AFBA for the list of keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProximalAlgorithms.FBS",
    "page": "Docstrings",
    "title": "ProximalAlgorithms.FBS",
    "category": "function",
    "text": "Forward-backward splitting\n\nFBS(x0; kwargs...)\n\nSolves a problem of the form\n\nminimize fs(As*x) + fq(Aq*x) + g(x)\n\nwhere fs is a smooth function, fq is a quadratic function, g is a proximable function and As, Aq are linear operators. Parameter x0 is the initial point. Keyword arguments specify the problem and additional options as follows:\n\nfs, smooth function (default: identically zero function)\nfq, quadratic function (default: identically zero function)\ng, proximable function (default: identically zero function)\nAs, linear operator (default: identity)\nAq, linear operator (default: identity)\ngamma, stepsize (default: unspecified, determine automatically)\nmaxit, maximum number of iteration (default: 10000)\ntol, halting tolerance on the fixed-point residual (default: 1e-4)\nadaptive, adaptively adjust gamma (default: false if gamma is provided)\nfast, enables accelerated method (default: false)\nverbose, verbosity level (default: 1)\nverbose_freq, verbosity frequency for verbose = 1 (default: 100)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProximalAlgorithms.VuCondat",
    "page": "Docstrings",
    "title": "ProximalAlgorithms.VuCondat",
    "category": "function",
    "text": "Vũ-Condat primal-dual algorithm\n\nVuCondat(x0, y0; kwargs)\n\nSolves convex optimization problems of the form\n\nminimize f(x) + g(x) + (h □ l)(L x).\n\nwhere f is smooth, g and h are possibly nonsmooth and l is strongly convex.\n\nSymbol □ denotes the infimal convolution, and L is a linear mapping. Points x0 and y0 are the initial primal and dual iterates, respectively.\n\nSee documentation of AFBA for the list of keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ProximalAlgorithms.AFBAProximalAlgorithms.AFBAIteratorProximalAlgorithms.ChambollePockProximalAlgorithms.DRSProximalAlgorithms.DRSIteratorProximalAlgorithms.FBSProximalAlgorithms.FBSIteratorProximalAlgorithms.IdentityProximalAlgorithms.PANOCProximalAlgorithms.PANOCIteratorProximalAlgorithms.ProximalAlgorithmProximalAlgorithms.ProximalAlgorithmsProximalAlgorithms.TemplateProximalAlgorithms.TemplateIteratorProximalAlgorithms.VuCondatProximalAlgorithms.ZeroProximalAlgorithms.ZeroFPRProximalAlgorithms.ZeroFPRIteratorProximalAlgorithms.convergedProximalAlgorithms.displayProximalAlgorithms.doneProximalAlgorithms.evalProximalAlgorithms.includeProximalAlgorithms.initialize!ProximalAlgorithms.iterate!ProximalAlgorithms.maxitProximalAlgorithms.run!ProximalAlgorithms.verbose"
},

]}
