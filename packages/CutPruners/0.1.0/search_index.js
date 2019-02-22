var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CutPruners-1",
    "page": "Readme",
    "title": "CutPruners",
    "category": "section",
    "text": "Documentation Build Status Social\n[![][docs-stable-img]][docs-stable-url] [![Build Status][build-img]][build-url] [![Build Status][winbuild-img]][winbuild-url] [![Gitter][gitter-img]][gitter-url]\n[![][docs-latest-img]][docs-latest-url] [![Coveralls branch][coveralls-img]][coveralls-url] [![Codecov branch][codecov-img]][codecov-url] [<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Discourselogo.png/799px-Discourselogo.png\" width=\"64\">][discourse-url][docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-stable-url]: https://JuliaPolyhedra.github.io/CutPruners.jl/stable [docs-latest-url]: https://JuliaPolyhedra.github.io/CutPruners.jl/latest[build-img]: https://travis-ci.org/JuliaPolyhedra/CutPruners.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaPolyhedra/CutPruners.jl [winbuild-img]: https://ci.appveyor.com/api/projects/status/497mymfaaophscsg?svg=true [winbuild-url]: https://ci.appveyor.com/project/JuliaPolyhedra/cutpruners-jl [coveralls-img]: https://coveralls.io/repos/github/JuliaPolyhedra/CutPruners.jl/badge.svg [coveralls-url]: https://coveralls.io/github/JuliaPolyhedra/CutPruners.jl [codecov-img]: https://codecov.io/gh/JuliaPolyhedra/CutPruners.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaPolyhedra/CutPruners.jl [gitter-url]: https://gitter.im/JuliaOpt/StochasticDualDynamicProgramming.jl [gitter-img]: https://badges.gitter.im/JuliaOpt/StochasticDualDynamicProgramming.jl.svg [discourse-url]: https://discourse.julialang.org/c/domain/opt"
},

