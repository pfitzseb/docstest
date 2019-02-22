var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ScikitLearnBase.jl-1",
    "page": "Readme",
    "title": "ScikitLearnBase.jl",
    "category": "section",
    "text": "This package exposes the scikit-learn interface. Packages that implement this interface can be used in conjunction with ScikitLearn.jl (pipelines, cross-validation, hyperparameter tuning, ...)This is an intentionally slim package (~100 LOC, no dependencies). That way, ML libraries can import ScikitLearnBase without dragging along all of ScikitLearn\'s dependencies."
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "The docs contain an overview of the API and a more thorough specification.There are two implementation strategies for an existing machine learning package:Create a new type that wraps the existing type. The new type can usually be written entirely on top of the existing codebase (i.e. without modifying it). This gives more implementation freedom, and a more consistent interface amongst the various ScikitLearn.jl models. Here\'s an example from DecisionTree.jl\nUse the existing type. This requires less code, and is usually better when the model type already contains the hyperparameters / fitting arguments."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "For models with simple hyperparameters, it boils down to this:import ScikitLearnBase\n\ntype NaiveBayes\n    # The model hyperparameters (not learned from data)\n    bias::Float64\n\n    # The parameters learned from data\n    counts::Matrix{Int}\n    \n    # A constructor that accepts the hyperparameters as keyword arguments\n    # with sensible defaults\n    NaiveBayes(; bias=0.0f0) = new(bias)\nend\n\n# This will define `clone`, `set_params!` and `get_params` for the model\nScikitLearnBase.@declare_hyperparameters(NaiveBayes, [:bias])\n\n# NaiveBayes is a classifier\nScikitLearnBase.is_classifier(::NaiveBayes) = true   # not required for transformers\n\nfunction ScikitLearnBase.fit!(model::NaiveBayes, X, y)\n    # X should be of size (n_sample, n_feature)\n    .... # modify model.counts here\n    return model\nend\n\nfunction ScikitLearnBase.predict(model::NaiveBayes, X)\n    .... # returns a vector of predicted classes here\nendModels with more complex hyperparameter specifications should implement clone, get_params and set_params! explicitly instead of using @declare_hyperparameters. More examples of PRs that implement the interface: GaussianMixtures.jl, GaussianProcesses.jl, DecisionTree.jl, LowRankModels.jlNote: if the model performs unsupervised learning, implement transform instead of predict.Once your library implements the API, file an issue/PR to add it to the list of models."
},

{
    "location": "autodocs/#ScikitLearnBase.@declare_hyperparameters",
    "page": "Docstrings",
    "title": "ScikitLearnBase.@declare_hyperparameters",
    "category": "macro",
    "text": "@declare_hyperparameters(estimator_type::Type{T}, params::Vector{Symbol})\n\nThis top-level macro helps to implement the scikit-learn protocol for simple estimators (those that do not contain other estimators). It will define set_params!, get_params and clone for ::estimator_type. It is called at the top-level. Example:\n\n@declare_hyperparameters(GaussianProcess, [:regularization_strength])\n\nEach parameter should be a field of estimator_type.\n\nMost models should call this function. The only exception are models that contain other models. They should implement get_params and set_params! manually. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ScikitLearnBase.@declare_apiScikitLearnBase.@declare_hyperparametersScikitLearnBase.BaseClassifierScikitLearnBase.BaseEstimatorScikitLearnBase.BaseRegressorScikitLearnBase.ScikitLearnBaseScikitLearnBase.apiScikitLearnBase.classifier_accuracy_scoreScikitLearnBase.cloneScikitLearnBase.clone_paramScikitLearnBase.decision_functionScikitLearnBase.declare_hyperparametersScikitLearnBase.evalScikitLearnBase.fit!ScikitLearnBase.fit_predict!ScikitLearnBase.fit_transform!ScikitLearnBase.get_classesScikitLearnBase.get_componentsScikitLearnBase.get_feature_namesScikitLearnBase.get_paramsScikitLearnBase.implements_scikitlearn_apiScikitLearnBase.includeScikitLearnBase.inverse_transformScikitLearnBase.is_classifierScikitLearnBase.is_pairwiseScikitLearnBase.mean_squared_errorScikitLearnBase.mse_scoreScikitLearnBase.partial_fit!ScikitLearnBase.predictScikitLearnBase.predict_distScikitLearnBase.predict_log_probaScikitLearnBase.predict_probaScikitLearnBase.sampleScikitLearnBase.scoreScikitLearnBase.score_samplesScikitLearnBase.set_params!ScikitLearnBase.simple_cloneScikitLearnBase.simple_get_paramsScikitLearnBase.simple_set_params!ScikitLearnBase.transformScikitLearnBase.weighted_sum"
},

]}
