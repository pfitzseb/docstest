var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Displaz-1",
    "page": "Readme",
    "title": "Displaz",
    "category": "section",
    "text": "Bindings for the displaz lidar viewer for flexible three dimensional plotting of large point clouds, lines and meshes."
},

{
    "location": "#Quickstart-1",
    "page": "Readme",
    "title": "Quickstart",
    "category": "section",
    "text": "To plot a point cloud of 10⁵ points, where every point position is a column in a matrix:using Displaz\n\nplot3d!(10*randn(3,100000))To plot a point cloud of 10⁶ points with random orange and red HSV colors:using Displaz\nusing Colors\n\nN = 1000_000\nposition = 10*randn(3,N)\ncolor = [HSV(80*rand(), 0.8, 1) for i=1:N]\nplot3d!(position, color=color, label=\"Example2\")To plot a set of 5 vertices, and line series between a subset of these vertices:using Displaz\nusing Colors\nusing StaticArrays\n\n# Clear plots\nclearplot()\n\nN = 5\n# Random points\nposition = rand(SVector{3,Float64}, N)\n# Plot points\nplot3d!(position, color=[Gray{Float64}(i/N) for i=1:N], label=\"Example3 Points\")\n# Plot a pair of line series between vertices 1:2 and 3:5\nplot3d!(position, color=\"r\", linebreak=[1,3], markershape=\"-\", label=\"Example3 Lines\")\n# mutate the color of the first two points (efficient for modifying a subset of points)\nDisplaz.mutate!(\"Example3 Points\", 1:2; color = [Gray{Float64}(1.0)])"
},

