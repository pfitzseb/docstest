var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ElectronDisplay-1",
    "page": "Readme",
    "title": "ElectronDisplay",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: ElectronDisplay) (Image: codecov.io)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides a display for figures and plots. When you load the package, it will push a new display onto the julia display stack and from then on it will display any value that can be rendered as png, svg, vega, vega-lite or plotly in an electron based window. This is especially handy when one works on the REPL and wants plots to show up in a nice window."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "You can install the package via the normal julia package manger:Pkg.add(\"ElectronDisplay\")As soon as you load the package with using ElectronDisplay, it will start to show plots that have the correct show methods in an electron window.ElectronDisplay also exports a function electrondisplay.  You can use electrondisplay(x) to show x explicitly in ElectronDisplay (e.g., when another display has higher precedence).  You can also use electrondisplay(mime, x) to specify a MIME to be used.  For example, to read the docstring of reduce in ElectronDisplay, you can use electrondisplay(@doc reduce)."
},

{
    "location": "#Configuration-1",
    "page": "Readme",
    "title": "Configuration",
    "category": "section",
    "text": "You can use the following configuration option to reuse existing window for displaying a new content.  The default behavior is to create a new window for each display.using ElectronDisplay\nElectronDisplay.CONFIG.single_window = trueTo control objects to be handled by ElectronDisplay, you can set ElectronDisplay.CONFIG.showable.  By default, ElectronDisplay does not show markdown, HTML, and application/vnd.dataresource+json output.  To show everything in ElectronDisplay whenever it\'s supported, you can use:using Markdown\nElectronDisplay.CONFIG.showable = showable"
},

{
    "location": "autodocs/#ElectronDisplay.CONFIG",
    "page": "Docstrings",
    "title": "ElectronDisplay.CONFIG",
    "category": "constant",
    "text": "ElectronDisplay.CONFIG\n\nConfiguration for ElectronDisplay.\n\nshowable: A callable with signature showable(mime::String, x::Any) :: Bool.  This determines if object x is displayed by ElectronDisplay.  Default is to return false if mime is \"text/html\" or \"text/markdown\" and otherwise fallbacks to Base.showable(mime, x).\nsingle_window::Bool = false: If true, reuse existing window for displaying a new content.  If false (default), create a new window for each display.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ElectronDisplay.electrondisplay",
    "page": "Docstrings",
    "title": "ElectronDisplay.electrondisplay",
    "category": "function",
    "text": "electrondisplay([mime,] x)\n\nShow x in Electron window.  Use MIME mime if specified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ElectronDisplay.CONFIGElectronDisplay.CachedDataResourceStringElectronDisplay.DataresourceTableTraitsWrapperElectronDisplay.ElectronDisplayElectronDisplay.ElectronDisplayConfigElectronDisplay.ElectronDisplayTypeElectronDisplay.__init__ElectronDisplay._displayElectronDisplay._getglobalwindowElectronDisplay._windowElectronDisplay.asmarkdownElectronDisplay.assetElectronDisplay.displayhtmlElectronDisplay.displayhtmlbodyElectronDisplay.electron_showableElectronDisplay.electrondisplayElectronDisplay.evalElectronDisplay.include"
},

]}
