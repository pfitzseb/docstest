var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MLDataUtils-1",
    "page": "Readme",
    "title": "MLDataUtils",
    "category": "section",
    "text": "Utility package for generating, loading, partitioning, and processing Machine Learning datasets. This package serves as a end-user friendly front end to the data related JuliaML packages.Package Status Package Evaluator Build Status\n(Image: License) (Image: Documentation Status) (Image: MLDataUtils) (Image: MLDataUtils) (Image: Build Status) (Image: App Veyor) (Image: Coverage Status)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package is designed to be the end-user facing frond-end to all the data related functionalty that is spread out accross the JuliaML ecosystem. Most of the following sub-categories are covered by a single back-end package that is specialized on that specific problem. Consequently, if one of the following topics is of special interest to you, make sure to check out the corresponding documentation of that package.Label Encodings provided by   MLLabelUtils.jl\n(Image: Documentation Status) (Image: MLLabelUtils 0.5) (Image: MLLabelUtils 0.6)\nVarious tools needed to deal with classification targets of   arbitrary format. This includes asserting if the targets are   of a desired encoding, inferring the concrete encoding the   targets are in and how many classes they represent, and   converting from their native encoding to the desired one.\n[docs] Infer which encoding some classification targets use.\njulia> enc = labelenc([-1,1,1,-1,1])\n# MLLabelUtils.LabelEnc.MarginBased{Int64}()\n[docs] Assert if some classification targets are of the encoding I need them in.\njulia> islabelenc([0,1,1,0,1], LabelEnc.MarginBased)\n# false\n[docs] Convert targets into a specific encoding that my model requires.\njulia> convertlabel(LabelEnc.OneOfK{Float32}, [-1,1,-1,1,1,-1])\n# 2×6 Array{Float32,2}:\n#  0.0  1.0  0.0  1.0  1.0  0.0\n#  1.0  0.0  1.0  0.0  0.0  1.0\n[docs] Work with matrices in which the user can choose of the rows or the columns denote the observations.\njulia> convertlabel(LabelEnc.OneOfK{Float32}, Int8[-1,1,-1,1,1,-1], obsdim = 1)\n# 6×2 Array{Float32,2}:\n#  0.0  1.0\n#  1.0  0.0\n#  0.0  1.0\n#  1.0  0.0\n#  1.0  0.0\n#  0.0  1.0\n[docs] Group observations according to their class-label.\njulia> labelmap([0, 1, 1, 0, 0])\n# Dict{Int64,Array{Int64,1}} with 2 entries:\n#   0 => [1,4,5]\n#   1 => [2,3]\n[docs] Classify model predictions into class labels appropriate for the encoding of the targets.\njulia> classify(-0.3, LabelEnc.MarginBased())\n# -1.0\nData Access Pattern provided by   MLDataPattern.jl\n(Image: Documentation Status) (Image: MLDataPattern 0.5) (Image: MLDataPattern 0.6)\nNative and generic Julia implementation for commonly used   data access pattern in Machine Learning. Most notably we   provide a number of pattern for shuffling, partitioning, and   resampling data sets of various types and origin. At its   core, the package was designed around the key requirement of   allowing any user-defined type to serve as a custom data   source and/or access pattern in a first class manner. That   said, there was also a lot of attention focused on first   class support for those types that are most commonly employed   to represent the data of interest, such as DataFrame and   Array.\n[docs] Create a lazy data subset of some data.\njulia> X = rand(2, 6)\n# 2×6 Array{Float64,2}:\n#  0.226582  0.933372  0.505208   0.0443222  0.812814  0.11202\n#  0.504629  0.522172  0.0997825  0.722906   0.245457  0.000341996\n\njulia> datasubset(X, 2:3)\n# 2×2 SubArray{Float64,2,Array{Float64,2},Tuple{Colon,UnitRange{Int64}},true}:\n#  0.933372  0.505208\n#  0.522172  0.0997825\n[docs] Shuffle the observations of a data container.\njulia> shuffleobs(X)\n# 2×6 SubArray{Float64,2,Array{Float64,2},Tuple{Colon,Array{Int64,1}},false}:\n#  0.505208   0.812814  0.11202      0.0443222  0.933372  0.226582\n#  0.0997825  0.245457  0.000341996  0.722906   0.522172  0.504629\n[docs] Split data into train/test subsets.\njulia> train, test = splitobs(X, at = 0.7);\n\njulia> train\n# 2×4 SubArray{Float64,2,Array{Float64,2},Tuple{Colon,UnitRange{Int64}},true}:\n#  0.226582  0.933372  0.505208   0.0443222\n#  0.504629  0.522172  0.0997825  0.722906\n\njulia> test\n# 2×2 SubArray{Float64,2,Array{Float64,2},Tuple{Colon,UnitRange{Int64}},true}:\n#  0.812814  0.11202\n#  0.245457  0.000341996\n[docs] Partition data into train/test subsets using stratified sampling.\njulia> train, test = stratifiedobs([:a,:a,:b,:b,:b,:b], p = 0.5)\n# (Symbol[:b,:b,:a],Symbol[:b,:b,:a])\n\njulia> train\n# 3-element SubArray{Symbol,1,Array{Symbol,1},Tuple{Array{Int64,1}},false}:\n# :b\n# :b\n# :a\n\njulia> test\n# 3-element SubArray{Symbol,1,Array{Symbol,1},Tuple{Array{Int64,1}},false}:\n# :b\n# :b\n# :a\n[docs] Group multiple variables together and treat them as a single data set.\njulia> shuffleobs(([1,2,3], [:a,:b,:c]))\n([3,1,2],Symbol[:c,:a,:b])\n[docs] Support my own custom user-defined data container type.\njulia> using DataTables, LearnBase\n\njulia> LearnBase.nobs(dt::AbstractDataTable) = nrow(dt)\n\njulia> LearnBase.getobs(dt::AbstractDataTable, idx) = dt[idx,:]\n\njulia> LearnBase.datasubset(dt::AbstractDataTable, idx, ::ObsDim.Undefined) = view(dt, idx)\n[docs] Over- or undersample an imbalanced labeled data set.\njulia> undersample([:a,:b,:b,:a,:b,:b])\n# 4-element SubArray{Symbol,1,Array{Symbol,1},Tuple{Array{Int64,1}},false}:\n#  :a\n#  :b\n#  :b\n#  :a\n[docs] Repartition a data container using a k-folds scheme.\njulia> folds = kfolds([1,2,3,4,5,6,7,8,9,10], k = 5)\n# 5-fold MLDataPattern.FoldsView of 10 observations:\n#   data: 10-element Array{Int64,1}\n#   training: 8 observations/fold\n#   validation: 2 observations/fold\n#   obsdim: :last\n\njulia> folds[1]\n# ([3, 4, 5, 6, 7, 8, 9, 10], [1, 2])\n[docs] Iterate over my data one observation or batch at a time.\njulia> obsview(([1 2 3; 4 5 6], [:a, :b, :c]))\n# 3-element MLDataPattern.ObsView{Tuple{SubArray{Int64,1,Array{Int64,2},Tuple{Colon,Int64},true},SubArray{Symbol,0,Array{Symbol,1},Tuple{Int64},false}},Tuple{Array{Int64,2},Array{Symbol,1}},Tuple{LearnBase.ObsDim.Last,LearnBase.ObsDim.Last}}:\n#  ([1,4],:a)\n#  ([2,5],:b)\n#  ([3,6],:c)\n[docs] Prepare sequence data such as text for supervised learning.\njulia> txt = split(\"The quick brown fox jumps over the lazy dog\")\n# 9-element Array{SubString{String},1}:\n# \"The\"\n# \"quick\"\n# \"brown\"\n# ⋮\n# \"the\"\n# \"lazy\"\n# \"dog\"\n\njulia> seq = slidingwindow(i->i+2, txt, 2, stride=1)\n# 7-element slidingwindow(::##9#10, ::Array{SubString{String},1}, 2, stride = 1) with element type Tuple{...}:\n# ([\"The\", \"quick\"], \"brown\")\n# ([\"quick\", \"brown\"], \"fox\")\n# ([\"brown\", \"fox\"], \"jumps\")\n# ([\"fox\", \"jumps\"], \"over\")\n# ([\"jumps\", \"over\"], \"the\")\n# ([\"over\", \"the\"], \"lazy\")\n# ([\"the\", \"lazy\"], \"dog\")\n\njulia> seq = slidingwindow(i->[i-2:i-1; i+1:i+2], txt, 1)\n# 5-element slidingwindow(::##11#12, ::Array{SubString{String},1}, 1) with element type Tuple{...}:\n# ([\"brown\"], [\"The\", \"quick\", \"fox\", \"jumps\"])\n# ([\"fox\"], [\"quick\", \"brown\", \"jumps\", \"over\"])\n# ([\"jumps\"], [\"brown\", \"fox\", \"over\", \"the\"])\n# ([\"over\"], [\"fox\", \"jumps\", \"the\", \"lazy\"])\n# ([\"the\"], [\"jumps\", \"over\", \"lazy\", \"dog\"])\nData Processing:   This package contains a number of simple pre-processing   strategies that are often applied for ML purposes, such as   feature centering and rescaling.\nData Generators:   When studying learning algorithm or other ML related   functionality, it is usually of high interest to empirically   test the behaviour of the system under specific conditions.   Generators can provide the means to fabricate artificial data   sets that observe certain attributes, which can help to   deepen the understanding of the system under investigation.\nExample Datasets:   We provide a small number of toy datasets. These are mainly   intended for didactic and testing purposes."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Check out the latest documentationAdditionally, you can make use of Julia\'s native docsystem. The following example shows how to get additional information on kfolds within Julia\'s REPL:?kfolds"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered in METADATA.jl and can be installed as usual. Just start up Julia and type the following code-snipped into the REPL. It makes use of the native Julia package manger.import Pkg\nPkg.add(\"MLDataUtils\")"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code is free to use under the terms of the MIT license"
},

