var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FiniteFloats.jl-1",
    "page": "Readme",
    "title": "FiniteFloats.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Floats-with-neither-Infinities-nor-NaNs.-1",
    "page": "Readme",
    "title": "Floats with neither Infinities nor NaNs.",
    "category": "section",
    "text": ""
},

{
    "location": "#Copyright-2018-by-Jeffrey-Sarnoff.-1",
    "page": "Readme",
    "title": "Copyright ©2018 by Jeffrey Sarnoff.",
    "category": "section",
    "text": ""
},

{
    "location": "#This-work-is-released-under-The-MIT-License.-1",
    "page": "Readme",
    "title": "This work is released under The MIT License.",
    "category": "section",
    "text": ""
},

{
    "location": "#[![Build-Status](https://travis-ci.org/JeffreySarnoff/FiniteFloats.jl.svg?branchmaster)](https://travis-ci.org/JeffreySarnoff/FiniteFloats.jl)-1",
    "page": "Readme",
    "title": "(Image: Build Status)",
    "category": "section",
    "text": ""
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": "\nusing FiniteFloats\n\njulia> a = sqrt(Finite64(2))\n1.4142135623730951\n\njulia> typeof(a)\nFinite64\n\njulia> b = Finite32(Inf32)\n3.4028235f38\n\njulia> b == typemax(Finite32)\ntrue"
},

{
    "location": "#Exports-1",
    "page": "Readme",
    "title": "Exports",
    "category": "section",
    "text": ""
},

{
    "location": "#exported-types-1",
    "page": "Readme",
    "title": "exported types",
    "category": "section",
    "text": "Finite64, Finite32, Finite16"
},

{
    "location": "#supported-functions-1",
    "page": "Readme",
    "title": "supported functions",
    "category": "section",
    "text": "In addition to the familiar functions that work with Float64, Float32, Float16,     (comparisions, floating part decompositions, arithmetic, elementary functions)square, cube\nstring, show,    typemax, typemin, realmax, realmin\nsignificand, exponent, precision,   prevfloat, nextfloat, isequal, isless\n(==), (!=), (<), (<=), (>=), (>),   (+), (-), (*), (/), (^)\ninv, div, rem, fld, mod, cld\nround, trunc, ceil, floor (single arg forms)\nabs, signbit, copysign, flipsign, sign,   frexp, ldexp, modf\nmin, max, minmax,   clamp, sqrt, cbrt, hypot\nexp, expm1, exp2, exp10,   log, log1p, log2, log10sin, cos, tan, csc, sec, cot,   asin, acos, atan, acsc, asec, acot\nsinh, cosh, tanh, csch, sech, coth,   asinh, acosh, atanh, acsch, asech, acothsind, cosd, tand, cscd, secd, cotd,   asind, acosd, atand, acscd, asecd, acotd\nrad2deg, deg2rad, mod2pi, rem2pi,sincos, sinc, sinpi, cospi"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> Float64(0) * inv(Float64(0))\nNaN\n\njulia> Finite64(0) * inv(Finite64(0))\n0.0"
},

]}
