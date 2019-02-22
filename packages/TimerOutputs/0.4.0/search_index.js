var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TimerOutputs-1",
    "page": "Readme",
    "title": "TimerOutputs",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)TimerOutputs is a small Julia package that is used to generate formatted output from timings made in different sections of a program. It\'s main functionality is the @timeit macro, similar to the @time macro in Base except one also assigns a label to the code section being timed. Multiple calls to code sections with the same label (and in the same \"scope\") will accumulate the data for that label. After the program has executed, it is possible to print a nicely formatted table presenting how much time, allocations and number of calls were made in each section. The output can be customized as to only show the things you are interested in.If you find this package useful please give it a star. I like stars and it also helps me know where my development time is best spent."
},

{
    "location": "#Example-output-1",
    "page": "Readme",
    "title": "Example output",
    "category": "section",
    "text": "An example of the output (used in a finite element simulation) is shown below ───────────────────────────────────────────────────────────────────────────────\n                                        Time                   Allocations\n                                ──────────────────────   ───────────────────────\n        Tot / % measured:            6.89s / 97.8%           5.20GiB / 85.0%\n\n Section                ncalls     time   %tot     avg     alloc   %tot      avg\n ───────────────────────────────────────────────────────────────────────────────\n assemble                    6    3.27s  48.6%   545ms   3.65GiB  82.7%   624MiB\n   inner assemble         240k    1.92s  28.4%  7.98μs   3.14GiB  71.1%  13.7KiB\n linear solve                5    2.73s  40.5%   546ms    108MiB  2.39%  21.6MiB\n create sparse matrix        6    658ms  9.77%   110ms    662MiB  14.6%   110MiB\n export                      1   78.4ms  1.16%  78.4ms   13.1MiB  0.29%  13.1MiB\n ───────────────────────────────────────────────────────────────────────────────The first line shows the total (wall) time passed and allocations made since the start of the timer as well as the percentage of those totals spent inside timed sections. The following lines shows data for all the timed sections. The section label is shown first followed by the number of calls made to that section. Finally, the total time elapsed or allocations made in that section are shown together with the percentage of the total in that section and the average (time / allocations per call)."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The easiest way to show how the package work is with a few examples of timing sections.using TimerOutputs\n\n# Create a TimerOutput, this is the main type that keeps track of everything.\nconst to = TimerOutput()\n\n# Time a section code with the label \"sleep\" to the `TimerOutput` named \"to\"\n@timeit to \"sleep\" sleep(0.02)\n\n# Create a function to later time\nrands() = rand(10^7)\n\n# Time the function, @timeit returns the value being evaluated, just like Base @time\nrand_vals = @timeit to \"randoms\" rands();\n\n# Nested sections (sections with same name are not accumulated\n# if they have different parents)\nfunction time_test()\n    @timeit to \"nest 1\" begin\n        sleep(0.1)\n        # 3 calls to the same label\n        @timeit to \"level 2.1\" sleep(0.03)\n        @timeit to \"level 2.1\" sleep(0.03)\n        @timeit to \"level 2.1\" sleep(0.03)\n        @timeit to \"level 2.2\" sleep(0.2)\n    end\n    @timeit to \"nest 2\" begin\n        @timeit to \"level 2.1\" sleep(0.3)\n        @timeit to \"level 2.2\" sleep(0.4)\n    end\nend\n\ntime_test()\n\n# exception safe\nfunction i_will_throw()\n    @timeit to \"throwing\" do\n        sleep(0.5)\n        throw(error(\"this is fine...\"))\n        print(\"nope\")\n    end\nend\n\ni_will_throw()\n\n# Call to a previously used label accumulates data\nfor i in 1:100\n    @timeit to \"sleep\" sleep(0.01)\nend\n\n# Can also annotate function definitions\n@timeit to funcdef(x) = x\n\nfuncdef(2)Printing to shows a formatted table showing the number of calls, the total time spent in each section, and the percentage of the time spent in each section since to was created as well as averages (per call). Similar information is available for allocations: ──────────────────────────────────────────────────────────────────────\n                               Time                   Allocations\n                       ──────────────────────   ───────────────────────\n   Tot / % measured:        5.09s / 56.0%            106MiB / 74.6%\n\n Section       ncalls     time   %tot     avg     alloc   %tot      avg\n ──────────────────────────────────────────────────────────────────────\n sleep            101    1.17s  41.2%  11.6ms   1.48MiB  1.88%  15.0KiB\n nest 2             1    703ms  24.6%   703ms   2.38KiB  0.00%  2.38KiB\n   level 2.2        1    402ms  14.1%   402ms      368B  0.00%   368.0B\n   level 2.1        1    301ms  10.6%   301ms      368B  0.00%   368.0B\n throwing           1    502ms  17.6%   502ms      384B  0.00%   384.0B\n nest 1             1    396ms  13.9%   396ms   5.11KiB  0.01%  5.11KiB\n   level 2.2        1    201ms  7.06%   201ms      368B  0.00%   368.0B\n   level 2.1        3   93.5ms  3.28%  31.2ms   1.08KiB  0.00%   368.0B\n randoms            1   77.5ms  2.72%  77.5ms   77.3MiB  98.1%  77.3MiB\n funcdef            1   2.66μs  0.00%  2.66μs         -  0.00%        -\n ──────────────────────────────────────────────────────────────────────"
},

