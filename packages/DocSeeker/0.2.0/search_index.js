var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DocSeeker-1",
    "page": "Readme",
    "title": "DocSeeker",
    "category": "section",
    "text": "(Image: Build Status)DocSeeker.jl provides utilities for handling documentation in local (so far) packages."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The main entry point is searchdocs:searchdocs(\"sin\")will return a vector of tuples of scores and their corresponding match. Scores are numbers between 0 and 1, and represent the quality of a given match. Matches are DocObj, which accumulate lots of metadata about a binding (e.g. name, type, location etc.).searchdocs takes three keyword arguments:mod::String = \"Main\" will restrict the search to the given module – by default every loadedpackage will be searched.loaded::Bool = true will search only packages in the current session, while loaded = falsewill search in all locally installed packages (actually only those in Pkg.dir()). Requires a call to DocSeeker.createdocsdb() beforehand.exportedonly::Bool = false will search all names a module has, while exportedonly=trueonly takes exported names into consideration.Re-generation of the cache that powers the search in all installed packages can be triggered via DocSeeker.createdocsdb() (async, so no worries about killing you julia session). For now, there is no automatic re-generation, though that\'ll be implemented soon."
},

{
    "location": "autodocs/#DocSeeker.alldocs",
    "page": "Docstrings",
    "title": "DocSeeker.alldocs",
    "category": "function",
    "text": "alldocs() -> Vector{DocObj}\n\nFind all docstrings in all currently loaded Modules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocSeeker.baseURL",
    "page": "Docstrings",
    "title": "DocSeeker.baseURL",
    "category": "function",
    "text": "baseURL(links::Vector{Markdown.Link}) -> String\n\nFind the most common host and return the first URL in links with that host.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocSeeker.createdocsdb",
    "page": "Docstrings",
    "title": "DocSeeker.createdocsdb",
    "category": "function",
    "text": "createdocsdb()\n\nAsynchronously create a \"database\" of all local docstrings in Pkg.dir(). This is done by loading all packages and using introspection to retrieve the docstrings – the obvious limitation is that only packages that actually load without errors are considered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocSeeker.docsdir",
    "page": "Docstrings",
    "title": "DocSeeker.docsdir",
    "category": "function",
    "text": "docsdir(pkg) -> String\n\nFind the directory conataining the documenatation for package pkg. Will fall back to returning a package\'s README.md. Returns an empty String if no indication of documentation is found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocSeeker.docsurl",
    "page": "Docstrings",
    "title": "DocSeeker.docsurl",
    "category": "function",
    "text": "docsurl(pkg) -> String\n\nReturn the most likely candidate for a package\'s online documentation or an empty string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocSeeker.finddocsURL",
    "page": "Docstrings",
    "title": "DocSeeker.finddocsURL",
    "category": "function",
    "text": "finddocsURL(pkg) -> Vector{Markdown.Link}\n\nSearch pkgs readme for links to documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocSeeker.loaddocsdb",
    "page": "Docstrings",
    "title": "DocSeeker.loaddocsdb",
    "category": "function",
    "text": "loaddocsdb() -> Vector{DocObj}\n\nRetrieve the docstrings from the \"database\" created by createdocsdb(). Will return an empty vector if the database is locked by createdocsdb().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocSeeker.score",
    "page": "Docstrings",
    "title": "DocSeeker.score",
    "category": "function",
    "text": "score(needle, s::Docs.DocObj) -> Float\n\nScores s against the search query needle. Returns a Float between 0 and 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DocSeeker.CACHEDocSeeker.CACHETIMEOUTDocSeeker.DOCDBCACHEDocSeeker.DocObjDocSeeker.DocSeekerDocSeeker.MAX_RETURN_SIZEDocSeeker.__initDocSeeker._createdocsdbDocSeeker._loaddocsdbDocSeeker.alldocsDocSeeker.baseURLDocSeeker.basepathDocSeeker.createdocsdbDocSeeker.dbpathDocSeeker.determinetypeDocSeeker.docsdirDocSeeker.docsurlDocSeeker.dynamicsearchDocSeeker.evalDocSeeker.finddocsURLDocSeeker.findlinksDocSeeker.findplainlinksDocSeeker.getfilesDocSeeker.includeDocSeeker.isdoclinkDocSeeker.jlhomeDocSeeker.keywordsDocSeeker.load_documenter_docsDocSeeker.loaddocsdbDocSeeker.lockpathDocSeeker.modulebindingsDocSeeker.pkgrootpathDocSeeker.readmepathDocSeeker.scoreDocSeeker.searchdocsDocSeeker.searchfiles"
},

]}
