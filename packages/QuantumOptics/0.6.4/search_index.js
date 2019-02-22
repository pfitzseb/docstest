var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<img src=\"https://github.com/qojulia/QuantumOptics.jl-website/blob/master/src/images/logo.png\" alt=\"QuantumOptics.jl\" width=\"400\">"
},

{
    "location": "#-1",
    "page": "Readme",
    "title": "",
    "category": "section",
    "text": "[![Chat on Gitter][gitter-img]][gitter-url] [![Travis build status][travis-img]][travis-url] [![Windows build status][appveyor-img]][appveyor-url] [![Stable documentation][docs-img]][docs-url]QuantumOptics.jl is a numerical framework written in [Julia] that makes it easy to simulate various kinds of quantum systems. It is inspired by the [Quantum Optics Toolbox] for MATLAB and the Python framework [QuTiP].More information, documentation and examples can be found on our website http://qojulia.org."
},

{
    "location": "#Development-status-1",
    "page": "Readme",
    "title": "Development status",
    "category": "section",
    "text": "Latest release:[![Status of latest release on julia 0.6][pkg-0.6-img]][pkg-0.6-url]\nTest coverage:     [![Test coverage status on coveralls][coveralls-img]][coveralls-url]     [![Test coverage status on codecov][codecov-img]][codecov-url]"
},

{
    "location": "#Project-structure-1",
    "page": "Readme",
    "title": "Project structure",
    "category": "section",
    "text": "The content associated with QuantumOptics.jl is distributed over several repositories under the [qojulia] organization on github:The main code: https://github.com/qojulia/QuantumOptics.jl\nDocumentation: https://github.com/qojulia/QuantumOptics.jl-documentation\nExamples: https://github.com/qojulia/QuantumOptics.jl-examples\nBenchmarks: https://github.com/qojulia/QuantumOptics.jl-benchmarks\nWebsite: https://github.com/qojulia/QuantumOptics.jl-website"
},

{
    "location": "#Questions-and-Contributions-1",
    "page": "Readme",
    "title": "Questions & Contributions",
    "category": "section",
    "text": "If you have any questions or need help, hop on our gitter channel and ask away. Also, contributions of any kind are always welcome! Be it as ideas for new features, bug reports or, our favorite case, sending pull requests."
},

{
    "location": "#Citing-1",
    "page": "Readme",
    "title": "Citing",
    "category": "section",
    "text": "If you like QuantumOptics.jl, we would appreciate it if you starred the repository in order to help us increase its visibility. Furthermore, if you find the framework useful in your research, we would be grateful if you could cite our publication.[Julia]: http://julialang.org [qojulia]: https://github.com/qojulia [Quantum Optics Toolbox]: http://qo.phy.auckland.ac.nz/toolbox [QuTiP]: http://qutip.org[travis-url]: https://travis-ci.org/qojulia/QuantumOptics.jl [travis-img]: https://api.travis-ci.org/qojulia/QuantumOptics.jl.png?branch=master[appveyor-url]: https://ci.appveyor.com/project/qojulia/quantumoptics-jl/branch/master [appveyor-img]: https://ci.appveyor.com/api/projects/status/t83f2bqfpumn6d96/branch/master?svg=true[coveralls-url]: https://coveralls.io/github/qojulia/QuantumOptics.jl?branch=master [coveralls-img]: https://coveralls.io/repos/github/qojulia/QuantumOptics.jl/badge.svg?branch=master[codecov-url]: https://codecov.io/gh/qojulia/QuantumOptics.jl [codecov-img]: https://codecov.io/gh/qojulia/QuantumOptics.jl/branch/master/graph/badge.svg[pkg-0.6-url]: http://pkg.julialang.org/?pkg=QuantumOptics&ver=0.6 [pkg-0.6-img]: http://pkg.julialang.org/badges/QuantumOptics_0.6.svg[gitter-url]: https://gitter.im/QuantumOptics-jl/Lobby [gitter-img]: https://img.shields.io/gitter/room/nwjs/nw.js.svg[docs-url]: https://qojulia.org/documentation/ [docs-img]: https://img.shields.io/badge/docs-stable-blue.svg"
},

