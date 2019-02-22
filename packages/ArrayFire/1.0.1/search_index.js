var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ArrayFire.jl-1",
    "page": "Readme",
    "title": "ArrayFire.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)ArrayFire is a library for GPU and accelerated computing. ArrayFire.jl wraps the ArrayFire library for Julia, and provides a Julia interface."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install ArrayFire library: either download a binary from the official site, or you can build from source.In Julia 1.0 and up:] add ArrayFire"
},

{
    "location": "#Simple-Usage-1",
    "page": "Readme",
    "title": "Simple Usage",
    "category": "section",
    "text": "Congratulations, you\'ve now installed ArrayFire.jl! Now what can you do?Let\'s say you have a simple Julia array on the CPU:a = rand(10, 10)You can transfer this array to the device by calling the AFArray constructor on it.using ArrayFire  # Don\'t forget to load the library\nad = AFArray(a)Now let us perform some simple arithmetic on it:bd = (ad + 1) / 5Of course, you can do much more than just add and divide numbers. Check the supported functions section for more information.Now that you\'re done with all your device computation, you can bring your array back to the CPU (or host):b = Array(bd)Here are other examples of simple usage:using ArrayFire\n\n# Random number generation\na = rand(AFArray{Float64}, 100, 100)\nb = randn(AFArray{Float64}, 100, 100)\n\n# Transfer to device from the CPU\nhost_to_device = AFArray(rand(100,100))\n\n# Transfer back to CPU\ndevice_to_host = Array(host_to_device)\n\n# Basic arithmetic operations\nc = sin(a) + 0.5\nd = a * 5\n\n# Logical operations\nc = a .> b\nany_trues = any(c)\n\n# Reduction operations\ntotal_max = maximum(a)\ncolwise_min = min(a,2)\n\n# Matrix operations\ndeterminant = det(a)\nb_positive = abs(b)\nproduct = a * b\ndot_product = a .* b\ntransposer = a\'\n\n# Linear Algebra\nlu_fact = lu(a)\ncholesky_fact = chol(a*a\')  # Multiplied to create a positive definite matrix\nqr_fact = qr(a)\nsvd_fact = svd(a)\n\n# FFT\nfast_fourier = fft(a)"
},

{
    "location": "#The-Execution-Model-1",
    "page": "Readme",
    "title": "The Execution Model",
    "category": "section",
    "text": "ArrayFire.jl introduces an AFArray type that is a subtype of AbstractArray. Operations on AFArrays create other AFArrays, so data always remains on the device unless it is specifically transferred back. This wrapper provides a simple Julian interface that aims to mimic Base Julia\'s versatility and ease of use.REPL Behaviour: On the REPL, whenever you create an AFArray, the REPL displays the values, just like in Base Julia. This happens because the showarray method is overloaded to ensure that every time it is needed to display on the REPL, values are transferred from device to host. This means that every single operation on the REPL involves an implicit memory transfer. This may lead to some slowdown while working interactively depending on the size of the data and memory bandwidth available. You can use a semicolon (;) at the end of each statement to disable displaying and avoid that memory transfer. Also, note that in a script, there would be no memory transfer unless a display function is explicitly called (or if you use the Array constructor like in the above example).Async Behaviour: arrayfire is an asynchronous library. This essentially means that whenever you call a particular function in ArrayFire.jl, it would return control to the host almost immediately (which in this case in Julia) and continue executing on the device. This is pretty useful because it would mean that host code that\'s independent of the device can simply execute while the device computes, resulting in better real world performance.The library also performs some kernel fusions on elementary arithmetic operations (see the arithmetic section of the Supported Functions). arrayfire has an intelligent runtime JIT compliation engine which converts array expressions into the smallest number of OpenCL/CUDA kernels. Kernel fusion not only decreases the number of kernel calls, but also avoids extraneous global memory operations. This asynchronous behaviour ends only when a non-JIT operation is called or an explicit synchronization barrier sync(array) is called.A note on benchmarking: In Julia, one would use the @time macro to time execution times of functions. However, in this particular case, @time would simply time the function call, and the library would execute asynchronously in the background. This would often lead to misleading timings. Therefore, the right way to time individual operations is to run them multiple times, place an explicit synchronization barrier at the end, and take the average of multiple runs.Also, note that this does not affect how the user writes code. Users can simply write normal Julia code using ArrayFire.jl and this asynchronous behaviour is abstracted out. Whenever the data is needed back onto the CPU, an implicit barrier ensures that the computatation is complete, and the values are transferred back.Operations between CPU and device arrays:  Consider the following code. It will return an error:a = rand(Float32, 10, 10)\nb = AFArray(a)\na - b # Throws ErrorThis is because the two arrays reside in different regions of memory (host and device), and for any coherent operation to be performed, one array would have to be transferred to other region in memory. ArrayFire.jl does not do this automatically for performance considerations. Therefore, to make this work, you would have to manually transfer one of the arrays to the other memory. The following operations would work:a - Array(b) # Works!\nAFArray(a) - b # This works too!A note on correctness: Sometimes, ArrayFire.jl and Base Julia might return marginally different values from their computation. This is because Julia and ArrayFire.jl sometimes use different lower level libraries for BLAS, FFT, etc. For example, Julia uses OpenBLAS for BLAS operations, but ArrayFire.jl would use clBLAS for the OpenCL backend and CuBLAS for the CUDA backend, and these libraries might not always the exact same values as OpenBLAS after a certain decimal point. In light of this, users are encouraged to keep testing their codes for correctness.A note on performance: Some operations can be slow due to Base\'s generic implementations. This is intentional, to enable a \"make it work, then make it fast\" workflow. When you\'re ready you can disable slow fallback methods:julia> allowslow(AFArray, false)\njulia> xs[5]\nERROR: getindex is disabled"
},

