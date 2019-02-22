var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Psychro-Thermodynamic-properties-of-moist-air-1",
    "page": "Readme",
    "title": "Psychro - Thermodynamic properties of moist air",
    "category": "section",
    "text": "This package provides Julia with functions to compute some thermodynamic properties of moist air. The model uses real gas correlations as recommended by ASHRAE (see reference [5]).Besides moist air, this package also calculates the properties of dry air and saturated water vapor. It is part of a larger effort to model the thermodynamic (and transport) properties of different types of fluids."
},

{
    "location": "#User-interface-Thermodynamic-properties-of-moist-air,-dry-air-and-saturated-water-vapor.-1",
    "page": "Readme",
    "title": "User interface - Thermodynamic properties of moist air, dry air and saturated water vapor.",
    "category": "section",
    "text": "The methods listed below calculate thermodynamic properties of moist air:volume(MoistAir, T, HumidityType, humidity, P[, outunit]) \nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \ndensity(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpy(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpym(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropy(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropym(MoistAir, T, HumidityType, humidity, P[, outunit])\ncompressfactor(MoistAir, T, HumidityType, humidity, P[, outunit])\ndewpoint(MoistAir, T, HumidityType, humidity, P[, outunit]) \nwetbulb(MoistAir, T, HumidityType, humidity, P[, outunit]) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nrelhum(MoistAir, T, HumidityType, humidity, P) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nspechum(MoistAir, T, HumidityType, humidity, P) \nmolarfrac(MoistAir, T, HumidityType, humidity, P)The methods listed above calculate the following thermodynamic properties of moist air:volume Specific volume \nvolumem Molar volume\ndensity Density\nenthalpy Specific enthalpy\nenthalpym Molar enthalpy\nentropy Specific entropy\nentropym Molar entropy\ncompressfactor Compressibility factor Z \ndewpoint Dew point temperature\nwetbulb Adiabatic saturation temperature\nhumrat Humidity ratio\nrelhum Relative humidity\nspechum Specific humidity\nmolarfrac Molar fraction of water vaporThe humidity is specified using two parameters:How the humidity is specified\nThe actual value of humidityThe following types are used to characterize the humidity.WetBulb for wet bulb temperature, actually adiabatic saturation temperature\nDewPoint Dew point temperature\nRelHum Relative humidity\nHumRat Humidity ratio (kg of vapor / kg of dry air)\nSpecHum Specific humidity (kg of vapor / kg of moist air)\nMolarFrac Molar fraction of water vapor."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> volume(MoistAir, 293.15, WetBulb, 291.15, 101325.0)\n0.8464079202783964\n\njulia> volume(MoistAir, 293.15, DewPoint, 291.15, 101325.0)\n0.8475219875187474\n\njulia> volume(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.843889817602806\n\njulia> volume(MoistAir, 20.0u\"°C\", DewPoint, 60.0u\"°F\", 1.0u\"atm\")\n0.8449934929585231 kg^-1 m^3\n\njulia> volumem(MoistAir, 293.15, RelHum, 0.5, 93000.0)\n0.026199080086890276\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1.0976075893895811 kg m^-3\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"lb/inch^3\")\n3.965358988338535e-5 in^-3 lb\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n50667.43014746832 kg^-1 J\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1439.6551689935861 J mol^-1\n\njulia> compressfactor(MoistAir, -90.0u\"°C\", RelHum, 0.01, 4.5u\"MPa\")\n0.8552758629097985\n\njulia> wetbulb(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n17.0 °C\n\njulia> dewpoint(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n15.475836053510477 °C\n\njulia> humrat(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.012032930694441925\n\njulia> relhum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.7517801524436909\n\njulia> spechum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.011889860823189923"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] Wexler, A. and Hyland, R. W., \"Formulations for the thermodynamic properties of the saturated phases of H2O from 173.15 K to 473.15 K\", ASHRAE Transactions, 1983.\n[2] Wexler, A. and Hyland, R. W., \"Formulations for the thermodynamic properties of dry air from 173.15 K to 473.15 K, and of saturated moist air from 173.15 K to 372.15 K at pressures to 5 MPa\n[3] Himmelblaum D. M., \"Solubilities of inert gases in water, 0oC to near the critical point of water\", Journal of Chemical and Engineering Data, Vol. 5, No. 1, January 1960.\n[4] Kell, George S., \"Density, thermal expansivity, and compressibility of liquid water from 0oC to 150oC: correlations and tables for atmospheric pressure and saturation reviewed and expressed on 1968 temperature scale\", Journal of Chemical and Engineering Data, Vol. 20, No. 1, 1975.\n[5] ASHRAE, \"Psychrometrics: Theory and Practice\", ASHRAE, 1996.(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "autodocs/#Psychro.@polyeval",
    "page": "Docstrings",
    "title": "Psychro.@polyeval",
    "category": "macro",
    "text": "@polyeval(z, p, N)\n\nEvaluate the polynomial sum_k ck z^k-1 for the coefficients c[1], c[2], ..., c[N]; that is, the coefficients are given in ascending order by power of z.  This macro expands to efficient inline code that uses either Horner\'s method.\n\n\njulia> p = randn(5)\n5-element Array{Float64,1}:\n  0.106455 \n  0.0351716\n -0.204764 \n -0.87642  \n  0.260407 \n\njulia> @polyeval(0.5, p, 5)\n-0.020427265391245605\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.AbstractFluid",
    "page": "Docstrings",
    "title": "Psychro.AbstractFluid",
    "category": "type",
    "text": "Abstract type that represents any kind of fluid\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.AbstractMaterial",
    "page": "Docstrings",
    "title": "Psychro.AbstractMaterial",
    "category": "type",
    "text": "Abstract type that represents any kind of matter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Baa",
    "page": "Docstrings",
    "title": "Psychro.Baa",
    "category": "function",
    "text": "```Baa(Tk)```\n\nVirial coefficient Bₐₐ of dry air eq 10 [2]\n\nTk Temperature in K\nOutput: Bₐₐ in m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Baw",
    "page": "Docstrings",
    "title": "Psychro.Baw",
    "category": "function",
    "text": "```Baw(Tk)```\n\nCross virial coefficient Baw of saturated vapor eq 15 [2]\n\nTk Temperature in K\nOutput: Baw in m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Blin",
    "page": "Docstrings",
    "title": "Psychro.Blin",
    "category": "function",
    "text": "```Blin(Tk)```\n\nVirial coefficient B\' saturated vapor eq 15 [1]\n\nTk Temperature in K\nOutput: B\' in Pa^(-1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Bm",
    "page": "Docstrings",
    "title": "Psychro.Bm",
    "category": "function",
    "text": "```Bm(Tk,xv)```\n\nFirst virial coefficient Bm of moist air of saturated vapor eq 2 [2]\n\nTk Temperature in K\nxv Molar fraction of water vapor in the moist air\nOutput: Bm in m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Bww",
    "page": "Docstrings",
    "title": "Psychro.Bww",
    "category": "function",
    "text": "```Bww(Tk)```\n\nVirial coefficient Bww of saturated vapor eq 19 [2]\n\nTk Temperature in K\nOutput: Bww in m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Caaa",
    "page": "Docstrings",
    "title": "Psychro.Caaa",
    "category": "function",
    "text": "```Caa(Tk)```\n\nSecond virial coefficient Cₐₐₐ of dry air eq 11 [2].\n\nTk Temperature in K\nOutput: Bₐₐ in m^6/mol^2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Caaw",
    "page": "Docstrings",
    "title": "Psychro.Caaw",
    "category": "function",
    "text": "```Caaw(Tk)```\n\nCross virial coefficient Caaw of saturated vapor eq 16 [2]\n\nTk Temperature in K\nOutput: Caaw in m^6/mol^2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Caww",
    "page": "Docstrings",
    "title": "Psychro.Caww",
    "category": "function",
    "text": "```Caww(Tk)```\n\nCross virial coefficient Caaw of saturated vapor eq 17 [2]\n\nTk Temperature in K\nOutput: Caww in m^6/mol^2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Clin",
    "page": "Docstrings",
    "title": "Psychro.Clin",
    "category": "function",
    "text": "Second virial coefficient C\' saturated vapor eq 16 [1]\n\nTk Temperature in K\nOutput: B\' in Pa^(-2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Cm",
    "page": "Docstrings",
    "title": "Psychro.Cm",
    "category": "function",
    "text": "```Cm(Tk,xv)```\n\nSecond virial coefficient Cm of moist air of saturated vapor eq 3 [2]\n\nTk Temperature in K\nxv Molar fraction of water vapor in the moist air\nOutput: Cm in m^6/mol^2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.ConvergenceError",
    "page": "Docstrings",
    "title": "Psychro.ConvergenceError",
    "category": "type",
    "text": "ConvergenceError([msg, val, niter, err])\n\nException that is to be thrown when an iterative procedure fails to converge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Cwww",
    "page": "Docstrings",
    "title": "Psychro.Cwww",
    "category": "function",
    "text": "```Cwww(Tk)```\n\nSecond virial coefficient Cwww of saturated vapor eq 20 [2]\n\nTk Temperature in K\nOutput: Cwww in m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.DryAir",
    "page": "Docstrings",
    "title": "Psychro.DryAir",
    "category": "type",
    "text": "Type used to model dry air\n\nThis uses the formulations presente in the ASHRAE handbook Psychrometrics: Theory and Practice, reference [5].\n\nThe methods dealing with this type implement the equations of reference [2].\n\nSome thermodynamic properties are implemented as methods. Every method takes as arguments, the type Vaporas first argument and the temperature as the second. IfUnitful` package is used, any unit can be used. On the other hand if no units are provided, the packages assumes SI units all through. In particular:\n\nTemperature in K\nPressure in Pa\nLength in m\nQuantity of matter in mol\nMass in kg\nEnergy in J\n\nThe following methods are implemented:\n\nvolume(DryAir, T, P) specific volume\nvolumem(DryAir, T, P molar volume\ndensity(DryAir, T, P) density\nenthalpy(DryAir, T, P) specific enthalpy\nenthalpym(DryAir, T, P) molar enthalpy\nentropy(DryAir, T, P) specific entropy\nentropym(DryAir, T, P) molar entropy\ncompressfactor(DryAir, T, P) Compressibility factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Ma",
    "page": "Docstrings",
    "title": "Psychro.Ma",
    "category": "constant",
    "text": "Molecular weight of air in kg/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.MoistAir",
    "page": "Docstrings",
    "title": "Psychro.MoistAir",
    "category": "type",
    "text": "Type used to model moist air\n\nThis uses the formulations presente in the ASHRAE handbook Psychrometrics: Theory and Practice, reference [5]. \n\nThe temperature range is 173.15 < T < 474.15 K with pressures P < 5 MPa.\n\nThe methods dealing with this type implement the equations of references [1-2] to calculate some thermodynamics of real moits air.\n\nSome thermodynamic properties are implemented as methods. Every method takes as arguments, the type MoistAir as first argument, temperature as second argument, a type declaring how humidity is specified, the value of humidity using and pressure. If Unitful package is used, any unit can be used. On the other hand if no units are provided, the packages assumes SI units all through. In particular:\n\nTemperature in K\nPressure in Pa\nLength in m\nQuantity of matter in mol\nMass in kg\nEnergy in J\n\nTo specify humidity the following types are implemented:\n\nWetBulb for wet bulb temperature, actually adiabatic saturation temperature\nDewPoint Dew point temperature\nRelHum Relative humidity\nHumRat Humidity ratio (kg of vapor / kg of dry air)\nSpecHum Specific humidity (kg of vapor / kg of moist air)\nMolarFrac Molar fraction of water vapor.\n\nThe following methods are implemented:\n\nvolume(MoistAir, T, HumType, h, P) specific volume\nvolumem(MoistAir, T, HumType, h, P molar volume\ndensity(MoistAir, T, HumType, h, P) density\nenthalpy(MoistAir, T, HumType, h, P) specific enthalpy\nenthalpym(MoistAir, T, HumType, h, P) molar enthalpy\nentropy(MoistAir, T, HumType, h, P) specific entropy\nentropym(MoistAir, T, HumType, h, P) molar entropy\ncompressfactor(MoistAir, T, HumType, h, P) Compressibility factor.\n\nIt should be noted that the specific enthalpy, entropy and volume are calculated with respect to the mass of dry air. Therefore, 1 J/kg is actually 1 J per kg of dry air.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Mv",
    "page": "Docstrings",
    "title": "Psychro.Mv",
    "category": "constant",
    "text": "Molecular weight of water in kg/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Pws",
    "page": "Docstrings",
    "title": "Psychro.Pws",
    "category": "function",
    "text": "```Pws(Tk)```\n\nSaturation pressure of vapor pressure over liquid water or ice. This function calls either Pws_l or Pws_s. At a temperature of  273.16 both expressions are almost exactly the same (6 decimal figures).\n\nTk Temperature in K\nOutput: Pa\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Pws_l",
    "page": "Docstrings",
    "title": "Psychro.Pws_l",
    "category": "function",
    "text": "```Pws_l(Tk)```\n\nSaturation pressure of vapor pressure over liquid water. This implements equation 17 from [1].\n\nTk Temperature in K\nOutput: Pa\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Pws_s",
    "page": "Docstrings",
    "title": "Psychro.Pws_s",
    "category": "function",
    "text": "```Pws_s(Tk)```\n\nSaturation pressure of vapor pressure over ice. This implements equation 18 from [1].\n\nTk Temperature in K\nOutput: Pa\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.R",
    "page": "Docstrings",
    "title": "Psychro.R",
    "category": "constant",
    "text": "Universal gas constant kg m^2 /s^2 /K /mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.SpecHum",
    "page": "Docstrings",
    "title": "Psychro.SpecHum",
    "category": "type",
    "text": "Specific Humidity mv / (ma+mv)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.T0",
    "page": "Docstrings",
    "title": "Psychro.T0",
    "category": "constant",
    "text": "Melting point of water\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Tws",
    "page": "Docstrings",
    "title": "Psychro.Tws",
    "category": "function",
    "text": "```Tws(P)```\n\nCalculates the saturation temperature of water vapor.  This function is the inverse of function Pws(T).  First an approximation was obtained and then a Newton iteration is used to obtain more accurate data.\n\nP Saturation pressure in Pa\nOutput: Saturation temperature in K.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Vapor",
    "page": "Docstrings",
    "title": "Psychro.Vapor",
    "category": "type",
    "text": "Type used to model saturated water vapor\n\nThis uses the formulations presente in the ASHRAE handbook Psychrometrics: Theory and Practice, reference [5].\n\nThe methods dealing with this type implement the equations of reference [1].\n\nSome thermodynamic properties are implemented as methods. Every method takes as arguments, the type DryAir as first argument and the saturation temperature. If Unitful package is used, any unit can be used. On the other hand if no units are provided, the packages assumes SI units all through. In particular:\n\nTemperature in K\nPressure in Pa\nLength in m\nQuantity of matter in mol\nMass in kg\nEnergy in J\n\nThe following methods are implemented:\n\nvolume(Vapor, T) specific volume\nvolumem(Vapor, T) molar volume\ndensity(Vapor, T) density\nenthalpy(Vapor, T) specific enthalpy\nenthalpym(Vapor, T) molar enthalpy\nentropy(Vapor, T) specific entropy\nentropym(Vapor, T) molar entropy\ncompressfactor(Vapor, T) Compressibility factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Zair",
    "page": "Docstrings",
    "title": "Psychro.Zair",
    "category": "function",
    "text": "```Zair(Tk, P, EPS, MAXITER)```\n\nCompressibility factor of dry air.\n\nTk Temperature in K\nP Pressure in Pa\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: Z (nondimensional)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Zmoist",
    "page": "Docstrings",
    "title": "Psychro.Zmoist",
    "category": "function",
    "text": "```Zmoist(Tk, P, xv)```\n\nCompressibility factor of moist air.\n\nTk Temperature in K\nP Pressure in Pa\nxv molar fraction of water vapor.\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: Z (nondimensional)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.Zvapor",
    "page": "Docstrings",
    "title": "Psychro.Zvapor",
    "category": "function",
    "text": "Zvapor(Tk)\n\nCompressibility factor of saturated vapor. Eq. 21 reference [1].\n\nTk Temperature in K\nOutput: m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.a",
    "page": "Docstrings",
    "title": "Psychro.a",
    "category": "constant",
    "text": "Coefficients a_i to calculate enthalpy of moist air ref[2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.calcz",
    "page": "Docstrings",
    "title": "Psychro.calcz",
    "category": "function",
    "text": "calcz(vm, b0, c0, [EPS, [MAXITER, [relax]]])\n\nCalculates the compressibility factor using a virial equation:\n\nz = 1 + b₀/z + c₀/vₘ²\n\nThe algorithm initially uses as an initial guess only the b₀ virial  coefficient. Then it uses a Newton-Raphson algorithm to compute the compressibility factor\n\nb0 b₀ parameter of the virial equation\nc0 c₀ parameter of the virial equation\nEPS Convergence criterium\nMAXITER Maximim number of iterations\nrelax Sub-relaxation parameter if convergence is difficult.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.compressfactor",
    "page": "Docstrings",
    "title": "Psychro.compressfactor",
    "category": "function",
    "text": "compressfactor(DryAir, T, P[, out_unit=u\"m^3/kg\"])\ncompressfactor(Vapor, T[, out_unit=u\"m^3/kg\"])\ncompressfactor(MoistAir, T, HumidityType, hum, P[, out_unit=\"m^3/kg\"])\n\nCalculates the compressibility factor Z of a gas. In the case of moist air, parameters specifying the humidity shoud be added. \n\nIf Unitful units are used, all parameters of the function (except dimensionless) should have units associated. When no units are provided, all parameters should use SI units (and so does the return type). For further information, checkout the doc for Psychro module.\n\nTemperature should be in the range 173.15 K < T < 473.15 and pressure should be below 5 MPa.\n\nExamples\n\njulia> compressfactor(DryAir, 293.15, 101325.0)\n1.2044776705391136\n\njulia> compressfactor(DryAir, 20.0u\"°C\", 1.0u\"atm\")\n1.2044776705391136 kg m^-3\n\njulia> compressfactor(Vapor, 293.15)\n0.017308548277505224\n\njulia> compressfactor(Vapor, 20.0u\"°C\")\n0.017308548277505224 kg m^-3\n\njulia> compressfactor(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n1.1971436091840653\n\njulia> compressfactor(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\")\n1.195819185774941 kg m^-3\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.d",
    "page": "Docstrings",
    "title": "Psychro.d",
    "category": "constant",
    "text": "Coefficients d_i to calculate enthalpy of moist air ref[2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dBaa",
    "page": "Docstrings",
    "title": "Psychro.dBaa",
    "category": "function",
    "text": "```dBaa(Tk)```\n\nDerivative of Bₐₐ(T). Calculated from equation 10 [2].\n\nTk Temperature in K\nOutput: Bₐₐ in m^3/mol/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dBaw",
    "page": "Docstrings",
    "title": "Psychro.dBaw",
    "category": "function",
    "text": "```Baw(Tk)```\n\nDerivative of cross virial coefficient Bww of saturated vapor eq 15 [2]\n\nTk Temperature in K\nOutput: dBaw/dT in m^3/mol/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dBlin",
    "page": "Docstrings",
    "title": "Psychro.dBlin",
    "category": "function",
    "text": "```dBlin(Tk)```\n\nDerivative of virial coefficient dB\'/dT saturated vapor eq 15 [1]\n\nTk Temperature in K\nOutput: B\' in Pa^(-1)/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dBm",
    "page": "Docstrings",
    "title": "Psychro.dBm",
    "category": "function",
    "text": "```dBm(Tk,xv)```\n\nDerivative of first virial coefficient Bm of moist air of saturated vapor eq 2 [2]\n\nTk Temperature in K\nxv Molar fraction of water vapor in the moist air\nOutput: dBm/dT in m^3/mol/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dBww",
    "page": "Docstrings",
    "title": "Psychro.dBww",
    "category": "function",
    "text": "```dBww(Tk)```\n\nDerivative of virial coefficient dBww/dT of saturated vapor eq 19 [2]\n\nTk Temperature in K\nOutput: dBww/dT in m^3/mol/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dCaaa",
    "page": "Docstrings",
    "title": "Psychro.dCaaa",
    "category": "function",
    "text": "```dCaa(Tk)```\n\nDerivative of second virial coefficient Cₐₐₐ of dry air eq 11 [2].\n\nTk Temperature in K\nOutput: Bₐₐ in m^6/mol^2/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dCaaw",
    "page": "Docstrings",
    "title": "Psychro.dCaaw",
    "category": "function",
    "text": "```dCaaw(Tk)```\n\nDerivative of cross virial coefficient dCaaw/dT of saturated vapor eq 16 [2]\n\nTk Temperature in K\nOutput: dCaaw/dT in m^6/mol^2/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dCaww",
    "page": "Docstrings",
    "title": "Psychro.dCaww",
    "category": "function",
    "text": "```dCaww(Tk)```\n\nDerivative of cross virial coefficient dCaaw/dT of saturated vapor eq 17 [2]\n\nTk Temperature in K\nOutput: dCaww/dT in m^6/mol^2/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dClin",
    "page": "Docstrings",
    "title": "Psychro.dClin",
    "category": "function",
    "text": "```dClin(Tk)```\n\nDerivative of Second virial coefficient dC\'/dT saturated vapor eq 16 [1]\n\nTk Temperature in K\nOutput: B\' in Pa^(-2)/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dCm",
    "page": "Docstrings",
    "title": "Psychro.dCm",
    "category": "function",
    "text": "```dCm(Tk,xv)```\n\nDerivative of second virial coefficient Cm of moist air of saturated vapor eq 3 [2]\n\nTk Temperature in K\nxv Molar fraction of water vapor in the moist air\nOutput: dCm/dT in m^6/mol^2/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dCwww",
    "page": "Docstrings",
    "title": "Psychro.dCwww",
    "category": "function",
    "text": "```dCwww(Tk)```\n\nDerivative of second virial coefficient dCww/dT of saturated vapor eq 20 [2]\n\nTk Temperature in K\nOutput: dCwww/dT in m^3/mol/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dPws",
    "page": "Docstrings",
    "title": "Psychro.dPws",
    "category": "function",
    "text": "```dPws(Tk)```\n\nDerivative of saturation pressure of vapor pressure over liquid water and ice. This combines the functions dPws_l and dPws_s.\n\nTk Temperature in K\nOutput: Pa/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dPws_l",
    "page": "Docstrings",
    "title": "Psychro.dPws_l",
    "category": "function",
    "text": "```dPws_s(Tk)```\n\nDerivative of saturation pressure of vapor pressure over water. This implements the derivative of equation 17 from [1].\n\nTk Temperature in K\nOutput: Pa/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dPws_s",
    "page": "Docstrings",
    "title": "Psychro.dPws_s",
    "category": "function",
    "text": "```dPws_s(Tk)```\n\nDerivative of saturation pressure of vapor pressure over ice. This implements the derivative of equation 18 from [1].\n\nTk Temperature in K\nOutput: Pa/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.density",
    "page": "Docstrings",
    "title": "Psychro.density",
    "category": "function",
    "text": "density(DryAir, T, P[, out_unit=u\"m^3/kg\"])\ndensity(Vapor, T[, out_unit=u\"m^3/kg\"])\ndensity(MoistAir, T, HumidityType, hum, P[, out_unit=\"m^3/kg\"])\n\nCalculates the density volume of a gas. In the case of moist air, parameters specifying the humidity shoud be added. \n\nIf Unitful units are used, all parameters of the function (except dimensionless) should have units associated. When no units are provided, all parameters should use SI units (and so does the return type). For further information, checkout the doc for Psychro module.\n\nTemperature should be in the range 173.15 K < T < 473.15 and pressure should be below 5 MPa.\n\nExamples\n\njulia> density(DryAir, 293.15, 101325.0)\n1.2044776705391136\n\njulia> density(DryAir, 20.0u\"°C\", 1.0u\"atm\")\n1.2044776705391136 kg m^-3\n\njulia> density(Vapor, 293.15)\n0.017308548277505224\n\njulia> density(Vapor, 20.0u\"°C\")\n0.017308548277505224 kg m^-3\n\njulia> density(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n1.1971436091840653\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\")\n1.195819185774941 kg m^-3\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\", u\"lb/inch^3\")\n4.3201708903793606e-5 in^-3 lb\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.densitywater",
    "page": "Docstrings",
    "title": "Psychro.densitywater",
    "category": "function",
    "text": "densitywater(Tk)\n\nDensity of saturated water. Equation 5 from ref. [1].\n\nTk Temperature in K.\nOutput: density kg/m^3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.dewpoint",
    "page": "Docstrings",
    "title": "Psychro.dewpoint",
    "category": "function",
    "text": "Thermodynamic properties of moist air, dry air and saturated water vapor.\n\nThe methods listed below calculate thermodynamic properties of moist air:\n\nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \ndensity(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpy(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpym(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropy(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropym(MoistAir, T, HumidityType, humidity, P[, outunit])\ncompressfactor(MoistAir, T, HumidityType, humidity, P[, outunit])\ndewpoint(MoistAir, T, HumidityType, humidity, P[, outunit]) \nwetbulb(MoistAir, T, HumidityType, humidity, P[, outunit]) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nrelhum(MoistAir, T, HumidityType, humidity, P) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nspechum(MoistAir, T, HumidityType, humidity, P) \nmolarfrac(MoistAir, T, HumidityType, humidity, P)\n\nThe methods listed above calculate the following thermodynamic properties of moist air:\n\nvolume Specific volume \nvolumem Molar volume\ndensity Density\nenthalpy Specific enthalpy\nenthalpym Molar enthalpy\nentropy Specific entropy\nentropym Molar entropy\ncompressfactor Compressibility factor Z \ndewpoint Dew point temperature\nwetbulb Adiabatic saturation temperature\nhumrat Humidity ratio\nrelhum Relative humidity\nspechum Specific humidity\nmolarfrac Molar fraction of water vapor\n\nThe humidity is specified using two parameters:\n\nHow the humidity is specified\nThe actual value of humidity\n\nThe following types are used to characterize the humidity.\n\nWetBulb for wet bulb temperature, actually adiabatic saturation temperature\nDewPoint Dew point temperature\nRelHum Relative humidity\nHumRat Humidity ratio (kg of vapor / kg of dry air)\nSpecHum Specific humidity (kg of vapor / kg of moist air)\nMolarFrac Molar fraction of water vapor.\n\nExamples\n\njulia> volume(MoistAir, 293.15, WetBulb, 291.15, 101325.0)\n0.8464079202783964\n\njulia> volume(MoistAir, 293.15, DewPoint, 291.15, 101325.0)\n0.8475219875187474\n\njulia> volume(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.843889817602806\n\njulia> volume(MoistAir, 20.0u\"°C\", DewPoint, 60.0u\"°F\", 1.0u\"atm\")\n0.8449934929585231 kg^-1 m^3\n\njulia> volumem(MoistAir, 293.15, RelHum, 0.5, 93000.0)\n0.026199080086890276\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1.0976075893895811 kg m^-3\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"lb/inch^3\")\n3.965358988338535e-5 in^-3 lb\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n50667.43014746832 kg^-1 J\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1439.6551689935861 J mol^-1\n\njulia> compressfactor(MoistAir, -90.0u\"°C\", RelHum, 0.01, 4.5u\"MPa\")\n0.8552758629097985\n\njulia> wetbulb(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n17.0 °C\n\njulia> dewpoint(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n15.475836053510477 °C\n\njulia> humrat(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.012032930694441925\n\njulia> relhum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.7517801524436909\n\njulia> spechum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.011889860823189923\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.efactor2",
    "page": "Docstrings",
    "title": "Psychro.efactor2",
    "category": "function",
    "text": "```e_factor(Tk,P)```\n\nEnhancement factor of moist air.  Uses an iterative procedure to calculate the Enhancement factor defined  in equation 18 [2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.enthalpy",
    "page": "Docstrings",
    "title": "Psychro.enthalpy",
    "category": "function",
    "text": "enthalpy(DryAir, T, P[, out_unit=u\"m^3/kg\"])\nenthalpy(Vapor, T[, out_unit=u\"m^3/kg\"])\nenthalpy(MoistAir, T, HumidityType, hum, P[, out_unit=\"m^3/kg\"])\n\nCalculates the specific enthalpy of a gas. In the case of moist air, parameters specifying the humidity shoud be added and the the property is based on the mass of dry air not mass of the gas (as is the case for DryAir or Vapor). \n\nIf Unitful units are used, all parameters of the function (except dimensionless) should have units associated. When no units are provided, all parameters should use SI units (and so does the return type). For further information, checkout the doc for Psychro module.\n\nTemperature should be in the range 173.15 K < T < 473.15 and pressure should be below 5 MPa.\n\nExamples\n\njulia> enthalpy(DryAir, 293.15, 101325.0)\n20121.2722813185\n\njulia> enthalpy(DryAir, 20.0u\"°C\", 1.0u\"atm\")\n20121.2722813185 kg^-1 J\n\njulia> enthalpy(Vapor, 293.15)\n2.5374003352412493e6\n\njulia> enthalpy(Vapor, 20.0u\"°C\")\n2.5374003352412493e6 kg^-1 J\n\njulia> enthalpy(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n46142.773129687484\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\")\n50944.84575377501 kg^-1 J\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\", u\"J/lb\")\n23108.193324739244 J lb^-1\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.enthalpyair",
    "page": "Docstrings",
    "title": "Psychro.enthalpyair",
    "category": "function",
    "text": "enthalpyair(Tk)\n\nSpecific enthalpy of dry air. Equation 13 of reference [2]\n\nTk Temperature in K\nP Pressure in Pa\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: m^3/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.enthalpyice",
    "page": "Docstrings",
    "title": "Psychro.enthalpyice",
    "category": "function",
    "text": "enthalpyice(Tk)\n\nSpecific enthalpy of saturated ice. Equation 3 of ref. [1].\n\nTk Temperature in K\nOutput: J/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.enthalpym",
    "page": "Docstrings",
    "title": "Psychro.enthalpym",
    "category": "function",
    "text": "enthalpym(DryAir, T, P[, out_unit=u\"m^3/kg\"])\nenthalpym(Vapor, T[, out_unit=u\"m^3/kg\"])\nenthalpym(MoistAir, T, HumidityType, hum, P[, out_unit=\"m^3/kg\"])\n\nCalculates the molar enthalpy of a gas. In the case of moist air, parameters specifying the humidity shoud be added. \n\nIf Unitful units are used, all parameters of the function (except dimensionless) should have units associated. When no units are provided, all parameters should use SI units (and so does the return type). For further information, checkout the doc for Psychro module.\n\nTemperature should be in the range 173.15 K < T < 473.15 and pressure should be below 5 MPa.\n\nExamples\n\njulia> enthalpym(DryAir, 293.15, 101325.0)\n582.7824697199684\n\njulia> enthalpym(DryAir, 20.0u\"°C\", 1.0u\"atm\")\n582.7824697199684 J mol^-1\n\njulia> enthalpy(Vapor, 293.15)\n2.5374003352412493e6\n\njulia> enthalpym(Vapor, 20.0u\"°C\")\n45711.977511464975 J mol^-1\n\njulia> enthalpym(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n1314.7744549269437\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\")\n1447.2684837312868 J mol^-1\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\", u\"kJ/kmol\")\n1447.2684837312868 kJ kmol^-1\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.enthalpymoist",
    "page": "Docstrings",
    "title": "Psychro.enthalpymoist",
    "category": "function",
    "text": "enthalpymoist(Tk, P, xv, EPS=1e-8, MAXITER=100)\n\nSpecific enthalphy of moist air defined as enthalpy per kg of dry air.\n\nTk Temperature in K\nP Pressure in Pa\nxv molar fraction of water vapor.\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: J/kg of dry air\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.enthalpyvapor",
    "page": "Docstrings",
    "title": "Psychro.enthalpyvapor",
    "category": "function",
    "text": "enthalpyvapor(Tk)\n\nSpecific enthalpy of saturated water vapor. Equation 19 of ref. [1].\n\nEquation 19 ha a problem since the terms using the virial coefficients are actually molar enthalpies not specific. Dividing these terms by Mv solves any issues and the equations match the table in the appendix!\n\nTk Temperature in K\nOutput: J/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.enthalpywater",
    "page": "Docstrings",
    "title": "Psychro.enthalpywater",
    "category": "function",
    "text": "enthalpywater(Tk)\n\nSpecific enthalpy of saturated water. Equations 6-11 of ref. [1].\n\nTk Temperature in K\nOutput: J/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.enthalpywi",
    "page": "Docstrings",
    "title": "Psychro.enthalpywi",
    "category": "function",
    "text": "enthalpywi(Tk)\n\nSpecific enthalpy of saturated water in condensed phase (ice or water).\n\nTk Temperature in K\nOutput: J/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.entropy",
    "page": "Docstrings",
    "title": "Psychro.entropy",
    "category": "function",
    "text": "entropy(DryAir, T, P[, out_unit=u\"m^3/kg\"])\nentropy(Vapor, T[, out_unit=u\"m^3/kg\"])\nentropy(MoistAir, T, HumidityType, hum, P[, out_unit=\"m^3/kg\"])\n\nCalculates the specific entropy of a gas. In the case of moist air, parameters specifying the humidity shoud be added and the the property is based on the mass of dry air not mass of the gas (as is the case for DryAir or Vapor). \n\nIf Unitful units are used, all parameters of the function (except dimensionless) should have units associated. When no units are provided, all parameters should use SI units (and so does the return type). For further information, checkout the doc for Psychro module.\n\nTemperature should be in the range 173.15 K < T < 473.15 and pressure should be below 5 MPa.\n\nExamples\n\njulia> entropy(DryAir, 293.15, 101325.0)\n71.09262577195514\n\njulia> entropy(DryAir, 20.0u\"°C\", 1.0u\"atm\")\n71.09262577195514 kg^-1 J K^-1\n\njulia> entropy(Vapor, 293.15)\n8665.873003613997\n\njulia> entropy(Vapor, 20.0u\"°C\")\n8665.873003613997 kg^-1 J K^-1\n\njulia> entropy(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n166.33538729355692\n\njulia> entropy(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\")\n182.97140931650105 kg^-1 J K^-1\n\njulia> entropy(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\", u\"kJ/lb/°F\")\n0.04610801955228433 °F^-1 kJ lb^-1\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.entropyair",
    "page": "Docstrings",
    "title": "Psychro.entropyair",
    "category": "function",
    "text": "entropyair(Tk)\n\nSpecific entropy of dry air. Equation 14 of reference [2]\n\nTk Temperature in K\nP Pressure in Pa\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: m^3/(kg.K)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.entropym",
    "page": "Docstrings",
    "title": "Psychro.entropym",
    "category": "function",
    "text": "entropym(DryAir, T, P[, out_unit=u\"m^3/kg\"])\nentropym(Vapor, T[, out_unit=u\"m^3/kg\"])\nentropym(MoistAir, T, HumidityType, hum, P[, out_unit=\"m^3/kg\"])\n\nCalculates the molar entropy of a gas. In the case of moist air, parameters specifying the humidity shoud be added. \n\nIf Unitful units are used, all parameters of the function (except dimensionless) should have units associated. When no units are provided, all parameters should use SI units (and so does the return type). For further information, checkout the doc for Psychro module.\n\nTemperature should be in the range 173.15 K < T < 473.15 and pressure should be below 5 MPa.\n\nExamples\n\njulia> entropym(DryAir, 293.15, 101325.0)\n2.0590912665460226\n\njulia> entropym(DryAir, 20.0u\"°C\", 1.0u\"atm\")\n2.0590912665460226 J K^-1 mol^-1\n\njulia> entropy(Vapor, 293.15)\n8665.873003613997\n\njulia> entropym(Vapor, 20.0u\"°C\")\n156.11812860454717 J K^-1 mol^-1\n\njulia> entropym(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n4.739496639035868\n\njulia> entropym(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\")\n5.197949865380578 J K^-1 mol^-1\n\njulia> entropym(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\", u\"kJ/kmol/°F\")\n2.8877499252114327 °F^-1 kJ kmol^-1\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.entropymoist",
    "page": "Docstrings",
    "title": "Psychro.entropymoist",
    "category": "function",
    "text": "entropymoist(Tk, P, xv, EPS=1e-8, MAXITER=100)\n\nSpecific entropy of moist air defined as entropy per kg of dry air.\n\nTk Temperature in K\nP Pressure in Pa\nxv molar fraction of water vapor.\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: J/kg/K of dry air\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.entropyvapor",
    "page": "Docstrings",
    "title": "Psychro.entropyvapor",
    "category": "function",
    "text": "entropyvapor(Tk)\n\nSpecific entropy of saturated vapor. Eq. 20 reference [1].\n\nTk Temperature in K\nOutput: J/kg/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.g",
    "page": "Docstrings",
    "title": "Psychro.g",
    "category": "constant",
    "text": "Coefficients g_i to calculate enthalpy of moist air ref[2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.henryk",
    "page": "Docstrings",
    "title": "Psychro.henryk",
    "category": "function",
    "text": "henryk(Tk)\n\nHenry\'s coefficient for solubility of air in water. Implements equations 24 and 25 from ref. [2]. See reference [3] Valid for temperatures between 273.15 K and 500 K\n\nTk Temperature in K\nOutput: k in atm/mol fract * 10^(-4)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.henryk_N2",
    "page": "Docstrings",
    "title": "Psychro.henryk_N2",
    "category": "function",
    "text": "henryk_N2(Tk)\n\nHenry\'s coefficient for solubility of N2 in water. Implements equation 23 from ref. [2]. See reference [3] Valid for temperatures between 273.15 K and 500 K\n\nTk Temperature in K\nOutput: k in atm/mol * 10^(-4)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.henryk_O2",
    "page": "Docstrings",
    "title": "Psychro.henryk_O2",
    "category": "function",
    "text": "henryk_O2(Tk)\n\nHenry\'s coefficient for solubility of O2 in water. Implements equation 23 from ref. [2]. See reference [3] Valid for temperatures between 273.15 K and 500 K\n\nTk Temperature in K\nOutput: k in atm/mol * 10^(-4)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.humrat",
    "page": "Docstrings",
    "title": "Psychro.humrat",
    "category": "function",
    "text": "Thermodynamic properties of moist air, dry air and saturated water vapor.\n\nThe methods listed below calculate thermodynamic properties of moist air:\n\nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \ndensity(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpy(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpym(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropy(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropym(MoistAir, T, HumidityType, humidity, P[, outunit])\ncompressfactor(MoistAir, T, HumidityType, humidity, P[, outunit])\ndewpoint(MoistAir, T, HumidityType, humidity, P[, outunit]) \nwetbulb(MoistAir, T, HumidityType, humidity, P[, outunit]) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nrelhum(MoistAir, T, HumidityType, humidity, P) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nspechum(MoistAir, T, HumidityType, humidity, P) \nmolarfrac(MoistAir, T, HumidityType, humidity, P)\n\nThe methods listed above calculate the following thermodynamic properties of moist air:\n\nvolume Specific volume \nvolumem Molar volume\ndensity Density\nenthalpy Specific enthalpy\nenthalpym Molar enthalpy\nentropy Specific entropy\nentropym Molar entropy\ncompressfactor Compressibility factor Z \ndewpoint Dew point temperature\nwetbulb Adiabatic saturation temperature\nhumrat Humidity ratio\nrelhum Relative humidity\nspechum Specific humidity\nmolarfrac Molar fraction of water vapor\n\nThe humidity is specified using two parameters:\n\nHow the humidity is specified\nThe actual value of humidity\n\nThe following types are used to characterize the humidity.\n\nWetBulb for wet bulb temperature, actually adiabatic saturation temperature\nDewPoint Dew point temperature\nRelHum Relative humidity\nHumRat Humidity ratio (kg of vapor / kg of dry air)\nSpecHum Specific humidity (kg of vapor / kg of moist air)\nMolarFrac Molar fraction of water vapor.\n\nExamples\n\njulia> volume(MoistAir, 293.15, WetBulb, 291.15, 101325.0)\n0.8464079202783964\n\njulia> volume(MoistAir, 293.15, DewPoint, 291.15, 101325.0)\n0.8475219875187474\n\njulia> volume(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.843889817602806\n\njulia> volume(MoistAir, 20.0u\"°C\", DewPoint, 60.0u\"°F\", 1.0u\"atm\")\n0.8449934929585231 kg^-1 m^3\n\njulia> volumem(MoistAir, 293.15, RelHum, 0.5, 93000.0)\n0.026199080086890276\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1.0976075893895811 kg m^-3\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"lb/inch^3\")\n3.965358988338535e-5 in^-3 lb\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n50667.43014746832 kg^-1 J\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1439.6551689935861 J mol^-1\n\njulia> compressfactor(MoistAir, -90.0u\"°C\", RelHum, 0.01, 4.5u\"MPa\")\n0.8552758629097985\n\njulia> wetbulb(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n17.0 °C\n\njulia> dewpoint(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n15.475836053510477 °C\n\njulia> humrat(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.012032930694441925\n\njulia> relhum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.7517801524436909\n\njulia> spechum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.011889860823189923\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.k",
    "page": "Docstrings",
    "title": "Psychro.k",
    "category": "constant",
    "text": "Coefficients k_i to calculate enthalpy of moist air ref[2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.kappa_l",
    "page": "Docstrings",
    "title": "Psychro.kappa_l",
    "category": "function",
    "text": "kappa_l(Tk)\n\nIsothermal compressibility of saturated liquid water. Equation 21, ref. [2]. Range of applicability 0°C - 150°C but can be extended up to 200°C More details in reference [4].\n\nTk Temperature in K\nOutput: κ in 1/Pa\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.kappa_s",
    "page": "Docstrings",
    "title": "Psychro.kappa_s",
    "category": "function",
    "text": "kappa_s(Tk)\n\nIsothermal compressibility of ice. Equation 22, ref. [2].\n\nTk Temperature in K\nOutput: κ in 1/Pa\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.lnf2",
    "page": "Docstrings",
    "title": "Psychro.lnf2",
    "category": "function",
    "text": "```lnf(Tk, P, xas)```\n\nAuxiliary function used to calculate the enhancement factor. Actually, this function implements the RHS of eq. 18 of [2].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarenthalpyair",
    "page": "Docstrings",
    "title": "Psychro.molarenthalpyair",
    "category": "function",
    "text": "molarenthalpyair(Tk)\n\nMolar enthalpy of dry air. Equation 13 of reference [2]\n\nTk Temperature in K\nP Pressure in Pa\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarenthalpymoist",
    "page": "Docstrings",
    "title": "Psychro.molarenthalpymoist",
    "category": "function",
    "text": "molarenthalpymoist(Tk, P, xv, EPS=1e-8, MAXITER=100)\n\nMolar enthalphy of moist air defined as enthalpy dry air.\n\nTk Temperature in K\nP Pressure in Pa\nxv molar fraction of water vapor.\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: J/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarentropyair",
    "page": "Docstrings",
    "title": "Psychro.molarentropyair",
    "category": "function",
    "text": "molarentropyair(Tk)\n\nSpecific entropy of dry air. Equation 14 of reference [2]\n\nTk Temperature in K\nP Pressure in Pa\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: m^3/(kg.K)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarentropymoist",
    "page": "Docstrings",
    "title": "Psychro.molarentropymoist",
    "category": "function",
    "text": "molarentropymoist(Tk, P, xv, EPS=1e-8, MAXITER=100)\n\nMolar entropy of moist air defined as entropy per kg of dry air.\n\nTk Temperature in K\nP Pressure in Pa\nxv molar fraction of water vapor.\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: J/mol/K of dry air\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarentropyvapor",
    "page": "Docstrings",
    "title": "Psychro.molarentropyvapor",
    "category": "function",
    "text": "molarentropyvapor(Tk)\n\nMolar entropy of saturated vapor. Eq. 20 reference [1].\n\nTk Temperature in K\nOutput: J/mol/K\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarfrac",
    "page": "Docstrings",
    "title": "Psychro.molarfrac",
    "category": "function",
    "text": "Thermodynamic properties of moist air, dry air and saturated water vapor.\n\nThe methods listed below calculate thermodynamic properties of moist air:\n\nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \ndensity(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpy(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpym(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropy(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropym(MoistAir, T, HumidityType, humidity, P[, outunit])\ncompressfactor(MoistAir, T, HumidityType, humidity, P[, outunit])\ndewpoint(MoistAir, T, HumidityType, humidity, P[, outunit]) \nwetbulb(MoistAir, T, HumidityType, humidity, P[, outunit]) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nrelhum(MoistAir, T, HumidityType, humidity, P) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nspechum(MoistAir, T, HumidityType, humidity, P) \nmolarfrac(MoistAir, T, HumidityType, humidity, P)\n\nThe methods listed above calculate the following thermodynamic properties of moist air:\n\nvolume Specific volume \nvolumem Molar volume\ndensity Density\nenthalpy Specific enthalpy\nenthalpym Molar enthalpy\nentropy Specific entropy\nentropym Molar entropy\ncompressfactor Compressibility factor Z \ndewpoint Dew point temperature\nwetbulb Adiabatic saturation temperature\nhumrat Humidity ratio\nrelhum Relative humidity\nspechum Specific humidity\nmolarfrac Molar fraction of water vapor\n\nThe humidity is specified using two parameters:\n\nHow the humidity is specified\nThe actual value of humidity\n\nThe following types are used to characterize the humidity.\n\nWetBulb for wet bulb temperature, actually adiabatic saturation temperature\nDewPoint Dew point temperature\nRelHum Relative humidity\nHumRat Humidity ratio (kg of vapor / kg of dry air)\nSpecHum Specific humidity (kg of vapor / kg of moist air)\nMolarFrac Molar fraction of water vapor.\n\nExamples\n\njulia> volume(MoistAir, 293.15, WetBulb, 291.15, 101325.0)\n0.8464079202783964\n\njulia> volume(MoistAir, 293.15, DewPoint, 291.15, 101325.0)\n0.8475219875187474\n\njulia> volume(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.843889817602806\n\njulia> volume(MoistAir, 20.0u\"°C\", DewPoint, 60.0u\"°F\", 1.0u\"atm\")\n0.8449934929585231 kg^-1 m^3\n\njulia> volumem(MoistAir, 293.15, RelHum, 0.5, 93000.0)\n0.026199080086890276\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1.0976075893895811 kg m^-3\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"lb/inch^3\")\n3.965358988338535e-5 in^-3 lb\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n50667.43014746832 kg^-1 J\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1439.6551689935861 J mol^-1\n\njulia> compressfactor(MoistAir, -90.0u\"°C\", RelHum, 0.01, 4.5u\"MPa\")\n0.8552758629097985\n\njulia> wetbulb(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n17.0 °C\n\njulia> dewpoint(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n15.475836053510477 °C\n\njulia> humrat(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.012032930694441925\n\njulia> relhum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.7517801524436909\n\njulia> spechum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.011889860823189923\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarfracmoist_sat",
    "page": "Docstrings",
    "title": "Psychro.molarfracmoist_sat",
    "category": "function",
    "text": "molarfracmoist_sat(Tk, P)\n\nMolar fraction of water vapor in saturated moist air\n\nTk Temperature in K\nP Pressure in Pa\nOutput: molar fraction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarvolumeair",
    "page": "Docstrings",
    "title": "Psychro.molarvolumeair",
    "category": "function",
    "text": "molarvolumeair(Tk)\n\nMolar volume of dry air. Equation 12 of reference [1]. This function requires iteration to compute the volume.\n\nTk Temperature in K\nP Pressure in Pa\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: molar volume in m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarvolumemoist",
    "page": "Docstrings",
    "title": "Psychro.molarvolumemoist",
    "category": "function",
    "text": "```molarvolumemoist```\n\nMolar volume of moist air given the molar fraction of water vapor. Assumes a real gas.\n\nTk Temperature in K\nP Pressure in Pa\nxv  Molar fraction of water vapor\nOutput: molar volume in m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.molarvolvapor",
    "page": "Docstrings",
    "title": "Psychro.molarvolvapor",
    "category": "function",
    "text": "volumevapor(Tk)\n\nMolar volume of saturated vapor. Eq. 21 reference [1].\n\nTk Temperature in K\nOutput: m^3/mol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.relhum",
    "page": "Docstrings",
    "title": "Psychro.relhum",
    "category": "function",
    "text": "Thermodynamic properties of moist air, dry air and saturated water vapor.\n\nThe methods listed below calculate thermodynamic properties of moist air:\n\nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \ndensity(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpy(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpym(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropy(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropym(MoistAir, T, HumidityType, humidity, P[, outunit])\ncompressfactor(MoistAir, T, HumidityType, humidity, P[, outunit])\ndewpoint(MoistAir, T, HumidityType, humidity, P[, outunit]) \nwetbulb(MoistAir, T, HumidityType, humidity, P[, outunit]) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nrelhum(MoistAir, T, HumidityType, humidity, P) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nspechum(MoistAir, T, HumidityType, humidity, P) \nmolarfrac(MoistAir, T, HumidityType, humidity, P)\n\nThe methods listed above calculate the following thermodynamic properties of moist air:\n\nvolume Specific volume \nvolumem Molar volume\ndensity Density\nenthalpy Specific enthalpy\nenthalpym Molar enthalpy\nentropy Specific entropy\nentropym Molar entropy\ncompressfactor Compressibility factor Z \ndewpoint Dew point temperature\nwetbulb Adiabatic saturation temperature\nhumrat Humidity ratio\nrelhum Relative humidity\nspechum Specific humidity\nmolarfrac Molar fraction of water vapor\n\nThe humidity is specified using two parameters:\n\nHow the humidity is specified\nThe actual value of humidity\n\nThe following types are used to characterize the humidity.\n\nWetBulb for wet bulb temperature, actually adiabatic saturation temperature\nDewPoint Dew point temperature\nRelHum Relative humidity\nHumRat Humidity ratio (kg of vapor / kg of dry air)\nSpecHum Specific humidity (kg of vapor / kg of moist air)\nMolarFrac Molar fraction of water vapor.\n\nExamples\n\njulia> volume(MoistAir, 293.15, WetBulb, 291.15, 101325.0)\n0.8464079202783964\n\njulia> volume(MoistAir, 293.15, DewPoint, 291.15, 101325.0)\n0.8475219875187474\n\njulia> volume(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.843889817602806\n\njulia> volume(MoistAir, 20.0u\"°C\", DewPoint, 60.0u\"°F\", 1.0u\"atm\")\n0.8449934929585231 kg^-1 m^3\n\njulia> volumem(MoistAir, 293.15, RelHum, 0.5, 93000.0)\n0.026199080086890276\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1.0976075893895811 kg m^-3\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"lb/inch^3\")\n3.965358988338535e-5 in^-3 lb\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n50667.43014746832 kg^-1 J\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1439.6551689935861 J mol^-1\n\njulia> compressfactor(MoistAir, -90.0u\"°C\", RelHum, 0.01, 4.5u\"MPa\")\n0.8552758629097985\n\njulia> wetbulb(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n17.0 °C\n\njulia> dewpoint(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n15.475836053510477 °C\n\njulia> humrat(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.012032930694441925\n\njulia> relhum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.7517801524436909\n\njulia> spechum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.011889860823189923\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.spechum",
    "page": "Docstrings",
    "title": "Psychro.spechum",
    "category": "function",
    "text": "Thermodynamic properties of moist air, dry air and saturated water vapor.\n\nThe methods listed below calculate thermodynamic properties of moist air:\n\nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \ndensity(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpy(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpym(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropy(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropym(MoistAir, T, HumidityType, humidity, P[, outunit])\ncompressfactor(MoistAir, T, HumidityType, humidity, P[, outunit])\ndewpoint(MoistAir, T, HumidityType, humidity, P[, outunit]) \nwetbulb(MoistAir, T, HumidityType, humidity, P[, outunit]) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nrelhum(MoistAir, T, HumidityType, humidity, P) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nspechum(MoistAir, T, HumidityType, humidity, P) \nmolarfrac(MoistAir, T, HumidityType, humidity, P)\n\nThe methods listed above calculate the following thermodynamic properties of moist air:\n\nvolume Specific volume \nvolumem Molar volume\ndensity Density\nenthalpy Specific enthalpy\nenthalpym Molar enthalpy\nentropy Specific entropy\nentropym Molar entropy\ncompressfactor Compressibility factor Z \ndewpoint Dew point temperature\nwetbulb Adiabatic saturation temperature\nhumrat Humidity ratio\nrelhum Relative humidity\nspechum Specific humidity\nmolarfrac Molar fraction of water vapor\n\nThe humidity is specified using two parameters:\n\nHow the humidity is specified\nThe actual value of humidity\n\nThe following types are used to characterize the humidity.\n\nWetBulb for wet bulb temperature, actually adiabatic saturation temperature\nDewPoint Dew point temperature\nRelHum Relative humidity\nHumRat Humidity ratio (kg of vapor / kg of dry air)\nSpecHum Specific humidity (kg of vapor / kg of moist air)\nMolarFrac Molar fraction of water vapor.\n\nExamples\n\njulia> volume(MoistAir, 293.15, WetBulb, 291.15, 101325.0)\n0.8464079202783964\n\njulia> volume(MoistAir, 293.15, DewPoint, 291.15, 101325.0)\n0.8475219875187474\n\njulia> volume(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.843889817602806\n\njulia> volume(MoistAir, 20.0u\"°C\", DewPoint, 60.0u\"°F\", 1.0u\"atm\")\n0.8449934929585231 kg^-1 m^3\n\njulia> volumem(MoistAir, 293.15, RelHum, 0.5, 93000.0)\n0.026199080086890276\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1.0976075893895811 kg m^-3\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"lb/inch^3\")\n3.965358988338535e-5 in^-3 lb\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n50667.43014746832 kg^-1 J\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1439.6551689935861 J mol^-1\n\njulia> compressfactor(MoistAir, -90.0u\"°C\", RelHum, 0.01, 4.5u\"MPa\")\n0.8552758629097985\n\njulia> wetbulb(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n17.0 °C\n\njulia> dewpoint(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n15.475836053510477 °C\n\njulia> humrat(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.012032930694441925\n\njulia> relhum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.7517801524436909\n\njulia> spechum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.011889860823189923\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.volume",
    "page": "Docstrings",
    "title": "Psychro.volume",
    "category": "function",
    "text": "volume(DryAir, T, P[, out_unit=u\"m^3/kg\"])\nvolume(Vapor, T[, out_unit=u\"m^3/kg\"])\nvolume(MoistAir, T, HumidityType, hum, P[, out_unit=\"m^3/kg\"])\n\nCalculates the specific volume of a gas. In the case of moist air, parameters specifying the humidity shoud be added and the the property is based on the mass of dry air not mass of the gas (as is the case for DryAir or Vapor). \n\nIf Unitful units are used, all parameters of the function (except dimensionless) should have units associated. When no units are provided, all parameters should use SI units (and so does the return type). For further information, checkout the doc for Psychro module.\n\nTemperature should be in the range 173.15 K < T < 473.15 and pressure should be below 5 MPa.\n\nExamples\n\njulia> volume(DryAir, 293.15, 101325.0)\n0.8302353995092402\n\njulia> volume(DryAir, 20.0u\"°C\", 1.0u\"atm\")\n0.8302353995092402 kg^-1 m^3\n\njulia> volume(Vapor, 293.15)\n57.77492045936827\n\njulia> volume(Vapor, 20.0u\"°C\")\n57.77492045936827 kg^-1 m^3\n\njulia> volume(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.843889817602806\n\njulia> volume(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\")\n0.8464079202783964 kg^-1 m^3\n\njulia> volume(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\", u\"inch^3/lb\")\n23428.490579267214 in^3 lb^-1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.volumeair",
    "page": "Docstrings",
    "title": "Psychro.volumeair",
    "category": "function",
    "text": "volumeair\n\nSpecific volume of dry air. Uses molarvolumeair.\n\nTk Temperature in K\nP Pressure in Pa\nEPS: Acceptable error\nMAXITER: Maixmum number of iterations\nOutput: molar volume in m^3/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.volumeice",
    "page": "Docstrings",
    "title": "Psychro.volumeice",
    "category": "function",
    "text": "volumeice(Tk)\n\nSpecific volume of saturated ice. Equation 2 from ref. [1].\n\nTk Temperature in K.\nOutput: specific volume in m^3/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.volumem",
    "page": "Docstrings",
    "title": "Psychro.volumem",
    "category": "function",
    "text": "volumem(DryAir, T, P[, out_unit=u\"m^3/kg\"])\nvolumem(Vapor, T[, out_unit=u\"m^3/kg\"])\nvolumem(MoistAir, T, HumidityType, hum, P[, out_unit=\"m^3/kg\"])\n\nCalculates the molar volume of a gas. In the case of moist air, parameters specifying the humidity shoud be added. \n\nIf Unitful units are used, all parameters of the function (except dimensionless) should have units associated. When no units are provided, all parameters should use SI units (and so does the return type). For further information, checkout the doc for Psychro module.\n\nTemperature should be in the range 173.15 K < T < 473.15 and pressure should be below 5 MPa.\n\nExamples\n\njulia> volumem(DryAir, 293.15, 101325.0)\n0.024046522993685877\n\njulia> volumem(DryAir, 20.0u\"°C\", 1.0u\"atm\")\n0.024046522993685877 m^3 mol^-1\n\njulia> volumem(Vapor, 293.15)\n1.040831369053248\n\njulia> volumem(Vapor, 20.0u\"°C\")\n1.040831369053248 m^3 mol^-1\n\njulia> volumem(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.02404547233948706\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\")\n0.024045209859305458 m^3 mol^-1\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 18.0u\"°C\", 1.0u\"atm\", u\"inch^3/mol\")\n1467.32873315839 in^3 mol^-1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.volumemoist",
    "page": "Docstrings",
    "title": "Psychro.volumemoist",
    "category": "function",
    "text": "```volumemoist```\n\nSpecific volume of moist air given the molar fraction of water vapor. Assumes a real gas. The specific volume is defined as the volume occupied by a mixture of dry air and water vapor per kg of dry air.\n\nTk Temperature in K\nP Pressure in Pa\nxv  Molar fraction of water vapor\nOutput: molar volume in m^3/kg of dry air.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.volumevapor",
    "page": "Docstrings",
    "title": "Psychro.volumevapor",
    "category": "function",
    "text": "volumevapor(Tk)\n\nSpecific volume of saturated vapor. Eq. 21 reference [1].\n\nTk Temperature in K\nOutput: m^3/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.volumewater",
    "page": "Docstrings",
    "title": "Psychro.volumewater",
    "category": "function",
    "text": "volumewater(Tk)\n\nSpecific volume of saturated water. Inverse of equation 5 from ref. [1].\n\nTk Temperature in K.\nOutput: specific volume in m^3/kg\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Psychro.wetbulb",
    "page": "Docstrings",
    "title": "Psychro.wetbulb",
    "category": "function",
    "text": "Thermodynamic properties of moist air, dry air and saturated water vapor.\n\nThe methods listed below calculate thermodynamic properties of moist air:\n\nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \nvolume(MoistAir, T, HumidityType, humidity, P[, outunit]) \ndensity(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpy(MoistAir, T, HumidityType, humidity, P[, outunit])\nenthalpym(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropy(MoistAir, T, HumidityType, humidity, P[, outunit])\nentropym(MoistAir, T, HumidityType, humidity, P[, outunit])\ncompressfactor(MoistAir, T, HumidityType, humidity, P[, outunit])\ndewpoint(MoistAir, T, HumidityType, humidity, P[, outunit]) \nwetbulb(MoistAir, T, HumidityType, humidity, P[, outunit]) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nrelhum(MoistAir, T, HumidityType, humidity, P) \nhumrat(MoistAir, T, HumidityType, humidity, P) \nspechum(MoistAir, T, HumidityType, humidity, P) \nmolarfrac(MoistAir, T, HumidityType, humidity, P)\n\nThe methods listed above calculate the following thermodynamic properties of moist air:\n\nvolume Specific volume \nvolumem Molar volume\ndensity Density\nenthalpy Specific enthalpy\nenthalpym Molar enthalpy\nentropy Specific entropy\nentropym Molar entropy\ncompressfactor Compressibility factor Z \ndewpoint Dew point temperature\nwetbulb Adiabatic saturation temperature\nhumrat Humidity ratio\nrelhum Relative humidity\nspechum Specific humidity\nmolarfrac Molar fraction of water vapor\n\nThe humidity is specified using two parameters:\n\nHow the humidity is specified\nThe actual value of humidity\n\nThe following types are used to characterize the humidity.\n\nWetBulb for wet bulb temperature, actually adiabatic saturation temperature\nDewPoint Dew point temperature\nRelHum Relative humidity\nHumRat Humidity ratio (kg of vapor / kg of dry air)\nSpecHum Specific humidity (kg of vapor / kg of moist air)\nMolarFrac Molar fraction of water vapor.\n\nExamples\n\njulia> volume(MoistAir, 293.15, WetBulb, 291.15, 101325.0)\n0.8464079202783964\n\njulia> volume(MoistAir, 293.15, DewPoint, 291.15, 101325.0)\n0.8475219875187474\n\njulia> volume(MoistAir, 293.15, RelHum, 0.7, 101325.0)\n0.843889817602806\n\njulia> volume(MoistAir, 20.0u\"°C\", DewPoint, 60.0u\"°F\", 1.0u\"atm\")\n0.8449934929585231 kg^-1 m^3\n\njulia> volumem(MoistAir, 293.15, RelHum, 0.5, 93000.0)\n0.026199080086890276\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1.0976075893895811 kg m^-3\n\njulia> density(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"lb/inch^3\")\n3.965358988338535e-5 in^-3 lb\n\njulia> volumem(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"inch^3/kmol\")\n1.598733210336603e6 in^3 kmol^-1\n\njulia> enthalpy(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n50667.43014746832 kg^-1 J\n\njulia> enthalpym(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n1439.6551689935861 J mol^-1\n\njulia> compressfactor(MoistAir, -90.0u\"°C\", RelHum, 0.01, 4.5u\"MPa\")\n0.8552758629097985\n\njulia> wetbulb(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n17.0 °C\n\njulia> dewpoint(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\", u\"°C\")\n15.475836053510477 °C\n\njulia> humrat(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.012032930694441925\n\njulia> relhum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.7517801524436909\n\njulia> spechum(MoistAir, 20.0u\"°C\", WetBulb, 17.0u\"°C\", 93u\"kPa\")\n0.011889860823189923\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Psychro.@polyevalPsychro.AbstractFluidPsychro.AbstractMaterialPsychro.BaaPsychro.BawPsychro.BlinPsychro.BmPsychro.BwwPsychro.CaaaPsychro.CaawPsychro.CawwPsychro.ClinPsychro.CmPsychro.ConvergenceErrorPsychro.CwwwPsychro.DensityPsychro.DewPointPsychro.DryAirPsychro.EnthalpyPsychro.EntropyPsychro.HumRatPsychro.LPsychro.MPsychro.MaPsychro.MoistAirPsychro.MolarFracPsychro.MvPsychro.PressurePsychro.PsychroPsychro.PsychroPropertyPsychro.PwsPsychro.Pws_lPsychro.Pws_sPsychro.RPsychro.RelHumPsychro.SpecHumPsychro.T0Psychro.TemperaturePsychro.ThermodynamicPropertyPsychro.TwsPsychro.VaporPsychro.VolumePsychro.WetBulbPsychro.ZairPsychro.ZmoistPsychro.ZvaporPsychro.aPsychro.aux_WBPsychro.calc_W_from_BPsychro.calcdewpointPsychro.calcwetbulbPsychro.calczPsychro.compressfactorPsychro.dPsychro.dBaaPsychro.dBawPsychro.dBlinPsychro.dBmPsychro.dBwwPsychro.dCaaaPsychro.dCaawPsychro.dCawwPsychro.dClinPsychro.dCmPsychro.dCwwwPsychro.dPwsPsychro.dPws_lPsychro.dPws_sPsychro.densityPsychro.densitywaterPsychro.dewpointPsychro.dimlessPsychro.efactorPsychro.efactor2Psychro.enthalpyPsychro.enthalpyairPsychro.enthalpyicePsychro.enthalpymPsychro.enthalpymoistPsychro.enthalpyvaporPsychro.enthalpywaterPsychro.enthalpywiPsychro.entropyPsychro.entropyairPsychro.entropymPsychro.entropymoistPsychro.entropyvaporPsychro.evalPsychro.gPsychro.ggPsychro.henrykPsychro.henryk_N2Psychro.henryk_O2Psychro.hhPsychro.humratPsychro.includePsychro.kPsychro.kappa_fPsychro.kappa_lPsychro.kappa_sPsychro.lnfPsychro.lnf2Psychro.mmPsychro.molarenthalpyairPsychro.molarenthalpymoistPsychro.molarentropyairPsychro.molarentropymoistPsychro.molarentropyvaporPsychro.molarfracPsychro.molarfracmoist_satPsychro.molarvolumeairPsychro.molarvolumemoistPsychro.molarvolvaporPsychro.ndimPsychro.percPsychro.relhumPsychro.spechumPsychro.uDPsychro.uHPsychro.uPPsychro.uSPsychro.uTPsychro.uVPsychro.umDPsychro.umHPsychro.umSPsychro.umVPsychro.valPsychro.volumePsychro.volumeairPsychro.volumeicePsychro.volumemPsychro.volumemoistPsychro.volumevaporPsychro.volumewaterPsychro.wetbulbPsychro.wwPsychro.ℓ"
},

]}
