var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MLLabelUtils-1",
    "page": "Readme",
    "title": "MLLabelUtils",
    "category": "section",
    "text": "Utility package for working with classification targets. As such, this package provides the necessary functionality for interpreting class-predictions, as well as converting classification targets from one encoding to another.Package Status Package Evaluator Build Status\n(Image: License) (Image: Documentation Status) (Image: MLLabelUtils 0.6) (Image: MLLabelUtils 0.7) (Image: Build Status) (Image: Build status) (Image: Coverage Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "In a classification setting, one usually treats the desired output variable (also called ground truths, or targets) as a discrete categorical variable. That is true even if the values themself are of numerical type, which they often are for practical reasons.In fact, it is a common requirement in Machine Learning related experiments to encode the classification targets of some supervised dataset in a very specific way. There are multiple conventions that all have their own merits and reasons to exist. Some models, such as the probabilistic version of logistic regression, require the targets in the form of numbers in the set {1,0}. On the other hand, margin-based classifier, such as SVMs, expect the targets to be in the set {1,−1}.This package provides the functionality needed to deal will these different scenarios in an efficient, consistent, and convenient manner. In particular, this library is designed with package developers in mind, that require their classification-targets to be in a specific format. To that end, the core focus of this package is to provide all the tools needed to deal with classification targets of arbitrary format. This includes asserting if the targets are of a desired encoding, inferring the concrete encoding the targets are in and how many classes they represent, and converting from their native encoding to the desired one."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "The following code snippets show a simple \"hello world\" scenario of how this package can be used to work with classification targets.using MLLabelUtilsWe can automatically derive the used encoding from the targets using labelenc. This function looks at all elements and tries to determine which specific encoding best describes the target array.julia> true_targets = Int8[0, 1, 0, 1, 1];\n\njulia> le = labelenc(true_targets)\n# MLLabelUtils.LabelEnc.ZeroOne{Int8,Float64}(0.5)To just determine if a specific encoding is approriate one can use the function islabelenc.julia> islabelenc(true_targets, LabelEnc.ZeroOne)\n# true\n\njulia> islabelenc(true_targets, LabelEnc.MarginBased)\n# falseFurthermore we can compute a label map, which computes the indices of all elements that belong to each class. This information is useful for resampling strategies, such as stratified samplingjulia> true_targets = [:yes,:no,:maybe,:yes];\n\njulia> labelmap(true_targets)\n# Dict{Symbol,Array{Int64,1}} with 3 entries:\n#   :yes   => [1,4]\n#   :maybe => [3]\n#   :no    => [2]If need be we can convert to other encodings. Note that unless explicitly specified, we try to preserve the eltype of the input. However, this behaviour only comes to play in the case of numbers.julia> true_targets = Int8[0, 1, 0, 1, 1];\n\njulia> convertlabel([:yes,:no], true_targets) # Equivalent to LabelEnc.NativeLabels([:yes,:no])\n# 5-element Array{Symbol,1}:\n#  :no\n#  :yes\n#  :no\n#  :yes\n#  :yes\n\njulia> convertlabel(LabelEnc.MarginBased, true_targets) # Preserves eltype\n# 5-element Array{Int8,1}:\n#  -1\n#   1\n#  -1\n#   1\n#   1\n\njulia> convertlabel(LabelEnc.MarginBased(Float32), true_targets) # Force new eltype\n# 5-element Array{Float32,1}:\n#  -1.0\n#   1.0\n#  -1.0\n#   1.0\n#   1.0For encodings that can be multiclass, the number of classes can be inferred from the targets, or specified explicitly.julia> convertlabel(LabelEnc.Indices{Int}, true_targets) # number of classes inferred\n# 5-element Array{Int64,1}:\n#  2\n#  1\n#  2\n#  1\n#  1\n\njulia> convertlabel(LabelEnc.Indices(Int,2), true_targets)\n# 5-element Array{Int64,1}:\n#  2\n#  1\n#  2\n#  1\n#  1\n\njulia> convertlabel(LabelEnc.OneOfK{Bool}, true_targets)\n# 2×5 Array{Bool,2}:\n#  false   true  false   true   true\n#   true  false   true  false  falseNote that the OneOfK encoding is special in that as a matrix-based encoding it supports ObsDim, which can be used to specify which dimension of the array denotes the observations.julia> convertlabel(LabelEnc.OneOfK{Int}, true_targets, obsdim = 1)\n# 5×2 Array{Int64,2}:\n#  0  1\n#  1  0\n#  0  1\n#  1  0\n#  1  0We also provide a OneVsRest encoding, which allows to transform a multiclass problem into a binary onejulia> true_targets = [:yes,:no,:maybe,:yes];\n\njulia> convertlabel(LabelEnc.OneVsRest(:yes), true_targets)\n# 4-element Array{Symbol,1}:\n#  :yes\n#  :not_yes\n#  :not_yes\n#  :yes\n\njulia> convertlabel(LabelEnc.TrueFalse, true_targets, LabelEnc.OneVsRest(:yes))\n# 4-element Array{Bool,1}:\n#   true\n#  false\n#  false\n#   trueNativeLabels maps between data of an arbitary type (e.g. Strings) and the other label types (Normally LabelEnc.Indices{Int} for an integer index). When using it, you should always save the encoding in a variable, and pass it as an argument to convertlabel; as otherwise the encoding will be inferred each time, so will normally encode differently for different inputs.julia> enc = LabelEnc.NativeLabels([\"copper\", \"tin\", \"gold\"])\n# MLLabelUtils.LabelEnc.NativeLabels{String,3}(...)\n\njulia> convertlabel(LabelEnc.Indices, [\"gold\", \"copper\"], enc)\n# 2-element Array{Int64,1}:\n#  3\n#  1Encodings such as ZeroOne, MarginBased, and OneOfK also provide a classify function.ZeroOne has a threshold parameter which represents the decision boundary.julia> classify(0.3, 0.5)\n# 0.0\n\njulia> classify(0.3, LabelEnc.ZeroOne) # equivalent to before\n# 0.0\n\njulia> classify(0.3, LabelEnc.ZeroOne(0.2)) # custom threshold\n# 1.0\n\njulia> classify(0.3, LabelEnc.ZeroOne(Int,0.2)) # custom type\n# 1\n\njulia> classify.([0.3,0.5], LabelEnc.ZeroOne(Int,0.4)) # broadcast support\n# 2-element Array{Int64,1}:\n#  0\n#  1MarginBased uses the sign to determine the class.julia> classify(-5, LabelEnc.MarginBased)\n# -1\n\njulia> classify(0.2, LabelEnc.MarginBased)\n# 1.0\n\njulia> classify(-5, LabelEnc.MarginBased(Float64))\n# -1.0\n\njulia> classify.([-5,5], LabelEnc.MarginBased(Float64))\n# 2-element Array{Float64,1}:\n#  -1.0\n#   1.0OneOfK determines which index is the largest element.julia> pred_output = [0.1 0.4 0.3 0.2; 0.8 0.3 0.6 0.2; 0.1 0.3 0.1 0.6]\n# 3×4 Array{Float64,2}:\n#  0.1  0.4  0.3  0.2\n#  0.8  0.3  0.6  0.2\n#  0.1  0.3  0.1  0.6\n\njulia> classify(pred_output, LabelEnc.OneOfK)\n# 4-element Array{Int64,1}:\n#  2\n#  1\n#  2\n#  3\n\njulia> classify(pred_output\', LabelEnc.OneOfK, obsdim = 1) # note the transpose\n# 4-element Array{Int64,1}:\n#  2\n#  1\n#  2\n#  3\n\njulia> classify([0.1,0.2,0.6,0.1], LabelEnc.OneOfK) # single observation\n# 3"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "For a much more detailed treatment check out the latest documentationAdditionally, you can make use of Julia\'s native docsystem. The following example shows how to get additional information on convertlabel within Julia\'s REPL:?convertlabel"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered in METADATA.jl and can be installed as usual. Just start up Julia and type the following code-snipped into the REPL. It makes use of the native Julia package manger.Pkg.add(\"MLLabelUtils\")Additionally, for example if you encounter any sudden issues, or in the case you would like to contribute to the package, you can manually choose to be on the latest (untagged) version.Pkg.checkout(\"MLLabelUtils\")"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code is free to use under the terms of the MIT license"
},

