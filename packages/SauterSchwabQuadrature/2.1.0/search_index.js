var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Julia Implementation of the Sauter-Schwab quadrature rules"
},

{
    "location": "#SauterSchwabQuadrature-1",
    "page": "Readme",
    "title": "SauterSchwabQuadrature",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)(Image: Build status)(Image: Documentation)"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] Sauter S. Schwab C., \"Boundary Element Methods (Springer Series in Computational Mathematics)\", Chapter 5, Springer, 2010"
},

{
    "location": "autodocs/#SauterSchwabQuadrature.generate_integrand_uv",
    "page": "Docstrings",
    "title": "SauterSchwabQuadrature.generate_integrand_uv",
    "category": "function",
    "text": "Generates the integrand for use in the Sauter-Schwab quadrature formulas.\n\n    generate_integrand(kernel, test_local_space, trial_local_space,\n            test_chart, trial_chart)\n\nkernel is a function that takes two neighborhoods x and y and returns a scalar or dyadic value. kernel is the part of the integrand that is most easily described in term of cartesian coordinates, that is non-separable in the two arguments, and that does not depend on which of the local shape functions is considered. In boundary element methods it is the Green function (fundamental solution) of the underlying partial differential equations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SauterSchwabQuadrature.sauterschwab_parameterized",
    "page": "Docstrings",
    "title": "SauterSchwabQuadrature.sauterschwab_parameterized",
    "category": "function",
    "text": "Compute interaction integrals using the quadrature introduced in [1].\n\nsauterschwab_parameterized(integrand, strategy)\n\nHere, integrand is the pull-back of the integrand into the barycentric parameter domain of the two triangles that define the integration domain. Note that here we use (for a planar triangle) the representation:\n\nx = x[3] + u*(x[1]-x[3]) + v*(x[2]-x[3])\n\nwith u ranging from 0 to 1 and v ranging from 0 to 1-u. This parameter domain and representation is different from the one used in [1].\n\nThe second argument \'strategy\' is an object whose type is one of\n\nCommonFace\nCommonEdge\nCommonVertex\nPositiveDistance\n\naccording to the configuration of the two triangular patches defining the domain of integration. The constructors of these classes take a single argument acc that defines the number of quadrature points along each of the four axes of the final rectangular (ξ,η) integration domain (see [1], Ch 5).\n\n[1] Sauter. Schwwab, \'Boundary Element Methods\', Springer Berlin Heidelberg, 2011\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SauterSchwabQuadrature.CommonEdgeSauterSchwabQuadrature.CommonFaceSauterSchwabQuadrature.CommonVertexSauterSchwabQuadrature.PositiveDistanceSauterSchwabQuadrature.SauterSchwabQuadratureSauterSchwabQuadrature.SauterSchwabStrategySauterSchwabQuadrature._legendreSauterSchwabQuadrature.evalSauterSchwabQuadrature.generate_integrand_uvSauterSchwabQuadrature.includeSauterSchwabQuadrature.k3p_ceSauterSchwabQuadrature.k3p_cfSauterSchwabQuadrature.k3p_cvSauterSchwabQuadrature.k3p_pdSauterSchwabQuadrature.reorderSauterSchwabQuadrature.sauterschwab_parameterized"
},

]}
