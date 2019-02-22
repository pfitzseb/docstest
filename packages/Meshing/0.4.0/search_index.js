var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Meshing-1",
    "page": "Readme",
    "title": "Meshing",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package provides meshing algorithms for use on distance fields.Including:Marching Tetrahedra\nMarching Cubes"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Marching Tetrahedra was originally implemented by @twadleigh in Meshes.jl."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Available under the MIT \"Expat\" License, see LICENSE.md"
},

{
    "location": "autodocs/#Meshing.VoxelIndices",
    "page": "Docstrings",
    "title": "Meshing.VoxelIndices",
    "category": "type",
    "text": "Voxel corner and edge indexing conventions\n\n    Z\n    |\n\n    5------5------6              Extra edges not drawn\n   /|            /|              -----------\n  8 |           6 |              - face diagonals\n /  9          /  10                - 13: 1 to 3\n8------7------7   |                 - 14: 1 to 8\n|   |         |   |                 - 15: 1 to 6\n|   1------1--|---2  -- Y           - 16: 5 to 7\n12 /          11 /                  - 17: 2 to 7\n| 4           | 2                   - 18: 4 to 7\n|/            |/                 - body diagonal\n4------3------3                     - 19: 1 to 7\n\n/  X\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing._correct_vertices!",
    "page": "Docstrings",
    "title": "Meshing._correct_vertices!",
    "category": "function",
    "text": "The marchingTetrahedra function returns vertices on the (1-based) indices of the SDF\'s data, ignoring its actual bounds. This function adjusts the vertices in place so that they correspond to points within the SDF bounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.getVertId",
    "page": "Docstrings",
    "title": "Meshing.getVertId",
    "category": "function",
    "text": "Gets the vertex ID, adding it to the vertex dictionary if not already present.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.hasFaces",
    "page": "Docstrings",
    "title": "Meshing.hasFaces",
    "category": "function",
    "text": "Checks if a voxel has faces. Should be false for most voxels. This function should be made as fast as possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.marchingTetrahedra",
    "page": "Docstrings",
    "title": "Meshing.marchingTetrahedra",
    "category": "function",
    "text": "Given a 3D array and an isovalue, extracts a mesh represention of the an approximate isosurface by the method of marching tetrahedra.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.marching_cubes",
    "page": "Docstrings",
    "title": "Meshing.marching_cubes",
    "category": "function",
    "text": "marching_cubes(sdf::SignedDistanceField, [iso = 0.0,] [MT = HomogenousMesh{Point{3,Float64},Face{3,Int}}])\n\nConstruct a HomogenousMesh from a SignedDistanceField using the marching cubes algorithm. This method is faster than Marching Tetrahedra and generates fewer vertices and faces (about 1/4 as many). However it may generate non-manifold meshes, while Marching Tetrahedra guarentees a manifold mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.procVox",
    "page": "Docstrings",
    "title": "Meshing.procVox",
    "category": "function",
    "text": "Processes a voxel, adding any new vertices and faces to the given containers as necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.tetIx",
    "page": "Docstrings",
    "title": "Meshing.tetIx",
    "category": "function",
    "text": "Determines which case in the triangle table we are dealing with\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.vertId",
    "page": "Docstrings",
    "title": "Meshing.vertId",
    "category": "function",
    "text": "Determines a unique integer ID associated with the edge. This is used as a key in the vertex dictionary. It needs to be both unambiguous (no two edges get the same index) and unique (every edge gets the same ID regardless of which of its neighboring voxels is asking for it) in order for vertex sharing to be implemented properly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.vertPos",
    "page": "Docstrings",
    "title": "Meshing.vertPos",
    "category": "function",
    "text": "Assuming an edge crossing, determines the point in space at which it occurs. eps represents the \"bump\" factor to keep vertices away from voxel corners (thereby preventing degeneracies).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.voxEdgeId",
    "page": "Docstrings",
    "title": "Meshing.voxEdgeId",
    "category": "function",
    "text": "Given a sub-tetrahedron case and a tetrahedron edge ID, determines the corresponding voxel edge ID.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Meshing.AbstractMeshingAlgorithmMeshing.MarchingCubesMeshing.MarchingTetrahedraMeshing.MeshingMeshing.VoxelIndicesMeshing._correct_vertices!Meshing.edge_tableMeshing.evalMeshing.getVertIdMeshing.hasFacesMeshing.includeMeshing.isosurfaceMeshing.marchingTetrahedraMeshing.marching_cubesMeshing.procVoxMeshing.tetIxMeshing.tri_tableMeshing.vertIdMeshing.vertPosMeshing.vertex_interpMeshing.voxEdgeId"
},

]}
