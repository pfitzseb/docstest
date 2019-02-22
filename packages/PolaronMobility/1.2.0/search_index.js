var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PolaronMobility.jl-1",
    "page": "Readme",
    "title": "PolaronMobility.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io) (Image: docs-latest)(Image: DOI)PolaronMobility.jl is a Julia package which calculates the temperature-dependent polaron mobility for a material. This is based on the Feynman variational solution to the Polaron problem.  The electron-phonon coupling is treated as an effective α (alpha) Frohlich Hamiltonian parameter.  The band structure is treated with an effective mass theory.  The variational problem is solved numerically for finite-temperature free energies, rather than by the asymptotic solutions to the athermal energies, as often found in the textbooks.   The mobility is calculated numerically by integrating the polaron self-energy along the imaginary axis, as well as with the Kadanoff Boltzmann equation approximation, and the FHIP low-temperature asymptotic solution. We provided parameters for various metal-halide Perovskites, and other interesting systems.The motivation for developing these codes was to enable polaron mobility calculations on arbitrary materials.  They also provide the only extant implementation of Feynman\'s variational method.   They offer a convenient basis for writing codes that build on these variational solutions. More extensive documentation, is perhaps easiest to read and understand alongside the first paper: ArXiv:1704.05404 / Frost2017PRB."
},

{
    "location": "#Local-installation-1",
    "page": "Readme",
    "title": "Local installation",
    "category": "section",
    "text": "These codes require Julia >0.6 . They are structured as a full Julia package, but and are registered with the central METADATA package repository. To install, type the following at the Julia REPL:julia> import Pkg; Pkg.add(\"PolaronMobility\")"
},

{
    "location": "#Common-errors-1",
    "page": "Readme",
    "title": "Common errors",
    "category": "section",
    "text": "Often errors discoverd when trying to run these codes are related to changes in the interface to Optim.jlThis general appears as a MethodError with the internal Optim type, perhaps similar to: MethodError: Cannot convert an object of type Optim.BFGS{...You may want to check the Optim package version and status: Pkg.status(\"Optim\")The present versions of the code require Optim 0.15-."
},

{
    "location": "#JuliaBox-1",
    "page": "Readme",
    "title": "JuliaBox",
    "category": "section",
    "text": "There is an example notebook which can be run interactively on the (free) JuliaBox notebook server. This is the fastest way to calculate a few polaron parameters, if you do not have Julia.Login to Juliabox.\nClick on the \'git\' button\nEnter https://github.com/jarvist/PolaronMobility.jl.git (this repository) as the git URL\nAuto-filled defaults are fine; click \'+\' and wait for it to clone\nYou should now have a PolaronMobility directory in your JuliaBox, with the above notebook inside.5b) As of 2nd Aug 2018, you a more modern version of the Optim package than comes as default on JuliaBox. Click on \'Packages\' from the root page. Within the new pop-up window type Optim into the \'registered package box\', click \'+\' to add it to your list, then click on the \'build\' button. Hopefully a new Julia image with an updated Optim will be built.Once setup, you can save the Notebook URL as a bookmark: [https://juliabox.com/notebook/notebooks/PolaronMobility/JuliaBox-Example.ipynb]"
},

{
    "location": "#Using-1",
    "page": "Readme",
    "title": "Using",
    "category": "section",
    "text": "As an example:using PolaronMobility\nMAPIe=polaronmobility(300, 4.5, 24.1, 2.25E12, 0.12)Will calculate the polaron mobility for methyl-ammonium lead halide perovskite (f=2.25 THz; ϵoptical=4.5; ϵstatic=24.1; effective-mass=0.12 electron-masses) at 300 K. An abbreviated output should look like:T: 300.000000 β: 2.41e+20 βred: 0.36 ħω  = 9.31 meV     Converged? : true\n VariationalParams v= 19.86  w= 16.96   ||   M=0.371407 k=106.835753    \n POLARON SIZE (rf), following Schultz1959. (s.d. of Gaussian polaron ψ )\n     Schultz1959(2.4): rf= 0.528075 (int units) = 2.68001e-09 m [SI]\n Polaron Free Energy: A= -6.448815 B= 7.355626 C= 2.911977 F= -3.818788  = -35.534786 meV\nPolaron Mobility theories:\n    μ(FHIP)= 0.082049 m^2/Vs    = 820.49 cm^2/Vs\n     Eqm. Phonon. pop. Nbar: 2.308150 \n    μ(Kadanoff1963 [Eqn. 25]) = 0.019689 m^2/Vs      = 196.89 cm^2/Vs\n    Tau=1/Gamma0 = 1.15751e-13 = 0.115751 ps\n    μ(Hellwarth1999)= 0.013642 m^2/Vs   = 136.42 cm^2/VsFurther details in the documentation."
},

