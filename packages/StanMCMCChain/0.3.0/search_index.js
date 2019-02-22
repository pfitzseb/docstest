var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StanMCMCChain-1",
    "page": "Readme",
    "title": "StanMCMCChain",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package converts the output produced by CmdStan.jl to a TuringLang/Chains object suitable for further processing by the MCMCChain package."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "In the definition of the Stanmodel, request the output_format=:mcmcchains:  stanmodel = Stanmodel(num_samples=1200, thin=2, name=\"bernoulli\", \n    model=bernoullimodel, output_format=:mcmcchains);The subsequent call to stan() will now return a MCMCChain.Chains object in chains:  rc, chains, cnames = stan(stanmodel, observeddata, ProjDir, diagnostics=false,\n    CmdStanDir=CMDSTAN_HOME);"
},

{
    "location": "autodocs/#CmdStan.convert_a3d",
    "page": "Docstrings",
    "title": "CmdStan.convert_a3d",
    "category": "function",
    "text": "convert_a3d\n\nConvert the output file created by cmdstan to the shape of choice. Currently . \n\nMethod\n\nconvert_a3d(a3d_array, cnames, ::Val{Symbol})\n\nRequired arguments\n\n* `a3d_array::Array{Float64}(n_draws, n_variables, n_chains`      : Read in from output files created by cmdstan                                   \n* `cnames::Vector{AbstractString}`                                                 : Monitored variable names\n* `::Val{Symbol}`                                                                             : Output format\n\nMethod called is based on the output_format defined in the stanmodel, e.g.:\n\n   stanmodel = Stanmodel(num_samples=1200, thin=2, name=\"bernoulli\", \n   model=bernoullimodel, output_format=:array);\n\nCurrent formats supported are:\n\n1. :array (a3d_array format, the default for CmdStan)\n2. :dataFrame (DataFrame)\n3. :mambachains (Mamba.Chains object)\n4. :mcmcchain (TuringLang/Chains object)\n\nOptions 2 through 4 are respectively provided by the packages StanDataFrames, StanMamba and StanMCMCChain.\n\nReturn values\n\n* `res`                       : Draws converted to the specified format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StanMCMCChain.StanMCMCChainStanMCMCChain.convert_a3dStanMCMCChain.evalStanMCMCChain.include"
},

]}
