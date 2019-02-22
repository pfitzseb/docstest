var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LIBLINEAR-1",
    "page": "Readme",
    "title": "LIBLINEAR",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)Julia bindings for LIBLINEAR.using RDatasets, LIBLINEAR\nusing Printf, Statistics\n\n# Load Fisher\'s classic iris data\niris = dataset(\"datasets\", \"iris\")\n\n# LIBLINEAR handles multi-class data automatically using a one-against-the rest strategy\nlabels = iris[:Species]\n\n# First dimension of input data is features; second is instances\ndata = convert(Matrix, iris[:, 1:4])\'\n\n# Train SVM on half of the data using default parameters. See the linear_train\n# function in LIBLINEAR.jl for optional parameter settings.\nmodel = linear_train(labels[1:2:end], data[:, 1:2:end], verbose=true);\n\n# Test model on the other half of the data.\n(predicted_labels, decision_values) = linear_predict(model, data[:, 2:2:end]);\n\n# Compute accuracy\n@printf \"Accuracy: %.2f%%\\n\" mean((predicted_labels .== labels[2:2:end]))*100\n"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Created by Zhizhong Li.This package is adapted from the LIBSVM Julia package by Simon Kornblith."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LIBLINEAR.@cachedsymLIBLINEAR.@cachedsymzzLIBLINEAR.FeatureNodeLIBLINEAR.L1R_L2LOSS_SVCLIBLINEAR.L1R_LRLIBLINEAR.L2R_L1LOSS_SVC_DUALLIBLINEAR.L2R_L1LOSS_SVR_DUALLIBLINEAR.L2R_L2LOSS_SVCLIBLINEAR.L2R_L2LOSS_SVC_DUALLIBLINEAR.L2R_L2LOSS_SVRLIBLINEAR.L2R_L2LOSS_SVR_DUALLIBLINEAR.L2R_LRLIBLINEAR.L2R_LR_DUALLIBLINEAR.LIBLINEARLIBLINEAR.LinearModelLIBLINEAR.MCSVM_CSLIBLINEAR.ModelLIBLINEAR.ParameterLIBLINEAR.ProblemLIBLINEAR.check_parameterLIBLINEAR.evalLIBLINEAR.free_model_contentLIBLINEAR.get_liblinearLIBLINEAR.get_libzzLIBLINEAR.grp2idxLIBLINEAR.includeLIBLINEAR.indices_and_weightsLIBLINEAR.instances2nodesLIBLINEAR.linear_predictLIBLINEAR.linear_trainLIBLINEAR.predict_probabilityLIBLINEAR.predict_valuesLIBLINEAR.print_nullLIBLINEAR.set_printLIBLINEAR.set_print_string_functionLIBLINEAR.train"
},

]}
