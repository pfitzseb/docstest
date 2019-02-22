var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BasisFunctionExpansions-1",
    "page": "Readme",
    "title": "BasisFunctionExpansions",
    "category": "section",
    "text": "(Image: BasisFunctionExpansions) (Image: BasisFunctionExpansions) (Image: Build Status) (Image: codecov) (Image: ) (Image: ) (Latest is recommended)A Julia toolbox for approximation of functions using basis function expansions (BFEs).BFEs are useful when one wants to estimate an arbitrary/unknown/complicated functional relationship between (in the simple case) two variables, y and v. In simple linear regression, we might consider a functional relationship y = ϕ(v) = αv + β, with parameters α and β. However, if the function ϕ has an arbitrary nonlinar form, it might be hard to come up with suitable basis functions to use for linear regression. This package provides a set of convenient methods to estimate ϕ(v) as a linear combination of basis functions, such as radial basis functions, for situations where v has a single or multiple dimensions.Currently supported basis functions areRadial Basis Functions UniformRBFE, MultiRBFE, MultiUniformRBFE, MultiDiagonalRBFE"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "We demonstrate typical usage with some examples. Further usage examples in the context of reinforcement learning are provided at baggepinnen.github.ioThe idea is to create an object representing an expansion. This object contains information regarding the domain of the expansion, which type of basis functions used and how many. These objects are, once created, callable with a scheduling vector/matrix. A call like this returns a vector/matrix of basis function activations.To reconstruct a signal, a linear combination of basis functions must be estimated. To facilitate this, a second type of object is available: BasisFunctionApproximation. Once created, BasisFunctionApproximations are callable with a scheduling signal and return an estimate of the output. The parameter estimation is performed behind the scenes using standard linear regression (least-squares). An optional regularization parameter can be supplied if needed, see ?BasisFunctionApproximation for help.Plotting functionality requires Plots.jl"
},

{
    "location": "#Single-dimension-1",
    "page": "Readme",
    "title": "Single dimension",
    "category": "section",
    "text": "We start by simulating a signal y and a scheduling signal v. The task is to estimate a function y = ϕ(v), where ϕ is a basis function expansion.using DSP # For filt\nN = 1000\nv = range(0, stop=10, length=N) # Scheduling signal\ny = randn(N) # Signal to be approximated\ny = filt(ones(500)/500,[1],y)Next, we setup the basis function expansion object rbf and use it to create a reconstruction object bfausing BasisFunctionExpansions, Plots\nNv  = 10 # Number of basis functions\nrbf = UniformRBFE(v,Nv, normalize=true) # Approximate using radial basis functions with constant width\nbfa = BasisFunctionApproximation(y,v,rbf,1) # Create approximation object\nŷ   = bfa(v) # Reconstruct signal using approximation object\nscatter(v,y, lab=\"Signal\")\nscatter!(v,ŷ, lab=\"Reconstruction\")For comparison, we can also plot the regular linear regression y = α₀ + α₁x + α₂x²... αₙxⁿ for varying orders of n.A = v.^(0:3)\'\nŷ_linreg = [A[:,1:i]*(A[:,1:i]\\y) for i=2:4]\nplot!(v,hcat(ŷ_linreg...), lab=reshape([\"Linear regression order $i\" for i=1:3],1,:))(Image: window)As we can see from the figure, the linear combination of basis functions forming the reconstruction has learnt the overall structure of the signal y. To capture more detail, one can try to increase the number of basis functions. The final choice of this number is a tradeoff between reconstruction bias and variance, where a high number of basis functions can model the signal in great detail, but may increase the variance if data is sparse."
},

