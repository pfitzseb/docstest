var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Convex.jl-1",
    "page": "Readme",
    "title": "Convex.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: Convex) (Image: Convex) (Image: Convex)Convex.jl is a Julia package for Disciplined Convex Programming. Convex.jl can solve linear programs, mixed-integer linear programs, and DCP-compliant convex programs using a variety of solvers, including Mosek, Gurobi, ECOS, SCS, and  GLPK, through the MathProgBase interface. It also supports optimization with complex variables and coefficients.Installation: julia> Pkg.add(\"Convex\")Detailed documentation and examples for Convex.jl (stable | latest).\nIf you\'re running into bugs or have feature requests, please use the Github Issue Tracker.\nFor usage questions, please contact us via Discourse."
},

{
    "location": "#Quick-Example-1",
    "page": "Readme",
    "title": "Quick Example",
    "category": "section",
    "text": "To run this example, first install Convex and at least one solver, such as SCS:Pkg.add(\"Convex\")\nPkg.add(\"SCS\")Now let\'s solve a least-squares problem with inequality constraints.# Let us first make the Convex.jl module available\nusing Convex\n\n# Generate random problem data\nm = 4;  n = 5\nA = randn(m, n); b = randn(m, 1)\n\n# Create a (column vector) variable of size n x 1.\nx = Variable(n)\n\n# The problem is to minimize ||Ax - b||^2 subject to x >= 0\n# This can be done by: minimize(objective, constraints)\nproblem = minimize(sumsquares(A * x - b), [x >= 0])\n\n# Solve the problem by calling solve!\nsolve!(problem)\n\n# Check the status of the problem\nproblem.status # :Optimal, :Infeasible, :Unbounded etc.\n\n# Get the optimal value\nproblem.optval"
},

{
    "location": "#More-Examples-1",
    "page": "Readme",
    "title": "More Examples",
    "category": "section",
    "text": "A number of examples can be found here. The basic usage notebook gives a simple tutorial on problems that can be solved using Convex.jl. Many use cases of the package in complex-domain optimization can be found here."
},

