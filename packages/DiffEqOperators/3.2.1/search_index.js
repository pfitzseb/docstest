var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqOperators.jl-1",
    "page": "Readme",
    "title": "DiffEqOperators.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Julia-Library-to-solve-PDEs-using-Finite-Difference-Method-1",
    "page": "Readme",
    "title": "Julia Library to solve PDEs using Finite Difference Method",
    "category": "section",
    "text": "This library is going to be a part of DiffEq.jl to become the PDE solver alongside Fenics.jl.Blog posts related to the development of DiffEqOperators.jl can he found here"
},

{
    "location": "autodocs/#DiffEqOperators.DiffEqArrayOperator",
    "page": "Docstrings",
    "title": "DiffEqOperators.DiffEqArrayOperator",
    "category": "type",
    "text": "DiffEqArrayOperator(A[; update_func])\n\nRepresents a time-dependent linear operator given by an AbstractMatrix. The update function is called by update_coefficients! and is assumed to have the following signature:\n\nupdate_func(A::AbstractMatrix,u,p,t) -> [modifies A]\n\nYou can also use setval!(α,A) to bypass the update_coefficients! interface and directly mutate the array\'s value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqOperators.DiffEqScalar",
    "page": "Docstrings",
    "title": "DiffEqOperators.DiffEqScalar",
    "category": "type",
    "text": "DiffEqScalar(val[; update_func])\n\nRepresents a time-dependent scalar/scaling operator. The update function is called by update_coefficients! and is assumed to have the following signature:\n\nupdate_func(oldval,u,p,t) -> newval\n\nYou can also use setval!(α,val) to bypass the update_coefficients! interface and directly mutate the scalar\'s value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqOperators.FactorizedDiffEqArrayOperator",
    "page": "Docstrings",
    "title": "DiffEqOperators.FactorizedDiffEqArrayOperator",
    "category": "type",
    "text": "FactorizedDiffEqArrayOperator(F)\n\nLike DiffEqArrayOperator, but stores a Factorization instead.\n\nSupports left division and ldiv! when applied to an array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DiffEqOperators.AbstractDerivativeOperatorDiffEqOperators.AbstractDiffEqCompositeOperatorDiffEqOperators.DEFAULT_UPDATE_FUNCDiffEqOperators.DerivativeOperatorDiffEqOperators.DiffEqArrayOperatorDiffEqOperators.DiffEqIdentityDiffEqOperators.DiffEqOperatorCombinationDiffEqOperators.DiffEqOperatorCompositionDiffEqOperators.DiffEqOperatorsDiffEqOperators.DiffEqScalarDiffEqOperators.DiffEqScaledOperatorDiffEqOperators.FactorizedDiffEqArrayOperatorDiffEqOperators.FiniteDifferenceDiffEqOperators.UpwindOperatorDiffEqOperators.calculate_weightsDiffEqOperators.checkboundsDiffEqOperators.convolve_BC_left!DiffEqOperators.convolve_BC_right!DiffEqOperators.convolve_interior!DiffEqOperators.dirichlet_0!DiffEqOperators.dirichlet_1!DiffEqOperators.evalDiffEqOperators.get_LBCDiffEqOperators.get_RBCDiffEqOperators.get_typeDiffEqOperators.getopsDiffEqOperators.highDiffEqOperators.includeDiffEqOperators.initialize_left_boundary!DiffEqOperators.initialize_right_boundary!DiffEqOperators.left_Neumann_BC!DiffEqOperators.left_None_BC!DiffEqOperators.left_Robin_BC!DiffEqOperators.left_nothing_BC!DiffEqOperators.limitDiffEqOperators.lowDiffEqOperators.negate!DiffEqOperators.neumann0!DiffEqOperators.periodic!DiffEqOperators.reflectDiffEqOperators.rem1DiffEqOperators.right_Neumann_BC!DiffEqOperators.right_None_BC!DiffEqOperators.right_Robin_BC!DiffEqOperators.right_nothing_BC!DiffEqOperators.setval!DiffEqOperators.∘"
},

]}
