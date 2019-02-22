var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ElasticFDA-1",
    "page": "Readme",
    "title": "ElasticFDA",
    "category": "section",
    "text": "Julia library for elastic functional data analysis(Image: Build Status) (Image: Build status) (Image: Coverage Status)(Image: ElasticFDA) (Image: ElasticFDA)A Julia package for functional data analysis using the square root slope framework and curves using the square root velocity framework which performs pair-wise and group-wise alignment as well as modeling using functional component analysis and regression."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package can be installed using and is only currently supported on linux(v1.0) add ElasticFDAThis package relies on two c/cpp optimization routines which will either compile with icc or g++. One of the libraries relies LAPACK and BLAS. The makefile will detect if icc is installed and use it, otherwise it will default to g++. If icc is detected it will use MKL as the BLAS and LAPACK implementation. Otherwise OpenBLAS is used/required."
},

{
    "location": "#Doumentation-1",
    "page": "Readme",
    "title": "Doumentation",
    "category": "section",
    "text": "http://elasticfdajl.readthedocs.org/en/latest/"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Tucker, J. D. 2014, Functional Component Analysis and Regression using Elastic Methods. Ph.D. Thesis, Florida State University.Robinson, D. T. 2012, Function Data Analysis and Partial Shape Matching in the Square Root Velocity Framework. Ph.D. Thesis, Florida State University.Huang, W. 2014, Optimization Algorithms on Riemannian Manifolds with Applications. Ph.D. Thesis, Florida State University.Srivastava, A., Wu, W., Kurtek, S., Klassen, E. and Marron, J. S. (2011). Registration of Functional Data Using Fisher-Rao Metric. arXiv:1103.3817v2 [math.ST].Tucker, J. D., Wu, W. and Srivastava, A. (2013). Generative models for functional data using phase and amplitude separation. Computational Statistics and Data Analysis 61, 50-66.J. D. Tucker, W. Wu, and A. Srivastava, ``Phase-Amplitude Separation of Proteomics Data Using Extended Fisher-Rao Metric,\" Electronic Journal of Statistics, Vol 8, no. 2. pp 1724-1733, 2014.J. D. Tucker, W. Wu, and A. Srivastava, \"Analysis of signals under compositional noise With applications to SONAR data,\" IEEE Journal of Oceanic Engineering, Vol 29, no. 2. pp 318-330, Apr 2014.S. Kurtek, A. Srivastava, and W. Wu. Signal estimation under random time-warpings and nonlinear signal alignment. In Proceedings of Neural Information Processing Systems (NIPS), 2011.Joshi, S.H., Srivastava, A., Klassen, E. and Jermyn, I. (2007). A Novel Representation for Computing Geodesics Between n-Dimensional Elastic Curves. IEEE Conference on computer Vision and Pattern Recognition (CVPR), Minneapolis, MN.Srivastava, A., Klassen, E., Joshi, S., Jermyn, I., (2011). Shape analysis of elastic curves in euclidean spaces. Pattern Analysis and Machine Intelligence, IEEE Transactions on 33 (7), 1415-1428.Wen Huang, Kyle A. Gallivan, Anuj Srivastava, Pierre-Antoine Absil. \"Riemannian Optimization for Elastic Shape Analysis\", Short version, The 21st International Symposium on Mathematical Theory of Networks and Systems (MTNS 2014).Q. Xie, S. Kurtek, E. Klassen, G. E. Christensen and A. Srivastava. Metric-based pairwise and multiple image registration. IEEE European Conference on Computer Vision (ECCV), September, 2014Cheng, W., Dryden, I. L., & Huang, X. (2016). Bayesian registration of functions and curves. Bayesian Analysis, 11(2), 447–475.Y. Lu, R. Herbei and S. Kurtek (2017). \"Bayesian Registration of Functions with a Gaussian Process Prior.\" Journal of Computational and Graphical Statistics: in press: 1-34"
},

