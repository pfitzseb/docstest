var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SmoothingSplines-1",
    "page": "Readme",
    "title": "SmoothingSplines",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status)A Julia package for nonparametric regression with Cubic Smoothing Splines. The initial aim is to provide the same functionality as R\'s smooth.spline function and competitive computational performance. The implementation however is completely independent of the R function and based on the algorithm by Reinsch [1], as described in Chapter 2 of [2].using SmoothingSplines\nusing RDatasets\nusing Gadfly\n\ncars = dataset(\"datasets\",\"cars\")\nX = map(Float64,convert(Array,cars[:Speed]))\nY = map(Float64,convert(Array,cars[:Dist]))\n\nspl = fit(SmoothingSpline, X, Y, 250.0) # λ=250.0\nYpred = SmoothingSplines.predict(spl) # fitted vector\nplot(layer(x=X, y=Y, Geom.point),\n	layer(x=X, y=Ypred, Geom.line, 	Theme(default_color=colorant\"red\")))\n\nSmoothingSplines.predict(spl, 20.0) #prediction at arbitrary point"
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "Better docs\nconversion between regularization parameter λ and degrees of freedom\nautomatic selection of λ (LOOCV, GCV)\nsubsampling of design grid for higher efficiencyReferences[1] Reinsch, Christian H. \"Smoothing by spline functions.\" Numerische mathematik 10.3 (1967): 177-183.[2] Green, Peter J., and Bernard W. Silverman. Nonparametric regression and generalized linear models: a roughness penalty approach. CRC Press, 1993."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SmoothingSplines.AbstractHistogramSmoothingSplines.AbstractWeightsSmoothingSplines.AnalyticWeightsSmoothingSplines.CoefTableSmoothingSplines.ConvergenceExceptionSmoothingSplines.ECDFSmoothingSplines.FrequencyWeightsSmoothingSplines.HistogramSmoothingSplines.L1distSmoothingSplines.L2distSmoothingSplines.LAPACKFloatSmoothingSplines.LinfdistSmoothingSplines.ProbabilityWeightsSmoothingSplines.QtQpRSmoothingSplines.RegressionModelSmoothingSplines.ReinschQSmoothingSplines.ReinschRSmoothingSplines.SmoothingSplineSmoothingSplines.SmoothingSplinesSmoothingSplines.StatisticalModelSmoothingSplines.StatsBaseSmoothingSplines.WeightsSmoothingSplines.addcounts!SmoothingSplines.adjr2SmoothingSplines.adjr²SmoothingSplines.aicSmoothingSplines.aiccSmoothingSplines.autocorSmoothingSplines.autocor!SmoothingSplines.autocovSmoothingSplines.autocov!SmoothingSplines.aweightsSmoothingSplines.bicSmoothingSplines.coefSmoothingSplines.coefnamesSmoothingSplines.coeftableSmoothingSplines.competerankSmoothingSplines.confintSmoothingSplines.cor2covSmoothingSplines.corkendallSmoothingSplines.corspearmanSmoothingSplines.counteqSmoothingSplines.countmapSmoothingSplines.countneSmoothingSplines.countsSmoothingSplines.cov2corSmoothingSplines.crosscorSmoothingSplines.crosscor!SmoothingSplines.crosscovSmoothingSplines.crosscov!SmoothingSplines.crossentropySmoothingSplines.denserankSmoothingSplines.describeSmoothingSplines.devianceSmoothingSplines.dofSmoothingSplines.dof_residualSmoothingSplines.ecdfSmoothingSplines.entropySmoothingSplines.evalSmoothingSplines.findatSmoothingSplines.fitSmoothingSplines.fit!SmoothingSplines.fittedSmoothingSplines.fweightsSmoothingSplines.genmeanSmoothingSplines.genvarSmoothingSplines.geomeanSmoothingSplines.gkldivSmoothingSplines.harmmeanSmoothingSplines.histSmoothingSplines.includeSmoothingSplines.indexmapSmoothingSplines.indicatormatSmoothingSplines.informationmatrixSmoothingSplines.inverse_rleSmoothingSplines.iqrSmoothingSplines.isfittedSmoothingSplines.islinearSmoothingSplines.kldivergenceSmoothingSplines.kurtosisSmoothingSplines.levelsmapSmoothingSplines.leverageSmoothingSplines.loglikelihoodSmoothingSplines.madSmoothingSplines.mad!SmoothingSplines.maxadSmoothingSplines.mean_and_covSmoothingSplines.mean_and_stdSmoothingSplines.mean_and_varSmoothingSplines.meanadSmoothingSplines.meanresponseSmoothingSplines.middleSmoothingSplines.midpointsSmoothingSplines.modeSmoothingSplines.model_responseSmoothingSplines.modelmatrixSmoothingSplines.modesSmoothingSplines.momentSmoothingSplines.msdSmoothingSplines.mssSmoothingSplines.nobsSmoothingSplines.norepeatsSmoothingSplines.nquantileSmoothingSplines.nulldevianceSmoothingSplines.nullloglikelihoodSmoothingSplines.ordinalrankSmoothingSplines.pacfSmoothingSplines.pacf!SmoothingSplines.partialcorSmoothingSplines.pbtrf!SmoothingSplines.pbtrs!SmoothingSplines.percentileSmoothingSplines.predictSmoothingSplines.predict!SmoothingSplines.proportionmapSmoothingSplines.proportionsSmoothingSplines.psnrSmoothingSplines.pweightsSmoothingSplines.r2SmoothingSplines.renyientropySmoothingSplines.residualsSmoothingSplines.responseSmoothingSplines.rleSmoothingSplines.rmsdSmoothingSplines.rssSmoothingSplines.running_rle_mean!SmoothingSplines.r²SmoothingSplines.sampleSmoothingSplines.sample!SmoothingSplines.samplepairSmoothingSplines.scattermatSmoothingSplines.scoreSmoothingSplines.semSmoothingSplines.skewnessSmoothingSplines.spanSmoothingSplines.sqL2distSmoothingSplines.stderrorSmoothingSplines.summarystatsSmoothingSplines.tiedrankSmoothingSplines.totalvarSmoothingSplines.trimSmoothingSplines.trim!SmoothingSplines.trimvarSmoothingSplines.variationSmoothingSplines.vcovSmoothingSplines.weightsSmoothingSplines.winsorSmoothingSplines.winsor!SmoothingSplines.wmeanSmoothingSplines.wmean!SmoothingSplines.wmedianSmoothingSplines.wquantileSmoothingSplines.wsampleSmoothingSplines.wsample!SmoothingSplines.wsumSmoothingSplines.wsum!SmoothingSplines.zscoreSmoothingSplines.zscore!"
},

]}
