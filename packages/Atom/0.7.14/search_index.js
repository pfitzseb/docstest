var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Atom-1",
    "page": "Readme",
    "title": "Atom",
    "category": "section",
    "text": "(Image: Build Status) (Image: Docs)This is the language server backend for Juno, the Julia IDE. The frontend for certain exposed functionality (getting input, showing a selector widget etc.) is provided via Juno.jl, which is a much more lightweight (and pure Julia) dependency.For documentation on how the communication between client and server is handled, head on over to the developer documentation at atom-julia-client."
},

{
    "location": "autodocs/#Atom.@ierrs",
    "page": "Docstrings",
    "title": "Atom.@ierrs",
    "category": "macro",
    "text": "@ierrs(expression)\n\nCatches errors internal to Atom.jl and renders them in the client.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.@msg",
    "page": "Docstrings",
    "title": "Atom.@msg",
    "category": "macro",
    "text": "@msg(expression)\n\nCalls msg with the name of the top-level function in expression as the first argument and the arguments of that function as the remaining arguments. Note that the toplevel function call will not be evaluated.\n\nExample: @msg(sin(3)) will call msg(\"sin\", 3), i.e.\n\nmacroexpand(:(Atom.@msg(sin(3)))) == :((Atom.msg)(\"sin\",3))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.@rpc",
    "page": "Docstrings",
    "title": "Atom.@rpc",
    "category": "macro",
    "text": "@rpc(expression)\n\nCalls rpc with the name of the top-level function in expression as the first argument and the arguments of that function as the remaining arguments. Note that the toplevel function call will not be evaluated.\n\nExample: @rpc(sin(3)) will call rpc(\"sin\", 3), i.e.\n\nmacroexpand(:(Atom.@rpc(sin(3)))) == :((Atom.rpc)(\"sin\",3))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.handle",
    "page": "Docstrings",
    "title": "Atom.handle",
    "category": "function",
    "text": "handle(func, typ)\n\nSet the handler for messages of type typ to func.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.handlemsg",
    "page": "Docstrings",
    "title": "Atom.handlemsg",
    "category": "function",
    "text": "handlemsg(typ, args...)\n\nTries to call the message handler corresponding to typ (which can be set with handle).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.initialise",
    "page": "Docstrings",
    "title": "Atom.initialise",
    "category": "function",
    "text": "initialise(; welcome = false)\n\nSets up the environment for Atom.jl: Stop SIGINTs from killing Julia and send a welcome message to Atom if welcome == true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.isactive",
    "page": "Docstrings",
    "title": "Atom.isactive",
    "category": "function",
    "text": "isactive(sock)\n\nCheck whether the socked sock exists and is open.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.msg",
    "page": "Docstrings",
    "title": "Atom.msg",
    "category": "function",
    "text": "msg(typ, args...)\n\nPrints a json string to sock that contains all function arguments in an array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.rpc",
    "page": "Docstrings",
    "title": "Atom.rpc",
    "category": "function",
    "text": "rpc(typ, args...)\n\nSends a message to sock via msg. Blocks until the client returns a message (which needs to send back the callback field).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.serve",
    "page": "Docstrings",
    "title": "Atom.serve",
    "category": "function",
    "text": "serve(port; kws...)\n\nStart an asynchronous Julia server that listens on localhost:port and handle the messages sent over that socket. The kws... are passed through to initialise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Atom.sock",
    "page": "Docstrings",
    "title": "Atom.sock",
    "category": "constant",
    "text": "sock\n\nSocket over which the communication between server and client happens. Initialized by serve.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Atom.@!Atom.@errsAtom.@ierrsAtom.@msgAtom.@rpcAtom.@traceAtom.AtomAtom.DisplayErrorAtom.EvalErrorAtom.JunoDisplayAtom.PlotPaneEnabledAtom.ProfilerAtom.ProgressAtom.SELECTORSAtom.__init__Atom._idAtom.ansAtom.appendlineAtom.basecompletionadapterAtom.baselinkAtom.basepathAtom.bestlabelAtom.callbacksAtom.changeREPLmoduleAtom.changeREPLpromptAtom.clearconsoleAtom.cliptraceAtom.completionAtom.completionmoduleAtom.completionsummaryAtom.completiontextAtom.completiontypeAtom.connectAtom.current_promptAtom.customdisplaystackAtom.defaultreprAtom.descriptionAtom.display_errorAtom.display_parse_errorAtom.displayandrenderAtom.displayinplotpaneAtom.ends_with_semicolonAtom.enterAtom.evalAtom.evallockAtom.evalreplAtom.exit_on_sigintAtom.expandpathAtom.finddevpackagesAtom.fixdisplayorderAtom.fixjunodisplaysAtom.fullREPLpathAtom.fullpathAtom.generateTreeViewAtom.get_main_modeAtom.getdocsAtom.getfield′Atom.getmethodsAtom.getmoduleinfoAtom.getmodule′Atom.gettraceAtom.gotoitemAtom.handleAtom.handlemsgAtom.handlersAtom.hidepromptAtom.highlightsAtom.idAtom.inREPLAtom.includeAtom.infoAtom.initialiseAtom.inline_mimeAtom.inputAtom.interposeAtom.isREPLAtom.isactiveAtom.isanonAtom.isconnectedAtom.isdebuggingAtom.isfile′Atom.ismacroAtom.ispackageAtom.isselectionAtom.isuntitledAtom.jlpane_mimeAtom.juliapromptAtom.latex2katexAtom.locationshadingAtom.matchesprefixAtom.md_hlinesAtom.methodarrayAtom.moduleinfoAtom.modulenamesAtom.modulesymbolsAtom.msgAtom.packageinfoAtom.pkgpathAtom.plain_mimesAtom.plotpane_io_ctxAtom.plotpane_mimeAtom.plotsizeAtom.ploturlAtom.realpath′Atom.renderMDAtom.renderMDinlineAtom.renderbtAtom.rendererrAtom.renderitemAtom.render′Atom.replevalAtom.reset_repl_historyAtom.restoredisplaystackAtom.returntypeAtom.rpcAtom.selectorAtom.sendnotifyAtom.serveAtom.showmethodAtom.showtraceAtom.sockAtom.stripparamsAtom.strlimitAtom.structureAtom.syntaxcolorsAtom.transformwarnAtom.treeidAtom.treesAtom.trimAtom.typAtom.withpathAtom.wsiconAtom.wsitemAtom.wsnamedAtom.wstype"
},

]}
