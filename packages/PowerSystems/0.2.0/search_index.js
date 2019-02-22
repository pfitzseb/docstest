var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#PowerSystems.jl-1",
    "page": "Home",
    "title": "PowerSystems.jl",
    "category": "section",
    "text": "PowerSystems.jl is a Julia package for doing Power Systems Modeling.For more detailed documentation of each object in the library, see the API/PowerSystems page.Some examples of usage can be found in the examples directory using IJulia."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "This package is not yet registered. Until it is, things may change. It is perfectly usable but should not be considered stable.You can install it by typingjulia> Pkg.clone(\"https://github.com/NREL/PowerSystems.jl.git\")"
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "Once installed, the PowerSystems package can by used by typingusing PowerSystems"
},

{
    "location": "api/PowerSystems/#",
    "page": "PowerSystems",
    "title": "PowerSystems",
    "category": "page",
    "text": ""
},

{
    "location": "api/PowerSystems/#PowerSystems-1",
    "page": "PowerSystems",
    "title": "PowerSystems",
    "category": "section",
    "text": "CurrentModule = PowerSystems\nDocTestSetup  = quote\n    using PowerSystems\nendAPI documentationPages = [\"PowerSystems.md\"]"
},

{
    "location": "api/PowerSystems/#Index-1",
    "page": "PowerSystems",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"PowerSystems.md\"]"
},

{
    "location": "api/PowerSystems/#PowerSystems.EconRenewable",
    "page": "PowerSystems",
    "title": "PowerSystems.EconRenewable",
    "category": "type",
    "text": "\" Data Structure for the economical parameters of renewable generation technologies.     The data structure can be called calling all the fields directly or using named fields.     All the limits are defined by NamedTuples and some fields can take nothing\n\n## Examples\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.EconThermal",
    "page": "PowerSystems",
    "title": "PowerSystems.EconThermal",
    "category": "type",
    "text": "\" Data Structure for the economical parameters of thermal generation technologies.     The data structure can be called calling all the fields directly or using named fields.     All the limits are defined by NamedTuples and some fields can take nothing\n\n## Examples\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ProportionalReserve",
    "page": "PowerSystems",
    "title": "PowerSystems.ProportionalReserve",
    "category": "type",
    "text": "ProportionalReserve(name::String,         contributingdevices::PowerSystemDevice,         timeframe::Float64,         requirement::Dict{Any,Dict{Int,TimeSeries.TimeArray}})\n\nData Structure for a proportional reserve product for system simulations. The data structure can be called calling all the fields directly or using named fields. name - description contributingdevices - devices from which the product can be procured timeframe - the relative saturation timeframe requirement - the required quantity of the product\n\nExamples\n\n```jldoctest\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.StaticReserve",
    "page": "PowerSystems",
    "title": "PowerSystems.StaticReserve",
    "category": "type",
    "text": "StaticReserve(name::String,         contributingdevices::PowerSystemDevice,         timeframe::Float64,         requirement::Float64})\n\nData Structure for the procurement products for system simulations. The data structure can be called calling all the fields directly or using named fields. name - description contributingdevices - devices from which the product can be procured timeframe - the relative saturation timeframe requirement - the required quantity of the product\n\nExamples\n\n```jldoctest\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.TechThermal",
    "page": "PowerSystems",
    "title": "PowerSystems.TechThermal",
    "category": "type",
    "text": "TechThermal(activepower::Float64,\n        activepowerlimits::NamedTuple{(:min, :max),Tuple{Float64,Float64}},\n        reactivepower::Union{Float64,Nothing},\n        reactivepowerlimits::Union{(min::Float64,max::Float64),Nothing},\n        ramplimits::Union{NamedTuple{(:up, :down),Tuple{Float64,Float64}},Nothing},\n        timelimits::Union{NamedTuple{(:min, :max),Tuple{Float64,Float64}},Nothing})\n\nData Structure for the economical parameters of thermal generation technologies.     The data structure can be called calling all the fields directly or using named fields.     Two examples are provided one with minimal data definition and a more comprenhensive one\n\n# Examples\n\n```jldoctest\n\njulia> Tech = TechThermal(activepower = 100.0, activepowerlimits = (min = 50.0, max = 200.0))\nWARNING: Limits defined as nothing\nTech Gen:\n    Real Power: 100.0\n    Real Power Limits: (min = 50.0, max = 200.0)\n    Reactive Power: nothing\n    Reactive Power Limits: nothing\n    Ramp Limits: nothing\n    Time Limits: nothing\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ThermalDispatch",
    "page": "PowerSystems",
    "title": "PowerSystems.ThermalDispatch",
    "category": "type",
    "text": "\" Data Structure for thermal generation technologies.     The data structure contains all the information for technical and economical modeling.     The data fields can be filled using named fields or directly.\n\nExamples\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ThermalGen",
    "page": "PowerSystems",
    "title": "PowerSystems.ThermalGen",
    "category": "type",
    "text": "Abstract struct for thermal generation technologies\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ThermalGenSeason",
    "page": "PowerSystems",
    "title": "PowerSystems.ThermalGenSeason",
    "category": "type",
    "text": "\" Data Structure for thermal generation technologies subjecto to seasonality constraints.     The data structure contains all the information for technical and economical modeling and an extra field for a time series.     The data fields can be filled using named fields or directly.\n\nExamples\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.Transformer2W",
    "page": "PowerSystems",
    "title": "PowerSystems.Transformer2W",
    "category": "type",
    "text": "The 2-W transformer model uses an equivalent circuit assuming the impedance is on the High Voltage Side of the transformer. The model allocates the iron losses and magnetezing suceptance to the primary side\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.VSCDCLine",
    "page": "PowerSystems",
    "title": "PowerSystems.VSCDCLine",
    "category": "type",
    "text": "As implemented in Milano\'s Book Page 397\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_file-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_file",
    "category": "method",
    "text": "parse_file(file; import_all)\n\nParses a Matpower .m file or PTI (PSS(R)E-v33) .raw file into a PowerModels data structure. All fields from PTI files will be imported if import_all is true (Default: false).\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Exported-1",
    "page": "PowerSystems",
    "title": "Exported",
    "category": "section",
    "text": "Modules = [PowerSystems]\nPrivate = false"
},

