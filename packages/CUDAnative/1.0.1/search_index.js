var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#CUDAnative.jl-1",
    "page": "Home",
    "title": "CUDAnative.jl",
    "category": "section",
    "text": "Support for compiling and executing native Julia kernels on CUDA hardware.This package provides support for compiling and executing native Julia kernels on CUDA hardware. It is a work in progress, and only works on very recent versions of Julia ."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Requirements:Julia 1.0\nCUDA toolkit\nNVIDIA driverPkg.add(\"CUDAnative\")\nusing CUDAnative\n\n# optionally\nPkg.test(\"CUDAnative\")The build step will discover the available CUDA and LLVM installations, and figure out which devices can be programmed using that set-up. It depends on CUDAdrv and LLVM being properly configured.Even if the build fails, CUDAnative.jl should always be loadable. This simplifies use by downstream packages, until there is proper language support for conditional modules. You can check whether the package has been built properly by inspecting the CUDAnative.configured global variable."
},

{
    "location": "man/usage/#",
    "page": "Usage",
    "title": "Usage",
    "category": "page",
    "text": ""
},

{
    "location": "man/usage/#Usage-1",
    "page": "Usage",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "man/usage/#Quick-start-1",
    "page": "Usage",
    "title": "Quick start",
    "category": "section",
    "text": "First you have to write the kernel function and make sure it only uses features from the CUDA-supported subset of Julia:using CUDAnative\n\nfunction kernel_vadd(a, b, c)\n    i = (blockIdx().x-1) * blockDim().x + threadIdx().x\n    c[i] = a[i] + b[i]\n    return nothing\nendUsing the @cuda macro, you can launch the kernel on a GPU of your choice:using CUDAdrv, CUDAnative, CuArrays\nusing Test\n\n# CUDAdrv functionality: generate and upload data\na = round.(rand(Float32, (3, 4)) * 100)\nb = round.(rand(Float32, (3, 4)) * 100)\nd_a = CuArray(a)\nd_b = CuArray(b)\nd_c = similar(d_a)  # output array\n\n# run the kernel and fetch results\n# syntax: @cuda [kwargs...] kernel(args...)\n@cuda threads=12 kernel_vadd(d_a, d_b, d_c)\n\n# CUDAdrv functionality: download data\n# this synchronizes the device\nc = Array(d_c)\n\n@test a+b ≈ cThis code is executed in a default, global context for the first device in your system. Similar to cudaSetDevice, you can switch devices by calling CUDAnative\'s device! function:# change the active device\ndevice!(1)\n\n# the same, but only temporarily\ndevice!(2) do\n    # ...\nendTo enable debug logging, launch Julia with the JULIA_DEBUG environment variable set to CUDAnative."
},

{
    "location": "man/usage/#Julia-support-1",
    "page": "Usage",
    "title": "Julia support",
    "category": "section",
    "text": "Only a limited subset of Julia is supported by this package. This subset is undocumented, as it is too much in flux.In general, GPU support of Julia code is determined by the language features used by the code. Several parts of the language are downright disallowed, such as calls to the Julia runtime, or garbage allocations. Other features might get reduced in strength, eg. throwing exceptions will result in a trap.If your code is incompatible with GPU execution, the compiler will mention the unsupported feature, and where the use came from:julia> foo(i) = (print(\"can\'t do this\"); return nothing)\nfoo (generic function with 1 method)\n\njulia> @cuda foo(1)\nERROR: error compiling foo: error compiling print: generic call to unsafe_write requires the runtime language featureIn addition, the JIT doesn\'t support certain modes of compilation. For example, recursive functions require a proper cached compilation, which is currently absent."
},

{
    "location": "man/usage/#CUDA-support-1",
    "page": "Usage",
    "title": "CUDA support",
    "category": "section",
    "text": "Not all of CUDA is supported, and because of time constraints the supported subset is again undocumented. The following (incomplete) list details the support and their CUDAnative.jl names. Most are implemented in intrinsics.jl, so have a look at that file for a more up to date list:Indexing: threadIdx().{x,y,z}, blockDim(), blockIdx(), gridDim(), warpsize()\nShared memory: @cuStaticSharedMemory, @cuDynamicSharedMemory\nArray type: CuDeviceArray (converted from input CuArrays, or shared memory)\nI/O: @cuprintf\nSynchronization: sync_threads\nCommunication: vote_{all,any,ballot}\nData movement: shfl_{up,down,bfly,idx}"
},

{
    "location": "man/usage/#libdevice-1",
    "page": "Usage",
    "title": "libdevice",
    "category": "section",
    "text": "In addition to the native intrinsics listed above, math functionality from libdevice is wrapped and part of CUDAnative. For now, you need to fully qualify function calls to these intrinsics, which provide similar functionality to some of the low-level math functionality of Base which would otherwise call out to libm."
},

{
    "location": "man/troubleshooting/#",
    "page": "Troubleshooting",
    "title": "Troubleshooting",
    "category": "page",
    "text": ""
},

{
    "location": "man/troubleshooting/#Troubleshooting-1",
    "page": "Troubleshooting",
    "title": "Troubleshooting",
    "category": "section",
    "text": "To increase logging verbosity of the CUDAnative compiler, launch Julia with the JULIA_DEBUG environment variable set to CUDAnative."
},

