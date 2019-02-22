var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LambertW-1",
    "page": "Readme",
    "title": "LambertW",
    "category": "section",
    "text": ""
},

{
    "location": "#Lambert-W-function-and-associated-omega-constant-1",
    "page": "Readme",
    "title": "Lambert W function and associated omega constant",
    "category": "section",
    "text": "Linux, OSX: (Image: Build Status) &nbsp; Windows: (Image: Build Status) &nbsp; &nbsp; &nbsp; (Image: Coverage Status) (Image: codecov.io)<!– (Image: LambertW) –>"
},

{
    "location": "#lambertw-1",
    "page": "Readme",
    "title": "lambertw",
    "category": "section",
    "text": "The Lambert W function, also called the omega function or product logarithm.lambertw(z,k)   # Lambert W function for argument z and branch index k\nlambertw(z)     # the same as lambertw(z,0)z may be Complex or Real. k must be an integer. For Real z, k must be either 0 or -1.Examples:julia> lambertw(10)\n1.7455280027406994\n\njulia> lambertw(e)\n1\n\njulia> lambertw(1.0)\n0.5671432904097838\n\njulia> lambertw(-pi/2 + 0im)  / pi\n4.6681174759251105e-18 + 0.5im"
},

{
    "location": "#lambertwbp(x,k0)-1",
    "page": "Readme",
    "title": "lambertwbp(x,k=0)",
    "category": "section",
    "text": "Return 1 + W(-1/e + z), for z satisfying 0 <= abs(z) < 1/e, on the branch of index k, where k must be either 0 or -1. This function is designed to minimize loss of precision near the branch point z=-1/e. lambertwbp(z,k) converges to Float64 precision for abs(z) < 0.32.If k=-1 and imag(z) < 0, the value on the branch k=1 is returned.julia> lambertwbp(1e-3,-1)\n-0.07560894118662498\n\njulia> lambertwbp(0)\n-0.0lambertwbp uses a series expansion about the branch point z=-1/e. The loss of precision in lambertw is analogous to the loss of precision in computing the sqrt(1-x) for x close to 1."
},

{
    "location": "#LambertW.finv(lambertw)-1",
    "page": "Readme",
    "title": "LambertW.finv(lambertw)",
    "category": "section",
    "text": "The functional inverse of the Lambert W function.julia> finv(lambertw)(lambertw(1.0))\n1.0\n\njulia> finv(lambertw)(lambertw(1+im/2,3))\n1.0 + 0.49999999999999944im"
},

{
    "location": "#omega-constant-1",
    "page": "Readme",
    "title": "omega constant",
    "category": "section",
    "text": "The omega constantjulia> ω\nω = 0.5671432904097...\n\njulia> omega\nω = 0.5671432904097...\n\njulia> ω * exp(ω)\n1.0\n\njulia> big(ω)\n5.67143290409783872999968662210355549753815787186512508135131079223045793086683e-01 with 256 bits of precision\n\njulia> lambertw(1) == float(ω)\ntrue<!– ### Notes –><!– Both lambertw and lambertwbp throw DomainErrors rather than return NaNs. –> <!– This behavior is reversed by setting LAMBERTW_USE_NAN=true at the top of –> <!– the source file lambertw.jl. –><!–  LocalWords:  lambertw jacobisymbol julia ulia im eval LambertW  –> <!–  LocalWords:  lambertwbp lambertwm NaN bitstype Combinatorics  –> <!–  LocalWords:  BigInt imag sqrt  –>"
},

{
    "location": "autodocs/#LambertW.finv",
    "page": "Docstrings",
    "title": "LambertW.finv",
    "category": "function",
    "text": "finv(::typeof(lambertw)) -> Function\n\nreturn the functional inverse of the Lambert W function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LambertW.lambertw",
    "page": "Docstrings",
    "title": "LambertW.lambertw",
    "category": "function",
    "text": "lambertw(z::Complex{T}, k::V=0) where {T<:Real, V<:Integer}\nlambertw(z::T, k::V=0) where {T<:Real, V<:Integer}\n\nCompute the kth branch of the Lambert W function of z. If z is real, k must be either 0 or -1. For Real z, the domain of the branch k = -1 is [-1/e, 0] and the domain of the branch k = 0 is [-1/e, Inf]. For Complex z, and all k, the domain is the complex plane.\n\njulia> lambertw(-1/e, -1)\n-1.0\n\njulia> lambertw(-1/e, 0)\n-1.0\n\njulia> lambertw(0, 0)\n0.0\n\njulia> lambertw(0, -1)\n-Inf\n\njulia> lambertw(Complex(-10.0, 3.0), 4)\n-0.9274337508660128 + 26.37693445371142im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LambertW.lambertwbp",
    "page": "Docstrings",
    "title": "LambertW.lambertwbp",
    "category": "function",
    "text": "lambertwbp(z, k=0)\n\nCompute accurate value of 1 + W(-1/e + z), for abs(z) in [0, 1/e] for k either 0 or -1. This function is faster and more accurate near the branch point -1/e between k=0 and k=1. The result is accurate to Float64 precision for abs(z) < 0.32. If k=-1 and imag(z) < 0, the value on the branch k=1 is returned.\n\njulia> lambertw(-1/e + 1e-18, -1)\n-1.0\n\njulia> lambertwbp(1e-18, -1)\n-2.331643983409312e-9\n\n# Same result, but 1000 times slower\njulia> convert(Float64, (lambertw(-BigFloat(1)/e + BigFloat(10)^(-18), -1) + 1))\n-2.331643983409312e-9\n\nnote: Note\nlambertwbp uses a series expansion about the branch point z=-1/e to avoid loss of precision. The loss of precision in lambertw is analogous to the loss of precision in computing the sqrt(1-x) for x close to 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LambertW.omega",
    "page": "Docstrings",
    "title": "LambertW.omega",
    "category": "constant",
    "text": "omega\nω\n\nThe constant defined by ω exp(ω) = 1.\n\njulia> ω\nω = 0.5671432904097...\n\njulia> omega\nω = 0.5671432904097...\n\njulia> ω * exp(ω)\n1.0\n\njulia> big(omega)\n5.67143290409783872999968662210355549753815787186512508135131079223045793086683e-01\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LambertW.ω",
    "page": "Docstrings",
    "title": "LambertW.ω",
    "category": "constant",
    "text": "omega\nω\n\nThe constant defined by ω exp(ω) = 1.\n\njulia> ω\nω = 0.5671432904097...\n\njulia> omega\nω = 0.5671432904097...\n\njulia> ω * exp(ω)\n1.0\n\njulia> big(omega)\n5.67143290409783872999968662210355549753815787186512508135131079223045793086683e-01\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LambertW.BRANCH_POINT_COEFFS_FLOAT64LambertW.LambertWLambertW.__init__LambertW._lambertwLambertW._lambertw0LambertW._lambertwm1LambertW.branch_point_seriesLambertW.cgetLambertW.compute_a_coeffsLambertW.compute_branch_point_coeffsLambertW.compute_m_coefficientsLambertW.csetLambertW.evalLambertW.finvLambertW.hornerLambertW.includeLambertW.lambertwLambertW.lambertw_branch_oneLambertW.lambertw_branch_zeroLambertW.lambertw_root_findingLambertW.lambertwbpLambertW.omegaLambertW.omega_constLambertW.omega_const_LambertW.omega_const_bf_LambertW.wser100LambertW.wser12LambertW.wser19LambertW.wser26LambertW.wser290LambertW.wser3LambertW.wser32LambertW.wser5LambertW.wser50LambertW.wser7LambertW.ω"
},

]}
