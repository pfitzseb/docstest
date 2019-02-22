var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#uCSV.jl-1",
    "page": "Readme",
    "title": "uCSV.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "First, Install the package(v1.0) pkg> add uCSVThen head on over to the (Image: )!"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "If you find a file you cannot parse after reading through the documentation and would like help, please file an issueIf you find a limitation in capability, a performance bottleneck, a lapse in the documentation, or anything else that you can improve upon, please open a PR"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "MIT"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Contributors"
},

{
    "location": "autodocs/#uCSV.read",
    "page": "Docstrings",
    "title": "uCSV.read",
    "category": "function",
    "text": "read(input;\n     delim=\',\',\n     quotes=missing,\n     escape=missing,\n     comment=missing,\n     encodings=Dict{String, Any}(),\n     header=0,\n     skiprows=Vector{Int}(),\n     types=Dict{Int,DataType}(),\n     allowmissing=Dict{Int,Bool}(),\n     coltypes=Vector,\n     colparsers=Dict{Int,Function}(),\n     typeparsers=Dict{DataType, Function}(),\n     typedetectrows=1,\n     skipmalformed=false,\n     trimwhitespace=false)\n\nTake an input file or IO source and user-defined parsing rules and return:\n\na Vector{Any} containing the parsed columns\na Vector{String} containing the header (column names)\n\nArguments\n\ninput\nthe path to a local file, or an open IO source from which to read data\ndelim\na Char or String that separates fields in the dataset\ndefault: delim=\',\'\nfor CSV files\nfrequently used:\ndelim=\'\\t\'\ndelim=\' \'\ndelim=\'|\'\nquotes\na Char used for quoting fields in the dataset\ndefault: quotes=missing\nby default, the parser does not check for quotes\nfrequently used:\nquotes=\'\"\'\nescape\na Char used for escaping other reserved parsing characters\ndefault: escape=missing\nby default, the parser does not check for escapes\nfrequently used:\nescape=\'\"\'\ndouble-quotes within quotes, e.g. \"firstname \"\"nickname\"\" lastname\"\nescape=\'\\\\\'\nnote that the first backslash is just to escape the second backslash\ne.g. \"firstname \\\"nickname\\\" lastname\"\ncomment\na Char or String at the beginning of lines that should be skipped as comments\nnote that skipped comment lines do not contribute to the line count for the header (if the user requests parsing a header on a specific row) or for skiprows\ndefault: comment=missing\nby default, the parser does not check for comments\nfrequently used:\ncomment=\'#\'\ncomment=\'!\'\ncomment=\"#!\"\nencodings\na Dict{String, Any} mapping parsed fields to Julia values\nif your dataset has booleans that are not represented as \"true\" and \"false\" or missing values that you\'d like to read as missings, you\'ll need to use this!\ndefault: encodings=Dict{String, Any}()\nby default, the parser does not check for any reserved fields\nfrequently used:\nencodings=Dict(\"\" => missing)\nencodings=Dict(\"NA\" => missing)\nencodings=Dict(\"N/A\" => missing)\nencodings=Dict(\"NULL\" => missing)\nencodings=Dict(\"TRUE\" => true, \"FALSE\" => false)\nencodings=Dict(\"True\" => true, \"False\" => false)\nencodings=Dict(\"T\" => true, \"F\" => false)\nencodings=Dict(\"yes\" => true, \"no\" => false)\n... your encodings here ...\ncan include any number of String => value mappings\nnote that if the user requests quotes, escapes, or trimwhitespace, these requests will be applied (removed) the raw string BEFORE checking whether the field matches any strings in in the encodings argument\nheader\nan Int indicating which line of the dataset contains column names or a Vector{String} of column names\nnote that commented lines and blank lines do not contribute to this value e.g. if the first 3 lines of your dataset are comments, you\'ll still need to set header=1 to interpret the first line of parsed data as the header\ndefault: header=0\nno header is checked for by default\nfrequently used:\nheader=1\nskiprows\na Range or Vector of Ints indicating which rows to skip in the dataset\nnote that this is 1-based in reference to the first row AFTER the header. if header=0 or is provided by the user, this will be the first non-empty line in the dataset. otherwise skiprows=1:1 will skip the header+1-nth line in the file\ndefault: skiprows=Vector{Int}()\nno rows are skipped\ntypes\ndeclare the types of the columns\nscalar, e.g. types=Bool\nscalars will be broadcast to apply to every column of the dataset\nvector, e.g. types=[Bool, Int, Float64, String, Symbol, Date, DateTime]\nthe vector length must match the number of parsed columns\ndictionary, e.g. types=(\"column1\" => Bool) or types=(1 => Union{Int, Missing})\nusers can refer to the columns by name (only if a header is provided or parsed!) or by index\ndefault:\ntypes=Dict{Int,DataType}()\ncolumn-types will be interpreted from the dataset\nbuilt-in support for parsing the following:\nInt\nFloat64\nString\nSymbol\nDate – only the default date format will work\nDateTime – only the default datetime format will work\nfor other types or unsupported formats, see colparsers and typeparsers\nallowmissing\ndeclare whether columns should have element-type Union{T, Missing} where T\nboolean scalar, e.g. allowmissing=true\nscalars will be broadcast to apply to every column of the dataset\nvector, e.g. allowmissing=[true, false, true, true]\nthe vector length must match the number of parsed columns\ndictionary, e.g. allowmissing=(\"column1\" => true) or allowmissing=(17 => true)\nusers can refer to the columns by name (only if a header is provided or parsed!) or by index\ndefault: allowmissing=Dict{Int,Bool}()\nAllowing missing values is determined by type detection in rows 1:typedetectrows\ncoltypes\ndeclare the type of vector that should be used for columns\nshould work for any AbstractVector that allows push!ing values\nscalar, e.g. coltypes=CategoricalVector\nscalars will be broadcast to apply to every column of the dataset\nvector, e.g. coltypes=[CategoricalVector, Vector, CategoricalVector]\nthe vector length must match the number of parsed columns\ndictionary, e.g. coltypes=(\"column1\" => CategoricalVector) or coltypes=(17 => CategoricalVector)\nusers can refer to the columns by name (only if a header is provided or parsed!) or by index\ndefault: coltypes=Vector\nall columns are returned as standard julia Vectors\ncolparsers\nprovide custom functions for converting parsed strings to values by column\nscalar, e.g. colparsers=(x -> parse(Float64, replace(x, \',\', \'.\')))\nscalars will be broadcast to apply to every column of the dataset\nvector, e.g. colparsers=[x -> mydateparser(x), x -> mytimeparser(x)]\nthe vector length must match the number of parsed columns\ndictionary, e.g. colparsers=(\"column1\" => x -> mydateparser(x))\nusers can refer to the columns by name (only if a header is provided or parsed!) or by index\ndefault: colparsers=Dict{Int,Function}()\ncolumn parsers are determined based on user-specified types and those detected from the data\ntypeparsers\nprovide custom functions for converting parsed strings to values by column type\nNOTE must be used with coltypes. If you supply a custom Int parser you\'d like to use to parse column 6, you\'ll need to set coltypes=dict(6 => Int) for it to work\ndefault: colparsers=Dict{DataType, Function}()\ncolumn parsers are determined based on user-specified types and those detected from the data\nfrequently used:\ntypeparsers=Dict(Float64 => x -> parse(Float64, replace(x, \',\' => \'.\'))) # decimal-comma floats!\ntypedetectrows\nspecify how many rows of data to read before interpretting the values that each column should take on\ndefault: typedetectrows=1\nmust be >= 1\ncommented, skipped, and empty lines are not counted when determining which rows are used for type detection, e.g. setting typedetectrows=10 and skiprows=1:5 means type detection will occur on rows 6:15\nskipmalformed\nspecify whether the parser should skip a line or fail with an error if a line is parsed but does not contain the expected number of rows\ndefault: skipmalformed=false\nmalformed lines result in an error\ntrimwhitespace\nspecify whether should extra whitespace be removed from the beginning and ends of fields.\ne.g ...., myfield ,...\ntrimwhitespace=false -> \" myfield \"\ntrimwhitespace=true  -> \"myfield\"\nleading and trailing whitespace OUTSIDE of quoted fields is trimmed by default.\ne.g. ...., \" myfield \" ,... -> \" myfield \" when quotes=\'\"\'\ntrimwhitespace=true will also trim leading and trailing whitespace WITHIN quotes\ndefault: trimwhitespace=false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#uCSV.tomatrix",
    "page": "Docstrings",
    "title": "uCSV.tomatrix",
    "category": "function",
    "text": "Convert the data output by uCSV.read to a Matrix. Column names are ignored\n\n\n\n\n\n"
},

