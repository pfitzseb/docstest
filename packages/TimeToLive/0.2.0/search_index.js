var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TimeToLive-1",
    "page": "Readme",
    "title": "TimeToLive",
    "category": "section",
    "text": "(Image: Build Status)A TTL cache.julia> using Dates, TimeToLive\n\njulia> ttl = TTL{Int, String}(Second(1))\nTTL(1 second){Int64,String}()\n\njulia> ttl[0] = \"foo\"\n\"foo\"\n\njulia> ttl[0]\n\"foo\"\n\njulia> sleep(2)\n\njulia> get(ttl, 0, \"bar\")\n\"bar\""
},

{
    "location": "autodocs/#TimeToLive.TTL",
    "page": "Docstrings",
    "title": "TimeToLive.TTL",
    "category": "type",
    "text": "TTL(ttl::Period; refresh_on_access::Bool=true) -> TTL{Any, Any}\nTTL{K, V}(ttl::Period; refresh_on_access::Bool=true) -> TTL{K, V}\n\nA TTL cache. If refresh_on_access is set, expiries are reset whenever they are accessed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TimeToLive.NodeTimeToLive.TTLTimeToLive.TimeToLiveTimeToLive.delete_laterTimeToLive.evalTimeToLive.include"
},

]}
