var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Planets.jl-1",
    "page": "Readme",
    "title": "Planets.jl",
    "category": "section",
    "text": "Functions related to planet formation or planet structure models."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package requires Julia v0.7 or later, as well as following packages: DataFrames\nCSV\nMissingsTo install this package run ] add Planets on the Julia REPL."
},

{
    "location": "#core_radius-1",
    "page": "Readme",
    "title": "core_radius",
    "category": "section",
    "text": "This function computes the radius of a planetary core made of either pure silicate rock, a rock-iron mix, or a rock-water mix. Cores with all three components are not supported. The function interpolates across the planet structure grid model of Zeng et al. (2016), which is publicly available from Li Zeng\'s website.Examples:#\n# Radius of a 3.0 M_earth core with 10% water + 90% rock:\n#\nradius = core_radius(3.0, h2o=0.1) # In Earth radii.\n\n#\n# Radius of a 3.0 M_earth core with 10% iron + 90% rock:\n#\nradius = core_radius(3.0, fe=0.1) # In Earth radii.Citation:Zeng et al (2016)\nhttp://adsabs.harvard.edu/abs/2016ApJ...819..127Z"
},

{
    "location": "#accretion_rate-1",
    "page": "Readme",
    "title": "accretion_rate",
    "category": "section",
    "text": "Compute the gas accretion rate onto a planet, up to Neptune size, embedded in a protoplanetary disk. This function implements Equation (B36) derived in Carrera et al. (2018) which itself is adapted from Ginzburg et al. (2016).NOTE: Equation (B36) of Carrera et al. is in units of Mearth/Myr but this function returns values in untis of Mearth/year.NOTE: The accretion rate for a planet with zero atmosphere diverges. You need to initialize the planet\'s atmosphere to a non-zero value. Furthermore, the accretion rate is initially very high and small timesteps are required to resolve the accretion correctly.Example:#\n# Gas accretion rate (units: M_earth / year) for a small planet embedded\n# in a protoplanetary disk.\n#\n# Inputs:\n#\nM_core = 8.0  # Planet\'s core mass in Earth masses.\nM_atm = 0.02  # Planet\'s current H2 mass in Earth masses.\nT_disk = 500  # Local disk temperature in Kelvin.\n\nM_atm_dot = accretion_rate(M_core, M_atm, T_disk) # M_earth / year.Citation:Carrera et al. (2018) and Ginzburg et al. (2016)\n\nhttp://adsabs.harvard.edu/cgi-bin/bib_query?arXiv:1804.05069\nhttp://adsabs.harvard.edu/abs/2016ApJ...825...29G"
},

{
    "location": "autodocs/#Planets.accretion_rate",
    "page": "Docstrings",
    "title": "Planets.accretion_rate",
    "category": "function",
    "text": "Compute the gas accretion rate onto a planet, up to Neptune size, embedded in a protoplanetary disk. This function implements Equation (B36) derived in Carrera et al. (2018) which itself is adapted from Ginzburg et al. (2016).\n\nNOTE: Equation (B36) of Carrera et al. is in units of Mearth/Myr but this function returns values in untis of Mearth/year.\n\nNOTE: The accretion rate for a planet with zero atmosphere diverges. You need to initialize the planet\'s atmosphere to a non-zero value. A reasonable choice is the gas mass contained inside the planet\'s Bondi radius. Furthermore, the accretion rate is initially very high and small timesteps are required to resolve the accretion correctly.\n\nExample:\n\n#\n# Gas accretion rate (units: M_earth / year) for a small planet embedded\n# in a protoplanetary disk.\n#\n# Inputs:\n#\nM_core = 8.0  # Planet\'s core mass in Earth masses.\nM_atm = 0.02  # Planet\'s current H2 mass in Earth masses.\nT_disk = 500  # Local disk temperature in Kelvin.\n\nM_atm_dot = accretion_rate(M_core, M_atm, T_disk) # M_earth / year.\n\nCitation:\n\nCarrera et al. (2018) and Ginzburg et al. (2016)\n\nhttp://adsabs.harvard.edu/cgi-bin/bib_query?arXiv:1804.05069\nhttp://adsabs.harvard.edu/abs/2016ApJ...825...29G\n\nInitializing the planet\'s atmosphere:\n\nρ = ... # Local disk gas density in g/cm^3\nT = ... # Local disk gas temperature in Kelvin\n\nM_core = ... # Core mass in M_earth\n\nRb = 2.861e7 * M_core / T # Bondi radius in cm\n\nM_atm = ρ * Rb^3 * 1.6744e-28 # Initial atmosphere mass in M_earth\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Planets.core_radius",
    "page": "Docstrings",
    "title": "Planets.core_radius",
    "category": "function",
    "text": "Compute the core radius for either a rock-iron or water-rock core.\n\nExamples:\n\n#\n# Radius of a 3.0 M_earth core with 10% water + 90% rock:\n#\nradius = core_radius(3.0, h2o=0.1) # In Earth radii.\n\n#\n# Radius of a 3.0 M_earth core with 10% iron + 90% rock:\n#\nradius = core_radius(3.0, fe=0.1) # In Earth radii.\n\nCitation:\n\nZeng et al (2016)\nhttp://adsabs.harvard.edu/abs/2016ApJ...819..127Z\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Planets.PlanetsPlanets.accretion_ratePlanets.core_radiusPlanets.evalPlanets.includePlanets.mr_namesPlanets.mr_table"
},

]}
