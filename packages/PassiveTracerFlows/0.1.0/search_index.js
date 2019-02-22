var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#PassiveTracerFlows.jl-Documentation-1",
    "page": "Home",
    "title": "PassiveTracerFlows.jl Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": ""
},

{
    "location": "#Developers-1",
    "page": "Home",
    "title": "Developers",
    "category": "section",
    "text": "PassiveTracerFlows is currently being developed by Gregory L. Wagner and Navid C. Constantinou."
},

{
    "location": "#Cite-1",
    "page": "Home",
    "title": "Cite",
    "category": "section",
    "text": "The code is citable via zenodo. Please cite as:Gregory L. Wagner & Navid C. Constantinou. (2018). FourierFlows/FourierFlows.jl. Zenodo.  https://doi.org/10.5281/zenodo.1161724"
},

{
    "location": "modules/traceradvdiff/#",
    "page": "TracerAdvDiff Module",
    "title": "TracerAdvDiff Module",
    "category": "page",
    "text": ""
},

{
    "location": "modules/traceradvdiff/#TracerAdvDiff-Module-1",
    "page": "TracerAdvDiff Module",
    "title": "TracerAdvDiff Module",
    "category": "section",
    "text": ""
},

{
    "location": "modules/traceradvdiff/#Basic-Equations-1",
    "page": "TracerAdvDiff Module",
    "title": "Basic Equations",
    "category": "section",
    "text": "This module solves the advection diffusion equation for a passive tracer concentration c(x y t) in two-dimensions:partial_t c + boldsymbolu boldsymbolcdot boldsymbolnabla c = underbraceeta partial_x^2 c + kappa partial_y^2 c_textrmdiffusivity + underbracekappa_h (-1)^n_h nabla^2n_hc_textrmhyper-diffusivity where boldsymbolu = (uv) is the two-dimensional advecting flow, eta the x-diffusivity and kappa is the y-diffusivity. If eta is not defined then the code uses isotropic diffusivity, i.e., eta partial_x^2 c + kappa partial_y^2 cmapstokappanabla^2. The advecting flow could be either compressible or incompressible. "
},

{
    "location": "modules/traceradvdiff/#Implementation-1",
    "page": "TracerAdvDiff Module",
    "title": "Implementation",
    "category": "section",
    "text": "The equation is time-stepped forward in Fourier space:partial_t widehatc = - widehatboldsymbolu boldsymbolcdot boldsymbolnabla c - left (eta k_x^2 + kappa k_y^2) +kappa_h k^2nu_h rightwidehatc Thus:beginalign*\nmathcalL = -eta k_x^2 - kappa k_y^2 - kappa_h k^2nu_h  \nmathcalN(widehatc) = - mathrmFFT(u partial_x c + upsilon partial_y c) \nendalign*"
},

{
    "location": "man/types/#",
    "page": "Private types",
    "title": "Private types",
    "category": "page",
    "text": ""
},

{
    "location": "man/types/#Private-types-1",
    "page": "Private types",
    "title": "Private types",
    "category": "section",
    "text": ""
},

{
    "location": "man/types/#Private-types-in-module-PassiveTracerFlows:-1",
    "page": "Private types",
    "title": "Private types in module PassiveTracerFlows:",
    "category": "section",
    "text": "Modules = [PassiveTracerFlows]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/types/#PassiveTracerFlows.TracerAdvDiff.ConstDiffParams",
    "page": "Private types",
    "title": "PassiveTracerFlows.TracerAdvDiff.ConstDiffParams",
    "category": "type",
    "text": "ConstDiffParams(eta, kap, kaph, nkaph, u, v)\nConstDiffParams(eta, kap, u, v)\n\nReturns the params for constant diffusivity problem with time-varying flow.\n\n\n\n\n\n"
},

{
    "location": "man/types/#PassiveTracerFlows.TracerAdvDiff.ConstDiffSteadyFlowParams",
    "page": "Private types",
    "title": "PassiveTracerFlows.TracerAdvDiff.ConstDiffSteadyFlowParams",
    "category": "type",
    "text": "ConstDiffSteadyFlowParams(eta, kap, kaph, nkaph, u, v, g)\nConstDiffSteadyFlowParams(eta, kap, u, v, g)\n\nReturns the params for constant diffusivity problem with time-steady flow.\n\n\n\n\n\n"
},

{
    "location": "man/types/#PassiveTracerFlows.TracerAdvDiff.Vars-Tuple{Any}",
    "page": "Private types",
    "title": "PassiveTracerFlows.TracerAdvDiff.Vars",
    "category": "method",
    "text": "Vars(g)\n\nReturns the vars for constant diffusivity problem on grid g.\n\n\n\n\n\n"
},

{
    "location": "man/types/#Private-types-in-module-PassiveTracerFlows:-2",
    "page": "Private types",
    "title": "Private types in module PassiveTracerFlows:",
    "category": "section",
    "text": "Modules = [PassiveTracerFlows.TracerAdvDiff]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/functions/#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "man/functions/#Functions-1",
    "page": "Functions",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "man/functions/#Functions-exported-from-PassiveTracerFlows:-1",
    "page": "Functions",
    "title": "Functions exported from PassiveTracerFlows:",
    "category": "section",
    "text": "Modules = [PassiveTracerFlows]\nPrivate = false\nOrder = [:function]"
},

{
    "location": "man/functions/#PassiveTracerFlows.TracerAdvDiff.set_c!-Tuple{Any,Any}",
    "page": "Functions",
    "title": "PassiveTracerFlows.TracerAdvDiff.set_c!",
    "category": "method",
    "text": "set_c!(prob, c)\nset_c!(prob, c::Function)\n\nSet the solution sol as the transform of c and update variables v on the grid g.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#PassiveTracerFlows.TracerAdvDiff.updatevars!-Tuple{Any}",
    "page": "Functions",
    "title": "PassiveTracerFlows.TracerAdvDiff.updatevars!",
    "category": "method",
    "text": "updatevars!(prob)\n\nUpdate the vars in v on the grid g with the solution in sol.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#Functions-exported-from-TracerAdvDiff:-1",
    "page": "Functions",
    "title": "Functions exported from TracerAdvDiff:",
    "category": "section",
    "text": "Modules = [PassiveTracerFlows.TracerAdvDiff]\nPrivate = false\nOrder = [:function]"
},

]}
