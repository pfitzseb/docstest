var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ECharts-1",
    "page": "Readme",
    "title": "ECharts",
    "category": "section",
    "text": "Linux: (Image: ) </br> Windows 64bit: (Image: ) </br> Codecov: (Image: codecov)Documentation: http://randyzwitch.com/ECharts.jl/9/6/2018: Currently, Julia supports 0.7 and 1.0 through Jupyter Notebook and the REPL. Supporting Juno and VSCode are planned in the future as WebIO.jl allows"
},

{
    "location": "autodocs/#ECharts.area",
    "page": "Docstrings",
    "title": "ECharts.area",
    "category": "function",
    "text": "area(x, y)\n\nCreates an EChart where region below plotted line filled with color.\n\nMethods\n\narea(x::AbstractVector, y::AbstractVector{<:Union{Missing, Real}})\narea(x::AbstractVector, y::AbstractArray{<:Union{Missing, Real},2})\narea(df::AbstractDataFrame, x::Symbol, y::Symbol)\narea(df::AbstractDataFrame, x::Symbol, y::Symbol, group::Symbol)\narea(k::KernelDensity.UnivariateKDE)\n\nArguments\n\nmark::Union{String, AbstractVector} = \"line\" : how to display plotted points\nfill::Union{Bool, AbstractVector} = true : fill area below marks with color?\nstack::Union{Bool, AbstractVector, Void} = nothing : stack (add together) when multple series present?\nstep::Union{String, Void} = nothing : one of {\"start\", \"end\", \"middle\", nothing}\nlegend::Bool : display legend?\nscale::Bool = false : show full Y-axis or truncated\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nReasonable defaults set for different methods of area, such as displaying a legend when two or more series present.\n\nExamples\n\nx = [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]\ny = [11, 11, 15, 13, 12, 13, 10]\nar = area(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.bar",
    "page": "Docstrings",
    "title": "ECharts.bar",
    "category": "function",
    "text": "bar(x, y)\n\nCreates an EChart where values plotted vertically as rectangular columns.\n\nMethods\n\nbar(x::AbstractVector, y::AbstractVector{<:Union{Missing, Real}})\nbar(x::AbstractVector, y::AbstractArray{<:Union{Missing, Real},2})\nbar(df::AbstractDataFrame, x::Symbol, y::Symbol)\nbar(df::AbstractDataFrame, x::Symbol, y::Symbol, group::Symbol)\n\nArguments\n\nmark::Union{String, AbstractVector} = \"bar\" : how to display plotted points\nstack::Union{Bool, AbstractVector, Void} = nothing : stack (add together) when multple series present?\nlegend::Bool : display legend?\nscale::Bool = false : show full Y-axis or truncated\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nReasonable defaults set for different methods of bar, such as displaying a legend when two or more series present.\n\nExamples\n\nx = [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]\ny = [11, 11, 15, 13, 12, 13, 10]\nb = bar(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.box",
    "page": "Docstrings",
    "title": "ECharts.box",
    "category": "function",
    "text": "box(data)\n\nCreates an EChart as a boxplot, optionally with outliers.\n\nMethods\n\nbox(data::AbstractVector{<:Union{Missing, Real}})\nbox(data::AbstractVector{<:AbstractVector{<:Union{Missing, Real}}})\nbox(df::AbstractDataFrame, data::Symbol)\nbox(df::AbstractDataFrame, data::Symbol, group::Symbol)\n\nArguments\n\nnames::Union{AbstractVector, Void} = nothing : provide names for series\noutliers::Bool : show outliers?\nlegend::Bool : display legend?\nhorizontal::Bool = false : show horizontal? (default: vertical)\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nReasonable defaults set for different methods of box, such as displaying a legend when two or more series present.\n\nExamples\n\ndata = [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960]\nb = box(data)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.bubble",
    "page": "Docstrings",
    "title": "ECharts.bubble",
    "category": "function",
    "text": "bubble(x, y)\n\nCreates an EChart scatterplot, with additional dimension represented by circle size.\n\nMethods\n\nbubble(x::AbstractVector{<:Union{Missing, Real}}, y::AbstractVector{<:Union{Missing, Real}},\n    size::AbstractVector{<:Union{Missing, Real}})\nbubble(df::AbstractDataFrame, x::Symbol, y::Symbol, size::Symbol)\nbubble(df::AbstractDataFrame, x::Symbol, y::Symbol, size::Symbol, group::Symbol)\n\nArguments\n\nlegend::Bool : display legend?\nscale::Bool = false : show full Y-axis or truncated\nlarge::Bool = true : minimize overplotting\nlargeThreshold::Int = 2000 : number of points before overplotting optimization occurs\nbubblesize::Real = 50 : maximum size of bubbles (see notes)\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nThe displayed size of the bubble is normalized within the function, as the square root of the size values. Using the square root of the value maintains the proper visual perception of the difference. The overall circle size can be modified by the bubblesize keyword argument, which is roughly the area in pixels of the largest circle.\n\nExamples\n\nRandom.seed!(13579)\nxval = rand() .* (0:1000:30000)\nyval = 60 .+ (rand(31) * 20)\nsizeval = shuffle!(6000 .* (rand(31) * 50))\nsp = bubble(xval, yval, sizeval, scale = true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.candlestick",
    "page": "Docstrings",
    "title": "ECharts.candlestick",
    "category": "function",
    "text": "candlestick(dt, open, close, low, high)\n\nCreates an EChart for visualizing financial prices of a security.\n\nMethods\n\ncandlestick(dt::AbstractVector{String},\n            open::AbstractVector{<:Union{Missing, Real}},\n            close::AbstractVector{<:Union{Missing, Real}},\n            low::AbstractVector{<:Union{Missing, Real}},\n            high::AbstractVector{<:Union{Missing, Real}})\n\ncandlestick(dt::AbstractVector{<:Dates.TimeType},\n            open::AbstractVector{<:Union{Missing, Real}},\n            close::AbstractVector{<:Union{Missing, Real}},\n            low::AbstractVector{<:Union{Missing, Real}},\n            high::AbstractVector{<:Union{Missing, Real}})\n\nArguments\n\nlegend::Bool : display legend?\nscale::Bool = false : show full Y-axis or truncated\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nCandlestick plots are financial plots showing the relationship between the open, close, low and high prices for a security on a given day. For a more thorough description of the uses and subtleties of candlestick plots, see: http://www.datavizcatalogue.com/methods/candlestick_chart.html\n\nExamples\n\ndt = [\"2016/08/26\", \"2016/08/29\", \"2016/08/30\", \"2016/08/31\", \"2016/09/01\", \"2016/09/02\",\n\"2016/09/06\", \"2016/09/07\", \"2016/09/08\", \"2016/09/09\", \"2016/09/12\", \"2016/09/13\",\n\"2016/09/14\", \"2016/09/15\", \"2016/09/16\", \"2016/09/19\", \"2016/09/20\", \"2016/09/21\",\n\"2016/09/22\", \"2016/09/23\", \"2016/09/26\"]\n\nclose_ = [12.38, 12.47, 12.55, 12.60, 12.44, 12.50, 12.67, 12.70, 12.73, 12.38, 12.70, 12.38, 12.14, 12.11, 12.11, 12.11, 12.00, 12.09, 12.18, 12.17, 12.01]\n\nopen_ = [12.47, 12.38, 12.46, 12.48, 12.66, 12.53, 12.49, 12.62, 12.50, 12.61, 12.32, 12.53, 12.18, 12.14, 12.05, 12.12, 12.09, 12.08, 12.17, 12.12, 12.12]\n\nhigh_ = [12.55, 12.50, 12.56, 12.61, 12.72, 12.57, 12.67, 12.75, 12.75, 12.6850, 12.77, 12.68, 12.31, 12.18, 12.13, 12.33, 12.19, 12.11, 12.29, 12.22, 12.12]\n\nlow_ = [12.34, 12.38, 12.43, 12.48, 12.35, 12.46, 12.43, 12.62, 12.50, 12.38, 12.28, 12.33,12.11, 12.06, 12.01, 12.0586, 11.96, 12.01, 12.16, 12.12, 12.00]\n\nc = candlestick(dt, open_, close_, low_, high_)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.corrplot",
    "page": "Docstrings",
    "title": "ECharts.corrplot",
    "category": "function",
    "text": "corrplot(data)\n\nCreates an EChart showing pairwise correlations between columns of data.\n\nMethods\n\ncorrplot(m::Matrix)\ncorrplot(df::AbstractDataFrame)\n\nArguments\n\nbubblesize::Int = 45 : size of bubbles\nlayout::String = \"lower\" : one of {\"lower\", \"upper\", nothing}\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\ncorrplot does not currently support missing values. Users should call completecases!() when using a DataFrame, or manually fill missing values as appropriate.\n\nExamples\n\nusing ECharts, DataFrames, RDatasets\ndf = dataset(\"datasets\", \"mtcars\")\ncplot = corrplot(df)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.donut",
    "page": "Docstrings",
    "title": "ECharts.donut",
    "category": "function",
    "text": "donut(names, values)\n\nCreates an EChart where each value is represented as circular portion of the whole, with a hole removed from the center.\n\nMethods\n\ndonut(names::AbstractVector, values::AbstractVector{<:Union{Missing, Real}})\n\nArguments\n\nselected::Union{AbstractVector, Void} = nothing : explode slice by position\nradius::Union{AbstractVector, String} = [\"50%\", \"80%\"] :\ncenter::Union{AbstractVector, String} = [\"50%\", \"50%\"] :\nroseType::Union{String, Void} = nothing : one of {\"angle\", \"radius\", nothing}\nlegend::Bool : display legend?\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nExamples\n\nx = [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]\ny = [11, 11, 15, 13, 12, 13, 10]\nd = donut(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.funnel",
    "page": "Docstrings",
    "title": "ECharts.funnel",
    "category": "function",
    "text": "funnel(names, values)\n\nCreates an EChart funnel.\n\nMethods\n\nfunnel(names::AbstractVector, values::AbstractVector{<:Union{Missing, Real}})\n\nArguments\n\nlegend::Bool : display legend?\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nGiven the concept of a funnel (largest at top, narrowing), if you pass in the values out of order, the echarts.js library automatically sorts the numbers highest to lowest.\n\nExamples\n\nv = [100,60,80,70,50]\nn = [\"A\", \"B\", \"C\", \"D\", \"E\"]\nfn = funnel(n, v)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.gauge",
    "page": "Docstrings",
    "title": "ECharts.gauge",
    "category": "function",
    "text": "gauge(x)\n\nCreates an EChart where a value is plotted as a needle indicating the value along some range.\n\nMethods\n\ngauge(x::Union{Missing, Real})\n\nArguments\n\nbreakpoints::AbstractVector = [0.2, 0.8, 1] : percentage along gauge to switch indicator colors\ncolors::AbstractVector = [\"#91c7ae\", \"#63869e\", \"#c23531\"] : colors for breakpoints\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nExamples\n\ngg = gauge(27.64)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.heatmap",
    "page": "Docstrings",
    "title": "ECharts.heatmap",
    "category": "function",
    "text": "heatmap(data)\n\nCreates an EChart heatmap.\n\nMethods\n\nheatmap(h::StatsBase.Histogram)\n\nArguments\n\nlegend::Bool = false : display legend?\nshow::Bool = true : show slider denoting color range\ncalculable::Bool = true : allow user to slide endpoints to change data displayed\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nReasonable defaults set for different methods of area, such as displaying a legend when two or more series present.\n\nExamples\n\nusing RDatasets\nh2 = fit(Histogram, (df[:Price], df[:Carat]), closed = :left)\nhs2 = heatmap(h2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.histogram",
    "page": "Docstrings",
    "title": "ECharts.histogram",
    "category": "function",
    "text": "histogram(data)\n\nCreates an EChart where region below plotted line filled with color.\n\nMethods\n\nhistogram(h::StatsBase.Histogram)\n\nArguments\n\nlegend::Bool = false : display legend?\nhorizontal::Bool = false : show bars horizontally?\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nReasonable defaults set for different methods of area, such as displaying a legend when two or more series present.\n\nExamples\n\nx = [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]\ny = [11, 11, 15, 13, 12, 13, 10]\nar = area(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.line",
    "page": "Docstrings",
    "title": "ECharts.line",
    "category": "function",
    "text": "line(x, y)\n\nCreates an EChart where region between points connected by a line.\n\nMethods\n\nline(x::AbstractVector, y::AbstractVector{<:Union{Missing, Real}})\nline(x::AbstractVector, y::AbstractArray{<:Union{Missing, Real},2})\nline(df::AbstractDataFrame, x::Symbol, y::Symbol)\nline(df::AbstractDataFrame, x::Symbol, y::Symbol, group::Symbol)\n\nArguments\n\nmark::Union{String, AbstractVector} = \"line\" : how to display plotted points\nstep::Union{String, Void} = nothing : one of {\"start\", \"end\", \"middle\", nothing}\nlegend::Bool = false : display legend?\nscale::Bool = false : show full Y-axis or truncated\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nReasonable defaults set for different methods of area, such as displaying a legend when two or more series present.\n\nExamples\n\nx = [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]\ny = [11, 11, 15, 13, 12, 13, 10]\nll = line(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.pie",
    "page": "Docstrings",
    "title": "ECharts.pie",
    "category": "function",
    "text": "pie(names, values)\n\nCreates an EChart where each value is represented as circular portion of the whole,\n\nMethods\n\npie(names::AbstractVector, values::AbstractVector{<:Union{Missing, Real}})\n\nArguments\n\nselected::Union{AbstractVector, Void} = nothing : explode slice by position\nradius::Union{AbstractVector, String} = \"80%\" :\ncenter::Union{AbstractVector, String} = [\"50%\", \"50%\"] :\nroseType::Union{String, Void} = nothing : one of {\"angle\", \"radius\", nothing}\nlegend::Bool : display legend?\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nExamples\n\nx = [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]\ny = [11, 11, 15, 13, 12, 13, 10]\npp = pie(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.polar",
    "page": "Docstrings",
    "title": "ECharts.polar",
    "category": "function",
    "text": "polar(angle, radius)\n\nCreates an EChart where region between points connected by a line, with polar coordinates.\n\nMethods\n\npolar(angle::AbstractVector{<:Union{Missing, Real}}, radius::AbstractVector{<:Union{Missing, Real}})\npolar(angle::AbstractVector{<:Union{Missing, Real}},radius::AbstractArray{<:Union{Missing, Real},2})\n\nArguments\n\nsplitNumber::Int = 12 : number of splits shown in axis\nshowSymbol::Bool = false : show the dots as well as the line?\nlegend::Bool : display legend?\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nReasonable defaults set for different methods of polar, such as displaying a legend when two or more series present.\n\nExamples\n\nt = 0:360\nangle = [a / 180 * pi for a in t]\nradius = [(sin(2t) * cos(2t)) for t in angle]\np = polar(angle, radius)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.radar",
    "page": "Docstrings",
    "title": "ECharts.radar",
    "category": "function",
    "text": "radar(names, values)\n\nCreates an EChart where region inside plotted line optionally filled with color.\n\nMethods\n\nradar(names::AbstractVector, values::AbstractVector{<:Union{Missing, Real}},\n    max::AbstractVector{<:Union{Missing, Real}})\nradar(names::AbstractVector, values::AbstractArray{<:Union{Missing, Real},2},\n	max::AbstractVector{<:Union{Missing, Int, AbstractFloat, Rational}})\n\nArguments\n\nfill::Union{Bool, AbstractVector} = false : fill area inside marks with color?\nlegend::Bool : display legend?\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nExamples\n\nx = [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]\ny = [11, 11, 15, 13, 12, 13, 10]\nar = area(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.radialbar",
    "page": "Docstrings",
    "title": "ECharts.radialbar",
    "category": "function",
    "text": "radialbar(x, y)\n\nCreates an EChart where values plotted as a percentage of cirlce as rectangular columns.\n\nMethods\n\nradialbar(x::AbstractVector, y::AbstractVector{<:Union{Missing, Real}})\nradialbar(x::AbstractVector, y::AbstractArray{<:Union{Missing, Real},2})\nradialbar(df::AbstractDataFrame, x::Symbol, y::Symbol)\nradialbar(df::AbstractDataFrame, x::Symbol, y::Symbol, group::Symbol)\n\nArguments\n\nmark::Union{String, AbstractVector} = \"bar\" : how to display plotted points\nstack::Union{Bool, AbstractVector, Void} = nothing : stack (add together) when multple series present?\nlegend::Bool : display legend?\nscale::Bool = false : show full Y-axis or truncated\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nExamples\n\nx = [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]\ny = [11, 11, 15, 13, 12, 13, 10]\nb = radialbar(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.sankey",
    "page": "Docstrings",
    "title": "ECharts.sankey",
    "category": "function",
    "text": "sankey(names, source, target, value)\n\nCreates an EChart diagram displaying the path and frequencies between nodes.\n\nMethods\n\nsankey(names::AbstractVector, source::AbstractVector{<:Union{Missing, Int}},\n    target::AbstractVector{<:Union{Missing, Int}}, value::AbstractVector{<:Union{Missing, Real}};\n\nArguments\n\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nExamples\n\nname = [\"Agricultural waste\", \"Bio-conversion\", \"Liquid\", \"Losses\", \"Solid\", \"Gas\", \"Biofuel imports\",\n    \"Biomass imports\", \"Coal imports\", \"Coal\"]\nsource = [0, 1, 1, 1, 1, 6, 7, 8, 10]\ntarget = [1, 2, 3, 4, 5, 2, 4, 9, 9]\nvalue = [124.729, 0.597, 26.862, 280.322, 81.144, 35, 35, 11.606, 63.965]\ns = sankey(name, source, target, value)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.scatter",
    "page": "Docstrings",
    "title": "ECharts.scatter",
    "category": "function",
    "text": "scatter(x, y)\n\nCreates an EChart where (x,y) tuples are plotted as dots.\n\nMethods\n\nscatter(x::AbstractVector, y::AbstractVector{<:Union{Missing, Real}})\nscatter(x::AbstractVector, y::AbstractArray{<:Union{Missing, Real},2})\nscatter(df::AbstractDataFrame, x::Symbol, y::Symbol)\nscatter(df::AbstractDataFrame, x::Symbol, y::Symbol, group::Symbol)\n\nArguments\n\nmark::Union{String, AbstractVector} = \"scatter\" : how to display plotted points\nlegend::Bool : display legend?\nscale::Bool = false : show full Y-axis or truncated\nlarge::Bool = true : minimize overplotting\nlargeThreshold::Int = 2000 : number of points before overplotting optimization occurs\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nExamples\n\nsc = scatter(rand(30), rand(30))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.streamgraph",
    "page": "Docstrings",
    "title": "ECharts.streamgraph",
    "category": "function",
    "text": "streamgraph(x, y, group)\n\nCreates an EChart where region below plotted line filled with color.\n\nMethods\n\nstreamgraph(x::AbstractVector{String},y::AbstractVector{<:Union{Missing, Real}},\n            group::AbstractVector)\nstreamgraph(x::AbstractVector{<:Union{Missing, Real}},\n            y::AbstractVector{<:Union{Missing, Real}},\n            group::AbstractVector)\nstreamgraph(df::AbstractDataFrame, x::Symbol, y::Symbol, group::Symbol)\nstreamgraph(x::AbstractVector{<:Dates.TimeType},y::AbstractVector{<:Union{Missing, Real}},             group::AbstractVector)\n\nArguments\n\nlegend::Bool = false : display legend?\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nExamples\n\ns_df = readtable(Pkg.dir(\"ECharts\", \"exampledata/streamdata.csv\"))\nsg = streamgraph(s_df[:date], s_df[:value], s_df[:key], legend = true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ECharts.waterfall",
    "page": "Docstrings",
    "title": "ECharts.waterfall",
    "category": "function",
    "text": "waterfall(x, y)\n\nCreates an EChart representing the increase/decrease between two consecutive points.\n\nMethods\n\nwaterfall(x::AbstractVector, y::AbstractVector{<:Real})\n\nArguments\n\nlegend::Bool : display legend?\nscale::Bool = false : show full Y-axis or truncated\nkwargs : varargs to set any field of resulting EChart struct\n\nNotes\n\nReasonable defaults set for different methods of area, such as displaying a legend when two or more series present.\n\nExamples\n\nx = 1:5\ny = [2900, -1200, -300, -200, -900]\nw = waterfall(x, y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ECharts.@pack_AngleAxisECharts.@pack_AngleAxis!ECharts.@pack_AreaSelectStyleECharts.@pack_AreaSelectStyle!ECharts.@pack_AreaStyleECharts.@pack_AreaStyle!ECharts.@pack_AriaECharts.@pack_Aria!ECharts.@pack_AxisECharts.@pack_Axis!ECharts.@pack_AxisLabelECharts.@pack_AxisLabel!ECharts.@pack_AxisLineECharts.@pack_AxisLine!ECharts.@pack_AxisPointerECharts.@pack_AxisPointer!ECharts.@pack_AxisPointerLabelECharts.@pack_AxisPointerLabel!ECharts.@pack_AxisTickECharts.@pack_AxisTick!ECharts.@pack_BoxPlotSeriesECharts.@pack_BoxPlotSeries!ECharts.@pack_BrushECharts.@pack_Brush!ECharts.@pack_CalendarECharts.@pack_Calendar!ECharts.@pack_CandleStickSeriesECharts.@pack_CandleStickSeries!ECharts.@pack_CrossStyleECharts.@pack_CrossStyle!ECharts.@pack_DataZoomECharts.@pack_DataZoom!ECharts.@pack_DatasetECharts.@pack_Dataset!ECharts.@pack_EChartECharts.@pack_EChart!ECharts.@pack_EffectScatterSeriesECharts.@pack_EffectScatterSeries!ECharts.@pack_FunnelSeriesECharts.@pack_FunnelSeries!ECharts.@pack_GaugeSeriesECharts.@pack_GaugeSeries!ECharts.@pack_GeoECharts.@pack_Geo!ECharts.@pack_GraphSeriesECharts.@pack_GraphSeries!ECharts.@pack_GraphicECharts.@pack_Graphic!ECharts.@pack_GridECharts.@pack_Grid!ECharts.@pack_HeatmapSeriesECharts.@pack_HeatmapSeries!ECharts.@pack_IconStyleECharts.@pack_IconStyle!ECharts.@pack_IconStyleOptsECharts.@pack_IconStyleOpts!ECharts.@pack_ItemStyleECharts.@pack_ItemStyle!ECharts.@pack_LabelECharts.@pack_Label!ECharts.@pack_LegendECharts.@pack_Legend!ECharts.@pack_LineStyleECharts.@pack_LineStyle!ECharts.@pack_LinesSeriesECharts.@pack_LinesSeries!ECharts.@pack_MapSeriesECharts.@pack_MapSeries!ECharts.@pack_MarkAreaECharts.@pack_MarkArea!ECharts.@pack_MarkLineECharts.@pack_MarkLine!ECharts.@pack_MarkPointECharts.@pack_MarkPoint!ECharts.@pack_ParallelECharts.@pack_Parallel!ECharts.@pack_ParallelAxisECharts.@pack_ParallelAxis!ECharts.@pack_ParallelSeriesECharts.@pack_ParallelSeries!ECharts.@pack_PictorialBarSeriesECharts.@pack_PictorialBarSeries!ECharts.@pack_PieSeriesECharts.@pack_PieSeries!ECharts.@pack_PolarECharts.@pack_Polar!ECharts.@pack_RadarECharts.@pack_Radar!ECharts.@pack_RadarSeriesECharts.@pack_RadarSeries!ECharts.@pack_RadiusAxisECharts.@pack_RadiusAxis!ECharts.@pack_SankeySeriesECharts.@pack_SankeySeries!ECharts.@pack_ScaleLimitECharts.@pack_ScaleLimit!ECharts.@pack_ShadowStyleECharts.@pack_ShadowStyle!ECharts.@pack_SingleAxisECharts.@pack_SingleAxis!ECharts.@pack_SplitAreaECharts.@pack_SplitArea!ECharts.@pack_SplitLineECharts.@pack_SplitLine!ECharts.@pack_SunburstSeriesECharts.@pack_SunburstSeries!ECharts.@pack_TextStyleECharts.@pack_TextStyle!ECharts.@pack_ThemeECharts.@pack_Theme!ECharts.@pack_ThemeRiverSeriesECharts.@pack_ThemeRiverSeries!ECharts.@pack_TimelineECharts.@pack_Timeline!ECharts.@pack_TitleECharts.@pack_Title!ECharts.@pack_ToolboxECharts.@pack_Toolbox!ECharts.@pack_TooltipECharts.@pack_Tooltip!ECharts.@pack_TreeSeriesECharts.@pack_TreeSeries!ECharts.@pack_TreemapSeriesECharts.@pack_TreemapSeries!ECharts.@pack_VisualMapECharts.@pack_VisualMap!ECharts.@pack_XYSeriesECharts.@pack_XYSeries!ECharts.@unpack_AngleAxisECharts.@unpack_AreaSelectStyleECharts.@unpack_AreaStyleECharts.@unpack_AriaECharts.@unpack_AxisECharts.@unpack_AxisLabelECharts.@unpack_AxisLineECharts.@unpack_AxisPointerECharts.@unpack_AxisPointerLabelECharts.@unpack_AxisTickECharts.@unpack_BoxPlotSeriesECharts.@unpack_BrushECharts.@unpack_CalendarECharts.@unpack_CandleStickSeriesECharts.@unpack_CrossStyleECharts.@unpack_DataZoomECharts.@unpack_DatasetECharts.@unpack_EChartECharts.@unpack_EffectScatterSeriesECharts.@unpack_FunnelSeriesECharts.@unpack_GaugeSeriesECharts.@unpack_GeoECharts.@unpack_GraphSeriesECharts.@unpack_GraphicECharts.@unpack_GridECharts.@unpack_HeatmapSeriesECharts.@unpack_IconStyleECharts.@unpack_IconStyleOptsECharts.@unpack_ItemStyleECharts.@unpack_LabelECharts.@unpack_LegendECharts.@unpack_LineStyleECharts.@unpack_LinesSeriesECharts.@unpack_MapSeriesECharts.@unpack_MarkAreaECharts.@unpack_MarkLineECharts.@unpack_MarkPointECharts.@unpack_ParallelECharts.@unpack_ParallelAxisECharts.@unpack_ParallelSeriesECharts.@unpack_PictorialBarSeriesECharts.@unpack_PieSeriesECharts.@unpack_PolarECharts.@unpack_RadarECharts.@unpack_RadarSeriesECharts.@unpack_RadiusAxisECharts.@unpack_SankeySeriesECharts.@unpack_ScaleLimitECharts.@unpack_ShadowStyleECharts.@unpack_SingleAxisECharts.@unpack_SplitAreaECharts.@unpack_SplitLineECharts.@unpack_SunburstSeriesECharts.@unpack_TextStyleECharts.@unpack_ThemeECharts.@unpack_ThemeRiverSeriesECharts.@unpack_TimelineECharts.@unpack_TitleECharts.@unpack_ToolboxECharts.@unpack_TooltipECharts.@unpack_TreeSeriesECharts.@unpack_TreemapSeriesECharts.@unpack_VisualMapECharts.@unpack_XYSeriesECharts.AbstractEChartSeriesECharts.AbstractEChartTypeECharts.AngleAxisECharts.AreaSelectStyleECharts.AreaStyleECharts.AriaECharts.AxisECharts.AxisLabelECharts.AxisLineECharts.AxisPointerECharts.AxisPointerLabelECharts.AxisTickECharts.BoxPlotSeriesECharts.BoxPlotStatsECharts.BrushECharts.CalendarECharts.CandleStickSeriesECharts.CrossStyleECharts.DataZoomECharts.DatasetECharts.EChartECharts.EChartsECharts.EffectScatterSeriesECharts.FunnelSeriesECharts.GaugeSeriesECharts.GeoECharts.GraphSeriesECharts.GraphicECharts.GridECharts.HeatmapSeriesECharts.IconStyleECharts.IconStyleOptsECharts.ItemStyleECharts.JSFunctionECharts.JSSerializationECharts.LabelECharts.LegendECharts.LineStyleECharts.LinesSeriesECharts.MapSeriesECharts.MarkAreaECharts.MarkLineECharts.MarkPointECharts.ParallelECharts.ParallelAxisECharts.ParallelSeriesECharts.PictorialBarSeriesECharts.PieSeriesECharts.PolarECharts.RadarECharts.RadarSeriesECharts.RadiusAxisECharts.SankeySeriesECharts.ScaleLimitECharts.SeriesECharts.ShadowStyleECharts.SingleAxisECharts.SplitAreaECharts.SplitLineECharts.SunburstSeriesECharts.TextStyleECharts.ThemeECharts.ThemeRiverSeriesECharts.TimelineECharts.TitleECharts.ToolboxECharts.TooltipECharts.TreeSeriesECharts.TreemapSeriesECharts.VisualMapECharts.XYSeriesECharts.areaECharts.aria!ECharts.arrayofarrayECharts.arrayofdictsECharts.barECharts.boxECharts.boxplotstatECharts.bubbleECharts.candlestickECharts.chalkECharts.circular_plotECharts.colorpalettesECharts.colorscheme!ECharts.corrplotECharts.createscopeECharts.darkECharts.donutECharts.essosECharts.evalECharts.fill!ECharts.flip!ECharts.funnelECharts.gaugeECharts.grayscaleECharts.halloweenECharts.heatmapECharts.histogramECharts.includeECharts.infographicECharts.jitter!ECharts.jsonECharts.kwargs!ECharts.labels!ECharts.legend!ECharts.lineECharts.lineargradientECharts.macaronsECharts.makevalidjsonECharts.newplotECharts.pieECharts.polarECharts.printECharts.purplepassionECharts.radarECharts.radial!ECharts.radialbarECharts.radialgradientECharts.romaECharts.sankeyECharts.scatterECharts.seriesnames!ECharts.shineECharts.slider!ECharts.smooth!ECharts.streamgraphECharts.text!ECharts.theme!ECharts.title!ECharts.toolbox!ECharts.tooltip!ECharts.vintageECharts.waldenECharts.waterfallECharts.westerosECharts.wonderlandECharts.xarea!ECharts.xaxis!ECharts.xgridlines!ECharts.xline!ECharts.xy_plotECharts.yarea!ECharts.yaxis!ECharts.ygridlines!ECharts.yline!"
},

]}
