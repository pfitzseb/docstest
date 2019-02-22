var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StructArrays-1",
    "page": "Readme",
    "title": "StructArrays",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package introduces the type StructArray which is an AbstractArray whose elements are struct (for example NamedTuples,  or ComplexF64, or a custom user defined struct). While a StructArray iterates structs, the layout is column based (meaning each field of the struct is stored in a seprate Array).Base.getproperty or the dot syntax can be used to access columns, whereas rows can be accessed with getindex.The package was largely inspired by the Columns type in IndexedTables which it now replaces."
},

{
    "location": "#Example-usage-to-store-complex-numbers-1",
    "page": "Readme",
    "title": "Example usage to store complex numbers",
    "category": "section",
    "text": "julia> using StructArrays, Random\n\njulia> Random.seed!(4);\n\njulia> s = StructArray{ComplexF64}((rand(2,2), rand(2,2)))\n2×2 StructArray{Complex{Float64},2,NamedTuple{(:re, :im),Tuple{Array{Float64,2},Array{Float64,2}}}}:\n 0.680079+0.625239im   0.92407+0.267358im\n 0.874437+0.737254im  0.929336+0.804478im\n\njulia> s[1, 1]\n0.680079235935741 + 0.6252391193298537im\n\njulia> s.re\n2×2 Array{Float64,2}:\n 0.680079  0.92407\n 0.874437  0.929336\n\njulia> fieldarrays(s) # obtain all field arrays as a named tuple\n(re = [0.680079 0.92407; 0.874437 0.929336], im = [0.625239 0.267358; 0.737254 0.804478])Note that the same approach can be used directly from an Array of complex numbers:julia> StructArray([1+im, 3-2im])\n2-element StructArray{Complex{Int64},1,NamedTuple{(:re, :im),Tuple{Array{Int64,1},Array{Int64,1}}}}:\n 1 + 1im\n 3 - 2im"
},

{
    "location": "#Collection-and-initialization-1",
    "page": "Readme",
    "title": "Collection and initialization",
    "category": "section",
    "text": "One can also create a StructArrray from an iterable of structs without creating an intermediate Array:julia> StructArray(log(j+2.0*im) for j in 1:10)\n10-element StructArray{Complex{Float64},1,NamedTuple{(:re, :im),Tuple{Array{Float64,1},Array{Float64,1}}}}:\n 0.8047189562170501 + 1.1071487177940904im\n 1.0397207708399179 + 0.7853981633974483im\n 1.2824746787307684 + 0.5880026035475675im\n 1.4978661367769954 + 0.4636476090008061im\n  1.683647914993237 + 0.3805063771123649im\n 1.8444397270569681 + 0.3217505543966422im\n  1.985145956776061 + 0.27829965900511133im\n 2.1097538525880535 + 0.24497866312686414im\n 2.2213256282451583 + 0.21866894587394195im\n 2.3221954495706862 + 0.19739555984988078imAnother option is to create an uninitialized StructArray and then fill it with data. Just like in normal arrays, this is done with the undef syntax:julia> s = StructArray{ComplexF64}(undef, 2, 2)\n2×2 StructArray{Complex{Float64},2,NamedTuple{(:re, :im),Tuple{Array{Float64,2},Array{Float64,2}}}}:\n 6.91646e-310+6.91646e-310im  6.91646e-310+6.91646e-310im\n 6.91646e-310+6.91646e-310im  6.91646e-310+6.91646e-310im\n\njulia> rand!(s)\n2×2 StructArray{Complex{Float64},2,NamedTuple{(:re, :im),Tuple{Array{Float64,2},Array{Float64,2}}}}:\n  0.446415+0.671453im  0.0797964+0.675723im\n 0.0340059+0.420472im   0.907252+0.808263im"
},

