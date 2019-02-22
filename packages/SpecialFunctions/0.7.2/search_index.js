var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Special-Functions-1",
    "page": "Home",
    "title": "Special Functions",
    "category": "section",
    "text": "This package provides a comprehensive collection of special functions based on the OpenSpecFun and OpenLibm libraries.Function Description\nerf(x) error function at x\nerfc(x) complementary error function, i.e. the accurate version of 1-erf(x) for large x\nerfinv(x) inverse function to erf()\nerfcinv(x) inverse function to erfc()\nerfi(x) imaginary error function defined as -im * erf(x * im), where im is the imaginary unit\nerfcx(x) scaled complementary error function, i.e. accurate exp(x^2) * erfc(x) for large x\ndawson(x) scaled imaginary error function, a.k.a. Dawson function, i.e. accurate exp(-x^2) * erfi(x) * sqrt(pi) / 2 for large x\nsinint(x) sine integral at x\ncosint(x) cosine integral at x\ndigamma(x) digamma function (i.e. the derivative of lgamma at x)\neta(x) Dirichlet eta function at x\nzeta(x) Riemann zeta function at x\nairyai(z) Airy Ai function at z\nairyaiprime(z) derivative of the Airy Ai function at z\nairybi(z) Airy Bi function at z\nairybiprime(z) derivative of the Airy Bi function at z\nairyaix(z), airyaiprimex(z), airybix(z), airybiprimex(z) scaled Airy Ai function and kth derivatives at z\nbesselj(nu,z) Bessel function of the first kind of order nu at z\nbesselj0(z) besselj(0,z)\nbesselj1(z) besselj(1,z)\nbesseljx(nu,z) scaled Bessel function of the first kind of order nu at z\nbessely(nu,z) Bessel function of the second kind of order nu at z\nbessely0(z) bessely(0,z)\nbessely1(z) bessely(1,z)\nbesselyx(nu,z) scaled Bessel function of the second kind of order nu at z\nbesselh(nu,k,z) Bessel function of the third kind (a.k.a. Hankel function) of order nu at z; k must be either 1 or 2\nhankelh1(nu,z) besselh(nu, 1, z)\nhankelh1x(nu,z) scaled besselh(nu, 1, z)\nhankelh2(nu,z) besselh(nu, 2, z)\nhankelh2x(nu,z) scaled besselh(nu, 2, z)\nbesseli(nu,z) modified Bessel function of the first kind of order nu at z\nbesselix(nu,z) scaled modified Bessel function of the first kind of order nu at z\nbesselk(nu,z) modified Bessel function of the second kind of order nu at z\nbesselkx(nu,z) scaled modified Bessel function of the second kind of order nu at z\ngamma(x) gamma function at x\nlgamma(x) accurate log(gamma(x)) for large x\nlfact(x) accurate log(factorial(x)) for large x; same as lgamma(x+1) for x > 1, zero otherwise\nbeta(x,y) beta function at x,y\nlbeta(x,y) accurate log(beta(x,y)) for large x or y"
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "The package is available for Julia versions 0.5 and up. To install it, runPkg.add(\"SpecialFunctions\")from the Julia REPL."
},

{
    "location": "#Note-1",
    "page": "Home",
    "title": "Note",
    "category": "section",
    "text": "Prior to Julia 0.6, most of these functions were available in Julia\'s Base module. Because of this, the symbols from this package are not exported on Julia 0.5 to avoid name conflicts. In this case, the symbols will need to be explicitly imported or called with the prefix SpecialFunctions. This is not necessary for Julia versions 0.6 and later.On Julia 0.7, openspecfun is not build as part of Julia. Thus for Julia versions 0.7 and later, installing this package downloads openspecfun. Binaries of openspecfun are available for macOS, Windows, and Linux (glibc >= 2.6). Other systems will need to build the library from source. You can force a build from source by setting an environment variable called JULIA_SPECIALFUNCTIONS_BUILD_SOURCE equal to true before running Pkg.build. This ensures that the library is built locally from source, even if binaries are available. Doing this requires a C compiler (Clang on macOS and FreeBSD, GCC elsewhere) and gfortran. If you always want to build this library from source, consider addingENV[\"JULIA_SPECIALFUNCTIONS_BUILD_SOURCE\"] = \"true\"to your .juliarc.jl file."
},

{
    "location": "special/#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "special/#Functions-1",
    "page": "Functions",
    "title": "Functions",
    "category": "section",
    "text": "CurrentModule = SpecialFunctionsSpecialFunctions.erf\nSpecialFunctions.erfc\nSpecialFunctions.erfcx\nSpecialFunctions.erfi\nSpecialFunctions.dawson\nSpecialFunctions.erfinv\nSpecialFunctions.erfcinv\nSpecialFunctions.sinint\nSpecialFunctions.cosint\nSpecialFunctions.digamma\nSpecialFunctions.invdigamma\nSpecialFunctions.trigamma\nSpecialFunctions.polygamma\nSpecialFunctions.airyai\nSpecialFunctions.airyaiprime\nSpecialFunctions.airyaix\nSpecialFunctions.airyaiprimex\nSpecialFunctions.airybi\nSpecialFunctions.airybiprime\nSpecialFunctions.airybix\nSpecialFunctions.airybiprimex\nSpecialFunctions.besselj0\nSpecialFunctions.besselj1\nSpecialFunctions.besselj\nSpecialFunctions.besseljx\nSpecialFunctions.bessely0\nSpecialFunctions.bessely1\nSpecialFunctions.bessely\nSpecialFunctions.besselyx\nSpecialFunctions.hankelh1\nSpecialFunctions.hankelh1x\nSpecialFunctions.hankelh2\nSpecialFunctions.hankelh2x\nSpecialFunctions.besselh\nSpecialFunctions.besselhx\nSpecialFunctions.besseli\nSpecialFunctions.besselix\nSpecialFunctions.besselk\nSpecialFunctions.besselkx\nSpecialFunctions.eta\nSpecialFunctions.zeta\nSpecialFunctions.gamma\nSpecialFunctions.lgamma\nSpecialFunctions.lfact\nSpecialFunctions.beta\nSpecialFunctions.lbeta"
},

]}
