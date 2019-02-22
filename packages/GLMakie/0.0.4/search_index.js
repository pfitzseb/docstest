var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "OpenGL backend for MakieBuild status: [![][gitlab-img]][gitlab-url][gitlab-img]: https://gitlab.com/JuliaGPU/GLMakie-jl/badges/master/pipeline.svg [gitlab-url]: https://gitlab.com/JuliaGPU/GLMakie-jl/pipelines"
},

{
    "location": "autodocs/#GLMakie.@csafe",
    "page": "Docstrings",
    "title": "GLMakie.@csafe",
    "category": "macro",
    "text": "Throwing an error in a c callback seems to lead to undefined behaviour\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLMakie.SelectionID",
    "page": "Docstrings",
    "title": "GLMakie.SelectionID",
    "category": "type",
    "text": "Selection of random objects on the screen is realized by rendering an object id + plus an arbitrary index into the framebuffer. The index can be used for e.g. instanced geometries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLMakie.assetpath",
    "page": "Docstrings",
    "title": "GLMakie.assetpath",
    "category": "function",
    "text": "returns path relative to the assets folder\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLMakie.loadasset",
    "page": "Docstrings",
    "title": "GLMakie.loadasset",
    "category": "function",
    "text": "Loads a file from the asset folder\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLMakie.postprocess",
    "page": "Docstrings",
    "title": "GLMakie.postprocess",
    "category": "function",
    "text": "Creates a postprocessing render object. This will transfer the pixels from the color texture of the Framebuffer to the screen and while at it, it can do some postprocessing (not doing it right now): E.g fxaa anti aliasing, color correction etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLMakie.render_frame",
    "page": "Docstrings",
    "title": "GLMakie.render_frame",
    "category": "function",
    "text": "Renders a single frame of a window\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLMakie.rewrap",
    "page": "Docstrings",
    "title": "GLMakie.rewrap",
    "category": "function",
    "text": "OpenGL shares all data containers between shared contexts, but not vertexarrays -.- So to share a robjs between a context, we need to rewrap the vertexarray into a new one for that specific context.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLMakie.scene2image",
    "page": "Docstrings",
    "title": "GLMakie.scene2image",
    "category": "function",
    "text": "scene2image(scene::Scene)\n\nBuffers the scene in an image buffer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLMakie.sleep_pessimistic",
    "page": "Docstrings",
    "title": "GLMakie.sleep_pessimistic",
    "category": "function",
    "text": "Sleep is pretty imprecise. E.g. anything under 0.001s is not guaranteed to wake up before 0.001s. So this timer is pessimistic in the way, that it will never sleep more than time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GLMakie.@csafeGLMakie.AbstractContextGLMakie.GLAbstractionGLMakie.GLBackendGLMakie.GLContextGLMakie.GLFramebufferGLMakie.GLMakieGLMakie.GLScreenGLMakie.GLVisualizeGLMakie.MonitorPropertiesGLMakie.PostProcessROBJGLMakie.PostprocessPrerenderGLMakie.ScreenGLMakie.ScreenAreaGLMakie.ScreenIDGLMakie.SelectionIDGLMakie.WORKING_OPENGLGLMakie.ZIndexGLMakie.__init__GLMakie._global_gl_screenGLMakie._mouse_selection_idGLMakie.addbuttonsGLMakie.assetpathGLMakie.atlas_texture_cacheGLMakie.attach_framebufferGLMakie.cached_robj!GLMakie.convert_mesh_colorGLMakie.correct_mouseGLMakie.destroy!GLMakie.draw_atomicGLMakie.draw_fullscreenGLMakie.evalGLMakie.fast_color_data!GLMakie.flatten_plotsGLMakie.framebuffer_sizeGLMakie.get_imageGLMakie.get_texture!GLMakie.getscreenGLMakie.gl_screensGLMakie.global_gl_screenGLMakie.gpuvecGLMakie.handle_intensities!GLMakie.handle_viewGLMakie.id2rectGLMakie.includeGLMakie.index1DGLMakie.lift_convertGLMakie.loadassetGLMakie.loadshaderGLMakie.make_context_currentGLMakie.makieshaderGLMakie.mouse_selection_nativeGLMakie.opengl_renderloopGLMakie.pick_nativeGLMakie.pixel2worldGLMakie.postprocessGLMakie.rcpframeGLMakie.reactive_run_till_nowGLMakie.remove_automatic!GLMakie.render_frameGLMakie.renderloopGLMakie.retina_scaling_factorGLMakie.rewrapGLMakie.scene2imageGLMakie.selection_queriesGLMakie.setup!GLMakie.sleep_pessimisticGLMakie.surface_contoursGLMakie.to_gl_textGLMakie.to_glvisualize_keyGLMakie.to_jl_layout!GLMakie.to_nativeGLMakie.to_rangeGLMakie.to_widthGLMakie.vec2colorGLMakie.volume_prerenderGLMakie.was_destroyedGLMakie.window_positionGLMakie.window_size"
},

]}
