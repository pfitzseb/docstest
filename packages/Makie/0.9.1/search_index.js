var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<div align=\"center\"> <img src=\"https://raw.githubusercontent.com/JuliaPlots/Makie.jl/sd/abstract/docs/src/assets/logo.png\" alt=\"Makie.jl\" width=\"480\"> </div>From the japanese word Maki-e, which is a technique to sprinkle lacquer with gold and silver powder. Data is basically the gold and silver of our age, so lets spread it out beautifully on the screen!Documentation: [![][docs-stable-img]][docs-stable-url]Build status: [![][gitlab-img]][gitlab-url][gitlab-img]: https://gitlab.com/JuliaGPU/Makie.jl/badges/master/pipeline.svg [gitlab-url]: https://gitlab.com/JuliaGPU/Makie.jl/pipelines [docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: http://makie.juliaplots.org/stable/"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia>]\npkg> add Makie\npkg> test MakieIf you plan to use Makie#master, you likely also need to check out AbstractPlotting#master and GLMakie#master."
},

{
    "location": "#Dependencies-1",
    "page": "Readme",
    "title": "Dependencies",
    "category": "section",
    "text": "You will need to have ffmpeg in the path to run the video recording examples. On linux you also need to add the following to get GLFW to build (if you don\'t have those already):sudo apt-get install ffmpeg cmake xorg-dev"
},

{
    "location": "#Examples-from-the-documentation:-1",
    "page": "Readme",
    "title": "Examples from the documentation:",
    "category": "section",
    "text": "(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )"
},

{
    "location": "#Mouse-interaction:-1",
    "page": "Readme",
    "title": "Mouse interaction:",
    "category": "section",
    "text": "<img src=\"https://user-images.githubusercontent.com/1010467/31519651-5992ca62-afa3-11e7-8b10-b66e6d6bee42.png\" width=\"489\">"
},

{
    "location": "#Animating-a-surface:-1",
    "page": "Readme",
    "title": "Animating a surface:",
    "category": "section",
    "text": "<img src=\"https://user-images.githubusercontent.com/1010467/31519521-fd67907e-afa2-11e7-8c43-5f125780ae26.png\" width=\"489\">"
},

{
    "location": "#Complex-examples-1",
    "page": "Readme",
    "title": "Complex examples",
    "category": "section",
    "text": "<a href=\"https://github.com/JuliaPlots/Makie.jl/blob/master/examples/bigdata.jl#L2\"><img src=\"https://user-images.githubusercontent.com/1010467/48002153-fc15a680-e10a-11e8-812d-a5d717c47288.gif\" width=\"480\"/></a>"
},

{
    "location": "#IJulia-examples:-1",
    "page": "Readme",
    "title": "IJulia examples:",
    "category": "section",
    "text": "(Image: )"
},