{
    "location": "#Multiple-dimensions-1",
    "page": "Readme",
    "title": "Multiple dimensions",
    "category": "section",
    "text": "We now demonstrate the same thing but with v ∈ ℜ². To create a nice plot, we let v form a spiral with increasing radius.using BasisFunctionExpansions, DSP\nN = 1000\nx = range(0, stop=4pi, length=N)\nv = [cos.(x) sin.(x)].*x # Scheduling signal\ny = randn(N) # Signal to be approximated\ny = filt(ones(500)./500,[1],y)Now we\'re creating a two-dimensional basis function expansion using ten functions in each dimension (for a total of 10*10=100 parameters).Nv  = [10,10] # Number of basis functions along each dimension\nrbf = MultiUniformRBFE(v,Nv, normalize=true) # Approximate using radial basis functions with constant width (Not isotropic, but all functions have the same diagonal covariance matrix)\nbfa = BasisFunctionApproximation(y,v,rbf,0.0001) # Create approximation object\nŷ   = bfa(v) # Reconstruct signal using approximation object\nscatter3d(v[:,1],v[:,2],y, lab=\"Signal\")\nscatter3d!(v[:,1],v[:,2],ŷ, lab=\"Reconstruction\")(Image: window)To visualize also the basis functions, we can simply call plot!(rbf) (the exclamation mark adds to the current plot instead of creating a new one). Below is an example when a 5x5 BFE is visualized using plotly as backend.(Image: window)"
},

{
    "location": "#Nonuniform-covariance-1",
    "page": "Readme",
    "title": "Nonuniform covariance",
    "category": "section",
    "text": "We can let all centers have different (diagonal) covariance matrices using the type MultiDiagonalRBFE. In this case, good center locations and covariances are estimated using K-means clustering. With this strategy, we can usually get away with much fewer basis functions compared to a uniform grid. A drawback is that we must know in advance which area of the scheduling signal space is of interest.Nc   = 8\nrbf  = MultiDiagonalRBFE(v,Nc, normalize=true)\nbfa  = BasisFunctionApproximation(y,v,rbf,0.0001)\nyhat = bfa(v)\nscatter3d(v[:,1],v[:,2],y, lab=\"Signal\")\nscatter3d!(v[:,1],v[:,2],yhat, lab=\"Reconstruction\")"
},

{
    "location": "#Full-covariance-1",
    "page": "Readme",
    "title": "Full covariance",
    "category": "section",
    "text": "For the type MultiRBFE The covariance matrix and center locations are esimated using K-means.Nc   = 8                            # Number of centers/BFs\nrbf  = MultiRBFE(v,Nc, normalize=true)\nbfa  = BasisFunctionApproximation(y,v,rbf,0.0001)\nyhat = bfa(v)\nscatter3d(v[:,1],v[:,2],y, lab=\"Signal\")\nscatter3d!(v[:,1],v[:,2],yhat, lab=\"Reconstruction\")"
},

{
    "location": "#Dynamics-modeling-1",
    "page": "Readme",
    "title": "Dynamics modeling",
    "category": "section",
    "text": ""
},

{
    "location": "#LPV-ARX-modeling-1",
    "page": "Readme",
    "title": "LPV ARX modeling",
    "category": "section",
    "text": "We can use basis function expansions for identification of elementary, non-linear dynamics models. Consider the following dynamical system, with a non-linearity on the input A(z)y = B(z)√(|u|) We can simulate this system using the codeA = [1,2*0.7*1,1] # A(z) coeffs\nB = [10,5]        # B(z) coeffs\nu = randn(100)    # Simulate 100 time steps with Gaussian input\ny = filt(B,A,sqrt.(abs.(u)))We can now try to fit a regular ARX model to this input-output datayr,A  = getARXregressor(y,u,3,2) # We assume that we know the system order 3,2\nx     = A\\yr                     # Fit using standard least-squares\ne_arx = √(mean((yr - A*x).^2))   # Calculate RMS error (4.2553882233771025)\nplot([yr A*x], lab=[\"Signal\" \"ARX prediction\"])(Image: window)Due to the non-linearity at the input of the system, the linear model fails to fit the data well. Our next attempt is a non-linear model based on BFEs. We select the simplest form of multi-dimensional BFE, MultiUniformRBFE and further select to cover the state-space with 2 basis functions along each dimension corresponding to y, and 4 basis functions along each dimension corresponding to u for a total of 2^2*4^3=256 parameters (4 basis functions is the smallest number that can somewhat accurately fit √(|u|)). The number of parameters in this case is large compared to the number of data points, we will need some regularization to fit this model properly. The regularization choice is made when forming the BasisFunctionApproximation and the strength is determined by the last argument 1e-3 in this case.bfe   = MultiUniformRBFE(A,[2,2,4,4,4], normalize=true)\nbfa   = BasisFunctionApproximation(yr,A,bfe, 1e-3)\ne_bfe = √(mean((yr - bfa(A)).^2)) # (0.005174261451622258)(Image: window)The non-linear model fits the data much better!We also note that if we knew in advance that the system is linear with a non-linearity on the input, we could do this in a slightly more efficient way by incorporating lagged values of y directly in the regressor, instead of expanding the lagged values of y in a BFE. If we knew the exact non-linearity, we could simply transform our measured signal u and use it as input. With the LPV model, however, we can estimate the shape of the non-linearity."
},

