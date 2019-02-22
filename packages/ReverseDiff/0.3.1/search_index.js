var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ReverseDiff-1",
    "page": "Readme",
    "title": "ReverseDiff",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Go To ReverseDiff\'s DocumentationSee ReverseDiff Usage ExamplesNote: While ReverseDiff technically supports Julia v0.7/v1.0 and is somewhat maintained, it is currently not actively developed. Instead, ForwardDiff/ReverseDiff\'s maintainers are focused on the development of a new AD package built on top of Cassette. In the meantime, it might be worth checking out other reverse-mode AD implementations in Nabla.jl, AutoGrad.jl, Flux.jl, or XGrad.jl.ReverseDiff implements methods to take gradients, Jacobians, Hessians, and higher-order derivatives of native Julia functions (or any callable object, really) using reverse mode automatic differentiation (AD).While performance can vary depending on the functions you evaluate, the algorithms implemented by ReverseDiff generally outperform non-AD algorithms in both speed and accuracy.Wikipedia\'s entry on automatic differentiation is a useful resource for learning about the advantages of AD techniques over other common differentiation methods (such as finite differencing)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install ReverseDiff, simply use Julia\'s package manager:julia> Pkg.add(\"ReverseDiff\")The current version of ReverseDiff supports Julia v0.5 (and intends to support Julia v0.6 once it is released)."
},

{
    "location": "#Why-use-ReverseDiff?-1",
    "page": "Readme",
    "title": "Why use ReverseDiff?",
    "category": "section",
    "text": "Other Julia packages may provide some of these features, but only ReverseDiff provides all of them (as far as I know at the time of this writing):supports a large subset of the Julia language, including loops, recursion, and control flow\nuser-friendly API for reusing and compiling tapes\nuser-friendly performance annotations such as @forward and @skip (with more to come!)\ncompatible with ForwardDiff, enabling mixed-mode AD\nbuilt-in definitions leverage the benefits of ForwardDiff\'s Dual numbers (e.g. SIMD, zero-overhead arithmetic)\na familiar differentiation API for ForwardDiff users\nnon-allocating linear algebra optimizations\nnested differentiation\nsuitable as an execution backend for graphical machine learning libraries\nReverseDiff doesn\'t need to record scalar indexing operations (a huge cost for many similar libraries)\nhigher-order map and broadcast optimizations\nit\'s well tested...and, simply put, it\'s fast (for gradients, at least). Using the code from examples/gradient.jl:julia> using BenchmarkTools\n\n# this script defines f and ∇f!\njulia> include(joinpath(Pkg.dir(\"ReverseDiff\"), \"examples/gradient.jl\"));\n\njulia> a, b = rand(100, 100), rand(100, 100);\n\njulia> inputs = (a, b);\n\njulia> results = (similar(a), similar(b));\n\n# Benchmark the original objective function, sum(a\' * b + a * b\')\njulia> @benchmark f($a, $b)\nBenchmarkTools.Trial:\n  memory estimate:  234.61 kb\n  allocs estimate:  6\n  --------------\n  minimum time:     110.000 μs (0.00% GC)\n  median time:      137.416 μs (0.00% GC)\n  mean time:        173.085 μs (11.63% GC)\n  maximum time:     3.613 ms (91.47% GC)\n\n# Benchmark ∇f! at the same inputs (this is executing the function,\n# getting the gradient w.r.t. `a`, and getting the gradient w.r.t\n# to `b` simultaneously). Notice that the whole thing is\n# non-allocating.\njulia> @benchmark ∇f!($results, $inputs)\nBenchmarkTools.Trial:\n  memory estimate:  0.00 bytes\n  allocs estimate:  0\n  --------------\n  minimum time:     429.650 μs (0.00% GC)\n  median time:      431.460 μs (0.00% GC)\n  mean time:        469.916 μs (0.00% GC)\n  maximum time:     937.512 μs (0.00% GC)I\'ve used this benchmark (and others) to pit ReverseDiff against every other native Julia reverse-mode AD package that I know of (including source-to-source packages), and have found ReverseDiff to be faster and use less memory in most cases."
},

