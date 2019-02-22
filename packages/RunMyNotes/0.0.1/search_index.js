var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RunMyNotes.jl-1",
    "page": "Readme",
    "title": "RunMyNotes.jl",
    "category": "section",
    "text": "I like to write up notes of how to use my packages in plain .jl files, which the package Literate.jl can run, producing .ipynb notebooks, with graphs embedded. This little package automates that slightly. Typing this:  folder(\"~/.julia/dev/MyPackage/notes/\")or (roughly) equivalentlyimport MyPackage\npackage(MyPackage)will run all files in that folder. Then it will convert the resulting notebooks to .html to make it easier to preview last week\'s graphs, unless you say html=false. You can also pass all=false to update only files that have changed. By default everything is saved in the same folder, but to avoid saving for all eternity every day\'s versions of all figures etc, I add to .gitignore these lines:.DS_Store\n*.ipynb\n*.htmlThen I can happily include this in the package\'s tests, it returns true if there are no errors. In fact if you type ] test RunMyNotes this will happen for this package itself, for a simple note.jl. Or else: using RunMyNotes\npackage(RunMyNotes, \"~/Desktop\")Michael Abbott, December 2018"
},

{
    "location": "autodocs/#RunMyNotes.folder",
    "page": "Docstrings",
    "title": "RunMyNotes.folder",
    "category": "function",
    "text": "folder(in, [out])\n\nRuns all files *.jl found in folder in, generating a Jupyter .ipynb notebook for each, saved in the same folder or in out if provided.\n\nKeywords: \n\nhtml=true then converts this notebook to HTML too, using jupyter nbconvert.\nthrow=true exits with an error if any errors were encountered .\nall=true runs everything, all=false will skip any .jl files which are older than their .ipynb versions.\n\'verbose=true` adds details about time & computer at the end.\ncredit=true adds links.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RunMyNotes.package",
    "page": "Docstrings",
    "title": "RunMyNotes.package",
    "category": "function",
    "text": "package(ModuleName)\n\nThis essentially runs RunMyNotes.foler(\"~/.julia/dev/ModuleName/notes/\"). Change keyword sub=\"notes\" to select a different folder.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RunMyNotes.RunMyNotesRunMyNotes.appendcreditRunMyNotes.appendinfoRunMyNotes.evalRunMyNotes.folderRunMyNotes.includeRunMyNotes.infostringRunMyNotes.package"
},

]}
