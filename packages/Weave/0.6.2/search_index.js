var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Weave-1",
    "page": "Readme",
    "title": "Weave",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: ) (Image: )Weave is a scientific report generator/literate programming tool for Julia. It resembles Pweave, Knitr, rmarkdown and Sweave.You can write your documentation and code in input document using Noweb, Markdown, Script syntax and use weave function to execute to document to capture results and figures.Current featuresNoweb, markdown or script syntax for input documents.\nExecute code as terminal or \"script\" chunks.\nCapture Plots.jl figures (or Gadfly and PyPlot on julia 0.6).\nSupports LaTex, Pandoc, Github markdown, MultiMarkdown, Asciidoc and reStructuredText output\nPublish markdown directly to html and pdf using Julia or Pandoc markdown.\nSimple caching of results\nConvert to and from IJulia notebooksCiting Weave: Pastell, Matti. 2017. Weave.jl: Scientific Reports Using Julia. The Journal of Open Source Software. http://dx.doi.org/10.21105/joss.00204(Image: Weave code and output)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install the latest release using Julia package manager:using Pkg\nPkg.add(\"Weave\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Run from julia using Plots.jl for plots:#First add depencies for the example\nusing Pkg; Pkg.add.([\"Plots\", \"DSP\"])\n#Use Weave\nusing Weave\nweave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\"), out_path=:pwd)If you have LaTeX installed you can also weave directly to pdf.weave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\"),\n    out_path=:pwd, doctype=\"md2pdf\")"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Documenter.jl with MKDocs generated documentation:(Image: ) (Image: )"
},

{
    "location": "#Editor-support-1",
    "page": "Readme",
    "title": "Editor support",
    "category": "section",
    "text": "I have made language-weave package for Atom to do the syntax highlighting correctly."
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "I will probably add new features to Weave when I need them myself or if they are requested and not too difficult to implement. You can contribute by opening issues on Github or implementing things yourself and making a pull request. I\'d also appreciate example documents written using Weave to add to examples."
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "You can see the list of contributors on Github: https://github.com/mpastell/Weave.jl/graphs/contributors. Thanks for the important additions, fixes and comments."
},

