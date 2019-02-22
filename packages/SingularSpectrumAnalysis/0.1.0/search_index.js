var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SingularSpectrumAnalysis-1",
    "page": "Readme",
    "title": "SingularSpectrumAnalysis",
    "category": "section",
    "text": "(Image: SingularSpectrumAnalysis) (Image: SingularSpectrumAnalysis) (Image: Build Status)A package for performing Singular Spectrum Analysis (SSA) https://en.wikipedia.org/wiki/Singularspectrumanalysis"
},

{
    "location": "#Simple-Usage-1",
    "page": "Readme",
    "title": "Simple Usage",
    "category": "section",
    "text": "The plot functions are only available if Plots.jl has been loaded when SingularSpectrumAnalysis is loaded.using SingularSpectrumAnalysis\n# generate some data\nL = 20 # Window length\nK = 100\nN = K*L; # number of datapoints\nt = 1:N; # Time vector\nT = 20; # period of main oscillation\ny = sin.(2pi/T*t); # Signal\ny .+= (0.5sin.(2pi/T*4*t)).^2 # Add another frequency\ne = 0.1randn(N); # Add some noise\nys = y+e;\n# plot(ys)\n\nUSV = hsvd(ys,L) # Perform svd on the trajectory matrix\nsigmaplot(USV) # Plot normalized singular values\n# logsigmaplot(USV) # Plot singular values\n# cumsigmaplot(USV) # Plot cumulative normalized singular values(Image: window)seasonal_groupings = [1:2, 4:5] # Determine pairs of singular values corresponding to seasonal components\ntrends = 3 # If some singular value lacks a buddy, this is a trend component\npairplot(USV,seasonal_groupings) # plot phase plots for all seasonal components\nyrt, yrs = reconstruct(USV, trends, seasonal_groupings) # Reconstruct the underlying signal without noise, based on all identified components with significant singular values\nyr = sum([yrt yrs],2) # Form full reconstruction\nplot([y ys yr], lab=[\"y\" \"ys\" \"yr\"])"
},

{
    "location": "#Advanced-usage-1",
    "page": "Readme",
    "title": "Advanced usage",
    "category": "section",
    "text": "See the implementation of functions hsvd and reconstruct"
},

{
    "location": "#Reading-1",
    "page": "Readme",
    "title": "Reading",
    "category": "section",
    "text": "See http://www.jds-online.com/files/JDS-396.pdf for an easy-to-read introduction to SSA"
},

{
    "location": "autodocs/#SingularSpectrumAnalysis.SingularSpectrumAnalysis",
    "page": "Docstrings",
    "title": "SingularSpectrumAnalysis.SingularSpectrumAnalysis",
    "category": "module",
    "text": "SingularSpectrumAnalysis\n\nSimple Usage:\n\n# generate some data\nL = 20 # Window length\nK = 100\nN = K*L; # number of datapoints\nt = 1:N; # Time vector\nT = 20; # period of main oscillation\ny = sin.(2pi/T*t); # Signal\ny .+= (0.5sin.(2pi/T*4*t)).^2 # Add another frequency\ne = 0.1randn(N); # Add some noise\nys = y+e;\n# plot(ys)\n\nUSV = hsvd(ys,L) # Perform svd on the trajectory matrix\nsigmaplot(USV) # Plot normalized singular values\n# logsigmaplot(USV) # Plot singular values\n# cumsigmaplot(USV) # Plot cumulative normalized singular values\nseasonal_groupings = [1:2, 4:5] # Determine pairs of singular values corresponding to seasonal components\ntrends = 3 # If some singular value lacks a buddy, this is a trend component\npairplot(USV,seasonal_groupings) # plot phase plots for all seasonal components\nyrt, yrs = reconstruct(USV, trends, seasonal_groupings) # Reconstruct the underlying signal without noise, based on all identified components with significant singular values\nyr = sum([yrt yrs],2) # Form full reconstruction\nplot([y ys yr], lab=[\"y\" \"ys\" \"yr\"])\n\nSee http://www.jds-online.com/files/JDS-396.pdf for an easy-to-read introduction to SSA\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularSpectrumAnalysis.elementary",
    "page": "Docstrings",
    "title": "SingularSpectrumAnalysis.elementary",
    "category": "function",
    "text": "Ui = elementary(USV,I)\n\nComputes the sum UᵢSᵢVᵢ\' for all i in I If I is 1:L, the returned matrix is identical to USV\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularSpectrumAnalysis.hankel",
    "page": "Docstrings",
    "title": "SingularSpectrumAnalysis.hankel",
    "category": "function",
    "text": "X = hankel(x,window_size)\n\nForm the trajectory matrix X of size KxL, K = N-L+1 x can be a vector or a matrix for multivariate SSA\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularSpectrumAnalysis.hankelize",
    "page": "Docstrings",
    "title": "SingularSpectrumAnalysis.hankelize",
    "category": "function",
    "text": "means = hankelize(X)\n\nComputes a timeseries from an approximate Hankel matrix by diagoal averaging (Hankelization). Note that the returned value is a vector and not a hankel matrix. A hankel matrix is easily obtainable by hankel(hankelize(X), size(X,2))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularSpectrumAnalysis.hsvd",
    "page": "Docstrings",
    "title": "SingularSpectrumAnalysis.hsvd",
    "category": "function",
    "text": "USV = hsvd(y,L)\n\nForm a trajectory hankel matrix from data y and compute svd on this Hankelmatrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularSpectrumAnalysis.pairplot",
    "page": "Docstrings",
    "title": "SingularSpectrumAnalysis.pairplot",
    "category": "function",
    "text": "pairplot(USV, groupings) Usage:\n\nUSV = hsvd(data,L)\nseasonal_groupings = [1:2, 4:5]\npairplot(USV,seasonal_groupings)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SingularSpectrumAnalysis.reconstruct",
    "page": "Docstrings",
    "title": "SingularSpectrumAnalysis.reconstruct",
    "category": "function",
    "text": "yrt,yrs = reconstruct(USV::SVD, trends, seasonal::AbstractArray)\nyr      = reconstruct(USV::SVD, groupings::AbstractArray)\n\nCompute a reconstruction of the time-series based on an SVD object obtained from hsvd and user selected groupings. See also ?SingularSpectrumAnalysis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SingularSpectrumAnalysis.SingularSpectrumAnalysisSingularSpectrumAnalysis.cumsigmaplotSingularSpectrumAnalysis.elementarySingularSpectrumAnalysis.evalSingularSpectrumAnalysis.hankelSingularSpectrumAnalysis.hankelizeSingularSpectrumAnalysis.hsvdSingularSpectrumAnalysis.includeSingularSpectrumAnalysis.logsigmaplotSingularSpectrumAnalysis.pairplotSingularSpectrumAnalysis.reconstructSingularSpectrumAnalysis.sigmaplot"
},

]}
