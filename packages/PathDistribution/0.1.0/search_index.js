var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PathDistribution.jl-1",
    "page": "Readme",
    "title": "PathDistribution.jl",
    "category": "section",
    "text": "(Image: PathDistribution) (Image: PathDistribution) (Image: PathDistribution)(Image: Build Status) (Image: Build status) (Image: Coverage Status)This Julia package implements the Monte Carlo path generation method to estimate the number of simple paths between a pair of nodes in a graph, proposed by Roberts and Kroese (2007).Roberts, B., & Kroese, D. P. (2007). Estimating the Number of s-t Paths in a Graph. Journal of Graph Algorithms and Applications, 11(1), 195-214.Extending the same idea, this package also estimate the path-length distribution. That is, we can estimate the number of paths whose length is no greater than a certain number. This idea was used in the following paper:Sun, L., Karwan, M, & Kwon, C. Generalized Bounded Rationality and Robust Multi-Commodity Network Design.This package can also be used to fully enumerate all paths."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package requires Julia version 0.4.Pkg.add(\"PathDistribution\")"
},

{
    "location": "#Basic-Usage-with-an-Adjacency-Matrix-1",
    "page": "Readme",
    "title": "Basic Usage with an Adjacency Matrix",
    "category": "section",
    "text": "First import the package:using PathDistributionSuppose we have an adjacency matrix of the form:adj_mtx = [ 0 1 1 1 0 1 1 1 ;\n            1 0 0 0 1 1 1 0 ;\n            1 0 0 1 1 1 1 1 ;\n            1 0 1 0 1 1 1 1 ;\n            0 1 1 1 0 1 0 0 ;\n            1 1 1 1 1 0 1 1 ;\n            1 1 1 1 0 1 0 1 ;\n            1 0 1 1 0 1 1 0 ]and the origin node is 1 the destination node is 8."
},

{
    "location": "#Monte-Carlo-Simulation-1",
    "page": "Readme",
    "title": "Monte-Carlo Simulation",
    "category": "section",
    "text": "To estimate the total number of paths from the origin to the destination, we can do the following:# N1: number of samples in the first stage (default=5000)\n# N2: number of samples in the second stage (default=10000)\nno_path_est = monte_carlo_path_number(1, 8, adj_mtx)\nno_path_est = monte_carlo_path_number(1, 8, adj_mtx, N1, N2)To estimate the path-length distribution:samples = monte_carlo_path_sampling(1, size(adj_mtx,1), adj_mtx)\nx_data_est, y_data_est = estimate_cumulative_count(samples)where x_data_est and y_data_est are for estimating the cumulative count of paths by path length. That is, y_data_est[i] is an estimate for the number of simple paths whose length is no greater than x_data_est[i] between the origin and destination nodes. Note that y_data_est[end] is the estimated number of total paths."
},

{
    "location": "#Full-Enumeration-1",
    "page": "Readme",
    "title": "Full Enumeration",
    "category": "section",
    "text": "This package can also enumerate all paths explicitly. (CAUTION: It may take \"forever\" to enumerate all paths for a large network.)path_enums = path_enumeration(1, size(adj_mtx,1), adj_mtx)\nx_data, y_data = actual_cumulative_count(path_enums)You can access each enumerated path as follows:for enum in path_enums\n    println(\"Length = $(enum.length) : $(enum.path)\")\nend\nprintln(\"The total number of paths is $(length(path_enums))\")"
},

{
    "location": "#Results-1",
    "page": "Readme",
    "title": "Results",
    "category": "section",
    "text": "One obtains results similar to the following:The total number of paths:\n- Full enumeration      : 397\n- Monte Carlo estimation: 395.6732706634341"
},

{
    "location": "#Another-Form-1",
    "page": "Readme",
    "title": "Another Form",
    "category": "section",
    "text": "When you have the following form data:data = [\n 1   4  79.0 ;\n 1   2  59.0 ;\n 2   4  31.0 ;\n 2   3  90.0 ;\n 2   5   9.0 ;\n 2   6  32.0 ;\n 3   9  89.0 ;\n 3   8  66.0 ;\n 3   6  68.0 ;\n 3   7  47.0 ;\n 4   3  14.0 ;\n 4   9  95.0 ;\n 4   8  88.0 ;\n 5   3  44.0 ;\n 5   6  83.0 ;\n 6   7  33.0 ;\n 6   8  37.0 ;\n 7  11  79.0 ;\n 7  12  10.0 ;\n 8   7  95.0 ;\n 8  10   0.0 ;\n 8  12  30.0 ;\n 9  10   5.0 ;\n 9  11  44.0 ;\n10  13  79.0 ;\n10  14  91.0 ;\n11  14  53.0 ;\n11  15  80.0 ;\n11  13  56.0 ;\n12  15  75.0 ;\n12  14   1.0 ;\n13  14  48.0 ;\n14  15  25.0 ;\n]\n\nst = round(Int, data[:,1]) #first column of data\nen = round(Int, data[:,2]) #second column of data\nlen = data[:,3] #third\n\n# Double them for two-ways.\nstart_node = [st; en]\nend_node = [en; st]\nlink_length = [len; len]\n\norigin = 1\ndestination = 15"
},

{
    "location": "#Monte-Carlo-Simulation-2",
    "page": "Readme",
    "title": "Monte-Carlo Simulation",
    "category": "section",
    "text": "The similar tasks as above can be done as follows:# Full Enumeration\npath_enums = path_enumeration(origin, destination, start_node, end_node, link_length)\nx_data, y_data = actual_cumulative_count(path_enums)\n\n# Monte-Carlo estimation\nN1 = 5000\nN2 = 10000\nsamples = monte_carlo_path_sampling(origin, destination, start_node, end_node, link_length)\nsamples = monte_carlo_path_sampling(origin, destination, start_node, end_node, link_length, N1, N2)\nx_data_est, y_data_est = estimate_cumulative_count(samples)\n\nprintln(\"===== Another Example =====\")\nprintln(\"The total number of paths:\")\nprintln(\"- Full enumeration      : $(length(path_enums))\")\nprintln(\"- Monte Carlo estimation: $(y_data_est[end])\")"
},

{
    "location": "#Results-2",
    "page": "Readme",
    "title": "Results",
    "category": "section",
    "text": "Results would look like:===== Another Example =====\nThe total number of paths:\n- Full enumeration      : 9851\n- Monte Carlo estimation: 9742.908561771697"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PathDistribution.PathDistributionPathDistribution.PathEnumPathDistribution.PathSamplePathDistribution.actual_cumulative_countPathDistribution.estimate_cumulative_countPathDistribution.estimate_numberPathDistribution.evalPathDistribution.find_neighbor!PathDistribution.getAdjacencyPathDistribution.getLinkLengthDictPathDistribution.getNoNodePathDistribution.getPathLengthPathDistribution.includePathDistribution.length_distribution_methodPathDistribution.length_distribution_vectorPathDistribution.monte_carlo_path_numberPathDistribution.monte_carlo_path_samplingPathDistribution.naive_path_generationPathDistribution.path_enumeration"
},

]}
