var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PkgMirrors-1",
    "page": "Readme",
    "title": "PkgMirrors",
    "category": "section",
    "text": "Use alternative mirrors to manage your packages for Julia.Linux, OSX: (Image: Build Status)Windows: (Image: Build status)Code Coverage: (Image: Coverage Status) (Image: codecov.io)中文文档PkgMirrors.jl is a client for boosting your download by using a mirror when you have a slow connection to GitHub (for example, in China).Current supported mirrors (see mirror_list.txt):ZJU (https://mirrors.zju.edu.cn/julia/)\nUSTC (https://mirrors.ustc.edu.cn/julia/)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "NOTE: This package will only work with Pkg3, which means you need to run Julia 0.7+ to use it.There are several ways to install this package:julia> # Type \"]\" to enter Pkg REPL-mode.\n\n(v1.0) pkg> add PkgMirrors  # Install from the official registry.\n\n(v1.0) pkg> add https://github.com/sunoru/PkgMirrors.jl  # Install from source code.\n\n(v1.0) pkg> add https://mirrors.zju.edu.cn/julia/PkgMirrors.jl.git@v1.1.0  # Install from the mirror. (Recommended)You will probably prefer the third way, for it is why you want to use PkgMirrors.jl. The URL can be replaced by that of your preferred mirror. Remove #v1.0.0 if you want to use the developing branch."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To start with PkgMirrors.jl, import the package and set a mirror for your Pkg.julia> import PkgMirrors\n\njulia> PkgMirrors.availables()  # to list available mirrors.\n2-element Array{String,1}:\n \"ZJU\"\n \"USTC\"\n\njulia> PkgMirrors.setmirror(\"ZJU\")  # to set the mirror.\n[ Info: Updating mirror information...\n[ Info: PkgMirror ZJU activated.\nPkgMirrors.PkgMirror(\"ZJU\", \"https://mirrors.zju.edu.cn/julia\")It will remember which mirror you have chosen, so there\'s no need to setmirror for the next time:julia> import PkgMirrors\n[ Info: Using saved mirror: ZJU (https://mirrors.zju.edu.cn/julia)\n[ Info: Updating mirror information...\n[ Info: PkgMirror ZJU activated.Once a mirror is selected and activated, you are free to use the standard Pkg to install or update packages. For example:julia> # Type \"]\" to enter Pkg REPL-mode.\n\n(v1.0) pkg> update\n  Updating registry at `C:\\Users\\sunoru\\.julia\\registries\\General`\n  Updating git-repo `https://mirrors.zju.edu.cn/julia/registries/General.git`\n Resolving package versions...\n  Updating `C:\\Users\\sunoru\\.julia\\environments\\v1.0\\Project.toml`\n [no changes]\n  Updating `C:\\Users\\sunoru\\.julia\\environments\\v1.0\\Manifest.toml`\n [no changes]\n\n(v1.0) pkg> add RandomNumbers\n Resolving package versions...\n  Updating `C:\\Users\\sunoru\\.julia\\environments\\v1.0\\Project.toml`\n  [e6cf234a] + RandomNumbers v1.0.1\n  Updating `C:\\Users\\sunoru\\.julia\\environments\\v1.0\\Manifest.toml`\n  [e6cf234a] + RandomNumbers v1.0.1You can find that the URL of the git repo for General registry has been modified to the one PkgMirrors.jl provides.If a package is not on the mirror it will have a fallback to use git clone from GitHub.When you exit Julia the changes to your registries will be undone automatically:julia> exit()\n[ Info: PkgMirror ZJU deactivated.You can also deactivate the mirror manually or clear the cache data by a simple statement:julia> PkgMirrors.deactivate()\n[ Info: PkgMirror ZJU deactivated.\n\njulia> PkgMirrors.clear()\n[ Info: Cache clear."
},

{
    "location": "#New-mirror?-1",
    "page": "Readme",
    "title": "New mirror?",
    "category": "section",
    "text": "See julia-mirror for how to build a mirror. You can file an issue or open a pull request to add a new mirror into the mirror list."
},

{
    "location": "#Issues-1",
    "page": "Readme",
    "title": "Issues",
    "category": "section",
    "text": "Known:PkgMirrors.jl is not able to deal with packages not in General registry at the moment. It is not vitalyet, since current working mirrors don\'t provide other registries as well.You are welcome to file an issue if having any questions."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "MIT License"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PkgMirrors.APIPkgMirrors.MIRRORSPkgMirrors.PKGPkgMirrors.PkgMirrorPkgMirrors.PkgMirrorsPkgMirrors.TypesPkgMirrors.UtilsPkgMirrors.__init__PkgMirrors.activatePkgMirrors.availablesPkgMirrors.clearPkgMirrors.currentPkgMirrors.deactivatePkgMirrors.evalPkgMirrors.includePkgMirrors.setmirror"
},

]}
