var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnicodePlots-1",
    "page": "Readme",
    "title": "UnicodePlots",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: License)Advanced Unicode plotting library designed for use in Julia\'s REPL."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "(Image: Package Evaluator v3) (Image: Package Evaluator v4) (Image: Package Evaluator v5) (Image: Package Evaluator v6) (Image: Package Evaluator v7)To install UnicodePlots, start up Julia and type the following code-snipped into the REPL. It makes use of the native Julia package manger.Pkg.add(\"UnicodePlots\")\nusing UnicodePlotsFor the latest developer version:(Image: Build Status) (Image: Coverage Status)Pkg.checkout(\"UnicodePlots\")"
},

{
    "location": "#High-level-Interface-1",
    "page": "Readme",
    "title": "High-level Interface",
    "category": "section",
    "text": "There are a couple of ways to generate typical plots without much verbosity. Here is a list of the main high-level functions for common scenarios:Scatterplot\nLineplot\nBarplot (horizontal)\nStaircase Plot\nHistogram (horizontal)\nSparsity Pattern\nDensity PlotHere is a quick hello world example of a typical use-case:myPlot = lineplot([-1, 2, 3, 7], [1, 2, 9, 4], title = \"My Plot\", name = \"my line\")(Image: Basic Canvas)There are other types of Canvas available (see section \"Low-level Interface\"). In some situations, such as printing to a file, using AsciiCanvas, DotCanvas or BlockCanvas might lead to better results.lineplot([-1, 2, 3, 7], [1, 2, 9, 4], title = \"My Plot\", name = \"my line\", canvas = AsciiCanvas, border = :ascii)(Image: Basic Canvas)Every plot has a mutating variant that ends with a exclamation mark.lineplot!(myPlot, [0, 4, 8], [10, 1, 10], color = :yellow, name = \"other line\")(Image: Basic Canvas)"
},

{
    "location": "#Scatterplot-1",
    "page": "Readme",
    "title": "Scatterplot",
    "category": "section",
    "text": "scatterplot(randn(50), randn(50), title = \"My Scatterplot\", color = :red)(Image: Scatterplot Screenshot)"
},

{
    "location": "#Lineplot-1",
    "page": "Readme",
    "title": "Lineplot",
    "category": "section",
    "text": "lineplot([1, 2, 7], [9, -6, 8], title = \"My Lineplot\", color = :blue)(Image: Lineplot Screenshot1)It\'s also possible to specify a function and a range.myPlot = lineplot([cos, sin], -π/2, 2π)(Image: Lineplot Screenshot2)You can also plot lines by specifying an intercept and slopelineplot!(myPlot, -0.5, .2)(Image: Lineplot Screenshot3)"
},

{
    "location": "#Barplot-1",
    "page": "Readme",
    "title": "Barplot",
    "category": "section",
    "text": "Accepts either two vectors or a dictionarybarplot([\"Paris\", \"New York\", \"Moskau\", \"Madrid\"],\n        [2.244, 8.406, 11.92, 3.165],\n        title = \"Population\")(Image: Barplot Screenshot)Note: You can use the keyword argument symb to specify the character that should be used to plot the bars. For example symb = \"#\""
},

{
    "location": "#Staircase-plot-1",
    "page": "Readme",
    "title": "Staircase plot",
    "category": "section",
    "text": "# supported style are :pre and :post\nstairs([1, 2, 4, 7, 8], [1, 3, 4, 2, 7], color = :red, style = :post, title = \"My Staircase Plot\")(Image: Staircase Screenshot)"
},

{
    "location": "#Histogram-1",
    "page": "Readme",
    "title": "Histogram",
    "category": "section",
    "text": "histogram(randn(1000), bins = 15, title = \"Histogram\")(Image: Histogram Screenshot)"
},

{
    "location": "#Sparsity-Pattern-1",
    "page": "Readme",
    "title": "Sparsity Pattern",
    "category": "section",
    "text": "spy(sprandn(50, 120, .05))(Image: Spy Screenshot)"
},

{
    "location": "#Density-Plot-1",
    "page": "Readme",
    "title": "Density Plot",
    "category": "section",
    "text": "myPlot = densityplot(randn(1000), randn(1000), color = :blue)\ndensityplot!(myPlot, randn(1000) + 2, randn(1000) + 2, color = :red)(Image: Density Screenshot)"
},

{
    "location": "#Options-1",
    "page": "Readme",
    "title": "Options",
    "category": "section",
    "text": "All plots support a common set of named parameterstitle::String = \"\":\nText to display on the top of the plot.\nname::String = \"\":\nAnnotation of the current drawing to displayed on the right\nwidth::Int = 40:\nNumber of characters per row that should be used for plotting.\nJulia   lineplot(sin, 1:.5:20, width = 80)   (Image: Width Screenshot)\nheight::Int = 20:\nNumber of rows that should be used for plotting. Not applicable to barplot.\nJulia   lineplot(sin, 1:.5:20, height = 18)   (Image: Height Screenshot)\nxlim::Vector = [0, 1]:\nPlotting range for the x coordinate\nylim::Vector = [0, 1]:\nPlotting range for the y coordinate\nmargin::Int = 3:\nNumber of empty characters to the left of the whole plot.\nborder::Symbol = :solid:\nThe style of the bounding box of the plot. Supports :solid, :bold, :dashed, :dotted, :ascii, and :none.\nlineplot([-1.,2, 3, 7], [1.,2, 9, 4], border=:bold)\nlineplot([-1.,2, 3, 7], [1.,2, 9, 4], border=:dashed)\nlineplot([-1.,2, 3, 7], [1.,2, 9, 4], border=:dotted)\nlineplot([-1.,2, 3, 7], [1.,2, 9, 4], border=:none)\n(Image: Border Screenshot)\npadding::Int = 1:\nSpace of the left and right of the plot between the labels and the canvas.\nlabels::Bool = true:\nCan be used to hide the labels by setting labels=false.\nlineplot(sin, 1:.5:20, labels=false)\n(Image: Labels Screenshot)\ngrid::Bool = true:\nCan be used to hide the gridlines at the origin\ncolor::Symbol = :blue:\nColor of the drawing. Can be any of :blue, :red, :yellow\ncanvas::Type = BrailleCanvas:\nThe type of canvas that should be used for drawing (see section \"Low-level Interface\")\nsymb::AbstractString = \"▪\":\nBarplot only. Specifies the character that should be used to render the barsNote: If you want to print the plot into a file but have monospace issues with your font, you should probably try border = :ascii and canvas = AsciiCanvas (or canvas = DotCanvas for scatterplots)."
},

