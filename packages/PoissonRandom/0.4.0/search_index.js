var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PoissonRandom-1",
    "page": "Readme",
    "title": "PoissonRandom",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Pkg.add(\"PoissonRandom\")\n\n# Simple Poisson random\npois_rand(λ)\n\n# Using another RNG\nusing RandomNumbers\nrng = Xorshifts.Xoroshiro128Plus()\npois_rand(rng,λ)"
},

{
    "location": "#Implementation-1",
    "page": "Readme",
    "title": "Implementation",
    "category": "section",
    "text": "It mixes two methods. A simple count method and a method from a normal approximation. See this blog post for details."
},

{
    "location": "#Benchmark-1",
    "page": "Readme",
    "title": "Benchmark",
    "category": "section",
    "text": "using RandomNumbers, Distributions, BenchmarkTools, StaticArrays,\n      RecursiveArrayTools, Plots, PoissonRandom\nlabels = [\"count_rand\",\"ad_rand\",\"pois_rand\",\"Distributions.jl\"]\nrng = Xorshifts.Xoroshiro128Plus()\n\nfunction n_count(rng,λ,n)\n  tmp = 0\n  for i in 1:n\n    tmp += PoissonRandom.count_rand(rng,λ)\n  end\nend\n\nfunction n_pois(rng,λ,n)\n  tmp = 0\n  for i in 1:n\n    tmp += pois_rand(rng,λ)\n  end\nend\n\nfunction n_ad(rng,λ,n)\n  tmp = 0\n  for i in 1:n\n    tmp += PoissonRandom.ad_rand(rng,λ)\n  end\nend\n\nfunction n_dist(λ,n)\n  tmp = 0\n  for i in 1:n\n    tmp += rand(Poisson(λ))\n  end\nend\n\nfunction time_λ(rng,λ,n)\n  t1 = @elapsed n_count(rng,λ,n)\n  t2 = @elapsed n_ad(rng,λ,n)\n  t3 = @elapsed n_pois(rng,λ,n)\n  t4 = @elapsed n_dist(λ,n)\n  @SArray [t1,t2,t3,t4]\nend\n\n# Compile\ntime_λ(rng,5,5000000)\n# Run with a bunch of λ\ntimes = VectorOfArray([time_λ(rng,n,5000000) for n in 1:20])\'\nplot(times,labels = labels, lw = 3)(Image: benchmark result)So this package ends up about 30% or so faster than Distributions.jl (the method at the far edge is λ-independent so that goes on forever)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PoissonRandom.PoissonRandomPoissonRandom.ad_randPoissonRandom.count_randPoissonRandom.evalPoissonRandom.includePoissonRandom.log1pmxPoissonRandom.log1pmx_kernelPoissonRandom.pois_randPoissonRandom.procf"
},

]}
