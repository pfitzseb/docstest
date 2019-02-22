var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BayesianTools.jl-1",
    "page": "Readme",
    "title": "BayesianTools.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)BayesianTools.jl is a Julia package with methods useful for Monte Carlo Markov Chain simulations. The package has two submodules:ProductDistributions: defines a ProductDistribution type and related methods useful for defining and evaluating independent priors\nLink: usuful rescale MC proposals to the parameter space of the underlying prior"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is not registered, so it must be cloned:Pkg.clone(\"https://github.com/gragusa/BayesianTools.jl.git\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#ProductDistributions-1",
    "page": "Readme",
    "title": "ProductDistributions",
    "category": "section",
    "text": "The following code shows how a product distribution resulting from multiplying a normal and a Beta can be obtainedusing BayesianTools.ProductDistributions\np = ProductDistribution(Normal(0,1), Beta(1.,1.))\nn = length(p) ## 2 -> Number of distribution in the productTo check whether an Array{Float64} is in the support of pinsupport(p, [.1,2.]) ## false\ninsupport(p, [.1,1.]) ## trueThe logpdf and the pdf at a point x::Array{Float64}(n) arelogpdf(p, [.1,.5]) # = logpdf(Normal(0,1), .1) + logpdf(Beta(1.,1.), .5)\npdf(p, [.1,.5]) # = pdf(Normal(0,1), .1) * pdf(Beta(1.,1.), .5)It is also possible to draw a sample from prand!(p, Array{Float64}(2,100))"
},

{
    "location": "#Links-1",
    "page": "Readme",
    "title": "Links",
    "category": "section",
    "text": "invlink and link are useful to transform and transform back the parameters of a model according to the support of a distribution. logjacobian provides the log absolute Jacobian of the inverse transformation applied by invlink.The typical use case of the methods in the Links is best understood by an example. Suppose interest lies on sampling from a Gamma(2,1) distribution(Image: Gamma(2,1))This is a simple distribution, and there are many straightforward ways to simulate it directly, but  we will employ a random walk Metropolis-Hastings (MH) algorithm with standard Gaussian proposal.Since the support of this distribution is x > 0, there are four options regarding the proposal distribution:Use a Normal(0,1) and proceed as you normally would if the support of the density was (-Inf, +Inf).\nUse a truncated normal distribution as proposal\nSample from a Normal(0,1) until the draw is positive\nRe-parametrise the distribution in terms of (Image: ) that is to sample from(Image: Re-parametrise)The first strategy will work just fine as long as the density evaluates to 0 for values outside its support. This is the case for the pdf of a Gamma in the Distributions package.The second and the third strategy is going to work as long as the acceptance ratio includes the normalising constant (see Darren Wilkinson\'s post).The last strategy also needs an adjustment to the acceptance ratio to incorporate the Jacobian of the transformation.The code below use invlink, link, and logjacobian to carry out the r.v. transformation and the Jacobian adjustment.Notice that the Improper distribution is a subtype of ContinuousUnivariateDistribution. Links defines methods for Improper that allow the transformations to go through automatically. (Improper can also be used as component of the ProductDistribution which is useful if an improper prior was elicited for some components of parameter.) using BayesianTools.Links\n function mcmc_wrong(iters)\n    chain = Array{Float64}(iters)\n    gamma = Gamma(2, 1)\n    d = Improper(0, +Inf)\n    lx  = 1.0\n    for i in 1:iters\n       xs = link(d, lx) + randn()\n       lxs = invlink(d, xs)\n       a = logpdf(gamma, lxs)-logpdf(gamma, lx)       \n       (rand() < exp(a)) && (lx = lxs)\n       chain[i] = lx\n    end\n    return chain\nend\n function mcmc_right(iters)\n    chain = Array{Float64}(iters)\n    gamma = Gamma(2, 1)\n    d = Improper(0, +Inf)\n    lx  = 1.0\n    for i in 1:iters\n       xs = link(d, lx) + randn()\n       lxs = invlink(d, xs)\n       a = logpdf(gamma, lxs)-logpdf(gamma, lx)\n       ## Log absolute jacobian adjustment\n       a = a - logjacobian(d, lxs) + logjacobian(d, lx)\n       (rand() < exp(a)) && (lx = lxs)\n       chain[i] = lx\n    end\n    return chain\nendThe results ismc0 = mcmc_wrong(1_000_000)\nmc1 = mcmc_right(1_000_000)\nusing Plots\nPlots.histogram([mc0, mc1], normalize=true, bins = 100, fill=:slategray, layout = (1,2), lab = \"draws\")\ntitle!(\"Incorrect sampler\", subplot = 1)\ntitle!(\"Correct sampler\", subplot = 2)\nplot!(x->pdf(Gamma(2,1),x), w = 2.6, color = :darkred, subplot = 1, lab = \"Gamma(2,1) density\")\nplot!(x->pdf(Gamma(2,1),x), w = 2.6, color = :darkred, subplot = 2, lab = \"Gamma(2,1) density\"))\npng(\"sampler\")(Image: histogram)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BayesianTools.BayesianToolsBayesianTools.ImproperBayesianTools.LinksBayesianTools.ProductDistributionsBayesianTools.evalBayesianTools.includeBayesianTools.insupport"
},

]}
