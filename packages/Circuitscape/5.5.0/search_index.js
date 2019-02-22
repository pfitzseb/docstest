var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Circuitscape-1",
    "page": "Readme",
    "title": "Circuitscape",
    "category": "section",
    "text": "Linux and OSX: (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Windows: (Image: Build status)Users of Circuitscape on Julia v0.6 should now shift to Julia 1.0. Circuitscape on Julia v0.6 will no longer be supported.Circuitscape is an open-source program that uses circuit theory to model connectivity  in heterogeneous landscapes. Its most common applications include modeling movement and gene flow  of plants and animals, as well as identifying areas important for connectivity conservation. Circuitscape has now been rewritten in Julia for better performance and scalability. Julia is modern open-source language for scientific computing. This work is based on the original Circuitscape project by Brad McRae, Viral B. Shah  and Tanmay Mohapatra. "
},

{
    "location": "#The-New-Circuitscape-Modern,-Fast-and-Flexible-1",
    "page": "Readme",
    "title": "The New Circuitscape - Modern, Fast and Flexible",
    "category": "section",
    "text": "The new Circuitscape is built entirely in the Julia language, a new programming language for technical computing. Julia is built from the ground up to be fast. As such, this offers a number of advantages over the previous version, and these are detailed below."
},

{
    "location": "#Faster-and-More-Scalable-1",
    "page": "Readme",
    "title": "Faster and More Scalable",
    "category": "section",
    "text": "We benchmarked Circuitscape.jl (v0.1.0) with the Python version (v4.0.5) to obtain the following results. We started up Circuitscape with 16 parallel processes, and used benchmark problems from the standard Circuitscape  benchmark suite.<img src=\"/benchmark/benchmark.png\" width=650 height=450>These benchmarks were run on a Linux (Ubuntu) server machine with the following specs: Name: Intel(R) Xeon(R) Silver 4114 CPU \nClock Speed: 2.20GHz\nNumber of cores: 20  \nRAM: 384 GBFrom the benchmark, we see that the new version is upto 4x faster on 16 processes. However, the best performing bar in the chart is  Julia-CHOLMOD, which is a new feature introduced."
},

{
    "location": "#New-Solver-Mode-CHOLMOD-1",
    "page": "Readme",
    "title": "New Solver Mode - CHOLMOD",
    "category": "section",
    "text": "Julia-CHOLMOD is a new solver mode used in the new Circuitscape. It performs a cholesky decomposition on the graph  constructed, and performs a batched back substitution to compute the voltages. It plugs into the  CHOLMOD library,  which is part of the SuiteSparse collection of high performance sparse  matrix algorithms.To use the this new mode, include a line in your Circuitscape  INI file:solver = cholmodThe cholesky decomposition is a direct solver method, unlike the algebraic multigrid method used by default in both the old and the new version. The advantage with this new direct method is that it can be much faster than the iterative solution, within a particular problem size. Word of caution: The cholesky decomposition is not practical to use beyond a certain problem size because of phenomenon called fill-in, which results in loss of sparsity and large memory consumption."
},

{
    "location": "#Parallel,-everywhere-1",
    "page": "Readme",
    "title": "Parallel, everywhere",
    "category": "section",
    "text": "The old Circuitscape had limited support for parallelism, which worked on Mac and Linux, but didn\'t work on Windows. Julia as a programming language is built from the ground up to be parallel, and as a result the new Circuitscape natively supports parallelism on all three platforms."
},

