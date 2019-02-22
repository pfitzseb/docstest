var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ArgCheck-1",
    "page": "Readme",
    "title": "ArgCheck",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"ArgCheck\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ArgCheck\n\nfunction f(x,y)\n    @argcheck cos(x) < sin(y)\n    # doit\nend\n\nf(0,0)\nERROR: ArgumentError: cos(x) < sin(y) must hold. Got\ncos(x) => 1.0\nsin(y) => 0.0You can also customize the error:@argcheck k > n\n@argcheck size(A) == size(B) DimensionMismatch\n@argcheck det(A) < 0 DomainError()\n@argcheck false MyCustomError(my, args...)"
},

{
    "location": "autodocs/#ArgCheck.@argcheck",
    "page": "Docstrings",
    "title": "ArgCheck.@argcheck",
    "category": "macro",
    "text": "@argcheck\n\nCheck invariants on function arguments and produce a nice exception message if they are violated. Usage is as follows:\n\nfunction myfunction(k,n,A,B)\n    @argcheck k > n\n    @argcheck size(A) == size(B) DimensionMismatch\n    @argcheck det(A) < 0 DomainError()\n    # doit\nend\n\nSee also @check.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArgCheck.@check",
    "page": "Docstrings",
    "title": "ArgCheck.@check",
    "category": "macro",
    "text": "@check\n\nCheck that a condition holds and produce a nice exception message, if it does not. Usage is as follows:\n\n@check k > n\n@check size(A) == size(B) DimensionMismatch\n@check det(A) < 0 DomainError()\n\nSee also @argcheck.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ArgCheck.@argcheckArgCheck.@checkArgCheck.AbstractCheckFlavorArgCheck.AbstractCodeFlavorArgCheck.AbstractErrorInfoArgCheck.ArgCheckArgCheck.ArgCheckFlavorArgCheck.CallErrorInfoArgCheck.CallFlavorArgCheck.CheckErrorArgCheck.CheckFlavorArgCheck.CheckerArgCheck.ComparisonErrorInfoArgCheck.ComparisonFlavorArgCheck.FallbackErrorInfoArgCheck.FallbackFlavorArgCheck.build_errorArgCheck.checkArgCheck.default_exception_typeArgCheck.error_messageArgCheck.evalArgCheck.expr_error_blockArgCheck.fancy_error_messageArgCheck.includeArgCheck.is_simple_callArgCheck.pretty_string"
},

]}
