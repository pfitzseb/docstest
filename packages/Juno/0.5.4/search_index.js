var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Juno.jl-1",
    "page": "Readme",
    "title": "Juno.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Docs)This package defines Juno\'s frontend API (to install Juno, follow the instructions here). It is aimed primarily at allowing package authors to:Integrate with Juno\'s display system to define custom output for graphics and data structures\nTake advantage of frontend features (like showing progress metres or asking for user input) with appropriate fallbacks in other environmentsAll while having only a small, pure Julia dependency (this package) as opposed to the entire Atom.jl tree."
},

{
    "location": "autodocs/#Juno.@enter",
    "page": "Docstrings",
    "title": "Juno.@enter",
    "category": "macro",
    "text": "@enter ex\n\nStep into the function call in ex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.@profiler",
    "page": "Docstrings",
    "title": "Juno.@profiler",
    "category": "macro",
    "text": "@profiler\n\nClear currently collected profile traces, profile the provided expression and show it via Juno.profiler().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.@progress",
    "page": "Docstrings",
    "title": "Juno.@progress",
    "category": "macro",
    "text": "@progress [name=\"\", threshold=0.005] for i = ..., j = ..., ...\n@progress [name=\"\", threshold=0.005] x = [... for i = ..., j = ..., ...]\n\nShow a progress meter named name for the given loop or array comprehension if possible. Update frequency is limited by threshold (one update per 0.5% of progress by default).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.clearconsole",
    "page": "Docstrings",
    "title": "Juno.clearconsole",
    "category": "function",
    "text": "clearconsole()\n\nClear the console if Juno is used; does nothing otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.defaultrepr",
    "page": "Docstrings",
    "title": "Juno.defaultrepr",
    "category": "function",
    "text": "defaultrepr(x, lazy = false)\n\nrender fallback for types without any specialized show methods.\n\nIf lazy is true, then the type\'s fields will be loaded lazily when expanding the tree. This is useful when the fields contain big elements that might need to be inspectable.\n\nCan be used by packages to restore Juno\'s default printing if they have defined a show method that should not be used by Juno:\n\nJuno.render(i::Juno.Inline, x::myType) = Juno.render(i, Juno.defaultrepr(x))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.info",
    "page": "Docstrings",
    "title": "Juno.info",
    "category": "function",
    "text": "info(msg)\n\nShow the given message in Juno\'s console using blue styling, or fall back to Base.info.\n\nIn a package, you can use import Juno: info to replace the default version with this one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.input",
    "page": "Docstrings",
    "title": "Juno.input",
    "category": "function",
    "text": "input(prompt = \"\") -> \"...\"\n\nPrompt the user to input some text, and return it. Optionally display a prompt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.isactive",
    "page": "Docstrings",
    "title": "Juno.isactive",
    "category": "function",
    "text": "isactive()\n\nWill return true when the current Julia process is connected to a running Juno frontend.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.notify",
    "page": "Docstrings",
    "title": "Juno.notify",
    "category": "function",
    "text": "notify(msg)\n\nDisplay msg as an OS specific notification.\n\nUseful for signaling the end of a long running computation or similar. This disregards the Notifications setting in julia-client. Falls back to info(msg) in other environments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.plotsize",
    "page": "Docstrings",
    "title": "Juno.plotsize",
    "category": "function",
    "text": "plotsize()\n\nGet the size of Juno\'s plot pane in px. Returns [100, 100] as a fallback value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.profiler",
    "page": "Docstrings",
    "title": "Juno.profiler",
    "category": "function",
    "text": "profiler()\n\nShow currently collected profile information as an in-editor flamechart.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.profiletree",
    "page": "Docstrings",
    "title": "Juno.profiletree",
    "category": "function",
    "text": "profiletree()\n\nShow currently collected profile information in tree-form. Falls back to Profile.print().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.progress",
    "page": "Docstrings",
    "title": "Juno.progress",
    "category": "function",
    "text": "progress(f::Function; name = \"\", msg = \"\")\n\nEvaluates f with id as its argument and makes sure to destroy the progress bar afterwards. To update the progress bar in f you can call a logging statement like @info or even just @logmsg with _id=id and progress as arguments.\n\nprogress can take either of the following values:\n\n0 <= progress < 1: create or update progress bar\nprogress == nothing || progress = NaN: set progress bar to indeterminate progress\nprogress > 1 || progress == \"done\": destroy progress bar\n\nThe logging message (e.g. \"foo\" in @info \"foo\") will be used as the progress bar\'s name.\n\nJuno.progress() do id\n    for i = 1:10\n        sleep(0.5)\n        @info \"iterating\" progress=i/10 _id=id\n    end\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.selector",
    "page": "Docstrings",
    "title": "Juno.selector",
    "category": "function",
    "text": "selector([xs...]) -> x\n\nAllow the user to select one of the xs.\n\nxs should be an iterator of strings. Currently there is no fallback in other environments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.structure",
    "page": "Docstrings",
    "title": "Juno.structure",
    "category": "function",
    "text": "structure(x)\n\nDisplay x\'s underlying representation, rather than using its normal display method.\n\nFor example, structure(:(2x+1)) displays the Expr object with its head and args fields instead of printing the expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Juno.syntaxcolors",
    "page": "Docstrings",
    "title": "Juno.syntaxcolors",
    "category": "function",
    "text": "syntaxcolors(selectors = Atom.SELECTORS)::Dict{String, UInt32}\n\nGet the colors used by the current Atom theme. selectors should be a Dict{String, Vector{String}} which assigns a css selector (e.g. syntax--julia) to a name (e.g. variable).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Juno.@enterJuno.@profilerJuno.@progressJuno.@renderJuno.@shJuno.ClipboardJuno.ConsoleJuno.CopyableJuno.EditorJuno.InlineJuno.JunoJuno.LazyTreeJuno.LinkJuno.MediaJuno.ModelJuno.PROGRESSLEVELJuno.PlotPaneJuno.RowJuno.SubTreeJuno.TableJuno.TreeJuno.UNDEFJuno._activeJuno._comprehensionJuno._forJuno._progressJuno.activateJuno.breakpointJuno.clearconsoleJuno.connectJuno.defaultreprJuno.dimsJuno.errmsgJuno.errtraceJuno.evalJuno.fadeJuno.iconJuno.includeJuno.infoJuno.inputJuno.interleaveJuno.isactiveJuno.isprecompilingJuno.limitJuno.linkJuno.mediaJuno.notifyJuno.plotsizeJuno.profilerJuno.profiletreeJuno.progressJuno.selectorJuno.setactive!Juno.structureJuno.syntaxcolorsJuno.undefsJuno.view"
},

]}