{
    "location": "man/troubleshooting/#LLVM-IR-generated-for-...-is-not-GPU-compatible-1",
    "page": "Troubleshooting",
    "title": "LLVM IR generated for ... is not GPU compatible",
    "category": "section",
    "text": "Not all of Julia is supported by CUDAnative. Several commonly-used features, like strings or exceptions, will not compile to GPU code, because of their interactions with the CPU-only runtime library.When not using GPU-incompatible language features, you might still run into this compiler error when your code contains type instabilities or other dynamic behavior. These are often easily spotted by prefixing the failing function call with one of several @device_code macros.For example, say we define and execute the following kernel:julia> kernel(a) = @inbounds a[threadId().x] = 0\nkernel (generic function with 1 method)\n\njulia> @cuda kernel(CuArray([1]))\nERROR: LLVM IR generated for Kernel(CuDeviceArray{Int64,1,CUDAnative.AS.Global}) is not GPU compatibleWhen running with JULIA_DEBUG=CUDAnative, you will get to see the actual incompatible IR constructs. Prefixing our kernel invocation with @device_code_warntype reveals our issue:julia> @device_code_warntype @cuda kernel(CuArray([1]))\nVariables:\n  a::CuDeviceArray{Int64,1,CUDAnative.AS.Global}\n  val<optimized out>\n\nBody:\n  begin\n      Core.SSAValue(1) = (Main.threadId)()::ANY\n      Core.SSAValue(2) = (Base.getproperty)(Core.SSAValue(1), :x)::ANY\n      (Base.setindex!)(a::CuDeviceArray{Int64,1,CUDAnative.AS.Global}, 0, Core.SSAValue(2))::ANY\n      return 0\n  end::Int64\nERROR: LLVM IR generated for Kernel(CuDeviceArray{Int64,1,CUDAnative.AS.Global}) is not GPU compatibleBecause of a typo, the call to threadId is untyped and returns Any (it should have been threadIdx). In the future, we expect to be able to catch such errors automatically.If you want to dump all forms of generated code to disk, for further inspection, have a look at the @device_code macro instead."
},

{
    "location": "man/troubleshooting/#Debug-info-and-line-number-information-1",
    "page": "Troubleshooting",
    "title": "Debug info and line-number information",
    "category": "section",
    "text": "LLVM\'s NVPTX back-end does not support the undocumented PTX debug format, so we cannot generate the necessary DWARF sections. This means that debugging generated code with e.g. cuda-gdb will be an unpleasant experience. Nonetheless, the PTX JIT is configured to emit debug info (which corresponds with nvcc -G) when the Julia debug info level is 2 or higher (julia -g2).We do however support emitting line number information, which is useful for other CUDA tools like cuda-memcheck. The functionality (which corresponds with nvcc -lineinfo) is enabled when the Julia debug info level is 1 (the default value). It can be disabled by passing -g0 instead."
},

{
    "location": "man/performance/#",
    "page": "Performance",
    "title": "Performance",
    "category": "page",
    "text": ""
},

{
    "location": "man/performance/#Performance-1",
    "page": "Performance",
    "title": "Performance",
    "category": "section",
    "text": "GPU code written in CUDAnative.jl can be as fast or even outperform CUDA C compiled with nvcc (on the condition that the same hardware features are used). This section will describe how to do so, and what to be careful about."
},

{
    "location": "man/performance/#Profiling-1",
    "page": "Performance",
    "title": "Profiling",
    "category": "section",
    "text": "When optimizing code, it is important to know what to optimize. Luckily, the CUDA toolkit ships an excellent profiler, nvprof, with nvvp as the Eclipse-based UI. The CUDAnative compiler is fully compatible with these tools, and generates the required line number information to debug performance issues. To generate line number information, invoke Julia with the command-line option -g1 (the default option). Using -g2 puts the PTX JIT in debug mode, which significantly lowers performance of GPU code and currently does not improve debugging.Traces collected with these tools might be very large and sparse, because they capture the entire application including e.g. kernel compilation or initial data uploads. To avoid this, run the above profilers with the option \"Start profiling at application start\" disabled (--profile-from-start off with nvprof), make your application perform a warm-up iteration, and wrap subsequent iterations with CUDAdrv.@profile. This macro instructs any active profiler to start collecting information, resulting in much more focused traces.For true source-level profiling akin to Base.@profile, look at nvvp\'s PC Sampling View (requires compute capability >= 5.2, CUDA >= 7.5). In the future, we might have a CUDAnative.@profile offering similar functionality, using the NVIDIA CUPTI library."
},

{
    "location": "man/performance/#Optimizing-1",
    "page": "Performance",
    "title": "Optimizing",
    "category": "section",
    "text": "This section is a WIP. Some things to consider:Float64 is expensive, but literal floats are Float64. Use ...f0 or cast.\nSame for integers; although the performance hit is small, it increases register pressure."
},

{
    "location": "man/hacking/#",
    "page": "Hacking",
    "title": "Hacking",
    "category": "page",
    "text": ""
},

{
    "location": "man/hacking/#Hacking-1",
    "page": "Hacking",
    "title": "Hacking",
    "category": "section",
    "text": ""
},

