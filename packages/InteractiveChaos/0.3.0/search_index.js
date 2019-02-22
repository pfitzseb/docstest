var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InteractiveChaos.jl-1",
    "page": "Readme",
    "title": "InteractiveChaos.jl",
    "category": "section",
    "text": "Interactive applications for the exploration of chaos. Currently in beta.(Image: )"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You have to add InteractiveChaos. Important: InteractiveChaos does not install a plotting backend for you. You have to also install e.g. Makie, GLMakie, etc. for it to actually plot!"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The package InteractiveChaos is hooked up to the DynamicalSystems.jl ecosystem. For usage and documentation please visit the official documentation page. In this README we only offer a very basic rundown.The functionality of InteractiveChaos is contained in individual functions all accepting some instance of a DynamicalSystem. These functions upon call launch interactive applications for exploring chaotic systems. All functions have very detailed documentation strings. The applications themselves use Makie (AbstractPlotting), Interact, Observables, Blink.For example, some of the functions that you can use are:interactive_poincaresos(cds, plane, idxs, complete; kwargs...) : interactive Poincare surface of section.\ninteractive_orbitdiagram(dds, i, p_index, p_min, p_max; kwargs...) : interactive orbit diagram."
},

{
    "location": "autodocs/#InteractiveChaos.bin_with_val",
    "page": "Docstrings",
    "title": "InteractiveChaos.bin_with_val",
    "category": "function",
    "text": "bin_with_val(val, hist)\n\nGet the index of the bin in the histogram(hist) that contains the given value (val).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.change_α",
    "page": "Docstrings",
    "title": "InteractiveChaos.change_α",
    "category": "function",
    "text": "change_α(series_alpha, idxs, α = DEFAULT_α)\n\nGiven a vector of Observables that represent the αs for some series, change the elements with indices given by idxs to the value α. This can be used to hide some series by using a low α value (default). To restore the initial color, use α = 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.controlwindow",
    "page": "Docstrings",
    "title": "InteractiveChaos.controlwindow",
    "category": "function",
    "text": "controlwindow(D, n, Ttr, density, i)\n\nCreate an Electron control window for the orbit diagram interactive application.\n\nreturn n, Ttr, density, i, ▢update, ▢back, ▢reset, α,\n       ⬜pmin, ⬜pmax, ⬜umin, ⬜umax\n\nAll returned values are Observables. Their value corresponds to the one chosen in the Electron window. Items with ▢ are buttons and with ⬜ are the boxes with limits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.get_series_idx",
    "page": "Docstrings",
    "title": "InteractiveChaos.get_series_idx",
    "category": "function",
    "text": "get_series_idx(selected_plot, scene)\n\nGet the index of the selected_plot in scene.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.idxs_in_bin",
    "page": "Docstrings",
    "title": "InteractiveChaos.idxs_in_bin",
    "category": "function",
    "text": "idxs_in_bin(i, hist, val; closed=:left)\n\nGiven the values (val) which are histogramed in hist, find all the indices which correspond to the values in the i-th bin.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.interactive_orbitdiagram",
    "page": "Docstrings",
    "title": "InteractiveChaos.interactive_orbitdiagram",
    "category": "function",
    "text": "interactive_orbitdiagram(ds::DiscreteDynamicalSystem,\n    i::Int, p_index, p_min, p_max;\n    density = 500, u0 = get_state(ds), Ttr = 200, n = 500,\n    parname = \"p\"\n)\n\nOpen an interactive application for exploring orbit diagrams (ODs) of discrete systems. The functionality works for any discrete system.\n\nOnce initialized it opens a Makie plot window and an Electron control window.\n\nInteraction\n\nBy using the Electron window you are able to update all parameters of the OD interactively (like e.g. n or Ttr). You have to press update after changing these parameters. You can even decide which variable to get the OD for, by choosing one of the variables from the wheel (again, press update afterwards).\n\nIn the Makie window you can interactively zoom into the OD. Click and drag with the left mouse button to select a region in the OD. This region is then re-computed at a higher resolution (i.e. we don\'t \"just zoom\").\n\nBack in the Electron window, you can press reset to bring the OD in the original state (and variable). Pressing back will go back through the history of your exploration History is stored when any change happens (besides transparency).\n\nAccessing the data\n\nWhat is plotted on the application window is a true orbit diagram, not a plotting shorthand. This means that all data are obtainable and usable directly. Internally we always scale the orbit diagram to [0,1]² (to allow Float64 precision even though plotting is Float32-based). This however means that it is necessary to transform the data in real scale. This is done through the function scaleod which accepts the 5 arguments returned from the current function:\n\nod, pmin, pmax, umin, umax = interactive_orbitdiagram(...)\nps, us = scaleod(od, pmin, pmax, umin, umax)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.interactive_poincaresos",
    "page": "Docstrings",
    "title": "InteractiveChaos.interactive_poincaresos",
    "category": "function",
    "text": "interactive_poincaresos(cds, plane, idxs, complete; kwargs...)\n\nOpen an interactive application for exploring a Poincaré surface of section (PSOS) of the continuous dynamical system cds. Return an observable containing the latest initial state created by complete, as well as its color.\n\nThe plane can only be the Tuple type accepted by poincaresos, i.e. (i, r) for the ith variable crossing the value r. idxs gives the two indices of the variables to be displayed, since the PSOS plot is always a 2D scatterplot. I.e. idxs = (1, 2) will plot the 1st versus 2nd variable of the PSOS. It follows that plane[1] ∉ idxs must be true.\n\ncomplete is a three-argument function that completes the new initial state during interactive use, see below.\n\nKeyword Arguments\n\ndirection, rootkw : Same use as in poincaresos.\ntfinal : A 2-element tuple for the range of values for the total integration time (chosen interactively).\nTtr : A 2-element tuple for the range of values for the transient integration time (chosen interactively).\nmarkersizes = (-4, -1) : A 2-element tuple for the range of the marker sizes (which scale exponentially: the actual size is 10.0^markersize).\ncolor : A function of the system\'s initial condition, that returns a color to plot the new points with. A random color is chosen by default.\ndiffeq... : Any extra keyword arguments are passed into init of DiffEq.\n\nInteraction\n\nThe application is a standard AbstractPlotting scatterplot, which shows the PSOS of the system, initially using the system\'s u0. Two sliders control the final evolution time and the size of the marker points.\n\nUpon clicking within the bounds of the scatter plot your click is transformed into a new initial condition, which is further evolved and its PSOS is computed and then plotted into the scatter plot.\n\nYour click is transformed into a full D-dimensional initial condition through the function complete. The first two arguments of the function are the positions of the click on the PSOS. The third argument is the value of the variable the PSOS is defined on. To be more exact, this is how the function is called:\n\nx, y = mouseclick; z = plane[2]\nnewstate = complete(x, y, z)\n\nThe complete function can throw an error for ill-conditioned x, y, z. This will be properly handled instead of breaking the application. This newstate is also given to the function color that gets a new color for the new points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.minimal_normalized_od",
    "page": "Docstrings",
    "title": "InteractiveChaos.minimal_normalized_od",
    "category": "function",
    "text": "minimal_normalized_od(integ, i, p_index, pmin, pmax,\n                     density, n, Ttr, u0)\nminimal_normalized_od(integ, i, p_index, pmin, pmax,\n                     density, n, Ttr, u0, xmin, xmax)\n\nCompute and return a minimal and normalized orbit diagram (OD).\n\nAll points are stored in a single vector of Point2f0 to ensure fastest possible plotting. In addition all numbers are scaled to [0, 1]. This allows us to have 64-bit precision while display is only 32-bit!\n\nThe version with xmin, xmax only keeps points with limits between the real xmin, xmax (in the normal units of the dynamical system).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.plot_histogram",
    "page": "Docstrings",
    "title": "InteractiveChaos.plot_histogram",
    "category": "function",
    "text": "plot_histogram(hist, cmap) -> hist_scene, hist_αs\n\nPlot a histogram where the transparency (α) of each bin can be changed and return the scene together with the αs. The bins are colored according to a colormap.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.scaleod",
    "page": "Docstrings",
    "title": "InteractiveChaos.scaleod",
    "category": "function",
    "text": "scaleod(od, pmin, pmax, umin, umax) -> ps, us\n\nGiven the return values of interactive_orbitdiagram, produce orbit diagram data scaled correctly in data units. Return the data as a vector of parameter values and a vector of corresponding variable values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.select_bin",
    "page": "Docstrings",
    "title": "InteractiveChaos.select_bin",
    "category": "function",
    "text": "select_bin(hist_idx, hist, hist_αs, data_αs, data; closed=:left, α = DEFAULT_α)\n\nSetup a selection of a histogram bin and the corresponding series in the scatter plot. See also select_series.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.select_series",
    "page": "Docstrings",
    "title": "InteractiveChaos.select_series",
    "category": "function",
    "text": "select_series(scene, selected_plot, data_αs, hist_αs, data, hist)\n\nSetup selection of a series in a scatter plot and the corresponding histogram. When a point of the scatter plot is clicked, the corresponding series is highlighted (or selected) by changing the transparency of all the other series (and corresponding histogram bins) to a very low value. When the click is outside, the series is deselected, that is all the αs are set back to 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.setup_click",
    "page": "Docstrings",
    "title": "InteractiveChaos.setup_click",
    "category": "function",
    "text": "setup_click(scene, idx=1)\n\nGiven a scene return a Observable that listens to left clicks inside the scene. The idx argument is used to index the tuple (plt, click_idx) which gives the selected plot and the index of the selected element in the plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.subscript",
    "page": "Docstrings",
    "title": "InteractiveChaos.subscript",
    "category": "function",
    "text": "subscript(i::Int)\n\nTransform i to a string that has i as a subscript.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveChaos.trajectory_highlighter",
    "page": "Docstrings",
    "title": "InteractiveChaos.trajectory_highlighter",
    "category": "function",
    "text": "trajectory_highlighter(datasets, vals; kwargs...)\n\nOpen an interactive application for highlighting specific datasets and properties of these datasets. datasets is a vector of anything from DynamicalSystems.jl that supports plot_dataset (currently Dataset or Matrix). Each dataset corresponds to a specific value from vals (a Vector{<:Real}). The value of vals gives each dataset a specific color based on a colormap.\n\nThe application is composed of two scenes: the left scene plots the datasets, while the right scene plots the histogram of the vals. The function returns the two scenes data_scene, hist_scene.\n\nInteraction\n\nClicking on a bin of the histogram plot will \"highlight\" all data whose value belongs in that bin. Here highlighting actually means \"hidding\" (i.e. reducing their alpha value) all other data besides the ones you want to highlight. Clicking on empty space on the histogram plot will reset highlighting.\n\nClicking on a plotted series in the left window will highlight this series as well as the histogram bin that contains its value. Clicking on empty space will reset the highlighting.\n\nKeyword Arguments\n\nnbins = 10, closed = :left : used in producing the histogram.\nα = 0.05 : the alpha value of the hidden data.\nhα = 0.2 : the alpha value of the hidden histogram bins.\ncmap = :viridis : the colormap used.\nhname = \"value\" : name for the histogram axis.\nkwargs... : Anything else is propagated to plot_dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "InteractiveChaos.@SMatrixInteractiveChaos.@SVectorInteractiveChaos.@windowedInteractiveChaos.AbstractDatasetInteractiveChaos.AbstractEmbeddingInteractiveChaos.AbstractNeighborhoodInteractiveChaos.AbstractRecurrenceMatrixInteractiveChaos.CDS_KWARGSInteractiveChaos.ChaosToolsInteractiveChaos.ChebyshevInteractiveChaos.CityblockInteractiveChaos.ContinuousDynamicalSystemInteractiveChaos.CrossRecurrenceMatrixInteractiveChaos.DEFAULT_αInteractiveChaos.DatasetInteractiveChaos.DelayEmbeddingInteractiveChaos.DelayEmbeddingsInteractiveChaos.DiscreteDynamicalSystemInteractiveChaos.DynamicalSystemInteractiveChaos.DynamicalSystemsInteractiveChaos.DynamicalSystemsBaseInteractiveChaos.EuclideanInteractiveChaos.FixedMassNeighborhoodInteractiveChaos.FixedSizeNeighborhoodInteractiveChaos.InteractiveChaosInteractiveChaos.JointRecurrenceMatrixInteractiveChaos.KDTreeInteractiveChaos.MTDelayEmbeddingInteractiveChaos.PlaneCrossingInteractiveChaos.RecurrenceAnalysisInteractiveChaos.RecurrenceMatrixInteractiveChaos.SMatrixInteractiveChaos.SVectorInteractiveChaos.SizeInteractiveChaos.SystemsInteractiveChaos._randomcolorInteractiveChaos.autocorInteractiveChaos.bin_with_valInteractiveChaos.boxcounting_dimInteractiveChaos.broomhead_kingInteractiveChaos.capacity_dimInteractiveChaos.change_αInteractiveChaos.columnsInteractiveChaos.controlwindowInteractiveChaos.coordinatesInteractiveChaos.determinismInteractiveChaos.dimensionInteractiveChaos.distancematrixInteractiveChaos.divergenceInteractiveChaos.dl_averageInteractiveChaos.dl_entropyInteractiveChaos.dl_maxInteractiveChaos.embedInteractiveChaos.estimate_boxsizesInteractiveChaos.estimate_delayInteractiveChaos.estimate_dimensionInteractiveChaos.evalInteractiveChaos.exponential_decay_fitInteractiveChaos.galiInteractiveChaos.genentropyInteractiveChaos.generalized_dimInteractiveChaos.get_deviationsInteractiveChaos.get_series_idxInteractiveChaos.get_stateInteractiveChaos.grayscaleInteractiveChaos.idxs_in_binInteractiveChaos.includeInteractiveChaos.information_dimInteractiveChaos.integratorInteractiveChaos.interactive_orbitdiagramInteractiveChaos.interactive_poincaresosInteractiveChaos.jacobianInteractiveChaos.kaplanyorke_dimInteractiveChaos.lambdamatrixInteractiveChaos.lambdapermsInteractiveChaos.laminarityInteractiveChaos.linear_regionInteractiveChaos.linear_regionsInteractiveChaos.linregInteractiveChaos.lyapunovInteractiveChaos.lyapunovsInteractiveChaos.maximaInteractiveChaos.meanrecurrencetimeInteractiveChaos.min_pairwise_distanceInteractiveChaos.minimaInteractiveChaos.minimal_normalized_odInteractiveChaos.minmaximaInteractiveChaos.mutualinformationInteractiveChaos.neighborhoodInteractiveChaos.nmprtInteractiveChaos.non0histInteractiveChaos.numericallyapunovInteractiveChaos.orbitdiagramInteractiveChaos.orthonormalInteractiveChaos.parallel_integratorInteractiveChaos.periodicorbitsInteractiveChaos.permentropyInteractiveChaos.plot_datasetInteractiveChaos.plot_dataset!InteractiveChaos.plot_datasetsInteractiveChaos.plot_datasets!InteractiveChaos.plot_histogramInteractiveChaos.poincaresosInteractiveChaos.produce_orbitdiagramInteractiveChaos.reconstructInteractiveChaos.recurrenceplotInteractiveChaos.recurrencerateInteractiveChaos.recurrencestructuresInteractiveChaos.reinit!InteractiveChaos.rqaInteractiveChaos.rt_averageInteractiveChaos.rt_entropyInteractiveChaos.rt_maxInteractiveChaos.scaleodInteractiveChaos.select_binInteractiveChaos.select_seriesInteractiveChaos.set_deviations!InteractiveChaos.set_parameter!InteractiveChaos.set_state!InteractiveChaos.setup_clickInteractiveChaos.sorteddistancesInteractiveChaos.step!InteractiveChaos.stochastic_indicatorInteractiveChaos.subscriptInteractiveChaos.tangent_integratorInteractiveChaos.textrecurrenceplotInteractiveChaos.trajectoryInteractiveChaos.trajectory_highlighterInteractiveChaos.trappingtimeInteractiveChaos.trendInteractiveChaos.update_controls!InteractiveChaos.vl_averageInteractiveChaos.vl_entropyInteractiveChaos.vl_max"
},

]}
