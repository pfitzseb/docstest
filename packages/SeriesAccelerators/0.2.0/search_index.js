var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SeriesAccelerators.jl-1",
    "page": "Readme",
    "title": "SeriesAccelerators.jl",
    "category": "section",
    "text": "(Image: Travis) (Image: codecov)Accelerate convergence of mathematical series using the Shanks or van Wijngaarden transformations."
},

{
    "location": "autodocs/#SeriesAccelerators.check_convergence",
    "page": "Docstrings",
    "title": "SeriesAccelerators.check_convergence",
    "category": "function",
    "text": "Check the convergence of series by comparing the new value to the value of the series so far\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SeriesAccelerators.shanks",
    "page": "Docstrings",
    "title": "SeriesAccelerators.shanks",
    "category": "function",
    "text": "shanks(series, recursion::Int=1, sum_limit::U=1_000_000; rtol=sqrt(eps()), atol=eps())\n\nShanks transformation series accelerator. https://en.wikipedia.org/wiki/Shanks_transformation\n\nArguments:   series (optional, Function) : a function that accepts an argument, n::Int,     and returns the nth value in the series   sum_limit (optional, Int) : the value at which to stop the series     (default is 1,000,000)   rtol (optional, Number) : relative stopping tolerance   atol (optional, Number) : absolute stopping tolerance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SeriesAccelerators.vanwijngaarden",
    "page": "Docstrings",
    "title": "SeriesAccelerators.vanwijngaarden",
    "category": "function",
    "text": "vanwijngaarden(series, recursion::Int=1, sum_limit::U=1_000_000; rtol=sqrt(eps()), atol=eps())\n\nvan Wijngaarden transformation series accelerator. https://en.wikipedia.org/wiki/VanWijngaardentransformation\n\nArguments:   series (optional, Function) : a function that accepts an argument, n::Int,     and returns the nth value in the series   sum_limit (optional, Int) : the value at which to stop the series     (default is 1,000,000)   rtol (optional, Number) : relative stopping tolerance   atol (optional, Number) : absolute stopping tolerance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SeriesAccelerators.SeriesAcceleratorsSeriesAccelerators._memoiseSeriesAccelerators._seriesacceleratorSeriesAccelerators._shanksSeriesAccelerators._vanwijngaardenSeriesAccelerators.check_convergenceSeriesAccelerators.default_atolSeriesAccelerators.default_initial_iterateSeriesAccelerators.default_recursionSeriesAccelerators.default_rtolSeriesAccelerators.default_sum_limitSeriesAccelerators.evalSeriesAccelerators.includeSeriesAccelerators.shanksSeriesAccelerators.vanwijngaarden"
},

]}
