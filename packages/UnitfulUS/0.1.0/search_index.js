var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnitfulUS-1",
    "page": "Readme",
    "title": "UnitfulUS",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)A supplemental units package for Unitful 0.1.0 or later."
},

{
    "location": "#Defined-units-1",
    "page": "Readme",
    "title": "Defined units",
    "category": "section",
    "text": "All units defined are suffixed with _us.U.S. survey units (length) are also prefixed by s: sinch_us (inch), sft_us (foot), sli_us (link), syd_us (yard), srd_us (rod), sch_us (chain), sfur_us (furlong), smi_us (statute mile), slea_us (league).\nU.S. survey units (area) are prefixed by s where ambiguous: sac_us (acre), town_us (township).  \nU.S. dry volumes: drypt_us (dry pint), dryqt_us (dry quart), pk_us (dry peck), bushel_us (bushel).\nU.S. liquid volumes: gal_us (gallon), qt_us (quart), pt_us (pint), cup_us (cup), gill_us (gill / half cup), floz_us (fluid ounce), tbsp_us (culinary tablespoon), tsp_us (culinary teaspoon), fldr_us (fluid dram), minim_us (minim)\nU.S. mass units: cwt_us (hundredweight), ton_us (ton)"
},

{
    "location": "#Special-features-1",
    "page": "Readme",
    "title": "Special features",
    "category": "section",
    "text": "This package defines a string macro @us_str that only searches for units from this package. @u_str is the only exported symbol from the package. When using the string macro, omit the _us suffix from units, as the macro will append it for you.Usage examples:julia> using Unitful.DefaultSymbols, UnitfulUS\n\njulia> us\"gal\" == UnitfulUS.gal_us\ntrue\n\njulia> 1us\"gal\" |> m^3\n473176473//125000000000 m^3As can be seen, the us string macro aids in the distinction of U.S. gallons from other possible definitions of the gallon (Imperial gallon). Note that because this package registers with the @u_str macro, you can mix units from this package and the Unitful defaults so long as you include the _us suffix on units from this package:julia> using Unitful, UnitfulUS\n\njulia> 1.0u\"kg/gal_us\"\n1.0 kg galᵘˢ"
},

{
    "location": "autodocs/#UnitfulUS.@us_str",
    "page": "Docstrings",
    "title": "UnitfulUS.@us_str",
    "category": "macro",
    "text": "macro us_str(unit)\n\nString macro to easily recall U.S. customary units located in the UnitfulUS package. Although all unit symbols in that package are suffixed with _us, the suffix should not be used when using this macro.\n\nNote that what goes inside must be parsable as a valid Julia expression.\n\nExamples:\n\njulia> 1.0us\"tbsp\"\n1.0 m s^-1\n\njulia> 1.0us\"syd\" - 1.0u\"yd\"\n1.0 m N\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnitfulUS.@us_strUnitfulUS.UnitfulUSUnitfulUS.__init__UnitfulUS.allowed_funcsUnitfulUS.bushel_usUnitfulUS.cup_usUnitfulUS.cwt_usUnitfulUS.dottifyUnitfulUS.drypt_usUnitfulUS.dryqt_usUnitfulUS.evalUnitfulUS.fldr_usUnitfulUS.floz_usUnitfulUS.gal_usUnitfulUS.gill_usUnitfulUS.includeUnitfulUS.localunitsUnitfulUS.minim_usUnitfulUS.pk_usUnitfulUS.pt_usUnitfulUS.qt_usUnitfulUS.replace_valueUnitfulUS.sac_usUnitfulUS.sch_usUnitfulUS.sft_usUnitfulUS.sfur_usUnitfulUS.sinch_usUnitfulUS.slea_usUnitfulUS.sli_usUnitfulUS.smi_usUnitfulUS.srd_usUnitfulUS.syd_usUnitfulUS.tbsp_usUnitfulUS.ton_usUnitfulUS.town_usUnitfulUS.tsp_usUnitfulUS.ustrcheck_bool"
},

]}
