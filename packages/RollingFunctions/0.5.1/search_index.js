var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RollingFunctions.jl-1",
    "page": "Readme",
    "title": "RollingFunctions.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Roll-a-function-over-data,-run-a-statistic-along-a-[weighted]-data-window.-1",
    "page": "Readme",
    "title": "Roll a function over data, run a statistic along a [weighted] data window.",
    "category": "section",
    "text": ""
},

{
    "location": "#Copyright-2017-2018-by-Jeffrey-Sarnoff.-Released-under-the-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright © 2017-2018 by Jeffrey Sarnoff.  Released under the MIT License.",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#works-with-unweighted-data-1",
    "page": "Readme",
    "title": "works with unweighted data",
    "category": "section",
    "text": "data that is a simple vector\ndata that is a CartesianIndexed vector"
},

{
    "location": "#works-with-weights-1",
    "page": "Readme",
    "title": "works with weights",
    "category": "section",
    "text": "weights given as a simple vector\nweights given as a kind of StatsBase.AbstractWeights"
},

{
    "location": "#examples-of-use-1",
    "page": "Readme",
    "title": "examples of use",
    "category": "section",
    "text": "with a simple vector\nwith a DataFrame column\nwith a TimeSeries column\nwith your own function"
},

{
    "location": "#Rolling-a-function-over-data-1",
    "page": "Readme",
    "title": "Rolling a function over data",
    "category": "section",
    "text": "With ndata = length(data), using a window of length windowsize, rolling a function results in a vector of ndata - windowsize + 1 elements.  So there will be obtained windowsize - 1 fewer values than there are data values. All exported functions named with the prefix roll behave this way.julia> data = collect(1.0f0:5.0f0); print(data)\nFloat32[1.0, 2.0, 3.0, 4.0, 5.0]\njulia> windowsize = 3;\n\njulia> result = rollmean(data, windowsize); print(result)\nFloat32[2.0, 3.0, 4.0]julia> weights = normalize([1.0f0, 2.0f0, 4.0f0])\n3-element Array{Float32,1}:\n 0.21821788\n 0.43643576\n 0.8728715 \n \njulia> result = rollmean(data, windowsize, weights); print(result)\nFloat32[1.23657, 1.74574, 2.25492]"
},

{
    "location": "#Running-a-function-over-data-1",
    "page": "Readme",
    "title": "Running a function over data",
    "category": "section",
    "text": "To obtain the same number of output data values as are given, the initial windowsize - 1 values output must be generated outside of the rolling behavior.  This is accomplished by tapering the needed values – using the same function, rolling it over successively smaller window sizes.  All exported functions named with the prefix run behave this way.julia> data = collect(1.0f0:5.0f0); print(data)\nFloat32[1.0, 2.0, 3.0, 4.0, 5.0]\njulia> windowsize = 3;\n\njulia> result = runmean(data, windowsize); print(result)\nFloat32[1.0, 1.5, 2.0, 3.0, 4.0]julia> weights = normalize([1.0f0, 2.0f0, 4.0f0]);\n \njulia> result = runmean(data, windowsize, weights); print(result)\nFloat32[1.0, 1.11803, 1.23657, 1.74574, 2.25492]"
},

{
    "location": "#rolling-stats-1",
    "page": "Readme",
    "title": "rolling stats",
    "category": "section",
    "text": "rollmin, rollmax, rollmean, rollmedian\nrollvar, rollstd, rollsem, rollmad, rollmad_normalized\nrollskewness, rollkurtosis, rollvariation\nrollcor, rollcov (over two data vectors)"
},

{
    "location": "#running-stats-1",
    "page": "Readme",
    "title": "running stats",
    "category": "section",
    "text": "runmin, runmax, runmean, runmedian\nrunvar, runstd, runsem, runmad, runmad_normalized\nrunskewness, runkurtosis, runvariation\nruncor, runcov (over two data vectors)Some of these use a limit value for running over vec of length 1."
},

{
    "location": "#works-with-your-functions-1",
    "page": "Readme",
    "title": "works with your functions",
    "category": "section",
    "text": "rolling(function, data, windowsize)\nrolling(function, data, windowsize, weights)\nrunning(function, data, windowsize)\nrunning(function, data, windowsize, weights)"
},

