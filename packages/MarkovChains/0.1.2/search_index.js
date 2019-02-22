var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MarkovChains.jl-1",
    "page": "Readme",
    "title": "MarkovChains.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This pacakge provides functions to solve continuous time Markov chains for state probablities or accumulated sojourn times at a certain time point, including time infinity."
},

{
    "location": "#Tutorial-1",
    "page": "Readme",
    "title": "Tutorial",
    "category": "section",
    "text": "Here\'s a detailed tutorial on how to use this package."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": ""
},

{
    "location": "#A-birth-death-chain-1",
    "page": "Readme",
    "title": "A birth-death chain",
    "category": "section",
    "text": "The following example is about solving a 4 states birth-death chain at time 0.1, 1.0, and infinity.using MarkovChains\nchain = ContMarkovChain()\nn0 = add_state!(chain)\nn1 = add_state!(chain)\nn2 = add_state!(chain)\nn3 = add_state!(chain)\nadd_transition!(chain, n0, n1, 1.0) #transition from n0 to n1 with rate = 1.0\nadd_transition!(chain, n1, n2, 1.0)\nadd_transition!(chain, n2, n3, 1.0)\nadd_transition!(chain, n3, n2, 3.0)\nadd_transition!(chain, n2, n1, 2.0)\nadd_transition!(chain, n1, n0, 1.0)\ninit_prob = sparsevec([1], [1.0])\n\nsol = solve(chain, init_prob, 0.1) #solve at time 0.1\n@show state_prob(sol, n1) #probablity of being at state n1 at time 0.1\n# state_prob(sol, n1) = 0.08652421409974947\n\nsol = solve(chain, init_prob, 1) \n@show state_prob(sol, n1)\n# state_prob(sol, n1) = 0.375\n\nsol = solve(chain, init_prob, Inf)\n@show state_prob(sol, n1)\n# state_prob(sol, n1) = 0.375"
},

{
    "location": "#A-chain-with-absorbing-states-1",
    "page": "Readme",
    "title": "A chain with absorbing states",
    "category": "section",
    "text": "The following example is about solving a 3 states chain with absorbing states.chain = ContMarkovChain()\nn1 = add_state!(chain)\nn2 = add_state!(chain)\nn3 = add_state!(chain)\nadd_transition!(chain, n1, n2, 2.0)\nadd_transition!(chain, n2, n3, 4.0)\ninit_prob = sparsevec([1], [1.0])\n\nsol = solve(chain, init_prob, 0.5)\n\n@show state_prob(sol, n2)\n# state_prob(sol, n2) = 0.23254415793482963\n\n@show state_cumtime(sol, n2) #cumulative time spent in state n2\n# state_cumtime(sol, n2) = 0.09989410022321275\n\n@show mean_time_to_absorption(chain, init_prob) #you may be interested in MTTA for a chain with absorbing states\n# mean_time_to_absorption(chain, init_prob) = 0.75"
},

{
    "location": "autodocs/#MarkovChains.aa_rate_matrix",
    "page": "Docstrings",
    "title": "MarkovChains.aa_rate_matrix",
    "category": "function",
    "text": "aa_rate_matrix(chain, order, abs_start, nabs)\n\ncreate transition rate matrix (to-from order) from between recurrent states within range absstart, absstart + abs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarkovChains.inftime_solve",
    "page": "Docstrings",
    "title": "MarkovChains.inftime_solve",
    "category": "function",
    "text": "inftime_state(chain, init_prob; spsolve)\n\ncompute state cumulative times/probabilites of the markov chain at time infinity. state_prob and state_cumtime can be used to retrieve times/probs from the return value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarkovChains.reorder_states",
    "page": "Docstrings",
    "title": "MarkovChains.reorder_states",
    "category": "function",
    "text": "reorder states into transient states, recurrent components.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarkovChains.state_cumtime",
    "page": "Docstrings",
    "title": "MarkovChains.state_cumtime",
    "category": "function",
    "text": "state_cumtime(result, state)\n\nused to retrieve state cumulative time from result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarkovChains.state_prob",
    "page": "Docstrings",
    "title": "MarkovChains.state_prob",
    "category": "function",
    "text": "state_prob(result, state)\n\nused to retrieve state probablity from result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarkovChains.ta_rate_matrix",
    "page": "Docstrings",
    "title": "MarkovChains.ta_rate_matrix",
    "category": "function",
    "text": "ta_rate_matrix(chain, order, abs_start, nabs)\n\ncreate transition rate matrix (to-from order) from transient states to recurrent states within range absstart, absstart + abs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarkovChains.tt_rate_matrix",
    "page": "Docstrings",
    "title": "MarkovChains.tt_rate_matrix",
    "category": "function",
    "text": "tt_rate_matrix(chain, mat2chain, chain2mat, ntrans)\n\ncreate transition rate matrix (to-from order) between transient states.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MarkovChains.ContMarkovChainMarkovChains.CtmcSolutionMarkovChains.FintimeCumSolutionMarkovChains.FintimeProbSolutionMarkovChains.FintimeSolutionMarkovChains.GraphsMarkovChains.InftimeStateResultMarkovChains.LayoutsMarkovChains.MarkovChainsMarkovChains.ReorderMarkovChains.TransitionMarkovChains.aa_rate_matrixMarkovChains.add_state!MarkovChains.add_transition!MarkovChains.chain_to_lightgraphMarkovChains.evalMarkovChains.extend!MarkovChains.fintime_solveMarkovChains.fintime_solve_cumMarkovChains.fintime_solve_probMarkovChains.includeMarkovChains.inftime_solveMarkovChains.max_out_rateMarkovChains.mean_time_to_absorptionMarkovChains.plot_chainMarkovChains.poisson_cum_rtpMarkovChains.poisson_trunc_pointMarkovChains.reorder_statesMarkovChains.solveMarkovChains.state_countMarkovChains.state_cumtimeMarkovChains.state_probMarkovChains.statesMarkovChains.ta_rate_matrixMarkovChains.trans_prob_matrixMarkovChains.trans_rate_matrixMarkovChains.transitionsMarkovChains.tt_rate_matrix"
},

]}
