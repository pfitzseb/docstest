var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Fatou.jl-1",
    "page": "Readme",
    "title": "Fatou.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)Julia package for Fatou sets. Install using Pkg.add(\"Fatou\") in Julia. See Explore Fatou sets & Fractals in Wiki for detailed examples. This package provides: fatou, juliafill, mandelbrot, newton, basin, plot, and orbit; along with various internal functionality using Reduce and Julia expressions to help compute Fatou.FilledSet efficiently. Full documentation is included. The fatou function can be applied to a Fatou.Define object to produce a Fatou.FilledSet, which can then be passed as an argument to the plot function of PyPlot. Creation of Fatou.Define objects is done via passing a parse-able function expression string (in variables z, c) and optional keyword arguments to juliafill, mandelbrot, and newton."
},

{
    "location": "#Background-1",
    "page": "Readme",
    "title": "Background",
    "category": "section",
    "text": "This package enables users of Julia lang to easily generate, explore, and share fractals of Julia, Mandelbrot, and Newton type. The name Fatou comes from the mathematician after whom the Fatou sets are named. Note that the Julia language is not named after the mathematician Julia after whom the Julia sets are named. This is a mere coincidence.Definition (Julia set): For any holomorphic function on a complex plane, the boundary of the set of points whose result diverges when the function is iteratively evaluated at each point.Definition (Fatou set): The Julia set’s complement is the set of fixed limit points from holomorphic recursion.Definition (Mandelbrot set): The set of points on a complex parameter space for which the holomorphic recursion does not go to infinity from a common starting point z0.Definition (Newton fractal): The Julia/Fatou set obtained from the recursion of the Newton method z↦z−m⋅f(z)/f′(z) applied to a holomorphic function.The package has essentially two different plotting modes controlled by the iter boolean keyword, which toggles whether to color the image by iteration count or whether to use a default (or custom) limit-value coloring function.The number of Julia threads available is detected at the startup and is reported it back. When a specified Fatou set is computed, multi-threading is used to compute the pixels. Since each pixel is independent of any other pixel, it doesn’t matter in what order or on how many threads it is computed, the more you use the faster it is. The environment variable JULIA_NUM_THREADS can be used to enable the multi-threading for more than 1 thread.Please share your favorite fractals as Fatou snippet in the discussion thread!"
},

{
    "location": "#PyPlot.jl-compatability-features-1",
    "page": "Readme",
    "title": "PyPlot.jl compatability features",
    "category": "section",
    "text": "The program can be initialized with using Fatou, PyPlot or ImageInTerminal.A Fatou set is a collection of complex valued orbits of an iterated function. To help illustrate this, an additional feature is a plot function designed to visualize real-valued-orbits. The following is a cobweb orbit plot of a function:juliafill(:(z^2-0.67),∂=[-1.25,1.5],x0=1.25,orbit=17,depth=3,n=147) |> orbit(Image: img/orbit.png)With fatou and plot it is simple to display a filled in Julia set:c = -0.06 + 0.67im\nnf = juliafill(:(z^2+$c),∂=[-1.5,1.5,-1,1],N=80,n=1501,cmap=\"gnuplot\",iter=true)\nplot(fatou(nf), bare=true)(Image: img/filled-julia.png)It is also possible to switch to mandelbrot mode:mandelbrot(:(z^2+c),n=800,N=20,∂=[-1.91,0.51,-1.21,1.21],cmap=\"gist_earth\") |> fatou |> plot(Image: img/mandelbrot.png)Fatou also provides basin to display the the Newton / Fatou basins using set notation in LaTeX in IJulia.map(display,[basin(newton(:(z^3-1)),i) for i ∈ 1:3])(Image: D1(ϵ))(Image: D2(ϵ))(Image: D3(ϵ))Compute the Newton fractal Julia set for a function with annotated plot of iteration count:nf = newton(:(z^3-1),n=800,ϵ=0.1,N=25,iter=true,cmap=\"jet\")\nnf |> fatou |> plot\nbasin(nf,3)(Image: img/newton.png)Generalized Newton fractal example:nf = newton(:(sin(z)-1),m=1-1im,∂=[-2π/3,-π/3,-π/6,π/6],n=500,N=33,iter=true,ϵ=0.05,cmap=\"cubehelix\")\nnf |> fatou |> plot\nbasin(nf,2)(Image: img/generalized-newton.png)(Image: D2(ϵ))"
},

{
    "location": "#ImageInTerminal.jl-compatibility-1",
    "page": "Readme",
    "title": "ImageInTerminal.jl compatibility",
    "category": "section",
    "text": "When using ImageInTerminal, the display of a Fatou.FilledSet will be plotted automatically in the terminal. The orbit method also has optional UnicodePlots compatibility. Additional plotting support can be added via Pull-Request by adding another Requires script to the __init__() function definition."
},

