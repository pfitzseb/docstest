var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RMS-Reaction-Mechanism-Simulator-1",
    "page": "Readme",
    "title": "RMS - Reaction Mechanism Simulator",
    "category": "section",
    "text": ""
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "RMS is a Julia package designed for simulating and analyzing large chemical reaction mechanisms.  "
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Ideal gas and dilute liquid phases.   Constant T and P and constant V adiabatic ideal gas reactors.   Constant T and V dilute liquid reactors.   Diffusion limited rates. Sensitivity analysis for all reactors.   Flux diagrams with molecular images (if molecular information is provided).   Handy plotting and other solution analysis tools.   Easy to add new features.  "
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "RMS currently has dependencies that are only available in python 2.  So currently in order to use RMS it is necessary for your PyCall to reference a python 2 installation.  This can be done with PyCall uninstalled:  using Pkg\nENV[\"PYTHON\"] = \"absolute path to python 2 executable ex:  ~/anaconda2/envs/conda_jl/bin/python\"\nENV[\"CONDA_JL_HOME\"] = \"absolute path to the python install ex:  ~/anaconda2/envs/conda_jl\"\nPkg.add(\"PyCall\")\nPkg.build(\"PyCall\")Once this is done RMS can be installed with:using Pkg\nPkg.add(\"ReactionMechanismSimulator\")\nPkg.build(\"ReactionMechanismSimulator\")\n\nusing ReactionMechanismSimulator"
},

]}
