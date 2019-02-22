var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<a id=\'TupleTools.jl-1\'></a>"
},

{
    "location": "#TupleTools.jl-1",
    "page": "Readme",
    "title": "TupleTools.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: License) (Image: Coverage Status) (Image: codecov.io)A bunch of tools for using tuples (mostly homogeneous tuples NTuple{N}) as a collection and performing a number of operations with an inferrable result, typically also an NTuple{M} with inferable length M. Type inference breaks down if some of the final or intermediate tuples exceed MAX_TUPLETYPE_LEN, meaning inference typically works up to output tuples of length 13 or 14. Chosen implementations are typically faster than the corresponding functions in base for those small tuple lengths, but can be slower for larger tuples. Inference also breaks down for most functions in case of inhomogeneous tuples. Some algorithms also provide reasonable defaults assuming that they are used for tuples of Ints, i.e. TupleTools.sum(()) = 0 or TupleTools.prod(()) = 1 (whereas the corresponding Base functions would error). This originates from the assumption that these methods are used to operate on tuples of e.g. sizes, indices or strides of multidimensional arrays.Note that none of the following functions are exported, since their name often collides with the equivalent functions (with different implementations) in Base.<a id=\'Types-1\'></a>"
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": "<a id=\'TupleTools.StaticLength\' href=\'#TupleTools.StaticLength\'>#</a> TupleTools.StaticLength &mdash; Type.struct StaticLength{N} endLike Val{N}, StaticLength can be used to construct a tuple of inferrable length using ntuple(f, StaticLength(N)). Here, StaticLength(N) creates StaticLength{N}() using a Base.@pure constructor. Furthermore, one can add and subtract StaticLength objects, such thatStaticLength(N₁) + StaticLength(N₂) == StaticLength(N₁+N₂)andStaticLength(N₁) - StaticLength(N₂) == StaticLength(max(0, N₁-N₂))<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L8-L22\' class=\'documenter-source\'>source</a><br><a id=\'Functions-1\'></a>"
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "<a id=\'TupleTools.tail2\' href=\'#TupleTools.tail2\'>#</a> TupleTools.tail2 &mdash; Function.tail2(t::Tuple) -> ::TupleReturns a tuple with the first two elements stripped, equivalent to tail(tail(t))<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L37-L41\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.unsafetail\' href=\'#TupleTools.unsafetail\'>#</a> TupleTools.unsafe_tail &mdash; Function.unsafe_tail(t::Tuple) -> ::TupleReturns a tuple with the first element stripped, similar to tail(t), but does not error on an empty tuple (instead returning an empty tuple again). An empty tuple is thus the fixed point of this function.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L44-L50\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.unsafefront\' href=\'#TupleTools.unsafefront\'>#</a> TupleTools.unsafe_front &mdash; Function.unsafe_front(t::Tuple) -> ::TupleReturns a tuple with the last element stripped, similar to front(t), but does not error on an empty tuple (instead returning an empty tuple again). An empty tuple is thus the fixed point of this function.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L54-L60\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.getindices\' href=\'#TupleTools.getindices\'>#</a> TupleTools.getindices &mdash; Function.getindices(t::Tuple, I::Tuple{Vararg{Int}}) -> ::TupleGet the indices t[i] for i in I, again as tuple.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L288-L292\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.deleteat\' href=\'#TupleTools.deleteat\'>#</a> TupleTools.deleteat &mdash; Function.deleteat(t::Tuple, i::Int) -> ::Tuple\ndeleteat(t::Tuple, I::Tuple{Vararg{Int}}) -> ::TupleDelete the element at location i in t; if a list I of indices is specified (again as a tuple), the elements of these different positions are deleted.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L76-L82\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.insertat\' href=\'#TupleTools.insertat\'>#</a> TupleTools.insertat &mdash; Function.insertat(t::Tuple, i::Int, t2::Tuple) -> ::TupleInsert the elements of tuple t2 at location i in t, i.e. the output tuple will look as (t[1:i-1]..., t2..., t[i+1:end]). Note that element t[i] is deleted. Use setindex for setting a single value at position i, or insertafter(t, i, t2) to insert the contents of t2 in between element i and i+1 in t.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L97-L105\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.insertafter\' href=\'#TupleTools.insertafter\'>#</a> TupleTools.insertafter &mdash; Function.insertafter(t::Tuple, i::Int, t2::Tuple) -> ::TupleInsert the elements of tuple t2 after location i in t, i.e. the output tuple will look as (t[1:i]..., t2..., t[i+1:end]). Use index i=0 or just (t2..., t...) to insert t2 in front of t; also see insertat to overwrite the element at position i.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L110-L117\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.vcat\' href=\'#TupleTools.vcat\'>#</a> TupleTools.vcat &mdash; Function.vcat(args...) -> ::TupleLike vcat for tuples, concatenates a combination of tuple arguments and non-tuple arguments into a single tuple. Only works one level deep, i.e. tuples in tuples are not expanded.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L64-L70\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.sum\' href=\'#TupleTools.sum\'>#</a> TupleTools.sum &mdash; Function.sum(t::Tuple)Returns the sum of the element of a tuple, or 0 for an empty tuple.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L122-L126\' class=\'documenter-source\'>source</a><br><a id=\'Base.cumsum\' href=\'#Base.cumsum\'>#</a> Base.cumsum &mdash; Function.cumsum(t::Tuple)Returns the cumulative sum of the elements of a tuple, or () for an empty tuple.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L131-L135\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.prod\' href=\'#TupleTools.prod\'>#</a> TupleTools.prod &mdash; Function.prod(t::Tuple)Returns the product of the elements of a tuple, or 1 for an empty tuple.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L143-L147\' class=\'documenter-source\'>source</a><br><a id=\'Base.cumprod\' href=\'#Base.cumprod\'>#</a> Base.cumprod &mdash; Function.cumprod(t::Tuple)Returns the cumulative product of the elements of a tuple, or () for an empty tuple.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L152-L156\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.minimum\' href=\'#TupleTools.minimum\'>#</a> TupleTools.minimum &mdash; Function.minimum(t::Tuple)Returns the smallest element of a tuple<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L164-L168\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.maximum\' href=\'#TupleTools.maximum\'>#</a> TupleTools.maximum &mdash; Function.maximum(t::Tuple)Returns the largest element of a tuple<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L172-L176\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.findmin\' href=\'#TupleTools.findmin\'>#</a> TupleTools.findmin &mdash; Function.findmin(t::Tuple)Returns the value and index of the minimum element in a tuple. If there are multiple minimal elements, then the first one will be returned.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L198-L203\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.findmax\' href=\'#TupleTools.findmax\'>#</a> TupleTools.findmax &mdash; Function.findmax(t::Tuple)Returns the value and index of the maximum element in a tuple. If there are multiple maximal elements, then the first one will be returned.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L215-L220\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.argmin\' href=\'#TupleTools.argmin\'>#</a> TupleTools.argmin &mdash; Function.argmin(t::Tuple)Returns the index of the minimum element in a tuple. If there are multiple minimal elements, then the first one will be returned.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L181-L186\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.argmax\' href=\'#TupleTools.argmax\'>#</a> TupleTools.argmax &mdash; Function.argmax(t::Tuple)Returns the index of the maximum element in a tuple. If there are multiple minimal elements, then the first one will be returned.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L190-L195\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.sort\' href=\'#TupleTools.sort\'>#</a> TupleTools.sort &mdash; Function.sort(t::Tuple; lt=isless, by=identity, rev::Bool=false) -> ::TupleSorts the tuple t.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L234-L238\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.sortperm\' href=\'#TupleTools.sortperm\'>#</a> TupleTools.sortperm &mdash; Function.sortperm(t::Tuple; lt=isless, by=identity, rev::Bool=false) -> ::TupleComputes a tuple that contains the permutation required to sort t.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L260-L265\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.isperm\' href=\'#TupleTools.isperm\'>#</a> TupleTools.isperm &mdash; Function.isperm(p) -> ::BoolA non-allocating alternative to Base.isperm(p) that is much faster for small permutations.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L307-L311\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.invperm\' href=\'#TupleTools.invperm\'>#</a> TupleTools.invperm &mdash; Function.invperm(p::NTuple{N,Int}) -> ::NTuple{N,Int}Inverse permutation of a permutation p.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L323-L327\' class=\'documenter-source\'>source</a><br><a id=\'TupleTools.permute\' href=\'#TupleTools.permute\'>#</a> TupleTools.permute &mdash; Function.permute(t::Tuple, p) -> ::TuplePermute the elements of tuple t according to the permutation in p.<a target=\'_blank\' href=\'https://github.com/Jutho/TupleTools.jl/blob/a898092ea5bed41dd20e64ef8e6d7010b2e12d64/src/TupleTools.jl#L296-L300\' class=\'documenter-source\'>source</a><br>"
},

