var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Roots) (Image: Roots) Linux: (Image: Build Status) Windows: (Image: Build status)"
},

{
    "location": "#Root-finding-functions-for-Julia-1",
    "page": "Readme",
    "title": "Root finding functions for Julia",
    "category": "section",
    "text": "This package contains simple routines for finding roots of continuous scalar functions of a single real variable. The find_zerofunction provides the primary interface. It supports various algorithms through the specification of a method. These include:Bisection-like algorithms. For functions where a bracketing interval is known (one where f(a) and f(b) have alternate signs), the Bisection method can be specified. For most floating point number types, bisection occurs in a manner exploiting floating point storage conventions. For others, an algorithm of Alefeld, Potra, and Shi is used. These methods are guaranteed to converge.Several derivative-free methods are implemented. These are specified through the methods Order0, Order1 (the secant method), Order2 (the Steffensen method), Order5, Order8, and Order16. The number indicates, roughly, the order of convergence. The Order0 method is the default, and the most robust, but may take many more function calls to converge. The higher order methods promise higher order (faster) convergence, though don\'t always yield results with fewer function calls than Order1 or Order2. The methods Roots.Order1B and Roots.Order2B are superlinear and quadratically converging methods independent of the multiplicity of the zero.There are historic methods that require a derivative or two: Roots.Newton and Roots.Halley.  Roots.Schroder provides a quadratic method, like Newton\'s method, which is independent of the multiplicity of the zero.Each method\'s documentation has additional detail.Some examples:using Roots\nf(x) = exp(x) - x^4\n\n# a bisection method has the bracket specified with a tuple or vector\njulia> find_zero(f, (8,9), Bisection())\n8.613169456441398\n\njulia> find_zero(f, (-10, 0))  # Bisection if x is a tuple and no method\n-0.8155534188089606\n\n\njulia> find_zero(f, (-10, 0), FalsePosition())  # just 11 function evaluations\n-0.8155534188089607For non-bracketing methods, the initial position is passed in as a scalar:## find_zero(f, x0::Number) will use Order0()\njulia> find_zero(f, 3)         # default is Order0()\n1.4296118247255556\n\njulia> find_zero(f, 3, Order1()) # same answer, different method\n1.4296118247255556\n\njulia> find_zero(sin, BigFloat(3.0), Order16())\n3.141592653589793238462643383279502884197169399375105820974944592307816406286198The find_zero function can be used with callable objects:using SymEngine\n@vars x\nfind_zero(x^5 - x - 1, 1.0)  # 1.1673039782614185Or,using Polynomials\nx = variable(Int)\nfind_zero(x^5 - x - 1, 1.0)  # 1.1673039782614185The function should respect the units of the Unitful package:using Unitful\ns = u\"s\"; m = u\"m\"\ng = 9.8*m/s^2\nv0 = 10m/s\ny0 = 16m\ny(t) = -g*t^2 + v0*t + y0\nfind_zero(y, 1s)      # 1.886053370668014 sNewton\'s method can be used without taking derivatives, if the ForwardDiff package is available:using ForwardDiff\nD(f) = x -> ForwardDiff.derivative(f,float(x))Now we have:f(x) = x^3 - 2x - 5\nx0 = 2\nfind_zero((f,D(f)), x0, Roots.Newton())   # 2.0945514815423265Automatic derivatives allow for easy solutions to finding critical points of a function.## mean\nusing Statistics\nas = rand(5)\nfunction M(x)\n  sum([(x-a)^2 for a in as])\nend\nfind_zero(D(M), .5) - mean(as)	  # 0.0\n\n## median\nfunction m(x)\n  sum([abs(x-a) for a in as])\n\nend\nfind_zero(D(m), (0, 1)) - median(as)	# 0.0"
},

{
    "location": "#Multiple-zeros-1",
    "page": "Readme",
    "title": "Multiple zeros",
    "category": "section",
    "text": "The find_zeros function can be used to search for all zeros in a specified interval. The basic algorithm essentially splits the interval into many subintervals. For each, if there is a bracket, a bracketing algorithm is used to identify a zero, otherwise a derivative free method is used to search for zeros. This algorithm can miss zeros for various reasons, so the results should be confirmed by other means.f(x) = exp(x) - x^4\nfind_zeros(f, -10, 10)"
},

{
    "location": "#Convergence-1",
    "page": "Readme",
    "title": "Convergence",
    "category": "section",
    "text": "For most algorithms, convergence is decided whenThe value |f(xn)| < tol with `tol = max(atol, abs(xn)*rtol)`, or\nthe values xn ≈ x{n-1} with tolerances xatol and xrtol and f(x_n) ≈ 0 with a relaxed tolerance based on atol and rtol.The algorithm stops ifit encounters an NaN or an Inf, or\nthe number of iterations exceed maxevals, or\nthe number of function calls exceeds maxfnevals.If the algorithm stops and the relaxed convergence criteria is met, the suspected zero is returned. Otherwise an error is thrown indicating no convergence. To adjust the tolerances, find_zero accepts keyword arguments atol, rtol, xatol, and xrtol.The Bisection and Roots.A42 methods are guaranteed to converge even if the tolerances are set to zero, so these are the defaults. Non-zero values for xatol and xrtol can be specified to reduce the number of function calls when lower precision is required."
},

