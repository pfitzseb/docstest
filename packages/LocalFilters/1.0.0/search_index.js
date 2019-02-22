var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LocalFilters.jl-1",
    "page": "Readme",
    "title": "LocalFilters.jl",
    "category": "section",
    "text": "(Image: License) (Image: Build Status) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)This package implements multi-dimensional local filters for Julia (convolution, mathematical morphology, etc.). Local filters are defined by specific operations combining each value of a source array with the values in a local neighborhood which may have any size, shape and dimensionality.  Predefined local filters are provided as well as means to simply implement custom filters.This document is structured as follows:Summary provides a quick introduction.\nImplementation explains how to implement you own filter.\nNeighborhoods describes the concept of neighborhoods.\nInstallation to install the package.Note that this is a first implementation to define the API.  It is is reasonably fast (see benchmarks.jl) but separable kernels can be made faster.Packages with overlapping functionalities:ImageFiltering for local filters on multidimensional arrays (not just images), also implement various boundary conditions;\nImageMorphology for fast morphological operations with separable structuring elements;"
},

{
    "location": "#Summary-1",
    "page": "Readme",
    "title": "Summary",
    "category": "section",
    "text": "LocalFilters implements local filtering operations which combine the values of an array in a neighborhood of each elements of the array (and possibly the values of a kernel associated with the neighborhood).  The neighborhood is defined relatively to a given position by an instance of a type derived from Neighborhood.  For mathematical morphology operations, a neighborhood is called a structuring element.Denoting A the source array and B the neighborhood or the kernel (by default B is a centered box of size 3 along every dimension), the available filters are:erode(A, B=3) performs an erosion (local minimum) of A by B;\ndilate(A, B=3) performs a dilation (local maximum) of A by B;\nlocalextrema(A, B=3) yields the erosion and the dilation of A by B;\nopening(A, B=3) performs an erosion followed by a dilation;\nclosing(A, B=3) performs a dilation followed by an erosion;\ntop_hat(A, B=3 [, S]) performs a summit detection (an optional third argument S may be supplied to pre-smooth A by S);\nbottom_hat(A, B=3 [, S]) performs a valley detection (an optional third argument S may be supplied to pre-smooth A by S);\nlocalmean(A, B=3) performs a local averaging;\nconvolve(A, B=3) performs a convolution by the kernel B or by the support of B is eltype(B) is Bool;\nbilateralfilter(A, Fr, Gs) performs a bilateral filtering of array A with Fr the range kernel for smoothing differences in intensities and Gs the spatial kernel for smoothing differences in coordinates (see: https://en.wikipedia.org/wiki/Bilateral_filter).and many more to come..."
},

{
    "location": "#Implementation-1",
    "page": "Readme",
    "title": "Implementation",
    "category": "section",
    "text": "The pseudo-code for a local filtering operation C = filter(A, B) writes:for i ∈ Sup(A)\n    v = initial(A[i])\n    for j ∈ Sup(B) and such that i-j ∈ Sup(A)\n        v = update(v, A[i-j], B[j])\n    end\n    store(C, i, v)\nendwhere A is the source of the operation, B is the neighborhood, C is the result of the operation.  Here Sup(A) denotes the support of A (that is the set of indices in A).  The methods initial, update and store are specific to the considered operation.  To execute the filter, call the localfilter! method as:localfilter!(dst, A, B, initial, update, store)localfilter! applies the local filter defined by the neighborhood B and methods initial, update and store to the source array A and stores the reseult in the destination dst which is then returned.For instance, to compute a local maximum (i.e. a dilation in mathematical morphology terms):initial(a) = typemin(T)\nupdate(v,a,b) = (b && v < a ? a : v)\nstore(c,i,v) = c[i] = vwith T the type of the elements of A.  Of course, anonymous functions can be exploited to implement this filter in a single call:localfilter!(dst, A, B,\n             (a)     -> typemin(T),           # initial method\n             (v,a,b) -> (b && v < a ? a : v), # update method\n             (c,i,v) -> c[i] = v)             # store methodBelow is another example of the methods needed to implement a local average:initial(a) = (0, zero(T))\nupdate(v,a,b) = v[1] + 1, v[2] + (b ? a : zero(T))\nstore(c,i,v) = c[i] = v[2]/v[1]The same mechanism can be used to implement other operations such as convolution, median filtering, etc. via the localfilter! driver."
},

{
    "location": "#Neighborhoods-1",
    "page": "Readme",
    "title": "Neighborhoods",
    "category": "section",
    "text": "Neighborhood (a.k.a. structuring element for the fans of mathematical morphology) is a central concept in LocalFilters.  The neighborhood defines which values are involved in a local operation for each component of the source array.  Neighborhoods are assumed to be shift invariant but may have any support shape and may have embedded weights (e.g., to implement local convolution)."
},

{
    "location": "#Types-of-neighborhoods-1",
    "page": "Readme",
    "title": "Types of neighborhoods",
    "category": "section",
    "text": "From the user point of view, there are three kinds of neighborhoods:Rectangular boxes are rectangular neighborhoods whose edges are aligned with the axes of array indices and which may be centered or have arbitrary offsets along the dimensions.  These neighborhoods are represented by instances of LocalFilters.RectangularBox.\nArbitrarily shaped neighborhoods are neighborhoods with arbitrary shape and offset.  These neighborhoods are represented by instances of LocalFilters.Kernel with boolean element type.  These neighborhoods are constructed from an array of booleans and an optional starting index.\nKernels are neighborhoods whose elements are weights and which be may have arbitrary offset.  These neighborhoods are represented by instances of LocalFilters.Kernel with numerical element type.  These neighborhoods are constructed from an array of weights and an optional starting index."
},

