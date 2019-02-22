var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ArrayAllez.jl-1",
    "page": "Readme",
    "title": "ArrayAllez.jl",
    "category": "section",
    "text": "(Image: Build Status)] add ArrayAllez\n\nadd  Yeppp  Flux  https://github.com/platawiec/AppleAccelerate.jl#julia07"
},

{
    "location": "#log!-exp!-1",
    "page": "Readme",
    "title": "log! ∘ exp!",
    "category": "section",
    "text": "This began as a way to more conveniently choose between Yeppp!  and AppleAccelerate. Or neither... just loops with @threads?x = rand(5);\n\ny = exp.(x)  # = exp0(x) \n\nusing Yeppp  # or using AppleAccelerate\n\ny = exp!(x)  # with ! mutates\nx = log_(y)  # with _ copiesBesides log! and exp!, there is also scale! which understands rows/columns.  And iscale! which divides, and inv! which is an element-wise inverse. All have non-mutating versions ending _ instead of !, and simple broadcast-ed versions with 0.m = ones(3,7)\nv = rand(3)\nr = rand(7)\'\n\nscale0(m, 99)  # simply m .* 99\nscale_(m, v)   # like m .* v but using rmul!\niscale!(m, r)  # like m ./ r but mutating.\nm"
},

{
    "location": "#-1",
    "page": "Readme",
    "title": "∇",
    "category": "section",
    "text": "These commands all make some attempt to define Flux gradients,  but caveat emptor. There is also an exp!! which mutates both its forward input and its backward gradient,  which may be a terrible idea.using Flux\nx = param(randn(5));\ny = exp_(x)\n\nFlux.back!(sum_(exp!(x)))\nx.data == y # true\nx.gradThis package also defines gradients for prod (overwriting an incorrect one) and cumprod,  as in this PR. "
},

{
    "location": "#Array_-1",
    "page": "Readme",
    "title": "Array_",
    "category": "section",
    "text": "An experiment with LRUCache for working space:x = rand(2000)\' # turns off below this size\n\ncopy_(:copy, x)\nsimilar_(:sim, x)\nArray_{Float64}(:new, 5,1000) # @btime 200 ns, 32 bytes\n\ninv_(:inv, x) # most of the _ functions can opt-in"
},

{
    "location": "#broadsum-1",
    "page": "Readme",
    "title": "broadsum",
    "category": "section",
    "text": "An attempt to keep broadcasting un-materialized: v = rand(10^4);\nw = similar(v);\n\nsum(v .* v\')  # @btime 400 ms, 760 MB\nbroadsum(*, v, v\')  # 7 ms, 112 bytes\n\nsum!(w, v .* v\');        # 760 MB\nbroadsum!(w, *, v, v\');  # 96 bytesThe broadsum! (and broadsum(..., dims=...) versions now use a BroadcastArray from  LazyArrays.jl.  Right now that is slow for a complete sum, so they do something more DIY.  "
},

{
    "location": "#\\odot-1",
    "page": "Readme",
    "title": "⊙ = \\odot",
    "category": "section",
    "text": "Matrix multiplication, on the last index of one tensor & the first index of the next:three = rand(2,2,5);\nmat = rand(5,2);\n\np1 = three ⊙ mat\n\np2 = reshape(reshape(three,:,5) * mat ,2,2,2) # same\n\nusing Einsum\n@einsum p3[i,j,k] := three[i,j,s] * mat[s,k]  # same"
},

{
    "location": "#See-Also-1",
    "page": "Readme",
    "title": "See Also",
    "category": "section",
    "text": "Vectorize.jl is a more comprehensive wrapper, including Intel MKL. \nStrided.jl adds @threads to broadcasting. "
},

