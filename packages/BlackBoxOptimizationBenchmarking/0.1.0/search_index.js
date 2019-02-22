var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BlackBoxOptimizationBenchmarking.jl-1",
    "page": "Readme",
    "title": "BlackBoxOptimizationBenchmarking.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)A Julia implementation of the Black-Box-Optimization-Benchmarking (BBOB) functions."
},

{
    "location": "#Benchmark-results-1",
    "page": "Readme",
    "title": "Benchmark results",
    "category": "section",
    "text": "The average sucess rate (meaning the optimizer reached the minimum + 1e-6): (Image: benchmark)Python CMA-ES is the best overall (mainly in higher dimension),  while some of BlackBoxOptim.jl optimizers are better for large numbers of function evaluation."
},

{
    "location": "#The-average-sucess-rate-across-the-dimension-of-the-function:-1",
    "page": "Readme",
    "title": "The average sucess rate across the dimension of the function:",
    "category": "section",
    "text": "(Image: benchmark)(Image: benchmark)(Image: benchmark)"
},

{
    "location": "#The-total-relative-run-time-of-each-optimizer-1",
    "page": "Readme",
    "title": "The total relative run time of each optimizer",
    "category": "section",
    "text": "(Image: benchmark)Note that the Python algorithm are called from Julia, which might cause some overhead."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "Functions can be accessed as BlackBoxOptimizationBenchmarking.F1, which returns a BBOBFunction with fields f containing the function itself, f_opt its minimal value, and x_opt its minimizer, i.e. f(x_opt) = f_opt.Functions can be listed using enumerate:julia> enumerate(BBOBFunction)\n20-element Array{BlackBoxOptimizationBenchmarking.BBOBFunction,1}:\n Sphere                                           \n Ellipsoidal Function                             \n Discus Function                                  \n Bent Cigar Function                              \n Sharp Ridge Function                             \n Different Powers Function                        \n Rastrigin Function                               \n Weierstrass Function                             \n Schaffers F7 Function                            \n Schaffers F7 Function, moderately ill-conditioned\n Composite Griewank-Rosenbrock Function F8F2      \n Ellipsoidal                                      \n Schwefel Function                                \n Rastrigin                                        \n Buche-Rastrigin                                  \n Linear Slope                                     \n Attractive Sector                                \n Step Ellipsoidal Function                        \n Rosenbrock Function, original                    \n Rosenbrock Function, rotated\n ```\n \nA benchmark for a single optimizer and function can be run with:\njulia benchmark(optimizer::Any, f::BBOBFunction, run_lengths, Ntrials, dimensions, Δf)\nOr for a collection of optimizers with:\njulia benchmark(optimizers::Vector{T}, funcs, run_lengths, Ntrials, dimensions, Δf) ```See test/runtests.jl         The optimizer must implement the methods optimize, minimum and minimizer, seescripts/optimizers_interface.jl"
},

