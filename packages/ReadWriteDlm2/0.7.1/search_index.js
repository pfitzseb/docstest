var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ReadWriteDlm2-1",
    "page": "Readme",
    "title": "ReadWriteDlm2",
    "category": "section",
    "text": ""
},

{
    "location": "#CSV-IO-Supporting-Decimal-Comma,-Date,-DateTime,-Time,-Complex,-Missing-and-Rational-1",
    "page": "Readme",
    "title": "CSV IO Supporting Decimal Comma, Date, DateTime, Time, Complex, Missing and Rational",
    "category": "section",
    "text": "(Image: ReadWriteDlm2) (Image: ReadWriteDlm2) (Image: Build Status)   (Image: Build status)  (Image: codecov.io)ReadWriteDlm2 functions readdlm2(), writedlm2(), readcsv2() and writecsv2() are similar to those of stdlib.DelimitedFiles, but with additional support for Date, DateTime, Time, Complex, Rational, Missing types and special decimal marks.For \"decimal dot\" users the functions readcsv2() and writecsv2() have the respective defaults: Delimiter is \',\' (fixed) and decimal=\'.\'.\nThe basic idea of readdlm2() and writedlm2() is to support the decimal comma countries. These functions use \';\' as default delimiter and \',\' as default decimal mark. \"Decimal dot\" users of these functions need to define decimal=\'.\'.\nThis documentation is for Julia 0.7 (-> Julia 0.6)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered and can be installed within the Pkg REPL-mode: Type ] in the REPL and then:pkg> add ReadWriteDlm2"
},

{
    "location": "#Basic-Example([-more](#more-examples)):-How-To-Use-ReadWriteDlm2-1",
    "page": "Readme",
    "title": "Basic Example(-> more): How To Use ReadWriteDlm2",
    "category": "section",
    "text": "julia> using ReadWriteDlm2, Dates               # activate modules ReadWriteDlm2 und Dates\n\njulia> a = Any[1 1.2; \"text\" Date(2017,1,1)];   # create array with: Int, Float64, String and Date type\n\njulia> writedlm2(\"test.csv\", a)                 # test.csv(decimal comma): \"1;1,2\\ntext;2017-01-01\\n\"\n\njulia> readdlm2(\"test.csv\")                     # read `CSV` data: All four types are parsed correctly!\n2×2 Array{Any,2}:\n 1        1.2\n  \"text\"   2017-01-01"
},

{
    "location": "#Function-readdlm2()-1",
    "page": "Readme",
    "title": "Function readdlm2()",
    "category": "section",
    "text": "Read a matrix from source. The source can be a text file, stream or byte array. Each line, separated by eol (default is \'\\n\'), gives one row. The columns are separated by \';\', another delim can be defined.readdlm2(source; options...)\nreaddlm2(source, T::Type; options...)\nreaddlm2(source, delim::Char; options...)\nreaddlm2(source, delim::Char, T::Type; options...)\nreaddlm2(source, delim::Char, eol::Char; options...)\nreaddlm2(source, delim::Char, T::Type, eol::Char; options...)Pre-processing of source with regex substitution changes the decimal marks from d,d to d.d. For default rs the keyword argument decimal=\',\' sets the decimal Char in the r-string of rs. When a special regex substitution tuple rs=(r.., s..) is defined, the argument decimal is not used (  -> Example). Pre-processing can be switched off with: rs=().In addition to stdlib readdlm(), data is also parsed for Dates formats (ISO), theTime format HH:MM[:SS[.s{1,9}]] and for complex and rational numbers. To deactivate parsing dates/time set: dfs=\"\", dtfs=\"\". locale defines the language of day (E, e) and month (U, u) names.The result will be a (heterogeneous) array of default element type Any. Other (abstract) types for the array elements could be defined. If data is empty, a 0×0 Array{T,2} is returned. If dfheader=true instead of header=true, the first row of data will be read as header and returned in a tuple for DataFrames (data_cells::Array{T,2}, header_cells::Array{Symbol,1})."
},

{
    "location": "#Additional-Keyword-Arguments-readdlm2()-1",
    "page": "Readme",
    "title": "Additional Keyword Arguments readdlm2()",
    "category": "section",
    "text": "decimal=\',\': Decimal mark Char used by default rs, irrelevant if rs-tuple is not the default one\nrs=(r\"(\\d),(\\d)\", s\"\\1.\\2\"): Regex (r,s)-tuple, the default change d,d to d.d if decimal=\',\'\ndtfs=\"yyyy-mm-ddTHH:MM:SS.s\": Format string for DateTime parsing\ndfs=\"yyyy-mm-dd\": Format string for Date parsing\nlocale=\"english\": Language for parsing dates names, default is english\ndfheader=false: Return header in format for DataFrames if true\nmissingstring=\"na\": How missing values are represented, default is \"na\""
},

