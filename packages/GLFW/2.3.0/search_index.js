var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GLFW.jl-[![Travis-Build-Status][travis-img]][travis]-[![AppVeyor-Build-status][appveyor-img]][appveyor]-1",
    "page": "Readme",
    "title": "GLFW.jl  [![Travis Build Status][travis-img]][travis] [![AppVeyor Build status][appveyor-img]][appveyor]",
    "category": "section",
    "text": "[Julia][julia] interface to [GLFW 3][glfw], a multi-platform library for creating windows with [OpenGL][opengl] or OpenGL ES contexts and receiving many kinds of input. GLFW has native support for Windows, OS X and many Unix-like systems using the X Window System, such as Linux and FreeBSD.[julia]:  https://julialang.org [glfw]:   https://www.glfw.org [opengl]: https://wikipedia.org/wiki/OpenGL[appveyor]: https://ci.appveyor.com/project/jayschwa/glfw-jl [appveyor-img]: https://ci.appveyor.com/api/projects/status/qumgv56ma7dg07qg/branch/master?svg=true [travis]: https://travis-ci.org/JuliaGL/GLFW.jl [travis-img]: https://travis-ci.org/JuliaGL/GLFW.jl.svg?branch=master"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using GLFW\n\n# Create a window and its OpenGL context\nwindow = GLFW.CreateWindow(640, 480, \"GLFW.jl\")\n\n# Make the window\'s context current\nGLFW.MakeContextCurrent(window)\n\n# Loop until the user closes the window\nwhile !GLFW.WindowShouldClose(window)\n\n	# Render here\n\n	# Swap front and back buffers\n	GLFW.SwapBuffers(window)\n\n	# Poll for and process events\n	GLFW.PollEvents()\nend\n\nGLFW.DestroyWindow(window)"
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": "On Debian or Ubuntu, you may need to install these dependencies before building the package:sudo apt-get install xorg-dev"
},

{
    "location": "#Interface-1",
    "page": "Readme",
    "title": "Interface",
    "category": "section",
    "text": "Read the [GLFW documentation][docs] for detailed instructions on how to use the library. The Julia interface is almost identical to the underlying C interface, with a few notable differences:Clipboard (glfwGetClipboard, glfwSetClipboard) and time (glfwGetTime, glfwSetTime) functions have been omitted because Julia\'s standard library already supports similar functionality.\nglfwInit and glfwTerminate are called automatically using the __init__ and atexit functions. While it is okay to still call them explicitly, it is redundant and not required.[docs]: https://www.glfw.org/docs/latest/"
},

{
    "location": "#Footnotes-1",
    "page": "Readme",
    "title": "Footnotes",
    "category": "section",
    "text": "Special thanks to @afterwise for writing an early implementation of GLFW 3 support."
},

