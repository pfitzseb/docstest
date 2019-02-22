var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BKTrees.jl-1",
    "page": "Readme",
    "title": "BKTrees.jl",
    "category": "section",
    "text": "Julia implementation of BKTrees based on the Python implementation found here.(Image: License) (Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "For more information on BK-trees check out https://en.wikipedia.org/wiki/BK-tree and https://github.com/Jetsetter/pybktree."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "This short example illustrates the usage of the B-K trees for approximate string matching:julia> using Pkg\n       Pkg.activate(\".\")\n       using BKTrees\n       using Random\n       using StringDistances\n       \n       lev(x,y) = evaluate(Levenshtein(), x, y)\n       dictionary = [randstring(10) for _ in 1:100_000]  # random dictionary\n       bkt = BKTree(lev, dictionary)  # build tree\n       \n       target = randstring(10)  # target string\n       \n       # search for best 3 matches with distance < 10\n       found = find(bkt, target, 10, k=3)\n       @show target, found\n\n#(target, found) = (\"RIqWKU2A38\", Tuple{Float64,String}[(7.0, \"uIfPK02wH9\"), (7.0, \"RIqTF8YC6O\"), (7.0, \"XMqWKG1GHN\")])"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The installation can be done through the usual channels (manually by cloning the repository or installing it though the julia REPL)."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code has an MIT license and therefore it is free."
},

{
    "location": "#Acknowledgments-1",
    "page": "Readme",
    "title": "Acknowledgments",
    "category": "section",
    "text": "This work is heavily based on the implementation found here"
},

{
    "location": "autodocs/#BKTrees.BKTree",
    "page": "Docstrings",
    "title": "BKTrees.BKTree",
    "category": "type",
    "text": "The B-K tree structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BKTrees.Node",
    "page": "Docstrings",
    "title": "BKTrees.Node",
    "category": "type",
    "text": "A node in the B-K tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BKTrees.add!",
    "page": "Docstrings",
    "title": "BKTrees.add!",
    "category": "function",
    "text": "Adds a node (i.e. Node{T}(item::T)) to the tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BKTrees.find",
    "page": "Docstrings",
    "title": "BKTrees.find",
    "category": "function",
    "text": "Find items in the tree whose distance is less or equal to n and returns the top k items, ordered ascending according to the distance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BKTrees.hamming_distance",
    "page": "Docstrings",
    "title": "BKTrees.hamming_distance",
    "category": "function",
    "text": "Calculates the Hamming distance (numbers of different bits) between two numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BKTrees.is_empty_node",
    "page": "Docstrings",
    "title": "BKTrees.is_empty_node",
    "category": "function",
    "text": "Determines whether a Node in the BKTree is empty or not.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BKTrees.BKTreeBKTrees.BKTreesBKTrees.NodeBKTrees.add!BKTrees.evalBKTrees.findBKTrees.hamming_distanceBKTrees.includeBKTrees.is_empty_node"
},

]}
