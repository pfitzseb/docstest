var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PlotlyJS-1",
    "page": "Readme",
    "title": "PlotlyJS",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/sglyon/PlotlyJS.jl)(Image: Build Status)#(Image: AppVeyor) #(Image: Coverage Status)(Image: PlotlyJS) (Image: PlotlyJS)Julia interface to [plotly.js][_plotlyjs] visualization library.This package constructs plotly graphics using all local resources. To interact or save graphics to the Plotly cloud, use the  Plotly package.Check out the docs![_plotlyjs]: https://plot.ly/javascript"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "If you intend to use the Electron display or any of its features (recommended) you will need to enter the following at the Julia REPL:using Blink\nBlink.AtomShell.install()Note that this is a one time process.Also, if you have issues building this package because of installation of the MbedTLS  package please see this issue."
},

{
    "location": "autodocs/#PlotlyJS.savehtml",
    "page": "Docstrings",
    "title": "PlotlyJS.savehtml",
    "category": "function",
    "text": "savehtml(io::IO, p::Union{Plot,SyncPlot}, js::Symbol=js_default[])\nsavehtml(p::Union{Plot,SyncPlot}, fn::AbstractString, js::Symbol=js_default[])\n\nSave plot to standalone html file suitable for including in a website or opening in a browser\n\nCan either be written to an arbitrary IO stream, or saved to a file noted with a string fn.\n\nThe js argument can be one of\n\n:local: Reference the local plotly.js file included in this Julia package   Pros: small file size, offline viewing. Cons: Can\'t share with others or   move to different machine..\n:remote: Reference plotly.js from a CDN. Pros small file size, move to   other machine. Cons: need internet access to fetch from CDN\n:embed: Embed the entirety of your local copy of plotly.js in the   outputted file. Pros: offline viewing, move to other machine. Con: large   file size (adds about 2.7 MB)\n\nThe default is :local\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PlotlyJS.@L_mstrPlotlyJS.@L_strPlotlyJS.AbstractLayoutPlotlyJS.AbstractTracePlotlyJS.CyclerPlotlyJS.GenericTracePlotlyJS.LayoutPlotlyJS.PlotPlotlyJS.PlotlyBasePlotlyJS.PlotlyJSPlotlyJS.PlotlyJSDisplayPlotlyJS.STYLESPlotlyJS.ShapePlotlyJS.StylePlotlyJS.SyncPlotPlotlyJS.__init__PlotlyJS._js_cdn_pathPlotlyJS._js_pathPlotlyJS._mathjax_cdn_pathPlotlyJS._pkg_rootPlotlyJS.add_recession_bands!PlotlyJS.addtracesPlotlyJS.addtraces!PlotlyJS.areaPlotlyJS.attrPlotlyJS.barPlotlyJS.boxPlotlyJS.candlestickPlotlyJS.carpetPlotlyJS.choroplethPlotlyJS.circlePlotlyJS.conePlotlyJS.contourPlotlyJS.contourcarpetPlotlyJS.deletetracesPlotlyJS.deletetraces!PlotlyJS.display_blinkPlotlyJS.docsPlotlyJS.download_imagePlotlyJS.evalPlotlyJS.extendtracesPlotlyJS.extendtraces!PlotlyJS.forkPlotlyJS.heatmapPlotlyJS.heatmapglPlotlyJS.histogramPlotlyJS.histogram2dPlotlyJS.histogram2dcontourPlotlyJS.hlinePlotlyJS.html_bodyPlotlyJS.includePlotlyJS.js_defaultPlotlyJS.jsonPlotlyJS.linePlotlyJS.mesh3dPlotlyJS.movetracesPlotlyJS.movetraces!PlotlyJS.ohlcPlotlyJS.parcoordsPlotlyJS.pathPlotlyJS.piePlotlyJS.plotPlotlyJS.pointcloudPlotlyJS.prependtracesPlotlyJS.prependtraces!PlotlyJS.purgePlotlyJS.purge!PlotlyJS.reactPlotlyJS.react!PlotlyJS.rectPlotlyJS.redrawPlotlyJS.redraw!PlotlyJS.relayoutPlotlyJS.relayout!PlotlyJS.restylePlotlyJS.restyle!PlotlyJS.sankeyPlotlyJS.savefigPlotlyJS.savehtmlPlotlyJS.savejsonPlotlyJS.scatterPlotlyJS.scatter3dPlotlyJS.scattercarpetPlotlyJS.scattergeoPlotlyJS.scatterglPlotlyJS.scattermapboxPlotlyJS.scatterpolarPlotlyJS.scatterpolarglPlotlyJS.scatterternaryPlotlyJS.send_commandPlotlyJS.splomPlotlyJS.stemPlotlyJS.streamtubePlotlyJS.stylePlotlyJS.surfacePlotlyJS.tablePlotlyJS.to_imagePlotlyJS.updatePlotlyJS.update!PlotlyJS.use_style!PlotlyJS.violinPlotlyJS.vline"
},

]}
