var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#TightBinding.set_Lattice-Tuple{Any,Any}",
    "page": "Home",
    "title": "TightBinding.set_Lattice",
    "category": "method",
    "text": "set_Lattice(dim::Integer,vectors::Array{Array{Float64,1},1})\n\nInitialize lattice. We have to call this before making Hamiltonian. dim: Dimension of the system. vector:: Primitive vectors.\n\nExample:\n\n1D system\n\nla1 = set_Lattice(1,[[1.0]])\n\n2D system\n\na1 = [sqrt(3)/2,1/2]\na2 = [0,1]\nla2 = set_Lattice(2,[a1,a2])\n\n3D system\n\na1 = [1,0,0]\na2 = [0,1,0]\na3 = [0,0,1]\nla2 = set_Lattice(3,[a1,a2,a3])\n\n\n\n\n\n"
},

{
    "location": "#TightBinding.jl-1",
    "page": "Home",
    "title": "TightBinding.jl",
    "category": "section",
    "text": "Modules = [TightBinding]"
},

]}
