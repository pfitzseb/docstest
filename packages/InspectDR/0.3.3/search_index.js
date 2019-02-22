var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#:art:-Galleries-(Sample-Output)-:art:-1",
    "page": "Readme",
    "title": ":art: Galleries (Sample Output) :art:",
    "category": "section",
    "text": ":chartwithupwards_trend: Sample plots (might be out of date).Generated With Other Modules::chartwithupwards_trend: CData.jl output.\n:chartwithupwards_trend: JuliaPlots/Plots.jl output."
},

{
    "location": "#InspectDR.jl:-Fast,-Interactive-Plots-1",
    "page": "Readme",
    "title": "InspectDR.jl: Fast, Interactive Plots",
    "category": "section",
    "text": "(Image: Build Status)| <img src=\"https://github.com/ma-laforge/FileRepo/blob/master/InspectDR/sampleplots/demo11.png\" width=\"425\"> | <img src=\"https://github.com/ma-laforge/FileRepo/blob/master/InspectDR/sampleplots/demo2.png\" width=\"425\"> | | :–-: | :–-: || <img src=\"https://github.com/ma-laforge/FileRepo/blob/master/SignalProcessing/sampleplots/demo15.png\" width=\"850\"> | | :–-: |"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "InspectDR is a fast plotting tool with a responsive GUI, targeting quick navigation of simulation results.  In design applications, InspectDR allows for efficient, interactive data exploration, thus shortening each iteration of the design cycle.Motivation: Despite their great quality, most of Julia\'s current plotting options were found to be either too slow, and/or provide inadequate interactivity for the author\'s needs.The InspectDR library is implemented using 3 distinct plot layers:Plot image layer: Implemented with the Cairo library, the plot image layer allows the user to render (multi-) plots as simple images.\nPlot widget layer: Library users can also integrate plots to their own GTK+ application by instantiating a single InspectDR widget.\nPlot application layer: Most end users will likely display/interact with plots/data using the built-in Julia/GTK+ multi-plot application.Users are encouraged to open an issue if it is unclear how to utilize a particular layer.  Documentation is a bit limited at the moment."
},

{
    "location": "#Features/Highlights-1",
    "page": "Readme",
    "title": "Features/Highlights",
    "category": "section",
    "text": "The following highlights a few interesting features of InspectDR:Publication-quality output.\nIncluded as a \"backend\" of JuliaPlots/Plots.jl.\nRelatively short load times / time to first plot.\nDesigned with larger datasets in mind:\nResponsive even with moderate (>200k points) datasets.\nConfirmed to handle 2GB datsets with reasonable speed on older desktop running Windows 7 (drag+pan of data area highly discouraged).\nSupport for Smith charts (admittance & impedance - see Plot Templates).\nSupport for various types of annotation:\nUser-programmable text, polyline, vertical & horizontal bars.\nDrag & drop &Delta;-markers (Measures/displays &Delta;x, &Delta;y & slope).\nInteractive mouse/keybindings.\nFast & simple way to pan/zoom into data.\nIn line with other similar tools.\nCreate drag & drop &Delta;-markers.\nLayout & Stylesheets.\nSee demo targeting IEEE publications @300 dpi\nAdd custom stylesheets.See following subsections for more information."
},

{
    "location": "#Responsive-1",
    "page": "Readme",
    "title": "Responsive",
    "category": "section",
    "text": "Quick to first plot, and easy to navigate data using supported mouse/keybindings<a name=\"F1Accel\"></a>"
},

{
    "location": "#\"F1\"-Acceleration-1",
    "page": "Readme",
    "title": "\"F1\" Acceleration",
    "category": "section",
    "text": "InspectDR.jl includes specialized algorithms to accellerate plotting of large \"F1\" datasets (functions of 1 argument) in order to maintain a good \"real-time\" (interactive) user experience.A dataset is defined as a function of 1 argument (\"F1\") if it satisfies:y = f(x), where x: sorted, real vectorExamples of \"F1\" datasets include time domain (y(x=time)) and frequncy domain (X(w)) data.\"F1\" acceleration is obtained by dropping points in order to speed up the rendering process.***IMPORTANT:*** \"F1\" acceleration tends to generate erroneous-looking plots whenever glyphs are displayed.  This is because the dropped points may become very noticeable.  Consequently, InspectDR will, by default, only apply \"F1\" acceleration on datasets drawn without glyphs (lines only).To change when InspectDR applies \"F1\" acceleration to drop points, look for the :droppoints entry in the Configuration/Defaults section."
},

