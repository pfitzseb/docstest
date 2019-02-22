var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#KernelDensityEstimate.jl-1",
    "page": "Readme",
    "title": "KernelDensityEstimate.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)<!– (Image: KernelDensityEstimate) (Image: KernelDensityEstimate) (Image: KernelDensityEstimate) –>Kernel Density Estimation with product approximation using multiscale Gibbs sampling.All code is implemented in native Julia, including plotting which uses Gadfly. The main focus of this module is the ability to take the product between multiple KDEs, and makes this module unique from other KDE implementations. This package also supports n-dimensional KDEs. Please see examples below for details. The implementation is already fairly optimized from a symbolic standpoint and is based on work by:Sudderth, Erik B.; Ihler, Alexander, et al. \"Nonparametric belief propagation.\" Communications of the ACM 53.10 (2010): 95-103.The package has built in plotting functionality, using Gadfly. This package is heavily used by IncrementalInference. Comments welcome."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"KernelDensityEstimate\")Newest stuff:Pkg.checkout(\"KernelDensityEstimate\")"
},

{
    "location": "#Plotting-Functions-1",
    "page": "Readme",
    "title": "Plotting Functions",
    "category": "section",
    "text": "The plotting fucntions for this library have been separated into KernelDensityEstimatePlotting.jl."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Bring the module into the workspaceusing KernelDensityEstimate\n# Basic one dimensional examples\n# using leave-one-out likelihood cross validation for bandwidth estimation\np100 = kde!([randn(50);10.0.+2*randn(50)])\np2 = kde!([0.0;10.0],[1.0]) # multibandwidth still to be added\np75 = resample(p2,75)\n\n# bring in the plotting functions\nusing KernelDensityEstimatePlotting\nplot([p100;p2;p75],c=[\"red\";\"green\";\"blue\"]) # using Gadfly under the hood(Image: alt tag)Multidimensional examplepd2 = kde!(randn(3,100));\n@time pd2 = kde!(randn(3,100)); # defaults to loocv\npm12 = marginal(pd2,[1;2]);\npm2 = marginal(pm12,[2]);\nplot(pm2);Multiscale Gibbs product approximation examplep = kde!(randn(2,100))\nq = kde!(2.0.+randn(2,100))\ndummy = kde!(rand(2,100),[1.0]);\nmcmciters = 5\npGM, = prodAppxMSGibbsS(dummy, [p;q], nothing, nothing, Niter=mcmciters)\npq = kde!(pGM)\npq1 = marginal(pq,[1])\nPl1 = plot([marginal(p,[1]);marginal(q,[1]);marginal(pq,[1])],c=[\"red\";\"green\";\"black\"])Direct histogram of points from the productusing Gadfly\nPl2 = Gadfly.plot(x=pGM[1,:],y=pGM[2,:],Geom.histogram2d);\ndraw(PDF(\"product.pdf\",15cm,8cm),hstack(Pl1,Pl2))(Image: alt tag)KDE product between non-gaussian distributionsusing Distributions\np = kde!(rand(Beta(1.0,0.45),300));\nq = kde!(rand(Rayleigh(0.5),100).-0.5);\ndummy = kde!(rand(1,100),[1.0]);\npGM, = prodAppxMSGibbsS(dummy, [p;q], nothing, nothing, Niter=5)\npq = kde!(pGM)\nplot([p;q;pq],c=[\"red\";\"green\";\"black\"])(Image: alt tag)Draw multidimensional distributions as marginalized 2D contour plotsaxis=[[-5.0;5]\';[-2.0;2.0]\';[-10.0;10]\';[-5.0;5]\']\ndraw(PDF(\"test.pdf\",30cm,20cm),\n plot( kde!(randn(4,200)) ) )\n\nN=200;\npts = [2*randn(1,N).+3;\n [2*randn(1,round(Int,N/2))\'.+3.0;2*randn(1,round(Int,N/2))\'.-3.0]\';\n 2*randn(2,N).+3];\np, q = kde!(randn(4,100)), kde!(pts);\ndraw(PNG(\"MultidimPlot.png\",15cm,10cm),\n plot( [p*q;p;q],c=[\"red\";\"black\";\"blue\"], axis=axis, dims=2:4,dimLbls=[\"w\";\"x\";\"y\";\"z\"], levels=4) )(Image: alt tag)# or draw product natively\ndraw(PNG(\"MultidimPlotProd.png\",10cm,7cm),\n plot( p*q, axis=axis, dims=[2;4],dimLbls=[\"w\";\"x\";\"y\";\"z\"]) )(Image: alt tag)"
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "The original C++ kde package was written by Alex Ihler and Mike Mandel in 2003, and has be rewritten in Julia and continuously modified by Dehann Fourie since.  Thank you to contributors and users alike, comments and improvements welcome according to JuliaLang and JuliaRobotics standards."
},