{
    "location": "#Reference:-1",
    "page": "Readme",
    "title": "Reference:",
    "category": "section",
    "text": "http://coco.lri.fr/downloads/download15.01/bbobdocfunctions.pdf"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.@define_x_and_f_opt",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.@define_x_and_f_opt",
    "category": "macro",
    "text": "Define x1_opt and f1_opt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f1",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f1",
    "category": "function",
    "text": "Sphere Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f10",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f10",
    "category": "function",
    "text": "Ellipsoidal Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f11",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f11",
    "category": "function",
    "text": "Discus Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f12",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f12",
    "category": "function",
    "text": "Bent Cigar Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f13",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f13",
    "category": "function",
    "text": "Sharp Ridge Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f14",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f14",
    "category": "function",
    "text": "Different Powers Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f15",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f15",
    "category": "function",
    "text": "Rastrigin Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f16",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f16",
    "category": "function",
    "text": "Weierstrass Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f17",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f17",
    "category": "function",
    "text": "Schaffers F7 Function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f18",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f18",
    "category": "function",
    "text": "Schaffers F7 Function, moderately ill-conditioned \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f19",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f19",
    "category": "function",
    "text": "Composite Griewank-Rosenbrock Function F8F2 \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f2",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f2",
    "category": "function",
    "text": "Ellipsoidal Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f20",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f20",
    "category": "function",
    "text": "Schwefel Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f3",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f3",
    "category": "function",
    "text": "Rastrigin Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f4",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f4",
    "category": "function",
    "text": "Buche-Rastrigin Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f5",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f5",
    "category": "function",
    "text": "Linear Slope \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f6",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f6",
    "category": "function",
    "text": "Attractive Sector Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f7",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f7",
    "category": "function",
    "text": "Step Ellipsoidal Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f8",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f8",
    "category": "function",
    "text": "Rosenbrock Function, original \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f9",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f9",
    "category": "function",
    "text": "Rosenbrock Function, rotated \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BlackBoxOptimizationBenchmarking.@BBOBFunctionBlackBoxOptimizationBenchmarking.@define_x_and_f_optBlackBoxOptimizationBenchmarking.BBOBFunctionBlackBoxOptimizationBenchmarking.BlackBoxOptimizationBenchmarkingBlackBoxOptimizationBenchmarking.CBlackBoxOptimizationBenchmarking.F1BlackBoxOptimizationBenchmarking.F10BlackBoxOptimizationBenchmarking.F11BlackBoxOptimizationBenchmarking.F12BlackBoxOptimizationBenchmarking.F13BlackBoxOptimizationBenchmarking.F14BlackBoxOptimizationBenchmarking.F15BlackBoxOptimizationBenchmarking.F16BlackBoxOptimizationBenchmarking.F17BlackBoxOptimizationBenchmarking.F18BlackBoxOptimizationBenchmarking.F19BlackBoxOptimizationBenchmarking.F2BlackBoxOptimizationBenchmarking.F20BlackBoxOptimizationBenchmarking.F3BlackBoxOptimizationBenchmarking.F4BlackBoxOptimizationBenchmarking.F5BlackBoxOptimizationBenchmarking.F6BlackBoxOptimizationBenchmarking.F7BlackBoxOptimizationBenchmarking.F8BlackBoxOptimizationBenchmarking.F9BlackBoxOptimizationBenchmarking.OptFunBlackBoxOptimizationBenchmarking.QBlackBoxOptimizationBenchmarking.RBlackBoxOptimizationBenchmarking.T_asyBlackBoxOptimizationBenchmarking.T_oszBlackBoxOptimizationBenchmarking.benchmarkBlackBoxOptimizationBenchmarking.enumerateBlackBoxOptimizationBenchmarking.evalBlackBoxOptimizationBenchmarking.f0BlackBoxOptimizationBenchmarking.f1BlackBoxOptimizationBenchmarking.f10BlackBoxOptimizationBenchmarking.f10_optBlackBoxOptimizationBenchmarking.f11BlackBoxOptimizationBenchmarking.f11_optBlackBoxOptimizationBenchmarking.f12BlackBoxOptimizationBenchmarking.f12_optBlackBoxOptimizationBenchmarking.f13BlackBoxOptimizationBenchmarking.f13_optBlackBoxOptimizationBenchmarking.f14BlackBoxOptimizationBenchmarking.f14_optBlackBoxOptimizationBenchmarking.f15BlackBoxOptimizationBenchmarking.f15_optBlackBoxOptimizationBenchmarking.f16BlackBoxOptimizationBenchmarking.f16_optBlackBoxOptimizationBenchmarking.f17BlackBoxOptimizationBenchmarking.f17_optBlackBoxOptimizationBenchmarking.f18BlackBoxOptimizationBenchmarking.f18_optBlackBoxOptimizationBenchmarking.f19BlackBoxOptimizationBenchmarking.f19_optBlackBoxOptimizationBenchmarking.f1_optBlackBoxOptimizationBenchmarking.f2BlackBoxOptimizationBenchmarking.f20BlackBoxOptimizationBenchmarking.f20_optBlackBoxOptimizationBenchmarking.f2_optBlackBoxOptimizationBenchmarking.f3BlackBoxOptimizationBenchmarking.f3_optBlackBoxOptimizationBenchmarking.f4BlackBoxOptimizationBenchmarking.f4_optBlackBoxOptimizationBenchmarking.f5BlackBoxOptimizationBenchmarking.f5_optBlackBoxOptimizationBenchmarking.f6BlackBoxOptimizationBenchmarking.f6_optBlackBoxOptimizationBenchmarking.f7BlackBoxOptimizationBenchmarking.f7_optBlackBoxOptimizationBenchmarking.f8BlackBoxOptimizationBenchmarking.f8_optBlackBoxOptimizationBenchmarking.f9BlackBoxOptimizationBenchmarking.f9_optBlackBoxOptimizationBenchmarking.f_penBlackBoxOptimizationBenchmarking.fun_symbolsBlackBoxOptimizationBenchmarking.includeBlackBoxOptimizationBenchmarking.maximum_dimensionBlackBoxOptimizationBenchmarking.one_pmBlackBoxOptimizationBenchmarking.run_benchmarkBlackBoxOptimizationBenchmarking.showBlackBoxOptimizationBenchmarking.test_x_optBlackBoxOptimizationBenchmarking.x10_optBlackBoxOptimizationBenchmarking.x11_optBlackBoxOptimizationBenchmarking.x12_optBlackBoxOptimizationBenchmarking.x13_optBlackBoxOptimizationBenchmarking.x14_optBlackBoxOptimizationBenchmarking.x15_optBlackBoxOptimizationBenchmarking.x16_optBlackBoxOptimizationBenchmarking.x17_optBlackBoxOptimizationBenchmarking.x18_optBlackBoxOptimizationBenchmarking.x19_optBlackBoxOptimizationBenchmarking.x1_optBlackBoxOptimizationBenchmarking.x20_optBlackBoxOptimizationBenchmarking.x2_optBlackBoxOptimizationBenchmarking.x3_optBlackBoxOptimizationBenchmarking.x4_optBlackBoxOptimizationBenchmarking.x5_optBlackBoxOptimizationBenchmarking.x6_optBlackBoxOptimizationBenchmarking.x7_optBlackBoxOptimizationBenchmarking.x8_optBlackBoxOptimizationBenchmarking.x9_optBlackBoxOptimizationBenchmarking.ΛBlackBoxOptimizationBenchmarking.∑"
},

]}
