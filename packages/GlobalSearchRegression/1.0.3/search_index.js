var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GlobalSearchRegression-[![Build-Status](https://travis-ci.org/ParallelGSReg/GlobalSearchRegression.jl.svg?branchmaster)](https://travis-ci.org/ParallelGSReg/GlobalSearchRegression.jl)-[![](https://img.shields.io/badge/docs-latest-blue.svg)](https://parallelgsreg.github.io/GlobalSearchRegression.jl/)-1",
    "page": "Readme",
    "title": "GlobalSearchRegression (Image: Build Status) (Image: )",
    "category": "section",
    "text": ""
},

{
    "location": "#Abstract-1",
    "page": "Readme",
    "title": "Abstract",
    "category": "section",
    "text": "GlobalSearchRegression is an automatic model selection command for time series, cross-section and panel data regressions. By default (otherwise, users have many options to modify this simplest specification), gsreg performs alternative OLS regressions looking for the best depvar Data Generating Process, iterating over all possible combinations among explanatory variables"
},

{
    "location": "#Syntax-1",
    "page": "Readme",
    "title": "Syntax",
    "category": "section",
    "text": "gsreg(equation::String, data::DataFrame)\ngsreg(equation::Array{String}, data::DataFrame)\ngsreg(equation::Array{Symbol}, data::DataFrame)"
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "To perform a regression analysis:using CSV, GlobalSearchRegression\n\ndata = CSV.read(\"data.csv\")\n\nresult = gsreg(\"y x*\", data)"
},

{
    "location": "#Other-usage-methods:-1",
    "page": "Readme",
    "title": "Other usage methods:",
    "category": "section",
    "text": "# Stata like\nresult = gsreg(\"y x1 x2 x3\", data)\n\n# Stata like with comma\nresult = gsreg(\"y,x1,x2,x3\", data)\n\n# R like\nresult = gsreg(\"y ~ x1 + x2 + x3\", data)\nresult = gsreg(\"y ~ x1 + x2 + x3\", data=data)\n\n# Array of strings\nresult = gsreg([\"y\", \"x1\", \"x2\", \"x3\"], data)\n\n# Also, with wildcard\nresult = gsreg(\"y *\", data)\nresult = gsreg(\"y x*\", data)\nresult = gsreg(\"y x1 z*\", data)\nresult = gsreg(\"y ~ x*\", data)\nresult = gsreg(\"y ~ .\", data)"
},

{
    "location": "#Full-usage-options-1",
    "page": "Readme",
    "title": "Full usage options",
    "category": "section",
    "text": "using CSV, GSReg\n\ndata = CSV.read(\"data.csv\")\n\nresult = gsreg(\"y x*\", data,\n    intercept=true,\n    outsample=10,\n    criteria=[:r2adj, :bic, :aic, :aicc, :cp, :rmse, :rmseout, :sse],\n    ttest=true,\n    method=\"fast\", #precise\n    vectoroperation=true,\n    modelavg=true,\n    residualtest=false,\n    time=:date,\n    summary=false,\n    csv=\"output.csv\",\n    resultscsv=\"output.csv\",\n    orderresults=false\n)"
},

{
    "location": "#Options:-1",
    "page": "Readme",
    "title": "Options:",
    "category": "section",
    "text": "intercept::Bool, outsample::Int, criteria::Array, ttest::Bool, method{fast,precise}, vectoroperation::Bool, modelavg::Bool, residualtest::Bool, time=Symbol, summary=Bool, csv=String, resultscsv=String (alias), orderresults=Boolean(false)"
},

{
    "location": "#Parallel-1",
    "page": "Readme",
    "title": "Parallel",
    "category": "section",
    "text": "You must run julia with -p option"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "The GSReg module, which perform regression analysis, was written primarily by Demian Panigo, Valentín Mari and Adán Mauri Ungaro. The GSReg module was inpired by GSReg for Stata, written by Pablo Gluzmann and Demian Panigo."
},

{
    "location": "autodocs/#GlobalSearchRegression.export_csv",
    "page": "Docstrings",
    "title": "GlobalSearchRegression.export_csv",
    "category": "function",
    "text": "Exports main results with headers to file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GlobalSearchRegression.get_data_position",
    "page": "Docstrings",
    "title": "GlobalSearchRegression.get_data_position",
    "category": "function",
    "text": "Returns the position of the header value based on this structure.     - Index     - Covariates         * b         * bstd         * T-test     - Equation general information merged with criteria user-defined options.     - Order from user combined criteria     - Weight\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GlobalSearchRegression.get_result_header",
    "page": "Docstrings",
    "title": "GlobalSearchRegression.get_result_header",
    "category": "function",
    "text": "Constructs the header for results based in getdataposition orders.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GlobalSearchRegression.get_selected_cols",
    "page": "Docstrings",
    "title": "GlobalSearchRegression.get_selected_cols",
    "category": "function",
    "text": "Returns selected appropiate covariates for each iteration\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GlobalSearchRegression.AVAILABLE_CRITERIAGlobalSearchRegression.AVAILABLE_METHODSGlobalSearchRegression.AVAILABLE_VARIABLESGlobalSearchRegression.CRITERIA_DEFAULTGlobalSearchRegression.CRITERIA_DEFAULT_INSAMPLEGlobalSearchRegression.CRITERIA_DEFAULT_OUTSAMPLEGlobalSearchRegression.CSV_DEFAULTGlobalSearchRegression.CSV_DUPLICATED_PARAMETERSGlobalSearchRegression.DATANAMES_REQUIREDGlobalSearchRegression.DATA_NOT_DEFINEDGlobalSearchRegression.EQUATION_GENERAL_INFORMATIONGlobalSearchRegression.GSRegResultGlobalSearchRegression.GlobalSearchRegressionGlobalSearchRegression.INDEXGlobalSearchRegression.INSAMPLE_MIN_SIZEGlobalSearchRegression.INTERCEPT_DEFAULTGlobalSearchRegression.METHOD_DEFAULTGlobalSearchRegression.METHOD_INVALIDGlobalSearchRegression.MODEL_AVG_DEFAULTGlobalSearchRegression.NO_ENOUGH_OBSERVATIONSGlobalSearchRegression.ON_MESSAGE_DEFAULTGlobalSearchRegression.ORDERGlobalSearchRegression.ORDER_RESULTS_DEFAULTGlobalSearchRegression.OUTSAMPLE_DEFAULTGlobalSearchRegression.OUTSAMPLE_HIGHER_VALUEGlobalSearchRegression.OUTSAMPLE_LOWER_VALUEGlobalSearchRegression.OUTSAMPLE_MISMATCHGlobalSearchRegression.PARALLEL_DEFAULTGlobalSearchRegression.RESIDUALTEST_EXCEPTIONGlobalSearchRegression.RESIDUAL_TESTS_CROSSGlobalSearchRegression.RESIDUAL_TESTS_TIMEGlobalSearchRegression.RESIDUAL_TEST_DEFAULTGlobalSearchRegression.SELECTED_VARIABLES_DOES_NOT_EXISTSGlobalSearchRegression.SUMMARY_DEFAULTGlobalSearchRegression.TIME_DEFAULTGlobalSearchRegression.TIME_VARIABLE_INEXISTENTGlobalSearchRegression.TTEST_DEFAULTGlobalSearchRegression.VARIABLES_NOT_OR_VALID_OR_NOT_DEFINEDGlobalSearchRegression.VECTOR_OPERATION_DEFAULTGlobalSearchRegression.WEIGHTGlobalSearchRegression.WRONG_DATASET_DATATYPEGlobalSearchRegression.convert_if_is_dataframe_to_arrayGlobalSearchRegression.convert_if_is_tuple_to_arrayGlobalSearchRegression.datanames_strarr_to_symarr!GlobalSearchRegression.equation_str_to_strarrGlobalSearchRegression.equation_strarr_to_symarrGlobalSearchRegression.evalGlobalSearchRegression.export_csvGlobalSearchRegression.filter_data_valid_columnsGlobalSearchRegression.filter_rows_with_empty_valuesGlobalSearchRegression.get_data_column_posGlobalSearchRegression.get_data_positionGlobalSearchRegression.get_datanamesGlobalSearchRegression.get_result_headerGlobalSearchRegression.get_selected_colsGlobalSearchRegression.gsregGlobalSearchRegression.gsreg_proc_result!GlobalSearchRegression.gsreg_single_proc_result!GlobalSearchRegression.gsregsortrowsGlobalSearchRegression.in_vectorGlobalSearchRegression.includeGlobalSearchRegression.proc!GlobalSearchRegression.sort_data_by_timeGlobalSearchRegression.to_dictGlobalSearchRegression.to_string"
},

]}