{
    "location": "#Methods-1",
    "page": "Readme",
    "title": "Methods",
    "category": "section",
    "text": "title!(plot::Plot, title::String)\ntitle the string to write in the top center of the plot window. If the title is empty the whole line of the title will not be drawn\nxlabel!(plot::Plot, xlabel::String)\nxlabel the string to display on the bottom of the plot window. If the title is empty the whole line of the label will not be drawn\nylabel!(plot::Plot, xlabel::String)\nylabel the string to display on the far left of the plot window.The method annotate! is responsible for the setting all the textual decorations of a plot. It has two functions:annotate!(plot::Plot, where::Symbol, value::String)\nwhere can be any of: :tl (top-left), :t (top-center), :tr (top-right), :bl (bottom-left), :b (bottom-center), :br (bottom-right), :l (left), :r (right)\nannotate!(plot::Plot, where::Symbol, row::Int, value::String)\nwhere can be any of: :l (left), :r (right)\nrow can be between 1 and the number of character rows of the canvas(Image: Annotate Screenshot)"
},

{
    "location": "#Low-level-Interface-1",
    "page": "Readme",
    "title": "Low-level Interface",
    "category": "section",
    "text": "The primary structures that do all the heavy lifting behind the curtain are subtypes of Canvas. A canvas is a graphics object for rasterized plotting. Basically it uses Unicode characters to represent pixel.Here is a simple example:canvas = BrailleCanvas(40, 10, # number of columns and rows (characters)\n                       origin_x = 0., origin_y = 0., # position in virtual space\n                       width = 1., height = 1.)    # size of the virtual space\nlines!(canvas, 0., 0., 1., 1., :blue)     # virtual space\npoints!(canvas, rand(50), rand(50), :red) # virtual space\nlines!(canvas, 0., 1., .5, 0., :yellow)   # virtual space\npixel!(canvas, 5, 8, :red)                # pixel space(Image: Basic Canvas)You can access the height and width of the canvas (in characters) with nrows(canvas) and ncols(canvas) respectively. You can use those functions in combination with printrow to embed the canvas anywhere you wish. For example, printrow(STDOUT, canvas, 3) writes the third character row of the canvas to the standard output.As you can see, one issue that arises when multiple pixel are represented by one character is that it is hard to assign color. That is because each of the \"pixel\" of a character could belong to a different color group (each character can only have a single color). This package deals with this using a color-blend for the whole group.(Image: Blending Colors)At the moment there are the following types of Canvas implemented:BrailleCanvas: This type of canvas is probably the one with the highest resolution for Unicode plotting. It essentially uses the Unicode characters of the Braille symbols as pixel. This effectively turns every character into 8 pixels that can individually be manipulated using binary operations.\nBlockCanvas: This canvas is also Unicode-based. It has half the resolution of the BrailleCanvas. In contrast to BrailleCanvas, the pixels don\'t have visible spacing between them. This canvas effectively turns every character into 4 pixels that can individually be manipulated using binary operations.\nAsciiCanvas and DotCanvas: These two canvas utilizes only standard ASCII character for drawing. Naturally, it doesn\'t look quite as nice as the Unicode-based ones. However, in some situations it might yield better results. Printing plots to a file is one of those situations.\nDensityCanvas: Unlike the BrailleCanvas, the density canvas does not simply mark a \"pixel\" as set. Instead it increments a counter per character that keeps track of the frequency of pixels drawn in that character. Together with a variable that keeps track of the maximum frequency, the canvas can thus draw the density of datapoints.\nBarplotGraphics: This graphics area is special in that it does not support any pixel manipulation. It is essentially the barplot without decorations but the numbers. It does only support one method addrow! which allows the user to add additional bars to the graphics object"
},

{
    "location": "#Todo-1",
    "page": "Readme",
    "title": "Todo",
    "category": "section",
    "text": "[ ] Animated plots using cursor movement\n[ ] Add heatmaps and hinton diagrams\n[ ] Boxplots in some form"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code is free to use under the terms of the MIT license."
},

{
    "location": "#Acknowledgement-1",
    "page": "Readme",
    "title": "Acknowledgement",
    "category": "section",
    "text": "Inspired by TextPlots.jl, which in turn was inspired by Drawille"
},