{
    "location": "#Function-readcsv2()-1",
    "page": "Readme",
    "title": "Function readcsv2()",
    "category": "section",
    "text": "readcsv2(source, T::Type=Any; opts...)Equivalent to readdlm2() with delimiter \',\' and decimal=\'.\'."
},

{
    "location": "#Documentation-For-Base-readdlm()-1",
    "page": "Readme",
    "title": "Documentation For Base readdlm()",
    "category": "section",
    "text": "More information about Base functionality and (keyword) arguments - which are also supported by readdlm2() and readcsv2() - is available in the documentation for readdlm()."
},

{
    "location": "#Compare-Default-Functionality-readdlm()-readdlm2()-readcsv2()-1",
    "page": "Readme",
    "title": "Compare Default Functionality readdlm() - readdlm2() - readcsv2()",
    "category": "section",
    "text": "Module Function Delimiter Dec. Mark Element Type Extended Parsing\nDelimitedFiles readdlm() \' \' \'.\' Float64/Any No (String)\nReadWriteDlm2 readdlm2() \';\' \',\' Any Yes\nReadWriteDlm2 readcsv2() \',\' \'.\' Any Yes"
},

{
    "location": "#Function-writedlm2()-1",
    "page": "Readme",
    "title": "Function writedlm2()",
    "category": "section",
    "text": "Write A (a vector, matrix, or an iterable collection of iterable rows) as text to f (either a filename AbstractString or an IO stream). The columns are separated by \';\', another delim (Char or String) can be defined.writedlm2(f, A; options...)\nwritedlm2(f, A, delim; options...)By default, a pre-processing of values takes place. Before writing as strings, decimal marks are changed from \'.\' to \',\'. With a keyword argument another decimal mark can be defined. To switch off this pre-processing set: decimal=\'.\'.In writedlm2() the output format for Date and DateTime data can be defined with format strings. Defaults are the ISO formats. Day (E, e) and month (U, u) names are written in the locale language. For writing Complex numbers the imaginary component suffix can be selected with the imsuffix= keyword argument. "
},

{
    "location": "#Additional-Keyword-Arguments-writedlm2()-1",
    "page": "Readme",
    "title": "Additional Keyword Arguments writedlm2()",
    "category": "section",
    "text": "decimal=\',\': Character for writing decimal marks, default is a comma\ndtfs=\"yyyy-mm-ddTHH:MM:SS.s\": Format string,  DateTime write format\ndfs=\"yyyy-mm-dd\": Format string, Date write format\nlocale=\"english\": Language for writing date names, default is english\nimsuffix=\"im\": Complex - imaginary component suffix \"im\"(=default), \"i\" or \"j\"\nmissingstring=\"na\": How missing values are written, default is \"na\""
},

{
    "location": "#Function-writecsv2()-1",
    "page": "Readme",
    "title": "Function writecsv2()",
    "category": "section",
    "text": "writecsv2(f, A; opts...)Equivalent to writedlm2() with fixed delimiter \',\' and decimal=\'.\'."
},

{
    "location": "#Compare-Default-Functionality-writedlm()-writedlm2()-writecsv2()-1",
    "page": "Readme",
    "title": "Compare Default Functionality writedlm() - writedlm2() - writecsv2()",
    "category": "section",
    "text": "Module Function Delimiter Decimal Mark\nDelimitedFiles writedlm() \'\\t\' \'.\'\nReadWriteDlm2 writedlm2() \';\' \',\'\nReadWriteDlm2 writecsv2() \',\' \'.\'"
},

{
    "location": "#More-Examples-1",
    "page": "Readme",
    "title": "More Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#writecsv2()-And-readcsv2()-1",
    "page": "Readme",
    "title": "writecsv2() And readcsv2()",
    "category": "section",
    "text": "julia> using ReadWriteDlm2\n\njulia> a = Any[1 complex(1.5,2.7);1.0 1//3];   # create array with: Int, Complex, Float64 and Rational type\n\njulia> writecsv2(\"test.csv\", a)                # test.csv(decimal dot): \"1,1.5 + 2.7im\\n1.0,1//3\\n\"\n\njulia> readcsv2(\"test.csv\")                    # read CSV data: All four types are parsed correctly!\n2×2 Array{Any,2}:\n 1    1.5+2.7im\n 1.0    1//3"
},

