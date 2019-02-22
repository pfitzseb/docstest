var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GPUArrays-1",
    "page": "Readme",
    "title": "GPUArrays",
    "category": "section",
    "text": "(Image: ) (Image: ) (Image: ) (Image: ) (Image: )BenchmarksAbstract GPU Array package for Julia\'s various GPU backends. See it as a Julia Base.AbstractArray for GPUs. Currently, you either need to install CLArrays or CuArrays for a concrete implementation."
},

{
    "location": "#Why-another-GPU-array-package-in-yet-another-language?-1",
    "page": "Readme",
    "title": "Why another GPU array package in yet another language?",
    "category": "section",
    "text": "Julia offers great advantages for programming the GPU. This blog post outlines a few of those.E.g., we can use Julia\'s JIT to generate optimized kernels for map/broadcast operations.This works even for things like complex arithmetic, since we can compile what\'s already in Julia Base. This isn\'t restricted to Julia Base, GPUArrays works with all kind of user defined types and functions!GPUArrays relies heavily on Julia\'s dot broadcasting. The great thing about dot broadcasting in Julia is, that it actually fuses operations syntactically, which is vital for performance on the GPU. E.g.:out .= a .+ b ./ c .+ 1\n#turns into this one broadcast (map):\nbroadcast!(out, a, b, c) do a, b, c\n    a + b / c + 1\nendWill result in one GPU kernel call to a function that combines the operations without any extra allocations. This allows GPUArrays to offer a lot of functionality with minimal code.Also, when compiling Julia for the GPU, we can use all the cool features from Julia, e.g. higher order functions, multiple dispatch, meta programming and generated functions. Checkout the examples, to see how this can be used to emit specialized code while not losing flexibility:<img src=\"https://raw.githubusercontent.com/JuliaGPU/GPUBenchmarks.jl/master/results/plots/juliaset_result.png\" height=\"150\"> <img src=\"https://user-images.githubusercontent.com/1010467/40832645-12ca1f50-658c-11e8-9fb4-170871db2499.png\" height=\"150\">In theory, we could go as far as inspecting user defined callbacks (we can get the complete AST), count operations and estimate register usage and use those numbers to optimize our kernels!"
},

{
    "location": "#Scope-1",
    "page": "Readme",
    "title": "Scope",
    "category": "section",
    "text": "Interface offered for all backends:map(f, ::GPUArray...)\nmap!(f, dest::GPUArray, ::GPUArray...)\n\nbroadcast(f, ::GPUArray...)\nbroadcast!(f, dest::GPUArray, ::GPUArray...)\n\nmapreduce(f, op, ::GPUArray...) # so support for sum/mean/minimum etc comes for free\n\ngetindex, setindex!, push!, append!, splice!, append!, copy!, reinterpret, convert\n\nFrom (CL/CU)FFT\nfft!/fft/ifft/ifft! and the matching plan_fft functions.\nFrom (CL/CU)BLAS\ngemm!, scal!, gemv! and the high level functions that are implemented with these, like A * B, A_mul_B!, etc."
},

{
    "location": "#Currently-supported-subset-of-Julia-Code-1",
    "page": "Readme",
    "title": "Currently supported subset of Julia Code",
    "category": "section",
    "text": "working with immutable isbits (not containing pointers) type should be completely supported non allocating code (so no constructs like x = [1, 2, 3]). Note that tuples are isbits, so this works x = (1, 2, 3). Transpiler/OpenCL has problems with putting GPU arrays on the gpu into a struct - so no views and actually no multidimensional indexing. For that size is needed which would need to be part of the array struct. A fix for that is in sight, though."
},

{
    "location": "#JLArray-1",
    "page": "Readme",
    "title": "JLArray",
    "category": "section",
    "text": "The JLArray is a GPUArray which doesn\'t run on the GPU and rather uses Julia\'s async constructs as its backend. It serves as a fallback for testing compatibility with GPUArrays in cases where a GPU does not exist and as a reference implementation. It is constructed as follows:gA = JLArray(A)"
},

