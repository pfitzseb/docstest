var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#World-Bank-Data-in-Julia-1",
    "page": "Readme",
    "title": "World Bank Data in Julia",
    "category": "section",
    "text": "The World Bank provides free access to data about development at data.worldbank.org.The primary collection of development indicators is called World Development Indicators (WDI).This module provides two functions to access and download the data: search_wdi() and wdi().It follows roughly the R WDI package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"WorldBankData\")"
},

{
    "location": "#Basic-Examples-1",
    "page": "Readme",
    "title": "Basic Examples",
    "category": "section",
    "text": "Obtain a DataFrame with the gross national income per capita for the US and Brazil:using WorldBankData\ndf=wdi(\"NY.GNP.PCAP.CD\", [\"US\",\"BR\"])The WDI indicator NY.GNP.PCAP.CD becomes the symbol NY_GNP_PCAP_CD in the DataFrame, i.e. . gets replaced by _."
},

{
    "location": "#Multiple-countries-and-indicators-1",
    "page": "Readme",
    "title": "Multiple countries and indicators",
    "category": "section",
    "text": "using WorldBankData\ndf=wdi([\"NY.GNP.PCAP.CD\",\"AG.LND.ARBL.HA.PC\"], [\"US\",\"BR\"], startyear=1980, endyear=2008, extra=true)This returns the GNI per capita and the arable land (hectares per person) for the time range 1980-2008 for the US and Brazil. It also attaches extra country information (the extra=true argument) like the capital, longitude, latitude, income range, etc."
},

{
    "location": "#Arguments-1",
    "page": "Readme",
    "title": "Arguments",
    "category": "section",
    "text": "The wdi function has the following arguments:wdi(indicators::Union{String,Array{String,1}}, countries::Union{String,Array{String,1}}, startyear::Integer=1800, endyear::Integer=3000; extra::Bool=false, verbose::Bool=false)It needs a minimum of two arguments: the indicators (from the WDI database) and the countries (ISO two letter country codes). The rest are optional arguments.startyear: First year to include.endyear: Last year to include.extra: If extra=true, wdi() attaches extra country data (like the capital) to the returned DataFrame.verbose: If verbose=true, wdi() will print URL download information. This can be used as a progress indicator if many countries and indicators are requested."
},

{
    "location": "#Searching-1",
    "page": "Readme",
    "title": "Searching",
    "category": "section",
    "text": "The most convenient way to explore the database is probably through a web browser at data.worldbank.org.However, the module does provide a search function: search_wdi().One can search for \"countries\" or \"indicators\" data."
},

{
    "location": "#Example-for-country-search-by-name-1",
    "page": "Readme",
    "title": "Example for country search by name",
    "category": "section",
    "text": "julia> using WorldBankData\njulia> res=search_wdi(\"countries\",\"name\",r\"united\"i)\njulia> res[:name]\n3-element DataArray{UTF8String,1}:\n \"United Arab Emirates\"\n \"United Kingdom\"\n \"United States\"\njulia> res[:iso2c]\n3-element DataArray{ASCIIString,1}:\n \"AE\"\n \"GB\"\n \"US\""
},

{
    "location": "#Example-for-indicator-search-by-description-1",
    "page": "Readme",
    "title": "Example for indicator search by description",
    "category": "section",
    "text": "julia> using WorldBankData\njulia> res=search_wdi(\"indicators\",\"description\",r\"gross national expenditure\"i)\n6x5 DataFrame\n|-------|---------------------|------------|---------|\n| Col # | Name                | Type       | Missing |\n| 1     | description         | UTF8String | 0       |\n| 2     | indicator           | UTF8String | 0       |\n| 3     | name                | UTF8String | 0       |\n| 4     | source_database     | UTF8String | 0       |\n| 5     | source_organization | UTF8String | 0       |\n\njulia> res[:name]\n6-element DataArray{UTF8String,1}:\n \"Gross national expenditure deflator (base year varies by country)\"\n \"Gross national expenditure (current US\\$)\"\n \"Gross national expenditure (current LCU)\"\n \"Gross national expenditure (constant 2005 US\\$)\"\n \"Gross national expenditure (constant LCU)\"\n \"Gross national expenditure (% of GDP)\"\n\njulia> res[:indicator]\n6-element DataArray{UTF8String,1}:\n \"NE.DAB.DEFL.ZS\"\n \"NE.DAB.TOTL.CD\"\n \"NE.DAB.TOTL.CN\"\n \"NE.DAB.TOTL.KD\"\n \"NE.DAB.TOTL.KN\"\n \"NE.DAB.TOTL.ZS\""
},

