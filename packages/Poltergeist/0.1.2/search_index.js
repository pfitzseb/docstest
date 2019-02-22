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
    "text": "(Image: Build Status) (Image: Coverage Status)Poltergeist is a package for quick, accurate and abstract approximation of statistical properties of one-dimensional chaotic dynamical systems.It treats chaotic systems through the framework of spectral methods (i.e. transfer operator-based approaches to dynamical systems) and is numerically implemented via spectral methods (e.g. Fourier and Chebyshev). For the latter, Poltergeist relies on and closely interfaces with the adaptive function approximation package ApproxFun.  The use of highly accurate Fourier and Chebyshev approximations means spectrally fast convergence: one can calculate acims to 15 digits of accuracy in a fraction of a second.As an example, take your favourite Markov interval map and give it digital form:using Poltergeist, ApproxFun\nd = Segment(0,1)\nf1 = 2x+sin(2pi*x)/6; f2(x) = 2-2x\nf = MarkovMap([f1,f2],[0..0.5,0.5..1])\nf(0.25), f\'(0.25)<!–-want to plot Markov Map–->Similarly, take a circle map, or maps defined by modulo or inverse:c = CircleMap(x->4x + sin(2pi*x)/2pi,PeriodicInterval(0,1))\nlanford = modulomap(x->2x+x*(1-x)/2,0..1) # Or call lanford()\ndoubling = MarkovMap([x->x/2,x->(x+1)/2],[0..0.5,0.5..1],dir=Reverse) # or doubling(0..1)<!–-For better performance, use generic (vs anonymous) functions and (if using a complicated function) supply a derivative:complicatedfun(x) = 3x+sum(2^(-33/8)m)\n--->\n\nCalling ```Transfer``` on an ```AbstractMarkovMap``` type automatically creates an ApproxFun ```Operator```, with which you can do (numerically) all the kinds of things one expects from linear operators on function spaces:\njulia L = Transfer(f) f0 = Fun(x->sin(3pix),d) #ApproxFun function f1 = Lf0 g = ((2I-L)\\f0)\' det(I-4L) # Fredholm determinantusing Plots scatter(eigvals(L,80))<img src=https://github.com/johnwormell/Poltergeist.jl/raw/master/images/eigvals.png width=500>\n\n\nIn particular, you can solve for many statistical properties, many of which Poltergeist has built-in commands for. Most of these commands allow you to use the ```MarkovMap``` directly (bad, zero caching between uses), transfer operator (caches transfer operator entries, usually the slowest step), or the ```SolutionInv``` operator (caches QR factorisation as well).\njulia K = SolutionInv(L) ρ = acim(K) @test ρ == K\\Fun(one,d) birkhoffvar(K,Fun(x->x^2,d)) birkhoffcov(K,Fun(x->x^2,d),Fun(identity,d)) dρ = linearresponse(K,Fun(sinpi,d))plot(ρ) ε = 0.05 plot!(ρ + εdρ,title=\"Linear response\") plot!(acim(perturb(M,sinpi,ϵ))) ``` <!–- TODO: plot!(linearresponse(L,Fun(x->x(1-x),d))) –-> <img src=https://github.com/johnwormell/Poltergeist.jl/raw/master/images/acim.png width=500>"
},

{
    "location": "#Publications-1",
    "page": "Readme",
    "title": "Publications",
    "category": "section",
    "text": "This package is based on academic work. If you find this package useful in your work, please kindly cite as appropriate:C. Wormell (2017), Spectral Galerkin methods for transfer operators in uniformly expanding dynamics (preprint)<!–-* features of ApproxFun: S. Olver & A. Townsend (2014), A practical framework for infinite-dimensional linear algebra, Proceedings of the 1st First Workshop for High Performance Technical Computing in Dynamic Languages, 57–62 (article, preprint) –->Literature on ApproxFun.<!–-C. Wormell (2017 in preparation), Fast numerical methods for intermittent systems_____________A map f on [-1,1] is C-expanding if acos◦f◦cos is uniformly expanding. Most uniformly expanding maps are C-expanding, or if not there is always a conjugate or iterate that is.–->"
},

]}
