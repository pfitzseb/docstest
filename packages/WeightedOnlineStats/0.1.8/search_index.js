var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WeightedOnlineStats.jl-1",
    "page": "Readme",
    "title": "WeightedOnlineStats.jl",
    "category": "section",
    "text": "(Image: Build Status)An extension of OnlineStatsBase.jl that supports proper statistical weighting and arbitrary numerical precision."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using WeightedOnlineStats\n\nvalues = rand(100)\nweights = rand(100)\n\n# fit using arrays:\no1 = fit!(WeightedMean, values, weights)\n\n# fit using an iterator that returns a tuple (value, weight):\no2 = fit!(WeightedMean, zip(values, weights))\n\n# fit single values at a time:\no3 = WeightedMean()\nfor i in 1:length(values)\n    fit!(o3, values[i], weights[i])\nend\n\nmean(o1)\nmean(o2)\nmean(o3)"
},

{
    "location": "#Statistics-1",
    "page": "Readme",
    "title": "Statistics",
    "category": "section",
    "text": "WeightedOnlineStats.jl currently implements the following Statistics:WeightedSum\nWeightedMean\nWeightedVariance\nWeightedCovMatrix\nWeightedHist"
},

{
    "location": "autodocs/#WeightedOnlineStats.WeightedCovMatrix",
    "page": "Docstrings",
    "title": "WeightedOnlineStats.WeightedCovMatrix",
    "category": "type",
    "text": "WeightedCovMatrix(T = Float64)\n\nWeighted covariance matrix, tracked as a matrix of type T.\n\nExample:\n\no = fit!(WeightedCovMatrix(), rand(100, 4), rand(100))\nsum(o)\nmean(o)\nvar(o)\nstd(o)\ncov(o)\ncor(o)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedOnlineStats.WeightedHist",
    "page": "Docstrings",
    "title": "WeightedOnlineStats.WeightedHist",
    "category": "type",
    "text": "Weighted Historgram\n\nCalculate a histogram of weighted data.\n\nExample\n\n# A weighted histogram with 4 bins:\no = fit!(WeightedHist(4), rand(1000), rand(1000))\n\nmean(o)\nvar(o)\nstd(o)\nmedian(o)\nquantile(o, [0, 0.25, 0.5, 0.25, 1.0])\nextrema(o)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedOnlineStats.WeightedMean",
    "page": "Docstrings",
    "title": "WeightedOnlineStats.WeightedMean",
    "category": "type",
    "text": "WeightedMean(T = Float64)\n\nSimple weighted mean, tracked as type T.\n\nExample:\n\no = fit!(WeightedMean(), rand(100), rand(100))\nsum(o)\nmean(o)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedOnlineStats.WeightedSum",
    "page": "Docstrings",
    "title": "WeightedOnlineStats.WeightedSum",
    "category": "type",
    "text": "WeightedSum(T = Float64)\n\nSimple weighted sum, tracked as type T.\n\nExample:\n\no = fit!(WeightedSum(), rand(100), rand(100))\nsum(o)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedOnlineStats.WeightedVariance",
    "page": "Docstrings",
    "title": "WeightedOnlineStats.WeightedVariance",
    "category": "type",
    "text": "WeightedVariance(T = Float64)\n\nSimple weighted variance, tracked as type T.\n\nExample:\n\no = fit!(WeightedVariance(), rand(100), rand(100))\nsum(o)\nmean(o)\nvar(o)\nstd(o)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WeightedOnlineStats.WeightedAdaptiveBinsWeightedOnlineStats.WeightedCovMatrixWeightedOnlineStats.WeightedHistWeightedOnlineStats.WeightedHistAlgorithmWeightedOnlineStats.WeightedMeanWeightedOnlineStats.WeightedOnlineStatWeightedOnlineStats.WeightedOnlineStatsWeightedOnlineStats.WeightedSumWeightedOnlineStats.WeightedVarianceWeightedOnlineStats.areaWeightedOnlineStats.cdfWeightedOnlineStats.corWeightedOnlineStats.countsWeightedOnlineStats.covWeightedOnlineStats.edgesWeightedOnlineStats.evalWeightedOnlineStats.fit!WeightedOnlineStats.includeWeightedOnlineStats.make_algWeightedOnlineStats.meanWeightedOnlineStats.meanweightWeightedOnlineStats.medianWeightedOnlineStats.merge!WeightedOnlineStats.midpointsWeightedOnlineStats.nvarsWeightedOnlineStats.pdfWeightedOnlineStats.quantileWeightedOnlineStats.split_candidatesWeightedOnlineStats.stdWeightedOnlineStats.valueWeightedOnlineStats.weightsum"
},

]}