{
    "location": "#Research-outputs-1",
    "page": "Readme",
    "title": "Research outputs",
    "category": "section",
    "text": "The central output of this model are temperature-dependent polaron mobilities: (Image: MAPI Polaron mobility, plotted vs experimental data)From the variational solution, you have characterised the polarons in your system.  This gives access to the effective mass renormalisations (phonon drag), polaron binding energies, effective electron-phonon coupling parameters, etc."
},

{
    "location": "#Community-guidelines-1",
    "page": "Readme",
    "title": "Community guidelines",
    "category": "section",
    "text": "Contributions to the code (extending that which is calculated), or additional physical systems / examples, are very welcome. If you have questions about the software, scientific questions, or find errors, please create a GitHub issue. "
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "If you find this package (or snippets, such as the entered and tested free-energy expressions) useful for your work, please cite the paper  Frost2017PRB. @article{Frost2017,\n  doi = {10.1103/physrevb.96.195202},\n  url = {https://doi.org/10.1103/physrevb.96.195202},\n  year  = {2017},\n  month = {nov},\n  publisher = {American Physical Society ({APS})},\n  volume = {96},\n  number = {19},\n  author = {Jarvist Moore Frost},\n  title = {Calculating polaron mobility in halide perovskites},\n  journal = {Physical Review B}\n}These codes use the Optim.jl optimisation library to do the essential calculation in the Feynman variational theory.  (Image: DOI)"
},

