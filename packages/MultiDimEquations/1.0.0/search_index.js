var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MultiDimEquations-1",
    "page": "Readme",
    "title": "MultiDimEquations",
    "category": "section",
    "text": "Allows to write multi-dimensional equations in Julia using an easy and compact syntax:@meq nTrees!(r in reg, sp in species, dc in diameterClass[2-end], y in years) = nTrees_(r, sp, dc, y)*(1-mortRate_(r, sp, dc, y-1) - promotionRate_(r, sp, dc, y-1))) +  promotionRate_(r, sp, dc-1, y-1)It is somehow similar to Algebraic modeling language (AML) like GAMS or Julia/JuMP, but outside the domain of optimisation.(Image: Build Status) (Image: codecov.io)(Image: MultiDimEquations) (Image: MultiDimEquations)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"MultiDimEquations\")"
},

{
    "location": "#Making-available-the-package-1",
    "page": "Readme",
    "title": "Making available the package",
    "category": "section",
    "text": "Due to the fact that the functions to access the data are dynamically created at run time, and would not be available to you with a normal import <package>, you have instead to include the file in your program:include(\"$(Pkg.dir())/MultiDimEquations/src/MultiDimEquations.jl\")"
},

{
    "location": "#Definition-of-the-variables:-1",
    "page": "Readme",
    "title": "Definition of the variables:",
    "category": "section",
    "text": "Define each group of variables with their associated data source. At the moment MultiDimEquations support only DataFrame in long format, i.e. in the format parameter|dim1|dim2|...|valuedf = wsv\"\"\"\nreg	prod	var	value\nus	banana	production	10\nus	banana	transfCoef	0.6\nus	banana	trValues	2\nus	apples	production	7\nus	apples	transfCoef	0.7\nus	apples	trValues	5\nus	juice	production	NA\nus	juice	transfCoef	NA\nus	juice	trValues	NA\neu	banana	production	5\neu	banana	transfCoef	0.7\neu	banana	trValues	1\neu	apples	production	8\neu	apples	transfCoef	0.8\neu	apples	trValues	4\neu	juice	production	NA\neu	juice	transfCoef	NA\neu	juice	trValues    NA\n\"\"\"\n\nvariables =  vcat(unique(dropna(df[:var])),[\"consumption\"])\ndefVars(variables,df;dfName=\"df\",varNameCol=\"var\", valueCol=\"value\")Each time you run defVars(), access functions are automatically created for each variable in the form of variable_(dim1,dim2,...) to access the data and variable!(value,dim1,dim2,..) to store the value. For more info type ?defVars once you installed and loaded the package."
},

{
    "location": "#Defining-the-\"set\"-(dimensions)-of-your-data-1",
    "page": "Readme",
    "title": "Defining the \"set\" (dimensions) of your data",
    "category": "section",
    "text": "These are simple Julia Arrays..products = [\"banana\",\"apples\",\"juice\"]\nprimPr   = products[1:2]\nsecPr    = [products[3]]\nreg      = [\"us\",\"eu\"]"
},

{
    "location": "#Write-your-model-using-the-@meq-macro-1",
    "page": "Readme",
    "title": "Write your model using the @meq macro",
    "category": "section",
    "text": "The @meq macro adds a bit of convenience transforming at parse time (so, without adding run-time overheads) your equation from par1!(d1 in DIM1, d2 in DIM2, dfix3) = par2_(d1,d2)+par3_(d1,d2) to [par1!(par2_(d1,d2)+par3_(d1,d2), d1,d2,dfix3) for d1 in dim1, d2 in dim2].# equivalent to [production!(sum(trValues_(r,pp) * transfCoef_(r,pp)  for pp in primPr), r, sp) for r in reg, sp in secPr]\n@meq production!(r in reg, sp in secPr)   = sum(trValues_(r,pp) * transfCoef_(r,pp)  for pp in primPr)\n@meq consumption!(r in reg, pp in primPr) = production_(r,pp) - trValues_(r,pp)\n@meq consumption!(r in reg, sp in secPr)  = production_(r, sp)Using defVars() with the @meq macro your data is kept in a single IndexedTable where one column is used to keep the variable names. An alternative (and faster) approach is to define your variables as each one being a separate IndexedTable (the package LAJuliaUtils has some useful functions for such approach). You can still use @meq to provide some convenience:@meq par1[d1 in DIM1, d2 in DIM2, dfix3] = par2[d1,d2]+par3[d1,d2] ==> [par1[d1,d2,dfix3] = par2[d1,d2]+par3[d1,d2] for d1 in dim1, d2 in dim2].For more info on the @meq macro type ?@meq"
},

{
    "location": "#Known-limitation-1",
    "page": "Readme",
    "title": "Known limitation",
    "category": "section",
    "text": "This is a young package still under active development.\nWhile convenient, named access is definitely slower than positional access to data (i.e. it is a functional rather than performance oriented approach). Neverthless, using IndexedTables as backend, this package provides a reasonable fast implementation.\nAlso, at this time, only var = ... assignments are supported."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "The development of this package was supported by the French National Research Agency through the Laboratory of Excellence ARBRE, a part of the “Investissements d\'Avenir” Program (ANR 11 – LABX-0002-01)."
},

]}