{
    "location": "#D-Plot-Support-1",
    "page": "Readme",
    "title": "2D Plot Support",
    "category": "section",
    "text": "InspectDR.jl also supports generic 2D plotting.  More specifically, the tool is capable of plotting arbitrary 2D datasets that satisfy:(x,y) = (u[i], v[i]), for i in [1...N]Examples of of such plots (where x-values are not guaranteed to be sorted) include:Nyquist plots\nLissajous plots\nSmith/polar (S-Parameter) charts<a name=\"Bindings\"></a>"
},

{
    "location": "#Mouse/Keybindings-1",
    "page": "Readme",
    "title": "Mouse/Keybindings",
    "category": "section",
    "text": "InspectDR.jl supports keybindings to improve/accelerate user control.  The following tables lists supported bindings:Pan/Zoom Function Mouse/Key\nZoom out to full extents CTRL + f\nZoom out horizontally to full extents CTRL + h\nZoom out vertically to full extents CTRL + v\nBox zoom (in) right-click + mousemove\nZoom in / zoom out + / -\nZoom in / zoom out CTRL + mousewheel\nPan up / pan down &uArr; / &dArr;\nPan up / pan down mousewheel\nPan left / pan right &lArr; / &rArr;\nPan left / pan right SHIFT + mousewheel\nPan anywhere (SHIFT + left-click) + mousemoveAnnotate Function Mouse/Key\nAdd reference marker r\nAdd &Delta;-marker (rel. to last reference) d\nAdd &Delta;-marker & set as reference D\nMove marker left-click + mousemove control point\nDelete marker DEL (when moving marker)\nMove &Delta;-marker info box left-click + mousemove box\nRe-center &Delta;-marker info box 0 (when moving box)"
},

{
    "location": "#Mouse-Pan/Zoom-Locks-1",
    "page": "Readme",
    "title": "Mouse Pan/Zoom Locks",
    "category": "section",
    "text": "There are also keybindings to lock directionnality during mouse pan / zoom operations:Function Key\nLock along horizontal h\nLock along vertical v\nAllow both directions b"
},

{
    "location": "#Select-Documentation-1",
    "page": "Readme",
    "title": "Select Documentation",
    "category": "section",
    "text": "Note that many types & functions are not exported from InspectDR in order to avoid namespace pollution.  That being said, the module name will often be omitted below in an attempt to improve readability."
},

{
    "location": "#Plot-Objects-1",
    "page": "Readme",
    "title": "Plot Objects",
    "category": "section",
    "text": "Principal objects:InspectDR.Plot: An abstract plot object.\nInspectDR.Plot2D <: Plot:  A 2D plot object.  Construct empty 2D plot using InspectDR.Plot2D(title=\"Plot Title\").\nInspectDR.Multiplot:  A multi-plot object.  Construct empty multi-plot using: InspectDR.Multiplot(title=\"Multiplot Title\").Subplots (T<:Plot) are added to a multi-plot object using the add() method:mplot = InspectDR.Multiplot()\nplot1 = InspectDR.Plot2D()\nplot2 = InspectDR.Plot2D()\n\nadd(mplot, plot1)\nadd(mplot, plot2)Similarly, the add() method adds waveforms to plots/subplots:wfrm = add(plot1, x, y, id=\"Waveform label\")WARNING: Only Vector data can be added (AbstractVector/Range not currently supported)."
},

{
    "location": "#Displaying-Plots-1",
    "page": "Readme",
    "title": "Displaying Plots",
    "category": "section",
    "text": "InspectDR provides the GtkDisplay object derived from Base.Multimedia.Display.  GtkDisplay is used in combination with Base.display(), to spawn a new instance of a GTK-based GUI.To display a single plot::Plot object, one simply calls:display(InspectDR.GtkDisplay(), plot)Similarly, to display mplot::Multiplot object, one calls:display(InspectDR.GtkDisplay(), mplot)<a name=\"Templates_Scales\"></a>"
},

