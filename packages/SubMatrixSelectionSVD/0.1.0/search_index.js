var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SubMatrixSelectionSVD-1",
    "page": "Readme",
    "title": "SubMatrixSelectionSVD",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)SubMatrix Selection Singular Value Decomposition."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"SubMatrixSelectionSVD\")"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using SubMatrixSelectionSVD, LinearAlgebra, DataFrames, Gadfly\n\n# Create matrices with orthonormal columns\nfunction randorthonormal(P::Integer, N::Integer)\n    @assert P≥N\n    O = zeros(P,N)\n    for k=1:N\n        x = randn(P)\n        x -= O[:,1:k-1]*(O[:,1:k-1]\'x)\n        O[:,k] = x/norm(x)\n    end\n    O\nend\n\n# Create data matrix corrupted by noise\nP = 1000\nN = 40\nd = 4\nu = zeros(P,d)\nu[1:100,1:2]   = randorthonormal(100,2)\nu[101:200,3:4] = randorthonormal(100,2)\ns = [10,8,5,4] # singular values\nv = randorthonormal(N,d)\nX = u*Diagonal(s)*v\' + 0.1*randn(P,N).*rand(P) # different strength of noise for different variables\n\n# Compute the SMSSVD of X\nσThresholds = 10 .^ range(-2,stop=0,length=100)\nU,Σ,V,ps,signalDimensions = smssvd(X, d, σThresholds)\n\n# Projection Score Plot\ndf = DataFrame(Sigma=repeat(σThresholds\',d,1)[:], ProjectionScore=ps[:], NbrDims=repeat(1:d,1,length(σThresholds))[:])\ncoords = Coord.cartesian(xmin=log10(σThresholds[1]), xmax=log10(σThresholds[end]), ymin=0)\nplot(df,x=:Sigma,y=:ProjectionScore,color=:NbrDims,Geom.line,coords,Scale.x_log10,Guide.xlabel(\"σ Threshold\"),Guide.ylabel(\"Projection Score\"),Guide.colorkey(title=\"Dimension\"),Guide.title(\"Projection Score\"))"
},

{
    "location": "autodocs/#SubMatrixSelectionSVD.smssvd",
    "page": "Docstrings",
    "title": "SubMatrixSelectionSVD.smssvd",
    "category": "function",
    "text": "smssvd(X, d, stdThresholds=10 .^ range(-2,stop=0,length=100); nbrIter=10, maxSignalDim=typemax(Int)) -> (U,Σ,V,ps,signalDimensions,selectedVariables)\n\nComputes the SubMatrix Selection Singular Value Decomposition (SMSSVD) of a matrix X.\n\nInputs\n\nX: PxN data matrix (P variables and N samples).\nd: Number of dimension in the result.\nstdThresholds: Standard deviation filtering thresholds at which the Projection Score will be evaluated. Expressed as fractions of the maximum standard deviation of a variable in X. Should be a vector of increasing values between 0 and 1.\n\nOutputs\n\nU: Pxd matrix of left singular vectors (variable representation).\nS: d-vector of singular values.\nV: Nxd matrix of right singular vectors (sample representation).\nps: d x length(stdThresholds) matrix with all Projection Scores. Useful for plotting.\nsignalDimensions: Vector with the number of dimensions in each signal detected by SMSSVD.\nselectedVariables: For each signal, a bitmask showing the variables selected by Projection Score.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SubMatrixSelectionSVD.SubMatrixSelectionSVDSubMatrixSelectionSVD._resamplematrixSubMatrixSelectionSVD._resamplerowSubMatrixSelectionSVD._stdnormalizedSubMatrixSelectionSVD._αbootstrapSubMatrixSelectionSVD._αfilteredSubMatrixSelectionSVD._αfilteredsumSubMatrixSelectionSVD.evalSubMatrixSelectionSVD.includeSubMatrixSelectionSVD.projectionscoreSubMatrixSelectionSVD.projectionscorefilteredSubMatrixSelectionSVD.smssvdSubMatrixSelectionSVD.α"
},

]}
