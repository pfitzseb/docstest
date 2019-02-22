var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TickTock-1",
    "page": "Readme",
    "title": "TickTock",
    "category": "section",
    "text": "(Image: tick tock)PackageEvaluator Build Status\n[![][pkg-0.6-img]][pkg-0.6-url] [![][pkg-0.7-img]][pkg-0.7-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][codecov-img]][codecov-url]This module provides tick(), tock(), and tok() functions. They\'re similar to the tic(), toc(), and toq() functions that you might find in other technical software. There are also laptimer() and peektimer() functions that show you current timing activity without stopping any active timers.Don\'t use these for timing code execution! Julia provides much better facilities for measuring performance, ranging from the @time and @elapsed macros to packages such as BenchmarkTools.jl. (And remember, don\'t time Julia code running in global scope!) The TimerOutputs.jl package provides tools for timing different sections of a program."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "tick() start a timer\ntock() stop a timer, show total elapsed time\ntok() stop a timer, return elapsed seconds\npeektimer() continue timing, return elapsed seconds of most recent timer\nlaptimer() continue timing, show total elapsed time of active timers"
},

{
    "location": "#Suggestions-for-use-1",
    "page": "Readme",
    "title": "Suggestions for use",
    "category": "section",
    "text": "You can:time how long a phone call takes without leaving the Julia REPLjulia-0.6> using TickTock\njulia-0.6> tick()\n Started timer at 2017-12-13T22:30:59.632\njulia-0.6> tock()\n55.052638936 ms: 55 seconds, 52 millisecondssee how long your cup of tea\'s been brewing:julia-0.6> tick()\n Started timer at 2017-12-13T22:34:03.78\njulia-0.6> laptimer()\n 72.625839832 ms: 1 minute, 12 seconds, 625 milliseconds\njulia-0.6> laptimer()\n 266.053953749 ms: 4 minutes, 26 seconds, 53 milliseconds\njulia-0.6> laptimer()\n 285.314459174 ms: 4 minutes, 45 seconds, 314 millisecondssee how many seconds you held your breath for:julia-0.6> tick()\n Started timer at 2017-12-12T09:17:45.504\n\njulia-0.6> tok()\n287.841546621see how long your computer (and Julia session) has been running for:julia-0.6> tick()\n...go on holiday, then come back\njulia-0.6> laptimer()\n  1.302200135485876e6s: 2 weeks, 1 day, 1 hour, 43 minutes, 20 seconds, 135 millisecondstime a number of things:julia-0.7> tick()\n started timer at: 2018-03-17T12:08:43.326\njulia-0.7> tick()\n started timer at: 2018-03-17T12:14:03.077\njulia-0.7> laptimer()\n2                  7.315769543s: 7 seconds, 315 milliseconds\n1                327.074715234s: 5 minutes, 27 seconds, 74 millisecondsYou should not use this package to:measure performance of Julia code\ndo benchmarking of Julia code"
},

{
    "location": "#History-1",
    "page": "Readme",
    "title": "History",
    "category": "section",
    "text": "Some of this code used to live in Julia Base in the tic(), toc(), and toq() functions (in base/util.jl). They were deprecated in GitHub issue 17046.[travis-img]: https://travis-ci.org/cormullion/TickTock.jl.svg?branch=master [travis-url]: https://travis-ci.org/cormullion/TickTock.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/j4w1iwued4ojsfm6?svg=true [appveyor-url]: https://ci.appveyor.com/project/cormullion/ticktock-jl/branch/master[codecov-img]: https://codecov.io/github/cormullion/TickTock.jl/coverage.svg?branch=master [codecov-url]: https://codecov.io/github/cormullion/TickTock.jl[pkg-0.6-img]: http://pkg.julialang.org/badges/TickTock0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=TickTock&ver=0.6 [pkg-0.7-img]: http://pkg.julialang.org/badges/TickTock0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=TickTock&ver=0.7"
},

{
    "location": "autodocs/#TickTock.TickTock",
    "page": "Docstrings",
    "title": "TickTock.TickTock",
    "category": "module",
    "text": "This module provides tick(), tock(), and tok() functions.\n\nThey\'re similar to the tic(), toc(), and toq() functions that you might find in MATLAB and similar software.\n\nDon\'t use these for timing code execution! Julia provides much better facilities for measuring performance, ranging from the @time and @elapsed macros to packages such as BenchmarkTools.jl. (And remember, don\'t time Julia code running in global scope!)\n\nThis code used to live in Julia Base as the tic(), toc(), and toq() functions (in base/util.jl). They were deprecated in GitHub issue 17046.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TickTock.laptimer",
    "page": "Docstrings",
    "title": "TickTock.laptimer",
    "category": "function",
    "text": "laptimer()\n\nPrint the current elapsed time, in canonical form, since the previous tick(), and continue counting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TickTock.peektimer",
    "page": "Docstrings",
    "title": "TickTock.peektimer",
    "category": "function",
    "text": "peektimer()\n\nReturn the current elapsed seconds counted by the most recent timer, without stopping it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TickTock.tick",
    "page": "Docstrings",
    "title": "TickTock.tick",
    "category": "function",
    "text": "tick()\n\nStart counting. The other functions are:\n\ntock()       ` stop counting, show total elapsed time in canonical form\ntok()        ` stop counting, return seconds\npeektimer() continue counting, return elapsed seconds\nlaptimer() continue counting, show total elapsed time in canonical form\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TickTock.tock",
    "page": "Docstrings",
    "title": "TickTock.tock",
    "category": "function",
    "text": "tock()\n\nPrint the elapsed time, in canonical form, of the most recent timer, then stop counting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TickTock.tok",
    "page": "Docstrings",
    "title": "TickTock.tok",
    "category": "function",
    "text": "tok()\n\nReturn the current elapsed seconds counted by the most recent timer, then stop counting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TickTock.TickTockTickTock.evalTickTock.gettimersTickTock.includeTickTock.laptimerTickTock.peektimerTickTock.printcanonicalTickTock.showtimesTickTock.tickTickTock.tockTickTock.tok"
},

]}
