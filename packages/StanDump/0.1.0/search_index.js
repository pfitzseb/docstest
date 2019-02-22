var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StanDump-1",
    "page": "Readme",
    "title": "StanDump",
    "category": "section",
    "text": "(Image: Lifecycle) (Image: Project Status: WIP - Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.) (Image: Build Status) (Image: Coverage Status)Julia package for saving data (arrays and scalars) in a format that can be read by cmdstan."
},

{
    "location": "#Example-usage-1",
    "page": "Readme",
    "title": "Example usage",
    "category": "section",
    "text": "N = 200\nstan_dump(\"/tmp/test.data.R\", (N = N, x = randn(N)))stan_dump(target, data) is the main entry point. The first argument is usually a filename (see its docstring for other options), while the data is specified as a NamedTuple.Variable names are minimally validated. Only supports types understood by cmdstan."
},

{
    "location": "autodocs/#StanDump.Space",
    "page": "Docstrings",
    "title": "StanDump.Space",
    "category": "type",
    "text": "Write a space unless output is requested to be compact.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StanDump.StanDump",
    "page": "Docstrings",
    "title": "StanDump.StanDump",
    "category": "module",
    "text": "StanDump –- a package for writing data in the CmdStan dump data format.\n\nThe single exported function is stan_dump.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StanDump.StanDumpIO",
    "page": "Docstrings",
    "title": "StanDump.StanDumpIO",
    "category": "type",
    "text": "Wrapper for an IO stream for writing data for use by Stan. See constructor for documentation of slots.\n\nPart of the API, but not exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StanDump._dump",
    "page": "Docstrings",
    "title": "StanDump._dump",
    "category": "function",
    "text": "_dump(sd, xs)\n\n\nWrite arguments arguments as data for Stan into sd, passing through strings and characters, and allowing other special objects which are not valid data.\n\nFor internal implementation. also defined for objects which are not valid in Stan.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StanDump._dump_vector",
    "page": "Docstrings",
    "title": "StanDump._dump_vector",
    "category": "function",
    "text": "_dump_vector(sd, x)\n\n\nDump elements of a vector (or iterable, considered as a vector).\n\nWhen the element type is <:Integer, dump as Ints, otherwise as Float64; all values are converted for consistency.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StanDump.dump",
    "page": "Docstrings",
    "title": "StanDump.dump",
    "category": "function",
    "text": "dump(sd, xs...)\n\nWrite arguments xs... as data for Stan into sd. For internal use.\n\nNOTE: Define methods only for valid Stan objects, using _dump for everything else.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StanDump.is_valid_varname",
    "page": "Docstrings",
    "title": "StanDump.is_valid_varname",
    "category": "function",
    "text": "is_valid_varname(name)\n\n\nTest if the argument is valid as a Stan variable name.\n\nNOTE: only basic checks, does not test conflicts with reserved names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StanDump.stan_dump",
    "page": "Docstrings",
    "title": "StanDump.stan_dump",
    "category": "function",
    "text": "stan_dump(filename, data; force = false, kwargs...)\nstan_dump(io, data; kwargs...)\nstan_dump(StanDump.StanDumpIO(io; kwargs...), data)\n\nWrite data, which is a value that supports pairs (eg a NamedTuple or a Dict) to filename or io.\n\nUsing a filename, it will not be overwritten unless force = true is specified.\n\nKeyword arguments are passed to StanDumpIO to govern formatting (most users should not care about this, except for debugging purposes).\n\nExample\n\njulia> stan_dump(stdout, (N = 1, a = 1:5, b = ones(2, 2)))\nN <- 1\na <- 1:5\nb <- structure(c(1.0, 1.0, 1.0, 1.0), .Dim = c(2, 2))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StanDump.SPACEStanDump.SpaceStanDump.StanDumpStanDump.StanDumpIOStanDump._dumpStanDump._dump_vectorStanDump.dumpStanDump.evalStanDump.includeStanDump.is_valid_varnameStanDump.stan_dump"
},

]}