{
    "location": "#The-search_wdi()-function-1",
    "page": "Readme",
    "title": "The search_wdi() function",
    "category": "section",
    "text": "The search_wdi() function has the following argumentssearch_wdi(data::String, entry::String, regx::Regex)::DataFramedata: Either countries or indicators.entry: One of the attributes (like name).regex: Regular expression to search for.\"countries\" can be searched for \"name\", \"region\", \"capital\", \"iso2c\", \"iso3c\", \"income\", and \"lending\".\"indicators\" can be searched for \"name\", \"description\", \"topics\", \"sourcedatabase\", and \"sourceorganization\".The search function uses two DataFrames country_cache and indicator_cache and searches through these. On the first search it will download the data from the World Bank website. This takes much longer for the larger indicators data. This only happens once per session. After the first use the data is cached.Note that the last argument to search_wdi() is a regular expression denoted by r\"...\" and an i at the end means that it is case insensitive."
},

{
    "location": "#Examples-of-country-searches-1",
    "page": "Readme",
    "title": "Examples of country searches",
    "category": "section",
    "text": "julia> search_wdi(\"countries\",\"iso2c\",r\"TZ\"i)\n1x9 DataFrame\n|-------|---------|------------|-------|-------|----------|---------|-----------|----------|----------------------------------------|\n| Row # | capital | income     | iso2c | iso3c | latitude | lending | longitude | name     | region                                 |\n| 1     | Dodoma  | Low income | TZ    | TZA   | -6.17486 | IDA     | 35.7382   | Tanzania | Sub-Saharan Africa (all income levels) |\n\n\njulia> search_wdi(\"countries\",\"income\",r\"upper middle\"i)\n...\n\njulia> search_wdi(\"countries\",\"region\",r\"Latin America\"i)\n...\n\njulia> search_wdi(\"countries\",\"capital\",r\"^Ka\"i)\n3x9 DataFrame\n|-------|-----------|------------|-------|-------|----------|---------|-----------|-------------|----------------------------------------|\n| Row # | capital   | income     | iso2c | iso3c | latitude | lending | longitude | name        | region                                 |\n| 1     | Kabul     | Low income | AF    | AFG   | 34.5228  | IDA     | 69.1761   | Afghanistan | South Asia                             |\n| 2     | Kathmandu | Low income | NP    | NPL   | 27.6939  | IDA     | 85.3157   | Nepal       | South Asia                             |\n| 3     | Kampala   | Low income | UG    | UGA   | 0.314269 | IDA     | 32.5729   | Uganda      | Sub-Saharan Africa (all income levels) |\n\njulia> search_wdi(\"countries\",\"lending\",r\"IBRD\"i)\n...\n"
},

{
    "location": "#Examples-of-indicator-searches-1",
    "page": "Readme",
    "title": "Examples of indicator searches",
    "category": "section",
    "text": "julia> search_wdi(\"indicators\",\"name\",r\"gross national expenditure\"i)\n...\njulia> search_wdi(\"indicators\",\"description\",r\"gross national expenditure\"i)\n...\njulia> search_wdi(\"indicators\",\"source_database\",r\"Sustainable\"i)\n...\njulia> search_wdi(\"indicators\",\"source_organization\",r\"Global Partnership\"i)\n"
},

{
    "location": "#Tips-and-Tricks-1",
    "page": "Readme",
    "title": "Tips and Tricks",
    "category": "section",
    "text": ""
},

{
    "location": "#Extracting-country-data-from-results-1",
    "page": "Readme",
    "title": "Extracting country data from results",
    "category": "section",
    "text": "df=wdi(\"NY.GNP.PCAP.CD\", [\"US\",\"BR\"], 1980, 2012, extra=true)\nus_gnp=df[df[:iso2c] .== \"US\",:]"
},

{
    "location": "#Year-format-1",
    "page": "Readme",
    "title": "Year format",
    "category": "section",
    "text": "For similarity with the R WDI package the :year column is in Float64 format. WDI data is yearly.You can easily convert this to a Date series:using WorldBankData\nusing Dates\n\ndf=wdi(\"AG.LND.ARBL.HA.PC\", \"US\", 1900, 2011)\ndf[:year] = map(Date, df[:year])"
},

{
    "location": "#Plotting-1",
    "page": "Readme",
    "title": "Plotting",
    "category": "section",
    "text": "Install the Plots.jl package with Pkg.add(\"Plots\").using WorldBankData\nusing Plots\n\ndf=wdi(\"AG.LND.ARBL.HA.PC\", \"US\", 1980, 2010)\n\nplot(df[:year], df[:AG_LND_ARBL_HA_PC])"
},

{
    "location": "#Empty/Missing-results-1",
    "page": "Readme",
    "title": "Empty/Missing results",
    "category": "section",
    "text": "wdi will return an empty DataFrame without warning if there is no data:julia> dfAS=wdi(\"EN.ATM.CO2E.KT\", \"AS\")\n0x4 DataFrameYou can check for this with size(dfAS)[1]==0.It will return a DataFrame for the cases where it has data, i.e.julia> df=wdi(\"EN.ATM.CO2E.KT\", [\"AS\",\"US\"])\n51x4 DataFrame\n..."
},

{
    "location": "#Cache-1",
    "page": "Readme",
    "title": "Cache",
    "category": "section",
    "text": "The data in the World Bank database changes infrequently. Therefore it makes little sense to download it every time a script is run."
},

