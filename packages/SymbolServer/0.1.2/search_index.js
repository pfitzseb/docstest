var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SymbolServer-1",
    "page": "Readme",
    "title": "SymbolServer",
    "category": "section",
    "text": "(Image: Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.) (Image: Build Status) (Image: Build status) (Image: codecov.io)SymbolServer is a helper package for LanguageServer.jl."
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "You can start a new symbol server for a given julia environment like this:using SymbolServer\n\npath_to_julia_env = \"/foo/bar\"\n\ns = SymbolServerProcess(path_to_julia_env)You can also start a symbol server for the default julia environment if you don\'t pass any path:using SymbolServer\n\ns = SymbolServerProcess()You can then call the getstore function."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SymbolServer.FunctionStoreSymbolServer.MethodStoreSymbolServer.ModuleStoreSymbolServer.SymStoreSymbolServer.SymbolServerSymbolServer.SymbolServerProcessSymbolServer._getdocSymbolServer.abstractStoreSymbolServer.collect_paramsSymbolServer.evalSymbolServer.genericStoreSymbolServer.get_all_packages_in_envSymbolServer.get_core_packageSymbolServer.get_installed_packages_in_envSymbolServer.getstoreSymbolServer.import_packageSymbolServer.includeSymbolServer.load_coreSymbolServer.load_moduleSymbolServer.load_packageSymbolServer.load_store_from_discSymbolServer.primitiveStoreSymbolServer.read_methodsSymbolServer.requestSymbolServer.save_store_to_discSymbolServer.structStore"
},

]}
