var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Climate-analysis-tools-in-Julia-1",
    "page": "Readme",
    "title": "Climate analysis tools in Julia",
    "category": "section",
    "text": "(Image: Project Status: Active – The project has reached a stable, usable state and is being actively developed.)  (Image: codecov.io) (Image: Build Status) (Image: DOI)"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "(Image: ) (Image: )"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "Note. Now compatible with Julia 1.0!ClimateTools.jl is a collection of commonly-used tools in Climate science. Basics of climate field analysis will be covered, with some forays into exploratory techniques. The package is aimed to ease the typical steps of analysis climate models outputs and gridded datasets (support for weather stations is a work-in-progress).ClimateTools.jl is registered on METADATA.jl and can be added and updated with Pkg commands. See installation documentation for detailed installation instructions and Python\'s dependencies (for mapping features).Climate indices and bias correction functions are coded to leverage multiple threads. To gain maximum performance, use (bash shell Linux/MacOSX) export JULIA_NUM_THREADS=n, where n is the number of threads. To get an idea of the number of threads you can use type (in Julia) Sys.THREADS. This is especially useful for bias correction."
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "If you\'d like to have other climate indices coded, please, submit them through a Pull Request! I\'d be more than happy to include them. Alternatively, provide the equation in Issues."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Extraction and visualization of CF-compliant netCDF datasets\nCustom user-provided polygons and start and end date for localized studies\nClimate indices from The joint CCl/CLIVAR/JCOMM Expert Team (ET) on Climate Change Detection and Indices (ETCCDI) as well as custom climate indices. See list.\nRegridding of a datasets onto another grid\nPost-processing of climate timeseries using Quantile-Quantile mapping method (cf. Themeßl et al. 2012, Piani et al. 2010)\nSupport for physical units through the Unitful.jl package."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "Note. More in-depth documentation is provided in the official documentation (Links: stable/latest).using ClimateTools"
},

{
    "location": "#Reading-a-NetCDF-file-1",
    "page": "Readme",
    "title": "Reading a NetCDF file",
    "category": "section",
    "text": "The entry point of ClimateTools is to load data with the load function. Optional polygon clipping feature is available. By providing such polygon, the load function  returns a ClimGrid with grid points contained in the polygon.C = load(filename::String, vari::String; poly::Array, data_units::String, start_date::Tuple, end_date::Tuple)load returns a ClimGrid type. Using the optional poly argument, the user can provide a polygon and the returned ClimGrid will only contains the grid points inside the provided polygon. For some variable, the optional keyword argument data_units can be provided. For example, precipitation in climate models are usually provided as kg/m^2/s. By specifying data_units = mm, the load function returns accumulation at the data time resolution. Similarly, the user can provide Celsius as data_units and load will return Celsius instead of Kelvin.The ClimGrid is a in-memory representation of a CF-compliant netCDF file for a single variable.struct ClimGrid\n  data::AxisArray # labeled axis\n  longrid::AbstractArray{N,2} where N # the longitude grid\n  latgrid::AbstractArray{N,2} where N # the latitude grid\n  msk::Array{N, 2} where N\n  grid_mapping::Dict # bindings of native grid\n  dimension_dict::Dict\n  model::String\n  frequency::String\n  experiment::String\n  run::String\n  project::String # CORDEX, CMIP5, etc.\n  institute::String\n  filename::String\n  dataunits::String\n  latunits::String # of the coordinate variable\n  lonunits::String # of the coordinate variable\n  variable::String # Type of variable (i.e. can be the same as \"var\", but it is changed when calculating indices)\n  typeofvar::String # Variable type (e.g. tasmax, tasmin, pr)\n  typeofcal::String # Calendar type\n  timeattrib::Dict # Time attributes\n  varattribs::Dict # Variable attributes\n  globalattribs::Dict # Global attributes\n\nend"
},

{
    "location": "#Subsetting-1",
    "page": "Readme",
    "title": "Subsetting",
    "category": "section",
    "text": "Further subsets can be done in the temporal and spatial domains. spatialsubset function acts on ClimGrid type and subset the data using a user polygon. The function returns another ClimGrid.C = spatialsubset(C::ClimGrid, poly:Array{N, 2} where N)Temporal subset of the data is done with temporalsubset function, which returns a continuous timeserie between startdate and enddate.C = temporalsubset(C::ClimGrid, startdate::Tuple, enddate::Tuple)Resampling is available with the resample, which returns a given period for each year (e.g. only summer months).C = resample(C::ClimGrid, startmonth::Int, endmonth::Ind)\nC = resample(C::ClimGrid, season::String) # hardcoded seasons -> \"DJF\", \"MAM\", \"JJA\" and \"SON\""
},