{
    "location": "#An-alternate-interface-1",
    "page": "Readme",
    "title": "An alternate interface",
    "category": "section",
    "text": "This functionality is provided by the fzero function, familiar to MATLAB users. Roots also provides this alternative interface:fzero(f, x0::Real; order=0) calls a derivative-free method. with the order specifying one of Order0, Order1, etc.\nfzero(f, a::Real, b::Real) calls the find_zero algorithm with the Bisection method.\nfzeros(f, a::Real, b::Real) will call find_zeros."
},

{
    "location": "#Usage-examples-1",
    "page": "Readme",
    "title": "Usage examples",
    "category": "section",
    "text": "f(x) = exp(x) - x^4\n## bracketing\nfzero(f, 8, 9)		          # 8.613169456441398\nfzero(f, -10, 0)		      # -0.8155534188089606\nfzeros(f, -10, 10)            # -0.815553, 1.42961  and 8.61317\n\n## use a derivative free method\nfzero(f, 3)			          # 1.4296118247255558\n\n## use a different order\nfzero(sin, big(3), order=16)  # 3.141592653589793..."
},

{
    "location": "#Technical-difference-between-find_zero-and-fzero-1",
    "page": "Readme",
    "title": "Technical difference between find_zero and fzero",
    "category": "section",
    "text": "The fzero function is not identical to find_zero. When a function, f, is passed to find_zero the code is specialized to the function f which means the first use of f will be slower due to compilation, but subsequent uses will be faster. For fzero, the code is not specialized to the function f, so the story is reversed.Some additional documentation can be read here."
},

