var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Yötä-1",
    "page": "Readme",
    "title": "Yötä",
    "category": "section",
    "text": "(Image: Build Status)Reverse-mode automatic differentiation for static and dynamic graphs."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "mutable struct Linear{T}\n    W::AbstractArray{T,2}\n    b::AbstractArray{T}\nend\n\nforward(m::Linear, X) = m.W * X\n\nloss(m::Linear, X) = sum(forward(m, X))\n\nm = Linear(rand(3,4), rand(3))\nX = rand(4,5)\n\nval, g = grad(loss, m, X)g is an object of type GradientResult holding gradients w.r.t. input variables. For scalars and tensors it returns gradient value, for structs it returns dictionary of (field path → gradient) pairs:julia> g[1]\nDict{Tuple{Symbol},Array{Float64,2}} with 1 entry:\n  (:W,) => [3.38128 2.97142 2.39706 1.55525; 3.38128 2.97142 2.39706 1.55525; 3.38128 2.97142 2.39706 1.55525]   # gradient w.r.t. m.W\n\njulia> g[2]  # gradient w.r.t. X\n4×5 Array{Float64,2}:\n 0.910691  0.910691  0.910691  0.910691  0.910691\n 1.64994   1.64994   1.64994   1.64994   1.64994 \n 1.81215   1.81215   1.81215   1.81215   1.81215 \n 2.31594   2.31594   2.31594   2.31594   2.31594GradientResult can be used in conjunction with update!() function to modify tensors and fields of (mutable) structs. To continue out previous example:for i=1:100\n    val, g = grad(loss, m, X)\n    println(\"Loss value in $(i)th epoch: $val\")\n    update!(m, g[1], (x, gx) -> x .- 0.01gx)    \nend(Note that our simplified loss function doesn\'t actually represent an error to be minimized, so loss value quickly goes below zero. For more realistic and much more complex examples see vae.jl.)"
},

{
    "location": "#Custom-derivatives-1",
    "page": "Readme",
    "title": "Custom derivatives",
    "category": "section",
    "text": "You can add custom derivatives using @diffrule macro. logistic(x) = 1 / (1 + exp(-x))\n# for an expression like `logistic(x)` where x is a Number\n# gradient w.r.t. x\n# is `(logistic(x) * (1 - logistic(x)) * ds)` where \"ds\" stands for derivative \"dL/dy\"\n@diffrule logistic(x::Number) x (logistic(x) * (1 - logistic(x)) * ds)\n\nL(x) = sum(logistic.(x))\nval, g = grad(L, rand(5))"
},

{
    "location": "#Tracer-and-the-Tape-1",
    "page": "Readme",
    "title": "Tracer and the Tape",
    "category": "section",
    "text": "Being a reverse-mode AD package, Yota works in 2 steps:Record all primitive operations onto a \"tape\".\nGo back trough the tape, recording derivatives for each operation.\"Tape\" here is simply a list of operations. You can get the tape as a .tape field of GradientResult or construct it directly using trace function:import Yota: trace\n\nval, tape = trace(L, rand(5))\nprint(tape)\n\n# Tape\n#   inp %1::Array{Float64,1}\n#   const %2 = logistic::typeof(logistic)\n#   %3 = broadcast(%2, %1)::Array{Float64,1}\n#   %4 = sum(%3)::Float64trace uses Cassette.jl to collect function calls during execution. Functions are divided into 2 groups:primitive, such as *, sum, sin, etc. or any function for which @diffrule is defined. These are recorded to the tape;\nnon-primitive, which are traced-through down to primitive ones.  Tape can also be executed and compiled:using BenchmarkTools\nimport Yota: play!, compile!\n\nx = rand(5)\n\n@btime play!(tape, x)\n# 3.526 μs (13 allocations: 640 bytes)\n\ncompile!(tape)\n@btime play!(tape, x)\n# 492.063 ns (2 allocations: 144 bytes)"
},

{
    "location": "#Loops,-conditions,-etc.-1",
    "page": "Readme",
    "title": "Loops, conditions, etc.",
    "category": "section",
    "text": "Tracer records operations as they are executed the first time with given arguments. For example, for a loop like this:function iterative(x, n)\n    for i=1:n\n        x = 2x\n    end\n    return x\nendexactly n iterations will be recorded to the tape and all future values of n will make no effect.  "
},

