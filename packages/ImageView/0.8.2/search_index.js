var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageView.jl-1",
    "page": "Readme",
    "title": "ImageView.jl",
    "category": "section",
    "text": "An image display GUI for Julia."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the ImageView package:Pkg.add(\"ImageView\")"
},

{
    "location": "#Preparation-1",
    "page": "Readme",
    "title": "Preparation",
    "category": "section",
    "text": "First let\'s try it with a photograph. If you have an image on your computer, load it this way:using ImageView, Images\nimg = load(\"my_photo.jpg\")Any typical image format should be fine, it doesn\'t have to be a jpg. The TestImages package contains several standard images:using TestImages\nimg = testimage(\"mandrill\")"
},

{
    "location": "#Demonstration-of-the-GUI-1",
    "page": "Readme",
    "title": "Demonstration of the GUI",
    "category": "section",
    "text": "For simplicity, you should first test ImageView at the REPL prompt or in an IDE; script usage is discussed later below.You can view the image using imshow:imshow(img)You should get a window with your image:(Image: photo)You can use imshow() if you want to choose an image using a file dialog.Try resizing the image window by dragging one of its corners; you\'ll see that the aspect ratio of the image is preserved when you resize. If instead you want the image to fill the pane, try imshow(img, aspect=:none). Here\'s a comparison of the two:aspect=:auto (default) aspect=:none\n(Image: photo) (Image: photo)Next, Ctrl-click and drag somewhere inside the image.  You\'ll see the typical rubberband selection, and once you let go the image display will zoom in on the selected region.  Again, the aspect ratio of the display is preserved.  If you click on the image without holding down Ctrl, you can drag the image to look at nearby regions. Ctrl-double-click on the image to restore the full region.If you have a wheel mouse, zoom in again and scroll the wheel, which should cause the image to pan vertically. If you scroll while holding down Shift, it pans horizontally; hold down Ctrl and you affect the zoom setting. Note as you zoom via the mouse, the zoom stays focused around the mouse pointer location, making it easy to zoom in on some small feature simply by pointing your mouse at it and then Ctrl-scrolling.You can view the image upside-down withimshow(img, flipy=true)(flipx flips the image horizontally) or switch the horizontal and vertical axes withimshow(img, axes=(2,1)).For movies, 3D, and 4D images, ImageView will create a \"player\" widget.img = testimage(\"mri\")\nimshow(img)The \"mri\" image is an AxisArray, and consequently you can select axes by name:imshow(img, axes=(:S, :P), flipy=true)  # a sagittal plane (Superior, Posterior)imshow(img) imshow(img, axes=(:S, :P), flipy=true)\n(Image: photo) (Image: photo)Finally, for grayscale images, right-clicking on the image yields a brightness/contrast GUI:(Image: Contrast GUI snapshot)You can adjust the contrast by adjusting the sliders or by entering values into the text boxes."
},

{
    "location": "#Programmatic-usage-1",
    "page": "Readme",
    "title": "Programmatic usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Simple-command-line-utilities-1",
    "page": "Readme",
    "title": "Simple command-line utilities",
    "category": "section",
    "text": "ImageView.closeall() closes all open windows.You can place multiple images in the same window using canvasgrid:using ImageView, TestImages, Gtk.ShortNames\ngrid, frames, canvases = canvasgrid((1,2))  # 1 row, 2 columns\nimshow(canvases[1,1], testimage(\"lighthouse\"))\nimshow(canvases[1,2], testimage(\"mandrill\"))\nwin = Window(grid)\nGtk.showall(win)(Image: canvasgrid snapshot)"
},

{
    "location": "#The-dictionary-and-region-of-interest-manipulations-1",
    "page": "Readme",
    "title": "The dictionary and region-of-interest manipulations",
    "category": "section",
    "text": "imshow returns a dictionary containing a wealth of information about the state of the viewer. Perhaps most interesting is the \"roi\" entry, which itself is another dictionary containing information about the current selected region or interest. These are Reactive signals, and consequently you can even manipulate the state of the GUI by push!ing new values to these signals.For example, using the \"mri\" image above, you can select the 5th slice withguidict = imshow(img)\npush!(guidict[\"roi\"][\"slicedata\"].signals[1], 5)SliceData objects contain information about which axes are displayed and the current slice indices of those axes perpendicular to the view plane. Likewise, \"image roi\" contains the actual image data currently being shown in the window (including all zoom/slice settings).The \"zoom\"- and \"pan\"-related signals originate from GtkReactive, and users should see the documentation for that package for more information."
},