{
    "location": "autodocs/#Displaz.clearplot",
    "page": "Docstrings",
    "title": "Displaz.clearplot",
    "category": "function",
    "text": "clearplot([plotobj::DisplazWindow=current()], [pattern1, ...])\n\nClear all or a subset of datasets in a plot window.\n\nIf not specified, plotobj is the current plot window.  If no patterns are supplied, clears all data sets.  If one or more patterns are given, the dataset labels matching those patterns will be removed.  Patterns shoudl be specified using unix shell glob pattern syntax.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.current",
    "page": "Docstrings",
    "title": "Displaz.current",
    "category": "function",
    "text": "Get handle to current figure window\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.event_loop",
    "page": "Docstrings",
    "title": "Displaz.event_loop",
    "category": "function",
    "text": "event_loop(callback::Function, [plotobj::DisplazWindow], event_list...)\n\nSubscribe to a list of events, calling callback each time one is received.\n\nEach event comes with some optional some state which is attached at the time the event is triggered.  The events are specified as a list of event=>state pairs.\n\nCurrently only KeyEvent is supported, with the possible arguments Nothing or CursorPosition.  For example:\n\nDisplaz.event_loop(\n        KeyEvent(\"c\")=>Nothing,\n        KeyEvent(\"p\")=>CursorPosition\n) do event, arg\n    @show event, arg\n    if event == KeyEvent(\"c\")\n        clearplot()\n    end\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.figure",
    "page": "Docstrings",
    "title": "Displaz.figure",
    "category": "function",
    "text": "Get figure window by name may be new or already existing\n\n\n\n\n\nGet figure window with given id\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.mutate!",
    "page": "Docstrings",
    "title": "Displaz.mutate!",
    "category": "function",
    "text": "mutate!([plotobj,] label, index; attr1=value1, ...))\n\nMutate the data in an existing displaz data set label, for instance to change the position or other attribute of a subset of points (with the advantage of reducing the amount of communication between Julia and displaz, and therefore increasing speed).\n\nindex is vector of indices with reference to the original plot. The attribute label is used to match with the correct data set within displaz. The position attribute controls the vertex positions, and the remainder match the original plotting command.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.newfigure",
    "page": "Docstrings",
    "title": "Displaz.newfigure",
    "category": "function",
    "text": "Create next incrementally named figure window, counting automatically from \"Figure 1\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.plot3d",
    "page": "Docstrings",
    "title": "Displaz.plot3d",
    "category": "function",
    "text": "Add 3D points or lines to the current plot.\n\n  plot3d([plotobj,] position; attr1=value1, ...)\n\nThe position array should be a set of N vertex positions, specified as 3xN array or a Vector of FixedVector{3}.  The plotobj argument is optional and determines which plot window to send the data to.  If it\'s not used the data will be sent to the plot window returned by current().\n\nTODO: Revisit the nasty decision of the shape of position again - the above choice is somewhat inconsistent with supplying markersize / markershape as a column vector :-(  Can we have a set of consistent broadcasting rules for this? It seems like the case of a 3x3 matrix will always be ambiguous if we try to guess what the user wants.\n\nData set attributes\n\nThe following attributes can be attached to a dataset on each call to plot3d:\n\nlabel - A string labeling the data set\n\nVertex attributes\n\nEach point may have a set of vertex attributes attached to control the visual representation and tag the point for inspection. You can pass any Vector of Float32 values for any custom information you like, but the following are supported by the default shader:\n\ncolor       - A color or vector of colors for each point; see below for                 ways to specify these.\nintensity   - A vector of the intensity of each point (between 0 and 1)\nmarkersize  - Vertex marker size\nmarkershape - Vector of vertex marker shapes.  Shape can be represented                 either by a Char or a numeric identifier between 0 and 4:\n\n                    sphere - \'.\' 0    square - \'s\' 1\n                    circle - \'o\' 2    times  - \'x\' 3\n                    cross  - \'+\' 4\n\nSpecifying colors\n\nColors may be provided in any of three ways:\n\nAs instances of types from the ColorTypes package, for example, HSV(180,1,1). These are converted to RGB using the RGB constructor.\nAs a Vector of three elements, red, green and blue, between 0.0 and 1.0.\nUsing a matlab-like single color letter name string or Char.  Supported are red, green, blue, cyan, magenta, yellow, black and white; all are abbreviated with the first letter of the color name except black for which \'k\' is used.\n\nA color per point may be supplied as a Vector of Color subtypes or a 3xN matrix with red, green and blue in the rows.\n\nPlotting points\n\nTo plot 10000 random points with distance from the origin determining the color, and random marker shapes:\n\n  P = randn(3,10000)\n  c = 0.5./sumabs2(P,1) .* [1,0,0]\n  plot3d(P, color=c, markershape=rand(1:4,10000))\n\nPlotting lines\n\nTo plot a piecewise linear curve between 10000 random vertices\n\n  plot3d(randn(3,10000), markershape=\"-\")\n\nWhen plotting lines, the linebreak keyword argument can be used to break the position array into multiple line segments.  Each index in the line break array is the initial index of a line segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.plot3d!",
    "page": "Docstrings",
    "title": "Displaz.plot3d!",
    "category": "function",
    "text": "Overwrite points or lines with the same label on the 3D plot\n\nSee plot3d for documentation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.plotimage",
    "page": "Docstrings",
    "title": "Displaz.plotimage",
    "category": "function",
    "text": "Add images to the current plot.\n\n  plotimage([plotobj,] texturefile, vertices; label=nothing, _overwrite_label=false)\n\nThe texturefile string should include the path (relative or absolute) to the image to be loaded (if not in the current folder). The vertices array should be a set of vertex positions specifying the corners of the image to plot. The order is anticlockwise starting from bottom left (i.e. (0,1), (1,1), (1,0), (0,0) in texture coordinates), and the vertices should be specified as a 3x4 array. The plotobj argument is optional and determines which plot window to send the data to.  If it\'s not used the data will be sent to the plot window returned by current().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.plotimage!",
    "page": "Docstrings",
    "title": "Displaz.plotimage!",
    "category": "function",
    "text": "Overwrite images with the same label\n\nSee plotimage for documentation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.set_displaz_cmd",
    "page": "Docstrings",
    "title": "Displaz.set_displaz_cmd",
    "category": "function",
    "text": "set_displaz_cmd(cmd)\n\nSet name or full path for where the displaz binary will be found to cmd. Defaults to the environment variable DISPLAZ_CMD, or the string \"displaz\" if that variable is not found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Displaz.viewplot",
    "page": "Docstrings",
    "title": "Displaz.viewplot",
    "category": "function",
    "text": "viewplot([plotobj::DisplazWindow=current()], label)\n\nSet the point of view of the 3D camera.  The camera model is designed to view an object at a given center of rotation, with rotations pivoting around that position.\n\nIf not specified, plotobj is the current plot window.  Keyword arguments define the camera view as follows:\n\nThe center argument may be a 3D point or the label of a data set. If a label is supplied the centroid of the associated dataset will be used.\nThe radius argument should be a number giving the distance that the camera will be away from the center of rotation.\nThe rotation argument specifies the angles at which the camera will view the scene.  This should be a matrix transforming points into the standard OpenGL camera coordinates (+x right, +y up, -z into the scene).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Displaz.CursorPositionDisplaz.DisplazDisplaz.DisplazWindowDisplaz.KeyEventDisplaz.__init__Displaz._argspec_strDisplaz._color_namesDisplaz._current_figureDisplaz._displaz_cmdDisplaz._eventspec_strDisplaz._figure_idDisplaz._shape_idsDisplaz.array_semanticDisplaz.clearplotDisplaz.color_semanticDisplaz.currentDisplaz.evalDisplaz.event_loopDisplaz.figureDisplaz.includeDisplaz.interpret_colorDisplaz.interpret_linebreakDisplaz.interpret_positionDisplaz.interpret_shapeDisplaz.mutate!Displaz.newfigureDisplaz.plot3dDisplaz.plot3d!Displaz.plotimageDisplaz.plotimage!Displaz.ply_property_nameDisplaz.ply_type_convertDisplaz.set_displaz_cmdDisplaz.vector_semanticDisplaz.viewplotDisplaz.viewplot_center_argsDisplaz.viewplot_radius_argsDisplaz.viewplot_rotation_argsDisplaz.write_ply_linesDisplaz.write_ply_pointsDisplaz.write_ply_texture"
},

]}
