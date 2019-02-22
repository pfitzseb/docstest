var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Reactive-1",
    "page": "Readme",
    "title": "Reactive",
    "category": "section",
    "text": "(Image: Build Status) (Image: Reactive) (Image: Reactive)Reactive.jl is a package for reactive programming in Julia.Reactive borrows its design from Elm (see Functional Reactive Programming)."
},

{
    "location": "#Quickstart-1",
    "page": "Readme",
    "title": "Quickstart",
    "category": "section",
    "text": "Pkg.add(\"Reactive\")\nusing ReactiveTutorial and API documentation\nIssues"
},

{
    "location": "autodocs/#Reactive.async_map",
    "page": "Docstrings",
    "title": "Reactive.async_map",
    "category": "function",
    "text": "tasks, results = async_map(f, init, input...;typ=typeof(init), onerror=Reactive.print_error)\n\nSpawn a new task to run a function when input signal updates. Returns a signal of tasks and a results signal which updates asynchronously with the results. init will be used as the default value of results. onerror is the callback to be called when an error occurs, by default it is set to a callback which prints the error to stderr. It\'s the same as the onerror argument to push! but is run in the spawned task.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.bind!",
    "page": "Docstrings",
    "title": "Reactive.bind!",
    "category": "function",
    "text": "`bind!(dest, src, twoway=true; initial=true)`\n\nfor every update to src also update dest with the same value and, if twoway is true, vice-versa. If initial is false, dest will only be updated to src\'s value when src next updates, otherwise (if initial is true) both dest and src will take src\'s value immediately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.bindmap!",
    "page": "Docstrings",
    "title": "Reactive.bindmap!",
    "category": "function",
    "text": "`bindmap!(dest::Signal, src2dest::Function, src::Signal, dest2src=nothing; initial=true)`\n\nfor every update to src also update dest with a modified value (using the function src2dest) and, if dest2src is specified, a two-way update will hold. If initial is false, dest will only be updated to src\'s modified value when src next updates, otherwise (if initial is true) both dest and src will take their respective modified values immediately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.bound_dests",
    "page": "Docstrings",
    "title": "Reactive.bound_dests",
    "category": "function",
    "text": "bound_dests(src::Signal) returns a vector of all signals that will update when src updates, that were bound using bind!(dest, src)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.bound_srcs",
    "page": "Docstrings",
    "title": "Reactive.bound_srcs",
    "category": "function",
    "text": "bound_srcs(dest::Signal) returns a vector of all signals that will cause an update to dest when they update, that were bound using bind!(dest, src)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.connect_flatten",
    "page": "Docstrings",
    "title": "Reactive.connect_flatten",
    "category": "function",
    "text": "connect_flatten(output, input)\n\noutput is the flatten node, input is the Signal{Signal} (\"sigsig\") node. The flatten needs to update on changes to the input sigsig, or changes to the value of the current sig (current_node). The former is achieved through a foreach wire_flatten attached to the input sigsig. The latter is achieved through binding the flatten to current_node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.debounce",
    "page": "Docstrings",
    "title": "Reactive.debounce",
    "category": "function",
    "text": "debounce(dt, input, f=(acc,x)->x, init=value(input), reinit=x->x;\n            typ=typeof(init), name=auto_name!(string(\"debounce \",dt,\"s\"), input))\n\nCreates a signal that will delay updating until dt seconds have passed since the last time input has updated. By default, the debounce signal holds the last update of the input signal since the debounce signal last updated.\n\nThis behavior can be changed by the f, init and reinit arguments. The init and f functions are similar to init and f in foldp. reinit is called after the debounce sends an update, to reinitialize the initial value for accumulation, it gets one argument, the previous accumulated value.\n\nFor example     y = debounce(0.2, x, push!, Int[], _->Int[]) will accumulate a vector of updates to the integer signal x and push it after x is inactive (doesn\'t update) for 0.2 seconds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.delay",
    "page": "Docstrings",
    "title": "Reactive.delay",
    "category": "function",
    "text": "delay(input, default=value(input))\n\nSchedule an update to happen after the current update propagates throughout the signal graph.\n\nReturns the delayed signal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.droprepeats",
    "page": "Docstrings",
    "title": "Reactive.droprepeats",
    "category": "function",
    "text": "droprepeats(input)\n\nDrop updates to input whenever the new value is the same as the previous value of the signal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.every",
    "page": "Docstrings",
    "title": "Reactive.every",
    "category": "function",
    "text": "every(dt)\n\nA signal that updates every dt seconds to the current timestamp. Consider using fpswhen or fps if you want specify the timing signal by frequency, rather than delay.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.filter",
    "page": "Docstrings",
    "title": "Base.filter",
    "category": "function",
    "text": "filter(f, default, signal)\n\nremove updates from the signal where f returns false. The filter will hold the value default until f(value(signal)) returns true, when it will be updated to value(signal).\n\n\n\n\n\nfilter(f, signal)\n\nremove updates from the signal where f returns false. The filter will hold the current value of the signal until f(value(signal)) returns true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.filterwhen",
    "page": "Docstrings",
    "title": "Reactive.filterwhen",
    "category": "function",
    "text": "filterwhen(switch::Signal{Bool}, default, input)\n\nKeep updates to input only when switch is true.\n\nIf switch is false initially, the specified default value is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.flatten",
    "page": "Docstrings",
    "title": "Reactive.flatten",
    "category": "function",
    "text": "flatten(input::Signal{Signal}; typ=Any)\n\nFlatten a signal of signals into a signal which holds the value of the current signal. The typ keyword argument specifies the type of the flattened signal. It is Any by default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.foldp",
    "page": "Docstrings",
    "title": "Reactive.foldp",
    "category": "function",
    "text": "foldp(f, init, inputs...)\n\nFold over past values.\n\nAccumulate a value as the input signals change. init is the initial value of the accumulator. f should take 1 + length(inputs) arguments: the first is the current accumulated value and the rest are the current input signal values. f will be called when one or more of the inputs updates. It should return the next accumulated value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.fps",
    "page": "Docstrings",
    "title": "Reactive.fps",
    "category": "function",
    "text": "fps(rate)\n\nSame as fpswhen(Input(true), rate)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.fpswhen",
    "page": "Docstrings",
    "title": "Reactive.fpswhen",
    "category": "function",
    "text": "fpswhen(switch, rate)\n\nreturns a signal which when switch signal is true, updates rate times every second. If rate is not possible to attain because of slowness in computing dependent signal values, the signal will self adjust to provide the best possible rate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.getlastactive",
    "page": "Docstrings",
    "title": "Reactive.getlastactive",
    "category": "function",
    "text": "getlastactive(merge_node) Search backwards in nodes, and return the first active node that is one of merge_node\'s parents\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.map",
    "page": "Docstrings",
    "title": "Base.map",
    "category": "function",
    "text": "map(f, s::Signal...) -> signal\n\nTransform signal s by applying f to each element. For multiple signal arguments, apply f elementwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.merge",
    "page": "Docstrings",
    "title": "Base.merge",
    "category": "function",
    "text": "merge(inputs...)\n\nMerge many signals into one. Returns a signal which updates when any of the inputs update. If many signals update at the same time, the value of the youngest (most recently created) input signal is taken.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.pause_push",
    "page": "Docstrings",
    "title": "Reactive.pause_push",
    "category": "function",
    "text": "Pause a push by recording the active nodes and setting them to inactive. The push can be resumed by reactivating the nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.preserve",
    "page": "Docstrings",
    "title": "Reactive.preserve",
    "category": "function",
    "text": "preserve(signal::Signal)\n\nprevents signal from being garbage collected as long as any of its parents are around. Useful for when you want to do some side effects in a signal. e.g. preserve(map(println, x)) - this will continue to print updates to x, until x goes out of scope. foreach is a shorthand for map with preserve.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.previous",
    "page": "Docstrings",
    "title": "Reactive.previous",
    "category": "function",
    "text": "previous(input, default=value(input))\n\nCreate a signal which holds the previous value of input. You can optionally specify a different initial value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.push!",
    "page": "Docstrings",
    "title": "Base.push!",
    "category": "function",
    "text": "push!(signal, value, onerror=Reactive.print_error)\n\nQueue an update to a signal. The update will be propagated when all currently queued updates are done processing.\n\nThe third (optional) argument, onerror, is a callback triggered when the update ends in an error. The callback receives 4 arguments, onerror(sig, val, node, capex), where sig and val are the Signal and value that push! was called with, respectively, node is the Signal whose action triggered the error, and capex is a CapturedException with the fields ex which is the original exception object, and processed_bt which is the backtrace of the exception.\n\nThe default error callback will print the error and backtrace to stderr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.remote_map",
    "page": "Docstrings",
    "title": "Reactive.remote_map",
    "category": "function",
    "text": "remoterefs, results = remote_map(procid, f, init, input...;typ=typeof(init), onerror=Reactive.print_error)\n\nSpawn a new task on process procid to run a function when input signal updates. Returns a signal of remote refs and a results signal which updates asynchronously with the results. init will be used as the default value of results. onerror is the callback to be called when an error occurs, by default it is set to a callback which prints the error to stderr. It\'s the same as the onerror argument to push! but is run in the spawned task.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.remove_action!",
    "page": "Docstrings",
    "title": "Reactive.remove_action!",
    "category": "function",
    "text": "Removes action from node.actions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.remove_dead_nodes!",
    "page": "Docstrings",
    "title": "Reactive.remove_dead_nodes!",
    "category": "function",
    "text": "Remove GC\'d nodes from nodes, is run before push! when scheduled. Not thread-safe in the sense that if it is run while other code is iterating through nodes, e.g. in run_push, iteration could skip nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.rename!",
    "page": "Docstrings",
    "title": "Reactive.rename!",
    "category": "function",
    "text": "rename!(s::Signal, name::String)\n\nChange a Signal\'s name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.run",
    "page": "Docstrings",
    "title": "Reactive.run",
    "category": "function",
    "text": "Processes n messages from the Reactive event queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.run_node",
    "page": "Docstrings",
    "title": "Reactive.run_node",
    "category": "function",
    "text": "A node\'s actions should be run if any of its parents are active, since that generally means one (or more) of the parent nodes\' values have changed. If the node doesn\'t have actions, don\'t set it to active, since its value won\'t be updated, meaning the update propagation can stop. N.b. The non-active when node has no actions mechanism is relied on for correct behaviour by fpswhen, and possibly other operators, i.e. it is not just an optimisation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.sampleon",
    "page": "Docstrings",
    "title": "Reactive.sampleon",
    "category": "function",
    "text": "sampleon(a, b)\n\nSample the value of b whenever a updates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.schedule_node_cleanup",
    "page": "Docstrings",
    "title": "Reactive.schedule_node_cleanup",
    "category": "function",
    "text": "Schedule a cleanup of dead nodes - called as a finalizer on each GC\'d node\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.throttle",
    "page": "Docstrings",
    "title": "Reactive.throttle",
    "category": "function",
    "text": "throttle(dt, input, f=(acc,x)->x, init=value(input), reinit=x->x;\n            typ=typeof(init), name=auto_name!(string(\"throttle \",dt,\"s\"), input), leading=false)\n\nThrottle a signal to update at most once every dt seconds. By default, the throttled signal holds the last update of the input signal during each dt second time window.\n\nThis behavior can be changed by the f, init and reinit arguments. The init and f functions are similar to init and f in foldp. reinit is called when a new throttle time window opens to reinitialize the initial value for accumulation, it gets one argument, the previous accumulated value.\n\nFor example     y = throttle(0.2, x, push!, Int[], _->Int[]) will create vectors of updates to the integer signal x which occur within 0.2 second time windows.\n\nIf leading is true, the first update from input will be sent immediately by the throttle signal. If it is false, the first update will happen dt seconds after input\'s first update\n\nNew in v0.4.1: throttle\'s behaviour from previous versions is now available with the debounce signal type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.unbind!",
    "page": "Docstrings",
    "title": "Reactive.unbind!",
    "category": "function",
    "text": "`unbind!(dest, src, twoway=true)`\n\nremove a link set up using bind!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reactive.unpreserve",
    "page": "Docstrings",
    "title": "Reactive.unpreserve",
    "category": "function",
    "text": "unpreserve(signal::Signal)\n\nallow signal to be garbage collected. See also preserve.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Reactive.CHANNEL_SIZEReactive.MaybeMessageReactive.MessageReactive.NullExceptionReactive.ReactiveReactive.SignalReactive.__init__Reactive._active_bindsReactive._bindingsReactive._messagesReactive.activate!Reactive.add_action!Reactive.async_mapReactive.async_modeReactive.async_push!Reactive.auto_name!Reactive.bind!Reactive.bindmap!Reactive.bound_destsReactive.bound_srcsReactive.break_loopReactive.closeReactive.connect_delayReactive.connect_droprepeatsReactive.connect_filterReactive.connect_filterwhenReactive.connect_flattenReactive.connect_foldpReactive.connect_mapReactive.connect_mergeReactive.connect_previousReactive.connect_sampleonReactive.deactivate!Reactive.debounceReactive.debug_memoryReactive.debug_modeReactive.delayReactive.droprepeatsReactive.edgesReactive.evalReactive.everyReactive.every_connectReactive.filterReactive.filterwhenReactive.flattenReactive.foldpReactive.fpsReactive.fpswhenReactive.fpswhen_connectReactive.getlastactiveReactive.includeReactive.io_lockReactive.isactiveReactive.isnullReactive.log_gcReactive.mapReactive.maybe_restart_queueReactive.mergeReactive.node_countReactive.nodesReactive.nodesetReactive.onerror_rethrowReactive.pause_pushReactive.preserveReactive.previousReactive.print_errorReactive.probeReactive.push!Reactive.reinit_edges!Reactive.remote_mapReactive.remove_action!Reactive.remove_dead_nodes!Reactive.rename!Reactive.restart_queueReactive.runReactive.run_asyncReactive.run_nodeReactive.run_pushReactive.run_remove_dead_nodesReactive.run_till_nowReactive.runactionReactive.runner_taskReactive.sampleonReactive.schedule_node_cleanupReactive.set_debug_modeReactive.set_value!Reactive.setup_next_tickReactive.stopReactive.throttleReactive.throttle_connectReactive.unbind!Reactive.unpreserveReactive.value"
},

]}
