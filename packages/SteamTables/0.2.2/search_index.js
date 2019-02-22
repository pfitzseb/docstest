var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SteamTables-1",
    "page": "Readme",
    "title": "SteamTables",
    "category": "section",
    "text": "A Julia implementation of the IAPWS-IF97 properties of water and steam. Provides the Gibbs and Helmholtz free energies, enthalpy, entropy, Cp, Cv and sonic velocity.Inputs are either P&T, P&h or P&s.(Image: SteamTables)Linux and macOS: (Image: Build Status)Windows: (Image: Build Status)(Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Exported-functions-1",
    "page": "Readme",
    "title": "Exported functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Single-input-1",
    "page": "Readme",
    "title": "Single input",
    "category": "section",
    "text": "Psat(T) and Tsat(P) returns the saturation linearindices"
},

{
    "location": "#Two-inputs-1",
    "page": "Readme",
    "title": "Two inputs",
    "category": "section",
    "text": ""
},

{
    "location": "#P-and-T-1",
    "page": "Readme",
    "title": "P and T",
    "category": "section",
    "text": "SpecificG, SpecificF, SpecificV, SpecificU, SpecificS, SpecificH, SpecificCP, SpecificCV, SpeedOfSound"
},

{
    "location": "#P-and-h-1",
    "page": "Readme",
    "title": "P and h",
    "category": "section",
    "text": "SpecificGPh, SpecificFPh, SpecificVPh, SpecificUPh, SpecificSPh, SpecificHPh, SpecificCPPh, SpecificCVPh, SpeedOfSound_Ph"
},

{
    "location": "#P-and-s-1",
    "page": "Readme",
    "title": "P and s",
    "category": "section",
    "text": "SpecificGPs, SpecificFPs, SpecificVPs, SpecificUPs, SpecificSPs, SpecificHPs, SpecificCPPs, SpecificCVPs, SpeedOfSound_PsSpecificG     [kJ/kg]   Specific Gibbs free energy\n\nSpecificF     [kJ/kg]   Specific Helmholtz free energy\n\nSpecificV     [m3/kg]   Specific volume\n\nSpecificU     [kJ/kg]   Specific internal energy\n\nSpecificS     [kJ/kgK]  Specific entropy\n\nSpecificH     [kJ/kg]   Specific enthalpy\n\nSpecificCp    [kJ/kgK]  Specific isobaric heat capacity\n\nSpecificCv    [kJ/kgK]  Specific isochoric heat capacity\n\nSpeedOfSound  [m/s]     Sonic velocity\n\nTemperatures in K, Pressures in MPa"
},

{
    "location": "#Exported-constants-1",
    "page": "Readme",
    "title": "Exported constants",
    "category": "section",
    "text": "R  = 0.461526   [kJ/kg/K] Universal gas constant\n\nTc = 647.096    [K]       Critical temperature of water\n\nPc = 22.064     [kg/m3]   Critical density of water\n\nT3 = 273.16     [K]       Triple point temperature of water\n\nP3 = 611.657E-6 [MPa]     Triple point pressure of water\n\nMr = 18.01528   [kg/kmol] Molecular weight of water"
},

