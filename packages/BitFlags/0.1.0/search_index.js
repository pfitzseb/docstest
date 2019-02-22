var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BitFlags.jl-1",
    "page": "Readme",
    "title": "BitFlags.jl",
    "category": "section",
    "text": "(Image: Build Status)BitFlag.jl provides an Enum-like type for bit flag option values. The main motivations are:Members have implicit numbering with incrementing powers of 2.\nBinary OR (|) and AND (&) operations are supported among members.\nValues are pretty-printed by name, with OR chains when multiple bits are set.This implementation is a relatively minor modification of Julia\'s Enum type implementation."
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "To create a new BitFlag type, use the @bitflag macro, provide a name, an optional integer type, and a list of the member options (and optional values). A new definition can be given in inline form:@bitflag BitFlagName[::BaseType] value1[=x] value2[=y]or as a block definition:@bitflag BitFlagName[::BaseType] begin\n    value1[=x]\n    value2[=y]\nendAutomatic numbering starts at 1, but an initial flag value may be explicitly set to the value of zero. If no explicit zero-valued member is given, then 0 is not a valid value for the BitFlag. In the following example, we build an 8-bit BitFlag with no value for bit 3 (value of 4).julia> @bitflag MyStyle::UInt8 S_NONE=0 S_BOLD S_ITALIC S_LARGE=8Combinations can be made using standard binary operations:julia> S_BOLD | S_LARGE\n(S_BOLD | S_LARGE)::MyStyle = 0x09\n\njulia> ans & S_ITALIC\nS_NONE::MyStyle = 0x00Conversion to and from integers is permitted, but only for valid combinations of values:julia> Int(S_BOLD)\n1\n\njulia> Integer(S_ITALIC)    # Abstract Integer uses native UInt8 type\n0x02\n\njulia> MyStyle(9)\n(S_BOLD | S_LARGE)::MyStyle = 0x09\n\njulia> MyStyle(4)    # MyStyle does not have a flag at 4\nERROR: ArgumentError: invalid value for BitFlag MyStyle: 4\nStacktrace:\n..."
},

{
    "location": "#Printing-1",
    "page": "Readme",
    "title": "Printing",
    "category": "section",
    "text": "Each flag value is then printed with contextual information which is more user-friendly than a raw integer:julia> S_BOLD\nS_BOLD::MyStyle = 0x00000001\n\njulia> S_BOLD | S_LARGE\n(S_BOLD | S_LARGE)::MyStyle = 0x00000005In a compact context (such as in multi-dimensional arrays), the pretty-printing takes on a shorter form:julia> [S_NONE (S_BOLD | S_LARGE)]\n1×2 Array{MyStyle,2}:\n S_NONE  S_BOLD|S_LARGE\n\njulia> show(IOContext(stdout, :compact => true), S_BOLD | S_LARGE)\nS_BOLD|S_LARGE"
},

{
    "location": "#Input/Output-1",
    "page": "Readme",
    "title": "Input/Output",
    "category": "section",
    "text": "BitFlags support writing to and reading from streams as integers:julia> io = IOBuffer();\n\njulia> write(io, UInt8(9));\n\njulia> seekstart(io);\n\njulia> read(io, MyStyle)\n(S_BOLD | S_LARGE)::MyStyle = 0x09"
},

{
    "location": "autodocs/#BitFlags.@bitflag",
    "page": "Docstrings",
    "title": "BitFlags.@bitflag",
    "category": "macro",
    "text": "@bitflag BitFlagName[::BaseType] value1[=x] value2[=y]\n\nCreate a BitFlag{BaseType} subtype with name BitFlagName and flag member values of value1 and value2 with optional assigned values of x and y, respectively. BitFlagName can be used just like other types and flag member values as regular values, such as\n\nExamples\n\njulia> @bitflag Items apple=1 fork=2 napkin=4\n\njulia> f(x::Items) = \"I\'m an Item with value: $x\"\nf (generic function with 1 method)\n\njulia> f(apple)\n\"I\'m an Item with value: apple\"\n\njulia> f(apple | fork)\n\"I\'m an Item with value: apple | fork\"\n\nValues can also be specified inside a begin block, e.g.\n\n@bitflag BitFlagName begin\n    value1\n    value2\nend\n\nBaseType, which defaults to UInt32, must be a primitive subtype of Unsigned. Member values can be converted between the bit flag type and BaseType. read and write perform these conversions automatically.\n\nTo list all the instances of an bitflag use instances, e.g.\n\njulia> instances(Items)\n(apple::Items = 0x00000001, fork::Items = 0x00000002, napkin::Items = 0x00000004)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BitFlags.@bitflagBitFlags.BitFlagBitFlags.BitFlagsBitFlags.basetypeBitFlags.bitflag_argument_errorBitFlags.evalBitFlags.includeBitFlags.membershiptest"
},

]}
