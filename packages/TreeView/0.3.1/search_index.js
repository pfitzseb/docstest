var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TreeView-1",
    "page": "Readme",
    "title": "TreeView",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This is a small package to visualize a graph corresponding to an abstract syntax tree (AST) of a Julia expression. It uses the TikzGraphs.jl package to do the visualization."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The package is designed to be used within the IJulia notebook.The simplest usage is @tree <EXPRESSION>, where <EXPRESSION> represents any Julia expression, for example@tree x^2 + y^2which gives the following output:(Image: example_tree)See this notebook for usage examples."
},

{
    "location": "#Installation-prerequisites-1",
    "page": "Readme",
    "title": "Installation prerequisites",
    "category": "section",
    "text": "You will need to have LaTeX installed on your system, and install the pdf2svg utility; see the TikzGraphs.jl documentation for details."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "David P. Sanders,Departamento de Física, Facultad de Ciencias, Universidad Nacional Autónoma de México (UNAM)"
},

{
    "location": "#Acknowledements-1",
    "page": "Readme",
    "title": "Acknowledements",
    "category": "section",
    "text": "Financial support is acknowledged from DGAPA-UNAM PAPIME grants PE-105911 and PE-107114, and DGAPA-UNAM PAPIIT grant IN-117214, and from a CONACYT-Mexico sabbatical fellowship. The author thanks Alan Edelman and the Julia group for hospitality during his sabbatical visit.In particular, he thanks Jiahao Chen, who, when asked if a package like this existed, replied \"why don\'t you write one?\"."
},

{
    "location": "autodocs/#TreeView.@dag",
    "page": "Docstrings",
    "title": "TreeView.@dag",
    "category": "macro",
    "text": "Make a Directed Acyclic Graph (DAG) from a Julia expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.@dag_cse",
    "page": "Docstrings",
    "title": "TreeView.@dag_cse",
    "category": "macro",
    "text": "Perform common subexpression elimination on a Julia Expression, and make a Directed Acyclic Graph (DAG) of the result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.@tree",
    "page": "Docstrings",
    "title": "TreeView.@tree",
    "category": "macro",
    "text": "Make a tree from a Julia Expression. Omits call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.@tree_with_call",
    "page": "Docstrings",
    "title": "TreeView.@tree_with_call",
    "category": "macro",
    "text": "Make a tree from a Julia Expression. Includes call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.DirectedAcyclicGraph",
    "page": "Docstrings",
    "title": "TreeView.DirectedAcyclicGraph",
    "category": "type",
    "text": "Structure representing a DAG. Maintains a symbol_map giving the currently-known symbols and the corresponding vertex number in the graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.add_symbol!",
    "page": "Docstrings",
    "title": "TreeView.add_symbol!",
    "category": "function",
    "text": "Adds a symbol to the DAG if it doesn\'t already exist. Returns the vertex number\n\nMake numbers unique:\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.latex_label",
    "page": "Docstrings",
    "title": "TreeView.latex_label",
    "category": "function",
    "text": "Convert a symbol or  into a LaTeX label\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.lookup!",
    "page": "Docstrings",
    "title": "TreeView.lookup!",
    "category": "function",
    "text": "Look up a symbol to see if it has already been seen.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.make_dag",
    "page": "Docstrings",
    "title": "TreeView.make_dag",
    "category": "function",
    "text": "Make a Directed Acyclic Graph (DAG) from a Julia expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.make_dag!",
    "page": "Docstrings",
    "title": "TreeView.make_dag!",
    "category": "function",
    "text": "Update a Directed Acyclic Graph with the result of traversing the given Expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.tikz_representation",
    "page": "Docstrings",
    "title": "TreeView.tikz_representation",
    "category": "function",
    "text": "Return a Tikz representation of a tree object. The tree object must have fields g (the graph) and labels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeView.walk_tree!",
    "page": "Docstrings",
    "title": "TreeView.walk_tree!",
    "category": "function",
    "text": "walk_tree!(g, labels, ex, show_call=true)\n\nWalk the abstract syntax tree (AST) of the given expression ex. Builds up the graph g and the set of labels for each node, both modified in place\n\nshow_call specifies whether to include call nodes in the graph. Including them represents the Julia AST more precisely, but adds visual noise.\n\nReturns the number of the top vertex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TreeView.@dagTreeView.@dag_cseTreeView.@treeTreeView.@tree_with_callTreeView.DirectedAcyclicGraphTreeView.LabelledDiGraphTreeView.LabelledTreeTreeView.TreeViewTreeView.add_numbered_vertex!TreeView.add_symbol!TreeView.drawTreeView.evalTreeView.includeTreeView.latex_escapeTreeView.latex_labelTreeView.lookup!TreeView.make_dagTreeView.make_dag!TreeView.tikz_representationTreeView.walk_treeTreeView.walk_tree!"
},

]}
