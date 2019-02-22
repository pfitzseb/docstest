var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SchattenNorms.jl-1",
    "page": "Readme",
    "title": "SchattenNorms.jl",
    "category": "section",
    "text": "(Image: Build Status)Simple implementation of Schatten norms. This package includes the complete bounded versions of the induced norms for linear transformations of matrices (i.e., superoperators), implemented as described inSemidefinite programs for completely bounded norms, John Watrous, Theory of Computing, Volume 5 (2009), pp. 217–238. (preprint)Simpler semidefinite programs for completely bounded norms, John Watrous, Chicago Journal of Theoretical Computer Science Volume 8 (2013), p. 1-19. (preprint)This package only supports the completely bounded norms for p=1 and p=∞ (which are dual). It is not clear if there is an efficient way to compute the completely bounded norms for other p."
},

{
    "location": "#Norms-implemented-1",
    "page": "Readme",
    "title": "Norms implemented",
    "category": "section",
    "text": "Taking σᵢ(M) to be the ith singular value of a matrix M, we haveFunction name Mathematical meaning\nsnorm(M, r) ‖X‖ᵣ = ∑ᵢ (σᵢ(M))ʳ\ncbnorm(M, r) supᵢ {‖M⊗1ᵢ(X)‖ᵣ  :  ‖X‖ᵣ=1}Some useful aliases and relatd calls areAlias function Equivalent call Common name\ntrnorm(M) snorm(M,1) trace norm\nnucnorm(M) snorm(M,1) nuclear norm\nfnorm(M) snorm(M,2), snorm(M) Frobenius norm (default for snorm)\nspecnorm(M) snorm(M,Inf) spectral norm.\ncbnorm(M) cbnorm(M,Inf) completely bounded norm usually refers to p=∞, so this is the default\ndnorm(M) cbnorm(M,1) diamond normFor the special case where M is the difference between CPTP maps, or the difference between superoperators corresponding to unitary maps, use ddist described below."
},

{
    "location": "#Utility-functions-1",
    "page": "Readme",
    "title": "Utility functions",
    "category": "section",
    "text": "Function name Common name Mathematical meaning\nworstfidelity(u, v) Worst case output state (Jozsa) fidelity min {❘⟨ψ ❘ v⁺ u ❘ψ⟩❘² : ❘⟨ψ❘ψ⟩❘² = 1}\nddistu(U,V) Diamond norm distance between unitary maps dnorm(liou(U)-liou(V))\nddist(E,F) Diamond norm distance between CPTP maps dnorm(E-F)Despite the mathematical equivalences between ddist/ddistu and dnorm, ddist/ddistu are much faster and more accurate."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> snorm([1 0; 0 -1])\n1.4142135623730951\n\njulia> snorm([1 0; 0 -1],1.0)\n2.0\n\njulia> snorm([1 0; 0 -1],Inf)\n1.0\n\njulia> U,_,_ = svd(randn(2,2)); V,_,_ = svd(randn(2,2)); # unitary invariance\n\njulia> isapprox(snorm([1 0; 0 -1]),snorm(U*[1 0; 0 -1]*V))\ntrue\n\njulia> isapprox(snorm([1 0; 0 -1],1.0),snorm(U*[1 0; 0 -1]*V,1.0))\ntrue\n\njulia> isapprox(snorm([1 0; 0 -1],Inf),snorm(U*[1 0; 0 -1]*V,Inf))\ntrue\n\njulia> R = randn(3,3); snorm(R,1) >= snorm(R,2) >= snorm(R,Inf)\ntrue\n\njulia> p = sort(abs(randn(3))+1.0); snorm(R,p[1]) >= snorm(R,p[2]) >= snorm(R,p[3])\ntrue\n\njulia> snorm(R,1.0) == snorm(R,1) == trnorm(R) == nucnorm(R)\ntrue"
},

