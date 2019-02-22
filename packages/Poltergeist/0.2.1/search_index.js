var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Poltergeist.jl-1",
    "page": "Readme",
    "title": "Poltergeist.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Poltergeist is a package for quick, accurate and abstract approximation of statistical properties of one-dimensional chaotic dynamical systems.It treats chaotic systems through the framework of spectral methods (i.e. transfer operator-based approaches to dynamical systems) and is numerically implemented via spectral methods (e.g. Fourier and Chebyshev). For the latter, Poltergeist relies on and closely interfaces with the adaptive function approximation package ApproxFun.  The use of highly accurate Fourier and Chebyshev approximations means spectrally fast convergence: one can calculate acims to 15 digits of accuracy in a fraction of a second.As an example, take your favourite Markov interval map and give it digital form:using Poltergeist, ApproxFun\nd = 0..1.\nf1 = 2x+sin(2pi*x)/6; f2(x) = 2-2x\nf = MarkovMap([f1,f2],[0..0.5,0.5..1])\nf(0.25), f\'(0.25)<!–-want to plot Markov Map–->Similarly, take a circle map, or maps defined by modulo or inverse:c = CircleMap(x->4x + sin(2pi*x)/2pi,PeriodicSegment(0,1))\nlanford = modulomap(x->2x+x*(1-x)/2,0..1) # Or call lanford()\ndoubling = MarkovMap([x->x/2,x->(x+1)/2],[0..0.5,0.5..1],dir=Reverse) # or doubling(0..1)<!–-For better performance, use generic (vs anonymous) functions and (if using a complicated function) supply a derivative:complicatedfun(x) = 3x+sum(2^(-33/8)m)\n--->\n\nCalling ```Transfer``` on an ```AbstractMarkovMap``` type automatically creates an ApproxFun ```Operator```, with which you can do (numerically) all the kinds of things one expects from linear operators on function spaces:\njulia L = Transfer(f) f0 = Fun(x->sin(3pix),d) #ApproxFun function f1 = Lf0 g = ((2I-L)\\f0)\' det(I-4L) # Fredholm determinantusing Plots scatter(eigvals(L,80))<img src=https://github.com/johnwormell/Poltergeist.jl/raw/master/images/eigvals.png width=500>\n\n\nIn particular, you can solve for many statistical properties, many of which Poltergeist has built-in commands for. Most of these commands allow you to use the ```MarkovMap``` directly (bad, zero caching between uses), transfer operator (caches transfer operator entries, usually the slowest step), or the ```SolutionInv``` operator (caches QR factorisation as well).\njulia K = SolutionInv(L) ρ = acim(K) @test ρ == K\\Fun(one,d) birkhoffvar(K,Fun(x->x^2,d)) birkhoffcov(K,Fun(x->x^2,d),Fun(identity,d)) dρ = linearresponse(K,Fun(sinpi,d))plot(ρ) ε = 0.05 plot!(ρ + εdρ,title=\"Linear response\") plot!(acim(perturb(M,sinpi,ϵ))) ``` <!–- TODO: plot!(linearresponse(L,Fun(x->x(1-x),d))) –-> <img src=https://github.com/johnwormell/Poltergeist.jl/raw/master/images/acim.png width=500>"
},

{
    "location": "#Publications-1",
    "page": "Readme",
    "title": "Publications",
    "category": "section",
    "text": "This package is based on academic work. If you find this package useful in your work, please kindly cite as appropriate:C. Wormell (2017), Spectral Galerkin methods for transfer operators in uniformly expanding dynamics (preprint)<!–-* features of ApproxFun: S. Olver & A. Townsend (2014), A practical framework for infinite-dimensional linear algebra, Proceedings of the 1st First Workshop for High Performance Technical Computing in Dynamic Languages, 57–62 (article, preprint) –->Literature on ApproxFun.<!–-C. Wormell (2017 in preparation), Fast numerical methods for intermittent systems_____________A map f on [-1,1] is C-expanding if acos◦f◦cos is uniformly expanding. Most uniformly expanding maps are C-expanding, or if not there is always a conjugate or iterate that is.–->"
},