{
    "location": "autodocs/#KernelDensityEstimate.BallTreeDensity",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.BallTreeDensity",
    "category": "type",
    "text": "Evaluate the KDE object at given points.\n\nNote, must use Array{Float64,2} when passing in evaluation points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.calcIndices!",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.calcIndices!",
    "category": "function",
    "text": "calcIndices!(glb)\n\n\nRecompute particles, variance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.gaussianProductMeanCov!",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.gaussianProductMeanCov!",
    "category": "function",
    "text": "gaussianProductMeanCov!(glb, j, destMu, destCov, idx, skip)\ngaussianProductMeanCov!(glb, j, destMu, destCov, idx, skip, addop)\ngaussianProductMeanCov!(glb, j, destMu, destCov, idx, skip, addop, getMu)\ngaussianProductMeanCov!(glb, j, destMu, destCov, idx, skip, addop, getMu, getLambda)\n\n\nMultiplication of Gaussians using leave in densities (if skip skip > 0).  For on-manifold operations, set getMu and getLambda operations accordingly.\n\nNotes\n\nUsed twice in samplePoint! (won\'t skip) and sampleIndex (will skip LOO).\nAssumes manifold diffop baked into getMu.\nuse jth dimension\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.getBW",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.getBW",
    "category": "function",
    "text": "getBW(bd)\ngetBW(bd, ind)\n\n\nReturn the bandwidths used for each kernel in the density estimate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.getEuclidLambda",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.getEuclidLambda",
    "category": "function",
    "text": "getEuclidLambda(lambdas)\n\n\nReturns Λ=Σ^{-1} as sum of individual information matrices (inverse covariances – i.e. bandwidths).\n\nΛ = Σ_i Λ_i\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.getEuclidMu",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.getEuclidMu",
    "category": "function",
    "text": "getEuclidMu(mus, lambdas)\ngetEuclidMu(mus, lambdas, scale)\n\n\nReturns Λμ.\n\nΛμ = Σ_i (Λ_i*μ_i)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.getMiniMaxi",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.getMiniMaxi",
    "category": "function",
    "text": "getMiniMaxi(bt, leftI, rightI, d, addop, diffop)\n\n\nReturn \"smaller\" and \"larger\" of two child nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.getPoints",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.getPoints",
    "category": "function",
    "text": "getPoints(bd)\n\n\nReturn the points (centers) used to construct the KDE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.getWeights",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.getWeights",
    "category": "function",
    "text": "getWeights(bd)\ngetWeights(bd, ind)\n\n\nReturn the weights used for each kernel in the density estimate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.golden",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.golden",
    "category": "function",
    "text": "golden(bd, ax, bx, cx, tol, addop, diffop)\n\n\nGOLDEN   Minimize the nLOO_LL function for KDE bandwidth selection of one variable using golden section search.\n\nxmin, fmin = golden(npd, f, ax, bx, cx, tol) computes a local minimum of f = KDE.nLOO_LL. xmin is the computed local minimizer of f and fmin is f(xmin). xmin is computed to an relative accuracy of TOL.\n\nThe parameters ax, bx and cx must satisfy the following conditions: ax < bx < cx, f(bx) < f(ax) and f(bx) < f(cx).\n\nxmin satisfies ax < xmin < cx. golden is guaranteed to succeed if f is continuous between ax and cx\n\nRoman Geus, ETH Zuerich, 9.12.97\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.kde!",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.kde!",
    "category": "function",
    "text": "kde!(points)\nkde!(points, ks)\nkde!(points, ks, addop)\nkde!(points, ks, addop, diffop)\n\n\nConstruct a BallTreeDensity object using points for centers and bandwidth ks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.makeFasterSampleIndex!",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.makeFasterSampleIndex!",
    "category": "function",
    "text": "makeFasterSampleIndex!(j, cmo, glb)\nmakeFasterSampleIndex!(j, cmo, glb, diffop)\n\n\nCalculate the likelihoods of left out kernel means (label_i\'s) against Normal distribution with mean glb.Malmost and variance glb.Calmost – we think ...\n\nAssumes\n\nTemporary product gaussian on manifold has already been computed and stored in glb.Calmost and glb.Malmost.\n\nNotes\n\nIncoming temporary product mean is glb.Malmost and covariance glb.Calmost.\nj is the left out density – i.e. the density for which we want to select a new label (kernel)\ncmo.tmpM is the manifold difference from all dimensions prior to evaluating Gaussian pdf, and relates to levels of the k-d tree...\nz is index of leave one out density kernels – i.e. evaluate likelihood of each kernel mean glb.p[z] = p(μ_z)\nNew kernel will be selected randomly from likelihood weights in glb.p[z:z].\n\nPotential Concerns\n\nMake sure tmpC can happen on Euclidean vs user manifold\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.marginal",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.marginal",
    "category": "function",
    "text": "marginal(bd, ind)\n\n\nExtract the marginal distribution from the given higher dimensional kernel density estimate object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.rand",
    "page": "Docstrings",
    "title": "Base.rand",
    "category": "function",
    "text": "rand(p)\nrand(p, N)\n\n\nRandomly sample points from the KernelDensityEstimate object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.sample",
    "page": "Docstrings",
    "title": "StatsBase.sample",
    "category": "function",
    "text": "sample(npd, Npts)\n\n\nRandomly sample points from the KernelDensityEstimate object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.sampleIndex",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.sampleIndex",
    "category": "function",
    "text": "sampleIndex(j, cmo, glb)\nsampleIndex(j, cmo, glb, addop)\nsampleIndex(j, cmo, glb, addop, diffop)\nsampleIndex(j, cmo, glb, addop, diffop, getMu)\nsampleIndex(j, cmo, glb, addop, diffop, getMu, getLambda)\n\n\nSample new kernel in leave out density according to multiscale Gibbs sampling.\n\ncalculate temporary product of leave in density components (labels previously selected)\nevaluate the likelihoods of the kernel means from the left out kernel on temporary product\nrandomly select a new label (kernel_i) for left out density according to temporarily evaluated likelihoods\n\nNotes\n\nj is the left out density.\nNeeds on-manifold getMu for product of two leave in density kernels.\nNeeds diffop (on manifold difference for kernel evaluation).\n\nSudderth PhD, p.139, Fig. 3.3, top-left operation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.sampleIndices!",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.sampleIndices!",
    "category": "function",
    "text": "sampleIndices!(X, cmoi, glb, frm)\nsampleIndices!(X, cmoi, glb, frm, diffop)\n\n\n??\n\nNotes\n\nThis function does kernel evaluation internally.\nDoes not have a loo skip step.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#KernelDensityEstimate.samplePoint!",
    "page": "Docstrings",
    "title": "KernelDensityEstimate.samplePoint!",
    "category": "function",
    "text": "samplePoint!(X, glb, frm)\nsamplePoint!(X, glb, frm, addop)\nsamplePoint!(X, glb, frm, addop, getMu)\nsamplePoint!(X, glb, frm, addop, getMu, getLambda)\n\n\nSampling a point from the product of kernels (density components) listed in glb.variance and glb.particles without skipping a kernel (not a leave-one-out case).\n\nManifold defined by addop, getMu, and getLambda.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "KernelDensityEstimate.*KernelDensityEstimate.BallTreeKernelDensityEstimate.BallTreeDensityKernelDensityEstimate.DirectSizeKernelDensityEstimate.FORCE_EVAL_DIRECTKernelDensityEstimate.GaussianKerKernelDensityEstimate.GbGlbKernelDensityEstimate.KernelDensityEstimateKernelDensityEstimate.MSCompOptKernelDensityEstimate.MixtureDensityKernelDensityEstimate.NO_CHILDKernelDensityEstimate.NdimKernelDensityEstimate.NptsKernelDensityEstimate.VectorRangeKernelDensityEstimate.buildBall!KernelDensityEstimate.buildTree!KernelDensityEstimate.bwKernelDensityEstimate.bwMaxKernelDensityEstimate.bwMinKernelDensityEstimate.bwUniformKernelDensityEstimate.calcIndices!KernelDensityEstimate.calcStats!KernelDensityEstimate.calcStatsBall!KernelDensityEstimate.calcStatsDensity!KernelDensityEstimate.centerKernelDensityEstimate.changeWeights!KernelDensityEstimate.closer!KernelDensityEstimate.convertKernelDensityEstimate.dontRecurseSubtreesKernelDensityEstimate.entropyKernelDensityEstimate.evalKernelDensityEstimate.evalAvgLogLKernelDensityEstimate.evalDirectKernelDensityEstimate.evaluateKernelDensityEstimate.evaluateDualTreeKernelDensityEstimate.gaussianProductMeanCov!KernelDensityEstimate.getBWKernelDensityEstimate.getEuclidLambdaKernelDensityEstimate.getEuclidMuKernelDensityEstimate.getIndexOfKernelDensityEstimate.getKDEMaxKernelDensityEstimate.getKDEMeanKernelDensityEstimate.getKDERangeKernelDensityEstimate.getKDERangeLinspaceKernelDensityEstimate.getKDEfitKernelDensityEstimate.getMiniMaxiKernelDensityEstimate.getPointsKernelDensityEstimate.getTypeKernelDensityEstimate.getWeightsKernelDensityEstimate.gibbs1KernelDensityEstimate.goldenKernelDensityEstimate.includeKernelDensityEstimate.initIndices!KernelDensityEstimate.intersIntgAppxISKernelDensityEstimate.isLeafKernelDensityEstimate.kde!KernelDensityEstimate.kldKernelDensityEstimate.ksizeKernelDensityEstimate.leafFirstKernelDensityEstimate.leafLastKernelDensityEstimate.leftKernelDensityEstimate.levelDown!KernelDensityEstimate.levelInit!KernelDensityEstimate.makeBallTreeKernelDensityEstimate.makeBallTreeDensityKernelDensityEstimate.makeDualTreeKernelDensityEstimate.makeEmptyGbGlbKernelDensityEstimate.makeFasterSampleIndex!KernelDensityEstimate.marginalKernelDensityEstimate.maxDistGauss!KernelDensityEstimate.maxDistKer!KernelDensityEstimate.meanKernelDensityEstimate.minDistGauss!KernelDensityEstimate.minDistKer!KernelDensityEstimate.most_spread_coordKernelDensityEstimate.movePoints!KernelDensityEstimate.nLOO_LLKernelDensityEstimate.neighborMinMaxKernelDensityEstimate.pArrHdlsKernelDensityEstimate.parsestringvectorKernelDensityEstimate.printBallTreeKernelDensityEstimate.printGlbsKernelDensityEstimate.prodAppxMSGibbsSKernelDensityEstimate.pushDownAllKernelDensityEstimate.pushDownLocalKernelDensityEstimate.randKernelDensityEstimate.randKernelKernelDensityEstimate.rangeBKernelDensityEstimate.recurseMinMaxKernelDensityEstimate.recurseOnSubtreesKernelDensityEstimate.resampleKernelDensityEstimate.rightKernelDensityEstimate.rootKernelDensityEstimate.sampleKernelDensityEstimate.sampleIndexKernelDensityEstimate.sampleIndices!KernelDensityEstimate.samplePoint!KernelDensityEstimate.select!KernelDensityEstimate.setForceEvalDirect!KernelDensityEstimate.stringKernelDensityEstimate.swap!KernelDensityEstimate.swapBall!KernelDensityEstimate.swapDensity!KernelDensityEstimate.updateBandwidth!KernelDensityEstimate.validIndexKernelDensityEstimate.varianceKernelDensityEstimate.weight"
},

]}
