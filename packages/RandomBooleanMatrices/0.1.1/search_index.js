var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RandomBooleanMatrices-1",
    "page": "Readme",
    "title": "RandomBooleanMatrices",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Work-In-Progress-for-a-scientific-publication-1",
    "page": "Readme",
    "title": "Work In Progress for a scientific publication",
    "category": "section",
    "text": "Create random boolean matrices that maintain row and column sums. This is a very common use case for null models in ecology.The package offers the newest and most efficient unbiased algorithms for generating random matrices. Legacy approaches have used different forms of swapping, or some alternative approaches like the quasiswap algorithm in R\'s vegan package. These methods are neither efficient, nor are they guaranteed to sample the possible distribution of boolean vectors with a given row and column sum equally.Currently, the package only offers an implementation of the curveball algorithm of Strona et al. (2014). There are two forms: a randomize_matrix! function that will randomize a sparse boolean Matrix in-place, and a generator form:using SparseArrays, RandomBooleanMatrices\n\n# in-place\nm = sprand(Bool, 1000, 1000, 0.1)\nrandomize_matrix!(m)\n\n# using a Matrix generator object\nm = sprand(Bool, 1000, 1000, 0.1)\nrmg = matrixrandomizer(m)\nm1 = rand(rmg) # creates a new random matrix\nm2 = rand(rmg)\n\n# You can also avoid copying by\nm3 = rand!(rmg)\n# but notice that this will not create a new copy of the Matrix, so generating multiple matrices at once with this is impossible"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Strona, G., Nappo, D., Boccacci, F., Fattorini, S. & San-Miguel-Ayanz, J. (2014) A fast and unbiased procedure to randomize ecological binary matrices with fixed row and column totals. Nature Communications, 5, 4114."
},

{
    "location": "autodocs/#RandomBooleanMatrices.matrixrandomizer",
    "page": "Docstrings",
    "title": "RandomBooleanMatrices.matrixrandomizer",
    "category": "function",
    "text": "matrixrandomizer(m [,rng]; method = curveball)\n\nCreate a matrix generator function that will return a random boolean matrix every time it is called, maintaining row and column sums. Non-boolean input matrix are interpreted as boolean, where values != 0 are true.\n\nExamples\n\n``` m = rand(0:4, 5, 6) rmg = matrixrandomizer(m)\n\nrandom1 = rand(rmg) random2 = rand(rmg) ``\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomBooleanMatrices.randomize_matrix!",
    "page": "Docstrings",
    "title": "RandomBooleanMatrices.randomize_matrix!",
    "category": "function",
    "text": "randomize_matrix!(m; method = curveball)\n\nRandomize the sparse boolean Matrix m while maintaining row and column sums\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RandomBooleanMatrices.MatrixGeneratorRandomBooleanMatrices.RandomBooleanMatricesRandomBooleanMatrices._curveball!RandomBooleanMatrices._interdif!RandomBooleanMatrices.curveballRandomBooleanMatrices.evalRandomBooleanMatrices.includeRandomBooleanMatrices.matrixrandomizationsRandomBooleanMatrices.matrixrandomizerRandomBooleanMatrices.randomize_matrix!RandomBooleanMatrices.showRandomBooleanMatrices.sortmerge!"
},

]}
