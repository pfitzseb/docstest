var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Phylo-1",
    "page": "Readme",
    "title": "Phylo",
    "category": "section",
    "text": "Package for creating and manipulating phylogeniesDocumentation PackageEvaluator Build Status of master\n[![][docs-stable-img]][docs-stable-url] [![][pkg-0.6-img]][pkg-0.6-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url]\n[![][docs-latest-img]][docs-latest-url] [![Works with 1.0!][pkg-1.0-img]][pkg-1.0-url] [![][codecov-img]][codecov-url] [![][coveralls-img]][coveralls-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA on Julia v0.6 and the General registry on v0.7 and v1.0 and so can be installed with add. For example on Julia v1.0:(v1.0) pkg> add Phylo\n Resolving package versions...\n  Updating `~/.julia/environments/v1.0/Project.toml`\n  [aea672f4] + Phylo v0.3.2\n  Updating `~/.julia/environments/v1.0/Manifest.toml`\n  [7d9fca2a] + Arpack v0.2.2\n  [9e28174c] + BinDeps v0.8.9\n  [31c24e10] + Distributions v0.16.2\n  [90014a1f] + PDMats v0.9.4\n  [aea672f4] + Phylo v0.3.2\n  [1fd47b50] + QuadGK v2.0.0\n  [79098fc4] + Rmath v0.5.0\n  [276daf66] + SpecialFunctions v0.7.0\n  [4c63d2b9] + StatsFuns v0.7.0\n  [0796e94c] + Tokenize v0.5.2\n  [30578b45] + URIParser v0.4.0\n  [4607b0f0] + SuiteSparse\n\n(v1.0) pkg>"
},

{
    "location": "#Project-Status-1",
    "page": "Readme",
    "title": "Project Status",
    "category": "section",
    "text": "The package is tested against the current Julia v1.0 release, but also the previous v0.6 and v0.7 versions on Linux, macOS, and Windows."
},

{
    "location": "#Contributing-and-Questions-1",
    "page": "Readme",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems or would just like to ask a question."
},

