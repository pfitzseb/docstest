var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)"
},

{
    "location": "#Planets.jl-1",
    "page": "Readme",
    "title": "Planets.jl",
    "category": "section",
    "text": "This package provides functions related to the formation and properties of planets. There are formulas to compute the gas accretion rate onto a planet, the core radius of the planet, and the location of the habitable zone. All the formulas are taken from peer reviewed publications in astronomy journals, and links to the Astrophysics Data System (ADS) are included in the documentation."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Planets.jl requires Julia v1.0 or later, as well the packages CSV 0.4.2 or later, Missings, and DataFrames. To install this package run ] add Planets on the Julia REPL."
},

{
    "location": "#core_radius-1",
    "page": "Readme",
    "title": "core_radius",
    "category": "section",
    "text": "This function computes the radius of a planetary core made of either pure silicate rock, a rock-iron mix, or a rock-water mix. Cores with all three components are not supported. The function interpolates across the planet structure grid model of Zeng et al (2016), which is publicly available from Li Zeng\'s website.Examples:#\n# Radius of a 3.0 M_earth core with 10% water + 90% rock:\n#\nradius = core_radius(3.0, h2o=0.1) # In Earth radii.\n\n#\n# Radius of a 3.0 M_earth core with 10% iron + 90% rock:\n#\nradius = core_radius(3.0, fe=0.1) # In Earth radii.Citation: Zeng et al (2016)"
},

{
    "location": "#accretion_rate-1",
    "page": "Readme",
    "title": "accretion_rate",
    "category": "section",
    "text": "Compute the gas accretion rate onto a planet, up to Neptune size, embedded in a protoplanetary disk. This function implements Equation (B36) derived in Carrera et al. (2018) which itself is adapted from Ginzburg et al. (2016).NOTE: Equation (B36) of Carrera et al. is in units of Mearth/Myr but this function returns values in untis of Mearth/year.NOTE: The accretion rate for a planet with zero atmosphere diverges. You need to initialize the planet\'s atmosphere to a non-zero value. Furthermore, the accretion rate is initially very high and small timesteps are required to resolve the accretion correctly.Example:#\n# Gas accretion rate (units: M_earth / year) for a small planet embedded\n# in a protoplanetary disk.\n#\n# Inputs:\n#\nM_core = 8.0  # Planet\'s core mass in Earth masses.\nM_atm = 0.02  # Planet\'s current H2 mass in Earth masses.\nT_disk = 500  # Local disk temperature in Kelvin.\n\nM_atm_dot = accretion_rate(M_core, M_atm, T_disk) # M_earth / year.Citations: Carrera et al. (2018) and Ginzburg et al. (2016)"
},

{
    "location": "#stellar_evolution-1",
    "page": "Readme",
    "title": "stellar_evolution",
    "category": "section",
    "text": "Compute the stellar evolution tracks (luminosity, temperature, logg) for AFGKM with a metallicity of Z = 1.0%, up to an age of 0.89 Gyr, using the stellar models of Marigo et al. (2017). This function the following values:Teff     Star\'s effective temperature (K)\nL_star   Log base 10 of the stellar luminosity (L_sun)\nlogg     Log gravity.Example:M_star = 0.5 # Stellar mass (M_sun)\nage = 1e9    # Stellar age (years)\nZ = 0.01     # Metallicity\n\nTeff, L_star, logg = stellar_evolution(M_star,t=age,Z=Z)Citation: Marigo et al. (2017)See also: Web interface"
},

