var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<p align=\"center\">   <img src=\"./docs/src/assets/logo.png\" alt=\"SyntaxTree.jl\"/> </p>"
},

{
    "location": "#SyntaxTree.jl-1",
    "page": "Readme",
    "title": "SyntaxTree.jl",
    "category": "section",
    "text": "Toolset for modifying Julia AST(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package is a general purpose toolkit intended for manipulations of Julia\'s AST. It contains methods like linefilter!, callcount, genfun, and exprval. Certain useful expression transformations are also possible, such as the SyntaxTree.sub method to convert scalar values to a single type, SyntaxTree.abs to apply Base.abs to all scalars and operations, and also SyntaxTree.alg to introduce an algebraic machine epsilon bound at each operation.The exprval method to compute the expression value is defined in \"Optimal polynomial characteristic methods\" by Michael Reed in 2018 with the supporting expravg and exprdev methods to compute scalar averages and standard deviations for expressions. The expression value can be used to order equivalent forms of an expression, where lower values are more optimal and computationally efficient."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Recursively filter out :LineNumberNode from Expr objects:julia> expr = quote\n           x = 7\n           y = x^2\n       end\nquote\n    #= REPL[3]:2 =#\n    x = 7\n    #= REPL[3]:3 =#\n    y = x ^ 2\nend\n\njulia> linefilter!(expr)\nquote\n    x = 7\n    y = x ^ 2\nendSubstitute numerical values with type conversion:julia> SyntaxTree.sub(Float64,:(2x^2-1//2))\n:(2.0 * x ^ 2 - 1.0 // 2.0)Apply abs to an expression recursively:julia> SyntaxTree.abs(:(2x^2-1//2))\n:(2 * x ^ 2 + 1 // 2)Recursively insert a machine epsilon bound (1+ϵ) per call:julia> SyntaxTree.alg(:(2x^2-1//2))\n:((1 + ϵ) * ((1 + ϵ) * (2 * ((1 + ϵ) * x ^ 2)) - (1 + ϵ) * 1 // 2))Return an anonymous function given expr and argsjulia> a = @genfun x^2-y^2 x y\n#3 (generic function with 1 method)\n\njulia> a(5,4)\n9\n\njulia> b = genfun(:(x^2-y^2),[:x,:y])\n#1 (generic function with 1 method)\n\njulia> b(5,4)\n9Obtain the number of call operations in an expression:julia> callcount(:(2x^2-1//2))\n4Recursively obtain the number of scalars in an expression, the average of those scalars, the number of non-trivial exponents in the expression, and the average of the exponents.julia> SyntaxTree.expravg(:(2x^2-1//2))\n(3, 0.7954314537066303, 1, 2.0)Get the standard deviation of the logarithm of the scalars in an expression:julia> SyntaxTree.exprdev(:(2x^2-1//2))\n0.22136580504842668Compute the expression value and other characteristics:julia> SyntaxTree.exprval(:(2x^2-1//2))\n(4.89405674908118, 4, 0.4704952763295575, 0.7954314537066303, 2.0)The first value is the expression value, the second is the number of operations, the third is the standard deviation of the logarithms of the scalars, the fourth is the average of the logarithms of the scalars, and the fifth is the average of the exponents."
},

{
    "location": "autodocs/#SyntaxTree.@genfun",
    "page": "Docstrings",
    "title": "SyntaxTree.@genfun",
    "category": "macro",
    "text": "@genfun(expr, args)\n\nReturns an anonymous function based on the given expr and args.\n\njulia> @genfun x^2+y^2 x y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.abs",
    "page": "Docstrings",
    "title": "SyntaxTree.abs",
    "category": "function",
    "text": "SyntaxTree.abs(expr)\n\nApply abs to the expression recursively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.alg",
    "page": "Docstrings",
    "title": "SyntaxTree.alg",
    "category": "function",
    "text": "alg(expr,f=:(1+ϵ))\n\nRecursively insert a machine epsilon bound (1+ϵ) per call in expr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.callcount",
    "page": "Docstrings",
    "title": "SyntaxTree.callcount",
    "category": "function",
    "text": "callcount(expr)\n\nReturns a count of the call operations in expr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.expravg",
    "page": "Docstrings",
    "title": "SyntaxTree.expravg",
    "category": "function",
    "text": "expravg(expr)\n\nRecursively obtains the number of scalars in an expression, the average of those scalars logarithms, the number of non-trivial exponents in the expression, and the average of the exponents.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.exprdev",
    "page": "Docstrings",
    "title": "SyntaxTree.exprdev",
    "category": "function",
    "text": "exprdev(expr)\n\nReturns the standard deviation of the logarithm of the scalars in an expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.exprval",
    "page": "Docstrings",
    "title": "SyntaxTree.exprval",
    "category": "function",
    "text": "exprval(expr)\n\nReturns the expression value and other characteristics as defined in \"Optimal polynomial characteristic methods\" by Michael Reed in 2018. This value can be used to order polynomial forms, with lower values being more optimal and efficient for computation.\n\nThe first value is the expression value, the second is the number of operations, the third is the standard deviation of the logarithms of the scalars, the fourth is the average of the logarithms of the scalars, and the fifth is the average of the exponents.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.genfun",
    "page": "Docstrings",
    "title": "SyntaxTree.genfun",
    "category": "function",
    "text": "genfun(expr, args)\n\nReturns an anonymous function based on the given expr and args.\n\njulia> genfun(:(x^2+y^2),[:x,:y])\njulia> genfun(:(x^2+y^2),(:x,:y))\njulia> genfun(:(x^2+y^2),:x,:y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.linefilter!",
    "page": "Docstrings",
    "title": "SyntaxTree.linefilter!",
    "category": "function",
    "text": "linefilter!(::Expr)\n\nRecursively filters out :LineNumberNode from Expr objects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SyntaxTree.sub",
    "page": "Docstrings",
    "title": "SyntaxTree.sub",
    "category": "function",
    "text": "sub(T::DataType,expr::Expr)\n\nMake a substitution to convert numerical values inside an Expr to type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SyntaxTree.@genfunSyntaxTree.SyntaxTreeSyntaxTree.absSyntaxTree.algSyntaxTree.callcountSyntaxTree.evalSyntaxTree.expravgSyntaxTree.exprdevSyntaxTree.exprvalSyntaxTree.genfunSyntaxTree.includeSyntaxTree.linefilterSyntaxTree.linefilter!SyntaxTree.sub"
},

]}
