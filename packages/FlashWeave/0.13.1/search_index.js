var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FlashWeave-1",
    "page": "Readme",
    "title": "FlashWeave",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: codecov) (Image: License: GPL v3)FlashWeave predicts ecological interactions between microbes from large-scale compositional abundance data (i.e. OTU tables constructed from sequencing data) through statistical co-occurrence or co-abundance. It reports direct associations, with adjustment for bystander effects and other confounders, and can furthermore integrate environmental or technical factors into the analysis of microbial systems."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install Julia, please follow instructions on https://github.com/JuliaLang/julia. The preferred way is to obtain a binary from https://julialang.org/downloads/. Make sure you install Julia 1.0, the version currently supported by FlashWeave.In an interactive Julia session, you can then install FlashWeave after typing ] via(v1.0) pkg> add FlashWeave\n# to run tests: (v1.0) pkg> test FlashWeave"
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "OTU tables can be provided in several formats: delimited formats (\".csv\", \".tsv\"), BIOM 1.0 (\".biom\") or the high-performance formats BIOM 2.0 and JLD2 (\".jld2\"). Meta data should be provided as delimited format (except for JLD2, see below). See the test/data/HMP_SRA_gut directory for examples. IMPORTANT NOTE: For delimited and JLD2 formats, FlashWeave treats rows of the table as observations (i.e. samples) and columns as variables (i.e. OTUs or meta variables), consistent with the majority of statistical and machine-learning applications, but in contrast to several other microbiome analysis frameworks. Behavior can be switched with the transposed=true flag.To learn an interaction network, you can dojulia> using FlashWeave # this has some pre-compilation delay the first time it\'s called, subsequent imports are fast\n\njulia> data_path = \"/my/example/data.tsv\" # or .csv, .biom\njulia> meta_data_path = \"/my/example/meta_data.tsv\"\njulia> netw_results = learn_network(data_path, meta_data_path, sensitive=true, heterogeneous=false)\n\n<< summary statistics of the learned network >>\n\njulia> G = graph(netw_results) # weighted graph representing interactions + weights\n\njulia> # for JLD2, you can provide keys:\njulia> # data_path = \"/my/example/data.jld2\"\njulia> # netw_results = learn_network(data_path, otu_data_key=\"otu_data\", otu_header_key=\"otu_header\", meta_data_key=\"meta_data\", meta_header_key=\"meta_header\", sensitive=true, heterogeneous=false)Results can currently be saved in JLD2, fast for large networks, or as traditional Graph Modelling Language (\".gml\") or edgelist (\".edgelist\") formats:julia> save_network(\"/my/example/network_output.jld2\", netw_results)\njulia> ## or: save_network(\"/my/example/network_output.gml\", netw_results)For output of additional information (such as discarding sets, if available) in separate files you can specify the \"detailed\" flag:julia> save_network(\"/my/example/network_output.edgelist\", netw_results, detailed=true)\njulia> # for .jld2, additional information is always saved if availableA convenient loading function is available:julia> netw_results = load_network(\"/my/example/network_output.jld2\")\n ```\n\nTo get more information on a function, use `?`:\njulia julia> ?learn_network\n## Performance tips ##\n\nDepending on your data, make sure to chose the appropriate flags (```heterogeneous=true``` for multi-habitat or -protocol data sets with ideally at least thousands of samples; ```sensitive=false``` for faster, but more coarse-grained associations) to achieve optimal runtime. If FlashWeave should get stuck on a small fraction of nodes with large neighborhoods, try increasing the convergence criterion (```conv```). To learn a network in parallel, see the section below.\n\nNote, that this package is optimized for large-scale data sets. On small data (hundreds of samples and OTUs) its speed advantages can be negated by JIT-compilation overhead.\n\n## Parallel computing ##\n\nFlashWeave leverages Julia\'s built-in [parallel infrastructure](https://docs.julialang.org/en/stable/manual/parallel-computing/). In the most simple case, you can start julia with several workers\nbash $ julia -p 4 # for 4 workers\nor manually add workers at the beginning of an interactive session\njulia julia> using Distributed; addprocs(4) # can be skipped if julia was started with -p julia> @everywhere using FlashWeave julia> learn_network(...\nand network learning will be parallelized in a shared-memory, multi-process fashion.\n\nIf you want to run FlashWeave remotely on a computing cluster, a ```ClusterManager``` can be used (for example from the [ClusterManagers.jl](https://github.com/JuliaParallel/ClusterManagers.jl) package, installable via ```]``` and then ```add ClusterManagers```). Details differ depending on the setup (queueing system, resource requirements etc.), but a simple example for a Sun Grid Engine (SGE) system would be:\njulia julia> using ClusterManagers julia> addprocsqrsh(20) # 20 remote workers julia> ## for more fine-grained control: addprocs(QRSHManager(20, \"<your queue>\"), qsubenv=\"<your environment>\", params=Dict(:res_list=>\"<requested resources>\"))julia> # orjulia> addprocssge(20) julia> ## addprocssge(5, queue=\"<your queue>\", qsubenv=\"<your environment>\", reslist=\"<requested resources>\")\nPlease refer to the [ClusterManagers.jl documentation](https://github.com/JuliaParallel/ClusterManagers.jl) for further details.\n\n## Citing ##\n\nTo cite FlashWeave, please refer to our [preprint on bioRxiv](https://www.biorxiv.org/content/early/2018/08/13/390195):\nTackmann, Janko, Joao Frederico Matias Rodrigues, and Christian von Mering. \"Rapid inference of direct interactions in large-scale ecological networks from heterogeneous microbial sequencing data.\" bioRxiv (2018): 390195.\nExample BibTeX entry:\n@article {tackmann2018rapid, 	author = {Tackmann, Janko and Rodrigues, Joao Frederico Matias and von Mering, Christian}, 	title = {Rapid inference of direct interactions in large-scale ecological networks from heterogeneous microbial sequencing data}, 	year = {2018}, 	doi = {10.1101/390195}, 	publisher = {Cold Spring Harbor Laboratory}, 	URL = {https://www.biorxiv.org/content/early/2018/08/13/390195}, 	eprint = {https://www.biorxiv.org/content/early/2018/08/13/390195.full.pdf}, 	journal = {bioRxiv} } ```"
},

