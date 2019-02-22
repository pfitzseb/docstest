var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PowerModelsAnnex.jl-1",
    "page": "Readme",
    "title": "PowerModelsAnnex.jl",
    "category": "section",
    "text": "Release: (Image: PowerModelsAnnex), (Image: PowerModelsAnnex)Dev: (Image: Build Status) (Image: codecov)PowerModels.jl provides an implementation reference for established formulations and methods in power system optimization, and hence is is not an appropriate location for more exploratory work.  PowerModelsAnnex.jl is an extension of PowerModels.jl that provides a home for open-source sharing of preliminary and/or exploratory methods in power system optimization.Due to the exploratory nature of PowerModelsAnnex,there is minimal documentation and testing\nthere are limited code quality and reliablity standards\nanything goes in the annex, more-or-lessUsers should be prepared for features that break.Pull Requests to PowerModelsAnnex are always welcome and not subject to significant scrutiny."
},

{
    "location": "#Acknowledgments-1",
    "page": "Readme",
    "title": "Acknowledgments",
    "category": "section",
    "text": "This code has been developed as part of the Advanced Network Science Initiative at Los Alamos National Laboratory. The primary developer is Carleton Coffrin."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code is provided under a BSD license as part of the Multi-Infrastructure Control and Optimization Toolkit (MICOT) project, LA-CC-13-108."
},

