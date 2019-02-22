var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: NaNMath) (Image: NaNMath)"
},

{
    "location": "#NaNMath-1",
    "page": "Readme",
    "title": "NaNMath",
    "category": "section",
    "text": "Implementations of basic math functions which return NaN instead of throwing a DomainError.Example:import NaNMath\nNaNMath.log(-100) # NaN\nNaNMath.pow(-1.5,2.3) # NaNIn addition this package provides functions that aggregate arrays and ignore elements that are NaN. The following functions are implemented:sum\nmaximum\nminimum\nextrema\nmean\nvar\nstd\nmin\nmaxExample:using NaNMath; nm=NaNMath\nnm.sum([1., 2., NaN]) # result: 3.0"
},

{
    "location": "autodocs/#NaNMath.extrema",
    "page": "Docstrings",
    "title": "NaNMath.extrema",
    "category": "function",
    "text": "NaNMath.extrema(A)\n\nArgs:\n\nA: An array of floating point numbers\n\nReturns:\n\nReturns the minimum and maximum of all elements in the array, ignoring NaN\'s.\n\nExamples:\n\nusing NaNMath as nm\nnm.extrema([1., 2., NaN]) # result: 1.0, 2.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.max",
    "page": "Docstrings",
    "title": "NaNMath.max",
    "category": "function",
    "text": "NaNMath.max(x, y)\n\nCompute the IEEE 754-2008 compliant maximum of x and y. As of version 0.6 of Julia, Base.max(x, y) will return NaN if x or y is NaN. NaNMath.max favors values over NaN, and will return whichever x or y is not NaN in that case.\n\nExamples\n\njulia> NaNMath.max(NaN, 0.0)\n0.0\n\njulia> NaNMath.max(1, 2)\n2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.maximum",
    "page": "Docstrings",
    "title": "NaNMath.maximum",
    "category": "function",
    "text": "NaNMath.maximum(A)\n\nArgs:\n\nA: An array of floating point numbers\n\nReturns:\n\nReturns the maximum of all elements in the array, ignoring NaN\'s.\n\nExamples:\n\nusing NaNMath as nm\nnm.maximum([1., 2., NaN]) # result: 2.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.mean",
    "page": "Docstrings",
    "title": "NaNMath.mean",
    "category": "function",
    "text": "NaNMath.mean(A)\n\nArgs:\n\nA: An array of floating point numbers\n\nReturns:\n\nReturns the arithmetic mean of all elements in the array, ignoring NaN\'s.\n\nExamples:\n\nusing NaNMath as nm\nnm.mean([1., 2., NaN]) # result: 1.5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.mean_count",
    "page": "Docstrings",
    "title": "NaNMath.mean_count",
    "category": "function",
    "text": "Returns a tuple of the arithmetic mean of all elements in the array, ignoring NaN\'s, and the number of non-NaN values in the array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.min",
    "page": "Docstrings",
    "title": "NaNMath.min",
    "category": "function",
    "text": "NaNMath.min(x, y)\n\nCompute the IEEE 754-2008 compliant minimum of x and y. As of version 0.6 of Julia, Base.min(x, y) will return NaN if x or y is NaN. NanMath.min favors values over NaN, and will return whichever x or y is not NaN in that case.\n\nExamples\n\njulia> NanMath.min(NaN, 0.0)\n0.0\n\njulia> NaNMath.min(1, 2)\n1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.minimum",
    "page": "Docstrings",
    "title": "NaNMath.minimum",
    "category": "function",
    "text": "NaNMath.minimum(A)\n\nArgs:\n\nA: An array of floating point numbers\n\nReturns:\n\nReturns the minimum of all elements in the array, ignoring NaN\'s.\n\nExamples:\n\nusing NaNMath as nm\nnm.minimum([1., 2., NaN]) # result: 1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.std",
    "page": "Docstrings",
    "title": "NaNMath.std",
    "category": "function",
    "text": "NaNMath.std(A)\n\nArgs:\n\nA: A one dimensional array of floating point numbers\n\nReturns:\n\nReturns the standard deviation of a vector A. The algorithm will return an estimator of the  generative distribution\'s standard deviation under the assumption that each entry of v is an IID drawn from that generative distribution. This computation is  equivalent to calculating \nsqrt(sum((v - mean(v)).^2) / (length(v) - 1)). NaN values are ignored.\n\nExamples:\n\nusing NaNMath as nm\nnm.std([1., 2., NaN]) # result: 0.7071067811865476\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.sum",
    "page": "Docstrings",
    "title": "NaNMath.sum",
    "category": "function",
    "text": "NaNMath.sum(A)\n\nArgs:\n\nA: An array of floating point numbers\n\nReturns:\n\nReturns the sum of all elements in the array, ignoring NaN\'s.\n\nExamples:\n\nusing NaNMath as nm\nnm.sum([1., 2., NaN]) # result: 3.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaNMath.var",
    "page": "Docstrings",
    "title": "NaNMath.var",
    "category": "function",
    "text": "NaNMath.var(A)\n\nArgs:\n\nA: A one dimensional array of floating point numbers\n\nReturns:\n\nReturns the sample variance of a vector A. The algorithm will return an estimator of the  generative distribution\'s variance under the assumption that each entry of v is an IID drawn from that generative distribution. This computation is  equivalent to calculating \nsum((v - mean(v)).^2) / (length(v) - 1). NaN values are ignored.\n\nExamples:\n\nusing NaNMath as nm\nnm.var([1., 2., NaN]) # result: 0.5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NaNMath.NaNMathNaNMath.acosNaNMath.acoshNaNMath.asinNaNMath.atanhNaNMath.cosNaNMath.evalNaNMath.extremaNaNMath.includeNaNMath.lgammaNaNMath.libmNaNMath.logNaNMath.log10NaNMath.log1pNaNMath.log2NaNMath.maxNaNMath.maximumNaNMath.meanNaNMath.mean_countNaNMath.minNaNMath.minimumNaNMath.powNaNMath.sinNaNMath.sqrtNaNMath.stdNaNMath.sumNaNMath.tanNaNMath.var"
},

]}
