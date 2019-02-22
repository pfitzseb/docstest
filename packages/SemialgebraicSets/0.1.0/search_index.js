var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SemialgebraicSets-1",
    "page": "Readme",
    "title": "SemialgebraicSets",
    "category": "section",
    "text": "PackageEvaluator Build Status\n[![][pkg-0.6-img]][pkg-0.6-url] [![Build Status][build-img]][build-url] [![Build Status][winbuild-img]][winbuild-url]\n[![][pkg-0.7-img]][pkg-0.7-url] [![Coveralls branch][coveralls-img]][coveralls-url] [![Codecov branch][codecov-img]][codecov-url]Extension of MultivariatePolynomials to semialgebraic sets, i.e. sets defined by inequalities and equalities between polynomials. The following example shows how to build an algebraic set/algebraic varietyusing TypedPolynomials\n@polyvar x y z\n# Algebraic variety https://en.wikipedia.org/wiki/Algebraic_variety#/media/File:Elliptic_curve2.png\n@set y^2 == x^3 - x\n@set x^3 == 2x*y && x^2*y == 2y^2 - x\n@set x*y^2 == x*z - y && x*y == z^2 && x == y*z^4\n@set x^4*y^2 == z^5 && x^3*y^3 == 1 && x^2*y^4 == 2z\n@set x == z^2 && y == z^3Once the algebraic set has been created, you can check whether it is zero-dimensional and if it is the case, you can get the finite number of elements of the set simply by iterating over it, or by using collect to transform it into an array containing the solutions.V = @set y == x^2 && z == x^3\niszerodimensional(V) # should return false\nV = @set x^2 + x == 6 && y == x+1\niszerodimensional(V) # should return true\ncollect(V) # should return [[2, 3], [-3, -2]]The following example shows how to build an basic semialgebraic setusing TypedPolynomials\n@polyvar x y\n@set x^2 + y^2 <= 1 # Euclidean ball\n# Cutting the algebraic variety https://en.wikipedia.org/wiki/Algebraic_variety#/media/File:Elliptic_curve2.png\n@set y^2 == x^3 - x && x <= 0\n@set y^2 == x^3 - x && x >= 1[pkg-0.6-img]: http://pkg.julialang.org/badges/SemialgebraicSets0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=SemialgebraicSets [pkg-0.7-img]: http://pkg.julialang.org/badges/SemialgebraicSets0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=SemialgebraicSets[build-img]: https://travis-ci.org/JuliaAlgebra/SemialgebraicSets.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaAlgebra/SemialgebraicSets.jl [winbuild-img]: https://ci.appveyor.com/api/projects/status/v03rni6sb343akns/branch/master?svg=true [winbuild-url]: https://ci.appveyor.com/project/blegat/semialgebraicsets-jl/branch/master [coveralls-img]: https://coveralls.io/repos/github/JuliaAlgebra/SemialgebraicSets.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/JuliaAlgebra/SemialgebraicSets.jl?branch=master [codecov-img]: http://codecov.io/github/JuliaAlgebra/SemialgebraicSets.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/JuliaAlgebra/SemialgebraicSets.jl?branch=master"
},

