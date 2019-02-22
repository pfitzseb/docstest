var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Winston:-2D-Plotting-for-Julia-1",
    "page": "Readme",
    "title": "Winston: 2D Plotting for Julia",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.add(\"Winston\")"
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "Winston offers an easy to use plot command to create figures without any fuss. After Winston is loaded by typing using Winston, the most basic plot can be created by just writingjulia> plot(x, y)There is also an oplot command to add objects into already existing plots. To add something to this, usejulia> oplot(x2, y2)And finally save it withjulia> savefig(\"figure.png\")   # .eps, .pdf, & .svg are also supportedMore elaborate figures can be created by using the quick option for color, line, and symbolsjulia> plot(x, y, \"r--\")This creates a red dashed curve. Abbreviations for colors and lines/symbols are same as in matplotlib. The plot command can also take more then one set of vectors and style options, like thisjulia> plot(x, y, \"b:\", x2, y2, \"g^\")which creates a blue dotted line and green triangles."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Hosted by Read The Docs."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Winston./Winston.ARPACKExceptionWinston.AbstractPainterWinston.AbstractProjection1Winston.AbstractProjection2Winston.AdjointWinston.BLASWinston.BidiagonalWinston.BoundingBoxWinston.BoxWinston.BoxLabelWinston.BoxPainterWinston.BunchKaufmanWinston.CairoRendererWinston.CholeskyWinston.CholeskyPivotedWinston.ColoredPointsWinston.ColoredSymbolsPainterWinston.CombPainterWinston.ContourcWinston.CurveWinston.DataInsetWinston.DataLabelWinston.DiagonalWinston.EigenWinston.ErrorBarWinston.ErrorBarsXWinston.ErrorBarsYWinston.FactorizationWinston.FigureWinston.FillAboveWinston.FillBelowWinston.FillBetweenWinston.FillComponentWinston.FrameWinston.FramedArrayWinston.FramedBarWinston.FramedComponentWinston.FramedPlotWinston.GeneralizedEigenWinston.GeneralizedSVDWinston.GeneralizedSchurWinston.GraphicsWinston.GraphicsContextWinston.GraphicsDeviceWinston.GroupPainterWinston.HalfAxisWinston.HalfAxisXWinston.HalfAxisYWinston.HasAttrWinston.HasStyleWinston.HermitianWinston.HessenbergWinston.HistogramWinston.IWinston.ImageWinston.ImageComponentWinston.ImagePainterWinston.IntervalWinston.LAPACKWinston.LAPACKExceptionWinston.LDLtWinston.LQWinston.LUWinston.LabelComponentWinston.LabelsPainterWinston.LegendWinston.LineComponentWinston.LinePainterWinston.LineXWinston.LineYWinston.LinearAlgebraWinston.LinearProjectionWinston.LogProjectionWinston.LowerTriangularWinston.PaintContextWinston.ParametricFunctionPairWinston.PathPainterWinston.PlotWinston.PlotArgWinston.PlotAttributesWinston.PlotComponentWinston.PlotCompositeWinston.PlotContainerWinston.PlotContextWinston.PlotGeometryWinston.PlotInsetWinston.PlotLabelWinston.PointWinston.PointsWinston.PolarProjectionWinston.PolygonPainterWinston.PosDefExceptionWinston.QRWinston.QRPivotedWinston.RankDeficientExceptionWinston.RectangleWinston.RendererWinston.RendererStateWinston.SVDWinston.ScatterPlotPointsWinston.SchurWinston.SeparableProjection2Winston.SingularExceptionWinston.SlopeWinston.StemsWinston.StrutPainterWinston.SymTridiagonalWinston.SymbolDataComponentWinston.SymbolPainterWinston.SymbolsPainterWinston.SymmetricWinston.SymmetricErrorBarsXWinston.SymmetricErrorBarsYWinston.TableWinston.TextPainterWinston.TransposeWinston.TridiagonalWinston.UniformScalingWinston.UnitLowerTriangularWinston.UnitUpperTriangularWinston.UpperTriangularWinston.Vec2Winston.WinstonWinston.WinstonDisplayWinston.WinstonExceptionWinston.\\Winston._AliasWinston._GridWinston._InsetWinston.__halign_offsetWinston.__pl_style_funcWinston.__valign_offsetWinston._alignWinston._atoxWinston._attr_mapWinston._context1Winston._context2Winston._current_colormapWinston._data_drawWinston._default_kernel2dWinston._displayWinston._dposWinston._fontsize_relativeWinston._format_ticklabelWinston._frame_bboxWinston._frame_drawWinston._frames_bboxWinston._frames_drawWinston._get_contextWinston._gridWinston._holdWinston._ijulia_heightWinston._ijulia_widthWinston._interceptWinston._kw_renameWinston._labels_drawWinston._limitsWinston._limits_nonuniformWinston._limits_uniformWinston._logWinston._magformWinston._make_gridWinston._make_spineWinston._make_strutWinston._make_ticklabelsWinston._make_ticksWinston._parse_specWinston._posWinston._process_keywordsWinston._pwinstonWinston._rangeWinston._range_unionWinston._sideWinston._size_relativeWinston._str_size_to_ptsWinston._subticksWinston._subticks_linearWinston._subticks_logWinston._ticklabelsWinston._ticklist_linearWinston._ticksWinston._ticks_default_linearWinston._ticks_default_logWinston._ticks_num_linearWinston._ticks_num_logWinston._winston_configWinston._xWinston._yWinston.addWinston.add2Winston.addfigWinston.adjointWinston.adjoint!Winston.arcWinston.args2dictWinston.aspect_ratioWinston.axWinston.ax1Winston.axpby!Winston.axpy!Winston.barWinston.barhWinston.bbox_to_rectWinston.boundingboxWinston.bounds_withinWinston.bunchkaufmanWinston.bunchkaufman!Winston.cellbbWinston.centerWinston.chartokensWinston.choleskyWinston.cholesky!Winston.circleWinston.clearWinston.clipWinston.clip_preserveWinston.close_pathWinston.closeallWinston.closefigWinston.color_to_rgbWinston.colormapWinston.composeWinston.compose_interiorWinston.condWinston.condskeelWinston.config_optionsWinston.config_valueWinston.contourcWinston.copy_transpose!Winston.copyto!Winston.creategcWinston.crossWinston.curfigWinston.curveWinston.data2rgbWinston.data_to_deviceWinston.default_colorWinston.deformWinston.deprojectWinston.detWinston.device_to_dataWinston.device_to_userWinston.device_to_user!Winston.device_to_user_distance!Winston.diagWinston.diagindWinston.diagmWinston.diagonalWinston.dotWinston.dropfigWinston.eigenWinston.eigen!Winston.eigmaxWinston.eigminWinston.eigvalsWinston.eigvals!Winston.eigvecsWinston.errorbarWinston.errs_to_nanWinston.evalWinston.exteriorWinston.factorizeWinston.figureWinston.fileWinston.fillWinston.fill_preserveWinston.fplotWinston.fplot_pointsWinston.gcfWinston.get_contextWinston.getattrWinston.getcomponentsWinston.getfigWinston.getgcWinston.ghfWinston.givensWinston.gridWinston.grisuWinston.gtkdestroyWinston.gtkwindowWinston.hasattrWinston.hasfigWinston.heightWinston.hessenbergWinston.hessenberg!Winston.histWinston.holdWinston.imageWinston.imagescWinston.includeWinston.iniattrWinston.inner_canvasWinston.interiorWinston.isdiagWinston.ishermitianWinston.isincompleteWinston.isinsideWinston.isposdefWinston.isposdef!Winston.isrowvecWinston.issuccessWinston.issymmetricWinston.istrilWinston.istriuWinston.isvectorWinston.jetrgbWinston.kronWinston.kw_defaultsWinston.kw_getWinston.kw_initWinston.kw_setWinston.layout_textWinston.ldiv!Winston.ldltWinston.ldlt!Winston.legendWinston.limitsWinston.limits2Winston.lineWinston.line_toWinston.lmul!Winston.logabsdetWinston.logdetWinston.loglogWinston.lowerleftWinston.lowerrightWinston.lowrankdowndateWinston.lowrankdowndate!Winston.lowrankupdateWinston.lowrankupdate!Winston.lqWinston.lq!Winston.luWinston.lu!Winston.lyapWinston.makeWinston.make_keyWinston.margin_expandWinston.move_toWinston.mul!Winston.mynextfloatWinston.myprevfloatWinston.new_pathWinston.new_sub_pathWinston.nextfigWinston.normWinston.normalizeWinston.normalize!Winston.nullspaceWinston.oplotWinston.opnormWinston.ordschurWinston.ordschur!Winston.output_surfaceWinston.overrideWinston.page_composeWinston.paintWinston.pinvWinston.plotWinston.plothistWinston.plothist2dWinston.polygonWinston.pop_styleWinston.projectWinston.push_styleWinston.qrWinston.qr!Winston.rankWinston.rdiv!Winston.rectangleWinston.rel_line_toWinston.rel_move_toWinston.renderWinston.reset_clipWinston.reset_transformWinston.restoreWinston.restore_stateWinston.rmcomponentsWinston.rmul!Winston.rotateWinston.saveWinston.save_stateWinston.saveepsWinston.savefigWinston.savepdfWinston.savepngWinston.savesvgWinston.scaleWinston.scatterWinston.schurWinston.schur!Winston.semilogxWinston.semilogyWinston.setWinston.set_clip_rectWinston.set_colorWinston.set_coordinatesWinston.set_coordsWinston.set_dashWinston.set_default_plot_sizeWinston.set_line_widthWinston.set_sourceWinston.set_source_rgbWinston.set_source_rgbaWinston.setattrWinston.shiftWinston.spyWinston.stemWinston.strokeWinston.stroke_preserveWinston.stroke_transformedWinston.stroke_transformed_preserveWinston.styleWinston.svdWinston.svd!Winston.svdvalsWinston.svdvals!Winston.svgWinston.switchfigWinston.sylvesterWinston.symbol_funcsWinston.symbolsWinston.textWinston.textdrawWinston.textheightWinston.textwidthWinston.timeplotWinston.titleWinston.trWinston.translateWinston.transposeWinston.transpose!Winston.trilWinston.tril!Winston.triuWinston.triu!Winston.upperleftWinston.upperrightWinston.user_rangeWinston.user_to_deviceWinston.user_to_device!Winston.user_to_device_distance!Winston.vertWinston.widthWinston.windowWinston.with_aspect_ratioWinston.write_to_surfaceWinston.xlabelWinston.xlimWinston.xmaxWinston.xminWinston.xrangeWinston.xx2ptWinston.ylabelWinston.ylimWinston.ymaxWinston.yminWinston.yrangeWinston.×Winston.⋅"
},

]}
