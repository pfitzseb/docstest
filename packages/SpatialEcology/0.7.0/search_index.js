var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SpatialEcology-1",
    "page": "Readme",
    "title": "SpatialEcology",
    "category": "section",
    "text": "(Image: Build Status) (Image: 0.6) (Image: Coverage)"
},

{
    "location": "#Primary-author:-Michael-Krabbe-Borregaard-(@mkborregaard)-1",
    "page": "Readme",
    "title": "Primary author: Michael Krabbe Borregaard (@mkborregaard)",
    "category": "section",
    "text": "A package for community- and macro-ecological analysis in julia. This package offers a set of base types for interoperability in spatial ecology. The idea is to provide a powerful framework for expressing a great variety of analyses in a flexible manner. It presently holds types for presence-absence matrices, site data and species traits, and will be included with phylogenies and ecological interaction networks. SpatialEcology takes care of aligning all data for analysis.The emphasis is on fast, flexible code operating mainly with views into the larger dataset. It currently holds fast, specialized code for operations on views into sparse matrices (such as presence-absence matrices). This allows analyses to be done in a split-apply-combine framework.The package originated as a port of my R package nodiv, available from CRAN.Types:\nAssemblage (holds presence-absence information along with information on traits and sites)\nComMatrix (presence-absence matrix)\nSpatialData (Grid or Point data with site information)"
},

{
    "location": "#Relevant-other-packages-1",
    "page": "Readme",
    "title": "Relevant other packages",
    "category": "section",
    "text": "This package is part of the EcoJulia organisation, which aims to bring together a coherent set of packages for ecological data analysis. It currently also includes GBIF.jl for accessing GBIF data. For other relevant packages check the BioJulia organisation focusing on molecular biology, and the JuliaGeo organisation focusing on geographical data analysis. Other relevant packages include EcologicalNetwork.jl for ecological networks, and Diversity.jl for community diversity metrics. A long-term goal of the EcoJulia organisation is to interface as seamlessly as possible with these projects to create an integrated data analysis framework for julia."
},

{
    "location": "#Getting-started:-1",
    "page": "Readme",
    "title": "Getting started:",
    "category": "section",
    "text": "using SpatialEcology, Plots, CSV, DataFrames\n\n# the object constructors take a wide range of objects, a typical being a presence-absence matrix as a DataFrame and a 3-column dataframe with coordinates\namphdata = CSV.read(joinpath(dirname(pathof(SpatialEcology)), \"..\", \"data\", \"amph_Europe.csv\"));\namphdata[1:3,1:6]\n    # 5×6 DataFrames.DataFrame\n    # │ Row │ Long │ Lat  │ coords      │ Salamandra_salamandra │ _Calotriton_asper │ _Calotriton_arnoldi │\n    # ├─────┼──────┼──────┼─────────────┼───────────────────────┼───────────────────┼─────────────────────┤\n    # │ 1   │ 17.5 │ 46.5 │ \"17.5_46.5\" │ 1                     │ 0                 │ 0                   │\n    # │ 2   │ 17.5 │ 47.5 │ \"17.5_47.5\" │ 1                     │ 0                 │ 0                   │\n    # │ 3   │ 24.5 │ 37.5 │ \"24.5_37.5\" │ 1                     │ 0                 │ 0                   │\n\n# Create the object\n# The `sitecolumns` keyword tells SpatialEcology that the input DataFrame has sites as rows (and species as columns)\namph = Assemblage(amphdata[4:end],amphdata[1:3], sitecolumns = false)\n    # Matrix data assumed to be presence-absence\n    # Assemblage with 73 species in 1010 sites\n    #\n    # Species names:\n    # Salamandra_salamandra, _Calotriton_asper, _Calotriton_arnoldi...Chioglossa_lusitanica, Pleurodeles_waltl\n    #\n    # Site names:\n    # 1, 2, 3...1009, 1010\n\nplot(amph)(Image: )"
},

{
    "location": "#Accessing-and-adding-data:-1",
    "page": "Readme",
    "title": "Accessing and adding data:",
    "category": "section",
    "text": "# access functions summarize the data, such as `occupancy`, `richness`, `nsites`, `nspecies`\nmean(occupancy(amph))\n    # 125.15068493150685\n\n# Add DataFrames or Vectors of data to the assemblage, DataFrames are automatically aligned keeping everything together\naddtraits!(amph, occupancy(amph), :rangesize)\n\n# and access the data easily\nhistogram(amph[:rangesize], grid = false, legend = false)(Image: )"
},

