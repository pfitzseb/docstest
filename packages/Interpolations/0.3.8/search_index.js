var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Interpolations-1",
    "page": "Readme",
    "title": "Interpolations",
    "category": "section",
    "text": "(Image: Build Status) (Image: PkgEval Status) (Image: Interpolations)This package implements a variety of interpolation schemes for the Julia langauge.  It has the goals of ease-of-use, broad algorithmic support, and exceptional performance.This package is still relatively new. Currently its support is best for B-splines and also supports irregular grids.  However, the API has been designed with intent to support more options. Pull-requests are more than welcome! It should be noted that the API may continue to evolve over time.Other interpolation packages for Julia include:Grid.jl (the predecessor of this package)\nDierckx.jl\nGridInterpolations.jl\nApproXD.jlSome of these packages support methods that Interpolations does not, so if you can\'t find what you need here, check one of them or submit a pull request here.At the bottom of this page, you can find a \"performance shootout\" among these methods (as well as SciPy\'s RegularGridInterpolator)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "JustPkg.add(\"Interpolations\")from the Julia REPL."
},

{
    "location": "#General-usage-1",
    "page": "Readme",
    "title": "General usage",
    "category": "section",
    "text": "Given an AbstractArray A, construct an \"interpolation object\" itp asitp = interpolate(A, options...)where options... (discussed below) controls the type of interpolation you want to perform.  This syntax assumes that the samples in A are equally-spaced. To evaluate the interpolation at position (x, y, ...), simply dov = itp[x, y, ...]Some interpolation objects support computation of the gradient, which can be obtained asg = gradient(itp, x, y, ...)or, if you\'re evaluating the gradient repeatedly, a somewhat more efficient option isgradient!(g, itp, x, y, ...)where g is a pre-allocated vector.Some interpolation objects support computation of the hessian, which can be obtained ash = hessian(itp, x, y, ...)or, if you\'re evaluating the hessian repeatedly, a somewhat more efficient option ishessian!(h, itp, x, y, ...)where h is a pre-allocated matrix.A may have any element type that supports the operations of addition and multiplication.  Examples include scalars like Float64, Int, and Rational, but also multi-valued types like RGB color vectors.Positions (x, y, ...) are n-tuples of numbers. Typically these will be real-valued (not necessarily integer-valued), but can also be of types such as DualNumbers if you want to verify the computed value of gradients. You can also use Julia\'s iterator objects, e.g.,function ongrid!(dest, itp)\n    for I in CartesianRange(size(itp))\n        dest[I] = itp[I]\n    end\nendwould store the on-grid value at each grid point of itp in the output dest. Finally, courtesy of Julia\'s indexing rules, you can also usefine = itp[linspace(1,10,1001), linspace(1,15,201)]"
},

{
    "location": "#Control-of-interpolation-algorithm-1",
    "page": "Readme",
    "title": "Control of interpolation algorithm",
    "category": "section",
    "text": ""
},

{
    "location": "#BSplines-1",
    "page": "Readme",
    "title": "BSplines",
    "category": "section",
    "text": "The interpolation type is described in terms of degree, grid behavior and, if necessary, boundary conditions. There are currently three degrees available: Constant, Linear, Quadratic,  and Cubic corresponding to B-splines of degree 0, 1, 2, and 3 respectively.You also have to specify what grid representation you want. There are currently two choices: OnGrid, in which the supplied data points are assumed to lie on the boundaries of the interpolation interval, and OnCell in which the data points are assumed to lie on half-intervals between cell boundaries.B-splines of quadratic or higher degree require solving an equation system to obtain the interpolation coefficients, and for that you must specify a boundary condition that is applied to close the system. The following boundary conditions are implemented: Flat, Line (alternatively, Natural), Free, Periodic and Reflect; their mathematical implications are described in detail in the pdf document under /doc/latex.Some examples:# Nearest-neighbor interpolation\nitp = interpolate(a, BSpline(Constant()), OnCell())\nv = itp[5.4]   # returns a[5]\n\n# (Multi)linear interpolation\nitp = interpolate(A, BSpline(Linear()), OnGrid())\nv = itp[3.2, 4.1]  # returns 0.9*(0.8*A[3,4]+0.2*A[4,4]) + 0.1*(0.8*A[3,5]+0.2*A[4,5])\n\n# Quadratic interpolation with reflecting boundary conditions\n# Quadratic is the lowest order that has continuous gradient\nitp = interpolate(A, BSpline(Quadratic(Reflect())), OnCell())\n\n# Linear interpolation in the first dimension, and no interpolation (just lookup) in the second\nitp = interpolate(A, (BSpline(Linear()), NoInterp()), OnGrid())\nv = itp[3.65, 5]  # returns  0.35*A[3,5] + 0.65*A[4,5]There are more options available, for example:# In-place interpolation\nitp = interpolate!(A, BSpline(Quadratic(InPlace())), OnCell())which destroys the input A but also does not need to allocate as much memory."
},