{
    "location": "autodocs/#ArrayAllez.Array_",
    "page": "Docstrings",
    "title": "ArrayAllez.Array_",
    "category": "type",
    "text": "similar_(name, A)     ≈ similar(A)\nArray_{T}(name, size) ≈ Array{T}(undef, size)\n\nNew arrays for intermediate results, drawn from an LRU cache when length(A) >= 2000. The cache\'s key uses name::Symbol as well as type & size to ensure different uses don\'t collide.\n\ncopy_(name, A) = copyto!(similar_(name, A), A)\n\nJust like that.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.broadsum",
    "page": "Docstrings",
    "title": "ArrayAllez.broadsum",
    "category": "function",
    "text": "broadsum(*, A, B, C)       = sum(A .* B .* C)\nbroadsum(f,*, A,B)         = sum(f, A .* B)\n\nThese aim to work exactly like sum(broadcast(...)), but without materialising the broadcast array. Simplest case works & is fast. Version with f is slow. \n\nbroadsum(*, A, B; dims=1)  = sum(A .* B; dims=1)\nbroadsum!(Z, *,A,B)        = sum!(Z, A .* B)\n\nSimilarly immitates sum!(Z, broadcast(...)) without materialising.  Now uses LazyArrays.BroadcastArray. The in-place form is actually a little slower. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.bsum",
    "page": "Docstrings",
    "title": "ArrayAllez.bsum",
    "category": "function",
    "text": "broadsum(*, A, B, C)       = sum(A .* B .* C)\nbroadsum(f,*, A,B)         = sum(f, A .* B)\n\nThese aim to work exactly like sum(broadcast(...)), but without materialising the broadcast array. Simplest case works & is fast. Version with f is slow. \n\nbroadsum(*, A, B; dims=1)  = sum(A .* B; dims=1)\nbroadsum!(Z, *,A,B)        = sum!(Z, A .* B)\n\nSimilarly immitates sum!(Z, broadcast(...)) without materialising.  Now uses LazyArrays.BroadcastArray. The in-place form is actually a little slower. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.copy_",
    "page": "Docstrings",
    "title": "ArrayAllez.copy_",
    "category": "function",
    "text": "similar_(name, A)     ≈ similar(A)\nArray_{T}(name, size) ≈ Array{T}(undef, size)\n\nNew arrays for intermediate results, drawn from an LRU cache when length(A) >= 2000. The cache\'s key uses name::Symbol as well as type & size to ensure different uses don\'t collide.\n\ncopy_(name, A) = copyto!(similar_(name, A), A)\n\nJust like that.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.exp!",
    "page": "Docstrings",
    "title": "ArrayAllez.exp!",
    "category": "function",
    "text": "exp!(A)\nexp_(A) = exp!(similar(A), A)\nexp0(A) ≈ exp.(A)\n\nElement-wise in-place exponential, and friends. Multi-threaded when length(A) >= 100. Will be handled by Yeppp or AppleAccelerate if you load one of them. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.exp_",
    "page": "Docstrings",
    "title": "ArrayAllez.exp_",
    "category": "function",
    "text": "exp!(A)\nexp_(A) = exp!(similar(A), A)\nexp0(A) ≈ exp.(A)\n\nElement-wise in-place exponential, and friends. Multi-threaded when length(A) >= 100. Will be handled by Yeppp or AppleAccelerate if you load one of them. \n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.inv!",
    "page": "Docstrings",
    "title": "ArrayAllez.inv!",
    "category": "function",
    "text": "inv!(A) ≈ 1 ./ A\ninv!(A, b::Number) ≈ b ./ A\n\nAnd inv_(A) which copies, and inv0(A) simple broadcasting. Multi-threaded when length(A) >= 1000. Will be handled by AppleAccelerate if you load it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.inv_",
    "page": "Docstrings",
    "title": "ArrayAllez.inv_",
    "category": "function",
    "text": "inv!(A) ≈ 1 ./ A\ninv!(A, b::Number) ≈ b ./ A\n\nAnd inv_(A) which copies, and inv0(A) simple broadcasting. Multi-threaded when length(A) >= 1000. Will be handled by AppleAccelerate if you load it.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.iscale!",
    "page": "Docstrings",
    "title": "ArrayAllez.iscale!",
    "category": "function",
    "text": "iscale!(A, b::Number) ≈ A ./ b\niscale!(A, v::Vector) ≈ A ./ v      # A::Matrix\niscale!(A, r::Adjoint) ≈ A ./ r     # r::RowVector / Transpose etc.\niscale!(A, B) ≈ A ./ B\n\nFor each of these, there is also iscale_(A, ...) non-mutating but perhaps accellerated, and iscale0(A, ...) simple broadcasting. Finally there is iscale!!(A, x) which mutate both arguments, wihch may be a terrible idea.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.iscale_",
    "page": "Docstrings",
    "title": "ArrayAllez.iscale_",
    "category": "function",
    "text": "iscale!(A, b::Number) ≈ A ./ b\niscale!(A, v::Vector) ≈ A ./ v      # A::Matrix\niscale!(A, r::Adjoint) ≈ A ./ r     # r::RowVector / Transpose etc.\niscale!(A, B) ≈ A ./ B\n\nFor each of these, there is also iscale_(A, ...) non-mutating but perhaps accellerated, and iscale0(A, ...) simple broadcasting. Finally there is iscale!!(A, x) which mutate both arguments, wihch may be a terrible idea.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.log!",
    "page": "Docstrings",
    "title": "ArrayAllez.log!",
    "category": "function",
    "text": "log!(A)\nlog_(A) ≈ log!(similar(A), A)\nlog0(A) = log.(A)\n\nElement-wise in-place natural logarithm, and friends. Multi-threaded when length(A) >= 100. Will be handled by Yeppp or AppleAccelerate if you load one of them.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.log_",
    "page": "Docstrings",
    "title": "ArrayAllez.log_",
    "category": "function",
    "text": "log!(A)\nlog_(A) ≈ log!(similar(A), A)\nlog0(A) = log.(A)\n\nElement-wise in-place natural logarithm, and friends. Multi-threaded when length(A) >= 100. Will be handled by Yeppp or AppleAccelerate if you load one of them.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.scale!",
    "page": "Docstrings",
    "title": "ArrayAllez.scale!",
    "category": "function",
    "text": "scale!(A, b::Number) ≈ A .* b\nscale!(A, v::Vector) ≈ A .* v       # A::Matrix\nscale!(A, r::Adjoint) ≈ A .* r      # r::RowVector / Transpose etc.\nscale!(A, B) ≈ A .* B\n\nFor each of these, there is also also scale_(A, ...) non-mutating but perhaps accellerated, and scale0(A, ...) simple broadcasting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.scale_",
    "page": "Docstrings",
    "title": "ArrayAllez.scale_",
    "category": "function",
    "text": "scale!(A, b::Number) ≈ A .* b\nscale!(A, v::Vector) ≈ A .* v       # A::Matrix\nscale!(A, r::Adjoint) ≈ A .* r      # r::RowVector / Transpose etc.\nscale!(A, B) ≈ A .* B\n\nFor each of these, there is also also scale_(A, ...) non-mutating but perhaps accellerated, and scale0(A, ...) simple broadcasting.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ArrayAllez.similar_",
    "page": "Docstrings",
    "title": "ArrayAllez.similar_",
    "category": "function",
    "text": "similar_(name, A)     ≈ similar(A)\nArray_{T}(name, size) ≈ Array{T}(undef, size)\n\nNew arrays for intermediate results, drawn from an LRU cache when length(A) >= 2000. The cache\'s key uses name::Symbol as well as type & size to ensure different uses don\'t collide.\n\ncopy_(name, A) = copyto!(similar_(name, A), A)\n\nJust like that.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ArrayAllez.ARVectorArrayAllez.ArrayAllezArrayAllez.Array_ArrayAllez.CFloatArrayAllez.CFloatArrayArrayAllez.CFloatMatrixArrayAllez.CacheKeyArrayAllez.IVERBOSEArrayAllez.RVectorArrayAllez.VECArrayAllez.__init__ArrayAllez.__inits__ArrayAllez._bsumArrayAllez.broadsumArrayAllez.broadsum!ArrayAllez.bsumArrayAllez.bsum!ArrayAllez.cacheArrayAllez.checksumArrayAllez.copy_ArrayAllez.evalArrayAllez.exp!ArrayAllez.exp!!ArrayAllez.exp0ArrayAllez.exp1ArrayAllez.exp_ArrayAllez.includeArrayAllez.inv!ArrayAllez.inv!!ArrayAllez.inv0ArrayAllez.inv_ArrayAllez.iscale!ArrayAllez.iscale!!ArrayAllez.iscale0ArrayAllez.iscale_ArrayAllez.load_noteArrayAllez.log!ArrayAllez.log!!ArrayAllez.log0ArrayAllez.log1ArrayAllez.log_ArrayAllez.osizesArrayAllez.scale!ArrayAllez.scale!!ArrayAllez.scale0ArrayAllez.scale_ArrayAllez.similar_ArrayAllez.sum_ArrayAllez.↓ArrayAllez.⊙"
},

]}
