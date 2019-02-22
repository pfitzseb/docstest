var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Qutilities-1",
    "page": "Readme",
    "title": "Qutilities",
    "category": "section",
    "text": "Assorted utilities for quantum information.Tested with Julia 1.0."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add Qutilities"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> using Qutilities\n\njulia> rho = [[1, 0, 0, 0] [0, 3, 3, 0] [0, 3, 3, 0] [0, 0, 0, 1]]/8.0\n4×4 Array{Float64,2}:\n 0.125  0.0    0.0    0.0\n 0.0    0.375  0.375  0.0\n 0.0    0.375  0.375  0.0\n 0.0    0.0    0.0    0.125\n\njulia> ptrace(rho)\n2×2 Array{Float64,2}:\n 0.5  0.0\n 0.0  0.5\njulia> ptranspose(rho)\n4×4 Array{Float64,2}:\n 0.125  0.0    0.0    0.375\n 0.0    0.375  0.0    0.0\n 0.0    0.0    0.375  0.0\n 0.375  0.0    0.0    0.125\n\njulia> purity(rho)\n0.59375\n\njulia> S_renyi(rho, 0)\n2.0\njulia> S_vn(rho)\n1.061278124459133\njulia> S_renyi(rho)\n0.7520724865564145\njulia> S_renyi(rho, Inf)\n0.4150374992788438\n\njulia> mutinf(rho)\n0.9387218755408671\njulia> concurrence(rho)\n0.5\njulia> formation(rho)\n0.35457890266527003\njulia> negativity(rho)\n0.5849625007211562"
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "To run all the tests, activate the package before calling test:pkg> activate .\n(Qutilities) pkg> test"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Provided under the terms of the MIT license. See LICENSE for more information."
},

{
    "location": "autodocs/#Qutilities.S_renyi",
    "page": "Docstrings",
    "title": "Qutilities.S_renyi",
    "category": "function",
    "text": "S_renyi(rho::AbstractMatrix, alpha::Real=2)\n\nOrder alpha Rényi entropy of rho.\n\nThe alpha parameter may have any value on the interval [0, Inf] except 1. It defaults to 2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.S_vn",
    "page": "Docstrings",
    "title": "Qutilities.S_vn",
    "category": "function",
    "text": "S_vn(rho::AbstractMatrix)\n\nVon Neumann entropy of rho.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.binent",
    "page": "Docstrings",
    "title": "Qutilities.binent",
    "category": "function",
    "text": "binent(x::Real)\n\nBinary entropy of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.concurrence",
    "page": "Docstrings",
    "title": "Qutilities.concurrence",
    "category": "function",
    "text": "concurrence(rho::AbstractMatrix)\n\nConcurrence of a mixed state rho for two qubits in the standard basis.\n\nRef: Wootters, W. K. (1998). Entanglement of formation of an arbitrary state of two qubits. Physical Review Letters, 80(10), 2245.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.concurrence_lb",
    "page": "Docstrings",
    "title": "Qutilities.concurrence_lb",
    "category": "function",
    "text": "concurrence_lb(rho::AbstractMatrix)\n\nLower bound on the concurrence for two qubits in the mixed state rho in the standard basis.\n\nRef: Mintert, F., & Buchleitner, A. (2007). Observable entanglement measure for mixed quantum states. Physical Review Letters, 98(14), 140505.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.formation",
    "page": "Docstrings",
    "title": "Qutilities.formation",
    "category": "function",
    "text": "formation(C::Real)\n\nEntanglement of formation for two qubits with concurrence C.\n\nRef: Wootters, W. K. (1998). Entanglement of formation of an arbitrary state of two qubits. Physical Review Letters, 80(10), 2245.\n\n\n\n\n\nformation(rho::AbstractMatrix)\n\nEntanglement of formation for two qubits in the mixed state rho in the standard basis.\n\nRef: Wootters, W. K. (1998). Entanglement of formation of an arbitrary state of two qubits. Physical Review Letters, 80(10), 2245.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.hermitize",
    "page": "Docstrings",
    "title": "Qutilities.hermitize",
    "category": "function",
    "text": "hermitize(rho::AbstractMatrix)\n\nMake rho Hermitian, but carefully.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.mutinf",
    "page": "Docstrings",
    "title": "Qutilities.mutinf",
    "category": "function",
    "text": "mutinf(rho::AbstractMatrix, S::Function=S_vn)\n\nMutual information of rho using the entropy function S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.negativity",
    "page": "Docstrings",
    "title": "Qutilities.negativity",
    "category": "function",
    "text": "negativity(rho::AbstractMatrix)\n\nLogarithmic negativity for a symmetric bipartition of rho.\n\nRef: Plenio, M. B. (2005). Logarithmic negativity: A full entanglement monotone that is not convex. Physical Review Letters, 95(9), 090503.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.nonneg",
    "page": "Docstrings",
    "title": "Qutilities.nonneg",
    "category": "function",
    "text": "nonneg(x::Real)\n\nx if x is non-negative; zero if x is negative.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.ptrace",
    "page": "Docstrings",
    "title": "Qutilities.ptrace",
    "category": "function",
    "text": "ptrace(rho::AbstractMatrix{T}, dims, which::Int)\n\nPartial trace of rho along dimension which from dims.\n\n\n\n\n\nptrace(rho::AbstractMatrix, which::Int=2)\n\nPartial trace of rho along dimension which.\n\nrho is split into halves and the trace is over the second half by default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.ptranspose",
    "page": "Docstrings",
    "title": "Qutilities.ptranspose",
    "category": "function",
    "text": "ptranspose(rho::AbstractMatrix, dims, which::Int)\n\nPartial transpose of rho along dimension which from dims.\n\n\n\n\n\nptranspose(rho::AbstractMatrix, which::Int=2)\n\nPartial transpose of rho along dimension which.\n\nrho is split into halves and the transpose is over the second half by default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.purity",
    "page": "Docstrings",
    "title": "Qutilities.purity",
    "category": "function",
    "text": "purity(rho::AbstractMatrix)\n\nPurity of rho.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.shannon",
    "page": "Docstrings",
    "title": "Qutilities.shannon",
    "category": "function",
    "text": "shannon(xs::AbstractVector)\n\nShannon entropy of xs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Qutilities.spinflip",
    "page": "Docstrings",
    "title": "Qutilities.spinflip",
    "category": "function",
    "text": "spinflip(rho::AbstractMatrix)\n\nWootters spin-flip operation for two qubits in the mixed state rho in the standard basis.\n\nRef: Wootters, W. K. (1998). Entanglement of formation of an arbitrary state of two qubits. Physical Review Letters, 80(10), 2245.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Qutilities.LOGQutilities.QutilitiesQutilities.S_renyiQutilities.S_vnQutilities.binentQutilities.concurrenceQutilities.concurrence_lbQutilities.evalQutilities.formationQutilities.hermitizeQutilities.includeQutilities.mutinfQutilities.negativityQutilities.nonnegQutilities.ptraceQutilities.ptransposeQutilities.purityQutilities.shannonQutilities.sigma_xQutilities.sigma_yQutilities.sigma_zQutilities.spinflip"
},

]}