{
    "location": "man/hacking/#Generated-functions-1",
    "page": "Hacking",
    "title": "Generated functions",
    "category": "section",
    "text": "Generated functions are used heavily in CUDAnative.jl, in combination with LLVM.jl, to generate type-specialized code and IR. If evaluating the generator results in an error, Julia generates a dynamic call to the generator for you to inspect the error at run-time. This is a problem in the world of GPUs, where dynamic calls are prohibited. A band-aid is to print the exception during inference:diff --git a/base/inference.jl b/base/inference.jl\nindex 6443665676..b03d78ddaa 100644\n--- a/base/inference.jl\n+++ b/base/inference.jl\n@@ -2430,7 +2430,10 @@ function typeinf_frame(linfo::MethodInstance, caller, optimize::Bool, cached::Bo\n             try\n                 # user code might throw errors – ignore them\n                 src = get_staged(linfo)\n-            catch\n+            catch ex\n+                println(\"WARNING: An error occurred during generated function execution.\")\n+                println(ex)\n+                ccall(:jlbacktrace, Void, ())\n                 return nothing\n             end\n         else"
},

{
    "location": "man/hacking/#Adding-intrinsics-1",
    "page": "Hacking",
    "title": "Adding intrinsics",
    "category": "section",
    "text": "Adding intrinsics to CUDAnative.jl can be relatively convoluted, depending on the type of intrinsic. Most of the boil down to inlining a snippet of LLVM IR, using llvmcall (or ccall with the llvmcall calling convention). For more complex code, use LLVM.jl to build the IR string."
},

{
    "location": "man/hacking/#libdevice-intrinsics-1",
    "page": "Hacking",
    "title": "libdevice intrinsics",
    "category": "section",
    "text": "These intrinsics are represented by function calls to libdevice. Most of them should already be covered. There\'s a convenience macro, @wrap, simplifying the job of adding and exporting intrinsics, and converting arguments and return values. See the documentation of the macro for more details, and look at src/device/libdevice.jl for examples."
},

{
    "location": "man/hacking/#LLVM-back-end-intrinsics-1",
    "page": "Hacking",
    "title": "LLVM back-end intrinsics",
    "category": "section",
    "text": "Calls to functions like llvm.nvvm.barrier0 are backed the PTX LLVM back-end, and can be wrapped using ccall with the llvmcall calling convention. For more complex intrinsics, or when you\'re not actually calling an intrinsic function, you can still use @wrap."
},

{
    "location": "man/hacking/#Inline-PTX-assembly-1",
    "page": "Hacking",
    "title": "Inline PTX assembly",
    "category": "section",
    "text": "When there\'s no corresponding libdevice function or PTX back-end intrinsic exposing the required functionality, you can use inline PTX assembly via llvmcall. This requires you to embed the PTX assembly in LLVM IR, which is often messy.If the source of the assembly instructions is CUDA C code, you simplify this task by first compiling the CUDA code using Clang, and adapting the resulting LLVM IR for use within llvmcall. For example, extracting the following function definition from the CUDA SDK:__device__ unsigned int __ballot(int a)\n{\n  int result;\n  asm __volatile__ (\"{ \\n\\t\"\n        \".reg .pred \\t%%p1; \\n\\t\"\n        \"setp.ne.u32 \\t%%p1, %1, 0; \\n\\t\"\n        \"vote.ballot.b32 \\t%0, %%p1; \\n\\t\"\n        \"}\" : \"=r\"(result) : \"r\"(a));\n  return result;\n}We can generate the following LLVM IR by executing clang++ -Xclang -fcuda-is-device -S -emit-llvm -target nvptx64 ballot.cu -o - (you might need to add some CUDA boilerplate):define i32 @_Z8__balloti(i32 %a) #0 {\n  %1 = alloca i32, align 4\n  %result = alloca i32, align 4\n  store i32 %a, i32* %1, align 4\n  %2 = load i32, i32* %1, align 4\n  %3 = call i32 asm sideeffect \"{ \\0A\\09.reg .pred \\09%p1; \\0A\\09setp.ne.u32 \\09%p1, $1, 0; \\0A\\09vote.ballot.b32 \\09$0, %p1; \\0A\\09}\", \"=r,r\"(i32 %2) #1, !srcloc !1\n  store i32 %3, i32* %result, align 4\n  %4 = load i32, i32* %result, align 4\n  ret i32 %4\n}Finally, we use LLVM.jl\'s @asmcall macro to inline this assembly and call it:function vote_ballot(pred::Bool)\n    return @asmcall(\n        \"\"\"{\n               .reg .pred %p1;\n               setp.ne.u32 %p1, \\$1, 0;\n               vote.ballot.b32 \\$0, %p1;\n           }\"\"\", \"=r,r\", true,\n        UInt32, Tuple{Int32}, convert(Int32, pred))\nend"
},

{
    "location": "man/hacking/#Other-functionality-1",
    "page": "Hacking",
    "title": "Other functionality",
    "category": "section",
    "text": "For other functionality, like shared memory, or when some additional management is required, like storing a global variable for printf\'s formatting string, you should use LLVM.jl to build the IR code instead of hacking strings together. As this doesn\'t touch global state, you can even do so from a @generated function. Do take care however to use Julia\'s LLVM context for all operations."
},