{
    "location": "#Gridded-interpolation-1",
    "page": "Readme",
    "title": "Gridded interpolation",
    "category": "section",
    "text": "These use a very similar syntax to BSplines, with the major exception being that one does not get to choose the grid representation (they are all OnGrid). As such one must specify a set of coordinate arrays defining the knots of the array.In 1DA = rand(20)\nA_x = collect(1.0:2.0:40.0)\nknots = (A_x,)\nitp = interpolate(knots, A, Gridded(Linear()))\nitp[2.0] The spacing between adjacent samples need not be constant, you can use the syntaxitp = interpolate(knots, A, options...)where knots = (xknots, yknots, ...) to specify the positions along each axis at which the array A is sampled for arbitrary (\"rectangular\") samplings.For example:A = rand(8,20)\nknots = ([x^2 for x = 1:8], [0.2y for y = 1:20])\nitp = interpolate(knots, A, Gridded(Linear()))\nitp[4,1.2]  # approximately A[2,6]One may also mix modes, by specifying a mode vector in the form of an explicit tuple:itp = interpolate(knots, A, (Gridded(Linear()),Gridded(Constant())))Presently there are only three modes for gridded:Gridded(Linear())whereby a linear interpolation is applied between knots,Gridded(Constant())whereby nearest neighbor interpolation is used on the applied axis,NoInterpwhereby the coordinate of the selected input vector MUST be located on a grid point. Requests for off grid coordinates results in the throwing of an error."
},

{
    "location": "#Extrapolation-1",
    "page": "Readme",
    "title": "Extrapolation",
    "category": "section",
    "text": "The call to extrapolate defines what happens if you try to index into the interpolation object with coordinates outside of [1, size(data,d)] in any dimension d. The implemented boundary conditions are Throw, Flat, Linear, Periodic and Reflect, with more options planned. Periodic and Reflect require that there is a method of Base.mod that can handle the indices used."
},

{
    "location": "#Performance-shootout-1",
    "page": "Readme",
    "title": "Performance shootout",
    "category": "section",
    "text": "In the perf directory, you can find a script that tests interpolation with several different packages.  We consider interpolation in 1, 2, 3, and 4 dimensions, with orders 0 (Constant), 1 (Linear), and 2 (Quadratic).  Methods include Interpolations BSpline (IBSpline) and Gridded (IGridded), methods from the Grid.jl package, methods from the Dierckx.jl package, methods from the GridInterpolations.jl package (GI), methods from the ApproXD.jl package, and methods from SciPy\'s RegularGridInterpolator accessed via PyCall (Py).  All methods are tested using an Array with approximately 10^6 elements, and the interpolation task is simply to visit each grid point.First, let\'s look at the two B-spline algorithms, IBspline and Grid.  Here\'s a plot of the \"construction time,\" the amount of time it takes to initialize an interpolation object (smaller is better):(Image: construction)The construction time is negligible until you get to second order (quadratic); that\'s because quadratic is the lowest order requiring the solution of tridiagonal systems upon construction.  The solvers used by Interpolations are much faster than the approach taken in Grid.Now let\'s examine the interpolation performance.  Here we\'ll measure \"throughput\", the number of interpolations performed per second (larger is better):(Image: throughput)Once again, Interpolations wins on every test, by a factor that ranges from 7 to 13.Now let\'s look at the \"gridded\" methods that allow irregular spacing along each axis.  For some of these, we compare interpolation performance in both \"vectorized\" form itp[xvector, yvector] and in \"scalar\" form for y in yvector, x in xvector; val = itp[x,y]; end.First, construction time (smaller is better):(Image: construction)Missing dots indicate cases that were not tested, or not supported by the package.  (For construction, differences between \"vec\" and \"scalar\" are just noise, since no interpolation is performed during construction.)  The only package that takes appreciable construction time is Dierckx.And here\'s \"throughput\" (larger is better). To ensure we can see the wide range of scales, here we use \"square-root\" scaling of the y-axis:(Image: throughput)For 1d, the \"Dierckx scalar\" and \"GI\" tests were interrupted because they ran more than 20 seconds (far longer than any other test).  Both performed much better in 2d, interestingly.  You can see that Interpolations wins in every case, sometimes by a very large margin."
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Work is very much in progress, but and help is always welcome. If you want to help out but don\'t know where to start, take a look at issue #5 - our feature wishlist =) There is also some developer documentation that may help you understand how things work internally.Contributions in any form are appreciated, but the best pull requests come with tests!"
},

]}
