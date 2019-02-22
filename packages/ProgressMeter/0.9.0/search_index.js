var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ProgressMeter.jl-1",
    "page": "Readme",
    "title": "ProgressMeter.jl",
    "category": "section",
    "text": "(Image: Build Status)Progress meter for long-running operations in Julia"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within julia, executePkg.add(\"ProgressMeter\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Progress-meters-for-tasks-with-a-pre-determined-number-of-steps-1",
    "page": "Readme",
    "title": "Progress meters for tasks with a pre-determined number of steps",
    "category": "section",
    "text": "This works for functions that process things in loops or with map/pmap:using ProgressMeter\n\n@showprogress 1 \"Computing...\" for i in 1:50\n    sleep(0.1)\nend\n\n@showprogress pmap(1:10) do x\n    sleep(0.1)\n    x^2\nendThe first incantation will use a minimum update interval of 1 second, and show the ETA and final duration.  If your computation runs so quickly that it never needs to show progress, no extraneous output will be displayed.The @showprogress macro wraps a for loop, comprehension, or map/pmap as long as the object being iterated over implements the length method and will handle continue correctly.You can also control progress updates and reports manually:function my_long_running_function(filenames::Array)\n    n = length(filenames)\n    p = Progress(n, 1)   # minimum update interval: 1 second\n    for f in filenames\n        # Here\'s where you do all the hard, slow work\n        next!(p)\n    end\nendFor tasks such as reading file data where the progress increment varies between iterations, you can use update!:using ProgressMeter\n\nfunction readFileLines(fileName::String)\n    file = open(fileName,\"r\")\n\n    seekend(file)\n    fileSize = position(file)\n\n    seekstart(file)\n    p = Progress(fileSize, 1)   # minimum update interval: 1 second\n    while !eof(file)\n        line = readline(file)\n        # Here\'s where you do all the hard, slow work\n\n        update!(p, position(file))\n    end\nend"
},

{
    "location": "#Progress-bar-style-1",
    "page": "Readme",
    "title": "Progress bar style",
    "category": "section",
    "text": "Optionally, a description string can be specified which will be prepended to the output, and a progress meter M characters long can be shown.  E.g.p = Progress(n, 1, \"Computing initial pass...\", 50)will yieldComputing initial pass...53%|███████████████████████████                       |  ETA: 0:09:02in a manner similar to python-progressbar.Also, other properties can be modified through keywords. The glyphs used in the bar may be specified by passing a BarGlyphs object as the keyword argument barglyphs. The BarGlyphs constructor can either take 5 characters as arguments or a single 5 character string. E.g.p = Progress(n, dt=0.5, barglyphs=BarGlyphs(\"[=> ]\"), barlen=50, color=:yellow)will yieldProgress: 53%[==========================>                       ]  ETA: 0:09:02It is possible to give a vector of characters that acts like a transition between the empty character and the fully filled character. For example, definining the progress bar as:p = Progress(n, dt=0.5,\n             barglyphs=BarGlyphs(\'|\',\'█\', [\'▁\' ,\'▂\' ,\'▃\' ,\'▄\' ,\'▅\' ,\'▆\', \'▇\'],\' \',\'|\',),\n             barlen=10)might show the progress bar as:Progress:  34%|███▃      |  ETA: 0:00:02where the last bar is not yet fully filled."
},

{
    "location": "#Progress-meters-for-tasks-with-a-target-threshold-1",
    "page": "Readme",
    "title": "Progress meters for tasks with a target threshold",
    "category": "section",
    "text": "Some tasks only terminate when some criterion is satisfied, for example to achieve convergence within a specified tolerance.  In such circumstances, you can use the ProgressThresh type:prog = ProgressThresh(1e-5, \"Minimizing:\")\nfor val in exp10.(range(2, stop=-6, length=20))\n    ProgressMeter.update!(prog, val)\n    sleep(0.1)\nend"
},

