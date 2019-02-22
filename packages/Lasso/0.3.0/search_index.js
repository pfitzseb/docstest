var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Lasso-1",
    "page": "Readme",
    "title": "Lasso",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Lasso.jl is a pure Julia implementation of the glmnet coordinate descent algorithm for fitting linear and generalized linear Lasso and Elastic Net models, as described in:Friedman, J., Hastie, T., & Tibshirani, R. (2010). Regularization paths for generalized linear models via coordinate descent. Journal of Statistical Software, 33(1), 1. http://www.jstatsoft.org/v33/i01/Lasso.jl also includes an implementation of the O(n) fused Lasso implementation described in:Johnson, N. A. (2013). A dynamic programming algorithm for the fused lasso and L0-segmentation. Journal of Computational and Graphical Statistics, 22(2), 246–260. doi:10.1080/10618600.2012.681238As well as an implementation of polynomial trend filtering based on:Ramdas, A., & Tibshirani, R. J. (2014). Fast and flexible ADMM algorithms for trend filtering. arXiv Preprint arXiv:1406.2082. Retrieved from http://arxiv.org/abs/1406.2082Also implements the Gamma Lasso, a concave regularization path glmnet variant: Taddy, M. (2017) One-Step Estimator Paths for Concave Regularization Journal of Computational and Graphical Statistics, 26:3, 525-536 http://dx.doi.org/10.1080/10618600.2016.1211532"
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "To fit a Lasso path with default parameters:fit(LassoPath, X, y, dist, link)dist is any distribution supported by GLM.jl and link defaults to the canonical link for that distribution.To fit a fused Lasso model:fit(FusedLasso, y, λ)To fit a polynomial trend filtering model:fit(TrendFilter, y, order, λ)To fit a Gamma Lasso path:fit(GammaLassoPath, X, y, dist, link; γ=1.0)It supports the same parameters as fit(LassoPath...), plus γ which controls the concavity of the regularization path. γ=0.0 is the Lasso. Higher values tend to result in sparser coefficient estimates.More documentation is available at ReadTheDocs."
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "User-specified weights are untested\nMaybe integrate LARS.jl"
},

{
    "location": "#See-also-1",
    "page": "Readme",
    "title": "See also",
    "category": "section",
    "text": "LassoPlot.jl, a package for plotting regularization paths.\nGLMNet.jl, a wrapper for the glmnet Fortran code.\nLARS.jl, an implementation of least angle regression for fitting entire linear (but not generalized linear) Lasso and Elastic Net coordinate paths."
},

