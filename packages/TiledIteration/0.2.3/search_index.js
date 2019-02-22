var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TiledIteration-1",
    "page": "Readme",
    "title": "TiledIteration",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This Julia package handles some of the low-level details for writing cache-efficient, possibly-multithreaded code for multidimensional arrays. A \"tile\" corresponds to a chunk of a larger array, typically a region that is large enough to encompass any \"local\" computations you need to perform; some of these computations may require temporary storage."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This package offers two basic kinds of functionality: the management of temporary buffers for processing on tiles, and the iteration over disjoint tiles of a larger array."
},

{
    "location": "#Iteration-1",
    "page": "Readme",
    "title": "Iteration",
    "category": "section",
    "text": "To iterate over disjoint tiles of a larger array, use a TileIterator:using TiledIteration\n\nA = rand(1000,1000);   # our big array\nfor tileaxs in TileIterator(axes(A), (128,8))\n    @show tileaxs\nendThis producestileaxs = (1:128,1:8)\ntileaxs = (129:256,1:8)\ntileaxs = (257:384,1:8)\ntileaxs = (385:512,1:8)\ntileaxs = (513:640,1:8)\ntileaxs = (641:768,1:8)\ntileaxs = (769:896,1:8)\ntileaxs = (897:1000,1:8)\ntileaxs = (1:128,9:16)\ntileaxs = (129:256,9:16)\ntileaxs = (257:384,9:16)\ntileaxs = (385:512,9:16)\n...You can see that the total axes range is split up into chunks, which are of size (128,8) except at the edges of A. Naturally, these axes serve as the basis for processing individual chunks of the array.As a further example, suppose you\'ve started julia with JULIA_NUM_THREADS=4; thenfunction fillid!(A, tilesz)\n    tileinds_all = collect(TileIterator(axes(A), tilesz))\n    Threads.@threads for i = 1:length(tileinds_all)\n        tileaxs = tileinds_all[i]\n        A[tileaxs...] .= Threads.threadid()\n    end\n    A\nend\n\nA = zeros(Int, 8, 8)\nfillid!(A, (2,2))would yield8×8 Array{Int64,2}:\n 1  1  2  2  3  3  4  4\n 1  1  2  2  3  3  4  4\n 1  1  2  2  3  3  4  4\n 1  1  2  2  3  3  4  4\n 1  1  2  2  3  3  4  4\n 1  1  2  2  3  3  4  4\n 1  1  2  2  3  3  4  4\n 1  1  2  2  3  3  4  4See also \"EdgeIterator\" below."
},

{
    "location": "#Determining-the-chunk-size-1",
    "page": "Readme",
    "title": "Determining the chunk size",
    "category": "section",
    "text": "Stencil computations typically require \"padding\" values, so the inputs to a computation may be of a different size than the resulting outputs. Naturally, you can set the tile size manually; a simple convenience function, padded_tilesize, attempts to pick reasonable choices for you depending on the size of your kernel (stencil) and element type you\'ll be using:julia> padded_tilesize(UInt8, (3,3))\n(768,18)\n\njulia> padded_tilesize(UInt8, (3,3), 4)  # we want 4 of these to fit in L1 cache at once\n(512,12)\n\njulia> padded_tilesize(Float64, (3,3))\n(96,18)\n\njulia> padded_tilesize(Float32, (3,3,3))\n(64,6,6)"
},

{
    "location": "#Allocating-and-managing-temporary-storage-1",
    "page": "Readme",
    "title": "Allocating and managing temporary storage",
    "category": "section",
    "text": "To allocate temporary storage while working with tiles, use TileBuffer:julia> tileaxs = (-1:15, 0:7)  # really this might have come from TileIterator\n\njulia> buf = TileBuffer(Float32, tileaxs)\nTiledIteration.TileBuffer{Float32,2,2} with indices -1:15×0:7:\n 0.0  0.0          2.38221f-44  0.0          0.0          0.0          9.3887f-44   0.0\n 0.0  1.26117f-44  0.0          0.0          0.0          8.26766f-44  0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          6.02558f-44  0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          7.28675f-44  0.0          0.0          0.0\n 0.0  1.54143f-44  0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          9.94922f-44  0.0\n 0.0  0.0          0.0          0.0          0.0          8.82818f-44  0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          9.10844f-44  0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          1.03696f-43  0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0This returns an uninitialized buffer for use over the indicated domain. You can reuse this same storage for the next tile, even if the tile is smaller because it corresponds to the edge of the original array:julia> pointer(buf)\nPtr{Float32} @0x00007f79131fd550\n\njulia> buf = TileBuffer(buf, (16:20, 0:7))\nTiledIteration.TileBuffer{Float32,2,2} with indices 16:20×0:7:\n 0.0  0.0  0.0  0.0          0.0          0.0  0.0          0.0\n 0.0  0.0  0.0  0.0          0.0          0.0  0.0          0.0\n 0.0  0.0  0.0  0.0          1.54143f-44  0.0  0.0          0.0\n 0.0  0.0  0.0  1.26117f-44  0.0          0.0  0.0          0.0\n 0.0  0.0  0.0  0.0          0.0          0.0  2.38221f-44  0.0\n\njulia> pointer(buf)\nPtr{Float32} @0x00007f79131fd550When you use it again at the top of the next block of columns, it returns to its original size while still reusing the same memory:julia> buf = TileBuffer(buf, (-1:15, 8:15))\nTiledIteration.TileBuffer{Float32,2,2} with indices -1:15×8:15:\n 0.0  0.0          2.38221f-44  0.0          0.0          0.0          9.3887f-44   0.0\n 0.0  1.26117f-44  0.0          0.0          0.0          8.26766f-44  0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          6.02558f-44  0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          7.28675f-44  0.0          0.0          0.0\n 0.0  1.54143f-44  0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          9.94922f-44  0.0\n 0.0  0.0          0.0          0.0          0.0          8.82818f-44  0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          9.10844f-44  0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          1.03696f-43  0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n 0.0  0.0          0.0          0.0          0.0          0.0          0.0          0.0\n\njulia> pointer(buf)\nPtr{Float32} @0x00007f79131fd550"
},