{
    "location": "#Progress-meters-for-tasks-with-an-unknown-number-of-steps-1",
    "page": "Readme",
    "title": "Progress meters for tasks with an unknown number of steps",
    "category": "section",
    "text": "Some tasks only terminate when some non-deterministic criterion is satisfied. In such circumstances, you can use the ProgressUnknown type:prog = ProgressUnknown(\"Titles read:\")\nfor val in [\"a\" , \"b\", \"c\", \"d\"]\n    ProgressMeter.next!(prog)\n    if val == \"c\"\n        ProgressMeter.finish!(prog)\n        break\n    end\n    sleep(0.1)\nendThis will display the number of calls to next! until finish! is called.If your counter does not monotonically increases, you can also set the counter by hand.prog = ProgressUnknown(\"Total length of characters read:\")\ntotal_length_characters = 0\nfor val in [\"aaa\" , \"bb\", \"c\", \"d\"]\n    global total_length_characters += length(val)\n    ProgressMeter.update!(prog, total_length_characters)\n    if val == \"c\"\n        ProgressMeter.finish!(prog)\n        break\n    end\n    sleep(0.5)\nend"
},

{
    "location": "#Printing-additional-information-1",
    "page": "Readme",
    "title": "Printing additional information",
    "category": "section",
    "text": "You can also print and update information related to the computation by using the showvalues keyword. The following example displays the iteration counter and the value of a dummy variable x below the progress meter:x,n = 1,10\np = Progress(n)\nfor iter = 1:10\n    x *= 2\n    sleep(0.5)\n    ProgressMeter.next!(p; showvalues = [(:iter,iter), (:x,x)])\nend"
},

{
    "location": "#Tips-for-parallel-programming-1",
    "page": "Readme",
    "title": "Tips for parallel programming",
    "category": "section",
    "text": "When multiple processes or tasks are being used for a computation, the workers should communicate back to a single task for displaying the progress bar. This can be accomplished with a RemoteChannel:using ProgressMeter\nusing Distributed\n\np = Progress(10)\nchannel = RemoteChannel(()->Channel{Bool}(10), 1)\n\n@sync begin\n    # this task prints the progress bar\n    @async while take!(channel)\n        next!(p)\n    end\n\n    # this task does the computation\n    @async begin\n        @distributed (+) for i in 1:10\n            sleep(0.1)\n            put!(channel, true)\n            i^2\n        end\n        put!(channel, false) # this tells the printing task to finish\n    end\nend"
},

{
    "location": "#progress_map-1",
    "page": "Readme",
    "title": "progress_map",
    "category": "section",
    "text": "More control over the progress bar in a map function can be achieved with the progress_map and progress_pmap functions. The keyword argument progress can be used to supply a custom progress meter.p = Progress(10, barglyphs=BarGlyphs(\"[=> ]\"))\nprogress_map(1:10, progress=p) do x\n    sleep(0.1)\n    x^2\nend"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Thanks to Alan Bahm, Andrew Burroughs, and Jim Garrison for major enhancements to this package."
},

