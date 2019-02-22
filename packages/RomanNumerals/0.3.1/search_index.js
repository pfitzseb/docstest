var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RomanNumerals.jl-1",
    "page": "Readme",
    "title": "RomanNumerals.jl",
    "category": "section",
    "text": "RomanNumerals.jl is a package that brings basic support for Roman numerals to Julia."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "RomanNumerals introduces one new type called RomanNumeral.You can create new Roman numerals by calling RomanNumeral(\"MMXV\") or RomanNumeral(2015). Alternatively, you can simply write rn\"MMXV\" and Julia will interpret it correctly.Basic arithmetic operations are supported."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> RomanNumeral(100)\nC\n\njulia> a = rn\"lvi\"\nLVI\n\njulia> b = rn\"XXXX\"\nXL\n\njulia> a + b, a % b\n(XCVI,XVI)\n\njulia> factor(rn\"XLVIII\")\nDict{RomanNumeral,RomanNumeral} with 2 entries:\n  II  => IV\n  III => I\n\njulia> primes(rn\"X\")\n4-element Array{RomanNumeral,1}:\n  II\n III\n   V\n VII"
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "A forgiving parser:\nLeading and trailing whitespace is ignored\nCan handle both lowercase and uppercase (and mixes of the two)\nCan interpret non-optimal numerals (e.g. XIIII). Non-optimal numerals were valid in traditional Rome, and even used more commonly than their minimal counterparts. RomanNumerals.jl will automatically optimize non-optimal inputs.\nCan do number theory (Who knew the Romans were into this kind of thing)\nFast"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Pull requests adding functionality are welcome (but please take note of the style guidelines)"
},

{
    "location": "autodocs/#RomanNumerals.@rn_str",
    "page": "Docstrings",
    "title": "RomanNumerals.@rn_str",
    "category": "macro",
    "text": "rn\"MMXV\" syntactic sugar\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RomanNumerals.RN",
    "page": "Docstrings",
    "title": "RomanNumerals.RN",
    "category": "type",
    "text": "RomanNumeral(::Integer)\nRomanNumeral(::AbstractString)\n\nRoman number: it contains both the standard number and its roman representation. It behaves like standard numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RomanNumerals.RomanNumeral",
    "page": "Docstrings",
    "title": "RomanNumerals.RomanNumeral",
    "category": "type",
    "text": "RomanNumeral(::Integer)\nRomanNumeral(::AbstractString)\n\nRoman number: it contains both the standard number and its roman representation. It behaves like standard numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RomanNumerals.@rn_strRomanNumerals.NUMERAL_MAPRomanNumerals.RNRomanNumerals.RomanNumeralRomanNumerals.RomanNumeralsRomanNumerals.VALID_ROMAN_PATTERNRomanNumerals.evalRomanNumerals.includeRomanNumerals.isprimeRomanNumerals.toroman"
},

]}