{
    "location": "lib/compilation/#",
    "page": "Compilation & Execution",
    "title": "Compilation & Execution",
    "category": "page",
    "text": ""
},

{
    "location": "lib/compilation/#CUDAnative.@cuda",
    "page": "Compilation & Execution",
    "title": "CUDAnative.@cuda",
    "category": "macro",
    "text": "@cuda [kwargs...] func(args...)\n\nHigh-level interface for executing code on a GPU. The @cuda macro should prefix a call, with func a callable function or object that should return nothing. It will be compiled to a CUDA function upon first use, and to a certain extent arguments will be converted and managed automatically using cudaconvert. Finally, a call to CUDAdrv.cudacall is performed, scheduling a kernel launch on the current CUDA context.\n\nSeveral keyword arguments are supported that influence kernel compilation and execution. For more information, refer to the documentation of respectively cufunction and CUDAnative.Kernel\n\nThe underlying operations (argument conversion, kernel compilation, kernel call) can be performed explicitly when more control is needed, e.g. to reflect on the resource usage of a kernel to determine the launch configuration:\n\nargs = ...\nGC.@preserve args begin\n    kernel_args = cudaconvert.(args)\n    kernel_tt = Tuple{Core.Typeof.(kernel_args)...}\n    kernel = cufunction(f, kernel_tt; compilation_kwargs)\n    kernel(kernel_args...; launch_kwargs)\nend\n\n\n\n\n\n"
},

{
    "location": "lib/compilation/#CUDAnative.cufunction",
    "page": "Compilation & Execution",
    "title": "CUDAnative.cufunction",
    "category": "function",
    "text": "cufunction(f, tt=Tuple{}; kwargs...)\n\nLow-level interface to compile a function invocation for the currently-active GPU, returning a callable kernel object. For a higher-level interface, use @cuda.\n\nThe following keyword arguments are supported:\n\nminthreads: the required number of threads in a thread block.\nmaxthreads: the maximum number of threads in a thread block.\nblockspersm: a minimum number of thread blocks to be scheduled on a single multiprocessor.\nmaxregs: the maximum number of registers to be allocated to a single thread (only supported on LLVM 4.0+)\n\nThe output of this function is automatically cached, i.e. you can simply call cufunction in a hot path without degrading performance. New code will be generated automatically, when when function changes, or when different types or keyword arguments are provided.\n\n\n\n\n\n"
},

{
    "location": "lib/compilation/#CUDAnative.Kernel",
    "page": "Compilation & Execution",
    "title": "CUDAnative.Kernel",
    "category": "type",
    "text": "(::Kernel)(args...; kwargs...)\n\nLow-level interface to call a compiled kernel, passing GPU-compatible arguments in args. For a higher-level interface, use @cuda.\n\nThe following keyword arguments are supported:\n\nthreads (defaults to 1)\nblocks (defaults to 1)\nshmem (defaults to 0)\nstream (defaults to the default stream)\n\n\n\n\n\n"
},

{
    "location": "lib/compilation/#CUDAnative.compile",
    "page": "Compilation & Execution",
    "title": "CUDAnative.compile",
    "category": "function",
    "text": "compile(dev::CuDevice, f, tt; kwargs...)\n\nCompile a function f invoked with types tt for device dev, returning the compiled function module respectively of type CuFuction and CuModule.\n\nFor a list of supported keyword arguments, refer to the documentation of cufunction.\n\n\n\n\n\n"
},

{
    "location": "lib/compilation/#CUDAnative.cudaconvert",
    "page": "Compilation & Execution",
    "title": "CUDAnative.cudaconvert",
    "category": "function",
    "text": "cudaconvert(x)\n\nThis function is called for every argument to be passed to a kernel, allowing it to be converted to a GPU-friendly format. By default, the function does nothing and returns the input object x as-is.\n\nDo not add methods to this function, but instead extend the underlying Adapt.jl package and register methods for the the CUDAnative.Adaptor type.\n\n\n\n\n\n"
},

{
    "location": "lib/compilation/#CUDAnative.nearest_warpsize",
    "page": "Compilation & Execution",
    "title": "CUDAnative.nearest_warpsize",
    "category": "function",
    "text": "nearest_warpsize(dev::CuDevice, threads::Integer)\n\nReturn the nearest number of threads that is a multiple of the warp size of a device.\n\nThis is a common requirement, eg. when using shuffle intrinsics.\n\n\n\n\n\n"
},

{
    "location": "lib/compilation/#Compilation-and-Execution-1",
    "page": "Compilation & Execution",
    "title": "Compilation & Execution",
    "category": "section",
    "text": "CUDAnative.@cuda\nCUDAnative.cufunction\nCUDAnative.Kernel\nCUDAnative.compile\nCUDAnative.cudaconvert\nCUDAnative.nearest_warpsize"
},

