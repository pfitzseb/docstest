var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InteractiveCodeSearch.jl-–-Interactively-search-Julia-code-1",
    "page": "Readme",
    "title": "InteractiveCodeSearch.jl –- Interactively search Julia code",
    "category": "section",
    "text": "[![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![codecov.io][codecov-img]][codecov-url](Image: gif animation)Julia has @edit, @less, etc. which are very handy for reading the implementation of functions.  However, you need to specify a \"good enough\" set of (type) parameters for them to find the location of the code.Instead, InteractiveCodeSearch provides a few macros to interactively choose the code you want to read."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Interactively choose a method signature before opening the code location in your editor.\nVarious ways to search methods, such as: by function name @search show, function call expression @search show(stdout, \"hello\"), function call signature @search show(::IO, ::String), module name @search Base, argument value @searchmethods 1, argument type @searchmethods ::Int, and return type @searchreturn Int.\nInteractively search history.  It works in IJulia as well."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "using InteractiveCodeSearch\n@search show             # search method definitions\n@searchmethods 1         # search methods defined for integer\n@searchhistory           # search history (Julia ≥ 0.7)\n@searchreturn String Pkg # search methods returning a given type (Julia ≥ 0.7)"
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "Interactive matching command.  For example:\npeco (default in terminal)\npercol\nrofi (GUI; default in IJulia)"
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": ""
},

{
    "location": "#@search-1",
    "page": "Readme",
    "title": "@search",
    "category": "section",
    "text": "@search x [:shallow | :s | :recursive | :r]List file locations at which x are defined in an interactive matcher and then open the chosen location in the editor.When x is a module, only the top-level definitions are searched.  To search all definitions in the submodule, pass :recursive or :r flag.@searchIf no expression is provided, search for the method returned by the previous execution; i.e., x defaults to ans.Examples@search show                      # all method definitions\n@search @time                     # all macro definitions\n@search Base.Enums                # methods and macros in a module\n@search REPL :r                   # search the module recursively\n@search *(::Integer, ::Integer)   # methods with specified types\n@search dot(π, ℯ)                 # methods with inferred typesNote that @search evaluates complex expression with . and [] such as follows and search the returned value or the type of it:@search Base.Multimedia.displays[2].repl"
},

{
    "location": "#@searchmethods-1",
    "page": "Readme",
    "title": "@searchmethods",
    "category": "section",
    "text": "@searchmethods x\n@searchmethods ::XInteractively search through methodswith(typeof(x)) or methodswith(X).Examples@searchmethods 1         # search methods defined for integer\n@searchmethods ::Int     # search methods defined for a specified type"
},

{
    "location": "#@searchhistory-1",
    "page": "Readme",
    "title": "@searchhistory",
    "category": "section",
    "text": "@searchhistorySearch history interactively.  Interactively narrows down the code you looking for from the REPL history.Limitation/feature in IJulia: In IJulia, @searchhistory searches history of terminal REPL, not the history of the current IJulia session."
},

{
    "location": "#@searchreturn-1",
    "page": "Readme",
    "title": "@searchreturn",
    "category": "section",
    "text": "@searchreturn Type [Module...]Search functions returning type Type in Modules.  As this search typically takes some time to finish, interactive matcher will not be launched by this command.  Instead, a \"handle\" to the search in background is returned which can be queried via @search later. Calling kill (Base.kill) on the handle cancels the search.LimitationsRunning @searchreturn for many modules may be slow for the first run.  Thus, searching from all modules (i.e., not specifying Module arguments) may take tens of seconds to minutes, depending of what are loaded.  Searching within Base takes about 30 seconds. After DifferentialEquations is loaded, searching for all modules takes 1.5 minutes.  Note that searching from the same module for the second time is fast (a few seconds), even if different Type is specified.\nThe functions must be executed (JIT\'ed) once for @searchreturn to find their returned by type.\nAny IO operations (like printing in REPL) would be slow while the search is active in background.\nKeyboard interruption does not work well while background search is active.  You need to hit CTRL-C multiple times to terminate a \"foreground\" code.  Furthermore, it will bring down the background search task as well.Examplesjulia> using LinearAlgebra, SparseArrays\n\njulia> spzeros(3, 3)\n\njulia> @searchreturn AbstractMatrix LinearAlgebra SparseArrays\n┌ Info: Search result is stored in variable `_s1`.\n│ You can interactively narrow down the search result later by\n└ `@search _s1` or `@search 1`.\n\nBackgroundSearch id=1 [active] 0 found\nSearching ::AbstractArray{T,2} where T from Module[LinearAlgebra SparseArrays] recursively\n\njulia> @search _s1\n\njulia> kill(_s1)  # stop the searchIf you prefer giving a custom name to the search result, just assign it to some variable.julia> my_search = @searchreturn AbstractMatrix LinearAlgebra SparseArrays\njulia> @search my_search"
},

