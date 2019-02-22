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
    "text": "w(r) - Width\nh(r) - Height\narea(r) - Area\nperimeter(r) - Perimeter\nLines methods for rectangle ABCD\nvlines(r) - returns line segments (AB, DC)\nhlines(r) - returns line segments (AD, BC)\nlines(r)  - returns line segments [AB, DC, AD, BC]\nolines(r) - returns line segments [AB, BC, CD, DA]\ndiags(r)  - returns line segments [AC, BD]\nunion(r1, r2) - Union of two rectangles resulting in a larger rectangle.\nintersect(r1, r2) - Intersection of two rectangles.\nintersects(r1, r2) - If rectangle r1 and r2 intersect each other.\nintersects(r, l) - If rectangle r and line l intersect each other.\ninside(p, r) - Point p is inside rectangle r\ninside(ri, ro) - Rectangle ri is fully enclosed in ro\ncg(r) - Center of gravity of the rectangle r\nto_plot_shape(r) - Shape object to be used in Plots library.\nprojectX(r1, r2) - Find overlap regions when projected onto X-axis.\nprojectY(r1, r2) - Find overlap regions when projected onto Y-axis\nvisibleX(r1, r2), visibleY(r1, r2) - Projects the rectangles along the X-axis(Y-axis) and returns a rectangle area which is completely visible from both rectangles.has_x_overlap(r1, r2), has_y_overlap(r1, r2) - If rectangles have overlap along thex-direction (y-direction).avg_min_dist(r1, r2) - Rectangles are essentially point sets. Hence, one canperceive existence of a minimum distance of one point in r1 from r2. Similar, distance would also exist for every point in r2 from r1.min_dist(r1, r2) - The gap between two rectangular regions. If there is overlap along aspecific direction 0 will be returned.create_ordered_map(rects, values; dir=1, reverseMax=zero(T)) - Ordered list of rectangles and associate data values. dir=1 orders the rectangles by x-axis first and 2 by y-axis. reverseMax parameter provides the primary index to be sorted by reverse order. If the value of reverseMax > zero(T) then the ranges are subtracted from the range parameters so that they are sorted in a reverse order. This is  particularly useful to return values of intersect in a reverse order from top to bottom  or right to left.\nintersect(ordered_rect_map, rect) - Return all the values for rectangles that intersectwith rect.insert_rect!(ordered_rect_map, rect, value) - Insert value associated with the rect.\ndelete_rect!(ordered_rect_map, rect) - Delete associated value for the rect. Returnsthe associated value."
},

{
    "location": "#Methods-for-2-D-Lines-1",
    "page": "Readme",
    "title": "Methods for 2-D Lines",
    "category": "section",
    "text": "Line - Representation of a line in 2-D.\nisHorizontal(l), isVertical(l) - Returns if the line are horizontal or vertical\nlength(l) - Length of the line\nreverse(l) - for a line AB returns line BA.\nparallelogram_area(l, p) - The area formed by the parallelogram formed by the line anda point.ratio(l,p) - if point p lies on line l, then it will divide the line at a ratio r : (1-r) otherwise nothingdiv(l, r) - the point that divides the line l at ratio r : (1-r)\nintersects(l1, l2) - if line l1 intersects l2. "
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

]}