{
    "location": "autodocs/#SteamTables.B23",
    "page": "Docstrings",
    "title": "SteamTables.B23",
    "category": "function",
    "text": "B23(InputType::Symbol, InputValue)\n\nReturns the boundary between regions 2 and 3. InputType is either :T or :P to indicate that InputValue is temperature [K] or pressure [MPa]. The complimentary value is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.B2bc",
    "page": "Docstrings",
    "title": "SteamTables.B2bc",
    "category": "function",
    "text": "B2bc\n\nReturns the boundary between regions 2b and 2c, approx s=5.85kJ/kgK\nInputType is either :h or :P to indicate that InputValue is enthalpy [kJ/kg]\nor pressure [MPa]. The complimentary value is returned.\nValid from saturation line at 554.485K & 6.54670MPa to 1019.32K & 100MPa\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Psat",
    "page": "Docstrings",
    "title": "SteamTables.Psat",
    "category": "function",
    "text": "Psat\n\nUtility function that returns the vapour pressure at temperature T [K].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region1",
    "page": "Docstrings",
    "title": "SteamTables.Region1",
    "category": "function",
    "text": "Region1\n\nReturns all the property values in region 1.\n273.15K ≤ T ≤ 623.15K  Psat(T) ≤ P ≤ 100MPa\nPressures in MPa and temperature in [K]\nThe property to be returned is specified in Output.\n    :SpecificG        kJ/kg\n    :SpecificF        kJ/kg\n    :SpecificV        m3/kg\n    :SpecificU        kJ/kg\n    :SpecificS        kJ/kgK\n    :SpecificH        kJ/kg\n    :SpecificCP       kJ/kgK\n    :SpecificCV       kJ/kgK\n    :SpeedOfSound     m/s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region1_TPh",
    "page": "Docstrings",
    "title": "SteamTables.Region1_TPh",
    "category": "function",
    "text": "Region1_TPh\n\nReturns T [K] from P[MPa] and h[kJ/kg] in Region 1.\n273.15K ≤ T ≤ 623.15K  Psat(T) ≤ P ≤ 100MPa\nThe inconsistency with the main Region 1 model is ~25mK.\nIf you need better accuracy (why???), start with this value and iterate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region1_TPs",
    "page": "Docstrings",
    "title": "SteamTables.Region1_TPs",
    "category": "function",
    "text": "Region1_TPs\n\nReturns T [K] from P[MPa] and s[kJ/kgK] in Region 1.\n273.15K ≤ T ≤ 623.15K  Psat(T) ≤ P ≤ 100MPa\nThe inconsistency with the main Region 1 model is ~25mK.\nIf you need better accuracy (why???), start with this value and iterate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region2",
    "page": "Docstrings",
    "title": "SteamTables.Region2",
    "category": "function",
    "text": "Region2\n\nReturns all the property values in region 2.\n273.15K ≤ T ≤ 623.15K  0 ≤ P ≤ Psat(T)\n623.15K <  T ≤ 863.15K  0 <  P ≤ P(T) from B23-model\n863.15K <  T ≤ 1073.15K 0 <  P ≤ 100MPa\nAccuracy in the metastable region is reasonable above 10MPa, only\nPressures in MPa and temperature in [K]\nThe property to be returned is specified in Output.\n    :SpecificG        kJ/kg\n    :SpecificF        kJ/kg        \n    :SpecificV        m3/kg\n    :SpecificU        kJ/kg\n    :SpecificS        kJ/kgK\n    :SpecificH        kJ/kg\n    :SpecificCP       kJ/kgK\n    :SpecificCV       kJ/kgK\n    :SpeedOfSound     m/s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region2a_TPh",
    "page": "Docstrings",
    "title": "SteamTables.Region2a_TPh",
    "category": "function",
    "text": "Region2a_TPh\n\nReturns T [K] from P[MPa] and h[kJ/kg] in Region 2a.\nPressures in MPa and temperature in [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region2a_TPs",
    "page": "Docstrings",
    "title": "SteamTables.Region2a_TPs",
    "category": "function",
    "text": "Region2a_TPs\n\nReturns T [K] from P[MPa] and s[kJ/kgK] in Region 2a.\nPressures in MPa and temperature in [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region2b_TPh",
    "page": "Docstrings",
    "title": "SteamTables.Region2b_TPh",
    "category": "function",
    "text": "Region2b_TPh\n\nReturns T [K] from P[MPa] and h[kJ/kg] in Region 2b.\nPressures in MPa and temperature in [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region2b_TPs",
    "page": "Docstrings",
    "title": "SteamTables.Region2b_TPs",
    "category": "function",
    "text": "Region2b_TPs\n\nReturns T [K] from P[MPa] and s[kJ/kgK] in Region 2a.\nPressures in MPa and temperature in [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region2c_TPh",
    "page": "Docstrings",
    "title": "SteamTables.Region2c_TPh",
    "category": "function",
    "text": "Region2c_TPh\n\nReturns T [K] from P[MPa] and h[kJ/kg] in Region 2b.\nPressures in MPa and temperature in [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region2c_TPs",
    "page": "Docstrings",
    "title": "SteamTables.Region2c_TPs",
    "category": "function",
    "text": "Region2c_TPs\n\nReturns T [K] from P[MPa] and s[kJ/kgK] in Region 2a.\nPressures in MPa and temperature in [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region2meta",
    "page": "Docstrings",
    "title": "SteamTables.Region2meta",
    "category": "function",
    "text": "Region2meta\n\nReturns all the property values in region 2 in the metastable region,\nfrom the saturated-vapour line to the 5% equlibrium moisture line, a.k.a the\npractical Wilson line:\n    %equilibrium moisture = [h - h_liq(P)] / [h_vap(P) - h_liq(P)]\nfor pressures from P3 up to 10MPa.\nPressures in MPa and temperature in [K]\nThe property to be returned is specified in Output.\n    :SpecificG        kJ/kg       \n    :SpecificF        kJ/kg  \n    :SpecificV        m3/kg\n    :SpecificU        kJ/kg\n    :SpecificS        kJ/kgK\n    :SpecificH        kJ/kg\n    :SpecificCP       kJ/kgK\n    :SpecificCV       kJ/kgK\n    :SpeedOfSound     m/s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region3",
    "page": "Docstrings",
    "title": "SteamTables.Region3",
    "category": "function",
    "text": "Initialise from ideal gas law, then use root finder to calculate P by iterating on Region3ρ.\nPass through properties from Region3ρ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region3_ρ",
    "page": "Docstrings",
    "title": "SteamTables.Region3_ρ",
    "category": "function",
    "text": "Region3_ρ\n\nReturns all the property values in region 3.\n623.15K ≤ T ≤ T(P) from B23-model P(T) from B23-model ≤ P ≤ 100MPa\nPressures in MPa and temperature in [K]\nThe property to be returned is specified in Output.\n    :SpecificG        kJ/kg    \n    :SpecificF        kJ/kg\n    :Pressure         MPa\n    :SpecificU        kJ/kg\n    :SpecificS        kJ/kgK\n    :SpecificH        kJ/kg\n    :SpecificCP       kJ/kgK\n    :SpecificCV       kJ/kgK\n    :SpeedOfSound     m/s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region4",
    "page": "Docstrings",
    "title": "SteamTables.Region4",
    "category": "function",
    "text": "Region4\n\nReturns the vapour-liquid phase boundary (saturation line).\nValid from triple point to critical point\n273.15K ≤ T ≤ 647.096K\nInputType is either :T or :P to indicate that InputValue is temperature [K]\nor pressure [MPa]. The complimentary value is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Region5",
    "page": "Docstrings",
    "title": "SteamTables.Region5",
    "category": "function",
    "text": "Region5\n\nReturns all the property values in region 5.\n1073.15K ≤ T ≤ 2273.15K  0 ≤ P ≤ 50MPa\nPressures in MPa and temperature in [K]\n\nThe property to be returned is specified in Output.\n    :SpecificG        kJ/kg\n    :SpecificF        kJ/kg\n    :SpecificV        m3/kg\n    :SpecificU        kJ/kg\n    :SpecificS        kJ/kgK\n    :SpecificH        kJ/kg\n    :SpecificCP       kJ/kgK\n    :SpecificCV       kJ/kgK\n    :SpeedOfSound     m/s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.RegionID_Ph",
    "page": "Docstrings",
    "title": "SteamTables.RegionID_Ph",
    "category": "function",
    "text": "RegionID_Ph\n\nIdentifies the applicable region, based on specified P [MPa] and h [kJ/kg].\nThis allows the correct function to be called to retrieve properties.\nBackwards equations are only available for Regions 1 and 2 and the vapour-liquid\nequilibrium line, which is only used when explicitly called.\n\nAs there are no explicit domains defined for (T, h), the method is iterative.\nThe reverse equation for T = f(P,h) is called for each region and the result\nis checked against the bounds for the region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.RegionID_Ps",
    "page": "Docstrings",
    "title": "SteamTables.RegionID_Ps",
    "category": "function",
    "text": "RegionID_Ps\n\nIdentifies the applicable region, based on specified P [MPa] and h [kJ/kg].\nThis allows the correct function to be called to retrieve properties.\nBackwards equations are only available for Regions 1 and 2 and the vapour-liquid\nequilibrium line, which is only used when explicitly called.\n\nAs there are no explicit domains defined for (T, s), the method is iterative.\nThe reverse equation for T = f(P,s) is called for each region and the result\nis checked against the bounds for the region.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificCP",
    "page": "Docstrings",
    "title": "SteamTables.SpecificCP",
    "category": "function",
    "text": "SpecificCP\n\nUtility function that returns the specific isobaric heat capacity [kJ/kgK] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificCP_Ph",
    "page": "Docstrings",
    "title": "SteamTables.SpecificCP_Ph",
    "category": "function",
    "text": "SpecificCP_Ph\n\nUtility function that returns the specific entropy [kJ/kgK] from P [MPa] and h [kJ/kg]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificCP_Ps",
    "page": "Docstrings",
    "title": "SteamTables.SpecificCP_Ps",
    "category": "function",
    "text": "SpecificCP_Ps\n\nUtility function that returns the speciic entropy [kJ/kgK] from P [MPa] and s [kJ/kgK]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificCV",
    "page": "Docstrings",
    "title": "SteamTables.SpecificCV",
    "category": "function",
    "text": "SpecificCV\n\nUtility function that returns the specific isochoric heat capacity [kJ/kgK] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificCV_Ph",
    "page": "Docstrings",
    "title": "SteamTables.SpecificCV_Ph",
    "category": "function",
    "text": "SpecificCV_Ph\n\nUtility function that returns the specific entropy [kJ/kgK] from P [MPa] and h [kJ/kg]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificCV_Ps",
    "page": "Docstrings",
    "title": "SteamTables.SpecificCV_Ps",
    "category": "function",
    "text": "SpecificCV_Ps\n\nUtility function that returns the speciic entropy [kJ/kgK] from P [MPa] and s [kJ/kgK]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificF",
    "page": "Docstrings",
    "title": "SteamTables.SpecificF",
    "category": "function",
    "text": "SpecificF\n\nUtility function that returns the Helmholtz free energy [kJ/kgK] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificF_Ph",
    "page": "Docstrings",
    "title": "SteamTables.SpecificF_Ph",
    "category": "function",
    "text": "SpecificF_Ph\n\nUtility function that returns the Helmholtz free energy [kJ/kgK] from P [MPa] and h [kJ/kg]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificF_Ps",
    "page": "Docstrings",
    "title": "SteamTables.SpecificF_Ps",
    "category": "function",
    "text": "SpecificF_Ps\n\nUtility function that returns the Helmholtz free energy [kJ/kgK] from P [MPa] and s [kJ/kgK]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificG",
    "page": "Docstrings",
    "title": "SteamTables.SpecificG",
    "category": "function",
    "text": "SpecificG\n\nUtility function that returns the Gibbs free energy [kJ/kgK] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificG_Ph",
    "page": "Docstrings",
    "title": "SteamTables.SpecificG_Ph",
    "category": "function",
    "text": "SpecificG_Ph\n\nUtility function that returns the Gibbs free energy [kJ/kgK] from P [MPa] and h [kJ/kg]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificG_Ps",
    "page": "Docstrings",
    "title": "SteamTables.SpecificG_Ps",
    "category": "function",
    "text": "SpecificG_Ps\n\nUtility function that returns the Gibbs free energy [kJ/kgK] from P [MPa] and s [kJ/kgK]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificH",
    "page": "Docstrings",
    "title": "SteamTables.SpecificH",
    "category": "function",
    "text": "SpecificH\n\nUtility function that returns the specific enthalpy [kJ/kg] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificH_Ps",
    "page": "Docstrings",
    "title": "SteamTables.SpecificH_Ps",
    "category": "function",
    "text": "SpecificH_Ps\n\nUtility function that returns the speciic enthalpy [kJ/kg] from P [MPa] and s [kJ/kgK]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificS",
    "page": "Docstrings",
    "title": "SteamTables.SpecificS",
    "category": "function",
    "text": "SpecificS\n\nUtility function that returns the specific entropy [kJ/kgK] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificS_Ph",
    "page": "Docstrings",
    "title": "SteamTables.SpecificS_Ph",
    "category": "function",
    "text": "SpecificS_Ph\n\nUtility function that returns the specific entropy [kJ/kgK] from P [MPa] and h [kJ/kg]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificU",
    "page": "Docstrings",
    "title": "SteamTables.SpecificU",
    "category": "function",
    "text": "SpecificU\n\nUtility function that returns the specific internal energy [kJ/kg] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificU_Ph",
    "page": "Docstrings",
    "title": "SteamTables.SpecificU_Ph",
    "category": "function",
    "text": "SpecificU_Ph\n\nUtility function that returns the internal energy [kJ/kgK] from P [MPa] and h [kJ/kg]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificU_Ps",
    "page": "Docstrings",
    "title": "SteamTables.SpecificU_Ps",
    "category": "function",
    "text": "SpecificU_Ps\n\nUtility function that returns the internal energy [kJ/kgK] from P [MPa] and s [kJ/kgK]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificV",
    "page": "Docstrings",
    "title": "SteamTables.SpecificV",
    "category": "function",
    "text": "SpecificV\n\nUtility function that returns the specific volume [m3/kg] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificV_Ph",
    "page": "Docstrings",
    "title": "SteamTables.SpecificV_Ph",
    "category": "function",
    "text": "SpecificV_Ph\n\nUtility function that returns the specific volume [m3/kg] from P [MPa] and h [kJ/kg]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpecificV_Ps",
    "page": "Docstrings",
    "title": "SteamTables.SpecificV_Ps",
    "category": "function",
    "text": "SpecificV_Ps\n\nUtility function that returns the specific volume [m3/kg] from P [MPa] and s [kJ/kgK]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpeedOfSound",
    "page": "Docstrings",
    "title": "SteamTables.SpeedOfSound",
    "category": "function",
    "text": "SpeedOfSound\n\nUtility function that returns the sonic velocity [m/s] from P [MPa] and T [K]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpeedOfSound_Ph",
    "page": "Docstrings",
    "title": "SteamTables.SpeedOfSound_Ph",
    "category": "function",
    "text": "SpeedOfSound_Ph\n\nUtility function that returns the specific entropy [kJ/kgK] from P [MPa] and h [kJ/kg]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SpeedOfSound_Ps",
    "page": "Docstrings",
    "title": "SteamTables.SpeedOfSound_Ps",
    "category": "function",
    "text": "SpeedOfSound_Ps\n\nUtility function that returns the speciic entropy [kJ/kgK] from P [MPa] and s [kJ/kgK]\nThe explicit backwards equations are only available in regions 1 and 2. Input outside these\nwill result in a DomainError exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.SteamTables",
    "page": "Docstrings",
    "title": "SteamTables.SteamTables",
    "category": "module",
    "text": "SteamTables\n\nIAPWS-97 Industrial Formulation Properties of water and steam.  Provides the Gibbs and Helmholtz free energies, enthalpy, entropy Cp, Cv and sonic velocity given inputs that are eith P&T, P&h or P&s.\n\nExported functions:\n\nSingle input:\n\nPsat(T) and Tsat(P) returns the saturation linearindices\n\nTwo inputs:\n\nP and T   SpecificG,    SpecificF,     SpecificV,     SpecificU,      SpecificS,   SpecificH,    SpecificCP,    SpecificCV,    SpeedOfSound\n\nP and h   SpecificGPh, SpecificFPh,  SpecificVPh,  SpecificUPh,   SpecificSPh,   SpecificHPh, SpecificCPPh, SpecificCVPh, SpeedOfSound_Ph\n\nP and s   SpecificGPs, SpecificFPs,  SpecificVPs,  SpecificUPs,   SpecificSPs,   SpecificHPs, SpecificCPPs, SpecificCVPs, SpeedOfSound_Ps\n\nSpecificG    [kJ/kg]  Specific Gibbs free energy  SpecificF    [kJ/kg]  Specific Helmholtz free energy  SpecificV    [m3/kg]  Specific volume  SpecificU    [kJ/kg]  Specific internal energy SpecificS    [kJ/kgK] Specific entropy  SpecificH    [kJ/kg]  Specific enthalpy  SpecificCp   [kJ/kgK] Specific isobaric heat capacity  SpecificCv   [kJ/kgK] Specific isochoric heat capacity  SpeedOfSound [m/s]    Sonic velocity \n\nTemperatures in K, Pressures in MPa\n\n##Exported constants   R  = 0.461526   [kJ/kg/K] Universal gas constant   Tc = 647.096    [K]       Critical temperature of water   Pc = 22.064     [kg/m3]   Critical density of water   T3 = 273.16     [K]       Triple point temperature of water   P3 = 611.657E-6 [MPa]     Triple point pressure of water   Mr = 18.01528   [kg/kmol] Molecular weight of water\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SteamTables.Tsat",
    "page": "Docstrings",
    "title": "SteamTables.Tsat",
    "category": "function",
    "text": "Tsat\n\nUtility function that returns the vapour pressure at pressure P [MPa]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SteamTables.B23SteamTables.B2bcSteamTables.MrSteamTables.P3SteamTables.PcSteamTables.PsatSteamTables.RSteamTables.Region1SteamTables.Region1_TPhSteamTables.Region1_TPsSteamTables.Region2SteamTables.Region2a_TPhSteamTables.Region2a_TPsSteamTables.Region2b_TPhSteamTables.Region2b_TPsSteamTables.Region2c_TPhSteamTables.Region2c_TPsSteamTables.Region2metaSteamTables.Region3SteamTables.Region3_ρSteamTables.Region4SteamTables.Region5SteamTables.RegionIDSteamTables.RegionID_PhSteamTables.RegionID_PsSteamTables.SpecificCPSteamTables.SpecificCP_PhSteamTables.SpecificCP_PsSteamTables.SpecificCVSteamTables.SpecificCV_PhSteamTables.SpecificCV_PsSteamTables.SpecificFSteamTables.SpecificF_PhSteamTables.SpecificF_PsSteamTables.SpecificGSteamTables.SpecificG_PhSteamTables.SpecificG_PsSteamTables.SpecificHSteamTables.SpecificH_PsSteamTables.SpecificSSteamTables.SpecificS_PhSteamTables.SpecificUSteamTables.SpecificU_PhSteamTables.SpecificU_PsSteamTables.SpecificVSteamTables.SpecificV_PhSteamTables.SpecificV_PsSteamTables.SpeedOfSoundSteamTables.SpeedOfSound_PhSteamTables.SpeedOfSound_PsSteamTables.SteamTablesSteamTables.T3SteamTables.TcSteamTables.TsatSteamTables.evalSteamTables.includeSteamTables.ρc"
},

]}
