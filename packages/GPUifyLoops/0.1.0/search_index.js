var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#GPUifyLoops.jl-1",
    "page": "Home",
    "title": "GPUifyLoops.jl",
    "category": "section",
    "text": "GPUifyLoops tries to solve the problem of code-duplication that can occur when writing performant kernels that target multiple devices."
},

{
    "location": "#GPUifyLoops.@loop",
    "page": "Home",
    "title": "GPUifyLoops.@loop",
    "category": "macro",
    "text": "@loop for i in (A; B)\n    # body\nend\n\nTake a for i in (A; B) expression and on the CPU lowers it to:\n\nfor i in A\n    # body\nend\n\nand on the GPU:\n\nfor i in B\n    if !(i in A)\n        continue\n    end\n    # body\nend\n\n\n\n\n\n"
},

{
    "location": "#GPUifyLoops.@setup",
    "page": "Home",
    "title": "GPUifyLoops.@setup",
    "category": "macro",
    "text": "@setup Dev\n\nSetups some hidden state within the function that allows the other macros to properly work.\n\nfunction kernel(::Val{Dev}, A) where Dev\n    @setup Dev\n    # ...\nend\n\nkernel(A::Array) = kernel(Val(:CPU), A)\nkernel(A::CuArray) = @cuda kernel(Val(:GPU), A)\n\n\n\n\n\n"
},

{
    "location": "#GPUifyLoops.@synchronize",
    "page": "Home",
    "title": "GPUifyLoops.@synchronize",
    "category": "macro",
    "text": "@syncronize\n\nCalls sync_threads() on the GPU and nothing on the CPU.\n\n\n\n\n\n"
},

{
    "location": "#API-1",
    "page": "Home",
    "title": "API",
    "category": "section",
    "text": "@loop\n@setup\n@synchronize"
},

{
    "location": "#Examples-1",
    "page": "Home",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Simple-1",
    "page": "Home",
    "title": "Simple",
    "category": "section",
    "text": "using Markdown\nMarkdown.parse(\"\"\"\n```julia\n$(read(\"../../examples/simple.jl\", String))\n```\n\"\"\")"
},

]}
