var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StatsFuns.jl-1",
    "page": "Readme",
    "title": "StatsFuns.jl",
    "category": "section",
    "text": "Mathematical functions related to statistics.(Image: PkgEval 0.6) (Image: PkgEval 0.7) (Image: Travis) (Image: Appveyor) (Image: Coveralls)This package provides a collection of mathematical constants and numerical functions for statistical computing."
},

{
    "location": "#Constants-1",
    "page": "Readme",
    "title": "Constants",
    "category": "section",
    "text": "twoπ,       # 2π\nfourπ,      # 4π\nhalfπ,      # π / 2\nquartπ,     # π / 4\ninvπ,       # 1 / π\ntwoinvπ,    # 2 / π\nfourinvπ,   # 4 / π\ninv2π,      # 1 / (2π)\ninv4π,      # 1 / (4π)\nsqrt2,      # √2\nsqrt3,      # √3\nsqrtπ,      # √π\nsqrt2π,     # √2π\nsqrt4π,     # √4π\nsqrthalfπ,  # √(π / 2)\ninvsqrt2,   # 1 / √2\ninvsqrt2π,  # 1 / √2π\nloghalf,    # log(1 / 2)\nlogtwo,     # log(2)\nlogπ,       # log(π)\nlog2π,      # log(2π)\nlog4π,      # log(4π)"
},

{
    "location": "#Basic-Functions-1",
    "page": "Readme",
    "title": "Basic Functions",
    "category": "section",
    "text": "# basicfuns\nxlogx,          # x * log(x) for x > 0, or 0 when x == 0\nxlogy,          # x * log(y) for x > 0, or 0 when x == 0\nlogistic,       # 1 / (1 + exp(-x))\nlogit,          # log(x / (1 - x))\nlog1psq,        # log(1 + x^2)\nlog1pexp,       # log(1 + exp(x))\nlog1mexp,       # log(1 - exp(x))\nlog2mexp,       # log(2 - exp(x))\nlogexpm1,       # log(exp(x) - 1)\nsoftplus,       # alias of log1pexp\ninvsoftplus,    # alias of logexpm1\nlog1pmx,        # log(1 + x) - x\nlogmxp1,        # log(x) - x + 1\nlogsumexp,      # log(exp(x) + exp(y)) or log(sum(exp(x)))\nsoftmax,        # exp(x_i) / sum(exp(x)), for i\nsoftmax!,       # inplace softmax\n\n# misc\nlogmvgamma,     # logarithm of multivariate gamma function\nlstirling_asym"
},

