var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "block_arrays_ext/#",
    "page": "BlockArrays extensions",
    "title": "BlockArrays extensions",
    "category": "page",
    "text": ""
},

{
    "location": "block_arrays_ext/#Extensions-to-BlockArrays.jl-1",
    "page": "BlockArrays extensions",
    "title": "Extensions to BlockArrays.jl",
    "category": "section",
    "text": "This package has had to implement a number of extensions to BlockArrays.jl, which are detailed below. The hope is that these will eventually find their way into BlockArrays.jl, as they don\'t obviously belong in this package."
},

{
    "location": "block_arrays_ext/#Block-Symmetric-Matrices-1",
    "page": "BlockArrays extensions",
    "title": "Block Symmetric Matrices",
    "category": "section",
    "text": "Let us define a block-symmetric matrix X to be an AbstractBlockMatrix endowed with the property getblock(X, m, n) == transpose(getblock(X, n, m)), which we call block-symmetry. It is straightforward to see that block-symmetry implies:symmetry in the usual sense (X[p, q] == X[q, p]), and\nsize(getblock(X, m, n)) == size(getblock(X, n, m)), and\ngetblock(X, p, p) is Symmetric for all p.It will be useful for our subsequent discussion to define blocksizes(X, n) to be a vector whose pth element is size(getblock(X, p, 1), n)."
},

{
    "location": "block_arrays_ext/#Why-bother?-1",
    "page": "BlockArrays extensions",
    "title": "Why bother?",
    "category": "section",
    "text": "The last property is particularly important for our purposes: it will allow us to guarantee that the Cholesky factorisation of a positive definite block-symmetric matrix can be represented as block matrix for which blocksizes is exactly the same."
},

{
    "location": "block_arrays_ext/#Which-block-matrices-can-be-block-symmetric?-1",
    "page": "BlockArrays extensions",
    "title": "Which block matrices can be block symmetric?",
    "category": "section",
    "text": "It is important to ask which block matrices can potentially to be block-symmetric. A necessary condition for a block matrix to be block symmetric is that blocksizes(X, 1) == blocksizes(X, 2). From an implementation perspective this condition is sufficient: BlockSymmetric(X) simply checks that this condition holds, and then enforces that X be block symmetric. This is analogous to the way which Symmetric(Y), for some AbstractMatrix Y, checks that Y is square and then enforces Y[p, q] == Y[q, p]."
},

{
    "location": "block_arrays_ext/#Types-under-consideration-1",
    "page": "BlockArrays extensions",
    "title": "Types under consideration",
    "category": "section",
    "text": "The basic types under consideration are:const ABV{T} = AbstractBlockVector{T}\nconst ABM{T} = AbstractBlockMatrix{T}\nconst ABMV{T} = Union{ABV{T}, ABM{T}}\nconst BS{T} = BlockSymmetric{T, <:AbstractBlockMatrix{T}}Furthermore, we require the following wrappers around BlockSymmetric matrices:UpperTriangular{T, <:BS{T}}\nLowerTriangular{T, <:BS{T}}\nLazyPDMat{T, <:BS{T}}For all of the above, we require \"sensible\" implementations of the following unary functions:getblock\nnblocks\nblocksizes\nsetblock!\ncopy\ntranspose (0.6-specific, changes in 0.7 / 1.0)\nadjoint (0.6-specific, changes in 0.7 / 1.0)"
},

{
    "location": "mean_and_kernel_interfaces/#",
    "page": "Interfaces",
    "title": "Interfaces",
    "category": "page",
    "text": ""
},

{
    "location": "mean_and_kernel_interfaces/#Interfaces-1",
    "page": "Interfaces",
    "title": "Interfaces",
    "category": "section",
    "text": ""
},

{
    "location": "mean_and_kernel_interfaces/#AbstractDataSets-1",
    "page": "Interfaces",
    "title": "AbstractDataSets",
    "category": "section",
    "text": "There are multiple formats in which one could provide a \"data set\". For example, is might be a vector of numbers where the interpretation is that each element is a data point. Conversely, one might provide a data set in the form of a matrix, in which case the interpretation is not unambiguous – should each element be considered a data point? This is not usually the interpretation the people have in mind; typically a matrix is provided because one has vector-valued observations, and each column or row corresponds to a data point. So there are essentially not-unreasonable obvious interpretations of a data set provided as a matrix, and different people have different ideas about what is \"right\".To make matters even more ambiguous, what if I want to provide a vector (whose length is an even number) where each pair of elements corresponds to an observation? This might seem like a slightly strange scheme, and I admit that I can\'t think of a particular use-case off the top of my head, but it doesn\'t seem completely unreasonable to me that one might want to do such a thing.Moreover, the types of computations that one wishes to perform will likely vary depending upon the type of data set one is provided with. For example, the particular way in which we will compute the covariance matrix of the Exponentiated Quadratic kernel will depend on the dimensionality of the input data, and how it is stored in memory.The above motivates abstracting away the implementation details of any particular data set. We propose to do this is in the usual way using the type system. A traits-based system would probably also work, but we don\'t consider that for now.We propose the AbstractDataSet type, which should be thought of conceptually as an ordered list of \"data points\", where a data point is whatever you define it to be (common examples being Reals, and Vector{<:Real}s). An AbstractDataSet D should adhere to the following interface:Required methods  Brief description\nsize(D)  The size of D. Should be a 1-Tuple.\ngetindex(D, n::Int)  Get the nth data point.\ngetindex(D, n::AbstractVector{Int})  Get the data points at each index in n.\neachindex(D)  All the indices of D.\nImportant optional methods Default definition Brief descriptionAt the current time, AbstractDataSet subtypes AbstractVector, as we wish map and broadcast to work properly with it. As of 0.7 / 1.0, this will be unnecessary."
},

