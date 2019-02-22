var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: codecov)"
},

{
    "location": "#Reproducible-1",
    "page": "Readme",
    "title": "Reproducible",
    "category": "section",
    "text": "Reproducible.jl is a lightweight package for creating reproducible reports in Julia.  \nSee https://joshday.github.io/Reproducible.jl/ forinstructions."
},

{
    "location": "autodocs/#Reproducible.CodeBlock",
    "page": "Docstrings",
    "title": "Reproducible.CodeBlock",
    "category": "type",
    "text": "CodeBlock(code::String, mod::Module)\n\nObject to represent code for a Reproducible renderer.  The constructor parses/evaluates the code inside the provided module. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reproducible.CodeRow",
    "page": "Docstrings",
    "title": "Reproducible.CodeRow",
    "category": "type",
    "text": "Object that represents a block of code.  Fields are:\n\ninput (String): the input block of code\noutput (Any): the result of eval(parse(input))\nrepldisplay (String): string of what would get sent to REPL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reproducible.build",
    "page": "Docstrings",
    "title": "Reproducible.build",
    "category": "function",
    "text": "build(path::String [, builddir::String]; frontmatter::String = \"\")\nbuild(path::Vector{String} [, builddir::String]; frontmatter::String = \"\")\n\nEvaluate the markdown document(s) in path and put the output in builddir, beginning  with frontmatter (since Julia\'s markdown parser does not support it).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reproducible.render",
    "page": "Docstrings",
    "title": "Reproducible.render",
    "category": "function",
    "text": "render(o::CodeBlock, r::Val{:renderer}; kw...)::String\n\nRender a CodeBlock for the given :renderer, which can be used via\n\n```julia; renderer;\n...\n```\n\nkw... always contains builddir.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Reproducible.CodeBlockReproducible.CodeRowReproducible.ReproducibleReproducible._kwsReproducible._reprReproducible.blockReproducible.buildReproducible.code2stringReproducible.codestringReproducible.evalReproducible.includeReproducible.make_linkReproducible.maketocReproducible.markdown2stringReproducible.render"
},

]}
