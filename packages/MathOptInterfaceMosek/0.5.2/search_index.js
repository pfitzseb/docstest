var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "MathOptInterfaceMosek is the MathOptInterface.jl implementation for the MOSEK solver. The low-level solver API for MOSEK is found in the package Mosek.jl.The Mosek specific model object (used for example with JuMP) is created asusing MathOptInterfaceMosek\nmodel = MosekOptimizer()hence to use Mosek in a JuMP model, do, e.g.,using JuMP\nusing MathOptInterfaceMosek\nmodel = Model(with_optimizer(MosekOptimizer, QUIET=false, INTPNT_CO_TOL_DFEAS=1e-7))The parameter QUIET is a special parameter that when set to false disables all Mosek printing output. All other parameters can be found in the Mosek doc. Note that the prefix MSK_IPAR_ (for integer parameters), MSK_DPAR_ (for floating point parameters) or MSK_SPAR_ (for string parameters) are optional. If they are not given, they are inferred from the type of the value. For instance, in the example above, as 1e-7 is a floating point number, the parameters name used is MSK_DPAR_INTPNT_CO_TOL_DFEAS."
},

{
    "location": "autodocs/#MathOptInterfaceMosek.MosekModel",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.MosekModel",
    "category": "type",
    "text": "MosekModel <: MathOptInterface.AbstractModel\n\nLinear variables and constraint can be deleted. For some reason MOSEK does not support deleting PSD variables.\n\nNote also that adding variables and constraints will permanently add some (currently between 1 and 3) Int64s that a delete! will not remove. This ensures that Indices (Variable and constraint) that are deleted are thereafter invalid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathOptInterfaceMosek.checkconsistency",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.checkconsistency",
    "category": "function",
    "text": "Check consistency of the internal structures.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathOptInterfaceMosek.deleteblock",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.deleteblock",
    "category": "function",
    "text": "Move a block to the free list.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathOptInterfaceMosek.ensurefree",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.ensurefree",
    "category": "function",
    "text": "ensurefree(s::LinkedInts, N :: Int)\n\nEnsure that there are at least N elements free, and allocate as necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathOptInterfaceMosek.getfreeindexes",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.getfreeindexes",
    "category": "function",
    "text": "Get a list if the currently free elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathOptInterfaceMosek.getindex",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.getindex",
    "category": "function",
    "text": "getindex(s::LinkedInts, id::Int)\n\nShortcut for getindexes(s, id)[1] when s.size[id] is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathOptInterfaceMosek.getindexes",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.getindexes",
    "category": "function",
    "text": "getindexes(s::LinkedInts, id :: Int)\n\nReturn the vector of indices for the block id.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathOptInterfaceMosek.getusedindexes",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.getusedindexes",
    "category": "function",
    "text": "Get a list if the currently used elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathOptInterfaceMosek.newblock",
    "page": "Docstrings",
    "title": "MathOptInterfaceMosek.newblock",
    "category": "function",
    "text": "newblock(s::LinkedInts, N :: Int)\n\nAdd a new block in list idx\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MathOptInterfaceMosek.AffineFunctionMathOptInterfaceMosek.ConstraintMapMathOptInterfaceMosek.DEBUGMathOptInterfaceMosek.LinearDomainMathOptInterfaceMosek.LinearFunctionMathOptInterfaceMosek.LinkedIntsMathOptInterfaceMosek.MOIMathOptInterfaceMosek.MOIUMathOptInterfaceMosek.MathOptInterfaceMosekMathOptInterfaceMosek.MosekModelMathOptInterfaceMosek.MosekOptimizerMathOptInterfaceMosek.MosekSolutionMathOptInterfaceMosek.ObjFMathOptInterfaceMosek.PositiveSemidefiniteConeMathOptInterfaceMosek.ScalarIntegerDomainMathOptInterfaceMosek.ScalarLinearDomainMathOptInterfaceMosek.VariableFunctionMathOptInterfaceMosek.VectorConeMathOptInterfaceMosek.VectorLinearDomainMathOptInterfaceMosek._sympackedtoMathOptInterfaceMosek.abstractset2ctMathOptInterfaceMosek.addbound!MathOptInterfaceMosek.addlhsblock!MathOptInterfaceMosek.addvarconstrMathOptInterfaceMosek.allocateconstraintsMathOptInterfaceMosek.allocatedMathOptInterfaceMosek.allocatedlistMathOptInterfaceMosek.allocatevarconstraintsMathOptInterfaceMosek.allocatevariableMathOptInterfaceMosek.aux_setvardomMathOptInterfaceMosek.blocksizeMathOptInterfaceMosek.boundflag_allMathOptInterfaceMosek.boundflag_coneMathOptInterfaceMosek.boundflag_intMathOptInterfaceMosek.boundflag_lowerMathOptInterfaceMosek.boundflag_upperMathOptInterfaceMosek.candeleteMathOptInterfaceMosek.checkconsistencyMathOptInterfaceMosek.chgboundMathOptInterfaceMosek.coneparfromsetMathOptInterfaceMosek.deleteblockMathOptInterfaceMosek.domain_type_maskMathOptInterfaceMosek.ensurefreeMathOptInterfaceMosek.evalMathOptInterfaceMosek.getconboundlistMathOptInterfaceMosek.getfreeindexesMathOptInterfaceMosek.getindexMathOptInterfaceMosek.getindexesMathOptInterfaceMosek.getoneindexMathOptInterfaceMosek.getsolcodeMathOptInterfaceMosek.getusedindexesMathOptInterfaceMosek.getvarboundlistMathOptInterfaceMosek.id2vrefMathOptInterfaceMosek.includeMathOptInterfaceMosek.is_conic_setMathOptInterfaceMosek.is_positivesemidefinite_setMathOptInterfaceMosek.isvalidMathOptInterfaceMosek.mosek_block_type_integerMathOptInterfaceMosek.mosek_block_type_nonnegMathOptInterfaceMosek.mosek_block_type_nonposMathOptInterfaceMosek.mosek_block_type_psdMathOptInterfaceMosek.mosek_block_type_qconeMathOptInterfaceMosek.mosek_block_type_rangeMathOptInterfaceMosek.mosek_block_type_rqconeMathOptInterfaceMosek.mosek_block_type_unallocatedMathOptInterfaceMosek.mosek_block_type_zeroMathOptInterfaceMosek.newblockMathOptInterfaceMosek.numblocksMathOptInterfaceMosek.parametrized_taskMathOptInterfaceMosek.parse_parametersMathOptInterfaceMosek.problemtype_conicMathOptInterfaceMosek.problemtype_linearMathOptInterfaceMosek.problemtype_quadraticMathOptInterfaceMosek.ref2idMathOptInterfaceMosek.selectMathOptInterfaceMosek.set_internal_nameMathOptInterfaceMosek.solsizeMathOptInterfaceMosek.sympackedLtoUMathOptInterfaceMosek.sympackedUtoLMathOptInterfaceMosek.sympackedUtoLidxMathOptInterfaceMosek.sympackeddimMathOptInterfaceMosek.sympackedlenMathOptInterfaceMosek.trimapLMathOptInterfaceMosek.trimapU"
},

]}
