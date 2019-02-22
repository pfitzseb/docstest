var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: logo)"
},

{
    "location": "#PGFPlotsX-1",
    "page": "Readme",
    "title": "PGFPlotsX",
    "category": "section",
    "text": "Documentation Build Status\n[![][docs-stable-img]][docs-stable-url] [![][docs-dev-img]][docs-dev-url] [![][travis-img]][travis-url] (Image: codecov)PGFPlotsX is a Julia package to generate publication quality figures using the LaTeX library PGFPlots.It is similar in spirit to the package PGFPlots.jl but it tries to have a very close mapping to the PGFPlots API as well as minimize the number of dependencies. The fact that the syntax is similar to the TeX version means that examples from Stack Overflow and the PGFPlots manual can easily be incorporated in the Julia code.Features include:Showing figures inline in Jupyter notebooks, Juno and VSCode-julia. Both png- and svg-figures can be shown.\nExporting to tex, pdf, svg, and png, file formats.\nCustomizing the preamble so that commands from latex packages can be used.\nExtra functionality when different packages are loaded, for example Colors, DataFrames, Contour etc."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> Pkg.add(\"PGFPlotsX\")"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "[STABLE][docs-stable-url] &mdash; most recently tagged version of the documentation.\n[DEV][docs-dev-url] &mdash; in-development version of the documentation."
},

{
    "location": "#Authors-1",
    "page": "Readme",
    "title": "Authors",
    "category": "section",
    "text": "Kristoffer Carlsson - @KristofferC89\nTamas K. Papp - @tpapp[docs-dev-img]: https://img.shields.io/badge/docs-dev-blue.svg [docs-dev-url]: https://kristofferc.github.io/PGFPlotsX.jl/dev/[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://kristofferc.github.io/PGFPlotsX.jl/stable[travis-img]: https://travis-ci.org/KristofferC/PGFPlotsX.jl.svg?branch=master [travis-url]: https://travis-ci.org/KristofferC/PGFPlotsX.jl[issues-url]: https://github.com/KristofferC/PGFPlotsX.jl/issues"
},

{
    "location": "autodocs/#PGFPlotsX.@pgf",
    "page": "Docstrings",
    "title": "PGFPlotsX.@pgf",
    "category": "macro",
    "text": "@pgf { ... }\n\n@pgf some(nested(form({ ... })),\n          with_multiple_options({ ... }))\n\nConstruct Options from comma-delimited key (without value), key = value, key : value, or key => value pairs enclosed in { ... }, anywhere in the expression.\n\nThe argument is traversed recursively, allowing { ... } expressions in multiple places.\n\nMulti-word keys need to be either quoted, or written with underscores replacing spaces.\n\n@pgf {\n    \"only marks\",\n    mark_size = \"0.6pt\",\n    mark = \"o\",\n    color => \"black\",\n}\n\nAnother Options can be spliced into one being created using ..., e.g.\n\ntheme = @pgf {xmajorgrids, x_grid_style = \"white\"}\n\naxis_opt = @pgf {theme..., title = \"My figure\"}\n\nUse {} for empty options that print as [] in LaTeX.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Axis",
    "page": "Docstrings",
    "title": "PGFPlotsX.Axis",
    "category": "type",
    "text": "Axis([options], elements...)\n\nLinear axes, corresponds to axis in PGFPlots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.AxisElement",
    "page": "Docstrings",
    "title": "PGFPlotsX.AxisElement",
    "category": "type",
    "text": "An AxisElement is a component of an Axis. It can be a Plot or a RawString etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.AxisLike",
    "page": "Docstrings",
    "title": "PGFPlotsX.AxisLike",
    "category": "type",
    "text": "abstract type AxisLike <: PGFPlotsX.TikzElement\n\nAn axis-like object that has options and contents. Each subtype T has the constructor\n\nT([options], contents...)\n\nand supports axislike_environment(T).\n\ncontents usually consists of Plot objects, but can also contain strings, which are printed as is (use these for legends etc). Some subtypes have special semantics, see their documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.CLASS_OPTIONS",
    "page": "Docstrings",
    "title": "PGFPlotsX.CLASS_OPTIONS",
    "category": "constant",
    "text": "List of class options used in the preamble (default [\"tikz\"]).\n\nBy setting PGFPlotsX.CLASS_OPTIONS[1] = \"varwidth\"; push!(PGFPlotsX.CLASS_OPTIONS, \"crop=false\") the preamble will contain documentclass[varwidth,crop=false]{standalone}.\n\nSee https://www.ctan.org/pkg/standalone for a list of options.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.CUSTOM_FLAGS",
    "page": "Docstrings",
    "title": "PGFPlotsX.CUSTOM_FLAGS",
    "category": "constant",
    "text": "Custom flags to the engine can be used in the latex command by push!-ing them into the global variable CUSTOM_FLAGS.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.CUSTOM_PREAMBLE",
    "page": "Docstrings",
    "title": "PGFPlotsX.CUSTOM_PREAMBLE",
    "category": "constant",
    "text": "A vector of stings, added after DEFAULT_PREAMBLE.\n\nUse this for additional definitions \\usepackage statements required by the LaTeX code you include into plots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.CUSTOM_PREAMBLE_PATH",
    "page": "Docstrings",
    "title": "PGFPlotsX.CUSTOM_PREAMBLE_PATH",
    "category": "constant",
    "text": "A file which is spliced directly to the preamble. Customize the file at this path for site-specific setting that apply for every plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Coordinate",
    "page": "Docstrings",
    "title": "PGFPlotsX.Coordinate",
    "category": "type",
    "text": "Coordinate(data; error, errorplus, errorminus, meta)\n\n\nConstruct a coordinate, with optional error bars and metadata. data should be a 2- or 3-element tuples of finite real numbers.\n\nYou can specify either\n\nerror, which will then be used for error bars in both directions, or\nerrorplus and/or errorminus, for asymmetrical error bars.\n\nError values can be tuples of the same kind as data, or nothing.\n\nMetadata can be provided in meta.\n\nUsers rarely need to use this constructor, see methods of Coordinates for constructing coordinates from arrays.\n\n\n\n\n\nCoordinate(x, y; args...)\n\n\nConvenience constructor for 2-dimensional coordinates.\n\n\n\n\n\nCoordinate(x, y, z; args...)\n\n\nConvenience constructor for 3-dimensional coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Coordinates",
    "page": "Docstrings",
    "title": "PGFPlotsX.Coordinates",
    "category": "type",
    "text": "Coordinates(itr)\n\n\nConvert the argument, which can be any iterable object, to coordinates.\n\nSpecifically,\n\nCoordinate and Nothing are passed through as is,\n2- or 3-element tuples of finite real numbers or strings are interpreted as coordinates,\n(), and tuples with non-finite numbers become nothing (representing empty lines).\n\nThe resulting coordinates are checked for dimension consistency.\n\nExamples\n\nThe following are equivalent:\n\nCoordinates((x, 1/x) for x in -5:5)\nCoordinates(x == 0 ? () : (x, 1/x) for x in -5:5)\nCoordinates(x == 0 ? nothing : Coordinate((x, 1/x)) for x in -5:5)\n\nUse enumerate to add 1, 2, … for the x-axis to an existing set of y coordinates:\n\nCoordinates(enumerate([1, 4, 9]))\n\n\n\n\n\nCoordinates(x, y; xerror, yerror, xerrorplus, yerrorplus, xerrorminus, yerrorminus, meta)\n\n\nTwo dimensional coordinates from two vectors, with error bars.\n\n\n\n\n\nCoordinates(x, y, z; xerror, yerror, zerror, xerrorplus, yerrorplus, zerrorplus, xerrorminus, yerrorminus, zerrorminus, meta)\n\n\nThree dimensional coordinates from two vectors, with error bars.\n\n\n\n\n\nCoordinates(x, y, z; meta)\n\n\nConstruct coordinates from a matrix of values and edge vectors, such that z[i,j] corresponds to x[i] and y[j]. Empty scanlines are inserted, consistently with the mesh/ordering=x varies option of PGFPlots (the default).\n\nx = range(0; stop = 1, length = 10)\ny = range(-1; stop = 2, length = 13)\nz = sin.(x) + cos.(y\')\nCoordinates(x, y, z)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.DEFAULT_PREAMBLE",
    "page": "Docstrings",
    "title": "PGFPlotsX.DEFAULT_PREAMBLE",
    "category": "constant",
    "text": "The default preamble for LaTeX documents. Don\'t change this, customize CUSTOM_PREAMBLE instead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Expression",
    "page": "Docstrings",
    "title": "PGFPlotsX.Expression",
    "category": "type",
    "text": "Expression(expressions::Vector{String})\n\nExpression(strings::String...)\n\nAn Expression is a string or multiple strings, representing a function, and is written in a way LaTeX understands.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Graphics",
    "page": "Docstrings",
    "title": "PGFPlotsX.Graphics",
    "category": "type",
    "text": "Graphics([options], filename)\n\nGraphics data simply wraps an image (eg a .png file).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.GroupPlot",
    "page": "Docstrings",
    "title": "PGFPlotsX.GroupPlot",
    "category": "type",
    "text": "GroupPlot([options], contents...)\n\nA group plot, using the groupplots library of PGFPlots.\n\nThe contents after the global options are processed as follows:\n\nOptions (ie from @pgf {}) will emit a \\nextgroupplot with the given options,\nnothing is emitted as a \\nextgroupplot[group/empty plot],\nan Axis is emitted as a \\nextgroupplot[options...], followed by the contents,\nother values, eg Plot are emitted using print_tex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.HLine",
    "page": "Docstrings",
    "title": "PGFPlotsX.HLine",
    "category": "type",
    "text": "HLine([options], y)\n\nA horizontal vertical line at y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Legend",
    "page": "Docstrings",
    "title": "PGFPlotsX.Legend",
    "category": "type",
    "text": "Legend(labels)\n\n\nCorresponds to \\legend{ ... } in PGFPlots. Specifies multiple legends for an axis, its position is irrelevant.\n\nlabels are wrapped in {}s, so they can contain ,.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.LegendEntry",
    "page": "Docstrings",
    "title": "PGFPlotsX.LegendEntry",
    "category": "type",
    "text": "LegendEntry([options::Options], name, [isexpanded])\n\nCorresponds to the \\addlegendentry and \\addlegendentryexpanded forms of PGFPlots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.LogLogAxis",
    "page": "Docstrings",
    "title": "PGFPlotsX.LogLogAxis",
    "category": "type",
    "text": "LogLogAxis([options], elements...)\n\nLog-log axes, corresponds to loglogaxis in PGFPlots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.OptionType",
    "page": "Docstrings",
    "title": "PGFPlotsX.OptionType",
    "category": "type",
    "text": "Subtypes have an options::Options field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Options",
    "page": "Docstrings",
    "title": "PGFPlotsX.Options",
    "category": "type",
    "text": "Options(pairs; print_empty)\n\n\nOptions passed to PGFPlots for various structures (table, plot, etc).\n\nContents emitted in key = value form, or key when value ≡ nothing. Also see the @pgf convenience macro.\n\nWhen print_empty = false (the default), empty options are not printed. Use print_empty = true to force printing a [] in this case.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.PGFOption",
    "page": "Docstrings",
    "title": "PGFPlotsX.PGFOption",
    "category": "constant",
    "text": "Types also accepted as options.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Plot",
    "page": "Docstrings",
    "title": "PGFPlotsX.Plot",
    "category": "type",
    "text": "struct Plot <: PGFPlotsX.OptionType\n\nCorresponds to the \\addplot[3][+] family of pgfplot commands.\n\nInstead of the default constructor, use Plot([options], data, trailing...) and similar (PlotInc, Plot3, Plot3Inc) in user code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Plot3",
    "page": "Docstrings",
    "title": "PGFPlotsX.Plot3",
    "category": "function",
    "text": "Plot3([options::Options], data, trailing...)\n\nCorresponds to the \\addplot3 form in PGFPlots.\n\nFor the interpretation of the other arguments, see Plot(::Options, ::PlotData, ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Plot3Inc",
    "page": "Docstrings",
    "title": "PGFPlotsX.Plot3Inc",
    "category": "function",
    "text": "Plot3Inc([options::Options], data, trailing...)\n\nCorresponds to the \\addplot3+ form in PGFPlots.\n\nFor the interpretation of the other arguments, see Plot(::Options, ::PlotData, ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.PlotData",
    "page": "Docstrings",
    "title": "PGFPlotsX.PlotData",
    "category": "constant",
    "text": "Types accepted by Plot for the field data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.PlotInc",
    "page": "Docstrings",
    "title": "PGFPlotsX.PlotInc",
    "category": "function",
    "text": "PlotInc([options::Options], data, trailing...)\n\nCorresponds to the \\addplot+ form in PGFPlots.\n\nFor the interpretation of the other arguments, see Plot(::Options, ::PlotData, ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.PolarAxis",
    "page": "Docstrings",
    "title": "PGFPlotsX.PolarAxis",
    "category": "type",
    "text": "PolarAxis([options], elements...)\n\nPolar axes, corresponds to polaraxis in PGFPlots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.ROWSEP",
    "page": "Docstrings",
    "title": "PGFPlotsX.ROWSEP",
    "category": "constant",
    "text": "Default for additional row separator \\.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.STANDALONE_TIKZ_FILEEXTS",
    "page": "Docstrings",
    "title": "PGFPlotsX.STANDALONE_TIKZ_FILEEXTS",
    "category": "constant",
    "text": "Extensions that make save choose a standalone tikz format.\n\nThe saved file has no preamble, just a tikzpicture environment. These extensions should be recognized by \\includegraphics when the tikzscale LaTeX package is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.SemiLogXAxis",
    "page": "Docstrings",
    "title": "PGFPlotsX.SemiLogXAxis",
    "category": "type",
    "text": "SemiLogXAxis([options], elements...)\n\nLog x and linear y axes, corresponds to semilogxaxis in PGFPlots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.SemiLogYAxis",
    "page": "Docstrings",
    "title": "PGFPlotsX.SemiLogYAxis",
    "category": "type",
    "text": "SemiLogYAxis([options], elements...)\n\nLinear x and log y axes, corresponds to semilogyaxis in PGFPlots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.Table",
    "page": "Docstrings",
    "title": "PGFPlotsX.Table",
    "category": "type",
    "text": "Table([options], ...; ...)\n\nTabular data with options, corresponding to table[options] { ... } in PGFPlots.\n\noptions stores the options. If that is followed by an AbstractString, that will be used as a filename to read data from, otherwise all the arguments are passed on to TableData.\n\nExamples:\n\nTable([\"x\" => 1:10, \"y\" => 11:20])        # from a vector\n\nTable([1:10, 11:20])                      # same contents, unnamed\n\nTable(Dict(:x => 1:10, :y = 11:20))       # a Dict with symbols\n\n@pgf Table({ \"x index\" = 2, \"y index\" = 1\" }, randn(10, 3))\n\nlet x = range(0; stop = 1, length = 10), y = range(-2; stop =  3, length = 15)\n    Table(x, y, sin.(x + y\'))             # edges & matrix\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.TableData",
    "page": "Docstrings",
    "title": "PGFPlotsX.TableData",
    "category": "type",
    "text": "Tabular data with optional column names.\n\nThis corresponds to the part of tables between {}\'s in PGFPlots, without the options or table, so that it can also be used for “inline” tables. Table will call the constructor for this type to convert arguments after options.\n\ndata is a matrix, which contains the contents of the table, which will be printed using print_tex. colnames is a vector of column names (converted to string), or nothing for a table with no column names.\n\nWhen rowsep is true, an additional \\\\ is used as a row separator. The default is true, this is recommended to avoid “fragility” issues with inline tables.\n\nnote: Note\nTable queries TableData for its rowsep, and adds the relevant option accordingly. When using “inline” tables, eg in options, you have to specify this manually for the container. See the gallery for examples.\n\nAfter each index in scanlines, extra row separators are inserted. This can be used for skipping coordinates or implicitly defining the dimensions of a matrix for surf and mesh plots. They are expanded using expand_scanlines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.TikzDocument",
    "page": "Docstrings",
    "title": "PGFPlotsX.TikzDocument",
    "category": "type",
    "text": "TikzDocument(elements...; use_default_preamble = true, preamble = [])\n\nCorresponds to a LaTeX document, usually wrapping TikzPictures.\n\nuse_default_preamble determines whether a preamble is added from the global variables (see CUSTOM_PREAMBLE and CUSTOM_PREAMBLE_PATH).\n\npreamble is appended after the default one (if any).\n\npush! can be used to append elements after construction, and similarly push_preamble! for the preamble.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.TikzElement",
    "page": "Docstrings",
    "title": "PGFPlotsX.TikzElement",
    "category": "type",
    "text": "A TikzElement is a component of a TikzPicture. It can be a node or an Axis etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.TikzPicture",
    "page": "Docstrings",
    "title": "PGFPlotsX.TikzPicture",
    "category": "type",
    "text": "TikzPicture([options], contents...)\n\nCorredponds to a tikzpicture block in PGFPlots.\n\nElements can also be added with push! after contruction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.VLine",
    "page": "Docstrings",
    "title": "PGFPlotsX.VLine",
    "category": "type",
    "text": "VLine([options], x)\n\nA vertical line at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX._replace_fileext",
    "page": "Docstrings",
    "title": "PGFPlotsX._replace_fileext",
    "category": "function",
    "text": "_replace_fileext(filename, ext)\n\n\nReplace the extension in filename by ext (which should include the .). When the resulting filename is unchanged, throw an error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.add_indent",
    "page": "Docstrings",
    "title": "PGFPlotsX.add_indent",
    "category": "function",
    "text": "add_indent(str)\n\n\nAdd 4 spaces before each line in str. It is recommended (but not required) that the argument is terminated with a newline.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.axislike_environment",
    "page": "Docstrings",
    "title": "PGFPlotsX.axislike_environment",
    "category": "function",
    "text": "axislike_environment(::Type{<: AxisLike})\n\nReturn the corresponding LaTeX environment name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.container_options",
    "page": "Docstrings",
    "title": "PGFPlotsX.container_options",
    "category": "function",
    "text": "container_options(tabledata, ?)\n\n\nOptions to mix in for the container. Currently used for TableData and Table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.expand_scanlines",
    "page": "Docstrings",
    "title": "PGFPlotsX.expand_scanlines",
    "category": "function",
    "text": "expand_scanlines(n, nrow)\n\n\nExpand scanlines, which is a vector of scanline positions or an integer for repeated scanlines, into a Vector{Int}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.insert_scanlines",
    "page": "Docstrings",
    "title": "PGFPlotsX.insert_scanlines",
    "category": "function",
    "text": "insert_scanlines(coordinates, stride)\n\n\nReturn new coordinates, inserting nothing after every stride lines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.matrix_xyz",
    "page": "Docstrings",
    "title": "PGFPlotsX.matrix_xyz",
    "category": "function",
    "text": "matrix_xyz(x, y, z)\n\n\nGiven edges x, y for a matrix z, return a tuple of three vectors which contain the matching elements of x, y, and z, respectively. Useful for surf and mesh plots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.pgfsave",
    "page": "Docstrings",
    "title": "PGFPlotsX.pgfsave",
    "category": "function",
    "text": "save(filename, td; include_preamble, latex_engine, buildflags, dpi, showing_ide)\n\n\nSave the argument (either TikzDocument, or some other type which is wrapped in one automatically, eg TikzPicture, Axis, or Plot) to filename, guessing the format from the file extension. Keywords specify options, some specific to some output formats.\n\npgfsave is an alias which is exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.print_indent",
    "page": "Docstrings",
    "title": "PGFPlotsX.print_indent",
    "category": "function",
    "text": "print_indent(f, io_main)\n\n\nCall the f with an IO buffer, capture the output, print it to io_main indended with four spaces.\n\n\n\n\n\nprint_indent(io_main, elt)\n\n\nPrint elt to io with indentation. Shortcut for the function wrapper of print_indent for a single element.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.print_options",
    "page": "Docstrings",
    "title": "PGFPlotsX.print_options",
    "category": "function",
    "text": "print_options(io, options; newline)\n\n\nPrint options between []. For each option, the value is printed using print_opt. Unless newline == true (the default), a newline follows the ], otherwise a space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.print_tex",
    "page": "Docstrings",
    "title": "PGFPlotsX.print_tex",
    "category": "function",
    "text": "print_tex(io, elt, [container])\n\nPrint elt to io as LaTeX code. The optional third argument allows methods to work differently depending on the container.\n\nThis method should indent as if at the top level, containers indent their contents as necessary. See print_indent.\n\n\n\n\n\nprint_tex(io, str)\n\n\nPrint a string as is, terminated with a newline.\n\nnote: Note\nThis is used as a workaround for LaTeX code that does not have a corresponding type, eg as elements in Axis. raw or LaTeXStrings are useful to avoid piling up backslashes. The newline is added to separate tokens.\n\n\n\n\n\nprint_tex(io, x)\n\n\nReal numbers are printed as is, except for non-finite representation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.push_preamble!",
    "page": "Docstrings",
    "title": "PGFPlotsX.push_preamble!",
    "category": "function",
    "text": "push_preamble!(td, items)\n\n\nWorks like push!, but places items in the preamble.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.run_latex_once",
    "page": "Docstrings",
    "title": "PGFPlotsX.run_latex_once",
    "category": "function",
    "text": "succ, log, cmd =\n\nrun_latex_once(filename, eng, flags)\n\n\nCompile filename with LaTeX engine eng using the given flags.\n\nReturn the result of success, the contents of the logfile as a string, and the Cmd object that was run (the latter two useful for diagnostics and informative error messages).\n\nTemporary files (.aux, .log) are cleaned up.\n\n!!! NOTE\n\nChanging the working directory is required because of external tools like\n`gnuplot`, which don\'t respect `--output-directory`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PGFPlotsX.save",
    "page": "Docstrings",
    "title": "PGFPlotsX.save",
    "category": "function",
    "text": "save(filename, td; include_preamble, latex_engine, buildflags, dpi, showing_ide)\n\n\nSave the argument (either TikzDocument, or some other type which is wrapped in one automatically, eg TikzPicture, Axis, or Plot) to filename, guessing the format from the file extension. Keywords specify options, some specific to some output formats.\n\npgfsave is an alias which is exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PGFPlotsX.@define_axislikePGFPlotsX.@pgfPGFPlotsX.ACTIVE_LATEX_ENGINEPGFPlotsX.AbstractDictPGFPlotsX.AxisPGFPlotsX.AxisElementPGFPlotsX.AxisLikePGFPlotsX.CLASS_OPTIONSPGFPlotsX.CUSTOM_FLAGSPGFPlotsX.CUSTOM_PREAMBLEPGFPlotsX.CUSTOM_PREAMBLE_PATHPGFPlotsX.ColorsPGFPlotsX.ContourPGFPlotsX.CoordinatePGFPlotsX.CoordinateTypePGFPlotsX.CoordinatesPGFPlotsX.DEBUGPGFPlotsX.DEFAULT_ENGINEPGFPlotsX.DEFAULT_FLAGSPGFPlotsX.DEFAULT_PREAMBLEPGFPlotsX.DataFramesPGFPlotsX.ExpressionPGFPlotsX.GraphicsPGFPlotsX.GroupPlotPGFPlotsX.HAVE_PDFTOPPMPGFPlotsX.HAVE_PDFTOSVGPGFPlotsX.HLinePGFPlotsX.Ijulia_cachePGFPlotsX.LUALATEXPGFPlotsX.LaTeXEnginePGFPlotsX.LegendPGFPlotsX.LegendEntryPGFPlotsX.LogLogAxisPGFPlotsX.MissingExternalProgramErrorPGFPlotsX.OptionTypePGFPlotsX.OptionsPGFPlotsX.PDFLATEXPGFPlotsX.PGFOptionPGFPlotsX.PGFPlotsXPGFPlotsX.PGFPlotsXDisplayPGFPlotsX.PlotPGFPlotsX.Plot3PGFPlotsX.Plot3IncPGFPlotsX.PlotDataPGFPlotsX.PlotIncPGFPlotsX.PolarAxisPGFPlotsX.ROWSEPPGFPlotsX.STANDALONE_TIKZ_FILEEXTSPGFPlotsX.SemiLogXAxisPGFPlotsX.SemiLogYAxisPGFPlotsX.StatsBasePGFPlotsX.TablePGFPlotsX.TableDataPGFPlotsX.TikzDocumentPGFPlotsX.TikzElementPGFPlotsX.TikzElementOrStrPGFPlotsX.TikzPicturePGFPlotsX.VLinePGFPlotsX._DISPLAY_PDFPGFPlotsX._HAS_WARNED_SHELL_ESCAPEPGFPlotsX._OLD_LUALATEXPGFPlotsX._SHOWABLEPGFPlotsX.__init__PGFPlotsX.__is_junoPGFPlotsX._default_preamblePGFPlotsX._engine_cmdPGFPlotsX._is_idePGFPlotsX._is_ijuliaPGFPlotsX._is_junoPGFPlotsX._is_vscodePGFPlotsX._replace_fileextPGFPlotsX._tikzidPGFPlotsX.accum_opt!PGFPlotsX.add_indentPGFPlotsX.axislike_environmentPGFPlotsX.container_optionsPGFPlotsX.coordinate_or_nothingPGFPlotsX.dictifyPGFPlotsX.enable_interactivePGFPlotsX.evalPGFPlotsX.expand_errorsPGFPlotsX.expand_scanlinesPGFPlotsX.includePGFPlotsX.insert_scanlinesPGFPlotsX.latexenginePGFPlotsX.latexengine!PGFPlotsX.latexerrormsgPGFPlotsX.matrix_xyzPGFPlotsX.pgfsavePGFPlotsX.print_indentPGFPlotsX.print_optPGFPlotsX.print_optionsPGFPlotsX.print_texPGFPlotsX.prockeyPGFPlotsX.procmapPGFPlotsX.push_preamble!PGFPlotsX.rm_tmpfilesPGFPlotsX.run_latex_oncePGFPlotsX.savePGFPlotsX.savepdfPGFPlotsX.savepngPGFPlotsX.savesvgPGFPlotsX.savetexPGFPlotsX.showing_Ijulia"
},

]}
