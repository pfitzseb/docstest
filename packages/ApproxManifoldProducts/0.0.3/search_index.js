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
    "location": "autodocs/#ApproxManifoldProducts.manifoldProduct",
    "page": "Docstrings",
    "title": "ApproxManifoldProducts.manifoldProduct",
    "category": "function",
    "text": "manifoldProduct(ff, manif; Niter)\n\n\nApproximate the pointwise the product of functionals on manifolds using KernelDensityEstimate.\n\nExample\n\nusing ApproxManifoldProducts\n\n# two densities on a cylinder\np = manikde!(randn(2,100), (:Euclid, :Circular) )\n\npts2a = 3.0*randn(1,100).+5.0\npts2b = TransformUtils.wrapRad.(0.5*randn(1,100).+pi)\nq = manikde!([pts2a;pts2b], (:Euclid, :Circular) )\n\n# approximate the product between hybrid manifold densities\npq = manifoldProduct([p;q], (:Euclid, :Circular))\n\n# convenient plotting (work in progress...)\n# TODO update docs\n\n# direct histogram plot\nusing Gadfly\nplot( x=getPoints(pq)[1,:], y=getPoints(pq)[2,:], Geom.histogram2d )\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ApproxManifoldProducts.manikde!",
    "page": "Docstrings",
    "title": "ApproxManifoldProducts.manikde!",
    "category": "function",
    "text": "manikde!(pts, bws, manifolds)\n\n\nLegacy extension of KDE.kde! function to approximate smooth functions based on samples, using likelihood cross validation for bandwidth selection.  This method allows approximation over hybrid manifolds.\n\n\n\n\n\n"
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
    "text": "ApproxManifoldProducts.*ApproxManifoldProducts.A_invBApproxManifoldProducts.AngleAxisApproxManifoldProducts.ApproxManifoldProductsApproxManifoldProducts.AxisAngleApproxManifoldProducts.BallTreeApproxManifoldProducts.BallTreeDensityApproxManifoldProducts.CTsApproxManifoldProducts.CircularApproxManifoldProducts.Euclid2ApproxManifoldProducts.EuclideanManifoldApproxManifoldProducts.EulerApproxManifoldProducts.FloatIntApproxManifoldProducts.KDEApproxManifoldProducts.KernelDensityEstimateApproxManifoldProducts.MBApproxManifoldProducts.ManifoldApproxManifoldProducts.ManifoldBeliefApproxManifoldProducts.MixtureDensityApproxManifoldProducts.NdimApproxManifoldProducts.NptsApproxManifoldProducts.QuaternionApproxManifoldProducts.RApproxManifoldProducts.SE2ApproxManifoldProducts.SE3ApproxManifoldProducts.SO3ApproxManifoldProducts.TUsApproxManifoldProducts.TransformUtilsApproxManifoldProducts.VectorFloatIntApproxManifoldProducts.VectorRangeApproxManifoldProducts.\\ApproxManifoldProducts.__init__ApproxManifoldProducts.addthetaApproxManifoldProducts.buildHybridManifoldCallbacksApproxManifoldProducts.compareApproxManifoldProducts.convertApproxManifoldProducts.convert!ApproxManifoldProducts.deltaso3veeApproxManifoldProducts.diffthetaApproxManifoldProducts.doinversetransform!ApproxManifoldProducts.evalApproxManifoldProducts.evalAvgLogLApproxManifoldProducts.evaluateDualTreeApproxManifoldProducts.evaluateManifoldNaive1D!ApproxManifoldProducts.expmOwnApproxManifoldProducts.expmOwn1ApproxManifoldProducts.expmOwn2ApproxManifoldProducts.expmOwn3ApproxManifoldProducts.expmOwn4ApproxManifoldProducts.expmOwnTApproxManifoldProducts.get2DLambdaApproxManifoldProducts.get2DMuApproxManifoldProducts.get2DMuMinApproxManifoldProducts.getBWApproxManifoldProducts.getCircLambdaApproxManifoldProducts.getCircMuApproxManifoldProducts.getKDEManifoldBandwidthsApproxManifoldProducts.getKDEMaxApproxManifoldProducts.getKDEMeanApproxManifoldProducts.getKDERangeApproxManifoldProducts.getKDEfitApproxManifoldProducts.getPointsApproxManifoldProducts.getWeightsApproxManifoldProducts.includeApproxManifoldProducts.intersIntgAppxISApproxManifoldProducts.inverseApproxManifoldProducts.kde!ApproxManifoldProducts.kde!_CircularNaiveCVApproxManifoldProducts.kldApproxManifoldProducts.logmapApproxManifoldProducts.logmap_SO2ApproxManifoldProducts.manifoldLooCrossValidationApproxManifoldProducts.manifoldProductApproxManifoldProducts.manikde!ApproxManifoldProducts.marginalApproxManifoldProducts.matrixApproxManifoldProducts.matrix!ApproxManifoldProducts.normDistAccAt!ApproxManifoldProducts.normalizeApproxManifoldProducts.normalize!ApproxManifoldProducts.ominusApproxManifoldProducts.oplusApproxManifoldProducts.prodAppxMSGibbsSApproxManifoldProducts.q_conjApproxManifoldProducts.q_conj!ApproxManifoldProducts.randApproxManifoldProducts.rbfApproxManifoldProducts.rbf!ApproxManifoldProducts.rbfAccAt!ApproxManifoldProducts.reci_s2piApproxManifoldProducts.resampleApproxManifoldProducts.resid2DLinearApproxManifoldProducts.rightJacExmapApproxManifoldProducts.rightJacExmapinvApproxManifoldProducts.rootApproxManifoldProducts.rotateApproxManifoldProducts.rotate!ApproxManifoldProducts.sampleApproxManifoldProducts.se2veeApproxManifoldProducts.se2vee!ApproxManifoldProducts.setForceEvalDirect!ApproxManifoldProducts.setso3!ApproxManifoldProducts.skewApproxManifoldProducts.so3ApproxManifoldProducts.solveresid2DLinearApproxManifoldProducts.solveresid2DLinear!ApproxManifoldProducts.stringApproxManifoldProducts.transposeApproxManifoldProducts.vecApproxManifoldProducts.veeApproxManifoldProducts.vee!ApproxManifoldProducts.veeAngleAxisApproxManifoldProducts.veeEulerApproxManifoldProducts.veeQuaternionApproxManifoldProducts.wrapRadApproxManifoldProducts.⊕ApproxManifoldProducts.⊖"
},

]}
