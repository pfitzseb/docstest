var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: fgf)"
},

{
    "location": "#AsyPlots.jl-1",
    "page": "Readme",
    "title": "AsyPlots.jl",
    "category": "section",
    "text": "Documentation"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "AsyPlots is a Julia package for creating figures in Asymptote. Asymptote is a mature language for technical drawing in two and three dimensions. This package provides access toVector graphics with LaTeX-rendered labels in 2D and 3D\nAn OpenGL renderer for interacting with 3D figures\nEasily customizable colors and arrows\nConvenience functions for line graphs and surface plots, with less of a time-to-first-plot penalty than some other packages\nAn environment designed for working directly with graphics primitives (points, paths, polygons, circles, parametric surfaces) in natural coordinates\nin-line plotting in IJulia and Juno\'s plot pane\nOptions to save output as asy, eps, pdf, svg, or png\nAn alternative Cairo backend, for speed"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "AsyPlots requires Asymptote, which you might already have as a part of your TeX installation (run asy --version from the command line to check). If you want to use the Cairo backend, install Cairo.jl via Pkg.add(Cairo)."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "using AsyPlots\nn = 250; srand(1)\nA = [(x,y) == (0,0) ? 0 : 1/(x^2+y^2) for x=0:n-1,y=0:n-1]\nB = randn(n,n)\nsave(\"fgf.png\",plot(real(fft(A.*B));width=150)) # hide\nplot(real(fft(A.*B)))(Image: fgf)using AsyPlots # hide\nn = 100000; srand(2) # hide\nx = cumsum(rand(-1:1,n))\ny = cumsum(rand(-1:1,n))\nsave(\"rw.svg\",Plot(Path(x,y;color=\"White\"),   # hide\n      bgcolor=\"Black\", width=512,                 # hide\n      axispen=\"Red\",axes=true,axisarrow=Arrow())) # hide\nPlot(Path(x,y;color=\"White\"),\n     bgcolor=\"Black\",\n     axispen=\"Red\",\n     axes=true,\n     axisarrow=Arrow())(Image: fgf)"
},

