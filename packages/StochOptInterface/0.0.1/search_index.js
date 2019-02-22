var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "#StochOptInterface-1",
    "page": "Index",
    "title": "StochOptInterface",
    "category": "section",
    "text": "Welcome to StochOptInterface\'s documentation."
},

{
    "location": "#Contents-1",
    "page": "Index",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"stopcrit.md\"]\nDepth = 2"
},

{
    "location": "stopcrit/#",
    "page": "Stopping Criterion",
    "title": "Stopping Criterion",
    "category": "page",
    "text": "CurrentModule = StochOptInterface"
},

{
    "location": "stopcrit/#StochOptInterface.stop-Tuple{StochOptInterface.AbstractStoppingCriterion,StochOptInterface.Info}",
    "page": "Stopping Criterion",
    "title": "StochOptInterface.stop",
    "category": "method",
    "text": "stop(s::AbstractStoppingCriterion, info::Info)\n\nDetermine whether the SDDP algorithm should stop using the information stored in info.\n\n\n\n\n\n"
},

{
    "location": "stopcrit/#StochOptInterface.OrStoppingCriterion",
    "page": "Stopping Criterion",
    "title": "StochOptInterface.OrStoppingCriterion",
    "category": "type",
    "text": "mutable struct OrStoppingCriterion <: StochOptInterface.AbstractStoppingCriterion\n\nStop if lhs or rhs want to stop.\n\n\n\n\n\n"
},

{
    "location": "stopcrit/#StochOptInterface.AndStoppingCriterion",
    "page": "Stopping Criterion",
    "title": "StochOptInterface.AndStoppingCriterion",
    "category": "type",
    "text": "mutable struct AndStoppingCriterion <: StochOptInterface.AbstractStoppingCriterion\n\nStop if lhs and rhs want to stop.\n\n\n\n\n\n"
},

{
    "location": "stopcrit/#StochOptInterface.IterLimit",
    "page": "Stopping Criterion",
    "title": "StochOptInterface.IterLimit",
    "category": "type",
    "text": "mutable struct IterLimit <: StochOptInterface.AbstractStoppingCriterion\n\nStop if iter ≧ limit.\n\n\n\n\n\n"
},

{
    "location": "stopcrit/#StochOptInterface.CutLimit",
    "page": "Stopping Criterion",
    "title": "StochOptInterface.CutLimit",
    "category": "type",
    "text": "mutable struct CutLimit <: StochOptInterface.AbstractStoppingCriterion\n\nStop if there was less than or equal to limit cuts added in the iteration. For instance, CutLimit(0) stops when there are no cuts added.\n\n\n\n\n\n"
},

{
    "location": "stopcrit/#StochOptInterface.Pereira",
    "page": "Stopping Criterion",
    "title": "StochOptInterface.Pereira",
    "category": "type",
    "text": "mutable struct Pereira <: StochOptInterface.AbstractStoppingCriterion\n\nStop if z_UB - α * σ/√K - tol < z_LB < z_UB + α * σ/√K + tol and     σ / √K > β * max(1, |z_LB|))\n\n\n\n\n\n"
},

{
    "location": "stopcrit/#Stopping-Criterion-1",
    "page": "Stopping Criterion",
    "title": "Stopping Criterion",
    "category": "section",
    "text": "stop(s::AbstractStoppingCriterion, info::Info)\nOrStoppingCriterion\nAndStoppingCriterion\nIterLimit\nCutLimit\nPereira"
},

]}
