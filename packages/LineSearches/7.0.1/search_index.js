var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LineSearches-1",
    "page": "Readme",
    "title": "LineSearches",
    "category": "section",
    "text": "(Image: Build Status) (Image: Codecov branch) [![][docs-stable-img]][docs-stable-url]"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "This package provides an interface to line search algorithms implemented in Julia. The code was originally written as part of Optim, but has now been separated out to its own package."
},

{
    "location": "#Available-line-search-algorithms-1",
    "page": "Readme",
    "title": "Available line search algorithms",
    "category": "section",
    "text": "In the docs we show how to choose between the line search algorithms in Optim.HagerZhang (Taken from the Conjugate Gradient implementation by Hager and Zhang, 2006)\nMoreThuente (From the algorithm in More and Thuente, 1994)\nBackTracking (Described in Nocedal and Wright, 2006)\nStrongWolfe (Nocedal and Wright)\nStatic (Takes the proposed initial step length.)"
},

{
    "location": "#Available-initial-step-length-procedures-1",
    "page": "Readme",
    "title": "Available initial step length procedures",
    "category": "section",
    "text": "The package provides some procedures to calculate the initial step length that is passed to the line search algorithm. See the docs for its usage in Optim.InitialPrevious (Use the step length from the previous optimization iteration)\nInitialStatic (Use the same initial step length each time)\nInitialHagerZhang (Taken from Hager and Zhang, 2006)\nInitialQuadratic (Propose initial step length based on a quadratic interpolation)\nInitialConstantChange (Propose initial step length assuming constant change in step length)"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "For more details and options, see the documentation[STABLE][docs-stable-url] — most recently tagged version of the documentation.\n[LATEST][docs-latest-url] — in-development version of the documentation."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "W. W. Hager and H. Zhang (2006) \"Algorithm 851: CG_DESCENT, a conjugate gradient method with guaranteed descent.\" ACM Transactions on Mathematical Software 32: 113-137.\nMoré, Jorge J., and David J. Thuente. \"Line search algorithms with guaranteed sufficient decrease.\" ACM Transactions on Mathematical Software (TOMS) 20.3 (1994): 286-307.\nNocedal, Jorge, and Stephen Wright. \"Numerical optimization.\" Springer Science & Business Media, 2006.[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://julianlsolvers.github.io/LineSearches.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://julianlsolvers.github.io/LineSearches.jl/stable"
},

