var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LogParser-1",
    "page": "Readme",
    "title": "LogParser",
    "category": "section",
    "text": "Linux: (Image: Build Status) </br> pkg.julialang.org: (Image: LogParser) </br> pkg.julialang.org: (Image: LogParser) </br> pkg.julialang.org: (Image: LogParser) </br> pkg.julialang.org: (Image: LogParser) </br> Windows: (Image: Build status) </br>LogParser.jl is a package for parsing server logs. Currently, only server logs having the Apache Combined format are supported (although Apache Common may parse as well). Additional types of logs may be added in the future as well.LogParser.jl will attempt to handle the log format even if it is mangled, returning partial matches as best as possible. For example, if the end of the log entry is mangled, you may still get an IP address returned, timestamp and other parts that were able to be parsed."
},

{
    "location": "#Code-examples-1",
    "page": "Readme",
    "title": "Code examples",
    "category": "section",
    "text": "The API for this package is straightforward:using LogParser, GZip\n\n#Read in gzipped file\njbapachecombined = readdlm(gzopen(Pkg.dir(\"LogParser\", \"test\", \"data\", \"juliabloggers-apachecombined.gz\")), \'\\t\')\n\n#Parse file\njbparsed = parseapachecombined(vec(jbapachecombined))\n\n#Convert to DataFrame if desired\njbparsed_df = DataFrame(jbparsed)"
},

{
    "location": "#Licensing-1",
    "page": "Readme",
    "title": "Licensing",
    "category": "section",
    "text": "LogParser.jl is licensed under the MIT \"Expat\" license"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LogParser.ApacheLogLogParser.DataFrameLogParser.LogParserLogParser.apachecombinedregexLogParser.evalLogParser.firsteightregexLogParser.firstfieldregexLogParser.firstfiveregexLogParser.firstfourregexLogParser.firstsevenregexLogParser.firstsixregexLogParser.firstthreeregexLogParser.firsttworegexLogParser.includeLogParser.parseapachecombined"
},

]}
