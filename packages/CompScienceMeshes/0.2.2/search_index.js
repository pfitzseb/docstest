var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CompScienceMeshes-1",
    "page": "Readme",
    "title": "CompScienceMeshes",
    "category": "section",
    "text": "Geometry types and algorithms for computational science(Image: Build Status) (Image: codecov) (Image: Documentation)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In addition to the dependencies declared in REQUIRE, this package relies for some of its functionality on gmsh. Make sure gmsh is installed and on the system path if you require this functionality."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package provides the geometric framework to facilitated the construction of finite element spaces and the assembly of matrices stemming from the discretisation of local (differential) and global (integral) operators on those finite element spaces.The package roughly contains three components:Meshes: allowing for the (almost) linear construction of connectivity matrices. A default implementation is provided but the algorithms should be easily extendable to user defined mesh structures. It is very common, for example, that mesh data structures contain problem specific information (local elasticity, permittivity, boundary conditions). User can use those enriched structures if they extend a limited number of functions.\nCharts: a concept designed after the differential geometric concept of a chart on a manifold. It allows for the construction of points in Euclidian space from a set of parameters and the other way around.\nNeighborhoods: a concept designed after the derivative of a chart as a map from the parametrising vector space to the tangent space of a point of the manifold. It allows querying for tangents, normal, and the Jacobian determinant for use in integration routines."
},

