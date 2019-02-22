var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ParallelProcessingTools.jl-1",
    "page": "Readme",
    "title": "ParallelProcessingTools.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Codecov)This Julia package provides some tools to ease multithreaded and distributed programming, especially for more complex use cases and when using multiple processes with multiple threads on each process.This package follows the SPMD (Single Program Multiple Data) paradigm (like, e.g MPI, Cuda, OpenCL and DistributedArrays.SPMD): Run the same code on every execution unit (process or thread) and make the code responsible for figuring out which part of the data it should process. This differs from the approach of Base.Threads.@threads and Distributed.@distributed. SPMD is more appropriate for complex cases that the latter do not handle well (e.g. because some initial setup is required on each execution unit and/or iteration scheme over the data is more complex, control over SIMD processing is required, etc.).This package also implements thread-local variables and tooling to handle non-thread-safe code.Note: Some features may not work on Windows, currently."
},

{
    "location": "#Work-partitions-1",
    "page": "Readme",
    "title": "Work partitions",
    "category": "section",
    "text": "workpart partitions an AbstractArray across a a specified set of workers (i.e. processes or threads). E.g.A = rand(100)\nworkpart(A, 4:7, 5) == view(A, 26:50)returns a views into the array that worker 5 out of a set or workers 4:7 will be responsible for. The intended usage isusing Distributed, Base.Threads\n@everywhere data = rand(1000)\n@everywhere procsel = workers()\n@onprocs procsel begin\n    sub_A = workpart(data, procsel, myid())\n    threadsel = allthreads()\n    @onthreads threadsel begin\n        # ... some initialization, create local buffers, etc.\n        idxs = workpart(eachindex(sub_A), threadsel, threadid())\n        for i in idxs\n            # ... A[i] ...\n        end\n    end\nendsee below for a full example.If data is a DistributedArrays.DArray, then DistributedArrays.localpart(data) should be used instead of workpart(data, workers(), myid())."
},

{
    "location": "#Thread-safety-1",
    "page": "Readme",
    "title": "Thread-safety",
    "category": "section",
    "text": "Use @critical to mark non thread-safe code, e.g. for logging. For example@onthreads allthreads() begin\n    @critical @info Base.Threads.threadid()\nendwould crash Julia without @critical because @info is not thread-safe.Note: This doesn\'t always work for multithreaded code on other processes yet."
},

{
    "location": "#Thread-local-variables-1",
    "page": "Readme",
    "title": "Thread-local variables",
    "category": "section",
    "text": "Thread-local variable can be created and initialized viatl = ThreadLocal(0.0)The API is the similar to Ref: tl[] gets the value of tl for the current thread, tl[] = 4.2 sets the value for the current thread. getallvalues(tl) returns the values for all threads as a vector, and can only be called from single-threaded code."
},

{
    "location": "#Multithreaded-code-execution-1",
    "page": "Readme",
    "title": "Multithreaded code execution",
    "category": "section",
    "text": "The macro @onthreads threadsel expr will run the code in expr on the threads in threadsel (typically a range of thread IDs). For convenience, the package exports allthreads() = 1:nthreads(). Here\'s a simple example on how to use thread-local variables and @onthreads to sum up numbers in parallel:tlsum = ThreadLocal(0.0)\ndata = rand(100)\n@onthreads allthreads() begin\n    tlsum[] = sum(workpart(data, allthreads(), Base.Threads.threadid()))\nend\nsum(getallvalues(tlsum)) ≈ sum(data)@onthreads forwards exceptions thrown by the code in expr to the caller (in contrast to, Base.Threads.@threads, that will currently print an exception but not forward it, so when using @threads program execution simply continues after a failure in multithreaded code).Note: Julia can currently run only one function on multiple threads at the same time (this restriction is likely to disappear in the the future). So even if threadsel does not include all threads, the rest of the threads will be idle but blocked and cannot be used to run other code in parallel. However, the ability to run on a subset of the available threads is still useful to measure the scaling behavior of multithreaded code (without restarting Julia with a different value for $JULIA_NUM_THREADS)."
},

{
    "location": "#Multiprocess-code-execution-1",
    "page": "Readme",
    "title": "Multiprocess code execution",
    "category": "section",
    "text": "The macro @onprocs procsel expr will run the code in expr on the processes in procsel (typically an array of process IDs). @onprocs returns a vector with the result of expr on each process and will wait until all the results are available (but may of course be wrapped in @async). A simple example to get the process ID on each worker process:using Distributed\naddprocs(2)\nworkers() == @onprocs workers() myid()Note: If the data can be expressed in terms of a DistributedArrays.DArray, it may be more appropriate and convenient to use the multiprocess execution tooling available in the package DistributedArrays (possibly combined with ParallelProcessingTools.@onthreads)."
},