{
    "location": "#TODO-/-up-for-grabs-1",
    "page": "Readme",
    "title": "TODO / up for grabs",
    "category": "section",
    "text": "stencil operations, convolutions\nmore tests and benchmarks\ntests, that only switch the backend but use the same code\nperformance improvements!!\ninterop between OpenCL, CUDA and OpenGL is there as a protype, but needs proper hooking up via Base.copy! / convert"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "See CuArrays or CLArrays for installation instructions."
},

{
    "location": "autodocs/#GPUArrays.@LocalMemory",
    "page": "Docstrings",
    "title": "GPUArrays.@LocalMemory",
    "category": "macro",
    "text": "Creates a local static memory shared inside one block. Equivalent to __local of OpenCL or __shared__ (<variable>) of CUDA.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.@cartesianidx",
    "page": "Docstrings",
    "title": "GPUArrays.@cartesianidx",
    "category": "macro",
    "text": "cartesianidx(A, statesym = :state)\n\nLike @linearidx(A, statesym = :state), but returns an N-dimensional NTuple{ndim(A), Int} as index\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.@linearidx",
    "page": "Docstrings",
    "title": "GPUArrays.@linearidx",
    "category": "macro",
    "text": "linearidx(A, statesym = :state)\n\nMacro form of linear_index, which calls return when out of bounds. So it can be used like this:\n\n```julia\nfunction kernel(state, A)\n    idx = @linear_index A state\n    # from here on it\'s save to index into A with idx\n    @inbounds begin\n        A[idx] = ...\n    end\nend\n```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.LocalMem",
    "page": "Docstrings",
    "title": "GPUArrays.LocalMem",
    "category": "type",
    "text": "Thread group local memory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.LocalMemory",
    "page": "Docstrings",
    "title": "GPUArrays.LocalMemory",
    "category": "type",
    "text": "Creates a block local array pointer with T being the element type and N the length. Both T and N need to be static! C is a counter for approriately get the correct Local mem id in CUDAnative. This is an internal method which needs to be overloaded by the GPU Array backends\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.all_devices",
    "page": "Docstrings",
    "title": "GPUArrays.all_devices",
    "category": "function",
    "text": "Returns all devices from backends = active_backends(). Device can be filtered by passing filter_funcs, e.g. : is_gpu, is_cpu, (dev)-> has_atleast(dev, threads, 512)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.available_devices",
    "page": "Docstrings",
    "title": "GPUArrays.available_devices",
    "category": "function",
    "text": "Returns all devices for the current backend. Device can be filtered by passing filter_funcs, e.g. : is_gpu, is_cpu, (dev)-> has_atleast(dev, threads, 512)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.blocks",
    "page": "Docstrings",
    "title": "GPUArrays.blocks",
    "category": "function",
    "text": "Blocks that group together hardware threads\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.destroy!",
    "page": "Docstrings",
    "title": "GPUArrays.destroy!",
    "category": "function",
    "text": "Destroys context, freeing all it\'s resources.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.device",
    "page": "Docstrings",
    "title": "GPUArrays.device",
    "category": "function",
    "text": "device(A::AbstractArray)\n\nGets the device associated to the Array A\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.device_summary",
    "page": "Docstrings",
    "title": "GPUArrays.device_summary",
    "category": "function",
    "text": "Summarizes all features of a device and prints it to io\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.fast_isapprox",
    "page": "Docstrings",
    "title": "GPUArrays.fast_isapprox",
    "category": "function",
    "text": "Same as Base.isapprox, but without keyword args and without nans\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.forall_devices",
    "page": "Docstrings",
    "title": "GPUArrays.forall_devices",
    "category": "function",
    "text": "Iterates through all available devices and calls f(context) after initializing the standard context for that device.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.free_global_memory",
    "page": "Docstrings",
    "title": "GPUArrays.free_global_memory",
    "category": "function",
    "text": "Free global memory. Isn\'t supported for AMD cards right now, in which case it returns NaN, so don\'t rely on the output of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.global_memory",
    "page": "Docstrings",
    "title": "GPUArrays.global_memory",
    "category": "function",
    "text": "Global memory, e.g. VRAM or RAM of device\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.global_size",
    "page": "Docstrings",
    "title": "GPUArrays.global_size",
    "category": "function",
    "text": "global_size(state)\n\nGlobal size == blockdim * griddim == total number of kernel execution\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.gpu_call",
    "page": "Docstrings",
    "title": "GPUArrays.gpu_call",
    "category": "function",
    "text": "gpu_call(kernel::Function, A::GPUArray, args::Tuple, configuration = length(A))\n\nCalls function kernel on the GPU. A must be an GPUArray and will help to dispatch to the correct GPU backend and supplies queues and contexts. Calls the kernel function with kernel(state, args...), where state is dependant on the backend and can be used for getting an index into A with linear_index(state). Optionally, a launch configuration can be supplied in the following way:\n\n1) A single integer, indicating how many work items (total number of threads) you want to launch.\n    in this case `linear_index(state)` will be a number in the range `1:configuration`\n2) Pass a tuple of integer tuples to define blocks and threads per blocks!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.has_atleast",
    "page": "Docstrings",
    "title": "GPUArrays.has_atleast",
    "category": "function",
    "text": "Checks a device for a certain attribute and returns true if it has at least value. Can be used with e.g. threads, blocks, global_memory, local_memory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.is_cpu",
    "page": "Docstrings",
    "title": "GPUArrays.is_cpu",
    "category": "function",
    "text": "Returns true if device is a cpu\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.is_gpu",
    "page": "Docstrings",
    "title": "GPUArrays.is_gpu",
    "category": "function",
    "text": "Returns true if device is a gpu\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.linear_index",
    "page": "Docstrings",
    "title": "GPUArrays.linear_index",
    "category": "function",
    "text": "linear_index(state)\n\nlinear index corresponding to each kernel launch (in OpenCL equal to getglobalid).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.local_memory",
    "page": "Docstrings",
    "title": "GPUArrays.local_memory",
    "category": "function",
    "text": "Block local memory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.name",
    "page": "Docstrings",
    "title": "GPUArrays.name",
    "category": "function",
    "text": "Hardware name of a device\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.new_context",
    "page": "Docstrings",
    "title": "GPUArrays.new_context",
    "category": "function",
    "text": "Creates a new context from device without caching the resulting context.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.on_device",
    "page": "Docstrings",
    "title": "GPUArrays.on_device",
    "category": "function",
    "text": "Creates a temporary context for device and executes f(context) while this context is active. Context gets destroyed afterwards. Note, that creating a temporary context is expensive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.reset!",
    "page": "Docstrings",
    "title": "GPUArrays.reset!",
    "category": "function",
    "text": "Resets a context freeing all resources and creating a new context.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.synchronize",
    "page": "Docstrings",
    "title": "GPUArrays.synchronize",
    "category": "function",
    "text": "synchronize(A::AbstractArray)\n\nBlocks until all operations are finished on A\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.synchronize_threads",
    "page": "Docstrings",
    "title": "GPUArrays.synchronize_threads",
    "category": "function",
    "text": " synchronize_threads(state)\n\nin CUDA terms __synchronize in OpenCL terms: barrier(CLK_LOCAL_MEM_FENCE)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.test",
    "page": "Docstrings",
    "title": "GPUArrays.test",
    "category": "function",
    "text": "Runs the entire GPUArrays test suite on array type AT\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.threads",
    "page": "Docstrings",
    "title": "GPUArrays.threads",
    "category": "function",
    "text": "Hardware threads of device\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.unsafe_reinterpret",
    "page": "Docstrings",
    "title": "GPUArrays.unsafe_reinterpret",
    "category": "function",
    "text": "Unsafe reinterpret for backends to overload. This makes it easier to do checks just on the high level.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GPUArrays.update!",
    "page": "Docstrings",
    "title": "GPUArrays.update!",
    "category": "function",
    "text": "This updates an array, even if dimensions and sizes don\'t match. Will resize accordingly!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GPUArrays.@LocalMemoryGPUArrays.@allowscalarGPUArrays.@cartesianidxGPUArrays.@disallowscalarGPUArrays.@linearidxGPUArrays.AbstractDeviceArrayGPUArrays.CommonReduceResultGPUArrays.FFTKernelGPUArrays.FFTPlanGPUArrays.GPUArrayGPUArrays.GPUArraysGPUArrays.GPUBackendGPUArrays.GPUDestArrayGPUArrays.GPUMatrixGPUArrays.GPUVecOrMatGPUArrays.GPUVectorGPUArrays.JLArrayGPUArrays.JLBackendGPUArrays.JLDeviceGPUArrays.JLStateGPUArrays.LCGStepGPUArrays.LocalMemGPUArrays.LocalMemoryGPUArrays.SamplerGPUArrays.SmallSignedGPUArrays.SmallUnsignedGPUArrays.TausStepGPUArrays.TestSuiteGPUArrays.WidenReduceResultGPUArrays._allowscalarGPUArrays._getindexGPUArrays._gpu_callGPUArrays._ind2subGPUArrays._setindex!GPUArrays._sub2indGPUArrays.acc_mapreduceGPUArrays.all_devicesGPUArrays.allequalGPUArrays.allowscalarGPUArrays.assertscalarGPUArrays.available_devicesGPUArrays.backendGPUArrays.bgetindexGPUArrays.blas_moduleGPUArrays.blasbufferGPUArrays.blockdim_xGPUArrays.blockdim_yGPUArrays.blockdim_zGPUArrays.blockidx_xGPUArrays.blockidx_yGPUArrays.blockidx_zGPUArrays.blocksGPUArrays.cached_stateGPUArrays.clear_cacheGPUArrays.collect_kernelGPUArrays.convolution!GPUArrays.convolution_fft!GPUArrays.convolution_kernelGPUArrays.copy_kernel!GPUArrays.destroy!GPUArrays.deviceGPUArrays.device_summaryGPUArrays.eltype_orGPUArrays.evalGPUArrays.fast_isapproxGPUArrays.fftkernelGPUArrays.filterfuncsGPUArrays.floattypeGPUArrays.forall_devicesGPUArrays.free_global_memoryGPUArrays.genpermGPUArrays.getidx_2d1dGPUArrays.global_memoryGPUArrays.global_sizeGPUArrays.gpu_callGPUArrays.gpu_convertGPUArrays.gpu_ind2subGPUArrays.gpu_promote_typeGPUArrays.gpu_randGPUArrays.gpu_sub2indGPUArrays.griddim_xGPUArrays.griddim_yGPUArrays.griddim_zGPUArrays.grow_atGPUArrays.grow_dimensionsGPUArrays.has_atleastGPUArrays.includeGPUArrays.index_kernelGPUArrays.indexstyleGPUArrays.is_cpuGPUArrays.is_cudanativeGPUArrays.is_gpuGPUArrays.is_juliaGPUArrays.is_openclGPUArrays.is_openglGPUArrays.linear_indexGPUArrays.local_memoryGPUArrays.make_rand_numGPUArrays.mapreduce_implGPUArrays.mapreducedim_kernelGPUArrays.materializeGPUArrays.nameGPUArrays.new_contextGPUArrays.next_randGPUArrays.on_deviceGPUArrays.reduce_kernelGPUArrays.reset!GPUArrays.reshape!GPUArrays.setindex_kernel!GPUArrays.shmem_counterGPUArrays.simple_broadcast_indexGPUArrays.startvalueGPUArrays.supports_doubleGPUArrays.synchronizeGPUArrays.synchronize_threadsGPUArrays.testGPUArrays.thread_blocks_heuristicGPUArrays.threadidx_xGPUArrays.threadidx_yGPUArrays.threadidx_zGPUArrays.threadsGPUArrays.to_blocksGPUArrays.to_cartesianGPUArrays.to_cpuGPUArrays.to_deviceGPUArrays.to_indexGPUArrays.to_number_rangeGPUArrays.transpose_blocks!GPUArrays.uniformscaling_kernelGPUArrays.unsafe_reinterpretGPUArrays.update!"
},

]}
