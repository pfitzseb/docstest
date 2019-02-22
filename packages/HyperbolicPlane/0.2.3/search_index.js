var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hyperbolic-Plane-1",
    "page": "Readme",
    "title": "Hyperbolic Plane",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)The HyperbolicPlane module provides basic objects (such as points, segments, rays, lines, polygons, and circles) in the Hyperbolic plane and visualization in the Poincaré Disc.Documentation is in the Wiki. Also see the examples.The drawing functions rely on SimpleDrawing (a modest extension of Plots).We also require these modules:LinearFractionalTransformations:provides Möbius transformations.AbstractLattices:Defines ∨ and ∧."
},

{
    "location": "autodocs/#HyperbolicPlane.HCircle",
    "page": "Docstrings",
    "title": "HyperbolicPlane.HCircle",
    "category": "type",
    "text": "HCircle(P::HPoint,r::Real) creates a new hyperbolic circle centered at P with radius r.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.HContainer",
    "page": "Docstrings",
    "title": "HyperbolicPlane.HContainer",
    "category": "type",
    "text": "HContainer is a device for holding a collection of hyperbolic objects. It is like a set, but we have to do a lot of work before adding a new element because equal hyperbolic objects might differ a tiny amount and that would mess up hashing.\n\nC = HContainer() creates a new container.\nC = HContainer(items...) creates a new container with the items.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.HLine",
    "page": "Docstrings",
    "title": "HyperbolicPlane.HLine",
    "category": "type",
    "text": "HLine(P,Q) creates a new line from the given two points.\n\n\n\n\n\nHLine(S::HSegment) extends the segment S to give a (new) line.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.HPoint",
    "page": "Docstrings",
    "title": "HyperbolicPlane.HPoint",
    "category": "type",
    "text": "HPoint(z::Complex) creates a new point in the hyperbolic plane. The argument z must have absolute value less than 1.\n\nHPoint(r,theta) creates a new point with polar coordinates (r,theta). See also: polar.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.HPolygon",
    "page": "Docstrings",
    "title": "HyperbolicPlane.HPolygon",
    "category": "type",
    "text": "HPolygon() creates a new polygon (with no points).\n\nHPolygon(list) creates a polygon whose points are specified in list.\n\nSee: add_point!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.HRay",
    "page": "Docstrings",
    "title": "HyperbolicPlane.HRay",
    "category": "type",
    "text": "HRay(P::HPoint, t::Real) returns a ray with vertex P pointing to exp(im*t).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.HSegment",
    "page": "Docstrings",
    "title": "HyperbolicPlane.HSegment",
    "category": "type",
    "text": "HSegment(A,B) creates a new line segment with endpoints A and B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.HTriangle",
    "page": "Docstrings",
    "title": "HyperbolicPlane.HTriangle",
    "category": "type",
    "text": "HTriangle(A,B,C) creates a new hyperbolic triangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.Horocycle",
    "page": "Docstrings",
    "title": "HyperbolicPlane.Horocycle",
    "category": "type",
    "text": "Horocycle(P::HPoint, theta::Real) create the horocycle containing the point P and the ideal point at exp(im*theta).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.RandomHCircle",
    "page": "Docstrings",
    "title": "HyperbolicPlane.RandomHCircle",
    "category": "function",
    "text": "RandomHCircle() creates a random circle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.RandomHLine",
    "page": "Docstrings",
    "title": "HyperbolicPlane.RandomHLine",
    "category": "function",
    "text": "RandomHLine() returns a random line in the hyperbolic plane.\n\nAlgorithm: choose two values s,t in [0,2pi) uniformly at random and then make the line from exp(s*im) to exp(t*im).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.RandomHPoint",
    "page": "Docstrings",
    "title": "HyperbolicPlane.RandomHPoint",
    "category": "function",
    "text": "RandomHPoint() generates a point at random in the hyperbolic plane.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.RandomHPolygon",
    "page": "Docstrings",
    "title": "HyperbolicPlane.RandomHPolygon",
    "category": "function",
    "text": "RandomHPolygon(n::Int,simple::Bool=false) create a new HPolygon with n points chosen at random. With simple set to true, return a polygon that does not self-intersect.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.RandomHRay",
    "page": "Docstrings",
    "title": "HyperbolicPlane.RandomHRay",
    "category": "function",
    "text": "RandomHRay() creates a random ray. RandomRay(P::HPoint) creates a random ray with vertex P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.RandomHTriangle",
    "page": "Docstrings",
    "title": "HyperbolicPlane.RandomHTriangle",
    "category": "function",
    "text": "RandomHTriangle() creates a random triangle via three calls to RandomHPoint().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.RandomHorocycle",
    "page": "Docstrings",
    "title": "HyperbolicPlane.RandomHorocycle",
    "category": "function",
    "text": "RandomHorocycle() creates a random horocycle by choosing a point at random by RandomHPoint and a random ideal point (uniformly between 0 and 2π).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane._cycle",
    "page": "Docstrings",
    "title": "HyperbolicPlane._cycle",
    "category": "function",
    "text": "_cycle(A,k) returns a k-step shift of A. We require k to be in the interval [0,n-1] where n=length(A). No checking is done.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane._cyclic_equal",
    "page": "Docstrings",
    "title": "HyperbolicPlane._cyclic_equal",
    "category": "function",
    "text": "_cyclic_equal(A,B) checks if some cyclic shift of one list equals the other.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane._solver",
    "page": "Docstrings",
    "title": "HyperbolicPlane._solver",
    "category": "function",
    "text": "_solver(f,goal,lo,hi) assumes f is increasing on the interval [lo,hi]\n\n\n\n\n\n_solver(f,goal) assumes that f is increasing and there is a nonnegative x so that f(x)==goal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.add_object!",
    "page": "Docstrings",
    "title": "HyperbolicPlane.add_object!",
    "category": "function",
    "text": "add_object!(C::HContainer, X::HObject) adds X to the container C.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.add_point!",
    "page": "Docstrings",
    "title": "HyperbolicPlane.add_point!",
    "category": "function",
    "text": "add_point!(X::HPolygon, P::HPoint) adds the point P as the last point of the polygon X\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.alt_mod",
    "page": "Docstrings",
    "title": "HyperbolicPlane.alt_mod",
    "category": "function",
    "text": "alt_mod(k,n) is mod(k,n) unless the result is zero, in which case we return n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.angle",
    "page": "Docstrings",
    "title": "Base.angle",
    "category": "function",
    "text": "angle(A,B,C) finds the angle betwen BA and BC.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.angles",
    "page": "Docstrings",
    "title": "HyperbolicPlane.angles",
    "category": "function",
    "text": "angles(T::HTriangle) returns a sorted triple containing the angles at the three corners of the triangle.\n\n\n\n\n\nangles(P::HPolygon) returns a list of the angles at the vertices of P.\n\nThe results are always in the interval [0,pi].\nThe order of the angles is the order of the vertices in P.plist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.area",
    "page": "Docstrings",
    "title": "HyperbolicPlane.area",
    "category": "function",
    "text": "area(T::HTriangle) returns the area of the triangle.\n\n\n\n\n\narea(C::HCircle) returns the area of the circle.\n\n\n\n\n\narea(X::HPolygon) returns the area of the polygon, but is only reliable if X does not self-intersect. See is_simple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.between",
    "page": "Docstrings",
    "title": "HyperbolicPlane.between",
    "category": "function",
    "text": "between(a,b,c) determines if the hyperbolic point b lies on the segment from a to c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.bisector",
    "page": "Docstrings",
    "title": "HyperbolicPlane.bisector",
    "category": "function",
    "text": "bisector(S::HSegment) yields an HLine that\'s the perpendicular bisector of the segment S. May also be invoked bisector(A,B) where A and B are points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.check_diagonal",
    "page": "Docstrings",
    "title": "HyperbolicPlane.check_diagonal",
    "category": "function",
    "text": "check_diagonal(X::HPolygon, k::Int) checks to see if the diagonal between vertices k-1 and k+1 (a) does not intersect the boundary of X and (b) goes through the interior of X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.circumference",
    "page": "Docstrings",
    "title": "HyperbolicPlane.circumference",
    "category": "function",
    "text": "circumference(C::HCircle) returns the circumference of the circle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.collinear",
    "page": "Docstrings",
    "title": "HyperbolicPlane.collinear",
    "category": "function",
    "text": "collinear checks if the arguments are collinear. Arguments are:\n\na,b,c: three points\na,L: point and segment (in either order)\nL,LL: two segments\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.copy_attr",
    "page": "Docstrings",
    "title": "HyperbolicPlane.copy_attr",
    "category": "function",
    "text": "copy_attr(A,B) copies the attributes assigned to B into A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractLattices.dist",
    "page": "Docstrings",
    "title": "AbstractLattices.dist",
    "category": "function",
    "text": "dist(P,Q) gives the distance betwen two points in the hyperbolic plane. If Q is omitted, give the distance from P to HPoint(0).\n\n\n\n\n\ndist(P::HPoint,L::HLine) is the distance from P to the nearest point on L.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.draw",
    "page": "Docstrings",
    "title": "SimpleDrawing.draw",
    "category": "function",
    "text": "draw(X) draws the hyperbolic object X in a graphics window.\n\ndraw may be applied to a list of hyperbolic objects.\n\nThe typical sequence of drawing starts by clearing the screen with the plot() function (from the Plots module), then various to calls to draw and then concludes with a call to finish() (see the help message for that function).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.endpoints",
    "page": "Docstrings",
    "title": "HyperbolicPlane.endpoints",
    "category": "function",
    "text": "endpoints(T::HTriangle) returns the corner points of the triangle.\n\n\n\n\n\nendpoints(X::HPolygon) returns the list of vertices (in order) of the polygon.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.equality_threshold",
    "page": "Docstrings",
    "title": "HyperbolicPlane.equality_threshold",
    "category": "function",
    "text": "equality_threshold(val) sets the \"sloppiness\" for equality checking. The default value is 100. In general, two objects are equal if their stored values are within val * eps(1.0).\n\nCalling equality_threshold() with no arguments returns the current value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.equiangular",
    "page": "Docstrings",
    "title": "HyperbolicPlane.equiangular",
    "category": "function",
    "text": "equiangular(n,theta) creates a regular n-gon where the vertex angles equal theta\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.equilateral",
    "page": "Docstrings",
    "title": "HyperbolicPlane.equilateral",
    "category": "function",
    "text": "equilateral(n,s) creates a regular n-gon with side lengths s centered at the origin. First point is on the positive x-axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.expander",
    "page": "Docstrings",
    "title": "HyperbolicPlane.expander",
    "category": "function",
    "text": "expander(P::HPolygon) returns a list of polygons formed by reflecting P across each of its sides.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.find_ear_diagonal",
    "page": "Docstrings",
    "title": "HyperbolicPlane.find_ear_diagonal",
    "category": "function",
    "text": "find_ear_diagonal(X::HPolygon) returns an index k such that the diagonal from k-1 to k+1 passes check_diagonal. Returns 0 if no ear diagonal is found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.get_center",
    "page": "Docstrings",
    "title": "HyperbolicPlane.get_center",
    "category": "function",
    "text": "get_center(C::HCircle) returns the center of the circle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.get_radius",
    "page": "Docstrings",
    "title": "HyperbolicPlane.get_radius",
    "category": "function",
    "text": "get_radius(C::HCircle) returns the radius of the circle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.get_vertex",
    "page": "Docstrings",
    "title": "HyperbolicPlane.get_vertex",
    "category": "function",
    "text": "get_vertex(R::HRay) returns the vertex (end point) of the ray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.getz",
    "page": "Docstrings",
    "title": "HyperbolicPlane.getz",
    "category": "function",
    "text": "getz(P::HPoint) returns the point (complex number) in the interior of the unit disc that represents P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.in_up",
    "page": "Docstrings",
    "title": "HyperbolicPlane.in_up",
    "category": "constant",
    "text": "in_up is a LFT that maps the Poincaré disk to the upper half plane.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.interior_point",
    "page": "Docstrings",
    "title": "HyperbolicPlane.interior_point",
    "category": "function",
    "text": "interior_point(T::HTriangle) returns a point in the interior of the triangle. The interior point is the intersection of the triangle\'s medians (the centroid).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.is_simple",
    "page": "Docstrings",
    "title": "HyperbolicPlane.is_simple",
    "category": "function",
    "text": "is_simple(X::HPolygon) determines if the polygon edges do not self-intersect. Be sure the polygon is legit using polygon_check first.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.meet",
    "page": "Docstrings",
    "title": "HyperbolicPlane.meet",
    "category": "function",
    "text": "meet(L,LL) finds a point on lines L and LL or throws an error if they don\'t intersect.  Also for a line and a segment, or two segments.\n\nSee meet_check.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.meet_check",
    "page": "Docstrings",
    "title": "HyperbolicPlane.meet_check",
    "category": "function",
    "text": "meet_check(L::HLine,LL::HLine) determines if two lines intersect. Also for any combination of lines, segments, or rays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.midpoint",
    "page": "Docstrings",
    "title": "HyperbolicPlane.midpoint",
    "category": "function",
    "text": "midpoint(p,q) finds the mid point of the line segment from p to q. Also midpoint(L::HSegment).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.move2xplus",
    "page": "Docstrings",
    "title": "HyperbolicPlane.move2xplus",
    "category": "function",
    "text": "move2xplus(P::HPoint) returns an isometry of H^2 that maps P onto the positive real axis.\n\n\n\n\n\nmove2xplus(A,B) or move2xplus(L::HSegment) gives an isometry f so that f(A) is 0 and f(B) is on the positive real axis.\n\n\n\n\n\nmove2xplus(L::HLine) returns a linear fractional transformation that maps points on L to the positive x-axis but is not an isometry of the hyperbolic plane.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.move2zero",
    "page": "Docstrings",
    "title": "HyperbolicPlane.move2zero",
    "category": "function",
    "text": "move2zero(P::Hpoint) returns a LFT that\'s an isometry of H^2 that maps P to the origin.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.npoints",
    "page": "Docstrings",
    "title": "HyperbolicPlane.npoints",
    "category": "function",
    "text": "npoints(X::HPolygon) returns the number of points on the polygon.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.perimeter",
    "page": "Docstrings",
    "title": "HyperbolicPlane.perimeter",
    "category": "function",
    "text": "perimeter(T::HTriangle) or perimeter(P::HPolygon) returns the perimeter of the figure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.perpendicular",
    "page": "Docstrings",
    "title": "HyperbolicPlane.perpendicular",
    "category": "function",
    "text": "perpendicular(L::HLine, P::HPoint) returns a line that is perpendicular to L and contains P.\n\n\n\n\n\nperpendicular(L) returns an arbitrary line that is perpendicular to L.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.point_on_line",
    "page": "Docstrings",
    "title": "HyperbolicPlane.point_on_line",
    "category": "function",
    "text": "point_on_line(L) returns a point on the hyperbolic line L.\n\nSee also: points_on_line.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.point_on_ray",
    "page": "Docstrings",
    "title": "HyperbolicPlane.point_on_ray",
    "category": "function",
    "text": "point_on_ray(R::HRay) returns a point in the interior of the ray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.points_on_circle",
    "page": "Docstrings",
    "title": "HyperbolicPlane.points_on_circle",
    "category": "function",
    "text": "points_on_circle(C::HCircle) returns a 3-tuple of points that lie on the circle C.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.points_on_line",
    "page": "Docstrings",
    "title": "HyperbolicPlane.points_on_line",
    "category": "function",
    "text": "points_on_line(L,n) returns a list of n distinct points on the line L.\n\nSee also: point_on_line.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.polar",
    "page": "Docstrings",
    "title": "HyperbolicPlane.polar",
    "category": "function",
    "text": "polar(P::HPoint) gives the polar coordinates of P\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.polygon_check",
    "page": "Docstrings",
    "title": "HyperbolicPlane.polygon_check",
    "category": "function",
    "text": "polygon_check(X::HPolygon,quiet=true) checks that the polygon is nondegenerate. Possible degeneracies are:\n\nRepeated vertices\nFewer than three distinct vertices\nAngles that are either 0 degrees or 180 degrees\n\nIf quiet is false, then a reason for the failed check is printed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.reflect_across",
    "page": "Docstrings",
    "title": "HyperbolicPlane.reflect_across",
    "category": "function",
    "text": "reflect_across(X::HObject,L::HSegment/HLine) returns the object formed by refecting X across the line segment/lineL`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.rotation",
    "page": "Docstrings",
    "title": "HyperbolicPlane.rotation",
    "category": "function",
    "text": "rotation(theta) is an isometry of H^2 corresponding to a rotation about the origin of the amount theta\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.same_side",
    "page": "Docstrings",
    "title": "HyperbolicPlane.same_side",
    "category": "function",
    "text": "same_side(P,Q,L) determines if the points P and Q lie in the same (closed) halfplane as determined by L. If either point is on L then the result is true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.set_color",
    "page": "Docstrings",
    "title": "HyperbolicPlane.set_color",
    "category": "function",
    "text": "set_color(X,col) sets the color of the hyperbolic object X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.set_fill_alpha",
    "page": "Docstrings",
    "title": "HyperbolicPlane.set_fill_alpha",
    "category": "function",
    "text": "set_fill_alpha(X,alpha) sets the alpha value for the object\'s fill. Only works for HPlane and HCircle. Default value is 1 (not transparent)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.set_fill_color",
    "page": "Docstrings",
    "title": "HyperbolicPlane.set_fill_color",
    "category": "function",
    "text": "set_fill_color(X,col) sets the color used to fill X. Works for HPlane and HCircle. Default is :yellow\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.set_line_style",
    "page": "Docstrings",
    "title": "HyperbolicPlane.set_line_style",
    "category": "function",
    "text": "set_line_style(X,style) sets the line style for drawing X. Default is :solid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.set_no_fill",
    "page": "Docstrings",
    "title": "HyperbolicPlane.set_no_fill",
    "category": "function",
    "text": "set_no_fill(X) removes fill from the HObject. It now draws as unfilled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.set_radius",
    "page": "Docstrings",
    "title": "HyperbolicPlane.set_radius",
    "category": "function",
    "text": "set_radius(P,rad) sets the radius for an HPoint. The default is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.set_thickness",
    "page": "Docstrings",
    "title": "HyperbolicPlane.set_thickness",
    "category": "function",
    "text": "set_thickness(X,thk) sets the thickness of the line used to draw the hyperbolic object X. Default is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.sides",
    "page": "Docstrings",
    "title": "HyperbolicPlane.sides",
    "category": "function",
    "text": "sides(P:::HPolygon/HTriangle) returns a list of the line segments that are the sides of the polygon.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.solve_dist",
    "page": "Docstrings",
    "title": "HyperbolicPlane.solve_dist",
    "category": "function",
    "text": "solve_dist(d) is the inverse of _dist()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.stab_count",
    "page": "Docstrings",
    "title": "HyperbolicPlane.stab_count",
    "category": "function",
    "text": "stab_count(R,targets) is used to count how many items in targets are intersected by R where targets is a list of HLinear objects and R is an HLinear.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.tesselation",
    "page": "Docstrings",
    "title": "HyperbolicPlane.tesselation",
    "category": "function",
    "text": "tesselation(n,k,deep): Tesselate the hyperbolic plane by regular n-gons in which each vertex is a corner of k polygons. deep controls how many layers. The center of the first k-gon is placed at the origin.\n\nMay also be called tesselation(n,k,deep,true) in which case a vertex of the first k-gon is placed at the origin and the tesselation is seeded by copies of this first polygon around the origin.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.triangulate",
    "page": "Docstrings",
    "title": "HyperbolicPlane.triangulate",
    "category": "function",
    "text": "triangulate(X::HPolygon) returns a list of triangles that triangulate X. The polygon should have at least three sides, and have no bad angles, and not self-intersect.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HyperbolicPlane.up_in",
    "page": "Docstrings",
    "title": "HyperbolicPlane.up_in",
    "category": "constant",
    "text": "up_in is a LFT that maps the upper half plane to the Poincaré disk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "HyperbolicPlane.HCircleHyperbolicPlane.HContainerHyperbolicPlane.HLineHyperbolicPlane.HLinearHyperbolicPlane.HObjectHyperbolicPlane.HPlaneHyperbolicPlane.HPointHyperbolicPlane.HPolygonHyperbolicPlane.HRayHyperbolicPlane.HRoundHyperbolicPlane.HSegmentHyperbolicPlane.HTriangleHyperbolicPlane.HorocycleHyperbolicPlane.HyperbolicPlaneHyperbolicPlane.RandomHCircleHyperbolicPlane.RandomHLineHyperbolicPlane.RandomHPointHyperbolicPlane.RandomHPolygonHyperbolicPlane.RandomHRayHyperbolicPlane.RandomHSegmentHyperbolicPlane.RandomHTriangleHyperbolicPlane.RandomHorocycleHyperbolicPlane.THRESHOLDHyperbolicPlane._cycleHyperbolicPlane._cyclic_equalHyperbolicPlane._distHyperbolicPlane._magHyperbolicPlane._solverHyperbolicPlane.add_object!HyperbolicPlane.add_point!HyperbolicPlane.alt_modHyperbolicPlane.angleHyperbolicPlane.anglesHyperbolicPlane.areaHyperbolicPlane.betweenHyperbolicPlane.bisectorHyperbolicPlane.check_diagonalHyperbolicPlane.circumferenceHyperbolicPlane.collinearHyperbolicPlane.copy_attrHyperbolicPlane.distHyperbolicPlane.drawHyperbolicPlane.draw_diagonalHyperbolicPlane.e_centerHyperbolicPlane.e_radiusHyperbolicPlane.endpointsHyperbolicPlane.equality_thresholdHyperbolicPlane.equiangularHyperbolicPlane.equilateralHyperbolicPlane.euclidean_centerHyperbolicPlane.evalHyperbolicPlane.expanderHyperbolicPlane.find_ear_diagonalHyperbolicPlane.finishHyperbolicPlane.get_centerHyperbolicPlane.get_radiusHyperbolicPlane.get_vertexHyperbolicPlane.getzHyperbolicPlane.in_upHyperbolicPlane.includeHyperbolicPlane.interior_pointHyperbolicPlane.is_simpleHyperbolicPlane.meetHyperbolicPlane.meet_checkHyperbolicPlane.midpointHyperbolicPlane.move2xplusHyperbolicPlane.move2zeroHyperbolicPlane.newdrawHyperbolicPlane.npointsHyperbolicPlane.perimeterHyperbolicPlane.perpendicularHyperbolicPlane.point_on_lineHyperbolicPlane.point_on_rayHyperbolicPlane.points_on_circleHyperbolicPlane.points_on_lineHyperbolicPlane.polarHyperbolicPlane.polygon_checkHyperbolicPlane.reflect_acrossHyperbolicPlane.rotationHyperbolicPlane.same_sideHyperbolicPlane.set_colorHyperbolicPlane.set_fill_alphaHyperbolicPlane.set_fill_colorHyperbolicPlane.set_line_styleHyperbolicPlane.set_no_fillHyperbolicPlane.set_radiusHyperbolicPlane.set_thicknessHyperbolicPlane.sidesHyperbolicPlane.solve_distHyperbolicPlane.stab_countHyperbolicPlane.tesselationHyperbolicPlane.triangulateHyperbolicPlane.up_inHyperbolicPlane.visualizeHyperbolicPlane.∧HyperbolicPlane.∨"
},

]}