{
    "location": "#Creating-multithreaded-workers-1",
    "page": "Readme",
    "title": "Creating multithreaded workers",
    "category": "section",
    "text": "Julia currently doesn\'t provide an easy way to start multithreaded worker instances. ParallelProcessingTools provides a script mtjulia.sh (currently Linux-only) that will start Julia with $JULIA_NUM_THREADS set to a suitable value for each worker host (currently the number of physical processes on one NUMA node). mtjulia_exe() will return the absolute path to mtjulia.sh. So multithreaded workers can be spawned (via SSH) like this:addprocs([hostname1, ...], exename = mtjulia_exe())"
},

{
    "location": "#Example-use-case:-1",
    "page": "Readme",
    "title": "Example use case:",
    "category": "section",
    "text": "As a simple real-world use case, let\'s histogram distributed data on multiple processes and threads:Set up a cluster of multithreaded workers and load the required packages:using Distributed, ParallelProcessingTools\naddprocs([\"hostname1\", ...], exename = mtjulia_exe())\n@everywhere using ParallelProcessingTools, Base.Threads,\n    DistributedArrays, Statistics, StatsBaseCreate some distributed data and check how the data is distributed:data = drandn(10^8)\nprocsel = procs(data)\n@onprocs procsel size(localpart(data))Check the number of threads on each worker holding a part of the data:@onprocs procsel nthreads()Create histograms in parallel on all threads of all workers and merge:proc_hists = @onprocs procsel begin\n    local_data = localpart(data)\n    tl_hist = ThreadLocal(Histogram((-6:0.1:6,), :left))\n    @onthreads allthreads() begin\n        data_for_this_thread = workpart(local_data, allthreads(), threadid())\n        append!(tl_hist[], data_for_this_thread)\n    end\n    merged_hist = merge(getallvalues(tl_hist)...)\nend\nfinal_hist = merge(proc_hists...)Check result:sum(final_hist.weights) ≈ length(data)\n\nusing Plots\nplot(final_hist)Note: This example is meant to show how to combine the features of this package. The multi-process part of this particular use case can be written in a simpler way using functionality from DistributedArrays."
},

