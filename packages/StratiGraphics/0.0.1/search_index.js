var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StratiGraphics.jl-1",
    "page": "Readme",
    "title": "StratiGraphics.jl",
    "category": "section",
    "text": "A tool for creating 3D stratigraphy from 2D geostatistical processes.[![][travis-img]][travis-url] [![][julia-pkg-img]][julia-pkg-url] [![][codecov-img]][codecov-url](Image: StratiGraphics Animation)This package provides an implementation of Markov-Poisson sampling as described in Hoffimann 2018. In this method, geostatistical algorithms from the GeoStats.jl framework are used to quickly generate surfaces of a 3D stratigraphic model."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:] add StratiGraphics"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To illustrate the usage of the package, consider a set of satellite images containing spatial patterns that we would like to reproduce in a 3D stratigraphic model:(Image: Flow Images)Each image can serve as a training image for a multiple-point geostatistical process such as ImageQuilting.jl:using ImageQuilting\n\nproc1 = ImgQuilt(:land => (TI=TI1, tilesize=(30,30,1)))\nproc2 = ImgQuilt(:land => (TI=TI2, tilesize=(30,30,1)))\nproc3 = ImgQuilt(:land => (TI=TI3, tilesize=(30,30,1)))We define a geological environment as a set of geological processes, a set of transition probabilities between the processes, and an event duration process:using StratiGraphics\n\n# transition probabilities\nP = rand(3,3)\nP = P ./ sum(P, dims=2)\n\nenv = Environment([proc1,proc2,proc3], P, ExponentialDuration(1.))We can simulate the envinroment from an initial state (e.g. flat land) and for a number of epochs to produce a geological record:nepochs = 10\ninit = LandState(zeros(100,100))\n\nrecord = simulate(env, init, nepochs)From the record, we can produce the strata in the form of surfaces:strata = Strata(record)We can choose between an :erosional (default) versus a :depositional stacking:strata = Strata(record, :depositional)We can then convert the surfaces into a 3D voxel model by specifying the vertical resolution:voxelize(strata, 50) # produce a 100x100x50 voxel model(Image: Voxelized Models)For a reproducible example, please check this notebook."
},

{
    "location": "#Citation-1",
    "page": "Readme",
    "title": "Citation",
    "category": "section",
    "text": "If you find StratiGraphics.jl useful in your work, please consider citing the thesis:@PHDTHESIS{Hoffimann2018,\n  title={Morphodynamic Analysis and Statistical Synthesis of Geomorphic Data},\n  author={Hoffimann, J{\\\'u}lio},\n  school={Stanford University},\n  url={https://searchworks.stanford.edu/view/12746435},\n  year={2018},\n  month={September}\n}"
},

{
    "location": "#Asking-for-help-1",
    "page": "Readme",
    "title": "Asking for help",
    "category": "section",
    "text": "If you have any questions, please open an issue.[travis-img]: https://travis-ci.org/juliohm/StratiGraphics.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/StratiGraphics.jl[julia-pkg-img]: http://pkg.julialang.org/badges/StratiGraphics_0.6.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=StratiGraphics[codecov-img]: https://codecov.io/gh/juliohm/StratiGraphics.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/StratiGraphics.jl"
},

{
    "location": "autodocs/#StratiGraphics.Environment",
    "page": "Docstrings",
    "title": "StratiGraphics.Environment",
    "category": "type",
    "text": "Environment(processes, transitions, durations)\n\nGeological environment with processes, transitions and durations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StratiGraphics.LandState",
    "page": "Docstrings",
    "title": "StratiGraphics.LandState",
    "category": "type",
    "text": "LandState(land)\n\nA geological state consisting of a landscape map.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StratiGraphics.Record",
    "page": "Docstrings",
    "title": "StratiGraphics.Record",
    "category": "type",
    "text": "Record(states)\n\nA geological record of geological states.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StratiGraphics.State",
    "page": "Docstrings",
    "title": "StratiGraphics.State",
    "category": "type",
    "text": "State\n\nA geological state to be evolved by processes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StratiGraphics.StratSim",
    "page": "Docstrings",
    "title": "StratiGraphics.StratSim",
    "category": "type",
    "text": "StratSim(var₁=>param₁, var₂=>param₂, ...)\n\nStratigraphy simulation with Markov-Poisson sampling.\n\nParameters\n\nenvironment - geological environment\nstate       - initial geological state\nstack       - stacking scheme (:erosional or :depositional)\nnepochs     - number of epochs (default to 10)\n\nReferences\n\nHoffimann 2018. Morphodynamic analysis and statistical synthesis of geormorphic data.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StratiGraphics.StratSimParam",
    "page": "Docstrings",
    "title": "StratiGraphics.StratSimParam",
    "category": "type",
    "text": "StratSim(var₁=>param₁, var₂=>param₂, ...)\n\nStratigraphy simulation with Markov-Poisson sampling.\n\nParameters\n\nenvironment - geological environment\nstate       - initial geological state\nstack       - stacking scheme (:erosional or :depositional)\nnepochs     - number of epochs (default to 10)\n\nReferences\n\nHoffimann 2018. Morphodynamic analysis and statistical synthesis of geormorphic data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StratiGraphics.Strata",
    "page": "Docstrings",
    "title": "StratiGraphics.Strata",
    "category": "type",
    "text": "Strata(record)\n\nStratigraphic model from geological record.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StratiGraphics.evolve!",
    "page": "Docstrings",
    "title": "StratiGraphics.evolve!",
    "category": "function",
    "text": "evolve!(state, proc, Δt)\n\nEvolve the state with process proc for a time period Δt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StratiGraphics.simulate",
    "page": "Docstrings",
    "title": "StratiGraphics.simulate",
    "category": "function",
    "text": "simulate(env, state, nepochs=10)\n\nSimulate the geological environment env for a number of epochs nepochs starting from a state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StratiGraphics.@pack_StratSimParamStratiGraphics.@pack_StratSimParam!StratiGraphics.@unpack_StratSimParamStratiGraphics.EnvironmentStratiGraphics.ExponentialDurationStratiGraphics.LandStateStratiGraphics.ProcessStratiGraphics.RecordStratiGraphics.StateStratiGraphics.StratSimStratiGraphics.StratSimParamStratiGraphics.StrataStratiGraphics.StratiGraphicsStratiGraphics.UniformDurationStratiGraphics.evalStratiGraphics.evolve!StratiGraphics.includeStratiGraphics.simulateStratiGraphics.voxelize"
},

]}
