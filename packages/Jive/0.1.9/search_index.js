var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Jive-1",
    "page": "Readme",
    "title": "Jive 👣",
    "category": "section",
    "text": "Documentation Build Status\n[![][docs-latest-img]][docs-latest-url] [![][travis-img]][travis-url]  [![][codecov-img]][codecov-url]Jive.jl is a Julia package to help the writing tests.runtests\nwatch\n@skip\n@onlyonce\n@If\n@useinside\n@mockup"
},

{
    "location": "#runtests-1",
    "page": "Readme",
    "title": "runtests",
    "category": "section",
    "text": "run the test files from the specific directory.using Jive\nruntests(@__DIR__, skip=[], node1=[], targets=ARGS)(Image: runtests.svg)for the runtests.jl, ARGS are used to filter the targets and to set the start offset of the tests.~/.julia/dev/Jive/test $ julia --color=yes runtests.jl jive/s jive/m start=3\n1/5 jive/mockup/mockup.jl --\n2/5 jive/skip/skip-calls.jl --\n3/5 jive/skip/skip-exprs.jl\n    Pass 4  (0.38 seconds)\n4/5 jive/skip/skip-functions.jl\n    Pass 4  (0.05 seconds)\n5/5 jive/skip/skip-modules.jl\n    Pass 4  (0.01 seconds)\n✅  All 12 tests have been completed.  (0.73 seconds)in the above example, test files are matched for only have jive/s jive/m and jumping up to the 3rd file."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "run tests~/.julia/dev/Jive/test $ julia --color=yes runtests.jlrun tests with target directory.~/.julia/dev/Jive/test $ julia --color=yes runtests.jl jive/Ifdistributed run tests with -p~/.julia/dev/Jive/test $ julia --color=yes -p3 runtests.jldistributed run tests for Pkg.test(), using JIVE_PROCS ENV.~/.julia/dev/Jive $ JIVE_PROCS=2 julia --color=yes --project=. -e \'using Pkg; Pkg.test()\'\n\n~/.julia/dev/Jive $ julia --color=yes --project=. -e \'ENV[\"JIVE_PROCS\"]=\"2\"; using Pkg; Pkg.test()\'see also travis job logs."
},

{
    "location": "#watch-1",
    "page": "Readme",
    "title": "watch",
    "category": "section",
    "text": "watch the folders. You may need to install Revise.jl.~/.julia/dev/Jive/test/Example/test $ cat runtests.jl\nusing Jive\nruntests(@__DIR__, skip=[\"revise.jl\"])\n\n~/.julia/dev/Jive/test/Example/test $ cat revise.jl\nusing Revise, Jive\nusing Example\nwatch(@__DIR__, sources=[pathof(Example)]) do path\n    @info :changed path\n    revise()\n    runtests(@__DIR__, skip=[\"revise.jl\"])\nend\n# Jive.stop(watch)\n\n~/.julia/dev/Jive/test/Example/test $ julia --project=.. -q -i revise.jl example\nwatching folders ...\n  - ../src\n  - examplewhen saving any files in the watching folders, it automatically run tests."
},

{
    "location": "#@skip-1",
    "page": "Readme",
    "title": "@skip",
    "category": "section",
    "text": "skip the expression.test/jive/skipusing Jive # @skip\n\n@skip module want_to_skip_this_module\nsleep(2)\nend\n\n@skip function want_to_skip_this_function()\nsleep(2)\nend\n\n@skip println(1+2)Change to do not skip the code: set ENV[\"JIVE_SKIP\"] = \"0\""
},

{
    "location": "#@onlyonce-1",
    "page": "Readme",
    "title": "@onlyonce",
    "category": "section",
    "text": "used to run the block only once.test/jive/onlyonceusing Jive # @onlyonce\n\n@onlyonce begin\n    println(42)\nend"
},

{
    "location": "#@If-1",
    "page": "Readme",
    "title": "@If",
    "category": "section",
    "text": "evaluate the module by the condition.test/jive/Ifusing Jive # @If\n@If VERSION >= v\"1.1.0-DEV.764\" module load_some_module\nend"
},

{
    "location": "#@useinside-1",
    "page": "Readme",
    "title": "@useinside",
    "category": "section",
    "text": "use inside of the module.using Jive # @useinside\n@useinside module test_pkgs_flux_optimise\n# ...\nend"
},