{
    "location": "autodocs/#SemialgebraicSets.AbstractAlgebraicSolver",
    "page": "Docstrings",
    "title": "SemialgebraicSets.AbstractAlgebraicSolver",
    "category": "type",
    "text": "AbstractAlgebraicSolver\n\nSolver of algebraic equations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemialgebraicSets.AbstractMultiplicationMatricesAlgorithm",
    "page": "Docstrings",
    "title": "SemialgebraicSets.AbstractMultiplicationMatricesAlgorithm",
    "category": "type",
    "text": "AbstractMultiplicationMatricesAlgorithm\n\nAlgorithm computing multiplication matrices from algebraic equations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemialgebraicSets.AbstractMultiplicationMatricesSolver",
    "page": "Docstrings",
    "title": "SemialgebraicSets.AbstractMultiplicationMatricesSolver",
    "category": "type",
    "text": "AbstractMultiplicationMatricesSolver\n\nSolver of algebraic equations using multiplication matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemialgebraicSets.ReorderedSchurMultiplicationMatricesSolver",
    "page": "Docstrings",
    "title": "SemialgebraicSets.ReorderedSchurMultiplicationMatricesSolver",
    "category": "type",
    "text": "Corless, R. M.; Gianni, P. M. & Trager, B. M. A reordered Schur factorization method for zero-dimensional polynomial systems with multiple roots Proceedings of the 1997 international symposium on Symbolic and algebraic computation, 1997, 133-140\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemialgebraicSets.multiplicationmatrices",
    "page": "Docstrings",
    "title": "SemialgebraicSets.multiplicationmatrices",
    "category": "function",
    "text": "multiplicationmatrices(V::AbstractAlgebraicSet, algo::AbstractMultiplicationMatricesAlgorithm)::Union{Nothing, Vector{<:AbstractMatrix}}\n\nComputing multiplication matrices from the algebraic equations for which V is the set of solution using the algorithm algo. Returns a nullable which is null if V is not zero-dimensional and is the list of multiplication matrices otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemialgebraicSets.solvealgebraicequations",
    "page": "Docstrings",
    "title": "SemialgebraicSets.solvealgebraicequations",
    "category": "function",
    "text": "solvealgebraicequations(V::AbstractAlgebraicSet, algo::AbstractAlgebraicSolver)::Union{Nothing, Vector{<:Vector}}}\n\nSolve the algebraic equations for which V is the set of solutions using the algorithm algo. Returns a nullable which is null if V is not zero-dimensional and is the list of solutions otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemialgebraicSets.solvemultiplicationmatrices",
    "page": "Docstrings",
    "title": "SemialgebraicSets.solvemultiplicationmatrices",
    "category": "function",
    "text": "solvemultiplicationmatrices(Ms::AbstractVector{<:AbstractMatrix{T}}, algo::AbstractMultiplicationMatricesSolver)::Vector{Vector{T}} where T\n\nSolve the algebraic equations having multiplication matrices Ms using the algorithm algo. Returns the list of solutions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemialgebraicSets.spolynomial",
    "page": "Docstrings",
    "title": "SemialgebraicSets.spolynomial",
    "category": "function",
    "text": "spolynomial(p::AbstractPolynomialLike, q::AbstractPolynomialLike)\n\nComputes the S-polynomial of p and q defined by\n\nS(p q) =  fracmmathrmmathscLT(p) cdot p - fracmmathrmmathscLT(q) cdot q\n\nwhere m = mathrmlcm(mathrmmathscLM(p) mathrmmathscLM(q)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SemialgebraicSets.@setSemialgebraicSets.APLSemialgebraicSets.AbstractAlgebraicSetSemialgebraicSets.AbstractAlgebraicSolverSemialgebraicSets.AbstractBasicSemialgebraicSetSemialgebraicSets.AbstractGröbnerBasisAlgorithmSemialgebraicSets.AbstractMultiplicationMatricesAlgorithmSemialgebraicSets.AbstractMultiplicationMatricesSolverSemialgebraicSets.AbstractPolynomialIdealSemialgebraicSets.AbstractSemialgebraicSetSemialgebraicSets.AlgebraicSetSemialgebraicSets.BasicSemialgebraicSetSemialgebraicSets.BuchbergerSemialgebraicSets.DefaultAlgebraicSetLibrarySemialgebraicSets.EmptyPolynomialIdealSemialgebraicSets.FullSpaceSemialgebraicSets.GröbnerBasisMultiplicationMatricesAlgorithmSemialgebraicSets.MPSemialgebraicSets.PolynomialIdealSemialgebraicSets.ReorderedSchurMultiplicationMatricesSolverSemialgebraicSets.SemialgebraicSetsSemialgebraicSets.SolverUsingMultiplicationMatricesSemialgebraicSets._canonicalize_senseSemialgebraicSets._clusterordschurSemialgebraicSets._solvemultiplicationmatricesSemialgebraicSets._trsen!SemialgebraicSets.addequality!SemialgebraicSets.addinequality!SemialgebraicSets.algebraicsetSemialgebraicSets.algebraicsolverSemialgebraicSets.appendconstraints!SemialgebraicSets.basicsemialgebraicsetSemialgebraicSets.builddomainSemialgebraicSets.clusterordschurSemialgebraicSets.computeelements!SemialgebraicSets.computegröbnerbasis!SemialgebraicSets.conditionnumberSemialgebraicSets.criterionSemialgebraicSets.defaultalgebraicsetlibrarySemialgebraicSets.defaultalgebraicsolverSemialgebraicSets.defaultgröbnerbasisalgorithmSemialgebraicSets.defaultmultiplicationmatricesalgorithmSemialgebraicSets.defaultmultiplicationmatricessolverSemialgebraicSets.dummyselectionSemialgebraicSets.elementsSemialgebraicSets.equalitiesSemialgebraicSets.evalSemialgebraicSets.extSemialgebraicSets.groebnerbasisSemialgebraicSets.gröbnerbasisSemialgebraicSets.gröbnerbasis!SemialgebraicSets.idealSemialgebraicSets.includeSemialgebraicSets.inequalitiesSemialgebraicSets.iszerodimensionalSemialgebraicSets.lcmlmSemialgebraicSets.monomialbasisSemialgebraicSets.multiplicationmatricesSemialgebraicSets.multiplicationmatrixSemialgebraicSets.nequalitiesSemialgebraicSets.normalselectionSemialgebraicSets.presort!SemialgebraicSets.projectivealgebraicsetSemialgebraicSets.reducebasis!SemialgebraicSets.solvealgebraicequationsSemialgebraicSets.solvemultiplicationmatricesSemialgebraicSets.spolynomial"
},

]}
