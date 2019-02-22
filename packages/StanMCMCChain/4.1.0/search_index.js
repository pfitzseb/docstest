var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StanMCMCChain-1",
    "page": "Readme",
    "title": "StanMCMCChain",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package converts the output produced by CmdStan.jl to a TuringLang/Chains object suitable for further processing by the MCMCChain package."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "In the definition of the Stanmodel, request the output_format=:mcmcchains:  stanmodel = Stanmodel(num_samples=1200, thin=2, name=\"bernoulli\", \n    model=bernoullimodel, output_format=:mcmcchains);The subsequent call to stan() will now return a MCMCChain.Chains object in chains as in the included Bernoulli example:... (snipped)\n\n  rc, chains, cnames = stan(stanmodel, observeddata, ProjDir, diagnostics=false,\n    CmdStanDir=CMDSTAN_HOME);\n    \n... (snipped)\nIt is also possible to do this conversion after the call to stan():  stanmodel = Stanmodel(num_samples=1200, thin=2, name=\"bernoulli\", \n    model=bernoullimodel);\n\n  rc, sims, cnames = stan(stanmodel, observeddata, ProjDir, diagnostics=false,\n    CmdStanDir=CMDSTAN_HOME);\n  \n  chains = convert_a3d(sims, cnames, Val(:mcmcchains))\nThe bernoulli example also demonstrated how a Chains object can be saved and restored."
},

{
    "location": "#Further-examples-1",
    "page": "Readme",
    "title": "Further examples",
    "category": "section",
    "text": "Several more examples will be contained in StanMCMCChainExamples.jl."
},

