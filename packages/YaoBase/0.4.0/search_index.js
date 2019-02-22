var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#YaoBase-1",
    "page": "Readme",
    "title": "YaoBase",
    "category": "section",
    "text": "(Image: Build Status) (Image: Codecov) (Image: Coveralls)Base package for Yao.jl. This package includes some basic infrastructure for manipulating quantum circuits."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In REPL, type] add YaoBase"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Please read the documentation here"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Apache License 2.0"
},

{
    "location": "autodocs/#YaoBase.@λ",
    "page": "Docstrings",
    "title": "YaoBase.@λ",
    "category": "macro",
    "text": "@λ <lambda definition>\n\nCreate legible lambdas.\n\nExample\n\njulia> @λ(x -> g(x)/3)\n(x -> g(x)/3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.ASTTools",
    "page": "Docstrings",
    "title": "YaoBase.ASTTools",
    "category": "module",
    "text": "ASTTools\n\nTools for manipulating Julia ASTs. This module provides similar functionality with MacroTools, but based on MLStyle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.AbstractRegister",
    "page": "Docstrings",
    "title": "YaoBase.AbstractRegister",
    "category": "type",
    "text": "AbstractRegister{B, T}\n\nAbstract type for quantum registers. B is the batch size, T is the data type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.AdjointRegister",
    "page": "Docstrings",
    "title": "YaoBase.AdjointRegister",
    "category": "type",
    "text": "AdjointRegister{B, T, RT} <: AbstractRegister{B, T}\n\nLazy adjoint for a quantum register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.Const",
    "page": "Docstrings",
    "title": "YaoBase.Const",
    "category": "module",
    "text": "Const\n\nContains common constant definitions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.QubitMismatchError",
    "page": "Docstrings",
    "title": "YaoBase.QubitMismatchError",
    "category": "type",
    "text": "QubitMismatchError <: Exception\n\nQubit number mismatch error when applying a Block to a Register or concatenating Blocks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.YaoBase",
    "page": "Docstrings",
    "title": "YaoBase.YaoBase",
    "category": "module",
    "text": "Base module for Yao.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BitBasis.basis",
    "page": "Docstrings",
    "title": "BitBasis.basis",
    "category": "function",
    "text": "basis(register) -> UnitRange\n\nReturns an UnitRange of the all the bits in the Hilbert space of given register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.batch_normalize",
    "page": "Docstrings",
    "title": "YaoBase.batch_normalize",
    "category": "function",
    "text": "batch_normalize\n\nnormalize a batch of vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.batch_normalize!",
    "page": "Docstrings",
    "title": "YaoBase.batch_normalize!",
    "category": "function",
    "text": "batch_normalize!(matrix)\n\nnormalize a batch of vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.cat",
    "page": "Docstrings",
    "title": "Base.cat",
    "category": "function",
    "text": "cat(::AbstractRegister...) -> register\n\nMerge several registers as one register via tensor product.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.datatype",
    "page": "Docstrings",
    "title": "YaoBase.datatype",
    "category": "function",
    "text": "datatype(register) -> Int\n\nReturns the numerical data type used by register.\n\nnote: Note\ndatatype is not the same with eltype, since AbstractRegister family is not exactly the same with AbstractArray, it is an iterator of several registers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.density_fidelity",
    "page": "Docstrings",
    "title": "YaoBase.density_fidelity",
    "category": "function",
    "text": "density_fidelity(ρ1, ρ2)\n\nGeneral fidelity (including mixed states) between two density matrix for qubits.\n\nDefinition\n\nF(ρ σ)^2 = tr(ρσ) + 2 sqrtdet(ρ)det(σ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.density_matrix",
    "page": "Docstrings",
    "title": "YaoBase.density_matrix",
    "category": "function",
    "text": "density_matrix(register)\n\nReturns the density matrix of current active qubits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.fidelity",
    "page": "Docstrings",
    "title": "YaoBase.fidelity",
    "category": "function",
    "text": "fidelity(register1, register2)\n\nReturn the fidelity between two states.\n\nDefinition\n\nThe fidelity of two quantum state for qubits is defined as:\n\nF(ρ σ) = tr(sqrtsqrtρσsqrtρ)\n\nOr its equivalent form (which we use in numerical calculation):\n\nF(ρ σ) = sqrt(tr(ρσ) + 2 sqrtdet(ρ)det(σ))\n\nReference\n\nJozsa R. Fidelity for mixed quantum states[J]. Journal of modern optics, 1994, 41(12): 2315-2323.\nNielsen M A, Chuang I. Quantum computation and quantum information[J]. 2002.\n\nnote: Note\nThe original definition of fidelity F was from \"transition probability\", defined by Jozsa in 1994, it is the square of what we use here.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.focus",
    "page": "Docstrings",
    "title": "YaoBase.focus",
    "category": "function",
    "text": "focus(f, register, locs...)\n\nCall a callable f under the context of focus. See also focus!.\n\nExample\n\nprint the focused register\n\njulia> r = ArrayReg(bit\"101100\")\nArrayReg{1,Complex{Float64},Array...}\n    active qubits: 6/6\n\njulia> focus(x->(println(x);x), r, 1, 2);\nArrayReg{1,Complex{Float64},Array...}\n    active qubits: 2/6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.focus!",
    "page": "Docstrings",
    "title": "YaoBase.focus!",
    "category": "function",
    "text": "focus!(register, locs) -> register\n\nFocus the wires on specified location.\n\nExample\n\njulia> focus!(r, (1, 2, 4))\n\n\n\n\n\n\nfocus!(locs...) -> f(register) -> register\n\nLazy version of focus!, this returns a lambda which requires a register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.general_c1_gates",
    "page": "Docstrings",
    "title": "YaoBase.general_c1_gates",
    "category": "function",
    "text": "general_c1_gates(num_bit::Int, projector::AbstractMatrix, cbit::Int, gates::Vector{AbstractMatrix}, locs::Vector{Int}) -> AbstractMatrix\n\ngeneral (low performance) construction method for control gate on different lines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.general_controlled_gates",
    "page": "Docstrings",
    "title": "YaoBase.general_controlled_gates",
    "category": "function",
    "text": "general_controlled_gates(num_bit::Int, projectors::Vector{Tp}, cbits::Vector{Int}, gates::Vector{AbstractMatrix}, locs::Vector{Int}) -> AbstractMatrix\n\nReturn general multi-controlled gates in hilbert space of num_bit qubits,\n\nprojectors are often chosen as P0 and P1 for inverse-Control and Control at specific position.\ncbits should have the same length as projectors, specifing the controling positions.\ngates are a list of controlled single qubit gates.\nlocs should have the same length as gates, specifing the gates positions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.hilbertkron",
    "page": "Docstrings",
    "title": "YaoBase.hilbertkron",
    "category": "function",
    "text": "hilbertkron(num_bit::Int, gates::Vector{AbstractMatrix}, locs::Vector{Int}) -> AbstractMatrix\n\nReturn general kronecher product form of gates in Hilbert space of num_bit qubits.\n\ngates are a list of matrices.\nstart_locs should have the same length as gates, specifing the gates starting positions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.increase!",
    "page": "Docstrings",
    "title": "YaoBase.increase!",
    "category": "function",
    "text": "increase!(register, n::Int) -> register\nincrease!(n::Int) -> λ(register)\n\nIncrease the register by n bits in state |0>. i.e. |psi> -> |000> ⊗ |psi>, increased bits have higher indices.\n\nIf only an integer is provided, then returns a lambda function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.instruct!",
    "page": "Docstrings",
    "title": "YaoBase.instruct!",
    "category": "function",
    "text": "instruct(state, operator[, locs, control_bits, control_vals])\n\ninstruction implementation for applying an operator to a quantum state.\n\nThis operator will be overloaded for different operator or state with different types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.invorder!",
    "page": "Docstrings",
    "title": "YaoBase.invorder!",
    "category": "function",
    "text": "invorder(register)\n\nInverse the address of register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.isaddrs_conflict",
    "page": "Docstrings",
    "title": "YaoBase.isaddrs_conflict",
    "category": "function",
    "text": "isaddrs_conflict(addrs) -> Bool\n\nCheck if the input address has conflicts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.isaddrs_contiguous",
    "page": "Docstrings",
    "title": "YaoBase.isaddrs_contiguous",
    "category": "function",
    "text": "isaddrs_contiguous(n::Int, addrs) -> Bool\n\nCheck if the input address is contiguous in 1 n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.isaddrs_inbounds",
    "page": "Docstrings",
    "title": "YaoBase.isaddrs_inbounds",
    "category": "function",
    "text": "isaddrs_inbounds(n, addrs) -> Bool\n\nCheck if the input address are inside given bounds n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.iscommute",
    "page": "Docstrings",
    "title": "YaoBase.iscommute",
    "category": "function",
    "text": "iscommute(ops...) -> Bool\n\ncheck if operators are commute.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.ishermitian",
    "page": "Docstrings",
    "title": "LinearAlgebra.ishermitian",
    "category": "function",
    "text": "ishermitian(op) -> Bool\n\ncheck if this operator is hermitian.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.isreflexive",
    "page": "Docstrings",
    "title": "YaoBase.isreflexive",
    "category": "function",
    "text": "isreflexive(op) -> Bool\n\ncheck if this operator is reflexive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.isunitary",
    "page": "Docstrings",
    "title": "YaoBase.isunitary",
    "category": "function",
    "text": "isunitary(op) -> Bool\n\ncheck if this operator is a unitary operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.linop2dense",
    "page": "Docstrings",
    "title": "YaoBase.linop2dense",
    "category": "function",
    "text": "linop2dense([T=ComplexF64], linear_map!::Function, n::Int) -> Matrix\n\nReturns the dense matrix representation given linear map function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.measure",
    "page": "Docstrings",
    "title": "YaoBase.measure",
    "category": "function",
    "text": "measure(register[, locs]; ntimes=1) -> Vector{Int}\n\nReturn measurement results of current active qubits (regarding to active qubits, see focus! and relax!).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.measure!",
    "page": "Docstrings",
    "title": "YaoBase.measure!",
    "category": "function",
    "text": "measure!(register[, locs])\n\nMeasure current active qubits or qubits at locs and collapse to result state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.measure_remove!",
    "page": "Docstrings",
    "title": "YaoBase.measure_remove!",
    "category": "function",
    "text": "measure_remove!(::AbstractRegister[, locs])\n\nMeasure current active qubits or qubits at locs and remove them.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.measure_setto!",
    "page": "Docstrings",
    "title": "YaoBase.measure_setto!",
    "category": "function",
    "text": "measure_setto!(reg::AbstractRegister[, locs]; bit_config) -> Int\n\nMeasure current active qubits or qubits at locs and set the register to specific value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.nactive",
    "page": "Docstrings",
    "title": "YaoBase.nactive",
    "category": "function",
    "text": "nactive(register) -> Int\n\nReturns the number of active qubits.\n\nnote: Note\nOperators always apply on active qubits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.nbatch",
    "page": "Docstrings",
    "title": "YaoBase.nbatch",
    "category": "function",
    "text": "nbatch(register) -> Int\n\nReturns the number of batches.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.nqubits",
    "page": "Docstrings",
    "title": "YaoBase.nqubits",
    "category": "function",
    "text": "nqubits(register) -> Int\n\nReturns the (total) number of qubits. See nactive, nremain for more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.nremain",
    "page": "Docstrings",
    "title": "YaoBase.nremain",
    "category": "function",
    "text": "nremain(register) -> Int\n\nReturns the number of non-active qubits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.nucnorm",
    "page": "Docstrings",
    "title": "YaoBase.nucnorm",
    "category": "function",
    "text": "nucnorm(m)\n\nComputes the nuclear norm of a matrix m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.probs",
    "page": "Docstrings",
    "title": "YaoBase.probs",
    "category": "function",
    "text": "probs(register)\n\nReturns the probability distribution of computation basis, aka xψ^2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.pure_state_fidelity",
    "page": "Docstrings",
    "title": "YaoBase.pure_state_fidelity",
    "category": "function",
    "text": "pure_state_fidelity(v1::Vector, v2::Vector)\n\nfidelity for pure states.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.purification_fidelity",
    "page": "Docstrings",
    "title": "YaoBase.purification_fidelity",
    "category": "function",
    "text": "purification_fidelity(m1::Matrix, m2::Matrix)\n\nFidelity for mixed states via purification.\n\nReference:     http://iopscience.iop.org/article/10.1088/1367-2630/aa6a4b/meta\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.rand_hermitian",
    "page": "Docstrings",
    "title": "YaoBase.rand_hermitian",
    "category": "function",
    "text": "rand_hermitian(N::Int) -> Matrix\n\nRandom hermitian matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.rand_unitary",
    "page": "Docstrings",
    "title": "YaoBase.rand_unitary",
    "category": "function",
    "text": "rand_unitary(N::Int) -> Matrix\n\nRandom unitary matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.relax!",
    "page": "Docstrings",
    "title": "YaoBase.relax!",
    "category": "function",
    "text": "relax!(register[, locs]; to_nactive=nqubits(register)) -> register\n\nInverse transformation of focus!, where to_nactive is the number  of active bits for target register.\n\n\n\n\n\nrelax!(locs::Int...; to_nactive=nqubits(register)) -> f(register) -> register\n\nLazy version of relax!, it will be evaluated once you feed a register to its output lambda.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.reorder!",
    "page": "Docstrings",
    "title": "YaoBase.reorder!",
    "category": "function",
    "text": "reorder!(reigster, orders)\n\nReorder the address of register by input orders.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.repeat",
    "page": "Docstrings",
    "title": "Base.repeat",
    "category": "function",
    "text": "repeat(r::AbstractRegister, n::Int) -> register\n\nRepeat register r for n times on batch dimension.\n\nExample\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.rotmat",
    "page": "Docstrings",
    "title": "YaoBase.rotmat",
    "category": "function",
    "text": "rotmat(M::AbstractMatrix, θ::Real)\n\nReturns rotated M: exp(-fracimθ2 M).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.select",
    "page": "Docstrings",
    "title": "YaoBase.select",
    "category": "function",
    "text": "select(register, bits...) -> AbstractRegister\n\nNon-inplace version of select!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.select!",
    "page": "Docstrings",
    "title": "YaoBase.select!",
    "category": "function",
    "text": "select!(dest::AbstractRegister, src::AbstractRegister, bits::Integer...) -> AbstractRegister\nselect!(register::AbstractRegister, bits::Integer...) -> register\n\nselect a subspace of given quantum state based on input eigen state bits. See also select.\n\nExample\n\nselect!(reg, 0b110) will select the subspace with (focused) configuration 110. After selection, the focused qubit space is 0, so you may want call relax! manually.\n\ntip: Tip\nDevelopers should overload select!(r::RegisterType, bits::NTuple{N, <:Integer}) and do not assume bits has specific number of bits (e.g Int64), or it will restrict the its maximum available number of qubits.\n\n\n\n\n\nselect!(b::Integer) -> f(register)\n\nLazy version of select!. See also select.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.setto!",
    "page": "Docstrings",
    "title": "YaoBase.setto!",
    "category": "function",
    "text": "setto!(register, bit_str)\n\nSet the register to bit string literal bit_str. About bit string literal, see more in @bit_str.\n\n\n\n\n\nsetto!(register, bit_config::Integer)\n\nSet the register to bit configuration bit_config.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.trace_distance",
    "page": "Docstrings",
    "title": "YaoBase.trace_distance",
    "category": "function",
    "text": "trace_distance(register1, register2)\n\nReturn the trace distance of register1 and register2.\n\nDefinition\n\nTrace distance is defined as following:\n\nfrac12  A - B _tr\n\nReference\n\nhttps://en.wikipedia.org/wiki/Trace_distance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.trnorm",
    "page": "Docstrings",
    "title": "YaoBase.trnorm",
    "category": "function",
    "text": "trnorm(m)\n\nComputes the trace norm of a matrix m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.viewbatch",
    "page": "Docstrings",
    "title": "YaoBase.viewbatch",
    "category": "function",
    "text": "viewbatch(register, i::Int) -> AbstractRegister{1}\n\nReturns a view of the i-th slice on batch dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#YaoBase.ρ",
    "page": "Docstrings",
    "title": "YaoBase.ρ",
    "category": "function",
    "text": "ρ(register)\n\nReturns the density matrix of current active qubits. This is the same as density_matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "YaoBase.@assert_addr_inboundsYaoBase.@assert_addrsYaoBase.@assert_addrs_contiguousYaoBase.@assert_addrs_inboundsYaoBase.@interfaceYaoBase.@lambdaYaoBase.@λYaoBase.ASTToolsYaoBase.AbstractRegisterYaoBase.AddressConflictErrorYaoBase.AddressListYaoBase.AddressNTupleYaoBase.AddressVectorYaoBase.AdjointRegisterYaoBase.ConstYaoBase.LegibleLambdaYaoBase.NotImplementedErrorYaoBase.QubitMismatchErrorYaoBase.YaoBaseYaoBase._sortYaoBase._wrap_identityYaoBase.addbit!YaoBase.basisYaoBase.batch_normalizeYaoBase.batch_normalize!YaoBase.batched_kronYaoBase.batched_kron!YaoBase.catYaoBase.cutblockYaoBase.cutlnnYaoBase.datatypeYaoBase.define_abstract_apiYaoBase.density_fidelityYaoBase.density_matrixYaoBase.eatwhereYaoBase.evalYaoBase.export_apiYaoBase.fidelityYaoBase.focusYaoBase.focus!YaoBase.general_c1_gatesYaoBase.general_controlled_gatesYaoBase.get_raw_nameYaoBase.hilbertkronYaoBase.includeYaoBase.increase!YaoBase.instruct!YaoBase.invorder!YaoBase.is_function_callYaoBase.isaddrs_conflictYaoBase.isaddrs_contiguousYaoBase.isaddrs_inboundsYaoBase.iscommuteYaoBase.ishermitianYaoBase.isreflexiveYaoBase.isunitaryYaoBase.kron!YaoBase.linop2denseYaoBase.measureYaoBase.measure!YaoBase.measure_remove!YaoBase.measure_reset!YaoBase.measure_setto!YaoBase.nactiveYaoBase.nbatchYaoBase.nonempty_maximumYaoBase.nonempty_minimumYaoBase.nqubitsYaoBase.nremainYaoBase.nucnormYaoBase.probsYaoBase.process_msgsYaoBase.pure_state_fidelityYaoBase.purification_fidelityYaoBase.rand_hermitianYaoBase.rand_unitaryYaoBase.relax!YaoBase.reorder!YaoBase.repeatYaoBase.reset!YaoBase.rotmatYaoBase.selectYaoBase.select!YaoBase.setto!YaoBase.showYaoBase.to_stringYaoBase.trace_distanceYaoBase.trnormYaoBase.tupleargsYaoBase.viewbatchYaoBase.ρ"
},

]}
