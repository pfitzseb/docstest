var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InformationMeasures-1",
    "page": "Readme",
    "title": "InformationMeasures",
    "category": "section",
    "text": "Release version:(Image: InformationMeasures) (Image: InformationMeasures) (Image: InformationMeasures)Development version:(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"InformationMeasures\")"
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "In cases where optimal performance is needed, the latest version of InformationMeasures is recommended, with Julia 0.6. See also Advanced usage."
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "Currently information measures on three or fewer variables are supported. The basic use case is to pass data arrays for each variable into each function. These will be discretized.It is also possible to pass in frequencies (if the data has already been discretized), or probabilities (if the probabilities are already known or have already been estimated) - see below.using InformationMeasures\n\ndata_1 = rand(100)\ndata_2 = rand(100)\ndata_3 = rand(100)\n\n# Entropy\nent_1 = get_entropy(data_1)\nent_12 = get_entropy(data_1, data_2)\nent_123 = get_entropy(data_1, data_2, data_3)\n\n# Conditional entropy\nce_1_on_2 = get_conditional_entropy(data_1, data_2)\n\n# Mutual information\nmi_12 = get_mutual_information(data_1, data_2)\n\n# Conditional mutual information\ncmi_12_on_3 = get_conditional_mutual_information(data_1, data_2, data_3)\n\n# Interaction information\nii_123 = get_interaction_information(data_1, data_2, data_3)\n\n# Total correlation\ntc_123 = get_total_correlation(data_1, data_2, data_3)\n\n# Partial information decomposition\npid_123 = get_partial_information_decomposition(data_1, data_2, data_3)"
},

{
    "location": "#Config-options-1",
    "page": "Readme",
    "title": "Config options",
    "category": "section",
    "text": "The following keyword arguments can be passed in to each function:estimator (String) Estimator for estimating the probability distribution\"maximum_likelihood\" (default)\n\"miller_madow\"\n\"dirichlet\"\n\"shrinkage\"base (Number) Base of the logarithm, i.e. the units for entropy2 (default)mode (String) Method for discretizing\"uniform_width\" (default)\n\"uniform_count\"\n\"bayesian_blocks\"numberofbins (Integer)0 (default)getnumberof_bins (Function) Customized function for calculating the number of bins (will only be used if number_of_bins is 0)get_root_n (default)"
},

{
    "location": "#Estimator-specific-config-options-1",
    "page": "Readme",
    "title": "Estimator-specific config options",
    "category": "section",
    "text": "lambda (Void or Number) Shrinkage intensity (if left as nothing, will be calculated automatically)nothing (default)prior (Number) Dirichlet prior (if left as 0, Dirichlet estimator is equivalent to maximum likelihood)0 (default)"
},

{
    "location": "#Values,-frequencies,-or-probabilities-1",
    "page": "Readme",
    "title": "Values, frequencies, or probabilities",
    "category": "section",
    "text": "The information measures can be calculated from raw data values, frequencies (if the data has already been discretized), or probabilities (if the probabilities are already known or have already been estimated).To calculate entropy from frequencies, call get_entropy with the keyword argument discretized = trueFor all other information measures, simply pass in a single array of frequencies or probabilities (2D for conditional entropy and mutual information or 3D for conditional mutual information, mutual information and total correlation). If they are probabilities, include the keyword argument probabilities = true, otherwise they will be treated as frequencies."
},

{
    "location": "#Discretization-1",
    "page": "Readme",
    "title": "Discretization",
    "category": "section",
    "text": "Although discretization is taken care of when the information measures are calculated, it is possible to discretize raw values directly, for example to investigate how different discretization algorithms and bin numbers affect the discretization.data = rand(100)\ndisc_val = discretize_values(data)NB discretize_values returns the frequencies for each bin in order, rather than the discretized values. An example of how to get the discretized values is discussed below."
},

