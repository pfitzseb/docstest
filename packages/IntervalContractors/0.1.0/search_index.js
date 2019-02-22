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

]}
