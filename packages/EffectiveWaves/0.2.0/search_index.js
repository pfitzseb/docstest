var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Multi-species-effective-waves-1",
    "page": "Readme",
    "title": "Multi-species effective waves",
    "category": "section",
    "text": "A Julia package for calculating, processing and plotting waves travelling in heterogeneous materials. The focus is on calculating the ensemble averaged waves, i.e. the statistical moments, of the waves. You can run Julia on JuliaBox in your browser without installation.At present, the packages calculates effective wavenumbers, wave transimission and wave reflection from random particulate materials in two-dimensions, see arXiv preprint for details on the mathematics, or these notes for the formulas."
},

{
    "location": "#Get-started-1",
    "page": "Readme",
    "title": "Get started",
    "category": "section",
    "text": "Type into Julia:using Pkg\nPkg.clone(\"https://github.com/arturgower/EffectiveWaves.jl.git\")\n\nusing EffectiveWaves"
},

{
    "location": "#Simple-example-1",
    "page": "Readme",
    "title": "Simple example",
    "category": "section",
    "text": "Effective wavenumbers for two species randomly (uniformly) distributed in Glycerol, complete code in examples/demo.jl.#where: ρ = density, r = radius, c = wavespeed, and volfrac = volume fraction\n\nspecies = [\n    Specie(ρ=WaterDistilled.ρ,r=30.e-6, c=WaterDistilled.c, volfrac=0.1),\n    Specie(ρ=Inf, r=100.0e-6, c=2.0, volfrac=0.2)\n]\n# background medium\nbackground = GlycerolCalculate effective wavenumbers:\n# angular frequencies\nωs = LinRange(0.01,1.0,60)*30.0e6\nwavenumbers = wavenumber_low_volfrac(ωs, background, species)\n\nspeeds = ωs./real(wavenumbers)\nattenuations = imag(wavenumbers)For a list of possible materials go to examples/materials.jl."
},

{
    "location": "#More-examples-1",
    "page": "Readme",
    "title": "More examples",
    "category": "section",
    "text": "For more examples and details go to examples/."
},

{
    "location": "#Acknowledgements-and-contributing-1",
    "page": "Readme",
    "title": "Acknowledgements and contributing",
    "category": "section",
    "text": "This library was originally written by Artur L Gower. Please contribute, if nothing else, criticism is welcome, as I am relatively new to Julia."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] Gower AL, Smith MJ, Parnell WJ, Abrahams ID. Reflection from a multi-species material and its transmitted effective wavenumber. Proc. R. Soc. A. 2018 Apr 1;474(2212):20170864.[2] Gower AL, Smith MJ, Parnell WJ, Abrahams ID. Reflection from a multi-species material and its transmitted effective wavenumber. arXiv preprint arXiv:1712.05427. 2017 Dec."
},