{
    "location": "#Detailed-Explanation-1",
    "page": "Readme",
    "title": "Detailed Explanation",
    "category": "section",
    "text": "View Explore Fatou sets & Fractals in Wiki for detailed examples."
},

{
    "location": "#Troubleshooting-on-Julia-1.0.1-1",
    "page": "Readme",
    "title": "Troubleshooting on Julia 1.0.1+",
    "category": "section",
    "text": "Note that Fatou is not compatible with Julia 1.0 but works on Julia 1.0.1 alright. Note that a stackoverflow error occurs on Julia 1.0.1+ when the Reduce package is precompiled with ENV[\"REDPRE\"] flag set, therefore it is recommended to not set it. If you encounter an unsatisfiable requirement in the package manager, an easy workaround is to use dev Fatou instead of add Fatou."
},

{
    "location": "autodocs/#Fatou.Compute",
    "page": "Docstrings",
    "title": "Fatou.Compute",
    "category": "function",
    "text": "Compute(::Fatou.Define)::Union{Matrix{UInt8},Matrix{Float64}}\n\nCompute the Array for Fatou.FilledSet as specefied by Fatou.Define.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Fatou.Define",
    "page": "Docstrings",
    "title": "Fatou.Define",
    "category": "type",
    "text": "Fatou.Define(E::Any;                  # primary map, (z, c) -> F\n  Q::Expr     = :(abs2(z)),           # escape criterion, (z, c) -> Q\n  C::Expr     = :((angle(z)/(2π))*n^p)# coloring, (z, n=iter., p=exp.) -> C\n  ∂    = π/2, # Array{Float64,1}      # Bounds, [x(a),x(b),y(a),y(b)]\n  n::Integer  = 176,                  # horizontal grid points\n  N::Integer  = 35,                   # max. iterations\n  ϵ::Number   = 4,                    # basin ϵ-Limit criterion\n  iter::Bool  = false,                # toggle iteration mode\n  p::Number   = 0,                    # iteration color exponent\n  newt::Bool  = false,                # toggle Newton mode\n  m::Number   = 0,                    # Newton multiplicity factor\n  O::String   = F,                    # original Newton map\n  mandel::Bool= false,                # toggle Mandelbrot mode\n  seed::Number= 0.0+0.0im,            # Mandelbrot seed value\n  x0          = nothing,              # orbit starting point\n  orbit::Int  = 0,                    # orbit cobweb depth\n  depth::Int  = 1,                    # depth of function composition\n  cmap::String= \"\")                   # imshow color map\n\nDefine the metadata for a Fatou.FilledSet.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Fatou.FilledSet",
    "page": "Docstrings",
    "title": "Fatou.FilledSet",
    "category": "type",
    "text": "Fatou.FilledSet(::Fatou.Define)\n\nCompute the Fatou.FilledSet set using Fatou.Define.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Fatou.basin",
    "page": "Docstrings",
    "title": "Fatou.basin",
    "category": "function",
    "text": "basin(::Fatou.Define, ::Integer)\n\nOutput the j-th basin of Fatou.Define as LaTeX. Each subsequent iteration of the Newton-Raphson method will yield a more complicated set.\n\nExamples\n\njulia> basin(newton(\"z^3-1\"),2)\nL\"$\\displaystyle D_2(\\epsilon) = \\left\\{z\\in\\mathbb{C}:\\left|\\,z - \\frac{\\left(z - \\frac{z^{3} - 1}{3 z^{2}}\\right)^{3} - 1}{3 \\left(z - \\frac{z^{3} - 1}{3 z^{2}}\\right)^{2}} - \\frac{z^{3} - 1}{3 z^{2}} - r_i\\,\\right|<\\epsilon,\\,\\forall r_i(\\,f(r_i)=0 )\\right\\}$\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Fatou.fatou",
    "page": "Docstrings",
    "title": "Fatou.fatou",
    "category": "function",
    "text": "  fatou(::Fatou.Define)\n\nCompute the Fatou.FilledSet set using Fatou.Define.\n\nExamples\n\njulia> fatou(K)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Fatou.juliafill",
    "page": "Docstrings",
    "title": "Fatou.juliafill",
    "category": "function",
    "text": "juliafill(::Expr;                     # primary map, (z, c) -> F\n  Q::Expr     = :(abs2(z)),           # escape criterion, (z, c) -> Q\n  C::Expr     = :((angle(z)/(2π))*n^p)# coloring, (z, n=iter., p=exp.) -> C\n  ∂    = π/2, # Array{Float64,1}      # Bounds, [x(a),x(b),y(a),y(b)]\n  n::Integer  = 176,                  # horizontal grid points\n  N::Integer  = 35,                   # max. iterations\n  ϵ::Number   = 4,                    # basin ϵ-Limit criterion\n  iter::Bool  = false,                # toggle iteration mode\n  p::Number   = 0,                    # iteration color exponent\n  x0          = nothing,              # orbit starting point\n  orbit::Int  = 0,                    # orbit cobweb depth\n  depth::Int  = 1,                    # depth of function composition\n  cmap::String= \"\")                   # imshow color map\n\nDefine filled Julia basin in Fatou\n\nExmaples\n\njulia> juliafill(\"z^2-0.06+0.67im\",∂=[-1.5,1.5,-1,1],N=80,n=1501,cmap=\"RdGy\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Fatou.mandelbrot",
    "page": "Docstrings",
    "title": "Fatou.mandelbrot",
    "category": "function",
    "text": "mandelbrot(::Expr;                    # primary map, (z, c) -> F\n  Q::Expr     = :(abs2(z)),           # escape criterion, (z, c) -> Q\n  C::Expr     = :(exp(-abs(z))*n^p),  # coloring, (z, n=iter., p=exp.) -> C\n  ∂    = π/2, # Array{Float64,1}      # Bounds, [x(a),x(b),y(a),y(b)]\n  n::Integer  = 176,                  # horizontal grid points\n  N::Integer  = 35,                   # max. iterations\n  ϵ::Number   = 4,                    # basin ϵ-Limit criterion\n  iter::Bool  = false,                # toggle iteration mode\n  p::Number   = 0,                    # iteration color exponent\n  m::Number   = 0,                    # Newton multiplicity factor\n  seed::Number= 0.0+0.0im,            # Mandelbrot seed value\n  x0          = nothing,              # orbit starting point\n  orbit::Int  = 0,                    # orbit cobweb depth\n  depth::Int  = 1,                    # depth of function composition\n  cmap::String= \"\")                   # imshow color map\n\nDefine Mandelbrot basin in Fatou\n\nExamples\n\nmandelbrot(:(z^2+c),n=800,N=20,∂=[-1.91,0.51,-1.21,1.21],cmap=\"nipy_spectral\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Fatou.newton",
    "page": "Docstrings",
    "title": "Fatou.newton",
    "category": "function",
    "text": "newton(::Expr;                        # primary map, (z, c) -> F\n  C::Expr     = :((angle(z)/(2π))*n^p)# coloring, (z, n=iter., p=exp.) -> C\n  ∂    = π/2, # Array{Float64,1}      # Bounds, [x(a),x(b),y(a),y(b)]\n  n::Integer  = 176,                  # horizontal grid points\n  N::Integer  = 35,                   # max. iterations\n  ϵ::Number   = 4,                    # basin ϵ-Limit criterion\n  iter::Bool  = false,                # toggle iteration mode\n  p::Number   = 0,                    # iteration color exponent\n  m::Number   = 0,                    # Newton multiplicity factor\n  mandel::Bool= false,                # toggle Mandelbrot mode\n  seed::Number= 0.0+0.0im,            # Mandelbrot seed value\n  x0          = nothing,              # orbit starting point\n  orbit::Int  = 0,                    # orbit cobweb depth\n  depth::Int  = 1,                    # depth of function composition\n  cmap::String= \"\")                   # imshow color map\n\nDefine Newton basin in Fatou\n\nExamples\n\njulia> newton(\"z^3-1\",n=800,cmap=\"brg\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Fatou.orbit",
    "page": "Docstrings",
    "title": "Fatou.orbit",
    "category": "function",
    "text": "orbit(K::Fatou.Define)\norbit(u::Function, ∂, orbit, depth, n)\n\nPlot funciton compositions of the primary Fatou.Define function up to any depth including cobweb plot with an orbit depth from the x0 start point.\n\nExamples\n\njulia> juliafill(\"z^2-0.67\",∂=[-1.25,1.5],x0=1.25,orbit=17,depth=3) |> orbit\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Fatou.ComputeFatou.DefineFatou.FatouFatou.FilledSetFatou.__init__Fatou.basinFatou.dsFatou.evalFatou.fatouFatou.includeFatou.jLFatou.jsetFatou.jset0Fatou.jsetstrFatou.juliafillFatou.mandelbrotFatou.nLFatou.newtonFatou.newton_raphsonFatou.nrsetFatou.nset0Fatou.nsetstrFatou.orbitFatou.plotFatou.rdpmFatou.real_orbFatou.recompFatou.set0Fatou.setj"
},

]}