{
    "location": "autodocs/#CmdStan.convert_a3d",
    "page": "Docstrings",
    "title": "CmdStan.convert_a3d",
    "category": "function",
    "text": "convert_a3d\n\nConvert the output file created by cmdstan to the shape of choice. Currently . \n\nMethod\n\nconvert_a3d(a3d_array, cnames, ::Val{Symbol})\n\nRequired arguments\n\n* `a3d_array::Array{Float64}(n_draws, n_variables, n_chains`      : Read in from output files created by cmdstan                                   \n* `cnames::Vector{AbstractString}`                                                 : Monitored variable names\n* `::Val{Symbol}`                                                                             : Output format\n\nMethod called is based on the output_format defined in the stanmodel, e.g.:\n\n   stanmodel = Stanmodel(num_samples=1200, thin=2, name=\"bernoulli\", \n   model=bernoullimodel, output_format=:array);\n\nCurrent formats supported are:\n\n1. :array (a3d_array format, the default for CmdStan)\n2. :dataFrame (DataFrame)\n3. :mambachains (Mamba.Chains object)\n4. :mcmcchain (TuringLang/Chains object)\n\nOptions 2 through 4 are respectively provided by the packages StanDataFrames, StanMamba and StanMCMCChain.\n\nReturn values\n\n* `res`                       : Draws converted to the specified format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StanMCMCChain.@animateStanMCMCChain.@colorant_strStanMCMCChain.@gifStanMCMCChain.@layoutStanMCMCChain.@loadStanMCMCChain.@recipeStanMCMCChain.@saveStanMCMCChain.@seriesStanMCMCChain.@shorthandsStanMCMCChain.@userplotStanMCMCChain.ABGRStanMCMCChain.ADIN99StanMCMCChain.ADIN99dStanMCMCChain.ADIN99oStanMCMCChain.AGrayStanMCMCChain.AGray32StanMCMCChain.AHSIStanMCMCChain.AHSLStanMCMCChain.AHSVStanMCMCChain.ALCHabStanMCMCChain.ALCHuvStanMCMCChain.ALMSStanMCMCChain.ALabStanMCMCChain.ALuvStanMCMCChain.ARGBStanMCMCChain.ARGB32StanMCMCChain.AXYZStanMCMCChain.AYCbCrStanMCMCChain.AYIQStanMCMCChain.AbstractBackendStanMCMCChain.AbstractGrayStanMCMCChain.AbstractLayoutStanMCMCChain.AbstractPlotStanMCMCChain.AbstractRGBStanMCMCChain.AlphaColorStanMCMCChain.AnimationStanMCMCChain.AxyYStanMCMCChain.BGRStanMCMCChain.BGRAStanMCMCChain.BezierCurveStanMCMCChain.CIE1931JV_CMFStanMCMCChain.CIE1931J_CMFStanMCMCChain.CIE1931_CMFStanMCMCChain.CIE1964_CMFStanMCMCChain.CMDSTAN_HOMEStanMCMCChain.ChainsStanMCMCChain.CmdStanStanMCMCChain.ColorStanMCMCChain.Color3StanMCMCChain.ColorAlphaStanMCMCChain.ColorGradientStanMCMCChain.ColorTypesStanMCMCChain.ColorantStanMCMCChain.ColorantNormedStanMCMCChain.ColorsStanMCMCChain.DE_2000StanMCMCChain.DE_94StanMCMCChain.DE_ABStanMCMCChain.DE_BFDStanMCMCChain.DE_CMCStanMCMCChain.DE_DIN99StanMCMCChain.DE_DIN99dStanMCMCChain.DE_DIN99oStanMCMCChain.DE_JPC79StanMCMCChain.DIN99StanMCMCChain.DIN99AStanMCMCChain.DIN99dStanMCMCChain.DIN99dAStanMCMCChain.DIN99oStanMCMCChain.DIN99oAStanMCMCChain.DiagnoseStanMCMCChain.FormattedStanMCMCChain.FractionalStanMCMCChain.GRStanMCMCChain.GrayStanMCMCChain.Gray24StanMCMCChain.GrayAStanMCMCChain.HSBStanMCMCChain.HSIStanMCMCChain.HSIAStanMCMCChain.HSLStanMCMCChain.HSLAStanMCMCChain.HSVStanMCMCChain.HSVAStanMCMCChain.JLDStanMCMCChain.KWStanMCMCChain.LCHabStanMCMCChain.LCHabAStanMCMCChain.LCHuvStanMCMCChain.LCHuvAStanMCMCChain.LMSStanMCMCChain.LMSAStanMCMCChain.LabStanMCMCChain.LabAStanMCMCChain.LuvStanMCMCChain.LuvAStanMCMCChain.MCMCChainStanMCMCChain.MSCStanMCMCChain.OHLCStanMCMCChain.OptimizeStanMCMCChain.PlotThemesStanMCMCChain.PlotUtilsStanMCMCChain.PlotsStanMCMCChain.RGBStanMCMCChain.RGB1StanMCMCChain.RGB24StanMCMCChain.RGB4StanMCMCChain.RGBAStanMCMCChain.RecipeDataStanMCMCChain.RecipesBaseStanMCMCChain.SampleStanMCMCChain.SegmentsStanMCMCChain.ShapeStanMCMCChain.StanMCMCChainStanMCMCChain.StanmodelStanMCMCChain.StatisticsStanMCMCChain.SurfaceStanMCMCChain.Transparent3StanMCMCChain.TransparentColorStanMCMCChain.TransparentGrayStanMCMCChain.TransparentRGBStanMCMCChain.VariationalStanMCMCChain.XYZStanMCMCChain.XYZAStanMCMCChain.YCbCrStanMCMCChain.YCbCrAStanMCMCChain.YIQStanMCMCChain.YIQAStanMCMCChain.adapted_gridStanMCMCChain.add_backendStanMCMCChain.add_themeStanMCMCChain.addrequireStanMCMCChain.aliasesStanMCMCChain.alphaStanMCMCChain.alphacolorStanMCMCChain.animateStanMCMCChain.annotate!StanMCMCChain.arrowStanMCMCChain.attr!StanMCMCChain.autcorplotStanMCMCChain.autocorplotStanMCMCChain.autocorplot!StanMCMCChain.backendStanMCMCChain.backend_nameStanMCMCChain.backend_objectStanMCMCChain.backendsStanMCMCChain.barStanMCMCChain.bar!StanMCMCChain.barhStanMCMCChain.barh!StanMCMCChain.barhistStanMCMCChain.barhist!StanMCMCChain.base_color_typeStanMCMCChain.base_colorant_typeStanMCMCChain.bboxStanMCMCChain.blueStanMCMCChain.boxplotStanMCMCChain.boxplot!StanMCMCChain.brushStanMCMCChain.ccolorStanMCMCChain.centerStanMCMCChain.cgradStanMCMCChain.cgradientsStanMCMCChain.cie_color_matchStanMCMCChain.clibrariesStanMCMCChain.clibraryStanMCMCChain.closeallStanMCMCChain.colorStanMCMCChain.color_typeStanMCMCChain.coloralphaStanMCMCChain.colordiffStanMCMCChain.colormapStanMCMCChain.colormatchStanMCMCChain.comp1StanMCMCChain.comp2StanMCMCChain.comp3StanMCMCChain.contourStanMCMCChain.contour!StanMCMCChain.contour3dStanMCMCChain.contour3d!StanMCMCChain.contourfStanMCMCChain.contourf!StanMCMCChain.convert_a3dStanMCMCChain.coordsStanMCMCChain.corStanMCMCChain.cornerStanMCMCChain.corner!StanMCMCChain.covStanMCMCChain.creatorStanMCMCChain.currentStanMCMCChain.curve_pointsStanMCMCChain.curvesStanMCMCChain.curves!StanMCMCChain.cvecStanMCMCChain.defaultStanMCMCChain.default_cgradStanMCMCChain.densityStanMCMCChain.density!StanMCMCChain.densityplotStanMCMCChain.describeStanMCMCChain.deuteranopicStanMCMCChain.discretediagStanMCMCChain.distinguishable_colorsStanMCMCChain.diverging_paletteStanMCMCChain.evalStanMCMCChain.fontStanMCMCChain.frameStanMCMCChain.gamutmaxStanMCMCChain.gamutminStanMCMCChain.gelmandiagStanMCMCChain.get_color_paletteStanMCMCChain.getindexStanMCMCChain.gewekediagStanMCMCChain.gifStanMCMCChain.grStanMCMCChain.grayStanMCMCChain.greenStanMCMCChain.gridStanMCMCChain.guiStanMCMCChain.hdf5StanMCMCChain.heatmapStanMCMCChain.heatmap!StanMCMCChain.heideldiagStanMCMCChain.hexStanMCMCChain.hexbinStanMCMCChain.hexbin!StanMCMCChain.histogramStanMCMCChain.histogram!StanMCMCChain.histogram2dStanMCMCChain.histogram2d!StanMCMCChain.histogramplotStanMCMCChain.hlineStanMCMCChain.hline!StanMCMCChain.hspanStanMCMCChain.hspan!StanMCMCChain.includeStanMCMCChain.inlineStanMCMCChain.inspectdrStanMCMCChain.invisibleStanMCMCChain.isdarkStanMCMCChain.ismmappableStanMCMCChain.iter_segmentsStanMCMCChain.jldopenStanMCMCChain.loadStanMCMCChain.mapcStanMCMCChain.mapreducecStanMCMCChain.meanStanMCMCChain.mean!StanMCMCChain.meanplotStanMCMCChain.meanplot!StanMCMCChain.medianStanMCMCChain.median!StanMCMCChain.middleStanMCMCChain.mixeddensityStanMCMCChain.mixeddensity!StanMCMCChain.mixeddensityplotStanMCMCChain.movStanMCMCChain.mp4StanMCMCChain.o_deleteStanMCMCChain.ohlcStanMCMCChain.ohlc!StanMCMCChain.optimize_datetime_ticksStanMCMCChain.optimize_ticksStanMCMCChain.paletteStanMCMCChain.path3dStanMCMCChain.path3d!StanMCMCChain.pgfplotsStanMCMCChain.pieStanMCMCChain.pie!StanMCMCChain.plotStanMCMCChain.plot!StanMCMCChain.plot3dStanMCMCChain.plot3d!StanMCMCChain.plot_colorStanMCMCChain.plotareaStanMCMCChain.plotattrStanMCMCChain.plotlyStanMCMCChain.plotlyjsStanMCMCChain.plots_heatmapStanMCMCChain.plots_heatmap!StanMCMCChain.pngStanMCMCChain.portfoliocompositionStanMCMCChain.portfoliocomposition!StanMCMCChain.protanopicStanMCMCChain.pyplotStanMCMCChain.quantileStanMCMCChain.quantile!StanMCMCChain.quiverStanMCMCChain.quiver!StanMCMCChain.rafterydiagStanMCMCChain.readmmapStanMCMCChain.redStanMCMCChain.reducecStanMCMCChain.rgb_stringStanMCMCChain.rgba_stringStanMCMCChain.rotateStanMCMCChain.rotate!StanMCMCChain.saveStanMCMCChain.savefigStanMCMCChain.scatterStanMCMCChain.scatter!StanMCMCChain.scatter3dStanMCMCChain.scatter3d!StanMCMCChain.scatterhistStanMCMCChain.scatterhist!StanMCMCChain.sequential_paletteStanMCMCChain.set_cmdstan_home!StanMCMCChain.set_themeStanMCMCChain.setindex!StanMCMCChain.shape_coordsStanMCMCChain.showgradientStanMCMCChain.showgradient!StanMCMCChain.showlibraryStanMCMCChain.showlibrary!StanMCMCChain.showthemeStanMCMCChain.showtheme!StanMCMCChain.spyStanMCMCChain.spy!StanMCMCChain.stanStanMCMCChain.stdStanMCMCChain.stdmStanMCMCChain.stephistStanMCMCChain.stephist!StanMCMCChain.sticksStanMCMCChain.sticks!StanMCMCChain.strokeStanMCMCChain.surfaceStanMCMCChain.surface!StanMCMCChain.test_examplesStanMCMCChain.textStanMCMCChain.themeStanMCMCChain.title!StanMCMCChain.traceplotStanMCMCChain.traceplot!StanMCMCChain.translateStanMCMCChain.translate!StanMCMCChain.tritanopicStanMCMCChain.truncate_module_pathStanMCMCChain.twinxStanMCMCChain.unicodeplotsStanMCMCChain.varStanMCMCChain.varmStanMCMCChain.violinStanMCMCChain.violin!StanMCMCChain.vlineStanMCMCChain.vline!StanMCMCChain.vspanStanMCMCChain.vspan!StanMCMCChain.weighted_color_meanStanMCMCChain.whitebalanceStanMCMCChain.wireframeStanMCMCChain.wireframe!StanMCMCChain.withStanMCMCChain.wrapStanMCMCChain.xaxis!StanMCMCChain.xflip!StanMCMCChain.xgrid!StanMCMCChain.xlabel!StanMCMCChain.xlimsStanMCMCChain.xlims!StanMCMCChain.xticks!StanMCMCChain.xyYStanMCMCChain.xyYAStanMCMCChain.yaxis!StanMCMCChain.yflip!StanMCMCChain.ygrid!StanMCMCChain.ylabel!StanMCMCChain.ylimsStanMCMCChain.ylims!StanMCMCChain.yticks!StanMCMCChain.zlimsStanMCMCChain.zlims!"
},

]}
