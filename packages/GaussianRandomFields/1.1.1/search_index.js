var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GaussianRandomFields-1",
    "page": "Readme",
    "title": "GaussianRandomFields",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov) (Image: Coverage Status)A Julia package to compute and sample from Gaussian random fields.<p align=\"center\"> <img align=\"middle\" src=\"https://github.com/PieterjanRobbe/GaussianRandomFields.jl/blob/master/figures/front.png\" width=\"800\"> </p>"
},

{
    "location": "#Key-Features-1",
    "page": "Readme",
    "title": "Key Features",
    "category": "section",
    "text": "Support for stationary (isotropic and anisotropic) and separable non-stationary covariance functions. \nWe provide most standard covariance functions such as Gaussian, Exponential and Mat&eacute;rn covariances. Adding a user-defined covariance function is very easy.\nImplementation of most common methods to generate Gaussian random fields: Cholesky factorization, Karhunen-Lo&egrave;ve expansion and circulant embedding.\nEasy generation of Gaussian random fields defined on a Finite Element mesh.\nVersatile plotting features for easy visualisation of Gaussian random fields. (Currently with PyPlot.jl, in the near future we link with Plots.jl)"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Read the tutorial for details and examples on how to use this package."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] Lord, G. J., Powell, C. E. and Shardlow, T. An introduction to computational stochastic PDEs. No. 50. Cambridge University Press, 2014.[2] Graham, I. G., Kuo, F. Y., Nuyens, D., Scheichl, R. and Sloan, I.H. Analysis of circulant embedding methods for sampling stationary random fields. ArXiv preprint, 2017.[3] Le Maître, O. and Knio, M. O. Spectral methods for uncertainty quantification: with applications to computational fluid dynamics. Springer Science & Business Media, 2010.[4] Baker, C. T. The numerical treatment of integral equations. Clarendon Press, 1977.[5] Betz, W., Papaioannou I. and Straub, D. Numerical methods for the discretization of random fields by means of the Karhunen–Loève expansion. Computer Methods in Applied Mechanics and Engineering 271, pp. 109-129, 2014."
},

