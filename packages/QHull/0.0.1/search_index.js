var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#QHull-1",
    "page": "Readme",
    "title": "QHull",
    "category": "section",
    "text": "(Image: Build Status)A Julia wrapper around a PyCall wrapper around scipy.spatial.ConvexHull, which uses the qhull Convex Hull library. It implements the Polyhedral Computation library interface of Polyhedra.jl.The qhull library for computing the convex hull of data points seems to be the standard and very widely used.This module is a quick wrapper around a Python wrapper around the library, as suggested by Miles Lubin."
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "Low-level interface:using QHull\n\np = rand(10,2)\nch = chull(p)\nch.points         # original points\nch.vertices       # indices to line segments forming the convex hull\nch.simplices      # the simplexes forming the convex hull\nshow(ch)Using Polyhedra.jl:using Polyhedra\n# Constructs a V-representation of 10 random points in 2 dimension\nv = vrep(rand(10, 2))\n\nusing QHull\n# Constructs a polyhedon from this V-representation with the QHull library\np = polyhedron(v, QHull.Library())\n# Removing redundant points, i.e. points which are in the interior of the convex hull\nremovevredundancy!(p)\n# Show remaining points, i.e. the non-redundant ones\nremovevredundancy!(p)\n@show vrep(p)\n# Show the H-representation, the facets describing the polytope\n@show hrep(p)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "QHull.ChullQHull.LibraryQHull.PolyhedronQHull.QHullQHull.__init__QHull._isoneQHull.chullQHull.clearfield!QHull.epszQHull.evalQHull.getextQHull.getineQHull.includeQHull.inconeQHull.qhullQHull.spatial"
},

]}