{
    "location": "#writedlm2()-And-readdlm2()-With-Special-decimal-1",
    "page": "Readme",
    "title": "writedlm2() And readdlm2() With Special decimal=",
    "category": "section",
    "text": "julia> using ReadWriteDlm2\n\njulia> a = Float64[1.1 1.2;2.1 2.2]\n2×2 Array{Float64,2}:\n 1.1  1.2\n 2.1  2.2\n\njulia> writedlm2(\"test.csv\", a; decimal=\'€\')     # \'€\' is decimal Char in \'test.csv\'\n\njulia> readdlm2(\"test.csv\", Float64; decimal=\'€\')      # a) standard: use keyword argument\n2×2 Array{Float64,2}:\n 1.1  1.2\n 2.1  2.2\n\njulia> readdlm2(\"test.csv\", Float64; rs=(r\"(\\d)€(\\d)\", s\"\\1.\\2\"))    # b) more flexible: rs-Regex-Tupel\n2×2 Array{Float64,2}:\n 1.1  1.2\n 2.1  2.2"
},

{
    "location": "#writedlm2()-And-readdlm2()-With-Union{Missing,-Float64}-1",
    "page": "Readme",
    "title": "writedlm2() And readdlm2() With Union{Missing, Float64}",
    "category": "section",
    "text": "julia> using ReadWriteDlm2\n\njulia> a = Union{Missing, Float64}[1.1 0/0;missing 2.2;1/0 -1/0]\n3×2 Array{Union{Missing, Float64},2}:\n   1.1        NaN\n    missing     2.2\n Inf         -Inf\n\njulia> writedlm2(\"test.csv\", a; missingstring=\"???\")     # use \"???\" for missing data\n\njulia> read(\"test.csv\", String)\n\"1,1;NaN\\n???;2,2\\nInf;-Inf\\n\"\n\njulia> readdlm2(\"test.csv\", Union{Missing, Float64}; missingstring=\"???\")\n3×2 Array{Union{Missing, Float64},2}:\n   1.1        NaN\n    missing     2.2\n Inf         -Inf"
},

{
    "location": "#Date-And-DateTime-With-locale\"french\"-1",
    "page": "Readme",
    "title": "Date And DateTime With locale=\"french\"",
    "category": "section",
    "text": "julia> using ReadWriteDlm2, Dates\n\njulia> Dates.LOCALES[\"french\"] = Dates.DateLocale(\n           [\"janvier\", \"février\", \"mars\", \"avril\", \"mai\", \"juin\",\n               \"juillet\", \"août\", \"septembre\", \"octobre\", \"novembre\", \"décembre\"],\n           [\"janv\", \"févr\", \"mars\", \"avril\", \"mai\", \"juin\",\n               \"juil\", \"août\", \"sept\", \"oct\", \"nov\", \"déc\"],\n           [\"lundi\", \"mardi\", \"mercredi\", \"jeudi\", \"vendredi\", \"samedi\", \"dimanche\"],\n           [\"lu\", \"ma\", \"me\", \"je\", \"ve\", \"sa\", \"di\"],\n           );\n\njulia> a = hcat([Date(2017,1,1), DateTime(2017,1,1,5,59,1,898), 1, 1.0, \"text\"])\n5x1 Array{Any,2}:\n  2017-01-01\n  2017-01-01T05:59:01.898\n 1\n 1.0\n  \"text\"\n\njulia> writedlm2(\"test.csv\", a; dfs=\"E, d.U yyyy\", dtfs=\"e, d.u yyyy H:M:S,s\", locale=\"french\")\n\njulia> read(\"test.csv\", String)  # to see what have been written in \"test.csv\" file\n\"dimanche, 1.janvier 2017\\ndi, 1.janv 2017 5:59:1,898\\n1\\n1,0\\ntext\\n\"\n\njulia> readdlm2(\"test.csv\"; dfs=\"E, d.U yyyy\", dtfs=\"e, d.u yyyy H:M:S,s\", locale=\"french\")\n5×1 Array{Any,2}:\n  2017-01-01\n  2017-01-01T05:59:01.898\n 1\n 1.0\n  \"text\""
},

