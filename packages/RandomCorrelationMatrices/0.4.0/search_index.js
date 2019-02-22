var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RandomCorrelationMatrices-1",
    "page": "Readme",
    "title": "RandomCorrelationMatrices",
    "category": "section",
    "text": "(Image: Build Status)Generate random correlation matrices, for some definition of random. Currently supports just one definition/method:Lewandowski, Daniel, Dorota Kurowicka, and Harry Joe. \"Generating random correlation matrices based on vines and extended onion method.\" Journal of multivariate analysis 100.9 (2009): 1989-2001. doi:10.1016/j.jmva.2009.04.008This package has two functions, randcormatrix(d, η) and randcovmatrix(d, η, σ) . d is the dimension, and η is a parameter that controls the distribution of the off-diagonal terms. randcovmatrix is used to generate a covariance matrix from the output of randcormatrix, where the standard deviation of each component is controlled by σ.To get a feel for how to set η, consider the following output from test/runtests.jl, which shows some example matrices and the average range of off-diagonals:η => 2\n 1.00  0.07  0.59  0.78\n 0.07  1.00  0.28 -0.03\n 0.59  0.28  1.00  0.69\n 0.78 -0.03  0.69  1.00\nmean(ranges) => 0.9609607012737842\nmedian(ranges) => 0.9522641114303307\nη => 8\n 1.00 -0.24  0.15  0.18\n-0.24  1.00 -0.10 -0.06\n 0.15 -0.10  1.00  0.02\n 0.18 -0.06  0.02  1.00\nmean(ranges) => 0.5846747844778034\nmedian(ranges) => 0.5787807331445632\nη => 32\n 1.00 -0.06  0.08 -0.11\n-0.06  1.00 -0.05  0.12\n 0.08 -0.05  1.00 -0.14\n-0.11  0.12 -0.14  1.00\nmean(ranges) => 0.3094525766085337\nmedian(ranges) => 0.3050648782864559\nη => 128\n 1.00  0.05 -0.00 -0.02\n 0.05  1.00 -0.05  0.07\n-0.00 -0.05  1.00  0.03\n-0.02  0.07  0.03  1.00\nmean(ranges) => 0.15721653854980638\nmedian(ranges) => 0.15120529987720227Pull requests welcome for additional methods of generating random correlation matrices that are described in the literature."
},

{
    "location": "autodocs/#RandomCorrelationMatrices.randcormatrix",
    "page": "Docstrings",
    "title": "RandomCorrelationMatrices.randcormatrix",
    "category": "function",
    "text": "randcormatrix(d, η)\n\nGenerate a d-by-d random correlation matrix using the method described in:\n\nLewandowski, Kurowicka, Joe\n  \"Generating random correlation matrices based on vines\n    and extended onion method\"\nJournal of Multivariate Analysis 100 (2009)\ndoi:10.1016/j.jmva.2009.04.008\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RandomCorrelationMatrices.randcovmatrix",
    "page": "Docstrings",
    "title": "RandomCorrelationMatrices.randcovmatrix",
    "category": "function",
    "text": "randcovmatrix(d, η, σ)\n\nUse randcormatrix with desired vector of standard deviations σ for each term to generate a random covariance matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RandomCorrelationMatrices.RandomCorrelationMatricesRandomCorrelationMatrices.evalRandomCorrelationMatrices.includeRandomCorrelationMatrices.randcormatrixRandomCorrelationMatrices.randcovmatrix"
},

]}
