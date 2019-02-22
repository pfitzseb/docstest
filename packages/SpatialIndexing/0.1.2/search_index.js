var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SpatialIndexing.jl-1",
    "page": "Readme",
    "title": "SpatialIndexing.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)SpatialIndexing package provides the tools for efficient in-memory indexing of spatial data in Julia (http://julialang.org/)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "using Pkg; Pkg.add(\"SpatialIndexing\")from Julia REPL."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": ""
},

{
    "location": "#R-tree-1",
    "page": "Readme",
    "title": "R-tree",
    "category": "section",
    "text": "R-tree organizes data into hierarchical structure and ensures that:minimal bounding rectangles (MBRs) of the nodes (rectangles that encompass all data elements in the subtree) stay compact,\nMBRs of the nodes from the same R-tree level have minimal overlap with each other.The key benefit of R-tree is its ability to rebalance itself and maintain efficient structure while handling dynamic data (massive insertions and deletions).SpatialIndexing provides RTree type that supports:different R-tree variants (classic R-tree,R*-tree, linear and quadratic node splits)insert!(tree, item), delete!(tree, item) for element-wise insertion and deletion\nbulk-loading of data using Overlap-minimizing Top-down (OMT) approach (load!(tree, data))\nsubtract!(tree, reg) for removing data within specified region reg\nfindfirst(tree, reg, [id]), contained_in(tree, reg) and intersects_with(tree, reg) spatial queries"
},

{
    "location": "#Simple-Spatial-Index-1",
    "page": "Readme",
    "title": "Simple Spatial Index",
    "category": "section",
    "text": "SimpleSpatialIndex stores all data elements in a vector. So, while insertion of new data takes constant time, the time of spatial searches grows linearly with the number of elements. This spatial index is intended as a reference implementation for benchmarking and not recommended for production usage.TODO"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "TODOexamples folder contains spiral.jl and pareto.jl examples of using R-tree for storing spatial data.(Image: R*-tree of 10000 random points (sequential insertions))(Image: R*-tree of 3D Pareto Front (1233 of 100000 points; bulk-load))"
},

{
    "location": "#See-also-1",
    "page": "Readme",
    "title": "See also",
    "category": "section",
    "text": "Other Julia packages for spatial data:LibSpatialIndex.jl(libspatialindex wrapper)NearestNeighbors.jl\nRegionTrees.jl\nLSH.jl"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "A.Guttman, “R-Trees: A Dynamic Index Structure for Spatial Searching” Proc. 1984 ACM-SIGMOD Conference on Management of Data (1985), pp.47-57.\nN. Beckmann, H.P. Kriegel, R. Schneider, B. Seeger, \"The R*-tree: an efficient and robust access method for points and rectangles\" Proc. 1990 ACM SIGMOD international conference on Management of data (1990), p.322\nT. Lee and S. Lee, \"OMT: Overlap Minimizing Top-down Bulk Loading Algorithm for R-tree\", CAiSE Short Paper Proceedings (2003) paper"
},

