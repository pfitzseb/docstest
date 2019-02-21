var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AbstractPlotting-1",
    "page": "Readme",
    "title": "AbstractPlotting",
    "category": "section",
    "text": ""
},

{
    "location": "autodocs/#AbstractPlotting.@extract",
    "page": "Docstrings",
    "title": "AbstractPlotting.@extract",
    "category": "macro",
    "text": "usage @exctract scene (a, b, c, d)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.@extractvalue",
    "page": "Docstrings",
    "title": "AbstractPlotting.@extractvalue",
    "category": "macro",
    "text": "usage @extractvalue scene (a, b, c, d) will become:\n\nbegin\n    a = to_value(scene[:a])\n    b = to_value(scene[:b])\n    c = to_value(scene[:c])\n    (a, b, c)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.@get_attribute",
    "page": "Docstrings",
    "title": "AbstractPlotting.@get_attribute",
    "category": "macro",
    "text": "@get_attribute scene (a, b, c, d)\n\nThis will extract attribute a, b, c, d from scene and apply the correct attribute conversions + will extract the value if it\'s a signal. It will make those attributes available as variables and return them as a tuple. So the above is equal to: will become:\n\nbegin\n    a = get_attribute(scene, :a)\n    b = get_attribute(scene, :b)\n    c = get_attribute(scene, :c)\n    (a, b, c)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.@recipe",
    "page": "Docstrings",
    "title": "AbstractPlotting.@recipe",
    "category": "macro",
    "text": "type recipe are really simple and just overload the argument conversion pipeline.\n\nconvertarguments(P::Type{<:AbstractPlot}, x::MyType) = convertarguments(P, rand(10, 10))\n\nonly apply this for a certain plot type:\n\nconvertarguments(P::Type{<:Scatter}, x::MyType) = convertarguments(P, rand(10, 10))\n\noptionally define the plotting type, when someone just says plot(x::MyType)\n\n- will fall back to whatever the standard plot type for what you return from argument_convert is!\n\nplottype(::MyType) = Surface\n\nfull recipes:\n\n(x, y, z) && themes are optional\n\n@recipe(MyPlot, x, y, z) do scene     Theme(         plot_color => :red     ) end\n\nthis macro defines the following:\n\nconst Myplot{ArgTypes} = Combined{myplot, ArgTypes}\n\nthe type parameter contains the function instead of e.g. a symbol. This way\n\nthe mapping from Myplot to myplot is safer and simpler.\n\nDownside, we always need a function. Would there be rejection against that?\n\nall the signatures to make it nice to use:\n\nmyplot(args...; kwargs...) = ... myplot!(scene, args...; kwargs...) = ... myplot(kwargs::Dict, args...) = ... myplot!(scene, kwargs::Dict, args...) = ... #etc (not 100% settled what signatures there will be)\n\nthe next one is optional, but it will allow to say plot_object[:x] to fetch the first argument\n\nfrom the call plot_object = myplot(rand(10), rand(10), rand(10)).\n\nIf you leave out the (x, y, z)\n\nin the recipe macro, it will default to plotobject1, and plotobject[:arg1]\n\nargument_names(::Type{<: MyPlot}) = (:x, :y, :z)\n\nthis function will insert the theme into any scene that plots Myplot.\n\nfunction defaulttheme(scene, ::Myplot)     Theme(         plotcolor => :red     ) end #––––––––––––––-\n\nImplement the recipe\n\nfunction plot!(plot::MyPlot)     # normal plotting code, building up on any previously defined recipes     # or atomic plotting operations, and adds it to the combined plot:     lines!(plot, rand(10), color = plot[:plot_color])     plot!(plot, plot[:x], plot[:y])     plot end\n\nAdd specialization\n\nconst MyVolume = MyPlot{Tuple{ArgTypes <: AbstractArray{<: AbstractFloat, 3}}} argumentnames(::Type{<: MyVolume}) = (:volume,) # again, optional function plot!(plot::MyVolume)     # plot a volume with a colormap going from fully transparent to plotcolor     volume!(plot, plot[:volume], colormap = :transparent => plot[:plot_color])     plot end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.Automatic",
    "page": "Docstrings",
    "title": "AbstractPlotting.Automatic",
    "category": "type",
    "text": "Type to indicate that an attribute will get calculated automatically\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.Billboard",
    "page": "Docstrings",
    "title": "AbstractPlotting.Billboard",
    "category": "type",
    "text": "Billboard attribute to always have a primitive face the camera. Can be used for rotation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.Mouse",
    "page": "Docstrings",
    "title": "AbstractPlotting.Mouse",
    "category": "module",
    "text": "Backend independant Mouse enums and fields\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.Plot",
    "page": "Docstrings",
    "title": "AbstractPlotting.Plot",
    "category": "function",
    "text": "Returns the Combined type that represents the signature of args.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.PlotList",
    "page": "Docstrings",
    "title": "AbstractPlotting.PlotList",
    "category": "type",
    "text": "Plotlist(plots...)\n\nExperimental feature. Create an object that can encode multiple series.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.PlotSpec",
    "page": "Docstrings",
    "title": "AbstractPlotting.PlotSpec",
    "category": "type",
    "text": "PlotSpec{P<:AbstractPlot}(args...; kwargs...)\n\nObject encoding positional arguments (args), a NamedTuple of attributes (kwargs) as well as plot type P of a basic plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.Reverse",
    "page": "Docstrings",
    "title": "AbstractPlotting.Reverse",
    "category": "type",
    "text": "Reverses the attribute T uppon conversion\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.VideoStream",
    "page": "Docstrings",
    "title": "AbstractPlotting.VideoStream",
    "category": "type",
    "text": "VideoStream(scene::Scene, dir = mktempdir(), name = \"video\")\n\nreturns a stream and a buffer that you can use to not allocate for new frames. Use add_frame!(stream, window, buffer) to add new video frames to the stream. Use save(stream) to save the video to \'dir/name.mkv\'. You can also call save(stream, \"mkv\"), save(stream, \"mp4\"), save(stream, \"gif\") or save(stream, \"webm\") to convert the stream to those formats.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations",
    "category": "function",
    "text": "`annotations(strings::Vector{String}, positions::Vector{Point})`\n\nPlots an array of texts at each position in positions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations!",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations!",
    "category": "function",
    "text": "AbstractPlotting.annotations!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.annotations!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.annotations!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.annotations!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.annotations!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.annotations!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.apply_convert!",
    "page": "Docstrings",
    "title": "AbstractPlotting.apply_convert!",
    "category": "function",
    "text": "apply for return type     (args...,)\n\n\n\n\n\napply for return type PlotSpec\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arc",
    "page": "Docstrings",
    "title": "AbstractPlotting.arc",
    "category": "function",
    "text": "AbstractPlotting.arc(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.arc(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arc(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arc!",
    "page": "Docstrings",
    "title": "AbstractPlotting.arc!",
    "category": "function",
    "text": "AbstractPlotting.arc!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.arc!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.arc!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arc!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.arc!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arc!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.argument_names",
    "page": "Docstrings",
    "title": "AbstractPlotting.argument_names",
    "category": "function",
    "text": "Each argument can be named for a certain plot type P. Falls back to arg1, arg2, etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arrows",
    "page": "Docstrings",
    "title": "AbstractPlotting.arrows",
    "category": "function",
    "text": "AbstractPlotting.arrows(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.arrows(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arrows!",
    "page": "Docstrings",
    "title": "AbstractPlotting.arrows!",
    "category": "function",
    "text": "AbstractPlotting.arrows!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.arrows!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.arrows!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.arrows!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.atomic_limits",
    "page": "Docstrings",
    "title": "AbstractPlotting.atomic_limits",
    "category": "function",
    "text": "Data limits calculate a minimal boundingbox from the data points in a plot. This doesn\'t include any transformations, markers etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.automatic",
    "page": "Docstrings",
    "title": "AbstractPlotting.automatic",
    "category": "constant",
    "text": "Singleton instance to indicate that an attribute will get calculated automatically\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.available_backends",
    "page": "Docstrings",
    "title": "AbstractPlotting.available_backends",
    "category": "constant",
    "text": "Currently available displays by backend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.available_gradients",
    "page": "Docstrings",
    "title": "AbstractPlotting.available_gradients",
    "category": "function",
    "text": "available_gradients()\n\nPrints all available gradient names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.available_marker_symbols",
    "page": "Docstrings",
    "title": "AbstractPlotting.available_marker_symbols",
    "category": "function",
    "text": "available_marker_symbols()\n\nDisplays all available marker symbols.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis2d",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis2d",
    "category": "function",
    "text": "AbstractPlotting.axis2d(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.axis2d(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis2d(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis2d!",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis2d!",
    "category": "function",
    "text": "AbstractPlotting.axis2d!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.axis2d!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.axis2d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis2d!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.axis2d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis2d!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis3d",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis3d",
    "category": "function",
    "text": "AbstractPlotting.axis3d(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.axis3d(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis3d(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis3d!",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis3d!",
    "category": "function",
    "text": "AbstractPlotting.axis3d!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.axis3d!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.axis3d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis3d!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.axis3d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis3d!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.band",
    "page": "Docstrings",
    "title": "AbstractPlotting.band",
    "category": "function",
    "text": "AbstractPlotting.band(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.band(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.band(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.band!",
    "page": "Docstrings",
    "title": "AbstractPlotting.band!",
    "category": "function",
    "text": "AbstractPlotting.band!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.band!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.band!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.band!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.band!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.band!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.barplot",
    "page": "Docstrings",
    "title": "AbstractPlotting.barplot",
    "category": "function",
    "text": "AbstractPlotting.barplot(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.barplot(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.barplot(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.barplot!",
    "page": "Docstrings",
    "title": "AbstractPlotting.barplot!",
    "category": "function",
    "text": "AbstractPlotting.barplot!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.barplot!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.barplot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.barplot!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.barplot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.barplot!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.broadcast_foreach",
    "page": "Docstrings",
    "title": "AbstractPlotting.broadcast_foreach",
    "category": "function",
    "text": "Like broadcast but for foreach. Doesn\'t care about shape and treats Tuples && StaticVectors as scalars.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.button",
    "page": "Docstrings",
    "title": "AbstractPlotting.button",
    "category": "function",
    "text": "AbstractPlotting.button(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.button(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.button(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.button!",
    "page": "Docstrings",
    "title": "AbstractPlotting.button!",
    "category": "function",
    "text": "AbstractPlotting.button!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.button!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.button!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.button!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.button!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.button!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.calculated_attributes!",
    "page": "Docstrings",
    "title": "AbstractPlotting.calculated_attributes!",
    "category": "function",
    "text": "`calculated_attributes!(plot::AbstractPlot)`\n\nFill in values that can only be calculated when we have all other attributes filled\n\n\n\n\n\n`calculated_attributes!(trait::Type{<: AbstractPlot}, plot)`\n\ntrait version of calculated_attributes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.cam2d",
    "page": "Docstrings",
    "title": "AbstractPlotting.cam2d",
    "category": "function",
    "text": "Creates a subscene with a pixel camera\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.close2square",
    "page": "Docstrings",
    "title": "AbstractPlotting.close2square",
    "category": "function",
    "text": "Returns (N1, N2) with N1 x N2 == n. N2 might become 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend",
    "category": "function",
    "text": "colorlegend(scene, colormap, range)\n\ncreates a legend from a colormap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend!",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend!",
    "category": "function",
    "text": "AbstractPlotting.colorlegend!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.colorlegend!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.colorlegend!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.colorlegend!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.colorlegend!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.colorlegend!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour",
    "category": "function",
    "text": "contour(x, y, z)\n\nCreates a contour plot of the plane spanning x::Vector, y::Vector, z::Matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour!",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour!",
    "category": "function",
    "text": "AbstractPlotting.contour!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.contour!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.contour!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.contour!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d",
    "category": "function",
    "text": "contour3d(x, y, z)\n\nCreates a 3D contour plot of the plane spanning x::Vector, y::Vector, z::Matrix, with z-elevation for each level\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d!",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d!",
    "category": "function",
    "text": "AbstractPlotting.contour3d!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.contour3d!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.contour3d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour3d!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.contour3d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour3d!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "function",
    "text": "Enables to use scatter like a surface plot with x::Vector, y::Vector, z::Matrix spanning z over the grid spanned by x y\n\n\n\n\n\nconvert_arguments(P, x, y, z)::(Vector)\n\nTakes vectors x, y, and z and turns it into a vector of 3D points of the values from x, y, and z. P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x)::(Vector)\n\nTakes an input GeometryPrimitive x and decomposes it to points. P is the plot Type (it is optional).\n\n\n\n\n\nAccepts a Vector of Pair of Points (e.g. [Point(0, 0) => Point(1, 1), ...]) to encode e.g. linesegments or directions.\n\n\n\n\n\nconvert_arguments(P, y)::Vector\n\nTakes vector y and generates a range from 1 to the length of y, for plotting on an arbitrary x axis.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y)::(Vector)\n\nTakes vectors x and y and turns it into a vector of 2D points of the values from x and y.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z)::Tuple{ClosedInterval, ClosedInterval, Matrix}\n\nTakes 2 ClosedIntervals\'s x, y, and an AbstractMatrix z, and converts the closed range to linspaces with size(z, 1/2) P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(x)::(String)\n\nTakes an input AbstractString x and converts it to a string.\n\n\n\n\n\nconvert_arguments(P, x)::(Vector)\n\nTakes an input HyperRectangle x and decomposes it to points.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x::VecOrMat, y::VecOrMat, z::Matrix)\n\nTakes 3 AbstractMatrix x, y, and z, converts them to Float32 and outputs them in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, Matrix)::Tuple{ClosedInterval, ClosedInterval, Matrix}\n\nTakes an AbstractMatrix, converts the dimesions n and m into ClosedInterval, and stores the ClosedInterval to n and m, plus the original matrix in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, f)::(Vector, Vector, Matrix)\n\nTakes vectors x and y and the function f, and applies f on the grid that x and y span. This is equivalent to f.(x, y\'). P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, Matrix)::Tuple{ClosedInterval, ClosedInterval, ClosedInterval, Matrix}\n\nTakes an array of {T, 3} where T, converts the dimesions n, m and k into ClosedInterval, and stores the ClosedInterval to n, m and k, plus the original array in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z, i)::(Vector, Vector, Vector, Matrix)\n\nTakes 3 AbstractVector x, y, and z and the AbstractMatrix i, and puts everything in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z, f)::(Vector, Vector, Vector, Matrix)\n\nTakes AbstractVector x, y, and z and the function f, evaluates f on the volume spanned by x, y and z, and puts x, y, z and f(x,y,z) in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(Mesh, x, y, z)::GLNormalMesh\n\nTakes real vectors x, y, z and constructs a mesh out of those, under the assumption that every 3 points form a triangle.\n\n\n\n\n\nconvert_arguments(Mesh, xyz::AbstractVector)::GLNormalMesh\n\nTakes an input mesh and a vector xyz representing the vertices of the mesh, and creates indices under the assumption, that each triplet in xyz forms a triangle.\n\n\n\n\n\nconvert_arguments(Mesh, x, y, z, indices)::GLNormalMesh\n\nTakes real vectors x, y, z and constructs a triangle mesh out of those, using the faces in indices, which can be integers (every 3 -> one triangle), or GeometryTypes.Face{N, <: Integer}.\n\n\n\n\n\nconvert_arguments(Mesh, vertices, indices)::GLNormalMesh\n\nTakes vertices and indices, and creates a triangle mesh out of those. See to_vertices and to_triangles for more informations about accepted types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "function",
    "text": "`AbstractVector{<:AbstractFloat}` for denoting sequences of fill/nofill. e.g.\n\n[0.5, 0.8, 1.2] will result in 0.5 filled, 0.3 unfilled, 0.4 filled. 1.0 unit is one linewidth!\n\n\n\n\n\nA `Symbol` equal to `:dash`, `:dot`, `:dashdot`, `:dashdotdot`\n\n\n\n\n\nText align, e.g.:\n\n\n\n\n\nfont conversion\n\na string naming a font, e.g. helvetica\n\n\n\n\n\nrotation accepts:\nto_rotation(b, quaternion)\nto_rotation(b, tuple_float)\nto_rotation(b, vec4)\n\n\n\n\n\nto_colormap(b, x)\n\nAn AbstractVector{T} with any object that to_color accepts.\n\n\n\n\n\nTuple(A, B) or Pair{A, B} with any object that to_color accepts\n\n\n\n\n\nA Symbol/String naming the gradient. For more on what names are available please see: `available_gradients()\n\n\n\n\n\nto_volume_algorithm(b, x)\n\nEnum values: IsoValue Absorption MaximumIntensityProjection AbsorptionRGBA IndexedAbsorptionRGBA\n\n\n\n\n\nSymbol/String: iso, absorption, mip, absorptionrgba, indexedabsorption\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.current_scene",
    "page": "Docstrings",
    "title": "AbstractPlotting.current_scene",
    "category": "function",
    "text": "Returns the current active scene (the last scene that got created)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.default_plot_signatures",
    "page": "Docstrings",
    "title": "AbstractPlotting.default_plot_signatures",
    "category": "function",
    "text": " default_plot_signatures(funcname, PlotType)\n\nCreates all the different overloads for funcname that need to be supported for the plotting frontend! Since we add all these signatures to different functions, we make it reusable with this function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.detach!",
    "page": "Docstrings",
    "title": "AbstractPlotting.detach!",
    "category": "function",
    "text": "Remove combined from the current parent, and add it to a new subscene of the parent scene. Returns the new parent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.dont_touch",
    "page": "Docstrings",
    "title": "AbstractPlotting.dont_touch",
    "category": "function",
    "text": "Moves child so that it doesn\'t touch parent. Leaves a gap to parent defined by pad.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.elconvert",
    "page": "Docstrings",
    "title": "AbstractPlotting.elconvert",
    "category": "function",
    "text": "Converts the elemen array type to T1 without making a copy if the element type matches\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.fill_between!",
    "page": "Docstrings",
    "title": "AbstractPlotting.fill_between!",
    "category": "function",
    "text": "fill_between!(x, y1, y2; where = nothing, scene = current_scene(), kw_args...)\n\nfill the section between 2 lines with the condition where\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.fit_factor",
    "page": "Docstrings",
    "title": "AbstractPlotting.fit_factor",
    "category": "function",
    "text": "fit_factor(rect, lims::NTuple{N}) where N\n\nCalculates the scaling one needs to apply to lims to fit rect without changing aspect ratio. Returns float scaling and the full strech as given by fit_factor_stretch\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.fit_factor_stretch",
    "page": "Docstrings",
    "title": "AbstractPlotting.fit_factor_stretch",
    "category": "function",
    "text": "fit_factor_stretch(rect, lims::NTuple{N}) where N\n\nCalculates the stretch factor to fill rect in all dimension. Returns a stretch N dimensional fit factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.fit_ratio",
    "page": "Docstrings",
    "title": "AbstractPlotting.fit_ratio",
    "category": "function",
    "text": "fit_ratio(rect, lims)\n\nCalculates the ratio one needs to stretch lims in order to get the same aspect ratio\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.flatten_combined",
    "page": "Docstrings",
    "title": "AbstractPlotting.flatten_combined",
    "category": "function",
    "text": "Flattens all the combined plots and returns a Vector of Atomic plots\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.force_update!",
    "page": "Docstrings",
    "title": "AbstractPlotting.force_update!",
    "category": "function",
    "text": "Forces to rerender the scnee\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.from_dict",
    "page": "Docstrings",
    "title": "AbstractPlotting.from_dict",
    "category": "function",
    "text": "from_dict(::Type{T}, dict)\n\nCreates the type T from the fields in dict. Automatically converts to the correct node types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.frustum",
    "page": "Docstrings",
    "title": "AbstractPlotting.frustum",
    "category": "function",
    "text": "Create view frustum\n\nParameters\n----------\n    left : float\n     Left coordinate of the field of view.\n    right : float\n     Left coordinate of the field of view.\n    bottom : float\n     Bottom coordinate of the field of view.\n    top : float\n     Top coordinate of the field of view.\n    znear : float\n     Near coordinate of the field of view.\n    zfar : float\n     Far coordinate of the field of view.\n\nReturns\n-------\n    M : array\n     View frustum matrix (4x4).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap",
    "category": "function",
    "text": "`heatmap(x, y, values)` or `heatmap(values)`\n\nPlots a heatmap as an image on x, y (defaults to interpretation as dimensions).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap!",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap!",
    "category": "function",
    "text": "AbstractPlotting.heatmap!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.heatmap!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.heatmap!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.heatmap!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.heatmap!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.heatmap!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.help",
    "page": "Docstrings",
    "title": "AbstractPlotting.help",
    "category": "function",
    "text": "help(func[; extended = false])\n\nWelcome to the main help function of Makie.jl / AbstractPlotting.jl.\n\nFor help on a specific function\'s arguments, type help_arguments(function_name).\n\nFor help on a specific function\'s attributes, type help_attributes(plot_Type).\n\nUse the optional extended = true keyword argument to see more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.help_arguments",
    "page": "Docstrings",
    "title": "AbstractPlotting.help_arguments",
    "category": "function",
    "text": "help_arguments([io], func)\n\nReturns a list of signatures for function func.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.help_attributes",
    "page": "Docstrings",
    "title": "AbstractPlotting.help_attributes",
    "category": "function",
    "text": "help_attributes([io], Union{PlotType, PlotFunction}; extended = false)\n\nReturns a list of attributes for the plot type Typ. The attributes returned extend those attributes found in the default_theme.\n\nUse the optional keyword argument extended (default = false) to show in addition the default values of each attribute. usage:\n\n>help_attributes(scatter)\n	alpha\n	color\n	colormap\n	colorrange\n	distancefield\n	glowcolor\n	glowwidth\n	linewidth\n	marker\n	marker_offset\n	markersize\n	overdraw\n	rotations\n	strokecolor\n	strokewidth\n	transform_marker\n	transparency\n	uv_offset_width\n	visible\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.hovered_scene",
    "page": "Docstrings",
    "title": "AbstractPlotting.hovered_scene",
    "category": "function",
    "text": "hovered_scene()\n\nReturn the scene that the mouse is currently hovering over.\n\nProperly identifies the scene for a plot with multiple sub-plots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image",
    "page": "Docstrings",
    "title": "AbstractPlotting.image",
    "category": "function",
    "text": "`image(x, y, image)` / `image(image)`\n\nPlots an image on range x, y (defaults to dimensions).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image!",
    "page": "Docstrings",
    "title": "AbstractPlotting.image!",
    "category": "function",
    "text": "AbstractPlotting.image!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.image!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.image!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.image!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.image!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.image!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.interpolated_getindex",
    "page": "Docstrings",
    "title": "AbstractPlotting.interpolated_getindex",
    "category": "function",
    "text": "interpolated_getindex(cmap::AbstractArray, value::AbstractFloat, norm = (0.0, 1.0))\n\nLike getindex, but accepts values between 0..1 and interpolates those to the full range. You can use norm, to change the range of 0..1 to whatever you want.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.ispressed",
    "page": "Docstrings",
    "title": "AbstractPlotting.ispressed",
    "category": "function",
    "text": "returns true if button is pressed in scene[:mousebuttons or :keyboardbuttons] You can use nothing, to indicate it should always return true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.legend",
    "page": "Docstrings",
    "title": "AbstractPlotting.legend",
    "category": "function",
    "text": "AbstractPlotting.legend(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.legend(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.legend(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.legend!",
    "page": "Docstrings",
    "title": "AbstractPlotting.legend!",
    "category": "function",
    "text": "AbstractPlotting.legend!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.legend!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.legend!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.legend!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.legend!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.legend!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines",
    "category": "function",
    "text": "`lines(x, y, z)` / `lines(x, y)` / or `lines(positions)`\n\nCreates a connected line plot for each element in (x, y, z), (x, y) or positions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines!",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines!",
    "category": "function",
    "text": "AbstractPlotting.lines!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.lines!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.lines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.lines!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.lines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.lines!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments",
    "category": "function",
    "text": "`linesegments(x, y, z)` / `linesegments(x, y)` / `linesegments(positions)`\n\nPlots a line for each pair of points in (x, y, z), (x, y), or positions.\n\nAttributes: The same as for lines\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments!",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments!",
    "category": "function",
    "text": "AbstractPlotting.linesegments!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.linesegments!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.linesegments!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.linesegments!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.linesegments!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.linesegments!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lookat",
    "page": "Docstrings",
    "title": "AbstractPlotting.lookat",
    "category": "function",
    "text": "view = lookat(eyeposition, lookat, up) creates a view matrix with the eye located at eyeposition and looking at position lookat, with the top of the window corresponding to the direction up. Only the component of up that is perpendicular to the vector pointing from eyeposition to lookat will be used.  All inputs must be supplied as 3-vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.map_once",
    "page": "Docstrings",
    "title": "AbstractPlotting.map_once",
    "category": "function",
    "text": "map_once(closure, inputs::Node....)::Node\n\nLike Reactive.foreach, in the sense that it will be preserved even if no reference is kept. The difference is, that you can call map once multiple times with the same closure and it will close the old result Node and register a new one instead.\n\n``` function test(s1::Node)     s3 = maponce(x-> (println(\"1 \", x); x), s1)     s3 = maponce(x-> (println(\"2 \", x); x), s1)\n\nend test(Node(1), Node(2))\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mergekeys",
    "page": "Docstrings",
    "title": "AbstractPlotting.mergekeys",
    "category": "function",
    "text": "mergekeys(keys::NTuple{N, Symbol}, target::Attributes, source::Attributes)\n\nMerges only keys from source into target. Creates a copy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mergekeys!",
    "page": "Docstrings",
    "title": "AbstractPlotting.mergekeys!",
    "category": "function",
    "text": "mergekeys!(keys::NTuple{N, Symbol}, target::Attributes, source::Attributes)\n\nMerges only keys from source into target.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh",
    "category": "function",
    "text": "`mesh(x, y, z)`, `mesh(mesh_object)`, `mesh(x, y, z, faces)`, or `mesh(xyz, faces)`\n\nPlots a 3D mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh!",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh!",
    "category": "function",
    "text": "AbstractPlotting.mesh!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.mesh!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.mesh!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.mesh!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.mesh!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.mesh!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter",
    "category": "function",
    "text": "`meshscatter(x, y, z)` / `meshscatter(x, y)` / `meshscatter(positions)`\n\nPlots a mesh for each element in (x, y, z), (x, y), or positions (similar to scatter). markersize is a scaling applied to the primitive passed as marker\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter!",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter!",
    "category": "function",
    "text": "AbstractPlotting.meshscatter!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.meshscatter!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.meshscatter!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.meshscatter!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.meshscatter!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.meshscatter!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mouseposition",
    "page": "Docstrings",
    "title": "AbstractPlotting.mouseposition",
    "category": "function",
    "text": "mouseposition(scene = hovered_scene()) -> pos\n\nReturn the current position of the mouse pos in data points of the given scene.\n\nBy default uses the scene that the mouse is currently hovering over.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.move_from_touch",
    "page": "Docstrings",
    "title": "AbstractPlotting.move_from_touch",
    "category": "function",
    "text": "calculates how much child rectangle needs to move to not touch the parent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.multipleplot",
    "page": "Docstrings",
    "title": "AbstractPlotting.multipleplot",
    "category": "function",
    "text": "AbstractPlotting.multipleplot(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.multipleplot(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.multipleplot(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.multipleplot!",
    "page": "Docstrings",
    "title": "AbstractPlotting.multipleplot!",
    "category": "function",
    "text": "AbstractPlotting.multipleplot!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.multipleplot!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.multipleplot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.multipleplot!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.multipleplot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.multipleplot!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.must_update",
    "page": "Docstrings",
    "title": "AbstractPlotting.must_update",
    "category": "function",
    "text": "Returns wether a scene needs updating\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.notify!",
    "page": "Docstrings",
    "title": "AbstractPlotting.notify!",
    "category": "function",
    "text": "Pushes an updates to all listeners of node\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Observables.on",
    "page": "Docstrings",
    "title": "Observables.on",
    "category": "function",
    "text": "on(f, c::Camera, nodes::Node...)\n\nWhen mapping over nodes for the camera, we store them in the steering_node vector, to make it easier to disconnect the camera steering signals later!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.onpick",
    "page": "Docstrings",
    "title": "AbstractPlotting.onpick",
    "category": "function",
    "text": "onpick(func, plot)\n\nCalls func if one clicks on plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.perspectiveprojection",
    "page": "Docstrings",
    "title": "AbstractPlotting.perspectiveprojection",
    "category": "function",
    "text": "proj = perspectiveprojection([T], fovy, aspect, znear, zfar) defines a projection matrix with a given angular field-of-view fovy along the y-axis (measured in degrees), the specified aspect ratio, and near and far clipping planes znear, zfar. Optionally specify the element type T of the matrix.\n\n\n\n\n\nproj = perspectiveprojection([T], rect, fov, near, far) defines the projection ratio in terms of the rectangular view size rect rather than the aspect ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.pick",
    "page": "Docstrings",
    "title": "AbstractPlotting.pick",
    "category": "function",
    "text": "Picks a mouse position\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot",
    "category": "function",
    "text": "AbstractPlotting.plot(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.plot(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.plot(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot!",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot!",
    "category": "function",
    "text": "AbstractPlotting.plot!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.plot!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.plot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.plot!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.plot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.plot!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\nMain plotting signatures that plot/plot! route to if no Plot Type is given\n\n\n\n\n\n`wireframe(x, y, z)`, `wireframe(positions)`, or `wireframe(mesh)`\n\nDraws a wireframe, either interpreted as a surface or as a mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plots_from_camera",
    "page": "Docstrings",
    "title": "AbstractPlotting.plots_from_camera",
    "category": "function",
    "text": "Fetches all plots sharing the same camera\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plottype",
    "page": "Docstrings",
    "title": "AbstractPlotting.plottype",
    "category": "function",
    "text": "`plot_type(plot_args...)`\n\nThe default plot type for any argument is lines. Any custom argument combination that has only one meaningful way to be plotted should overload this. e.g.:\n\n    # make plot(rand(5, 5, 5)) plot as a volume\n    plottype(x::Array{<: AbstractFlot, 3}) = Volume\n\n\n\n\n\nplottype(P1::Type{<: Combined{T1}}, P2::Type{<: Combined{T2}})\n\nChooses the more concrete plot type ```example function convert_arguments(P::PlotFunc, args...)     ptype = plottype(P, Lines)     ... end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.poly",
    "page": "Docstrings",
    "title": "AbstractPlotting.poly",
    "category": "function",
    "text": "AbstractPlotting.poly(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.poly(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.poly(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.poly!",
    "page": "Docstrings",
    "title": "AbstractPlotting.poly!",
    "category": "function",
    "text": "AbstractPlotting.poly!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.poly!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.poly!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.poly!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.poly!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.poly!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.primary_resolution",
    "page": "Docstrings",
    "title": "AbstractPlotting.primary_resolution",
    "category": "function",
    "text": "Returns the resolution of the primary monitor. If the primary monitor can\'t be accessed, returns (1920, 1080) (full hd)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.print_rec",
    "page": "Docstrings",
    "title": "AbstractPlotting.print_rec",
    "category": "function",
    "text": "print_rec(io::IO, dict, indent::Int = 1[; extended = false])\n\nTraverses a dictionary dict and recursively print out its keys and values in a nicely-indented format.\n\nUse the optional extended = true keyword argument to see more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.quiver",
    "page": "Docstrings",
    "title": "AbstractPlotting.quiver",
    "category": "function",
    "text": "AbstractPlotting.arrows(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.arrows(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.quiver!",
    "page": "Docstrings",
    "title": "AbstractPlotting.quiver!",
    "category": "function",
    "text": "AbstractPlotting.arrows!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.arrows!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.arrows!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.arrows!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.raw_boundingbox",
    "page": "Docstrings",
    "title": "AbstractPlotting.raw_boundingbox",
    "category": "function",
    "text": "Calculates the exact boundingbox of a Scene/Plot, without considering any transformation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.reasonable_resolution",
    "page": "Docstrings",
    "title": "AbstractPlotting.reasonable_resolution",
    "category": "function",
    "text": "Returns a reasonable resolution for the main monitor. (right now just half the resolution of the main monitor)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.record",
    "page": "Docstrings",
    "title": "AbstractPlotting.record",
    "category": "function",
    "text": "record(func, scene, path)\n\nusage:\n\n    record(scene, \"test.gif\") do io\n        for i = 1:100\n            scene.plots[:color] = ...# animate scene\n            recordframe!(io) # record a new frame\n        end\n    end\n\n\n\n\n\nrecord(func, scene, path, iter)\n\nusage:\n\n    record(scene, \"test.gif\", 1:100) do i\n        scene.plots[:color] = ...# animate scene\n    end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.record_events",
    "page": "Docstrings",
    "title": "AbstractPlotting.record_events",
    "category": "function",
    "text": "Record all window events that happen while executing function f for scene and serializes them to path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.recordframe!",
    "page": "Docstrings",
    "title": "AbstractPlotting.recordframe!",
    "category": "function",
    "text": "Adds a video frame to the VideoStream\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.replace_automatic!",
    "page": "Docstrings",
    "title": "AbstractPlotting.replace_automatic!",
    "category": "function",
    "text": "Like get!(f, dict, key) but also calls f and replaces key when the corresponding value is nothing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.replay_events",
    "page": "Docstrings",
    "title": "AbstractPlotting.replay_events",
    "category": "function",
    "text": "Replays the serialized events recorded with record_events in path in scene.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.resample",
    "page": "Docstrings",
    "title": "AbstractPlotting.resample",
    "category": "function",
    "text": "resample(A::AbstractVector, len::Integer)\n\nResample a vector with linear interpolation to have length len\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.resampled_colors",
    "page": "Docstrings",
    "title": "AbstractPlotting.resampled_colors",
    "category": "function",
    "text": "resampled_colors(attributes::Attributes, levels::Integer)\n\nResample the color attribute from attributes. Resamples :colormap if present, or repeats :color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.safe_off",
    "page": "Docstrings",
    "title": "AbstractPlotting.safe_off",
    "category": "function",
    "text": "Observables.off but without throwing an error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.save",
    "page": "Docstrings",
    "title": "AbstractPlotting.save",
    "category": "function",
    "text": "save(path::String, io::VideoStream)\n\nFlushes the video stream and converts the file to the extension found in path which can be mkv is default and doesn\'t need convert, gif, mp4 and webm. mp4 is recommended for the internet, since it\'s the most supported format. webm yields the smallest file size, mp4 and mk4 are marginally bigger and gifs are up to 6 times bigger with same quality!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter",
    "category": "function",
    "text": "`scatter(x, y, z)` / `scatter(x, y)` / `scatter(positions)`\n\nPlots a marker for each element in (x, y, z), (x, y), or positions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter!",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter!",
    "category": "function",
    "text": "AbstractPlotting.scatter!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.scatter!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.scatter!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatter!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.scatter!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatter!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatterlines",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatterlines",
    "category": "function",
    "text": "AbstractPlotting.scatterlines(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.scatterlines(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatterlines(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatterlines!",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatterlines!",
    "category": "function",
    "text": "AbstractPlotting.scatterlines!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.scatterlines!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.scatterlines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatterlines!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.scatterlines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatterlines!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.select_rectangle",
    "page": "Docstrings",
    "title": "AbstractPlotting.select_rectangle",
    "category": "function",
    "text": "select_rectangle(scene; kwargs...) -> rect\n\nInteractively select a rectangle on a scene by clicking the left mouse button, dragging and then un-clicking. The function returns an observable rect whose value corresponds to the selected rectangle on the scene. In addition the function plots the selected rectangle on the scene as the user clicks and moves the mouse around. When the button is not clicked any more, the plotted rectangle disappears.\n\nThe value of the returned observable is updated only when the user un-clicks (i.e. when the final value of the rectangle has been decided) and only if the rectangle has area > 0.\n\nThe kwargs... are propagated into lines! which plots the selected rectangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.series",
    "page": "Docstrings",
    "title": "AbstractPlotting.series",
    "category": "function",
    "text": "AbstractPlotting.series(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.series(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.series(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.series!",
    "page": "Docstrings",
    "title": "AbstractPlotting.series!",
    "category": "function",
    "text": "AbstractPlotting.series!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.series!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.series!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.series!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.series!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.series!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.slider",
    "page": "Docstrings",
    "title": "AbstractPlotting.slider",
    "category": "function",
    "text": "AbstractPlotting.slider(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.slider(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.slider(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.slider!",
    "page": "Docstrings",
    "title": "AbstractPlotting.slider!",
    "category": "function",
    "text": "AbstractPlotting.slider!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.slider!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.slider!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.slider!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.slider!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.slider!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.step!",
    "page": "Docstrings",
    "title": "AbstractPlotting.step!",
    "category": "function",
    "text": "step!(s::Stepper)\n\nsteps through a Makie.Stepper and outputs a file with filename filename-step.jpg. This is useful for generating progressive plot examples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.streamlines",
    "page": "Docstrings",
    "title": "AbstractPlotting.streamlines",
    "category": "function",
    "text": "AbstractPlotting.streamlines(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.streamlines(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.streamlines(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.streamlines!",
    "page": "Docstrings",
    "title": "AbstractPlotting.streamlines!",
    "category": "function",
    "text": "AbstractPlotting.streamlines!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.streamlines!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.streamlines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.streamlines!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.streamlines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.streamlines!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface",
    "category": "function",
    "text": "`surface(x, y, z)`\n\nPlots a surface, where (x, y, z) are supposed to lie on a grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface!",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface!",
    "category": "function",
    "text": "AbstractPlotting.surface!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.surface!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.surface!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.surface!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.surface!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.surface!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text",
    "page": "Docstrings",
    "title": "AbstractPlotting.text",
    "category": "function",
    "text": "`text(string)`\n\nPlots a text.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text!",
    "page": "Docstrings",
    "title": "AbstractPlotting.text!",
    "category": "function",
    "text": "AbstractPlotting.text!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.text!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.text!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.text!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.text!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.text!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_color",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_color",
    "category": "function",
    "text": "to_color(color)\n\nConverts a color symbol (e.g. :blue) to a color RGBA.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_colormap",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_colormap",
    "category": "function",
    "text": "to_colormap(cm[, N = 20])\n\nConverts a colormap cm symbol (e.g. :Spectral) to a colormap RGB array, where N specifies the number of color points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_func",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_func",
    "category": "function",
    "text": "to_func(Typ)\n\nMaps the input of a Type name to its cooresponding function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "function",
    "text": "to_spritemarker(b, x::Circle)\n\nGeometryTypes.Circle(Point2(...), radius)\n\n\n\n\n\nto_spritemarker(b, ::Type{Circle})\n\nType{GeometryTypes.Circle}\n\n\n\n\n\nto_spritemarker(b, ::Type{Rectangle})\n\nType{GeometryTypes.Rectangle}\n\n\n\n\n\nto_spritemarker(b, marker::Char)\n\nAny Char, including unicode\n\n\n\n\n\nMatrix of AbstractFloat will be interpreted as a distancefield (negative numbers outside shape, positive inside)\n\n\n\n\n\nAny AbstractMatrix{<: Colorant} or other image type\n\n\n\n\n\nA Symbol - Available options can be printed with available_marker_symbols()\n\n\n\n\n\nVector of anything that is accepted as a single marker will give each point it\'s own marker. Note that it needs to be a uniform vector with the same element type!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_string",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_string",
    "category": "function",
    "text": "to_string(func)\n\nTurns the input of a function name or plot Type into a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_type",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_type",
    "category": "function",
    "text": "to_type(func)\n\nMaps the input of a function name to its cooresponding Type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.used_attributes",
    "page": "Docstrings",
    "title": "AbstractPlotting.used_attributes",
    "category": "function",
    "text": "used_attributes(args...) = ()\n\nfunction used to indicate what keyword args one wants to get passed in convert_arguments. Usage:\n\n    struct MyType end\n    used_attributes(::MyType) = (:attribute,)\n    function convert_arguments(x::MyType; attribute = 1)\n        ...\n    end\n    # attribute will get passed to convert_arguments\n    # without keyword_verload, this wouldn\'t happen\n    plot(MyType, attribute = 2)\n    #You can also use the convenience macro, to overload convert_arguments in one step:\n    @keywords convert_argumetns(x::MyType; attribute = 1)\n        ...\n    end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume",
    "category": "function",
    "text": "`volume(volume_data)`\n\nPlots a volume. Available algorithms are:\n\n:iso => IsoValue\n:absorption => Absorption\n:mip => MaximumIntensityProjection\n:absorptionrgba => AbsorptionRGBA\n:indexedabsorption => IndexedAbsorptionRGBA\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume!",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume!",
    "category": "function",
    "text": "AbstractPlotting.volume!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.volume!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.volume!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volume!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.volume!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volume!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volumeslices",
    "page": "Docstrings",
    "title": "AbstractPlotting.volumeslices",
    "category": "function",
    "text": "AbstractPlotting.volumeslices(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.volumeslices(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volumeslices(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volumeslices!",
    "page": "Docstrings",
    "title": "AbstractPlotting.volumeslices!",
    "category": "function",
    "text": "AbstractPlotting.volumeslices!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.volumeslices!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.volumeslices!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volumeslices!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.volumeslices!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volumeslices!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.wireframe",
    "page": "Docstrings",
    "title": "AbstractPlotting.wireframe",
    "category": "function",
    "text": "AbstractPlotting.wireframe(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.wireframe(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.wireframe(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.wireframe!",
    "page": "Docstrings",
    "title": "AbstractPlotting.wireframe!",
    "category": "function",
    "text": "AbstractPlotting.wireframe!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\nAbstractPlotting.wireframe!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\nAbstractPlotting.wireframe!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.wireframe!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\nAbstractPlotting.wireframe!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.wireframe!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AbstractPlotting...AbstractPlotting.@extractAbstractPlotting.@extractvalueAbstractPlotting.@get_attributeAbstractPlotting.@key_strAbstractPlotting.@log_gcAbstractPlotting.@log_performanceAbstractPlotting.@log_signalsAbstractPlotting.@recipeAbstractPlotting.AbsoluteAbstractPlotting.AbsorptionAbstractPlotting.AbsorptionRGBAAbstractPlotting.AbstractBackendAbstractPlotting.AbstractCameraAbstractPlotting.AbstractPlotAbstractPlotting.AbstractPlotListAbstractPlotting.AbstractPlottingAbstractPlotting.AbstractSceneAbstractPlotting.AbstractScreenAbstractPlotting.AccumAbstractPlotting.AnnotationsAbstractPlotting.ArcAbstractPlotting.ArrowsAbstractPlotting.AtomicAbstractPlotting.AttributeOrPlotAbstractPlotting.AttributesAbstractPlotting.AutomaticAbstractPlotting.AxisAbstractPlotting.Axis2DAbstractPlotting.Axis3DAbstractPlotting.BandAbstractPlotting.BarPlotAbstractPlotting.BillboardAbstractPlotting.ButtonAbstractPlotting.ButtonTypesAbstractPlotting.CameraAbstractPlotting.Camera2DAbstractPlotting.Camera3DAbstractPlotting.CameraLiftAbstractPlotting.CategoricalAbstractPlotting.CircleAbstractPlotting.ColorLegendAbstractPlotting.CombinedAbstractPlotting.ContinousAbstractPlotting.ContourAbstractPlotting.Contour3dAbstractPlotting.ContoursAbstractPlotting.ContoursHygieneAbstractPlotting.ConversionTraitAbstractPlotting.EmptyCameraAbstractPlotting.EventsAbstractPlotting.FRectAbstractPlotting.FRect2DAbstractPlotting.FRect3DAbstractPlotting.FormattersAbstractPlotting.GLNormalUVMeshAbstractPlotting.HeatmapAbstractPlotting.IRectAbstractPlotting.IRect2DAbstractPlotting.IRect3DAbstractPlotting.ImageAbstractPlotting.ImageLikeAbstractPlotting.IndexedAbsorptionRGBAAbstractPlotting.IsoValueAbstractPlotting.KeyAbstractPlotting.KeyboardAbstractPlotting.LegendAbstractPlotting.LimitsAbstractPlotting.LineSegmentsAbstractPlotting.LinesAbstractPlotting.LinesegmentBufferAbstractPlotting.MaximumIntensityProjectionAbstractPlotting.MeshAbstractPlotting.MeshScatterAbstractPlotting.MouseAbstractPlotting.MultiplePlotAbstractPlotting.NVecAbstractPlotting.NativeFontAbstractPlotting.NodeAbstractPlotting.OrthographicAbstractPlotting.PaletteAbstractPlotting.PerspectiveAbstractPlotting.PivotAbstractPlotting.PixelCameraAbstractPlotting.PlotAbstractPlotting.PlotDisplayAbstractPlotting.PlotFuncAbstractPlotting.PlotListAbstractPlotting.PlotSpecAbstractPlotting.PointAbstractPlotting.Point2AbstractPlotting.Point2dAbstractPlotting.Point2f0AbstractPlotting.Point3AbstractPlotting.Point3f0AbstractPlotting.Point4AbstractPlotting.Point4f0AbstractPlotting.PointBasedAbstractPlotting.Pointf0AbstractPlotting.PolyAbstractPlotting.PopupAbstractPlotting.ProjectionEnumAbstractPlotting.QuaternionAbstractPlotting.Quaternionf0AbstractPlotting.RGBAf0AbstractPlotting.RGBf0AbstractPlotting.RangeLikeAbstractPlotting.RaymarchAlgorithmAbstractPlotting.RealVectorAbstractPlotting.RecordEventsAbstractPlotting.RectAbstractPlotting.Rect2DAbstractPlotting.Rect3DAbstractPlotting.ReverseAbstractPlotting.SMatAbstractPlotting.ScatterAbstractPlotting.ScatterLinesAbstractPlotting.SceneAbstractPlotting.SceneLikeAbstractPlotting.ScenePlotAbstractPlotting.SeriesAbstractPlotting.SliderAbstractPlotting.SphereAbstractPlotting.StepperAbstractPlotting.StreamLinesAbstractPlotting.SurfaceAbstractPlotting.SurfaceLikeAbstractPlotting.TextAbstractPlotting.TextBufferAbstractPlotting.TextureAtlasAbstractPlotting.ThemeAbstractPlotting.TransformableAbstractPlotting.TransformationAbstractPlotting.VecAbstractPlotting.Vec2AbstractPlotting.Vec2dAbstractPlotting.Vec2f0AbstractPlotting.Vec3AbstractPlotting.Vec3f0AbstractPlotting.Vec4AbstractPlotting.Vec4f0AbstractPlotting.VecTypesAbstractPlotting.Vecf0AbstractPlotting.VideoStreamAbstractPlotting.VolumeAbstractPlotting.VolumeLikeAbstractPlotting.VolumeSlicesAbstractPlotting.WireframeAbstractPlotting.XYBasedAbstractPlotting.__init__AbstractPlotting._alternative_fontsAbstractPlotting._cache_pathAbstractPlotting._current_default_themeAbstractPlotting._default_fontAbstractPlotting._font_cacheAbstractPlotting._forced_update_scheduledAbstractPlotting._helpAbstractPlotting._isfiniteAbstractPlotting._marker_mapAbstractPlotting._plot!AbstractPlotting._primary_resolutionAbstractPlotting._tobe_cachedAbstractPlotting._widthsAbstractPlotting.a_lengthAbstractPlotting.absrectAbstractPlotting.add_axis!AbstractPlotting.add_labels!AbstractPlotting.add_pan!AbstractPlotting.add_restriction!AbstractPlotting.add_rotation!AbstractPlotting.add_translation!AbstractPlotting.add_zoom!AbstractPlotting.align_offsetAbstractPlotting.alignment2numAbstractPlotting.all_gradient_namesAbstractPlotting.alternativefontsAbstractPlotting.annotationsAbstractPlotting.annotations!AbstractPlotting.apply_convert!AbstractPlotting.arcAbstractPlotting.arc!AbstractPlotting.argtypesAbstractPlotting.argument_conversionAbstractPlotting.argument_namesAbstractPlotting.arrow_headAbstractPlotting.arrowsAbstractPlotting.arrows!AbstractPlotting.assembleAbstractPlotting.assetpathAbstractPlotting.atomic_function_symbolsAbstractPlotting.atomic_functionsAbstractPlotting.atomic_limitsAbstractPlotting.attributesAbstractPlotting.automaticAbstractPlotting.available_backendsAbstractPlotting.available_gradientsAbstractPlotting.available_marker_symbolsAbstractPlotting.axis2dAbstractPlotting.axis2d!AbstractPlotting.axis3dAbstractPlotting.axis3d!AbstractPlotting.backend_displayAbstractPlotting.backend_showAbstractPlotting.backend_showableAbstractPlotting.bandAbstractPlotting.band!AbstractPlotting.band_connectAbstractPlotting.barplotAbstractPlotting.barplot!AbstractPlotting.bearingAbstractPlotting.boundingboxAbstractPlotting.broadcast_foreachAbstractPlotting.bs_getindexAbstractPlotting.bs_lengthAbstractPlotting.buttonAbstractPlotting.button!AbstractPlotting.button_keyAbstractPlotting.cached_loadAbstractPlotting.cached_logoAbstractPlotting.calc_dragAbstractPlotting.calc_offsetAbstractPlotting.calc_positionAbstractPlotting.calculated_attributes!AbstractPlotting.cam2dAbstractPlotting.cam2d!AbstractPlotting.cam3d!AbstractPlotting.cameraAbstractPlotting.cameracontrolsAbstractPlotting.cameracontrols!AbstractPlotting.campixelAbstractPlotting.campixel!AbstractPlotting.camspaceAbstractPlotting.categoric_labelsAbstractPlotting.categoric_positionAbstractPlotting.categoric_rangeAbstractPlotting.categorical_traitAbstractPlotting.center!AbstractPlotting.childAbstractPlotting.close2squareAbstractPlotting.close_all_nodesAbstractPlotting.color_and_colormap!AbstractPlotting.colorbrewer_8color_namesAbstractPlotting.colorbrewer_namesAbstractPlotting.colorbufferAbstractPlotting.colorlegendAbstractPlotting.colorlegend!AbstractPlotting.colorswatchAbstractPlotting.combineAbstractPlotting.combine!AbstractPlotting.combined_modelmatrixAbstractPlotting.concrete_typeAbstractPlotting.contourAbstractPlotting.contour!AbstractPlotting.contour3dAbstractPlotting.contour3d!AbstractPlotting.contourlinesAbstractPlotting.conversion_traitAbstractPlotting.convert_argumentAbstractPlotting.convert_argumentsAbstractPlotting.convert_attributeAbstractPlotting.correct_ratio!AbstractPlotting.current_backendAbstractPlotting.current_default_themeAbstractPlotting.current_global_sceneAbstractPlotting.current_sceneAbstractPlotting.data_limitsAbstractPlotting.decomposeAbstractPlotting.default_labelsAbstractPlotting.default_palettesAbstractPlotting.default_plot_signaturesAbstractPlotting.default_printerAbstractPlotting.default_themeAbstractPlotting.default_ticksAbstractPlotting.defaultfontAbstractPlotting.detach!AbstractPlotting.dim2AbstractPlotting.dim3AbstractPlotting.disconnect!AbstractPlotting.dont_touchAbstractPlotting.dragsliderAbstractPlotting.draw_axis2dAbstractPlotting.draw_axis3dAbstractPlotting.draw_frameAbstractPlotting.draw_gridAbstractPlotting.draw_ticksAbstractPlotting.draw_titlesAbstractPlotting.dropped_filesAbstractPlotting.el32convertAbstractPlotting.elconvertAbstractPlotting.enable_ithAbstractPlotting.entered_windowAbstractPlotting.estimated_spaceAbstractPlotting.evalAbstractPlotting.eventsAbstractPlotting.extract_exprAbstractPlotting.extrema_nanAbstractPlotting.fill_between!AbstractPlotting.fill_viewAbstractPlotting.find_closestAbstractPlotting.find_in_plotsAbstractPlotting.finish!AbstractPlotting.fit_factorAbstractPlotting.fit_factor_stretchAbstractPlotting.fit_ratioAbstractPlotting.flatten_combinedAbstractPlotting.float32typeAbstractPlotting.font_render_callback!AbstractPlotting.font_render_callbacksAbstractPlotting.force_update!AbstractPlotting.from_dictAbstractPlotting.frustumAbstractPlotting.func2stringAbstractPlotting.func2typeAbstractPlotting.get_attributeAbstractPlotting.get_iterAbstractPlotting.get_texture_atlasAbstractPlotting.getindex_valueAbstractPlotting.getoffsetsAbstractPlotting.getpositionAbstractPlotting.global_texture_atlasAbstractPlotting.glyph_advance!AbstractPlotting.glyph_bearing!AbstractPlotting.glyph_extent!AbstractPlotting.glyph_index!AbstractPlotting.glyph_scale!AbstractPlotting.glyph_uv_width!AbstractPlotting.gridAbstractPlotting.has_ffmpegAbstractPlotting.hasfieldAbstractPlotting.hasfocusAbstractPlotting.hboxAbstractPlotting.hbox!AbstractPlotting.heatmapAbstractPlotting.heatmap!AbstractPlotting.helpAbstractPlotting.help_argumentsAbstractPlotting.help_attributesAbstractPlotting.hovered_sceneAbstractPlotting.iconAbstractPlotting.imageAbstractPlotting.image!AbstractPlotting.includeAbstractPlotting.inline!AbstractPlotting.insert_glyph!AbstractPlotting.insertplots!AbstractPlotting.interpolated_getindexAbstractPlotting.io_lockAbstractPlotting.is2dAbstractPlotting.is_mouseinsideAbstractPlotting.is_unitrangeAbstractPlotting.isaxisAbstractPlotting.isnewlineAbstractPlotting.ispixelcamAbstractPlotting.ispressedAbstractPlotting.isrootAbstractPlotting.isvisibleAbstractPlotting.iter_or_arrayAbstractPlotting.keyboard_buttonsAbstractPlotting.labelpositionAbstractPlotting.layoutAbstractPlotting.layout_sizesAbstractPlotting.layout_textAbstractPlotting.legendAbstractPlotting.legend!AbstractPlotting.lerpAbstractPlotting.liftAbstractPlotting.limitsAbstractPlotting.linesAbstractPlotting.lines!AbstractPlotting.linesegmentsAbstractPlotting.linesegments!AbstractPlotting.log_infoAbstractPlotting.log_levelAbstractPlotting.logging_ioAbstractPlotting.logoAbstractPlotting.lookatAbstractPlotting.make_iterAbstractPlotting.make_labelAbstractPlotting.map_onceAbstractPlotting.merge_attributes!AbstractPlotting.merge_attributes_doublebang!AbstractPlotting.merged_get!AbstractPlotting.mergekeysAbstractPlotting.mergekeys!AbstractPlotting.meshAbstractPlotting.mesh!AbstractPlotting.meshscatterAbstractPlotting.meshscatter!AbstractPlotting.minimal_defaultAbstractPlotting.modelmatrixAbstractPlotting.mouse_buttonsAbstractPlotting.mouse_in_sceneAbstractPlotting.mouse_positionAbstractPlotting.mouse_selectionAbstractPlotting.mousedragAbstractPlotting.mouseoverAbstractPlotting.mousepositionAbstractPlotting.move!AbstractPlotting.move_from_touchAbstractPlotting.multipleplotAbstractPlotting.multipleplot!AbstractPlotting.must_updateAbstractPlotting.mutual_exclusive_attributesAbstractPlotting.nan_extremaAbstractPlotting.ngridAbstractPlotting.nodeAbstractPlotting.node_pairsAbstractPlotting.not_implemented_forAbstractPlotting.notify!AbstractPlotting.onAbstractPlotting.onpickAbstractPlotting.orthogonalAbstractPlotting.orthographicprojectionAbstractPlotting.otherdimAbstractPlotting.outerboxAbstractPlotting.padrectAbstractPlotting.parent_or_selfAbstractPlotting.parent_sceneAbstractPlotting.perspectiveprojectionAbstractPlotting.pickAbstractPlotting.pixel_boundingboxAbstractPlotting.pixelareaAbstractPlotting.playbuttonAbstractPlotting.plotAbstractPlotting.plot!AbstractPlotting.plotfuncAbstractPlotting.plotkeyAbstractPlotting.plotsAbstractPlotting.plots_from_cameraAbstractPlotting.plotsymAbstractPlotting.plottypeAbstractPlotting.polyAbstractPlotting.poly!AbstractPlotting.popupAbstractPlotting.positive_widthsAbstractPlotting.primary_resolutionAbstractPlotting.print_recAbstractPlotting.print_statsAbstractPlotting.projectAbstractPlotting.project_widthsAbstractPlotting.projection_switchAbstractPlotting.qrotationAbstractPlotting.quiverAbstractPlotting.quiver!AbstractPlotting.range_label_bbAbstractPlotting.raw_boundingboxAbstractPlotting.reasonable_resolutionAbstractPlotting.recordAbstractPlotting.record_eventsAbstractPlotting.recordframe!AbstractPlotting.register_backend!AbstractPlotting.register_callbacksAbstractPlotting.remove_font_render_callback!AbstractPlotting.renderAbstractPlotting.replace_automatic!AbstractPlotting.replay_eventsAbstractPlotting.resampleAbstractPlotting.resampled_colorsAbstractPlotting.reset!AbstractPlotting.rootAbstractPlotting.rootparentAbstractPlotting.rotateAbstractPlotting.rotate!AbstractPlotting.rotate_camAbstractPlotting.rotate_cam!AbstractPlotting.rotationAbstractPlotting.rotation_betweenAbstractPlotting.rotationmatrix4AbstractPlotting.rotationmatrix_xAbstractPlotting.rotationmatrix_yAbstractPlotting.rotationmatrix_zAbstractPlotting.safe_offAbstractPlotting.same_length_arrayAbstractPlotting.sample_colorAbstractPlotting.saveAbstractPlotting.save_printAbstractPlotting.scalarmaxAbstractPlotting.scalarminAbstractPlotting.scaleAbstractPlotting.scale!AbstractPlotting.scale_scene!AbstractPlotting.scaled_widthAbstractPlotting.scalematrixAbstractPlotting.scatterAbstractPlotting.scatter!AbstractPlotting.scatterfunAbstractPlotting.scatterlinesAbstractPlotting.scatterlines!AbstractPlotting.scrollAbstractPlotting.sdistancefieldAbstractPlotting.select_rectangleAbstractPlotting.selection_rect!AbstractPlotting.seperate_tupleAbstractPlotting.seriesAbstractPlotting.series!AbstractPlotting.set_theme!AbstractPlotting.setup_camera!AbstractPlotting.signal_convertAbstractPlotting.sliderAbstractPlotting.slider!AbstractPlotting.sphere_streamlineAbstractPlotting.start!AbstractPlotting.step!AbstractPlotting.streamlinesAbstractPlotting.streamlines!AbstractPlotting.surfaceAbstractPlotting.surface!AbstractPlotting.textAbstractPlotting.text!AbstractPlotting.text_bbAbstractPlotting.text_limitsAbstractPlotting.textsliderAbstractPlotting.themeAbstractPlotting.ticks_and_labelsAbstractPlotting.to2tupleAbstractPlotting.to3tupleAbstractPlotting.to_2d_scaleAbstractPlotting.to_3d_scaleAbstractPlotting.to_alignAbstractPlotting.to_cacheAbstractPlotting.to_colorAbstractPlotting.to_colormapAbstractPlotting.to_fontAbstractPlotting.to_funcAbstractPlotting.to_func_nameAbstractPlotting.to_imageAbstractPlotting.to_levelsAbstractPlotting.to_linspaceAbstractPlotting.to_ndimAbstractPlotting.to_nodeAbstractPlotting.to_plotspecAbstractPlotting.to_rotationAbstractPlotting.to_screenAbstractPlotting.to_sizesAbstractPlotting.to_spritemarkerAbstractPlotting.to_stringAbstractPlotting.to_textsizeAbstractPlotting.to_trianglesAbstractPlotting.to_tupleAbstractPlotting.to_typeAbstractPlotting.to_valueAbstractPlotting.to_vectorAbstractPlotting.to_verticesAbstractPlotting.to_worldAbstractPlotting.transformAbstractPlotting.transform!AbstractPlotting.transformationAbstractPlotting.transformationmatrixAbstractPlotting.translate!AbstractPlotting.translate_cam!AbstractPlotting.translatedAbstractPlotting.translationAbstractPlotting.translationmatrixAbstractPlotting.translationmatrix_xAbstractPlotting.translationmatrix_yAbstractPlotting.translationmatrix_zAbstractPlotting.un_transformAbstractPlotting.unicode_inputAbstractPlotting.update!AbstractPlotting.update_cam!AbstractPlotting.update_limits!AbstractPlotting.use_displayAbstractPlotting.used_attributesAbstractPlotting.value_convertAbstractPlotting.vboxAbstractPlotting.volumeAbstractPlotting.volume!AbstractPlotting.volumeslicesAbstractPlotting.volumeslices!AbstractPlotting.w_componentAbstractPlotting.widthsAbstractPlotting.window_areaAbstractPlotting.window_openAbstractPlotting.wireframeAbstractPlotting.wireframe!AbstractPlotting.wong_colorsAbstractPlotting.wscaleAbstractPlotting.xvectorAbstractPlotting.xyz_boundingboxAbstractPlotting.yvectorAbstractPlotting.zero_originAbstractPlotting.zerorect"
},

]}
