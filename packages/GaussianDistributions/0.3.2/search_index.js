var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GaussianDistributions-1",
    "page": "Readme",
    "title": "GaussianDistributions",
    "category": "section",
    "text": "To install run Pkg.add(\"GaussianDistributions\").This package creates a simplistic alternative to Distributions to generate Gaussian or normally distributed random variables and deal with their distributions. The raison d’être of GaussianDistributions is that the type hierarchy layed out by distributions is not well suited to handle singular covariance matrices, and anything other than Float64s and Vector{Float64}s.This package contains enough functionality such that Gaussians can be useful as Gaussian state variable for example in a Kalman filter.It also provides cumulative distributions functions (cdf) for bivariate Normal distributions using an approximation (valid unless the correlation ρ is very strong and x ≈ y*sign(ρ).)"
},

{
    "location": "autodocs/#GaussianDistributions.BiNormal",
    "page": "Docstrings",
    "title": "GaussianDistributions.BiNormal",
    "category": "type",
    "text": "Bivariate standard normal distribution with correlation ρ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianDistributions.Gaussian",
    "page": "Docstrings",
    "title": "GaussianDistributions.Gaussian",
    "category": "type",
    "text": "Gaussian(μ, Σ) -> P\n\nGaussian distribution with mean μ and covariance Σ. Defines rand(P) and (log-)pdf(P, x). Designed to work with Numbers, UniformScalings, StaticArrays and PSD-matrices.\n\nImplementation details: On Σ the functions logdet, whiten and unwhiten (or chol as fallback for the latter two) are called.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianDistributions.PSD",
    "page": "Docstrings",
    "title": "GaussianDistributions.PSD",
    "category": "type",
    "text": "PSD{T}\n\nSimple wrapper for the lower triangular Cholesky root of a positive (semi-)definite element σ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianDistributions.conditional",
    "page": "Docstrings",
    "title": "GaussianDistributions.conditional",
    "category": "function",
    "text": "conditional(P::Gaussian, A, B, xB)\n\nConditional distribution of X[i for i in A] given X[i for i in B] == xB if X  P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianDistributions.logpdfnormal",
    "page": "Docstrings",
    "title": "GaussianDistributions.logpdfnormal",
    "category": "function",
    "text": "logpdfnormal(x, Σ)\n\nLogarithm of the probability density function of centered Gaussian with covariance Σ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianDistributions.sumlogdiag",
    "page": "Docstrings",
    "title": "GaussianDistributions.sumlogdiag",
    "category": "function",
    "text": "Sum of the log of the diagonal elements. Second argument d is used to handle UniformScaling and other linear operators whose dimensions are determined by the dimension of the argument they work on.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GaussianDistributions.BiNormalGaussianDistributions.GaussianGaussianDistributions.GaussianDistributionsGaussianDistributions.PSDGaussianDistributions.PhiGaussianDistributions._logdetGaussianDistributions._symmetricGaussianDistributions.conditionalGaussianDistributions.dimGaussianDistributions.evalGaussianDistributions.includeGaussianDistributions.independent_sumGaussianDistributions.lnodesGaussianDistributions.logpdfnormalGaussianDistributions.lweightsGaussianDistributions.phiGaussianDistributions.phibackGaussianDistributions.phibackgaussGaussianDistributions.phigaussGaussianDistributions.rand_scalarGaussianDistributions.rand_vectorGaussianDistributions.sumlogdiagGaussianDistributions.unwhitenGaussianDistributions.whitenGaussianDistributions.⊕"
},

]}
