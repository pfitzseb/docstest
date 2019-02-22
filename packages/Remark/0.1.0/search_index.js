var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Remark-1",
    "page": "Readme",
    "title": "Remark",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)A simple Julia package to create presentations from markdown using Remark."
},

{
    "location": "#Example-use-1",
    "page": "Readme",
    "title": "Example use",
    "category": "section",
    "text": "To install type the following command in the Julia REPLPkg.clone(\"https://github.com/piever/Remark.jl.git\")\nPkg.build(\"https://github.com/piever/Remark.jl.git\")Check Remark documentation on how to write the markdown for it to work with Remark. The most important thing is to use --- to separate slides, a tiny example markdown file can be found here.import Remark\n\n# Add presentation (html+markdown) from the markdown file \"example.md\" in the folder \"presentation/mybeautifulslides\"\nslideshowdir = Remark.slideshow(\"example.md\", \"presentation/mybeautifulslides\")\n\n# Open presentation in default browser\nRemark.open(slideshowdir)"
},

{
    "location": "#Offline-use-1",
    "page": "Readme",
    "title": "Offline use",
    "category": "section",
    "text": "The slideshow command creates a slideshow that uses local javascript libraries: the resulting presentation folder can be opened offline."
},

{
    "location": "#Using-from-a-Julia-script-1",
    "page": "Readme",
    "title": "Using from a Julia script",
    "category": "section",
    "text": "Using the Literate package it is possible to create a presentation from a Julia script. As explained in the Literate documentation, add a comment to slides corresponding to markdown. A slide separator is now # --- for example."
},

{
    "location": "#Documenter-1",
    "page": "Readme",
    "title": "Documenter",
    "category": "section",
    "text": "By default Documenter is run on the provided markdown. To keep the markdown as is, use documenter=false."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Remark.RemarkRemark._create_index_htmlRemark._create_index_mdRemark._pkg_assetsRemark._replace_lineRemark.copytobuffer!Remark.depfilesRemark.depnamesRemark.depsRemark.evalRemark.includeRemark.openRemark.slideshowRemark.styles_css"
},

]}
