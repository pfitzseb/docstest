var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Humanize.jl-1",
    "page": "Readme",
    "title": "Humanize.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)Humanize numbers, includingdata sizes (3e6 -> 3.0 MB or 2.9 MiB).\nDate/datetime differences (Date(2014,2,3) - Date(2013,3,7) -> 1 year, 1 month)\nDigit separator (12345678 -> 12,345,678)This package is MIT licensed, and is based on jmoiron\'s humanize Python library."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "All functions are also documented using Julia\'s in-built help system, e.g. ?datasize."
},

{
    "location": "#Data-sizes-1",
    "page": "Readme",
    "title": "Data sizes",
    "category": "section",
    "text": "datasize(value::Number; style=:dec, format=\"%.1f\")Style can be :dec (base 10^3), :bin (base 2^10), :gnu (base 2^10, like ls -hs).julia> datasize(3000000)\n\"3.0 MB\"\njulia> datasize(3000000, style=:bin, format=\"%.3f\")\n\"2.861 MiB\"\njulia> datasize(3000000, style=:gnu, format=\"%.3f\")\n\"2.861M\""
},

{
    "location": "#Date/datetime-differences-1",
    "page": "Readme",
    "title": "Date/datetime differences",
    "category": "section",
    "text": "timedelta(secs::Integer)\ntimedelta{T<:Integer}(years::T,months::T,days::T,hours::T,mins::T,secs::T)\ntimedelta(dt_diff::Dates.Millisecond)\ntimedelta(d_diff::Dates.Day)Turns a date/datetime difference into a abbreviated human-friendly form.julia> timedelta(70)\n\"a minute\"\njulia> timedelta(0,0,0,23,50,50)\n\"23 hours\"\njulia> timedelta(DateTime(2014,2,3,12,11,10) - \n                    DateTime(2013,3,7,13,1,20))\n\"11 months\"\njulia> timedelta(Date(2014,3,7) - Date(2013,2,4))\n\"1 year, 1 month\""
},

{
    "location": "#Digit-separator-1",
    "page": "Readme",
    "title": "Digit separator",
    "category": "section",
    "text": "julia> digitsep(12345678)\n\"12,345,678\"\njulia> digitsep(12345678, sep = \"\'\")\n\"12\'345\'678\"\njulia> digitsep(12345678, sep = \"-\", k = 4)\n\"1234-5678\""
},

{
    "location": "autodocs/#Humanize.datasize",
    "page": "Docstrings",
    "title": "Humanize.datasize",
    "category": "function",
    "text": "datasize(value::Number; style=:dec, format=\"%.1f\")\n\nFormat a number of bytes in a human-friendly format (eg. 10 kB).\n\nstyle=:dec - default, decimal suffixes (kB, MB), base 10^3\nstyle=:bin - binary suffixes (KiB, MiB), base 2^10\nstyle=:gnu - GNU-style (ls -sh style, K, M), base 2^10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Humanize.digitsep",
    "page": "Docstrings",
    "title": "Humanize.digitsep",
    "category": "function",
    "text": "digitsep(value::Integer, separator=\",\", per_separator=3)\n\nConvert an integer to a string, separating each per_separator digits by separator.\n\ndigitsep(value)  # 12345678 -> \"12,345,678\".\ndigitsep(value, separator=\"\'\")  # 12345678 -> \"12\'345\'678\".\ndigitsep(value, separator=\"/\", per_separator=4)  # 12345678 -> \"1234/5678\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Humanize.timedelta",
    "page": "Docstrings",
    "title": "Humanize.timedelta",
    "category": "function",
    "text": "timedelta(secs::Integer)\ntimedelta(seconds::Dates.Second)\ntimedelta(Δdt::Dates.Millisecond)\ntimedelta(Δdate::Dates.Day)\n\nFormat a time length in a human friendly format.\n\ntimedelta(seconds::Integer)  # 3699 -> \"An hour\".\ntimedelta(Δdt::Dates.Millisecond)\n    e.g. DateTime(2014,2,3) - DateTime(2013,3,7) -> \"11 months\".\ntimedelta(Δdate::Dates.Day)\n    e.g. Date(2014,3,7) - Date(2013,2,4) -> \"1 year, 1 month\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Humanize.BASESHumanize.HumanizeHumanize.SUFFIXESHumanize.datasizeHumanize.digitsepHumanize.evalHumanize.includeHumanize.timedelta"
},

]}