{
    "location": "#Precompilation-1",
    "page": "Readme",
    "title": "Precompilation",
    "category": "section",
    "text": "You can compile binary for Makie and add it to your system image for fast plotting times with no JIT overhead. To do that, you need to check out the additional packages for precompilation. Then you can build a system image like this:# add PackageCompiler\nPkg.add(\"PackageCompiler\")\nusing PackageCompiler\n# This is not well tested, so please be careful - I don\'t take any responsibilities for a messed up Julia install.\n\n# The safe option:\nPackageCompiler.compile_package(\"Makie\", force = false) # can take around ~20 minutes\n\n# Replaces julias system image\n# please be very careful with the option below, since this can make your julia stop working.\n# If Julia doesn\'t start for you anymore, consider doing:\n# using PackageCompiler; PackageCompiler.revert() <- not well tested\n\nPackageCompiler.compile_package(\"Makie\", force = true)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Makie...Makie.@extractMakie.@extractvalueMakie.@get_attributeMakie.@key_strMakie.@recipeMakie.AbsoluteMakie.AbsorptionMakie.AbsorptionRGBAMakie.AbstractCameraMakie.AbstractPlotMakie.AbstractPlottingMakie.AbstractSceneMakie.AbstractScreenMakie.AccumMakie.AnnotationsMakie.ArcMakie.ArrowsMakie.AtomicMakie.AttributesMakie.AxisMakie.Axis2DMakie.Axis3DMakie.BandMakie.BarPlotMakie.BillboardMakie.ButtonMakie.CameraMakie.Camera2DMakie.Camera3DMakie.CircleMakie.ColorLegendMakie.CombinedMakie.ContourMakie.Contour3dMakie.EmptyCameraMakie.EventsMakie.FRectMakie.FRect2DMakie.FRect3DMakie.GLNormalUVMeshMakie.HeatmapMakie.IRectMakie.IRect2DMakie.IRect3DMakie.ImageMakie.IndexedAbsorptionRGBAMakie.IsoValueMakie.KeyboardMakie.LegendMakie.LineSegmentsMakie.LinesMakie.MakieMakie.MaximumIntensityProjectionMakie.MeshMakie.MeshScatterMakie.MouseMakie.MultiplePlotMakie.NodeMakie.PlotListMakie.PlotSpecMakie.PointMakie.Point2Makie.Point2f0Makie.Point3Makie.Point3f0Makie.Point4Makie.Point4f0Makie.Pointf0Makie.PolyMakie.QuaternionMakie.Quaternionf0Makie.RGBAf0Makie.RGBf0Makie.RaymarchAlgorithmMakie.RealVectorMakie.RecordEventsMakie.RectMakie.Rect3DMakie.ReverseMakie.ScatterMakie.ScatterLinesMakie.SceneMakie.SceneLikeMakie.SeriesMakie.SliderMakie.SphereMakie.StepperMakie.StreamLinesMakie.SurfaceMakie.TextMakie.ThemeMakie.TransformationMakie.VecMakie.Vec2Makie.Vec2f0Makie.Vec3Makie.Vec3f0Makie.Vec4Makie.Vec4f0Makie.VecTypesMakie.Vecf0Makie.VideoStreamMakie.VolumeMakie.VolumeSlicesMakie.WireframeMakie.annotationsMakie.annotations!Makie.arcMakie.arc!Makie.arrowsMakie.arrows!Makie.attributesMakie.axis2dMakie.axis2d!Makie.axis3dMakie.axis3d!Makie.bandMakie.band!Makie.barplotMakie.barplot!Makie.boundingboxMakie.broadcast_foreachMakie.buttonMakie.button!Makie.cam2dMakie.cam2d!Makie.cam3d!Makie.cameraMakie.cameracontrolsMakie.cameracontrols!Makie.campixelMakie.campixel!Makie.center!Makie.colorlegendMakie.colorlegend!Makie.contourMakie.contour!Makie.contour3dMakie.contour3d!Makie.convert_argumentsMakie.convert_attributeMakie.decomposeMakie.default_themeMakie.disconnect!Makie.dropped_filesMakie.entered_windowMakie.evalMakie.eventsMakie.fill_between!Makie.force_update!Makie.gridMakie.hasfocusMakie.hboxMakie.heatmapMakie.heatmap!Makie.helpMakie.help_argumentsMakie.help_attributesMakie.hovered_sceneMakie.imageMakie.image!Makie.includeMakie.insertplots!Makie.ispressedMakie.keyboard_buttonsMakie.legendMakie.legend!Makie.liftMakie.linesMakie.lines!Makie.linesegmentsMakie.linesegments!Makie.logoMakie.map_onceMakie.meshMakie.mesh!Makie.meshscatterMakie.meshscatter!Makie.mouse_buttonsMakie.mouse_positionMakie.mouse_selectionMakie.mousedragMakie.mouseoverMakie.mousepositionMakie.move!Makie.multipleplotMakie.multipleplot!Makie.must_updateMakie.nodeMakie.onMakie.onpickMakie.pickMakie.pixelareaMakie.playbuttonMakie.plotMakie.plot!Makie.plotsMakie.polyMakie.poly!Makie.qrotationMakie.quiverMakie.quiver!Makie.recordMakie.record_eventsMakie.recordframe!Makie.register_callbacksMakie.replace_automatic!Makie.replay_eventsMakie.rotate!Makie.rotate_cam!Makie.scale!Makie.scatterMakie.scatter!Makie.scatterlinesMakie.scatterlines!Makie.scrollMakie.select_rectangleMakie.seriesMakie.series!Makie.set_theme!Makie.sliderMakie.slider!Makie.step!Makie.streamlinesMakie.streamlines!Makie.surfaceMakie.surface!Makie.textMakie.text!Makie.themeMakie.to_alignMakie.to_colorMakie.to_colormapMakie.to_fontMakie.to_ndimMakie.to_rotationMakie.to_textsizeMakie.to_valueMakie.to_vectorMakie.to_worldMakie.transform!Makie.translate!Makie.translate_cam!Makie.translatedMakie.translationMakie.unicode_inputMakie.update_cam!Makie.vboxMakie.volumeMakie.volume!Makie.volumeslicesMakie.volumeslices!Makie.widthsMakie.window_areaMakie.window_openMakie.wireframeMakie.wireframe!"
},

]}
