var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ClassImbalance.jl-1",
    "page": "Readme",
    "title": "ClassImbalance.jl",
    "category": "section",
    "text": "<table>     <tbody>         <tr>             <td>Repository status</td>             <td><a href=\"https://www.repostatus.org/#active\"><img src=\"https://www.repostatus.org/badges/latest/active.svg\" alt=\"Project Status: Active – The project has reached a stable, usable state and is being actively developed.\" /></a></td>         </tr>         <tr>             <td>Travis CI</td>             <td><a href=\"https://travis-ci.org/bcbi/ClassImbalance.jl/branches\">             <img             src=\"https://travis-ci.org/bcbi/ClassImbalance.jl.svg?branch=master\"             /></a></td>         </tr>         <tr>             <td>CodeCov</td>             <td><a             href=\"https://codecov.io/gh/bcbi/ClassImbalance.jl/branch/master\">             <img             src=\"https://codecov.io/gh/bcbi/ClassImbalance.jl/branch/master/graph/badge.svg\"             /></a></td>         </tr>     </tbody> </table>"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "This is a package that implements some sampling-based methods of correcting for class imbalance in two-category classification problems. Portions of the SMOTE and ROSE algorithm are adaptations of the excellent R packages DMwR and ROSE."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "import Pkg;\nPkg.add(\"ClassImbalance\")"
},

{
    "location": "#SMOTE-Example-1",
    "page": "Readme",
    "title": "SMOTE Example",
    "category": "section",
    "text": "import ClassImbalance;\ny = vcat(zeros(20), ones(180));\nX = hcat(rand(200, 10), y);\nX2, y2 = smote(X, y, k = 5, pct_under = 100, pct_over = 200)"
},

{
    "location": "autodocs/#ClassImbalance.classlabel",
    "page": "Docstrings",
    "title": "ClassImbalance.classlabel",
    "category": "function",
    "text": "classlabel(y)\n\nGiven a column from a DataFrames.DataFrame, this function returns the majority/minority class label.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClassImbalance.smote",
    "page": "Docstrings",
    "title": "ClassImbalance.smote",
    "category": "function",
    "text": "smote(X, y, k, under, over)\n\nThis function implements the SMOTE algorithm for generating synthetic cases to re-balance the proportion of positive and negative observations. The pct_under and pct_over parameters control the proportion of under-sampling of the majority class and the proportion of over-sampling the minority class. Note that pct_under controls undersampling by selecting pctunder/100 observations for each _newly created minority class observation. The value of k allows us determine who is considered a \"neighbor\" when generating synthetic cases.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ClassImbalance.ClassImbalanceClassImbalance.RealOrMissingClassImbalance._smoteClassImbalance.cases_neededClassImbalance.classlabelClassImbalance.column_rangesClassImbalance.dataframe_to_matrixClassImbalance.evalClassImbalance.factor_columnsClassImbalance.factor_to_floatClassImbalance.fill_diagonal!ClassImbalance.float_to_factorClassImbalance.includeClassImbalance.matrix_to_dataframeClassImbalance.ncolClassImbalance.numeric_columnsClassImbalance.pct_neededClassImbalance.roseClassImbalance.rose_realClassImbalance.rose_samplingClassImbalance.rscaleClassImbalance.smoteClassImbalance.smote_obs"
},

]}
