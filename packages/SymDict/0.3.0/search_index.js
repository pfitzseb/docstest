var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SymDict-1",
    "page": "Readme",
    "title": "SymDict",
    "category": "section",
    "text": "Convenience functions for dictionaries with Symbol keys.(Image: Build Status)Create a Dict{Symbol,}:@SymDict(a=1, b=2)\n\nDict{Symbol,Any}(:a=>1,:b=>2)Capture local variables in a dictionary:a = 1\nb = 2\n@SymDict(a,b)\n\nDict{Symbol,Any}(:a=>1,:b=>2)a = 1\nb = 2\n@SymDict(a,b,c=3)\n\nDict{Symbol,Any}(:a=>1,:b=>2,:c=3)Capture varags key,value arguments in a dictionary:\nfunction f(x; option=\"Option\", args...)\n    @SymDict(x, option, args...)\nend\n\nf(\"X\", foo=\"Foo\", bar=\"Bar\")\n\nDict{Symbol,Any}(:x=>\"X\",:option=>\"Option\",:foo=>\"Foo\",:bar=>\"Bar\")Merge new entries into a dictionary:d = @SymDict(a=1, b=2)\nmerge!(d, c=3, d=4)\n\nDict{Symbol,Any}(:a=>1,:b=>2,:c=3,:d=>4)Convert to/from `Dict{AbstractString,}:d = @SymDict(a=1, b=2)\nd = stringdict(d)\n\nDict{String,Any}(\"a\"=>1,\"b\"=>2)\n\nd = symboldict(d)\n\nDict{Symbol,Any}(:a=>1,:b=>2)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SymDict.@SymDictSymDict.StringDictSymDict.SymDictSymDict.SymbolDictSymDict.evalSymDict.includeSymDict.stringdictSymDict.symboldict"
},

]}
