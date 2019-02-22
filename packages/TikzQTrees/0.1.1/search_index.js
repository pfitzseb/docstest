var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TikzQTrees.jl-1",
    "page": "Readme",
    "title": "TikzQTrees.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)Plotting trees using TikzPictures.jl and the latex package tikz-qtree."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package can be installed by:(v0.7) pkg> add https://github.com/dharasim/TikzQTrees.jlTikzQTrees is build on top of TikzPictures.jl. If you can install TikzPictures, you should also be able to use TikzQTrees."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The package implements a wrapper type TikzQTree of tree data types which implement the functionsvalue(tree) that returns the value of the root of the tree, and\nchildren(tree) that returns an iterator over the children of the root of the tree.It also provides SimpleTree, an example of a type that can be wrapped into TikzQTree:mutable struct SimpleTree{T}\n    value    :: T\n    children :: Vector{SimpleTree{T}}\nendTikzQTrees are converted into TikzPictures to show them in the Juno plot pane and IJulia notebooks. In the REPL, the tex code of the tikz-qtree is printed.julia> using TikzQTrees, TikzPictures\n\njulia> tree = SimpleTree(\"root\", [SimpleTree(\"left\"), SimpleTree(\"right\")]);\n\njulia> TikzQTree(tree)\n[.root left right ]\n\njulia> save(SVG(\"test_tree\"), TikzPicture(TikzQTree(tree)))\nThe saved plot is:<p align=\"center\">   <img src=\"treeplots/testtree.svg\" width=\"140\"/> </p>"
},

{
    "location": "#One-more-thing-1",
    "page": "Readme",
    "title": "One more thing",
    "category": "section",
    "text": "This package additionally provides the macro @qtree for pretty printing of Julia\'s syntax trees:julia> qt = @qtree a * (b+c) == a*b + a*c\n[.{==} [.{*} {a} [.{+} {b} {c} ] ] [.{+} [.{*} {a} {b} ] [.{*} {a} {c} ] ] ]\n\njulia> save(SVG(\"distributivity\"), TikzPicture(qt))\n<p align=\"center\">   <img src=\"tree_plots/distributivity.svg\" width=\"300\"/> </p>TreeView.jl is a related package that implements a macro @tree which is build on top of TikzGraphs.jl."
},

{
    "location": "autodocs/#TikzQTrees.AbstractTree",
    "page": "Docstrings",
    "title": "TikzQTrees.AbstractTree",
    "category": "type",
    "text": "AbstractTree{T}\n\nabstract type for trees with values of type T\n\nMethods to implement\n\nvalue(tree): Returns the value of the root of the tree\nchildren(tree): Returns an iterator over the children of the root of the tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TikzQTrees.children",
    "page": "Docstrings",
    "title": "TikzQTrees.children",
    "category": "function",
    "text": "children(tree)\n\nReturns an iterator over the children of the root of the tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TikzQTrees.value",
    "page": "Docstrings",
    "title": "TikzQTrees.value",
    "category": "function",
    "text": "value(tree)\n\nReturns the value of the root of the tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TikzQTrees.@qtreeTikzQTrees.AbstractTreeTikzQTrees.SimpleTreeTikzQTrees.TikzQTreeTikzQTrees.TikzQTreesTikzQTrees._treeTikzQTrees.childrenTikzQTrees.evalTikzQTrees.includeTikzQTrees.isleafTikzQTrees.latex_stringTikzQTrees.leafsTikzQTrees.value"
},

]}
