var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Plots-1",
    "page": "Readme",
    "title": "Plots",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Join the chat at https://gitter.im/tbreloff/Plots.jl) <!– (Image: Plots) –> <!– (Image: Plots) –> <!– (Image: Coverage Status) –> <!– (Image: codecov.io) –>"
},

{
    "location": "#Created-by-Tom-Breloff-(@tbreloff)-1",
    "page": "Readme",
    "title": "Created by Tom Breloff (@tbreloff)",
    "category": "section",
    "text": ""
},

{
    "location": "#Maintained-by-the-[JuliaPlot-members](https://github.com/orgs/JuliaPlots/people)-1",
    "page": "Readme",
    "title": "Maintained by the JuliaPlot members",
    "category": "section",
    "text": "Plots is a plotting API and toolset.  My goals with the package are:Powerful.  Do more with less.  Complex visualizations become easy.\nIntuitive.  Stop reading so much documentation.  Commands should \"just work\".\nConcise.  Less code means fewer mistakes and more efficient development/analysis.\nFlexible.  Produce your favorite plots from your favorite package, but quicker and simpler.\nConsistent.  Don\'t commit to one graphics package, use the same code everywhere.\nLightweight.  Very few dependencies.\nSmart. Attempts to figure out what you want it to do... not just what you tell it.View the full documentation."
},