{
    "location": "autodocs/#uCSV.tovector",
    "page": "Docstrings",
    "title": "uCSV.tovector",
    "category": "function",
    "text": "Convert the data output by uCSV.read to a Vector. Column names are ignored\n\n\n\n\n\n"
},

{
    "location": "autodocs/#uCSV.write",
    "page": "Docstrings",
    "title": "uCSV.write",
    "category": "function",
    "text": "function write(output;\n               header=missing,\n               data=missing,\n               delim=\',\',\n               quotes=missing,\n               quotetypes=AbstractString)\n\nWrite a dataset to disk or IO\n\nArguments\n\noutput\nthe path on disk or IO where you want to write to\nheader\nthe column names for the data to output\ndefault: header=missing\nno header is written\ndata\nthe dataset to write to output\ndefault: data=missing\nno data is written\ndelim\nthe delimiter to seperate fields by\ndefault: delim=\',\'\nfor CSV files\nfrequently used:\ndelim=\'\\t\'\ndelim=\' \'\ndelim=\'|\'\nquotes\nthe quoting character to use when writing fields\ndefault: quotes=missing\nfields are not quoted by default, and fields are written using julia\'s default string-printing mechanisms\nquotetypes::Type\nwhen quoting fields, quote only columns where coltype <: quotetypes\ncolumns of type Union{<:quotetypes, Missing} will also be quoted\ndefault: quotetypes=AbsractString\nonly the header and fields where coltype <: AbsractString will be quoted\nfrequently used:\nquotetypes=Any\nquote every field in the dataset\n\n\n\n\n\nfunction write(output,\n               df;\n               delim=\',\',\n               quotes=missing,\n               quotetypes=AbstractString)\n\nWrite a DataFrame to disk or IO\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "uCSV.COLMAPuCSV._readlineuCSV.checkfielduCSV.evaluCSV.getintdictuCSV.handlemalformeduCSV.includeuCSV.parsefieldsuCSV.parsesourceuCSV.readuCSV.throwbadbreakuCSV.throwbadconversionuCSV.throwcolumnnumbermismatchuCSV.tomatrixuCSV.tovectoruCSV.uCSVuCSV.write"
},

]}
