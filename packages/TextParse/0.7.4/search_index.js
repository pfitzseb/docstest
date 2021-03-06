var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#TextParse-1",
    "page": "Home",
    "title": "TextParse",
    "category": "section",
    "text": "TextParse uses Julia\'s generated functions to generate efficient specialized parsers for text files. TextParse minimizes allocations and hence avoids involving the GC."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"TextParse\")"
},

{
    "location": "#TextParse.csvread",
    "page": "Home",
    "title": "TextParse.csvread",
    "category": "function",
    "text": "csvread(file::Union{String,IO}, delim=\',\'; <arguments>...)\n\nRead CSV from file. Returns a tuple of 2 elements:\n\nA tuple of columns each either a Vector, or StringArray\ncolumn names if header_exists=true, empty array otherwise\n\nArguments:\n\nfile: either an IO object or file name string\ndelim: the delimiter character\nspacedelim: (Bool) parse space-delimited files. delim has no effect if true.\nquotechar: character used to quote strings, defaults to \"\nescapechar: character used to escape quotechar in strings. (could be the same as quotechar)\nnrows: number of rows in the file. Defaults to 0 in which case we try to estimate this.\nskiplines_begin: skips specified number of lines at the beginning of the file\nheader_exists: boolean specifying whether CSV file contains a header\nnastrings: strings that are to be considered NA. Defaults to TextParse.NA_STRINGS\ncolnames: manually specified column names. Could be a vector or a dictionary from Int index (the column) to String column name.\ncolparsers: Parsers to use for specified columns. This can be a vector or a dictionary from column name / column index (Int) to a \"parser\". The simplest parser is a type such as Int, Float64. It can also be a dateformat\"...\", see CustomParser if you want to plug in custom parsing behavior\ntype_detect_rows: number of rows to use to infer the initial colparsers defaults to 20.\n\n\n\n\n\n"
},

{
    "location": "#Reading-CSV-1",
    "page": "Home",
    "title": "Reading CSV",
    "category": "section",
    "text": "The most useful API is probably csvread - read a CSV file:csvreadSome notable features of the CSV parser are:CSV parsing kernel generated by TextParse is type-inferable.\nUses PooledArrays for strings by default, promoting to an Array only if number of unique elements goes over 5% (after 400 rows have been read).\nAvoids allocating the string in PooledArray unless the string is not in the pool\nDoesn\'t assume all columns are nullable by default, switches column to DataValueArray if an NA value is found\nFlexible about predicted column types, can convert the column mid-way if the type changes and switch to a new fast generated method\nFast date time parsing even on Julia 0.5"
},

{
    "location": "#Dates.tryparsenext",
    "page": "Home",
    "title": "Dates.tryparsenext",
    "category": "function",
    "text": "tryparsenext{T}(tok::AbstractToken{T}, str, i, till, localopts)\n\nParses the string str starting at position i and ending at or before position till. localopts is a LocalOpts object which contains contextual options for quoting and NA parsing. (see LocalOpts documentation)\n\ntryparsenext returns a tuple (result, nextpos) where result is of type Union{Some{T}, Nothing}, nothing if parsing failed, non-null containing the parsed value if it succeeded. If parsing succeeded, nextpos is the position the next token, if any, starts at. If parsing failed, nextpos is the position at which the parsing failed.\n\n\n\n\n\n"
},

{
    "location": "#Extensible-parsing-framework-1",
    "page": "Home",
    "title": "Extensible parsing framework",
    "category": "section",
    "text": "TextParse operates by defining small parsers which are specialized to parse one kind of text very efficiently. Each such parser is described by a subtype of AbstractToken{T}. An AbstractToken{T} type should implement a tryparsenext method:TextParse.tryparsenext"
},

{
    "location": "#TextParse.Numeric",
    "page": "Home",
    "title": "TextParse.Numeric",
    "category": "type",
    "text": "parse numbers of type T\n\n\n\n\n\n"
},