{
    "location": "autodocs/#MLLabelUtils.LabelEnc",
    "page": "Docstrings",
    "title": "MLLabelUtils.LabelEnc",
    "category": "module",
    "text": "The submodule MLLabelUtils.LabelEnc contains a selection of popular label encodings:\n\nStrictly binary label encodings:\n\nLabelEnc.FuzzyBinary\nLabelEnc.TrueFalse\nLabelEnc.ZeroOne\nLabelEnc.MarginBased\n\nMulticlass label encodings:\n\nLabelEnc.Indices\nLabelEnc.NativeLabels\nLabelEnc.OneOfK\n\nMulticlass to binary:\n\nLabelEnc.OneVsRest\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.classify",
    "page": "Docstrings",
    "title": "MLLabelUtils.classify",
    "category": "function",
    "text": "classify(x, encoding)\n\nReturns the classified version of x given the encoding. Which means that if x can be interpreted as a positive label, the positive label of encoding is returned; the negative otherwise.\n\njulia> classify(0.6, LabelEnc.ZeroOne(UInt8))\n0x01\n\njulia> classify(0.4, LabelEnc.ZeroOne(UInt8))\n0x00\n\njulia> classify([0.1,0.2,0.6,0.1], LabelEnc.OneOfK)\n3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.classify!",
    "page": "Docstrings",
    "title": "MLLabelUtils.classify!",
    "category": "function",
    "text": "classify!(out, x, encoding)\n\nSame as classify, but uses out to store the result.\n\njulia> buffer = zeros(2);\njulia> classify!(buffer, [0.4,0.6], LabelEnc.ZeroOne)\n2-element Array{Float64,1}:\n 0.0\n 1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.convertlabel",
    "page": "Docstrings",
    "title": "MLLabelUtils.convertlabel",
    "category": "function",
    "text": "convertlabel(new_encoding, x, [old_encoding])\n\nConverts the given value/array x from the old_encoding into the new_encoding. Note that if old_encoding is not specified it will be derived automaticaly using labelenc.\n\njulia> convertlabel(LabelEnc.MarginBased, [0, 1, 1, 0, 0])\n5-element Array{Int64,1}:\n -1\n  1\n  1\n -1\n -1\n\njulia> convertlabel([:yes,:no], [0, 1, 1, 0, 0])\n5-element Array{Symbol,1}:\n :no\n :yes\n :yes\n :no\n :no\n\nFor more information on the available encodings, see ?LabelEnc.\n\nconvertlabel(new_encoding, x, [old_encoding], [obsdim])\n\nWhen working with OneOfK one can additionally specifify which dimension of the array denotes the observations using obsdim\n\njulia> convertlabel(LabelEnc.OneOfK, [0, 1, 1, 0, 0], obsdim = 2)\n2×5 Array{Int64,2}:\n 0  1  1  0  0\n 1  0  0  1  1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.convertlabelview",
    "page": "Docstrings",
    "title": "MLLabelUtils.convertlabelview",
    "category": "function",
    "text": "convertlabel(new_encoding, vec::AbstractVector, [old_encoding]) -> (Readonly)MappedArray\n\nCreates a lazy view into vec that makes it look like it is in the encoding specified by new_encoding, while it is actually preserved as being of old_encoding.\n\nThis method only works for label-encodings that are vector-based (i.e. pretty much all but OneOfK). The resulting MappedArray will be writeable unless old_encoding is of type OneVsRest, in which case the result will be a ReadonlyMappedArray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.ind2label",
    "page": "Docstrings",
    "title": "MLLabelUtils.ind2label",
    "category": "function",
    "text": "ind2label(index, encoding)\n\nConverts the given index into the corresponding label defined by the encoding. Note that in the binary case, index == 1 represents the positive label and index == 2 the negative label.\n\njulia> ind2label(1, LabelEnc.ZeroOne(Float32))\n1.0f0\n\njulia> ind2label(2, LabelEnc.ZeroOne(Float32))\n0.0f0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.islabelenc",
    "page": "Docstrings",
    "title": "MLLabelUtils.islabelenc",
    "category": "function",
    "text": "islabelenc(obj, encoding) -> Bool\n\nChecks is the given object obj can be described as being produced by the given encoding in which case the function returns true, or false otherwise.\n\njulia> islabelenc([1,0,1], LabelEnc.ZeroOne)\ntrue\n\njulia> islabelenc([1,-1,1], LabelEnc.ZeroOne)\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.isneglabel",
    "page": "Docstrings",
    "title": "MLLabelUtils.isneglabel",
    "category": "function",
    "text": "isneglabel(x, encoding) -> Bool\n\nChecks if the given value x can be interpreted as the negative label given the encoding. This function takes potential classification rules into account.\n\njulia> isneglabel(0.6, LabelEnc.ZeroOne(0.5))\nfalse\n\njulia> isneglabel(0.4, LabelEnc.ZeroOne(0.5))\ntrue\n\njulia> isneglabel(:b, LabelEnc.NativeLabels([:a,:b]))\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.isposlabel",
    "page": "Docstrings",
    "title": "MLLabelUtils.isposlabel",
    "category": "function",
    "text": "isposlabel(x, encoding) -> Bool\n\nChecks if the given value x can be interpreted as the positive label given the encoding. This function takes potential classification rules into account.\n\njulia> isposlabel(0.6, LabelEnc.ZeroOne(0.5))\ntrue\n\njulia> isposlabel(0.4, LabelEnc.ZeroOne(0.5))\nfalse\n\njulia> isposlabel(:b, LabelEnc.NativeLabels([:a,:b]))\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.label",
    "page": "Docstrings",
    "title": "MLLabelUtils.label",
    "category": "function",
    "text": "label(obj) -> Vector\n\nReturns the labels represented in the given object obj. Note that the order of the labels matters. In the case of two labels, the first element represents the positive label and the second element the negative label.\n\njulia> label([:yes,:no,:yes,:yes])\n2-element Array{Symbol,1}:\n :yes\n :no\n\njulia> label(LabelEnc.ZeroOne())\n2-element Array{Float64,1}:\n 1.0\n 0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.label2ind",
    "page": "Docstrings",
    "title": "MLLabelUtils.label2ind",
    "category": "function",
    "text": "label2ind(label, encoding) -> Int\n\nConverts the given label into the corresponding index defined by the encoding. Note that in the binary case, the positive label will result in the index 1 and the negative label in the index 2 respectively\n\njulia> label2ind(:no, LabelEnc.NativeLabels([:yes,:no]))\n2\n\njulia> label2ind(1, LabelEnc.MarginBased())\n1\n\njulia> label2ind(-1, LabelEnc.MarginBased())\n2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.labelenc",
    "page": "Docstrings",
    "title": "MLLabelUtils.labelenc",
    "category": "function",
    "text": "labelenc(obj) -> LabelEncoding\n\nTries to determine the most approriate label-encoding to describe the given object obj based on the result of label(obj). Note that in most cases this function is not typestable.\n\njulia> labelenc([:yes,:no,:no,:yes,:maybe])\nMLLabelUtils.LabelEnc.NativeLabels{Symbol,3}(Symbol[:yes,:no,:maybe],Dict(:yes=>1,:maybe=>3,:no=>2))\n\njulia> labelenc([1,0,0,1,0,1])\nMLLabelUtils.LabelEnc.ZeroOne{Int64,Float64}(0.5)\n\njulia> labelenc(Int8[1,-1,-1,1,-1,1])\nMLLabelUtils.LabelEnc.MarginBased{Int8}()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.labelfreq",
    "page": "Docstrings",
    "title": "MLLabelUtils.labelfreq",
    "category": "function",
    "text": "labelfreq(obj) -> Dict\n\nComputes the absolute frequencies for each label in obj.\n\njulia> labelfreq([0, 1, 1, 0, 0])\nDict{Int64,Int64} with 2 entries:\n  0 => 3\n  1 => 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.labelfreq!",
    "page": "Docstrings",
    "title": "MLLabelUtils.labelfreq!",
    "category": "function",
    "text": "labelfreq!(dict, obj) -> Dict\n\nupdates the given label-frequency-map dict with the absolute frequencies for each label in obj\n\njulia> ld = labelfreq([0, 1, 1, 0, 0])\nDict{Int64,Int64} with 2 entries:\n  0 => 3\n  1 => 2\n\njulia> labelfreq!(ld, [1,0,0])\nDict{Int64,Int64} with 2 entries:\n  0 => 5\n  1 => 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.labelmap",
    "page": "Docstrings",
    "title": "MLLabelUtils.labelmap",
    "category": "function",
    "text": "labelmap(obj) -> Dict\n\nComputes a mapping from the labels in obj to all the individual element-indices in obj that correspond to that label\n\njulia> labelmap([0, 1, 1, 0, 0])\nDict{Int64,Array{Int64,1}} with 2 entries:\n  0 => [1,4,5]\n  1 => [2,3]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.labelmap!",
    "page": "Docstrings",
    "title": "MLLabelUtils.labelmap!",
    "category": "function",
    "text": "labelmap!(dict, idx, elem) -> Dict\n\nUpdates the given label-map dict with the new element elem, which is assumed to be associated with the index idx.\n\njulia> lm = labelmap([0, 1, 1, 0, 0])\nDict{Int64,Array{Int64,1}} with 2 entries:\n  0 => [1,4,5]\n  1 => [2,3]\n\njulia> labelmap!(lm, 6, 0)\nDict{Int64,Array{Int64,1}} with 2 entries:\n  0 => [1,4,5,6]\n  1 => [2,3]\n\njulia> labelmap!(lm, 7:8, [1,0])\nDict{Int64,Array{Int64,1}} with 2 entries:\n  0 => [1,4,5,6,8]\n  1 => [2,3,7]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.labelmap2vec",
    "page": "Docstrings",
    "title": "MLLabelUtils.labelmap2vec",
    "category": "function",
    "text": "labelmap2vec(dict) -> Vector\n\nInverse function of labelmap. Computes an array of labels by element-wise traversal of the entries in dict.\n\njulia> labelvec = [:yes,:no,:no,:yes,:yes]\n\njulia> lm = labelmap(labelvec)\nDict{Symbol,Array{Int64,1}} with 2 entries:\n    :yes => [1, 4, 5]\n    :no  => [2, 3]\n\njulia> labelmap2vec(lm)\n5-element Array{Symbol,1}:\n    :yes\n    :no\n    :no\n    :yes\n    :yes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.labeltype",
    "page": "Docstrings",
    "title": "MLLabelUtils.labeltype",
    "category": "function",
    "text": "labeltype(::Type{<:LabelEncoding}) -> DataType\n\nDetermine the type of the labels represented by the label encoding T\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.neglabel",
    "page": "Docstrings",
    "title": "MLLabelUtils.neglabel",
    "category": "function",
    "text": "neglabel(encoding)\n\nIf the encoding is binary it will return the negative label of it. The function will throw an error otherwise.\n\njulia> neglabel(LabelEnc.MarginBased(Float32))\n-1.0f0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.nlabel",
    "page": "Docstrings",
    "title": "MLLabelUtils.nlabel",
    "category": "function",
    "text": "nlabel(obj) -> Int\n\nReturns the number of labels represented in the given object obj.\n\njulia> nlabel([:yes,:no,:yes,:yes])\n2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MLLabelUtils.poslabel",
    "page": "Docstrings",
    "title": "MLLabelUtils.poslabel",
    "category": "function",
    "text": "poslabel(encoding)\n\nIf the encoding is binary it will return the positive label of it. The function will throw an error otherwise.\n\njulia> poslabel(LabelEnc.MarginBased(Float32))\n1.0f0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MLLabelUtils.BinaryLabelEncodingMLLabelUtils.LabelEncMLLabelUtils.LabelEncodingMLLabelUtils.MLLabelUtilsMLLabelUtils.MatrixLabelEncodingMLLabelUtils.ObsDimMLLabelUtils.VectorLabelEncodingMLLabelUtils._ambiguousMLLabelUtils._arrange_labelMLLabelUtils._array_typeMLLabelUtils._lmMLLabelUtils._signMLLabelUtils.classifyMLLabelUtils.classify!MLLabelUtils.convertlabelMLLabelUtils.convertlabel!MLLabelUtils.convertlabelviewMLLabelUtils.evalMLLabelUtils.includeMLLabelUtils.ind2labelMLLabelUtils.islabelencMLLabelUtils.isneglabelMLLabelUtils.isposlabelMLLabelUtils.labelMLLabelUtils.label2indMLLabelUtils.labelencMLLabelUtils.labelfreqMLLabelUtils.labelfreq!MLLabelUtils.labelmapMLLabelUtils.labelmap!MLLabelUtils.labelmap2vecMLLabelUtils.labeltypeMLLabelUtils.neglabelMLLabelUtils.nlabelMLLabelUtils.poslabelMLLabelUtils.standardize_label"
},

]}