{
    "location": "autodocs/#PolaronMobility.HellwarthAScheme",
    "page": "Docstrings",
    "title": "PolaronMobility.HellwarthAScheme",
    "category": "function",
    "text": "HellwarthAScheme(LO,T=295)\n\nMultiple phonon mode reduction to a single effective frequency.\nTemperature dependent, defaults to T=295 K.\n\nFollows Hellwarth et al. 1999 PRB \'A\' scheme, Eqn 50 RHS.\n\nUNTESTED AND UNCERTAIN CODE.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolaronMobility.HellwarthBScheme",
    "page": "Docstrings",
    "title": "PolaronMobility.HellwarthBScheme",
    "category": "function",
    "text": "HellwarthBScheme(LO)\n\nMultiple phonon mode reduction to a single effective frequency.\nHellwarth et al. 1999 PRB, \'B scheme\'; the athermal method.\nAveraging procedure is constructed by considering the average effect of the action of multiple branches.\n\nFollows Eqn (58) in this paper, assuming typo on LHS, should actually be W_e.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolaronMobility.ImX",
    "page": "Docstrings",
    "title": "PolaronMobility.ImX",
    "category": "function",
    "text": "function ImX(nurange,v,w,βred,α,ω,mb)\n\nImpedance in (47a) from Feynman1962, directly solving freq dep without taking Hellwarth1999 limit of v->0 . \n\nCalculates a frequency dependent (over range of nu) susceptibility which can be linked back to mobility.\n\nHERE BE DRAGONS!  Not well tested or validated code; the central numeric integration is highly oscillatory and becomes intractable for large nu.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolaronMobility.ReX",
    "page": "Docstrings",
    "title": "PolaronMobility.ReX",
    "category": "function",
    "text": "ReX(v=20,w=20)\n\nCodes to implement \'Optical Absorption of Polarons in the Feynman-Hellwarth-Iddings-Platzman Approximation\', https://doi.org/10.1103/PhysRevB.5.2367 ; \n\nIn particular we are trying to calculate Re[χ] , the real part of the polaron optical absorption.\n\n(13) - defn of Re[χ]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolaronMobility.feynmanvw",
    "page": "Docstrings",
    "title": "PolaronMobility.feynmanvw",
    "category": "function",
    "text": "feynmanvw(α; v=7.0, w=6.0)\n\nCalculate v and w variational polaron parameters,\nfor the supplied α Frohlich coupling.\nThis version uses the original athermal action (Feynman 1955).\nReturns v,w.\n\n\n\n\n\nfeynmanvw(α, βred; v=7.1, w=6.5, verbose::Bool=false)\n\nCalculate v and w variational polaron parameters,\nfor the supplied α Frohlich coupling and βred reduced thermodynamic temperature.\nThis uses the Osaka finite temperature action.\nReturns v,w.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolaronMobility.frohlichalpha",
    "page": "Docstrings",
    "title": "PolaronMobility.frohlichalpha",
    "category": "function",
    "text": "frohlichalpha(εInf,εS,freq,m_eff)\n\nCalculates the Frohlich alpha parameter, for a given dielectric constant,\nfrequency (f) of phonon in Hertz, and effective mass (in units of the\nbare electron mass).\n\nSee Feynman 1955:\nhttp://dx.doi.org/10.1103/PhysRev.97.660\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolaronMobility.polaronmobility",
    "page": "Docstrings",
    "title": "PolaronMobility.polaronmobility",
    "category": "function",
    "text": "polaronmobility(Trange,\n                ε_Inf, ε_S, freq, effectivemass;\n                verbose::Bool=false)\n\nSolves the Feynman polaron problem variationally with finite temperature\nOsaka energies.  From the resulting v, and w parameters, calculates polaron\nstructure (wave function size, etc.).  Uses FHIP, Kadanoff (Boltzmann\nrelaxation time) and Hellwarth direct contour integration to predict\na temperature-dependent mobility for the material system.\nInput is a temperature range (e.g. 10:50:1000),\nreduced dielectric constants (e.g. 5, 20),\ncharacteristic dielectric phonon frequency (e.g. 2.25E12) - units Hertz\nbare-band effective-mass (e.g. 012) - units electron mass.\n\nReturns a structure of type Polaron, containing arrays of useful\ninformation.  Also prints a lot of information to the standard out - which\nmay be more useful if you\'re just inquiring as to a particular data point,\nrather than plotting a temperature-dependent parameter.\n\nAs an example, to calculate the electron polaron in MAPI at 300 K:\npolaronmobility(300, 4.5, 24.1, 2.25E12, 0.12)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolaronMobility.savepolaron",
    "page": "Docstrings",
    "title": "PolaronMobility.savepolaron",
    "category": "function",
    "text": "savepolaron(fileprefix, p::Polaron)\n\nSaves data from polaron \'p\' into file \"fileprefix\". This is a simple space-delimited text file, with each entry a separate temperature, for plotting with Gnuplot or similar.\n\nStructure of file is written to the header:\n\nTs, βreds, Kμs, Hμs, FHIPμs, vs, ws, ks, Ms, As, Bs, Cs, Fs, Taus, rfsis\n\n1    2     3    4     5      6   7   8   9  10  11  12  13    14     15\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PolaronMobility.APolaronMobility.AFPolaronMobility.BPolaronMobility.BoltzmannPolaronMobility.CPolaronMobility.ElectronVoltPolaronMobility.FPolaronMobility.HellwarthASchemePolaronMobility.HellwarthBSchemePolaronMobility.ImXPolaronMobility.MassElectronPolaronMobility.PolaronPolaronMobility.PolaronMobilityPolaronMobility.ReXPolaronMobility.SusceptibilityPolaronMobility.YPolaronMobility.eVPolaronMobility.evalPolaronMobility.fPolaronMobility.fFPolaronMobility.feynmanvwPolaronMobility.frohlichalphaPolaronMobility.hbarPolaronMobility.includePolaronMobility.kBPolaronMobility.mePolaronMobility.plotpolaronPolaronMobility.polaronmobilityPolaronMobility.qPolaronMobility.savepolaronPolaronMobility.susceptibilityPolaronMobility.ħPolaronMobility.ε_0"
},

]}