{
    "location": "autodocs/#Roots.A42",
    "page": "Docstrings",
    "title": "Roots.A42",
    "category": "type",
    "text": "Roots.A42()\n\nBracketing method which finds the root of a continuous function within a provided interval [a, b], without requiring derivatives. It is based on algorithm 4.2 described in: 1. G. E. Alefeld, F. A. Potra, and Y. Shi, \"Algorithm 748: enclosing zeros of continuous functions,\" ACM Trans. Math. Softw. 21, 327–344 (1995), DOI: 10.1145/210089.210111. Originally by John Travers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.AlefeldPotraShi",
    "page": "Docstrings",
    "title": "Roots.AlefeldPotraShi",
    "category": "type",
    "text": "Roots.AlefeldPotraShi()\n\nFollows algorithm in \"ON ENCLOSING SIMPLE ROOTS OF NONLINEAR EQUATIONS\", by Alefeld, Potra, Shi; DOI: 10.1090/S0025-5718-1993-1192965-2 link. Efficiency is 1.618. Less efficient, but can be faster than A42() method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Bisection",
    "page": "Docstrings",
    "title": "Roots.Bisection",
    "category": "type",
    "text": "Bisection()\n\nIf possible, will use the bisection method over Float64 values. The bisection method starts with a bracketing interval [a,b] and splits it into two intervals [a,c] and [c,b], If c is not a zero, then one of these two will be a bracketing interval and the process continues. The computation of c is done by _middle, which reinterprets floating point values as unsigned integers and splits there. This method avoids floating point issues and when the tolerances are set to zero (the default) guarantees a \"best\" solution (one where a zero is found or the bracketing interval is of the type [a, nextfloat(a)]).\n\nWhen tolerances are given, this algorithm terminates when the midpoint is approximately equal to an endpoint using absolute tolerance xatol and relative tolerance xrtol.\n\nWhen a zero tolerance is given and the values are not Float64 values, this will call the A42 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Brent",
    "page": "Docstrings",
    "title": "Roots.Brent",
    "category": "type",
    "text": "Roots.Brent()\n\nAn implementation of Brent\'s (or Brent-Dekker) method. This method uses a choice of inverse quadratic interpolation or a secant step, falling back on bisection if necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Esser",
    "page": "Docstrings",
    "title": "Roots.Esser",
    "category": "type",
    "text": "Order2B()\n\nEsser\'s method. This is a quadratically convergent method that, like Schroder\'s method, does not depend on the multiplicity of the zero. Schroder\'s method has update step x- r2/(r2-r1) * r1, where ri = f^(i-1)/f^(i). Esser approximates f\' ~ f[x-h, x+h], f\'\' ~ f[x-h,x,x+h], where h = fx, as with Steffensen\'s method, Requiring 3 function calls per step. This implementation uses a secant step when |fx| is considered too large.\n\nEsser, H. Computing (1975) 14: 367. https://doi.org/10.1007/BF02253547 Eine stets quadratisch konvergente Modifikation des Steffensen-Verfahrens\n\nExample\n\nf(x) = cos(x) - x\ng(x) = f(x)^2\nx0 = pi/4\nfind_zero(f, x0, Order2(), verbose=true)        #  3 steps / 7 function calls\nfind_zero(f, x0, Roots.Order2B(), verbose=true) #  4 / 9\nfind_zero(g, x0, Order2(), verbose=true)        #  22 / 45\nfind_zero(g, x0, Roots.Order2B(), verbose=true) #  4 / 10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.FalsePosition",
    "page": "Docstrings",
    "title": "Roots.FalsePosition",
    "category": "type",
    "text": "FalsePosition()\n\nUse the false position method to find a zero for the function f within the bracketing interval [a,b].\n\nThe false position method is a modified bisection method, where the midpoint between [a_k, b_k] is chosen to be the intersection point of the secant line with the x axis, and not the average between the two values.\n\nTo speed up convergence for concave functions, this algorithm implements the 12 reduction factors of Galdino (A family of regula falsi root-finding methods). These are specified by number, as in FalsePosition(2) or by one of three names FalsePosition(:pegasus), FalsePosition(:illinois), or FalsePosition(:anderson_bjork) (the default). The default choice has generally better performance than the others, though there are exceptions.\n\nFor some problems, the number of function calls can be greater than for the bisection64 method, but generally this algorithm will make fewer function calls.\n\nExamples\n\nfind_zero(x -> x^5 - x - 1, [-2, 2], FalsePosition())\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Halley",
    "page": "Docstrings",
    "title": "Roots.Halley",
    "category": "type",
    "text": "Roots.Halley()\n\nImplements Halley\'s method, `x_n1 = xn - f/f\' * (1 - f/f\' * f\'\'/f\' * 1/2)^(-1) This method is cubically converging, but requires more function calls per step (3) than other methods.\n\nExample\n\nfind_zero((sin, cos, x->-sin(x)), 3.0, Roots.Halley())\n\nIf function evaluations are expensive one can pass in a function which returns (f, f/f\',f\'/f\'\') as follows\n\nfind_zero(x -> (sin(x), sin(x)/cos(x), -cos(x)/sin(x)), 3.0, Roots.Halley())\n\nThis can be advantageous if the derivatives are easily computed from the value of f, but otherwise would be expensive to compute.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.King",
    "page": "Docstrings",
    "title": "Roots.King",
    "category": "type",
    "text": "King()\nOrder1B()\n\nA superlinear (order 1.6...) modification of the secant method for multiple roots. Presented in A SECANT METHOD FOR MULTIPLE ROOTS, by RICHARD F. KING, BIT 17 (1977), 321-328\n\nThe basic idea is similar to Schroder\'s method: apply the secant method to  f/f\'. However, this uses f\' ~ fp = (fx - f(x-fx))/fx (a Steffensen step). In this implementation, when fx is too big, a single secant step of f is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Newton",
    "page": "Docstrings",
    "title": "Roots.Newton",
    "category": "type",
    "text": "Roots.Newton()\n\nImplements Newton\'s method: x_n1 = xn - f(xn)/f\'(xn).  This is a quadratically converging method requiring one derivative. Two function calls per step.\n\nExample\n\nfind_zero((sin,cos), 3.0, Roots.Newton())\n\nIf function evaluations are expensive one can pass in a function which returns (f, f/f\') as follows\n\nfind_zero(x -> (sin(x), sin(x)/cos(x)), 3.0, Roots.Newton())\n\nThis can be advantageous if the derivative is easily computed from the value of f, but otherwise would be expensive to compute.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Order0",
    "page": "Docstrings",
    "title": "Roots.Order0",
    "category": "type",
    "text": "Order0()\n\nThe Order0 method is engineered to be a more robust, though possibly slower, alternative to to the other derivative-free root-finding methods. The implementation roughly follows the algorithm described in Personal Calculator Has Key to Solve Any Equation f(x) = 0, the SOLVE button from the HP-34C. The basic idea is to use a secant step. If along the way a bracket is found, switch to bisection, using AlefeldPotraShi.  If the secant step fails to decrease the function value, a quadratic step is used up to 3 times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Order1",
    "page": "Docstrings",
    "title": "Roots.Order1",
    "category": "type",
    "text": "Order1()\n\nThe Order1() method is an alias for Secant. It specifies the secant method. This method keeps two values in its state, x_n and x_n1. The updated point is the intersection point of x axis with the secant line formed from the two points. The secant method uses 1 function evaluation per step and has order (1+sqrt(5))/2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Order16",
    "page": "Docstrings",
    "title": "Roots.Order16",
    "category": "type",
    "text": "Order16()\n\nImplement the algorithm from New Sixteenth-Order Derivative-Free Methods for Solving Nonlinear Equations by R. Thukral, American Journal of Computational and Applied Mathematics p-ISSN: 2165-8935;    e-ISSN: 2165-8943; 2012;  2(3): 112-118 doi: 10.5923/j.ajcam.20120203.08.\n\nFive function calls per step are required. Though rapidly converging, this method generally isn\'t faster (fewer function calls/steps) over other methods when using Float64 values, but may be useful for solving over BigFloat.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Order1B",
    "page": "Docstrings",
    "title": "Roots.Order1B",
    "category": "type",
    "text": "King()\nOrder1B()\n\nA superlinear (order 1.6...) modification of the secant method for multiple roots. Presented in A SECANT METHOD FOR MULTIPLE ROOTS, by RICHARD F. KING, BIT 17 (1977), 321-328\n\nThe basic idea is similar to Schroder\'s method: apply the secant method to  f/f\'. However, this uses f\' ~ fp = (fx - f(x-fx))/fx (a Steffensen step). In this implementation, when fx is too big, a single secant step of f is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Order2",
    "page": "Docstrings",
    "title": "Roots.Order2",
    "category": "type",
    "text": "Order2()\n\nThe quadratically converging Steffensen method is used for the derivative-free Order2() algorithm. Unlike the quadratically converging Newton\'s method, no derivative is necessary, though like Newton\'s method, two function calls per step are. Steffensen\'s algorithm is more sensitive than Newton\'s method to poor initial guesses when f(x) is large, due to how f\'(x) is approximated. This algorithm replaces a Steffensen step with a secant step when f(x) is large.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Order2B",
    "page": "Docstrings",
    "title": "Roots.Order2B",
    "category": "type",
    "text": "Order2B()\n\nEsser\'s method. This is a quadratically convergent method that, like Schroder\'s method, does not depend on the multiplicity of the zero. Schroder\'s method has update step x- r2/(r2-r1) * r1, where ri = f^(i-1)/f^(i). Esser approximates f\' ~ f[x-h, x+h], f\'\' ~ f[x-h,x,x+h], where h = fx, as with Steffensen\'s method, Requiring 3 function calls per step. This implementation uses a secant step when |fx| is considered too large.\n\nEsser, H. Computing (1975) 14: 367. https://doi.org/10.1007/BF02253547 Eine stets quadratisch konvergente Modifikation des Steffensen-Verfahrens\n\nExample\n\nf(x) = cos(x) - x\ng(x) = f(x)^2\nx0 = pi/4\nfind_zero(f, x0, Order2(), verbose=true)        #  3 steps / 7 function calls\nfind_zero(f, x0, Roots.Order2B(), verbose=true) #  4 / 9\nfind_zero(g, x0, Order2(), verbose=true)        #  22 / 45\nfind_zero(g, x0, Roots.Order2B(), verbose=true) #  4 / 10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Order5",
    "page": "Docstrings",
    "title": "Roots.Order5",
    "category": "type",
    "text": "Order5()\n\nImplements an order 5 algorithm from A New Fifth Order Derivative Free Newton-Type Method for Solving Nonlinear Equations by Manoj Kumar, Akhilesh Kumar Singh, and Akanksha, Appl. Math. Inf. Sci. 9, No. 3, 1507-1513 (2015), DOI: 10.12785/amis/090346. Four function calls per step are needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Order8",
    "page": "Docstrings",
    "title": "Roots.Order8",
    "category": "type",
    "text": "Order8()\n\nImplements an eighth-order algorithm from New Eighth-Order Derivative-Free Methods for Solving Nonlinear Equations by Rajinder Thukral, International Journal of Mathematics and Mathematical Sciences Volume 2012 (2012), Article ID 493456, 12 pages DOI: 10.1155/2012/493456. Four function calls per step are required.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Schroder",
    "page": "Docstrings",
    "title": "Roots.Schroder",
    "category": "type",
    "text": "Roots.Schroder()\n\nSchroder\'s method, like Halley\'s method, utilizes f, f\', and f\'\'. Unlike Halley it is quadratically converging, but this is independent of the multiplicity of the zero (cf. Schröder, E. \"Über unendlich viele Algorithmen zur Auflösung der Gleichungen.\" Math. Ann. 2, 317-365, 1870; http://mathworld.wolfram.com/SchroedersMethod.html).\n\nExample\n\nm = 2\nf(x) = (cos(x)-x)^m\nfp(x) = (-x + cos(x))*(-2*sin(x) - 2)\nfpp(x) = 2*((x - cos(x))*cos(x) + (sin(x) + 1)^2)\nfind_zero((f, fp, fpp), pi/4, Roots.Halley())    # 14 steps\nfind_zero((f, fp, fpp), 1.0, Roots.Schroder())    # 3 steps\n\n(Whereas, when m=1, Halley is 2 steps to Schroder\'s 3.)\n\nIf function evaluations are expensive one can pass in a function which returns (f, f/f\',f\'/f\'\') as follows\n\nfind_zero(x -> (sin(x), sin(x)/cos(x), -cos(x)/sin(x)), 3.0, Roots.Schroder())\n\nThis can be advantageous if the derivatives are easily computed from the value of f, but otherwise would be expensive to compute.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.Secant",
    "page": "Docstrings",
    "title": "Roots.Secant",
    "category": "type",
    "text": "Order1()\n\nThe Order1() method is an alias for Secant. It specifies the secant method. This method keeps two values in its state, x_n and x_n1. The updated point is the intersection point of x axis with the secant line formed from the two points. The secant method uses 1 function evaluation per step and has order (1+sqrt(5))/2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.TupleWrapper",
    "page": "Docstrings",
    "title": "Roots.TupleWrapper",
    "category": "type",
    "text": "newton((f, f\'), x0; xatol=nothing, xrtol=nothing, maxevals=100)\nnewton(fΔf, x0; xatol=nothing, xrtol=nothing, maxevals=100)\n\nNewton\'s method.\n\nFunction may be passed in as a tuple (f, f\') or as function which returns (f,f/f\').\n\nExamples:\n\nnewton((sin, cos), 3.0)\nnewton(x -> (sin(x), sin(x)/cos(x)), 3.0, xatol=1e-10, xrtol=1e-10)\n\nNote: unlike the call newton(f, fp, x0)–which dispatches to a method of find_zero, these two interfaces will specialize on the function that is passed in. This means, these functions will be faster for subsequent calls, but may be slower for an initial call.\n\nConvergence here is decided by xn ≈ x{n-1} using the tolerances specified, which both default to eps(T)^4/5 in the appropriate units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.assess_convergence",
    "page": "Docstrings",
    "title": "Roots.assess_convergence",
    "category": "function",
    "text": "Roots.assess_convergence(method, state, options)\n\nAssess if algorithm has converged.\n\nIf alogrithm hasn\'t converged returns false.\n\nIf algorithm has stopped or converged, return true and sets one of state.stopped, state.x_converged,  state.f_converged, or state.convergence_failed; as well, a message may be set.\n\nstate.x_converged = true if abs(xn1 - xn0) < max(xatol, max(abs(xn1), abs(xn0)) * xrtol)\nstate.f_converged = true if  |f(xn1)| < max(atol, |xn1|*rtol)\nstate.convergence_failed = true if xn1 or fxn1 is NaN or an infinity\nstate.stopped = true if the number of steps exceed maxevals or the number of function calls exceeds maxfnevals.\n\nIn find_zero, stopped values (and x_converged) are checked for convergence with a relaxed tolerance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.bisection",
    "page": "Docstrings",
    "title": "Roots.bisection",
    "category": "function",
    "text": "bisection(f, a, b; [xatol, xrtol])\n\nPerforms bisection method to find a zero of a continuous function.\n\nIt is assumed that (a,b) is a bracket, that is, the function has different signs at a and b. The interval (a,b) is converted to floating point and shrunk when a or b is infinite. The function f may be infinite for the typical case. If f is not continuous, the algorithm may find jumping points over the x axis, not just zeros.\n\nIf non-trivial tolerances are specified, the process will terminate when the bracket (a,b) satisfies isapprox(a, b, atol=xatol, rtol=xrtol). For zero tolerances, the default, for Float64, Float32, or Float16 values, the process will terminate at a value x with f(x)=0 or f(x)*f(prevfloat(x)) < 0 or f(x) * f(nextfloat(x)) < 0. For other number types, the A42 method is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.default_tolerances",
    "page": "Docstrings",
    "title": "Roots.default_tolerances",
    "category": "function",
    "text": "default_tolerances(Method, [T], [S])\n\nThe default tolerances for most methods are xatol=zero(T), xrtol=eps(T), atol=4eps(S), and rtol=4eps(S), with the proper units (absolute tolerances have the units of x and f(x); relative tolerances are unitless). For Complex{T} values, T is used.\n\nThe number of iterations is limited by maxevals=40, the number of function evaluations is not capped, due to maxfnevals=typemax(Int), and strict=false.\n\n\n\n\n\ndefault_tolerances(M, [T], [S])\n\nFor Bisection (or BisectionExact), when the x values are of type Float64, Float32, or Float16, the default tolerances are zero and there is no limit on the number of iterations or function evalutions. In this case, the algorithm is guaranteed to converge to an exact zero, or a point where the function changes sign at one of the answer\'s adjacent floating point values.\n\nFor other types, the the A42 method (with its tolerances) is used.\n\n\n\n\n\ndefault_tolerances(::AbstractAlefeldPotraShi, T, S)\n\nThe default tolerances for Alefeld, Potra, and Shi methods are xatol=zero(T), xrtol=2eps(T), atol= zero(S), and rtol=zero(S), with appropriate units; maxevals=45, maxfnevals = Inf; and strict=true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.dfree",
    "page": "Docstrings",
    "title": "Roots.dfree",
    "category": "function",
    "text": "dfree(f, xs)\n\nA more robust secant method implementation\n\nSolve for f(x) = 0 using an alogorithm from Personal Calculator Has Key to Solve Any Equation f(x) = 0, the SOLVE button from the HP-34C.\n\nThis is also implemented as the Order0 method for find_zero.\n\nThe inital values can be specified as a pair of two values, as in (a,b) or [a,b], or as a single value, in which case a value of b is computed, possibly from fb.  The basic idea is to follow the secant method to convergence unless:\n\na bracket is found, in which case bisection is used;\nthe secant method is not converging, in which case a few steps of a quadratic method are used to see if that improves matters.\n\nConvergence occurs when f(m) == 0, there is a sign change between m and an adjacent floating point value, or f(m) <= 2^3*eps(m).\n\nA value of NaN is returned if the algorithm takes too many steps before identifying a zero.\n\nExamples\n\nRoots.dfree(x -> x^5 - x - 1, 1.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.find_zero",
    "page": "Docstrings",
    "title": "Roots.find_zero",
    "category": "function",
    "text": "find_zero(fs, x0, method; kwargs...)\n\nInterface to one of several methods for find zeros of a univariate function.\n\nInitial starting value\n\nFor most methods, x0 is a scalar value indicating the initial value in the iterative procedure. (Secant methods can have a tuple specify their initial values.) Values must be a subtype of Number and have methods for float, real, and oneunit defined.\n\nFor bracketing intervals, x0 is specified as a tuple or a vector. A bracketing interval, (a,b), is one where f(a) and f(b) have different signs.\n\nSpecifying a method\n\nA method is specified to indicate which algorithm to employ:\n\nThere are methods for bisection where a bracket is specified: Bisection, Roots.A42, FalsePosition\nThere are several derivative-free methods: cf. Order0, Order1 (secant method), Order2 (Steffensen), Order5, Order8, and Order16, where the number indicates the order of the convergence.\nThere are some classical methods where derivatives are required: Roots.Newton, Roots.Halley. (The are not exported.)\n\nFor more detail, see the help page for each method (e.g., ?Order1).\n\nIf no method is specified, the default method depends on x0:\n\nIf x0 is a scalar, the default is the slower, but more robust Order0 method.\nIf x0 is a tuple or vector indicating a bracketing interval, the Bisection method is used. (The exact algorithm depends on the number type, the tolerances, and verbose.)\n\nSpecifying the function\n\nThe function(s) are passed as the first argument.\n\nFor the few methods that use a derivative (Newton, Halley, and optionally Order5) a tuple of functions is used.\n\nOptional arguments (tolerances, limit evaluations, tracing)\n\nxatol - absolute tolerance for x values. Passed to isapprox(x_n, x_{n-1})\nxrtol - relative tolerance for x values. Passed to isapprox(x_n, x_{n-1})\natol  - absolute tolerance for f(x) values.\nrtol  - relative tolerance for f(x) values.\nmaxevals   - limit on maximum number of iterations\nmaxfnevals - limit on maximum number of function evaluations\nstrict - if false (the default), when the algorithm stops, possible zeros are checked with a relaxed tolerance\nverbose - if true a trace of the algorithm will be shown on successful completion.\n\nSee the help string for Roots.assess_convergence for details on convergence. See the help page for Roots.default_tolerances(method) for details on the default tolerances.\n\nIn general, with floating point numbers, convergence must be understood as not an absolute statement. Even if mathematically x is an answer the floating point realization, say xstar, it may be that f(xstar) - f(x) = f(xstar) ≈ f\'(x) ⋅ eps(x), so tolerances must be appreciated, and at times specified.\n\nFor the Bisection methods, convergence is guaranteed, so the tolerances are set to be 0 by default.\n\nIf a bracketing method is passed in after the method specification if a bracket is found, the method will switch. This is what Order0 does by default, with a secant step initially.\n\nExamples:\n\n# default methods\nfind_zero(sin, 3)  # use Order0()\nfind_zero(sin, (3,4)) # use Bisection()\n\n# specifying a method\nfind_zero(sin, 3.0, Order2())              # Use Steffensen method\nfind_zero(sin, big(3.0), Order16())        # rapid convergence\nfind_zero(sin, (3, 4), FalsePosition())    # fewer function calls than Bisection(), in this case\nfind_zero(sin, (3, 4), FalsePosition(8))   # 1 or 12 possible algorithms for false position\nfind_zero((sin,cos), 3.0, Roots.Newton())  # use Newton\'s method\nfind_zero((sin, cos, x->-sin(x)), 3.0, Roots.Halley())  # use Halley\'s method\n\n# changing tolerances\nfn, x0, xstar = (x -> (2x*cos(x) + x^2 - 3)^10/(x^2 + 1), 3.0,  2.9806452794385368)\nfind_zero(fn, x0, Order2()) - xstar        # 0.014079847201995843\nfind_zero(fn, x0, Order2(), atol=0.0, rtol=0.0) # error: x_n ≉ x_{n-1}; just f(x_n) ≈ 0\nfn, x0, xstar = (x -> (sin(x)*cos(x) - x^3 + 1)^9,        1.0,  1.117078770687451)\nfind_zero(fn, x0, Order2())                # 1.1122461983100858\nfind_zero(fn, x0, Order2(), maxevals=3)    # Roots.ConvergenceFailed: 26 iterations needed\n\n# tracing output\nfind_zero(x->sin(x), 3.0, Order2(), verbose=true)   # 3 iterations\nfind_zero(x->sin(x)^5, 3.0, Order2(), verbose=true) # 22 iterations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.find_zeros",
    "page": "Docstrings",
    "title": "Roots.find_zeros",
    "category": "function",
    "text": "findzeros(f, a, b; [nopts=12, k=8, naive=false, xatol, xrtol, atol, rtol])\n\nSearch for zeros of f in the interval [a,b].\n\nExamples\n\nfind_zeros(x -> exp(x) - x^4, -5, 20)        # a few well-spaced zeros\nfind_zeros(x -> sin(x^2) + cos(x)^2, 0, 10)  # many zeros\nfind_zeros(x -> cos(x) + cos(2x), 0, 4pi)    # mix of simple, non-simple zeros\nf(x) = (x-0.5) * (x-0.5001) * (x-1)          # nearby zeros\nfind_zeros(f, 0, 2)\nf(x) = (x-0.5) * (x-0.5001) * (x-4) * (x-4.001) * (x-4.2)\nfind_zeros(f, 0, 10)\nf(x) = (x-0.5)^2 * (x-0.5001)^3 * (x-4) * (x-4.001) * (x-4.2)^2  # hard to identify\nfind_zeros(f, 0, 10, no_pts=21)                # too hard for default\n\nNotes:\n\nThere are two typical cases where the number of zeros may be underreported:\n\nif the initial interval, [a,b], is too wide\nif there are nearby zeros\n\nThe basic algorithm checks for zeros among the endpoints, and then divides the interval (a,b) into no_pts-1 subintervals and then proceeds to look for zeros through bisection or a derivative-free method.  As checking for a bracketing interval is relatively cheap and bisection is guaranteed to converge, each interval has k pairs of intermediate points checked for a bracket.\n\nIf any zeros are found, the algorithm uses these to partition (a,b) into subintervals. Each subinterval is shrunk so that the endpoints are not zeros and the process is repeated on the subinterval. If the initial interval is too large, then the naive scanning for zeros may be fruitless and no zeros will be reported. If there are nearby zeros, the shrinking of the interval may jump over them, though as seen in the examples, nearby roots can be identified correctly, though for really nearby points, or very flat functions, it may help to increase no_pts.\n\nThe tolerances are used to shrink the intervals, but not to find zeros within a search. For searches, bisection is guaranteed to converge with no specified tolerance. For the derivative free search, a modification of the Order0 method is used, which at worst case compares |f(x)| <= 8*eps(x) to identify a zero. The algorithm might identify more than one value for a zero, due to floating point approximations. If a potential pair of zeros satisfy isapprox(a,b,atol=sqrt(xatol), rtol=sqrt(xrtol)) then they are consolidated.\n\nThe algorithm can make many function calls. When zeros are found in an interval, the naive search is carried out on each subinterval. To cut down on function calls, though with some increased chance of missing some zeros, the adaptive nature can be skipped with the argument naive=true or the number of points stepped down.\n\nThe algorithm is derived from one in a PR by @djsegal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.fzero",
    "page": "Docstrings",
    "title": "Roots.fzero",
    "category": "function",
    "text": "fzero(f, x0; order=0; kwargs...)\nfzero(f, x0, M; kwargs...)\nfzero(f, x0, M, N; kwargs...)\nfzero(f, x0; kwargs...)\nfzero(f, a::Number, b::Numbers; kwargs...)\nfzero(f, a::Number, b::Numbers; order=?, kwargs...)\nfzero(f, fp, a::Number; kwargs...)\n\nFind zero of a function using one of several iterative algorithms.\n\nf: a scalar function or callable object\nx0: an initial guess, a scalar value or tuple of two values\norder: An integer, symbol, or string indicating the algorithm to  use for find_zero. The Order0 default may be specified directly  by order=0, order=:0, or order=\"0\"; Order1() by order=1,  order=:1, order=\"1\", or order=:secant; Order1B() by  `order=\"1B\", etc.\nM: a specific method, as would be passed to find_zero, bypassing the use of the order keyword\nN: a specific bracketing method. When given, if a bracket is identified, method N will be used to finish instead of method M.\na, b: When two values are passed along, if no order value is specified, Bisection will be used over the bracketing interval (a,b). If an order value is specified, the value of x0 will be set to (a,b) and the specified method will be used.\nfp: when fp is specified (assumed to compute the derivative of f), Newton\'s method will be used\nkwargs...: See find_zero for the specification of tolerances and other keyword arguments\n\nExamples:\n\nfzero(sin, 3)                  # use Order0() method, the default\nfzero(sin, 3, order=:secant)   # use secant method (also just `order=1`)\nfzero(sin, 3, Roots.Order1B()) # use secant method variant for multiple roots.\nfzero(sin, 3, 4)               # use bisection method over (3,4)\nfzero(sin, 3, 4, xatol=1e-6)   # use bisection method until |x_n - x_{n-1}| <= 1e-6\nfzero(sin, 3, 3.1, order=1)    # use secant method with x_0=3.0, x_1 = 3.1\nfzero(sin, (3, 3.1), order=2)  # use Steffensen\'s method with x_0=3.0, x_1 = 3.1\nfzero(sin, cos, 3)             # use Newton\'s method\n\nNote: unlike find_zero, fzero does not specialize on the type of the function argument. This has the advantage of making the first use of the function f faster, but subsequent uses slower.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.fzeros",
    "page": "Docstrings",
    "title": "Roots.fzeros",
    "category": "function",
    "text": "fzeros(f, a, b; kwargs...)\n\nSearches for all zeros of f within an interval (a,b). Assume neither a or b is a zero.\n\nDispatches to find_zeros(f, a, b; kwargs...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.halley",
    "page": "Docstrings",
    "title": "Roots.halley",
    "category": "function",
    "text": "Roots.halley(f, fp, fpp, x0; kwargs...)\n\nImplementation of Halley\'s method (cf ?Roots.Halley()).\n\nArguments:\n\nf::Function – function to find zero of\nfp::Function – derivative of f.\nfpp:Function – second derivative of f.\nx0::Number – initial guess\n\nWith the FowardDiff package derivatives may be computed automatically. For example,  defining D(f) = x -> ForwardDiff.derivative(f, float(x)) allows D(f) and D(D(f)) to be used for the first and second derivatives, respectively.\n\nKeyword arguments are passed to find_zero using the Roots.Halley() method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.newton",
    "page": "Docstrings",
    "title": "Roots.newton",
    "category": "function",
    "text": "Roots.newton(f, fp, x0; kwargs...)\n\nImplementation of Newton\'s method: x_n1 = x_n - f(x_n)/ f\'(x_n)\n\nArguments:\n\nf::Function – function to find zero of\nfp::Function – the derivative of f.\nx0::Number – initial guess. For Newton\'s method this may be complex.\n\nWith the FowardDiff package derivatives may be computed automatically. For example,  defining D(f) = x -> ForwardDiff.derivative(f, float(x)) allows D(f) to be used for the first derivative.\n\nKeyword arguments are passed to find_zero using the Roots.Newton() method.\n\nSee also Roots.newton((f,fp), x0) andRoots.newton(fΔf, x0)` for simpler implementations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.secant_method",
    "page": "Docstrings",
    "title": "Roots.secant_method",
    "category": "function",
    "text": "secant_method(f, xs; [atol=0.0, rtol=8eps(), maxevals=1000])\n\nPerform secant method to solve f(x) = 0.\n\nThe secant method is an iterative method with update step given by b - fb/m where m is the slope of the secant line between (a,fa) and (b,fb).\n\nThe inital values can be specified as a pair of 2, as in (a,b) or [a,b], or as a single value, in which case a value of b is chosen.\n\nThe algorithm returns m when abs(fm) <= max(atol, abs(m) * rtol). If this doesn\'t occur before maxevals steps or the algorithm encounters an issue, a value of NaN is returned. If too many steps are taken, the current value is checked to see if there is a sign change for neighboring floating point values.\n\nThe Order1 method for find_zero also implements the secant method. This one will be faster, as there are fewer setup costs.\n\nExamples:\n\nRoots.secant_method(sin, (3,4))\nRoots.secant_method(x -> x^5 -x - 1, 1.1)\n\nNote:\n\nThis function will specialize on the function f, so that the inital call can take more time than a call to the Order1() method, though subsequent calls will be much faster.  Using FunctionWrappers.jl can ensure that the initial call is also equally as fast as subsequent ones.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Roots.steff_step",
    "page": "Docstrings",
    "title": "Roots.steff_step",
    "category": "function",
    "text": "heuristic to get a decent first step with Steffensen steps\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Roots.A42Roots.AbstractAlefeldPotraShiRoots.AbstractBisectionRoots.AbstractBracketingRoots.AbstractHalleyLikeMethodRoots.AbstractNonBracketingRoots.AbstractSecantRoots.AbstractTracksRoots.AbstractUnivariateZeroMethodRoots.AbstractUnivariateZeroStateRoots.AlefeldPotraShiRoots.BisectionRoots.BisectionExactRoots.BrentRoots.CallableFunctionRoots.ConvergenceFailedRoots.DerivativeFreeRoots.EsserRoots.FalsePositionRoots.FirstDerivativeRoots.FloatNNRoots.FnWrapperRoots.HalleyRoots.IntervalRoots.KingRoots.NewtonRoots.NullTracksRoots.Order0Roots.Order1Roots.Order16Roots.Order1BRoots.Order2Roots.Order2BRoots.Order5Roots.Order8Roots.RootsRoots.SchroderRoots.SecantRoots.SecondDerivativeRoots.StateConvergedRoots.SteffensenRoots.TracksRoots.TupleWrapperRoots.UnivariateZeroOptionsRoots.UnivariateZeroStateRoots.__middleRoots._callable_functionRoots._default_secant_stepRoots._fbracketRoots._fbracket_diffRoots._fbracket_ratioRoots._fzRoots._fz!Roots._is_f_approx_0Roots._method_lookupRoots._middleRoots._non_zeroRoots._unitlessRoots.adjust_bracketRoots.approx_closeRoots.assess_convergenceRoots.bisectionRoots.bisection64Roots.bracketRoots.bracketing_errorRoots.callable_functionRoots.check_zeroRoots.choose_smallestRoots.decide_convergenceRoots.default_tolerancesRoots.derivative_freeRoots.dfreeRoots.do_steff_stepRoots.evalRoots.f_abRoots.f_abdRoots.find_non_zeroRoots.find_zeroRoots.find_zerosRoots.fzeroRoots.fzerosRoots.fΔxRoots.fΔxΔΔxRoots.galdinoRoots.galdino_reductionRoots.guarded_secant_stepRoots.halleyRoots.has_convergedRoots.identify_starting_pointRoots.incfnRoots.includeRoots.incstepsRoots.init_optionsRoots.init_options!Roots.init_stateRoots.init_state!Roots.ipzeroRoots.isbracketRoots.isissueRoots.isnegRoots.log_stepRoots.make_intervals!Roots.newtonRoots.newton_quadraticRoots.not_nearRoots.quad_vertexRoots.run_bisectionRoots.secantRoots.secant_methodRoots.secant_stepRoots.show_traceRoots.show_tracksRoots.sort_smallestRoots.steff_stepRoots.take_a42_stepRoots.update_state"
},

]}
