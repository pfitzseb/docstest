var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GtkUtilities-1",
    "page": "Readme",
    "title": "GtkUtilities",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Alternatives-1",
    "page": "Readme",
    "title": "Alternatives",
    "category": "section",
    "text": "New users are encouraged to consider GtkReactive instead."
},

{
    "location": "#What-is-GtkUtilities?-1",
    "page": "Readme",
    "title": "What is GtkUtilities?",
    "category": "section",
    "text": "This package is a collection of extensions to Gtk that make interactive graphics easier.  For example, it allows you to:\"attach\" user data to widgets or any other object\nperform rubber-band selection\nuse pan and zoom\nsynchronize state across multiple UI widgets and canvases"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install viaPkg.add(\"GtkUtilities\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#guidata:-associating-user-data-with-widgets-1",
    "page": "Readme",
    "title": "guidata: associating user data with widgets",
    "category": "section",
    "text": "Given a widget (Button, Canvas, Window, etc.) or other graphical object w, a value val can be associated with (\"stored in\") w usingguidata[w, :name] = valwhere :name is the name (a Symbol) you\'ve assigned to val for the purposes of storage.The value can be retrieved withval = guidata[w, :name]Here are some other things you can do with guidata:alldata = guidata[w]           # fetch all data associated with w\nval = get(guidata, (w,:name), default)   # returns default if :name not defined\ndelete!(guidata, (w,:name))    # deletes the value associated with :name\ndelete!(guidata, w)            # deletes all data associated with wIf w is a GtkWidget, the associated data are automatically deleted when the object is destroyed.Example:    c = @Canvas()\n    bb = BoundingBox(0, 1, 0, 1)\n    guidata[c, :zoombb] = bb"
},

{
    "location": "#Rubber-band-selection-1",
    "page": "Readme",
    "title": "Rubber band selection",
    "category": "section",
    "text": "rubberband_start(c, x, y, callback_done; minpixels=2) starts a rubber-band selection on Canvas c at position (x,y).  When the user releases the mouse button, the callback function callback_done(c, bb) is run, where bb is the BoundingBox of the selected region.  To reduce the likelihood that clicks used to raise windows will result in rubber banding, the callback is not executed unless the user drags the mouse by at least minpixels pixels (default value 2).Example:    c.mouse.button1press = (widget, event) -> begin\n        if event.event_type == Gtk.GdkEventType.BUTTON_PRESS\n            GtkUtilities.rubberband_start(c, event.x, event.y, (c, bb) -> @show bb)\n        end\n    endsets up a Canvas so that rubberband selection starts when the user clicks the mouse; when the button is released, it prints the bounding box of the selection region."
},

{
    "location": "#Zooming-and-panning-1",
    "page": "Readme",
    "title": "Zooming and panning",
    "category": "section",
    "text": "Zooming and panning a Canvas c are performed using four guidata objects, named :xview, :yview, :xviewlimits, :yviewlimits. The first two express the current view region, which includes effects of any previous zoom and pan operations.  The second two encode the allowable area, representing the largest-sized region that may be viewed.You intialize panning and zooming withpanzoom(c, [xviewlimits, yviewlimits], [xview, yview])\npanzoom_mouse(c)\nid = panzoom_key(c)This sequence will implement panning and zooming with either the keyboard or wheel-mouse.  You can specify the keys and modifiers, as well as the behavior of scroll-zooming relative to the mouse pointer location, via keyword arguments to these functions. See each individual function (e.g., ?panzoom_key) for more information.The draw method for your Canvas must make use of the :xview, :yview properties. In the simplest cases, you might achieve this withdraw(c) do widget\nctx = getgc(c)\nh = height(c)\nw = width(c)\n\nxviewlimits, yviewlimits = guidata[c, :xviewlimits], guidata[c, :yviewlimits]\nbb = BoundingBox( xviewlimits.min, xviewlimits.max, yviewlimits.min, yviewlimits.max)  # you can create bb outside of the draw method instead, by using explicity values for xview/yview-limits. However, \'guidata\' will not work unless \'c\' has already been fully defined.\nset_coordinates(ctx, BoundingBox(0, w, 0, h), bb)\n\nxview, yview = guidata[c, :xview], guidata[c, :yview]\n...\n# use xview and yview to manipulate the content of your canvas\n...\nendThe returned id can be disabled or enabled via signal_handler_block and signal_handler_unblock, respectively, or removed with signal_handler_disconnect."
},

{
    "location": "#Managing-state-1",
    "page": "Readme",
    "title": "Managing state",
    "category": "section",
    "text": "Note: this component will be rebased on Reactive.jl after https://github.com/JuliaLang/Reactive.jl/pull/65 merges, hopefully via https://github.com/jverzani/GtkInteract.jl. This interface is deprecated.Suppose you have a slider (a Scale) and an Entry box as two alternative mechanisms for specifying a single number, and you want to use that number in some calculations when you render a Canvas. Who \"owns\" the number? Does the Entry callback have to be aware of the Scale callback, and vice-versa?You can centralize your handling of this piece of information by using a State object and linking it to the UI elements:state = State(5)\n\ne = @Entry()\ns = @Scale(false, 1:10)\nc = @Canvas()\ndraw(c) do widget\n   ...   # make use of state in here somewhere\nend\n\nelink = link(state, e)\nslink = link(state, s)\nlink(state, c)\n\nget(elink)               # returns 5\nset!(state, 7)           # wow, the Canvas redraws and the Entry & Scale change!\nget(state)               # returns 7\nget(slink)               # returns 7\nset!(slink, 4)           # everything updates againNote that in this example we didn\'t have to write any callbacks at all: just linking the widget to the State object creates the callback we need, and any changes are automatically propagated for you."
},

{
    "location": "#Help-1",
    "page": "Readme",
    "title": "Help",
    "category": "section",
    "text": "Each function has its own help, e.g., ?rubberband_start."
},

{
    "location": "autodocs/#GtkUtilities.GtkUtilities",
    "page": "Docstrings",
    "title": "GtkUtilities.GtkUtilities",
    "category": "module",
    "text": "Summary of features in GtkUtilities:\n\nrubberband_start: initiate rubber band selection\nguidata: associate user data with on-screen elements\n\nEach of these has detailed help available, e.g., ?guidata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.PanZoom.Interval",
    "page": "Docstrings",
    "title": "GtkUtilities.PanZoom.Interval",
    "category": "type",
    "text": "An Interval is a (min,max) pair. It is the one-dimensional analog of a BoundingBox.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.PanZoom.fullview",
    "page": "Docstrings",
    "title": "GtkUtilities.PanZoom.fullview",
    "category": "function",
    "text": "iv = fullview(limits) returns an Interval iv that encompases the full view as permitted by limits.\n\nIf limits == nothing, then fullview returns nothing.\n\nThe simplest effectual limits object is another Interval representing the \"whole canvas\" along the chosen axis. If you need more sophisticated behavior, you can extend this function to work with custom types of limits objects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.GuiData.guidata",
    "page": "Docstrings",
    "title": "GtkUtilities.GuiData.guidata",
    "category": "constant",
    "text": "Given a widget (Button, Canvas, Window, etc.) or other graphical object w, a value val can be associated with (\"stored in\") w using\n\nguidata[w, :name] = val\n\nwhere :name is the name (a Symbol) you\'ve assigned to val for the purposes of storage.\n\nThe value can be retrieved with\n\nval = guidata[w, :name]\n\nHere are some other things you can do with guidata:\n\nalldata = guidata[w]           # fetch all data associated with w\nval = get(guidata, (w,:name), default)   # returns default if :name not defined\ndelete!(guidata, (w,:name))    # deletes the value associated with :name\ndelete!(guidata, w)            # deletes all data associated with w\n\nExample:\n\n    c = Canvas()\n    panzoom(c, (0,1), (0,1))\n    xview = guidata[c, :xview]\n\nNote that if :name corresponds to a State object, guidata will get/set the value of the State object, transparently stripping the wrapper itself.  This means that you change the value without destroying any links you have set up.  If you need the state object itself, use the raw keyword:\n\n    state = getindex(guidata, c, :name; raw=true)     # retrieves a state object\n    setindex!(guidata, newstate, c, :name; raw=true)  # replaces the old state object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.PanZoom.interior",
    "page": "Docstrings",
    "title": "GtkUtilities.PanZoom.interior",
    "category": "function",
    "text": "ivnew = interior(iv, limits) returns a new version of iv, an Interval, which is inside the region allowd by limits. One should prefer \"shifting\" iv over \"shrinking\" iv (if possible, the width of iv should be preserved).\n\nIf limits == nothing, then iv is unconstrained and ivnew == iv.\n\nThe simplest effectual limits object is another Interval representing the full view interval across the chosen axis. If you need more sophisticated behavior, you can extend this function to work with custom types of limits objects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.Link.link",
    "page": "Docstrings",
    "title": "GtkUtilities.Link.link",
    "category": "function",
    "text": "w_linked = link(state, widget) links the value of the user-interface element widget to the value of the AbstractState state. The two will henceforth be synchronized: calling get(state) or get(w_linked) returns the current value, and set!(state, val) or set!(w_linked, val) will change the value for all mutually-linked objects.\n\nlink(state, c), where c is a Canvas, makes c a listener for state. There is no return value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.PanZoom.panzoom",
    "page": "Docstrings",
    "title": "GtkUtilities.PanZoom.panzoom",
    "category": "function",
    "text": "panzoom(c)\npanzoom(c, xviewlimits, yviewlimits)\npanzoom(c, xviewlimits, yviewlimits, xview, yview)\npanzoom(c2, c1)\n\nsets up the Canvas c for panning and zooming. The arguments may be 2-tuples, 2-vectors, Intervals, or nothing.\n\npanzoom creates the :view[x|y], :view[x|y]limits properties of c:\n\n:xview, :yview are two AbstractStates (for horizontal and   vertical, respectively), each holding an Interval specifying   the current \"view\" limits. This might be the entire area, or it   might be a subregion due to a previous zoom event.\n:xviewlimits, :yviewlimits encode the maximum allowable viewing   region; in most cases these will also be State{Interval}s, but   any object that supports interior and fullview may be used.   Use nothing to indicate unlimited range.\n\nIf c is the only argument to panzoom, then the current user-coordinate limits of c are used.  Note that this invocation works only if the Canvas has been drawn at least once; if that is not the case, you need to specify the limits manually.\n\npanzoom(c2, c1) sets canvas c2 to share pan/zoom state with canvas c1.  Panning or zooming in either one will cause the same action in the other.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.PanZoom.panzoom_key",
    "page": "Docstrings",
    "title": "GtkUtilities.PanZoom.panzoom_key",
    "category": "function",
    "text": "id = panzoom_key(c; kwargs...) initializes panning- and zooming-by-keypress for a canvas c. c is expected to have the four guidata properties described in panzoom.\n\nYou can configure the keys through keyword arguments. The default settings are shown below. The first entry is the key, the second a modifier (like the SHIFT key); 0 means no modifier.\n\n    panleft      = (GDK_KEY_Left,0),\n    panright     = (GDK_KEY_Right,0),\n    panup        = (GDK_KEY_Up,0),\n    pandown      = (GDK_KEY_Down,0),\n    panleft_big  = (GDK_KEY_Left,SHIFT),\n    panright_big = (GDK_KEY_Right,SHIFT),\n    panup_big    = (GDK_KEY_Up,SHIFT),\n    pandown_big  = (GDK_KEY_Down,SHIFT),\n    xpanflip     = false,\n    ypanflip     = false\n    zoomin       = (GDK_KEY_Up,  CONTROL)\n    zoomout      = (GDK_KEY_Down,CONTROL)\n\n\"Regular\" panning motions correspond to 10% of the view region; \"big\" panning motions are 100% of the view region, and thus jump by one whole view area.  The constants are defined in Gtk.GConstants and the modifiers in Gtk.GConstants.GdkModifierType.\n\nThe returned id can be disabled or enabled via signal_handler_block and signal_handler_unblock, respectively, or removed with signal_handler_disconnect.\n\nExample:\n\n    c = Canvas()\n    panzoom(c, (0,1), (0,1))\n    id = panzoom_key(c)\n\nThe draw method for c should take account of :viewbb.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.PanZoom.panzoom_mouse",
    "page": "Docstrings",
    "title": "GtkUtilities.PanZoom.panzoom_mouse",
    "category": "function",
    "text": "panzoom_mouse(c; kwargs...) initializes panning-by-mouse-scroll and mouse control over zooming for a canvas c.\n\nzooming or panning (along either x or y) is selected by modifier keys, which are configurable through keyword arguments.  The default settings are:\n\n    # Panning\n    xpan      = SHIFT     # hold down the shift key\n    ypan      = 0\n    xpanflip  = false\n    ypanflip  = false\n    # Zooming\n    zoom      = CONTROL     # hold down the ctrl-key while scrolling\n    focus     = :pointer    # zoom around the position under the mouse pointer\n    factor    = 2.0\n    initiate  = BUTTON_PRESS # start a rubberband selection for zoom\n    reset     = DOUBLE_BUTTON_PRESS    # go back to original limits\n\nwhere 0 means no modifier. SHIFT, CONTROL, BUTTONPRESS, and DOUBLEBUTTON_PRESS are defined in Gtk.GConstants.GdkModifierType.\n\nThe focus keyword controls how the zooming progresses as you scroll the mouse wheel. :pointer means that whatever feature of the canvas is under the pointer will stay there as you zoom in or out. The other choice, :center, keeps the canvas centered on its current location. These behaviors are subject to modification by the canvas\' :viewlimits data.\n\nAn additional keyword is user_to_data, for which you may supply a function\n\n    user_to_data_fcn(c, x, y) -> (datax, datay)\n\nthat converts canvas user-coordinates to \"data coordinates\" before setting the values of :xview and :yview.\n\nFor important additional information, see panzoom_key. To disable mouse panning and zooming, use\n\n    pop!((c.mouse, :scroll))\n    pop!((c.mouse, :button1press))\n\nExample:\n\n    c = Canvas()\n    panzoom(c, (0,1), (0,1))\n    panzoom_mouse(c)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.RubberBands.rubberband_start",
    "page": "Docstrings",
    "title": "GtkUtilities.RubberBands.rubberband_start",
    "category": "function",
    "text": "rubberband_start(c, x, y, callback_done; minpixels=2) starts a rubber-band selection on Canvas c at position (x,y).  When the user releases the mouse button, the callback function callback_done(c, bb) is run, where bb is the BoundingBox of the selected region.  To reduce the likelihood that clicks used to raise windows will result in rubber banding, the callback is not executed unless the user drags the mouse by at least minpixels pixels (default value 2).\n\nExample:\n\nc.mouse.button1press = (widget, event) -> begin\n    if event.event_type == Gtk.GdkEventType.BUTTON_PRESS\n        GtkUtilities.rubberband_start(c, event.x, event.y, (c, bb) -> @show bb)\n    end\nend\n\nwould set up a Canvas so that rubberband selection starts when the user clicks the mouse; when the button is released, it displays the bounding box of the selection region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.Link.set!",
    "page": "Docstrings",
    "title": "GtkUtilities.Link.set!",
    "category": "function",
    "text": "set(w, val) sets the value of the linked widget w and fires the callback, thereby updating all other linked widgets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.Link.set_quietly!",
    "page": "Docstrings",
    "title": "GtkUtilities.Link.set_quietly!",
    "category": "function",
    "text": "set_quietly!(w, val) sets the value of the linked widget w without firing the callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GtkUtilities.GuiData.trigger",
    "page": "Docstrings",
    "title": "GtkUtilities.GuiData.trigger",
    "category": "function",
    "text": "trigger(widgets, symbols) is used when you want to set several state variables simultaneously, but don\'t want to refresh the screen more frequently than necessary. You can set the .value parameter of the state variables directly, then call trigger to synchronize the GUI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GtkUtilities.AbstractStateGtkUtilities.GtkUtilitiesGtkUtilities.GuiDataGtkUtilities.IntervalGtkUtilities.LinkGtkUtilities.PanZoomGtkUtilities.RubberBandsGtkUtilities.StateGtkUtilities.disconnectGtkUtilities.evalGtkUtilities.fullviewGtkUtilities.getGtkUtilities.guidataGtkUtilities.idGtkUtilities.image_surfaceGtkUtilities.image_to_cairoGtkUtilities.includeGtkUtilities.interiorGtkUtilities.lEntryGtkUtilities.lLabelGtkUtilities.lScaleGtkUtilities.linkGtkUtilities.panzoomGtkUtilities.panzoom_keyGtkUtilities.panzoom_mouseGtkUtilities.rubberband_startGtkUtilities.set!GtkUtilities.set_coordinatesGtkUtilities.set_quietly!GtkUtilities.triggerGtkUtilities.widget"
},

]}