{
    "location": "#Advanced-usage-1",
    "page": "Readme",
    "title": "Advanced usage",
    "category": "section",
    "text": "Functions such as get_entropy and get_mutual_information are designed to be flexible and easy to use with different types of input and config options. In some cases it may be quicker to bypass these functions."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "When calculating the mutual information between every pair of data vectors from a large dataset, simply calling get_mutual_information on each pair of vectors will result in each vector being discretized multiple times.Currently, discretization for multiple variables works by discretizing the marginals independently, then reconstructing the higher dimensional frequencies from these discretized marginals. Therefore discretizing each variable once in advance will not affect the results, but will be much quicker. Joint frequencies cannot be reconstructed from the bin frequencies; instead the discretized values should be stored. get_bin_ids! should therefore be used, instead of discretize_values:data_1 = rand(100)\ndata_2 = rand(100)\ndata_3 = rand(100)\n\nnumber_of_bins = 10\nmi_base = 2\n\nbin_ids_1 = zeros(Int, length(data_1))\nget_bin_ids!(data_1, \"uniform_width\", number_of_bins, bin_ids_1)\n\nbin_ids_2 = zeros(Int, length(data_2))\nget_bin_ids!(data_2, \"uniform_width\", number_of_bins, bin_ids_2)\n\nbin_ids_3 = zeros(Int, length(data_3))\nget_bin_ids!(data_3, \"uniform_width\", number_of_bins, bin_ids_3)\n\nf_12 = get_frequencies_from_bin_ids(bin_ids_1, bin_ids_2, number_of_bins, number_of_bins)\np_12 = get_probabilities(\"maximum_likelihood\", f_12)\nmi_12 = apply_mutual_information_formula(p_12, sum(p_12, 2), sum(p_12, 1), mi_base)\n\nf_13 = get_frequencies_from_bin_ids(bin_ids_1, bin_ids_3, number_of_bins, number_of_bins)\np_13 = get_probabilities(\"maximum_likelihood\", f_13)\nmi_13 = apply_mutual_information_formula(p_13, sum(p_13, 2), sum(p_13, 1), mi_base)\n\n# And so on...Note that the probability distribution is estimated from the joint frequencies rather than the marginals, meaning that, for most estimators, sum(p_12, 2) may be different from sum(p_13, 2), even though both represent the estimated probability distribution for data_1. (This is not the case for the \"maximum likelihood\" estimator, which just divides the bin frequencies by the total frequency. For this estimator, the marginal probabilities could be stored in advance to avoid calculating them as they are passed into apply_entropy_formula. The best performance in that case may depend on the cost of storage vs calculations.)Here are two full examples of the \"quick\" vs the \"easy\" way to estimate the mutual information between all pairs of a set of variables.data = rand(100, 100)\n\nfunction mi_quick(data; discretizer = \"uniform_width\", estimator = \"maximum_likelihood\", mi_base = 2)\n\n	nvals, nvars = size(data)\n\n	bin_ids = zeros(Int, (nvals, nvars))\n	nbins = Int(round(sqrt(nvals)))\n	mis = zeros(binomial(nvars, 2))\n\n	for i in 1 : nvars\n		get_bin_ids!(data[1:nvals, i:i], discretizer, nbins, view(bin_ids, 1:nvals, i:i))\n	end\n\n	index = 1\n	for i in 1 : nvars, j in i+1 : nvars\n		f = get_frequencies_from_bin_ids(bin_ids[1:end, i:i], bin_ids[1:end, j:j], nbins, nbins)\n		p = get_probabilities(estimator, f)\n		mis[index] = apply_mutual_information_formula(p, sum(p, 1), sum(p, 2), mi_base)\n		index += 1\n	end\n\n	return mis\n\nend\n\nfunction mi_easy(data; discretizer = \"uniform_width\", estimator = \"maximum_likelihood\", mi_base = 2)\n	nvals, nvars = size(data)\n	mis = zeros(binomial(nvars, 2))\n\n	index = 1\n	for i in 1 : nvars, j in i+1 : nvars\n		mis[index] = get_mutual_information(data[1:nvals, i:i], data[1:nvals, j:j]; mode = discretizer, estimator = estimator, base = mi_base)\n		index += 1\n	end\n\n	return mis\nend"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Contributions and bug reports are welcome!"
},

]}
