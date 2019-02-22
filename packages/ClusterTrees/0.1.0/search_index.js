var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ClusterTrees-1",
    "page": "Readme",
    "title": "ClusterTrees",
    "category": "section",
    "text": "Tree data structures for fast multipole methods and H-matrices(Image: Build Status) (Image: Codecov)"
},

{
    "location": "autodocs/#ClusterTrees.children",
    "page": "Docstrings",
    "title": "ClusterTrees.children",
    "category": "function",
    "text": "The expression `children(tree,node)` returns an iterator that will produce\na sequence of node iterators. These values do not have a lot of meaning by\nthemselves, but can be used in conjunction with the tree object. E.g:\n\n    data(tree, node_itr)\n    children(tree, node_itr)\n\nIn fact, the node iterators should be regarded as lightweight proxies for\nthe underlying node and their attached data payload. The node objects\nthemselves are of limited use for the client programmer as they are an\nimplementation detail of the specific tree being used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClusterTrees.data",
    "page": "Docstrings",
    "title": "ClusterTrees.data",
    "category": "function",
    "text": "data(tree, node)\n\nRetrieve the data aka payload associated with the given node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClusterTrees.depthfirst",
    "page": "Docstrings",
    "title": "ClusterTrees.depthfirst",
    "category": "function",
    "text": "Traverse the tree depth first, executing the function f(tree, node, level) at every node. If f returns false, recursion is halted and the next node on the current level is visited.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClusterTrees.insert!",
    "page": "Docstrings",
    "title": "ClusterTrees.insert!",
    "category": "function",
    "text": "insert!(tree, parent, data)\n\nInsert a node carrying \'data\' as a new child of \'parent\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClusterTrees.root",
    "page": "Docstrings",
    "title": "ClusterTrees.root",
    "category": "function",
    "text": "root(tree)\n\nReturn a proxy for the root of the tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClusterTrees.update!",
    "page": "Docstrings",
    "title": "ClusterTrees.update!",
    "category": "function",
    "text": "update!(f, tree, node, data, router!)\n\nAlgorithm to update or add nodes of the tree. router! and updater! are user supplied functions:\n\nrouter!(tree, node)\n\nReturns the next candidate node until the node for insertion is reaches. Note that this function potentially created new nodes. Arrival at the destination is indicated by returning the same node that was passed as the second argument.\n\nf(tree, node, data)\n\nUpdate the destination node node. Typically, data is added in some sense to the data residing at the desitination node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ClusterTrees.BlockTreesClusterTrees.ClusterTreesClusterTrees.DepthFirstIteratorClusterTrees.LevelledTreesClusterTrees.OctreesClusterTrees.PointerBasedTreesClusterTrees.SimpleTreesClusterTrees.childrenClusterTrees.dataClusterTrees.depthfirstClusterTrees.evalClusterTrees.haschildrenClusterTrees.includeClusterTrees.insert!ClusterTrees.leavesClusterTrees.print_treeClusterTrees.rootClusterTrees.route!ClusterTrees.update!"
},

]}
