var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Divergences.jl-1",
    "page": "Readme",
    "title": "Divergences.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)Divergences.jl is a Julia package that makes it easy to evaluate divergence measures between two vectors. The package allows calculating the gradient  and the diagonal of the Hessian of several divergences. These divergences are used to good effect by the  MomentBasedEstimators package."
},

{
    "location": "#Supported-divergences-1",
    "page": "Readme",
    "title": "Supported divergences",
    "category": "section",
    "text": "The package defines an abstract Divergence type with the following suptypes:Kullback-Leibler divergence KullbackLeibler\nChi-square distance ChiSquared\nReverse Kullback-Leibler divergence ReverseKullbackLeibler\nCressie-Read divergences CressieReadThese divergences differ from the equivalent ones defined in the Distances package because they are normalized. Also, the package provides methods for calculating their gradient and the (diagonal elements of the) Hessian matrix.The constructors for the types above are straightforwardKullbackLeibler()\nChiSqaured()\nReverseKullbackLeibler()The CressieRead type define a family of divergences indexed by a parameter alpha. The constructor for CressieRead isCR(::Real)The Hellinger divergence is obtained by CR(-1/2). For a certain value of alpha, CressieRead correspond to a divergence that has a specific type defined. For instance CR(1) is equivalent to ChiSquared although the underlying code for evaluation and calculation of the gradient and Hessian are different. Three versions of each divergence in the above list are implemented currently. A vanilla version, a modified version, and a fully modified version. These modifications extend the domain of the divergence.The modified version takes an additional argument that specifies the point at which the divergence is modified by a convex extension. ModifiedKullbackLeibler(theta::Real)\nModifiedReverseKullbackLeibler(theta::Real)\nModifiedCressieRead(alpha::Real, theta::Real)Similarly, the fully modified version takes two additional arguments that specify the points at which the divergence is modified by a convex extensions.FullyModifiedKullbackLeibler(phi::Real, theta::Real)\nFullyModifiedReverseKullbackLeibler(phi::Real, theta::Real)\nFullyModifiedCressieRead(alpha::Real, phi::Real, theta::Real)"
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Divergence-between-two-vectors-1",
    "page": "Readme",
    "title": "Divergence between two vectors",
    "category": "section",
    "text": "Each divergence corresponds to a divergence type. You can always compute a certain divergence between two vectors using the following syntaxd = evaluate(div, x, y)Here, div is an instance of a divergence type. For example, the type for Kullback Leibler divergence is KullbackLeibler (more divergence types are described in some details in what follows), then the Kullback Leibler divergence between x and y can be computedd = evaluate(KullbackLeibler(), x, y)We can also calculate the diverge between the vector x and the unit vectorr = evaluate(KullbackLeibler(), x)The Divergence type is a subtype of PreMetric defined in the Distances package. As such, the divergences can be evaluated row-wise and column-wise for X::Matrix and Y::Matrix. rowise(div, X, Y)colwise(div, X, Y)"
},

{
    "location": "#Gradient-of-the-divergence-1",
    "page": "Readme",
    "title": "Gradient of the divergence",
    "category": "section",
    "text": "To calculate the gradient of  div::Divergence with respect to xAbstractArrayFloat64 1 the gradient method can be usedg = gradient(div, x, y)or through its in-place versiongradient!(Array(Float64, size(x)), div, x, y)"
},

{
    "location": "#Hessian-of-the-divergence-1",
    "page": "Readme",
    "title": "Hessian of the divergence",
    "category": "section",
    "text": "The hessian method calculate the Hessian of the divergence with respect to x h = hessian(div, x, y)Its in-place variant is also definedhessian!(Array(Float64, size(x)), div, x, y)Notice that the Hessian of a divergence is sparse, where the diagonal entries are the only ones different from zero. For this reason, hessian(div, x, y) return an Array{Float64,1} with the diagonal entries of the hessian."
},

{
    "location": "#List-of-divergences-1",
    "page": "Readme",
    "title": "List of divergences",
    "category": "section",
    "text": "[To be added]"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Divergences.CRDivergences.ChiSquaredDivergences.CressieReadDivergences.DivergenceDivergences.DivergencesDivergences.FMCRDivergences.FMKLDivergences.FMRKLDivergences.FullyModifiedCressieReadDivergences.FullyModifiedKullbackLeiblerDivergences.FullyModifiedReverseKullbackLeiblerDivergences.HDDivergences.KLDivergences.KullbackLeiblerDivergences.MCRDivergences.MKLDivergences.MRKLDivergences.ModifiedCressieReadDivergences.ModifiedKullbackLeiblerDivergences.ModifiedReverseKullbackLeiblerDivergences.RKLDivergences.ReverseKullbackLeiblerDivergences.cueDivergences.evalDivergences.evaluateDivergences.gradientDivergences.gradient!Divergences.hdDivergences.hessianDivergences.hessian!Divergences.include"
},

]}
