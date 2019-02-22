var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OptionalData-1",
    "page": "Readme",
    "title": "OptionalData",
    "category": "section",
    "text": "Work with global data that might not be available.(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov)This package provides the @OptionalData and the corresponding OptData type which is a thin wrapper around Julia\'s Nullable. It allows you to load and access globally available data at runtime in a type-stable way."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package can be installed through Julia\'s package manager:Pkg.add(\"OptionalData\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "OptionalData has the following use cases:Parts of your package depend on data from the internet while other parts do not.In the case of a network outage the package should offer a degraded experience but the independent parts should still function.Your package requires manual initialisation steps, e.g. loading data from auser-supplied file, and you do not want to repeat yourself writing code that checks for the availability of the data.You declare optional global data with the @OptionalData macro:using OptionalData\n\n# @OptionalData name type [error_msg]\n@OptionalData OPT_FLOAT Float64 \"Forgot to load it?\"\n\n# this expands to\nconst OPT_FLOAT = OptData{Float64}(string(:OPT_FLOAT), \"Forgot to load it?\")You access its value with get and check whether it is available with isavailable:# This will throw an exception because OPT_FLOAT does not contain a value, yet.\nget(OPT_FLOAT)\n# ERROR: OPT_FLOAT is not available. Forgot to load it?\nisavailable(OPT_FLOAT) == falseUse push! to load the data:push!(OPT_FLOAT, 3.0)\nisavailable(OPT_FLOAT) == true\nget(OPT_FLOAT) == 3.0"
},

{
    "location": "autodocs/#OptionalData.@OptionalData",
    "page": "Docstrings",
    "title": "OptionalData.@OptionalData",
    "category": "macro",
    "text": "@OptionalData name type msg=\"\"\n\nInitialise a constant name with type OptData{type}. An exception with the custom error message msg is thrown when name is accessed before data has been pushed to it.\n\nExample\n\n@OptionalData OPT_FLOAT Float64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.get",
    "page": "Docstrings",
    "title": "Base.get",
    "category": "function",
    "text": "get(opt::OptData)\n\nGet data from opt. Throw an exception if no data has been pushed to opt before.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OptionalData.isavailable",
    "page": "Docstrings",
    "title": "OptionalData.isavailable",
    "category": "function",
    "text": "isavailable(opt::OptData)\n\nCheck whether data has been pushed to opt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.push!",
    "page": "Docstrings",
    "title": "Base.push!",
    "category": "function",
    "text": "push!(opt::OptData{T}, data::T) where T\n\nPush data of type T to opt.\n\n\n\n\n\npush!(opt::OptData, ::Type{T}, args...) where T\n\nConstruct an object of type T from args and push it to opt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OptionalData.@OptionalDataOptionalData.OptDataOptionalData.OptionalDataOptionalData.evalOptionalData.getOptionalData.includeOptionalData.isavailableOptionalData.push!OptionalData.show"
},

]}
