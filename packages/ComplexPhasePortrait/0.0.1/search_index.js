var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ComplexPhasePortrait.jl-1",
    "page": "Readme",
    "title": "ComplexPhasePortrait.jl",
    "category": "section",
    "text": "(Image: Build Status)This package is a Julia implementation of the phase portrait ideas presented in Elias Wegert\'s book \"Visual Complex Functions\"."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "From the Julia command prompt:Pkg.clone(\"git://github.com/JuliaHolomorphic/ComplexPhasePortrait.jl.git\")"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "There is so far one exported function, portrait, and here I will try to detail its use. First we need function data over a grid.using ComplexPhasePortrait\n\nnx = 1000\nx = range(-1, stop=1, length=nx)\nZ = x\' .+ reverse(x)*im\n\nf = z -> (z - 0.5im)^2 * (z + 0.5+0.5im)/z\nfz = f.(Z)Now a basic phase plot.img = portrait(fz)(Image: proper phase plot)Now for a basic plot using NIST coloring.img = portrait(fz, ctype=\"nist\")(Image: nist coloring)Lines of constant phase are given byimg = portrait(fz, PTstepphase)(Image: constant phase)Lines of constant modulus are given byimg = portrait(fz, PTstepmod)(Image: constant modulus)Finally, a conformal grid is given byimg = portrait(fz, PTcgrid)(Image: conformal grid)"
},

{
    "location": "autodocs/#ComplexPhasePortrait.baseColorMap",
    "page": "Docstrings",
    "title": "ComplexPhasePortrait.baseColorMap",
    "category": "function",
    "text": "Color map for complex phase portrait with 600 elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComplexPhasePortrait.phase",
    "page": "Docstrings",
    "title": "ComplexPhasePortrait.phase",
    "category": "function",
    "text": "ComplexPhasePortrait.phase(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nComplexPhasePortrait.phase(attributes::Attributes, args...; attributes...)\n\nLike ComplexPhasePortrait.phase(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComplexPhasePortrait.phase!",
    "page": "Docstrings",
    "title": "ComplexPhasePortrait.phase!",
    "category": "function",
    "text": "ComplexPhasePortrait.phase!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nComplexPhasePortrait.phase!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nComplexPhasePortrait.phase!(attributes::Attributes, args...; attributes...)\n\nLike ComplexPhasePortrait.phase!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nComplexPhasePortrait.phase!(attributes::Attributes, args...; attributes...)\n\nLike ComplexPhasePortrait.phase!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComplexPhasePortrait.sawfun",
    "page": "Docstrings",
    "title": "ComplexPhasePortrait.sawfun",
    "category": "function",
    "text": "Sawtooth function over reals with period dx onto [a,b].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComplexPhasePortrait.stepfun",
    "page": "Docstrings",
    "title": "ComplexPhasePortrait.stepfun",
    "category": "function",
    "text": "Integer step function with period 1 such that [0,1]⟶[1,nmax].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ComplexPhasePortrait...ComplexPhasePortrait.ComplexPhasePortraitComplexPhasePortrait.PTcgridComplexPhasePortrait.PTproperComplexPhasePortrait.PTstepmodComplexPhasePortrait.PTstepphaseComplexPhasePortrait.PhaseComplexPhasePortrait.PhasePlotComplexPhasePortrait.PortraitTypeComplexPhasePortrait._rangeComplexPhasePortrait.baseArgsComplexPhasePortrait.baseColorMapComplexPhasePortrait.brightenComplexPhasePortrait.evalComplexPhasePortrait.includeComplexPhasePortrait.phaseComplexPhasePortrait.phase!ComplexPhasePortrait.phaseToImage!ComplexPhasePortrait.phaseplotComplexPhasePortrait.phaseplot!ComplexPhasePortrait.portraitComplexPhasePortrait.sawfunComplexPhasePortrait.setupPhaseComplexPhasePortrait.stepfun"
},

]}
