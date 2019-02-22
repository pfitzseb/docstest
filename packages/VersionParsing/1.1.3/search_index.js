var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VersionParsing-1",
    "page": "Readme",
    "title": "VersionParsing",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)The VersionParsing package implements flexible parsing of version-number strings into Julia\'s built-in VersionNumber type, via the vparse(string) function.Unlike the VersionNumber(string) constructor, vparse(string) can handle version-number strings in a much wider range of formats than are encompassed by the semver standard.  This is useful in order to support VersionNumber comparisons applied to \"foreign\" version numbers from external packages.For example,Non-numeric prefixes are stripped along with any invalid version characters. Commas are treated as decimal points.\nText following whitespace after the version number is ignored.\nmajor.minor.patch.x.y.z is supported, with x.y.z prepended to the semver build identifier, i.e. it is parsed like major.minor.patch+x.y.z.\nMultiple +x+y build identifiers are concatenated as if they were +x.y.\nA leading 0 is prepended if needed, e.g. .x is treated as 0.x.\nWhen all else fails, everything except the first major.minor.patch digits found are ignored."
},

{
    "location": "autodocs/#VersionParsing.VersionParsing",
    "page": "Docstrings",
    "title": "VersionParsing.VersionParsing",
    "category": "module",
    "text": "The VersionParsing package implements flexible parsing of version-number strings into Julia\'s built-in VersionNumber type, via the vparse(string) function.\n\nUnlike the VersionNumber(string) constructor, vparse(string) can handle version-number strings in a much wider range of formats without throwing an exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#VersionParsing.vparse",
    "page": "Docstrings",
    "title": "VersionParsing.vparse",
    "category": "function",
    "text": "vparse(s::AbstractString)\n\nReturns a VersionNumber representing as much as possible of the version information in the string s.  A much wider range of formats is supported than the semver styles recognized by VersionNumber(s).\n\nFor example,\n\nNon-numeric prefixes are stripped along with any invalid version characters. Commas are treated as decimal points.\nText following whitespace after the version number is ignored.\nmajor.minor.patch.x.y.z is supported, with x.y.z prepended to the semver build identifier, i.e. it is parsed like major.minor.patch+x.y.z.\nMultiple +x+y build identifiers are concatenated as if they were +x.y.\nA leading 0 is prepended if needed, e.g. .x is treated as 0.x.\nWhen all else fails, everything except the first major.minor.patch digits found are ignored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "VersionParsing.VersionParsingVersionParsing.digits2numVersionParsing.evalVersionParsing.includeVersionParsing.splitpartsVersionParsing.vparse"
},

]}