{
    "location": "#Coupling-two-or-more-images-together-1",
    "page": "Readme",
    "title": "Coupling two or more images together",
    "category": "section",
    "text": "imshow allows you to pass many more arguments; please use ?imshow to see some of the options. We can use these extra arguments to couple the zoom and slice regions between two images. Let\'s make a \"fake\" image encoding the segmentation of an image:using ImageView, GtkReactive, TestImages, Colors\n\n# Prepare the data\nmri = testimage(\"mri\")\nmriseg = RGB.(mri)\nmriseg[mri .> 0.5] = colorant\"red\"Now we display the images:guidata = imshow(mri, axes=(1,2))\nzr = guidata[\"roi\"][\"zoomregion\"]\nslicedata = guidata[\"roi\"][\"slicedata\"]\nimshow(mriseg, nothing, zr, slicedata)Here we used imshow to create the first window, and then extracted the zoomregion and slicedata information from that display and used them to intialize a second window with the second image. If you zoom, pan, or change the slice plane in one window, it makes the same change in the other.Alternatively, you can place both displays in a single window:zr, slicedata = roi(mri, (1,2))\ngd = imshow_gui((200, 200), slicedata, (1,2))\nimshow(gd[\"frame\"][1,1], gd[\"canvas\"][1,1], mri, nothing, zr, slicedata)\nimshow(gd[\"frame\"][1,2], gd[\"canvas\"][1,2], mriseg, nothing, zr, slicedata)\nGtk.showall(gd[\"window\"])You should see something like this:(Image: coupled)"
},

{
    "location": "#Annotations-1",
    "page": "Readme",
    "title": "Annotations",
    "category": "section",
    "text": "You can add and remove various annotations to images (currently text, points, and lines). There are two basic styles of annotation: \"anchored\" and \"floating.\" An \"anchored\" annotation is positioned at a particular pixel location within the image; if you zoom or pan, the annotation will move with the image, and may not even be shown if the corresponding position is off-screen. In contrast, a \"floating\" annotation is not tied to a particular location in the image, and will always be displayed at approximately the same position within the window even if you zoom or pan. As a consequence, \"anchored\" annotations are best for labeling particular features in the image, and \"floating\" annotations are best for things like scalebars.Here\'s an example of adding a 30-pixel scale bar to an image:guidict = imshow(img)\nscalebar(guidict, 30; x = 0.1, y = 0.05)x and y describe the center of the scale bar in normalized coordinates, with (0,0) in the upper left.  In this example, the length of the scale bar is in pixels, but if you\'re using the Unitful package for the image\'s pixelspacing, then you should set the length to something like 50μm.The remaining examples are for fixed annotations. Here is a demonstration:using Images, Colors, ImageView\nz = ones(10,50);\ny = 8; x = 2;\nz[y,x] = 0\nguidict = imshow(z)\nidx = annotate!(guidict, AnnotationText(x, y, \"x\", color=RGB(0,0,1), fontsize=3))\nidx2 = annotate!(guidict, AnnotationPoint(x+10, y, shape=\'.\', size=4, color=RGB(1,0,0)))\nidx3 = annotate!(guidict, AnnotationPoint(x+20, y-6, shape=\'.\', size=1, color=RGB(1,0,0), linecolor=RGB(0,0,0), scale=true))\nidx4 = annotate!(guidict, AnnotationLine(x+10, y, x+20, y-6, linewidth=2, color=RGB(0,1,0)))\nidx5 = annotate!(guidict, AnnotationBox(x+10, y, x+20, y-6, linewidth=2, color=RGB(0,0,1)))\ndelete!(guidict, idx)"
},

