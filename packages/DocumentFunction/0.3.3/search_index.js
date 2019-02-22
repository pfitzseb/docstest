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
    "text": "(Image: DocumentFunction) (Image: DocumentFunction) (Image: DocumentFunction) (Image: Build Status) (Image: Coverage Status)DocumentFunction is a module of MADS (Model Analysis & Decision Support)."
},

{
    "location": "#Installation:-1",
    "page": "Readme",
    "title": "Installation:",
    "category": "section",
    "text": "Pkg.add(\"DocumentFunction\")"
},

{
    "location": "#Example:-1",
    "page": "Readme",
    "title": "Example:",
    "category": "section",
    "text": "import DocumentFunction\n\nfunction getfunctionarguments(f::Function)\n    m = methods(f)\n    getfunctionarguments(f, string.(collect(m.ms)))\nend\nfunction getfunctionarguments(f::Function, m::Vector{String})\n    l = length(m)\n    mp = Array{Symbol}(0)\n    for i in 1:l\n        r = match(r\"(.*)\\(([^;]*);(.*)\\)\", m[i])\n        if typeof(r) == Void\n            r = match(r\"(.*)\\((.*)\\)\", m[i])\n        end\n        if typeof(r) != Void && length(r.captures) > 1\n            fargs = strip.(split(r.captures[2], \", \"))\n            for j in 1:length(fargs)\n                if !contains(string(fargs[j]), \"...\") && fargs[j] != \"\"\n                    push!(mp, fargs[j])\n                end\n            end\n        end\n    end\n    return sort(unique(mp))\nend\n\n@doc \"\"\"\n$(DocumentFunction.documentfunction(getfunctionarguments;\nlocation=false,\nmaintext=\"Get function arguments\",\nargtext=Dict(\"f\"=>\"Function to be documented\",\n             \"m\"=>\"Function methods\")))\n\"\"\" getfunctionargumentsExecution of?getfunctionargumentsproduces the following output:  DocumentFunction.getfunctionarguments\n\n  Get function arguments\n\n  Methods\n\n    •    DocumentFunction.getfunctionarguments(f::Function)\n\n    •    DocumentFunction.getfunctionarguments(f::Function, m::Array{String,1})\n\n\n  Arguments\n\n    •    f::Function : Function to be documented\n\n    •    m::Array{String,1} : Function methods\n"
},

{
    "location": "#Developers-1",
    "page": "Readme",
    "title": "Developers",
    "category": "section",
    "text": "Velimir (monty) Vesselinov (publications)\nDaniel O\'Malley (publications)\nsee also"
},

{
    "location": "#Publications,-Presentations,-Projects-1",
    "page": "Readme",
    "title": "Publications, Presentations, Projects",
    "category": "section",
    "text": "mads.lanl.gov/\nees.lanl.gov/monty"
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
