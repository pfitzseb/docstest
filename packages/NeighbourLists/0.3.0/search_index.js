var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NeighbourLists.jl-1",
    "page": "Readme",
    "title": "NeighbourLists.jl",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)A Julia port and restructuring of the neighbourlist implemented in matscipy (with the authors\' permission). Single-threaded, the Julia version is faster than matscipy for small systems, probably due  to the overhead of dealing with Python, but on large systems it is tends to be slower (up to around a factor 2 for 100,000 atoms). However, the Julia version is also multi-threaded, which makes up for that (but otherwise scales poorly).The package is intended to be used with JuLIP.jl, but can be used as stand-alone."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "Pkg.add(\"NeighbourLists\")\nusing NeighbourLists\n?PairListUntil I get around to writing some documentation, look at the tests and JuLIP.jl on how to use this package. Or just open an issue and ask."
},

{
    "location": "autodocs/#NeighbourLists.CellList",
    "page": "Docstrings",
    "title": "NeighbourLists.CellList",
    "category": "type",
    "text": "CellList : store atoms in cells / bins. Mostly used internally to construct PairLists.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.PairList",
    "page": "Docstrings",
    "title": "NeighbourLists.PairList",
    "category": "type",
    "text": "PairList stores a neighbourlist as a list of pairs\n\nPairList(X, cutoff, cell, pbc)\nPairList(nlist::CellList)\n\nwhere\n\nX : positions, either as 3 x N matrix or as Vector{SVec}\ncutoff : positive real value\ncell : 3 x 3 matrix, with rows denoting the cell vectors\npbc : 3-tuple or array, storing periodicity information\n\nKw-args:\n\nint_type : default is Int\nstore_first : whether to store the array of first indices, default true\nsorted : whether to sort the j vector, default false\n\nPairList fields\n\nX, cutoff, i, j, r, R, first, where\n\n(i[n], j[n]) denotes the indices of a neighbour pair, r[n] the distance between those atoms, R[n] the vectorial distance, note this is identical to X[i[n]]-X[j[n]] without periodic b.c.s, but with periodic boundary conditions it is different. first[m] contains the index to the first (i[n], j[n]) for which i[n] == first[m], i.e., (j, first) essentially defines a compressed column storage of the adjacancy matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists._find_next_",
    "page": "Docstrings",
    "title": "NeighbourLists._find_next_",
    "category": "function",
    "text": "function _find_next_(j, n, first)\n\nj : array of neighbour indices\nn : current site index\nfirst : array of first indices\n\nreturn the first index first[n] <= m < first[n+1] such that j[m] > n; and returns 0 if no such index exists\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists._fix_cell_",
    "page": "Docstrings",
    "title": "NeighbourLists._fix_cell_",
    "category": "function",
    "text": "_fix_cell_(X::Vector{SVec{T}}, C::SMat{T}, pbc)\n\nproduces new X, C such that PBC are respected, but all positions are inside the cell. This Potentially involves\n\nwrapping atom positions in the pbc directions\nshifting atom positions in the non-pbc directions\nenlarging the cell\n\nIf either X or C are modified, then they will be copied.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.bin_trunc",
    "page": "Docstrings",
    "title": "NeighbourLists.bin_trunc",
    "category": "function",
    "text": "Map i back to the interval [0,n) by assigning edge value if outside interval\n\n\n\n\n\napply bin_trunc only if open bdry\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.bin_wrap",
    "page": "Docstrings",
    "title": "NeighbourLists.bin_wrap",
    "category": "function",
    "text": "Map i back to the interval [0,n) by shifting by integer multiples of n\n\n\n\n\n\napply bin_wrap only if periodic bdry\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.bin_wrap_or_trunc",
    "page": "Docstrings",
    "title": "NeighbourLists.bin_wrap_or_trunc",
    "category": "function",
    "text": "applies bintrunc to open bdry and binwrap to periodic bdry\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.get_first",
    "page": "Docstrings",
    "title": "NeighbourLists.get_first",
    "category": "function",
    "text": "get_first(i::Vector{TI}, nat::Integer) -> first::Vector{TI} where TI <: Integer\n\nAssumes that i is sorted in ascending order. For n = 1, . . ., nat, first[n] will be the index to the first element of i with value n. Further, first[nat+1] will be length(i) + 1.\n\nIf first[n] == first[n+1] then this means that i contains no element n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.maptosites_d_inner!",
    "page": "Docstrings",
    "title": "NeighbourLists.maptosites_d_inner!",
    "category": "function",
    "text": "mapreduce_antisym!{T}(out::AbstractVector{SVec{T}}, df, it::PairIterator{T})\n\nanti-symmetric variant of mapreduce!{S, T}(out::AbstractVector{S}, ...), summing only over bonds (i,j) with i < j and adding f(Rij) to site j and -f(Rij) to site i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.maptosites_inner!",
    "page": "Docstrings",
    "title": "NeighbourLists.maptosites_inner!",
    "category": "function",
    "text": "mapreduce_sym!{S, T}(out::AbstractVector{S}, f, it::PairIterator{T})\n\nsymmetric variant of mapreduce!{S, T}(out::AbstractVector{S}, ...), summing only over bonds (i,j) with i < j and adding f(R_ij) to both sites i, j.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.max_neigs",
    "page": "Docstrings",
    "title": "NeighbourLists.max_neigs",
    "category": "function",
    "text": "max_neigs(nlist::PairList) -> Integer\n\nreturns the maximum number of neighbours that any atom in the neighbourlist has.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.nbodies",
    "page": "Docstrings",
    "title": "NeighbourLists.nbodies",
    "category": "function",
    "text": "nbodies(N, nlist::PairList)\n\ncreates an N-body iterator, e.g., nbodies(3, nlist) will create an iterator over permutation-symmetric 3-body terms. Use mapreduce_sym! and map_reduce_sym_d! to carry out the iterations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.position_to_cell_index",
    "page": "Docstrings",
    "title": "NeighbourLists.position_to_cell_index",
    "category": "function",
    "text": "Map particle position to a (cartesian) cell index\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NeighbourLists.sort_neigs!",
    "page": "Docstrings",
    "title": "NeighbourLists.sort_neigs!",
    "category": "function",
    "text": "sort_neigs!(j, r, R, first)\n\nsorts each sub-range of j corresponding to one site  in ascending order and applies the same permutation to r, R, S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NeighbourLists.AbstractIteratorNeighbourLists.CellListNeighbourLists.MAX_THREADSNeighbourLists.NBodyIteratorNeighbourLists.NeighbourListsNeighbourLists.PairIteratorNeighbourLists.PairListNeighbourLists.SMatNeighbourLists.SVecNeighbourLists.SiteIteratorNeighbourLists._celllist_NeighbourLists._find_neighbours_!NeighbourLists._find_next_NeighbourLists._fix_cell_NeighbourLists._itemNeighbourLists._mt_map_!NeighbourLists._pairlist_NeighbourLists._sub2indNeighbourLists.analyze_cellNeighbourLists.bin_truncNeighbourLists.bin_wrapNeighbourLists.bin_wrap_or_truncNeighbourLists.evalNeighbourLists.get_firstNeighbourLists.incNeighbourLists.includeNeighbourLists.lengthsNeighbourLists.maptosites!NeighbourLists.maptosites_d!NeighbourLists.maptosites_d_inner!NeighbourLists.maptosites_inner!NeighbourLists.max_neigsNeighbourLists.mt_splitNeighbourLists.mt_split_interlacedNeighbourLists.nbodiesNeighbourLists.npairsNeighbourLists.nsitesNeighbourLists.pairsNeighbourLists.position_to_cell_indexNeighbourLists.set_maxthreads!NeighbourLists.setup_mtNeighbourLists.siteNeighbourLists.sitesNeighbourLists.sort_neigs!"
},

]}