{
    "location": "autodocs/#ParallelProcessingTools.@critical",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.@critical",
    "category": "macro",
    "text": "@critical expr\n\nMark code in expr as a critical section. Code in critical sections will never be executed in parallel (via multithreading) to any other critical section.\n\n@critical is very useful to mark non-threadsafe code.\n\nExample:\n\n@onthreads allthreads() begin\n    @critical @info Base.Threads.threadid()\nend\n\nWithout `@critical`, the above will typically crash Julia.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ParallelProcessingTools.@onprocs",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.@onprocs",
    "category": "macro",
    "text": "@onprocs procsel expr\n\nExecutes expr in parallel on all processes in procsel. Waits until all processes are done. Returns all results as a vector (or as a single scalar value, if procsel itself is a scalar).\n\nExample:\n\nusing Distributed\naddprocs(2)\nworkers() == @onprocs workers() myid()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ParallelProcessingTools.@onthreads",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.@onthreads",
    "category": "macro",
    "text": "@onthreads threadsel expr\n\nExecute code in expr in parallel on the threads in threadsel.\n\nthreadsel should be a single thread-ID or a range (or array) of thread-ids. If threadsel == Base.Threads.threadid(), expr is run on the current tread with only minimal overhead.\n\nNote: Currently, multiple @onthreads sections will not run in parallel to each other, even if they use disjunct sets of threads, due to limitations of the Julia multithreading implementation. This restriction is likely to disappear in future Julia versions.\n\nIn contrast to Base.Threads.@threads, @onthreads does forward exceptions to the caller.\n\nExample 1:\n\ntlsum = ThreadLocal(0.0)\ndata = rand(100)\n@onthreads allthreads() begin\n    tlsum[] = sum(workpart(data, allthreads(), Base.Threads.threadid()))\nend\nsum(getallvalues(tlsum)) ≈ sum(data)\n\nExample 2:\n\n# Assuming 4 threads:\ntl = ThreadLocal(42)\nthreadsel = 2:3\n@onthreads threadsel begin\n    tl[] = Base.Threads.threadid()\nend\ngetallvalues(tl)[threadsel] == [2, 3]\ngetallvalues(tl)[[1,4]] == [42, 42]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ParallelProcessingTools.AbstractThreadLocal",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.AbstractThreadLocal",
    "category": "type",
    "text": "abstract type AbstractThreadLocal{T} end\n\nAbstract type for thread-local values of type T.\n\nThe value for the current thread is accessed via getindex(::AbstractThreadLocal) and `setindex(::AbstractThreadLocal, x).\n\nTo access both regular and thread-local values in a unified manner, use the function getlocalvalue.\n\nTo get the all values across all threads, use the function getallvalues.\n\nDefault implementation is ThreadLocal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ParallelProcessingTools.ThreadLocal",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.ThreadLocal",
    "category": "type",
    "text": "ThreadLocal{T} <: AbstractThreadLocal{T}\n\nRepresents a thread-local value. See AbstractThreadLocal for the API.\n\nConstructors:\n\nThreadLocal{T}() where {T}\nThreadLocal(value::T) where {T}\nThreadLocal{T}(f::Base.Callable) where {T}\n\nExamples:\n\ntlvalue = ThreadLocal(0)\n@onthreads allthreads() tlvalue[] = Base.Threads.threadid()\ngetallvalues(tlvalue) == allthreads()\n\nrand_value_on_each_thread = ThreadLocal{Float64}(rand)\nall(x -> 0 < x < 1, getallvalues(rand_value_on_each_thread))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ParallelProcessingTools.allthreads",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.allthreads",
    "category": "function",
    "text": "allthreads()\n\nConvencience function, returns 1:Base.Threads.nthreads().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ParallelProcessingTools.getallvalues",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.getallvalues",
    "category": "function",
    "text": "getallvalues(v::AbstractThreadLocal{T})::AbstractVector{T}\n\nAccess the all values (one for each thread) of a thread-local value as a vector. Can only be called in single-threaded code sections.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ParallelProcessingTools.getlocalvalue",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.getlocalvalue",
    "category": "function",
    "text": "getlocalvalue(x::Any) = x\ngetlocalvalue(x::ThreadLocal) = x[]\n\nAccess plain values and thread-local values in a unified fashion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ParallelProcessingTools.workpart",
    "page": "Docstrings",
    "title": "ParallelProcessingTools.workpart",
    "category": "function",
    "text": "workpart(data::AbstractArray, workersel::AbstractVector{W}, current_worker::W) where {W}\n\nGet the part of data that the execution unit current_worker is responsible for. Implies a partition of data across the workers listed in workersel.\n\nFor generic data arrays, workpart will return a view. If data is a Range (e.g. indices to be processed), a sub-range will be returned.\n\nType W will typically be Int and workersel will usually be a range/array of thread/process IDs.\n\nNote: workersel is required to be sorted in ascending order and to contain no duplicate entries.\n\nExamples:\n\nusing Distributed, Base.Threads\nA = rand(100)\n# ...\nsub_A = workpart(A, workers(), myid())\n# ...\nidxs = workpart(eachindex(sub_A), allthreads(), threadid())\nfor i in idxs\n    # ...\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ParallelProcessingTools.@criticalParallelProcessingTools.@onallthreadsParallelProcessingTools.@onprocsParallelProcessingTools.@onthreadsParallelProcessingTools.AbstractThreadLocalParallelProcessingTools.LockableIOParallelProcessingTools.LockableValueParallelProcessingTools.ParallelProcessingToolsParallelProcessingTools.ThreadLocalParallelProcessingTools.ThreadSafeParallelProcessingTools.ThreadSafeIOParallelProcessingTools.ThreadSafeReentrantLockParallelProcessingTools._check_thread_local_errorsParallelProcessingTools._check_threadselParallelProcessingTools._clear_thread_local_errorsParallelProcessingTools._critical_section_lockParallelProcessingTools._current_thread_selectedParallelProcessingTools._is_sorted_and_uniqueParallelProcessingTools._protect_from_resizeParallelProcessingTools._run_on_procsParallelProcessingTools._run_on_threadsParallelProcessingTools._set_thread_local_errorParallelProcessingTools._thread_exec_funcParallelProcessingTools._thread_local_error_errParallelProcessingTools._thread_local_error_setParallelProcessingTools._workpart_hiParallelProcessingTools._workpart_schemeParallelProcessingTools.allthreadsParallelProcessingTools.evalParallelProcessingTools.getallvaluesParallelProcessingTools.getlocalvalueParallelProcessingTools.includeParallelProcessingTools.isdefined_localParallelProcessingTools.mtjulia_exeParallelProcessingTools.threadpartitionParallelProcessingTools.workpartParallelProcessingTools.workpartition"
},

]}
