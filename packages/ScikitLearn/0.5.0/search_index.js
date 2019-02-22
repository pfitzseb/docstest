var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<a href=\"./examples/ClassifierComparisonJulia.ipynb\"><img src=\"./docs/exampleimages/ClassifierComparisonJulia.png\" alt=\"# Classifier Comparison (Julia classifiers)\" width=\"170\"> </a>  <a href=\"./examples/ClusteringComparison.ipynb\"><img src=\"./docs/exampleimages/ClusteringComparison.png\" alt=\"# Comparing different clustering algorithms on toy datasets\" width=\"170\"> </a>  <a href=\"./examples/DensityEstimationJulia.ipynb\"><img src=\"./docs/exampleimages/DensityEstimationJulia.png\" alt=\"# Density Estimation for a mixture of Gaussians (using GaussianMixtures.jl)\" width=\"170\"> </a>  <a href=\"./examples/OutlierDetection.ipynb\"><img src=\"./docs/exampleimages/OutlierDetection.png\" alt=\"# Outlier detection with several methods\" width=\"170\"> </a>  <a href=\"./examples/PlotKmeansDigits.ipynb\"><img src=\"./docs/exampleimages/PlotKmeansDigits.png\" alt=\"# A demo of K-Means clustering on the handwritten digits data\" width=\"170\"> </a>  <a href=\"./examples/RBM.ipynb\"><img src=\"./docs/exampleimages/RBM.png\" alt=\"# Restricted Boltzmann Machine features for digit classification\" width=\"170\"> </a>  <a href=\"./examples/Simple1DKernelDensity.ipynb\"><img src=\"./docs/exampleimages/Simple1DKernelDensity.png\" alt=\"# Simple 1D Kernel Density Estimation\" width=\"170\"> </a>  <a href=\"./examples/TextFeatureExtraction.ipynb\"><img src=\"./docs/exampleimages/Textimage.png\" alt=\"# Sample pipeline for text feature extraction and evaluation\" width=\"170\"> </a>  <a href=\"./examples/TwoClassAdaboost.ipynb\"><img src=\"./docs/exampleimages/TwoClassAdaboost.png\" alt=\"# Two Class Adaboost\" width=\"170\"> </a>  <a href=\"./examples/UnderfittingvsOverfitting.ipynb\"><img src=\"./docs/exampleimages/Underfittingvs_Overfitting.png\" alt=\"# Underfitting vs. Overfitting\" width=\"170\"> </a> "
},

