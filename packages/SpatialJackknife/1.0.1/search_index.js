var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SpatialJackknife.jl-1",
    "page": "Readme",
    "title": "SpatialJackknife.jl",
    "category": "section",
    "text": "This package can be used to perform jackknife resampling on spatial data in an arbitrary number of dimensions with arbitrary geometry. It exports two function get_subvols, for assigning jackknife subvolumes to the data points, and jackknife for performing jackknife estimation of the mean and variance of a given estimator function. An example of how to use this code with SDSS data can be found in the notebooks directory. To run this, however, you will have to download the data separately.get_subvols has two methods which can be used for data that is either distributed in a regular cubic volume or distributed in a more complex geometry for which you must provide a set of randomly distributed points that define the geometry:Regular cubic geometryget_subvols(data::Array{Float64, 2};\n            side_divs::Int = 3,\n            edges::Array{Array{Float64, 1}, 1} = Array{Array{Float64, 1}, 1}(undef, 0))data is a 2-dimensional array of shape (N, ndims)\n\'side_divs\' is the number of volumes per dimension to divide the data into\n\'edges\' can be given either as the extrema in each dimension or just once and taken as the extrema for all dimensionsArbitrary geometry defined by random pointsget_subvols(data::Array{Float64, 2},\n            randmask::Array{Float64, 2},\n            side_divs::Int,\n            metric::Metric = Euclidean())::Array{Int, 1}data is a 2-D array as above\nrandmask is a 2-D array with the same number of dimensions defining the geometry of your dataset\nside_divs is the number of volumes per dimension to subdivide the sample into \nmetric is an optional parameter to define the distance between points, assumed to be Euclidean"
},

{
    "location": "#Jackknifing-1",
    "page": "Readme",
    "title": "Jackknifing",
    "category": "section",
    "text": "Once the subvolumes have been determined, the \'jackknife\' function can be used to find the mean and covariance of your desired estimator:jackknife(obsfunc::Function,\n          data::Array{Float64, 2},\n          subvolinds::Array{Int, 1},\n          args::Tuple = ();\n          covar::Bool = true)\'obsfunc\' is a function that computes your estimator and takes the form\nobsfunc(data, args...)\n\'subvolinds\' is an integer array of subvolume indices that has the same length as the number of data pointsand is returned by \'get_subvols\'\'args\' is an optional tuple of other arguments to pass to your estimator function\n\'covar\' is a boolean that determines whether a full covariance matrix is computed (for \'true\') for multidimensionalestimators, or just the diagonals (\'false\')"
},

{
    "location": "autodocs/#SpatialJackknife.get_dims",
    "page": "Docstrings",
    "title": "SpatialJackknife.get_dims",
    "category": "function",
    "text": "This function gets dimensions of a given data array and returns an error if they are not appropriate or consistent with the dimension of optional randoms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialJackknife.get_subvols",
    "page": "Docstrings",
    "title": "SpatialJackknife.get_subvols",
    "category": "function",
    "text": "This function takes a dataset and returns an array of subvolume indices for each datapoint. In this case, it takes a set of random mask points for dividing arbitrary volumes. It computes the quantiles of the mask and then finds the closest mask point to each data point to determine the subvolume the data point belongs in.\n\nThe function expects a data array with shape (ndat, ndims) for Ndat samples in ndims dimensions. The mask array should have shape (nmask, ndims) and then there is an integere sidedivs which specifies the number of times each dimension is divided up to make sidedivs^ndims subvolumes.\n\n\n\n\n\nAs with the other method for get_subvols, this function computes the subvolume indices for given samples. It assumes a constant density throughout the volume. The method computes the subvolumes based on a set of extrema for sample values in each dimension and a number of volumes to divide the sample on per side. If a single set of extrema are given, the assumption is that they are the same in each dimension. Alternatively, it can take a set of volume edges in each dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialJackknife.jackknife",
    "page": "Docstrings",
    "title": "SpatialJackknife.jackknife",
    "category": "function",
    "text": "This function computes the jackknife mean and variance over the observations computed from the data with obsfunc. They are computed by repeatedly applying obsfunc to the data with one of the subvolumes removed. It therefore assumes that obsfunc has normalised the observable for that remaining volume. The function obsfunc must be callable with the form\n\nobsfunc(data::Array{Float64, 2}, args...)\n\nfor optional args tuple and the value returned by obsfunc must be in the form of an array of floats. If any of the returned values are NaNs, an error will be raised. By default, the covariance matrix is computed for observables in more than one dimension, but setting covar to false will result in only the diagonal variances being returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SpatialJackknife.SpatialJackknifeSpatialJackknife.evalSpatialJackknife.get_dimsSpatialJackknife.get_subvolsSpatialJackknife.includeSpatialJackknife.jackknife"
},

]}