{
    "location": "#Citing-this-package-1",
    "page": "Readme",
    "title": "Citing this package",
    "category": "section",
    "text": "If you use Convex.jl for published work, we encourage you to cite the software using the following BibTeX citation:@article{convexjl,\n title = {Convex Optimization in {J}ulia},\n author ={Udell, Madeleine and Mohan, Karanveer and Zeng, David and Hong, Jenny and Diamond, Steven and Boyd, Stephen},\n year = {2014},\n journal = {SC14 Workshop on High Performance Technical Computing in Dynamic Languages},\n archivePrefix = \"arXiv\",\n eprint = {1410.4821},\n primaryClass = \"math-oc\",\n}Convex.jl was previously called CVX.jl."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Convex.*Convex.+Convex.-Convex./Convex.<=Convex.==Convex.>=Convex.AbsAtomConvex.AbstractExprConvex.AbstractExprOrValueConvex.AdditionAtomConvex.AdjointAtomConvex.AffineVexityConvex.ArrayOrNothingConvex.ComplexSignConvex.ComplexVariableConvex.ConcaveVexityConvex.ConicConstrConvex.ConicObjConvex.ConjugateAtomConvex.ConstMonotonicityConvex.ConstVexityConvex.ConstantConvex.ConstraintConvex.ConvexConvex.ConvexVexityConvex.DEFAULT_SOLVERConvex.DiagAtomConvex.DiagMatrixAtomConvex.DiagonalConvex.DotMultiplyAtomConvex.DotSortAtomConvex.EntropyAtomConvex.EqConstraintConvex.EucNormAtomConvex.ExpAtomConvex.ExpConstraintConvex.Float64OrNothingConvex.GeoMeanAtomConvex.GtConstraintConvex.HcatAtomConvex.HermitianSemidefiniteConvex.HuberAtomConvex.ImaginaryAtomConvex.IndexAtomConvex.LambdaMaxAtomConvex.LambdaMinAtomConvex.LogAtomConvex.LogDetAtomConvex.LogSumExpAtomConvex.LtConstraintConvex.MatrixFracAtomConvex.MaxAtomConvex.MaximumAtomConvex.MinAtomConvex.MinimumAtomConvex.MonotonicityConvex.MultiplyAtomConvex.NegateAtomConvex.NegativeConvex.NoMonotonicityConvex.NoSignConvex.NondecreasingConvex.NonincreasingConvex.NotDcpConvex.NuclearNormAtomConvex.OperatorNormAtomConvex.PartialTraceAtomConvex.PositiveConvex.ProblemConvex.QolElemAtomConvex.QuadOverLinAtomConvex.RationalNormAtomConvex.RealAtomConvex.RelativeEntropyAtomConvex.ReshapeAtomConvex.SDPConstraintConvex.SOCConstraintConvex.SOCElemConstraintConvex.SemidefiniteConvex.SignConvex.SolutionConvex.SumAtomConvex.SumLargestAtomConvex.SumLargestEigsConvex.TransposeAtomConvex.UniqueConicFormsConvex.UniqueConstrListConvex.UniqueConstrMapConvex.UniqueExpMapConvex.ValueConvex.ValueOrNothingConvex.VariableConvex.VexityConvex._signConvex._sizeConvex._sumConvex._vecdotConvex.absConvex.abs2Convex.add_constraint!Convex.add_constraints!Convex.adjointConvex.applyDotDivideAtomConvex.applyDotExpAtomConvex.applyDotMultiplyAtomConvex.asvecConvex.cache_conic_form!Convex.can_solve_expConvex.can_solve_mipConvex.can_solve_sdpConvex.can_solve_socpConvex.clearmemoryConvex.conic_constr_to_constrConvex.conic_form!Convex.conic_problemConvex.conjConvex.convConvex.convertConvex.curvatureConvex.diagConvex.diagmConvex.dotConvex.dotsortConvex.entropyConvex.evalConvex.evaluateConvex.expConvex.find_variable_rangesConvex.fix!Convex.free!Convex.geomeanConvex.get_conic_formConvex.get_rowConvex.get_vectorized_sizeConvex.getindexConvex.has_conic_formConvex.hashConvex.hashaa_seedConvex.hcatConvex.hinge_lossConvex.huberConvex.hvcatConvex.id_to_variablesConvex.imagConvex.imag_conic_formConvex.inConvex.includeConvex.inner_productConvex.invposConvex.ismatrixConvex.isnegConvex.isposConvex.isposdefConvex.iterateConvex.kronConvex.lambdamaxConvex.lambdaminConvex.lastindexConvex.lengthConvex.load_primal_solution!Convex.load_problem!Convex.logConvex.log_perspectiveConvex.logdetConvex.logisticlossConvex.logsumexpConvex.matrixfracConvex.maxConvex.maximizeConvex.maximumConvex.minConvex.minimizeConvex.minimumConvex.monotonicityConvex.ndimsConvex.negConvex.normConvex.norm2Convex.norm_1Convex.norm_froConvex.norm_infConvex.nuclearnormConvex.operatornormConvex.partialtraceConvex.populate_duals!Convex.populate_solution!Convex.populate_variables!Convex.posConvex.promote_sizeConvex.psocpConvex.qol_elementwiseConvex.quadformConvex.quadoverlinConvex.rationalnormConvex.realConvex.real_conic_formConvex.relative_entropyConvex.reshapeConvex.satisfyConvex.set_warmstart!Convex.showConvex.sigmamaxConvex.signConvex.sizeConvex.socpConvex.solve!Convex.sqrtConvex.squareConvex.sumConvex.sumlargestConvex.sumlargesteigsConvex.sumsmallestConvex.sumsquaresConvex.trConvex.transposeConvex.var_to_rangesConvex.vcatConvex.vecConvex.vecdotConvex.vecnormConvex.vexityConvex.⪯Convex.⪰"
},

]}