{
    "location": "autodocs/#QuantumOptics.bases.@samebases",
    "page": "Docstrings",
    "title": "QuantumOptics.bases.@samebases",
    "category": "macro",
    "text": "@samebases\n\nMacro to skip checks for same bases. Useful for *, expect and similar functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.timeevolution.@skiptimechecks",
    "page": "Docstrings",
    "title": "QuantumOptics.timeevolution.@skiptimechecks",
    "category": "macro",
    "text": "@skiptimechecks\n\nMacro to skip checks during time-dependent problems. Useful for timeevolution.master_dynamic and similar functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators.AbstractOperator",
    "page": "Docstrings",
    "title": "QuantumOptics.operators.AbstractOperator",
    "category": "type",
    "text": "Abstract base class for all operators.\n\nAll deriving operator classes have to define the fields basis_l and basis_r defining the left and right side bases.\n\nFor fast time evolution also at least the function gemv!(alpha, op::AbstractOperator, x::Ket, beta, result::Ket) should be implemented. Many other generic multiplication functions can be defined in terms of this function and are provided automatically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.bases.Basis",
    "page": "Docstrings",
    "title": "QuantumOptics.bases.Basis",
    "category": "type",
    "text": "Abstract base class for all specialized bases.\n\nThe Basis class is meant to specify a basis of the Hilbert space of the studied system. Besides basis specific information all subclasses must implement a shape variable which indicates the dimension of the used Hilbert space. For a spin-1/2 Hilbert space this would be the vector Int[2]. A system composed of two spins would then have a shape vector Int[2 2].\n\nComposite systems can be defined with help of the CompositeBasis class.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.states.Bra",
    "page": "Docstrings",
    "title": "QuantumOptics.states.Bra",
    "category": "type",
    "text": "Bra(b::Basis[, data])\n\nBra state defined by coefficients in respect to the basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.bases.CompositeBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.bases.CompositeBasis",
    "category": "type",
    "text": "CompositeBasis(b1, b2...)\n\nBasis for composite Hilbert spaces.\n\nStores the subbases in a vector and creates the shape vector directly from the shape vectors of these subbases. Instead of creating a CompositeBasis directly tensor(b1, b2...) or b1 ⊗ b2 ⊗ … can be used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators.DataOperator",
    "page": "Docstrings",
    "title": "QuantumOptics.operators.DataOperator",
    "category": "type",
    "text": "Abstract type for operators with a data field.\n\nThis is an abstract type for operators that have a direct matrix representation stored in their .data field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators_dense.DenseOperator",
    "page": "Docstrings",
    "title": "QuantumOptics.operators_dense.DenseOperator",
    "category": "type",
    "text": "DenseOperator(b1[, b2, data])\n\nDense array implementation of Operator.\n\nThe matrix consisting of complex floats is stored in the data field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.superoperators.DenseSuperOperator",
    "page": "Docstrings",
    "title": "QuantumOptics.superoperators.DenseSuperOperator",
    "category": "type",
    "text": "DenseSuperOperator(b1[, b2, data])\n\nSuperOperator stored as dense matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.fock.FockBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.fock.FockBasis",
    "category": "type",
    "text": "FockBasis(N)\n\nBasis for a Fock space where N specifies a cutoff, i.e. what the highest included fock state is. Note that the dimension of this basis then is N+1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.bases.GenericBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.bases.GenericBasis",
    "category": "type",
    "text": "GenericBasis(N)\n\nA general purpose basis of dimension N.\n\nShould only be used rarely since it defeats the purpose of checking that the bases of state vectors and operators are correct for algebraic operations. The preferred way is to specify special bases for different systems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.states.Ket",
    "page": "Docstrings",
    "title": "QuantumOptics.states.Ket",
    "category": "type",
    "text": "Ket(b::Basis[, data])\n\nKet state defined by coefficients in respect to the given basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators_lazyproduct.LazyProduct",
    "page": "Docstrings",
    "title": "QuantumOptics.operators_lazyproduct.LazyProduct",
    "category": "type",
    "text": "LazyProduct(operators[, factor=1])\nLazyProduct(op1, op2...)\n\nLazy evaluation of products of operators.\n\nThe factors of the product are stored in the operators field. Additionally a complex factor is stored in the factor field which allows for fast multiplication with numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators_lazysum.LazySum",
    "page": "Docstrings",
    "title": "QuantumOptics.operators_lazysum.LazySum",
    "category": "type",
    "text": "LazySum([factors,] operators)\n\nLazy evaluation of sums of operators.\n\nAll operators have to be given in respect to the same bases. The field factors accounts for an additional multiplicative factor for each operator stored in the operators field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators_lazytensor.LazyTensor",
    "page": "Docstrings",
    "title": "QuantumOptics.operators_lazytensor.LazyTensor",
    "category": "type",
    "text": "LazyTensor(b1[, b2], indices, operators[, factor=1])\n\nLazy implementation of a tensor product of operators.\n\nThe suboperators are stored in the operators field. The indices field specifies in which subsystem the corresponding operator lives. Additionally, a complex factor is stored in the factor field which allows for fast multiplication with numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.manybody.ManyBodyBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.manybody.ManyBodyBasis",
    "category": "type",
    "text": "ManyBodyBasis(b, occupations)\n\nBasis for a many body system.\n\nThe basis has to know the associated one-body basis b and which occupation states should be included. The occupations_hash is used to speed up checking if two many-body bases are equal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.particle.MomentumBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.particle.MomentumBasis",
    "category": "type",
    "text": "MomentumBasis(pmin, pmax, Npoints)\nMomentumBasis(b::PositionBasis)\n\nBasis for a particle in momentum space.\n\nFor simplicity periodic boundaries are assumed which means that pmax is not included in the basis but is defined to be the same as pmin.\n\nWhen a PositionBasis is given as argument the exact values of p_min and p_max are due to the periodic boundary conditions more or less arbitrary and are chosen to be -pidx and pidx with dx=(x_max-x_min)N.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.nlevel.NLevelBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.nlevel.NLevelBasis",
    "category": "type",
    "text": "NLevelBasis(N)\n\nBasis for a system consisting of N states.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.PPT",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.PPT",
    "category": "function",
    "text": "PPT(rho, index)\n\nPeres-Horodecki criterion of partial transpose.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.particle.PositionBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.particle.PositionBasis",
    "category": "type",
    "text": "PositionBasis(xmin, xmax, Npoints)\nPositionBasis(b::MomentumBasis)\n\nBasis for a particle in real space.\n\nFor simplicity periodic boundaries are assumed which means that the rightmost point defined by xmax is not included in the basis but is defined to be the same as xmin.\n\nWhen a MomentumBasis is given as argument the exact values of x_min and x_max are due to the periodic boundary conditions more or less arbitrary and are chosen to be -pidp and pidp with dp=(p_max-p_min)N.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators_sparse.SparseOperator",
    "page": "Docstrings",
    "title": "QuantumOptics.operators_sparse.SparseOperator",
    "category": "type",
    "text": "SparseOperator(b1[, b2, data])\n\nSparse array implementation of Operator.\n\nThe matrix is stored as the julia built-in type SparseMatrixCSC in the data field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.superoperators.SparseSuperOperator",
    "page": "Docstrings",
    "title": "QuantumOptics.superoperators.SparseSuperOperator",
    "category": "type",
    "text": "SparseSuperOperator(b1[, b2, data])\n\nSuperOperator stored as sparse matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spin.SpinBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.spin.SpinBasis",
    "category": "type",
    "text": "SpinBasis(n)\n\nBasis for spin-n particles.\n\nThe basis can be created for arbitrary spinnumbers by using a rational number, e.g. SpinBasis(3//2). The Pauli operators are defined for all possible spin numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.states.StateVector",
    "page": "Docstrings",
    "title": "QuantumOptics.states.StateVector",
    "category": "type",
    "text": "Abstract base class for Bra and Ket states.\n\nThe state vector class stores the coefficients of an abstract state in respect to a certain basis. These coefficients are stored in the data field and the basis is defined in the basis field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.subspace.SubspaceBasis",
    "page": "Docstrings",
    "title": "QuantumOptics.subspace.SubspaceBasis",
    "category": "type",
    "text": "SubspaceBasis(basisstates)\n\nA basis describing a subspace embedded a higher dimensional Hilbert space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.superoperators.SuperOperator",
    "page": "Docstrings",
    "title": "QuantumOptics.superoperators.SuperOperator",
    "category": "type",
    "text": "Base class for all super operator classes.\n\nSuper operators are bijective mappings from operators given in one specific basis to operators, possibly given in respect to another, different basis. To embed super operators in an algebraic framework they are defined with a left hand basis basis_l and a right hand basis basis_r where each of them again consists of a left and right hand basis.\n\nA_bl_1bl_2 = S_(bl_1bl_2)  (br_1br_2) B_br_1br_2\n\nA_br_1br_2 = B_bl_1bl_2 S_(bl_1bl_2)  (br_1br_2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.bases.basis",
    "page": "Docstrings",
    "title": "QuantumOptics.bases.basis",
    "category": "function",
    "text": "basis(a)\n\nReturn the basis of an object.\n\nIf it\'s ambiguous, e.g. if an operator has a different left and right basis, an IncompatibleBases error is thrown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.states.basisstate",
    "page": "Docstrings",
    "title": "QuantumOptics.states.basisstate",
    "category": "function",
    "text": "basisstate(b, index)\n\nBasis vector specified by index as ket state.\n\nFor a composite system index can be a vector which then creates a tensor product state i_1i_2i_n of the corresponding basis states.\n\n\n\n\n\nbasisstate(b::ManyBodyBasis, occupation::Vector{Int})\n\nReturn a ket state where the system is in the state specified by the given occupation numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.manybody.bosonstates",
    "page": "Docstrings",
    "title": "QuantumOptics.manybody.bosonstates",
    "category": "function",
    "text": "bosonstates(Nmodes, Nparticles)\nbosonstates(b, Nparticles)\n\nGenerate all bosonic occupation states for N-particles in M-modes. Nparticles can be a vector to define a Hilbert space with variable particle number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.phasespace.coherentspinstate",
    "page": "Docstrings",
    "title": "QuantumOptics.phasespace.coherentspinstate",
    "category": "function",
    "text": "coherentspinstate(b::SpinBasis, θ::Real, ϕ::Real)\n\nA coherent spin state |θ,ϕ⟩ is analogous to the coherent state of the linear harmonic oscillator. Coherent spin states represent a collection of identical two-level systems and can be described by two angles θ and ϕ (although this parametrization is not unique), similarly to a qubit on the Bloch sphere.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.fock.coherentstate",
    "page": "Docstrings",
    "title": "QuantumOptics.fock.coherentstate",
    "category": "function",
    "text": "coherentstate(b::FockBasis, alpha)\n\nCoherent state α for the specified Fock space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.state_definitions.coherentthermalstate",
    "page": "Docstrings",
    "title": "QuantumOptics.state_definitions.coherentthermalstate",
    "category": "function",
    "text": "coherentthermalstate(basis::FockBasis,H,T,alpha)\n\nCoherent thermal state D(α)exp(-HT)Trexp(-HT)D^(α).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.fock.create",
    "page": "Docstrings",
    "title": "QuantumOptics.fock.create",
    "category": "function",
    "text": "create(b::FockBasis)\n\nCreation operator for the specified Fock space.\n\n\n\n\n\ncreate(b::ManyBodyBasis, index)\n\nCreation operator for the i-th mode of the many-body basis b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.states.dagger",
    "page": "Docstrings",
    "title": "QuantumOptics.states.dagger",
    "category": "function",
    "text": "dagger(x)\n\nHermitian conjugate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators.dense",
    "page": "Docstrings",
    "title": "QuantumOptics.operators.dense",
    "category": "function",
    "text": "dense(op::AbstractOperator)\n\nConvert an arbitrary Operator into a DenseOperator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.fock.destroy",
    "page": "Docstrings",
    "title": "QuantumOptics.fock.destroy",
    "category": "function",
    "text": "destroy(b::FockBasis)\n\nAnnihilation operator for the specified Fock space.\n\n\n\n\n\ndestroy(b::ManyBodyBasis, index)\n\nAnnihilation operator for the i-th mode of the many-body basis b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.timeevolution.timeevolution_mcwf.diagonaljumps",
    "page": "Docstrings",
    "title": "QuantumOptics.timeevolution.timeevolution_mcwf.diagonaljumps",
    "category": "function",
    "text": "diagonaljumps(rates, J)\n\nDiagonalize jump operators.\n\nThe given matrix rates of decay rates is diagonalized and the corresponding set of jump operators is calculated.\n\nArguments\n\nrates: Matrix of decay rates.\nJ: Vector of jump operators.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators_sparse.diagonaloperator",
    "page": "Docstrings",
    "title": "QuantumOptics.operators_sparse.diagonaloperator",
    "category": "function",
    "text": "diagonaloperator(b::Basis)\n\nCreate a diagonal operator of type SparseOperator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.fock.displace",
    "page": "Docstrings",
    "title": "QuantumOptics.fock.displace",
    "category": "function",
    "text": "displace(b::FockBasis, alpha)\n\nDisplacement operator D(α) for the specified Fock space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators_dense.dm",
    "page": "Docstrings",
    "title": "QuantumOptics.operators_dense.dm",
    "category": "function",
    "text": "dm(a::StateVector)\n\nCreate density matrix aa. Same as projector(a).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spectralanalysis.eigenenergies",
    "page": "Docstrings",
    "title": "QuantumOptics.spectralanalysis.eigenenergies",
    "category": "function",
    "text": "eigenenergies(op::AbstractOperator[, n::Int; warning=true])\n\nCalculate the lowest n eigenvalues.\n\nThis is just a thin wrapper around julia\'s eigvals. If more control about the way the calculation is done is needed, use the function directly. More details can be found at [http://docs.julialang.org/en/stable/stdlib/linalg/].\n\nIf the given operator is non-hermitian a warning is given. This behavior can be turned off using the keyword warning=false.\n\n\n\n\n\nFor sparse operators by default it only returns the 6 lowest eigenvalues.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spectralanalysis.eigenstates",
    "page": "Docstrings",
    "title": "QuantumOptics.spectralanalysis.eigenstates",
    "category": "function",
    "text": "eigenstates(op::AbstractOperator[, n::Int; warning=true])\n\nCalculate the lowest n eigenvalues and their corresponding eigenstates.\n\nThis is just a thin wrapper around julia\'s eigen and eigs functions. Which of them is used depends on the type of the given operator. If more control about the way the calculation is done is needed, use the functions directly. More details can be found at [http://docs.julialang.org/en/stable/stdlib/linalg/].\n\nNOTE: Especially for small systems full diagonalization with Julia\'s eigen function is often more desirable. You can convert a sparse operator A to a dense one using dense(A).\n\nIf the given operator is non-hermitian a warning is given. This behavior can be turned off using the keyword warning=false.\n\n\n\n\n\nFor sparse operators by default it only returns the 6 lowest eigenvalues.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators.embed",
    "page": "Docstrings",
    "title": "QuantumOptics.operators.embed",
    "category": "function",
    "text": "embed(basis1[, basis2], indices::Vector, operators::Vector)\n\nTensor product of operators where missing indices are filled up with identity operators.\n\n\n\n\n\nembed(basis1[, basis2], operators::Dict)\n\noperators is a dictionary Dict{Vector{Int}, AbstractOperator}. The integer vector specifies in which subsystems the corresponding operator is defined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.entropy_vn",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.entropy_vn",
    "category": "function",
    "text": "entropy_vn(rho)\n\nVon Neumann entropy of a density matrix.\n\nThe Von Neumann entropy of a density operator is defined as\n\nS(ρ) = -Tr(ρ log(ρ)) = -sum_n λ_nlog(λ_n)\n\nwhere λ_n are the eigenvalues of the density matrix ρ, log is the natural logarithm and 0log(0)  0.\n\nArguments\n\nrho: Density operator of which to calculate Von Neumann entropy.\ntol=1e-15: Tolerance for rounding errors in the computed eigenvalues.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators.expect",
    "page": "Docstrings",
    "title": "QuantumOptics.operators.expect",
    "category": "function",
    "text": "expect(op, state)\n\nExpectation value of the given operator op for the specified state.\n\nstate can either be a (density) operator or a ket.\n\n\n\n\n\nexpect(index, op, state)\n\nIf an index is given, it assumes that op is defined in the subsystem specified by this number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.manybody.fermionstates",
    "page": "Docstrings",
    "title": "QuantumOptics.manybody.fermionstates",
    "category": "function",
    "text": "fermionstates(Nmodes, Nparticles)\nfermionstates(b, Nparticles)\n\nGenerate all fermionic occupation states for N-particles in M-modes. Nparticles can be a vector to define a Hilbert space with variable particle number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.fidelity",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.fidelity",
    "category": "function",
    "text": "fidelity(rho, sigma)\n\nFidelity of two density operators.\n\nThe fidelity of two density operators ρ and σ is defined by\n\nF(ρ σ) = Trleft(sqrtsqrtρσsqrtρright)\n\nwhere sqrtρ=sum_nsqrtλ_nψψ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.fock.fockstate",
    "page": "Docstrings",
    "title": "QuantumOptics.fock.fockstate",
    "category": "function",
    "text": "fockstate(b::FockBasis, n)\n\nFock state n for the specified Fock space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.particle.gaussianstate",
    "page": "Docstrings",
    "title": "QuantumOptics.particle.gaussianstate",
    "category": "function",
    "text": "gaussianstate(b::PositionBasis, x0, p0, sigma)\ngaussianstate(b::MomentumBasis, x0, p0, sigma)\n\nCreate a Gaussian state around x0 andp0 with width sigma.\n\nIn real space the gaussian state is defined as\n\nPsi(x) = fracsqrtDelta xpi^14sqrtsigma\n            e^i p_0 (x-fracx_02) - frac(x-x_0)^22 sigma^2\n\nand is connected to the momentum space definition\n\nPsi(p) = fracsqrtsigma sqrtDelta xpi^14\n            e^-i x_0 (p-fracp_02) - frac12(p-p_0)^2 sigma^2\n\nvia a Fourier-transformation\n\nPsi(p) = frac1sqrt2pi\n            int_-infty^infty e^-ipxPsi(x) mathrmdx\n\nThe state has the properties\n\np = p_0\nx = x_0\nmathrmVar(x) = fracσ^22\nmathrmVar(p) = frac12 σ^2\n\nDue to the numerically necessary discretization additional scaling factora sqrtΔx and sqrtΔp are used so that Ψx_i = sqrtΔ x Ψ(x_i) and Ψp_i = sqrtΔ x Ψ(p_i) so that the resulting Ket state is normalized.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators.identityoperator",
    "page": "Docstrings",
    "title": "QuantumOptics.operators.identityoperator",
    "category": "function",
    "text": "identityoperator(a::Basis[, b::Basis])\n\nReturn an identityoperator in the given bases.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.superoperators.liouvillian",
    "page": "Docstrings",
    "title": "QuantumOptics.superoperators.liouvillian",
    "category": "function",
    "text": "liouvillian(H, J; rates, Jdagger)\n\nCreate a super-operator equivalent to the master equation so that dot ρ = S ρ.\n\nThe super-operator S is defined by\n\nS ρ = -fraciħ H ρ + sum_i J_i ρ J_i^ - frac12 J_i^ J_i ρ - frac12 ρ J_i^ J_i\n\nArguments\n\nH: Hamiltonian.\nJ: Vector containing the jump operators.\nrates: Vector or matrix specifying the coefficients for the jump operators.\nJdagger: Vector containing the hermitian conjugates of the jump operators. If they            are not given they are calculated automatically.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.logarithmic_negativity",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.logarithmic_negativity",
    "category": "function",
    "text": "logarithmic_negativity(rho, index)\n\nThe logarithmic negativity of a density matrix ρ is defined as\n\nN(ρ) = log₂ρᵀ\n\nwhere ρᵀ is the partial transpose.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.manybody.manybodyoperator",
    "page": "Docstrings",
    "title": "QuantumOptics.manybody.manybodyoperator",
    "category": "function",
    "text": "manybodyoperator(b::ManyBodyBasis, op)\n\nCreate the many-body operator from the given one-body operator op.\n\nThe given operator can either be a one-body operator or a two-body interaction. Higher order interactions are at the moment not implemented.\n\nThe mathematical formalism for the one-body case is described by\n\nX = sum_ij a_i^ a_j u_i x  u_j\n\nand for the interaction case by\n\nX = sum_ijkl a_i^ a_j^ a_k a_l u_iu_j x u_ku_l\n\nwhere X is the N-particle operator, x is the one-body operator and u are the one-body states associated to the different modes of the N-particle basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.particle.momentum",
    "page": "Docstrings",
    "title": "QuantumOptics.particle.momentum",
    "category": "function",
    "text": "momentum(b:MomentumBasis)\n\nMomentum operator in momentum space.\n\n\n\n\n\nmomentum(b::PositionBasis)\n\nMomentum operator in real space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.negativity",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.negativity",
    "category": "function",
    "text": "negativity(rho, index)\n\nNegativity of rho with respect to subsystem index.\n\nThe negativity of a density matrix ρ is defined as\n\nN(ρ) = ρᵀ\n\nwhere ρᵀ is the partial transpose.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.nlevel.nlevelstate",
    "page": "Docstrings",
    "title": "QuantumOptics.nlevel.nlevelstate",
    "category": "function",
    "text": "nlevelstate(b::NLevelBasis, n::Int)\n\nState where the system is completely in the n-th level.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.norm",
    "page": "Docstrings",
    "title": "LinearAlgebra.norm",
    "category": "function",
    "text": "norm(x::StateVector)\n\nNorm of the given bra or ket state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.normalize",
    "page": "Docstrings",
    "title": "LinearAlgebra.normalize",
    "category": "function",
    "text": "normalize(op)\n\nReturn the normalized operator so that its tr(op) is one.\n\n\n\n\n\nnormalize(x::StateVector)\n\nReturn the normalized state so that norm(x) is one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.normalize!",
    "page": "Docstrings",
    "title": "LinearAlgebra.normalize!",
    "category": "function",
    "text": "normalize!(op)\n\nIn-place normalization of the given operator so that its tr(x) is one.\n\n\n\n\n\nnormalize!(x::StateVector)\n\nIn-place normalization of the given bra or ket so that norm(x) is one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.fock.number",
    "page": "Docstrings",
    "title": "QuantumOptics.fock.number",
    "category": "function",
    "text": "number(b::FockBasis)\n\nNumber operator for the specified Fock space.\n\n\n\n\n\nnumber(b::ManyBodyBasis, index)\n\nParticle number operator for the i-th mode of the many-body basis b.\n\n\n\n\n\nnumber(b::ManyBodyBasis)\n\nTotal particle number operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.manybody.onebodyexpect",
    "page": "Docstrings",
    "title": "QuantumOptics.manybody.onebodyexpect",
    "category": "function",
    "text": "onebodyexpect(op, state)\n\nExpectation value of the one-body operator op in respect to the many-body state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.state_definitions.passive_state",
    "page": "Docstrings",
    "title": "QuantumOptics.state_definitions.passive_state",
    "category": "function",
    "text": "passive_state(rho,IncreasingEigenenergies::Bool=true)\n\nPassive state π of ρ. IncreasingEigenenergies=true means that higher indices correspond to higher energies.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.bases.permutesystems",
    "page": "Docstrings",
    "title": "QuantumOptics.bases.permutesystems",
    "category": "function",
    "text": "permutesystems(a, perm)\n\nChange the ordering of the subsystems of the given object.\n\nFor a permutation vector [2,1,3] and a given object with basis [b1, b2, b3] this function results in [b2, b1, b3].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.state_definitions.phase_average",
    "page": "Docstrings",
    "title": "QuantumOptics.state_definitions.phase_average",
    "category": "function",
    "text": "phase_average(rho)\n\nReturns the phase-average of ρ containing only the diagonal elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.position",
    "page": "Docstrings",
    "title": "Base.position",
    "category": "function",
    "text": "position(b::PositionBasis)\n\nPosition operator in real space.\n\n\n\n\n\nposition(b:MomentumBasis)\n\nPosition operator in momentum space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.particle.potentialoperator",
    "page": "Docstrings",
    "title": "QuantumOptics.particle.potentialoperator",
    "category": "function",
    "text": "potentialoperator(b::PositionBasis, V(x))\n\nOperator representing a potential V(x) in real space.\n\n\n\n\n\npotentialoperator(b::MomentumBasis, V(x))\n\nOperator representing a potential V(x) in momentum space.\n\n\n\n\n\npotentialoperator(b::CompositeBasis, V(x, y, z, ...))\n\nOperator representing a potential V in more than one dimension.\n\nArguments\n\nb: Composite basis consisting purely either of PositionBasis or   MomentumBasis. Note, that calling this with a composite basis in   momentum space might consume a large amount of memory.\nV: Function describing the potential. ATTENTION: The number of arguments   accepted by V must match the spatial dimension. Furthermore, the order   of the arguments has to match that of the order of the tensor product of   bases (e.g. if b=bx⊗by⊗bz, then V(x,y,z)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators_dense.projector",
    "page": "Docstrings",
    "title": "QuantumOptics.operators_dense.projector",
    "category": "function",
    "text": "projector(b1, b2)\n\nProjection operator between subspaces and superspaces or between two subspaces.\n\n\n\n\n\nprojector(a::Ket, b::Bra)\n\nProjection operator ab.\n\n\n\n\n\nprojector(a::Ket)\n\nProjection operator aa.\n\n\n\n\n\nprojector(a::Bra)\n\nProjection operator aa.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.bases.ptrace",
    "page": "Docstrings",
    "title": "QuantumOptics.bases.ptrace",
    "category": "function",
    "text": "ptrace(a, indices)\n\nPartial trace of the given basis, state or operator.\n\nThe indices argument, which can be a single integer or a vector of integers, specifies which subsystems are traced out. The number of indices has to be smaller than the number of subsystems, i.e. it is not allowed to perform a full trace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.ptranspose",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.ptranspose",
    "category": "function",
    "text": "ptranspose(rho, index)\n\nPartial transpose of rho with respect to subspace specified by index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.phasespace.qfunc",
    "page": "Docstrings",
    "title": "QuantumOptics.phasespace.qfunc",
    "category": "function",
    "text": "qfunc(a, α)\nqfunc(a, x, y)\nqfunc(a, xvec, yvec)\n\nHusimi Q representation αραπ for the given state or operator a. The function can either be evaluated on one point α or on a grid specified by the vectors xvec and yvec. Note that conversion from x and y to α is done via the relation α = frac1sqrt2(x + i y).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.phasespace.qfuncsu2",
    "page": "Docstrings",
    "title": "QuantumOptics.phasespace.qfuncsu2",
    "category": "function",
    "text": "qfuncsu2(ket,Ntheta;Nphi=2Ntheta)\nqfuncsu2(rho,Ntheta;Nphi=2Ntheta)\n\nHusimi Q SU(2) representation θϕρθϕπ for the given state.\n\nThe function calculates the SU(2) Husimi representation of a state on the generalised bloch sphere (0 < θ < π and 0 < ϕ < 2 π) with a given resolution (Ntheta, Nphi).\n\nqfuncsu2(rho,θ,ϕ)\nqfuncsu2(ket,θ,ϕ)\n\nThis version calculates the Husimi Q SU(2) function at a position given by θ and ϕ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.state_definitions.randoperator",
    "page": "Docstrings",
    "title": "QuantumOptics.state_definitions.randoperator",
    "category": "function",
    "text": "randoperator(b1[, b2])\n\nCalculate a random unnormalized dense operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.state_definitions.randstate",
    "page": "Docstrings",
    "title": "QuantumOptics.state_definitions.randstate",
    "category": "function",
    "text": "randstate(basis)\n\nCalculate a random normalized ket state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.particle.samplepoints",
    "page": "Docstrings",
    "title": "QuantumOptics.particle.samplepoints",
    "category": "function",
    "text": "samplepoints(b::PositionBasis)\n\nx values of the real space basis.\n\n\n\n\n\nsamplepoints(b::MomentumBasis)\n\np values of the momentum basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spin.sigmam",
    "page": "Docstrings",
    "title": "QuantumOptics.spin.sigmam",
    "category": "function",
    "text": "sigmam(b::SpinBasis)\n\nLowering operator σ_- for the given Spin basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spin.sigmap",
    "page": "Docstrings",
    "title": "QuantumOptics.spin.sigmap",
    "category": "function",
    "text": "sigmap(b::SpinBasis)\n\nRaising operator σ_+ for the given Spin basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spin.sigmax",
    "page": "Docstrings",
    "title": "QuantumOptics.spin.sigmax",
    "category": "function",
    "text": "sigmax(b::SpinBasis)\n\nPauli σ_x operator for the given Spin basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spin.sigmay",
    "page": "Docstrings",
    "title": "QuantumOptics.spin.sigmay",
    "category": "function",
    "text": "sigmay(b::SpinBasis)\n\nPauli σ_y operator for the given Spin basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spin.sigmaz",
    "page": "Docstrings",
    "title": "QuantumOptics.spin.sigmaz",
    "category": "function",
    "text": "sigmaz(b::SpinBasis)\n\nPauli σ_z operator for the given Spin basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spectralanalysis.simdiag",
    "page": "Docstrings",
    "title": "QuantumOptics.spectralanalysis.simdiag",
    "category": "function",
    "text": "simdiag(ops; atol, rtol)\n\nSimultaneously diagonalize commuting Hermitian operators specified in ops.\n\nThis is done by diagonalizing the sum of the operators. The eigenvalues are computed by a = ψAψ and it is checked whether the eigenvectors fulfill the equation Aψ = aψ.\n\nArguments\n\nops: Vector of sparse or dense operators.\natol=1e-14: kwarg of Base.isapprox specifying the tolerance of the       approximate check\nrtol=1e-14: kwarg of Base.isapprox specifying the tolerance of the       approximate check\n\nReturns\n\nevals_sorted: Vector containing all vectors of the eigenvalues sorted       by the eigenvalues of the first operator.\nv: Common eigenvectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SparseArrays.sparse",
    "page": "Docstrings",
    "title": "SparseArrays.sparse",
    "category": "function",
    "text": "sparse(op::AbstractOperator)\n\nConvert an arbitrary operator into a SparseOperator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spin.spindown",
    "page": "Docstrings",
    "title": "QuantumOptics.spin.spindown",
    "category": "function",
    "text": "spindown(b::SpinBasis)\n\nSpin down state for the given Spin basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.spin.spinup",
    "page": "Docstrings",
    "title": "QuantumOptics.spin.spinup",
    "category": "function",
    "text": "spinup(b::SpinBasis)\n\nSpin up state for the given Spin basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.superoperators.spost",
    "page": "Docstrings",
    "title": "QuantumOptics.superoperators.spost",
    "category": "function",
    "text": "Create a super-operator equivalent for left side operator multiplication.\n\nFor operators A, B the relation\n\n    mathrmspost(A) B = B A\n\nholds. op can be a dense or a sparse operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.superoperators.spre",
    "page": "Docstrings",
    "title": "QuantumOptics.superoperators.spre",
    "category": "function",
    "text": "spre(op)\n\nCreate a super-operator equivalent for right side operator multiplication.\n\nFor operators A, B the relation\n\n    mathrmspre(A) B = A B\n\nholds. op can be a dense or a sparse operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.bases.tensor",
    "page": "Docstrings",
    "title": "QuantumOptics.bases.tensor",
    "category": "function",
    "text": "tensor(x::AbstractOperator, y::AbstractOperator, z::AbstractOperator...)\n\nTensor product hatxhatyhatz of the given operators.\n\n\n\n\n\ntensor(x::Ket, y::Ket, z::Ket...)\n\nTensor product xyz of the given states.\n\n\n\n\n\ntensor(x, y, z...)\n\nTensor product of the given objects. Alternatively, the unicode symbol ⊗ (\\otimes) can be used.\n\n\n\n\n\ntensor(x::Basis, y::Basis, z::Basis...)\n\nCreate a CompositeBasis from the given bases.\n\nAny given CompositeBasis is expanded so that the resulting CompositeBasis never contains another CompositeBasis.\n\n\n\n\n\ntensor(x::Ket, y::Bra)\n\nOuter product xy of the given states.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.state_definitions.thermalstate",
    "page": "Docstrings",
    "title": "QuantumOptics.state_definitions.thermalstate",
    "category": "function",
    "text": "thermalstate(H,T)\n\nThermal state exp(-HT)Trexp(-HT).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.tr",
    "page": "Docstrings",
    "title": "LinearAlgebra.tr",
    "category": "function",
    "text": "tr(x::AbstractOperator)\n\nTrace of the given operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.tracedistance",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.tracedistance",
    "category": "function",
    "text": "tracedistance(rho, sigma)\n\nTrace distance between rho and sigma.\n\nIt is defined as\n\nT(ρσ) = frac12 Trsqrt(ρ - σ)^ (ρ - σ)\n\nIt calls tracenorm which in turn either uses tracenorm_h or tracenorm_nh depending if ρ-σ is hermitian or not.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.tracedistance_h",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.tracedistance_h",
    "category": "function",
    "text": "tracedistance_h(rho, sigma)\n\nTrace distance between rho and sigma.\n\nIt uses the identity\n\nT(ρσ) = frac12 Trsqrt(ρ - σ)^ (ρ - σ) = frac12 sum_i λ_i\n\nwhere λ_i are the eigenvalues of rho - sigma.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.tracedistance_nh",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.tracedistance_nh",
    "category": "function",
    "text": "tracedistance_nh(rho, sigma)\n\nTrace distance between rho and sigma.\n\nNote that in this case rho and sigma don\'t have to be represented by square matrices (i.e. they can have different left-hand and right-hand bases).\n\nIt uses the identity\n\n    T(ρσ) = frac12 Trsqrt(ρ - σ)^ (ρ - σ)\n         = frac12 sum_i σ_i\n\nwhere σ_i are the singular values of rho - sigma.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.tracenorm",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.tracenorm",
    "category": "function",
    "text": "tracenorm(rho)\n\nTrace norm of rho.\n\nIt is defined as\n\nT(ρ) = Trsqrtρ^ ρ\n\nDepending if rho is hermitian either tracenorm_h or tracenorm_nh is called.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.tracenorm_h",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.tracenorm_h",
    "category": "function",
    "text": "tracenorm_h(rho)\n\nTrace norm of rho.\n\nIt uses the identity\n\nT(ρ) = Trsqrtρ^ ρ = sum_i λ_i\n\nwhere λ_i are the eigenvalues of rho.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.metrics.tracenorm_nh",
    "page": "Docstrings",
    "title": "QuantumOptics.metrics.tracenorm_nh",
    "category": "function",
    "text": "tracenorm_nh(rho)\n\nTrace norm of rho.\n\nNote that in this case rho doesn\'t have to be represented by a square matrix (i.e. it can have different left-hand and right-hand bases).\n\nIt uses the identity\n\n    T(ρ) = Trsqrtρ^ ρ = sum_i σ_i\n\nwhere σ_i are the singular values of rho.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.particle.transform",
    "page": "Docstrings",
    "title": "QuantumOptics.particle.transform",
    "category": "function",
    "text": "transform(b1::PositionBasis, b2::FockBasis; x0=1)\ntransform(b1::FockBasis, b2::PositionBasis; x0=1)\n\nTransformation operator between position basis and fock basis.\n\nThe coefficients are connected via the relation\n\nψ(x_i) = sum_n=0^N x_in ψ_n\n\nwhere x_in is the value of the n-th eigenstate of a particle in a harmonic trap potential at position x, i.e.:\n\nx_in = π^-frac14 frace^-frac12left(fracxx_0right)^2sqrtx_0\n            frac1sqrt2^n n H_nleft(fracxx_0right)\n\n\n\n\n\ntransform(b1::MomentumBasis, b2::PositionBasis)\ntransform(b1::PositionBasis, b2::MomentumBasis)\n\nTransformation operator between position basis and momentum basis.\n\n\n\n\n\ntransform(b1::CompositeBasis, b2::CompositeBasis)\n\nTransformation operator between two composite bases. Each of the bases has to contain bases of type PositionBasis and the other one a corresponding MomentumBasis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.nlevel.transition",
    "page": "Docstrings",
    "title": "QuantumOptics.nlevel.transition",
    "category": "function",
    "text": "transition(b::ManyBodyBasis, to::Int, from::Int)\n\nOperator mathrmtomathrmfrom transferring particles between modes.\n\n\n\n\n\ntransition(b::NLevelBasis, to::Int, from::Int)\n\nTransition operator mathrmtomathrmfrom.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.operators.variance",
    "page": "Docstrings",
    "title": "QuantumOptics.operators.variance",
    "category": "function",
    "text": "variance(op, state)\n\nVariance of the given operator op for the specified state.\n\nstate can either be a (density) operator or a ket.\n\n\n\n\n\nvariance(index, op, state)\n\nIf an index is given, it assumes that op is defined in the subsystem specified by this number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.phasespace.wigner",
    "page": "Docstrings",
    "title": "QuantumOptics.phasespace.wigner",
    "category": "function",
    "text": "wigner(a, α)\nwigner(a, x, y)\nwigner(a, xvec, yvec)\n\nWigner function for the given state or operator a. The function can either be evaluated on one point α or on a grid specified by the vectors xvec and yvec. Note that conversion from x and y to α is done via the relation α = frac1sqrt2(x + i y).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.phasespace.wignersu2",
    "page": "Docstrings",
    "title": "QuantumOptics.phasespace.wignersu2",
    "category": "function",
    "text": "wignersu2(ket,Ntheta;Nphi=2Ntheta)\nwignersu2(rho,Ntheta;Nphi=2Ntheta)\n\nWigner SU(2) representation for the given state with a resolution (Ntheta, Nphi).\n\nThe function calculates the SU(2) Wigner representation of a state on the generalised bloch sphere (0 < θ < π and 0 < ϕ < 2 π) with a given resolution by decomposing the state into the basis of spherical harmonics.\n\nwignersu2(rho,θ,ϕ)\nwignersu2(ket,θ,ϕ)\n\nThis version calculates the Wigner SU(2) function at a position given by θ and ϕ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#QuantumOptics.phasespace.ylm",
    "page": "Docstrings",
    "title": "QuantumOptics.phasespace.ylm",
    "category": "function",
    "text": "ylm(l::Integer,m::Integer,theta::Real,phi::Real)\n\nSpherical harmonics Y(l,m)(θ,ϕ) where l ∈ N,  m = -l,-l+1,...,l-1,l, θ ∈ [0,π], and ϕ ∈ [0,2π).\n\nThis function calculates the value of Y(l,m) spherical harmonic at position θ and ϕ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "QuantumOptics.@samebasesQuantumOptics.@skiptimechecksQuantumOptics.AbstractOperatorQuantumOptics.BasisQuantumOptics.BraQuantumOptics.CompositeBasisQuantumOptics.DataOperatorQuantumOptics.DenseOperatorQuantumOptics.DenseSuperOperatorQuantumOptics.FockBasisQuantumOptics.GenericBasisQuantumOptics.KetQuantumOptics.LazyProductQuantumOptics.LazySumQuantumOptics.LazyTensorQuantumOptics.ManyBodyBasisQuantumOptics.MomentumBasisQuantumOptics.NLevelBasisQuantumOptics.PPTQuantumOptics.PositionBasisQuantumOptics.QuantumOpticsQuantumOptics.SparseOperatorQuantumOptics.SparseSuperOperatorQuantumOptics.SpinBasisQuantumOptics.StateVectorQuantumOptics.SubspaceBasisQuantumOptics.SuperOperatorQuantumOptics.basesQuantumOptics.basisQuantumOptics.basisstateQuantumOptics.bosonstatesQuantumOptics.coherentspinstateQuantumOptics.coherentstateQuantumOptics.coherentthermalstateQuantumOptics.createQuantumOptics.daggerQuantumOptics.denseQuantumOptics.destroyQuantumOptics.diagonaljumpsQuantumOptics.diagonaloperatorQuantumOptics.displaceQuantumOptics.dmQuantumOptics.eigenenergiesQuantumOptics.eigenstatesQuantumOptics.embedQuantumOptics.entropy_vnQuantumOptics.evalQuantumOptics.expectQuantumOptics.fermionstatesQuantumOptics.fidelityQuantumOptics.fockQuantumOptics.fockstateQuantumOptics.gaussianstateQuantumOptics.identityoperatorQuantumOptics.includeQuantumOptics.liouvillianQuantumOptics.logarithmic_negativityQuantumOptics.manybodyQuantumOptics.manybodyoperatorQuantumOptics.metricsQuantumOptics.momentumQuantumOptics.negativityQuantumOptics.nlevelQuantumOptics.nlevelstateQuantumOptics.normQuantumOptics.normalizeQuantumOptics.normalize!QuantumOptics.numberQuantumOptics.occupationQuantumOptics.onebodyexpectQuantumOptics.operatorsQuantumOptics.operators_denseQuantumOptics.operators_lazyproductQuantumOptics.operators_lazysumQuantumOptics.operators_lazytensorQuantumOptics.operators_sparseQuantumOptics.particleQuantumOptics.passive_stateQuantumOptics.permutesystemsQuantumOptics.phase_averageQuantumOptics.phasespaceQuantumOptics.polynomialsQuantumOptics.positionQuantumOptics.potentialoperatorQuantumOptics.printingQuantumOptics.projectorQuantumOptics.ptraceQuantumOptics.ptransposeQuantumOptics.qfuncQuantumOptics.qfuncsu2QuantumOptics.randoperatorQuantumOptics.randstateQuantumOptics.samplepointsQuantumOptics.semiclassicalQuantumOptics.sigmamQuantumOptics.sigmapQuantumOptics.sigmaxQuantumOptics.sigmayQuantumOptics.sigmazQuantumOptics.simdiagQuantumOptics.sortedindicesQuantumOptics.sparseQuantumOptics.sparsematrixQuantumOptics.spectralanalysisQuantumOptics.spinQuantumOptics.spindownQuantumOptics.spinupQuantumOptics.spostQuantumOptics.spreQuantumOptics.state_definitionsQuantumOptics.statesQuantumOptics.steadystateQuantumOptics.stochasticQuantumOptics.subspaceQuantumOptics.superoperatorsQuantumOptics.tensorQuantumOptics.thermalstateQuantumOptics.timecorrelationsQuantumOptics.timeevolutionQuantumOptics.trQuantumOptics.tracedistanceQuantumOptics.tracedistance_hQuantumOptics.tracedistance_nhQuantumOptics.tracenormQuantumOptics.tracenorm_hQuantumOptics.tracenorm_nhQuantumOptics.transformQuantumOptics.transformationsQuantumOptics.transitionQuantumOptics.varianceQuantumOptics.wignerQuantumOptics.wignersu2QuantumOptics.ylmQuantumOptics.⊗"
},

]}
