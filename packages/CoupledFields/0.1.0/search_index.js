var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CoupledFields.jl-1",
    "page": "Readme",
    "title": "CoupledFields.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Summary-1",
    "page": "Readme",
    "title": "Summary",
    "category": "section",
    "text": "A julia package for working with coupled fields. This is work in progress.  The main function gradvecfield calculates the gradient vector or gradient matrix for each instance of the coupled fields."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia:julia> Pkg.add(\"CoupledFields\")"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "[LATEST][docs-latest-url][docs-latest-url]: https://Mattriks.github.io/CoupledFields.jl/latest [docs-stable-url]: https://Mattriks.github.io/CoupledFields.jl/stable"
},

{
    "location": "autodocs/#CoupledFields.CVfn",
    "page": "Docstrings",
    "title": "CoupledFields.CVfn",
    "category": "function",
    "text": "CVfn(parm::T, X::T, Y::T, modelfn::Function, kerneltype::DataType; verbose::Bool=true, dcv::Int64=2) where T<:Matrix{Float64}\n\nCross-validation function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.GaussianKP",
    "page": "Docstrings",
    "title": "CoupledFields.GaussianKP",
    "category": "type",
    "text": "GaussianKP: For the gaussian kernel\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.InputSpace",
    "page": "Docstrings",
    "title": "CoupledFields.InputSpace",
    "category": "type",
    "text": "InputSpace: A type to hold the `X` and `Y` fields of the Input space\n\nInputSpace(X, Y, d, lat): The fields are whitened if d=[d1, d2] is supplied. Area weighting is applied if lat is supplied.      \n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.KernelParameters",
    "page": "Docstrings",
    "title": "CoupledFields.KernelParameters",
    "category": "type",
    "text": "KernelParameters: An abstract type.\n\nAll KernelParameters types contain certain parameters which are later passed to internal functions Kf and ∇Kf. \n\nA KernelParameters type is set using e.g. PolynomialKP(X::Matrix{Float64}) or GaussianKP(X::Matrix{Float64}). \n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.ModelObj",
    "page": "Docstrings",
    "title": "CoupledFields.ModelObj",
    "category": "type",
    "text": "ModelObj: A type to hold statistical model results\n\nSuch as the matrices W, R, A, T, where R=XW and T=YA.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.PolynomialKP",
    "page": "Docstrings",
    "title": "CoupledFields.PolynomialKP",
    "category": "type",
    "text": "PolynomialKP: For the polynomial kernel\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.Rsq_adj",
    "page": "Docstrings",
    "title": "CoupledFields.Rsq_adj",
    "category": "function",
    "text": "Rsq_adj(Tx::T, Ty::T, df::Int) where T<:Array{Float64}:\n\nCross-validation metric\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.bf",
    "page": "Docstrings",
    "title": "CoupledFields.bf",
    "category": "function",
    "text": "bf(x::Vector{Float64}, df::Int):\n\nCompute a piecewise linear basis matrix for the vector x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.cca",
    "page": "Docstrings",
    "title": "CoupledFields.cca",
    "category": "function",
    "text": "cca(v::Array{Float64}, X::T,Y::T) where T<:Matrix{Float64}:\n\nRegularized Canonical Correlation Analysis using SVD. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.gKCCA",
    "page": "Docstrings",
    "title": "CoupledFields.gKCCA",
    "category": "function",
    "text": "gKCCA(par::Array{Float64}, X::Matrix{Float64}, Y::Matrix{Float64}, kpars::KernelParameters):\n\nCompute the projection matrices and components for gKCCA.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.gradvecfield",
    "page": "Docstrings",
    "title": "CoupledFields.gradvecfield",
    "category": "function",
    "text": "gradvecfield(par::Array{Float64}, X::T, Y::T, kpars::KernelParameters) where T<:Matrix{Float64}:\n\nCompute the gradient vector or gradient matrix at each instance of the X and Y fields, by making use of a kernel feature space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoupledFields.whiten",
    "page": "Docstrings",
    "title": "CoupledFields.whiten",
    "category": "function",
    "text": "whiten(x::Matrix{Float64}, d::Float64; lat=nothing): Whiten matrix\n\nd (0-1) Percentage variance of components to retain. \n\nlat Latitudinal area-weighting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CoupledFields.AdditiveKernelCoupledFields.BaseKernelCoupledFields.CVfnCoupledFields.CompositeKernelCoupledFields.CoupledFieldsCoupledFields.ExponentialKernelCoupledFields.GaussianKPCoupledFields.GaussianKernelCoupledFields.InputSpaceCoupledFields.KernelCoupledFields.KernelParametersCoupledFields.KfCoupledFields.LaplacianKernelCoupledFields.LinearKernelCoupledFields.ModelObjCoupledFields.PolynomialKPCoupledFields.PolynomialKernelCoupledFields.RadialBasisKernelCoupledFields.Rsq_adjCoupledFields.ScalarProductKernelCoupledFields.SeparableKernelCoupledFields.SquaredDistanceKernelCoupledFields.StandardKernelCoupledFields.bfCoupledFields.ccaCoupledFields.convertCoupledFields.evalCoupledFields.gKCCACoupledFields.gradvecfieldCoupledFields.includeCoupledFields.init_pairwiseCoupledFields.ismercerCoupledFields.isnegdefCoupledFields.isnonnegativeCoupledFields.kernelmatrixCoupledFields.kernelmatrix!CoupledFields.kernelrangeCoupledFields.pairwise!CoupledFields.pairwise_XY!CoupledFields.pairwise_XtYt!CoupledFields.phiCoupledFields.whitenCoupledFields.∇Kf"
},

]}