{
    "location": "autodocs/#LineSearches.BackTracking",
    "page": "Docstrings",
    "title": "LineSearches.BackTracking",
    "category": "type",
    "text": "BackTracking specifies a backtracking line-search that uses a quadratic or cubic interpolant to determine the reduction in step-size. E.g., if f(α) > f(0) + c₁ α f\'(0), then the quadratic interpolant of f(0), f\'(0), f(α) has a minimiser α\' in the open interval (0, α). More strongly, there exists a factor ρ = ρ(c₁) such that α\' ≦ ρ α.\n\nThis is a modification of the algorithm described in Nocedal Wright (2nd ed), Sec. 3.5.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.HagerZhang",
    "page": "Docstrings",
    "title": "LineSearches.HagerZhang",
    "category": "type",
    "text": "Conjugate gradient line search implementation from:   W. W. Hager and H. Zhang (2006) Algorithm 851: CG_DESCENT, a     conjugate gradient method with guaranteed descent. ACM     Transactions on Mathematical Software 32: 113–137.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.InitialConstantChange",
    "page": "Docstrings",
    "title": "LineSearches.InitialConstantChange",
    "category": "type",
    "text": "Constant first-order change approximation to determine initial step length.\n\n** This requires that the optimization algorithm stores dphi0 from the previous iteration ** (dphi0previous = real(dot(∇f{k-1}, s_{k-1})), where s is the step direction.\n\nThis is meant for methods that do not produce well-scaled search directions, such as Gradient Descent and (variations of) Conjugate Gradient methods. See the discussion in Nocedal and Wright, 2nd ed, p. 59 on \"Initial Step Length\"\n\nThis procedure have several arguments, with the following defaults.\n\nα0       = 1.0.         The initial step size at the first iteration.\nαmin     = 1e-12.       The minimum initial step size. (Default arbitrary).\nαmax     = 1.0.         The maximum initial step size.\nρ        = 0.25.        Maximum decrease from previous iteration, αinit ≥ α_{k-1}. (Default arbitrary).\nsnap2one = (0.75, Inf). Set all values within this (closed) interval to 1.0. (Default arbitrary).\n\nIf αmax ≠ 1.0, then you should consider to ensure that snap2one[2] < αmax.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.InitialHagerZhang",
    "page": "Docstrings",
    "title": "LineSearches.InitialHagerZhang",
    "category": "type",
    "text": "Initial step size algorithm from   W. W. Hager and H. Zhang (2006) Algorithm 851: CG_DESCENT, a     conjugate gradient method with guaranteed descent. ACM     Transactions on Mathematical Software 32: 113–137.\n\nIf α0 is NaN, then procedure I0 is called at the first iteration, otherwise, we select according to procedure I1-2, with starting value α0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.InitialPrevious",
    "page": "Docstrings",
    "title": "LineSearches.InitialPrevious",
    "category": "type",
    "text": "Use previous step length as initial guess, within the bounds [alphamin, alphamax]\n\nIf state.alpha is NaN, then return fallback value is.alpha\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.InitialQuadratic",
    "page": "Docstrings",
    "title": "LineSearches.InitialQuadratic",
    "category": "type",
    "text": "Quadratic interpolation for initial step length guess.\n\nThis is meant for methods that do not produce well-scaled search directions, such as Gradient Descent and (variations of) Conjugate Gradient methods. See the discussion around Nocedal and Wright, 2nd ed, (3.60).\n\nThis procedure have several arguments, with the following defaults.\n\nα0       = 1.0.         The initial step size at the first iteration.\nαmin     = 1e-12.       The minimum initial step size. (Default arbitrary).\nαmax     = 1.0.         The maximum initial step size.\nρ        = 0.25.        Maximum decrease from previous iteration, αinit ≥ α_{k-1}. (Default arbitrary).\nsnap2one = (0.75, Inf). Set all values within this (closed) interval to 1.0. (Default arbitrary).\n\nIf αmax ≠ 1.0, then you should consider to ensure that snap2one[2] < αmax.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.InitialStatic",
    "page": "Docstrings",
    "title": "LineSearches.InitialStatic",
    "category": "type",
    "text": "Provide static initial step length.\n\nKeyword alpha corresponds to static step length, default is 1.0. If keyword scaled = true, then the initial step length is scaled with the l_2 norm of the step direction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.MoreThuente",
    "page": "Docstrings",
    "title": "LineSearches.MoreThuente",
    "category": "type",
    "text": "The line search implementation from:   Moré, Jorge J., and David J. Thuente     Line search algorithms with guaranteed sufficient decrease.     ACM Transactions on Mathematical Software (TOMS) 20.3 (1994): 286-307.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.Static",
    "page": "Docstrings",
    "title": "LineSearches.Static",
    "category": "type",
    "text": "Static: defines a static linesearch which returns the initial step length.\n\nStatic is intended for methods with well-scaled updates; i.e. Newton, on well-behaved problems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LineSearches.StrongWolfe",
    "page": "Docstrings",
    "title": "LineSearches.StrongWolfe",
    "category": "type",
    "text": "StrongWolfe: This linesearch algorithm guarantees that the step length satisfies the (strong) Wolfe conditions. See Nocedal and Wright - Algorithms 3.5 and 3.6\n\nThis algorithm is mostly of theoretical interest, users should most likely use MoreThuente, HagerZhang or BackTracking.\n\nParameters:  (and defaults)\n\nc_1 = 1e-4: Armijo condition\nc_2 = 0.9 : second (strong) Wolfe condition\nρ = 2.0 : bracket growth\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LineSearches.@pack_BackTrackingLineSearches.@pack_BackTracking!LineSearches.@pack_HagerZhangLineSearches.@pack_HagerZhang!LineSearches.@pack_InitialHagerZhangLineSearches.@pack_InitialHagerZhang!LineSearches.@pack_InitialPreviousLineSearches.@pack_InitialPrevious!LineSearches.@pack_InitialQuadraticLineSearches.@pack_InitialQuadratic!LineSearches.@pack_InitialStaticLineSearches.@pack_InitialStatic!LineSearches.@pack_MoreThuenteLineSearches.@pack_MoreThuente!LineSearches.@pack_StrongWolfeLineSearches.@pack_StrongWolfe!LineSearches.@unpack_BackTrackingLineSearches.@unpack_HagerZhangLineSearches.@unpack_InitialHagerZhangLineSearches.@unpack_InitialPreviousLineSearches.@unpack_InitialQuadraticLineSearches.@unpack_InitialStaticLineSearches.@unpack_MoreThuenteLineSearches.@unpack_StrongWolfeLineSearches.ALPHALineSearches.BARRIERCOEFLineSearches.BETALineSearches.BISECTLineSearches.BRACKETLineSearches.BackTrackingLineSearches.DEFAULTDELTALineSearches.DEFAULTSIGMALineSearches.FINALLineSearches.GRADIENTLineSearches.HagerZhangLineSearches.ITERLineSearches.InitialConstantChangeLineSearches.InitialHagerZhangLineSearches.InitialPreviousLineSearches.InitialQuadraticLineSearches.InitialStaticLineSearches.LINESEARCHLineSearches.LineSearchExceptionLineSearches.LineSearchesLineSearches.MoreThuenteLineSearches.PARAMETERSLineSearches.SEARCHDIRLineSearches.SECANT2LineSearches.StaticLineSearches.StrongWolfeLineSearches.UPDATELineSearches._hzI0LineSearches._hzI12LineSearches.bisect!LineSearches.cstepLineSearches.display_nextbitLineSearches.evalLineSearches.get_finiteLineSearches.includeLineSearches.interpolateLineSearches.make_ϕLineSearches.make_ϕ_dϕLineSearches.make_ϕ_dϕ_ϕdϕLineSearches.make_ϕ_ϕdϕLineSearches.make_ϕdϕLineSearches.one64LineSearches.satisfies_wolfeLineSearches.secantLineSearches.secant2!LineSearches.update!LineSearches.zoom"
},

]}
