var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RDatasets.jl-1",
    "page": "Readme",
    "title": "RDatasets.jl",
    "category": "section",
    "text": "NOTE: At the moment loading certain datasets can lead to significant CPU and memory overhead when using Julia v0.7.0/v1.0.0. This would be fixed in the upcoming Julia v1.0.1. (See #54 for more details)(Image: Julia 0.6 Status) (Image: Julia 0.7 Status) (Image: Julia 1.0 Status)(Image: Build Status) (Image: Coverage Status)The RDatasets package provides an easy way for Julia users to experiment with most of the standard data sets that are available in the core of R as well as datasets included with many of R\'s most popular packages. This package is essentially a simplistic port of the Rdatasets repo created by Vincent Arelbundock, who conveniently gathered data sets from many of the standard R packages in one convenient location on GitHub at https://github.com/vincentarelbundock/RdatasetsIn order to load one of the data sets included in the RDatasets package, you will need to have the DataFrames package installed. This package is automatically installed as a dependency of the RDatasets package if you install RDatasets as follows:Pkg.add(\"RDatasets\")After installing the RDatasets package, you can then load data sets using the dataset() function, which takes the name of a package and a data set as arguments:using RDatasets\niris = dataset(\"datasets\", \"iris\")\nneuro = dataset(\"boot\", \"neuro\")"
},

{
    "location": "#Data-Sets-1",
    "page": "Readme",
    "title": "Data Sets",
    "category": "section",
    "text": "The RDatasets.packages() function returns a table of represented R packages:Package Title\nCOUNT Functions, data and code for count data.\nEcdat Data sets for econometrics\nHSAUR A Handbook of Statistical Analyses Using R (1st Edition)\nHistData Data sets from the history of statistics and data visualization\nISLR Data for An Introduction to Statistical Learning with Applications in R\nKMsurv Data sets from Klein and Moeschberger (1997), Survival Analysis\nMASS Support Functions and Datasets for Venables and Ripley\'s MASS\nSASmixed Data sets from \"SAS System for Mixed Models\"\nZelig Everyone\'s Statistical Software\nadehabitatLT Analysis of Animal Movements\nboot Bootstrap Functions (Originally by Angelo Canty for S)\ncar Companion to Applied Regression\ncluster Cluster Analysis Extended Rousseeuw et al.\ndatasets The R Datasets Package\ngap Genetic analysis package\nggplot2 An Implementation of the Grammar of Graphics\nlattice Lattice Graphics\nlme4 Linear mixed-effects models using Eigen and S4\nmgcv Mixed GAM Computation Vehicle with GCV/AIC/REML smoothness estimation\nmlmRev Examples from Multilevel Modelling Software Review\nnlreg Higher Order Inference for Nonlinear Heteroscedastic Models\nplm Linear Models for Panel Data\nplyr Tools for splitting, applying and combining data\npscl Political Science Computational Laboratory, Stanford University\npsych Procedures for Psychological, Psychometric, and Personality Research\nquantreg Quantile Regression\nreshape2 Flexibly Reshape Data: A Reboot of the Reshape Package.\nrobustbase Basic Robust Statistics\nrpart Recursive Partitioning and Regression Trees\nsandwich Robust Covariance Matrix Estimators\nsem Structural Equation Models\nsurvival Survival Analysis\nvcd Visualizing Categorical DataThe RDatasets.datasets() function returns a table describing the 700+ included datasets. Or pass in a package name (e.g. RDatasets.datasets(\"mlmRev\")) for a targeted table:Package Dataset Title Rows Columns\nmlmRev Chem97 Scores on A-level Chemistry in 1997 31022 8\nmlmRev Contraception Contraceptive use in Bangladesh 1934 6\nmlmRev Early Early childhood intervention study 309 4\nmlmRev Exam Exam scores from inner London 4059 10\nmlmRev Gcsemv GCSE exam score 1905 5\nmlmRev Hsb82 High School and Beyond - 1982 7185 8\nmlmRev Mmmec Malignant melanoma deaths in Europe 354 6\nmlmRev Oxboys Heights of Boys in Oxford 234 4\nmlmRev ScotsSec Scottish secondary school scores 3435 6\nmlmRev bdf Language Scores of 8-Graders in The Netherlands 2287 28\nmlmRev egsingle US Sustaining Effects study 7230 12\nmlmRev guImmun Immunization in Guatemala 2159 13\nmlmRev guPrenat Prenatal care in Guatemala 2449 15\nmlmRev star Student Teacher Achievement Ratio (STAR) project data 26796 18"
},