{
    "location": "autodocs/#CutPruners.AbstractCutPruner",
    "page": "Docstrings",
    "title": "CutPruners.AbstractCutPruner",
    "category": "type",
    "text": "A cut pruner maintains a matrix A and a vector b such that represents size(A, 1) (== length(b)) cuts. Let a_i be -A[i,:] if lazy_minus and A[i,:] otherwise and β_i be b[i], the meaning of the cut depends on the sense. If sense is\n\n:Min, then the cut pruner represents the concave polyhedral function min ⟨a_i, x⟩ + β_i;\n:Max, then the cut pruner represents the convex polyhedral function max ⟨a_i, x⟩ + β_i;\n:≤, then the cut pruner represents the polyhedra defined by the intersection of the half-space ⟨a_i, x⟩ ≤ β_i;\n:≥, then the cut pruner represents the polyhedra defined by the intersection of the half-space ⟨a_i, x⟩ ≥ β_i.\n\nInternally, instead of sense, the booleans isfun and islb are stored. The mapping between sense and these two booleans is given by the following table\n\nsense isfun islb\nMin true false\nMax true true\n≤ false false\n≥ false true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.AvgCutPruningAlgo",
    "page": "Docstrings",
    "title": "CutPruners.AvgCutPruningAlgo",
    "category": "type",
    "text": "AvgCutPruningAlgo <: AbstractCutPruningAlgo\n\nRemoves the cuts with lower trust where the trust is: nused / nwith + bonus where the cut has been used nused times amoung nwith optimization done with it. We say that the cut was used if its dual value is nonzero. It has a bonus equal to mycutbonus if the cut was generated using a trial given by the problem using this cut. If nwidth is zero, nused/nwith is replaced by newcuttrust.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.DeMatosPruningAlgo",
    "page": "Docstrings",
    "title": "CutPruners.DeMatosPruningAlgo",
    "category": "type",
    "text": "DeMatosPruningAlgo <: AbstractCutPruningAlgo\n\nRemoves the cuts with lower trust where the trust is the number of points x associated to the cuts. The more points are associated, the higher is the trust.\n\nWe refer to [1] for further details.\n\n[1] De Matos, Vitor L., Andy B. Philpott, and Erlon C. Finardi. \"Improving the performance of stochastic dual dynamic programming.\" Journal of Computational and Applied Mathematics 290 (2015): 196-208.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.DecayCutPruningAlgo",
    "page": "Docstrings",
    "title": "CutPruners.DecayCutPruningAlgo",
    "category": "type",
    "text": "DecayCutPruningAlgo <: AbstractCutPruningAlgo\n\nRemoves the cuts with lower trust where the trust is initially newcuttrust + bonus and is updated using trust -> λ * trust + used after each optimization done with it. The value used is 1 if the cut was used and 0 otherwise. It has a bonus equal to mycutbonus if the cut was generated using a trial given by the problem using this cut. We say that the cut was used if its dual value is nonzero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.addposition!",
    "page": "Docstrings",
    "title": "CutPruners.addposition!",
    "category": "function",
    "text": "addposition!(man::DeMatosCutPruner, position::Matrix)\n\nUpdate territories with cuts previously computed during backward pass.\n\nArguments\n\nman::DeMatosCutPruner   Pruner to update.\nposition::Array{T, 2}   New visited positions, corresponding to a collection of points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.addstate!",
    "page": "Docstrings",
    "title": "CutPruners.addstate!",
    "category": "function",
    "text": "addstate!(man::DeMatosCutPruner, x::Vector)\n\nAdd a new state to test and accordingly update territories of each cut.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.addusage!",
    "page": "Docstrings",
    "title": "CutPruners.addusage!",
    "category": "function",
    "text": "Update cuts relevantness after a solver\'s call returning dual vector σρ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.appendcuts!",
    "page": "Docstrings",
    "title": "CutPruners.appendcuts!",
    "category": "function",
    "text": "Append cuts (A, b, mycut) in CutPruner man.\n\n\n\n\n\nPush new cut in CutPruner man.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.checkredundancy",
    "page": "Docstrings",
    "title": "CutPruners.checkredundancy",
    "category": "function",
    "text": "checkredundancy{T}(A::AbstractMatrix{T}, b::AbstractVector{T},\n                   Anew::AbstractMatrix{T}, bnew::AbstractVector{T},\n                   isfun::Bool, islb::Bool, tol::Float64, ident::Bool=false)\n\nCheck redundant cuts between the Polyhedra (A,b) and (Anew, bnew). Return index of redundant cuts in Anew.\n\nArguments\n\nisfun::Bool   States if the Polyhedra defines a function\nislb::Bool   States if the Polyhedra is a lower-bound or an upper-bound\ntol::Float64   Tolerance of redundancy check\nident::Bool   States whether (A,b)==(Anew,bnew) if we want to remove redundant   lines in a single Polyhedra\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.choosecutstoremove",
    "page": "Docstrings",
    "title": "CutPruners.choosecutstoremove",
    "category": "function",
    "text": "Remove num cuts in CutPruner man.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.cutvalue",
    "page": "Docstrings",
    "title": "CutPruners.cutvalue",
    "category": "function",
    "text": "cutvalue{T}(man::DeMatosCutPruner, indc::Int, x::Vector{T})\n\nGet value of cut with index indc at point x.\n\nArguments\n\nman::DeMatosCutPruner   Approximation of the value function as linear cuts\nindc::Int   Index of cut to consider\nx::Vector{T}   Coordinates of state\n\nReturn\n\ncost::T     Value of cut indc at point x.     If man is a polyhedral function, then it is the value of the cut at x,     otherwise, it is the distance between x and the cut.     As a rule of thumb, the higher the cutvalue is, the less it is redundant.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.exactpruning!",
    "page": "Docstrings",
    "title": "CutPruners.exactpruning!",
    "category": "function",
    "text": "exactpruning!(man::AbstractCutPruner, solver::MathProgBase.AbstractMathProgSolver;\n              ub=Inf, lb=-Inf, epsilon=1e-5)\n\nRemove dominated cuts in CutPruner man.\n\nWe use a LP solver to determine whether a cut is dominated or not.\n\nArguments\n\nman::AbstractCutPruner   Cut pruner where to remove cuts\nsolver   Solver used to solve LP\nub::Union{Float64, Vector{Float64}}   State x upper bound\nlb::Union{Float64, Vector{Float64}}   State x lower bound\nepsilon::Float64   Pruning\'s tolerance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.getdominated",
    "page": "Docstrings",
    "title": "CutPruners.getdominated",
    "category": "function",
    "text": "Return dominated cuts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.gettrust",
    "page": "Docstrings",
    "title": "CutPruners.gettrust",
    "category": "function",
    "text": "Get current trust of CutPruner man.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.initialtrusts",
    "page": "Docstrings",
    "title": "CutPruners.initialtrusts",
    "category": "function",
    "text": "Get a Vector of Float64 specifying the initial trusts of mycut.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.isbetter",
    "page": "Docstrings",
    "title": "CutPruners.isbetter",
    "category": "function",
    "text": "Test if cut i is better than newcuttrust.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.isdominated",
    "page": "Docstrings",
    "title": "CutPruners.isdominated",
    "category": "function",
    "text": "State whether a cut is dominated with a tolerance epsilon.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.isinside",
    "page": "Docstrings",
    "title": "CutPruners.isinside",
    "category": "function",
    "text": "Check if λ is a line of matrix A. λ might not have the same eltype as A and b as it might have been scaled by normalizecut.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.keeponlycuts!",
    "page": "Docstrings",
    "title": "CutPruners.keeponlycuts!",
    "category": "function",
    "text": "Keep only cuts whose indexes are in Vector K in CutPruner man. If K is not sorted, the cuts will change their order accordingly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.ncuts",
    "page": "Docstrings",
    "title": "CutPruners.ncuts",
    "category": "function",
    "text": "Return number of cuts in CutPruner man.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.optimalcut",
    "page": "Docstrings",
    "title": "CutPruners.optimalcut",
    "category": "function",
    "text": "optimalcut{T}(man::DeMatosCutPruner, xf::Vector{T})\n\nFind active cut at point xf.\n\nArguments\n\nman::DeMatosCutPruner:   CutPruner\nxf::Vector{T}:\n\nReturn\n\nbestcost::T   Value of supporting cut at point xf\nbestcut::Int   Index of supporting cut at point xf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.removecuts!",
    "page": "Docstrings",
    "title": "CutPruners.removecuts!",
    "category": "function",
    "text": "Remove cuts whose indexes are in Vector K in CutPruner man.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.replacecuts!",
    "page": "Docstrings",
    "title": "CutPruners.replacecuts!",
    "category": "function",
    "text": "Replace cuts at indexes in K by cuts in (A, b, mycut) in CutPruner man.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CutPruners.updateterritory!",
    "page": "Docstrings",
    "title": "CutPruners.updateterritory!",
    "category": "function",
    "text": "updateterritory!(man::DeMatosCutPruner, indcut::Int)\n\nUpdate territories (i.e. the set of tested states where     a given cut is active) considering new cut given by index indcut.\n\nArguments\n\nman::DeMatosCutPruner:\nindcut::Int:   new cut index\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CutPruners.AbstractCutPrunerCutPruners.AbstractCutPruningAlgoCutPruners.AvgCutPrunerCutPruners.AvgCutPruningAlgoCutPruners.CutPrunerCutPruners.CutPrunersCutPruners.DeMatosCutPrunerCutPruners.DeMatosPruningAlgoCutPruners.DecayCutPrunerCutPruners.DecayCutPruningAlgoCutPruners._appendcuts!CutPruners._indminCutPruners._keeponlycuts!CutPruners._replacecuts!CutPruners.addcuts!CutPruners.addposition!CutPruners.addstate!CutPruners.addusage!CutPruners.appendcuts!CutPruners.checkredundancyCutPruners.choosecutstoremoveCutPruners.cutvalueCutPruners.evalCutPruners.exactpruning!CutPruners.flengthCutPruners.getdominatedCutPruners.getnreplacedCutPruners.getsenseCutPruners.gettrustCutPruners.gettrustofCutPruners.gettypeCutPruners.giveterritory!CutPruners.hasterritoriesCutPruners.hastrustCutPruners.includeCutPruners.initialtrustCutPruners.initialtrustsCutPruners.isbetterCutPruners.isdominatedCutPruners.isfunCutPruners.isinsideCutPruners.islbCutPruners.keeponlycuts!CutPruners.ncutsCutPruners.newidsCutPruners.normalizedcutCutPruners.optimalcutCutPruners.removecuts!CutPruners.replacecuts!CutPruners.updateterritory!CutPruners.updatetrust!"
},

]}