{
    "location": "lib/compilation/#CUDAnative.device!",
    "page": "Compilation & Execution",
    "title": "CUDAnative.device!",
    "category": "function",
    "text": "device!(dev)\n\nSets dev as the current active device for the calling host thread. Devices can be specified by integer id, or as a CuDevice. This is intended to be a low-cost operation, only performing significant work when calling it for the first time for each device.\n\nIf your library or code needs to perform an action when the active device changes, add a callback of the signature (::CuDevice, ::CuContext) to the device!_listeners set.\n\n\n\n\n\ndevice!(f, dev)\n\nSets the active device for the duration of f.\n\n\n\n\n\n"
},

{
    "location": "lib/compilation/#Devices-1",
    "page": "Compilation & Execution",
    "title": "Devices",
    "category": "section",
    "text": "CUDAnative.device!"
},

{
    "location": "lib/reflection/#",
    "page": "Reflection",
    "title": "Reflection",
    "category": "page",
    "text": ""
},

{
    "location": "lib/reflection/#CUDAnative.code_llvm",
    "page": "Reflection",
    "title": "CUDAnative.code_llvm",
    "category": "function",
    "text": "code_llvm([io], f, types; optimize=true, cap::VersionNumber, kernel=true,\n                          dump_module=false, strip_ir_metadata=true)\n\nPrints the device LLVM IR generated for the method matching the given generic function and type signature to io which defaults to stdout. The IR is optimized according to optimize (defaults to true), which includes entry-point specific optimizations if kernel is set (defaults to false). The device capability cap to generate code for defaults to the current active device\'s capability, or v\"2.0\" if there is no such active context. The entire module, including headers and other functions, is dumped if dump_module is set (defaults to false). Finally, setting strip_ir_metadata removes all debug metadata (defaults to true).\n\nSee also: @device_code_llvm, InteractiveUtils.code_llvm\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.code_ptx",
    "page": "Reflection",
    "title": "CUDAnative.code_ptx",
    "category": "function",
    "text": "code_ptx([io], f, types; cap::VersionNumber, kernel=false, strip_ir_metadata=true)\n\nPrints the PTX assembly generated for the method matching the given generic function and type signature to io which defaults to stdout. The device capability cap to generate code for defaults to the current active device\'s capability, or v\"2.0\" if there is no such active context. The optional kernel parameter indicates whether the function in question is an entry-point function, or a regular device function. Finally, setting strip_ir_metadata removes all debug metadata (defaults to true).\n\nSee also: @device_code_ptx\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.code_sass",
    "page": "Reflection",
    "title": "CUDAnative.code_sass",
    "category": "function",
    "text": "code_sass([io], f, types, cap::VersionNumber)\n\nPrints the SASS code generated for the method matching the given generic function and type signature to io which defaults to stdout. The device capability cap to generate code for defaults to the current active device\'s capability, or v\"2.0\" if there is no such active context. The method needs to be a valid entry-point kernel, eg. it should not return any values.\n\nSee also: @device_code_sass\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#Reflection-1",
    "page": "Reflection",
    "title": "Reflection",
    "category": "section",
    "text": "Because of using a different compilation toolchain, CUDAnative.jl offers counterpart functions to the code_ functionality from Base:CUDAnative.code_llvm\nCUDAnative.code_ptx\nCUDAnative.code_sass"
},

{
    "location": "lib/reflection/#CUDAnative.@device_code_lowered",
    "page": "Reflection",
    "title": "CUDAnative.@device_code_lowered",
    "category": "macro",
    "text": "@device_code_lowered ex\n\nEvaluates the expression ex and returns the result of InteractiveUtils.code_lowered for every compiled CUDA kernel.\n\nSee also: InteractiveUtils.@code_lowered\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.@device_code_typed",
    "page": "Reflection",
    "title": "CUDAnative.@device_code_typed",
    "category": "macro",
    "text": "@device_code_typed ex\n\nEvaluates the expression ex and returns the result of InteractiveUtils.code_typed for every compiled CUDA kernel.\n\nSee also: InteractiveUtils.@code_typed\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.@device_code_warntype",
    "page": "Reflection",
    "title": "CUDAnative.@device_code_warntype",
    "category": "macro",
    "text": "@device_code_warntype [io::IO=stdout] ex\n\nEvaluates the expression ex and prints the result of InteractiveUtils.code_warntype to io for every compiled CUDA kernel.\n\nSee also: InteractiveUtils.@code_warntype\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.@device_code_llvm",
    "page": "Reflection",
    "title": "CUDAnative.@device_code_llvm",
    "category": "macro",
    "text": "@device_code_llvm [io::IO=stdout, ...] ex\n\nEvaluates the expression ex and prints the result of InteractiveUtils.code_llvm to io for every compiled CUDA kernel. For other supported keywords, see CUDAnative.code_llvm.\n\nSee also: InteractiveUtils.@code_llvm\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.@device_code_ptx",
    "page": "Reflection",
    "title": "CUDAnative.@device_code_ptx",
    "category": "macro",
    "text": "@device_code_ptx [io::IO=stdout, ...] ex\n\nEvaluates the expression ex and prints the result of CUDAnative.code_ptx to io for every compiled CUDA kernel. For other supported keywords, see CUDAnative.code_ptx.\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.@device_code_sass",
    "page": "Reflection",
    "title": "CUDAnative.@device_code_sass",
    "category": "macro",
    "text": "@device_code_sass [io::IO=stdout, ...] ex\n\nEvaluates the expression ex and prints the result of CUDAnative.code_sass to io for every compiled CUDA kernel. For other supported keywords, see CUDAnative.code_sass.\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.@device_code",
    "page": "Reflection",
    "title": "CUDAnative.@device_code",
    "category": "macro",
    "text": "@device_code dir::AbstractString=... [...] ex\n\nEvaluates the expression ex and dumps all intermediate forms of code to the directory dir.\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#Convenience-macros-1",
    "page": "Reflection",
    "title": "Convenience macros",
    "category": "section",
    "text": "For ease of use, CUDAnative.jl also implements @device_code_ macros wrapping the above reflection functionality. These macros evaluate the expression argument, while tracing compilation and finally printing or returning the code for every invoked CUDA kernel. Do note that this evaluation can have side effects, as opposed to similarly-named @code_ macros in Base which are free of side effects.CUDAnative.@device_code_lowered\nCUDAnative.@device_code_typed\nCUDAnative.@device_code_warntype\nCUDAnative.@device_code_llvm\nCUDAnative.@device_code_ptx\nCUDAnative.@device_code_sass\nCUDAnative.@device_code"
},