{
    "location": "autodocs/#MLDataUtils.center!",
    "page": "Docstrings",
    "title": "MLDataUtils.center!",
    "category": "function",
    "text": "μ = center!(X[, μ, obsdim])\n\nor\n\nμ = center!(D[, colnames, μ])\n\nwhere X is of type Matrix or Vector and D of type DataFrame.\n\nCenter X along obsdim around the corresponding entry in the vector μ. If μ is not specified then it defaults to the feature specific means.\n\nFor DataFrames, obsdim is obsolete and centering is done column wise. Instead the vector colnames allows to specify which columns to center. If colnames is not provided all columns of type T<:Real are centered.\n\nExample:\n\nX = rand(4, 100)\nD = DataFrame(A=rand(10), B=collect(1:10), C=[string(x) for x in 1:10])\n\nμ = center!(X, obsdim=2)\nμ = center!(X, ObsDim.First())\nμ = center!(D)\nμ = center!(D, [:A, :B])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.expand_poly",
    "page": "Docstrings",
    "title": "MLDataUtils.expand_poly",
    "category": "function",
    "text": "X = DataUtils.expand_poly(x; degree = 5)\n\nPerforms a polynomial basis expansion of the given degree for the vector x. The return value X is a matrix of size (degree, length(x)).\n\nNote: all the features of X are centered and rescaled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.load_iris",
    "page": "Docstrings",
    "title": "MLDataUtils.load_iris",
    "category": "function",
    "text": "X, y, vars = load_iris(n)\n\nLoads the first n (of 150) observations from the Iris flower data set introduced by Ronald Fisher (1936). The 4 by n matrix X contains the numeric measurements, in which each individual column denotes an observation. The vector y contains the class labels as strings. The optional vector vars contains the names of the features (i.e. rows of X)\n\n[1] Fisher, Ronald A. \"The use of multiple measurements in taxonomic problems.\" Annals of eugenics 7.2 (1936): 179-188.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.load_line",
    "page": "Docstrings",
    "title": "MLDataUtils.load_line",
    "category": "function",
    "text": "x, y, vars = load_line()\n\nLoads an artificial example dataset for a noisy line. It is particularly useful to explain under- and overfitting. The vector x contains 11 equally spaced points between 0 and 1 The vector y contains x ./ 2 + 1 plus some gaussian noise The optional vector vars contains descriptive names for x and y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.load_poly",
    "page": "Docstrings",
    "title": "MLDataUtils.load_poly",
    "category": "function",
    "text": "x, y, vars = load_poly()\n\nLoads an artificial example dataset for a noisy quadratic function. It is particularly useful to explain under- and overfitting. The vector x contains 50 points between 0 and 4 The vector y contains 2.6 * x^2 + .8 * x plus some gaussian noise The optional vector vars contains descriptive names for x and y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.load_sin",
    "page": "Docstrings",
    "title": "MLDataUtils.load_sin",
    "category": "function",
    "text": "x, y, vars = load_sin()\n\nLoads an artificial example dataset for a noisy sin. It is particularly useful to explain under- and overfitting. The vector x contains equally spaced points between 0 and 2π The vector y contains sin(x) plus some gaussian noise The optional vector vars contains descriptive names for x and y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.load_spiral",
    "page": "Docstrings",
    "title": "MLDataUtils.load_spiral",
    "category": "function",
    "text": "x, y, vars = load_spiral()`\n\nLoads an artificial example dataset for a noisy spiral function. It is particularly useful to explain representation learning and nonlinearity. The matrix x contains 194 points between 0 and 6.5 lying on the spiral. The vector y contains the corresponding labels, i.e \"ones\" or \"zeros\". The optional vector vars contains descriptive names for x and y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.noisy_function",
    "page": "Docstrings",
    "title": "MLDataUtils.noisy_function",
    "category": "function",
    "text": "x, y = noisy_function(fun, x; noise = 0.01, f_rand = randn)\n\nGenerates a noisy response y for the given function fun by adding noise .* f_randn(length(x)) to the result of fun(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.noisy_poly",
    "page": "Docstrings",
    "title": "MLDataUtils.noisy_poly",
    "category": "function",
    "text": "x, y = noisy_poly(coef, x; noise = 0.01, f_rand = randn)\n\nGenerates a noisy response for a polynomial of degree length(coef) using the vector x as input and adding noise .* f_randn(length(x)) to the result. The vector coef contains the coefficients for the terms of the polynome. The first element of coef denotes the coefficient for the term with the highest degree, while the last element of coef denotes the intercept.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.noisy_sin",
    "page": "Docstrings",
    "title": "MLDataUtils.noisy_sin",
    "category": "function",
    "text": "x, y = noisy_sin(n, start, stop; noise = 0.3, f_rand = randn)\n\nGenerates n noisy equally spaces samples of a sinus from start to stop by adding noise .* f_randn(length(x)) to the result of fun(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.noisy_spiral",
    "page": "Docstrings",
    "title": "MLDataUtils.noisy_spiral",
    "category": "function",
    "text": "x, y = noisy_spiral(n, a, theta, b; noise = 0.01, f_rand = randn)\n\nGenerates n noisy responses for a spiral with two labels. Uses the radius, angle and scaling arguments to space the points in 2D space and adding noise .* f_randn(n) to the response.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLDataUtils.rescale!",
    "page": "Docstrings",
    "title": "MLDataUtils.rescale!",
    "category": "function",
    "text": "μ, σ = rescale!(X[, μ, σ, obsdim])\n\nor\n\nμ, σ = rescale!(D[, colnames, μ, σ])\n\nwhere X is of type Matrix or Vector and D of type DataFrame.\n\nCenter X along obsdim around the corresponding entry in the vector μ and then rescale each feature using the corresponding entry in the vector σ.\n\nFor DataFrames, obsdim is obsolete and centering is done column wise. The vector colnames allows to specify which columns to center. If colnames is not provided all columns of type T<:Real are centered.\n\nExample:\n\nX = rand(4, 100)\nD = DataFrame(A=rand(10), B=collect(1:10), C=[string(x) for x in 1:10])\n\nμ, σ = rescale!(X, obsdim=2)\nμ, σ = rescale!(X, ObsDim.First())\nμ, σ = rescale!(D)\nμ, σ = rescale!(D, [:A, :B])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MLDataUtils.BalancedObsMLDataUtils.BatchViewMLDataUtils.BufferGetObsMLDataUtils.DataSubsetMLDataUtils.FeatureNormalizerMLDataUtils.FoldsViewMLDataUtils.LabelEncMLDataUtils.MLDataUtilsMLDataUtils.ObsDimMLDataUtils.ObsViewMLDataUtils.RandomBatchesMLDataUtils.RandomObsMLDataUtils.SlidingWindowMLDataUtils._throw_table_errorMLDataUtils.batchsizeMLDataUtils.batchviewMLDataUtils.center!MLDataUtils.classifyMLDataUtils.classify!MLDataUtils.convertlabelMLDataUtils.convertlabelviewMLDataUtils.datasubsetMLDataUtils.downsampleMLDataUtils.eachbatchMLDataUtils.eachobsMLDataUtils.eachtargetMLDataUtils.evalMLDataUtils.expand_polyMLDataUtils.fitMLDataUtils.getobsMLDataUtils.getobs!MLDataUtils.includeMLDataUtils.ind2labelMLDataUtils.islabelencMLDataUtils.isneglabelMLDataUtils.isposlabelMLDataUtils.kfoldsMLDataUtils.labelMLDataUtils.label2indMLDataUtils.labelencMLDataUtils.labelfreqMLDataUtils.labelfreq!MLDataUtils.labelmapMLDataUtils.labelmap!MLDataUtils.labelmap2vecMLDataUtils.labeltypeMLDataUtils.leaveoutMLDataUtils.load_irisMLDataUtils.load_lineMLDataUtils.load_polyMLDataUtils.load_sinMLDataUtils.load_spiralMLDataUtils.neglabelMLDataUtils.nlabelMLDataUtils.nobsMLDataUtils.noisy_functionMLDataUtils.noisy_polyMLDataUtils.noisy_sinMLDataUtils.noisy_spiralMLDataUtils.obsviewMLDataUtils.oversampleMLDataUtils.poslabelMLDataUtils.predictMLDataUtils.predict!MLDataUtils.randobsMLDataUtils.rescale!MLDataUtils.shuffleobsMLDataUtils.slidingwindowMLDataUtils.splitobsMLDataUtils.stratifiedobsMLDataUtils.targetsMLDataUtils.undersampleMLDataUtils.upsample"
},

]}
