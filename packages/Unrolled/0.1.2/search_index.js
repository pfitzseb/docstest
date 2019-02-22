var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Unrolled-1",
    "page": "Readme",
    "title": "Unrolled",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Unrolled.jl provides functions to unroll loops on sequences whose length is known at compile-time (mostly Tuple and StaticArrays). This can significantly improve performance and type-stability."
},

{
    "location": "#The-@unroll-macro-1",
    "page": "Readme",
    "title": "The @unroll macro",
    "category": "section",
    "text": "julia> using Unrolled\n\njulia> @unroll function my_sum(seq)\n       	   # More on why we need @unroll twice later.\n	   total = zero(eltype(seq))\n           @unroll for x in seq\n               total += x\n           end\n           return total\n       end\nmy_sum_unrolled_expansion_ (generic function with 1 method)\n\njulia> my_sum((1, 2, 3))\n6To see what code will be executed,# Tuples are unrolled\njulia> @code_unrolled my_sum((1,2,3))\nquote  \n    total = zero(eltype(seq))\n    begin  \n        let x = seq[1]\n            total += x\n        end\n        let x = seq[2]\n            total += x\n        end\n        let x = seq[3]\n            total += x\n        end\n    end\n    return total\nend\n\n# But not vectors, since their length is not part of Vector{Int}\njulia> @code_unrolled my_sum([1,2,3])\nquote\n    total = zero(eltype(seq))\n    for x = seq\n        total += x\n    end\n    return total\nendAll types for which length is implemented will be unrolled (this includes the fixed-size vectors from StaticArrays.jl and FixedSizeArrays.jl)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "@unroll works by generating (at compile-time) a separate function for each type combination. This is why we need (at least) two @unroll:One in front of the function definition\nOne in front of each for loop to be unrolled@unroll can only unroll loops over the arguments of the function. For instance, this is an error:# Sum every number in seq except the last one\n@unroll function my_sum_but_last(seq)\n    total = zero(eltype(seq))\n    @unroll for x in seq[1:end-1]   # Bad!\n        total += x\n    end\n    return total\nendAn easy work-around is to use a helper function@unroll function _do_sum(sub_seq) # helper for my_sum_but_last\n    total = zero(eltype(sub_seq))\n    @unroll for x in sub_seq\n        total += x\n    end\n    return total\nend\n\n# Sum every number in seq except the last one\nmy_sum_but_last(seq) = _do_sum(seq[1:end-1])\n\nmy_sum_but_last((1,20,3))    # 21As a special case, @unroll also supports iteration over 1:some_argument@unroll function foo(tup)\n    @unroll for x in 1:length(tup)\n        println(x)\n    end\nend\nfoo((:a, :b, :c))\n> 1\n> 2\n> 3"
},

{
    "location": "#Unrolled-functions-1",
    "page": "Readme",
    "title": "Unrolled functions",
    "category": "section",
    "text": "Unrolled.jl also provides the following unrolled functions, defined on Tuples only.unrolled_map, unrolled_reduce, unrolled_in, unrolled_any, unrolled_all, unrolled_foreachandunrolled_filter, unrolled_intersect, unrolled_union, unrolled_setdiffThe functions in this second group will only perform well when the computations can be performed entirely at compile-time (using the types). For example, unrolled_filter(x->isa(x, Int), some_tuple).In this other example, unrolled_filter is compiled to a constant:using Unrolled, Base.Test\n\n@generated positive{N}(::Val{N}) = N > 0\n@inferred unrolled_filter(positive, (Val{1}(), Val{3}(), Val{-1}(), Val{5}()))"
},

{
    "location": "#Note-on-Val-1",
    "page": "Readme",
    "title": "Note on Val",
    "category": "section",
    "text": "In my experience, Val objects are more type-stable than Val types. Favor Val{:x}() over Val{:x}."
},

{
    "location": "autodocs/#Unrolled.@fixed_range",
    "page": "Docstrings",
    "title": "Unrolled.@fixed_range",
    "category": "macro",
    "text": "@fixed_range 3:10 behaves like the standard range 3:10, but is stored within the type system, so that some_tuple[@fixed_range 3:10] is type-stable. Also supports @fixed_range some_tuple[3:end-5] \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unrolled.FixedEnd",
    "page": "Docstrings",
    "title": "Unrolled.FixedEnd",
    "category": "type",
    "text": "FixedRange{2, FixedEnd()}() behaves like a type-stable 2:end \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unrolled.FixedRange",
    "page": "Docstrings",
    "title": "Unrolled.FixedRange",
    "category": "type",
    "text": "FixedRange{A, B}() is like UnitRange{Int64}(A, B), but the bounds are encoded in the type. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unrolled.function_argument_name",
    "page": "Docstrings",
    "title": "Unrolled.function_argument_name",
    "category": "function",
    "text": "function_argument_name(arg_expr)\n\nReturns the name (as a symbol) of this argument, where arg_expr is whatever can be put in a function definition\'s argument list (eg. len::Int=5) \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unrolled.type_length",
    "page": "Docstrings",
    "title": "Unrolled.type_length",
    "category": "function",
    "text": "type_length(::Type) returns the length of sequences of that type (only makes sense for sequence-like types, obviously. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unrolled.unrolled_in_unrolled_expansion_",
    "page": "Docstrings",
    "title": "Unrolled.unrolled_in_unrolled_expansion_",
    "category": "function",
    "text": "unrolled_in(obj, tup) is like in. Beware that its return type is not always known - see #21322 \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Unrolled.@code_unrolledUnrolled.@fixed_rangeUnrolled.@unrollUnrolled.@unroll_loopUnrolled.FixedEndUnrolled.FixedRangeUnrolled.UnrolledUnrolled._unrolled_filterUnrolled.evalUnrolled.expansion_funsUnrolled.function_argument_nameUnrolled.includeUnrolled.replace_endUnrolled.type_lengthUnrolled.unrolled_allUnrolled.unrolled_all_unrolled_expansion_Unrolled.unrolled_anyUnrolled.unrolled_any_unrolled_expansion_Unrolled.unrolled_filterUnrolled.unrolled_foreachUnrolled.unrolled_foreach_unrolled_expansion_Unrolled.unrolled_inUnrolled.unrolled_in_unrolled_expansion_Unrolled.unrolled_intersectUnrolled.unrolled_mapUnrolled.unrolled_reduceUnrolled.unrolled_setdiffUnrolled.unrolled_union"
},

]}