{
    "location": "autodocs/#StatsBase.coef",
    "page": "Docstrings",
    "title": "StatsBase.coef",
    "category": "function",
    "text": "coef(path::RegularizationPath; select=:AICc)\n\nReturns a p by nλ coefficient array where p is the number of coefficients (including any intercept) and nλ is the number of path segments, or a selected segment\'s coefficients.\n\nIf model was only initialized but not fit, returns a p vector of zeros. Consistent with StatsBase.coef, if the model has an intercept it is included.\n\nExample:\n\n  m = fit(LassoPath,X,y)\n  coef(m; select=:CVmin)\n\nKeywords\n\nselect=:all returns a p by nλ matrix of coefficients\nselect=:AIC selects the AIC minimizing segment\nselect=:AICc selects the corrected AIC minimizing segment\nselect=:BIC selects the BIC minimizing segment\nselect=:CVmin selects the segment that minimizing out-of-sample mean squared   error from cross-validation with nCVfolds random folds.\nselect=:CV1se selects the segment whose average OOS deviance is no more than   1 standard error away from the one minimizing out-of-sample mean squared   error from cross-validation with nCVfolds random folds.\nnCVfolds=10 number of cross-validation folds\nkwargs... are passed to minAICc(::RegularizationPath) or to   cross_validate_path(::RegularizationPath)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.deviance",
    "page": "Docstrings",
    "title": "StatsBase.deviance",
    "category": "function",
    "text": "deviance at each segment of the path for the fitted model and data\n\n\n\n\n\ndeviance at each segement of the path for (potentially new) data X and y select=:all or :AICc like in coef()\n\n\n\n\n\ndeviance at each segment of the path for (potentially new) y and predicted values μ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lasso.distfun",
    "page": "Docstrings",
    "title": "Lasso.distfun",
    "category": "function",
    "text": "distribution of underlying GLM\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.dof",
    "page": "Docstrings",
    "title": "StatsBase.dof",
    "category": "function",
    "text": "dof(path::RegularizationPath)\n\nApproximates the degrees-of-freedom in each segment of the path as the number of non zero coefficients plus a dispersion parameter when appropriate. Note that for GammaLassoPath this may be a crude approximation, as gamlr does this differently.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLM.linkfun",
    "page": "Docstrings",
    "title": "GLM.linkfun",
    "category": "function",
    "text": "link of underlying GLM\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Lasso.+Lasso.-Lasso.@formulaLasso.AbstractContrastsLasso.AbstractMixtureModelLasso.AbstractMvNormalLasso.ArcsineLasso.BernoulliLasso.BetaLasso.BetaBinomialLasso.BetaPrimeLasso.BinomialLasso.BiweightLasso.CV1seLasso.CVminLasso.CategoricalLasso.CauchitLinkLasso.CauchyLasso.ChiLasso.ChisqLasso.CloglogLinkLasso.CoefficientIteratorLasso.ContinuousLasso.ContinuousDistributionLasso.ContinuousMatrixDistributionLasso.ContinuousMultivariateDistributionLasso.ContinuousUnivariateDistributionLasso.ContrastsCodingLasso.CoordinateDescentLasso.CosineLasso.CovarianceCoordinateDescentLasso.DensePredLasso.DensePredCholLasso.DensePredQRLasso.DiagNormalLasso.DiagNormalCanonLasso.DirichletLasso.DirichletMultinomialLasso.DiscreteLasso.DiscreteDistributionLasso.DiscreteMatrixDistributionLasso.DiscreteMultivariateDistributionLasso.DiscreteUniformLasso.DiscreteUnivariateDistributionLasso.DistributionLasso.DistributionsLasso.DoubleExponentialLasso.DummyCodingLasso.EdgeworthMeanLasso.EdgeworthSumLasso.EdgeworthZLasso.EffectsCodingLasso.EmpiricalUnivariateDistributionLasso.EpanechnikovLasso.ErlangLasso.EstimatorLasso.ExponentialLasso.FDistLasso.FisherNoncentralHypergeometricLasso.FormulaLasso.FrechetLasso.FullNormalLasso.FullNormalCanonLasso.FusedLassoLasso.FusedLassoModLasso.GLMLasso.GammaLasso.GammaLassoPathLasso.GaussianLasso.GeneralizedExtremeValueLasso.GeneralizedLinearModelLasso.GeneralizedParetoLasso.GeometricLasso.GlmRespLasso.GumbelLasso.HelmertCodingLasso.HypergeometricLasso.IdentityLinkLasso.InverseGammaLasso.InverseGaussianLasso.InverseLinkLasso.InverseSquareLinkLasso.InverseWishartLasso.IsoNormalLasso.IsoNormalCanonLasso.KSDistLasso.KSOneSidedLasso.KolmogorovLasso.LaplaceLasso.LassoLasso.LassoPathLasso.LevyLasso.LinPredLasso.LinPredModelLasso.LinearModelLasso.LinkLasso.LmRespLasso.LocationScaleLasso.LogLinkLasso.LogNormalLasso.LogisticLasso.LogitLinkLasso.MAX_DEV_FRACLasso.MIN_DEV_FRAC_DIFFLasso.MLEstimatorLasso.MatrixDistributionLasso.MatrixvariateLasso.MixtureModelLasso.ModelFrameLasso.ModelMatrixLasso.MultinomialLasso.MultivariateLasso.MultivariateDistributionLasso.MultivariateMixtureLasso.MultivariateNormalLasso.MvLogNormalLasso.MvNormalLasso.MvNormalCanonLasso.MvNormalKnownCovLasso.MvTDistLasso.NaiveCoordinateDescentLasso.NegativeBinomialLasso.NegativeBinomialLinkLasso.NonMatrixDistributionLasso.NoncentralBetaLasso.NoncentralChisqLasso.NoncentralFLasso.NoncentralHypergeometricLasso.NoncentralTLasso.NormalLasso.NormalCanonLasso.NormalInverseGaussianLasso.PLasso.ParetoLasso.PoissonLasso.PoissonBinomialLasso.ProbitLinkLasso.QQPairLasso.RANDOMIZE_DEFAULTLasso.RandomCoefficientIteratorLasso.RayleighLasso.RealIntervalLasso.RegularizationPathLasso.SLasso.SampleableLasso.SemicircleLasso.SkellamLasso.SparseCoefficientsLasso.SqrtLinkLasso.StatsModelsLasso.SufficientStatsLasso.SymTriangularDistLasso.TDistLasso.TrendFilterLasso.TrendFilteringLasso.TriangularDistLasso.TriweightLasso.TruncatedLasso.TruncatedNormalLasso.UniformLasso.UnivariateLasso.UnivariateDistributionLasso.UnivariateGMMLasso.UnivariateMixtureLasso.UtilLasso.ValueSupportLasso.VariateFormLasso.VonMisesLasso.VonMisesFisherLasso.WalleniusNoncentralHypergeometricLasso.WeibullLasso.WishartLasso.ZeroMeanDiagNormalLasso.ZeroMeanDiagNormalCanonLasso.ZeroMeanFullNormalLasso.ZeroMeanFullNormalCanonLasso.ZeroMeanIsoNormalLasso.ZeroMeanIsoNormalCanonLasso.addcoefLasso.addcoef!Lasso.addcoefs!Lasso.adjr2Lasso.adjr²Lasso.aiccLasso.binaryentropyLasso.build_modelLasso.canonformLasso.canonicallinkLasso.ccdfLasso.cdfLasso.cdfit!Lasso.cfLasso.cgfLasso.circvarLasso.coefLasso.coefnamesLasso.coeftableLasso.componentLasso.componentsLasso.componentwise_logpdfLasso.componentwise_pdfLasso.computeXssqLasso.computeXssqXtyLasso.computeXtX!Lasso.compute_gradLasso.compute_gradientLasso.computeytyLasso.computeλLasso.computeμX!Lasso.computeω!Lasso.concentrationLasso.confintLasso.copyω!Lasso.corLasso.covLasso.cquantileLasso.cross_validate_pathLasso.cumulantLasso.cycle!Lasso.defaultalgorithmLasso.delbeta!Lasso.devianceLasso.devresidLasso.dimLasso.dispersion_parameterLasso.distfunLasso.dofLasso.dof_residualLasso.droptermLasso.entropyLasso.estimateLasso.evalLasso.expected_logdetLasso.failprobLasso.fitLasso.fit!Lasso.fit_mapLasso.fit_map!Lasso.fit_mleLasso.fit_mle!Lasso.formulaLasso.freecumulantLasso.ftestLasso.getXtXLasso.glmLasso.glmvarLasso.gradlogpdfLasso.hasfinitesupportLasso.hasinterceptLasso.includeLasso.infocritLasso.initpenaltyfactorLasso.insupportLasso.interceptLasso.invcovLasso.inverselinkLasso.invlogccdfLasso.invlogcdfLasso.invscaleLasso.isboundedLasso.isleptokurticLasso.islowerboundedLasso.ismesokurticLasso.isplatykurticLasso.isprobvecLasso.isupperboundedLasso.kdeLasso.kurtosisLasso.linkfunLasso.linkinvLasso.linpredLasso.linpred!Lasso.lmLasso.locationLasso.location!Lasso.logccdfLasso.logcdfLasso.logdetcovLasso.logisticLasso.logitLasso.loglikelihoodLasso.logpdfLasso.logpdf!Lasso.maxλ!Lasso.meanLasso.meandirLasso.meanformLasso.meanlogxLasso.medianLasso.mgfLasso.minAICLasso.minAICcLasso.minBICLasso.modeLasso.model_responseLasso.modesLasso.momentLasso.muetaLasso.mustartLasso.ncategoriesLasso.ncomponentsLasso.negbinLasso.nobsLasso.nsamplesLasso.ntrialsLasso.nullXLasso.nulldevianceLasso.nullloglikelihoodLasso.paramsLasso.params!Lasso.partypeLasso.pathtypeLasso.pdfLasso.poststepLasso.predictLasso.probsLasso.probvalLasso.qqbuildLasso.quantileLasso.r2Lasso.rateLasso.rescaleLasso.residualoffsetLasso.residualsLasso.r²Lasso.sampleLasso.sample!Lasso.samplerLasso.scaleLasso.scale!Lasso.setcontrasts!Lasso.shapeLasso.skewnessLasso.spanLasso.sqmahalLasso.sqmahal!Lasso.ssrLasso.standardizeXLasso.stdLasso.stderrorLasso.stdlogxLasso.succprobLasso.suffstatsLasso.supportLasso.test_distrLasso.test_samplesLasso.update!Lasso.update_coef!Lasso.updateμ!Lasso.varLasso.varlogxLasso.vcovLasso.weightedresidualsLasso.wrkrespLasso.wrkresp!Lasso.wsampleLasso.wsample!Lasso.λω"
},

]}
