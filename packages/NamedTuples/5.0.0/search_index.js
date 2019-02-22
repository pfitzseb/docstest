var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#NamedTuples-1",
    "page": "Readme",
    "title": "NamedTuples",
    "category": "section",
    "text": ""
},

{
    "location": "#Note:-the-[Named-Tuple-type](https://docs.julialang.org/en/v1/manual/types/#Named-Tuple-Types-1)-functionality-has-been-integrated-into-Julia-Base-as-of-Julia-0.7.-Prefer-using-the-Base-implementation-of-NamedTuples-when-writing-code-for-Julia-0.7-or-higher.-1",
    "page": "Readme",
    "title": "Note: the Named Tuple type functionality has been integrated into Julia Base as of Julia 0.7. Prefer using the Base implementation of NamedTuples when writing code for Julia 0.7 or higher.",
    "category": "section",
    "text": "NamedTuples.jl provides a high performance implementation of named tuples for Julia (cf named tuples in python). Julia tuples are restricted to supporting index based access. This new implementation allows both index and property based access. NamedTuples may be used anywhere that a tuple is currently being used, for example in the definition of a method or as the return value of a method. NamedTuples are implemented using Julia’s macro system, ensuring that the run time cost is equivalent to constructing a regular immutable type.NamedTuples may also be used in cases where a small typed immutable dictionary is desired.Syntax@NT( a, b )                 -> Defines a tuple with a and b as members\n@NT( a::Int64, b::Float64 ) -> Defines a tuple with the specific arg types as members\n@NT( a = 1, b = \"hello\")    -> Defines and constructs a tuple with the specifed members and values\n@NT( a, b )( (1, \"hello\") ) -> Is equivalent to the above definition\n@NT( a::Int64 )( (2.0,) )   -> Calls `convert( Int64, 2.0 )` on construction and sets `a`\n@NT( ::Int64, ::Float64 )   -> Defines a named tuple with automatic namesNamedTuples may be used anywhere you would use a regular Tuple, this includes method definition and return values.module Demo\nusing NamedTuples\n\nfunction foo( y )\n    a = 1\n    x = 3\n    return  @NT( a = 1, b = \"world\", c = \"hello\", d=a/x, y = a/y  )\nend\nfunction bar( nt::@NT( a::Int64, c::String ))\n    return repeat( nt.c, nt.a )\nend\n\nend\n\nusing NamedTuples\nDemo.foo( 1 ) # Returns a NamedTuple of 5 elements\nDemo.bar( @NT( a= 2, c=\"hello\")) # Returns `hellohello`There is at most one instance of a NamedTuple type with a given set of Members and Types, hencetypeof( @NT( a = 1, b = 2.0 )) == @NT( a::Int, b::Float64 )NamedTuple definitions are shared across all modules. The underlying immutable types are constructed at first use.NamedTuples support iteration and indexing, and behave as immutable associative containers.@NT( a = 1 ).a == 1\n@NT( a = 1 )[1] == 1\n@NT( a = 1 )[:a] == 1\nlength( @NT( a = 1)) == 1\nlength( @NT( a = 1, b = 2.0)) == 2\nfirst( @NT( a = 1, b = 2.0 )) ==  1\nlast( @NT( a = 1, b = 2.0 )) == 2.0\nusing Compat: pairs\nfor (k,v) in pairs(@NT( a = 1, b = 1 ))\n    println(\"$k = $v\")\nendNamedTuples additionally support operations to merge, update, add and delete elements.  Since NamedTuples are immutable, these operations make a copy of the data and return a new NamedTuple. The current implementation of these operations is functional rather than performance oriented.julia> nt = @NT( a=1, b=2, c=3 )\n(a = 1, b = 2, c = 3)\n\njulia> x = NamedTuples.setindex( nt, :x, 123 )\n(a = 1, b = 2, c = 3, x = 123)\n\njulia> NamedTuples.delete( x, :a)\n(b = 2, c = 3, x = 123)\n\njulia> merge( nt, @NT( d = \"hello\", e = \"world\"))\n(a = 1, b = 2, c = 3, d = \"hello\", e = \"world\")Note the use of setindex/delete and not setindex!/delete! as these operations do NOT modify in place."
},

]}
