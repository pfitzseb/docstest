var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleDrawing-1",
    "page": "Readme",
    "title": "SimpleDrawing",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This package provides some convenient drawing tools derived from the Plots module. It also defines the draw() function that can be extended by other modules including DrawSimpleGraphs, HyperbolicPlane, and (maybe some day) poset drawing for SimplePosets."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#General-1",
    "page": "Readme",
    "title": "General",
    "category": "section",
    "text": "newdraw() presents a blank canvas on which to draw (and erases anythingthat\'s already in that window).finish() ensures that the figure appears on the screen withaspect ratio equal to 1, and that we hide the axes, grid, and legend.draw() does nothing. It is a placeholder function for other modules tooverride."
},

{
    "location": "#Drawing-Specific-Shapes-1",
    "page": "Readme",
    "title": "Drawing Specific Shapes",
    "category": "section",
    "text": "draw_point(x::Real,y::Real;opts...) plots a point (small disk). Thismay also be invoked as draw_point(z::Complex). If plist is a list of complex numbers, may also use draw_point(plist) to draw all those points.draw_segment(x::Real,y::Real,xx::Real,yy::Real;opts...) draws aline segment from (x,y) to (xx,yy). May also be invoked as draw_segment(z::Complex,zz::Complex).draw_vector(x::Real,y::Real) draws a vector from (0,0) to (x,y). Adifferent base point may be specified draw_vector(x,y,basex,basey) in which case the vector starts at (basex,basey) and extends to (basex+x,basey+y). This may also be used with complex arguments: draw_vector(z) and draw_vector(z, basez).draw_arc(x::Real,y::Real,r::Real,t1::Real,t2::Real;opts...) draws anarc of a circle centered at (x,y), with radius r, and arcing between angles t1 and t2.draw_arc(a::Complex,b::Complex,c::Complex;opts...) drawsthe arc with end points a and c passing through b.draw_circle(x::Real,y::Real,r::Real;opts...) draws a circle centeredat (x,y) with radius r. Also draw_circle(z::Complex,r::Real;opts...).draw_curve(pts;opts...) draws a curve through the points specified by pts, aone-dimensional array of complex numbers. By default, this gives a closed curve. To draw an open curve, use draw(pts,false;opts...)"
},