{
    "location": "autodocs/#ElasticFDA.DP_mean",
    "page": "Docstrings",
    "title": "ElasticFDA.DP_mean",
    "category": "function",
    "text": "Calculate mean function using Bayesian Dynamic Programming     DP_mean(f, times=5)     :param f: array (M,N) of N functions     :param times: MCMC parameter number of times to split\n\nReturns Dict containing\n:return distmfamily: distance matrix\n:return match_matrix: match_matrix\n:return position: position\n:return mu_5: mean function\n:return rtmatrix: rtmatrix\n:return sumdist: sum distance\n:return qt_fitted: qt fitted matrix\n:return esimator: estimator\n:return estimator2: estimator2\n:return regcurve: registered curves\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.Enorm",
    "page": "Docstrings",
    "title": "ElasticFDA.Enorm",
    "category": "function",
    "text": "Calculate normal Energy on an Array\n\nEnorm(x::Array{Float64,1})\n\n\n\n\n\nEnorm(x::Array{Complex{Float64},1})\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.align_fPCA",
    "page": "Docstrings",
    "title": "ElasticFDA.align_fPCA",
    "category": "function",
    "text": "Aligns a collection of functions while extracting principal components. The functions are aligned to the principal components\n\nalign_fPCA(f, timet; num_comp=3, smooth=false, sparam=10, MaxItr=50)\n:param f: array of shape (M,N) of N functions with M samples\n:param timet: vector of size M describing the sample points\n:param num_comp: Number of components (default = 3)\n:param smooth: Smooth the data using a box filter (default = false)\n:param sparam: Number of times to run smoothing filter (default 10)\n:param MaxItr: Maximum number of iterations\n\nReturns Dict containing\n:return fn: aligned functions - array of shape (M,N) of N functions with M\n            samples\n:return qn: aligned srvfs - similar structure to fn\n:return q0: original srvf - similar structure to fn\n:return mqn: srvf mean or median - vector of length M\n:return gam: warping functions - similar structure to fn\n:return q_pca: srsf principal directions\n:return f_pca: functional principal directions\n:return latent: latent values\n:return coef: coefficients\n:return U: eigenvectors\n:return orig_var: Original Variance of Functions\n:return amp_var: Amplitude Variance\n:return phase_var: Phase Variance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.approx",
    "page": "Docstrings",
    "title": "ElasticFDA.approx",
    "category": "function",
    "text": "Linear interpolation\n\napprox(xd, yd, xi)\n:param xd: x samples\n:param yd: response samples\n:param xi: new x samples\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.arclength",
    "page": "Docstrings",
    "title": "ElasticFDA.arclength",
    "category": "function",
    "text": "Calculate arc-length parametrization of function\n\narclength(f::Vector)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.bs",
    "page": "Docstrings",
    "title": "ElasticFDA.bs",
    "category": "function",
    "text": "Compute B-Spline basis     bs(x, df, norder, nderiv=0)     :param x: time samples     :param df: degree of freedom     :param norder: order of splines     :param nderiv: derivative number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.calc_j",
    "page": "Docstrings",
    "title": "ElasticFDA.calc_j",
    "category": "function",
    "text": "Calculate Jacobian of basis\n\ncalc_j(basis)\n:param basis: array of (2) from find_basis_normal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.calc_shape_dist",
    "page": "Docstrings",
    "title": "ElasticFDA.calc_shape_dist",
    "category": "function",
    "text": "Calculate elastic shape distance between two curves beta1 and beta2\n\ncalc_shape_dist(beta1, beta2)\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemannian BFGS\n               (\"RBFGS\")\n:param wscale: with scale (false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.calculate_variance",
    "page": "Docstrings",
    "title": "ElasticFDA.calculate_variance",
    "category": "function",
    "text": "Calculate variance along curve\n\ncalculate_variance(beta)\n:param beta: array (n, T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.calculatecentroid",
    "page": "Docstrings",
    "title": "ElasticFDA.calculatecentroid",
    "category": "function",
    "text": "Calculate centroid of curve\n\ncalculatecentroid(beta)\n:param beta: array describing curve (n,T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.cumtrapz",
    "page": "Docstrings",
    "title": "ElasticFDA.cumtrapz",
    "category": "function",
    "text": "Cumulative Trapezoidal Integration\n\ncumtrapz(x, y, dim=1)\n:param x: vector describing time samples\n:param y: array describing response\n:param dim: dimension to integrate over\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.cumtrapzmid",
    "page": "Docstrings",
    "title": "ElasticFDA.cumtrapzmid",
    "category": "function",
    "text": "Cumulative Trapezoidal Integration using midpoint\n\ncumtrapzmid(x, y, c)\n:param x: time samples\n:param y: resposne samples\n:param c: midpoint\n:param mid: midpoint location\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.curve_geodesic",
    "page": "Docstrings",
    "title": "ElasticFDA.curve_geodesic",
    "category": "function",
    "text": "Form geodesic between two curves\n\ncurve_geodesic(beta1::Array{Float64,2}, beta2::Array{Float64,2}, k::Integer=5)\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n:param k: number of curves along geodesic\n:param wscale: with scale (false)\n\nReturns\n:return geod: curves along geodesic (n,T,k)\n:return geod_q: srvf\'s along geodesic\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.curve_karcher_cov",
    "page": "Docstrings",
    "title": "ElasticFDA.curve_karcher_cov",
    "category": "function",
    "text": "Calculate Karcher Covariance of a set of curves\n\ncurve_karcher_cov(betamean, beta; mode=\'O\')\n:param betamean: array (n,T) of mean curve\n:param beta: array (n,T,N) for N number of curves\n:param mode: Open (\'O\') or Closed (\'C\') curves\n\n:return K: covariance matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.curve_karcher_mean",
    "page": "Docstrings",
    "title": "ElasticFDA.curve_karcher_mean",
    "category": "function",
    "text": "Calculates Karcher mean of a collection of curves using the elastic square-root velocity (srvf) framework.\n\ncurve_karcher_mean(beta; mode=\'O\', maxit=20)\n:param beta: array (n,T,N) for N number of curves\n:param mode: Open (\'O\') or Closed (\'C\') curves\n:param maxit: maximum number of iterations\n:param wscale: with scale (false)\n\n:return mu: mean srvf\n:return betamean: mean curve\n:return v: shooting vectors\n:return q: array of srvfs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.curve_pair_align",
    "page": "Docstrings",
    "title": "ElasticFDA.curve_pair_align",
    "category": "function",
    "text": "Pairwise align two curves\n\ncurve_pair_align(beta1::Array{Float64,2}, beta2::Array{Float64,2})\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n\nReturns\n:return beta2n: aligned curve 2 to 1\n:return q2n: aligned srvf 2 to 1\n:return gam: warping function\n:return q1: srvf of curve 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.curve_principal_directions",
    "page": "Docstrings",
    "title": "ElasticFDA.curve_principal_directions",
    "category": "function",
    "text": "Calculate principal directions of a set of curves\n\ncurve_principal_directions(betamean, mu, K; mode=\'O\', no=3, N=5)\n:param betamean: array (n,T) of mean curve\n:param mu: array (n,T) of mean srvf\n:param K: array (T,T) covariance matrix\n:param mode: Open (\'O\') or Closed (\'C\') curve\n:param no: number of components\n:param N: number of samples on each side of mean\n\n:return pd: array describing principal directions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.curve_srvf_align",
    "page": "Docstrings",
    "title": "ElasticFDA.curve_srvf_align",
    "category": "function",
    "text": "Aligns a collection of curves using the elastic square-root velocity (srvf) framework.\n\ncurve_srvf_align(beta; mode=\'O\', maxit=20)\n\n:param beta: array (n,T,N) for N number of curves\n:param mode: Open (\'O\') or Closed (\'C\') curves\n:param maxit: maximum number of iterations\n\n:return betan: aligned curves\n:return qn: aligned srvfs\n:return betamean: mean curve\n:return q_mu: mean srvf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.curve_to_q",
    "page": "Docstrings",
    "title": "ElasticFDA.curve_to_q",
    "category": "function",
    "text": "Convert curve to square-root velocity function (srvf)\n\ncurve_to_q(beta)\n:param beta: array describing curve (n,T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.curve_zero_crossing",
    "page": "Docstrings",
    "title": "ElasticFDA.curve_zero_crossing",
    "category": "function",
    "text": "Calculate zero crossing for optimal regression between curves\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.dp_bayes",
    "page": "Docstrings",
    "title": "ElasticFDA.dp_bayes",
    "category": "function",
    "text": "Calculate Dynamic Programming using Bayesian approach     dp_bayes(q1, q1L, q2L, times, cut)     :param q1: vector (N)     :param q1L: vector (q1L)     :param q2L: vector (q2L)     :param times: MCMC parameter number of simulations     :param cut: MCMC parameter number of cuts\n\n:return MatchIn2: warping function\n:return NDist: minimal distance\n:return q2LL: re-parameterized q2L\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.elastic_distance",
    "page": "Docstrings",
    "title": "ElasticFDA.elastic_distance",
    "category": "function",
    "text": "Calculate elastic distance between two functions\n\nelastic_distance(f1::Vector, f2::Vector, timet::Vector,\n                 method::AbstractString=\"SIMUL\")\n:param f1: vector of function 1 samples\n:param f2: vector of function 2 samples\n:param timet: vector of time samples\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemannian BFGS\n               (\"RBFGS\"), Simultaneous Alignment (\"SIMUL\")\n\n:return da: amplitude distance\n:return dp: phase distance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.elastic_logistic",
    "page": "Docstrings",
    "title": "ElasticFDA.elastic_logistic",
    "category": "function",
    "text": "Calculate elastic logistic regression from function data f, for response y\n\nelastic_logistic(f, y, timet; B=None, df=20, max_itr=20, smooth=false)\n:param f: array (M,N) of N functions\n:param y: vector (N) of responses\n:param timet: vector (N) describing time samples\n:param B: matrix describing basis functions (M,N) (default=None generates a\n          B-spline basis\n:param df: degree of freedom of basis\n:param max_itr: maximum number of iterations\n:param smooth: smooth data\n\nReturns Dict describing regression\n:return alpha: intercept\n:return beta: regression function\n:return fn: aligned functions\n:return qn: aligned srsfs\n:return gamma: warping functions\n:return q: original srsfs\n:retrun B: basis functions\n:return type: type of regressions\n:return b: coefficients\n:return LL: logistic loss\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.elastic_mlogistic",
    "page": "Docstrings",
    "title": "ElasticFDA.elastic_mlogistic",
    "category": "function",
    "text": "Calculate elastic m-logistic regression from function data f, for response y\n\nelastic_mlogistic(f, y, timet; B=None, df=20, max_itr=20, smooth=false)\n:param f: array (M,N) of N functions\n:param y: vector (N) of responses\n:param timet: vector (N) describing time samples\n:param B: matrix describing basis functions (M,N) (default=None generates a\n          B-spline basis\n:param df: degree of freedom of basis\n:param max_itr: maximum number of iterations\n:param smooth: smooth data\n\nReturns Dict describing regression\n:return alpha: intercept\n:return beta: regression function\n:return fn: aligned functions\n:return qn: aligned srsfs\n:return gamma: warping functions\n:return q: original srsfs\n:retrun B: basis functions\n:return type: type of regressions\n:return b: coefficients\n:return n_classes: number of classes\n:return LL: logistic loss\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.elastic_prediction",
    "page": "Docstrings",
    "title": "ElasticFDA.elastic_prediction",
    "category": "function",
    "text": "Prediction from elastic regression model\n\nelastic_prediction(f, timet, model; y=None, smooth=false)\n:param f: functions to predict\n:param timet: vector describing time samples\n:param model: calculated model (regression, musicologist, mlogistic)\n:param y: true response (default = None)\n:param smooth: smooth data (default = false)\n\nReturns\n:return y_pred: predicted value\n:return y_labels: labels of predicted value\n:return Perf: Performance metric if truth is supplied\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.elastic_regression",
    "page": "Docstrings",
    "title": "ElasticFDA.elastic_regression",
    "category": "function",
    "text": "Calculate elastic regression from function data f, for response y\n\nelastic_regression(f, y, timet; B=None, lambda=0, df=20, max_itr=20,\n                   smooth=false)\n:param f: array (M,N) of N functions\n:param y: vector (N) of responses\n:param timet: vector (N) describing time samples\n:param B: matrix describing basis functions (M,N) (default=None generates a\n          B-spline basis\n:param lambda: regularization parameter\n:param df: degree of freedom of basis\n:param max_itr: maximum number of iterations\n:param smooth: smooth data\n\nReturns Dict describing regression\n:return alpha: intercept\n:return beta: regression function\n:return fn: aligned functions\n:return qn: aligned srsfs\n:return gamma: warping functions\n:return q: original srsfs\n:retrun B: basis functions\n:return type: type of regressions\n:return b: coefficients\n:return SSE: sum of squared error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.extrema_1s",
    "page": "Docstrings",
    "title": "ElasticFDA.extrema_1s",
    "category": "function",
    "text": "Find location of change of sign of srsf that is arclength parameterized\n\nextrema_1s(t::Vector, q::Vector)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.f_to_srsf",
    "page": "Docstrings",
    "title": "ElasticFDA.f_to_srsf",
    "category": "function",
    "text": "Convert function to square-root slope function (srsf)\n\nf_to_srsf(f::Array, timet=0, smooth=false)\n:param f: array of shape (M,N) describing N functions of M samples\n:param timet: vector describing time samples (default = 0) will generate\n              linearly spaced time vector of length M\n:param smooth: smooth data (default = false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.find_basis_normal",
    "page": "Docstrings",
    "title": "ElasticFDA.find_basis_normal",
    "category": "function",
    "text": "Find basis normal to srvf\n\nfind_basis_normal(q)\n:param q: array (n, T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.find_best_rotation",
    "page": "Docstrings",
    "title": "ElasticFDA.find_best_rotation",
    "category": "function",
    "text": "Find best rotation between two srvfs\n\nfind_best_roation(q1,q2)\n:param q1: array (n, T)\n:param q2: array (n, T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.find_rotation_and_seed_q",
    "page": "Docstrings",
    "title": "ElasticFDA.find_rotation_and_seed_q",
    "category": "function",
    "text": "Find best rotation and seed value between two srvfs, q1 and q2\n\nfind_rotation_and_seed_q(q1,q2)\n:param q1: array (n,T)\n:param q2: array (n,T)\n\n:return q2new: rotated srvf\n:return O_hat: rotation matrix\n:return tau: seed value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.find_rotation_seed_coord",
    "page": "Docstrings",
    "title": "ElasticFDA.find_rotation_seed_coord",
    "category": "function",
    "text": "Finds best rotation and seed value between two curves beta1, beta2\n\nfind_rotation_seed_coord(beta1,beta2)\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n\n:return beta2new: rotated curve\n:return O_hat1: rotation matrix\n:return tau: seed value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.findkarcherinv",
    "page": "Docstrings",
    "title": "ElasticFDA.findkarcherinv",
    "category": "function",
    "text": "Find Karcher inverse of warping functions\n\nfindkarcherinv(warps, times, roundi=false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.gauss_model",
    "page": "Docstrings",
    "title": "ElasticFDA.gauss_model",
    "category": "function",
    "text": "Computes random samples of functions from aligned data using Gaussian model\n\ngauss_model(warp_data; n=1, sort_samples=false)\n:param warp_data: fdawarp type from srsf_align of aligned data\n:param n: number of samples\n:param sort_samples: sort samples\n\nReturns warp_data containing\n:return fs: random aligned functions\n:return gams: random warping functions\n:return ft: random functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.gradient",
    "page": "Docstrings",
    "title": "ElasticFDA.gradient",
    "category": "function",
    "text": "1-D Gradient\n\ngradient(a::Array, dx::Float64=1)\n:param f: Vector\n:param dx: stepsize\n\n:return g: gradient\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.gradient2",
    "page": "Docstrings",
    "title": "ElasticFDA.gradient2",
    "category": "function",
    "text": "2-D Gradient\n\ngradient2(a::Array, dx::Float64=1, dy::Float=1)\n:param a: matrix\n:param dx: stepsize\n:param dy: stepsize\n\n:return dxdu: derivatives along x\n:return dydv: derivatives along y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.gradient_spline",
    "page": "Docstrings",
    "title": "ElasticFDA.gradient_spline",
    "category": "function",
    "text": "Calculate gradient of function using B-splines\n\ngradient_spline(timet::Vector, f, smooth=false)\n:param: timet: Vector describing time samples\n:param: f: Vector or Array (M,N) describing functions of M samples\n:param: smooth: smooth data (default = false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.gram_schmidt",
    "page": "Docstrings",
    "title": "ElasticFDA.gram_schmidt",
    "category": "function",
    "text": "Gram-Schmidt Orthogonalization of basis\n\ngram_schmidt(basis)\n:param basis: basis out of find_basis_normal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.group_action_by_gamma",
    "page": "Docstrings",
    "title": "ElasticFDA.group_action_by_gamma",
    "category": "function",
    "text": "Warp srvf by gamma\n\ngroup_action_by_gamma(q, gamma)\n:param q: array (n,T)\n:param gamma: vector (T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.group_action_by_gamma_coord",
    "page": "Docstrings",
    "title": "ElasticFDA.group_action_by_gamma_coord",
    "category": "function",
    "text": "Warp curve f by gamma\n\ngroup_action_by_gamma_coord(f, gamma)\n:param f: array (n,T)\n:param gamma: vector (T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.group_warping_bayes",
    "page": "Docstrings",
    "title": "ElasticFDA.group_warping_bayes",
    "category": "function",
    "text": "Group alignment of functions using Bayesian method\n\ngroup_warping_bayes(f; iter=20000, times=5, powera=1)\n:param f: array (M,N) of N functions\n:param iter: number of MCMC iterations\n:param times: time slicing\n:param powera: MCMC parameter\n\nReturns Dict containing\n:return f_q: registered srvfs\n:return gam_q: warping function\n:return f_a: registered functions\n:return gam: warping functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.horiz_fPCA",
    "page": "Docstrings",
    "title": "ElasticFDA.horiz_fPCA",
    "category": "function",
    "text": "Calculates horizontal functional principal component analysis on aligned data\n\nhoriz_fPCA(warp_data; no=1)\n:param warp_data: fdawarp type from srsf_align of aligned data\n:param no: number of components to extract (default = 1)\n\nReturns hfpca containing\n:return gam_pca: warping principal directions\n:return psi_pca: srsf functional principal directions\n:return latent: latent values\n:return U: eigenvectors\n:return coef: scores\n:return vec: shooting vectors\n:return gam_mu: mean warping function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.innerprod_q2",
    "page": "Docstrings",
    "title": "ElasticFDA.innerprod_q2",
    "category": "function",
    "text": "Find inner product between two srvfs, q1 and q2\n\ninnerprod_q2(q1, q2)\n:param q1: array (n,T)\n:param q2: array (n,T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.interp1_flat",
    "page": "Docstrings",
    "title": "ElasticFDA.interp1_flat",
    "category": "function",
    "text": "Linear interpolation when response contains flat regions\n\ninterp1_flat(x, y, xx)\n:param x: time samples\n:param y: response samples\n:param xx: new time samples\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.inverse_exp",
    "page": "Docstrings",
    "title": "ElasticFDA.inverse_exp",
    "category": "function",
    "text": "Calculate shooting vector between two srvfs q1 and q2\n\ninverse_exp(q1, q2, beta2)\n:param q1: array (n,T)\n:param q2: array (n,T)\n:param beta2: array (n,T)\n\n:return v: shooting vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.inverse_exp_coord",
    "page": "Docstrings",
    "title": "ElasticFDA.inverse_exp_coord",
    "category": "function",
    "text": "Calculate shooting vector and distance between two curves beta1 and beta2\n\ninverse_exp_coord(beta1, beta2)\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemannian BFGS\n               (\"RBFGS\")\n:param wscale: keep scale (false)\n\n:return v: shooting vector\n:return dist: shape distance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.invert_gamma",
    "page": "Docstrings",
    "title": "ElasticFDA.invert_gamma",
    "category": "function",
    "text": "Invert warping function\n\ninvert_gamma(gam)\n:param gam: vector describing warping function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.itermatch",
    "page": "Docstrings",
    "title": "ElasticFDA.itermatch",
    "category": "function",
    "text": "MCMC iteration for group alignment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.karcher_calc",
    "page": "Docstrings",
    "title": "ElasticFDA.karcher_calc",
    "category": "function",
    "text": "karcher mean calculation function     karcher_calc(beta, q, betamean, mu; mode=\'O\')     :param beta: array (n,T)     :param q: array (n,T)     :param betamean: array (n,T)     :param mu: array (n,T)     :param mode: Open (\'O\') or Closed (\'C\') curves     :param wscale: with scale (\'false\')\n\n:return v: shooting vector\n:return d: elastic distance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.logistic_warp",
    "page": "Docstrings",
    "title": "ElasticFDA.logistic_warp",
    "category": "function",
    "text": "Calculate warping for logistic regression\n\nlogistic_warp(beta, timet, q, y)\n:param beta: regression function\n:param timet: time samples\n:param q: srsf\n:param y: response\n\nReturns\n:return gamma: new gamma\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.logit_gradient!",
    "page": "Docstrings",
    "title": "ElasticFDA.logit_gradient!",
    "category": "function",
    "text": "Calculate gradient of logistic optimization in place\n\nlogit_gradient!(b, grad, X, y)\n:param b: coefficients\n:param grad: gradient\n:param X: matrix\n:param y: response\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.logit_hessian",
    "page": "Docstrings",
    "title": "ElasticFDA.logit_hessian",
    "category": "function",
    "text": "Calculate Hessian of logistic optimization\n\nlogit_hessian(s, b, X, y)\n:param s:\n:param b: coefficients\n:param X: matrix\n:param y: response\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.logit_loss",
    "page": "Docstrings",
    "title": "ElasticFDA.logit_loss",
    "category": "function",
    "text": "Calculate logistic loss function\n\nlogit_loss(b, X, y)\n:param b: coefficients\n:param X: matrix\n:param y: response\n\nReturns\n:return out: loss function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.logit_optm",
    "page": "Docstrings",
    "title": "ElasticFDA.logit_optm",
    "category": "function",
    "text": "Calculate logistic optimization function\n\nlogit_optm(x::Vector, grad::Vector, Phi, y)\n:param x: samples\n:param grad: gradient\n:param Phi: coefficient matrix\n:param y: response\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.match_ext",
    "page": "Docstrings",
    "title": "ElasticFDA.match_ext",
    "category": "function",
    "text": "Find matching between two extremas\n\nmatch_ext(t1, ext1, d1, t2, ext2, d2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.meshgrid",
    "page": "Docstrings",
    "title": "ElasticFDA.meshgrid",
    "category": "function",
    "text": "Creates Rectangular Grid in 2-D space\n\nmeshgrid(a::LinRange,b::LinRange)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.mlogit_gradient!",
    "page": "Docstrings",
    "title": "ElasticFDA.mlogit_gradient!",
    "category": "function",
    "text": "Calculate m-logistic elastic regression loss function gradient in place\n\nmlogit_gradient!(b, grad, X, Y)\n:param b: coefficients\n:param grad: gradient\n:param X: matrix\n:param Y: response matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.mlogit_loss",
    "page": "Docstrings",
    "title": "ElasticFDA.mlogit_loss",
    "category": "function",
    "text": "Calculate loss for m-logistic regression\n\nmlogit_loss(b, X, Y)\n:param b: coefficients\n:param X: matrix\n:param Y: response matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.mlogit_optm",
    "page": "Docstrings",
    "title": "ElasticFDA.mlogit_optm",
    "category": "function",
    "text": "Calculate warping for m-logistic elastic regression\n\nmlogit_optim(x, grad, Phi, Y)\n:param x: sample\n:param grad: gradient\n:param Phi: matrix\n:param Y: response matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.mlogit_warp_grad",
    "page": "Docstrings",
    "title": "ElasticFDA.mlogit_warp_grad",
    "category": "function",
    "text": "Calculate m-logistic warping using gradient method\n\nmlogit_warp_grad(alpha, beta, timet, q, y; max_itr=8000, tol=1e-10,\n                 delt=0.008, display=0)\n:param alpha: intercept\n:param beta: regression function\n:param timet: vector describing time samples\n:param q: srsf\n:param y: response\n:param max_itr: maximum number of iterations\n:param tol: stopping tolerance\n:param delt: gradient step size\n:param display: display optimization iterations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.mvnrand",
    "page": "Docstrings",
    "title": "ElasticFDA.mvnrand",
    "category": "function",
    "text": "Multivariate Normal random number generation\n\nmvnrand(mu, C, n)\n:param mu: mean vector\n:param C: covariance matrix\n:param n: number of samples\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.optimum_reparam",
    "page": "Docstrings",
    "title": "ElasticFDA.optimum_reparam",
    "category": "function",
    "text": "Calculate optimum parameterization (warping of q2 to q1)\n\noptimum_reparam(q1, timet, q2, lam=0.0, method=\"SIMUL\", w=0.01, f1o=0.0,\n                f2o=0.0)\n:param q1: array (M,N) or vector (M) describing srsf set 1\n:param timet: vector describing time samples of length M\n:param q2: array (M,N) or vector (M) describing srsf of set 2\n:param lam: control amount of warping (default=0.0)\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemannian BFGS\n               (\"RBFGS\"), Simultaneous Alignment (\"SIMUL\")\n:param w: Controls RBFGS (default = 0.01)\n:param f1o: initial value of f1, vector or scalar depending on q1, defaults\n            to zero\n:param f2o: initial value of f2, vector or scalar depending on q1, defaults\n            to zero\n\noptimum_reparam(q1, time1, q2, time2, lam=0.0, method=\"DP\", w=0.01, f1o=0.0,\n                f2o=0.0)\nsame as above, but different timing for q1 and q2\n\noptimum_reparam(beta1, beta2, lam, method=\"DP\", w=0.01, rotated=true,\n                isclosed=false)\n:param beta1: array (n,T) describing curve 1\n:param beta2: array (n,T) describing curve 2\n:param lam: control amount of warping (default=0.0)\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemanain BFGS\n               (\"RBFGS\")\n:param w: Controls RBFGS (default = 0.01)\n:param rotated: calculate rotation (default = true)\n:param isclosed: closed curve (default = false)\n\n:return gam: warping function\n:return R: rotation matrix\n:return tau: seed value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.pair_warping_bayes",
    "page": "Docstrings",
    "title": "ElasticFDA.pair_warping_bayes",
    "category": "function",
    "text": "Compute pair warping between two functions using Bayesian method\n\npair_warping_bayes(f1, f2; iter=15000, times=5, powera=1)\n:param f1, f2: vectors describing functions\n:param iter: number of iterations\n:param times: MCMC parameter\n:param powera: MCMC parameter\n\nReturns Dict containing\n:return f1:\n:return f2_q: srsf registration\n:return gam_q: warping function\n:return f2a: registered f2\n:return gam: warping function\n:return dist_collect: distance\n:return best_match: best match\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.pair_warping_expomap",
    "page": "Docstrings",
    "title": "ElasticFDA.pair_warping_expomap",
    "category": "function",
    "text": "Compute pair warping between two functions using Bayesian method\n\npair_warping_expomap(f1, f2, timet; iter=20000, burnin=min(5000,iter/2),\n                     alpha0=0.1, beta0=0.1, pbetas=[0.5,0.05,0.005,0.0001],\n                     probs=[0.1,0.1,0.7,0.1],propvar=1.0,\n                     init_coef=zeros(20),npoints=200,extrainfo=false)\n\n:param f1, f2: vectors describing functions\n:param timet: vector describing timing\n:param iter: number of MCMC iterations\n:param burnin: number of MCMC burnin iterations\n:param alpha0, beta0: IG parameters for prior of sigma1\n:param pbetas: mixture ratios for pCN\n:param probs: mixcture probabilities for zpCN\n:param propvar: variance of proposal distribution\n:param init_coef: initial g coefficients\n:param npoits: number of sample points to use during alignment\n:param extrainfo: T/F whether additional information is returned (accept, logl, gamma_mat, gamma_stats, xdist, ydist)\n\nReturns mcmc struct containing\n:return f2_warped: warped f2\n:return gamma: warping function\n:return g_coef: g_coeficients\n:return sigma1: variance samples\n:return accept: accept samples\n:return logl: log-likelihood\n:return gamma_mat: posterior warping function samples\n:return gamma_stats: posterior warping function samples 95% credible intervals\n:return xdist: phase distance of posterior warping functions\n:return ydist: amplitude distance of posterior warping functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.parallel_translate",
    "page": "Docstrings",
    "title": "ElasticFDA.parallel_translate",
    "category": "function",
    "text": "Parallel translate srvf  along tangent space\n\nparallel_translate(w, q1, q2, basis, mode=\'O\')\n:param w: shooting vector\n:param q1: array (n,T)\n:param q2: array (n,T)\n:param basis: basis out of find_basis_normal\n:param mode: Open (\'O\') or Closed (\'C\') curves\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.phi",
    "page": "Docstrings",
    "title": "ElasticFDA.phi",
    "category": "function",
    "text": "Logistic function\n\nphi(t)\n\nReturns\n:return out: phi(t)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.pre_proc_curve",
    "page": "Docstrings",
    "title": "ElasticFDA.pre_proc_curve",
    "category": "function",
    "text": "Pre-processes curve by centering and projecting to tangent space\n\npre_proc_curve(beta, T=100)\n:param beta: array (n,T)\n:param T: number of re-sample points\n\n:return betanew: re-sampled and centered curve\n:return qnew: projected srvf\n:return A: rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.project_curve",
    "page": "Docstrings",
    "title": "ElasticFDA.project_curve",
    "category": "function",
    "text": "Project curve onto normal tangent space\n\nproject_curve(q)\n:param q: array (n,T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.project_tangent",
    "page": "Docstrings",
    "title": "ElasticFDA.project_tangent",
    "category": "function",
    "text": "Project srvf onto tangent space\n\nproject_tangent(w, q, basis)\n:param w: shooting vector\n:param q: array (n,T)\n:param basis: basis out of find_basis_normal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.psi",
    "page": "Docstrings",
    "title": "ElasticFDA.psi",
    "category": "function",
    "text": "Calculate psi\n\npsi(x,a,q)\n:param x: array (n, T) of curve\n:param a: vector (n) of centroid\n:param q: array (n, T) of srvf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.q_to_curve",
    "page": "Docstrings",
    "title": "ElasticFDA.q_to_curve",
    "category": "function",
    "text": "Convert srvf to curve\n\nq_to_curve(q)\n:param q: array describing srvf (n,T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.qtocurve",
    "page": "Docstrings",
    "title": "ElasticFDA.qtocurve",
    "category": "function",
    "text": "Bayesian qtocurve function\n\nqtocurve(q, timet=0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.random_gamma",
    "page": "Docstrings",
    "title": "ElasticFDA.random_gamma",
    "category": "function",
    "text": "Generates random warping functions based on gam\n\nrandom_gamma(gam, num)\n:param gam: array (M,N) describing warping functions\n:param num: number of functions to generate\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.regression_warp",
    "page": "Docstrings",
    "title": "ElasticFDA.regression_warp",
    "category": "function",
    "text": "Optimization function to calculate warping for elastic regression\n\nregression_warp(beta, timet, q, y, alpha)\n:param beta: regression function\n:param timet: vector describing time samples\n:param q: vector describing srsf\n:param y: response value\n:param alpha: intercept\n\nReturns\n:return gamma_new: new gamma\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.resamplecurve",
    "page": "Docstrings",
    "title": "ElasticFDA.resamplecurve",
    "category": "function",
    "text": "Resample curve\n\nresamplecurve(x, N=100)\n:param x: array describing curve (n,T)\n:param N: Number of samples to re-sample curve, N usually is > T\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.rgam",
    "page": "Docstrings",
    "title": "ElasticFDA.rgam",
    "category": "function",
    "text": "Generate random warping functions\n\nrgam(N, sigma, num)\n:param N: number of time points\n:param sigma: standard deviation across samples\n:param num: number of random warpings\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.rot_mat",
    "page": "Docstrings",
    "title": "ElasticFDA.rot_mat",
    "category": "function",
    "text": "Find rotation matrix for angle theta\n\nrot_mat(theta)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.sample_shapes",
    "page": "Docstrings",
    "title": "ElasticFDA.sample_shapes",
    "category": "function",
    "text": "Sample shapes from model\n\nsample_shapes(mu, K; mode=\'O\', no=3, numSamp=10)\n:param mu: array (n,T) mean srvf\n:param K: array (T,T) covariance matrix\n:param mode: Open (\'O\') or Closed (\'C\') curves\n:param no: number of principal components\n:param numSamp: number of samples\n\n:return samples: array (n,T,numSamp) of sample curves\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.scale_curve",
    "page": "Docstrings",
    "title": "ElasticFDA.scale_curve",
    "category": "function",
    "text": "Scale curve to unit length\n\nscale_curve(beta)\n:param beta: array (n,T)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.shift_f",
    "page": "Docstrings",
    "title": "ElasticFDA.shift_f",
    "category": "function",
    "text": "Shift curve f by tau\n\nshift_f(f, tau)\n:param f: array (n,T)\n:param tau: scalar\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.simuiter",
    "page": "Docstrings",
    "title": "ElasticFDA.simuiter",
    "category": "function",
    "text": "MCMC iteration for pairwise alignment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.simul_align",
    "page": "Docstrings",
    "title": "ElasticFDA.simul_align",
    "category": "function",
    "text": "Simultaneous alignment between two functions\n\nsimul_align(f1::Vector, f2::Vector)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.simul_gam",
    "page": "Docstrings",
    "title": "ElasticFDA.simul_gam",
    "category": "function",
    "text": "Calculate warping from q2 to q2 from simultaneous warping\n\nsimul_gam(u, g1,g2,t,s1,s2,tt)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.simul_reparam",
    "page": "Docstrings",
    "title": "ElasticFDA.simul_reparam",
    "category": "function",
    "text": "Find simultaneous re-parametrization\n\nsimul_reparam(te1, te2, mpath)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.smooth_data",
    "page": "Docstrings",
    "title": "ElasticFDA.smooth_data",
    "category": "function",
    "text": "Smooth functional data using box filter\n\nsmooth_data(f::Array{Float64,1}, sparam=10)\n:param sparam: Number of times to run filter (default = 10)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.smooth_data!",
    "page": "Docstrings",
    "title": "ElasticFDA.smooth_data!",
    "category": "function",
    "text": "Smooth functional data using box filter in place\n\nsmooth_data!(f::Array{Float64,2}, sparam=10)\n\n\n\n\n\nsmooth_data!(f::Array{Float64,1}, sparam=10)\n:param sparam: Number of times to run filter (default = 10)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.sqrt_mean",
    "page": "Docstrings",
    "title": "ElasticFDA.sqrt_mean",
    "category": "function",
    "text": "Calculate sqrt mean of warping functions\n\nsqrt_mean(gam)\n:param gam: array (M,N) describing warping functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.sqrt_mean_inverse",
    "page": "Docstrings",
    "title": "ElasticFDA.sqrt_mean_inverse",
    "category": "function",
    "text": "Calculate sqrt mean inverse of warping function\n\nsqrt_mean_inverse(gam)\n:param gam: array (M,N) describing warping functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.srsf_align",
    "page": "Docstrings",
    "title": "ElasticFDA.srsf_align",
    "category": "function",
    "text": "Aligns a collection of functions using the elastic square-root slope (srsf) framework.\n\nsrsf_align(f, timet; method=\"mean\", smooth=false, sparam=10, lam=0.0,\n           optim=\"DP\", MaxItr=20)\n:param f: array of shape (M,N) of N functions with M samples\n:param timet: vector of size M describing the sample points\n:param method: (string) calculate Karcher Mean or Median\n(options = \"mean\" or \"median\") (default=\"mean\")\n:param smooth: Smooth the data using a box filter (default = false)\n:param sparam: Number of times to run smoothing filter (default 10)\n:param lam: controls the elasticity (default = 0)\n:param optim: optimization method to find warping, default is\n              Simultaneous Alignment (\"SIMUL\"). Other options are\n              Dynamic Programming (\"DP2\"), Riemannian BFGS\n              (\"RBFGS\")\n:param MaxItr: Maximum number of iterations\n\nReturns fdawarp type containing\n:return fn: aligned functions - array of shape (M,N) of N\n            functions with M samples\n:return qn: aligned srsfs - similar structure to fn\n:return q0: original srsfs - similar structure to fn\n:return fmean: function mean or median - vector of length N\n:return mqn: srvf mean or median - vector of length N\n:return gam: warping functions - similar structure to fn\n:return orig_var: Original Variance of Functions\n:return amp_var: Amplitude Variance\n:return phase_var: Phase Variance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.srsf_to_f",
    "page": "Docstrings",
    "title": "ElasticFDA.srsf_to_f",
    "category": "function",
    "text": "Convert square-root slope function (srsf) to f\n\nsrsf_to_f(q::Array, time, f0=0.0)\n:param q: array of shape (M,N) describing N srsf of M samples\n:param time: vector describing time samples of length M\n:param f0: initial value of f\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.trapz",
    "page": "Docstrings",
    "title": "ElasticFDA.trapz",
    "category": "function",
    "text": "Trapezoidal Integration\n\ntrapz(x, y, dim=1)\n:param x: vector of time samples\n:param y: array of response samples\n:param dim: dimension along which to integrate\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.vert_fPCA",
    "page": "Docstrings",
    "title": "ElasticFDA.vert_fPCA",
    "category": "function",
    "text": "Calculates vertical functional principal component analysis on aligned data\n\nvert_fPCA(warp_data, qn; no=1)\n:param warp_data: fdawarp type from srsf_align of aligned data\n:param no: number of components to extract (default = 1)\n\nReturns vfpca type containing\n:return q_pca: srsf principal directions\n:return f_pca: functional principal directions\n:return latent: latent values\n:return coef: scores\n:return U: eigenvectors\n:return id: point used for f(0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.warp_f_gamma",
    "page": "Docstrings",
    "title": "ElasticFDA.warp_f_gamma",
    "category": "function",
    "text": "Warp function by gamma\n\nwarp_f_gamma(time::Vector, f::Vector, gam::Vector)\n:param time: describes time samples\n:param f: describes function\n:param gam: describes warping function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.warp_q_gamma",
    "page": "Docstrings",
    "title": "ElasticFDA.warp_q_gamma",
    "category": "function",
    "text": "Warp srsf by gamma\n\nwarp_q_gamma(time::Vector, q::Vector, gam::Vector)\n:param time: describes time samples\n:param q: describes srsf\n:param gam: describes warping function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElasticFDA.zero_crossing",
    "page": "Docstrings",
    "title": "ElasticFDA.zero_crossing",
    "category": "function",
    "text": "Calculate zero crossing of optimal warping function\n\nzero_crossing(Y,q,bt,timet,y_max,y_min,gmax,gmin)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ElasticFDA.DP_meanElasticFDA.ElasticFDAElasticFDA.EnormElasticFDA.__init__ElasticFDA.align_fPCAElasticFDA.approxElasticFDA.arclengthElasticFDA.basisElasticFDA.basis_fourierElasticFDA.bsElasticFDA.calc_jElasticFDA.calc_shape_distElasticFDA.calculate_varianceElasticFDA.calculatecentroidElasticFDA.cost_fnElasticFDA.cumtrapzElasticFDA.cumtrapzmidElasticFDA.curve_geodesicElasticFDA.curve_karcher_covElasticFDA.curve_karcher_meanElasticFDA.curve_pair_alignElasticFDA.curve_principal_directionsElasticFDA.curve_srvf_alignElasticFDA.curve_to_qElasticFDA.curve_zero_crossingElasticFDA.dp_bayesElasticFDA.elastic_distanceElasticFDA.elastic_logisticElasticFDA.elastic_mlogisticElasticFDA.elastic_predictionElasticFDA.elastic_regressionElasticFDA.evalElasticFDA.exp_mapElasticFDA.extrema_1sElasticFDA.f_L2normElasticFDA.f_SSEg_pwElasticFDA.f_basistofunctionElasticFDA.f_exp1ElasticFDA.f_logl_pwElasticFDA.f_phiinvElasticFDA.f_predictfunctionElasticFDA.f_psimeanElasticFDA.f_to_srsfElasticFDA.f_updateg_pwElasticFDA.fdawarpElasticFDA.find_basis_normalElasticFDA.find_best_rotationElasticFDA.find_rotation_and_seed_qElasticFDA.find_rotation_seed_coordElasticFDA.findkarcherinvElasticFDA.funcElasticFDA.gauss_modelElasticFDA.gradientElasticFDA.gradient2ElasticFDA.gradient_splineElasticFDA.gram_schmidtElasticFDA.group_action_by_gammaElasticFDA.group_action_by_gamma_coordElasticFDA.group_warping_bayesElasticFDA.hfpcaElasticFDA.horiz_fPCAElasticFDA.includeElasticFDA.inner_productElasticFDA.innerprod_q2ElasticFDA.interp1_flatElasticFDA.inv_exp_mapElasticFDA.inverse_expElasticFDA.inverse_exp_coordElasticFDA.invert_gammaElasticFDA.itermatchElasticFDA.karcher_calcElasticFDA.l2_normElasticFDA.libfdasrsfElasticFDA.logistic_warpElasticFDA.logit_gradient!ElasticFDA.logit_hessianElasticFDA.logit_lossElasticFDA.logit_optmElasticFDA.match_extElasticFDA.mcmc_resultsElasticFDA.meshgridElasticFDA.mlogit_gradient!ElasticFDA.mlogit_lossElasticFDA.mlogit_optmElasticFDA.mlogit_warp_gradElasticFDA.mvnrandElasticFDA.norm_gamElasticFDA.old_dpElasticFDA.optimum_reparamElasticFDA.pair_warping_bayesElasticFDA.pair_warping_expomapElasticFDA.parallel_translateElasticFDA.pathElasticFDA.phiElasticFDA.pre_proc_curveElasticFDA.project_curveElasticFDA.project_tangentElasticFDA.psiElasticFDA.q_to_curveElasticFDA.qtocurveElasticFDA.random_gammaElasticFDA.regression_warpElasticFDA.resamplecurveElasticFDA.rgamElasticFDA.rot_matElasticFDA.sample_shapesElasticFDA.scale_curveElasticFDA.shift_fElasticFDA.simuiterElasticFDA.simul_alignElasticFDA.simul_gamElasticFDA.simul_reparamElasticFDA.simul_reparam_segmentElasticFDA.smooth_dataElasticFDA.smooth_data!ElasticFDA.sqrt_meanElasticFDA.sqrt_mean_inverseElasticFDA.srsf_alignElasticFDA.srsf_to_fElasticFDA.statsFunElasticFDA.trapzElasticFDA.vert_fPCAElasticFDA.vfpcaElasticFDA.warp_f_gammaElasticFDA.warp_q_gammaElasticFDA.zero_crossing"
},

]}
