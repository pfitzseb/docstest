var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Tensors-1",
    "page": "Home",
    "title": "Tensors",
    "category": "section",
    "text": "Efficient computations with symmetric and non-symmetric tensors in Julia."
},

{
    "location": "#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": "This Julia package provides fast operations with symmetric and non-symmetric tensors of order 1, 2 and 4. The Tensors are allocated on the stack which means that there is no need to preallocate output results for performance. Unicode infix operators are provided such that the tensor expression in the source code is similar to the one written with mathematical notation. When possible, symmetry of tensors is exploited for better performance. Supports Automatic Differentiation to easily compute first and second order derivatives of tensorial functions."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Tensors is a registered package and so can be installed viaPkg.add(\"Tensors\")"
},

{
    "location": "#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"man/constructing_tensors.md\",\n    \"man/indexing.md\",\n    \"man/binary_operators.md\",\n    \"man/other_operators.md\",\n    \"man/storing_tensors.md\",\n    \"man/automatic_differentiation.md\",\n]\nDepth = 1"
},

{
    "location": "#Benchmarks-1",
    "page": "Home",
    "title": "Benchmarks",
    "category": "section",
    "text": "Pages = [\n    \"benchmarks.md\"]"
},

{
    "location": "#Demos-1",
    "page": "Home",
    "title": "Demos",
    "category": "section",
    "text": "Pages = [\n    \"demos.md\"]\nDepth = 1"
},

{
    "location": "man/constructing_tensors/#",
    "page": "Constructing tensors",
    "title": "Constructing tensors",
    "category": "page",
    "text": "DocTestSetup = quote\n    using Random\n    Random.seed!(1234)\n    using Tensors\nend"
},

{
    "location": "man/constructing_tensors/#Tensors.Tensor",
    "page": "Constructing tensors",
    "title": "Tensors.Tensor",
    "category": "type",
    "text": "Tensor{order,dim,T<:Real}\n\nTensor type supported for order ∈ (1,2,4) and dim ∈ (1,2,3).\n\nExamples\n\njulia> Tensor{1,3,Float64}((1.0, 2.0, 3.0))\n3-element Tensor{1,3,Float64,3}:\n 1.0\n 2.0\n 3.0\n\n\n\n\n\n"
},

{
    "location": "man/constructing_tensors/#Tensors.SymmetricTensor",
    "page": "Constructing tensors",
    "title": "Tensors.SymmetricTensor",
    "category": "type",
    "text": "SymmetricTensor{order,dim,T<:Real}\n\nSymmetric tensor type supported for order ∈ (2,4) and dim ∈ (1,2,3). SymmetricTensor{4} is a minor symmetric tensor, such that A[i,j,k,l] == A[j,i,k,l] and A[i,j,k,l] == A[i,j,l,k].\n\nExamples\n\njulia> SymmetricTensor{2,2,Float64}((1.0, 2.0, 3.0))\n2×2 SymmetricTensor{2,2,Float64,3}:\n 1.0  2.0\n 2.0  3.0\n\n\n\n\n\n"
},

{
    "location": "man/constructing_tensors/#Constructing-tensors-1",
    "page": "Constructing tensors",
    "title": "Constructing tensors",
    "category": "section",
    "text": "Tensors can be created in multiple ways but they usually include running a function on tensor types of which there are two kinds, Tensor{order, dim, T} for non-symmetric tensors and SymmetricTensor{order, dim, T} for symmetric tensors. The parameter order is an integer of value 1, 2 or 4, excluding 1 for symmetric tensors. The second parameter dim is an integer which corresponds to the dimension of the tensor and can be 1, 2 or 3. The last parameter T is the number type that the tensors contain, i.e. Float64 or Float32.Tensors.Tensor\nTensors.SymmetricTensor"
},

{
    "location": "man/constructing_tensors/#zero_tensors-1",
    "page": "Constructing tensors",
    "title": "Zero tensors",
    "category": "section",
    "text": "A tensor with only zeros is created using the function zero, applied to the type of tensor that should be created:julia> zero(Tensor{1, 2})\n2-element Tensor{1,2,Float64,2}:\n 0.0\n 0.0By default, a tensor of Float64s is created, but by explicitly giving the T parameter this can be changed:julia> zero(SymmetricTensor{4, 2, Float32})\n2×2×2×2 SymmetricTensor{4,2,Float32,9}:\n[:, :, 1, 1] =\n 0.0  0.0\n 0.0  0.0\n\n[:, :, 2, 1] =\n 0.0  0.0\n 0.0  0.0\n\n[:, :, 1, 2] =\n 0.0  0.0\n 0.0  0.0\n\n[:, :, 2, 2] =\n 0.0  0.0\n 0.0  0.0A Julia Array with zeroed tensors can be created with zeros, with the tensor type and dimensions of the array as arguments:julia> zeros(Tensor{2,2}, 2, 3)\n2×3 Array{Tensor{2,2,Float64,4},2}:\n [0.0 0.0; 0.0 0.0]  [0.0 0.0; 0.0 0.0]  [0.0 0.0; 0.0 0.0]\n [0.0 0.0; 0.0 0.0]  [0.0 0.0; 0.0 0.0]  [0.0 0.0; 0.0 0.0]"
},

{
    "location": "man/constructing_tensors/#Constant-tensors-1",
    "page": "Constructing tensors",
    "title": "Constant tensors",
    "category": "section",
    "text": "A tensor filled with ones is created using the function ones, applied to the type of tensor that should be created:julia> ones(Tensor{2,2})\n2×2 Tensor{2,2,Float64,4}:\n 1.0  1.0\n 1.0  1.0By default, a tensor of Float64s is created, but by explicitly giving the T parameter this can be changed, like for zero.note: Note\nThe function ones has double meaning: it can create a tensor filled with ones (as described above) or create a Julia Array with identity tensors. Thus, to create an Array with tensors filled with ones, instead use array comprehension:julia> [ones(Tensor{2,2}) for i in 1:2, j in 1:3]\n2×3 Array{Tensor{2,2,Float64,4},2}:\n [1.0 1.0; 1.0 1.0]  [1.0 1.0; 1.0 1.0]  [1.0 1.0; 1.0 1.0]\n [1.0 1.0; 1.0 1.0]  [1.0 1.0; 1.0 1.0]  [1.0 1.0; 1.0 1.0]"
},

{
    "location": "man/constructing_tensors/#Random-tensors-1",
    "page": "Constructing tensors",
    "title": "Random tensors",
    "category": "section",
    "text": "A tensor with random numbers is created using the function rand, applied to the type of tensor that should be created:julia> rand(Tensor{2, 3})\n3×3 Tensor{2,3,Float64,9}:\n 0.590845  0.460085  0.200586\n 0.766797  0.794026  0.298614\n 0.566237  0.854147  0.246837By specifying the type, T, a tensor of different type can be obtained:julia> rand(SymmetricTensor{2,3,Float32})\n3×3 SymmetricTensor{2,3,Float32,6}:\n 0.0107703  0.305865  0.2082\n 0.305865   0.405684  0.257278\n 0.2082     0.257278  0.958491"
},

{
    "location": "man/constructing_tensors/#identity_tensors-1",
    "page": "Constructing tensors",
    "title": "Identity tensors",
    "category": "section",
    "text": "Identity tensors can be created for orders 2 and 4. The components of the second order identity tensor mathbfI are defined as I_ij = delta_ij, where delta_ij is the Kronecker delta. The fourth order identity tensor mathsfI is the resulting tensor from taking the derivative of a second order tensor mathbfA with itself:mathsfI = fracpartial mathbfApartial mathbfA Leftrightarrow I_ijkl = fracpartial A_ijpartial A_kl = delta_ik delta_jlThe symmetric fourth order tensor, mathsfI^textsym, is the resulting tensor from taking the derivative of a symmetric second order tensor mathbfA^textsym with itself:mathsfI^textsym = fracpartial mathbfA^textsympartial mathbfA^textsym Leftrightarrow I^textsym_ijkl = fracpartial A^textsym_ijpartial A^textsym_kl = frac12 (delta_ik delta_jl + delta_il delta_jk)Identity tensors are created using the function one, applied to the type of tensor that should be created:julia> one(SymmetricTensor{2, 2})\n2×2 SymmetricTensor{2,2,Float64,3}:\n 1.0  0.0\n 0.0  1.0A Julia Array with identity tensors can be created with ones, with the tensor type and dimensions of the array as arguments:julia> ones(Tensor{2,2}, 2, 2)\n2×2 Array{Tensor{2,2,Float64,4},2}:\n [1.0 0.0; 0.0 1.0]  [1.0 0.0; 0.0 1.0]\n [1.0 0.0; 0.0 1.0]  [1.0 0.0; 0.0 1.0]"
},

{
    "location": "man/constructing_tensors/#Tensors.basevec",
    "page": "Constructing tensors",
    "title": "Tensors.basevec",
    "category": "function",
    "text": "basevec(::Type{Vec{dim, T}})\nbasevec(::Type{Vec{dim, T}}, i)\nbasevec(::Vec{dim, T})\nbasevec(::Vec{dim, T}, i)\n\nReturn a tuple with the base vectors corresponding to the dimension dim and type T. An optional integer i can be used to extract the i:th base vector. The alias eᵢ can also be used, written e\\_i<TAB>.\n\nExamples\n\njulia> eᵢ(Vec{2, Float64})\n([1.0, 0.0], [0.0, 1.0])\n\njulia> eᵢ(Vec{2, Float64}, 2)\n2-element Tensor{1,2,Float64,2}:\n 0.0\n 1.0\n\n\n\n\n\n"
},

{
    "location": "man/constructing_tensors/#Base-vectors-1",
    "page": "Constructing tensors",
    "title": "Base vectors",
    "category": "section",
    "text": "basevec"
},

{
    "location": "man/constructing_tensors/#From-arrays-/-tuples-1",
    "page": "Constructing tensors",
    "title": "From arrays / tuples",
    "category": "section",
    "text": "Tensors can also be created from a tuple or an array with the same number of elements as the number of independent indices in the tensor. For example, a first order tensor (vector) in two dimensions is here created from a vector of length two:julia> Tensor{1,2}([1.0,2.0])\n2-element Tensor{1,2,Float64,2}:\n 1.0\n 2.0Below, a second order symmetric tensor in two dimensions is created from a tuple. Since the number of independent indices in this tensor is three, the length of the tuple is also three. For symmetric tensors, the order of the numbers in the input tuple is column by column, starting at the diagonal.julia> SymmetricTensor{2,2}((1.0,2.0,3.0))\n2×2 SymmetricTensor{2,2,Float64,3}:\n 1.0  2.0\n 2.0  3.0"
},

{
    "location": "man/constructing_tensors/#function_index-1",
    "page": "Constructing tensors",
    "title": "From a function",
    "category": "section",
    "text": "A tensor can be created from a function f(indices...) -> v which maps a set of indices to a value. The number of arguments of the function should be equal to the order of the tensor.julia> SymmetricTensor{2,2,Float64}((i,j) -> i + j)\n2×2 SymmetricTensor{2,2,Float64,3}:\n 2.0  3.0\n 3.0  4.0For symmetric tensors, the function is only called for the lower triangular part."
},

{
    "location": "man/constructing_tensors/#Diagonal-tensors-1",
    "page": "Constructing tensors",
    "title": "Diagonal tensors",
    "category": "section",
    "text": "A diagonal second order tensor can be created by either giving a number or a vector that should appear on the diagonal:julia> diagm(Tensor{2,2}, 2.0)\n2×2 Tensor{2,2,Float64,4}:\n 2.0  0.0\n 0.0  2.0\n\njulia> diagm(SymmetricTensor{2,3}, [1.0, 2.0, 3.0])\n3×3 SymmetricTensor{2,3,Float64,6}:\n 1.0  0.0  0.0\n 0.0  2.0  0.0\n 0.0  0.0  3.0"
},

{
    "location": "man/constructing_tensors/#Converting-to-tensors-1",
    "page": "Constructing tensors",
    "title": "Converting to tensors",
    "category": "section",
    "text": "Sometimes it is necessary to convert between standard Julia Array\'s and Tensor\'s. When the number type is a bits type (like for floats or integers) this is conveniently done by the reinterpret function. For example, a 2×5 Julia Array can be translated to a vector of Vec{2} with the following codejulia> data = rand(2, 5)\n2×5 Array{Float64,2}:\n 0.590845  0.566237  0.794026  0.200586  0.246837\n 0.766797  0.460085  0.854147  0.298614  0.579672\n\njulia> tensor_data = reinterpret(Vec{2, Float64}, vec(data))\n5-element reinterpret(Tensor{1,2,Float64,2}, ::Array{Float64,1}):\n [0.590845, 0.766797]\n [0.566237, 0.460085]\n [0.794026, 0.854147]\n [0.200586, 0.298614]\n [0.246837, 0.579672]The data can also be reinterpreted back to a Julia Arrayjulia> data = reshape(reinterpret(Float64, tensor_data), (2, 5))\n2×5 reshape(reinterpret(Float64, reinterpret(Tensor{1,2,Float64,2}, ::Array{Float64,1})), 2, 5) with eltype Float64:\n 0.590845  0.566237  0.794026  0.200586  0.246837\n 0.766797  0.460085  0.854147  0.298614  0.579672"
},

{
    "location": "man/indexing/#",
    "page": "Indexing",
    "title": "Indexing",
    "category": "page",
    "text": "DocTestSetup = quote\n    using Random\n    Random.seed!(1234)\n    using Tensors\nend"
},

{
    "location": "man/indexing/#Indexing-1",
    "page": "Indexing",
    "title": "Indexing",
    "category": "section",
    "text": "Indexing into a (Symmetric)Tensor{dim, order} is performed like for an Array of dimension order.julia> A = rand(Tensor{2, 2});\n\njulia> A[1, 2]\n0.5662374165061859\n\njulia> B = rand(SymmetricTensor{4, 2});\n\njulia> B[1, 2, 1, 2]\n0.24683718661000897Slicing will produce a Tensor of lower order.julia> A = rand(Tensor{2, 2});\n\njulia> A[:, 1]\n2-element Tensor{1,2,Float64,2}:\n 0.5908446386657102\n 0.7667970365022592Since Tensors are immutable there is no setindex! function defined on them. Instead, use the functionality to create tensors from functions as described here. As an example, this sets the [1,2] index on a tensor to one and the rest to zero:julia> Tensor{2, 2}((i,j) -> i == 1 && j == 2 ? 1.0 : 0.0)\n2×2 Tensor{2,2,Float64,4}:\n 0.0  1.0\n 0.0  0.0For symmetric tensors, note that you should only set the lower triangular part of the tensor:julia> SymmetricTensor{2, 2}((i,j) -> i == 1 && j == 2 ? 1.0 : 0.0)\n2×2 SymmetricTensor{2,2,Float64,3}:\n 0.0  0.0\n 0.0  0.0\n\njulia> SymmetricTensor{2, 2}((i,j) -> i == 2 && j == 1 ? 1.0 : 0.0)\n2×2 SymmetricTensor{2,2,Float64,3}:\n 0.0  1.0\n 1.0  0.0"
},

{
    "location": "man/binary_operators/#",
    "page": "Binary Operations",
    "title": "Binary Operations",
    "category": "page",
    "text": "DocTestSetup = quote\n    using Random\n    Random.seed!(1234)\n    using Tensors\nend"
},

{
    "location": "man/binary_operators/#Binary-Operations-1",
    "page": "Binary Operations",
    "title": "Binary Operations",
    "category": "section",
    "text": "Pages = [\"binary_operators.md\"]"
},

{
    "location": "man/binary_operators/#LinearAlgebra.dot",
    "page": "Binary Operations",
    "title": "LinearAlgebra.dot",
    "category": "function",
    "text": "dot(::Vec, ::Vec)\ndot(::Vec, ::SecondOrderTensor)\ndot(::SecondOrderTensor, ::Vec)\ndot(::SecondOrderTensor, ::SecondOrderTensor)\n\nComputes the dot product (single contraction) between two tensors. The symbol ⋅, written \\cdot, is overloaded for single contraction.\n\nExamples\n\njulia> A = rand(Tensor{2, 2})\n2×2 Tensor{2,2,Float64,4}:\n 0.590845  0.566237\n 0.766797  0.460085\n\njulia> B = rand(Tensor{1, 2})\n2-element Tensor{1,2,Float64,2}:\n 0.7940257103317943\n 0.8541465903790502\n\njulia> dot(A, B)\n2-element Tensor{1,2,Float64,2}:\n 0.9527955925660736\n 1.0018368881367576\n\njulia> A ⋅ B\n2-element Tensor{1,2,Float64,2}:\n 0.9527955925660736\n 1.0018368881367576\n\n\n\n\n\ndot(::SymmetricTensor{2})\n\nCompute the dot product of a symmetric second order tensor with itself. Return a SymmetricTensor.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2,3})\n3×3 SymmetricTensor{2,3,Float64,6}:\n 0.590845  0.766797  0.566237\n 0.766797  0.460085  0.794026\n 0.566237  0.794026  0.854147\n\njulia> dot(A)\n3×3 SymmetricTensor{2,3,Float64,6}:\n 1.2577   1.25546  1.42706\n 1.25546  1.43013  1.47772\n 1.42706  1.47772  1.68067\n\n\n\n\n\n"
},

{
    "location": "man/binary_operators/#Dot-product-(single-contraction)-1",
    "page": "Binary Operations",
    "title": "Dot product (single contraction)",
    "category": "section",
    "text": "The dot product (or single contraction) between a tensor of order n and a tensor of order m is a tensor of order m + n - 2. For example, single contraction between two vectors mathbfb and mathbfc can be written as:a = mathbfb cdot mathbfc Leftrightarrow a = b_i c_iand single contraction between a second order tensor mathbfB and a vector mathbfc:mathbfa = mathbfB cdot mathbfc Leftrightarrow a_i = B_ij c_jdot"
},

{
    "location": "man/binary_operators/#Tensors.dcontract",
    "page": "Binary Operations",
    "title": "Tensors.dcontract",
    "category": "function",
    "text": "dcontract(::SecondOrderTensor, ::SecondOrderTensor)\ndcontract(::SecondOrderTensor, ::FourthOrderTensor)\ndcontract(::FourthOrderTensor, ::SecondOrderTensor)\ndcontract(::FourthOrderTensor, ::FourthOrderTensor)\n\nCompute the double contraction between two tensors. The symbol ⊡, written \\boxdot, is overloaded for double contraction. The reason : is not used is because it does not have the same precedence as multiplication.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2, 2});\n\njulia> B = rand(SymmetricTensor{2, 2});\n\njulia> dcontract(A,B)\n1.9732018397544984\n\njulia> A ⊡ B\n1.9732018397544984\n\n\n\n\n\n"
},

{
    "location": "man/binary_operators/#Double-contraction-1",
    "page": "Binary Operations",
    "title": "Double contraction",
    "category": "section",
    "text": "A double contraction between two tensors contracts the two most inner indices. The result of a double contraction between a tensor of order n and a tensor of order m is a tensor of order m + n - 4. For example, double contraction between two second order tensors mathbfB and mathbfC can be written as:a = mathbfB  mathbfC Leftrightarrow a = B_ij C_ijand double contraction between a fourth order tensor mathsfB and a second order tensor mathbfC:mathbfA = mathsfB  mathbfC Leftrightarrow A_ij = B_ijkl C_kldcontract"
},

{
    "location": "man/binary_operators/#Tensors.otimes",
    "page": "Binary Operations",
    "title": "Tensors.otimes",
    "category": "function",
    "text": "otimes(::Vec, ::Vec)\notimes(::SecondOrderTensor, ::SecondOrderTensor)\n\nCompute the open product between two tensors. The symbol ⊗, written \\otimes, is overloaded for tensor products.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2, 2});\n\njulia> B = rand(SymmetricTensor{2, 2});\n\njulia> A ⊗ B\n2×2×2×2 SymmetricTensor{4,2,Float64,9}:\n[:, :, 1, 1] =\n 0.271839  0.352792\n 0.352792  0.260518\n\n[:, :, 2, 1] =\n 0.469146  0.608857\n 0.608857  0.449607\n\n[:, :, 1, 2] =\n 0.469146  0.608857\n 0.608857  0.449607\n\n[:, :, 2, 2] =\n 0.504668  0.654957\n 0.654957  0.48365\n\n\n\n\n\notimes(::Vec)\n\nCompute the open product of a vector with itself. Return a SymmetricTensor.\n\nExamples\n\njulia> A = rand(Vec{2})\n2-element Tensor{1,2,Float64,2}:\n 0.5908446386657102\n 0.7667970365022592\n\njulia> otimes(A)\n2×2 SymmetricTensor{2,2,Float64,3}:\n 0.349097  0.453058\n 0.453058  0.587978\n\n\n\n\n\n"
},

{
    "location": "man/binary_operators/#Tensor-product-(open-product)-1",
    "page": "Binary Operations",
    "title": "Tensor product (open product)",
    "category": "section",
    "text": "The tensor product (or open product) between a tensor of order n and a tensor of order m is a tensor of order m + n.  For example, open product between two vectors mathbfb and mathbfc can be written as:mathbfA = mathbfb otimes mathbfc Leftrightarrow A_ij = b_i c_jand open product between two second order tensors mathbfB and mathbfC:mathsfA = mathbfB otimes mathbfC Leftrightarrow A_ijkl = B_ij C_klotimes"
},

{
    "location": "man/other_operators/#",
    "page": "Other operators",
    "title": "Other operators",
    "category": "page",
    "text": "DocTestSetup = quote\n    using Random\n    Random.seed!(1234)\n    using Tensors\nend"
},

{
    "location": "man/other_operators/#Other-operators-1",
    "page": "Other operators",
    "title": "Other operators",
    "category": "section",
    "text": "Pages = [\"other_operators.md\"]"
},

{
    "location": "man/other_operators/#Tensors.tdot",
    "page": "Other operators",
    "title": "Tensors.tdot",
    "category": "function",
    "text": "tdot(::SecondOrderTensor)\n\nCompute the transpose-dot product of a second order tensor with itself. Return a SymmetricTensor.\n\nExamples\n\njulia> A = rand(Tensor{2,3})\n3×3 Tensor{2,3,Float64,9}:\n 0.590845  0.460085  0.200586\n 0.766797  0.794026  0.298614\n 0.566237  0.854147  0.246837\n\njulia> tdot(A)\n3×3 SymmetricTensor{2,3,Float64,6}:\n 1.2577   1.36435   0.48726\n 1.36435  1.57172   0.540229\n 0.48726  0.540229  0.190334\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Tensors.dott",
    "page": "Other operators",
    "title": "Tensors.dott",
    "category": "function",
    "text": "dott(::SecondOrderTensor)\n\nCompute the dot-transpose product of a second order tensor with itself. Return a SymmetricTensor.\n\nExamples\n\njulia> A = rand(Tensor{2,3})\n3×3 Tensor{2,3,Float64,9}:\n 0.590845  0.460085  0.200586\n 0.766797  0.794026  0.298614\n 0.566237  0.854147  0.246837\n\njulia> dott(A)\n3×3 SymmetricTensor{2,3,Float64,6}:\n 0.601011  0.878275  0.777051\n 0.878275  1.30763   1.18611\n 0.777051  1.18611   1.11112\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Transpose-dot-1",
    "page": "Other operators",
    "title": "Transpose-dot",
    "category": "section",
    "text": "The dot product between the transpose of a tensor with itself. Results in a symmetric tensor.mathbfA = mathbfB^textT cdot mathbfB Leftrightarrow A_ij = B_ki^textT B_kj = B_ik B_kjmathbfA = mathbfB cdot mathbfB^textT Leftrightarrow A_ij = B_ik B_jk^textT = B_ik B_kjTensors.tdot\nTensors.dott"
},

{
    "location": "man/other_operators/#LinearAlgebra.norm",
    "page": "Other operators",
    "title": "LinearAlgebra.norm",
    "category": "function",
    "text": "norm(::Vec)\nnorm(::SecondOrderTensor)\nnorm(::FourthOrderTensor)\n\nComputes the norm of a tensor.\n\nExamples\n\njulia> A = rand(Tensor{2,3})\n3×3 Tensor{2,3,Float64,9}:\n 0.590845  0.460085  0.200586\n 0.766797  0.794026  0.298614\n 0.566237  0.854147  0.246837\n\njulia> norm(A)\n1.7377443667834924\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Norm-1",
    "page": "Other operators",
    "title": "Norm",
    "category": "section",
    "text": "The (2)-norm of a tensor is defined for a vector, second order tensor and fourth order tensor asmathbfa = sqrtmathbfa cdot mathbfa Leftrightarrow a_i = sqrta_i a_imathbfA = sqrtmathbfA  mathbfA Leftrightarrow A_ij = sqrtA_ij A_ijmathsfA = sqrtmathsfA  mathsfA Leftrightarrow A_ijkl = sqrtA_ijkl A_ijklTensors.norm"
},

{
    "location": "man/other_operators/#LinearAlgebra.tr",
    "page": "Other operators",
    "title": "LinearAlgebra.tr",
    "category": "function",
    "text": "tr(::SecondOrderTensor)\n\nComputes the trace of a second order tensor.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2,3})\n3×3 SymmetricTensor{2,3,Float64,6}:\n 0.590845  0.766797  0.566237\n 0.766797  0.460085  0.794026\n 0.566237  0.794026  0.854147\n\njulia> tr(A)\n1.9050765715072775\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Trace-1",
    "page": "Other operators",
    "title": "Trace",
    "category": "section",
    "text": "The trace for a second order tensor is defined as the sum of the diagonal elements. This can be written astexttr(mathbfA) = mathbfI  mathbfA Leftrightarrow texttr(A_ij) = A_iiTensors.tr"
},

{
    "location": "man/other_operators/#LinearAlgebra.det",
    "page": "Other operators",
    "title": "LinearAlgebra.det",
    "category": "function",
    "text": "det(::SecondOrderTensor)\n\nComputes the determinant of a second order tensor.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2,3})\n3×3 SymmetricTensor{2,3,Float64,6}:\n 0.590845  0.766797  0.566237\n 0.766797  0.460085  0.794026\n 0.566237  0.794026  0.854147\n\njulia> det(A)\n-0.1005427219925894\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Determinant-1",
    "page": "Other operators",
    "title": "Determinant",
    "category": "section",
    "text": "Determinant for a second order tensor.Tensors.det"
},

{
    "location": "man/other_operators/#Base.inv",
    "page": "Other operators",
    "title": "Base.inv",
    "category": "function",
    "text": "inv(::SecondOrderTensor)\n\nComputes the inverse of a second order tensor.\n\nExamples\n\njulia> A = rand(Tensor{2,3})\n3×3 Tensor{2,3,Float64,9}:\n 0.590845  0.460085  0.200586\n 0.766797  0.794026  0.298614\n 0.566237  0.854147  0.246837\n\njulia> inv(A)\n3×3 Tensor{2,3,Float64,9}:\n  19.7146   -19.2802    7.30384\n   6.73809  -10.7687    7.55198\n -68.541     81.4917  -38.8361\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Inverse-1",
    "page": "Other operators",
    "title": "Inverse",
    "category": "section",
    "text": "Inverse of a second order tensor such thatmathbfA^-1 cdot mathbfA = mathbfIwhere mathbfI is the second order identitiy tensor.Tensors.inv"
},

{
    "location": "man/other_operators/#Base.transpose",
    "page": "Other operators",
    "title": "Base.transpose",
    "category": "function",
    "text": "transpose(::Vec)\ntranspose(::SecondOrderTensor)\ntranspose(::FourthOrderTensor)\n\nCompute the transpose of a tensor. For a fourth order tensor, the transpose is the minor transpose.\n\nExamples\n\njulia> A = rand(Tensor{2,2})\n2×2 Tensor{2,2,Float64,4}:\n 0.590845  0.566237\n 0.766797  0.460085\n\njulia> A\'\n2×2 Tensor{2,2,Float64,4}:\n 0.590845  0.766797\n 0.566237  0.460085\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Tensors.minortranspose",
    "page": "Other operators",
    "title": "Tensors.minortranspose",
    "category": "function",
    "text": "minortranspose(::FourthOrderTensor)\n\nCompute the minor transpose of a fourth order tensor.\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Tensors.majortranspose",
    "page": "Other operators",
    "title": "Tensors.majortranspose",
    "category": "function",
    "text": "majortranspose(::FourthOrderTensor)\n\nCompute the major transpose of a fourth order tensor.\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Transpose-1",
    "page": "Other operators",
    "title": "Transpose",
    "category": "section",
    "text": "Transpose of tensors is defined by changing the order of the tensor\'s \"legs\". The transpose of a vector/symmetric tensor is the vector/tensor itself. The transpose of a second order tensor can be written as:A_ij^textT = A_jiand for a fourth order tensor the minor transpose can be written asA_ijkl^textt = A_jilkand the major transpose asA_ijkl^textT = A_klijTensors.transpose\nTensors.minortranspose\nTensors.majortranspose"
},

{
    "location": "man/other_operators/#Tensors.symmetric",
    "page": "Other operators",
    "title": "Tensors.symmetric",
    "category": "function",
    "text": "symmetric(::SecondOrderTensor)\nsymmetric(::FourthOrderTensor)\n\nComputes the (minor) symmetric part of a second or fourth order tensor. Return a SymmetricTensor.\n\nExamples\n\njulia> A = rand(Tensor{2,2})\n2×2 Tensor{2,2,Float64,4}:\n 0.590845  0.566237\n 0.766797  0.460085\n\njulia> symmetric(A)\n2×2 SymmetricTensor{2,2,Float64,3}:\n 0.590845  0.666517\n 0.666517  0.460085\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Tensors.minorsymmetric",
    "page": "Other operators",
    "title": "Tensors.minorsymmetric",
    "category": "function",
    "text": "minorsymmetric(::FourthOrderTensor)\n\nCompute the minor symmetric part of a fourth order tensor, return a SymmetricTensor{4}.\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Tensors.majorsymmetric",
    "page": "Other operators",
    "title": "Tensors.majorsymmetric",
    "category": "function",
    "text": "majorsymmetric(::FourthOrderTensor)\n\nCompute the major symmetric part of a fourth order tensor, returns a Tensor{4}.\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Symmetric-1",
    "page": "Other operators",
    "title": "Symmetric",
    "category": "section",
    "text": "The symmetric part of a second and fourth order tensor is defined by:mathbfA^textsym = frac12(mathbfA + mathbfA^textT) Leftrightarrow A_ij^textsym = frac12(A_ij + A_ji)mathsfA^textsym = frac12(mathsfA + mathsfA^textt) Leftrightarrow A_ijkl^textsym = frac12(A_ijkl + A_jilk)Tensors.symmetric\nTensors.minorsymmetric\nTensors.majorsymmetric"
},

{
    "location": "man/other_operators/#Tensors.skew",
    "page": "Other operators",
    "title": "Tensors.skew",
    "category": "function",
    "text": "skew(::SecondOrderTensor)\n\nComputes the skew-symmetric (anti-symmetric) part of a second order tensor, returns a Tensor{2}.\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Skew-symmetric-1",
    "page": "Other operators",
    "title": "Skew symmetric",
    "category": "section",
    "text": "The skew symmetric part of a second order tensor is defined bymathbfA^textskw = frac12(mathbfA - mathbfA^textT) Leftrightarrow A^textskw_ij = frac12(A_ij - A_ji)The skew symmetric part of a symmetric tensor is zero.Tensors.skew"
},

{
    "location": "man/other_operators/#Tensors.dev",
    "page": "Other operators",
    "title": "Tensors.dev",
    "category": "function",
    "text": "dev(::SecondOrderTensor)\n\nComputes the deviatoric part of a second order tensor.\n\nExamples\n\njulia> A = rand(Tensor{2, 3});\n\njulia> dev(A)\n3×3 Tensor{2,3,Float64,9}:\n 0.0469421  0.460085   0.200586\n 0.766797   0.250123   0.298614\n 0.566237   0.854147  -0.297065\n\njulia> tr(dev(A))\n0.0\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Deviatoric-tensor-1",
    "page": "Other operators",
    "title": "Deviatoric tensor",
    "category": "section",
    "text": "The deviatoric part of a second order tensor is defined bymathbfA^textdev = mathbfA - frac13 mathrmtrmathbfA mathbfI Leftrightarrow A_ij^textdev = A_ij - frac13A_kkdelta_ijTensors.dev"
},

{
    "location": "man/other_operators/#Tensors.vol",
    "page": "Other operators",
    "title": "Tensors.vol",
    "category": "function",
    "text": "vol(::SecondOrderTensor)\n\nComputes the volumetric part of a second order tensor based on the additive decomposition.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2,3})\n3×3 SymmetricTensor{2,3,Float64,6}:\n 0.590845  0.766797  0.566237\n 0.766797  0.460085  0.794026\n 0.566237  0.794026  0.854147\n\njulia> vol(A)\n3×3 SymmetricTensor{2,3,Float64,6}:\n 0.635026  0.0       0.0\n 0.0       0.635026  0.0\n 0.0       0.0       0.635026\n\njulia> vol(A) + dev(A) ≈ A\ntrue\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Volumetric-tensor-1",
    "page": "Other operators",
    "title": "Volumetric tensor",
    "category": "section",
    "text": "The volumetric part of a second order tensor is defined bymathbfA^textvol = frac13 mathrmtrmathbfA mathbfI Leftrightarrow A_ij^textvol = frac13A_kkdelta_ijTensors.vol"
},

{
    "location": "man/other_operators/#LinearAlgebra.cross",
    "page": "Other operators",
    "title": "LinearAlgebra.cross",
    "category": "function",
    "text": "cross(::Vec, ::Vec)\n\nComputes the cross product between two Vec vectors, returns a Vec{3}. For dimensions 1 and 2 the Vec\'s are expanded to 3D first. The infix operator × (written \\times) can also be used.\n\nExamples\n\njulia> a = rand(Vec{3})\n3-element Tensor{1,3,Float64,3}:\n 0.5908446386657102\n 0.7667970365022592\n 0.5662374165061859\n\njulia> b = rand(Vec{3})\n3-element Tensor{1,3,Float64,3}:\n 0.4600853424625171\n 0.7940257103317943\n 0.8541465903790502\n\njulia> a × b\n3-element Tensor{1,3,Float64,3}:\n  0.20535000738340053\n -0.24415039787171888\n  0.11635375677388776\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Cross-product-1",
    "page": "Other operators",
    "title": "Cross product",
    "category": "section",
    "text": "The cross product between two vectors is defined asmathbfa = mathbfb times mathbfc Leftrightarrow a_i = epsilon_ijk b_j c_kTensors.cross"
},

{
    "location": "man/other_operators/#LinearAlgebra.eigen",
    "page": "Other operators",
    "title": "LinearAlgebra.eigen",
    "category": "function",
    "text": "eigen(A::SymmetricTensor{2})\n\nCompute the eigenvalues and eigenvectors of a symmetric second order tensor and return an Eigen object. The eigenvalues are stored in a Vec, sorted in ascending order. The corresponding eigenvectors are stored as the columns of a Tensor.\n\nSee eigvals and eigvecs.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2, 2});\n\njulia> E = eigen(A)\nTensors.Eigen{Float64,2,4}([-0.188355, 1.34544], [-0.701412 0.712756; 0.712756 0.701412])\n\njulia> E.values\n2-element Tensor{1,2,Float64,2}:\n -0.1883547111127678\n  1.345436766284664\n\njulia> E.vectors\n2×2 Tensor{2,2,Float64,4}:\n -0.701412  0.712756\n  0.712756  0.701412\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#LinearAlgebra.eigvals",
    "page": "Other operators",
    "title": "LinearAlgebra.eigvals",
    "category": "function",
    "text": "eigvals(::SymmetricTensor{2})\n\nCompute the eigenvalues of a symmetric second order tensor.\n\n\n\n\n\neigvals(::Eigen)\n\nExtract eigenvalues from an Eigen object, returned by eigen.\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#LinearAlgebra.eigvecs",
    "page": "Other operators",
    "title": "LinearAlgebra.eigvecs",
    "category": "function",
    "text": "eigvecs(::SymmetricTensor{2})\n\nCompute the eigenvectors of a symmetric second order tensor.\n\n\n\n\n\neigvecs(::Eigen)\n\nExtract eigenvectors from an Eigen object, returned by eigen.\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Eigenvalues-and-eigenvectors-1",
    "page": "Other operators",
    "title": "Eigenvalues and eigenvectors",
    "category": "section",
    "text": "The eigenvalues and eigenvectors of a (symmetric) second order tensor, mathbfA can be solved from the eigenvalue problemmathbfA cdot mathbfv_i = lambda_i mathbfv_i qquad i = 1 dots textdimwhere lambda_i are the eigenvalues and mathbfv_i are the corresponding eigenvectors.Tensors.eigen\nTensors.eigvals\nTensors.eigvecs"
},

{
    "location": "man/other_operators/#Base.sqrt",
    "page": "Other operators",
    "title": "Base.sqrt",
    "category": "function",
    "text": "sqrt(S::SymmetricTensor{2})\n\nCalculate the square root of the positive definite symmetric second order tensor S, such that √S ⋅ √S == S.\n\nExamples\n\njulia> S = rand(SymmetricTensor{2,2}); S = tdot(S)\n2×2 SymmetricTensor{2,2,Float64,3}:\n 0.937075  0.887247\n 0.887247  0.908603\n\njulia> sqrt(S)\n2×2 SymmetricTensor{2,2,Float64,3}:\n 0.776178  0.578467\n 0.578467  0.757614\n\njulia> √S ⋅ √S ≈ S\ntrue\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Tensor-square-root-1",
    "page": "Other operators",
    "title": "Tensor square root",
    "category": "section",
    "text": "Square root of a symmetric positive definite second order tensor S, defined such thatsqrtmathbfS cdot sqrtmathbfS = STensors.sqrt"
},

{
    "location": "man/other_operators/#Tensors.rotate",
    "page": "Other operators",
    "title": "Tensors.rotate",
    "category": "function",
    "text": "rotate(x::Vec{3}, u::Vec{3}, θ::Number)\n\nRotate a three dimensional vector x around another vector u a total of θ radians.\n\nExamples\n\njulia> x = Vec{3}((0.0, 0.0, 1.0))\n3-element Tensor{1,3,Float64,3}:\n 0.0\n 0.0\n 1.0\n\njulia> u = Vec{3}((0.0, 1.0, 0.0))\n3-element Tensor{1,3,Float64,3}:\n 0.0\n 1.0\n 0.0\n\njulia> rotate(x, u, π/2)\n3-element Tensor{1,3,Float64,3}:\n 1.0\n 0.0\n 6.123233995736766e-17\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Rotations-1",
    "page": "Other operators",
    "title": "Rotations",
    "category": "section",
    "text": "Tensors.rotate"
},

{
    "location": "man/other_operators/#Tensors.dotdot",
    "page": "Other operators",
    "title": "Tensors.dotdot",
    "category": "function",
    "text": "dotdot(::Vec, ::SymmetricFourthOrderTensor, ::Vec)\n\nComputes a special dot product between two vectors and a symmetric fourth order tensor such that a_k C_ikjl b_l.\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Special-operations-1",
    "page": "Other operators",
    "title": "Special operations",
    "category": "section",
    "text": "For computing a special dot product between two vectors mathbfa and mathbfb with a fourth order symmetric tensor mathbfC such that a_k C_ikjl b_l there is dotdot(a, C, b). This function is useful because it is the expression for the tangent matrix in continuum mechanics when the displacements are approximated by scalar shape functions.Tensors.dotdot"
},

{
    "location": "man/other_operators/#Tensors.tovoigt",
    "page": "Other operators",
    "title": "Tensors.tovoigt",
    "category": "function",
    "text": "tovoigt(A::Union{SecondOrderTensor, FourthOrderTensor}; offdiagscale)\ntovoigt!(v::Array, A::Union{SecondOrderTensor, FourthOrderTensor}; offdiagscale)\n\nConverts a tensor to \"Voigt\"-format using the following index order: [11, 22, 33, 23, 13, 12, 32, 31, 21]. For SymmetricTensors, the keyword argument offdiagscale sets a scaling factor on the offdiagonal elements. tomandel can also be used for \"Mandel\"-format which sets offdiagscale = √2.\n\nSee also fromvoigt.\n\njulia> tovoigt(Tensor{2,3}(1:9))\n9-element Array{Int64,1}:\n 1\n 5\n 9\n 8\n 7\n 4\n 6\n 3\n 2\n\njulia> tovoigt(SymmetricTensor{2,3}(1:6); offdiagscale = 2)\n6-element Array{Int64,1}:\n  1\n  4\n  6\n 10\n  6\n  4\n\njulia> tovoigt(Tensor{4,2}(1:16))\n4×4 Array{Int64,2}:\n 1  13   9  5\n 4  16  12  8\n 3  15  11  7\n 2  14  10  6\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Tensors.fromvoigt",
    "page": "Other operators",
    "title": "Tensors.fromvoigt",
    "category": "function",
    "text": "fromvoigt(S::Type{<:AbstractTensor}, A::Array{T}; offdiagscale::T = 1)\n\nConverts an array A stored in Voigt format to a Tensor of type S. For SymmetricTensors, the keyword argument offdiagscale sets an inverse scaling factor on the offdiagonal elements. frommandel can also be used for \"Mandel\"-format which sets offdiagscale = √2.\n\nSee also tovoigt.\n\njulia> fromvoigt(Tensor{2,3}, 1.0:1.0:9.0)\n3×3 Tensor{2,3,Float64,9}:\n 1.0  6.0  5.0\n 9.0  2.0  4.0\n 8.0  7.0  3.0\n\n\n\n\n\n"
},

{
    "location": "man/other_operators/#Voigt-1",
    "page": "Other operators",
    "title": "Voigt",
    "category": "section",
    "text": "Tensors.tovoigt\nTensors.fromvoigt"
},

{
    "location": "man/storing_tensors/#",
    "page": "Storing tensors",
    "title": "Storing tensors",
    "category": "page",
    "text": ""
},

{
    "location": "man/storing_tensors/#Storing-tensors-1",
    "page": "Storing tensors",
    "title": "Storing tensors",
    "category": "section",
    "text": "Even though a user mostly deals with the Tensor{order, dim, T} parameters, the full parameter list for a tensor is actually Tensor{order, dim, T, N} where N is the number of independent elements in the tensor. The reason for this is that the internal storage for tensors is a NTuple{N, T}. In order to get good performance when storing tensors in other types it is important that the container type is also parametrized on N. For example, when storing one symmetric second order tensor and one unsymmetric tensor, this is the preferred way:struct Container{dim, T, N, M}\n    sym_tens::SymmetricTensor{2, dim, T, N}\n    tens::Tensor{2, dim, T, M}\nendLeaving out the M and N would lead to bad performance.tip: Tip\nThe number of independent elements N are already included in the typealias Vec so they can be stored with e.g.immutable VecContainer{dim, T}\n    vec::Vec{dim, T}\nendwithout causing bad performance."
},

{
    "location": "man/automatic_differentiation/#",
    "page": "Automatic Differentiation",
    "title": "Automatic Differentiation",
    "category": "page",
    "text": "DocTestSetup = quote\n    using Random\n    Random.seed!(1234)\n    using Tensors\nend"
},

{
    "location": "man/automatic_differentiation/#Tensors.gradient",
    "page": "Automatic Differentiation",
    "title": "Tensors.gradient",
    "category": "function",
    "text": "gradient(f::Function, v::Union{SecondOrderTensor, Vec})\ngradient(f::Function, v::Union{SecondOrderTensor, Vec}, :all)\n\nComputes the gradient of the input function. If the (pseudo)-keyword all is given, the value of the function is also returned as a second output argument.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2, 2});\n\njulia> ∇f = gradient(norm, A)\n2×2 SymmetricTensor{2,2,Float64,3}:\n 0.434906  0.56442\n 0.56442   0.416793\n\njulia> ∇f, f = gradient(norm, A, :all);\n\n\n\n\n\n"
},

{
    "location": "man/automatic_differentiation/#Tensors.hessian",
    "page": "Automatic Differentiation",
    "title": "Tensors.hessian",
    "category": "function",
    "text": "hessian(f::Function, v::Union{SecondOrderTensor, Vec})\nhessian(f::Function, v::Union{SecondOrderTensor, Vec}, :all)\n\nComputes the hessian of the input function. If the (pseudo)-keyword all is given, the lower order results (gradient and value) of the function is also returned as a second and third output argument.\n\nExamples\n\njulia> A = rand(SymmetricTensor{2, 2});\n\njulia> ∇∇f = hessian(norm, A)\n2×2×2×2 SymmetricTensor{4,2,Float64,9}:\n[:, :, 1, 1] =\n  0.596851  -0.180684\n -0.180684  -0.133425\n\n[:, :, 2, 1] =\n -0.180684   0.133546\n  0.133546  -0.173159\n\n[:, :, 1, 2] =\n -0.180684   0.133546\n  0.133546  -0.173159\n\n[:, :, 2, 2] =\n -0.133425  -0.173159\n -0.173159   0.608207\n\njulia> ∇∇f, ∇f, f = hessian(norm, A, :all);\n\n\n\n\n\n"
},

{
    "location": "man/automatic_differentiation/#Tensors.divergence",
    "page": "Automatic Differentiation",
    "title": "Tensors.divergence",
    "category": "function",
    "text": "divergence(f, x)\n\nCalculate the divergence of the vector field f, in the point x.\n\nExamples\n\njulia> f(x) = 2x;\n\njulia> x = rand(Vec{3});\n\njulia> divergence(f, x)\n6.0\n\n\n\n\n\n"
},

{
    "location": "man/automatic_differentiation/#Tensors.curl",
    "page": "Automatic Differentiation",
    "title": "Tensors.curl",
    "category": "function",
    "text": "curl(f, x)\n\nCalculate the curl of the vector field f, in the point x.\n\nExamples\n\njulia> f(x) = Vec{3}((x[2], x[3], -x[1]));\n\njulia> x = rand(Vec{3});\n\njulia> curl(f, x)\n3-element Tensor{1,3,Float64,3}:\n -1.0\n  1.0\n -1.0\n\n\n\n\n\n"
},

{
    "location": "man/automatic_differentiation/#Tensors.laplace",
    "page": "Automatic Differentiation",
    "title": "Tensors.laplace",
    "category": "function",
    "text": "laplace(f, x)\n\nCalculate the laplacian of the field f, in the point x. If f is a vector field, use broadcasting.\n\nExamples\n\njulia> x = rand(Vec{3});\n\njulia> f(x) = norm(x);\n\njulia> laplace(f, x)\n1.7833701103136868\n\njulia> g(x) = x*norm(x);\n\njulia> laplace.(g, x)\n3-element Tensor{1,3,Float64,3}:\n 2.107389336871036\n 2.7349658311504834\n 2.019621767876747\n\n\n\n\n\n"
},

{
    "location": "man/automatic_differentiation/#Automatic-Differentiation-1",
    "page": "Automatic Differentiation",
    "title": "Automatic Differentiation",
    "category": "section",
    "text": "Pages = [\"automatic_differentiation.md\"]Tensors supports forward mode automatic differentiation (AD) of tensorial functions to compute first order derivatives (gradients) and second order derivatives (Hessians). It does this by exploiting the Dual number defined in ForwardDiff.jl. While ForwardDiff.jl can itself be used to differentiate tensor functions it is a bit awkward because ForwardDiff.jl is written to work with standard Julia Arrays. One therefore has to send the input argument as an Array to ForwardDiff.jl, convert it to a Tensor and then convert the output Array to a Tensor again. This can also be inefficient since these Arrays are allocated on the heap so one needs to preallocate which can be annoying.Instead, it is simpler to use Tensors own AD API to do the differentiation. This does not require any conversions and everything will be stack allocated so there is no need to preallocate.The API for AD in Tensors is gradient(f, A) and hessian(f, A) where f is a function and A is a first or second order tensor. For gradient the function can return a scalar, vector (in case the input is a vector) or a second order tensor. For hessian the function should return a scalar.When evaluating the function with dual numbers, the value (value and gradient in the case of hessian) is obtained automatically, along with the gradient. To obtain the lower order results gradient and hessian accepts a third arguement, a Symbol. Note that the symbol is only used to dispatch to the correct function, and thus it can be any symbol. In the examples the symbol :all is used to obtain all the lower order derivatives and values.gradient\nhessian\ndivergence\ncurl\nlaplace"
},

{
    "location": "man/automatic_differentiation/#Examples-1",
    "page": "Automatic Differentiation",
    "title": "Examples",
    "category": "section",
    "text": "We here give a few examples of differentiating various functions and compare with the analytical solution."
},

{
    "location": "man/automatic_differentiation/#Norm-of-a-vector-1",
    "page": "Automatic Differentiation",
    "title": "Norm of a vector",
    "category": "section",
    "text": "f(mathbfx) = mathbfx quad Rightarrow quad partial f  partial mathbfx = mathbfx  mathbfxjulia> x = rand(Vec{2});\n\njulia> gradient(norm, x)\n2-element Tensor{1,2,Float64,2}:\n 0.6103600560550116\n 0.7921241076829584\n\njulia> x / norm(x)\n2-element Tensor{1,2,Float64,2}:\n 0.6103600560550116\n 0.7921241076829584"
},

{
    "location": "man/automatic_differentiation/#Determinant-of-a-second-order-symmetric-tensor-1",
    "page": "Automatic Differentiation",
    "title": "Determinant of a second order symmetric tensor",
    "category": "section",
    "text": "f(mathbfA) = det mathbfA quad Rightarrow quad partial f  partial mathbfA = mathbfA^-T det mathbfAjulia> A = rand(SymmetricTensor{2,2});\n\njulia> gradient(det, A)\n2×2 SymmetricTensor{2,2,Float64,3}:\n  0.566237  -0.766797\n -0.766797   0.590845\n\njulia> inv(A)\' * det(A)\n2×2 SymmetricTensor{2,2,Float64,3}:\n  0.566237  -0.766797\n -0.766797   0.590845"
},

{
    "location": "man/automatic_differentiation/#Hessian-of-a-quadratic-potential-1",
    "page": "Automatic Differentiation",
    "title": "Hessian of a quadratic potential",
    "category": "section",
    "text": "psi(mathbfe) = 12 mathbfe  mathsfE  mathbfe quad Rightarrow quad partial psi  (partial mathbfe otimes partial mathbfe) = mathsfE^textsymwhere mathsfE^textsym is the major symmetric part of mathsfE.julia> E = rand(Tensor{4,2});\n\njulia> ψ(ϵ) = 1/2 * ϵ ⊡ E ⊡ ϵ;\n\njulia> E_sym = hessian(ψ, rand(Tensor{2,2}));\n\njulia> norm(majorsymmetric(E) - E_sym)\n0.0"
},

{
    "location": "benchmarks/#",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "page",
    "text": ""
},

{
    "location": "benchmarks/#Benchmarks-1",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "section",
    "text": "Here are some benchmark timings for tensors in 3 dimensions. For comparison the timings for the same operations using standard Julia Arrays are also presented.In the table below, a denotes a vector, A, As denotes second order non-symmetric and symmetric tensors and AA, AAs denotes fourth order non-symmetric and symmetric tensors respectively.Operation Tensor Array speed-up\nSingle contraction   \na ⋅ a 1.241 ns 9.795 ns ×7.9\nA ⋅ a 2.161 ns 58.769 ns ×27.2\nA ⋅ A 3.117 ns 44.395 ns ×14.2\nAs ⋅ As 5.125 ns 44.498 ns ×8.7\nDouble contraction   \nA ⊡ A 1.927 ns 12.189 ns ×6.3\nAs ⊡ As 1.927 ns 12.187 ns ×6.3\nAA ⊡ A 6.087 ns 78.554 ns ×12.9\nAA ⊡ AA 60.820 ns 280.502 ns ×4.6\nAAs ⊡ AAs 22.104 ns 281.003 ns ×12.7\nAs ⊡ AAs ⊡ As 9.466 ns 89.747 ns ×9.5\nOuter product   \na ⊗ a 2.167 ns 32.447 ns ×15.0\nA ⊗ A 9.801 ns 86.568 ns ×8.8\nAs ⊗ As 4.311 ns 87.830 ns ×20.4\nOther operations   \ndet(A) 1.924 ns 177.134 ns ×92.1\ndet(As) 1.924 ns 182.831 ns ×95.0\ninv(A) 6.099 ns 595.591 ns ×97.7\ninv(As) 4.587 ns 635.858 ns ×138.6\nnorm(a) 1.494 ns 9.838 ns ×6.6\nnorm(A) 1.990 ns 16.752 ns ×8.4\nnorm(As) 2.011 ns 16.757 ns ×8.3\nnorm(AA) 9.283 ns 28.125 ns ×3.0\nnorm(AAs) 5.422 ns 28.134 ns ×5.2\na × a 1.921 ns 32.736 ns ×17.0The benchmarks are generated by benchmark_doc.jl on the following system:julia> versioninfo()\n\nJulia Version 0.6.0-pre.beta.297\nCommit 2a61131* (2017-04-24 23:57 UTC)\nPlatform Info:\n  OS: Linux (x86_64-linux-gnu)\n  CPU: Intel(R) Core(TM) i5-7600K CPU @ 3.80GHz\n  WORD_SIZE: 64\n  BLAS: libopenblas (USE64BITINT NO_AFFINITY HASWELL)\n  LAPACK: libopenblas64_\n  LIBM: libopenlibm\n  LLVM: libLLVM-3.9.1 (ORCJIT, broadwell)"
},

{
    "location": "demos/#",
    "page": "Demos",
    "title": "Demos",
    "category": "page",
    "text": ""
},

{
    "location": "demos/#Demos-1",
    "page": "Demos",
    "title": "Demos",
    "category": "section",
    "text": "This section contain a few demos of applying Tensors to continuum mechanics."
},

{
    "location": "demos/#Creating-the-linear-elasticity-tensor-1",
    "page": "Demos",
    "title": "Creating the linear elasticity tensor",
    "category": "section",
    "text": "The linear elasticity tensor mathbfC can be defined from the Lamé parameters lambda and mu by the expression$ \\mathbf{C}{ijkl} = \\lambda \\delta{ij}\\delta{kl} + \\mu(\\delta{ij}\\delta{jl} + \\delta{il}\\delta_{jk}),$where delta_ij = 1 if i = j otherwise 0. It can also be computed in terms of the Young\'s modulus E and Poisson\'s ratio nu by the conversion formulas lambda = Enu  (1 + nu)(1 - 2nu) and mu = E  2(1 + nu)The code below creates the elasticity tensor for given parameters E and nu and dimension textttdim. Note the similarity between the mathematical formula and the code.using Tensors\nE = 200e9\nν = 0.3\ndim = 2\nλ = E*ν / ((1 + ν) * (1 - 2ν))\nμ = E / (2(1 + ν))\nδ(i,j) = i == j ? 1.0 : 0.0\nf = (i,j,k,l) -> λ*δ(i,j)*δ(k,l) + μ*(δ(i,k)*δ(j,l) + δ(i,l)*δ(j,k))\n\nC = SymmetricTensor{4, dim}(f)"
},

{
    "location": "demos/#Nonlinear-elasticity-material-1",
    "page": "Demos",
    "title": "Nonlinear elasticity material",
    "category": "section",
    "text": "For a deformation gradient mathbfF = mathbfI + nabla otimes mathbfu, where mathbfu is the deformation from the reference to the current configuration, the right Cauchy-Green deformation tensor is defined by mathbfC = mathbfF^T cdot mathbfF. The Second Piola Krichoff stress tensor mathbfS is derived from the Helmholtz free energy Psi by the relation mathbfS = 2 fracpartial Psipartial mathbfC.We can define potential energy of the material asPsi(mathbfC) = 12 mu (mathrmtr(hatmathbfC) - 3) + K_b(J-1)^2where hatmathbfC = mathrmdet(mathbfC)^-13 mathbfC and J = det(mathbfF) = sqrtdet(mathbfC) and the shear and bulk modulus are given by mu and K_b respectively.This free energy function can be implemented in Tensors as:function Ψ(C, μ, Kb)\n    detC = det(C)\n    J = sqrt(detC)\n    Ĉ = detC^(-1/3)*C\n    return 1/2*(μ * (tr(Ĉ)- 3) + Kb*(J-1)^2)\nendThe analytical expression for the Second Piola Kirchoff tensor is$ \\mathbf{S} = \\mu \\det(\\mathbf{C})^{-1/3}(\\mathbf{I} - 1/3 \\mathrm{tr}(\\mathbf{C})\\mathbf{C}^{-1}) + K_b(J-1)J\\mathbf{C}^{-1} $which can be implemented by the functionfunction S(C, μ, Kb)\n    I = one(C)\n    J = sqrt(det(C))\n    invC = inv(C)\n    return μ * det(C)^(-1/3)*(I - 1/3*tr(C)*invC) + Kb*(J-1)*J*invC\nend"
},

{
    "location": "demos/#Automatic-differentiation-1",
    "page": "Demos",
    "title": "Automatic differentiation",
    "category": "section",
    "text": "For some material models it can be cumbersome to compute the analytical expression for the Second Piola Kirchoff tensor. We can then instead use Automatic Differentiation (AD). Below is an example which computes the Second Piola Kirchoff tensor using AD and compares it to the analytical answer.DocTestSetup = quote\n    using Random\n    Random.seed!(1234)\n    using Tensors\n    E = 200e9\n    ν = 0.3\n    dim = 2\n    λ = E*ν / ((1 + ν) * (1 - 2ν))\n    μ = E / (2(1 + ν))\n    δ(i,j) = i == j ? 1.0 : 0.0\n    f = (i,j,k,l) -> λ*δ(i,j)*δ(k,l) + μ*(δ(i,k)*δ(j,l) + δ(i,l)*δ(j,k))\n\n    C = SymmetricTensor{4, dim}(f)\n\n    function Ψ(C, μ, Kb)\n        detC = det(C)\n        J = sqrt(detC)\n        Ĉ = detC^(-1/3)*C\n        return 1/2*(μ * (tr(Ĉ)- 3) + Kb*(J-1)^2)\n    end\n\n    function S(C, μ, Kb)\n        I = one(C)\n        J = sqrt(det(C))\n        invC = inv(C)\n        return μ * det(C)^(-1/3)*(I - 1/3*tr(C)*invC) + Kb*(J-1)*J*invC\n    end\nendjulia> μ = 1e10;\n\njulia> Kb = 1.66e11;\n\njulia> F = one(Tensor{2,3}) + rand(Tensor{2,3});\n\njulia> C = tdot(F);\n\njulia> S_AD = 2 * gradient(C -> Ψ(C, μ, Kb), C)\n3×3 SymmetricTensor{2,3,Float64,6}:\n  4.30534e11  -2.30282e11  -8.52861e10\n -2.30282e11   4.38793e11  -2.64481e11\n -8.52861e10  -2.64481e11   7.85515e11\n\njulia> S(C, μ, Kb)\n3×3 SymmetricTensor{2,3,Float64,6}:\n  4.30534e11  -2.30282e11  -8.52861e10\n -2.30282e11   4.38793e11  -2.64481e11\n -8.52861e10  -2.64481e11   7.85515e11"
},

]}
