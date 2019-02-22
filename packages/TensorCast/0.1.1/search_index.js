var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TensorCast.jl-1",
    "page": "Readme",
    "title": "TensorCast.jl",
    "category": "section",
    "text": "(Image: Build Status) <!– <a href=\"https://travis-ci.org/mcabbott/TensorCast.jl\"><img src=\"https://travis-ci.org/mcabbott/TensorCast.jl.svg?branch=master\" align=\"right\" alt=\"Build Status\" padding=\"20\"></a>–>This package lets you write many expressions involving N-dimensional arrays in index notation, which is often the least confusing way.  It defines a pair of macros: @cast deals both with \"casting\" into new shapes (including going  to and from an array-of-arrays) and with broadcasting:@cast A[row][col] := B[row, col]            # slice a matrix into its rows\n\n@cast C[(i,j), (k,ℓ)] := D[i,j,k,ℓ]         # reshape a 4-tensor to give a matrix\n\n@cast E[x,y] = F[x]^2 * log(G[y])           # broadcast E .= F.^2 .* log.(G\') into existing EAnd @reduce takes sums (or other reductions) over some directions,  but otherwise understands all the same things: @reduce H[a] := sum(b,c) L[a,b,c]                # sum over dims=(2,3), and dropdims\n\n@reduce S[i] = sum(n) -P[i,n] * log(P[i,n]/Q[n]) # sum!(S, @. -P*log(P/Q\')) into exising S\n\n@reduce W[μ,ν,J] := prod(i:2) V[(i,J)][μ,ν]      # products of pairs of matrices, stackedThese are intended to complement the macro from TensorOperations.jl, which instead performs Einstein-convention contractions and traces, in a very similar notation.  Here it is implicit that repeated indices are summed over: @tensor A[i,k] := B[i,j] * C[j,k]           # matrix multiplication, A = B * C\n@tensor D[i] := E[i] + F[i,k,k]             # partial trace of F only, Dᵢ = Eᵢ + Σⱼ FᵢⱼⱼSimilar notation is also used by the macro from Einsum.jl, where again it is implicit that all indices appearing only on the right are summed over.  This allows arbitrary (element-wise) functions:@einsum S[i] := -P[i,n] * log(P[i,n]/Q[n])  # sum over n, for each i (also with @reduce above)\n@einsum G[i] := E[i] + F[i,k,k]             # the sum includes everyting:  Gᵢ = Σⱼ (Eᵢ + Fᵢⱼⱼ)There is some overlap of operations which can be done with two (or all three) of these packages.  However they produce very different code for actually doing what you request.  The original @einsum simply writes the necessary set of nested loops.  Instead @tensor works out a sequence of contraction and trace operations, calling optimised BLAS routines where possible.  <!– (And ArrayMeta.jl aimed to do a wide variety of operations efficiently, but seems to be abandonned.) –>The  macros from this package aim to produce simple Julia commands:  often just a string of reshape and permutedims and eachslice and so on, plus a native broadcasting expression if needed,  and sum or  sum!. This means that they are very generic, and will (mostly) work well on  Flux\'s TrackedArrays, on the GPU via  CuArrays, and on almost any other kind of N-dimensional array.For those who speak Python, @cast and @reduce allow similar operations to  einops (minus the cool video, but plus broadcasting) while Einsum / TensorOperations map very roughly to einsum  / opt_einsum. The function of @check! (see below) is similar to tsalib\'s shape annotations."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You need Julia 1.0. This package is now registered, install it like this: pkg> add TensorCast  # press ] for pkg, backspace to leave\n\npkg> add StaticArrays Strided  TensorOperations Einsum  # optional extras, see below\npkg> add Flux ImageView FileIO                          # for image examples\n\njulia> using TensorCast\n\nhelp?> @cast  # press ? for helpFrom a Jupyter notebook, write instead using Pkg; pkg\"add TensorCast\". If you downloaded this under its former name, you should rm TensorSlice.  "
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "This simply slices a matrix into its rows, then re-glues and re-slices to obtain the columns instead:mat = (1:4)\' .+ rand(2,4)\n\n@cast rows[r][c] := mat[r,c]\n@cast cols[♜][🚣] := rows[🚣][♜]\n\n@reduce sum_r[c] := sum(r) mat[r,c]  \n\nsize(sum_r) == (4,) # @reduce gives a vector, not a 1×4 matrix\nsum_r == sum(rows)  # trueNotice that the same indices must always appear both on the right and on the left (unless they are explicitly reduced over). Indices may not be repeated. This reshapes a matrix into a 3-tensor. The ranges of i and k would be ambiguous unless you specify  (at least) one of them. Such ranges are written i:2, and appear as part of a tuple of options after the expression:M = randn(Float16, 2*5, 3)\n\n@cast A[i,j,k] := M[(i,k),j]  i:2, k:5\n\nsize(A) == (2,3,5) # true\n\n@cast A[i,j,k] = M[(i,k),j]; # writing into existing A, it knows size(A)This glues and reshapes a list of images into one large image:<img src=\"test/famous-digits.png?raw=true\" width=\"336\" height=\"168\" align=\"right\" alt=\"MNIST\" padding=\"20\">using Flux, ImageView, FileIO\nimgs = Flux.Data.MNIST.images()[1:32] # vector of matrices\n\n@cast G[(i,I), (j,J)] := imgs[(I,J)][i,j] J:8\n@cast G[ i\\I,   j\\J ] := imgs[ I\\J ][i,j] J:8 # identical\n\nimshow(G) # grid with eight columns, 1 ≤ J ≤ 8\n\nsave(\"famous-digits.png\", G)Note that the order here (i,I) = (pixel, grid) is a choice made by this package, such that A[(i,j),k] and B[i,j,k] have the same linear order A[:] == B[:]. And entries i and i+1 are neighbours because Julia Arrays are column-major  (the opposite of C, and hence of NumPy). The alternative notation (i,I) == i\\I used here  is meant to help me remember which is the large-grid index. (The vector of matrices C[k]{i,j} also has the same order, if the slices are StaticArrays, below.)This defines a function which extends kron(A,B) one step beyond vectors & matrices: function Base.kron(A::Array{T,3}, B::Array{T,3}) where {T}\n    @cast D[i\\I, j\\J, k\\K] := A[I,J,K] * B[i,j,k]\nend\n\nA = rand(-20:20, 2,3,1)   # test with 3rd index trivial\nB = ones(Int, 5,7,1);\n\nD = kron(A, B)            # calls this new method\nsize(D) == (2*5, 3*7, 1*1)\n\nkron(A[:,:,1], B[:,:,1])  # calls built-in method, same numbersWhile tensor is often just a fancy word for N-dimensional array, it has more specific meanings,  and one of them is that the the tensor product of two vector spaces V ⊗ V is the one with the product of  their dimensions (as opposed to V × V which has the sum). The Kronecker product  kron maps to such a tensor product space (as vcat maps into V × V).  We can always think of these combined indices (i,I) = i\\I in this way, and now you may write i⊗I too. This does max-pooling on the above image grid G: <img src=\"test/famous-digits-2.png?raw=true\" width=\"224\" height=\"112\" align=\"right\" alt=\"MNIST\" padding=\"20\">@reduce H[a, b] := maximum(α:2,β:2)  G[α\\a, β\\b]  \n\nsize(G) == 2 .* size(H) # true\nimshow(H)In words: take a horizontal line of pixels in G and re-arrange them into two rows,  so that each column contains two formerly-neighbouring pixes. The horizontal position is now a,  vertical is α ∈ 1:2. Take the maximum along these new columns, giving us one line again (half as long).  Do this to every line, and also to every vertical line, to obtain H. Notice also that ranges α:2, β:2 can be specified inside the reduction function, instead of at the end. Finally, this takes a 2D slice W[2,:,4,:] of a 4D array, transposes it, and then forms it into a 4D array with two trivial dimensions – such output can be useful for interacting with broadcasting:W = randn(2,3,5,7);\n\n@cast Z[_,i,_,k] := W[2,k,4,i]  # equivalent to Z[1,i,1,k] on left\n\nsize(Z) == (1,7,1,3)"
},