{
    "location": "#Annotation-API-1",
    "page": "Readme",
    "title": "Annotation API",
    "category": "section",
    "text": "AnnotationText(x, y, str;\n               z = NaN, t =  NaN,\n               color = RGB(0,0,0), angle = 0.0, fontfamily = \"sans\", fontsize = 10,\n               fontoptions = \"\",  halign = \"center\", valign = \"center\", markup = false, scale=true)Place str at position (x,y).Properties:z - position on z axis, for 3D images\nt - position on time axis, for movie-like images\ncolor\nangle\nfontfamily\nfontsize - font size in points\nfontoptions\nhalign - \"center\", \"left\", or \"right\"\nvalign - \"center\", \"top\", or \"bottom\"\nmarkup\nscale - scale the text as the image is zoomed (default: true)AnnotationPoints([xy | xys | x, y];\n                 z = NaN, t = NaN, size=10.0, shape::Char=\'x\',\n                 color = RGB(1,1,1), linewidth=1.0, linecolor=color, scale::Bool=false)Annotate the point xy, (x,y), or the points xys.  xys maybe a Vector of tuples Vector{(Real,Real)}, or a 2 x N Matrix.  Points are assumed to be in (x,y) order. (TODO: this could be generalized, as with lines.)Properties:z - position on z axis, for 3D images\nt - position on time axis, for movie-like images\nsize - how large to draw the point\nshape - one of \'.\', \'x\', \'o\', \'+\', \'*\'\ncolor\nlinewidth - width of lines used to draw the point\nlinecolor - line color; defaults to color; filled circles (shape=\'.\') can have a different outline and fill color\nscale - scale the drawn size of the point when the image is scaled (default: false)AnnotationLines(line | lines | c1,c2,c3,c4;\n                z = NaN, t = NaN,\n                color = RGB(1,1,1), linewidth=1.0, coord_order=\"xyxy\")Draw line, lines, or the line with coordinates (c1,c2,c3,c4).  line is specified as a tuple of point tuples, ((x1,y1),(x2,y2)).  lines may be a Vector of such lines, or a 4 x N matrix.  For a matrix or when specifying coordinates independently, the coordinate order is specified by coord_order, which defaults to \"xyxy\".Properties:z - position on z axis, for 3D images\nt - position on time axis, for movie-like images\ncolor\nlinewidth - width of the line(s)\ncoord_order - for matrix or coordinate inputs, the order of the coordinates (e.g., \"xyxy\", \"xxyy\", \"yyxx\")AnnotationBox(left, top, right, bottom | (x1,y1), (x2,y2) | bb::Graphics.BoundingBox;\n              z = NaN, t = NaN,\n              color = RGB(1,1,1), linewidth=1.0, coord_order=\"xyxy\")Draw a box.  Box can be specified using four values for (left, top, right, bottom), as a pair of tuples, (x1,y1),(x2,y2), or as a BoundingBox.  The coordinate order the pair of tuples may be specified by coord_order, which defaults to \"xyxy\".Properties:z - position on z axis, for 3D images\nt - position on time axis, for movie-like images\ncolor\nlinewidth - width of the lines"
},

{
    "location": "#Additional-notes-1",
    "page": "Readme",
    "title": "Additional notes",
    "category": "section",
    "text": ""
},

{
    "location": "#Calling-imshow-from-a-script-file-1",
    "page": "Readme",
    "title": "Calling imshow from a script file",
    "category": "section",
    "text": "If you call Julia from a script file, the julia process will terminate at the end of the program. This will cause any windows opened with imshow() to terminate, which is probably not what you intend. We want to make it only terminate the process when the image window is closed. Below is some example code to do this:using Images, ImageView, TestImages, Gtk.ShortNames\n\nimg = testimage(\"mandrill\")\nguidict = imshow(img);\n\n#If we are not in a REPL\nif (!isinteractive())\n\n    # Create a condition object\n    c = Condition()\n\n    # Get the window\n    win = guidict[\"gui\"][\"window\"]\n\n    # Notify the condition object when the window closes\n    signal_connect(win, :destroy) do widget\n        notify(c)\n    end\n\n    # Wait for the notification before proceeding ...\n    wait(c)\nendThis will prevent the julia process from terminating immediately. Note that if we did not call signal_connect, the process will keep waiting even after the image window has closed, and you will have to manually close it with CTRL + C.If you are opening more than one window you will need to create more than one Condition object, if you wish to wait until the last one is closed."
},

