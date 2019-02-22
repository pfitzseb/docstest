var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SnoopCompile-1",
    "page": "Readme",
    "title": "SnoopCompile",
    "category": "section",
    "text": "(Image: Build Status)SnoopCompile \"snoops\" on the Julia compiler, getting it to log the functions and argument-types it\'s compiling.  By parsing the log file, you can learn which functions are being precompiled, and even how long each one takes to compile.  You can use the package to generate \"precompile lists\" that reduce the amount of time needed for JIT compilation in packages.SnoopCompile is not recommended for Julia beginners, and even experienced users may need several iterations to generate precompile scripts that work."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The easiest way to describe SnoopCompile is to show a snoop script, in this case for the ColorTypes package:using SnoopCompile\n\n### Log the compiles\n# This only needs to be run once (to generate \"/tmp/colortypes_compiles.csv\")\n\nSnoopCompile.@snoop \"/tmp/colortypes_compiles.csv\" begin\n    using ColorTypes, Pkg\n    include(joinpath(dirname(dirname(pathof(ColorTypes))), \"test\", \"runtests.jl\"))\nend\n\n### Parse the compiles and generate precompilation scripts\n# This can be run repeatedly to tweak the scripts\n\ndata = SnoopCompile.read(\"/tmp/colortypes_compiles.csv\")\n\npc = SnoopCompile.parcel(reverse!(data[2]))\nSnoopCompile.write(\"/tmp/precompile\", pc)After the conclusion of this script, the \"/tmp/precompile\" folder will contain a number of *.jl files, organized by package. For each package, you could copy its corresponding *.jl file into the package\'s src/ directory and include it into the package:module SomeModule\n\n# All the usual commands that define the module go here\n\n# ... followed by:\n\ninclude(\"precompile.jl\")\n_precompile_()\n\nend # module SomeModuleThere\'s a more complete example illustrating potential options in the examples/ directory."
},

{
    "location": "#Additional-flags-1",
    "page": "Readme",
    "title": "Additional flags",
    "category": "section",
    "text": "When calling the @snoop macro, a new julia process is spawned using the function Base.julia_cmd(). Advanced users may want to tweak the flags passed to this process to suit specific needs. This can be done by passing an array of flags of the form [\"--flag1\", \"--flag2\"] as the first argument to the @snoop macro. For instance, if you want to pass the --project=/path/to/dir flag to the process, to cause the julia process to load the project specified by the path, a snoop script may look like:using SnoopCompile\n\nSnoopCompile.@snoop [\"--project=/path/to/dir\"] \"/tmp/compiles.csv\" begin\n    # ... statement to snoop on\nend\n\n# ... processing the precompile statements"
},

{
    "location": "#userimg.jl-1",
    "page": "Readme",
    "title": "userimg.jl",
    "category": "section",
    "text": "Currently, precompilation does not cache functions from other modules; as a consequence, your speedup in execution time might be smaller than you\'d like. In such cases, one strategy is to generate a script for your base/userimg.jl file and build the packages (with precompiles) into julia itself.  Simply append/replace the last two lines of the above script with# Use these two lines if you want to add to your userimg.jl\npc = SnoopCompile.format_userimg(reverse!(data[2]))\nSnoopCompile.write(\"/tmp/userimg_Images.jl\", pc)Users are warned that there are substantial negatives associated with relying on a userimg.jl script:Your julia build times become very long\nPkg.update() will have no effect on packages that you\'ve built into julia until you next recompile julia itself. Consequently, you may not get the benefit of enhancements or bug fixes.\nFor a package that you sometimes develop, this strategy is very inefficient, because testing a change means rebuilding Julia as well as your package."
},

{
    "location": "autodocs/#SnoopCompile.@snoop",
    "page": "Docstrings",
    "title": "SnoopCompile.@snoop",
    "category": "macro",
    "text": "@snoop \"compiledata.csv\" begin\n    # Commands to execute, in a new process\nend\n\ncauses the julia compiler to log all functions compiled in the course of executing the commands to the file \"compiledata.csv\". This file can be used for the input to SnoopCompile.read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SnoopCompile.format_userimg",
    "page": "Docstrings",
    "title": "SnoopCompile.format_userimg",
    "category": "function",
    "text": "pc = format_userimg(calls; subst=[], blacklist=[]) generates precompile directives intended for your base/userimg.jl script. Use SnoopCompile.write(filename, pc) to create a file that you can include into userimg.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SnoopCompile.parcel",
    "page": "Docstrings",
    "title": "SnoopCompile.parcel",
    "category": "function",
    "text": "pc = parcel(calls; subst=[], blacklist=[]) assigns each compile statement to the module that owns the function. Perform string substitution via subst=[\"Module1\"=>\"Module2\"], and omit functions in particular modules with blacklist=[\"Module3\"]. On output, pc[:Module2] contains all the precompiles assigned to Module2.\n\nUse SnoopCompile.write(prefix, pc) to generate a series of files in directory prefix, one file per module.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SnoopCompile.read",
    "page": "Docstrings",
    "title": "SnoopCompile.read",
    "category": "function",
    "text": "SnoopCompile.read(\"compiledata.csv\") reads the log file produced by the compiler and returns the functions as a pair of arrays. The first array is the amount of time required to compile each function, the second is the corresponding function + types. The functions are sorted in order of increasing compilation time. (The time does not include the cost of nested compiles.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SnoopCompile.write",
    "page": "Docstrings",
    "title": "SnoopCompile.write",
    "category": "function",
    "text": "write(prefix::AbstractString, pc::Dict; always::Bool = false)\n\nWrite each modules\' precompiles to a separate file.  If always is true, the generated function will always run the precompile statements when called, otherwise the statements will only be called during package precompilation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SnoopCompile.@snoopSnoopCompile.SnoopCompileSnoopCompile.evalSnoopCompile.extract_topmodSnoopCompile.format_userimgSnoopCompile.includeSnoopCompile.parcelSnoopCompile.parse_callSnoopCompile.readSnoopCompile.snoopSnoopCompile.split2SnoopCompile.write"
},

]}