{
    "location": "#Inside-1",
    "page": "Readme",
    "title": "Inside",
    "category": "section",
    "text": "To inspect what this package produces, there is another macro @pretty which works like this:@pretty @cast A[(i,j)] = B[i,j]\n# copyto!(A, B)\n\n@pretty @cast A[k][i,j] := B[i,(j,k)]  k:length(C)\n# begin\n#     local caterpillar = (size(B, 1), :, length(C))  # your animal may vary\n#     A = sliceview(reshape(B, (caterpillar...,)), (:, :, *))\n# endHere TensorCast.sliceview(D, (:,:,*)) = collect(eachslice(D, dims=3)) using the new eachcol & eachrow functions, but allowing more general sliceview(D, (:,*,:,*) ≈ eachslice(D, dims=(2,4)).  (In notation borrowed from JuliennedArrays.jl, see below.)Adding assert or just ! inserts explicit size checks:@pretty @reduce H[a, b] := maximum(α:2,β:2) G[α\\a, β\\b] !\n# begin\n#     @assert rem(size(G, 1), 2) == 0 \n#     @assert rem(size(G, 2), 2) == 0\n#     local fox = (2, 2, size(G, 1) ÷ 2, size(G, 2) ÷ 2)\n#     H = dropdims(maximum(\n#         permutedims(reshape(G, (fox[1], fox[3], fox[2], fox[4])), (1, 3, 2, 4)), \n#             dims=(3, 4)), dims=(3, 4))\n# endThis @pretty is really just a variant of the built-in @macroexpand1, with animal names from MacroTools.jl in place of generated symbols,  and some tidying up."
},