{
    "location": "#ScikitLearn.jl-1",
    "page": "Readme",
    "title": "ScikitLearn.jl",
    "category": "section",
    "text": "(Image: Documentation Status)ScikitLearn.jl implements the popular scikit-learn interface and algorithms in Julia. It supports both models from the Julia ecosystem and those of the scikit-learn library (via PyCall.jl).Disclaimer: ScikitLearn.jl borrows code and documentation from scikit-learn, but it is not an official part of that project. It is licensed under BSD-3.Main features:Around 150 Julia and Python models accessed through a uniform interface\nPipelines and FeatureUnions\nCross-validation\nHyperparameter tuning\nDataFrames supportCheck out the Quick-Start Guide for a tour."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install ScikitLearn.jl, run Pkg.add(\"ScikitLearn\") at the REPL.To import Python models (optional), ScikitLearn.jl requires the scikit-learn Python library, which will be installed automatically when needed. Most of the examples use PyPlot.jl"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "See the manual and example gallery."
},

{
    "location": "#Goal-1",
    "page": "Readme",
    "title": "Goal",
    "category": "section",
    "text": "ScikitLearn.jl aims for feature parity with scikit-learn. If you encounter any problem that is solved by that library but not this one, file an issue."
},

{
    "location": "autodocs/#ScikitLearn.@reexportsk",
    "page": "Docstrings",
    "title": "ScikitLearn.@reexportsk",
    "category": "macro",
    "text": "@reexportsk(identifiers...)\n\nis equivalent to     using Skcore: identifiers...     export identifiers...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearn.Skcore.@sk_import",
    "page": "Docstrings",
    "title": "ScikitLearn.Skcore.@sk_import",
    "category": "macro",
    "text": "@skimport imports models from the Python version of scikit-learn. For instance, the Julia equivalent of `from sklearn.linearmodel import LinearRegression, LogicisticRegression` is:\n\n@sk_import linear_model: (LinearRegression, LogisticRegression)\nmodel = fit!(LinearRegression(), X, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearn.DataFrameColSelector",
    "page": "Docstrings",
    "title": "ScikitLearn.DataFrameColSelector",
    "category": "type",
    "text": "DataFrameColSelector(colums::Vector{Symbol}; output_type=Matrix{Float64}\n\nThis is a pared-down, less featureful version of DataFrameMapper, but it also runs faster. It only allows selecting columns from the input DataFrame. Use in a pipeline. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearn.DataFrameMapper",
    "page": "Docstrings",
    "title": "ScikitLearn.DataFrameMapper",
    "category": "type",
    "text": "DataFrameMapper(features; sparse=false, missing2NaN=false,\n                output_type=Matrix{Float64})\n\nMap DataFrame column subsets to their own scikit-learn transformation.\n\nArguments:\n\nfeatures:    a vector of pairs. The first element is the column name.                  This can be a symbol (for one column) or a vector                  of symbols. The second element is an object that supports                  sklearn\'s transform interface, or a vector of such objects.\nsparse       will return sparse matrix if set to true and any of the                  extracted features is sparse. Defaults to False.\nmissing2NaN  will convert missing values to NaNs (necessary for Python                  models)\noutput_type: the type of the result (default: Matrix{Float64})\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearn._get_col_subset",
    "page": "Docstrings",
    "title": "ScikitLearn._get_col_subset",
    "category": "function",
    "text": "Get a subset of columns from the given table X. X       a dataframe; the table to select columns from cols    a symbol or vector of symbols representing the columns         to select Returns a matrix with the data from the selected columns\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearn._handle_feature",
    "page": "Docstrings",
    "title": "ScikitLearn._handle_feature",
    "category": "function",
    "text": "Convert a vector to a matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearnBase.decision_function",
    "page": "Docstrings",
    "title": "ScikitLearnBase.decision_function",
    "category": "function",
    "text": "Applies transforms to the data, and the decisionfunction method of the final estimator. Valid only if the final estimator implements decisionfunction.\n\nParameters\n\nX : iterable     Data to predict on. Must fulfill input requirements of first step of     the pipeline.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearnBase.fit!",
    "page": "Docstrings",
    "title": "ScikitLearnBase.fit!",
    "category": "function",
    "text": "Fit all transformers using X.\n\nParameters\n\nX : array-like or sparse matrix, shape (nsamples, nfeatures)     Input data, used to fit transformers.\n\n\n\n\n\nRun fit with all sets of parameters.\n\nParameters\n\nX : array-like, shape = [nsamples, nfeatures]     Training vector, where nsamples is the number of samples and     nfeatures is the number of features.\n\ny : array-like, shape = [nsamples] or [nsamples, n_output], optional     Target relative to X for classification or regression;     None for unsupervised learning.\n\n\n\n\n\nRun fit on the estimator with randomly drawn parameters.\n\nParameters\n\nX : array-like, shape = [nsamples, nfeatures]     Training vector, where nsamples in the number of samples and     nfeatures is the number of features.\n\ny : array-like, shape = [nsamples] or [nsamples, n_output], optional     Target relative to X for classification or regression;     None for unsupervised learning.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearnBase.get_feature_names",
    "page": "Docstrings",
    "title": "ScikitLearnBase.get_feature_names",
    "category": "function",
    "text": "Get feature names from all transformers.\n\nReturns\n\nfeature_names : list of strings     Names of the features produced by transform.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearnBase.inverse_transform",
    "page": "Docstrings",
    "title": "ScikitLearnBase.inverse_transform",
    "category": "function",
    "text": "Applies inverse transform to the data. Starts with the last step of the pipeline and applies inverse_transform in inverse order of the pipeline steps. Valid only if all steps of the pipeline implement inverse_transform.\n\nParameters\n\nX : iterable     Data to inverse transform. Must fulfill output requirements of the     last step of the pipeline.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearnBase.score",
    "page": "Docstrings",
    "title": "ScikitLearnBase.score",
    "category": "function",
    "text": "Applies transforms to the data, and the score method of the final estimator. Valid only if the final estimator implements score.\n\nParameters\n\nX : iterable     Data to score. Must fulfill input requirements of first step of the     pipeline.\n\ny : iterable, default=None     Targets used for scoring. Must fulfill label requirements for all steps of     the pipeline.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ScikitLearnBase.transform",
    "page": "Docstrings",
    "title": "ScikitLearnBase.transform",
    "category": "function",
    "text": "Transform X separately by each transformer, concatenate results.\n\nParameters\n\nX : array-like or sparse matrix, shape (nsamples, nfeatures)     Input data to be transformed.\n\nReturns\n\nXt : array-like or sparse matrix, shape (nsamples, sumncomponents)     hstack of results of transformers. sumncomponents is the     sum of n_components (output dimension) over transformers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ScikitLearn.@reexportskScikitLearn.@sk_importScikitLearn.CrossValidationScikitLearn.DataFrameColSelectorScikitLearn.DataFrameMapperScikitLearn.GridSearchScikitLearn.ModelsScikitLearn.PipelinesScikitLearn.PreprocessingScikitLearn.ScikitLearnScikitLearn.SkcoreScikitLearn.UtilsScikitLearn._build_transformerScikitLearn._get_col_subsetScikitLearn._handle_featureScikitLearn._maybe_convert_missingScikitLearn._transformScikitLearn.cloneScikitLearn.decision_functionScikitLearn.dummy_inputScikitLearn.evalScikitLearn.fit!ScikitLearn.fit_predict!ScikitLearn.fit_transform!ScikitLearn.get_classesScikitLearn.get_componentsScikitLearn.get_feature_namesScikitLearn.get_paramsScikitLearn.includeScikitLearn.inverse_transformScikitLearn.is_classifierScikitLearn.is_pairwiseScikitLearn.partial_fit!ScikitLearn.predictScikitLearn.predict_distScikitLearn.predict_log_probaScikitLearn.predict_probaScikitLearn.sampleScikitLearn.scoreScikitLearn.score_samplesScikitLearn.set_params!ScikitLearn.transform"
},

]}
