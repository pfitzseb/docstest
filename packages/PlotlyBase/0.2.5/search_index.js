var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.jl API Documentation",
    "category": "page",
    "text": "CurrentModule = PlotlyBase"
},

{
    "location": "#PlotlyBase.jl-API-Documentation-1",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.jl API Documentation",
    "category": "section",
    "text": "Welcome to the PlotlyBase.jl API documentation. On this page we include all docstrings found in PlotlyBase.jl."
},

{
    "location": "#Navigation-1",
    "page": "PlotlyBase.jl API Documentation",
    "title": "Navigation",
    "category": "section",
    "text": "The following types are documented:Modules = [PlotlyBase]\nOrder   = [:type]The following functions are documentedModules = [PlotlyBase]\nOrder   = [:function]"
},

{
    "location": "#PlotlyBase.Plot",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.Plot",
    "category": "type",
    "text": "Plot(f, x0, x1)\nPlot(f, x0, x1, l; style, kwargs...)\n\n\nConstruct a plot of f from x0 to x1, using the layout l. All keyword arguments are applied to the constructed trace.\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.Plot",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.Plot",
    "category": "type",
    "text": "Plot(fs, x0, x1)\nPlot(fs, x0, x1, l; style, kwargs...)\n\n\nFor each function in f in fs, construct a scatter trace that plots f from x0 to x1, using the layout l. All keyword arguments are applied to all constructed traces.\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.Plot-Union{Tuple{AbstractArray{T,N} where N}, Tuple{T}, Tuple{AbstractArray{T,N} where N,Layout}} where T<:Union{Date, AbstractString, Number, Symbol}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.Plot",
    "category": "method",
    "text": "Plot(y)\nPlot(y, l; kwargs...)\n\n\nBuild a scatter plot and set  y to y. All keyword arguments are passed directly as keyword arguments to the constructed scatter.\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.Plot-Union{Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{T,1} where T}, Tuple{AbstractArray{T,1},AbstractArray{T,1} where T,Layout}} where T<:Union{Date, AbstractString, Number, Symbol}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.Plot",
    "category": "method",
    "text": "Plot(x, y)\nPlot(x, y, l; kind, style, kwargs...)\n\n\nBuild a plot of with one trace of type kindand set x to x and y to y. All keyword arguments are passed directly as keyword arguments to the constructed trace.\n\nNOTE: If y is a matrix, one trace is constructed for each column of y\n\nNOTE: If x and y are both matrices, they must have the same number of columns (say N). Then N traces are constructed, where the ith column of x is paired with the ith column of y.\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.addtraces!-Tuple{Plot,Int64,Vararg{AbstractTrace,N} where N}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.addtraces!",
    "category": "method",
    "text": "addtraces!(p::Plot, i::Int, traces::AbstractTrace...)\n\nAdd trace(s) at a specified location in the Plot\'s array of data.\n\nThe new traces will start at index p.data[i]\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.addtraces!-Tuple{Plot,Vararg{AbstractTrace,N} where N}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.addtraces!",
    "category": "method",
    "text": "addtraces!(p::Plot, traces::AbstractTrace...)\n\nAdd trace(s) to the end of the Plot\'s array of data\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.circle",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.circle",
    "category": "function",
    "text": "Draw a circle from ((x0+x1)/2, (y0+y1)/2)) with radius  (|(x0+x1)/2 - x0|, |(y0+y1)/2 -y0)|) \n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.deletetraces!-Tuple{Plot,Vararg{Int64,N} where N}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.deletetraces!",
    "category": "method",
    "text": "deletetraces!(p::Plot, inds::Int...) =\n\nRemove the traces at the specified indices\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.extendtraces!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.extendtraces!",
    "category": "function",
    "text": "extendtraces!(::Plot, ::Dict{Union{Symbol,AbstractString},AbstractVector{Vector{Any}}}), indices, maxpoints)\n\nExtend one or more traces with more data. A few notes about the structure of the update dict are important to remember:\n\nThe keys of the dict should be of type Symbol or AbstractString specifying the trace attribute to be updated. These attributes must already exist in the trace\nThe values of the dict must be a Vector of Vector of data. The outer index tells Plotly which trace to update, whereas the Vector at that index contains the value to be appended to the trace attribute.\n\nThese concepts are best understood by example:\n\n# adds the values [1, 3] to the end of the first trace\'s y attribute and doesn\'t\n# remove any points\nextendtraces!(p, Dict(:y=>Vector[[1, 3]]), [1], -1)\nextendtraces!(p, Dict(:y=>Vector[[1, 3]]))  # equivalent to above\n\n# adds the values [1, 3] to the end of the third trace\'s marker.size attribute\n# and [5,5,6] to the end of the 5th traces marker.size -- leaving at most 10\n# points per marker.size attribute\nextendtraces!(p, Dict(\"marker.size\"=>Vector[[1, 3], [5, 5, 6]]), [3, 5], 10)\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.hline",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.hline",
    "category": "function",
    "text": "hline(y, fields::AbstractDict=Dict{Symbol,Any}(); kwargs...)\n\nDraw horizontal lines at each point in y that span the width of the plot\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.line",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.line",
    "category": "function",
    "text": "Draw a line through the points (x0, y0) and (x1, y2)\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.movetraces!-Tuple{Plot,AbstractArray{Int64,1},AbstractArray{Int64,1}}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.movetraces!",
    "category": "method",
    "text": "movetraces!(p::Plot, src::AbstractVector{Int}, dest::AbstractVector{Int})\n\nMove traces from indices src to indices dest.\n\nBoth src and dest must be Vector{Int}\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.movetraces!-Tuple{Plot,Vararg{Int64,N} where N}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.movetraces!",
    "category": "method",
    "text": "movetraces!(p::Plot, to_end::Int...)\n\nMove one or more traces to the end of the data array\"\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.path-Tuple{AbstractString}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.path",
    "category": "method",
    "text": "Draw an arbitrary svg path\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.prependtraces!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.prependtraces!",
    "category": "function",
    "text": "prependtraces!(p::Plot, update::AbstractDict, indices::AbstractVector{Int}=[1],\n                maxpoints=-1)\n\nThe API for prependtraces is equivalent to that for extendtraces except that the data is added to the front of the traces attributes instead of the end. See Those docstrings for more information\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.rect",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.rect",
    "category": "function",
    "text": "Draw a rectangle linking (x0,y0), (x1,y0), (x1,y1), (x0,y1), (x0,y0)\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.relayout!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.relayout!",
    "category": "function",
    "text": "relayout!(l::Layout, update::AbstractDict=Dict(); kwargs...)\n\nUpdate l using update dict and/or kwargs\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.relayout!-Tuple{Plot,Vararg{Any,N} where N}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.relayout!",
    "category": "method",
    "text": "relayout!(p::Plot, update::AbstractDict=Dict(); kwargs...)\n\nUpdate p.layout on using update dict and/or kwargs\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.restyle!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.restyle!",
    "category": "function",
    "text": "The restyle! method follows the semantics of the Plotly.restyle function in plotly.js. Specifically the following rules are applied when trying to set an attribute k to a value v on trace ind, which happens to be the ith trace listed in the vector of inds (if ind is a scalar then i is always equal to 1)\n\nif v is an array or a tuple (both translated to javascript arrays when\n\njson(v) is called) then p.data[ind][k] will be set to v[i]. See examples below\n\nif v is any other type (any scalar type), then k is set directly to v.\n\nExamples\n\n# set marker color on first two traces to be red\nrestyle!(p, [1, 2], marker_color=\"red\")\n\n# set marker color on trace 1 to be green and trace 2 to be red\nrestyle!(p, [2, 1], marker_color=[\"red\", \"green\"])\n\n# set marker color on trace 1 to be red. green is not used\nrestyle!(p, 1, marker_color=[\"red\", \"green\"])\n\n# set the first marker on trace 1 to red, the second marker on trace 1 to green\nrestyle!(p, 1, marker_color=([\"red\", \"green\"],))\n\n# suppose p has 3 traces.\n# sets marker color on trace 1 to [\"red\", \"green\"]\n# sets marker color on trace 2 to \"blue\"\n# sets marker color on trace 3 to [\"red\", \"green\"]\nrestyle!(p, 1:3, marker_color=([\"red\", \"green\"], \"blue\"))\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.restyle!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.restyle!",
    "category": "function",
    "text": "restyle!(p::Plot, update::AbstractDict=Dict(); kwargs...)\n\nUpdate all traces using update dict and/or kwargs\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.restyle!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.restyle!",
    "category": "function",
    "text": "restyle!(gt::GenericTrace, i::Int=1, update::AbstractDict=Dict(); kwargs...)\n\nUpdate trace gt using dict/kwargs, assuming it was the ith ind in a call to restyle!(::Plot, ...)\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.restyle!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.restyle!",
    "category": "function",
    "text": "restyle!(p::Plot, ind::Int=1, update::AbstractDict=Dict(); kwargs...)\n\nUpdate p.data[ind] using update dict and/or kwargs\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.restyle!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.restyle!",
    "category": "function",
    "text": "restyle!(::Plot, ::AbstractVector{Int}, ::AbstractDict=Dict(); kwargs...)\n\nUpdate specific traces at p.data[inds] using update dict and/or kwargs\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.stem-Tuple{}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.stem",
    "category": "method",
    "text": "stem(; y, stem_color, stem_thickness, kwargs...)\n\n\nCreates a \"stem\" or \"lollipop\" trace. It is implemented using plotly.js\'s scatter type, using the error bars to draw the stem.\n\nKeyword Arguments:\n\nAll properties accepted by scatter except error_y, which is used to draw   the stems\nstem_color - sets the color of the stems\nstem_thickness - sets the thickness of the stems\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.update!",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.update!",
    "category": "function",
    "text": "Apply both restyle! and relayout! to the plot. Layout arguments are specified by passing an instance of Layout to the layout keyword argument.\n\nThe update Dict (optional) and all keyword arguments will be passed to restyle\n\nExample\n\njulia> p = Plot([scatter(y=[1, 2, 3])], Layout(yaxis_title=\"this is y\"));\n\njulia> print(json(p, 2))\n{\n  \"layout\": {\n    \"margin\": {\n      \"l\": 50,\n      \"b\": 50,\n      \"r\": 50,\n      \"t\": 60\n    },\n    \"yaxis\": {\n      \"title\": \"this is y\"\n    }\n  },\n  \"data\": [\n    {\n      \"y\": [\n        1,\n        2,\n        3\n      ],\n      \"type\": \"scatter\"\n    }\n  ]\n}\n\njulia> update!(p, Dict(:marker => Dict(:color => \"red\")), layout=Layout(title=\"this is a title\"), marker_symbol=\"star\");\n\njulia> print(json(p, 2))\n{\n  \"layout\": {\n    \"margin\": {\n      \"l\": 50,\n      \"b\": 50,\n      \"r\": 50,\n      \"t\": 60\n    },\n    \"yaxis\": {\n      \"title\": \"this is y\"\n    },\n    \"title\": \"this is a title\"\n  },\n  \"data\": [\n    {\n      \"y\": [\n        1,\n        2,\n        3\n      ],\n      \"type\": \"scatter\",\n      \"marker\": {\n        \"color\": \"red\",\n        \"symbol\": \"star\"\n      }\n    }\n  ]\n}\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.vline",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.vline",
    "category": "function",
    "text": "vline(x, fields::AbstractDict=Dict{Symbol,Any}(); kwargs...)\n\nDraw vertical lines at each point in x that span the height of the plot\n\n\n\n\n\n"
},

