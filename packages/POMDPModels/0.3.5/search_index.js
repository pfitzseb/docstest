var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#POMDPModels-1",
    "page": "Readme",
    "title": "POMDPModels",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This package provides the following models for POMDPs.jl:SimpleGridWorld\nTiger\nCrying Baby\nRandom \nMountain Car\nInverted Pendulum\nT-Maze"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To use POMDPModels, simply load it and initialize a model. Note: to interact with the models using the POMDPs.jl interface, you must also import POMDPs. The model supports the basic functions required by many of the JuliaPOMDP solvers. For example:using POMDPs\nusing POMDPModels\n\npomdp = TigerPOMDP()\n# do what you would do with a POMDP model, for example use QMDP to solve it\nusing QMDP\nsolver = QMDPSolver()\npolicy = solve(solver, pomdp) # compute a pomdp policyYou can initialize the other pomdp types in the module in the following way:using POMDPModels\n\npomdp = TigerPOMDP()\npomdp = BabyPOMDP()\npomdp = RandomPOMDP()\n\nmdp = GridWorld()\nmdp = RandomMDP()"
},

{
    "location": "autodocs/#POMDPModels.LightDark1D",
    "page": "Docstrings",
    "title": "POMDPModels.LightDark1D",
    "category": "type",
    "text": "LightDark1D\n\nA one-dimensional light dark problem. The goal is to be near 0. Observations are noisy measurements of the position.\n\nModel\n\n-3-2-1 0 1 2 3 ...| | | | | | | | ...           G   S\n\nHere G is the goal. S is the starting location\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPModels.LightDark1DState",
    "page": "Docstrings",
    "title": "POMDPModels.LightDark1DState",
    "category": "type",
    "text": "LightDark1DState\n\nFields\n\ny: position\nstatus: 0 = normal, negative = terminal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPModels.SimpleGridWorld",
    "page": "Docstrings",
    "title": "POMDPModels.SimpleGridWorld",
    "category": "type",
    "text": "SimpleGridWorld(;kwargs...)\n\nCreate a simple grid world MDP. Options are specified with keyword arguments.\n\nStates and Actions\n\nThe states are represented by 2-element static vectors of integers. Typically any Julia AbstractVector e.g. [x,y] can also be used for arguments. Actions are the symbols :up, :left, :down, and :right.\n\nKeyword Arguments\n\nsize::Tuple{Int, Int}: Number of cells in the x and y direction [default: (10,10)]\nrewards::Dict: Dictionary mapping cells to the reward in that cell, e.g. Dict([1,2]=>10.0). Default reward for unlisted cells is 0.0\nterminate_from::Set: Set of cells from which the problem will terminate. Note that these states are not themselves terminal, but from these states, the next transition will be to a terminal state. [default: Set(keys(rewards))]\ntprob::Float64: Probability of a successful transition in the direction specified by the action. The remaining probability is divided between the other neighbors. [default: 0.7]\ndiscount::Float64: Discount factor [default: 0.95]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPModels.inbounds",
    "page": "Docstrings",
    "title": "POMDPModels.inbounds",
    "category": "function",
    "text": "inbounds(mdp::LegacyGridWorld, s::GridWorldState, a::Symbol)\n\nReturn false if a is trying to go out of bounds, true otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPModels.static_reward",
    "page": "Docstrings",
    "title": "POMDPModels.static_reward",
    "category": "function",
    "text": "static_reward(mdp::LegacyGridWorld, state::GridWorldState)\n\nReturn the reward for being in the state (the reward not including bumping)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "POMDPModels.@pack_InvertedPendulumPOMDPModels.@pack_InvertedPendulum!POMDPModels.@pack_MountainCarPOMDPModels.@pack_MountainCar!POMDPModels.@pack_SimpleGridWorldPOMDPModels.@pack_SimpleGridWorld!POMDPModels.@pack_TMazePOMDPModels.@pack_TMaze!POMDPModels.@pack_TMazeStatePOMDPModels.@pack_TMazeState!POMDPModels.@unpack_InvertedPendulumPOMDPModels.@unpack_MountainCarPOMDPModels.@unpack_SimpleGridWorldPOMDPModels.@unpack_TMazePOMDPModels.@unpack_TMazeStatePOMDPModels.AlwaysFeedPOMDPModels.BabyBeliefUpdaterPOMDPModels.BabyPOMDPPOMDPModels.DiscreteDistributionPOMDPModels.DummyHeuristic1DPolicyPOMDPModels.EnergizePOMDPModels.FeedWhenCryingPOMDPModels.GWPosPOMDPModels.GridWorldPOMDPModels.GridWorldActionPOMDPModels.GridWorldActionSpacePOMDPModels.GridWorldDistributionPOMDPModels.GridWorldStatePOMDPModels.GridWorldStateSpacePOMDPModels.InvertedPendulumPOMDPModels.LDNormalStateDistPOMDPModels.LegacyGridWorldPOMDPModels.LightDark1DPOMDPModels.LightDark1DActionSpacePOMDPModels.LightDark1DStatePOMDPModels.MazeBeliefPOMDPModels.MazeOptimalPOMDPModels.MazeUpdaterPOMDPModels.MountainCarPOMDPModels.POMDPModelsPOMDPModels.RandomMDPPOMDPModels.RandomPOMDPPOMDPModels.SimpleGridWorldPOMDPModels.SmartHeuristic1DPolicyPOMDPModels.StarvePOMDPModels.TIGER_LEFTPOMDPModels.TIGER_LISTENPOMDPModels.TIGER_OPEN_LEFTPOMDPModels.TIGER_OPEN_RIGHTPOMDPModels.TIGER_RIGHTPOMDPModels.TMazePOMDPModels.TMazeInitPOMDPModels.TMazeObservationDistributionPOMDPModels.TMazeSpacePOMDPModels.TMazeStatePOMDPModels.TMazeStateDistributionPOMDPModels.TMazeStateSpacePOMDPModels.TabularMDPPOMDPModels.TabularPOMDPPOMDPModels.TabularProblemPOMDPModels.TigerActionSpacePOMDPModels.TigerBeliefUpdaterPOMDPModels.TigerDistributionPOMDPModels.TigerObservationSpacePOMDPModels.TigerPOMDPPOMDPModels.TigerStateSpacePOMDPModels.a2intPOMDPModels.aindPOMDPModels.cell_ctxPOMDPModels.create_observation_distributionPOMDPModels.create_transition_distributionPOMDPModels.default_sigmaPOMDPModels.dirPOMDPModels.dwdtPOMDPModels.eulerPOMDPModels.evalPOMDPModels.fill_probability!POMDPModels.inboundsPOMDPModels.includePOMDPModels.initial_beliefPOMDPModels.int2aPOMDPModels.iteratorPOMDPModels.posequalPOMDPModels.rk45POMDPModels.s2iPOMDPModels.sampletypePOMDPModels.static_rewardPOMDPModels.tocolorPOMDPModels.upperbound"
},

]}
