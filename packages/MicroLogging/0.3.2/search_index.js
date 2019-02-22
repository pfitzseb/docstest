var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MicroLogging-1",
    "page": "Readme",
    "title": "MicroLogging",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)Logging should be useful and pleasant for the average user and package developer, but should meet the efficiency and flexibility demands of production deployment.MicroLogging is an implementation of the new logging interface introduced in Base in julia-0.7, and brings most of same features to julia-0.6. See the Base Documentation for an overview. It may also include experimental features which will one day make it into the Logging standard library."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "Pkg.add(\"MicroLogging\")"
},

{
    "location": "#Quickstart-Example-1",
    "page": "Readme",
    "title": "Quickstart Example",
    "category": "section",
    "text": "using MicroLogging\n\n@info \"# Logging macros\"\n@debug \"A message for debugging (filtered out by default)\"\n@info \"Information about normal program operation\"\n@warn \"A potential problem was detected\"\n@error \"Something definitely went wrong\"\nx = [1 2;3 4]\n@info \"Support for key value pairs\" x a=1 b=\"asdf\"\n\n#-------------------------------------------------------------------------------\n@info \"# Progress logging\"\nfor i=1:100\n    sleep(0.01)\n    @info \"algorithm1\" progress=i/100\nend\n\n#-------------------------------------------------------------------------------\n@info \"# Log record filtering\"\n@debug begin\n    error(\"Should not be executed unless logging at debug level\")\n    \"A message\"\nend\nconfigure_logging(min_level=:debug)\n@debug \"Logging enabled at debug level and above\"\nfor i=1:10\n    @warn \"Log suppression iteration $i (maxlog=2)\" maxlog=2\nend\nmodule LogTest\n    using MicroLogging\n    function f()\n        @debug \"Message from LogTest\"\n        @info  \"Message from LogTest\"\n        @warn  \"Message from LogTest\"\n        @error \"Message from LogTest\"\n    end\nend\nLogTest.f()\nconfigure_logging(LogTest, min_level=:error)\n@info \"Set log filtering to error level for LogTest module\"\nLogTest.f()\n\n#-------------------------------------------------------------------------------\n@info \"# Task-based log dispatch using dynamic scoping\"\nfunction some_operation()\n    @info \"Dispatches to the current task logger, or the global logger\"\nend\nlogstream = IOBuffer()\nwith_logger(SimpleLogger(logstream)) do\n    @info \"Logging redirected\"\n    some_operation()\nend\n@info \"Logs, captured separately in the with_logger() block\" logstring=strip(String(take!(logstream)))\n\n#-------------------------------------------------------------------------------\n@info \"# Formatting logs can\'t crash the application\"\n@info \"Blah $(error(\"An intentional error\"))\"\n\nconfigure_logging(min_level=:info)\nnothingThe script above produces console output like the following. InteractiveLogger tries to put the metadata out of your way as much as possible by placing it on the right hand of the terminal.(Image: Micrologging example screenshot)Notice that the message part of each log record is interpreted as markdown by convention to allow for readable log formatting with various backends.  If you want to transport data, you should send it through as a user defined key value pair rather than interpolating it into the log message itself."
},

{
    "location": "#MicroLogging-implementation-choices-1",
    "page": "Readme",
    "title": "MicroLogging implementation choices",
    "category": "section",
    "text": ""
},

{
    "location": "#Early-filtering-1",
    "page": "Readme",
    "title": "Early filtering",
    "category": "section",
    "text": "The filtering of log messages should cheap enough that users feel free to leave them available rather than commenting them out or otherwise disabling them at compile time. The only way to achieve this is to filter early, before the entire log message and other log record metadata is fully determined. Thus, we have the following design challenge:Allow early filtering of log records before the record is fully constructed.In most logging libraries, a basic level of filtering is achieved based on an ordered log level which represents a verbosity/severity (debug, info, warning, error, etc).  Messages more verbose than the currently minimum level are filtered out.  This seems simple, effective and efficient as a first pass filter. Naturally, further filtering may also occur based on the log message or other log record metadata.In MicroLogging, early filtering can be controlled using the configure_logging function, which configures filtering of the current logger:configure_logging(min_level=:debug)For even more efficiency, the disable_logging() function can be used to globally disable logging below a given log for all loggers."
},

{
    "location": "#Logging-macros-1",
    "page": "Readme",
    "title": "Logging macros",
    "category": "section",
    "text": "Efficiency seems to dictate that some filtering decision is done before any logging-specific user code is run. This implies either a logging macro to insert an early test and branch, or that the log record creation is passed as a closure. We\'d also like to gather information from lexical scope, and to look up/create the logger for the current module at compile time.These considerations indicate that a macro be used, which also has the nice side effect of being visually simple:x = 42\n@info \"my value is x = $x\"To achieve early filtering, this example currently expands to something likeif Info >= MicroLogging._min_enabled_level[]\n    logger = $(current_logger())\n    if shouldlog(logger, Info)\n        logmsg(current_logger(), Info, \"my value is x = $x\", #=...=#)\n    end\nend"
},