{
    "location": "#Settings-for-printing:-1",
    "page": "Readme",
    "title": "Settings for printing:",
    "category": "section",
    "text": "The print_timer([io::IO = stdout], to::TimerOutput, kwargs), (or show) takes a number of keyword arguments to change the output. They are listed here:title::String ─ title for the timer\nallocations::Bool ─ show the allocation columns (default true)\nsortby::Symbol ─ sort the sections according to :time (default), :ncalls, :allocations or :name\nlinechars::Symbol ─ use either :unicode (default) or :ascii to draw the horizontal lines in the table\ncompact::Bool ─ hide the avg column (default false)"
},

{
    "location": "#Flattening-1",
    "page": "Readme",
    "title": "Flattening",
    "category": "section",
    "text": "If sections are nested like in the example below:to = TimerOutput()\n\n@timeit to \"nest 1\" begin\n    sleep(0.1)\n    @timeit to \"level 2.1\" sleep(0.1)\n    for i in 1:20; @timeit to \"level 2.2\" sleep(0.02); end\nend\n@timeit to \"nest 2\" begin\n    for i in 1:30; @timeit to \"level 2.1\" sleep(0.01); end\n    @timeit to \"level 2.2\" sleep(0.1)\nendthe table is displayed as:julia> show(to, allocations = false, compact = true)\n ────────────────────────────────────\n Section       ncalls     time   %tot\n ────────────────────────────────────\n nest 1             1    669ms  60.5%\n   level 2.2       20    423ms  38.3%\n   level 2.1        1    101ms  9.15%\n nest 2             1    437ms  39.5%\n   level 2.1       30    335ms  30.3%\n   level 2.2        1    101ms  9.16%\n ────────────────────────────────────It is possible to flatten this timer using the TimerOutputs.flatten function that accumulates the data for all sections with identical labels:julia> to_flatten = TimerOutputs.flatten(to);\n\njulia> show(to_flatten; compact = true, allocations = false)\n ──────────────────────────────────\n Section     ncalls     time   %tot\n ──────────────────────────────────\n nest 1           1    669ms  60.5%\n level 2.2       21    525ms  47.5%\n nest 2           1    437ms  39.5%\n level 2.1       31    436ms  39.5%\n ──────────────────────────────────"
},

{
    "location": "#Resetting-1",
    "page": "Readme",
    "title": "Resetting",
    "category": "section",
    "text": "A timer is reset by calling reset_timer!(to::TimerOutput). This will remove all sections and reset the start of the timer to the current time / allocation values."
},

{
    "location": "#Indexing-into-a-table-1",
    "page": "Readme",
    "title": "Indexing into a table",
    "category": "section",
    "text": "Any TimerOutput can be indexed with the name of a section which returns a new TimerOutput with that section as the \"root\". For example:to = TimerOutput()\n\n@timeit to \"nest 1\" begin\n    @timeit to \"nest 2\" begin\n        @timeit to \"nest 3.1\" sleep(0.1)\n        @timeit to \"nest 3.2\" sleep(0.1)\n        @timeit to \"nest 3.3\" sleep(0.1)\n    end\n    sleep(0.3)\nendjulia> show(to; compact = true, allocations = false, linechars = :ascii)\n -------------------------------------\n Section        ncalls     time   %tot\n -------------------------------------\n nest 1              1    605ms   100%\n   nest 2            1    304ms  50.2%\n     nest 3.2        1    101ms  16.7%\n     nest 3.1        1    101ms  16.7%\n     nest 3.3        1    101ms  16.7%\n -------------------------------------\n\njulia> to_2 = to[\"nest 1\"][\"nest 2\"];\n\njulia> show(to_2; compact = true, allocations = false, linechars = :ascii)\n ---------------------------------\n Section    ncalls     time   %tot\n ---------------------------------\n nest 3.2        1    101ms  33.3%\n nest 3.1        1    101ms  33.3%\n nest 3.3        1    101ms  33.3%\n ---------------------------------The percentages showed are now relative to that \"root\"."
},