{
    "location": "#Syntax-for-neighborhoods-1",
    "page": "Readme",
    "title": "Syntax for neighborhoods",
    "category": "section",
    "text": "The default neighborhood is a centered rectangular box of width 3 in each of its dimensions.\nA scalar integer w yields a centered rectangular box of size w along all dimensions.  w must be at least equal to 1 and the geometrical center of the box is defined according to the conventions in fftshift.\nA tuple t of integers yields a centered rectangular box whose size is t[i] along the i-th dimension.  All values of t must be larger or equal to 1.  Tip: Remember that you can use v... to convert a vector v into a tuple.\nAn array A yields a LocalFilters.Kernel whose coefficients are the values of A and whose neighborhood is the centered bounding-box of A.\nA Cartesian range R (an instance of CartesianIndices or of CartesianRange) yields a LocalFilters.RectangularBox which is a rectangular neighborhood whose support contains all relative positions within first(R) and last(R).\nA rectangular box neighborhood created by calling LocalFilters.RectangularBox as:\nLocalFilters.RectangularBox(R)\nLocalFilters.RectangularBox(I1, I2)\nLocalFilters.RectangularBox(dims, offs)\nLocalFilters.RectangularBox(inds)\nwhere R is an instance ofCartesianIndices (or of CartesianRange for old Julia version), I1 and I2 are two CartesianIndex specifying the first and last relative position within the neighborhood, dims and offs are tuples of integers specifying the dimensions of the neighborhood and its offsets, inds are unit ranges.\nAssuming dim is an integer, then:\nLocalFilters.RectangularBox{N}(dim)\nyields an N-dimensional rectangular box of size dim along all dimensions and centered at the geometrical center of the box (with the same conventions as fftshift).\nSimilarly, assuming i1 and i2 are integers, then:\nLocalFilters.RectangularBox{N}(i1:i2)\nyields an N-dimensional rectangular box with index range i1:i2 along all dimensions."
},

