var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ErlangTerm-1",
    "page": "Readme",
    "title": "ErlangTerm",
    "category": "section",
    "text": "(De-)serialize Julia data in Erlang\'s external term format[![Build Status Unix][travis-badge]][travis-url] [![Build Status Windows][av-badge]][av-url] [![Codecov][codecov-badge]][codecov-url]ErlangTerm.jl teaches Julia to talk to BEAM-based languages (Erlang, Elixir, ...) in their native tongue, the Erlang external term format. The following data types are supported:Int <-> Integer\nFloat64 <-> Float\nSymbol <-> Atom\nTuple <-> Tuple\nArray <-> List\nDict <-> Map"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package can be installed through Julia\'s package manager:julia> import Pkg; Pkg.add(\"ErlangTerm\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ErlangTerm\n\n# Take a Julia data structure...\nd = Dict(:erlang => Dict(:id => 1, :greeting => \"Hello, Erlang!\"),\n         :elixir => Dict(:id => 2, :greeting => \"Hello, Elixir!\"))\n\n# ...serialize it...\nbinary = serialize(d)\n\n# ...and deserialize it!\nd1 = deserialize(binary)[travis-badge]: https://travis-ci.org/helgee/ErlangTerm.jl.svg?branch=master [travis-url]: https://travis-ci.org/helgee/ErlangTerm.jl [av-badge]: https://ci.appveyor.com/api/projects/status/g0vxu3949t7gv744?svg=true [av-url]: https://ci.appveyor.com/project/helgee/erlangterm-jl [codecov-badge]: http://codecov.io/github/helgee/ErlangTerm.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/helgee/ErlangTerm.jl?branch=master"
},

{
    "location": "autodocs/#ErlangTerm.deserialize",
    "page": "Docstrings",
    "title": "ErlangTerm.deserialize",
    "category": "function",
    "text": "deserialize(io::IO)\ndeserialize(binary::Array{UInt8})\n\nDeserialize a Julia value encoded in the Erlang external term format from a stream or an array of bytes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErlangTerm.serialize",
    "page": "Docstrings",
    "title": "ErlangTerm.serialize",
    "category": "function",
    "text": "serialize(io::IO, value)\nserialize(value)\n\nSerialize a Julia value to the Erlang external term format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ErlangTerm.ATOMErlangTerm.ATOM_UTF8ErlangTerm.BINARYErlangTerm.ErlangTermErlangTerm.INTEGERErlangTerm.LARGE_TUPLEErlangTerm.LISTErlangTerm.MAPErlangTerm.NEW_FLOATErlangTerm.NILErlangTerm.SMALL_ATOM_UTF8ErlangTerm.SMALL_INTEGERErlangTerm.SMALL_TUPLEErlangTerm.STRINGErlangTerm.VERSIONErlangTerm._serializeErlangTerm.deserializeErlangTerm.evalErlangTerm.includeErlangTerm.serialize"
},

]}
