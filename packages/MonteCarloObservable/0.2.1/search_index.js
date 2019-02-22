var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: logo)(Image: ) ![travis][travis-img] ![appveyor][appveyor-img] ![codecov][codecov-img][travis-img]: https://img.shields.io/travis/crstnbr/MonteCarloObservable.jl/master.svg?label=Linux [appveyor-img]: https://img.shields.io/appveyor/ci/crstnbr/montecarloobservable-jl/master.svg?label=Windows [codecov-img]: https://img.shields.io/codecov/c/github/crstnbr/MonteCarloObservable.jl/master.svg?label=codecovAn implementation of an observable for Markov Chain Monte Carlo simulations (like the currently out-dated MonteCarlo.jl).During a Markov chain Monte Carlo simulation a Markov walker (after thermalization) walks through configuration space according to the equilibrium distribution. Typically, one measures observables along the Markov path, records the results, and in the end averages the measurements. MonteCarloObservable.jl provides all the necessary tools for conveniently conducting these types of measurements, including estimation of one-sigma error bars through binning or jackknife analysis."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In the REPL, switch to pkg mode (by pressing ]) and enteradd MonteCarloObservableAlternatively, you can install the package perusing Pkg\nPkg.add(\"MonteCarloObservable\")"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Look at the documentation for more information."
},

