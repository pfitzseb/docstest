var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LIBSVM.jl-1",
    "page": "Readme",
    "title": "LIBSVM.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)This is a Julia interface for LIBSVM.Features:Supports all LIBSVM models: classification C-SVC, nu-SVC, regression: epsilon-SVR, nu-SVR   and distribution estimation: one-class SVM\nModel objects are represented by Julia type SVM which gives you easy access to model features and can be saved e.g. as JLD file\nSupports ScikitLearn.jl API"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#LIBSVM-API-1",
    "page": "Readme",
    "title": "LIBSVM API",
    "category": "section",
    "text": "This provides a lower level API similar to LIBSVM C-interface. See ?svmtrain for options.using RDatasets, LIBSVM\n\n# Load Fisher\'s classic iris data\niris = dataset(\"datasets\", \"iris\")\n\n# LIBSVM handles multi-class data automatically using a one-against-one strategy\nlabels = convert(Vector, iris[:Species])\n\n# First dimension of input data is features; second is instances\ninstances = convert(Array, iris[:, 1:4])\'\n\n# Train SVM on half of the data using default parameters. See documentation\n# of svmtrain for options\nmodel = svmtrain(instances[:, 1:2:end], labels[1:2:end]);\n\n# Test model on the other half of the data.\n(predicted_labels, decision_values) = svmpredict(model, instances[:, 2:2:end]);\n\n# Compute accuracy\n@printf \"Accuracy: %.2f%%\\n\" mean((predicted_labels .== labels[2:2:end]))*100"
},

{
    "location": "#ScikitLearn-API-1",
    "page": "Readme",
    "title": "ScikitLearn API",
    "category": "section",
    "text": "You can alternatively use ScikitLearn.jl API with same options as svmtrain:using LIBSVM\nusing RDatasets: dataset\n\n#Classification C-SVM\niris = dataset(\"datasets\", \"iris\")\nlabels = convert(Vector, iris[:, :Species])\ninstances = convert(Array, iris[:, 1:4])\nmodel = fit!(SVC(), instances[1:2:end, :], labels[1:2:end])\nyp = predict(model, instances[2:2:end, :])\n\n#epsilon-regression\nwhiteside = RDatasets.dataset(\"MASS\", \"whiteside\")\nX = Array(whiteside[:Gas])\nif typeof(X) <: AbstractVector\n    X = reshape(X, (length(X),1))\nend\ny = Array(whiteside[:Temp])\nsvrmod = fit!(EpsilonSVR(cost = 10., gamma = 1.), X, y)\nyp = predict(svrmod, X)"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "The library is currently developed and maintained by Matti Pastell. It was originally developed by Simon Kornblith.LIBSVM by Chih-Chung Chang and Chih-Jen Lin"
},

]}
