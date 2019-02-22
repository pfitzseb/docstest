var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StandardizedMatrices-1",
    "page": "Readme",
    "title": "StandardizedMatrices",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov)Statisticians often work with standardized matrices.  If x is a data matrix with observations in rows, we want to work with z = StatsBase.zscore(x, 1).  This package defines a StandardizedMatrix type that treats a matrix as standardized without copying or changing data in place."
},

{
    "location": "#A-Motivating-Example-1",
    "page": "Readme",
    "title": "A Motivating Example",
    "category": "section",
    "text": "Suppose our original matrix is sparse and we want to perform matrix-vector multiplication with a standardized version.  Typically, standardizing a sparse matrix destroys the sparsity.using StatsBase, BenchmarkTools, StandardizedMatrices\n\n# generate some data\nn, p = 100_000, 1000\nx = sprandn(n, p, .01)\nβ = randn(p)\n\nxdense = zscore(x, 1)		# this destroys the sparsity\nz = StandardizedMatrix(x)	# this acts as standardized, but keeps sparse benefits\n\nb1 = @benchmark xdense * β\nb2 = @benchmark z * β\nratio(median(b1), median(b2))  # StandardizedMatrix is roughly 13 times faster"
},

{
    "location": "#Methods-implemented:-1",
    "page": "Readme",
    "title": "Methods implemented:",
    "category": "section",
    "text": "*()\nmul!(Y, A::StandardizedMatrix, B)"
},

{
    "location": "autodocs/#StandardizedMatrices.StandardizedMatrix",
    "page": "Docstrings",
    "title": "StandardizedMatrices.StandardizedMatrix",
    "category": "type",
    "text": "Treat a matrix as standardized, similar to z = StatsBase.zscore(x, 1), without altering the original data.\n\nz = StandardizedMatrix(x::AbstractMatrix) z = StandardizedMatrix(x::AbstractMatrix, μ::AbstractVector, σ::AbstractVector)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StandardizedMatrices.AMatStandardizedMatrices.AVecStandardizedMatrices.StandardizedMatricesStandardizedMatrices.StandardizedMatrixStandardizedMatrices.VecFStandardizedMatrices._scale!StandardizedMatrices.center!StandardizedMatrices.evalStandardizedMatrices.include"
},

]}
