var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Discretizers-1",
    "page": "Readme",
    "title": "Discretizers",
    "category": "section",
    "text": "This package supports discretization methods and discretization mappings for turning continuous data to and from discrete data.Please read the documentation.(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "autodocs/#Discretizers.DiscretizeUniformWidth",
    "page": "Docstrings",
    "title": "Discretizers.DiscretizeUniformWidth",
    "category": "type",
    "text": "DiscretizeUniformWidth(alg::Symbol) If nbins is a symbol, automatically determine the number of bins to use\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Discretizers.LinearDiscretizer",
    "page": "Docstrings",
    "title": "Discretizers.LinearDiscretizer",
    "category": "type",
    "text": "LinearDiscretizer\n\nA discretizer which encodes (typically) continuous values into discrete bins. A univariate domain is divided into discrete by edges. A value V will be encoded into bin B if V ∈ [Bₗ Bᵣ) (or V ∈ [Bₗ Bᵣ] if B is the rightmost bin)\n\nIf forceoutliersto_closest is set to true, then values outside of binedges will be shunted into the nearest bin. Otherwise an error is thrown.\n\nTODO(tim):     handle NA     handle Nullable     handle NaN     ability to specify decoding behavior\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Discretizers.datalineardiscretizer",
    "page": "Docstrings",
    "title": "Discretizers.datalineardiscretizer",
    "category": "function",
    "text": "a hybrid discretizers that maps a special missing value indicator (typically Inf or NaN) to a discrete bin, but otherwise is a linear discretizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Discretizers.decode",
    "page": "Docstrings",
    "title": "Discretizers.decode",
    "category": "function",
    "text": "There are several methods for decoding a LinearDiscretizer. The default is SampleUniform, which uniformly samples from the bin. SampleBinCenter returns the bin\'s center value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Discretizers.AbstractDiscretizerDiscretizers.AbstractSampleMethodDiscretizers.CategoricalDiscretizerDiscretizers.DEFAULT_LIN_DISC_FORCE_OUTLIERS_TO_CLOSESTDiscretizers.DiscretizationAlgorithmDiscretizers.DiscretizeBayesianBlocksDiscretizers.DiscretizeMODLDiscretizers.DiscretizeMODL_GreedyDiscretizers.DiscretizeMODL_OptimalDiscretizers.DiscretizeMODL_PostGreedyDiscretizers.DiscretizeUniformCountDiscretizers.DiscretizeUniformWidthDiscretizers.DiscretizersDiscretizers.HybridDiscretizerDiscretizers.LinearDiscretizerDiscretizers.MODL_value2_oneintvalDiscretizers.PQ_methods_updataDiscretizers.SAMPLE_BIN_CENTERDiscretizers.SAMPLE_UNIFORMDiscretizers.SampleBinCenterDiscretizers.SampleUniformDiscretizers.bincentersDiscretizers.binedgesDiscretizers.binwidthDiscretizers.binwidthsDiscretizers.datalineardiscretizerDiscretizers.decodeDiscretizers.decoded_typeDiscretizers.encodeDiscretizers.encoded_typeDiscretizers.evalDiscretizers.get_discretization_countsDiscretizers.get_histogram_plot_arraysDiscretizers.get_nbinsDiscretizers.greedy_mergeDiscretizers.greedy_merge_indexDiscretizers.includeDiscretizers.insert_and_dedup!Discretizers.merge_adj_intvalDiscretizers.methods_mergeDiscretizers.methods_merge2_splitDiscretizers.methods_merge_splitDiscretizers.methods_splitDiscretizers.nlabelsDiscretizers.optimal_resultDiscretizers.post_greedy_indexDiscretizers.post_greedy_resultDiscretizers.remove_methods_on_indexDiscretizers.supports_decodingDiscretizers.supports_encodingDiscretizers.totalwidthDiscretizers.uncondi_greedy_merge_index"
},

]}