{
    "location": "lib/reflection/#CUDAnative.version",
    "page": "Reflection",
    "title": "CUDAnative.version",
    "category": "function",
    "text": "version(k::Kernel)\n\nQueries the PTX and SM versions a kernel was compiled for. Returns a named tuple.\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.maxthreads",
    "page": "Reflection",
    "title": "CUDAnative.maxthreads",
    "category": "function",
    "text": "maxthreads(k::Kernel)\n\nQueries the maximum amount of threads a kernel can use in a single block.\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.registers",
    "page": "Reflection",
    "title": "CUDAnative.registers",
    "category": "function",
    "text": "registers(k::Kernel)\n\nQueries the register usage of a kernel.\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#CUDAnative.memory",
    "page": "Reflection",
    "title": "CUDAnative.memory",
    "category": "function",
    "text": "memory(k::Kernel)\n\nQueries the local, shared and constant memory usage of a compiled kernel in bytes. Returns a named tuple.\n\n\n\n\n\n"
},

{
    "location": "lib/reflection/#Version-and-related-queries-1",
    "page": "Reflection",
    "title": "Version and related queries",
    "category": "section",
    "text": "CUDAnative.version\nCUDAnative.maxthreads\nCUDAnative.registers\nCUDAnative.memory"
},

{
    "location": "lib/device/intrinsics/#",
    "page": "Intrinsics",
    "title": "Intrinsics",
    "category": "page",
    "text": ""
},

{
    "location": "lib/device/intrinsics/#Intrinsics-1",
    "page": "Intrinsics",
    "title": "Intrinsics",
    "category": "section",
    "text": "This section lists the package\'s public functionality that corresponds to special CUDA functions to be used in device code. It is loosely organized according to the C language extensions appendix from the CUDA C programming guide. For more information about certain intrinsics, refer to the aforementioned NVIDIA documentation."
},

{
    "location": "lib/device/intrinsics/#CUDAnative.gridDim",
    "page": "Intrinsics",
    "title": "CUDAnative.gridDim",
    "category": "function",
    "text": "gridDim()::CuDim3\n\nReturns the dimensions of the grid.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.blockIdx",
    "page": "Intrinsics",
    "title": "CUDAnative.blockIdx",
    "category": "function",
    "text": "blockIdx()::CuDim3\n\nReturns the block index within the grid.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.blockDim",
    "page": "Intrinsics",
    "title": "CUDAnative.blockDim",
    "category": "function",
    "text": "blockDim()::CuDim3\n\nReturns the dimensions of the block.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.threadIdx",
    "page": "Intrinsics",
    "title": "CUDAnative.threadIdx",
    "category": "function",
    "text": "threadIdx()::CuDim3\n\nReturns the thread index within the block. \n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.warpsize",
    "page": "Intrinsics",
    "title": "CUDAnative.warpsize",
    "category": "function",
    "text": "warpsize()::UInt32\n\nReturns the warp size (in threads).\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#Indexing-and-Dimensions-1",
    "page": "Intrinsics",
    "title": "Indexing and Dimensions",
    "category": "section",
    "text": "CUDAnative.gridDim\nCUDAnative.blockIdx\nCUDAnative.blockDim\nCUDAnative.threadIdx\nCUDAnative.warpsize"
},

{
    "location": "lib/device/intrinsics/#Memory-Types-1",
    "page": "Intrinsics",
    "title": "Memory Types",
    "category": "section",
    "text": ""
},

