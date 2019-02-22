var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Rectangle-1",
    "page": "Readme",
    "title": "Rectangle",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This is a simplified rectangle library for simple tasks with 2-D rectangles. While the library will be enhanced for further functionalities, this will not be made to work for higher dimensions. The numeric data types for most operations are preserved to the extent practicable. However, where there is a natural affinity for the results to be Float those are given emphasis. Currently the following methods are available."
},

{
    "location": "#Methods-for-2-D-Rectangles-1",
    "page": "Readme",
    "title": "Methods for 2-D Rectangles",
    "category": "section",
    "text": "w(r) - Width\nh(r) - Height\narea(r) - Area\nperimeter(r) - Perimeter\nLines methods for rectangle ABCD\nvlines(r) - returns line segments (AB, DC)\nhlines(r) - returns line segments (AD, BC)\nlines(r)  - returns line segments [AB, DC, AD, BC]\nolines(r) - returns line segments [AB, BC, CD, DA]\ndiags(r)  - returns line segments [AC, BD]\nunion(r1, r2) - Union of two rectangles resulting in a larger rectangle.\nintersect(r1, r2) - Intersection of two rectangles.\nintersects(r1, r2) - If rectangle r1 and r2 intersect each other.\nintersects(r, l) - If rectangle r and line l intersect each other.\ninside(p, r) - Point p is inside rectangle r\ninside(ri, ro) - Rectangle ri is fully enclosed in ro\ncg(r) - Center of gravity of the rectangle r\nto_plot_shape(r) - Shape object to be used in Plots library.\nprojectX(r1, r2) - Find overlap regions when projected onto X-axis.\nprojectY(r1, r2) - Find overlap regions when projected onto Y-axis\nvisibleX(r1, r2), visibleY(r1, r2) - Projects the rectangles along the X-axis(Y-axis) and returns a rectangle area which is completely visible from both rectangles.has_x_overlap(r1, r2), has_y_overlap(r1, r2) - If rectangles have overlap along thex-direction (y-direction).avg_min_dist(r1, r2) - Rectangles are essentially point sets. Hence, one canperceive existence of a minimum distance of one point in r1 from r2. Similar, distance would also exist for every point in r2 from r1.min_dist(r1, r2) - The gap between two rectangular regions. If there is overlap along aspecific direction 0 will be returned.create_ordered_map(rects, values; dir=1, reverseMax=zero(T)) - Ordered list of rectangles and associate data values. dir=1 orders the rectangles by x-axis first and 2 by y-axis. reverseMax parameter provides the primary index to be sorted by reverse order. If the value of reverseMax > zero(T) then the ranges are subtracted from the range parameters so that they are sorted in a reverse order. This is  particularly useful to return values of intersect in a reverse order from top to bottom  or right to left.\nintersect(ordered_rect_map, rect) - Return all the values for rectangles that intersectwith rect.insert_rect!(ordered_rect_map, rect, value) - Insert value associated with the rect.\ndelete_rect!(ordered_rect_map, rect) - Delete associated value for the rect. Returnsthe associated value.vline_xsection(rect, vlines) - Given a Rectangle and a set of already sorted set of vertical lines ordered left to right, provides the indices that  intersect the rectangle.hline_xsection(rect, hlines) - Given a Rectangle and a set of a sorted set of horizontal lines ordered top to bottom, provides the indices that intersect  the rectangle."
},

{
    "location": "#Methods-for-2-D-Lines-1",
    "page": "Readme",
    "title": "Methods for 2-D Lines",
    "category": "section",
    "text": "Line - Representation of a line in 2-D.\nisHorizontal(l), isVertical(l) - Returns if the line are horizontal or vertical\nlength(l) - Length of the line\nreverse(l) - for a line AB returns line BA.\nparallelogram_area(l, p) - The area formed by the parallelogram formed by the line anda point.ratio(l,p) - if point p lies on line l, then it will divide the line at a ratio r : (1-r) otherwise nothingdiv(l, r) - the point that divides the line l at ratio r : (1-r)\nintersects(l1, l2) - if line l1 intersects l2. \nvert_asc(l1, l2) - isless function  that can be used to sort vertical linesin ascending order (left to right).horiz_desc(l1, l2) - isless function  that can be used to sort horizonal lines in descending order (top to bottom)."
},