{
    "location": "#Plot-Templates/Axis-Scales-1",
    "page": "Readme",
    "title": "Plot Templates/Axis Scales",
    "category": "section",
    "text": "In order to support stacked graphs with independent y-axes (tied to the same x-axis), specifying axis scales is a bit involved:InspectDR.Plot2D.xscale controls the x-axis scale.\nInspectDR.Plot2D.strips[STRIP_INDEX].yscale controls the y-axis scale.To streamline control over plot axes/grids/labels/..., it is highly recommended to use the following plot templates:Plot2D(xscale, yscalelist; kwargs...): Generic 2D plot template.\nPlot2D(:lin, :log, title=\"title\", xlabel=\"X\", ylabels=[\"log(Y)\"]): Construct plot with a linear X-axis & log10 Y-axis.\nPlot2D(:log10, [:dB20, :lin, :lin], title=\"title\", xlabel=\"X\", ylabels=[\"Y1 (dB)\", \"Y2\", \"Y3\"]): Construct plot with a log10 X-axis, and 2 Y-strips: the top-most with a dB20 Y-scale, and the next two with linear Y-scale.\nbodeplot(; kwargs...): Template for generating Bode plots.\nbodeplot(): Default kwargs already set: xlabel=\"Frequency (Hz)\", ylabels=[\"Magnitude (dB)\", \"Phase (°)]\"`.\ntransientplot(yscalelist; kwargs...): Template for plotting transient data.\ntransientplot([:lin, :lin, :lin], title=\"title\", ylabels=[\"Voltage\", \"Voltage\", \"Current\"]): xlabel already set to \"Time (s)\", by default.\nsmithchart(TYPE; ref, kwargs...): Template for plotting onto a Smith Chart.\nsmithchart(:Z, ref=50): Impedance (Z) Smith Chart with a 50&Omega; reference. Default kwargs already set: xlabel=\"Real(Γ)\", ylabels=[\"Imaginary(Γ)\"]\".\nsmithchart(:Y, ref=75): Admittance (Y) Smith Chart with a 75&Omega; reference.NOTE: X/Y-axis scales are specified using one of the following ::Symbols::lin\n:log10, :log (= :log10)\n:ln, :log2: Grid lines might need improvement here.\n:dB20, :dB10<a name=\"Layout_Stylesheets\"></a>"
},

{
    "location": "#Layout-and-Stylesheets-1",
    "page": "Readme",
    "title": "Layout & Stylesheets",
    "category": "section",
    "text": "The appearance of InspectDR plots is configured through the .layout properties of ::Plot2D & ::Multiplot objects.  Until better documentation is available, one is encouraged to look at the fields of the PlotLayout & MultiplotLayout for more information:#To control apperance of Plot2D elements:\n?InspectDR.PlotLayout\n\n#To control apperance of Multiplot elements:\n?InspectDR.MultiplotLayoutThe .layout properties should be accessed using the [] operators, using the field names names of PlotLayout / MultiplotLayout as arguments:plot.layout[:valloc_top] = 20 #Modify space above data area"
},

{
    "location": "#Pre-defined-Stylesheets-1",
    "page": "Readme",
    "title": "Pre-defined Stylesheets",
    "category": "section",
    "text": "InspectDR uses \"Stylesheets\" to control the default values of plot elements.  To apply a different stylesheet to a given plot, use the setstyle! methods:InspectDR.setstyle!(::Plot2D, stylesheet::Symbol; kwargs...)\nInspectDR.setstyle!(::Multiplot, stylesheet::Symbol; kwargs...)Currently supported values for stylesheet include::screen\n:IEEECustom stylesheets are added by extending InspectDR.getstyle(), as done in stylesheets.jl (Search for: StyleID{:screen} & StyleID{:IEEE})."
},

{
    "location": "#Legends-1",
    "page": "Readme",
    "title": "Legends",
    "category": "section",
    "text": "At this point in time, legends have limited configurability.  When displayed, legends will consume fixed horizontal real-estate.  The idea is to display a large number of labels without hiding the data area.In order to display the legend of a plot::Plot2D object, one would set:plot.layout[:enable_legend] = true #Enables legend\nplot.layout[:halloc_legend] = 150 #Control size of legend<a name=\"Config_Defaults\"></a>"
},

