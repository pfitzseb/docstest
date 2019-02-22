var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SeparatingAxisTheorem2D.jl-1",
    "page": "Readme",
    "title": "SeparatingAxisTheorem2D.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This package implements collision detection for 2D shapes based on the separating axis theorem. Shape representations leverage StaticArrays.jl for computational efficiency; this package targets applications potentially requiring millions of collision checks, e.g., robot motion planning."
},

{
    "location": "#Shapes-1",
    "page": "Readme",
    "title": "Shapes",
    "category": "section",
    "text": "This package exports the abstract type Shape2D and the following concrete types for collision checking:Point (alias for AbstractVector{<:Number})\nAxisAlignedBoundingBox <: Shape2D (equivalently, AABB)\nAABB((xl, xu), (yl, yu)): constructs an instance corresponding to the set [xl, xu] × [yl, yu].\nAABB(Δx, Δy): constructs an instance corresponding to the set [-Δx/2, Δx/2] × [-Δy/2, Δy/2].\nLineSegment <: Shape2D\nLineSegment(v, w) constructs a line segment connecting v and w.\nPolygon <: Shape2D\nPolygon(points...): constructs a convex polygon with vertices points. points must be supplied in counter-clockwise order.\nTriangle(p1, p2, p3): convenience constructor that reorders three points into CCW order before calling Polygon.\nCircle <: Shape2D\nCircle(c, r): constructs a circle centered at c with radius r.\nCircle(r): constructs a circle centered at the origin with radius r.\nCompoundShape <: Shape2D\nCompoundShape(parts...): groups a list of other Shape2Ds into a single (possible non-convex) collision object.This package also exports a few methods for transforming/creating new shapes from others.Transformations from CoordinateTranformations.jl may be applied to shapes to produce the expected output; some care must be taken, however, to ensure that only rigid transformations are applied to Circles as there is currently no Ellipse shape implemented.\ninflate(X, ε; round_corners=true): inflates a shape X by a buffer ε > 0. The round_corners keyword argument may be set to false to ensure that inflating an AABB, LineSegment, or Polygon yields just a single Polygon (performing an approximate inflation) instead of a CompoundShape consisting of a Polygon and Circles.\nsweep: this function is used internally to facilitate continuous (i.e., \"swept\") collision detection.\nsweep(X1, X2): yields a shape corresponding to the area swept out by moving shape X1 to shape X2 (if sweeping X1 to X2 involves a rotation, this rotation should be \"reasonably small\" or this will probably produce junk).\nsweep(X, f1, f2): equivalent to sweep(f1(X), f2(X))."
},

{
    "location": "#Collision-Checking-1",
    "page": "Readme",
    "title": "Collision Checking",
    "category": "section",
    "text": "SeparatingAxisTheorem2D.jl defines the following functions for collision checking:intersecting for discrete collision detection.\nintersecting(X, Y): true iff X and Y are in collision.\nintersecting(X, Y, f): true iff X and f(Y) are in collision.\nsweep_intersecting for continuous collision detection.\nX static and Y dynamic\nsweep_intersecting(X, Y1, Y2): true iff X and sweep(Y1, Y2) are in collision.\nsweep_intersecting(X, Y, f1, f2): true iff X1 and sweep(f1(X), f2(X)) are in collision.\nX and Y both dynamic\nsweep_intersecting(X, fX1, fX2, Y, fY1, fY2): supposing that X is getting swept from transformation fX1 to fX2 and Y is simultaneously getting swept from transformation fY1 to fY2, returns true iff the shapes are ever in collision."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SeparatingAxisTheorem2D.AABBSeparatingAxisTheorem2D.AABBseparatedSeparatingAxisTheorem2D.AbstractLineSegmentSeparatingAxisTheorem2D.AbstractPolygonSeparatingAxisTheorem2D.AxisAlignedBoundingBoxSeparatingAxisTheorem2D.CircleSeparatingAxisTheorem2D.CompoundShapeSeparatingAxisTheorem2D.LineSegmentSeparatingAxisTheorem2D.PointSeparatingAxisTheorem2D.PolygonSeparatingAxisTheorem2D.SeparatingAxisTheorem2DSeparatingAxisTheorem2D.Shape2DSeparatingAxisTheorem2D.SimpleLineSegmentSeparatingAxisTheorem2D.TriangleSeparatingAxisTheorem2D._any_separating_axisSeparatingAxisTheorem2D._intersectingSeparatingAxisTheorem2D._sweep_intersectingSeparatingAxisTheorem2D.ccwSeparatingAxisTheorem2D.circshift1SeparatingAxisTheorem2D.combined_AABBSeparatingAxisTheorem2D.enclosing_intervalSeparatingAxisTheorem2D.evalSeparatingAxisTheorem2D.getAABBSeparatingAxisTheorem2D.includeSeparatingAxisTheorem2D.inflateSeparatingAxisTheorem2D.inintervalSeparatingAxisTheorem2D.intersectingSeparatingAxisTheorem2D.minmaxVSeparatingAxisTheorem2D.norm2SeparatingAxisTheorem2D.overlappingSeparatingAxisTheorem2D.perpSeparatingAxisTheorem2D.projectSeparatingAxisTheorem2D.projectNSeparatingAxisTheorem2D.projectNextremaSeparatingAxisTheorem2D.reflectSeparatingAxisTheorem2D.reflectNSeparatingAxisTheorem2D.rotateSeparatingAxisTheorem2D.separating_axisSeparatingAxisTheorem2D.sweepSeparatingAxisTheorem2D.sweep_intersectingSeparatingAxisTheorem2D.transformSeparatingAxisTheorem2D.uncircshift1SeparatingAxisTheorem2D.unrolled_allSeparatingAxisTheorem2D.unrolled_anySeparatingAxisTheorem2D.voronoi_regionSeparatingAxisTheorem2D.wrap1"
},

]}
