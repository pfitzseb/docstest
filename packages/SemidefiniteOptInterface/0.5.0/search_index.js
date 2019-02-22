var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SemidefiniteOptInterface-(SDOI)-1",
    "page": "Readme",
    "title": "SemidefiniteOptInterface (SDOI)",
    "category": "section",
    "text": "Build Status\n[![Build Status][build-img]][build-url] [![Build Status][winbuild-img]][winbuild-url]\n[![Coveralls branch][coveralls-img]][coveralls-url] [![Codecov branch][codecov-img]][codecov-url]This package make it easy to implement the API of MathOptInterface for semidefinite programming solver like CSDP, SDPA, DSDP and SDPLR that require the problem to be described in the following form:max ⟨C, X⟩            min ⟨b, y⟩\n    ⟨A_i, X⟩ = b_i        ∑ A_i y_i ⪰ C\n          X  ⪰ 0The well known SDPA file format uses this form but this package communicates to the solver directly and the solver wrappers use the C/C++ API without using a file.[build-img]: https://travis-ci.org/JuliaOpt/SemidefiniteOptInterface.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaOpt/SemidefiniteOptInterface.jl [winbuild-img]: https://ci.appveyor.com/api/projects/status/r92anpmqeo30rppe/branch/master?svg=true [winbuild-url]: https://ci.appveyor.com/project/JuliaOpt/semidefiniteoptinterface-jl/branch/master [coveralls-img]: https://coveralls.io/repos/github/JuliaOpt/SemidefiniteOptInterface.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/JuliaOpt/SemidefiniteOptInterface.jl?branch=master [codecov-img]: http://codecov.io/github/JuliaOpt/SemidefiniteOptInterface.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/JuliaOpt/SemidefiniteOptInterface.jl?branch=master"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.coefficienttype",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.coefficienttype",
    "category": "function",
    "text": "coefficienttype(optimizer::AbstractSDOptimizer)\n\nReturns the coefficienttype that should be used for optimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getX",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getX",
    "category": "function",
    "text": "getX(optimizer::AbstractSDOptimizer)\n\nReturns the solution X as a block matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getZ",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getZ",
    "category": "function",
    "text": "getZ(optimizer::AbstractSDOptimizer)\n\nReturns the solution Z.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getblockdimension",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getblockdimension",
    "category": "function",
    "text": "getblockdimension(optimizer::AbstractSDOptimizer, blk)\n\nReturns the dimension of the block blk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getconstraintcoefficients",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getconstraintcoefficients",
    "category": "function",
    "text": "getconstraintcoefficients(optimizer::AbstractSDOptimizer, constr::Integer)\n\nReturn the list of entries blk, i, j of the matrix of the constraint constr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getconstraintconstant",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getconstraintconstant",
    "category": "function",
    "text": "getconstraintconstant(optimizer::AbstractSDOptimizer, constr::Integer)\n\nSets the entry constr of b to val.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getdualobjectivevalue",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getdualobjectivevalue",
    "category": "function",
    "text": "getdualobjectivevalue(optimizer::AbstractSDOptimizer)\n\nReturns the dual objective value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getnumberofblocks",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getnumberofblocks",
    "category": "function",
    "text": "getnumberofblocks(optimizer::AbstractSDOptimizer)\n\nReturns the number of blocks of the block matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getnumberofconstraints",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getnumberofconstraints",
    "category": "function",
    "text": "getnumberofconstraints(optimizer::AbstractSDOptimizer)\n\nReturns the number of constraints of the model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getobjectivecoefficients",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getobjectivecoefficients",
    "category": "function",
    "text": "getobjectivecoefficients(optimizer::AbstractSDOptimizer)\n\nReturn the list of entries blk, i, j of the objective matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.getprimalobjectivevalue",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.getprimalobjectivevalue",
    "category": "function",
    "text": "getprimalobjectivevalue(optimizer::AbstractSDOptimizer)\n\nReturns the primal objective value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.gety",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.gety",
    "category": "function",
    "text": "gety(optimizer::AbstractSDOptimizer)\n\nReturns the solution y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.init!",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.init!",
    "category": "function",
    "text": "init!(optimizer::AbstractSDOptimizer, blkdims::Vector{Int}, nconstrs::Integer)\n\nInitialize the optimizer with nconstrs constraints and blkdims blocks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.setconstraintcoefficient!",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.setconstraintcoefficient!",
    "category": "function",
    "text": "setconstraintcoefficient!(optimizer::AbstractSDOptimizer, val, constr::Integer, blk::Integer, i::Integer, j::Integer)\n\nSet the entry i, j of the block blk of the matrix of the constraint constr to val.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.setconstraintconstant!",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.setconstraintconstant!",
    "category": "function",
    "text": "setconstraintconstant!(optimizer::AbstractSDOptimizer, val, constr::Integer)\n\nGet the entry constr of b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SemidefiniteOptInterface.setobjectivecoefficient!",
    "page": "Docstrings",
    "title": "SemidefiniteOptInterface.setobjectivecoefficient!",
    "category": "function",
    "text": "setobjectivecoefficient!(optimizer::AbstractSDOptimizer, val, blk::Integer, i::Integer, j::Integer)\n\nSet the entry i, j of the block blk of the objective matrix to val.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SemidefiniteOptInterface.AFSemidefiniteOptInterface.ASFSemidefiniteOptInterface.AVFSemidefiniteOptInterface.AbstractBlockMatrixSemidefiniteOptInterface.AbstractSDOptimizerSemidefiniteOptInterface.BlockMatrixSemidefiniteOptInterface.CISemidefiniteOptInterface.DSSemidefiniteOptInterface.MOISemidefiniteOptInterface.MOIUSemidefiniteOptInterface.MockSDOptimizerSemidefiniteOptInterface.NSSemidefiniteOptInterface.PSSemidefiniteOptInterface.SAFSemidefiniteOptInterface.SDOIOptimizerSemidefiniteOptInterface.SOItoMOIBridgeSemidefiniteOptInterface.SVFSemidefiniteOptInterface.SemidefiniteOptInterfaceSemidefiniteOptInterface.SolverStatusSemidefiniteOptInterface.SupportedSetsSemidefiniteOptInterface.VAFSemidefiniteOptInterface.VFSemidefiniteOptInterface.VISemidefiniteOptInterface.VISSemidefiniteOptInterface.VVFSemidefiniteOptInterface.ZSSemidefiniteOptInterface._allocate_constraintSemidefiniteOptInterface._constraintvariable!SemidefiniteOptInterface._enumerateSemidefiniteOptInterface._getattributeSemidefiniteOptInterface._getblockSemidefiniteOptInterface._getconstantSemidefiniteOptInterface._lengthSemidefiniteOptInterface._varSemidefiniteOptInterface.addblkconstantSemidefiniteOptInterface.addsetconstantSemidefiniteOptInterface.blockSemidefiniteOptInterface.coefficienttypeSemidefiniteOptInterface.createslack!SemidefiniteOptInterface.evalSemidefiniteOptInterface.getXSemidefiniteOptInterface.getZSemidefiniteOptInterface.getblockSemidefiniteOptInterface.getblockdimensionSemidefiniteOptInterface.getconstraintcoefficientsSemidefiniteOptInterface.getconstraintconstantSemidefiniteOptInterface.getdualSemidefiniteOptInterface.getdualobjectivevalueSemidefiniteOptInterface.getmatdimSemidefiniteOptInterface.getnumberofblocksSemidefiniteOptInterface.getnumberofconstraintsSemidefiniteOptInterface.getobjectivecoefficientsSemidefiniteOptInterface.getprimalobjectivevalueSemidefiniteOptInterface.getslackSemidefiniteOptInterface.getvardualSemidefiniteOptInterface.getvarprimalSemidefiniteOptInterface.getySemidefiniteOptInterface.includeSemidefiniteOptInterface.init!SemidefiniteOptInterface.isfreeSemidefiniteOptInterface.load_objective_term!SemidefiniteOptInterface.loadcoefficients!SemidefiniteOptInterface.loadfreevariables!SemidefiniteOptInterface.loadslack!SemidefiniteOptInterface.loadslacks!SemidefiniteOptInterface.mockSDoptimizerSemidefiniteOptInterface.nblocksSemidefiniteOptInterface.nconstraintsSemidefiniteOptInterface.newblockSemidefiniteOptInterface.nextlineSemidefiniteOptInterface.output_indexSemidefiniteOptInterface.readsdpa!SemidefiniteOptInterface.scalar_termSemidefiniteOptInterface.scalevec!SemidefiniteOptInterface.setconstant!SemidefiniteOptInterface.setconstraintcoefficient!SemidefiniteOptInterface.setconstraintconstant!SemidefiniteOptInterface.setobjectivecoefficient!SemidefiniteOptInterface.setvarmap!SemidefiniteOptInterface.sympackedlenSemidefiniteOptInterface.to_matrixSemidefiniteOptInterface.unfreeSemidefiniteOptInterface.varmapSemidefiniteOptInterface.vscalingSemidefiniteOptInterface.writesdpa"
},

]}
