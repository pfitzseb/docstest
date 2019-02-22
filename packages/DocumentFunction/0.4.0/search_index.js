var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DocumentFunction-1",
    "page": "Readme",
    "title": "DocumentFunction",
    "category": "section",
    "text": "A module for documenting functions. It also provides methods to get function methods, arguments and keywords.(Image: DocumentFunction) (Image: DocumentFunction) (Image: DocumentFunction) (Image: Build Status) (Image: Coverage Status)DocumentFunction is a module of MADS (Model Analysis & Decision Support)."
},

{
    "location": "#Installation:-1",
    "page": "Readme",
    "title": "Installation:",
    "category": "section",
    "text": "import Pkg; Pkg.add(\"DocumentFunction\")\n\nusing DocumentFunction"
},

{
    "location": "#Examples:-1",
    "page": "Readme",
    "title": "Examples:",
    "category": "section",
    "text": "print(documentfunction(documentfunction))Methods:\n - `DocumentFunction.documentfunction(f::Function; location, maintext, argtext, keytext) in DocumentFunction` : /Users/monty/.julia/dev/DocumentFunction/src/DocumentFunction.jl:56\nArguments:\n - `f::Function`\nKeywords:\n - `argtext`\n - `keytext`\n - `location`\n - `maintext`print(documentfunction(occursin))Methods:\n - `Base.occursin(delim::UInt8, buf::Base.GenericIOBuffer{Array{UInt8,1}}) in Base` : iobuffer.jl:464\n - `Base.occursin(delim::UInt8, buf::Base.GenericIOBuffer) in Base` : iobuffer.jl:470\n - `Base.occursin(needle::Union{AbstractChar, AbstractString}, haystack::AbstractString) in Base` : strings/search.jl:452\n - `Base.occursin(r::Regex, s::SubString; offset) in Base` : regex.jl:172\n - `Base.occursin(r::Regex, s::AbstractString; offset) in Base` : regex.jl:166\n - `Base.occursin(pattern::Tuple, r::Test.LogRecord) in Test` : /Users/osx/buildbot/slave/package_osx64/build/usr/share/julia/stdlib/v1.1/Test/src/logging.jl:211\nArguments:\n - `buf::Base.GenericIOBuffer`\n - `buf::Base.GenericIOBuffer{Array{UInt8,1}}`\n - `delim::UInt8`\n - `haystack::AbstractString`\n - `needle::Union{AbstractChar, AbstractString}`\n - `pattern::Tuple`\n - `r::Regex`\n - `r::Test.LogRecord`\n - `s::AbstractString`\n - `s::SubString`\nKeywords:\n - `offset`"
},

{
    "location": "#Documentation-Examples:-1",
    "page": "Readme",
    "title": "Documentation Examples:",
    "category": "section",
    "text": "import DocumentFunction\n\nfunction foobar(f::Function)\n    return nothing\nend\nfunction foobar(f::Function, m::Vector{String})\n    return nothing\nend\n\n@doc \"\"\"\n$(DocumentFunction.documentfunction(foobar;\nlocation=false,\nmaintext=\"Foobar function to do amazing stuff\",\nargtext=Dict(\"f\"=>\"Input function ...\",\n             \"m\"=>\"Input string array ...\")))\n\"\"\" foobarGetting the help for the function type \"?foobar\" which will produces the following output:  foobar\n\n  Foobar function to do amazing stuff\n\n  Methods:\n\n    •    Main.foobar(f::Function) in Main\n\n    •    Main.foobar(f::Function, m::Array{String,1}) in Main\n\n  Arguments:\n\n    •    f::Function : Input function ...\n\n    •    m::Array{String,1} : Input string array ..."
},

{
    "location": "#Publications,-Presentations,-Projects-1",
    "page": "Readme",
    "title": "Publications, Presentations, Projects",
    "category": "section",
    "text": "mads.gitlab.io\nmonty.gitlab.io\nees.lanl.gov/monty"
},

{
    "location": "autodocs/#DocumentFunction.DocumentFunction",
    "page": "Docstrings",
    "title": "DocumentFunction.DocumentFunction",
    "category": "module",
    "text": "MADS: Model Analysis & Decision Support in Julia (Mads.jl v1.0) 2017\n\nmodule DocumentFunction\n\nhttp://mads.lanl.gov https://github.com/madsjulia\n\nLicensing: GPLv3: http://www.gnu.org/licenses/gpl-3.0.html\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumentFunction.documentfunction",
    "page": "Docstrings",
    "title": "DocumentFunction.documentfunction",
    "category": "function",
    "text": "Create function documentation\n\nArguments:\n\nf: function to be documented\"\n\nKeywords:\n\nmaintext: function description\nargtext: dictionary with text for each argument\nkeytext: dictionary with text for each keyword\nlocation: show/hide function location on the disk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumentFunction.getfunctionarguments",
    "page": "Docstrings",
    "title": "DocumentFunction.getfunctionarguments",
    "category": "function",
    "text": "Get function arguments\n\nArguments:\n\nf: function to be documented\"\nm: function methods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumentFunction.getfunctionkeywords",
    "page": "Docstrings",
    "title": "DocumentFunction.getfunctionkeywords",
    "category": "function",
    "text": "Get function keywords\n\nArguments:\n\nf: function to be documented\nm: function methods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumentFunction.getfunctionmethods",
    "page": "Docstrings",
    "title": "DocumentFunction.getfunctionmethods",
    "category": "function",
    "text": "Get function methods\n\nArguments:\n\nf: function to be documented\n\nReturn:\n\narray with function methods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumentFunction.stdoutcaptureoff",
    "page": "Docstrings",
    "title": "DocumentFunction.stdoutcaptureoff",
    "category": "function",
    "text": "Restore STDOUT\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumentFunction.stdoutcaptureon",
    "page": "Docstrings",
    "title": "DocumentFunction.stdoutcaptureon",
    "category": "function",
    "text": "Redirect STDOUT to a reader\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DocumentFunction.DocumentFunctionDocumentFunction.documentfunctionDocumentFunction.evalDocumentFunction.getfunctionargumentsDocumentFunction.getfunctionkeywordsDocumentFunction.getfunctionmethodsDocumentFunction.includeDocumentFunction.outputoriginalDocumentFunction.outputreadDocumentFunction.outputreaderDocumentFunction.outputwriteDocumentFunction.stdoutcaptureoffDocumentFunction.stdoutcaptureon"
},

]}
