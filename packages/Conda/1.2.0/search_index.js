var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Conda.jl-1",
    "page": "Readme",
    "title": "Conda.jl",
    "category": "section",
    "text": "(Image: Build Status -- OS X and Linux) (Image: Build status -- Windows)This package allows one to use conda as a cross-platform binary provider for Julia for other Julia packages, especially to install binaries that have complicated dependencies like Python.conda is a package manager which started as the binary package manager for the Anaconda Python distribution, but it also provides arbitrary packages. Instead of the full Anaconda distribution, Conda.jl uses the miniconda Python environment, which only includes conda and its dependencies."
},

{
    "location": "#Basic-functionality-1",
    "page": "Readme",
    "title": "Basic functionality",
    "category": "section",
    "text": "You can install this package by running Pkg.add(\"Conda\") at the Julia prompt.Basic package managing utilities are provided in the Conda module:Conda.add(package, env): install a package;\nConda.rm(package, env): remove (uninstall) a package;\nConda.update(env): update all installed packages to the latest version;\nConda.list(env): list all installed packages.\nConda.add_channel(channel, env): add a channel to the list of channels;\nConda.channels(env): get the current list of channels;\nConda.rm_channel(channel, env): remove a channel from the list of channels;The parameter env is optional and defaults to ROOTENV. See below for more info."
},

{
    "location": "#Conda-environments-1",
    "page": "Readme",
    "title": "Conda environments",
    "category": "section",
    "text": "Conda environments allow you to manage multiple distinct sets of packages in a way that avoids conflicts and allows you to install different versions of packages simultaneously.The Conda.jl package supports environments by allowing you to pass an optional env parameter to functions for package installation, update, and so on. If this parameter is not specified, then the default \"root\" environment (corresponding to the path in Conda.ROOTENV) is used. The environment name can be specified as a Symbol, or the full path of the environment (if you want to use an environment in a nonstandard directory) can be passed as a string.For example:using Conda\nConda.add(\"libnetcdf\", :my_env)\nConda.add(\"libnetcdf\", \"/path/to/directory\")(NOTE: If you are installing Python packages for use with PyCall, you must use the root environment.)"
},

{
    "location": "#BinDeps-integration:-using-Conda.jl-as-a-package-author-1",
    "page": "Readme",
    "title": "BinDeps integration: using Conda.jl as a package author",
    "category": "section",
    "text": "Conda.jl can be used as a Provider for BinDeps with the CondaBinDeps package."
},

{
    "location": "#Using-a-pre-existing-Conda-installation-1",
    "page": "Readme",
    "title": "Using a pre-existing Conda installation",
    "category": "section",
    "text": "To use a pre-existing Conda installation, first create an environment for Conda.jl and then set the CONDA_JL_HOME environment variable to the full path of the environment. You have to rebuild Conda.jl and many of the packages that use it after this. So as to install their dependancies to the specified enviroment.conda create -n conda_jl python conda\nexport CONDA_JL_HOME=\"/path/to/miniconda/envs/conda_jl\"\njulia -e \'Pkg.build(\"Conda\")\'"
},

{
    "location": "#Using-Python-2-1",
    "page": "Readme",
    "title": "Using Python 2",
    "category": "section",
    "text": "By default, the Conda.jl package installs Python 3, and this version of Python is used for all Python dependencies.  If you want to use Python 2 instead, set CONDA_JL_VERSION to \"2\" prior to installing Conda. (This only needs to be done once; Conda subsequently remembers the version setting.)Once you have installed Conda and run its Miniconda installer, the Python version cannot be changed without deleting your existing Miniconda installation. If you set ENV[\"CONDA_JL_VERSION\"]=\"2\" and run Pkg.build(\"Conda\"), it will tell you how to delete your existing Miniconda installation if needed.Most users will not need to use Python 2. This is provided primarily for developers wishing to test their packages for both Python 2 and Python, e.g. by setting the CONDA_JL_VERSION variable on TravisCI and/or AppVeyor."
},

{
    "location": "#Bugs-and-suggestions-1",
    "page": "Readme",
    "title": "Bugs and suggestions",
    "category": "section",
    "text": "Conda has been tested on Linux, OS X, and Windows.Please report any bug or suggestion as an github issue"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The Conda.jl package is licensed under the MIT Expat license, and is copyrighted by Guillaume Fraux and contributors."
},

