var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Suppressor-1",
    "page": "Readme",
    "title": "Suppressor",
    "category": "section",
    "text": "(Image: Travis) (Image: Build status) (Image: CoverAlls) (Image: CodeCov)Julia macros for suppressing and/or capturing output (stdout), warnings (stderr) or both streams at the same time."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.add(\"Suppressor\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using Suppressor\n\njulia> @suppress begin\n           println(\"This string doesn\'t get printed!\")\n           warn(\"This warning is ignored.\")\n       end\n\njulia> @suppress_out begin\n           println(\"This string doesn\'t get printed!\")\n           warn(\"This warning is important\")\n       end\nWARNING: This warning is important\n\njulia> @suppress_err begin\n           println(\"This string gets printed!\")\n           warn(\"This warning is unimportant\")\n       end\nThis string gets printed!\n\njulia> @suppress begin\n           println(\"This string doesn\'t get printed!\")\n           warn(\"This warning is ignored.\")\n           error(\"Remember that errors are still printed!\")\n       end\n------------------------------------------------------------------------------------------\nErrorException                                          Stacktrace (most recent call last)\n[#2] — anonymous\n       ⌙ at <missing>:?\n\n[#1] — macro expansion;\n       ⌙ at Suppressor.jl:16 [inlined]\n\nRemember that errors are still printed!\nThe suppress macros return whatever the given expression returns, but Suppressor also provides @capture_out and @capture_err macros that work similiarly to their @suppress_ cousins except they return any output as a string:julia> output = @capture_out begin\n    println(\"should get captured, not printed\")\nend;\n\njulia> output == \"should get captured, not printed\\n\"\ntrue\n\njulia> output = @capture_err begin\n    warn(\"should get captured, not printed\")\nend;\n\njulia> output == (Base.have_color ? \"\\e[1m\\e[33mWARNING: \\e[39m\\e[22m\\e[33mshould get captured, not printed\\e[39m\\n\" :\n                                    \"WARNING: should get captured, not printed\\n\")\ntrue\nOften when capturing output for test purposes it\'s useful to control whether color is enabled or not, so that you can compare with or without the color escape characters regardless of whether the julia process has colors enabled or disabled globally. You can use the @color_output macro for this:@color_output false begin\n    output = @capture_err begin\n        warn(\"should get captured, not printed\")\n    end\nend\n@test output == \"WARNING: should get captured, not printed\\n\"\n\n@color_output true begin\n    output = @capture_err begin\n        warn(\"should get captured, not printed\")\n    end\nend\n@test output == \"\\e[1m\\e[33mWARNING: \\e[39m\\e[22m\\e[33mshould get captured, not printed\\e[39m\\n\""
},

{
    "location": "autodocs/#Suppressor.@capture_err",
    "page": "Docstrings",
    "title": "Suppressor.@capture_err",
    "category": "macro",
    "text": "@capture_err expr\n\nCapture the stderr stream for the given expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Suppressor.@capture_out",
    "page": "Docstrings",
    "title": "Suppressor.@capture_out",
    "category": "macro",
    "text": "@capture_out expr\n\nCapture the stdout stream for the given expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Suppressor.@color_output",
    "page": "Docstrings",
    "title": "Suppressor.@color_output",
    "category": "macro",
    "text": "@color_output enabled::Bool expr\n\nEnable or disable color printing for the given expression. Often useful in combination with the @capture_* macros:\n\nExample\n\n@coloroutput false begin     output = @captureerr begin         @warn \"should get captured, not printed\"     end end @test output == \"WARNING: should get captured, not printed \"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Suppressor.@suppress",
    "page": "Docstrings",
    "title": "Suppressor.@suppress",
    "category": "macro",
    "text": "@suppress expr\n\nSuppress the stdout and stderr streams for the given expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Suppressor.@suppress_err",
    "page": "Docstrings",
    "title": "Suppressor.@suppress_err",
    "category": "macro",
    "text": "@suppress_err expr\n\nSuppress the stderr stream for the given expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Suppressor.@suppress_out",
    "page": "Docstrings",
    "title": "Suppressor.@suppress_out",
    "category": "macro",
    "text": "@suppress_out expr\n\nSuppress the stdout stream for the given expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Suppressor.@capture_errSuppressor.@capture_outSuppressor.@color_outputSuppressor.@suppressSuppressor.@suppress_errSuppressor.@suppress_outSuppressor.SuppressorSuppressor.evalSuppressor.hasloggingSuppressor.include"
},

]}
