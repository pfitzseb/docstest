var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IndentWrappers-1",
    "page": "Readme",
    "title": "IndentWrappers",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "indent(io, n) returns an ::IO object that writes n spaces after each \\n.indents can be chained, use in a functional way. It is recommended that implementations of Base.show using this package never close with a newline.Example:struct Foo\n    contents\nend\n\nfunction Base.show(io::IO, foo::Foo)\n    print(io, \"This is a Foo with the following contents:\")\n    let inner_io = indent(io, 4)\n        for elt in foo.contents\n            print(inner_io, \'\\n\', elt)\n        end\n    end\nendthenjulia> Foo([\'a\', 42, \"string\"])\nThis is a Foo with the following contents:\n    a\n    42\n    string"
},

{
    "location": "#Similar-packages-1",
    "page": "Readme",
    "title": "Similar packages",
    "category": "section",
    "text": "IOIndents.jl, which inspired part of the implementation"
},

{
    "location": "autodocs/#IndentWrappers.IndentWrappers",
    "page": "Docstrings",
    "title": "IndentWrappers.IndentWrappers",
    "category": "module",
    "text": "Wrapper type for indentation management for plain text printing.\n\nThe single exported function is indent, see its docstring for usage.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndentWrappers.indent",
    "page": "Docstrings",
    "title": "IndentWrappers.indent",
    "category": "function",
    "text": "indent(io, spaces)\n\nReturn a wrapper around io that prepends each  written to the stream with the given number of spaces.\n\nIt is recommended that indent is chained together in a functional manner. Blocks should always begin with a newline and end without one.\n\nExample\n\njulia> let io = stdout\n           print(io, \"toplevel\")\n           let io = indent(io, 4)\n               print(io, \'\n\', \"- level1\")\n               let io = indent(io, 4)\n                   print(io, \'\n\', \"- level 2\")\n               end\n           end\n       end\ntoplevel\n    - level1\n        - level 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IndentWrappers.IndentWrapperIndentWrappers.IndentWrappersIndentWrappers._write_spacesIndentWrappers.evalIndentWrappers.includeIndentWrappers.indent"
},

]}