{
    "location": "autodocs/#GaussianRandomFields.AnisotropicExponential",
    "page": "Docstrings",
    "title": "GaussianRandomFields.AnisotropicExponential",
    "category": "type",
    "text": "AnisotropicExponential(A, σ=1)\n\nCreate an anisotropic exponential covariance structure with anisotropy matrix A and (optional) marginal standard deviation σ.\n\nExamples\n\njulia> A = [1 0.5; 0.5 1]\n2×2 Array{Float64,2}:\n 1.0  0.5\n 1.0  0.5\n\njulia> a1 = AnisotropicExponential(A)\nanisotropic exponential (A=[1.0 0.5; 0.5 1.0], σ=1.0)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.Cholesky",
    "page": "Docstrings",
    "title": "GaussianRandomFields.Cholesky",
    "category": "type",
    "text": "Cholesky <: GaussianRandomFieldGenerator\n\nA GaussiandRandomFieldGenerator based on a Cholesky factorization of the covariance matrix.\n\nExamples\n\njulia> m = Matern(0.1,1.0)\nMatérn (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = CovarianceFunction(2,m)\n2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> pts1 = 0:0.02:1; pts2 = 0:0.02:1 \n0.0:0.02:1.0\n\njulia> grf = GaussianRandomField(c,Cholesky(),pts1,pts2)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a Cholesky decomposition\n\njulia> plot(grf) \n[...]\n\n\nNote that the Cholesky factorization requires the covariance matrix to be Symmetric and positive definite. If the covariance matrix is not Symmetric, a warning will be thrown but the method will try to continue with an approximate symmetric matrix. If the covariance matrix is not positive definite, an error will be thrown. Try using the Spectral method in that case.\n\nSee also: Spectral, KarhunenLoeve, CirculantEmbedding\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.CirculantEmbedding",
    "page": "Docstrings",
    "title": "GaussianRandomFields.CirculantEmbedding",
    "category": "type",
    "text": "CirculantEmbedding <: GaussianRandomFieldGenerator\n\nA GaussiandRandomFieldGenerator that uses FFT to compute samples of the Gaussian random field. Circulant embedding can only be applied if the points are specified on a structured grid.\n\nExamples\n\njulia> m = Matern(0.1,1.0)\nMatérn (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = CovarianceFunction(2,m)\n2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> pts1 = 0:0.02:1; pts2 = 0:0.02:1 \n0.0:0.02:1.0\n\njulia> grf = GaussianRandomField(c,CirculantEmbedding(),pts1,pts2)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a circulant embedding\n\njulia> contourf(grf)\n[...]\n\njulia> plot_eigenvalues(grf)\n[...]\n\n\nWith appropriate ordering, the covariance matrix of a Gaussian random field is a (nested block) Toeplitz matrix. This matrix can be embedded into a larger (nested block) circulant matrix, whose eigenvalues can be rapidly computed using FFT. A difficulty here is that although the covariance matrix is positive semi-definite, its circulant extension in general is not. As a remedy, one can add so-called ghost points outside the domain of interest using the optional flag padding.\n\njulia> m = Matern(1,1)\nMatérn (λ=1.0, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = CovarianceFunction(1,m)\n1d Matérn covariance function (λ=1.0, ν=1.0, σ=1.0, p=2.0)\n\njulia> pts = range(0,stop = 1,length = 256)\n0.0:0.00392156862745098:1.0\n\njulia> grf = GaussianRandomField(c,CirculantEmbedding(),pts)\nWARNING: negative eigenvalue -0.001465931113950698 detected, Gaussian random field will be approximated (ignoring all negative eigenvalues)\nWARNING: increase padding if possible\nGaussian random field with 1d Matérn covariance function (λ=1.0, ν=1.0, σ=1.0, p=2.0) on a 256-point structured grid, using a circulant embedding\n\njulia> grf = GaussianRandomField(c,CirculantEmbedding(),pts,padding=5)\nGaussian random field with 1d Matérn covariance function (λ=1.0, ν=1.0, σ=1.0, p=2.0) on a 256-point structured grid, using a circulant embedding\n\n\nFor faster sampling (but slower initialization), use the optional argument measure (default=true).\n\nSee also: Cholesky, Spectral, KarhunenLoeve\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.CovarianceFunction",
    "page": "Docstrings",
    "title": "GaussianRandomFields.CovarianceFunction",
    "category": "type",
    "text": "CovarianceFunction(d, cov)\n\nCreate a covariance function in d dimensions with covariance structure cov.\n\nExamples\n\njulia> m = Matern(0.1,1.0)\nMatérn (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = CovarianceFunction(2,m)\n2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.Exponential",
    "page": "Docstrings",
    "title": "GaussianRandomFields.Exponential",
    "category": "type",
    "text": "Exponential(λ, σ=1, p=2)\n\nCreate an exponential covariance structure with correlation length λ, (optional) marginal standard deviation σ and (optional) p-norm.\n\nExamples\n\njulia> e1 = Exponential(0.1)\nexponential (λ=0.1, σ=1.0, p=2.0)\n\njulia> e2 = Exponential(0.1, σ=2)\nexponential (λ=0.1, σ=2.0, p=2.0)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.Gaussian",
    "page": "Docstrings",
    "title": "GaussianRandomFields.Gaussian",
    "category": "type",
    "text": "Gaussian(λ, σ=1, p=2)\n\nCreate a Gaussian (squared exponential) covariance structure with correlation length λ, (optional) marginal standard deviation σ and (optional) p-norm.\n\nExamples\n\njulia> g1 = Gaussian(0.1)\nGaussian (λ=0.1, σ=1.0, p=2.0)\n\njulia> g2 = Gaussian(0.1, σ=2.)\nGaussian (λ=0.1, σ=2.0, p=2.0)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.GaussianRandomField",
    "page": "Docstrings",
    "title": "GaussianRandomFields.GaussianRandomField",
    "category": "type",
    "text": "GaussianRandomField(mean,cov,method,pts...)\nGaussianRandomField(cov,method,pts...)\nGaussianRandomField(mean,cov,method,nodes,elements)\nGaussianRandomField(cov,method,nodes,elements)\n\nCompute a Gaussian random field with mean mean and covariance structure cov defined in the points pts, and computed using the method method.\n\nExamples\n\njulia> m = Matern(0.1,1.0)\nMatérn (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = CovarianceFunction(2,m)\n2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> pts1 = 0:0.02:1; pts2 = 0:0.02:1 \n0.0:0.02:1.0\n\njulia> mn = ones(length(pts1),length(pts2))\n\njulia> grf = GaussianRandomField(mn,c,Cholesky(),pts1,pts2)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a Cholesky decomposition\n\n\nIf no mean is specified, a zero-mean Gaussian random field is assumed.\n\njulia> grf = GaussianRandomField(c,Cholesky(),pts1,pts2)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a Cholesky decomposition\n\n\nThe  Gaussian random field sampler method can be Cholesky(), Spectral(), KarhunenLoeve(n) (where n is the number of terms in the expansion), or CirculantEmbedding(). The dimension of the points must match the dimension of the covariance function cov. The points can be specified as arguments of type AbstractVector, in which case a tensor (Kronecker) product is assumed, or as a Finite Element mesh with node table nodes and element table elements.\n\njulia> grf = GaussianRandomField(c,KarhunenLoeve(500),pts1,pts2)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a KL expansion with 500 terms\n\n\nFor separable Gaussian random fields with a KL expansion, provide a SeparableCovarianceFunction. Note that the number of terms n in KarhunenLoeve(n) refers to the total number of terms.\n\njulia> e1 = Exponential(0.1); e2 = Exponential(0.01);\n\njulia> scov = SeparableCovarianceFunction(e1,e2)\n2d separable covariance function [ exponential (λ=0.1, σ=1.0, p=2.0), exponential (λ=0.01, σ=1.0, p=2.0) ]\n\njulia> grf = GaussianRandomField(scov,KarhunenLoeve(500),pts1,pts2)\nGaussian random field with 2d separable covariance function [ exponential (λ=0.1, σ=1.0, p=2.0), exponential (λ=0.01, σ=1.0, p=2.0) ] on a 51x51 structured grid, using a KL expansion with 500 terms\n\njulia> plot_eigenfunction(grf,3); show()\n[...]\n\n\nAlso anisotropic Gaussian random fields can be computed. For example, the anisotropic exponential covariance function needs a positive definite matrix A. The size of the off-diagonal elements of A determine the degree of anisotropy.\n\njulia> a = AnisotropicExponential([1 0.8;0.8 1])\nanisotropic exponential (A=[1.0 0.8; 0.8 1.0], σ=1.0)\n\njulia> acov = CovarianceFunction(2,a)\n2d anisotropic covariance function exponential (A=[1.0 0.8; 0.8 1.0], σ=1.0)\n\njulia> pts = range(0,stop = 10,length = 128)\n0.0:0.07874015748031496:10.0\n\njulia> grf = GaussianRandomField(acov,CirculantEmbedding(),pts,pts)\nWARNING: negative eigenvalue -1.2245106889248049e-18 detected, Gaussian random field will be approximated (ignoring all negative eigenvalues)\nWARNING: increase padding if possible\nGaussian random field with 2d anisotropic covariance function exponential (A=[1.0 0.8; 0.8 1.0], σ=1.0) on a 128x128 structured grid, using a circulant embedding\n\njulia> contourf(grf)\n[...]\n\n\nSamples from the random field can be computed using the sample function.\n\njulia> sample(grf)\n[...]\n\n\nSee also: Cholesky, Spectral, KarhunenLoeve, CirculantEmbedding, sample\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.KarhunenLoeve",
    "page": "Docstrings",
    "title": "GaussianRandomFields.KarhunenLoeve",
    "category": "type",
    "text": "KarhunenLoeve{n} <: GaussianRandomFieldGenerator\n\nA GaussiandRandomFieldGenerator using a Karhunen-Loève (KL) expansion with n terms. \n\nExamples\n\njulia> m = Matern(0.1,1.0)\nMatérn (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = CovarianceFunction(2,m)\n2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> pts1 = 0:0.02:1; pts2 = 0:0.02:1 \n0.0:0.02:1.0\n\njulia> grf = GaussianRandomField(c,KarhunenLoeve(300),pts1,pts2)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a KL expansion with 300 terms\n\njulia> plot_eigenvalues(grf) # plot the eigenvalue decay\n[...]\n\njulia> plot_eigenfunction(grf,4) # plots the fourth eigenfunction\n[...]\n\n\nThe more terms are retained in the expansion, the better the approximation will be.\n\njulia> nterms = [1 2 5 10 20 50 100 200 500 1000]\n1×10 Array{Int64,2}:\n 1  2  5  10  20  50  100  200  500  1000\n\njulia> for n in nterms\n       grf = GaussianRandomField(c,KarhunenLoeve(n),pts1,pts2)\n       @show rel_error(grf)\n       end\nrel_error(grf) = 0.7499982529722711\nrel_error(grf) = 0.49999825591379987\nrel_error(grf) = 0.4425751861338164\nrel_error(grf) = 0.35789475278408045\nrel_error(grf) = 0.16805079842673853\nrel_error(grf) = 0.11187098338277579\nrel_error(grf) = 0.05130466343704787\nrel_error(grf) = 0.017343327476498027\nrel_error(grf) = 0.0034278579378175245\nrel_error(grf) = 0.0007216777927243623\n\n\nThe KL expansion is computed using the Nystrom method. Optional argument are the quadrature rule quad and the number of quadrature points in each direction nq. Possible values for quad are GaussLegendre(), Midpoint(), Simpson(), Trapezoidal and EOLE() (default). The total number of quadrature points must be larger than or equal to the requested number of terms. Default is ceil(n^(1/d)). This value is best left untouched.\n\njulia> grf = GaussianRandomField(c,KarhunenLoeve(300),pts1,pts2,quad=GaussLegendre())\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a KL expansion with 300 terms\n\njulia> grf = GaussianRandomField(c,KarhunenLoeve(300),pts1,pts2,quad=Simpson(),nq=20)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a KL expansion with 300 terms\n\n\nSee also: Cholesky, Spectral, CirculantEmbedding\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.Matern",
    "page": "Docstrings",
    "title": "GaussianRandomFields.Matern",
    "category": "type",
    "text": "Matern(λ, ν, σ=1, p=2)\n\nCreate a Matérn covariance structure with correlation length λ, smoothness ν, (optional) marginal standard deviation σ and (optional) p-norm.\n\nExamples\n\njulia> m1 = Matern(0.1, 1.0)\nMatérn (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> m2 = Matern(0.1, 1.0, σ=2.0)\nMatérn (λ=0.1, ν=1.0, σ=2.0, p=2.0)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.SeparableCovarianceFunction",
    "page": "Docstrings",
    "title": "GaussianRandomFields.SeparableCovarianceFunction",
    "category": "type",
    "text": "SeparableCovarianceFunction(cov...)\n\nCreate a separable covariance function in `length(cov)` dimensions for the covariance structures `cov`. Usefull for defining anisotropic covariance functions, or if the usual KL expansion is too expensive.\n\nExamples\n\njulia> e = Exponential(0.1)\nexponential (λ=0.1, σ=1.0, p=2.0)\n\njulia> m = Matern(0.01,1.0)\nMatérn (λ=0.01, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = SeparableCovarianceFunction([e,m])\n2d separable covariance function [ exponential (λ=0.1, σ=1.0, p=2.0), Matérn (λ=0.01, ν=1.0, σ=1.0, p=2.0) ]\n\n\nSee also: CovarianceFunction, KarhunenLoeve \n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.Spectral",
    "page": "Docstrings",
    "title": "GaussianRandomFields.Spectral",
    "category": "type",
    "text": "Spectral <: GaussianRandomFieldGenerator\n\nA GaussiandRandomFieldGenerator based on a spectral (eigenvalue) decomposition of the covariance matrix.\n\nExamples\n\njulia> m = Matern(0.1,1.0)\nMatérn (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = CovarianceFunction(2,m)\n2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> pts1 = 0:0.02:1; pts2 = 0:0.02:1 \n0.0:0.02:1.0\n\njulia> grf = GaussianRandomField(c,Spectral(),pts1,pts2)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a Spectral decomposition\n\njulia> plot(grf) \n[...]\n\n\nThis is also useful when computing Gaussian random fields on a Finite Element mesh using a truncated KL expansion. Here\'s an example that computes the first 10 eigenfunctions on an L-shaped domain.\n\njulia> p, t = Lshape();\n\njulia> grf = grf = GaussianRandomField(CovarianceFunction(2,Matern(0.2,1.0)),Spectral(),p,t,n=10)\nGaussian random field with 2d Matérn covariance function (λ=0.2, ν=1.0, σ=1.0, p=2.0) on a mesh with 998 points and 1861 elements, using a spectral decomposition\n\njulia> tricontourf(p[:,1],p[:,2],grf.data.eigenfunc[:,1],triangles=t-1,cmap=get_cmap(\"viridis\"))\n[...]\n\n\nSee also: Cholesky, KarhunenLoeve, CirculantEmbedding\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.SquaredExponential",
    "page": "Docstrings",
    "title": "GaussianRandomFields.SquaredExponential",
    "category": "type",
    "text": "SquaredExponential(λ, σ=1, p=2)\n\nCreate a squared exponential (Gaussian) covariance structure with correlation length λ, (optional) marginal standard deviation σ and (optional) p-norm.\n\nExamples\n\njulia> s1 = SquaredExponential(0.1)\nGaussian (λ=0.1, σ=1.0, p=2.0)\n\njulia> s2 = SquaredExponential(0.1, σ=2.)\nGaussian (λ=0.1, σ=2.0, p=2.0)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.circulant_eigvals",
    "page": "Docstrings",
    "title": "GaussianRandomFields.circulant_eigvals",
    "category": "function",
    "text": "circulant_eigvals(cov::CovarianceStructure, pts::NTuple{N,AbstractRange},\n                  dims::Dims{N}) where {N}\n\nCompute eigenvalues of circulant embedding with dimensions dims of covariance matrix of points pts with covariance function cov.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.circulant_minsize",
    "page": "Docstrings",
    "title": "GaussianRandomFields.circulant_minsize",
    "category": "function",
    "text": "circulant_minsize(cov::CovarianceStructure, pts::AbstractRange,\n                  minpadding::Int, factors::Vector{Int})\n\nReturn size of minimum circulant embedding of covariance matrix of points pts with covariance function cov and minimum padding minpadding that can be written as product of integers in factors.\n\nTypically factors is chosen to be [2] or [2, 3, 5, 7] to speed up FFT computations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianRandomFields.sample",
    "page": "Docstrings",
    "title": "GaussianRandomFields.sample",
    "category": "function",
    "text": "sample(grf)\nsample(grf, xi=randn(randdim(grf)))\n\nTake a sample from the Gaussian Random Field grf using the (optional) random numbers xi. The vectorxi must have appropriate length. The default value is randn(randdim(grf)).\n\nExamples\n\njulia> m = Matern(0.1,1.0)\nMatérn (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> c = CovarianceFunction(2,m)\n2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0)\n\njulia> pts1 = 0:0.02:1; pts2 = 0:0.02:1 \n0.0:0.02:1.0\n\njulia> grf = GaussianRandomField(c,KarhunenLoeve(300),pts1,pts2)\nGaussian random field with 2d Matérn covariance function (λ=0.1, ν=1.0, σ=1.0, p=2.0) on a 51x51 structured grid, using a KL expansion with 300 terms\n\njulia> sample(grf)\n[...]\n\njulia> sample(grf,xi=2*rand(randdim(grf))-1)\n[...]\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GaussianRandomFields.AbstractCovarianceFunctionGaussianRandomFields.AnisotropicCovarianceStructureGaussianRandomFields.AnisotropicExponentialGaussianRandomFields.CholeskyGaussianRandomFields.CirculantEmbeddingGaussianRandomFields.CovarianceFunctionGaussianRandomFields.CovarianceStructureGaussianRandomFields.EOLEGaussianRandomFields.ExponentialGaussianRandomFields.FiniteElemGRFGaussianRandomFields.FiniteElemSpectralGRFGaussianRandomFields.GaussLegendreGaussianRandomFields.GaussianGaussianRandomFields.GaussianRandomFieldGaussianRandomFields.GaussianRandomFieldGeneratorGaussianRandomFields.GaussianRandomFieldsGaussianRandomFields.IsotropicCovarianceStructureGaussianRandomFields.KarhunenLoeveGaussianRandomFields.LSHAPE_PGaussianRandomFields.LSHAPE_TGaussianRandomFields.LshapeGaussianRandomFields.MaternGaussianRandomFields.MidpointGaussianRandomFields.OneDimCovGaussianRandomFields.OneDimGRFGaussianRandomFields.OneDimSepCovGaussianRandomFields.OneDimSpectralGRFGaussianRandomFields.OneDimSpectralSepGRFGaussianRandomFields.QuadratureRuleGaussianRandomFields.STAR_PGaussianRandomFields.STAR_TGaussianRandomFields.SeparableCovarianceFunctionGaussianRandomFields.SimpsonGaussianRandomFields.SpectralGaussianRandomFields.SpectralDataGaussianRandomFields.SquaredExponentialGaussianRandomFields.ThreeDimCovGaussianRandomFields.ThreeDimGRFGaussianRandomFields.ThreeDimSepCovGaussianRandomFields.ThreeDimSpectralGRFGaussianRandomFields.ThreeDimSpectralSepGRFGaussianRandomFields.TrapezoidalGaussianRandomFields.TwoDimCovGaussianRandomFields.TwoDimGRFGaussianRandomFields.TwoDimSepCovGaussianRandomFields.TwoDimSpectralGRFGaussianRandomFields.TwoDimSpectralSepGRFGaussianRandomFields._GaussianRandomFieldGaussianRandomFields._plot_eigenfunctionGaussianRandomFields._sampleGaussianRandomFields.applyGaussianRandomFields.apply_non_symmetric!GaussianRandomFields.apply_symmetric!GaussianRandomFields.bisect_rootGaussianRandomFields.circulant_eigvalsGaussianRandomFields.circulant_minsizeGaussianRandomFields.compute_analyticGaussianRandomFields.compute_centersGaussianRandomFields.evalGaussianRandomFields.extrapolateGaussianRandomFields.findrootsGaussianRandomFields.generatorGaussianRandomFields.get_nodes_and_weightsGaussianRandomFields.includeGaussianRandomFields.middleGaussianRandomFields.plot_covariance_matrixGaussianRandomFields.plot_eigenfunctionGaussianRandomFields.plot_eigenvaluesGaussianRandomFields.randdimGaussianRandomFields.rel_errorGaussianRandomFields.sampleGaussianRandomFields.shapeGaussianRandomFields.shortnameGaussianRandomFields.showparamsGaussianRandomFields.showpointsGaussianRandomFields.sliceGaussianRandomFields.star"
},

]}