{
    "location": "#Using-custom-array-types-1",
    "page": "Readme",
    "title": "Using custom array types",
    "category": "section",
    "text": "StructArrays supports using custom array types. It is always possible to pass field arrays of a custom type. The \"custom array of structs to struct of custom arrays\" transformation will use the similar method of the custom array type. This can be useful when working on the GPU for example:julia> using StructArrays, CuArrays\n\njulia> a = CuArray(rand(Float32, 10));\n\njulia> b = CuArray(rand(Float32, 10));\n\njulia> StructArray{ComplexF32}((a, b))\n10-element StructArray{Complex{Float32},1,NamedTuple{(:re, :im),Tuple{CuArray{Float32,1},CuArray{Float32,1}}}}:\n   0.7539003f0 + 0.5406891f0im\n   0.2818451f0 + 0.60345674f0im\n   0.3271774f0 + 0.56674314f0im\n   0.6943406f0 + 0.8360009f0im\n   0.9609026f0 + 0.27519035f0im\n 0.051933408f0 + 0.93443274f0im\n  0.51335454f0 + 0.90320504f0im\n   0.6588727f0 + 0.16270757f0im\n  0.20075476f0 + 0.6591008f0im\n  0.58832633f0 + 0.45309567f0im\n\njulia> c = CuArray(rand(ComplexF32, 10));\n\njulia> StructArray(c)\n10-element StructArray{Complex{Float32},1,NamedTuple{(:re, :im),Tuple{CuArray{Float32,1},CuArray{Float32,1}}}}:\n  0.76695776f0 + 0.31588173f0im\n   0.9804857f0 + 0.15740407f0im\n  0.85849273f0 + 0.51903546f0im\n 0.106796384f0 + 0.9493377f0im\n  0.38152885f0 + 0.8419838f0im\n   0.8892112f0 + 0.5276251f0im\n  0.11579132f0 + 0.79168653f0im\n  0.16804445f0 + 0.40545344f0im\n  0.42822742f0 + 0.61150527f0im\n  0.29996157f0 + 0.94151044f0im"
},

{
    "location": "#Example-usage-to-store-a-data-table-1",
    "page": "Readme",
    "title": "Example usage to store a data table",
    "category": "section",
    "text": "julia> t = StructArray((a = [1, 2], b = [\"x\", \"y\"]))\n2-element StructArray{NamedTuple{(:a, :b),Tuple{Int64,String}},1,NamedTuple{(:a, :b),Tuple{Array{Int64,1},Array{String,1}}}}:\n (a = 1, b = \"x\")\n (a = 2, b = \"y\")\n\njulia> t[1]\n(a = 1, b = \"x\")\n\njulia> t.a\n2-element Array{Int64,1}:\n 1\n 2\n\njulia> push!(t, (a = 3, b = \"z\"))\n3-element StructArray{NamedTuple{(:a, :b),Tuple{Int64,String}},1,NamedTuple{(:a, :b),Tuple{Array{Int64,1},Array{String,1}}}}:\n (a = 1, b = \"x\")\n (a = 2, b = \"y\")\n (a = 3, b = \"z\")"
},

{
    "location": "autodocs/#StructArrays.StructArray",
    "page": "Docstrings",
    "title": "StructArrays.StructArray",
    "category": "type",
    "text": "A type that stores an array of structures as a structure of arrays.\n\nFields:\n\nfieldarrays: a named tuple of arrays. Also fieldarrays(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StructArrays.fieldarrays",
    "page": "Docstrings",
    "title": "StructArrays.fieldarrays",
    "category": "function",
    "text": "fieldarrays(s::StructArray)\n\nReturn the field arrays corresponding to the various entry of the struct as a named tuple. If the struct has no names (e.g. a tuple) automatic names are assigned (:x1, :x2, ...).\n\nExamples\n\njulia> s = StructArray(rand(ComplexF64, 4));\n\njulia> fieldarrays(s)\n(re = [0.396526, 0.486036, 0.459595, 0.0323561], im = [0.147702, 0.81043, 0.00993469, 0.487091])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StructArrays.ArrayInitializerStructArrays.LazyRowStructArrays.SkipConstructorStructArrays.StructArrayStructArrays.StructArrayInitializerStructArrays.StructArraysStructArrays.StructVectorStructArrays.TiedIndicesStructArrays.__init__StructArrays._dimsStructArrays._reshapeStructArrays._similarStructArrays._structarrayStructArrays._undef_arrayStructArrays.all_typesStructArrays.buildfromschemaStructArrays.collect_empty_structarrayStructArrays.collect_structarrayStructArrays.collect_to_structarray!StructArrays.createinstanceStructArrays.createtypeStructArrays.default_arrayStructArrays.default_initializerStructArrays.eltypesStructArrays.evalStructArrays.fastpermute!StructArrays.fieldarraysStructArrays.fieldsStructArrays.finduniquesortedStructArrays.foreachfieldStructArrays.forward_vecStructArrays.getfieldindexStructArrays.grow_to_structarray!StructArrays.includeStructArrays.iscompatibleStructArrays.iseltypeStructArrays.map_paramsStructArrays.map_typesStructArrays.refine_perm!StructArrays.similar_structarrayStructArrays.sort_int_range_sub_by!StructArrays.sort_sub_by!StructArrays.staticschemaStructArrays.tiedindicesStructArrays.to_structarrayStructArrays.tuple_typeStructArrays.uniquesortedStructArrays.unsafe_createinstanceStructArrays.widenarrayStructArrays.widenstructarray"
},

]}