{
    "location": "autodocs/#ImageView.CLim",
    "page": "Docstrings",
    "title": "ImageView.CLim",
    "category": "type",
    "text": "CLim(cmin, cmax)\n\nSpecify contrast limits where x <= cmin will be rendered as black, and x >= cmax will be rendered as white.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.SliceData",
    "page": "Docstrings",
    "title": "ImageView.SliceData",
    "category": "type",
    "text": "SliceData{transpose::Bool}(signals::NTuple{N,Signal{Int}}, axes::NTuple{N,Axes})\n\nSpecify slice information for a (possibly) multidimensional image. signals hold the currently-selected slices for the selected axes, all of which are effectively \"orthogonal\" to the plane in the viewer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.canvas_size",
    "page": "Docstrings",
    "title": "ImageView.canvas_size",
    "category": "function",
    "text": "canvas_size(win, requested_size) -> (xsz, ysz)\ncanvas_size(screensize, requested_size) -> (xsz, ysz)\n\nLimit the requested canvas size by the screen size. Both the output and screensize are supplied in Gtk order (x, y).\n\nWhen supplying a GtkWindow win, the canvas size is limited to 60% of the total screen size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.canvasgrid",
    "page": "Docstrings",
    "title": "ImageView.canvasgrid",
    "category": "function",
    "text": "grid, frames, canvases = canvasgrid((ny, nx))\n\nCreate a grid of ny-by-nx canvases for drawing. grid is a GtkGrid layout, frames is an ny-by-nx array of GtkAspectRatioFrames that contain each canvas, and canvases is an ny-by-nx array of canvases.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.closeall",
    "page": "Docstrings",
    "title": "ImageView.closeall",
    "category": "function",
    "text": "closeall()\n\nCloses all windows opened by ImageView2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.default_canvas_size",
    "page": "Docstrings",
    "title": "ImageView.default_canvas_size",
    "category": "function",
    "text": "default_canvas_size(imagesize, pixelaspectratio=1) -> (xsz, ysz)\n\nCompute the canvas size for an image of size imagesize with the defined pixelaspectratio. Note that imagesize is supplied in coordinate order, i.e., (y, x) order, whereas the returned canvas size is in Gtk order, i.e., (x, y) order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.imlink",
    "page": "Docstrings",
    "title": "ImageView.imlink",
    "category": "function",
    "text": "imlink(imgs...; gridsize=(1,length(imgs)), dims=(1,2))\n\nShow multiple images in a single window, linking higher-dimensional axes to shared GUI control(s).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.imshow",
    "page": "Docstrings",
    "title": "ImageView.imshow",
    "category": "function",
    "text": "imshow()\n\nChoose an image to display via a file dialog.\n\n\n\n\n\nimshow(img; axes=(1,2), name=\"ImageView\") -> guidict\nimshow(img, clim; axes=(1,2), name=\"ImageView\") -> guidict\nimshow(img, clim, zoomregion, slicedata, annotations; axes=(1,2), name=\"ImageView\") -> guidict\n\nDisplay the image img in a new window titled with name, returning a dictionary guidict containing any Reactive signals or GtkReactive widgets. If the image is 3 or 4 dimensional, GUI controls will be added for slicing along \"extra\" axes. By default the two-dimensional slice containing axes 1 and 2 are shown, but that can be changed by passing a different setting for axes.\n\nIf the image is grayscale, by default contrast is set by a scaleminmax object whose end-points can be modified by right-clicking on the image. If clim == nothing, the image\'s own native contrast is used (clamp01nan).  You may also pass a custom contrast function.\n\nFinally, you may specify GtkReactive.ZoomRegion and SliceData signals. See also roi, as well as any annotations that you wish to apply.\n\n\n\n\n\nimshow(canvas, imgsig::Signal) -> guidict\nimshow(canvas, imgsig::Signal, zr::Signal{ZoomRegion}) -> guidict\nimshow(frame::Frame, canvas, imgsig::Signal, zr::Signal{ZoomRegion}) -> guidict\n\nDisplay imgsig (a Signal of an image) in canvas, setting up panning and zooming. Optionally include a frame for preserving aspect ratio. imgsig must be two-dimensional (but can be a Signal-view of a higher-dimensional object).\n\nExample\n\nusing ImageView, TestImages, Gtk\nmri = testimage(\"mri\");\n# Create a canvas `c`. There are other approaches, like stealing one from a previous call\n# to `imshow`, or using GtkReactive directly.\nguidict = imshow_gui((300, 300))\nc = guidict[\"canvas\"];\n# To see anything you have to call `showall` on the window (once)\nGtk.showall(guidict[\"window\"])\n# Create the image Signal\nimgsig = Signal(mri[:,:,1]);\n# Show it\nimshow(c, imgsig)\n# Now anytime you want to update, just push! a new image\npush!(imgsig, mri[:,:,8])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.imshow!",
    "page": "Docstrings",
    "title": "ImageView.imshow!",
    "category": "function",
    "text": "imshow!(canvas, img) -> drawsignal\nimshow!(canvas, img::Signal, zr::Signal{ZoomRegion}) -> drawsignal\nimshow!(frame::Frame, canvas, img::Signal, zr::Signal{ZoomRegion}) -> drawsignal\nimshow!(..., annotations=Signal(Dict{UInt,Any}()))\n\nDisplay the image img, in the specified canvas. Use the version with zr if you have already turned on rubber-banding or other pan/zoom interactivity for canvas. Returns the Reactive drawsignal used for updating the canvas.\n\nIf you supply frame, then the pixel aspect ratio will be set to that of pixelspacing(img).\n\nWith any of these forms, you may optionally supply annotations.\n\nThis only creates the draw method for canvas; mouse- or key-based interactivity can be set up via imshow or, at a lower level, using GtkReactive\'s tools:\n\ninit_zoom_rubberband\ninit_zoom_scroll\ninit_pan_scroll\ninit_pan_drag\n\nExample\n\n```julia using ImageView, GtkReactive, Gtk.ShortNames, TestImages\n\nCreate a window with a canvas in it\n\nwin = Window() c = canvas(UserUnit) push!(win, c) Gtk.showall(win)\n\nLoad images\n\nmri = testimage(\"mri\")\n\nDisplay the image\n\nimshow!(c, mri[:,:,1])\n\nUpdate with a different image\n\nimshow!(c, mri[:,:,8])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.imshow_gui",
    "page": "Docstrings",
    "title": "ImageView.imshow_gui",
    "category": "function",
    "text": "guidict = imshow_gui(canvassize; name=\"ImageView\", aspect=:auto)\nguidict = imshow_gui(canvassize, slicedata, gridsize=(1,1); name=\"ImageView\", aspect=:auto)\n\nCreate an image-viewer GUI. By default creates a single canvas, but with custom gridsize you can create a grid of canvases. canvassize = (szx, szy) describes the desired size of the (or each) canvas. slicedata is an object created by roi that encodes the necessary information for creating player widgets for viewing multidimensional images.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.imshowlabeled",
    "page": "Docstrings",
    "title": "ImageView.imshowlabeled",
    "category": "function",
    "text": "imshowlabeled(img, label)\n\nDisplay img, but showing the pixel\'s label rather than the color value in the status bar.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.normalized_lengths",
    "page": "Docstrings",
    "title": "ImageView.normalized_lengths",
    "category": "function",
    "text": "wnorm, hnorm = normalized_lengths(img, width, height)\n\nConvert absolute width and height into normalized variants. Depends on the pixelspacing of img.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.roi",
    "page": "Docstrings",
    "title": "ImageView.roi",
    "category": "function",
    "text": "roi(A) -> zr::Signal(ZoomRegion), slicedata::SliceData\nroi(A, dims=(1,2)) -> zr::Signal(ZoomRegion), slicedata::SliceData\nroi(A, (:namey, :namex)) -> zr::Signal(ZoomRegion), slicedata::SliceData\n\nCreate the initial \"region of interest\" for viewing A. For multidimensional objects, optionally select two dimensions (the first two, by default) for slicing. The outputs zr and slicedata describe the within-view and player-controlled axes, respectively.\n\nSee also: slice2d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.scalebar",
    "page": "Docstrings",
    "title": "ImageView.scalebar",
    "category": "function",
    "text": "scalebar(guidict::Dict, length; x = 0.8, y = 0.1, color = RGB(1,1,1))\n\nAdd a scale bar annotation to the image display controlled by guidict (returned by imshow). If the pixelspacing of the image is set using Unitful quantities, length should also be expressed in physical units.\n\nx and y control the placement of the scalebar, and color its rendered color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.slice2d",
    "page": "Docstrings",
    "title": "ImageView.slice2d",
    "category": "function",
    "text": "slice2d(A, zr, sd) -> A2\n\nCreate a two-dimensional slice A2 using the current ZoomRegion zr and SliceData sd.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageView.sliceinds",
    "page": "Docstrings",
    "title": "ImageView.sliceinds",
    "category": "function",
    "text": "inds = sliceinds(img, roi, slices...)\ninds = sliceinds(axs, roi, slices...)\n\nReturn an indices-tuple inds that selects the region-of-interest roi at particular slices along orthogonal coordinates. Use AxisArrays.Axis to indicate out-of-order axes, either by dimension number (e.g., Axis{3}) or by name (Axis{:z}). If you\'re using dimension numbers, slices must list them in increasing order.\n\nExamples:\n\njulia> using AxisArrays: Axis\n\n# Mimic a 4d array\njulia> axs = (1:1080, 1:1920, 1:20, 1:1000)\n(1:1080, 1:1920, 1:20, 1:1000)\n\njulia> ImageView.sliceinds(axs, (6:10, 1:5), Axis{3}(7), Axis{4}(15))\n(6:10, 1:5, 7, 15)\n\njulia> ImageView.sliceinds(axs, (6:10, 1:5), Axis{2}(7), Axis{4}(15))\n(6:10, 7, 1:5, 15)\n\n# Mimic a 4d AxisArray\njulia> axs = (Axis{:y}(1:1080), Axis{:x}(1:1920), Axis{:z}(1:20), Axis{:t}(1:1000))\n(Axis{:y,UnitRange{Int64}}(1:1080), Axis{:x,UnitRange{Int64}}(1:1920), Axis{:z,UnitRange{Int64}}(1:20), Axis{:t,UnitRange{Int64}}(1:1000))\n\njulia> ImageView.sliceinds(axs, (6:10, 1:5), Axis{:t}(15), Axis{:z}(7))   # out-of-order OK\n(6:10, 1:5, 7, 15)\n\njulia> ImageView.sliceinds(axs, (6:10, 1:5), Axis{:y}(15), Axis{:z}(7))\n(15, 6:10, 7, 1:5)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ImageView.AbstractAnnotationImageView.AbstractGrayImageView.AnchoredAnnotationImageView.AnnotationBoxImageView.AnnotationHandleImageView.AnnotationLineImageView.AnnotationLinesImageView.AnnotationPointImageView.AnnotationPointsImageView.AnnotationScalebarFixedImageView.AnnotationTextImageView.CLimImageView.FixedColorantImageView.FloatingAnnotationImageView.GrayLikeImageView.ImageViewImageView.NamedImageView.PositionalImageView.SliceDataImageView.TagTypeImageView._axisdimImageView._default_climImageView._deflt_climImageView._mappedarrayImageView._pickaxisImageView._sliceindsImageView.add_annotation!ImageView.annotate!ImageView.annotation_isvalidImageView.axisnameImageView.canvas_sizeImageView.canvasbbImageView.canvasgridImageView.change_blueImageView.change_greenImageView.change_redImageView.channel_climImageView.channel_climsImageView.check_sameImageView.closeallImageView.contrast_guiImageView.contrast_gui_layoutImageView.create_contrast_popupImageView.default_axesImageView.default_canvas_sizeImageView.default_climImageView.draw_anchoredImageView.draw_annotationsImageView.draw_boxImageView.draw_lineImageView.draw_linesImageView.draw_ptImageView.draw_ptsImageView.drawhistImageView.evalImageView.fontdescriptionImageView.frame_canvasImageView.fullsizeImageView.histsignalsImageView.hoverinfoImageView.imlinkImageView.imlink_gridImageView.imshowImageView.imshow!ImageView.imshow_guiImageView.imshowlabeledImageView.includeImageView.isgrayImageView.kwhandlerImageView.makeroiImageView.makeslicesImageView.map_image_roiImageView.mapped_channel_climsImageView.nanzImageView.normalized_lengthsImageView.outtypeImageView.pickaxisImageView.prep_contrastImageView.roiImageView.safeminmaxImageView.saferoundImageView.scalebarImageView.set_aspect!ImageView.setrange!ImageView.setvalid!ImageView.slice2dImageView.sliceindsImageView.sliceinds_tImageView.tagtypeImageView.to_colorantImageView.transposedviewImageView.window_wrefsImageView.wrap_signalImageView.zoombb"
},

]}
