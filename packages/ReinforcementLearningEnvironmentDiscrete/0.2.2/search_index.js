var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ReinforcementLearningEnvironmentDiscrete-1",
    "page": "Readme",
    "title": "ReinforcementLearningEnvironmentDiscrete",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Some discrete environments for the Julia Reinforcement Learning package."
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.AbsorbingDetMDP",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.AbsorbingDetMDP",
    "category": "function",
    "text": "AbsorbingDetMDP(;ns = 10^3, na = 10)\n\nReturns a random deterministic absorbing MDP\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.DetMDP",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.DetMDP",
    "category": "function",
    "text": "DetMDP(; ns = 10^4, na = 10)\n\nReturns a random deterministic MDP.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.DetTreeMDP",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.DetTreeMDP",
    "category": "function",
    "text": "DetTreeMDP(; na = 4, depth = 5)\n\nReturns a treeMDP with random rewards at the leaf nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.DetTreeMDPwithinrew",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.DetTreeMDPwithinrew",
    "category": "function",
    "text": "DetTreeMDPwithinrew(; na = 4, depth = 5)\n\nReturns a treeMDP with random rewards.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.DiscreteMaze",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.DiscreteMaze",
    "category": "type",
    "text": "struct DiscreteMaze\n    mdp::MDP\n    maze::Array{Int64, 2}\n    goals::Array{Int64, 1}\n    nzpos::Array{Int64, 1}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.MDP",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.MDP",
    "category": "type",
    "text": "mutable struct MDP \n    ns::Int64\n    na::Int64\n    state::Int64\n    trans_probs::Array{AbstractArray, 2}\n    reward::Array{Float64, 2}\n    initialstates::Array{Int64, 1}\n    isterminal::Array{Int64, 1}\n\nA Markov Decision Process with ns states, na actions, current state, naxns - array of transition probabilites trans_props which consists for every (action, state) pair of a (potentially sparse) array that sums to 1 (see getprobvecrandom, getprobvecuniform, getprobvecdeterministic for helpers to constract the transition probabilities) naxns - array of reward, array of initial states initialstates, and ns - array of 0/1 indicating if a state is terminal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.StochMDP",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.StochMDP",
    "category": "function",
    "text": "StochMDP(; na = 10, ns = 50) = MDP(ns, na)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.StochTreeMDP",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.StochTreeMDP",
    "category": "function",
    "text": "StochTreeMDP(; na = 4, depth = 4, bf = 2)\n\nReturns a random stochastic treeMDP with branching factor bf.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.getprobvecdeterministic",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.getprobvecdeterministic",
    "category": "function",
    "text": "getprobvecdeterministic(n, min = 1, max = n)\n\nReturns a SparseVector of length n where one element in min:max has  value 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.getprobvecrandom",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.getprobvecrandom",
    "category": "function",
    "text": "getprobvecrandom(n)\n\nReturns an array of length n that sums to 1. More precisely, the array is a sample of a Dirichlet distribution with n categories and α_1 =   = α_n = 1.\n\n\n\n\n\ngetprobvecrandom(n, min, max)\n\nReturns an array of length n that sums to 1 where all elements outside of min:max are zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.getprobvecuniform",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.getprobvecuniform",
    "category": "function",
    "text": "getprobvecuniform(n)  = fill(1/n, n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.run!",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.run!",
    "category": "function",
    "text": "run!(mdp::MDP, action::Int64)\n\nTransition to a new state given action. Returns the new state.\n\n\n\n\n\nrun!(mdp::MDP, policy::Array{Int64, 1}) = run!(mdp, policy[mdp.state])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.setterminalstates!",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.setterminalstates!",
    "category": "function",
    "text": "setterminalstates!(mdp, range)\n\nSets mdp.isterminal[range] .= 1, empties the table of transition probabilities for terminal states and sets the reward for all actions in the terminal state to the same value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentDiscrete.treeMDP",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentDiscrete.treeMDP",
    "category": "function",
    "text": "treeMDP(na, depth; init = \"random\", branchingfactor = 3)\n\nReturns a tree structured MDP with na actions and depth of the tree. If init is random, the branchingfactor determines how many possible states a (action, state) pair has. If init = \"deterministic\" the branchingfactor = na.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ReinforcementLearningEnvironmentDiscrete.AbsorbingDetMDPReinforcementLearningEnvironmentDiscrete.CliffWalkingReinforcementLearningEnvironmentDiscrete.DetMDPReinforcementLearningEnvironmentDiscrete.DetTreeMDPReinforcementLearningEnvironmentDiscrete.DetTreeMDPwithinrewReinforcementLearningEnvironmentDiscrete.DiscreteMazeReinforcementLearningEnvironmentDiscrete.MDPReinforcementLearningEnvironmentDiscrete.MDPEnvReinforcementLearningEnvironmentDiscrete.POMDPEnvReinforcementLearningEnvironmentDiscrete.ReinforcementLearningEnvironmentDiscreteReinforcementLearningEnvironmentDiscrete.StochMDPReinforcementLearningEnvironmentDiscrete.StochTreeMDPReinforcementLearningEnvironmentDiscrete.addrandomwall!ReinforcementLearningEnvironmentDiscrete.breaksomewallsReinforcementLearningEnvironmentDiscrete.checkposReinforcementLearningEnvironmentDiscrete.emptytransprob!ReinforcementLearningEnvironmentDiscrete.evalReinforcementLearningEnvironmentDiscrete.getemptymazeReinforcementLearningEnvironmentDiscrete.getprobvecdeterministicReinforcementLearningEnvironmentDiscrete.getprobvecrandomReinforcementLearningEnvironmentDiscrete.getprobvecuniformReinforcementLearningEnvironmentDiscrete.includeReinforcementLearningEnvironmentDiscrete.indto2dReinforcementLearningEnvironmentDiscrete.mazetomdpReinforcementLearningEnvironmentDiscrete.observationindexReinforcementLearningEnvironmentDiscrete.posto1dReinforcementLearningEnvironmentDiscrete.rngReinforcementLearningEnvironmentDiscrete.run!ReinforcementLearningEnvironmentDiscrete.setterminalstates!ReinforcementLearningEnvironmentDiscrete.setwall!ReinforcementLearningEnvironmentDiscrete.treeMDP"
},

]}
