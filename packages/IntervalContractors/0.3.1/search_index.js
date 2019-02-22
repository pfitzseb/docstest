var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IntervalContractors-1",
    "page": "Readme",
    "title": "IntervalContractors",
    "category": "section",
    "text": "[![travis badge][travisbadge]][travisurl] [![appveyor badge][appveyorbadge]][appveyorurl] [![codecov badge][codecovbadge]][codecovurl]"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "[STABLE][documenter_stable] &mdash; most recently tagged version of the documentation.\n[LATEST][documenter_latest] &mdash; in-development version of the documentation.[travisbadge]: https://travis-ci.org/JuliaIntervals/IntervalContractors.jl.svg?branch=master [travisurl]: https://travis-ci.org/JuliaIntervals/IntervalContractors.jl[appveyorbadge]: https://ci.appveyor.com/api/projects/status/github/JuliaIntervals/IntervalContractors.jl?svg=true&branch=master [appveyorurl]: https://ci.appveyor.com/project/JuliaIntervals/intervalcontractors-jl[codecovbadge]: http://codecov.io/github/JuliaIntervals/IntervalContractors.jl/coverage.svg?branch=master [codecovurl]: http://codecov.io/github/JuliaIntervals/IntervalContractors.jl?branch=master[documenterstable]: https://juliaintervals.github.io/IntervalContractors.jl/stable [documenterlatest]: https://juliaintervals.github.io/IntervalContractors.jl/latest"
},

{
    "location": "#About-IntervalContractors.jl-1",
    "page": "Readme",
    "title": "About IntervalContractors.jl",
    "category": "section",
    "text": "IntervalContractors.jl provides contractors and reverse functions (also called backward functions or relational functions) for interval arithmetic."
},

{
    "location": "#Reverse-functions-1",
    "page": "Readme",
    "title": "Reverse functions",
    "category": "section",
    "text": "The reverse function of a function f calculates the (interval hull of) its inverse function, f⁻¹.For example, sin_rev(Y::Interval, X::Interval) calculates the (interval hull of) those x ∈ X such that sin(x) ∈ Y. This can also be thought of as an inverse function, calculating X_new := sin⁻¹(Y) ∩ X. The return value is (Y, X_new).Functions such as mul_rev(C::Interval, A::Interval, B::Interval) take three arguments, and correspond to C = A * B; they return (C, A_new, B_new), with A_new and B_new similarly defined to be the corresponding inverse images of the multiplication operator in each component."
},

{
    "location": "#Contractors-1",
    "page": "Readme",
    "title": "Contractors",
    "category": "section",
    "text": "Functions like sin! (currently non-exported) are contractors for the set {(x, y): y = sin(x)}.The list of available functions may be found in the documentation.These functions are designed to be used inside the IntervalConstraintProgramming.jl library, and (eventually) to satisfy the section on reverse functions in the IEEE-1788 2015 standard on interval arithmetic."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "David P. Sanders,Departamento de Física, Facultad de Ciencias, Universidad Nacional Autónoma de México (UNAM)"
},

{
    "location": "#References:-1",
    "page": "Readme",
    "title": "References:",
    "category": "section",
    "text": "Applied Interval Analysis, Luc Jaulin, Michel Kieffer, Olivier Didrit, Eric Walter (2001)\nIBEX library documentation: http://www.ibex-lib.org/doc/interval.html#backward-arithmetic"
},

{
    "location": "#Acknowledements-1",
    "page": "Readme",
    "title": "Acknowledements",
    "category": "section",
    "text": "Financial support is acknowledged from DGAPA-UNAM PAPIIT grant IN-117117. The author thanks Luc Jaulin and Jordan Ninin for the IAMOOC online course, which introduced him to this subject, and Zenna Tavares for a helpful conversation."
},

