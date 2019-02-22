var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Unmarshal-1",
    "page": "Readme",
    "title": "Unmarshal",
    "category": "section",
    "text": ""
},

{
    "location": "#Unmarshalling-parsed-format-dictionaries-into-Julia-Objects-1",
    "page": "Readme",
    "title": "Unmarshalling parsed format dictionaries into Julia Objects",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Installation: pkg> add Unmarshal"
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "This package has currently only been tested with unmarshalling of JSON objects, but the intention is to in future also test it for working on other data formats.import Unmarshal\n\nusing JSON\n\ninput = \"{ \\\"bar\\\": { \\\"baz\\\": 17 }, \\\"foo\\\": 3.14 }\"\n\nstruct Bar\n    baz::Int\nend\n\nstruct Foo\n    bar::Bar\nend\n\nUnmarshal.unmarshal(Foo, JSON.parse(input))\n# Foo(Bar(17))\njstring = JSON.json(ones(Float64, 3))\n#\"[1.0,1.0,1.0]\"\n\nUnmarshal.unmarshal(Array{Float64}, JSON.parse(jstring))\n#3-element Array{Float64,1}:\n# [ 1.0 ; 1.0 ; 1.0 ]"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Unmarshal.unmarshal(MyType, parseOutput, verbose = false )Builds on object of type :MyType from the dictionary produced by JSON.parse. Set verbose to true to get debug information about the type hierarchy beging unmarshalled. This might be useful in tracking down mismatches between the JSON object and the Julia type definition."
},

{
    "location": "autodocs/#Unmarshal.unmarshal",
    "page": "Docstrings",
    "title": "Unmarshal.unmarshal",
    "category": "function",
    "text": "unmarshal(T, dict[, verbose[, verboselvl]])\n\nReconstructs an object of Type T using the dictionary output of a JSON.parse.\n\nSet verbose true to get debug information about how the data hierarchy is unmarshalled. This might be useful to track down parsing errors and/or mismatches between the JSON object and the Type definition.\n\nExample\n\njulia> using JSON\n\njulia> var = randn(Float64, 5);  # Should work for most other variations of types you can think of\n\njulia> unmarshal(typeof(var), JSON.parse(JSON.json(var)) ) == var\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Unmarshal.UnmarshalUnmarshal.evalUnmarshal.includeUnmarshal.prettyPrintUnmarshal.unmarshal"
},

]}