{
    "location": "#EdgeIterator-1",
    "page": "Readme",
    "title": "EdgeIterator",
    "category": "section",
    "text": "When performing stencil operations, oftentimes the edge of the array requires special treatment. Several approaches to handling the edges (adding explicit padding, or executing special code just when on the boundaries) can slow your algorithm down because of extra steps or branches.This package helps support implementations which first handle the \"interior\" of an array (for example using TiledIterator over just the interior) using a \"fast path,\" and then handle just the edges by a (possibly) less carefully optimized algorithm. The key component of this is EdgeIterator:outerrange = CartesianIndices((-1:4, 0:3))\ninnerrange = CartesianIndices(( 1:3, 1:2))\njulia> for I in EdgeIterator(outerrange, innerrange)\n           @show I\n       end\nI = CartesianIndex(-1, 0)\nI = CartesianIndex(0, 0)\nI = CartesianIndex(1, 0)\nI = CartesianIndex(2, 0)\nI = CartesianIndex(3, 0)\nI = CartesianIndex(4, 0)\nI = CartesianIndex(-1, 1)\nI = CartesianIndex(0, 1)\nI = CartesianIndex(4, 1)\nI = CartesianIndex(-1, 2)\nI = CartesianIndex(0, 2)\nI = CartesianIndex(4, 2)\nI = CartesianIndex(-1, 3)\nI = CartesianIndex(0, 3)\nI = CartesianIndex(1, 3)\nI = CartesianIndex(2, 3)\nI = CartesianIndex(3, 3)\nI = CartesianIndex(4, 3)The time required to visit these edge sites is on the order of the number of edge sites, not the order of the number of sites encompassed by outerrange, and consequently is efficient."
},

{
    "location": "autodocs/#TiledIteration.EdgeIterator",
    "page": "Docstrings",
    "title": "TiledIteration.EdgeIterator",
    "category": "type",
    "text": "EdgeIterator(outer, inner)\n\nA Cartesian iterator that efficiently visits sites that are in outer but not in inner. This can be useful for calculating edge values that may require special treatment or boundary conditions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TiledIteration.TileBuffer",
    "page": "Docstrings",
    "title": "TiledIteration.TileBuffer",
    "category": "type",
    "text": "TileBuffer(a, inds::Indices) -> v\n\nReturn a buffer-view v whose indices match inds, using the array a for storage. inds does not necessarily have to match the size of a (which allows tiles to be of different sizes, e.g., at the edges).\n\n\n\n\n\nTileBuffer(T, inds::Indices) -> v\n\nReturn a TileBuffer, allocating a new backing array of element type T and size determined by inds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TiledIteration.padded_tilesize",
    "page": "Docstrings",
    "title": "TiledIteration.padded_tilesize",
    "category": "function",
    "text": "padded_tilesize(T::Type, kernelsize::Dims, [ncache=2]) -> tilesize::Dims\n\nCalculate a suitable tile size to approximately maximize the amount of productive work, given a stencil of size kernelsize. The element type of the array is T. Optionally specify ncache, the number of such arrays that you\'d like to have fit simultaneously in L1 cache.\n\nThis favors making the first dimension larger, since the first dimension corresponds to individual cache lines.\n\nExamples\n\njulia> padded_tilesize(UInt8, (3,3)) (768,18)\n\njulia> padded_tilesize(UInt8, (3,3), 4) (512,12)\n\njulia> padded_tilesize(Float64, (3,3)) (96,18)\n\njulia> padded_tilesize(Float32, (3,3,3)) (64,6,6)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TiledIteration.EdgeIteratorTiledIteration.L1cachesizeTiledIteration.TileBufferTiledIteration.TileIteratorTiledIteration.TiledIterationTiledIteration._getindicesTiledIteration._padded_tilesize_scaleTiledIteration._tileviewTiledIteration.cachelinesizeTiledIteration.ceildivTiledIteration.evalTiledIteration.getindicesTiledIteration.includeTiledIteration.map3TiledIteration.nextedgeitemTiledIteration.padded_tilesizeTiledIteration.rangetype"
},

]}