{
    "location": "#Distribution-related-functions-1",
    "page": "Readme",
    "title": "Distribution-related functions",
    "category": "section",
    "text": "# distrs/beta\nbetapdf,            # pdf of beta distribution\nbetalogpdf,         # logpdf of beta distribution\nbetacdf,            # cdf of beta distribution\nbetaccdf,           # ccdf of beta distribution\nbetalogcdf,         # logcdf of beta distribution\nbetalogccdf,        # logccdf of beta distribution\nbetainvcdf,         # inverse-cdf of beta distribution\nbetainvccdf,        # inverse-ccdf of beta distribution\nbetainvlogcdf,      # inverse-logcdf of beta distribution\nbetainvlogccdf,     # inverse-logccdf of beta distribution\n\n# distrs/binom\nbinompdf,           # pdf of binomial distribution\nbinomlogpdf,        # logpdf of binomial distribution\nbinomcdf,           # cdf of binomial distribution\nbinomccdf,          # ccdf of binomial distribution\nbinomlogcdf,        # logcdf of binomial distribution\nbinomlogccdf,       # logccdf of binomial distribution\nbinominvcdf,        # inverse-cdf of binomial distribution\nbinominvccdf,       # inverse-ccdf of binomial distribution\nbinominvlogcdf,     # inverse-logcdf of binomial distribution\nbinominvlogccdf,    # inverse-logccdf of binomial distribution\n\n# distrs/chisq\nchisqpdf,           # pdf of chi-square distribution\nchisqlogpdf,        # logpdf of chi-square distribution\nchisqcdf,           # cdf of chi-square distribution\nchisqccdf,          # ccdf of chi-square distribution\nchisqlogcdf,        # logcdf of chi-square distribution\nchisqlogccdf,       # logccdf of chi-square distribution\nchisqinvcdf,        # inverse-cdf of chi-square distribution\nchisqinvccdf,       # inverse-ccdf of chi-square distribution\nchisqinvlogcdf,     # inverse-logcdf of chi-square distribution\nchisqinvlogccdf,    # inverse-logccdf of chi-square distribution\n\n# distrs/fdist\nfdistpdf,           # pdf of F distribution\nfdistlogpdf,        # logpdf of F distribution\nfdistcdf,           # cdf of F distribution\nfdistccdf,          # ccdf of F distribution\nfdistlogcdf,        # logcdf of F distribution\nfdistlogccdf,       # logccdf of F distribution\nfdistinvcdf,        # inverse-cdf of F distribution\nfdistinvccdf,       # inverse-ccdf of F distribution\nfdistinvlogcdf,     # inverse-logcdf of F distribution\nfdistinvlogccdf,    # inverse-logccdf of F distribution\n\n# distrs/gamma\ngammapdf,           # pdf of gamma distribution\ngammalogpdf,        # logpdf of gamma distribution\ngammacdf,           # cdf of gamma distribution\ngammaccdf,          # ccdf of gamma distribution\ngammalogcdf,        # logcdf of gamma distribution\ngammalogccdf,       # logccdf of gamma distribution\ngammainvcdf,        # inverse-cdf of gamma distribution\ngammainvccdf,       # inverse-ccdf of gamma distribution\ngammainvlogcdf,     # inverse-logcdf of gamma distribution\ngammainvlogccdf,    # inverse-logccdf of gamma distribution\n\n# distrs/hyper\nhyperpdf,           # pdf of hypergeometric distribution\nhyperlogpdf,        # logpdf of hypergeometric distribution\nhypercdf,           # cdf of hypergeometric distribution\nhyperccdf,          # ccdf of hypergeometric distribution\nhyperlogcdf,        # logcdf of hypergeometric distribution\nhyperlogccdf,       # logccdf of hypergeometric distribution\nhyperinvcdf,        # inverse-cdf of hypergeometric distribution\nhyperinvccdf,       # inverse-ccdf of hypergeometric distribution\nhyperinvlogcdf,     # inverse-logcdf of hypergeometric distribution\nhyperinvlogccdf,    # inverse-logccdf of hypergeometric distribution\n\n# distrs/nbeta\nnbetapdf,           # pdf of noncentral beta distribution\nnbetalogpdf,        # logpdf of noncentral beta distribution\nnbetacdf,           # cdf of noncentral beta distribution\nnbetaccdf,          # ccdf of noncentral beta distribution\nnbetalogcdf,        # logcdf of noncentral beta distribution\nnbetalogccdf,       # logccdf of noncentral beta distribution\nnbetainvcdf,        # inverse-cdf of noncentral beta distribution\nnbetainvccdf,       # inverse-ccdf of noncentral beta distribution\nnbetainvlogcdf,     # inverse-logcdf of noncentral beta distribution\nnbetainvlogccdf,    # inverse-logccdf of noncentral beta distribution\n\n# distrs/nbinom\nnbinompdf,           # pdf of negative nbinomial distribution\nnbinomlogpdf,        # logpdf of negative nbinomial distribution\nnbinomcdf,           # cdf of negative nbinomial distribution\nnbinomccdf,          # ccdf of negative nbinomial distribution\nnbinomlogcdf,        # logcdf of negative nbinomial distribution\nnbinomlogccdf,       # logccdf of negative nbinomial distribution\nnbinominvcdf,        # inverse-cdf of negative nbinomial distribution\nnbinominvccdf,       # inverse-ccdf of negative nbinomial distribution\nnbinominvlogcdf,     # inverse-logcdf of negative nbinomial distribution\nnbinominvlogccdf,    # inverse-logccdf of negative nbinomial distribution\n\n# distrs/nchisq\nnchisqpdf,           # pdf of noncentral chi-square distribution\nnchisqlogpdf,        # logpdf of noncentral chi-square distribution\nnchisqcdf,           # cdf of noncentral chi-square distribution\nnchisqccdf,          # ccdf of noncentral chi-square distribution\nnchisqlogcdf,        # logcdf of noncentral chi-square distribution\nnchisqlogccdf,       # logccdf of noncentral chi-square distribution\nnchisqinvcdf,        # inverse-cdf of noncentral chi-square distribution\nnchisqinvccdf,       # inverse-ccdf of noncentral chi-square distribution\nnchisqinvlogcdf,     # inverse-logcdf of noncentral chi-square distribution\nnchisqinvlogccdf,    # inverse-logccdf of noncentral chi-square distribution\n\n# distrs/nfdist\nnfdistpdf,           # pdf of noncentral F distribution\nnfdistlogpdf,        # logpdf of noncentral F distribution\nnfdistcdf,           # cdf of noncentral F distribution\nnfdistccdf,          # ccdf of noncentral F distribution\nnfdistlogcdf,        # logcdf of noncentral F distribution\nnfdistlogccdf,       # logccdf of noncentral F distribution\nnfdistinvcdf,        # inverse-cdf of noncentral F distribution\nnfdistinvccdf,       # inverse-ccdf of noncentral F distribution\nnfdistinvlogcdf,     # inverse-logcdf of noncentral F distribution\nnfdistinvlogccdf,    # inverse-logccdf of noncentral F distribution\n\n# distrs/norm\nnormpdf,            # pdf of normal distribution\nnormlogpdf,         # logpdf of normal distribution\nnormcdf,            # cdf of normal distribution\nnormccdf,           # ccdf of normal distribution\nnormlogcdf,         # logcdf of normal distribution\nnormlogccdf,        # logccdf of normal distribution\nnorminvcdf,         # inverse-cdf of normal distribution\nnorminvccdf,        # inverse-ccdf of normal distribution\nnorminvlogcdf,      # inverse-logcdf of normal distribution\nnorminvlogccdf,     # inverse-logccdf of normal distribution\n\n# distrs/ntdist\nntdistpdf,           # pdf of noncentral t distribution\nntdistlogpdf,        # logpdf of noncentral t distribution\nntdistcdf,           # cdf of noncentral t distribution\nntdistccdf,          # ccdf of noncentral t distribution\nntdistlogcdf,        # logcdf of noncentral t distribution\nntdistlogccdf,       # logccdf of noncentral t distribution\nntdistinvcdf,        # inverse-cdf of noncentral t distribution\nntdistinvccdf,       # inverse-ccdf of noncentral t distribution\nntdistinvlogcdf,     # inverse-logcdf of noncentral t distribution\nntdistinvlogccdf,    # inverse-logccdf of noncentral t distribution\n\n# distrs/pois\npoispdf,           # pdf of Poisson distribution\npoislogpdf,        # logpdf of Poisson distribution\npoiscdf,           # cdf of Poisson distribution\npoisccdf,          # ccdf of Poisson distribution\npoislogcdf,        # logcdf of Poisson distribution\npoislogccdf,       # logccdf of Poisson distribution\npoisinvcdf,        # inverse-cdf of Poisson distribution\npoisinvccdf,       # inverse-ccdf of Poisson distribution\npoisinvlogcdf,     # inverse-logcdf of Poisson distribution\npoisinvlogccdf,    # inverse-logccdf of Poisson distribution\n\n# distrs/tdist\ntdistpdf,           # pdf of student\'s t distribution\ntdistlogpdf,        # logpdf of student\'s t distribution\ntdistcdf,           # cdf of student\'s t distribution\ntdistccdf,          # ccdf of student\'s t distribution\ntdistlogcdf,        # logcdf of student\'s t distribution\ntdistlogccdf,       # logccdf of student\'s t distribution\ntdistinvcdf,        # inverse-cdf of student\'s t distribution\ntdistinvccdf,       # inverse-ccdf of student\'s t distribution\ntdistinvlogcdf,     # inverse-logcdf of student\'s t distribution\ntdistinvlogccdf,    # inverse-logccdf of student\'s t distribution"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "All of the code for this package is released under the MIT/Expat license, but this package depends upon the Rmath.jl package, which currently links to a GPL-licensed library. As such, the package currently constitutes a derived work. Work is underway to remove that dependency."
},