{
    "location": "lib/device/intrinsics/#CUDAnative.@cuStaticSharedMem",
    "page": "Intrinsics",
    "title": "CUDAnative.@cuStaticSharedMem",
    "category": "macro",
    "text": "@cuStaticSharedMem(T::Type, dims) -> CuDeviceArray{T,AS.Shared}\n\nGet an array of type T and dimensions dims (either an integer length or tuple shape) pointing to a statically-allocated piece of shared memory. The type should be statically inferable and the dimensions should be constant, or an error will be thrown and the generator function will be called dynamically.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.@cuDynamicSharedMem",
    "page": "Intrinsics",
    "title": "CUDAnative.@cuDynamicSharedMem",
    "category": "macro",
    "text": "@cuDynamicSharedMem(T::Type, dims, offset::Integer=0) -> CuDeviceArray{T,AS.Shared}\n\nGet an array of type T and dimensions dims (either an integer length or tuple shape) pointing to a dynamically-allocated piece of shared memory. The type should be statically inferable or an error will be thrown and the generator function will be called dynamically.\n\nNote that the amount of dynamic shared memory needs to specified when launching the kernel.\n\nOptionally, an offset parameter indicating how many bytes to add to the base shared memory pointer can be specified. This is useful when dealing with a heterogeneous buffer of dynamic shared memory; in the case of a homogeneous multi-part buffer it is preferred to use view.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#Shared-Memory-1",
    "page": "Intrinsics",
    "title": "Shared Memory",
    "category": "section",
    "text": "CUDAnative.@cuStaticSharedMem\nCUDAnative.@cuDynamicSharedMem"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.sync_threads",
    "page": "Intrinsics",
    "title": "CUDAnative.sync_threads",
    "category": "function",
    "text": "sync_threads()\n\nWaits until all threads in the thread block have reached this point and all global and shared memory accesses made by these threads prior to sync_threads() are visible to all threads in the block.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.sync_warp",
    "page": "Intrinsics",
    "title": "CUDAnative.sync_warp",
    "category": "function",
    "text": "sync_warp(mask::Integer=0xffffffff)\n\nWaits threads in the warp, selected by means of the bitmask mask, have reached this point and all global and shared memory accesses made by these threads prior to sync_warp() are visible to those threads in the warp. The default value for mask selects all threads in the warp.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#Synchronization-1",
    "page": "Intrinsics",
    "title": "Synchronization",
    "category": "section",
    "text": "CUDAnative.sync_threads\nCUDAnative.sync_warp"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.vote_all",
    "page": "Intrinsics",
    "title": "CUDAnative.vote_all",
    "category": "function",
    "text": "vote_all(predicate::Bool)\n\nEvaluate predicate for all active threads of the warp and return non-zero if and only if predicate evaluates to non-zero for all of them.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.vote_any",
    "page": "Intrinsics",
    "title": "CUDAnative.vote_any",
    "category": "function",
    "text": "vote_any(predicate::Bool)\n\nEvaluate predicate for all active threads of the warp and return non-zero if and only if predicate evaluates to non-zero for any of them.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.vote_ballot",
    "page": "Intrinsics",
    "title": "CUDAnative.vote_ballot",
    "category": "function",
    "text": "vote_ballot(predicate::Bool)\n\nEvaluate predicate for all active threads of the warp and return an integer whose Nth bit is set if and only if predicate evaluates to non-zero for the Nth thread of the warp and the Nth thread is active.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#Warp-Vote-1",
    "page": "Intrinsics",
    "title": "Warp Vote",
    "category": "section",
    "text": "The warp vote functions allow the threads of a given warp to perform a reduction-and-broadcast operation. These functions take as input a boolean predicate from each thread in the warp and evaluate it. The results of that evaluation are combined (reduced) across the active threads of the warp in one different ways, broadcasting a single return value to each participating thread.CUDAnative.vote_all\nCUDAnative.vote_any\nCUDAnative.vote_ballot"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.shfl",
    "page": "Intrinsics",
    "title": "CUDAnative.shfl",
    "category": "function",
    "text": "shfl(val, lane::Integer, width::Integer=32)\n\nShuffle a value from a directly indexed lane lane.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.shfl_up",
    "page": "Intrinsics",
    "title": "CUDAnative.shfl_up",
    "category": "function",
    "text": "shfl_up(val, delta::Integer, width::Integer=32)\n\nShuffle a value from a lane with lower ID relative to caller.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.shfl_down",
    "page": "Intrinsics",
    "title": "CUDAnative.shfl_down",
    "category": "function",
    "text": "shfl_down(val, delta::Integer, width::Integer=32)\n\nShuffle a value from a lane with higher ID relative to caller.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.shfl_xor",
    "page": "Intrinsics",
    "title": "CUDAnative.shfl_xor",
    "category": "function",
    "text": "shfl_xor(val, mask::Integer, width::Integer=32)\n\nShuffle a value from a lane based on bitwise XOR of own lane ID with mask.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.shfl_sync",
    "page": "Intrinsics",
    "title": "CUDAnative.shfl_sync",
    "category": "function",
    "text": "shfl_sync(val, lane::Integer, width::Integer=32, threadmask::UInt32=0xffffffff)\n\nShuffle a value from a directly indexed lane lane. The default value for threadmask performs the shuffle on all threads in the warp.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.shfl_up_sync",
    "page": "Intrinsics",
    "title": "CUDAnative.shfl_up_sync",
    "category": "function",
    "text": "shfl_up_sync(val, delta::Integer, width::Integer=32, threadmask::UInt32=0xffffffff)\n\nShuffle a value from a lane with lower ID relative to caller. The default value for threadmask performs the shuffle on all threads in the warp.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.shfl_down_sync",
    "page": "Intrinsics",
    "title": "CUDAnative.shfl_down_sync",
    "category": "function",
    "text": "shfl_down_sync(val, delta::Integer, width::Integer=32, threadmask::UInt32=0xffffffff)\n\nShuffle a value from a lane with higher ID relative to caller. The default value for threadmask performs the shuffle on all threads in the warp.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.shfl_xor_sync",
    "page": "Intrinsics",
    "title": "CUDAnative.shfl_xor_sync",
    "category": "function",
    "text": "shfl_xor_sync(val, mask::Integer, width::Integer=32, threadmask::UInt32=0xffffffff)\n\nShuffle a value from a lane based on bitwise XOR of own lane ID with mask. The default value for threadmask performs the shuffle on all threads in the warp.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#Warp-Shuffle-1",
    "page": "Intrinsics",
    "title": "Warp Shuffle",
    "category": "section",
    "text": "CUDAnative.shfl\nCUDAnative.shfl_up\nCUDAnative.shfl_down\nCUDAnative.shfl_xorIf using CUDA 9.0, and PTX ISA 6.0 is supported, synchronizing versions of these intrinsics are available as well:CUDAnative.shfl_sync\nCUDAnative.shfl_up_sync\nCUDAnative.shfl_down_sync\nCUDAnative.shfl_xor_sync"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.@cuprintf",
    "page": "Intrinsics",
    "title": "CUDAnative.@cuprintf",
    "category": "macro",
    "text": "Print a formatted string in device context on the host standard output:\n\n@cuprintf(\"%Fmt\", args...)\n\nNote that this is not a fully C-compliant printf implementation; see the CUDA documentation for supported options and inputs.\n\nAlso beware that it is an untyped, and unforgiving printf implementation. Type widths need to match, eg. printing a 64-bit Julia integer requires the %ld formatting string.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#Formatted-Output-1",
    "page": "Intrinsics",
    "title": "Formatted Output",
    "category": "section",
    "text": "CUDAnative.@cuprintf"
},