{
    "location": "autodocs/#CompScienceMeshes.GSubdMesh",
    "page": "Docstrings",
    "title": "CompScienceMeshes.GSubdMesh",
    "category": "function",
    "text": "GSubdMesh(mesh::Mesh)\n\nGiven a linear polygon mesh, construct a data structure for subdivision surfaces\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.Loop_subdivision",
    "page": "Docstrings",
    "title": "CompScienceMeshes.Loop_subdivision",
    "category": "function",
    "text": "Loop_subdivsion(mesh) -> refinement\n\nConstruct a refinement of mesh by Loop subdivision scheme. Every face is subdived into four small faces and use weights to smooth the surface.\n\nOnly defined for 2D meshes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.RectangleChart",
    "page": "Docstrings",
    "title": "CompScienceMeshes.RectangleChart",
    "category": "type",
    "text": "N: universe dimension D: manifold dimension T: coordinate type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.ReferenceSimplex",
    "page": "Docstrings",
    "title": "CompScienceMeshes.ReferenceSimplex",
    "category": "type",
    "text": "ReferenceSimplex{Dimension, CoordType, NumVertices}\n\nThis domain is defined to bootstrap the quadrature generation strategy. The generic definition of numquads on a chart pulls back to the domain. For a limit set of reference domains, explicit quadrature rules are defined. The weights and points are then pushed forward to the configuaration space element over which integration is desired.\n\nFor more details see the implementation in quadpoints.jl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.SegmentedAxis",
    "page": "Docstrings",
    "title": "CompScienceMeshes.SegmentedAxis",
    "category": "type",
    "text": "This type conforms to the mesh interface but is specialised for the case of a segment of the real axis subdived in equally sized intervals. Typical use is a discretisation of the time axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.barycentric",
    "page": "Docstrings",
    "title": "CompScienceMeshes.barycentric",
    "category": "function",
    "text": "Return the barycentric coordinates of mp\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.barycentric_refinement",
    "page": "Docstrings",
    "title": "CompScienceMeshes.barycentric_refinement",
    "category": "function",
    "text": "barycentric refinement(mesh) -> refined_mesh\n\nCreate the mesh obtained by inserting an extra vertex in the barycenters of all cells and recusively creating fine cells by connecting the barycenter of a k-cell to the already constructed refined (k-1)-cells on its boundary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.barytocart",
    "page": "Docstrings",
    "title": "CompScienceMeshes.barytocart",
    "category": "function",
    "text": "barytocart(simplex, uv)\n\nReturns the point in the simplex with barycentric coordinates uv\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.bisecting_refinement",
    "page": "Docstrings",
    "title": "CompScienceMeshes.bisecting_refinement",
    "category": "function",
    "text": "bisecting_refinement(mesh) -> refinement\n\nConstruct a refinement of mesh by inserting a new vertex on every existing edge. Every face is subdived in four small faces.\n\nOnly defined for 2D meshes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.boundary",
    "page": "Docstrings",
    "title": "CompScienceMeshes.boundary",
    "category": "function",
    "text": "boundary(mesh)\n\nReturns the boundary of mesh as a mesh of lower dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.boundingbox",
    "page": "Docstrings",
    "title": "CompScienceMeshes.boundingbox",
    "category": "function",
    "text": "Returns the boundingbox of a patch in terms of its center and halfsize.\n\nfunction boundingbox{U,D,C,N,T}(p::Simplex{U,D,C,N,T}) -> center, halfsize\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.carttobary",
    "page": "Docstrings",
    "title": "CompScienceMeshes.carttobary",
    "category": "function",
    "text": "carttobary(simplex, point) -> barycoords\n\nCompute the barycentric coordinates on \'simplex\' of \'point\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.cellpairs",
    "page": "Docstrings",
    "title": "CompScienceMeshes.cellpairs",
    "category": "function",
    "text": "pairs = cellpairs(mesh, edges, dropjunctionpair=false)\n\nGiven a mesh and set of oriented edges from that mesh (as generated by skeleton),     cellpairs will generate a 2 x K matrix, where K is the number of pairs     and each column contains a pair of indices in the cell array of mesh that have     one of the supplied edges in common.\n\nReturns an array of pairs of indices, each pair corresponding to a pair of adjacent faces.\n\n(If the mesh is oriented, the first row of facepairs will contain indices to the cell     for which the corresponding edge has a positive relative orientation.\n\nIf a edge lies on the boundary of the mesh, and only has one neighboring cell, the     second row of facepairs will contain -k with k the local index of the corresponding     edge in its neighboring triangle.\n\nIf an edge has more than two neighboring cells (i.e. the edge is on a junction),     all possible pairs of cells that have the junction edge in common are supplied. if     dropjunctionpair == false then one of the possible pairs of cells is not recorded.     This is done to avoid the creation of linearly dependent basis functions in the     construction of boundary element methods for Maxwell\'s equations.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.cells",
    "page": "Docstrings",
    "title": "CompScienceMeshes.cells",
    "category": "function",
    "text": "cells(mesh)\n\nReturn an iterable collection containing the cells making up the mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.celltype",
    "page": "Docstrings",
    "title": "CompScienceMeshes.celltype",
    "category": "function",
    "text": "celltype(mesh)\n\nReturns the type of the index tuples stored in the mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.chart",
    "page": "Docstrings",
    "title": "CompScienceMeshes.chart",
    "category": "function",
    "text": "chart(mesh, cell) -> cell_chart\n\nReturn a chart describing the supplied cell of mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.connectivity",
    "page": "Docstrings",
    "title": "CompScienceMeshes.connectivity",
    "category": "function",
    "text": "connectivity(faces, cells, op=sign)\n\nCreate a sparse matrix D of size numcells(cells) by numcells(faces) that contiains the connectivity info of the mesh. In particular D[m,k] is op(r) where r is the local index of face k in cell m. The sign of r is positive or negative depending on the relative orientation of face k in cell m.\n\nFor op=sign, the matrix returned is the classic connectivity matrix, i.e. the graph version of the exterior derivative.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.coordtype",
    "page": "Docstrings",
    "title": "CompScienceMeshes.coordtype",
    "category": "function",
    "text": "coordtype(mesh)\n\nReturns eltype(vertextype(mesh))\n\n\n\n\n\ncoordtype(simplex)\n\nReturn coordinate type used by simplex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.dimension",
    "page": "Docstrings",
    "title": "CompScienceMeshes.dimension",
    "category": "function",
    "text": "dim = dimension(mesh)\n\nReturns the dimension of the mesh. Note that this is the dimension of the cells, not of the surrounding space.\n\n\n\n\n\ndimension(simplex)\n\nReturn the manifold dimension of the simplex.\n\n\n\n\n\ndimension(simplex)\n\nReturn the manifold dimension of the simplex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.euclidianbasis",
    "page": "Docstrings",
    "title": "CompScienceMeshes.euclidianbasis",
    "category": "function",
    "text": "euclidian_basis(type, dim)\n\nReturns the origin and default unit vectors for Euclidian space of dimension dim\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.find_neighbor",
    "page": "Docstrings",
    "title": "CompScienceMeshes.find_neighbor",
    "category": "function",
    "text": "find_neighbor(faces,edges,F,EdgesIndices,orientation,Sedges)\n\nGiven a face find out the neighbor elements (share edge) and vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.flip",
    "page": "Docstrings",
    "title": "CompScienceMeshes.flip",
    "category": "function",
    "text": "flip(cell)\n\nChange the orientation of a cell by interchanging the first to indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.flipmesh!",
    "page": "Docstrings",
    "title": "CompScienceMeshes.flipmesh!",
    "category": "function",
    "text": "flipmesh!(mesh)\n\nChange the orientation of a mesh\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.fliporientation",
    "page": "Docstrings",
    "title": "CompScienceMeshes.fliporientation",
    "category": "function",
    "text": "fliporientation(mesh)\n\nReturns a mesh of opposite orientation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.fliporientation!",
    "page": "Docstrings",
    "title": "CompScienceMeshes.fliporientation!",
    "category": "function",
    "text": "fliporientation(mesh)\n\nChanges the mesh orientation inplace. If non-orientatble, undefined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.inclosure_gpredicate",
    "page": "Docstrings",
    "title": "CompScienceMeshes.inclosure_gpredicate",
    "category": "function",
    "text": "Geometric predicate for determining in log(N) complexity if a the image of a chart is in the closure of mesh γ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.index",
    "page": "Docstrings",
    "title": "CompScienceMeshes.index",
    "category": "function",
    "text": "index(i1, i2, ...) -> ids\n\nCreate a tuple of vertex indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.interior_tpredicate",
    "page": "Docstrings",
    "title": "CompScienceMeshes.interior_tpredicate",
    "category": "function",
    "text": "Creates a predicate that can be used to check wheter an edge is interior to a surface (true) or on its boundary (false). This predicate is based on combinatorics. In particular it expects as argument a tuple of indices pointing into the vertex buffer of mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.intersection",
    "page": "Docstrings",
    "title": "CompScienceMeshes.intersection",
    "category": "function",
    "text": "intersect(chartA, chartB) -> [chart1, chart2, ...]\n\nCompute the intersection of two charts of equal dimension.\n\nCompute an array of charts such that the disjoint union of those charts produces the intersection of the two charts provided as inputs. In particular the sum of integrals over the returned charts will equal the integral over the intersection of the two given charts.\n\n\n\n\n\nintersection(triangleA, triangle B)\n\nATTENTION: currently the implementation for triangles assumes that one of the triangles is contained in the other.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.intersectlines",
    "page": "Docstrings",
    "title": "CompScienceMeshes.intersectlines",
    "category": "function",
    "text": "intersectline(a,b,p,q)\n\nComputes the intersection of the lines (in a 2D space) defined by points [a,b] and [p,q]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.isinclosure",
    "page": "Docstrings",
    "title": "CompScienceMeshes.isinclosure",
    "category": "function",
    "text": "isinclosure(simplex, point) -> Bool\n\nDetermine whether point is in the closure of simplex. False positives are possible for points just outside of the simplex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.isinside",
    "page": "Docstrings",
    "title": "CompScienceMeshes.isinside",
    "category": "function",
    "text": "isinside(chart, point) -> Bool\n\nReturns true is the given point is in the image of the given chart, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.jacobian",
    "page": "Docstrings",
    "title": "CompScienceMeshes.jacobian",
    "category": "function",
    "text": "A number defines a neighborhood in euclidian space\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.leftof",
    "page": "Docstrings",
    "title": "CompScienceMeshes.leftof",
    "category": "function",
    "text": "inside(p,a,b)\n\nDetermines is p is on the interior side of the segment b of the boundary, assuming that the boundary is oriented counter-clockwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.load_gid_mesh",
    "page": "Docstrings",
    "title": "CompScienceMeshes.load_gid_mesh",
    "category": "function",
    "text": "load_gid_mesh(filename) -> mesh\n\n\n\n\n\nload_gid_mesh(stream) ->mesh\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.mesh",
    "page": "Docstrings",
    "title": "CompScienceMeshes.mesh",
    "category": "function",
    "text": "mesh(type, mdim, udim=mdim+1)\n\nReturns an empty mesh with coordtype equal to type, of dimension mdim and embedded in a universe of dimension udim\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.meshcuboid",
    "page": "Docstrings",
    "title": "CompScienceMeshes.meshcuboid",
    "category": "function",
    "text": "meshcuboid(width, height, length, delta)\n\nCreates a mesh for a cuboid of width (along the x-axis) width, height (along     the y-axis) height and length (along the z-axis) length by parsing a .geo script     incorporating these parameters into the GMSH mesher.\n\nThe target edge size is delta.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.meshrectangle",
    "page": "Docstrings",
    "title": "CompScienceMeshes.meshrectangle",
    "category": "function",
    "text": "meshrectangle(width, height, delta, udim)\n\nCreate a mesh for a rectangle of width (along the x-axis) width and height (along     the y-axis) height.\n\nThe target edge size is delta and the dimension of the     embedding universe is udim (>= 2).\n\nThe mesh is oriented such that the normal is pointing down. This is subject to change.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.meshsphere",
    "page": "Docstrings",
    "title": "CompScienceMeshes.meshsphere",
    "category": "function",
    "text": "meshsphere(radius, delta)\n\nCreate a mesh of a sphere of radius radius by parsing a .geo script     incorporating these parameters into the GMSH mesher.\n\nThe target edge size is delta.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.mirror",
    "page": "Docstrings",
    "title": "CompScienceMeshes.mirror",
    "category": "function",
    "text": "mirror(vertex, normal, anchor)\n\nMirror vertex across a plane defined by its normal and a containing point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.numcells",
    "page": "Docstrings",
    "title": "CompScienceMeshes.numcells",
    "category": "function",
    "text": "numcells(mesh)\n\nReturns the number of cells in the mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.numvertices",
    "page": "Docstrings",
    "title": "CompScienceMeshes.numvertices",
    "category": "function",
    "text": "numvertices(mesh)\n\nReturns the number of vertices in the mesh.\n\nNote: this is the number of vertices in the vertex buffer and might include floatin vertices or vertices not appearing in any cell. In other words the following is not necessarily true:\n\n    numvertices(mesh) == numcells(skeleton(mesh,0))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.octree",
    "page": "Docstrings",
    "title": "CompScienceMeshes.octree",
    "category": "function",
    "text": "Store the k-cells of a mesh in an octree.\n\nfunction octree{U,D,T}(mesh::Mesh{U,D,T}, kcells::Array{Int,2})\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.overlap",
    "page": "Docstrings",
    "title": "CompScienceMeshes.overlap",
    "category": "function",
    "text": "Compute whether two flat patches of the same dimension overlap or not\n\n\n\n\n\nCompute whether two segments in 3D space overlap\n\n\n\n\n\nCompute whether two triangles in 3D space overlap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.overlap_gpredicate",
    "page": "Docstrings",
    "title": "CompScienceMeshes.overlap_gpredicate",
    "category": "function",
    "text": "overlap_gpredicate(γ::Mesh) -> (patch -> Bool)\n\nCreate a predicate that for a given patch determinees if it overlaps with the provided target mesh γ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.point",
    "page": "Docstrings",
    "title": "CompScienceMeshes.point",
    "category": "function",
    "text": "point(xs...)\n\nCreate point of default type (double precision coordinates)\n\n\n\n\n\npoint(type, xs...)\n\nCreate point of default type and supplied precision for the coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.quadpoints",
    "page": "Docstrings",
    "title": "CompScienceMeshes.quadpoints",
    "category": "function",
    "text": "pw = quadpoints(chart, rule)\n\nReturns a collection of (point, weight) tuples corresponding to the numerical quadrature rule defined on the domain of chart. The weights returned take into account the Jacobian determinant resulting from mapping from the reference domain to the configuration space.\n\nFunctions can be integrated like:\n\nPW = quadpoints(chart, rule)\nI = sum(pw[2]*f(pw[1]) for pw in PW)\n\n\n\n\n\nquadpoints(refspace, charts, rules)\n\nComputed a matrix of vectors containing (weight, point, value) triples that can be used in numerical integration over the elements described by the charts. Internally, this method used quadpoints(chart, rule) to retrieve the points and weights for a certain quadrature rule over chart.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.read_TRI_mesh",
    "page": "Docstrings",
    "title": "CompScienceMeshes.read_TRI_mesh",
    "category": "function",
    "text": "read_TRI_mesh(filename) -> mesh::Mesh\n\n\n\n\n\nread_TRI_mesh(mesh_filename) -> mesh::Mesh\n\nImports a surface mesh (stored in an ASCII file named mesh_filename) into a     Mesh object (i.e. node list and element list).\n\nNOTE: The contents of mesh_filename must include the file extension, and the     file must be stored in the current directory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.read_gmsh_mesh",
    "page": "Docstrings",
    "title": "CompScienceMeshes.read_gmsh_mesh",
    "category": "function",
    "text": "read_gmsh_mesh(filename) -> mesh::Mesh\n\n\n\n\n\nread_gmsh_mesh(iostream) -> mesh::Mesh\n\nReads the mesh nodes and elements stored in the input .msh file (io, output by GMSH)     into arrays of node vectors and vertex vectors respectively.\n\nReturns an object mesh of type Mesh, comprising both vector arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.readmesh",
    "page": "Docstrings",
    "title": "CompScienceMeshes.readmesh",
    "category": "function",
    "text": "readmesh(filename)\n\nReads a mesh in in format from filename. The format follows:\n\n1\nV C\nx1_1    x1_2    ... x1_U\nx2_1    x2_2    ... x2_U\n...\nxV_1    xV_2    ... xV_U\ni1_1    i1_2    ... i1_D1\ni2_1    i2_2    ... i2_D1\n...\niC_1    iC_2    ... iC_D1\n\nwhere U is the universedimension of the mesh, D1 the dimension of the mesh plus one, V the number of vertices, and C the number of cells in the mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.restriction",
    "page": "Docstrings",
    "title": "CompScienceMeshes.restriction",
    "category": "function",
    "text": "restriction(submesh, supermesh)\n\nComputes the restriction matrix relative to a submesh submesh of supermesh.\n\nThe restriction matrix has size (m,n), where\n\nm == numcells(submesh)\nn == numcells(supermesh)\n\nIt has entries 1 at location [i,j] iff cell i of submesh equals cell j of supermesh. The remaining entries are zero.\n\nThis matrix is referred to as the restriction matrix because if it acts on an array of samples taken at the cells of supermesh is selects out the samples in the cells that are retained in submesh, taking into account any renumbering. Likewise, its transpose is sometimes referred to as the extension-by-zero operator because it maps arrays of samples taken in the cells of submesh into an array of samples taken in the cells of supermesh by inserting zeros at cells that were not retained in submesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.simplex",
    "page": "Docstrings",
    "title": "CompScienceMeshes.simplex",
    "category": "function",
    "text": "simplex(vertices)\nsimplex(v1, v2, ...)\nsimplex(vertices, Val{D})\n\nBuild a D-dimensional simplex. The vertices can be passed in an array (static or dynamic), or supplied separately. If the length of the array is not part of its type, the speed of the construction can be improved by supplying an extra Val{D} argument. In case it is not clear from the context whether the vertex array is dynamically or statically sized, use the third form as it will not incur notable performance hits.\n\nNote that D is the dimension of the simplex, i.e. the number of vertices supplied minus one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.skeleton",
    "page": "Docstrings",
    "title": "CompScienceMeshes.skeleton",
    "category": "function",
    "text": "skeleton(mesh, dim)\n\nReturns a mesh comprising the dim-dimensional sub cells of mesh. For example to retrieve the edges of a given surface mesh,\n\nedges = skelton(mesh, 1)\n\n\n\n\n\nskeleton(pred, mesh, dim)\n\nLike skeleton(mesh, dim), but only cells for which pred(cell) returns true are withheld.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.submesh",
    "page": "Docstrings",
    "title": "CompScienceMeshes.submesh",
    "category": "function",
    "text": "Returns a mesh on the same vertexbuffer as the input mesh. The submesh will be a mesh of dimension k containing all the k-cells that are in mesh and that fulfill the predicate pred.\n\npred is a function with signature pred(cell) -> Bool returning true if the simplex is to be added to the submesh under construction.\n\n\n\n\n\nsubmesh(selection, mesh)\n\nCreate a submesh from mesh comprising those elements that overlap with elements from selection. It is assumed that selection and mesh have the same dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.sutherlandhodgman",
    "page": "Docstrings",
    "title": "CompScienceMeshes.sutherlandhodgman",
    "category": "function",
    "text": "sutherlandhodgman(subject, clipper)\n\nCompute the intersection of two coplanar triangles, potentially embedded in a higher dimensional space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.sutherlandhodgman2d",
    "page": "Docstrings",
    "title": "CompScienceMeshes.sutherlandhodgman2d",
    "category": "function",
    "text": "sutherlandhodgman2d(subject,clipper)\n\nComputes the intersection of the coplanar triangles subject and clipper.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.translate",
    "page": "Docstrings",
    "title": "CompScienceMeshes.translate",
    "category": "function",
    "text": "translate(mesh, v)\n\nCreates a new mesh by translating mesh over vector v\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.translate!",
    "page": "Docstrings",
    "title": "CompScienceMeshes.translate!",
    "category": "function",
    "text": "translate!(mesh, v)\n\nTranslates mesh over vector v inplace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.trgauss",
    "page": "Docstrings",
    "title": "CompScienceMeshes.trgauss",
    "category": "function",
    "text": "trgauss(n) -> (u,w)\n\nReturns the n-th triangle quadrature rule. Returns a Matrix u of size (Q,2) with Q the number of quadrature points and a Vector w of size (Q,) containing the quadrature weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.universedimension",
    "page": "Docstrings",
    "title": "CompScienceMeshes.universedimension",
    "category": "function",
    "text": "universedimension(mesh)\n\nReturns the dimension of the surrounding space. Equals the number of coordinates required to describe a vertex.\n\n\n\n\n\nuniversedimension(p)\n\nReturn the dimension of the universe in which p is embedded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.vertextocellmap",
    "page": "Docstrings",
    "title": "CompScienceMeshes.vertextocellmap",
    "category": "function",
    "text": "vertextocellmap(mesh) -> vertextocells, numneighbors\n\nComputed an V×M array vertextocells where V is the number of vertices and M is the maximum number of cells adjacent to any given vertex such that vertextocells[v,i] is the index in the cells of mesh of the ith cell adjacent to teh v-th vertex. numneighbors[v] contains the number of cells adjacent to the v-th vertex.\n\nThis method allows e.g. for the efficient computation of the connectivity matrix of the mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.vertextype",
    "page": "Docstrings",
    "title": "CompScienceMeshes.vertextype",
    "category": "function",
    "text": "vt = vertextype(mesh)\n\nReturns type of the vertices used to define the cells of the mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.vertices",
    "page": "Docstrings",
    "title": "CompScienceMeshes.vertices",
    "category": "function",
    "text": "vertices(mesh)\n\nReturns an indexable iterable to the vertices of the mesh\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.volume",
    "page": "Docstrings",
    "title": "CompScienceMeshes.volume",
    "category": "function",
    "text": "volume(simplex)\n\nReturn the volume of the simplex.\n\n\n\n\n\nA tuple of points, aka an interval behaves trivially like a chart\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.weld",
    "page": "Docstrings",
    "title": "CompScienceMeshes.weld",
    "category": "function",
    "text": "weld(mesh1, mesh2, ...) -> welded_mesh\n\nBuild a mesh by welding or pasting together the inputs. Vertices from different meshes that coincide up to the tolerance will be merged into one. The order cells appear in the output mesh is equal to the order in the inputs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CompScienceMeshes.writemesh",
    "page": "Docstrings",
    "title": "CompScienceMeshes.writemesh",
    "category": "function",
    "text": "writemesh(mesh, filename)\n\nWrite mesh to filename in the in format (see readmesh).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CompScienceMeshes.AbstractMapperCompScienceMeshes.CompScienceMeshesCompScienceMeshes.FlippedMeshCompScienceMeshes.FlippedMeshCellIteratorCompScienceMeshes.GSubdMeshCompScienceMeshes.JacobMatrix33CompScienceMeshes.Jacob_invCompScienceMeshes.Loop_subdivisionCompScienceMeshes.MeshCompScienceMeshes.MeshPointNMCompScienceMeshes.PtCompScienceMeshes.RectangleChartCompScienceMeshes.RectangleNBDCompScienceMeshes.ReferenceSimplexCompScienceMeshes.SEdgeCompScienceMeshes.SElementCompScienceMeshes.SVertexCompScienceMeshes.SWCompScienceMeshes.SW1CompScienceMeshes.SW10CompScienceMeshes.SW11CompScienceMeshes.SW12CompScienceMeshes.SW13CompScienceMeshes.SW14CompScienceMeshes.SW15CompScienceMeshes.SW16CompScienceMeshes.SW17CompScienceMeshes.SW18CompScienceMeshes.SW19CompScienceMeshes.SW2CompScienceMeshes.SW20CompScienceMeshes.SW21CompScienceMeshes.SW22CompScienceMeshes.SW23CompScienceMeshes.SW24CompScienceMeshes.SW25CompScienceMeshes.SW26CompScienceMeshes.SW27CompScienceMeshes.SW28CompScienceMeshes.SW29CompScienceMeshes.SW3CompScienceMeshes.SW30CompScienceMeshes.SW4CompScienceMeshes.SW5CompScienceMeshes.SW6CompScienceMeshes.SW7CompScienceMeshes.SW8CompScienceMeshes.SW9CompScienceMeshes.SXCompScienceMeshes.SX1CompScienceMeshes.SX10CompScienceMeshes.SX11CompScienceMeshes.SX12CompScienceMeshes.SX13CompScienceMeshes.SX14CompScienceMeshes.SX15CompScienceMeshes.SX16CompScienceMeshes.SX17CompScienceMeshes.SX18CompScienceMeshes.SX19CompScienceMeshes.SX2CompScienceMeshes.SX20CompScienceMeshes.SX21CompScienceMeshes.SX22CompScienceMeshes.SX23CompScienceMeshes.SX24CompScienceMeshes.SX25CompScienceMeshes.SX26CompScienceMeshes.SX27CompScienceMeshes.SX28CompScienceMeshes.SX29CompScienceMeshes.SX3CompScienceMeshes.SX30CompScienceMeshes.SX4CompScienceMeshes.SX5CompScienceMeshes.SX6CompScienceMeshes.SX7CompScienceMeshes.SX8CompScienceMeshes.SX9CompScienceMeshes.SYCompScienceMeshes.SY1CompScienceMeshes.SY10CompScienceMeshes.SY11CompScienceMeshes.SY12CompScienceMeshes.SY13CompScienceMeshes.SY14CompScienceMeshes.SY15CompScienceMeshes.SY16CompScienceMeshes.SY17CompScienceMeshes.SY18CompScienceMeshes.SY19CompScienceMeshes.SY2CompScienceMeshes.SY20CompScienceMeshes.SY21CompScienceMeshes.SY22CompScienceMeshes.SY23CompScienceMeshes.SY24CompScienceMeshes.SY25CompScienceMeshes.SY26CompScienceMeshes.SY27CompScienceMeshes.SY28CompScienceMeshes.SY29CompScienceMeshes.SY3CompScienceMeshes.SY30CompScienceMeshes.SY4CompScienceMeshes.SY5CompScienceMeshes.SY6CompScienceMeshes.SY7CompScienceMeshes.SY8CompScienceMeshes.SY9CompScienceMeshes.SegmentedAxisCompScienceMeshes.SimplexCompScienceMeshes.SphereChartCompScienceMeshes.SphereNeighborhoodCompScienceMeshes.ThetaPhiPlaneCompScienceMeshes.Trianglegauss105aCompScienceMeshes.Trianglegauss105bCompScienceMeshes.Trianglegauss105wCompScienceMeshes.Trianglegauss120aCompScienceMeshes.Trianglegauss120bCompScienceMeshes.Trianglegauss120wCompScienceMeshes.Trianglegauss12aCompScienceMeshes.Trianglegauss12bCompScienceMeshes.Trianglegauss12cCompScienceMeshes.Trianglegauss12wCompScienceMeshes.Trianglegauss13aCompScienceMeshes.Trianglegauss13bCompScienceMeshes.Trianglegauss13cCompScienceMeshes.Trianglegauss13wCompScienceMeshes.Trianglegauss1aCompScienceMeshes.Trianglegauss1bCompScienceMeshes.Trianglegauss1cCompScienceMeshes.Trianglegauss1wCompScienceMeshes.Trianglegauss36aCompScienceMeshes.Trianglegauss36bCompScienceMeshes.Trianglegauss36wCompScienceMeshes.Trianglegauss3aCompScienceMeshes.Trianglegauss3bCompScienceMeshes.Trianglegauss3cCompScienceMeshes.Trianglegauss3wCompScienceMeshes.Trianglegauss400aCompScienceMeshes.Trianglegauss400bCompScienceMeshes.Trianglegauss400wCompScienceMeshes.Trianglegauss4aCompScienceMeshes.Trianglegauss4bCompScienceMeshes.Trianglegauss4cCompScienceMeshes.Trianglegauss4wCompScienceMeshes.Trianglegauss6aCompScienceMeshes.Trianglegauss6bCompScienceMeshes.Trianglegauss6cCompScienceMeshes.Trianglegauss6wCompScienceMeshes.Trianglegauss78aCompScienceMeshes.Trianglegauss78bCompScienceMeshes.Trianglegauss78wCompScienceMeshes.Trianglegauss7aCompScienceMeshes.Trianglegauss7bCompScienceMeshes.Trianglegauss7cCompScienceMeshes.Trianglegauss7wCompScienceMeshes.Trianglegauss900aCompScienceMeshes.Trianglegauss900bCompScienceMeshes.Trianglegauss900wCompScienceMeshes.WeightPointValueCompScienceMeshes.__init__CompScienceMeshes._normalsCompScienceMeshes.barycentricCompScienceMeshes.barycentric_refinementCompScienceMeshes.barytocartCompScienceMeshes.bisecting_refinementCompScienceMeshes.boundaryCompScienceMeshes.boundingboxCompScienceMeshes.boxspline_funcCompScienceMeshes.boxspline_func_derCompScienceMeshes.boxspline_func_der2CompScienceMeshes.cartesianCompScienceMeshes.carttobaryCompScienceMeshes.cellarrayCompScienceMeshes.cellpairsCompScienceMeshes.cellsCompScienceMeshes.celltypeCompScienceMeshes.centerCompScienceMeshes.chartCompScienceMeshes.clipconvex!CompScienceMeshes.connectivityCompScienceMeshes.coordtypeCompScienceMeshes.dimensionCompScienceMeshes.domainCompScienceMeshes.euclidianbasisCompScienceMeshes.evalCompScienceMeshes.find_edgesCompScienceMeshes.find_neighborCompScienceMeshes.find_neighbor2CompScienceMeshes.flipCompScienceMeshes.flipmeshCompScienceMeshes.flipmesh!CompScienceMeshes.fliporientationCompScienceMeshes.fliporientation!CompScienceMeshes.gauss_pointsCompScienceMeshes.gauss_quad_linearCompScienceMeshes.get_shape_curlCompScienceMeshes.getcommonedgeCompScienceMeshes.getelementVerticesCompScienceMeshes.inclosure_gpredicateCompScienceMeshes.includeCompScienceMeshes.indexCompScienceMeshes.interior_tpredicateCompScienceMeshes.intersectionCompScienceMeshes.intersectlinesCompScienceMeshes.irreg_shapefunCompScienceMeshes.isinclosureCompScienceMeshes.isinsideCompScienceMeshes.jacobianCompScienceMeshes.leftofCompScienceMeshes.legendreCompScienceMeshes.load_gid_meshCompScienceMeshes.map_idsCompScienceMeshes.mapperCompScienceMeshes.matrix_ACompScienceMeshes.meshCompScienceMeshes.meshcircleCompScienceMeshes.meshcuboidCompScienceMeshes.meshrectangleCompScienceMeshes.meshsegmentCompScienceMeshes.meshsphereCompScienceMeshes.minmaxdistCompScienceMeshes.mirrorCompScienceMeshes.mirrormeshCompScienceMeshes.mirrormesh!CompScienceMeshes.neighborhoodCompScienceMeshes.normalCompScienceMeshes.numcellsCompScienceMeshes.numverticesCompScienceMeshes.octreeCompScienceMeshes.overlapCompScienceMeshes.overlap_gpredicateCompScienceMeshes.parametricCompScienceMeshes.patchCompScienceMeshes.pickmatrx_regCompScienceMeshes.pickmtrx_irregCompScienceMeshes.pointCompScienceMeshes.powCompScienceMeshes.quadpointsCompScienceMeshes.read_TRI_meshCompScienceMeshes.read_gmsh_meshCompScienceMeshes.readmeshCompScienceMeshes.reg_shapefunCompScienceMeshes.relorientationCompScienceMeshes.restrictionCompScienceMeshes.ringCompScienceMeshes.ringsCompScienceMeshes.rotateCompScienceMeshes.rotate!CompScienceMeshes.shape_functionCompScienceMeshes.shape_function_derCompScienceMeshes.shape_function_der2CompScienceMeshes.shapederCompScienceMeshes.shapedersCompScienceMeshes.shapefunsCompScienceMeshes.simplexCompScienceMeshes.skeletonCompScienceMeshes.sqgaussCompScienceMeshes.subdMeshCompScienceMeshes.subd_chartCompScienceMeshes.subd_pointCompScienceMeshes.submeshCompScienceMeshes.sutherlandhodgmanCompScienceMeshes.sutherlandhodgman2dCompScienceMeshes.tangentsCompScienceMeshes.translateCompScienceMeshes.translate!CompScienceMeshes.trgaussCompScienceMeshes.triangleGaussACompScienceMeshes.triangleGaussBCompScienceMeshes.triangleGaussWCompScienceMeshes.universedimensionCompScienceMeshes.vertexarrayCompScienceMeshes.vertextocellmapCompScienceMeshes.vertextypeCompScienceMeshes.verticesCompScienceMeshes.volumeCompScienceMeshes.weldCompScienceMeshes.writemesh"
},

]}