{
    "location": "#Metadata-1",
    "page": "Readme",
    "title": "Metadata",
    "category": "section",
    "text": "The search_wdi() function internally caches the country and indicator metadata and therefore downloads the country and indicator data only once per session. Even that is usually not necessary. This data can easily be stored on local disk.Download and store the country and indicator information in csv files:using WorldBankData\nusing DataFrames\nusing CSV\nCSV.write(\"country_cache.csv\",WorldBankData.get_countries())\nCSV.write(\"indicator_cache.csv\", WorldBankData.get_indicators())These can be used in the script to set the WorldBankData cache variables WorldBankData.country_cache and WorldBankData.indicator_cache (which are initialized to false) using the WorldBankData.set_country_cache() and WorldBankData.set_indicator_cache() functions:using WorldBankData\nusing DataFrames\nWorldBankData.set_country_cache(CSV.read(\"country_cache.csv\"))\nWorldBankData.set_indicator_cache(CSV.read(\"indicator_cache.csv\"))From then on the search_wdi() function will use the data read from disk.The caches can be reset with WorldBankData.reset_country_cache() and WorldBankData.reset_indicator_cache()."
},

{
    "location": "#Indicator-data-1",
    "page": "Readme",
    "title": "Indicator data",
    "category": "section",
    "text": "In a similar way the indicator data itself can be cached.using WorldBankData\nusing DataFrames\nusing CSV\n\nfunction update_us_gnp_per_cap()\n    df = wdi(\"NY.GNP.PCAP.CD\", \"US\")\n    CSV.write(\"us_gnp.csv\",df)\nend\ndf=CSV.read(\"us_gnp.csv\")one then runs the update_us_gnp_per_cap() function only when needed."
},

{
    "location": "#Build-Status-1",
    "page": "Readme",
    "title": "Build Status",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "autodocs/#WorldBankData.WorldBankData",
    "page": "Docstrings",
    "title": "WorldBankData.WorldBankData",
    "category": "module",
    "text": "Provides two functions, search_wdi and wdi, for searching and fetching World Development Indicators data from the World Bank.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WorldBankData.search_wdi",
    "page": "Docstrings",
    "title": "WorldBankData.search_wdi",
    "category": "function",
    "text": "search_wdi(data::String, entry::String, regx::Regex)::DataFrame\n\nSearch World Development Indicators for countries or indicators.\n\nhttps://datacatalog.worldbank.org/dataset/world-development-indicators\n\nArguments\n\ndata : data to search for: \"indicators\" or \"countries\"\nentry : entry to lookup for countries: name,region,capital,iso2c,iso3c,income,lending for indicators: name, description, topics, source_database, source_organization\nregex : regular expression to find\n\nExamples\n\nsearch_wdi(\"countries\", \"name\", r\"united\"i)\nsearch_wdi(\"indicators\", \"description\", r\"gross national\"i)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WorldBankData.wdi",
    "page": "Docstrings",
    "title": "WorldBankData.wdi",
    "category": "function",
    "text": "wdi(indicators::Union{String,Array{String,1}}, countries::Union{String,Array{String,1}}, startyear::Integer=1800, endyear::Integer=3000; extra::Bool=false, verbose::Bool=false)::DataFrame\n\nDownload data from World Development Indicators (WDI) Data Catalog of the World Bank.\n\nhttps://datacatalog.worldbank.org/dataset/world-development-indicators\n\nArguments indicators : indicator name or array of indicators countries : string or string array of ISO 2 letter country codes or all for all countries. startyear : first year to include endyear : last year to include extra : if true additional country data should be included (region, capital, longitude, latitude, income, lending) verbose : if true print URLs downloaded, useful as progress indicator.\n\nExamples\n\ndf = wdi(\"NY.GNP.PCAP.CD\", \"US\", 1980, 2012, extra=true)\ndf = wdi(\"NY.GNP.PCAP.CD\", [\"US\",\"BR\"], 1980, 2012, extra=true)\ndf = wdi([\"NY.GNP.PCAP.CD\", \"AG.LND.ARBL.HA.PC\"], [\"US\",\"BR\"], 1980, 2012, extra=true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WorldBankData.WorldBankDataWorldBankData.all_countriesWorldBankData.clean_append!WorldBankData.clean_entryWorldBankData.convert_a2fWorldBankData.country_cacheWorldBankData.country_matchWorldBankData.df_matchWorldBankData.download_countriesWorldBankData.download_indicatorsWorldBankData.download_parse_jsonWorldBankData.evalWorldBankData.get_countriesWorldBankData.get_indicatorsWorldBankData.includeWorldBankData.indicator_cacheWorldBankData.indicator_matchWorldBankData.make_symbolWorldBankData.parse_countryWorldBankData.parse_indicatorWorldBankData.parse_wdiWorldBankData.regex_matchWorldBankData.reset_country_cacheWorldBankData.reset_indicator_cacheWorldBankData.search_countriesWorldBankData.search_indicatorsWorldBankData.search_wdiWorldBankData.set_country_cacheWorldBankData.set_indicator_cacheWorldBankData.tofloatWorldBankData.wdiWorldBankData.wdi_download"
},

]}
