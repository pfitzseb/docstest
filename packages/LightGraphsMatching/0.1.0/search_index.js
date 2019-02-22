var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LightGraphsMatching-1",
    "page": "Readme",
    "title": "LightGraphsMatching",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov)Matching algorithms on top of LightGraphs."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The results of any matching is returned as a MatchingResult struct containing the mate and weight fields."
},

{
    "location": "#Perfect-matching-1",
    "page": "Readme",
    "title": "Perfect matching",
    "category": "section",
    "text": "g =CompleteGraph(4)\nw =Dict{Edge,Float64}()\nw[Edge(1,3)] = 10\nw[Edge(1,4)] = 0.5\nw[Edge(2,3)] = 11\nw[Edge(2,4)] = 2\nw[Edge(1,2)] = 100\n\n# find the perfect matching of minimum weight\nmatch = minimum_weight_perfect_matching(g, w, 50)\n# match.mate[1] == 4\n# match.mate[4] == 1\n# match.mate[2] == 3\n# match.mate[3] == 2\n# match.weight ≈ 11.5"
},

{
    "location": "#Maximum-weight-matching-1",
    "page": "Readme",
    "title": "Maximum weight matching",
    "category": "section",
    "text": "A maximum weight matching is solved as a Linear Programming problem and requires a LP solver respecting the MathProgBase solver interface. See MathProgBase  documentation for more details.using Cbc: CbcSolver #import a LP solver\ng = CompleteGraph(3)\nw = zeros(3,3)\nw[1,2] = 1\nw[3,2] = 1\nw[1,3] = 1\nmatch = maximum_weight_matching(g,CbcSolver(),w)\n# match.weight ≈ 1"
},

]}