{
    "location": "autodocs/#EffectiveWaves.AverageWave",
    "page": "Docstrings",
    "title": "EffectiveWaves.AverageWave",
    "category": "type",
    "text": "A type for the ensemble average scattering coefficients. Here they are discretised in terms of the depth x of the halfspace\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.EffectiveWave",
    "page": "Docstrings",
    "title": "EffectiveWaves.EffectiveWave",
    "category": "type",
    "text": "A type for the effective wave ansatz.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.MatchWave",
    "page": "Docstrings",
    "title": "EffectiveWaves.MatchWave",
    "category": "type",
    "text": "A type for matched waves.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.Medium",
    "page": "Docstrings",
    "title": "EffectiveWaves.Medium",
    "category": "type",
    "text": "A homogenious background material.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.Specie",
    "page": "Docstrings",
    "title": "EffectiveWaves.Specie",
    "category": "type",
    "text": "A circular or spherical specie of particle with homogenious material properties.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.Zn",
    "page": "Docstrings",
    "title": "EffectiveWaves.Zn",
    "category": "function",
    "text": "Returns a ratio used in multiple scattering which reflects the scattering strength of the particles\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.Zn_matrix",
    "page": "Docstrings",
    "title": "EffectiveWaves.Zn_matrix",
    "category": "function",
    "text": "Pre-calculate a matrix of Zn\'s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.average_error",
    "page": "Docstrings",
    "title": "EffectiveWaves.average_error",
    "category": "function",
    "text": "Approximates the error in AverageWave.amplitudes due to the mesh AverageWave.x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.average_wave_system",
    "page": "Docstrings",
    "title": "EffectiveWaves.average_wave_system",
    "category": "function",
    "text": "note that this uses the non-dimensional X = k*depth\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.diffbesselj",
    "page": "Docstrings",
    "title": "EffectiveWaves.diffbesselj",
    "category": "function",
    "text": "Derivative of Bessel function of first kind\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.diffhankelh1",
    "page": "Docstrings",
    "title": "EffectiveWaves.diffhankelh1",
    "category": "function",
    "text": "Derivative of Hankel function of the first kind\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.effective_medium",
    "page": "Docstrings",
    "title": "EffectiveWaves.effective_medium",
    "category": "function",
    "text": "the effective low frequency bulk modulus and density of a material filled with particles\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.effective_waves",
    "page": "Docstrings",
    "title": "EffectiveWaves.effective_waves",
    "category": "function",
    "text": "Calculates the effective wavenumbers and return Vector{EffectiveWave}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.match_arrays",
    "page": "Docstrings",
    "title": "EffectiveWaves.match_arrays",
    "category": "function",
    "text": "Returns (LT, ER, (imk^2invw).invVconj(wvec)), which connect the effective and average wave through α = LTA + (imk^2inv_w).invV*conj(w_vec). The matching region is X[L:end].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.match_error",
    "page": "Docstrings",
    "title": "EffectiveWaves.match_error",
    "category": "function",
    "text": "Calculates the difference between the match of MatchWave.effectivewaves and MatchWave.averagewave. This can be used as a proxi for convergence. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.maximum_hankel_order",
    "page": "Docstrings",
    "title": "EffectiveWaves.maximum_hankel_order",
    "category": "function",
    "text": "Calculate the largest needed order for the hankel series.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.one_species_low_wavenumber",
    "page": "Docstrings",
    "title": "EffectiveWaves.one_species_low_wavenumber",
    "category": "function",
    "text": "low volfrac and low wavenumber. Fails badly for strong scatterers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.p_speed",
    "page": "Docstrings",
    "title": "EffectiveWaves.p_speed",
    "category": "function",
    "text": "Returns pressure wave speed, when β is the adiabatic bulk modulus/\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.reduced_amplitudes_effective",
    "page": "Docstrings",
    "title": "EffectiveWaves.reduced_amplitudes_effective",
    "category": "function",
    "text": "The average effective transmitted scattering amplitudes for a given effective wavenumber keff. Assumes there exists only one keff. The function returns an array A, where AA(x,y,m,s) = im^mexp(-immθ_eff)A[m + maxhankelorder +1,s]exp(imkeff*(cos(θeff)x + sin(θin)y)) where (x,y) are coordinates in the halfspace, m-th hankel order, s-th species,  and AA is the ensemble average scattering coefficient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.reflection_coefficient",
    "page": "Docstrings",
    "title": "EffectiveWaves.reflection_coefficient",
    "category": "function",
    "text": "Calculates the reflection coefficient from each wave in waves and then sums the results.\n\n\n\n\n\nThe average reflection coefficient\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.reflection_coefficient_halfspace",
    "page": "Docstrings",
    "title": "EffectiveWaves.reflection_coefficient_halfspace",
    "category": "function",
    "text": "the reflection from a homogenious halfspace, which is also the low frequency reflection from a particulate material when using the effective_medium.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.reflection_coefficient_low_volfrac",
    "page": "Docstrings",
    "title": "EffectiveWaves.reflection_coefficient_low_volfrac",
    "category": "function",
    "text": "An explicit formula for the refleciton coefficient based on a low particle volume fraction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.reflection_coefficients",
    "page": "Docstrings",
    "title": "EffectiveWaves.reflection_coefficients",
    "category": "function",
    "text": "The average reflection coefficients\n\n\n\n\n\nPairs each ω in ωs with each wave in waves to calculate the refleciton coefficients: reflection_coefficient(ω, wave)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.scale_amplitudes_effective",
    "page": "Docstrings",
    "title": "EffectiveWaves.scale_amplitudes_effective",
    "category": "function",
    "text": "returns a number a, such that a*As_eff will cancel an incident wave plane wave with incident angle θin.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.t_vectors",
    "page": "Docstrings",
    "title": "EffectiveWaves.t_vectors",
    "category": "function",
    "text": "A t_matrix in the form of a vector, because for now we only deal with diagonal T matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.transmission_angle",
    "page": "Docstrings",
    "title": "EffectiveWaves.transmission_angle",
    "category": "function",
    "text": "calculate effective transmission angle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.volume_fraction",
    "page": "Docstrings",
    "title": "EffectiveWaves.volume_fraction",
    "category": "function",
    "text": "Returns the volume fraction of the specie.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.wavenumber_challis",
    "page": "Docstrings",
    "title": "EffectiveWaves.wavenumber_challis",
    "category": "function",
    "text": "wavenumber from Challis, R. E., et al. Ultrasound techniques for characterizing colloidal dispersions. Reports on progress in physics 68.7 (2005): 1541.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.wavenumber_low_volfrac",
    "page": "Docstrings",
    "title": "EffectiveWaves.wavenumber_low_volfrac",
    "category": "function",
    "text": "Explicit formula for one effective wavenumber based on a low particle volume fraction expasion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.wavenumbers",
    "page": "Docstrings",
    "title": "EffectiveWaves.wavenumbers",
    "category": "function",
    "text": "Returns all the transmitted effective wavenumbers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.x_mesh",
    "page": "Docstrings",
    "title": "EffectiveWaves.x_mesh",
    "category": "function",
    "text": "Returns x the mesh used to discretise the integral equations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EffectiveWaves.x_mesh_match",
    "page": "Docstrings",
    "title": "EffectiveWaves.x_mesh_match",
    "category": "function",
    "text": "Returns (x,L), where x[L:end] is the mesh used to match with wave_effs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EffectiveWaves.AcetoneEffectiveWaves.AirDryEffectiveWaves.AverageWaveEffectiveWaves.BS_matricesEffectiveWaves.BenzeneEffectiveWaves.BrickEffectiveWaves.CalciteEffectiveWaves.ClayEffectiveWaves.ClayRockEffectiveWaves.EffectiveWaveEffectiveWaves.EffectiveWavesEffectiveWaves.FusedSilicaEffectiveWaves.GlassPyrexEffectiveWaves.GlycerolEffectiveWaves.HexadecaneEffectiveWaves.IronArmcoEffectiveWaves.LeadAnnealedEffectiveWaves.LimeStoneEffectiveWaves.MatchWaveEffectiveWaves.MediumEffectiveWaves.NitrobenzeneEffectiveWaves.NnEffectiveWaves.OliveOilEffectiveWaves.RubberGumEffectiveWaves.SilicaQuartzEffectiveWaves.SodiumNitrateEffectiveWaves.SpecieEffectiveWaves.WaterDistilledEffectiveWaves.ZnEffectiveWaves.Zn_matrixEffectiveWaves.average_errorEffectiveWaves.average_wave_systemEffectiveWaves.dEffectiveWaves.diff_far_field_patternEffectiveWaves.diffbesseljEffectiveWaves.diffhankelh1EffectiveWaves.effective_mediumEffectiveWaves.effective_wavesEffectiveWaves.evalEffectiveWaves.far_field_patternEffectiveWaves.gray_squareEffectiveWaves.gray_square!EffectiveWaves.includeEffectiveWaves.integrate_BEffectiveWaves.integrate_B_fullEffectiveWaves.integrate_SEffectiveWaves.integration_schemeEffectiveWaves.intergrand_kernelEffectiveWaves.match_arraysEffectiveWaves.match_errorEffectiveWaves.maximum_hankel_orderEffectiveWaves.one_species_low_wavenumberEffectiveWaves.p_speedEffectiveWaves.pair_field_patternEffectiveWaves.reduce_kvecsEffectiveWaves.reduced_amplitudes_effectiveEffectiveWaves.reflection_coefficientEffectiveWaves.reflection_coefficient_halfspaceEffectiveWaves.reflection_coefficient_low_volfracEffectiveWaves.reflection_coefficientsEffectiveWaves.scale_amplitudes_effectiveEffectiveWaves.scattering_amplitudes_averageEffectiveWaves.simpson_schemeEffectiveWaves.t_vectorsEffectiveWaves.transmission_angleEffectiveWaves.trap_schemeEffectiveWaves.two_species_approx_wavenumberEffectiveWaves.volume_fractionEffectiveWaves.wavenumberEffectiveWaves.wavenumber_challisEffectiveWaves.wavenumber_far_field_low_volfracEffectiveWaves.wavenumber_low_volfracEffectiveWaves.wavenumber_very_low_volfracEffectiveWaves.wavenumbersEffectiveWaves.wavenumbers_meshEffectiveWaves.wavenumbers_pathEffectiveWaves.x_meshEffectiveWaves.x_mesh_matchEffectiveWaves.ρ"
},

]}
