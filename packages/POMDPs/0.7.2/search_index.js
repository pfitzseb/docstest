var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#POMDPs-1",
    "page": "Readme",
    "title": "POMDPs",
    "category": "section",
    "text": "Linux Mac OS X\n(Image: Build Status) (Image: Build Status)(Image: Docs) (Image: Gitter)This package provides a core interface for working with Markov decision processes (MDPs) and partially observable Markov decision processes (POMDPs). For examples, please see the Gallery.Our goal is to provide a common programming vocabulary for:Expressing problems as MDPs and POMDPs. \nWriting solver software.\nRunning simulations efficiently.There are multiple interfaces for expressing and interacting with (PO)MDPs: When the explicit interface is used, the transition and observation probabilities are explicitly defined using api functions or tables; when the generative interface is used, only a single step simulator (e.g. (s\', o, r) = G(s,a)) needs to be defined.For help, please post to the Google group, or on gitter. See NEWS.md for information on changes.POMDPs.jl and all packages in the JuliaPOMDP project are fully supported on Linux and OS X. Windows support is available for all native Julia packages*. "
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install POMDPs.jl, run the following from the Julia REPL: Pkg.add(\"POMDPs\")To install a specific supported JuliaPOMDP package run:using POMDPs\n# the following command installs the SARSOP solver, you can add any supported solver this way\nPOMDPs.add(\"SARSOP\") To install all solvers, support tools, and dependencies that are part of JuliaPOMDP, run:using POMDPs\nPOMDPs.add_all() # this may take a few minutesTo only install native solvers, without any non-Julia dependecies, run:using POMDPs\nPOMDPs.add_all(native_only=true)"
},

{
    "location": "#Quick-Start-1",
    "page": "Readme",
    "title": "Quick Start",
    "category": "section",
    "text": "To run a simple simulation of the classic Tiger POMDP using a policy created by the QMDP solver.using POMDPs, POMDPModels, POMDPToolbox, QMDP\npomdp = TigerPOMDP()\n\n# initialize a solver and compute a policy\nsolver = QMDPSolver() # from QMDP\npolicy = solve(solver, pomdp)\nbelief_updater = updater(policy) # the default QMDP belief updater (discrete Bayesian filter)\n\n# run a short simulation with the QMDP policy\nhistory = simulate(HistoryRecorder(max_steps=10), pomdp, policy, belief_updater)\n\n# look at what happened\nfor (s, b, a, o) in eachstep(history, \"sbao\")\n    println(\"State was $s,\")\n    println(\"belief was $b,\")\n    println(\"action $a was taken,\")\n    println(\"and observation $o was received.\\n\")\nend\nprintln(\"Discounted reward was $(discounted_reward(history)).\")For more examples with visualization see POMDPGallery.jl."
},

{
    "location": "#Tutorials-1",
    "page": "Readme",
    "title": "Tutorials",
    "category": "section",
    "text": "The following tutorials aim to get you up to speed with POMDPs.jl:POMDPs.jl Demo is a terse overview for experienced julia programmers that shows POMDPs.jl by example without explanation.\nMDP Tutorial for beginners gives a verbose description of using Value Iteration and Monte-Carlo Tree Search with the classic grid world problem.\nPOMDP Tutorial gives a verbose description of using SARSOP and QMDP to solve the tiger problem."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Detailed documentation can be found here.(Image: Docs) (Image: Docs)"
},

{
    "location": "#Supported-Packages-1",
    "page": "Readme",
    "title": "Supported Packages",
    "category": "section",
    "text": "Many packages use the POMDPs.jl interface, including MDP and POMDP solvers, support tools, and extensions to the POMDPs.jl interface. "
},

