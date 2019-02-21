var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ApproxManifoldProducts.jl-1",
    "page": "Readme",
    "title": "ApproxManifoldProducts.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)<!– (Image: ApproxManifoldProducts) (Image: ApproxManifoldProducts) –>"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Approximate the product between infinite functional objects on a manifold – i.e. belief products.  ApproxManifoldProducts (AMP) is intended for use with the Caesar.jl framework.  AMP is intended for development and testing of various kernel embedding methods for approximating functional products.See Caesar documentation for more details."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "For Julia 0.7 and above press \']\' in the Julia REPL:pkg> add ApproxManifoldProducts"
},

{
    "location": "#Current-Supported-Manifolds-1",
    "page": "Readme",
    "title": "Current Supported Manifolds",
    "category": "section",
    "text": "The following on-manifold function approximations:Euclidean (2DOF),\nS1/Circular (1DOF), or SO(2) equivalent.Work in progress manifolds are:SO(3) / Quaternion,\nPlucker coordinates for rigid transforms,\nSE(3) for rigid transforms.Any suggestions or issues welcome."
},

{
    "location": "autodocs/#ApproxManifoldProducts.evaluateManifoldNaive1D!",
    "page": "Docstrings",
    "title": "ApproxManifoldProducts.evaluateManifoldNaive1D!",
    "category": "function",
    "text": "evaluateManifoldNaive1D!(ret, idx, pts, bw, x)\nevaluateManifoldNaive1D!(ret, idx, pts, bw, x, loo)\nevaluateManifoldNaive1D!(ret, idx, pts, bw, x, loo, diffop)\n\n\nEvalute the KDE naively as equally weighted Gaussian kernels with common bandwidth. This function does, however, allow on-manifold evaluations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxManifoldProducts.manifoldLooCrossValidation",
    "page": "Docstrings",
    "title": "ApproxManifoldProducts.manifoldLooCrossValidation",
    "category": "function",
    "text": "manifoldLooCrossValidation(pts, bw; own, diffop)\n\n\nCalculate negative entropy with leave one out (j\'th element) cross validation.\n\nBackground\n\nFrom: Silverman, B.: Density Estimation for Statistics and Data Analysis, 1986, p.52\n\nProbability density function p(x), as estimated by kernels\n\nhatp_-j(x) = 1(N-1) Σ_i = j^N frac1sqrt2piσ  exp -frac(x-μ)^22 σ^2 \n\nand has Cross Validation number as the average log evaluations of leave one out hatp_{-j}(x):\n\nCV(p) = 1N Σ_i^N log hatp_-j(x_i)\n\nThis quantity CV is related to an entropy H(p) estimate via:\n\nH(p) = -CV(p)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxManifoldProducts.normDistAccAt!",
    "page": "Docstrings",
    "title": "ApproxManifoldProducts.normDistAccAt!",
    "category": "function",
    "text": "normDistAccAt!(ret, idx, x, sigma)\nnormDistAccAt!(ret, idx, x, sigma, w)\n\n\nProbability density function p(x), as estimated by kernels\n\nhatp_-j(x) = 1(N-1) Σ_i = j^N frac1sqrt2piσ  exp -frac(x-μ)^22 σ^2 \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ApproxManifoldProducts.*ApproxManifoldProducts.ApproxManifoldProductsApproxManifoldProducts.BallTreeApproxManifoldProducts.BallTreeDensityApproxManifoldProducts.CTsApproxManifoldProducts.CircularApproxManifoldProducts.Euclid2ApproxManifoldProducts.EuclideanManifoldApproxManifoldProducts.KDEApproxManifoldProducts.KernelDensityEstimateApproxManifoldProducts.MBApproxManifoldProducts.ManifoldApproxManifoldProducts.ManifoldBeliefApproxManifoldProducts.MixtureDensityApproxManifoldProducts.NdimApproxManifoldProducts.NptsApproxManifoldProducts.TUsApproxManifoldProducts.VectorRangeApproxManifoldProducts.__init__ApproxManifoldProducts.addthetaApproxManifoldProducts.convertApproxManifoldProducts.diffthetaApproxManifoldProducts.evalApproxManifoldProducts.evalAvgLogLApproxManifoldProducts.evaluateDualTreeApproxManifoldProducts.evaluateManifoldNaive1D!ApproxManifoldProducts.get2DLambdaApproxManifoldProducts.get2DMuApproxManifoldProducts.get2DMuMinApproxManifoldProducts.getBWApproxManifoldProducts.getCircLambdaApproxManifoldProducts.getCircMuApproxManifoldProducts.getKDEMaxApproxManifoldProducts.getKDEMeanApproxManifoldProducts.getKDERangeApproxManifoldProducts.getKDEfitApproxManifoldProducts.getPointsApproxManifoldProducts.getWeightsApproxManifoldProducts.includeApproxManifoldProducts.intersIntgAppxISApproxManifoldProducts.kde!ApproxManifoldProducts.kde!_CircularNaiveCVApproxManifoldProducts.kldApproxManifoldProducts.logmap_SO2ApproxManifoldProducts.manifoldLooCrossValidationApproxManifoldProducts.marginalApproxManifoldProducts.normDistAccAt!ApproxManifoldProducts.prodAppxMSGibbsSApproxManifoldProducts.randApproxManifoldProducts.rbfApproxManifoldProducts.rbf!ApproxManifoldProducts.rbfAccAt!ApproxManifoldProducts.reci_s2piApproxManifoldProducts.resampleApproxManifoldProducts.resid2DLinearApproxManifoldProducts.rootApproxManifoldProducts.sampleApproxManifoldProducts.setForceEvalDirect!ApproxManifoldProducts.solveresid2DLinearApproxManifoldProducts.solveresid2DLinear!ApproxManifoldProducts.string"
},

]}