{
    "location": "autodocs/#Poltergeist.AR_process",
    "page": "Docstrings",
    "title": "Poltergeist.AR_process",
    "category": "function",
    "text": "AR_process(f,A::Fun)\n\nCalculate coefficients of Gaussian AR process with the same autocorrelation function as A under the map f.\n\nSee Appendix A.2 of Wormell, C.L. & Gottwald, G.A. \'On the Validity of Linear Response Theory in High-Dimensional Deterministic Dynamical Systems\' (2018).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.HofbauerDomain",
    "page": "Docstrings",
    "title": "Poltergeist.HofbauerDomain",
    "category": "type",
    "text": "HofbauerDomain\n\nA Domain object annotated with a depth index for HofbauerExtensions. It is not a Domain subtype itself as it should only be used in the context of Hofbauer extensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.HofbauerPoint",
    "page": "Docstrings",
    "title": "Poltergeist.HofbauerPoint",
    "category": "type",
    "text": "HofbauerPoint(x, graphind)\n\nConstructs a HofbauerPoint, representing point x on the graphindth domain of a Hofbauer extension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.MA_process",
    "page": "Docstrings",
    "title": "Poltergeist.MA_process",
    "category": "function",
    "text": "MA_process(f,A::Fun)\n\nCalculate coefficients of Gaussian MA process with the same autocorrelation function as A under the map f.\n\nSee Appendix A.2 of Wormell, C.L. & Gottwald, G.A. \'On the Validity of Linear Response Theory in High-Dimensional Deterministic Dynamical Systems\' (2018).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.MarkovMap",
    "page": "Docstrings",
    "title": "Poltergeist.MarkovMap",
    "category": "type",
    "text": "MarkovMap(branches::Vector, domain, rangedomain)\n\nGenerate a computer representation of a full-branch uniformly-expanding interval map domain → rangedomain using a vector describing the branches of the map.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.Transfer",
    "page": "Docstrings",
    "title": "Poltergeist.Transfer",
    "category": "function",
    "text": "Transfer(m::AbstractMarkovMap)\n\nCreate a CachedOperator of a ConcreteTransfer operator encoding the transfer operator of m.\n\nCaching is used for speed, as entries of the transfer operator are most efficiently calculated whole columns at a time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.acim",
    "page": "Docstrings",
    "title": "Poltergeist.acim",
    "category": "function",
    "text": "acim(L)\n\nOutput a Fun object giving the acim of the associated map\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.birkhoffcov",
    "page": "Docstrings",
    "title": "Poltergeist.birkhoffcov",
    "category": "function",
    "text": "birkhoffcov(L, A::Fun, B::Fun)\n\nOutput covariance of CLT-normalised Birkhoff sums of A and B under the map\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.birkhoffvar",
    "page": "Docstrings",
    "title": "Poltergeist.birkhoffvar",
    "category": "function",
    "text": "birkhoffvar(L, A::Fun)\n\nOutput diffusion coefficient of A under the map using Green-Kubo formula\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.branches",
    "page": "Docstrings",
    "title": "Poltergeist.branches",
    "category": "function",
    "text": "branches(m)\n\nReturn the branches of the map m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.correlationsum",
    "page": "Docstrings",
    "title": "Poltergeist.correlationsum",
    "category": "function",
    "text": "correlationsum(L, A::Fun, ρ=acim(L))\n\nOutput resolvent of transfer operator applied to ρ*(A - ∫A dρ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.covariancefunction",
    "page": "Docstrings",
    "title": "Poltergeist.covariancefunction",
    "category": "function",
    "text": "cfA = covariancefunction(L, A, n)\n\nCompute the lag-covariance function against transfer operator L for observable A for n time steps in each direction. Specifically, the (k+1)th entry is the expectation of A A∘f^(k).\n\n\n\n\n\ncf = covariancefunction(L, A; tol = eps(A))\n\nChoose n so that the covariance declines to a given tolerance\n\n\n\n\n\ncfA, cfB = covariancefunction(L, A, B, n)\n\nCompute the lag-covariance function against transfer operator L between observables A and B for n time steps in each direction. Specifically, the (k+1)th entry of cfA is the expectation of B A∘f^(k) and vice versa for cfB.\n\n\n\n\n\ncfA, cfB = covariancefunction(L, A, B; tol=eps(A*B))\n\nChooses n so that the covariance declines to a given tolerance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.doubling",
    "page": "Docstrings",
    "title": "Poltergeist.doubling",
    "category": "function",
    "text": "doubling(d = Interval(0,1.))\n\nReturns the full-branch interval map on domain d with 2 equally-sized branches.\n\nSee also: tupling, lanford\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.eachbranchindex",
    "page": "Docstrings",
    "title": "Poltergeist.eachbranchindex",
    "category": "function",
    "text": "eachbranchindex(m)\n\nReturn an iterator giving the indices of the branches of m\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.hofbauerextension",
    "page": "Docstrings",
    "title": "Poltergeist.hofbauerextension",
    "category": "function",
    "text": "hofbauerextension(m,basedomains;maxdepth=100,forcereturn=trues(length(basedomains)))\n\nGenerates a Hofbauer extension of m starting from basedomains, which may be a single domain.\n\nThe keyword maxdepth says how deep the Hofbauer extension should go, and forcereturn sets whether a return to given members of basedomains should  forced if possible.\n\nFor example, in the case of f(x) = mod(2x,1), if basedomains is set to Interval(0.,0.3) then Interval(0.,0.5) might map to Interval(0.,1.)for a given map ifforcereturn=falsebut would map to Interval(0,0.3) and Interval(0.3,1) if forcereturn=true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.lanford",
    "page": "Docstrings",
    "title": "Poltergeist.lanford",
    "category": "function",
    "text": "lanford(T=Float64)\n\nReturn the Lanford map, with type encoding T.\n\nSee also: tupling, doubling\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.linearresponse",
    "page": "Docstrings",
    "title": "Poltergeist.linearresponse",
    "category": "function",
    "text": "linearresponse(L, X::Fun)\n\nOutput a Fun object giving the first-order change in the acim of the map under perturbation X\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.lyapunov",
    "page": "Docstrings",
    "title": "Poltergeist.lyapunov",
    "category": "function",
    "text": "lyapunov(f, r=acim(f), sp=Space(rangedomain(f)))\n\nCalculate Lyapunov exponent associated with f\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.maphb",
    "page": "Docstrings",
    "title": "Poltergeist.maphb",
    "category": "function",
    "text": "maphb(b::AbstractBranch, x)\n\nMaps point x according to b. For NeutralBranches calculates the return map out of domain(b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.modulomap",
    "page": "Docstrings",
    "title": "Poltergeist.modulomap",
    "category": "function",
    "text": "modulomap(f, D, R=dom; diff= autodiff(f,dom))\n\nOutput MarkovMap or CircleMap m: D → R such that m(x) = f(x) mod R.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.nbranches",
    "page": "Docstrings",
    "title": "Poltergeist.nbranches",
    "category": "function",
    "text": "nbranches(m)\n\nReturn the number of branches of m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.perturb",
    "page": "Docstrings",
    "title": "Poltergeist.perturb",
    "category": "function",
    "text": "perturb(d, X, ϵ)\n\nConstruct a self-map on domain d: x ↦ x + ϵ X(x)\n\n\n\n\n\nperturb(m::AbstractMarkovMap, X, ϵ)\n\nOutput perturbation of m: x ↦ m(x) + ϵ X(m(x))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.tupling",
    "page": "Docstrings",
    "title": "Poltergeist.tupling",
    "category": "function",
    "text": "tupling(k::Int, d = Interval(0,1.))\n\nReturns the full-branch interval map on domain d with k equally-sized branches.\n\nSee also: doubling, lanford\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Poltergeist.zero_to",
    "page": "Docstrings",
    "title": "Poltergeist.zero_to",
    "category": "function",
    "text": "zero_to(A::Fun, ρ::Fun=uniform(space(A)))\n\nOutput ρ*(A - ∫A dρ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Poltergeist...Poltergeist.AR_processPoltergeist.AbstractBranchPoltergeist.AbstractCircleMapPoltergeist.AbstractIntervalMapPoltergeist.AbstractMarkovMapPoltergeist.AbstractTransferPoltergeist.BackSumPoltergeist.BackSumEvalPoltergeist.BasisFunPoltergeist.BasisFunIntPoltergeist.CircleMapPoltergeist.ComposedCircleMapPoltergeist.ComposedMapPoltergeist.ComposedMarkovMapPoltergeist.ConcreteTransferPoltergeist.DirectionPoltergeist.ExpandingBranchPoltergeist.ExpandingBranchDerivativePoltergeist.ExpandingBranchDerivativeInversePoltergeist.ExpandingBranchInversePoltergeist.ForwardPoltergeist.ForwardDirectionPoltergeist.FunPoltergeist.FunctionDerivativePoltergeist.FwdCircleMapPoltergeist.FwdExpandingBranchPoltergeist.FwdOffsetPoltergeist.GeneralIntervalPoltergeist.HGraphsPoltergeist.HofbauerDomainPoltergeist.HofbauerPointPoltergeist.InducedMapPoltergeist.InterpolationNodePoltergeist.IntervalPoltergeist.IntervalMapPoltergeist.LyapContainerPoltergeist.MA_processPoltergeist.MarkovMapPoltergeist.MarkovMapDerivativePoltergeist.MatrixPoltergeist.NeutralBranchPoltergeist.PeriodicSegmentPoltergeist.PoltergeistPoltergeist.PureLaurentPoltergeist.RevCircleMapPoltergeist.RevExpandingBranchPoltergeist.RevOffsetPoltergeist.ReversePoltergeist.ReverseDirectionPoltergeist.SimpleBranchedMapPoltergeist.SolutionInvPoltergeist.SolutionInvWrapperPoltergeist.TransferPoltergeist.TransferBSFunctionPoltergeist.TransferCallPoltergeist.TransferIntBSFunctionPoltergeist._NIPoltergeist._hofbauerdestinationPoltergeist._hofbauersourcePoltergeist.acimPoltergeist.approx_inPoltergeist.approx_issubsetPoltergeist.atol_isapproxPoltergeist.autodiffPoltergeist.autodiff_dualPoltergeist.backsumrecursionPoltergeist.basic_newtonPoltergeist.birkhoffcovPoltergeist.birkhoffvarPoltergeist.branchPoltergeist.branchesPoltergeist.branchindtypePoltergeist.chebyTkPoltergeist.chebyTk_intPoltergeist.complengthPoltergeist.containsnfpPoltergeist.containstransferPoltergeist.correlationsumPoltergeist.covariancefunctionPoltergeist.coveringintervalPoltergeist.cumsumPoltergeist.disc_newtonPoltergeist.domain_guessPoltergeist.domain_modPoltergeist.domain_newtonPoltergeist.doublingPoltergeist.eachbranchindexPoltergeist.eigsPoltergeist.evalPoltergeist.forwardmodulomapPoltergeist.fourierCSkPoltergeist.fourierCSk_intPoltergeist.getbasisfunPoltergeist.getbasisfun_intPoltergeist.getbranchindPoltergeist.haswrapperstructurePoltergeist.hofbauerextensionPoltergeist.includePoltergeist.inducePoltergeist.interval_guessPoltergeist.interval_modPoltergeist.interval_newtonPoltergeist.lanfordPoltergeist.lanford_brkPoltergeist.lanford_dv0Poltergeist.lanford_dv1Poltergeist.lanford_v0Poltergeist.lanford_v1Poltergeist.linearresponsePoltergeist.logMA_processPoltergeist.lyapunovPoltergeist.mapDPoltergeist.mapLPoltergeist.mapPPoltergeist.map_nPoltergeist.maphbPoltergeist.maphbDPoltergeist.maphbPPoltergeist.maphbinvPoltergeist.maphbinvDPoltergeist.maphbinvPPoltergeist.mapintervalPoltergeist.mapinvPoltergeist.mapinvDPoltergeist.mapinvPPoltergeist.markovmapPoltergeist.maxrangedomainPoltergeist.modulomapPoltergeist.nbranchesPoltergeist.ncoverPoltergeist.neutralfixedpointsPoltergeist.nneutralPoltergeist.perturbPoltergeist.rangedomainPoltergeist.resizecolstops!Poltergeist.reversemodulomapPoltergeist.samplablePoltergeist.setcolstops!Poltergeist.showPoltergeist.timehistPoltergeist.timehist_initialvaluePoltergeist.timeseriesPoltergeist.timeseries_initialvaluePoltergeist.towerextend!Poltergeist.towerwalk!Poltergeist.transferPoltergeist.transfer_getindexPoltergeist.transferbranchPoltergeist.transferbranch_intPoltergeist.transferbranch_int_edgesPoltergeist.transferfunctionPoltergeist.transferfunction_intPoltergeist.transferfunction_nodesPoltergeist.tuplingPoltergeist.uniformPoltergeist.unsafe_callPoltergeist.unsafe_invPoltergeist.unsafe_mapDPoltergeist.unsafe_mapPPoltergeist.unsafe_mapinvPoltergeist.unsafe_mapinvDPoltergeist.unsafe_mapinvPPoltergeist.zero_to"
},

]}