{
    "location": "autodocs/#Plots.@animate",
    "page": "Docstrings",
    "title": "Plots.@animate",
    "category": "macro",
    "text": "Collect one frame per for-block iteration and return an Animation object.\n\nExample:\n\np = plot(1)\nanim = @animate for x=0:0.1:5\n    push!(p, 1, sin(x))\nend\ngif(anim)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.@gif",
    "page": "Docstrings",
    "title": "Plots.@gif",
    "category": "macro",
    "text": "Builds an Animation using one frame per loop iteration, then create an animated GIF.\n\nExample:\n\n  p = plot(1)\n  @gif for x=0:0.1:5\n    push!(p, 1, sin(x))\n  end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.AnimatedGif",
    "page": "Docstrings",
    "title": "Plots.AnimatedGif",
    "category": "type",
    "text": "Wraps the location of an animated gif so that it can be displayed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.Animation",
    "page": "Docstrings",
    "title": "Plots.Animation",
    "category": "type",
    "text": "Represents an animation object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.BezierCurve",
    "page": "Docstrings",
    "title": "Plots.BezierCurve",
    "category": "type",
    "text": "create a BezierCurve for plotting\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.Formatted",
    "page": "Docstrings",
    "title": "Plots.Formatted",
    "category": "type",
    "text": "Represents data values with formatting that should apply to the tick labels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.GroupBy",
    "page": "Docstrings",
    "title": "Plots.GroupBy",
    "category": "type",
    "text": "A special type that will break up incoming data into groups, and allow for easier creation of grouped plots\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.OHLC",
    "page": "Docstrings",
    "title": "Plots.OHLC",
    "category": "type",
    "text": "Represent Open High Low Close data (used in finance)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.PlotExample",
    "page": "Docstrings",
    "title": "Plots.PlotExample",
    "category": "type",
    "text": "Holds all data needed for a documentation example... header, description, and plotting expression (Expr)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.PlotText",
    "page": "Docstrings",
    "title": "Plots.PlotText",
    "category": "type",
    "text": "Wrap a string with font info\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.Segments",
    "page": "Docstrings",
    "title": "Plots.Segments",
    "category": "type",
    "text": "Build line segments for plotting\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.Shape",
    "page": "Docstrings",
    "title": "Plots.Shape",
    "category": "type",
    "text": "Shape(x, y)\nShape(vertices)\n\nConstruct a polygon to be plotted\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.Surface",
    "page": "Docstrings",
    "title": "Plots.Surface",
    "category": "type",
    "text": "represents a contour or surface mesh\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.SurfaceFunction",
    "page": "Docstrings",
    "title": "Plots.SurfaceFunction",
    "category": "type",
    "text": "For the case of representing a surface as a function of x/y... can possibly avoid allocations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.ZValues",
    "page": "Docstrings",
    "title": "Plots.ZValues",
    "category": "type",
    "text": "type which represents z-values for colors and sizes (and anything else that might come up)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.abline!",
    "page": "Docstrings",
    "title": "Plots.abline!",
    "category": "function",
    "text": "Adds a+bx... straight line over the current plot, without changing the axis limits\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecipesBase.animate",
    "page": "Docstrings",
    "title": "RecipesBase.animate",
    "category": "function",
    "text": "Animate from an iterator which returns the plot args each iteration.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.annotate!",
    "page": "Docstrings",
    "title": "Plots.annotate!",
    "category": "function",
    "text": "Add annotations to an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.arrow",
    "page": "Docstrings",
    "title": "Plots.arrow",
    "category": "function",
    "text": "arrow(args...)\n\nDefine arrowheads to apply to lines - args are style (:open or :closed), side (:head, :tail or :both), headlength and headwidth\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.backend",
    "page": "Docstrings",
    "title": "Plots.backend",
    "category": "function",
    "text": "Returns the current plotting package name.  Initializes package on first call.\n\n\n\n\n\nSet the plot backend.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.backend_name",
    "page": "Docstrings",
    "title": "Plots.backend_name",
    "category": "function",
    "text": "Returns the name of the current backend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.backends",
    "page": "Docstrings",
    "title": "Plots.backends",
    "category": "function",
    "text": "Returns a list of supported backends\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.barHack",
    "page": "Docstrings",
    "title": "Plots.barHack",
    "category": "function",
    "text": "A hacky replacement for a bar graph when the backend doesn\'t support bars directly. Convert it into a line chart with fillrange set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.bbox",
    "page": "Docstrings",
    "title": "Plots.bbox",
    "category": "function",
    "text": "bbox(x, y, w, h [,originargs...])\nbbox(layout)\n\nCreate a bounding box for plotting\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.binData",
    "page": "Docstrings",
    "title": "Plots.binData",
    "category": "function",
    "text": "Make histogram-like bins of data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.center",
    "page": "Docstrings",
    "title": "Plots.center",
    "category": "function",
    "text": "return the centroid of a Shape\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.closeall",
    "page": "Docstrings",
    "title": "Plots.closeall",
    "category": "function",
    "text": "Close all open gui windows of the current backend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.coords",
    "page": "Docstrings",
    "title": "Plots.coords",
    "category": "function",
    "text": "return the vertex points from a Shape or Segments object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.current",
    "page": "Docstrings",
    "title": "Plots.current",
    "category": "function",
    "text": "current()\n\nReturns the Plot object for the current plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.default",
    "page": "Docstrings",
    "title": "Plots.default",
    "category": "function",
    "text": "default(key) returns the current default value for that key default(key, value) sets the current default value for that key default(; kw...) will set the current default value for each key/value pair default(d, key) returns the key from d if it exists, otherwise default(key)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.font",
    "page": "Docstrings",
    "title": "Plots.font",
    "category": "function",
    "text": "Create a Font from a list of unordered features\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.frame",
    "page": "Docstrings",
    "title": "Plots.frame",
    "category": "function",
    "text": "frame(animation[, plot])\n\nAdd a plot (the current plot if not specified) to an existing animation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.grid",
    "page": "Docstrings",
    "title": "Plots.grid",
    "category": "function",
    "text": "grid(args...; kw...)\n\nCreate a grid layout for subplots. args specify the dimensions, e.g. grid(3,2, widths = (0.6,04)) creates a grid with three rows and two columns of different width.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.gui",
    "page": "Docstrings",
    "title": "Plots.gui",
    "category": "function",
    "text": "gui([plot])\n\nDisplay a plot using the backends\' gui window\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.heatmap_edges",
    "page": "Docstrings",
    "title": "Plots.heatmap_edges",
    "category": "function",
    "text": "create an (n+1) list of the outsides of heatmap rectangles\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.histogramHack",
    "page": "Docstrings",
    "title": "Plots.histogramHack",
    "category": "function",
    "text": "A hacky replacement for a histogram when the backend doesn\'t support histograms directly. Convert it into a bar chart with the appropriate x/y values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.ignorenan_extrema",
    "page": "Docstrings",
    "title": "Plots.ignorenan_extrema",
    "category": "function",
    "text": "Extrema of x-values in plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.makeshape",
    "page": "Docstrings",
    "title": "Plots.makeshape",
    "category": "function",
    "text": "create a shape by picking points around the unit circle.  n is the number of point/sides, offset is the starting angle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.makestar",
    "page": "Docstrings",
    "title": "Plots.makestar",
    "category": "function",
    "text": "create a star by weaving together points from an outer and inner circle.  n is the number of arms\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.maketuple",
    "page": "Docstrings",
    "title": "Plots.maketuple",
    "category": "function",
    "text": "duplicate a single value, or pass the 2-tuple through\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.partialcircle",
    "page": "Docstrings",
    "title": "Plots.partialcircle",
    "category": "function",
    "text": "get an array of tuples of points on a circle with radius r\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.pie",
    "page": "Docstrings",
    "title": "Plots.pie",
    "category": "function",
    "text": "Plot a pie diagram\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecipesBase.plot",
    "page": "Docstrings",
    "title": "RecipesBase.plot",
    "category": "function",
    "text": "The main plot command. Use plot to create a new plot object, and plot! to add to an existing one:\n\n    plot(args...; kw...)                  # creates a new plot window, and sets it to be the current\n    plot!(args...; kw...)                 # adds to the `current`\n    plot!(plotobj, args...; kw...)        # adds to the plot `plotobj`\n\nThere are lots of ways to pass in data, and lots of keyword arguments... just try it and it will likely work as expected. When you pass in matrices, it splits by columns. To see the list of available attributes, use the plotattr([attr]) function, where attr is the symbol :Series:, :Subplot:, :Plot or :Axis. Pass any attribute to plotattr as a String to look up its docstring; e.g. plotattr(\"seriestype\").\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.plot3d",
    "page": "Docstrings",
    "title": "Plots.plot3d",
    "category": "function",
    "text": "Plot with seriestype :path3d\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.plotarea",
    "page": "Docstrings",
    "title": "Plots.plotarea",
    "category": "function",
    "text": "plotarea(subplot)\n\nReturn the bounding box of a subplot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.plotattr",
    "page": "Docstrings",
    "title": "Plots.plotattr",
    "category": "function",
    "text": "plotattr([attr])\n\nLook up the properties of a Plots attribute, or specify an attribute type. Call plotattr() for options. The information is the same as that given on https://juliaplots.github.io/attributes/.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.preprocessArgs!",
    "page": "Docstrings",
    "title": "Plots.preprocessArgs!",
    "category": "function",
    "text": "Handle all preprocessing of args... break out colors/sizes/etc and replace aliases.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.rotate",
    "page": "Docstrings",
    "title": "Plots.rotate",
    "category": "function",
    "text": "rotate an object in space\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.savefig",
    "page": "Docstrings",
    "title": "Plots.savefig",
    "category": "function",
    "text": "savefig([plot,] filename)\n\nSave a Plot (the current plot if plot is not passed) to file. The file type is inferred from the file extension. All backends support png and pdf file types, some also support svg, ps, eps, html and tex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.scalefontsizes",
    "page": "Docstrings",
    "title": "Plots.scalefontsizes",
    "category": "function",
    "text": "scalefontsizes(factor::Number)\n\nScales all current font sizes by factor. For example scalefontsizes(1.1) increases all current font sizes by 10%. To reset to initial sizes, use scalefontsizes()\n\n\n\n\n\nscalefontsizes()\n\nResets font sizes to initial default values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.sticksHack",
    "page": "Docstrings",
    "title": "Plots.sticksHack",
    "category": "function",
    "text": "A hacky replacement for a sticks graph when the backend doesn\'t support sticks directly. Convert it into a line chart that traces the sticks, and a scatter that sets markers at the points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.stroke",
    "page": "Docstrings",
    "title": "Plots.stroke",
    "category": "function",
    "text": "stroke(args...; alpha = nothing)\n\nDefine the properties of the stroke used in plotting lines\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.test_examples",
    "page": "Docstrings",
    "title": "Plots.test_examples",
    "category": "function",
    "text": "test_examples(pkgname[, idx]; debug = false, disp = true, sleep = nothing,                                         skip = [], only = nothing\n\nRun the idx test example for a given backend, or all examples if idx is not specified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.text",
    "page": "Docstrings",
    "title": "Plots.text",
    "category": "function",
    "text": "text(string, args...)\n\nCreate a PlotText object wrapping a string with font info, for plot annotations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.text_size",
    "page": "Docstrings",
    "title": "Plots.text_size",
    "category": "function",
    "text": "Returns the (width,height) of a text label.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.theme",
    "page": "Docstrings",
    "title": "Plots.theme",
    "category": "function",
    "text": "theme(s::Symbol)\n\nSpecify the colour theme for plots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.title!",
    "page": "Docstrings",
    "title": "Plots.title!",
    "category": "function",
    "text": "Add title to an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.translate!",
    "page": "Docstrings",
    "title": "Plots.translate!",
    "category": "function",
    "text": "translate a Shape in space\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.twinx",
    "page": "Docstrings",
    "title": "Plots.twinx",
    "category": "function",
    "text": "Adds a new, empty subplot overlayed on top of sp, with a mirrored y-axis and linked x-axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.weave",
    "page": "Docstrings",
    "title": "Plots.weave",
    "category": "function",
    "text": "interleave 2 vectors into each other (like a zipper\'s teeth)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.with",
    "page": "Docstrings",
    "title": "Plots.with",
    "category": "function",
    "text": "Allows temporary setting of backend and defaults for Plots. Settings apply only for the do block.  Example:\n\nwith(:gr, size=(400,400), type=:histogram) do\n  plot(rand(10))\n  plot(rand(10))\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.xaxis!",
    "page": "Docstrings",
    "title": "Plots.xaxis!",
    "category": "function",
    "text": "Specify x axis attributes for an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.xflip!",
    "page": "Docstrings",
    "title": "Plots.xflip!",
    "category": "function",
    "text": "Flip the current plots\' x axis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.xlabel!",
    "page": "Docstrings",
    "title": "Plots.xlabel!",
    "category": "function",
    "text": "Add xlabel to an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.xlims",
    "page": "Docstrings",
    "title": "Plots.xlims",
    "category": "function",
    "text": "xlims([plt])\n\nReturns the x axis limits of the current plot or subplot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.xlims!",
    "page": "Docstrings",
    "title": "Plots.xlims!",
    "category": "function",
    "text": "Set xlims for an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.xmax",
    "page": "Docstrings",
    "title": "Plots.xmax",
    "category": "function",
    "text": "Largest x in plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.xmin",
    "page": "Docstrings",
    "title": "Plots.xmin",
    "category": "function",
    "text": "Smallest x in plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.xticks!",
    "page": "Docstrings",
    "title": "Plots.xticks!",
    "category": "function",
    "text": "Set xticks for an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.yaxis!",
    "page": "Docstrings",
    "title": "Plots.yaxis!",
    "category": "function",
    "text": "Specify x axis attributes for an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.yflip!",
    "page": "Docstrings",
    "title": "Plots.yflip!",
    "category": "function",
    "text": "Flip the current plots\' y axis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.ylabel!",
    "page": "Docstrings",
    "title": "Plots.ylabel!",
    "category": "function",
    "text": "Add ylabel to an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.ylims",
    "page": "Docstrings",
    "title": "Plots.ylims",
    "category": "function",
    "text": "ylims([plt])\n\nReturns the y axis limits of the current plot or subplot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.ylims!",
    "page": "Docstrings",
    "title": "Plots.ylims!",
    "category": "function",
    "text": "Set ylims for an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.yticks!",
    "page": "Docstrings",
    "title": "Plots.yticks!",
    "category": "function",
    "text": "Set yticks for an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.zlims",
    "page": "Docstrings",
    "title": "Plots.zlims",
    "category": "function",
    "text": "zlims([plt])\n\nReturns the z axis limits of the current plot or subplot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plots.zlims!",
    "page": "Docstrings",
    "title": "Plots.zlims!",
    "category": "function",
    "text": "Set zlims for an existing plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Plots.@animatePlots.@colorant_strPlots.@depsPlots.@gifPlots.@init_backendPlots.@layoutPlots.@recipePlots.@seriesPlots.@shorthandsPlots.@userplotPlots.ABGRPlots.ADIN99Plots.ADIN99dPlots.ADIN99oPlots.AGrayPlots.AGray32Plots.AHSIPlots.AHSLPlots.AHSVPlots.ALCHabPlots.ALCHuvPlots.ALMSPlots.ALabPlots.ALuvPlots.AMatPlots.ARGBPlots.ARGB32Plots.AVecPlots.AXYZPlots.AYCbCrPlots.AYIQPlots.AbstractBackendPlots.AbstractGrayPlots.AbstractLayoutPlots.AbstractPlotPlots.AbstractRGBPlots.AbstractSurfacePlots.AlphaColorPlots.AnimatedGifPlots.AnimationPlots.ArrowPlots.AxisPlots.AxyYPlots.BGRPlots.BGRAPlots.BezierCurvePlots.BrushPlots.CIE1931JV_CMFPlots.CIE1931J_CMFPlots.CIE1931_CMFPlots.CIE1964_CMFPlots.CURRENT_BACKENDPlots.CURRENT_PLOTPlots.ColorPlots.Color3Plots.ColorAlphaPlots.ColorGradientPlots.ColorTypesPlots.ColorantPlots.ColorantNormedPlots.ColorsPlots.CurrentBackendPlots.CurrentPlotPlots.DDPlots.DE_2000Plots.DE_94Plots.DE_ABPlots.DE_BFDPlots.DE_CMCPlots.DE_DIN99Plots.DE_DIN99dPlots.DE_DIN99oPlots.DE_JPC79Plots.DIN99Plots.DIN99APlots.DIN99dPlots.DIN99dAPlots.DIN99oPlots.DIN99oAPlots.DPIPlots.DebugModePlots.EachAnnPlots.EmptyLayoutPlots.ExtremaPlots.FontPlots.FormattedPlots.FractionalPlots.FrameIteratorPlots.FuncOrFuncsPlots.GLVisualizeBackendPlots.GRPlots.GRBackendPlots.GrayPlots.Gray24Plots.GrayAPlots.GridLayoutPlots.GroupByPlots.HDF5BackendPlots.HSBPlots.HSIPlots.HSIAPlots.HSLPlots.HSLAPlots.HSVPlots.HSVAPlots.InputWrapperPlots.InspectDRBackendPlots.KWPlots.LCHabPlots.LCHabAPlots.LCHuvPlots.LCHuvAPlots.LMSPlots.LMSAPlots.LabPlots.LabAPlots.LuvPlots.LuvAPlots.MM_PER_INCHPlots.MM_PER_PXPlots.MSCPlots.MixedMeasuresPlots.NoBackendPlots.OHLCPlots.P2Plots.P3Plots.PDFBackendsPlots.PGFPlotsBackendPlots.PX_PER_INCHPlots.PlotPlots.PlotExamplePlots.PlotMeasuresPlots.PlotTextPlots.PlotThemesPlots.PlotUtilsPlots.PlotlyBackendPlots.PlotlyJSBackendPlots.PlotsPlots.PlotsDisplayPlots.PyPlotBackendPlots.RGBPlots.RGB1Plots.RGB24Plots.RGB4Plots.RGBAPlots.RecipeDataPlots.RecipesBasePlots.RootLayoutPlots.SegmentsPlots.SegmentsIteratorPlots.SeriesPlots.SeriesAnnotationsPlots.ShapePlots.ShowGradientPlots.ShowLibraryPlots.ShowThemePlots.SliceItPlots.SpyPlots.StrokePlots.SubplotPlots.SubplotMapPlots.SurfacePlots.SurfaceFunctionPlots.TicksArgsPlots.Transparent3Plots.TransparentColorPlots.TransparentGrayPlots.TransparentRGBPlots.UnicodePlotsBackendPlots.VolumePlots.XYZPlots.XYZAPlots.YCbCrPlots.YCbCrAPlots.YIQPlots.YIQAPlots.ZValuesPlots._3dTypesPlots.__init__Plots.__inits__Plots._add_defaults!Plots._add_errorbar_kwPlots._add_markershapePlots._add_smooth_kwPlots._add_the_seriesPlots._allAxesPlots._allFramestylesPlots._allGridArgsPlots._allGridSymsPlots._allMarkersPlots._allScalesPlots._allShowaxisArgsPlots._allShowaxisSymsPlots._allStylesPlots._allTypesPlots._all_argsPlots._all_defaultsPlots._already_warnedPlots._animatePlots._apply_type_recipePlots._arg_descPlots._attribute_defaultsPlots._auto_binning_nbinsPlots._axesAliasesPlots._axis_defaultsPlots._axis_defaults_byletterPlots._backendPackagePlots._backendSymbolPlots._backendTypePlots._backend_instancePlots._backendsPlots._bar_widthPlots._base_supported_argsPlots._before_layout_calcsPlots._best_html_output_typePlots._bin_centersPlots._binbarlike_baselinePlots._cbar_widthPlots._color_functionsPlots._create_backend_figurePlots._cyclePlots._debugModePlots._default_backendsPlots._deprecated_backendsPlots._displayPlots._do_plot_showPlots._examplesPlots._expand_limitsPlots._expand_seriestype_arrayPlots._expand_subplot_extremaPlots._filter_input_data!Plots._framestyleAliasesPlots._get_defaultsPlots._get_showtheme_argsPlots._gr_attrPlots._gr_gradient_alphaPlots._gr_markerPlots._gr_mimeformatsPlots._gr_point_multPlots._gr_scalePlots._gr_seriestypePlots._gr_stylePlots._gr_thickness_scalingPlots._gr_wstypePlots._gr_wstype_defaultPlots._heatmap_edgesPlots._hist_edgePlots._hist_edgesPlots._hist_norm_modePlots._histogram_likePlots._initial_axis_defaultsPlots._initial_defaultsPlots._initial_fontsizesPlots._initialize_backendPlots._initialize_subplotPlots._initialized_backendsPlots._inv_scale_funcsPlots._is_positivePlots._js_codePlots._js_scriptPlots._keyAliasesPlots._label_funcPlots._line_likePlots._logScaleBasesPlots._logScalesPlots._make_histPlots._markerAliasesPlots._match_mapPlots._match_map2Plots._override_seriestype_checkPlots._plot!Plots._plot_defaultsPlots._plot_setupPlots._plotly_attrPlots._plotly_framestylePlots._plotly_framestyle_defaultsPlots._plotly_framestylesPlots._plotly_js_pathPlots._plotly_js_path_remotePlots._plotly_legend_posPlots._plotly_markerPlots._plotly_markersPlots._plotly_scalePlots._plotly_seriestypePlots._plotly_stylePlots._positionAliasesPlots._positive_else_nanPlots._prepare_annotationsPlots._prepare_plot_objectPlots._prepare_subplotPlots._preprocess_argsPlots._preprocess_barlikePlots._preprocess_binbarlike_weightsPlots._preprocess_binlikePlots._preprocess_userrecipePlots._process_plotrecipePlots._process_seriesrecipePlots._process_userrecipePlots._process_userrecipesPlots._replace_linewidthPlots._replace_markershapePlots._savemapPlots._scaleAliasesPlots._scale_adjusted_valuesPlots._scale_basePlots._scale_funcsPlots._series_addedPlots._series_defaultsPlots._series_indexPlots._series_recipe_depsPlots._series_updatedPlots._shape_keysPlots._shapesPlots._showPlots._stepbins_pathPlots._styleAliasesPlots._subplot_defaultsPlots._subplot_setupPlots._suppress_warningsPlots._surface_likePlots._themePlots._to_warnPlots._transform_ticksPlots._typeAliasesPlots._update_axisPlots._update_axis_colorsPlots._update_axis_linksPlots._update_climsPlots._update_min_padding!Plots._update_plot_argsPlots._update_plot_objectPlots._update_series_attributes!Plots._update_subplot_argsPlots._update_subplot_colorsPlots._update_subplot_peripheryPlots._use_remotePlots._widen_seriestypesPlots.abline!Plots.adapted_gridPlots.addExtensionPlots.addOrReplacePlots.add_aliasesPlots.add_arrowsPlots.add_backendPlots.add_backend_stringPlots.add_layout_pct!Plots.add_non_underscore_aliases!Plots.add_themePlots.aliasesPlots.aliasesAndAutopickPlots.all3DPlots.allAlphasPlots.allFunctionsPlots.allLineTypesPlots.allRealsPlots.allShapesPlots.allStylesPlots.all_seriestypesPlots.allnanPlots.alphaPlots.alphacolorPlots.animatePlots.annotate!Plots.annotationsPlots.anynanPlots.arrowPlots.as_gradientPlots.attrPlots.attr!Plots.attributesPlots.attrtypesPlots.autopickPlots.autopick_ignore_none_autoPlots.axis_drawing_infoPlots.axis_limitsPlots.backendPlots.backend_namePlots.backend_objectPlots.backend_packagePlots.backend_package_namePlots.backendsPlots.barPlots.bar!Plots.barHackPlots.barhPlots.barh!Plots.barhistPlots.barhist!Plots.base_color_typePlots.base_colorant_typePlots.bboxPlots.bbox!Plots.bbox_to_pctsPlots.bezier_valuePlots.binDataPlots.bluePlots.bottomPlots.bottompadPlots.boxplotPlots.boxplot!Plots.brushPlots.build_layoutPlots.buildanimationPlots.calcMidpointsPlots.calc_num_subplotsPlots.calc_r_extremaPlots.ccolorPlots.centerPlots.cgradPlots.cgradientsPlots.cie_color_matchPlots.clibrariesPlots.clibraryPlots.closeallPlots.colorPlots.color_or_nothing!Plots.color_typePlots.coloralphaPlots.colordiffPlots.colormapPlots.colormatchPlots.command_idxPlots.comp1Plots.comp2Plots.comp3Plots.compute_anglePlots.compute_gridsizePlots.compute_xPlots.compute_xyzPlots.compute_yPlots.compute_zPlots.concatenate_fillrangePlots.construct_categorical_dataPlots.contourPlots.contour!Plots.contour3dPlots.contour3d!Plots.contourfPlots.contourf!Plots.convertLegendValuePlots.convertSeriesIndexPlots.convertToAnyVectorPlots.convert_sci_unicodePlots.convert_to_polarPlots.coordsPlots.createSegmentsPlots.create_gridPlots.create_grid_curlyPlots.create_grid_vcatPlots.cropPlots.currentPlots.curve_pointsPlots.curvesPlots.curves!Plots.cvecPlots.dateformatterPlots.datetimeformatterPlots.debugplotsPlots.debugshowPlots.defaultPlots.defaultOutputFormatPlots.default_cgradPlots.default_extentsPlots.default_should_widenPlots.defaultboxPlots.densityPlots.density!Plots.deuteranopicPlots.directed_curvePlots.discrete_value!Plots.distinguishable_colorsPlots.diverging_palettePlots.dumpcallstackPlots.dumpdictPlots.ensure_gradient!Plots.epsPlots.error_coordsPlots.error_style!Plots.error_zipitPlots.evalPlots.expand_dataPlots.expand_extrema!Plots.extendSeriesByOnePlots.extendSeriesDataPlots.extractGroupArgsPlots.extrema_plus_bufferPlots.fakedataPlots.fg_colorPlots.fg_color_spPlots.file_extensionPlots.filter_dataPlots.filter_data!Plots.filter_radial_dataPlots.float_extended_typePlots.fontPlots.framePlots.from_polarPlots.gamutmaxPlots.gamutminPlots.getExtensionPlots.getSeriesRGBColorPlots.get_axisPlots.get_climsPlots.get_color_palettePlots.get_fillalphaPlots.get_fillcolorPlots.get_linealphaPlots.get_linecolorPlots.get_linestylePlots.get_linewidthPlots.get_markeralphaPlots.get_markercolorPlots.get_markerstrokealphaPlots.get_markerstrokecolorPlots.get_minor_ticksPlots.get_sp_limsPlots.get_subplotPlots.get_subplot_indexPlots.get_ticksPlots.get_xsPlots.get_xyPlots.get_ysPlots.getattrPlots.getplotPlots.getxyPlots.getxyzPlots.gifPlots.giffnPlots.glvisualizePlots.grPlots.gr_colorbarPlots.gr_displayPlots.gr_draw_markerPlots.gr_draw_markersPlots.gr_fill_viewportPlots.gr_font_familyPlots.gr_get_ticks_sizePlots.gr_getcolorindPlots.gr_halignPlots.gr_inqtextPlots.gr_legend_posPlots.gr_limsPlots.gr_linetypePlots.gr_markertypePlots.gr_nans_to_infs!Plots.gr_plot_sizePlots.gr_polaraxesPlots.gr_polylinePlots.gr_set_fillPlots.gr_set_fillcolorPlots.gr_set_fontPlots.gr_set_gradientPlots.gr_set_linePlots.gr_set_linecolorPlots.gr_set_markercolorPlots.gr_set_outputPlots.gr_set_textcolorPlots.gr_set_transparencyPlots.gr_set_viewport_cmapPlots.gr_set_viewport_plotareaPlots.gr_set_viewport_polarPlots.gr_set_xticks_fontPlots.gr_set_yticks_fontPlots.gr_textPlots.gr_valignPlots.gr_view_xcenterPlots.gr_view_ycenterPlots.gr_viewport_from_bboxPlots.gr_x_axislimsPlots.gr_xy_axislimsPlots.gr_y_axislimsPlots.gr_z_axislimsPlots.grayPlots.greenPlots.gridPlots.group_as_matrixPlots.groupedvec2matPlots.guiPlots.guide_paddingPlots.guidefontPlots.handleColors!Plots.has_attribute_segmentsPlots.has_black_border_for_defaultPlots.hasattrPlots.hascolorbarPlots.hasgridPlots.hdf5Plots.heatmapPlots.heatmap!Plots.heatmap_edgesPlots.hexPlots.hexbinPlots.hexbin!Plots.histogramPlots.histogram!Plots.histogram2dPlots.histogram2d!Plots.histogramHackPlots.hlinePlots.hline!Plots.hspanPlots.hspan!Plots.htmlPlots.html_bodyPlots.html_headPlots.html_to_pngPlots.hvline_limitsPlots.ignorenan_extremaPlots.ignorenan_maximumPlots.ignorenan_meanPlots.ignorenan_minimumPlots.imageHackPlots.inch2mmPlots.inch2pxPlots.includePlots.indices_and_unique_valuesPlots.inlinePlots.inspectdrPlots.invisiblePlots.invscalefuncPlots.is3dPlots.is_2tuplePlots.is_attr_supportedPlots.is_installedPlots.is_marker_supportedPlots.is_scale_supportedPlots.is_seriestype_supportedPlots.is_style_supportedPlots.is_subplot_supportedPlots.isatomPlots.iscolPlots.isdarkPlots.isijuliaPlots.ismatrixPlots.isnothingPlots.isplotnullPlots.ispolarPlots.ispositivePlots.isrowPlots.isscalarPlots.istuplePlots.isvectorPlots.isverticalPlots.iter_segmentsPlots.js_bodyPlots.labelfuncPlots.layout_argsPlots.leftPlots.leftpadPlots.legendEntryFromTuplePlots.legendfontPlots.like_histogramPlots.like_linePlots.like_surfacePlots.limsTypePlots.link_axes!Plots.link_subplotsPlots.locate_annotationPlots.lookup_aliasesPlots.make_fillrange_from_ribbonPlots.make_fillrange_sidePlots.make_measure_horPlots.make_measure_vertPlots.make_stepsPlots.makearrowheadPlots.makecrossPlots.makekwPlots.makepluralPlots.makeshapePlots.makestarPlots.maketuplePlots.makevecPlots.mapFuncOrFuncsPlots.mapcPlots.mapreducecPlots.merge_with_base_supportedPlots.mm2inchPlots.mm2pxPlots.movPlots.movfnPlots.mp4Plots.mp4fnPlots.nanappend!Plots.nanpush!Plots.nansplitPlots.nanvcatPlots.nobigsPlots.nopPlots.normalize_zvalsPlots.notimplPlots.num_seriesPlots.ohlcPlots.ohlc!Plots.okPlots.open_browser_windowPlots.optimal_ticks_and_labelsPlots.optimize_datetime_ticksPlots.optimize_ticksPlots.palettePlots.parent_bboxPlots.partialcirclePlots.path3dPlots.path3d!Plots.pdfPlots.pgfplotsPlots.pickDefaultBackendPlots.piePlots.pie!Plots.pie_labelsPlots.plotPlots.plot!Plots.plot3dPlots.plot3d!Plots.plot_colorPlots.plotareaPlots.plotarea!Plots.plotattrPlots.plotlyPlots.plotly_annotation_dictPlots.plotly_apply_aspect_ratioPlots.plotly_axisPlots.plotly_close_shapesPlots.plotly_colorbar_hackPlots.plotly_colorscalePlots.plotly_convert_to_datetimePlots.plotly_dataPlots.plotly_domainPlots.plotly_fontPlots.plotly_hover!Plots.plotly_layoutPlots.plotly_layout_jsonPlots.plotly_legend_posPlots.plotly_link_indiciesPlots.plotly_native_dataPlots.plotly_polar!Plots.plotly_polaraxisPlots.plotly_scalePlots.plotly_seriesPlots.plotly_series_jsonPlots.plotly_series_segmentsPlots.plotly_series_shapesPlots.plotly_surface_dataPlots.plotlyjsPlots.plots_heatmapPlots.plots_heatmap!Plots.pngPlots.prepare_outputPlots.preprocessArgs!Plots.processFillArgPlots.processFontArg!Plots.processGridArg!Plots.processLineArgPlots.processMarkerArgPlots.processMinorGridArg!Plots.process_annotationPlots.process_axis_arg!Plots.protanopicPlots.psPlots.push_x!Plots.push_y!Plots.push_z!Plots.px2inchPlots.px2mmPlots.pyplotPlots.quiverPlots.quiver!Plots.quiver_using_arrowsPlots.quiver_using_hackPlots.recompute_lengthsPlots.redPlots.reducecPlots.regressionXYPlots.replaceAlias!Plots.replaceAliases!Plots.replaceTypePlots.replace_image_with_heatmapPlots.reset_defaultsPlots.reset_extrema!Plots.resolve_mixedPlots.rgb_stringPlots.rgba_stringPlots.rightPlots.rightpadPlots.rotatePlots.rotate!Plots.rotate_xPlots.rotate_yPlots.round_limitsPlots.rowsizePlots.savefigPlots.scalePlots.scale!Plots.scalefontsizePlots.scalefontsizesPlots.scalefuncPlots.scatterPlots.scatter!Plots.scatter3dPlots.scatter3d!Plots.scatterhistPlots.scatterhist!Plots.sequential_palettePlots.series_annotationsPlots.series_annotations_shapes!Plots.series_listPlots.series_recipe_dependenciesPlots.seriestype_supportedPlots.set_themePlots.setxy!Plots.setxyz!Plots.shape_coordsPlots.shape_dataPlots.should_add_to_legendPlots.show_png_from_htmlPlots.showaxisPlots.showgradientPlots.showgradient!Plots.showjunoPlots.showlibraryPlots.showlibrary!Plots.showthemePlots.showtheme!Plots.shrink_byPlots.slice_argPlots.slice_arg!Plots.sortedkeysPlots.split_kwPlots.splittable_kwPlots.spyPlots.spy!Plots.standalone_htmlPlots.standalone_html_windowPlots.stephistPlots.stephist!Plots.sticksPlots.sticks!Plots.sticksHackPlots.straightline_dataPlots.strokePlots.supported_attrsPlots.supported_markersPlots.supported_scalesPlots.supported_seriestypesPlots.supported_stylesPlots.surfacePlots.surface!Plots.svgPlots.test_examplesPlots.texPlots.textPlots.text_sizePlots.themePlots.tick_paddingPlots.tickfontPlots.ticksTypePlots.timeformatterPlots.title!Plots.title_paddingPlots.titlefontPlots.to_nanPlots.to_pixelsPlots.topPlots.toppadPlots.tovecPlots.translatePlots.translate!Plots.transpose_zPlots.tritanopicPlots.trueOrAllTruePlots.tryrangePlots.twinxPlots.unicodeplotsPlots.unzipPlots.update_child_bboxes!Plots.update_inset_bboxes!Plots.update_position!Plots.verticesPlots.viewport_plotareaPlots.violinPlots.violin!Plots.vlinePlots.vline!Plots.vspanPlots.vspan!Plots.wand_edgesPlots.warnOnUnsupportedPlots.warnOnUnsupported_argsPlots.warnOnUnsupported_scalesPlots.warn_on_deprecated_backendPlots.weavePlots.weighted_color_meanPlots.whitebalancePlots.widenPlots.wireframePlots.wireframe!Plots.withPlots.wrapPlots.wrap_surfacesPlots.wraptuplePlots.write_temp_htmlPlots.xaxis!Plots.xflip!Plots.xgrid!Plots.xlabel!Plots.xlimsPlots.xlims!Plots.xmaxPlots.xminPlots.xticks!Plots.xyYPlots.xyYAPlots.xy_mm_to_pctsPlots.yaxis!Plots.yflip!Plots.ygrid!Plots.ylabel!Plots.ylimsPlots.ylims!Plots.yticks!Plots.zlimsPlots.zlims!Plots.zvalues"
},

]}
