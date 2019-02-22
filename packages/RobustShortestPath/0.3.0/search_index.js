var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RobustShortestPath.jl-1",
    "page": "Readme",
    "title": "RobustShortestPath.jl",
    "category": "section",
    "text": "(Image: RobustShortestPath) (Image: RobustShortestPath) (Image: RobustShortestPath)(Image: Build Status) (Image: Build Status) (Image: Coverage Status)Robust Shortest Path Finder for the Julia Language.This package provides functions to find robust shortest paths. Please see the reference papers below.<!–"
},

{
    "location": "#get*shortest*path-1",
    "page": "Readme",
    "title": "getshortestpath",
    "category": "section",
    "text": "This provides an interface to Dijkstra\'s method from the Graphs.jl package. –>"
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "julia> Pkg.add(\"RobustShortestPath\")This will also install LightGraphs.jl, if you don\'t have it installed in your Julia system already.To check if worksjulia> Pkg.test(\"RobustShortestPath\")"
},

{
    "location": "#get*robust*path-1",
    "page": "Readme",
    "title": "getrobustpath",
    "category": "section",
    "text": "This function solves the robust shortest path problem proposed by Bertsimas and Sim (2003) and integrates the idea of Lee and Kwon (2014).Bertsimas, D., & Sim, M. (2003). Robust discrete optimization and network flows. Mathematical programming, 98(1-3), 49-71.\nLee, T., & Kwon, C. (2014). A short note on the robust combinatorial optimization problems with cardinality constrained uncertainty. 4OR, 12(4), 373-378."
},

{
    "location": "#get*robust*path_two-1",
    "page": "Readme",
    "title": "getrobustpath_two",
    "category": "section",
    "text": "This function solves the robust shortest path problem with two multiplicative uncertain cost coefficients proposed by Kwon et al. (2013).Kwon, C., Lee, T., & Berglund, P. (2013). Robust shortest path problems with two uncertain multiplicative cost coefficients. Naval Research Logistics (NRL), 60(5), 375-394."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Example network and data from Kwon et al. (2013):<img src=\"network.png\"><img src=\"data.png\">The above network data should be prepared in the column vector form as follows:data = [\n 1   4  79   31  66  28;\n 1   2  59   97  41  93;\n 2   4  31   21  50  40;\n 2   3  90   52  95  38;\n 2   5   9   23  95  59;\n 2   6  32   57  73   7;\n 3   9  89  100  38  21;\n 3   8  66   13   4  72;\n 3   6  68   95  58  58;\n 3   7  47   12  56  20;\n 4   3  14   19  36  84;\n 4   9  95   65  88  42;\n 4   8  88   13  62  54;\n 5   3  44    8  62  53;\n 5   6  83   66  30  19;\n 6   7  33    3   7   8;\n 6   8  37   99  29  46;\n 7  11  79   54  23   3;\n 7  12  10   37  35  43;\n 8   7  95   71  85  56;\n 8  10   0   95  16  64;\n 8  12  30   38  16   3;\n 9  10   5   69  51  71;\n 9  11  44   60  60  17;\n10  13  79   78  16  59;\n10  14  91   59  64  61;\n11  14  53   38  84  77;\n11  15  80   85  78   6;\n11  13  56   23  26  85;\n12  15  75   80  31  38;\n12  14   1  100  18  40;\n13  14  48   28  45  33;\n14  15  25   71  33  56;\n]\n\nstart_node = data[:,1] #first column of data\nend_node = data[:,2] #second column of data\np = data[:,3] #third\nq = data[:,4] #fourth\nc = data[:,5] #fifth\nd = data[:,6] #sixthFor a single-coefficient case as in Bertsimas and Sim (2003):using RobustShortestPath\nGamma=3\norigin=1\ndestination=15\nrobust_path, robust_x, worst_case_cost = get_robust_path(start_node, end_node, c, d, Gamma, origin, destination)The result will look like:([1,4,8,12,15],[1,0,0,0,0,0,0,0,0,0  …  0,0,0,0,0,0,1,0,0,0],295)For a two-coefficient case as in Kwon et al. (2013):using RobustShortestPath\nGamma_u=2\nGamma_v=3\norigin=1\ndestination=15\nrobust_path, robust_x, worst_case_cost = get_robust_path_two(start_node, end_node, p, q, c, d, Gamma_u, Gamma_v, origin, destination)The result should look like:([1,4,3,7,12,14,15],[1,0,0,0,0,0,0,0,0,1  …  0,0,0,0,0,0,0,1,0,1],25314.0)See runtest.jl for more information."
},

{
    "location": "#get*shortest*path-2",
    "page": "Readme",
    "title": "getshortestpath",
    "category": "section",
    "text": "This package also provides an interface to dijkstra_shortest_paths of LightGraphs.jl.path, x = get_shortest_path(start_node, end_node, link_length, origin, destination)"
},

{
    "location": "#Contributor-1",
    "page": "Readme",
    "title": "Contributor",
    "category": "section",
    "text": "This package is written and maintained by Changhyun Kwon."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RobustShortestPath.RobustShortestPathRobustShortestPath.create_graphRobustShortestPath.evalRobustShortestPath.get_pathRobustShortestPath.get_robust_pathRobustShortestPath.get_robust_path_twoRobustShortestPath.get_shortest_pathRobustShortestPath.get_vectorRobustShortestPath.include"
},

]}
