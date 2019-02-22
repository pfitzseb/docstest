var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VoronoiDelaunay.jl-1",
    "page": "Readme",
    "title": "VoronoiDelaunay.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: VoronoiDelaunay) (Image: Coverage Status)(Image: Alt VoronoiDelaunay.jl)Fast, robust construction of 2D Delaunay and Voronoi tessellations on generic point types. Implementation follows algorithms described in the Arepo paper and used (for e.g.) in the Illustris Simulation. License: MIT. Bug reports welcome!"
},

{
    "location": "#How-does-it-work?-1",
    "page": "Readme",
    "title": "How does it work?",
    "category": "section",
    "text": "Incrementally insert points to a valid Delaunay tessallation, while restoring Delaunayhood by flipping triangles. Point location (i.e. which triangle should it divide into three) is accelerated by spatial sorting. Spatial sorting allows to add points which are close in space thus walking the tesselation is fast. Initial tessalletion includes two triangles built by 4 points which are outside of the allowed region for users. These \"external\" triangles are skipped when iterating over Delaunay/Voronoy edges. Fast and robust predicates are provided by the GeometricalPredicates package. Benchmarks suggest this package is a bit faster than CGAL, see here benchmark of an older version which is also a bit slower than current."
},

{
    "location": "#Current-limitations-1",
    "page": "Readme",
    "title": "Current limitations",
    "category": "section",
    "text": "Due to numerical restrictions the point coordinates must be within min_coord <= x <= max_coord where min_coord=1.0+eps(Float64) and max_coord=2.0-2eps(Float64). Note this is a bit different than what is required by the  GeometricalPredicates package.\nThe following features are not implemented, but are in the TODO list; In order of priority: centroid tessellations (Lloy\'s method), Weighted generators (both power and sum), bounding, maybe restricting. Hierarchal tessellations for fast random locatings; Distributed tessellation construction. 3D. Order of priority may change of course :)"
},

{
    "location": "#How-to-use?-1",
    "page": "Readme",
    "title": "How to use?",
    "category": "section",
    "text": ""
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "]add VoronoiDelaunayFor Julia 0.6 and below, typePkg.add(\"VoronoiDelaunay\")"
},

{
    "location": "#Building-a-tessellation-1",
    "page": "Readme",
    "title": "Building a tessellation",
    "category": "section",
    "text": "Define and push individual points like this:using  VoronoiDelaunay\ntess = DelaunayTessellation()\npush!(tess, Point(1.5, 1.5))creation of points is explained in the GeometricalPredicates package documentation.Pushing arrays of points is more efficient:width = max_coord - min_coord\na= Point2D[Point(min_coord+rand()*width, min_coord+rand()*width) for i in 1:100]\npush!(tess, a)notice care taken for correct range of coordinates. min_coord and max_coord are defined in the package. We can further optimize by giving a sizehint at time of construction:tess = DelaunayTessellation(100)or at any later point:sizehint(tess, 100)"
},

{
    "location": "#Iterating-1",
    "page": "Readme",
    "title": "Iterating",
    "category": "section",
    "text": "Delaunay tesselations need at least 3 points to be well defined. Voronoi need 4. Remember this when iterating or plotting. Iterating over Delaunay edges is done like this:i = 0\nfor edge in delaunayedges(tess)\n    i += 1\n    # or, do something more useful :)\nenda DelaunayEdge contains two points a and b, they can be accesse with geta(edge) and getb(edge). Iterating over Voronoi edges is similar:i = 0\nfor edge in voronoiedges(tess)\n    i += 1\n    # or, do something more useful :)\nenda VoronoiEdge is a bit different than a DelaunayEdge: here a and b are Point2D and not the generators, as they have different coordinates. To get the generators use getgena(edge) and getgenb(edge) these give the relevant AbstractPoint2D which were used to create the edge.If the generators are not needed when iterating over the Voronoi edges (e.g. when plotting) then a more efficient way to iterate is:i = 0\ne=Nothing\nfor edge in voronoiedgeswithoutgenerators(tess)\n    i += 1\n    # do something more useful here :)\nendhere edge is a VoronoiEdgeWithoutGenerators, the points a and b can be accessed as usual.Iterating over Delaunay triangles:i = 0\nfor delaunaytriangle in tess\n    i += 1\n    # or, do something more useful :)\nenddelaunaytriangle here is of type DelaunayTriagle which is s subtype of AbstractNegativelyOrientedTriangle. To get the generators of this triangle use the geta, getb, and getc methods. You can do all other operations and predicate tests on this triangle as explained in GeometricalPredicates"
},

