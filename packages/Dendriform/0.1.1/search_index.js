var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<p align=\"center\">   <img src=\"./docs/src/assets/logo.png\" alt=\"Dendriform.jl\"/> </p>"
},

{
    "location": "#Dendriform.jl-1",
    "page": "Readme",
    "title": "Dendriform.jl",
    "category": "section",
    "text": "Dendriform dialgebra algorithms to compute using Loday\'s arithmetic on groves of planar binary trees(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io) (Image: ) (Image: )"
},

{
    "location": "#Setup-1",
    "page": "Readme",
    "title": "Setup",
    "category": "section",
    "text": "Installation of latest release version using Julia:julia> Pkg.add(\"Dendriform\")Provides the types PBTree for planar binary trees, Grove for tree collections of constant degree, and GroveBin to compress grove data. This package defines various essential operations on planar binary trees and groves like ∪ for union; ∨ for graft; left and right for branching; ⋖, ⋗, <, >, ≤, ≥ for Tamari\'s partial ordering; ⊴ for between; / and \\ (i.e. over and under); and the dashv and vdash operations ⊣, ⊢, +, * for dendriform algebra.View the documentation stable / latest for more features and examples."
},

{
    "location": "#Background-1",
    "page": "Readme",
    "title": "Background",
    "category": "section",
    "text": "We call (Image: tree-symb) the name of a tree to represent it as a vector, where the sequence is made up of n integers. Collections of planar binary trees are encoded into an equivalence class of matrices:(Image: matrix-equivalence-class)where (Image: A~B) if there exists a permutation (Image: f  in Sk) so that (Image: condition). The binary tree grafting operation is computed<p align=\"center\"><img src=\"https://latex.codecogs.com/svg.latex?\\omega(\\alpha\\vee&space;\\beta)&space;=&space;\\omega(\\alpha)\\vee\\omega(\\beta)&space;:=&space;[\\omega(\\alpha),a&plus;1&plus;b,\\omega(\\beta)]\\in&space;\\Lambda_{a&plus;b&plus;1}^1\"/></p>The left and right addition are computed on the following recursive principle:<p align=\"center\"><img src=\"https://latex.codecogs.com/svg.latex?\\xi\\dashv&space;\\eta&space;&=&space;\\bigcup{i}&space;\\bigcup{\\tau&space;\\in&space;\\xii^r&space;&plus;&space;\\eta}&space;\\xii^l&space;\\vee&space;\\tau&space;\\qquad&space;&\\text{and}&space;\\qquad&space;\\qquad&space;\\xi\\vdash&space;\\eta&space;&=&space;\\bigcup{j}&space;\\bigcup{\\tau&space;\\in&space;\\xi&plus;\\etaj^l}&space;\\tau\\vee&space;\\etaj^r.\"/></p>Together these non-commutative binary operations satisfy the properties of an associative dendriform dialgebra. The structures induced by Loday\'s definition of the sum have the partial ordering of the associahedron known as Tamari lattice.<p align=\"center\">   <img src=\"https://raw.githubusercontent.com/wiki/chakravala/Fatou.jl/dendriform/grove-sum-1.png\" alt=\"tamari-grove-commutativity.png\"/> </p>Figure: Tamari associahedron, colored to visualize noncommutative sums of [1,2] and [2,1], code: gistHowever, in this computational package, a stricter total ordering is constructed using a function that transforms the set-vector isomorphism obtained from the descending greatest integer index position search method:<p align=\"center\"><img src=\"https://latex.codecogs.com/svg.latex?\\Theta(\\mu)&space;&=&space;\\sum{j=n}^1&space;\\sum{k=1}^{\\&hash;ej}&space;(ej)k&space;\\cdot&space;10^{\\delta(j,k)},&space;\\qquad&space;&\\text{where}&space;\\qquad&space;\\delta(j,k)&space;&=&space;n&space;-&space;\\sum{r=1}^{j-1}&space;\\sum{s=1}^{\\&hash;er}&space;1&space;-&space;\\sum_{s=1}^{k}&space;1\"/></p>The structure obtained from this total ordering is used to construct a reliable binary groveindex representation that encodes the essential data of any grove, using the formula<p align=\"center\"><img src=\"https://latex.codecogs.com/svg.latex?\\zeta\\gamma&space;:=&space;\\sum{\\tau&space;\\in&space;\\gamma}&space;2^{\\theta_\\tau&space;-&space;1}\"/></p>These algorithms are used in order to facilitate computations that provide insight into the Loday arithmetic."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Basic usage examples:julia> using Dendriform\n\njulia> Grove(3,7) ⊣ [1,2]∪[2,1]\n[1,2,5,1,2]\n[1,2,5,2,1]\n[2,1,5,1,2]\n[2,1,5,2,1]\n[1,5,3,1,2]\n[1,5,2,1,3]\n[1,5,1,2,3]\n[1,5,3,2,1]\n[1,5,1,3,1]\nY5 #9/42\n\njulia> Grove(2,3) * [1,2,3]∪[3,2,1] |> GroveBin\n2981131286847743360614880957207748817969 Y6 #30/132 [54.75%]\n\njulia> [2,1,7,4,1,3,1] < [2,1,7,4,3,2,1]\ntrue"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Dan Yasaki with Adriano Bruno, The arithmetic of planar binary trees, Involve 4 (2011), no. 1, 1-11. (PDF)\nJean-Louis Loday, Arithmetree, J. of Algebra (2002), no. 258, 275-309."
},

]}
