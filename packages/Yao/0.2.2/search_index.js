var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<div align=\"center\"> <img src=\"https://rawgit.com/QuantumBFS/Yao.jl/master/docs/src/assets/logo.svg\" alt=\"Yao Logo\" width=\"210\"></img> <h1>Yao</h1> </div>(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov) (Image: ) (Image: )Extensible, Efficient Quantum Algorithm Design for Humans."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Yao is an open source framework forquantum algorithm design;\nquantum software 2.0;\nquantum computation education."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In v0.7+/v1.0+, please type ] in the REPL to use the package mode, then type this command:pkg> add Yao"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "STABLE\nLATEST"
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "Comparing with state of art quantum simulators, our library is inspired by quantum circuit optimization. Variational quantum optimization algorithms like quantum circuit Born machine (QCBM), quantum approximate optimization algorithm (QAOA), variational quantum eigensolver (VQE) and quantum circuit learning (QCL) et. al. are promising killer apps on a near term quantum computers. These algorithms require the flexibility to tune parameters and have well defined patterns such as \"Arbitrary Rotation Block\" and \"CNOT Entangler\".In Yao, we call these patterns \"blocks\". If we regard every gate or gate pattern as a \"block\", then the framework canbe flexible to dispatch parameters,\ncache matrices of blocks to speed up future runs,\nallow hierarchical design of quantum algorithmsThanks to Julia\'s duck type and multiple dispatch features, user caneasily extend the block system by overloading specific interfaces\nquantum circuit blocks can be dispatched to some special method to improve the performance in specific case (e.g. customized repeat block of H gate)."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Yao is a framework that is about to have the following features:Extensibility\ndefine new operations with a minimum number of methods in principle.\nextend with new operations on different hardware should be easy, (e.g GPUs, near term quantum devices, FPGAs, etc.)\nEfficiency\ncomparing with python, julia have no significant overhead on small scale circuit.\nspecial optimized methods are dispatched to frequently used blocks.\ndouble interfaces \"apply!\" and \"cache server + mat\" allow us to choose freely when to sacrifice memory for faster simulation and when to sacrifice the speed to simulate more qubits.\nEasy to Use\nAs a white-box simulator, rather than using a black box, users will be aware of what their simulation are doing right through the interface.\nHierarchical APIs from low abstraction quantum operators to highly abstract circuit block objects.(Image: ) The whole framework is highly modularized, researchers can extend this framework for different purposes."
},

{
    "location": "#Contribution-1",
    "page": "Readme",
    "title": "Contribution",
    "category": "section",
    "text": "To contribute to this project, please open an issue first to discuss with us in case we may not accept your PR."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "This project is an effort of QuantumBFS, an open source organization for quantum science. All the contributors are listed in the contributors."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Yao is released under the Apache 2 license."
},