{
    "location": "#MDP-solvers:-1",
    "page": "Readme",
    "title": "MDP solvers:",
    "category": "section",
    "text": "Package Build Coverage\nValue Iteration (Image: Build Status) (Image: Coverage Status)\nLocal Approximation Value Iteration (Image: Build Status) (Image: Coverage Status)\nMonte Carlo Tree Search (Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#POMDP-solvers:-1",
    "page": "Readme",
    "title": "POMDP solvers:",
    "category": "section",
    "text": "Package Build Coverage\nQMDP (Image: Build Status) (Image: Coverage Status)\nFIB (Image: Build Status) (Image: Coverage Status)\nSARSOP* (Image: Build Status) (Image: Coverage Status)\nBasicPOMCP (Image: Build Status) (Image: Coverage Status)\nARDESPOT (Image: Build Status) (Image: Coverage Status)\nDESPOT (Image: Build Status) (Image: Coverage Status)\nMCVI (Image: Build Status) (Image: Coverage Status)\nPOMDPSolve* (Image: Build Status) (Image: Coverage Status)\nPOMCPOW (Image: Build Status) (Image: Coverage Status)\nAEMS (Image: Build Status) (Image: Coverage Status)\nIncrementalPruning (Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Reinforcement-Learning:-1",
    "page": "Readme",
    "title": "Reinforcement Learning:",
    "category": "section",
    "text": "Package Build Coverage\nTabularTDLearning (Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Tools:-1",
    "page": "Readme",
    "title": "Tools:",
    "category": "section",
    "text": "Package Build Coverage\nPOMDPToolbox (Image: Build Status) (Image: Coverage Status)\nPOMDPModels (Image: Build Status) (Image: Coverage Status)\nParticleFilters (Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Performance-Benchmarks:-1",
    "page": "Readme",
    "title": "Performance Benchmarks:",
    "category": "section",
    "text": "Package\nDESPOT*These packages require non-Julia dependencies"
},

{
    "location": "#Citing-POMDPs-1",
    "page": "Readme",
    "title": "Citing POMDPs",
    "category": "section",
    "text": "If POMDPs is useful in your research and you would like to acknowledge it, please cite this paper:@article{egorov2017pomdps,\n  author  = {Maxim Egorov and Zachary N. Sunberg and Edward Balaban and Tim A. Wheeler and Jayesh K. Gupta and Mykel J. Kochenderfer},\n  title   = {{POMDP}s.jl: A Framework for Sequential Decision Making under Uncertainty},\n  journal = {Journal of Machine Learning Research},\n  year    = {2017},\n  volume  = {18},\n  number  = {26},\n  pages   = {1-5},\n  url     = {http://jmlr.org/papers/v18/16-300.html}\n}"
},