{
    "location": "autodocs/#UnicodePlots.AsciiCanvas",
    "page": "Docstrings",
    "title": "UnicodePlots.AsciiCanvas",
    "category": "type",
    "text": "As the name suggests the AsciiCanvas only uses ASCII characters to draw it\'s content. Naturally, it doesn\'t look quite as nice as the Unicode-based ones. However, in some situations it might yield better results. Printing plots to a file is one of those situations.\n\nThe AsciiCanvas is best utilized in combination with lineplot. For scatterplot we suggest to use the DotCanvas instead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.BlockCanvas",
    "page": "Docstrings",
    "title": "UnicodePlots.BlockCanvas",
    "category": "type",
    "text": "The BlockCanvas is also Unicode-based. It has half the resolution of the BrailleCanvas. In contrast to BrailleCanvas, the pixels don\'t have visible spacing between them. This canvas effectively turns every character into 4 pixels that can individually be manipulated using binary operations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.BrailleCanvas",
    "page": "Docstrings",
    "title": "UnicodePlots.BrailleCanvas",
    "category": "type",
    "text": "The type of canvas with the highest resolution for Unicode-based plotting. It uses the Unicode characters for the Braille symbols to represent individual pixel. This effectively turns every character into 8 pixels that can individually be manipulated using binary operations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.DensityCanvas",
    "page": "Docstrings",
    "title": "UnicodePlots.DensityCanvas",
    "category": "type",
    "text": "Unlike the BrailleCanvas, the density canvas does not simply mark a \"pixel\" as set. Instead it increments a counter per character that keeps track of the frequency of pixels drawn in that character. Together with a variable that keeps track of the maximum frequency, the canvas can thus draw the density of datapoints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.DotCanvas",
    "page": "Docstrings",
    "title": "UnicodePlots.DotCanvas",
    "category": "type",
    "text": "Similar to the AsciiCanvas, the DotCanvas only uses ASCII characters to draw it\'s content. Naturally, it doesn\'t look quite as nice as the Unicode-based ones. However, in some situations it might yield better results. Printing plots to a file is one of those situations.\n\nThe DotCanvas is best utilized in combination with scatterplot. For lineplot we suggest to use the AsciiCanvas instead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.Plot",
    "page": "Docstrings",
    "title": "UnicodePlots.Plot",
    "category": "type",
    "text": "Plot(graphics; nargs...) → Plot\n\nDescription\n\nDecoration for objects that are GraphicsArea (or Canvas). It is used to surround the inner GraphicsArea object with additional information such as a title, border, and axis labels.\n\nUsage\n\nPlot(graphics; title = \"\", xlabel = \"\", ylabel = \"\", border = :solid, margin = 3, padding = 1, labels = true)\n\nPlot(x, y, canvastype; title = \"\", width = 40, height = 15, border = :solid, xlim = [0, 0], ylim = [0, 0], margin = 3, padding = 1, labels = true, grid = true)\n\nArguments\n\ngraphics : The GraphicsArea (e.g. a subtype of Canvas) that the plot should decorate\nx : The horizontal dimension for each point.\ny : The vertical dimension for each point.\ncanvastype : The type of canvas that should be used for drawing.\ntitle : Text to display on the top of the plot.\nxlabel : Text to display on the x axis of the plot\nylabel : Text to display on the y axis of the plot\nwidth : Number of characters per row that should be used for plotting.\nheight : Number of rows that should be used for plotting. Not applicable to barplot.\nborder : The style of the bounding box of the plot. Supports :solid, :bold, :dashed, :dotted, :ascii, and :none.\nxlim : Plotting range for the x coordinate. [0, 0] stands for automatic.\nylim : Plotting range for the y coordinate. [0, 0] stands for automatic.\nmargin : Number of empty characters to the left of the whole plot.\npadding : Space of the left and right of the plot between the labels and the canvas.\nlabels : Can be used to hide the labels by setting labels=false.\ngrid : Can be used to hide the gridlines at the origin\n\nMethods\n\ntitle!(plot::Plot, title::String)\nxlabel!(plot::Plot, xlabel::String)\nylabel!(plot::Plot, xlabel::String)\nannotate!(plot::Plot, where::Symbol, value::String)\nannotate!(plot::Plot, where::Symbol, row::Int, value::String)\n\nAuthor(s)\n\nChristof Stocker (Github: https://github.com/Evizero)\n\nsee also\n\nscatterplot, lineplot, BarplotGraphics, BrailleCanvas, BlockCanvas, AsciiCanvas\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.annotate!",
    "page": "Docstrings",
    "title": "UnicodePlots.annotate!",
    "category": "function",
    "text": "annotate!(plot, where, value[, color])\n\nannotate!(plot, where, row, value[, color])\n\nThis method is responsible for the setting all the textual decorations of a plot.\n\nNote that where can be any of: :tl (top-left), :t (top-center), :tr (top-right), :bl (bottom-left), :b (bottom-center), :br (bottom-right), :l (left), :r (right).\n\nIf where is either :l, or :r, then row can be between 1 and the number of character rows of the plots canvas.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.barplot",
    "page": "Docstrings",
    "title": "UnicodePlots.barplot",
    "category": "function",
    "text": "barplot(text, heights; nargs...) → Plot\n\nDescription\n\nDraws a horizontal barplot. It uses the first parameter (text) to denote the names for the bars, and the second parameter (heights) as their values. This means that the two vectors have to have the same length. Alternatively, one can specify a barplot using a dictionary. In that case, the keys will be used as the names and the values, which have to be numeric, will be used as the heights of the bars.\n\nUsage\n\nbarplot(text, heights; border = :solid, title = \"\", margin = 3, padding = 1, color = :blue, width = 40, labels = true, symb = \"▪\")\n\nbarplot(dictionary; nargs...)\n\nArguments\n\ntext : The labels/captions of the bars\nheights : The values/heights of the bars\ndictionary : A dictonary in which the keys will be used as text\n\nand the values will be utilized as heights.\n\nborder : The style of the bounding box of the plot.\n\nSupports :solid, :bold, :dashed, :dotted, :ascii, and :none.\n\ntitle : Text to display on the top of the plot.\nmargin : Number of empty characters to the left of the whole plot.\npadding : Space of the left and right of the plot between the labels and the canvas.\ncolor : Color of the drawing. Can be any of :blue, :red, :yellow\nwidth : Number of characters per row that should be used for plotting.\nlabels : Can be used to hide the labels by setting labels=false.\nsymb : Specifies the character that should be used to render the bars\n\nReturns\n\nA plot object of type Plot{BarplotGraphics}\n\nAuthor(s)\n\nChristof Stocker (Github: https://github.com/Evizero)\n\nExamples\n\njulia> barplot([\"Paris\", \"New York\", \"Moskau\", \"Madrid\"],\n               [2.244, 8.406, 11.92, 3.165],\n               title = \"Population\")\n\n                        Population\n         ┌────────────────────────────────────────┐\n   Paris │▪▪▪▪▪▪ 2.244                            │\nNew York │▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪ 8.406           │\n  Moskau │▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪ 11.92 │\n  Madrid │▪▪▪▪▪▪▪▪▪ 3.165                         │\n         └────────────────────────────────────────┘\n\nSee also\n\nPlot, histogram, BarplotGraphics\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.barplot!",
    "page": "Docstrings",
    "title": "UnicodePlots.barplot!",
    "category": "function",
    "text": "barplot!(plot, text, heights; nargs) → Plot\n\nMutating variant of barplot, in which the first parameter (plot) specifies the existing plot to draw on.\n\nSee barplot for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.densityplot",
    "page": "Docstrings",
    "title": "UnicodePlots.densityplot",
    "category": "function",
    "text": "densityplot(x, y; nargs...) → Plot\n\nDescription\n\nDraws a density plot for the given points. It uses the first parameter x (which should be a vector or range) to denote the horizontal position of each point, and the second parameter y (which should also be a vector or range) as their vertical position. This means that the two vectors have to have the same length.\n\nUsage\n\ndensityplot(x, y; title = \"\", name = \"\", width = 40, height = 15, border = :solid, xlim = [0, 0], ylim = [0, 0], margin = 3, padding = 1, color = :white, labels = true)\n\nArguments\n\nx : The horizontal dimension for each point.\ny : The vertical dimension for each point.\ntitle : Text to display on the top of the plot.\nname : Annotation of the current drawing to displayed on the right\nwidth : Number of characters per row that should be used for plotting.\nheight : Number of rows that should be used for plotting. Not applicable to barplot.\nborder : The style of the bounding box of the plot. Supports :solid, :bold, :dashed, :dotted, :ascii, and :none.\nxlim : Plotting range for the x coordinate. [0, 0] stands for automatic.\nylim : Plotting range for the y coordinate. [0, 0] stands for automatic.\nmargin : Number of empty characters to the left of the whole plot.\npadding : Space of the left and right of the plot between the labels and the canvas.\ncolor : Color of the drawing. Can be any of :blue, :red, :yellow\nlabels : Can be used to hide the labels by setting labels=false.\n\nReturns\n\nA plot object of type Plot{DensityCanvas}\n\nAuthor(s)\n\nChristof Stocker (Github: https://github.com/Evizero)\n\nExamples\n\njulia> densityplot(randn(1000), randn(1000), title = \"Density Plot\")\n\n                     Density Plot\n       ┌────────────────────────────────────────┐\n   2.9 │                    ░                   │\n       │                ░    ░  ░               │\n       │                ░░░  ░ ░ ░      ░       │\n       │             ░░░ ░░▒░▒░░░ ▒ ░           │\n       │          ░░ ░░ ░▒░░▒▒▒▒░░░░░░░         │\n       │         ░░ ░▒░░░░░▓▒▒░▒░▒░▓░▒░░░       │\n       │        ░ ░░░░▓▓▒▓▒▒█▒▓▒▒▓▒▒░▒ ░ ░      │\n       │           ░ ▒▒▒▒▓▓▒▓▓▓▓▒█▒▒░░░░░░ ░    │\n       │     ░   ░░░░░░░▒▒▓░░▓▒█▒▒▓▓▒▒ ░    ░   │\n       │           ░ ░░▒▒░░▒░░▒░░░░ ░░  ░ ░     │\n       │         ░   ░ ░ ░░░░░░ ░░ ░░ ░         │\n       │              ░  ░ ░ ░  ░ ░   ░░░       │\n       │                ░░  ░                   │\n       │                                        │\n  -3.3 │                                        │\n       └────────────────────────────────────────┘\n       -3.4                                   2.9\n\nSee also\n\nPlot, scatterplot, DensityCanvas\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.histogram",
    "page": "Docstrings",
    "title": "UnicodePlots.histogram",
    "category": "function",
    "text": "histogram(v; nargs...) → Plot\n\nDescription\n\nDraws a horizontal histogram of the given vector v. If the parameter bins is not specified, then it will be chosen based on sturges rule. Note that histogram is a simply wrapper for barplot, which means that it supports the same parameter arguments.\n\nUsage\n\nhistogram(v; bins = sturges(length(v)), symb = \"▇\", border = :solid, title = \"\", margin = 3, padding = 1, color = :blue, width = 40, labels = true)\n\nArguments\n\nv : Vector or range for which the histogram should be computed.\nbins : The approximate number of bins that should be used.\nborder : The style of the bounding box of the plot.\n\nSupports :solid, :bold, :dashed, :dotted, :ascii, and :none.\n\ntitle : Text to display on the top of the plot.\nmargin : Number of empty characters to the left of the whole plot.\npadding : Space of the left and right of the plot between the labels and the canvas.\ncolor : Color of the drawing. Can be any of :blue, :red, :yellow\nwidth : Number of characters per row that should be used for plotting.\nlabels : Can be used to hide the labels by setting labels=false.\nsymb : Specifies the character that should be used to render the bars\n\nReturns\n\nA plot object of type Plot{BarplotGraphics}\n\nAuthor(s)\n\nIain Dunning (Github: https://github.com/IainNZ)\nChristof Stocker (Github: https://github.com/Evizero)\nKenta Sato (Github: https://github.com/bicycle1885)\n\nExamples\n\njulia> histogram(randn(1000), bins = 15, title = \"Histogram\")\n\n                             Histogram\n              ┌────────────────────────────────────────┐\n  (-3.5,-3.0] │ 1                                      │\n  (-3.0,-2.5] │ 2                                      │\n  (-2.5,-2.0] │▇▇▇▇ 22                                 │\n  (-2.0,-1.5] │▇▇▇▇▇▇▇▇▇▇ 53                           │\n  (-1.5,-1.0] │▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 78                       │\n  (-1.0,-0.5] │▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 141          │\n   (-0.5,0.0] │▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 191 │\n    (0.0,0.5] │▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 193 │\n    (0.5,1.0] │▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 150         │\n    (1.0,1.5] │▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 101                  │\n    (1.5,2.0] │▇▇▇▇▇▇▇▇ 42                             │\n    (2.0,2.5] │▇▇▇ 17                                  │\n    (2.5,3.0] │▇ 4                                     │\n    (3.0,3.5] │▇ 5                                     │\n              └────────────────────────────────────────┘\n\nSee also\n\nhist, Plot, barplot, BarplotGraphics\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.lineplot",
    "page": "Docstrings",
    "title": "UnicodePlots.lineplot",
    "category": "function",
    "text": "lineplot(x, y; nargs...) → Plot\n\nDescription\n\nDraws a path through the given points on a new canvas. It uses the first parameter x (which should be a vector or range) to denote the horizontal position of each point, and the second parameter y (which should also be a vector or range) as their vertical position. This means that the two vectors have to have the same length.\n\nUsage\n\nlineplot(x, y; title = \"\", name = \"\", width = 40, height = 15, border = :solid, xlim = [0, 0], ylim = [0, 0], margin = 3, padding = 1, color = :auto, labels = true, canvas = BrailleCanvas, grid = true)\n\nlineplot(fun[, start, end]; title = \"\", name = \"\", width = 40, height = 15, border = :solid, xlim = [0, 0], ylim = [0, 0], margin = 3, padding = 1, color = :auto, labels = true, canvas = BrailleCanvas, grid = true)\n\nArguments\n\nx : The horizontal dimension for each point. Can be a Real number or of type TimeType\ny : The vertical dimension for each point.\nfun : A function f: R -> R that should be drawn from start to end\ntitle : Text to display on the top of the plot.\nname : Annotation of the current drawing to displayed on the right\nwidth : Number of characters per row that should be used for plotting.\nheight : Number of rows that should be used for plotting. Not applicable to barplot.\nborder : The style of the bounding box of the plot. Supports :solid, :bold, :dashed, :dotted, :ascii, and :none.\nxlim : Plotting range for the x coordinate. [0, 0] stands for automatic.\nylim : Plotting range for the y coordinate. [0, 0] stands for automatic.\nmargin : Number of empty characters to the left of the whole plot.\npadding : Space of the left and right of the plot between the labels and the canvas.\ncolor : Color of the drawing. Can be any of :blue, :red, :yellow\nlabels : Can be used to hide the labels by setting labels=false.\ncanvas : The type of canvas that should be used for drawing.\ngrid : Can be used to hide the gridlines at the origin\n\nReturns\n\nA plot object of type Plot{T<:Canvas}\n\nAuthor(s)\n\nChristof Stocker (Github: https://github.com/Evizero)\nMilktrader (Github: https://github.com/milktrader)\n\nExamples\n\njulia> lineplot([1, 2, 7], [9, -6, 8], title = \"My Lineplot\")\n\n                    My Lineplot\n     ┌────────────────────────────────────────┐\n   9 │⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     │⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠊│\n     │⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠁⠀⠀│\n     │⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠁⠀⠀⠀⠀│\n     │⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠊⠀⠀⠀⠀⠀⠀⠀│\n     │⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     │⠀⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     │⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     │⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠒⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     │⠉⠉⠉⠉⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⢉⠭⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁│\n     │⠀⠀⠀⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     │⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     │⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⢀⠔⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     │⠀⠀⠀⠀⠀⠸⡀⠀⠀⡠⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n  -6 │⠀⠀⠀⠀⠀⠀⢇⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n     └────────────────────────────────────────┘\n     1                                        7\n\nSee also\n\nPlot, scatter, stairs, BrailleCanvas, BlockCanvas, AsciiCanvas\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.scatterplot",
    "page": "Docstrings",
    "title": "UnicodePlots.scatterplot",
    "category": "function",
    "text": "scatterplot(x, y; nargs...) → Plot\n\nDescription\n\nDraws the given points on a new canvas. It uses the first parameter x (which should be a vector or range) to denote the horizontal position of each point, and the second parameter y (which should also be a vector or range) as their vertical position. This means that the two vectors have to have the same length.\n\nUsage\n\nscatterplot(x, y; title = \"\", name = \"\", width = 40, height = 15, border = :solid, xlim = [0, 0], ylim = [0, 0], margin = 3, padding = 1, color = :auto, labels = true, canvas = BrailleCanvas, grid = true)\n\nArguments\n\nx : The horizontal dimension for each point.\ny : The vertical dimension for each point.\ntitle : Text to display on the top of the plot.\nname : Annotation of the current drawing to displayed on the right\nwidth : Number of characters per row that should be used for plotting.\nheight : Number of rows that should be used for plotting. Not applicable to barplot.\nborder : The style of the bounding box of the plot. Supports :solid, :bold, :dashed, :dotted, :ascii, and :none.\nxlim : Plotting range for the x coordinate. [0, 0] stands for automatic.\nylim : Plotting range for the y coordinate. [0, 0] stands for automatic.\nmargin : Number of empty characters to the left of the whole plot.\npadding : Space of the left and right of the plot between the labels and the canvas.\ncolor : Color of the drawing. Can be any of :blue, :red, :yellow\nlabels : Can be used to hide the labels by setting labels=false.\ncanvas : The type of canvas that should be used for drawing.\ngrid : Can be used to hide the gridlines at the origin\n\nReturns\n\nA plot object of type Plot{T<:Canvas}\n\nAuthor(s)\n\nChristof Stocker (Github: https://github.com/Evizero)\n\nExamples\n\njulia> scatterplot(randn(50), randn(50), title = \"My Scatterplot\", color = :red)\n\n                    My Scatterplot\n       ┌────────────────────────────────────────┐\n   2.1 │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⡧⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⡀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⢀⠐⠂⠀⠀⠀⠀⠀⡇⠁⠐⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀│\n       │⠠⠀⠀⠀⠀⠀⠐⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠄⡇⢀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠒⠖⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠚⠒⠒⡗⠒⠒⠒⢒⠒⠒⠒⠒⠒⠒⠒⠖⠒⠒⠒⠒⠒⠢│\n       │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠠⠀⠁⡇⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀│\n       │⠀⠀⠀⠀⠀⠀⠀⠀⠠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⡇⠀⠀⠀⠀⢀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n  -2.2 │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n       └────────────────────────────────────────┘\n       -2.1                                   1.9\n\nSee also\n\nPlot, lineplot, stairs, BrailleCanvas, BlockCanvas, AsciiCanvas\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.spy",
    "page": "Docstrings",
    "title": "UnicodePlots.spy",
    "category": "function",
    "text": "spy(A; nargs...) → Plot\n\nDescription\n\nPlots the sparsity pattern for the given matrix A. This means that a scatterplot that resembles the matrix is drawn, in which only the pixel for non-zero elements of the matrix are set.\n\nIf the parameters width and height are not explicitly specified, then the function will attempt to preserve the aspect ratio of the matrix, while also attempting to fit the resulting plot withing the bounding box specified by maxwidth and maxheight\n\nUsage\n\nspy(A; maxwidth = 70, maxheight = 40, title = \"Sparsity Pattern\", width = 0, height = 0, border = :solid, margin = 3, padding = 1, color = :automatic, labels = true, canvas = BrailleCanvas)\n\nArguments\n\nA : The matrix of interest, which non-zero elements should be drawn\nmaxwidth : Maximal number of characters per row that should be used for plotting\nmaxheight : Maximal number of rows that should be used for plotting.\ntitle : Text to display on the top of the plot.\nwidth : Number of characters per row that should be used for plotting. 0 stands for automatic\nheight : Number of rows that should be used for plotting. 0 stands for automatic\nborder : The style of the bounding box of the plot. Supports :solid, :bold, :dashed, :dotted, :ascii, and :none.\nmargin : Number of empty characters to the left of the whole plot.\npadding : Space of the left and right of the plot between the labels and the canvas.\ncolor : Color of the drawing. Can be any of :blue, :red, :yellow\nlabels : Can be used to hide the labels by setting labels=false.\ncanvas : The type of canvas that should be used for drawing.\n\nReturns\n\nA plot object of type Plot{T<:Canvas}\n\nAuthor(s)\n\nDominique (Github: https://github.com/dpo)\nChristof Stocker (Github: https://github.com/Evizero)\nJake Bolewski (Github: https://github.com/jakebolewski)\n\nExamples\n\njulia> spy(sprandn(50, 120, .05))\n\n                          Sparsity Pattern\n    ┌────────────────────────────────────────────────────────────┐\n  1 │⢀⠀⠒⠀⢄⠂⠀⡀⠀⠀⠀⠰⠀⠐⠀⠀⠀⠀⠂⠀⠀⠀⠠⠰⠀⠀⠀⡀⠄⠀⠠⠀⠀⠀⠀⠀⡀⠀⠀⠀⡀⠐⠀⠐⠀⠀⡀⠀⠀⠀⠀⠀⠀⠂⡀⠀⡀⠠⠀⠀│ > 0\n    │⠀⠀⠀⠀⠀⢀⢀⠀⠀⠀⠀⠐⠄⠀⢀⠂⠀⠠⠀⠉⠀⠀⠀⠀⢐⠀⠀⠀⠀⠀⠠⠐⠄⠄⠀⠀⠀⠐⠐⠈⢁⠀⠀⠀⠀⠀⠀⠀⠠⠀⠐⡐⠀⠄⠀⠀⠈⠀⠀⠠│ < 0\n    │⡀⠀⠀⠀⡀⠊⠀⠀⠀⢀⢀⠀⠄⠀⠂⡠⠂⠐⠐⠀⠀⠄⠀⠀⠀⠄⠀⠀⠀⠀⡀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠠⠀⠂⠀⠠⠀⠀⠀⠆⠄⠈⠀⢀⠀⠀⠀⠐⠄⠀⠀│\n    │⠀⠀⠀⠀⠀⠀⠀⢠⠀⢀⠀⠀⠀⢀⠀⠄⠀⠀⠀⠂⠀⠀⠀⠇⠀⢀⠀⠀⠁⠁⠀⠄⠄⠀⠀⠁⠁⠀⡈⠀⠁⠄⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⡐⢀⠀⠀⠀⠐⠂⠁⢀⠠⠀⠀⠀⠀⠀⠁⠀⠀⠀⠠⠀⠀⠀⠀⢀⠀⢄⠀⠀⠀⠐⠀⠀⠈⠀⠀⠐⠀⠄⠂⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n    │⠠⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠠⠈⠀⠀⠀⠀⢀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n    │⠐⠀⠉⠐⠀⠀⠁⠀⠀⠀⠀⠀⠀⠌⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠌⠀⠀⠄⠀⠀⡀⠀⠀⠀⠀⠀⢀⠈⠄⠀⡀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀│\n    │⠂⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⡨⠀⠠⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠈⡠⠀⡀⠀⠀⠁⠀⠁⠠⠀⠀⠀⠀⠀⠀⠀⠄⡀⠀⠄⡠⠀⠀⠀⠀│\n    │⠐⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠁⠀⡀⠁⠀⢂⠂⠀⠀⠀⠈⠁⠀⠀⠁⠁⠄⠀⠀⠀⠀⠀⡀⠀⠀⠀⠂⠀⠀⠀⠀⠐⠀⠂⠀⠂⠁⠀⠆⠈⠀⠀⠄⠄⠀⠀⠀⠀│\n    │⠀⠀⠀⠠⠀⠁⠀⠀⠀⠀⠂⠀⠠⠀⠀⠌⠀⠀⠂⠄⠀⡀⠂⠀⠀⡀⠠⠁⠄⠀⠀⠀⠀⠀⠄⠈⠀⢂⠐⠀⢀⠀⠠⠀⠄⠁⡀⠀⠀⠐⠀⠀⡐⠀⠀⠀⠁⠀⠀⠔│\n    │⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠁⠃⡀⡁⠀⠀⠀⢀⠀⠀⠂⠀⠀⠠⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠬⠀⡀│\n    │⠐⠀⠀⠀⠀⠀⠀⠀⠢⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠈⠁⠁⠀⠀⠄⠀⠀⠐⠀⠄⠀⠠⠀⠁⡀⠁⠀⠀⠠⠡⠀⠀⠀⠀⠀⠀⠀⠐⠄⠀⠀⠀⠀⡀│\n 50 │⠀⠀⠀⠀⠁⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠂⠀⠀⠀⠀⠀⠀⠐⠀⠈⠂⠀⠀⠀⠀⠀⠀⠀⠀⠠⠈⠀⠀⠀⠀⠀⠀⠂⠀⠄⠀⠀⠀⠂⠁⠀⠀⠀⠂⠀│\n    └────────────────────────────────────────────────────────────┘\n    1                                                          120\n                              nz = 275\n\nSee also\n\nPlot, scatterplot, BrailleCanvas, BlockCanvas, DotCanvas\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.stairs",
    "page": "Docstrings",
    "title": "UnicodePlots.stairs",
    "category": "function",
    "text": "stairs(x, y; nargs...) → Plot\n\nDescription\n\nDraws a staircase plot on a new canvas. It uses the first parameter x (which should be a vector or range) to denote the horizontal position of each point, and the second parameter y (which should also be a vector or range) as their vertical position. This means that the two vectors have to have the same length.\n\nUsage\n\nstairs(x, y; style = :post, title = \"\", name = \"\", width = 40, height = 15, border = :solid, xlim = [0, 0], ylim = [0, 0], margin = 3, padding = 1, color = :blue, labels = true, canvas = BrailleCanvas, grid = true)\n\nArguments\n\nx : The horizontal dimension for each point.\ny : The vertical dimension for each point.\nstyle : Specifies where the transition of the stair takes plays. Can be either :pre or :post\ntitle : Text to display on the top of the plot.\nname : Annotation of the current drawing to displayed on the right\nwidth : Number of characters per row that should be used for plotting.\nheight : Number of rows that should be used for plotting. Not applicable to barplot.\nborder : The style of the bounding box of the plot. Supports :solid, :bold, :dashed, :dotted, :ascii, and :none.\nxlim : Plotting range for the x coordinate. [0, 0] stands for automatic.\nylim : Plotting range for the y coordinate. [0, 0] stands for automatic.\nmargin : Number of empty characters to the left of the whole plot.\npadding : Space of the left and right of the plot between the labels and the canvas.\ncolor : Color of the drawing. Can be any of :blue, :red, :yellow\nlabels : Can be used to hide the labels by setting labels=false.\ncanvas : The type of canvas that should be used for drawing.\ngrid : Can be used to hide the gridlines at the origin\n\nReturns\n\nA plot object of type Plot{T<:Canvas}\n\nAuthor(s)\n\nChristof Stocker (Github: https://github.com/Evizero)\nDominique (Github: https://github.com/dpo)\n\nExamples\n\njulia> stairs([1, 2, 4, 7, 8], [1, 3, 4, 2, 7], style = :post, title = \"My Staircase Plot\")\n\n                My Staircase Plot\n    ┌────────────────────────────────────────┐\n  7 │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⡄⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⢸⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⢸│\n    │⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠧⠤⠤⠤⠤⠼│\n    │⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n  1 │⣀⣀⣀⣀⣀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n    └────────────────────────────────────────┘\n    1                                        8\n\nSee also\n\nPlot, lineplot, scatterplot, BrailleCanvas, BlockCanvas, AsciiCanvas\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.title",
    "page": "Docstrings",
    "title": "UnicodePlots.title",
    "category": "function",
    "text": "title(plot) →  String\n\nReturns the current title of the given plot. Alternatively, the title can be changed with title!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.title!",
    "page": "Docstrings",
    "title": "UnicodePlots.title!",
    "category": "function",
    "text": "title!(plot, newtitle) →  Plot\n\nSets a new title for the given plot. Alternatively, the current title can be queried using title.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.xlabel",
    "page": "Docstrings",
    "title": "UnicodePlots.xlabel",
    "category": "function",
    "text": "xlabel(plot) →  String\n\nReturns the current label for the x-axis. Alternatively, the x-label can be changed with xlabel!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.xlabel!",
    "page": "Docstrings",
    "title": "UnicodePlots.xlabel!",
    "category": "function",
    "text": "xlabel!(plot, newlabel) →  Plot\n\nSets a new x-label for the given plot. Alternatively, the current label can be queried using xlabel\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.ylabel",
    "page": "Docstrings",
    "title": "UnicodePlots.ylabel",
    "category": "function",
    "text": "ylabel(plot) →  String\n\nReturns the current label for the y-axis. Alternatively, the y-label can be changed with ylabel!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnicodePlots.ylabel!",
    "page": "Docstrings",
    "title": "UnicodePlots.ylabel!",
    "category": "function",
    "text": "ylabel!(plot, newlabel) →  Plot\n\nSets a new y-label for the given plot. Alternatively, the current label can be queried using ylabel\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnicodePlots.AsciiCanvasUnicodePlots.BarplotGraphicsUnicodePlots.BlockCanvasUnicodePlots.BrailleCanvasUnicodePlots.CanvasUnicodePlots.CreateLookupCanvasUnicodePlots.DensityCanvasUnicodePlots.DotCanvasUnicodePlots.GraphicsAreaUnicodePlots.LookupCanvasUnicodePlots.PlotUnicodePlots.UnicodePlotsUnicodePlots._findnzUnicodePlots.addrow!UnicodePlots.annotate!UnicodePlots.ascii_decodeUnicodePlots.ascii_lookupUnicodePlots.ascii_signsUnicodePlots.barplotUnicodePlots.barplot!UnicodePlots.block_decodeUnicodePlots.block_signsUnicodePlots.border_asciiUnicodePlots.border_boldUnicodePlots.border_dashedUnicodePlots.border_dottedUnicodePlots.border_noneUnicodePlots.border_solidUnicodePlots.bordermapUnicodePlots.braille_signsUnicodePlots.ceil_neg_log10UnicodePlots.color_cycleUnicodePlots.color_decodeUnicodePlots.color_encodeUnicodePlots.colorsUnicodePlots.compute_stair_linesUnicodePlots.den_signsUnicodePlots.densityplotUnicodePlots.densityplot!UnicodePlots.dot_decodeUnicodePlots.dot_signsUnicodePlots.evalUnicodePlots.extend_limitsUnicodePlots.float_round_log10UnicodePlots.gridUnicodePlots.heightUnicodePlots.histogramUnicodePlots.includeUnicodePlots.lineplotUnicodePlots.lineplot!UnicodePlots.lines!UnicodePlots.lookup_decodeUnicodePlots.lookup_encodeUnicodePlots.ncolsUnicodePlots.next_color!UnicodePlots.nrowsUnicodePlots.originUnicodePlots.origin_xUnicodePlots.origin_yUnicodePlots.pixel!UnicodePlots.pixel_heightUnicodePlots.pixel_sizeUnicodePlots.pixel_widthUnicodePlots.plotting_rangeUnicodePlots.plotting_range_narrowUnicodePlots.points!UnicodePlots.print_border_bottomUnicodePlots.print_border_topUnicodePlots.print_colorUnicodePlots.print_titleUnicodePlots.printrowUnicodePlots.round_down_subtickUnicodePlots.round_down_tickUnicodePlots.round_neg_log10UnicodePlots.round_up_subtickUnicodePlots.round_up_tickUnicodePlots.roundableUnicodePlots.scatterplotUnicodePlots.scatterplot!UnicodePlots.spyUnicodePlots.stairsUnicodePlots.stairs!UnicodePlots.sturgesUnicodePlots.titleUnicodePlots.title!UnicodePlots.widthUnicodePlots.x_pixel_per_charUnicodePlots.xlabelUnicodePlots.xlabel!UnicodePlots.y_pixel_per_charUnicodePlots.ylabelUnicodePlots.ylabel!"
},

]}
