var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Einsum.jl-1",
    "page": "Readme",
    "title": "Einsum.jl",
    "category": "section",
    "text": "Package Build Package Status\n(Image: Build Status) (Image: License)\n(Image: Einsum) (Image: Project Status: Inactive - The project has reached a stable, usable state but is no longer being actively developed; support/maintenance will be provided as time allows.) - help wanted!This package exports a single macro @einsum, which implements similar notation to the Einstein summation convention to flexibly specify operations on Julia Arrays, similar to numpy\'s einsum function (but more flexible!).For example, basic matrix multiplication can be implemented as:@einsum A[i, j] := B[i, k] * C[k, j]To install: Pkg.add(\"Einsum\"), or else pkg> add Einsum after pressing ] on Julia 0.7 and later."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#Basics-1",
    "page": "Readme",
    "title": "Basics",
    "category": "section",
    "text": "If the destination array is preallocated, then use =:A = ones(5, 6, 7) # preallocated space\nX = randn(5, 2)\nY = randn(6, 2)\nZ = randn(7, 2)\n\n# Store the result in A, overwriting as necessary:\n@einsum A[i, j, k] = X[i, r] * Y[j, r] * Z[k, r]If destination is not preallocated, then use := to automatically create a new array for the result:X = randn(5, 2)\nY = randn(6, 2)\nZ = randn(7, 2)\n\n# Create new array B with appropriate dimensions:\n@einsum B[i, j, k] := X[i, r] * Y[j, r] * Z[k, r]"
},

{
    "location": "#What-happens-under-the-hood-1",
    "page": "Readme",
    "title": "What happens under the hood",
    "category": "section",
    "text": "To execute an expression, @einsum uses Julia\'s metaprogramming capabilities to generate and execute a series of nested for loops.  To see exactly what is generated, use @macroexpand (or @expand from MacroTools.jl):@macroexpand @einsum A[i, j] := B[i, k] * C[k, j]The output will look much like the following (note that we \"sum out\" over the index k, since it only occurs multiple times on the right hand side of the equation):# determine type\nT = promote_type(eltype(B), eltype(C))\n\n# allocate new array\nA = Array{T}(undef, size(B))\n\n# check dimensions\n@assert size(B, 2) == size(C, 2)\n\n# main loop\n@inbounds begin # skip bounds-checking for speed\n    for i = 1:size(B, 1), j = 1:size(C, 2)\n        s = zero(T)\n        for k = 1:size(B,2)\n            s += B[i, k] * C[k, j]\n        end\n        A[i, j] = s\n    end\nendThe actual generated code is a bit more verbose (and not neatly commented/formatted), and will take care to use the right types and keep hygienic.You can also use updating assignment operators for preallocated arrays.  E.g., @einsum A[i, j, k] *= X[i, r] * Y[j, r] * Z[k, r] will produce something likefor k = 1:size(A, 3)\n    for j = 1:size(A, 2)\n        for i = 1:size(A, 1)\n            s = 0.0\n            for r = 1:size(X, 2)\n                s += X[i, r] * Y[j, r] * Z[k, r]\n            end\n            # Difference: here, the updating form is used:\n            A[i, j, k] *= s\n        end\n    end\nend"
},

{
    "location": "#Rules-for-indexing-variables-1",
    "page": "Readme",
    "title": "Rules for indexing variables",
    "category": "section",
    "text": "Indices that show up on the right-hand-side but not the left-hand-side are summed over\nArrays which share an index must be of the same size, in those dimensions@einsum iterates over the extent of the right-hand-side indices. For example, the following code allocates an array A that is the same size as B and copies its data into A:@einsum A[i,  j] := B[i, j]  # same as A = copy(B)If an index appears on the right-hand-side, but does not appear on the left-hand-side, then this variable is summed over. For example, the following code allocates A to be size(B, 1) and sums over the rows of B:@einsum A[i] := B[i, j]  # same as A = dropdims(sum(B, dims=2), dims=2)If an index variable appears multiple times on the right-hand-side, then it is asserted that the sizes of these dimensions match. For example,@einsum A[i] := B[i, j] * C[j]will check that the second dimension of B matches the first dimension of C in length. In particular it is equivalent to the following code:A = zeros(size(B, 1))\n@assert size(B, 2) == size(C, 1)\n\nfor i = 1:size(B, 1), j = 1:size(B, 2)\n    A[i] += B[i, j] * C[j]\nendSo an error will be thrown if the specified dimensions of B and C don\'t match."
},

{
    "location": "#Offset-indexing-1",
    "page": "Readme",
    "title": "Offset indexing",
    "category": "section",
    "text": "@einsum also allows offsets on the right-hand-side, the range over which i is summed is then restricted:@einsum A[i] = B[i - 5]"
},