{
    "location": "autodocs/#POMDPs.@POMDP_require",
    "page": "Docstrings",
    "title": "POMDPs.@POMDP_require",
    "category": "macro",
    "text": "@POMDP_require solve(s::CoolSolver, p::POMDP) begin\n    PType = typeof(p)\n    @req states(::PType)\n    @req actions(::PType)\n    @req transition(::PType, ::S, ::A)\n    s = first(states(p))\n    a = first(actions(p))\n    t_dist = transition(p, s, a)\n    @req rand(::AbstractRNG, ::typeof(t_dist))\nend\n\nCreate a get_requirements implementation for the function signature and the requirements block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@POMDP_requirements",
    "page": "Docstrings",
    "title": "POMDPs.@POMDP_requirements",
    "category": "macro",
    "text": "reqs = @POMDP_requirements CoolSolver begin\n    PType = typeof(p)\n    @req states(::PType)\n    @req actions(::PType)\n    @req transition(::PType, ::S, ::A)\n    s = first(states(p))\n    a = first(actions(p))\n    t_dist = transition(p, s, a)\n    @req rand(::AbstractRNG, ::typeof(t_dist))\nend\n\nCreate a RequirementSet object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@get_requirements",
    "page": "Docstrings",
    "title": "POMDPs.@get_requirements",
    "category": "macro",
    "text": "@get_requirements f(arg1, arg2)\n\nCall get_requirements(f, (arg1,arg2)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@impl_dep",
    "page": "Docstrings",
    "title": "POMDPs.@impl_dep",
    "category": "macro",
    "text": "@impl_dep reward(::P,::S,::A,::S) where {P<:POMDP,S,A} reward(::P,::S,::A)\n\nDeclare an implementation dependency and automatically implement implemented.\n\nIn the example above, @implemented reward(::P,::S,::A,::S) will return true if the user has implemented reward(::P,::S,::A,::S) OR reward(::P,::S,::A)\n\nTHIS IS ONLY INTENDED FOR USE INSIDE POMDPs AND MAY NOT FUNCTION CORRECTLY ELSEWHERE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@implemented",
    "page": "Docstrings",
    "title": "POMDPs.@implemented",
    "category": "macro",
    "text": "@implemented function(::Arg1Type, ::Arg2Type)\n\nCheck whether there is an implementation available that will return a suitable value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@req",
    "page": "Docstrings",
    "title": "POMDPs.@req",
    "category": "macro",
    "text": "@req f( ::T1, ::T2)\n\nConvert a f( ::T1, ::T2) expression to a (f, Tuple{T1,T2})::Req for pushing to a RequirementSet.\n\nIf in a @POMDP_requirements or @POMDP_require block, marks the requirement for including in the set of requirements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@requirements_info",
    "page": "Docstrings",
    "title": "POMDPs.@requirements_info",
    "category": "macro",
    "text": "@requirements_info ASolver() [YourPOMDP()]\n\nPrint information about the requirements for a solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@show_requirements",
    "page": "Docstrings",
    "title": "POMDPs.@show_requirements",
    "category": "macro",
    "text": "@show_requirements solve(solver, problem)\n\nPrint a a list of requirements for a function call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@subreq",
    "page": "Docstrings",
    "title": "POMDPs.@subreq",
    "category": "macro",
    "text": "@subreq f(arg1, arg2)\n\nIn a @POMDP_requirements or @POMDP_require block, include the requirements for f(arg1, arg2) as a child argument set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.@warn_requirements",
    "page": "Docstrings",
    "title": "POMDPs.@warn_requirements",
    "category": "macro",
    "text": "@warn_requirements solve(solver, problem)\n\nPrint a warning if there are unmet requirements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.MDP",
    "page": "Docstrings",
    "title": "POMDPs.MDP",
    "category": "type",
    "text": "Abstract base type for a fully observable Markov decision process.\n\nS: state type\nA: action type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.NATIVE_PACKAGES",
    "page": "Docstrings",
    "title": "POMDPs.NATIVE_PACKAGES",
    "category": "constant",
    "text": "Set containing string names of officially supported solvers and utility packages (e.g. MCTS, SARSOP, POMDPToolbox, etc).  If you have a validated solver that supports the POMDPs.jl API, contact the developers to add your solver to this list. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.POMDP",
    "page": "Docstrings",
    "title": "POMDPs.POMDP",
    "category": "type",
    "text": "Abstract base type for a partially observable Markov decision process.\n\nS: state type\nA: action type\nO: observation type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.POMDP_REGISTRY",
    "page": "Docstrings",
    "title": "POMDPs.POMDP_REGISTRY",
    "category": "constant",
    "text": "url to JuliaPOMDP registry\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.POMDPs",
    "page": "Docstrings",
    "title": "POMDPs.POMDPs",
    "category": "module",
    "text": "Provides a basic interface for defining and solving MDPs/POMDPs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.Policy",
    "page": "Docstrings",
    "title": "POMDPs.Policy",
    "category": "type",
    "text": "Base type for a policy (a map from every possible belief, or more abstract policy state, to an optimal or suboptimal action)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.REMOTE_URL",
    "page": "Docstrings",
    "title": "POMDPs.REMOTE_URL",
    "category": "constant",
    "text": "url to remote JuliaPOMDP organization repo\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.Simulator",
    "page": "Docstrings",
    "title": "POMDPs.Simulator",
    "category": "type",
    "text": "Base type for an object defining how simulations should be carried out.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.Solver",
    "page": "Docstrings",
    "title": "POMDPs.Solver",
    "category": "type",
    "text": "Base type for an MDP/POMDP solver\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.Updater",
    "page": "Docstrings",
    "title": "POMDPs.Updater",
    "category": "type",
    "text": "Abstract type for an object that defines how the belief should be updated\n\nA belief is a general construct that represents the knowledge an agent has about the state of the system. This can be a probability distribution, an action observation history or a more general representation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.action",
    "page": "Docstrings",
    "title": "POMDPs.action",
    "category": "function",
    "text": "action{B}(policy::Policy, x::B)\n\nFills and returns action based on the current state or belief, given the policy. B is a generalized information state - can be a state in an MDP, a distribution in POMDP, or any other representation needed to make a decision using the given policy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.actionindex",
    "page": "Docstrings",
    "title": "POMDPs.actionindex",
    "category": "function",
    "text": "actionindex{S,A,O}(problem::POMDP{S,A,O}, a::A)\nactionindex{S,A}(problem::MDP{S,A}, a::A)\n\nReturn the integer index of action a. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.actions",
    "page": "Docstrings",
    "title": "POMDPs.actions",
    "category": "function",
    "text": "actions(problem::POMDP)\nactions(problem::MDP)\n\nReturns the entire action space of a POMDP.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.actiontype",
    "page": "Docstrings",
    "title": "POMDPs.actiontype",
    "category": "function",
    "text": "actiontype(t::Type)\nactiontype(p::Union{POMDP,MDP})\n\nReturn the state type for a problem type (the S in POMDP{S,A,O}).\n\ntype A <: POMDP{Bool, Int, Bool} end\n\nactiontype(A) # returns Int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.add_registry",
    "page": "Docstrings",
    "title": "POMDPs.add_registry",
    "category": "function",
    "text": "add_registry()\n\nAdds the JuliaPOMDP registry\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.available",
    "page": "Docstrings",
    "title": "POMDPs.available",
    "category": "function",
    "text": "available()\n\nPrints all the available packages in the JuliaPOMDP registry\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.check_requirements",
    "page": "Docstrings",
    "title": "POMDPs.check_requirements",
    "category": "function",
    "text": "check_requirements(r::AbstractRequirementSet)\n\nCheck whether the methods in r have implementations with implemented(). Return true if all methods have implementations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.convert_a",
    "page": "Docstrings",
    "title": "POMDPs.convert_a",
    "category": "function",
    "text": "convert_a(::Type{V}, a, problem::Union{MDP,POMDP}) where V<:AbstractArray\nconvert_a(::Type{A}, vec::V, problem::Union{MDP,POMDP}) where {A,V<:AbstractArray}\n\nConvert an action to vectorized form or vice versa.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.convert_call",
    "page": "Docstrings",
    "title": "POMDPs.convert_call",
    "category": "function",
    "text": "Return a (f, (arg1,arg2)) expression given a f(arg1, arg2) expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.convert_o",
    "page": "Docstrings",
    "title": "POMDPs.convert_o",
    "category": "function",
    "text": "convert_o(::Type{V}, o, problem::Union{MDP,POMDP}) where V<:AbstractArray\nconvert_o(::Type{O}, vec::V, problem::Union{MDP,POMDP}) where {O,V<:AbstractArray}\n\nConvert an observation to vectorized form or vice versa.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.convert_req",
    "page": "Docstrings",
    "title": "POMDPs.convert_req",
    "category": "function",
    "text": "Return a (f, Tuple{T1,T2})::Req expression given a f( ::T1, ::T2) expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.convert_s",
    "page": "Docstrings",
    "title": "POMDPs.convert_s",
    "category": "function",
    "text": "convert_s(::Type{V}, s, problem::Union{MDP,POMDP}) where V<:AbstractArray\nconvert_s(::Type{S}, vec::V, problem::Union{MDP,POMDP}) where {S,V<:AbstractArray}\n\nConvert a state to vectorized form or vice versa.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.dimensions",
    "page": "Docstrings",
    "title": "POMDPs.dimensions",
    "category": "function",
    "text": "dimensions(s::Any)\n\nReturns the number of dimensions in space s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.discount",
    "page": "Docstrings",
    "title": "POMDPs.discount",
    "category": "function",
    "text": "discount(problem::POMDP)\ndiscount(problem::MDP)\n\nReturn the discount factor for the problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.generate_o",
    "page": "Docstrings",
    "title": "POMDPs.generate_o",
    "category": "function",
    "text": "generate_o{S,A,O}(p::POMDP{S,A,O}, s::S, a::A, sp::S, rng::AbstractRNG)\n\nReturn the next observation given current state s, action taken a and next state sp.\n\nUsually the observation would only depend on the next state sp.\n\ngenerate_o{S,A,O}(p::POMDP{S,A,O}, s::S, rng::AbstractRNG)\n\nReturn the observation from the current state. This should be used to generate initial observations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.generate_or",
    "page": "Docstrings",
    "title": "POMDPs.generate_or",
    "category": "function",
    "text": "generate_or{S,A,O}(p::POMDP{S,A,O}, s::S, a::A, sp::S, rng::AbstractRNG)\n\nReturn the observation o and reward for taking action a in current state s reaching state sp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.generate_s",
    "page": "Docstrings",
    "title": "POMDPs.generate_s",
    "category": "function",
    "text": "generate_s{S,A}(p::Union{POMDP{S,A},MDP{S,A}}, s::S, a::A, rng::AbstractRNG)\n\nReturn the next state given current state s and action taken a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.generate_so",
    "page": "Docstrings",
    "title": "POMDPs.generate_so",
    "category": "function",
    "text": "generate_so{S,A,O}(p::POMDP{S,A,O}, s::S, a::A, rng::AbstractRNG)\n\nReturn the next state sp and observation o.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.generate_sor",
    "page": "Docstrings",
    "title": "POMDPs.generate_sor",
    "category": "function",
    "text": "generate_sor{S,A,O}(p::POMDP{S,A,O}, s::S, a::A, rng::AbstractRNG)\n\nReturn the next state sp, observation o and reward for taking action a in current state s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.generate_sr",
    "page": "Docstrings",
    "title": "POMDPs.generate_sr",
    "category": "function",
    "text": "generate_sr{S}(p::Union{POMDP{S},MDP{S}}, s, a, rng::AbstractRNG)\n\nReturn the next state sp and reward for taking action a in current state s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.get_requirements",
    "page": "Docstrings",
    "title": "POMDPs.get_requirements",
    "category": "function",
    "text": "get_requirements(f::Function, args::Tuple)\n\nReturn a RequirementSet for the function f and arguments args.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.handle_reqs!",
    "page": "Docstrings",
    "title": "POMDPs.handle_reqs!",
    "category": "function",
    "text": "handle_reqs!(block, reqs_name::Symbol)\n\nReplace any @req calls with push!($reqs_name, <requirement>)\n\nReturns true if there was a requirement in there and so should not be escaped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.implemented",
    "page": "Docstrings",
    "title": "POMDPs.implemented",
    "category": "function",
    "text": "implemented(function, Tuple{Arg1Type, Arg2Type})\n\nCheck whether there is an implementation available that will return a suitable value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.initialize_belief",
    "page": "Docstrings",
    "title": "POMDPs.initialize_belief",
    "category": "function",
    "text": "initialize_belief(updater::Updater,\n                     state_distribution::Any)\ninitialize_belief(updater::Updater, belief::Any)\n\nReturns a belief that can be updated using updater that has similar distribution to state_distribution or belief.\n\nThe conversion may be lossy. This function is also idempotent, i.e. there is a default implementation that passes the belief through when it is already the correct type: initialize_belief(updater::Updater, belief) = belief\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.initialstate",
    "page": "Docstrings",
    "title": "POMDPs.initialstate",
    "category": "function",
    "text": "initialstate{S}(p::Union{POMDP{S},MDP{S}}, rng::AbstractRNG)\n\nReturn the initial state for the problem p.\n\nUsually the initial state is sampled from an initial state distribution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.initialstate_distribution",
    "page": "Docstrings",
    "title": "POMDPs.initialstate_distribution",
    "category": "function",
    "text": "initialstate_distribution(pomdp::POMDP)\ninitialstate_distribution(mdp::MDP)\n\nReturn a distribution of the initial state of the pomdp or mdp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.isterminal",
    "page": "Docstrings",
    "title": "POMDPs.isterminal",
    "category": "function",
    "text": "isterminal{S,A,O}(problem::POMDP{S,A,O}, state::S)\nisterminal{S,A}(problem::MDP{S,A}, state::S)\n\nCheck if state s is terminal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.isterminal_obs",
    "page": "Docstrings",
    "title": "POMDPs.isterminal_obs",
    "category": "function",
    "text": "isterminal_obs{S,A,O}(problem::POMDP{S,A,O}, observation::O)\n\nCheck if an observation is terminal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.iterator",
    "page": "Docstrings",
    "title": "POMDPs.iterator",
    "category": "function",
    "text": "iterator(d::Any)\n\nDEPRECATED. Return an iterable object (array or custom iterator) that iterates over possible values of distribution d. Values with zero probability may be skipped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Statistics.mean",
    "page": "Docstrings",
    "title": "Statistics.mean",
    "category": "function",
    "text": "mean(d::Any)\n\nReturn the mean of a distribution d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.mode",
    "page": "Docstrings",
    "title": "StatsBase.mode",
    "category": "function",
    "text": "mode(d::Any)\n\nReturn the most likely value in a distribution d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.n_actions",
    "page": "Docstrings",
    "title": "POMDPs.n_actions",
    "category": "function",
    "text": "n_actions(problem::POMDP)\nn_actions(problem::MDP)\n\nReturn the number of actions in problem. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.n_observations",
    "page": "Docstrings",
    "title": "POMDPs.n_observations",
    "category": "function",
    "text": "n_observations(problem::POMDP)\n\nReturn the number of observations in problem. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.n_states",
    "page": "Docstrings",
    "title": "POMDPs.n_states",
    "category": "function",
    "text": "n_states(problem::POMDP)\nn_states(problem::MDP)\n\nReturn the number of states in problem. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.observation",
    "page": "Docstrings",
    "title": "POMDPs.observation",
    "category": "function",
    "text": "observation{S,A,O}(problem::POMDP{S,A,O}, statep::S)\nobservation{S,A,O}(problem::POMDP{S,A,O}, action::A, statep::S)\nobservation{S,A,O}(problem::POMDP{S,A,O}, state::S, action::A, statep::S)\n\nReturn the observation distribution. You need only define the method with the fewest arguments needed to determine the observation distribution.\n\nExample\n\nusing POMDPToolbox # for SparseCat\n\nstruct MyPOMDP <: POMDP{Int, Int, Int} end\n\nobservation(p::MyPOMDP, sp::Int) = SparseCat([sp-1, sp, sp+1], [0.1, 0.8, 0.1])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.observations",
    "page": "Docstrings",
    "title": "POMDPs.observations",
    "category": "function",
    "text": "observations(problem::POMDP)\n\nReturn the entire observation space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.obsindex",
    "page": "Docstrings",
    "title": "POMDPs.obsindex",
    "category": "function",
    "text": "obsindex{S,A,O}(problem::POMDP{S,A,O}, o::O)\n\nReturn the integer index of observation o. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.obstype",
    "page": "Docstrings",
    "title": "POMDPs.obstype",
    "category": "function",
    "text": "obstype(t::Type)\n\nReturn the state type for a problem type (the S in POMDP{S,A,O}).\n\ntype A <: POMDP{Bool, Bool, Int} end\n\nobstype(A) # returns Int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distributions.pdf",
    "page": "Docstrings",
    "title": "Distributions.pdf",
    "category": "function",
    "text": "pdf(d::Any, x::Any)\n\nEvaluate the probability density of distribution d at sample x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.pomdp_requirements",
    "page": "Docstrings",
    "title": "POMDPs.pomdp_requirements",
    "category": "function",
    "text": "Return an expression that creates a RequirementSet using the code in the block. The resulting code will always return a RequirementSet, but it may be incomplete if the exception field is not null.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.rand",
    "page": "Docstrings",
    "title": "Base.rand",
    "category": "function",
    "text": "rand{T}(rng::AbstractRNG, d::Any)\n\nReturn a random element from distribution or space d.\n\nIf d is a state or transition distribution, the sample will be a state; if d is an action distribution, the sample will be an action or if d is an observation distribution, the sample will be an observation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.requirements_info",
    "page": "Docstrings",
    "title": "POMDPs.requirements_info",
    "category": "function",
    "text": "requirements_info(s::Solver, p::Union{POMDP,MDP}, ...)\n\nPrint information about the requirement for solver s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.reward",
    "page": "Docstrings",
    "title": "POMDPs.reward",
    "category": "function",
    "text": "reward{S,A,O}(problem::POMDP{S,A,O}, state::S, action::A)\nreward{S,A}(problem::MDP{S,A}, state::S, action::A)\n\nReturn the immediate reward for the s-a pair\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.sampletype",
    "page": "Docstrings",
    "title": "POMDPs.sampletype",
    "category": "function",
    "text": "sampletype(T::Type)\nsampletype(d::Any) = sampletype(typeof(d))\n\nReturn the type of objects that are sampled from a distribution or space d when rand(rng, d) is called.\n\nThe distribution writer should implement the sampletype(::Type) method for the distribution type, then the function can be called for that type or for objects of that type (i.e. the sampletype(d::Any) = sampletype(typeof(d)) default is provided).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.show_requirements",
    "page": "Docstrings",
    "title": "POMDPs.show_requirements",
    "category": "function",
    "text": "show_requirements(r::AbstractRequirementSet)\n\nCheck whether the methods in r have implementations with implemented() and print out a formatted list showing which are missing. Return true if all methods have implementations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.simulate",
    "page": "Docstrings",
    "title": "POMDPs.simulate",
    "category": "function",
    "text": "simulate{S,A,O,B}(simulator::Simulator, problem::POMDP{S,A,O}, policy::Policy{B}, updater::Updater{B}, initial_belief::B)\nsimulate{S,A}(simulator::Simulator, problem::MDP{S,A}, policy::Policy, initial_state::S)\n\nRun a simulation using the specified policy.\n\nThe return type is flexible and depends on the simulator. For example implementations, see the POMDPToolbox package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.solve",
    "page": "Docstrings",
    "title": "POMDPs.solve",
    "category": "function",
    "text": "solve(solver::Solver, problem::POMDP)\n\nSolves the POMDP using method associated with solver, and returns a policy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.stateindex",
    "page": "Docstrings",
    "title": "POMDPs.stateindex",
    "category": "function",
    "text": "stateindex{S,A,O}(problem::POMDP{S,A,O}, s::S)\nstateindex{S,A}(problem::MDP{S,A}, s::S)\n\nReturn the integer index of state s. Used for discrete models only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.states",
    "page": "Docstrings",
    "title": "POMDPs.states",
    "category": "function",
    "text": "states(problem::POMDP)\nstates(problem::MDP)\n\nReturns the complete state space of a POMDP. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.statetype",
    "page": "Docstrings",
    "title": "POMDPs.statetype",
    "category": "function",
    "text": "statetype(t::Type)\nstatetype(p::Union{POMDP,MDP})\n\nReturn the state type for a problem type (the S in POMDP{S,A,O}).\n\ntype A <: POMDP{Int, Bool, Bool} end\n\nstatetype(A) # returns Int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distributions.support",
    "page": "Docstrings",
    "title": "Distributions.support",
    "category": "function",
    "text": "support(d::Any)\n\nReturn the possible values that can be sampled from distribution d. Values with zero probability may be skipped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.transition",
    "page": "Docstrings",
    "title": "POMDPs.transition",
    "category": "function",
    "text": "transition{S,A,O}(problem::POMDP{S,A,O}, state::S, action::A)\ntransition{S,A}(problem::MDP{S,A}, state::S, action::A)\n\nReturn the transition distribution from the current state-action pair\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.unpack_typedcall",
    "page": "Docstrings",
    "title": "POMDPs.unpack_typedcall",
    "category": "function",
    "text": "Return a tuple (not an Expr) of the function name, arguments, and argument types.\n\nE.g. f(arg1::T1, arg2::T2) would be unpacked to (:f, [:arg1, :arg2], [:T1, :T2])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.update",
    "page": "Docstrings",
    "title": "POMDPs.update",
    "category": "function",
    "text": "update(updater::Updater, belief_old, action, observation)\n\nReturn a new instance of an updated belief given belief_old and the latest action and observation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.updater",
    "page": "Docstrings",
    "title": "POMDPs.updater",
    "category": "function",
    "text": "updater(policy::Policy)\n\nReturns a default Updater appropriate for a belief type that policy p can use\n\n\n\n\n\n"
},

