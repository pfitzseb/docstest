var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: splash)"
},

{
    "location": "#Immerse-1",
    "page": "Readme",
    "title": "Immerse",
    "category": "section",
    "text": "(Image: Build Status)Immerse is a wrapper that adds graphical interactivity to Julia plots. Currently, Immerse supports Gadfly."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "By and large, you plot just as you would in Gadfly:using Immerse, Distributions\nX = rand(MultivariateNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0]), 10000)\nplot(x=X[1,:], y=X[2,:], Geom.hexbin)However, rather than being displayed in a browser window, you\'ll see your figure in a Gtk window:(Image: window)The toolbar at the top supports saving your figure to a file, zooming and panning, and lasso selection.Zooming and panning uses the defaults set by GtkUtilities.  The left mouse button allows you to rubberband-select a zoom region.  Use your mouse wheel or arrow-keys to pan or change the zoom level.  Double-click, or press the 1:1 button, to restore the full view."
},

{
    "location": "#Lasso-selection-1",
    "page": "Readme",
    "title": "Lasso selection",
    "category": "section",
    "text": "The right-most button on the toolbar allows you to select a group of points for further analysis by drawing a \"lasso\" around them:(Image: lasso)By default, this pops up a dialog asking you which variable in Main you want to save the selected indexes to:(Image: lassodialog)You can alternatively define a custom callback function; see the help for lasso_initialize by typing ?lasso_initialize at the REPL.Lasso selection is currently implemented only for Geom.point and Geom.line.  If you want to try this feature, the demonstration in test/faces.jl can be fun."
},

{
    "location": "#Hit-testing-1",
    "page": "Readme",
    "title": "Hit testing",
    "category": "section",
    "text": "You can add extra interactivity by setting up callbacks that run whenever the user clicks on an object. A demonstration of this capability is exhibited in the test/hittesting.jl test script:(Image: hittest)Here the red circles are drawn around the dots that the user clicked on; see also the console output that showed the results of clicking on the line segments between the dots.Note that hit testing is disabled while the \"zoom\" button is active.  Like lasso selection, this is currently implemented only for Geom.point and Geom.line."
},

{
    "location": "#Setting-and-getting-properties-1",
    "page": "Readme",
    "title": "Setting and getting properties",
    "category": "section",
    "text": "Objects can be modified interactively after their creation:julia> using Immerse, Colors\n\njulia> hfig = figure()\n1\n\njulia> x = linspace(0,4pi,101);\n\njulia> p = plot(x=x, y=sin(x), Geom.line(tag=:line))\n\njulia> setproperty!((hfig,:line), rand(1:5), :linewidth)\n3\n\njulia> setproperty!((hfig,:line), RGB(rand(),rand(),rand()), :stroke)\nRGB{Float64}(0.9563599683564541,0.20964995278692222,0.997388106654052)\n\njulia> setproperty!((hfig,:line), false, :visible)\nfalse\n\njulia> setproperty!((hfig,:line), true, :visible)\ntrue\n\njulia> getproperty((hfig,:line), :visible)\n1-element Array{Bool,1}:\n trueCompose Form and Property objects apply to a vector of objects, which is why getproperty returns a vector."
},

{
    "location": "#Figure-windows-1",
    "page": "Readme",
    "title": "Figure windows",
    "category": "section",
    "text": "Each figure is addressed by an integer; for a window displaying a single Gadfly figure, by default this integer appears in the window title.There are a few simple utilities for working with figure windows:figure() opens a new figure window. This will become the defaultplotting window.figure(3) raises the corresponding window and makes it the default.\ngcf() returns the index of the current default figure.\nscf() shows the current figure (raising the window to the top).\nclosefig(3) destroys Figure 3, closing the window.\ncloseall() closes all open figure windows."
},

{
    "location": "#Issues-1",
    "page": "Readme",
    "title": "Issues",
    "category": "section",
    "text": ""
},

{
    "location": "#When-I-type-scf(),-nothing-happens-1",
    "page": "Readme",
    "title": "When I type scf(), nothing happens",
    "category": "section",
    "text": "Your window manager may have \"focus stealing prevention\" enabled. For example, under KDE, go to the Kmenu->System Settings->Window behavior->Window behavior (pane)->Focus (tab) and set \"Focus stealing prevent\" to \"None\".  Alternatively, if you want to limit this change to julia, use the \"Window rules\" pane and add a new setting where \"Window class (application)\" is set to \"Regular Expression\" with value \"^julia.*\"."
},