{
    "location": "#Supported-Functions-1",
    "page": "Readme",
    "title": "Supported Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Creating-AFArrays-1",
    "page": "Readme",
    "title": "Creating AFArrays",
    "category": "section",
    "text": "rand, randn, convert, diagm, eye, range, zeros, ones, trues, falses\nconstant, getSeed, setSeed, iota"
},

{
    "location": "#Arithmetic-1",
    "page": "Readme",
    "title": "Arithmetic",
    "category": "section",
    "text": "+, -, *, /, ^, &, $, |\n.+, .-, .*, ./, .>, .>=, .<, .<=, .==, .!=,\ncomplex, conj, real, imag, max, min, abs, round, floor, hypot\nsigmoid\nsignbit (works only in vectorized form on Julia v0.5 - Ref issue #109)"
},

{
    "location": "#Linear-Algebra-1",
    "page": "Readme",
    "title": "Linear Algebra",
    "category": "section",
    "text": "chol, svd, lu, qr, svdfact!, lufact!, qrfact!\n*(matmul), A_mul_Bt, At_mul_B, At_mul_Bt, Ac_mul_B, A_mul_Bc, Ac_mul_Bc\ntranspose, transpose!, ctranspose, ctranspose!\ndet, inv, rank, norm, dot, diag, \\\nisLAPACKAvailable, chol!, solveLU, upper, lower"
},

{
    "location": "#Signal-Processing-1",
    "page": "Readme",
    "title": "Signal Processing",
    "category": "section",
    "text": "fft, ifft, fft!, ifft!\nconv, conv2\nfftC2R, fftR2C, conv3, convolve, fir, iir, approx1, approx2"
},

{
    "location": "#Statistics-1",
    "page": "Readme",
    "title": "Statistics",
    "category": "section",
    "text": "mean, median, std, var, cov\nmeanWeighted, varWeighted, corrcoef"
},

{
    "location": "#Vector-Algorithms-1",
    "page": "Readme",
    "title": "Vector Algorithms",
    "category": "section",
    "text": "sum, min, max, minimum, maximum, findmax, findmin\ncountnz, any, all, sort, union, find, cumsum, diff\nsortIndex, sortByKey, diff2, minidx, maxidx"
},

{
    "location": "#Backend-Functions-1",
    "page": "Readme",
    "title": "Backend Functions",
    "category": "section",
    "text": "getActiveBackend, getBackendCount, getAvailableBackends, setBackend, getBackendId, sync, getActiveBackendId"
},