{
    "location": "#Mapping-the-ClimGrid-type-1",
    "page": "Readme",
    "title": "Mapping the ClimGrid type",
    "category": "section",
    "text": "Mapping climate information can be done by using mapclimgrid.mapclimgrid(C::ClimGrid; region = \"World\")Which should return the time average of ClimGrid C over the world region.<p align=\"center\">   <img src=\"https://cloud.githubusercontent.com/assets/3630311/23712122/e97bd322-03ef-11e7-93da-749c961c4070.png?raw=true\" width=\"771\" height=\"388\" alt=\"Precipitation example\"/> </p>Note that if the ClimGrid data structure has 3 dimensions (time x longitude x latitude) the mapclimgrid function makes a time-average (i.e. climatological mean). Right now, there are a growing list of hardcoded regions (see help section of mapclimgrid function) and the default auto which use the maximum and minimum of the lat-long coordinates inside the ClimGrid structure. The user can also provide a polygon(s) and the mapclimgrid function will clip the grid points outside the specified polygon. Another option is to provide a mask (with dimensions identical to the spatial dimension of the ClimGrid data) which contains NaN and 1.0 and the data inside the ClimGrid struct will be clipped with the mask. Other regions will be added in the future, as well as the option to send a custom region defined by a lat-lon box."
},

{
    "location": "#Indices-1",
    "page": "Readme",
    "title": "Indices",
    "category": "section",
    "text": "More than 20 climate indices are available in the package, such as the annual number of tropical nights, annual maximum and minimum, etc. You can calculate such indices simply with:ind = annualmax(C::ClimGrid)Which returns another ClimGrid. You can also map this ClimGrid with the mapclimgrid function and returns the climatological mean of the annual maximum (e.g. daily precipitation in the example below). A list of indices can be found in the documentation and in the functions.jl source code.<p align=\"center\">   <img src=\"https://cloud.githubusercontent.com/assets/3630311/23873133/59b85c08-0807-11e7-967b-7cc7d28aada0.png?raw=true\" width=\"771\" height=\"388\" alt=\"Precipitation example\"/> </p>Climate indices can easily be developed by following the source code or looking at the available metadata inside a ClimGrid."
},

{
    "location": "#Interpolation-1",
    "page": "Readme",
    "title": "Interpolation",
    "category": "section",
    "text": "A typical step in climate analysis is to interpolate a given grid onto another grid. ClimateTools provides such a tool by wrapping Scipy griddata function. It is intended for visualization or as a 1st step before bias-correcting the ClimGrid dataset.The following command will interpolate the data contained in ClimGrid A into the coordinates of ClimGrid B and returns a new ClimGrid C which contains the interpolated data of A into the grid of B.C = regrid(A::ClimGrid, B::ClimGrid)It is also possible to interpolate a ClimGrid onto specified longitude and latitude vectors.C = regrid(A::ClimGrid, lon::AbstractArray{N, 1}, lat::AbstractArray{N, 1})"
},

{
    "location": "#Bias-correction-1",
    "page": "Readme",
    "title": "Bias-correction",
    "category": "section",
    "text": "See Documentation."
},

{
    "location": "#Merging-ClimGrids-1",
    "page": "Readme",
    "title": "Merging ClimGrids",
    "category": "section",
    "text": "Sometimes, the timeseries are split among multiple files (e.g. climate models outputs). To obtain the complete timeseries, you can merge 2 ClimGrid. The method is based on the merging of two AxisArrays and is overloaded for the ClimGrid type.C = merge(C1::ClimGrid, C2::ClimGrid)"
},

{
    "location": "#Exporting-1",
    "page": "Readme",
    "title": "Exporting",
    "category": "section",
    "text": "It is possible to export to a netCDF file with the command writewrite(C::ClimGrid, filename::String)"
},

{
    "location": "#TO-DO-1",
    "page": "Readme",
    "title": "TO-DO",
    "category": "section",
    "text": "Dashboard tool. This will return the main characteristics of a ClimGrid: maps of minimum, maximum and mean climatological values, seasonal cycle, timeseries of annual maximum, minimum and mean values, etc...\nCreate a WeatherStation type.\nAdd a more complex quantile-quantile mapping technique, combining extreme value theory and quantile-quantile standard technique"
},

]}