{
    "location": "#habitable_zone-1",
    "page": "Readme",
    "title": "habitable_zone",
    "category": "section",
    "text": "Computes all the limits for the habitable zone from Kopparapu et al. (2013). This function uses the updated coefficients from their website.Input:Teff       Star\'s effective temperature (K)\nL_star     Star\'s luminosity (L_sun)Example:Teff   = 3700  # Temperature of a 0.5 M_sun star.\nL_star = 0.04  # Luminosity of a 0.5 M_sun star.\n\nlimits = habitable_zone(Teff, L_star)\n\n@info(\"Recent Venus                  = \\$(limits[1]) AU\")\n@info(\"Runaway Greenhouse            = \\$(limits[2]) AU\")\n@info(\"Maximum Greenhouse            = \\$(limits[3]) AU\")\n@info(\"Early Mars                    = \\$(limits[4]) AU\")\n@info(\"Runaway Greenhouse for 5.0 ME = \\$(limits[5]) AU\")\n@info(\"Runaway Greenhouse for 0.1 ME = \\$(limits[6]) AU\")Citation: Kopparapu et al. (2013)See also: Updated values"
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
    "location": "autodocs/#Planets.habitable_zone",
    "page": "Docstrings",
    "title": "Planets.habitable_zone",
    "category": "function",
    "text": "Computes all the limits for the habitable zone from Kopparapu et al. (2013). This function uses the updated coefficients from their website.\n\nInput:\n\nTeff       Star\'s effective temperature (K)\nL_star     Star\'s luminosity (L_sun)\n\nExample:\n\nTeff   = 3700  # Temperature of a 0.5 M_sun star.\nL_star = 0.04  # Luminosity of a 0.5 M_sun star.\n\nlimits = habitable_zone(Teff, L_star)\n\n@info(\"Recent Venus                  = $(limits[1]) AU\")\n@info(\"Runaway Greenhouse            = $(limits[2]) AU\")\n@info(\"Maximum Greenhouse            = $(limits[3]) AU\")\n@info(\"Early Mars                    = $(limits[4]) AU\")\n@info(\"Runaway Greenhouse for 5.0 ME = $(limits[5]) AU\")\n@info(\"Runaway Greenhouse for 0.1 ME = $(limits[6]) AU\")\n\nCitations:\n\nKopparapu et al. (2013)\nhttp://adsabs.harvard.edu/abs/2013ApJ...765..131K\n\nErratum\nhttp://adsabs.harvard.edu/abs/2013ApJ...770...82K\n\nUpdated values\nhttps://depts.washington.edu/naivpl/sites/default/files/hz.shtml\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Planets.load_parsec",
    "page": "Docstrings",
    "title": "Planets.load_parsec",
    "category": "function",
    "text": "This is an internal function (not exported). It is used to load one of the stellar evolution tables from the data/ directory. The caller is responsible for supplying a valid table name:\n\n\"Z05\"	,	\"Z10\"	,	\"Z15\"	,	\"Z20\"\n\nThe data is saved as a data frame inside the global variable parsec[...]. If the data was previously loaded, it won\'t be loaded again, so it\'s safe to call this function many times.\n\nExample:\n\nload_parsec(\"Z05\")\n\n... now parsec[\"Z05\"] contains data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Planets.stellar_evolution",
    "page": "Docstrings",
    "title": "Planets.stellar_evolution",
    "category": "function",
    "text": "Compute the stellar evolution tracks (luminosity, temperature, logg) for AFGKM with a metallicity of Z = 1.0%, up to an age of 0.89 Gyr, using the stellar models of Marigo et al. (2017). This function the following values:\n\nTeff     Star\'s effective temperature (K)\nL_star   Log base 10 of the stellar luminosity (L_sun)\nlogg     Log gravity.\n\nExample:\n\nM_star = 0.5 # Stellar mass (M_sun)\nage = 1e9    # Stellar age (years)\nZ = 0.01     # Metallicity\n\nTeff, L_star, logg = stellar_evolution(M_star,t=age,Z=Z)\n\nCitation:\n\nMarigo et al. (2017)\nhttp://stev.oapd.inaf.it/cgi-bin/cmd\nhttp://adsabs.harvard.edu/abs/2017ApJ...835...77M\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Planets.PlanetsPlanets.accretion_ratePlanets.core_radiusPlanets.evalPlanets.habitable_zonePlanets.includePlanets.interpolate_massPlanets.interpolate_time_and_massPlanets.load_parsecPlanets.mr_namesPlanets.mr_tablePlanets.parsecPlanets.stellar_evolution"
},

]}
