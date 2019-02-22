var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnsafeArrays.jl-1",
    "page": "Readme",
    "title": "UnsafeArrays.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov)UnsafeArrays provides stack-allocated pointer-based array views for Julia. This package is mainly intended as a workaround for Julia issue #14955 (non-allocating array views).While the Julia compiler is able to elide heap-allocation of views in some cases, it cannot always do so. In some other cases, the relative cost of allocation and garbage collection of a even a large number of views is small. Especially in multi-threaded applications though, this cost can quickly become prohibitive and views must either be avoided (resulting in more lengthy and less readable code), or some form stack-allocated views must be used for decent scalability. UnsafeArrays aims to provide such a solution.Example:using Compat, Base.Threads, Compat.LinearAlgebra\nusing Compat: axes\n\nfunction colnorms!(dest::AbstractVector, A::AbstractMatrix)\n    @threads for i in axes(A, 2)\n        dest[i] = norm(view(A, :, i))\n    end\n    dest\nend\n\nA = rand(50, 100000);\ndest = similar(A, size(A, 2));\n\ncolnorms!(dest, A)The above will run fine on a single thread, but scales badly on multiple threads. Use the @uviews macro provided by UnsafeArrays to replace A with an UnsafeArray within the scope of the macro. An UnsafeArray is stack-allocated, and so are all views of it, e.g. within colnorms!:using UnsafeArrays\n\n@uviews A begin\n    colnorms!(dest, A)\nend@uviews protects the original array A from GC, so the above is safe as long as the original array is not reallocated (via resize!, etc.) while the scope of @uviews is active.UnsafeArrays only supports bits types. If the element type of an array is not compatible, @uviews will simply use the original array.UnsafeArrays also provides:A non macro-variant uviews()\nA function uview() to directly get an unsafe view (with optional sub-indexing) of an array.\nThe type UnsafeArray itself, instances can be constructed from a data pointer and array size. The data type must be a bits type.When using uview() and UnsafeArray directly, the user is responsible for preserving the memory accessed from garbage collection."
},

{
    "location": "autodocs/#UnsafeArrays.@gc_preserve",
    "page": "Docstrings",
    "title": "UnsafeArrays.@gc_preserve",
    "category": "macro",
    "text": "UnsafeArrays.@gc_preserve A B ... expr\n\nProtect A, B, ... from garbage collection while executing expr. Contrary to GC.@preserve, expr is executed in a new scope.\n\nEquivalent to\n\nGC.@preserve A B ... let\n    expr\nend\n\nOn Julia versions that do not provide GC.@preserve, a fallback implementation is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsafeArrays.@uviews",
    "page": "Docstrings",
    "title": "UnsafeArrays.@uviews",
    "category": "macro",
    "text": "@uviews A B ... expr\n\nReplace arrays A, B, ... by uview(A), uview(B), ... during execution of expr, while protecting the original arrays from garbage collection.\n\nEquivalent to\n\nGC.@preserve A B ... begin\n    let A = uview(A), B = uview(B), ...\n        expr\n    end\nend\n\nThe unsafe views must not be allowed to escape the scope of expr. The original arrays must not be resized/appended/etc. during the execution of expr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsafeArrays.UnsafeArray",
    "page": "Docstrings",
    "title": "UnsafeArrays.UnsafeArray",
    "category": "type",
    "text": "UnsafeArray{T,N} <: DenseArray{T,N}\n\nAn UnsafeArray is an bitstype wrapper around a memory pointer and a size tuple. It\'s an intended to be used as a short-lived, allocation-free alternative to an an Array returned by unsafe_wrap or a SubArray returned by view or . Use with caution!\n\nConstructors:\n\nUnsafeArray{T,N}(pointer::Ptr{T}, size::NTuple{N,Int}) where {T,N}\nUnsafeArray(pointer::Ptr{T}, size::NTuple{N,Int}) where {T,N}\n\nUnsafeArray requires isbitstype(T) == true.\n\nNote: It\'s safe to construct an empty multidimensional UnsafeArray:\n\nUnsafeArray(Ptr{Int}(0), (0,...))\n\nNote: You must ensure that A is not garbage collected or reallocated via (e.g.) resize!, sizehint! etc. while U is in use! Use only in situations where you have full control over the life cycle of A and U.\n\ndeepcopy(::UnsafeArray) returns a standard Array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsafeArrays.unsafe_uview",
    "page": "Docstrings",
    "title": "UnsafeArrays.unsafe_uview",
    "category": "function",
    "text": "UnsafeArray.unsafe_uview(A::AbstractArray, I::Vararg{Base.ViewIndex,N})\nUnsafeArray.unsafe_uview(A::AbstractArray, i::Base.ViewIndex)\nUnsafeArray.unsafe_uview(A::AbstractArray)\n\nTo support uview for custom array types, add methods to unsafe_uview instead of uview. Implementing UnsafeArray.unsafe_uview(A::CustomArrayType) will often be sufficient.\n\nIt may be necessary to provide a custom implementation of Base.deepcopy for types with a custom implementation of unsafe_uview, to ensure that the result of deepcopy does NOT contain unsafe views.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsafeArrays.uview",
    "page": "Docstrings",
    "title": "UnsafeArrays.uview",
    "category": "function",
    "text": "uview(A::AbstractArray, I...)\n\nUnsafe equivalent of view. May return an UnsafeArray, a standard SubArray or A itself, depending on I... and the type of A.\n\nAs uview may return an UnsafeArray, A itself and it\'s contents must be protected from garbage collection (e.g. via GC.@preserve on Julia > v0.6) and memory reallocation while the view is in use.\n\nUse uviews(f::Function, As::AbstractArray...) or @uviews A ... expr to use unsafe views of one or multiple arrays with automatically GC protection.\n\nuviews(A, B, ...) do (A_u, B_u, ...)\n    # Do something with the unsafe views A_u, B_u, ...\n    # Code here must not resize/append/etc. A, B, ...\nend\n\nTo provide support for uview for custom array types, add methods to function UnsafeArrays.unsafe_uview.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsafeArrays.uviews",
    "page": "Docstrings",
    "title": "UnsafeArrays.uviews",
    "category": "function",
    "text": "uviews(f::Function, As::AbstractArray...)\n\nEquivalent to f(map(uview, As)...). Automatically protects the array(s) As from garbage collection during execution of f.\n\nExample:\n\nuviews(A, B, ...) do (A_u, B_u, ...)\n    # Do something with the unsafe views A_u, B_u, ...\n    # Code here must not resize/append/etc. A, B, ...\nend\n\nIn many cases, it may be preferable to use @uviews insted of views.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnsafeArrays.@gc_preserveUnsafeArrays.@uviewsUnsafeArrays.DenseIdxUnsafeArrays.IdxUnitRangeUnsafeArrays.UnsafeArrayUnsafeArrays.UnsafeArraysUnsafeArrays._maybe_unsafe_uviewUnsafeArrays._noinline_nopUnsafeArrays._require_one_based_indexingUnsafeArrays._sub_axesUnsafeArrays._sub_sizeUnsafeArrays._unsafe_view_implUnsafeArrays.evalUnsafeArrays.includeUnsafeArrays.unsafe_uviewUnsafeArrays.uviewUnsafeArrays.uviews"
},

]}