{
    "location": "#Checking-1",
    "page": "Readme",
    "title": "Checking",
    "category": "section",
    "text": "When writing complicated index expressions by hand, it is conventional to use different groups of letters  for indices which mean different things. If a,b,c... label some objects, while μ,ν,... are components  of their positions (in units of meters) then any expression which mixes these up is probably a mistake.  This package also can automate checks for such mistakes: @reduce!  A[α] := sum(k) B[α,k]     # memorises that A takes α, etc.\n@cast!  C[α,β] := A[α] * A[β]       # no problem: β is close to α\n@cast! D[n][β] := C[n,β]            # warning! C does not accept nThere are also macros @tensor! and @einsum! which perform the same checks,  before calling the usual @tensor / @einsum. If you need to leave index notation and return, you can insert @check! to confirm.  (The ! is because it alters a dictionary, off-stage somewhere.)@cast! D[α,_,β,_] := C[α,β]         # reshape to size(D,2) == size(D,4) == 1\nE = calculate(D)\n@check! E[n,α]                      # just the check, with no calculationThese macros are (by definition) run when your code is loaded, not during the calculation,  and thus such checks have zero speed penalty. But you can turn on explicit run-time size checks too  (and, if you wish, an error not a warning) by passing these options:@check!  size=true  throw=trueAfter this, @check!(A[α]) will insert the function check!(A, ...) which (when run) saves the range  of every distinct index name, and gives an error if it is subsequently used to indicate a dimension of different size. This is based on the complete name, thus α and α2 may have distinct ranges,  while the above slot-checking is based on the first letter.  (For now there is one global list of settings, index names, and run-time sizes.)"
},

{
    "location": "#Options-1",
    "page": "Readme",
    "title": "Options",
    "category": "section",
    "text": "As mentioned above, expressions with = write into an existing array,  while those with := do not. This is the same notation as  TensorOperations.jl and Einsum.jl.  But unlike those packages, sometimes the result of @cast is a view of the original, for instance  @cast A[i,j] := B[j,i] gives A = transpose(B). You can forbid this, and insist on a copy,  by writing |= instead. And conversely, if you expect a view, writing == will give an error if not."
},

{
    "location": "#Ways-of-slicing-1",
    "page": "Readme",
    "title": "Ways of slicing",
    "category": "section",
    "text": "The default way of slicing creates an array of views,  but if you use |= instead then you get copies: M = rand(1:99, 3,4)\n\n@cast S[k][i] := M[i,k]             # collect(eachcol(M)) ≈ [ view(M,:,k) for k=1:4 ]\n@cast S[k][i] |= M[i,k]             # [ M[:,k] for k=1:4 ]; using |= demands a copyThe default way of un-slicing is reduce(cat, ...), which creates a new array.  But there are other options, controlled by keywords after the expression:@cast A[i,k] := S[k][i]             # A = reduce(hcat, B)\n@cast A[i,k] := S[k][i]  cat        # A = hcat(B...)\n@cast A[i,k] := S[k][i]  lazy       # A = VectorOfArrays(B)\n\nsize(A) == (3, 4) # trueThe option lazy uses RecursiveArrayTools.jl to create a view of the original vectors. This would also be possible with  JuliennedArrays.jl, I may change what gets used later. Combining with cat is often much slower, but more generic. For example it will work with  Flux\'s TrackedArrays.Another kind of slices are provided by StaticArrays.jl, in which a Vector of SVectors is just a different interpretation of the same memory as a Matrix.  By another slight abuse of notation, such slices are written here as curly brackets:using StaticArrays\n\n@cast S[k]{i} == M[i,k]  i:3        # S = reinterpret(SVector{3,Int}, vec(M)) \n\n@cast R[k,i] == S[k]{i}             # such slices can be reinterpreted back again\n\nM[1,2]=42; R[2,1]==42               # all views of the original dataWhen creating such slices, their size ought to be provided, either as a literal integer or  through the types. Note that you may also write S[k]{i:3}.  For example, this function is about 100x slower if not given the value type Val(3), as the size of the SVector is then not known to the compiler:cols_slow(M::Matrix) = @cast A[j]{i} == M[i,j]  i:size(M,1)\n\ncols_fast(M::Matrix, ::Val{N}) where N = @cast A[j]{i:N} == M[i,j]\n\n@code_warntype cols_slow(M) # with complaints ::Any in red\n@code_warntype cols_fast(M, Val(3))Another potential issue is that, if you create such slices after transposing (or some other lazy transformation),  then accessing them tends to be slower. Making a copy with |= such as @cast T[i]{k:4} |= M[i,k] will  avoid this."
},