{
    "location": "autodocs/#SpatialIndexing.AbstractPool",
    "page": "Docstrings",
    "title": "SpatialIndexing.AbstractPool",
    "category": "type",
    "text": "Base class for implementating the pool of T objects. The pool allows to reduce the stress on GC by collecting the unneeded objects (release!(pool, obj)) and reusing them later (acquire!(pool)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.Branch",
    "page": "Docstrings",
    "title": "SpatialIndexing.Branch",
    "category": "type",
    "text": "R-Tree node for levels above 1 (non-Leaf).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.HasID",
    "page": "Docstrings",
    "title": "SpatialIndexing.HasID",
    "category": "type",
    "text": "Type trait for checking id() method support. If type V has this trait (idtype(V) returns HasID{K}), then id(v::V) should return a unique identifier for v of type K. If V doesn\'t have this trait, idtype(V) returns HasNoID.\n\nIf available, SpatialIndex{T,N,V} uses unique identifiers of V alongside spatial indexing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.HasMBR",
    "page": "Docstrings",
    "title": "SpatialIndexing.HasMBR",
    "category": "type",
    "text": "Type trait for checking mbr() method support. If type V has this trait (mbrtype(V) returns HasMBR{Rect{T,N}}), then mbr(v::V) should return a minimal bounding rectangle (MBR) Rect{T,N} that contains v. If V doesn\'t have this trait, mbrtype(V) returns HasNoMBR.\n\nSpatialIndex{T,N,V} requires that V provides mbr() method that returns Rect{T,N}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.Leaf",
    "page": "Docstrings",
    "title": "SpatialIndexing.Leaf",
    "category": "type",
    "text": "R-Tree leaf (level 1 node). Its children are data elements of type V.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.Node",
    "page": "Docstrings",
    "title": "SpatialIndexing.Node",
    "category": "type",
    "text": "Base class for RTree node (Branch or Leaf).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.NodePool",
    "page": "Docstrings",
    "title": "SpatialIndexing.NodePool",
    "category": "type",
    "text": "Pool of the T1 R-tree nodes (Leaf or Branch) with T2 children (Branch, Leaf or Elem). It allows reusing the deleted nodes and reduce the stress on GC.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.Point",
    "page": "Docstrings",
    "title": "SpatialIndexing.Point",
    "category": "type",
    "text": "N-dimensional point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.Pool",
    "page": "Docstrings",
    "title": "SpatialIndexing.Pool",
    "category": "type",
    "text": "The default AbstarctPool implementation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.QueryKind",
    "page": "Docstrings",
    "title": "SpatialIndexing.QueryKind",
    "category": "type",
    "text": "Specifies the kind of spatial data query.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.QueryMatch",
    "page": "Docstrings",
    "title": "SpatialIndexing.QueryMatch",
    "category": "type",
    "text": "Specifies the result of spatial data query.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.RTree",
    "page": "Docstrings",
    "title": "SpatialIndexing.RTree",
    "category": "type",
    "text": "R-Tree: N-dimensional spatial data index [guttman84].\n\nR-tree groups data elements (V) into leaves (Leaf) and leaves into branches (Branch). It uses various heuristics to ensure that the minimal bounding rectangles (MBRs) of the nodes (Rect{T,N} rectangles that encompass the data elements attached to these nodes) stay compact and that the MBRs of the nodes that are on the same level of R-tree hierarchy have minimal overlap with each other. This property makes R-trees efficient for spatial queries.\n\nTo facilitate spatial indexing, the V data elements need to support HasMBR trait (i.e. define mbrtype(V) and mbr(v::V) methods) and, optionally, HasID trait (via idtype(V) and id(v::V) methods). mbr(v::V) should return minimal bounding rectangle (MBR) of type Rect{T,N} that contains v. SpatialElem{T,N,D} type provides generic implementation of spatial data element that explicitly stores id, mbr and data object of type D and implements HasMBR and HasID traits.\n\nParameters\n\nThe behaviour of RTree is defined by the parameters supplied at its creation:\n\nT: the numeric type for the spatial coordinate\nN: the number of spatial dimensions\nvariant: one of RTreeLinear, RTreeQuadratic, or RTreeStar (default)\ntight_mbrs: recalculate node MBR when the child is removed (default is true)\nbranch_capacity: capacity of branch nodes (default is 100)\nleaf_capacity: capacity of leaf nodes (default is 100)\nleafpool_capacity: How many detached 1st level nodes (leaves) should be kept for reuse (default is 100)\ntwigpool_capacity: How many detached 2nd level nodes should be kept for reuse (default is 100)\nbranchpool_capacity: How many other (level > 2) detached branch nodes should be kept for reuse (default is 100)\nnearmin_overlap: How many candidates to consider when identifying the node with minimal overlap (default is 32)\nfill_factor: How much should the node be filled (fraction of its capacity) after splitting (default is 0.7)\nsplit_factor: How much can the sizes of the two nodes differ after splitting (default is 0.4)\nreinsert_factor: How much should the node be underfilled (fraction of its capacity) to consider removing it and redistributing its children to other nodes (default is 0.3)\n\nPerformance\n\nThe nodes in R-tree have limited capacity (maximual number of children) specified at RTree creation (leaf_capacity and branch_capacity). Larger capacities results in shorter trees, but they time required to locate the specific spatial region grows linearly with the capacity.\n\nReferences\n\n[guttman84] “R-Trees: A Dynamic Index Structure for Spatial Searching”     A. Guttman, Proc. 1984 ACM-SIGMOD Conference on Management of     Data (1985), 47-57. [beckmann90] \"The R*-tree: an efficient and robust access method for points and rectangles\"     N. Beckmann, H.P. Kriegel, R. Schneider, B. Seeger, Proc. 1990 ACM SIGMOD     international conference on Management of data (1990), p.322\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.RTreeVariant",
    "page": "Docstrings",
    "title": "SpatialIndexing.RTreeVariant",
    "category": "type",
    "text": "R-Tree variants.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.Rect",
    "page": "Docstrings",
    "title": "SpatialIndexing.Rect",
    "category": "type",
    "text": "Rectangular region constrained by low[i]...high[i] in each of N dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.Region",
    "page": "Docstrings",
    "title": "SpatialIndexing.Region",
    "category": "type",
    "text": "Base abstract class for implementing regions in N-dimensional space with dimensions of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.SimpleSpatialIndex",
    "page": "Docstrings",
    "title": "SpatialIndexing.SimpleSpatialIndex",
    "category": "type",
    "text": "Vector-based SpatialIndex. While insertion is O(1), the search is O(N).\n\nGenerally should not be used, except for performance comparisons or when the number of stored elements is expected to be very small (<100).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.SpatialElem",
    "page": "Docstrings",
    "title": "SpatialIndexing.SpatialElem",
    "category": "type",
    "text": "Simple N-dimensional spatial data element that stores values of type V and supports HasMBR{Rect{T,N}} and HasID{K} (if K is not Nothing) traits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.SpatialIndex",
    "page": "Docstrings",
    "title": "SpatialIndexing.SpatialIndex",
    "category": "type",
    "text": "Base abstract class for spatial indexing of elements of type V in N-dimensional space with dimensions of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.SpatialIndexException",
    "page": "Docstrings",
    "title": "SpatialIndexing.SpatialIndexException",
    "category": "type",
    "text": "SpatialIndex-related exception raised within Julia\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.SpatialQueryIterator",
    "page": "Docstrings",
    "title": "SpatialIndexing.SpatialQueryIterator",
    "category": "type",
    "text": "Base abstract class for implementing spatial queries in N-dimensional space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.area",
    "page": "Docstrings",
    "title": "SpatialIndexing.area",
    "category": "function",
    "text": "area(a::Region{T,N}) where {T,N}\n\nN-dimensional \"area\" (volume etc) of a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.combine",
    "page": "Docstrings",
    "title": "SpatialIndexing.combine",
    "category": "function",
    "text": "combine(a::Region{T,N}, b::Region{T,N}) where {T,N}\n\nMBR that contains both a and b regions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.contained_in",
    "page": "Docstrings",
    "title": "SpatialIndexing.contained_in",
    "category": "function",
    "text": "contained_in(index::SpatialIndex, region::Region)\n\nGet iterator for index elements contained in region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.contains",
    "page": "Docstrings",
    "title": "SpatialIndexing.contains",
    "category": "function",
    "text": "contains(a::Region{T,N}, b::Region{T,N}) where {T,N}\n\nCheck whether a contains b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.empty",
    "page": "Docstrings",
    "title": "SpatialIndexing.empty",
    "category": "function",
    "text": "empty(::Type{T}) where T<:Region\n\nGenerate empty (uninitialized) region of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.intersects",
    "page": "Docstrings",
    "title": "SpatialIndexing.intersects",
    "category": "function",
    "text": "intersects(a::Region{T,N}, b::Region{T,N}) where {T,N}\n\nCheck whether a intersects with b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.intersects_with",
    "page": "Docstrings",
    "title": "SpatialIndexing.intersects_with",
    "category": "function",
    "text": "intersects_with(index::SpatialIndex, region::Region)\n\nGet iterator for index elements intersecting with region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.isvalid",
    "page": "Docstrings",
    "title": "SpatialIndexing.isvalid",
    "category": "function",
    "text": "isvalid(a::Region)\n\nCheck that the parameters of a are valid and it defines a proper region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.load!",
    "page": "Docstrings",
    "title": "SpatialIndexing.load!",
    "category": "function",
    "text": "load!(tree::RTree{T,N,V}, data::Any;\n      convertel = identity, method = :OMT,\n      leaf_fill = capacity(Leaf, tree),\n      branch_fill::Tuple{Integer, Integer} = omt_branch_fill(tree)) where {T,N,V}\n\nBulk-load data into tree.\n\ntree: an empty R-tree for storing elements of type V\ndata: iterable container with the elements to put into tree\nconvertel: function to convert elements of data to type V\nmethod: bulk-loading method\nleaf_fill: the average number of elements to store in R-tree leaves (1-level nodes)\nbranch_fill: the tuple of the number of slices and the number of subtrees per slice in the R-tree nodes (level ≥ 1).\n\nThe supported bulk-loading methods are:\n\n:OMT: Overlap Minimizing Top-down method by Taewon Lee and Sukho Lee\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.perimeter",
    "page": "Docstrings",
    "title": "SpatialIndexing.perimeter",
    "category": "function",
    "text": "perimeter(a::Region)\n\nThe sum of the a sides.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.subtract!",
    "page": "Docstrings",
    "title": "SpatialIndexing.subtract!",
    "category": "function",
    "text": "subtract!(tree::RTree, reg::Region)\n\nSubtracts the region from the tree, i.e. removes all elements within region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpatialIndexing.touches",
    "page": "Docstrings",
    "title": "SpatialIndexing.touches",
    "category": "function",
    "text": "touches(a::Rect{T,N}, b::Rect{T,N}) where {T,N}\n\nCheck whether a and b touch (i.e. any low side touches low or high touches high).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SpatialIndexing.AbstractPoolSpatialIndexing.BranchSpatialIndexing.BranchPoolSpatialIndexing.HasIDSpatialIndexing.HasMBRSpatialIndexing.HasNoIDSpatialIndexing.HasNoMBRSpatialIndexing.LeafSpatialIndexing.LeafPoolSpatialIndexing.NodeSpatialIndexing.NodePoolSpatialIndexing.PointSpatialIndexing.PoolSpatialIndexing.QueryContainedInSpatialIndexing.QueryIntersectsWithSpatialIndexing.QueryKindSpatialIndexing.QueryMatchSpatialIndexing.QueryMatchCompleteSpatialIndexing.QueryMatchPartialSpatialIndexing.QueryNoMatchSpatialIndexing.RTreeSpatialIndexing.RTreeIteratorStateSpatialIndexing.RTreeLinearSpatialIndexing.RTreeQuadraticSpatialIndexing.RTreeQueryIteratorStateSpatialIndexing.RTreeRegionQueryIteratorSpatialIndexing.RTreeStarSpatialIndexing.RTreeVariantSpatialIndexing.RectSpatialIndexing.RegionSpatialIndexing.SimpleSpatialIndexSpatialIndexing.SpatialElemSpatialIndexing.SpatialIndexSpatialIndexing.SpatialIndexExceptionSpatialIndexing.SpatialIndexingSpatialIndexing.SpatialQueryIteratorSpatialIndexing.SubtreeContextSpatialIndexing.TwigPoolSpatialIndexing.__spatial_keyerrorSpatialIndexing._attach!SpatialIndexing._condense!SpatialIndexing._detach!SpatialIndexing._insert!SpatialIndexing._insert!_fullnodeSpatialIndexing._insert!_fullnode_rstarSpatialIndexing._isemptySpatialIndexing._iterateSpatialIndexing._mbr_highSpatialIndexing._mbr_lowSpatialIndexing._nextchildSpatialIndexing._reinsert!SpatialIndexing._release_descendants!SpatialIndexing._replace!SpatialIndexing._split!SpatialIndexing._split!_rstarSpatialIndexing._split!_rtreeSpatialIndexing._splitseedsSpatialIndexing._splitseeds_linearSpatialIndexing._splitseeds_quadraticSpatialIndexing._subtract!SpatialIndexing._updatembr!SpatialIndexing.acquireSpatialIndexing.acquire!SpatialIndexing.areaSpatialIndexing.branchtypeSpatialIndexing.capacitySpatialIndexing.centerSpatialIndexing.checkSpatialIndexing.check_eltype_rtreeSpatialIndexing.check_hasidSpatialIndexing.check_hasmbrSpatialIndexing.childrenSpatialIndexing.choose_subtreeSpatialIndexing.combineSpatialIndexing.combined_areaSpatialIndexing.contained_inSpatialIndexing.containsSpatialIndexing.delete_subtree!SpatialIndexing.dimtypeSpatialIndexing.emptySpatialIndexing.enlargementSpatialIndexing.evalSpatialIndexing.find_least_enlargementSpatialIndexing.find_least_overlapSpatialIndexing.hasparentSpatialIndexing.heightSpatialIndexing.idSpatialIndexing.idtraitSpatialIndexing.idtypeSpatialIndexing.includeSpatialIndexing.intersectSpatialIndexing.intersectsSpatialIndexing.intersects_withSpatialIndexing.isequal_rtreeSpatialIndexing.isoverflowSpatialIndexing.isvalidSpatialIndexing.leaftypeSpatialIndexing.levelSpatialIndexing.load!SpatialIndexing.load_omt!SpatialIndexing.mbrSpatialIndexing.mbrtraitSpatialIndexing.mbrtypeSpatialIndexing.nelementsSpatialIndexing.newelemSpatialIndexing.node_capacitySpatialIndexing.nodetypeSpatialIndexing.omt_branch_fillSpatialIndexing.omt_subtreeSpatialIndexing.overlap_areaSpatialIndexing.parentSpatialIndexing.perimeterSpatialIndexing.pos_in_parentSpatialIndexing.querykindSpatialIndexing.regiontypeSpatialIndexing.releaseSpatialIndexing.release!SpatialIndexing.setoverflow!SpatialIndexing.should_visitSpatialIndexing.sqrdistanceSpatialIndexing.subtract!SpatialIndexing.syncmbr!SpatialIndexing.touchesSpatialIndexing.variant"
},

]}
