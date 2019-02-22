var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TrafficAssignment.jl-1",
    "page": "Readme",
    "title": "TrafficAssignment.jl",
    "category": "section",
    "text": "(Image: TrafficAssignment) (Image: TrafficAssignment) (Image: TrafficAssignment)(Image: Build Status) (Image: Build status) (Image: Coverage Status)This package for the Julia Language does basically two tasks: (1) loading a network data and (2) finding a user equilibrium traffic pattern. See Traffic Assignment."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "julia> Pkg.add(\"TrafficAssignment\")This will install LightGraphs.jl and Optim.jl, if you don\'t have them already.To check if worksjulia> Pkg.test(\"TrafficAssignment\")"
},

{
    "location": "#load*ta*network-1",
    "page": "Readme",
    "title": "loadtanetwork",
    "category": "section",
    "text": "This function loads a network data available in this TNTP github repository. The network name must match with the directory name in the TNTP repository.Example:ta_data = load_ta_network(\"SiouxFalls\")\n# ta_data = load_ta_network(\"Anaheim\")\n# ta_data = load_ta_network(\"Barcelona\")\n# ta_data = load_ta_network(\"Winnipeg\")The return value is of the TA_Data type, which is defined astype TA_Data\n    network_name::String\n\n    number_of_zones::Int\n    number_of_nodes::Int\n    first_thru_node::Int\n    number_of_links::Int\n\n    start_node::Array{Int,1}\n    end_node::Array{Int,1}\n    capacity::Array{Float64,1}\n    link_length::Array{Float64,1}\n    free_flow_time::Array{Float64,1}\n    B::Array{Float64,1}\n    power::Array{Float64,1}\n    speed_limit::Array{Float64,1}\n    toll::Array{Float64,1}\n    link_type::Array{Int64,1}\n\n    total_od_flow::Float64\n\n    travel_demand::Array{Float64,2}\n    od_pairs::Array{Tuple{Int64,Int64},1}\n\n    toll_factor::Float64\n    distance_factor::Float64\n\n    best_objective::Float64\nend"
},

{
    "location": "#ta*frank*wolfe-1",
    "page": "Readme",
    "title": "tafrankwolfe",
    "category": "section",
    "text": "This function implements methods to find traffic equilibrium flows: currently, Frank-Wolfe (FW) method, Conjugate FW (CFW) method, and Bi-conjugate FW (BFW) method.References:Mitradjieva, M., & Lindberg, P. O. (2013). The Stiff Is Moving-Conjugate Direction Frank-Wolfe Methods with Applications to Traffic Assignment. Transportation Science, 47(2), 280-293.Example:link_flow, link_travel_time, objective = ta_frank_wolfe(ta_data, log=\"off\", tol=1e-2)Available optional arguments:method=:fw / :cfw / :bfw (default=:bfw)\nstep=\"exact\" / \"newton\" : exact line search using golden section / a simple Newton-type step (default=:exact)\nlog=:on / :off : displays information from each iteration or not (default=:off)\nmaxiterno=integer value : maximum number of iterations (default=2000)\ntol=numeric value : tolerance for the Average Excess Cost (AEC) (default=1e-3)For example, one may do:ta_data = load_ta_network(\"SiouxFalls\")\nlink_flow, link_travel_time, objective = ta_frank_wolfe(ta_data, method=:cfw, max_iter_no=50000, step=:newton, log=:on, tol=1e-5)The total system travel time can be simply computed assystem_travel_time = dot(link_travel_time, link_flow)"
},

{
    "location": "#Parallel-Computing-1",
    "page": "Readme",
    "title": "Parallel Computing",
    "category": "section",
    "text": "During the all-or-nothing allocation procedure, this package supports parallel computing. If you want to start with two processes, use the following command to start Juliajulia -p 2When you directly run your script, use the following command:julia -p 2 your-script.jl"
},

{
    "location": "#Contributor-1",
    "page": "Readme",
    "title": "Contributor",
    "category": "section",
    "text": "This package is written and maintained by Changhyun Kwon."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TrafficAssignment.TA_DataTrafficAssignment.TA_dijkstra_shortest_pathsTrafficAssignment.TNTP_SHATrafficAssignment.TrafficAssignmentTrafficAssignment.add_demand_vector!TrafficAssignment.create_graphTrafficAssignment.download_tntpTrafficAssignment.evalTrafficAssignment.get_vectorTrafficAssignment.includeTrafficAssignment.load_ta_networkTrafficAssignment.read_ta_networkTrafficAssignment.search_scTrafficAssignment.ta_frank_wolfe"
},

]}