{
    "location": "autodocs/#PowerModelsAnnex.CostCurve",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.CostCurve",
    "category": "type",
    "text": "abstract type CostCurve end\n\nAbstract type for cost curves. We have two types, one being PolynomialCost, the other PWLCost. These types are introduced in order to deal with the possible formats in which cost curves can be specified and to enforce type (and unit) consistency.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.NLACRPowerModel",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.NLACRPowerModel",
    "category": "type",
    "text": "default NLACRForm constructor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.NLSOCWRPowerModel",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.NLSOCWRPowerModel",
    "category": "type",
    "text": "default NLSOCWROAForm constructor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.Network",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.Network",
    "category": "type",
    "text": "Network\n\nBasic type for storing a network as a group of DataFrames plus a PowerModels network case.\n\nConstructors:\nNetwork(; bus, gen, piload, psload, line, costgen, costload, pmc)\n\nCreate a Network containing the specified dataframes. Specifying a PowerModel case pmc will solely store the case inside the Network, without using it to populate the dataframes. If that is desired, another constructor should be used.\n\nNetwork(pmc::Dict{String, Any})\n\nCreate a Network from a PowerModel network.\n\nNetwork(path::AbstractString)\n\nCreate a Network from a Matpower case file.\n\nNetwork(case::Symbol)\n\nCreate a Network from a case. All cases are stored inside the case_library folder. In order to list all valid case names, use PowerModelsAPI.list_cases().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.PWLCost",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.PWLCost",
    "category": "type",
    "text": "PWLCost <: CostCurve\n\nThe cost function as a piecewise linear function of the MWhr.\n\nFields\n\ncost::AbstractVector: the vector of the value of the cost function at the extrema\n\nof the segments\n\nmw::AbstractVector: the vector of the extrema of the segments in which\n\nthe range for power generation is split.\n\nConstructor\n\nFor convenience, and to avoid errors due to the order, the default constructor uses kwargs:\n\n    PWLCost(mw=mw, cost=cost)\n\nNOTE:\n\nUnits are explicitly given.\n\nTODO:\n\nMake the dimensions and units parameters of the type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.PolynomialCost",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.PolynomialCost",
    "category": "type",
    "text": "PolynomialCost{T<:Number} <: CostCurve\n\nField\n\ncoefficients::AbstractVector{T}\n\nThe coefficients field is a vector that contains the numerical values of the coefficients of the monomials of the polynomial cost function. If n=length(coefficients), the cost is a polynomial of degree n - 1. The first element of the array is the coefficient of the monomial of degree n - 1, the last is the coefficient of the monomial of degree 0.\n\nNOTE:\n\nDimensions are not enforced as the coefficients have all different dimension (the element i of a vector of length n has dimensions USD/(MWhr)^(n-i))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.QCWRTriNoLinkPowerModel",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.QCWRTriNoLinkPowerModel",
    "category": "type",
    "text": "default QC trilinear without linking constraint model constructor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.SOCWROAPowerModel",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.SOCWROAPowerModel",
    "category": "type",
    "text": "default SOCWROA constructor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_bus!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_bus!",
    "category": "function",
    "text": "add_bus!(\n    net::Network;\n    bus_type::Int=0,\n    base_kv::Union{Missings.Missing,<:Number}=missing,\n    name::AbstractString=\"none\",\n    element_id::Int=-1,\n    voltage::Union{Missings.Missing,<:Number}=missing,\n    volt_max::Union{Missings.Missing,<:Number}=missing,\n    volt_min::Union{Missings.Missing,<:Number}=missing,\n    coords::Union{Missings.Missing,Tuple{Float64,Float64}}=missing,\n)\n\nAdd a new bus to Network net. If name and element_id are not provided, reasonable values will be automatically chosen.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_cost_gen!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_cost_gen!",
    "category": "function",
    "text": "add_cost_gen!(\n    net::Network;\n    coeffs::Vector{<:Real}=Vector{Float64}(),\n    gen_id::Union{Missings.Missing,Int}= missing,\n    element_id::Int= -1,\n    model::Int=2,\n    ncost::Int=0,\n)\n\nAdd new generator cost to a Network net. If element_id is not specified, a reasonable value will be adopted. This method applies to polynomial costs.\n\n\n\n\n\nadd_cost_gen!(\n    net::Network;\n    pwl_cost::PWLCost;\n    gen_id::Union{NAtype,Int}= NA,\n    element_id::Int= -1\n    model::Int=1,\n    ncost::Int=0,\n)\n\nAdd new generator cost to a Network net. If element_id is not specified, a reasonable value will be adopted. This method applies to piecewise linear costs (1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_cost_load!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_cost_load!",
    "category": "function",
    "text": "add_cost_load!(\n    net::Network;\n    coeffs::Vector{<:Real}=Vector{Float64}(),\n    load_id::Union{Missings.Missing,Int}= missing,\n    element_id::Int= -1,\n    model::Int=2,\n    ncost::Int=0,\n)\n\nAdd new load cost to a Network net. If element_id is not specified, a reasonable value will be adopted. This method applies to polynomial costs.\n\n\n\n\n\nadd_cost_load!(\n    net::Network;\n    coeffs::Tuple{Vector}=([], []),\n    load_id::Union{NAtype,Int}= NA,\n    element_id::Int= -1,\n    model::Int=1,\n    ncost::Int=0,\n)\n\nAdd new load cost to a Network net. If element_id is not specified, a reasonable value will be adopted. This method applies to piecewise linear costs (1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_gen!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_gen!",
    "category": "function",
    "text": "add_gen!(\n    net::Network;\n    element_id::Int=-1,\n    bus::Union{Missings.Missing,Int}=missing,\n    gen_p::Union{Missings.Missing,<:Number}=missing,\n    p_max::Union{Missings.Missing,<:Number}=missing,\n    p_min::Union{Missings.Missing,<:Number}=missing,\n    gen_q::Union{Missings.Missing,<:Number}=missing,\n    q_max::Union{Missings.Missing,<:Number}=missing,\n    q_min::Union{Missings.Missing,<:Number}=missing,\n    cost::Union{Missings.Missing,Int}=missing,\n    startup_cost::Union{Missings.Missing,<:Number}=missing,\n    status::Int= 1,\n    ramp::Union{Missings.Missing,<:Number}=missing,\n)\n\nAdd a new generator to a Network net. In case element_id and status are not provided, a reasonable value will be chosen for element_id, while status wil be assumed as 1 (the element is active).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_line!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_line!",
    "category": "function",
    "text": "add_line!(\n    net::Network;\n    rate_a::Union{Missings.Missing,<:Number}= missing,\n    rate_b::Union{Missings.Missing,<:Number}= missing,\n    rate_c::Union{Missings.Missing,<:Number}= missing,\n    transformer::Bool= false,\n    from_bus::Union{Missings.Missing,Int}= missing,\n    to_bus::Union{Missings.Missing,Int}= missing,\n    status::Int=1,\n    element_id::Int=-1,\n    resistance::Union{Missings.Missing,<:Number}= missing,\n    reactance::Union{Missings.Missing,<:Number}= missing,\n    susceptance::Union{Missings.Missing,<:Number}= missing,\n    ang_min::Float64=-1.0,\n    ang_max::Float64=1.0,\n    p_to::Float64=0.0,\n    p_from::Float64=0.0,\n    q_to::Float64=0.0,\n    q_from::Float64=0.0,\n)\n\nAdd a new line to a Network net. In case element_id, transformer and status are not provided, a reasonable value will be chosen for element_id, while status wil be assumed as 1 (the element is active) and transformer will be assumed as false (the line is not a transformer).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_load!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_load!",
    "category": "function",
    "text": "add_load!(\n    net::Network;\n    element_id::Int=-1,\n    bus::Union{Missings.Missing,Int}=missing,\n    load_p::Union{Missings.Missing,<:Number}=missing,\n    load_q::Union{Missings.Missing,<:Number}=missing,\n    status::Int=1,\n)\n\nAdd a new price insensitive load to a Network net. In case element_id and status are not provided, a reasonable value will be chosen for element_id, while status wil be assumed as 1 (the element is active).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_load_demand_setpoint",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_load_demand_setpoint",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_pi_load!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_pi_load!",
    "category": "function",
    "text": "add_pi_load!(\n    net::Network;\n    element_id::Int=-1,\n    bus::Union{Missings.Missing,Int}=missing,\n    load_p::Union{Missings.Missing,<:Number}=missing,\n    load_q::Union{Missings.Missing,<:Number}=missing,\n    status::Int=1,\n)\n\nAdd a new price insensitive load to a Network net. In case element_id and status are not provided, a reasonable value will be chosen for element_id, while status wil be assumed as 1 (the element is active).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.add_ps_load!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.add_ps_load!",
    "category": "function",
    "text": "add_ps_load!(\n    net::Network;\n    element_id::Int=-1,\n    bus::Union{Missings.Missing,Int}=missing,\n    load::Union{Missings.Missing,<:Number}=missing,\n    load_max::Union{Missings.Missing,<:Number}=missing,\n    cost::Union{Missings.Missing,Int}=missing,\n    status::Int=1,\n)\n\nAdd a new price sensitive load to a Network net. In case element_id and status are not provided, a reasonable value will be chosen for element_id, while status wil be assumed as 1 (the element is active).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.applyunits!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.applyunits!",
    "category": "function",
    "text": "applyunits!(net::Network)\n\nThis function annotates the Network structure with physical unit annotations. For example, for the load column, it is originally in Float64. This function will convert it to a type representing the units u\"MWh\"). See PowerSystemsUnits.jl for more information. We are assuming energy units as opposed to power units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.bounds_tighten_voltage",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.bounds_tighten_voltage",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.build_df_from_pmc",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.build_df_from_pmc",
    "category": "function",
    "text": "build_df_from_pmc(columns::Dict{Symbol, <: Any}, block::Dict{String,Any})\n\nReturn a DataFrame as built from a PowerModels case dictionary. columns specifies which quantites to grab and from where. block corresponds to a dictionary from a PowerModels case.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.build_pmc!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.build_pmc!",
    "category": "function",
    "text": "build_pmc!(net::Network)\n\nRead information contained in net and uses it to populate net.pmc. This will overwrite any information previously contained in there.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.bus_columns",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.bus_columns",
    "category": "constant",
    "text": "bus_columns\n\n:elementid -> id number of the bus :name ->  name of the bus :voltage -> bus operating voltage :voltmax -> maximum bus voltage :voltmin -> minimum bus voltage :bustype -> Bus type :base_kv -> Base voltage :coords -> Bus geocoordinates in latitude and longitude :zone -> Bus zone :area -> Bus Area\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.constraint_kcl_shunt_scaled",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.constraint_kcl_shunt_scaled",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.constraint_thermal_limit_from",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.constraint_thermal_limit_from",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.constraint_thermal_limit_to",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.constraint_thermal_limit_to",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.converged",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.converged",
    "category": "function",
    "text": "converged(net::Network)\n\nReturn true if an OPF was ran and successfully converged, false otherwise (inclunding if no OPF was ran).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.cost_columns",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.cost_columns",
    "category": "constant",
    "text": "cost_columns\n\n:element_id -> ID number of the cost (defaults to -1) :coeffs -> coefficients of the cost function (defaults to :cost) :model -> Piecewise linear (1) or polynomial (2), defaults to polynomial (2) :ncost -> Number of coefficients in the polynomial cost or number of pairs (MWh, USD) in piecewise linear costs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.costcurve2pmc",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.costcurve2pmc",
    "category": "function",
    "text": "costcurve2pmc(c)\n\nConvert the CostCurve types into PowerModels costs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.gen_columns",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.gen_columns",
    "category": "constant",
    "text": "gen_columns\n\n:elementid -> generator ID number :bus -> ID of the bus where the generator is placed :genp -> active power generated :pmax -> maximum active power :pmin -> minimum active power :genq -> reactive power generated :qmax -> maximum reactive power :qmin -> minimum reactive power :cost -> ID number of the associated cost :startupcost -> startup cost :status -> 0=IDLE, 1=ACTIVE :ramp -> 10-minute ramping constraint\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.get_api_solution",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.get_api_solution",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.infeasible",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.infeasible",
    "category": "function",
    "text": "infeasible(net::Network)\n\nCheck if the total demand can be satisfied by the generators. Returns true in case no solution is possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.is_convex",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.is_convex",
    "category": "function",
    "text": "is_convex(mw::AbstractVector{<:Number}, cost::AbstractVector{<:Number})\n\nDetermines if the data used for a PWL curve are defining a convex curve.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.line_columns",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.line_columns",
    "category": "constant",
    "text": "line_columns\n\n:elementid -> ID number of the line :ratea -> maximum current under rate A :rateb -> maximum current under rate B :ratec -> maximum current under rate C :transformer -> is transformer? :frombus -> first end-bus ID :tobus -> second end-bus ID :status -> 0=IDLE, 1=ACTIVE :resistance -> line electric resistance :reactance -> line reactance :susceptance -> line susceptance :angmin -> minimum voltage angle difference :angmax -> maximum voltage angle difference :gto -> line conductance (to-node) :gfr -> line conductance (from-node) :bto -> line charging susceptance (to-node) :bfr -> line charging susceptance (from-node)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.lmps",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.lmps",
    "category": "function",
    "text": "lmps(net::Network)\n\nReturn a DataFrame with the LMPs for all buses after an OPF run. The prices are extracted from the Lagrange multipliers for the Kirchhoff\'s conservation law. Due to conventions in PowerModels.jl, the LMP are the negative of these Lagrange multipliers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.max_load_percent!",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.max_load_percent!",
    "category": "function",
    "text": "max_load_percent!(net::Network, maxload::Real)\n\nScale line ratings such that the maximum load is equal to maxload% of the original value.\n\n\n\n\n\nmax_load_percent!(pmc::Dict, maxload::Real)\n\nScale line ratings such that the maximum load is equal to maxload% of the original value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.network2pmc",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.network2pmc",
    "category": "function",
    "text": "network2pmc(net::Network)\n\nReturn a PowerModels network model (dictionary) based on the information contained within a Network net.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.objective_max_loading",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.objective_max_loading",
    "category": "function",
    "text": "objective: Max. load_factor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.objective_max_loading_gen_output",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.objective_max_loading_gen_output",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.objective_max_loading_voltage_norm",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.objective_max_loading_voltage_norm",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.pi_load_columns",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.pi_load_columns",
    "category": "constant",
    "text": "pi_load_columns\n\n:elementid -> ID number of the load :bus -> ID number of the bus where the load is placed :loadp -> active load value :load_q -> reactive load value :status -> 0=IDLE, 1=ACTIVE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_ac_opf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_ac_opf",
    "category": "function",
    "text": "Given a JuMP model and a PowerModels network data structure,  Builds an AC-OPF formulation of the given data and returns the JuMP model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_ac_pf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_ac_pf",
    "category": "function",
    "text": "Given a JuMP model and a PowerModels network data structure,  Builds an AC-PF formulation of the given data and returns the JuMP model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_api_opf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_api_opf",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_dc_opf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_dc_opf",
    "category": "function",
    "text": "Given a JuMP model and a PowerModels network data structure,  Builds an DC-OPF formulation of the given data and returns the JuMP model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_dc_pf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_dc_pf",
    "category": "function",
    "text": "Given a JuMP model and a PowerModels network data structure,  Builds an DC-PF formulation of the given data and returns the JuMP model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_qc_opf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_qc_opf",
    "category": "function",
    "text": "Given a JuMP model and a PowerModels network data structure,  Builds an QC-OPF formulation of the given data and returns the JuMP model Implementation provided by @sidhant172\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_sad_opf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_sad_opf",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_soc_opf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_soc_opf",
    "category": "function",
    "text": "Given a JuMP model and a PowerModels network data structure,  Builds an SOC-OPF formulation of the given data and returns the JuMP model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.post_soc_pf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.post_soc_pf",
    "category": "function",
    "text": "Given a JuMP model and a PowerModels network data structure,  Builds an SOC-PF formulation of the given data and returns the JuMP model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.prices",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.prices",
    "category": "function",
    "text": "prices(pwl_cost::PWLCost)\n\nThis function returns the price for each block of the PWL curve, defined as the slopes of the linear function for each block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.ps_load_columns",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.ps_load_columns",
    "category": "constant",
    "text": "ps_load_columns\n\n:elementid -> ID number of the load :bus -> ID number of the bus where the load is placed :load -> active load value :loadmax -> maximum active load :cost -> ID number of the associated cost :status -> 0=IDLE, 1=ACTIVE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.res_gen",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.res_gen",
    "category": "function",
    "text": "res_gen(net::Network)\n\nReturn a DataFrame with the power supplied by each generator as a solution to an OPF.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.run_api_opf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.run_api_opf",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.run_sad_opf",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.run_sad_opf",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.shadow_prices_lines",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.shadow_prices_lines",
    "category": "function",
    "text": "shadow_prices_lines(net::Network)\n\nReturn a DataFrame containing the shadow prices for all lines after an OPF run.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.upperbound_negative_active_generation",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.upperbound_negative_active_generation",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#PowerModelsAnnex.variable_load_factor",
    "page": "Docstrings",
    "title": "PowerModelsAnnex.variable_load_factor",
    "category": "function",
    "text": "variable: load_factor >= 1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PowerModelsAnnex.ACPPowerModelPowerModelsAnnex.APIACPPowerModelPowerModelsAnnex.CostCurvePowerModelsAnnex.DCPPowerModelPowerModelsAnnex.LOGGERPowerModelsAnnex.NLACRFormPowerModelsAnnex.NLACRPowerModelPowerModelsAnnex.NLFormsPowerModelsAnnex.NLSOCWROAFormPowerModelsAnnex.NLSOCWRPowerModelPowerModelsAnnex.NetworkPowerModelsAnnex.PMsPowerModelsAnnex.PWLCostPowerModelsAnnex.PolynomialCostPowerModelsAnnex.PowerModelsAnnexPowerModelsAnnex.QCWRPowerModelPowerModelsAnnex.QCWRTriNoLinkFormPowerModelsAnnex.QCWRTriNoLinkPowerModelPowerModelsAnnex.SOCWROAFormPowerModelsAnnex.SOCWROAPowerModelPowerModelsAnnex.SOCWRPowerModelPowerModelsAnnex._stripunits!PowerModelsAnnex.add_bus!PowerModelsAnnex.add_cost_gen!PowerModelsAnnex.add_cost_load!PowerModelsAnnex.add_gen!PowerModelsAnnex.add_line!PowerModelsAnnex.add_load!PowerModelsAnnex.add_load_demand_setpointPowerModelsAnnex.add_pi_load!PowerModelsAnnex.add_ps_load!PowerModelsAnnex.applyunits!PowerModelsAnnex.bounds_tighten_voltagePowerModelsAnnex.build_df_from_pmcPowerModelsAnnex.build_pmc!PowerModelsAnnex.busPowerModelsAnnex.bus_columnsPowerModelsAnnex.busesPowerModelsAnnex.coefficientsPowerModelsAnnex.constraint_kcl_shunt_scaledPowerModelsAnnex.constraint_thermal_limit_fromPowerModelsAnnex.constraint_thermal_limit_toPowerModelsAnnex.convergedPowerModelsAnnex.costPowerModelsAnnex.cost_columnsPowerModelsAnnex.cost_genPowerModelsAnnex.cost_loadPowerModelsAnnex.costcurve2pmcPowerModelsAnnex.costsPowerModelsAnnex.degreePowerModelsAnnex.evalPowerModelsAnnex.genPowerModelsAnnex.gen_columnsPowerModelsAnnex.gen_costPowerModelsAnnex.generatorPowerModelsAnnex.generatorsPowerModelsAnnex.gensPowerModelsAnnex.get_api_solutionPowerModelsAnnex.includePowerModelsAnnex.infeasiblePowerModelsAnnex.is_convexPowerModelsAnnex.linePowerModelsAnnex.line_columnsPowerModelsAnnex.linesPowerModelsAnnex.lmpsPowerModelsAnnex.loadPowerModelsAnnex.load_costPowerModelsAnnex.loadsPowerModelsAnnex.matpower2pmcPowerModelsAnnex.max_load_percent!PowerModelsAnnex.mwsPowerModelsAnnex.n_costPowerModelsAnnex.n_segmentsPowerModelsAnnex.net2pmc_branchPowerModelsAnnex.net2pmc_busPowerModelsAnnex.net2pmc_genPowerModelsAnnex.net2pmc_loadPowerModelsAnnex.net2pmc_ps_loadPowerModelsAnnex.network2pmcPowerModelsAnnex.objective_max_loadingPowerModelsAnnex.objective_max_loading_gen_outputPowerModelsAnnex.objective_max_loading_voltage_normPowerModelsAnnex.pi_loadPowerModelsAnnex.pi_load_columnsPowerModelsAnnex.pmcPowerModelsAnnex.post_ac_opfPowerModelsAnnex.post_ac_pfPowerModelsAnnex.post_api_opfPowerModelsAnnex.post_dc_opfPowerModelsAnnex.post_dc_pfPowerModelsAnnex.post_qc_opfPowerModelsAnnex.post_sad_opfPowerModelsAnnex.post_soc_opfPowerModelsAnnex.post_soc_pfPowerModelsAnnex.pricesPowerModelsAnnex.ps_loadPowerModelsAnnex.ps_load_columnsPowerModelsAnnex.res_genPowerModelsAnnex.resultsPowerModelsAnnex.run_ac_opfPowerModelsAnnex.run_api_opfPowerModelsAnnex.run_dc_opfPowerModelsAnnex.run_opfPowerModelsAnnex.run_sad_opfPowerModelsAnnex.shadow_prices_linesPowerModelsAnnex.stripunits!PowerModelsAnnex.upperbound_negative_active_generationPowerModelsAnnex.variable_load_factor"
},

]}
