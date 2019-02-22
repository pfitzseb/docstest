var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: License: MIT) (Image: Build Status) (Image: GitHub contributors) (Image: GitHub issues) (Image: GitHub version)(Image: ForTheBadge built-with-love)"
},

{
    "location": "#Zomato.jl-1",
    "page": "Readme",
    "title": "Zomato.jl",
    "category": "section",
    "text": "An unofficial Julia wrapper for Zomato\'s API :fire: However, the official documentation can be reached here"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> import Pkg\njulia> Pkg.clone(\"https://github.com/rahulkp220/Zomato.jl\")"
},

{
    "location": "#How-it-works?-1",
    "page": "Readme",
    "title": "How it works?",
    "category": "section",
    "text": "As per Zomato\'s official guidelines, access to restaurant information and search on Zomato is limited to 1000 calls per day. Hence the limit should be kept in mind.# authenticate\njulia> auth = Zomato.authenticate(\"API-KEY\")\nZomato(https://developers.zomato.com/api/v2.1/)\n\n# get the categories\njulia> Zomato.get(auth, CategoriesAPI)\n[ Info: fetching categories...\nDict{String,Any} with 1 entry:\n  \"categories\" => Any[Dict{String,Any}(\"categories\"=>Dict{String,Any}(\"name\"=>\"Delivery\",\"id\"=>1)), Dict{String,Any}(\"categories\"=>Dict{String,Any}(\"name\"=>…\n\n# get city wise details\njulia> Zomato.get(auth, CitiesAPI, q=\"london\")\n[ Info: fetching city details...\nDict{String,Any} with 4 entries:\n  \"location_suggestions\" => Any[Dict{String,Any}(\"is_state\"=>0,\"state_name\"=>\"England and Wales\",\"name\"=>\"London\",\"id\"=>61,\"state_code\"=>\"England and Wales\"…\n  \"has_total\"            => 0\n  \"status\"               => \"success\"\n  \"has_more\"             => 0"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Each function has an extensive API documentation, a sample of which is given below.help?>Zomato.get(z::Zomato.Auth, ::Type{Zomato.CitiesAPI}; kwargs...)\n  Get city details\n  ==================\n\n  Find the Zomato ID and other details for a city . \n  You can obtain the Zomato City ID in one of the following ways:\n\n    •    City Name in the Search Query - \n    Returns list of cities matching the query\n\n    •    Using coordinates - \n    Identifies the city details based on the coordinates of any location inside a city\n\n  If you already know the Zomato City ID, this API can be used to get other details of the city.\n\n  See https://developers.zomato.com/documentation#!/common/cities\n\n  Arguments\n  ===========\n\n  Parameter Description                      Parameter Type Data Type\n  ––––––––– –––––––––––––––––––––––––––––––– –––––––––––––– –––––––––\n  q         query by city name               query          String\n  lat       latitude                         query          Float\n  lon       longitude                        query          Float\n  city_ids  comma separated city_id values   query          String\n  count     number of max results to display query          Int"
},

{
    "location": "#Facing-issues?-:scream:-1",
    "page": "Readme",
    "title": "Facing issues? :scream:",
    "category": "section",
    "text": "Open a PR with the detailed expaination of the issue\nReach me out here"
},

{
    "location": "autodocs/#Zomato.APIError",
    "page": "Docstrings",
    "title": "Zomato.APIError",
    "category": "type",
    "text": "Zomato API Error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zomato.Auth",
    "page": "Docstrings",
    "title": "Zomato.Auth",
    "category": "type",
    "text": "Zomato Auth\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zomato.authenticate",
    "page": "Docstrings",
    "title": "Zomato.authenticate",
    "category": "function",
    "text": "Authenticate\n\nTakes a valid Zomato API Key\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zomato.get",
    "page": "Docstrings",
    "title": "Zomato.get",
    "category": "function",
    "text": "Get list of categories\n\nList of all restaurants categorized under a particular restaurant type can be obtained using /Search API with Category ID as inputs\n\nSee https://developers.zomato.com/documentation#!/common/categories\n\n\n\n\n\nGet city details\n\nFind the Zomato ID and other details for a city . You can obtain the Zomato City ID in one of the following ways:\n\nCity Name in the Search Query - Returns list of cities matching the query\nUsing coordinates - Identifies the city details based on the coordinates of any location inside a city\n\nIf you already know the Zomato City ID, this API can be used to get other details of the city.\n\nSee https://developers.zomato.com/documentation#!/common/cities\n\nArguments\n\nParameter Description Parameter Type Data Type\nq query by city name query String\nlat latitude query Float\nlon longitude query Float\ncity_ids comma separated city_id values query String\ncount number of max results to display query Int\n\n\n\n\n\nGet zomato collections in a city\n\nReturns Zomato Restaurant Collections in a City. The location/City input can be provided in the following ways -\n\nUsing Zomato City ID\nUsing coordinates of any location within a city\n\nList of all restaurants listed in any particular Zomato Collection can be obtained using the \'/search\' API with Collection ID and Zomato City ID as the input\n\nSee https://developers.zomato.com/documentation#!/common/collections\n\nArguments\n\nParameter Description Parameter Type Data Type\ncity_id id of the city for which collections are needed query Int\nlat latitude query Float\nlon longitude query Float\ncount number of max results to display query Int\n\n\n\n\n\nGet list of all cuisines in a city\n\nThe location/city input can be provided in the following ways -\n\nUsing Zomato City ID\nUsing coordinates of any location within a city\n\nList of all restaurants serving a particular cuisine can be obtained using \'/search\' API with cuisine ID and location details\n\nSee https://developers.zomato.com/documentation#!/common/cuisines\n\nArguments\n\nParameter Description Parameter Type Data Type\ncity_id id of the city for which cuisines are needed query Int\nlat latitude query Float\nlon longitude query Float\n\n\n\n\n\nGet list of restaurant types in a city\n\nThe location/City input can be provided in the following ways -\n\nUsing Zomato City ID\nUsing coordinates of any location within a city\n\nList of all restaurants categorized under a particular restaurant type can obtained using /Search API with Establishment ID and location details as inputs\n\nSee https://developers.zomato.com/documentation#!/common/establishments\n\nArguments\n\nParameter Description Parameter Type Data Type\ncity_id id of the city query Int\nlat latitude query Float\nlon longitude query Float\n\n\n\n\n\nGet location details based on coordinates\n\nGet Foodie and Nightlife Index, list of popular cuisines and nearby restaurants around the given coordinates\n\nSee https://developers.zomato.com/documentation#!/common/geocode\n\nArguments\n\nParameter Description Required Parameter Type Data Type\nlat latitude yes query Float\nlon longitude yes query Float\n\n\n\n\n\nGet zomato location details\n\nGet Foodie Index, Nightlife Index, Top Cuisines and Best rated restaurants in a given location\n\nSee https://developers.zomato.com/documentation#!/location/location_details\n\nArguments\n\nParameter Description Required Parameter Type Data Type\nentity_id location id obtained from locations api yes query Int\nentity_type location type obtained from locations api yes query String\n\n\n\n\n\nSearch for locations\n\nSearch for Zomato locations by keyword. Provide coordinates to get better search results\n\nSee https://developers.zomato.com/documentation#!/location/locations\n\nArguments\n\nParameter Description Required Parameter Type Data Type\nquery suggestion for location name  query String\nlat latitude yes query Float\nlon longitude yes query Float\ncount number of max results to display  query Int\n\n\n\n\n\nGet daily menu of a restaurant\n\nGet daily menu using Zomato restaurant ID.\n\nSee https://developers.zomato.com/documentation#!/restaurant/restaurant\n\nArguments\n\nParameter Description Required Parameter Type Data Type\nres_id id of restaurant whose details are requested yes query Int\n\n\n\n\n\nGet restaurant details\n\nGet detailed restaurant information using Zomato restaurant ID. Partner Access is required to access photos and reviews.\n\nSee https://developers.zomato.com/documentation#!/restaurant/restaurant_0\n\nArguments\n\nParameter Description Required Parameter Type Data Type\nres_id id of restaurant whose details are requested yes query Int\n\n\n\n\n\nGet restaurant reviews\n\nGet restaurant reviews using the Zomato restaurant ID. Only 5 latest reviews are available under the Basic API plan.\n\nSee https://developers.zomato.com/documentation#!/restaurant/reviews\n\nArguments\n\nParameter Description Required Parameter Type Data Type\nres_id id of restaurant whose details are requested yes query Int\nstart fetch results after this offset yes query Int\ncount number of max results to display  query Int\n\n\n\n\n\nSearch Zomato Restaurants\n\nThe location input can be specified using Zomato location ID or coordinates. Cuisine / Establishment / Collection IDs can be obtained from respective api calls. Get up to 100 restaurants by changing the \'start\' and \'count\' parameters with the maximum value of count being 20. Partner Access is required to access photos and reviews. Examples:\n\nTo search for \'Italian\' restaurants in \'Manhattan, New York City\', set cuisines = 55, entityid = 94741 and entitytype = zone\nTo search for \'cafes\' in \'Manhattan, New York City\', set establishmenttype = 1, entitytype = zone and entity_id = 94741\nGet list of all restaurants in \'Trending this Week\' collection in \'New York City\' by using entityid = 280, entitytype = city and collection_id = 1\n\nSee https://developers.zomato.com/documentation#!/restaurant/search\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zomato.helper",
    "page": "Docstrings",
    "title": "Zomato.helper",
    "category": "function",
    "text": "HTTP Helper\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zomato.query_builder",
    "page": "Docstrings",
    "title": "Zomato.query_builder",
    "category": "function",
    "text": "Query Builder\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Zomato.APIErrorZomato.AuthZomato.CategoriesAPIZomato.CitiesAPIZomato.CollectionsAPIZomato.CuisinesAPIZomato.DailymenuAPIZomato.EstablishmentsAPIZomato.GeocodeAPIZomato.LocationDetailsAPIZomato.LocationsAPIZomato.RestaurantAPIZomato.ReviewsAPIZomato.SearchAPIZomato.ZomatoZomato.ZomatoAPIZomato.authenticateZomato.evalZomato.getZomato.helperZomato.includeZomato.query_builderZomato.route"
},

]}
