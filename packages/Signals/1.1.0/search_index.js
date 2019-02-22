var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Signals-1",
    "page": "Readme",
    "title": "Signals",
    "category": "section",
    "text": "(Image: Build Status)[(Image: codecov.io)Signals provides a multi-paradigm fast functional reactive programing for julia. It supports both pull and push operations and async(default) and non-async modes."
},

{
    "location": "#Signal-Creation-1",
    "page": "Readme",
    "title": "Signal Creation",
    "category": "section",
    "text": "S = Signal(val;strict_push = false)Create a source Signal with initial value val, setting strict_push to true guarantees that every push to this Signal will be carried out independently. otherwise if updates occur faster than what the eventloop can process, then only the last value before the eventloop kicks in will be used(default)S = Signal(f,args...)Creates a derived Signal who\'s value is f(args...) , args can be of any type, Signal args get replaced by their value before calling f(args...). reads best with with do notation(see example)."
},

{
    "location": "#Syntax-1",
    "page": "Readme",
    "title": "Syntax",
    "category": "section",
    "text": "S[] = valsets the value of S to val without propagating the change to the rest of the signal graph, useful in pull based paradigmS()pull! Signal, pulling any changes in the Signal graph that affects SS(val)sets the value of S to val and pushes the changes along the Signal graphS[]gets the current value stored in S without pulling changes from the graph"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> A = Signal(1)   # source Signal\nSignal\nvalue: 1\n\njulia> B = 2           # non-Signal input\n2\n\njulia>  C = Signal(A,B) do a,b   # derived Signal\n            a+b\n        end\n\nSignal\nvalue: 3\n\njulia> A[] = 10        # set value without propagation\n10\njulia> C[]             # read current value\n3\njulia> C()             # pull latest changes from the Signal graph\n12\njulia> A(100)          # set value to a signal and propagate this change\n100\njulia> C[]\n102"
},

{
    "location": "#Operators-1",
    "page": "Readme",
    "title": "Operators",
    "category": "section",
    "text": "Signals supports several reactive operatorsdroprepeats\nwhen\nfilter\nsampleon\nfoldp\ncount\nprev\nmerge\nasync_signal\nremote_signal\nbind!\nunbind!individual documentation files are available from within julia"
},

{
    "location": "#Time-operators-1",
    "page": "Readme",
    "title": "Time operators",
    "category": "section",
    "text": "Signals supports several operators that takes time into consideration, for example debounce which executes only after a set amount of time has passed since the inputs were updated or throttle which creates a Signal that is guaranteed not to be executed more than set amount of times per second.debounce\nthrottle\nfor_signal\nfps\nevery\nbuffer"
},

{
    "location": "#Async-mode-1",
    "page": "Readme",
    "title": "Async mode",
    "category": "section",
    "text": "By default Signals run asynchronically in a dedicated eventloop, this behavior can be changed usingSignals.async_mode(false)or by individual non-async pushes to the signal graph using:push!(s,val,false)"
},

{
    "location": "#Dynamic-1",
    "page": "Readme",
    "title": "Dynamic",
    "category": "section",
    "text": "Signals is dynamic , one can push values of any type to a source signaljulia> using Signals\njulia> A = Signal(1)\nSignal\nvalue: 1\n\njulia> B = Signal(A,A) do a,b\n       a*b\n       end\nSignal\nvalue: 1\n\njulia> A(rand(3,3));\njulia> B()\n3×3 Array{Float64,2}:\n 0.753217  0.796031  0.265298\n 0.28489   0.209641  0.249161\n 0.980177  0.810512  0.571937"
},

{
    "location": "#Fast-1",
    "page": "Readme",
    "title": "Fast",
    "category": "section",
    "text": "Signals package was rigorously optimized for speed of execution and minimal recalculation of signal graph updates."
},

