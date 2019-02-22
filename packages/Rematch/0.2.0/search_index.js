var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Rematch-1",
    "page": "Readme",
    "title": "Rematch",
    "category": "section",
    "text": "(Image: Build Status)Pattern matching.Rematch.jl provides a syntax sugar for matching julia values against syntactic patterns. The @match macro expands a pattern-matching syntax into a series of if-elses that check the types and structure of the provided value, allowing you to more simply write checks that describe your intent.julia> using Rematch\n\njulia> struct Foo\n           x::Int64\n           y::String\n       end\n\njulia> f(x) = @match x begin\n           _::String => :string\n           [a,a,a] => (:all_the_same, a)\n           [a,bs...,c] => (:at_least_2, a, bs, c)\n           Foo(x, \"foo\") where x > 1 => :foo\n       end\nf (generic function with 1 method)\n\njulia> f(\"foo\")\n:string\n\njulia> f([1,1,1])\n(:all_the_same, 1)\n\njulia> f([1,1])\n(:at_least_2, 1, Int64[], 1)\n\njulia> f([1,2,3,4])\n(:at_least_2, 1, [2, 3], 4)\n\njulia> f([1])\nERROR: Rematch.MatchFailure([1])\nStacktrace:\n [1] macro expansion at /home/jamie/.julia/v0.6/Rematch/src/Rematch.jl:173 [inlined]\n [2] f(::Array{Int64,1}) at ./REPL[3]:1\n\njulia> f(Foo(2, \"foo\"))\n:foo\n\njulia> f(Foo(0, \"foo\"))\nERROR: Rematch.MatchFailure(Foo(0, \"foo\"))\nStacktrace:\n [1] macro expansion at /home/jamie/.julia/v0.6/Rematch/src/Rematch.jl:173 [inlined]\n [2] f(::Foo) at ./REPL[13]:1\n\njulia> f(Foo(2, \"not a foo\"))\nERROR: Rematch.MatchFailure(Foo(2, \"not a foo\"))\nStacktrace:\n [1] macro expansion at /home/jamie/.julia/v0.6/Rematch/src/Rematch.jl:173 [inlined]\n [2] f(::Foo) at ./REPL[13]:1"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Assignment-Syntax-1",
    "page": "Readme",
    "title": "Assignment Syntax",
    "category": "section",
    "text": "@match pattern = valueIf value matches pattern, binds variables and returns value. Otherwise, throws MatchFailure.After evaluation, any variable names used within pattern will be bound as new variables in the enclosing scope. For example:julia> @match Foo(x,2) = Foo(1,2)\nFoo(1,2)\n\njulia> x\n1"
},

{
    "location": "#Case-Syntax-1",
    "page": "Readme",
    "title": "Case Syntax",
    "category": "section",
    "text": "@match value begin\n    pattern1 => result1\n    pattern2 => result2\n    ...\nendReturns result for the first matching pattern. If there are no matching patterns, throws MatchFailure.Note that unlike the assignment syntax, this does not create any variable bindings outside the match macro."
},

{
    "location": "#Patterns-1",
    "page": "Readme",
    "title": "Patterns",
    "category": "section",
    "text": "_ matches anything\nfoo matches anything, binds value to foo\nFoo(x,y,z) matches structs of type Foo with fields matching x,y,z\nFoo(y=1) matches structs of type Foo whose y field equals 1\n[x,y,z] matches AbstractArrays with 3 entries matching x,y,z\n(x,y,z) matches Tuples with 3 entries matching x,y,z\n[x,y...,z] matches AbstractArrays with at least 2 entries, where x matches the first entry, z matches the last entry and y matches the remaining entries.\n(x,y...,z) matches Tuples with at least 2 entries, where x matches the first entry, z matches the last entry and y matches the remaining entries.\n_::T matches any subtype (isa) of T\nx || y matches values which match either x or y (only variables which exist in both branches will be bound)\nx && y matches values which match both x and y\nx where condition matches only if condition is true (condition may use any variables that occur earlier in the pattern eg (x, y, z where x + y > z))\nAnything else is treated as a constant and tested for equality\nExpressions can be interpolated in as constants via standard interpolation syntax $(x)Patterns can be nested arbitrarily.Repeated variables only match if they are equal (==). For example (x,x) matches (1,1) but not (1,2)."
},

{
    "location": "#Differences-from-[Match.jl](https://github.com/kmsquire/Match.jl)-1",
    "page": "Readme",
    "title": "Differences from Match.jl",
    "category": "section",
    "text": "This package was branched from the original Match.jl. It now differs in several ways:If no branches are matched, throws MatchFailure instead of returning nothing.\nMatching against a struct with the wrong number of fields produces an error instead of silently failing.\nRepeated variables require equality, ie @match (1,2) begin (x,x) => :ok end fails.\nThe syntax for guards is x where x > 1 instead of x, if x > 1 end and can occur anywhere in a pattern.\nStructs can be matched by field-names, allowing partial matches: @match Foo(1,2) begin Foo(y=2) => :ok end returns :ok.\nPatterns support interpolation, ie let x=1; @match ($x,$(x+1)) = (1,2); end is a match.\nNo support (yet) for matching Regex or UnitRange.\nNo support (yet) for matching against multidimensional arrays - all array patterns use linear indexing."
},

{
    "location": "autodocs/#Rematch.@match",
    "page": "Docstrings",
    "title": "Rematch.@match",
    "category": "macro",
    "text": "Patterns:\n\n_ matches anything\nfoo matches anything, binds value to foo\nFoo(x,y,z) matches structs of type Foo with fields matching x,y,z\nFoo(y=1) matches structs of type Foo whose y field equals 1\n[x,y,z] matches AbstractArrays with 3 entries matching x,y,z\n(x,y,z) matches Tuples with 3 entries matching x,y,z\n[x,y...,z] matches AbstractArrays with at least 2 entries, where x matches the first entry, z matches the last entry and y matches the remaining entries.\n(x,y...,z) matches Tuples with at least 2 entries, where x matches the first entry, z matches the last entry and y matches the remaining entries.\n_::T matches any subtype (isa) of T\nx || y matches values which match either x or y (only variables which exist in both branches will be bound)\nx && y matches values which match both x and y\nx where condition matches only if condition is true (condition may use any variables that occur earlier in the pattern eg (x, y, z where x + y > z))\nAnything else is treated as a constant and tested for equality\nExpressions can be interpolated in as constants via standard interpolation syntax $(x)\n\nPatterns can be nested arbitrarily.\n\nRepeated variables only match if they are equal (==). For example (x,x) matches (1,1) but not (1,2).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Rematch.@matchRematch.@spliceRematch.MatchFailureRematch.RematchRematch.assert_num_fieldsRematch.evalRematch.evaluated_fieldcountRematch.handle_destructRematch.handle_destruct_fieldsRematch.handle_match_caseRematch.handle_match_casesRematch.handle_match_eqRematch.include"
},

]}
