var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TikzPictures-1",
    "page": "Readme",
    "title": "TikzPictures",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This library allows one to create Tikz pictures and save in various formats. It integrates with IJulia, outputting SVG images to the notebook.In order to use this library, lualatex must be installed. The texlive and miktex distributions include lualatex. You must also have dvisvgm installed. On Ubuntu, you can get these, if not already present, by running sudo apt-get install texlive-latex-base and sudo apt-get install texlive-binaries.You also need pdf2svg. On Ubuntu, you can get this by running sudo apt-get install pdf2svg. On Windows, you can download the binaries from http://www.cityinthesky.co.uk/opensource/pdf2svg/. Be sure to add pdf2svg to your path (and restart).Note: this package will attempt to turn off interpolation in the generated SVG, but this currently only works in Chrome."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using TikzPictures\ntp = TikzPicture(\"\\\\draw (0,0) -- (10,10);\\n\\\\draw (10,0) -- (0,10);\\n\\\\node at (5,5) {tikz \\$\\\\sqrt{\\\\pi}\\$};\", options=\"scale=0.25\", preamble=\"\")\nsave(PDF(\"test\"), tp)\nsave(SVG(\"test\"), tp)\nsave(TEX(\"test\"), tp)\nsave(TIKZ(\"test\"), tp)As you can see above, you have to escape backslashes and dollar signs in LaTeX. To simplify things, this package provides the LaTeXString type, which can be constructed via L\"....\" without escaping backslashes or dollar signs.tp = TikzPicture(L\"\"\"\n\\draw (0,0) -- (10,10);\n\\draw (10,0) -- (0,10);\n\\node at (5,5) {tikz $\\sqrt{\\pi}$};\"\"\"\n, options=\"scale=0.25\", preamble=\"\")"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TikzPictures.@L_mstrTikzPictures.@L_strTikzPictures.LaTeXStringTikzPictures.PDFTikzPictures.SVGTikzPictures.SaveTypeTikzPictures.TEXTikzPictures.TIKZTikzPictures.TikzDocumentTikzPictures.TikzPictureTikzPictures.TikzPicturesTikzPictures._mktempdirTikzPictures._standaloneWorkaroundTikzPictures._tikzCommandTikzPictures._tikzDeleteIntermediateTikzPictures._tikzUsePDF2SVGTikzPictures._tikzidTikzPictures.evalTikzPictures.extensionTikzPictures.includeTikzPictures.latexerrormsgTikzPictures.push!TikzPictures.removeExtensionTikzPictures.saveTikzPictures.showableTikzPictures.standaloneWorkaroundTikzPictures.tikzCommandTikzPictures.tikzDeleteIntermediateTikzPictures.tikzUsePDF2SVG"
},

]}