{
    "location": "#LPV-State-space-modeling-1",
    "page": "Readme",
    "title": "LPV State-space modeling",
    "category": "section",
    "text": "We can also estimate a state-space model with varying coefficient matrices, i.e. a model on the form x(t+1) = A(v)x(t) + B(v)u(t)This is accomplished using the built in convenience functionsnc    = 10                                        # Number of centers\nmodel = LPVSS(x, u, nc; normalize=true, λ = 1e-3) # Estimate a model\nxh    = model(x,u)                                # Form predictionSee ?LPVSS for more details and a runnable example that produces a plot."
},

{
    "location": "#Learn-more-1",
    "page": "Readme",
    "title": "Learn more",
    "category": "section",
    "text": "Functionality in this package is used in the packagesRobotlib.jl\nLPVSpectral.jl\nDynamicMovementPrimitives.jlAnd in the papers[\"Linear Parameter-Varying Spectral Decomposition\"Bagge Carlson, Fredrik; Robertsson, Anders and Johansson, Rolf (2017) American Control Conference Conference](http://lup.lub.lu.se/record/ac32368e-e199-44ff-b76a-36668ac7d595)[\"Modeling and Identification of Position and Temperature Dependent Friction Phenomena without Temperature Sensing\"Bagge Carlson, Fredrik; Robertsson, Anders and Johansson, Rolf (2015) IEEE/RSJ International Conference on Intelligent Robots and Systems](http://lup.lub.lu.se/record/7613758)"
},

{
    "location": "#Citing-1",
    "page": "Readme",
    "title": "Citing",
    "category": "section",
    "text": "Users of this package for academic purposes are encouraged to cite the following thesis, for which the software was developed.@thesis{bagge2017,\n  author       = {Bagge Carlson, Fredrik},\n  month        = {03},\n  note         = {Licentiate Thesis},\n  publisher    = {Department of Automatic Control, Lund University},\n  title        = {Modeling and Estimation Topics in Robotics},\n  year         = {2017},\n}"
},

{
    "location": "#Gradients-1",
    "page": "Readme",
    "title": "Gradients",
    "category": "section",
    "text": "BasisFunctionExpansions plays nice with ReverseDiff.jl and ForwardDiff.jljulia> using ReverseDiff\njulia> a = randn(1,2)\njulia> ReverseDiff.gradient(bfa,a) # bfa here comes from the Multi-dim example\n1×2 Array{Float64,2}:\n 1.29364  -0.536586\n\njulia> h = 0.0001 # Finite difference for validation\n0.0001\n\njulia> [(bfa(a+[h 0]) - bfa(a))/h (bfa(a+[0 h]) - bfa(a))/h]\n1×2 Array{Float64,2}:\n 1.29363  -0.536488Note: for ForwardDiff.jl to work, you have to use ForwardDiff.jacobian instead of  ForwardDiff.gradient.See ?ReverseDiff.gradient for tips regarding high performance gradient calculation through preallocation of GradientConfig and prerecording of bfa."
},

{
    "location": "#Another-example-1",
    "page": "Readme",
    "title": "Another example",
    "category": "section",
    "text": "N   = 200\nv   = range(0, stop=10, length=N)\ny   = 0.1.*(v.-2).*(v.-7) .+ 0.2randn(N)\nrbf = UniformRBFE(v, 5, normalize = true)\nbfa = BasisFunctionApproximation(y,v,rbf)\n\nscatter(v,y,lab=\"Signal\",c=:orange, subplot=1, xlabel=\"\\$v\\$\", size=(600,300))\nplot!(rbf)\nplot!(v,bfa(v),lab=\"Reconstruction\",c=:blue,linewidth=2)(Image: window)"
},