{
    "location": "#@vielsum-1",
    "page": "Readme",
    "title": "@vielsum",
    "category": "section",
    "text": "This variant of @einsum will run multi-threaded on the outermost loop. For this to be fast, the code must not introduce temporaries like s = 0 in the example above. Thus for example @expand @vielsum A[i,j,k] = X[i,r]*Y[j,r]*Z[k,r] results in something equivalent to @expand-ing the following:Threads.@threads for k = 1:size(A,3)\n    for j = 1:size(A,2)\n        for i = 1:size(A,1)\n            A[i,j,k] = 0.0\n            for r = 1:size(X,2)\n                A[i,j,k] += X[i,r] * Y[j,r] * Z[k,r]\n            end\n        end\n    end\nendFor this to be useful, you will need to set an environment variable before starting Julia, such as export JULIA_NUM_THREADS=4. See the manual for details, and note that this is somewhat experimental. This will not always be faster, especially for small arrays, as there is some overhead to dividing up the work.At present you cannot use updating assignment operators like += with this macro (only = or :=) and you cannot assign to a scalar left-hand-side (only an array). These limitations prevent different threads from writing to the same memory at the same time."
},

{
    "location": "#@einsimd-1",
    "page": "Readme",
    "title": "@einsimd",
    "category": "section",
    "text": "This is a variant of @einsum which will put @simd in front of the innermost loop, encouraging Julia\'s compiler vectorize this loop (although it may do so already). For example @einsimd A[i,j,k] = X[i,r]*Y[j,r]*Z[k,r] will result in approximately@inbounds for k = 1:size(A,3)\n    for j = 1:size(A,2)\n        for i = 1:size(A,1)\n            s = 0.0\n            @simd for r = 1:size(X,2)\n                s += X[i,r] * Y[j,r] * Z[k,r]\n            end\n            A[i,j,k] = s\n        end\n    end\nendWhether this is a good idea or not you have to decide and benchmark for yourself in every specific case.  @simd makes sense for certain kinds of operations; make yourself familiar with its documentation and the inner workings of it in general."
},

{
    "location": "#Other-functionality-1",
    "page": "Readme",
    "title": "Other functionality",
    "category": "section",
    "text": "The @einsum macro can implement function calls within the nested for loop structure. For example, consider transposing a block matrix:z = Any[rand(2,2) for i=1:2, j=1:2]\n@einsum t[i,j] := transpose(z[j,i])This produces a for loop structure with a transpose function call in the middle. Approximately:for j = 1:size(z,1)\n    for i = 1:size(z,2)\n        t[i,j] = transpose(z[j,i])\n    end\nendThis will work as long the function calls are outside the array names. Again, you can use @macroexpand to see the exact code that is generated.The output need not be an array. But note that on Julia 0.7 and 1.0, the rules for evaluating in global scope (for example at the REPL prompt) are a little different – see this package for instance (which is loaded in IJulia notebooks). To get the same behavior as you would have inside a function, you use a let block:  p = rand(5); p .= p ./ sum(p)\nlet\n    global S\n    @einsum S := - p[i] * log(p[i])\nendOr perhaps clearer, explicitly define a function:m(pq, p, q) = @einsum I := pq[i,j] * log(pq[i,j] / p[i] / q[j])\n\nm(rand(5,10), rand(5), rand(10))"
},

{
    "location": "#Related-Packages:-1",
    "page": "Readme",
    "title": "Related Packages:",
    "category": "section",
    "text": "TensorOperations.jl has less flexible syntax (only allowing strict Einstein convention contractions), but can produce much more efficient code.  Instead of generating “naive” loops, it transforms the expressions into optimized contraction functions and takes care to use a good (cache-friendly) order for the looping.\nArrayMeta.jl aims to produce cache-friendly operations for more general loops (but is Julia 0.6 only)."
},

{
    "location": "autodocs/#Einsum.extractindices",
    "page": "Docstrings",
    "title": "Einsum.extractindices",
    "category": "function",
    "text": "extractindices(expr) -> (array_names, index_names, axis_expressions)\n\nCompute all index_names and respective axis calculations of an expression  involving the arrays with array_names. Everything is ordered by first  occurence in expr.\n\nExamples\n\njulia> extractindices(:(f(A[i,j,i]) + C[j]))\n(Symbol[:A, :C], Symbol[:i, :j, :i, :j], Expr[:(size(A, 1)), :(size(A, 2)), :(size(A, 3)), :(size(C, 1))])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Einsum.nest_loops",
    "page": "Docstrings",
    "title": "Einsum.nest_loops",
    "category": "function",
    "text": "nest_loops(expr, indices, axis_exprs, simd, threads) -> Expr\n\nConstruct a nested loop around expr, using indices in ranges axis_exprs.\n\nExample\n\njulia> nest_loops(:(A[i] = B[i]), [:i], [:(size(A, 1))], true, false)\nquote\n    local i\n    @simd for i = 1:size(A, 1)\n        A[i] = B[i]\n    end\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Einsum.@einsimdEinsum.@einsumEinsum.@einsum_checkinboundsEinsum.@vielsimdEinsum.@vielsumEinsum.EinsumEinsum._einsumEinsum.check_index_occurrenceEinsum.evalEinsum.extractindicesEinsum.extractindices!Einsum.includeEinsum.nest_loopEinsum.nest_loopsEinsum.pushindex!Einsum.unquote_offsets!"
},

]}
