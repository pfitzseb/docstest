var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SweepOperator-1",
    "page": "Readme",
    "title": "SweepOperator",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io) (Image: SweepOperator)The symmetric sweep operator is a powerful tool in computational statistics with uses in(stepwise) linear regression\nconditional multivariate normal distributions\nMANOVA\nand more"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"SweepOperator\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "sweep!(A, k)For matrix A and integer k, perform the symmetric sweep in place on A.  Only the upper triangle is read and swept.  The inverse sweep is performed with sweep!(A, k, true).sweep!(A, range)Sweep over every index in range."
},

{
    "location": "#Details-on-Symmetric-Sweeping:-1",
    "page": "Readme",
    "title": "Details on Symmetric Sweeping:",
    "category": "section",
    "text": "Thank you to great notes provided by @Hua-Zhou(Image: )(Image: )"
},

{
    "location": "autodocs/#SweepOperator.sweep!",
    "page": "Docstrings",
    "title": "SweepOperator.sweep!",
    "category": "function",
    "text": "Symmetric sweep operator\n\nSymmetric sweep operator of the matrix A on element k.  A is overwritten. inv = true will perform the inverse sweep.  Only the upper triangle is read and swept.\n\nsweep!(A, k, inv = false)\n\nProviding a Range, rather than an Integer, sweeps on each element in the range.\n\nsweep!(A, first:last, inv = false)\n\nExample:\n\nx = randn(100, 10)\nxtx = x\'x\nsweep!(xtx, 1)\nsweep!(xtx, 1, true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SweepOperator.AMatSweepOperator.AVecSweepOperator.SweepOperatorSweepOperator.evalSweepOperator.includeSweepOperator.sweep!SweepOperator.sweep_with_buffer!"
},

]}