{
    "location": "#Easy-subsetting-and-quick-views:-1",
    "page": "Readme",
    "title": "Easy subsetting and quick views:",
    "category": "section",
    "text": "meanrange = map(site->mean(amph[:rangesize][occurring(amph,site)]), 1:nsites(amph))\nplot(meanrange, amph, color = :fire)(Image: )triturus = view(amph, species = contains.(speciesnames(amph), \"Triturus\"))\n    # SubAssemblage with 6 species in 1010 sites\n    #\n    # Species names:\n    # _Triturus_marmoratus, _Triturus_pygmaeus, _Triturus_cristatus..._Triturus_karelinii_nonspl, _Triturus_dobrogicus\n    #\n    # Site names:\n    # 1, 2, 3...1009, 1010\n\nextrema(coordinates(triturus), 1)\n    # 1×2 Array{Tuple{Float64,Float64},2}:\n    #  (-10.5, 29.5)  (34.5, 70.5)\n    # Triturus exists between latitudes 34 and 71 in Europe"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SpatialEcology.@forward_funcSpatialEcology.@sitestatsSpatialEcology.@traitsSpatialEcology.@withSpatialEcology.AbstractComMatrixSpatialEcology.AssemblageSpatialEcology.BboxSpatialEcology.ComMatrixSpatialEcology.DispersionFieldSpatialEcology.GridDataSpatialEcology.GridTopologySpatialEcology.GroupedAssemblageSpatialEcology.LocationsSpatialEcology.PointDataSpatialEcology.SEAssemblageSpatialEcology.SEGridSpatialEcology.SELocationsSpatialEcology.SEPointsSpatialEcology.SESpatialDataSpatialEcology.SEThingsSpatialEcology.SiteDataSpatialEcology.SpatialEcologySpatialEcology.SpeciesDataSpatialEcology.SubAssemblageSpatialEcology.SubComMatrixSpatialEcology.SubGridDataSpatialEcology.SubLocationsSpatialEcology.SubPointDataSpatialEcology.SubSiteDataSpatialEcology.SubSpeciesDataSpatialEcology._nnzSpatialEcology.addsitestats!SpatialEcology.addtraits!SpatialEcology.asindicesSpatialEcology.asquantilesSpatialEcology.asquantiles!SpatialEcology.autoSpatialEcology.boundingboxSpatialEcology.cellsSpatialEcology.cellsizeSpatialEcology.colsumSpatialEcology.commatrixSpatialEcology.cooccurringSpatialEcology.coordinatesSpatialEcology.coordstypeSpatialEcology.coordtypeSpatialEcology.createLocationsSpatialEcology.creategridSpatialEcology.createsitenamesSpatialEcology.createsummarylineSpatialEcology.dataFrametoSparseMatrixSpatialEcology.dropbyindex!SpatialEcology.dropsites!SpatialEcology.dropspecies!SpatialEcology.eltypestSpatialEcology.eltypetSpatialEcology.evalSpatialEcology.findin2SpatialEcology.getindicesSpatialEcology.getsiteSpatialEcology.getspeciesSpatialEcology.griddataSpatialEcology.gridvarSpatialEcology.groupsitesSpatialEcology.groupspeciesSpatialEcology.guess_xycolsSpatialEcology.includeSpatialEcology.inrangeSpatialEcology.isWorldmapDataSpatialEcology.match_commat_coordsSpatialEcology.matrixrandomizationsSpatialEcology.matrixrandomizerSpatialEcology.maxrangeSpatialEcology.my_dataframe_copySpatialEcology.noccupiedSpatialEcology.noccurringSpatialEcology.nrecordsSpatialEcology.nsitesSpatialEcology.nspeciesSpatialEcology.nzcolsSpatialEcology.nzrowsSpatialEcology.occupancySpatialEcology.occupiedSpatialEcology.occurrencesSpatialEcology.occurringSpatialEcology.parsesingleDataFrameSpatialEcology.pointdataSpatialEcology.richnessSpatialEcology.rowsumSpatialEcology.sitenamesSpatialEcology.sitestatnamesSpatialEcology.sitestatsSpatialEcology.sitetotalsSpatialEcology.sortedintersectingSpatialEcology.speciesnamesSpatialEcology.speciestotalsSpatialEcology.subsetSpatialEcology.subsetgridSpatialEcology.testboolSpatialEcology.traitnamesSpatialEcology.traitsSpatialEcology.xcellsSpatialEcology.xcellsizeSpatialEcology.xmaxSpatialEcology.xminSpatialEcology.xrangeSpatialEcology.ycellsSpatialEcology.ycellsizeSpatialEcology.ymaxSpatialEcology.yminSpatialEcology.yrange"
},

]}