{
    "location": "#Summary-1",
    "page": "Readme",
    "title": "Summary",
    "category": "section",
    "text": "Phylo is a Julia package that provides functionality for generating phylogenetic trees to feed into our [Diversity][diversity-url] package to calculate phylogenetic diversity. Phylo is currently in alpha, and is missing much functionality that people may desire, so please [raise an issue][issues-url] if/when you find problems or missing functionality - don\'t assume that I know! Currently the package can be used to make trees manually, to generate random trees using the framework from Distributions, and to read newick and nexus format trees from files. For instance, to construct a sampler for 5 tip non-ultrametric trees, and then generate one or two random tree of that type:julia> using Phylo\n\njulia> nu = Nonultrametric(5);\n\njulia> tree = rand(nu)\nPhylogenetic tree with 5 tips, 9 nodes and 8 branches.\nLeaf names are tip 1, tip 2, tip 3, tip 4 and tip 5\n\njulia> trees = rand(nu, [\"Tree 1\", \"Tree 2\"])\nTreeSet with 2 trees, each with 5 tips.\nTree names are Tree 2 and Tree 1\n\nTree 2: Phylogenetic tree with 5 tips,9 nodes and 8 branches.\n\nTree 1: Phylogenetic tree with 5 tips,9 nodes and 8 branches.The code also provides iterators, and filtered iterators over the branches, nodes, branchnames and nodenames of a tree:julia> collect(nodeiter(tree))\n9-element Array{BinaryNode{Int64},1}:\n [branch 6]-->[leaf node]\n [branch 1]-->[leaf node]\n [branch 4]-->[leaf node]\n [branch 3]-->[leaf node]\n [branch 2]-->[leaf node]\n [branch 5]-->[internal node]-->[branch 1]\n                             -->[branch 2]\n [branch 7]-->[internal node]-->[branch 3]\n                             -->[branch 4]\n [branch 8]-->[internal node]-->[branch 5]\n                             -->[branch 6]\n [root node]-->[branch 7]\n            -->[branch 8]\n\njulia> collect(nodenamefilter(isroot, tree))\n1-element Array{String,1}:\n \"Node 4\"TreeSets are iterators themselvesjulia> collect(trees)\n2-element Array{BinaryTree{DataFrames.DataFrame,Dict{String,Any}},1}:\n Phylogenetic tree with 5 tips, 9 nodes and 8 branches.\nLeaf names are tip 1, tip 2, tip 3, tip 4 and tip 5\n\n Phylogenetic tree with 5 tips,9 nodes and 8 branches.\nLeaf names are tip 1, tip 2, tip 3, tip 4 and tip 5\n...The current main purpose of this package is to provide a framework for phylogenetics to use in our [Diversity][diversity-url] package, and they will both be adapted as appropriate until both are functioning as required (though they are currently working together reasonably successfully).It can also read newick trees either from strings or files:julia> using Phylo\n\njulia> simpletree = parsenewick(\"((,Tip:1.0)Internal,)Root;\")\nBinaryTree{DataFrames.DataFrame,Dict{String,Any}} with 3 tips, 5 nodes and 4 branches.\nLeaf names are Node 1, Tip and Node 2\n\n\njulia> getbranches(simpletree)\nDict{Int64,Branch{String}} with 4 entries:\n  4 => [node \"Root\"]-->[NaN length branch]-->[node \"Node 2\"]…\n  2 => [node \"Internal\"]-->[NaN length branch]-->[node \"Node 1\"]…\n  3 => [node \"Root\"]-->[NaN length branch]-->[node \"Internal\"]…\n  1 => [node \"Internal\"]-->[1.0 length branch]-->[node \"Tip\"]…\n\njulia> tree = open(parsenewick, Phylo.path(\"H1N1.newick\"))\nBinaryTree{DataFrames.DataFrame,Dict{String,Any}} with 507 tips, 1013 nodes and 1012 branches.\nLeaf names are 44, 429, 294, 295, 227, ... [501 omitted] ... and 418And it can read nexus trees from files too:julia> ts = open(parsenexus, Phylo.path(\"H1N1.trees\"))\n[ Info: Created a tree called \'TREE1\'\n[ Info: Created a tree called \'TREE2\'\nTreeSet with 2 trees, each with 507 tips.\nTree names are TREE2 and TREE1\n\nTREE2: BinaryTree{DataFrames.DataFrame,Dict{String,Any}} with 507 tips, 1013 nodes and 1012 branches.\nLeaf names are H1N1_A_MIYAGI_3_2000, H1N1_A_PARMA_6_2008, H1N1_A_AKITA_86_2002, H1N1_A_DAKAR_14_1997, H1N1_A_EGYPT_84_2001, ... [501 omitted] ... and H1N1_A_HONGKONG_2070_1999\n\nTREE1: BinaryTree{DataFrames.DataFrame,Dict{String,Any}} with 507 tips, 1013 nodes and 1012 branches.\nLeaf names are H1N1_A_MIYAGI_3_2000, H1N1_A_PARMA_6_2008, H1N1_A_AKITA_86_2002, H1N1_A_DAKAR_14_1997, H1N1_A_EGYPT_84_2001, ... [501 omitted] ... and H1N1_A_HONGKONG_2070_1999\n\njulia> ts[\"TREE1\"]\nBinaryTree{DataFrames.DataFrame,Dict{String,Any}} with 507 tips, 1013 nodes and 1012 branches.\nLeaf names are H1N1_A_MIYAGI_3_2000, H1N1_A_PARMA_6_2008, H1N1_A_AKITA_86_2002, H1N1_A_DAKAR_14_1997, H1N1_A_EGYPT_84_2001, ... [501 omitted] ... and H1N1_A_HONGKONG_2070_1999\n\njulia> collect(treeinfoiter(ts))\n2-element Array{Pair{String,Dict{String,Any}},1}:\n \"TREE2\" => Dict(\"lnP\"=>-1.0)\n \"TREE1\" => Dict(\"lnP\"=>1.0)And while we wait for me (or kind [contributors][pr-url]!) to fill out the other extensive functionality that many phylogenetics packages have in other languages, the other important feature that it offers is a fully(?)-functional interface to R, allowing any existing R library functions to be carried out on julia trees, and trees to be read from disk and written using R helper functions. Naturally the medium-term plan is to fill in as many of these gaps as possible in Julia, so the R interface does not make RCall a dependency of the package (we use the Requires package to avoid dependencies). Instead, if you want to use the R interface you just need to use both packages:julia> using Phylo\n\njulia> using RCall\nCreating Phylo RCall interface...\n\nR> library(ape)You can then translate back and forth using rcopy on R phylo objects, and RObject constructors on julia NamedTree types to keep them in Julia or @rput to move the object into R:julia> rt = rcall(:rtree, 10)\nRCall.RObject{RCall.VecSxp}\n\nPhylogenetic tree with 10 tips and 9 internal nodes.\n\nTip labels:\n	t10, t8, t1, t2, t6, t5, ...\n\nRooted; includes branch lengths.\n\njulia> jt = rcopy(NamedTree, rt)\nPhylo.BinaryTree{DataFrames.DataFrame,Dict{String,Any}} phylogenetic tree with 19 nodes and 18 branches\nLeaf names:\nString[\"t2\", \"t1\", \"t5\", \"t9\", \"t8\", \"t3\", \"t4\", \"t10\", \"t7\", \"t6\"]\n\njulia rjt = RObject(jt); # manually translate it back to R\n\nR> all.equal($rjt, $rt) # check no damage in translations\n[1] TRUE\n\njulia> @rput rt; # Or use macros to pass R object back to R\n\njulia> @rput jt; # And automatically translate jt back to R\n\nR> jt\n\nPhylogenetic tree with 10 tips and 9 internal nodes.\n\nTip labels:\n	t10, t8, t1, t2, t6, t5, ...\n\nRooted; includes branch lengths.\n\nR> all.equal(rt, jt) # check no damage in translations\n[1] TRUEFor the time being the code will only work with rooted trees with named tips and branch lengths. If there\'s [demand][issues-url] for other types of trees, I\'ll look into it.[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://richardreeve.github.io/Phylo.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://richardreeve.github.io/Phylo.jl/stable[travis-img]: https://travis-ci.org/richardreeve/Phylo.jl.svg?branch=master [travis-url]: https://travis-ci.org/richardreeve/Phylo.jl?branch=master[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/richardreeve/Phylo.jl?svg=true&branch=master [appveyor-url]: https://ci.appveyor.com/project/richardreeve/phylo-jl/branch/master[coveralls-img]: https://img.shields.io/coveralls/richardreeve/Phylo.jl.svg [coveralls-url]: https://coveralls.io/r/richardreeve/Phylo.jl?branch=master[codecov-img]: https://codecov.io/gh/richardreeve/Phylo.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/richardreeve/Phylo.jl[pkg-0.6-img]: http://pkg.julialang.org/badges/Phylo_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=Phylo&ver=0.6[pkg-1.0-img]: http://pkg.julialang.org/badges/Phylo_1.0.svg [pkg-1.0-url]: http://pkg.julialang.org/?pkg=Phylo&ver=1.0[issues-url]: https://github.com/richardreeve/Phylo.jl/issues [pr-url]: https://github.com/richardreeve/Phylo.jl/pulls [diversity-url]: https://github.com/richardreeve/Diversity.jl/"
},

