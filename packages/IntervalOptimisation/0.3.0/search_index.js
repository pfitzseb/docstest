var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IntervalOptimisation.jl-1",
    "page": "Readme",
    "title": "IntervalOptimisation.jl",
    "category": "section",
    "text": "[![travis badge][travisbadge]][travisurl] [![appveyor badge][appveyorbadge]][appveyorurl] [![codecov badge][codecovbadge]][codecovurl]"
},

{
    "location": "#Documentation-[here][documenter_latest]-1",
    "page": "Readme",
    "title": "Documentation [here][documenter_latest]",
    "category": "section",
    "text": "[travisbadge]: https://travis-ci.org/JuliaIntervals/IntervalOptimisation.jl.svg?branch=master [travisurl]: https://travis-ci.org/JuliaIntervals/IntervalOptimisation.jl[appveyorbadge]: https://ci.appveyor.com/api/projects/status/github/JuliaIntervals/IntervalOptimisation.jl?svg=true&branch=master [appveyorurl]: https://ci.appveyor.com/project/JuliaIntervals/intervaloptimisation-jl[codecovbadge]: http://codecov.io/github/JuliaIntervals/IntervalOptimisation.jl/coverage.svg?branch=master [codecovurl]: http://codecov.io/github/JuliaIntervals/IntervalOptimisation.jl?branch=master[documenterstable]: https://JuliaIntervals.github.io/IntervalOptimisation.jl/stable [documenterlatest]: https://JuliaIntervals.github.io/IntervalOptimisation.jl/latest"
},

{
    "location": "#Rigorous-global-optimisation-using-Julia-1",
    "page": "Readme",
    "title": "Rigorous global optimisation using Julia",
    "category": "section",
    "text": "This package provides rigorous global optimisation routines written in pure Julia, using interval arithmetic provided by the author\'s IntervalArithmetic.jl package.Currently, the package uses an implementation of the Moore-Skelboe algorithm."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Functions minimise and maximise are provided to find the global minimum or maximum, respectively, of a standard Julia function f of one or several variables.They return an Interval that is guaranteed to contain the global minimum (maximum), and a Vector of Intervals or IntervalBoxes whose union contains all the minimisers."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#D-1",
    "page": "Readme",
    "title": "1D",
    "category": "section",
    "text": "using IntervalArithmetic, IntervalOptimisation\n\njulia> @time global_min, minimisers = minimise(x -> (x^2 - 2)^2, -10..11);\n  0.046620 seconds (36.07 k allocations: 1.586 MiB)\n\njulia> global_min\n[0, 1.50881e-09]\n\njulia> minimisers\n2-element Array{IntervalArithmetic.Interval{Float64},1}:\n  [1.41387, 1.41453]\n [-1.41428, -1.41363]"
},

{
    "location": "#D-2",
    "page": "Readme",
    "title": "2D",
    "category": "section",
    "text": "julia> @time global_min, minimisers = minimise(  X -> ( (x,y) = X; x^2 + y^2 ),\n                                                        (-10000..10001) × (-10000..10001) );\n  0.051122 seconds (46.80 k allocations: 2.027 MiB)\n\njulia> global_min\n[0, 2.33167e-08]\n\njulia> minimisers\n3-element Array{IntervalArithmetic.IntervalBox{2,Float64},1}:\n [-0.000107974, 0.000488103] × [-0.000107974, 0.000488103]\n [-0.000107974, 0.000488103] × [-0.000704051, -0.000107973]\n [-0.000704051, -0.000107973] × [-0.000107974, 0.000488103]Note that the last two IntervalBoxes do not actually contain the global minimum; decreasing the tolerance (maximum allowed box diameter) removes them:``` julia> @time global_min, minimisers = minimise(  X -> ( (x,y) = X; x^2 + y^2 ),                                                                (-10000..10001) × (-10000..10001), 1e-5 );   0.047196 seconds (50.72 k allocations: 2.180 MiB)julia> minimisers 1-element Array{IntervalArithmetic.IntervalBox{2,Float64},1}:  [-5.52321e-06, 3.79049e-06] × [-5.52321e-06, 3.79049e-06]  ```"
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
    "text": "Validated Numerics: A Short Introduction to Rigorous Computations, W. Tucker, Princeton University Press (2010)\nApplied Interval Analysis, Luc Jaulin, Michel Kieffer, Olivier Didrit, Eric Walter (2001)\nvan Emden M.H., Moa B. (2004). Termination Criteria in the Moore-Skelboe Algorithm for Global Optimization by Interval Arithmetic. In: Floudas C.A., Pardalos P. (eds), Frontiers in Global Optimization. Nonconvex Optimization and Its Applications, vol. 74. Springer, Boston, MA. Preprint\nH. Ratschek and J. Rokne, New Computer Methods for Global Optimization"
},

{
    "location": "#Acknowledements-1",
    "page": "Readme",
    "title": "Acknowledements",
    "category": "section",
    "text": "Financial support is acknowledged from DGAPA-UNAM PAPIIT grant IN-117117."
},

{
    "location": "autodocs/#IntervalOptimisation.minimise",
    "page": "Docstrings",
    "title": "IntervalOptimisation.minimise",
    "category": "function",
    "text": "minimise(f, X, tol=1e-3)\n\nFind the global minimum of the function f over the Interval or IntervalBox X using the Moore-Skelboe algorithm.\n\nFor higher-dimensional functions fmathbbR^n to mathbbR, f must take a single vector argument.\n\nReturns an interval containing the global minimum, and a list of boxes that contain the minimisers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalOptimisation.minimize",
    "page": "Docstrings",
    "title": "IntervalOptimisation.minimize",
    "category": "function",
    "text": "minimise(f, X, tol=1e-3)\n\nFind the global minimum of the function f over the Interval or IntervalBox X using the Moore-Skelboe algorithm.\n\nFor higher-dimensional functions fmathbbR^n to mathbbR, f must take a single vector argument.\n\nReturns an interval containing the global minimum, and a list of boxes that contain the minimisers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IntervalOptimisation.IntervalOptimisationIntervalOptimisation.SortedVectorsIntervalOptimisation.evalIntervalOptimisation.includeIntervalOptimisation.maximiseIntervalOptimisation.maximizeIntervalOptimisation.minimiseIntervalOptimisation.minimize"
},

]}