{
    "location": "#Configuration/Defaults-1",
    "page": "Readme",
    "title": "Configuration/Defaults",
    "category": "section",
    "text": "Default InspectDR.jl settings can be overwritten once the module is loaded by editing the InspectDR.defaults structure:#Dissalow SVG MIME output for performance reasons:\nInspectDR.defaults.rendersvg = false\n\n#Change when plots drop points to enable \"F1\"-acceleration:\n#(One of: {:always, :never, :noglyph, :hasline})\nInspectDR.defaults.pointdropmatrix = InspectDR.PDM_DEFAULTS[:always]\n\n#Enable time stamp & legend:\nInspectDR.defaults.plotlayout[:enable_timestamp] = true\nInspectDR.defaults.plotlayout[:enable_legend] = true\n\n#Set data-area dimensions (saving single plot):\nInspectDR.defaults.plotlayout[:halloc_data] = 500\nInspectDR.defaults.plotlayout[:valloc_data] = 350\n\n#Set plot dimensions (saving multi-plot):\nInspectDR.defaults.mplotlayout[:halloc_plot] = 500\nInspectDR.defaults.mplotlayout[:valloc_plot] = 350\n\n#Configure # of columns in multi-plot outputs:\nInspectDR.defaults.mplotlayout[:ncolumns] = 2Until better documentation is available, one is encouraged to look at the fields of the PlotLayout for more information:?InspectDR.PlotLayoutDefaults can also be specified before importing InspectDR.jl with the help of Main.DEFAULTS_INSPECTDR::Dict.  Simply create the variable in your ~/.juliarc.jl file, using the following pattern:DEFAULTS_INSPECTDR = Dict(\n	:rendersvg => false,\n\n	#Special options available @ initialization:\n	:droppoints => :always, #One of: {:always, :never, :noglyph, :hasline}\n	:notation_x => :SI,   #Change x-axis notation\n	:notation_y => :SI,   #Change y-axis notation\n	:fontname => \"Sans\",  #Change default font family\n	:fontscale => 1.2,    #Scale up/down font default sizes\n\n	#Basic plot options:\n	:enable_timestamp => true,\n	:enable_legend => true,\n	:halloc_legend => 150,\n\n	#Supported multiplot options:\n	:ncolumns => 2,\n	:halloc_plot => 500,\n	:valloc_plot => 350,\n)<a name=\"SampleUsage\"></a>"
},

{
    "location": "#Sample-Usage-1",
    "page": "Readme",
    "title": "Sample Usage",
    "category": "section",
    "text": "Sample code to construct InspectDR objects can be found here.Sample IJulia (Jupyter) notebooks can be found here.<a name=\"KnownLimitations\"></a>"
},

{
    "location": "#Known-Limitations-1",
    "page": "Readme",
    "title": "Known Limitations",
    "category": "section",
    "text": "Documentation is a bit limited at the moment.  See Sample Usage to learn from examples.\nAPI is still a bit rough.  User often has to manipulate data structures directly.\nWorkaround: Use JuliaPlots/Plots.jl as a \"frontend\" (increases plot times).\nFont control is not ideal.  The default font might not be available on all platforms - and the fallback font might not have Unicode characters to display exponent values (ex: 10⁻¹⁵).  Some Greek characters might also be missing.\nWorkaround: Overwrite default font, as described in Configuration/Defaults.\nLegends not very configurable (currently optimized to display many labels @ cost of horizontal real-estate).\nDoes not yet render plot data in separate thread (will improve interactive experience with large datasets).\nMouse events currently function even outside data area (a bit odd).\nSignificant slowdowns observed when zooming deep into non-F1 data... Can likely be solved by discarding data outside plot extents.\nWorkaround: make sure x-values are sorted (F1-acceleration discards data & is less prone to slowdowns).\nBy default, \"F1\"-acceleration is only applied to datasets drawn without glyphs (lines only).\nLook for the :droppoints entry in the Configuration/Defaults section to change this behaviour."
},

{
    "location": "#Compatibility-1",
    "page": "Readme",
    "title": "Compatibility",
    "category": "section",
    "text": "Extensive compatibility testing of InspectDR.jl has not been performed.  The module has been tested using the following environment(s):Windows / Linux / Julia-0.7.0 / Gtk 0.16.1 (GTK+ 3) / Cairo 0.5.3"
},

