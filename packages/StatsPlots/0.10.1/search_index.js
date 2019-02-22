var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StatsPlots-1",
    "page": "Readme",
    "title": "StatsPlots",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Original-author:-Thomas-Breloff-(@tbreloff),-maintained-by-the-JuliaPlots-members-1",
    "page": "Readme",
    "title": "Original author: Thomas Breloff (@tbreloff), maintained by the JuliaPlots members",
    "category": "section",
    "text": "This package is a drop-in replacement for Plots.jl that contains many statistical recipes for concepts and types introduced in the JuliaStats organization. Types:\nDataFrames\nDistributions\nRecipes:\nhistogram/histogram2d\nboxplot\nviolin\nmarginalhist\ncorrplot/cornerplot\nandrewsplotIt is thus slightly less lightweight, but has more functionality. Main documentation is found in the Plots.jl documentation (https://juliaplots.github.io).Initialize:#]add StatsPlots # install the package if it isn\'t installed\nusing StatsPlots # no need for `using Plots` as that is reexported here\ngr(size=(400,300))Table-like data structures, including DataFrames, IndexedTables, DataStreams, etc... (see here for an exhaustive list), are supported thanks to the macro @df which allows passing columns as symbols. Those columns can then be manipulated inside the plot call, like normal Arrays:using DataFrames, IndexedTables\ndf = DataFrame(a = 1:10, b = 10 .* rand(10), c = 10 .* rand(10))\n@df df plot(:a, [:b :c], colour = [:red :blue])\n@df df scatter(:a, :b, markersize = 4 .* log.(:c .+ 0.1))\nt = table(1:10, rand(10), names = [:a, :b]) # IndexedTable\n@df t scatter(2 .* :b)Inside a @df macro call, the cols utility function can be used to refer to a range of columns:@df df plot(:a, cols(2:3), colour = [:red :blue])or to refer to a column whose symbol is represented by a variable:s = :b\n@df df plot(:a, cols(s))cols() will refer to all columns of the data table.In case of ambiguity, symbols not referring to DataFrame columns must be escaped by ^():df[:red] = rand(10)\n@df df plot(:a, [:b :c], colour = ^([:red :blue]))The @df macro plays nicely with the new syntax of the Query.jl data manipulation package (v0.8 and above), in that a plot command can be added at the end of a query pipeline, without having to explicitly collect the outcome of the query first:using Query, StatsPlots\ndf |>\n    @filter(_.a > 5) |>\n    @map({_.b, d = _.c-10}) |>\n    @df scatter(:b, :d)The @df syntax is also compatible with Plots grouping machinery:using RDatasets\nschool = RDatasets.dataset(\"mlmRev\",\"Hsb82\")\n@df school density(:MAch, group = :Sx)To group by more than one column, use a tuple of symbols:@df school density(:MAch, group = (:Sx, :Sector), legend = :topleft)(Image: grouped)To name the legend entries with custom or automatic names (i.e. Sex = Male, Sector = Public) use the curly bracket syntax group = {Sex = :Sx, :Sector}. Entries with = get the custom name you give, whereas entries without = take the name of the column.The old syntax, passing the DataFrame as the first argument to the plot call is no longer supported."
},

{
    "location": "#Visualizing-a-table-interactively-1",
    "page": "Readme",
    "title": "Visualizing a table interactively",
    "category": "section",
    "text": "A GUI based on the Interact package is available to create plots from a table interactively, using any of the recipes defined below. This small app can be deployed in a Jupyter lab / notebook, Juno plot pane, a Blink window or in the browser, see here for instructions.import RDatasets\niris = RDatasets.dataset(\"datasets\", \"iris\")\nusing StatsPlots, Interact\nusing Blink\nw = Window()\nbody!(w, dataviewer(iris))(Image: dataviewer)"
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
    "text": "Population analysis on a table-like data structures can be done using the highly recommended GroupedErrors package.This external package, in combination with StatsPlots, greatly simplifies the creation of two types of plots:"
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
    "text": "Some statistical analysis is computed at the single subject level (for example the density/hazard/cumulative of some variable, or the expected value of a variable given another) and the analysis is summarized across subjects (taking for example mean and s.e.m), potentially splitting by some categorical experimental variable.For more information please refer to the README.A GUI based on QML and the GR Plots.jl backend to simplify the use of StatsPlots.jl and GroupedErrors.jl even further can be found here (usable but still in alpha stage)."
},

