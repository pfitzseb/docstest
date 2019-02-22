var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StatPlots-1",
    "page": "Readme",
    "title": "StatPlots",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Primary-author:-Thomas-Breloff-(@tbreloff)-1",
    "page": "Readme",
    "title": "Primary author: Thomas Breloff (@tbreloff)",
    "category": "section",
    "text": "This package contains many statistical recipes for concepts and types introduced in the JuliaStats organization, intended to be used with Plots.jl:Types:\nDataFrames\nDistributions\nRecipes:\nhistogram/histogram2d\nboxplot\nviolin\nmarginalhist\ncorrplot/cornerplot\nandrewsplotInitialize:#]add StatPlots # install the package if it isn\'t installed\nusing StatPlots\ngr(size=(400,300))Table-like data structures, including DataFrames, IndexedTables, DataStreams, etc... (see here for an exhaustive list), are supported thanks to the macro @df which allows passing columns as symbols. Those columns can then be manipulated inside the plot call, like normal Arrays:using DataFrames, IndexedTables\ndf = DataFrame(a = 1:10, b = 10 .* rand(10), c = 10 .* rand(10))\n@df df plot(:a, [:b :c], colour = [:red :blue])\n@df df scatter(:a, :b, markersize = 4 .* log.(:c .+ 0.1))\nt = table(1:10, rand(10), names = [:a, :b]) # IndexedTable\n@df t scatter(2 .* :b)Inside a @df macro call, the cols utility function can be used to refer to a range of columns:@df df plot(:a, cols(2:3), colour = [:red :blue])or to refer to a column whose symbol is represented by a variable:s = :b\n@df df plot(:a, cols(s))cols() will refer to all columns of the data table.In case of ambiguity, symbols not referring to DataFrame columns must be escaped by ^():df[:red] = rand(10)\n@df df plot(:a, [:b :c], colour = ^([:red :blue]))The @df macro plays nicely with the new syntax of the Query.jl data manipulation package (v0.8 and above), in that a plot command can be added at the end of a query pipeline, without having to explicitly collect the outcome of the query first:using Query, StatPlots\ndf |>\n    @filter(_.a > 5) |>\n    @map({_.b, d = _.c-10}) |>\n    @df scatter(:b, :d)The @df syntax is also compatible with Plots grouping machinery:using RDatasets\nschool = RDatasets.dataset(\"mlmRev\",\"Hsb82\")\n@df school density(:MAch, group = :Sx)To group by more than one column, use a tuple of symbols:@df school density(:MAch, group = (:Sx, :Sector), legend = :topleft)(Image: grouped)To name the legend entries with custom or automatic names (i.e. Sex = Male, Sector = Public) use the curly bracket syntax group = {Sex = :Sx, :Sector}. Entries with = get the custom name you give, whereas entries without = take the name of the column.The old syntax, passing the DataFrame as the first argument to the plot call is no longer supported."
},

{
    "location": "#Visualizing-a-table-interactively-1",
    "page": "Readme",
    "title": "Visualizing a table interactively",
    "category": "section",
    "text": "A GUI based on the Interact package is available to create plots from a table interactively, using any of the recipes defined below. This small app can be deployed in a Jupyter lab / notebook, Juno plot pane, a Blink window or in the browser, see here for instructions.import RDatasets\niris = RDatasets.dataset(\"datasets\", \"iris\")\nusing StatPlots, Interact\nusing Blink\nw = Window()\nbody!(w, dataviewer(iris))(Image: dataviewer)"
},

{
    "location": "#marginalhist-with-DataFrames-1",
    "page": "Readme",
    "title": "marginalhist with DataFrames",
    "category": "section",
    "text": "using RDatasets\niris = dataset(\"datasets\",\"iris\")\n@df iris marginalhist(:PetalLength, :PetalWidth)(Image: marginalhist)"
},

{
    "location": "#corrplot-and-cornerplot-1",
    "page": "Readme",
    "title": "corrplot and cornerplot",
    "category": "section",
    "text": "This plot type shows the correlation among input variables. The marker color in scatter plots reveal the degree of correlation. Pass the desired colorgradient to markercolor. With the default gradient positive correlations are blue, neutral are yellow and negative are red. In the 2d-histograms the color gradient show the frequency of points in that bin (as usual controlled by seriescolor).gr(size = (600, 500))then@df iris corrplot([:SepalLength :SepalWidth :PetalLength :PetalWidth], grid = false)or also:@df iris corrplot(cols(1:4), grid = false)(Image: corrplot)A correlation plot may also be produced from a matrix:M = randn(1000,4)\nM[:,2] .+= 0.8sqrt.(abs.(M[:,1])) .- 0.5M[:,3] .+ 5\nM[:,3] .-= 0.7M[:,1].^2 .+ 2\ncorrplot(M, label = [\"x$i\" for i=1:4])(Image: )cornerplot(M)(Image: )cornerplot(M, compact=true)(Image: )"
},