{
    "location": "autodocs/#Phylo.API",
    "page": "Docstrings",
    "title": "Phylo.API",
    "category": "module",
    "text": "Phylo.API submodule\n\nThe Phylo.API submodule should be imported if you want to create a new phylogeny, node or branch subtype. Otherwise it can be ignored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.BinaryNode",
    "page": "Docstrings",
    "title": "Phylo.BinaryNode",
    "category": "type",
    "text": "BinaryNode{T}(AbstractVector{T}, AbstractVector{T}) <: AbstractNode\n\nA node of strict binary phylogenetic tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.BinaryTree",
    "page": "Docstrings",
    "title": "Phylo.BinaryTree",
    "category": "type",
    "text": "BinaryTree\n\nBinary phylogenetic tree object with known leaves and per node data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.Branch",
    "page": "Docstrings",
    "title": "Phylo.Branch",
    "category": "type",
    "text": "Branch\n\nA directed branch connecting two AbstractNodes of phylogenetic tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.NamedBinaryTree",
    "page": "Docstrings",
    "title": "Phylo.NamedBinaryTree",
    "category": "type",
    "text": "BinaryTree\n\nBinary phylogenetic tree object with known leaves and per node data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.NamedPolytomousTree",
    "page": "Docstrings",
    "title": "Phylo.NamedPolytomousTree",
    "category": "type",
    "text": "NamedPolytomousTree\n\nPolytomous phylogenetic tree object with known leaves\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.NamedTree",
    "page": "Docstrings",
    "title": "Phylo.NamedTree",
    "category": "type",
    "text": "NamedBinaryTree\n\nBinary phylogenetic tree object with known leaves\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.Node",
    "page": "Docstrings",
    "title": "Phylo.Node",
    "category": "type",
    "text": "Node{T}(AbstractVector{T}, AbstractVector{T}) <: AbstractNode\n\nA node of potentially polytomous phylogenetic tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.Nonultrametric",
    "page": "Docstrings",
    "title": "Phylo.Nonultrametric",
    "category": "type",
    "text": "Nonultrametric{T <: AbstractTree,\n               RNG <: Sampleable}(n::Int,\n                                  rng::RNG = Exponential())\nNonultrametric{T <: AbstractTree,\n               RNG <: Sampleable}(tiplabels::Vector{String},\n                                  rng::RNG = Exponential())\n\nThe sampler for non-ultrametric phylogenetic trees of size n or with tip labels tiplabels. Generate random trees by calling rand(). Currently only works for NamedTrees.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.Phylo",
    "page": "Docstrings",
    "title": "Phylo.Phylo",
    "category": "module",
    "text": "Phylo package\n\nThe Phylo package provides some simple phylogenetics types (e.g. NamedTree) to interface to the Diversity package for measuring phylogenetic diversity. It also provides an interface to R for copying trees to and from that language and can read newick and nexus tree files (including TreeSets that contain multiple trees).\n\nFinally it also provides a standard abstract interface to phylogenetic trees, by defining AbstractNode, AbstractBranch and AbstractTree supertypes, and methods to interface to them. It also provides (through the Phylo.API submodule) methods to (re)define to write your own phylogenetic type in a way that will interact cleanly with other phylogenetic packages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.PolytomousTree",
    "page": "Docstrings",
    "title": "Phylo.PolytomousTree",
    "category": "type",
    "text": "PolytomousTree\n\nPhylogenetic tree object with polytomous branching, and known leaves and per node data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.SimpleBranch",
    "page": "Docstrings",
    "title": "Phylo.SimpleBranch",
    "category": "type",
    "text": "Branch\n\nA directed branch connecting two AbstractNodes of phylogenetic tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.Ultrametric",
    "page": "Docstrings",
    "title": "Phylo.Ultrametric",
    "category": "type",
    "text": "Ultrametric{T <: AbstractTree,\n            RNG <: Sampleable}(n::Int,\n                               rng::RNG = Exponential())\nUltrametric{T <: AbstractTree,\n            RNG <: Sampleable}(tiplabels::Vector{String},\n                               rng::RNG = Exponential())\n\nThe sampler for ultrametric phylogenetic trees of size n or with tip labels tiplabels. Generate random trees by calling rand(). Currently only works for NamedTrees.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.addbranch!",
    "page": "Docstrings",
    "title": "Phylo.addbranch!",
    "category": "function",
    "text": "addbranch!(tree::AbstractTree, source, destination[, length::Float64];\n           branchname = _newbranchlabel(tree))\n\nAdd a branch from source to destination on tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.addnode!",
    "page": "Docstrings",
    "title": "Phylo.addnode!",
    "category": "function",
    "text": "addnode!(tree::AbstractTree)\naddnode!(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.addnodes!",
    "page": "Docstrings",
    "title": "Phylo.addnodes!",
    "category": "function",
    "text": "addnodes!(tree::AbstractTree, nodenames::AbstractVector)\naddnodes!(tree::AbstractTree, count::Integer)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branch!",
    "page": "Docstrings",
    "title": "Phylo.branch!",
    "category": "function",
    "text": "branch!(tree::AbstractTree, source[, length])\nbranch!(tree::AbstractTree, source[, length]; destination)\nbranch!(tree::AbstractTree, source[, length]; destination, branchname)\n\nBranch from a source node source and create a destination node destination.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branchfilter",
    "page": "Docstrings",
    "title": "Phylo.branchfilter",
    "category": "function",
    "text": "branchfilter(filterfn::Function, tree::AbstractTree)\n\nReturns an iterator over the branches of any tree, where the AbstractBranch is filtered by the function filterfn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branchhistory",
    "page": "Docstrings",
    "title": "Phylo.branchhistory",
    "category": "function",
    "text": "branchhistory(tree::AbstractTree, node)\n\nFind the branch route between a node on a tree and its root\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branchiter",
    "page": "Docstrings",
    "title": "Phylo.branchiter",
    "category": "function",
    "text": "branchiter(tree::AbstractTree)\n\nReturns an iterator over the branches of any tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branchnamefilter",
    "page": "Docstrings",
    "title": "Phylo.branchnamefilter",
    "category": "function",
    "text": "branchnamefilter(filterfn::Function, tree::AbstractTree)\n\nReturns an iterator over the names of the branches of any tree, where the AbstractBranch is filtered by the function filterfn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branchnameiter",
    "page": "Docstrings",
    "title": "Phylo.branchnameiter",
    "category": "function",
    "text": "branchnameiter(tree::AbstractTree)\n\nReturns an iterator over the names of branches of any tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branchnametype",
    "page": "Docstrings",
    "title": "Phylo.branchnametype",
    "category": "function",
    "text": "branchnametype(::AbstractTree)\n\nReturns type of branch names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branchroute",
    "page": "Docstrings",
    "title": "Phylo.branchroute",
    "category": "function",
    "text": "branchroute(tree::AbstractTree, node1, node2)\n\nFind the branch route between two nodes on a tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.branchtype",
    "page": "Docstrings",
    "title": "Phylo.branchtype",
    "category": "function",
    "text": "branchtype(tree::AbstractTree)\n\nReturns type of branches in a tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.changedst!",
    "page": "Docstrings",
    "title": "Phylo.changedst!",
    "category": "function",
    "text": "changedst!(tree::AbstractTree, branchname, destination)\n\nChange the destination node for this node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.changesrc!",
    "page": "Docstrings",
    "title": "Phylo.changesrc!",
    "category": "function",
    "text": "changesrc!(tree::AbstractTree, branchname, source)\n\nChange the source node for this branch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.clearrootheight!",
    "page": "Docstrings",
    "title": "Phylo.clearrootheight!",
    "category": "function",
    "text": "clearrootheight(::AbstractTree)\n\nClears the tree\'s root height record.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.deletebranch!",
    "page": "Docstrings",
    "title": "Phylo.deletebranch!",
    "category": "function",
    "text": "deletebranch!(tree::AbstractTree, branchname)\n\nDelete the branch branchname from tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.deletenode!",
    "page": "Docstrings",
    "title": "Phylo.deletenode!",
    "category": "function",
    "text": "deletenode!(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.distance",
    "page": "Docstrings",
    "title": "Phylo.distance",
    "category": "function",
    "text": "distance(tree::AbstractTree, node1, node2)\n\nDistance between two nodes on a tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.distances",
    "page": "Docstrings",
    "title": "Phylo.distances",
    "category": "function",
    "text": "distances(tree::AbstractTree)\n\nPairwise distances between all leaf nodes on a tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.droptips!",
    "page": "Docstrings",
    "title": "Phylo.droptips!",
    "category": "function",
    "text": "droptips!(t::T, tips::Vector{NL}) where {NL, BL, T <: AbstractTree{NL, BL}}\n\nFunction to drop tips from a phylogenetic tree t, which are found in the vector of tip names, tips.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.dst",
    "page": "Docstrings",
    "title": "Phylo.dst",
    "category": "function",
    "text": "dst(branch::AbstractBranch)\ndst(tree::AbstractTree, branchname)\n\nReturn the destination node for this branch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getancestors",
    "page": "Docstrings",
    "title": "Phylo.getancestors",
    "category": "function",
    "text": "getancestors(tree::AbstractTree, nodename)\n\nReturn the name of all of the nodes that are ancestral to this node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getbranch",
    "page": "Docstrings",
    "title": "Phylo.getbranch",
    "category": "function",
    "text": "getbranch(tree::AbstractTree, branchname)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getbranchnames",
    "page": "Docstrings",
    "title": "Phylo.getbranchnames",
    "category": "function",
    "text": "getbranchnames(tree::AbstractTree)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getchildren",
    "page": "Docstrings",
    "title": "Phylo.getchildren",
    "category": "function",
    "text": "getchildren(tree::AbstractTree, nodename)\n\nReturn the name(s) of the child node(s) for this node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getdescendants",
    "page": "Docstrings",
    "title": "Phylo.getdescendants",
    "category": "function",
    "text": "getdescendants(tree::AbstractTree, nodename)\n\nReturn the names of all of the nodes that descend from this node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getheight",
    "page": "Docstrings",
    "title": "Phylo.getheight",
    "category": "function",
    "text": "getheight(tree::AbstractTree, nodename)\n\nReturn the height of the node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getinbound",
    "page": "Docstrings",
    "title": "Phylo.getinbound",
    "category": "function",
    "text": "getinbound(node::AbstractNode)\ngetinbound(tree::AbstractTree, nodename)\n\nreturn the name of the inbound branch to this node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getinternalnodes",
    "page": "Docstrings",
    "title": "Phylo.getinternalnodes",
    "category": "function",
    "text": "getinternalnodes(t::AbstractTree)\n\nFunction to retrieve only the internal nodes from a tree, t, which does not include tips or root.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getleafinfo",
    "page": "Docstrings",
    "title": "Phylo.getleafinfo",
    "category": "function",
    "text": "getleafinfo(::AbstractTree, label)\n\nretrieve the leaf info for a leaf of the tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getleafnames",
    "page": "Docstrings",
    "title": "Phylo.getleafnames",
    "category": "function",
    "text": "getleafnames(::AbstractTree)\n\nRetrieve the leaf names from the tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getlength",
    "page": "Docstrings",
    "title": "Phylo.getlength",
    "category": "function",
    "text": "getlength(branch::AbstractBranch)\ngetlength(tree::AbstractTree, branchname)\n\nReturn the length of this branch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getnode",
    "page": "Docstrings",
    "title": "Phylo.getnode",
    "category": "function",
    "text": "getnode(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getnodenames",
    "page": "Docstrings",
    "title": "Phylo.getnodenames",
    "category": "function",
    "text": "getnodenames(tree::AbstractTree)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getnoderecord",
    "page": "Docstrings",
    "title": "Phylo.getnoderecord",
    "category": "function",
    "text": "getnoderecord(::AbstractTree, label)\n\nretrieve the node record for a leaf of the tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getoutbounds",
    "page": "Docstrings",
    "title": "Phylo.getoutbounds",
    "category": "function",
    "text": "getoutbounds(node::AbstractNode)\ngetoutbounds(tree::AbstractTree, nodename)\n\nReturn the names of the outbound branches from this node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getparent",
    "page": "Docstrings",
    "title": "Phylo.getparent",
    "category": "function",
    "text": "getparent(tree::AbstractTree, nodename)\n\nReturn the name of the parent node for this node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.getrootheight",
    "page": "Docstrings",
    "title": "Phylo.getrootheight",
    "category": "function",
    "text": "getrootheight(tree::AbstractTree)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.hasbranch",
    "page": "Docstrings",
    "title": "Phylo.hasbranch",
    "category": "function",
    "text": "hasbranch(tree::AbstractTree, branchname)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.hasheight",
    "page": "Docstrings",
    "title": "Phylo.hasheight",
    "category": "function",
    "text": "hasheight(tree::AbstractTree, nodename)\n\nDoes the node have a height defined?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.hasinbound",
    "page": "Docstrings",
    "title": "Phylo.hasinbound",
    "category": "function",
    "text": "hasinbound(node::AbstractNode)\nhasinbound(tree::AbstractTree, nodename)\n\nDoes the node have an inbound connection?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.hasinboundspace",
    "page": "Docstrings",
    "title": "Phylo.hasinboundspace",
    "category": "function",
    "text": "hasinboundspace(node::AbstractNode)\nhasinboundspace(tree::AbstractTree, nodename)\n\nDoes the node have space for an inbound connection?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.hasnode",
    "page": "Docstrings",
    "title": "Phylo.hasnode",
    "category": "function",
    "text": "hasnode(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.hasoutboundspace",
    "page": "Docstrings",
    "title": "Phylo.hasoutboundspace",
    "category": "function",
    "text": "hasoutboundspace(node::AbstractNode)\nhasoutboundspace(tree::AbstractTree, nodename)\n\nDoes the node have space for an[other] outbound connection?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.hasrootheight",
    "page": "Docstrings",
    "title": "Phylo.hasrootheight",
    "category": "function",
    "text": "hasrootheight(tree::AbstractTree)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.heightstoroot",
    "page": "Docstrings",
    "title": "Phylo.heightstoroot",
    "category": "function",
    "text": "heights(tree::AbstractTree)\n\nHeight of all of the leaves of the tree above the root\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.heighttoroot",
    "page": "Docstrings",
    "title": "Phylo.heighttoroot",
    "category": "function",
    "text": "height(tree::AbstractTree, node)\n\nHeight of a node of the tree above the root\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.indegree",
    "page": "Docstrings",
    "title": "Phylo.indegree",
    "category": "function",
    "text": "indegree(node::AbstractNode)\nindegree(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.isinternal",
    "page": "Docstrings",
    "title": "Phylo.isinternal",
    "category": "function",
    "text": "isinternal(node::AbstractNode)\nisinternal(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.isleaf",
    "page": "Docstrings",
    "title": "Phylo.isleaf",
    "category": "function",
    "text": "isleaf(node::AbstractNode)\nisleaf(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.isroot",
    "page": "Docstrings",
    "title": "Phylo.isroot",
    "category": "function",
    "text": "isroot(node::AbstractNode)\nisroot(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.isunattached",
    "page": "Docstrings",
    "title": "Phylo.isunattached",
    "category": "function",
    "text": "isunattached(node::AbstractNode)\nisunattached(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.keeptips!",
    "page": "Docstrings",
    "title": "Phylo.keeptips!",
    "category": "function",
    "text": "keeptips!(t::T, tips::Vector{NL}) where {NL, BL, T <: AbstractTree{NL, BL}}\n\nFunction to keep only the tips in a phylogenetic tree, t, that are found in the vector of tip names, tip.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.nleaves",
    "page": "Docstrings",
    "title": "Phylo.nleaves",
    "category": "function",
    "text": "nleaves(::AbstractTree)\n\nCount the number of leaves in the tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.nodefilter",
    "page": "Docstrings",
    "title": "Phylo.nodefilter",
    "category": "function",
    "text": "nodefilter(filterfn::Function, tree::AbstractTree)\n\nReturns an iterator over the nodes of any tree, where the AbstractNode is filtered by the function filterfn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.nodehistory",
    "page": "Docstrings",
    "title": "Phylo.nodehistory",
    "category": "function",
    "text": "nodehistory(tree::AbstractTree, node)\n\nFind the node route between a node on a tree and its root\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.nodeiter",
    "page": "Docstrings",
    "title": "Phylo.nodeiter",
    "category": "function",
    "text": "nodeiter(tree::AbstractTree)\n\nReturns an iterator over the nodes of any tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.nodenamefilter",
    "page": "Docstrings",
    "title": "Phylo.nodenamefilter",
    "category": "function",
    "text": "nodenamefilter(filterfn::Function, tree::AbstractTree)\n\nReturns an iterator over the nodenames of any tree, where the AbstractNode itself is filtered by the function filterfn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.nodenameiter",
    "page": "Docstrings",
    "title": "Phylo.nodenameiter",
    "category": "function",
    "text": "nodenameiter(tree::AbstractTree)\n\nReturns an iterator over the names of the nodes of any tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.nodenametype",
    "page": "Docstrings",
    "title": "Phylo.nodenametype",
    "category": "function",
    "text": "nodenametype(::AbstractTree)\n\nReturns type of node names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.noderoute",
    "page": "Docstrings",
    "title": "Phylo.noderoute",
    "category": "function",
    "text": "noderoute(tree::AbstractTree, node1, node2)\n\nFind the node route between two nodes on a tree\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.nodetype",
    "page": "Docstrings",
    "title": "Phylo.nodetype",
    "category": "function",
    "text": "nodetype(tree::AbstractTree)\n\nReturns type of nodes in a tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.outdegree",
    "page": "Docstrings",
    "title": "Phylo.outdegree",
    "category": "function",
    "text": "outdegree(node::AbstractNode)\noutdegree(tree::AbstractTree, nodename)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.resetleaves!",
    "page": "Docstrings",
    "title": "Phylo.resetleaves!",
    "category": "function",
    "text": "resetleaves!(::AbstractTree)\n\nReset the leaf records to the current leaves, deleting all leaf records.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.setheight!",
    "page": "Docstrings",
    "title": "Phylo.setheight!",
    "category": "function",
    "text": "setheight!(tree::AbstractTree, nodename, height)\n\nSet the height of the node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.setleafinfo!",
    "page": "Docstrings",
    "title": "Phylo.setleafinfo!",
    "category": "function",
    "text": "setleafinfo!(::AbstractTree, table)\n\nSet the leaf info for the leaves of the tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.setnoderecord!",
    "page": "Docstrings",
    "title": "Phylo.setnoderecord!",
    "category": "function",
    "text": "setnoderecord(::AbstractTree, label, value)\n\nSet the node record for a node of the tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.setrootheight!",
    "page": "Docstrings",
    "title": "Phylo.setrootheight!",
    "category": "function",
    "text": "setrootheight!(tree::AbstractTree, height)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.src",
    "page": "Docstrings",
    "title": "Phylo.src",
    "category": "function",
    "text": "src(branch::AbstractBranch)\nsrc(tree::AbstractTree, branchname)\n\nReturn the source node for this branch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Phylo.validate",
    "page": "Docstrings",
    "title": "Phylo.validate",
    "category": "function",
    "text": "validate(tree::AbstractTree)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Phylo.APIPhylo.AbstractBranchPhylo.AbstractBranchIteratorPhylo.AbstractBranchTreePhylo.AbstractNodePhylo.AbstractNodeIteratorPhylo.AbstractTreePhylo.AbstractTreeIteratorPhylo.BinaryNodePhylo.BinaryTreePhylo.BranchPhylo.BranchIteratorPhylo.BranchNameIteratorPhylo.DendrogramPhylo.FanPhylo.LeafInfoPhylo.NamedBinaryTreePhylo.NamedPolytomousTreePhylo.NamedTreePhylo.NodePhylo.NodeIteratorPhylo.NodeNameIteratorPhylo.NonultrametricPhylo.PhyloPhylo.PhylogeneticsPhylo.PolytomousTreePhylo.SimpleBranchPhylo.TPhylo.TreeInfoIteratorPhylo.TreeIteratorPhylo.TreeNameIteratorPhylo.TreeSetPhylo.UltrametricPhylo.__init__Phylo._circle_transform_segmentsPhylo._extendPhylo._find_tipsPhylo._findxyPhylo._hasbranchPhylo._hasnodePhylo._p_circPhylo._tocircPhylo._treefuturePhylo._treepastPhylo._xcircPhylo._ycircPhylo.addbranch!Phylo.addnode!Phylo.addnodes!Phylo.branch!Phylo.branchfilterPhylo.branchhistoryPhylo.branchiterPhylo.branchnamefilterPhylo.branchnameiterPhylo.branchnametypePhylo.branchroutePhylo.branchtypePhylo.changedst!Phylo.changesrc!Phylo.checkbranchPhylo.checktosemiPhylo.clearrootheight!Phylo.deletebranch!Phylo.deletenode!Phylo.distancePhylo.distancesPhylo.droptips!Phylo.dstPhylo.evalPhylo.getancestorsPhylo.getbranchPhylo.getbranchesPhylo.getbranchnamesPhylo.getchildrenPhylo.getdescendantsPhylo.getheightPhylo.getinboundPhylo.getinternalnodesPhylo.getleafinfoPhylo.getleafnamesPhylo.getlengthPhylo.getnodePhylo.getnodenamesPhylo.getnoderecordPhylo.getnodesPhylo.getoutboundsPhylo.getparentPhylo.getrootdistancePhylo.getrootheightPhylo.hasbranchPhylo.haschildrenPhylo.hasheightPhylo.hasinboundPhylo.hasinboundspacePhylo.hasnodePhylo.hasoutboundspacePhylo.hasparentPhylo.hasrootheightPhylo.heightstorootPhylo.heighttorootPhylo.includePhylo.indegreePhylo.isBEGINPhylo.isDIMENSIONSPhylo.isENDPhylo.isEQPhylo.isEQorRSQUAREPhylo.isIDENTIFIERPhylo.isTAXAPhylo.isTAXLABELSPhylo.isTRANSLATEPhylo.isTREEPhylo.isTREESPhylo.isWHITESPACEPhylo.isinternalPhylo.isleafPhylo.isrootPhylo.isunattachedPhylo.iterateskipPhylo.keeptips!Phylo.leafinfotypePhylo.leafiterPhylo.map_depthfirstPhylo.nleavesPhylo.nodefilterPhylo.nodehistoryPhylo.nodeiterPhylo.nodenamefilterPhylo.nodenameiterPhylo.nodenametypePhylo.noderoutePhylo.nodetypePhylo.nonamePhylo.ntreesPhylo.outdegreePhylo.parsedictPhylo.parsenewickPhylo.parsenewick!Phylo.parsenexusPhylo.parsenodePhylo.parsetaxaPhylo.parsetreesPhylo.parsevectorPhylo.pathPhylo.resetleavesPhylo.resetleaves!Phylo.setheight!Phylo.setleafinfo!Phylo.setnoderecord!Phylo.setrootheight!Phylo.showsimplePhylo.srcPhylo.tokenerrorPhylo.tokensgetkeyPhylo.treeinfoiterPhylo.treeiterPhylo.treenameiterPhylo.validate"
},

]}