{
    "location": "#Dependencies-1",
    "page": "Readme",
    "title": "Dependencies",
    "category": "section",
    "text": "SCS.jl and Convex.jl, for the completely bounded norms."
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "[ ] The implementation of the completely bounded 1 and ∞ norms is somewhat tailored to transformations between isomorphic spaces. It should be easy to make it more general.\n[X] The distance between two quantum channels (i.e., trace preserving, completely positive linear maps of operators) is \"easier\" to compute than the completely bounded 1 norm (the diamond norm). Adding a function just for that would be nice.\n[X] The diamond norm distance between two unitary maps is also much easier to compute – see, e.g., Lecture 20 for John Watrous\'s 2011 Quantum Information course – so a customized function would be nice."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Apache Lincense 2.0 (summary)"
},

{
    "location": "#Copyright-1",
    "page": "Readme",
    "title": "Copyright",
    "category": "section",
    "text": "Raytheon BBN Technologies 2015"
},

{
    "location": "#Authors-1",
    "page": "Readme",
    "title": "Authors",
    "category": "section",
    "text": "Marcus P da Silva (@marcusps)"
},

{
    "location": "autodocs/#SchattenNorms.E_",
    "page": "Docstrings",
    "title": "SchattenNorms.E_",
    "category": "function",
    "text": "E(iddim, ρ_rim)\n\nGenerates linear map E such that E(ρ) → 1 ⊗ ρ\n\nNote that the dual of this map is F such that F*vec(σ ⊗ ρ) → trace(σ) vec(ρ), in other words, E is the dual of the partial trace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.ddist",
    "page": "Docstrings",
    "title": "SchattenNorms.ddist",
    "category": "function",
    "text": "ddist(U,V)\n\nDiamond norm distance between two linear CPTP superoperators.   Equivalent to dnrom(E-F), but under the assumption that E and F   are CPTP supeoperators, but the ddist call is   much more accurate and faster due to properties of CPTP   superoperators.\n\nSee ddistu for a similar implementation of dnorm customized to the difference between unitary operations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.ddistu",
    "page": "Docstrings",
    "title": "SchattenNorms.ddistu",
    "category": "function",
    "text": "ddist(U,V)\n\nDiamond norm distance between two unitary operations.   Equivalent to dnorm(liou(U)-liou(V)), under the assumption U and   V are unitary matrices. However the ddist call is much more   accurate and much faster due to properties of unitary matrices and   the corresponding superoperators.\n\nNote: for this particular case, the matrices in question are not     the superoperators corresponding to the unitary operation, but     rather the unitary operations themselves.\n\nSee ddist for a similar implementation of dnorm customized to the difference between CPTP maps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.dnorm",
    "page": "Docstrings",
    "title": "SchattenNorms.dnorm",
    "category": "function",
    "text": "dnorm(L; solver=Convex.getdefaultsolver())\n\nComputes the diamond norm of a linear superoperator L (i.e., a linear transformation of operators). The superoperator must be represented in column major form. In other words, it must be given by a matrix that, when multiplying a vectorized (column major) operator, it should result in the vectorized (column major) representation of the result of the transformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.dnorm2",
    "page": "Docstrings",
    "title": "SchattenNorms.dnorm2",
    "category": "function",
    "text": "dnorm2(L1,L2)\n\nComputes the diamond norm of a linear superoperator L (i.e., a linear transformation of operators). The superoperator must be represented in column major form. In other words, it must be given by a matrix that, when multiplying a vectorized (column major) operator, it should result in the vectorized (column major) representation of the result of the transformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.dnormcptp",
    "page": "Docstrings",
    "title": "SchattenNorms.dnormcptp",
    "category": "function",
    "text": "dnormcptp(L1,L2)\n\nComputes the diamond norm distance between two linear completely positive and trace preserving superoperators L1 and L2 . The superoperators must be represented in column major form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.dnormcptp2",
    "page": "Docstrings",
    "title": "SchattenNorms.dnormcptp2",
    "category": "function",
    "text": "dnormcptp(L1,L2)\n\nComputes the diamond norm of a linear superoperator L (i.e., a linear transformation of operators). The superoperator must be represented in column major form. In other words, it must be given by a matrix that, when multiplying a vectorized (column major) operator, it should result in the vectorized (column major) representation of the result of the transformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.fnorm",
    "page": "Docstrings",
    "title": "SchattenNorms.fnorm",
    "category": "function",
    "text": "fnorm(m)\n\nComputes the Frobenius norm of a matrix m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.involution",
    "page": "Docstrings",
    "title": "SchattenNorms.involution",
    "category": "function",
    "text": "involution(m)\n\nPermutes the elements of a matrix so that it transforms the column major representation of a linear map L into a matrix C that is positive iff L is completely positive, Hermitian iff L maps (vectorized) Hermitian matrices to Hermitian matrices. In other words, it corresponds to the Choi-Jamiolkoski isomorphism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.nucnorm",
    "page": "Docstrings",
    "title": "SchattenNorms.nucnorm",
    "category": "function",
    "text": "nucnorm(m)\n\nComputes the nuclear norm of a matrix m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.retrϕ",
    "page": "Docstrings",
    "title": "SchattenNorms.retrϕ",
    "category": "function",
    "text": "Compute the trace of the real representation of a complex matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.snorm",
    "page": "Docstrings",
    "title": "SchattenNorms.snorm",
    "category": "function",
    "text": "snorm(m,p=2)\n\nComputes the p-Schatten norm of a matrix m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.specnorm",
    "page": "Docstrings",
    "title": "SchattenNorms.specnorm",
    "category": "function",
    "text": "specnorm(m)\n\nComputes the spectral norm of a matrix m (i.e., the maximum singular value).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.trnorm",
    "page": "Docstrings",
    "title": "SchattenNorms.trnorm",
    "category": "function",
    "text": "trnorm(m)\n\nComputes the trace norm of a matrix m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.worstfidelity",
    "page": "Docstrings",
    "title": "SchattenNorms.worstfidelity",
    "category": "function",
    "text": "worstfidelity(U,V)\n\nFor two unitaries U and V, worstfidelity(U,V) is the worst case Jozsa fidelity between U*a and V*a, where a is a complex vector with norm 1. That is, worstfidelity(U,V) is equal to the minimum of |a\'*U\'*V*a|^2 over all complex vectors a with unit norm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.ϕ",
    "page": "Docstrings",
    "title": "SchattenNorms.ϕ",
    "category": "function",
    "text": "ϕ represents the isomorphism between complex and real matrices.  e.g., see Invariant semidefinite programs  by Bachoc et al.  If two arguments are given, they are taken to be the real and  imaginary parts of a complex matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.ϕi",
    "page": "Docstrings",
    "title": "SchattenNorms.ϕi",
    "category": "function",
    "text": "Extract the imag part of a complex matrix represented as a real matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.ϕinv",
    "page": "Docstrings",
    "title": "SchattenNorms.ϕinv",
    "category": "function",
    "text": "Extract the real and imag parts of a complex matrix represented as a real matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchattenNorms.ϕr",
    "page": "Docstrings",
    "title": "SchattenNorms.ϕr",
    "category": "function",
    "text": "Extract the real part of a complex matrix represented as a real matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SchattenNorms.E_SchattenNorms.SchattenNormsSchattenNorms.braSchattenNorms.ddistSchattenNorms.ddistuSchattenNorms.dist_to_neighbourSchattenNorms.dnormSchattenNorms.dnorm2SchattenNorms.dnormcptpSchattenNorms.dnormcptp2SchattenNorms.evalSchattenNorms.fnormSchattenNorms.includeSchattenNorms.involutionSchattenNorms.ketSchattenNorms.nucnormSchattenNorms.orig_to_lineSchattenNorms.retrϕSchattenNorms.snormSchattenNorms.specnormSchattenNorms.trnormSchattenNorms.worstfidelitySchattenNorms.ϕSchattenNorms.ϕiSchattenNorms.ϕinvSchattenNorms.ϕr"
},

]}
