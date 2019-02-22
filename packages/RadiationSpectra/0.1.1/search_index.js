var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RadiationSpectra.jl-1",
    "page": "Readme",
    "title": "RadiationSpectra.jl",
    "category": "section",
    "text": "(Image: Documentation for stable version) (Image: Documentation for development version) (Image: License) (Image: Travis Build Status) (Image: Appveyor Build Status) (Image: Codecov)RadiationSpectra.jl provides tools to analyse Radiation Spectra in Julia."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Documentation for development version\nDocumentation for development version"
},

{
    "location": "autodocs/#RadiationSpectra.AbstractFitFunction",
    "page": "Docstrings",
    "title": "RadiationSpectra.AbstractFitFunction",
    "category": "type",
    "text": "AbstractFitFunction{T, N}\n\nAbstract type for an N-dimensional fit of eltype T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RadiationSpectra.FitFunction",
    "page": "Docstrings",
    "title": "RadiationSpectra.FitFunction",
    "category": "type",
    "text": "FitFunction{T} <: AbstractFitFunction{T, 1}\n\nFields:\n\nmodel::Function: Function of the fit model.\nfitrange::Tuple{Union{Missing, T}, Union{Missing, T}}: Range on which the fit is performed.\nparameters::Union{Vector{Missing}, Vector{T}}: Fitted parameters.\nuncertainties::Union{Vector{Missing}, Vector{T}}: Uncertainties of the fitted parameters.\ninitial_parameters::Union{Vector{Missing}, Vector{T}}: Initial parameters.\nconfidence_level::Union{Missing, T}: Confidence level, used to determine the uncertainties.\n\nPlotting:\n\nA plot recipes exists for this struct: plot(fit::FitFunction{T}; npoints=501)\n\nPlots the model function over the fitrange with 501-points. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#RadiationSpectra.calibrate_spectrum",
    "page": "Docstrings",
    "title": "RadiationSpectra.calibrate_spectrum",
    "category": "function",
    "text": "calibrate_spectrum(h_uncal::Histogram, photon_lines::Array{Real, 1}; <keyword arguments>)::Histogram\n\nReturns a calibrated histogram.\n\nKeywords\n\nsigma::Real = 2.0: The expected sigma of a peak in the spectrum. In units of bins. \nthreshold::Real = 10.0: Threshold for being identified as a peak in the deconvoluted spectrum. A single bin is identified as a peak when its weight exceeds the threshold and the previous bin was not identified as an peak.\nmin_n_peaks::Int = 0: If the number of found peaks is smaller than min_n_peaks the functions lowers the parameter threshold until enough peaks are found.\nα::Real = 0.005:  = 0.5%. Acceptance level in the comparison of the peak position ratios in the peak indentification step. When the difference between the ratio of two found peak positions and the ratio of two photon lines (photon_lines) is smaller than α, the found peaks are identified as the two photon lines.\n\nCalibrate the spectrum h_uncal. This is done by:\n\nfinding peaks through devoncolution\nidentifying them through comparison of the ratios of their positions with the ratios of the known lines\nfitting all identified peaks (with a gaussian plus first order polynomial) to get their position more precisely\nperforme a linear fit (offset forced to 0) of these positions vs the true positions (lines) to get the calibration constant \n\n\n\n\n\n"
},

{
    "location": "autodocs/#RadiationSpectra.gauss",
    "page": "Docstrings",
    "title": "RadiationSpectra.gauss",
    "category": "function",
    "text": "gauss(x::T, p::Vector{T})::T\n\nA Gaussian with 3 parameters:\n\np[1]: Scale/Amplitude\np[2]: σ\np[3]: μ\n\n\n\n\n\ngauss(x::Vector{T}, p::Vector{T})::Vector{T}\n\nMaps x to gauss(x::T, p::Vector{T})::T\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RadiationSpectra.get_example_spectrum",
    "page": "Docstrings",
    "title": "RadiationSpectra.get_example_spectrum",
    "category": "function",
    "text": "get_example_spectrum()::Histogram\n\nReturns an uncalibrated radiation spectrum for testing and demonstrating purpose.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RadiationSpectra.llhfit!",
    "page": "Docstrings",
    "title": "RadiationSpectra.llhfit!",
    "category": "function",
    "text": " llhfit!(fit::FitFunction, h::Histogram)::Nothing\n\nPerforms a log-likelihood fit of the model function fit.model and the initial parameters fit.initial_parameters on the histogram h in the range fit.fitrange. The determined parameters are stored in fit.parameters.\n\nThe likelihood for each individual bin is the Poission distribution.\n\nThere are no uncertainty estimations for this fit yet.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RadiationSpectra.lsqfit!",
    "page": "Docstrings",
    "title": "RadiationSpectra.lsqfit!",
    "category": "function",
    "text": "lsqfit!(fit::FitFunction, h::Histogram; estimate_uncertainties=false)::Nothing\n\nPerforms a Least Square Fit with the model fit.model and the initial parameters fit.initial_parameters on the histogram h in the range fit.fitrange. The determined parameters are stored in fit.parameters and the corresponding uncertainties in fit.uncertainties for the given confidence level fit.confidence_level.\n\nThe uncertainties are marginalizations of the covariance matrix determined by the LSQFit.jl package. They are only calculated if the keywort estimate_uncertainties is set to true.\n\nSee LsqFit.jl for more detail.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RadiationSpectra.peakfinder",
    "page": "Docstrings",
    "title": "RadiationSpectra.peakfinder",
    "category": "function",
    "text": "peakfinder(h::Histogram; <keyword arguments>)::Tuple{Histogram, Array{Float64, 1}}\n\nReturns a deconvoluted spectrum and an array of peak positions.\n\nKeywords\n\nsigma::Real=2.0: The expected sigma of a peak in the spectrum. In units of bins. \nthreshold::Real=10.0: Threshold for being identified as a peak in the deconvoluted spectrum. A single bin is identified as a peak when its weight exceeds the threshold and the previous bin was not identified as an peak.\nbackgroundRemove::Bool=true\ndeconIterations::Int=3\nmarkov::Bool=true\naverWindow::Int=3\n\nSource\n\nThis function is basically a copy of TSpectrum::SearchHighRes from ROOT.\n\nM.A. Mariscotti: A method for identification of peaks in the presence of background and its application to spectrum analysis. NIM 50 (1967), 309-320.\nM. Morhac;, J. Kliman, V. Matouoek, M. Veselsky, I. Turzo.:Identification of peaks in multidimensional coincidence gamma-ray spectra. NIM, A443 (2000) 108-125.\nZ.K. Silagadze, A new algorithm for automatic photopeak searches. NIM A 376 (1996), 451.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RadiationSpectra.AbstractFitFunctionRadiationSpectra.FitFunctionRadiationSpectra.RadiationSpectraRadiationSpectra.calculate_ratiosRadiationSpectra.calibrate_spectrumRadiationSpectra.determine_calibration_constant_through_peak_fittingRadiationSpectra.determine_calibration_constant_through_peak_ratiosRadiationSpectra.evalRadiationSpectra.gaussRadiationSpectra.gauss_plus_first_order_polynomRadiationSpectra.get_example_spectrumRadiationSpectra.includeRadiationSpectra.linear_function_fixed_offset_at_zeroRadiationSpectra.llhfitRadiationSpectra.llhfit!RadiationSpectra.lsqfit!RadiationSpectra.peakfinder"
},

]}