{
    "location": "#works-with-two-data-vectors-1",
    "page": "Readme",
    "title": "works with two data vectors",
    "category": "section",
    "text": "rolling(function, data1, data2, windowsize)\nrolling(function, data1, data2, windowsize, weights)  (weights apply to both data vectors)\nrolling(function, data1, data2, windowsize, weights1, weights2)\nrunning(function, data1, data2, windowsize)\nrunning(function, data1, data2, windowsize, weights)  (weights apply to both data vectors)\nrunning(function, data1, data2, windowsize, weights1, weights2)Many statistical functions of two (vector) variables are not well defined for vectors of length 1. To run these functions and get an initial tapered value that is well defined, supply the desired value as firstresult.running(function, data1, data2, windowsize, firstresult)\nrunning(function, data1, data2, windowsize, weights, firstresult)  (weights apply to both data vectors)"
},

{
    "location": "#also-exports-1",
    "page": "Readme",
    "title": "also exports",
    "category": "section",
    "text": "LinearAlgebra.normalize\nStatsBase: AbstractWeights, Weights\nStatsBase: FrequencyWeights, AnalyticWeights, ProbabilityWeights"
},

{
    "location": "#Philosophy-and-Purpose-1",
    "page": "Readme",
    "title": "Philosophy and Purpose",
    "category": "section",
    "text": "This package provides a way for rolling and for running a functional window over data.  Data is conveyed either as a vector or as a means of obtaining a vector from a matrix or 3D array or other data structure (e.g. dataframes, timeseries).  Windows move over the data.  One may use unweighted windows or windows that are position weighted.  Weighted windows apply the weight sequence to the window as it moves over the data.When running with a weighted window, the initial (first, second ..) values are determined using a tapering of the weighted window\'s span.  This requires that the weights themselves be tapered along with the determinative function that is rolled.  In this case, the weight subsequence is normalized (sums to one(T)), and that reweighting is used with the foreshortened window to taper that which rolls.This work, and its upkeep (or its replacement by other\'s work), is offered as an appropriate and reliable scaffold. The work here is to be crisp, precise, accurate, and ever simplifying.  There is no desire to repletify manners of handling here.Some additional, small, purpose driven and providentially focused packages provide the meta-synthesis and enfolding dispatches that bring the more to the here."
},

{
    "location": "#Also-Consider-1",
    "page": "Readme",
    "title": "Also Consider",
    "category": "section",
    "text": "The mapwindow function from ImageFiltering  supports multidimensional window indexing and different maps."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RollingFunctions.AbstractWeightsRollingFunctions.AnalyticWeightsRollingFunctions.FrequencyWeightsRollingFunctions.ProbabilityWeightsRollingFunctions.RollingFunctionsRollingFunctions.SpanErrorRollingFunctions.WeightsRollingFunctions.WeightsErrorRollingFunctions.evalRollingFunctions.fillsRollingFunctions.includeRollingFunctions.kurtosis1RollingFunctions.mad_normalizedRollingFunctions.mad_not_normalizedRollingFunctions.nfilledRollingFunctions.normalizeRollingFunctions.nrolledRollingFunctions.rollcorRollingFunctions.rollcovRollingFunctions.rollingRollingFunctions.rollkurtosisRollingFunctions.rollmadRollingFunctions.rollmad_normalizedRollingFunctions.rollmaxRollingFunctions.rollmeanRollingFunctions.rollmedianRollingFunctions.rollminRollingFunctions.rollsemRollingFunctions.rollskewnessRollingFunctions.rollstdRollingFunctions.rollvarRollingFunctions.rollvariationRollingFunctions.runcorRollingFunctions.runcovRollingFunctions.runkurtosisRollingFunctions.runmadRollingFunctions.runmad_normalizedRollingFunctions.runmaxRollingFunctions.runmeanRollingFunctions.runmedianRollingFunctions.runminRollingFunctions.runningRollingFunctions.runsemRollingFunctions.runskewnessRollingFunctions.runstdRollingFunctions.runvarRollingFunctions.runvariationRollingFunctions.sem1RollingFunctions.skewness1RollingFunctions.std1RollingFunctions.tapersRollingFunctions.tapers2RollingFunctions.var1RollingFunctions.variation1"
},

]}