{
    "location": "#Device-Functions-1",
    "page": "Readme",
    "title": "Device Functions",
    "category": "section",
    "text": "getDevice, setDevice, getNumDevices"
},

{
    "location": "#Image-Processing-1",
    "page": "Readme",
    "title": "Image Processing",
    "category": "section",
    "text": "scale, hist\nloadImage, saveImage\nisImageIOAvailable\ncolorspace, gray2rgb, rgb2gray, rgb2hsv, rgb2ycbcr, ycbcr2rgb, hsv2rgb\nregions, SAT\nbilateral, maxfilt, meanshift, medfilt, minfilt, sobel, histequal\nresize, rotate, skew, transform, transformCoordinates, translate\ndilate, erode, dilate3d, erode3d, gaussiankernel"
},

{
    "location": "#Computer-Vision-1",
    "page": "Readme",
    "title": "Computer Vision",
    "category": "section",
    "text": "orb, sift, gloh, diffOfGaussians, fast, harris, susan, hammingMatcher, nearestNeighbour, matchTemplate"
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "ArrayFire was benchmarked on commonly used operations.<img width=\"537\" alt=\"general\" src=\"https://cloud.githubusercontent.com/assets/9101377/15921168/36b4f1fc-2e3d-11e6-871a-c8989c5bd279.png\">Another interesting benchmark is Non-negative Matrix Factorization:(Image: NMF Benchmark)CPU: Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz.GPU: GRID K520, 4096 MB, CUDA Compute 3.0.ArrayFire v3.4.0The benchmark scripts are in the benchmark folder, and be run from there by doing by doing:include(\"benchmark.jl\")\ninclude(\"nmf_benchmark.jl\")"
},

{
    "location": "#Backends-1",
    "page": "Readme",
    "title": "Backends",
    "category": "section",
    "text": "There are three backends in ArrayFire.jl:CUDA Backend\nOpenCL Backend\nCPU BackendThere is yet another backend which essentially allows the user to switch backends at runtime. This is called the unified backend. ArrayFire.jl starts up with the unified backend.If the backend selected by ArrayFire by default (depends on the available drivers) is not the desired one (depending on the available hardware), you can override the default by setting the environment variable $JULIA_ARRAYFIRE_BACKEND before starting Julia (more specifically, before loading the ArrayFire module). Possible values for $JULIA_ARRAYFIRE_BACKEND are cpu, cuda and opencl.You may also change the backend at runtime via, e.g., set_backend(AF_BACKEND_CPU) (resp. AF_BACKEND_CUDA or AF_BACKEND_OPENCL). The unified backend isn\'t a computational backend by itself but represents an interface to switch between different backends at runtime. ArrayFire.jl starts up with the unified backend, but get_active_backend() will return either a particular default backend, depending on how you have installed the library. For example, if you have built ArrayFire.jl with the CUDA backend, get_active_backend() will return AF_BACKEND_CUDA backend."
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": "ArrayFire.jl isn\'t working! What do I do?Error loading libafTry adding the path to libaf to your LD_LIBRARY_PATH.ArrayFire Error (998): Internal Error whenever you call randIf you\'re using the CUDA backend, try checking if libcudart and libnvvm are both in your LD_LIBRARY_PATH. This is because libafcuda will try to link to these libraries when it loads into Julia. If they\'re not in your system, install CUDA for your platform.ArrayFire.jl loads, but a = rand(AFArray{Float32}, 10) is stuck.If you want to use the CUDA backend, check if you have installed CUDA for your platform. If you\'ve installed CUDA, simply downloaded a binary and it still doens\'t work, try adding libnvvm, libcudart to your path.ArrayFire.jl does not work with Atom.Create a file in your home directory called .juliarc.jl and write ENV[\"LD_LIBRARY_PATH\"] = \"/usr/local/lib/\" (or the path to libaf) in it. Atom should now be able to load it.ERROR: ArrayFire Error (401) : Double precision not supported for this deviceThis error message pops up on devices that do not support double precision: a good example would be the Iris Pro on Macbooks. If you get this message, you should work with single precision. For example, if you\'re generating random numbers directly on the device, the correct usage in this scenario would be rand(AFArray{Float32}, 10) instead of rand(AFArray{Float64}, 10)."
},

]}
