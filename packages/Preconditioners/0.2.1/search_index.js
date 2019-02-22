var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Preconditioners-1",
    "page": "Readme",
    "title": "Preconditioners",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "\nA = sprand(1000, 1000, 0.01)\nA = A + A\' + 30I\n\n# Diagonal preconditioner\np = DiagonalPreconditioner(A)\n\n# Incomplete Cholesky preconditioner with cut-off level 2\np = CholeskyPreconditioner(A, 2)\n\n# Algebraic multigrid preconditioner (AMG)\n# Ruge-Stuben variant\np = AMGPreconditioner{RugeStuben}(A)\n# Smoothed aggregation\np = AMGPreconditioner{SmoothedAggregation}(A)\n\n# Solve the system of equations\nb = A*ones(1000)\nx = cg(A, b, Pl=p)\n\nA = sprand(1000, 1000, 0.01)\nA = A + A\' + 30I\n# Updates the preconditioner with the new matrix A\nUpdatePreconditioner!(p, A)\n"
},

{
    "location": "#Advanced-AMG-preconditioners-1",
    "page": "Readme",
    "title": "Advanced AMG preconditioners",
    "category": "section",
    "text": "More advanced AMG preconditioners are also possible by building the MultiLevel struct that AMGPreconditioner wraps yourself using the package AMG.jl."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Preconditioners.AMGPreconditioners.AMGPreconditionerPreconditioners.AbstractPreconditionerPreconditioners.CholeskyPreconditionerPreconditioners.DiagonalPreconditionerPreconditioners.EmptyCholeskyPreconditionerPreconditioners.EmptyDiagonalPreconditionerPreconditioners.LLDLPreconditioners.PreconditionersPreconditioners.RugeStubenPreconditioners.SmoothedAggregationPreconditioners.UpdatePreconditioner!Preconditioners.assert_pdPreconditioners.diag!Preconditioners.evalPreconditioners.get_dataPreconditioners.includePreconditioners.update_L!"
},

]}
