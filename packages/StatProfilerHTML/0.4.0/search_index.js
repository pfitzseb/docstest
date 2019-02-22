var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StatProfilerHTML-1",
    "page": "Readme",
    "title": "StatProfilerHTML",
    "category": "section",
    "text": "PackageEvaluator Build Status Test coverage\n[![][pkg-0.6-img]][pkg-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![Coverage Status][coveralls-img]][coveralls-url]\n[![][pkg-0.7-img]][pkg-url]  This module formats the output from Julia\'s Profile module into an html rendering of the source function lines and functions, allowing for interactive exploration of any bottlenecks that may exist in your code.Have a look at this example output, which is the result of profilingusing MultivariatePolynomials\n@polyvar x y z\n@profile (x + y + z)^120;This module contains a fork of the rendering part of Mattia Barbon and Steffen Müller\'s excellent Devel::StatProfiler, which is a statistical profiler for Perl. It depends on Text::MicroTemplate, which for convenience, we ship as part of this bundle."
},

{
    "location": "#Line-number-bug-1",
    "page": "Readme",
    "title": "Line number bug",
    "category": "section",
    "text": "On the latest version of Julia, this package is severly affected by the issue with line numbers as tracked in this bug report. Julia developers will hopefully fix this soon![travis-img]: https://travis-ci.org/tkluck/StatProfilerHTML.jl.svg?branch=master [travis-url]: https://travis-ci.org/tkluck/StatProfilerHTML.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/mwnbnfp1gjm8ux3d?svg=true [appveyor-url]: https://ci.appveyor.com/project/tkluck/statprofilerhtml-jl[pkg-0.6-img]: http://pkg.julialang.org/badges/StatProfilerHTML0.6.svg [pkg-0.7-img]: http://pkg.julialang.org/badges/StatProfilerHTML0.7.svg [pkg-url]: http://pkg.julialang.org/?pkg=StatProfilerHTML[coveralls-img]: https://coveralls.io/repos/github/tkluck/StatProfilerHTML.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/tkluck/StatProfilerHTML.jl?branch=master"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StatProfilerHTML.StatProfilerHTMLStatProfilerHTML.basepathStatProfilerHTML.evalStatProfilerHTML.includeStatProfilerHTML.perllibStatProfilerHTML.sharepathStatProfilerHTML.statprofilehtmlStatProfilerHTML.statprofilehtml_plStatProfilerHTML.with_value"
},

]}
