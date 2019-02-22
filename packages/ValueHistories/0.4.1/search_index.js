var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ValueHistories-1",
    "page": "Readme",
    "title": "ValueHistories",
    "category": "section",
    "text": "Utility package for efficient tracking of optimization histories, training curves or other information of arbitrary types and at arbitrarily spaced sampling timesPackage Status Package Evaluator Build Status\n(Image: License) (Image: ValueHistories) (Image: ValueHistories) (Image: Build Status) (Image: Build status) (Image: Coverage Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered in METADATA.jl and can be installed as usualPkg.add(\"ValueHistories\")\nusing ValueHistories"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "We provide two basic approaches for logging information over time or iterations. The sample points do not have to be equally spaced as long as time/iteration is strictly increasing.Univalue histories: Intended for tracking the evolution ofa single value over time.Multivalue histories: Track an arbitrary amount of values overtime, each of which can be of a different type and associated with a labelNote that both approaches are typestable."
},

{
    "location": "#Univalue-Histories-1",
    "page": "Readme",
    "title": "Univalue Histories",
    "category": "section",
    "text": "This package provide two different concrete implementationsQHistory: Logs the values using a Dequeue\nHistory: Logs the values using a VectorSupported operations for univalue histories:push!(history, iteration, value): Appends a value to the history\nget(history): Returns all available observations as two vectors. The first vector contains the iterations and the second vector contains the values.\nenumerate(history) Returns an enumerator over the observations (as tuples)\nfirst(history): First stored observation (as tuple)\nlast(history): Last stored observation (as tuple)\nlength(history): Number of stored observations\nincrement!(history, iteration, value): Similar to push! but increments the value if the iteration already exists. Only supported by History.Here is a little example code showing the basic usage:using Primes\n\n# Specify the type of value you wish to track\nhistory = QHistory(Float64)\n\nfor i = 1:100\n  # Store some value of the specified type\n  # Note how the sampling times are not equally spaced\n  isprime(i) && push!(history, i, sin(.1*i))\nend\n\n# Access stored values as arrays\nx, y = get(history)\n@assert typeof(x) <: Vector{Int}\n@assert typeof(y) <: Vector{Float64}\n\n# You can also enumerate over the observations\nfor (x, y) in enumerate(history)\n  @assert typeof(x) <: Int\n  @assert typeof(y) <: Float64\nend\n\n# Let\'s see how this prints to the REPL\nhistoryQHistory\n    types: Int64, Float64\n    length: 25For easy visualisation we also provide recipes for Plots.jl. Note that this is only supported for Real types.using Plots\nplot(history, legend=false)(Image: qhistory)"
},

{
    "location": "#Multivalue-Histories-1",
    "page": "Readme",
    "title": "Multivalue Histories",
    "category": "section",
    "text": "Multivalue histories are more or less a dynamic collection of a number of univalue histories. Each individual univalue history is associated with a symbol key. If the user stores a value under a key that has no univalue history associated with it, then a new one is allocated and specialized for the given type.Supported operations for multivalue histories:push!(history, key, iteration, value): Appends a value to the multivalue history\nget(history, key): Returns all available observations as two vectors. The first vector contains the iterations and the second vector contains the values.\nenumerate(history, key) Returns an enumerator over the observations (as tuples)\nfirst(history, key): First stored observation (as tuple)\nlast(history, key): Last stored observation (as tuple)\nlength(history, key): Number of stored observations\nincrement!(history, key, iteration, value): Similar to push! but increments the value if the key and iteration combination already exists.Here is a little example code showing the basic usage:history = MVHistory()\n\nfor i=1:100\n    x = 0.1i\n\n    # Store any kind of value without losing type stability\n    # The first push! to a key defines the tracked type\n    #   push!(history, key, iter, value)\n    push!(history, :mysin, x, sin(x))\n    push!(history, :mystring, i, \"i=$i\")\n\n    # Sampling times can be arbitrarily spaced\n    # Note how we store the sampling time as a Float32 this time\n    isprime(i) && push!(history, :mycos, Float32(x), cos(x))\nend\n\n# Access stored values as arrays\nx, y = get(history, :mysin)\n@assert length(x) == length(y) == 100\n@assert typeof(x) <: Vector{Float64}\n@assert typeof(y) <: Vector{Float64}\n\n# Each key can be queried individually\nx, y = get(history, :mystring)\n@assert length(x) == length(y) == 100\n@assert typeof(x) <: Vector{Int64}\n@assert typeof(y) <: Vector{String}\n@assert y[1] == \"i=1\"\n\n# You can also enumerate over the observations\nfor (x, y) in enumerate(history, :mycos)\n  @assert typeof(x) <: Float32\n  @assert typeof(y) <: Float64\nend\n\n# Let\'s see how this prints to the REPL\nhistoryMVHistory{ValueHistories.History{I,V}}\n  :mysin => 100 elements {Float64,Float64}\n  :mystring => 100 elements {Int64,String}\n  :mycos => 25 elements {Float32,Float64}For easy visualisation we also provide recipes for Plots.jl. Note that this is only supported for Real types.using Plots\nplot(history)(Image: mvhistory)"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code is free to use under the terms of the MIT license."
},

{
    "location": "autodocs/#ValueHistories.@trace",
    "page": "Docstrings",
    "title": "ValueHistories.@trace",
    "category": "macro",
    "text": "Easily add to a MVHistory object tr.\n\nExample:\n\nusing ValueHistories, OnlineStats\nv = Variance(BoundedEqualWeight(30))\ntr = MVHistory()\nfor i=1:100\n    r = rand()\n    fit!(v,r)\n    μ,σ = mean(v),std(v)\n\n    # add entries for :r, :μ, and :σ using their current values\n    @trace tr i r μ σ\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueHistories.increment!",
    "page": "Docstrings",
    "title": "ValueHistories.increment!",
    "category": "function",
    "text": "increment!(trace, iter, val)\n\nIncrements the value for a given iteration if it exists, otherwise adds the iteration with an ordinary push.\n\n\n\n\n\nincrement!(trace, key, iter, val)\n\nIncrements the value for a given key and iteration if it exists, otherwise adds the key/iteration pair with an ordinary push.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ValueHistories.@traceValueHistories.HistoryValueHistories.MVHistoryValueHistories.MultivalueHistoryValueHistories.QHistoryValueHistories.UnivalueHistoryValueHistories.ValueHistoriesValueHistories.ValueHistoryValueHistories._filter_plotable_historiesValueHistories._is_plotable_historyValueHistories.evalValueHistories.includeValueHistories.increment!"
},

]}