{
    "location": "mean_and_kernel_interfaces/#Built-In-AbstractDataSets-1",
    "page": "Interfaces",
    "title": "Built-In AbstractDataSets",
    "category": "section",
    "text": ""
},

{
    "location": "mean_and_kernel_interfaces/#VectorData-1",
    "page": "Interfaces",
    "title": "VectorData",
    "category": "section",
    "text": "A thin wrapper around a vector of data points of arbitrary type."
},

{
    "location": "mean_and_kernel_interfaces/#MatrixData-1",
    "page": "Interfaces",
    "title": "MatrixData",
    "category": "section",
    "text": "A thin wrapper around a matrix in which each column should be a data point."
},

{
    "location": "mean_and_kernel_interfaces/#BlockData-1",
    "page": "Interfaces",
    "title": "BlockData",
    "category": "section",
    "text": "Defined in terms of a vector of AbstractDataSets."
},

{
    "location": "mean_and_kernel_interfaces/#map-and-pairwise-with-AbstractDataSets-1",
    "page": "Interfaces",
    "title": "map and pairwise with AbstractDataSets",
    "category": "section",
    "text": "From Stheno\'s perspective, the two most important operations involving AbstractDataSets are map and pairwise. Mapping a unary, scalar-valued, function f over an AbstractDataSet D of length N should return an AbstractVector of length N, whilst applying pairwise to a binary, scalar-valued, function f in conjunction with two AbstractDataSets D1 and D2 of lengths N1 and N2 respectively should return an AbstractMatrix of size N1 x N2. Note that we require that the return types of these operations are specified abstractly. This is crucial since certain return types might have special structure, the most crucial of which being block structure.Required methods Description\nmap(f, D) The usual definition of map for unary f and iterable D.\nmap(k, D1, D2) Usual definition of map for binary k and iterables D1, D2.\npairwise(k, D1, D2) N1 x N2 AbstractMatrix K where K[p, q] = f(D1[p], D2[q]).\npairwise(k, D) Shorthand for pairwiise(f, D, D)."
},

{
    "location": "mean_and_kernel_interfaces/#Means,-Kernels,-and-CrossKernels-1",
    "page": "Interfaces",
    "title": "Means, Kernels, and CrossKernels",
    "category": "section",
    "text": "MeanFunctions, Kernels, and CrossKernels form the core of Stheno. All of the Gaussian process and affine transform functionality is built on top of / defined in terms of these basic components. Consequently, it is especially important that they be defined in terms of a consistent interface, and thoroughly tested.We present the interfaces for each of these components. Furthermore, we discuss the features and limitations of the built-in testing functionality for each of the components, explaining what problems you can expect the tests to identify for you, and conversely what types of tests cannot be automated."
},

{
    "location": "mean_and_kernel_interfaces/#MeanFunction-1",
    "page": "Interfaces",
    "title": "MeanFunction",
    "category": "section",
    "text": "For any μ isa MeanFunction, we have the following:Required methods  Brief description\nμ(x)  Evaluate μ at x.\neachindex(μ)  Index set of domain of μ. Should error if length(μ) is infinite.\nImportant optional methods Default definition Brief description\nunary_obswise(μ, X) unary_obswise_fallback μ(x) for each observation x in X\nlength(μ) ∞ The size of the domain of μRequired testing is as follows:Required methods Automatic Tests Tests to Write\nμ(x) Is not Nothing Correctness\neachindex(μ) No testing Correctness\nImportant optional methods Automatic Tests Tests to Write\nunary_obswise(μ, X) Is consistent with unary_obswise_fallback None\nlength(μ) No testing Correctness"
},

{
    "location": "mean_and_kernel_interfaces/#Kernel-1",
    "page": "Interfaces",
    "title": "Kernel",
    "category": "section",
    "text": ""
},

{
    "location": "mean_and_kernel_interfaces/#Abstract-Gaussian-Process-interface-1",
    "page": "Interfaces",
    "title": "Abstract Gaussian Process interface",
    "category": "section",
    "text": "For f, g <: AbstractGaussianProcess, we require the following methods:Required methods Brief description\nmean(f) Representation of the mean function of a GP\nkernel(f) Representation of the kernel of a GP\nkernel(f, g) Representation of the cross-kernel between f and g\nImportant optional methods Brief description\nf == g Equality. Defaults to checking mean and kernel are equal\nlength(f) Defaults to length of length(mean(f))\neachindex(f) Defaults to eachindex(mean(f))\nmean_vec(f) Vector representation of mean(f). Defaults to AbstractVector(mean(f))\ncov(f) Covariance matrix of f. Defaults to AbstractMatrix(kernel(f))\nxcov(f, g) Cross-covariance matrix between f and g. Defaults to AbstractMatrix(kernel(f, g))\nmarginal_cov(f) Equivalent to diag(cov(f)), but fastNote that eachindex, mean_vec, cov, xcov, and marginal_cov should all fail if the dimensionality of f (or g if applicable) is not finite."
},

]}
