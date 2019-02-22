var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SequentialMonteCarlo.jl-1",
    "page": "Readme",
    "title": "SequentialMonteCarlo.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io) (Image: )This package provides a light interface to a serial and multi-threaded implementation of the Sequential Monte Carlo (SMC) algorithm. SMC is a random algorithm for approximate numerical integration and/or sampling.The documentation and some examples may be helpful for getting started."
},

{
    "location": "#Getting-the-package-1",
    "page": "Readme",
    "title": "Getting the package",
    "category": "section",
    "text": "Pkg.add(\"SequentialMonteCarlo\")If you want the latest version from the master branch, not just the latest release, you can additionally callPkg.checkout(\"SequentialMonteCarlo\")"
},

{
    "location": "#Quick-start:-1",
    "page": "Readme",
    "title": "Quick start:",
    "category": "section",
    "text": "## Load the package\n\nusing SequentialMonteCarlo\nimport Compat.Nothing\n\n## Define a particle consisting of one Float64\n\nmutable struct Float64Particle\n  x::Float64\n  Float64Particle() = new()\nend\n\n## The initial distribution is a standard normal, and the Markov transitions\n## define a non-stationary Markov chain, since 1.5 > 1.\n\nfunction M!(newParticle::Float64Particle, rng::RNG, p::Int64,\n  particle::Float64Particle, ::Nothing)\n  if p == 1\n    newParticle.x = randn(rng)\n  else\n    newParticle.x = 1.5 * particle.x + 0.5 * randn(rng)\n  end\nend\n\n## The log potential function is x -> -x^2 so the potential function is\n## x -> exp(-x^2).\n\nfunction lG(p::Int64, particle::Float64Particle, ::Nothing)\n  return - particle.x * particle.x\nend\n\n## This is a pedagogical example: one can deduce that eta_p is N(0, 1) for all\n## p and \\hat{eta}_p is N(0, 1/3) for all p. Essentially, the potential\n## functions stop the Markov chain from exploding by favouring values\n## closer to 0. In addition, \\hat{Z}_p = (sqrt(3)/3)^p.\n\n## Specify the model using M! and lG, stating that the maximum\n## length of the model is 100, and specifying the types of the particle and\n## particle scratch space. The latter is Nothing in this case as no scratch space\n## is required.\n\nmodel = SMCModel(M!, lG, 100, Float64Particle, Nothing)\n\n## Create the SMC input/output struct, specifying the number of particles N as\n## 2^20 = 1048576, that the algorithm should be run for 10 steps, that 1 thread\n## should be used (i.e. it should run in serial) and the whole particle system\n## should be recorded.\n\nsmcio = SMCIO{model.particle, model.pScratch}(2^20, 10, 1, true)\n\n## Run the algorithm twice, timing it both times. The first time will include\n## compilation overhead. The second time there will be no allocations (apart\n## from the small number associated with using the @time macro).\n\n@time smc!(model, smcio)\n@time smc!(model, smcio)\n\n## Check that the approximations in smcio.logZhats are close to the true values.\n\nprintln(Vector(log(sqrt(3)/3) * (1:10)))\nprintln(smcio.logZhats)\n\n## Check that the first and second moments of the eta_p\'s (resp. \\hat{eta}_p\'s)\n## are close to 0 and 1 (resp. 0 and 1/3).\n\nprintln(SequentialMonteCarlo.allEtas(smcio, p->p.x, false))\nprintln(SequentialMonteCarlo.allEtas(smcio, p->p.x*p.x, false))\n\nprintln(SequentialMonteCarlo.allEtas(smcio, p->p.x, true))\nprintln(SequentialMonteCarlo.allEtas(smcio, p->p.x*p.x, true))\n\n## Now try with Threads.nthreads() threads instead of 1 and time the algorithm.\n## There are compilation overheads the first time for the parallel parts of the\n## SMC implementation. There are still a number of small allocations the second\n## time; there is an allocation for each parallel region in the algorithm, and\n## there are a few such regions at each step of the algorithm. This is due to\n## Julia\'s multi-threading interface.\n\nnthreads = Threads.nthreads()\nsmcio = SMCIO{model.particle, model.pScratch}(2^20, 10, nthreads, true)\n\n@time smc!(model, smcio)\n@time smc!(model, smcio)"
},

]}
