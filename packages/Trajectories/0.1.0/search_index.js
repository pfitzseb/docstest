var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Trajectories-1",
    "page": "Readme",
    "title": "Trajectories",
    "category": "section",
    "text": "A trajectory in the sense of this package is a vector of time points t and a corresponding vector of spatial points x, which are though as locations x[i] of an object at times t[i].A key decision which has to be made for a time series object, is whether iteration is used to iterate values, pairs or is leveraged for destruction. See issue #1. At the moment,  all iteration and destructuring is explicit.To iterate values xᵢ, pairs (tᵢ, xᵢ) or components (t, x), use values, pairs or Pairtᵢ in keys(X)\nxᵢ in values(X)\n(tᵢ, xᵢ) in pairs(X)\n\nt, x = Pair(X)A second key decision is what constitutes indexing. Also here this package is agnostic: Only key look-up with get is implemented so far.Trajectories support Tables.jl with columns being a named tuple (t = X.t, x = X.x)."
},

{
    "location": "autodocs/#Trajectories.@unroll1",
    "page": "Docstrings",
    "title": "Trajectories.@unroll1",
    "category": "macro",
    "text": "@unroll1 for-loop\n\nUnroll the first iteration of a for-loop. Set first to true in the first iteration.\n\nExample:\n\n    @unroll1 for i in 1:10\n        if first\n            a, state = iterate(\'A\':\'Z\')\n        else\n            a, state = iterate(\'A\':\'Z\', state)\n        end\n        println(i => a)\n    end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Trajectories.APA",
    "page": "Docstrings",
    "title": "Trajectories.APA",
    "category": "type",
    "text": "AbstractPairedArray\n\nSimple data structure pairing two arrays, with the first array holding the keys and the second the corresponding values.\n\nFor example an array of locations with an array of corresponding measurements or a vector of times with a vector of locations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Trajectories.AbstractPairedArray",
    "page": "Docstrings",
    "title": "Trajectories.AbstractPairedArray",
    "category": "type",
    "text": "AbstractPairedArray\n\nSimple data structure pairing two arrays, with the first array holding the keys and the second the corresponding values.\n\nFor example an array of locations with an array of corresponding measurements or a vector of times with a vector of locations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Trajectories.Trajectory",
    "page": "Docstrings",
    "title": "Trajectories.Trajectory",
    "category": "type",
    "text": "Trajectory{S,T} <: AbstractPairedArray\n\nPairs a linearly ordered (abstract) vector of keys (typically times) with a vector of values (typically locations).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Trajectories.interpolate",
    "page": "Docstrings",
    "title": "Trajectories.interpolate",
    "category": "function",
    "text": "interpolate(method, X::Trajectory, s)\n\nInterpolate trajectory X using method in [Linear(), Left(), ...] at time s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Trajectories.issynchron",
    "page": "Docstrings",
    "title": "Trajectories.issynchron",
    "category": "function",
    "text": "issynchron(X, Y) = isequal(keys(X), keys(Y))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Trajectories.piecewise",
    "page": "Docstrings",
    "title": "Trajectories.piecewise",
    "category": "function",
    "text": "piecewise(X::Trajectory, [endtime]) -> tt, xx\n\nIf X is a jump process with piecewise constant paths and jumps in X.tt, piecewise returns coordinates path for plotting purposes. The second argument allows to choose the right endtime of the last interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Trajectories.@unroll1Trajectories.APATrajectories.AbstractPairedArrayTrajectories.LeftTrajectories.LinearTrajectories.RightTrajectories.TrajectoriesTrajectories.TrajectoryTrajectories._findTrajectories.checksynchronTrajectories.evalTrajectories.includeTrajectories.interpolateTrajectories.issynchronTrajectories.mapeachTrajectories.mapeach!Trajectories.mapvaluesTrajectories.mapvalues!Trajectories.piecewiseTrajectories.trajectory"
},

]}