{
    "location": "#readdlm2()-And-DataFrames-(With-Header)-1",
    "page": "Readme",
    "title": "readdlm2() And DataFrames (With Header)",
    "category": "section",
    "text": "See -> DataFrames for installation and more information.julia> using ReadWriteDlm2, Dates, DataFrames\n\njulia> a = [\"date\" \"value\"; Date(2017,1,1) 1.4; Date(2017,1,2) 1.8]\n3×2 Array{Any,2}:\n \"date\"       \"value\"\n 2017-01-01  1.4\n 2017-01-02  1.8\n\njulia> writedlm2(\"test.csv\", a)  # \"date;value\\n2017-01-01;1,4\\n2017-01-02;1,8\\n\"\n\njulia> df = DataFrame(readdlm2(\"test.csv\"; dfheader=true))\n2×2 DataFrame\n│ Row │ date       │ value │\n������������������������������������������\n│ 1   │ 2017-01-01 │ 1.4   │\n│ 2   │ 2017-01-02 │ 1.8   │\n\njulia> mean(df[:value])\n1.6"
},

{
    "location": "autodocs/#ReadWriteDlm2.ReadWriteDlm2",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.ReadWriteDlm2",
    "category": "module",
    "text": "ReadWriteDlm2\n\nReadWriteDlm2 functions readdlm2(), writedlm2(), readcsv2() and writecsv2() are similar to those of stdlib.DelimitedFiles, but with additional support for Date, DateTime, Time, Complex, Rational, Missing types and special decimal marks.\n\nreadcsv2(), writecsv2():\n\nFor \"decimal dot\" users the functions readcsv2() and writecsv2() have the respective defaults: Delimiter is \',\' (fixed) and decimal=\'.\'.\n\nreaddlm2(), writedlm2():\n\nThe basic idea of these functions is to support the \"decimal comma countries\". They use \';\' as default delimiter and \',\' as default decimal mark. \"Decimal dot\" users of these functions need to define decimal=\'.\'\n\nDetailed Documentation:\n\nFor more information about functionality and (keyword) arguments see ?help for readdlm2(), writedlm2(), readcsv2() and writecsv2().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.complexformat",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.complexformat",
    "category": "function",
    "text": "Complexformat(a, decimal::AbstractChar, imsuffix::AbstractString)\n\nConvert Complex number to String, optional change of decimal and/or imsuffix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.dfregex",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.dfregex",
    "category": "function",
    "text": "dfregex(df::AbstractString, locale::AbstractString=\"english\")\n\nCreate a regex string r\"^...$\" for the given Date or DateTime formatstring df.\n\nThe regex groups are named according to the formatstring codes. locale is used to calculate min and max length of month and day names (for codes: UuEe).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.floatformat",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.floatformat",
    "category": "function",
    "text": "floatformat(a, decimal::AbstractChar)\n\nConvert Int or Float64 numbers to String and change decimal mark.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.parseothers",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.parseothers",
    "category": "function",
    "text": "parseothers(y::AbstractString, doparsetime::Bool, doparsecomplex::Bool, doparserational::Bool)\n\nParse string y for Time, Complex and Rational format and if match return the value. Otherwise return the input string y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.readcsv2",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.readcsv2",
    "category": "function",
    "text": "readcsv2(source, T::Type=Any; opts...)\n\nEquivalent to readdlm2() with delimiter \',\' and decimal=\'.\'. Default Type Any activates parsing of Bool, Int, Float64, Complex, Rational, Missing, DateTime, Date and Time.\n\nCode Example\n\njulia> using ReadWriteDlm2\n\njulia> B = Any[1 complex(1.5,2.7);1.0 1//3];\n\njulia> writecsv2(\"test.csv\", B)\n\njulia> readcsv2(\"test.csv\")\n2×2 Array{Any,2}:\n 1    1.5+2.7im\n 1.0    1//3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.readdlm2",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.readdlm2",
    "category": "function",
    "text": "readdlm2(source; options...)\nreaddlm2(source, T::Type; options...)\nreaddlm2(source, delim::AbstractChar; options...)\nreaddlm2(source, delim::AbstractChar, T::Type; options...)\nreaddlm2(source, delim::AbstractChar, eol::AbstractChar; options...)\nreaddlm2(source, delim::AbstractChar, T::Type, eol::AbstractChar; options...)\n\nRead a matrix from source. The source can be a text file, stream or byte array. Each line (separated by eol, this is \'\\n\' by default) gives one row. The columns are separated by \';\', another delim can be defined.\n\nPre-processing of source with regex substitution changes the decimal marks from d,d to d.d. For default rs the keyword argument decimal=\',\' sets the decimal Char in the r-string of rs. When a special regex substitution tuple rs=(r.., s..) is defined, the argument decimal is not used. Pre-processing can be switched off with: rs=().\n\nIn addition to stdlib readdlm(), data is also parsed for Dates formats (ISO), the Time format \"HH:MM[:SS[.s{1,9}]]\" and for complex and rational numbers. To deactivate parsing dates/time set: dfs=\"\", dtfs=\"\". locale defines the language of day (E, e) and month (U, u) names.\n\nThe result will be a (heterogeneous) array of default type Any. Other (abstract) types for the array elements could be defined. If data is empty, a 0×0 Array{T,2} is returned. If dfheader=true instead of header=true is used, the returned tuple (data::Array{T,2}, header::Array{Symbol,1}) fits for DataFrames.\n\nAdditional Keyword Arguments\n\ndecimal=\',\': Decimal mark Char used by default rs, irrelevant if rs-tuple is not the default one\nrs=(r\"(\\d),(\\d)\", s\"\\1.\\2\"): Regex (r,s)-tuple, the default change d,d to d.d if decimal=\',\'\ndtfs=\"yyyy-mm-ddTHH:MM:SS.s\": Format string for DateTime parsing\ndfs=\"yyyy-mm-dd\": Format string for Date parsing\nlocale=\"english\": Language for parsing dates names\ndfheader=false: Return header in DataFrames format if true\nmissingstring=\"na\": How missing values are represented\n\nFind more information about readdlm() functionality and (keyword) arguments -  which are also supported by readdlm2() - in help for readdlm().\n\nCode Example\n\njulia> using ReadWriteDlm2\n\njulia> A = Any[1 1.2; \"text\" missing];\n\njulia> writedlm2(\"test.csv\", A)\n\njulia> readdlm2(\"test.csv\")\n2×2 Array{Any,2}:\n 1        1.2\n  \"text\"   missing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.timeformat",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.timeformat",
    "category": "function",
    "text": "timeformat(a, decimal::AbstractChar)\n\nConvert Time to String, optional with change of decimal mark for secounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.writecsv2",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.writecsv2",
    "category": "function",
    "text": "writecsv2(f, A; opts...)\n\nEquivalent to writedlm2() with fixed delimiter \',\' and decimal=\'.\'.\n\nCode Example\n\njulia> using ReadWriteDlm2\n\njulia> B = Any[1 complex(1.5,2.7);1.0 1//3];\n\njulia> writecsv2(\"test.csv\", B)\n\njulia> read(\"test.csv\", String)\n\"1,1.5 + 2.7im\\n1.0,1//3\\n\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReadWriteDlm2.writedlm2",
    "page": "Docstrings",
    "title": "ReadWriteDlm2.writedlm2",
    "category": "function",
    "text": "writedlm2(f, A; opts...)\nwritedlm2(f, A, delim; opts...)\n\nWrite A (a vector, matrix, or an iterable collection of iterable rows) as text to f(either a filename string or an IO stream). The columns will be separated by \';\', another delim (Char or String) can be defined.\n\nBy default, a pre-processing of values takes place. Before writing as strings, decimal marks are changed from \'.\' to \',\'. With the keyword argument decimal= another decimal mark can be defined. To switch off this pre-processing set: decimal=\'.\'.\n\nIn writedlm2() the output format for Date and DateTime data can be defined with format strings. Defaults are the ISO formats. Day (E, e) and month (U, u) names are written in the locale language. For writing Complex numbers the imaginary component suffix can be selected with the imsuffix= keyword argument.\n\nAdditional Keyword Arguments\n\ndecimal=\',\': Character for writing decimal marks\ndtfs=\"yyyy-mm-ddTHH:MM:SS.s\": DateTime write format\ndfs=\"yyyy-mm-dd\": Date write format\nlocale=\"english\": Language for DateTime writing\nimsuffix=\"im\": Complex Imag suffix \"im\", \"i\" or \"j\"\nmissingstring=\"na\": How missing values are written\n\nCode Example\n\njulia> using ReadWriteDlm2, Dates\n\njulia> A = Any[1 1.2; \"text\" Date(2017)];\n\njulia> writedlm2(\"test.csv\", A)\n\njulia> read(\"test.csv\", String)\n\"1;1,2\\ntext;2017-01-01\\n\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ReadWriteDlm2.ReadWriteDlm2ReadWriteDlm2.complexformatReadWriteDlm2.dfregexReadWriteDlm2.evalReadWriteDlm2.floatformatReadWriteDlm2.includeReadWriteDlm2.parseothersReadWriteDlm2.readcsv2ReadWriteDlm2.readdlm2ReadWriteDlm2.readdlm2autoReadWriteDlm2.timeformatReadWriteDlm2.writecsv2ReadWriteDlm2.writedlm2ReadWriteDlm2.writedlm2auto"
},

]}
