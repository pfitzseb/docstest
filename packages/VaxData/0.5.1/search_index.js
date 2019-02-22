var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VaxData-1",
    "page": "Readme",
    "title": "VaxData",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)VaxData.jl is a direct port to Julia from libvaxdata [1]. See this report for an in-depth review of the underlying structure and differences between VAX data types and IEEE types.There are 5 Vax datatypes implemented by this package:primitive type VaxInt16 <: VaxInt 16 end\nprimitive type VaxInt32 <: VaxInt 32 end\n\nprimitive type VaxFloatF <: VaxFloat 32 end\nprimitive type VaxFloatG <: VaxFloat 64 end\nprimitive type VaxFloatD <: VaxFloat 64 endConversion to and from each type is defined; Vax types are promoted to the next appropriately sized type supporting math operations:promote_type(VaxFloatF, Float32)\nFloat32\n\npromote_type(VaxFloatF, VaxFloatF)\nFloat32\n\npromote_type(VaxFloatF, Float64)\nFloat64[1]: Baker, L.M., 2005, libvaxdata: VAX Data Format Conversion Routines: U.S. Geological Survey Open-File Report 2005-1424 (http://pubs.usgs.gov/of/2005/1424/)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "VaxData.AbstractVaxVaxData.IEEE_S_EXPONENT_BIASVaxData.IEEE_S_EXPONENT_MASKVaxData.IEEE_S_EXPONENT_SIZEVaxData.IEEE_S_HIDDEN_BITVaxData.IEEE_S_MANTISSA_MASKVaxData.IEEE_S_MANTISSA_SIZEVaxData.IEEE_S_SIGN_BITVaxData.IEEE_T_EXPONENT_BIASVaxData.IEEE_T_EXPONENT_MASKVaxData.IEEE_T_EXPONENT_SIZEVaxData.IEEE_T_HIDDEN_BITVaxData.IEEE_T_MANTISSA_MASKVaxData.IEEE_T_MANTISSA_SIZEVaxData.SIGN_BITVaxData.SIGN_BIT_64VaxData.UNOVaxData.UNO64VaxData.VAX_D_EXPONENT_BIASVaxData.VAX_D_EXPONENT_MASKVaxData.VAX_D_EXPONENT_SIZEVaxData.VAX_D_HIDDEN_BITVaxData.VAX_D_MANTISSA_MASKVaxData.VAX_D_MANTISSA_SIZEVaxData.VAX_F_EXPONENT_BIASVaxData.VAX_F_EXPONENT_MASKVaxData.VAX_F_EXPONENT_SIZEVaxData.VAX_F_HIDDEN_BITVaxData.VAX_F_MANTISSA_MASKVaxData.VAX_F_MANTISSA_SIZEVaxData.VAX_F_SIGN_BITVaxData.VAX_G_EXPONENT_BIASVaxData.VAX_G_EXPONENT_MASKVaxData.VAX_G_EXPONENT_SIZEVaxData.VAX_G_HIDDEN_BITVaxData.VAX_G_MANTISSA_MASKVaxData.VAX_G_MANTISSA_SIZEVaxData.VaxDataVaxData.VaxFloatVaxData.VaxFloatDVaxData.VaxFloatFVaxData.VaxFloatGVaxData.VaxIntVaxData.VaxInt16VaxData.VaxInt32VaxData.bmask16VaxData.bmask32VaxData.evalVaxData.include"
},

]}