{
    "location": "autodocs/#StatsFuns.invsoftplus",
    "page": "Docstrings",
    "title": "StatsFuns.invsoftplus",
    "category": "function",
    "text": "logexpm1(x::Real)\n\nReturn log(exp(x) - 1) or the \"invsoftplus\" function. It is the inverse of log1pexp (aka \"softplus\").\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.log1mexp",
    "page": "Docstrings",
    "title": "StatsFuns.log1mexp",
    "category": "function",
    "text": "log1mexp(x::Real)\n\nReturn log(1 - exp(x))\n\nSee:\n\nMartin Maechler (2012) \"Accurately Computing log(1 − exp(− |a|))\",  http://cran.r-project.org/web/packages/Rmpfr/vignettes/log1mexp-note.pdf\n\nNote: different than Maechler (2012), no negation inside parentheses\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.log1pexp",
    "page": "Docstrings",
    "title": "StatsFuns.log1pexp",
    "category": "function",
    "text": "log1pexp(x::Real)\n\nReturn log(1+exp(x)) evaluated carefully for largish x.\n\nThis is also called the \"softplus\" transformation, being a smooth approximation to max(0,x). Its inverse is logexpm1. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.log1pmx",
    "page": "Docstrings",
    "title": "StatsFuns.log1pmx",
    "category": "function",
    "text": "log1pmx(x::Float64)\n\nReturn log(1 + x) - x\n\nUse naive calculation or range reduction outside kernel range.  Accurate ~2ulps for all x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.log1psq",
    "page": "Docstrings",
    "title": "StatsFuns.log1psq",
    "category": "function",
    "text": "log1psq(x::Real)\n\nReturn log(1+x^2) evaluated carefully for abs(x) very small or very large.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.log2mexp",
    "page": "Docstrings",
    "title": "StatsFuns.log2mexp",
    "category": "function",
    "text": "log2mexp(x::Real)\n\nReturn log(2 - exp(x)) evaluated as log1p(-expm1(x))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.logaddexp",
    "page": "Docstrings",
    "title": "StatsFuns.logaddexp",
    "category": "function",
    "text": "logaddexp(x::Real, y::Real)\n\nReturn log(exp(x) + exp(y)), avoiding intermediate overflow/undeflow, and handling non-finite values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.logexpm1",
    "page": "Docstrings",
    "title": "StatsFuns.logexpm1",
    "category": "function",
    "text": "logexpm1(x::Real)\n\nReturn log(exp(x) - 1) or the \"invsoftplus\" function. It is the inverse of log1pexp (aka \"softplus\").\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.logistic",
    "page": "Docstrings",
    "title": "StatsFuns.logistic",
    "category": "function",
    "text": "logistic(x::Real)\n\nThe logistic sigmoid function mapping a real number to a value in the interval [0,1],\n\nsigma(x) = frac1e^-x + 1 = frace^x1+e^x\n\nIts inverse is the logit function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.logit",
    "page": "Docstrings",
    "title": "StatsFuns.logit",
    "category": "function",
    "text": "logit(p::Real)\n\nThe logit or log-odds transformation,\n\nlogleft(fracx1-xright) textwhere 0  x  1\n\nIts inverse is the logistic function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.logmvgamma",
    "page": "Docstrings",
    "title": "StatsFuns.logmvgamma",
    "category": "function",
    "text": "logmvgamma(p::Int, a::Real)\n\nReturn the logarithm of multivariate gamma function (DLMF 35.3.1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.logmxp1",
    "page": "Docstrings",
    "title": "StatsFuns.logmxp1",
    "category": "function",
    "text": "logmxp1(x::Float64)\n\nReturn log(x) - x + 1 carefully evaluated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.logsumexp",
    "page": "Docstrings",
    "title": "StatsFuns.logsumexp",
    "category": "function",
    "text": "logsumexp(X)\n\nCompute log(sum(exp, X)), evaluated avoiding intermediate overflow/undeflow.\n\nX should be an iterator of real numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.lstirling_asym",
    "page": "Docstrings",
    "title": "StatsFuns.lstirling_asym",
    "category": "function",
    "text": "lstirling_asym(x)\n\nThe remainder term after Stirling\'s approximation to lgamma:\n\nlog Gamma(x) approx x log(x) - x + log(2pix)2 = log(x)*(x-12) + log(2pi)2 - x\n\nIn Julia syntax, this means:\n\nlstirling_asym(x) = lgamma(x) + x - (x-0.5)*log(x) - 0.5*log(2π)\n\nFor sufficiently large x, this can be approximated using the asymptotic Stirling\'s series (DLMF 5.11.1):\n\nfrac112x - frac1360x^3 + frac11260x^5 - frac11680x^7 + ldots\n\nThe truncation error is bounded by the first omitted term, and is of the same sign.\n\nRelative error of approximation is bounded by     (174611/125400 x^-19) / (1/12 x^-1 - 1/360 x^-3) which is < 1/2 ulp for x >= 10.0, and total numeric error appears to be < 2 ulps\n\nReferences\n\nTemme, N. (1996) Special functions: An introduction to the classical functions of  mathematical physics, Wiley, New York, ISBN: 0-471-11313-1, Chapter 3.6, pp 61-65.\nWeisstein, Eric W. \"Stirling\'s Series.\". MathWorld. \nOEIS A046968 and OEIS A046969 for the series coefficients\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.softmax!",
    "page": "Docstrings",
    "title": "StatsFuns.softmax!",
    "category": "function",
    "text": "softmax!(r::AbstractArray, x::AbstractArray)\n\nOverwrite r with the softmax (or normalized exponential) transformation of x\n\nThat is, r is overwritten with exp.(x), normalized to sum to 1.\n\nSee the Wikipedia entry\n\n\n\n\n\nsoftmax(x::AbstractArray{<:Real})\n\nReturn the softmax transformation applied to x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.softplus",
    "page": "Docstrings",
    "title": "StatsFuns.softplus",
    "category": "function",
    "text": "log1pexp(x::Real)\n\nReturn log(1+exp(x)) evaluated carefully for largish x.\n\nThis is also called the \"softplus\" transformation, being a smooth approximation to max(0,x). Its inverse is logexpm1. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.xlogx",
    "page": "Docstrings",
    "title": "StatsFuns.xlogx",
    "category": "function",
    "text": "xlogx(x::Real)\n\nReturn x * log(x) for x ≥ 0, handling x = 0 by taking the downward limit.\n\njulia> StatsFuns.xlogx(0)\n0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsFuns.xlogy",
    "page": "Docstrings",
    "title": "StatsFuns.xlogy",
    "category": "function",
    "text": "xlogy(x::Real, y::Real)\n\nReturn x * log(y) for y > 0 with correct limit at x = 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StatsFuns.RFunctionsStatsFuns.StatsFunsStatsFuns._log1pmx_kerStatsFuns._norminvlogcdf_implStatsFuns._qnorm_ker1StatsFuns._qnorm_ker2StatsFuns.betaccdfStatsFuns.betacdfStatsFuns.betainvccdfStatsFuns.betainvcdfStatsFuns.betainvlogccdfStatsFuns.betainvlogcdfStatsFuns.betalogccdfStatsFuns.betalogcdfStatsFuns.betalogpdfStatsFuns.betapdfStatsFuns.binomccdfStatsFuns.binomcdfStatsFuns.binominvccdfStatsFuns.binominvcdfStatsFuns.binominvlogccdfStatsFuns.binominvlogcdfStatsFuns.binomlogccdfStatsFuns.binomlogcdfStatsFuns.binomlogpdfStatsFuns.binompdfStatsFuns.chisqccdfStatsFuns.chisqcdfStatsFuns.chisqinvccdfStatsFuns.chisqinvcdfStatsFuns.chisqinvlogccdfStatsFuns.chisqinvlogcdfStatsFuns.chisqlogccdfStatsFuns.chisqlogcdfStatsFuns.chisqlogpdfStatsFuns.chisqpdfStatsFuns.evalStatsFuns.fdistccdfStatsFuns.fdistcdfStatsFuns.fdistinvccdfStatsFuns.fdistinvcdfStatsFuns.fdistinvlogccdfStatsFuns.fdistinvlogcdfStatsFuns.fdistlogccdfStatsFuns.fdistlogcdfStatsFuns.fdistlogpdfStatsFuns.fdistpdfStatsFuns.fourinvπStatsFuns.fourπStatsFuns.gammaccdfStatsFuns.gammacdfStatsFuns.gammainvccdfStatsFuns.gammainvcdfStatsFuns.gammainvlogccdfStatsFuns.gammainvlogcdfStatsFuns.gammalogccdfStatsFuns.gammalogcdfStatsFuns.gammalogpdfStatsFuns.gammapdfStatsFuns.halfπStatsFuns.hyperccdfStatsFuns.hypercdfStatsFuns.hyperinvccdfStatsFuns.hyperinvcdfStatsFuns.hyperinvlogccdfStatsFuns.hyperinvlogcdfStatsFuns.hyperlogccdfStatsFuns.hyperlogcdfStatsFuns.hyperlogpdfStatsFuns.hyperpdfStatsFuns.includeStatsFuns.inv2πStatsFuns.inv4πStatsFuns.invsoftplusStatsFuns.invsqrt2StatsFuns.invsqrt2πStatsFuns.invπStatsFuns.log1mexpStatsFuns.log1pexpStatsFuns.log1pmxStatsFuns.log1psqStatsFuns.log2mexpStatsFuns.log2πStatsFuns.log4πStatsFuns.logaddexpStatsFuns.logexpm1StatsFuns.loghalfStatsFuns.logisticStatsFuns.logitStatsFuns.logmvgammaStatsFuns.logmxp1StatsFuns.logsumexpStatsFuns.logtwoStatsFuns.logπStatsFuns.lstirlingF32StatsFuns.lstirlingF64StatsFuns.lstirling_asymStatsFuns.nbetaccdfStatsFuns.nbetacdfStatsFuns.nbetainvccdfStatsFuns.nbetainvcdfStatsFuns.nbetainvlogccdfStatsFuns.nbetainvlogcdfStatsFuns.nbetalogccdfStatsFuns.nbetalogcdfStatsFuns.nbetalogpdfStatsFuns.nbetapdfStatsFuns.nbinomccdfStatsFuns.nbinomcdfStatsFuns.nbinominvccdfStatsFuns.nbinominvcdfStatsFuns.nbinominvlogccdfStatsFuns.nbinominvlogcdfStatsFuns.nbinomlogccdfStatsFuns.nbinomlogcdfStatsFuns.nbinomlogpdfStatsFuns.nbinompdfStatsFuns.nchisqccdfStatsFuns.nchisqcdfStatsFuns.nchisqinvccdfStatsFuns.nchisqinvcdfStatsFuns.nchisqinvlogccdfStatsFuns.nchisqinvlogcdfStatsFuns.nchisqlogccdfStatsFuns.nchisqlogcdfStatsFuns.nchisqlogpdfStatsFuns.nchisqpdfStatsFuns.nfdistccdfStatsFuns.nfdistcdfStatsFuns.nfdistinvccdfStatsFuns.nfdistinvcdfStatsFuns.nfdistinvlogccdfStatsFuns.nfdistinvlogcdfStatsFuns.nfdistlogccdfStatsFuns.nfdistlogcdfStatsFuns.nfdistlogpdfStatsFuns.nfdistpdfStatsFuns.normccdfStatsFuns.normcdfStatsFuns.norminvccdfStatsFuns.norminvcdfStatsFuns.norminvlogccdfStatsFuns.norminvlogcdfStatsFuns.normlogccdfStatsFuns.normlogcdfStatsFuns.normlogpdfStatsFuns.normpdfStatsFuns.ntdistccdfStatsFuns.ntdistcdfStatsFuns.ntdistinvccdfStatsFuns.ntdistinvcdfStatsFuns.ntdistinvlogccdfStatsFuns.ntdistinvlogcdfStatsFuns.ntdistlogccdfStatsFuns.ntdistlogcdfStatsFuns.ntdistlogpdfStatsFuns.ntdistpdfStatsFuns.poisccdfStatsFuns.poiscdfStatsFuns.poisinvccdfStatsFuns.poisinvcdfStatsFuns.poisinvlogccdfStatsFuns.poisinvlogcdfStatsFuns.poislogccdfStatsFuns.poislogcdfStatsFuns.poislogpdfStatsFuns.poispdfStatsFuns.quartπStatsFuns.softmaxStatsFuns.softmax!StatsFuns.softplusStatsFuns.sqrt2StatsFuns.sqrt2πStatsFuns.sqrt3StatsFuns.sqrt4πStatsFuns.sqrthalfπStatsFuns.sqrtπStatsFuns.srdistccdfStatsFuns.srdistcdfStatsFuns.srdistinvccdfStatsFuns.srdistinvcdfStatsFuns.srdistinvlogccdfStatsFuns.srdistinvlogcdfStatsFuns.srdistlogccdfStatsFuns.srdistlogcdfStatsFuns.tdistccdfStatsFuns.tdistcdfStatsFuns.tdistinvccdfStatsFuns.tdistinvcdfStatsFuns.tdistinvlogccdfStatsFuns.tdistinvlogcdfStatsFuns.tdistlogccdfStatsFuns.tdistlogcdfStatsFuns.tdistlogpdfStatsFuns.tdistpdfStatsFuns.twoinvπStatsFuns.twoπStatsFuns.xlogxStatsFuns.xlogyStatsFuns.xvalStatsFuns.zval"
},

]}