{
    "location": "#Base.size-Tuple{Plot}",
    "page": "PlotlyBase.jl API Documentation",
    "title": "Base.size",
    "category": "method",
    "text": "size(::PlotlyBase.Plot)\n\nReturn the size of the plot in pixels. Obtained from the layout.width and layout.height fields.\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.sizes",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.sizes",
    "category": "function",
    "text": "Given the number of rows and columns, return an NTuple{4,Float64} containing (width, height, vspace, hspace), where width and height are the width and height of each subplot and vspace and hspace are the vertical and horizonal spacing between subplots, respectively.\n\n\n\n\n\n"
},

{
    "location": "#PlotlyBase.trace_map",
    "page": "PlotlyBase.jl API Documentation",
    "title": "PlotlyBase.trace_map",
    "category": "function",
    "text": "trace_map(p::Plot, axis::Symbol=:x)\n\nReturn an array of length(p.data) that maps each element of p.data into an integer for which number axis of kind axis that trace belogs to. axis can either be x or y. If x is given, return the integer for which x-axis the trace belongs to. Similar for y.\n\n\n\n\n\n"
},

{
    "location": "#Types-1",
    "page": "PlotlyBase.jl API Documentation",
    "title": "Types",
    "category": "section",
    "text": "Modules = [PlotlyBase]\nOrder   = [:module, :constant, :type, :function, :macro]"
},

]}
