var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ModuleInterfaceTools-1",
    "page": "Readme",
    "title": "ModuleInterfaceTools",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/ModuleInterfaceTools.jl [travis-s-img]: https://travis-ci.org/JuliaString/ModuleInterfaceTools.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/ModuleInterfaceTools.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/moduleinterfacetools-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/moduleinterfacetools-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/x13gh7y6id3fbmke?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/x13gh7y6id3fbmke/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/ModuleInterfaceTools [pkg-m-url]:    http://pkg.julialang.org/detail/ModuleInterfaceTools [pkg-s-img]:    http://pkg.julialang.org/badges/ModuleInterfaceTools0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/ModuleInterfaceTools0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/ModuleInterfaceTools.jl [codecov-img]:  https://codecov.io/gh/JuliaString/ModuleInterfaceTools.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/ModuleInterfaceTools.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/ModuleInterfaceTools.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/ModuleInterfaceTools.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/ModuleInterfaceTools.jl/badge.svg?branch=masterThis provides a way of having different lists of names that you want to be part of a public API, as well as being part of a development API (i.e. functions that are not normally needed by users of a package, but are needed by a developer writing a package that depends on it). It also separates lists of names of functions, that can be extended, from names of types, modules, constants that cannot be extended, and functions that are not intended to be extended.This is a bit of a work-in-progress, I heartily welcome any suggestions for better syntax, better implementation, and extra functionality.@api <cmd> [<symbols>...]\n\n * @api list                # display information about this module\'s API\n * @api freeze              # use at end of module, to \"freeze\" API\n\n * @api list   <modules>... # display information about one or more modules\' API\n * @api use    <modules>... # for normal use, i.e. `using`\n * @api test   <modules>... # using public and develop symbols, for testing purposes\n * @api extend <modules>... # for development, imports `base`, `public`, and `develop` lists,\n *                          # uses `define_public`and `define_develop` lists\n * @api export <modules>... # export api symbols\n\n * @api base     <names...> # Add functions from Base that are part of the API\n * @api public!  <names...> # Add functions that are part of the public API\n * @api develop! <names...> # Add functions that are part of the development API\n * @api public   <names...> # Add other symbols that are part of the public API (structs, consts)\n * @api develop  <names...> # Add other symbols that are part of the development API\n * @api modules  <names...> # Add submodule names that are part of the API\n * @api base!    <names...> # Conditionally import functions from Base, or define themThis also includes the @def macro, renamed as @api def which I\'ve found very useful!I would also like to add commands that add the functionality of @reexport, but instead of exporting the symbols found in the module(s), add them to either the public or develop list. (I had a thought that it could automatically add names that do not start with _, have a docstring, and are not exported, to the develop list, and all exported names would be added to the public list).Another thing I\'d like to add is a way of using/importing a module, but having pairs of names, for renaming purposes, i.e. something like @api use Foobar: icantreadthisname => i_cant_read_this_name which would import the variable from Foobar, but with the name after the =>."
},

{
    "location": "autodocs/#ModuleInterfaceTools.@api",
    "page": "Docstrings",
    "title": "ModuleInterfaceTools.@api",
    "category": "macro",
    "text": "@api <cmd> [<symbols>...]\n\nfreeze               # use at end of module to freeze API\nlist    <modules>... # list API(s) of given modules (or current if none given)\nuse     <modules>... # use, without importing (i.e. can\'t extend)\nuse!    <modules>... # use, without importing (i.e. can\'t extend), \"export\"\ntest    <modules>... # using public and develop APIs, for testing purposes\nextend  <modules>... # for development, imports api & dev, use api & dev definitions\nextend! <modules>... # for development, imports api & dev, use api & dev definitions, \"export\"\nexport  <modules>... # export public definitions\nbase     <names...>  # Add functions from Base that are part of the API (extendible)\nbase!    <names...>  # Add functions from Base or define them if not in Base\npublic   <names...>  # Add other symbols that are part of the public API (structs, consts)\npublic!  <names...>  # Add functions that are part of the public API (extendible)\ndevelop  <names...>  # Add other symbols that are part of the development API\ndevelop! <names...>  # Add functions that are part of the development API (extendible)\ndefine!  <names...>  # Define functions to be extended, public API\ndefdev!  <names...>  # Define functions to be extended, develop API\nmodules  <names...>  # Add submodule names that are part of the API\npath     <paths...>  # Add paths to LOAD_PATH\ndef <name> <expr>    # Same as the @def macro, creates a macro with the given name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ModuleInterfaceTools.ModuleInterfaceTools",
    "page": "Docstrings",
    "title": "ModuleInterfaceTools.ModuleInterfaceTools",
    "category": "module",
    "text": "API Tools package\n\nCopyright 2018 Gandalf Software, Inc., Scott P. Jones\n\nLicensed under MIT License, see LICENSE.md\n\n(@def macro \"stolen\" from DiffEqBase.jl/src/util.jl :-) )\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ModuleInterfaceTools._add_symbols",
    "page": "Docstrings",
    "title": "ModuleInterfaceTools._add_symbols",
    "category": "function",
    "text": "Add symbols\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ModuleInterfaceTools._init_api",
    "page": "Docstrings",
    "title": "ModuleInterfaceTools._init_api",
    "category": "function",
    "text": "Initialize the temp api variable for this module\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ModuleInterfaceTools.@apiModuleInterfaceTools.APIModuleInterfaceTools.AbstractAPIModuleInterfaceTools.BIG_ENDIANModuleInterfaceTools.ModuleInterfaceToolsModuleInterfaceTools.SymListModuleInterfaceTools.SymSetModuleInterfaceTools.TMP_APIModuleInterfaceTools.V6_COMPATModuleInterfaceTools._add_def!ModuleInterfaceTools._add_symbolsModuleInterfaceTools._apiModuleInterfaceTools._api_defModuleInterfaceTools._api_displayModuleInterfaceTools._api_exportModuleInterfaceTools._api_extendModuleInterfaceTools._api_freezeModuleInterfaceTools._api_listModuleInterfaceTools._api_pathModuleInterfaceTools._api_testModuleInterfaceTools._api_useModuleInterfaceTools._cmdaddModuleInterfaceTools._cmduseModuleInterfaceTools._do_listModuleInterfaceTools._ffModuleInterfaceTools._init_apiModuleInterfaceTools._stderrModuleInterfaceTools._stdoutModuleInterfaceTools.debugModuleInterfaceTools.evalModuleInterfaceTools.get_apiModuleInterfaceTools.has_apiModuleInterfaceTools.includeModuleInterfaceTools.m_evalModuleInterfaceTools.makecmdModuleInterfaceTools.push_args!ModuleInterfaceTools.showeval"
},

]}