{
    "location": "#Better-broadcasting-1",
    "page": "Readme",
    "title": "Better broadcasting",
    "category": "section",
    "text": "When broadcasting and then summing over some directions, it can be faster to avoid creating the  entire array, then throwing it away. This can be done with the package  LazyArrays.jl which has a lazy BroadcastArray.  In the following example, the product V .* V\' .* V3 contains about 1GB of data,  the writing of which is avoided by giving the option lazy: using LazyArrays\nV = rand(500);\nV3 = reshape(V, 1,1,:);\n\n@time sum(V .* V\' .* V3; dims=(2,3));                 # 0.6 seconds, 950 MB\n@time @reduce W[i] := sum(j,k) V[i] * V[j] * V[k];    # about the same\n\n@time sum(BroadcastArray(*, V, V\', V3); dims=(2,3));  # 0.025 s, 5 KB\n@time @reduce W[i] := sum(j,k) V[i]*V[j]*V[k]  lazy;  # about the same Finally, the package Strided.jl can apply multi-threading to  broadcasting, and some other magic. You can enable it with the option strided, like this: using Strided # and export JULIA_NUM_THREADS = 4 before starting\nA = randn(4000,4000); \nB = similar(A);\nThreads.nthreads() == 4 # true\n\n@time B .= (A .+ A\') ./ 2;                            # 0.12 seconds\n@time @cast B[i,j] = (A[i,j] + A[j,i])/2;             # the same \n\n@time @strided B .= (A .+ A\') ./ 2;                   # 0.025 seconds\n@time @cast B[i,j] = (A[i,j] + A[j,i])/2 strided;     # the same<!–"
},

{
    "location": "#Wishlist-1",
    "page": "Readme",
    "title": "Wishlist",
    "category": "section",
    "text": "More torture-tests. This is very new, and probably has many bugs.\nBetter writing into sliced arrays? Right now @cast A[i]{j} = B[i,j] j:3 is allowed,  but A[i][j] with ordinary sub-arrays is not.\nMore compact notation? This gets messy with many indices, perahps something closer to einops\'s notation could be used without having to parse strings (try this with macro arrow(exs...) @show(exs); nothing end):Y = @arrow [X]  i j k l -n  =>  (i,k) (j,l) n   [i:2, j:3]\n\nZ = @arrow [Y / sum, i:2, j:3]  i\\k  j\\l n  =>  k l nSupport for mutating operators += and *= etc. like @einsum does. \nAbility to write shifts in this notation:@cast A[i,j] = B[i+1,j+3]     # circshift!(A, B, (1,3)) or perhaps (-1,-3)A mullet as awesome as Rich DuLaney had.–>"
},

{
    "location": "#About-1",
    "page": "Readme",
    "title": "About",
    "category": "section",
    "text": "First uploaded January 2019 as TensorSlice.jl with only the @shape macro, and later @reduce. Then I understood how to implement arbitrary broadcasting in @cast,  and this replaced the earlier implementation. <!–"
},

{
    "location": "#See-also-1",
    "page": "Readme",
    "title": "See also",
    "category": "section",
    "text": "TensorOperations.jl and Einsum.jl \n–> <!– (Image: Build Status)<img src=\"https://raw.githubusercontent.com/mcabbott/TensorCast.jl/master/as-seen-on-TV.png\" width=\"50\" height=\"40\" align=\"right\"><img src = \"https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667\" align=\"right\"> –><!– pandoc -s -o README.html  README.md –>"
},

