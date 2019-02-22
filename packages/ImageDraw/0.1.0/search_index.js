var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageDraw-1",
    "page": "Readme",
    "title": "ImageDraw",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)Drawing Package for JuliaImages"
},

{
    "location": "autodocs/#ImageDraw.CirclePointRadius",
    "page": "Docstrings",
    "title": "ImageDraw.CirclePointRadius",
    "category": "type",
    "text": "circle = CirclePointRadius(center, ρ)\n\nA Drawable circle having center center and radius ρ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.CircleThreePoints",
    "page": "Docstrings",
    "title": "ImageDraw.CircleThreePoints",
    "category": "type",
    "text": "circle = CircleThreePoints(p1, p2, p3)\n\nA Drawable circle passing through points p1, p2 and p3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.Drawable",
    "page": "Docstrings",
    "title": "ImageDraw.Drawable",
    "category": "type",
    "text": "Type representing any object drawable on image\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.Ellipse",
    "page": "Docstrings",
    "title": "ImageDraw.Ellipse",
    "category": "type",
    "text": "ellipse = Ellipse(center, ρx, ρy)\n\nA Drawable ellipse with center center and parameters ρx and ρy\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.LineNormal",
    "page": "Docstrings",
    "title": "ImageDraw.LineNormal",
    "category": "type",
    "text": "line = LineNormal(ρ, θ)\n\nA Drawable infinte length line having perpendicular length ρ from origin and angle θ between the perpendicular and x-axis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.LineSegment",
    "page": "Docstrings",
    "title": "ImageDraw.LineSegment",
    "category": "type",
    "text": "ls = LineSegment(p1, p2)\n\nA Drawable finite length line between p1 and p2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.LineTwoPoints",
    "page": "Docstrings",
    "title": "ImageDraw.LineTwoPoints",
    "category": "type",
    "text": "line = LineTwoPoints(p1, p2)\n\nA Drawable infinite length line passing through the two points p1 and p2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.Path",
    "page": "Docstrings",
    "title": "ImageDraw.Path",
    "category": "type",
    "text": "path = Path([point])\n\nA Drawable sequence of line segments connecting consecutive pairs of points in [point].\n\nnote: Note\nThis will create a non-closed path. For a closed path, see Polygon\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.Point",
    "page": "Docstrings",
    "title": "ImageDraw.Point",
    "category": "type",
    "text": "p = Point(x,y)\np = Point(c)\n\nA Drawable point on the image\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.Polygon",
    "page": "Docstrings",
    "title": "ImageDraw.Polygon",
    "category": "type",
    "text": "polygon = Polygon([vertex])\n\nA Drawable polygon i.e. a closed path created by joining the consecutive points in [vertex] along with the first and last point.\n\nnote: Note\nThis will create a closed path. For a non-closed path, see Path\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.RegularPolygon",
    "page": "Docstrings",
    "title": "ImageDraw.RegularPolygon",
    "category": "type",
    "text": "rp = RegularPolygon(center, side_count, side_length, θ)\n\nA Drawable regular polygon.\n\n#Arguments\n\ncenter::Point : the center of the polygon\nside_count::Int : number of sides of the polygon\nside_length::Real : length of each side\nθ::Real : orientation of the polygon w.r.t x-axis (in radians)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.draw",
    "page": "Docstrings",
    "title": "ImageDraw.draw",
    "category": "function",
    "text": "img_new = draw(img, drawable, color)\nimg_new = draw(img, [drawable], [color])\n\nDraws the drawable object on a copy of image img using color color. Can also draw multiple Drawable objects when passed as a AbstractVector{Drawable} with corresponding colors in [color]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDraw.draw!",
    "page": "Docstrings",
    "title": "ImageDraw.draw!",
    "category": "function",
    "text": "img = draw!(img, drawable, color)\nimg = draw!(img, drawable)\n\nDraws drawable on img using color color which defaults to oneunit(eltype(img))\n\n\n\n\n\nimg = draw!(img, [drawable], [color])\nimg = draw!(img, [drawable] ,color)\nimg = draw!(img, [drawable])\n\nDraws all objects in [drawable] in the given order on img using corresponding colors from [color] which defaults to oneunit(eltype(img)) If only a single color color is specified then all objects will be colored with that color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ImageDraw.CircleImageDraw.CirclePointRadiusImageDraw.CircleThreePointsImageDraw.DrawableImageDraw.EllipseImageDraw.ImageDrawImageDraw.LineImageDraw.LineNormalImageDraw.LineSegmentImageDraw.LineTwoPointsImageDraw.PathImageDraw.PointImageDraw.PolygonImageDraw.RegularPolygonImageDraw.bresenhamImageDraw.drawImageDraw.draw!ImageDraw.evalImageDraw.fpartImageDraw.get_valid_intersectionsImageDraw.includeImageDraw.rfpartImageDraw.swapImageDraw.xiaolin_wu"
},

]}
