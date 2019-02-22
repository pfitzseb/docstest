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
    "text": ":chartwithupwards_trend: Sample plots (might be out of date).Generated With Other Modules::satellite: SignalProcessing.jl (Using EasyPlotGrace.jl; See CData.jl for details.  Likely out of date.)"
},

{
    "location": "#GracePlot.jl-1",
    "page": "Readme",
    "title": "GracePlot.jl",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "The GracePlot.jl module is a simple control interface for Grace/xmgrace - providing more publication-quality plotting facilities to Julia.GracePlot.jl is ideal for seeding a Grace session with plot data before fine-tuning the output with Grace itself.\nGrace \"templates\" (.par) files can then be saved/re-loaded to maintain a uniform appearance in publication.\nThe user is encouraged to pre-process data using math facilities from Julia instead of those built-in to Grace."
},

{
    "location": "#Samples-1",
    "page": "Readme",
    "title": "Samples",
    "category": "section",
    "text": "The sample directory contains a few demonstrations on how to use GracePlot.jl.The template directory contains a repository of sample Grace template (parameter) files."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The GracePlot.jl module requires the user to install the Grace plotting tool:<br> http://plasma-gate.weizmann.ac.il/Grace/More detailed instructions can be found here"
},

{
    "location": "#Configuration-1",
    "page": "Readme",
    "title": "Configuration",
    "category": "section",
    "text": "By default, GracePlot.jl assumes Grace is accessible from the environment path as xmgrace.  To specify a different command/path, simply set the GRACEPLOT_COMMAND environment variable.The value of GRACEPLOT_COMMAND can therefore be set from .juliarc.jl with the following:ENV[\"GRACEPLOT_COMMAND\"] = \"/home/laforge/bin/xmgrace2\""
},

{
    "location": "#Select-Documentation-1",
    "page": "Readme",
    "title": "Select Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#Axes-1",
    "page": "Readme",
    "title": "Axes",
    "category": "section",
    "text": "Objects describing axis types are created with the paxes function:log_lin = paxes(xscale = :log, yscale = :lin)Supported scales: :lin, :log, :reciprocal.The paxes function also allows the user to specify axis ranges:ax_rng = paxes(xmin = 0.1, xmax = 1000, ymin = 1000, ymax = 5000)"
},

{
    "location": "#Line-Style-1",
    "page": "Readme",
    "title": "Line Style",
    "category": "section",
    "text": "Objects describing line style are created with the line function:default_line = line(style=:ldash, width=8, color=1)Supported styles: :none, :solid, :dot, :dash, :ldash, :dotdash, :dotldash, :dotdotdash, :dotdashdash."
},

{
    "location": "#Glyphs-1",
    "page": "Readme",
    "title": "Glyphs",
    "category": "section",
    "text": "Objects describing display glyphs (markers/symbols) are created with the glyph function:glyph(shape=:diamond, color=5)Supported shapes: :circle, :o, :square, :diamond, :uarrow, :larrow, :darrow, :rarrow, :cross, :+, :diagcross, :x, :star, :*, :char (see demo2 for use of :char)."
},

{
    "location": "#Known-Limitations-1",
    "page": "Readme",
    "title": "Known Limitations",
    "category": "section",
    "text": "GracePlot.jl currently provides a relatively \"bare-bones\" interface (despite offering significant functionality).Does not currently provide much in terms of input validation.\nDoes not support the entire Grace control interface.\nIn particular: GracePlot.jl does not support Grace math operations.  Users are expected to leverage Julia for processing data before plotting.\nOn certain runs, Grace will complain that some commands cannot be executed... almost like commands are sent too fast for Grace, or something...  Not sure what this is.  Try re-running."
},

{
    "location": "#SVG-Issues-1",
    "page": "Readme",
    "title": "SVG Issues",
    "category": "section",
    "text": "GracePlot.jl will post-process SVG files in an attempt to support the W3C 1999 standard.  The changes enable most new web browsers to display the SVG outputs.  Note, however, that text will not appear correctly on these plots.The EPS format is therefore suggested if high-quality vector plots are desired."
},

