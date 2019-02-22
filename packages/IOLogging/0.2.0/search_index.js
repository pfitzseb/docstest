var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IOLogging.jl-1",
    "page": "Readme",
    "title": "IOLogging.jl",
    "category": "section",
    "text": "(Image: Build Status)A simple, thin package providing basic loggers for logging to IO. As the logging functionality from Base might change in the future, so will this package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered with METADATA.jl, so you can just do ]add IOLogging to install the package."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using Logging, IOLogging\n\njulia> logger = IOLogger()\n\njulia> oldGlobal = global_logger(logger)\n\njulia> @info \"Hello World!\"\n\n# prints this (with a current timestamp):\n# [Info::2018-09-12T10:50:12.884]  Main@REPL[4]:1 - Hello World!We can also pass our own destinations for Logging:# default is stdout for everything above Info\njulia> logger = IOLogger(Dict(Logging.Info => stderr, Logging.Error => devnull))The same as above applies to FileLogger() as well, but instead of giving destination IO, we specify a destination file.# default is default.log for everything above Info\njulia> logger = FileLogger(Dict(Logging.Info => \"info.log\", Logging.Error => \"error.log\"))For more information about the individual loggers, make sure to read ?IOLogger and ?FileLogger."
},

{
    "location": "#Known-ToDo-1",
    "page": "Readme",
    "title": "Known ToDo",
    "category": "section",
    "text": "Add custom log message formatting\nAdd more tests\nMake decision on logging error catching (IOLogging.jl#20)"
},

{
    "location": "autodocs/#IOLogging.FileLogger",
    "page": "Docstrings",
    "title": "IOLogging.FileLogger",
    "category": "type",
    "text": "A generic file logger for logging to files. Flushes the necessary output stream after each write (i.e. after each logging event) by default and closes the files on finalizing. Opened files are by default appended to. Given append = false, they will be overwritten.\n\nFileLogger(logPaths = Dict(Info => \"default.log\"); flush = true, append = true)\n\nLogs logging events with LogLevel greater than or equal to Info to \"default.log\", should no logPaths be given. In case two LogLevels are present, e.g. Info and Error, all logging events from Info up to (but excluding) Error will be logged to the file given by Info. Error and above will be logged to the file given by Error. It is possible to \"clamp\" logging events, by providing an upper bound that\'s logging to /dev/null on Unix/Mac or NUL on Windows. Beware, as the message will still be composed before writing to the actual file (no hotwiring).\n\nBy default, exceptions occuring during logging are not caught. This is expected to change in the future, once it\'s decided how exceptions during logging should be handled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IOLogging.IOLogger",
    "page": "Docstrings",
    "title": "IOLogging.IOLogger",
    "category": "type",
    "text": "A generic logger for logging to any IO. Does not flush, as flushing is not a general IO operation. Also does not close the given IO.\n\nIOLogger(logIOs = Dict(Info => stdout))\n\nLogs logging events with LogLevel greater than or equal to Info to stdout, should no logIOs be given. In case two LogLevels are present, e.g. Info and Error, all logging events from Info up to (but excluding) Error will be logged to the stream given by Info. Error and above will be logged to the stream given by Error. It is possible to \"clamp\" logging events, by providing an upper bound that\'s logging to devnull. Beware, as the message will still be composed before writing to the actual stream (no hotwiring).\n\nBy default, exceptions occuring during logging are not caught. This is expected to change in the future, once it\'s decided how exceptions during logging should be handled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IOLogging._iologger",
    "page": "Docstrings",
    "title": "IOLogging._iologger",
    "category": "type",
    "text": "Abstract supertype of all loggers contained in this package.\n\nA logger subtyping this logger should have the following fields:\n\nlogIOs::Dict{LogLevel, T} where {T <: IO}\nmessageLimits::Dict{Any, Int}\n\nThis will be enforced once interfaces are available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IOLogging.FileLoggerIOLogging.IOLoggerIOLogging.IOLoggingIOLogging._iologgerIOLogging.checkLimitsIOLogging.evalIOLogging.getIOIOLogging.includeIOLogging.log!"
},

]}
