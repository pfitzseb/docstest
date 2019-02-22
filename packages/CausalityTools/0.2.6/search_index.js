var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CausalityTools-1",
    "page": "Readme",
    "title": "CausalityTools",
    "category": "section",
    "text": "Build status Documentation\n(Image: Build Status) (Image: )CausalityTools.jl provides tools for nonparametric detection of causal relationships between dynamical variables based on time series of observations.In addition, we provide functions to approximate the transfer operator (Perron-Frobenius operator), and from it, invariant distributions over the discretized state space (embedding)."
},

{
    "location": "#What-can-I-do-with-CausalityTools?-1",
    "page": "Readme",
    "title": "What can I do with CausalityTools?",
    "category": "section",
    "text": "The package is equally well-suited both for the study of causal directionality for experimental data, and for studying dynamical systems from a more formal context. The workflow integrates nicely with DynamicalSystems.jl.Check out the documentation (work in progress!) for more information! Please note that the package is under active development, and that breaking changes may occur until version 1.0 is released. "
},

{
    "location": "#Package-structure-1",
    "page": "Readme",
    "title": "Package structure",
    "category": "section",
    "text": "CausalityTools.jl brings together the following packages into one environment:package functionality version build\nStateSpaceReconstruction.jl Fully flexible state space reconstructions (embeddings), partitioning routines (variable-width rectangular, and triangulations), and partition refinement (equal-volume splitting of  simplices). 0.3.1 (Image: Build Status)\nTimeseriesSurrogates.jl Generate surrogate data from time series. 0.2.1 (Image: Build Status)\nTransferEntropy.jl Transfer entropy estimators. 0.3.1 (Image: Build Status)\nPerronFrobenius.jl Transfer (Perron-Frobenius) operator estimators. 0.2.2 (Image: Build Status)\nSimplices.jl Exact simplex intersections in N dimensions. 0.2.2 (Image: Build Status)\nCrossMappings.jl Exact simplex intersections in N dimensions. 0.2.0 (Image: Build Status)"
},

{
    "location": "#Wrappers-for-common-use-cases-1",
    "page": "Readme",
    "title": "Wrappers for common use cases",
    "category": "section",
    "text": "Standard wrappers for the causality detection tools are available for direct application to time series. If you\'re starting out, these wrappers cover the most common use cases.For more in-depth analysis, the package comes with state space reconstruction (embedding) and discretization routines, which can also be provided seamlessly to the causality estimators.Be careful with using the wrappers: for any real application, you should know what you\'re doing and utilize the underlying functions which give full control over the embeddings and analysis parameters."
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "To install the package, run the following lines in the Julia consoleusing Pkg\nPkg.add(\"CausalityTools\")"
},

]}