{
    "location": "#@mockup-1",
    "page": "Readme",
    "title": "@mockup",
    "category": "section",
    "text": "used to produce a replica from the other module.test/jive/mockupusing Jive # Mock @mockup\nusing Test\n\nmodule Goods\nstruct Foo\nend\nfunction f(::Foo)\n    10\nend\nfunction g(::Foo)\n    10\nend\nend # module Goods\n\n\n@mockup module Goods\nfunction f(::Foo)\n    20\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 20\n@test Mock.Goods.g(Mock.Goods.Foo()) == 10\n\n\nGoods3 = @mockup module Goods\nfunction g(::Foo)\n    30\nend\nend # @mockup module Goods\n@test Goods.f(Goods.Foo()) == 10\n@test Mock.Goods.f(Mock.Goods.Foo()) == 10\n@test Mock.Goods.g(Mock.Goods.Foo()) == 30\n@test Goods3 isa Module\n@test Goods3.g === Mock.Goods.g[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://wookay.github.io/docs/Jive.jl/[travis-img]: https://api.travis-ci.org/wookay/Jive.jl.svg?branch=master [travis-url]: https://travis-ci.org/wookay/Jive.jl[codecov-img]: https://codecov.io/gh/wookay/Jive.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/wookay/Jive.jl/branch/master"
},

{
    "location": "autodocs/#Jive.@If",
    "page": "Docstrings",
    "title": "Jive.@If",
    "category": "macro",
    "text": "@If(condition::Expr, expr::Expr)\n\nevaluate the expr by the condition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.@mockup",
    "page": "Docstrings",
    "title": "Jive.@mockup",
    "category": "macro",
    "text": "@mockup\n\nused to produce a replica from the other module.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.@onlyonce",
    "page": "Docstrings",
    "title": "Jive.@onlyonce",
    "category": "macro",
    "text": "@onlyonce(block)\n\nused to run the block only once.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.@skip",
    "page": "Docstrings",
    "title": "Jive.@skip",
    "category": "macro",
    "text": "@skip\n\nskip the expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.@useinside",
    "page": "Docstrings",
    "title": "Jive.@useinside",
    "category": "macro",
    "text": "@useinside(expr::Expr)\n\nuse inside of the module.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.Mock",
    "page": "Docstrings",
    "title": "Jive.Mock",
    "category": "module",
    "text": "Mock\n\nThe Mock store for mocked modules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.Skipped",
    "page": "Docstrings",
    "title": "Jive.Skipped",
    "category": "module",
    "text": "Skipped\n\nSkipped expressions are in Skipped.expressions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.runtests",
    "page": "Docstrings",
    "title": "Jive.runtests",
    "category": "function",
    "text": "runtests(dir::String; skip::Union{Vector{Any},Vector{String}}=[], node1::Union{Vector{Any},Vector{String}}=[], targets=ARGS)\n\nrun the test files from the specific directory.\n\ndir: the root directory to traverse.\nskip: files or directories to skip.\nnode1: run on node 1 during for the distributed tests.\ntargets: filter targets and start. default is ARGS\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.stop",
    "page": "Docstrings",
    "title": "Jive.stop",
    "category": "function",
    "text": "Jive.stop(::typeof(watch))\n\nstop watching folders.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jive.watch",
    "page": "Docstrings",
    "title": "Jive.watch",
    "category": "function",
    "text": "watch(callback::Function, dir::String; targets=ARGS, sources::Union{Vector{Any},Vector{String}}=[])\n\nwatch the folders.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Jive.@IfJive.@mockupJive.@onlyonceJive.@skipJive.@useinsideJive.CodeFromJuliaTestJive.CodeFromStdlibTestJive.JiveJive.MockJive.SkippedJive.diff_symbolsJive.evalJive.get_all_filesJive.includeJive.isjiveskipJive.jive_briefingJive.mockup_a_moduleJive.onlyonce_calledJive.onlyonce_evaluatedJive.path_separator_to_slashJive.reportJive.runJive.runtestsJive.slash_to_path_separatorJive.stopJive.using_symbolsJive.watchJive.watched_folders"
},

]}