{
    "location": "#boxplot-and-violin-1",
    "page": "Readme",
    "title": "boxplot and violin",
    "category": "section",
    "text": "import RDatasets\nsingers = RDatasets.dataset(\"lattice\",\"singer\")\n@df singers violin(:VoicePart,:Height,marker=(0.2,:blue,stroke(0)))\n@df singers boxplot!(:VoicePart,:Height,marker=(0.3,:orange,stroke(2)))(Image: violin)Asymmetric violin plots can be created using the side keyword (:both - default,:right or :left), e.g.:singers_moscow = deepcopy(singers)\nsingers_moscow[:Height] = singers_moscow[:Height] .+ 5\n@df singers violin(:VoicePart,:Height, side=:right, marker=(0.2, :blue, stroke(0)), label=\"Scala\")\n@df singers_moscow violin!(:VoicePart,:Height, side=:left, marker=(0.2, :red, stroke(0)), label=\"Moscow\")(Image: 2violin)"
},

{
    "location": "#Equal-area-histograms-1",
    "page": "Readme",
    "title": "Equal-area histograms",
    "category": "section",
    "text": "The ea-histogram is an alternative histogram implementation, where every \'box\' in the histogram contains the same number of sample points and all boxes have the same area. Areas with a higher density of points thus get higher boxes. This type of histogram shows spikes well, but may oversmooth in the tails. The y axis is not intuitively interpretable.a = [randn(100); randn(100) .+ 3; randn(100) ./ 2 .+ 3]\nea_histogram(a, bins = :scott, fillalpha = 0.4)<img width=\"487\" alt=\"equal area histogram\" src =\"https://user-images.githubusercontent.com/8429802/29754490-8d1b01f6-8b86-11e7-9f86-e1063a88dfd8.png\">"
},

{
    "location": "#AndrewsPlot-1",
    "page": "Readme",
    "title": "AndrewsPlot",
    "category": "section",
    "text": "AndrewsPlots are a way to visualize structure in high-dimensional data by depicting each row of an array or table as a line that varies with the values in columns. https://en.wikipedia.org/wiki/Andrews_plotusing RDatasets\niris = dataset(\"datasets\", \"iris\")\n@df iris andrewsplot(:Species, cols(1:4), legend = :topleft)<img width=\"575\" alt=\"irisandrewscurve\" src=\"https://user-images.githubusercontent.com/1159782/46241166-c392e800-c368-11e8-93de-125c6eb38b52.png\">"
},

{
    "location": "#Distributions-1",
    "page": "Readme",
    "title": "Distributions",
    "category": "section",
    "text": "using Distributions\nplot(Normal(3,5), fill=(0, .5,:orange))(Image: )dist = Gamma(2)\nscatter(dist, leg=false)\nbar!(dist, func=cdf, alpha=0.3)(Image: )"
},

{
    "location": "#Quantile-Quantile-plots-1",
    "page": "Readme",
    "title": "Quantile-Quantile plots",
    "category": "section",
    "text": "The qqplot function compares the quantiles of two distributions, and accepts either a vector of sample values or a Distribution. The qqnorm is a shorthand for comparing a distribution to the normal distribution. If the distributions are similar the points will be on a straight line.x = rand(Normal(), 100)\ny = rand(Cauchy(), 100)\n\nplot(\n qqplot(x, y, qqline = :fit), # qqplot of two samples, show a fitted regression line\n qqplot(Cauchy, y),           # compare with a Cauchy distribution fitted to y; pass an instance (e.g. Normal(0,1)) to compare with a specific distribution\n qqnorm(x, qqline = :R)       # the :R default line passes through the 1st and 3rd quartiles of the distribution\n)<img width=\"1185\" alt=\"skaermbillede 2017-09-28 kl 22 46 28\" src=\"https://user-images.githubusercontent.com/8429802/30989741-0c4f9dac-a49f-11e7-98ff-028192a8d5b1.png\">"
},

