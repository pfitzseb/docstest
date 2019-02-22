var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<p align=\"center\">   <img src=\"./docs/src/assets/logo.png\" alt=\"ForceImport.jl\"/> </p>"
},

{
    "location": "#ForceImport.jl-1",
    "page": "Readme",
    "title": "ForceImport.jl",
    "category": "section",
    "text": "Macro that force imports conflicting methods in Julia modules(Image: Build Status) (Image: Build status)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Forces imports of exported methods from Module, even if there are conflicts.@force using ModuleIf you are using this package, then the @force is strong in you and the Module!"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Allows using packages that export conflicting definitions of methods and imports them into the module.module Foo\n    export +\n    +() = 7\nend\n\nmodule Bar\n    using ForceImport\n    @force using Foo\nend\n\njulia> Bar.:+()\n7Note that if the conflicting definition of the method is used before the import, then @force will not be effective.julia> 1+1\n2\n\njulia> @force using Foo\nWARNING: ignoring conflicting import of Foo.+ into MainHence the macro has to be called before the relevant methods have been called. "
},

{
    "location": "autodocs/#ForceImport.@force",
    "page": "Docstrings",
    "title": "ForceImport.@force",
    "category": "macro",
    "text": "    @force using Module\n\nForces imports of exported methods from Module, even if there are conflicts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForceImport.@merge",
    "page": "Docstrings",
    "title": "ForceImport.@merge",
    "category": "macro",
    "text": "    @merge fun(x) = x\n\nAutomatically imports fun from its module if necessary for function definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForceImport.@port",
    "page": "Docstrings",
    "title": "ForceImport.@port",
    "category": "macro",
    "text": "    ForceImport.@port using Module\n\nForce exports methods from Module in current module.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ForceImport.@forceForceImport.@mergeForceImport.@portForceImport.ForceImportForceImport.evalForceImport.impForceImport.include"
},

]}