{
    "location": "#InteractiveCodeSearch.CONFIG-1",
    "page": "Readme",
    "title": "InteractiveCodeSearch.CONFIG",
    "category": "section",
    "text": "Configuration interface for InteractiveCodeSearch.Examplesusing InteractiveCodeSearch\nInteractiveCodeSearch.CONFIG.interactive_matcher = `peco`  # default in terminal\nInteractiveCodeSearch.CONFIG.interactive_matcher = `percol`\nInteractiveCodeSearch.CONFIG.interactive_matcher =\n    `rofi -dmenu -i -p \"🔎\"`  # use GUI matcher (default in non-terminal\n                              # environment like IJulia)\nInteractiveCodeSearch.CONFIG.interactive_matcher =\n    `rofi -dmenu -i -p \"🔎\" -fullscreen`  # bigger screen\nInteractiveCodeSearch.CONFIG.open = edit  # default\nInteractiveCodeSearch.CONFIG.open = less  # use Base.less to read code\nInteractiveCodeSearch.CONFIG.auto_open = true   # default\nInteractiveCodeSearch.CONFIG.auto_open = false  # open matcher even when there\n                                                # is only one candidateUsing InteractiveCodeSearch.jl by defaultPut the following code in your ~/.julia/config/startup.jl (≥ Julia 0.7) or ~/.juliarc.jl (Julia 0.6):using InteractiveCodeSearch\n# InteractiveCodeSearch.CONFIG.interactive_matcher = ...[travis-img]: https://travis-ci.org/tkf/InteractiveCodeSearch.jl.svg?branch=master [travis-url]: https://travis-ci.org/tkf/InteractiveCodeSearch.jl [coveralls-img]: https://coveralls.io/repos/tkf/InteractiveCodeSearch.jl/badge.svg?branch=master&service=github [coveralls-url]: https://coveralls.io/github/tkf/InteractiveCodeSearch.jl?branch=master [codecov-img]: http://codecov.io/github/tkf/InteractiveCodeSearch.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/tkf/InteractiveCodeSearch.jl?branch=master<!– Generated by ./scripts/generate_readme.jl README.md. –>"
},