{
    "location": "autodocs/#Immerse.Figure",
    "page": "Docstrings",
    "title": "Immerse.Figure",
    "category": "type",
    "text": "Figure(3) gets the underlying Figure object associated with figure #3. This can be useful if you need to layer on extra drawing on top of what Gadfly produces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Immerse.closeall",
    "page": "Docstrings",
    "title": "Immerse.closeall",
    "category": "function",
    "text": "closeall() closes all existing figure windows.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Immerse.closefig",
    "page": "Docstrings",
    "title": "Immerse.closefig",
    "category": "function",
    "text": "closefig(n) closes the nth figure window.\n\nclosefig() closes the current figure window.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Immerse.figure",
    "page": "Docstrings",
    "title": "Immerse.figure",
    "category": "function",
    "text": "figure(;name=\"Figure $n\", width=400, height=400) creates a new figure window for displaying plots.\n\nfigure(n) raises the nth figure window and makes it the current default plotting window, and returns the\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Immerse.gcf",
    "page": "Docstrings",
    "title": "Immerse.gcf",
    "category": "function",
    "text": "gcf() (\"get current figure\") returns the current figure number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Immerse.hit",
    "page": "Docstrings",
    "title": "Immerse.hit",
    "category": "function",
    "text": "hit((fig,tag), cb) turns on hit-testing for the plot element tagged with tag in figure fig. When the user clicks on the element, the callback function cb will be executed.\n\nThe callback should have the form\n\n    function my_callback(figtag, index, event, distance)\n        if distance < 2\n            # We clicked close enough to the object to \"count\"\n            # implement the action here\n        end\n    end\n\nfigtag = (figno,tag) identifies the figure and object, and index represents the specific item clicked on.  index might be a single Int (e.g., the 37th point in the plot), or for compound objects might be a more complex object.  event contains Gtk\'s information about the click event; this records the x,y position as well as any modifier keys.  distance measures how much the user \"missed\" the object, and is measured in screen-pixels.\n\nHere are a couple of examples:\n\n    fig = display(plot(x=1:10,y=rand(10),Geom.point(tag=:dots)))\n    hit((fig,:dots), (figtag, index, xy, dist) -> if dist < 1 println(\"You clicked on dot \", index) end)\n\nIn this case, index will be an Int.\n\n    x = rand(6)\n    y = rand(6)\n    label = [1,1,1,1,2,2]\n    df = DataFrame(Any[x,y,label], [:x,:y,:label])\n    fig = display(plot(df, x=:x, y=:y, color=:label, Geom.line(tag=:lines)))\n\n    hit((fig,:lines), (figtag, index, xy, dist) -> begin\n        if dist < 2\n            println(\"You clicked on line \", index[1], \" in segment \", index[2], \" at $(round(Int,100*index[3]))% along the segment\")\n        end\n    end)\n\nBy default, hit uses mouse button 1; you can customize the action with hit(figtag, cb, action) where the default is action = :button1press.  The choices correspond to the fields in Gtk\'s MouseHandler.\n\nYou can suspend hit-testing for an object with hit((fig,:tag), false) and re-enable it with hit((fig,:tag), true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Immerse.lasso_initialize",
    "page": "Docstrings",
    "title": "Immerse.lasso_initialize",
    "category": "function",
    "text": "lasso_initialize(figno, cb) sets the callback cb to run when the user has selected points with the lasso.  When you have only one \"object\" (Geom) in your plot, your callback can be of the form\n\n    function my_simple_lasso_callback(figno, selections)\n        println(\"You selected points \", first(values(selections)))\n    end\n\nFor a Geom.point object, this would print a vector of integers corresponding to the selected points.\n\nMore generally, the callback should have the syntax\n\n    function my_lasso_callback(figno, selections)\n        for (form, indexes) in selections\n            if form.tag == :mydots\n                println(\"In figure $figno, from :mydots you selected \", indexes)\n            end\n        end\n    end\n\nselections is a Dict of form=>indexes pairs.  form is a Compose.Form, the raw objects rendered by Gadfly; you may especially want to query its tag to determine its identity (assuming you\'ve assigned a tag).  indexes is a vector describing the items selected; for Circle forms, each element will be an Int, whereas for Line Forms (which can hold multiple lines, perhaps drawn in different colors) each element will be an Tuple{Int,Int} describing the line number and vertex number.\n\nTo assign a tag to a Gadfly object, add the tag keyword argument to the geometry, e.g. Geom.point(tag = :mydots).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Immerse.scf",
    "page": "Docstrings",
    "title": "Immerse.scf",
    "category": "function",
    "text": "scf() (\"show current figure\") raises (makes visible) the current figure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Immerse.@colorant_strImmerse.ColImmerse.ContainersWithChildrenImmerse.CoordImmerse.FigureImmerse.FormIteratorImmerse.FormNativeIteratorImmerse.GadflyImmerse.GadflyDisplayImmerse.GeomImmerse.GuideImmerse.HOMEImmerse.ImmerseImmerse.IterablesImmerse.LayerImmerse.PDFImmerse.PGFImmerse.PNGImmerse.PSImmerse.PanZoomCallbacksImmerse.PlotImmerse.RowImmerse.SVGImmerse.SVGJSImmerse.ScaleImmerse.ShapeImmerse.StatImmerse.ThemeImmerse.__init__Immerse._aesImmerse._coordImmerse._displayImmerse._find_parentImmerse._getvalueImmerse._hit_dataImmerse._plotImmerse._setproperty!Immerse.absolute_to_dataImmerse.addfigImmerse.apply_tweaks!Immerse.bareobjImmerse.blockImmerse.circleImmerse.circle_centerImmerse.clear_guidataImmerse.clear_guistate!Immerse.clear_hitImmerse.closeallImmerse.closefigImmerse.cmImmerse.colorImmerse.consImmerse.createPlotGuiComponentsImmerse.crossImmerse.curfigImmerse.dev2dataImmerse.diamondImmerse.disconnectImmerse.doneImmerse.draggingImmerse.drawImmerse.dropfigImmerse.dtriangleImmerse.evalImmerse.export_selectionImmerse.figureImmerse.file_backendsImmerse.find_inmaskImmerse.find_objectImmerse.find_panelformsImmerse.find_panelforms!Immerse.find_parentImmerse.find_pathImmerse.find_path!Immerse.find_taggedImmerse.find_tagged!Immerse.fullview_cbImmerse.fullview_wrapperImmerse.gcfImmerse.getfigImmerse.getpropertyImmerse.gridstackImmerse.gtkdestroyImmerse.gtkwindowImmerse.has_tagImmerse.hasfigImmerse.hexagonImmerse.hitImmerse.hitcbImmerse.hitcenterImmerse.hlineImmerse.hstackImmerse.incImmerse.inchImmerse.includeImmerse.initialize_toolbar_callbacksImmerse.initializedImmerse.invert_transformImmerse.iterableImmerse.lasso_defaultImmerse.lasso_initializeImmerse.lasso_select_cbImmerse.lasso_wrapperImmerse.layerImmerse.mmImmerse.nativeImmerse.nearestImmerse.nextImmerse.nextfigImmerse.no_tweaksImmerse.octogonImmerse.on_figure_destroyImmerse.panzoom_cbImmerse.panzoom_wrapperImmerse.path2maskImmerse.pathxImmerse.pathyImmerse.plotImmerse.ppmmImmerse.prepare_displayImmerse.proptype2symImmerse.ptImmerse.pxImmerse.renderImmerse.render_backendImmerse.render_finishImmerse.save_asImmerse.save_as_wrapperImmerse.scfImmerse.select_pointsImmerse.set_default_plot_formatImmerse.set_default_plot_sizeImmerse.set_limits!Immerse.set_ticks!Immerse.setcoord!Immerse.setproperty!Immerse.spyImmerse.squareImmerse.star1Immerse.star2Immerse.startImmerse.string_compactImmerse.styleImmerse.switchfigImmerse.sym2proptypeImmerse.titleImmerse.unblockImmerse.utriangleImmerse.vlineImmerse.vstackImmerse.xcross"
},

]}