{
    "location": "autodocs/#POMDPs.value",
    "page": "Docstrings",
    "title": "POMDPs.value",
    "category": "function",
    "text": "value(p::Policy, s)\nvalue(p::Policy, s, a)\n\nReturns the utility value from policy p given the state (or belief), or state-action (or belief-action) pair.\n\nThe state-action version is commonly referred to as the Q-value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "POMDPs.@POMDP_requirePOMDPs.@POMDP_requirementsPOMDPs.@get_requirementsPOMDPs.@impl_depPOMDPs.@implementedPOMDPs.@reqPOMDPs.@requirements_infoPOMDPs.@show_requirementsPOMDPs.@subreqPOMDPs.@warn_requirementsPOMDPs.AbstractRequirementSetPOMDPs.CheckedListPOMDPs.EXPORTED_TYPESPOMDPs.MDPPOMDPs.NATIVE_PACKAGESPOMDPs.NON_NATIVE_PACKAGESPOMDPs.POMDPPOMDPs.POMDP_REGISTRYPOMDPs.POMDPsPOMDPs.PolicyPOMDPs.REGISTERED_PACKAGESPOMDPs.REMOTE_URLPOMDPs.REQUIRED_REGISTRY_ENTRIESPOMDPs.ReqPOMDPs.RequirementSetPOMDPs.SUPPORTED_PACKAGESPOMDPs.SimulatorPOMDPs.SolverPOMDPs.TupleTypePOMDPs.UnspecifiedPOMDPs.UpdaterPOMDPs.actionPOMDPs.action_indexPOMDPs.action_typePOMDPs.actionindexPOMDPs.actionsPOMDPs.actiontypePOMDPs.addPOMDPs.add_allPOMDPs.add_registryPOMDPs.availablePOMDPs.buildPOMDPs.check_requirementsPOMDPs.convert_aPOMDPs.convert_callPOMDPs.convert_oPOMDPs.convert_reqPOMDPs.convert_sPOMDPs.dimensionsPOMDPs.discountPOMDPs.evalPOMDPs.failed_synth_warningPOMDPs.format_methodPOMDPs.generate_oPOMDPs.generate_orPOMDPs.generate_sPOMDPs.generate_soPOMDPs.generate_sorPOMDPs.generate_srPOMDPs.get_requirementsPOMDPs.getindexPOMDPs.handle_methodPOMDPs.handle_reqs!POMDPs.implementedPOMDPs.includePOMDPs.initial_statePOMDPs.initial_state_distributionPOMDPs.initialize_beliefPOMDPs.initialstatePOMDPs.initialstate_distributionPOMDPs.isterminalPOMDPs.isterminal_obsPOMDPs.iteratorPOMDPs.lengthPOMDPs.lowerboundPOMDPs.meanPOMDPs.modePOMDPs.n_actionsPOMDPs.n_observationsPOMDPs.n_statesPOMDPs.obs_indexPOMDPs.obs_typePOMDPs.observationPOMDPs.observationsPOMDPs.obsindexPOMDPs.obstypePOMDPs.pdfPOMDPs.pomdp_requirementsPOMDPs.push_dep!POMDPs.randPOMDPs.read_registryPOMDPs.recursively_checkPOMDPs.recursively_showPOMDPs.remove_allPOMDPs.requirements_infoPOMDPs.rewardPOMDPs.sampletypePOMDPs.short_methodPOMDPs.show_checked_listPOMDPs.show_headingPOMDPs.show_incompletePOMDPs.show_requirementsPOMDPs.show_requirerPOMDPs.simulatePOMDPs.solvePOMDPs.state_indexPOMDPs.state_typePOMDPs.stateindexPOMDPs.statesPOMDPs.statetypePOMDPs.supportPOMDPs.test_allPOMDPs.transitionPOMDPs.unpack_typedcallPOMDPs.updatePOMDPs.updaterPOMDPs.upperboundPOMDPs.valuePOMDPs.verify_registryPOMDPs.weight"
},

]}
