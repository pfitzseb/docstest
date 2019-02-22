var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Materials.jl-1",
    "page": "Readme",
    "title": "Materials.jl",
    "category": "section",
    "text": "Computational material models(Image: Build Status) (Image: Coverage Status) (Image: ) (Image: ) [(Image: )] [(Image: )]"
},

{
    "location": "autodocs/#Materials.Material",
    "page": "Docstrings",
    "title": "Materials.Material",
    "category": "type",
    "text": "Material{M<:AbstractMaterial}\n\nStress σ\nStrain ε\nStress increment Δσ\nStrain increment Δε\nJacobian matrix of the consitutive model, ∂Δσ/∂Δε\n\nProperties contains internal material state parameters, like Young\'s modulus, Poissons ratio, yield stress limit, and so on.\n\nExample\n\nLet us define linear, isotroopic Hooke material.\n\nstruct LinearIsotropicHooke <: AbstractMaterial     youngsmodulus :: Float64     poissonsratio :: Float64 end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Materials.postprocess_increment!",
    "page": "Docstrings",
    "title": "Materials.postprocess_increment!",
    "category": "function",
    "text": "Material postprocess step after increment finish. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Materials.preprocess_analysis!",
    "page": "Docstrings",
    "title": "Materials.preprocess_analysis!",
    "category": "function",
    "text": "Preprocess step of material before analysis start. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Materials.preprocess_increment!",
    "page": "Docstrings",
    "title": "Materials.preprocess_increment!",
    "category": "function",
    "text": "Preprocess step before increment start. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Materials.AbstractMaterialMaterials.ChabocheMaterials.IIMaterials.I_Materials.IdealPlasticMaterials.IxIMaterials.MaterialMaterials.MaterialsMaterials.PMaterials.SimulatorMaterials.calculate_stress!Materials.create_nonlinear_system_of_equationsMaterials.deviatorMaterials.double_contractionMaterials.evalMaterials.fromtensorMaterials.fromvectorMaterials.includeMaterials.initialize!Materials.integrate_material!Materials.postprocess_analysis!Materials.postprocess_increment!Materials.preprocess_analysis!Materials.preprocess_increment!Materials.run!Materials.tensor_to_matrixMaterials.von_mises_stress"
},

]}