{
    "location": "autodocs/#TensorCast.@assertsize",
    "page": "Docstrings",
    "title": "TensorCast.@assertsize",
    "category": "macro",
    "text": "@assertsize cond str\n\nLike @assert, but prints both the given string and the condition. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@cast",
    "page": "Docstrings",
    "title": "TensorCast.@cast",
    "category": "macro",
    "text": "@cast Z[i,j,...] := f(A[j,k,...])  options\n\nMacro for broadcasting, reshaping, and slicing of arrays in index notation. Understands the following things: \n\nA[i,j,k] is a three-tensor with these indices.\nB[(i,j),k] is the same thing, reshaped to a matrix. Its first axis (the bracket) is indexed  by n = i + (j-1) * N where i ∈ 1:N. This may also be written B[i\\j,k].\nC[k][i,j] is a vector of matrices.\nD[j,k]{i} is an ordinary matrix of SVectors, which may be reinterpreted from A[i,j,k].\nE[i,_,k] has two nontrivial dimensions, and size(E,2)==1. On the right hand side  (or when writing to an existing array) you may also write E[i,3,k] meaning view(E, :,3,:), or E[i,$c,j] to use a variable c. Fixing inner indices, like C[k][i,_], is not allowed.\nF[i,-j,k] means reverse(F, dims=2). \n\nThe left and right hand sides must have all the same indices.  See @reduce for a related macro which can sum over things. \n\nIf several tensors appear on the right hand side, then this represents a broadcasting operation,  and the necessary re-orientations of axes are automatically inserted. \n\nThe following actions are possible:\n\n= writes into an existing array.\n:= creates a new object... which may or may not be a view of the input:\n== insists on a view of the old object (error if impossible), and |= insists on a copy. \n\nOptions can be specified at the end (if several, separated by , i.e. options::Tuple)\n\ni:3 supplies the range of index i. Variables j:rangej and functions k:length(K) are allowed. \nassert or ! will turn on explicit dimension checks.\ncat will glue slices by things like hcat(A...) instead of reduce(hcat, A), and lazy will instead make a VectorOfArrays container. \nstrided will place @strided in front of broadcasting operations,  and use @strided permutedims(A, ...) instead of PermutedDimsArray(A, ...). \n\nStatic slices D[j,k]{i} need using StaticArrays, and to create them you should give all  slice dimensions explicitly. You may write D[k]{i:2,j:2} to specify Size(2,2) slices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@cast!",
    "page": "Docstrings",
    "title": "TensorCast.@cast!",
    "category": "macro",
    "text": "@cast! Z[i...] := A[j...] opt\n\nVariant of @cast which effectively runs @check!() on each tensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@check!",
    "page": "Docstrings",
    "title": "TensorCast.@check!",
    "category": "macro",
    "text": "@check!(A[i, j, μ, ν])\n\nAdds A to the store of known tensors, and records that it expects indices i,j,μ,ν. If it is already in the store, then instead this checks whether the present indices differ  from the saved ones. Only the first letter is examined: α and α2 are similar, as are nearby  letters β, γ3. More complicated indices like Z[(i,j), -k, _, 3] will be ignored.  This happens while parsing your source code, there is zero run-time penalty. Returns A.\n\nIn addition, with size=true option, it can insert size checks to be performed at run-time, by returning check!(A, stuff).  At the first occurrance this saves i: => size(A,1) etc., and on subsequent uses of  the same index (even on different tensors) it gives an error if the sizes do not match.  Here the whole index is used: α, β and β2 may have different ranges.  This will need to look up indices in a dictionary, which takes ... 50ns, really? \n\n@check! B[i,j] C[μ,ν] D[i] E[j]\n\nChecks several tensors, returns nothing. \n\n@check!  alpha=true  tol=3  size=false  throw=false  info  empty\n\nControls options for @check! and related macros (@shape!, @reduce!, @einsum! etc).  These are the default settings:\n\nalpha=true turns on the parse-time checking, based on index letters.\ntol=3 sets how close together letters must be: B[j,k] is not an error but B[a,b] will be. \nsize=false turns off run-time size checking.\nthrow=false means that errors are given using @error, without interrupting your program.\nempty deletes all saved letters and sizes – there is one global store for each, for now.\ninfo prints what\'s currently saved.\n\n@cast! B[i,j] := D[i] * E[j]\n@reduce! B[i,j] := sum(μ,ν) A[i,j,μ,ν] / C[μ,ν]\n\n@einsum!  B[i,j] := D[i] * E[j]\n@vielsum! B[i,j] := D[i] * E[j]\n@tensor!  B[i,j] := D[i] * E[j]\n\nVersions of the macros from this package, and from Einsum.jl and TensorOperations.jl,  which call @check! on each of their tensors, before proceeding as normal. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@einsum!",
    "page": "Docstrings",
    "title": "TensorCast.@einsum!",
    "category": "macro",
    "text": "@einsum! A[i,j] := B[i,k] * C[k,j]\n\nVariant of @einsum from package Einsum.jl,  equivalent to wrapping every tensor with @check!().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@pretty",
    "page": "Docstrings",
    "title": "TensorCast.@pretty",
    "category": "macro",
    "text": "@pretty @shape A[...] := B[...]\n\nPrints an approximately equivalent expression with the macro expanded. Compared to @macroexpand1, generated symbols are replaced with animal names, comments are deleted, module names are removed from functions, and the final expression is fed to println().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@reduce",
    "page": "Docstrings",
    "title": "TensorCast.@reduce",
    "category": "macro",
    "text": "@reduce A[i] := sum(j,k) B[i,j,k]             # A = vec(sum(B, dims=(2,3))) \n@reduce A[i] := prod(j) B[i] + ε * C[i,j]     # A = vec(prod(B .+ ε .* C, dims=2))\n@reduce A[i] = sum(j) exp( C[i,j] / D[j] )    # sum!(A, exp.(C ./ D\') )\n\nTensor reduction macro:\n\nThe reduction function can be anything which works like sum(B, dims=(1,3)),  for instance prod and maximum and Statistics.mean. \nIn-place operations Z[j] = sum(... will construct the banged version of the given function\'s name,  which must work like sum!(Z, A).\nThe tensors can be anything that @cast understands, including gluing of slices B[i,k][j]  and reshaping B[i\\j,k]. \nIndex ranges may be given afterwards (as for @cast) or inside the reduction sum(i:3, k:4). \nAll indices appearing on the right must appear either within sum(...) etc, or on the left. \n\nF = @reduce sum(i,j)  B[i] + γ * D[j]         # sum(B .+ γ .* D\')\n@reduce G[] := sum(i,j)  B[i] + γ * D[j]      # F == G[]\n\nComplete reduction to a scalar output F, or a zero-dim array G. \n\n@reduce Z[k] := sum(i,j) A[i] * B[j] * C[k]  lazy, i:N, j:N, k:N\n\nThe option lazy replaces the broadcast expression with a BroadcastArray,  to avoid materializeing the entire array (here size N^3) before summing. \n\nThe option strided will place @strided in front of the broadcasting operation.  You need using Strided for this to work. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@reduce!",
    "page": "Docstrings",
    "title": "TensorCast.@reduce!",
    "category": "macro",
    "text": "@reduce! Z[j] := sum(i,k) A[i,j,k]\n\nVariant of @reduce which effectively runs @check!() on each tensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@tensor!",
    "page": "Docstrings",
    "title": "TensorCast.@tensor!",
    "category": "macro",
    "text": "@tensor! A[i,j] := B[i,k] * C[k,j]\n\nVariant of @tensor from package TensorOperations.jl,  equivalent to wrapping every tensor with @check!().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.@vielsum!",
    "page": "Docstrings",
    "title": "TensorCast.@vielsum!",
    "category": "macro",
    "text": "@vielsum! A[i,j] := B[i,k] * C[k,j]\n\nVariant of @vielsum from package Einsum.jl,  equivalent to wrapping every tensor with @check!().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.check!",
    "page": "Docstrings",
    "title": "TensorCast.check!",
    "category": "function",
    "text": "check!(A, (:i,:j), \"A[i,j]\", (mod=..., src=...))\n\nPerforms run-time size checking, on behalf of the @check! macro, returns A.  The string and tuple are just for the error message. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.check_one",
    "page": "Docstrings",
    "title": "TensorCast.check_one",
    "category": "function",
    "text": "check_one(A[i,j,k], (mod=Module, src=...))\n\nDoes the work of @check!, on one index expression,  returning A or check!(A,...) according to global flags. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.checkrepeats",
    "page": "Docstrings",
    "title": "TensorCast.checkrepeats",
    "category": "function",
    "text": "checkrepeats(flat)\n\nThrows an error if there are repeated indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.colonise!",
    "page": "Docstrings",
    "title": "TensorCast.colonise!",
    "category": "function",
    "text": "colonise!(isz, slist)\n\nThis aims to simplify \"isz\" which is going to be used reshape(A, isz).  Partly for cosmetic reasons... some of which are now caught elsewhere. \n\nBut partly because slist may contain one :, and isz may try to multiply that by sz[d],  correct answer is : again. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.glue",
    "page": "Docstrings",
    "title": "TensorCast.glue",
    "category": "function",
    "text": "glue!(B, A, code)\nglue(A, code) = glue!(Array{T}(...), A, code)\n\nCopy the contents of an array of arrays into one larger array,  un-doing sliceview / slicecopy with the same code. Also called stack or align elsewhere. \n\ncat_glue(A, code)\nred_glue(A, code)\n\nThe same result, but calling either things like hcat(A...) or things like reduce(hcat, A).  The code must be sorted like (:,:,:,*,*), except that (*,:) is allowed. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.glue!",
    "page": "Docstrings",
    "title": "TensorCast.glue!",
    "category": "function",
    "text": "glue!(B, A, code)\nglue(A, code) = glue!(Array{T}(...), A, code)\n\nCopy the contents of an array of arrays into one larger array,  un-doing sliceview / slicecopy with the same code. Also called stack or align elsewhere. \n\ncat_glue(A, code)\nred_glue(A, code)\n\nThe same result, but calling either things like hcat(A...) or things like reduce(hcat, A).  The code must be sorted like (:,:,:,*,*), except that (*,:) is allowed. \n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.inputex",
    "page": "Docstrings",
    "title": "TensorCast.inputex",
    "category": "function",
    "text": "inputex(:( A[i,j][k] ), canon, flags, store, icheck, where)\n\nFigures out all the steps needed to transform the given tensor to a boring one,  aligned with canonical, and returns the necessary expression.  Write sizes which can be read from A into store, and necessary reshapes in terms of sz[d].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.makelazy",
    "page": "Docstrings",
    "title": "TensorCast.makelazy",
    "category": "function",
    "text": "makelazy(bc)\n\nTakes the result of Broadcast.__dot__() and converts it to have a LazyArrays.BroadcastArray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.oddunique",
    "page": "Docstrings",
    "title": "TensorCast.oddunique",
    "category": "function",
    "text": "oddunique(negated)\n\nReturns a list in which anything repeated evenly many times has been removed, then unique. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.orient",
    "page": "Docstrings",
    "title": "TensorCast.orient",
    "category": "function",
    "text": "B = orient(A, code)\n\nReshapes A such that its nontrivial axes lie in the directions where code contains a :, by inserting axes on which size(B, d) == 1 as needed. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.outputinplace",
    "page": "Docstrings",
    "title": "TensorCast.outputinplace",
    "category": "function",
    "text": "outputinplace(newright, outUZ, redfun, canonsize, canon, flags, store, nameZ)\n\nFor the case of = this figures out how to write RHS into LHS, in one of three ways:\n\nreduction sum!(Z, newright)\nbroadcasting @. Z[...] = newright\nneither, copyto!(Z, newright) \n\nNo longer attempts to write permutedims!(Z, A, ...), now just copyto!(Z, PermutedDimsArray(A, ...)). Doesn\'t really need so many arguments...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.outputnew",
    "page": "Docstrings",
    "title": "TensorCast.outputnew",
    "category": "function",
    "text": " outputnew(newright, outUZ, redfun, canonsize, canon, flags, store)\n\nFor the case of :=, this constructs the expression to do reduction if needed,  and slicing/reshaping/reversing for LHS. \n\noutUZ = (redUind, negV, codeW, indW, sizeX, getY, numY, sizeZ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.parse!",
    "page": "Docstrings",
    "title": "TensorCast.parse!",
    "category": "function",
    "text": "flat, getafix, putsz, negated = parse!(sdict, A, outer, inner)\n\nUse this for A[outer...][inner...]. \n\nflat is a list of symbols, naming the indices, in order. \nnegated is the subset which had - in front. \ngetafix is the thing for making views of given input or target array, : in non-fixed directions. \nputsz is a tuple of sz[n] and products, which you want for reshaping to the very final array;  the numbers n refer to position in flat. \nsdict::SizeDict ends up with sdict.dict[:i] = an expr for length of this index. To avoid saving these (if you don\'t have A yet) set A = nothing.\nparse!(sdict, A, outer, reduce_inner, true)\n\nThis is for A[outer...] = sum(inner...) ... LHS, which are allowed to have sum(a:2, ...) ranges.  The allowranges flag also disables the use of size(first(A), 2) etc, to disable size(A,2) set A = nothing again. \n\nparse!(sdict, nothing, [], rex, true, flag_vector)\n\nFor dimensions & annotations.  Will look for flags because it was given something to push them into.  You should now do this first, so that sdict is most likely to have these (neater) entries.  They are added using savesize!(sdict,...) which now puts later sizes into list of checks. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.readleft",
    "page": "Docstrings",
    "title": "TensorCast.readleft",
    "category": "function",
    "text": "canon, outUZ, nameZ, checkZ = readleft(left, redind, flags, store, icheck, where)\n\noutUZ = (redUind, negV, codeW, sizeX, getY, numY, sizeZ)  are things passed to output construction. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.simplicode",
    "page": "Docstrings",
    "title": "TensorCast.simplicode",
    "category": "function",
    "text": "p, (bef, aft) = simplicode(p, (bef, aft))\n\nThe idea here is to absorb permutedims into alterations of the slicing / gluing codes.  Done as an optimisation pass, after figuring all of those out, before building expression. \n\nIf we also have reversal or shift, those dimensions will need to be updated. Maybe then don\'t bother. \nIf there is a reduction, then it\'s totally worth bothering! You have more freedom than with slicing.\nIt will also tend to break agreement between canonical sizes & size of actual array at any stage.  This may matter for in-place case. \n\nFor now, only apply this when those are not in use. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.sizeinfer",
    "page": "Docstrings",
    "title": "TensorCast.sizeinfer",
    "category": "function",
    "text": "sizeinfer(store, icannon, leaveone=true)\n\nThis is the point of SizeDict.  The goal is to produce a canonical vector of sizes, corresponding to vector of symbols icannon.  If these sizes are known, easy!\n\nBut for unknown ones, we do a second pass, looking for entries in sizedict like [:i, :j] which come from tuples of indices, for which we know the product of their dimensions. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.slicecopy",
    "page": "Docstrings",
    "title": "TensorCast.slicecopy",
    "category": "function",
    "text": "sliceview(A, code)\nslicecopy(A, code)\n\nSlice array A according to code, a tuple of length ndims(A),  in which : indicates a dimension of the slices, and * a dimension separating them.  For example if code = (:,*,:) then slices are either view(A, :,i,:)  or A[:,i,:] with i=1:size(A,2). \n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.sliceview",
    "page": "Docstrings",
    "title": "TensorCast.sliceview",
    "category": "function",
    "text": "sliceview(A, code)\nslicecopy(A, code)\n\nSlice array A according to code, a tuple of length ndims(A),  in which : indicates a dimension of the slices, and * a dimension separating them.  For example if code = (:,*,:) then slices are either view(A, :,i,:)  or A[:,i,:] with i=1:size(A,2). \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.stripminus!",
    "page": "Docstrings",
    "title": "TensorCast.stripminus!",
    "category": "function",
    "text": "stripminus(negated, i)\n\nFor any index, or vector of indices, or vector of indices containing tuples / backslash combos,  this pushes every letter with a minus in front into negated list.\n\nIt returns an index, or a tidied-up vector of indices, in which tuples etc have become vectors.   \n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorCast.walker",
    "page": "Docstrings",
    "title": "TensorCast.walker",
    "category": "function",
    "text": "walker(outex, x, canon, flags, store, icheck, where)\n\nCalled by MacroTools.prewalk on RHS, finds tensors & pushes :( sym = inputex(this) ) into outex.args, and then replaces them with sym.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TensorCast.@assertsizeTensorCast.@castTensorCast.@cast!TensorCast.@check!TensorCast.@einsum!TensorCast.@prettyTensorCast.@reduceTensorCast.@reduce!TensorCast.@tensor!TensorCast.@vielsum!TensorCast.CheckOptionsTensorCast.ReverseTensorCast.ShuffleTensorCast.SizeDictTensorCast.StaticArraysTensorCast.TensorCastTensorCast.VTensorCast.__init__TensorCast._check!TensorCast._einsum!TensorCast._macroTensorCast._tensor!TensorCast.cat_glueTensorCast.check!TensorCast.check_errTensorCast.check_oneTensorCast.check_optionsTensorCast.checkrepeatsTensorCast.colonise!TensorCast.copy_glueTensorCast.countcolonsTensorCast.decoloniseTensorCast.evalTensorCast.findcheckTensorCast.flag_listTensorCast.glueTensorCast.glue!TensorCast.gluecodecheckTensorCast.gluedsizeTensorCast.includeTensorCast.index_storeTensorCast.inputexTensorCast.iscodesortedTensorCast.isconstantTensorCast.makelazyTensorCast.odduniqueTensorCast.orientTensorCast.outputinplaceTensorCast.outputnewTensorCast.packagecheckTensorCast.packageerrorTensorCast.parse!TensorCast.prettyTensorCast.push_or_append!TensorCast.readleftTensorCast.recursive_glueTensorCast.red_glueTensorCast.savesize!TensorCast.simplicodeTensorCast.size_storeTensorCast.sizeinferTensorCast.slicecopyTensorCast.sliceviewTensorCast.sorted_starcodeTensorCast.static_glueTensorCast.static_sliceTensorCast.stripminus!TensorCast.szwrapTensorCast.walker"
},

]}
