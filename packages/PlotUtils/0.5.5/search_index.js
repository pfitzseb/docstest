var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PlotUtils-1",
    "page": "Readme",
    "title": "PlotUtils",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "autodocs/#PlotUtils.ColorGradient",
    "page": "Docstrings",
    "title": "PlotUtils.ColorGradient",
    "category": "type",
    "text": "Continuous gradient between values.  Wraps a list of bounding colors and the values they represent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlotUtils.adapted_grid",
    "page": "Docstrings",
    "title": "PlotUtils.adapted_grid",
    "category": "function",
    "text": "adapted_grid(f, minmax::Tuple{Number, Number}; max_recursions = 7)\n\nComputes a grid x on the interval [minmax[1], minmax[2]] so that plot(f, x) gives a smooth \"nice\" plot. The method used is to create an initial uniform grid (21 points) and refine intervals where the second derivative is approximated to be large. When an interval becomes \"straight enough\" it is no longer divided. Functions are never evaluated exactly at the end points of the intervals.\n\nThe parameter max_recusions computes how many times each interval is allowed to be refined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlotUtils.cgradients",
    "page": "Docstrings",
    "title": "PlotUtils.cgradients",
    "category": "function",
    "text": "cgradients([color_library::Symbol])\n\nList available color gradients in color_library (defaults to the currently loaded library)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlotUtils.clibraries",
    "page": "Docstrings",
    "title": "PlotUtils.clibraries",
    "category": "function",
    "text": "clibraries()\n\nList the available color libraries on the system\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PlotUtils.clibrary",
    "page": "Docstrings",
    "title": "PlotUtils.clibrary",
    "category": "function",
    "text": "clibrary(grad::Symbol)\n\nSet the active color library. A list of possible libraries can be printed with clibraries()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PlotUtils.@colorant_strPlotUtils.ABGRPlotUtils.ADIN99PlotUtils.ADIN99dPlotUtils.ADIN99oPlotUtils.AGrayPlotUtils.AGray32PlotUtils.AHSIPlotUtils.AHSLPlotUtils.AHSVPlotUtils.ALCHabPlotUtils.ALCHuvPlotUtils.ALMSPlotUtils.ALabPlotUtils.ALuvPlotUtils.ARGBPlotUtils.ARGB32PlotUtils.AXYZPlotUtils.AYCbCrPlotUtils.AYIQPlotUtils.AbstractGrayPlotUtils.AbstractRGBPlotUtils.AlphaColorPlotUtils.AxyYPlotUtils.BGRPlotUtils.BGRAPlotUtils.CIE1931JV_CMFPlotUtils.CIE1931J_CMFPlotUtils.CIE1931_CMFPlotUtils.CIE1964_CMFPlotUtils.ColorPlotUtils.Color3PlotUtils.ColorAlphaPlotUtils.ColorGradientPlotUtils.ColorLibraryPlotUtils.ColorTypesPlotUtils.ColorantPlotUtils.ColorantNormedPlotUtils.ColorsPlotUtils.DE_2000PlotUtils.DE_94PlotUtils.DE_ABPlotUtils.DE_BFDPlotUtils.DE_CMCPlotUtils.DE_DIN99PlotUtils.DE_DIN99dPlotUtils.DE_DIN99oPlotUtils.DE_JPC79PlotUtils.DIN99PlotUtils.DIN99APlotUtils.DIN99dPlotUtils.DIN99dAPlotUtils.DIN99oPlotUtils.DIN99oAPlotUtils.FractionalPlotUtils.GrayPlotUtils.Gray24PlotUtils.GrayAPlotUtils.HSBPlotUtils.HSIPlotUtils.HSIAPlotUtils.HSLPlotUtils.HSLAPlotUtils.HSVPlotUtils.HSVAPlotUtils.LCHabPlotUtils.LCHabAPlotUtils.LCHuvPlotUtils.LCHuvAPlotUtils.LMSPlotUtils.LMSAPlotUtils.LabPlotUtils.LabAPlotUtils.LuvPlotUtils.LuvAPlotUtils.MSCPlotUtils.PlotUtilsPlotUtils.RGBPlotUtils.RGB1PlotUtils.RGB24PlotUtils.RGB4PlotUtils.RGBAPlotUtils.Transparent3PlotUtils.TransparentColorPlotUtils.TransparentGrayPlotUtils.TransparentRGBPlotUtils.XYZPlotUtils.XYZAPlotUtils.YCbCrPlotUtils.YCbCrAPlotUtils.YIQPlotUtils.YIQAPlotUtils.__init__PlotUtils._color_listPlotUtils._gradientsPlotUtils._lch_c_constPlotUtils._lightness_darkbgPlotUtils._lightness_lightbgPlotUtils._rainbowColorsPlotUtils._testColorsPlotUtils.adapted_gridPlotUtils.adjust_awayPlotUtils.adjust_lchPlotUtils.alphaPlotUtils.alphacolorPlotUtils.base_color_typePlotUtils.base_colorant_typePlotUtils.bluePlotUtils.bounding_order_of_magnitudePlotUtils.ccolorPlotUtils.cgradPlotUtils.cgrad_colorsPlotUtils.cgrad_reversePlotUtils.cgradientsPlotUtils.cie_color_matchPlotUtils.clibrariesPlotUtils.clibraryPlotUtils.colorPlotUtils.color_librariesPlotUtils.color_typePlotUtils.coloralphaPlotUtils.colordiffPlotUtils.colormapPlotUtils.colormatchPlotUtils.comp1PlotUtils.comp2PlotUtils.comp3PlotUtils.cvecPlotUtils.darkenPlotUtils.default_cgradPlotUtils.deuteranopicPlotUtils.distinguishable_colorsPlotUtils.diverging_palettePlotUtils.evalPlotUtils.gamutmaxPlotUtils.gamutminPlotUtils.generate_colorgradientPlotUtils.get_color_palettePlotUtils.get_zvaluesPlotUtils.getgradientPlotUtils.getpctrangePlotUtils.gradient_from_listPlotUtils.grayPlotUtils.greenPlotUtils.hexPlotUtils.includePlotUtils.interpolatePlotUtils.interpolate_rgbPlotUtils.invisiblePlotUtils.iscgrad_symbolPlotUtils.isdarkPlotUtils.islightPlotUtils.lightenPlotUtils.lightness_from_backgroundPlotUtils.lightness_levelPlotUtils.make255PlotUtils.mapcPlotUtils.mapreducecPlotUtils.multilevel_ticksPlotUtils.optimize_datetime_ticksPlotUtils.optimize_ticksPlotUtils.optimize_ticks_typedPlotUtils.plot_colorPlotUtils.protanopicPlotUtils.redPlotUtils.reducecPlotUtils.register_color_libraryPlotUtils.register_gradient_colorsPlotUtils.rgb_stringPlotUtils.rgba_stringPlotUtils.sample_evenlyPlotUtils.sequential_palettePlotUtils.tritanopicPlotUtils.weighted_color_meanPlotUtils.whitebalancePlotUtils.xyYPlotUtils.xyYA"
},

]}
