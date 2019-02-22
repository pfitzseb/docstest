var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RobustPmap-1",
    "page": "Readme",
    "title": "RobustPmap",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Robust paralleization using pmap calls with checks for the type of returned values. RobustPmap is a module of MADS."
},

{
    "location": "#MADS-1",
    "page": "Readme",
    "title": "MADS",
    "category": "section",
    "text": "MADS (Model Analysis & Decision Support) is an integrated open-source high-performance computational (HPC) framework in Julia. MADS can execute a wide range of data- and model-based analyses:Sensitivity Analysis\nParameter Estimation\nModel Inversion and Calibration\nUncertainty Quantification\nModel Selection and Model Averaging\nModel Reduction and Surrogate Modeling\nMachine Learning and Blind Source Separation\nDecision Analysis and SupportMADS has been tested to perform HPC simulations on a wide-range multi-processor clusters and parallel environments (Moab, Slurm, etc.). MADS utilizes adaptive rules and techniques which allows the analyses to be performed with a minimum user input. The code provides a series of alternative algorithms to execute each type of data- and model-based analyses."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "All the available MADS modules and functions are described at madsjulia.github.io"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Mads\")"
},

{
    "location": "#Installation-behind-a-firewall-1",
    "page": "Readme",
    "title": "Installation behind a firewall",
    "category": "section",
    "text": "Julia uses git for the package management. To install Julia packages behind a firewall, add the following lines in the .gitconfig file in your home directory:[url \"https://\"]\n        insteadOf = git://or execute:git config --global url.\"https://\".insteadOf git://Set proxies:export ftp_proxy=http://proxyout.<your_site>:8080\nexport rsync_proxy=http://proxyout.<your_site>:8080\nexport http_proxy=http://proxyout.<your_site>:8080\nexport https_proxy=http://proxyout.<your_site>:8080\nexport no_proxy=.<your_site>For example, if you are doing this at LANL, you will need to execute the following lines in your bash command-line environment:export ftp_proxy=http://proxyout.lanl.gov:8080\nexport rsync_proxy=http://proxyout.lanl.gov:8080\nexport http_proxy=http://proxyout.lanl.gov:8080\nexport https_proxy=http://proxyout.lanl.gov:8080\nexport no_proxy=.lanl.gov"
},

{
    "location": "#MADS-examples-1",
    "page": "Readme",
    "title": "MADS examples",
    "category": "section",
    "text": "In Julia REPL, do the following commands:import MadsTo explore getting-started instructions, execute:Mads.help()There are various examples located in the examples directory of the Mads repository.For example, executeinclude(Mads.madsdir * \"/../examples/contamination/contamination.jl\")to perform various example analyses related to groundwater contaminant transport, or executeinclude(Mads.madsdir * \"/../examples/bigdt/bigdt.jl\")to perform Bayesian Information Gap Decision Theory (BIG-DT) analysis."
},

{
    "location": "#Developers-1",
    "page": "Readme",
    "title": "Developers",
    "category": "section",
    "text": "Velimir (monty) Vesselinov (publications)\nDaniel O\'Malley (publications)\nsee also"
},

{
    "location": "#Publications,-Presentations,-Projects-1",
    "page": "Readme",
    "title": "Publications, Presentations, Projects",
    "category": "section",
    "text": "mads.lanl.gov/\nees.lanl.gov/monty"
},

{
    "location": "autodocs/#RobustPmap.RobustPmap",
    "page": "Docstrings",
    "title": "RobustPmap.RobustPmap",
    "category": "module",
    "text": "MADS: Model Analysis & Decision Support in Julia (Mads.jl v1.0) 2016\n\nhttp://mads.lanl.gov http://madsjulia.lanl.gov http://gitlab.com/mads/Mads.jl\n\nLicensing: GPLv3: http://www.gnu.org/licenses/gpl-3.0.html\n\nCopyright 2016.  Los Alamos National Security, LLC.  All rights reserved.\n\nThis material was produced under U.S. Government contract DE-AC52-06NA25396 for Los Alamos National Laboratory, which is operated by Los Alamos National Security, LLC for the U.S. Department of Energy. The Government is granted for itself and others acting on its behalf a paid-up, nonexclusive, irrevocable worldwide license in this material to reproduce, prepare derivative works, and perform publicly and display publicly. Beginning five (5) years after –––––––- November 17, 2015, –––––––––––––––––––––––––––––––– subject to additional five-year worldwide renewals, the Government is granted for itself and others acting on its behalf a paid-up, nonexclusive, irrevocable worldwide license in this material to reproduce, prepare derivative works, distribute copies to the public, perform publicly and display publicly, and to permit others to do so.\n\nNEITHER THE UNITED STATES NOR THE UNITED STATES DEPARTMENT OF ENERGY, NOR LOS ALAMOS NATIONAL SECURITY, LLC, NOR ANY OF THEIR EMPLOYEES, MAKES ANY WARRANTY, EXPRESS OR IMPLIED, OR ASSUMES ANY LEGAL LIABILITY OR RESPONSIBILITY FOR THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY INFORMATION, APPARATUS, PRODUCT, OR PROCESS DISCLOSED, OR REPRESENTS THAT ITS USE WOULD NOT INFRINGE PRIVATELY OWNED RIGHTS.\n\nLA-CC-15-080; Copyright Number Assigned: C16008\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobustPmap.checkexceptions",
    "page": "Docstrings",
    "title": "RobustPmap.checkexceptions",
    "category": "function",
    "text": "Check for type exceptions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobustPmap.crpmap",
    "page": "Docstrings",
    "title": "RobustPmap.crpmap",
    "category": "function",
    "text": "Robust pmap call with checkpoints\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobustPmap.rpmap",
    "page": "Docstrings",
    "title": "RobustPmap.rpmap",
    "category": "function",
    "text": "Robust pmap call\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RobustPmap.RobustPmapRobustPmap.checkexceptionsRobustPmap.crpmapRobustPmap.evalRobustPmap.includeRobustPmap.rpmap"
},

]}
