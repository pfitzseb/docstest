var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ChangePrecision-1",
    "page": "Readme",
    "title": "ChangePrecision",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)This package makes it easy to change the \"default\" precision of a large body of Julia code, simply by prefixing it with the @changeprecision T expression macro, for example:@changeprecision Float32 begin\n    x = 7.3\n    y = 1/3\n    z = rand() .+ ones(3,4)\nendIn particular, floating-point literals like 7.3 are reinterpreted as the requested type Float32, operations like / that convert integer arguments to Float64 instead convert to Float32, and random-number or matrix constructors like rand and ones default to Float32 instead of Float64. Several other cases are handled as well: arithmetic with irrational constants like pi, linear-algebra functions (like inv) on integer matrices, etcetera.The @changeprecision transformations are applied recursively to any include(filename) call, so that you can simply do @changeprecision Float32 include(\"mycode.jl\") to run a whole script mycode.jl in Float32 default precision.Code that explicitly specifies a type, e.g. rand(Float64), is unaffected by @changeprecision.Note that only expressions that explicitly appear in the expression (or code inserted by include) are converted by @changeprecision.  Code hidden inside external functions that are called is not affected."
},

{
    "location": "autodocs/#ChangePrecision.@changeprecision",
    "page": "Docstrings",
    "title": "ChangePrecision.@changeprecision",
    "category": "macro",
    "text": "@changeprecision T expression\n\nChange the \"default\" precision in the given expression to the floating-point type T.\n\nThis changes floating-point literals, integer expressions like 1/3, random-number functions like rand, and matrix constructors like ones to default to the new type T.\n\nFor example,\n\n@changeprecision Float32 begin\n    x = 7.3\n    y = 1/3\n    z = rand() .+ ones(3,4)\nend\n\nuses Float32 precision for all of the expressions in begin ... end.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChangePrecision.ChangePrecision",
    "page": "Docstrings",
    "title": "ChangePrecision.ChangePrecision",
    "category": "module",
    "text": "The ChangePrecision module exports a macro @changeprecision T expression that changes the \"default\" floating-point precision in a given expression to a new floating-point type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ChangePrecision.*ChangePrecision.+ChangePrecision.-ChangePrecision./ChangePrecision.@changeprecisionChangePrecision.ChangePrecisionChangePrecision.HWIntChangePrecision.IntLikeChangePrecision.IntRatLikeChangePrecision.PromotableChangePrecision.PromotableNoRatChangePrecision.RatLikeChangePrecision.\\ChangePrecision.^ChangePrecision.absChangePrecision.acosChangePrecision.acosdChangePrecision.acoshChangePrecision.acotChangePrecision.acotdChangePrecision.acothChangePrecision.acscChangePrecision.acscdChangePrecision.acschChangePrecision.angleChangePrecision.asecChangePrecision.asecdChangePrecision.asechChangePrecision.asinChangePrecision.asindChangePrecision.asinhChangePrecision.atanChangePrecision.atan2ChangePrecision.atandChangePrecision.atanhChangePrecision.binaryfuncsChangePrecision.bunchkaufmanChangePrecision.cbrtChangePrecision.changefuncsChangePrecision.changeprecisionChangePrecision.choleskyChangePrecision.cisChangePrecision.complexfuncsChangePrecision.condChangePrecision.condskeelChangePrecision.corChangePrecision.cosChangePrecision.coscChangePrecision.cosdChangePrecision.coshChangePrecision.cospiChangePrecision.cotChangePrecision.cotdChangePrecision.cothChangePrecision.covChangePrecision.cscChangePrecision.cscdChangePrecision.cschChangePrecision.deg2radChangePrecision.detChangePrecision.eigenChangePrecision.eigfactChangePrecision.eigmaxChangePrecision.eigminChangePrecision.eigvalsChangePrecision.eigvecsChangePrecision.esymChangePrecision.evalChangePrecision.expChangePrecision.exp10ChangePrecision.exp2ChangePrecision.expm1ChangePrecision.factorizeChangePrecision.floatChangePrecision.hessenbergChangePrecision.hypotChangePrecision.includeChangePrecision.intfuncsChangePrecision.invChangePrecision.ldltChangePrecision.linalgfuncsChangePrecision.literal_powChangePrecision.logChangePrecision.log10ChangePrecision.log1pChangePrecision.log2ChangePrecision.logabsdetChangePrecision.logdetChangePrecision.lqChangePrecision.luChangePrecision.lyapChangePrecision.matfuncsChangePrecision.meanChangePrecision.medianChangePrecision.normChangePrecision.normalizeChangePrecision.nullspaceChangePrecision.onesChangePrecision.opnormChangePrecision.pinvChangePrecision.qrChangePrecision.rad2degChangePrecision.randChangePrecision.randexpChangePrecision.randfuncsChangePrecision.randnChangePrecision.schurChangePrecision.secChangePrecision.secdChangePrecision.sechChangePrecision.sinChangePrecision.sincChangePrecision.sindChangePrecision.sinhChangePrecision.sinpiChangePrecision.sqrtChangePrecision.statfuncsChangePrecision.stdChangePrecision.stdmChangePrecision.svdChangePrecision.svdvalsChangePrecision.sylvesterChangePrecision.tanChangePrecision.tandChangePrecision.tanhChangePrecision.tofloatChangePrecision.varChangePrecision.varmChangePrecision.zerosChangePrecision.√ChangePrecision.∛"
},

]}