{
    "location": "autodocs/#ProgressMeter.@showprogress",
    "page": "Docstrings",
    "title": "ProgressMeter.@showprogress",
    "category": "macro",
    "text": "@showprogress dt \"Computing...\" for i = 1:50\n    # computation goes here\nend\n\n@showprogress dt \"Computing...\" pmap(x->x^2, 1:50)\n\ndisplays progress in performing a computation. dt is the minimum interval between updates to the user. You may optionally supply a custom message to be printed that specifies the computation being performed.\n\n@showprogress works for loops, comprehensions, map, and pmap.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.BarGlyphs",
    "page": "Docstrings",
    "title": "ProgressMeter.BarGlyphs",
    "category": "type",
    "text": "Holds the five characters that will be used to generate the progress bar.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.Progress",
    "page": "Docstrings",
    "title": "ProgressMeter.Progress",
    "category": "type",
    "text": "prog = Progress(n; dt=0.1, desc=\"Progress: \", color=:green, output=stderr, barlen=tty_width(desc)) creates a progress meter for a task with n iterations or stages. Output will be generated at intervals at least dt seconds apart, and perhaps longer if each iteration takes longer than dt. desc is a description of the current task.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.ProgressMeter",
    "page": "Docstrings",
    "title": "ProgressMeter.ProgressMeter",
    "category": "module",
    "text": "ProgressMeter contains a suite of utilities for displaying progress in long-running computations. The major functions/types in this module are:\n\n@showprogress: an easy interface for straightforward situations\nProgress: an object for managing progress updates with a predictable number of iterations\nProgressThresh: an object for managing progress updates where termination is governed by a threshold\nnext! and update!: report that progress has been made\ncancel and finish!: early termination\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.ProgressThresh",
    "page": "Docstrings",
    "title": "ProgressMeter.ProgressThresh",
    "category": "type",
    "text": "prog = ProgressThresh(thresh; dt=0.1, desc=\"Progress: \", color=:green, output=stderr) creates a progress meter for a task which will terminate once a value less than or equal to thresh is reached. Output will be generated at intervals at least dt seconds apart, and perhaps longer if each iteration takes longer than dt. desc is a description of the current task.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.ProgressUnknown",
    "page": "Docstrings",
    "title": "ProgressMeter.ProgressUnknown",
    "category": "type",
    "text": "prog = ProgressUnknown(; dt=0.1, desc=\"Progress: \", color=:green, output=stderr) creates a progress meter for a task which has a non-deterministic termination criterion. Output will be generated at intervals at least dt seconds apart, and perhaps longer if each iteration takes longer than dt. desc is a description of the current task.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.cancel",
    "page": "Docstrings",
    "title": "ProgressMeter.cancel",
    "category": "function",
    "text": "cancel(prog, [msg], [color=:red]) cancels the progress display before all tasks were completed. Optionally you can specify the message printed and its color.\n\nSee also finish!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.finish!",
    "page": "Docstrings",
    "title": "ProgressMeter.finish!",
    "category": "function",
    "text": "finish!(prog) indicates that all tasks have been completed.\n\nSee also cancel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.ncalls",
    "page": "Docstrings",
    "title": "ProgressMeter.ncalls",
    "category": "function",
    "text": "Infer the number of calls to the mapped function (i.e. the length of the returned array) given the input arguments to map or pmap.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.next!",
    "page": "Docstrings",
    "title": "ProgressMeter.next!",
    "category": "function",
    "text": "next!(prog, [color]) reports that one unit of progress has been made. Depending on the time interval since the last update, this may or may not result in a change to the display.\n\nYou may optionally change the color of the display. See also update!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.progress_map",
    "page": "Docstrings",
    "title": "ProgressMeter.progress_map",
    "category": "function",
    "text": "progress_map(f, c...; mapfun=map, progress=Progress(...), kwargs...)\n\nRun a map-like function while displaying progress.\n\nmapfun can be any function, but it is only tested with map and pmap.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.progress_pmap",
    "page": "Docstrings",
    "title": "ProgressMeter.progress_pmap",
    "category": "function",
    "text": "progress_pmap(f, [::AbstractWorkerPool], c...; progress=Progress(...), kwargs...)\n\nRun pmap while displaying progress.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProgressMeter.update!",
    "page": "Docstrings",
    "title": "ProgressMeter.update!",
    "category": "function",
    "text": "update!(prog, counter, [color]) sets the progress counter to counter, relative to the n units of progress specified when prog was initialized.  Depending on the time interval since the last update, this may or may not result in a change to the display.\n\nIf prog is a ProgressThresh, update!(prog, val, [color]) specifies the current value.\n\nYou may optionally change the color of the display. See also next!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ProgressMeter.@showprogressProgressMeter.AbstractProgressProgressMeter.BarGlyphsProgressMeter.ProgressProgressMeter.ProgressMeterProgressMeter.ProgressThreshProgressMeter.ProgressUnknownProgressMeter.ProgressWrapperProgressMeter.barstringProgressMeter.cancelProgressMeter.compute_frontProgressMeter.durationstringProgressMeter.evalProgressMeter.finish!ProgressMeter.includeProgressMeter.move_cursor_up_while_clearing_linesProgressMeter.ncallsProgressMeter.next!ProgressMeter.printoverProgressMeter.printvalues!ProgressMeter.progress_mapProgressMeter.progress_pmapProgressMeter.showprogress_process_exprProgressMeter.tty_widthProgressMeter.update!ProgressMeter.updateProgress!"
},

]}