{
    "location": "#Should-I-use-ReverseDiff-or-ForwardDiff?-1",
    "page": "Readme",
    "title": "Should I use ReverseDiff or ForwardDiff?",
    "category": "section",
    "text": "ForwardDiff is algorithmically more efficient for differentiating functions where the input dimension is less than the output dimension, while ReverseDiff is algorithmically more efficient for differentiating functions where the output dimension is less than the input dimension.Thus, ReverseDiff is generally a better choice for gradients, but Jacobians and Hessians are trickier to determine. For example, optimized methods for computing nested derivatives might use a combination of forward-mode and reverse-mode AD.ForwardDiff is often faster than ReverseDiff for lower dimensional gradients (length(input) < 100), or gradients of functions where the number of input parameters is small compared to the number of operations performed on them. ReverseDiff is often faster if your code is expressed as a series of array operations, e.g. a composition of Julia\'s Base linear algebra methods.In general, your choice of algorithms will depend on the function being differentiated, and you should benchmark different methods to see how they fare."
},

{
    "location": "autodocs/#ReverseDiff.@forward",
    "page": "Docstrings",
    "title": "ReverseDiff.@forward",
    "category": "macro",
    "text": "ReverseDiff.@forward(f)(args::Real...)\nReverseDiff.@forward f(args::Real...) = ...\nReverseDiff.@forward f = (args::Real...) -> ...\n\nDeclare that the given function should be differentiated using forward mode automatic differentiation. Note that the macro can be used at either the definition site or at the call site of f. Currently, only length(args) <= 2 is supported. Note that, if f is defined within another function g, f should not close over any differentiable input of g. By using this macro, you are providing a guarantee that this property holds true.\n\nThis macro can be very beneficial for performance when intermediate functions in your computation are low dimensional scalar functions, because it minimizes the number of instructions that must be recorded to the tape. For example, take the function sigmoid(n) = 1. / (1. + exp(-n)). Normally, using ReverseDiff to differentiate this function would require recording 4 instructions (-, exp, +, and /). However, if we apply the @forward macro, only one instruction will be recorded (sigmoid). The sigmoid function will then be differentiated using ForwardDiff\'s Dual number type.\n\nThis is also beneficial for higher-order elementwise function application. ReverseDiff overloads map/broadcast to dispatch on @forward-applied functions. For example, map(@forward(f), x) will usually be more performant than map(f, x).\n\nReverseDiff overloads many Base scalar functions to behave as @forward functions by default. A full list is given by DiffRules.diffrules().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.@skip",
    "page": "Docstrings",
    "title": "ReverseDiff.@skip",
    "category": "macro",
    "text": "ReverseDiff.@skip(f)(args::Real...)\nReverseDiff.@skip f(args::Real...) = ...\nReverseDiff.@skip f = (args::Real...) -> ...\n\nDeclare that the given function should be skipped during the instruction-recording phase of differentiation. Note that the macro can be used at either the definition site or at the call site of f. Note that, if f is defined within another function g, f should not close over any differentiable input of g. By using this macro, you are providing a guarantee that this property holds true.\n\nReverseDiff overloads many Base scalar functions to behave as @skip functions by default. A full list is given by ReverseDiff.SKIPPED_UNARY_SCALAR_FUNCS and ReverseDiff.SKIPPED_BINARY_SCALAR_FUNCS.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.CompiledTape",
    "page": "Docstrings",
    "title": "ReverseDiff.CompiledTape",
    "category": "type",
    "text": "(::Type{CompiledTape}){T<:AbstractTape}(t::T)\n\nConstruct a compiled type by wrapping the forward_exec! and reverse_exec! methods on each instruction in the tape.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.ForwardExecutor",
    "page": "Docstrings",
    "title": "ReverseDiff.ForwardExecutor",
    "category": "type",
    "text": "ForwardExecutor{I <: AbstractInstruction}\n\nThe ForwardExecutor type captures a single Instruction in order to allow fast evaluation of forward_exec!(instruction) via call overloading during the forward pass of differentiation. This is useful because an InstructionTape is stored as a vector of non-concrete AbstractInstruction elements, so calling forward_exec!(instruction) on each instruction would incur some run-time dispatch. Instead, we can create a ForwardExecutor and a FunctionWrapper for each instruction and store those in a concretely-typed Vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.GradientConfig",
    "page": "Docstrings",
    "title": "ReverseDiff.GradientConfig",
    "category": "type",
    "text": "ReverseDiff.GradientConfig(input, tp::InstructionTape = InstructionTape())\n\nReturn a GradientConfig instance containing the preallocated tape and work buffers used by the ReverseDiff.gradient/ReverseDiff.gradient! methods.\n\nNote that input is only used for type and shape information; it is not stored or modified in any way. It is assumed that the element type of input is same as the element type of the target function\'s output.\n\nSee ReverseDiff.gradient for a description of acceptable types for input.\n\n\n\n\n\nReverseDiff.GradientConfig(input, ::Type{D}, tp::InstructionTape = InstructionTape())\n\nLike GradientConfig(input, tp), except the provided type D is assumed to be the element type of the target function\'s output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.GradientTape",
    "page": "Docstrings",
    "title": "ReverseDiff.GradientTape",
    "category": "type",
    "text": "ReverseDiff.GradientTape(f, input, cfg::GradientConfig = GradientConfig(input))\n\nReturn a GradientTape instance containing a pre-recorded execution trace of f at the given input.\n\nThis GradientTape can then be passed to ReverseDiff.gradient! to take gradients of the execution trace with new input values. Note that these new values must have the same element type and shape as input.\n\nSee ReverseDiff.gradient for a description of acceptable types for input.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.HessianConfig",
    "page": "Docstrings",
    "title": "ReverseDiff.HessianConfig",
    "category": "type",
    "text": "ReverseDiff.HessianConfig(input::AbstractArray, gtp::InstructionTape = InstructionTape(), jtp::InstructionTape = InstructionTape())\n\nReturn a HessianConfig instance containing the preallocated tape and work buffers used by the ReverseDiff.hessian/ReverseDiff.hessian! methods. gtp is the tape used for the inner gradient calculation, while jtp is used for outer Jacobian calculation.\n\nNote that input is only used for type and shape information; it is not stored or modified in any way. It is assumed that the element type of input is same as the element type of the target function\'s output.\n\n\n\n\n\nReverseDiff.HessianConfig(input::AbstractArray, ::Type{D}, gtp::InstructionTape = InstructionTape(), jtp::InstructionTape = InstructionTape())\n\nLike HessianConfig(input, tp), except the provided type D is assumed to be the element type of the target function\'s output.\n\n\n\n\n\nReverseDiff.HessianConfig(result::DiffResults.DiffResult, input::AbstractArray, gtp::InstructionTape = InstructionTape(), jtp::InstructionTape = InstructionTape())\n\nLike HessianConfig(input, tp), but utilize result along with input to construct work buffers.\n\nNote that result and input are only used for type and shape information; they are not stored or modified in any way.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.HessianTape",
    "page": "Docstrings",
    "title": "ReverseDiff.HessianTape",
    "category": "type",
    "text": "ReverseDiff.HessianTape(f, input, cfg::HessianConfig = HessianConfig(input))\n\nReturn a HessianTape instance containing a pre-recorded execution trace of f at the given input.\n\nThis HessianTape can then be passed to ReverseDiff.hessian! to take Hessians of the execution trace with new input values. Note that these new values must have the same element type and shape as input.\n\nSee ReverseDiff.hessian for a description of acceptable types for input.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.JacobianConfig",
    "page": "Docstrings",
    "title": "ReverseDiff.JacobianConfig",
    "category": "type",
    "text": "ReverseDiff.JacobianConfig(input, tp::InstructionTape = InstructionTape())\n\nReturn a JacobianConfig instance containing the preallocated tape and work buffers used by the ReverseDiff.jacobian/ReverseDiff.jacobian! methods.\n\nNote that input is only used for type and shape information; it is not stored or modified in any way. It is assumed that the element type of input is same as the element type of the target function\'s output.\n\nSee ReverseDiff.jacobian for a description of acceptable types for input.\n\nReverseDiff.JacobianConfig(input, ::Type{D}, tp::InstructionTape = InstructionTape())\n\nLike JacobianConfig(input, tp), except the provided type D is assumed to be the element type of the target function\'s output.\n\n\n\n\n\nReverseDiff.JacobianConfig(output::AbstractArray, input, tp::InstructionTape = InstructionTape())\n\nReturn a JacobianConfig instance containing the preallocated tape and work buffers used by the ReverseDiff.jacobian/ReverseDiff.jacobian! methods. This method assumes the target function has the form f!(output, input)\n\nNote that input and output are only used for type and shape information; they are not stored or modified in any way.\n\nSee ReverseDiff.jacobian for a description of acceptable types for input.\n\n\n\n\n\nReverseDiff.JacobianConfig(result::DiffResults.DiffResult, input, tp::InstructionTape = InstructionTape())\n\nA convenience method for JacobianConfig(DiffResults.value(result), input, tp).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.JacobianTape",
    "page": "Docstrings",
    "title": "ReverseDiff.JacobianTape",
    "category": "type",
    "text": "ReverseDiff.JacobianTape(f, input, cfg::JacobianConfig = JacobianConfig(input))\n\nReturn a JacobianTape instance containing a pre-recorded execution trace of f at the given input.\n\nThis JacobianTape can then be passed to ReverseDiff.jacobian! to take Jacobians of the execution trace with new input values. Note that these new values must have the same element type and shape as input.\n\nSee ReverseDiff.jacobian for a description of acceptable types for input.\n\n\n\n\n\nReverseDiff.JacobianTape(f!, output, input, cfg::JacobianConfig = JacobianConfig(output, input))\n\nReturn a JacobianTape instance containing a pre-recorded execution trace of f at the given output and input.\n\nThis JacobianTape can then be passed to ReverseDiff.jacobian! to take Jacobians of the execution trace with new input values. Note that these new values must have the same element type and shape as input.\n\nSee ReverseDiff.jacobian for a description of acceptable types for input.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.ReverseExecutor",
    "page": "Docstrings",
    "title": "ReverseDiff.ReverseExecutor",
    "category": "type",
    "text": "ReverseExecutor{I <: AbstractInstruction}\n\nThe ReverseExecutor type captures a single Instruction in order to allow fast evaluation of reverse_exec!(instruction) via call overloading during the forward pass of differentiation. This is useful because an InstructionTape is stored as a vector of non-concrete AbstractInstruction elements, so calling reverse_exec!(instruction) on each instruction would incur some run-time dispatch. Instead, we can create a ReverseExecutor and a FunctionWrapper for each instruction and store those in a concretely-typed Vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.compile",
    "page": "Docstrings",
    "title": "ReverseDiff.compile",
    "category": "function",
    "text": "ReverseDiff.compile(t::AbstractTape)\n\nReturn a fully compiled representation of t of type CompiledTape. This object can be passed to any API methods that accept t (e.g. gradient!(result, t, input)).\n\nIn many cases, compiling t can significantly speed up execution time. Note that the longer the tape, the more time compilation may take. Very long tapes (i.e. when length(t) is on the order of 10000 elements) can take a very long time to compile.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.gradient",
    "page": "Docstrings",
    "title": "ReverseDiff.gradient",
    "category": "function",
    "text": "ReverseDiff.gradient(f, input, cfg::GradientConfig = GradientConfig(input))\n\nIf input is an AbstractArray, assume f has the form f(::AbstractArray{<:Real})::Real and return ∇f(input).\n\nIf input is a tuple of AbstractArrays, assume f has the form f(::AbstractArray{<:Real}...)::Real (such that it can be called as f(input...)) and return a Tuple where the ith element is the gradient of f w.r.t. input[i].\n\nNote that cfg can be preallocated and reused for subsequent calls.\n\nIf possible, it is highly recommended to use ReverseDiff.GradientTape to prerecord f. Otherwise, this method will have to re-record f\'s execution trace for every subsequent call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.gradient!",
    "page": "Docstrings",
    "title": "ReverseDiff.gradient!",
    "category": "function",
    "text": "ReverseDiff.gradient!(result, f, input, cfg::GradientConfig = GradientConfig(input))\n\nReturns result. This method is exactly like ReverseDiff.gradient(f, input, cfg), except it stores the resulting gradient(s) in result rather than allocating new memory.\n\nresult can be an AbstractArray or a Tuple of AbstractArrays. The result (or any of its elements, if isa(result, Tuple)), can also be a DiffResults.DiffResult, in which case the primal value f(input) (or f(input...), if isa(input, Tuple)) will be stored in it as well.\n\n\n\n\n\nReverseDiff.gradient!(tape::Union{GradientTape,CompiledGradient}, input)\n\nIf input is an AbstractArray, assume tape represents a function of the form f(::AbstractArray)::Real and return ∇f(input).\n\nIf input is a tuple of AbstractArrays, assume tape represents a function of the form f(::AbstractArray...)::Real and return a Tuple where the ith element is the gradient of f w.r.t. input[i].\n\n\n\n\n\nReverseDiff.gradient!(result, tape::Union{GradientTape,CompiledGradient}, input)\n\nReturns result. This method is exactly like ReverseDiff.gradient!(tape, input), except it stores the resulting gradient(s) in result rather than allocating new memory.\n\nresult can be an AbstractArray or a Tuple of AbstractArrays. The result (or any of its elements, if isa(result, Tuple)), can also be a DiffResults.DiffResult, in which case the primal value f(input) (or f(input...), if isa(input, Tuple)) will be stored in it as well.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.hessian",
    "page": "Docstrings",
    "title": "ReverseDiff.hessian",
    "category": "function",
    "text": "ReverseDiff.hessian(f, input::AbstractArray, cfg::HessianConfig = HessianConfig(input))\n\nGiven f(input::AbstractArray{<:Real})::Real, return fs Hessian w.r.t. to the given input.\n\nNote that cfg can be preallocated and reused for subsequent calls.\n\nIf possible, it is highly recommended to use ReverseDiff.HessianTape to prerecord f. Otherwise, this method will have to re-record f\'s execution trace for every subsequent call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.hessian!",
    "page": "Docstrings",
    "title": "ReverseDiff.hessian!",
    "category": "function",
    "text": "ReverseDiff.hessian!(result::AbstractArray, f, input::AbstractArray, cfg::HessianConfig = HessianConfig(input))\n\nReverseDiff.hessian!(result::DiffResult, f, input::AbstractArray, cfg::HessianConfig = HessianConfig(result, input))\n\nReturns result. This method is exactly like ReverseDiff.hessian(f, input, cfg), except it stores the resulting Hessian in result rather than allocating new memory.\n\nIf result is a DiffResults.DiffResult, the primal value f(input) and the gradient ∇f(input) will be stored in it along with the Hessian H(f)(input).\n\n\n\n\n\nReverseDiff.hessian!(tape::Union{HessianTape,CompiledHessian}, input)\n\nAssuming tape represents a function of the form f(::AbstractArray{<:Real})::Real, return the Hessian H(f)(input).\n\n\n\n\n\nReverseDiff.hessian!(result::AbstractArray, tape::Union{HessianTape,CompiledHessian}, input)\n\nReverseDiff.hessian!(result::DiffResult, tape::Union{HessianTape,CompiledHessian}, input)\n\nReturns result. This method is exactly like ReverseDiff.hessian!(tape, input), except it stores the resulting Hessian in result rather than allocating new memory.\n\nIf result is a DiffResults.DiffResult, the primal value f(input) and the gradient ∇f(input) will be stored in it along with the Hessian H(f)(input).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.jacobian",
    "page": "Docstrings",
    "title": "ReverseDiff.jacobian",
    "category": "function",
    "text": "ReverseDiff.jacobian(f, input, cfg::JacobianConfig = JacobianConfig(input))\n\nIf input is an AbstractArray, assume f has the form f(::AbstractArray{<:Real})::AbstractArray{<:Real} and return J(f)(input).\n\nIf input is a tuple of AbstractArrays, assume f has the form f(::AbstractArray{<:Real}...)::AbstractArray{<:Real} (such that it can be called as f(input...)) and return a Tuple where the ith element is the  Jacobian of f w.r.t. input[i].\n\nNote that cfg can be preallocated and reused for subsequent calls.\n\nIf possible, it is highly recommended to use ReverseDiff.JacobianTape to prerecord f. Otherwise, this method will have to re-record f\'s execution trace for every subsequent call.\n\n\n\n\n\nReverseDiff.jacobian(f!, output, input, cfg::JacobianConfig = JacobianConfig(output, input))\n\nExactly like ReverseDiff.jacobian(f, input, cfg), except the target function has the form f!(output::AbstractArray{<:Real}, input::AbstractArray{<:Real}...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReverseDiff.jacobian!",
    "page": "Docstrings",
    "title": "ReverseDiff.jacobian!",
    "category": "function",
    "text": "ReverseDiff.jacobian!(result, f, input, cfg::JacobianConfig = JacobianConfig(input))\n\nReturns result. This method is exactly like ReverseDiff.jacobian(f, input, cfg), except it stores the resulting Jacobian(s) in result rather than allocating new memory.\n\nresult can be an AbstractArray or a Tuple of AbstractArrays. The result (or any of its elements, if isa(result, Tuple)), can also be a DiffResults.DiffResult, in which case the primal value f(input) (or f(input...), if isa(input, Tuple)) will be stored in it as well.\n\n\n\n\n\nReverseDiff.jacobian!(result, f!, output, input, cfg::JacobianConfig = JacobianConfig(output, input))\n\nExactly like ReverseDiff.jacobian!(result, f, input, cfg), except the target function has the form f!(output::AbstractArray{<:Real}, input::AbstractArray{<:Real}...).\n\n\n\n\n\nReverseDiff.jacobian!(tape::Union{JacobianTape,CompiledJacobian}, input)\n\nIf input is an AbstractArray, assume tape represents a function of the form f(::AbstractArray{<:Real})::AbstractArray{<:Real} or f!(::AbstractArray{<:Real}, ::AbstractArray{<:Real}) and return tape\'s Jacobian w.r.t. input.\n\nIf input is a tuple of AbstractArrays, assume tape represents a function of the form f(::AbstractArray{<:Real}...)::AbstractArray{<:Real} or f!(::AbstractArray{<:Real}, ::AbstractArray{<:Real}...) and return a Tuple where the ith element is tape\'s Jacobian w.r.t. input[i].\n\nNote that if tape represents a function of the form f!(output, input...), you can only execute tape with new input values. There is no way to re-run tape\'s tape with new output values; since f! can mutate output, there exists no stable \"hook\" for loading new output values into the tape.\n\n\n\n\n\nReverseDiff.jacobian!(result, tape::Union{JacobianTape,CompiledJacobian}, input)\n\nReturns result. This method is exactly like ReverseDiff.jacobian!(tape, input), except it stores the resulting Jacobian(s) in result rather than allocating new memory.\n\nresult can be an AbstractArray or a Tuple of AbstractArrays. The result (or any of its elements, if isa(result, Tuple)), can also be a DiffResults.DiffResult, in which case the primal value of the target function will be stored in it as well.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ReverseDiff.@forwardReverseDiff.@skipReverseDiff.ARRAY_TYPESReverseDiff.AbstractConfigReverseDiff.AbstractInstructionReverseDiff.AbstractTapeReverseDiff.CompiledGradientReverseDiff.CompiledHessianReverseDiff.CompiledJacobianReverseDiff.CompiledTapeReverseDiff.DiffResultsReverseDiff.ForwardExecutorReverseDiff.ForwardOptimizeReverseDiff.GradientConfigReverseDiff.GradientTapeReverseDiff.HESS_MULTI_ARG_ERR_MSGReverseDiff.HessianConfigReverseDiff.HessianTapeReverseDiff.InstructionTapeReverseDiff.JacobianConfigReverseDiff.JacobianTapeReverseDiff.NULL_INDEXReverseDiff.NULL_TAPEReverseDiff.REAL_TYPESReverseDiff.ReverseDiffReverseDiff.ReverseExecutorReverseDiff.SKIPPED_BINARY_SCALAR_FUNCSReverseDiff.SKIPPED_UNARY_SCALAR_FUNCSReverseDiff.ScalarInstructionReverseDiff.SkipOptimizeReverseDiff.SpecialInstructionReverseDiff.TrackedArrayReverseDiff.TrackedMatrixReverseDiff.TrackedRealReverseDiff.TrackedTypeReverseDiff.TrackedVectorReverseDiff._GradientConfigReverseDiff._GradientTapeReverseDiff._HessianTapeReverseDiff._JacobianConfigReverseDiff._JacobianTapeReverseDiff._ScalarInstructionReverseDiff._SpecialInstructionReverseDiff.annotate_func_exprReverseDiff.base_partialsReverseDiff.base_partials!ReverseDiff.base_partials_kernelReverseDiff.binary_scalar_forward_exec!ReverseDiff.broadcast_decrement_deriv!ReverseDiff.broadcast_increment_deriv!ReverseDiff.broadcast_ldivReverseDiff.broadcast_minusReverseDiff.broadcast_mulReverseDiff.broadcast_plusReverseDiff.broadcast_powReverseDiff.broadcast_rdivReverseDiff.captureReverseDiff.colon2rangeReverseDiff.compactreprReverseDiff.compileReverseDiff.compile_gradientReverseDiff.compile_hessianReverseDiff.compile_jacobianReverseDiff.construct_resultReverseDiff.decrement_deriv!ReverseDiff.denom_partialsReverseDiff.denom_partials!ReverseDiff.denom_partials_kernelReverseDiff.derivReverseDiff.deriv!ReverseDiff.derivtypeReverseDiff.diffresult_increment_deriv!ReverseDiff.evalReverseDiff.exp_partialsReverseDiff.exp_partials!ReverseDiff.exp_partials_kernelReverseDiff.extract_result!ReverseDiff.extract_result_value!ReverseDiff.fill_zeros!ReverseDiff.forward_exec!ReverseDiff.forward_pass!ReverseDiff.func_hookReverseDiff.getpartialReverseDiff.gradientReverseDiff.gradient!ReverseDiff.hasoriginReverseDiff.hastapeReverseDiff.hessianReverseDiff.hessian!ReverseDiff.idstrReverseDiff.includeReverseDiff.increment_deriv!ReverseDiff.index_boundReverseDiff.index_iterableReverseDiff.input_hookReverseDiff.istrackedReverseDiff.jacobianReverseDiff.jacobian!ReverseDiff.minus!ReverseDiff.mulargpullvalue!ReverseDiff.mulargvalueReverseDiff.numer_partialsReverseDiff.numer_partials!ReverseDiff.origintypeReverseDiff.output_hookReverseDiff.plus!ReverseDiff.pow_cacheReverseDiff.pull_deriv!ReverseDiff.pull_value!ReverseDiff.push_deriv!ReverseDiff.rdiv_cacheReverseDiff.record!ReverseDiff.record_dotReverseDiff.record_minusReverseDiff.record_minus!ReverseDiff.record_mulReverseDiff.record_mul!ReverseDiff.record_plusReverseDiff.record_plus!ReverseDiff.record_sum!ReverseDiff.reduction_increment_deriv!ReverseDiff.reshape_bodyReverseDiff.reverse_exec!ReverseDiff.reverse_mul!ReverseDiff.reverse_pass!ReverseDiff.scalar_forward_exec!ReverseDiff.scalar_reverse_exec!ReverseDiff.seed!ReverseDiff.seeded_forward_pass!ReverseDiff.seeded_reverse_pass!ReverseDiff.special_forward_exec!ReverseDiff.special_reverse_exec!ReverseDiff.tapeReverseDiff.trackReverseDiff.track!ReverseDiff.unary_scalar_forward_exec!ReverseDiff.unseed!ReverseDiff.valtypeReverseDiff.valueReverseDiff.value!"
},

]}