{
    "location": "#Methods-on-a-neighborhood-1",
    "page": "Readme",
    "title": "Methods on a neighborhood",
    "category": "section",
    "text": "The following methods make sense on a neighborhood B:eltype(B) -> element type of B\nndims(B)  -> number of dimensions of B\nlength(B) -> number of elements in the bounding-box of B\nsize(B)   -> size of the bounding-box of B along all dimensions\nsize(B,d) -> size of the bounding-box of B along d-th dimension\nfirst(B)  -> CartesianIndex of first position in the bounding-box\n             of B relative to its anchor\nlast(B)   -> CartesianIndex of last position in the bounding-box\n             of B relative to its anchor\nB[i]      -> yields the kernel value of B at index iNote that the index i in B[i] is assumed to be between first(B) and last(B), for efficiency reasons this is not checked.  The type returned by eltype(B) is Bool for a neighborhood which is just defined by its support (e.g. a LocalFilters.CenteredBox or a LocalFilters.RectangularBox), the element type of its kernel otherwise.CartesianRange(B)yields the Cartesian range of relative positions of the bounding-box of neighborhood B.If the argument B which defines a neighborhood (see previous section) is not an instance of a type derived from LocalFilters.Neighborhood, it may be explicitly converted by:convert(LocalFilters.Neighborhood{N}, B)with N the number of dimensions of the target array."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the last official version:using Pkg\nPkg.add(\"LocalFilters\")To use the last development version:using Pkg\nPkg.clone(\"https://github.com/emmt/LocalFilters.jl.git\")The LocalFilters package is pure Julia code and there is nothing to build."
},

{
    "location": "autodocs/#LocalFilters.CartesianRegion",
    "page": "Docstrings",
    "title": "LocalFilters.CartesianRegion",
    "category": "constant",
    "text": "CartesianRegion{N} is an union of the types of anything suitable to define a Cartesian region in N dimensions.  That is, an interval of Cartesian indices in N dimensions.  Methods initialindex, finalindex, limits and cartesianregion can be applied to anything whose type belongs to CartesianRegion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.Dimensions",
    "page": "Docstrings",
    "title": "LocalFilters.Dimensions",
    "category": "type",
    "text": "Dimensions{N} is an N-tuple of integers, that is the type of an argument suitable for specifying a list of dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.IndexInterval",
    "page": "Docstrings",
    "title": "LocalFilters.IndexInterval",
    "category": "constant",
    "text": "IndexInterval is an union of the types of any argument suitable to specify an interval of indices along a dimension (that is, an integer or an integer valued unit range).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.Kernel",
    "page": "Docstrings",
    "title": "LocalFilters.Kernel",
    "category": "type",
    "text": "A Kernel can be used to define a weighted neighborhood (for weighted local average or for convolution) or a structuring element (for mathematical morphology).  It is a rectangular array of coefficients over a, possibly off-centered, rectangular neighborhood.  In general, it is sufficient to specify ::Kernel{T,N} in the signature of methods, with T the type of the coefficients and N the number of dimensions (the third parameter A of the type is to fully qualify the type of the array of coefficients).\n\nA kernel is built as:\n\nB = Kernel([T,] C, start=defaultstart(C))\n\nwhere C is the array of coefficients (which can be retrieved by coefs(B)) and start the initial CartesianIndex for indexing the kernel (which can be retrieved by initialindex(B)).  The start parameter let the caller choose an arbitrary origin for the kernel coefficients; when a filter is applied, the following mapping is assumed:\n\nB[k] ≡ C[k + off]\n\nwhere off = initialindex(C) - initialindex(B).\n\nIf start is omitted, its value is set so that the origin (whose index is zero(CartesianIndex{N}) with N the number of dimensions) of the kernel indices is at the geometric center of the array of coefficients (see LocalFilters.defaultstart).  Optional argument T is to impose the type of the coefficients.\n\nTo convert the element type of the coefficients of an existing kernel, do:\n\nKernel(T, K)\n\nwhich yields a kernel whose coefficients are those of the kernel K converted to type T.\n\nIt is also possible to convert instances of RectangularBox into a kernel with boolean coefficients by calling:\n\nKernel(B)\n\nwhere B is the neighborhood to convert into an instance of Kernel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.Neighborhood",
    "page": "Docstrings",
    "title": "LocalFilters.Neighborhood",
    "category": "type",
    "text": "All neighborhoods are instances of a type derived from Neighborhood.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.RectangularBox",
    "page": "Docstrings",
    "title": "LocalFilters.RectangularBox",
    "category": "type",
    "text": "RectangularBox(start, stop)\n\nyields a neighborhood which is a rectangular (Cartesian) box defined by the bounds of the multi-dimensional indices in the box.\n\nAnother possibility is to specify the dimensions of the box and the offsets of its central element:\n\nRectangularBox(dims, offs)\n\nwith dims a N-tuple of dimensions and offs either a N-tuple of indices of an instance of CartesianIndex{N}.\n\nA RectangularBox can also be defined by the index ranges along all the dimensions.  For example:\n\nRectangularBox(-3:3, 0, -2:1)\nRectangularBox((-3:3, 0, -2:1))\n\n\nboth yield a 3-dimensional RectangularBox of size 7×1×4 and whose first index varies on -3:3, its second index is 0 while its third index varies on -2:1.\n\nFinally, a RectangularBox can be defined as:\n\nRectangularBox(R)\n\nwhere R is an instance of CartesianIndices or, on version of Julia ≤ 0.6, CartesianRange.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.UnitIndexRange",
    "page": "Docstrings",
    "title": "LocalFilters.UnitIndexRange",
    "category": "type",
    "text": "UnitIndexRange is any integer valued range with unit step, that is the type of an argument suitable for specifying a range of contiguous indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.UnitIndexRanges",
    "page": "Docstrings",
    "title": "LocalFilters.UnitIndexRanges",
    "category": "type",
    "text": "UnitIndexRanges{N} is an N-tuple of UnitIndexRange, that is the type of an argument suitable for specifying a list of Cartesian indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters._store!",
    "page": "Docstrings",
    "title": "LocalFilters._store!",
    "category": "function",
    "text": "_store!(arr, idx, val) stores value val in array arr at index idx, taking care of rounding val if it is of floating-point type while the elements of arr are integers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters._typeofsum",
    "page": "Docstrings",
    "title": "LocalFilters._typeofsum",
    "category": "function",
    "text": "_typeofsum(T) yields a numerical type suitable for storing a sum of elements of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.ball",
    "page": "Docstrings",
    "title": "LocalFilters.ball",
    "category": "function",
    "text": "LocalFilters.ball(N, r)\n\nyields a boolean mask which is a N-dimensional array with all dimensions odd and equal and set to true where position is inside a N-dimesional ball of radius r.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.BilateralFilter.bilateralfilter",
    "page": "Docstrings",
    "title": "LocalFilters.BilateralFilter.bilateralfilter",
    "category": "function",
    "text": "bilateralfilter([T,] A, Fr, Gs, ...)\n\nyields the result of applying the bilateral filter on array A.\n\nArgument Fr specifies the range kernel for smoothing differences in intensities, it is a function which takes two values from A as arguments and returns a nonnegative value.\n\nArguments Gs, ... specify the spatial kernel for smoothing differences in coordinates.\n\nOptional argument T can be used to force the floating-point type used for (most) computations.\n\nThe in-place version is:\n\nbilateralfilter!([T,] dst, A, Fr, Gs, ...)\n\nwhich stores in dst the result of applying the bilateral filter on array A.\n\nSee wikipedia.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.BilateralFilter.bilateralfilter!",
    "page": "Docstrings",
    "title": "LocalFilters.BilateralFilter.bilateralfilter!",
    "category": "function",
    "text": "bilateralfilter([T,] A, Fr, Gs, ...)\n\nyields the result of applying the bilateral filter on array A.\n\nArgument Fr specifies the range kernel for smoothing differences in intensities, it is a function which takes two values from A as arguments and returns a nonnegative value.\n\nArguments Gs, ... specify the spatial kernel for smoothing differences in coordinates.\n\nOptional argument T can be used to force the floating-point type used for (most) computations.\n\nThe in-place version is:\n\nbilateralfilter!([T,] dst, A, Fr, Gs, ...)\n\nwhich stores in dst the result of applying the bilateral filter on array A.\n\nSee wikipedia.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.bottom_hat",
    "page": "Docstrings",
    "title": "LocalFilters.bottom_hat",
    "category": "function",
    "text": "top_hat(A, R)\ntop_hat(A, R, S)\nbottom_hat(A, R)\nbottom_hat(A, R, S)\n\nPerform A summit/valley detection by applying a top-hat filter to array A.  Argument R defines the structuring element for the feature detection.  Optional argument S specifies the structuring element used to apply a smoothing to A prior to the top-hat filter.  If R and S are specified as the radii of the structuring elements, then S should be smaller than R.  For instance:\n\ntop_hat(bitmap, 3, 1)\n\nmay be used to detect text or lines in a bimap image.\n\nThe in-place versions:\n\ntop_hat!(dst, wrk, src, R)\nbottom_hat!(dst, wrk, src, R)\n\napply the top-hat filter on the source src and store the result in the destination dst using wrk as a workspace array.  These 3 arguments must be similar but different arrays.  The destination dst is returned.\n\nSee also dilate, closing and morph_enhance.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.bottom_hat!",
    "page": "Docstrings",
    "title": "LocalFilters.bottom_hat!",
    "category": "function",
    "text": "top_hat(A, R)\ntop_hat(A, R, S)\nbottom_hat(A, R)\nbottom_hat(A, R, S)\n\nPerform A summit/valley detection by applying a top-hat filter to array A.  Argument R defines the structuring element for the feature detection.  Optional argument S specifies the structuring element used to apply a smoothing to A prior to the top-hat filter.  If R and S are specified as the radii of the structuring elements, then S should be smaller than R.  For instance:\n\ntop_hat(bitmap, 3, 1)\n\nmay be used to detect text or lines in a bimap image.\n\nThe in-place versions:\n\ntop_hat!(dst, wrk, src, R)\nbottom_hat!(dst, wrk, src, R)\n\napply the top-hat filter on the source src and store the result in the destination dst using wrk as a workspace array.  These 3 arguments must be similar but different arrays.  The destination dst is returned.\n\nSee also dilate, closing and morph_enhance.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.cartesianregion",
    "page": "Docstrings",
    "title": "LocalFilters.cartesianregion",
    "category": "function",
    "text": "cartesianregion(args...) -> R\n\nyields the rectangular region (as an instance of CartesianIndices or CartesianRange depending on Julia version) specified by the arguments which can be:\n\nan abstract array whose axes define the region (see axes);\na list of unit range indices and/or indices along each dimension;\nthe corners of the bounding box, say start and stop, specified as two instances of CartesianIndex;\na neighborhood (see Neighborhood);\nan instance of CartesianIndices or CartesianRange.\n\nThis method is a workaround to deal with optimization issues between different versions of Julia.  In recent Julia versions (≥ 0.7), cartesianregion(args...) yields an instance of CartesianIndices; while in Julia version 0.6, cartesianregion(args...) yields a CartesianRange which appears to be faster than CartesianIndices as provided by Compat.\n\nSee also: initialindex, finalindex and limits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.closing",
    "page": "Docstrings",
    "title": "LocalFilters.closing",
    "category": "function",
    "text": "closing(A, R)\nopening(A, R)\n\nrespectively perform a closing or an opening of array A by the structuring element R.  If not specified, R is a box of size 3 along all the dimensions of A.  A closing is a dilation followed by an erosion, whereas an opening is an erosion followed by a dilation.\n\nThe in-place versions are:\n\nclosing!(dst, wrk, src, R)\nopening!(dst, wrk, src, R)\n\nwhich perform the operation on the source src and store the result in destination dst using wrk as a workspace array.  These 3 arguments must be similar arrays, dst and src may be identical, but wrk must not be the same array as src or dst.  The destination dst is returned.\n\nSee erode or dilate for the meaning of the arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.closing!",
    "page": "Docstrings",
    "title": "LocalFilters.closing!",
    "category": "function",
    "text": "closing(A, R)\nopening(A, R)\n\nrespectively perform a closing or an opening of array A by the structuring element R.  If not specified, R is a box of size 3 along all the dimensions of A.  A closing is a dilation followed by an erosion, whereas an opening is an erosion followed by a dilation.\n\nThe in-place versions are:\n\nclosing!(dst, wrk, src, R)\nopening!(dst, wrk, src, R)\n\nwhich perform the operation on the source src and store the result in destination dst using wrk as a workspace array.  These 3 arguments must be similar arrays, dst and src may be identical, but wrk must not be the same array as src or dst.  The destination dst is returned.\n\nSee erode or dilate for the meaning of the arguments.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.coefs",
    "page": "Docstrings",
    "title": "LocalFilters.coefs",
    "category": "function",
    "text": "LocalFilters.coefs(B) yields the array of coefficients embedded in kernel B.\n\nSee also: LocalFilters.offset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.convertcoefs",
    "page": "Docstrings",
    "title": "LocalFilters.convertcoefs",
    "category": "function",
    "text": "convertcoefs(T, A)\n\nyields an array of kernel coefficients equivalent to array A but whose elements have type T.\n\nIf T is a floating-point type and A is a boolean array, then the values of the result are one(T) where A is true and zero(T) elsewhere.  To use different values (for instance, to define flat structuring elements), you may call:\n\nconvertcoefs((vtrue, vfalse), A)\n\nwith A a boolean array to get an array whose elements are equal to vtrue where A is true and to vfalse otherwise.\n\nSee also: strel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.convolve",
    "page": "Docstrings",
    "title": "LocalFilters.convolve",
    "category": "function",
    "text": "convolve(A, B)\n\nyields the convolution of A by the support of the neighborhood defined by B of by the kernel B if it is an instance of LocalFilters.Kernel with numerical coefficients.  The result is an array similar to A.\n\nThe in-place version is:\n\nconvolve!(dst, A, B) -> dst\n\nSee also localfilter!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.convolve!",
    "page": "Docstrings",
    "title": "LocalFilters.convolve!",
    "category": "function",
    "text": "convolve(A, B)\n\nyields the convolution of A by the support of the neighborhood defined by B of by the kernel B if it is an instance of LocalFilters.Kernel with numerical coefficients.  The result is an array similar to A.\n\nThe in-place version is:\n\nconvolve!(dst, A, B) -> dst\n\nSee also localfilter!.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.defaultstart",
    "page": "Docstrings",
    "title": "LocalFilters.defaultstart",
    "category": "function",
    "text": "defaultstart(A) -> I::CartesianIndex\n\nyields the initial (multi-dimensional) index of a rectangular region which has the same size as the array A but whose origin (that is, index zero(CartesianIndex{N})) is at the geometrical center of the region (with the same conventions as fftshift).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.dilate",
    "page": "Docstrings",
    "title": "LocalFilters.dilate",
    "category": "function",
    "text": "Basic operations of mathematical morphology are:\n\nerode(A, B) -> Amin\ndilate(A, B) -> Amax\n\nwhich respectively return the local minima Amin and the local maxima Amax of argument A in a neighborhood defined by B.  The returned result is similar to A (same size and type).\n\nThe two operations can be combined in one call:\n\nlocalextrema(A, B) -> Amin, Amax\n\nThe in-place versions:\n\nerode!(Amin, A, B) -> Amin\ndilate!(Amax, A, B) -> Amax\nlocalextrema!(Amin, Amax, A, B) -> Amin, Amax\n\napply the operation to A with structuring element B and store the result in the provided arrays Amin and/or Amax.\n\nSee also localmean, opening, closing, top_hat and bottom_hat.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.dilate!",
    "page": "Docstrings",
    "title": "LocalFilters.dilate!",
    "category": "function",
    "text": "Basic operations of mathematical morphology are:\n\nerode(A, B) -> Amin\ndilate(A, B) -> Amax\n\nwhich respectively return the local minima Amin and the local maxima Amax of argument A in a neighborhood defined by B.  The returned result is similar to A (same size and type).\n\nThe two operations can be combined in one call:\n\nlocalextrema(A, B) -> Amin, Amax\n\nThe in-place versions:\n\nerode!(Amin, A, B) -> Amin\ndilate!(Amax, A, B) -> Amax\nlocalextrema!(Amin, Amax, A, B) -> Amin, Amax\n\napply the operation to A with structuring element B and store the result in the provided arrays Amin and/or Amax.\n\nSee also localmean, opening, closing, top_hat and bottom_hat.\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.erode",
    "page": "Docstrings",
    "title": "LocalFilters.erode",
    "category": "function",
    "text": "Basic operations of mathematical morphology are:\n\nerode(A, B) -> Amin\ndilate(A, B) -> Amax\n\nwhich respectively return the local minima Amin and the local maxima Amax of argument A in a neighborhood defined by B.  The returned result is similar to A (same size and type).\n\nThe two operations can be combined in one call:\n\nlocalextrema(A, B) -> Amin, Amax\n\nThe in-place versions:\n\nerode!(Amin, A, B) -> Amin\ndilate!(Amax, A, B) -> Amax\nlocalextrema!(Amin, Amax, A, B) -> Amin, Amax\n\napply the operation to A with structuring element B and store the result in the provided arrays Amin and/or Amax.\n\nSee also localmean, opening, closing, top_hat and bottom_hat.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.erode!",
    "page": "Docstrings",
    "title": "LocalFilters.erode!",
    "category": "function",
    "text": "Basic operations of mathematical morphology are:\n\nerode(A, B) -> Amin\ndilate(A, B) -> Amax\n\nwhich respectively return the local minima Amin and the local maxima Amax of argument A in a neighborhood defined by B.  The returned result is similar to A (same size and type).\n\nThe two operations can be combined in one call:\n\nlocalextrema(A, B) -> Amin, Amax\n\nThe in-place versions:\n\nerode!(Amin, A, B) -> Amin\ndilate!(Amax, A, B) -> Amax\nlocalextrema!(Amin, Amax, A, B) -> Amin, Amax\n\napply the operation to A with structuring element B and store the result in the provided arrays Amin and/or Amax.\n\nSee also localmean, opening, closing, top_hat and bottom_hat.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.initialindex",
    "page": "Docstrings",
    "title": "LocalFilters.initialindex",
    "category": "function",
    "text": "initialindex(B) -> Imin::CartesianIndex{N}\nfinalindex(B)   -> Imax::CartesianIndex{N}\n\nrespectively yield the initial and final multi-dimensional index for indexing the Cartesian region defined by B.  A Cartesian region defines a rectangular set of indices whose edges are aligned with the indexing axes.\n\nCompared to similar methods firstindex, lastindex(), first() and last(), the returned value is always an instance of CartesianIndex{N} with N the number of dimensions.\n\nAny multi-dimensional index I::CartesianIndex{N} is in the Cartesian region defined B if and only if Imin ≤ I ≤ Imax.\n\nAlso see: limits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.ismmbox",
    "page": "Docstrings",
    "title": "LocalFilters.ismmbox",
    "category": "function",
    "text": "ismmbox(B)\n\nyields whether neighborhood B has the same effect as a rectangular box for mathematical morphology operations.  This may be used to use fast separable versions of mathematical morphology operations like the van Herk-Gil-Werman algorithm.\n\nSee also: LocalFilters.RectangularBox.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.limits",
    "page": "Docstrings",
    "title": "LocalFilters.limits",
    "category": "function",
    "text": "limits(T::DataType) -> typemin(T), typemax(T)\n\nyields the infimum and supremum of a type T.\n\nlimits(B) -> Imin, Imax\n\nyields the corners (as a tuple of 2 CartesianIndex) of the Cartesian region defined by B.\n\nAlso see: initialindex and finalindex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.localextrema",
    "page": "Docstrings",
    "title": "LocalFilters.localextrema",
    "category": "function",
    "text": "Basic operations of mathematical morphology are:\n\nerode(A, B) -> Amin\ndilate(A, B) -> Amax\n\nwhich respectively return the local minima Amin and the local maxima Amax of argument A in a neighborhood defined by B.  The returned result is similar to A (same size and type).\n\nThe two operations can be combined in one call:\n\nlocalextrema(A, B) -> Amin, Amax\n\nThe in-place versions:\n\nerode!(Amin, A, B) -> Amin\ndilate!(Amax, A, B) -> Amax\nlocalextrema!(Amin, Amax, A, B) -> Amin, Amax\n\napply the operation to A with structuring element B and store the result in the provided arrays Amin and/or Amax.\n\nSee also localmean, opening, closing, top_hat and bottom_hat.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.localextrema!",
    "page": "Docstrings",
    "title": "LocalFilters.localextrema!",
    "category": "function",
    "text": "Basic operations of mathematical morphology are:\n\nerode(A, B) -> Amin\ndilate(A, B) -> Amax\n\nwhich respectively return the local minima Amin and the local maxima Amax of argument A in a neighborhood defined by B.  The returned result is similar to A (same size and type).\n\nThe two operations can be combined in one call:\n\nlocalextrema(A, B) -> Amin, Amax\n\nThe in-place versions:\n\nerode!(Amin, A, B) -> Amin\ndilate!(Amax, A, B) -> Amax\nlocalextrema!(Amin, Amax, A, B) -> Amin, Amax\n\napply the operation to A with structuring element B and store the result in the provided arrays Amin and/or Amax.\n\nSee also localmean, opening, closing, top_hat and bottom_hat.\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.localfilter",
    "page": "Docstrings",
    "title": "LocalFilters.localfilter",
    "category": "function",
    "text": "General local filters\n\nA local filtering operation can be performed by calling:\n\nlocalfilter!(dst, A, B, initial, update, store) -> dst\n\nwhere dst is the destination, A is the source, B defines the neighborhood, initial, update and store are three functions whose purposes are explained by the following pseudo-code to implement the local operation:\n\nfor i ∈ Sup(A)\n    v = initial(A[i])\n    for j ∈ Sup(A) and i - j ∈ Sup(B)\n        v = update(v, A[j], B[i-j])\n    end\n    store(dst, i, v)\nend\n\nwhere A Sup(A) yields the support of A (that is the set of indices in A) and likely Sup(B) for B.\n\nFor instance, to compute a local minimum (that is, an erosion):\n\nlocalfilter!(dst, A, B,\n             (a)     -> typemax(T),\n             (v,a,b) -> min(v,a),\n             (d,i,v) -> d[i] = v)\n\nImportant: Because the result of an elementary operation can be something else than just a scalar, the loop(s) in localfilter! are performed without bound checking of the destination and it is the caller\'s responsability to insure that the destination have the correct sizes.\n\n\n\n\n\nLocal filter by the van Herk-Gil-Werman algorithm\n\nlocalfilter!([dst = A,] A, dims, op, rngs [, w])\n\noverwrite the contents of dst with the result of applying van Herk-Gil-Werman algorithm to filter array A along dimension(s) dims with (associative) binary operation op and contiguous structuring element(s) defined by the interval(s) rngs.  Optional argument w is a workspace array which is automatically allocated if not provided; otherwise, it must be a vector of same element type as A which is resized (with resize!) as needed.  The destination dst must have the same indices as the source A (see axes).  Operation can be done in-place; that is, dst and A can be the same.\n\nArgument dims specifies along which dimension(s) of A the filter is to be applied, it can be a single integer, several integers or a colon : to specify all dimensions.  Dimensions are processed in the order given by dims (the same dimension may appear several times) and there must be a matching interval in rngs to specify the structuring element (except that if rngs is a single interval, it is used for every dimension in dims).  An interval is either an integer or an integer unit range in the form kmin:kmax (an interval specified as a single integer, say k, is the same as specifying k:k).\n\nAssuming mono-dimensional arrays A and dst, the single filtering pass:\n\nlocalfilter!(dst, A, :, op, rng)\n\nyields:\n\ndst[j] = A[j-kmax] ⋄ A[j-kmax+1] ⋄ A[j-kmax+2] ⋄ ... ⋄ A[j-kmin]\n\nfor all j ∈ [first(axes(A,1)):last(axes(A,1))], with x ⋄ y = op(x, y), kmin = first(rng) and kmax = last(rng).  Note that if kmin = kmax = k (which occurs if rng is a simple integer), the result of the filter is to operate a simple shift by k along the corresponding dimension and has no effects if k = 0.  This can be exploited to not filter some dimension(s).\n\nThe out-place version, allocates the destination array and is called as:\n\nlocalfilter([T,] A, dims, op, rngs [, w])\n\nwith T the element type of the result (by default T = eltype(A)).\n\nExamples\n\nThe in-place morphological erosion (local minimum) of the array A on a centered structuring element of width 7 in every dimension can be applied by:\n\nlocalfilter!(A, :, min, -3:3)\n\nOne can specify index interval 0 to do nothing along the corresponding dimension.  For instance:\n\nlocalfilter!(A, :, max, (-3:3, 0, -4:4))\n\nwill overwrite A with the local maxima (a.k.a. morphological dilation) of the three-dimensional array A in a centered local neighborhood of size 7×1×9 (nothing is done along the second dimension).  The same result may be obtained with:\n\nlocalfilter!(A, (1,3), max, (-3:3, -4:4))\n\nwhere the second dimension is omitted from the list of dimensions.\n\nThe local average of the two-dimensional array A on a centered structuring element of size 11×11 can be computed as:\n\nlocalfilter(A, :, +, (-5:5, -5:5))*(1/11)\n\nEfficiency and restrictions\n\nThe van Herk-Gil-Werman algorithm is very fast for rectangular structuring elements.  It takes at most 3 operations to filter an element along a given dimension whatever the width p of the considered local neighborhood.  For N-dimensional arrays, the algorithm requires only 3N operations per element instead of p^N - 1 operations for a naive implementation.  This however requires to make a pass along each dimension so memory page faults may reduce the performances.  This is somewhat attenuated by the fact that the algorithm can be applied in-place.  For efficient multi-dimensional out-of-place filtering, it is recommended to make the first pass with a fresh destination array and then all other passes in-place on the destination array.\n\nTo apply the van Herk-Gil-Werman algorithm, the structuring element must be separable along the dimensions and its components must be contiguous.  In other words, the algorithm is only applicable for N-dimensional rectangular neighborhoods.  The structuring element may however be off-centered by arbitrary offsets along each dimension.\n\nTo take into account boundary conditions (for now only least neighborhood is implemented) and allow for in-place operation, the algorithm allocates a workspace array.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.localfilter!",
    "page": "Docstrings",
    "title": "LocalFilters.localfilter!",
    "category": "function",
    "text": "Local filter by the van Herk-Gil-Werman algorithm\n\nlocalfilter!([dst = A,] A, dims, op, rngs [, w])\n\noverwrite the contents of dst with the result of applying van Herk-Gil-Werman algorithm to filter array A along dimension(s) dims with (associative) binary operation op and contiguous structuring element(s) defined by the interval(s) rngs.  Optional argument w is a workspace array which is automatically allocated if not provided; otherwise, it must be a vector of same element type as A which is resized (with resize!) as needed.  The destination dst must have the same indices as the source A (see axes).  Operation can be done in-place; that is, dst and A can be the same.\n\nArgument dims specifies along which dimension(s) of A the filter is to be applied, it can be a single integer, several integers or a colon : to specify all dimensions.  Dimensions are processed in the order given by dims (the same dimension may appear several times) and there must be a matching interval in rngs to specify the structuring element (except that if rngs is a single interval, it is used for every dimension in dims).  An interval is either an integer or an integer unit range in the form kmin:kmax (an interval specified as a single integer, say k, is the same as specifying k:k).\n\nAssuming mono-dimensional arrays A and dst, the single filtering pass:\n\nlocalfilter!(dst, A, :, op, rng)\n\nyields:\n\ndst[j] = A[j-kmax] ⋄ A[j-kmax+1] ⋄ A[j-kmax+2] ⋄ ... ⋄ A[j-kmin]\n\nfor all j ∈ [first(axes(A,1)):last(axes(A,1))], with x ⋄ y = op(x, y), kmin = first(rng) and kmax = last(rng).  Note that if kmin = kmax = k (which occurs if rng is a simple integer), the result of the filter is to operate a simple shift by k along the corresponding dimension and has no effects if k = 0.  This can be exploited to not filter some dimension(s).\n\nThe out-place version, allocates the destination array and is called as:\n\nlocalfilter([T,] A, dims, op, rngs [, w])\n\nwith T the element type of the result (by default T = eltype(A)).\n\nExamples\n\nThe in-place morphological erosion (local minimum) of the array A on a centered structuring element of width 7 in every dimension can be applied by:\n\nlocalfilter!(A, :, min, -3:3)\n\nOne can specify index interval 0 to do nothing along the corresponding dimension.  For instance:\n\nlocalfilter!(A, :, max, (-3:3, 0, -4:4))\n\nwill overwrite A with the local maxima (a.k.a. morphological dilation) of the three-dimensional array A in a centered local neighborhood of size 7×1×9 (nothing is done along the second dimension).  The same result may be obtained with:\n\nlocalfilter!(A, (1,3), max, (-3:3, -4:4))\n\nwhere the second dimension is omitted from the list of dimensions.\n\nThe local average of the two-dimensional array A on a centered structuring element of size 11×11 can be computed as:\n\nlocalfilter(A, :, +, (-5:5, -5:5))*(1/11)\n\nEfficiency and restrictions\n\nThe van Herk-Gil-Werman algorithm is very fast for rectangular structuring elements.  It takes at most 3 operations to filter an element along a given dimension whatever the width p of the considered local neighborhood.  For N-dimensional arrays, the algorithm requires only 3N operations per element instead of p^N - 1 operations for a naive implementation.  This however requires to make a pass along each dimension so memory page faults may reduce the performances.  This is somewhat attenuated by the fact that the algorithm can be applied in-place.  For efficient multi-dimensional out-of-place filtering, it is recommended to make the first pass with a fresh destination array and then all other passes in-place on the destination array.\n\nTo apply the van Herk-Gil-Werman algorithm, the structuring element must be separable along the dimensions and its components must be contiguous.  In other words, the algorithm is only applicable for N-dimensional rectangular neighborhoods.  The structuring element may however be off-centered by arbitrary offsets along each dimension.\n\nTo take into account boundary conditions (for now only least neighborhood is implemented) and allow for in-place operation, the algorithm allocates a workspace array.\n\n\n\n\n\nGeneral local filters\n\nA local filtering operation can be performed by calling:\n\nlocalfilter!(dst, A, B, initial, update, store) -> dst\n\nwhere dst is the destination, A is the source, B defines the neighborhood, initial, update and store are three functions whose purposes are explained by the following pseudo-code to implement the local operation:\n\nfor i ∈ Sup(A)\n    v = initial(A[i])\n    for j ∈ Sup(A) and i - j ∈ Sup(B)\n        v = update(v, A[j], B[i-j])\n    end\n    store(dst, i, v)\nend\n\nwhere A Sup(A) yields the support of A (that is the set of indices in A) and likely Sup(B) for B.\n\nFor instance, to compute a local minimum (that is, an erosion):\n\nlocalfilter!(dst, A, B,\n             (a)     -> typemax(T),\n             (v,a,b) -> min(v,a),\n             (d,i,v) -> d[i] = v)\n\nImportant: Because the result of an elementary operation can be something else than just a scalar, the loop(s) in localfilter! are performed without bound checking of the destination and it is the caller\'s responsability to insure that the destination have the correct sizes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.localmean",
    "page": "Docstrings",
    "title": "LocalFilters.localmean",
    "category": "function",
    "text": "localmean(A, B)\n\nyields the local mean of A in a neighborhood defined by B.  The result is an array similar to A.\n\nThe in-place version is:\n\nlocalmean!(dst, A, B) -> dst\n\nSee also localfilter!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.localmean!",
    "page": "Docstrings",
    "title": "LocalFilters.localmean!",
    "category": "function",
    "text": "localmean(A, B)\n\nyields the local mean of A in a neighborhood defined by B.  The result is an array similar to A.\n\nThe in-place version is:\n\nlocalmean!(dst, A, B) -> dst\n\nSee also localfilter!.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.offset",
    "page": "Docstrings",
    "title": "LocalFilters.offset",
    "category": "function",
    "text": "LocalFilters.offset(B) yields the index offset of the array of coefficients embedded in kernel B.   That is, B[k] ≡ coefs(B)[k + offset(B)].\n\nSee also: LocalFilters.coefs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.opening",
    "page": "Docstrings",
    "title": "LocalFilters.opening",
    "category": "function",
    "text": "closing(A, R)\nopening(A, R)\n\nrespectively perform a closing or an opening of array A by the structuring element R.  If not specified, R is a box of size 3 along all the dimensions of A.  A closing is a dilation followed by an erosion, whereas an opening is an erosion followed by a dilation.\n\nThe in-place versions are:\n\nclosing!(dst, wrk, src, R)\nopening!(dst, wrk, src, R)\n\nwhich perform the operation on the source src and store the result in destination dst using wrk as a workspace array.  These 3 arguments must be similar arrays, dst and src may be identical, but wrk must not be the same array as src or dst.  The destination dst is returned.\n\nSee erode or dilate for the meaning of the arguments.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.opening!",
    "page": "Docstrings",
    "title": "LocalFilters.opening!",
    "category": "function",
    "text": "closing(A, R)\nopening(A, R)\n\nrespectively perform a closing or an opening of array A by the structuring element R.  If not specified, R is a box of size 3 along all the dimensions of A.  A closing is a dilation followed by an erosion, whereas an opening is an erosion followed by a dilation.\n\nThe in-place versions are:\n\nclosing!(dst, wrk, src, R)\nopening!(dst, wrk, src, R)\n\nwhich perform the operation on the source src and store the result in destination dst using wrk as a workspace array.  These 3 arguments must be similar arrays, dst and src may be identical, but wrk must not be the same array as src or dst.  The destination dst is returned.\n\nSee erode or dilate for the meaning of the arguments.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.strel",
    "page": "Docstrings",
    "title": "LocalFilters.strel",
    "category": "function",
    "text": "strel(T, A)\n\nyields a structuring element suitable for mathematical morphology operations. The result is a Kernel whose elements have type T (which can be Bool or a floating-point type).  Argument A can be a rectangular box or a Kernel with boolean elements.\n\nIf T is a floating-point type, then the result is a so-called flat structuring element whose coefficients are zero(T) inside the shape defined by A and -T(Inf) elsewhere.\n\nSee also: convertcoefs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.top_hat",
    "page": "Docstrings",
    "title": "LocalFilters.top_hat",
    "category": "function",
    "text": "top_hat(A, R)\ntop_hat(A, R, S)\nbottom_hat(A, R)\nbottom_hat(A, R, S)\n\nPerform A summit/valley detection by applying a top-hat filter to array A.  Argument R defines the structuring element for the feature detection.  Optional argument S specifies the structuring element used to apply a smoothing to A prior to the top-hat filter.  If R and S are specified as the radii of the structuring elements, then S should be smaller than R.  For instance:\n\ntop_hat(bitmap, 3, 1)\n\nmay be used to detect text or lines in a bimap image.\n\nThe in-place versions:\n\ntop_hat!(dst, wrk, src, R)\nbottom_hat!(dst, wrk, src, R)\n\napply the top-hat filter on the source src and store the result in the destination dst using wrk as a workspace array.  These 3 arguments must be similar but different arrays.  The destination dst is returned.\n\nSee also dilate, closing and morph_enhance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFilters.top_hat!",
    "page": "Docstrings",
    "title": "LocalFilters.top_hat!",
    "category": "function",
    "text": "top_hat(A, R)\ntop_hat(A, R, S)\nbottom_hat(A, R)\nbottom_hat(A, R, S)\n\nPerform A summit/valley detection by applying a top-hat filter to array A.  Argument R defines the structuring element for the feature detection.  Optional argument S specifies the structuring element used to apply a smoothing to A prior to the top-hat filter.  If R and S are specified as the radii of the structuring elements, then S should be smaller than R.  For instance:\n\ntop_hat(bitmap, 3, 1)\n\nmay be used to detect text or lines in a bimap image.\n\nThe in-place versions:\n\ntop_hat!(dst, wrk, src, R)\nbottom_hat!(dst, wrk, src, R)\n\napply the top-hat filter on the source src and store the result in the destination dst using wrk as a workspace array.  These 3 arguments must be similar but different arrays.  The destination dst is returned.\n\nSee also dilate, closing and morph_enhance.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LocalFilters.BilateralFilterLocalFilters.CartesianRegionLocalFilters.DimensionsLocalFilters.IndexIntervalLocalFilters.KernelLocalFilters.LocalFiltersLocalFilters.NeighborhoodLocalFilters.RectangularBoxLocalFilters.SeparableLocalFilters.USE_CARTESIAN_RANGELocalFilters.UnitIndexRangeLocalFilters.UnitIndexRangesLocalFilters._ball!LocalFilters._lengthLocalFilters._rangeLocalFilters._store!LocalFilters._typeofsumLocalFilters.ballLocalFilters.bilateralfilterLocalFilters.bilateralfilter!LocalFilters.bottom_hatLocalFilters.bottom_hat!LocalFilters.cartesianregionLocalFilters.closingLocalFilters.closing!LocalFilters.coefsLocalFilters.convertcoefsLocalFilters.convolveLocalFilters.convolve!LocalFilters.defaultstartLocalFilters.dilateLocalFilters.dilate!LocalFilters.erodeLocalFilters.erode!LocalFilters.evalLocalFilters.finalindexLocalFilters.includeLocalFilters.initialindexLocalFilters.ismmboxLocalFilters.limitsLocalFilters.localextremaLocalFilters.localextrema!LocalFilters.localfilterLocalFilters.localfilter!LocalFilters.localmeanLocalFilters.localmean!LocalFilters.offsetLocalFilters.openingLocalFilters.opening!LocalFilters.strelLocalFilters.strictfloorLocalFilters.top_hatLocalFilters.top_hat!"
},

]}