{
    "location": "autodocs/#MonteCarloObservable.@diskobs",
    "page": "Docstrings",
    "title": "MonteCarloObservable.@diskobs",
    "category": "macro",
    "text": "Convenience macro for generating a \"disk observable\" (inmemory=false) from a vector of measurements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.@obs",
    "page": "Docstrings",
    "title": "MonteCarloObservable.@obs",
    "category": "macro",
    "text": "Convenience macro for generating an Observable from a vector of measurements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.Jackknife",
    "page": "Docstrings",
    "title": "MonteCarloObservable.Jackknife",
    "category": "module",
    "text": "Jackknife errors for (non-linear) functions of uncertain data, i.e. g(<a>,<b>,...)\n\nBased on https://github.com/ararslan/Jackknife.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.MonteCarloObservable",
    "page": "Docstrings",
    "title": "MonteCarloObservable.MonteCarloObservable",
    "category": "module",
    "text": "A package for handling observables in a Markov Chain Monte Carlo simulation.\n\nSee http://github.com/crstnbr/MonteCarloObservable.jl for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.Observable",
    "page": "Docstrings",
    "title": "MonteCarloObservable.Observable",
    "category": "type",
    "text": "A Markov Chain Monte Carlo observable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.R_function",
    "page": "Docstrings",
    "title": "MonteCarloObservable.R_function",
    "category": "function",
    "text": "Groups datapoints in bins of varying size bs. Returns the used binsizes bss, the error coefficient function R(bss) (Eq. 3.20), and  the averaged error coefficients <R>(bss). The function should feature a plateau,  i.e. R(bs_p) ~ R(bs) for bs >= bs_p. (Fig. 3.3)\n\nOptional keyword min_nbins. Only bin sizes used that lead to at least min_nbins bins.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.R_value",
    "page": "Docstrings",
    "title": "MonteCarloObservable.R_value",
    "category": "function",
    "text": "Groups datapoints in bins of fixed binsize and returns error coefficient R. (Eq. 3.20)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.Rplateaufinder",
    "page": "Docstrings",
    "title": "MonteCarloObservable.Rplateaufinder",
    "category": "function",
    "text": "Estimates the error coefficient R by considering <R>(bss) (averaged R values).\n\nReturns estimated start of plateau (bin size), estimate for R, and convergence (boolean).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.TimeSeriesSerializer",
    "page": "Docstrings",
    "title": "MonteCarloObservable.TimeSeriesSerializer",
    "category": "type",
    "text": "Thin wrapper type used in JLD.writeas to dump the contained vector as a higher-dimensional matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable._init!",
    "page": "Docstrings",
    "title": "MonteCarloObservable._init!",
    "category": "function",
    "text": "_init!(obs)\n\nInitialize non-external fields of observable obs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.add!",
    "page": "Docstrings",
    "title": "MonteCarloObservable.add!",
    "category": "function",
    "text": "Add measurements to an observable.\n\nadd!(obs::Observable{T}, measurement::T; verbose=false)\nadd!(obs::Observable{T}, measurements::AbstractVector{T}; verbose=false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.binning_error",
    "page": "Docstrings",
    "title": "MonteCarloObservable.binning_error",
    "category": "function",
    "text": "binning_error(X)\n\nEstimate of the one-sigma error of the time series\'s mean. Respects correlations between measurements through binning analysis.\n\nNote that this is not the same as Base.std(X), not even for uncorrelated measurements.\n\nFor more details, see MonteCarloObservable.Rplateaufinder.\n\n\n\n\n\nbinning_error(X, binsize)\n\nEstimate of the one-sigma error of the time series\'s mean. Respect correlations between measurements through binning analysis,  using the given binsize (i.e. assuming independence of bins, Eq. 3.18 basically).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.binning_error_naive",
    "page": "Docstrings",
    "title": "MonteCarloObservable.binning_error_naive",
    "category": "function",
    "text": "binning_error_naive(X, min_nbins=50)\n\nEstimate of the one-sigma error of the observable\'s mean. Respects correlations between measurements through binning analysis.\n\nStrategy: just take largest R value considering an upper limit for bin size (min_nbins)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.binning_error_with_convergence",
    "page": "Docstrings",
    "title": "MonteCarloObservable.binning_error_with_convergence",
    "category": "function",
    "text": "Returns one sigma error and convergence flag (boolean).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.eltype",
    "page": "Docstrings",
    "title": "Base.eltype",
    "category": "function",
    "text": "eltype(obs::Observable{T})\n\nReturns the type T of a measurment of the observable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.error",
    "page": "Docstrings",
    "title": "Base.error",
    "category": "function",
    "text": "Estimate of the one-sigma error of the observable\'s mean. Respects correlations between measurements through binning analysis.\n\nNote that this is not the same as Base.std(timeseries(obs)), not even for uncorrelated measurements.\n\nSee also mean(obs).\n\n\n\n\n\nerror(g::Function, x::AbstractMatrix)\n\nCompute the jackknife estimate of the one sigma error of g(<a>,<b>,...), where g is given as a function that computes a point estimate (scalar) when passed a matrix x. Columns of x  are time series of the random variables.\n\nFor more details, see also `leaveoneout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.error_naive",
    "page": "Docstrings",
    "title": "MonteCarloObservable.error_naive",
    "category": "function",
    "text": "Estimate of the one-sigma error of the observable\'s mean. Respects correlations between measurements through binning analysis.\n\nStrategy: just take largest R value considering an upper limit for bin size (min_nbins)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.error_with_convergence",
    "page": "Docstrings",
    "title": "MonteCarloObservable.error_with_convergence",
    "category": "function",
    "text": "Returns one sigma error and convergence flag (don\'t trust it!).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.export_error",
    "page": "Docstrings",
    "title": "MonteCarloObservable.export_error",
    "category": "function",
    "text": "export_error(obs::Observable{T}[, filename::AbstractString, group::AbstractString;])\n\nExport one-sigma error estimate and convergence flag.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.export_result",
    "page": "Docstrings",
    "title": "MonteCarloObservable.export_result",
    "category": "function",
    "text": "export_results(obs::Observable{T}[, filename::AbstractString, group::AbstractString; timeseries::Bool=false])\n\nExport result for given observable nicely to JLD.\n\nWill export name, number of measurements, estimates for mean and one-sigma error. Optionally (timeseries==true) exports the full time series as well.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.fileext",
    "page": "Docstrings",
    "title": "MonteCarloObservable.fileext",
    "category": "function",
    "text": "fileext(filepath::AbstractString)\n\nExtracts lowercase file extension from given filepath. Extension is defined as \"everything after the last dot\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.flush",
    "page": "Docstrings",
    "title": "Base.flush",
    "category": "function",
    "text": "flush(obs::Observable)\n\nThis is the crucial function if inmemory(obs) == false. It updates the time series on disk. It is called from add! everytime the alloc limit is reached (overflow).\n\nYou can call the function manually to save an intermediate state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.getindex",
    "page": "Docstrings",
    "title": "Base.getindex",
    "category": "function",
    "text": "getindex(obs::Observable{T}, args...)\n\nGet an element of the time series of the observable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.inmemory",
    "page": "Docstrings",
    "title": "MonteCarloObservable.inmemory",
    "category": "function",
    "text": "Checks wether the observable is kept in memory (vs. on disk).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.isconverged",
    "page": "Docstrings",
    "title": "MonteCarloObservable.isconverged",
    "category": "function",
    "text": "isconverged(X)\n\nChecks if the estimation of the one sigma error is converged.\n\nReturns true once the mean R value is converged up to 0.1% accuracy. This corresponds to convergence of the error itself up to ~3% (sqrt).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isempty",
    "page": "Docstrings",
    "title": "Base.isempty",
    "category": "function",
    "text": "Returns true if the observable hasn\'t been measured yet.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.isinmemory",
    "page": "Docstrings",
    "title": "MonteCarloObservable.isinmemory",
    "category": "function",
    "text": "Checks wether the observable is kept in memory (vs. on disk).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.iswithinerrorbars",
    "page": "Docstrings",
    "title": "MonteCarloObservable.iswithinerrorbars",
    "category": "function",
    "text": "iswithinerrorbars(a, b, δ[, print=false])\n\nChecks whether numbers a and b are equal up to given error δ. Will print x ≈ y + k·δ for print=true.\n\nIs equivalent to isapprox(a,b,atol=δ,rtol=zero(b)).\n\n\n\n\n\niswithinerrorbars(A::AbstractArray{T<:Number}, B::AbstractArray{T<:Number}, Δ::AbstractArray{<:Real}[, print=false])\n\nElementwise check whether A and B are equal up to given real error matrix Δ. Will print A ≈ B + K.*Δ for print=true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.iterate",
    "page": "Docstrings",
    "title": "Base.iterate",
    "category": "function",
    "text": "iterate(iter [, state]) -> Tuple{Array{Complex{Float64},1},Int64}\n\nImplementation of Julia\'s iterator interface\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.jackknife_error",
    "page": "Docstrings",
    "title": "MonteCarloObservable.jackknife_error",
    "category": "function",
    "text": "jackknife_error(g::Function, obs1, ob2, ...)\n\nComputes the jackknife one sigma error of g(<obs1>, <obs2>, ...) by performing  a \"leave-one-out\" analysis.\n\nThe function g(x) must take one matrix argument x, whose columns correspond  to the time series of the observables, and produce a scalar (point estimate).\n\nExample:\n\ng(x) = @views mean(x[:,1])^2 - mean(x[:,2].^2) followed by jackknife_error(g, obs1, obs2). Here x[:,1] is basically timeseries(obs1) and x[:,2] is timeseries(obs2).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.jltype",
    "page": "Docstrings",
    "title": "MonteCarloObservable.jltype",
    "category": "function",
    "text": "Basically a limited but much more secure version of eval(Meta.parse(s)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "function",
    "text": "Length of observable\'s time series.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.listobs",
    "page": "Docstrings",
    "title": "MonteCarloObservable.listobs",
    "category": "function",
    "text": "List all observables in a given file and HDF5 group.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.loadobs",
    "page": "Docstrings",
    "title": "MonteCarloObservable.loadobs",
    "category": "function",
    "text": "loadobs(filename::AbstractString, entryname::AbstractString)\n\nLoad complete representation of an observable from JLD file.\n\nSee also saveobs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.loadobs_frommemory",
    "page": "Docstrings",
    "title": "MonteCarloObservable.loadobs_frommemory",
    "category": "function",
    "text": "loadobs_frommemory(filename::AbstractString, group::AbstractString)\n\nCreate an observable based on a memory dump (inmemory==false).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Statistics.mean",
    "page": "Docstrings",
    "title": "Statistics.mean",
    "category": "function",
    "text": "Mean of the observable\'s time series.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.name",
    "page": "Docstrings",
    "title": "MonteCarloObservable.name",
    "category": "function",
    "text": "Name of the Observable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.ndims",
    "page": "Docstrings",
    "title": "Base.ndims",
    "category": "function",
    "text": "Number of dimensions of the observable (of one measurement).\n\nEquivalent to ndims(T).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.push!",
    "page": "Docstrings",
    "title": "Base.push!",
    "category": "function",
    "text": "Add measurements to an observable.\n\npush!(obs::Observable{T}, measurement::T; verbose=false)\npush!(obs::Observable{T}, measurements::AbstractArray{T}; verbose=false)\n\nNote that because of internal preallocation this isn\'t really a push.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.rename",
    "page": "Docstrings",
    "title": "MonteCarloObservable.rename",
    "category": "function",
    "text": "rename(obs::Observable, name)\n\nRenames the observable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.reset!",
    "page": "Docstrings",
    "title": "MonteCarloObservable.reset!",
    "category": "function",
    "text": "reset!(obs::Observable{T})\n\nResets all measurement information in obs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.rmobs",
    "page": "Docstrings",
    "title": "MonteCarloObservable.rmobs",
    "category": "function",
    "text": "Remove an observable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.saveobs",
    "page": "Docstrings",
    "title": "MonteCarloObservable.saveobs",
    "category": "function",
    "text": "saveobs(obs::Observable{T}[, filename::AbstractString, entryname::AbstractString])\n\nSaves complete representation of the observable to JLD file.\n\nDefault filename is \"Observables.jld\" and default entryname is name(obs).\n\nSee also loadobs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.size",
    "page": "Docstrings",
    "title": "Base.size",
    "category": "function",
    "text": "Size of the observable (of one measurement).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Statistics.std",
    "page": "Docstrings",
    "title": "Statistics.std",
    "category": "function",
    "text": "Standard deviation of the observable\'s time series (assuming uncorrelated data).\n\nSee also mean(obs), var(obs), and error(obs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.tau",
    "page": "Docstrings",
    "title": "MonteCarloObservable.tau",
    "category": "function",
    "text": "Integrated autocorrelation time (obtained by binning analysis).\n\nSee also error(obs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.timeseries",
    "page": "Docstrings",
    "title": "MonteCarloObservable.timeseries",
    "category": "function",
    "text": "Returns the time series of the observable.\n\nIf isinmemory(obs) == false it will read the time series from disk.\n\nSee also getindex and view.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.timeseries_frommemory",
    "page": "Docstrings",
    "title": "MonteCarloObservable.timeseries_frommemory",
    "category": "function",
    "text": "timeseries_frommemory(filename::AbstractString, group::AbstractString)\n\nLoad time series from memory dump (inmemory==false) in HDF5/JLD file.\n\nWill load and concatenate time series chunks. Output will be a vector of measurements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MonteCarloObservable.timeseries_frommemory_flat",
    "page": "Docstrings",
    "title": "MonteCarloObservable.timeseries_frommemory_flat",
    "category": "function",
    "text": "timeseries_frommemory_flat(filename::AbstractString, group::AbstractString)\n\nLoad time series from memory dump (inmemory==false) in HDF5/JLD file.\n\nWill load and concatenate time series chunks. Output will be higher-dimensional array whose last dimension corresponds to Monte Carlo time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Statistics.var",
    "page": "Docstrings",
    "title": "Statistics.var",
    "category": "function",
    "text": "Variance of the observable\'s time series (assuming uncorrelated data).\n\nSee also mean(obs), std(obs), and error(obs).\n\n\n\n\n\nvar(g::Function, x::AbstractMatrix)\n\nCompute the jackknife estimate of the variance of g(<a>,<b>,...), where g is given as a function that computes a point estimate (scalar) when passed a matrix x. Columns of x  are time series of the random variables.\n\nFor more details, see also `leaveoneout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.view",
    "page": "Docstrings",
    "title": "Base.view",
    "category": "function",
    "text": "view(obs::Observable{T}, args...)\n\nGet, if possible, a view into the time series of the observable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MonteCarloObservable.@diskobsMonteCarloObservable.@obsMonteCarloObservable.DiskObservableMonteCarloObservable.JackknifeMonteCarloObservable.MonteCarloObservableMonteCarloObservable.ObservableMonteCarloObservable.R_functionMonteCarloObservable.R_valueMonteCarloObservable.RplateaufinderMonteCarloObservable.SUPPORTED_TYPESMonteCarloObservable.TimeSeriesSerializerMonteCarloObservable._add!MonteCarloObservable._frommemoryMonteCarloObservable._getindex_ts_chunkMonteCarloObservable._init!MonteCarloObservable._println_bodyMonteCarloObservable._println_headerMonteCarloObservable.add!MonteCarloObservable.binning_errorMonteCarloObservable.binning_error_from_RMonteCarloObservable.binning_error_naiveMonteCarloObservable.binning_error_with_convergenceMonteCarloObservable.eltypeMonteCarloObservable.errorMonteCarloObservable.error_frommemoryMonteCarloObservable.error_naiveMonteCarloObservable.error_with_convergenceMonteCarloObservable.evalMonteCarloObservable.export_errorMonteCarloObservable.export_resultMonteCarloObservable.fileextMonteCarloObservable.flushMonteCarloObservable.getfromMonteCarloObservable.getindexMonteCarloObservable.getindex_fromfileMonteCarloObservable.getindexrange_fromfileMonteCarloObservable.includeMonteCarloObservable.inmemoryMonteCarloObservable.isconvergedMonteCarloObservable.isemptyMonteCarloObservable.isinmemoryMonteCarloObservable.iswithinerrorbarsMonteCarloObservable.iterateMonteCarloObservable.jackknife_errorMonteCarloObservable.jltypeMonteCarloObservable.lengthMonteCarloObservable.listobsMonteCarloObservable.loadobsMonteCarloObservable.loadobs_frommemoryMonteCarloObservable.meanMonteCarloObservable.mean_frommemoryMonteCarloObservable.nameMonteCarloObservable.ndimsMonteCarloObservable.push!MonteCarloObservable.renameMonteCarloObservable.reset!MonteCarloObservable.rmobsMonteCarloObservable.saveobsMonteCarloObservable.sizeMonteCarloObservable.stdMonteCarloObservable.tauMonteCarloObservable.timeseriesMonteCarloObservable.timeseries_flatMonteCarloObservable.timeseries_frommemoryMonteCarloObservable.timeseries_frommemory_flatMonteCarloObservable.tsMonteCarloObservable.ts_flatMonteCarloObservable.typesMonteCarloObservable.varMonteCarloObservable.view"
},

]}
