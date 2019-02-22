var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnitfulAtomic-1",
    "page": "Readme",
    "title": "UnitfulAtomic",
    "category": "section",
    "text": "This package extends the Unitful.jl package to facilitate working with atomic units.(Image: Build Status) (Image: Build status) (Image: codecov) (Image: Coverage Status)"
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "This package provides three functions that enable easy conversion from and to Hartree atomic units:aunit(x) returns the appropriate atomic unit for x, where x can be a Unitful.Quantity, Unitful.Units, or Unitful.Dimensions:\njulia> aunit(2.3u\"cm\")\na₀\n\njulia> aunit(u\"T\")\na₀^-2 e^-1 ħ\nauconvert can be used to convert from and to atomic units. It has two methods:\nauconvert(x::Unitful.Quantity) converts a quantity to the appropriate atomic unit:\njulia> auconvert(13.6u\"eV\")\n0.4997907858599377 Eₕ\n\njulia> auconvert(20u\"nm\")\n377.94522509156565 a₀\nauconvert(u::Unitful.Units, x::Number) interprets x as a quantity in atomic units and converts it to the unit u:\njulia> auconvert(u\"eV\", 1)  # convert 1 Eₕ to eV\n27.211386013449417 eV\n\njulia> auconvert(u\"m\", 1)   # convert 1 a₀ to m\n5.2917721067e-11 m\naustrip(x::Unitful.Quantity) converts a quantity to the appropriate atomic unit and then strips the units. This is equivalent to Unitful.ustrip(auconvert(x)):\njulia> austrip(13.6u\"eV\")\n0.4997907858599377\n\njulia> austrip(20u\"nm\")\n377.94522509156565"
},

{
    "location": "#Defined-units-and-dimensions-1",
    "page": "Readme",
    "title": "Defined units and dimensions",
    "category": "section",
    "text": "The package defines the following atomic units (prefixed with _au), from which all other atomic units are derived:me_au (printed as mₑ): the electron rest mass.\ne_au (printed as e): the elementary charge.\nħ_au (printed as ħ): the reduced Planck constant.\nk_au (printed as k): the Boltzmann constant.\na0_au (printed as a₀): the Bohr radius. The alias bohr can be used instead of a0_au.\nEh_au (printed as Eₕ): the Hartree energy. The alias hartree can be used instead of Eh_au.Furthermore, this package defines some units that are not atomic units, but are common in atomic physics:Ry: the Rydberg energy Ry = h*c*R∞ = Eₕ/2, see Rydberg constant.\nμ_N: the nuclear magneton."
},

{
    "location": "autodocs/#UnitfulAtomic.auconvert",
    "page": "Docstrings",
    "title": "UnitfulAtomic.auconvert",
    "category": "function",
    "text": "auconvert(x::Unitful.Quantity)\n\nConvert a quantity to the appropriate atomic unit.\n\nExamples\n\njulia> auconvert(13.6u\"eV\")\n0.4997907858599377 Eₕ\n\njulia> auconvert(20u\"nm\")\n377.94522509156565 a₀\n\n\n\n\n\nauconvert(u::Unitful.Units, x::Number)\n\nInterpret x as a quantity given in atomic units and convert it to the unit u.\n\nExamples\n\njulia> auconvert(u\"eV\", 1)  # convert 1 Eₕ to eV\n27.211386013449417 eV\n\njulia> auconvert(u\"m\", 1)   # convert 1 a₀ to m\n5.2917721067e-11 m\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnitfulAtomic.aunit",
    "page": "Docstrings",
    "title": "UnitfulAtomic.aunit",
    "category": "function",
    "text": "aunit(x::Unitful.Quantity)\naunit(x::Unitful.Units)\naunit(x::Unitful.Dimensions)\n\nReturns the appropriate atomic unit (a Unitful.Units object) for the dimension of x.\n\nExamples\n\njulia> aunit(2.3u\"cm\")\na₀\n\njulia> aunit(u\"T\")\na₀^-2 e^-1 ħ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnitfulAtomic.austrip",
    "page": "Docstrings",
    "title": "UnitfulAtomic.austrip",
    "category": "function",
    "text": "austrip(x::Unitful.Quantity)\n\nReturns the value of the quantity converted to atomic units as a number type (i.e., with the units removed). This is equivalent to Unitful.ustrip(auconvert(x)).\n\nExamples\n\njulia> austrip(13.6u\"eV\")\n0.4997907858599377\n\njulia> austrip(20u\"nm\")\n377.94522509156565\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnitfulAtomic.Eh_auUnitfulAtomic.RyUnitfulAtomic.UnitfulAtomicUnitfulAtomic.__init__UnitfulAtomic.a0_auUnitfulAtomic.auconvertUnitfulAtomic.aunitUnitfulAtomic.austripUnitfulAtomic.bohrUnitfulAtomic.e_auUnitfulAtomic.evalUnitfulAtomic.hartreeUnitfulAtomic.includeUnitfulAtomic.k_auUnitfulAtomic.localunitsUnitfulAtomic.me_auUnitfulAtomic.ħ_auUnitfulAtomic.μ_N"
},

]}
