var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TreeViews.jl-![](https://travis-ci.org/pfitzseb/TreeViews.jl.svg?branchmaster)-1",
    "page": "Readme",
    "title": "TreeViews.jl (Image: )",
    "category": "section",
    "text": "This package provides a minimal API for defining a tree-like display for arbitrary types."
},

{
    "location": "autodocs/#TreeViews.hastreeview",
    "page": "Docstrings",
    "title": "TreeViews.hastreeview",
    "category": "function",
    "text": "hastreeview(x::T)::Bool\n\nCalled by a frontend to decide whether a tree view for type T is available. Defaults to false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeViews.nodelabel",
    "page": "Docstrings",
    "title": "TreeViews.nodelabel",
    "category": "function",
    "text": "nodelabel(io::IO, x::T, i::Integer, mime::MIME\"text/plain\" = MIME\"text/plain\"())\n\nPrints the label of x\'s i-th child to io. Like with Base.show there are also methods with mime::AbstractString and no mime argument at all (which falls back to MIME\"text/plain\"()). Please only overload the nodelabel(io::IO, x, i::Integer, mime::MIME) form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeViews.numberofnodes",
    "page": "Docstrings",
    "title": "TreeViews.numberofnodes",
    "category": "function",
    "text": "numberofnodes(x)\n\nNumber of direct descendents. Defaults to fieldcount(typeof(x)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeViews.treelabel",
    "page": "Docstrings",
    "title": "TreeViews.treelabel",
    "category": "function",
    "text": "treelabel(io::IO, x, mime = MIME\"text/plain\"())\n\nPrints x\'s tree header to io. Like with Base.show there are also methods with mime::AbstractString and no mime argument at all (which falls back to MIME\"text/plain\"()). Please only overload the treelabel(io::IO, x, mime::MIME) form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TreeViews.treenode",
    "page": "Docstrings",
    "title": "TreeViews.treenode",
    "category": "function",
    "text": "treenode(x::T, i::Integer)\n\nReturns the i-th node of x, which is usually printed by the display frontend next to the corresponding treelabel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TreeViews.TreeViewsTreeViews.evalTreeViews.hastreeviewTreeViews.includeTreeViews.nodelabelTreeViews.numberofnodesTreeViews.treelabelTreeViews.treenode"
},

]}
