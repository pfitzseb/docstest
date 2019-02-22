var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EcoBase-1",
    "page": "Readme",
    "title": "EcoBase",
    "category": "section",
    "text": "A package implementing an abstract interface to data types used in ecological analyses"
},

{
    "location": "autodocs/#EcoBase.AbstractAssemblage",
    "page": "Docstrings",
    "title": "EcoBase.AbstractAssemblage",
    "category": "type",
    "text": "AbstractAssemblage{D <: Real (e.g. Int, Float64, Bool),\n                   T <: AbstractThings,\n                   P <: AbstractPlaces}\n\nAn assemblage of things recorded as being present in one or more places. These may, for instance, be species counts in quadrats over a regular grid, relative abundance of viral sequences in a group of individuals, or presence-absence of genera over multiple islands.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EcoBase.AbstractGrid",
    "page": "Docstrings",
    "title": "EcoBase.AbstractGrid",
    "category": "type",
    "text": "AbstractGrid <: AbstractLocationData\n\nSubtype of AbstractLocationData where locations are a grid of regularly spaced, identically shaped, locations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EcoBase.AbstractLocationData",
    "page": "Docstrings",
    "title": "EcoBase.AbstractLocationData",
    "category": "type",
    "text": "AbstractLocationData\n\nComposed within AbstractPlaces in cases when geographic location data exists. It can reference locations with some geographical component. This may be a series of arbitrarily arranged points, a series of areas, or even grid of regularly spaced quadrats (see subtype AbstractGrid).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EcoBase.AbstractPlaces",
    "page": "Docstrings",
    "title": "EcoBase.AbstractPlaces",
    "category": "type",
    "text": "AbstractPlaces{LocationDataType <: Union{Nothing, AbstractLocationData}}\n\nAbstractPlaces is the supertype for containers of the places where things are found (see AbstractThings). This will contain names or a reference for the places, and (optionally) metadata such as what kind of place these are. AbstractPlaces is parameterised by the spatial location data type for the places. This should be Nothing if the places have no associated spatial data, or a subtype of AbstractLocationData if they have spatial data. Other metadata in the AbstractPlaces subtype should be in the AbstractPlaces subtype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EcoBase.AbstractPoints",
    "page": "Docstrings",
    "title": "EcoBase.AbstractPoints",
    "category": "type",
    "text": "AbstractPoints <: AbstractLocationData\n\nSubtype of AbstractLocationData where locations are a series of points in space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EcoBase.AbstractThings",
    "page": "Docstrings",
    "title": "EcoBase.AbstractThings",
    "category": "type",
    "text": "AbstractThings\n\nSupertype for container of objects being observed, whether these are species, sequences, tips of a phylogeny (which could be either), or some other type of thing. This will contain the names of the things being observed, and (optionally) metadata about them, such as a phylogeny that connects them, taxonomic information, their sequences, trait information, information on similarity between the different things, etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EcoBase.AbstractAssemblageEcoBase.AbstractGridEcoBase.AbstractLocationDataEcoBase.AbstractPlacesEcoBase.AbstractPointsEcoBase.AbstractThingsEcoBase.EcoBaseEcoBase.cellsEcoBase.cellsizeEcoBase.convert_to_imageEcoBase.cooccurringEcoBase.coordinatesEcoBase.createsummarylineEcoBase.evalEcoBase.getcoordsEcoBase.includeEcoBase.indicesEcoBase.nnzEcoBase.noccupiedEcoBase.noccurringEcoBase.nplacesEcoBase.nrecordsEcoBase.nthingsEcoBase.nzcolsEcoBase.nzrowsEcoBase.occupancyEcoBase.occupiedEcoBase.occurrencesEcoBase.occurringEcoBase.placenamesEcoBase.placeoccurrencesEcoBase.placesEcoBase.recordsEcoBase.richnessEcoBase.thingnamesEcoBase.thingoccurrencesEcoBase.thingsEcoBase.xcellsEcoBase.xcellsizeEcoBase.xmaxEcoBase.xminEcoBase.xrangeEcoBase.ycellsEcoBase.ycellsizeEcoBase.ymaxEcoBase.yminEcoBase.yrange"
},

]}
