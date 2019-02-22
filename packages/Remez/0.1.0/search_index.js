var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Remez.jl-1",
    "page": "Readme",
    "title": "Remez.jl",
    "category": "section",
    "text": "(Image: Travis build status)This is an implementation of the Remez algorithm for computing minimax polynomial approximations to functions.It is largely based on code by ARM, but updated for newer Julia versions and built into a package.The main function is ratfn_minimax, see help for more details."
},

{
    "location": "autodocs/#Remez.poly_eval",
    "page": "Docstrings",
    "title": "Remez.poly_eval",
    "category": "function",
    "text": "Evaluate a polynomial.\n\nArguments:    coeffs   Array of BigFloats giving the coefficients of the polynomial.             Starts with the constant term, i.e. coeffs[i] is the             coefficient of x^(i-1) (because Julia arrays are 1-based).    x        Point at which to evaluate the polynomial.\n\nReturn value is a BigFloat.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Remez.ratfn_eval",
    "page": "Docstrings",
    "title": "Remez.ratfn_eval",
    "category": "function",
    "text": "Evaluate a rational function.\n\nArguments:    ncoeffs  Array of BigFloats giving the coefficients of the numerator.             Starts with the constant term, and 1-based, as above.    dcoeffs  Array of BigFloats giving the coefficients of the denominator.             Starts with the constant term, and 1-based, as above.    x        Point at which to evaluate the function.\n\nReturn value is a BigFloat.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Remez.ratfn_minimax",
    "page": "Docstrings",
    "title": "Remez.ratfn_minimax",
    "category": "function",
    "text": "N,D,E,X = ratfn_minimax(f, interval, n, d, w)\n\nTop-level function to find a minimax rational-function approximation.\n\nArguments:\n\nf         The function to be approximated. Maps BigFloat -> BigFloat.\ninterval  A tuple giving the endpoints of the interval           (in either order) on which to approximate f.\nn, d      The degrees of the numerator and denominator of the desired           approximation.\nw         Error-weighting function. Takes two BigFloat arguments x,y           and returns a scaling factor for the error at that location.           The returned approximation R should have the minimum possible           maximum value of abs((f(x)-R(x)) * w(x,f(x))). Optional           parameter, defaulting to the always-return-1 function.\n\nReturn values: a tuple (N,D,E,X), where\n\nN,D       A pair of arrays of BigFloats giving the coefficients           of the returned rational function. N has size n+1; D           has size d+1. Both start with the constant term, i.e.           N[i] is the coefficient of x^(i-1) (because Julia           arrays are 1-based). D[1] will be 1.\nE         The maximum weighted error (BigFloat).\nX         An array of pairs of BigFloats giving the locations of n+2           points and the weighted error at each of those points. The           weighted error values will have alternating signs, which           means that the Chebyshev alternation theorem guarantees           that any other function of the same degree must exceed           the error of this one at at least one of those points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Remez.RemezRemez.evalRemez.find_extremaRemez.goldensectionRemez.includeRemez.poly_evalRemez.ratfn_equal_deviationRemez.ratfn_evalRemez.ratfn_leastsquaresRemez.ratfn_minimaxRemez.wellcondRemez.winnow_extrema"
},

]}