{
    "location": "autodocs/#InteractiveCodeSearch.@search",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.@search",
    "category": "macro",
    "text": "@search x [:shallow | :s | :recursive | :r]\n\nList file locations at which x are defined in an interactive matcher and then open the chosen location in the editor.\n\nWhen x is a module, only the top-level definitions are searched.  To search all definitions in the submodule, pass :recursive or :r flag.\n\n@search\n\nIf no expression is provided, search for the method returned by the previous execution; i.e., x defaults to ans.\n\nExamples\n\n@search show                      # all method definitions\n@search @time                     # all macro definitions\n@search Base.Enums                # methods and macros in a module\n@search REPL :r                   # search the module recursively\n@search *(::Integer, ::Integer)   # methods with specified types\n@search dot(π, ℯ)                 # methods with inferred types\n\nNote that @search evaluates complex expression with . and [] such as follows and search the returned value or the type of it:\n\n@search Base.Multimedia.displays[2].repl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.@searchhistory",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.@searchhistory",
    "category": "macro",
    "text": "@searchhistory\n\nSearch history interactively.  Interactively narrows down the code you looking for from the REPL history.\n\nLimitation/feature in IJulia: In IJulia, @searchhistory searches history of terminal REPL, not the history of the current IJulia session.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.@searchmethods",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.@searchmethods",
    "category": "macro",
    "text": "@searchmethods x\n@searchmethods ::X\n\nInteractively search through methodswith(typeof(x)) or methodswith(X).\n\nExamples\n\n@searchmethods 1         # search methods defined for integer\n@searchmethods ::Int     # search methods defined for a specified type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.@searchreturn",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.@searchreturn",
    "category": "macro",
    "text": "@searchreturn Type [Module...]\n\nSearch functions returning type Type in Modules.  As this search typically takes some time to finish, interactive matcher will not be launched by this command.  Instead, a \"handle\" to the search in background is returned which can be queried via @search later. Calling kill (Base.kill) on the handle cancels the search.\n\nLimitations\n\nRunning @searchreturn for many modules may be slow for the first run.  Thus, searching from all modules (i.e., not specifying Module arguments) may take tens of seconds to minutes, depending of what are loaded.  Searching within Base takes about 30 seconds. After DifferentialEquations is loaded, searching for all modules takes 1.5 minutes.  Note that searching from the same module for the second time is fast (a few seconds), even if different Type is specified.\nThe functions must be executed (JIT\'ed) once for @searchreturn to find their returned by type.\nAny IO operations (like printing in REPL) would be slow while the search is active in background.\nKeyboard interruption does not work well while background search is active.  You need to hit CTRL-C multiple times to terminate a \"foreground\" code.  Furthermore, it will bring down the background search task as well.\n\nExamples\n\njulia> using LinearAlgebra, SparseArrays\n\njulia> spzeros(3, 3)\n\njulia> @searchreturn AbstractMatrix LinearAlgebra SparseArrays\n┌ Info: Search result is stored in variable `_s1`.\n│ You can interactively narrow down the search result later by\n└ `@search _s1` or `@search 1`.\n\nBackgroundSearch id=1 [active] 0 found\nSearching ::AbstractArray{T,2} where T from Module[LinearAlgebra SparseArrays] recursively\n\njulia> @search _s1\n\njulia> kill(_s1)  # stop the search\n\nIf you prefer giving a custom name to the search result, just assign it to some variable.\n\njulia> my_search = @searchreturn AbstractMatrix LinearAlgebra SparseArrays\njulia> @search my_search\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.CONFIG",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.CONFIG",
    "category": "constant",
    "text": "Configuration interface for InteractiveCodeSearch.\n\nExamples\n\nusing InteractiveCodeSearch\nInteractiveCodeSearch.CONFIG.interactive_matcher = `peco`  # default in terminal\nInteractiveCodeSearch.CONFIG.interactive_matcher = `percol`\nInteractiveCodeSearch.CONFIG.interactive_matcher =\n    `rofi -dmenu -i -p \"🔎\"`  # use GUI matcher (default in non-terminal\n                              # environment like IJulia)\nInteractiveCodeSearch.CONFIG.interactive_matcher =\n    `rofi -dmenu -i -p \"🔎\" -fullscreen`  # bigger screen\nInteractiveCodeSearch.CONFIG.open = edit  # default\nInteractiveCodeSearch.CONFIG.open = less  # use Base.less to read code\nInteractiveCodeSearch.CONFIG.auto_open = true   # default\nInteractiveCodeSearch.CONFIG.auto_open = false  # open matcher even when there\n                                                # is only one candidate\n\nUsing InteractiveCodeSearch.jl by default\n\nPut the following code in your ~/.julia/config/startup.jl (≥ Julia 0.7) or ~/.juliarc.jl (Julia 0.6):\n\nusing InteractiveCodeSearch\n# InteractiveCodeSearch.CONFIG.interactive_matcher = ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.InteractiveCodeSearch",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.InteractiveCodeSearch",
    "category": "module",
    "text": "InteractiveCodeSearch.jl –- Interactively search Julia code\n\nJulia has @edit, @less, etc. which are very handy for reading the implementation of functions.  However, you need to specify a \"good enough\" set of (type) parameters for them to find the location of the code.\n\nInstead, InteractiveCodeSearch provides a few macros to interactively choose the code you want to read.\n\nFeatures\n\nInteractively choose a method signature before opening the code location in your editor.\nVarious ways to search methods, such as: by function name @search show, function call expression @search show(stdout, \"hello\"), function call signature @search show(::IO, ::String), module name @search Base, argument value @searchmethods 1, argument type @searchmethods ::Int, and return type @searchreturn Int.\nInteractively search history.  It works in IJulia as well.\n\nExamples\n\nusing InteractiveCodeSearch\n@search show             # search method definitions\n@searchmethods 1         # search methods defined for integer\n@searchhistory           # search history (Julia ≥ 0.7)\n@searchreturn String Pkg # search methods returning a given type (Julia ≥ 0.7)\n\nRequirements\n\nInteractive matching command.  For example:\npeco (default in terminal)\npercol\nrofi (GUI; default in IJulia)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.bg",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.bg",
    "category": "function",
    "text": "InteractiveCodeSearch.bg(id::Int = 0)\n\nLookup background search by id.  For convenience, id = 0 is the last search and id = -1 is the second last search.  More generally, non-positive id is treated as the offset from end.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.fake_newline",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.fake_newline",
    "category": "constant",
    "text": "Some random character from Unicode Private Use Area.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.find_source_file",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.find_source_file",
    "category": "function",
    "text": "find_source_file(file)\n\nFind source file and return its full path.  It just calls Base.find_source_file and return its result for normal Julia installation.  For nightly Julia build, it tries to guess the right path when Base.find_source_file failed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.get_history_provider",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.get_history_provider",
    "category": "function",
    "text": "get_history_provider() :: REPLHistoryProvider\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.load_history_provider",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.load_history_provider",
    "category": "function",
    "text": "load_history_provider() :: REPLHistoryProvider\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.read_stdout",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.read_stdout",
    "category": "function",
    "text": "read_stdout(input::AbstractString, cmd)\nread_stdout(input_provider, cmd)\n\nJulia implementation of \"echo {input} | {cmd}\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.stop",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.stop",
    "category": "function",
    "text": "InteractiveCodeSearch.stop(search::BackgroundSearch)\nInteractiveCodeSearch.stop(id::Int = 0)\n\nStop search.  The first form can be invoked via kill(search) as well (where kill is the function exported from Base).  See also bg.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "InteractiveCodeSearch.@searchInteractiveCodeSearch.@searchhistoryInteractiveCodeSearch.@searchmethodsInteractiveCodeSearch.@searchreturnInteractiveCodeSearch.BackgroundSearchInteractiveCodeSearch.CFStateInteractiveCodeSearch.CONFIGInteractiveCodeSearch.CallableFinderInteractiveCodeSearch.InteractiveCodeSearchInteractiveCodeSearch.RecursiveInteractiveCodeSearch.SearchConfigInteractiveCodeSearch.SearchPolicyInteractiveCodeSearch.SearchQueryInteractiveCodeSearch.SeenKeyInteractiveCodeSearch.ShallowInteractiveCodeSearch.TaskManagerInteractiveCodeSearch._DummyInteractiveCodeSearch.__init__InteractiveCodeSearch._choose_methodInteractiveCodeSearch._preferred_guiInteractiveCodeSearch._preferred_terminalInteractiveCodeSearch._readandwriteInteractiveCodeSearch._seenkeyInteractiveCodeSearch._set_next_inputInteractiveCodeSearch._start_search_returnInteractiveCodeSearch._taskmanagerInteractiveCodeSearch.advance_moduleInteractiveCodeSearch.advance_nameInteractiveCodeSearch.background_searchesInteractiveCodeSearch.bgInteractiveCodeSearch.choose_interactive_matcherInteractiveCodeSearch.choose_methodInteractiveCodeSearch.choose_preferred_commandInteractiveCodeSearch.code_searchInteractiveCodeSearch.code_search_methodsInteractiveCodeSearch.code_search_typedInteractiveCodeSearch.enqueueInteractiveCodeSearch.enqueue!InteractiveCodeSearch.escape_historyInteractiveCodeSearch.evalInteractiveCodeSearch.explicitly_typedInteractiveCodeSearch.fake_newlineInteractiveCodeSearch.find_source_fileInteractiveCodeSearch.get_history_providerInteractiveCodeSearch.get_ready!InteractiveCodeSearch.history_providerInteractiveCodeSearch.includeInteractiveCodeSearch.is_defined_inInteractiveCodeSearch.is_ijuliaInteractiveCodeSearch.is_locatableInteractiveCodeSearch.islineInteractiveCodeSearch.isliteralInteractiveCodeSearch.launch!InteractiveCodeSearch.list_locatablesInteractiveCodeSearch.load_history_providerInteractiveCodeSearch.matcher_installation_tipsInteractiveCodeSearch.maybe_identifierInteractiveCodeSearch.maybe_openInteractiveCodeSearch.maybe_warn_matcherInteractiveCodeSearch.mayreturnInteractiveCodeSearch.module_methodsInteractiveCodeSearch.need_guiInteractiveCodeSearch.newline_symbolInteractiveCodeSearch.nextidInteractiveCodeSearch.parse_locInteractiveCodeSearch.parse_search_policyInteractiveCodeSearch.preferred_guiInteractiveCodeSearch.preferred_terminalInteractiveCodeSearch.read_stdoutInteractiveCodeSearch.rettype_isInteractiveCodeSearch.run_matcherInteractiveCodeSearch.run_openInteractiveCodeSearch.schedule_search_returnInteractiveCodeSearch.search_by_rettypeInteractiveCodeSearch.search_methodsInteractiveCodeSearch.searchhistoryInteractiveCodeSearch.searchreturnInteractiveCodeSearch.seenkeyInteractiveCodeSearch.set_next_inputInteractiveCodeSearch.should_evalInteractiveCodeSearch.showqueryInteractiveCodeSearch.single_macrocallInteractiveCodeSearch.stopInteractiveCodeSearch.taskmanagerInteractiveCodeSearch.unescape_historyInteractiveCodeSearch.uninteresting_locsInteractiveCodeSearch.write_transformed_history"
},

]}