{
    "location": "#Versioning-and-API-1",
    "page": "Readme",
    "title": "Versioning and API",
    "category": "section",
    "text": "FlashWeave follows semantic versioning. Stability guarantees are only provided for exported functions (official API), anything else should be considered untested and subject to change."
},

{
    "location": "autodocs/#FlashWeave.StackChannel",
    "page": "Docstrings",
    "title": "FlashWeave.StackChannel",
    "category": "type",
    "text": "StackChannel{T}(sz::Int)\n\nConstructs a Channel with an internal buffer that can hold a maximum of sz objects of type T. put! calls on a full StackChannel block until an object is removed with take!. Other constructors:\n\nChannel(Inf): equivalent to Channel{Any}(typemax(Int))\nChannel(sz): equivalent to Channel{Any}(sz)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.benjamini_hochberg!",
    "page": "Docstrings",
    "title": "FlashWeave.benjamini_hochberg!",
    "category": "function",
    "text": "Accelerated version of that found in MultipleTesting.jl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.bind",
    "page": "Docstrings",
    "title": "FlashWeave.bind",
    "category": "function",
    "text": "bind(chnl::StackChannel, task::Task)\n\nAssociate the lifetime of chnl with a task. Channel chnl is automatically closed when the task terminates. Any uncaught exception in the task is propagated to all waiters on chnl. The chnl object can be explicitly closed independent of task termination. Terminating tasks have no effect on already closed Channel objects. When a StackChannel is bound to multiple tasks, the first task to terminate will close the StackChannel. When multiple StackChannels are bound to the same task, termination of the task will close all of the bound StackChannels.\n\nExamples\n\njulia> c = StackChannel(0);\njulia> task = @async foreach(i->put!(c, i), 1:4);\njulia> bind(c,task);\njulia> for i in c\n           @show i\n       end;\ni = 1\ni = 2\ni = 3\ni = 4\njulia> isopen(c)\nfalse\n\njulia> c = StackChannel(0);\njulia> task = @async (put!(c,1);error(\"foo\"));\njulia> bind(c,task);\njulia> take!(c)\n1\njulia> put!(c,1);\nERROR: foo\nStacktrace:\n[...]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.channeled_tasks",
    "page": "Docstrings",
    "title": "FlashWeave.channeled_tasks",
    "category": "function",
    "text": "channeled_tasks(n::Int, funcs...; ctypes=fill(Any,n), csizes=fill(0,n))\n\nA convenience method to create n StackChannels and bind them to tasks started from the provided functions in a single call. Each func must accept n arguments which are the created StackChannels. StackChannel types and sizes may be specified via keyword arguments ctypes and csizes respectively. If unspecified, all StackChannels are of type Channel{Any}(0). Returns a tuple, (Array{StackChannel}, Array{Task}), of the created StackChannels and tasks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.graph",
    "page": "Docstrings",
    "title": "FlashWeave.graph",
    "category": "function",
    "text": "graph(result::FWResult{T}) -> SimpleWeightedGraph{Int, Float64}\n\nExtract the underlying weighted graph from network results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.isready",
    "page": "Docstrings",
    "title": "FlashWeave.isready",
    "category": "function",
    "text": "isready(c::StackChannel)\n\nDetermine whether a Channel has a value stored to it. Returns immediately, does not block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.learn_network",
    "page": "Docstrings",
    "title": "FlashWeave.learn_network",
    "category": "function",
    "text": "learn_network(data_path::AbstractString, meta_data_path::AbstractString) -> FWResult{Int}\n\nWorks like learn_network(data::AbstractArray{ElType}), but takes file paths an OTU table and optionally a meta data table as an input (instead of a data matrix).\n\ndata_path - path to a file storing an OTU count table (and in the case of JLD2 possibly meta data)\nmeta_data_path - optional path to a file with meta data\n*_key  - HDF5 keys to access data sets with OTU counts, Meta variables and variable names in a JLD2 file, if a data item is absent the corresponding key should be \'nothing\'. More help under \'?load_data\'\nverbose - print progress information\ntransposed - if true, rows of data are variables and columns are samples\nkwargs... - additional keyword arguments passed to learn_network(data::AbstractArray{ElType})\n\n\n\n\n\nlearn_network(data::AbstractArray{<:Real}) -> FWResult{Int}\n\nLearn an interaction network from a data table (including OTUs and optionally meta variables).\n\ndata - data table with information on OTU counts and (optionally) meta variables\nheader - names of variable columns in data\nmeta_mask - true/false mask indicating which variables are meta variables\n\nAlgorithmic parameters:\n\nheterogeneous - enable heterogeneous mode for multi-habitat or -protocol data with at least thousands of samples (FlashWeaveHE)\nsensitive - enable fine-grained associations (FlashWeave-S, FlashWeaveHE-S),  sensitive=false results in the fast modes FlashWeave-F or FlashWeaveHE-F\nmax_k - maximum size of conditioning sets, high values can strongly increase runtime. max_k=0 results in no conditioning (univariate mode)\nalpha - threshold used to determine statistical significance\nconv - convergence threshold, i.e. if conv=0.01 assume convergence if the number of edges increased by only 1% after 100% more runtime (checked in intervals)\nfeed_forward - enable feed-forward heuristic\nmax_tests - maximum number of conditional tests that should be performed on a variable pair before association is assumed\nhps - reliability criterion for statistical tests when sensitive=false\nFDR - perform False Discovery Rate correction (Benjamini-Hochberg method) on pairwise associations\nn_obs_min - don\'t compute associations between variables having less reliable samples (i.e. non-zero if heterogeneous=true) than this number. -1: automatically choose a threshold.\ntime_limit - if feed-forward heuristic is active, determines the interval (seconds) at which neighborhood information is updated\n\nGeneral parameters:\n\nnormalize - automatically choose and perform data normalization (based on sensitive and heterogeneous)\ntrack_rejections - store for each discarded edge, which variable set lead to its exclusion (can be memory intense for large networks)\nverbose - print progress information\ntransposed - if true, rows of data are variables and columns are samples\nprec - precision in bits to use for calculations (16, 32, 64 or 128)\nmake_sparse - use a sparse data representation (should be left at true in almost all cases)\nupdate_interval - if verbose=true, determines the interval (seconds) at which network stat updates are printed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.load_data",
    "page": "Docstrings",
    "title": "FlashWeave.load_data",
    "category": "function",
    "text": "load_data(data_path::AbstractString, meta_path::AbstractString) -> (AbstractMatrix{<:Real}, Vector{String}, AbstractMatrix{<:Real}, Vector{String})\n\nLoad tables with OTU count and optionally meta data from disc. Available formats are \'.tsv\', \'.csv\', \'.biom\' and \'.jld2\'.\n\ndata_path - path to a file storing an OTU count table\nmeta_data_path - optional path to a file with meta variable information\n*_key - HDF5 keys to access data sets with OTU counts, Meta variables and variable names in a JLD2 file, if a data item is absent the corresponding key should be \'nothing\'\ntransposed - if true, rows of data are variables and columns are samples\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.load_network",
    "page": "Docstrings",
    "title": "FlashWeave.load_network",
    "category": "function",
    "text": "load_network(net_path::AbstractString) -> FWResult{Int}\n\nLoad network results from disk. Available formats are \'.tsv\', \'.csv\', \'.gml\' and \'.jld2\'. For GML, only files with structure identical to save_network(\'network.gml\') output can currently be loaded. Run parameters are only available when loading from JLD2.\n\nnet_path - path from which to load the network results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.mutual_information",
    "page": "Docstrings",
    "title": "FlashWeave.mutual_information",
    "category": "function",
    "text": "IMPORTANT NOTE: returns mutual information * number of observations! (avoids repeated calculation later)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.normalize_data",
    "page": "Docstrings",
    "title": "FlashWeave.normalize_data",
    "category": "function",
    "text": "normalize_data(data::AbstractMatrix{<:Real}) -> AbstractMatrix OR (AbstractMatrix{<:Real}, Vector{String})\n\nNormalize data using various forms of clr transform and discretization. This should only be used manually when experimenting with different normalization techniques.\n\ndata - data table with information on OTU counts and (optionally) meta variables\nheader - names of variable-column s in data\nmeta_mask - true/false mask indicating which variables are meta variables\ntest_name - name of a FlashWeave-specific statistical test mode, the appropriate normalization method will be chosen automatically\nnorm_mode - identifier of a valid normalization mode (\'clr-adapt\', \'clr-nonzero\', \'clr-nonzero-binned\', \'pres-abs\', \'tss\', \'tss-nonzero-binned\')\nfilter_data - whether to remove samples and variables without information from data\nverbose - print progress information\nprec - precision in bits to use for calculations (16, 32, 64 or 128)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.parameters",
    "page": "Docstrings",
    "title": "FlashWeave.parameters",
    "category": "function",
    "text": "parameters(result::FWResult{T}) -> Dict{Symbol, Any}\n\nExtract the used parameters from network results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FlashWeave.save_network",
    "page": "Docstrings",
    "title": "FlashWeave.save_network",
    "category": "function",
    "text": "save_network(net_path::AbstractString, net_result::FWResult) -> Void\n\nSave network results to disk. Available formats are \'.tsv\', \'.csv\', \'.gml\' and \'.jld2\'.\n\nnet_path - output path for the network\nnet_result - network results object that should be saved\ndetailed - output additional information, such as discarding sets, if available\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FlashWeave.AbstractContTestFlashWeave.AbstractCorTestFlashWeave.AbstractNzFlashWeave.AbstractTestFlashWeave.ContTest2DFlashWeave.ContTest3DFlashWeave.FWResultFlashWeave.FlashWeaveFlashWeave.FzTestFlashWeave.FzTestCondFlashWeave.HitonStateFlashWeave.InvalidStateExceptionFlashWeave.IteratorSizeFlashWeave.LGLFlashWeave.LGLResultFlashWeave.MiTestFlashWeave.MiTestCondFlashWeave.NbrStatDictFlashWeave.NoNzFlashWeave.NzFlashWeave.PairCorObjFlashWeave.PairMeanObjFlashWeave.RejDictFlashWeave.SimpleWeightedGraph_nodemaxFlashWeave.StackChannelFlashWeave.TestResultFlashWeave.ZMapperFlashWeave.adaptive_clr!FlashWeave.adaptive_pseudocountFlashWeave.adaptive_pseudocount!FlashWeave.add_pwresults_to_matrix!FlashWeave.adjust_dfFlashWeave.benjamini_hochberg!FlashWeave.bindFlashWeave.candidate_in_blackwhite_lists!FlashWeave.channeled_tasksFlashWeave.check_candidate!FlashWeave.check_channel_stateFlashWeave.check_convert_sparseFlashWeave.check_dataFlashWeave.close_chnl_on_taskdoneFlashWeave.closed_exceptionFlashWeave.clr!FlashWeave.clrnormFlashWeave.condensed_stats_to_dictFlashWeave.contingency_tableFlashWeave.contingency_table!FlashWeave.convergedFlashWeave.cor_subset!FlashWeave.discretizeFlashWeave.discretize_metaFlashWeave.discretize_meta!FlashWeave.discretize_nzFlashWeave.elimination_phaseFlashWeave.evalFlashWeave.fetch_bufferedFlashWeave.fisher_z_transformFlashWeave.fz_pvalFlashWeave.get_levelsFlashWeave.graphFlashWeave.hasrowidsFlashWeave.hiton_backendFlashWeave.includeFlashWeave.inf_weightFlashWeave.infer_conditional_neighborsFlashWeave.init_candidatesFlashWeave.init_hiton_pcFlashWeave.interleaved_backendFlashWeave.interleaved_workerFlashWeave.interleaving_phaseFlashWeave.is_zero_adjustedFlashWeave.isbiomFlashWeave.iscontinuousFlashWeave.iscontinuousnormFlashWeave.isdefaultkeyFlashWeave.isdiscreteFlashWeave.isdlmFlashWeave.isedgelistFlashWeave.isgmlFlashWeave.isjldFlashWeave.isopenFlashWeave.isreadyFlashWeave.issigFlashWeave.iter_apply_sparse_rows!FlashWeave.iterateFlashWeave.last_conv_num_edgesFlashWeave.last_conv_timeFlashWeave.learn_graph_structureFlashWeave.learn_networkFlashWeave.level_map!FlashWeave.load_biomFlashWeave.load_biom_hdf5FlashWeave.load_biom_jsonFlashWeave.load_dataFlashWeave.load_dlmFlashWeave.load_jldFlashWeave.load_networkFlashWeave.make_chunksFlashWeave.make_final_HitonStateFlashWeave.make_stopped_HitonStateFlashWeave.make_symmetric_graphFlashWeave.make_test_objectFlashWeave.make_weightsFlashWeave.make_zmap_expressionFlashWeave.mapslices_sparse_nzFlashWeave.maxweightFlashWeave.meta_variable_maskFlashWeave.mi_pvalFlashWeave.mode_stringFlashWeave.mutual_informationFlashWeave.n_availFlashWeave.needs_nz_viewFlashWeave.normalize_dataFlashWeave.notify_errorFlashWeave.nz_adjust_cont_tabFlashWeave.oddsratioFlashWeave.order_pairFlashWeave.parametersFlashWeave.parse_gml_fieldFlashWeave.pcorFlashWeave.pcor_recFlashWeave.prepare_elimination_phaseFlashWeave.prepare_interleaving_phaseFlashWeave.prepare_lglFlashWeave.prepare_nzdataFlashWeave.prepare_univar_resultsFlashWeave.preprocess_dataFlashWeave.preprocess_data_defaultFlashWeave.presabs_norm!FlashWeave.print_network_statsFlashWeave.pseudocount_vars_from_sampleFlashWeave.put_bufferedFlashWeave.pw_univar_kernelFlashWeave.pw_univar_kernel!FlashWeave.pw_univar_neighborsFlashWeave.read_edgelistFlashWeave.read_gmlFlashWeave.rejectionsFlashWeave.reset!FlashWeave.rownorm!FlashWeave.save_networkFlashWeave.save_rejectionsFlashWeave.save_unfinished_variable_infoFlashWeave.showFlashWeave.si_HITON_PCFlashWeave.signed_weightFlashWeave.sparse_ctab_backend!FlashWeave.stop_reachedFlashWeave.sufficient_powerFlashWeave.take_bufferedFlashWeave.testFlashWeave.test_subsetsFlashWeave.unchecked_statisticsFlashWeave.unfinished_statesFlashWeave.update!FlashWeave.update_PC_dict!FlashWeave.update_sig_result!FlashWeave.valid_data_formatsFlashWeave.valid_net_formatsFlashWeave.wait_implFlashWeave.work_chunkerFlashWeave.workers_all_localFlashWeave.write_edgelistFlashWeave.write_gml"
},

]}