{
    "location": "autodocs/#Yao.Registers.@bit_str",
    "page": "Docstrings",
    "title": "Yao.Registers.@bit_str",
    "category": "macro",
    "text": "@bit_str -> QuBitStr\n\nConstruct a bit string. such as bit\"0000\". The bit strings also supports string concat. Just use it like normal strings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.ConstGateTools.@const_gate",
    "page": "Docstrings",
    "title": "Yao.Blocks.ConstGateTools.@const_gate",
    "category": "macro",
    "text": "@const_gate NAME = MAT_EXPR\n@const_gate NAME::Type = MAT_EXPR\n@const_Gate NAME::Type\n\nThis macro simplify the definition of a constant gate. It will automatically bind the matrix form to a constant which will reduce memory allocation in the runtime.\n\n@const_gate X = ComplexF64[0 1;1 0]\n\nor\n\n@const_gate X::ComplexF64 = [0 1;1 0]\n\nYou can bind new element types by simply re-declare with a type annotation.\n\n@const_gate X::ComplexF32\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.@fn",
    "page": "Docstrings",
    "title": "Yao.Interfaces.@fn",
    "category": "macro",
    "text": "macro fn([name,] f)\n\nDefine a in-place function on a register inside circuits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.AbstractRegister",
    "page": "Docstrings",
    "title": "Yao.Registers.AbstractRegister",
    "category": "type",
    "text": "AbstractRegister{B, T}\n\nabstract type that registers will subtype from. B is the batch size, T is the data type.\n\nRequired Properties\n\nProperty Description default\nnqubits(reg) get the total number of qubits. \nnactive(reg) get the number of active qubits. \nnremain(reg) get the number of remained qubits. nqubits - nactive\nnbatch(reg) get the number of batch. B\nstate(reg) get the state of this register. It always return the matrix stored inside. \nstatevec(reg) get the raveled state of this register.                                  . \nhypercubic(reg) get the hypercubic form of this register.                                  . \neltype(reg) get the element type stored by this register on classical memory. (the type Julia should use to represent amplitude) T\ncopy(reg) copy this register. \nsimilar(reg) construct a new register with similar configuration. \n\nRequired Methods\n\nMultiply\n\n*(op, reg)\n\ndefine how operator op act on this register. This is quite useful when there is a special approach to apply an operator on this register. (e.g a register with no batch, or a register with a MPS state, etc.)\n\nnote: Note\nbe careful, generally, operators can only be applied to a register, thus we should only overload this operation and do not overload *(reg, op).\n\nPack Address\n\npack addrs together to the first k-dimensions.\n\nExample\n\nGiven a register with dimension [2, 3, 1, 5, 4], we pack [5, 4] to the first 2 dimensions. We will get [5, 4, 2, 3, 1].\n\nFocus Address\n\nfocus!(reg, range)\n\nmerge address in range together as one dimension (the active space).\n\nExample\n\nGiven a register with dimension (2^4)x3 and address [1, 2, 3, 4], we focus address [3, 4], will pack [3, 4] together and merge them as the active space. Then we will have a register with size 2^2x(2^2x3), and address [3, 4, 1, 2].\n\nInitializers\n\nInitializers are functions that provide specific quantum states, e.g zero states, random states, GHZ states and etc.\n\nregister(::Type{RT}, raw, nbatch)\n\nan general initializer for input raw state array.\n\nregister(::Val{InitMethod}, ::Type{RT}, ::Type{T}, n, nbatch)\n\ninit register type RT with InitMethod type (e.g Val{:zero}) with element type T and total number qubits n with nbatch. This will be auto-binded to some shortcuts like zero_state, rand_state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.DefaultRegister",
    "page": "Docstrings",
    "title": "Yao.Registers.DefaultRegister",
    "category": "type",
    "text": "DefaultRegister{B, T} <: AbstractRegister{B, T}\n\nDefault type for a quantum register. It contains a dense array that represents a batched quantum state with batch size B of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.H",
    "page": "Docstrings",
    "title": "Yao.Blocks.H",
    "category": "constant",
    "text": "H\n\nThe Hadamard gate acts on a single qubit. It maps the basis state 0rangle to frac0rangle + 1ranglesqrt2 and 1rangle to frac0rangle - 1ranglesqrt2, which means that a measurement will have equal probabilities to become 1 or 0. It is representated by the Hadamard matrix:\n\nH = frac1sqrt2 beginpmatrix\n1  1 \n1  -1\nendpmatrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.InvOrder",
    "page": "Docstrings",
    "title": "Yao.Interfaces.InvOrder",
    "category": "constant",
    "text": "InvOrder\n\nReturn a FunctionBlock of inversing the order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.Reset",
    "page": "Docstrings",
    "title": "Yao.Interfaces.Reset",
    "category": "constant",
    "text": "Reset\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.Rx",
    "page": "Docstrings",
    "title": "Yao.Interfaces.Rx",
    "category": "function",
    "text": "Rx([type=Yao.DefaultType], theta) -> RotationGate{1, type, X}\n\nReturns a rotation X gate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.Ry",
    "page": "Docstrings",
    "title": "Yao.Interfaces.Ry",
    "category": "function",
    "text": "Ry([type=Yao.DefaultType], theta) -> RotationGate{1, type, Y}\n\nReturns a rotation Y gate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.Rz",
    "page": "Docstrings",
    "title": "Yao.Interfaces.Rz",
    "category": "function",
    "text": "Rz([type=Yao.DefaultType], theta) -> RotationGate{1, type, Z}\n\nReturns a rotation Z gate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.X",
    "page": "Docstrings",
    "title": "Yao.Blocks.X",
    "category": "constant",
    "text": "X\n\nThe Pauli-X gate acts on a single qubit. It is the quantum equivalent of the NOT gate for classical computers (with respect to the standard basis 0rangle, 1rangle). It is represented by the Pauli X matrix:\n\nX = beginpmatrix\n0  1\n1  0\nendpmatrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.Y",
    "page": "Docstrings",
    "title": "Yao.Blocks.Y",
    "category": "constant",
    "text": "Y\n\nThe Pauli-Y gate acts on a single qubit. It equates to a rotation around the Y-axis of the Bloch sphere by pi radians. It maps 0rangle to i1rangle and 1rangle to -i0rangle. It is represented by the Pauli Y matrix:\n\nY = beginpmatrix\n0  -i\ni  0\nendpmatrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Yao",
    "page": "Docstrings",
    "title": "Yao.Yao",
    "category": "module",
    "text": "Extensible Framework for Quantum Algorithm Design for Humans.\n\n简单易用可扩展的量子算法设计框架。\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.Z",
    "page": "Docstrings",
    "title": "Yao.Blocks.Z",
    "category": "constant",
    "text": "Z\n\nThe Pauli-Z gate acts on a single qubit. It equates to a rotation around the Z-axis of the Bloch sphere by pi radians. Thus, it is a special case of a phase shift gate (see shift) with theta = pi. It leaves the basis state 0rangle unchanged and maps 1rangle to -1rangle. Due to this nature, it is sometimes called phase-flip. It is represented by the Pauli Z matrix:\n\nZ = beginpmatrix\n1  0\n0  -1\nendpmatrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.addbit",
    "page": "Docstrings",
    "title": "Yao.Interfaces.addbit",
    "category": "function",
    "text": "addbit(n::Int) -> FunctionBlock{:AddBit}\n\nReturn a FunctionBlock of adding n bits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.apply!",
    "page": "Docstrings",
    "title": "Yao.Blocks.apply!",
    "category": "function",
    "text": "apply!(reg, block, [signal])\n\napply a block to a register reg with or without a cache signal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Intrinsics.basis",
    "page": "Docstrings",
    "title": "Yao.Intrinsics.basis",
    "category": "function",
    "text": "basis(num_bit::Int) -> UnitRange{Int}\nbasis(state::AbstractArray) -> UnitRange{Int}\n\nReturns the UnitRange for basis in Hilbert Space of num_bit qubits. If an array is supplied, it will return a basis having the same size with the first diemension of array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.blocks",
    "page": "Docstrings",
    "title": "Yao.Blocks.blocks",
    "category": "function",
    "text": "blocks(composite_block)\n\nget an iterator that iterate through all sub-blocks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.chain",
    "page": "Docstrings",
    "title": "Yao.Interfaces.chain",
    "category": "function",
    "text": "chain([T], n::Int) -> ChainBlock\nchain([n], blocks) -> ChainBlock\n\nReturns a ChainBlock. This factory method can be called lazily if you missed the total number of qubits.\n\nThis chains several blocks with the same size together.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.concentrate",
    "page": "Docstrings",
    "title": "Yao.Interfaces.concentrate",
    "category": "function",
    "text": "concentrate(nbit::Int, block::AbstractBlock, addrs) -> Concentrator{nbit}\n\nconcentrate blocks on serveral addrs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.control",
    "page": "Docstrings",
    "title": "Yao.Interfaces.control",
    "category": "function",
    "text": "control([total], controls, target) -> ControlBlock\n\nConstructs a ControlBlock\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.datatype",
    "page": "Docstrings",
    "title": "Yao.Blocks.datatype",
    "category": "function",
    "text": "datatype(x) -> DataType\n\nReturns the data type of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.density_matrix",
    "page": "Docstrings",
    "title": "Yao.Registers.density_matrix",
    "category": "function",
    "text": "density_matrix(register)\n\nReturns the density matrix of this register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.dispatch!",
    "page": "Docstrings",
    "title": "Yao.Blocks.dispatch!",
    "category": "function",
    "text": "dispatch!(block, params)\ndispatch!(block, params...)\n\ndispatch parameters to this block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.extend!",
    "page": "Docstrings",
    "title": "Yao.Registers.extend!",
    "category": "function",
    "text": "extend!(r::DefaultRegister, n::Int) -> DefaultRegister\nextend!(n::Int) -> Function\n\nextend the register by n bits in state |0>. i.e. |psi> -> |000> ⊗ |psi>, extended bits have higher indices. If only an integer is provided, then perform lazy evaluation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.fidelity",
    "page": "Docstrings",
    "title": "Yao.Registers.fidelity",
    "category": "function",
    "text": "fidelity(reg1::DefaultRegister, reg2::DefaultRegister) -> Vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.focus!",
    "page": "Docstrings",
    "title": "Yao.Registers.focus!",
    "category": "function",
    "text": "focus!(reg::DefaultRegister, bits::Ints) -> DefaultRegister\nfocus!(locs::Int...) -> Function\n\nFocus register on specified active bits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Intrinsics.hypercubic",
    "page": "Docstrings",
    "title": "Yao.Intrinsics.hypercubic",
    "category": "function",
    "text": "hypercubic(r::AbstractRegister) -> AbstractArray\n\nReturn the hypercubic form (high dimensional tensor) of this register, only active qubits are considered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.isnormalized",
    "page": "Docstrings",
    "title": "Yao.Registers.isnormalized",
    "category": "function",
    "text": "isnormalized(reg::DefaultRegister) -> Bool\n\nReturn true if a register is normalized else false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.mat",
    "page": "Docstrings",
    "title": "Yao.Blocks.mat",
    "category": "function",
    "text": "mat(block) -> Matrix\n\nReturns the matrix form of this block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.matrixgate",
    "page": "Docstrings",
    "title": "Yao.Interfaces.matrixgate",
    "category": "function",
    "text": "matrixgate(matrix::AbstractMatrix) -> GeneralMatrixGate\nmatrixgate(matrix::MatrixBlock) -> GeneralMatrixGate\n\nConstruct a general matrix gate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.measure",
    "page": "Docstrings",
    "title": "Yao.Registers.measure",
    "category": "function",
    "text": "measure(register, [n=1]) -> Vector\n\nmeasure active qubits for n times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.measure_remove!",
    "page": "Docstrings",
    "title": "Yao.Registers.measure_remove!",
    "category": "function",
    "text": "measure_remove!(register)\n\nmeasure the active qubits of this register and remove them.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.nactive",
    "page": "Docstrings",
    "title": "Yao.nactive",
    "category": "function",
    "text": "nactive(x) -> Int\n\nReturns number of active qubits\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.nparameters",
    "page": "Docstrings",
    "title": "Yao.Blocks.nparameters",
    "category": "function",
    "text": "nparameters(x) -> Integer\n\nReturns the number of parameters of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.nqubits",
    "page": "Docstrings",
    "title": "Yao.nqubits",
    "category": "function",
    "text": "nqubits(m::AbstractRegister) -> Int\n\nReturns number of qubits in a register,\n\nnqubits(m::AbstractBlock) -> Int\n\nReturns number of qubits applied for a block,\n\nnqubits(m::AbstractArray) -> Int\n\nReturns size of the first dimension of an array, in 2^nqubits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Blocks.parameters",
    "page": "Docstrings",
    "title": "Yao.Blocks.parameters",
    "category": "function",
    "text": "parameters(block) -> Vector\n\nReturns a list of all parameters in block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.phase",
    "page": "Docstrings",
    "title": "Yao.Interfaces.phase",
    "category": "function",
    "text": "phase([type=Yao.DefaultType], theta) -> PhaseGate{:global}\n\nReturns a global phase gate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.product_state",
    "page": "Docstrings",
    "title": "Yao.Registers.product_state",
    "category": "function",
    "text": "product_state(::Type{T}, n::Int, config::Int, nbatch::Int=1) -> DefaultRegister\n\na product state on given configuration config, e.g. product_state(ComplexF64, 5, 0) will give a zero state on a 5 qubit register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.put",
    "page": "Docstrings",
    "title": "Yao.Interfaces.put",
    "category": "function",
    "text": "put([total::Int, ]pa::Pair) -> PutBlock{total}\n\nput a block at the specific position(s), can be lazy constructed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.rand_state",
    "page": "Docstrings",
    "title": "Yao.Registers.rand_state",
    "category": "function",
    "text": "rand_state(::Type{T}, n::Int, nbatch::Int=1) -> DefaultRegister\n\nhere, random complex numbers are generated using randn(ComplexF64).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.reflect",
    "page": "Docstrings",
    "title": "Yao.Interfaces.reflect",
    "category": "function",
    "text": "reflect(mirror::DefaultRegister{1}) -> ReflectBlock\nreflect(mirror::Vector) -> ReflectBlock\n\nReturn an ReflectBlock along with state vector mirror as the axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.register",
    "page": "Docstrings",
    "title": "Yao.Registers.register",
    "category": "function",
    "text": "register([type], bit_str, [nbatch=1]) -> DefaultRegister\n\nReturns a DefaultRegister by inputing a bit string, e.g\n\nusing Yao\nregister(bit\"0000\")\n\n\n\n\n\nregister(raw) -> DefaultRegister\n\nReturns a DefaultRegister from a raw dense array (Vector or Matrix).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.relax!",
    "page": "Docstrings",
    "title": "Yao.Registers.relax!",
    "category": "function",
    "text": "relax!(reg::DefaultRegister; nbit::Int=nqubits(reg)) -> DefaultRegister\nrelax!(reg::DefaultRegister, bits::Ints; nbit::Int=nqubits(reg)) -> DefaultRegister\nrelax!(bits::Ints...; nbit::Int=-1) -> Function\n\nInverse transformation of focus, with nbit is the number of active bits of target register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.reorder",
    "page": "Docstrings",
    "title": "Yao.reorder",
    "category": "function",
    "text": "Reorder the lines of qubits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.roll",
    "page": "Docstrings",
    "title": "Yao.Interfaces.roll",
    "category": "function",
    "text": "roll([n::Int, ], blocks...,) -> Roller{n}\n\nConstruct a Roller block, which is a faster than KronBlock to calculate similar small blocks tile on the whole address.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.rollrepeat",
    "page": "Docstrings",
    "title": "Yao.Interfaces.rollrepeat",
    "category": "function",
    "text": "rollrepeat([n::Int,] block::MatrixBlock) -> Roller{n}\n\nConstruct a Roller block, which is a faster than KronBlock to calculate similar small blocks tile on the whole address.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.rot",
    "page": "Docstrings",
    "title": "Yao.Interfaces.rot",
    "category": "function",
    "text": "rot([type=Yao.DefaultType], U, theta) -> RotationGate{N, type, U}\n\nReturns an arbitrary rotation gate on U.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.select",
    "page": "Docstrings",
    "title": "Yao.Registers.select",
    "category": "function",
    "text": "select(reg::AbstractRegister, b::Integer) -> AbstractRegister\n\nthe non-inplace version of select! function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.select!",
    "page": "Docstrings",
    "title": "Yao.Registers.select!",
    "category": "function",
    "text": "select!(reg::AbstractRegister, b::Integer) -> AbstractRegister\nselect!(b::Integer) -> Function\n\nselect specific component of qubit, the inplace version, the currified version will return a Function.\n\ne.g. select!(reg, 0b110) will select the subspace with (focused) configuration 110. After selection, the focused qubit space is 0, so you may want call relax! manually.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.sequence",
    "page": "Docstrings",
    "title": "Yao.Interfaces.sequence",
    "category": "function",
    "text": "Returns a Sequential block. This factory method can be called lazily if you missed the total number of qubits.\n\nThis is the loose version of sequence, that does not support the mat related interfaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.shift",
    "page": "Docstrings",
    "title": "Yao.Interfaces.shift",
    "category": "function",
    "text": "shift([type=Yao.DefaultType], theta) -> PhaseGate{:shift}\n\nReturns a phase shift gate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.stack",
    "page": "Docstrings",
    "title": "Yao.Registers.stack",
    "category": "function",
    "text": "stack(regs::DefaultRegister...) -> DefaultRegister\n\nstack multiple registers into a batch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.statevec",
    "page": "Docstrings",
    "title": "Yao.Registers.statevec",
    "category": "function",
    "text": "statevec(r::AbstractRegister) -> AbstractArray\n\nReturn the raveled state (vector) form of this register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Interfaces.swap",
    "page": "Docstrings",
    "title": "Yao.Interfaces.swap",
    "category": "function",
    "text": "swap([n], [type], line1, line2) -> Swap\n\nReturns a swap gate on line1 and line2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.tracedist",
    "page": "Docstrings",
    "title": "Yao.Registers.tracedist",
    "category": "function",
    "text": "tracedist(reg1::DefaultRegister, reg2::DefaultRegister) -> Vector\ntracedist(reg1::DensityMatrix, reg2::DensityMatrix) -> Vector\n\ntrace distance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.uniform_state",
    "page": "Docstrings",
    "title": "Yao.Registers.uniform_state",
    "category": "function",
    "text": "uniform_state(::Type{T}, n::Int, nbatch::Int=1) -> DefaultRegister\n\nuniform state, the state after applying H gates on |0> state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.zero_state",
    "page": "Docstrings",
    "title": "Yao.Registers.zero_state",
    "category": "function",
    "text": "zero_state(::Type{T}, n::Int, nbatch::Int=1) -> DefaultRegister\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.Registers.ρ",
    "page": "Docstrings",
    "title": "Yao.Registers.ρ",
    "category": "function",
    "text": "ρ(register)\n\nReturns the density matrix of this register.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Yao.幺",
    "page": "Docstrings",
    "title": "Yao.幺",
    "category": "module",
    "text": "Extensible Framework for Quantum Algorithm Design for Humans.\n\n简单易用可扩展的量子算法设计框架。\n\n幺 means unitary in Chinese.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Yao.@bit_strYao.@const_gateYao.@fnYao.AbstractRegisterYao.BlocksYao.BoostYao.CYao.DefaultRegisterYao.DefaultTypeYao.DensityMatrixYao.ENVNAMEYao.HYao.I2Yao.InterfacesYao.IntrinsicsYao.InvOrderYao.MEASUREYao.MEASURE_REMOVEYao.PKGNAMEYao.RegisterYao.RegistersYao.ResetYao.RxYao.RyYao.RzYao.SignalYao.XYao.YYao.YaoYao.ZYao.addbitYao.addbit!Yao.adjointYao.apply!Yao.asindexYao.basisYao.blocksYao.cacheYao.chainYao.clearall!Yao.concentrateYao.controlYao.datatypeYao.density_matrixYao.dispatch!Yao.evalYao.extend!Yao.fidelityYao.focusYao.focus!Yao.hypercubicYao.includeYao.invorderYao.invorder!Yao.iscacheableYao.iscachedYao.isnormalizedYao.matYao.matrixgateYao.measureYao.measure!Yao.measure_remove!Yao.nactiveYao.nbatchYao.nparametersYao.nqubitsYao.nremainYao.parametersYao.phaseYao.probsYao.product_stateYao.pullYao.putYao.rand_stateYao.rank3Yao.reflectYao.registerYao.relax!Yao.reorderYao.reorder!Yao.reset!Yao.rollYao.rollrepeatYao.rotYao.selectYao.select!Yao.sequenceYao.shiftYao.signalYao.stackYao.stateYao.statevecYao.swapYao.tracedistYao.uniform_stateYao.update_cacheYao.zero_stateYao.ρYao.⊗Yao.幺"
},

]}
