var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RandomExtensions-1",
    "page": "Readme",
    "title": "RandomExtensions",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)This package explores a possible extension of rand-related functionalities (from the Random module); the code is initially taken from https://github.com/JuliaLang/julia/pull/24912. Note that type piracy is commited! While hopefully useful, this package is still experimental, and hence unstable. Design or implementation contributions are welcome.This does mainly 3 things:define distribution objects, to give first-class status to features provided by Random; for example rand(Normal(), 3) is equivalent to randn(3); other available distributions: Exponential, CloseOpen (for generation of floats in a close-open range), Uniform (which can wrap an implicit uniform distribution), Combine (to \"combine\" distribution for objects made of multiple scalars, like Pair or Complex);define generation of some containers filled with random values (like Set, Dict, SparseArray, String, BitArray);\ndefine a Rand iterator, which produces lazily random values.Point 1) defines a Distribution type which is incompatible with the \"Distributions.jl\" package. Input on how to unify the two approaches is welcome. Point 2) goes somewhat against the trend in Base to create containers using their constructors – which by the way may be achieved with the Rand iterator from point 3). Still, I like the terser approach here, as it simply generalizes to other containers the current rand API creating arrays. See the issue linked above for a discussion on those topics.There is not much documentation for now: rand\'s docstring is updated, and here are some examples:julia> rand(CloseOpen()) # like rand(Float64)\n0.7678877639669386\n\njulia> rand(CloseOpen(1.0, 10.0)) # generation in [1.0, 10.0)\n4.309057677479184\n\njulia> rand(Normal(0.0, 10.0)) # explicit μ and σ parameters\n-8.473790458128912\n\njulia> rand(Uniform(1:3)) # equivalent to rand(1:3)\n2\n\njulia> rand(Combine(Pair, 1:10, Normal())) # random Pair, where both members have distinct distributions\n5 => 0.674375\n\njulia> rand(Combine(Pair{Number, Any}, 1:10, Normal())) # specify the Pair type\nPair{Number,Any}(1, -0.131617)\n\njulia> rand(Combine(Complex, Normal())) # each coordinate is drawn from the normal distribution\n1.5112317924121632 + 0.723463453534426im\n\njulia> rand(Combine(Complex, Normal(), 1:10)) # distinct distributions\n1.096731587266045 + 8.0im\n\njulia> rand(Set, 3)\nSet([0.717172, 0.78481, 0.86901])\n\njulia> rand(1:9, Set, 3)\nSet([3, 5, 8])\n\njulia> rand(Combine(Pair, 1:9, Normal()), Dict, 3)\nDict{Int64,Float64} with 3 entries:\n  9 => 0.916406\n  3 => -2.44958\n  8 => -0.703348\n\njulia> rand(0.3, 9) # equivalent to sprand(9, 0.3)\n9-element SparseVector{Float64,Int64} with 3 stored entries:\n  [1]  =  0.173858\n  [6]  =  0.568631\n  [8]  =  0.297207\n\njulia> rand(Normal(), 0.3, 2, 3) # equivalent to sprandn(2, 3, 0.3)\n2×3 SparseMatrixCSC{Float64,Int64} with 2 stored entries:\n  [2, 1]  =  0.448981\n  [1, 2]  =  0.730103\n\njulia> rand(String, 4) # equivalent to randstring(4)\n\"5o75\"\n\njulia> rand(BitArray, 3) # equivalent to bitrand(3)\n3-element BitArray{1}:\n  true\n  true\n false\n\njulia> Set(Iterators.take(Rand(RandomDevice(), 1:10), 3)) # RNG defaults to Random.GLOBAL_RNG\nSet([9, 2, 6])\n\njulia> collect(Iterators.take(Uniform(1:10), 3)) # distributions can be iterated over, using Random.GLOBAL_RNG implicitly\n3-element Array{Int64,1}:\n  7\n 10\n  5In some cases, the Rand iterator can provide some efficiency gains compared to repeated calls to rand, as it uses the same mechanism as non-scalar generation. For example, given a = zeros(10000), a .+ Rand(1:1000).() will be faster than a .+ rand.(Ref(1:1000))."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RandomExtensions.BitArraysRandomExtensions.CloseOpenRandomExtensions.CloseOpen01RandomExtensions.CloseOpen01_64RandomExtensions.CloseOpen12RandomExtensions.CloseOpen12_64RandomExtensions.CloseOpenABRandomExtensions.CombineRandomExtensions.Combine0RandomExtensions.Combine1RandomExtensions.Combine2RandomExtensions.ContRandomExtensions.DistributionRandomExtensions.ExponentialRandomExtensions.Exponential1RandomExtensions.ExponentialθRandomExtensions.FloatIntervalRandomExtensions.FloatInterval_64RandomExtensions.NormalRandomExtensions.Normal01RandomExtensions.NormalμσRandomExtensions.RandRandomExtensions.RandomExtensionsRandomExtensions.UniformRandomExtensions.UniformTypeRandomExtensions.UniformWrapRandomExtensions._deduce_typeRandomExtensions._rand!RandomExtensions._rand0!RandomExtensions.deduce_typeRandomExtensions.evalRandomExtensions.include"
},

]}
