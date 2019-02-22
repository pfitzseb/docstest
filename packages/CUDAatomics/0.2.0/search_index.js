var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CUDAatomics-1",
    "page": "Readme",
    "title": "CUDAatomics",
    "category": "section",
    "text": "Support for atomic operations in CUDAnative kernels"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The functions implemented closely follow the functions in the CUDA C Programming Guide.  All functions and types included in the guide are supported, and function names are the same as in the guide except that only lowercase characters are used.The first element to each function will be a CuDeviceArray (instead of a pointer as in the C guide).  In addition to the arguments to each function in the C guide, two additional optional arguments are provided for each atomic function:atomicadd(ary, value, [index=1, fieldname=Val(nothing)])index specifies which element of the array should be atomically updated, and defaults to the first element.  fieldname is a value type used for extending the atomic functions to user-defined types (see below)."
},

{
    "location": "#Automatic-type-conversion-1",
    "page": "Readme",
    "title": "Automatic type conversion",
    "category": "section",
    "text": "When calling an atomic function such that the eltype of the ary does not match the type of value, the value will be automatically converted to the eltype of ary before the atomic operation is performed.  For instance, one might want to use threadIdx().x (which has type Int64) to perform a compare-and-swap with a 32-bit integer."
},

{
    "location": "#Extending-to-user-defined-types-1",
    "page": "Readme",
    "title": "Extending to user-defined types",
    "category": "section",
    "text": "The optional fieldname argument can be used to specify the field to be updated of a user-defined type.  For instance, to extend atomicadd to a dual-number type, one could dostruct DualFloat\r\n    value::Float32\r\n    partial::Float32\r\nend\r\n\r\nfunction CUDAatomics.atomicadd(a::CuDeviceArray{DualFloat, N, A}, b::DualFloat, index=1) where {N,A}\r\n    CUDAatomics.atomicadd(a, b.value, index, Val(:value))\r\n    CUDAatomics.atomicadd(a, b.partial, index, Val(:partial))\r\nend"
},

]}
