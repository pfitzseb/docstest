var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Graphics.jl-1",
    "page": "Readme",
    "title": "Graphics.jl",
    "category": "section",
    "text": "A holding place for Base graphics(Image: Graphics) (Image: Graphics)Julia 0.3 Base.Graphics docs."
},

{
    "location": "autodocs/#Graphics.BoundingBox",
    "page": "Docstrings",
    "title": "Graphics.BoundingBox",
    "category": "type",
    "text": "BoundingBox(xmin, xmax, ymin, ymax) -> bb\n\nCreate a representation bb of a rectangular region, specifying the coordinates of the horizontal (x) and vertical (y) edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.Graphics",
    "page": "Docstrings",
    "title": "Graphics.Graphics",
    "category": "module",
    "text": "Graphics defines an API for drawing in two dimensions.\n\nGeometric primitives: Vec2, Point, BoundingBox\nGeometry API: aspect_ratio, center, deform, diagonal, isinside, shift, height, width, xmin, xmax, ymin, ymax, xrange, yrange\n2d drawing contexts: GraphicsDevice, GraphicsContext, creategc, getgc\nCoordinate systems: set_coordinates, reset_transform, rotate, scale, translate, user_to_device!, device_to_user!, user_to_device_distance!, device_to_user_distance!, user_to_device, device_to_user\nLines: set_line_width, set_dash\nColors and painting (drawing attributes): set_source, set_source_rgb, set_source_rgba, save, restore\nClipping: clip, clip_preserve, reset_clip, inner_canvas\nPaths: move_to, line_to, rel_line_to, rel_move_to, new_path, new_sub_path, close_path, arc\nHigh-level paths: rectangle, circle, polygon\nFill and stroke: fill, fill_preserve, paint, stroke, stroke_preserve, stroke_transformed, stroke_transformed_preserve\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.Point",
    "page": "Docstrings",
    "title": "Graphics.Point",
    "category": "type",
    "text": "Point(x, y) -> p\n\nCreate a Cartesian representation p of a point in two dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.Vec2",
    "page": "Docstrings",
    "title": "Graphics.Vec2",
    "category": "type",
    "text": "Vec2(x, y) -> v\n\nCreate a Cartesian representation v of a vector (or point) in two dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.aspect_ratio",
    "page": "Docstrings",
    "title": "Graphics.aspect_ratio",
    "category": "function",
    "text": "aspect_ratio(bb::BoundingBox) -> r\n\nCompute the ratio r of the height and width of bb.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.deform",
    "page": "Docstrings",
    "title": "Graphics.deform",
    "category": "function",
    "text": "deform(bb::BoundingBox, Δl, Δr, Δt, Δb) -> bbnew\n\nAdd Δl (left), Δr (right), Δt (top), and Δb (bottom) to the edges of a BoundingBox.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.inner_canvas",
    "page": "Docstrings",
    "title": "Graphics.inner_canvas",
    "category": "function",
    "text": "inner_canvas(c::GraphicsContext, device::BoundingBox, user::BoundingBox)\ninner_canvas(c::GraphicsContext, x, y, w, h, l, r, t, b)\n\nCreate a rectangular drawing area inside device (represented in device-coordinates), giving it user-coordinates user. Any drawing that occurs outside this box is clipped.\n\nx, y, w, and h are an alternative parametrization of device, and l, r, t, b parametrize user.\n\nSee also: set_coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.isinside",
    "page": "Docstrings",
    "title": "Graphics.isinside",
    "category": "function",
    "text": "isinside(bb::BoundingBox, p::Point) -> tf::Bool\nisinside(bb::BoundingBox, x, y) -> tf::Bool\n\nDetermine whether the point lies within bb.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.rotate",
    "page": "Docstrings",
    "title": "Graphics.rotate",
    "category": "function",
    "text": "rotate(p::Vec2, angle::Real, o::Vec2) -> pnew\n\nRotate p around o by angle.\n\n\n\n\n\nrotate(bb::BoundingBox, angle, o) -> bbnew\n\nRotate bb around o by angle, returning the BoundingBox that encloses the vertices of the rotated box.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.set_coordinates",
    "page": "Docstrings",
    "title": "Graphics.set_coordinates",
    "category": "function",
    "text": "set_coordinates(c::GraphicsContext, device::BoundingBox, user::BoundingBox)\nset_coordinates(c::GraphicsContext, user::BoundingBox)\n\nSet the device->user coordinate transformation of c so that device, expressed in \"device coordinates\" (pixels), is equivalent to user as expressed in \"user coordinates\". If device is omitted, it defaults to the full span of c, BoundingBox(0, width(c), 0, height(c)).\n\nSee also get_matrix, set_matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.shift",
    "page": "Docstrings",
    "title": "Graphics.shift",
    "category": "function",
    "text": "shift(bb::BoundingBox, Δx, Δy) -> bbnew\n\nShift center by (Δx,Δy), keeping width & height fixed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Graphics.@mustimplementGraphics.BoundingBoxGraphics.GraphicsGraphics.GraphicsContextGraphics.GraphicsDeviceGraphics.PointGraphics.Vec2Graphics._set_coordinatesGraphics.arcGraphics.aspect_ratioGraphics.centerGraphics.circleGraphics.clipGraphics.clip_preserveGraphics.close_pathGraphics.creategcGraphics.d2ubufGraphics.deformGraphics.device_to_userGraphics.device_to_user!Graphics.device_to_user_distance!Graphics.diagonalGraphics.evalGraphics.fillGraphics.fill_preserveGraphics.getgcGraphics.heightGraphics.includeGraphics.inner_canvasGraphics.isinsideGraphics.line_toGraphics.move_toGraphics.new_pathGraphics.new_sub_pathGraphics.paintGraphics.polygonGraphics.rectangleGraphics.rel_line_toGraphics.rel_move_toGraphics.reset_clipGraphics.reset_transformGraphics.restoreGraphics.rotateGraphics.saveGraphics.scaleGraphics.set_coordinatesGraphics.set_coordsGraphics.set_dashGraphics.set_line_widthGraphics.set_sourceGraphics.set_source_rgbGraphics.set_source_rgbaGraphics.shiftGraphics.strokeGraphics.stroke_preserveGraphics.stroke_transformedGraphics.stroke_transformed_preserveGraphics.translateGraphics.user_to_deviceGraphics.user_to_device!Graphics.user_to_device_distance!Graphics.widthGraphics.with_aspect_ratioGraphics.xmaxGraphics.xminGraphics.xrangeGraphics.ymaxGraphics.yminGraphics.yrange"
},

]}
