var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Reexport-1",
    "page": "Readme",
    "title": "Reexport",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Maybe you have a module X that depends on module Y and you want using X to pull in all of the symbols from Y. Maybe you have an outer module A with an inner module B, and you want to export all of the symbols in B from A. It would be nice to have this functionality built into Julia, but we have yet to reach an agreement on what it should look like (see JuliaLang/julia#1986). This short macro is a stopgap we have a better solution."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "@reexport using <modules> calls using <modules> and also re-exports their symbols:module Y\n    ...\nend\n\nmodule X\n    using Reexport\n    @reexport using Y\n    # all of Y\'s exported symbols available here\nend\n\nusing X\n# all of Y\'s exported symbols also available here@reexport module <modulename> ... end defines module <modulename> and also re-exports its symbols:module A\n    using Reexport\n    @reexport module B\n    	...\n    end\n    # all of B\'s exported symbols available here\nend\n\nusing A\n# all of B\'s exported symbols available here"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Reexport.@reexportReexport.ReexportReexport.evalReexport.include"
},

]}