{
    "location": "#Methods-for-Commonly-Used-Data-Structures-1",
    "page": "Readme",
    "title": "Methods for Commonly Used Data Structures",
    "category": "section",
    "text": "Searching and sorting the data are very common with simple geometrical objects like lines and rectangles in 2-D. Hence, simplified implementations of the following data structures are provided here. If you are looking out for more elaborate packages you can look at  DataStructures.jl or other such advanced data structure packages. Currently, only  insert! and delete! operations are supported. "
},

{
    "location": "#Binary-Search-Tree-1",
    "page": "Readme",
    "title": "Binary Search Tree",
    "category": "section",
    "text": ""
},

{
    "location": "#Red-and-Black-Tree-1",
    "page": "Readme",
    "title": "Red and Black Tree",
    "category": "section",
    "text": ""
},

{
    "location": "#Interval-Tree-1",
    "page": "Readme",
    "title": "Interval Tree",
    "category": "section",
    "text": ""
},

{
    "location": "#Contribution-1",
    "page": "Readme",
    "title": "Contribution",
    "category": "section",
    "text": "Pull Requests and Issues are ways to submit changes and enhancements."
},

{
    "location": "autodocs/#Rectangle.avg_min_dist",
    "page": "Docstrings",
    "title": "Rectangle.avg_min_dist",
    "category": "function",
    "text": "    avg_min_dist(r1::Rect, r2::Rect) -> dx::Float64, dy::Float64\n\nRectangles are essentially point sets. Hence, one can perceive existence of a minimum distance of one point in r1 from r2. Similar, distance would also exist for every point in r2 from r1. While, technically Euclidean distance metric can exist, the computation is fairly cumborsome. Here, we use the city block distance or L1-metric.\n\ndx: The distance in the x-direction dy: The distance in the y-direction\n\nThe minimum distance will be zero when the rectangles are intersecting. The distance also will be lower in a specific direction if there is an overlap of  the rectangles in that direction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.hline_xsection",
    "page": "Docstrings",
    "title": "Rectangle.hline_xsection",
    "category": "function",
    "text": "Given a Rectangle and a set of a sorted set of horizontal lines ordered\ntop to bottom, provides the indices that intersect the rectangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.horiz_desc",
    "page": "Docstrings",
    "title": "Rectangle.horiz_desc",
    "category": "function",
    "text": "`isless` function  that can be used to sort horizonal lines in descending\norder (top to bottom).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.intersects",
    "page": "Docstrings",
    "title": "Rectangle.intersects",
    "category": "function",
    "text": "    intersects(l1::Line{T}, l2::Line{T}) where {T <: Real} -> Bool\n\nIf l1 and l2 intersect each other. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.isHorizontal",
    "page": "Docstrings",
    "title": "Rectangle.isHorizontal",
    "category": "function",
    "text": "    isHorizontal(l::Line) -> Bool\n    isVertcal(l::Line) -> Bool\n\nIf the Line is horizontal or vertical.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "function",
    "text": "    length(l::Line) -> Float64\n\nThe length of the line segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.merge_axis_aligned",
    "page": "Docstrings",
    "title": "Rectangle.merge_axis_aligned",
    "category": "function",
    "text": "    merge_axis_aligned(alines::Vector{Line{T}}, \n                       axis::Int=1, \n                       order::Symbol=:increasing,\n                       tol::T=pcTol(T)) -> Vector{Line{T}}\n\nGiven an array of axis aligned lines, if the line ends touch or have an overlap the lines are merged into a larger segment. Lines which are not touching the other lines are left intact.\n\norder parameter can be in :increasing or :decreasing order in the direction of the axis. \n\naxis parameter can be 1 for horizontal lines and 2 for vertical lines. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.min_dist",
    "page": "Docstrings",
    "title": "Rectangle.min_dist",
    "category": "function",
    "text": "    min_dist(r1::Rect, r2::Rect) -> dx, dy\n\nMinimum distance or gap between two rectangles.\n\ndx: The distance in the x-direction dy: The distance in the y-direction\n\nThe minimum distance will be zero when the rectangles are overlapping in a direction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.parallelogram_area",
    "page": "Docstrings",
    "title": "Rectangle.parallelogram_area",
    "category": "function",
    "text": "    parallelogram_area(m::Matrix) -> Number\n\nArea of the parallelogram. The matrix is a 2x3 matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.projectX",
    "page": "Docstrings",
    "title": "Rectangle.projectX",
    "category": "function",
    "text": "    projectX(r1::Rect, r2::Rect) -> (left, overlap, right)\n\nProjects the rectangles along the X-axis and returns three parts of rectangles.\n\nleft: The left segment of the projection overlap: If there is any overlap between the rectangles right: The right segment of the projection\n\nEach portion is returned as a tuple.\n\nIf the rectangle is part of the first rectangle, it\'s returned as the first element of the tuple. nothing is returned for a part when a portion is not available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.projectY",
    "page": "Docstrings",
    "title": "Rectangle.projectY",
    "category": "function",
    "text": "    projectY(r1::Rect, r2::Rect) -> (bottom, overlap, top)\n\nProjects the rectangles along the Y-axis and returns three parts of rectangles.\n\nbottom: The bottom segment of the projection overlap: If there is any overlap between the rectangles top: The top segment of the projection\n\nEach portion is returned as a tuple.\n\nIf the rectangle is part of the first rectangle, it\'s returned as the first element of the tuple. nothing is returned for a part when a portion is not available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.ratio",
    "page": "Docstrings",
    "title": "Rectangle.ratio",
    "category": "function",
    "text": "    ratio(l1::Line{T}, p::Vector{T}) -> r::Real\n\nIf p is on l1 it divides the line at ratio r:(1-r) else nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.vert_asc",
    "page": "Docstrings",
    "title": "Rectangle.vert_asc",
    "category": "function",
    "text": "`isless` function  that can be used to sort vertical lines in ascending\norder (left to right).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.visibleX",
    "page": "Docstrings",
    "title": "Rectangle.visibleX",
    "category": "function",
    "text": "    visibleX(r1::Rect, r2::Rect) -> Rect\n    visibleY(r1::Rect, r2::Rect) -> Rect\n\nProjects the rectangles along the X-axis (Y-axis) and returns a rectangle area which is completely visible from both rectangles.\n\nnothing is returned when there is no overlap along the X-axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rectangle.vline_xsection",
    "page": "Docstrings",
    "title": "Rectangle.vline_xsection",
    "category": "function",
    "text": "Given a Rectangle and a set of already sorted set of vertical lines ordered\nleft to right, provides the indices that intersect the rectangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Rectangle.AbstractBSTRectangle.AbstractNodeRectangle.BSTNodeRectangle.BinarySearchTreeRectangle.IntervalRectangle.IntervalKeyRectangle.IntervalNodeRectangle.IntervalTreeRectangle.IteratorRectangle.LineRectangle.OrderedRectMapRectangle.OrderedRectMapXRectangle.OrderedRectMapYRectangle.RBNodeRectangle.RBTreeRectangle.RectRectangle.RectangleRectangle._delete!Rectangle._delete_fixup!Rectangle._extremumRectangle._inorderRectangle._insert!Rectangle._insert_fixup!Rectangle._intersectRectangle._kRectangle._lRectangle._l!Rectangle._maximumRectangle._minimumRectangle._nvRectangle._pRectangle._p!Rectangle._pred_succRectangle._predecessorRectangle._rRectangle._r!Rectangle._searchRectangle._successorRectangle._transplant!Rectangle._vRectangle.areaRectangle.avg_min_distRectangle.axis_parallelRectangle.c_hiRectangle.c_loRectangle.cgRectangle.coordRectangle.create_ordered_mapRectangle.delete_rect!Rectangle.diagsRectangle.endofRectangle.evalRectangle.exRectangle.eyRectangle.get_intersect_dataRectangle.get_overlapped_distRectangle.hRectangle.has_overlapRectangle.has_x_overlapRectangle.has_y_overlapRectangle.hline_xsectionRectangle.hlinesRectangle.horiz_descRectangle.includeRectangle.insert_rect!Rectangle.insideRectangle.intersect_axis_alignedRectangle.intersectsRectangle.isHorizontalRectangle.isVerticalRectangle.isnilRectangle.lbRectangle.left_rotate!Rectangle.lengthRectangle.line_xsectionRectangle.linesRectangle.lxRectangle.lyRectangle.merge_axis_alignedRectangle.min_distRectangle.node_printRectangle.notvoidRectangle.olinesRectangle.overlapsRectangle.parallelogram_areaRectangle.pcTolRectangle.perimeterRectangle.projectRectangle.projectXRectangle.projectYRectangle.ratioRectangle.right_rotate!Rectangle.ruRectangle.rxRectangle.ryRectangle.sortrRectangle.startRectangle.sxRectangle.syRectangle.to_plot_shapeRectangle.unionRectangle.update_submax!Rectangle.vert_ascRectangle.visibleRectangle.visibleXRectangle.visibleYRectangle.vline_xsectionRectangle.vlinesRectangle.wRectangle.xRectangle.xsortRectangle.yRectangle.ysort"
},

]}