{
    "location": "#Navigating-1",
    "page": "Readme",
    "title": "Navigating",
    "category": "section",
    "text": "Locating a point, i.e. finding the triangle it is inside:t = locate(tess, Point(1.2, 1.3))if the point is outside of the tessellation then isexternal(t) == true holds. This is good for type stability, at least better than returning a Nothing. It is assumed that the point we want to locate is actually in the allowed points region. Performance is best when locating points close to each other (this is also why spatial sorting is used). Future versions may implement a hierarchal approach for fast random locations.Navigating from a triangle to its neighbours is done like this:t = movea(tess, t)  # move to the direction infront of generator a\nt = moveb(tess, t)  # move to the direction infront of generator b\nt = movec(tess, t)  # move to the direction infront of generator c"
},

{
    "location": "#Plotting-1",
    "page": "Readme",
    "title": "Plotting",
    "category": "section",
    "text": "The following retrieves a couple of vectors ready to plot Voronoi edges:x, y = getplotxy(voronoiedges(tess))and for Delaunay edges:x, y = getplotxy(delaunayedges(tess))Now plotting can be done with your favorite plotting package, for e.g.:using Gadfly\nplot(x=x, y=y, Geom.path)To make a nice looking plot remember to limit the axes and aspect ratio. For e.g.:set_default_plot_size(15cm, 15cm)\nplot(x=x, y=y, Geom.path, Scale.x_continuous(minvalue=1.0, maxvalue=2.0), Scale.y_continuous(minvalue=1.0, maxvalue=2.0))"
},

{
    "location": "#From-an-image-1",
    "page": "Readme",
    "title": "From an image",
    "category": "section",
    "text": "You can create a tesselation from an image, just like the tesselation of the julia logo at the top of this README. This was created from a png with from_file (see examples/img_to_vorono.jl):import Images: imread\nimg = imread(\"julia.png\")\ntess = from_image(img, 25000)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "VoronoiDelaunay.AbstractPoint2DVoronoiDelaunay.DelaunayEdgeVoronoiDelaunay.DelaunayTessellationVoronoiDelaunay.DelaunayTessellation2DVoronoiDelaunay.DelaunayTriangleVoronoiDelaunay.PointVoronoiDelaunay.Point2DVoronoiDelaunay.TrigIterVoronoiDelaunay.VoronoiDelaunayVoronoiDelaunay.VoronoiEdgeVoronoiDelaunay.VoronoiEdgeWithoutGeneratorsVoronoiDelaunay._endflipa!VoronoiDelaunay._endflipb!VoronoiDelaunay._endflipc!VoronoiDelaunay._flipa!VoronoiDelaunay._flipaa!VoronoiDelaunay._flipab!VoronoiDelaunay._flipac!VoronoiDelaunay._flipb!VoronoiDelaunay._flipba!VoronoiDelaunay._flipbb!VoronoiDelaunay._flipbc!VoronoiDelaunay._flipc!VoronoiDelaunay._flipca!VoronoiDelaunay._flipcb!VoronoiDelaunay._flipcc!VoronoiDelaunay._pushunfixed!VoronoiDelaunay._pushunsorted!VoronoiDelaunay._restoredelaunayhood!VoronoiDelaunay.delaunayedgesVoronoiDelaunay.evalVoronoiDelaunay.findindexVoronoiDelaunay.from_imageVoronoiDelaunay.getaVoronoiDelaunay.getbVoronoiDelaunay.getcVoronoiDelaunay.getgenaVoronoiDelaunay.getgenbVoronoiDelaunay.getplotxyVoronoiDelaunay.getxVoronoiDelaunay.getyVoronoiDelaunay.includeVoronoiDelaunay.intensityVoronoiDelaunay.isexternalVoronoiDelaunay.iterateVoronoiDelaunay.locateVoronoiDelaunay.max_coordVoronoiDelaunay.min_coordVoronoiDelaunay.moveaVoronoiDelaunay.movebVoronoiDelaunay.movecVoronoiDelaunay.push!VoronoiDelaunay.sizefit_at_leastVoronoiDelaunay.sizehint!VoronoiDelaunay.voronoiedgesVoronoiDelaunay.voronoiedgeswithoutgenerators"
},

]}