{
    "location": "autodocs/#Conda.Conda",
    "page": "Docstrings",
    "title": "Conda.Conda",
    "category": "module",
    "text": "The Conda module provides access to the conda packages manager to install binary dependencies of other Julia packages.\n\nThe main functions in Conda are:\n\nConda.add(package): install a package;\nConda.rm(package): remove (uninstall) a package;\nConda.update(): update all installed packages to the latest version;\nConda.list(): list all installed packages.\nConda.add_channel(channel): add a channel to the list of channels;\nConda.channels(): get the current list of channels;\nConda.rm_channel(channel): remove a channel from the list of channels;\n\n```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda._install_conda",
    "page": "Docstrings",
    "title": "Conda._install_conda",
    "category": "function",
    "text": "Install miniconda if it hasn\'t been installed yet; installconda(true) installs Conda even if it has already been installed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda._installed_packages",
    "page": "Docstrings",
    "title": "Conda._installed_packages",
    "category": "function",
    "text": "List all installed packages as an array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda._installed_packages_dict",
    "page": "Docstrings",
    "title": "Conda._installed_packages_dict",
    "category": "function",
    "text": "List all installed packages as an dict of tuples with (version_number, fullname).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda._installer_url",
    "page": "Docstrings",
    "title": "Conda._installer_url",
    "category": "function",
    "text": "Get the miniconda installer URL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda._quiet",
    "page": "Docstrings",
    "title": "Conda._quiet",
    "category": "function",
    "text": "Suppress progress bar in continuous integration environments\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda._set_conda_env",
    "page": "Docstrings",
    "title": "Conda._set_conda_env",
    "category": "function",
    "text": "Use a cleaned up environment for the command cmd.\n\nAny environment variable starting by CONDA or PYTHON will interact with the run.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.add",
    "page": "Docstrings",
    "title": "Conda.add",
    "category": "function",
    "text": "Install a new package or packages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.add_channel",
    "page": "Docstrings",
    "title": "Conda.add_channel",
    "category": "function",
    "text": "Add a channel to the list of channels\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.bin_dir",
    "page": "Docstrings",
    "title": "Conda.bin_dir",
    "category": "function",
    "text": "Prefix for the executable files installed with the packages\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.channels",
    "page": "Docstrings",
    "title": "Conda.channels",
    "category": "function",
    "text": "Get the list of channels used to search packages\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.clean",
    "page": "Docstrings",
    "title": "Conda.clean",
    "category": "function",
    "text": "clean(;\n    debug=false, index=true, locks=true, tarballs=true, packages=true, sources=true\n)\n\nRuns conda clean -y with the specified flags.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.conda_rc",
    "page": "Docstrings",
    "title": "Conda.conda_rc",
    "category": "function",
    "text": "Path to the condarc file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.exists",
    "page": "Docstrings",
    "title": "Conda.exists",
    "category": "function",
    "text": "Check if a given package exists.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.export_list",
    "page": "Docstrings",
    "title": "Conda.export_list",
    "category": "function",
    "text": "export_list(filepath, env=/home/pfitzseb/.julia/conda/3)\nexport_list(io, env=/home/pfitzseb/.julia/conda/3)\n\nList all packages and write them to an export file for use the Conda.import_list\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.import_list",
    "page": "Docstrings",
    "title": "Conda.import_list",
    "category": "function",
    "text": "\"     importlist(filename, env=/home/pfitzseb/.julia/conda/3, channels=String[])     importlist(io, env=/home/pfitzseb/.julia/conda/3, channels=String[])\n\nCreate a new environment with various channels and a packages list file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.lib_dir",
    "page": "Docstrings",
    "title": "Conda.lib_dir",
    "category": "function",
    "text": "Prefix for the shared libraries installed with the packages\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.list",
    "page": "Docstrings",
    "title": "Conda.list",
    "category": "function",
    "text": "List all installed packages to standard output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.parseconda",
    "page": "Docstrings",
    "title": "Conda.parseconda",
    "category": "function",
    "text": "Run conda command with environment variables set and return the json output as a julia object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.prefix",
    "page": "Docstrings",
    "title": "Conda.prefix",
    "category": "function",
    "text": "Prefix for installation of the environment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.python_dir",
    "page": "Docstrings",
    "title": "Conda.python_dir",
    "category": "function",
    "text": "Prefix where the python command lives\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.rm",
    "page": "Docstrings",
    "title": "Conda.rm",
    "category": "function",
    "text": "Uninstall a package or packages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.rm_channel",
    "page": "Docstrings",
    "title": "Conda.rm_channel",
    "category": "function",
    "text": "Remove a channel from the list of channels\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.runconda",
    "page": "Docstrings",
    "title": "Conda.runconda",
    "category": "function",
    "text": "Run conda command with environment variables set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.script_dir",
    "page": "Docstrings",
    "title": "Conda.script_dir",
    "category": "function",
    "text": "Prefix for the python scripts. On UNIX, this is the same than Conda.BINDIR\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.search",
    "page": "Docstrings",
    "title": "Conda.search",
    "category": "function",
    "text": "Search packages for a string\n\n\n\n\n\nSearch a specific version of a package\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.update",
    "page": "Docstrings",
    "title": "Conda.update",
    "category": "function",
    "text": "Update all installed packages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Conda.version",
    "page": "Docstrings",
    "title": "Conda.version",
    "category": "function",
    "text": "Get the exact version of a package as a VersionNumber.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Conda.BINDIRConda.CONDARCConda.CondaConda.EnvironmentConda.LIBDIRConda.MINICONDA_VERSIONConda.PREFIXConda.PYTHONDIRConda.PkgOrPkgsConda.ROOTENVConda.SCRIPTDIRConda._install_condaConda._installed_packagesConda._installed_packages_dictConda._installer_urlConda._quietConda._set_conda_envConda.addConda.add_channelConda.bin_dirConda.channelsConda.cleanConda.condaConda.conda_rcConda.deps_fileConda.evalConda.existsConda.export_listConda.import_listConda.includeConda.lib_dirConda.listConda.parsecondaConda.prefixConda.python_dirConda.rmConda.rm_channelConda.runcondaConda.script_dirConda.searchConda.updateConda.version"
},

]}
