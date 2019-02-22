var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Logo)(Image: Build Status) (Image: codecov) (Image: )"
},

{
    "location": "#Plasmo.jl-1",
    "page": "Readme",
    "title": "Plasmo.jl",
    "category": "section",
    "text": "Plasmo.jl (Platform for Scalable Modeling and Optimization) is modeling interface that facilitates solving optimization problems using a graph-based approach.  The package enables component style modeling by means of modularizing optimization models that can be constructed independently and connected using linking constraints.     The graph-based modeling approach facilitates decomposition techniques such as graph partitioning and community detection which enable the use of parallel solvers such as PIPS-NLP,DSP, or built-in Julia solvers for Benders and Lagrangean Decomposition. Plasmo.jl has been developed by the Scalable Systems Laboratory at the University of Wisconsin-Madison."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Documentation is available through GitHub Pages. Additional examples can be found in the examples folder."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.clone(\"https://github.com/jalving/Plasmo.jl\")"
},

{
    "location": "#Simple-Example-1",
    "page": "Readme",
    "title": "Simple Example",
    "category": "section",
    "text": "Plasmo.jl uses optimization models written with JuMP.using JuMP\nusing Plasmo\nusing Ipopt\n\ngraph = ModelGraph()\nsetsolver(graph,IpoptSolver())\n\n#Add nodes to a ModelGraph\nn1 = add_node!(graph)\nn2 = add_node!(graph)\n\n#Create JuMP models\nm1 = Model()\n@variable(m1,0 <= x <= 2)\n@variable(m1,0 <= y <= 3)\n@constraint(m1,x+y <= 4)\n@objective(m1,Min,x)\n\nm2 = Model()\n@variable(m2,x)\n@NLconstraint(m2,exp(x) >= 2)\n\n#Set JuMP models on nodes\nsetmodel(n1,m1)     #set m1 to node 1.  Updates reference on m1\nsetmodel(n2,m2)\n\n#Link constraints take the same expressions as the JuMP @constraint macro\n@linkconstraint(graph,n1[:x] == n2[:x])\n\n#Get all of the link constraints in a graph\nlinks = getlinkconstraints(graph)\n\nsolve(graph)\n\nprintln(\"n1[:x]= \",JuMP.getvalue(n1[:x]))\nprintln(\"n2[:x]= \",JuMP.getvalue(n2[:x]))"
},

{
    "location": "#Acknowledgments-1",
    "page": "Readme",
    "title": "Acknowledgments",
    "category": "section",
    "text": "This code is based on work supported by the U.S. Department of Energy (DOE), Office of Science, under Contract No. DE-AC02-06CH11357 as well as the DOE Office of Electricity Delivery and Energy Reliability’s Advanced Grid Research and Development program at Argonne National Laboratory."
},

{
    "location": "#Citing-Plasmo-1",
    "page": "Readme",
    "title": "Citing Plasmo",
    "category": "section",
    "text": "If you find Plasmo useful for your work, you might cite the current pre-print of the manuscript:@article{JalvingZavala2018,\narchivePrefix = {arXiv},\narxivId = {arXiv:1812.04983v1},\nauthor = {Jalving, Jordan and Cao, Yankai and Zavala, Victor M},\neprint = {arXiv:1812.04983v1},\ntitle = {{Graph-Based Modeling and Simulation of Complex Systems}}\n}"
},

]}
