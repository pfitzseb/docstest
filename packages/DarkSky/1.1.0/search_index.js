var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DarkSky.jl-1",
    "page": "Readme",
    "title": "DarkSky.jl",
    "category": "section",
    "text": "A Julia wrapper for the Dark Sky weather data API.(Image: Build Status)(Image: Coverage Status) (Image: codecov)(Image: ) (Image: )"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package is a wrapper for the Dark Sky API.The Dark Sky API requires an API key. See the Dark Sky Developer Documentation to request one."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "# Install the latest stable version:\nPkg.install(\"DarkSky\")\n Or the the development version from GitHub:\nPkg.clone(\"git://github.com/ellisvalentiner/DarkSky.jl.git\")DarkSky.jl expects your API key to be stored as an environment variable named DARKSKY_API_KEY."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The basic usage is to request the current weather forecast (a Forecast Request) or the observed or forecast weather conditions for a datetime in the past or future (a Time Machine Request).using DarkSky\n# Make a \"Forecast Request\", returns the current weather forecast for the next week.\nresponse = forecast(42.3601, -71.0589);\n# Make a \"Time Machine Request\", returns the observed or forecast weather conditions for a date in\n# the past or future.\nresponse = forecast(42.3601, -71.0589, DateTime(2018, 3, 7, 14, 19, 57));The Dark Sky response contains the following properties (and can be accessed by functions with the same name):latitude - The requested latitude.\nlongitude - The requested longitude.\ntimezone - The IANA timezone name for the requested location.\ncurrently - A data point containing the current weather conditions at the requested location. (optional)\nminutely - A data block containing the weather conditions minute-by-minute for the next hour. (optional)\nhourly - A data block containing the weather conditions hour-by-hour for the next two days. (optional)\ndaily - A data block containing the weather conditions day-by-day for the next week. (optional)\nalerts - An alerts array, which, if present, contains any severe weather alerts pertinent to the requested location. (optional)\nflags - A flags object containing miscellaneous metadata about the request. (optional)# Extract the requested latitude\nlatitude(response)\n# Extract the \"daily\" data block\ndaily(response)\n# Extract the \"alerts\" data block\nalerts(response)Note that optional properties may not contain data (e.g. there may be no alerts)."
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "See the CONTRIBUTING file."
},

{
    "location": "#Conduct-1",
    "page": "Readme",
    "title": "Conduct",
    "category": "section",
    "text": "We adhere to the Julia community standards."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The code is available under the MIT License."
},

{
    "location": "autodocs/#DarkSky.forecast",
    "page": "Docstrings",
    "title": "DarkSky.forecast",
    "category": "function",
    "text": "forecast(latitude::Float64, longitude::Float64; verbose::Bool=true, kwargs...)\n\nMake a \"Forecast Request\", returns the current weather forecast for the next week.\n\nArguments\n\nlatitude: the latitude of a location (in decimal degrees). Positive is north, negative is south.\nlongitude: the longitude of a location (in decimal degrees). Positive is east, negative is west.\nverbose: whether to display the HTTP request verbosely (optional).\nexclude: exclude some number of data blocks from the API response (optional).\nextend: when present, return hour-by-hour data for the next 168 hours, instead of the next 48 (optional).\nlang: return summary properties in the desired language (optional).\nunits: return weather conditions in the requested units (optional).\n\n\n\n\n\nforecast(latitude::Float64, longitude::Float64, time::DateTime; verbose::Bool=true, kwargs...)\n\nMake a \"Time Machine Request\", returns the observed or forecast weather conditions for a date in the past or future.\n\nArguments\n\nlatitude: the latitude of a location (in decimal degrees). Positive is north, negative is south.\nlongitude: the longitude of a location (in decimal degrees). Positive is east, negative is west.\ntime: the timestamp for a Time Machine Request (optional).\nverbose: whether to display the HTTP request verbosely (optional).\nexclude: exclude some number of data blocks from the API response (optional).\nlang: return summary properties in the desired language (optional).\nunits: return weather conditions in the requested units (optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DarkSky.DarkSkyDarkSky.DarkSkyResponseDarkSky.OptionalDarkSky.SUPPORTED_LANGSDarkSky.SUPPORTED_UNITSDarkSky._get_jsonDarkSky.alertsDarkSky.currentlyDarkSky.dailyDarkSky.evalDarkSky.flagsDarkSky.forecastDarkSky.hourlyDarkSky.includeDarkSky.latitudeDarkSky.longitudeDarkSky.minutelyDarkSky.offsetDarkSky.timezone"
},

]}
