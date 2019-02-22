var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OpenCL.jl-1",
    "page": "Readme",
    "title": "OpenCL.jl",
    "category": "section",
    "text": "OpenCL bindings for JuliaBuild status: [![][buildbot-julia05-img]][buildbot-julia05-url] [![][buildbot-julia06-img]][buildbot-julia06-url] [![][buildbot-travis-img]][buildbot-travis-url]Code coverage: (Image: )[buildbot-julia05-img]: http://ci.maleadt.net/shields/build.php?builder=OpenCL-julia05-x86-64bit&name=julia%200.5 [buildbot-julia05-url]: http://ci.maleadt.net/shields/url.php?builder=OpenCL-julia05-x86-64bit [buildbot-julia06-img]: http://ci.maleadt.net/shields/build.php?builder=OpenCL-julia06-x86-64bit&name=julia%200.6 [buildbot-julia06-url]: http://ci.maleadt.net/shields/url.php?builder=OpenCL-julia06-x86-64bit [buildbot-travis-img]: https://travis-ci.org/JuliaGPU/OpenCL.jl.svg?branch=master [buildbot-travis-url]: https://travis-ci.org/JuliaGPU/OpenCL.jl?branch=masterJulia interface for the OpenCL parallel computation APIThis package aims to be a complete solution for OpenCL programming in Julia, similar in scope to [PyOpenCL] for Python. It provides a high level api for OpenCL to make programing GPU\'s and multicore CPU\'s much less onerous.OpenCL.jl provides access to OpenCL API versions 1.0, 1.1, 1.2 and 2.0."
},

{
    "location": "#This-package-is-based-off-the-work-of-others:-1",
    "page": "Readme",
    "title": "This package is based off the work of others:",
    "category": "section",
    "text": "[PyOpenCL] by Andreas Klockner\n[oclpb]    by Sean Ross\n[Boost.Compute] by Kyle Lutz\n[rust-opencl][PyOpenCL]: http://mathema.tician.de/software/pyopencl/ [oclpb]: https://github.com/srossross/oclpb [Boost.Compute]:https://github.com/kylelutz/compute [rust-opencl]: https://github.com/luqmana/rust-openclOpenCL.jl has had contributions from many developers."
},

{
    "location": "#Currently-supported-Julia-versions-1",
    "page": "Readme",
    "title": "Currently supported Julia versions",
    "category": "section",
    "text": "Julia v\"0.4.x\" is supported on the release-0.4 branch and the OpenCL.jl versions v\"0.4.x\". Only bug-fixes will be applied.\nJulia v\"0.5.x\" is supported on the master branch and the OpenCL.jl versions v\"0.5.x\".\nJulia v\"0.6.x\" is experimentally supported on the master branch and the OpenCL.jl versions v\"0.5.x\"."
},

{
    "location": "#Discontinued-support-1",
    "page": "Readme",
    "title": "Discontinued support",
    "category": "section",
    "text": "Julia v\"0.3.x\" was supported on OpenCL.jl versions v\"0.3.x\". It should still be installable and work."
},

{
    "location": "#Setup-1",
    "page": "Readme",
    "title": "Setup",
    "category": "section",
    "text": "Install an OpenCL driver. If you use OSX, OpenCL is already available\nCheckout the packages from the Julia repl  Pkg.add(\"OpenCL\")OpenCL will be installed in your julia directory\ncd into your julia directory to run the tests and try out the examples\nTo update to the latest development version, from the Julia repl:  Pkg.update()"
},

{
    "location": "#IJulia-Notebooks-1",
    "page": "Readme",
    "title": "IJulia Notebooks",
    "category": "section",
    "text": "[OpenCL Fractals]\n[GPU Buffer Transpose]\n[Low Level API][OpenCL Fractals]:http://nbviewer.ipython.org/7517923 [GPU Buffer Transpose]:http://nbviewer.ipython.org/7517952 [Low Level API]:http://nbviewer.ipython.org/7452048"
},

{
    "location": "#Quick-Example-1",
    "page": "Readme",
    "title": "Quick Example",
    "category": "section",
    "text": "using OpenCL\n\nconst sum_kernel = \"\n   __kernel void sum(__global const float *a,\n                     __global const float *b,\n                     __global float *c)\n    {\n      int gid = get_global_id(0);\n      c[gid] = a[gid] + b[gid];\n    }\n\"\na = rand(Float32, 50_000)\nb = rand(Float32, 50_000)\n\ndevice, ctx, queue = cl.create_compute_context()\n\na_buff = cl.Buffer(Float32, ctx, (:r, :copy), hostbuf=a)\nb_buff = cl.Buffer(Float32, ctx, (:r, :copy), hostbuf=b)\nc_buff = cl.Buffer(Float32, ctx, :w, length(a))\n\np = cl.Program(ctx, source=sum_kernel) |> cl.build!\nk = cl.Kernel(p, \"sum\")\n\nqueue(k, size(a), nothing, a_buff, b_buff, c_buff)\n\nr = cl.read(queue, c_buff)\n\nif isapprox(norm(r - (a+b)), zero(Float32))\n    info(\"Success!\")\nelse\n    error(\"Norm should be 0.0f\")\nend"
},

]}
