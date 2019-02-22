var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: codecov)"
},

{
    "location": "#TotalLeastSquares.jl-1",
    "page": "Readme",
    "title": "TotalLeastSquares.jl",
    "category": "section",
    "text": "Solve (weighted) total least-squares problemsThese functions are exported:x = tls(A,y) Solves the standard TLS problem using the SVD method\nx = wtls(A,y,Qaa,Qay,Qyy,iters=10) Solves the weighted TLS problem using algorithm 1 from (Fang, 2013) The Q-matrices are the covariance matrices of the noise terms in vec(A) and y respectively.\nQaa,Qay,Qyy = rowcovariance(rowQ::AbstractVector{<:AbstractMatrix}) Takes row-wise covariance matrices QAy[i] and returns the full (sparse) covariance matrices. rowQ = [cov([A[i,:] y[i]]) for i = 1:length(y)]\nx = wls(A,y,Qyy) Solves the weighted standard LS problem. Qyy is the covariance matrix of the residuals with side length equal to the length of y."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using TotalLeastSquares, FillArrays, Random, Printf\nRandom.seed!(0)\nx   = randn(3)\nA   = randn(50,3)\nσa  = 1\nσy  = 0.01\nAn  = A + σa*randn(size(A))\ny   = A*x\nyn  = y + σy*randn(size(y))\nQaa = σa^2*Eye(prod(size(A)))\nQay = 0Eye(prod(size(A)),length(y))\nQyy = σy^2*Eye(prod(size(y)))\n\n\nx̂ = An\\yn\n@printf \"Least squares error: %25.3e %10.3e %10.3e, Norm: %10.3e\\n\" (x-x̂)... norm(x-x̂)\n\nx̂ = wls(An,yn,Qyy)\n@printf \"Weigthed Least squares error: %16.3e %10.3e %10.3e, Norm: %10.3e\\n\" (x-x̂)... norm(x-x̂)\n\nx̂ = tls(An,yn)\n@printf \"Total Least squares error: %19.3e %10.3e %10.3e, Norm: %10.3e\\n\" (x-x̂)... norm(x-x̂)\n\nx̂ = wtls(An,yn,Qaa,Qay,Qyy,iters=10)\n@printf \"Weighted Total Least squares error: %10.3e %10.3e %10.3e, Norm: %10.3e\\n\" (x-x̂)... norm(x-x̂)\nprintln(\"----------------------------\")Least squares error:                 3.753e-01  2.530e-01 -3.637e-01, Norm:  5.806e-01\nWeigthed Least squares error:        3.753e-01  2.530e-01 -3.637e-01, Norm:  5.806e-01\nTotal Least squares error:           2.897e-01  1.062e-01 -2.976e-01, Norm:  4.287e-01\nWeighted Total Least squares error:  1.213e-01 -1.933e-01 -9.527e-02, Norm:  2.473e-01\n----------------------------"
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "This package was developed for the thesis   Bagge Carlson, F., \"Machine Learning and System Identification for Estimation in Physical Systems\" (PhD Thesis 2018).@thesis{bagge2018,\n  title        = {Machine Learning and System Identification for Estimation in Physical Systems},\n  author       = {Bagge Carlson, Fredrik},\n  keyword      = {Machine Learning,System Identification,Robotics,Spectral estimation,Calibration,State estimation},\n  month        = {12},\n  type         = {PhD Thesis},\n  number       = {TFRT-1122},\n  institution  = {Dept. Automatic Control, Lund University, Sweden},\n  year         = {2018},\n  url          = {https://lup.lub.lu.se/search/publication/ffb8dc85-ce12-4f75-8f2b-0881e492f6c0},\n}"
},

{
    "location": "autodocs/#TotalLeastSquares.rowcovariance",
    "page": "Docstrings",
    "title": "TotalLeastSquares.rowcovariance",
    "category": "function",
    "text": "Qaa,Qay,Qyy = rowcovariance(rowQ::AbstractVector{<:AbstractMatrix})\n\nTakes row-wise covariance matrices QAy[i] and returns the full (sparse) covariance matrices. rowQ = [cov([A[i,:] y[i]]) for i = 1:length(y)]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TotalLeastSquares.tls",
    "page": "Docstrings",
    "title": "TotalLeastSquares.tls",
    "category": "function",
    "text": "tls(A,y)\n\nSolves the total least-squares problem Ax=y using the SVD method\n\nArguments\n\nA Design matrix\ny RHS\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TotalLeastSquares.wls",
    "page": "Docstrings",
    "title": "TotalLeastSquares.wls",
    "category": "function",
    "text": "wls(A,y,Σ)\n\nSolves the weigted standard least-squares problem Ax = y + e, e ~ N(0,Σ)\n\nArguments\n\nA ∈ R(n,u) Design matrix\ny ∈ R(n) RHS\nΣ ∈ R(n,n) Covariance matrix of the residuals (can be sparse or already factorized).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TotalLeastSquares.wtls",
    "page": "Docstrings",
    "title": "TotalLeastSquares.wtls",
    "category": "function",
    "text": "x = wtls(A,y,Qaa,Qay,Qyy; iters = 10)\n\nSolves min nᵀQ⁻¹n s.t. (A+E)x = y + v where Q = [Qaa Qay; Qay\' Qyy], n = [vec(E); y]\n\nUses algorithm 1 from Weighted total least squares: necessary and sufficient conditions, fixed and random parameters, Fang 2013 https://link.springer.com/article/10.1007/s00190-013-0643-2\n\nArguments\n\nA Design matrix\ny RHS\nQaa Covariance matrix of e = vec(E)\nQay Covariance between A and y\n\nKeyword Arguments\n\niters = 10 Number of iterations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TotalLeastSquares.TotalLeastSquaresTotalLeastSquares.evalTotalLeastSquares.includeTotalLeastSquares.rowcovarianceTotalLeastSquares.tlsTotalLeastSquares.wlsTotalLeastSquares.wtlsTotalLeastSquares.⊗"
},

]}