{
    "location": "lib/device/intrinsics/#CUDAnative.@cuassert",
    "page": "Intrinsics",
    "title": "CUDAnative.@cuassert",
    "category": "macro",
    "text": "@assert cond [text]\n\nSignal assertion failure to the CUDA driver if cond is false. Preferred syntax for writing assertions, mimicking Base.@assert. Message text is optionally displayed upon assertion failure.\n\nwarning: Warning\nA failed assertion will crash the GPU, so use sparingly as a debugging tool. Furthermore, the assertion might be disabled at various optimization levels, and thus should not cause any side-effects.\n\n\n\n\n\n"
},

{
    "location": "lib/device/intrinsics/#Assertions-1",
    "page": "Intrinsics",
    "title": "Assertions",
    "category": "section",
    "text": "CUDAnative.@cuassert"
},

{
    "location": "lib/device/array/#",
    "page": "Arrays",
    "title": "Arrays",
    "category": "page",
    "text": ""
},

{
    "location": "lib/device/array/#CUDAnative.CuDeviceArray",
    "page": "Arrays",
    "title": "CUDAnative.CuDeviceArray",
    "category": "type",
    "text": "CuDeviceArray(dims, ptr)\nCuDeviceArray{T}(dims, ptr)\nCuDeviceArray{T,A}(dims, ptr)\nCuDeviceArray{T,A,N}(dims, ptr)\n\nConstruct an N-dimensional dense CUDA device array with element type T wrapping a pointer, where N is determined from the length of dims and T is determined from the type of ptr. dims may be a single scalar, or a tuple of integers corresponding to the lengths in each dimension). If the rank N is supplied explicitly as in Array{T,N}(dims), then it must match the length of dims. The same applies to the element type T, which should match the type of the pointer ptr.\n\n\n\n\n\n"
},

{
    "location": "lib/device/array/#CUDAnative.ldg",
    "page": "Arrays",
    "title": "CUDAnative.ldg",
    "category": "function",
    "text": "ldg(A, i)\n\nIndex the array A with the linear index i, but loads the value through the read-only texture cache for improved cache behavior. You should make sure the array A, or any aliased instance, is not written to for the duration of the current kernel.\n\nThis function can only be used on devices with compute capability 3.5 or higher.\n\nSee also: Base.getindex\n\n\n\n\n\n"
},

{
    "location": "lib/device/array/#Arrays-1",
    "page": "Arrays",
    "title": "Arrays",
    "category": "section",
    "text": "CUDAnative provides a primitive, lightweight array type to manage GPU data organized in an plain, dense fashion. This is the device-counterpart to the CuArray from CuArrays.jl, and implements (part of) the array interface as well as other functionality for use on the GPU:CUDAnative.CuDeviceArray\nCUDAnative.ldg"
},

{
    "location": "lib/device/libdevice/#",
    "page": "libdevice",
    "title": "libdevice",
    "category": "page",
    "text": ""
},

{
    "location": "lib/device/libdevice/#libdevice-1",
    "page": "libdevice",
    "title": "libdevice",
    "category": "section",
    "text": "CUDAnative.jl provides wrapper functions for the mathematical routines in libdevice, CUDA\'s device math library. Many of these functions implement an interface familiar to similar functions in Base, but it is currently impossible to transparently dispatch to these device functions. As a consequence, users should prefix calls to math functions (eg. sin or pow) with the CUDAnative module name.WIP"
},

]}