{
    "location": "autodocs/#IntervalContractors.abs_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.abs_rev",
    "category": "function",
    "text": "Reverse abs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.acos_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.acos_rev",
    "category": "function",
    "text": "Reverse acos.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.acosh_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.acosh_rev",
    "category": "function",
    "text": "Reverse function for acosh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.asin_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.asin_rev",
    "category": "function",
    "text": "Reverse asin.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.asinh_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.asinh_rev",
    "category": "function",
    "text": "Reverse function for asinh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.atan_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.atan_rev",
    "category": "function",
    "text": "Reverse atan.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.atanh_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.atanh_rev",
    "category": "function",
    "text": "Reverse function for atanh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.cos!",
    "page": "Docstrings",
    "title": "IntervalContractors.cos!",
    "category": "function",
    "text": "cos!(X::IntervalBox)\n\nContractor for cos. Takes an IntervalBox containing the x and y component intervals. Returns an IntervalBox contracted down to the set y = cos(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.cos_main",
    "page": "Docstrings",
    "title": "IntervalContractors.cos_main",
    "category": "function",
    "text": "Contractor for main branch of cos, from x = 0 to π.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.cos_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.cos_rev",
    "category": "function",
    "text": "cos_rev(y::Interval, x::Interval)\n\nReverse function for cos:\n\nfind the subset of x such that y = cos(x) for the given y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.cosh_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.cosh_rev",
    "category": "function",
    "text": "Reverse function for cosh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.div_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.div_rev",
    "category": "function",
    "text": "Reverse division\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.exp10_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.exp10_rev",
    "category": "function",
    "text": "Reverse function for exp10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.exp2_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.exp2_rev",
    "category": "function",
    "text": "Reverse function for exp2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.exp_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.exp_rev",
    "category": "function",
    "text": "Reverse function for exp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.expm1_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.expm1_rev",
    "category": "function",
    "text": "Reverse function for expm1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.inv_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.inv_rev",
    "category": "function",
    "text": "Reverse inverse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.log10_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.log10_rev",
    "category": "function",
    "text": "Reverse function for log10: y = log10(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.log1p_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.log1p_rev",
    "category": "function",
    "text": "Reverse function for log1p: y = log1p(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.log2_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.log2_rev",
    "category": "function",
    "text": "Reverse function for log2: y = log2(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.log_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.log_rev",
    "category": "function",
    "text": "Reverse function for log: y = log(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.max_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.max_rev",
    "category": "function",
    "text": "Reverse max\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.min_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.min_rev",
    "category": "function",
    "text": "Reverse min\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.minus_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.minus_rev",
    "category": "function",
    "text": "Reverse minus\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.mul_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.mul_rev",
    "category": "function",
    "text": "Reverse multiplication\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.periodise",
    "page": "Docstrings",
    "title": "IntervalContractors.periodise",
    "category": "function",
    "text": "Periodize the contractor C\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.plus_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.plus_rev",
    "category": "function",
    "text": "Reverse plus\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.power_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.power_rev",
    "category": "function",
    "text": "Reverse power\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.reflect_x",
    "page": "Docstrings",
    "title": "IntervalContractors.reflect_x",
    "category": "function",
    "text": "Reflect in mirror at position x_mirror\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.reverse_operations",
    "page": "Docstrings",
    "title": "IntervalContractors.reverse_operations",
    "category": "constant",
    "text": "Dictionary mapping functions to their reverse functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.sin!",
    "page": "Docstrings",
    "title": "IntervalContractors.sin!",
    "category": "function",
    "text": "sin!(X::IntervalBox)\n\nContractor for sin. Takes an IntervalBox containing the x and y component intervals. Returns an IntervalBox contracted down to the set y = sin(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.sin_main",
    "page": "Docstrings",
    "title": "IntervalContractors.sin_main",
    "category": "function",
    "text": "Contractor for \"main branch\" of sin, from x = -π/2 to π/2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.sin_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.sin_rev",
    "category": "function",
    "text": "sin_rev(y::Interval, x::Interval)\n\nReverse function for sin:\n\nfind the subset of x such that y = sin(x) for the given y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.sinh_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.sinh_rev",
    "category": "function",
    "text": "Reverse function for sinh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.sqr_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.sqr_rev",
    "category": "function",
    "text": "Reverse sqr\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.sqrt_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.sqrt_rev",
    "category": "function",
    "text": "Reverse square root\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.square_pos",
    "page": "Docstrings",
    "title": "IntervalContractors.square_pos",
    "category": "function",
    "text": "Contractor for y = x^2, x >= 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.symmetrise",
    "page": "Docstrings",
    "title": "IntervalContractors.symmetrise",
    "category": "function",
    "text": "Symmetric part of a Contractor, via an involution op (i.e. such that inv(op) == op).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.tan_main",
    "page": "Docstrings",
    "title": "IntervalContractors.tan_main",
    "category": "function",
    "text": "Contractor for \"main branch\" of tan, from x = -π/2 to π/2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.tan_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.tan_rev",
    "category": "function",
    "text": "tan_rev(y::Interval, x::Interval)\n\nReverse function for tan:\n\nfind the subset of x such that y = tan(x) for the given y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.tanh_rev",
    "page": "Docstrings",
    "title": "IntervalContractors.tanh_rev",
    "category": "function",
    "text": "Reverse function for tanh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalContractors.translate",
    "page": "Docstrings",
    "title": "IntervalContractors.translate",
    "category": "function",
    "text": "translate(α)\n\nReturns a function that shifts (translates) a 2D IntervalBox in x (the first coordinate).\n\n\n\n\n\nTranslation of a Contractor C by α. Uses inv(op) ∘ C ∘ op\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IntervalContractors.IntervalContractorsIntervalContractors.abs_revIntervalContractors.acos_revIntervalContractors.acosh_revIntervalContractors.asin!IntervalContractors.asin_revIntervalContractors.asinh_revIntervalContractors.atan_revIntervalContractors.atanh_revIntervalContractors.constant_contractorIntervalContractors.cos!IntervalContractors.cos_mainIntervalContractors.cos_revIntervalContractors.cos_reverseIntervalContractors.cosh_revIntervalContractors.cube!IntervalContractors.cube_negIntervalContractors.cube_posIntervalContractors.div_revIntervalContractors.evalIntervalContractors.exp!IntervalContractors.exp10_revIntervalContractors.exp2_revIntervalContractors.exp_revIntervalContractors.expm1_revIntervalContractors.half_piIntervalContractors.includeIntervalContractors.integer_contractorIntervalContractors.inv_revIntervalContractors.log!IntervalContractors.log10_revIntervalContractors.log1p_revIntervalContractors.log2_revIntervalContractors.log_revIntervalContractors.max_revIntervalContractors.min_revIntervalContractors.minus_revIntervalContractors.mul_revIntervalContractors.mul_rev_IEEE1788IntervalContractors.oddIntervalContractors.periodiseIntervalContractors.plus_revIntervalContractors.pow_rev1IntervalContractors.pow_rev2IntervalContractors.power_revIntervalContractors.reflect_xIntervalContractors.reverse_operationsIntervalContractors.sign_revIntervalContractors.sin!IntervalContractors.sin_mainIntervalContractors.sin_revIntervalContractors.sin_reverseIntervalContractors.sinh_revIntervalContractors.sqr_revIntervalContractors.sqrt_revIntervalContractors.square!IntervalContractors.square_negIntervalContractors.square_posIntervalContractors.symmetriseIntervalContractors.tan!IntervalContractors.tan_mainIntervalContractors.tan_revIntervalContractors.tanh_revIntervalContractors.translateIntervalContractors.two_pi"
},

]}