{
    "location": "#Single-Precision-(Experimental)-1",
    "page": "Readme",
    "title": "Single Precision (Experimental)",
    "category": "section",
    "text": "The new Circuitscape introduces the ability to run problems in single precision as opposed to the standard double precision.Single precision usually takes much less memory, but trades off against solution accuracy. Use this new feature by including a line in your config file:precision = single"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You will need to install Julia on your system first.  \nOnce you start Julia, install Circuitscape by: julia> using Pkg\njulia> Pkg.add(\"Circuitscape\")If you want the latest development version, you can additionally do: julia> Pkg.checkout(\"Circuitscape\")Check if all the tests are passing by doing the following:julia> Pkg.test(\"Circuitscape\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The current interface to Circuitscape is through the Julia terminal. julia> using Circuitscape # loads the package into your environment\njulia> compute(\"path/to/config/file.ini\")"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "If you have encounter any issues or would like to ask a question, please file  a report here. Contributions in the form of  pull requests are also welcome! "
},

{
    "location": "autodocs/#Circuitscape.compute",
    "page": "Docstrings",
    "title": "Circuitscape.compute",
    "category": "function",
    "text": "compute(path::String)\n\nCall the compute function on the configuration file.\n\nInputs:\n\npath::String - Path to configuration file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.construct_local_node_map",
    "page": "Docstrings",
    "title": "Circuitscape.construct_local_node_map",
    "category": "function",
    "text": "Construct nodemap specific to a connected component\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.get_num_pairs",
    "page": "Docstrings",
    "title": "Circuitscape.get_num_pairs",
    "category": "function",
    "text": "Returns all possible pairs to solve.\n\nInput:\n\nccs::Vector{Vector{Int}} - vector of connected components\nfp::Vector{Int} - vector of focal points \nexclude_pairs::Vector{Tuple{Int,Int}} - vector of point pairs (tuples) to exclude \n\nOutput: \n\nn - total number of pairs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.laplacian",
    "page": "Docstrings",
    "title": "Circuitscape.laplacian",
    "category": "function",
    "text": "Calculate laplacian of the adjacency matrix of a graph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.model_problem",
    "page": "Docstrings",
    "title": "Circuitscape.model_problem",
    "category": "function",
    "text": "Define model circuitscape problem - helps in tests\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.network_pairwise",
    "page": "Docstrings",
    "title": "Circuitscape.network_pairwise",
    "category": "function",
    "text": "Primary driver for network pairwise. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.single_ground_all_pairs",
    "page": "Docstrings",
    "title": "Circuitscape.single_ground_all_pairs",
    "category": "function",
    "text": "Core kernel of Circuitscape - used to solve several pairs\n\nInput:\n\ndata::GraphData\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Circuitscape.AAGRIDCircuitscape.ADVANCEDCircuitscape.ALLTOONECircuitscape.AMGCircuitscape.AdvancedDataCircuitscape.CHOLMODCircuitscape.CRITICALCircuitscape.CholmodNodeCircuitscape.CircuitscapeCircuitscape.ComponentDataCircuitscape.CumulativeCircuitscape.DEBUGCircuitscape.DOUBLECircuitscape.DataCircuitscape.FILE_HDR_AAGRIDCircuitscape.FILE_HDR_GZIPCircuitscape.FILE_HDR_INCL_PAIRSCircuitscape.FILE_HDR_INCL_PAIRS_AAGRIDCircuitscape.FILE_HDR_NPYCircuitscape.FILE_TYPE_AAGRIDCircuitscape.FILE_TYPE_INCL_PAIRSCircuitscape.FILE_TYPE_INCL_PAIRS_AAGRIDCircuitscape.FILE_TYPE_NPYCircuitscape.FILE_TYPE_TXTLISTCircuitscape.FullGraphCircuitscape.GraphDataCircuitscape.INFOCircuitscape.IncludeExcludePairsCircuitscape.NONECircuitscape.NetworkDataCircuitscape.NetworkFlagsCircuitscape.ONETOALLCircuitscape.OutputCircuitscape.OutputFlagsCircuitscape.PAIRS_AAGRIDCircuitscape.PAIRS_LISTCircuitscape.PAIRWISECircuitscape.RASTERCircuitscape.RasDataCircuitscape.RasterFlagsCircuitscape.RasterMetaCircuitscape.SINGLECircuitscape.ShortcutCircuitscape.TRUELISTCircuitscape.TXTLISTCircuitscape.WARNINGCircuitscape._append_name_to_node_currentsCircuitscape._ascii_grid_read_headerCircuitscape._ascii_grid_readerCircuitscape._cholmod_solver_pathCircuitscape._computeCircuitscape._construct_local_nodemapCircuitscape._convert_to_3colCircuitscape._create_current_mapsCircuitscape._create_voltage_mapCircuitscape._get_branch_currentsCircuitscape._get_branch_currents_posnegCircuitscape._get_node_currents_posnegCircuitscape._get_sources_and_groundsCircuitscape._guess_file_typeCircuitscape._pt_file_no_polygons_pathCircuitscape._pt_file_polygons_pathCircuitscape.accum_currents!Circuitscape.accum_voltages!Circuitscape.accumulate_current_mapsCircuitscape.advanced_kernelCircuitscape.alloc_mapCircuitscape.amg_solver_pathCircuitscape.calc_num_pairsCircuitscape.calculate_cum_current_mapCircuitscape.calculate_max_current_mapCircuitscape.compare_aagridCircuitscape.compare_all_outputCircuitscape.compare_branchCircuitscape.compare_nodeCircuitscape.computeCircuitscape.compute_3colCircuitscape.compute_advanced_dataCircuitscape.compute_cholmodCircuitscape.compute_graph_dataCircuitscape.compute_graph_data_no_polygonsCircuitscape.compute_graph_data_polygonsCircuitscape.compute_parallelCircuitscape.compute_singleCircuitscape.cond_avgCircuitscape.construct_cholesky_factorCircuitscape.construct_graphCircuitscape.construct_local_node_mapCircuitscape.construct_node_mapCircuitscape.count_upperCircuitscape.create_new_polymapCircuitscape.csinfoCircuitscape.cswarnCircuitscape.dropnonzeros!Circuitscape.evalCircuitscape.f_in_place!Circuitscape.fmtCircuitscape.generate_exclude_pairsCircuitscape.generate_listsCircuitscape.get_compCircuitscape.get_network_compCircuitscape.get_network_dataCircuitscape.get_network_flagsCircuitscape.get_node_currentsCircuitscape.get_num_pairsCircuitscape.get_num_pairs_shortcutCircuitscape.get_output_flagsCircuitscape.get_raster_flagsCircuitscape.get_sources_and_groundsCircuitscape.includeCircuitscape.init_configCircuitscape.initialize_cum_mapsCircuitscape.initialize_cum_vectorsCircuitscape.laplacianCircuitscape.list_of_filesCircuitscape.load_graphCircuitscape.load_raster_dataCircuitscape.loggingCircuitscape.model_problemCircuitscape.multiple_solverCircuitscape.myaddprocsCircuitscape.mycsidCircuitscape.network_advancedCircuitscape.network_pairwiseCircuitscape.onetoall_kernelCircuitscape.parse_configCircuitscape.postprocessCircuitscape.postprocess_cum_curmap!Circuitscape.process_grid!Circuitscape.prune_points!Circuitscape.prune_strengths!Circuitscape.raster_advancedCircuitscape.raster_one_to_allCircuitscape.raster_pairwiseCircuitscape.read_aagridCircuitscape.read_branch_currentsCircuitscape.read_cellmapCircuitscape.read_focal_pointsCircuitscape.read_included_pairsCircuitscape.read_node_currentsCircuitscape.read_point_mapCircuitscape.read_point_strengthsCircuitscape.read_polymapCircuitscape.read_source_and_ground_mapsCircuitscape.relabel!Circuitscape.res_avgCircuitscape.resolve_conflictsCircuitscape.runtestsCircuitscape.save_resistancesCircuitscape.single_ground_all_pairsCircuitscape.smash_repeats!Circuitscape.solve_linear_systemCircuitscape.sum_off_diagCircuitscape.test_problemCircuitscape.ui_interfaceCircuitscape.update!Circuitscape.update_logging!Circuitscape.update_shortcut_resistances!Circuitscape.update_voltmatrix!Circuitscape.weird_avgCircuitscape.weirder_avgCircuitscape.write_aagridCircuitscape.write_configCircuitscape.write_cum_mapsCircuitscape.write_cur_mapsCircuitscape.write_currentsCircuitscape.write_volt_mapsCircuitscape.write_voltages"
},

]}
