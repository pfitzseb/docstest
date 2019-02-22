var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#XSim-1",
    "page": "Readme",
    "title": "XSim",
    "category": "section",
    "text": "(Image: Build Status)XSim is a fast and user-friendly tool to simulate sequence data and complicated pedigree structures"
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "An efficient CPOS algorithm\nUsing founders that are characterized by real genome sequence data\nComplicated pedigree structures among descendants"
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick-start",
    "category": "section",
    "text": "#load XSim package\nusing XSim\n\n#set genome information\nchrLength= 0.1  #length of each chromosome \nnumChr   = 2    #number of chromosomes\nnLoci    = 10   #number of loci for each chromosome\nnQTL     = 1    #number of QTL for each chromosomefects,mutRate);\nbuild_genome(numChr,chrLength,nLoci,nQTL) #this genome information will be used for subsequent computaions\n\n#generate founders\npopSizeFounder = 2\nsires = sampleFounders(popSizeFounder);\ndams  = sampleFounders(popSizeFounder);\n\n#random mating\nngen,popSize = 5,10\nsires1,dams1,gen1 = sampleRan(popSize, ngen, sires, dams);"
},

{
    "location": "#More-1",
    "page": "Readme",
    "title": "More",
    "category": "section",
    "text": "homepage: QTL.rocks\nInstallation: at the Julia REPL, Pkg.add(\"XSim\")\nDocumentation: available here\nAuthors: Hao Cheng,Rohan Fernando,Dorian Garrick\nCiting XSim Cheng H, Garrick D, and Fernando R (2015) XSim: Simulation of descendants from ancestors with sequence data. G3: Genes-Genomes-Genetics, 5(7):1415-1417."
},

{
    "location": "autodocs/#XSim.build_genome",
    "page": "Docstrings",
    "title": "XSim.build_genome",
    "category": "function",
    "text": "buildgenome(nChromosome,chromosomelength,nLoci,genefrequency,mapposition,qtlindex,qtleffect,mutation_rate)\n\nnChromosome::Int64\nnumber of chromosomes\nchromosome_length::Array{Float64,1}\nlength of each chromosome\nnLoci::Array{Int64,1}\nnumber of loci for each chromosome\ngene_frequency::Array{Array{Float64,1},1}\ngene frequency for each locus on each chromosome\nmap_position::Array{Array{Float64,1},1}\nmap position for each locus on each chromosome\nqtl_index::Array{Array{Int64,1},1}\nIndex for each QTL on each chromosome\nqtl_effect::Array{Array{Float64,1},1}\nEffect of QTL for each QTL on each chromosome\nmutation_rate::Float64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "XSim.AnimalXSim.ChromosomeXSim.ChromosomeInfoXSim.CohortXSim.CommonToAnimalsXSim.GXSim.GenomeInfoXSim.LocusInfoXSim.PedNodeXSim.XSimXSim.XSimMembersXSim.build_genomeXSim.cohortSubsetXSim.commonXSim.concatCohortsXSim.copyXSim.evalXSim.find_haplotype_founderXSim.getGenotypesWXSim.getIDsXSim.getMyGenotypeXSim.getMyHapsXSim.getOneHapsXSim.getOurGenValsXSim.getOurGenotypesXSim.getOurHapsXSim.getOurPhenValsXSim.getPedigreeXSim.getRandomIndXSim.get_num_allelesXSim.get_num_chromXSim.get_num_lociXSim.get_our_phenotypesXSim.includeXSim.initXSim.initFounderHapsXSim.initFounderPosOriXSim.make_map_posXSim.mkPedArrayXSim.mk_mappos_from_locus_infoXSim.outputCatDataXSim.outputGenDataXSim.outputHapDataXSim.outputPedigreeXSim.popAddWXSim.popCrossXSim.popNewWXSim.popSampleWXSim.popSelWXSim.printMyHapsXSim.printOurHapsXSim.putEBVXSim.recodeXSim.resetFoundersXSim.sampleBLUPSelXSim.sampleChildrenXSim.sampleDHOffspringFromXSim.sampleFounderXSim.sampleFoundersXSim.sampleMyPosOriXSim.sampleNonFounderXSim.sampleOneDHOffspringFromXSim.sampleOnePosOriXSim.samplePedXSim.sampleRanXSim.sampleSelXSim.setBreedCompXSim.setResidualVarianceXSim.set_num_chromXSim.set_num_lociXSim.startPopXSim.startrPopXSim.tempMutXSim.tempOriXSim.tempPos"
},

]}