{
    "location": "#Grouped-Bar-plots-1",
    "page": "Readme",
    "title": "Grouped Bar plots",
    "category": "section",
    "text": "groupedbar(rand(10,3), bar_position = :stack, bar_width=0.7)(Image: tmp)This is the default:groupedbar(rand(10,3), bar_position = :dodge, bar_width=0.7)(Image: tmp)The group syntax is also possible in combination with groupedbar:ctg = repeat([\"Category 1\", \"Category 2\"], inner = 5)\nnam = repeat(\"G\" .* string.(1:5), outer = 2)\n\ngroupedbar(nam, rand(5, 2), group = ctg, xlabel = \"Groups\", ylabel = \"Scores\",\n        title = \"Scores by group and category\", bar_width = 0.67,\n        lw = 0, framestyle = :box)(Image: )"
},

{
    "location": "#Dendrograms-1",
    "page": "Readme",
    "title": "Dendrograms",
    "category": "section",
    "text": "using Clustering\nD = rand(10, 10)\nD += D\'\nhc = hclust(D, :single)\nplot(hc)(Image: dendrogram)"
},

{
    "location": "#GroupedErrors.jl-for-population-analysis-1",
    "page": "Readme",
    "title": "GroupedErrors.jl for population analysis",
    "category": "section",
    "text": "Population analysis on a table-like data structures can be done using the highly recommended GroupedErrors package.This external package, in combination with StatPlots, greatly simplifies the creation of two types of plots:"
},

{
    "location": "#.-Subject-by-subject-plot-(generally-a-scatter-plot)-1",
    "page": "Readme",
    "title": "1. Subject by subject plot (generally a scatter plot)",
    "category": "section",
    "text": "Some simple summary statistics are computed for each experimental subject (mean is default but any scalar valued function would do) and then plotted against some other summary statistics, potentially splitting by some categorical experimental variable."
},

{
    "location": "#.-Population-plot-(generally-a-ribbon-plot-in-continuous-case,-or-bar-plot-in-discrete-case)-1",
    "page": "Readme",
    "title": "2. Population plot (generally a ribbon plot in continuous case, or bar plot in discrete case)",
    "category": "section",
    "text": "Some statistical analysis is computed at the single subject level (for example the density/hazard/cumulative of some variable, or the expected value of a variable given another) and the analysis is summarized across subjects (taking for example mean and s.e.m), potentially splitting by some categorical experimental variable.For more information please refer to the README.A GUI based on QML and the GR Plots.jl backend to simplify the use of StatPlots.jl and GroupedErrors.jl even further can be found here (usable but still in alpha stage)."
},

