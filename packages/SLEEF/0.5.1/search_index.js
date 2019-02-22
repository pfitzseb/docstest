var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<div align=\"center\"> <img src=\"https://rawgit.com/musm/SLEEF.jl/master/doc/src/assets/logo.svg\" alt=\"SLEEF Logo\" width=\"380\"></img> </div>A pure Julia port of the SLEEF math libraryHistoryRelease v0.4.0 based on SLEEF v2.110\nRelease v0.3.0 based on SLEEF v2.100\nRelease v0.2.0 based on SLEEF v2.90\nRelease v0.1.0 based on SLEEF v2.80<br><br> (Image: Travis Build Status) (Image: Appveyor Build Status) (Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To use  SLEEF.jljulia> Pkg.add(\"SLEEF\")\njulia> using SLEEF\n\njulia> SLEEF.exp(3.0)\n20.085536923187668\n\njulia> SLEEF.exp(3f0)\n20.085537f0The available functions include (within 1 ulp)sin, cos, tan, asin, acos, atan, sincos, sinh, cosh, tanh,\n    asinh, acosh, atanh, log, log2, log10, log1p, ilogb, exp, exp2, exp10, expm1, ldexp, cbrt, pow\n ```\n\nFaster variants (within 3 ulp)\n ```julia\nsin_fast, cos_fast, tan_fast, sincos_fast, asin_fast, acos_fast, atan_fast, atan2_fast, log_fast, cbrt_fast"
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "The trigonometric functions are tested to return values with specified accuracy when the argument is within the following range:Double (Float64) precision trigonometric functions : [-1e+14, 1e+14]\nSingle (Float32) precision trigonometric functions : [-39000, 39000]"
},