{
    "location": "#TextParse.StringToken",
    "page": "Home",
    "title": "TextParse.StringToken",
    "category": "type",
    "text": "Parses string to the AbstractString type T. If T is StrRange returns a StrRange with start position (offset) and length of the substring. It is used internally by csvparse for avoiding allocating strings.\n\n\n\n\n\n"
},

{
    "location": "#TextParse.DateTimeToken",
    "page": "Home",
    "title": "TextParse.DateTimeToken",
    "category": "type",
    "text": "DateTimeToken(T, fmt::DateFormat)\n\nParse a date time string of format fmt into type T which is either Date, Time or DateTime.\n\n\n\n\n\n"
},

{
    "location": "#TextParse.NAToken",
    "page": "Home",
    "title": "TextParse.NAToken",
    "category": "type",
    "text": "NAToken(inner::AbstractToken; options...)\n\nParses a Nullable item.\n\nArguments\n\ninner: the token to parse if non-null.\nemptyisna: should an empty item be considered NA? defaults to true\nnastrings: strings that are to be considered NA. Defaults to [\"#N/A\", \"#N/A N/A\", \"#NA\", \"#n/a\", \"#n/a n/a\", \"#na\", \"-1.#IND\", \"-1.#QNAN\", \"-1.#ind\", \"-1.#qnan\", \"-NaN\", \"-nan\", \"-nan\", \"-nan\", \"1.#IND\", \"1.#QNAN\", \"1.#ind\", \"1.#qnan\", \"N/A\", \"N/A\", \"NA\", \"NA\", \"NULL\", \"NaN\", \"n/a\", \"n/a\", \"na\", \"na\", \"nan\", \"nan\", \"nan\", \"null\"]\n\n\n\n\n\n"
},

{
    "location": "#TextParse.Quoted",
    "page": "Home",
    "title": "TextParse.Quoted",
    "category": "type",
    "text": "Quoted(inner::AbstractToken; <kwargs>...)\n\nArguments:\n\ninner: The token inside quotes to parse\nrequired: are quotes required for parsing to succeed? defaults to false\nincludequotes: include the quotes in the output. Defaults to false\nincludenewlines: include newlines that appear within quotes. Defaults to true\nquotechar: character to use to quote (default decided by LocalOpts)\nescapechar: character that escapes the quote char (default set by LocalOpts)\n\n\n\n\n\n"
},

{
    "location": "#TextParse.CustomParser",
    "page": "Home",
    "title": "TextParse.CustomParser",
    "category": "type",
    "text": "CustomParser(f, T)\n\nProvide a custom parsing mechanism.\n\nArguments:\n\nf: the parser function\nT: The type of the parsed value\n\nThe parser function must take the following arguments:\n\nstr: the entire string being parsed\npos: the position in the string at which to start parsing\nlen: the length of the string the maximum position where to parse till\nopts: a LocalOpts object with options local to the current field.\n\nThe parser function must return a tuple of two values:\n\nresult: A Union{Some{T}, Nothing}. Set to nothing if parsing must fail, containing the value otherwise.\nnextpos: If parsing succeeded this must be the next position after parsing finished, if it failed this must be the position at which parsing failed.\n\n\n\n\n\n"
},

{
    "location": "#Available-AbstractToken-types-1",
    "page": "Home",
    "title": "Available AbstractToken types",
    "category": "section",
    "text": "TextParse.NumericTextParse.StringTokenTextParse.DateTimeTokenTextParse.NATokenTextParse.QuotedCustomParser"
},

{
    "location": "#TextParse.LocalOpts",
    "page": "Home",
    "title": "TextParse.LocalOpts",
    "category": "type",
    "text": "LocalOpts\n\nOptions local to the token currently being parsed.\n\nendchar: Till where to parse. (e.g. delimiter or quote ending character)\nspacedelim: Treat spaces as delimiters\nquotechar: the quote character\nescapechar: char that escapes the quote\nincludequotes: whether to include quotes while parsing\nincludenewlines: whether to include newlines while parsing\n\n\n\n\n\n"
},

{
    "location": "#LocalOpts-1",
    "page": "Home",
    "title": "LocalOpts",
    "category": "section",
    "text": "TextParse.LocalOpts"
},

]}
