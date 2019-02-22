var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PowerSystemsUnits-1",
    "page": "Readme",
    "title": "PowerSystemsUnits",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: CodeCov)A supplemental power systems units package for Unitful 0.1.0 or later."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Modules that use PowerSystemsUnits will typically have to explicitly register PowerSystemsUnits with Unitful because precompilation is not currently supported:using Unitful\nusing PowerSystemsUnits\n\nUnitful.register(PowerSystemsUnits)"
},

{
    "location": "autodocs/#PowerSystemsUnits.asqtype",
    "page": "Docstrings",
    "title": "PowerSystemsUnits.asqtype",
    "category": "function",
    "text": "asqtype(x::T) where {T<:Unitful.Units} -> Type\n\nA helper function to convert from the \"dimensions\" of a Unitful quantity to the \"quantities\", as they are treated separately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PowerSystemsUnits.fustrip",
    "page": "Docstrings",
    "title": "PowerSystemsUnits.fustrip",
    "category": "function",
    "text": "fustrip(x::Array{T}) where {T<:Any} = Array\n\nOperation to strip the units an Parametric Array{T} Type. Needed for operating on DataFrames?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PowerSystemsUnits.CurrencyPowerSystemsUnits.CurrencyFreeUnitsPowerSystemsUnits.CurrencyUnitsPowerSystemsUnits.EVARhPowerSystemsUnits.EWhPowerSystemsUnits.GVARhPowerSystemsUnits.GWhPowerSystemsUnits.MVARhPowerSystemsUnits.MWhPowerSystemsUnits.MoneyPowerSystemsUnits.MoneyPerPowerHourPowerSystemsUnits.MoneyPerPowerHourFreeUnitsPowerSystemsUnits.MoneyPerPowerHourUnitsPowerSystemsUnits.PVARhPowerSystemsUnits.PWhPowerSystemsUnits.PowerHourPowerSystemsUnits.PowerHourFreeUnitsPowerSystemsUnits.PowerHourUnitsPowerSystemsUnits.PowerSystemsUnitsPowerSystemsUnits.ReactivePowerHourPowerSystemsUnits.ReactivePowerHourFreeUnitsPowerSystemsUnits.ReactivePowerHourUnitsPowerSystemsUnits.TVARhPowerSystemsUnits.TWhPowerSystemsUnits.USDPowerSystemsUnits.USDPerMWhPowerSystemsUnits.UnitfulMissingPowerSystemsUnits.VARhPowerSystemsUnits.WhPowerSystemsUnits.YVARhPowerSystemsUnits.YWhPowerSystemsUnits.ZVARhPowerSystemsUnits.ZWhPowerSystemsUnits.aVARhPowerSystemsUnits.aWhPowerSystemsUnits.asqtypePowerSystemsUnits.cVARhPowerSystemsUnits.cWhPowerSystemsUnits.dVARhPowerSystemsUnits.dWhPowerSystemsUnits.daVARhPowerSystemsUnits.daWhPowerSystemsUnits.dt2uminPowerSystemsUnits.evalPowerSystemsUnits.fVARhPowerSystemsUnits.fWhPowerSystemsUnits.fustripPowerSystemsUnits.hVARhPowerSystemsUnits.hWhPowerSystemsUnits.includePowerSystemsUnits.kVARhPowerSystemsUnits.kWhPowerSystemsUnits.mVARhPowerSystemsUnits.mWhPowerSystemsUnits.nVARhPowerSystemsUnits.nWhPowerSystemsUnits.pVARhPowerSystemsUnits.pWhPowerSystemsUnits.yVARhPowerSystemsUnits.yWhPowerSystemsUnits.zVARhPowerSystemsUnits.zWhPowerSystemsUnits.μVARhPowerSystemsUnits.μWh"
},

]}