{
    "location": "autodocs/#Signals.Signal",
    "page": "Docstrings",
    "title": "Signals.Signal",
    "category": "type",
    "text": "S = Signal(val; strict_push = false)\n\nCreate a source Signal with initial value val, setting strict_push to true guarantees that every push to this Signal will be carried out independently. Otherwise if updates occur faster than what the eventloop can process, then only the last value before the eventloop kicks in will be used(default).\n\nS = Signal(f,args...; v0 = nothing)\n\nCreate a derived Signal whos value is f(args...), args can be of any type, Signal args get replaced by their value before calling f(args...). reads best with with do notation(see example).if v0 is not nothing then f(args...) will not be called directly after Signal creation instead the Signal will be initialized to have value v0.\n\nSyntax\n\nS[] = val\n\nSet the value of S to val without propogating the change to the rest of the signal graph, usefull in pull based paradigm.\n\nS()\n\npull! Signal, pulling any changes in the Signal graph that affects S.\n\nS(val)\n\nSet the value of S to val and pushes the changes along the Signal graph.\n\nS[]\n\nGet the current value stored in S without pulling changes from the graph.\n\nExamples\n\njulia> A = Signal(1) # source Signal\nSignal\nvalue: 1\n\njulia> B = 2 # non-Signal input\n2\n\njulia> C = Signal(A, B) do a, b # derived Signal\n           a + b\n       end\n\nSignal\nvalue: 3\n\njulia> A[] = 10 # set value without propogation\n10\njulia> C[] # reads current value\n3\njulia> C() # pull latest changes from the Signal graph\n12\njulia> A(100) # set value to a signal and propogate this change\n100\njulia> C[]\n102\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.async_signal",
    "page": "Docstrings",
    "title": "Signals.async_signal",
    "category": "function",
    "text": "s = async_signal(f, args...; init = nothing)\n\nCreate a signal initialized to init whos action f(args...) will run asynchronously in a different task whenever its arguments update.async signals only work in a push based paradigm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.bind!",
    "page": "Docstrings",
    "title": "Signals.bind!",
    "category": "function",
    "text": "bind!(dest::Signal, src::Signal)\n\nFor every update to src also update dest with the same value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.buffer",
    "page": "Docstrings",
    "title": "Signals.buffer",
    "category": "function",
    "text": "s = buffer(input; buf_size = Inf, timespan = 1, type_stable = false)\n\nCreate a signal who buffers updates to signal input until maximum size of buf_size or until timespan seconds have passed. The signal value is the last full buffer emitted or an empty vector if the buffer have never been filled before.\n\nBuffer type will be Any unless type_stable is set to true, then it will be set to the value of the first encountered item.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.count",
    "page": "Docstrings",
    "title": "Base.count",
    "category": "function",
    "text": "count_signal(s::Signal)\n\nCreate a Signal that counts updates to input Signal s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.debounce",
    "page": "Docstrings",
    "title": "Signals.debounce",
    "category": "function",
    "text": "debounce(f, args...; delay = 1, v0 = nothing)\n\nCreate a Signal whos action f(args...) will be called only after delay seconds have passed since the last time its args were updated. Only works in push based paradigm. If v0 is not specified then the initial value is f(args...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.droprepeats",
    "page": "Docstrings",
    "title": "Signals.droprepeats",
    "category": "function",
    "text": "droprepeats(input)\n\nDrop updates to input whenever the new value is the same as the previous value of the signal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.echo",
    "page": "Docstrings",
    "title": "Signals.echo",
    "category": "function",
    "text": "echo(s::Signal,name = \"\")\n\nechos the value of signal s on each update, you can specify a name to distinguish between different echos\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.every",
    "page": "Docstrings",
    "title": "Signals.every",
    "category": "function",
    "text": "s = every(dt; duration = Inf)\n\nA signal that updates every dt seconds to the current timestamp, for duration seconds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.foldp",
    "page": "Docstrings",
    "title": "Signals.foldp",
    "category": "function",
    "text": "fold over past values\n\nfoldp(op, v0 ,sig)\n\nreduce the given signal sig with the given binary operator op.  the value of the signal just after creation is op(v0,sig[])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.for_signal",
    "page": "Docstrings",
    "title": "Signals.for_signal",
    "category": "function",
    "text": " s = for_signal(f::Function, range, args...; fps = 1)\n\nCreate a Signal that updates to f(i,args....) for i in range every 1/fps seconds. range and args can be of type Signal or any other type. The loop starts whenever one of the arguments updates. If the previous for loop did not complete it gets cancelled.\n\nExample\n\nrng = Signal(1:5)\nA = Signal(2)\nB = for_signal(rng,A;fps = 30) do i,a\n    println(a^i)\nend;\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.fps",
    "page": "Docstrings",
    "title": "Signals.fps",
    "category": "function",
    "text": "s = fps(freq; duration = Inf)\n\nA signal that updates freq times a second to the current timestamp, for duration seconds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.fpswhen",
    "page": "Docstrings",
    "title": "Signals.fpswhen",
    "category": "function",
    "text": "s = fpswhen(switch::Signal, freq; duration = Inf)\n\nA signal that updates \'freq\' times a second to the current timestamp, for duration seconds if and only if the value of switch is true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.previous",
    "page": "Docstrings",
    "title": "Signals.previous",
    "category": "function",
    "text": "previous(s::Signal)\n\nCreate a Signal that holds previous input to s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.recursion_free",
    "page": "Docstrings",
    "title": "Signals.recursion_free",
    "category": "function",
    "text": "recursion_free(f::Function,args...)\n\ncreates a Signal whos action f(args...) is protected against infinite loop recursion.\n\njulia> A = Signal(1)\njulia> B = recursion_free(A) do a\n            A(a+1)\n       end\n\njulia> A(10)\n10\njulia> A[]\n11\n\nIn the example above ,if recursion_free were to be subsituted with regular Signal it would result in an infinite loop in the non-async mode recursion_free protects against that\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.remote_signal",
    "page": "Docstrings",
    "title": "Signals.remote_signal",
    "category": "function",
    "text": "s = remote_signal(f, args...; init = nothing, procid = first(workers()))\n\nCreate a signal initialized to init whos action f(args...) will run remotely in a process with id procid, whenever its arguments update.remote signals only work in a push based paradigm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.sampleon",
    "page": "Docstrings",
    "title": "Signals.sampleon",
    "category": "function",
    "text": "sampleon(A, B)\n\nSample the value of B whenever A updates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.state",
    "page": "Docstrings",
    "title": "Signals.state",
    "category": "function",
    "text": "Retrieve the internal state of a Signal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.strict_push!",
    "page": "Docstrings",
    "title": "Signals.strict_push!",
    "category": "function",
    "text": "strict_push!(s::Signal, val, async = Signals.async_mode())\n\nSet s to val and propagate into derived signals, is async is true(default) then updates to derived signals will occur asynchronically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.throttle",
    "page": "Docstrings",
    "title": "Signals.throttle",
    "category": "function",
    "text": "throttle(f::Function, args...; maxfps = 0.03)\n\nCreate a throttled Signal whos action f(args...) will be called only if 1/maxfps time has passed since the last time it updated. The resulting Signal will be updated maximum of maxfps times per second.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.unbind!",
    "page": "Docstrings",
    "title": "Signals.unbind!",
    "category": "function",
    "text": "unbind!(dst::Signal,src::Signal)\n\nRemove bindings from src to dst that were previously created using bind.\n\nunbind!(dst::Signal)\n\nRemove all bindings that were previously created using bind that will cause dst to update.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Signals.when",
    "page": "Docstrings",
    "title": "Signals.when",
    "category": "function",
    "text": "when(f, condition::Signal, args...; v0 = nothing)\n\nCreate a Signal that will update to f(args...) when any of its input args updates only if condition has value true. If condition != true in the time of creation the signal will be initialized to value v0.\n\nExamples\n\njulia> A = Signal(1)\njulia> condition = Signal(A) do a\n           a<10\n       end\njulia> B = when(condition,A) do a\n       println(\"$a is smaller than 10\")\n   end\njulia> A(1)\n1 is smaller than 10\n1\n\njulia> A(12)\n12\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Signals.DropRepeatsSignals.FilterSignals.MergeSignals.PullActionSignals.PullTypeSignals.RecursionFreeSignals.SignalSignals.SignalDataSignals.SignalExceptionSignals.SignalsSignals.StandardPullSignals.StatelessSignals.ThrottleSignals.TypedSignalSignals.WhenSignals.__init__Signals._async_modeSignals._debug_modeSignals.actionSignals.activate_timerSignals.add_child!Signals.async_modeSignals.async_signalSignals.bind!Signals.bufferSignals.call_no_inlineSignals.clean_stacktraceSignals.countSignals.debounceSignals.debug_modeSignals.droprepeatsSignals.echoSignals.empty_queuesSignals.evalSignals.eventloopSignals.eventloop_condSignals.everySignals.foldpSignals.for_signalSignals.fpsSignals.fpswhenSignals.handle_errSignals.includeSignals.invalidate!Signals.previousSignals.propagatedSignals.propogate!Signals.pull!Signals.pull_argsSignals.pull_enqueueSignals.pull_queueSignals.push_queueSignals.recursion_freeSignals.remote_signalSignals.run_till_nowSignals.sampleonSignals.set_value!Signals.soft_push!Signals.stateSignals.store!Signals.strict_push!Signals.throttleSignals.unbind!Signals.validSignals.valid_argsSignals.validateSignals.valueSignals.whenSignals.world_age"
},

]}
