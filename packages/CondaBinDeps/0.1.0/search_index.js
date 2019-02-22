var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CondaBinDeps.jl-1",
    "page": "Readme",
    "title": "CondaBinDeps.jl",
    "category": "section",
    "text": "(Image: Build Status — OS X and Linux) (Image: Build status — Windows)This package, which builds on the Conda.jl package allows one to use conda as a BinDeps binary provider for Julia. While other binary providers like Homebrew.jl, AptGet or WinRPM.jl are platform-specific, CondaBinDeps.jl is a cross-platform alternative. It can also be used without administrator rights, in contrast to the current Linux-based providers.As such, Conda.jl primary audience is Julia packages developers who have a dependency on  some native library.conda is a package manager which started as the binary package manager for the Anaconda Python distribution, but it also provides arbitrary packages. Instead of the full Anaconda distribution, Conda.jl uses the miniconda Python environment, which only includes conda and its dependencies.CondaBinDeps.jl is NOT an alternative Julia package manager, nor a way to manage Python installations. It will not use any pre-existing Anaconda or Python installation on  your machine."
},

{
    "location": "#Basic-functionality-1",
    "page": "Readme",
    "title": "Basic functionality",
    "category": "section",
    "text": "You can install this package by running Pkg.add(\"CondaBinDeps\") at the Julia prompt.  See the Conda.jl package for information on setting up conda environments, etcetera."
},

{
    "location": "#BinDeps-integration:-using-Conda.jl-as-a-package-author-1",
    "page": "Readme",
    "title": "BinDeps integration: using Conda.jl as a package author",
    "category": "section",
    "text": "CondaBinDeps.jl can be used as a Provider for BinDeps with the Conda.Manager type. You first need to write a conda recipe, and upload the corresponding build to binstar. Then, add CondaBinDeps in your REQUIRE file, and add the following to your deps/build.jl file:using BinDeps\n@BinDeps.setup\nnetcdf = library_dependency(\"netcdf\", aliases = [\"libnetcdf\" \"libnetcdf4\"])\n\n...\n\nusing CondaBinDeps\nprovides(CondaBinDeps.Manager, \"libnetcdf\", netcdf)If your dependency is available in another channel than the default one, you should register that channel.CondaBinDeps.Conda.add_channel(\"my_channel\")\nprovides(CondaBinDeps.Manager, \"libnetcdf\", netcdf)If the binary dependency is only available for some OS, give this information to BinDeps:provides(CondaBinDeps.Manager, \"libnetcdf\", netcdf, os=:Linux)To tell BinDeps to install the package to an environment different from the root environment, use EnvManager.provides(CondaBinDeps.EnvManager{:my_env}, \"libnetcdf\", netcdf)"
},

{
    "location": "#Bugs-and-suggestions-1",
    "page": "Readme",
    "title": "Bugs and suggestions",
    "category": "section",
    "text": "CondaBinDeps has been tested on Linux, OS X, and Windows. It should work on all these platforms.Please report any bug or suggestion as a github issue"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The CondaBinDeps.jl package is licensed under the MIT Expat license, and is copyrighted by Guillaume Fraux and contributors."
},

{
    "location": "autodocs/#CondaBinDeps.CondaBinDeps",
    "page": "Docstrings",
    "title": "CondaBinDeps.CondaBinDeps",
    "category": "module",
    "text": "The CondaBinDeps module provides access to the conda packages manager as a BinDeps provider, to install binary dependencies of other Julia packages.\n\nTo use Anaconda as a binary provider for BinDeps, the CondaBinDeps.Manager type is proposed. A small example looks like this:\n\n# Declare dependency\nusing BinDeps\n@BinDeps.setup\nnetcdf = library_dependency(\"netcdf\", aliases = [\"libnetcdf\",\"libnetcdf4\"])\n\nusing CondaBinDeps\n#  Use alternative conda channel.\nCondaBinDeps.Conda.add_channel(\"my_channel\")\nprovides(CondaBinDeps.Manager, \"libnetcdf\", netcdf)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CondaBinDeps.Manager",
    "page": "Docstrings",
    "title": "CondaBinDeps.Manager",
    "category": "type",
    "text": "Manager for root environment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CondaBinDeps.CondaBinDepsCondaBinDeps.EnvManagerCondaBinDeps.ManagerCondaBinDeps.evalCondaBinDeps.includeCondaBinDeps.install"
},

]}