{
    "location": "autodocs/#Yota.back!",
    "page": "Docstrings",
    "title": "Yota.back!",
    "category": "function",
    "text": "Backpropagate through the tape, record derivatives as new operations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.check_deriv_sizes",
    "page": "Docstrings",
    "title": "Yota.check_deriv_sizes",
    "category": "function",
    "text": "For each input that has a derivative on this tape check if the derivative has the same size as the input.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.copy_with",
    "page": "Docstrings",
    "title": "Yota.copy_with",
    "category": "function",
    "text": "Copy struct x replacing specified fields with new values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.deriv_expr",
    "page": "Docstrings",
    "title": "Yota.deriv_expr",
    "category": "function",
    "text": "Rewrite single call expression into its derivative. Example:\n\nderiv_expr(:(sin(x)), [Float64], 1)\n# ==> :((cos(x) * ds))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.find_rules_for",
    "page": "Docstrings",
    "title": "Yota.find_rules_for",
    "category": "function",
    "text": "Internal function for finding rule by function name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.generate_body",
    "page": "Docstrings",
    "title": "Yota.generate_body",
    "category": "function",
    "text": "Main part of generated function code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.generate_epilogue",
    "page": "Docstrings",
    "title": "Yota.generate_epilogue",
    "category": "function",
    "text": "Generate last block of function code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.generate_prologue",
    "page": "Docstrings",
    "title": "Yota.generate_prologue",
    "category": "function",
    "text": "Generate initialization block of function code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.grad",
    "page": "Docstrings",
    "title": "Yota.grad",
    "category": "function",
    "text": "Find gradient of f w.r.t. its arguments. Example:\n\nval, g = grad(sum, rand(3))\n\nwhere:\n\nval is the value of f at this point\ng::GradResult is a collection of gradients\n\nGradResult is indexed by argument index and contains gradients in a format most suitable for that argument, namely:\n\nfor arrays: arrays of the same type and size\nfor reals: reals\nfor mutable structs: dictionary of {(:field, :path) => value} pairs.\n\nAll gradients can be applied to original variables using update!() function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.is_cuarray",
    "page": "Docstrings",
    "title": "Yota.is_cuarray",
    "category": "function",
    "text": "Check if the argument is of type CuArray. Doesn\'t require CuArrays.jl to be loaded\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.record!",
    "page": "Docstrings",
    "title": "Yota.record!",
    "category": "function",
    "text": "Record a new operation (defined by its type and arguments for constructor) to a tape and return ID of this new op.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.record_expr!",
    "page": "Docstrings",
    "title": "Yota.record_expr!",
    "category": "function",
    "text": "Parse a complex call expression and record corresponding operations to a tape.\n\nOptionally takes substitution table (st parameter) to replace known symbols with provided values.\n\nKeyword params:\n\nst::Dict - substitution table, used to replace symbols in ex with tape op ids\nbcast::Bool - replace all function calls with corresponding broadcasting\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.recover_broadcast",
    "page": "Docstrings",
    "title": "Yota.recover_broadcast",
    "category": "function",
    "text": "Recover broadcast operation from Broadcast.broadcasted and Broadcast.materialize\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.replace_in_args!",
    "page": "Docstrings",
    "title": "Yota.replace_in_args!",
    "category": "function",
    "text": "Replace all call arguments according to the provided dict\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.rewrite_mul",
    "page": "Docstrings",
    "title": "Yota.rewrite_mul",
    "category": "function",
    "text": "Rewrite :(Z = X * Y) into :(mul!(Z, X, Y)), but only if X and Y are arrays\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yota.trace",
    "page": "Docstrings",
    "title": "Yota.trace",
    "category": "function",
    "text": "Trace function execution using provided arguments. Returns calculated value and a tape.\n\nfoo(x) = 2.0x + 1.0\nval, tape = trace(foo, 4.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Yota.@diffruleYota.AbstractDeviceYota.AbstractOpYota.AssignYota.CPUYota.CallYota.ConstantYota.DEBUG_STATEYota.DIFF_PHSYota.DIFF_RULESYota.GPUYota.GRAD_CACHEYota.GradResultYota.InputYota.MaybeFunctionYota.PRIMITIVESYota.TapeYota.TraceCtxYota.YotaYota._gradYota.add_diff_ruleYota.back!Yota.check_deriv_sizesYota.compileYota.compile!Yota.copy_withYota.deriv!Yota.deriv_broadcast!Yota.deriv_exprYota.device_opYota.deviceofYota.evalYota.exec!Yota.field_pathsYota.find_rules_forYota.generate_bodyYota.generate_epilogueYota.generate_function_exprYota.generate_prologueYota.get_arg_namesYota.get_arg_typesYota.getderivYota.getfield_nestedYota.gradYota.guess_deviceYota.includeYota.is_cuarrayYota.isparametersYota.make_nameYota.match_ruleYota.mean_gradYota.minus_updaterYota.modYota.play!Yota.record!Yota.record_expr!Yota.recover_broadcastYota.replace_in_args!Yota.resolve_functions_and_types!Yota.resolve_old_broadcastYota.rewrite_mulYota.rewrite_with_keywordsYota.setderiv!Yota.setfield_nested!Yota.simplifyYota.squash_assignedYota.step_back!Yota.sum_dropdimsYota.sum_gradYota.to_deviceYota.to_exgraphYota.to_exnodeYota.to_unbroadcast_exprYota.traceYota.ungetindexYota.ungetindex!Yota.unmake_nameYota.update!Yota.versionYota.with_free_args_as_constantsYota.without_types"
},

]}