{
    "location": "autodocs/#StatsPlots.@df",
    "page": "Docstrings",
    "title": "StatsPlots.@df",
    "category": "macro",
    "text": "`@df d x`\n\nConvert every symbol in the expression x with the respective column in d if it exists.\n\nIf you want to avoid replacing the symbol, escape it with ^.\n\nNA values are replaced with NaN for columns of Float64 and \"\" or Symbol() for strings and symbols respectively.\n\nx can be either a plot command or a block of plot commands.\n\n\n\n\n\n`@df x`\n\nCurried version of @df d x. Outputs an anonymous function d -> @df d x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsPlots.andrewsplot",
    "page": "Docstrings",
    "title": "StatsPlots.andrewsplot",
    "category": "function",
    "text": "andrewsplot(args...; kw...)\n\nShows each row of an array (or table) as a line. The x argument specifies a grouping variable. This is a way to visualize structure in high-dimensional data. https://en.wikipedia.org/wiki/Andrews_plot #Examples\n\nusing RDatasets, StatsPlots\niris = dataset(\"datasets\", \"iris\")\n@df iris andrewsplot(:Species, cols(1:4))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsPlots.bkfe",
    "page": "Docstrings",
    "title": "StatsPlots.bkfe",
    "category": "function",
    "text": "binned kernel function estimator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsPlots.wand_bins",
    "page": "Docstrings",
    "title": "StatsPlots.wand_bins",
    "category": "function",
    "text": "Returns optimal histogram bin widths in accordance to Wand (1995)\'s criterion\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StatsPlots.@animateStatsPlots.@colorant_strStatsPlots.@dfStatsPlots.@gifStatsPlots.@layoutStatsPlots.@recipeStatsPlots.@seriesStatsPlots.@shorthandsStatsPlots.@userplotStatsPlots.ABGRStatsPlots.ADIN99StatsPlots.ADIN99dStatsPlots.ADIN99oStatsPlots.AGrayStatsPlots.AGray32StatsPlots.AHSIStatsPlots.AHSLStatsPlots.AHSVStatsPlots.ALCHabStatsPlots.ALCHuvStatsPlots.ALMSStatsPlots.ALabStatsPlots.ALuvStatsPlots.ARGBStatsPlots.ARGB32StatsPlots.AXYZStatsPlots.AYCbCrStatsPlots.AYIQStatsPlots.AbstractBackendStatsPlots.AbstractGrayStatsPlots.AbstractLayoutStatsPlots.AbstractPlotStatsPlots.AbstractRGBStatsPlots.AlphaColorStatsPlots.AndrewsPlotStatsPlots.AnimationStatsPlots.AxyYStatsPlots.BGRStatsPlots.BGRAStatsPlots.BezierCurveStatsPlots.CIE1931JV_CMFStatsPlots.CIE1931J_CMFStatsPlots.CIE1931_CMFStatsPlots.CIE1964_CMFStatsPlots.ColorStatsPlots.Color3StatsPlots.ColorAlphaStatsPlots.ColorGradientStatsPlots.ColorTypesStatsPlots.ColorantStatsPlots.ColorantNormedStatsPlots.ColorsStatsPlots.CornerPlotStatsPlots.CorrPlotStatsPlots.DE_2000StatsPlots.DE_94StatsPlots.DE_ABStatsPlots.DE_BFDStatsPlots.DE_CMCStatsPlots.DE_DIN99StatsPlots.DE_DIN99dStatsPlots.DE_DIN99oStatsPlots.DE_JPC79StatsPlots.DIN99StatsPlots.DIN99AStatsPlots.DIN99dStatsPlots.DIN99dAStatsPlots.DIN99oStatsPlots.DIN99oAStatsPlots.FormattedStatsPlots.FractionalStatsPlots.GRStatsPlots.GrayStatsPlots.Gray24StatsPlots.GrayAStatsPlots.GroupedBarStatsPlots.HSBStatsPlots.HSIStatsPlots.HSIAStatsPlots.HSLStatsPlots.HSLAStatsPlots.HSVStatsPlots.HSVAStatsPlots.KWStatsPlots.LCHabStatsPlots.LCHabAStatsPlots.LCHuvStatsPlots.LCHuvAStatsPlots.LMSStatsPlots.LMSAStatsPlots.LabStatsPlots.LabAStatsPlots.LuvStatsPlots.LuvAStatsPlots.MSCStatsPlots.OHLCStatsPlots.PlotThemesStatsPlots.PlotUtilsStatsPlots.PlotsStatsPlots.QQNormStatsPlots.QQPlotStatsPlots.RGBStatsPlots.RGB1StatsPlots.RGB24StatsPlots.RGB4StatsPlots.RGBAStatsPlots.RecipeDataStatsPlots.RecipesBaseStatsPlots.SegmentsStatsPlots.ShapeStatsPlots.StatsPlotsStatsPlots.SurfaceStatsPlots.Transparent3StatsPlots.TransparentColorStatsPlots.TransparentGrayStatsPlots.TransparentRGBStatsPlots.XYZStatsPlots.XYZAStatsPlots.YCbCrStatsPlots.YCbCrAStatsPlots.YIQStatsPlots.YIQAStatsPlots._arg2stringStatsPlots._argnamesStatsPlots._violin_warnedStatsPlots.adapted_gridStatsPlots.add_backendStatsPlots.add_labelStatsPlots.add_themeStatsPlots.aliasesStatsPlots.alphaStatsPlots.alphacolorStatsPlots.andrewsplotStatsPlots.andrewsplot!StatsPlots.animateStatsPlots.annotate!StatsPlots.arrowStatsPlots.attr!StatsPlots.backendStatsPlots.backend_nameStatsPlots.backend_objectStatsPlots.backendsStatsPlots.barStatsPlots.bar!StatsPlots.barhStatsPlots.barh!StatsPlots.barhistStatsPlots.barhist!StatsPlots.base_color_typeStatsPlots.base_colorant_typeStatsPlots.bboxStatsPlots.bkfeStatsPlots.blueStatsPlots.boxplotStatsPlots.boxplot!StatsPlots.brushStatsPlots.ccolorStatsPlots.cdensityStatsPlots.cdensity!StatsPlots.centerStatsPlots.cgradStatsPlots.cgradientsStatsPlots.cie_color_matchStatsPlots.clibrariesStatsPlots.clibraryStatsPlots.closeallStatsPlots.colorStatsPlots.color_typeStatsPlots.coloralphaStatsPlots.colordiffStatsPlots.colormapStatsPlots.colormatchStatsPlots.column_namesStatsPlots.column_typesStatsPlots.comp1StatsPlots.comp2StatsPlots.comp3StatsPlots.compute_nameStatsPlots.contourStatsPlots.contour!StatsPlots.contour3dStatsPlots.contour3d!StatsPlots.contourfStatsPlots.contourf!StatsPlots.convert_missingStatsPlots.coordsStatsPlots.cornerplotStatsPlots.cornerplot!StatsPlots.corrplotStatsPlots.corrplot!StatsPlots.currentStatsPlots.curve_pointsStatsPlots.curvesStatsPlots.curves!StatsPlots.cvecStatsPlots.dataviewerStatsPlots.defaultStatsPlots.default_cgradStatsPlots.default_rangeStatsPlots.densityStatsPlots.density!StatsPlots.deuteranopicStatsPlots.df_helperStatsPlots.distinguishable_colorsStatsPlots.diverging_paletteStatsPlots.ea_binnumberStatsPlots.ea_histogramStatsPlots.ea_histogram!StatsPlots.evalStatsPlots.extract_columns_from_iterabletableStatsPlots.fontStatsPlots.frameStatsPlots.gamutmaxStatsPlots.gamutminStatsPlots.get_col_from_dictStatsPlots.get_color_paletteStatsPlots.gifStatsPlots.grStatsPlots.grayStatsPlots.greenStatsPlots.gridStatsPlots.grouped_xyStatsPlots.groupedbarStatsPlots.groupedbar!StatsPlots.guiStatsPlots.hdf5StatsPlots.heatmapStatsPlots.heatmap!StatsPlots.hexStatsPlots.hexbinStatsPlots.hexbin!StatsPlots.histogramStatsPlots.histogram!StatsPlots.histogram2dStatsPlots.histogram2d!StatsPlots.hlineStatsPlots.hline!StatsPlots.hspanStatsPlots.hspan!StatsPlots.includeStatsPlots.inlineStatsPlots.insert_kw!StatsPlots.inspectdrStatsPlots.invisibleStatsPlots.isdarkStatsPlots.iter_segmentsStatsPlots.linbinStatsPlots.locStatsPlots.mapcStatsPlots.mapreducecStatsPlots.marginalhistStatsPlots.marginalhist!StatsPlots.movStatsPlots.mp4StatsPlots.not_kwStatsPlots.notch_widthStatsPlots.ohlcStatsPlots.ohlc!StatsPlots.optimize_datetime_ticksStatsPlots.optimize_ticksStatsPlots.paletteStatsPlots.parse_iterabletable_call!StatsPlots.path3dStatsPlots.path3d!StatsPlots.pgfplotsStatsPlots.pieStatsPlots.pie!StatsPlots.plotStatsPlots.plot!StatsPlots.plot3dStatsPlots.plot3d!StatsPlots.plot_colorStatsPlots.plotareaStatsPlots.plotattrStatsPlots.plotlyStatsPlots.plotlyjsStatsPlots.plots_heatmapStatsPlots.plots_heatmap!StatsPlots.pngStatsPlots.portfoliocompositionStatsPlots.portfoliocomposition!StatsPlots.protanopicStatsPlots.pyplotStatsPlots.qqnormStatsPlots.qqnorm!StatsPlots.qqplotStatsPlots.qqplot!StatsPlots.quiverStatsPlots.quiver!StatsPlots.redStatsPlots.reducecStatsPlots.rgb_stringStatsPlots.rgba_stringStatsPlots.rotateStatsPlots.rotate!StatsPlots.savefigStatsPlots.scatterStatsPlots.scatter!StatsPlots.scatter3dStatsPlots.scatter3d!StatsPlots.scatterhistStatsPlots.scatterhist!StatsPlots.sequential_paletteStatsPlots.set_themeStatsPlots.shape_coordsStatsPlots.showgradientStatsPlots.showgradient!StatsPlots.showlibraryStatsPlots.showlibrary!StatsPlots.showthemeStatsPlots.showtheme!StatsPlots.spyStatsPlots.spy!StatsPlots.stephistStatsPlots.stephist!StatsPlots.sticksStatsPlots.sticks!StatsPlots.stringifyStatsPlots.strokeStatsPlots.surfaceStatsPlots.surface!StatsPlots.test_examplesStatsPlots.testhistStatsPlots.testhist!StatsPlots.textStatsPlots.themeStatsPlots.title!StatsPlots.translateStatsPlots.translate!StatsPlots.treepositionsStatsPlots.tritanopicStatsPlots.twinxStatsPlots.unicodeplotsStatsPlots.update_ticks_guidesStatsPlots.violinStatsPlots.violin!StatsPlots.violin_coordsStatsPlots.vlineStatsPlots.vline!StatsPlots.vspanStatsPlots.vspan!StatsPlots.wand_binsStatsPlots.weighted_color_meanStatsPlots.whitebalanceStatsPlots.wireframeStatsPlots.wireframe!StatsPlots.withStatsPlots.wrapStatsPlots.xaxis!StatsPlots.xflip!StatsPlots.xgrid!StatsPlots.xlabel!StatsPlots.xlimsStatsPlots.xlims!StatsPlots.xticks!StatsPlots.xyYStatsPlots.xyYAStatsPlots.yaxis!StatsPlots.yflip!StatsPlots.ygrid!StatsPlots.ylabel!StatsPlots.ylimsStatsPlots.ylims!StatsPlots.yticks!StatsPlots.yz_argsStatsPlots.zlimsStatsPlots.zlims!"
},

]}
