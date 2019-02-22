var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SCS-1",
    "page": "Readme",
    "title": "SCS",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)(Image: SCS) (Image: SCS)Julia wrapper for the SCS splitting cone solver. SCS can solve linear programs, second-order cone programs, semidefinite programs, exponential cone programs, and power cone programs."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install SCS.jl through the Julia package manager:julia> Pkg.add(\"SCS\")SCS.jl will use BinaryProvider.jl to automatically install the SCS binaries. Note that if you are not using the official Julia binaries from https://julialang.org/downloads/ you may need a custom install of the SCS binaries."
},

{
    "location": "#Custom-Installation-1",
    "page": "Readme",
    "title": "Custom Installation",
    "category": "section",
    "text": "To install custom built SCS binaries set the environmental variable JULIA_SCS_LIBRARY_PATH and call Pkg.build(\"SCS\"). For instance, if the libraries are installed in /opt/lib just callENV[\"JULIA_SCS_LIBRARY_PATH\"]=\"/opt/lib\"\nPkg.build(\"SCS\")Note that your custom build binaries need to be compiled with the option DLONG=1. For instance, a minimal compilation script would be$ cd <scs_dir>\n$ make DLONG=1\n$ julia\njulia> ENV[\"JULIA_SCS_LIBRARY_PATH\"]=\"<scs_dir>/out\"\n] build SCSwhere <scs_dir> is SCS\'s source directory.If you do not want BinaryProvider to download the default binaries on install set  JULIA_SCS_LIBRARY_PATH  before calling Pkg.add(\"SCS\").To switch back to the default binaries clear JULIA_SCS_LIBRARY_PATH and call Pkg.build(\"SCS\")."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#MathProgBase-wrapper-1",
    "page": "Readme",
    "title": "MathProgBase wrapper",
    "category": "section",
    "text": "SCS implements the solver-independent MathProgBase interface, and so can be used within modeling software like Convex and JuMP. The solver object is called SCSSolver."
},

{
    "location": "#Options-1",
    "page": "Readme",
    "title": "Options",
    "category": "section",
    "text": "All SCS solver options can be set through the direct interface(documented below) and through MathProgBase. The list of options is defined the scs.h header. To use these settings you can either pass them as keyword arguments to SCS_solve (high level interface) or as arguments to the SCSSolver constructor (MathProgBase interface), e.g.# Direct\nsolution = SCS_solve(m, n, A, ..., psize; max_iters=10, verbose=0);\n# MathProgBase (with Convex)\nm = solve!(problem, SCSSolver(max_iters=10, verbose=0))Moreover, You may select one of the linear solvers to be used by SCSSolver via linear_solver keyword. The options available are SCS.Indirect (the default) and SCS.Direct."
},

{
    "location": "#High-level-wrapper-1",
    "page": "Readme",
    "title": "High level wrapper",
    "category": "section",
    "text": "The file high_level_wrapper.jl is thoroughly commented. Here is the basic usageWe assume we are solving a problem of the formminimize        c\' * x\nsubject to      A * x + s = b\n                s in Kwhere K is a product cone ofzero cones,\nlinear cones { x | x >= 0 },\nsecond-order cones { (t,x) | ||x||_2 <= t },\nsemi-definite cones { X | X psd },\nexponential cones {(x,y,z) | y e^(x/y) <= z, y>0 }, and\npower cone {(x,y,z) | x^a * y^(1-a) >= |z|, x>=0, y>=0}.The problem data areA is the matrix with m rows and n cols\nb is of length m x 1\nc is of length n x 1\nf is the number of primal zero / dual free cones, i.e. primal equality constraints\nl is the number of linear cones\nq is the array of SOCs sizes\ns is the array of SDCs sizes\nep is the number of primal exponential cones\ned is the number of dual exponential cones\np is the array of power cone parameters\noptions is a dictionary of options (see above).The function isfunction SCS_solve(m::Int, n::Int, A::SCSVecOrMatOrSparse, b::Array{Float64,},\n    c::Array{Float64,}, f::Int, l::Int, q::Array{Int,}, qsize::Int, s::Array{Int,},\n    ssize::Int, ep::Int, ed::Int, p::Array{Float64,}, psize::Int; options...)and it returns an object of type Solution, which contains the following fieldstype Solution\n  x::Array{Float64, 1}\n  y::Array{Float64, 1}\n  s::Array{Float64, 1}\n  status::ASCIIString\n  ret_val::Int\n  ...Where x stores the optimal value of the primal variable, y stores the optimal value of the dual variable, s is the slack variable, status gives information such as solved, primal infeasible, etc."
},