{
    "location": "autodocs/#Weave.Hugo",
    "page": "Docstrings",
    "title": "Weave.Hugo",
    "category": "type",
    "text": "Formatter for Hugo: https://gohugo.io/\n\nWhen uglyURLs is false, prepend figure path by ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.add_figure",
    "page": "Docstrings",
    "title": "Weave.add_figure",
    "category": "function",
    "text": "Add saved figure name to results and return the name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.convert_doc",
    "page": "Docstrings",
    "title": "Weave.convert_doc",
    "category": "function",
    "text": "convert_doc(infile::AbstractString, outfile::AbstractString; format = nothing)\n\nConvert Weave documents between different formats\n\ninfile = Name of the input document\noutfile = Name of the output document\nformat = Output format (optional). Detected from outfile extension, but can be set to \"script\", \"markdown\", \"notebook\" or \"noweb\".\n\n\n\n\n\nConvert Weave document to Jupyter notebook format\n\n\n\n\n\nConvert Weave document to Jupyter notebook format\n\n\n\n\n\nConvert Weave document to noweb format\n\n\n\n\n\nConvert Weave document to script format\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.detect_doctype",
    "page": "Docstrings",
    "title": "Weave.detect_doctype",
    "category": "function",
    "text": "Detect the output format based on file extension\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.detect_informat",
    "page": "Docstrings",
    "title": "Weave.detect_informat",
    "category": "function",
    "text": "Detect the input format based on file extension\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.detect_outformat",
    "page": "Docstrings",
    "title": "Weave.detect_outformat",
    "category": "function",
    "text": "Autodetect format for converter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.get_chunk_defaults",
    "page": "Docstrings",
    "title": "Weave.get_chunk_defaults",
    "category": "function",
    "text": "get_chunk_defaults()\n\nGet default options used for code chunks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.get_outname",
    "page": "Docstrings",
    "title": "Weave.get_outname",
    "category": "function",
    "text": "Get output file name based on out_path\n\n\n\n\n\nGet output file name based on out_path\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.include_weave",
    "page": "Docstrings",
    "title": "Weave.include_weave",
    "category": "function",
    "text": "include_weave(doc, informat=:auto)\n\nInclude code from Weave document calling include_string on all code from doc. Code is run in the path of the include document.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.list_out_formats",
    "page": "Docstrings",
    "title": "Weave.list_out_formats",
    "category": "function",
    "text": "list_out_formats()\n\nList supported output formats\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.notebook",
    "page": "Docstrings",
    "title": "Weave.notebook",
    "category": "function",
    "text": "notebook(source::String, out_path=:pwd)\n\nConvert Weave document source to Jupyter notebook and execute the code using nbconvert. Requires IJulia. Ignores all chunk options\n\nout_path: Path where the output is generated. Can be: :doc: Path of the source document,  :pwd: Julia working directory, \"somepath\": Path as a   String e.g \"/home/mpastell/weaveout\"\nnbconvert cell timeout in seconds. Defaults to -1 (no timeout)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.pandoc2html",
    "page": "Docstrings",
    "title": "Weave.pandoc2html",
    "category": "function",
    "text": "pandoc2html(formatted::AbstractString, doc::WeaveDoc)\n\nConvert output from pandoc markdown to html using Weave.jl template\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.pandoc2pdf",
    "page": "Docstrings",
    "title": "Weave.pandoc2pdf",
    "category": "function",
    "text": "pandoc2pdf(formatted::AbstractString, doc::WeaveDoc)\n\nConvert output from pandoc markdown to pdf using Weave.jl template\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.parse_doc",
    "page": "Docstrings",
    "title": "Weave.parse_doc",
    "category": "function",
    "text": "Parse documents with Weave.jl markup\n\n\n\n\n\nParse .jl scripts with Weave.jl markup\n\n\n\n\n\nParse IJUlia notebook\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.read_doc",
    "page": "Docstrings",
    "title": "Weave.read_doc",
    "category": "function",
    "text": "Read and parse input document\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.render_doc",
    "page": "Docstrings",
    "title": "Weave.render_doc",
    "category": "function",
    "text": "render_doc(formatted::AbstractString, format)\n\nRender formatted document to a template\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.restore_chunk_defaults",
    "page": "Docstrings",
    "title": "Weave.restore_chunk_defaults",
    "category": "function",
    "text": "restore_chunk_defaults()\n\nRestore Weave.jl default chunk options\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.set_chunk_defaults",
    "page": "Docstrings",
    "title": "Weave.set_chunk_defaults",
    "category": "function",
    "text": "set_chunk_defaults(opts::Dict{Symbol, Any})\n\nSet default options for code chunks, use getchunkdefaults to see the current values.\n\ne.g. set default dpi to 200 and fig_width to 8\n\njulia> set_chunk_defaults(Dict{Symbol, Any}(:dpi => 200, fig_width => 8))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.tangle",
    "page": "Docstrings",
    "title": "Weave.tangle",
    "category": "function",
    "text": "tangle(source ; out_path=:doc, informat=\"noweb\")\n\nTangle source code from input document to .jl file.\n\ninformat: \"noweb\" of \"markdown\"\nout_path: Path where the output is generated. Can be: :doc: Path of the source document, :pwd: Julia working directory,  \"somepath\", directory name as a string e.g \"/home/mpastell/weaveout\"\n\nor filename as string e.g. ~/outpath/outfile.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Weave.weave",
    "page": "Docstrings",
    "title": "Weave.weave",
    "category": "function",
    "text": "weave(source ; doctype = :auto,\n    informat=:auto, out_path=:doc, args = Dict(),\n    mod::Union{Module, Symbol} = Main,\n    fig_path = \"figures\", fig_ext = nothing,\n    cache_path = \"cache\", cache=:off,\n    template = nothing, highlight_theme = nothing, css = nothing,\n    pandoc_options = \"\",\n    latex_cmd = \"xelatex\")\n\nWeave an input document to output file.\n\ndoctype: :auto = set based on file extension or specify one of the supported formats. See list_out_formats()\ninformat: :auto = set based on file extension or set to  \"noweb\", \"markdown\" or  script\nout_path: Path where the output is generated. Can be: :doc: Path of the source document, :pwd:  Julia working directory, \"somepath\": output directory as a String e.g \"/home/mpastell/weaveout\" or filename as  string e.g. ~/outpath/outfile.tex.\nargs: dictionary of arguments to pass to document. Available as WEAVE_ARGS\nmod: Module where Weave evals code. Defaults to :sandbox  to create new sandbox module, you can also pass a module e.g. Main.\nfig_path: where figures will be generated, relative to out_path\nfig_ext: Extension for saved figures e.g. \".pdf\", \".png\". Default setting depends on doctype.\ncache_path: where of cached output will be saved.\ncache: controls caching of code: :off = no caching, :all = cache everything, :user = cache based on chunk options, :refresh, run all code chunks and save new cache.\nthrow_errors if false errors are included in output document and the whole document is   executed. if true errors are thrown when they occur.\ntemplate : Template (file path) for md2html or md2tex formats.\nhighlight_theme : Theme (Highlights.AbstractTheme) for used syntax highlighting\ncss : CSS (file path) used for md2html format\npandoc_options = String array of options to pass to pandoc for pandoc2html and  pandoc2pdf formats e.g. [\"–toc\", \"-N\"]\nlatex_cmd the command used to make pdf from .tex\n\nNote: Run Weave from terminal and not using IJulia, Juno or ESS, they tend to mess with capturing output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Weave.AsciiDocWeave.ChunkOutputWeave.CodeChunkWeave.CollectResultWeave.DocChunkWeave.GithubMarkdownWeave.HugoWeave.InlineWeave.InlineCodeWeave.InlineTextWeave.JMarkdown2HTMLWeave.JMarkdown2texWeave.Markdown2HTMLWeave.MarkdownOutputWeave.MarkupInputWeave.MultiMarkdownWeave.NotebookInputWeave.NotebookOutputWeave.NowebOutputWeave.PandocWeave.Pandoc2HTMLWeave.ReportWeave.RestWeave.ScriptInputWeave.ScriptOutputWeave.ScriptResultWeave.TermResultWeave.TexWeave.WeaveWeave.WeaveChunkWeave.WeaveDocWeave.__init__Weave.add_figureWeave.adocWeave.capture_outputWeave.clear_sandboxWeave.collect_resultsWeave.convert_docWeave.defaultParamsWeave.default_mime_typesWeave.detect_doctypeWeave.detect_informatWeave.detect_outformatWeave.docParamsWeave.embed_figuresWeave.evalWeave.eval_chunkWeave.formatWeave.format_chunkWeave.format_codeWeave.format_inlineWeave.format_outputWeave.format_termchunkWeave.formatfiguresWeave.formatsWeave.get_chunk_defaultsWeave.get_cwdWeave.get_fignameWeave.get_outnameWeave.getstdoutWeave.githubWeave.highlightWeave.hugoWeave.img2base64Weave.includeWeave.include_weaveWeave.indentWeave.input_formatsWeave.list_out_formatsWeave.md2htmlWeave.md2texWeave.multimarkdownWeave.notebookWeave.output_formatsWeave.pandocWeave.pandoc2htmlWeave.pandoc2pdfWeave.parse_docWeave.parse_headerWeave.parse_inlineWeave.parse_inputWeave.pdoc2htmlWeave.pop_postexecute_hookWeave.pop_preexecute_hookWeave.postexecute_hooksWeave.preexecute_hooksWeave.push_postexecute_hookWeave.push_preexecute_hookWeave.pushoptWeave.rcParamsWeave.read_cacheWeave.read_docWeave.render_docWeave.reset_reportWeave.restore_chunkWeave.restore_chunk_defaultsWeave.rstWeave.run_chunkWeave.run_codeWeave.run_inlineWeave.run_latexWeave.set_chunk_defaultsWeave.set_rc_paramsWeave.strip_headerWeave.stylesheetWeave.tangleWeave.texWeave.texmintedWeave.uc2texWeave.weaveWeave.wraplineWeave.wraplinesWeave.write_cache"
},

]}