{
    "location": "autodocs/#StatPlots.@df",
    "page": "Docstrings",
    "title": "StatPlots.@df",
    "category": "macro",
    "text": "`@df d x`\n\nConvert every symbol in the expression x with the respective column in d if it exists.\n\nIf you want to avoid replacing the symbol, escape it with ^.\n\nNA values are replaced with NaN for columns of Float64 and \"\" or Symbol() for strings and symbols respectively.\n\nx can be either a plot command or a block of plot commands.\n\n\n\n\n\n`@df x`\n\nCurried version of @df d x. Outputs an anonymous function d -> @df d x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatPlots.andrewsplot",
    "page": "Docstrings",
    "title": "StatPlots.andrewsplot",
    "category": "function",
    "text": "andrewsplot(args...; kw...)\n\nShows each row of an array (or table) as a line. The x argument specifies a grouping variable. This is a way to visualize structure in high-dimensional data. https://en.wikipedia.org/wiki/Andrews_plot #Examples\n\nusing RDatasets, StatPlots\niris = dataset(\"datasets\", \"iris\")\n@df iris andrewsplot(:Species, cols(1:4))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatPlots.bkfe",
    "page": "Docstrings",
    "title": "StatPlots.bkfe",
    "category": "function",
    "text": "binned kernel function estimator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatPlots.wand_bins",
    "page": "Docstrings",
    "title": "StatPlots.wand_bins",
    "category": "function",
    "text": "Returns optimal histogram bin widths in accordance to Wand (1995)\'s criterion\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StatPlots.@animateStatPlots.@colorant_strStatPlots.@dfStatPlots.@gifStatPlots.@layoutStatPlots.@recipeStatPlots.@seriesStatPlots.@shorthandsStatPlots.@userplotStatPlots.ABGRStatPlots.ADIN99StatPlots.ADIN99dStatPlots.ADIN99oStatPlots.AGrayStatPlots.AGray32StatPlots.AHSIStatPlots.AHSLStatPlots.AHSVStatPlots.ALCHabStatPlots.ALCHuvStatPlots.ALMSStatPlots.ALabStatPlots.ALuvStatPlots.ARGBStatPlots.ARGB32StatPlots.AXYZStatPlots.AYCbCrStatPlots.AYIQStatPlots.AbstractBackendStatPlots.AbstractGrayStatPlots.AbstractLayoutStatPlots.AbstractPlotStatPlots.AbstractRGBStatPlots.AlphaColorStatPlots.AndrewsPlotStatPlots.AnimationStatPlots.AxyYStatPlots.BGRStatPlots.BGRAStatPlots.BezierCurveStatPlots.CIE1931JV_CMFStatPlots.CIE1931J_CMFStatPlots.CIE1931_CMFStatPlots.CIE1964_CMFStatPlots.ColorStatPlots.Color3StatPlots.ColorAlphaStatPlots.ColorGradientStatPlots.ColorTypesStatPlots.ColorantStatPlots.ColorantNormedStatPlots.ColorsStatPlots.CornerPlotStatPlots.CorrPlotStatPlots.DE_2000StatPlots.DE_94StatPlots.DE_ABStatPlots.DE_BFDStatPlots.DE_CMCStatPlots.DE_DIN99StatPlots.DE_DIN99dStatPlots.DE_DIN99oStatPlots.DE_JPC79StatPlots.DIN99StatPlots.DIN99AStatPlots.DIN99dStatPlots.DIN99dAStatPlots.DIN99oStatPlots.DIN99oAStatPlots.FormattedStatPlots.FractionalStatPlots.GRStatPlots.GrayStatPlots.Gray24StatPlots.GrayAStatPlots.GroupedBarStatPlots.HSBStatPlots.HSIStatPlots.HSIAStatPlots.HSLStatPlots.HSLAStatPlots.HSVStatPlots.HSVAStatPlots.KWStatPlots.LCHabStatPlots.LCHabAStatPlots.LCHuvStatPlots.LCHuvAStatPlots.LMSStatPlots.LMSAStatPlots.LabStatPlots.LabAStatPlots.LuvStatPlots.LuvAStatPlots.MSCStatPlots.OHLCStatPlots.PlotThemesStatPlots.PlotUtilsStatPlots.PlotsStatPlots.QQNormStatPlots.QQPlotStatPlots.RGBStatPlots.RGB1StatPlots.RGB24StatPlots.RGB4StatPlots.RGBAStatPlots.RecipeDataStatPlots.RecipesBaseStatPlots.SegmentsStatPlots.ShapeStatPlots.StatPlotsStatPlots.SurfaceStatPlots.Transparent3StatPlots.TransparentColorStatPlots.TransparentGrayStatPlots.TransparentRGBStatPlots.XYZStatPlots.XYZAStatPlots.YCbCrStatPlots.YCbCrAStatPlots.YIQStatPlots.YIQAStatPlots.__init__StatPlots._arg2stringStatPlots._argnamesStatPlots._violin_warnedStatPlots.adapted_gridStatPlots.add_backendStatPlots.add_labelStatPlots.add_themeStatPlots.aliasesStatPlots.alphaStatPlots.alphacolorStatPlots.andrewsplotStatPlots.andrewsplot!StatPlots.animateStatPlots.annotate!StatPlots.arrowStatPlots.attr!StatPlots.backendStatPlots.backend_nameStatPlots.backend_objectStatPlots.backendsStatPlots.barStatPlots.bar!StatPlots.barhStatPlots.barh!StatPlots.barhistStatPlots.barhist!StatPlots.base_color_typeStatPlots.base_colorant_typeStatPlots.bboxStatPlots.bkfeStatPlots.blueStatPlots.boxplotStatPlots.boxplot!StatPlots.brushStatPlots.ccolorStatPlots.cdensityStatPlots.cdensity!StatPlots.centerStatPlots.cgradStatPlots.cgradientsStatPlots.cie_color_matchStatPlots.clibrariesStatPlots.clibraryStatPlots.closeallStatPlots.colorStatPlots.color_typeStatPlots.coloralphaStatPlots.colordiffStatPlots.colormapStatPlots.colormatchStatPlots.column_namesStatPlots.column_typesStatPlots.comp1StatPlots.comp2StatPlots.comp3StatPlots.compute_nameStatPlots.contourStatPlots.contour!StatPlots.contour3dStatPlots.contour3d!StatPlots.contourfStatPlots.contourf!StatPlots.convert_missingStatPlots.coordsStatPlots.cornerplotStatPlots.cornerplot!StatPlots.corrplotStatPlots.corrplot!StatPlots.currentStatPlots.curve_pointsStatPlots.curvesStatPlots.curves!StatPlots.cvecStatPlots.dataviewerStatPlots.defaultStatPlots.default_cgradStatPlots.default_rangeStatPlots.densityStatPlots.density!StatPlots.deuteranopicStatPlots.df_helperStatPlots.distinguishable_colorsStatPlots.diverging_paletteStatPlots.ea_binnumberStatPlots.ea_histogramStatPlots.ea_histogram!StatPlots.evalStatPlots.extract_columns_from_iterabletableStatPlots.fontStatPlots.frameStatPlots.gamutmaxStatPlots.gamutminStatPlots.get_col_from_dictStatPlots.get_color_paletteStatPlots.gifStatPlots.grStatPlots.grayStatPlots.greenStatPlots.gridStatPlots.grouped_xyStatPlots.groupedbarStatPlots.groupedbar!StatPlots.guiStatPlots.hdf5StatPlots.heatmapStatPlots.heatmap!StatPlots.hexStatPlots.hexbinStatPlots.hexbin!StatPlots.histogramStatPlots.histogram!StatPlots.histogram2dStatPlots.histogram2d!StatPlots.hlineStatPlots.hline!StatPlots.hspanStatPlots.hspan!StatPlots.includeStatPlots.inlineStatPlots.insert_kw!StatPlots.inspectdrStatPlots.invisibleStatPlots.isdarkStatPlots.iter_segmentsStatPlots.linbinStatPlots.locStatPlots.mapcStatPlots.mapreducecStatPlots.marginalhistStatPlots.marginalhist!StatPlots.movStatPlots.mp4StatPlots.not_kwStatPlots.notch_widthStatPlots.ohlcStatPlots.ohlc!StatPlots.optimize_datetime_ticksStatPlots.optimize_ticksStatPlots.paletteStatPlots.parse_iterabletable_call!StatPlots.path3dStatPlots.path3d!StatPlots.pgfplotsStatPlots.pieStatPlots.pie!StatPlots.plotStatPlots.plot!StatPlots.plot3dStatPlots.plot3d!StatPlots.plot_colorStatPlots.plotareaStatPlots.plotattrStatPlots.plotlyStatPlots.plotlyjsStatPlots.plots_heatmapStatPlots.plots_heatmap!StatPlots.pngStatPlots.portfoliocompositionStatPlots.portfoliocomposition!StatPlots.protanopicStatPlots.pyplotStatPlots.qqnormStatPlots.qqnorm!StatPlots.qqplotStatPlots.qqplot!StatPlots.quiverStatPlots.quiver!StatPlots.redStatPlots.reducecStatPlots.rgb_stringStatPlots.rgba_stringStatPlots.rotateStatPlots.rotate!StatPlots.savefigStatPlots.scatterStatPlots.scatter!StatPlots.scatter3dStatPlots.scatter3d!StatPlots.scatterhistStatPlots.scatterhist!StatPlots.sequential_paletteStatPlots.set_themeStatPlots.shape_coordsStatPlots.showgradientStatPlots.showgradient!StatPlots.showlibraryStatPlots.showlibrary!StatPlots.showthemeStatPlots.showtheme!StatPlots.spyStatPlots.spy!StatPlots.stephistStatPlots.stephist!StatPlots.sticksStatPlots.sticks!StatPlots.stringifyStatPlots.strokeStatPlots.surfaceStatPlots.surface!StatPlots.test_examplesStatPlots.testhistStatPlots.testhist!StatPlots.textStatPlots.themeStatPlots.title!StatPlots.translateStatPlots.translate!StatPlots.treepositionsStatPlots.tritanopicStatPlots.twinxStatPlots.unicodeplotsStatPlots.update_ticks_guidesStatPlots.violinStatPlots.violin!StatPlots.violin_coordsStatPlots.vlineStatPlots.vline!StatPlots.vspanStatPlots.vspan!StatPlots.wand_binsStatPlots.weighted_color_meanStatPlots.whitebalanceStatPlots.wireframeStatPlots.wireframe!StatPlots.withStatPlots.wrapStatPlots.xaxis!StatPlots.xflip!StatPlots.xgrid!StatPlots.xlabel!StatPlots.xlimsStatPlots.xlims!StatPlots.xticks!StatPlots.xyYStatPlots.xyYAStatPlots.yaxis!StatPlots.yflip!StatPlots.ygrid!StatPlots.ylabel!StatPlots.ylimsStatPlots.ylims!StatPlots.yticks!StatPlots.yz_argsStatPlots.zlimsStatPlots.zlims!"
},

]}