{
    "location": "#Logging-context-and-dispatch-1",
    "page": "Readme",
    "title": "Logging context and dispatch",
    "category": "section",
    "text": "Every log record has various types of context which can be associated with it. Some types of context include:static lexical context - based on the location in the code - local variables, line number, file, function, module.\ndynamic caller context - the current stack trace, and data visible in it. Consider, for example, the context which can be passed with the femtolisp with-bindings construct.\ndynamic data context - context created from data structures available at log record creation.Log context can be used in two ways.  First, to dispatch the log record to appropriate handler code.  Second, to enrich the log record with data about the state of the program.Which code processes a log message after it is created?Here we\'ve got to choose between lexical vs dynamic scope to look up the log handler code.  MicroLogging chooses a dynamically scoped log handler bound to the current task.  To understand why this might be good choice, consider the two audiences of a logging library:Package authors want to emit logs in a simple way, without caring about how they\'re dispatched.\nApplication authors care about a complete application as built up from many packages. They need to control how log records are dispatched, but don\'t get any control over how they\'re created.Application programmers tend to be calling functions from many different packages to achieve an overall task. With dynamic scoping for log handlers, it\'s easy to control log dispatch based on task:logger = MyLogger(#= ... =#)\n\nwith_logger(logger) do\n    Package1.foo()\n    Package2.bar()\n    Package2.baz()\nendNotably, this approach works no matter how deeply nested the call tree becomes within the various functions called by Package1.foo(), without any thought by the author of any of the packages in use.Most logging libraries seem to look up the log handler in lexical scope, which implies a global entry point for log dispatch.  For example, the python community seems to have settled on using per-module contexts to dispatch log messages (TODO: double check how this works).Which metadata is automatically included with the log record?Some useful metadata is automatically generated with each record:Module\nLocation - file, line number\nid - a unique Symbol for the logger invocation"
},

{
    "location": "#Efficiency-messages-you-never-see-should-cost-almost-nothing-1",
    "page": "Readme",
    "title": "Efficiency - messages you never see should cost almost nothing",
    "category": "section",
    "text": "The following should be fast@debug begin\n    A = #=Long, complex calculation=#\n    \"det(A) = $(det(A))\"\nend... FIXME more to write here"
},

{
    "location": "autodocs/#MicroLogging.ConsoleLogger",
    "page": "Docstrings",
    "title": "MicroLogging.ConsoleLogger",
    "category": "type",
    "text": "ConsoleLogger(stream=stderr, min_level=Info; meta_formatter=default_metafmt,\n              show_limited=true, right_justify=0)\n\nLogger with formatting optimized for readability in a text console, for example interactive work with the Julia REPL.\n\nLog levels less than min_level are filtered out.\n\nMessage formatting can be controlled by setting keyword arguments:\n\nmeta_formatter is a function which takes the log event metadata (level, _module, group, id, file, line) and returns a color (as would be passed to printstyled), prefix and suffix for the log message.  The default is to prefix with the log level and a suffix containing the module, file and line location.\nshow_limited limits the printing of large data structures to something which can fit on the screen by setting the :limit IOContext key during formatting.\nright_justify is the integer column which log metadata is right justified at. The default is zero (metadata goes on its own line).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MicroLogging.InteractiveLogger",
    "page": "Docstrings",
    "title": "MicroLogging.InteractiveLogger",
    "category": "type",
    "text": "InteractiveLogger(stream::IO; min_level=Info))\n\nLogger for logging to an interactive terminal, formatting logs in a readable way.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MicroLogging.configure_logging",
    "page": "Docstrings",
    "title": "MicroLogging.configure_logging",
    "category": "function",
    "text": "configure_logging(args...; kwargs...)\n\nCall configure_logging with the current logger, and update cached log filtering information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MicroLogging.@debugMicroLogging.@errorMicroLogging.@infoMicroLogging.@logmsgMicroLogging.@warnMicroLogging.AbstractLoggerMicroLogging.ConsoleLoggerMicroLogging.InteractiveLoggerMicroLogging.LogLevelMicroLogging.MicroLoggingMicroLogging.NullLoggerMicroLogging.SimpleLoggerMicroLogging.configure_loggingMicroLogging.core_in_baseMicroLogging.current_loggerMicroLogging.default_logcolorMicroLogging.default_metafmtMicroLogging.disable_loggingMicroLogging.display_messageMicroLogging.evalMicroLogging.formatmsgMicroLogging.global_loggerMicroLogging.includeMicroLogging.levelstyleMicroLogging.parse_levelMicroLogging.print_with_decorationsMicroLogging.showvalueMicroLogging.termlengthMicroLogging.with_logger"
},

]}