{
    "location": "autodocs/#GLFW.CreateWindowSurface",
    "page": "Docstrings",
    "title": "GLFW.CreateWindowSurface",
    "category": "function",
    "text": "CreateWindowSurface(instance, window, allocator=C_NULL)\n\nCreate a Vulkan surface for the specified window.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.GetInstanceProcAddress",
    "page": "Docstrings",
    "title": "GLFW.GetInstanceProcAddress",
    "category": "function",
    "text": "GetInstanceProcAddress(instance, procname) -> funcptr\n\nReturn the address of the specified Vulkan core or extension function for the specified instance. funcptr can be used directly as the first argument of ccall: ccall(funcptr, ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.GetPhysicalDevicePresentationSupport",
    "page": "Docstrings",
    "title": "GLFW.GetPhysicalDevicePresentationSupport",
    "category": "function",
    "text": "GetPhysicalDevicePresentationSupport(instance, device, queuefamily)\n\nReturn whether the specified queue family of the specified physical device supports presentation to the platform GLFW was built for.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.GetRequiredInstanceExtensions",
    "page": "Docstrings",
    "title": "GLFW.GetRequiredInstanceExtensions",
    "category": "function",
    "text": "GetRequiredInstanceExtensions()\n\nReturn a vector of names of Vulkan instance extensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.SetWindowIcon",
    "page": "Docstrings",
    "title": "GLFW.SetWindowIcon",
    "category": "function",
    "text": "GLFW.SetWindowIcon(window::Window, image::Matrix{NTuple{4, UInt8}})\n\nGLFW.SetWindowIcon(window::Window, images::Vector{<:AbstractMatrix{NTuple{4,UInt8}}})\n\nSet the window icon, where a single image may be passed or a vector of images with different icon sizes. The images must be of RGBA format. Before calling this function it might be necessary to reinterpret the image as a matrix of element type NTuple{4, UInt8}  if the icons are loaded with type RGBA{N0f8}\n\nExamples\n\nusing FileIO\nicons = load.([\"icon-16.png\", \"icon-32.png\", \"icon-128.png\"])\nbuffs = reinterpret.(NTuple{4, UInt8}, icons)\nGLFW.SetWindowIcon(win, buffs)\nGLFW.PollEvents() # needs a poll events to become active\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.VulkanSupported",
    "page": "Docstrings",
    "title": "GLFW.VulkanSupported",
    "category": "function",
    "text": "VulkanSupported()\n\nReturn whether the Vulkan loader has been found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.Window",
    "page": "Docstrings",
    "title": "GLFW.Window",
    "category": "type",
    "text": "Function to create a pure GLFW OpenGL window\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.primarymonitorresolution",
    "page": "Docstrings",
    "title": "GLFW.primarymonitorresolution",
    "category": "function",
    "text": "Returns the monitor resolution of the primary monitor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.set_visibility!",
    "page": "Docstrings",
    "title": "GLFW.set_visibility!",
    "category": "function",
    "text": "Sets visibility of OpenGL window. Will still render if not visible. Only applies to the root screen holding the opengl context.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.standard_context_hints",
    "page": "Docstrings",
    "title": "GLFW.standard_context_hints",
    "category": "function",
    "text": "Tries to create sensible context hints! Taken from lessons learned at: GLFW\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.standard_screen_resolution",
    "page": "Docstrings",
    "title": "GLFW.standard_screen_resolution",
    "category": "function",
    "text": "Takes half the resolution of the primary monitor. This should make for sensible defaults!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GLFW.standard_window_hints",
    "page": "Docstrings",
    "title": "GLFW.standard_window_hints",
    "category": "function",
    "text": "Standard window hints for creating a plain context without any multisampling or extra buffers beside the color buffer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GLFW.@callbackGLFW.@checked_libGLFW.@windowcallbackGLFW.ACCUM_ALPHA_BITSGLFW.ACCUM_BLUE_BITSGLFW.ACCUM_GREEN_BITSGLFW.ACCUM_RED_BITSGLFW.ALPHA_BITSGLFW.ANY_RELEASE_BEHAVIORGLFW.API_UNAVAILABLEGLFW.ARROW_CURSORGLFW.AUTO_ICONIFYGLFW.AUX_BUFFERSGLFW.ActionGLFW.BLUE_BITSGLFW.CLIENT_APIGLFW.CONNECTEDGLFW.CONTEXT_CREATION_APIGLFW.CONTEXT_NO_ERRORGLFW.CONTEXT_RELEASE_BEHAVIORGLFW.CONTEXT_REVISIONGLFW.CONTEXT_ROBUSTNESSGLFW.CONTEXT_VERSION_MAJORGLFW.CONTEXT_VERSION_MINORGLFW.CROSSHAIR_CURSORGLFW.CURSORGLFW.CURSOR_DISABLEDGLFW.CURSOR_HIDDENGLFW.CURSOR_NORMALGLFW.CallbackGLFW.CreateStandardCursorGLFW.CreateWindowGLFW.CreateWindowSurfaceGLFW.CursorGLFW.DECORATEDGLFW.DEPTH_BITSGLFW.DISCONNECTEDGLFW.DONT_CAREGLFW.DOUBLEBUFFERGLFW.DefaultWindowHintsGLFW.DestroyCursorGLFW.DestroyWindowGLFW.DeviceConfigEventGLFW.EGL_CONTEXT_APIGLFW.ErrorCodeGLFW.ExtensionSupportedGLFW.FLOATINGGLFW.FOCUSEDGLFW.FORMAT_UNAVAILABLEGLFW.GLFWGLFW.GLFWErrorGLFW.GLFWImageGLFW.GREEN_BITSGLFW.GetCurrentContextGLFW.GetCursorPosGLFW.GetFramebufferSizeGLFW.GetInputModeGLFW.GetInstanceProcAddressGLFW.GetJoystickAxesGLFW.GetJoystickButtonsGLFW.GetJoystickNameGLFW.GetKeyGLFW.GetKeyNameGLFW.GetMonitorNameGLFW.GetMonitorPhysicalSizeGLFW.GetMonitorPosGLFW.GetMonitorsGLFW.GetMouseButtonGLFW.GetPhysicalDevicePresentationSupportGLFW.GetPrimaryMonitorGLFW.GetProcAddressGLFW.GetRequiredInstanceExtensionsGLFW.GetVersionGLFW.GetVersionStringGLFW.GetVideoModeGLFW.GetVideoModesGLFW.GetWindowAttribGLFW.GetWindowFrameSizeGLFW.GetWindowMonitorGLFW.GetWindowPosGLFW.GetWindowSizeGLFW.HAND_CURSORGLFW.HRESIZE_CURSORGLFW.HideWindowGLFW.IBEAM_CURSORGLFW.ICONIFIEDGLFW.INITIALIZEDGLFW.INVALID_ENUMGLFW.INVALID_VALUEGLFW.IconifyWindowGLFW.InitGLFW.JOYSTICK_1GLFW.JOYSTICK_10GLFW.JOYSTICK_11GLFW.JOYSTICK_12GLFW.JOYSTICK_13GLFW.JOYSTICK_14GLFW.JOYSTICK_15GLFW.JOYSTICK_16GLFW.JOYSTICK_2GLFW.JOYSTICK_3GLFW.JOYSTICK_4GLFW.JOYSTICK_5GLFW.JOYSTICK_6GLFW.JOYSTICK_7GLFW.JOYSTICK_8GLFW.JOYSTICK_9GLFW.JoystickGLFW.JoystickPresentGLFW.KEY_0GLFW.KEY_1GLFW.KEY_2GLFW.KEY_3GLFW.KEY_4GLFW.KEY_5GLFW.KEY_6GLFW.KEY_7GLFW.KEY_8GLFW.KEY_9GLFW.KEY_AGLFW.KEY_APOSTROPHEGLFW.KEY_BGLFW.KEY_BACKSLASHGLFW.KEY_BACKSPACEGLFW.KEY_CGLFW.KEY_CAPS_LOCKGLFW.KEY_COMMAGLFW.KEY_DGLFW.KEY_DELETEGLFW.KEY_DOWNGLFW.KEY_EGLFW.KEY_ENDGLFW.KEY_ENTERGLFW.KEY_EQUALGLFW.KEY_ESCAPEGLFW.KEY_FGLFW.KEY_F1GLFW.KEY_F10GLFW.KEY_F11GLFW.KEY_F12GLFW.KEY_F13GLFW.KEY_F14GLFW.KEY_F15GLFW.KEY_F16GLFW.KEY_F17GLFW.KEY_F18GLFW.KEY_F19GLFW.KEY_F2GLFW.KEY_F20GLFW.KEY_F21GLFW.KEY_F22GLFW.KEY_F23GLFW.KEY_F24GLFW.KEY_F25GLFW.KEY_F3GLFW.KEY_F4GLFW.KEY_F5GLFW.KEY_F6GLFW.KEY_F7GLFW.KEY_F8GLFW.KEY_F9GLFW.KEY_GGLFW.KEY_GRAVE_ACCENTGLFW.KEY_HGLFW.KEY_HOMEGLFW.KEY_IGLFW.KEY_INSERTGLFW.KEY_JGLFW.KEY_KGLFW.KEY_KP_0GLFW.KEY_KP_1GLFW.KEY_KP_2GLFW.KEY_KP_3GLFW.KEY_KP_4GLFW.KEY_KP_5GLFW.KEY_KP_6GLFW.KEY_KP_7GLFW.KEY_KP_8GLFW.KEY_KP_9GLFW.KEY_KP_ADDGLFW.KEY_KP_DECIMALGLFW.KEY_KP_DIVIDEGLFW.KEY_KP_ENTERGLFW.KEY_KP_EQUALGLFW.KEY_KP_MULTIPLYGLFW.KEY_KP_SUBTRACTGLFW.KEY_LGLFW.KEY_LEFTGLFW.KEY_LEFT_ALTGLFW.KEY_LEFT_BRACKETGLFW.KEY_LEFT_CONTROLGLFW.KEY_LEFT_SHIFTGLFW.KEY_LEFT_SUPERGLFW.KEY_MGLFW.KEY_MENUGLFW.KEY_MINUSGLFW.KEY_NGLFW.KEY_NUM_LOCKGLFW.KEY_OGLFW.KEY_PGLFW.KEY_PAGE_DOWNGLFW.KEY_PAGE_UPGLFW.KEY_PAUSEGLFW.KEY_PERIODGLFW.KEY_PRINT_SCREENGLFW.KEY_QGLFW.KEY_RGLFW.KEY_RIGHTGLFW.KEY_RIGHT_ALTGLFW.KEY_RIGHT_BRACKETGLFW.KEY_RIGHT_CONTROLGLFW.KEY_RIGHT_SHIFTGLFW.KEY_RIGHT_SUPERGLFW.KEY_SGLFW.KEY_SCROLL_LOCKGLFW.KEY_SEMICOLONGLFW.KEY_SLASHGLFW.KEY_SPACEGLFW.KEY_TGLFW.KEY_TABGLFW.KEY_UGLFW.KEY_UNKNOWNGLFW.KEY_UPGLFW.KEY_VGLFW.KEY_WGLFW.KEY_WORLD_1GLFW.KEY_WORLD_2GLFW.KEY_XGLFW.KEY_YGLFW.KEY_ZGLFW.KeyGLFW.LOSE_CONTEXT_ON_RESETGLFW.MAXIMIZEDGLFW.MOD_ALTGLFW.MOD_CONTROLGLFW.MOD_SHIFTGLFW.MOD_SUPERGLFW.MOUSE_BUTTON_1GLFW.MOUSE_BUTTON_2GLFW.MOUSE_BUTTON_3GLFW.MOUSE_BUTTON_4GLFW.MOUSE_BUTTON_5GLFW.MOUSE_BUTTON_6GLFW.MOUSE_BUTTON_7GLFW.MOUSE_BUTTON_8GLFW.MOUSE_BUTTON_LEFTGLFW.MOUSE_BUTTON_MIDDLEGLFW.MOUSE_BUTTON_RIGHTGLFW.MakeContextCurrentGLFW.MaximizeWindowGLFW.MonitorGLFW.MouseButtonGLFW.NATIVE_CONTEXT_APIGLFW.NOT_INITIALIZEDGLFW.NO_APIGLFW.NO_CURRENT_CONTEXTGLFW.NO_RESET_NOTIFICATIONGLFW.NO_ROBUSTNESSGLFW.NO_WINDOW_CONTEXTGLFW.OPENGL_ANY_PROFILEGLFW.OPENGL_APIGLFW.OPENGL_COMPAT_PROFILEGLFW.OPENGL_CORE_PROFILEGLFW.OPENGL_DEBUG_CONTEXTGLFW.OPENGL_ES_APIGLFW.OPENGL_FORWARD_COMPATGLFW.OPENGL_PROFILEGLFW.OUT_OF_MEMORYGLFW.PLATFORM_ERRORGLFW.PRESSGLFW.PollEventsGLFW.PostEmptyEventGLFW.RED_BITSGLFW.REFRESH_RATEGLFW.RELEASEGLFW.RELEASE_BEHAVIOR_FLUSHGLFW.RELEASE_BEHAVIOR_NONEGLFW.REPEATGLFW.RESIZABLEGLFW.RestoreWindowGLFW.SAMPLESGLFW.SRGB_CAPABLEGLFW.STENCIL_BITSGLFW.STEREOGLFW.STICKY_KEYSGLFW.STICKY_MOUSE_BUTTONSGLFW.SetCharCallbackGLFW.SetCharModsCallbackGLFW.SetCursorGLFW.SetCursorEnterCallbackGLFW.SetCursorPosGLFW.SetCursorPosCallbackGLFW.SetDropCallbackGLFW.SetErrorCallbackGLFW.SetFramebufferSizeCallbackGLFW.SetGammaGLFW.SetInputModeGLFW.SetJoystickCallbackGLFW.SetKeyCallbackGLFW.SetMonitorCallbackGLFW.SetMouseButtonCallbackGLFW.SetScrollCallbackGLFW.SetWindowAspectRatioGLFW.SetWindowCloseCallbackGLFW.SetWindowFocusCallbackGLFW.SetWindowIconGLFW.SetWindowIconifyCallbackGLFW.SetWindowMonitorGLFW.SetWindowPosGLFW.SetWindowPosCallbackGLFW.SetWindowRefreshCallbackGLFW.SetWindowShouldCloseGLFW.SetWindowSizeGLFW.SetWindowSizeCallbackGLFW.SetWindowSizeLimitsGLFW.SetWindowTitleGLFW.ShowWindowGLFW.StandardCursorShapeGLFW.SwapBuffersGLFW.SwapIntervalGLFW.TerminateGLFW.VERSION_UNAVAILABLEGLFW.VISIBLEGLFW.VRESIZE_CURSORGLFW.VidModeGLFW.VkAllocationCallbacksGLFW.VkInstanceGLFW.VkPhysicalDeviceGLFW.VkResultGLFW.VkSurfaceKHRGLFW.VulkanSupportedGLFW.WaitEventsGLFW.WindowGLFW.WindowHintGLFW.WindowShouldCloseGLFW._CharCallbackWrapperGLFW._CharModsCallbackWrapperGLFW._CursorEnterCallbackWrapperGLFW._CursorPosCallbackWrapperGLFW._DropCallbackWrapperGLFW._ErrorCallbackWrapperGLFW._FramebufferSizeCallbackWrapperGLFW._JoystickCallbackWrapperGLFW._KeyCallbackWrapperGLFW._MonitorCallbackWrapperGLFW._MouseButtonCallbackWrapperGLFW._ScrollCallbackWrapperGLFW._WindowCloseCallbackWrapperGLFW._WindowFocusCallbackWrapperGLFW._WindowIconifyCallbackWrapperGLFW._WindowPosCallbackWrapperGLFW._WindowRefreshCallbackWrapperGLFW._WindowSizeCallbackWrapperGLFW.__init__GLFW._window_callback_numGLFW._window_callbacksGLFW.arrowsplitGLFW.callbackcodeGLFW.callbacksGLFW.depsjl_pathGLFW.evalGLFW.extractargsGLFW.includeGLFW.is_initializedGLFW.libGLFW.make_fullscreen!GLFW.make_windowed!GLFW.paramnameGLFW.paramtypeGLFW.primarymonitorresolutionGLFW.set_visibility!GLFW.standard_context_hintsGLFW.standard_screen_resolutionGLFW.standard_window_hints"
},

]}