{
    "location": "#Disclaimer-1",
    "page": "Readme",
    "title": "Disclaimer",
    "category": "section",
    "text": "The InspectDR.jl module is not yet mature.  Expect significant changes."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "InspectDR.ALIGN_BOTTOMInspectDR.ALIGN_HCENTERInspectDR.ALIGN_HMASKInspectDR.ALIGN_LEFTInspectDR.ALIGN_MAPInspectDR.ALIGN_RIGHTInspectDR.ALIGN_TOPInspectDR.ALIGN_VCENTERInspectDR.ALIGN_VMASKInspectDR.AbstractGridLinesInspectDR.AbstractStyleInspectDR.AnnotationInspectDR.AnnotationCoordInspectDR.AnnotationGroupInspectDR.AreaAttributesInspectDR.AttributeListInspectDR.AxisCoordInspectDR.AxisScaleInspectDR.CAlignmentInspectDR.COLOR_BLACKInspectDR.COLOR_BLUEInspectDR.COLOR_GREENInspectDR.COLOR_REDInspectDR.COLOR_TRANSPARENTInspectDR.COLOR_WHITEInspectDR.COORDSTAT_NONEInspectDR.CTRLPOINT_ATTRInspectDR.CTRLPOINT_RADIUSInspectDR.CURSOR_BOXSELECTInspectDR.CURSOR_DEFAULTInspectDR.CURSOR_MOVEInspectDR.CURSOR_PANInspectDR.CairoBufferedPlotInspectDR.CoordSystemInspectDR.CtrlElementInspectDR.CtrlMarkerInspectDR.CtrlMarkerGroupInspectDR.DEFAULT_DATA_HEIGHTInspectDR.DEFAULT_DATA_WIDTHInspectDR.DEFAULT_FONTNAMEInspectDR.DEFAULT_PLOT_HEIGHTInspectDR.DEFAULT_PLOT_WIDTHInspectDR.DInfInspectDR.DNaNInspectDR.DRealInspectDR.DTPPOINTS_PER_INCHInspectDR.DWaveformInspectDR.DataCoordInspectDR.DefaultsInspectDR.DeviceCoordInspectDR.DirectionalVectorInspectDR.ExponentFormattingInspectDR.FontInspectDR.GLYPH_ASTERISKInspectDR.GLYPH_CIRCLEInspectDR.GLYPH_CROSSInspectDR.GLYPH_DIAMONDInspectDR.GLYPH_DTRIANGLEInspectDR.GLYPH_HEPTAGONInspectDR.GLYPH_HEXAGONInspectDR.GLYPH_HLINEInspectDR.GLYPH_LINECROSSInspectDR.GLYPH_LINEXCROSSInspectDR.GLYPH_LTRIANGLEInspectDR.GLYPH_OCTAGONInspectDR.GLYPH_PENTAGONInspectDR.GLYPH_RTRIANGLEInspectDR.GLYPH_SQUAREInspectDR.GLYPH_STAR4InspectDR.GLYPH_STAR5InspectDR.GLYPH_STAR6InspectDR.GLYPH_STAR7InspectDR.GLYPH_STAR8InspectDR.GLYPH_UTRIANGLEInspectDR.GLYPH_VLINEInspectDR.GLYPH_XCROSSInspectDR.GRID_MANTSTEPSInspectDR.GRID_MANTSTEP_EXPOFFSETInspectDR.GRID_MANTTHRESHInspectDR.GRID_MINORDIVInspectDR.GdkKeySyms_MinusInspectDR.GdkKeySyms_PlusInspectDR.GlyphInspectDR.GlyphAttributesInspectDR.GlyphCircleInspectDR.GlyphLineSegmentsInspectDR.GlyphPolylineInspectDR.Graph2DInfoInspectDR.GraphStripInspectDR.GridCurvInspectDR.GridLinesInspectDR.GridLinesAutoInspectDR.GridRectInspectDR.GridSmithInspectDR.GtkAvailableInspectDR.GtkDisplayInspectDR.GtkMouseOverInspectDR.GtkPlotInspectDR.Gtk_addmenuInspectDR.Gtk_addmenuitemInspectDR.HVMarkerInspectDR.HandlerInfoInspectDR.IDatasetInspectDR.ISMovingMarkerInspectDR.ISMovingΔInfoInspectDR.ISNormalInspectDR.ISPanningDataInspectDR.ISSelectingAreaInspectDR.IWaveformInspectDR.InputStateInspectDR.InputXfrm1DInspectDR.InputXfrm1DSpecInspectDR.InputXfrm2DInspectDR.InspectDRInspectDR.KeyBindingsInspectDR.KeyMapInspectDR.LinScaleInspectDR.LineAttributesInspectDR.LineStyleInspectDR.LinearRangeDisplayInfoInspectDR.LogScaleInspectDR.MAPEXT2MIMEInspectDR.MARKER_COLORANTInspectDR.MARKER_LINEInspectDR.MIMEallInspectDR.MIMEepsInspectDR.MIMEeps2InspectDR.MIMEpdfInspectDR.MIMEpngInspectDR.MIMEpsInspectDR.MIMEsvgInspectDR.MODIFIERS_SUPPORTEDInspectDR.MODIFIER_ALTInspectDR.MODIFIER_CTRLInspectDR.MODIFIER_SHIFTInspectDR.MultiplotInspectDR.MultiplotLayoutInspectDR.MultiplotStyleInspectDR.NLTransformInspectDR.NoRangeDisplayInfoInspectDR.NormCoordInspectDR.NullOrInspectDR.NumericFormattingInspectDR.PANGO_ELLIPSIZE_ENDInspectDR.PAN_STEPRATIOInspectDR.PCanvas2DInspectDR.PDM_ALWAYSInspectDR.PDM_DEFAULTSInspectDR.PDM_HASLINEInspectDR.PDM_NEVERInspectDR.PDM_NOGLYPHInspectDR.PExtents1DInspectDR.PExtents2DInspectDR.PlotInspectDR.Plot2DInspectDR.Plot2DInfoInspectDR.PlotAnnotationInspectDR.PlotCanvasInspectDR.PlotGridInspectDR.PlotLayoutInspectDR.PlotStyleInspectDR.PlotSylesheetInspectDR.PlotWidgetInspectDR.PointInspectDR.Point2DInspectDR.PointDropMatrixInspectDR.PolylineAnnotationInspectDR.Pos2DOffsetInspectDR.RangeDisplayInfoInspectDR.SMITHLABEL_OFFSETInspectDR.SUPPORTED_GLYPHSInspectDR.StripInfoInspectDR.StyleDefaultInspectDR.StyleDefaultTypeInspectDR.StyleIDInspectDR.StyleTypeInspectDR.TEXTH_HACK_STRInspectDR.TextAnnotationInspectDR.TickLabelFormattingInspectDR.TickLabelStyleInspectDR.Transform2DInspectDR.TypedCoordInspectDR.UndefinedGridLinesInspectDR.Vector2DInspectDR.WaveformInspectDR.XAXIS_POS_STEPRESInspectDR.XAXIS_SCALEMAXInspectDR.ZOOM_STEPRATIOInspectDR._CairoSurfaceInspectDR._GtkInspectDR.__init__InspectDR._addInspectDR._evalInspectDR._extaxis2readInspectDR._extread2axisInspectDR._graphboundsInspectDR._initializeInspectDR._polygongeneratorInspectDR._reduceInspectDR._reduce_dropptsInspectDR._reduce_nodropInspectDR._resetInspectDR._setdefaultsInspectDR._setlinestyleInspectDR._setxextentsInspectDR._setyextentsInspectDR._showInspectDR._stargeneratorInspectDR._textheightInspectDR._textwidthInspectDR._writeInspectDR._yaxisscaleInspectDR.activestripInspectDR.addInspectDR.addrefmarkerInspectDR.addΔmarkerInspectDR.addΔmarkerrefInspectDR.aspect_squareInspectDR.atextInspectDR.autofit2font!InspectDR.axis2readInspectDR.base10expInspectDR.bodeplotInspectDR.boxzoom_cancelInspectDR.boxzoom_completeInspectDR.boxzoom_setendInspectDR.boxzoom_setstartInspectDR.cairo_circleInspectDR.can_focusInspectDR.cancelmoveInspectDR.cancelmove_ΔinfoInspectDR.cb_keypressInspectDR.cb_mnufilecloseInspectDR.cb_mnufileexportInspectDR.cb_mousemoveInspectDR.cb_mousepressInspectDR.cb_mousereleaseInspectDR.cb_mousescrollInspectDR.cb_scalechangedInspectDR.cb_wnddestroyedInspectDR.centerΔinfoInspectDR.checkcompat_plotsInspectDR.clearInspectDR.clearsubplotsInspectDR.coordInspectDR.coord_gridInspectDR.createmarkerInspectDR.databoundsInspectDR.defaultsInspectDR.deletemarkerInspectDR.draw_valueInspectDR.drawglyphInspectDR.drawglyph_safeInspectDR.drawlineInspectDR.drawrectangleInspectDR.droppointsInspectDR.evalInspectDR.extrema_nanInspectDR.finiteornanInspectDR.focusInspectDR.focus_stripInspectDR.formatted_expInspectDR.gdk_cursor_newInspectDR.gdk_window_set_cursorInspectDR.genexpr_attriblistbuilderInspectDR.getextentsInspectDR.getextents_axisInspectDR.getglyphcolorInspectDR.getglyphfillInspectDR.getrealimagInspectDR.getstyleInspectDR.getxextents_axisInspectDR.getxextents_fullInspectDR.getyextents_axisInspectDR.getyextents_fullInspectDR.glyphInspectDR.graph_hInspectDR.graphboundsInspectDR.graphbounds_listInspectDR.grid1InspectDR.griddims_autoInspectDR.gridlinesInspectDR.handleevent_keypressInspectDR.handleevent_mousemoveInspectDR.handleevent_mousepressInspectDR.handleevent_mousereleaseInspectDR.handleevent_mousescrollInspectDR.handleevent_plothoverInspectDR.handleevent_scalechangedInspectDR.hasglyphInspectDR.haslineInspectDR.hittestInspectDR.hittest_ΔinfoInspectDR.hmarkerInspectDR.hoverfmtInspectDR.hvmarkerInspectDR.ignoreuserinputInspectDR.includeInspectDR.initialize_cursorsInspectDR.interpolateInspectDR.invalidate_datalistInspectDR.invalidate_extentsInspectDR.invalidbuffersizeInspectDR.isglyphInspectDR.isincreasingInspectDR.keybindingsInspectDR.legend_renderInspectDR.legend_renderitemInspectDR.lineInspectDR.linearstep_prettyInspectDR.locdir_anyInspectDR.locdir_hInspectDR.locdir_vInspectDR.map2axisInspectDR.map2devInspectDR.modifiers_pressedInspectDR.mousepan_cancelInspectDR.mousepan_completeInspectDR.mousepan_deltaInspectDR.mousepan_moveInspectDR.mousepan_setstartInspectDR.number_fmtInspectDR.overwrite!InspectDR.overwritefont!InspectDR.overwritestyleattribInspectDR.pan_downInspectDR.pan_leftInspectDR.pan_rightInspectDR.pan_upInspectDR.pan_xratioInspectDR.pan_yratioInspectDR.plotboundsInspectDR.preprocess_dataInspectDR.ptmap_rotateInspectDR.raiseeventInspectDR.raiseevent_plothoverInspectDR.read2axisInspectDR.refreshInspectDR.refresh!InspectDR.renderInspectDR.render_axesInspectDR.render_axisscalelabelInspectDR.render_baseannotationInspectDR.render_ctrlpointInspectDR.render_dataInspectDR.render_graphframeInspectDR.render_gridInspectDR.render_hlinesInspectDR.render_markercoordInspectDR.render_powerInspectDR.render_rcircleInspectDR.render_rcirclelabelInspectDR.render_rcirclelabelsInspectDR.render_rcirclesInspectDR.render_ticklabelInspectDR.render_ticksInspectDR.render_userannotationInspectDR.render_vlinesInspectDR.render_xcircleInspectDR.render_xcirclelabelInspectDR.render_xcirclelabelsInspectDR.render_xcirclesInspectDR.render_xticksInspectDR.render_yticksInspectDR.render_ΔinfoInspectDR.renderfillInspectDR.rendernansInspectDR.scalectrl_applyInspectDR.scalectrl_enabledInspectDR.selectionbox_drawInspectDR.setclipInspectDR.setextents_axisInspectDR.setfontInspectDR.setlinestyleInspectDR.setstate_normalInspectDR.setstyle!InspectDR.settitleInspectDR.setxextentsInspectDR.setxextents_axisInspectDR.setxfrmInspectDR.setyextentsInspectDR.setyextents_axisInspectDR.size_autoInspectDR.smithchartInspectDR.smithlabelInspectDR.squareboundsInspectDR.sync_subplotsInspectDR.text_dimsInspectDR.textextents_whInspectDR.textoffsetInspectDR.transientplotInspectDR.unionInspectDR.update_ddataInspectDR.value_posInspectDR.vecnormInspectDR.vmarkerInspectDR.window_closeInspectDR.wipeInspectDR.withsurfInspectDR.write_epsInspectDR.write_pdfInspectDR.write_pngInspectDR.write_svgInspectDR.xvaluesInspectDR.yvaluesInspectDR.zoomInspectDR.zoom_fullInspectDR.zoom_hfullInspectDR.zoom_inInspectDR.zoom_outInspectDR.zoom_vfullInspectDR.zoom_xfull"
},

]}