{
    "location": "#Low-level-wrapper-1",
    "page": "Readme",
    "title": "Low level wrapper",
    "category": "section",
    "text": "The low level wrapper directly calls SCS and is also thoroughly documented in lowlevelwrapper.jl. The low level wrapper performs the pointer manipulation necessary for the direct C call."
},

{
    "location": "#Convex-and-JuMP-examples-1",
    "page": "Readme",
    "title": "Convex and JuMP examples",
    "category": "section",
    "text": "This example shows how we can model a simple knapsack problem with Convex and use SCS to solve it.using Convex, SCS\nitems  = [:Gold, :Silver, :Bronze]\nvalues = [5.0, 3.0, 1.0]\nweights = [2.0, 1.5, 0.3]\n\n# Define a variable of size 3, each index representing an item\nx = Variable(3)\np = maximize(x\' * values, 0 <= x, x <= 1, x\' * weights <= 3)\nsolve!(p, SCSSolver())\nprintln([items x.value])\n\n# [:Gold 0.9999971880377178\n#  :Silver 0.46667637765641057\n#  :Bronze 0.9999998036351865]This example shows how we can model a simple knapsack problem with JuMP and use SCS to solve it.using JuMP, SCS\nitems  = [:Gold, :Silver, :Bronze]\nvalues = Dict(:Gold => 5.0,  :Silver => 3.0,  :Bronze => 1.0)\nweight = Dict(:Gold => 2.0,  :Silver => 1.5,  :Bronze => 0.3)\n\nm = Model(solver=SCSSolver())\n@variable(m, 0 <= take[items] <= 1)  # Define a variable for each item\n@objective(m, Max, sum( values[item] * take[item] for item in items))\n@constraint(m, sum( weight[item] * take[item] for item in items) <= 3)\nsolve(m)\nprintln(getvalue(take))\n# [Bronze] = 0.9999999496295456\n# [  Gold] = 0.99999492720597\n# [Silver] = 0.4666851698368782"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SCS.@compat_gc_preserveSCS.CISCS.ConeDataSCS.DirectSCS.IndirectSCS.LPConesSCS.MOISCS.MOISolutionSCS.MOIUSCS.ManagedSCSMatrixSCS.ModelDataSCS.OptimizerSCS.SCSSCS.SCSConeSCS.SCSDataSCS.SCSInfoSCS.SCSMathProgModelSCS.SCSMatrixSCS.SCSSettingsSCS.SCSSolutionSCS.SCSSolverSCS.SCSVecOrMatOrSparseSCS.SCS_finishSCS.SCS_initSCS.SCS_set_default_settingsSCS.SCS_solveSCS.SCS_versionSCS.SFSCS.SSSCS.SolutionSCS.VISCS.ZeroConesSCS._SCS_user_settingsSCS.__init__SCS._allocate_constraintSCS._scalecoefSCS._sympackedtoSCS._unshiftSCS.addoption!SCS.check_depsSCS.coefficientSCS.constroffsetSCS.constrrowsSCS.directSCS.evalSCS.includeSCS.indirectSCS.invertsdconesizeSCS.isintegertolSCS.orderconesforscsSCS.orderidxSCS.ordervalSCS.output_indexSCS.reordervalSCS.sanatize_SCS_optionsSCS.scalecoefSCS.status_mapSCS.sympackedLtoUSCS.sympackedUtoLSCS.sympackedUtoLidxSCS.sympackeddimSCS.sympackedlenSCS.trimapSCS.trimapLSCS.unscalecoefSCS.variable_index_value"
},

]}