{
    "location": "#Crashes-1",
    "page": "Readme",
    "title": "Crashes",
    "category": "section",
    "text": "The ARRANGE command appears to cause crashes/logouts on certain Linux installs with relatively high occurance."
},

{
    "location": "#Compatibility-1",
    "page": "Readme",
    "title": "Compatibility",
    "category": "section",
    "text": "Extensive compatibility testing of GracePlot.jl has not been performed.  The module has been tested using the following environment(s):Linux / Julia-0.7.0 / Grace-5.1.25."
},

{
    "location": "#Disclaimer-1",
    "page": "Readme",
    "title": "Disclaimer",
    "category": "section",
    "text": "The GracePlot.jl API is not perfect.  Backward compatibility issues are to be expected as the module matures."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GracePlot.AbstractLengthGracePlot.AbstractQuantityGracePlot.AttributeCmdMapGracePlot.AttributeFunctionMapGracePlot.AttributeListGracePlot.AttributeListFunctionMapGracePlot.AxesAttributesGracePlot.AxisTickAttributesGracePlot.CanvasAttributesGracePlot.CartesianLimAttributesGracePlot.ConfigGracePlot.DEFAULT_DPIGracePlot.DataVecGracePlot.DatasetGracePlot.DatasetRefGracePlot.DefaultAttributesGracePlot.FrameAttributesGracePlot.GlyphAttributesGracePlot.GraceConstLitteralGracePlot.GracePlotGracePlot.GraphGracePlot.GraphCoordGracePlot.GraphRefGracePlot.INCH_IN_METERSGracePlot.INCH_IN_POINTSGracePlot.InchGracePlot.LegendAttributesGracePlot.LineAttributesGracePlot.MIMEpngGracePlot.MeterGracePlot.PlotGracePlot.TPointGracePlot.TextAttributesGracePlot.TickAttributesGracePlot._addannotationGracePlot._autofitGracePlot._ensureGracePlot._setGracePlot._writeGracePlot._write_pngGracePlot.addGracePlot.addannot_listfnmapGracePlot.addannotationGracePlot.addtextGracePlot.arrangeGracePlot.autofitGracePlot.axes_attribcmdmapGracePlot.canvasGracePlot.clearallGracePlot.configGracePlot.copynew!GracePlot.defaultsGracePlot.defaults_attribcmdmapGracePlot.dsline_attribcmdmapGracePlot.empty_fnmapGracePlot.empty_listfnmapGracePlot.escapequotesGracePlot.evalGracePlot.exportplotGracePlot.flushpipeGracePlot.frameline_attribcmdmapGracePlot.genexpr_attriblistbuilderGracePlot.getaspectratioGracePlot.getattribGracePlot.gethcanvasGracePlot.gethviewGracePlot.getplot_fnmapGracePlot.getwcanvasGracePlot.getwviewGracePlot.glyphGracePlot.glyph_attribcmdmapGracePlot.graceconstmapGracePlot.graphGracePlot.graphdataGracePlot.graphindexGracePlot.includeGracePlot.killdatasetGracePlot.label_attribcmdmapGracePlot.legendGracePlot.legend_attribcmdmapGracePlot.limitsGracePlot.limits_attribcmdmapGracePlot.lineGracePlot.newGracePlot.openreadafterexportGracePlot.paxesGracePlot.redrawGracePlot.rootpathGracePlot.sendcmdGracePlot.setGracePlot.setactiveGracePlot.setattribGracePlot.setaxesGracePlot.setdatasetidGracePlot.setdefaultsGracePlot.setds_fnmapGracePlot.setds_listfnmapGracePlot.setenableGracePlot.setfocusGracePlot.setframelineGracePlot.setglyphGracePlot.setgraph_fnmapGracePlot.setgraph_listfnmapGracePlot.setlegendGracePlot.setlineGracePlot.setnumcolsGracePlot.setpagesizeGracePlot.setplot_fnmapGracePlot.setplot_listfnmapGracePlot.setsubtitleGracePlot.settitleGracePlot.setviewGracePlot.setxlabelGracePlot.setylabelGracePlot.templateGracePlot.textGracePlot.title_attribcmdmapGracePlot.updateallGracePlot.valGracePlot.write_epsGracePlot.write_pngGracePlot.write_svg"
},

]}