{
    "location": "#Licensing-and-Intellectual-Property-1",
    "page": "Readme",
    "title": "Licensing and Intellectual Property",
    "category": "section",
    "text": "Following Vincent\'s lead, we have assumed that all of the data sets in this repository can be made available under the GPL-3 license. If you know that one of the datasets released here should not be released publicly or if you know that a data set can only be released under a different license, please contact me so that I can remove the data set from this repository."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RDatasets.@csv2_strRDatasets.@csv_strRDatasets.@tsv_strRDatasets.@wsv_strRDatasets.AbstractCategoricalArrayRDatasets.AbstractCategoricalMatrixRDatasets.AbstractCategoricalVectorRDatasets.AbstractDataFrameRDatasets.AbstractMissingCategoricalArrayRDatasets.AbstractMissingCategoricalMatrixRDatasets.AbstractMissingCategoricalVectorRDatasets.CategoricalArrayRDatasets.CategoricalArraysRDatasets.CategoricalMatrixRDatasets.CategoricalPoolRDatasets.CategoricalStringRDatasets.CategoricalValueRDatasets.CategoricalVectorRDatasets.DataFrameRDatasets.DataFrameRowRDatasets.DataFramesRDatasets.Dataset_typedetect_rowsRDatasets.GroupAppliedRDatasets.GroupedDataFrameRDatasets.LevelsExceptionRDatasets.MissingRDatasets.MissingCategoricalArrayRDatasets.MissingCategoricalMatrixRDatasets.MissingCategoricalVectorRDatasets.MissingExceptionRDatasets.MissingsRDatasets.OrderedLevelsExceptionRDatasets.RDatasetsRDatasets.SubDataFrameRDatasets.__datasetsRDatasets.__packagesRDatasets.aggregateRDatasets.allowmissingRDatasets.allowmissing!RDatasets.byRDatasets.categoricalRDatasets.categorical!RDatasets.coalesceRDatasets.colwiseRDatasets.combineRDatasets.compactRDatasets.complete_casesRDatasets.complete_cases!RDatasets.completecasesRDatasets.compressRDatasets.convertRDatasets.cutRDatasets.datasetRDatasets.datasetsRDatasets.decompressRDatasets.delete!RDatasets.deletecols!RDatasets.deleterows!RDatasets.describeRDatasets.disallowmissingRDatasets.disallowmissing!RDatasets.droplevels!RDatasets.dropmissingRDatasets.dropmissing!RDatasets.eltypesRDatasets.evalRDatasets.groupbyRDatasets.groupindicesRDatasets.groupvarsRDatasets.headRDatasets.includeRDatasets.insert!RDatasets.insertcols!RDatasets.ismissingRDatasets.isorderedRDatasets.keysRDatasets.lengthRDatasets.levelsRDatasets.levels!RDatasets.mapRDatasets.mapcolsRDatasets.meltRDatasets.meltdfRDatasets.merge!RDatasets.missingRDatasets.missingsRDatasets.names!RDatasets.ncolRDatasets.nonuniqueRDatasets.nrowRDatasets.nullable!RDatasets.orderRDatasets.orderedRDatasets.ordered!RDatasets.packagesRDatasets.passmissingRDatasets.permutecols!RDatasets.poolRDatasets.pool!RDatasets.readtableRDatasets.recodeRDatasets.recode!RDatasets.renameRDatasets.rename!RDatasets.setindex!RDatasets.showRDatasets.showallRDatasets.showcolsRDatasets.stackRDatasets.stackdfRDatasets.subRDatasets.tailRDatasets.uncompactRDatasets.unique!RDatasets.unstackRDatasets.valuesRDatasets.vcatRDatasets.writetable"
},

]}