{
    "location": "#Selecting-the-number-of-basis-functions-1",
    "page": "Readme",
    "title": "Selecting the number of basis functions",
    "category": "section",
    "text": "A simple way of choosing the number of basis functions is to plot an L-curve (parameter vs. error). A suitable number is where the kink in the curve occurs, for this example at around 6 basis functions.N    = 200\nv    = range(0, stop=10, length=N)\ny    = 0.1.*(v.-2).*(v.-7) .+ 0.2randn(N)\nnvec = 2:100\nlcurve = map(nvec) do n\n  rbf = UniformRBFE(v, n, normalize = true)\n  bfa = BasisFunctionApproximation(y,v,rbf)\n  std(y-bfa(v))\nend\n\nplot(nvec, lcurve, yscale=:log10, ylabel=\"RMS Error\", xlabel=\"Number of basis functions\")(Image: window)"
},

{
    "location": "autodocs/#BasisFunctionExpansions.BasisFunctionApproximation",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.BasisFunctionApproximation",
    "category": "type",
    "text": "BasisFunctionApproximation(y::Vector, v, bfe::BasisFunctionExpansion, λ = 0)\n\nPerform parameter identification to identify the Function y = ϕ(v), where ϕ is a Basis Function Expansion of type bfe. λ is an optional regularization parameter (L² regularization).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.LPVSS",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.LPVSS",
    "category": "type",
    "text": "Convenience tyoe for estimation of LPV state-space models\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.MultiDiagonalRBFE",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.MultiDiagonalRBFE",
    "category": "type",
    "text": "A MultiDiagonalRBFE has different diagonal covariance matrices for all basis functions See also MultiUniformRBFE, which has the same covariance matrix for all basis functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.MultiRBFE",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.MultiRBFE",
    "category": "type",
    "text": "A MultiRBFE has different diagonal covariance matrices for all basis functions See also MultiUniformRBFE, which has the same covariance matrix for all basis functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.MultiUniformRBFE",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.MultiUniformRBFE",
    "category": "type",
    "text": "A MultiUniformRBFE has the same diagonal covariance matrix for all basis functions See also MultiDiagonalRBFE, which has different covariance matrices for all basis functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.UniformRBFE",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.UniformRBFE",
    "category": "type",
    "text": "A Uniform RBFE has the same variance for all basis functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.basis_activation_func_automatic",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.basis_activation_func_automatic",
    "category": "function",
    "text": "basis_activation_func_automatic(v,Nv,normalize,coulomb)\n\nReturns a func v->ϕ(v) ∈ ℜ(Nv) that calculates the activation of Nv basis functions spread out to cover v nicely. If coulomb is true, then we get twice the number of basis functions, 2Nv, with a hard split at v=0 (useful to model Coulomb friction). coulomb is not yet fully supported for all expansion types.\n\nThe keyword normalize determines weather or not basis function activations are normalized to sum to one for each datapoint, normalized networks tend to extrapolate better \"The normalized radial basis function neural network\" DOI: 10.1109/ICSMC.1998.728118\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.getARXregressor",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.getARXregressor",
    "category": "function",
    "text": "getARXregressor(y::AbstractVector,u::AbstractVecOrMat, na, nb)\n\nReturns a shortened output signal y and a regressor matrix A such that the least-squares ARX model estimate of order na,nb is y\\A\n\nReturn a regressor matrix used to fit an ARX model on, e.g., the form A(z)y = B(z)f(u) with output y and input u where the order of autoregression is na and the order of input moving average is nb\n\nExample\n\nHere we test the model with the Function f(u) = √(|u|)\n\nA     = [1,2*0.7*1,1] # A(z) coeffs\nB     = [10,5] # B(z) coeffs\nu     = randn(100) # Simulate 100 time steps with Gaussian input\ny     = filt(B,A,sqrt.(abs.(u)))\nyr,A  = getARXregressor(y,u,3,2) # We assume that we know the system order 3,2\nbfe   = MultiUniformRBFE(A,[2,2,4,4,4], normalize=true)\nbfa   = BasisFunctionApproximation(yr,A,bfe, 1e-3)\ne_bfe = √(mean((yr - bfa(A)).^2)) # (0.005174261451622258)\nplot([yr bfa(A)], lab=[\"Signal\" \"Prediction\"])\n\nSee README (?BasisFunctionExpansions) for more details\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.getARregressor",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.getARregressor",
    "category": "function",
    "text": "y,A = getARregressor(y::AbstractVector,na::Integer)\n\nReturns a shortened output signal y and a regressor matrix A such that the least-squares AR model estimate of order na is y\\A\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.get_centers",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.get_centers",
    "category": "function",
    "text": "vc,γ = get_centers(bounds, Nv, coulomb=false, coulombdims=0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.get_centers_automatic",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.get_centers_automatic",
    "category": "function",
    "text": "vc,γ = get_centers_automatic(v::AbstractVector,Nv::Int,coulomb = false)\n\n\n\n\n\nvc,γ = get_centers_automatic(v::AbstractMatrix, Nv::AbstractVector{Int}, coulomb=false, coulombdims=0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.matricesn",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.matricesn",
    "category": "function",
    "text": "size(y) = (T-1, n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.output_variance",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.output_variance",
    "category": "function",
    "text": "output_variance(model::LPVSS, x::AbstractVector, u::AbstractVector, v=[x u])\n\nReturn a vector of prediction variances. Note, no covariance between dimensions in output is provided\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.predict",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.predict",
    "category": "function",
    "text": "predict(model::LPVSS, x::AbstractMatrix, u, v=[x u])\n\nIf no v provided, return a prediction of the output x\' given the state x and input u This function is called when a model::LPVSS object is called like model(x,u)\n\nProvided v, return a prediction of the output x\' given the state x, input u and scheduling parameter v\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.testdata",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.testdata",
    "category": "function",
    "text": "x,xm,u,n,m = testdata(T,r=1)\n\nGenerate T time steps of state-space data where the A-matrix changes from A = [0.95 0.1; 0 0.95] to A = [0.5 0.05; 0 0.5] at time t=T÷2 x,xm,u,n,m = (state,noisy state, input, statesize, inputsize) r is the seed to the random number generator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisFunctionExpansions.toeplitz",
    "page": "Docstrings",
    "title": "BasisFunctionExpansions.toeplitz",
    "category": "function",
    "text": "toeplitz{T}(c::AbstractArray{T},r::AbstractArray{T})\n\nReturns a Toeplitz matrix where c is the first column and r is the first row.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BasisFunctionExpansions.AB_covarianceBasisFunctionExpansions.BasisFunctionApproximationBasisFunctionExpansions.BasisFunctionExpansionBasisFunctionExpansions.BasisFunctionExpansionsBasisFunctionExpansions.LPVSSBasisFunctionExpansions.MultiDiagonalRBFEBasisFunctionExpansions.MultiRBFEBasisFunctionExpansions.MultiUniformRBFEBasisFunctionExpansions.UniformRBFEBasisFunctionExpansions.basis_activation_funcBasisFunctionExpansions.basis_activation_func_automaticBasisFunctionExpansions.evalBasisFunctionExpansions.fit_ssBasisFunctionExpansions.getARXregressorBasisFunctionExpansions.getARregressorBasisFunctionExpansions.get_centersBasisFunctionExpansions.get_centers_KmeansBasisFunctionExpansions.get_centers_automaticBasisFunctionExpansions.get_centers_multiBasisFunctionExpansions.includeBasisFunctionExpansions.matricesnBasisFunctionExpansions.mega_regressorBasisFunctionExpansions.meshgridBasisFunctionExpansions.normalized_squared_exponentialBasisFunctionExpansions.normalized_squared_exponential_coulombBasisFunctionExpansions.output_varianceBasisFunctionExpansions.predictBasisFunctionExpansions.quadformBasisFunctionExpansions.shorten_vBasisFunctionExpansions.squared_exponentialBasisFunctionExpansions.squared_exponential_coulombBasisFunctionExpansions.testdataBasisFunctionExpansions.toeplitzBasisFunctionExpansions.γ2σBasisFunctionExpansions.σ2γ"
},

]}
