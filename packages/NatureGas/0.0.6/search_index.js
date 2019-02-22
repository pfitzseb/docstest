var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NG[![Build-Status](https://travis-ci.org/hzgzh/NatureGas.jl.svg?branchmaster)](https://travis-ci.org/hzgzh/Naturegas.jl)-1",
    "page": "Readme",
    "title": "NG(Image: Build Status)",
    "category": "section",
    "text": ""
},

{
    "location": "#Nature-Gas-Compress-Factor-Calculation-1",
    "page": "Readme",
    "title": "Nature Gas Compress Factor Calculation",
    "category": "section",
    "text": ""
},

{
    "location": "#install-1",
    "page": "Readme",
    "title": "install",
    "category": "section",
    "text": "Pkg.add(\"https://github.com/hzgzh/NatureGas.git\")"
},

{
    "location": "#usage-1",
    "page": "Readme",
    "title": "usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia>ng_zfactor(6,300;CO2=0.006,N2=0.003,CH4=0.965,C2H6=0.018,C3H8=0.0045,\niC4H10=0.001,nC4H10=0.001,iC5H12=0.0005,nC5H12=0.0003,nC6H14=0.0007))\n0.8953514530758864"
},

{
    "location": "autodocs/#NatureGas.ng_calorific",
    "page": "Docstrings",
    "title": "NatureGas.ng_calorific",
    "category": "function",
    "text": "ng_calorific(mode=:mol,outoption=:mol;CH4=100.0,C2H6=0,C3H8=0,C4H10=0,C4H10_1=0,C5H12=0,C5H12_1=0.,C5H12_2=0,C6H14=0,\nC6H14_1=0.0,C6H14_2=0.0,C6H14_3=0,C6H14_4=0,C7H16=0,C8H18=0.0,C9H20=0.0,C10H22=0.0,C2H4=0.0,\nC3H6=0.0,C4H8=0.0,C4H8_1=0.0,C4H8_2=0.0,C4H8_3=0.0,C5H10=0.0,C3H4=0.0,C4H6=0.0,C4H6_1=0.0,C2H2=0.0,\nC5H10_1=0.0,C6H12=0.0,C7H12=0.0,C6H12_1=0.0,C7H14=0.0,C8H16=0.0,C6H6=0.0,C7H8=0.0,C8H10=0.0,C8H10_1=0.0,\nCH4O=0.0,C2H6HgS2=0.0,H2=0.0,H2O=0.0,H2S=0.0,NH3=0.0,CHN=0.0,CO2=0.0,COS=0.0,CS2=0.0,He=0.0,Ne=0.0,Ar=0.0,\nN2=0.0,O2=0.0,CO2=0.0,O2S=0.0,N2O=0.0,Kr=0.0,Xe=0.0)\n\nAugument\n\nmode: :mol mol heat;:mass mass heat;:vol heat volume heat\noutoption : :mol (molelowheat,molehighheat) kJ/mo1;:mass (masslowheat,masshighheat) MJ/kg;:vol(vollowheat,volhighheat) u\"MJ/m3\";               :rho (real reldensity,real absdensity u\"kg/m3\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NatureGas.ng_calorific_cn",
    "page": "Docstrings",
    "title": "NatureGas.ng_calorific_cn",
    "category": "function",
    "text": "ng_calorific_cn(mode=:mol,outoption=:mol;甲烷=100,乙烷=0,丙烷=0,丁烷=0,二甲基丙烷=0,戊烷=0,二甲基丁烷=0,\n二二甲基丙烷=0,已烷=0,二甲基戊烷=0,三甲基戊烷=0,二二甲基丁烷=0,二三甲基丁烷=0,庚烷=0,辛烷=0,\n壬烷=0,癸烷=0,乙烯=0,丙烯=0,一丁烯=0,顺二丁烯=0,反二丁烯=0,二甲基丙烯=0,一戊烯=0,丙二烯=0,一二丁二烯=0,\n一三丁二烯=0,乙炔=0,环戊烷=0,甲基环戊烷=0,乙基环戊烷=0,环己烷=0,甲基环己烷=0,乙基环己烷=0,苯=0,\n甲苯=0,乙苯=0,邻二甲苯=0,甲醇=0,甲硫醇=0,氢气=0,水=0,硫化氢=0,氨=0,氰化氢=0,一氧化碳=0,硫氧碳=0,\n二硫化碳=0,氦气=0,氖气=0,氩气=0,氮气=0,氧气=0,二氧化碳=0,二氧化硫=0,一氧化二氮=0,氪气=0,氙气=0)\n\nAugument\n\nmode: :mol mol heat;:mass mass heat;:vol heat volume heat\noutoption : :mol (molelowheat,molehighheat) kJ/mo1;:mass (masslowheat,masshighheat) MJ/kg;:vol(vollowheat,volhighheat) u\"MJ/m3\";               :rho (real reldensity,real absdensity u\"kg/m3\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NatureGas.ng_calorific_en",
    "page": "Docstrings",
    "title": "NatureGas.ng_calorific_en",
    "category": "function",
    "text": "ng_calorific_en(mode=:mol,outoption=:mol;Methane=100.0,Ethane=0.0,Propane=0.0,nButane=0.0,Alkanes=0.0,nPentane=0.0,\nMethylbutane_2=0.0,Dimethylpropane_2_2=0.0,nHexane=0.0,Methylpentane_2=0.0,Methoylpentane_3=0.0,\nDimethylbutane_2_2=0.0,Dimethylbutane_2_3=0.0,nHeptane=0.0,nOctane=0.0,nNonane=0.0,nDecane=0.0,\nEthylene=0.0,Propylene=0.0,    Butene_1=0.0,cis_2_Butene=0.0,trans_2_Butene=0.0,Methylpropene_2=0.0,\nPentene_1=0.0,    Propadiene=0.0,Butadiene_1_2=0.0,Butadiene_1_3=0.0,Acetylene=0.0,Cyclopentane=0.0,\nMethylcyclopentane=0.0,Ethylcyclopentane=0.0,Cyclohexane=0.0,Methylcyclohexane=0.0,Ethylcyclohexane=0.0,\nBenzene=0.0,Toluene=0.0,Ethylbenzene=0.0,o_Xylene=0.0,Methanol=0.0,Methanethiol=0.0,Hydrogen=0.0,\nWater=0.0,Hydrogen_sulfide=0.0,Ammonia=0.0,Hydrogen_cyanide=0.0,Carbon_monoxide=0.0,Carbonyl_sulfide=0.0,\nCarbon_disulfide=0.0,Helium=0.0,Neon=0.0,Argon=0.0,Nitrogen=0.0,Oxygen=0.0,Carbon_dioxide=0.0,Sulfur_Dioxide=0.0,\nDinitrogen_monoxide=0.0,Krypton=0.0,Xenon=0.0)\n\nAugument\n\nmode: :mol mol heat;:mass mass heat;:vol heat volume heat\noutoption : :mol (molelowheat,molehighheat) kJ/mo1;:mass (masslowheat,masshighheat) MJ/kg;:vol(vollowheat,volhighheat) u\"MJ/m3\";               :rho (real reldensity,real absdensity u\"kg/m3\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NatureGas.ng_zfactor",
    "page": "Docstrings",
    "title": "NatureGas.ng_zfactor",
    "category": "function",
    "text": "ng_zfactor(p,T;CH4=0.965,N2=0.003,CO2=0.006,C2H6=0.018,C3H8=0.045,H2O=0.,H2S=0.,\nH2=0.,CO=0.,O2=0.,iC4H10=0.001,nC4H10=0.001,iC5H12=0.0005,nC5H12=0.0003,nC6H14=0.0007,\nnC7H16=0.,nC8H18=0.,nNonane=0.,nDecane=0.,He=0.,Ar=0.)\n\nCalculate the compress factor of specific pressure and temperature nature gas\n\nAuguments\n\n...\n\n\"p::Float64\" : thre pressure,unit MPa\n\"T::Float64\" : the temperature,unit K\n\n...\n\nExample\n\njulia>ng_z_factor(6,300;CO2=0.006,N2=0.003,CH4=0.965,C2H6=0.018,C3H8=0.0045,\niC4H10=0.001,nC4H10=0.001,iC5H12=0.0005,nC5H12=0.0003,nC6H14=0.0007))\n0.8953514530758864\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NatureGas.NNatureGas.N1NatureGas.NatureGasNatureGas.RNatureGas.TNatureGas.abs_ρNatureGas.bNatureGas.calorificNatureGas.evalNatureGas.hhv_massNatureGas.hhv_moleNatureGas.hhv_real_volNatureGas.hhv_volNatureGas.includeNatureGas.lhv_massNatureGas.lhv_moleNatureGas.lhv_real_volNatureGas.lhv_volNatureGas.mol_heat_highNatureGas.mol_heat_lowNatureGas.mole_massNatureGas.molemassNatureGas.ng_calorificNatureGas.ng_calorific_cnNatureGas.ng_calorific_enNatureGas.ng_zfactorNatureGas.pNatureGas.real_abs_ρNatureGas.real_rel_ρNatureGas.rel_ρNatureGas.vol2molNatureGas.zNatureGas.zmix"
},

]}
