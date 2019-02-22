var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NetworkInference-1",
    "page": "Readme",
    "title": "NetworkInference",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "NetworkInference is a package for inferring (undirected) networks, given a set of measurements for each node. The main output is the InferredNetwork type, which represents a fully connected, weighted network, where an edge\'s weight indicates the relative confidence of that edge existing in the true network. See also Scope.Some things to note:The package was originally written for inferring biological networks using gene expression data, hence the use of \"network\" instead of \"graph\". However, these methods could be applied to other types of data.\nFour network inference algorithms are currently implemented (MI, CLR, PUC and PIDC, explained in [1]), but we plan to include more.\nNetworks are assumed to be undirected, since all the algorithms included so far infer undirected networks. Hence:* in the `Edge` type, the order of the nodes is arbitrary\n* when a network is written to file, edges are written in both directions, becuase downstream analyses sometimes require this\n* the `InferredNetwork` type contains a list of edges, with one edge for each pair of genes, in which the order of the genes is arbitrary"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"NetworkInference\")"
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "First include the package at the start of your script or interactive session:using NetworkInference"
},

{
    "location": "#One-step-1",
    "page": "Readme",
    "title": "One step",
    "category": "section",
    "text": "Given a data file and an inference algorithm, you can infer a network with a single function call:infer_network(<path to data file>, PIDCNetworkInference())This will return an InferredNetwork type. You can also write the inferred network to file, using the out_file_path keyword argument. See also Options."
},

{
    "location": "#Multiple-steps-1",
    "page": "Readme",
    "title": "Multiple steps",
    "category": "section",
    "text": "First make an array of Nodes from your data:nodes = get_nodes(<path to data file>)Currently the package assumes the file is of the format:line 1: headers (these are discarded for now)\nother lines: NodeLabel value1 value2 value3 ...Then infer a network:inferred_network = InferredNetwork(PIDCNetworkInference(), nodes)An InferredNetwork has an array of nodes and an array of edges between all possible node pairs (sorted in descending order of edge weight, i.e. confidence of the edge existing in the true network).You can write the network to file:write_network_file(<path to output file>, inferred_network)"
},

{
    "location": "#Options-1",
    "page": "Readme",
    "title": "Options",
    "category": "section",
    "text": "The following keyword arguments can be passed in to infer_network:delim (Union{Char,Bool}) Column delimiterfalse (default) Delimiter is whitespacediscretizer (String) Method for discretizing\"bayesian_blocks\" (default) Adaptive discretizer with varibale number of bins\n\"uniform_width\" Use this if Bayesian blocks fails, or if constant number of bins is required\n\"uniform_count\"estimator (String) Estimator for estimating the probability distribution\"maximum_likelihood\" (default) Highly recommended for PUC and PIDC. (See inline comments for more information.)\n\"dirichlet\"\n\"shrinkage\"numberofbins (Integer)10 (default)(This will be ignored when using Bayesian blocks discretization)base (Number) Base of the logarithm, i.e. the units for entropy2 (default)outfilepath (String) Path to the output network file\"\" (default) No file will be writtenDefaults for discretizer and estimator are explained in [1]"
},

{
    "location": "#Scope-1",
    "page": "Readme",
    "title": "Scope",
    "category": "section",
    "text": "This package is not designed for analysing networks/graphs or calculating network/graph metrics. In order to do such analyses, another package should be used (e.g. LightGraphs). Of course, the edge list or the InferredNetwork will need to be parsed into the appropriate data structure first; the method get_adjacency_matrix may help with this.Note that the InferredNetwork type contains a list of every possible edge, and the confidence of each edge existing in the true network. For analysing the properties of an inferred network, you may first want to define a partially connected, unweighted network by classifying each edge as \"in the network\" or \"not in the network\", based on the confidences. The simplest ways to do this are either to decide that the top x percent of edges are \"in the network\", or to define a threshold confidence, above which edges are \"in the network\".You can pass a threshold into get_adjacency_matrix to get the adjacency matrix of a thresholded network (as well as dictionaries to map the node labels to their numerical IDs within the matrix, and vice versa):get_adjacency_matrix(inferred_network, 0.1) # Keeps top 10% edges with the largest weightsget_adjacency_matrix(inferred_network, 0.1, absolute = true) # Keeps all edges with weights >= 0.1"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Bug reports, pull requests and other contributions are welcome!"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] Chan, Stumpf and Babtie (2017) Gene Regulatory Network Inference from Single-Cell Data Using Multivariate Information Measures Cell Systems"
},