{
    "location": "autodocs/#AsyPlots.Arrow",
    "page": "Docstrings",
    "title": "AsyPlots.Arrow",
    "category": "type",
    "text": "Arrow(name::AbstractString,\n      size::Real,\n      position::Real)\n\nStore instructions for drawing an arrow\n\nposition is an element of [0,1] which indicates how far along the path the arrow should be drawn\n\nNoArrow() returns a no-arrow instruction, while Arrow3() gives an arrow suitable for 3D paths\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Circle2D",
    "page": "Docstrings",
    "title": "AsyPlots.Circle2D",
    "category": "type",
    "text": "Circle2D(center,radius; pen::Pen,fillpen::Pen)\n\nA graphics primitive representing a circle in the plane\n\ncenter may be a Vec2 or a 2-tuple of Reals or a Complex\n\nExamples\n\njulia> Circle2D((0,0),1;pen=\"LightBlue\",fillpen=\"red\")\nCircle2D((0,0),1;pen=LightBlue,fillpen=red)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.NamedColor",
    "page": "Docstrings",
    "title": "AsyPlots.NamedColor",
    "category": "type",
    "text": "NamedColor(name::String,color::RGB)\n\nA named ColorTypes.RGB\n\nExamples\n\njulia> NamedColor(\"DarkGreen\")\nNamedColor(\"DarkGreen\",(0.0, 0.39, 0.0))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Path",
    "page": "Docstrings",
    "title": "AsyPlots.Path",
    "category": "function",
    "text": "Path(A;kwargs)\n\nReturn a Path2D or Path3D object, as appropriate\n\nExamples\n\njulia> Path([1 2; 3 4])\nPath2D(<2 points>)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Path2D",
    "page": "Docstrings",
    "title": "AsyPlots.Path2D",
    "category": "type",
    "text": "Path2D(points;label=\"\",pen=Pen(),arrow=NoArrow(),spline=false)\nPath2D(x,y;label=\"\",pen=Pen(),arrow=NoArrow(),spline=false)\n\nA graphics primitive representing a two-dimensional path\n\npoints may be an Array of Vec2s, an Array of 2-tuples, or an n  2 Array. Alternatively, iterables of coordinates may be supplied separately as x and y\n\nExamples\n\njulia> Path2D([(0,0),(1,0),(1,1)];pen=\"MidnightBlue\")\nPath2D(<3 points>;pen=MidnightBlue)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Path3D",
    "page": "Docstrings",
    "title": "AsyPlots.Path3D",
    "category": "type",
    "text": "Path3D(points;label=\"\",pen=Pen(),arrow=\"\",spline=false)\n\nA graphics primitive representing a two-dimensional path\n\npoints may be an Array of Vec3s or an Array of 3-tuples. Alternatively, iterables of coordinates may be supplied separately as x and y\n\nExamples\n\njulia> Path3D([(0,0),(1,0),(1,1)];pen=\"MidnightBlue\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Pen",
    "page": "Docstrings",
    "title": "AsyPlots.Pen",
    "category": "type",
    "text": "Pen(color::NamedColor,\n    opacity::Real,\n    linewidth::Real,\n    other::String)\n\nStore drawing properties\n\nExamples\n\njulia> Pen(color=\"DarkGreen\",opacity=0.5)\nPen(color=DarkGreen,opacity=0.5)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Plot2D",
    "page": "Docstrings",
    "title": "AsyPlots.Plot2D",
    "category": "type",
    "text": "Plot2D(elements::Array{<:GraphicElement,1},\n       options::Array{Any,1})\n\nA container for a list of graphics primitives to draw, together with drawing options\n\nExamples\n\njulia> Plot([Path([0 0; 1 1]),Polygon([exp(2*pi*im*k/5) for k=1:5])])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Plot3D",
    "page": "Docstrings",
    "title": "AsyPlots.Plot3D",
    "category": "type",
    "text": "Plot3D(elements::Array{<:GraphicElement2D,1},\n       options::Array{Any,1})\n\nA container for a list of graphics primitives to draw, together with drawing options\n\nExamples\n\njulia> Plot(Path([0 0 0; 1 1 1]),Path([0 0 0; 0 0 1]))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Point",
    "page": "Docstrings",
    "title": "AsyPlots.Point",
    "category": "function",
    "text": "Point(x::Real,y::Real;kwargs...)\nPoint(x::Real,y::Real,z::Real;kwargs...)\nPoint(P;kwargs...)\n\nReturn a Point2D or Point3D object, as appropriate\n\nExamples\n\njulia> Point(1,2;pen=Pen(opacity=0.5))\nPoint2D(1,2;pen=opacity(0.5))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Point2D",
    "page": "Docstrings",
    "title": "AsyPlots.Point2D",
    "category": "type",
    "text": "Point2D(x::Real,y::Real; label=\"\",pen=Pen())\nPoint2D(P; label=\"\",pen=Pen())\n\nA graphics primitive representing a two-dimensional point.\n\nP may be a 2-tuple of real numbers, a Vec2, or a Complex\n\nExamples\n\njulia> Point2D(3,-1;pen=\"DarkGreen\")\nPoint2D(3,-1;pen=DarkGreen)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Point3D",
    "page": "Docstrings",
    "title": "AsyPlots.Point3D",
    "category": "type",
    "text": "Point3D(x::Real,y::Real,z::Real; label=\"\",pen=Pen())\nPoint3D(P; label=\"\",pen=Pen())\n\nA graphics primitive representing a three-dimensional point.\n\nP may be a 3-tuple of real numbers or a Vec3\n\nExamples\n\njulia> Point3D(0,4,5;pen=\"DarkGreen\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Polygon",
    "page": "Docstrings",
    "title": "AsyPlots.Polygon",
    "category": "function",
    "text": "Polygon(points;kwargs...)\n\nReturn a Polygon2D or a Polygon3D as appropriate\n\npoints may be an array of Vec2s or Complexes, or an n  2 array of Reals\n\nExamples\n\njulia> Polygon([im,0,1])\nPolygon2D(<3 points>)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Polygon2D",
    "page": "Docstrings",
    "title": "AsyPlots.Polygon2D",
    "category": "type",
    "text": "Polygon2D(points;pen=Pen(),\n                 fillpen=Pen(color=\"white\"),\n                 spline=false)\n\nA graphics primitive representing a two-dimensional polygon\n\npoints may be an Array of Vec2s, an Array of 2-tuples, or an n  2 Array. Alternatively, iterables of coordinates may be supplied separately as x and y\n\nExamples\n\njulia> Polygon2D([(0,0),(1,0),(1,1)];pen=\"MidnightBlue\")\nPolygon2D(<3 points>;pen=MidnightBlue)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Polygon3D",
    "page": "Docstrings",
    "title": "AsyPlots.Polygon3D",
    "category": "type",
    "text": "Polygon3D(points;pen=Pen(),\n                 fillpen=Pen(color=\"white\"),\n                 spline=false)\n\nA graphics primitive representing a three-dimensional polygon\n\npoints may be an Array of Vec3s or an Array of 3-tuples.\n\nExamples\n\njulia> Polygon3D([(0,0,0),(1,0,0),(1,1,0)];pen=\"MidnightBlue\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.RawString",
    "page": "Docstrings",
    "title": "AsyPlots.RawString",
    "category": "type",
    "text": "RawString(s::AbstractString)\n\nContainer for directly inserting Asymptote drawing commands\n\nExamples\n\njulia> Plot([Circle((0,0),1),RawString2D(\"draw((0,0)--dir(20));\")])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.Surface",
    "page": "Docstrings",
    "title": "AsyPlots.Surface",
    "category": "type",
    "text": "Surface(x::Array{<:Real},\n        y::Array{<:Real},\n        z::Array{<:Real,2};\n        options)\nSurface(z::Array{<:Real},2)\n\nA graphics primitive representing a surface in three dimensions x and y may be one- or two-dimensional arrays\n\nThe surface passes through the points     [x[i,j],y[i,j],z[i,j] for i=1:size(z,1),j=1:size(z,2)]\n\nThe options are\n\ncolors: A vector of color names, for coloring\nspline: whether to draw a smooth or piecewise smooth surface\nsurfacepen: a pen for drawing the surface\nmeshpen: a pen for drawing the grid lines on the surface\nclip: either false or a boolean array of the same dimensions         as x, y, and z, specifying patches to exclude\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.animate",
    "page": "Docstrings",
    "title": "AsyPlots.animate",
    "category": "function",
    "text": "animate(filename::AbstractString,\n        plots::Vector{Plot2D};\n        rate=10)\n\nanimate(plots::Vector{Plot2D};rate=10)\n\nMake an .mp4 video from plots, with frame rate rate\n\nIf \"filename\" is given, the movie file will be stored there. Otherwise, the movie will be opened.\n\nExample\n\nX = cumsum(randn(100000))\nY = cumsum(randn(100000))\nplots = [Plot(Path(X[1:t],Y[1:t])) for t=10:10:10000]\nanimate(plots)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.asy",
    "page": "Docstrings",
    "title": "AsyPlots.asy",
    "category": "function",
    "text": "asy()\n\nSet the backend to Asymptote\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.cairo",
    "page": "Docstrings",
    "title": "AsyPlots.cairo",
    "category": "function",
    "text": "cairo()\n\nSet the backend to Cairo\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.distance",
    "page": "Docstrings",
    "title": "AsyPlots.distance",
    "category": "function",
    "text": "distance(x,y,a,b,c,d)\n\nReturn the distance from the point (x,y) to the line segment with endpoints (a,b) and (c,d)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.enclosequote",
    "page": "Docstrings",
    "title": "AsyPlots.enclosequote",
    "category": "function",
    "text": "enclosequote(s)\n\nEnclose s in quotation marks, unless it starts with \"Label\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.filterjoin",
    "page": "Docstrings",
    "title": "AsyPlots.filterjoin",
    "category": "function",
    "text": "filterjoin(args...)\n\nConcatenate nonempty string representations of args, separated by commas\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.fitheight",
    "page": "Docstrings",
    "title": "AsyPlots.fitheight",
    "category": "function",
    "text": "fitheight()\n\nSet the figures appearing in the Juno plot pane to match its height\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.fitwidth",
    "page": "Docstrings",
    "title": "AsyPlots.fitwidth",
    "category": "function",
    "text": "fitwidth()\n\nSet the figures appearing in the Juno plot pane to match its width\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.histogram",
    "page": "Docstrings",
    "title": "AsyPlots.histogram",
    "category": "function",
    "text": "histogram(data::Vector;\n          bincount=30,\n          bins=linspace(minimum(data),maximum(data),bincount),\n          xlabel=\"\",\n          ylabel=\"\",\n          title=\"\",\n          pen=Pen(color=NamedColor(\"MidnightBlue\"),opacity=0.3))\n\nMake a histogram of data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.isinside",
    "page": "Docstrings",
    "title": "AsyPlots.isinside",
    "category": "function",
    "text": "isinside(p::Point,pointlist::AbstractArray{Point,1})\n\nDetermine whether p is inside pointlist.\n\nThis function was copied from Luxor.jl. It is an implementation of an algorithm due to Hormann and Agathos (2001)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.junodefault",
    "page": "Docstrings",
    "title": "AsyPlots.junodefault",
    "category": "function",
    "text": "junodefault()\n\nReset the default output formats for the Juno plot pane\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.junopng",
    "page": "Docstrings",
    "title": "AsyPlots.junopng",
    "category": "function",
    "text": "junopng()\n\nSet the default output format for the Juno plot pane to png\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.junosvg",
    "page": "Docstrings",
    "title": "AsyPlots.junosvg",
    "category": "function",
    "text": "junosvg()\n\nSet the default output format for the Juno plot pane to svg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.piechart",
    "page": "Docstrings",
    "title": "AsyPlots.piechart",
    "category": "function",
    "text": "piechart(labels,frequencies; title=\"\")\n\nlabels: a vector of strings\nfrequencies: a vector of Reals\n\nReturn a piechart with each sector i labeled labels[i] and having central angle proportional to frequencies[i]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.plot",
    "page": "Docstrings",
    "title": "AsyPlots.plot",
    "category": "function",
    "text": "plot(x,y;kwargs...)\nplot(y;kwargs...)\n\nReturn a graph of the path with x and y values given by x and y\n\nx defaults to 0:length(y)-1. kwargs are applied to the Path2D object representing the line or to the containing Plot2D, as appropriate\n\nplot(xs::Vector{<:Vector{<:Real}},\n     ys::Vector{<:Vector{<:Real}};\n     kwargs...)\n\nMultiple line graphs in the same figure\n\nplot(x,y,z;kwargs...)\nplot(z::Array{<:Real,2};kwargs...)\n\nA graph of the surface with x, y, and z values x, y, and z\n\nx defaults to [i-1 for i=1:size(z,1),j=1:size(z,2)] and y defaults to [j-1 for i=1:size(z,1),j=1:size(z,2)]\n\nExamples\n\nplot(cumsum(randn(100)))\nplot(rand(5,5))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.save",
    "page": "Docstrings",
    "title": "AsyPlots.save",
    "category": "function",
    "text": "save(filename::AbstractString,\n     P::Union{Plot2D,Plot3D};\n     runasy=true,\n     forcepdf=false)\n\nSave Asymptote figure. If filename has extension .asy, then an asy file is saved together with any auxiliary data files.\n\nIf filename has extension .pdf, .svg or .png, then only the resulting image file is saved to the location filename\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AsyPlots.splitkwargs",
    "page": "Docstrings",
    "title": "AsyPlots.splitkwargs",
    "category": "function",
    "text": "splitkwargs(pooled_kwargs,options_to_separate)\n\nSplit a pooled list of keyword arguments into kwargs in options_to_separate and the rest\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AsyPlots.ArrowAsyPlots.Arrow3AsyPlots.AsyPlotsAsyPlots.AsyStringAsyPlots.BoundingBoxAsyPlots.CircleAsyPlots.Circle2DAsyPlots.CubicInterpolationAsyPlots.GraphicElementAsyPlots.GraphicElement2DAsyPlots.GraphicElement3DAsyPlots.GraphicStringAsyPlots.ITAsyPlots.JunoAsyPlots.LabelAsyPlots.Label2DAsyPlots.Label3DAsyPlots.LinearInterpolationAsyPlots.NamedColorAsyPlots.NoArrowAsyPlots.NoPenAsyPlots.PathAsyPlots.Path2DAsyPlots.Path3DAsyPlots.PenAsyPlots.PixelMapAsyPlots.PlotAsyPlots.Plot2DAsyPlots.Plot3DAsyPlots.PointAsyPlots.Point2DAsyPlots.Point3DAsyPlots.PolygonAsyPlots.Polygon2DAsyPlots.Polygon3DAsyPlots.RawStringAsyPlots.RealOrComplexAsyPlots.ScaleAsyPlots.Scale2DAsyPlots.ShiftAsyPlots.Shift2DAsyPlots.SurfaceAsyPlots.TransformAsyPlots.Vec2AsyPlots.Vec3AsyPlots._BACKENDAsyPlots._DEFAULT_ARROW_KWARGSAsyPlots._DEFAULT_CIRCLE2D_KWARGSAsyPlots._DEFAULT_HEATMAP_KWARGSAsyPlots._DEFAULT_ISOLINE_KWARGSAsyPlots._DEFAULT_LABEL2D_KWARGSAsyPlots._DEFAULT_LABEL3D_KWARGSAsyPlots._DEFAULT_PATH2D_KWARGSAsyPlots._DEFAULT_PATH3D_KWARGSAsyPlots._DEFAULT_PEN_ARGSAsyPlots._DEFAULT_PIXELMAP_KWARGSAsyPlots._DEFAULT_PLOT2D_KWARGSAsyPlots._DEFAULT_PLOT3D_KWARGSAsyPlots._DEFAULT_POINT2D_KWARGSAsyPlots._DEFAULT_POINT3D_KWARGSAsyPlots._DEFAULT_POLYGON2D_KWARGSAsyPlots._DEFAULT_POLYGON3D_KWARGSAsyPlots._DEFAULT_SURFACE_KWARGSAsyPlots._DEFAULT_WIDTHAsyPlots._FIT_DIMENSIONAsyPlots._HAVE_ASYAsyPlots._JUNO_ASY_FORMATAsyPlots._JUNO_CAIRO_FORMATAsyPlots._SHOW_PLOTSAsyPlots.__init__AsyPlots._is_ijuliaAsyPlots._is_junoAsyPlots.addtocontext!AsyPlots.animateAsyPlots.arrowheadAsyPlots.aspectratioAsyPlots.asyAsyPlots.axesAsyPlots.blueAsyPlots.boundingboxAsyPlots.boxAsyPlots.bytesAsyPlots.cairoAsyPlots.check_asy_presentAsyPlots.cmapAsyPlots.colorplacesAsyPlots.counterclockwiseAsyPlots.defaultcolorAsyPlots.defaultwidthAsyPlots.det3pAsyPlots.distanceAsyPlots.enclosequoteAsyPlots.evalAsyPlots.extensionAsyPlots.filterjoinAsyPlots.fitheightAsyPlots.fitsquareAsyPlots.fitwidthAsyPlots.greenAsyPlots.heatmapAsyPlots.histogramAsyPlots.includeAsyPlots.interactiveAsyPlots.is_no_penAsyPlots.isclipAsyPlots.isdefaultAsyPlots.isinsideAsyPlots.isolinesAsyPlots.iswellinsideAsyPlots.junodefaultAsyPlots.junopngAsyPlots.junosvgAsyPlots.kwargstringAsyPlots.layoutAsyPlots.lwcorrectAsyPlots.otherargsAsyPlots.pairsAsyPlots.piechartAsyPlots.plotAsyPlots.process_pen_kwargsAsyPlots.redAsyPlots.sans_extensionAsyPlots.saveAsyPlots.sectorAsyPlots.showplotsAsyPlots.splitkwargsAsyPlots.updatedvals"
},

]}
