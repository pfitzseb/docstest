var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RecurrenceAnalysis.jl-1",
    "page": "Readme",
    "title": "RecurrenceAnalysis.jl",
    "category": "section",
    "text": "(Image: DynamicalSystems.jl logo: The Double Pendulum)Documentation Travis AppVeyor Gitter\n(Image: ) (Image: Build Status) (Image: Build status) (Image: Gitter)RecurrenceAnalysis, which is one of the packages composing DynamicalSystems.jl (but can well be used as a stand-alone), offers tools for computing Recurrence Plots and exploring them within the framework of Recurrence Quantification Analysis.For more details please see our detailed documentation pages."
},

{
    "location": "autodocs/#RecurrenceAnalysis.@windowed",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.@windowed",
    "category": "macro",
    "text": "@windowed(f(x,...), width)\n@windowed(f(x,...); width, step=1)\n\nCalculate windowed RQA parameters with a given window width.\n\nf(x,...) may be any call to RQA functions (e.g. recurrencerate, determinism, etc.), with x being a named variable that designates the recurrence matrix (do not use in-place calculations of the recurrence matrix). The results are returned in a vector with one value for each position of the window. By default the window moves at one-point intervals, but a longer step length may be specified, together with the window width, by declaring those options as keyword arguments.\n\nThis macro may be also used with recurrence matrix constructors (RecurrenceMatrix, CrossRecurrenceMatrix, JointRecurrenceMatrix), to create \'incomplete\' matrices that are suitable for such windowed RQA. The values of the resulting matrix in the diagonals within the window width will be equal to those obtained without the @windowed macro, if the distances are not scaled (using the option scale=1, see RecurrenceMatrix). Outside the window width, the values of the recurrence matrix will be undefined (mostly zero).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.CrossRecurrenceMatrix",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.CrossRecurrenceMatrix",
    "category": "type",
    "text": "CrossRecurrenceMatrix(x, y, ε; kwargs...)\n\nCreate a cross recurrence matrix from trajectories x and y.\n\nThe cross recurrence matrix is a bivariate extension of the recurrence matrix. For the time series x, y, of length n and m, respectively, it is a sparse n×m matrix of Boolean values, such that if d(x[i], y[j]) ≤ ε, then the cell (i, j) of the matrix will have a true value.\n\nSee RecurrenceMatrix for details, references and keywords. See also: JointRecurrenceMatrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.JointRecurrenceMatrix",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.JointRecurrenceMatrix",
    "category": "type",
    "text": "JointRecurrenceMatrix(x, y, ε; kwargs...)\n\nCreate a joint recurrence matrix from x and y.\n\nThe joint recurrence matrix considers the recurrences of the trajectories of x and y separately, and looks for points where both recur simultaneously. It is calculated by the element-wise multiplication of the recurrence matrices of x and y. If x and y are of different length, the recurrences are only calculated until the length of the shortest one.\n\nSee RecurrenceMatrix for details, references and keywords. See also: CrossRecurrenceMatrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.RecurrenceMatrix",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.RecurrenceMatrix",
    "category": "type",
    "text": "RecurrenceMatrix(x, ε; kwargs...)\n\nCreate a recurrence matrix from trajectory x. Objects of type <:AbstractRecurrenceMatrix are displayed as a recurrenceplot.\n\nDescription\n\nThe recurrence matrix is a numeric representation of a \"recurrence plot\" [1, 2], in the form of a sparse square matrix of Boolean values.\n\nx must be a Vector or a Dataset or a Matrix with data points in rows (possibly representing and embedded phase space; see embed). If d(x[i], x[j]) ≤ ε (with d the distance function), then the cell (i, j) of the matrix will have a true value. The criteria to evaluate distances between data points are defined by the following keyword arguments:\n\nscale=1 : a function of the distance matrix (see distancematrix), or a fixed number, used to scale the value of ε. Typical choices are maximum or mean, such that the threshold ε is defined as a ratio of the maximum or the mean distance between data points, respectively (using mean or maximum calls specialized versions that are faster than the naive approach).  Use 1 to keep the distances unscaled (default).\nfixedrate::Bool=false : a flag that indicates if ε should be taken as a target fixed recurrence rate (see recurrencerate). If fixedrate is set to true, ε must be a value between 0 and 1, and scale is ignored.\nmetric=\"euclidean\" : metric of the distances, either Metric or a string,  as in distancematrix.\n\nSee also: CrossRecurrenceMatrix, JointRecurrenceMatrix and use recurrenceplot to turn the result of these functions into a plottable format.\n\nReferences\n\n[1] : N. Marwan et al., \"Recurrence plots for the analysis of complex systems\", Phys. Reports 438(5-6), 237-329 (2007).\n\n[2] : N. Marwan & C.L. Webber, \"Mathematical and computational foundations of recurrence quantifications\", in: Webber, C.L. & N. Marwan (eds.), Recurrence Quantification Analysis. Theory and Best Practices, Springer, pp. 3-43 (2015).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.coordinates",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.coordinates",
    "category": "function",
    "text": "coordinates(R) -> xs, ys\n\nReturn the coordinates of the recurrence points of R (in indices).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.determinism",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.determinism",
    "category": "function",
    "text": "determinism(R[; lmin=2, theiler])\n\nCalculate the determinism of the recurrence matrix R:\n\nDescription\n\nThe determinism is calculated as:\n\nDET = fracsum_l=lminl P(l)sum_l=1l P(l) =\nfracsum_l=lminl P(l)sum R\n\nwhere l stands for the lengths of diagonal lines in the matrix, and P(l) is the number of lines of length equal to l.\n\nlmin is set to 2 by default, and this calculation rules out all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.distancematrix",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.distancematrix",
    "category": "function",
    "text": "distancematrix(x [, y = x], metric = \"euclidean\")\n\nCreate a matrix with the distances between each pair of points of the time series x and y using metric.\n\nThe time series x and y can be Datasets or vectors or matrices with data points in rows. The data point dimensions (or number of columns) must be the same for x and y. The returned value is a n×m matrix, with n being the length (or number of rows) of x, and m the length of y.\n\nThe metric can be identified by a string, or any of the Metrics defined in the Distances package. The list of strings available to define the metric are:\n\n\"max\" or \"inf\" for the maximum or L∞ norm (Chebyshev() in the Distances package).\n\"euclidean\" for the L2 or Euclidean norm, used by default (Euclidean() in Distances).\n\"manhattan\", \"cityblock\", \"taxicab\" or \"min\" for the Manhattan or L1 norm (Cityblock() in Distances).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.divergence",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.divergence",
    "category": "function",
    "text": "divergence(R[; theiler])\n\nCalculate the divergence of the recurrence matrix R (actually the inverse of dl_max).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.dl_average",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.dl_average",
    "category": "function",
    "text": "dl_average(R[; lmin=2, theiler])\n\nCalculate the average of the diagonal lines contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.dl_entropy",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.dl_entropy",
    "category": "function",
    "text": "dl_entropy(R[; lmin=2, theiler])\n\nCalculate the Shannon entropy of the diagonal lines contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.dl_max",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.dl_max",
    "category": "function",
    "text": "dl_max(R[; lmin=2, theiler])\n\nCalculate the longest diagonal line contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.grayscale",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.grayscale",
    "category": "function",
    "text": "grayscale(R [, bwcode]; width::Int, height::Int, exactsize=false)\n\nTransform the recurrence matrix R into a full matrix suitable for plotting as a grayscale image. By default it returns a matrix with the same size as R, but switched axes, containing \"black\" values in the cells that represent recurrent points, and \"white\" values in the empty cells and interpolating in-between for cases with both recurrent and empty cells, see below.\n\nThe numeric codes for black and white are given in a 2-element tuple as a second optional argument. Its default value is (0.0, 1.0), i.e. black is coded as 0.0 (no brightness) and white as 1.0 (full brightness). The type of the elements in the tuple defines the type of the returned matrix. This must be taken into account if, for instance, the image is coded as a matrix of integers corresponding to a grayscale; in such case the black and white codes must be given as numbers of the required integer type.\n\nThe keyword arguments width and height can be given to define a custom size of the image. If only one dimension is given, the other is automatically calculated. If both dimensions are given, by default they are adjusted to keep an aspect proportional to the original matrix, such that the returned matrix fits into a matrix of the given dimensions. This automatic adjustment can be disabled by passing the keyword argument exactsize=true.\n\nIf the image has different dimensions than R, the cells of R are distributed in a grid with the size of the image, and a gray level between white and black is calculated for each element of the grid, proportional to the number of recurrent points contained in it. The levels of gray are coded as numbers of the same type as the black and white codes.\n\nIt is advised to use width, height arguments for large matrices otherwise plots using functions like e.g. imshow could be misleading.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.ij_block_rmat",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.ij_block_rmat",
    "category": "function",
    "text": "ij_block_rmat(x, y, bsize, dindex, vargs...; kwargs...)\n\nReturn the indices of the rows and columns of the nonzero values of a block-diagonal cross-recurrence matrix.\n\nIf m is the cross-recurrence matrix of x and y (created with the positional and keyword arguments vargs and kwargs), the indices returned by this function are limited to the \"block-diagonal\" indicated by dindex ∈ {-1,0,1}, as in the following graphical representation (# represents the regions that are included, and O the excluded regions):\n\ndindex==-1    dindex==0    dindex==1  OOOOOO          ##OOOO         OO##OO  OOOOOO          ##OOOO         OO##OO  ##OOOO          OO##OO         OOOO##  ##OOOO          OO##OO         OOOO##  OO##OO          OOOO##         OOOOOO  OO##OO          OOOO##         OOOOOO\n\nThe size of the blocks is bsize × bsize. The last block may be smaller if bsize is not a divisor of the size of the whole cross-recurrence matrix.\n\nThe returned value is a tuple of two arrays, the first containing the indices of the rows and columns of the nonzero values within the included regions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.laminarity",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.laminarity",
    "category": "function",
    "text": "laminarity(R[; lmin=2, theiler])\n\nCalculate the laminarity of the recurrence matrix R.\n\nDescription\n\nThe laminarity is calculated as:\n\nLAM = fracsum_v=lminv P(l)sum_v=1v P(v) =\nfracsum_v=lminv P(l)sum R\n\nwhere v stands for the lengths of vertical lines in the matrix, and P(v) is the number of lines of length equal to v.\n\nlmin is set to 2 by default, and this calculation rules out all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.meanrecurrencetime",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.meanrecurrencetime",
    "category": "function",
    "text": "meanrecurrencetime(R[; lmin=2, theiler])\n\nCalculate the mean recurrence time of the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\nEquivalent to rt_average.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.nmprt",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.nmprt",
    "category": "function",
    "text": "nmprt(R[; lmin=2, theiler])\n\nCalculate the number of the most probable recurrence time (NMPRT), ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\nThis number indicates how many times the system has recurred using the recurrence time that appears most frequently, i.e it is the maximum value of the histogram of recurrence times [1].\n\nReferences\n\n[1] : E.J. Ngamga et al. \"Recurrence analysis of strange nonchaotic dynamics\", Physical Review E, 75(3), 036222(1-8), 2007, DOI:10.1103/physreve.75.036222\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.recurrenceplot",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.recurrenceplot",
    "category": "function",
    "text": "recurrenceplot([io,] R; minh = 25, maxh = 0.5, ascii, kwargs...) -> u\n\nCreate a text-based scatterplot representation of a recurrence matrix R to be displayed in io (by default stdout) using UnicodePlots. The matrix spans at minimum minh rows and at maximum maxh*displaysize(io)[1] (i.e. by default half the display). As we always try to plot in equal aspect ratio, if the width of the plot is even less, the minimum height is dictated by the width.\n\nThe keyword ascii::Bool can ensure that all elements of the plot are ASCII characters (true) or Unicode (false).\n\nThe rest of the kwargs are propagated into UnicodePlots.scatterplot.\n\nNotice that the accuracy of this function drops drastically for matrices whose size is significantly bigger than the width and height of the display (assuming each index of the matrix is one character).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.recurrencerate",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.recurrencerate",
    "category": "function",
    "text": "recurrencerate(R[; theiler])\n\nCalculate the recurrence rate of the recurrence matrix R.\n\nDescription\n\nThe recurrence rate is calculated as:\n\nRR = frac1S sum R\n\nwhere S is the size of R or the region of R with potential recurrent points. There is not a unique definition of that denominator, which is defined as the full size of the matrix in many sources (e.g. [1]), whereas in others it is adjusted to remove the points of the LOI when they are excluded from the count [2,3].\n\nFor matrices of type RecurrenceMatrix or JointRecurrenceMatrix, where the points around the central diagonal are usually excluded, the denominator is adjusted to the size of the matrix outside the Theiler window (by default equal to the LOI, and adjustable with the keyword argument theiler; see rqa for details). For matrices of type CrossRecurrenceMatrix, where normally all points are analyzed, the denominator is always the full size of the matrix, regardless of the Theiler window that might be defined (none by default).\n\nHint: to reproduce the calculations done following the formulas that use the full size of the matrix in the denominator, use CrossRecurrenceMatrix(s,s,ε) to define the recurrence matrix, instead of RecurrenceMatrix(s,ε), setting theiler=1 (or theiler=n in general) to explicitly exclude the LOI or other diagonals around it.\n\nReferences\n\n[1] : N. Marwan et al., \"Recurrence plots for the analysis of complex systems\", Phys. Reports 438(5-6), 237-329 (2007).\n\n[2] : C.L. Webber & J.P. Zbilut, \"Recurrence Quantification Analysis of Nonlinear Dynamical Systems\", in: Riley MA & Van Orden GC, Tutorials in Contemporary Nonlinear Methods for the Behavioral Sciences, 26-94 (2005). URL: https://www.nsf.gov/pubs/2005/nsf05057/nmbs/nmbs.pdf\n\n[3] : N. Marwan & C.L. Webber, \"Mathematical and computational foundations of recurrence quantifications\", in: Webber, C.L. & N. Marwan (eds.), Recurrence Quantification Analysis. Theory and Best Practices, Springer, pp. 3-43 (2015).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.recurrencestructures",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.recurrencestructures",
    "category": "function",
    "text": "recurrencestructures(x::AbstractRecurrenceMatrix;\n                         diagonal=true,\n                         vertical=true,\n                         recurrencetimes=true,\n                         kwargs...)\n\nReturn a dictionary with the histograms of the recurrence structures contained in the recurrence matrix x, with the keys \"diagonal\", \"vertical\" or \"recurrencetimes\", depending on what keyword arguments are given as true.\n\nDescription\n\nEach item of the dictionary is a vector of integers, such that the i-th element of the vector is the number of lines of length i contained in x.\n\n\"diagonal\" counts the diagonal lines, i.e. the recurrent trajectories.\n\"vertical\" counts the vertical lines, i.e. the laminar states.\n\"recurrencetimes\" counts the vertical distances between recurrent states,   i.e. the recurrence times.\n\nAll the points of the matrix are counted by default. The keyword argument theiler can be passed to rule out the lines around the main diagonal. See the arguments of the function rqa for further details.\n\n\"Empty\" histograms are represented always as [0].\n\nNotice: There is not a unique operational definition of \"recurrence times\". In the analysis of recurrence plots, usually the  \"second type\" of recurrence times as defined by Gao and Cai [1] are considered, i.e. the distance between consecutive (but separated) recurrent structures in the vertical direction of the matrix. But that distance is not uniquely defined when the vertical recurrent structures are longer than one point. The recurrence times calculated here are the distance between the midpoints of consecutive lines, which is a balanced estimator of the Poincaré recurrence times [2].\n\nReferences\n\n[1] J. Gao & H. Cai. \"On the structures and quantification of recurrence plots\". Physics Letters A, 270(1-2), 75–87 (2000).\n\n[2] N. Marwan & C.L. Webber, \"Mathematical and computational foundations of recurrence quantifications\", in: Webber, C.L. & N. Marwan (eds.), Recurrence Quantification Analysis. Theory and Best Practices, Springer, pp. 3-43 (2015).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.rqa",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.rqa",
    "category": "function",
    "text": "rqa(R; kwargs...)\n\nCalculate all RQA parameters of a recurrence matrix R. See the functions referred to below for the definition of the different parameters and the default values of the arguments. Using this function is much more efficient than calling all individual functions one by one.\n\nReturn\n\nThe returned value is a NamedTuple with the following entries:\n\nRR: recurrence rate (see recurrencerate)\nDET: determinsm (see determinism)\nL: average length of diagonal structures (see dl_average)\nLmax: maximum length of diagonal structures (see dl_max)\nDIV: divergence (see divergence)\nENTR: entropy of diagonal structures (see dl_entropy)\nTREND: trend of recurrences (see trend)\nLAM: laminarity (see laminarity)\nTT: trapping time (see trappingtime)\nVmax: maximum length of vertical structures (see vl_max)\nVENTR: entropy of vertical structures (see vl_entropy)\nMRT: mean recurrence time (see meanrecurrencetime)\nRTE recurrence time entropy (see rt_entropy)\nNMPRT: number of the most probable recurrence time (see nmprt)\n\nIn the case of empty histograms (e.g. no existing vertical lines less than the keyword lminvert) the average and maximum values (L, Lmax, TT, Vmax, MRT) are returned as 0.0 but their respective entropies (ENTR, VENTR, RTE) are returned as NaN.\n\nKeyword Arguments\n\nStandard keyword arguments are the ones accepted by the functions listed below, i.e. theiler, lmin, and border:\n\ntheiler is used to define a \"Theiler window\" around the central diagonal or \"line of identity\" (LOI): a region of points that are excluded in the calculation of RQA parameters, in order to rule out self-recurrences and apparent recurrences for smooth or high resolution data. The LOI is excluded by default for matrices of the types RecurrenceMatrix or JointRecurrenceMatrix, but it is included for matrices of the type CrossRecurrenceMatrix. theiler=0 means that the whole matrix is scanned for lines. theiler=1 means that the LOI is excluded. In general, theiler=n means that the n central diagonals are excluded (at both sides of the LOI, i.e. actually 2n-1 diagonals are excluded).\nlmin is used to define the minimum line length in the parameters that describe the distributions of diagonal or vertical lines (it is set as 2 by default).\nborder is used to avoid border effects in the calculation of TREND (cf. trend).\n\nIn addition theilerdiag, lmindiag may be used to declare specific values that override the values of theiler and lmin in the calculation of parameters related to diagonal structures. Likewise, theilervert and lminvert can be used for the calculation of parameters related to vertical structures.\n\nThe keyword argument onlydiagonal (false by default) can be set to true in order to restrict the analysis to the recurrence rate and the parameters related to diagonal structures (RR, DET, L, Lmax, DIV and ENTR), which makes this function slightly faster.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.rt_average",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.rt_average",
    "category": "function",
    "text": "rt_average(R[; lmin=2, theiler])\n\nCalculate the average of the recurrence times contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.rt_entropy",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.rt_entropy",
    "category": "function",
    "text": "rt_entropy(R[; lmin=2, theiler])\n\nCalculate the Shannon entropy of the recurrence times contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.rt_max",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.rt_max",
    "category": "function",
    "text": "rt_max(R[; lmin=2, theiler])\n\nCalculate the longest recurrence time contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.sorteddistances",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.sorteddistances",
    "category": "function",
    "text": "sorteddistances(x; kwargs...)\n\nReturn a tuple with the sorted distances between points of the embedded time series x, and the recurrence rates under those values.\n\nThe keyword arguments are the same that should be passed to the functions recurrencematrix and recurrencerate to obtain those results. I.e., if d,r = sorteddistances(x; kwargs...), and rmat = recurrencematrix(x, d[i]; kwargs...), then recurrencerate(rmat; kwargs...) == r[i].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.trappingtime",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.trappingtime",
    "category": "function",
    "text": "trappingtime(R[; lmin=2, theiler])\n\nCalculate the trapping time of the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\nThe trapping time is the average of the vertical line structures and thus equal to vl_average.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.trend",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.trend",
    "category": "function",
    "text": "trend(R[; border=10, theiler])\n\nCalculate the trend of recurrences in the recurrence matrix R.\n\nDescription\n\nThe trend is the slope of the linear regression that relates the density of recurrent points in the diagonals parallel to the LOI and the distance between those diagonals and the LOI. It quantifies the degree of system stationarity, such that in recurrence plots where points \"fade away\" from the central diagonal, the trend will have a negative value.\n\nIt is calculated as:\n\nTREND = 10^3fracsum_d=tau^tildeNdeltadleft(RRd-langle RRdrangleright)sum_d=tau^tildeNdeltad^2\n\nwhere RRd is the local recurrence rate of the diagonal d, deltad is a balanced measure of the distance between that diagonal and the LOI, tau is the Theiler window (number of central diagonals that are excluded), and tildeN is the number of the outmost diagonal that is included.\n\nThis parameter is expressed in units of variation recurrence rate every 1000 data points, hence the factor 10^3 in the formula [1]. \n\nThe 10 outermost diagonals (counting from the corners of the matrix) are excluded by default to avoid \"border effects\". Use the keyword argument border to define a different number of excluded lines, and theiler to define the size of the Theiler window (see rqa for details).\n\nNote: In rectangular cross-recurrence plots (i.e. when the time series that originate them are not of the same length), the limits of the formula for TREND are not clearly defined. For the sake of consistency, this function limits the calculations to the biggest square matrix that contains the LOI.\n\nReferences\n\n[1] C.L. Webber & J.P. Zbilut, \"Recurrence Quantification Analysis of Nonlinear Dynamical Systems\", in: Riley MA & Van Orden GC, Tutorials in Contemporary Nonlinear Methods for the Behavioral Sciences, 2005, 26-94. https://www.nsf.gov/pubs/2005/nsf05057/nmbs/nmbs.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.vl_average",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.vl_average",
    "category": "function",
    "text": "vl_average(R[; lmin=2, theiler])\n\nCalculate the average of the vertical lines contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.vl_entropy",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.vl_entropy",
    "category": "function",
    "text": "vl_entropy(R[; lmin=2, theiler])\n\nCalculate the Shannon entropy of the vertical lines contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecurrenceAnalysis.vl_max",
    "page": "Docstrings",
    "title": "RecurrenceAnalysis.vl_max",
    "category": "function",
    "text": "vl_max(R[; lmin=2, theiler])\n\nCalculate the longest vertical line contained in the recurrence matrix R, ruling out the lines shorter than lmin (2 by default) and all the points inside the Theiler window (see rqa for the default values and usage of the keyword argument theiler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RecurrenceAnalysis.@histogram_paramsRecurrenceAnalysis.@windowedRecurrenceAnalysis.ARMRecurrenceAnalysis.AbstractRecurrenceMatrixRecurrenceAnalysis.CrossRecurrenceMatrixRecurrenceAnalysis.DEFAULT_METRICRecurrenceAnalysis.DatasetRecurrenceAnalysis.JointRecurrenceMatrixRecurrenceAnalysis.MAXDIMRecurrenceAnalysis.METRICSRecurrenceAnalysis.RecurrenceAnalysisRecurrenceAnalysis.RecurrenceMatrixRecurrenceAnalysis._computescaleRecurrenceAnalysis._determinismRecurrenceAnalysis._distancematrixRecurrenceAnalysis._dl_averageRecurrenceAnalysis._dl_entropyRecurrenceAnalysis._dl_maxRecurrenceAnalysis._laminarityRecurrenceAnalysis._linehistogramsRecurrenceAnalysis._recurrence_matrixRecurrenceAnalysis._rrdenominatorRecurrenceAnalysis._rt_averageRecurrenceAnalysis._rt_entropyRecurrenceAnalysis._rt_maxRecurrenceAnalysis._trendRecurrenceAnalysis._vl_averageRecurrenceAnalysis._vl_entropyRecurrenceAnalysis._vl_maxRecurrenceAnalysis.block2grayscaleRecurrenceAnalysis.checkgridsizeRecurrenceAnalysis.colvalsRecurrenceAnalysis.coordinatesRecurrenceAnalysis.deftheilerRecurrenceAnalysis.determinismRecurrenceAnalysis.diagonalhistogramRecurrenceAnalysis.distancematrixRecurrenceAnalysis.divergenceRecurrenceAnalysis.dl_averageRecurrenceAnalysis.dl_entropyRecurrenceAnalysis.dl_maxRecurrenceAnalysis.embedRecurrenceAnalysis.evalRecurrenceAnalysis.extendhistogram!RecurrenceAnalysis.extentionsRecurrenceAnalysis.getmetricRecurrenceAnalysis.grayscaleRecurrenceAnalysis.ij_block_rmatRecurrenceAnalysis.includeRecurrenceAnalysis.laminarityRecurrenceAnalysis.meanrecurrencetimeRecurrenceAnalysis.nmprtRecurrenceAnalysis.oldshowRecurrenceAnalysis.overlapgridRecurrenceAnalysis.radius_mrrRecurrenceAnalysis.reconstructRecurrenceAnalysis.recurrence_matrixRecurrenceAnalysis.recurrenceplotRecurrenceAnalysis.recurrencerateRecurrenceAnalysis.recurrencestructuresRecurrenceAnalysis.rqaRecurrenceAnalysis.rqa_funsRecurrenceAnalysis.rqa_typesRecurrenceAnalysis.rt_averageRecurrenceAnalysis.rt_entropyRecurrenceAnalysis.rt_histogramRecurrenceAnalysis.rt_maxRecurrenceAnalysis.sorteddistancesRecurrenceAnalysis.tau_recurrenceRecurrenceAnalysis.textrecurrenceplotRecurrenceAnalysis.trappingtimeRecurrenceAnalysis.trendRecurrenceAnalysis.verticalhistogramsRecurrenceAnalysis.vl_averageRecurrenceAnalysis.vl_entropyRecurrenceAnalysis.vl_histogramRecurrenceAnalysis.vl_max"
},

]}
