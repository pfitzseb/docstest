var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RandomQuantum-1",
    "page": "Readme",
    "title": "RandomQuantum",
    "category": "section",
    "text": "Linux, OSX: (Image: Build Status) &nbsp; Windows: (Image: Build Status) &nbsp; &nbsp; &nbsp; (Image: Coverage Status) (Image: codecov.io)This Julia package provides functions to sample from various random matrix ensebles associated with quantum information applications.Here is a table of currently support ensembles:Type Ensemble\nGinibreEnsemble Ginibre unitarily invariant matrix ensemble\nFubiniStudyPureState Fubini-Study pure ensemble\nFubiniStudyMixedState Mixed-state ensemble induced by tracing out elements of Fubini-Study ensenble on a larger space\nHilbertSchmidtMixedState Mixed-state ensemble given by the \"flat\" Hilbert-Schmidt\nBuresMixedState Mixed-state ensemble given by the Bures metric.\nClosedHaarEnsemble Circular Unitary Ensemble (CUE), unitaries distributed according to the Haar measure.\nOpenHaarEnsemble Quantum channel ensemble induced by Haar-distributed unitaries (CUE) on a larger space.\nRandomClosedEvolution Unitary matrix ensemble obtained by evolving under a Hamiltonian sampled from a Gaussian unitary ensemble\nRandomOpenEvolution Quantum channel ensemble induced by integrated GUE evolution on a larger space.The interface is emulates the interface of Distributions.jl, although there is a lot missing at the moment."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install it with the following command:  julia> Pkg.add(\"RandomQuantum\")For Julia v1.0 use the master branch:  (v1.0) pkg> add RandomQuantum#master"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> using RandomQuantum\n\njulia> rand(BuresMixedState(2))\n2x2 Array{Complex{Float64},2}:\n   0.771511+0.0im       -0.0632581+0.116198im\n -0.0632581-0.116198im    0.228489+0.0im    "
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Francesco Mezzadri, How to Generate Random Matrices from the Classical Compact Groups Notices Amer Math Soc 54 4 592 (2007) arXiv:math-ph/0609050Wojciech Bruzda, Valerio Cappellini, Hans-Jürgen Sommers, Karol Życzkowski, Random quantum operations, Physics Letters A, Volume 373, Issue 3, 12 January 2009, Pages 320-324 arXiv:0804.2361Karol Życzkowski, Karol A. Penson, Ion Nechita, and Benoît Collins, Generating random density matrices, Journal of Mathematical Physics, 52, 062201 (2011) arXiv:1010.3570"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "MIT License"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "This research was funded by the Intelligence Advanced Research Projects Activity (IARPA) Multi Qubit Coherent Operations (MQCO) program under Contract No. W911NF-10-1-0324. All statements of fact, opinion, or conclusions contained herein are those of the authors and should not be construed as representing the official views or policies of IARPA, ODNI, or the US Government."
},

{
    "location": "#Copyright-1",
    "page": "Readme",
    "title": "Copyright",
    "category": "section",
    "text": "(c) Raytheon BBN Technologies, 2015"
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "Marcus P S (@marcusps)"
},

]}