{
    "location": "api/PowerSystems/#PowerSystems.conductorless",
    "page": "PowerSystems",
    "title": "PowerSystems.conductorless",
    "category": "constant",
    "text": "feild names that should not be multi-conductor values\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.MultiConductorMatrix",
    "page": "PowerSystems",
    "title": "PowerSystems.MultiConductorMatrix",
    "category": "type",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.MultiConductorValue",
    "page": "PowerSystems",
    "title": "PowerSystems.MultiConductorValue",
    "category": "type",
    "text": "a data structure for working with multiconductor datasets\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.MultiConductorVector",
    "page": "PowerSystems",
    "title": "PowerSystems.MultiConductorVector",
    "category": "type",
    "text": "a data structure for working with multiconductor datasets\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Base.isapprox-Tuple{PowerSystems.MultiConductorValue,PowerSystems.MultiConductorValue}",
    "page": "PowerSystems",
    "title": "Base.isapprox",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Base.setindex!-Union{Tuple{T}, Tuple{MultiConductorMatrix{T},T,Int64,Int64}} where T",
    "page": "PowerSystems",
    "title": "Base.setindex!",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Base.setindex!-Union{Tuple{T}, Tuple{MultiConductorVector{T},T,Int64}} where T",
    "page": "PowerSystems",
    "title": "Base.setindex!",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#InfrastructureModels._value2string-Tuple{PowerSystems.MultiConductorValue,Int64}",
    "page": "PowerSystems",
    "title": "InfrastructureModels._value2string",
    "category": "method",
    "text": "converts a MultiConductorValue value to a string in summary\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._check_conductors-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._check_conductors",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._check_cost_functions-Tuple{Any,Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems._check_cost_functions",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._check_reference_buses-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._check_reference_buses",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._dfs-NTuple{4,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems._dfs",
    "category": "method",
    "text": "performs DFS on a graph\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._make_mixed_units-Tuple{Dict{String,Any},Real}",
    "page": "PowerSystems",
    "title": "PowerSystems._make_mixed_units",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._make_multiconductor-Tuple{Dict{String,Any},Real}",
    "page": "PowerSystems",
    "title": "PowerSystems._make_multiconductor",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._make_per_unit-Tuple{Dict{String,Any},Real}",
    "page": "PowerSystems",
    "title": "PowerSystems._make_per_unit",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._propagate_topology_status-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._propagate_topology_status",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._rescale_cost_model-Tuple{Dict{String,Any},Real}",
    "page": "PowerSystems",
    "title": "PowerSystems._rescale_cost_model",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._select_largest_component-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._select_largest_component",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._simplify_pwl_cost",
    "page": "PowerSystems",
    "title": "PowerSystems._simplify_pwl_cost",
    "category": "function",
    "text": "checks the slope of each segment in a pwl function, simplifies the function if the slope changes is below a tolerance\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.add_dcline_costs-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.add_dcline_costs",
    "category": "method",
    "text": "adds dcline costs, if gen costs exist\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.add_section_data!-Tuple{Dict,Dict,AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.add_section_data!",
    "category": "method",
    "text": "add_section_data!(pti_data, section_data, section)\n\nAdds section_data::Dict, which contains all parsed elements of a PTI file section given by section, into the parent pti_data::Dict\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.apply_func-Tuple{Dict{String,Any},String,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.apply_func",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.bus_gen_lookup-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.bus_gen_lookup",
    "category": "method",
    "text": "builds a lookup list of what generators are connected to a given bus\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.bus_load_lookup-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.bus_load_lookup",
    "category": "method",
    "text": "builds a lookup list of what loads are connected to a given bus\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.bus_shunt_lookup-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.bus_shunt_lookup",
    "category": "method",
    "text": "builds a lookup list of what shunts are connected to a given bus\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.calc_branch_t-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.calc_branch_t",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.calc_branch_y-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.calc_branch_y",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.calc_theta_delta_bounds-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.calc_theta_delta_bounds",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_branch_directions-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_branch_directions",
    "category": "method",
    "text": "checks that all parallel branches have the same orientation\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_branch_loops-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_branch_loops",
    "category": "method",
    "text": "checks that all branches connect two distinct buses\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_bus_types-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_bus_types",
    "category": "method",
    "text": "checks bus types are consistent with generator connections, if not, fixes them\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_component_refrence_bus-Tuple{Any,Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_component_refrence_bus",
    "category": "method",
    "text": "checks that a connected component has a reference bus, if not, adds one\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_conductors-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_conductors",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_connectivity-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_connectivity",
    "category": "method",
    "text": "checks that all buses are unique and other components link to valid buses\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_cost_functions-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_cost_functions",
    "category": "method",
    "text": "throws warnings if cost functions are malformed\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_current_limits-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_current_limits",
    "category": "method",
    "text": "checks that each branch has a reasonable current rating-a, if not computes one\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_dcline_limits-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_dcline_limits",
    "category": "method",
    "text": "checks that parameters for dc lines are reasonable\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_keys-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_keys",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_network_data-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_network_data",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_reference_buses-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_reference_buses",
    "category": "method",
    "text": "checks that each connected components has a reference bus, if not, adds one\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_thermal_limits-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_thermal_limits",
    "category": "method",
    "text": "checks that each branch has a reasonable thermal rating-a, if not computes one\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_transformer_parameters-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_transformer_parameters",
    "category": "method",
    "text": "checks that each branch has a reasonable transformer parameters\n\nthis is important because setting tap == 0.0 leads to NaN computations, which are hard to @debug\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_voltage_angle_differences",
    "page": "PowerSystems",
    "title": "PowerSystems.check_voltage_angle_differences",
    "category": "function",
    "text": "checks that voltage angle differences are within 90 deg., if not tightens\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_voltage_setpoints-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_voltage_setpoints",
    "category": "method",
    "text": "throws warnings if generator and dc line voltage setpoints are not consistent with the bus voltage setpoint\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.connected_components-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.connected_components",
    "category": "method",
    "text": "computes the connected components of the network graph returns a set of sets of bus ids, each set is a connected component\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.create_starbus_from_transformer-Tuple{Dict,Dict}",
    "page": "PowerSystems",
    "title": "PowerSystems.create_starbus_from_transformer",
    "category": "method",
    "text": "create_starbus(pm_data, transformer)\n\nCreates a starbus from a given three-winding transformer. \"sourceid\" is given by `[\"busi\", \"name\", \"I\", \"J\", \"K\", \"CKT\"]` where \"bus_i\" and \"name\" are the modified names for the starbus, and \"I\", \"J\", \"K\" and \"CKT\" come from the originating transformer, in the PSS(R)E transformer specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.export_cost_data-Tuple{IO,Dict{Int64,Dict},String}",
    "page": "PowerSystems",
    "title": "PowerSystems.export_cost_data",
    "category": "method",
    "text": "Export cost data\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.export_extra_data",
    "page": "PowerSystems",
    "title": "PowerSystems.export_extra_data",
    "category": "function",
    "text": "Export fields of a component type\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.export_matpower-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.export_matpower",
    "category": "method",
    "text": "Export power network data in the matpower format\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.export_matpower-Tuple{IO,Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.export_matpower",
    "category": "method",
    "text": "Export power network data in the matpower format\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.find_max_bus_id-Tuple{Dict}",
    "page": "PowerSystems",
    "title": "PowerSystems.find_max_bus_id",
    "category": "method",
    "text": "find_max_bus_id(pm_data)\n\nReturns the maximum bus id in pm_data\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_bus_value-Tuple{Any,Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.get_bus_value",
    "category": "method",
    "text": "get_bus_value(bus_i, field, pm_data)\n\nReturns the value of field of bus_i from the PowerModels data. Requires \"bus\" Dict to already be populated.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_default",
    "page": "PowerSystems",
    "title": "PowerSystems.get_default",
    "category": "function",
    "text": "Get a default value for dict entry \n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_line_elements-Tuple{AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.get_line_elements",
    "category": "method",
    "text": "get_line_elements(line)\n\nUses regular expressions to extract all separate data elements from a line of a PTI file and populate them into an Array{String}. Comments, typically indicated at the end of a line with a \'/\' character, are also extracted separately, and Array{Array{String}, String} is returned.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_pti_dtypes-Tuple{AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.get_pti_dtypes",
    "category": "method",
    "text": "get_pti_dtypes(field_name)\n\nReturns OrderedDict of data types for PTI file section given by field_name, as enumerated by PSS/E Program Operation Manual\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_pti_sections-Tuple{}",
    "page": "PowerSystems",
    "title": "PowerSystems.get_pti_sections",
    "category": "method",
    "text": "get_pti_sections()\n\nReturns Array of the names of the sections, in the order that they appear in a PTI file, v33+\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.import_remaining!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.import_remaining!",
    "category": "method",
    "text": "Imports remaining keys from data_in into data_out, excluding keys in exclude\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.init_bus!-Tuple{Dict{String,Any},Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems.init_bus!",
    "category": "method",
    "text": "init_bus!(bus, id)\n\nInitializes a bus of id id with default values given in the PSS(R)E specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_mixed_units-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_mixed_units",
    "category": "method",
    "text": "Transforms network data into mixed-units (inverse of per-unit)\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_multiconductor-Tuple{Dict{String,Any},Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_multiconductor",
    "category": "method",
    "text": "Transforms single-conductor network data into multi-conductor data\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_per_unit-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_per_unit",
    "category": "method",
    "text": "Transforms network data into per-unit\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.matpower_to_powermodels-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.matpower_to_powermodels",
    "category": "method",
    "text": "Converts a Matpower dict into a PowerModels dict\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.merge_bus_name_data-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.merge_bus_name_data",
    "category": "method",
    "text": "merges bus name data into buses, if names exist\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.merge_generator_cost_data-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.merge_generator_cost_data",
    "category": "method",
    "text": "merges generator cost functions into generator data, if costs exist\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.merge_generic_data-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.merge_generic_data",
    "category": "method",
    "text": "merges Matpower tables based on the table extension syntax\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.mp2pm_branch-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.mp2pm_branch",
    "category": "method",
    "text": "sets all branch transformer taps to 1.0, to simplify branch models\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.mp2pm_dcline-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.mp2pm_dcline",
    "category": "method",
    "text": "adds pmin and pmax values at to and from buses\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_json-Tuple{IO}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_json",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_json-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_json",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_line_element!-Tuple{Dict,Array,AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_line_element!",
    "category": "method",
    "text": "parse_line_element!(data, elements, section)\n\nParses a single \"line\" of data elements from a PTI file, as given by elements which is an array of the line, typically split at ,. Elements are parsed into data types given by section and saved into data::Dict\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matpower-Tuple{Union{IO, String}}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matpower",
    "category": "method",
    "text": "Parses the matpwer data from either a filename or an IO object\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matpower_file-Tuple{IO}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matpower_file",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matpower_file-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matpower_file",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matpower_string-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matpower_string",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_psse-Tuple{Dict}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_psse",
    "category": "method",
    "text": "parse_psse(pti_data)\n\nConverts PSS(R)E-style data parsed from a PTI raw file, passed by pti_data into a format suitable for use internally in PowerModels. Imports all remaining data from the PTI file if import_all is true (Default: false).\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_psse-Tuple{IO}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_psse",
    "category": "method",
    "text": "Parses directly from iostream\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_psse-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_psse",
    "category": "method",
    "text": "Parses directly from file\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_pti-Tuple{IO}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_pti",
    "category": "method",
    "text": "parse_pti(io::IO)\n\nReads PTI data in io::IO, returning a Dict of the data parsed into the proper types.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_pti-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_pti",
    "category": "method",
    "text": "parse_pti(filename::String)\n\nOpen PTI raw file given by filename, returning a Dict of the data parsed into the proper types.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_pti_data-Tuple{String,Array}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_pti_data",
    "category": "method",
    "text": "parse_pti_data(data_string, sections)\n\nParse a PTI raw file into a Dict, given the data_string of the file and a list of the sections in the PTI file (typically given by default by get_pti_sections().\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.print_summary-Tuple{Union{Dict{String,Any}, String}}",
    "page": "PowerSystems",
    "title": "PowerSystems.print_summary",
    "category": "method",
    "text": "prints the text summary for a data file or dictionary to STDOUT\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.propagate_topology_status-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.propagate_topology_status",
    "category": "method",
    "text": "finds active network buses and branches that are not necessary for the computation and sets their status to off.\n\nWorks on a PowerModels data dict, so that a it can be used without a GenericPowerModel object\n\nWarning: this implementation has quadratic complexity, in the worst case\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_branch!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_branch!",
    "category": "method",
    "text": "psse2pm_branch!(pm_data, pti_data)\n\nParses PSS(R)E-style Branch data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"J\", \"CKT\"] in PSS(R)E Branch specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_bus!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_bus!",
    "category": "method",
    "text": "psse2pm_bus!(pm_data, pti_data)\n\nParses PSS(R)E-style Bus data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"NAME\"] in PSS(R)E Bus specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_dcline!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_dcline!",
    "category": "method",
    "text": "psse2pm_dcline!(pm_data, pti_data)\n\nParses PSS(R)E-style Two-Terminal and VSC DC Lines data into a PowerModels compatible Dict structure by first converting them to a simple DC Line Model. For Two-Terminal DC lines, \"sourceid\" is given by [\"IPR\", \"IPI\", \"NAME\"] in the PSS(R)E Two-Terminal DC specification. For Voltage Source Converters, \"sourceid\" is given by [\"IBUS1\", \"IBUS2\", \"NAME\"], where \"IBUS1\" is \"IBUS\" of the first converter bus, and \"IBUS2\" is the \"IBUS\" of the second converter bus, in the PSS(R)E Voltage Source Converter specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_generator!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_generator!",
    "category": "method",
    "text": "psse2pm_generator!(pm_data, pti_data)\n\nParses PSS(R)E-style Generator data in a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] in PSS(R)E Generator specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_load!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_load!",
    "category": "method",
    "text": "psse2pm_load!(pm_data, pti_data)\n\nParses PSS(R)E-style Load data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] in the PSS(R)E Load specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_shunt!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_shunt!",
    "category": "method",
    "text": "psse2pm_shunt!(pm_data, pti_data)\n\nParses PSS(R)E-style Fixed and Switched Shunt data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] for Fixed Shunts, and [\"I\", \"SWREM\"] for Switched Shunts, as given by the PSS(R)E Fixed and Switched Shunts specifications.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_transformer!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_transformer!",
    "category": "method",
    "text": "psse2pm_transformer!(pm_data, pti_data)\n\nParses PSS(R)E-style Transformer data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"J\", \"K\", \"CKT\", \"winding\"], where \"winding\" is 0 if transformer is two-winding, and 1, 2, or 3 for three-winding, and the remaining keys are defined in the PSS(R)E Transformer specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.row_to_dict-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.row_to_dict",
    "category": "method",
    "text": "takes a row from a matrix and assigns the values names\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.row_to_typed_dict-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.row_to_typed_dict",
    "category": "method",
    "text": "takes a row from a matrix and assigns the values names and types\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.select_largest_component-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.select_largest_component",
    "category": "method",
    "text": "determines the largest connected component of the network and turns everything else off\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.split_loads_shunts-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.split_loads_shunts",
    "category": "method",
    "text": "split_loads_shunts(data)\n\nSeperates Loads and Shunts in data under separate \"load\" and \"shunt\" keys in the PowerModels data format. Includes references to originating bus via \"loadbus\" and \"shuntbus\" keys, respectively.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.standardize_cost_terms-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.standardize_cost_terms",
    "category": "method",
    "text": "ensures all polynomial costs functions have at least three terms\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.summary-Tuple{IO,Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.summary",
    "category": "method",
    "text": "prints the text summary for a data dictionary to IO\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.summary-Tuple{IO,String}",
    "page": "PowerSystems",
    "title": "PowerSystems.summary",
    "category": "method",
    "text": "prints the text summary for a data file to IO\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.update_data-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.update_data",
    "category": "method",
    "text": "recursively applies new_data to data, overwriting information\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Internal-1",
    "page": "PowerSystems",
    "title": "Internal",
    "category": "section",
    "text": "Modules = [PowerSystems]\nPublic = false"
},

]}