{
    "location": "autodocs/#NetworkInference.Edge",
    "page": "Docstrings",
    "title": "NetworkInference.Edge",
    "category": "type",
    "text": "Undirected edge\n\nFields:\n\nnodes: the two nodes, in an arbitrary order\nweight: weight indicating confidence of edge existing in the true network\n\nWeights are used to rank the edges, and different algorithms may have a different scale. The relative weights within one inferred network are therefore more meaningful than the absolute weight out of context.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkInference.InferredNetwork",
    "page": "Docstrings",
    "title": "NetworkInference.InferredNetwork",
    "category": "type",
    "text": "InferredNetwork type. Represents a weighted, fully connected network, where an edges\'s weight indicates the relative confidence of that edge existing in the true network.\n\nFields:\n\nnodes: array of all the nodes, in an arbitrary order\nedges: array of all the edges, in descending order of weight\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkInference.Node",
    "page": "Docstrings",
    "title": "NetworkInference.Node",
    "category": "type",
    "text": "Node with metadata\n\nFields:\n\nlabel: unique identifying label\nbinned_values: data values discretized into bins\nnumber_of_bins: no. bins the data were discretized into\nprobabilities: probability distribution across the bins\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkInference.get_adjacency_matrix",
    "page": "Docstrings",
    "title": "NetworkInference.get_adjacency_matrix",
    "category": "function",
    "text": "get_adjacency_matrix(inferred_network::InferredNetwork, threshold = 1.0; <keyword arguments>)\n\nGets an adjacency matrix given an InferredNetwork and a threshold.\n\nArguments:\n\ninferred_network: network that was inferred\nthreshold=0.1: threshold above which to keep edges in the network\nabsolute=false: interpret threshold as an absolute confidence score\n\nIf absolute is false, threshold will be interpreted as the percentage of edges to keep.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkInference.get_nodes",
    "page": "Docstrings",
    "title": "NetworkInference.get_nodes",
    "category": "function",
    "text": "get_nodes(data_file_path::String; <keyword arguments>)\n\nGets an array of all Nodes from a data file. It is assumed that the first line of the file is headers (which are discarded) and the subsequent lines each represent one node, and are of the form:\n\nLabel    datavalue1  datavalue2 ...\n\nthough a different delimiter may be specified.\n\nArguments:\n\ndata_file_path: path to the data file\ndelim=false: the file\'s delimiter. Leave as false if it is whitespace\ndiscretizer=\"bayesian_blocks\": algorithm for discretizing the data\nestimator=\"maximum_likelihood\": algorithm for estimating probabilities\nnumber_of_bins=10: will be overwritten if using \"bayesian_blocks\"\n\nThe \"maximum_likelihood\" estimator is recommended for PUC and PIDC.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkInference.infer_network",
    "page": "Docstrings",
    "title": "NetworkInference.infer_network",
    "category": "function",
    "text": "infer_network(data_file_path::String, inference::AbstractNetworkInference; <keyword arguments>)\n\nInfers a network, given a data file and a network inference algorithm. It is assumed that the first line of the file is headers (which are discarded) and the subsequent lines each represent one node, and are of the form:\n\nLabel    datavalue1  datavalue2 ...\n\nthough a different delimiter may be specified.\n\nArguments:\n\ndata_file_path: path to the data file\ninference: network inference algorithm (e.g. PIDCNetworkInference())\ndelim=false: the file\'s delimiter. Leave as false if it is whitespace\ndiscretizer=\"bayesian_blocks\": algorithm for discretizing the data\nestimator=\"maximum_likelihood\": algorithm for estimating probabilities\nnumber_of_bins=10: will be overwritten if using \"bayesian_blocks\"\nbase=2: base for the information measures\nout_file_path=\"\": path to output file. If empty, will not write a file\n\nThe \"maximum_likelihood\" estimator is recommended for PUC and PIDC.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkInference.read_network_file",
    "page": "Docstrings",
    "title": "NetworkInference.read_network_file",
    "category": "function",
    "text": "read_network_file(file_path::AbstractString)\n\nReads a network file and creates an InferredNetwork type. Assumes that the input is such that each line contains an edge and each edge is written in both directions with the same weight:\n\n...\n\nLabelX   LabelY  WeightXY\n\nLabelY   LabelX  WeightXY\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkInference.write_network_file",
    "page": "Docstrings",
    "title": "NetworkInference.write_network_file",
    "category": "function",
    "text": "write_network_file(file_path::String, inferred_network::InferredNetwork)\n\nWrites a network file from an InferredNetwork type. Each line of the file will contain an edge, and since networks are assumed undirected, each edge will be written in both directions with the same weight:\n\n...\n\nLabelX   LabelY  WeightXY\n\nLabelY   LabelX  WeightXY\n\n...\n\nArguments:\n\nfile_path: path to the output file\ninferred_network: network that was inferred\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NetworkInference.AbstractNetworkInferenceNetworkInference.CLRNetworkInferenceNetworkInference.EB_EXISTSNetworkInference.EdgeNetworkInference.InferredNetworkNetworkInference.MINetworkInferenceNetworkInference.NetworkInferenceNetworkInference.NodeNetworkInference.NodePairNetworkInference.PIDCNetworkInferenceNetworkInference.PUCNetworkInferenceNetworkInference.apply_contextNetworkInference.evalNetworkInference.get_adjacency_matrixNetworkInference.get_joint_probabilitiesNetworkInference.get_mi_scoresNetworkInference.get_nodesNetworkInference.get_pucNetworkInference.get_puc_scoresNetworkInference.get_weightNetworkInference.get_weightsNetworkInference.includeNetworkInference.infer_networkNetworkInference.read_network_fileNetworkInference.write_network_file"
},

]}
