var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SparseGrids-1",
    "page": "Readme",
    "title": "SparseGrids",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package computes sparse grids for quadrature rules used to compute multidimensional integrals."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In Julia, run Pkg.add(\"SparseGrids\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "If f is a function that returns nodes, weights = f(n), for any (integer) order n, then the function sparsegrid computes the sparse extension to D dimensions of order O:nodes, weigths = sparsegrid(D, O, f)By default, f is gausshermite from the FastGaussQuadrature package. The gausshermite quadrature rule is used for computing integrals over R^D with integrants of the form g(x) * exp(-|x|^2). To approximate such an integral, computedot( weigths, g(nodes) )Note that when integrating against exp(-|x|^2) instead of the standard Gaussian density, the nodes and weigths are rescaled compared to e.g. the source of the Kronrod-Patterson nodes mentioned below.This package offers another node generating function for \"Gaussian\" integrals, kpn, for the nested Kronrod-Patterson nodes. When the 1D nodes are nested, the higher dimensional sparse grids contain fewer points.The easy extension of 1D nodes (where the number of nodes also grows much faster) is by tensor products. This is available by the function tensorgrid that takes the same inputs as sparsegrid."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "The sparse grid quadrature rules are described in e.g.Thomas Gerstner, Michael Griebel, \"Numerical integration using sparse grids\", Numerical Algorithms, 1998, 209–232.DOI: 10.1023/A:1019129717644Florian Heiss, Victor Winschel, \"Likelihood approximation by numerical integration on sparse grids\", Journal of Econometrics, 2008, vol. 144, pp. 62–80.DOI: 10.1016/j.jeconom.2007.12.004Vesa Kaarnioja, \"Smolyak Quadrature\", Master\'s thesis, University of Helsinki, 2013.The Matlab scripts released in connection with the paper by Heiss & Winschel have also served as an inspiration in the implementation.  These are found at http://www.sparse-grids.de. Note that there are some disagreements between these Matlab scripts and the paper; the Matlab scripts are correct, as confirmed by testing.The algorithm for computing the integer D-vectors with constant 1-norm is found in e.g. Kaarnioja\'s thesis as Algorithm 1.11.The nested nodes are obtained from the sparse-grids web page."
},

{
    "location": "#ToDos-1",
    "page": "Readme",
    "title": "ToDos",
    "category": "section",
    "text": "At some point methods for computing nested nodes may be implemented using techniques from e.g.Sanjay Mehrotra, David Papp, \"Generating nested quadrature formulas for general weight functions with known moments\"arXiv: 1203.1554 [math.NA]"
},

{
    "location": "autodocs/#SparseGrids.combvec",
    "page": "Docstrings",
    "title": "SparseGrids.combvec",
    "category": "function",
    "text": "combvec( vecs::Array{Any} ) -> Matrix\n\nCounterpart of Matlab\'s combvec: Creates all combinations of vectors in vecs, an array of vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SparseGrids.kpn",
    "page": "Docstrings",
    "title": "SparseGrids.kpn",
    "category": "function",
    "text": "kpn( D::Int ) -> nodes, weights\n\nReturn the Konrod-Patterson nodes and weights of accuracy D as vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SparseGrids.listNdq",
    "page": "Docstrings",
    "title": "SparseGrids.listNdq",
    "category": "function",
    "text": "listNdq(D::Int, q::Int)\n\nFind elements in the set \n\nN_q^D = i in N^D  sum(i) = q\n\nThe algorithm and the formula for computing the number of elements in this set is found in the thesis mentioned in the README\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SparseGrids.sparsegrid",
    "page": "Docstrings",
    "title": "SparseGrids.sparsegrid",
    "category": "function",
    "text": "sparsegrid( D::Int, k::Int, f::Function=gausshermite; sym::Bool=true )\n\nComputation of sparse grid nodes and the associated weights\n\nD : Dimension of integrant\nk : Order of quadrature rule\nf : Function generating 1D nodes and weights – in that order – for an integer input\nsym : Boolean variable determining if the nodes should be symmetrized\n\nIf the nodes are supposed to be symmetric (as those in the Gauss-Hermite rule), they should be so in order to correctly identify multiply occuring nodes in the union of sparse sets\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SparseGrids.tensorgrid",
    "page": "Docstrings",
    "title": "SparseGrids.tensorgrid",
    "category": "function",
    "text": "tensorgrid( N::Vector, W::Vector, D::Int )\n\nCompute tensor grid of `N` nodes and corresponding weights `W` for `D` dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SparseGrids.uniquenodes",
    "page": "Docstrings",
    "title": "SparseGrids.uniquenodes",
    "category": "function",
    "text": "uniquenodes(nodes::Matrix, weights::Vector)\n\nFind unique nodes and sum the weights of the identical nodes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SparseGrids.KPN_nodesSparseGrids.KPN_weightsSparseGrids.SparseGridsSparseGrids.combvecSparseGrids.evalSparseGrids.includeSparseGrids.kpnSparseGrids.listNdqSparseGrids.sortcolsidxSparseGrids.sparsegridSparseGrids.symmetrize!SparseGrids.tensorgridSparseGrids.uniquenodes"
},

]}