{
    "location": "#Querying-data-1",
    "page": "Readme",
    "title": "Querying data",
    "category": "section",
    "text": "The (unexported) functions ncalls, time, allocated give the accumulated data for a section. The returned time has units in nano seconds and allocations in bytes. For example (using the to object from above):julia> TimerOutputs.ncalls(to[\"nest 1\"])\n1\n\njulia> TimerOutputs.time(to[\"nest 1\"][\"nest 2\"])\n350441733\n\njulia> TimerOutputs.allocated(to[\"nest 1\"][\"nest 2\"])\n5280Furthermore, you can request the total time spent in the \"root\" timer:julia> TimerOutputs.tottime(to)\n604937208\n\njulia> TimerOutputs.totallocated(to)\n7632"
},

{
    "location": "#Default-Timer-1",
    "page": "Readme",
    "title": "Default Timer",
    "category": "section",
    "text": "It is often the case that it is enough to only use one timer. For convenience, there is therefore a version of all the functions and macros that do not take a TimerOutput instance and then use a global timer defined in the package. Note that this global timer is shared among all users of the package. For example:reset_timer!()\n\n@timeit \"section\" sleep(0.02)\n@timeit \"section2\" sleep(0.1)\n\nprint_timer()which prints:julia> print_timer()\n ───────────────────────────────────────────────────────────────────\n                            Time                   Allocations\n                    ──────────────────────   ───────────────────────\n  Tot / % measured:      276ms / 44.3%            422KiB / 0.21%\n\n Section    ncalls     time   %tot     avg     alloc   %tot      avg\n ───────────────────────────────────────────────────────────────────\n section2        1    101ms  82.7%   101ms      464B  50.0%     464B\n section         1   21.1ms  17.3%  21.1ms      464B  50.0%     464B\n ───────────────────────────────────────────────────────────────────The default timer object can be retrieved with TimerOutputs.get_defaulttimer()."
},

{
    "location": "#Overhead-1",
    "page": "Readme",
    "title": "Overhead",
    "category": "section",
    "text": "There is a small overhead in timing a section (0.25 μs) which means that this package is not suitable for measuring sections that finish very quickly. For proper benchmarking you want to use a more suitable tool like BenchmarkTools.It is sometimes desireable to be able \"turn on and off\" the @timeit macro. There is, however, no simple way to redefine how @timeit should work after precompilation. A simple solution is to define your own macro (here @mytimeit) that works exactly the same as @timeit except it can be enabled / disabled at will:ENABLE_TIMINGS = false\n\nmacro mytimeit(exprs...)\n    if ENABLE_TIMINGS\n        return :(@timeit($(esc.(exprs)...)))\n    else\n        return esc(exprs[end])\n    end\nendThis will create a macro that \"does nothing\" (just returns the expression) depending on the value of ENABLE_TIMINGS when the macro is expanded."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "Kristoffer Carlsson - @KristofferC"
},

{
    "location": "#Acknowledgments-1",
    "page": "Readme",
    "title": "Acknowledgments",
    "category": "section",
    "text": "This package is inspired by the TimerOutput class in deal.ii."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TimerOutputs.@timeitTimerOutputs.ALLOCATIONS_ENABLEDTimerOutputs.BOX_MODETimerOutputs.DEFAULT_TIMERTimerOutputs.TimeDataTimerOutputs.TimerOutputTimerOutputs.TimerOutputsTimerOutputs._flatten!TimerOutputs._print_timerTimerOutputs.allocatedTimerOutputs.do_accumulate!TimerOutputs.evalTimerOutputs.flattenTimerOutputs.get_defaultimerTimerOutputs.get_defaulttimerTimerOutputs.includeTimerOutputs.is_func_defTimerOutputs.longest_nameTimerOutputs.ncallsTimerOutputs.prettycountTimerOutputs.prettymemoryTimerOutputs.prettypercentTimerOutputs.prettytimeTimerOutputs.print_headerTimerOutputs.print_timerTimerOutputs.reset_timer!TimerOutputs.sortfTimerOutputs.timeTimerOutputs.timeitTimerOutputs.timer_exprTimerOutputs.timer_expr_funcTimerOutputs.timer_expr_funcddTimerOutputs.totallocatedTimerOutputs.totmeasuredTimerOutputs.tottimeTimerOutputs.truncdots"
},

]}