{
    "location": "autodocs/#TupleTools.StaticLength",
    "page": "Docstrings",
    "title": "TupleTools.StaticLength",
    "category": "type",
    "text": "struct StaticLength{N} end\n\nLike Val{N}, StaticLength can be used to construct a tuple of inferrable length using ntuple(f, StaticLength(N)). Here, StaticLength(N) creates StaticLength{N}() using a Base.@pure constructor. Furthermore, one can add and subtract StaticLength objects, such that\n\nStaticLength(N₁) + StaticLength(N₂) == StaticLength(N₁+N₂)\n\nand\n\nStaticLength(N₁) - StaticLength(N₂) == StaticLength(max(0, N₁-N₂))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.argmax",
    "page": "Docstrings",
    "title": "TupleTools.argmax",
    "category": "function",
    "text": "argmax(t::Tuple)\n\nReturns the index of the maximum element in a tuple. If there are multiple minimal elements, then the first one will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.argmin",
    "page": "Docstrings",
    "title": "TupleTools.argmin",
    "category": "function",
    "text": "argmin(t::Tuple)\n\nReturns the index of the minimum element in a tuple. If there are multiple minimal elements, then the first one will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.deleteat",
    "page": "Docstrings",
    "title": "TupleTools.deleteat",
    "category": "function",
    "text": "deleteat(t::Tuple, i::Int) -> ::Tuple\ndeleteat(t::Tuple, I::Tuple{Vararg{Int}}) -> ::Tuple\n\nDelete the element at location i in t; if a list I of indices is specified (again as a tuple), the elements of these different positions are deleted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.findmax",
    "page": "Docstrings",
    "title": "TupleTools.findmax",
    "category": "function",
    "text": "findmax(t::Tuple)\n\nReturns the value and index of the maximum element in a tuple. If there are multiple maximal elements, then the first one will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.findmin",
    "page": "Docstrings",
    "title": "TupleTools.findmin",
    "category": "function",
    "text": "findmin(t::Tuple)\n\nReturns the value and index of the minimum element in a tuple. If there are multiple minimal elements, then the first one will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.getindices",
    "page": "Docstrings",
    "title": "TupleTools.getindices",
    "category": "function",
    "text": "getindices(t::Tuple, I::Tuple{Vararg{Int}}) -> ::Tuple\n\nGet the indices t[i] for i in I, again as tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.insertafter",
    "page": "Docstrings",
    "title": "TupleTools.insertafter",
    "category": "function",
    "text": "insertafter(t::Tuple, i::Int, t2::Tuple) -> ::Tuple\n\nInsert the elements of tuple t2 after location i in t, i.e. the output tuple will look as (t[1:i]..., t2..., t[i+1:end]). Use index i=0 or just (t2..., t...) to insert t2 in front of t; also see insertat to overwrite the element at position i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.insertat",
    "page": "Docstrings",
    "title": "TupleTools.insertat",
    "category": "function",
    "text": "insertat(t::Tuple, i::Int, t2::Tuple) -> ::Tuple\n\nInsert the elements of tuple t2 at location i in t, i.e. the output tuple will look as (t[1:i-1]..., t2..., t[i+1:end]). Note that element t[i] is deleted. Use setindex for setting a single value at position i, or insertafter(t, i, t2) to insert the contents of t2 in between element i and i+1 in t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.invperm",
    "page": "Docstrings",
    "title": "TupleTools.invperm",
    "category": "function",
    "text": "invperm(p::NTuple{N,Int}) -> ::NTuple{N,Int}\n\nInverse permutation of a permutation p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.isperm",
    "page": "Docstrings",
    "title": "TupleTools.isperm",
    "category": "function",
    "text": "isperm(p) -> ::Bool\n\nA non-allocating alternative to Base.isperm(p) that is much faster for small permutations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.maximum",
    "page": "Docstrings",
    "title": "TupleTools.maximum",
    "category": "function",
    "text": "maximum(t::Tuple)\n\nReturns the largest element of a tuple\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.minimum",
    "page": "Docstrings",
    "title": "TupleTools.minimum",
    "category": "function",
    "text": "minimum(t::Tuple)\n\nReturns the smallest element of a tuple\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.permute",
    "page": "Docstrings",
    "title": "TupleTools.permute",
    "category": "function",
    "text": "permute(t::Tuple, p) -> ::Tuple\n\nPermute the elements of tuple t according to the permutation in p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.prod",
    "page": "Docstrings",
    "title": "TupleTools.prod",
    "category": "function",
    "text": "prod(t::Tuple)\n\nReturns the product of the elements of a tuple, or 1 for an empty tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.sort",
    "page": "Docstrings",
    "title": "TupleTools.sort",
    "category": "function",
    "text": "sort(t::Tuple; lt=isless, by=identity, rev::Bool=false) -> ::Tuple\n\nSorts the tuple t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.sortperm",
    "page": "Docstrings",
    "title": "TupleTools.sortperm",
    "category": "function",
    "text": "sortperm(t::Tuple; lt=isless, by=identity, rev::Bool=false) -> ::Tuple\n\nComputes a tuple that contains the permutation required to sort t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.sum",
    "page": "Docstrings",
    "title": "TupleTools.sum",
    "category": "function",
    "text": "sum(t::Tuple)\n\nReturns the sum of the element of a tuple, or 0 for an empty tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.tail2",
    "page": "Docstrings",
    "title": "TupleTools.tail2",
    "category": "function",
    "text": "tail2(t::Tuple) -> ::Tuple\n\nReturns a tuple with the first two elements stripped, equivalent to tail(tail(t))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.unsafe_front",
    "page": "Docstrings",
    "title": "TupleTools.unsafe_front",
    "category": "function",
    "text": "unsafe_front(t::Tuple) -> ::Tuple\n\nReturns a tuple with the last element stripped, similar to front(t), but does not error on an empty tuple (instead returning an empty tuple again). An empty tuple is thus the fixed point of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.unsafe_tail",
    "page": "Docstrings",
    "title": "TupleTools.unsafe_tail",
    "category": "function",
    "text": "unsafe_tail(t::Tuple) -> ::Tuple\n\nReturns a tuple with the first element stripped, similar to tail(t), but does not error on an empty tuple (instead returning an empty tuple again). An empty tuple is thus the fixed point of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TupleTools.vcat",
    "page": "Docstrings",
    "title": "TupleTools.vcat",
    "category": "function",
    "text": "vcat(args...) -> ::Tuple\n\nLike vcat for tuples, concatenates a combination of tuple arguments and non-tuple arguments into a single tuple. Only works one level deep, i.e. tuples in tuples are not expanded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TupleTools.StaticLengthTupleTools.TupleToolsTupleTools._deleteatTupleTools._findmaxTupleTools._findminTupleTools._insertafterTupleTools._insertatTupleTools._ishiftTupleTools._permuteTupleTools._sortTupleTools._sortpermTupleTools.argmaxTupleTools.argminTupleTools.argtail2TupleTools.deleteatTupleTools.evalTupleTools.findmaxTupleTools.findminTupleTools.getindicesTupleTools.includeTupleTools.insertafterTupleTools.insertatTupleTools.invpermTupleTools.ispermTupleTools.maximumTupleTools.minimumTupleTools.permuteTupleTools.prodTupleTools.sortTupleTools.sortpermTupleTools.sumTupleTools.tail2TupleTools.unsafe_frontTupleTools.unsafe_tailTupleTools.vcat"
},

]}
