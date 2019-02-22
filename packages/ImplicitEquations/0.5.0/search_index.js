var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Linux: (Image: Build Status) &nbsp; Windows: (Image: Build Status)"
},

{
    "location": "#ImplicitEquations-1",
    "page": "Readme",
    "title": "ImplicitEquations",
    "category": "section",
    "text": "In a paper, Tupper presents a method for graphing two-dimensional implicit equations and inequalities. This package gives an implementation of the paper\'s basic algorithms to allow the Julia user to naturally represent and easily render graphs of implicit functions and equations.We give one example, others may be viewed as an IJulia notebook (here).The Devils curve is graphed over the default region as follows:using Plots\npyplot()\nusing ImplicitEquations\n\na,b = -1,2\nf(x,y) = y^4 - x^4 + a*y^2 + b*x^2\nplot(f ⩵ 0)  # \\Equal[tab](Image: DevilsCurve)"
},

{
    "location": "autodocs/#ImplicitEquations.GRAPH",
    "page": "Docstrings",
    "title": "ImplicitEquations.GRAPH",
    "category": "function",
    "text": "Main algorithm of Tupper.\n\nBreak region into square regions for each square region, subdivide into 4 regions. For each check if there is no solution, if so add to white. Otherwise, refine the region by repeating until we can\'t subdivide\n\nAt that point, check each pixel-by-pixel region for possible values.\n\nReturn red, black and white vectors of Regions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.I_",
    "page": "Docstrings",
    "title": "ImplicitEquations.I_",
    "category": "function",
    "text": "Screen a value using NaN values. Use as  with f(x,y) = x*y * screen(x > 0)\n\nAlso aliased to I_(x>0)\n\nAn expression like x::OInterval > 0 is not Boolean, but rather a BInterval which allows for a \"MAYBE\" state. As such, a simple ternary operator, like x > 0 ? 1 : NaN won\'t work, to screen values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.Pred",
    "page": "Docstrings",
    "title": "ImplicitEquations.Pred",
    "category": "type",
    "text": "A predicate is defined in terms of a function of two variables, an inquality, and either another function or a real number.  They are conveniently created by the functions Lt, Le, Eq, Neq, Ge, and Gt. The equivalent unicode operators:\n\n≪ (\\ll[tab]),\n≦ (\\leqq[tab]),\n⩵ (\\Equal[tab]),\n≶ (\\lessgtr[tab])  or ≷ (\\gtrless[tab]),\n≧ (\\geqq[tab]),\n≫ (\\leqq[tab]) may also be used.\n\nThe use of Julia\'s usual comparison operators is no longer supported.\n\nTo combine predicates, & and | can be used.\n\nTo negate a predicate, ! is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.Preds",
    "page": "Docstrings",
    "title": "ImplicitEquations.Preds",
    "category": "type",
    "text": "Predicates can be joined together with either & or |. Individual predicates can be negated with !. The parsing rules require the individual predicates to be enclosed with parentheses, as in (f==0) | (g==0).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.asciigraph",
    "page": "Docstrings",
    "title": "ImplicitEquations.asciigraph",
    "category": "function",
    "text": "Function to graph, using ascii characters, a predicate related to a two-dimensional equation, such as f == 0 or f < g, where f and g are functions, e.g., f(x,y) = y - sqrt(x). The positional arguments are L, R, B, T which indicate the x-y range of the  graph of the equation. The keywork arguments W and H indicate the number of pixels to use.\n\nSet offset=0 to see algorithm\n\nA pixel is important, as the graph will color a pixel\n\n\"white\" (e.g., \" \") if no solution exists in the region indicated by the pixel\n\"black\" (e.g., \"x\") if a solution is known to exist in the region\n\"red\" (e.g. \".\") if a solution might exist\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.check_inequality",
    "page": "Docstrings",
    "title": "ImplicitEquations.check_inequality",
    "category": "function",
    "text": "Does this function have a value in the pixel satisfying the inequality? Return TRUE or MAYBE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.compute",
    "page": "Docstrings",
    "title": "ImplicitEquations.compute",
    "category": "function",
    "text": "Compute whether predicate holds in a given region. Returns FALSE, TRUE or MAYBE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.cross_zero",
    "page": "Docstrings",
    "title": "ImplicitEquations.cross_zero",
    "category": "function",
    "text": "Does this function have a zero crossing? Heuristic check.\n\nWe return TRUE or MAYBE. However, that leaves some functions showing too much red in the case where there is no zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.plot_implicit",
    "page": "Docstrings",
    "title": "ImplicitEquations.plot_implicit",
    "category": "constant",
    "text": "Plotting of implicit functions.\n\nAn implicit function or equation is defined in terms of a logical condition and a function of two variables. These produce Predicate objects.\n\nPredicates may be plotted over a specified region, the default begin [-5,5] x [-5,5].\n\nThe algorithm, breaks the region into blocks. The ultimate resolution is given by W=2^n and H=2^m. The algorithm used, due to Tupper, colors region if it knows the predicate is true or false, and otherwise resolves the region into 4 equal-sized subregions and test each subregion again to determine if it is true, false, or still maybe. This repeats until W and H can\'t be subdivided.\n\nThe plotting of a predicate simply plots each block that is knows satisfies the predicate \"black\" and each ambiguous block \"red.\" By taking m and n larger the graphs look less \"blocky\" but take more time to render.\n\nFor text-based plots, the asciigraph function is available.\n\nExamples:\n\nusing Plots, ImplicitEquations\npyplot()\n\na,b = -1,2\nf(x,y) = y^4 - x^4 + a*y^2 + b*x^2\nplot(f == 0)\n\n## trident of Newton\nc,d,e,h = 1,1,1,1\nf(x,y) = x*y\ng(x,y) =c*x^3 + d*x^2 + e*x + h\nplot(eq(f,g), title=\"Trident of Newton\") ## aka f ⩵ g (using Unicode\\Equal[tab])\n\n## inequality\nf(x,y)= (y-5)*cos(4*sqrt((x-4)^2 + y^2))\ng(x,y) = x*sin(2*sqrt(x^2 + y^2))\nr = f < g\nplot(r, (-10, 10), (-10, 10), N=9, M=9)  # (xmin, xmax), (ymin, ymax),\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImplicitEquations.screen",
    "page": "Docstrings",
    "title": "ImplicitEquations.screen",
    "category": "function",
    "text": "Screen a value using NaN values. Use as  with f(x,y) = x*y * screen(x > 0)\n\nAlso aliased to I_(x>0)\n\nAn expression like x::OInterval > 0 is not Boolean, but rather a BInterval which allows for a \"MAYBE\" state. As such, a simple ternary operator, like x > 0 ? 1 : NaN won\'t work, to screen values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ImplicitEquations.BIntervalImplicitEquations.EqImplicitEquations.FALSEImplicitEquations.GRAPHImplicitEquations.GeImplicitEquations.GtImplicitEquations.I_ImplicitEquations.ImplicitEquationsImplicitEquations.LeImplicitEquations.LtImplicitEquations.MAYBEImplicitEquations.NeqImplicitEquations.OIntervalImplicitEquations.PredImplicitEquations.PredicateImplicitEquations.PredsImplicitEquations.RefinePixelsImplicitEquations.RegionImplicitEquations.TRUEImplicitEquations.asciigraphImplicitEquations.break_into_squaresImplicitEquations.check_continuityImplicitEquations.check_inequalityImplicitEquations.computeImplicitEquations.compute_fxyImplicitEquations.cross_zeroImplicitEquations.evalImplicitEquations.fill_bottomImplicitEquations.get_xs_ysImplicitEquations.imag_mapImplicitEquations.includeImplicitEquations.irangeImplicitEquations.linterpImplicitEquations.negate_opImplicitEquations.plot_implicitImplicitEquations.predsImplicitEquations.screenImplicitEquations.xy_regionImplicitEquations.xyrangeImplicitEquations.≦ImplicitEquations.≧ImplicitEquations.≪ImplicitEquations.≫ImplicitEquations.≶ImplicitEquations.≷ImplicitEquations.⩵"
},

]}