{
    "location": "autodocs/#SLEEF._split_exponent",
    "page": "Docstrings",
    "title": "SLEEF._split_exponent",
    "category": "function",
    "text": "A helper function for ldexpk\n\nFirst note that r = (q >> n) << n clears the lowest n bits of q, i.e. returns 2^n where n is the largest integer such that q >= 2^n\n\nFor numbers q less than 2^m the following code does the same as the above snippet     r = ( (q>>v + q) >> n - q>>v ) << n For numbers larger than or equal to 2^v this subtracts 2^n from q for q>>n times.\n\nThe function returns q(input) := q(output) + offset*r\n\nIn the code for ldexpk we actually use     m = ( (m>>n + m) >> n -  m>>m ) << (n-2). So that x has to be multplied by u four times x = x*u*u*u*u to put the value  of the offset exponent amount back in.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.acos",
    "page": "Docstrings",
    "title": "SLEEF.acos",
    "category": "function",
    "text": "acos(x)\n\nCompute the inverse cosine of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.acos_fast",
    "page": "Docstrings",
    "title": "SLEEF.acos_fast",
    "category": "function",
    "text": "acos_fast(x)\n\nCompute the inverse cosine of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.acosh",
    "page": "Docstrings",
    "title": "SLEEF.acosh",
    "category": "function",
    "text": "acosh(x)\n\nCompute the inverse hyperbolic cosine of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.asin",
    "page": "Docstrings",
    "title": "SLEEF.asin",
    "category": "function",
    "text": "asin(x)\n\nCompute the inverse sine of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.asin_fast",
    "page": "Docstrings",
    "title": "SLEEF.asin_fast",
    "category": "function",
    "text": "asin_fast(x)\n\nCompute the inverse sine of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.asinh",
    "page": "Docstrings",
    "title": "SLEEF.asinh",
    "category": "function",
    "text": "asinh(x)\n\nCompute the inverse hyperbolic sine of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.atan",
    "page": "Docstrings",
    "title": "SLEEF.atan",
    "category": "function",
    "text": "atan(x)\n\nCompute the inverse tangent of x, where the output is in radians.\n\n\n\n\n\natan(x, y)\n\nCompute the inverse tangent of x/y, using the signs of both x and y to determine the quadrant of the return value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.atan_fast",
    "page": "Docstrings",
    "title": "SLEEF.atan_fast",
    "category": "function",
    "text": "atan_fast(x)\n\nCompute the inverse tangent of x, where the output is in radians.\n\n\n\n\n\natan2_fast(x, y)\n\nCompute the inverse tangent of x/y, using the signs of both x and y to determine the quadrant of the return value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.atanh",
    "page": "Docstrings",
    "title": "SLEEF.atanh",
    "category": "function",
    "text": "atanh(x)\n\nCompute the inverse hyperbolic tangent of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.cos",
    "page": "Docstrings",
    "title": "SLEEF.cos",
    "category": "function",
    "text": "cos(x)\n\nCompute the cosine of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.cos_fast",
    "page": "Docstrings",
    "title": "SLEEF.cos_fast",
    "category": "function",
    "text": "cos_fast(x)\n\nCompute the cosine of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.cosh",
    "page": "Docstrings",
    "title": "SLEEF.cosh",
    "category": "function",
    "text": "cosh(x)\n\nCompute hyperbolic cosine of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.exp",
    "page": "Docstrings",
    "title": "SLEEF.exp",
    "category": "function",
    "text": "exp(x)\n\nCompute the base-e exponential of x, that is eˣ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.exp10",
    "page": "Docstrings",
    "title": "SLEEF.exp10",
    "category": "function",
    "text": "exp10(x)\n\nCompute the base-10 exponential of x, that is 10ˣ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.exp2",
    "page": "Docstrings",
    "title": "SLEEF.exp2",
    "category": "function",
    "text": "exp2(x)\n\nCompute the base-2 exponential of x, that is 2ˣ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.expm1",
    "page": "Docstrings",
    "title": "SLEEF.expm1",
    "category": "function",
    "text": "expm1(x)\n\nCompute eˣ- 1 accurately for small values of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.hypot",
    "page": "Docstrings",
    "title": "SLEEF.hypot",
    "category": "function",
    "text": "hypot(x,y)\n\nCompute the hypotenuse \\sqrt{x^2+y^2} avoiding overflow and underflow.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.ilogb",
    "page": "Docstrings",
    "title": "SLEEF.ilogb",
    "category": "function",
    "text": "ilogb(x)\n\nReturns the integral part of the logarithm of abs(x), using base 2 for the logarithm. In other words, this computes the binary exponent of x such that\n\nx = significand × 2^exponent,\n\nwhere significand ∈ [1, 2).\n\nExceptional cases (where Int is the machine wordsize)\nx = 0    returns FP_ILOGB0\nx = ±Inf  returns INT_MAX\nx = NaN  returns FP_ILOGBNAN\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.ilogbk",
    "page": "Docstrings",
    "title": "SLEEF.ilogbk",
    "category": "function",
    "text": "ilogbk(x) -> Int\n\nReturns the integral part of the logarithm of |x|, using 2 as base for the logarithm; in other words this returns the binary exponent of x so that\n\nx = significand × 2^exponent\n\nwhere significand ∈ [1, 2).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.ldexp",
    "page": "Docstrings",
    "title": "SLEEF.ldexp",
    "category": "function",
    "text": "ldexp(a, n)\n\nComputes a × 2^n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.ldexpk",
    "page": "Docstrings",
    "title": "SLEEF.ldexpk",
    "category": "function",
    "text": "ldexpk(a, n)\n\nComputes a × 2^n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.log",
    "page": "Docstrings",
    "title": "SLEEF.log",
    "category": "function",
    "text": "log(x)\n\nCompute the natural logarithm of x. The inverse of the natural logarithm is the natural expoenential function exp(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.log10",
    "page": "Docstrings",
    "title": "SLEEF.log10",
    "category": "function",
    "text": "log10(x)\n\nReturns the base 10 logarithm of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.log1p",
    "page": "Docstrings",
    "title": "SLEEF.log1p",
    "category": "function",
    "text": "log1p(x)\n\nAccurately compute the natural logarithm of 1+x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.log2",
    "page": "Docstrings",
    "title": "SLEEF.log2",
    "category": "function",
    "text": "log2(x)\n\nReturns the base 2 logarithm of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.log_fast",
    "page": "Docstrings",
    "title": "SLEEF.log_fast",
    "category": "function",
    "text": "log_fast(x)\n\nCompute the natural logarithm of x. The inverse of the natural logarithm is the natural expoenential function exp(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.pow",
    "page": "Docstrings",
    "title": "SLEEF.pow",
    "category": "function",
    "text": "pow(x, y)\n\nExponentiation operator, returns x raised to the power y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.sin",
    "page": "Docstrings",
    "title": "SLEEF.sin",
    "category": "function",
    "text": "sin(x)\n\nCompute the sine of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.sin_fast",
    "page": "Docstrings",
    "title": "SLEEF.sin_fast",
    "category": "function",
    "text": "sin_fast(x)\n\nCompute the sine of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.sincos",
    "page": "Docstrings",
    "title": "SLEEF.sincos",
    "category": "function",
    "text": "sincos(x)\n\nCompute the sin and cosine of x simultaneously, where the output is in radians, returning a tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.sincos_fast",
    "page": "Docstrings",
    "title": "SLEEF.sincos_fast",
    "category": "function",
    "text": "sincos_fast(x)\n\nCompute the sin and cosine of x simultaneously, where the output is in radians, returning a tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.sinh",
    "page": "Docstrings",
    "title": "SLEEF.sinh",
    "category": "function",
    "text": "sinh(x)\n\nCompute hyperbolic sine of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.tan",
    "page": "Docstrings",
    "title": "SLEEF.tan",
    "category": "function",
    "text": "tan(x)\n\nCompute the tangent of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.tan_fast",
    "page": "Docstrings",
    "title": "SLEEF.tan_fast",
    "category": "function",
    "text": "tan_fast(x)\n\nCompute the tangent of x, where the output is in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SLEEF.tanh",
    "page": "Docstrings",
    "title": "SLEEF.tanh",
    "category": "function",
    "text": "tanh(x)\n\nCompute hyperbolic tangent of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SLEEF.DoubleSLEEF.FMA_FASTSLEEF.FP_ILOGB0SLEEF.FP_ILOGBNANSLEEF.INT_MAXSLEEF.L10LSLEEF.L10USLEEF.L2LSLEEF.L2USLEEF.M1SQRT2SLEEF.M2P13SLEEF.M2P23SLEEF.MD2P13SLEEF.MD2P23SLEEF.MDLN10ESLEEF.MDLN2SLEEF.MDLN2ESLEEF.MDPISLEEF.MDPI2SLEEF.MLN2SLEEF.MLN2ESLEEF.MLOG10_2SLEEF.MSQRT2SLEEF.M_1_PISLEEF.M_2_PISLEEF.M_2_PI_HSLEEF.M_2_PI_LSLEEF.M_4_PISLEEF.M_PISLEEF.PI_2SLEEF.PI_4SLEEF.PI_ASLEEF.PI_BSLEEF.PI_CSLEEF.PI_DSLEEF.PI_XDSLEEF.PI_XESLEEF.SLEEFSLEEF.SQRT_MAXSLEEF.TRIG_MAXSLEEF._signSLEEF._split_exponentSLEEF._sqrtSLEEF.acosSLEEF.acos_fastSLEEF.acoshSLEEF.asinSLEEF.asin_fastSLEEF.asinhSLEEF.atanSLEEF.atan2_fastSLEEF.atan2kSLEEF.atan2k_fastSLEEF.atan2k_fast_kernelSLEEF.atan2k_kernelSLEEF.atan_fastSLEEF.atan_fast_kernelSLEEF.atanhSLEEF.cbrtSLEEF.cbrt_fastSLEEF.cbrt_kernelSLEEF.cosSLEEF.cos_fastSLEEF.coshSLEEF.daddSLEEF.dadd2SLEEF.ddivSLEEF.dmulSLEEF.dnormalizeSLEEF.drecSLEEF.dsqrtSLEEF.dsquSLEEF.dsubSLEEF.dsub2SLEEF.evalSLEEF.expSLEEF.exp10SLEEF.exp10_kernelSLEEF.exp2SLEEF.exp2_kernelSLEEF.exp_kernelSLEEF.expkSLEEF.expk2SLEEF.expk2_kernelSLEEF.expk_kernelSLEEF.expm1SLEEF.float2integerSLEEF.hypotSLEEF.ilogbSLEEF.ilogb2kSLEEF.ilogbkSLEEF.includeSLEEF.integer2floatSLEEF.is_fma_fastSLEEF.isnegzeroSLEEF.isninfSLEEF.ispinfSLEEF.ldexpSLEEF.ldexp2kSLEEF.ldexp3kSLEEF.ldexpkSLEEF.logSLEEF.log10SLEEF.log1pSLEEF.log2SLEEF.log_fastSLEEF.log_fast_kernelSLEEF.log_kernelSLEEF.logkSLEEF.logk2SLEEF.logk2_kernelSLEEF.logk_kernelSLEEF.max_expSLEEF.max_exp10SLEEF.max_exp2SLEEF.max_expm1SLEEF.min_expSLEEF.min_exp10SLEEF.min_exp2SLEEF.min_expm1SLEEF.over_log1pSLEEF.over_schSLEEF.over_thSLEEF.powSLEEF.pow2iSLEEF.scaleSLEEF.sinSLEEF.sin_fastSLEEF.sincosSLEEF.sincos_a_kernelSLEEF.sincos_b_kernelSLEEF.sincos_fastSLEEF.sincos_fast_kernelSLEEF.sincos_kernelSLEEF.sinhSLEEF.split_exponentSLEEF.splitprecSLEEF.tanSLEEF.tan_fastSLEEF.tan_fast_kernelSLEEF.tan_kernelSLEEF.tanhSLEEF.threshold_exponentSLEEF.truncloSLEEF.under_atan2SLEEF.under_expk"
},

]}