{
    "location": "#Supporting-Functions-1",
    "page": "Readme",
    "title": "Supporting Functions",
    "category": "section",
    "text": "find_center(a,b,c) returns the center of the circle that passes throughthe three points (represented as complex numbers). Returns inf + inf*im if the points are collinear.non_collinear_check(a,b,c) checks if the three points (represented as complex numbers) are noncollinear; returns true if so and false if they are collinear (including if two are the same)."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using SimpleDrawing, Plots\nnewdraw()\ndraw_circle(1,1,2; color=:red)\ndraw_arc(2,1,1,0,pi; color=:blue, linestyle=:dash)\ndraw_segment(-1+im,1+im; color=:green, linestyle=:dot)\nsavefig(\"example.png\")(Image: )"
},

{
    "location": "#Splines-1",
    "page": "Readme",
    "title": "Splines",
    "category": "section",
    "text": "The implementation of draw_curve relies on cubic splines. Let y be an n-long array of numbers. Then use one of these to create an interpolating spline:S = Spline(y,:open) for an open-ended spline.\nS = Spline(y,:closed) for a periodic spline.In both cases, S(1)==y[1] through S(n)==y[n]. For closed splines, however, S(n+1)==y[1] and so forth.Note that while S can be applied like a function, if is not a Julia Function. Thus plot(S,1,4) won\'t work. To convert a spline to a callable function, use funk(S).The derivative of S is available as S\'. The derivative is also of type Spline; to plot its values over the interval [a,b], use plot(funk(S\'),a,b)."
},

{
    "location": "autodocs/#SimpleDrawing.Cubic",
    "page": "Docstrings",
    "title": "SimpleDrawing.Cubic",
    "category": "type",
    "text": "Cubic(a,b,c,d) is a 3rd degree polynomial a+bx+cx^2+dx^3. Use f(x) to evalue f at the value x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.Spline",
    "page": "Docstrings",
    "title": "SimpleDrawing.Spline",
    "category": "type",
    "text": "Spline(vals,kind) returns a cubic spline based on the values in vals. The resulting spline S will have the property that S(1)==y[1], S(2)==y[2], and so on up to S(n)==y[n] where n is the length of y.\n\nIf kind is :open then the second derivatives at the end points will be zero. (This is the default.)\nIf kind is :closed then we assume that we are interpolating a periodic function where S(n+1)==S(1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.draw_arc",
    "page": "Docstrings",
    "title": "SimpleDrawing.draw_arc",
    "category": "function",
    "text": "draw_arc(x,y,r,t1,t2) draws the shorter arc centered at (x,y) with radius r between angles t1 and t2.\n\n\n\n\n\ndraw_arc(a,b,c) where the arguments are Complex: Draw the arc from a through b to c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.draw_circle",
    "page": "Docstrings",
    "title": "SimpleDrawing.draw_circle",
    "category": "function",
    "text": "draw_circle(x,y,r) (or draw_circle(z,r)) draws a circle centered at (x,y) (at z) with radius r.\n\n\n\n\n\ndraw_circle(a,b,c) draws a circle through the points given by the three complex arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.draw_curve",
    "page": "Docstrings",
    "title": "SimpleDrawing.draw_curve",
    "category": "function",
    "text": "draw_curve(plist) draws a closed curve through points in the plist which is a 1-dimensional list of complex numbers. Use draw_curve(plist,false) for an open curve.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.draw_point",
    "page": "Docstrings",
    "title": "SimpleDrawing.draw_point",
    "category": "function",
    "text": "draw_point(x,y) [or draw_point(z)] draws a point at coordinates (x,y) [or complex location z].\n\ndraw_point(list) plots all the points in the one-dimensional list of complex values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.draw_segment",
    "page": "Docstrings",
    "title": "SimpleDrawing.draw_segment",
    "category": "function",
    "text": "draw_segment(x,y,xx,yy) draws a line segment from (x,y) to (xx,yy). Also draw_segment(z,zz) for Complex arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.draw_vector",
    "page": "Docstrings",
    "title": "SimpleDrawing.draw_vector",
    "category": "function",
    "text": "draw_vector is used to draw vectors (line segments with an arrow at one end). The variations are:\n\ndraw_vector(x,y) draws a vector from the origin to (x,y).\ndraw_vector(x,y,basex,basey) draws a vector from (basex,basey) to\n\n(basex+x,basey+y).\n\ndraw_vector(z) draws a vector from the origin to the complex value z.\ndraw_vector(z,basez) draws a vector from the complex location basez to\n\nz+basez.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.find_center",
    "page": "Docstrings",
    "title": "SimpleDrawing.find_center",
    "category": "function",
    "text": "find_center(a,b,c): Given three points in the complex plane, find the point z that is equidistant from all three. If the three points are collinear then return Inf + Inf*im.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.finish",
    "page": "Docstrings",
    "title": "SimpleDrawing.finish",
    "category": "function",
    "text": "finish() is used to clean up a drawing after various calls to draw. It removes the axes and the grid lines, and sets the aspect ratio to one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.funk",
    "page": "Docstrings",
    "title": "SimpleDrawing.funk",
    "category": "function",
    "text": "funk(S) converts the Spline S into a callable function (e.g., that can be passed to plot).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.newdraw",
    "page": "Docstrings",
    "title": "SimpleDrawing.newdraw",
    "category": "function",
    "text": "newdraw() clears the screen and sets up a blank drawing canvas with no axis, grid, or legend, and sets the aspect ratio to 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.non_colinear_check",
    "page": "Docstrings",
    "title": "SimpleDrawing.non_colinear_check",
    "category": "function",
    "text": "non_colinear_check(a,b,c): test if the complex numbers are distinct and noncollinear.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleDrawing.CubicSimpleDrawing.SimpleDrawingSimpleDrawing.SplineSimpleDrawing.closed_splineSimpleDrawing.drawSimpleDrawing.draw_arcSimpleDrawing.draw_circleSimpleDrawing.draw_curveSimpleDrawing.draw_pointSimpleDrawing.draw_segmentSimpleDrawing.draw_vectorSimpleDrawing.evalSimpleDrawing.find_centerSimpleDrawing.finishSimpleDrawing.funkSimpleDrawing.includeSimpleDrawing.is_closedSimpleDrawing.newdrawSimpleDrawing.non_colinear_checkSimpleDrawing.npatchesSimpleDrawing.open_spline"
},

]}
